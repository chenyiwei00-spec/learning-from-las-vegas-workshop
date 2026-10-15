/* Reframe saved raster views without regenerating models or changing their cameras. */
(()=>{'use strict';const cache=new Map(),urls=new Map();let queue=Promise.resolve();
async function crop(blob){const im=await createImageBitmap(blob),raw=document.createElement('canvas'),k=Math.min(1,640/Math.max(im.width,im.height));raw.width=Math.max(1,Math.round(im.width*k));raw.height=Math.max(1,Math.round(im.height*k));const g=raw.getContext('2d',{willReadFrequently:true});g.drawImage(im,0,0,raw.width,raw.height);im.close();const data=g.getImageData(0,0,raw.width,raw.height),p=data.data,w=raw.width,h=raw.height,n=w*h,bg=[...p.slice(0,4)],seen=new Uint8Array(n),todo=new Int32Array(n);let head=0,tail=0;
 const background=i=>p[i*4+3]<32||(bg[3]>80&&Math.max(Math.abs(p[i*4]-bg[0]),Math.abs(p[i*4+1]-bg[1]),Math.abs(p[i*4+2]-bg[2]))<12);
 function add(i){if(i<0||i>=n||seen[i]||!background(i))return;seen[i]=1;todo[tail++]=i;}
 for(let x=0;x<w;x++){add(x);add((h-1)*w+x);}for(let y=0;y<h;y++){add(y*w);add(y*w+w-1);}
 while(head<tail){const i=todo[head++],x=i%w;p[i*4+3]=0;if(x>0)add(i-1);if(x<w-1)add(i+1);add(i-w);add(i+w);}
 let x0=w,y0=h,x1=-1,y1=-1;for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(p[(y*w+x)*4+3]>64){x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y);}
 const out=document.createElement('canvas');out.width=out.height=640;const ctx=out.getContext('2d');ctx.fillStyle='rgb(242,242,242)';ctx.fillRect(0,0,640,640);
 if(x1>=x0){g.putImageData(data,0,0);const width=x1-x0+1,height=y1-y0+1,scale=Math.min(640/width,640/height);ctx.drawImage(raw,x0,y0,width,height,(640-width*scale)/2,640-height*scale,width*scale,height*scale);}
 return new Promise((resolve,reject)=>out.toBlob(b=>b?resolve(b):reject(Error('Saved-view preview unavailable')),'image/png'));
}
function preview(row){const key=row.id+':'+(row.updatedAt||row.savedAt)+':'+JSON.stringify(row.camera||{})+':'+row.preview.size;if(cache.has(key))return cache.get(key);const job=queue.catch(()=>{}).then(()=>crop(row.preview));queue=job;cache.set(key,job);if(cache.size>100)cache.delete(cache.keys().next().value);return job;}
function cleanup(){for(const [im,url]of urls)if(!im.isConnected){URL.revokeObjectURL(url);urls.delete(im);}}
function attach(grid,rows){cleanup();const byId=new Map(rows.map(r=>[r.id,r]));for(const card of grid.children){const row=byId.get(card.dataset.saved),im=card.querySelector('img');if(!row?.preview||!im)continue;im.dataset.previewPending='true';preview(row).then(blob=>{if(!im.isConnected)return;const url=URL.createObjectURL(blob);urls.set(im,url);im.src=url;delete im.dataset.previewPending;im.dataset.savedViewReady='true';}).catch(()=>{delete im.dataset.previewPending;});}}
window.ExhibitionCardImages=Object.freeze({attach,preview});window.addEventListener('pagehide',()=>{for(const u of urls.values())URL.revokeObjectURL(u);urls.clear();});
})();