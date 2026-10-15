import assert from 'node:assert/strict';
import '../site/exhibition-layout.js';
import {placementRange} from '../src/exhibition-placement-size.js';
let seed=12;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
function check(count,options,min,max){
 const layout=ExhibitionLayoutPlanner.plan(Array.from({length:count},(_,i)=>({id:'item-'+i})),{random,...options});
 assert.equal(layout.length,count);
 for(const a of layout){assert(a.span>=min&&a.span<=max);assert(a.col>=0&&a.row>=0&&a.col+a.span<=20&&a.row+a.span<=20);assert(a.scale>0&&a.scale<=1);assert(Math.abs(a.rotation/(Math.PI/2)-Math.round(a.rotation/(Math.PI/2)))<1e-8);}
 for(let i=0;i<count;i++)for(let j=i+1;j<count;j++){const a=layout[i],b=layout[j];assert(a.col+a.span+1<=b.col||b.col+b.span+1<=a.col||a.row+a.span+1<=b.row||b.row+b.span+1<=a.row);}
 return layout;
}
for(const count of [1,2,8,15,30,49])check(count,{minSpan:2,maxSpan:5},2,5);
assert(ExhibitionLayoutPlanner.plan([{id:'one'}],{random:()=>.95,minSpan:2,maxSpan:5})[0].span===5);
assert.throws(()=>check(50,{minSpan:2,maxSpan:5},2,5),/49/);
for(const count of [1,2,50,100])check(count,{},1,3);
assert.equal(placementRange({record:{kind:'space'}}).maxSpan,5);assert.equal(placementRange({record:{target:'space'}}).minSpan,2);assert.equal(placementRange({kind:'model'}).maxSpan,3);
console.log('PASS: saved spaces occupy 2-5 cells, normal models retain 1-3 cells, 90-degree rotations and one white cell between footprints, including maximum-capacity layouts.');
