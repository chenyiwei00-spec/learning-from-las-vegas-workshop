import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {clone} from 'three/examples/jsm/utils/SkeletonUtils.js';

/* One shared model layer for both room cameras, stored as independent local GLBs. */
export function createExhibitionPlacement({scene,canvas,getCamera,getRoomMeshes,isRoom,orient,invalidate,suspend}) {
 const $=id=>document.getElementById(id),group=new THREE.Group(),loader=new GLTFLoader(),models=new Map(),entries=new Map(),pending=new Map();
 const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),plane=new THREE.Plane(new THREE.Vector3(0,1,0),0),point=new THREE.Vector3();
 const marker=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({color:0x82a18a,transparent:true,opacity:.32,depthWrite:false,side:THREE.DoubleSide,toneMapped:false}));
 marker.rotation.x=-Math.PI/2;marker.position.y=.012;marker.visible=false;scene.add(marker);
 group.name='exhibition-placed-models';scene.add(group);
 let selected=null,outline=null,moving=false,drag=null,queue=Promise.resolve(),restored=false,ghostUrl='';
 const notice=s=>{$('exhibition-placement-status').textContent=s;};
 function db(){return new Promise((resolve,reject)=>{const r=indexedDB.open('learning-vegas-exhibition-floor-v1',1);r.onupgradeneeded=()=>{r.result.createObjectStore('models',{keyPath:'id'});r.result.createObjectStore('layout');};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}
 async function read(){const d=await db();try{return await new Promise((resolve,reject)=>{const tx=d.transaction(['models','layout'],'readonly');const m=tx.objectStore('models').getAll(),l=tx.objectStore('layout').get('current');tx.oncomplete=()=>resolve({models:m.result,layout:l.result||[]});tx.onerror=()=>reject(tx.error);});}finally{d.close();}}
 function save(){
  const snapshot=[...entries.values()].map(e=>({...e.record})),used=new Set(snapshot.map(e=>e.modelId)),files=[...models.values()].filter(m=>used.has(m.id)).map(m=>({id:m.id,blob:m.blob,name:m.name,preview:m.preview||null}));
  queue=queue.catch(()=>{}).then(async()=>{const d=await db();try{await new Promise((resolve,reject)=>{const tx=d.transaction(['models','layout'],'readwrite'),store=tx.objectStore('models');const keys=store.getAllKeys();keys.onsuccess=()=>{const existing=new Set(keys.result);files.forEach(m=>{if(!existing.has(m.id))store.put(m);});keys.result.forEach(id=>{if(!used.has(id))store.delete(id);});};tx.objectStore('layout').put(snapshot,'current');tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);});}finally{d.close();}}).catch(error=>notice('Layout is available this session, but could not save: '+error.message));
  return queue;
 }
 function release(template){
  const gs=new Set(),ms=new Set(),ts=new Set();template.traverse(o=>{if(o.geometry)gs.add(o.geometry);for(const m of o.material?(Array.isArray(o.material)?o.material:[o.material]):[]){ms.add(m);for(const value of Object.values(m))if(value?.isTexture)ts.add(value);}});
  gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());ts.forEach(t=>{t.source?.data?.close?.();t.dispose();});
 }
 function prune(){const used=new Set([...entries.values()].map(e=>e.record.modelId));for(const [id,m]of models)if(!used.has(id)){release(m.template);models.delete(id);}}
 async function template(desc){
  if(models.has(desc.id))return models.get(desc.id);if(pending.has(desc.id))return pending.get(desc.id);
  const promise=(async()=>{
   if(!(desc.blob instanceof Blob))throw Error('This model is unavailable. Generate or open it again.');
   const gltf=await loader.parseAsync(await desc.blob.arrayBuffer(),'');
   const root=new THREE.Group();root.add(gltf.scene);root.updateMatrixWorld(true);
   const bounds=new THREE.Box3().setFromObject(root),size=bounds.getSize(new THREE.Vector3()),centre=bounds.getCenter(new THREE.Vector3());
   if(bounds.isEmpty()||!Number.isFinite(size.length())||size.length()<=0){release(root);throw Error('This file contains no visible 3D model.');}
   const scale=Math.min(.86/Math.max(size.x,size.z,1e-5),2.4/Math.max(size.y,1e-5));
   gltf.scene.position.sub(new THREE.Vector3(centre.x,bounds.min.y,centre.z));root.scale.setScalar(scale);
   const result={...desc,height:size.y*scale,template:root};models.set(desc.id,result);return result;
  })();pending.set(desc.id,promise);try{return await promise;}finally{pending.delete(desc.id);}
 }
 function occupied(col,row,ignore=null){return [...entries.values()].some(e=>e.record.id!==ignore&&e.record.col===col&&e.record.row===row);}
 function cellAt(x,y,ignore=null){
  const r=canvas.getBoundingClientRect();if(x<r.left||x>r.right||y<r.top||y>r.bottom)return null;
  const target=document.elementFromPoint(x,y);if(target?.closest('.workspace-expanded,.workspace-previews,.walk-toolbar,.exhibition-placement-tools,dialog'))return null;
  orient();scene.updateMatrixWorld(true);pointer.set((x-r.left)/r.width*2-1,-(y-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,getCamera());
  if(!raycaster.ray.intersectPlane(plane,point)||point.x< -10||point.x>=10||point.z< -10||point.z>=10)return null;
  if(isRoom()){const nearest=raycaster.intersectObjects(getRoomMeshes(),false)[0];if(nearest&&nearest.object.name!=='floor')return null;}
  const col=Math.floor(point.x+10),row=Math.floor(point.z+10);
  return {col,row,x:col-9.5,z:row-9.5,valid:!occupied(col,row,ignore)};
 }
 function hover(x,y,ignore=null){
  const cell=cellAt(x,y,ignore);marker.visible=!!cell;
  if(cell){marker.position.set(cell.x,.015,cell.z);marker.material.color.setHex(cell.valid?0x82a18a:0xb37060);}
  invalidate();return cell;
 }
 function stopHover(){marker.visible=false;invalidate();}
 function updateOutline(){
  if(outline){scene.remove(outline);outline.geometry.dispose();outline.material.dispose();outline=null;}
  const entry=entries.get(selected);if(entry){scene.updateMatrixWorld(true);outline=new THREE.BoxHelper(entry.object,0x87877c);scene.add(outline);}
  invalidate();
 }
 function select(id){
  selected=entries.has(id)?id:null;moving=false;
  const e=entries.get(selected);$('exhibition-placement-tools').hidden=!e;
  $('exhibition-placement-name').textContent=e?e.record.name+' / CELL '+(e.record.row*20+e.record.col+1):'';
  $('exhibition-move-model').setAttribute('aria-pressed','false');updateOutline();
 }
 function insert(record,m){
  const object=clone(m.template);object.position.set(record.col-9.5,.015,record.row-9.5);object.rotation.y=record.rotation||0;object.userData.placementId=record.id;group.add(object);
  entries.set(record.id,{record,object});invalidate();return record.id;
 }
 function validCell(cell){return cell?.valid&&Number.isInteger(cell.col)&&cell.col>=0&&cell.col<20&&Number.isInteger(cell.row)&&cell.row>=0&&cell.row<20;}
 async function place(desc,cell){
  if(!validCell(cell)||occupied(cell.col,cell.row))throw Error('Choose a free cell on the floor.');
  const m=await template(desc);
  if(occupied(cell.col,cell.row)){prune();throw Error('This cell is already occupied.');}
  const id=insert({id:crypto.randomUUID(),modelId:m.id,col:cell.col,row:cell.row,rotation:0,name:desc.name||'Generated model'},m);
  select(id);await save();notice('Model placed in cell '+(cell.row*20+cell.col+1)+'. Drag it to move, or select Rotate / Remove.');return id;
 }
 function move(id,cell){
  const e=entries.get(id);if(!e||!validCell(cell)||occupied(cell.col,cell.row,id))return false;
  e.record.col=cell.col;e.record.row=cell.row;e.object.position.set(cell.col-9.5,.015,cell.row-9.5);select(id);save();notice('Moved to cell '+(cell.row*20+cell.col+1)+'.');return true;
 }
 function pickExact(event){
  orient();scene.updateMatrixWorld(true);const r=canvas.getBoundingClientRect();pointer.set((event.clientX-r.left)/r.width*2-1,-(event.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,getCamera());
  const hit=raycaster.intersectObjects(group.children,true)[0];if(!hit)return null;
  // A model behind an opaque room wall must not intercept navigation.
  if(isRoom()){const wall=raycaster.intersectObjects(getRoomMeshes(),false)[0];if(wall&&wall.distance<hit.distance)return null;}
  let o=hit.object;while(o&&!o.userData.placementId)o=o.parent;return o?.userData.placementId||null;
 }
 function pick(event){
  const direct=pickExact(event);if(direct)return direct;
  // Two display pixels make fine neon edges selectable without a large bounding-box target.
  for(const [x,y]of [[1,0],[-1,0],[0,1],[0,-1],[2,0],[-2,0],[0,2],[0,-2]]){const id=pickExact({clientX:event.clientX+x,clientY:event.clientY+y});if(id)return id;}
  return null;
 }
 function hideGhost(){const g=$('exhibition-drag-ghost');g.hidden=true;if(ghostUrl)URL.revokeObjectURL(ghostUrl);ghostUrl='';}
 function showGhost(e,entry){
  const g=$('exhibition-drag-ghost'),preview=models.get(entry.record.modelId)?.preview;
  if(preview&&!ghostUrl){ghostUrl=URL.createObjectURL(preview);g.querySelector('img').src=ghostUrl;}
  g.hidden=false;g.style.transform='translate('+(e.clientX+16)+'px,'+(e.clientY+16)+'px)';
  const cell=hover(e.clientX,e.clientY,entry.record.id);g.dataset.valid=String(!!cell?.valid);g.querySelector('span').textContent=cell?.valid?'CELL '+(cell.row*20+cell.col+1):cell?'Cell occupied':'Move over the floor';
 }
 canvas.addEventListener('pointerdown',event=>{
  if(event.button!==0)return;
  const id=pick(event);
  if(moving&&selected&&!id){event.preventDefault();event.stopImmediatePropagation();const cell=hover(event.clientX,event.clientY,selected);if(move(selected,cell))stopHover();return;}
  if(!id)return;
  event.preventDefault();event.stopImmediatePropagation();suspend();select(id);drag={id,pointerId:event.pointerId,x:event.clientX,y:event.clientY,started:false};canvas.setPointerCapture(event.pointerId);
 },true);
 canvas.addEventListener('pointermove',event=>{
  if(moving&&!drag){hover(event.clientX,event.clientY,selected);return;}
  if(!drag||drag.pointerId!==event.pointerId)return;
  event.preventDefault();event.stopImmediatePropagation();if(!drag.started&&Math.hypot(event.clientX-drag.x,event.clientY-drag.y)<6)return;drag.started=true;showGhost(event,entries.get(drag.id));
 },true);
 function end(event){
  if(!drag||drag.pointerId!==event.pointerId)return;event.preventDefault();event.stopImmediatePropagation();
  if(drag.started&&event.type!=='pointercancel'){const cell=cellAt(event.clientX,event.clientY,drag.id);if(!move(drag.id,cell))notice('Choose a free floor cell. The model stays in its previous position.');}
  try{canvas.releasePointerCapture(event.pointerId);}catch{}drag=null;hideGhost();stopHover();
 }
 canvas.addEventListener('pointerup',end,true);canvas.addEventListener('pointercancel',end,true);
 canvas.addEventListener('lostpointercapture',()=>{drag=null;hideGhost();stopHover();});
 $('exhibition-move-model').onclick=()=>{moving=!moving;suspend();$('exhibition-move-model').setAttribute('aria-pressed',String(moving));if(!moving)stopHover();else notice('Click a free floor cell, or drag the selected model.');};
 $('exhibition-turn-model').onclick=()=>{const e=entries.get(selected);if(!e)return;e.record.rotation=((e.record.rotation||0)+Math.PI/4)%(2*Math.PI);e.object.rotation.y=e.record.rotation;updateOutline();save();};
 $('exhibition-remove-model').onclick=()=>{const e=entries.get(selected);if(!e)return;group.remove(e.object);entries.delete(selected);select(null);prune();save();notice('Model removed from the room.');};
 $('exhibition-deselect-model').onclick=()=>{select(null);stopHover();notice('');};
 window.addEventListener('blur',()=>{moving=false;hideGhost();stopHover();if(drag){try{canvas.releasePointerCapture(drag.pointerId);}catch{}drag=null;}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){moving=false;stopHover();hideGhost();if(drag){try{canvas.releasePointerCapture(drag.pointerId);}catch{}drag=null;} }});
 function textureCount(){const textures=new Set();for(const m of models.values())m.template.traverse(o=>{for(const material of o.material?(Array.isArray(o.material)?o.material:[o.material]):[])for(const value of Object.values(material))if(value?.isTexture)textures.add(value);});return textures.size;}
 const ready=(async()=>{try{const data=await read(),byId=new Map(data.models.map(m=>[m.id,m]));for(const record of data.layout){if(!Number.isInteger(record.col)||record.col<0||record.col>19||!Number.isInteger(record.row)||record.row<0||record.row>19||occupied(record.col,record.row))continue;const desc=byId.get(record.modelId);if(desc){try{const m=await template(desc);insert(record,m);}catch(error){notice('Some stored models could not reopen: '+error.message);}}}}catch(error){notice('Previous room layout could not load: '+error.message);}finally{restored=true;}})();
 return Object.freeze({ready,cellAt,hitModelAt:(x,y)=>pickExact({clientX:x,clientY:y}),hover,stopHover,place,select,move,clearSelection:()=>select(null),state:()=>({restored,selected,models:[...entries.values()].map(e=>({...e.record,x:e.object.position.x,z:e.object.position.z,height:models.get(e.record.modelId)?.height||0})),modelCount:entries.size,uniqueMeshes:models.size,textureCount:textureCount(),dragging:!!drag?.started,pendingDrag:!!drag}),dispose:()=>{models.forEach(m=>release(m.template));marker.geometry.dispose();marker.material.dispose();if(outline){outline.geometry.dispose();outline.material.dispose();}}});
}

