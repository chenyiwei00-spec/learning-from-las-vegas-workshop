import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
const colours={red:[235,70,40,255],grey:[105,105,105,255],dark:[20,20,20,255],pale:[220,217,208,255],medium:[120,110,105,255]};
class Image{async decode(){}}
const document={createElement:()=>{let image;return{getContext:()=>({drawImage:i=>image=i,getImageData:()=>({data:Uint8Array.from([...colours[image.src],255,255,255,0])})})};}};
const window={};vm.runInNewContext(await fs.readFile('site/exhibition-colour-preference.js','utf8'),{window,document,Image,Map,Math});
const pick=window.ExhibitionColourPreference.pick;
let n=1997;const random=()=>((n=Math.imul(n,1664525)+1013904223)>>>0)/4294967296;
async function distribution(names,preference){const count=Object.fromEntries(names.map(n=>[n,0]));for(let i=0;i<2000;i++)count[(await pick(names.map(url=>({url,score:0})),preference,random)).url]++;return count;}
const city=await distribution(['red','grey','dark'],'vivid'),sculpture=await distribution(['pale','medium','dark'],'light');
assert(city.red>city.grey*8&&city.red>city.dark*8);assert(city.grey>0&&city.dark>0,'Lower probability must retain variety');
assert(sculpture.pale>sculpture.medium*5&&sculpture.pale>sculpture.dark*8);assert(sculpture.medium>0&&sculpture.dark>0);
const light=await window.ExhibitionColourPreference.score('dark');assert(light.light<.1,'Transparent white background must not inflate brightness');
console.log('PASS: real weighted draws favour vivid city and light sculpture fragments without excluding darker assets:',JSON.stringify({city,sculpture}));
