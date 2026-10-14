import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {TransformControls} from 'three/examples/jsm/controls/TransformControls.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
import {validDescriptor,modelFactory} from './exhibition-composition.js';
(async()=>{
'use strict';
const $=id=>document.getElementById(id),paper=$('exhibition-paper'),canvas=$('exhibition-canvas'),W=1000,H=1400;
const DB='learning-vegas-exhibition-model-loop-v1',FORMAT='borrowed-worlds-collage',WORKSPACE='exhibition-model-loop-v1';
const clone=v=>structuredClone(v),escape=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const layers=[],selected=new Set(),imageAssets={},undo=[],redo=[],clipboard=[];
let generationEpoch=0;let controller,generated=null,analysisBusy=false,restoreBusy=false,preview=false,working=null,timer,revision=0,photoPage=0,photoRows=[],gesture=false,transformBefore=null;
const loader=new GLTFLoader(),scene=new THREE.Scene(),root=new THREE.Group(),pivot=new THREE.Group();
const factory=modelFactory(loader);
scene.add(root);root.add(pivot);
const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,preserveDrawingBuffer:true,powerPreference:'low-power'});
renderer.setPixelRatio(1);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.08;
const camera=new THREE.OrthographicCamera(-3.5,3.5,4.9,-4.9,.05,100);camera.position.set(0,0,18);
scene.add(new THREE.HemisphereLight('#ffffff','#b9b1a8',.95));
const light=new THREE.DirectionalLight('#fff6ed',1.55);light.position.set(-4,7,12);scene.add(light);
const pm=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment();scene.environment=pm.fromScene(room,.04).texture;scene.environmentIntensity=.50;pm.dispose();room.dispose();
const orbit=new OrbitControls(camera,canvas);orbit.mouseButtons={LEFT:null,MIDDLE:THREE.MOUSE.PAN,RIGHT:THREE.MOUSE.ROTATE};orbit.enableZoom=false;orbit.enableDamping=false;orbit.addEventListener('change',()=>{draw();if(!restoreBusy)changed(false);});
const controls=new TransformControls(camera,canvas);controls.setSize(.75);scene.add(controls.getHelper());
controls.addEventListener('dragging-changed',e=>{gesture=e.value;orbit.enabled=!e.value;if(e.value)transformBefore=documentValue();else if(transformBefore){remember(transformBefore);transformBefore=null;changed();}});
controls.addEventListener('objectChange',()=>draw());
const ray=new THREE.Raycaster(),mouse=new THREE.Vector2(),ghost=document.createElement('div');
ghost.className='exhibition-drag-ghost';ghost.hidden=true;ghost.innerHTML='<img alt=""><span></span>';document.body.append(ghost);
const ghostImage=ghost.querySelector('img'),ghostLabel=ghost.querySelector('span'),thumbCache=new Map();let dragKey=null,thumbRenderer=null;
async function thumbnail(desc){const key=desc.id||desc.previewUrl;if(thumbCache.has(key))return thumbCache.get(key);const task=(async()=>{const object=await makeObject(desc),previewScene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(32,112/136,.05,25);camera.position.set(0,.15,6);camera.lookAt(0,0,0);previewScene.add(object,new THREE.HemisphereLight('#ffffff','#b3b3b3',1.1));const light=new THREE.DirectionalLight('#fff8ed',1.6);light.position.set(-3,5,7);previewScene.add(light);thumbRenderer ||= new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true,powerPreference:'low-power'});thumbRenderer.setSize(112,136);thumbRenderer.outputColorSpace=THREE.SRGBColorSpace;thumbRenderer.toneMapping=THREE.ACESFilmicToneMapping;thumbRenderer.toneMappingExposure=1.0;thumbRenderer.render(previewScene,camera);const image=thumbRenderer.domElement.toDataURL('image/png');releasePhoto({object});return image;})();thumbCache.set(key,task);if(thumbCache.size>32)thumbCache.delete(thumbCache.keys().next().value);return task;}

