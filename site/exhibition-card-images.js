/* Reframe saved raster views without regenerating models or changing their cameras. */
(()=>{'use strict';const cache=new Map(),urls=new Map(),observers=new WeakMap();let queue=Promise.resolve();
async function crop(blob){const im=await createImageBitmap(blob),raw=document.createElement('canvas'),k=Math.min(1,640/Math.max(im.width,im.height));raw.width=Math.max(1,Math.round(im.width*k));raw.height=Math.max(1,Math.round(im.height*k));const g=raw.getContext('2d',{willReadFrequently:true});g.drawImage(im,0,0,raw.width,raw.height);im.close();const data=g.getImageData(0,0,raw.width,raw.height),p=data.data,w=raw.width,h=raw.height,n=w*h,bg=[...p.slice(0,4)],seen=new Uint8Array(n),todo=new Int32Array(n);let head=0,tail=0;
 const background=i=>p[i*4+3]<32||(bg[3]>80&&Math.max(Math.abs(p[i*4]-bg[0]),Math.abs(p[i*4+1]-bg[1]),Math.abs(p[i*4+2]-bg[2]))<12);
 function add(i){if(i<0||i>=n||seen[i]||!background(i))return;seen[i]=1;todo[tail++]=i;}
 for(let x=0;x<w;x++){add(x);add((h-1)*w+x);}for(let y=0;y<h;y++){add(y*w);add(y*w+w-1);}
 while(head<tail){const i=todo[head++],x=i%w;p[i*4+3]=0;if(x>0)add(i-1);if(x<w-1)add(i+1);add(i-w);add(i+w);}
 let x0=w,y0=h,x1=-1,y1=-1;for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(p[(y*w+x)*4+3]>64){x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y);}
 const out=document.createElement('canvas');out.width=800;out.height=600;const ctx=out.getContext('2d');ctx.fillStyle='rgb(242,242,242)';ctx.fillRect(0,0,800,600);
 if(x1>=x0){g.putImageData(data,0,0);const width=x1-x0+1,height=y1-y0+1,scale=Math.min(780/width,580/height);ctx.drawImage(raw,x0,y0,width,height,(800-width*scale)/2,(600-height*scale)/2,width*scale,height*scale);}
 return new Promise((resolve,reject)=>out.toBlob(b=>b?resolve(b):reject(Error('Saved-view preview unavailable')),'image/png'));
}
async function modelPreview(row){
 while(document.hidden||window.ExhibitionAgent?.state().busy||window.ExhibitionAgentDrafts?.state().busy||window.ExhibitionMedia?.state().videoPlaying||window.ExhibitionMedia?.state().audioPlaying||(()=>{const v=document.getElementById('generated-sculpture-viewer'),r=v?.getBoundingClientRect();return v?.autoRotate&&r?.bottom>0&&r.top<innerHeight;})())await new Promise(r=>setTimeout(r,400));

 if(!(row.glb instanceof Blob))return crop(row.preview);
 await customElements.whenDefined('model-viewer');
 const viewer=document.createElement('model-viewer'),url=URL.createObjectURL(row.glb);
 viewer.setAttribute('aria-hidden','true');viewer.tabIndex=-1;viewer.setAttribute('loading','eager');viewer.setAttribute('interaction-prompt','none');viewer.setAttribute('exposure','1');viewer.setAttribute('shadow-intensity','.25');
 viewer.style.cssText='position:fixed;left:0;top:0;width:800px;height:600px;opacity:0;z-index:-1;pointer-events:none;background:rgb(242,242,242)';
 (document.fullscreenElement||document.body).append(viewer);
 try{
  await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('Card model preview timed out.')),15000);viewer.addEventListener('load',()=>{clearTimeout(timer);resolve();},{once:true});viewer.addEventListener('error',()=>{clearTimeout(timer);reject(Error('Card model could not load.'));},{once:true});viewer.src=url;});
  await viewer.updateComplete;
  const d=viewer.getDimensions(),orbit=row.camera?.orbit,fov=Number.isFinite(row.camera?.fieldOfView)?Math.max(20,Math.min(60,row.camera.fieldOfView)):30;
  // Preserve the saved viewing direction, then fit the entire bounding sphere to a square.
  const radius=Math.hypot(d.x,d.y,d.z)*.5/Math.sin(fov*Math.PI/360)*1.08;
  const theta=Number.isFinite(orbit?.theta)?orbit.theta:0,phi=Number.isFinite(orbit?.phi)?orbit.phi:85*Math.PI/180;
  viewer.minCameraOrbit='auto 0deg '+(radius*.2)+'m';viewer.maxCameraOrbit='auto 180deg '+(radius*8)+'m';viewer.cameraTarget='auto auto auto';viewer.fieldOfView=fov+'deg';viewer.cameraOrbit=theta+'rad '+phi+'rad '+radius+'m';
  await viewer.updateFraming();
  let blob;
  for(let attempt=0;attempt<4;attempt++){
   viewer.cameraOrbit=theta+'rad '+phi+'rad '+(radius*Math.pow(1.25,attempt))+'m';
   await viewer.updateComplete;viewer.jumpCameraToGoal();await new Promise(r=>setTimeout(r,90));await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
   blob=await viewer.toBlob({mimeType:'image/png',idealAspect:false});
   const image=await createImageBitmap(blob),c=document.createElement('canvas');c.width=image.width;c.height=image.height;
   const g=c.getContext('2d',{willReadFrequently:true});g.drawImage(image,0,0);image.close();const p=g.getImageData(0,0,c.width,c.height).data,bg=[...p.slice(0,4)];
   const foreground=i=>p[i+3]>64&&(bg[3]<64||Math.max(Math.abs(p[i]-bg[0]),Math.abs(p[i+1]-bg[1]),Math.abs(p[i+2]-bg[2]))>15);
   let clipped=false;for(let y=0;y<c.height&&!clipped;y++)for(const x of [0,1,c.width-2,c.width-1])if(foreground((y*c.width+x)*4)){clipped=true;break;}
   for(let x=0;x<c.width&&!clipped;x++)for(const y of [0,1,c.height-2,c.height-1])if(foreground((y*c.width+x)*4)){clipped=true;break;}
   if(!clipped)break;
  }
  return crop(blob);
 }finally{viewer.removeAttribute('src');viewer.remove();URL.revokeObjectURL(url);}
}
function preview(row){const key=row.id+':'+(row.updatedAt||row.savedAt)+':'+JSON.stringify(row.camera||{})+':'+row.preview.size;if(cache.has(key))return cache.get(key);const job=queue.catch(()=>{}).then(()=>modelPreview(row).catch(()=>crop(row.preview)));queue=job;cache.set(key,job);if(cache.size>100)cache.delete(cache.keys().next().value);return job;}
function cleanup(){for(const [im,url]of urls)if(!im.isConnected){URL.revokeObjectURL(url);urls.delete(im);}}
function attach(grid,rows){
 cleanup();observers.get(grid)?.disconnect();const byId=new Map(rows.map(r=>[r.id,r]));
 function prepare(card){
  const row=byId.get(card.dataset.saved),im=card.querySelector('img');if(!row?.preview||!im)return;

  preview(row).then(blob=>{if(!im.isConnected)return;const url=URL.createObjectURL(blob);urls.set(im,url);im.src=url;delete im.dataset.previewPending;im.dataset.savedViewReady='true';}).catch(()=>{delete im.dataset.previewPending;});
 }
 if(!window.IntersectionObserver){for(const card of grid.children)prepare(card);return;}
 const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){observer.unobserve(entry.target);prepare(entry.target);}},{rootMargin:'180px'});
 observers.set(grid,observer);for(const card of grid.children)observer.observe(card);
}

window.ExhibitionCardImages=Object.freeze({attach,preview});window.addEventListener('pagehide',()=>{for(const u of urls.values())URL.revokeObjectURL(u);urls.clear();});
})();