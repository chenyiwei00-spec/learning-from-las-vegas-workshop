/* Still renders and camera-path films are device-local, independent of mesh generation. */
(()=>{
'use strict';
const $=id=>document.getElementById(id),KEY='learning-vegas-camera-path-v1';let busy=false,playing=false,opened=false,previewRAF=0,previewRestore=null,keys=[],urls=[],thumbUrls=[];
try{const saved=JSON.parse(localStorage.getItem(KEY)||'[]');if(Array.isArray(saved))keys=saved;}catch{}
function db(){return new Promise((resolve,reject)=>{const r=indexedDB.open('learning-vegas-render-output-v1',1);r.onupgradeneeded=()=>r.result.createObjectStore('outputs',{keyPath:'id'});r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}
async function tx(mode,action){const d=await db();try{return await new Promise((resolve,reject)=>{const t=d.transaction('outputs',mode),r=action(t.objectStore('outputs'));t.oncomplete=()=>resolve(r?.result);t.onerror=t.onabort=()=>reject(t.error||Error('Render library could not be saved.'));});}finally{d.close();}}
const list=async()=>((await tx('readonly',s=>s.getAll()))||[]).sort((a,b)=>b.createdAt-a.createdAt);
const walk=()=>window.ExhibitionWalk;
const pose=()=>({...walk().state().walkingCamera,fly:walk().state().fly});
const persist=()=>localStorage.setItem(KEY,JSON.stringify(keys));
const status=text=>{$('render-output-status').textContent=text;};
function download(blob,name){const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),10000);}
const cleanName=()=>($('render-output-name').value.trim()||'Learning from Las Vegas').replace(/[\\/:*?"<>|]+/g,'-');
function apply(value){walk().setCamera({...value.pose,fly:true});walk().lighting.set(value.light);}
function sorted(){return [...keys].sort((a,b)=>a.time-b.time);}
function renderKeys(){
 const container=$('render-camera-list');container.replaceChildren();
 keys.forEach((key,i)=>{
  const row=document.createElement('section');row.className='render-camera-key';const head=document.createElement('div');head.className='render-camera-key-heading';const title=document.createElement('b');title.textContent='CAMERA '+String(i+1).padStart(2,'0');head.append(title);
  const action=(name,fn)=>{const b=document.createElement('button');b.type='button';b.textContent=name;b.disabled=busy||playing;b.onclick=fn;head.append(b);};
  action('View',()=>{walk().setViewMode('room');apply(key);});action('Update',()=>{key.pose=pose();key.light=walk().lighting.state();persist();renderKeys();});action('Delete',()=>{keys.splice(i,1);persist();renderKeys();});row.append(head);
  const field=(label,value,change,step='0.1')=>{const l=document.createElement('label');l.textContent=label;const input=document.createElement('input');input.type='number';input.step=step;input.value=String(value);input.disabled=busy||playing;input.onchange=()=>{if(Number.isFinite(input.valueAsNumber)){change(input.valueAsNumber);persist();}};l.append(input);return l;};
  const timing=document.createElement('div');timing.className='render-camera-fields';timing.append(field('Film time / s',key.time,v=>key.time=Math.max(0,v)),field('Sun / hour',key.light?.time??8,v=>key.light={time:Math.max(0,Math.min(24,v))}));row.append(timing);
  const advanced=document.createElement('details'),summary=document.createElement('summary');summary.textContent='Position / direction';advanced.append(summary);const fields=document.createElement('div');fields.className='render-camera-fields';
  for(const n of ['x','y','z','yaw','pitch'])fields.append(field(n.toUpperCase()+(n==='yaw'||n==='pitch'?' / degrees':' / m'),(key.pose[n]||0)*(n==='yaw'||n==='pitch'?180/Math.PI:1),v=>key.pose[n]=v*(n==='yaw'||n==='pitch'?Math.PI/180:1)));
  advanced.append(fields);row.append(advanced);container.append(row);
 });
 $('render-camera-count').textContent=keys.length+' camera views';$('render-camera-empty').hidden=!!keys.length;
}
function stopPreview(){
 if(previewRAF)cancelAnimationFrame(previewRAF);previewRAF=0;playing=false;
 if(previewRestore){walk().setCamera(previewRestore.pose);walk().lighting.set(previewRestore.light);walk().setViewMode(previewRestore.view);previewRestore=null;}
 renderKeys();$('render-path-play').textContent='Preview path';
}
function preview(){
 if(busy)return;if(playing){stopPreview();return;}
 try{const path=sorted();walk().sampleCameraPath(path,0);previewRestore={pose:pose(),light:walk().lighting.state(),view:walk().state().viewMode};walk().suspendNavigation();walk().setViewMode('room');playing=true;renderKeys();$('render-path-play').textContent='Stop preview';const start=performance.now(),duration=path.at(-1).time;
  const tick=now=>{if(!playing)return;const t=Math.min(duration,(now-start)/1000);apply(walk().sampleCameraPath(path,t,$('render-path-smooth').checked));$('render-path-scrub').value=String(t/duration*1000);if(t<duration)previewRAF=requestAnimationFrame(tick);else stopPreview();};previewRAF=requestAnimationFrame(tick);
 }catch(e){status(e.message);}
}
async function saveOutput(value,type,name){
 const source=value.blob,canvas=document.createElement('canvas'),image=await createImageBitmap(type==='video'?value.poster:source);canvas.width=640;canvas.height=Math.round(640*value.height/value.width);canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);image.close();
 const preview=await new Promise(r=>canvas.toBlob(r,'image/jpeg',.88)),row={id:crypto.randomUUID(),title:name,type,blob:source,preview,width:value.width,height:value.height,createdAt:Date.now(),extension:type==='video'?value.extension:'png',pose:value.pose||null,light:value.light||null,view:value.view||'room',keys:value.keys||null,fps:value.fps||null,duration:value.duration||null,audio:value.audio||null};
 await tx('readwrite',s=>s.put(row));await renderLibrary();window.ExhibitionArchives?.select('renders');$('model-history').open=true;return row;
}
async function captureStill(options={}){
 if(busy||playing)return;busy=true;ui();status('Rendering high-resolution image...');
 try{const width=options.width||Number($('render-output-resolution').value),height=options.height||Math.round(width*9/16);const value=await walk().output.still({width,height,samples:options.samples||4});const row=await saveOutput(value,'image',cleanName());status('Saved '+width+' x '+height+' PNG in Renderings');return row;}
 catch(e){status(e.name==='AbortError'?'Render cancelled':e.message);throw e;}finally{busy=false;ui();}
}
async function exportFilm(options={}){
 if(busy||playing)return;busy=true;ui();status('Preparing camera-path film...');
 try{const width=options.width||Number($('render-film-resolution').value),height=options.height||Math.round(width*9/16),fps=options.fps||Number($('render-film-fps').value);
  const value=await walk().output.film({keys:sorted(),width,height,fps,smooth:$('render-path-smooth').checked,includeAudio:options.includeAudio??$('render-film-audio').checked,onProgress:p=>status('Rendering film / '+Math.round(p*100)+'%')});const row=await saveOutput(value,'video',cleanName());status('Film saved / '+value.extension.toUpperCase()+(value.audio?.included?(value.audio.sources?' / Exhibition audio included':' / No exhibit sound along this path'):' / Silent'));download(row.blob,row.title+'.'+row.extension);return row;
 }catch(e){status(e.name==='AbortError'?'Film cancelled':e.message);throw e;}finally{busy=false;ui();}
}
function ui(){for(const b of $('render-output-panel').querySelectorAll('[data-render-action]'))b.disabled=busy||playing;$('render-output-cancel').hidden=!busy;$('render-output-toggle').setAttribute('aria-expanded',String(opened));renderKeys();}
async function viewOutput(id){
 const row=await tx('readonly',s=>s.get(id));if(!row)return;
 const dialog=$('render-output-viewer'),host=$('render-output-viewer-media');for(const m of host.querySelectorAll('video'))m.pause();host.replaceChildren();const u=URL.createObjectURL(row.blob);urls.push(u);const media=document.createElement(row.type==='video'?'video':'img');media.src=u;if(row.type==='video')media.controls=true;else media.alt=row.title;host.append(media);$('render-output-viewer-title').textContent=row.title;
 $('render-output-download').onclick=()=>download(row.blob,row.title+'.'+row.extension);dialog.showModal();
}
async function renderLibrary(){
 const grid=$('archive-render-grid');if(!grid)return;const rows=await list();thumbUrls.forEach(URL.revokeObjectURL);thumbUrls=[];grid.replaceChildren();$('archive-render-empty').hidden=!!rows.length;$('render-output-count').textContent=rows.length+' outputs';
 for(const row of rows){const card=document.createElement('article');card.className='saved-model-card';card.dataset.renderId=row.id;const image=document.createElement('button');image.className='saved-model-image';const im=document.createElement('img'),u=URL.createObjectURL(row.preview);thumbUrls.push(u);im.src=u;im.alt=row.title;const badge=document.createElement('span');badge.textContent=row.type==='video'?'FILM / '+row.extension.toUpperCase():'RENDER / PNG';image.append(im,badge);image.onclick=()=>viewOutput(row.id);
  const meta=document.createElement('div');meta.className='saved-model-meta';const h=document.createElement('h3');h.textContent=row.title;const detail=document.createElement('p');detail.textContent=row.width+' x '+row.height+(row.duration?' / '+row.duration+' s':'');const actions=document.createElement('div');actions.className='saved-model-actions';
  for(const[name,fn]of [['Open',()=>viewOutput(row.id)],['Export',()=>download(row.blob,row.title+'.'+row.extension)],['Rename',async()=>{const title=window.prompt('Output name',row.title);if(title?.trim()){row.title=title.trim().slice(0,120);await tx('readwrite',s=>s.put(row));await renderLibrary();}}],['Delete',async()=>{await tx('readwrite',s=>s.delete(row.id));await renderLibrary();}]]){
   const b=document.createElement('button');b.type='button';b.textContent=name;b.onclick=()=>Promise.resolve(fn()).catch(e=>status(e.message));actions.append(b);}
  meta.append(h,detail,actions);card.append(image,meta);grid.append(card);
 }
}
function setup(){
 const toolbar=$('walk-toolbar'),button=document.createElement('button');button.id='render-output-toggle';button.textContent='Render / film';button.type='button';button.setAttribute('aria-expanded','false');button.disabled=!walk()?.state().ready;let checks=0;const readyTimer=setInterval(()=>{button.disabled=!walk()?.state().ready;if(!button.disabled||++checks>60)clearInterval(readyTimer);},250);toolbar.querySelector('.walk-controls').append(button);
 const panel=document.createElement('section');panel.id='render-output-panel';panel.className='render-output-panel';panel.hidden=true;
 panel.innerHTML='<header class="render-output-heading"><span>RENDER / CAMERA PATH</span><button id="render-output-close" type="button" aria-label="Close render panel">&#215;</button></header><label class="render-output-label">Output name<input id="render-output-name" value="Learning from Las Vegas" maxlength="120"></label><div class="render-output-fields"><label>Image size<select id="render-output-resolution"><option value="1920">1920 x 1080</option><option value="2560" selected>2560 x 1440</option><option value="3840">3840 x 2160 / 4K</option></select></label><button id="render-output-still" data-render-action type="button">Render image</button></div><details id="render-camera-editor"><summary>CAMERA PATH <span id="render-camera-count">0 camera views</span></summary><p class="render-output-note">Use eye-level view, move to a viewpoint, then add a camera. Edit film seconds and sunlight time for each view.</p><div class="render-output-actions"><button id="render-eye-view" data-render-action>Eye-level view</button><button id="render-camera-add" data-render-action>Add current camera +</button></div><p id="render-camera-empty" class="render-output-note">Add at least two camera views.</p><div id="render-camera-list"></div><label class="render-output-checkbox"><input id="render-path-smooth" type="checkbox" checked>Smooth camera path</label><div class="render-output-actions"><button id="render-path-play">Preview path</button><button id="render-path-save" data-render-action>Export path JSON</button><label class="render-path-import">Import path<input id="render-path-import" type="file" accept=".json" hidden></label></div><input id="render-path-scrub" type="range" min="0" max="1000" value="0" aria-label="Camera path position"><div class="render-output-fields"><label>Film size<select id="render-film-resolution"><option value="1280">1280 x 720</option><option value="1920" selected>1920 x 1080</option><option value="2560">2560 x 1440</option></select></label><label>Frames / s<select id="render-film-fps"><option>24</option><option>25</option><option>30</option><option>60</option></select></label></div><label class="render-output-checkbox"><input id="render-film-audio" type="checkbox" checked>Include exhibition audio</label><p class="render-output-note">Film sound follows nearby exhibits along the camera path, with distance and fades. PNG images are silent.</p><button id="render-path-export" class="primary-link" data-render-action>Render &amp; export film</button></details><div class="render-output-actions"><button id="render-output-cancel" hidden>Cancel export</button><span id="render-output-status" role="status"></span></div>';
 $('walk-surface').append(panel);
 const dialog=document.createElement('dialog');dialog.id='render-output-viewer';dialog.className='render-output-viewer';dialog.innerHTML='<header><h2 id="render-output-viewer-title"></h2><button id="render-output-viewer-close" aria-label="Close output">&#215;</button></header><div id="render-output-viewer-media"></div><button id="render-output-download">Export original</button>';document.body.append(dialog);
 const toggle=value=>{opened=value;panel.hidden=!value;if(value)walk()?.suspendNavigation();ui();};button.onclick=()=>toggle(!opened);$('render-output-close').onclick=()=>toggle(false);
 for(const name of ['pointerdown','wheel','keydown'])panel.addEventListener(name,e=>e.stopPropagation());
 $('render-output-still').onclick=()=>captureStill().catch(()=>{});$('render-output-cancel').onclick=()=>walk().output.cancel();
 $('render-eye-view').onclick=()=>walk().setViewMode('room');
 $('render-camera-add').onclick=()=>{if(walk().state().viewMode!=='room'){status('Switch to eye-level view to add a camera.');return;}keys.push({id:crypto.randomUUID(),time:keys.length?Math.max(...keys.map(k=>k.time))+5:0,pose:pose(),light:walk().lighting.state()});persist();renderKeys();};
 $('render-path-play').onclick=preview;$('render-path-export').onclick=()=>exportFilm().catch(()=>{});
 $('render-path-scrub').oninput=e=>{if(busy||playing||keys.length<2)return;const path=sorted();try{walk().setViewMode('room');apply(walk().sampleCameraPath(path,path.at(-1).time*Number(e.target.value)/1000,$('render-path-smooth').checked));}catch(err){status(err.message);}};
 $('render-path-save').onclick=()=>download(new Blob([JSON.stringify({format:'learning-vegas-camera-path',version:1,keys},null,2)],{type:'application/json'}),'learning-vegas-camera-path.json');
 $('render-path-import').onchange=async e=>{try{const f=e.target.files?.[0];if(!f||f.size>1000000)throw Error('Choose a camera path JSON under 1 MB.');const doc=JSON.parse(await f.text());if(doc.format!=='learning-vegas-camera-path')throw Error('Choose an exported camera path.');walk().sampleCameraPath(doc.keys,0);keys=doc.keys;persist();renderKeys();status('Camera path imported.');}catch(err){status(err.message);}finally{e.target.value='';}};
 $('render-output-viewer-close').onclick=()=>dialog.close();dialog.addEventListener('close',()=>{dialog.querySelector('video')?.pause();urls.forEach(URL.revokeObjectURL);urls=[];});
 renderKeys();renderLibrary().catch(e=>status(e.message));
}
setup();
window.ExhibitionOutput=Object.freeze({list,renderLibrary,captureStill,exportFilm,viewOutput,state:()=>({busy,playing,opened,keyframes:structuredClone(keys)}),setKeys:value=>{keys=structuredClone(value);persist();renderKeys();}});
window.addEventListener('pagehide',()=>{stopPreview();urls.forEach(URL.revokeObjectURL);thumbUrls.forEach(URL.revokeObjectURL);});
})();
