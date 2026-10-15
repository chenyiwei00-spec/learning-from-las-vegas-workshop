import * as THREE from 'three';
import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
import {SETTINGS} from './inhabitable/form-state.js';
import {createArchitecture} from './inhabitable/form-scene.js';
import {floorAt,bodyClear,floorClear} from './inhabitable/surreal-navigation.js';
import {layoutSnapshot,layoutSignature,preparePlacedSources,locateInHall,checkSettings} from './exhibition-inhabitable-input.js';
import {FLOOR_HALF} from './exhibition-dimensions.js';
export function createInhabitableSpace({scene,renderer,placement,getView,getCamera,setView,navigate,invalidate,onSpaceBounds,onSpaceLight}){
 const $=id=>document.getElementById(id),surface=$('walk-surface'),KEY='learning-vegas-inhabitable-space-v1';
 let result=null,active=false,busy=false,stale=false,error='',signature='',settings={...SETTINGS},generatedSettings=null,worker=null,ticket=0,cancelPending=null,disposed=false,lastSafe=null,progress=0,sourceSelection=null,settingsRevision=0;
 const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();let pointerDown=null,feedbackTimer;
 const feedback=$('exhibition-space-feedback');
 const say=text=>{$('exhibition-space-status').textContent=text;feedback.textContent=text;feedback.hidden=false;clearTimeout(feedbackTimer);};
 function ui(){
  const button=$('exhibition-make-space');button.disabled=busy||!placement.state().modelCount||!!window.ExhibitionAgentDrafts?.state().busy;
  const label=busy?'Making space...':result?'Update space':'Make space';button.textContent=busy?Math.round(progress)+'%':'+';button.title=label;button.setAttribute('aria-label',label);$('exhibition-space-keyword').textContent=label.toUpperCase();
  $('exhibition-space-options').hidden=false;$('space-options-empty').hidden=!!result;
  $('exhibition-space-original').hidden=!result;$('exhibition-space-original').textContent=active?'Original models':'Show space';$('exhibition-space-original').disabled=busy;
  $('exhibition-enter-space').hidden=!result||!active;$('exhibition-enter-space').disabled=busy;
  $('exhibition-export-space').hidden=!result;$('exhibition-export-space').disabled=busy;
  $('exhibition-space-save').disabled=busy||!placement.state().modelCount;$('exhibition-space-load').disabled=busy;
  surface.dataset.spaceEngine='inhabitable-v1';surface.dataset.spacePreview=String(active);surface.dataset.spaceBusy=String(busy);surface.dataset.spaceStale=String(stale);surface.dataset.spaceProgress=String(progress);
  clearTimeout(feedbackTimer);if(!busy&&!stale&&!error&&!feedback.hidden)feedbackTimer=setTimeout(()=>{feedback.hidden=true;},6000);
  for(const el of document.querySelectorAll('[data-space-setting]')){if(document.activeElement!==el)el.value=settings[el.dataset.spaceSetting];const out=el.nextElementSibling;if(out?.tagName==='OUTPUT')out.textContent=String(settings[el.dataset.spaceSetting]);}
 }
 function persist(){try{localStorage.setItem(KEY,JSON.stringify({version:1,active,settings,generatedSettings,signature,layout:layoutSnapshot(placement)}));}catch{say('Space ready; recipe storage is full. Use Save space recipe.');}}
 function visibility(value){active=!!value&&!!result;if(result)result.group.visible=active;placement.showSources(!active,{keepFootprints:active});onSpaceLight?.(result,active);ui();invalidate();persist();}
 function disposeResult(value){if(!value)return;scene.remove(value.group);value.group.traverse(o=>{if(o.isMesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});}
 function compute(input){return new Promise((resolve,reject)=>{
  const id=++ticket;worker=new Worker(new URL('exhibition-space-worker.js',document.baseURI));let settled=false;
  const finish=(fn,value)=>{if(settled)return;settled=true;worker?.terminate();worker=null;cancelPending=null;fn(value);};cancelPending=()=>finish(reject,Error('Space generation cancelled.'));
  worker.onerror=e=>finish(reject,Error(e.message||'Space worker could not finish.'));
  worker.onmessage=e=>{const v=e.data;if(v.ticket!==id)return;if(v.error){finish(reject,Error(v.error));return;}if(v.progress!==undefined){progress=5+v.progress*.93;say(v.message+' / '+Math.round(progress)+'%');ui();}if(v.plan)finish(resolve,v.plan);};
  worker.postMessage({ticket:id,...input});
 });}
 function candidate(plan,input){
  const visiblePlan={...plan,meshes:plan.meshes.filter(m=>m.name!=='Surrounding ground')},group=createArchitecture(visiblePlan);group.name='Inhabitable architecture / placed sculpture aggregation';
  try{const {offset,bounds}=locateInHall(group,input.centre,FLOOR_HALF);const meshes=[];group.traverse(o=>{if(o.isMesh)meshes.push(o);});
   group.userData={engine:'inhabitable-v1',snapshot:true,settings:plan.settings,sources:input.attribution,validation:plan.validation};
   return {group,meshes,plan,offset,bounds,attribution:input.attribution,triangles:plan.meshes.reduce((n,m)=>n+(m.index?.length||m.positions.length/3)/3,0)};
  }catch(e){disposeResult({group});throw e;}
 }
 async function generate({restore=false,override=null}={}){
  if(busy||disposed||window.ExhibitionAgentDrafts?.state().busy)return false;await placement.ready;
  const key=layoutSignature(placement),revisionAtStart=settingsRevision,pendingAtStart={...settings};busy=true;progress=0;error='';ui();let next;
  try{
   const chosen=checkSettings(override||settings);if(result&&!stale&&!restore&&!override)chosen.seed=((Math.imul(chosen.seed,1664525)+1013904223)>>>0)%1000000;
   const input=await preparePlacedSources(placement.spaceSources(),chosen,(p,m)=>{progress=p*.05;say(m);ui();});if(disposed)throw Error('The exhibition was closed.');
   const plan=await compute(input);if(disposed)throw Error('The exhibition was closed.');if(key!==layoutSignature(placement))throw Error('The placed models changed during generation. Update space again.');
   next=candidate(plan,input);onSpaceBounds?.(next.bounds);disposeResult(result);result=next;next=null;scene.add(result.group);
   signature=key;settings=settingsRevision!==revisionAtStart?settings:restore?pendingAtStart:{...chosen};generatedSettings={...chosen};stale=JSON.stringify(settings)!==JSON.stringify(generatedSettings);lastSafe=null;sourceSelection=null;progress=100;visibility(true);
   surface.dataset.spaceSeed=String(chosen.seed);surface.dataset.spaceRoutesClear=String(plan.validation.routesClear);surface.dataset.spaceTriangles=String(result.triangles);
   say(stale?'SPACE READY / CHANGES STAGED FOR UPDATE':'SPACE READY / '+plan.nodes.length+' FRAGMENTS / '+chosen.corridorWidth.toFixed(1)+' M ROUTE');return true;
  }catch(e){disposeResult(next);error=e.message;say(error);return false;}finally{busy=false;ui();}
 }
 function localPoint(position){return {x:position.x-result.offset.x,z:position.z-result.offset.z};}
 function clearAt(x,z,h,radius){return bodyClear(result.plan.volumeGrid,result.plan.volumeGrid.surfaces,x,h,z,radius)&&floorClear(result.plan.nav,x,z,h,radius);}
 function enter(){
  if(!result||busy)return;visibility(true);const p=result.plan.entrance,q=result.plan.gathering,h=floorAt(result.plan.nav,p.x,p.z,p.y,1)??p.y??0;
  lastSafe={x:p.x+result.offset.x,z:p.z+result.offset.z,foot:h+result.offset.y};
  setView('room');navigate({x:lastSafe.x,z:lastSafe.z,y:lastSafe.foot+1.65,yaw:Math.atan2(p.x-q.x,p.z-q.z),pitch:0});
  say('INSIDE SPACE / WASD TO WALK');invalidate();
 }
 function constrain(position,radius=.35,{fly=false,eyeHeight=1.65}={}){
  if(!active||!result)return position;
  if(fly){const p=localPoint(position),foot=position.y-eyeHeight-result.offset.y;if(bodyClear(result.plan.volumeGrid,result.plan.volumeGrid.surfaces,p.x,foot,p.z,radius)){lastSafe={x:position.x,z:position.z,foot:position.y-eyeHeight};}else if(lastSafe)position.set(lastSafe.x,lastSafe.foot+eyeHeight,lastSafe.z);return position;}
  const wanted={x:position.x,z:position.z},start=lastSafe||{...wanted,foot:Math.max(0,position.y-eyeHeight)},steps=Math.max(1,Math.ceil(Math.hypot(wanted.x-start.x,wanted.z-start.z)/.12));let safe=start;
  for(let i=1;i<=steps;i++){
   const x=start.x+(wanted.x-start.x)*i/steps,z=start.z+(wanted.z-start.z)*i/steps,p=localPoint({x,z}),near=safe.foot-result.offset.y;
   let h=floorAt(result.plan.nav,p.x,p.z,near,.22);
   if(h===null&&Math.abs(safe.foot)<.22)h=-result.offset.y; // The existing main hall floor is real support outside the generated route.
   if(h===null||!clearAt(p.x,p.z,h,radius))break;safe={x,z,foot:h+result.offset.y};
  }
  lastSafe=safe;position.set(safe.x,safe.foot+eyeHeight,safe.z);surface.dataset.spaceFootHeight=String(safe.foot);return position;
 }
 async function exportGLB(){
  if(!result||busy)return false;busy=true;ui();say('Preparing GLB...');const value=result,visible=value.group.visible;
  try{value.group.visible=true;const buffer=await new GLTFExporter().parseAsync(value.group,{binary:true});download(new Blob([buffer],{type:'model/gltf-binary'}),'learning-vegas-inhabitable-space.glb');say('SPACE EXPORTED / GLB SNAPSHOT');return true;}catch(e){error=e.message;say(error);return false;}finally{value.group.visible=visible;busy=false;ui();invalidate();}
 }
 function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);}
 const settingChange=e=>{const el=e.target,key=el.dataset.spaceSetting;if(!key||el.value==='')return;try{settings=checkSettings({...settings,[key]:+el.value});settingsRevision++;stale=!!result&&(layoutSignature(placement)!==signature||JSON.stringify(settings)!==JSON.stringify(generatedSettings));say(stale?'SETTINGS CHANGED / UPDATE SPACE':result?'SPACE READY':'SETTINGS READY / MAKE SPACE');persist();ui();}catch(err){say(err.message);ui();}};
 for(const el of document.querySelectorAll('[data-space-setting]')){el.addEventListener('input',settingChange);el.addEventListener('change',settingChange);}
 const saveRecipe=()=>download(new Blob([JSON.stringify({format:'learning-vegas-inhabitable-space',version:1,settings:generatedSettings||settings,pendingSettings:settings,layout:layoutSnapshot(placement)},null,2)],{type:'application/json'}),'learning-vegas-space-recipe.json');
 const loadRecipe=async e=>{try{if(busy)throw Error('Wait for this generation before loading a recipe.');const file=e.target.files?.[0];if(!file||file.size>2000000)throw Error('Choose a space recipe under 2 MB.');const doc=JSON.parse(await file.text());if(doc.format!=='learning-vegas-inhabitable-space'||doc.version!==1||!Array.isArray(doc.layout))throw Error('Choose a saved MAKE SPACE recipe.');
   const chosen=checkSettings(doc.settings),now=layoutSnapshot(placement);if(doc.layout.length!==now.length||doc.layout.some(s=>!now.some(n=>n.id===s.id&&n.modelId===s.modelId)))throw Error('This recipe needs the same placed models. Restore those models first.');
   await placement.applyLayout(doc.layout);settings=chosen;stale=!!result;await generate({override:chosen});
  }catch(err){error=err.message;say(error);}finally{e.target.value='';ui();}};
 function placementChange(){if(result){stale=layoutSignature(placement)!==signature||JSON.stringify(settings)!==JSON.stringify(generatedSettings);say(stale?'LAYOUT CHANGED / UPDATE SPACE':'SPACE READY');}ui();persist();}
 function down(e){pointerDown=[e.clientX,e.clientY];}
 function up(e){if(!active||!result||!pointerDown||Math.hypot(e.clientX-pointerDown[0],e.clientY-pointerDown[1])>5)return;pointerDown=null;const r=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);const camera=getCamera?.();if(!camera)return;ray.setFromCamera(pointer,camera);const hit=ray.intersectObjects(result.meshes,false).find(h=>h.object.userData.sourceId||h.object.userData.sourceIds);if(!hit)return;
  const u=hit.object.userData,attr=hit.object.geometry.attributes.sourceTag,tag=attr&&hit.face?Math.round(attr.getX(hit.face.a)):0,id=u.sourceIds?.[tag]||u.sourceId,source=result.attribution[id];sourceSelection={id,name:source?.name||'Source fragment',operation:u.operation};say('FROM '+sourceSelection.name+' / '+(u.operation||'Transformed source fragment'));$('exhibition-space-status').title=u.operation||'';surface.dataset.spaceSource=sourceSelection.name;
 }
 const handlers=[['exhibition-make-space',()=>generate()],['exhibition-enter-space',enter],['exhibition-space-original',()=>visibility(!active)],['exhibition-export-space',exportGLB],['exhibition-space-save',saveRecipe],['exhibition-space-load',()=>$('exhibition-space-recipe').click()]];
 handlers.forEach(([id,fn])=>$(id).addEventListener('click',fn));$('exhibition-space-recipe').addEventListener('change',loadRecipe);
 window.addEventListener('exhibition-placement-change',placementChange);window.addEventListener('exhibition-draft-queue-change',ui);renderer.domElement.addEventListener('pointerdown',down);renderer.domElement.addEventListener('pointerup',up);
 const ready=placement.ready.then(async()=>{ui();try{const saved=JSON.parse(localStorage.getItem(KEY)||'null');if(saved?.version===1){settings=checkSettings(saved.settings);generatedSettings=saved.generatedSettings;if(saved.active&&saved.signature===layoutSignature(placement))await generate({restore:true,override:generatedSettings||settings});ui();}}catch(e){say('Previous space could not reopen: '+e.message);}});
 return Object.freeze({ready,generate,enter,showOriginal:()=>visibility(false),showSpace:()=>visibility(true),constrain,collisionMeshes:()=>active&&result?result.meshes:[],exportGLB,
  state:()=>({engine:'inhabitable-v1',active,busy,stale,error,signature,settings:{...settings},generatedSettings,progress,connected:!!result?.plan.validation.routesClear,minimumClearance:result?.plan.validation.headroom||0,triangles:result?.triangles||0,validation:result?.plan.validation||null,bounds:result?{min:result.bounds.min.toArray(),max:result.bounds.max.toArray()}:null,offset:result?.offset||null,sourceSelection}),
  dispose:()=>{disposed=true;clearTimeout(feedbackTimer);cancelPending?.();worker?.terminate();handlers.forEach(([id,fn])=>$(id).removeEventListener('click',fn));$('exhibition-space-recipe').removeEventListener('change',loadRecipe);for(const el of document.querySelectorAll('[data-space-setting]')){el.removeEventListener('input',settingChange);el.removeEventListener('change',settingChange);}window.removeEventListener('exhibition-placement-change',placementChange);window.removeEventListener('exhibition-draft-queue-change',ui);renderer.domElement.removeEventListener('pointerdown',down);renderer.domElement.removeEventListener('pointerup',up);onSpaceLight?.(null,false);disposeResult(result);result=null;}
 });
}
