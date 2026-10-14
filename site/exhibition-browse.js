/* Expand a model into the shared full-size carousel while keeping the room in memory. */
(()=>{
'use strict';
const $=id=>document.getElementById(id),surface=$('walk-surface'),browser=$('exhibition-model-browser'),body=$('exhibition-browser-body'),panel=$('model-panel'),dock=$('workspace-model-pane');
let active=false,aliases=new Map();
async function entries(){
 const saved=await SavedSculptures.list(),floor=window.ExhibitionWalk?.placement.browseEntries()||[],result=[...saved];aliases=new Map();
 for(const entry of floor){
  const match=saved.find(s=>s.id===entry.libraryId||s.record.id===entry.record.id);
  if(match)aliases.set(entry.id,match.id);else result.push(entry);
 }
 return result;
}
async function resolve(id){
 await entries();const resolved=aliases.get(id)||id;
 const floor=window.ExhibitionWalk.placement.browseEntries();
 const entry=resolved.startsWith('exhibit:')?floor.find(e=>e.id===resolved)||null:await SavedSculptures.get(resolved);
 const counterpart=entry&&floor.find(e=>e.id===entry.id||e.record.id===entry.record.id);
 const state=window.ExhibitionWalk.placement.state(),modelId=counterpart?.id.slice(8);
 const current=state.models.find(m=>m.id===state.selected&&m.modelId===modelId)||state.models.find(m=>m.modelId===modelId);
 window.ExhibitionWalk.placement.select(current?.id||null);
 return entry;
}
function open(){
 if(active){browser.focus({preventScroll:true});return;}
 window.ExhibitionWorkspace.closePanel();window.ExhibitionWalk.suspendNavigation();
 active=true;body.append(panel);browser.hidden=false;surface.dataset.modelBrowse='true';
 surface.querySelector('#walk-canvas-host').hidden=true;
 browser.focus({preventScroll:true});surface.scrollIntoView({behavior:'smooth',block:'start'});
 window.dispatchEvent(new Event('resize'));
}
function dockPanel(resume=false){
 if(!active)return;
 active=false;browser.hidden=true;surface.dataset.modelBrowse='false';dock.append(panel);
 $('walk-canvas-host').hidden=false;
 if(resume)window.ExhibitionStudio?.returnToWork();
 window.dispatchEvent(new Event('resize'));
}
$('exhibition-browser-back').onclick=()=>dockPanel(true);
window.addEventListener('saved-sculpture-open',open);
window.addEventListener('exhibition-model-open',e=>{
 // A plain click opens the model; dragging continues to edit the layout.
 window.dispatchEvent(new CustomEvent('saved-sculpture-open',{detail:{id:e.detail.id}}));
});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&active&&!document.fullscreenElement&&!document.querySelector('dialog[open]')){e.preventDefault();e.stopImmediatePropagation();dockPanel(true);}
},true);
window.ExhibitionBrowse=Object.freeze({open,dock:()=>dockPanel(true),close:()=>dockPanel(true),entries,resolve,state:()=>({active})});
surface.dataset.modelBrowse='false';
const requested=new URL(location.href).searchParams.get('saved');
if(requested){const openRequested=async()=>{await window.ExhibitionWalk.placement.ready;window.dispatchEvent(new CustomEvent('saved-sculpture-open',{detail:{id:requested}}));};if(window.ExhibitionStudio)openRequested();else window.addEventListener('exhibition-studio-ready',openRequested,{once:true});}
})();
