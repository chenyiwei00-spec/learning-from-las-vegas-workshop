/* Local TripoSR jobs and a real orbitable mesh preview; the source collage stays off-screen. */
(()=>{
'use strict';
const STORE='borrowed-worlds-local-generated-sculpture-v1';
const hex=v=>/^[a-f0-9]{64}$/.test(String(v));
const stable=v=>typeof v==='number'?Math.round(v*1e6)/1e6:Array.isArray(v)?v.map(stable):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,stable(x)])):v;
async function digest(doc){
 const recipe=doc.layers.map(l=>({sourceId:l.sourceId,objectId:l.objectId||'',vaPartId:l.vaPartId,x:l.x,y:l.y,w:l.w,h:l.h,rotation:l.rotation||0,flipX:!!l.flipX,flipY:!!l.flipY,vaRotation:l.vaRotation||0,strokes:l.strokes,...(l.model3D?{model3D:stable(l.model3D)}:{}),...(l.basis==='sculpture'?{basis:'sculpture',cityRotation:l.cityRotation||0}:{})}));
 return [...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(JSON.stringify({width:doc.width,height:doc.height,recipe,...(doc.view?{view:stable(doc.view)}:{}),...(doc.editingSurface==='sculpture'||doc.modelTarget==='city'?{modelTarget:'city'}:{})}))))].map(n=>n.toString(16).padStart(2,'0')).join('');
}
async function create(options){
 const STORE=options.store||'borrowed-worlds-local-generated-sculpture-v1';
 const $=id=>document.getElementById(id),viewer=$('generated-sculpture-viewer');
 let ready=false,busy=false,record=null,loaded=false,current='',revision=0,job=null,loadingError=false,lastError='',saving=false,epoch=0,restoreRevision=0,libraryEntry=null;
 let pendingReveal=false;let meshUrl=null,meshTicket=0,pendingCamera=null,activeRecipe=null,incomingDirection=0;
 const gallery=SavedModelGallery.attach(viewer,{frame:$('model-frame'),fitCamera,applyCamera,onChange:()=>{if(status)render();},listEntries:options.browseEntries});
 async function loadMesh(input){
  const ticket=++meshTicket;
  try{
   const prepared=typeof input==='string'&&input.startsWith('blob:');
   const blob=prepared?null:input instanceof Blob?input:await fetch(input,{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Model file could not load.');return r.blob();});
   const enhanced=prepared?null:await ModelColour.enhance(blob);if(ticket!==meshTicket)return;const old=meshUrl;meshUrl=prepared?input:URL.createObjectURL(enhanced);viewer.src=meshUrl;if(old&&old!==meshUrl)setTimeout(()=>URL.revokeObjectURL(old),3000);
  }catch(error){if(ticket===meshTicket){loadingError=true;lastError=error.message;status.textContent=lastError;render();}}
 }
 function clearMesh(){meshTicket++;const previous=meshUrl;meshUrl=null;if(previous)setTimeout(()=>URL.revokeObjectURL(previous),3000);}

 const interaction=ModelInteraction.attach($('model-stage'),viewer,{fullscreenButton:$('model-fullscreen'),zoomButton:$('model-zoom-toggle'),note:$('model-wheel-note')});
 const empty=$('model-empty'),status=$('model-status'),generate=$('generate-model');
 function valid(r){return r&&hex(r.id)&&hex(r.fingerprint)&&r.modelUrl==='assets/generated-sculptures/'+r.id+'/sculpture.glb';}
 function persist(){try{if(record)localStorage.setItem(STORE,JSON.stringify(record));}catch{}}
 function render(){
  const doc=options.getDocument(),city=doc.editingSurface==='sculpture',has=doc.layers.length>0,same=!!libraryEntry||record?.fingerprint===current;
  $('model-saved-name').hidden=!libraryEntry;$('model-saved-name').textContent=libraryEntry?libraryEntry.title+' / '+(libraryEntry.group||'Ungrouped'):'';
  $('model-description').hidden=!!libraryEntry;
  $('model-direction').textContent=(record?.target==='city'?'LAS VEGAS':record?'V&A SCULPTURE':city?'LAS VEGAS':'V&A SCULPTURE')+' / 3D';$('model-description').innerHTML=city?'Generate a volume from the Las Vegas collage.<br>Drag to rotate. Click the grey area to enable wheel zoom.':'Generate a volume from your assembled V&A fragments.<br>Drag to rotate. Click the grey area to enable wheel zoom.';
  generate.disabled=!ready||busy||!has||!!options.isPreview?.();generate.textContent=busy?'Generating…':record?'Generate updated 3D ↗':'Generate 3D ↗';
  $('save-model').disabled=!record||(!has&&!libraryEntry)||!loaded||!same||busy||saving||!gallery.canSave();$('save-model').textContent=saving?'Saving…':libraryEntry&&!libraryEntry.ephemeral?'Save changes':'Save model +';
  $('download-model-glb').disabled=!record||(!has&&!libraryEntry)||!same||busy;$('download-model-obj').disabled=!record||(!has&&!libraryEntry)||!same||busy;$('reset-model-view').disabled=!loaded||gallery.state().switching;
  viewer.hidden=(!has&&!libraryEntry)||!loaded||!same||busy;
  empty.hidden=(has||!!libraryEntry)&&loaded&&same&&!busy;
  $('model-frame').setAttribute('aria-busy',String(busy));
  if(!has){$('model-empty-title').textContent=city?'A CITY WAITING TO HAPPEN.':'A SCULPTURE WAITING TO HAPPEN.';$('model-empty-text').textContent=city?'Compose sculpture fragments, then generate their Las Vegas counterpart in 3D.':'Paste city fragments, then generate their V&A body in 3D.';}
  else if(busy){$('model-empty-title').textContent=city?'BUILDING YOUR CITY.':'BUILDING YOUR SCULPTURE.';$('model-empty-text').textContent='The local generator is turning the assembled fragments into a volume.';}
  else if(record&&!same){$('model-empty-title').textContent='A NEW COMPOSITION.';$('model-empty-text').textContent='Generate 3D to preview this composition.';}
  else if(loadingError){$('model-empty-title').textContent='PREVIEW COULD NOT LOAD.';$('model-empty-text').textContent='Your mesh can still be downloaded. Refresh to try the 3D preview again.';}
  else if(record&&!loaded){$('model-empty-title').textContent='OPENING THE 3D MODEL.';$('model-empty-text').textContent='Preparing the rotatable mesh preview…';}
  else{$('model-empty-title').textContent='FROM COLLAGE TO VOLUME.';$('model-empty-text').textContent=city?'Click Generate 3D to create a model from your Las Vegas collage.':'Click Generate 3D to create a model from your assembled V&A fragments.';}
  $('model-stale').hidden=!has||!record||same||busy;
  if(!has&&!libraryEntry&&!busy)status.textContent=ready?'Compose a body to begin.':'Checking the local 3D generator…';
  else if(!busy&&!lastError)status.textContent=record?(same?'3D model ready. Click the grey area for wheel zoom.':'Composition changed. Generate an updated model.'):(ready?city?'Ready to generate your Las Vegas collage.':'Ready to generate your assembled sculpture.':'Local generator unavailable. Restart the local test launcher.');
  if(libraryEntry&&!loadingError)status.textContent='';
  if(options.modelComposition&&record&&loaded&&!busy){viewer.hidden=false;empty.hidden=true;$('save-model').disabled=saving||!gallery.canSave();$('download-model-glb').disabled=false;$('download-model-obj').disabled=false;if(!same)status.textContent='Showing your last generation. Generate again to update it.';}
  $('download-model-obj').disabled ||= !!libraryEntry&&!libraryEntry.obj;
  status.hidden=(!!libraryEntry||gallery.state().switching)&&!loadingError;if(gallery.state().switching&&!loadingError)empty.hidden=true;
  if(options.directCollage&&!options.archivePresentation){
   $('model-direction').textContent=options.modelComposition?'MODEL COMPOSITION / IMAGE TO 3D':'PHOTO COLLAGE / 3D';
   $('model-description').textContent=options.modelComposition?'Your visible composition is flattened into one image. The local generator infers a new volume from that image.':'The same local TripoSR generator turns this photo collage into a volume.';
   if(!has){$('model-empty-title').textContent='FROM COLLAGE TO VOLUME.';$('model-empty-text').textContent='Add photographs above, then generate their 3D interpretation.';}
   else if(busy){$('model-empty-title').textContent='BUILDING YOUR MODEL.';$('model-empty-text').textContent='The local generator is inferring depth and hidden surfaces.';}
   else if(!record){$('model-empty-title').textContent='YOUR COMPOSITION IN 3D.';$('model-empty-text').textContent='Click Generate 3D above to create a volume.';}
  }
  if(options.archivePresentation&&!has&&!busy){$('model-empty-title').textContent=city?'A CITY WAITING TO HAPPEN.':'A SCULPTURE WAITING TO HAPPEN.';$('model-empty-text').textContent=city?'Choose objects from the Las Vegas archive, then generate their assembled volume in 3D.':'Choose Las Vegas objects, connect their V&A fragments, then generate a sculpture in 3D.';}
  if(record)$('model-stats').textContent=Number(record.triangles||0).toLocaleString('en-GB')+' triangles';
  else $('model-stats').textContent='AI INFERRED VOLUME';
  options.onModelState?.({record,entry:libraryEntry,busy,loaded,stale:!same,switching:gallery.state().switching});
 }
 async function changed(doc){
  const ticket=++revision;const value=await digest(doc);if(ticket!==revision)return;
  current=value;render();
 }
 function fitCamera(target=viewer){
  const d=target.getDimensions();if(!d||!Number.isFinite(d.y))return;
  const radius=Math.hypot(d.x,d.y,d.z)*.5/Math.sin(Math.PI/12)*1.12;
  target.minCameraOrbit='auto 15deg '+(radius*.22)+'m';target.maxCameraOrbit='auto auto '+(radius*4)+'m';target.cameraTarget='auto auto auto';target.fieldOfView='30deg';target.cameraOrbit='0deg 85deg '+radius+'m';target.jumpCameraToGoal();
 }
 function applyCamera(camera,target=viewer){
  if(typeof camera==='string'){target.cameraOrbit=camera;target.jumpCameraToGoal();return;}
  const o=camera?.orbit,t=camera?.target;if(!o||![o.theta,o.phi,o.radius].every(Number.isFinite)||o.radius<=0)return;
  target.cameraOrbit=o.theta*180/Math.PI+'deg '+o.phi*180/Math.PI+'deg '+o.radius+'m';
  if(t&&[t.x,t.y,t.z].every(Number.isFinite))target.cameraTarget=t.x+'m '+t.y+'m '+t.z+'m';
  if(Number.isFinite(camera.fieldOfView)&&camera.fieldOfView>1&&camera.fieldOfView<179)target.fieldOfView=camera.fieldOfView+'deg';
  target.jumpCameraToGoal();
 }
 function use(jobValue,fingerprint,target='sculpture',linkedMedia=null){
  if(options.modelComposition&&busy)pendingReveal=true;
  if(!hex(jobValue.id)||jobValue.status!=='complete')throw Error('The generation did not return a completed model.');
  const sameMesh=!libraryEntry&&loaded&&record?.modelUrl===jobValue.modelUrl;libraryEntry=null;$('model-name').value='';$('model-group').value='';
  record={id:jobValue.id,fingerprint,modelUrl:jobValue.modelUrl,objUrl:jobValue.objUrl,reportUrl:jobValue.reportUrl,triangles:jobValue.triangles,vertices:jobValue.vertices,generator:'TripoSR',seconds:jobValue.seconds,target,...(linkedMedia?{linkedMedia}: {})};
  if(!valid(record))throw Error('Invalid local mesh path.');
  loaded=sameMesh;loadingError=false;lastError='';if(!sameMesh)loadMesh(record.modelUrl);persist();render();if(options.onGenerated){const recipe=activeRecipe||options.getComposition();Promise.resolve(options.onGenerated(structuredClone(record),structuredClone(recipe))).catch(e=>options.message(e.message));}if(sameMesh)requestAnimationFrame(()=>fitCamera());
 }
 async function json(url,init){
  const response=await fetch(url,init);let value;try{value=await response.json();}catch{throw Error('The local 3D service did not return a valid response.');}
  if(!response.ok)throw Error(value.error||'Local 3D request failed.');return value;
 }
 function sourceImage(snapshot){
  const c=document.createElement('canvas');c.width=1600;c.height=1000;
  const portrait=document.createElement('canvas');portrait.width=snapshot.width;portrait.height=snapshot.height;options.drawModel(portrait.getContext('2d'),{...snapshot,background:'transparent'});const scale=Math.min(c.width/portrait.width,c.height/portrait.height);c.getContext('2d').drawImage(portrait,(c.width-portrait.width*scale)/2,(c.height-portrait.height*scale)/2,portrait.width*scale,portrait.height*scale);
  return c.toDataURL('image/png');
 }
 async function generateModel(forcedSnapshot=null){
  if(busy||!ready||!options.getDocument().layers.length)return;
  const ticket=++epoch;restoreRevision++;libraryEntry=null;busy=true;lastError='';loadingError=false;render();
  try{
   const snapshot=structuredClone(forcedSnapshot?.format==='borrowed-worlds-collage'?forcedSnapshot:options.getComposition());activeRecipe=snapshot;const image=sourceImage(snapshot);const fingerprint=await digest(snapshot);
   status.textContent=snapshot.modelTarget==='city'?'Sending the Las Vegas collage to the local generator…':'Sending the assembled sculpture to the local generator…';
   const result=await json('/api/sculpture3d/jobs',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({image,composition:snapshot,fingerprint})});
   if(ticket!==epoch)return;job=result;let activeWait=0,lastPoll=Date.now();
   while(job.status!=='complete'&&job.status!=='failed'){
    if(ticket!==epoch)return;
    const now=Date.now(),gap=now-lastPoll;lastPoll=now;if(gap<30000)activeWait+=gap;if(activeWait>600000)throw Error('Generation is taking longer than expected. Reopen this local page to check the job.');
    status.textContent=job.message||'Generating your 3D sculpture…';await new Promise(r=>setTimeout(r,1500));
    const next=await json('/api/sculpture3d/jobs/'+job.id);if(ticket!==epoch)return;job=next;
   }
   if(ticket!==epoch)return;
   if(job.status==='failed')throw Error(job.message||'The local generator could not create a model. Try a more compact composition.');
   const linkedMedia=options.associateMedia?await options.associateMedia(snapshot):null;if(ticket!==epoch)return;
   use(job,fingerprint,snapshot.modelTarget||'sculpture',linkedMedia);options.message(options.directCollage?'Photo collage generated as a real 3D model. Depth and hidden surfaces are inferred.':(snapshot.modelTarget==='city'?'Las Vegas':'V&A sculpture')+' 3D model generated. Depth and hidden connections are inferred from the collage.');
  }catch(e){if(ticket===epoch){lastError=e.message;status.textContent=e.message;options.message(e.message);}}
  finally{if(ticket===epoch){busy=false;render();}}
 }
 async function restore(value){
  if(!valid(value))return;const ticket=++restoreRevision,run=epoch;
  try{const saved=await json('/api/sculpture3d/jobs/'+value.id);const linkedMedia=options.associateMedia&&options.getComposition().layers.length&&(!value.linkedMedia||value.linkedMedia.version<2)?await options.associateMedia(options.getComposition()):value.linkedMedia||null;if(run===epoch&&ticket===restoreRevision&&saved.status==='complete')use(saved,value.fingerprint,value.target||'sculpture',linkedMedia);}catch{ /* A project imported on another computer can regenerate its missing mesh. */ }
 }
 viewer.addEventListener('load',async e=>{if(!record||viewer.src!==meshUrl||e.detail?.url!==meshUrl||loaded)return;const source=meshUrl;fitCamera();if(pendingCamera){applyCamera(pendingCamera);pendingCamera=null;}await viewer.updateComplete;if(!record||meshUrl!==source||viewer.src!==source)return;viewer.jumpCameraToGoal();loaded=true;loadingError=false;render();if(pendingReveal){pendingReveal=false;$('model-stage').scrollIntoView({behavior:'smooth',block:'nearest'});}if(libraryEntry)gallery.ready(incomingDirection);});
 viewer.addEventListener('error',()=>{if(!record)return;loaded=false;loadingError=true;lastError='The generated mesh is available, but its 3D preview could not load.';status.textContent=lastError;render();});
 function clear({navigation=false}={}){
  epoch++;restoreRevision++;gallery.reset(navigation);incomingDirection=0;clearMesh();pendingReveal=false;pendingCamera=null;activeRecipe=null;libraryEntry=null;busy=false;record=null;loaded=false;job=null;loadingError=false;lastError='';viewer.src=null;viewer.removeAttribute('src');interaction.reset();
  try{localStorage.removeItem(STORE);}catch{}render();
 }
 $('clear-model').addEventListener('click',()=>{clear();options.message('Current 3D preview cleared. Your collages and saved history stay available.');});
 generate.addEventListener('click',generateModel);
 $('reset-model-view').addEventListener('click',()=>libraryEntry?gallery.overview():fitCamera());
 async function download(path,name){
  if(!record)return;
  if(libraryEntry){if(name.endsWith('.obj')&&!libraryEntry.obj){options.message('OBJ is unavailable for this exhibit. Use GLB.');return;}SavedSculptures.download(name.endsWith('.obj')?libraryEntry.obj:libraryEntry.glb,libraryEntry.title.replace(/[^a-z0-9_-]+/gi,'-')+(name.endsWith('.obj')?'.obj':'.glb'));return;}
  try{const raw=await fetch(path).then(r=>{if(!r.ok)throw Error('Model download failed.');return r.blob();});const blob=name.endsWith('.obj')?await ModelColour.obj(raw):await ModelColour.enhance(raw);SavedSculptures.download(blob,name);}catch(e){options.message(e.message);}
 }
 $('download-model-glb').addEventListener('click',()=>download(record?.modelUrl,record?.target==='city'?'borrowed-worlds-city.glb':'borrowed-worlds-sculpture.glb'));
 $('download-model-obj').addEventListener('click',()=>download(record?.objUrl,record?.target==='city'?'borrowed-worlds-city.obj':'borrowed-worlds-sculpture.obj'));
 $('save-model').addEventListener('click',async()=>{
  if(!record||!loaded||busy||saving||!gallery.canSave())return;saving=true;const snapshot=structuredClone(record);render();
  try{const metadata={title:$('model-name').value,group:$('model-group').value,...(record.linkedMedia?{linkedMedia:structuredClone(record.linkedMedia)}:{})};let result;if(libraryEntry?.ephemeral){const imported=await SavedSculptures.importEntry(libraryEntry,viewer,metadata);libraryEntry=imported.entry;gallery.update(libraryEntry);result=imported;}else if(libraryEntry){libraryEntry=await SavedSculptures.overwrite(libraryEntry.id,viewer,{title:metadata.title||libraryEntry.title,group:metadata.group,...(metadata.linkedMedia?{linkedMedia:metadata.linkedMedia}:{})});gallery.update(libraryEntry);result={entry:libraryEntry,alreadySaved:true,updated:true};}else result=await SavedSculptures.save(snapshot,viewer,metadata);$('model-history').open=true;$('history-status').textContent=result.updated?result.entry.title+' updated with this view.':result.entry.title+' saved on this device.';options.message(result.updated?'Saved model updated: view and preview replaced.':'Model saved with its current view.');$('model-history').scrollIntoView({behavior:'smooth',block:'start'});}
  catch(e){options.message(e.message);$('history-status').textContent=e.message;}
  finally{saving=false;render();}
 });

 async function openSaved(entry,direction=0){
  const ticket=++epoch;restoreRevision++;busy=false;loaded=false;render();
  if(typeof entry==='string')entry=await SavedSculptures.get(entry);if(ticket!==epoch)return false;
  if(!valid(entry?.record)||!(entry.glb instanceof Blob))throw Error('This saved model is invalid.');
  if(options.associateMedia&&(!entry.record.linkedMedia||entry.record.linkedMedia.version<2)&&entry.composition){const linkedMedia=await options.associateMedia(entry.composition);if(entry.record.linkedMedia?.video)linkedMedia.video={...entry.record.linkedMedia.video,muted:true};if(ticket!==epoch)return false;if(!entry.ephemeral)await SavedSculptures.updateMedia(entry.id,linkedMedia);if(ticket!==epoch)return false;entry={...entry,record:{...entry.record,linkedMedia}};}
  busy=false;record=structuredClone(entry.record);libraryEntry=entry;loaded=false;loadingError=false;lastError='';
  $('model-name').value=entry.title;$('model-group').value=entry.group||'';pendingCamera=null;incomingDirection=direction;interaction.reset();await gallery.set(entry);if(ticket!==epoch)return false;render();await loadMesh(gallery.source(entry.id)||entry.glb);return ticket===epoch;
 }

 function capture(){
  const orbit=loaded?viewer.getCameraOrbit():null;let retained=record;try{const persisted=JSON.parse(localStorage.getItem(STORE)||'null');if(!retained&&valid(persisted))retained=persisted;}catch{}
  return {record:retained?structuredClone(retained):null,entry:libraryEntry,resume:busy,recipe:activeRecipe?structuredClone(activeRecipe):null,persisted:localStorage.getItem(STORE),name:$('model-name').value,group:$('model-group').value,camera:orbit?SavedSculptures.cameraView(viewer):null};
 }
 function suspend(navigation=false){const persisted=localStorage.getItem(STORE);clear({navigation});if(persisted)localStorage.setItem(STORE,persisted);}
 async function restoreCaptured(snapshot){
  clear();const ticket=epoch;if(snapshot.persisted)localStorage.setItem(STORE,snapshot.persisted);
  if(snapshot.entry)await openSaved(snapshot.entry);else if(snapshot.record)await restore(snapshot.record);
  if(ticket!==epoch)return;pendingCamera=snapshot.camera;
  if(loaded&&pendingCamera){applyCamera(pendingCamera);pendingCamera=null;}
  $('model-name').value=snapshot.name||'';$('model-group').value=snapshot.group||'';
  if(snapshot.resume)generateModel(snapshot.recipe);render();
 }
 window.addEventListener('saved-sculpture-renamed',async e=>{if(libraryEntry?.id===e.detail.id){const entry=await SavedSculptures.get(e.detail.id);if(entry&&libraryEntry?.id===entry.id){libraryEntry=entry;gallery.update(entry);$('model-name').value=entry.title;$('model-group').value=entry.group||'';render();}}});
 await customElements.whenDefined('model-viewer');
 try{const health=await json('/api/sculpture3d/capabilities');ready=health.ready===true;}
 catch{ready=false;lastError='Local generator unavailable. Restart the local test launcher.';status.textContent=lastError;}
 try{const saved=JSON.parse(localStorage.getItem(STORE)||'null');if(valid(saved))restore(saved);}catch{}
 await changed(options.getDocument());
 return Object.freeze({changed,restore,clear,openSaved,capture,suspend,restoreCaptured,beginBrowse:()=>gallery.beginBrowse(),prepareSaved:(entry,direction)=>gallery.prepare(entry,direction),transitionOut:direction=>gallery.slideOut(direction),getRecord:()=>!libraryEntry&&record&&record.fingerprint===current&&!busy?structuredClone(record):null,state:()=>({gallery:gallery.state(),ready,busy,libraryId:libraryEntry?.id||null,interaction:interaction.state(),currentFingerprint:current,modelFingerprint:record?.fingerprint||null,loaded,stale:!libraryEntry&&!!record&&record.fingerprint!==current,jobId:job?.id||record?.id||null,error:lastError}),generate:generateModel});
}
window.Sculpture3D=Object.freeze({create});
})();
