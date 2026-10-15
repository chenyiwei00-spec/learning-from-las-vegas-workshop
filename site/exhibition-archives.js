/* The lower saved library shares collages and stores generated spaces as real local GLBs. */
(()=>{'use strict';
const $=id=>document.getElementById(id),DB='learning-vegas-saved-spaces-v1',urls=new Set();
let dbPromise,revision=0,kind='models',spacesCache=[],draftsCache=[],editing=null;
try{kind=localStorage.getItem('learning-vegas-library-kind')||kind;}catch{}
if(!['models','collages','spaces'].includes(kind))kind='models';
function database(){return dbPromise||(dbPromise=new Promise((resolve,reject)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore('spaces',{keyPath:'id'});r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);}));}
async function transaction(mode,action){const d=await database();return new Promise((resolve,reject)=>{const tx=d.transaction('spaces',mode),r=action(tx.objectStore('spaces'));tx.oncomplete=()=>resolve(r?.result);tx.onerror=tx.onabort=()=>reject(tx.error||Error('Space storage failed.'));});}
const spaces=async()=>((await transaction('readonly',s=>s.getAll()))||[]).sort((a,b)=>b.savedAt-a.savedAt);
const getSpace=id=>transaction('readonly',s=>s.get(id));
async function saveSpace(source){
 if(!(source?.glb instanceof Blob)||await source.glb.slice(0,4).text()!=='glTF')throw Error('This space has no valid GLB.');
 const fingerprint=[...new Uint8Array(await crypto.subtle.digest('SHA-256',await source.glb.arrayBuffer()))].map(n=>n.toString(16).padStart(2,'0')).join('');
 const rows=await spaces(),old=rows.find(r=>r.record.id===fingerprint);
 if(old){Object.assign(old,{runtime:source.runtime||old.runtime,renderCamera:source.renderCamera||old.renderCamera,updatedAt:Date.now()});await transaction("readwrite",s=>s.put(old));await render();return old;}
 const id='space:'+crypto.randomUUID(),number=rows.length+1;
 const entry={id,title:'Space '+String(number).padStart(2,'0'),group:'Generated spaces',savedAt:Date.now(),ephemeral:true,runtime:source.runtime||null,renderCamera:source.renderCamera||null,glb:source.glb,obj:null,preview:source.preview,camera:source.camera||null,composition:null,layout:source.layout||[],signature:source.signature,record:{id:fingerprint,fingerprint,modelUrl:'assets/generated-sculptures/'+fingerprint+'/sculpture.glb',objUrl:'assets/generated-sculptures/'+fingerprint+'/sculpture.obj',target:'space',triangles:source.triangles||0,localOnly:true,linkedMedia:{version:2,video:null,audio:null}}};
 await transaction('readwrite',s=>s.put(entry));await render();return entry;
}
async function overwriteSpace(id,viewer,metadata={}){
 const old=await getSpace(id);if(!old)throw Error('This saved space was removed.');
 await viewer.updateComplete;await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
 old.camera=SavedSculptures.cameraView(viewer);old.preview=await viewer.toBlob({mimeType:'image/png',idealAspect:false});old.updatedAt=Date.now();
 if(metadata.title?.trim())old.title=metadata.title.trim().slice(0,120);
 if(metadata.group!==undefined)old.group=String(metadata.group).trim().slice(0,80);
 await transaction('readwrite',s=>s.put(old));await render();return old;
}
function download(blob,name){if(!(blob instanceof Blob))return;const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);}
function report(error){$('archive-library-status').textContent=error.message||String(error);}
function edit(row,type){
 editing={id:row.id,type};$('archive-item-name').value=row.title;$('archive-item-group').value=row.group||(type==='collage'?'Agent collages':'Generated spaces');$('archive-item-edit').showModal();$('archive-item-name').focus();
}
$('archive-item-cancel').onclick=()=>$('archive-item-edit').close();
$('archive-item-edit-form').onsubmit=async e=>{
 e.preventDefault();if(!editing)return;const metadata={title:$('archive-item-name').value.trim(),group:$('archive-item-group').value.trim()};
 try{if(editing.type==='collage')await ExhibitionAgentDrafts.update(editing.id,metadata);else{const row=await getSpace(editing.id);if(!row)throw Error('This space was removed.');Object.assign(row,metadata);await transaction('readwrite',s=>s.put(row));}await render();$('archive-item-edit').close();}
 catch(error){report(error);}
};
async function openSpace(id){
 const row=await getSpace(id);if(!row)throw Error('This saved space was removed.');
 await window.ExhibitionBrowse?.close();window.ExhibitionWorkspace?.closePanel();
 await ExhibitionWalk.space.openSaved(row);document.getElementById('walk-surface').scrollIntoView({behavior:'smooth',block:'start'});
}
window.addEventListener('saved-sculpture-open',e=>{if(String(e.detail?.id).startsWith('space:')){e.stopImmediatePropagation();openSpace(e.detail.id).catch(report);}},true);
function card(row,type){
 const article=document.createElement('article');article.className='saved-model-card';article.dataset.saved=row.id;
 const button=document.createElement('button');button.type='button';button.className='saved-model-image';button.setAttribute('aria-label',(type==='collage'?'Edit ':'View ')+row.title);
 const img=document.createElement('img');img.alt=row.title;
 if(row.preview instanceof Blob){const u=URL.createObjectURL(row.preview);urls.add(u);img.src=u;}
 const badge=document.createElement('span');badge.textContent=type==='collage'?'COLLAGE':'3D / SPACE';button.append(img,badge);
 const meta=document.createElement('div');meta.className='saved-model-meta';
 const title=document.createElement('h3');title.textContent=row.title;title.title=row.title;const group=document.createElement('p');group.className='saved-group';group.textContent=row.group||(type==='collage'?'Agent collages':'Generated spaces');
 const date=document.createElement('p');date.textContent=new Date(row.savedAt||row.createdAt).toLocaleString('en-GB',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
 date.textContent+=' / '+(type==='collage'?(row.document?.layers?.length||0)+' objects':Number(row.record?.triangles||0).toLocaleString('en-GB')+' triangles');
 const actions=document.createElement('div');actions.className='saved-model-actions';
 function action(label,fn){const b=document.createElement('button');b.type='button';b.textContent=label;b.onclick=e=>{e.stopPropagation();Promise.resolve().then(fn).catch(report);};actions.append(b);return b;}
 const open=()=>type==='collage'?ExhibitionAgentDrafts.load(row.id):openSpace(row.id);
 button.onclick=()=>Promise.resolve().then(open).catch(report);
 article.onclick=e=>{if(!e.target.closest('button,a,input'))Promise.resolve().then(open).catch(report);};
 action('Name / group',()=>edit(row,type));
 if(type==='collage'){action('PNG',()=>download(row.preview,row.title+'.png'));action('JSON',()=>download(new Blob([JSON.stringify(row.document,null,2)],{type:'application/json'}),row.title+'.json'));}
 else{action('GLB',()=>download(row.glb,row.title+'.glb'));action('OBJ',()=>{}).disabled=true;}
 const del=action('Delete',async()=>{if(type==='collage')await ExhibitionAgentDrafts.remove(row.id);else await transaction('readwrite',s=>s.delete(row.id));await render();});del.className='delete-saved';del.setAttribute('aria-label','Delete '+row.title);
 meta.append(title,group,date,actions);article.append(button,meta);return article;
}
function syncTabs(){
 for(const k of ['models','collages','spaces']){$('archive-tab-'+k).setAttribute('aria-selected',String(k===kind));$('archive-tab-'+k).tabIndex=k===kind?0:-1;}
 $('archive-model-pane').hidden=kind!=='models';$('archive-collage-pane').hidden=kind!=='collages';$('archive-space-pane').hidden=kind!=='spaces';
 $('saved-model-count').hidden=kind!=='models';
}
async function render(){
 const ticket=++revision;
 try{
  const [saved,drafts]=await Promise.all([spaces(),window.ExhibitionAgentDrafts?.list()||[]]);if(ticket!==revision)return;
  urls.forEach(u=>URL.revokeObjectURL(u));urls.clear();spacesCache=saved;draftsCache=drafts;
  $('archive-collage-grid').replaceChildren(...drafts.map(r=>card(r,'collage')));
  $('archive-space-grid').replaceChildren(...saved.map(r=>card(r,'space')));
  $('archive-collage-empty').hidden=!!drafts.length;$('archive-space-empty').hidden=!!saved.length;
  ExhibitionCardImages.attach($('archive-space-grid'),saved);syncTabs();window.dispatchEvent(new Event('exhibition-space-library-change'));
 }catch(e){report(e);}
}
function select(next){kind=next;try{localStorage.setItem('learning-vegas-library-kind',kind);}catch{}syncTabs();render();}
for(const k of ['models','collages','spaces'])$('archive-tab-'+k).onclick=()=>select(k);
document.querySelector('.archive-library-tabs').addEventListener('keydown',e=>{
 const keys=['models','collages','spaces'],index=keys.indexOf(kind);
 if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
 e.preventDefault();select(keys[e.key==='Home'?0:e.key==='End'?2:(index+(e.key==='ArrowRight'?1:2))%3]);$('archive-tab-'+kind).focus();
});
window.addEventListener('exhibition-draft-library-change',()=>render());
window.addEventListener('focus',()=>render());window.addEventListener('pagehide',()=>{urls.forEach(u=>URL.revokeObjectURL(u));urls.clear();});
window.ExhibitionArchives=Object.freeze({spaces,getSpace,saveSpace,openSpace,overwriteSpace,render,select,state:()=>({kind,spaces:spacesCache.length,collages:draftsCache.length})});
syncTabs();render();
})();
