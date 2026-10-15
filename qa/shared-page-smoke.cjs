const {chromium}=require(process.env.PLAYWRIGHT_CORE_PATH||'playwright-core');
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const context=await browser.newContext({viewport:{width:1440,height:1050}}),page=await context.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 const base=process.env.TEAM_PREVIEW_URL||'http://127.0.0.1:8066';
 try{
  await page.goto(base+'/exhibition.html',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>ExhibitionWalk?.state().ready&&window.ExhibitionStudio&&window.ExhibitionArchives&&window.ExhibitionInhabitable,null,{timeout:60000});
  await page.evaluate(()=>ExhibitionWalk.placement.ready);
  for(const id of ['exhibition-make-space','exhibition-agent-run','exhibition-play-video','workspace-tab-sculpture','walk-view-toggle','walk-inhabitable'])assert.equal(await page.locator('#'+id).count(),1);
  const api=await (await page.request.get(base+'/api/inhabitable/models')).json();assert.deepEqual(api.models,[],'Private sculpture folders must not be exposed in the shared page.');
  assert.equal(await page.evaluate(()=>ExhibitionWalk.placement.state().modelCount),0);
  await page.locator('#walk-inhabitable').click();
  assert.equal(await page.locator('#inhabitable-models button').count(),0);
  await page.locator('#inhabitable-back').click();
  const initial=await page.evaluate(()=>ExhibitionWalk.state().viewMode);
  await page.locator('#walk-view-toggle').click();assert.notEqual(await page.evaluate(()=>ExhibitionWalk.state().viewMode),initial);
  await page.locator('#walk-view-toggle').click();
  await fs.mkdir(path.resolve(__dirname,'../runtime/shared-main-qa'),{recursive:true});
  await page.screenshot({path:path.resolve(__dirname,'../runtime/shared-main-qa/shared-page.png')});
  const child=await context.newPage();child.on('pageerror',e=>errors.push(e.message));
  await child.goto(base+'/inhabitable-sculpture/index.html',{waitUntil:'domcontentloaded'});
  await child.waitForFunction(()=>window.spatialPrototype,null,{timeout:45000});
  assert.equal(await child.evaluate(()=>spatialPrototype.getState().modelCount),0);
  assert.equal(await child.evaluate(()=>spatialPrototype.getState().currentId),null);
  assert.deepEqual(errors,[]);
  console.log('Shared latest UI smoke passed: original controls retained, views switch, no private models in page, empty independent model catalogue, no JavaScript errors.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
