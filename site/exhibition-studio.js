/* Independent photo-collage draft; shared real local TripoSR generator and model interactions. */
(()=>{
'use strict';
const $=id=>document.getElementById(id),canvas=$('exhibition-canvas'),paper=$('exhibition-paper'),ctx=canvas.getContext('2d'),assets=new Map(),images=new Map(),selection=new Set(),history=[],future=[];
const W=1050,H=1400,FORMAT='borrowed-worlds-exhibition-collage',DB='learning-vegas-exhibition-draft-v1';
canvas.width=W;canvas.height=H;
let layers=[],tool='move',drag=null,clipboard=[],controller=null,preview=false,working=null,saveTimer=0,revision=0,loadTicket=0,agentPlan=null,counterparts=null,editingView='city',sourceSurface='city';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),copy=v=>structuredClone(v),text=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function message(s){$('exhibition-message').textContent=s;}
function database(){return new Promise((resolve,reject)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore('draft');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}
async function storage(mode,value){const db=await database();try{return await new Promise((resolve,reject)=>{const tx=db.transaction('draft',mode),s=tx.objectStore('draft'),r=mode==='readonly'?s.get('current'):s.put(value,'current');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}finally{db.close();}}
function documentValue(){const used=[...new Set(layers.map(l=>l.sourceId))];return {format:FORMAT,width:W,height:H,workflowVersion:2,sourceSurface,editingSurface:sourceSurface,modelTarget:sourceSurface==='city'?'sculpture':'city',viewSurface:editingView,background:'transparent',layers:copy(layers),assets:Object.fromEntries(used.map(id=>[id,assets.get(id)])),sculptureRecords:counterparts?.records(layers)||[],generatedModel:controller?.getRecord()||null,...(agentPlan?{agentPlan:copy(agentPlan)}:{})};}
function persist(){if(preview)return;clearTimeout(saveTimer);saveTimer=setTimeout(()=>storage('readwrite',documentValue()).catch(()=>message('Draft storage is full. Export your collage before closing.')),350);}
function remember(){history.push(copy(layers));if(history.length>50)history.shift();future.length=0;}
function validLayer(l){return l&&typeof l.sourceId==='string'&&[l.x,l.y,l.w,l.h].every(Number.isFinite)&&l.w>0&&l.h>0;}
async function imageFor(id){if(images.has(id))return images.get(id);const src=assets.get(id)?.url;if(!src)throw Error('An image used in this collage is unavailable.');const img=new Image();img.decoding='async';img.src=src;await img.decode();images.set(id,img);return img;}
const bitmaps=new Map();
function bitmap(layer){const im=images.get(layer.sourceId);if(!im)return null;const turn=layer.cityRotation===90;if(!layer.strokes?.length&&!turn)return im;const key=layer.sourceId+':'+turn+JSON.stringify(layer.strokes),cached=bitmaps.get(layer.id);if(cached?.key===key)return cached.canvas;const c=document.createElement('canvas');c.width=turn?im.naturalHeight:im.naturalWidth;c.height=turn?im.naturalWidth:im.naturalHeight;const g=c.getContext('2d');g.save();if(turn){g.translate(c.width,0);g.rotate(Math.PI/2);}g.drawImage(im,0,0);g.restore();g.globalCompositeOperation='destination-out';g.lineCap=g.lineJoin='round';for(const stroke of layer.strokes){g.lineWidth=stroke.radius*c.width;g.beginPath();stroke.points.forEach((p,i)=>i?g.lineTo(p.x*c.width,p.y*c.height):g.moveTo(p.x*c.width,p.y*c.height));if(stroke.points.length===1){const p=stroke.points[0];g.lineTo(p.x*c.width+.01,p.y*c.height);}g.stroke();}bitmaps.set(layer.id,{key,canvas:c});return c;}
function drawCityLayer(g,l){const im=bitmap(l);if(!im)return;g.save();g.translate(l.x,l.y);g.rotate((l.rotation||0)*Math.PI/180);g.scale(l.flipX?-1:1,l.flipY?-1:1);const k=Math.min(l.w/(im.naturalWidth||im.width),l.h/(im.naturalHeight||im.height)),w=(im.naturalWidth||im.width)*k,h=(im.naturalHeight||im.height)*k;g.drawImage(im,-w/2,-h/2,w,h);g.restore();}
function drawLayer(g,l,surface=editingView){if(surface==='sculpture')counterparts?.drawLayer(g,l);else drawCityLayer(g,l);}
function drawModel(g,doc){if(doc.modelTarget==='city'){drawCityDocument(g,doc);return;}if(!counterparts||doc.layers.some(l=>!counterparts.raster(l)))throw Error('The V&A counterparts are not ready. Check the sculpture collage first.');counterparts.drawDocument(g,doc);}
function drawCityDocument(g,doc){g.clearRect(0,0,doc.width,doc.height);for(const l of doc.layers)drawCityLayer(g,l);}
function cityInfo(l,prepared=null){const p=prepared?.find(p=>p.key===l.sourceId);return {object:window.ExhibitionPicker?.object(l.sourceId)||{name:assets.get(l.sourceId)?.title,bbox:[0,0,l.w,l.h]},image:p?.image||images.get(l.sourceId)};}
function setSurface(value){if(!['city','sculpture'].includes(value))return;editingView=value;render();persist();}
function renderMapping(){
 if(!counterparts)return;const active=selection.size===1?layers.find(l=>selection.has(l.id)):null,part=active&&counterparts.part(active.vaPartId);
 $('exhibition-choose-city-counterpart').disabled=!active||preview;$('exhibition-counterpart').disabled=!active||preview;$('exhibition-counterpart').value=part?.id||'';
 for(const id of ['exhibition-rematch','exhibition-part-turn'])$(id).disabled=!part||preview;
 $('exhibition-pair-images').hidden=!part;$('exhibition-pair-hint').textContent=part?(active.vaMatchReason||'Matched outline')+' / '+part.kind+(active.vaRotation===90?' / turned 90 degrees':''):'Select one layer to see or change its V&A counterpart.';
 if(part){$('exhibition-pair-city').src=assets.get(active.sourceId)?.url||'';$('exhibition-pair-va').src=part.url;$('exhibition-pair-city-name').textContent=assets.get(active.sourceId)?.title||'Las Vegas object';$('exhibition-pair-va-name').textContent=part.name;}
 $('exhibition-canvas').setAttribute('aria-label',editingView==='sculpture'?'V&A sculpture collage. Edit linked fragments; Ctrl C and Ctrl V copy and paste.':'Las Vegas collage. Edit linked fragments; Ctrl C and Ctrl V copy and paste.');
}

function renderPreview(target,surface='city'){
 const g=target.getContext('2d');g.save();g.setTransform(target.width/W,0,0,target.height/H,0,0);
 if(surface==='sculpture')counterparts?.drawDocument(g,documentValue());else drawCityDocument(g,documentValue());g.globalCompositeOperation='destination-over';g.fillStyle='white';g.fillRect(0,0,W,H);g.restore();
}
function bounds(items=layers.filter(l=>selection.has(l.id))){if(!items.length)return null;const points=[];for(const l of items){const r=(l.rotation||0)*Math.PI/180,c=Math.cos(r),s=Math.sin(r);for(const x of [-l.w/2,l.w/2])for(const y of [-l.h/2,l.h/2])points.push({x:l.x+x*c-y*s,y:l.y+x*s+y*c});}const x=Math.min(...points.map(p=>p.x)),y=Math.min(...points.map(p=>p.y)),right=Math.max(...points.map(p=>p.x)),bottom=Math.max(...points.map(p=>p.y));return{x,y,w:right-x,h:bottom-y,cx:(x+right)/2,cy:(y+bottom)/2};}
function controlSize(){return Math.max(12,canvas.width/Math.max(100,canvas.getBoundingClientRect().width)*5);}
function render(){ctx.clearRect(0,0,W,H);ctx.fillStyle='white';ctx.fillRect(0,0,W,H);for(const l of layers)drawLayer(ctx,l);const b=bounds(),h=controlSize();if(b&&!preview){ctx.save();ctx.strokeStyle='#c3492c';ctx.lineWidth=h/5;ctx.strokeRect(b.x,b.y,b.w,b.h);ctx.fillStyle='white';ctx.fillRect(b.x+b.w-h,b.y+b.h-h,h*2,h*2);ctx.strokeRect(b.x+b.w-h,b.y+b.h-h,h*2,h*2);ctx.beginPath();ctx.moveTo(b.cx,b.y);ctx.lineTo(b.cx,b.y-h*3);ctx.stroke();ctx.beginPath();ctx.arc(b.cx,b.y-h*3,h,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.restore();}if(drag?.mode==='marquee'){ctx.save();ctx.strokeStyle='#c3492c';ctx.fillStyle='#c3492c15';ctx.setLineDash([8,5]);const dx=drag.at.x-drag.start.x,dy=drag.at.y-drag.start.y;ctx.fillRect(drag.start.x,drag.start.y,dx,dy);ctx.strokeRect(drag.start.x,drag.start.y,dx,dy);ctx.restore();}
 $('exhibition-drop-note').hidden=layers.length>0;$('exhibition-layer-count').textContent=String(layers.length);$('exhibition-undo').disabled=!history.length||preview;$('exhibition-redo').disabled=!future.length||preview;
 for(const id of ['exhibition-flip-x','exhibition-flip-y','exhibition-smaller','exhibition-larger','exhibition-delete','exhibition-rotation'])$(id).disabled=!selection.size||preview;
 $('exhibition-rotation').value=selection.size===1?Math.round(layers.find(l=>selection.has(l.id))?.rotation||0):0;
 $('exhibition-move').setAttribute('aria-pressed',String(tool==='move'));$('exhibition-erase').setAttribute('aria-pressed',String(tool==='erase'));paper.dataset.preview=String(preview);
 $('exhibition-layer-list').innerHTML=[...layers].reverse().map(l=>'<button data-layer="'+l.id+'" aria-pressed="'+selection.has(l.id)+'">'+text((assets.get(l.sourceId)?.title||'Photo')+' / '+(counterparts?.part(l.vaPartId)?.kind||'V&A'))+'</button>').join('');
 renderMapping();$('exhibition-swap-direction').textContent=sourceSurface==='city'?'Las Vegas \u2192 V&A':'V&A \u2192 Las Vegas';$('exhibition-swap-direction').setAttribute('aria-pressed',String(sourceSurface==='sculpture'));$('exhibition-choose').textContent=sourceSurface==='sculpture'?'V&A fragments':'Las Vegas objects';$('exhibition-choose-city-counterpart').hidden=sourceSurface!=='sculpture';window.dispatchEvent(new CustomEvent('exhibition-collage-change'));
}
function changed(){revision++;render();persist();controller?.changed(documentValue());}
function localPoint(p,l){const r=-(l.rotation||0)*Math.PI/180,dx=p.x-l.x,dy=p.y-l.y;return{x:(dx*Math.cos(r)-dy*Math.sin(r))*(l.flipX?-1:1),y:(dx*Math.sin(r)+dy*Math.cos(r))*(l.flipY?-1:1)};}
function point(e){const r=canvas.getBoundingClientRect(),scale=Math.min(r.width/W,r.height/H),ox=(r.width-W*scale)/2,oy=(r.height-H*scale)/2;return{x:(e.clientX-r.left-ox)/scale,y:(e.clientY-r.top-oy)/scale};}
function hit(p){return [...layers].reverse().find(l=>{const q=localPoint(p,l);return editingView==='sculpture'?counterparts?.hit(l,q):Math.abs(q.x)<l.w/2&&Math.abs(q.y)<l.h/2;});}
async function leavePreview(){if(!preview)return;preview=false;layers=working.layers;selection.clear();working.selection.forEach(id=>selection.add(id));agentPlan=working.agentPlan||null;sourceSurface=working.sourceSurface||'city';editingView=working.editingView||'city';const captured=working.model;working=null;$('return-exhibition-work').hidden=true;render();await controller.restoreCaptured(captured);await controller.changed(documentValue());}
function prepareEdit(){if(preview)leavePreview();}
async function hash(s){return [...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(n=>n.toString(16).padStart(2,'0')).join('');}
async function addImage(url,title='Photo',id=null){
 prepareEdit();if(layers.length>=40)throw Error('A collage can hold up to forty objects.');const key=id||await hash(url);assets.set(key,{url,title});const im=await imageFor(key);const scale=Math.min(650/im.naturalWidth,900/im.naturalHeight);const l={id:crypto.randomUUID(),sourceId:key,objectId:key,vaPartId:'',x:W/2+(layers.length%4)*25,y:H/2+(layers.length%4)*25,w:im.naturalWidth*scale,h:im.naturalHeight*scale,rotation:0,flipX:false,flipY:false,strokes:[]};await counterparts.prepare([l],layer=>cityInfo(layer),[...layers,l]);remember();layers.push(l);selection.clear();selection.add(l.id);changed();message('Object linked to a V&A fragment. Drag to move; use the corner to scale and the upper handle to rotate.');return l.id;
}
async function addCutout(object){
 const known=window.ExhibitionPicker?.object(object?.key);
 if(!known||known.url!==object.url)throw Error('Choose an isolated object from the Las Vegas archive.');
 return addImage(known.url,known.name,known.key);
}
function recommendCity(partId,excludeId=null,excluded=new Set()){return counterparts.recommendCity(partId,ExhibitionPicker.objects(),layers,excludeId,excluded);}
async function addSculpturePart(partId){await leavePreview();if(layers.length>=40)throw Error('A collage can hold up to forty objects.');await ExhibitionPicker.load();const part=counterparts.part(partId);if(!part)throw Error('Choose a V&A fragment.');await counterparts.load(partId);const match=recommendCity(partId),known=ExhibitionPicker.object(match.key);assets.set(known.key,{url:known.url,title:known.name});await imageFor(known.key);const k=Math.min(500/part.width,850/part.height),l={id:crypto.randomUUID(),sourceId:known.key,objectId:known.key,vaPartId:partId,vaRotation:0,cityRotation:match.cityRotation,basis:'sculpture',x:W/2,y:H/2,w:part.width*k,h:part.height*k,rotation:0,flipX:false,flipY:false,strokes:[]};remember();layers.push(l);selection.clear();selection.add(l.id);changed();return l.id;}
async function replaceCity(id,key,turn=0){const l=layers.find(l=>l.id===id),o=ExhibitionPicker.object(key);if(!l||!o)return;assets.set(key,{url:o.url,title:o.name});await imageFor(key);if(!layers.includes(l))return;remember();l.sourceId=key;l.objectId=key;l.cityRotation=turn;l.basis='sculpture';changed();}
function swapDirection(){if(preview||controller?.state().busy||window.ExhibitionAgent?.state().busy)return;sourceSurface=sourceSurface==='city'?'sculpture':'city';editingView=sourceSurface;changed();window.ExhibitionWorkspace?.openPanel(sourceSurface==='city'?'collage':'sculpture');}
function applyTransform(action){prepareEdit();if(!selection.size)return;remember();const items=layers.filter(l=>selection.has(l.id)),b=bounds(items);action(items,b);changed();}
function scaleItems(items,b,k){for(const l of items){l.x=b.cx+(l.x-b.cx)*k;l.y=b.cy+(l.y-b.cy)*k;l.w*=k;l.h*=k;}}
function rotateItems(items,b,degrees){const angle=degrees*Math.PI/180,c=Math.cos(angle),s=Math.sin(angle);for(const l of items){const x=l.x-b.cx,y=l.y-b.cy;l.x=b.cx+x*c-y*s;l.y=b.cy+x*s+y*c;l.rotation=(l.rotation||0)+degrees;}}
function visibleSize(l){const c=editingView==='sculpture'?counterparts.raster(l):bitmap(l);if(!c)return {w:l.w,h:l.h};const s=Math.min(l.w/c.width,l.h/c.height);return {w:c.width*s,h:c.height*s};}
function eraseAt(p){const l=layers.find(l=>l.id===drag?.layerId);if(!l)return;const q=localPoint(p,l),size=visibleSize(l);drag.stroke.points.push({x:q.x/size.w+.5,y:q.y/size.h+.5});}
canvas.addEventListener('pointerdown',e=>{
 if(e.button!==0)return;prepareEdit();canvas.focus({preventScroll:true});e.preventDefault();const p=point(e),b=bounds(),size=controlSize();let found=hit(p),mode='move',copied=false;
 if(tool==='erase'){if(found){selection.clear();selection.add(found.id);remember();const stroke={radius:Number($('exhibition-brush').value)/visibleSize(found).w,points:[]};found.strokes.push(stroke);drag={mode:'erase',layerId:found.id,stroke,id:e.pointerId};eraseAt(p);}}
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
paper.addEventListener('drop',async e=>{e.preventDefault();delete paper.dataset.dragover;try{const key=e.dataTransfer.getData('application/x-borrowed-worlds-asset');const o=window.ExhibitionPicker?.object(key);if(o)await addCutout(o);else message('Choose a Las Vegas object and copy its cutout first.');}catch(err){message(err.message);}});

$('exhibition-move').onclick=()=>{tool='move';render();};$('exhibition-erase').onclick=()=>{tool='erase';render();};
async function prepareHistory(){await Promise.all([...new Set(layers.map(l=>l.sourceId))].map(imageFor));await counterparts.prepare(layers,l=>cityInfo(l));}
async function undo(){await leavePreview();if(history.length){future.push(copy(layers));layers=history.pop();await prepareHistory();selection.clear();changed();}}
async function redo(){await leavePreview();if(future.length){history.push(copy(layers));layers=future.pop();await prepareHistory();selection.clear();changed();}}
function releaseUnused(){const sources=new Set(layers.map(l=>l.sourceId)),ids=new Set(layers.map(l=>l.id));for(const id of images.keys())if(!sources.has(id))images.delete(id);for(const id of bitmaps.keys())if(!ids.has(id))bitmaps.delete(id);counterparts.prune(layers);}
$('exhibition-undo').onclick=undo;$('exhibition-redo').onclick=redo;
$('exhibition-smaller').onclick=()=>applyTransform((l,b)=>scaleItems(l,b,.9));$('exhibition-larger').onclick=()=>applyTransform((l,b)=>scaleItems(l,b,1.1));
$('exhibition-rotation').onchange=e=>{const value=Number(e.target.value)||0;applyTransform((items,b)=>rotateItems(items,b,items.length===1?value-(items[0].rotation||0):value));};
$('exhibition-flip-x').onclick=()=>applyTransform((items,b)=>{for(const l of items){l.x=2*b.cx-l.x;l.rotation=-(l.rotation||0);l.flipX=!l.flipX;}});
$('exhibition-flip-y').onclick=()=>applyTransform((items,b)=>{for(const l of items){l.y=2*b.cy-l.y;l.rotation=-(l.rotation||0);l.flipY=!l.flipY;}});
function remove(){prepareEdit();if(!selection.size)return;remember();layers=layers.filter(l=>!selection.has(l.id));selection.clear();changed();}
$('exhibition-delete').onclick=remove;
$('exhibition-clear').onclick=()=>{prepareEdit();if(layers.length)remember();layers=[];agentPlan=null;selection.clear();controller?.clear();changed();message('The collage and current 3D preview are clear. Saved models are kept.');};
$('exhibition-layer-list').onclick=e=>{const button=e.target.closest('[data-layer]');if(!button)return;selection.clear();selection.add(button.dataset.layer);render();canvas.focus({preventScroll:true});};
function pasteLayers(){prepareEdit();if(!clipboard.length)return;if(layers.length+clipboard.length>40)return message('A collage can hold up to forty objects.');remember();const values=copy(clipboard).map(l=>({...l,id:crypto.randomUUID(),x:l.x+25,y:l.y+25}));layers.push(...values);selection.clear();values.forEach(l=>selection.add(l.id));changed();}
function reorder(up){applyTransform(()=>{if(up){for(let i=layers.length-2;i>=0;i--)if(selection.has(layers[i].id)&&!selection.has(layers[i+1].id))[layers[i],layers[i+1]]=[layers[i+1],layers[i]];}else for(let i=1;i<layers.length;i++)if(selection.has(layers[i].id)&&!selection.has(layers[i-1].id))[layers[i],layers[i-1]]=[layers[i-1],layers[i]];});}
document.addEventListener('keydown',e=>{if(e.target.closest('input,textarea,select,[contenteditable=true]')||$('exhibition-materials').open||(!paper.contains(document.activeElement)&&!(e.key.toLowerCase()==='z'&&(e.ctrlKey||e.metaKey)&&ExhibitionWorkspace.state().panel==='collage')))return;const k=e.key.toLowerCase(),mod=e.ctrlKey||e.metaKey;if(mod&&k==='c'){e.preventDefault();clipboard=copy(layers.filter(l=>selection.has(l.id)));message('Selection copied. Ctrl V pastes another copy.');}else if(mod&&k==='v'&&clipboard.length){e.preventDefault();pasteLayers();}else if(mod&&k==='z'){e.preventDefault();e.shiftKey?redo():undo();}else if(mod&&(k===']'||k==='】')){e.preventDefault();reorder(true);}else if(mod&&(k==='['||k==='【')){e.preventDefault();reorder(false);}else if(k==='delete'||k==='backspace'){e.preventDefault();remove();}else if(mod&&k==='a'){e.preventDefault();layers.forEach(l=>selection.add(l.id));render();}else if(k==='v'&&!mod){tool='move';render();}else if(k==='e'&&!mod){tool='erase';render();}});

$('exhibition-export').onclick=()=>{const c=document.createElement('canvas');c.width=W;c.height=H;(editingView==='sculpture'?counterparts.drawDocument:drawCityDocument)(c.getContext('2d'),documentValue());c.toBlob(b=>SavedSculptures.download(b,editingView==='sculpture'?'exhibition-va-sculpture.png':'exhibition-las-vegas.png'));};
async function restoreDoc(doc){if(doc?.format!==FORMAT||!Array.isArray(doc.layers))return false;const ticket=++loadTicket;for(const [id,a]of Object.entries(doc.assets||{}))if(a?.url&&(a.url.startsWith('data:image/')||/^assets\//.test(a.url)||/^\/collage-objects\//.test(a.url)))assets.set(id,a);await Promise.all([...new Set(doc.layers.map(l=>l.sourceId))].map(imageFor));if(ticket!==loadTicket)return false;const restoredLayers=copy(doc.layers.filter(validLayer));if(doc.width&&doc.width!==W){const k=W/doc.width;restoredLayers.forEach(l=>{l.x*=k;l.w*=k;});}await counterparts.prepare(restoredLayers,l=>cityInfo(l));if(ticket!==loadTicket)return false;layers=restoredLayers;sourceSurface=doc.sourceSurface||(doc.sculptureRecords?.length&&doc.editingSurface==='sculpture'?'sculpture':'city');editingView=doc.viewSurface==='sculpture'?'sculpture':'city';agentPlan=doc.agentPlan?copy(doc.agentPlan):null;selection.clear();render();return true;}
function captureDraft(){return {document:documentValue(),model:controller.capture(),selection:[...selection]};}
async function restoreDraft(snapshot){
 if(!snapshot?.document)throw Error('The previous collage is unavailable.');await leavePreview();
 remember();await restoreDoc(snapshot.document);await controller.changed(documentValue());await controller.restoreCaptured(snapshot.model);
 selection.clear();snapshot.selection.forEach(id=>{if(layers.some(l=>l.id===id))selection.add(id);});await controller.changed(documentValue());persist();render();
}
function fitAgentComposition(){
 // Fit actual target alpha, including linked sculpture proportions, into a generous 3:4 frame.
 const probe=document.createElement('canvas');probe.width=105;probe.height=140;const g=probe.getContext('2d');g.scale(.1,.1);drawModel(g,documentValue());const pixels=g.getImageData(0,0,105,140).data;let x0=105,y0=140,x1=0,y1=0;for(let y=0;y<140;y++)for(let x=0;x<105;x++)if(pixels[(y*105+x)*4+3]>40){x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y);}if(x1<=x0||y1<=y0)return;
 const b={cx:(x0+x1)*5,cy:(y0+y1)*5,w:(x1-x0+1)*10,h:(y1-y0+1)*10},k=Math.min(950/b.w,1280/b.h);for(const l of layers){l.x=W/2+(l.x-b.cx)*k;l.y=H/2+(l.y-b.cy)*k;l.w*=k;l.h*=k;}
}
function exportAgentPreview(){const c=document.createElement('canvas');c.width=270;c.height=360;const g=c.getContext('2d');g.scale(c.width/W,c.height/H);drawModel(g,documentValue());g.globalCompositeOperation='destination-over';g.fillStyle='white';g.fillRect(0,0,W,H);return new Promise(r=>c.toBlob(r,'image/png'));}
async function applyAgentPlan(plan){
 await leavePreview();if(controller.state().busy)throw Error('Wait for the current model to finish first.');
 if(!Array.isArray(plan?.pieces)||plan.pieces.length<5||plan.pieces.length>10)throw Error('Choose five to ten isolated objects.');
 const version=revision,prepared=await Promise.all(plan.pieces.map(async piece=>{
  const match=piece.partId?(piece.key&&ExhibitionPicker.object(piece.key)?{key:piece.key,cityRotation:piece.cityRotation||0}:recommendCity(piece.partId)):null,known=ExhibitionPicker.object(match?.key||piece.key);if(!known)throw Error('The planned object is not in the archive.');
  const im=new Image();im.decoding='async';im.src=known.url;await im.decode();
  if(im.naturalWidth<24||im.naturalHeight<24)throw Error('A selected cutout is too small.');
  const part=piece.partId&&counterparts.part(piece.partId);if(part)await counterparts.load(part.id);const scale=Math.min(piece.boxW/(part?.width||im.naturalWidth),piece.boxH/(part?.height||im.naturalHeight));
  return {key:known.key,asset:{url:known.url,title:known.name},image:im,layer:{id:crypto.randomUUID(),sourceId:known.key,objectId:known.key,vaPartId:part?.id||'',vaRotation:0,cityRotation:match?.cityRotation||0,basis:part?'sculpture':'city',x:piece.x,y:piece.y,w:(part?.width||im.naturalWidth)*scale,h:(part?.height||im.naturalHeight)*scale,rotation:piece.rotation||0,flipX:!!piece.flipX,flipY:false,strokes:[]}};
 }));
 if(version!==revision)throw Error('The collage changed while selecting objects. Click Compose + generate again.');
 window.dispatchEvent(new Event('exhibition-counterparts-preparing'));await counterparts.prepare(prepared.map(p=>p.layer),l=>cityInfo(l,prepared),prepared.map(p=>p.layer),plan.sourceSurface==='city'?'light':null);
 if(version!==revision)throw Error('The collage changed while matching V&A counterparts.');
 const previous=captureDraft();remember();controller.clear();
 for(const p of prepared){assets.set(p.key,p.asset);images.set(p.key,p.image);}layers=prepared.map(p=>p.layer);sourceSurface=plan.sourceSurface||sourceSurface;fitAgentComposition();agentPlan=copy(plan);agentPlan.pieces=agentPlan.pieces.map((p,i)=>({...p,vaPartId:layers[i].vaPartId,vaRotation:layers[i].vaRotation}));selection.clear();sourceSurface=plan.sourceSurface||sourceSurface;editingView=sourceSurface;revision++;
 render();persist();await controller.changed(documentValue());message(plan.title+' / '+layers.length+' editable objects.');return previous;
}
$('exhibition-counterpart').onchange=async e=>{const l=selection.size===1&&layers.find(l=>selection.has(l.id)),part=counterparts?.part(e.target.value);if(!l||!part||preview)return;try{await counterparts.load(part.id);let matched=null;if(sourceSurface==='sculpture'){await ExhibitionPicker.load();const probe={...l,vaPartId:part.id,vaRotation:0};matched=counterparts.recommendCity(part.id,ExhibitionPicker.objects(),layers.map(old=>old.id===l.id?probe:old),l.id);const o=ExhibitionPicker.object(matched.key);assets.set(o.key,{url:o.url,title:o.name});await imageFor(o.key);}if(!layers.includes(l))return;remember();l.vaPartId=part.id;l.vaRotation=0;if(matched){l.sourceId=matched.key;l.objectId=matched.key;l.cityRotation=matched.cityRotation;l.basis='sculpture';}l.vaMatchReason='Chosen counterpart';changed();}catch(err){message(err.message);renderMapping();}};
$('exhibition-rematch').onclick=async()=>{const l=selection.size===1&&layers.find(l=>selection.has(l.id));if(!l||preview)return;if(sourceSurface==='sculpture'){try{await ExhibitionPicker.load();const match=recommendCity(l.vaPartId,l.id);await replaceCity(l.id,match.key,match.cityRotation);}catch(err){message(err.message);}return;}try{const next={...copy(l),vaPartId:''};await counterparts.prepare([next],v=>cityInfo(v),layers.map(old=>old.id===next.id?next:old));remember();Object.assign(l,next);changed();}catch(err){message(err.message);}};
$('exhibition-part-turn').onclick=()=>{const l=selection.size===1&&layers.find(l=>selection.has(l.id));if(!l||preview)return;remember();if(sourceSurface==='sculpture')l.cityRotation=l.cityRotation===90?0:90;else l.vaRotation=l.vaRotation===90?0:90;changed();};
$('exhibition-swap-direction').onclick=swapDirection;$('exhibition-choose-city-counterpart').onclick=()=>ExhibitionPicker.open('counterpart');
$('return-exhibition-work').onclick=leavePreview;
window.addEventListener('saved-sculpture-open',async e=>{if(!controller||window.ExhibitionAgent?.state().busy)return;try{const entry=await (window.ExhibitionBrowse?ExhibitionBrowse.resolve(e.detail.id):SavedSculptures.get(e.detail.id));if(!entry)return;if(!preview)working={layers:copy(layers),selection:[...selection],model:controller.capture(),agentPlan:copy(agentPlan),editingView,sourceSurface};preview=true;$('return-exhibition-work').hidden=false;const direction=e.detail.direction||0;
 if(direction){await controller.prepareSaved(entry,direction);await controller.transitionOut(direction);}
 const restored=await restoreDoc(entry.composition);if(!restored)message('This saved model comes from the original Collage Studio. Return to work to resume your photo collage.');
 await controller.openSaved(entry,direction);render();if(window.ExhibitionBrowse)ExhibitionBrowse.open();else window.ExhibitionWorkspace?.openPanel('model');}catch(err){message(err.message);}});
window.addEventListener('saved-sculpture-next',async e=>{if(!preview||window.ExhibitionAgent?.state().busy)return;try{const entry=await (window.ExhibitionBrowse?ExhibitionBrowse.resolve(e.detail.id):SavedSculptures.get(e.detail.id));if(!entry)return;await controller.prepareSaved(entry,e.detail.direction);await controller.transitionOut(e.detail.direction);await restoreDoc(entry.composition);await controller.openSaved(entry,e.detail.direction);}catch(err){message(err.message);}});
async function start(){counterparts=await ExhibitionCounterparts.create();
 const kinds=[...new Set(counterparts.parts.map(p=>p.kind))];$('exhibition-counterpart').innerHTML='<option value="">Select a layer first</option>'+kinds.map(kind=>'<optgroup label="'+text(kind)+'">'+counterparts.parts.filter(p=>p.kind===kind).map(p=>'<option value="'+text(p.id)+'">'+text(p.name)+'</option>').join('')+'</optgroup>').join('');
 let stored=null;try{stored=await storage('readonly');await restoreDoc(stored);}catch(err){message('The previous draft could not load: '+err.message);}
 controller=await Sculpture3D.create({store:'learning-vegas-exhibition-model-v1',directCollage:true,archivePresentation:true,associateMedia:doc=>ExhibitionMedia.associate(doc),onModelState:state=>ExhibitionMedia.onState(state),getDocument:documentValue,getComposition:documentValue,drawModel,isPreview:()=>preview,message,browseEntries:()=>window.ExhibitionBrowse?.entries()||SavedSculptures.list()});if(stored?.generatedModel)await controller.restore(stored.generatedModel);render();
 window.ExhibitionStudio=Object.freeze({getDocument:documentValue,undo,redo,exportAgentPreview,releaseUnused,sculptureParts:()=>counterparts.parts,recommendVividCity:async(id,excluded)=>{const candidates=[],skip=new Set(excluded);for(let i=0;i<5;i++){try{const match=counterparts.recommendCity(id,ExhibitionPicker.objects(),layers,null,skip),o=ExhibitionPicker.object(match.key);candidates.push({...match,url:o.url});skip.add(match.key);}catch{break;}}return ExhibitionColourPreference.pick(candidates,'vivid');},recommendCity,addSculpturePart,replaceCity,swapDirection,drawModel,drawCityDocument,setSurface,counterpartState:()=>counterparts.state(),captureDraft,restoreDraft,applyAgentPlan,prepareAgent:leavePreview,captureModel:()=>controller.capture(),renderPreview,addCutout,select:ids=>{selection.clear();ids.forEach(id=>selection.add(id));render();},restore:async doc=>{prepareEdit();remember();await restoreDoc(doc);changed();},state:()=>({layers:layers.length,selected:[...selection],preview,editingView,sourceSurface,linkedFragments:layers.filter(l=>!!l.vaPartId).length,model:controller.state()}),generate:()=>controller.generate(),clear:()=>$('exhibition-clear').click(),returnToWork:leavePreview});
 window.dispatchEvent(new CustomEvent('exhibition-studio-ready'));
}
start().catch(err=>{message('The workspace could not start: '+err.message);console.error(err);});
})();
