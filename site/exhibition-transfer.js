/* Pointer-based model transfer keeps the model image beside the cursor, including fullscreen. */
(()=>{
'use strict';
const $=id=>document.getElementById(id),thumb=$('workspace-model-thumbnail'),viewer=$('generated-sculpture-viewer'),ghost=$('exhibition-drag-ghost');
let candidate=null,captureCache=null,capturePromise=null,ghostUrl='',suppressClick=false;
function available(){const s=window.ExhibitionStudio?.state().model;return !!(s?.loaded&&!s.busy&&!s.stale&&s.jobId&&viewer.src&&!thumb.hidden);}
function enrich(value){const source=window.ExhibitionStudio.captureModel();return {...value,record:source.record,libraryId:source.entry?.ephemeral?null:source.entry?.id||null,composition:window.ExhibitionStudio.getDocument(),camera:SavedSculptures.cameraView(viewer)};}
async function capture(){
 const src=viewer.src;if(!available())throw Error('Generate or open a finished model first.');
 if(captureCache?.src===src)return enrich(captureCache);
 if(capturePromise?.src===src)return enrich(await capturePromise.promise);
 const promise=(async()=>{
  const response=await fetch(src);if(!response.ok)throw Error('The model could not load for placement.');const blob=await response.blob();
  let preview=null;try{preview=await thumb.toBlob({mimeType:'image/png'});}catch{}
  const hash=await crypto.subtle.digest('SHA-256',await blob.arrayBuffer()),id=Array.from(new Uint8Array(hash),n=>n.toString(16).padStart(2,'0')).join('');
  const value={src,id,blob,preview,name:$('model-name').value.trim()||'Generated collage'};
  if(viewer.src===src)captureCache=value;return value;
 })();capturePromise={src,promise};try{return enrich(await promise);}finally{if(capturePromise?.promise===promise)capturePromise=null;}
}
function tell(s){$('exhibition-placement-status').textContent=s;}
function overFloor(e){
 const p=window.ExhibitionWalk?.placement;if(!p)return null;
 return p.hover(e.clientX,e.clientY);
}
function clearGhost(keepTemplate=false){window.ExhibitionWalk?.placement.endDragPreview(keepTemplate);}
function showGhost(e){window.ExhibitionWalk?.placement.updateDragPreview(e);}
function down(e){
 if(e.button!==0||!available())return;
 const source=e.currentTarget.id==='workspace-drag-model'?viewer:thumb;candidate={pointerId:e.pointerId,x:e.clientX,y:e.clientY,started:false,view:{orbit:source.getCameraOrbit(),fov:source.getFieldOfView?.()||35},desc:capture()};
 // Retain the prepared GLB independently of a viewer URL that can later be revoked.
 candidate.desc.catch(error=>tell(error.message));
 window.ExhibitionWalk.suspendNavigation();
}
for(const node of [$('open-model-preview'),$('workspace-drag-model')]){
 node.addEventListener('pointerdown',down);
 node.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopImmediatePropagation();suppressClick=false;}},true);
}
document.addEventListener('pointermove',e=>{
 if(!candidate||candidate.pointerId!==e.pointerId)return;
 if(!candidate.started&&Math.hypot(e.clientX-candidate.x,e.clientY-candidate.y)<6)return;
 if(!candidate.started){
  candidate.started=true;suppressClick=true;
  const active=candidate;
  candidate.desc.then(async desc=>{if(candidate!==active)return;await ExhibitionWalk.placement.beginDragPreview(desc,active.view);if(candidate===active)showGhost(active.lastPointer||e);}).catch(error=>tell(error.message));

 }
 candidate.lastPointer={clientX:e.clientX,clientY:e.clientY};e.preventDefault();showGhost(e);
},{passive:false,capture:true});
async function finish(e){
 if(!candidate||candidate.pointerId!==e.pointerId)return;
 const active=candidate;candidate=null;
 if(!active.started)return;
 e.preventDefault();e.stopImmediatePropagation();
 setTimeout(()=>{suppressClick=false;},0);
 const cell=e.type==='pointercancel'?null:window.ExhibitionWalk.placement.cellAt(e.clientX,e.clientY);
 clearGhost(!!cell?.valid);
 if(!cell?.valid){tell(cell?'This cell is occupied. Choose another cell.':'Drop the model on the exhibition floor.');return;}
 try{const desc={...await active.desc,name:$('model-name').value.trim()||'Generated collage'};await window.ExhibitionWalk.placement.ready;await window.ExhibitionWalk.placement.place(desc,cell);}
 catch(error){tell(error.message);}
 // A browser click may be generated after pointerup; suppress it only for this drag.
 setTimeout(()=>{suppressClick=false;},0);
}
document.addEventListener('pointerup',finish,true);document.addEventListener('pointercancel',finish,true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&candidate){candidate=null;clearGhost();suppressClick=false;}});
window.addEventListener('blur',()=>{candidate=null;clearGhost();suppressClick=false;});
thumb.addEventListener('load',()=>{capture().catch(()=>{});});
viewer.addEventListener('load',()=>{captureCache=null;});
window.ExhibitionTransfer=Object.freeze({state:()=>({dragging:!!candidate?.started,available:available(),captured:!!captureCache}),capture});
})();
