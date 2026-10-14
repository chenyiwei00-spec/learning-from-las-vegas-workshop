/* The same mask-shape matcher as Collage Studio, with only selected V&A images loaded. */
(()=>{
'use strict';
async function create(){
 const response=await fetch('sculpture-parts.json');if(!response.ok)throw Error('The V&A fragment catalogue is unavailable.');
 const parts=(await response.json()).parts,byId=new Map(parts.map(p=>[p.id,p])),images=new Map(),pending=new Map(),rasters=new Map(),metrics=new Map(),cityMetrics=new WeakMap();
 async function load(id){
  if(images.has(id))return images.get(id);if(pending.has(id))return pending.get(id);
  const p=byId.get(id);if(!p)throw Error('This V&A fragment is not in the catalogue.');
  const task=(async()=>{const image=new Image();image.decoding='async';image.src=p.url;try{await image.decode();}catch{throw Error('V&A cutout unavailable: '+p.name+'. Install the team media pack.');}const canvas=document.createElement('canvas');canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;canvas.getContext('2d').drawImage(image,0,0);images.set(id,canvas);metrics.set(id,SculptureLink.shape(canvas));return canvas;})();pending.set(id,task);try{return await task;}finally{pending.delete(id);}
 }
 function measure(image){if(!image)return null;if(cityMetrics.has(image))return cityMetrics.get(image);const c=document.createElement('canvas');c.width=image.naturalWidth||image.width;c.height=image.naturalHeight||image.height;c.getContext('2d').drawImage(image,0,0);const value=SculptureLink.shape(c);cityMetrics.set(image,value);return value;}
 async function prepare(layers,cityInfo,context=layers){
  for(const l of layers){
   if(byId.has(l.vaPartId)){await load(l.vaPartId);continue;}
   const info=cityInfo(l),measured=measure(info.image),excluded=new Set();let success=false,last;
   for(let attempt=0;attempt<3;attempt++){
    const matcher=SculptureLink.createMatcher(parts.filter(p=>!excluded.has(p.id)),()=>context,id=>metrics.get(id)||byId.get(id)?.shape);
    const match=matcher(l,info.object,measured);if(!match)break;
    try{await load(match.id);l.vaPartId=match.id;l.vaRotation=match.angle;l.vaMatchReason=match.reason;success=true;break;}
    catch(e){last=e;excluded.add(match.id);}
   }
   if(!success)throw last||Error('No V&A fragment can be matched to this object.');
  }
  return layers;
 }
 function raster(layer){
  const image=images.get(layer.vaPartId);if(!image)return null;const angle=layer.vaRotation===90?90:0,key=layer.vaPartId+':'+angle+':'+JSON.stringify(layer.strokes||[]),old=rasters.get(layer.id);if(old?.key===key)return old.canvas;
  const c=document.createElement('canvas');c.width=angle?image.height:image.width;c.height=angle?image.width:image.height;const g=c.getContext('2d');g.save();if(angle){g.translate(c.width,0);g.rotate(Math.PI/2);}g.drawImage(image,0,0);g.restore();
  g.globalCompositeOperation='destination-out';g.lineCap=g.lineJoin='round';
  for(const stroke of layer.strokes||[]){g.lineWidth=stroke.radius*c.width;g.beginPath();stroke.points.forEach((p,i)=>i?g.lineTo(p.x*c.width,p.y*c.height):g.moveTo(p.x*c.width,p.y*c.height));if(stroke.points.length===1){const p=stroke.points[0];g.lineTo(p.x*c.width+.01,p.y*c.height);}g.stroke();}
  rasters.set(layer.id,{key,canvas:c});return c;
 }
 function drawLayer(g,l){const image=raster(l);if(!image)return;const s=Math.min(l.w/image.width,l.h/image.height),w=image.width*s,h=image.height*s;g.save();g.translate(l.x,l.y);g.rotate((l.rotation||0)*Math.PI/180);g.scale(l.flipX?-1:1,l.flipY?-1:1);g.drawImage(image,-w/2,-h/2,w,h);g.restore();}
 function drawDocument(g,doc){g.clearRect(0,0,doc.width,doc.height);for(const l of doc.layers)drawLayer(g,l);}
 function hit(layer,q){const c=raster(layer);if(!c)return false;const s=Math.min(layer.w/c.width,layer.h/c.height),u=q.x/(c.width*s)+.5,v=q.y/(c.height*s)+.5;return u>=0&&v>=0&&u<1&&v<1&&c.getContext('2d').getImageData(Math.floor(u*c.width),Math.floor(v*c.height),1,1).data[3]>32;}
 return Object.freeze({parts,part:id=>byId.get(id)||null,prepare,load,raster,drawLayer,drawDocument,hit,records:layers=>[...new Set(layers.map(l=>l.vaPartId))].map(id=>byId.get(id)).filter(Boolean),state:()=>({available:parts.length,loaded:images.size})});
}
window.ExhibitionCounterparts=Object.freeze({create});
})();
