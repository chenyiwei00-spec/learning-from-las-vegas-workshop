/* Device-local history stores the actual model bytes, not just thumbnail links. */
(()=>{
'use strict';
const DB='borrowed-worlds-saved-sculptures-v1',STORE='models';
let dbPromise;const channel=typeof BroadcastChannel!=='undefined'?new BroadcastChannel(DB):null;
const listeners=new Set();
function notify(){for(const fn of listeners)fn();channel?.postMessage('changed');}
channel?.addEventListener('message',()=>{for(const fn of listeners)fn();});
function database(){if(!dbPromise)dbPromise=new Promise((resolve,reject)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore(STORE,{keyPath:'id'});r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(Error('Saved-model storage is unavailable in this browser.'));r.onblocked=()=>reject(Error('Close other model pages and try saving again.'));});return dbPromise;}
async function transaction(mode,action){const db=await database();return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,mode),r=action(tx.objectStore(STORE));let value;r.onsuccess=()=>value=r.result;tx.oncomplete=()=>resolve(value);tx.onabort=tx.onerror=()=>reject(tx.error||Error('Model storage failed.'));});}
const list=async()=>((await transaction('readonly',s=>s.getAll()))||[]).sort((a,b)=>b.savedAt-a.savedAt);
async function get(id){
 const entry=await transaction('readonly',s=>s.get(id));if(!entry)return entry;
 try{
  if(entry.colourVersion==='inferred-v2'||entry.colourVersion===ModelColour.version)throw Error('Current inferred geometry already stored.');
  const root='assets/generated-sculptures/'+entry.record.id+'/',response=await fetch(root+'colour_report.json',{cache:'no-store'});if(!response.ok)throw Error('Legacy colour cache unavailable.');const report=await response.json();
  if(report.mode!=='inferred-colour'||!report.geometryUnchanged||report.totalTriangles!==entry.record.triangles)throw Error('Legacy colour cache mismatch.');
  const responseMesh=await fetch(root+'sculpture.glb',{cache:'no-store'});if(!responseMesh.ok)throw Error('Legacy colour mesh unavailable.');const glb=await responseMesh.blob();if(await glb.slice(0,4).text()!=='glTF')throw Error('Legacy colour mesh invalid.');
  const db=await database();await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite'),s=tx.objectStore(STORE),r=s.get(id);r.onsuccess=()=>{const current=r.result;if(current){current.glb=glb;current.colourVersion='inferred-v2';delete current.textureVersion;s.put(current);entry.glb=glb;entry.colourVersion='inferred-v2';delete entry.textureVersion;entry.title=current.title;entry.group=current.group;}};tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});
 }catch{/* The stored mesh remains available if its local source cache is absent. */}
 if(entry.colourVersion!==ModelColour.version){entry.glb=await ModelColour.enhance(entry.glb);entry.obj=entry.obj?await ModelColour.obj(entry.obj):null;entry.colourVersion=ModelColour.version;await transaction('readwrite',s=>s.put(entry));}
 return entry;
}
async function remove(id){await transaction('readwrite',s=>s.delete(id));notify();}
const text=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);}
async function bytes(path){const r=await fetch(path);if(!r.ok)throw Error('The generated model file could not be saved.');const blob=await r.blob();return path.endsWith('.glb')?ModelColour.enhance(blob):path.endsWith('.obj')?ModelColour.obj(blob):blob;}


async function modelPreview(viewer,fallback){
 try{
  for(let attempt=0;attempt<5;attempt++){
   await viewer.updateComplete;
   await new Promise(resolve=>setTimeout(resolve,attempt?160:80));
   await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
   const blob=await viewer.toBlob({mimeType:'image/png',idealAspect:false}),image=await createImageBitmap(blob);
   const raw=document.createElement('canvas');raw.width=image.width;raw.height=image.height;const g=raw.getContext('2d');g.drawImage(image,0,0);
   const pixels=g.getImageData(0,0,raw.width,raw.height).data,bg=Array.from(pixels.slice(0,4));let x0=raw.width,y0=raw.height,x1=0,y1=0,count=0;
   const step=Math.max(2,Math.ceil(Math.sqrt(raw.width*raw.height/120000)));
   for(let y=0;y<raw.height;y+=step)for(let x=0;x<raw.width;x+=step){const at=(y*raw.width+x)*4;if(pixels[at+3]>80&&(bg[3]<80||Math.max(Math.abs(pixels[at]-bg[0]),Math.abs(pixels[at+1]-bg[1]),Math.abs(pixels[at+2]-bg[2]))>12)){count++;x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);}}
   if(count<20){image.close();continue;}
   const height=Math.min(raw.height,raw.width*3/4,Math.max((y1-y0)*1.15,(x1-x0)*3/4*1.15)),width=height*4/3;
   const x=Math.max(0,Math.min(raw.width-width,(x0+x1-width)/2)),y=Math.max(0,Math.min(raw.height-height,(y0+y1-height)/2)),c=document.createElement('canvas');c.width=800;c.height=600;
   c.getContext('2d').drawImage(image,x,y,width,height,0,0,800,600);image.close();
   return await new Promise((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(Error('Preview unavailable')),'image/png'));
  }
 }catch{}
 return fallback instanceof Blob?fallback:bytes(fallback);
}

