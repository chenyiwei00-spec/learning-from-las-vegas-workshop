import assert from 'node:assert/strict';
import {buildWideRoutes,validateCirculation,repairTerrainSpine} from '../src/inhabitable/surreal-navigation.js';
const step=.25,n=65,nav={step,nx:n,nz:n,layers:1,minX:-8,minZ:-8,counts:new Uint8Array(n*n),heights:new Float32Array(n*n).fill(.055),corners:new Float32Array(n*n*4).fill(.055)};
for(let z=0;z<n;z++)for(let x=0;x<n;x++){const px=-8+x*step,pz=-8+z*step;nav.counts[z*n+x]=Number(Math.abs(pz-2)<1.15||Math.hypot(px+4,pz+1)<1.05);}
const g={minX:-8,minY:-1,minZ:-8,step,nx:n,ny:25,nz:n,values:new Float32Array(n*25*n).fill(100)},surfaces=new Uint8Array(g.values.length);
const node=(id,x,z)=>({id,view:{x,z,y:.055},entry:{x,z,y:.055},floor:0}),nodes=[node('island-near-room',-4,-.4),node('connected-room',4,2)],entrance={x:-6,z:2,y:.055},exit={x:6,z:2,y:.055};
const paths=buildWideRoutes(nav,nodes,entrance,exit,g,surfaces,1.8,[{a:0,b:1}]);
assert(nodes[0].view.z>.8,'Room must use its nearby connected doorway, not the isolated closest terrace');
assert(validateCirculation(nodes,paths,g,surfaces,1.8,nav).samples>0);
// A truly disconnected layout must still fail; no narrow or unsupported path is accepted.
for(let z=0;z<n;z++)for(let x=0;x<n;x++)if(x>n/2-3&&x<n/2+3)nav.counts[z*n+x]=0;
assert.throws(()=>buildWideRoutes(nav,[node('a',-4,2),node('b',4,2)],{x:-6,z:2,y:.055},{x:6,z:2,y:.055},g,surfaces,1.8,[{a:0,b:1}]),e=>e.routeRepair===true);
console.log('PASS: nearby connected room entrances replace isolated terraces; genuinely blocked full-width routes still require geometric repair.');
const crossing={nx:21,nz:3,layers:2,step:.28,minX:0,minZ:0,counts:new Uint8Array(63).fill(2),heights:new Float32Array(126)};
for(let id=0;id<63;id++){crossing.heights[id*2]=id%21<10?0:3;crossing.heights[id*2+1]=10;}
repairTerrainSpine(crossing);
for(let z=0;z<3;z++)for(let x=1;x<21;x++)assert(Math.abs(crossing.heights[(z*21+x)*2]-crossing.heights[(z*21+x-1)*2])<=.32*.28+1e-5);
assert(crossing.counts.every(v=>v===2),'Safe upper floors must survive the ramp repair');assert.equal(crossing.repair.kind,'continuous-sloping-spine');
console.log('PASS: crossing ramp discontinuities are repaired with bounded slopes while safe upper floors remain.');
