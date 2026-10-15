import assert from 'node:assert/strict';
import {recessExteriorRoads} from '../src/inhabitable/road-envelope.js';
import {floorAt} from '../src/inhabitable/surreal-navigation.js';
const step=.28,n=51,layers=2,nav={step,nx:n,nz:n,layers,minX:-7,minZ:-7,counts:new Uint8Array(n*n).fill(2),heights:new Float32Array(n*n*2),corners:new Float32Array(n*n*8),widthValid:new Uint8Array(n*n*2).fill(1)};
for(let i=0;i<nav.heights.length;i++){const h=i%2?4.055:.055;nav.heights[i]=h;nav.corners.fill(h,i*4,i*4+4);}
const mass=(x,y,z)=>Math.max(Math.abs(x)-2,Math.abs(z)-2,-y,y-7),paths=[{width:1.8,points:[{x:-6,y:0,z:0},{x:6,y:0,z:0}]}],nodes=[{view:{x:0,y:4.055,z:0}}];
const result=recessExteriorRoads(nav,mass,paths,nodes);
assert(result.removedFraction>.6);
assert.notEqual(floorAt(nav,0,0,4.055,.1),null,'Interior upper floors remain');
assert.equal(floorAt(nav,5,4,.055,.1),null,'Unused exterior apron is removed');
assert.equal(floorAt(nav,5,0,4.055,.1),null,'An unrelated upper apron is not kept by the lower route');
for(let x=-6;x<=6;x+=.14)for(const z of [-.9,0,.9])assert.notEqual(floorAt(nav,x,z,.055,.1),null,'Full-width route and endpoints remain supported');
console.log('PASS: exterior floor aprons recess while full-width connections, exits and interior levels remain.');
