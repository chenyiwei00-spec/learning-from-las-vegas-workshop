import {renderedFloor} from './surreal-navigation.js';
/** Recess unused exterior floor aprons, keeping body floors and full-width routes. */
export function recessExteriorRoads(nav,mass,paths,nodes,actorScale=1){
 const bins=new Map(),size=2,margin=nav.step*1.5,protectedLevels=new Set();
 // Preserve the exact supports checked by circulation validation, together
 // with their shared-corner contributors. Trimming must not change a ramp.
 const protect=(x,z,y)=>{
  const ix=Math.round((x-nav.minX)/nav.step),iz=Math.round((z-nav.minZ)/nav.step);if(ix<0||iz<0||ix>=nav.nx||iz>=nav.nz)return;
  const id=iz*nav.nx+ix;let selected=-1,d=.600001;
  for(let k=0;k<nav.counts[id];k++){const delta=Math.abs(renderedFloor(nav,id,k,x,z)-y);if(delta<d){selected=k;d=delta;}}
  if(selected<0)return;protectedLevels.add(id*nav.layers+selected);const h=nav.heights[id*nav.layers+selected];
  for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++){const xx=ix+dx,zz=iz+dz;if(xx<0||zz<0||xx>=nav.nx||zz>=nav.nz)continue;const q=zz*nav.nx+xx;let match=-1,gap=.600001;
   for(let k=0;k<nav.counts[q];k++){const delta=Math.abs(nav.heights[q*nav.layers+k]-h);if(delta<gap){match=k;gap=delta;}}if(match>=0)protectedLevels.add(q*nav.layers+match);
  }
 };
 for(const path of paths)for(let i=1;i<path.points.length;i++){const a=path.points[i-1],b=path.points[i],dx=b.x-a.x,dz=b.z-a.z,L=Math.hypot(dx,dz)||1;
  for(const t of [0,.25,.5,.75,1]){const steps=Math.max(2,Math.ceil(path.width/(nav.step*.5)));for(let k=0;k<=steps;k++){const side=-path.width/2+path.width*k/steps;protect(a.x+dx*t-dz/L*side,a.z+dz*t+dx/L*side,a.y+(b.y-a.y)*t+.055);}}
 }
 for(const node of nodes)protect(node.view.x,node.view.z,node.view.y);
 const add=segment=>{const r=segment.r;for(let z=Math.floor((Math.min(segment.a.z,segment.b.z)-r)/size);z<=Math.floor((Math.max(segment.a.z,segment.b.z)+r)/size);z++)for(let x=Math.floor((Math.min(segment.a.x,segment.b.x)-r)/size);x<=Math.floor((Math.max(segment.a.x,segment.b.x)+r)/size);x++){const key=x+','+z;if(!bins.has(key))bins.set(key,[]);bins.get(key).push(segment);}};
 for(const path of paths)for(let i=1;i<path.points.length;i++)add({a:path.points[i-1],b:path.points[i],r:path.width/2+margin,offset:.055});
 for(const node of nodes)add({a:node.view,b:node.view,r:(paths[0]?.width||2.2*actorScale)/2+margin,offset:0});
 let kept=0,removed=0;
 for(let id=0;id<nav.counts.length;id++){
  const x=nav.minX+(id%nav.nx)*nav.step,z=nav.minZ+Math.floor(id/nav.nx)*nav.step,candidates=bins.get(Math.floor(x/size)+','+Math.floor(z/size))||[];let next=0;
  for(let k=0;k<nav.counts[id];k++){
   const at=id*nav.layers+k,h=renderedFloor(nav,id,k,x,z),inside=mass(x,h+.6*actorScale,z)<=.3*actorScale+nav.step*.3;
   const required=protectedLevels.has(at)||inside||candidates.some(s=>{const dx=s.b.x-s.a.x,dz=s.b.z-s.a.z,t=Math.max(0,Math.min(1,((x-s.a.x)*dx+(z-s.a.z)*dz)/(dx*dx+dz*dz||1))),y=s.a.y+(s.b.y-s.a.y)*t+s.offset;return Math.hypot(x-s.a.x-dx*t,z-s.a.z-dz*t)<=s.r&&Math.abs(h-y)<=.6;});
   if(required){const dest=id*nav.layers+next++;nav.heights[dest]=nav.heights[at];nav.corners.copyWithin(dest*4,at*4,at*4+4);if(nav.widthValid)nav.widthValid[dest]=nav.widthValid[at];kept++;}else removed++;
  }
  nav.counts[id]=next;nav.heights.fill(NaN,id*nav.layers+next,(id+1)*nav.layers);if(nav.widthValid)nav.widthValid.fill(0,id*nav.layers+next,(id+1)*nav.layers);
 }
 return {kept,removed,removedFraction:removed/(kept+removed||1)};
}