function cameraView(viewer){
 const orbit=viewer.getCameraOrbit(),target=viewer.getCameraTarget();
 return {orbit:{theta:orbit.theta,phi:orbit.phi,radius:orbit.radius},target:{x:target.x,y:target.y,z:target.z},fieldOfView:viewer.getFieldOfView()};
}
async function overwrite(id,viewer,metadata={}){
 const old=await get(id);if(!old)throw Error('This saved model was removed.');
 const camera=cameraView(viewer),preview=await modelPreview(viewer,old.preview),db=await database();let result;
 await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite'),store=tx.objectStore(STORE),r=store.get(id);r.onsuccess=()=>{const entry=r.result;if(!entry){tx.abort();return;}if(metadata.title?.trim())entry.title=metadata.title.trim().slice(0,120);if(metadata.group!==undefined)entry.group=String(metadata.group).trim().slice(0,80);if(metadata.linkedMedia)entry.record.linkedMedia=structuredClone(metadata.linkedMedia);entry.camera=camera;entry.preview=preview;entry.updatedAt=Date.now();store.put(entry);result=entry;};tx.oncomplete=resolve;tx.onerror=tx.onabort=()=>reject(tx.error||Error('The saved model could not be updated.'));});
 notify();return result;
}
async function save(record,viewer,metadata={}){
 if(!record||!/^[a-f0-9]{64}$/.test(record.id))throw Error('Generate a 3D model first.');
 const root='assets/generated-sculptures/'+record.id+'/';
 if(record.modelUrl!==root+'sculpture.glb'||record.objUrl!==root+'sculpture.obj')throw Error('Invalid generated model paths.');
 const existing=(await list()).find(r=>r.record.id===record.id);
 if(existing)return {entry:await overwrite(existing.id,viewer,{title:metadata.title?.trim()||existing.title,group:metadata.group?.trim()||existing.group||'',...(record.linkedMedia?{linkedMedia:record.linkedMedia}:{})}),alreadySaved:true,updated:true};
 const camera=cameraView(viewer);let previewTask;
 try{previewTask=modelPreview(viewer,root+'source.png');}catch{previewTask=bytes(root+'source.png');}
 const [glb,obj,preview,composition]=await Promise.all([bytes(record.modelUrl),bytes(record.objUrl),previewTask,fetch(root+'composition.json').then(async r=>{if(!r.ok)throw Error('The original model composition is missing.');return r.json();})]);
 const header=await glb.slice(0,4).text();if(header!=='glTF')throw Error('The generated GLB is invalid.');
 const entries=await list(),number=1+Math.max(0,...entries.map(r=>r.number||0)),entry={id:crypto.randomUUID(),number,title:(record.target==='city'?'City model ':'Sculpture ')+String(number).padStart(2,'0'),colourVersion:ModelColour.version,group:String(metadata.group||'').trim().slice(0,80),savedAt:Date.now(),camera,record:structuredClone(record),glb,obj,preview,composition};
 if(metadata.title?.trim())entry.title=metadata.title.trim().slice(0,120);
 await transaction('readwrite',s=>s.put(entry));notify();
 if(navigator.storage?.persist)navigator.storage.persist().catch(()=>{});
 return {entry,alreadySaved:false};
}

