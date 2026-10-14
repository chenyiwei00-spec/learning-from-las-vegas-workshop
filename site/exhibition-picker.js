/* The existing Las Vegas masks, selected by their alpha pixels in the source photo. */
(()=>{
'use strict';
const $=id=>document.getElementById(id),dialog=$('exhibition-materials'),source=$('exhibition-source-canvas'),ctx=source.getContext('2d'),cutout=$('exhibition-cutout-canvas');
let index=null,loading=null,rows=[],page=0,photoId=null,selection=null,photo=null,ticket=0,copied=null;
const rasters=new Map(),escape=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let objects=new Map();
function hint(s){$('exhibition-source-hint').textContent=s;}
async function library(){
 if(loading)return loading;
 loading=(async()=>{
  const response=await fetch('collage-objects.json');if(!response.ok)throw Error('The object library could not load.');
  index=(await response.json()).photos;
  if(!window.ARCHIVE_DATA)await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='catalog.js';script.onload=resolve;script.onerror=reject;document.head.append(script);});
  const vegas=new Set(window.ARCHIVE_DATA.items.filter(i=>i.type==='image'&&i.archiveKey==='las-vegas').map(i=>i.id));
  objects=new Map(Object.entries(index).filter(([id])=>vegas.has(id)).flatMap(([,p])=>p.objects.map(o=>[o.key,o])));
 })().catch(error=>{loading=null;throw error;});return loading;
}
function renderPhotos(){
 const query=$('exhibition-photo-query').value.trim().toLowerCase();
 rows=window.ARCHIVE_DATA.items.filter(i=>i.type==='image'&&i.archiveKey==='las-vegas'&&index[i.id]?.objects.length&&(!query||[i.title,i.description,...(i.tags||[])].join(' ').toLowerCase().includes(query)));
 const pages=Math.max(1,Math.ceil(rows.length/12));page=Math.max(0,Math.min(page,pages-1));
 $('exhibition-photo-grid').innerHTML=rows.slice(page*12,page*12+12).map(i=>'<button class="exhibition-photo-card" data-photo="'+escape(i.id)+'"><img loading="lazy" src="'+escape(i.thumbnail)+'" alt=""><span>'+escape(i.title)+'</span></button>').join('');
 $('exhibition-photo-page').textContent=rows.length?(page+1)+' / '+pages:'No matching photos';
 $('exhibition-photo-prev').disabled=page===0;$('exhibition-photo-next').disabled=page>=pages-1;
}
async function raster(url){
 const im=new Image();im.src=url;await im.decode();const c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;c.getContext('2d',{willReadFrequently:true}).drawImage(im,0,0);return c;
}
function drawSource(){
 ctx.clearRect(0,0,source.width,source.height);if(!photo)return;ctx.drawImage(photo,0,0);
 const o=objects.get(selection),im=rasters.get(selection);if(!o||!im)return;
 const tint=document.createElement('canvas');tint.width=im.width;tint.height=im.height;const g=tint.getContext('2d');g.drawImage(im,0,0);g.globalCompositeOperation='source-in';g.fillStyle='#bf422b70';g.fillRect(0,0,tint.width,tint.height);
 const r=index[photoId],[x0,y0,x1,y1]=o.bbox;ctx.drawImage(tint,x0/r.width*source.width,y0/r.height*source.height,(x1-x0)/r.width*source.width,(y1-y0)/r.height*source.height);
}
function select(key){
 selection=key;const im=rasters.get(key),o=objects.get(key),g=cutout.getContext('2d');g.clearRect(0,0,cutout.width,cutout.height);
 if(im){const s=Math.min((cutout.width-12)/im.width,(cutout.height-12)/im.height);g.drawImage(im,(cutout.width-im.width*s)/2,(cutout.height-im.height*s)/2,im.width*s,im.height*s);}
 $('exhibition-cutout-name').textContent=o?.name||'Select an object';
 $('exhibition-copy-object').disabled=!o;$('exhibition-paste-object').disabled=!o;
 for(const b of $('exhibition-source-objects').querySelectorAll('button'))b.setAttribute('aria-pressed',String(b.dataset.object===key));
 drawSource();hint(o?o.name+' selected without its background. Ctrl+C, then Ctrl+V.':'Click the visible surface of a building or sign.');
}
async function openPhoto(id){
 const version=++ticket;photoId=id;photo=null;rasters.clear();select(null);
 $('exhibition-photo-browser').hidden=true;$('exhibition-source').hidden=false;
 $('exhibition-source-title').textContent=rows.find(i=>i.id===id)?.title||'Las Vegas';
 source.setAttribute('aria-busy','true');$('exhibition-source-objects').innerHTML='';hint('Loading photo and transparent cutouts…');
 try{
  const r=index[id],im=await raster(r.original);if(version!==ticket)return;
  const scale=Math.min(1,1280/Math.max(im.width,im.height));source.width=Math.round(im.width*scale);source.height=Math.round(im.height*scale);
  photo=document.createElement('canvas');photo.width=source.width;photo.height=source.height;photo.getContext('2d').drawImage(im,0,0,photo.width,photo.height);drawSource();
  const results=await Promise.allSettled(r.objects.map(async o=>({o,c:await raster(o.url)})));if(version!==ticket)return;
  for(const result of results)if(result.status==='fulfilled')rasters.set(result.value.o.key,result.value.c);
  $('exhibition-source-objects').innerHTML=r.objects.filter(o=>rasters.has(o.key)).map(o=>'<button data-object="'+escape(o.key)+'" aria-pressed="false">'+escape(o.name)+'</button>').join('');
  hint(rasters.size?'Click an object in the photograph. The selected cutout excludes its background.':'Cutouts are unavailable. Install the team media pack or choose another photo.');
 }catch(error){if(version===ticket)hint(error.message);}
 finally{if(version===ticket)source.setAttribute('aria-busy','false');}
}
function hit(p){
 if(!p||!index?.[photoId])return null;
 return index[photoId].objects.filter(o=>{
  const [x0,y0,x1,y1]=o.bbox,c=rasters.get(o.key);if(!c||p.x<x0||p.x>=x1||p.y<y0||p.y>=y1)return false;
  const x=Math.floor((p.x-x0)/(x1-x0)*c.width),y=Math.floor((p.y-y0)/(y1-y0)*c.height);
  return c.getContext('2d').getImageData(x,y,1,1).data[3]>64;
 }).sort((a,b)=>(a.pixels||1e10)-(b.pixels||1e10))[0]||null;
}
source.onclick=e=>{
 if(source.getAttribute('aria-busy')==='true'||!photo)return;
 const b=source.getBoundingClientRect(),s=Math.min(b.width/source.width,b.height/source.height),w=source.width*s,h=source.height*s,r=index[photoId];
 const p={x:(e.clientX-b.left-(b.width-w)/2)/w*r.width,y:(e.clientY-b.top-(b.height-h)/2)/h*r.height};
 let o=hit(p);if(!o){const radius=Math.min(16,2*r.width/w);for(const [dx,dy]of [[1,0],[-1,0],[0,1],[0,-1]]){o=hit({x:p.x+dx*radius,y:p.y+dy*radius});if(o)break;}}
 select(o?.key||null);source.focus({preventScroll:true});
};
async function copyObject(){
 const o=objects.get(selection);if(!o)return;copied=o.key;hint('Copied. Ctrl+V pastes the isolated object on the board.');
 try{if(navigator.clipboard?.write&&window.ClipboardItem){const png=new Promise(resolve=>rasters.get(o.key).toBlob(resolve));await navigator.clipboard.write([new ClipboardItem({'image/png':png})]);}}catch{}
}
async function pasteObject(key=selection||copied){
 const o=objects.get(key);if(!o)return;try{await window.ExhibitionStudio.addCutout(o);dialog.close();$('exhibition-canvas').focus({preventScroll:true});}catch(error){hint(error.message);}
}
$('exhibition-choose').onclick=async()=>{
 try{await library();$('exhibition-source').hidden=true;$('exhibition-photo-browser').hidden=false;renderPhotos();dialog.showModal();}
 catch(error){$('exhibition-message').textContent=error.message||'Could not load the archive.';}
};
$('exhibition-close-materials').onclick=()=>dialog.close();
$('exhibition-source-back').onclick=()=>{ticket++;source.setAttribute('aria-busy','false');$('exhibition-source').hidden=true;$('exhibition-photo-browser').hidden=false;};
$('exhibition-photo-query').oninput=()=>{page=0;renderPhotos();};
$('exhibition-photo-prev').onclick=()=>{page--;renderPhotos();};$('exhibition-photo-next').onclick=()=>{page++;renderPhotos();};
$('exhibition-photo-grid').onclick=e=>{const card=e.target.closest('[data-photo]');if(card)openPhoto(card.dataset.photo);};
$('exhibition-source-objects').onclick=e=>{const b=e.target.closest('[data-object]');if(b)select(b.dataset.object);};
$('exhibition-copy-object').onclick=copyObject;$('exhibition-paste-object').onclick=()=>pasteObject();
document.addEventListener('keydown',e=>{
 if(e.target.closest('input,textarea,select'))return;const mod=e.ctrlKey||e.metaKey;
 if(!dialog.open&&mod&&e.key.toLowerCase()==='c'){copied=null;return;}
 if(dialog.open&&mod&&e.key.toLowerCase()==='c'&&selection){e.preventDefault();copyObject();}
 else if(mod&&e.key.toLowerCase()==='v'&&copied&&(dialog.open||$('exhibition-paper').contains(document.activeElement))){e.preventDefault();e.stopImmediatePropagation();pasteObject(copied);}
},true);
window.ExhibitionPicker=Object.freeze({load:library,photo:id=>index?.[id]||null,objects:()=>[...objects.values()],object:key=>objects.get(key)||null,openPhoto,select,hit,state:()=>({photoId,selection,ready:source.getAttribute('aria-busy')!=='true',photos:rows.length,cutouts:rasters.size})});
})();
