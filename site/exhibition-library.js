/* Device-local model references: generated library and explicit placement collection. */
(()=>{'use strict';
const $=id=>document.getElementById(id),urls=new Map(),KEY='learning-vegas-agent-model-libraries-v1';
let rendering=0,placing=false,rows=[],generated=[],collection=[],selection=new Set(),anchor=null,sourceMode=false;
try{const v=JSON.parse(localStorage.getItem(KEY)||'{}');generated=Array.isArray(v.generated)?v.generated:[];collection=Array.isArray(v.collection)?v.collection:[];}catch{}
const identity=r=>r.record?.id||r.id;
const unique=list=>[...new Map(list.map(r=>[identity(r),r])).values()];
function persist(){localStorage.setItem(KEY,JSON.stringify({generated,collection}));}
function busy(){return placing||!!window.ExhibitionAgent?.state().busy||!!window.ExhibitionAgentDrafts?.state().busy||!!window.ExhibitionStudio?.state().model.busy;}
function generatedRows(){const ids=new Set(generated);return unique(rows.filter(r=>ids.has(r.id)));}
function collectionRows(){const byId=new Map(rows.map(r=>[r.id,r]));return unique(collection.map(id=>byId.get(id)).filter(Boolean));}
function currentRows(){return sourceMode?unique([...generatedRows(),...rows]):collectionRows();}
function choose(id,e,list){if(busy())return;const i=list.findIndex(r=>r.id===id),a=list.findIndex(r=>r.id===anchor);
 if(e.shiftKey&&a>=0){if(!e.ctrlKey&&!e.metaKey)selection.clear();list.slice(Math.min(a,i),Math.max(a,i)+1).forEach(r=>selection.add(r.id));}
 else if(e.ctrlKey||e.metaKey){selection.has(id)?selection.delete(id):selection.add(id);anchor=id;}
 else{selection.clear();selection.add(id);anchor=id;}syncSelection();
}
function thumb(row,selectable,list){const b=document.createElement('button');b.type='button';b.className='workspace-library-item agent-model-item';b.dataset.agentModelId=row.id;
 const im=document.createElement('img');im.alt=row.title;if(row.preview instanceof Blob){if(!urls.has(row.id))urls.set(row.id,URL.createObjectURL(row.preview));im.src=urls.get(row.id);}const n=document.createElement('span');n.textContent=row.title;b.append(im,n);
 b.title=row.title+' / double-click to view';b.onclick=e=>selectable?choose(row.id,e,list):null;b.ondblclick=()=>{if(!busy())window.dispatchEvent(new CustomEvent('saved-sculpture-open',{detail:{id:row.id}}));};
 b.setAttribute('aria-pressed',String(selection.has(row.id)));b.classList.toggle('is-selected',selection.has(row.id));
 b.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();b.ondblclick();}else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='a'&&selectable){e.preventDefault();list.forEach(r=>selection.add(r.id));syncSelection();}};return b;
}
function renderPanes(){
 const own=generatedRows(),list=currentRows();
 $('agent-model-grid').replaceChildren(...own.map(r=>thumb(r,false,own)));$('agent-model-count').textContent=own.length+' models';
 $('place-model-grid').replaceChildren(...list.map(r=>thumb(r,true,list)));
 syncSelection();
}
function syncSelection(){const list=currentRows();for(const b of document.querySelectorAll('[data-agent-model-id]')){const active=selection.has(b.dataset.agentModelId);b.classList.toggle('is-selected',active);b.setAttribute('aria-pressed',String(active));}
 $('place-model-heading').textContent=sourceMode?'CHOOSE MODELS':'PLACEMENT COLLECTION';
 $('place-model-count').textContent=(sourceMode?list.length+' available':list.length+' in collection')+' / '+selection.size+' selected';
 $('place-model-add').hidden=!sourceMode;$('place-model-add').disabled=busy()||!selection.size;
 $('place-model-remove').hidden=sourceMode;$('place-model-remove').disabled=busy()||!selection.size;
 $('place-model-source').textContent=sourceMode?'Back to collection':'Add models +';
 $('place-model-run').hidden=sourceMode;$('place-model-run').disabled=busy()||!collectionRows().length;
 refreshLayoutButton();
}
async function render(){const ticket=++rendering,next=await SavedSculptures.list();if(ticket!==rendering)return;rows=next;
 const valid=new Set(rows.map(r=>r.id));generated=[...new Set([...generated,...rows.filter(r=>(['Agent batch','Collage batch'].includes(r.group)||r.composition?.agentPlan)).map(r=>r.id)])].filter(id=>valid.has(id));collection=collection.filter(id=>valid.has(id));for(const id of selection)if(!valid.has(id))selection.delete(id);persist();
 for(const u of urls.values())URL.revokeObjectURL(u);urls.clear();
 const grid=$('workspace-library-grid');grid.replaceChildren();$('workspace-library-count').textContent=String(rows.length);
 for(const row of unique(rows)){const b=thumb(row,false,rows);b.dataset.libraryId=row.id;b.onclick=()=>{if(!busy())window.dispatchEvent(new CustomEvent('saved-sculpture-open',{detail:{id:row.id}}));};grid.append(b);}renderPanes();
}
async function saveCurrent(number,metadata={}){const model=ExhibitionStudio.captureModel(),viewer=$('generated-sculpture-viewer');if(!model.record||!ExhibitionStudio.state().model.loaded)throw Error('The generated model is not ready to save.');
 const result=await SavedSculptures.save(model.record,viewer,{title:(model.record.target==='city'?'City':'Sculpture')+' / '+new Date().toLocaleTimeString('en-GB')+' / '+number,group:'Agent batch',...metadata});generated.push(result.entry.id);persist();await render();return result.entry;}
