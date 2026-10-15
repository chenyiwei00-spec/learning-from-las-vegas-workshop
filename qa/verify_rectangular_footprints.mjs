import assert from 'node:assert/strict';
import {modelFootprint,cellShape,footprintsSeparated} from '../src/exhibition-placement-size.js';
import '../site/exhibition-layout.js';
assert.deepEqual(modelFootprint({width:2,depth:3},3,0),{spanX:2,spanZ:3});
assert.deepEqual(modelFootprint({width:2,depth:3},3,Math.PI/2),{spanX:3,spanZ:2});
assert.deepEqual(modelFootprint({width:10,depth:0},3,0),{spanX:3,spanZ:1});
assert.deepEqual(modelFootprint({width:10,depth:1},5,0,2),{spanX:5,spanZ:2});
assert.deepEqual(cellShape({span:3}),{spanX:3,spanZ:3});
let seed=123;const random=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
for(const spaces of [false,true])for(const count of [1,8,20,spaces?49:50]){
 const rows=Array.from({length:count},(_,i)=>({id:'r'+i,sourceWidth:i%2?2:3,sourceDepth:i%2?3:1}));
 const layout=ExhibitionLayoutPlanner.plan(rows,{random,minSpan:spaces?2:1,maxSpan:spaces?5:3});
 for(let i=0;i<layout.length;i++){const a=layout[i];assert(a.col>=0&&a.row>=0&&a.col+a.spanX<=20&&a.row+a.spanZ<=20);assert.deepEqual({spanX:a.spanX,spanZ:a.spanZ},modelFootprint(rows[i],a.span,a.rotation,spaces?2:1));for(let j=i+1;j<layout.length;j++)assert(footprintsSeparated(a,layout[j]));}
 if(count===8)assert(layout.some(r=>r.spanX!==r.spanZ));
}
console.log('PASS: aspect-derived 2x3/3x2 footprints, thin/flat models, saved spaces, quarter-turns and compact non-overlapping packing with white gaps.');
