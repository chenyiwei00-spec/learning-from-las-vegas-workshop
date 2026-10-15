import fs from'node:fs';import path from'node:path';import assert from'node:assert/strict';import{createRequire}from'node:module';
const require=createRequire(process.env.PLAYWRIGHT_ANCHOR),{chromium}=require('./browser_tools/node_modules/playwright-core'),root=process.cwd(),base='http://127.0.0.1:8065/',bundle=JSON.parse(fs.readFileSync('site/assets/imported-sculptures/catalog.json','utf8'));
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH,headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--mute-audio']});
const context=await browser.newContext({viewport:{width:1440,height:1000}}),errors=[];
context.on('page',page=>{page.setDefaultTimeout(60000);page.on('pageerror',e=>errors.push(e.message))});
await context.route('**/*',async route=>{const u=new URL(route.request().url());if(u.origin!==new URL(base).origin)return route.continue();const file=u.pathname==='/'?'index.html':decodeURIComponent(u.pathname).slice(1);
 if(file==='team-live.js')return route.fulfill({body:''});
 if(file==='__import-test.html')return route.fulfill({contentType:'text/html',body:'<!doctype html><script src="model-colour.js"></script><script src="saved-models.js"></script>'});
 if(file.startsWith('api/sculpture3d/jobs')&&route.request().method()==='POST')throw Error('No real generation');
 const p=path.join(root,'site',file);if(fs.existsSync(p)&&fs.statSync(p).isFile())return route.fulfill({body:fs.readFileSync(p),contentType:file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':file.endsWith('.json')?'application/json':file.endsWith('.png')?'image/png':undefined});return route.continue();});
try{
 const one=await context.newPage(),two=await context.newPage();await Promise.all([one.goto(base+'__import-test.html'),two.goto(base+'__import-test.html')]);
 const results=await Promise.all([one.evaluate(async()=>{await SavedSculptures.list();return (await SavedSculptures.list()).map(r=>({id:r.id,title:r.title,bytes:r.glb.size,hasObj:r.obj instanceof Blob,composition:r.composition,triangles:r.record.triangles}))}),two.evaluate(async()=>(await SavedSculptures.list()).length)]);
 assert.equal(results[0].length,bundle.items.length);assert.equal(results[1],bundle.items.length);assert.equal(new Set(results[0].map(r=>r.id)).size,bundle.items.length);
 assert.deepEqual(results[0].map(r=>r.title).sort(),bundle.items.map(r=>r.title).sort());assert.ok(results[0].every(r=>r.triangles>0&&r.bytes>900000&&r.composition===null&&r.hasObj===!!bundle.items.find(i=>i.title===r.title).objUrl));
 await one.reload();assert.equal(await one.evaluate(async()=>(await SavedSculptures.list()).length),bundle.items.length);
 console.log('PASS: All bundle models with names and embedded colours imported; concurrent tabs and refresh do not duplicate records.');
 await one.goto(base+'collage.html');await one.waitForFunction(()=>window.CollageStudio);await one.waitForFunction(expected=>document.querySelectorAll('#saved-model-grid [data-saved]').length===expected,bundle.items.length);
 const chosen='import:'+bundle.items[0].sha256;await one.locator('[data-saved="'+chosen+'"] [data-open]').first().click();await one.waitForFunction(id=>CollageStudio.getGenerated3DState().libraryId===id&&CollageStudio.getGenerated3DState().loaded,chosen);
 assert.equal(await one.locator('#download-model-obj').isEnabled(),false);assert.equal(await one.locator('#download-model-glb').isEnabled(),true);
 fs.mkdirSync('runtime',{recursive:true});await one.screenshot({path:'runtime/imported-collage-view.png'});
 const converted=bundle.items.find(item=>item.objUrl);
 if(converted){const id='import:'+converted.sha256;await one.locator('[data-saved="'+id+'"] [data-open]').first().click();await one.waitForFunction(id=>CollageStudio.getGenerated3DState().libraryId===id&&CollageStudio.getGenerated3DState().loaded,id);assert.equal(await one.locator('#download-model-obj').isEnabled(),true);console.log('PASS: converted vertex-colour OBJ opens as a real GLB and retains original OBJ export.');}
 await one.locator('#return-working').click();await one.waitForFunction(()=>!CollageStudio.isSavedPreview());
 await one.goto(base+'exhibition.html');await one.waitForFunction(()=>window.ExhibitionStudio&&window.ExhibitionLibrary&&window.ExhibitionWalk?.state().ready,null,{timeout:90000});
 assert.equal(await one.evaluate(()=>ExhibitionLibrary.state().count),bundle.items.length);await one.evaluate(id=>ExhibitionLibrary.placeSaved(id),chosen);assert.equal(await one.evaluate(()=>ExhibitionWalk.placement.state().modelCount),1);
 console.log('PASS: imported models open in the existing Collage 3D viewer, GLB export works, OBJ is correctly disabled, and Place adds a real mesh to the floor.');
 await one.evaluate(id=>SavedSculptures.remove(id),chosen);await two.reload();assert.equal(await two.evaluate(async()=>(await SavedSculptures.list()).length),bundle.items.length-1);
 assert.deepEqual(errors,[]);console.log('PASS: deleted imports remain deleted after reload. No browser errors; no inference was run.');
}finally{await browser.close();}
