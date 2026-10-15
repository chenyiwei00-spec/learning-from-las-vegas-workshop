/* One existing model viewer moves between the page stage and exhibition workspaces. */
(()=>{
'use strict';
const $=id=>document.getElementById(id),surface=$('walk-surface'),browser=$('exhibition-model-browser'),body=$('exhibition-browser-body'),panel=$('model-panel'),dock=$('workspace-model-pane'),inline=$('exhibition-inline-model'),inlineBody=$('exhibition-inline-body'),stage=$('model-stage'),info=panel.querySelector('.model-info');
let active=false,mode='inline',aliases=new Map();
async function entries(){
 const saved=await SavedSculptures.list(),floor=window.ExhibitionWalk?.placement.browseEntries()||[],result=[...saved];aliases=new Map();
 for(const entry of floor){const match=saved.find(s=>s.id===entry.libraryId||s.record.id===entry.record.id);if(match)aliases.set(entry.id,match.id);else result.push(entry);}
 return result;
}
async function resolve(id){
 await entries();const resolved=aliases.get(id)||id,floor=ExhibitionWalk.placement.browseEntries();
 const entry=resolved.startsWith('exhibit:')?floor.find(e=>e.id===resolved)||null:resolved.startsWith('space:')?await ExhibitionArchives.getSpace(resolved):await SavedSculptures.get(resolved);
 const counterpart=entry&&floor.find(e=>e.id===entry.id||e.record.id===entry.record.id),state=ExhibitionWalk.placement.state(),modelId=counterpart?.id.slice(8);
 const current=state.models.find(m=>m.id===state.selected&&m.modelId===modelId)||state.models.find(m=>m.modelId===modelId);
 ExhibitionWalk.placement.select(current?.id||null);return entry;
}
function moveTo(next){
 mode=next;const overlay=mode==='overlay';
 const destination=mode==='inline'?inlineBody:overlay?body:dock,infoParent=mode==='inline'?stage:panel;
 if(panel.parentElement!==destination)destination.append(panel);if(info.parentElement!==infoParent)infoParent.append(info);
 browser.hidden=!overlay;surface.dataset.modelBrowse=String(overlay);$('walk-canvas-host').hidden=overlay;
 $('exhibition-inline-placeholder').hidden=mode==='inline';
 window.dispatchEvent(new Event('resize'));
}
function presentInline(){moveTo('inline');}
function open(){
 const desired=document.fullscreenElement===surface?'overlay':'inline';
 window.ExhibitionWorkspace.closePanel();ExhibitionWalk.suspendNavigation();active=true;moveTo(desired);
 const target=desired==='overlay'?browser:inline;target.setAttribute('tabindex','0');target.focus({preventScroll:true});
 target.scrollIntoView({behavior:'smooth',block:'start'});
}
function dockPanel(resume=false,destination='dock'){
 const wasActive=active;active=false;if(wasActive)window.ExhibitionMedia?.stop();moveTo(destination);
 return resume&&wasActive?window.ExhibitionStudio?.returnToWork():null;
}
$('exhibition-browser-back').onclick=()=>dockPanel(true,'inline');
window.addEventListener('saved-sculpture-open',open);
window.addEventListener('exhibition-model-open',e=>window.dispatchEvent(new CustomEvent('saved-sculpture-open',{detail:{id:e.detail.id}})));
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&active&&mode==='overlay'&&!document.fullscreenElement&&!document.querySelector('dialog[open]')){e.preventDefault();e.stopImmediatePropagation();dockPanel(true,'inline');}
},true);
window.ExhibitionBrowse=Object.freeze({open,presentInline,dock:options=>dockPanel(!options?.preserve,'dock'),close:()=>dockPanel(true,'inline'),entries,resolve,state:()=>({active,mode})});
moveTo('inline');
const requested=new URL(location.href).searchParams.get('saved');
if(requested){const openRequested=async()=>{await ExhibitionWalk.placement.ready;window.dispatchEvent(new CustomEvent('saved-sculpture-open',{detail:{id:requested}}));};if(window.ExhibitionStudio)openRequested();else window.addEventListener('exhibition-studio-ready',openRequested,{once:true});}
})();