function message(text){$('exhibition-message').textContent=text;}
function storage(mode,value){return new Promise((resolve,reject)=>{const req=indexedDB.open(DB,1);req.onupgradeneeded=()=>req.result.createObjectStore('draft');req.onerror=()=>reject(req.error);req.onsuccess=()=>{const db=req.result,tx=db.transaction('draft',mode),req2=mode==='readonly'?tx.objectStore('draft').get('current'):tx.objectStore('draft').put(value,'current');let result;req2.onsuccess=()=>result=req2.result;tx.oncomplete=()=>{db.close();resolve(result);};tx.onerror=()=>reject(tx.error);};});}
function transform(layer){layer.object.updateWorldMatrix(true,false);const p=new THREE.Vector3(),q=new THREE.Quaternion(),s=new THREE.Vector3();layer.object.matrixWorld.decompose(p,q,s);return{position:p.toArray(),quaternion:q.toArray(),scale:s.toArray()};}
function documentValue(){return{format:FORMAT,workspace:WORKSPACE,width:W,height:H,artworkName:$('exhibition-artwork-name').value,editingSurface:'sculpture',modelTarget:'city',background:'transparent',
 layers:layers.map(l=>({id:l.id,sourceId:l.id,objectId:l.descriptor.id||l.descriptor.name,vaPartId:'exhibition',x:0,y:0,w:W,h:H,rotation:0,strokes:[],model3D:{descriptor:clone(l.descriptor),...transform(l)}})),
 assets:clone(imageAssets),view:{position:camera.position.toArray(),target:orbit.target.toArray(),zoom:camera.zoom},generatedModel:generated?.record||null};}
function remember(doc=documentValue()){undo.push(doc);if(undo.length>20)undo.shift();redo.length=0;}
function draw(){renderer.render(scene,camera);}
function resize(){const width=Math.max(1,paper.clientWidth),height=Math.max(1,paper.clientHeight);renderer.setSize(width,height,false);camera.left=-3.5;camera.right=3.5;camera.top=3.5*height/width;camera.bottom=-camera.top;camera.updateProjectionMatrix();draw();}
new ResizeObserver(resize).observe(paper);
function detach(){controls.detach();for(const l of layers)if(l.object.parent===pivot)root.attach(l.object);pivot.position.set(0,0,0);pivot.quaternion.identity();pivot.scale.set(1,1,1);}
function select(ids){detach();selected.clear();ids.forEach(id=>{if(layers.some(l=>l.id===id))selected.add(id);});const items=layers.filter(l=>selected.has(l.id));if(items.length){const box=new THREE.Box3();items.forEach(l=>box.expandByObject(l.object));pivot.position.copy(box.getCenter(new THREE.Vector3()));if(items.length===1)pivot.quaternion.copy(items[0].object.getWorldQuaternion(new THREE.Quaternion()));pivot.updateMatrixWorld(true);items.forEach(l=>pivot.attach(l.object));controls.attach(pivot);}
 renderUI();draw();}
function renderUI(){for(const [id,v] of [['exhibition-rotation-x',pivot.rotation.x],['exhibition-rotation-y',pivot.rotation.y],['exhibition-rotation',pivot.rotation.z]])if(document.activeElement!==$(id))$(id).value=Math.round(THREE.MathUtils.radToDeg(v));$('exhibition-drop-note').hidden=layers.length>0;$('exhibition-layer-count').textContent=layers.length;$('exhibition-layer-list').innerHTML=layers.slice().reverse().map(l=>'<button draggable="true" data-layer="'+l.id+'" aria-pressed="'+selected.has(l.id)+'">'+escape(l.descriptor.name)+'</button>').join('');
$('exhibition-undo').disabled=!undo.length;$('exhibition-redo').disabled=!redo.length;$('exhibition-selection-copy').disabled=!selected.size;$('exhibition-delete').disabled=!selected.size;
$('exhibition-drag-generated').hidden=!generated;$('exhibition-drag-generated').disabled=analysisBusy;
$('exhibition-install').disabled=!layers.length||preview||!window.ExhibitionWalk?.state().selectedDisplay;
$('exhibition-generation-note').textContent=layers.length?'组合已有模型后，点击「放入展览」。模型的位置、旋转与比例会一起保留。':'先从模型库选择雕塑，或把左侧展品拖到工作台。';
$('exhibition-drag-generated').textContent=analysisBusy?'Checking new exhibit…':'Drag new model to a display';
}
function changed(persist=true){revision++;renderUI();draw();if(!restoreBusy)controller?.changed(documentValue());if(persist&&!restoreBusy&&!preview){clearTimeout(timer);timer=setTimeout(()=>storage('readwrite',documentValue()).catch(()=>message('Browser storage is full. Export your composition.')),300);}}
function valid(d){return validDescriptor(d);}
async function makeObject(desc){return factory.normalized(desc);}
async function addModel(desc,at=null,{history=true}={}){if(!valid(desc))throw Error('Only local exhibit models can be added.');if(desc.kind==='photo'&&layers.reduce((n,l)=>n+(l.descriptor.imageUrl?.length||0),0)+(desc.imageUrl?.length||0)>8*1024*1024)throw Error('This composition has reached its 8 MB photo budget. Remove a photograph before adding another.');if(layers.length>=40){message('Compose up to 40 copies at a time.');return;}if(!prepareEdit())return;if(history)remember();const object=await makeObject(desc),id=crypto.randomUUID();object.userData.layerId=id;object.traverse(o=>o.userData.layerId=id);object.position.set(at?.x??((layers.length%3)-1)*1.4,at?.y??(.9-Math.floor(layers.length/3)*1.1),at?.z??layers.length*.025);root.add(object);layers.push({id,descriptor:clone(desc),object});select([id]);changed();message('Model copy added. Use Move / Rotate / Scale handles, or Ctrl C / Ctrl V.');return id;}
async function restore(doc){if(doc?.workspace!==WORKSPACE||!Array.isArray(doc.layers))return false;generationEpoch++;analysisBusy=false;restoreBusy=true;detach();for(const l of layers){root.remove(l.object);releasePhoto(l);}layers.length=0;selected.clear();Object.assign(imageAssets,doc.assets||{});
 try{for(const item of doc.layers.slice(0,40)){const m=item.model3D;if(!valid(m?.descriptor)||![m.position,m.quaternion,m.scale].every(a=>Array.isArray(a)&&a.every(Number.isFinite)))continue;const object=await makeObject(m.descriptor);object.position.fromArray(m.position);object.quaternion.fromArray(m.quaternion);object.scale.fromArray(m.scale);object.traverse(o=>o.userData.layerId=item.id);root.add(object);layers.push({id:item.id,descriptor:clone(m.descriptor),object});}
 if(doc.view){camera.position.fromArray(doc.view.position);orbit.target.fromArray(doc.view.target);camera.zoom=doc.view.zoom||1;orbit.update();camera.updateProjectionMatrix();}$('exhibition-artwork-name').value=doc.artworkName||'';generated=null;renderUI();draw();return true;}finally{restoreBusy=false;}}
