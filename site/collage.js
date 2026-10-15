(async () => {
'use strict';
const $=id=>document.getElementById(id),W=1000,H=1400;
const all=window.ARCHIVE_DATA?.items||[];
const subjects=i=>(i.elements||[]).some(e=>['Buildings','Signs & logos','Advertising installations'].includes(e));
const related=i=>['architecture','advertisement'].includes(i.collectionKey)||/\b(?:las vegas|vegas|nevada|fremont)\b/i.test([i.title,i.description,i.location,...(i.tags||[])].join(' '));
const eligible=all.filter(i=>i.type==='image'&&(i.archiveKey||'las-vegas')==='las-vegas'&&subjects(i)&&related(i));
const objectIndex=await fetch('collage-objects.json').then(r=>{if(!r.ok)throw Error('Object library could not load.');return r.json();});
const photoObjects=objectIndex.photos,objectMap=new Map(Object.values(photoObjects).flatMap(p=>p.objects).map(o=>[o.key,o]));
const materials=eligible.filter(i=>photoObjects[i.id]),itemMap=new Map(eligible.map(i=>[i.id,i])),searchIndex=ArchiveSearch.createIndex(materials);
const keyFor=l=>l.objectId?l.sourceId+'::'+l.objectId:l.sourceId;
const objectFor=l=>objectMap.get(keyFor(l));
let sourceId=null,sourceSelection=null,sourcePhoto=null,sourceTicket=0,clipboard=null,selectionOrigin='source';
const sourceCanvas=$('source-canvas'),sourceContext=sourceCanvas.getContext('2d');
const canvas=$('collage-canvas'),overlay=$('collage-overlay'),ctx=canvas.getContext('2d'),ui=overlay.getContext('2d');
let doc={format:'borrowed-worlds-collage',version:1,width:W,height:H,background:'paper',editingSurface:'city',layers:[]};
let selected=null,selectedIds=new Set(),groupBox=null,tool='move',gesture=null,hover=null,frame=0,kind='all',page=1,queryTimer,saveTimer,db=null,restoring=false,restoreEpoch=0;
let history=[],historyAt=-1,previewState=null,previewRevision=0;
const assets=new Map(),rasters=new Map(),PAGE=12;
const escape=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const serial=()=>JSON.stringify(doc);
const draftSerial=()=>JSON.stringify(previewState?previewState.doc:doc);
const sculpture=await SculptureLink.create({
 getDocument:()=>doc,getActive:active,commit,message,select,drawCity:drawDocument,getCityRaster:raster,getCityBounds:cityBounds,getSurface:()=>doc.editingSurface||'city',addPart:addSculpturePart,copyPart:copySculpturePart,pastePart:pasteSelection,getClipboard:()=>clipboard,rematchCity:rematchCity,previewCity:previewCity,

 getCityInfo:l=>({name:objectFor(l)?.name||itemMap.get(l.sourceId)?.title||'City fragment',image:objectFor(l)?.url||itemMap.get(l.sourceId)?.thumbnail,object:objectFor(l),canvas:assets.get(keyFor(l)),sourceImage:photoObjects[l.sourceId]?.original})
});
const reconstruction=await Sculpture3D.create({
 getDocument:()=>doc,isPreview:()=>!!previewState,getComposition:()=>({...JSON.parse(serial()),modelTarget:doc.editingSurface==='sculpture'?'city':'sculpture',sculptureRecords:sculpture.records(doc.layers),sourceRecords:[...new Set(doc.layers.map(l=>l.sourceId))].map(id=>{const i=itemMap.get(id);return{id,title:i.title,image:i.image,sources:i.sources,credits:i.credits};})}),
 drawModel:(g,snapshot)=>snapshot.modelTarget==='city'?drawDocument(g,snapshot):sculpture.drawDocument(g,snapshot),message
});
function localPoint(l,p){
 const a=-(l.rotation||0)*Math.PI/180,cx=l.x+l.w/2,cy=l.y+l.h/2,dx=p.x-cx,dy=p.y-cy;
 return{x:cx+dx*Math.cos(a)-dy*Math.sin(a),y:cy+dx*Math.sin(a)+dy*Math.cos(a)};
}
function worldPoint(l,p){
 const a=(l.rotation||0)*Math.PI/180,cx=l.x+l.w/2,cy=l.y+l.h/2,dx=p.x-cx,dy=p.y-cy;
 return{x:cx+dx*Math.cos(a)-dy*Math.sin(a),y:cy+dx*Math.sin(a)+dy*Math.cos(a)};
}
function drawLayer(g,l,image){
 g.save();g.translate(l.x+l.w/2,l.y+l.h/2);g.rotate((l.rotation||0)*Math.PI/180);g.scale(l.flipX?-1:1,l.flipY?-1:1);const b=cityBounds(l);g.drawImage(image,b.x-l.x-l.w/2,b.y-l.y-l.h/2,b.w,b.h);g.restore();
}
function message(text){$('studio-message').textContent=text;}
function active(){return doc.layers.find(l=>l.id===selected);}

function selectionLayers(){return doc.layers.filter(l=>selectedIds.has(l.id));}
function syncSelection(){
 const valid=new Set(doc.layers.map(l=>l.id));selectedIds=new Set([...selectedIds].filter(id=>valid.has(id)));
 if(selected&&!selectedIds.has(selected)){selectedIds=new Set(valid.has(selected)?[selected]:[]);groupBox=null;}
 if(!selectedIds.has(selected))selected=[...selectedIds].at(-1)||null;
 if(selectedIds.size<2)groupBox=null;
}
function selectionBox(){
 if(selectedIds.size<2)return active();
 if(!groupBox){const points=selectionLayers().flatMap(corners),xs=points.map(p=>p.x),ys=points.map(p=>p.y);const x=Math.min(...xs),y=Math.min(...ys);groupBox={x,y,w:Math.max(...xs)-x,h:Math.max(...ys)-y,rotation:0};}
 return groupBox;
}
const angle=v=>((v+180)%360+360)%360-180;
function rotateSelection(value){
 const b=selectionBox();if(!b)return;
 const delta=angle(value-(b.rotation||0)),a=delta*Math.PI/180,cx=b.x+b.w/2,cy=b.y+b.h/2;
 for(const l of selectionLayers()){const dx=l.x+l.w/2-cx,dy=l.y+l.h/2-cy;l.x=cx+dx*Math.cos(a)-dy*Math.sin(a)-l.w/2;l.y=cy+dx*Math.sin(a)+dy*Math.cos(a)-l.h/2;l.rotation=angle((l.rotation||0)+delta);}
 if(groupBox)groupBox.rotation=angle(value);updateRotation();schedule();
}
function updateRotation(){
 const b=selectionBox(),value=Math.round(b?.rotation||0);
 $('rotation-control').disabled=!b;$('rotation-number').disabled=!b;$('rotation-control').value=value;$('rotation-number').value=value;$('rotation-value').textContent=value+'°';$('rotation-reset').disabled=!b||!value;
}
function mirrorSelection(key){
 const b=selectionBox();if(!b)return;
 if(selectedIds.size===1){active()[key]=!active()[key];}
 else{const a=(b.rotation||0)*Math.PI/180,cx=b.x+b.w/2,cy=b.y+b.h/2;
  for(const l of selectionLayers()){const dx=l.x+l.w/2-cx,dy=l.y+l.h/2-cy;let x=dx*Math.cos(a)+dy*Math.sin(a),y=-dx*Math.sin(a)+dy*Math.cos(a);if(key==='flipX')x=-x;else y=-y;l.x=cx+x*Math.cos(a)-y*Math.sin(a)-l.w/2;l.y=cy+x*Math.sin(a)+y*Math.cos(a)-l.h/2;l.rotation=angle(2*(b.rotation||0)-(l.rotation||0));l[key]=!l[key];}
 }
 commit();message(selectedIds.size>1?'Selected fragments mirrored together.':'Both linked fragments mirrored.');
}
function overlapsMarquee(l,r){
 const polygon=corners(l),rect=[{x:r.x,y:r.y},{x:r.x+r.w,y:r.y},{x:r.x+r.w,y:r.y+r.h},{x:r.x,y:r.y+r.h}];
 const axes=[{x:1,y:0},{x:0,y:1},...polygon.slice(0,2).map((p,i)=>({x:-(polygon[i+1].y-p.y),y:polygon[i+1].x-p.x}))];
 return axes.every(axis=>{const a=polygon.map(p=>p.x*axis.x+p.y*axis.y),b=rect.map(p=>p.x*axis.x+p.y*axis.y);return Math.max(...a)>=Math.min(...b)&&Math.max(...b)>=Math.min(...a);});
}
function groupTransform(g,p){
 const b=g.box;
 if(g.kind==='move'){const dx=p.x-g.start.x,dy=p.y-g.start.y;for(const old of g.layers){const l=doc.layers.find(l=>l.id===old.id);l.x=old.x+dx;l.y=old.y+dy;}if(groupBox){groupBox.x=b.x+dx;groupBox.y=b.y+dy;}}
 else if(g.kind==='rotate'){const cx=b.x+b.w/2,cy=b.y+b.h/2,delta=(Math.atan2(p.y-cy,p.x-cx)-Math.atan2(g.start.y-cy,g.start.x-cx)),c=Math.cos(delta),s=Math.sin(delta);
  for(const old of g.layers){const l=doc.layers.find(l=>l.id===old.id),dx=old.x+old.w/2-cx,dy=old.y+old.h/2-cy;l.x=cx+dx*c-dy*s-old.w/2;l.y=cy+dx*s+dy*c-old.h/2;l.rotation=angle((old.rotation||0)+delta*180/Math.PI);}
  if(groupBox)groupBox.rotation=angle(b.rotation+delta*180/Math.PI);
 }else{
  const west=g.handle.includes('w'),north=g.handle.includes('n'),sx=west?-1:1,sy=north?-1:1,a=(b.rotation||0)*Math.PI/180;
  const anchor=worldPoint(b,{x:west?b.x+b.w:b.x,y:north?b.y+b.h:b.y}),dx=p.x-anchor.x,dy=p.y-anchor.y;
  const scale=Math.min(3*W/Math.max(b.w,b.h),Math.max(32/Math.min(b.w,b.h),(dx*Math.cos(a)+dy*Math.sin(a))*sx/b.w,(-dx*Math.sin(a)+dy*Math.cos(a))*sy/b.h));
  for(const old of g.layers){const l=doc.layers.find(l=>l.id===old.id);l.w=old.w*scale;l.h=old.h*scale;l.x=anchor.x+(old.x+old.w/2-anchor.x)*scale-l.w/2;l.y=anchor.y+(old.y+old.h/2-anchor.y)*scale-l.h/2;}
  if(groupBox){groupBox.w=b.w*scale;groupBox.h=b.h*scale;groupBox.x=anchor.x+(b.x+b.w/2-anchor.x)*scale-groupBox.w/2;groupBox.y=anchor.y+(b.y+b.h/2-anchor.y)*scale-groupBox.h/2;}
 }
 updateRotation();schedule();
}

function schedule(){if(!frame)frame=requestAnimationFrame(()=>{frame=0;draw();});}
function ratio(){return W/Math.max(1,overlay.getBoundingClientRect().width);}
function point(e){const b=overlay.getBoundingClientRect();return {x:(e.clientX-b.left)*W/b.width,y:(e.clientY-b.top)*H/b.height};}
function inside(l,p){const q=localPoint(l,p),b=editingBounds(l);return b&&q.x>=b.x&&q.y>=b.y&&q.x<=b.x+b.w&&q.y<=b.y+b.h;}
async function loadAsset(sourceId){
 if(assets.has(sourceId))return assets.get(sourceId);
 const object=objectMap.get(sourceId),item=itemMap.get(object?.sourceId||sourceId);if(!item)throw Error('This photo is not in the Las Vegas material library.');
 const task=new Promise((resolve,reject)=>{
  const image=new Image();image.decoding='async';
  image.onload=()=>{const scale=Math.min(1,1600/Math.max(image.naturalWidth,image.naturalHeight));const c=document.createElement('canvas');c.width=Math.max(1,Math.round(image.naturalWidth*scale));c.height=Math.max(1,Math.round(image.naturalHeight*scale));c.getContext('2d').drawImage(image,0,0,c.width,c.height);image.src='';resolve(c);};
  image.onerror=()=>reject(Error('The original photo could not load. Keep the Las Vegas 2 folder available.'));
  image.src=object?object.url:item.image;
 }).catch(e=>{assets.delete(sourceId);throw e;});
 assets.set(sourceId,task);const c=await task;assets.set(sourceId,c);return c;
}
function strokeRaster(c,s){
 const g=c.getContext('2d');g.globalCompositeOperation='destination-out';g.lineWidth=s.radius*c.width*2;g.lineCap='round';g.lineJoin='round';g.beginPath();
 const p=s.points[0];if(!p){g.globalCompositeOperation='source-over';return;}
 if(s.points.length===1){g.arc(p[0]*c.width,p[1]*c.height,s.radius*c.width,0,Math.PI*2);g.fill();}
 else{g.moveTo(p[0]*c.width,p[1]*c.height);for(const v of s.points.slice(1))g.lineTo(v[0]*c.width,v[1]*c.height);g.stroke();}
 g.globalCompositeOperation='source-over';
}
function raster(l){
 const source=assets.get(keyFor(l));if(!source||source instanceof Promise)return null;
 const last=l.strokes.at(-1),stamp=l.strokes.length+':'+(last?.points.length||0)+':'+(l.cityRotation||0)+':'+keyFor(l);
 let r=rasters.get(l.id);
 if(!r||r.strokes!==l.strokes||r.stamp!==stamp){
  const c=r?.canvas||document.createElement('canvas');
  const turn=l.cityRotation===90;c.width=turn?source.height:source.width;c.height=turn?source.width:source.height;const g=c.getContext('2d');g.save();if(turn){g.translate(c.width,0);g.rotate(Math.PI/2);}g.drawImage(source,0,0);g.restore();
  for(const s of l.strokes)strokeRaster(c,s);
  r={canvas:c,strokes:l.strokes,stamp};rasters.set(l.id,r);
 }
 return r.canvas;
}
function drawDocument(g,snapshot=doc){
 g.clearRect(0,0,W,H);if(snapshot.background==='paper'){g.fillStyle='#fff';g.fillRect(0,0,W,H);}
 for(const l of snapshot.layers){const image=raster(l);if(image)drawLayer(g,l,image);}
}

function cityBounds(l){
 if(l.basis!=='sculpture')return {x:l.x,y:l.y,w:l.w,h:l.h};
 const image=raster(l);if(!image)return {x:l.x,y:l.y,w:l.w,h:l.h};const scale=Math.min(l.w/image.width,l.h/image.height),w=image.width*scale,h=image.height*scale;
 return{x:l.x+(l.w-w)/2,y:l.y+(l.h-h)/2,w,h};
}
function editingBounds(l){return doc.editingSurface==='sculpture'?sculpture.bounds(l):cityBounds(l);}
function editingRaster(l){return doc.editingSurface==='sculpture'?sculpture.raster(l):raster(l);}
function drawEditor(g,snapshot=doc){if(snapshot.editingSurface==='sculpture')sculpture.drawDocument(g,snapshot);else drawDocument(g,snapshot);}
function recommendCity(partId,vaRotation=0,excludeId=null){
 const part=sculpture.parts.find(p=>p.id===partId);if(!part)throw Error('Choose an available sculpture fragment.');
 const m=part.shape||{aspectRatio:part.width/part.height,fillRatio:.6,elongation:1},aspect=vaRotation===90?1/m.aspectRatio:m.aspectRatio;
 const usage=new Map();for(const l of doc.layers)if(l.id!==excludeId)usage.set(keyFor(l),(usage.get(keyFor(l))||0)+1);
 let best=null;
 const eligible=[...objectMap.values()].filter(o=>itemMap.has(o.sourceId)&&o.bbox&&(o.bbox[2]-o.bbox[0])*(o.bbox[3]-o.bbox[1])>=5000);
 const photographed=eligible.filter(o=>/^\/collage-objects\/(architecture|advertisement)\//.test(o.url));
 for(const o of photographed.length>50?photographed:eligible){
  if(!itemMap.has(o.sourceId)||!o.bbox)continue;const width=o.bbox[2]-o.bbox[0],height=o.bbox[3]-o.bbox[1];if(width<12||height<12)continue;
  const a=width/height,fill=Math.min(1,(o.pixels||width*height*.6)/(width*height)),compact=['head','hand','foot'].includes(part.kind),long=['arm','leg','neck'].includes(part.kind);
  const penalty=(compact?(o.kind==='signs'?0:.2):part.kind==='torso'?(o.kind==='buildings'?0:.14):0)+(long&&/tower|pole|bottle|cowboy|spire|column|obelisk/i.test(o.name)?-.18:0);
  for(const turn of [0,90]){const fit=turn?1/a:a,score=Math.abs(Math.log(fit/aspect))*.9+Math.abs(fill-m.fillRatio)*.35+penalty+(turn?.07:0)+(usage.get(o.key)||0)*.28+Math.max(0,Math.log(360/Math.sqrt(width*height)))*.22-(o.primary?.04:0);
   if(!best||score<best.score)best={key:o.key,cityRotation:turn,score};}
 }
 if(!best)throw Error('No Las Vegas counterpart is available.');return best;
}
async function addSculpturePart(partId,at=null){
 if(restoring||doc.layers.length>=40){message('Wait for the draft to load, or remove a layer from this 40-fragment board.');return;}
 try{
  const ticket=restoreEpoch,part=sculpture.parts.find(p=>p.id===partId),match=recommendCity(partId),o=objectMap.get(match.key);await loadAsset(match.key);if(ticket!==restoreEpoch)return;
  const scale=Math.min(W*.35/part.width,H*.64/part.height),w=part.width*scale,h=part.height*scale,p=at||{x:W/2+(doc.layers.length%5)*20,y:H/2+(doc.layers.length%5)*15};
  const l={id:crypto.randomUUID(),sourceId:o.sourceId,objectId:o.id,vaPartId:partId,vaRotation:0,cityRotation:match.cityRotation,basis:'sculpture',rotation:0,flipX:false,flipY:false,x:p.x-w/2,y:p.y-h/2,w,h,strokes:[]};
  doc.layers.push(l);selected=l.id;selectedIds=new Set([l.id]);groupBox=null;selectionOrigin='board';setTool('move');commit();$('parts-dialog').close();overlay.focus({preventScroll:true});message(part.name+' added. A Las Vegas '+o.name+' follows its shape.');
 }catch(e){message(e.message);}
}
async function applyCityCounterpart(key,turn=0){
 const l=active(),id=l?.id;if(!l||!objectMap.has(key))return;
 try{await loadAsset(key);if(active()?.id!==id){message('Selection changed. Choose a counterpart again.');return;}const o=objectMap.get(key);l.sourceId=o.sourceId;l.objectId=o.id;l.cityRotation=turn;l.basis='sculpture';selectionOrigin='board';rasters.delete(l.id);commit();if($('material-dialog').open)$('material-dialog').close();overlay.focus({preventScroll:true});message('Las Vegas counterpart changed. The sculpture fragment stays in place.');}
 catch(e){message(e.message);}
}
function previewCity(partId){const match=recommendCity(partId),o=objectMap.get(match.key);return {title:o.name,image:o.url,rotation:match.cityRotation};}
function rematchCity(){const l=active();if(!l)return;const match=recommendCity(l.vaPartId,l.vaRotation,l.id);applyCityCounterpart(match.key,match.cityRotation);}
let cityPickerPurpose='add';
function syncDirection(){
 const reverse=doc.editingSurface==='sculpture';
 $('swap-direction').setAttribute('aria-pressed',String(reverse));$('swap-direction').textContent=reverse?'⇄ Sculpture → City':'⇄ City → Sculpture';
 $('open-materials').textContent=reverse?'+ Choose sculpture fragments':'+ Choose city fragments';
 $('board-title').textContent=reverse?'01 / V&A SCULPTURE COLLAGE':'01 / LAS VEGAS COLLAGE';
 $('sculpture-title').textContent=reverse?'02 / LAS VEGAS COLLAGE':'02 / V&A SCULPTURE COLLAGE';
 $('toggle-city').textContent=reverse?'Sculpture collage':'City collage';$('toggle-sculpture').textContent=reverse?'City collage':'Sculpture collage';
 $('export-png').textContent=reverse?'Export sculpture PNG ↗':'Export city PNG ↗';
 $('export-sculpture').textContent=reverse?'Export city PNG ↗':'Export sculpture PNG ↗';
 $('board-empty').querySelector('p').textContent=reverse?'Choose a sculpture fragment, then compose it here.':'Choose a city object, then paste it here.';
 $('empty-choose-materials').textContent=reverse?'Choose sculpture fragments':'Choose city fragments';
 $('sculpture-empty').querySelector('h3').textContent=reverse?'ANOTHER CITY TAKES SHAPE.':'ANOTHER BODY TAKES SHAPE.';
 $('sculpture-empty').querySelector('p').textContent=reverse?'Your sculpture fragments find their Las Vegas counterparts here.':'Your city fragments find their sculptural counterparts here.';
 $('part-library-count').textContent=reverse?objectMap.size.toLocaleString('en-GB')+' cutouts · '+materials.length.toLocaleString('en-GB')+' photos':sculpture.parts.length+' parts · '+new Set(sculpture.parts.map(p=>p.sourceId)).size+' photographs';
 document.querySelector('.sculpture-toolbar>span:nth-child(2)').textContent=reverse?'LIVE LAS VEGAS COLLAGE':'LIVE PHOTOGRAPHIC COLLAGE';
 document.querySelector('.studio-intro>p').innerHTML=reverse?'Borrow a body.<br>Compose another city.':'Borrow a city.<br>Compose another body.';
 $('collage-overlay').setAttribute('aria-label',(reverse?'Sculpture':'Las Vegas')+' collage. Move, resize, rotate, mirror or Alt-drag to duplicate selected fragments.');
 $('sculpture-canvas').setAttribute('aria-label',(reverse?'Las Vegas':'Sculpture')+' paired collage. Click a fragment to select its linked editable layer.');
 $('pair-empty').textContent=reverse?'Select a sculpture fragment to choose its Las Vegas counterpart.':'Select a city fragment to choose its V&A counterpart.';
 $('va-part-select').hidden=reverse;$('city-part-select').hidden=!reverse;
 document.querySelector('.pair-previews').classList.toggle('reverse-pair',reverse);
 if(reverse){const l=active(),p=l&&sculpture.parts.find(p=>p.id===l.vaPartId),keys=new Set(l?[keyFor(l)]:[]);
  if(p){for(const o of [...objectMap.values()].filter(o=>itemMap.has(o.sourceId)&&/^\/collage-objects\/(architecture|advertisement)\//.test(o.url)&&(o.bbox[2]-o.bbox[0])*(o.bbox[3]-o.bbox[1])>=5000).sort((a,b)=>Math.abs(Math.log((a.bbox[2]-a.bbox[0])/(a.bbox[3]-a.bbox[1])/(p.width/p.height)))-Math.abs(Math.log((b.bbox[2]-b.bbox[0])/(b.bbox[3]-b.bbox[1])/(p.width/p.height)))).slice(0,20))keys.add(o.key);}
  $('city-part-select').innerHTML=l?[...keys].map(key=>'<option value="'+escape(key)+'">'+escape(objectMap.get(key)?.name||'City fragment')+'</option>').join(''):'<option>Choose a sculpture layer first</option>';
  $('city-part-select').disabled=!l;if(l)$('city-part-select').value=keyFor(l);
 }
}

function corners(l){return [{x:l.x,y:l.y,key:'nw'},{x:l.x+l.w,y:l.y,key:'ne'},{x:l.x+l.w,y:l.y+l.h,key:'se'},{x:l.x,y:l.y+l.h,key:'sw'}].map(p=>({...worldPoint(l,p),key:p.key}));}
function rotationHandle(l){return{...worldPoint(l,{x:l.x+l.w/2,y:l.y-32*ratio()}),key:'rotate'};}
function handleAt(p){const l=selectionBox();if(!l||tool!=='move')return null;return [...corners(l),rotationHandle(l)].find(c=>Math.hypot(c.x-p.x,c.y-p.y)<13*ratio());}
function pick(p){
 for(const l of [...doc.layers].reverse()){
  if(!inside(l,p))continue;const c=editingRaster(l),b=editingBounds(l);if(!c||!b)continue;
  const q=localPoint(l,p),u=(q.x-b.x)/b.w,v=(q.y-b.y)/b.h,x=Math.min(c.width-1,Math.max(0,Math.floor((l.flipX?1-u:u)*c.width))),y=Math.min(c.height-1,Math.max(0,Math.floor((l.flipY?1-v:v)*c.height)));
  if(c.getContext('2d').getImageData(x,y,1,1).data[3]>10)return l;
 }
 return null;
}
function draw(){
 drawEditor(ctx);sculpture.draw(doc,[...selectedIds],doc.editingSurface==='sculpture');ui.clearRect(0,0,W,H);$('board-empty').hidden=doc.layers.length>0;
 const l=selectionBox(),unit=ratio();
 if(selectedIds.size>1){ui.strokeStyle='#d4142466';ui.lineWidth=unit;for(const layer of selectionLayers()){ui.beginPath();corners(layer).forEach((p,i)=>i?ui.lineTo(p.x,p.y):ui.moveTo(p.x,p.y));ui.closePath();ui.stroke();}}
 if(l){ui.strokeStyle='#d41424';ui.lineWidth=1.4*unit;ui.setLineDash(tool==='erase'?[6*unit,4*unit]:[]);ui.save();ui.translate(l.x+l.w/2,l.y+l.h/2);ui.rotate((l.rotation||0)*Math.PI/180);ui.strokeRect(-l.w/2,-l.h/2,l.w,l.h);ui.restore();ui.setLineDash([]);
  if(tool==='move'){for(const p of corners(l)){ui.fillStyle='#fff';ui.fillRect(p.x-5*unit,p.y-5*unit,10*unit,10*unit);ui.strokeRect(p.x-5*unit,p.y-5*unit,10*unit,10*unit);}const r=rotationHandle(l),t=worldPoint(l,{x:l.x+l.w/2,y:l.y});ui.beginPath();ui.moveTo(t.x,t.y);ui.lineTo(r.x,r.y);ui.stroke();ui.fillStyle='#fff';ui.beginPath();ui.arc(r.x,r.y,6*unit,0,Math.PI*2);ui.fill();ui.stroke();}
 }
 if(gesture?.kind==='marquee'){const r=gesture.rect;ui.fillStyle='#d4142414';ui.strokeStyle='#d41424';ui.lineWidth=unit;ui.setLineDash([5*unit,3*unit]);ui.fillRect(r.x,r.y,r.w,r.h);ui.strokeRect(r.x,r.y,r.w,r.h);ui.setLineDash([]);}
 if(tool==='erase'&&hover){ui.lineWidth=1.3*unit;ui.strokeStyle='#d41424';ui.beginPath();ui.arc(hover.x,hover.y,Number($('eraser-size').value)/2,0,Math.PI*2);ui.stroke();}
}
function renderLayers(){
 syncSelection();syncDirection();
 $('layer-count').textContent=String(doc.layers.length);$('layers-empty').hidden=doc.layers.length>0;
 $('layer-list').innerHTML=[...doc.layers].reverse().map(l=>{const i=itemMap.get(l.sourceId),o=objectFor(l),title=o?.name||i.title,part=sculpture.parts.find(p=>p.id===l.vaPartId);return '<button class="layer-entry" data-layer="'+escape(l.id)+'" aria-pressed="'+(selectedIds.has(l.id))+'" aria-label="Select '+escape(title)+'"><img src="'+escape(o?.url||i.thumbnail)+'" alt=""><span class="layer-arrow" aria-hidden="true">↔</span><img class="linked-layer-image" src="'+escape(part?.url||'')+'" alt=""><span>'+escape(title)+'<br>'+escape(part?.kind||'')+'</span></button>';}).join('');
 const l=active(),at=doc.layers.findIndex(i=>i.id===selected);
 $('delete-layer').disabled=!l;$('restore-layer').disabled=!l||!l.strokes.length;$('bring-forward').disabled=!selectionLayers().some(l=>{const n=doc.layers.indexOf(l)+1;return n<doc.layers.length&&!selectedIds.has(doc.layers[n].id);});$('send-backward').disabled=!selectionLayers().some(l=>{const n=doc.layers.indexOf(l)-1;return n>=0&&!selectedIds.has(doc.layers[n].id);});
 $('clear-board').disabled=!doc.layers.length;$('export-png').disabled=!doc.layers.length;
 $('undo').disabled=historyAt<=0;$('redo').disabled=historyAt>=history.length-1;
 $('flip-horizontal').disabled=!l;$('flip-vertical').disabled=!l;$('flip-horizontal').setAttribute('aria-pressed',String(!!l?.flipX));$('flip-vertical').setAttribute('aria-pressed',String(!!l?.flipY));$('rotation-number').disabled=!l;$('rotation-number').value=l?.rotation||0;$('board-background').value=doc.background;sculpture.render(active());updateRotation();$('selection-count').textContent=selectedIds.size>1?selectedIds.size+' fragments selected':'Drag on empty paper to select a group · Shift-click to add';reconstruction.changed(doc);syncSavedPreview();schedule();
}
function select(id,additive=false){if(additive&&id){if(selectedIds.has(id))selectedIds.delete(id);else selectedIds.add(id);selected=selectedIds.has(id)?id:[...selectedIds].at(-1)||null;}else{selected=id;selectedIds=new Set(id?[id]:[]);}groupBox=null;selectionOrigin='board';renderLayers();}
function commit(){
 if(previewState)return;
 const value=serial();if(history[historyAt]===value){renderLayers();return;}
 history=history.slice(0,historyAt+1);history.push(value);if(history.length>40)history.shift();historyAt=history.length-1;
 renderLayers();queueSave();
}
function undo(direction){
 const next=historyAt+direction;if(next<0||next>=history.length)return;
 historyAt=next;doc=JSON.parse(history[historyAt]);groupBox=null;if(!active())selected=doc.layers.at(-1)?.id||null;
 renderLayers();queueSave();message(direction<0?'Undone.':'Redone.');
}
function setTool(value){
 tool=value;$('tool-move').setAttribute('aria-pressed',String(value==='move'));$('tool-erase').setAttribute('aria-pressed',String(value==='erase'));
 $('tool-instruction').textContent=value==='erase'?'Paint to erase the selected fragment. Select a different layer on the right to work on it.':'Drag empty paper to select a group. Corners scale; the round handle rotates.';
 overlay.style.cursor=value==='erase'?'crosshair':'default';hover=null;schedule();
}
function queueSave(){
 $('save-status').textContent='Saving on this device…';clearTimeout(saveTimer);
 saveTimer=setTimeout(()=>{if(!db){$('save-status').textContent='Use Save project to keep your draft.';return;}
  try{const transaction=db.transaction('drafts','readwrite');transaction.objectStore('drafts').put(JSON.parse(draftSerial()),'current');transaction.oncomplete=()=>{$('save-status').textContent='Saved on this device.';};transaction.onerror=()=>{$('save-status').textContent='Autosave unavailable. Use Save project.';};}catch{$('save-status').textContent='Autosave unavailable. Use Save project.';}
 },450);
}
async function addAsset(assetKey,at=null,strokes=[],linkedState={}){
 if(previewState)return;
 const object=objectMap.get(assetKey),sourceId=object?.sourceId||assetKey;
 if(restoring){message('Your saved draft is still loading. Please wait a moment.');return;}
 if(doc.layers.length>=40){message('The board can hold 40 fragments. Remove a layer before adding another.');return;}
 try{
  message('Loading fragment…');const ticket=restoreEpoch,c=await loadAsset(assetKey);if(ticket!==restoreEpoch)return;
  const scale=Math.min(W*.35/c.width,H*.64/c.height),w=linkedState.w||c.width*scale,h=linkedState.h||c.height*scale;
  const p=at||{x:W/2+(doc.layers.length%5)*20,y:H/2+(doc.layers.length%5)*15};
  const l={id:crypto.randomUUID(),sourceId,...(object?{objectId:object.id}:{}),x:p.x-w/2,y:p.y-h/2,w,h,strokes:JSON.parse(JSON.stringify(strokes))};
  l.rotation=Number.isFinite(linkedState.rotation)?linkedState.rotation:0;if(sculpture.has(linkedState.vaPartId))l.vaPartId=linkedState.vaPartId;l.flipX=!!linkedState.flipX;l.flipY=!!linkedState.flipY;l.vaRotation=linkedState.vaRotation===90?90:0;l.cityRotation=linkedState.cityRotation===90?90:0;l.basis=linkedState.basis==='sculpture'?'sculpture':'city';sculpture.assign(l,object,c);
  doc.layers.push(l);selected=l.id;selectedIds=new Set([l.id]);groupBox=null;selectionOrigin='board';setTool('move');commit();if($('material-dialog').open)$('material-dialog').close();overlay.focus({preventScroll:true});message('City fragment pasted. Its linked V&A fragment follows on the sculpture board.');
 }catch(e){message(e.message);}
}
function renderMaterials(){
 const rows=ArchiveSearch.run(searchIndex,{q:$('material-query').value}).items.filter(i=>kind==='all'||(kind==='buildings'?(i.elements||[]).includes('Buildings'):(i.elements||[]).some(e=>['Signs & logos','Advertising installations'].includes(e))));
 const pages=Math.max(1,Math.ceil(rows.length/PAGE));page=Math.min(page,pages);
 $('material-count').textContent=rows.length.toLocaleString('en-GB')+' photos';
 $('material-empty').hidden=rows.length>0;
 $('material-list').innerHTML=rows.slice((page-1)*PAGE,page*PAGE).map(i=>'<button class="material-card" draggable="false" aria-pressed="'+(i.id===sourceId)+'" data-asset="'+escape(i.id)+'" aria-label="View '+escape(i.title)+' and choose an object" title="'+escape(i.title)+'"><img src="'+escape(i.thumbnail)+'" alt="" draggable="false" loading="lazy"><span>'+escape(i.title)+'</span></button>').join('');
 renderPageNumbers($('material-page'),page,pages);$('material-prev').disabled=page<=1;$('material-next').disabled=page>=pages;$('material-list').scrollTop=0;
}

function renderPageNumbers(node,current,pages){
 const set=new Set([1,pages]);for(let n=Math.max(1,current-1);n<=Math.min(pages,current+1);n++)set.add(n);
 let prev=0;node.innerHTML=[...set].sort((a,b)=>a-b).map(n=>{const gap=prev&&n-prev>1?'<span aria-hidden="true">…</span>':'';prev=n;return gap+'<button data-page="'+n+'" aria-label="Page '+n+'" '+(n===current?'aria-current="page"':'')+'>'+n+'</button>';}).join('');
}
$('material-page').addEventListener('click',e=>{const b=e.target.closest('[data-page]');if(b){page=Number(b.dataset.page);renderMaterials();}});

function addErasePoint(l,p){
 const q=localPoint(l,p),b=editingBounds(l),s=l.strokes.at(-1),u=(q.x-b.x)/b.w,t=(q.y-b.y)/b.h,v=[l.flipX?1-u:u,l.flipY?1-t:t],prev=s.points.at(-1);
 if(!prev||Math.hypot((v[0]-prev[0])*l.w,(v[1]-prev[1])*l.h)>1){s.points.push(v);schedule();}
}

overlay.addEventListener('focus',()=>{selectionOrigin='board';});
overlay.addEventListener('pointerdown',e=>{
 if(previewState)return;
 if(e.button!==0||!e.isPrimary||gesture)return;e.preventDefault();overlay.focus({preventScroll:true});const p=point(e),handle=handleAt(p);
 if(tool==='move'){
  const l=handle?active():pick(p);
  if(!l){const base=e.shiftKey?[...selectedIds]:[];if(!e.shiftKey)select(null);gesture={kind:'marquee',start:p,rect:{x:p.x,y:p.y,w:0,h:0},base};}
  else{
   if(e.shiftKey&&!handle){select(l.id,true);if(!selectedIds.has(l.id))return;}
   else if(!selectedIds.has(l.id))select(l.id);
   else{selected=l.id;selectionOrigin='board';renderLayers();}
   const b=selectionBox();gesture={kind:handle?.key==='rotate'?'rotate':handle?'resize':'move',start:p,box:structuredClone(b),layers:structuredClone(selectionLayers()),handle:handle?.key,copyOnDrag:e.altKey&&!handle};
  }
 }else{
  let l=active();if(!l||!inside(l,p)){l=pick(p);select(l?.id||null);}if(!l)return;
  l.strokes.push({radius:Number($('eraser-size').value)/2/editingBounds(l).w,points:[]});gesture={kind:'erase',id:l.id};addErasePoint(l,p);
 }
 overlay.setPointerCapture(e.pointerId);hover=p;schedule();
});
overlay.addEventListener('pointermove',e=>{
 const p=point(e);hover=p;
 if(gesture){
  if(gesture.kind==='marquee'){const r={x:Math.min(p.x,gesture.start.x),y:Math.min(p.y,gesture.start.y),w:Math.abs(p.x-gesture.start.x),h:Math.abs(p.y-gesture.start.y)};gesture.rect=r;selectedIds=new Set([...gesture.base,...(r.w>3&&r.h>3?doc.layers.filter(l=>overlapsMarquee(l,r)).map(l=>l.id):[])]);selected=[...selectedIds].at(-1)||null;groupBox=null;schedule();}
  else if(gesture.kind==='erase'){const l=doc.layers.find(l=>l.id===gesture.id);if(l)addErasePoint(l,p);}
  else{
   if(gesture.copyOnDrag&&Math.hypot(p.x-gesture.start.x,p.y-gesture.start.y)>3){
    if(doc.layers.length+gesture.layers.length>40){gesture.copyOnDrag=false;message('The board has room for 40 fragments. Remove some layers to make copies.');}
    else{const clones=gesture.layers.map(l=>({...structuredClone(l),id:crypto.randomUUID()}));gesture.createdIds=clones.map(l=>l.id);doc.layers.push(...clones);selectedIds=new Set(gesture.createdIds);selected=gesture.createdIds.at(-1);gesture.layers=structuredClone(clones);gesture.copyOnDrag=false;renderLayers();message(clones.length+' fragment'+(clones.length===1?'':'s')+' copied with Alt-drag.');}
   }
   if(!gesture.copyOnDrag)groupTransform(gesture,p);
  }
 }else if(tool==='move'){const h=handleAt(p);overlay.style.cursor=h?(h.key==='rotate'?'crosshair':h.key==='nw'||h.key==='se'?'nwse-resize':'nesw-resize'):pick(p)?'grab':'crosshair';}
 else schedule();
});
function endGesture(e){
 if(!gesture)return;const old=gesture;gesture=null;if(overlay.hasPointerCapture(e.pointerId))overlay.releasePointerCapture(e.pointerId);
 if(e.type==='pointercancel'){if(old.createdIds){doc.layers=doc.layers.filter(l=>!old.createdIds.includes(l.id));selected=null;selectedIds.clear();}if(old.layers)for(const snapshot of old.layers){const l=doc.layers.find(l=>l.id===snapshot.id);if(l)Object.assign(l,snapshot);};if(old.kind==='erase')doc.layers.find(l=>l.id===old.id)?.strokes.pop();groupBox=null;renderLayers();return;}
 if(old.kind==='marquee'){renderLayers();if(selectedIds.size>1)message(selectedIds.size+' fragments selected. Move, resize, rotate, mirror or delete them together.');}
 else commit();
}
overlay.addEventListener('pointerup',endGesture);overlay.addEventListener('pointercancel',endGesture);
overlay.addEventListener('lostpointercapture',e=>{if(gesture)endGesture(e);});
overlay.addEventListener('pointerleave',()=>{if(!gesture){hover=null;schedule();}});
overlay.addEventListener('dragover',e=>{e.preventDefault();e.dataTransfer.dropEffect='copy';$('board-frame').classList.add('is-dragover');});
overlay.addEventListener('dragleave',()=>$('board-frame').classList.remove('is-dragover'));
overlay.addEventListener('drop',e=>{e.preventDefault();$('board-frame').classList.remove('is-dragover');const id=e.dataTransfer.getData('application/x-borrowed-worlds-asset')||e.dataTransfer.getData('text/plain');if(objectMap.has(id))addAsset(id,point(e));else message('Click an object in the large photo and copy its transparent cutout first.');});
$('material-list').addEventListener('dragstart',e=>{const b=e.target.closest('[data-asset]');if(!b)return;e.dataTransfer.setData('application/x-borrowed-worlds-asset',b.dataset.asset);e.dataTransfer.setData('text/plain',b.dataset.asset);e.dataTransfer.effectAllowed='copy';});
$('material-list').addEventListener('click',e=>{const b=e.target.closest('[data-asset]');if(b)openSource(b.dataset.asset);});
$('material-query').addEventListener('input',()=>{clearTimeout(queryTimer);queryTimer=setTimeout(()=>{page=1;renderMaterials();},180);});
document.querySelector('#material-dialog .material-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-kind]');if(!b)return;kind=b.dataset.kind;page=1;for(const v of document.querySelectorAll('[data-kind]'))v.setAttribute('aria-pressed',String(v===b));renderMaterials();});
$('material-prev').addEventListener('click',()=>{page--;renderMaterials();});$('material-next').addEventListener('click',()=>{page++;renderMaterials();});
$('layer-list').addEventListener('click',e=>{const b=e.target.closest('[data-layer]');if(b)select(b.dataset.layer,e.shiftKey);});
$('tool-move').addEventListener('click',()=>setTool('move'));$('tool-erase').addEventListener('click',()=>setTool('erase'));
$('eraser-size').addEventListener('input',()=>{$('eraser-size-label').textContent=$('eraser-size').value+' px';schedule();});
$('undo').addEventListener('click',()=>undo(-1));$('redo').addEventListener('click',()=>undo(1));
function removeLayer(){if(!selectedIds.size)return;const count=selectedIds.size;doc.layers=doc.layers.filter(l=>!selectedIds.has(l.id));selected=null;selectedIds.clear();groupBox=null;commit();message(count+' fragment'+(count===1?'':'s')+' removed. Undo is available.');}
$('delete-layer').addEventListener('click',removeLayer);
$('restore-layer').addEventListener('click',()=>{const l=active();if(l){l.strokes=[];commit();message('Original pixels restored on this layer.');}});
function reorder(delta){const order=delta>0?[...doc.layers].reverse():[...doc.layers];for(const l of order){if(!selectedIds.has(l.id))continue;const at=doc.layers.indexOf(l),to=at+delta;if(to>=0&&to<doc.layers.length&&!selectedIds.has(doc.layers[to].id))[doc.layers[at],doc.layers[to]]=[doc.layers[to],doc.layers[at]];}commit();}
$('bring-forward').addEventListener('click',()=>reorder(1));$('send-backward').addEventListener('click',()=>reorder(-1));
$('board-background').addEventListener('change',()=>{doc.background=$('board-background').value;commit();});
function clearWorkspace(){
 if(previewState){cancelSavedPreview();return;}
 if(gesture){message('Finish the current drag, then clear the workspace.');return;}
 restoreEpoch++;restoring=false;reconstruction.clear();doc.layers=[];selected=null;selectedIds.clear();groupBox=null;clipboard=null;rasters.clear();selectSource(null);sculpture.clearPicker();$('paste-object').disabled=true;commit();clearTimeout(saveTimer);if(db){try{db.transaction('drafts','readwrite').objectStore('drafts').put(JSON.parse(draftSerial()),'current');$('save-status').textContent='Cleared on this device.';}catch{queueSave();}}message('Workspace cleared. Saved models remain in history; Undo restores the collage.');
}
$('clear-workspace').addEventListener('click',clearWorkspace);$('clear-board').addEventListener('click',clearWorkspace);
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);}
$('export-png').addEventListener('click',()=>{const c=document.createElement('canvas');c.width=W;c.height=H;drawEditor(c.getContext('2d'));c.toBlob(blob=>{if(blob){download(blob,doc.editingSurface==='sculpture'?'borrowed-worlds-sculpture-collage.png':'borrowed-worlds-collage.png');message('Portrait PNG exported at 1000 × 1400.');}},'image/png');});
$('save-project').addEventListener('click',()=>{
 const project=JSON.parse(serial());project.generatedModel=reconstruction.getRecord();project.sculptureRecords=sculpture.records(doc.layers);project.linkedRepresentation='Linked portrait city/sculpture photographic collages with optional TripoSR inferred mesh';project.objectRecords=[...new Set(doc.layers.map(keyFor))].filter(k=>objectMap.has(k)).map(k=>objectMap.get(k));project.sourceRecords=[...new Set(doc.layers.map(l=>l.sourceId))].map(id=>{const i=itemMap.get(id);return {id,title:i.title,image:i.image,sources:i.sources,credits:i.credits};});
 download(new Blob([JSON.stringify(project,null,2)],{type:'application/json'}),'borrowed-worlds-collage-project.json');message('Project saved. Use Open project to continue editing it.');
});
function validate(value){
 if(value?.format!=='borrowed-worlds-collage'||value.version!==1||!Array.isArray(value.layers)||value.layers.length>40)throw Error('Choose a project saved by this collage studio.');
 const sourceW=Number.isFinite(value.width)&&value.width>0?value.width:1600,sourceH=Number.isFinite(value.height)&&value.height>0?value.height:1000,scale=Math.min(W/sourceW,H/sourceH),offsetX=(W-sourceW*scale)/2,offsetY=(H-sourceH*scale)/2;
 const seen=new Set(),layers=value.layers.map(l=>{
  if(!itemMap.has(l.sourceId)||(l.objectId&&!objectMap.has(l.sourceId+'::'+l.objectId))||typeof l.id!=='string'||seen.has(l.id)||!['x','y','w','h'].every(k=>Number.isFinite(l[k])&&Math.abs(l[k])<=10000)||l.w<=0||l.h<=0||!Array.isArray(l.strokes)||l.strokes.length>3000)throw Error('This project contains an invalid layer.');
  seen.add(l.id);const strokes=l.strokes.map(s=>{if(!Number.isFinite(s.radius)||s.radius<=0||s.radius>10||!Array.isArray(s.points)||s.points.length>30000||!s.points.every(p=>Array.isArray(p)&&p.length===2&&p.every(v=>Number.isFinite(v)&&Math.abs(v)<100)))throw Error('This project has invalid eraser data.');return {radius:s.radius,points:s.points};});
  const layer={id:l.id,sourceId:l.sourceId,...(l.objectId?{objectId:l.objectId}:{}),x:l.x*scale+offsetX,y:l.y*scale+offsetY,w:l.w*scale,h:l.h*scale+0,flipX:!!l.flipX,flipY:!!l.flipY,vaRotation:l.vaRotation===90?90:0,cityRotation:l.cityRotation===90?90:0,basis:l.basis==='sculpture'?'sculpture':'city',strokes,rotation:Number.isFinite(l.rotation)?Math.max(-180,Math.min(180,l.rotation)):0};
  if(l.vaPartId&&!sculpture.has(l.vaPartId))throw Error('This project references an unavailable V&A fragment.');
  if(l.vaPartId)layer.vaPartId=l.vaPartId;sculpture.assign(layer,objectFor(layer));return layer;
 });
 return {format:'borrowed-worlds-collage',version:1,width:W,height:H,background:value.background==='transparent'?'transparent':'paper',editingSurface:value.editingSurface==='sculpture'?'sculpture':'city',layers};
}
async function restore(value,imported=false){
 if(previewState)await cancelSavedPreview();
 const candidate=validate(value),ticket=++restoreEpoch;restoring=true;message('Loading saved photographs…');
 try{for(const id of new Set(candidate.layers.map(keyFor)))await loadAsset(id);if(ticket!==restoreEpoch)return;doc=candidate;if(value.generatedModel)reconstruction.restore(value.generatedModel);else if(imported)reconstruction.clear();selected=doc.layers.at(-1)?.id||null;selectedIds=new Set(selected?[selected]:[]);groupBox=null;rasters.clear();
  if(imported)commit();else{history=[serial()];historyAt=0;renderLayers();}
  message(candidate.layers.length?'Your collage is ready to continue.':'');
 }finally{if(ticket===restoreEpoch)restoring=false;}
}
$('open-project').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;try{if(f.size>10*1024*1024)throw Error('Project file is too large.');await restore(JSON.parse(await f.text()),true);}catch(error){message(error.message);}e.target.value='';});
document.addEventListener('keydown',e=>{
 if(document.fullscreenElement)return;
 if(previewState){if(e.key==='Escape'){e.preventDefault();cancelSavedPreview();}return;}
 const field=document.activeElement,isInput=['INPUT','TEXTAREA','SELECT'].includes(field?.tagName),typing=field?.isContentEditable||field?.tagName==='TEXTAREA'||field?.tagName==='INPUT'&&!['range','number','button','checkbox','radio'].includes(field?.type),dialogOpen=[...document.querySelectorAll('dialog')].some(d=>d.open);
 const ctrl=e.ctrlKey||e.metaKey,left=e.code==='BracketLeft'||['[','【','［','{'].includes(e.key)||e.keyCode===219,right=e.code==='BracketRight'||[']','】','］','}'].includes(e.key)||e.keyCode===221;
 if(ctrl&&(left||right)&&!typing&&!dialogOpen){e.preventDefault();e.stopPropagation();reorder(left?-1:1);message(left?'Selected layers moved backward.':'Selected layers moved forward.');return;}
 if(ctrl&&!typing&&$('parts-dialog').open&&sculpture.pickerPurpose()==='add'&&['c','v'].includes(e.key.toLowerCase())){e.preventDefault();if(e.key.toLowerCase()==='c')copySculpturePart(sculpture.selectedPart());else pasteSelection();return;}
 if(isInput||dialogOpen)return;
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='a'){e.preventDefault();selectedIds=new Set(doc.layers.map(l=>l.id));selected=doc.layers.at(-1)?.id||null;groupBox=null;selectionOrigin='board';renderLayers();}
 else if((e.ctrlKey||e.metaKey)&&(e.code==='BracketLeft'||e.key==='['||e.key==='【')){e.preventDefault();reorder(-1);}
 else if((e.ctrlKey||e.metaKey)&&(e.code==='BracketRight'||e.key===']'||e.key==='】')){e.preventDefault();reorder(1);}
 else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='c'){e.preventDefault();copySelection();}
 else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='v'){e.preventDefault();pasteSelection();}
 else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();undo(e.shiftKey?1:-1);}
 else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='y'){e.preventDefault();undo(1);}
 else if(['Delete','Backspace'].includes(e.key)){e.preventDefault();removeLayer();}
 else if(e.key==='Escape'){if($('material-dialog').open||$('parts-dialog').open)return;if(selectionOrigin==='board')select(null);else selectSource(null);}
 else if(e.key.toLowerCase()==='v')setTool('move');else if(e.key.toLowerCase()==='e')setTool('erase');
},true);
function syncPreviewWidth(){document.documentElement.style.setProperty('--preview-width',document.documentElement.clientWidth+'px');document.documentElement.style.setProperty('--studio-controls-height',Math.ceil(document.querySelector('.studio-controls').getBoundingClientRect().height)+'px');schedule();}
function syncModelStageFocus(){
 const stage=$('model-stage'),r=stage.getBoundingClientRect();
 document.body.classList.toggle('model-stage-focused',!$('model-panel').hidden&&r.top<=1&&r.bottom>0);
}
window.addEventListener('scroll',syncModelStageFocus,{passive:true});
window.addEventListener('resize',syncModelStageFocus);
new ResizeObserver(syncModelStageFocus).observe($('model-panel'));
window.addEventListener('resize',syncPreviewWidth);syncPreviewWidth();new ResizeObserver(syncPreviewWidth).observe(document.querySelector('.studio-controls'));
window.addEventListener('pagehide',()=>{if(db){try{db.transaction('drafts','readwrite').objectStore('drafts').put(JSON.parse(draftSerial()),'current');}catch{}}});

