import {clamp} from './surreal-volume.js';
export function sampleField(g,x,y,z){
 const fx=(x-g.minX)/g.step,fy=(y-g.minY)/g.step,fz=(z-g.minZ)/g.step,ix=Math.floor(fx),iy=Math.floor(fy),iz=Math.floor(fz);
 if(ix<0||iy<0||iz<0||ix>=g.nx-1||iy>=g.ny-1||iz>=g.nz-1)return 100;
 let sum=0;for(let dz=0;dz<=1;dz++)for(let dy=0;dy<=1;dy++)for(let dx=0;dx<=1;dx++){const w=(dx?fx-ix:1-fx+ix)*(dy?fy-iy:1-fy+iy)*(dz?fz-iz:1-fz+iz);sum+=g.values[((iz+dz)*g.ny+iy+dy)*g.nx+ix+dx]*w;}return sum;
}
export function surfaceGrid(meshes,g){
 const data=new Uint8Array(g.nx*g.ny*g.nz);
 for(const m of meshes){if(!m.solid)continue;const p=m.positions,indices=m.index,n=indices?indices.length:p.length/3;
  for(let k=0;k<n;k+=3){const a=(indices?indices[k]:k)*3,b=(indices?indices[k+1]:k+1)*3,c=(indices?indices[k+2]:k+2)*3;
   const loX=clamp(Math.floor((Math.min(p[a],p[b],p[c])-g.minX)/g.step),0,g.nx-1),hiX=clamp(Math.ceil((Math.max(p[a],p[b],p[c])-g.minX)/g.step),0,g.nx-1);
   const loY=clamp(Math.floor((Math.min(p[a+1],p[b+1],p[c+1])-g.minY)/g.step),0,g.ny-1),hiY=clamp(Math.ceil((Math.max(p[a+1],p[b+1],p[c+1])-g.minY)/g.step),0,g.ny-1);
   const loZ=clamp(Math.floor((Math.min(p[a+2],p[b+2],p[c+2])-g.minZ)/g.step),0,g.nz-1),hiZ=clamp(Math.ceil((Math.max(p[a+2],p[b+2],p[c+2])-g.minZ)/g.step),0,g.nz-1);
   for(let z=loZ;z<=hiZ;z++)for(let y=loY;y<=hiY;y++)for(let x=loX;x<=hiX;x++)data[(z*g.ny+y)*g.nx+x]=1;
  }
 }return data;
}
export function bodyClear(g,surfaces,x,floor,z,radius=.23,outsideClear=false){
 for(const y of [.65,1.2,1.65,2.35])for(const [dx,dz] of [[0,0],[radius,0],[-radius,0],[0,radius],[0,-radius]]){
  const px=x+dx,pz=z+dz,py=floor+y,ix=Math.round((px-g.minX)/g.step),iy=Math.round((py-g.minY)/g.step),iz=Math.round((pz-g.minZ)/g.step);
  if(ix<0||iy<0||iz<0||ix>=g.nx||iy>=g.ny||iz>=g.nz){if(outsideClear)continue;return false;}
  if(sampleField(g,px,py,pz)<.03||surfaces[(iz*g.ny+iy)*g.nx+ix])return false;
 }return true;
}
export function buildNavigation(nodes,paths,g,surfaces,bounds){
 const step=.28,nx=Math.ceil((bounds.maxX-bounds.minX)/step)+1,nz=Math.ceil((bounds.maxZ-bounds.minZ)/step)+1,layers=12,heights=new Float32Array(nx*nz*layers),counts=new Uint8Array(nx*nz);
 heights.fill(NaN);
 // Bin candidate rooms/segments once instead of scanning every ramp for every empty cell.
 const bins=new Map(),binSize=2;
 const add=(part,minX,maxX,minZ,maxZ)=>{for(let z=Math.floor(minZ/binSize);z<=Math.floor(maxZ/binSize);z++)for(let x=Math.floor(minX/binSize);x<=Math.floor(maxX/binSize);x++){const key=x+','+z;if(!bins.has(key))bins.set(key,[]);bins.get(key).push(part);}};
 for(const n of nodes){const r=n.radius*.72;add({n,r},n.center.x-r,n.center.x+r,n.center.z-r,n.center.z+r);}
 for(const path of paths)for(let k=1;k<path.points.length;k++){const a=path.points[k-1],b=path.points[k],r=path.width/2+.34,dx=b.x-a.x,dz=b.z-a.z;add({a,b,r,dx,dz,L:dx*dx+dz*dz||1},Math.min(a.x,b.x)-r,Math.max(a.x,b.x)+r,Math.min(a.z,b.z)-r,Math.max(a.z,b.z)+r);}
 const candidates=(x,z)=>{
  const out=[];for(const p of bins.get(Math.floor(x/binSize)+','+Math.floor(z/binSize))||[]){
   if(p.n){if(Math.hypot(x-p.n.center.x,z-p.n.center.z)<p.r)out.push(p.n.floor+.055);}
   else{const t=clamp(((x-p.a.x)*p.dx+(z-p.a.z)*p.dz)/p.L,0,1);if(Math.hypot(x-p.a.x-p.dx*t,z-p.a.z-p.dz*t)<p.r)out.push(p.a.y+(p.b.y-p.a.y)*t+.055);}
  }return out;
 };
 // Only candidate cells near the room / ramp union are considered; routes and
 // actual extracted triangles both participate in first-person collision.
 for(let z=0;z<nz;z++)for(let x=0;x<nx;x++){const px=bounds.minX+x*step,pz=bounds.minZ+z*step,list=candidates(px,pz).sort((a,b)=>a-b),values=[];for(const h of list)if(!g||bodyClear(g,surfaces,px,h,pz)){const near=values.findIndex(v=>Math.abs(v-h)<.28);if(near>=0)values[near]=Math.max(values[near],h);else values.push(h);}
  const id=z*nx+x;counts[id]=Math.min(layers,values.length);for(let k=0;k<counts[id];k++)heights[id*layers+k]=values[k];
 }
 return {step,nx,nz,layers,minX:bounds.minX,minZ:bounds.minZ,heights,counts};
}
export function floorAt(nav,x,z,current=0,maxStep=.22){
 const ix=Math.round((x-nav.minX)/nav.step),iz=Math.round((z-nav.minZ)/nav.step);
 if(ix<0||iz<0||ix>=nav.nx||iz>=nav.nz)return null;const id=iz*nav.nx+ix;let best=null,d=Infinity;
 for(let k=0;k<nav.counts[id];k++){const h=renderedFloor(nav,id,k,x,z),delta=Math.abs(h-current);if(delta<d&&delta<=maxStep){best=h;d=delta;}}return best;
}
export function validateCirculation(nodes,paths,g,surfaces,width,nav=null){
 let samples=0,maxGrade=0;
 for(const path of paths)for(let k=1;k<path.points.length;k++){const a=path.points[k-1],b=path.points[k],L=Math.hypot(b.x-a.x,b.z-a.z),grade=Math.abs(b.y-a.y)/(L||1),right={x:-(b.z-a.z)/(L||1),z:(b.x-a.x)/(L||1)};maxGrade=Math.max(maxGrade,grade);
  for(let t=0;t<=1;t+=.25)for(const side of [-width/2,0,width/2]){const x=a.x+(b.x-a.x)*t+right.x*side,z=a.z+(b.z-a.z)*t+right.z*side,y=a.y+(b.y-a.y)*t+.055;samples++;const support=nav?floorAt(nav,x,z,y,.6):y;if(support===null){const e=Error('A carved route is missing a supporting floor.');const id=Math.round((z-nav.minZ)/nav.step)*nav.nx+Math.round((x-nav.minX)/nav.step);e.details={point:{x,y,z},path:path.role,levels:Array.from(nav.heights.subarray(id*nav.layers,id*nav.layers+nav.layers)),count:nav.counts[id]};throw e;}if((nav&&!floorClear(nav,x,z,support,.05))||!bodyClear(g,surfaces,x,support,z,.05)){const e=Error('A source fragment obstructs a carved route. Try the next seed or reduce void density.');e.details={point:{x,y,z},path:path.role,floorBlocked:nav?!floorClear(nav,x,z,support,.05):false,bodyBlocked:!bodyClear(g,surfaces,x,support,z,.05),field:sampleField(g,x,y+1.65,z),support,levels:nav?Array.from(nav.heights.subarray((Math.round((z-nav.minZ)/nav.step)*nav.nx+Math.round((x-nav.minX)/nav.step))*nav.layers,(Math.round((z-nav.minZ)/nav.step)*nav.nx+Math.round((x-nav.minX)/nav.step))*nav.layers+nav.layers)):null};throw e;}}
 }
 for(const n of nodes)if(!bodyClear(g,surfaces,n.view.x,n.view.y,n.view.z))throw Error('A retained fragment blocks a split-level chamber.');
 return {samples,maxGrade,headroom:2.35,routeWidth:width,actualTriangleVoxels:true};
}

