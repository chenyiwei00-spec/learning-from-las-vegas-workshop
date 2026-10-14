/* Independent photo-collage draft; shared real local TripoSR generator and model interactions. */
(()=>{
'use strict';
const $=id=>document.getElementById(id),canvas=$('exhibition-canvas'),paper=$('exhibition-paper'),ctx=canvas.getContext('2d'),assets=new Map(),images=new Map(),selection=new Set(),history=[],future=[];
const W=1000,H=1400,FORMAT='borrowed-worlds-exhibition-collage',DB='learning-vegas-exhibition-draft-v1';
let layers=[],tool='move',drag=null,clipboard=[],controller=null,preview=false,working=null,saveTimer=0,revision=0,loadTicket=0,photoPage=0,photoRows=[],selectedPhoto=null;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),copy=v=>structuredClone(v),text=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function message(s){$('exhibition-message').textContent=s;}
function database(){return new Promise((resolve,reject)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore('draft');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}
async function storage(mode,value){const db=await database();try{return await new Promise((resolve,reject)=>{const tx=db.transaction('draft',mode),s=tx.objectStore('draft'),r=mode==='readonly'?s.get('current'):s.put(value,'current');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}finally{db.close();}}
function documentValue(){const used=[...new Set(layers.map(l=>l.sourceId))];return {format:FORMAT,width:W,height:H,editingSurface:'sculpture',modelTarget:'city',background:'transparent',layers:copy(layers),assets:Object.fromEntries(used.map(id=>[id,assets.get(id)])),generatedModel:controller?.getRecord()||null};}
function persist(){if(preview)return;clearTimeout(saveTimer);saveTimer=setTimeout(()=>storage('readwrite',documentValue()).catch(()=>message('Draft storage is full. Export your collage before closing.')),350);}
function remember(){history.push(copy(layers));if(history.length>50)history.shift();future.length=0;}
function validLayer(l){return l&&typeof l.sourceId==='string'&&[l.x,l.y,l.w,l.h].every(Number.isFinite)&&l.w>0&&l.h>0;}
async function imageFor(id){if(images.has(id))return images.get(id);const src=assets.get(id)?.url;if(!src)throw Error('An image used in this collage is unavailable.');const img=new Image();img.decoding='async';img.src=src;await img.decode();images.set(id,img);return img;}
const bitmaps=new Map();
function bitmap(layer){const im=images.get(layer.sourceId);if(!im)return null;if(!layer.strokes?.length)return im;const key=layer.sourceId+JSON.stringify(layer.strokes),cached=bitmaps.get(layer.id);if(cached?.key===key)return cached.canvas;const c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;const g=c.getContext('2d');g.drawImage(im,0,0);g.globalCompositeOperation='destination-out';g.lineCap=g.lineJoin='round';for(const stroke of layer.strokes){g.lineWidth=stroke.radius*c.width;g.beginPath();stroke.points.forEach((p,i)=>i?g.lineTo(p.x*c.width,p.y*c.height):g.moveTo(p.x*c.width,p.y*c.height));if(stroke.points.length===1){const p=stroke.points[0];g.lineTo(p.x*c.width+.01,p.y*c.height);}g.stroke();}bitmaps.set(layer.id,{key,canvas:c});return c;}
function drawLayer(g,l){const im=bitmap(l);if(!im)return;g.save();g.translate(l.x,l.y);g.rotate((l.rotation||0)*Math.PI/180);g.scale(l.flipX?-1:1,l.flipY?-1:1);g.drawImage(im,-l.w/2,-l.h/2,l.w,l.h);g.restore();}
function drawModel(g,doc){g.clearRect(0,0,doc.width,doc.height);for(const l of doc.layers)drawLayer(g,l);}
function renderPreview(target){
 const g=target.getContext('2d');g.save();g.setTransform(target.width/W,0,0,target.height/H,0,0);
 drawModel(g,documentValue());g.globalCompositeOperation='destination-over';g.fillStyle='white';g.fillRect(0,0,W,H);g.restore();
}
function bounds(items=layers.filter(l=>selection.has(l.id))){if(!items.length)return null;const points=[];for(const l of items){const r=(l.rotation||0)*Math.PI/180,c=Math.cos(r),s=Math.sin(r);for(const x of [-l.w/2,l.w/2])for(const y of [-l.h/2,l.h/2])points.push({x:l.x+x*c-y*s,y:l.y+x*s+y*c});}const x=Math.min(...points.map(p=>p.x)),y=Math.min(...points.map(p=>p.y)),right=Math.max(...points.map(p=>p.x)),bottom=Math.max(...points.map(p=>p.y));return{x,y,w:right-x,h:bottom-y,cx:(x+right)/2,cy:(y+bottom)/2};}
function controlSize(){return Math.max(12,canvas.width/Math.max(100,canvas.getBoundingClientRect().width)*5);}
function render(){ctx.clearRect(0,0,W,H);ctx.fillStyle='white';ctx.fillRect(0,0,W,H);for(const l of layers)drawLayer(ctx,l);const b=bounds(),h=controlSize();if(b&&!preview){ctx.save();ctx.strokeStyle='#c3492c';ctx.lineWidth=h/5;ctx.strokeRect(b.x,b.y,b.w,b.h);ctx.fillStyle='white';ctx.fillRect(b.x+b.w-h,b.y+b.h-h,h*2,h*2);ctx.strokeRect(b.x+b.w-h,b.y+b.h-h,h*2,h*2);ctx.beginPath();ctx.moveTo(b.cx,b.y);ctx.lineTo(b.cx,b.y-h*3);ctx.stroke();ctx.beginPath();ctx.arc(b.cx,b.y-h*3,h,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.restore();}if(drag?.mode==='marquee'){ctx.save();ctx.strokeStyle='#c3492c';ctx.fillStyle='#c3492c15';ctx.setLineDash([8,5]);const dx=drag.at.x-drag.start.x,dy=drag.at.y-drag.start.y;ctx.fillRect(drag.start.x,drag.start.y,dx,dy);ctx.strokeRect(drag.start.x,drag.start.y,dx,dy);ctx.restore();}
 $('exhibition-drop-note').hidden=layers.length>0;$('exhibition-layer-count').textContent=String(layers.length);$('exhibition-undo').disabled=!history.length||preview;$('exhibition-redo').disabled=!future.length||preview;
 for(const id of ['exhibition-flip-x','exhibition-flip-y','exhibition-smaller','exhibition-larger','exhibition-delete','exhibition-rotation'])$(id).disabled=!selection.size||preview;
 $('exhibition-rotation').value=selection.size===1?Math.round(layers.find(l=>selection.has(l.id))?.rotation||0):0;
 $('exhibition-move').setAttribute('aria-pressed',String(tool==='move'));$('exhibition-erase').setAttribute('aria-pressed',String(tool==='erase'));paper.dataset.preview=String(preview);
 $('exhibition-layer-list').innerHTML=[...layers].reverse().map(l=>'<button data-layer="'+l.id+'" aria-pressed="'+selection.has(l.id)+'">'+text(assets.get(l.sourceId)?.title||'Photo')+'</button>').join('');
 window.dispatchEvent(new CustomEvent('exhibition-collage-change'));
}
function changed(){revision++;render();persist();controller?.changed(documentValue());}
function localPoint(p,l){const r=-(l.rotation||0)*Math.PI/180,dx=p.x-l.x,dy=p.y-l.y;return{x:(dx*Math.cos(r)-dy*Math.sin(r))*(l.flipX?-1:1),y:(dx*Math.sin(r)+dy*Math.cos(r))*(l.flipY?-1:1)};}
function point(e){const r=canvas.getBoundingClientRect(),scale=Math.min(r.width/W,r.height/H),ox=(r.width-W*scale)/2,oy=(r.height-H*scale)/2;return{x:(e.clientX-r.left-ox)/scale,y:(e.clientY-r.top-oy)/scale};}
function hit(p){return [...layers].reverse().find(l=>{const q=localPoint(p,l);return Math.abs(q.x)<l.w/2&&Math.abs(q.y)<l.h/2;});}
function leavePreview(){if(!preview)return;preview=false;layers=working.layers;selection.clear();working.selection.forEach(id=>selection.add(id));const captured=working.model;working=null;$('return-exhibition-work').hidden=true;render();controller.restoreCaptured(captured);controller.changed(documentValue());}
function prepareEdit(){if(preview)leavePreview();}
async function hash(s){return [...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(n=>n.toString(16).padStart(2,'0')).join('');}
async function addImage(url,title='Photo',id=null){
 prepareEdit();if(layers.length>=40)throw Error('A collage can hold up to forty photographs.');const key=id||await hash(url);assets.set(key,{url,title});const im=await imageFor(key);remember();const scale=Math.min(650/im.naturalWidth,900/im.naturalHeight);const l={id:crypto.randomUUID(),sourceId:key,objectId:key,vaPartId:'',x:W/2+(layers.length%4)*25,y:H/2+(layers.length%4)*25,w:im.naturalWidth*scale,h:im.naturalHeight*scale,rotation:0,flipX:false,flipY:false,strokes:[]};layers.push(l);selection.clear();selection.add(l.id);changed();message('Photo added. Drag to move; use the corner to scale and the upper handle to rotate.');return l.id;
}
async function addFiles(files){for(const f of [...files]){if(!/^image\/(png|jpeg|webp)$/.test(f.type)){message('Choose PNG, JPEG or WebP photos.');continue;}if(f.size>25*1024*1024){message('This photo is too large. Choose one smaller than 25 MB.');continue;}const url=URL.createObjectURL(f);try{const im=new Image();im.src=url;await im.decode();const c=document.createElement('canvas'),scale=Math.min(1,1600/Math.max(im.naturalWidth,im.naturalHeight));c.width=Math.round(im.naturalWidth*scale);c.height=Math.round(im.naturalHeight*scale);c.getContext('2d').drawImage(im,0,0,c.width,c.height);const data=c.toDataURL('image/webp',.94),total=[...new Set(layers.map(l=>l.sourceId))].reduce((n,id)=>n+(assets.get(id)?.url.startsWith('data:')?assets.get(id).url.length:0),0);if(total+data.length>8*1024*1024)throw Error('This draft already contains many uploaded photos. Remove unused images or start a new composition.');await addImage(data,f.name);}catch(e){message(e.message);}finally{URL.revokeObjectURL(url);}}}
function applyTransform(action){prepareEdit();if(!selection.size)return;remember();const items=layers.filter(l=>selection.has(l.id)),b=bounds(items);action(items,b);changed();}
function scaleItems(items,b,k){for(const l of items){l.x=b.cx+(l.x-b.cx)*k;l.y=b.cy+(l.y-b.cy)*k;l.w*=k;l.h*=k;}}
function rotateItems(items,b,degrees){const angle=degrees*Math.PI/180,c=Math.cos(angle),s=Math.sin(angle);for(const l of items){const x=l.x-b.cx,y=l.y-b.cy;l.x=b.cx+x*c-y*s;l.y=b.cy+x*s+y*c;l.rotation=(l.rotation||0)+degrees;}}
function eraseAt(p){const l=layers.find(l=>l.id===drag?.layerId);if(!l)return;const q=localPoint(p,l);drag.stroke.points.push({x:q.x/l.w+.5,y:q.y/l.h+.5});}
canvas.addEventListener('pointerdown',e=>{
 if(e.button!==0)return;prepareEdit();canvas.focus({preventScroll:true});e.preventDefault();const p=point(e),b=bounds(),size=controlSize();let found=hit(p),mode='move',copied=false;
 if(tool==='erase'){if(found){selection.clear();selection.add(found.id);remember();const stroke={radius:Number($('exhibition-brush').value)/found.w,points:[]};found.strokes.push(stroke);drag={mode:'erase',layerId:found.id,stroke,id:e.pointerId};eraseAt(p);}}
 else{
  if(b&&Math.abs(p.x-b.cx)<size*2&&Math.abs(p.y-(b.y-size*3))<size*2)mode='rotate';
  else if(b&&Math.abs(p.x-(b.x+b.w))<size*2&&Math.abs(p.y-(b.y+b.h))<size*2)mode='scale';
  else if(found){if(e.shiftKey){if(selection.has(found.id))selection.delete(found.id);else selection.add(found.id);}else if(!selection.has(found.id)){selection.clear();selection.add(found.id);}}
  else{if(!e.shiftKey)selection.clear();mode='marquee';}
  if(mode!=='marquee'&&e.altKey&&selection.size){remember();copied=true;const clones=layers.filter(l=>selection.has(l.id)).map(l=>({...copy(l),id:crypto.randomUUID()}));layers.push(...clones);selection.clear();clones.forEach(l=>selection.add(l.id));changed();}
  const bb=bounds();drag={id:e.pointerId,mode,start:p,at:p,initial:copy(layers),selection:[...selection],bounds:bb,started:copied,angle:bb?Math.atan2(p.y-bb.cy,p.x-bb.cx):0};
 }if(drag)canvas.setPointerCapture(e.pointerId);render();
});
canvas.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;const p=point(e);drag.at=p;if(drag.mode==='erase'){eraseAt(p);render();return;}const distance=Math.hypot(p.x-drag.start.x,p.y-drag.start.y);if(!drag.started&&distance<5)return;if(!drag.started&&drag.mode!=='marquee'){remember();drag.started=true;}
 if(drag.mode==='marquee'){render();return;}layers=copy(drag.initial);const items=layers.filter(l=>drag.selection.includes(l.id)),b=drag.bounds;if(!b)return;
 if(drag.mode==='move'){for(const l of items){l.x+=p.x-drag.start.x;l.y+=p.y-drag.start.y;}}
 else if(drag.mode==='scale'){const a=Math.hypot(drag.start.x-b.cx,drag.start.y-b.cy),k=clamp(Math.hypot(p.x-b.cx,p.y-b.cy)/Math.max(1,a),.05,8);scaleItems(items,b,k);}
 else if(drag.mode==='rotate'){const degrees=(Math.atan2(p.y-b.cy,p.x-b.cx)-drag.angle)*180/Math.PI;rotateItems(items,b,e.shiftKey?Math.round(degrees/15)*15:degrees);}
 render();
});
function finish(e){if(!drag||drag.id!==e.pointerId)return;if(drag.mode==='marquee'){const a=drag.start,b=drag.at,x0=Math.min(a.x,b.x),x1=Math.max(a.x,b.x),y0=Math.min(a.y,b.y),y1=Math.max(a.y,b.y);for(const l of layers){const lb=bounds([l]);if(lb.x<x1&&lb.x+lb.w>x0&&lb.y<y1&&lb.y+lb.h>y0)selection.add(l.id);}}drag=null;if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);changed();}
canvas.addEventListener('pointerup',finish);canvas.addEventListener('pointercancel',finish);
paper.addEventListener('dragover',e=>{e.preventDefault();paper.dataset.dragover='true';});paper.addEventListener('dragleave',()=>delete paper.dataset.dragover);
paper.addEventListener('drop',async e=>{e.preventDefault();delete paper.dataset.dragover;if(e.dataTransfer.files.length)return addFiles(e.dataTransfer.files);try{const id=e.dataTransfer.getData('application/x-archive-image');const item=window.ARCHIVE_DATA?.items.find(i=>i.id===id&&i.type==='image');if(item)await addImage(item.image,item.title,item.id);}catch(err){message(err.message);}});
$('exhibition-files').onchange=e=>{addFiles(e.target.files);e.target.value='';};
$('exhibition-move').onclick=()=>{tool='move';render();};$('exhibition-erase').onclick=()=>{tool='erase';render();};
function undo(){prepareEdit();if(history.length){future.push(copy(layers));layers=history.pop();selection.clear();changed();}}
function redo(){prepareEdit();if(future.length){history.push(copy(layers));layers=future.pop();selection.clear();changed();}}
$('exhibition-undo').onclick=undo;$('exhibition-redo').onclick=redo;
$('exhibition-smaller').onclick=()=>applyTransform((l,b)=>scaleItems(l,b,.9));$('exhibition-larger').onclick=()=>applyTransform((l,b)=>scaleItems(l,b,1.1));
$('exhibition-rotation').onchange=e=>{const value=Number(e.target.value)||0;applyTransform((items,b)=>rotateItems(items,b,items.length===1?value-(items[0].rotation||0):value));};
$('exhibition-flip-x').onclick=()=>applyTransform((items,b)=>{for(const l of items){l.x=2*b.cx-l.x;l.rotation=-(l.rotation||0);l.flipX=!l.flipX;}});
$('exhibition-flip-y').onclick=()=>applyTransform((items,b)=>{for(const l of items){l.y=2*b.cy-l.y;l.rotation=-(l.rotation||0);l.flipY=!l.flipY;}});
function remove(){prepareEdit();if(!selection.size)return;remember();layers=layers.filter(l=>!selection.has(l.id));selection.clear();changed();}
$('exhibition-delete').onclick=remove;
$('exhibition-clear').onclick=()=>{prepareEdit();if(layers.length)remember();layers=[];selection.clear();controller?.clear();changed();message('The collage and current 3D preview are clear. Saved models are kept.');};
$('exhibition-layer-list').onclick=e=>{const button=e.target.closest('[data-layer]');if(!button)return;selection.clear();selection.add(button.dataset.layer);render();canvas.focus({preventScroll:true});};
function pasteLayers(){prepareEdit();if(!clipboard.length)return;if(layers.length+clipboard.length>40)return message('A collage can hold up to forty photographs.');remember();const values=copy(clipboard).map(l=>({...l,id:crypto.randomUUID(),x:l.x+25,y:l.y+25}));layers.push(...values);selection.clear();values.forEach(l=>selection.add(l.id));changed();}
function reorder(up){applyTransform(()=>{if(up){for(let i=layers.length-2;i>=0;i--)if(selection.has(layers[i].id)&&!selection.has(layers[i+1].id))[layers[i],layers[i+1]]=[layers[i+1],layers[i]];}else for(let i=1;i<layers.length;i++)if(selection.has(layers[i].id)&&!selection.has(layers[i-1].id))[layers[i],layers[i-1]]=[layers[i-1],layers[i]];});}
document.addEventListener('keydown',e=>{if(e.target.closest('input,textarea,select')||$('exhibition-materials').open||!paper.contains(document.activeElement))return;const k=e.key.toLowerCase(),mod=e.ctrlKey||e.metaKey;if(mod&&k==='c'){e.preventDefault();clipboard=copy(layers.filter(l=>selection.has(l.id)));message('Selection copied. Ctrl V pastes another copy.');}else if(mod&&k==='v'&&clipboard.length){e.preventDefault();pasteLayers();}else if(mod&&k==='z'){e.preventDefault();e.shiftKey?redo():undo();}else if(mod&&(k===']'||k==='】')){e.preventDefault();reorder(true);}else if(mod&&(k==='['||k==='【')){e.preventDefault();reorder(false);}else if(k==='delete'||k==='backspace'){e.preventDefault();remove();}else if(mod&&k==='a'){e.preventDefault();layers.forEach(l=>selection.add(l.id));render();}else if(k==='v'&&!mod){tool='move';render();}else if(k==='e'&&!mod){tool='erase';render();}});
document.addEventListener('paste',e=>{if(e.target.closest('input,textarea')||!paper.contains(document.activeElement))return;if(e.clipboardData.files.length){e.preventDefault();addFiles(e.clipboardData.files);}});
$('exhibition-export').onclick=()=>{const c=document.createElement('canvas');c.width=W;c.height=H;drawModel(c.getContext('2d'),documentValue());c.toBlob(b=>SavedSculptures.download(b,'exhibition-collage.png'));};
function renderPhotos(){const q=$('exhibition-photo-query').value.trim().toLowerCase(),archive=$('exhibition-photo-archive').value;photoRows=(window.ARCHIVE_DATA?.items||[]).filter(i=>i.type==='image'&&(!archive||i.archiveKey===archive)&&(!q||[i.title,i.description,...(i.tags||[])].join(' ').toLowerCase().includes(q)));const pages=Math.max(1,Math.ceil(photoRows.length/12));photoPage=clamp(photoPage,0,pages-1);$('exhibition-photo-grid').innerHTML=photoRows.slice(photoPage*12,photoPage*12+12).map(i=>'<button class="exhibition-photo-card" draggable="true" data-photo="'+text(i.id)+'"><img src="'+text(i.thumbnail)+'" alt="" loading="lazy"><span>'+text(i.title)+'</span></button>').join('');$('exhibition-photo-page').textContent=(photoPage+1)+' / '+pages;$('exhibition-photo-prev').disabled=photoPage===0;$('exhibition-photo-next').disabled=photoPage===pages-1;}
$('exhibition-choose').onclick=()=>{renderPhotos();$('exhibition-materials').showModal();};$('exhibition-close-materials').onclick=()=>$('exhibition-materials').close();
$('exhibition-photo-query').oninput=()=>{photoPage=0;renderPhotos();};$('exhibition-photo-archive').onchange=()=>{photoPage=0;renderPhotos();};
$('exhibition-photo-prev').onclick=()=>{photoPage--;renderPhotos();};$('exhibition-photo-next').onclick=()=>{photoPage++;renderPhotos();};
$('exhibition-photo-grid').addEventListener('dragstart',e=>{const card=e.target.closest('[data-photo]');if(card)e.dataTransfer.setData('application/x-archive-image',card.dataset.photo);});
$('exhibition-photo-grid').onclick=async e=>{const card=e.target.closest('[data-photo]');if(!card)return;const item=photoRows.find(i=>i.id===card.dataset.photo);selectedPhoto=item.id;$('exhibition-materials').close();try{await addImage(item.image,item.title,item.id);}catch(err){message(err.message);}};
async function restoreDoc(doc){if(doc?.format!==FORMAT||!Array.isArray(doc.layers))return false;const ticket=++loadTicket;for(const [id,a]of Object.entries(doc.assets||{}))if(a?.url&&(a.url.startsWith('data:image/')||/^assets\//.test(a.url)))assets.set(id,a);await Promise.all([...new Set(doc.layers.map(l=>l.sourceId))].map(imageFor));if(ticket!==loadTicket)return false;layers=copy(doc.layers.filter(validLayer));selection.clear();render();return true;}
$('return-exhibition-work').onclick=leavePreview;
window.addEventListener('saved-sculpture-open',async e=>{if(!controller)return;try{const entry=await SavedSculptures.get(e.detail.id);if(!entry)return;if(!preview)working={layers:copy(layers),selection:[...selection],model:controller.capture()};preview=true;$('return-exhibition-work').hidden=false;const direction=e.detail.direction||0;
 if(direction){await controller.prepareSaved(entry,direction);await controller.transitionOut(direction);}
 const restored=await restoreDoc(entry.composition);if(!restored)message('This saved model comes from the original Collage Studio. Return to work to resume your photo collage.');
 await controller.openSaved(entry,direction);render();window.ExhibitionWorkspace?.openPanel('model');}catch(err){message(err.message);}});
window.addEventListener('saved-sculpture-next',async e=>{if(!preview)return;try{const entry=await SavedSculptures.get(e.detail.id);if(!entry)return;await controller.prepareSaved(entry,e.detail.direction);await controller.transitionOut(e.detail.direction);await restoreDoc(entry.composition);await controller.openSaved(entry,e.detail.direction);}catch(err){message(err.message);}});
async function start(){let stored=null;try{stored=await storage('readonly');await restoreDoc(stored);}catch(err){message('The previous draft could not load: '+err.message);}
 controller=await Sculpture3D.create({store:'learning-vegas-exhibition-model-v1',directCollage:true,getDocument:documentValue,getComposition:documentValue,drawModel,isPreview:()=>preview,message});if(stored?.generatedModel)await controller.restore(stored.generatedModel);render();
 window.ExhibitionStudio=Object.freeze({getDocument:documentValue,renderPreview,addImage,addFiles,select:ids=>{selection.clear();ids.forEach(id=>selection.add(id));render();},restore:async doc=>{prepareEdit();remember();await restoreDoc(doc);changed();},state:()=>({layers:layers.length,selected:[...selection],preview,model:controller.state()}),generate:()=>controller.generate(),clear:()=>$('exhibition-clear').click(),returnToWork:leavePreview});
 window.dispatchEvent(new CustomEvent('exhibition-studio-ready'));
}
start().catch(err=>{message('The workspace could not start: '+err.message);console.error(err);});
})();