function drawModel(ctx,snapshot){if(snapshot.workspace!==WORKSPACE)return;const helper=controls.getHelper();scene.remove(helper);scene.updateMatrixWorld(true);
 const before=layers.map(l=>({l,position:l.object.position.clone(),quaternion:l.object.quaternion.clone(),scale:l.object.scale.clone(),visible:l.object.visible})),view={position:camera.position.clone(),quaternion:camera.quaternion.clone(),zoom:camera.zoom},byId=new Map(snapshot.layers.map(l=>[l.id,l.model3D]));
 for(const l of layers){const m=byId.get(l.id);l.object.visible=!!m;if(m){const world=new THREE.Matrix4().compose(new THREE.Vector3().fromArray(m.position),new THREE.Quaternion().fromArray(m.quaternion),new THREE.Vector3().fromArray(m.scale)),local=world.premultiply(l.object.parent.matrixWorld.clone().invert());local.decompose(l.object.position,l.object.quaternion,l.object.scale);}}
 if(snapshot.view){camera.position.fromArray(snapshot.view.position);camera.zoom=snapshot.view.zoom;camera.lookAt(new THREE.Vector3().fromArray(snapshot.view.target));}
 const old=renderer.getSize(new THREE.Vector2()),ratio=renderer.getPixelRatio(),projection=[camera.left,camera.right,camera.top,camera.bottom];renderer.setPixelRatio(1);renderer.setSize(snapshot.width,snapshot.height,false);camera.left=-3.5;camera.right=3.5;camera.top=4.9;camera.bottom=-4.9;camera.updateProjectionMatrix();renderer.setClearColor(0,0);draw();ctx.clearRect(0,0,snapshot.width,snapshot.height);ctx.drawImage(renderer.domElement,0,0,snapshot.width,snapshot.height);
 for(const m of before){m.l.object.position.copy(m.position);m.l.object.quaternion.copy(m.quaternion);m.l.object.scale.copy(m.scale);m.l.object.visible=m.visible;}camera.position.copy(view.position);camera.quaternion.copy(view.quaternion);camera.zoom=view.zoom;renderer.setPixelRatio(ratio);renderer.setSize(old.x,old.y,false);[camera.left,camera.right,camera.top,camera.bottom]=projection;camera.updateProjectionMatrix();scene.add(helper);draw();}