async function importEntry(source,viewer,metadata={}){
 if(!(source?.glb instanceof Blob)||await source.glb.slice(0,4).text()!=='glTF'||!/^[a-f0-9]{64}$/.test(source.record?.id||''))throw Error('This exhibit does not contain a valid model.');
 const rows=await list(),old=rows.find(e=>e.record.id===source.record.id);
 if(old)return {entry:await overwrite(old.id,viewer,{...metadata,...(source.record.linkedMedia?{linkedMedia:source.record.linkedMedia}:{})}),alreadySaved:true,updated:true};
 let obj=source.obj||null;
 if(!obj&&!source.record.localOnly&&source.record.objUrl){try{obj=await bytes(source.record.objUrl);}catch{}}
 const glb=await ModelColour.enhance(source.glb);
 let fallback=source.preview;
 if(!(fallback instanceof Blob)){const canvas=document.createElement('canvas');canvas.width=320;canvas.height=240;fallback=await new Promise(r=>canvas.toBlob(r));}
 const preview=await modelPreview(viewer,fallback),number=1+Math.max(0,...rows.map(e=>e.number||0));
 const entry={id:crypto.randomUUID(),number,title:String(metadata.title||source.title||'Exhibit model '+number).trim().slice(0,120),group:String(metadata.group||'').trim().slice(0,80),savedAt:Date.now(),record:structuredClone(source.record),camera:cameraView(viewer),glb,obj,preview,composition:structuredClone(source.composition),colourVersion:ModelColour.version};
 await transaction('readwrite',s=>s.put(entry));notify();return {entry,alreadySaved:false};
}

