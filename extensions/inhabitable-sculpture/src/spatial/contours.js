export const signedArea=p=>p.reduce((s,a,i)=>{const b=p[(i+1)%p.length];return s+a[0]*b[1]-b[0]*a[1];},0)/2;
export const polygonArea=p=>Math.abs(signedArea(p));
export function pointInPolygon(x,z,p){let inside=false;for(let i=0,j=p.length-1;i<p.length;j=i++){const a=p[i],b=p[j];if((a[1]>z)!==(b[1]>z)&&x<(b[0]-a[0])*(z-a[1])/(b[1]-a[1])+a[0])inside=!inside;}return inside;}
export function inRegion(x,z,region){return pointInPolygon(x,z,region.polygon)&&!(region.holes||[]).some(h=>pointInPolygon(x,z,h));}
export function diskMorphology(mask,n,radius,operation='dilate'){
 const out=new Uint8Array(mask.length),offsets=[];for(let dz=-Math.ceil(radius);dz<=radius;dz++)for(let dx=-Math.ceil(radius);dx<=radius;dx++)if(dx*dx+dz*dz<=radius*radius)offsets.push([dx,dz]);
 for(let z=0;z<n;z++)for(let x=0;x<n;x++){let value=operation==='erode'?1:0;for(const [dx,dz] of offsets){const xx=x+dx,zz=z+dz,hit=xx>=0&&zz>=0&&xx<n&&zz<n?mask[zz*n+xx]:0;if(operation==='dilate'&&hit){value=1;break;}if(operation==='erode'&&!hit){value=0;break;}}out[z*n+x]=value;}return out;
}
export function maskComponents(mask,n){const seen=new Uint8Array(mask.length),groups=[];for(let start=0;start<mask.length;start++){if(!mask[start]||seen[start])continue;const queue=[start];seen[start]=1;for(let j=0;j<queue.length;j++){const v=queue[j],x=v%n,z=Math.floor(v/n);for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){const xx=x+dx,zz=z+dz,k=zz*n+xx;if(xx>=0&&zz>=0&&xx<n&&zz<n&&mask[k]&&!seen[k]){seen[k]=1;queue.push(k);}}}groups.push(queue);}return groups.sort((a,b)=>b.length-a.length);}
export function bridgeComponents(mask,n,radius){
 let groups=maskComponents(mask,n),bridges=[];
 const boundary=g=>g.filter(i=>{const x=i%n,z=Math.floor(i/n);return [[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dz])=>!mask[(z+dz)*n+x+dx]);}).filter((_,i)=>i%2===0);
 while(groups.length>1){let best=null;const mainBoundary=boundary(groups[0]);for(let g=1;g<groups.length;g++){const otherBoundary=boundary(groups[g]);for(const i of mainBoundary)for(const j of otherBoundary){const d=(i%n-j%n)**2+(Math.floor(i/n)-Math.floor(j/n))**2;if(!best||d<best.d)best={i,j,d};}}
  if(!best)throw new Error('Could not connect projected mesh components.');const a=[best.i%n,Math.floor(best.i/n)],b=[best.j%n,Math.floor(best.j/n)],steps=Math.ceil(Math.hypot(a[0]-b[0],a[1]-b[1])*2);
  for(let s=0;s<=steps;s++){const x=a[0]+(b[0]-a[0])*s/(steps||1),z=a[1]+(b[1]-a[1])*s/(steps||1);for(let dz=-Math.ceil(radius);dz<=radius;dz++)for(let dx=-Math.ceil(radius);dx<=radius;dx++)if(dx*dx+dz*dz<=radius*radius){const xx=Math.round(x+dx),zz=Math.round(z+dz);if(xx>=0&&zz>=0&&xx<n&&zz<n)mask[zz*n+xx]=1;}}
  bridges.push({a,b});groups=maskComponents(mask,n);
 }return bridges;
}
function simplifyOpen(points,tolerance){if(points.length<3)return points;const a=points[0],b=points.at(-1),dx=b[0]-a[0],dz=b[1]-a[1],length=dx*dx+dz*dz;let best=0,index=0;for(let i=1;i<points.length-1;i++){const p=points[i],t=Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dz)/(length||1))),d=Math.hypot(p[0]-a[0]-t*dx,p[1]-a[1]-t*dz);if(d>best){best=d;index=i;}}return best>tolerance?[...simplifyOpen(points.slice(0,index+1),tolerance).slice(0,-1),...simplifyOpen(points.slice(index),tolerance)]:[a,b];}
export function smoothContour(points,tolerance=.07){
 let split=1;for(let i=2;i<points.length;i++)if(Math.hypot(points[i][0]-points[0][0],points[i][1]-points[0][1])>Math.hypot(points[split][0]-points[0][0],points[split][1]-points[0][1]))split=i;
 let p=[...simplifyOpen(points.slice(0,split+1),tolerance).slice(0,-1),...simplifyOpen([...points.slice(split),points[0]],tolerance).slice(0,-1)];
 for(let k=0;k<2;k++)p=p.flatMap((a,i)=>{const b=p[(i+1)%p.length];return [[a[0]*.75+b[0]*.25,a[1]*.75+b[1]*.25],[a[0]*.25+b[0]*.75,a[1]*.25+b[1]*.75]];});
 // Equal arc-length samples + local averaging remove raster stair-step corrugation.
 const lengths=p.map((a,i)=>Math.hypot(a[0]-p[(i+1)%p.length][0],a[1]-p[(i+1)%p.length][1])),total=lengths.reduce((a,b)=>a+b,0),count=Math.max(16,Math.ceil(total/.24)),resampled=[];let edge=0,travel=0;
 for(let i=0;i<count;i++){const target=i*total/count;while(edge<lengths.length-1&&travel+lengths[edge]<target){travel+=lengths[edge];edge++;}const t=(target-travel)/(lengths[edge]||1),a=p[edge],b=p[(edge+1)%p.length];resampled.push([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]);}p=resampled;
 for(let k=0;k<6;k++)p=p.map((a,i)=>{const b=p[(i+p.length-1)%p.length],c=p[(i+1)%p.length];return [a[0]*.5+(b[0]+c[0])*.25,a[1]*.5+(b[1]+c[1])*.25];});
 const middle=Math.floor(p.length/2);return [...simplifyOpen(p.slice(0,middle+1),tolerance*.4).slice(0,-1),...simplifyOpen([...p.slice(middle),p[0]],tolerance*.4).slice(0,-1)];
}
/** Ordered boundary loops retain concavity and holes. No convex hull or rectangle fit. */
export function traceContours(mask,n,cell=1,offset=[0,0],smooth=true){
 const edges=[],starts=new Map(),key=(x,z)=>z*(n+1)+x,add=(a,b)=>{const edge={a,b,used:false};edges.push(edge);const k=key(...a);if(!starts.has(k))starts.set(k,[]);starts.get(k).push(edge);};
 for(let z=0;z<n;z++)for(let x=0;x<n;x++){if(!mask[z*n+x])continue;if(z===0||!mask[(z-1)*n+x])add([x,z],[x+1,z]);if(x===n-1||!mask[z*n+x+1])add([x+1,z],[x+1,z+1]);if(z===n-1||!mask[(z+1)*n+x])add([x+1,z+1],[x,z+1]);if(x===0||!mask[z*n+x-1])add([x,z+1],[x,z]);}
 const loops=[];for(const first of edges){if(first.used)continue;let e=first;const loop=[];for(let guard=0;guard<=edges.length;guard++){e.used=true;loop.push([(e.a[0]-n/2)*cell+offset[0],(e.a[1]-n/2)*cell+offset[1]]);if(key(...e.b)===key(...first.a))break;const candidates=(starts.get(key(...e.b))||[]).filter(c=>!c.used);if(!candidates.length)throw new Error('Unclosed raster contour.');const dx=e.b[0]-e.a[0],dz=e.b[1]-e.a[1];candidates.sort((u,v)=>Math.atan2(dx*(v.b[1]-v.a[1])-dz*(v.b[0]-v.a[0]),dx*(v.b[0]-v.a[0])+dz*(v.b[1]-v.a[1]))-Math.atan2(dx*(u.b[1]-u.a[1])-dz*(u.b[0]-u.a[0]),dx*(u.b[0]-u.a[0])+dz*(u.b[1]-u.a[1])));e=candidates[0];}
  if(loop.length>=4)loops.push(smooth?smoothContour(loop,cell*.28):loop);
 }return loops.sort((a,b)=>polygonArea(b)-polygonArea(a));
}
export function horizontalIntervals(region,z){const hits=[];for(const ring of [region.polygon,...(region.holes||[])])for(let i=0;i<ring.length;i++){const a=ring[i],b=ring[(i+1)%ring.length];if((a[1]>z)!==(b[1]>z))hits.push(a[0]+(b[0]-a[0])*(z-a[1])/(b[1]-a[1]));}hits.sort((a,b)=>a-b);const out=[];for(let i=0;i+1<hits.length;i+=2)out.push([hits[i],hits[i+1]]);return out;}
