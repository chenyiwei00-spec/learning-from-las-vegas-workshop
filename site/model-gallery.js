/* Saved-model browsing: a stationary render surface and eased model-only slides. */
(()=>{
'use strict';
function attach(viewer,{frame,fitCamera,applyCamera,onChange,listEntries=null,onNavigate=null}){
 let entry=null,phase='idle',ids=[],index=-1,ticket=0,raf=0,down=null,panResolve=null,switching=false,buffer=null,progress=0,resumePhase='overview';
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),stage=frame.closest('.model-layout');
 const prev=document.createElement('button'),next=document.createElement('button'),hint=document.createElement('p');
 prev.className='model-gallery-arrow previous';next.className='model-gallery-arrow next';
 prev.hidden=next.hidden=hint.hidden=true;prev.type=next.type='button';prev.textContent='‹';next.textContent='›';
 prev.setAttribute('aria-label','Previous saved model');next.setAttribute('aria-label','Next saved model');
 hint.className='model-gallery-hint';hint.setAttribute('aria-live','polite');frame.append(prev,next,hint);
 const ease=t=>t*t*t*(10+t*(-15+6*t)),mix=(a,b,t)=>a+(b-a)*t;
 function ui(){
  const show=!!entry;prev.hidden=next.hidden=!show;
  hint.hidden=!show||switching;
  prev.disabled=next.disabled=ids.length<2||!['overview','detail'].includes(phase);
  hint.textContent=phase==='overview'?'Click the model to enter your saved view · '+(index+1)+' / '+ids.length:phase==='entering'?'Saved view · '+(index+1)+' / '+ids.length:phase==='detail'?'Saved view · '+(index+1)+' / '+ids.length:'';
  frame.dataset.galleryPhase=phase;stage.dataset.gallerySwitching=String(switching);onChange();
 }
 function freezeRotation(){
  if(!viewer.autoRotate)return Promise.resolve();
  const pose=SavedSculptures.cameraView(viewer),rotation=viewer.turntableRotation||0;
  viewer.autoRotate=false;pose.orbit.theta-=rotation;applyCamera(pose);
  // Commit the compensated camera before clearing turntable yaw, in the same paint.
  return viewer.updateComplete.then(()=>{viewer.resetTurntableRotation(0);applyCamera(pose);viewer.jumpCameraToGoal();});
 }
 function stop(freeze=true){const settled=freeze?freezeRotation():Promise.resolve();if(!freeze){viewer.autoRotate=false;viewer.resetTurntableRotation(0);}ticket++;cancelAnimationFrame(raf);raf=0;if(panResolve){panResolve(false);panResolve=null;}return settled;}
 function reset(preserveSwitch=false){stop(false);if(!preserveSwitch)disposeBuffer();entry=null;phase='idle';ids=[];index=-1;switching=preserveSwitch;viewer.style.transform='';viewer.style.visibility='';viewer.style.opacity=buffer?'0':'';viewer.cameraControls=true;ui();}
 function beginBrowse(){if(['overview','detail'].includes(phase))resumePhase=phase;switching=true;phase='preparing';ui();}
 function cancelBrowse(){stop(false);disposeBuffer();switching=false;phase=entry?resumePhase:'idle';viewer.cameraControls=phase==='detail'||!entry;ui();}
 async function set(entryValue){
  reset(true);entry=entryValue;phase='loading';viewer.cameraControls=false;ui();
  const run=ticket,visible=[...document.querySelectorAll('#saved-model-grid [data-saved]')].map(e=>e.dataset.saved);
  const rows=listEntries?(await listEntries()).map(e=>e.id):visible.includes(entry.id)?visible:(await SavedSculptures.list()).map(e=>e.id);
  if(run!==ticket)return;ids=rows;index=ids.indexOf(entry.id);ui();
 }
 function slideDistance(camera){
  const d=viewer.getDimensions(),diagonal=Math.hypot(d.x,d.y,d.z);
  const height=2*camera.orbit.radius*Math.tan(camera.fieldOfView*Math.PI/360);
  // The object clears the full fixed render surface, including very close-up views.
  return height*(viewer.clientWidth/Math.max(1,viewer.clientHeight))+diagonal*1.6;
 }
 function shifted(camera,amount){
  const pose=structuredClone(camera),theta=camera.orbit.theta;
  pose.target.x+=Math.cos(theta)*amount;pose.target.z-=Math.sin(theta)*amount;
  return pose;
 }
 async function pan(base,from,to,duration,reveal=false){
  const run=ticket,first=shifted(base,from);applyCamera(first);await viewer.updateComplete;
  if(run!==ticket)return false;viewer.jumpCameraToGoal();if(reveal)viewer.style.visibility='';
  const started=performance.now();
  return new Promise(resolve=>{
   panResolve=resolve;
   const tick=async now=>{
    if(run!==ticket)return;const raw=Math.min(1,(now-started)/(reduced.matches?1:duration));
    applyCamera(shifted(base,mix(from,to,ease(raw))));await viewer.updateComplete;
    if(run!==ticket)return;viewer.jumpCameraToGoal();
    if(raw<1)raf=requestAnimationFrame(tick);else{panResolve=null;resolve(true);}
   };raf=requestAnimationFrame(tick);
  });
 }
 function disposeBuffer(){
  if(!buffer)return;const old=buffer;buffer=null;old.cancel?.();old.viewer.remove();
  if(!old.transferred)URL.revokeObjectURL(old.url);stage.dataset.galleryOverlap='false';
 }
 async function prepare(value,direction){
  await stop();disposeBuffer();progress=0;
  if(!entry||!direction){phase=entry?'overview':'idle';ui();return true;}
  phase='preparing';viewer.cameraControls=false;switching=true;ui();
  const run=ticket,other=viewer.cloneNode(false);other.removeAttribute('id');other.removeAttribute('hidden');
  other.className='model-gallery-buffer';other.style.transform='';other.style.visibility='';other.style.opacity='0';other.cameraControls=false;other.autoRotate=false;
  other.setAttribute('aria-hidden','true');other.setAttribute('tabindex','-1');other.removeAttribute('src');
  const valueBuffer={id:value.id,url:URL.createObjectURL(value.glb),viewer:other,ready:false,transferred:false,complete:false};
  buffer=valueBuffer;frame.insertBefore(other,prev);
  const loaded=await new Promise((resolve,reject)=>{
   let done=false;const finish=(ok,error)=>{if(done)return;done=true;clearTimeout(timer);other.removeEventListener('load',load);other.removeEventListener('error',failed);valueBuffer.cancel=null;error?reject(error):resolve(ok);};
   const load=async event=>{if(event.detail?.url!==valueBuffer.url)return;fitCamera(other);await other.updateComplete;if(buffer!==valueBuffer||run!==ticket){finish(false);return;}other.jumpCameraToGoal();valueBuffer.pose=SavedSculptures.cameraView(other);
    const start=shifted(valueBuffer.pose,-Math.sign(direction)*edgeDistance(other,valueBuffer.pose,Math.sign(direction)));
    if(!await paintHidden(other,start,run)){finish(false);return;}valueBuffer.ready=true;finish(true);};
   const failed=()=>finish(false,Error('The next saved model could not load.'));
   const timer=setTimeout(()=>finish(false,Error('The next saved model took too long to load.')),60000);
   valueBuffer.cancel=()=>finish(false);other.addEventListener('load',load);other.addEventListener('error',failed);other.src=valueBuffer.url;
  });
  return loaded&&run===ticket;
 }
 async function paintHidden(renderer,pose,run){
  // Keep the scene in the render loop, but hide its stale canvas until the new camera is painted.
  renderer.style.opacity='0';renderer.style.visibility='';applyCamera(pose,renderer);
  await renderer.updateComplete;if(run!==ticket)return false;
  renderer.jumpCameraToGoal();await renderer.updateComplete;
  await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  return run===ticket;
 }
 function edgeDistance(renderer,camera,side){
  const bounds=renderer.getBoundingClientRect(),area=frame.getBoundingClientRect(),centre=bounds.left+bounds.width/2;
  const metresPerPixel=2*camera.orbit.radius*Math.tan(camera.fieldOfView*Math.PI/360)/Math.max(1,bounds.height);
  const d=renderer.getDimensions(),diagonal=Math.hypot(d.x,d.y,d.z);
  const edge=side<0?centre-area.left:area.right-centre;
  const margin=camera.orbit.radius<diagonal?diagonal*1.6:diagonal*.72;
  return Math.max(0,edge)*metresPerPixel+margin+metresPerPixel*24;
 }
 async function slideOut(direction){
  if(!entry||!direction)return;
  // Both actual meshes are already decoded before either starts to move.
  if(!buffer?.ready)throw Error('The next model is not ready for its transition.');
  await stop();const run=ticket,other=buffer.viewer,otherBuffer=buffer,sign=Math.sign(direction);
  switching=true;phase='preparing';viewer.cameraControls=false;ui();
  const base=SavedSculptures.cameraView(viewer),incoming=otherBuffer.pose;
  const distanceOut=edgeDistance(viewer,base,-sign),distanceIn=edgeDistance(other,incoming,sign);
  if(!await paintHidden(other,shifted(incoming,-sign*distanceIn),run))return;
  other.style.opacity='1';stage.dataset.galleryOverlap='true';phase='leaving';ui();
  const started=performance.now(),duration=reduced.matches?1:1200;
  await new Promise(resolve=>{
   panResolve=resolve;
   const tick=async now=>{
    if(run!==ticket)return;const raw=Math.min(1,(now-started)/duration),t=ease(raw);progress=raw;
    applyCamera(shifted(base,sign*distanceOut*t));applyCamera(shifted(incoming,-sign*distanceIn*(1-t)),other);
    await Promise.all([viewer.updateComplete,other.updateComplete]);if(run!==ticket)return;
    viewer.jumpCameraToGoal();other.jumpCameraToGoal();
    if(raw<1)raf=requestAnimationFrame(tick);else{viewer.style.visibility='hidden';otherBuffer.complete=true;panResolve=null;resolve(true);}
   };raf=requestAnimationFrame(tick);
  });
 }
 async function ready(direction=0){
  if(!entry)return;const run=ticket;phase='arriving';viewer.cameraControls=false;viewer.style.opacity='0';viewer.style.visibility='';ui();
  if(buffer?.id===entry.id&&buffer.complete){
   // Keep the incoming mesh visible until the primary viewer has its first frame.
   if(!await paintHidden(viewer,buffer.pose,run))return;
   viewer.style.opacity='1';disposeBuffer();
  }else{
   const pose=SavedSculptures.cameraView(viewer);if(!await paintHidden(viewer,pose,run))return;viewer.style.opacity='1';
  }
  if(run!==ticket)return;overview();
 }
 function overview(){
  if(!entry)return;stop(false);fitCamera();switching=false;phase='overview';viewer.style.visibility='';viewer.style.opacity='1';viewer.cameraControls=false;ui();
  viewer.resetTurntableRotation(0);viewer.autoRotateDelay=0;viewer.rotationPerSecond=reduced.matches?'0deg':'15deg';viewer.autoRotate=!reduced.matches;

 }
 function normaliseCamera(value,fallback){
  if(typeof value==='string'){
   const parts=value.trim().split(/\s+/);if(parts.length!==3)return null;
   const angle=(s,base)=>s==='auto'?base:parseFloat(s)*(s.endsWith('rad')?1:Math.PI/180),radius=parts[2]==='auto'?fallback.orbit.radius:parseFloat(parts[2]);
   value={...fallback,orbit:{theta:angle(parts[0],fallback.orbit.theta),phi:angle(parts[1],fallback.orbit.phi),radius}};
  }
  if(!value?.orbit||![value.orbit.theta,value.orbit.phi,value.orbit.radius].every(Number.isFinite)||value.orbit.radius<=0)return null;
  return {...fallback,...value,target:value.target||fallback.target};
 }
 async function enter(){
  if(phase!=='overview'||!entry)return;phase='entering';ui();await stop();const run=ticket,from=SavedSculptures.cameraView(viewer);let to=entry.camera||from;
  const destination=normaliseCamera(to,from);
  if(!destination){phase='detail';viewer.cameraControls=true;ui();return;}to=destination;
  phase='entering';ui();const started=performance.now(),duration=reduced.matches?1:1350;
  // Follow only the shortest angular path; no decorative full revolution.
  const turn=Math.atan2(Math.sin(to.orbit.theta-from.orbit.theta),Math.cos(to.orbit.theta-from.orbit.theta));
  const tick=async now=>{
   if(run!==ticket)return;const raw=Math.min(1,(now-started)/duration),t=ease(raw),target=to.target||from.target;
   applyCamera({orbit:{theta:from.orbit.theta+turn*t,phi:mix(from.orbit.phi,to.orbit.phi,t),radius:Math.exp(mix(Math.log(from.orbit.radius),Math.log(to.orbit.radius),t))},
    target:{x:mix(from.target.x,target.x,t),y:mix(from.target.y,target.y,t),z:mix(from.target.z,target.z,t)},fieldOfView:mix(from.fieldOfView,to.fieldOfView||from.fieldOfView,t)});
   await viewer.updateComplete;if(run!==ticket)return;viewer.jumpCameraToGoal();
   if(raw<1)raf=requestAnimationFrame(tick);else{applyCamera(to);await viewer.updateComplete;if(run!==ticket)return;viewer.jumpCameraToGoal();phase='detail';viewer.cameraControls=true;ui();}
  };raf=requestAnimationFrame(tick);
 }
 async function navigate(direction){
  if(!entry||ids.length<2||!['overview','detail'].includes(phase))return;
  resumePhase=phase;phase='preparing';switching=true;ui();await freezeRotation();const pose=SavedSculptures.cameraView(viewer);applyCamera(pose);
  const id=ids[(index+direction+ids.length)%ids.length];if(onNavigate)onNavigate(id,direction);else window.dispatchEvent(new CustomEvent('saved-sculpture-open',{detail:{id,direction}}));
 }
 prev.addEventListener('click',()=>navigate(-1));next.addEventListener('click',()=>navigate(1));
 viewer.addEventListener('pointerdown',e=>{down=e.button===0?{x:e.clientX,y:e.clientY,id:e.pointerId,hit:phase==='overview'&&!!viewer.positionAndNormalFromPoint(e.clientX,e.clientY)}:null;},true);
 viewer.addEventListener('pointercancel',()=>down=null,true);
 viewer.addEventListener('pointerup',e=>{
  const start=down;down=null;if(phase!=='overview'||!start||start.id!==e.pointerId||Math.hypot(start.x-e.clientX,start.y-e.clientY)>6)return;if(start.hit)enter();
 },true);
 document.addEventListener('keydown',e=>{
  if(!entry||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||!['ArrowLeft','ArrowRight'].includes(e.key)||(e.target.closest?.('#walk-surface')&&!e.target.closest?.('#exhibition-model-browser'))||e.target.closest?.('#exhibition-canvas,video,audio,.exhibition-model-media,input,textarea,select,[contenteditable="true"],dialog')||document.querySelector('dialog[open]'))return;
  if(!['overview','detail'].includes(phase))return;e.preventDefault();e.stopImmediatePropagation();navigate(e.key==='ArrowRight'?1:-1);
 },true);
 SavedSculptures.subscribe(async()=>{
  if(!entry)return;const run=ticket,rows=await (listEntries?listEntries():SavedSculptures.list());if(run!==ticket||!entry)return;
  ids=ids.filter(id=>rows.some(e=>e.id===id));if(!ids.includes(entry.id))ids.unshift(entry.id);index=ids.indexOf(entry.id);ui();
 });
 return {set,ready,prepare,slideOut,overview,reset,beginBrowse,cancelBrowse,source:id=>{if(buffer?.id===id&&buffer.ready){buffer.transferred=true;return buffer.url;}return null;},update:value=>{if(entry&&(entry.id===value?.id||entry.ephemeral)){const imported=entry.ephemeral;entry=value;if(listEntries||imported)Promise.resolve(listEntries?listEntries():SavedSculptures.list()).then(rows=>{if(!entry)return;ids=rows.map(e=>e.id);index=ids.indexOf(entry.id);ui();});else ui();}},state:()=>({phase,switching,progress,preparedId:buffer?.id||null,overlap:stage.dataset.galleryOverlap==='true',id:entry?.id||null,index,total:ids.length}),canSave:()=>!entry||phase==='detail'};
}
window.SavedModelGallery=Object.freeze({attach});
})();