async function updateMedia(id,linkedMedia){
 const db=await database();await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite'),store=tx.objectStore(STORE),r=store.get(id);r.onsuccess=()=>{const entry=r.result;if(!entry){tx.abort();return;}entry.record.linkedMedia=structuredClone(linkedMedia);store.put(entry);};tx.oncomplete=resolve;tx.onerror=tx.onabort=()=>reject(tx.error||Error('This saved model was removed.'));});notify();
}
async function update(id,metadata){
 const db=await database();
 await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite'),store=tx.objectStore(STORE),r=store.get(id);
 r.onsuccess=()=>{const entry=r.result;if(!entry){tx.abort();return;}entry.title=String(metadata.title||entry.title).trim().slice(0,120)||entry.title;entry.group=String(metadata.group||'').trim().slice(0,80);store.put(entry);};
 tx.oncomplete=resolve;tx.onabort=tx.onerror=()=>reject(tx.error||Error('This saved model was removed.'));});notify();
}
async function removeGroup(group){
 if(!group)throw Error('Choose a named group first.');const db=await database(),ids=[];
 await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite'),s=tx.objectStore(STORE),r=s.getAll();r.onsuccess=()=>{for(const entry of r.result)if(entry.group===group){entry.group='';ids.push(entry.id);s.put(entry);}};tx.oncomplete=resolve;tx.onerror=tx.onabort=()=>reject(tx.error||Error('The group could not be removed.'));});
 notify();for(const id of ids)window.dispatchEvent(new CustomEvent('saved-sculpture-renamed',{detail:{id}}));return ids.length;
}
async function gallery(){
 const grid=document.getElementById('saved-model-grid');if(!grid)return;
 const history=document.getElementById('model-history');try{const preference=localStorage.getItem('learning-vegas-model-history-open');if(preference!==null)history.open=preference==='true';}catch{}history.addEventListener('toggle',()=>{try{localStorage.setItem('learning-vegas-model-history-open',String(history.open));}catch{}});
 const filter=document.getElementById('history-group-filter'),dialog=document.getElementById('saved-model-edit');let revision=0,urls=[],editingId=null;
 async function render(){const ticket=++revision;
  try{const rows=await list();if(ticket!==revision)return;urls.forEach(URL.revokeObjectURL);urls=[];
   const groups=[...new Set(rows.map(r=>r.group||'').filter(Boolean))].sort((a,b)=>a.localeCompare(b));
   if(filter){const selected=filter.value;filter.innerHTML='<option value="">All groups</option><option value="__ungrouped__">Ungrouped</option>'+groups.map(g=>'<option value="'+text(g)+'">'+text(g)+'</option>').join('');filter.value=selected;if(filter.selectedIndex<0)filter.value='';}
   const datalist=document.getElementById('model-group-options');if(datalist)datalist.innerHTML=groups.map(g=>'<option value="'+text(g)+'"></option>').join('');
   document.getElementById('delete-model-group').disabled=!filter?.value||filter.value==='__ungrouped__';
   const chosen=filter?.value||'',shown=rows.filter(r=>!chosen||(chosen==='__ungrouped__'?!r.group:r.group===chosen));
   document.getElementById('saved-model-count').textContent=rows.length+' model'+(rows.length===1?'':'s');
   const empty=document.getElementById('history-empty');empty.hidden=shown.length>0;empty.textContent=rows.length?'No models in this group.':'Your saved models will appear here.';
   grid.innerHTML=shown.map(r=>{const url=URL.createObjectURL(r.preview);urls.push(url);const date=new Date(r.savedAt).toLocaleString('en-GB',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
    return '<article class="saved-model-card" data-saved="'+text(r.id)+'"><button class="saved-model-image" data-open aria-label="Preview '+text(r.title)+' in the 3D stage"><img src="'+url+'" alt="Saved model preview"><span>3D / '+(r.record.target==='city'?'CITY':'SCULPTURE')+'</span></button><div class="saved-model-meta"><h3>'+text(r.title)+'</h3><p class="saved-group">'+text(r.group||'Ungrouped')+'</p><p>'+text(date)+' · '+Number(r.record.triangles||0).toLocaleString('en-GB')+' triangles</p><div class="saved-model-actions"><button data-open>Preview ↑</button><button data-edit>Name / group</button><button data-export="glb">GLB ↗</button><button data-export="obj"'+(!r.obj?' disabled':'')+'>OBJ ↗</button><button class="delete-saved" data-delete aria-label="Delete '+text(r.title)+'">Delete</button></div></div></article>';
   }).join('');
  }catch(e){document.getElementById('history-status').textContent=e.message;}
 }
 filter?.addEventListener('change',render);
 document.getElementById('delete-model-group').addEventListener('click',async()=>{const group=filter.value;if(!group||group==='__ungrouped__')return;try{const count=await removeGroup(group);filter.value='__ungrouped__';await render();document.getElementById('history-status').textContent='Group removed. '+count+' model'+(count===1?'':'s')+' moved to Ungrouped.';}catch(e){document.getElementById('history-status').textContent=e.message;}});

 grid.addEventListener('click',async e=>{const card=e.target.closest('[data-saved]');if(!card)return;
  try{
   if(e.target.closest('[data-open]')){if(document.body.classList.contains('exhibition-page')&&e.target.closest('.saved-model-image')){document.getElementById('history-status').textContent='Double-click the model to open the 3D view.';return;}const item=await get(card.dataset.saved);if((item?.composition?.workspace==='exhibition-model-loop-v1'||item?.composition?.format==='borrowed-worlds-exhibition-collage'||(!item?.composition&&item?.record?.localOnly))&&!document.body.classList.contains('exhibition-page')){location.href='exhibition.html?saved='+encodeURIComponent(card.dataset.saved);return;}window.dispatchEvent(new CustomEvent('saved-sculpture-open',{detail:{id:card.dataset.saved}}));return;}
   if(e.target.closest('[data-delete]')){await remove(card.dataset.saved);document.getElementById('history-status').textContent='Saved model removed from history.';return;}
   const entry=await get(card.dataset.saved);if(!entry)throw Error('This saved model was removed.');
   if(e.target.closest('[data-edit]')){editingId=entry.id;document.getElementById('saved-edit-name').value=entry.title;document.getElementById('saved-edit-group').value=entry.group||'';dialog.showModal();return;}
   const b=e.target.closest('[data-export]');if(b)download(entry[b.dataset.export],entry.title.replace(/[^a-z0-9_ .-]+/gi,'-')+'.'+b.dataset.export);
  }catch(error){document.getElementById('history-status').textContent=error.message;}
 });
 grid.addEventListener('dblclick',e=>{const card=e.target.closest('[data-saved]');if(document.body.classList.contains('exhibition-page')&&card&&e.target.closest('.saved-model-image'))window.dispatchEvent(new CustomEvent('saved-sculpture-open',{detail:{id:card.dataset.saved}}));});
 document.getElementById('saved-edit-cancel')?.addEventListener('click',()=>dialog.close());
 document.getElementById('saved-model-edit-form')?.addEventListener('submit',async e=>{e.preventDefault();try{await update(editingId,{title:document.getElementById('saved-edit-name').value,group:document.getElementById('saved-edit-group').value});dialog.close();document.getElementById('history-status').textContent='Name and group updated.';window.dispatchEvent(new CustomEvent('saved-sculpture-renamed',{detail:{id:editingId}}));}catch(error){document.getElementById('history-status').textContent=error.message;}});
 listeners.add(render);window.addEventListener('focus',render);await render();
}
window.SavedSculptures=Object.freeze({list,get,remove,removeGroup,save,importEntry,update,updateMedia,overwrite,cameraView,download,gallery,subscribe:fn=>{listeners.add(fn);return()=>listeners.delete(fn);}});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',gallery);else gallery();
})();