function pruneAssets(){
 const keep=new Set([...doc.layers.map(keyFor),...(photoObjects[sourceId]?.objects||[]).map(o=>o.key)]);
 if(clipboard)keep.add(clipboard.key);
 for(const key of assets.keys())if(!keep.has(key))assets.delete(key);
}
function drawSource(){
 sourceContext.clearRect(0,0,sourceCanvas.width,sourceCanvas.height);
 if(!sourcePhoto)return;
 sourceContext.drawImage(sourcePhoto,0,0,sourceCanvas.width,sourceCanvas.height);
 const o=objectMap.get(sourceSelection),image=o&&assets.get(o.key),record=photoObjects[sourceId];
 if(!o||!image||image instanceof Promise)return;
 const tint=document.createElement('canvas');tint.width=image.width;tint.height=image.height;
 const g=tint.getContext('2d');g.drawImage(image,0,0);g.globalCompositeOperation='source-in';g.fillStyle='rgba(212,20,36,.42)';g.fillRect(0,0,tint.width,tint.height);
 const [x0,y0,x1,y1]=o.bbox,sx=sourceCanvas.width/record.width,sy=sourceCanvas.height/record.height;
 sourceContext.drawImage(tint,x0*sx,y0*sy,(x1-x0)*sx,(y1-y0)*sy);
}
function selectSource(key){
 sourceSelection=key;selectionOrigin='source';
 const o=objectMap.get(key),image=o&&assets.get(key),c=$('cutout-canvas'),g=c.getContext('2d');
 g.clearRect(0,0,c.width,c.height);
 if(image&&!(image instanceof Promise)){const s=Math.min((c.width-16)/image.width,(c.height-16)/image.height);g.drawImage(image,(c.width-image.width*s)/2,(c.height-image.height*s)/2,image.width*s,image.height*s);}
 $('cutout-placeholder').hidden=!!o;$('cutout-title').textContent=o?.name||'Select an object above';
 $('copy-status').textContent=o?'Only the selected object will be copied.':'A single fragment, ready to borrow.';
 $('copy-object').disabled=!o;$('cutout-preview').draggable=!!o;
 for(const b of $('source-objects').querySelectorAll('[data-object]'))b.setAttribute('aria-pressed',String(b.dataset.object===key));
 $('apply-city-counterpart').disabled=!o;
 if(o)$('source-hint').textContent='Selected: '+o.name+(cityPickerPurpose==='counterpart'?'. Click Use this city counterpart.':'. Press Ctrl+C, then Ctrl+V to paste on the board.');
 updateCityMatch();drawSource();
}
function updateCityMatch(){
 const o=objectMap.get(sourceSelection),image=o&&assets.get(o.key),node=$('city-picker-match-image'),label=$('city-picker-match-title');
 node.hidden=!o;if(!o){node.removeAttribute('src');label.textContent='Select a fragment';return;}
 let part,turn=0;
 if(cityPickerPurpose==='counterpart'&&active()){part=sculpture.parts.find(p=>p.id===active().vaPartId);turn=active().vaRotation||0;}
 else{const match=sculpture.recommend({id:'picker-probe',sourceId:o.sourceId,objectId:o.id,w:image?.width||1,h:image?.height||1},o,image instanceof Promise?null:image);part=sculpture.parts.find(p=>p.id===match.id);turn=match.angle;}
 if(part){node.src=part.url;node.style.transform=turn?'rotate(90deg)':'';label.textContent=part.name;label.title=part.name;}else{node.hidden=true;label.textContent='No counterpart yet';}
}
async function openSource(id){
 const record=photoObjects[id];if(!record)return;
 const ticket=++sourceTicket;sourceId=id;sourcePhoto=null;selectSource(null);
 $('source-title').textContent=itemMap.get(id).title;$('source-counter').textContent=record.objects.length+' objects';
 $('source-loading').hidden=false;$('source-loading').textContent='Loading photograph and cutouts…';
 $('source-canvas').setAttribute('aria-busy','true');
 $('source-objects').innerHTML='';
 $('source-hint').textContent='Loading isolated buildings and signs…';
 for(const b of $('material-list').querySelectorAll('[data-asset]'))b.setAttribute('aria-pressed',String(b.dataset.asset===id));
 try{
  const image=await new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>resolve(i);i.onerror=()=>reject(Error('Source photograph could not load.'));i.src=record.original;});
  if(ticket!==sourceTicket){image.src='';return;}
  const scale=Math.min(1,1280/Math.max(image.naturalWidth,image.naturalHeight));
  sourceCanvas.width=Math.round(image.naturalWidth*scale);sourceCanvas.height=Math.round(image.naturalHeight*scale);
  sourcePhoto=document.createElement('canvas');sourcePhoto.width=sourceCanvas.width;sourcePhoto.height=sourceCanvas.height;
  sourcePhoto.getContext('2d').drawImage(image,0,0,sourcePhoto.width,sourcePhoto.height);image.src='';drawSource();
  const results=await Promise.allSettled(record.objects.map(o=>loadAsset(o.key)));
  if(ticket!==sourceTicket)return;
  const ready=record.objects.filter((o,i)=>results[i].status==='fulfilled');
  $('source-objects').innerHTML=ready.map(o=>'<button data-object="'+escape(o.key)+'" aria-pressed="false">'+escape(o.name)+'</button>').join('');
  $('source-hint').textContent=ready.length?'Click the visible surface of a building or sign. Red = selected; grey checkerboard = transparent.':'These saved cutouts could not load. Please choose another photo.';
  $('source-loading').hidden=true;$('source-canvas').setAttribute('aria-busy','false');pruneAssets();
 }catch(e){if(ticket!==sourceTicket)return;$('source-loading').textContent=e.message;$('source-hint').textContent='Choose another photo, or check that the original analysis folders are available.';}
}
function sourcePoint(e){
 const b=sourceCanvas.getBoundingClientRect(),scale=Math.min(b.width/sourceCanvas.width,b.height/sourceCanvas.height);
 const w=sourceCanvas.width*scale,h=sourceCanvas.height*scale,x=e.clientX-b.left-(b.width-w)/2,y=e.clientY-b.top-(b.height-h)/2;
 if(x<0||y<0||x>w||y>h)return null;
 const r=photoObjects[sourceId];return{x:x/w*r.width,y:y/h*r.height};
}
function sourceHit(p){
 const record=photoObjects[sourceId];if(!record||!p)return null;
 const candidates=record.objects.filter(o=>{
  const [x0,y0,x1,y1]=o.bbox,image=assets.get(o.key);
  if(p.x<x0||p.x>=x1||p.y<y0||p.y>=y1||!image||image instanceof Promise)return false;
  const x=Math.min(image.width-1,Math.floor((p.x-x0)/(x1-x0)*image.width)),y=Math.min(image.height-1,Math.floor((p.y-y0)/(y1-y0)*image.height));
  return image.getContext('2d').getImageData(x,y,1,1).data[3]>64;
 });
 candidates.sort((a,b)=>(a.pixels||1e10)-(b.pixels||1e10));return candidates[0]||null;
}
sourceCanvas.addEventListener('click',e=>{
 if($('source-canvas').getAttribute('aria-busy')==='true')return;
 const p=sourcePoint(e);if(!p)return;
 let o=sourceHit(p);
 // Allow two display pixels of tolerance for thin lattice and neon edges.
 if(!o){const b=sourceCanvas.getBoundingClientRect(),r=photoObjects[sourceId],s=Math.min(b.width/sourceCanvas.width,b.height/sourceCanvas.height),radius=Math.min(16,2*r.width/(sourceCanvas.width*s));for(let t=radius/2;t<=radius&&!o;t+=radius/2)for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1],[.7,.7],[-.7,.7],[.7,-.7],[-.7,-.7]]){o=sourceHit({x:p.x+dx*t,y:p.y+dy*t});if(o)break;}}
 selectSource(o?.key||null);sourceCanvas.focus({preventScroll:true});
 if(!o)$('source-hint').textContent='No saved building or sign at this point. Click its visible surface, or choose an object below. You can refine its edge with the eraser after pasting.';
});
$('source-objects').addEventListener('click',e=>{const b=e.target.closest('[data-object]');if(b){selectSource(b.dataset.object);sourceCanvas.focus({preventScroll:true});}});
async function copySculpturePart(partId){
 if(previewState||!sculpture.has(partId))return;const part=sculpture.parts.find(p=>p.id===partId),c=sculpture.partCanvas(partId);
 clipboard={kind:'sculpture',partId};$('use-sculpture-fragment').disabled=false;
 $('sculpture-copy-status').textContent='Copied. Press Ctrl+V to paste on the sculpture board.';message(part.name+' copied without its background. Press Ctrl+V.');
 try{if(navigator.clipboard?.write&&window.ClipboardItem){const png=new Promise(resolve=>c.toBlob(resolve,'image/png'));await navigator.clipboard.write([new ClipboardItem({'image/png':png,'text/plain':new Blob([JSON.stringify({format:'borrowed-worlds-sculpture',partId})],{type:'text/plain'})})]);}}catch{}
}
async function copySelection(){
 const layer=selectionOrigin==='board'?active():null;
 const key=layer?keyFor(layer):sourceSelection;
 if(!key||!objectMap.has(key)){message('First click a building or sign in the large image on the left.');return;}
 const c=layer?editingRaster(layer):assets.get(key);if(!c||c instanceof Promise)return;
 clipboard={key,strokes:layer?JSON.parse(JSON.stringify(layer.strokes)):[],...(layer?{vaPartId:layer.vaPartId,vaRotation:layer.vaRotation||0,rotation:layer.rotation||0,flipX:!!layer.flipX,flipY:!!layer.flipY,w:layer.w,h:layer.h,cityRotation:layer.cityRotation||0,basis:layer.basis||'city'}:{})};
 $('paste-object').disabled=false;
 $('copy-status').textContent='Copied. Press Ctrl+V to paste on the board.';
 message(objectMap.get(key).name+' copied without its background. Press Ctrl+V.');
 try{
  if(navigator.clipboard?.write&&window.ClipboardItem){
   const png=new Promise(resolve=>c.toBlob(resolve,'image/png'));
   await navigator.clipboard.write([new ClipboardItem({'image/png':png,'text/plain':new Blob([JSON.stringify({format:'borrowed-worlds-object',key})],{type:'text/plain'})})]);
  }
 }catch{ /* The in-page clipboard still works when browser OS clipboard access is unavailable. */ }
}
async function pasteSelection(){
 if(previewState)return;
 if(clipboard?.kind==='sculpture'){if(doc.editingSurface!=='sculpture'){message('Switch to Sculpture → City to paste this sculpture fragment.');return;}await addSculpturePart(clipboard.partId);return;}
 if(!clipboard){message('Select a fragment on the left and press Ctrl+C first.');return;}
 await addAsset(clipboard.key,null,clipboard.strokes,clipboard);
}
$('copy-object').addEventListener('click',()=>{selectionOrigin='source';copySelection();});
$('paste-object').addEventListener('click',pasteSelection);
$('cutout-preview').addEventListener('dragstart',e=>{
 if(!sourceSelection)return;e.dataTransfer.setData('application/x-borrowed-worlds-asset',sourceSelection);e.dataTransfer.setData('text/plain',sourceSelection);e.dataTransfer.effectAllowed='copy';
});
document.addEventListener('copy',e=>{
 if(previewState)return;
 if($('parts-dialog').open&&sculpture.pickerPurpose()==='add'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)){const partId=sculpture.selectedPart();if(sculpture.has(partId)){e.preventDefault();e.clipboardData?.setData('text/plain',JSON.stringify({format:'borrowed-worlds-sculpture',partId}));copySculpturePart(partId);}return;}
 if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName))return;
 const key=selectionOrigin==='board'?keyFor(active()||{}):sourceSelection;
 if(!objectMap.has(key))return;
 e.preventDefault();e.clipboardData?.setData('text/plain',JSON.stringify({format:'borrowed-worlds-object',key}));copySelection();
});
document.addEventListener('paste',e=>{
 if(previewState)return;
 if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName))return;
 let ref;try{ref=JSON.parse(e.clipboardData?.getData('text/plain')||'null');}catch{}
 if(ref?.format==='borrowed-worlds-sculpture'&&sculpture.has(ref.partId)){e.preventDefault();clipboard={kind:'sculpture',partId:ref.partId};pasteSelection();}
 else if(ref?.format==='borrowed-worlds-object'&&objectMap.has(ref.key)){e.preventDefault();if(clipboard?.key!==ref.key)clipboard={key:ref.key,strokes:[]};$('paste-object').disabled=false;pasteSelection();}
 else if(clipboard){e.preventDefault();pasteSelection();}
});


