import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {Worker as NodeWorker} from 'node:worker_threads';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {createInhabitableSpace} from '../src/exhibition-inhabitable.js';
import {SETTINGS} from '../src/inhabitable/form-state.js';
class Element extends EventTarget{constructor(){super();this.dataset={};this.hidden=false;this.textContent='';this.value='';}setAttribute(k,v){this[k]=v;}click(){this.dispatchEvent(new Event('click'));}}
const seedInput=new Element();seedInput.dataset.spaceSetting='seed';seedInput.value='42';seedInput.nextElementSibling={tagName:'OUTPUT',textContent:''};const elements=new Map();globalThis.document={baseURI:'http://127.0.0.1:8065/exhibition.html',getElementById:id=>{if(!elements.has(id))elements.set(id,new Element());return elements.get(id);},querySelectorAll:()=>[seedInput],createElement:()=>new Element()};
globalThis.window=new EventTarget();globalThis.localStorage={data:new Map(),getItem(k){return this.data.get(k)||null;},setItem(k,v){this.data.set(k,v);}};
globalThis.requestAnimationFrame=fn=>setTimeout(fn,0);globalThis.FileReader=class{readAsArrayBuffer(b){b.arrayBuffer().then(result=>{this.result=result;this.onloadend?.();});}};
let lastPlan,capturedBlob;URL.createObjectURL=blob=>{capturedBlob=blob;return 'blob:qa';};URL.revokeObjectURL=()=>{};
const workerURL=new URL('../src/inhabitable/form-worker.js',import.meta.url).href;
globalThis.Worker=class{constructor(){this.worker=new NodeWorker(`const {parentPort}=require('node:worker_threads');global.self={postMessage:(value,buffers)=>parentPort.postMessage(value,buffers)};import(${JSON.stringify(workerURL)}).then(()=>parentPort.on('message',data=>self.onmessage({data})));`,{eval:true});this.worker.on('message',data=>{if(data.plan)lastPlan=data.plan;this.onmessage?.({data});});this.worker.on('error',e=>this.onerror?.(e));}postMessage(v){this.worker.postMessage(v);}terminate(){this.worker.terminate();}};
const loader=new GLTFLoader(),placed=[];
for(const [k,name]of ['City-model-05','City-model-08','test-2'].entries()){
 const b=await fs.readFile('site/assets/spatial-validation/'+name+'.glb'),g=await loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');const object=new THREE.Group();object.add(g.scene);object.position.set((k-1)*5,.015,k===1?4:-3);object.rotation.y=k*.5;object.scale.setScalar(1.1+k*.15);
 placed.push({id:'placed-'+k,modelId:'actual-'+name,name,object,layout:{col:5+k*4,row:6+k*3,span:2,scale:.8,rotation:k*.5}});
}
const originals=placed.map(p=>({p:p.object.position.toArray(),r:p.object.rotation.toArray(),s:p.object.scale.toArray(),meshes:(()=>{const m=[];p.object.traverse(o=>{if(o.isMesh)m.push({geometry:o.geometry,positions:Array.from(o.geometry.attributes.position.array),material:o.material});});return m;})()}));
let input=placed.slice(0,1),view='axonometric',cameraMoves=0,navigated=null;
const scene=new THREE.Scene(),canvas=new Element(),camera=new THREE.PerspectiveCamera();camera.position.set(48,48,48);const cameraBefore=camera.position.toArray();
const placement={ready:Promise.resolve(),spaceSources:()=>input,state:()=>({modelCount:input.length}),showSources:v=>{placement.visible=v;},applyLayout:async()=>true};
const context={scene,renderer:{domElement:canvas},placement,getCamera:()=>camera,getView:()=>view,setView:v=>{view=v;cameraMoves++;},navigate:v=>{navigated=v;cameraMoves++;},invalidate:()=>{},onSpaceBounds:()=>{},onSpaceLight:()=>{}};const engine=createInhabitableSpace(context);
await engine.ready;
assert(await engine.generate({override:{...SETTINGS,moduleCount:1,seed:42}}));assert(engine.state().active&&engine.state().connected);assert.equal(elements.get('exhibition-space-keyword').textContent,'MAKE SPACE');assert.equal(engine.state().validation.modules,1);console.log('Single placed source: generated in the shared scene.');
input=placed;window.dispatchEvent(new Event('exhibition-placement-change'));assert(engine.state().stale&&engine.state().active);
assert(await engine.generate({override:{...SETTINGS,moduleCount:9,seed:42}}));assert.equal(cameraMoves,0);assert.deepEqual(camera.position.toArray(),cameraBefore);assert.equal(engine.state().validation.topology.components,1);
seedInput.value='77';seedInput.dispatchEvent(new Event('input'));assert.equal(engine.state().settings.seed,77);assert(engine.state().stale&&engine.state().active);seedInput.value='42';seedInput.dispatchEvent(new Event('input'));assert.equal(engine.state().stale,false);const plan=lastPlan,offset=engine.state().offset;engine.enter();assert.equal(view,'room');assert(navigated.y>=1.65);
let walkingSamples=0,eye=new THREE.Vector3(navigated.x,navigated.y,navigated.z);
const walk=points=>{for(let k=1;k<points.length;k++){const a=points[k-1],b=points[k];for(let f=.25;f<=1;f+=.25){eye.set(a.x+(b.x-a.x)*f+offset.x,1.65,a.z+(b.z-a.z)*f+offset.z);engine.constrain(eye,.35,{fly:false,eyeHeight:1.65});const expected=new THREE.Vector3(a.x+(b.x-a.x)*f+offset.x,a.y+(b.y-a.y)*f+.055+offset.y+1.65,a.z+(b.z-a.z)*f+offset.z);assert(eye.distanceTo(expected)<.13,'Main-site walk must follow actual supported floors: '+eye.distanceTo(expected));walkingSamples++;}}};
walk(plan.paths.find(p=>p.role==='carved entrance').points);
const edge=plan.paths.find(p=>p.from===plan.nodes[0].id);if(edge)walk(edge.points);
assert(walkingSamples>10);
engine.enter();eye.set(navigated.x,navigated.y,navigated.z);
const ground=eye.clone();eye.y+=.5;engine.constrain(eye,.35,{fly:true,eyeHeight:1.65});
assert(eye.y>ground.y+.3,'Flight can ascend within the carved entrance');
const elevated=eye.y;eye.y-=.2;engine.constrain(eye,.35,{fly:true,eyeHeight:1.65});assert(eye.y<elevated-.1,'Flight can descend');
engine.constrain(eye,.35,{fly:false,eyeHeight:1.65});assert(Math.abs(eye.y-ground.y)<.02,'Returning to walk lands on actual support');
eye.copy(ground);eye.y-=5;engine.constrain(eye,.35,{fly:true,eyeHeight:1.65});assert(eye.y>=ground.y-.02,'Descent cannot cross the supporting floor');
engine.constrain(eye,.35,{fly:false,eyeHeight:1.65});
// Walk the route again after landing: no stale airborne height can lock walking.
walk(plan.paths.find(p=>p.role==='carved entrance').points);
assert.equal(await engine.exportGLB(),true);const raw=await capturedBlob.arrayBuffer();await loader.parseAsync(raw,'');await fs.mkdir('runtime/make-space-integration',{recursive:true});await fs.writeFile('runtime/make-space-integration/make-space-snapshot.glb',Buffer.from(raw));
const previous=engine.state().signature,previousGroup=scene.getObjectByName('Inhabitable architecture / placed sculpture aggregation');input=[];window.dispatchEvent(new Event('exhibition-placement-change'));assert.equal(await engine.generate(),false);assert.equal(engine.state().signature,previous);assert.equal(scene.getObjectByName(previousGroup.name),previousGroup);assert.equal(engine.state().active,true);
input=placed;const pending=engine.generate({override:{...SETTINGS,seed:77}});await new Promise(r=>setTimeout(r,20));placed[0].layout.col++;window.dispatchEvent(new Event('exhibition-placement-change'));assert.equal(await pending,false);assert.match(engine.state().error,/changed during generation/);assert.equal(scene.getObjectByName(previousGroup.name),previousGroup);placed[0].layout.col--;window.dispatchEvent(new Event('exhibition-placement-change'));
for(let k=0;k<placed.length;k++){const o=originals[k];assert.deepEqual(placed[k].object.position.toArray(),o.p);assert.deepEqual(placed[k].object.rotation.toArray(),o.r);assert.deepEqual(placed[k].object.scale.toArray(),o.s);for(const m of o.meshes){assert.deepEqual(Array.from(m.geometry.attributes.position.array),m.positions);assert(m.material);}}
const report={base:'d593629',singleModel:true,multipleModels:true,actualWorker:true,originalsUnchanged:true,generatePreservesCamera:true,staleKeepsSpace:true,parameterInputs:true,makeSpaceLabelStable:true,flightAscendsAndDescends:true,landingRestoresSupportedWalk:true,descentStopsAtFloor:true,failedUpdateKeepsSpace:true,inFlightLayoutChangeDiscarded:true,walkingSamples,validation:plan.validation,glbReimport:true,glbBytes:raw.byteLength};
seedInput.value='77';seedInput.dispatchEvent(new Event('input'));engine.dispose();const restored=createInhabitableSpace({...context,scene:new THREE.Scene()});await restored.ready;assert.equal(restored.state().settings.seed,77);assert.equal(restored.state().generatedSettings.seed,42);assert(restored.state().active&&restored.state().stale);report.pendingSettingsSurviveRefresh=true;restored.dispose();await fs.writeFile('runtime/make-space-integration/checks.json',JSON.stringify(report,null,2));console.log('MAKE SPACE adapter checks passed / '+walkingSamples+' actual floor-following samples.');