export function renderedFloor(nav,id,k,x,z){
 if(!nav.corners)return nav.heights[id*nav.layers+k];
 const ix=id%nav.nx,iz=Math.floor(id/nav.nx),u=clamp((x-nav.minX-ix*nav.step)/nav.step+.5,0,1),v=clamp((z-nav.minZ-iz*nav.step)/nav.step+.5,0,1),off=(id*nav.layers+k)*4,h=nav.corners;
 return u>=v?h[off]*(1-u)+h[off+1]*(u-v)+h[off+2]*v:h[off]*(1-v)+h[off+2]*u+h[off+3]*(v-u);
}
export function floorClear(nav,x,z,floor,radius=.23){
 for(const [dx,dz] of [[0,0],[radius,0],[-radius,0],[0,radius],[0,-radius]]){
  const px=x+dx,pz=z+dz,ix=Math.round((px-nav.minX)/nav.step),iz=Math.round((pz-nav.minZ)/nav.step);if(ix<0||iz<0||ix>=nav.nx||iz>=nav.nz)continue;
  const id=iz*nav.nx+ix;for(let k=0;k<nav.counts[id];k++){const h=renderedFloor(nav,id,k,px,pz);if(h>floor+.4&&h<floor+2.79)return false;}
 }return true;
}

export function prepareTerrain(nav){
 // Merge surfaces that cannot have a human-height space between them. Spread
 // height changes as a continuous terrain, while retaining genuine overpasses.
 const merge=(list)=>{const out=[];for(const h of list.sort((a,b)=>a-b)){if(out.length&&h-out.at(-1)<2.72)out[out.length-1]=h;else out.push(h);}return out;};
 for(let id=0;id<nav.counts.length;id++){const v=merge(Array.from(nav.heights.subarray(id*nav.layers,id*nav.layers+nav.counts[id])));nav.counts[id]=v.length;nav.heights.fill(NaN,id*nav.layers,(id+1)*nav.layers);nav.heights.set(v,id*nav.layers);}
 for(let iteration=0;iteration<65;iteration++){let change=0;const next=nav.heights.slice();
  for(let z=0;z<nav.nz;z++)for(let x=0;x<nav.nx;x++){const id=z*nav.nx+x;for(let k=0;k<nav.counts[id];k++){let h=nav.heights[id*nav.layers+k];
   for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){const xx=x+dx,zz=z+dz;if(xx<0||zz<0||xx>=nav.nx||zz>=nav.nz)continue;const n=zz*nav.nx+xx;let closest=null,d=2.72;for(let j=0;j<nav.counts[n];j++){const v=nav.heights[n*nav.layers+j],delta=Math.abs(v-h);if(delta<d){d=delta;closest=v;}}if(closest!==null)h=Math.max(h,closest-.38*nav.step);}
   next[id*nav.layers+k]=h;change=Math.max(change,h-nav.heights[id*nav.layers+k]);
  }}nav.heights=next;if(change<.001)break;
 }
 // A smooth mesh corner shared by neighbouring cells is used for rendering
 // and querying; no independent collision proxy invents a different floor.
 return nav;
}
export function terrainVoid(nav){
 const low=new Float32Array(nav.counts.length),high=new Float32Array(nav.counts.length),reach=4;low.fill(Infinity);high.fill(-Infinity);
 for(let z=0;z<nav.nz;z++)for(let x=0;x<nav.nx;x++){const id=z*nav.nx+x;
  for(let dz=-reach;dz<=reach;dz++)for(let dx=-reach;dx<=reach;dx++){if(dx*dx+dz*dz>reach*reach)continue;const xx=x+dx,zz=z+dz;if(xx<0||zz<0||xx>=nav.nx||zz>=nav.nz)continue;const q=zz*nav.nx+xx;
   for(let k=0;k<nav.counts[q];k++){const h=nav.heights[q*nav.layers+k];low[id]=Math.min(low[id],h);high[id]=Math.max(high[id],h);}
  }
 }
 return (x,y,z)=>{const ix=Math.round((x-nav.minX)/nav.step),iz=Math.round((z-nav.minZ)/nav.step);if(ix<0||iz<0||ix>=nav.nx||iz>=nav.nz)return 1e5;const id=iz*nav.nx+ix;if(!Number.isFinite(low[id]))return 1e5;return Math.max(low[id]-.32-y,y-high[id]-4.05);};
}