const random=()=>crypto.getRandomValues(new Uint32Array(1))[0]/4294967296;
async function arrange(){if(busy())return;placing=true;refreshLayoutButton();let done=0;
 try{await ExhibitionWalk.placement.ready;const selected=collectionRows();if(!selected.length)throw Error('Add models to the placement collection first.');
 const layout=ExhibitionLayoutPlanner.plan(selected,{random}),floor=ExhibitionWalk.placement.state().models;
 const existing=ExhibitionWalk.placement.browseEntries(),byModel=new Map(existing.map(r=>[r.id.replace('exhibit:',''),r]));
 const used=new Set(),matched=selected.map(row=>floor.find(f=>!used.has(f.id)&&identity(byModel.get(f.modelId)||{})===identity(row)&&(used.add(f.id),true)));
 ExhibitionWalk.space?.showOriginal();
 if(floor.length===selected.length&&matched.every(Boolean)){await ExhibitionWalk.placement.applyLayout(layout.map((l,i)=>({...l,id:matched[i].id})));done=selected.length;}
 else{const descriptors=[];for(const row of selected){const hash=await crypto.subtle.digest('SHA-256',await row.glb.arrayBuffer()),id=[...new Uint8Array(hash)].map(v=>v.toString(16).padStart(2,'0')).join('');descriptors.push({id:/^[a-f0-9]{64}$/.test(row.record?.id)?row.record.id:id,blob:row.glb,name:row.title,preview:row.preview,record:row.record,composition:row.composition,camera:row.camera,libraryId:row.id,obj:row.obj});}
 await ExhibitionWalk.placement.replaceCollection(descriptors,layout);done=selected.length;}
 $('exhibition-layout-status').textContent=done+' arranged';$('place-model-status').textContent=done+' models arranged in the current view.';
 }catch(e){$('exhibition-layout-status').textContent=e.message;$('place-model-status').textContent=e.message;}finally{placing=false;renderPanes();}
}
function refreshLayoutButton(){const disabled=busy()||!collectionRows().length;$('exhibition-layout-run').disabled=disabled;$('place-model-run').disabled=disabled;}
// PLACE never changes the walk/axon camera.
$('agent-model-toggle').onclick=()=>{$('agent-model-toggle').closest('details').open=false;selection.clear();ExhibitionWorkspace.openPanel('agent-models');renderPanes();};
$('place-model-toggle').onclick=()=>{selection.clear();sourceMode=false;ExhibitionWorkspace.openPanel('placement');renderPanes();};
$('place-model-source').onclick=()=>{if(busy())return;sourceMode=!sourceMode;selection.clear();anchor=null;renderPanes();};
$('place-model-add').onclick=()=>{if(busy())return;collection=unique([...collectionRows(),...currentRows().filter(r=>selection.has(r.id))]).map(r=>r.id);persist();selection.clear();sourceMode=false;renderPanes();};
$('place-model-remove').onclick=()=>{if(busy())return;collection=collection.filter(id=>!selection.has(id));persist();selection.clear();renderPanes();};
$('exhibition-layout-run').onclick=arrange;$('place-model-run').onclick=arrange;
for(const name of ['exhibition-draft-queue-change','exhibition-placement-change','exhibition-studio-ready'])window.addEventListener(name,refreshLayoutButton);
SavedSculptures.subscribe(()=>render().catch(e=>$('workspace-library-status').textContent=e.message));
new MutationObserver(refreshLayoutButton).observe($('model-frame'),{attributes:true,attributeFilter:['aria-busy']});
window.addEventListener('pagehide',()=>urls.forEach(u=>URL.revokeObjectURL(u)));
window.ExhibitionLibrary=Object.freeze({render,saveCurrent,arrange,state:()=>({placing,count:rows.length,generated:generatedRows().map(r=>r.id),collection:collectionRows().map(r=>r.id),sourceMode})});
render().catch(e=>$('workspace-library-status').textContent=e.message);
})();