$('rotation-control').addEventListener('input',()=>rotateSelection(Number($('rotation-control').value)));
$('rotation-control').addEventListener('change',()=>commit());
$('rotation-reset').addEventListener('click',()=>{rotateSelection(0);commit();});
$('rotation-number').addEventListener('input',()=>{const value=$('rotation-number').valueAsNumber;if(Number.isFinite(value))rotateSelection(Math.max(-180,Math.min(180,value)));});
$('rotation-number').addEventListener('change',()=>commit());
for(const [id,key]of [['flip-horizontal','flipX'],['flip-vertical','flipY']])$(id).addEventListener('click',()=>mirrorSelection(key));
const materialDialog=$('material-dialog');
function openMaterials(){if(doc.editingSurface==='sculpture'){sculpture.openPicker('add');return;}openCityPicker('add');}
function openCityPicker(purpose){cityPickerPurpose=purpose;document.querySelector('.material-help').textContent=purpose==='counterpart'?'Choose a city photo, select a building or sign, then click Use this city counterpart.':'Choose a photo below. Click a building or sign in the large image, then Ctrl+C → Ctrl+V.';$('apply-city-counterpart').hidden=purpose!=='counterpart';$('copy-object').hidden=purpose==='counterpart';$('paste-object').hidden=purpose==='counterpart';updateCityMatch();if(!materialDialog.open)materialDialog.showModal();}
$('apply-city-counterpart').addEventListener('click',()=>applyCityCounterpart(sourceSelection));
$('city-part-select').addEventListener('change',()=>applyCityCounterpart($('city-part-select').value));
$('browse-parts').addEventListener('click',()=>{if(doc.editingSurface==='sculpture')openCityPicker('counterpart');});
$('swap-direction').addEventListener('click',()=>{if(gesture)return;doc.editingSurface=doc.editingSurface==='sculpture'?'city':'sculpture';selectedIds=new Set(selected?[selected]:[]);groupBox=null;setTool('move');commit();message(doc.editingSurface==='sculpture'?'Compose sculpture fragments on the left. Las Vegas follows on the right and becomes the 3D input.':'Compose Las Vegas fragments on the left. V&A follows on the right and becomes the 3D input.');});
$('open-materials').addEventListener('click',openMaterials);$('empty-choose-materials').addEventListener('click',openMaterials);$('close-materials').addEventListener('click',()=>materialDialog.close());
const panels=[['toggle-city','city-panel'],['toggle-sculpture','sculpture-panel'],['toggle-model','model-panel']];
function syncPanels(){
 const count=['city-panel','sculpture-panel'].filter(id=>!$(id).hidden).length;
 $('studio-workspace').classList.toggle('single-panel',count===1);$('studio-workspace').hidden=count===0;
 for(const [button,id]of panels)$(button).setAttribute('aria-pressed',String(!$(id).hidden));
 try{const views=previewState?previewState.panels:Object.fromEntries(panels.map(([,id])=>[id,!$(id).hidden]));localStorage.setItem('borrowed-worlds-studio-panels-v2',JSON.stringify(views));}catch{}
 schedule();window.dispatchEvent(new Event('resize'));
}
for(const [button,id]of panels)$(button).addEventListener('click',()=>{$(id).hidden=!$(id).hidden;syncPanels();if(id==='model-panel'&&!$(id).hidden)$(id).scrollIntoView({behavior:'smooth',block:'start'});});
$('generate-model').addEventListener('click',()=>{$('model-panel').hidden=false;syncPanels();$('model-panel').scrollIntoView({behavior:'smooth',block:'start'});});
function syncSavedPreview(){
 const active=!!previewState;$('return-working').hidden=!active;$('saved-composition-banner').hidden=!active;
 $('studio-workspace').inert=active;document.querySelector('#layer-details .layer-panel').inert=active;
 for(const id of ['open-materials','swap-direction','clear-workspace'])$(id).disabled=active;
 if(active)$('generate-model').disabled=true;
 document.documentElement.dataset.savedPreview=String(active);
}
async function cancelSavedPreview(){
 if(!previewState)return;const snapshot=previewState,ticket=++previewRevision;restoreEpoch++;previewState=null;restoring=false;
 doc=snapshot.doc;history=snapshot.history;historyAt=snapshot.historyAt;selected=snapshot.selected;selectedIds=new Set(snapshot.selectedIds);groupBox=snapshot.groupBox;clipboard=snapshot.clipboard;selectionOrigin=snapshot.selectionOrigin;rasters.clear();
 for(const [,id]of panels)$(id).hidden=!snapshot.panels[id];setTool(snapshot.tool);syncPanels();renderLayers();syncSavedPreview();queueSave();
 await reconstruction.restoreCaptured(snapshot.model);
 if(ticket!==previewRevision)return;
 if(!$('studio-workspace').hidden)$('studio-workspace').scrollIntoView({behavior:'smooth',block:'start'});
 message('Back to your working collage. Your progress is unchanged.');
}
async function openSavedPreview(id,direction=0){
 if(gesture){message('Finish the current drag before opening a saved model.');return;}
 const ticket=++previewRevision;restoreEpoch++;restoring=true;
 if(!previewState)previewState={doc:structuredClone(doc),history:history.slice(),historyAt,selected,selectedIds:[...selectedIds],groupBox:structuredClone(groupBox),clipboard,selectionOrigin,tool,panels:Object.fromEntries(panels.map(([,id])=>[id,!$(id).hidden])),model:reconstruction.capture()};
 for(const d of document.querySelectorAll('dialog[open]'))d.close();
 $('saved-composition-banner').textContent='Opening a saved composition. Your working collage is kept.';syncSavedPreview();reconstruction.beginBrowse();
 try{
  const entry=await SavedSculptures.get(id);if(ticket!==previewRevision)return;if(!entry)throw Error('This saved model was removed.');
  // Only this studio's recipes may replace its boards. Shared exhibition models
  // still open in this viewer while the current collage stays intact.
  const candidate=entry.composition?.format==='borrowed-worlds-collage'?validate(entry.composition):null;
  await reconstruction.prepareSaved(entry,direction);if(ticket!==previewRevision)return;
  for(const key of new Set((candidate?.layers||[]).map(keyFor))){await loadAsset(key);if(ticket!==previewRevision)return;}
  await reconstruction.transitionOut(direction);if(ticket!==previewRevision)return;reconstruction.suspend(true);
  if(candidate){doc=candidate;selected=null;selectedIds.clear();groupBox=null;rasters.clear();
   for(const [,panel]of panels)$(panel).hidden=false;
  }else $('model-panel').hidden=false;
  syncPanels();renderLayers();syncSavedPreview();
  await reconstruction.openSaved(entry,direction);if(ticket!==previewRevision)return;
  $('saved-composition-banner').textContent=(candidate?'Saved composition / ':'Saved model / ')+entry.title+' — Return to work to resume your current collage.';
  if(!direction)$('model-panel').scrollIntoView({behavior:'smooth',block:'start'});
 }catch(error){if(ticket===previewRevision){await cancelSavedPreview();message(error.message);}}
 finally{if(ticket===previewRevision)restoring=false;}
}
$('return-working').addEventListener('click',cancelSavedPreview);
window.addEventListener('saved-sculpture-open',e=>openSavedPreview(e.detail.id,e.detail.direction||0));

