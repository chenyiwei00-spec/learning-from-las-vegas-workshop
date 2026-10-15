import * as THREE from 'three';
import {placementRange,modelFootprint} from './exhibition-placement-size.js';
import {FLOOR_HALF,CELL_SIZE,worldCell} from './exhibition-dimensions.js';
/* Shared screen selection and world-space transforms for both exhibition cameras. */
export function createMultiSelection({scene,canvas,entries,group,getCamera,orient,pick,fit,selectLegacy,updateCells,save,suspend,invalidate,handles,rotateHandle,moveHandle,handleLayer,getMaxHeight,prune,isLocked=()=>false}){
 const ids=new Set(),surface=document.getElementById('walk-surface'),button=document.getElementById('exhibition-box-select'),marquee=document.createElement('div');
 marquee.className='exhibition-model-marquee';marquee.hidden=true;canvas.parentElement.append(marquee);
 let enabled=false,operation=null,outline=null,syncing=false;
 const selected=()=>[...ids].map(id=>entries.get(id)).filter(Boolean);
 const box=()=>{scene.updateMatrixWorld(true);const b=new THREE.Box3();for(const e of selected())b.union(new THREE.Box3().setFromObject(e.object));return b;};
 function single(id){ids.clear();if(id&&entries.has(id))ids.add(id);clearOutline();}
 function clearOutline(){if(outline){scene.remove(outline);outline.geometry.dispose();outline.material.dispose();outline=null;}}
 function refresh(){for(const id of ids)if(!entries.has(id))ids.delete(id);syncing=true;try{selectLegacy(ids.size===1?[...ids][0]:null);}finally{syncing=false;}updateOutline();button.setAttribute('aria-pressed',String(enabled));}
 function selectMany(values){ids.clear();if(group.visible)for(const id of values)if(entries.has(id))ids.add(id);refresh();}
 function updateOutline(){clearOutline();if(ids.size>1&&group.visible){outline=new THREE.Box3Helper(box(),0x535f68);outline.renderOrder=4;scene.add(outline);}updateHandles();invalidate();}
 function updateHandles(){
  if(ids.size<2)return false;
  if(!group.visible||canvas.closest('[hidden]')||surface.dataset.modelBrowse==='true'){handles.forEach(b=>b.hidden=true);rotateHandle.hidden=moveHandle.hidden=true;return true;}
  const bounds=box(),r=canvas.getBoundingClientRect(),parent=handleLayer.getBoundingClientRect(),camera=getCamera();
  handles.forEach((b,i)=>{const p=new THREE.Vector3(i&1?bounds.max.x:bounds.min.x,i&2?bounds.max.y:bounds.min.y,i&4?bounds.max.z:bounds.min.z).project(camera),x=r.left+(p.x+1)*r.width/2,y=r.top+(1-p.y)*r.height/2;b.hidden=p.z< -1||p.z>1||x<r.left||x>r.right||y<r.top||y>r.bottom;b.style.left=x-parent.left+'px';b.style.top=y-parent.top+'px';});
  const visible=handles.filter(b=>!b.hidden).map(b=>({x:parseFloat(b.style.left),y:parseFloat(b.style.top)}));rotateHandle.hidden=moveHandle.hidden=!visible.length;
  if(visible.length){const x=(Math.min(...visible.map(p=>p.x))+Math.max(...visible.map(p=>p.x)))/2;rotateHandle.style.left=x+'px';rotateHandle.style.top=Math.max(16,Math.min(...visible.map(p=>p.y))-26)+'px';moveHandle.style.left=x+'px';moveHandle.style.top=Math.min(r.height-16,Math.max(...visible.map(p=>p.y))+26)+'px';}return true;
 }
 function screenBounds(e){const b=new THREE.Box3().setFromObject(e.object),r=canvas.getBoundingClientRect(),ps=[];for(let i=0;i<8;i++){const p=new THREE.Vector3(i&1?b.max.x:b.min.x,i&2?b.max.y:b.min.y,i&4?b.max.z:b.min.z).project(getCamera());if(p.z>=-1&&p.z<=1&&Number.isFinite(p.x+p.y))ps.push({x:r.left+(p.x+1)*r.width/2,y:r.top+(1-p.y)*r.height/2});}if(!ps.length)return null;return{left:Math.max(r.left,Math.min(...ps.map(p=>p.x))),right:Math.min(r.right,Math.max(...ps.map(p=>p.x))),top:Math.max(r.top,Math.min(...ps.map(p=>p.y))),bottom:Math.min(r.bottom,Math.max(...ps.map(p=>p.y)))};}
 function inRectangle(rect){orient();scene.updateMatrixWorld(true);const found=[];for(const e of entries.values()){const b=screenBounds(e);if(b&&b.left<=b.right&&b.top<=b.bottom&&b.right>=rect.left&&b.left<=rect.right&&b.bottom>=rect.top&&b.top<=rect.bottom)found.push(e.record.id);}return found;}
 const plane=new THREE.Plane(new THREE.Vector3(0,1,0),0),ray=new THREE.Raycaster(),point=new THREE.Vector3();
 function ground(x,y){const r=canvas.getBoundingClientRect();orient();ray.setFromCamera(new THREE.Vector2((x-r.left)/r.width*2-1,-(y-r.top)/r.height*2+1),getCamera());return ray.ray.intersectPlane(plane,point)?point.clone():null;}
 function snapshot(){const bounds=box(),centre=bounds.getCenter(new THREE.Vector3());centre.y=0;return{centre,bounds,rows:selected().map(e=>({id:e.record.id,record:structuredClone(e.record),position:e.object.position.clone(),height:e.height}))};}
 function write(e,p,units,rotation){
  const limits=placementRange(e);units=Math.max(limits.minUnits,Math.min(limits.maxSpan,units));
  const n=Math.max(limits.minSpan,Math.min(limits.maxSpan,Math.ceil(units-1e-6))),d=modelFootprint(e,n,rotation,limits.minSpan),col=Math.max(0,Math.min(20-d.spanX,Math.floor((p.x+FLOOR_HALF)/CELL_SIZE-d.spanX/2))),row=Math.max(0,Math.min(20-d.spanZ,Math.floor((p.z+FLOOR_HALF)/CELL_SIZE-d.spanZ/2)));
  Object.assign(e.record,{col,row,span:n,...d,scale:units/n,rotation,offsetX:p.x-worldCell(col,d.spanX),offsetZ:p.z-worldCell(row,d.spanZ)});delete e.record.scaleCentreX;delete e.record.scaleCentreZ;fit(e);
 }
 function transform(snapshot,{dx=0,dz=0,scale=1,angle=0},persist=false){
  if(isLocked())return false;
  if(!snapshot.rows.length||snapshot.rows.some(r=>!entries.has(r.id)))return false;
  const turn=Math.round(angle/(Math.PI/2))*Math.PI/2;
  const units=snapshot.rows.map(r=>r.record.span*(r.record.scale||1));if(scale!==1)scale=Math.max(Math.max(...snapshot.rows.map((r,i)=>placementRange(r.record).minUnits/units[i])),Math.min(Math.min(...snapshot.rows.map((r,i)=>placementRange(r.record).maxSpan/units[i])),getMaxHeight()/Math.max(...snapshot.rows.map(r=>r.height)),scale));
  if(scale===1&&turn===0){dx=Math.max(-FLOOR_HALF-snapshot.bounds.min.x,Math.min(FLOOR_HALF-snapshot.bounds.max.x,dx));dz=Math.max(-FLOOR_HALF-snapshot.bounds.min.z,Math.min(FLOOR_HALF-snapshot.bounds.max.z,dz));}
  const previous=selected().map(e=>({e,record:structuredClone(e.record)}));
  for(const row of snapshot.rows){const x=(row.position.x-snapshot.centre.x)*scale,z=(row.position.z-snapshot.centre.z)*scale,p=new THREE.Vector3(snapshot.centre.x+x*Math.cos(turn)+z*Math.sin(turn)+dx,0,snapshot.centre.z-x*Math.sin(turn)+z*Math.cos(turn)+dz);write(entries.get(row.id),p,row.record.span*(row.record.scale||1)*scale,(row.record.rotation||0)+turn);}
  const bounds=box();if(bounds.min.x< -FLOOR_HALF-.001||bounds.max.x>FLOOR_HALF+.001||bounds.min.z< -FLOOR_HALF-.001||bounds.max.z>FLOOR_HALF+.001){for(const old of previous){old.e.record=old.record;fit(old.e);}return false;}
  updateCells();updateOutline();if(persist)save();return true;
 }
 function begin(e,type,target){e.preventDefault();e.stopImmediatePropagation();suspend();const snap=snapshot(),r=canvas.getBoundingClientRect(),p=snap.centre.clone().project(getCamera()),cx=r.left+(p.x+1)*r.width/2,cy=r.top+(1-p.y)*r.height/2;operation={type,pointerId:e.pointerId,target,start:{x:e.clientX,y:e.clientY},snapshot:snap,ground:ground(e.clientX,e.clientY),cx,cy,distance:Math.max(20,Math.hypot(e.clientX-cx,e.clientY-cy)),last:Math.atan2(e.clientY-cy,e.clientX-cx),angle:0,changed:false};target.setPointerCapture(e.pointerId);}
 function down(e){if(isLocked())return;if(e.button!==0||!group.visible)return;const id=pick(e);if(e.ctrlKey||e.metaKey){e.preventDefault();e.stopImmediatePropagation();suspend();if(id){ids.has(id)?ids.delete(id):ids.add(id);refresh();}else startBox(e,true);return;}
  if(!id&&(enabled||e.shiftKey)){startBox(e,e.shiftKey);return;}
  if(id&&e.shiftKey){e.preventDefault();e.stopImmediatePropagation();suspend();ids.add(id);refresh();return;}
  if(id&&ids.size>1&&ids.has(id)){begin(e,'move',canvas);return;}
  if(!id&&ids.size>1)selectMany([]);
 }
 function startBox(e,add){e.preventDefault();e.stopImmediatePropagation();suspend();operation={type:'box',pointerId:e.pointerId,target:canvas,start:{x:e.clientX,y:e.clientY},add,initial:[...ids]};marquee.hidden=false;drawBox(e.clientX,e.clientY);canvas.setPointerCapture(e.pointerId);}
 function drawBox(x,y){const r=canvas.getBoundingClientRect(),s=operation.start;Object.assign(marquee.style,{left:Math.min(s.x,x)-r.left+'px',top:Math.min(s.y,y)-r.top+'px',width:Math.abs(x-s.x)+'px',height:Math.abs(y-s.y)+'px'});}
 function motion(e){if(!operation||operation.pointerId!==e.pointerId)return;e.preventDefault();e.stopImmediatePropagation();const op=operation;
  if(op.type==='box'){drawBox(e.clientX,e.clientY);return;}
  if(op.type==='move'){const p=ground(e.clientX,e.clientY);if(p&&op.ground)op.changed=transform(op.snapshot,{dx:p.x-op.ground.x,dz:p.z-op.ground.z})||op.changed;}
  if(op.type==='scale')op.changed=transform(op.snapshot,{scale:Math.hypot(e.clientX-op.cx,e.clientY-op.cy)/op.distance})||op.changed;
  if(op.type==='rotate'){const a=Math.atan2(e.clientY-op.cy,e.clientX-op.cx);op.angle+=Math.atan2(Math.sin(a-op.last),Math.cos(a-op.last));op.last=a;op.changed=transform(op.snapshot,{angle:op.angle})||op.changed;}
 }
 function finish(e){if(!operation||operation.pointerId!==e.pointerId)return;e.preventDefault();e.stopImmediatePropagation();const op=operation;operation=null;marquee.hidden=true;
  if(op.type==='box'){if(e.type==='pointercancel')selectMany(op.initial);else{const rect={left:Math.min(op.start.x,e.clientX),right:Math.max(op.start.x,e.clientX),top:Math.min(op.start.y,e.clientY),bottom:Math.max(op.start.y,e.clientY)};selectMany([...(op.add?op.initial:[]),...inRectangle(rect)]);}}
  else if(e.type==='pointercancel'){for(const r of op.snapshot.rows){const entry=entries.get(r.id);if(entry){entry.record=r.record;fit(entry);}}updateCells();updateOutline();}
  else if(op.changed)save();
  try{op.target.releasePointerCapture(e.pointerId);}catch{}invalidate();
 }
 function endWithoutEvent(){if(!operation)return;const op=operation;operation=null;marquee.hidden=true;if(op.changed)save();try{op.target.releasePointerCapture(op.pointerId);}catch{}}
 canvas.addEventListener('pointerdown',down,true);document.addEventListener('pointermove',motion,{capture:true,passive:false});document.addEventListener('pointerup',finish,true);document.addEventListener('pointercancel',finish,true);
 for(const handle of handles){handle.addEventListener('pointerdown',e=>{if(ids.size>1&&e.button===0)begin(e,'scale',handle);},true);handle.addEventListener('keydown',e=>{if(ids.size>1&&['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();e.stopImmediatePropagation();transform(snapshot(),{scale:['ArrowUp','ArrowRight'].includes(e.key)?1.1:1/1.1},true);}},true);}
 rotateHandle.addEventListener('pointerdown',e=>{if(ids.size>1&&e.button===0)begin(e,'rotate',rotateHandle);},true);
 rotateHandle.addEventListener('keydown',e=>{if(ids.size>1&&['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();e.stopImmediatePropagation();transform(snapshot(),{angle:(e.key==='ArrowLeft'?-1:1)*Math.PI/2},true);}},true);
 moveHandle.addEventListener('pointerdown',e=>{if(ids.size>1&&e.button===0)begin(e,'move',moveHandle);},true);
 function outside(e){if(ids.size>1&&e.target!==canvas&&!handleLayer.contains(e.target)&&!e.target.closest('#exhibition-box-select'))selectMany([]);}
 document.addEventListener('pointerdown',outside,true);
 function keys(e){if(e.key==='Escape'){endWithoutEvent();return;}if(e.key!=='Delete'||ids.size<2||(surface.dataset.immersive!=='true'&&surface.dataset.inputActive!=='true')||surface.dataset.modelBrowse==='true'||surface.dataset.workspaceOpen!=='none'||document.querySelector('dialog[open]')||document.activeElement?.closest('input,textarea,select,[contenteditable=true]'))return;e.preventDefault();e.stopImmediatePropagation();endWithoutEvent();for(const entry of selected()){group.remove(entry.object);entries.delete(entry.record.id);}selectMany([]);updateCells();prune();save();}
 document.addEventListener('keydown',keys,true);window.addEventListener('blur',endWithoutEvent);
 button.onclick=()=>{enabled=!enabled;button.setAttribute('aria-pressed',String(enabled));button.textContent=enabled?'Select on':'Select';suspend();};
 return{get syncing(){return syncing;},single,selectMany,updateHandles,state:()=>({ids:[...ids],enabled,marquee:operation?.type==='box',transform:operation?.type||null}),screenBounds:id=>{orient();scene.updateMatrixWorld(true);const e=entries.get(id);return e?screenBounds(e):null;},transform:(values)=>transform(snapshot(),values,true),dispose:()=>{endWithoutEvent();clearOutline();marquee.remove();canvas.removeEventListener('pointerdown',down,true);document.removeEventListener('pointermove',motion,true);document.removeEventListener('pointerup',finish,true);document.removeEventListener('pointercancel',finish,true);document.removeEventListener('pointerdown',outside,true);document.removeEventListener('keydown',keys,true);window.removeEventListener('blur',endWithoutEvent);}};
}
