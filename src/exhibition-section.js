import * as THREE from 'three';
import {LineSegments2} from 'three/examples/jsm/lines/LineSegments2.js';
import {LineSegmentsGeometry} from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import {LineMaterial} from 'three/examples/jsm/lines/LineMaterial.js';
// True plane/triangle intersections, rather than all the original mesh edges.
export function sectionSegments(mesh,worldPlane){
 const p=mesh.geometry.attributes.position,index=mesh.geometry.index,local=worldPlane.clone().applyMatrix4(mesh.matrixWorld.clone().invert()),out=[];
 const a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3(),q=new THREE.Vector3(),world=new THREE.Vector3(),vertices=[a,b,c];
 const epsilon=1e-7;
 for(let i=0,n=index?index.count:p.count;i<n;i+=3){
  for(let k=0;k<3;k++)vertices[k].fromBufferAttribute(p,index?index.getX(i+k):i+k);
  const d=vertices.map(v=>local.distanceToPoint(v));if(d.every(v=>v>epsilon)||d.every(v=>v< -epsilon)||d.every(v=>Math.abs(v)<epsilon))continue;
  const hits=[];
  for(let k=0;k<3;k++){const j=(k+1)%3;
   if(Math.abs(d[k])<epsilon)q.copy(vertices[k]);
   else if(d[k]*d[j]<0)q.copy(vertices[k]).lerp(vertices[j],d[k]/(d[k]-d[j]));
   else continue;
   if(!hits.some(v=>v.distanceToSquared(q)<epsilon*epsilon))hits.push(q.clone());
  }
  if(hits.length===2&&hits[0].distanceToSquared(hits[1])>epsilon*epsilon)for(const h of hits){world.copy(h).applyMatrix4(mesh.matrixWorld);out.push(world.x,world.y,world.z);}
 }
 return out;
}
/** Presentation-only translucent stencil caps and opaque contours. */
export function createExhibitionSection({scene,renderer,getMeshes,invalidate}){
 const button=document.getElementById('walk-section'),panel=document.getElementById('walk-section-panel'),range=document.getElementById('walk-section-height'),axis=document.getElementById('walk-section-axis'),output=document.getElementById('walk-section-value');
 const plane=new THREE.Plane(new THREE.Vector3(0,-1,0),0),overlays=new THREE.Group();overlays.name='Axonometric section caps';scene.add(overlays);
 let enabled=false,view='axonometric',ratio=.45,axisName='y',targets=[],saved=new Map(),signature='',caps=0,height=0,disposed=false,lineFrame=0,lineSegments=0;
 renderer.localClippingEnabled=true;
 const materials=mesh=>Array.isArray(mesh.material)?mesh.material:[mesh.material];
 function refreshLines(){
  lineFrame=0;if(disposed||!enabled||view!=='axonometric')return;
  const positions=[];for(const m of targets)positions.push(sectionSegments(m,plane));
  // Float32Array avoids spreading a large triangle result onto the JS stack.
  const count=positions.reduce((n,a)=>n+a.length,0),array=new Float32Array(count);let offset=0;
  for(const a of positions){array.set(a,offset);offset+=a.length;}
  let lines=overlays.getObjectByName('Opaque wall cut lines');
  if(!lines){lines=new LineSegments2(new LineSegmentsGeometry(),new LineMaterial({color:0x222222,linewidth:2,worldUnits:false,toneMapped:false,transparent:false,depthTest:true,depthWrite:false}));lines.name='Opaque wall cut lines';lines.userData.ownsGeometry=true;lines.renderOrder=20000;lines.frustumCulled=false;overlays.add(lines);}
  lines.geometry.dispose();lines.geometry=new LineSegmentsGeometry();lines.geometry.setPositions(array);
  lines.position.copy(plane.normal).multiplyScalar(-.006);lineSegments=count/6;invalidate();
 }
 function release(){
  if(lineFrame)cancelAnimationFrame(lineFrame);lineFrame=0;lineSegments=0;
  for(const [m,v] of saved){m.clippingPlanes=v.planes;m.clipShadows=v.shadows;m.needsUpdate=true;}saved.clear();
  for(const m of targets){if(m.userData.sectionRenderOrder!==undefined){m.renderOrder=m.userData.sectionRenderOrder;delete m.userData.sectionRenderOrder;}}
  targets=[];for(const o of [...overlays.children]){overlays.remove(o);if(o.userData.ownsGeometry)o.geometry.dispose();o.material.dispose();}caps=0;signature='';
 }
 function update(){
  if(disposed)return;
  const active=enabled&&view==='axonometric';button.hidden=view!=='axonometric';panel.hidden=!active;button.setAttribute('aria-pressed',String(active));
  if(!active){release();overlays.visible=false;invalidate();return;}
  const meshes=getMeshes().filter(m=>m.isMesh);for(const m of meshes)m.updateWorldMatrix(true,false);
  const next=meshes.map(m=>m.uuid+':'+m.matrixWorld.elements.join(',')).join('|');
  if(next!==signature){release();targets=meshes;signature=next;
   const bounds=new THREE.Box3();for(const m of targets)bounds.union(new THREE.Box3().setFromObject(m));
   const side=Math.max(10,bounds.getSize(new THREE.Vector3()).length()*1.1);
   for(const mesh of targets){
    for(const m of materials(mesh))if(!saved.has(m)){saved.set(m,{planes:m.clippingPlanes,shadows:m.clipShadows});m.clippingPlanes=[plane];m.clipShadows=false;m.needsUpdate=true;}
    mesh.userData.sectionRenderOrder=mesh.renderOrder;mesh.renderOrder=0;
    // Open scanned decorations are clipped; only closed volumes produce solid caps.
    if(mesh.userData.sourceArchitecture&&!mesh.userData.fusionCore&&!mesh.userData.road)continue;
    const order=100+caps*3;
    for(const [side,op] of [[THREE.BackSide,THREE.IncrementWrapStencilOp],[THREE.FrontSide,THREE.DecrementWrapStencilOp]]){
     const mat=new THREE.MeshBasicMaterial({depthWrite:false,depthTest:false,colorWrite:false,stencilWrite:true,stencilFunc:THREE.AlwaysStencilFunc,stencilFail:op,stencilZFail:op,stencilZPass:op,side,clippingPlanes:[plane]});
     const mask=new THREE.Mesh(mesh.sectionGeometry||mesh.geometry,mat);mask.matrixAutoUpdate=false;mask.matrix.copy(mesh.matrixWorld);mask.renderOrder=order;mask.frustumCulled=false;overlays.add(mask);
    }
    // Custom alpha blending keeps this in the opaque queue so each stencil
    // volume is immediately capped/cleared, after the surviving geometry.
    const mat=new THREE.MeshBasicMaterial({color:0x222222,opacity:mesh.userData.road?1:.22,transparent:false,blending:mesh.userData.road?THREE.NoBlending:THREE.CustomBlending,blendSrc:THREE.SrcAlphaFactor,blendDst:THREE.OneMinusSrcAlphaFactor,blendEquation:THREE.AddEquation,depthWrite:!!mesh.userData.road,toneMapped:false,side:THREE.DoubleSide,stencilWrite:true,stencilRef:0,stencilFunc:THREE.NotEqualStencilFunc,stencilFail:THREE.ReplaceStencilOp,stencilZFail:THREE.ReplaceStencilOp,stencilZPass:THREE.ReplaceStencilOp,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1});
    // Drafting marks are opaque #222, while the continuous fill stays translucent.
    mat.onBeforeCompile=shader=>{
     shader.uniforms.sectionPitch={value:Math.max(.6,side/(mesh.userData.road?80:180))};
     shader.uniforms.sectionRoad={value:mesh.userData.road?1:0};
     shader.vertexShader='varying vec2 cutPatternUV;\n'+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ncutPatternUV=position.xy;');
     shader.fragmentShader='uniform float sectionPitch,sectionRoad;varying vec2 cutPatternUV;\n'+shader.fragmentShader.replace('#include <opaque_fragment>',[
      'vec2 q=cutPatternUV/sectionPitch;',
      'float dotDistance=length(fract(q)-.5);',
      'float dotMask=step(dotDistance,.23);',
      'vec2 gridDistance=abs(fract(q-.5)-.5)/max(fwidth(q),vec2(.0001));',
      'float gridMask=1.-smoothstep(.55,1.0,min(gridDistance.x,gridDistance.y));',
      'float inkMask=mix(dotMask,gridMask,sectionRoad);diffuseColor.a=mix(mix(.13,1.,sectionRoad),1.,inkMask);outgoingLight=mix(diffuse,mix(vec3(.65),diffuse,inkMask),sectionRoad);',
      '#include <opaque_fragment>'
     ].join('\n'));
    };mat.customProgramCacheKey=()=> 'section-opaque-drafting-v4';
    const cap=new THREE.Mesh(new THREE.PlaneGeometry(side,side),mat);cap.name='Translucent cut surface';cap.userData.ownsGeometry=true;cap.userData.sectionCap=true;cap.userData.road=!!mesh.userData.road;cap.renderOrder=order+1;cap.frustumCulled=false;cap.onAfterRender=()=>renderer.clearStencil();overlays.add(cap);caps++;
   }
  }
  if(targets.length){const b=new THREE.Box3();for(const m of targets)b.union(new THREE.Box3().setFromObject(m));height=THREE.MathUtils.lerp(b.min[axisName],b.max[axisName],ratio);plane.normal.set(0,0,0);plane.normal[axisName]=-1;plane.constant=height;
   const c=b.getCenter(new THREE.Vector3());c[axisName]=height;
   for(const o of overlays.children)if(o.userData.sectionCap){o.position.copy(c);o.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),plane.normal);}
  }
  if(!lineFrame)lineFrame=requestAnimationFrame(refreshLines);
  output.textContent=height.toFixed(1)+' m';range.value=String(Math.round(ratio*100));axis.value=axisName;overlays.visible=true;invalidate();
 }
 function set(value){enabled=value.enabled??enabled;ratio=THREE.MathUtils.clamp(value.ratio??ratio,.01,.99);axisName=['x','y','z'].includes(value.axis)?value.axis:axisName;update();}
 panel.addEventListener('pointerdown',e=>e.stopPropagation());
 const toggle=()=>set({enabled:!enabled}),slide=()=>set({ratio:Number(range.value)/100}),changeAxis=()=>set({axis:axis.value});
 button.addEventListener('click',toggle);range.addEventListener('input',slide);axis.addEventListener('change',changeAxis);
 return {refresh:update,set,setViewMode:mode=>{view=mode;update();},state:()=>({enabled,active:enabled&&view==='axonometric',axis:axisName,ratio,height,capColour:'#222222',capOpacity:.22,roadCapOpacity:1,contourOpacity:1,contourWidth:2,wallPattern:'stipple',roadPattern:'grid',patternColour:'#222222',patternOpacity:1,lineSegments,caps,meshCount:targets.length}),dispose:()=>{disposed=true;release();scene.remove(overlays);button.removeEventListener('click',toggle);range.removeEventListener('input',slide);axis.removeEventListener('change',changeAxis);}};
}
