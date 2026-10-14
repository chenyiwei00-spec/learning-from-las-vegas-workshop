/* Automated Edge/Playwright checks. No AI generation; test state lives in an isolated browser context. */
const {chromium}=require(process.env.PLAYWRIGHT_CORE_PATH||'playwright-core');
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const path=require('node:path');
const crypto=require('node:crypto');
const base=process.env.TEAM_PREVIEW_URL||'http://127.0.0.1:8066';
const out=path.resolve(__dirname,'../runtime/inhabitable-qa');
(async()=>{
 await fs.mkdir(out,{recursive:true});
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const context=await browser.newContext({viewport:{width:1512,height:1100}}),page=await context.newPage(),errors=[],aiCalls=[],foreignAppCalls=[];
 page.on('pageerror',error=>errors.push(error.message));
 page.on('request',request=>{if(request.method()==='POST'&&/api\/(sculpture3d|exhibition)/.test(request.url()))aiCalls.push(request.url());if(request.url().includes(':5173'))foreignAppCalls.push(request.url());});
 const evidence={automated:true,manualTestsPerformed:false,models:[],checks:[]};
 try{
  await page.goto(base+'/exhibition.html',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>window.ExhibitionWalk?.state().ready&&window.ExhibitionInhabitable&&window.ExhibitionStudio,{timeout:60000});
  await page.evaluate(()=>window.ExhibitionWalk.placement.ready);
  const before=await page.evaluate(()=>({placements:ExhibitionWalk.placement.state().models,collage:ExhibitionStudio.getDocument()}));
  await page.locator('#walk-inhabitable').click();
  await page.waitForFunction(()=>document.querySelectorAll('#inhabitable-models button').length>=3);
  const models=await (await page.request.get(base+'/api/inhabitable/models')).json();
  assert.equal(models.models.length,3,'Configure the three original sculptures for this integration check.');
  for(const url of ['/inhabitable-models/%2e%2e%2fsettings.local.json','/inhabitable-models/subdir/a.glb','/inhabitable-models/sculpture-01.txt'])assert.equal((await page.request.get(base+url)).status(),403);
  const range=await page.request.get(base+'/inhabitable-models/sculpture-01.glb',{headers:{Range:'bytes=0-3'}});assert.equal(range.status(),206);assert.equal((await range.body()).toString(),'glTF');
  assert.equal((await page.request.post(base+'/inhabitable-models/sculpture-01.glb',{data:'blocked write'})).status(),405);
  evidence.checks.push('Configured GLB endpoint is read-only, supports byte ranges and rejects traversal, subdirectories and other types.');
  for(const [i,model]of models.models.entries()){
   if(i)await page.locator('#inhabitable-change').click();
   await page.locator('#inhabitable-models button').filter({hasText:model.name}).click();
   await page.waitForFunction(name=>{const s=ExhibitionInhabitable.state();return !s.busy&&s.lastResult?.name===name;},model.name,{timeout:120000});
   const frame=page.frames().find(f=>f.url().includes('/inhabitable-sculpture/index.html'));assert.ok(frame);
   await frame.waitForFunction(()=>window.spatialPrototype?.getState().spatial.viable);
   const result=await page.evaluate(()=>ExhibitionInhabitable.state().lastResult),state=await frame.evaluate(()=>spatialPrototype.getState());
   const bytes=await (await page.request.get(base+model.url)).body(),hash=crypto.createHash('sha256').update(bytes).digest('hex');
   assert.equal(result.modelId,'import-'+hash,'The exact selected GLB must reach the volumetric engine.');
   assert.equal(state.spatial.buildingCount,1);assert.ok(result.viable);assert.ok(result.metrics.minimumHeadroom>=2.4);
   if(i===0){
    await frame.locator('.volume-parameters summary').click();
    await frame.locator('#parameter-scale').fill('32');await frame.locator('#regenerate-space').click();
    await page.waitForFunction(area=>!ExhibitionInhabitable.state().busy&&ExhibitionInhabitable.state().lastResult?.metrics.floorArea!==area,result.metrics.floorArea,{timeout:120000});
    assert.ok((await page.locator('#inhabitable-status').textContent()).includes('m²'));
    await frame.locator('#parameter-scale').fill('28');await frame.locator('#regenerate-space').click();
    await page.waitForFunction(area=>!ExhibitionInhabitable.state().busy&&ExhibitionInhabitable.state().lastResult?.metrics.floorArea===area,result.metrics.floorArea,{timeout:120000});
    await frame.locator('.volume-parameters summary').click();evidence.checks.push('Regenerate uses changed geometry parameters and updates the parent analysis readout.');
   }
   await frame.locator('#toggle-cutaway').click();assert.equal(await frame.evaluate(()=>spatialPrototype.getState().spatial.view),'cutaway');
   await page.screenshot({path:path.join(out,model.name+'-cutaway.png'),fullPage:false});
   await frame.locator('#first-person-view').click();
   const p0=await frame.evaluate(()=>spatialPrototype.getState().spatial.firstPerson.position);
   await frame.locator('#viewport canvas').focus();await page.keyboard.down('KeyW');await page.waitForTimeout(1200);await page.keyboard.up('KeyW');
   const nav=await frame.evaluate(()=>spatialPrototype.getState().spatial.firstPerson);
   assert.ok(nav.active&&nav.positionValid);assert.ok(Math.hypot(nav.position.x-p0.x,nav.position.z-p0.z)>.1,'Actual WASD movement must work in the iframe.');
   await frame.locator('#orbit-view').click();
   const materialHash=await frame.evaluate(async()=>{const a=spatialPrototype.getVolume().material,b=await crypto.subtle.digest('SHA-256',a);return Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,'0')).join('');});
   evidence.models.push({name:model.name,modelId:result.modelId,materialHash,metrics:result.metrics,navigation:nav});
  }
  assert.equal(new Set(evidence.models.map(m=>m.materialHash)).size,3);
  await page.locator('#inhabitable-back').click();
  const after=await page.evaluate(()=>({placements:ExhibitionWalk.placement.state().models,collage:ExhibitionStudio.getDocument()}));assert.deepEqual(after,before);
  assert.equal(await page.locator('#inhabitable-panel').isVisible(),false);evidence.checks.push('Three actual GLBs: exact SHA handoff, distinct independent buildings, cutaway and WASD.','Returning preserves collage and placement records.');
  // Import a local file through the user-facing file input.
  await page.locator('#walk-inhabitable').click();
  const first=models.models[0],buffer=await (await page.request.get(base+first.url)).body();
  await page.locator('#inhabitable-file').setInputFiles({name:'file-import.glb',mimeType:'model/gltf-binary',buffer});
  await page.waitForFunction(()=>!ExhibitionInhabitable.state().busy&&ExhibitionInhabitable.state().lastResult?.modelId,null,{timeout:120000});
  assert.equal((await page.evaluate(()=>ExhibitionInhabitable.state().lastResult)).modelId,evidence.models[0].modelId);
  evidence.checks.push('Local GLB file input imports without source changes.');
  await page.locator('#inhabitable-back').click();
  // Exercise the exact selected-exhibit handoff in isolated browser state.
  await page.evaluate(async()=>{
   const blob=await (await fetch('/inhabitable-models/sculpture-02.glb')).blob();
   const hash=await crypto.subtle.digest('SHA-256',await blob.arrayBuffer()),id=Array.from(new Uint8Array(hash),n=>n.toString(16).padStart(2,'0')).join('');
   await ExhibitionWalk.placement.place({id,blob,name:'Selected exhibit QA'},{col:9,row:9,span:1,valid:true});
  });
  const placed=await page.evaluate(()=>({placements:ExhibitionWalk.placement.state().models,collage:ExhibitionStudio.getDocument()}));
  await page.locator('#exhibition-inhabit-model').click();
  await page.waitForFunction(()=>!ExhibitionInhabitable.state().busy&&ExhibitionInhabitable.state().lastResult?.modelId.endsWith('b2451dd36abf8c2f097218aef30d6363e84a167ed9b73e77a0e64cc39da9599d'),null,{timeout:120000});
  assert.equal((await page.evaluate(()=>ExhibitionInhabitable.state().lastResult)).modelId,evidence.models[1].modelId);
  await page.locator('#inhabitable-back').click();assert.deepEqual(await page.evaluate(()=>({placements:ExhibitionWalk.placement.state().models,collage:ExhibitionStudio.getDocument()})),placed);
  evidence.checks.push('Selected room exhibit transfers its real GLB and survives return unchanged.');
  // Open that actual floor model in the original preview, then transfer the preview GLB.
  await page.evaluate(()=>{const p=ExhibitionWalk.placement;p.openModel(p.state().selected);});
  await page.waitForFunction(()=>ExhibitionTransfer.state().available,null,{timeout:60000});
  await page.waitForFunction(()=>!ExhibitionStudio.state().model.gallery?.switching,null,{timeout:60000});
  const previewBefore=await page.evaluate(()=>({document:ExhibitionStudio.getDocument(),state:ExhibitionStudio.state()}));
  await page.locator('#workspace-inhabit-model').click();
  await page.waitForFunction(()=>!ExhibitionInhabitable.state().busy&&ExhibitionInhabitable.state().lastResult?.modelId,null,{timeout:120000});
  assert.equal((await page.evaluate(()=>ExhibitionInhabitable.state().lastResult)).modelId,evidence.models[1].modelId);
  const frame=page.frames().find(f=>f.url().includes('/inhabitable-sculpture/index.html'));
  const bad=await page.evaluate(async()=>{try{await ExhibitionInhabitable.importGLB(new Blob(['not a glb but longer than twenty bytes']),'invalid.glb');return null;}catch(e){return e.message;}});
  assert.ok(bad);assert.equal(await frame.evaluate(()=>spatialPrototype.getState().spatial.modelId),evidence.models[1].modelId);
  await page.locator('#inhabitable-back').click();
  assert.deepEqual(await page.evaluate(()=>({document:ExhibitionStudio.getDocument(),state:ExhibitionStudio.state()})),previewBefore);
  evidence.checks.push('Current original model preview transfers the real GLB; invalid GLB is rejected without replacing the valid model.');
  await page.evaluate(()=>ExhibitionBrowse.close());
  await page.evaluate(()=>ExhibitionWalk.placement.select(null));
  await page.locator('#walk-inhabitable').click();
  await page.locator('#inhabitable-change').click();
  await page.locator('#inhabitable-models button').filter({hasText:'Selected exhibit QA'}).click();
  await page.waitForFunction(()=>!ExhibitionInhabitable.state().busy,null,{timeout:120000});
  assert.equal((await page.evaluate(()=>ExhibitionInhabitable.state().lastResult)).modelId,evidence.models[1].modelId);
  await page.locator('#inhabitable-back').click();
  evidence.checks.push('Shared model chooser can hand off a floor-library entry.');
  await page.locator('#walk-axonometric').click();assert.equal(await page.evaluate(()=>ExhibitionWalk.state().viewMode),'axonometric');
  await page.locator('#walk-eye-view').click();assert.equal(await page.evaluate(()=>ExhibitionWalk.state().viewMode),'room');
  evidence.checks.push('Original eye-level and axonometric views still switch.');
  await page.screenshot({path:path.join(out,'integrated-exhibition.png'),fullPage:false});
  assert.deepEqual(errors,[]);assert.deepEqual(aiCalls,[]);assert.deepEqual(foreignAppCalls,[]);
  evidence.checks.push('No JavaScript page errors, no AI generation and no dependency on port 5173.');
  evidence.passed=true;
 }catch(error){evidence.passed=false;evidence.error=error.stack;await page.screenshot({path:path.join(out,'failure.png')}).catch(()=>{});throw error;}
 finally{evidence.pageErrors=errors;await fs.writeFile(path.join(out,'verification.json'),JSON.stringify(evidence,null,2));await browser.close();}
 console.log(JSON.stringify({passed:true,models:evidence.models.map(m=>({name:m.name,floorArea:m.metrics.floorArea})),checks:evidence.checks},null,2));
})().catch(error=>{console.error(error);process.exitCode=1;});