export function buildWideRoutes(nav,nodes,entrance,exit,g,surfaces,width,connections){
 const allowed=new Uint8Array(nav.heights.length),R=width/2;
 const position=i=>{const id=Math.floor(i/nav.layers),x=nav.minX+(id%nav.nx)*nav.step,z=nav.minZ+Math.floor(id/nav.nx)*nav.step;return {x,z,y:renderedFloor(nav,id,i%nav.layers,x,z)};};
 for(let id=0;id<nav.counts.length;id++)for(let k=0;k<nav.counts[id];k++){const i=id*nav.layers+k,p=position(i);let clear=true;
  for(let a=0;a<8&&clear;a++){const theta=a/8*Math.PI*2,x=p.x+Math.cos(theta)*R,z=p.z+Math.sin(theta)*R,h=floorAt(nav,x,z,p.y,.72);if(h===null||!floorClear(nav,x,z,h,.04)||!bodyClear(g,surfaces,x,h,z,.04))clear=false;}
  if(clear)allowed[i]=1;
 }
 nav.widthValid=allowed;
 function nearest(p){let best=null,d=Infinity;for(let id=0;id<nav.counts.length;id++)for(let k=0;k<nav.counts[id];k++){const i=id*nav.layers+k;if(!allowed[i])continue;const q=position(i),horizontal=Math.hypot(q.x-p.x,q.z-p.z);if(horizontal>2.6)continue;const score=horizontal+Math.abs(q.y-p.y)*2;if(score<d){d=score;best=i;}}
  if(best===null)throw Error('A room cannot retain a full-width entrance. Try the next seed.');return best;}
 class Heap{constructor(){this.a=[];}push(v){let i=this.a.length;this.a.push(v);while(i){const p=(i-1)>>1;if(this.a[p].f<=v.f)break;this.a[i]=this.a[p];i=p;}this.a[i]=v;}pop(){const v=this.a[0],last=this.a.pop();if(this.a.length){let i=0;while(i*2+1<this.a.length){let c=i*2+1;if(c+1<this.a.length&&this.a[c+1].f<this.a[c].f)c++;if(this.a[c].f>=last.f)break;this.a[i]=this.a[c];i=c;}this.a[i]=last;}return v;}get length(){return this.a.length;}}
 function route(A,B){const start=nearest(A),end=nearest(B),target=position(end),heap=new Heap(),cost=new Map([[start,0]]),parent=new Map(),seen=new Set();heap.push({i:start,f:0});
  while(heap.length){const {i}=heap.pop();if(seen.has(i))continue;seen.add(i);if(i===end){const result=[];let id=end;while(id!==undefined){const p=position(id);result.push({...p,y:p.y-.055});id=parent.get(id);}return result.reverse();}
   const id=Math.floor(i/nav.layers),x=id%nav.nx,z=Math.floor(id/nav.nx),h=position(i).y;
   for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){const xx=x+dx,zz=z+dz;if(xx<0||zz<0||xx>=nav.nx||zz>=nav.nz)continue;const cell=zz*nav.nx+xx;
    for(let k=0;k<nav.counts[cell];k++){const next=cell*nav.layers+k;if(!allowed[next]||seen.has(next))continue;const p=position(next),delta=Math.abs(p.y-h);if(delta>.22)continue;const d=cost.get(i)+1+delta*3;
     if(d>=(cost.get(next)??Infinity))continue;cost.set(next,d);parent.set(next,i);heap.push({i:next,f:d+Math.hypot(target.x-p.x,target.z-p.z)/nav.step+Math.abs(target.y-p.y)*2});
    }
   }
  }throw Error('The multilevel route cannot maintain its full width. Try the next seed.');
 }
 for(const n of nodes){const p=position(nearest(n.view));n.view=p;n.floor=p.y-.055;n.entry={...p};}
 Object.assign(entrance,position(nearest(entrance)));Object.assign(exit,position(nearest(exit)));
 const paths=[];
 for(const e of connections){const a=nodes[e.a],b=nodes[e.b];try{paths.push({role:e.loop?'interlocking loop':'rising carved connection',from:a.id,to:b.id,width,points:route(a.view,b.view)});}catch(error){if(!e.loop)throw error;}}
 paths.push({role:'carved entrance',width,points:route(entrance,nodes[0].view)});
 paths.push({role:'carved exit / terrace',width,points:route(nodes.at(-1).view,exit)});
 for(const n of nodes){const p=paths.find(p=>p.from===n.id||p.to===n.id);if(p){const q=p.from===n.id?p.points[Math.min(5,p.points.length-1)]:p.points[Math.max(0,p.points.length-6)];n.entry={...q,y:q.y+.055};}}
 return paths;
}