try{const views=JSON.parse(localStorage.getItem('borrowed-worlds-studio-panels-v2')||'null');if(views)for(const [,id]of panels)if(typeof views[id]==='boolean')$(id).hidden=!views[id];}catch{}syncPanels();

window.CollageStudio=Object.freeze({isSavedPreview:()=>!!previewState,cancelSavedPreview,openSavedPreview,getGenerated3DState:()=>reconstruction.state(),getEditingSurface:()=>doc.editingSurface||'city',getEditingBounds:id=>{const l=doc.layers.find(l=>l.id===id);return l?editingBounds(l):null;},getCityBounds:id=>{const l=doc.layers.find(l=>l.id===id);return l?cityBounds(l):null;},getCanvasSize:()=>({width:W,height:H}),recommendShape:(width,height,object={})=>sculpture.recommend({id:'shape-probe',sourceId:'shape-probe',w:width,h:height},object),getGeneratedModel:()=>reconstruction.getRecord(),sculptureParts:()=>sculpture.parts,linkedLayers:()=>doc.layers.map(l=>sculpture.layerInfo(l)),getSculpturePixel:(id,u,v)=>{const l=doc.layers.find(l=>l.id===id);return l?sculpture.pixel(l,u,v):null;},getDocument:()=>JSON.parse(serial()),sourcePhoto:()=>sourceId,sourceSelection:()=>sourceSelection,sourceObjects:()=>photoObjects[sourceId]?.objects||[],sourceHit:(x,y)=>sourceHit({x,y})?.key||null,selectedLayer:()=>selected,selectedLayers:()=>[...selectedIds],selectionBounds:()=>structuredClone(selectionBox()),materialIds:()=>materials.map(i=>i.id),getLayerPixel:(id,u,v)=>{const l=doc.layers.find(l=>l.id===id),c=l&&raster(l);return c?Array.from(c.getContext('2d').getImageData(Math.max(0,Math.min(c.width-1,Math.floor(u*c.width))),Math.max(0,Math.min(c.height-1,Math.floor(v*c.height))),1,1).data):null;}});
history=[serial()];historyAt=0;renderMaterials();renderLayers();if(materials.length)openSource(materials[0].id);
try{
 const bootRestoreEpoch=restoreEpoch,request=indexedDB.open('borrowed-worlds-local-collage',1);request.onupgradeneeded=()=>request.result.createObjectStore('drafts');
 request.onsuccess=()=>{db=request.result;const read=db.transaction('drafts').objectStore('drafts').get('current');read.onsuccess=()=>{if(restoreEpoch!==bootRestoreEpoch){queueSave();return;}if(read.result){if(doc.layers.length){queueSave();return;}restore(read.result).catch(e=>message('Saved draft could not be restored. '+e.message));}else $('save-status').textContent='Your draft stays on this device.';};};
 request.onerror=()=>{$('save-status').textContent='Use Save project to keep your draft.';};
}catch{$('save-status').textContent='Use Save project to keep your draft.';}
})();

