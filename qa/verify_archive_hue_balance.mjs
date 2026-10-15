import fs from'node:fs';import vm from'node:vm';import assert from'node:assert/strict';
const window={};let pixel=[255,200,20,255];const document={createElement:()=>({getContext:()=>({drawImage(){},getImageData:()=>({data:new Uint8Array(pixel)})})})};
vm.runInNewContext(fs.readFileSync('site/exhibition-colour-preference.js','utf8'),{window,document,Map,Math,Promise});const m=window.ExhibitionColourPreference;
const measure=c=>{pixel=c;return m.measure({})},yellow=measure([255,200,20,255]),purple=measure([205,90,235,255]),blue=measure([30,180,240,255]);
assert.ok(yellow.yellow>0&&yellow.pinkPurple===0);assert.ok(purple.pinkPurple>0&&purple.yellow===0);
const base={light:.6,vivid:.5,dark:0};const y=m.weight({...base,yellow:.5},'vivid'),p=m.weight({...base,pinkPurple:.5},'vivid'),n=m.weight(base,'vivid');
assert.ok(y>0&&y<n&&p>n);assert.ok(m.weight(blue,'vivid')>0);assert.ok(m.weight({light:.85,vivid:.1,dark:0},'light')>m.weight({light:.2,vivid:.1,dark:.6},'light'));console.log('PASS: yellow/gold less likely, pink/purple favoured, all hues remain eligible and sculpture brightness preference preserved.');