function snapshotPNG(){const c=document.createElement('canvas');c.width=W;c.height=H;drawModel(c.getContext('2d'),documentValue());return c.toDataURL('image/png');}
function compositionPalette(){
 const swatch=document.createElement('canvas');swatch.width=swatch.height=24;const ctx=swatch.getContext('2d',{willReadFrequently:true});
 draw();ctx.drawImage(canvas,0,0,24,24);const data=ctx.getImageData(0,0,24,24).data;let r=0,g=0,b=0,count=0;
 for(let i=0;i<data.length;i+=4){const max=Math.max(data[i],data[i+1],data[i+2]),min=Math.min(data[i],data[i+1],data[i+2]);if(data[i+3]<128||max-min<24||max<50)continue;r+=data[i];g+=data[i+1];b+=data[i+2];count++;}
 return count?'#'+[r,g,b].map(v=>Math.round(v/count).toString(16).padStart(2,'0')).join(''):'#cfb397';
}
function compositionDescriptor(){
 if(!layers.length||preview)throw Error('先把模型加入工作台，再放入展览。');
 const snapshot=documentValue(),parts=snapshot.layers.map(l=>clone(l.model3D));
 const desc={id:crypto.randomUUID(),kind:'composition',name:$('exhibition-artwork-name').value.trim()||'观众组合 · '+layers.length+' 个片段',parts,original:false,relevance:1,palette:compositionPalette(),generation:1+Math.max(0,...layers.map(l=>l.descriptor.generation||0)),sourceIds:[...new Set(layers.flatMap(l=>l.descriptor.sourceIds||[]))]};
 if(!valid(desc))throw Error('这个组合嵌套过多。请减少片段后再放入展览。');
 return desc;
}
async function exportComposition(){
 const object=await factory.raw(compositionDescriptor());
 try{const data=await new GLTFExporter().parseAsync(object,{binary:true,maxTextureSize:1024});const url=URL.createObjectURL(new Blob([data],{type:'model/gltf-binary'}));const a=document.createElement('a');a.href=url;a.download='visitor-composition.glb';a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);message('组合已导出为 GLB，可放入 Blender 或其他 3D 软件。');}
 finally{releasePhoto({object});}
}
async function analyzeModel(desc){const object=await makeObject(desc),temp=new THREE.Scene(),c=new THREE.PerspectiveCamera(35,1,.05,100);temp.add(object);temp.environment=scene.environment;temp.add(new THREE.HemisphereLight('#ffffff','#bfb8ae',2));const sun=new THREE.DirectionalLight('#fff8ed',3);sun.position.set(-4,7,10);temp.add(sun);
 const output=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true,powerPreference:'low-power'});output.setSize(384,384);output.outputColorSpace=THREE.SRGBColorSpace;output.toneMapping=THREE.ACESFilmicToneMapping;output.toneMappingExposure=1.08;
 const images=[];for(const angle of [0,Math.PI/3,-Math.PI/3]){c.position.set(Math.sin(angle)*5.5,1.0,Math.cos(angle)*5.5);c.lookAt(0,0,0);output.render(temp,c);images.push(output.domElement.toDataURL('image/png'));}output.dispose();output.forceContextLoss();
 const response=await fetch('/api/exhibition/relevance',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:desc.id,images})});const result=await response.json();if(!response.ok||!Number.isFinite(result.score))throw Error(result.error||'Visual resemblance analysis failed.');return result;}
async function onGenerated(record,snapshot){if(snapshot?.workspace!==WORKSPACE)return;const token=++generationEpoch;analysisBusy=true;renderUI();try{const saved=await fetch('assets/generated-sculptures/'+record.id+'/composition.json').then(r=>r.json());if(saved.workspace===WORKSPACE)snapshot=saved;}catch{}if(token!==generationEpoch)return;const parents=snapshot.layers.map(l=>l.model3D?.descriptor).filter(Boolean);const desc={id:record.id,name:'Recombined exhibit '+record.id.slice(0,6),previewUrl:record.modelUrl,fullUrl:record.modelUrl,relevance:null,generation:1+Math.max(0,...parents.map(p=>p.generation||0)),original:false,sourceIds:[...new Set(parents.flatMap(p=>p.sourceIds||[]))],record:clone(record)};
 generated={record:clone(record),descriptor:desc,composition:clone(snapshot)};analysisBusy=true;renderUI();message('New model ready. Checking its actual appearance against Las Vegas signs…');
 try{const analysis=await analyzeModel(desc);if(token!==generationEpoch)return;desc.relevance=analysis.score;desc.analysis=analysis;message('New model checked. Drag it onto a display, or select a display and click Replace.');}
 catch(err){if(token!==generationEpoch)return;generated=null;message('Model generated, but the resemblance check needs retry: '+err.message);}
 finally{if(token===generationEpoch){analysisBusy=false;renderUI();controller?.changed(documentValue());if(!preview)storage('readwrite',documentValue()).catch(()=>{});}}}
