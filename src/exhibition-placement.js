import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {clone} from 'three/examples/jsm/utils/SkeletonUtils.js';
import {exhibitionMaterials} from './exhibition-material.js';

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
  const snapshot=[...entries.values()].map(e=>({...e.record})),used=new Set(snapshot.map(e=>e.modelId)),files=[...models.values()].filter(m=>used.has(m.id)).map(m=>({id:m.id,blob:m.blob,name:m.name,preview:m.preview||null,record:m.record||null,composition:m.composition||null,camera:m.camera||null,libraryId:m.libraryId||null,obj:m.obj||null}));
  queue=queue.catch(()=>{}).then(async()=>{const d=await db();try{await new Promise((resolve,reject)=>{const tx=d.transaction(['models','layout'],'readwrite'),store=tx.objectStore('models');const keys=store.getAllKeys();keys.onsuccess=()=>{const existing=new Set(keys.result);files.forEach(m=>{if(!existing.has(m.id))store.put(m);else if(m.record){const previous=store.get(m.id);previous.onsuccess=()=>{if(previous.result?.record?.id!==m.record.id||(!previous.result?.composition&&m.composition)||previous.result?.libraryId!==m.libraryId)store.put(m);};}});keys.result.forEach(id=>{if(!used.has(id))store.delete(id);});};tx.objectStore('layout').put(snapshot,'current');tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);});}finally{d.close();}}).catch(error=>notice('Layout is available this session, but could not save: '+error.message));
  return queue;
 }
 function release(template){
  const gs=new Set(),ms=new Set(),ts=new Set();template.traverse(o=>{if(o.geometry)gs.add(o.geometry);for(const m of o.material?(Array.isArray(o.material)?o.material:[o.material]):[]){ms.add(m);for(const value of Object.values(m))if(value?.isTexture)ts.add(value);}});
  gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());ts.forEach(t=>{t.source?.data?.close?.();t.dispose();});
 }
 function prune(){const used=new Set([...entries.values()].map(e=>e.record.modelId));for(const [id,m]of models)if(!used.has(id)){release(m.template);models.delete(id);}}
 async function template(desc){
  if(models.has(desc.id)){const m=models.get(desc.id);for(const key of ['record','composition','camera','libraryId','obj'])if(desc[key])m[key]=desc[key];return m;}if(pending.has(desc.id))return pending.get(desc.id);
  const promise=(async()=>{
   if(!(desc.blob instanceof Blob))throw Error('This model is unavailable. Generate or open it again.');
   const gltf=await loader.parseAsync(await desc.blob.arrayBuffer(),'');
   const root=new THREE.Group();root.add(gltf.scene);root.updateMatrixWorld(true);
   const bounds=new THREE.Box3().setFromObject(root),size=bounds.getSize(new THREE.Vector3()),centre=bounds.getCenter(new THREE.Vector3());
   if(bounds.isEmpty()||!Number.isFinite(size.length())||size.length()<=0){release(root);throw Error('This file contains no visible 3D model.');}
   const scale=.98/Math.max(size.x,size.z,1e-5);
   let triangles=0;gltf.scene.traverse(o=>{if(o.isMesh)triangles+=(o.geometry.index?.count||o.geometry.attributes.position.count)/3;});
   const colour=exhibitionMaterials(gltf.scene);
   gltf.scene.position.sub(new THREE.Vector3(centre.x,bounds.min.y,centre.z));root.scale.setScalar(scale);
   const result={...desc,width:size.x*scale,depth:size.z*scale,height:size.y*scale,triangles,colour,template:root};models.set(desc.id,result);return result;
  })();pending.set(desc.id,promise);try{return await promise;}finally{pending.delete(desc.id);}
 }
 function occupied(col,row,span=1,ignore=null){
  return [...entries.values()].some(e=>e.record.id!==ignore&&col<e.record.col+(e.record.span||1)&&col+span>e.record.col&&row<e.record.row+(e.record.span||1)&&row+span>e.record.row);
 }
 function requestedSpan(ignore,span){return span||entries.get(ignore)?.record.span||1;}
 function cellAt(x,y,ignore=null,span=null){
  const n=requestedSpan(ignore,span);
  const r=canvas.getBoundingClientRect();if(x<r.left||x>r.right||y<r.top||y>r.bottom)return null;
  const target=document.elementFromPoint(x,y);if(target?.closest('.workspace-expanded,.workspace-previews,.walk-toolbar,.exhibition-placement-tools,dialog'))return null;
  orient();scene.updateMatrixWorld(true);pointer.set((x-r.left)/r.width*2-1,-(y-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,getCamera());
  if(!raycaster.ray.intersectPlane(plane,point)||point.x< -10||point.x>=10||point.z< -10||point.z>=10)return null;
  if(isRoom()){const nearest=raycaster.intersectObjects(getRoomMeshes(),false)[0];if(nearest&&nearest.object.name!=='floor')return null;}
  const col=Math.min(20-n,Math.floor(point.x+10)),row=Math.min(20-n,Math.floor(point.z+10));
  return {col,row,span:n,x:col-10+n/2,z:row-10+n/2,valid:!occupied(col,row,n,ignore)};
 }
 function hover(x,y,ignore=null){
  const cell=cellAt(x,y,ignore);marker.visible=!!cell;
  if(cell){marker.scale.set(cell.span,cell.span,1);marker.position.set(cell.x,.015,cell.z);marker.material.color.setHex(cell.valid?0x82a18a:0xb37060);}
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
  $('exhibition-placement-name').textContent=e?e.record.name+' / '+(e.record.span||1)**2+' CELL'+((e.record.span||1)>1?'S':''):'';
  $('exhibition-move-model').setAttribute('aria-pressed','false');
  for(const b of document.querySelectorAll('[data-exhibit-size]')){b.disabled=!e;b.setAttribute('aria-pressed',String(!!e&&Number(b.dataset.exhibitSize)===(e.record.span||1)));}
  $('exhibition-model-smaller').disabled=!e||(e.record.span||1)===1;$('exhibition-model-larger').disabled=!e||(e.record.span||1)===3;
  $('exhibition-browser-exhibit-tools').hidden=!e;
  updateOutline();
 }
 function fit(entry){
  const m=models.get(entry.record.modelId),n=entry.record.span||1,a=entry.record.rotation||0,c=Math.abs(Math.cos(a)),s=Math.abs(Math.sin(a));
  const factor=Math.min(.98*n/Math.max(m.width*c+m.depth*s,m.width*s+m.depth*c,1e-5),4.65/Math.max(m.height,1e-5));
  entry.object.scale.copy(m.template.scale).multiplyScalar(factor);entry.object.rotation.y=a;
  entry.object.position.set(entry.record.col-10+n/2,.015,entry.record.row-10+n/2);entry.height=m.height*factor;entry.footprint=Math.max(m.width*c+m.depth*s,m.width*s+m.depth*c)*factor;
 }
 function insert(record,m){
  record.span=[1,2,3].includes(record.span)?record.span:1;
  const object=clone(m.template);object.userData.placementId=record.id;group.add(object);
  const entry={record,object};entries.set(record.id,entry);fit(entry);invalidate();return record.id;
 }
 function validCell(cell){const n=cell?.span||1;return cell?.valid&&[1,2,3].includes(n)&&Number.isInteger(cell.col)&&cell.col>=0&&cell.col+n<=20&&Number.isInteger(cell.row)&&cell.row>=0&&cell.row+n<=20;}
 async function place(desc,cell){
  const n=cell?.span||1;if(!validCell(cell)||occupied(cell.col,cell.row,n))throw Error('Choose a free area on the floor.');
  const m=await template(desc);
  if(occupied(cell.col,cell.row,n)){prune();throw Error('This area is already occupied.');}
  const id=insert({id:crypto.randomUUID(),modelId:m.id,col:cell.col,row:cell.row,span:n,rotation:0,name:desc.name||'Generated model'},m);
  select(id);await save();notice('Model placed. Drag to move; click to view in 3D.');return id;
 }
 function move(id,cell){
  const e=entries.get(id),n=e?.record.span||1;if(!e||!validCell({...cell,span:n})||occupied(cell.col,cell.row,n,id))return false;
  e.record.col=cell.col;e.record.row=cell.row;delete e.record.scaleCentreX;delete e.record.scaleCentreZ;fit(e);select(id);save();notice('Moved to cell '+(cell.row*20+cell.col+1)+'.');return true;
 }
 function resize(id,n){
  const e=entries.get(id);if(!e||![1,2,3].includes(n))return false;
  const before=e.record.span||1,centreX=e.record.scaleCentreX??e.record.col+before/2,centreZ=e.record.scaleCentreZ??e.record.row+before/2;
  const col=Math.max(0,Math.min(20-n,Math.round(centreX-n/2))),row=Math.max(0,Math.min(20-n,Math.round(centreZ-n/2)));
  if(occupied(col,row,n,id)){notice('Not enough free cells. Move the model before enlarging it.');return false;}
  Object.assign(e.record,{col,row,span:n,scaleCentreX:centreX,scaleCentreZ:centreZ});fit(e);select(id);save();notice('Model fills '+n+' × '+n+' cells.');return true;
 }
 function browseEntries(){
  return [...models.values()].map(m=>{
   const record=m.record||{id:m.id,fingerprint:m.id,modelUrl:'assets/generated-sculptures/'+m.id+'/sculpture.glb',objUrl:'assets/generated-sculptures/'+m.id+'/sculpture.obj',target:'city',localOnly:true,triangles:Math.round(m.triangles)};
   return {id:'exhibit:'+m.id,ephemeral:true,title:m.name||'Exhibited model',group:'',savedAt:0,record,glb:m.blob,obj:m.obj||null,preview:m.preview,composition:m.composition||null,camera:m.camera||null,libraryId:m.libraryId||null};
  });
 }
 function openModel(id){const e=entries.get(id);if(e)window.dispatchEvent(new CustomEvent('exhibition-model-open',{detail:{id:'exhibit:'+e.record.modelId,placementId:id}}));}
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
  const open=event.type==='pointerup'&&!drag.started?drag.id:null;
  try{canvas.releasePointerCapture(event.pointerId);}catch{}drag=null;hideGhost();stopHover();
  if(open)openModel(open);
 }
 canvas.addEventListener('pointerup',end,true);canvas.addEventListener('pointercancel',end,true);
 canvas.addEventListener('lostpointercapture',()=>{drag=null;hideGhost();stopHover();});
 $('exhibition-move-model').onclick=()=>{moving=!moving;suspend();$('exhibition-move-model').setAttribute('aria-pressed',String(moving));if(!moving)stopHover();else notice('Click a free floor cell, or drag the selected model.');};
 $('exhibition-turn-model').onclick=()=>{const e=entries.get(selected);if(!e)return;e.record.rotation=((e.record.rotation||0)+Math.PI/4)%(2*Math.PI);fit(e);updateOutline();save();};
 $('exhibition-remove-model').onclick=()=>{const e=entries.get(selected);if(!e)return;group.remove(e.object);entries.delete(selected);select(null);prune();save();notice('Model removed from the room.');};
 for(const b of document.querySelectorAll('[data-exhibit-size]'))b.onclick=()=>resize(selected,Number(b.dataset.exhibitSize));
 $('exhibition-model-smaller').onclick=()=>resize(selected,(entries.get(selected)?.record.span||1)-1);
 $('exhibition-model-larger').onclick=()=>resize(selected,(entries.get(selected)?.record.span||1)+1);
 $('exhibition-open-model').onclick=()=>openModel(selected);
 $('exhibition-deselect-model').onclick=()=>{select(null);stopHover();notice('');};
 window.addEventListener('blur',()=>{moving=false;hideGhost();stopHover();if(drag){try{canvas.releasePointerCapture(drag.pointerId);}catch{}drag=null;}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){moving=false;stopHover();hideGhost();if(drag){try{canvas.releasePointerCapture(drag.pointerId);}catch{}drag=null;} }});
 function textureCount(){const textures=new Set();for(const m of models.values())m.template.traverse(o=>{for(const material of o.material?(Array.isArray(o.material)?o.material:[o.material]):[])for(const value of Object.values(material))if(value?.isTexture)textures.add(value);});return textures.size;}
 const ready=(async()=>{try{const data=await read(),byId=new Map(data.models.map(m=>[m.id,m]));for(const record of data.layout){if(!Number.isInteger(record.col)||record.col<0||record.col+(record.span||1)>20||!Number.isInteger(record.row)||record.row<0||record.row+(record.span||1)>20||occupied(record.col,record.row,record.span||1))continue;const desc=byId.get(record.modelId);if(desc){try{const m=await template(desc);insert(record,m);}catch(error){notice('Some stored models could not reopen: '+error.message);}}}}catch(error){notice('Previous room layout could not load: '+error.message);}finally{restored=true;}})();
 return Object.freeze({ready,cellAt,hitModelAt:(x,y)=>pickExact({clientX:x,clientY:y}),hover,stopHover,place,select,move,resize,browseEntries,openModel,clearSelection:()=>select(null),state:()=>({restored,selected,models:[...entries.values()].map(e=>({...e.record,x:e.object.position.x,z:e.object.position.z,height:e.height,footprint:e.footprint,colour:models.get(e.record.modelId)?.colour})),modelCount:entries.size,uniqueMeshes:models.size,textureCount:textureCount(),dragging:!!drag?.started,pendingDrag:!!drag}),dispose:()=>{models.forEach(m=>release(m.template));marker.geometry.dispose();marker.material.dispose();if(outline){outline.geometry.dispose();outline.material.dispose();}}});
}

