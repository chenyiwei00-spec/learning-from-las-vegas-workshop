/* Local editable collages, Windows-style selection and one-at-a-time mesh generation. */
(()=>{
'use strict';
const $=id=>document.getElementById(id),urls=new Map(),selected=new Set();
let epoch=0,rows=[],anchor=null,busy=false,stop=false,completed=0,failures=[];
function db(){return new Promise((resolve,reject)=>{const r=indexedDB.open('learning-vegas-agent-collages-v1',1);r.onupgradeneeded=()=>r.result.createObjectStore('drafts',{keyPath:'id'});r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}
async function transact(mode,action){const d=await db();try{return await new Promise((resolve,reject)=>{const tx=d.transaction('drafts',mode),r=action(tx.objectStore('drafts'));tx.oncomplete=()=>resolve(r?.result);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||Error('Storage was interrupted.'));});}finally{d.close();}}
const list=async()=>((await transact('readonly',s=>s.getAll()))||[]).sort((a,b)=>b.createdAt-a.createdAt);
function updateSelection(){
 for(const button of document.querySelectorAll('[data-collage-id]')){const active=selected.has(button.dataset.collageId);button.setAttribute('aria-pressed',String(active));button.classList.toggle('is-selected',active);}
 $('agent-draft-selection').textContent=selected.size+' selected';
 $('agent-draft-generate').disabled=busy||!selected.size||!!window.ExhibitionAgent?.state().busy||!!window.ExhibitionStudio?.state().model.busy;
 $('agent-draft-stop').hidden=!busy;$('agent-draft-delete').disabled=busy||!selected.size||!!window.ExhibitionAgent?.state().busy;
 $('agent-draft-toggle').hidden=false;
 $('workspace-collage-count').textContent=rows.length;
}
function choose(id,event={}){
 if(busy)return;
 const index=rows.findIndex(r=>r.id===id),a=rows.findIndex(r=>r.id===anchor);
 if(event.shiftKey&&a>=0){if(!event.ctrlKey&&!event.metaKey)selected.clear();rows.slice(Math.min(a,index),Math.max(a,index)+1).forEach(r=>selected.add(r.id));}
 else if(event.ctrlKey||event.metaKey){selected.has(id)?selected.delete(id):selected.add(id);anchor=id;}
 else{selected.clear();selected.add(id);anchor=id;}
 updateSelection();
}
function thumbnail(row,compact){
 const button=document.createElement('button');button.type='button';button.className='workspace-library-item agent-draft-item';button.dataset.collageId=row.id;button.title=row.title+' / double-click to edit';button.setAttribute('aria-label',row.title);
 const img=document.createElement('img');img.alt=row.title;if(row.preview){if(!urls.has(row.id))urls.set(row.id,URL.createObjectURL(row.preview));img.src=urls.get(row.id);}
 button.append(img);if(!compact){const name=document.createElement('span');name.textContent=row.title;button.append(name);}
 button.onclick=e=>choose(row.id,e);button.ondblclick=()=>load(row.id).catch(report);
 button.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();load(row.id).catch(report);}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='a'){e.preventDefault();if(!busy){rows.forEach(r=>selected.add(r.id));updateSelection();}}};
 return button;
}
function renderSmall(){
 const grid=$('agent-draft-grid');grid.replaceChildren(...rows.map(r=>thumbnail(r,false)));updateSelection();
}
async function render(){
 const ticket=++epoch,next=await list();if(ticket!==epoch)return;
 const valid=new Set(next.map(r=>r.id));for(const id of selected)if(!valid.has(id))selected.delete(id);
 for(const [id,url]of urls)if(!valid.has(id)){URL.revokeObjectURL(url);urls.delete(id);}
 rows=next;const grid=$('workspace-collage-grid');grid.replaceChildren();
 for(const row of rows){const card=document.createElement('div'),remove=document.createElement('button');card.className='workspace-draft-card';remove.type='button';remove.className='text-button';remove.textContent='Delete';remove.onclick=async()=>{if(busy||ExhibitionAgent.state().busy)return;await transact('readwrite',s=>s.delete(row.id));await render();};card.append(thumbnail(row,false),remove);grid.append(card);}
 renderSmall();window.dispatchEvent(new Event('exhibition-draft-library-change'));
}
async function save(number=1){const document=ExhibitionStudio.getDocument(),preview=await ExhibitionStudio.exportAgentPreview(),row={id:crypto.randomUUID(),title:(document.modelTarget==='sculpture'?'Sculpture':'City')+' / '+new Date().toLocaleTimeString('en-GB')+' / '+number,createdAt:Date.now(),document,preview};await transact('readwrite',s=>s.put(row));await render();return row;}
async function restoreRow(row){await ExhibitionBrowse.close();await ExhibitionStudio.prepareAgent();ExhibitionStudio.clear();await ExhibitionStudio.restore(row.document);}
async function load(id){if(busy||ExhibitionAgent.state().busy||ExhibitionStudio.state().model.busy)return;const row=await transact('readonly',s=>s.get(id));if(!row)return;await restoreRow(row);ExhibitionWorkspace.openPanel(row.document.sourceSurface==='sculpture'?'sculpture':'collage');$('exhibition-message').textContent='Edit this collage, then click Generate 3D when ready.';}
function report(e){$('agent-draft-status').textContent=e.message;$('workspace-collage-status').textContent=e.message;}
function signal(){document.body.dataset.collageQueueBusy=String(busy);window.dispatchEvent(new Event('exhibition-draft-queue-change'));updateSelection();}
function lock(value){
 if(value){lock.previous=[];for(const el of document.querySelectorAll('#workspace-collage-pane,#model-panel,#saved-model-grid,#workspace-library-grid,.workspace-tabs,.workspace-generate-actions:not(#agent-draft-footer)')){lock.previous.push([el,el.inert]);el.inert=true;}}
 else{for(const [el,old]of lock.previous||[])el.inert=old;lock.previous=[];}
}
async function waitForPreview(jobId){
 const end=Date.now()+120000;
 while(Date.now()<end){const s=ExhibitionStudio.state().model;if(s.error)throw Error(s.error);if(!s.busy&&s.loaded&&!s.stale&&s.jobId===jobId)return;await new Promise(r=>setTimeout(r,100));}
 throw Error('The model finished, but its preview did not load. The next collage will continue.');
}
async function generateSelected(){
 if(busy||ExhibitionAgent.state().busy||ExhibitionStudio.state().model.busy||ExhibitionLibrary.state().placing)return;
 const queue=rows.filter(r=>selected.has(r.id)).map(r=>structuredClone(r));if(!queue.length)return;
 if(!ExhibitionStudio.state().model.ready){report(Error('The local 3D generator is unavailable. Your collages remain saved.'));return;}
 busy=true;stop=false;completed=0;failures=[];signal();lock(true);
 try{
  ExhibitionWorkspace.openPanel('drafts');
  for(const row of queue){
   if(stop)break;
   $('agent-draft-status').textContent=completed+' / '+queue.length+' models / '+row.title;
   try{
    await restoreRow(row);await ExhibitionStudio.generate();
    const s=ExhibitionStudio.state().model;if(s.error)throw Error(s.error);if(!s.jobId)throw Error('No model was produced.');
    await waitForPreview(s.jobId);
    const entry=await ExhibitionLibrary.saveCurrent(completed+1,{title:row.title,group:'Collage batch'});
    row.modelIds=[...new Set([...(row.modelIds||[]),entry.id])];await transact('readwrite',store=>store.put(row));completed++;
   }catch(e){failures.push({id:row.id,message:e.message});}
   ExhibitionStudio.releaseUnused();
  }
  $('agent-draft-status').textContent=completed+' / '+queue.length+' models saved'+(stop?' / stopped':'')+(failures.length?' / '+failures.length+' failed: '+failures.at(-1).message:'');
 }catch(e){report(e);}
 finally{busy=false;lock(false);signal();await render();await ExhibitionLibrary.render();}
}
async function deleteSelected(){if(busy||window.ExhibitionAgent?.state().busy)return;const ids=[...selected];if(!ids.length)return;await transact('readwrite',s=>{ids.forEach(id=>s.delete(id));});selected.clear();anchor=null;await render();$('agent-draft-status').textContent=ids.length+' collages deleted. Generated models are kept.';}
$('agent-draft-delete').onclick=()=>deleteSelected().catch(report);
$('agent-draft-generate').onclick=generateSelected;
$('agent-draft-stop').onclick=()=>{stop=true;$('agent-draft-status').textContent='Finishing and saving the current model, then stopping...';};
$('agent-draft-toggle').onclick=()=>{$('agent-draft-toggle').closest('details').open=false;if(ExhibitionWorkspace.state().panel==='drafts')ExhibitionWorkspace.closePanel();else ExhibitionWorkspace.openPanel('drafts');};
window.addEventListener('exhibition-draft-queue-change',updateSelection);window.addEventListener('exhibition-studio-ready',updateSelection);
new MutationObserver(updateSelection).observe($('model-frame'),{attributes:true,attributeFilter:['aria-busy']});
window.ExhibitionAgentDrafts=Object.freeze({list,save,load,remove:async id=>{if(busy||window.ExhibitionAgent?.state().busy)throw Error('Finish generation before deleting a collage.');await transact('readwrite',s=>s.delete(id));await render();},render,generateSelected,deleteSelected,state:()=>({busy,completed,failures:structuredClone(failures),selected:[...selected],count:rows.length,stopRequested:stop})});
render().catch(report);window.addEventListener('pagehide',()=>urls.forEach(u=>URL.revokeObjectURL(u)));
})();