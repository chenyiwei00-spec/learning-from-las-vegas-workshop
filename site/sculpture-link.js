/* Real V&A photographic fragments; shape-based, editable correspondences. */
(()=>{
'use strict';
const groups={head:'Head',torso:'Torso',arm:'Arm',leg:'Leg',hand:'Hand',foot:'Foot',wing:'Wing',neck:'Neck',shoulder:'Shoulder',drapery:'Drapery',whole:'Whole figure',face:'Face'};
const escape=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const hash=s=>[...s].reduce((n,c)=>(Math.imul(n,31)+c.charCodeAt(0))>>>0,17);
function shape(c){
 const {width:w,height:h}=c,d=c.getContext('2d').getImageData(0,0,w,h).data,step=Math.max(1,Math.ceil(Math.sqrt(w*h/160000)));let n=0,sx=0,sy=0,sxx=0,syy=0,sxy=0;
 for(let y=0;y<h;y+=step)for(let x=0;x<w;x+=step)if(d[(y*w+x)*4+3]>64){n++;sx+=x;sy+=y;sxx+=x*x;syy+=y*y;sxy+=x*y;}
 if(!n)return{aspectRatio:w/h,fillRatio:0,elongation:1};
 const xx=sxx/n-(sx/n)**2,yy=syy/n-(sy/n)**2,xy=sxy/n-sx*sy/n/n,t=xx+yy,r=Math.sqrt((xx-yy)**2+4*xy*xy);
 return{aspectRatio:w/h,fillRatio:Math.min(1,n*step*step/w/h),elongation:Math.min(30,Math.sqrt(Math.max(1,(t+r)/Math.max(.1,t-r))))};
}
function createMatcher(parts,getLayers=()=>[],getMetric=()=>null){
 return function(layer,object,measured){
  const b=object?.bbox,a0=b?(b[2]-b[0])/(b[3]-b[1]):layer.w/layer.h;
  const m=measured||{aspectRatio:a0,fillRatio:.6,elongation:Math.max(a0,1/a0)},a=m.aspectRatio,long=Math.max(a,1/a)>=2||m.elongation>=3.2;
  let preferred=long?(a<1?'leg':'arm'):(a>=.72&&a<=1.35?'head':'torso');
  if(long&&/tower|spire|obelisk/i.test(object?.name||''))preferred='arm';
  const usage=new Map();for(const l of getLayers())if(l.id!==layer.id)usage.set(l.vaPartId,(usage.get(l.vaPartId)||0)+1);
  let best=null;
  for(const p of parts){
   const pm=getMetric(p.id)||{aspectRatio:p.width/p.height,fillRatio:.6,elongation:Math.max(p.width/p.height,p.height/p.width)};
   let penalty=p.kind===preferred?0:long&&['arm','leg'].includes(p.kind)?.15:!long&&preferred==='head'&&p.kind==='hand'?.8:!long&&preferred==='torso'&&p.kind==='head'?.6:1.7;
   for(const angle of [0,90]){
    const aspect=angle?1/pm.aspectRatio:pm.aspectRatio;
    const score=penalty+Math.abs(Math.log(aspect/a))*.8+Math.abs(pm.fillRatio-m.fillRatio)*.3+Math.abs(Math.log(pm.elongation/m.elongation))*.22+(angle?.035:0)+(usage.get(p.id)||0)*.22+(hash(layer.sourceId+'::'+(layer.objectId||'')+'::'+p.id)%101)/2500;
    if(!best||score<best.score)best={id:p.id,angle,kind:p.kind,score,shape:m,reason:long?(a<1?'A narrow vertical silhouette':'A long horizontal silhouette'):preferred==='head'?'A compact, near-square silhouette':'A broader rectangular silhouette'};
   }
  }
  return best;
 };
}
async function create(options){
 const data=await fetch('sculpture-parts.json').then(r=>{if(!r.ok)throw Error('The V&A fragment library could not load.');return r.json();});
 const parts=data.parts,byId=new Map(parts.map(p=>[p.id,p])),images=new Map(),rasters=new Map(),metrics=new Map(),cityMetrics=new WeakMap();
 const $=id=>document.getElementById(id),canvas=$('sculpture-canvas'),ctx=canvas.getContext('2d');
 for(const p of parts)if(!groups[p.kind])groups[p.kind]=p.kind.charAt(0).toUpperCase()+p.kind.slice(1);
 function cityShape(layer,object,c){
  if(c){if(!cityMetrics.has(c))cityMetrics.set(c,shape(c));return cityMetrics.get(c);}
  const b=object?.bbox,aspect=b?(b[2]-b[0])/(b[3]-b[1]):layer.w/layer.h;
  return{aspectRatio:aspect,fillRatio:.6,elongation:Math.max(aspect,1/aspect)};
 }
 const matchShape=createMatcher(parts,()=>options.getDocument().layers,id=>metrics.get(id));
 function recommend(layer,object,c){return matchShape(layer,object,cityShape(layer,object,c));}
 function assign(layer,object,c){
  if(!byId.has(layer.vaPartId)){const match=recommend(layer,object,c);layer.vaPartId=match.id;layer.vaRotation=match.angle;}
  return layer.vaPartId;
 }
 async function load(id){
  if(images.has(id))return images.get(id);
  const p=byId.get(id),image=await new Promise((resolve,reject)=>{const i=new Image();i.decoding='async';i.onload=()=>resolve(i);i.onerror=()=>reject(Error('V&A fragment could not load: '+p.name));i.src=p.url;});
  const c=document.createElement('canvas');c.width=image.naturalWidth;c.height=image.naturalHeight;c.getContext('2d').drawImage(image,0,0);image.src='';images.set(id,c);metrics.set(id,shape(c));return c;
 }
 function raster(l){
  const image=images.get(l.vaPartId);if(!image)return null;
  const last=l.strokes.at(-1),stamp=l.strokes.length+':'+(last?.points.length||0),angle=l.vaRotation===90?90:0;let entry=rasters.get(l.id);
  if(!entry||entry.partId!==l.vaPartId||entry.angle!==angle||entry.strokes!==l.strokes||entry.stamp!==stamp){
   const c=entry?.canvas||document.createElement('canvas');c.width=angle?image.height:image.width;c.height=angle?image.width:image.height;const g=c.getContext('2d');
   g.save();if(angle){g.translate(c.width,0);g.rotate(Math.PI/2);}g.drawImage(image,0,0);g.restore();
   for(const stroke of l.strokes){const first=stroke.points[0];if(!first)continue;g.globalCompositeOperation='destination-out';g.lineWidth=stroke.radius*c.width*2;g.lineCap='round';g.lineJoin='round';g.beginPath();
    if(stroke.points.length===1){g.arc(first[0]*c.width,first[1]*c.height,stroke.radius*c.width,0,Math.PI*2);g.fill();}
    else{g.moveTo(first[0]*c.width,first[1]*c.height);for(const p of stroke.points.slice(1))g.lineTo(p[0]*c.width,p[1]*c.height);g.stroke();}
   }g.globalCompositeOperation='source-over';entry={canvas:c,partId:l.vaPartId,angle,strokes:l.strokes,stamp};rasters.set(l.id,entry);
  }return entry.canvas;
 }
 function bounds(l){
  const image=raster(l);if(!image)return null;const s=Math.min(l.w/image.width,l.h/image.height),w=image.width*s,h=image.height*s;
  return{x:l.x+(l.w-w)/2,y:l.y+(l.h-h)/2,w,h};
 }
 function drawDocument(g,doc){
  g.clearRect(0,0,doc.width,doc.height);if(doc.background==='paper'){g.fillStyle='#fff';g.fillRect(0,0,doc.width,doc.height);}
  for(const l of doc.layers){const image=raster(l),b=bounds(l);if(!image||!b)continue;g.save();g.translate(l.x+l.w/2,l.y+l.h/2);g.rotate((l.rotation||0)*Math.PI/180);g.scale(l.flipX?-1:1,l.flipY?-1:1);g.drawImage(image,b.x-l.x-l.w/2,b.y-l.y-l.h/2,b.w,b.h);g.restore();}
 }
 function draw(doc,selected,city=false){if(city)options.drawCity(ctx,doc);else drawDocument(ctx,doc);const ids=new Set(Array.isArray(selected)?selected:[selected]);for(const l of doc.layers.filter(l=>ids.has(l.id))){const b=city?options.getCityBounds(l):bounds(l);if(l&&b){ctx.save();ctx.translate(l.x+l.w/2,l.y+l.h/2);ctx.rotate((l.rotation||0)*Math.PI/180);ctx.strokeStyle='#d41424';ctx.lineWidth=1.2*doc.width/(canvas.clientWidth||doc.width);ctx.strokeRect(b.x-l.x-l.w/2,b.y-l.y-l.h/2,b.w,b.h);ctx.restore();}}$('sculpture-count').textContent=doc.layers.length+' fragments';$('sculpture-empty').hidden=!!doc.layers.length;$('export-sculpture').disabled=!doc.layers.length;const keep=new Set(doc.layers.map(l=>l.id));for(const id of rasters.keys())if(!keep.has(id))rasters.delete(id);}
 const select=$('va-part-select');
 select.innerHTML='<option value="">Choose a linked city fragment first</option>'+Object.entries(groups).map(([kind,label])=>'<optgroup label="'+escape(label)+'">'+parts.filter(p=>p.kind===kind).map(p=>'<option value="'+escape(p.id)+'">'+escape(p.name)+'</option>').join('')+'</optgroup>').join('');
 function render(layer){
  const reverse=options.getSurface()==='sculpture';$('browse-parts').textContent=reverse?'Choose city counterpart ↗':'Choose counterpart ↗';
  const part=layer&&byId.get(layer.vaPartId);select.disabled=!layer;select.value=part?.id||'';$('pair-empty').hidden=!!part;$('pair-detail').hidden=!part;$('rematch-shape').disabled=!layer;
  $('rotation-control').disabled=!layer;$('rotation-control').value=layer?.rotation||0;$('rotation-value').textContent=(layer?.rotation||0)+'°';$('rotation-reset').disabled=!layer||!layer.rotation;
  if(part){$('linked-va-preview').src=part.url;$('linked-va-title').textContent=part.name;const city=options.getCityInfo(layer),reverse=options.getSurface()==='sculpture';$('linked-va-kind').textContent=reverse?city.object?.name||'Las Vegas':groups[part.kind];$('linked-va-source').textContent='Source photograph ↗';$('linked-va-source').href=reverse?city.sourceImage:part.sourceImage;$('linked-city-preview').src=city.image;$('linked-city-title').textContent=city.name;
   const a=layer.w/layer.h,description=Math.max(a,1/a)>=2?(a<1?'Narrow vertical':'Long horizontal'):a>=.72&&a<=1.35?'Compact, near-square':'Broad rectangular';
   $('pair-reason').textContent=description+' ↔ '+groups[part.kind].toLowerCase()+(layer.vaRotation===90?' · turned 90°':'');
  }
 }
 select.addEventListener('change',()=>{const l=options.getActive();if(!l||!byId.has(select.value))return;l.vaPartId=select.value;l.vaRotation=0;options.commit();options.message('V&A fragment changed. Both collages remain connected.');});
 $('rematch-shape').addEventListener('click',()=>{if(options.getSurface()==='sculpture'){options.rematchCity();return;}const l=options.getActive();if(!l)return;const city=options.getCityInfo(l),m=recommend(l,city.object,city.canvas);l.vaPartId=m.id;l.vaRotation=m.angle;options.commit();options.message(m.reason+' matched to '+groups[m.kind].toLowerCase()+' using masked proportions and outline.');});
 $('export-sculpture').addEventListener('click',()=>{const doc=options.getDocument(),c=document.createElement('canvas');c.width=doc.width;c.height=doc.height;if(options.getSurface()==='sculpture')options.drawCity(c.getContext('2d'),doc);else drawDocument(c.getContext('2d'),doc);c.toBlob(blob=>{if(!blob)return;const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=options.getSurface()==='sculpture'?'borrowed-worlds-city-collage.png':'borrowed-worlds-sculpture-collage.png';a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);},'image/png');});
 canvas.addEventListener('click',e=>{
  const doc=options.getDocument(),r=canvas.getBoundingClientRect(),p={x:(e.clientX-r.left)*doc.width/r.width,y:(e.clientY-r.top)*doc.height/r.height};
  for(const l of [...doc.layers].reverse()){const city=options.getSurface()==='sculpture',b=city?options.getCityBounds(l):bounds(l),c=city?options.getCityRaster(l):raster(l);if(!b||!c)continue;const a=-(l.rotation||0)*Math.PI/180,dx=p.x-l.x-l.w/2,dy=p.y-l.y-l.h/2;let x=dx*Math.cos(a)-dy*Math.sin(a),y=dx*Math.sin(a)+dy*Math.cos(a);if(l.flipX)x=-x;if(l.flipY)y=-y;x+=l.x+l.w/2;y+=l.y+l.h/2;const u=(x-b.x)/b.w,v=(y-b.y)/b.h;
   if(u>=0&&v>=0&&u<1&&v<1&&c.getContext('2d').getImageData(Math.floor(u*c.width),Math.floor(v*c.height),1,1).data[3]>32){options.select(l.id,e.shiftKey);return;}
  }
 });


 const picker=$('parts-dialog'),search=$('parts-query'),filter=$('parts-kind'),sourcePreview=$('sculpture-source-canvas'),sourceG=sourcePreview.getContext('2d');
 filter.innerHTML='<option value="all">All body parts</option>'+Object.entries(groups).filter(([kind])=>parts.some(p=>p.kind===kind)).map(([kind,label])=>'<option value="'+escape(kind)+'">'+escape(label)+'</option>').join('');
 let partPage=1,pickerPurpose='counterpart',pickerSelected=null,sourcePhoto=null,sourceUrl='',sourceTicket=0;
 function drawSourcePreview(){
  sourceG.clearRect(0,0,sourcePreview.width,sourcePreview.height);if(!sourcePhoto)return;sourceG.drawImage(sourcePhoto,0,0);
  const part=byId.get(pickerSelected),image=part&&images.get(part.id);if(!part||!image)return;
  const tint=document.createElement('canvas');tint.width=image.width;tint.height=image.height;const g=tint.getContext('2d');g.drawImage(image,0,0);g.globalCompositeOperation='source-in';g.fillStyle='rgba(212,20,36,.42)';g.fillRect(0,0,tint.width,tint.height);
  const [x0,y0,x1,y1]=part.bbox,[w,h]=part.sourceSize,sx=sourcePreview.width/w,sy=sourcePreview.height/h;sourceG.drawImage(tint,x0*sx,y0*sy,(x1-x0)*sx,(y1-y0)*sy);
 }
 function renderMatch(){
  const part=byId.get(pickerSelected),node=$('sculpture-picker-match-image'),label=$('sculpture-picker-match-title');node.hidden=!part;
  if(!part){node.removeAttribute('src');label.textContent='Select a fragment';return;}
  let match;
  if(pickerPurpose==='counterpart'&&options.getActive()){const city=options.getCityInfo(options.getActive());match={image:city.image,title:city.name};}
  else match=options.previewCity(part.id);
  node.src=match.image;node.style.transform=match.rotation?'rotate(90deg)':'';label.textContent=match.title;label.title=match.title;
 }
 async function previewPart(id){
  const part=byId.get(id);if(!part)return;pickerSelected=id;const ticket=++sourceTicket;
  $('sculpture-selected-image').src=part.url;$('sculpture-selected-image').hidden=false;$('sculpture-selected-placeholder').hidden=true;
  $('sculpture-selected-title').textContent=part.name;$('copy-sculpture-fragment').disabled=false;$('use-sculpture-fragment').disabled=pickerPurpose==='add'?options.getClipboard()?.kind!=='sculpture':!options.getActive();
  $('use-sculpture-fragment').innerHTML=pickerPurpose==='add'?'Paste to board <kbd>Ctrl V</kbd>':'Use counterpart →';
  $('sculpture-copy-status').textContent='Only this isolated fragment will be used.';renderMatch();
  $('sculpture-source-title').textContent=part.sourceFilename+' / '+(part.sourceTitle||'Sculpture photograph');
  const related=parts.filter(p=>p.sourceId===part.sourceId);$('sculpture-source-counter').textContent=related.length+' fragments';
  $('sculpture-source-objects').innerHTML=related.map(p=>'<button data-source-part="'+escape(p.id)+'" aria-pressed="'+(p.id===id)+'">'+escape(p.name)+'</button>').join('');
  for(const b of $('parts-grid').querySelectorAll('[data-part]'))b.setAttribute('aria-pressed',String(b.dataset.part===id));
  if(sourceUrl===part.sourceImage&&sourcePhoto){drawSourcePreview();return;}
  sourcePhoto=null;$('sculpture-source-loading').hidden=false;$('sculpture-source-loading').textContent='Loading source photograph…';
  try{
   const image=await new Promise((resolve,reject)=>{const i=new Image();i.decoding='async';i.onload=()=>resolve(i);i.onerror=()=>reject(Error('Source photograph could not load. The cutout is still available.'));i.src=part.sourceImage;});if(ticket!==sourceTicket)return;
   const scale=Math.min(1,1280/Math.max(image.naturalWidth,image.naturalHeight));sourcePreview.width=Math.round(image.naturalWidth*scale);sourcePreview.height=Math.round(image.naturalHeight*scale);
   sourcePhoto=document.createElement('canvas');sourcePhoto.width=sourcePreview.width;sourcePhoto.height=sourcePreview.height;sourcePhoto.getContext('2d').drawImage(image,0,0,sourcePhoto.width,sourcePhoto.height);sourceUrl=part.sourceImage;image.src='';drawSourcePreview();$('sculpture-source-loading').hidden=true;
  }catch(e){if(ticket===sourceTicket)$('sculpture-source-loading').textContent=e.message;}
 }
 function renderPicker(){
  const q=search.value.trim().toLowerCase(),kind=filter.value,layer=options.getActive(),rows=parts.filter(p=>(kind==='all'||p.kind===kind)&&[p.name,p.kind,p.sourceFilename].join(' ').toLowerCase().includes(q));
  $('parts-found').textContent=rows.length+' fragments';$('parts-empty').hidden=rows.length>0;
  $('parts-instruction').textContent=pickerPurpose==='add'?'Choose a fragment, inspect its source and city counterpart, then Ctrl+C → Ctrl+V.':'Choose a fragment, inspect its source, then click Use counterpart.';
  $('copy-sculpture-fragment').hidden=pickerPurpose!=='add';$('use-sculpture-fragment').innerHTML=pickerPurpose==='add'?'Paste to board <kbd>Ctrl V</kbd>':'Use counterpart →';
  const perPage=12,pages=Math.max(1,Math.ceil(rows.length/perPage));partPage=Math.min(partPage,pages);const numbers=new Set([1,pages]);for(let n=Math.max(1,partPage-1);n<=Math.min(pages,partPage+1);n++)numbers.add(n);let prev=0;
  $('parts-pages').innerHTML=[...numbers].sort((a,b)=>a-b).map(n=>{const gap=prev&&n-prev>1?'<span>…</span>':'';prev=n;return gap+'<button data-page="'+n+'" '+(n===partPage?'aria-current="page"':'')+' aria-label="Fragment page '+n+'">'+n+'</button>';}).join('');
  $('parts-prev').disabled=partPage<=1;$('parts-next').disabled=partPage>=pages;
  $('parts-grid').innerHTML=rows.slice((partPage-1)*perPage,partPage*perPage).map(p=>'<button class="part-card" data-part="'+escape(p.id)+'" aria-pressed="'+(pickerSelected===p.id)+'"><img src="'+escape(p.url)+'" alt="" loading="lazy"><span>'+escape(p.name)+'</span><small>'+escape(groups[p.kind])+' / '+escape(p.sourceFilename)+'</small></button>').join('');
 }
 function openPicker(purpose='counterpart'){
  pickerPurpose=purpose;$('parts-dialog').querySelector('.drawer-heading h2').textContent='FIND A FRAGMENT.';renderPicker();if(!picker.open)picker.showModal();
  const id=purpose==='counterpart'?options.getActive()?.vaPartId:pickerSelected||parts[0]?.id;if(id)previewPart(id);
 }
 $('browse-parts').addEventListener('click',()=>{if(options.getSurface()!=='sculpture')openPicker('counterpart');});
 $('close-parts').addEventListener('click',()=>picker.close());search.addEventListener('input',()=>{partPage=1;renderPicker();});filter.addEventListener('change',()=>{partPage=1;renderPicker();});
 $('parts-pages').addEventListener('click',e=>{const b=e.target.closest('[data-page]');if(b){partPage=Number(b.dataset.page);renderPicker();}});
 $('parts-prev').addEventListener('click',()=>{partPage--;renderPicker();});$('parts-next').addEventListener('click',()=>{partPage++;renderPicker();});
 $('parts-grid').addEventListener('click',e=>{const b=e.target.closest('[data-part]');if(b)previewPart(b.dataset.part);});
 $('sculpture-source-objects').addEventListener('click',e=>{const b=e.target.closest('[data-source-part]');if(b)previewPart(b.dataset.sourcePart);});
 sourcePreview.addEventListener('click',e=>{
  sourcePreview.focus({preventScroll:true});
  const selected=byId.get(pickerSelected);if(!sourcePhoto||!selected)return;const b=sourcePreview.getBoundingClientRect(),scale=Math.min(b.width/sourcePreview.width,b.height/sourcePreview.height),w=sourcePreview.width*scale,h=sourcePreview.height*scale,u=(e.clientX-b.left-(b.width-w)/2)/w,v=(e.clientY-b.top-(b.height-h)/2)/h;
  if(u<0||v<0||u>=1||v>=1)return;
  const hit=parts.filter(p=>{
   if(p.sourceId!==selected.sourceId)return false;const [x0,y0,x1,y1]=p.bbox,x=u*p.sourceSize[0],y=v*p.sourceSize[1],image=images.get(p.id);if(!image||x<x0||y<y0||x>=x1||y>=y1)return false;
   return image.getContext('2d').getImageData(Math.min(image.width-1,Math.floor((x-x0)/(x1-x0)*image.width)),Math.min(image.height-1,Math.floor((y-y0)/(y1-y0)*image.height)),1,1).data[3]>64;
  }).sort((a,b)=>(a.maskPixels||a.width*a.height)-(b.maskPixels||b.width*b.height))[0];
  if(hit)previewPart(hit.id);
 });
 $('use-sculpture-fragment').addEventListener('click',()=>{if(!pickerSelected)return;if(pickerPurpose==='add'){options.pastePart();return;}if(!options.getActive())return;select.value=pickerSelected;select.dispatchEvent(new Event('change'));picker.close();});
 $('copy-sculpture-fragment').addEventListener('click',()=>options.copyPart(pickerSelected));
 function clearPicker(){pickerSelected=null;sourceTicket++;sourcePhoto=null;sourceUrl='';sourceG.clearRect(0,0,sourcePreview.width,sourcePreview.height);$('sculpture-selected-image').hidden=true;$('sculpture-selected-placeholder').hidden=false;$('sculpture-selected-title').textContent='Select a fragment';$('use-sculpture-fragment').disabled=true;renderMatch();}

 await Promise.all(parts.map(p=>load(p.id)));
 $('part-library-count').textContent=parts.length+' parts · '+new Set(parts.map(p=>p.sourceId)).size+' photographs';
 return Object.freeze({parts,has:id=>byId.has(id),assign,recommend,draw,render,drawDocument,bounds,raster,openPicker,clearPicker,selectedPart:()=>pickerSelected,pickerPurpose:()=>pickerPurpose,partCanvas:id=>images.get(id),records:layers=>[...new Set(layers.map(l=>l.vaPartId))].map(id=>byId.get(id)).filter(Boolean),pixel:(l,u,v)=>{const c=raster(l);return c?Array.from(c.getContext('2d').getImageData(Math.max(0,Math.min(c.width-1,Math.floor(u*c.width))),Math.max(0,Math.min(c.height-1,Math.floor(v*c.height))),1,1).data):null;},layerInfo:l=>({layerId:l.id,partId:l.vaPartId,partName:byId.get(l.vaPartId)?.name,kind:byId.get(l.vaPartId)?.kind,sourceId:byId.get(l.vaPartId)?.sourceId,bounds:bounds(l),rotation:l.rotation||0,vaRotation:l.vaRotation||0,flipX:!!l.flipX,flipY:!!l.flipY})});
}
window.SculptureLink=Object.freeze({create,createMatcher,shape});
})();