/* Reframe saved raster views without regenerating models or changing their cameras. */
(()=>{'use strict';const cache=new Map(),urls=new Map(),observers=new WeakMap();let queue=Promise.resolve();
async function modelPreview(row,mode){
 while(document.hidden||window.ExhibitionAgent?.state().busy||window.ExhibitionAgentDrafts?.state().busy||window.ExhibitionMedia?.state().videoPlaying||window.ExhibitionMedia?.state().audioPlaying||(()=>{const v=document.getElementById('generated-sculpture-viewer'),r=v?.getBoundingClientRect();return v?.autoRotate&&r?.bottom>0&&r.top<innerHeight;})())await new Promise(r=>setTimeout(r,400));

 if(!(row.glb instanceof Blob))return row.preview;
 await customElements.whenDefined('model-viewer');
 const viewer=document.createElement('model-viewer'),url=URL.createObjectURL(row.glb);
 viewer.setAttribute('aria-hidden','true');viewer.tabIndex=-1;viewer.setAttribute('loading','eager');viewer.setAttribute('interaction-prompt','none');viewer.setAttribute('exposure','1');viewer.setAttribute('shadow-intensity','.25');
 viewer.style.cssText='position:fixed;left:0;top:0;width:800px;height:600px;opacity:0;z-index:-1;pointer-events:none;background:rgb(242,242,242)';
 (document.fullscreenElement||document.body).append(viewer);
 try{
  await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('Card model preview timed out.')),15000);viewer.addEventListener('load',()=>{clearTimeout(timer);resolve();},{once:true});viewer.addEventListener('error',()=>{clearTimeout(timer);reject(Error('Card model could not load.'));},{once:true});viewer.src=url;});
  await viewer.updateComplete;
  const d=viewer.getDimensions(),saved=mode==='saved'&&row.camera?.orbit;
  const fov=saved&&Number.isFinite(row.camera?.fieldOfView)?row.camera.fieldOfView:30;
  const fitted=Math.hypot(d.x,d.y,d.z)*.5/Math.sin(fov*Math.PI/360)*1.12;
  const radius=saved?row.camera.orbit.radius:fitted;
  const theta=saved?row.camera.orbit.theta:0,phi=saved?row.camera.orbit.phi:85*Math.PI/180;
  const target=saved&&row.camera.target;
  // A saved detail is intentional: never refit, crop foreground, or back the camera away.
  viewer.minCameraOrbit='auto 0deg 0.001m';viewer.maxCameraOrbit='auto 180deg '+Math.max(radius*8,fitted*8)+'m';
  viewer.minFieldOfView='1deg';viewer.maxFieldOfView='179deg';
  viewer.fieldOfView=fov+'deg';viewer.cameraTarget=target?target.x+'m '+target.y+'m '+target.z+'m':'auto auto auto';
  viewer.cameraOrbit=theta+'rad '+phi+'rad '+radius+'m';
  await viewer.updateComplete;viewer.jumpCameraToGoal();
  await new Promise(r=>setTimeout(r,90));await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
  return viewer.toBlob({mimeType:'image/png',idealAspect:false});
 }finally{viewer.removeAttribute('src');viewer.remove();URL.revokeObjectURL(url);}
}
function preview(row,{mode='saved'}={}){const key=mode+':'+row.id+':'+(row.updatedAt||row.savedAt)+':'+JSON.stringify(row.camera||{})+':'+row.preview.size;if(cache.has(key))return cache.get(key);const job=queue.catch(()=>{}).then(()=>modelPreview(row,mode).catch(()=>row.preview));queue=job;cache.set(key,job);if(cache.size>100)cache.delete(cache.keys().next().value);return job;}
function cleanup(){for(const [im,url]of urls)if(!im.isConnected){URL.revokeObjectURL(url);urls.delete(im);}}
function attach(grid,rows,options={}){
 cleanup();observers.get(grid)?.disconnect();const byId=new Map(rows.map(r=>[r.id,r]));
 function prepare(card){
  const row=byId.get(card.dataset.saved),im=card.querySelector('img');if(!row?.preview||!im)return;

  preview(row,options).then(blob=>{if(!im.isConnected)return;const url=URL.createObjectURL(blob);urls.set(im,url);im.src=url;delete im.dataset.previewPending;im.dataset.savedViewReady='true';im.dataset.previewMode=options.mode||'saved';}).catch(()=>{delete im.dataset.previewPending;});
 }
 if(!window.IntersectionObserver){for(const card of grid.children)prepare(card);return;}
 const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){observer.unobserve(entry.target);prepare(entry.target);}},{rootMargin:'180px'});
 observers.set(grid,observer);for(const card of grid.children)observer.observe(card);
}

window.ExhibitionCardImages=Object.freeze({attach,preview});window.addEventListener('pagehide',()=>{for(const u of urls.values())URL.revokeObjectURL(u);urls.clear();});
})();