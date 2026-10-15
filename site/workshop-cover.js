/* Read the cover camera from the same saved model used by Collage Studio. */
(()=>{
'use strict';
const viewer=document.getElementById('cover-model'),stage=document.getElementById('cover-model-stage'),cover=document.getElementById('workshop-cover');
let revision=0,url=null,currentId=null,currentCamera=null,active=false,loaded=false,boot=null;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
function rotation(){viewer.autoRotate=loaded&&active&&!document.hidden&&!reduced.matches;}
function library(){return new Promise((resolve,reject)=>{
 if(customElements.get('model-viewer'))return resolve();
 const script=document.createElement('script');script.src='vendor/model-viewer.js';script.onload=()=>customElements.whenDefined('model-viewer').then(resolve);script.onerror=()=>reject(Error('Cover model viewer unavailable.'));document.head.append(script);
});}
function validCamera(camera){return camera?.orbit&&[camera.orbit.theta,camera.orbit.phi,camera.orbit.radius].every(Number.isFinite)&&camera.orbit.radius>0;}
async function refresh(){
 const run=++revision;try{
  const config=await fetch('cover-config.json').then(r=>{if(!r.ok)throw Error('Cover configuration unavailable.');return r.json();});
  const rows=await SavedSculptures.list(),match=rows.find(row=>row.record?.id===config.modelRecordId)||rows.find(row=>row.title===config.modelTitle);
  if(!match){stage.setAttribute('aria-busy','false');return;}
  const entry=await SavedSculptures.get(match.id);if(run!==revision||!entry)return;
  await (boot||=library());if(run!==revision)return;
  const camera=validCamera(entry.camera)?entry.camera:null;
  if(currentId!==entry.id||!loaded){
   loaded=false;rotation();viewer.dataset.ready='false';
   const display=await ModelPreviewFinish.prepare(entry.glb,{target:entry.record.target});if(run!==revision)return;
   const next=URL.createObjectURL(display),previous=url;url=next;
   ModelPreviewFinish.configure(viewer);
   await new Promise((resolve,reject)=>{const onLoad=()=>{cleanup();resolve();},onError=()=>{cleanup();reject(Error('Cover model could not load.'));},timer=setTimeout(onError,30000);function cleanup(){clearTimeout(timer);viewer.removeEventListener('load',onLoad);viewer.removeEventListener('error',onError);}viewer.addEventListener('load',onLoad);viewer.addEventListener('error',onError);viewer.src=next;});
   if(previous)URL.revokeObjectURL(previous);if(run!==revision)return;
   ModelPreviewFinish.apply(viewer,{target:entry.record.target});currentId=entry.id;loaded=true;
  }
  viewer.autoRotate=false;viewer.resetTurntableRotation(0);
  const dimensions=viewer.getDimensions(),fov=camera?.fieldOfView||30;
  const fallbackRadius=Math.hypot(dimensions.x,dimensions.y,dimensions.z)*.5/Math.sin(fov*Math.PI/360)*1.12;
  const radius=camera?.orbit.radius||fallbackRadius,theta=camera?.orbit.theta||0,phi=camera?.orbit.phi??85*Math.PI/180,target=camera?.target;
  viewer.minCameraOrbit='auto 0.01deg '+radius+'m';viewer.maxCameraOrbit='auto 179.99deg '+radius+'m';
  viewer.fieldOfView=fov+'deg';viewer.cameraTarget=target?[target.x,target.y,target.z].map(v=>v+'m').join(' '):'auto auto auto';
  viewer.cameraOrbit=theta+'rad '+phi+'rad '+radius+'m';viewer.disableZoom=true;viewer.disablePan=true;
  await viewer.updateComplete;viewer.jumpCameraToGoal();await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
  if(run!==revision)return;currentCamera=camera;viewer.dataset.ready='true';stage.setAttribute('aria-busy','false');rotation();
 }catch(error){stage.setAttribute('aria-busy','false');console.warn('Cover preview:',error.message);}
}
function setVisible(value){active=!!value;if(active)refresh();else{revision++;rotation();}}
window.addEventListener('workshop-cover-change',e=>setVisible(e.detail.visible));
document.addEventListener('visibilitychange',rotation);reduced.addEventListener('change',rotation);
window.addEventListener('pagehide',()=>{viewer.autoRotate=false;if(url)URL.revokeObjectURL(url);});
window.WorkshopCover=Object.freeze({refresh,state:()=>({active,loaded,id:currentId,camera:currentCamera})});
SavedSculptures.subscribe(()=>{if(active)refresh();});
setVisible(!cover.hidden);
})();
