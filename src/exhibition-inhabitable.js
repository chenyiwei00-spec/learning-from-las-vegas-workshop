import * as THREE from 'three';
import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
import {openLegacySpace} from './exhibition-saved-space.js';
import {SETTINGS} from './inhabitable/form-state.js';
import {createArchitecture} from './inhabitable/form-scene.js';
import {floorAt,bodyClear,floorClear} from './inhabitable/surreal-navigation.js';
import {layoutSnapshot,layoutSignature,preparePlacedSources,locateInHall,checkSettings,layoutSeed} from './exhibition-inhabitable-input.js';
import {roadSupport} from './inhabitable/road-surface.js';
import {GENERATED_SPACE_SCALE as SPACE_SCALE,CELL_SIZE,worldCell} from './exhibition-dimensions.js';
export function createInhabitableSpace({scene,renderer,placement,getView,getCamera,setView,navigate,invalidate,onSpaceBounds,onSpaceLight}){
 const $=id=>document.getElementById(id),surface=$('walk-surface'),KEY='learning-vegas-inhabitable-space-v1';
 let result=null,active=false,busy=false,stale=false,error='',signature='',settings={...SETTINGS,layoutVersion:2},generatedSettings=null,worker=null,ticket=0,cancelPending=null,disposed=false,lastSafe=null,progress=0,sourceSelection=null,settingsRevision=0,wasFlying=false,lastWalkSafe=null,archiveBlob=null;
 const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();let pointerDown=null,feedbackTimer;
 const feedback=$('exhibition-space-feedback');
 const say=text=>{$('exhibition-space-status').textContent=text;feedback.textContent=text;feedback.hidden=false;clearTimeout(feedbackTimer);};
 const containsPlacedSpace=()=>placement.spaceSources().some(s=>s.target==='space');
 function ui(){
  const blocked=containsPlacedSpace();
  const button=$('exhibition-make-space');button.disabled=blocked||busy||!placement.state().modelCount||!!window.ExhibitionAgentDrafts?.state().busy||!!window.ExhibitionAgent?.state().busy;
  const label='Make space';button.textContent=busy?Math.round(progress)+'%':'+';button.title=blocked?'Saved spaces can be arranged, but cannot make another space.':label;button.setAttribute('aria-label',label);$('exhibition-space-keyword').textContent=label.toUpperCase();
  $('exhibition-space-options').hidden=false;$('space-options-empty').hidden=!!result;
  $('exhibition-space-original').hidden=!result;$('exhibition-space-original').textContent=active?'Original models':'Show space';$('exhibition-space-original').disabled=busy;
  $('exhibition-enter-space').hidden=!result||!active;$('exhibition-enter-space').disabled=busy;
  $('exhibition-export-space').hidden=!result;$('exhibition-export-space').disabled=busy;
  $('walk-save-space').hidden=!result;$('walk-save-space').disabled=busy||!result;
  $('exhibition-space-save').disabled=busy||!placement.state().modelCount;$('exhibition-space-load').disabled=busy;
  surface.dataset.spaceGenerationBlocked=String(blocked);surface.dataset.spaceEngine='inhabitable-v1';surface.dataset.spacePreview=String(active);surface.dataset.spaceBusy=String(busy);surface.dataset.spaceStale=String(stale);surface.dataset.spaceProgress=String(progress);
  clearTimeout(feedbackTimer);if(!busy&&!stale&&!error&&!feedback.hidden)feedbackTimer=setTimeout(()=>{feedback.hidden=true;},6000);
  for(const el of document.querySelectorAll('[data-space-setting]')){if(el.dataset.spaceSetting==='seed'){el.disabled=true;el.title='Determined by the placed models and their layout';}if(document.activeElement!==el)el.value=settings[el.dataset.spaceSetting];const out=el.nextElementSibling;if(out?.tagName==='OUTPUT')out.textContent=String(settings[el.dataset.spaceSetting]);}
 }
 function persist(){try{localStorage.setItem(KEY,JSON.stringify({version:1,active,settings,generatedSettings,signature,layout:layoutSnapshot(placement)}));}catch{say('Space ready; recipe storage is full. Use Save space recipe.');}}
 function visibility(value){active=!!value&&!!result;if(result){result.group.visible=active;result.footprints.visible=active&&getView()==='axonometric';}placement.showSources(!active,{keepFootprints:false});window.dispatchEvent(new Event('exhibition-space-change'));onSpaceLight?.(result,active);ui();invalidate();persist();}
 function disposeResult(value){if(!value)return;scene.remove(value.group,value.footprints);if(value.footprints){value.footprints.children[0]?.geometry.dispose();value.footprints.children[0]?.material.dispose();}value.group.traverse(o=>{if(o.isMesh){o.geometry.dispose();o.sectionGeometry?.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});}
 function compute(input){return new Promise((resolve,reject)=>{
  const id=++ticket;worker=new Worker(new URL('exhibition-space-worker.js',document.baseURI));let settled=false;
  const finish=(fn,value)=>{if(settled)return;settled=true;worker?.terminate();worker=null;cancelPending=null;fn(value);};cancelPending=()=>finish(reject,Error('Space generation cancelled.'));
  worker.onerror=e=>finish(reject,Error(e.message||'Space worker could not finish.'));
  worker.onmessage=e=>{const v=e.data;if(v.ticket!==id)return;if(v.error){finish(reject,Error(v.error));return;}if(v.progress!==undefined){progress=5+v.progress*.93;say(v.message+' / '+Math.round(progress)+'%');ui();}if(v.plan)finish(resolve,v.plan);};
  worker.postMessage({ticket:id,...input});
 });}
 function contactFootprint(plan,offset,scale){
  const g=new THREE.Group();g.name='Generated space / ground-contact cells';
  const v=plan.volumeGrid,geometry=new THREE.PlaneGeometry(CELL_SIZE,CELL_SIZE),material=new THREE.MeshBasicMaterial({color:0xf6dfa0,transparent:true,opacity:.72,depthTest:true,depthWrite:false,toneMapped:false,side:THREE.DoubleSide});
  const sample=(x,z)=>{const ix=Math.round(((x-offset.x)/scale-v.minX)/v.step),iy=Math.round((-offset.y/scale-v.minY)/v.step),iz=Math.round(((z-offset.z)/scale-v.minZ)/v.step);return ix>=0&&ix<v.nx&&iy>=0&&iy<v.ny&&iz>=0&&iz<v.nz?v.values[(iz*v.ny+iy)*v.nx+ix]:Infinity;};
  for(let row=0;row<20;row++)for(let col=0;col<20;col++){
   const x=worldCell(col),z=worldCell(row);
   if([[0,0],[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]].some(([dx,dz])=>sample(x+dx*CELL_SIZE/2,z+dz*CELL_SIZE/2)<0)){
    const m=new THREE.Mesh(geometry,material);m.rotation.x=-Math.PI/2;m.position.set(x,.005,z);g.add(m);
   }
  }
  return g;
 }
 function candidate(plan,input,scale=SPACE_SCALE){
  const visiblePlan={...plan,meshes:plan.meshes.filter(m=>m.name!=='Surrounding ground')},group=createArchitecture(visiblePlan);group.name='Inhabitable architecture / placed sculpture aggregation';
  group.scale.setScalar(scale);
  try{const {offset,bounds}=locateInHall(group,input.centre,Infinity);const meshes=[];group.traverse(o=>{if(o.isMesh)meshes.push(o);});
   group.userData={engine:'inhabitable-v1',snapshot:true,settings:plan.settings,sources:input.attribution,validation:plan.validation,spaceScale:scale};
   const footprints=contactFootprint(plan,offset,scale);
   return {scale,support:roadSupport(plan.meshes.find(m=>m.road)),group,meshes,plan,offset,bounds,footprints,attribution:input.attribution,layout:Object.entries(input.attribution).map(([id,a])=>({id,modelId:a.modelId,name:a.name,...a.layout})),triangles:plan.meshes.reduce((n,m)=>n+(m.index?.length||m.positions.length/3)/3,0)};
  }catch(e){disposeResult({group});throw e;}
 }
 async function generate({restore=false,override=null}={}){
  if(busy||disposed||window.ExhibitionAgentDrafts?.state().busy||window.ExhibitionAgent?.state().busy)return false;await placement.ready;
  if(containsPlacedSpace()){error='Saved spaces can be arranged, but cannot be used to make another space.';say(error);ui();return false;}
  const key=layoutSignature(placement),revisionAtStart=settingsRevision,pendingAtStart={...settings};busy=true;progress=0;error='';ui();let next;
  try{
   const chosen={...checkSettings(override||settings),layoutDriven:true,moduleCount:Math.max(placement.spaceSources().length,(override||settings).layoutVersion===2?(override||settings).moduleCount:9),layoutVersion:2,seed:layoutSeed(placement.spaceSources())};
   const input=await preparePlacedSources(placement.spaceSources(),chosen,(p,m)=>{progress=p*.05;say(m);ui();});if(disposed)throw Error('The exhibition was closed.');
   const plan=await compute(input);if(disposed)throw Error('The exhibition was closed.');if(key!==layoutSignature(placement))throw Error('The placed models changed during generation. Click Make space again.');
   next=candidate(plan,input,plan.settings.worldScale||input.worldScale);onSpaceBounds?.(next.bounds);disposeResult(result);result=next;next=null;scene.add(result.group,result.footprints);
   archiveBlob=null;signature=key;settings=settingsRevision!==revisionAtStart?settings:restore?pendingAtStart:{...chosen};generatedSettings={...chosen};stale=JSON.stringify(settings)!==JSON.stringify(generatedSettings);lastSafe=null;wasFlying=false;lastWalkSafe=null;sourceSelection=null;progress=100;visibility(true);
   surface.dataset.spaceSeed=String(chosen.seed);surface.dataset.spaceRoutesClear=String(plan.validation.routesClear);surface.dataset.spaceTriangles=String(result.triangles);
   say(stale?'SPACE READY / CHANGES STAGED FOR UPDATE':'SPACE READY / '+plan.nodes.length+' FRAGMENTS / '+chosen.corridorWidth.toFixed(1)+' M ROUTE');
   surface.dataset.spaceArchived='false';
   return true;
  }catch(e){disposeResult(next);error=e.message;say(error);return false;}finally{busy=false;ui();}
 }
 function localPoint(position){return {x:(position.x-result.offset.x)/result.scale,z:(position.z-result.offset.z)/result.scale};}
 function clearAt(x,z,h,radius){if(result.legacy)return result.legacyClear(x,z,h,radius);const a=1/result.scale;return bodyClear(result.plan.volumeGrid,result.plan.volumeGrid.surfaces,x,h,z,radius*a,true,a)&&floorClear(result.plan.nav,x,z,h,radius*a,a);}
 // The same rendered terrain triangles support walking, landings and collision.
 function supportAt(x,z,reference,radius,maxDrop=.22){
  const candidates=result.support(x,z),s=result.scale;
  candidates.push(-result.offset.y/s);
  return candidates.sort((a,b)=>b-a).find(h=>h<=reference+.22/s&&h>=reference-maxDrop/s&&clearAt(x,z,h,radius))??null;
 }
 function enter(){
  if(!result||busy)return;visibility(true);const path=result.plan.paths.find(p=>p.role==='carved entrance'),p=path?.points[0]||result.plan.entrance;
  const q=path?.points.find(v=>Math.hypot(v.x-p.x,v.z-p.z)>.6)||result.plan.gathering,h=(result.plan.nav?floorAt(result.plan.nav,p.x,p.z,p.y,1):p.y)??p.y??0;
  lastSafe={x:p.x*result.scale+result.offset.x,z:p.z*result.scale+result.offset.z,foot:h*result.scale+result.offset.y};wasFlying=false;lastWalkSafe={...lastSafe};
  $('exhibition-space-options').open=false;
  setView('room');navigate({x:lastSafe.x,z:lastSafe.z,y:lastSafe.foot+1.65,yaw:Math.atan2(p.x-q.x,p.z-q.z),pitch:0});
  say('INSIDE SPACE / WASD WALK / Q UP / E DOWN / SPACE TO LAND');invalidate();
 }
 function constrain(position,radius=.35,{fly=false,eyeHeight=1.65}={}){
  if(!active||!result)return position;
  // Flight deliberately bypasses architecture collision, including closed walls.
  // Keep the last supported walking point separate for a safe return to walking.
  if(fly){lastSafe={x:position.x,z:position.z,foot:position.y-eyeHeight};wasFlying=true;surface.dataset.spaceFootHeight=String(lastSafe.foot);return position;}
  const wanted={x:position.x,z:position.z,foot:Math.max(0,position.y-eyeHeight)};
  let start=lastSafe||{...wanted};
  if(!fly&&wasFlying){
   const p=localPoint(start),h=supportAt(p.x,p.z,(start.foot-result.offset.y)/result.scale,radius,Infinity);
   // Returning to walking lands on the highest clear supporting floor below.
   if(h!==null)start={...start,foot:h*result.scale+result.offset.y};else if(lastWalkSafe)start={...lastWalkSafe};
   wanted.x=start.x;wanted.z=start.z;wanted.foot=start.foot;
  }
  wasFlying=false;
  const distance=Math.hypot(wanted.x-start.x,wanted.z-start.z),steps=Math.max(1,Math.ceil(distance/.10));
  let safe=start;
  for(let i=1;i<=steps;i++){
   const x=start.x+(wanted.x-start.x)*i/steps,z=start.z+(wanted.z-start.z)*i/steps,p=localPoint({x,z});
   const h=supportAt(p.x,p.z,(safe.foot-result.offset.y)/result.scale,radius);
    if(h===null){
     // Slide along walls rather than freezing when walking diagonally into one.
     const alternatives=[{x,z:safe.z},{x:safe.x,z}].sort((a,b)=>Math.hypot(wanted.x-a.x,wanted.z-a.z)-Math.hypot(wanted.x-b.x,wanted.z-b.z));
     for(const v of alternatives){const local=localPoint(v),floor=supportAt(local.x,local.z,(safe.foot-result.offset.y)/result.scale,radius);if(floor!==null){safe={...v,foot:floor*result.scale+result.offset.y};break;}}
     continue;
    }
   safe={x,z,foot:h*result.scale+result.offset.y};
  }
  lastSafe=safe;if(!fly)lastWalkSafe={...safe};position.set(safe.x,safe.foot+eyeHeight,safe.z);surface.dataset.spaceFootHeight=String(safe.foot);return position;
 }
 async function captureArchive(){
  if(!result)throw Error('Generate a space first.');
  const previous=result.group.visible;result.group.visible=true;
  try{
   if(!archiveBlob)archiveBlob=new Blob([await new GLTFExporter().parseAsync(result.group,{binary:true})],{type:'model/gltf-binary'});
   const b=result.bounds,size=b.getSize(new THREE.Vector3()),centre=b.getCenter(new THREE.Vector3()),radius=size.length(),cam=new THREE.PerspectiveCamera(35,1,.01,radius*10+100);
   cam.position.copy(centre).add(new THREE.Vector3(radius*.95,radius*.7,radius*.95));cam.lookAt(centre);
   const captureScene=new THREE.Scene();captureScene.background=new THREE.Color(0xf2f2f2);captureScene.environment=scene.environment;
   captureScene.add(new THREE.HemisphereLight(0xffffff,0x929da8,2));const light=new THREE.DirectionalLight(0xffffff,2);light.position.set(30,40,25);captureScene.add(light);const copy=result.group.clone(true),captureMaterials=[];copy.traverse(o=>{if(o.isMesh){o.material=o.material.clone();o.material.clippingPlanes=[];captureMaterials.push(o.material);}});captureScene.add(copy);
   const target=new THREE.WebGLRenderTarget(640,640);target.texture.colorSpace=THREE.SRGBColorSpace;const old=renderer.getRenderTarget(),pixels=new Uint8Array(640*640*4);
   try{renderer.setRenderTarget(target);renderer.render(captureScene,cam);renderer.readRenderTargetPixels(target,0,0,640,640,pixels);}finally{renderer.setRenderTarget(old);target.dispose();captureMaterials.forEach(m=>m.dispose());}
   const canvas=document.createElement('canvas');canvas.width=canvas.height=640;const ctx=canvas.getContext('2d'),data=ctx.createImageData(640,640);
   for(let y=0;y<640;y++)data.data.set(pixels.subarray((639-y)*640*4,(640-y)*640*4),y*640*4);ctx.putImageData(data,0,0);
   const preview=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('Space preview unavailable')),'image/png'));
   const live=getView()==='room'?getCamera():null;const renderCamera=live?{x:live.position.x,y:live.position.y,z:live.position.z,yaw:live.rotation.y,pitch:live.rotation.x}:null;
   const runtime=result.legacy?null:{version:1,scale:result.scale,plan:result.plan,attribution:result.attribution,layout:result.layout,audio:result.savedAudio||placement.audioSources?.()||[]};
   return {runtime,renderCamera,glb:archiveBlob,preview,signature,triangles:result.triangles,camera:{orbit:{theta:Math.PI/4,phi:Math.atan2(Math.sqrt(2)*.95,.7),radius:cam.position.distanceTo(centre)},target:{x:centre.x,y:centre.y,z:centre.z},fieldOfView:35},layout:result.layout};
  }finally{result.group.visible=previous;invalidate();}
 }

 async function saveSpace(){
  if(!result||busy)return false;busy=true;ui();say('SAVING SPACE');
  try{const saved=await window.ExhibitionArchives.saveSpace(await captureArchive());result.savedId=saved.id;surface.dataset.spaceArchived='true';say('SPACE SAVED');return saved;}catch(e){say('Could not save this space: '+e.message);return false;}finally{busy=false;ui();}
 }
 async function openSaved(row){
  if(busy||disposed)return false;busy=true;error='';ui();let next;
  try{
   const stored=row.runtime;
   next=stored?.version===1?candidate(stored.plan,{centre:{x:0,z:0},attribution:stored.attribution},stored.scale||1):await openLegacySpace(row);
   next.savedAudio=stored?.audio||[];next.savedId=row.id;next.layout=stored?.layout||row.layout||[];
   onSpaceBounds?.(next.bounds);disposeResult(result);result=next;next=null;scene.add(result.group,result.footprints);
   archiveBlob=row.glb;signature=row.signature||'';generatedSettings={...settings,...(stored?.plan.settings||{})};settings={...generatedSettings};lastSafe=null;lastWalkSafe=null;wasFlying=false;stale=false;
   visibility(true);busy=false;ui();
   if(row.renderCamera){setView('room');navigate(row.renderCamera);}else enter();
   say('SAVED SPACE / '+row.title);return true;
  }catch(e){disposeResult(next);error=e.message;say(error);return false;}finally{busy=false;ui();}
 }
 async function exportGLB(){
  if(!result||busy)return false;busy=true;ui();say('Preparing GLB...');const value=result,visible=value.group.visible;
  try{value.group.visible=true;const buffer=await new GLTFExporter().parseAsync(value.group,{binary:true});download(new Blob([buffer],{type:'model/gltf-binary'}),'learning-vegas-inhabitable-space.glb');say('SPACE EXPORTED / GLB SNAPSHOT');return true;}catch(e){error=e.message;say(error);return false;}finally{value.group.visible=visible;busy=false;ui();invalidate();}
 }
 function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);}
 const settingChange=e=>{const el=e.target,key=el.dataset.spaceSetting;if(!key||key==='seed'||el.value==='')return;try{settings=checkSettings({...settings,layoutVersion:2,[key]:+el.value});settingsRevision++;stale=!!result&&(layoutSignature(placement)!==signature||JSON.stringify(settings)!==JSON.stringify(generatedSettings));say(stale?'SETTINGS CHANGED / MAKE SPACE':result?'SPACE READY':'SETTINGS READY / MAKE SPACE');persist();ui();}catch(err){say(err.message);ui();}};
 for(const el of document.querySelectorAll('[data-space-setting]')){el.addEventListener('input',settingChange);el.addEventListener('change',settingChange);}
 const saveRecipe=()=>download(new Blob([JSON.stringify({format:'learning-vegas-inhabitable-space',version:1,settings:generatedSettings||settings,pendingSettings:settings,layout:layoutSnapshot(placement)},null,2)],{type:'application/json'}),'learning-vegas-space-recipe.json');
 const loadRecipe=async e=>{try{if(busy)throw Error('Wait for this generation before loading a recipe.');const file=e.target.files?.[0];if(!file||file.size>2000000)throw Error('Choose a space recipe under 2 MB.');const doc=JSON.parse(await file.text());if(doc.format!=='learning-vegas-inhabitable-space'||doc.version!==1||!Array.isArray(doc.layout))throw Error('Choose a saved MAKE SPACE recipe.');
   const chosen=checkSettings(doc.settings),now=layoutSnapshot(placement);if(doc.layout.length!==now.length||doc.layout.some(s=>!now.some(n=>n.id===s.id&&n.modelId===s.modelId)))throw Error('This recipe needs the same placed models. Restore those models first.');
   await placement.applyLayout(doc.layout);settings=chosen;stale=!!result;await generate({override:chosen});
  }catch(err){error=err.message;say(error);}finally{e.target.value='';ui();}};
 function placementChange(){if(result){stale=layoutSignature(placement)!==signature||JSON.stringify(settings)!==JSON.stringify(generatedSettings);say(stale?'LAYOUT CHANGED / MAKE SPACE':'SPACE READY');}ui();persist();}
 function down(e){pointerDown=[e.clientX,e.clientY];}
 function up(e){if(!active||!result||!pointerDown||Math.hypot(e.clientX-pointerDown[0],e.clientY-pointerDown[1])>5)return;pointerDown=null;const r=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);const camera=getCamera?.();if(!camera)return;ray.setFromCamera(pointer,camera);const hit=ray.intersectObjects(result.meshes,false).find(h=>h.object.userData.sourceId||h.object.userData.sourceIds);if(!hit)return;
  const u=hit.object.userData,attr=hit.object.geometry.attributes.sourceTag,tag=attr&&hit.face?Math.round(attr.getX(hit.face.a)):0,id=u.sourceIds?.[tag]||u.sourceId,source=result.attribution[id];sourceSelection={id,name:source?.name||'Source fragment',operation:u.operation};say('FROM '+sourceSelection.name+' / '+(u.operation||'Transformed source fragment'));$('exhibition-space-status').title=u.operation||'';surface.dataset.spaceSource=sourceSelection.name;
 }
 const handlers=[['walk-save-space',saveSpace],['exhibition-make-space',()=>generate()],['exhibition-enter-space',enter],['exhibition-space-original',()=>visibility(!active)],['exhibition-export-space',exportGLB],['exhibition-space-save',saveRecipe],['exhibition-space-load',()=>$('exhibition-space-recipe').click()]];
 handlers.forEach(([id,fn])=>$(id).addEventListener('click',fn));$('exhibition-space-recipe').addEventListener('change',loadRecipe);
 window.addEventListener('exhibition-placement-change',placementChange);window.addEventListener('exhibition-draft-queue-change',ui);window.addEventListener('exhibition-agent-change',ui);renderer.domElement.addEventListener('pointerdown',down);renderer.domElement.addEventListener('pointerup',up);
 const ready=placement.ready.then(async()=>{ui();try{const saved=JSON.parse(localStorage.getItem(KEY)||'null');if(saved?.version===1){settings=checkSettings({...saved.settings,layoutVersion:2,moduleCount:saved.settings?.layoutVersion===2?saved.settings.moduleCount:Math.max(9,saved.settings?.moduleCount||9)});generatedSettings=saved.generatedSettings;if(saved.active&&saved.signature===layoutSignature(placement))await generate({restore:true,override:generatedSettings||settings});ui();}}catch(e){say('Previous space could not reopen: '+e.message);}});
 return Object.freeze({ready,generate,captureArchive,saveSpace,openSaved,enter,showOriginal:()=>visibility(false),showSpace:()=>visibility(true),constrain,collisionMeshes:()=>active&&result?result.meshes:[],exportGLB,
  setViewMode:mode=>{if(result)result.footprints.visible=active&&mode==='axonometric';},
  audioAnchors:()=>active&&result?result.plan.nodes.map(n=>({id:n.sourceId,x:n.center.x*result.scale+result.offset.x,z:n.center.z*result.scale+result.offset.z,y:n.view.y*result.scale+result.offset.y+1.65,width:n.radius*2*result.scale,...(result.savedAudio?{audio:result.savedAudio.find(a=>a.id===n.sourceId)?.audio,name:result.savedAudio.find(a=>a.id===n.sourceId)?.name}:{})})):[],
  state:()=>({canGenerate:!containsPlacedSpace(),engine:'inhabitable-v1',layoutDriven:true,scale:result?.scale||SPACE_SCALE,groundContactCells:result?.footprints.children.length||0,anchors:result?result.plan.nodes.map(n=>({id:n.sourceId,x:n.center.x*result.scale+result.offset.x,z:n.center.z*result.scale+result.offset.z})):[],active,busy,stale,error,signature,settings:{...settings},generatedSettings,progress,connected:!!result?.plan.validation.routesClear,minimumClearance:(result?.plan.validation.headroom||0)*(result?.scale||1),triangles:result?.triangles||0,validation:result?.plan.validation||null,bounds:result?{min:result.bounds.min.toArray(),max:result.bounds.max.toArray()}:null,offset:result?.offset||null,sourceSelection}),
  dispose:()=>{disposed=true;clearTimeout(feedbackTimer);cancelPending?.();worker?.terminate();handlers.forEach(([id,fn])=>$(id).removeEventListener('click',fn));$('exhibition-space-recipe').removeEventListener('change',loadRecipe);for(const el of document.querySelectorAll('[data-space-setting]')){el.removeEventListener('input',settingChange);el.removeEventListener('change',settingChange);}window.removeEventListener('exhibition-placement-change',placementChange);window.removeEventListener('exhibition-draft-queue-change',ui);window.removeEventListener('exhibition-agent-change',ui);renderer.domElement.removeEventListener('pointerdown',down);renderer.domElement.removeEventListener('pointerup',up);onSpaceLight?.(null,false);disposeResult(result);result=null;}
 });
}