function prepareEdit(){if(!preview)return true;message('Return to work before editing. Your unfinished composition is kept.');return false;}
function releasePhoto(l){const geometries=new Set(),materials=new Set(),textures=new Set();l.object.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const m of [].concat(o.material||[])){materials.add(m);Object.values(m).forEach(t=>{if(t?.isTexture)textures.add(t);});}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());}
function remove(){if(!selected.size||!prepareEdit())return;remember();detach();for(let i=layers.length-1;i>=0;i--)if(selected.has(layers[i].id)){root.remove(layers[i].object);releasePhoto(layers[i]);layers.splice(i,1);}selected.clear();changed();}
function apply(fn){if(!selected.size||!prepareEdit())return;remember();fn();changed();}
function setMode(mode){controls.setMode(mode);for(const [id,value] of [['exhibition-move','translate'],['exhibition-rotate','rotate'],['exhibition-scale','scale']])$(id).setAttribute('aria-pressed',String(value===mode));}
function coordinates(e){const r=canvas.getBoundingClientRect();mouse.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(mouse,camera);}
const marquee=document.createElement('div');marquee.className='exhibition-marquee';marquee.hidden=true;paper.append(marquee);
let down=null,lastClick=null,rotateLatch=null;
function dragPlanePoint(e,plane){coordinates(e);return ray.ray.intersectPlane(plane,new THREE.Vector3());}
canvas.addEventListener('pointerdown',e=>{canvas.focus({preventScroll:true});if(e.button!==0||preview)return;coordinates(e);const hit=ray.intersectObjects(layers.map(l=>l.object),true)[0],id=hit?.object.userData.layerId;if(!id&&controls.axis)return;
 e.preventDefault();e.stopImmediatePropagation();const now=performance.now(),doubleDrag=!!id&&((lastClick?.id===id&&now-lastClick.time<450&&Math.hypot(e.clientX-lastClick.x,e.clientY-lastClick.y)<9)||(rotateLatch?.id===id&&now<rotateLatch.until));rotateLatch=null;
 down={x:e.clientX,y:e.clientY,id,alt:e.altKey,pointerId:e.pointerId,moved:false,mode:doubleDrag?'rotate':controls.getMode()};if(id){const ids=e.shiftKey?[...selected,id]:selected.has(id)?[...selected]:[id];select(ids);if(e.altKey){clipboard.splice(0,clipboard.length,...documentValue().layers.filter(l=>selected.has(l.id)));paste().then(()=>{if(down)captureBodyDrag(e);});}}else if(!e.shiftKey)select([]);if(!e.altKey)captureBodyDrag(e);canvas.setPointerCapture(e.pointerId);},{capture:true});
function captureBodyDrag(e){if(!down)return;const normal=camera.getWorldDirection(new THREE.Vector3());down.plane=new THREE.Plane().setFromNormalAndCoplanarPoint(normal,pivot.position);down.world=dragPlanePoint(e,down.plane);down.position=pivot.position.clone();down.quaternion=pivot.quaternion.clone();down.scale=pivot.scale.clone();down.doc=documentValue();}
canvas.addEventListener('pointermove',e=>{if(!down||gesture||e.pointerId!==down.pointerId)return;const dx=e.clientX-down.x,dy=e.clientY-down.y;if(Math.hypot(dx,dy)<6&&!down.moved)return;
 if(down.id){if(!down.moved){remember(down.doc);down.moved=true;}const mode=down.mode;
 if(mode==='translate'){const point=dragPlanePoint(e,down.plane);if(point&&down.world)pivot.position.copy(down.position).add(point.sub(down.world));}
 else if(mode==='rotate'){pivot.quaternion.copy(down.quaternion);const qx=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),dy*.009),qy=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),dx*.009);pivot.quaternion.premultiply(qx).premultiply(qy);}
 else if(mode==='scale')pivot.scale.copy(down.scale).multiplyScalar(Math.max(.05,Math.min(12,Math.exp(-dy*.008))));draw();}
 else{down.moved=true;const r=paper.getBoundingClientRect();marquee.hidden=false;Object.assign(marquee.style,{left:Math.min(down.x,e.clientX)-r.left+'px',top:Math.min(down.y,e.clientY)-r.top+'px',width:Math.abs(dx)+'px',height:Math.abs(dy)+'px'});}
});
canvas.addEventListener('pointerup',e=>{if(!down)return;if(!down.id&&e.button===0&&Math.hypot(e.clientX-down.x,e.clientY-down.y)>8){const r=canvas.getBoundingClientRect(),x0=Math.min(down.x,e.clientX),x1=Math.max(down.x,e.clientX),y0=Math.min(down.y,e.clientY),y1=Math.max(down.y,e.clientY);const ids=layers.filter(l=>{const p=new THREE.Box3().setFromObject(l.object).getCenter(new THREE.Vector3()).project(camera);const x=r.left+(p.x+1)*r.width/2,y=r.top+(1-p.y)*r.height/2;return x>=x0&&x<=x1&&y>=y0&&y<=y1;}).map(l=>l.id);select(e.shiftKey?[...selected,...ids]:ids);}if(down.id&&!down.moved)lastClick={id:down.id,time:performance.now(),x:e.clientX,y:e.clientY};else if(down.moved)lastClick=null;if(down.id&&down.moved)changed();if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);marquee.hidden=true;down=null;});
canvas.addEventListener('dblclick',e=>{coordinates(e);const hit=ray.intersectObjects(layers.map(l=>l.object),true)[0];if(hit){e.preventDefault();rotateLatch={id:hit.object.userData.layerId,until:performance.now()+1600};}});
canvas.addEventListener('pointercancel',()=>{down=null;marquee.hidden=true;changed();});
canvas.addEventListener('contextmenu',e=>e.preventDefault());
async function paste(){if(!clipboard.length||!prepareEdit())return;remember();detach();const ids=[];for(const item of clipboard){if(layers.length>=40)break;const m=item.model3D,object=await makeObject(m.descriptor),id=crypto.randomUUID();object.position.fromArray(m.position);object.position.x+=.2;object.position.y-=.2;object.quaternion.fromArray(m.quaternion);object.scale.fromArray(m.scale);object.traverse(o=>o.userData.layerId=id);root.add(object);layers.push({id,descriptor:clone(m.descriptor),object});ids.push(id);}select(ids);changed();}
document.addEventListener('keydown',e=>{if(e.target.closest('input,textarea,select')||!paper.contains(document.activeElement))return;const k=e.key.toLowerCase(),mod=e.ctrlKey||e.metaKey;if(mod&&k==='c'){e.preventDefault();clipboard.splice(0,clipboard.length,...documentValue().layers.filter(l=>selected.has(l.id)));message('Copied. Ctrl V pastes another model copy.');}
 else if(mod&&k==='v'){e.preventDefault();paste().catch(err=>message(err.message));}
 else if(mod&&k==='a'){e.preventDefault();select(layers.map(l=>l.id));}
 else if(k==='delete'||k==='backspace'){e.preventDefault();remove();}
 else if(mod&&k==='z'){e.preventDefault();(e.shiftKey?redoAction:undoAction)();}
 else if(mod&&(k===']'||k==='['||k==='【'||k==='】')){e.preventDefault();apply(()=>{for(const l of layers.filter(l=>selected.has(l.id)))l.object.position.z+=(k===']'||k==='】'?.08:-.08);});}
 else if(k==='g')setMode('translate');else if(k==='r')setMode('rotate');else if(k==='s')setMode('scale');});
