import * as THREE from 'three';
/** Presentation-only section with solid stencil caps; never changes exported/collision geometry. */
export function createExhibitionSection({scene,renderer,getMeshes,invalidate}){
 const button=document.getElementById('walk-section'),panel=document.getElementById('walk-section-panel'),range=document.getElementById('walk-section-height'),axis=document.getElementById('walk-section-axis'),output=document.getElementById('walk-section-value');
 const plane=new THREE.Plane(new THREE.Vector3(0,-1,0),0),overlays=new THREE.Group();overlays.name='Axonometric section caps';scene.add(overlays);
 let enabled=false,view='axonometric',ratio=.45,axisName='y',targets=[],saved=new Map(),signature='',caps=0,height=0,disposed=false;
 renderer.localClippingEnabled=true;
 const materials=mesh=>Array.isArray(mesh.material)?mesh.material:[mesh.material];
 function release(){
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
    mesh.userData.sectionRenderOrder=mesh.renderOrder;mesh.renderOrder=1000;
    // Open scanned decorations are clipped; only closed volumes produce solid caps.
    if(mesh.userData.sourceArchitecture&&!mesh.userData.fusionCore&&!mesh.userData.road)continue;
    const order=caps*3+1;
    for(const [side,op] of [[THREE.BackSide,THREE.IncrementWrapStencilOp],[THREE.FrontSide,THREE.DecrementWrapStencilOp]]){
     const mat=new THREE.MeshBasicMaterial({depthWrite:false,depthTest:false,colorWrite:false,stencilWrite:true,stencilFunc:THREE.AlwaysStencilFunc,stencilFail:op,stencilZFail:op,stencilZPass:op,side,clippingPlanes:[plane]});
     const mask=new THREE.Mesh(mesh.geometry,mat);mask.matrixAutoUpdate=false;mask.matrix.copy(mesh.matrixWorld);mask.renderOrder=order;mask.frustumCulled=false;overlays.add(mask);
    }
    const mat=new THREE.MeshBasicMaterial({color:0x222222,toneMapped:false,side:THREE.DoubleSide,stencilWrite:true,stencilRef:0,stencilFunc:THREE.NotEqualStencilFunc,stencilFail:THREE.ReplaceStencilOp,stencilZFail:THREE.ReplaceStencilOp,stencilZPass:THREE.ReplaceStencilOp,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1});
    const cap=new THREE.Mesh(new THREE.PlaneGeometry(side,side),mat);cap.name='Dark grey cut surface';cap.userData.ownsGeometry=true;cap.renderOrder=order+1;cap.frustumCulled=false;cap.onAfterRender=()=>renderer.clearStencil();overlays.add(cap);caps++;
   }
  }
  if(targets.length){const b=new THREE.Box3();for(const m of targets)b.union(new THREE.Box3().setFromObject(m));height=THREE.MathUtils.lerp(b.min[axisName],b.max[axisName],ratio);plane.normal.set(0,0,0);plane.normal[axisName]=-1;plane.constant=height;
   const c=b.getCenter(new THREE.Vector3());c[axisName]=height;
   for(const o of overlays.children)if(o.userData.ownsGeometry){o.position.copy(c);o.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),plane.normal);}
  }
  output.textContent=height.toFixed(1)+' m';range.value=String(Math.round(ratio*100));axis.value=axisName;overlays.visible=true;invalidate();
 }
 function set(value){enabled=value.enabled??enabled;ratio=THREE.MathUtils.clamp(value.ratio??ratio,.01,.99);axisName=['x','y','z'].includes(value.axis)?value.axis:axisName;update();}
 const toggle=()=>set({enabled:!enabled}),slide=()=>set({ratio:Number(range.value)/100}),changeAxis=()=>set({axis:axis.value});
 button.addEventListener('click',toggle);range.addEventListener('input',slide);axis.addEventListener('change',changeAxis);
 return {refresh:update,set,setViewMode:mode=>{view=mode;update();},state:()=>({enabled,active:enabled&&view==='axonometric',axis:axisName,ratio,height,capColour:'#222222',caps,meshCount:targets.length}),dispose:()=>{disposed=true;release();scene.remove(overlays);button.removeEventListener('click',toggle);range.removeEventListener('input',slide);axis.removeEventListener('change',changeAxis);}};
}
