import fs from 'node:fs';import path from 'node:path';import{createRequire}from'node:module';
const require=createRequire(process.env.PLAYWRIGHT_ANCHOR),{chromium}=require('./browser_tools/node_modules/playwright-core'),root=process.cwd(),base='http://127.0.0.1:8065/';
const catalog=JSON.parse(fs.readFileSync('site/assets/imported-sculptures/catalog.json','utf8'));
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH,headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--mute-audio']});
const page=await browser.newPage({viewport:{width:1000,height:800}});page.setDefaultTimeout(60000);
await page.route('**/*',async route=>{const u=new URL(route.request().url());if(u.origin!==new URL(base).origin)return route.continue();
 if(u.pathname==='/__import-preview.html')return route.fulfill({contentType:'text/html',body:'<!doctype html><html><head><script src="vendor/model-viewer.js"></script><script src="model-colour.js"></script><script src="model-preview-finish.js"></script></head><body style="margin:0;background:rgb(242,242,242)"><model-viewer id="v" loading="eager" style="width:800px;height:600px;background:rgb(242,242,242)" interaction-prompt="none" shadow-intensity=".6" camera-orbit="0deg 85deg auto" field-of-view="30deg"></model-viewer></body></html>'});
 const file=path.join(root,'site',decodeURIComponent(u.pathname).slice(1));if(fs.existsSync(file)&&fs.statSync(file).isFile())return route.fulfill({body:fs.readFileSync(file),contentType:file.endsWith('.js')?'text/javascript':file.endsWith('.json')?'application/json':file.endsWith('.png')?'image/png':file.endsWith('.glb')?'model/gltf-binary':undefined});return route.continue();});
try{
 await page.goto(base+'__import-preview.html');
 for(const item of catalog.items){
  const row={...item,...(item.presentation?{modelUrl:item.presentation.modelUrl,previewUrl:item.presentation.previewUrl}:{})};
  if(fs.existsSync(path.join('site',row.previewUrl))&&!process.argv.includes('--force'))continue;
  await page.reload();
  const b64=await page.evaluate(async row=>{
   await customElements.whenDefined('model-viewer');const viewer=document.getElementById('v'),raw=await(await fetch(row.modelUrl)).blob(),source=await ModelColour.enhance(raw),display=await ModelPreviewFinish.prepare(source,{target:row.target});
   ModelPreviewFinish.configure(viewer);const url=URL.createObjectURL(display);
   await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('Preview timeout')),45000);viewer.addEventListener('load',()=>{clearTimeout(timer);resolve()},{once:true});viewer.addEventListener('error',()=>{clearTimeout(timer);reject(Error('Preview failed'))},{once:true});viewer.src=url;});
   ModelPreviewFinish.apply(viewer,{target:row.target});await viewer.updateComplete;const d=viewer.getDimensions();viewer.cameraTarget='auto auto auto';viewer.cameraOrbit='0deg 85deg '+(Math.hypot(d.x,d.y,d.z)*.5/Math.sin(30*Math.PI/360)*1.2)+'m';viewer.fieldOfView='30deg';await viewer.updateComplete;viewer.jumpCameraToGoal();
   await new Promise(r=>setTimeout(r,150));await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
   const capture=await viewer.toBlob({mimeType:'image/png',idealAspect:false}),bmp=await createImageBitmap(capture),canvas=document.createElement('canvas');canvas.width=bmp.width;canvas.height=bmp.height;const g=canvas.getContext('2d');g.fillStyle='rgb(242,242,242)';g.fillRect(0,0,canvas.width,canvas.height);g.drawImage(bmp,0,0);bmp.close();const png=await new Promise(r=>canvas.toBlob(r,'image/png')),buffer=new Uint8Array(await png.arrayBuffer());let str='';for(const byte of buffer)str+=String.fromCharCode(byte);URL.revokeObjectURL(url);return btoa(str);
  },row);
  fs.writeFileSync(path.join('site',row.previewUrl),Buffer.from(b64,'base64'));console.log('Rendered',row.title);
 }
}finally{await browser.close();}
