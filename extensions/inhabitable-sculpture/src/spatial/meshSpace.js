import {diskMorphology,maskComponents,bridgeComponents,traceContours,signedArea,polygonArea,horizontalIntervals,inRegion} from './contours.js';
export {polygonArea} from './contours.js';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
function randomFor(text){let h=2166136261;for(const c of text)h=Math.imul(h^c.charCodeAt(0),16777619);return()=>{h+=0x6D2B79F5;let t=h;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;};}
function roofField(projection,mask,cell){
 const n=projection.resolution,nearest=new Int32Array(mask.length).fill(-1),queue=[];for(let i=0;i<mask.length;i++)if(projection.mask[i]){nearest[i]=i;queue.push(i);}
 for(let j=0;j<queue.length;j++){const i=queue[j],x=i%n,z=Math.floor(i/n);for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){const xx=x+dx,zz=z+dz,k=zz*n+xx;if(xx>=0&&zz>=0&&xx<n&&zz<n&&nearest[k]===-1){nearest[k]=nearest[i];queue.push(k);}}}
 let values=Float64Array.from(nearest,i=>3.1+3.2*(projection.upper[i]*.68+projection.thickness[i]*.32));
 for(let pass=0;pass<5;pass++){const next=new Float64Array(values.length);for(let z=0;z<n;z++)for(let x=0;x<n;x++){let sum=0,weight=0;for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++){const xx=clamp(x+dx,0,n-1),zz=clamp(z+dz,0,n-1),w=(dx===0?2:1)*(dz===0?2:1);sum+=values[zz*n+xx]*w;weight+=w;}next[z*n+x]=sum/weight;}values=next;}
 const distance=Float64Array.from(mask,v=>v?1e4:0);for(let z=1;z<n;z++)for(let x=1;x<n;x++){const i=z*n+x;distance[i]=Math.min(distance[i],distance[i-1]+1,distance[i-n]+1,distance[i-n-1]+Math.SQRT2);}
 for(let z=n-2;z>=0;z--)for(let x=n-2;x>=0;x--){const i=z*n+x;distance[i]=Math.min(distance[i],distance[i+1]+1,distance[i+n]+1,distance[i+n+1]+Math.SQRT2);}
 return {heights:Array.from(values,v=>Math.round(v*10000)/10000),clearance:Array.from(distance,d=>Math.round(d*cell*1000)/1000)};
}
export function sampleField(room,x,z,key='heights'){
 const {resolution:n,cell,zOffset}=room.grid,field=room.grid[key],u=clamp(x/cell+n/2-.5,0,n-1),v=clamp((z+zOffset)/cell+n/2-.5,0,n-1),x0=Math.floor(u),z0=Math.floor(v),x1=Math.min(x0+1,n-1),z1=Math.min(z0+1,n-1),a=u-x0,b=v-z0;
 return (field[z0*n+x0]*(1-a)+field[z0*n+x1]*a)*(1-b)+(field[z1*n+x0]*(1-a)+field[z1*n+x1]*a)*b;
}
export function generateRoom(analysis,seed=1){
 const p=analysis.projection;if(!p)throw new Error('Mesh projection is missing; re-analyse the source GLB.');
 const n=p.resolution,rng=randomFor(analysis.sha256+':'+seed),cell=(23.5+rng())/(n-32),dilation=.86+rng()*.26,cleaned=Uint8Array.from(p.mask);
 for(const group of maskComponents(cleaned,n))if(group.length<Math.max(3,p.occupiedCells*.001))for(const i of group)cleaned[i]=0;
 let mask=diskMorphology(diskMorphology(cleaned,n,1.45),n,1.45,'erode');mask=diskMorphology(mask,n,dilation/cell);
 const bridges=bridgeComponents(mask,n,1.05/cell),loops=traceContours(mask,n,cell),polygon=loops.find(p=>signedArea(p)>0);
 if(!polygon)throw new Error('No architectural contour could be extracted.');
 const holes=loops.filter(h=>signedArea(h)<0&&polygonArea(h)>.6),region={polygon,holes};
 // Select a threshold from the existing silhouette; do not carve an axis through its voids.
 let portal=null;for(let z=-13;z<=13;z+=cell){const runs=horizontalIntervals(region,z);if(runs.length!==1)continue;const [left,right]=runs[0],sideRuns=[z-.65,z+.65].map(v=>horizontalIntervals(region,v)),minWidth=Math.min(right-left,...sideRuns.map(r=>r.length===1?r[0][1]-r[0][0]:0));if(minWidth<3)continue;
  const score=right-left+minWidth*.25;if(!portal||score>portal.score)portal={left,right,z,score};}
 if(!portal)throw new Error('The projected mesh has no safe entry section. Try another seed or a different GLB.');
 const shift=ring=>ring.map(([x,z])=>[x,z-portal.z]),outer=shift(polygon),inner=holes.map(shift),rawContours=traceContours(cleaned,n,cell,[0,-portal.z],false),bounds={min:[Math.min(...outer.map(p=>p[0])),Math.min(...outer.map(p=>p[1]))],max:[Math.max(...outer.map(p=>p[0])),Math.max(...outer.map(p=>p[1]))]},field=roofField(p,mask,cell),area=polygonArea(outer)-inner.reduce((s,h)=>s+polygonArea(h),0);
 const perimeter=[outer,...inner].reduce((sum,ring)=>sum+ring.reduce((s,a,i)=>{const b=ring[(i+1)%ring.length];return s+Math.hypot(a[0]-b[0],a[1]-b[1]);},0),0);
 return {id:analysis.id,name:analysis.name,seed,polygon:outer,holes:inner,rawContours,boundsLocal:bounds,doors:[{side:'left',center:[portal.left,0],width:2.4,height:2.7},{side:'right',center:[portal.right,0],width:2.4,height:2.7}],anchor:{x:(portal.left+portal.right)/2,z:0},grid:{resolution:n,cell,zOffset:portal.z,...field},floorArea:area,width:bounds.max[0]-bounds.min[0],length:bounds.max[1]-bounds.min[1],heightRange:[Math.min(...field.heights),Math.max(...field.heights)],height:field.heights.reduce((s,x)=>s+x,0)/field.heights.length,features:{dilation,bridgeCount:bridges.length,sourceComponentCount:maskComponents(cleaned,n).length,holes:inner.length,perimeter,compactness:4*Math.PI*area/(perimeter*perimeter),rectangleFill:area/((bounds.max[0]-bounds.min[0])*(bounds.max[1]-bounds.min[1])),retainedSourceCells:cleaned.reduce((s,v,i)=>s+(v&&mask[i]?1:0),0)/p.occupiedCells},bridges:bridges.map(b=>({a:[(b.a[0]-n/2+.5)*cell,(b.a[1]-n/2+.5)*cell-portal.z],b:[(b.b[0]-n/2+.5)*cell,(b.b[1]-n/2+.5)*cell-portal.z]}))};
}
function rawRoomWalls(room){const result=[];for(const ring of [room.polygon,...room.holes])for(let i=0;i<ring.length;i++){const a=ring[i],b=ring[(i+1)%ring.length];if(Math.hypot(a[0]-b[0],a[1]-b[1])<1e-6)continue;result.push({a:[a[0]+room.x,a[1]],b:[b[0]+room.x,b[1]],top:[sampleField(room,...a)+.08,sampleField(room,...b)+.08],bottom:0,thickness:.20,roomId:room.id});}return result;}
function splitWall(w,regions,lintel){
 const cuts=[0,1],dx=w.b[0]-w.a[0],dz=w.b[1]-w.a[1];
 for(const region of regions)for(const ring of [region.polygon,...(region.holes||[])])for(let i=0;i<ring.length;i++){const a=ring[i],b=ring[(i+1)%ring.length],ex=b[0]-a[0],ez=b[1]-a[1],den=dx*ez-dz*ex;if(Math.abs(den)<1e-9)continue;const ux=a[0]-w.a[0],uz=a[1]-w.a[1],t=(ux*ez-uz*ex)/den,s=(ux*dz-uz*dx)/den;if(t>1e-7&&t<1-1e-7&&s>=0&&s<=1)cuts.push(t);}
 cuts.sort((a,b)=>a-b);const out=[];for(let i=1;i<cuts.length;i++){const u=cuts[i-1],v=cuts[i];if(v-u<1e-7)continue;const mid=(u+v)/2,covered=regions.some(r=>inRegion(w.a[0]+mid*dx,w.a[1]+mid*dz,r));if(covered&&!lintel)continue;out.push({...w,a:[w.a[0]+u*dx,w.a[1]+u*dz],b:[w.a[0]+v*dx,w.a[1]+v*dz],top:[w.top[0]+(w.top[1]-w.top[0])*u,w.top[0]+(w.top[1]-w.top[0])*v],bottom:covered?2.7:0,door:covered});}return out;
}
export function generateIndependentSpace(analysis,seed=1){
 if(!analysis?.projection)throw new Error('Select and analyse one sculpture first.');if(!Number.isSafeInteger(seed)||seed<0||seed>2147483647)throw new Error('Seed must be an integer from 0 to 2147483647.');
 const space=generateRoom(analysis,seed);space.x=0;space.bounds=space.boundsLocal;space.worldAnchor={...space.anchor};space.worldDoors=space.doors.map(d=>({...d,center:[...d.center]}));
 // Each sculpture has its own exterior entry/exit aprons. These are uncovered floor
 // landings at this shell only; there is no shared coordinate layout or connection.
 const landings=space.doors.map((door,i)=>{const direction=i===0?-1:1,center=door.center[0]+direction*.4,polygon=Array.from({length:48},(_,j)=>{const a=j/48*Math.PI*2;return [center+Math.cos(a)*2.1,Math.sin(a)*1.5];});return {kind:i===0?'entrance':'exit',polygon,holes:[]};});
 const floors=[{kind:'space',id:space.id,polygon:space.polygon,holes:space.holes},...landings.map(l=>({...l,kind:'landing'}))],walls=rawRoomWalls(space).flatMap(w=>splitWall(w,landings,true)),spawn={x:space.doors[0].center[0]-1.1,z:0},exit={x:space.doors[1].center[0]+1.1,z:0};
 const allPoints=floors.flatMap(f=>f.polygon),bounds={min:[Math.min(...allPoints.map(p=>p[0])),Math.min(...allPoints.map(p=>p[1]))],max:[Math.max(...allPoints.map(p=>p[0])),Math.max(...allPoints.map(p=>p[1]))]};
 return {version:3,mode:'independent',modelId:analysis.id,method:'Mesh triangle raster → habitable contour → independent depth-field shell',seed,space,landings,floors,walls,obstacles:[],spawn,exit,waypoints:[spawn,space.worldAnchor,exit],avatar:{radius:.28,height:1.8,eye:1.65},bounds};
}
