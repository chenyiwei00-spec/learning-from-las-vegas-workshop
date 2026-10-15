import * as THREE from 'three';
import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
import {buildCanopy} from './exhibition-canopy-geometry.js';
import {abstractModelPattern} from './exhibition-canopy-pattern.js';
export function createCanopy({scene,renderer,placement,getView,setView,navigate,invalidate,onSpaceBounds,onSpaceLight}){
 const $=id=>document.getElementById(id),KEY='learning-vegas-continuous-canopy-v2';let result=null,active=false,busy=false,stale=false,error='',signature='',archiveBlob=null;
 const fingerprint=()=>JSON.stringify(placement.spaceSources().map(s=>({id:s.id,modelId:s.modelId,...s.layout})));
 const say=s=>$('exhibition-space-status').textContent=s;
 function ui(){$('exhibition-make-space').disabled=busy||!placement.state().modelCount||!!window.ExhibitionAgentDrafts?.state().busy||!!window.ExhibitionAgent?.state().busy;$('exhibition-space-options').hidden=false;$('space-options-empty').hidden=!!result;const label=busy?'Joining...':result?'Update space':'Make space';$('exhibition-make-space').textContent=busy?'...':'+';$('exhibition-make-space').title=label;$('exhibition-make-space').setAttribute('aria-label',label);$('exhibition-space-keyword').textContent=label.toUpperCase();$('exhibition-space-original').hidden=!result;$('exhibition-space-original').textContent=active?'Original models':'Show space';$('exhibition-space-original').disabled=busy;$('exhibition-enter-space').hidden=!result||!active;$('exhibition-export-space').hidden=!result;$('exhibition-export-space').disabled=busy;$('walk-surface').dataset.spacePreview=String(active);}
 window.addEventListener('exhibition-draft-queue-change',ui);window.addEventListener('exhibition-agent-change',ui);
 function visibility(value){active=!!value&&!!result;if(result)result.group.visible=active;placement.showSources(!active,{keepFootprints:active});ui();onSpaceLight?.(result,active);invalidate();try{localStorage.setItem(KEY,JSON.stringify({active,signature}));}catch{}}
 function appearanceMap(source){
  const scene=new THREE.Scene();scene.background=null;const copy=source.object.clone(true);source.object.updateWorldMatrix(true,true);copy.matrix.copy(source.object.matrixWorld);copy.matrixAutoUpdate=false;scene.add(copy);const captureMaterials=[];copy.traverse(o=>{if(o.isMesh){const originals=Array.isArray(o.material)?o.material:[o.material];const ms=originals.map(m=>{const c=new THREE.MeshBasicMaterial({map:m.map,color:m.color,vertexColors:m.vertexColors,transparent:m.transparent,opacity:m.opacity,alphaMap:m.alphaMap,alphaTest:m.alphaTest,side:THREE.DoubleSide,toneMapped:false});captureMaterials.push(c);return c;});o.material=Array.isArray(o.material)?ms:ms[0];}});
  const b=new THREE.Box3().setFromObject(copy),size=b.getSize(new THREE.Vector3()),c=b.getCenter(new THREE.Vector3()),width=Math.max(size.x,size.z)*1.08,height=size.y*1.08,angle=source.layout.rotation||0,cam=new THREE.OrthographicCamera(-width/2,width/2,height/2,-height/2,.01,100);
  cam.position.copy(c).add(new THREE.Vector3(Math.sin(angle)*20,0,Math.cos(angle)*20));cam.lookAt(c);
  const w=512,h=512,target=new THREE.WebGLRenderTarget(w,h);target.texture.colorSpace=THREE.SRGBColorSpace;const old=renderer.getRenderTarget(),oldColour=renderer.getClearColor(new THREE.Color()).clone(),oldAlpha=renderer.getClearAlpha(),pixels=new Uint8Array(w*h*4);
  try{renderer.setRenderTarget(target);renderer.setClearColor(0x000000,0);renderer.render(scene,cam);renderer.readRenderTargetPixels(target,0,0,w,h,pixels);const pattern=abstractModelPattern(pixels,w,h,{seed:source.modelId,size:1024});const map=new THREE.DataTexture(pattern.pixels,pattern.width,pattern.height);map.userData={sourceModelId:source.modelId,kind:'source-weathered-texels-v4',naturalMaterial:true,photographicTiles:false,backgroundRemoved:true,foregroundCount:pattern.foregroundCount};map.colorSpace=THREE.SRGBColorSpace;map.flipY=false;map.needsUpdate=true;return map;}finally{renderer.setClearColor(oldColour,oldAlpha);renderer.setRenderTarget(old);target.dispose();captureMaterials.forEach(m=>m.dispose());invalidate();}
 }
 async function generate(){if(busy||window.ExhibitionAgentDrafts?.state().busy||window.ExhibitionAgent?.state().busy)return false;await placement.ready;busy=true;error='';ui();const key=fingerprint();let next;const captured=placement.spaceSources(),maps=[];
  try{for(const s of captured){s.surfaceMap=appearanceMap(s);maps.push(s.surfaceMap);await new Promise(r=>requestAnimationFrame(r));}next=await buildCanopy(captured,{onProgress:say});if(key!==fingerprint())throw Error('The layout changed. Make space again.');if(result){scene.remove(result.group);result.dispose();}result=next;next=null;scene.add(result.group);onSpaceBounds?.(result.bounds);signature=key;archiveBlob=null;stale=false;visibility(true);say('SPACE READY / 2 M+ CLEARANCE');
   if(window.ExhibitionArchives){try{await ExhibitionArchives.saveSpace(await captureArchive());say('SPACE READY / SAVED TO SPACES');}catch(e){say('SPACE READY / COULD NOT SAVE: '+e.message);}}return true;}
  catch(e){next?.dispose();error=e.message;say(error);return false;}finally{maps.forEach(m=>m.dispose());busy=false;ui();}
 }
 function enter(){if(!result)return;let target=null;const b=result.bounds;
  for(let z=b.min.z+.7;z<b.max.z-.7;z+=.45)for(let x=b.min.x+.7;x<b.max.x-.7;x+=.45){if(result.footprintAt(x,z)>-.45||result.roofAt(x,z)<1.95)continue;if(result.pillars.some(p=>Math.hypot(x-p.x,z-p.z)<result.radialAt(p,1.65)+.55&&p.height>1.3))continue;const score=Math.hypot(x-result.centre.x,z-result.centre.z);if(!target||score<target.score)target={x,z,score};}
  if(!target){say('Not enough headroom: enlarge the source models, then update space.');return;}visibility(true);setView('room');const focus=result.pillars.reduce((a,b)=>a.height>b.height?a:b);navigate({x:target.x,z:target.z,y:1.65,yaw:Math.atan2(target.x-focus.x,target.z-focus.z),pitch:.28});say('SPACE / WASD TO WALK');
 }
 function constrain(position,radius=.35){if(!active||!result)return position;for(let pass=0;pass<3;pass++){
  for(const p of result.pillars){if(position.y>p.baseY+p.height+.15)continue;const section=result.sectionAt(p,position.y),r=Math.max(section.rx,section.rz)+radius,dx=position.x-section.x,dz=position.z-section.z,d=Math.hypot(dx,dz);if(d<r){position.x=section.x+(d?dx/d:1)*(r+.001);position.z=section.z+(d?dz/d:0)*(r+.001);}}
  for(const s of result.branches){const source=result.pillars.find(p=>p.id===s.sourcePlacementId);if(position.y<2.2&&source&&(Math.abs(position.x-source.x)>source.footprintSpan+radius||Math.abs(position.z-source.z)>source.footprintSpan+radius))continue;const a=s.a,b=s.b,maxR=Math.max(s.r0,s.r1)+radius;if(position.y<Math.min(a[1],b[1])-maxR||position.y>Math.max(a[1],b[1])+maxR)continue;const dy=b[1]-a[1],t=Math.abs(dy)>1e-5?Math.max(0,Math.min(1,(position.y-a[1])/dy)):0,cx=a[0]+(b[0]-a[0])*t,cz=a[2]+(b[2]-a[2])*t,r=s.r0+(s.r1-s.r0)*t+radius,dx=position.x-cx,dz=position.z-cz,d=Math.hypot(dx,dz);if(d<r){position.x=cx+(d?dx/d:1)*(r+.001);position.z=cz+(d?dz/d:0)*(r+.001);}}
 }return position;}


 async function captureArchive(){
  if(!result)throw Error('Generate a space first.');
  const previous=result.group.visible;result.group.visible=true;
  try{
   if(!archiveBlob)archiveBlob=new Blob([await new GLTFExporter().parseAsync(result.group,{binary:true})],{type:'model/gltf-binary'});
   const b=result.bounds,size=b.getSize(new THREE.Vector3()),centre=b.getCenter(new THREE.Vector3()),radius=size.length(),cam=new THREE.PerspectiveCamera(35,1,.01,radius*10+100);
   cam.position.copy(centre).add(new THREE.Vector3(radius*.95,radius*.7,radius*.95));cam.lookAt(centre);
   const captureScene=new THREE.Scene();captureScene.background=new THREE.Color(0xf2f2f2);captureScene.environment=scene.environment;
   captureScene.add(new THREE.HemisphereLight(0xffffff,0x929da8,2));const light=new THREE.DirectionalLight(0xffffff,2);light.position.set(30,40,25);captureScene.add(light);captureScene.add(result.group.clone(true));
   const target=new THREE.WebGLRenderTarget(640,640);target.texture.colorSpace=THREE.SRGBColorSpace;const old=renderer.getRenderTarget(),pixels=new Uint8Array(640*640*4);
   try{renderer.setRenderTarget(target);renderer.render(captureScene,cam);renderer.readRenderTargetPixels(target,0,0,640,640,pixels);}finally{renderer.setRenderTarget(old);target.dispose();}
   const canvas=document.createElement('canvas');canvas.width=canvas.height=640;const ctx=canvas.getContext('2d'),data=ctx.createImageData(640,640);
   for(let y=0;y<640;y++)data.data.set(pixels.subarray((639-y)*640*4,(640-y)*640*4),y*640*4);ctx.putImageData(data,0,0);
   const preview=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('Space preview unavailable')),'image/png'));
   return {glb:archiveBlob,preview,signature,triangles:result.triangles,camera:{orbit:{theta:Math.PI/4,phi:Math.atan2(Math.sqrt(2)*.95,.7),radius:cam.position.distanceTo(centre)},target:{x:centre.x,y:centre.y,z:centre.z},fieldOfView:35},layout:placement.state().models.map(({id,modelId,col,row,span,scale,rotation,offsetX,offsetZ})=>({id,modelId,col,row,span,scale,rotation,offsetX,offsetZ}))};
  }finally{result.group.visible=previous;invalidate();}
 }
 async function exportGLB(){if(!result||busy)return;busy=true;ui();say('Preparing GLB...');try{const {glb}=await captureArchive();const url=URL.createObjectURL(glb),a=document.createElement('a');a.href=url;a.download='learning-from-las-vegas-canopy.glb';a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);say('SPACE EXPORTED / GLB');}catch(e){say(e.message);}finally{busy=false;ui();invalidate();}}

 $('exhibition-make-space').onclick=generate;$('exhibition-space-original').onclick=()=>visibility(!active);$('exhibition-enter-space').onclick=enter;$('exhibition-export-space').onclick=exportGLB;
 window.addEventListener('exhibition-placement-change',()=>{if(result&&fingerprint()!==signature){stale=true;visibility(false);say('LAYOUT CHANGED / UPDATE SPACE');}ui();});
 const ready=placement.ready.then(async()=>{ui();try{const r=JSON.parse(localStorage.getItem(KEY)||'null');if(r?.active&&r.signature===fingerprint())await generate();}catch{}});
 return Object.freeze({ready,generate,captureArchive,enter,showOriginal:()=>visibility(false),showSpace:()=>visibility(true),constrain,collisionMeshes:()=>active&&result?result.meshes:[],exportGLB,state:()=>({active,busy,stale,error,signature,triangles:result?.triangles||0,lowestBranch:result?.lowestBranch??null,textureResolution:1024,materialBlend:true,thickness:result?.thickness||0,connected:result?.roofConnected||false,pillars:result?.pillars||[],minimumClearance:2,clearance:result?.clearance||0,bounds:result?{min:result.bounds.min.toArray(),max:result.bounds.max.toArray()}:null}),dispose:()=>{if(result){scene.remove(result.group);result.dispose();result=null;}}});
}
