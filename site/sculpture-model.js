(async()=>{
'use strict';
const $=id=>document.getElementById(id),id=new URLSearchParams(location.search).get('save'),viewer=$('saved-sculpture-viewer'),status=$('saved-view-status');
let modelUrl,entry;const interaction=ModelInteraction.attach($('saved-view-stage'),viewer,{fullscreenButton:$('saved-fullscreen'),zoomButton:$('saved-zoom-toggle'),note:$('saved-wheel-note')});
function fit(){const d=viewer.getDimensions();if(!d||!Number.isFinite(d.y))return;const radius=Math.hypot(d.x,d.y,d.z)*.5/Math.sin(Math.PI/12)*1.12;viewer.minCameraOrbit='auto 15deg '+radius*.22+'m';viewer.maxCameraOrbit='auto auto '+radius*4+'m';viewer.cameraOrbit='0deg 85deg '+radius+'m';viewer.jumpCameraToGoal();}
function missing(){status.textContent='This saved sculpture is no longer in this browser. Return to the studio to choose another.';$('saved-view-stage').hidden=true;}
try{
 if(!id)throw Error('Choose a saved model in the studio first.');
 entry=await SavedSculptures.get(id);if(!entry){missing();return;}
 await customElements.whenDefined('model-viewer');
 modelUrl=URL.createObjectURL(entry.glb);viewer.src=modelUrl;$('saved-view-stage').hidden=false;
 $('saved-view-title').textContent=entry.title;$('saved-view-direction').textContent=entry.record.target==='city'?'BORROW A BODY. COMPOSE ANOTHER CITY.':'BORROW A CITY. COMPOSE ANOTHER BODY.';document.title=entry.title+' / Learning from Las Vegas';
 $('saved-view-meta').textContent=new Date(entry.savedAt).toLocaleString('en-GB')+' · '+Number(entry.record.triangles).toLocaleString('en-GB')+' triangles';
 viewer.addEventListener('load',()=>{status.textContent='Saved model ready.';fit();});
 viewer.addEventListener('error',()=>status.textContent='The saved mesh could not be displayed. You can still export it.');
 for(const kind of ['glb','obj'])$('saved-export-'+kind).addEventListener('click',()=>SavedSculptures.download(entry[kind],entry.title.toLowerCase().replace(/\s+/g,'-')+'.'+kind));
 $('saved-reset-camera').addEventListener('click',fit);
 $('saved-delete-model').addEventListener('click',async()=>{try{await SavedSculptures.remove(id);missing();}catch(e){status.textContent=e.message;}});
 SavedSculptures.subscribe(async()=>{if(!await SavedSculptures.get(id))missing();});
 window.addEventListener('pagehide',()=>URL.revokeObjectURL(modelUrl));
}catch(e){status.textContent=e.message;}
})();