async function undoAction(){if(!undo.length||!prepareEdit())return;redo.push(documentValue());await restore(undo.pop());controller?.clear();changed();}
async function redoAction(){if(!redo.length||!prepareEdit())return;undo.push(documentValue());await restore(redo.pop());controller?.clear();changed();}
$('exhibition-undo').onclick=undoAction;$('exhibition-redo').onclick=redoAction;
$('exhibition-move').onclick=()=>setMode('translate');$('exhibition-rotate').onclick=()=>setMode('rotate');$('exhibition-scale').onclick=()=>setMode('scale');
$('exhibition-smaller').onclick=()=>apply(()=>pivot.scale.multiplyScalar(.9));$('exhibition-larger').onclick=()=>apply(()=>pivot.scale.multiplyScalar(1.1));
$('exhibition-rotation').onchange=e=>apply(()=>pivot.rotation.z=THREE.MathUtils.degToRad(Number(e.target.value)||0));
$('exhibition-rotation-x').onchange=e=>apply(()=>pivot.rotation.x=THREE.MathUtils.degToRad(Number(e.target.value)||0));
$('exhibition-rotation-y').onchange=e=>apply(()=>pivot.rotation.y=THREE.MathUtils.degToRad(Number(e.target.value)||0));
$('exhibition-flip-x').onclick=()=>apply(()=>pivot.scale.x*=-1);$('exhibition-flip-y').onclick=()=>apply(()=>pivot.scale.y*=-1);
$('exhibition-delete').onclick=remove;
$('exhibition-clear').onclick=()=>{if(!prepareEdit())return;remember();detach();layers.forEach(l=>{root.remove(l.object);releasePhoto(l);});layers.length=0;selected.clear();generationEpoch++;analysisBusy=false;generated=null;controller?.clear();changed();message('Composition cleared. Exhibition and saved models are kept.');};
$('exhibition-editor-reset').onclick=()=>{camera.position.set(0,0,18);camera.zoom=1;orbit.target.set(0,0,0);orbit.update();camera.updateProjectionMatrix();changed();};
$('exhibition-editor-zoom-in').onclick=()=>{camera.zoom=Math.min(3,camera.zoom*1.15);camera.updateProjectionMatrix();changed();};
$('exhibition-editor-zoom-out').onclick=()=>{camera.zoom=Math.max(.35,camera.zoom/1.15);camera.updateProjectionMatrix();changed();};
$('exhibition-layer-list').onclick=e=>{const b=e.target.closest('[data-layer]');if(b){select([b.dataset.layer]);canvas.focus({preventScroll:true});}};
function dragEvent(e,desc){if(!desc||!Number.isFinite(desc.relevance))return;e.dataTransfer.setData('application/x-exhibition-model',JSON.stringify(desc));e.dataTransfer.effectAllowed='copy';}
$('exhibition-layer-list').addEventListener('dragstart',e=>{const l=layers.find(l=>l.id===e.target.closest('[data-layer]')?.dataset.layer);if(l&&l.descriptor.kind!=='photo')dragEvent(e,l.descriptor);});
$('exhibition-selection-copy').addEventListener('dragstart',e=>{const l=layers.find(l=>selected.has(l.id));if(l)dragEvent(e,l.descriptor);});
$('exhibition-selection-copy').onclick=()=>{clipboard.splice(0,clipboard.length,...documentValue().layers.filter(l=>selected.has(l.id)));paste();};
$('exhibition-drag-generated').addEventListener('dragstart',e=>dragEvent(e,generated?.descriptor));
paper.addEventListener('dragover',e=>{e.preventDefault();paper.dataset.dragover='true';});
paper.addEventListener('dragleave',()=>delete paper.dataset.dragover);
paper.addEventListener('drop',async e=>{e.preventDefault();delete paper.dataset.dragover;try{const model=e.dataTransfer.getData('application/x-exhibition-model');if(model){await addModel(JSON.parse(model));return;}if(e.dataTransfer.files.length){await addFiles(e.dataTransfer.files);return;}const id=e.dataTransfer.getData('application/x-archive-image'),item=window.ARCHIVE_DATA?.items.find(i=>i.id===id);if(item)await addImage(item.image,item.title,item.id);}catch(err){message(err.message);}});
function dragGhost(x,y,desc){ghost.hidden=false;ghostLabel.textContent=desc.name;if(dragKey!==(desc.id||desc.previewUrl)){dragKey=desc.id||desc.previewUrl;ghostImage.removeAttribute('src');thumbnail(desc).then(url=>{if(!ghost.hidden&&dragKey===(desc.id||desc.previewUrl))ghostImage.src=url;}).catch(()=>{});}ghost.style.left=x+12+'px';ghost.style.top=y+12+'px';}
function dropCopy(x,y,desc){ghost.hidden=true;dragKey=null;const r=paper.getBoundingClientRect();if(x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom)addModel(desc).catch(e=>message(e.message));else message('Drop the copy onto the composition panel on the right.');}
async function addImage(url,name='Photo',id=crypto.randomUUID()){let imageUrl=url;if(!/^(data:image\/|assets\/)/.test(url)){const response=await fetch(url);const blob=await response.blob();imageUrl=await dataURL(blob);}return addModel({id,name,kind:'photo',imageUrl,generation:0,sourceIds:[],relevance:0});}
const dataURL=blob=>new Promise(resolve=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.readAsDataURL(blob);});
async function addFiles(files){for(const f of files)if(/^image\//.test(f.type)){if(f.size>8*1024*1024){message('Choose photos smaller than 8 MB.');continue;}await addImage(await dataURL(f),f.name);}}
$('exhibition-files').onchange=e=>{addFiles(e.target.files);e.target.value='';};
function renderPhotos(){const q=$('exhibition-photo-query').value.trim().toLowerCase(),archive=$('exhibition-photo-archive').value;photoRows=(window.ARCHIVE_DATA?.items||[]).filter(i=>i.type==='image'&&(!archive||i.archiveKey===archive)&&(!q||[i.title,i.description,...(i.tags||[])].join(' ').toLowerCase().includes(q)));const pages=Math.max(1,Math.ceil(photoRows.length/12));photoPage=Math.max(0,Math.min(photoPage,pages-1));$('exhibition-photo-grid').innerHTML=photoRows.slice(photoPage*12,photoPage*12+12).map(i=>'<button class="exhibition-photo-card" draggable="true" data-photo="'+escape(i.id)+'"><img src="'+escape(i.thumbnail)+'" loading="lazy" alt=""><span>'+escape(i.title)+'</span></button>').join('');$('exhibition-photo-page').textContent=(photoPage+1)+' / '+pages;$('exhibition-photo-prev').disabled=photoPage===0;$('exhibition-photo-next').disabled=photoPage===pages-1;}
$('exhibition-choose').onclick=()=>{renderPhotos();$('exhibition-materials').showModal();};$('exhibition-close-materials').onclick=()=>$('exhibition-materials').close();$('exhibition-photo-query').oninput=$('exhibition-photo-archive').onchange=()=>{photoPage=0;renderPhotos();};$('exhibition-photo-prev').onclick=()=>{photoPage--;renderPhotos();};$('exhibition-photo-next').onclick=()=>{photoPage++;renderPhotos();};
$('exhibition-photo-grid').addEventListener('dragstart',e=>{const card=e.target.closest('[data-photo]');if(card)e.dataTransfer.setData('application/x-archive-image',card.dataset.photo);});
$('exhibition-photo-grid').onclick=e=>{const card=e.target.closest('[data-photo]');if(!card)return;const item=photoRows.find(i=>i.id===card.dataset.photo);$('exhibition-materials').close();addImage(item.image,item.title,item.id).catch(e=>message(e.message));};
$('exhibition-export').onclick=()=>{const a=document.createElement('a');a.href=snapshotPNG();a.download='exhibition-composition.png';a.click();};
async function leavePreview(){if(!working)return;const saved=working;working=null;preview=false;await restore(saved.doc);await controller.restoreCaptured(saved.model);$('return-exhibition-work').hidden=true;changed();}
$('return-exhibition-work').onclick=leavePreview;
async function openSaved(e){try{const entry=await SavedSculptures.get(e.detail.id);if(!entry)return;if(!preview)working={doc:documentValue(),model:controller.capture()};preview=true;$('return-exhibition-work').hidden=false;if(e.detail.direction){await controller.prepareSaved(entry,e.detail.direction);await controller.transitionOut(e.detail.direction);}await restore(entry.composition);await controller.openSaved(entry,e.detail.direction||0);if(entry.composition.workspace===WORKSPACE)await onGenerated(entry.record,entry.composition);$('model-stage').scrollIntoView({behavior:'smooth',block:'center'});}catch(e){message(e.message);}}
window.addEventListener('saved-sculpture-open',openSaved);window.addEventListener('saved-sculpture-next',e=>{if(preview)openSaved(e);});
const stored=await storage('readonly').catch(()=>null);if(stored?.workspace===WORKSPACE)await restore(stored);
resize();
controller=await Sculpture3D.create({store:'learning-vegas-exhibition-loop-model-v1',directCollage:true,modelComposition:true,getDocument:documentValue,getComposition:documentValue,drawModel,isPreview:()=>preview||analysisBusy,message,onGenerated});
window.addEventListener('exhibition-select',()=>renderUI());
$('exhibition-export-glb').onclick=()=>exportComposition().catch(e=>message(e.message));
$('exhibition-artwork-name').oninput=()=>changed();
try{const response=await fetch('assets/exhibition-desert/model-manifest.json');if(!response.ok)throw Error('模型目录读取失败');const models=await response.json();const library=$('exhibition-model-library');library.replaceChildren();for(const entry of models){const button=document.createElement('button');button.className='exhibition-model-card';button.type='button';button.innerHTML='<span class="model-library-number">'+String(entry.display).padStart(2,'0')+'</span><span>'+escape(entry.name)+'</span><b aria-hidden="true">＋</b>';button.setAttribute('aria-label','加入 '+entry.name);button.onclick=async()=>{button.disabled=true;try{await addModel({...entry,relevance:1,original:true,sourceIds:[entry.display],generation:0});}catch(e){message('模型暂时无法读取，请等待素材安装后重试。');}finally{button.disabled=false;}};library.append(button);}}catch(e){$('exhibition-model-library').textContent=e.message;}
window.ExhibitionStudio=Object.freeze({getDocument:documentValue,addModel,addImage,addFiles,select,restore:async d=>{remember();await restore(d);changed();},state:()=>({layers:layers.length,selected:[...selected],preview,analysisBusy,generated:generated?.descriptor||null,model:controller?.state()}),generate:()=>controller.generate(),compositionDescriptor,exportComposition,clear:()=>$('exhibition-clear').click(),returnToWork:leavePreview,message,dragGhost,dropCopy,generatedDescriptor:()=>!analysisBusy?generated?.descriptor:null,snapshotPNG,analyzeModel,projectLayers:()=>layers.map(l=>{const r=canvas.getBoundingClientRect(),v=new THREE.Box3().setFromObject(l.object).getCenter(new THREE.Vector3()).project(camera);return{id:l.id,x:r.left+(v.x+1)*r.width/2,y:r.top+(1-v.y)*r.height/2};})});
if(stored?.generatedModel)await controller.restore(stored.generatedModel);
changed(false);
const openId=new URLSearchParams(location.search).get('saved');if(openId&&/^[a-f0-9-]{36}$/i.test(openId))window.dispatchEvent(new CustomEvent('saved-sculpture-open',{detail:{id:openId}}));
window.addEventListener('pagehide',()=>{clearTimeout(timer);if(!preview)storage('readwrite',documentValue()).catch(()=>{});ghost.hidden=true;});
})().catch(error=>{console.error(error);const el=document.getElementById('exhibition-message');if(el)el.textContent='Workspace could not start: '+error.message;});
