import './style.css';
import {installTeamBridge} from './integration/teamBridge.js';
import {initialModels} from './data/catalog.js';
import {createSpatialEngine} from './core/createSpatialEngine.js';
import {ModelThumbnails} from './viewer/ModelThumbnails.js';
import {SpatialWorkspace} from './spatial/SpatialWorkspace.js';

const $=id=>document.getElementById(id),fmt=n=>Math.round(n).toLocaleString('en-US');
let engine,thumbnails,spatial,activeId=null,toastTimer,dropDepth=0,importing=false;
const thumbnailCache=new Map(),buttons=new Map();
function notice(message,error=false){clearTimeout(toastTimer);$('toast').hidden=false;$('toast').textContent=message;$('toast').dataset.error=String(error);toastTimer=setTimeout(()=>$('toast').hidden=true,error?8000:4500);}
function download(url,name){const link=document.createElement('a');link.href=url;link.download=name;link.click();}
function updateLibrary(){
 const entries=engine.repository.list();$('model-list').replaceChildren();buttons.clear();$('model-count').textContent=String(entries.length).padStart(2,'0');$('library-count').textContent=entries.length+' MODELS';
 for(const [index,entry] of entries.entries()){
  const button=document.createElement('button');button.className='model-card';button.dataset.modelId=entry.id;button.setAttribute('aria-label','View '+entry.name);button.setAttribute('aria-pressed',String(entry.id===activeId));
  const thumb=document.createElement('span');thumb.className='model-thumbnail';const image=document.createElement('img');image.alt='';image.dataset.thumbnail=entry.id;if(thumbnailCache.has(entry.id))image.src=thumbnailCache.get(entry.id);thumb.append(image);
  const text=document.createElement('span');text.className='model-card-text';const label=document.createElement('strong');label.textContent=entry.name;const detail=document.createElement('small');detail.textContent=entry.origin==='original'?'Original sculpture':'Imported sculpture';text.append(label,detail);
  const number=document.createElement('span');number.className='model-card-number';number.textContent=String(index+1).padStart(2,'0');button.append(thumb,text,number);button.onclick=()=>select(entry.id);buttons.set(entry.id,button);$('model-list').append(button);
 }
}
async function updateThumbnail(entry){try{if(!thumbnailCache.has(entry.id)){const loaded=await engine.repository.load(entry.id);thumbnailCache.set(entry.id,thumbnails.render(loaded));}const img=buttons.get(entry.id)?.querySelector('img');if(img)img.src=thumbnailCache.get(entry.id);}catch{buttons.get(entry.id)?.classList.add('unavailable');}}
async function select(id){
 if(spatial?.busy){notice('Please wait for space generation to finish.');return;}
 spatial?.beforeModelSelection();
 $('loading').hidden=false;
 try{const loaded=await engine.selectModel(id);if(!loaded)return;activeId=id;const record=loaded.entry,stats=loaded.metadata;
  spatial?.selection(loaded);for(const [key,button] of buttons)button.setAttribute('aria-pressed',String(key===id));
  $('model-title').textContent=record.name;$('model-origin').replaceChildren(document.createTextNode(record.origin==='original'?'ORIGINAL MODEL':'IMPORTED MODEL'));const badge=document.createElement('span');badge.textContent='GLB 2.0';$('model-origin').append(badge);
  $('model-number').textContent=String(engine.repository.list().findIndex(m=>m.id===id)+1).padStart(2,'0');$('triangles').textContent=fmt(stats.triangles);$('vertices').textContent=fmt(stats.vertices);$('file-size').textContent=(stats.bytes/1024/1024).toFixed(2)+' MB';
  $('model-description').textContent=`${stats.meshes} mesh${stats.meshes===1?'':'es'} · ${stats.materials} material${stats.materials===1?'':'s'} · ${stats.dimensions.map(n=>n.toFixed(2)).join(' × ')} source units`;
  document.title=record.name+' — Spatial Generator';try{localStorage.setItem('spatial:last-model',id);}catch{}if($('toast').dataset.error==='true')$('toast').hidden=true;window.dispatchEvent(new CustomEvent('spatial:model-selected',{detail:{id,metadata:stats,scene:loaded.scene}}));
 }catch(error){notice(error.message,true);}finally{$('loading').hidden=true;}
}
async function importFiles(files){
 if(importing||spatial?.busy){notice('Please wait for the current import or generation to finish.');return [];}
 const results=[];importing=true;$('import-button').disabled=true;
 try{for(const file of files){try{notice('Checking '+file.name+'…');const entry=await engine.repository.importFile(file);updateLibrary();await select(entry.id);await updateThumbnail(entry);results.push(entry);notice(entry.name+' added to your library.');window.dispatchEvent(new CustomEvent('spatial:model-imported',{detail:{id:entry.id}}));}catch(error){notice(file.name+': '+error.message,true);}}}
 finally{importing=false;$('import-button').disabled=false;}
 return results;
}
async function main(){
 engine=await createSpatialEngine({container:$('viewport'),models:initialModels,assetBase:import.meta.env.BASE_URL});
 thumbnails=new ModelThumbnails(engine.viewer.environment);engine.repository.addEventListener('warning',e=>notice(e.detail));updateLibrary();
 spatial=new SpatialWorkspace(engine,{notice,showModel:id=>{const next=id||activeId||engine.repository.list()[0]?.id;if(next)return select(next);},thumbnails});
 $('import-button').onclick=()=>$('file-input').click();$('file-input').onchange=e=>{importFiles([...e.target.files]);e.target.value='';};
 $('frame-model').onclick=()=>engine.viewer.frame();
 for(const [id,setter] of [['auto-rotate','setAutoRotate'],['toggle-grid','setGrid'],['toggle-wireframe','setWireframe']])$(id).onclick=()=>{const enabled=$(id).getAttribute('aria-pressed')!=='true';$(id).setAttribute('aria-pressed',String(enabled));engine.viewer[setter](enabled);};
 $('snapshot').onclick=()=>download(engine.viewer.snapshot(),(engine.getCurrent()?.entry.name||'sculpture')+'-view.png');
 const hasFiles=e=>[...(e.dataTransfer?.types||[])].includes('Files');
 window.addEventListener('dragenter',e=>{if(hasFiles(e)){e.preventDefault();dropDepth++;$('drop-overlay').hidden=false;}});
 window.addEventListener('dragover',e=>{if(hasFiles(e)){e.preventDefault();e.dataTransfer.dropEffect='copy';}});
 window.addEventListener('dragleave',e=>{if(hasFiles(e)){dropDepth=Math.max(0,dropDepth-1);if(!dropDepth)$('drop-overlay').hidden=true;}});
 window.addEventListener('drop',e=>{if(!hasFiles(e))return;e.preventDefault();dropDepth=0;$('drop-overlay').hidden=true;importFiles([...e.dataTransfer.files]);});
 window.spatialPrototype=Object.freeze({selectModel:select,importGLB:file=>importFiles([file]),getState:()=>({...engine.getState(),importing,spatial:spatial.getState()}),getModel:id=>engine.repository.load(id),generateSpace:id=>spatial.generate(id),setView:mode=>spatial.setView(mode),getLayout:()=>spatial.getDescriptor(),getVolume:()=>spatial.volume,getAnalyses:()=>structuredClone(spatial.analyses),get engine(){return engine;}});
 let preferred;try{preferred=localStorage.getItem('spatial:last-model');}catch{}
 const entries=engine.repository.list();
 if(entries.length)await select(entries.some(e=>e.id===preferred)?preferred:entries[0].id);
 else{$('loading').hidden=true;$('model-title').textContent='Select a sculpture in the exhibition';$('model-description').textContent='Choose a saved sculpture or import a GLB. Your original files remain untouched.';$('generate-space').disabled=true;$('regenerate-space').disabled=true;}
 installTeamBridge({importFiles,spatial,engine});
 for(const entry of engine.repository.list())await updateThumbnail(entry);
 window.addEventListener('pagehide',e=>{if(!e.persisted){spatial.dispose();thumbnails.dispose();engine.dispose();}});
}
main().catch(error=>{$('loading').hidden=true;notice('Viewer could not start: '+error.message,true);$('model-description').textContent='WebGL is required. Check that hardware acceleration is enabled in your browser.';});
