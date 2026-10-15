// Source-contour SDF union + simultaneous void difference, extracted as a welded
// indexed marching-tetrahedra mesh. Native scanned fragments remain separate.
const TAU=Math.PI*2;
export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export function seeded(seed){let x=seed>>>0;return ()=>{x+=0x6D2B79F5;let t=Math.imul(x^x>>>15,1|x);t^=t+Math.imul(t^t>>>7,61|t);return ((t^t>>>14)>>>0)/4294967296;};}
export const smoothMin=(a,b,k)=>{if(!k)return Math.min(a,b);const h=Math.max(k-Math.abs(a-b),0)/k;return Math.min(a,b)-h*h*k*.25;};
export function rotation(yaw,pitch,roll){
 const cy=Math.cos(yaw),sy=Math.sin(yaw),cx=Math.cos(pitch),sx=Math.sin(pitch),cz=Math.cos(roll),sz=Math.sin(roll);
 return [cy*cz+sy*sx*sz,-cy*sz+sy*sx*cz,sy*cx,cx*sz,cx*cz,-sx,-sy*cz+cy*sx*sz,sy*sz+cy*sx*cz,cy*cx];
}
export function profile(a,t,theta){
 const y=clamp(t,0,1)*(a.bands-1),b=Math.min(a.bands-2,Math.floor(y)),v=y-b,u=((theta/TAU%1)+1)%1*a.angles,j=Math.floor(u)%a.angles,n=(j+1)%a.angles,w=u-Math.floor(u);
 return (a.profile[b][j]*(1-w)+a.profile[b][n]*w)*(1-v)+(a.profile[b+1][j]*(1-w)+a.profile[b+1][n]*w)*v;
}
export function forward(m,p){
 let x=p[0]*m.scaleX,y=(p[1]-m.a.height*.45)*m.scaleY,z=p[2]*m.scaleZ;
 const t=p[1]/m.a.height,angle=m.distortion*.35*Math.sin(t*3.4+m.phase),c=Math.cos(angle),s=Math.sin(angle),xx=x*c-z*s;
 z=x*s+z*c+m.distortion*.35*Math.sin(t*4.3+m.phase);x=xx+m.distortion*.38*Math.sin(t*3.7+m.phase);
 const r=m.matrix;return [m.x+r[0]*x+r[1]*y+r[2]*z,m.cy+r[3]*x+r[4]*y+r[5]*z,m.z+r[6]*x+r[7]*y+r[8]*z];
}
export function inverse(m,x,y,z){
 x-=m.x;y-=m.cy;z-=m.z;const r=m.matrix,yy=(r[1]*x+r[4]*y+r[7]*z)/m.scaleY+m.a.height*.45,t=yy/m.a.height;
 let xx=r[0]*x+r[3]*y+r[6]*z-m.distortion*.38*Math.sin(t*3.7+m.phase),zz=r[2]*x+r[5]*y+r[8]*z-m.distortion*.35*Math.sin(t*4.3+m.phase);
 const angle=m.distortion*.35*Math.sin(t*3.4+m.phase),c=Math.cos(angle),s=Math.sin(angle);
 return [(xx*c+zz*s)/m.scaleX,yy,(-xx*s+zz*c)/m.scaleZ];
}
export function moduleDistance(m,x,y,z){
 const p=inverse(m,x,y,z),theta=Math.atan2(p[2],p[0]),r=profile(m.a,p[1]/m.a.height,theta);
 const envelope=Math.max(r,m.a.maxRadius*.78);
 return Math.max((Math.hypot(p[0],p[2])-envelope)*Math.min(m.scaleX,m.scaleZ),-p[1]*m.scaleY,(p[1]-m.a.height*.71)*m.scaleY);
}
export function massFunction(modules,blend){
 const contacts=modules.filter(m=>m.parent!==null).map(m=>{const p=modules[m.parent];return {x:(m.x+p.x)/2,z:(m.z+p.z)/2,y:(m.floor+p.floor)/2+2.7};});
 return (x,y,z)=>{let d=1e5;for(const m of modules)d=smoothMin(d,moduleDistance(m,x,y,z),blend);let seam=0;for(const c of contacts){const q=((x-c.x)/3.1)**2+((z-c.z)/3.1)**2+((y-c.y)/5.2)**2;seam=Math.max(seam,(.7+blend*.6)*Math.exp(-q*.65));}return Math.max(d-seam,-.70-y);};
}
export function makeVoids(nodes,paths,atriums,s,bounds){
 const primitives=[],bins=new Map(),binSize=3.5,pad=1.0;
 for(const n of nodes){const radius=n.radius,top=n.floor+3.6+s.voidDensity*1.7;primitives.push({type:'room',node:n,x:n.center.x,z:n.center.z,rx:radius,rz:radius*(.9+n.variation*.18),bottom:n.floor-.23,top,
 bounds:{minX:n.center.x-radius*1.3,maxX:n.center.x+radius*1.3,minZ:n.center.z-radius*1.3,maxZ:n.center.z+radius*1.3,minY:n.floor-.5,maxY:top+.7}});}
 for(const path of paths)for(let k=1;k<path.points.length;k++){
  const a=path.points[k-1],b=path.points[k],radius=path.carveRadius??(s.corridorWidth/2+pad);
  primitives.push({type:'passage',a,b,radius,bottom:-.25,clearance:path.clearance??(3.4+s.voidDensity*.9),
  bounds:{minX:Math.min(a.x,b.x)-radius-.3,maxX:Math.max(a.x,b.x)+radius+.3,minZ:Math.min(a.z,b.z)-radius-.3,maxZ:Math.max(a.z,b.z)+radius+.3,minY:Math.min(a.y,b.y)-.5,maxY:Math.max(a.y,b.y)+4.8}});
 }
 for(const a of atriums)primitives.push({type:'atrium',...a,bottom:a.floor-.23,top:bounds.maxY+2,bounds:{minX:a.x-a.radius*1.25,maxX:a.x+a.radius*1.25,minZ:a.z-a.radius*1.25,maxZ:a.z+a.radius*1.25,minY:a.floor-.5,maxY:bounds.maxY+2}});
 for(const p of primitives){const b=p.bounds;for(let z=Math.floor(b.minZ/binSize);z<=Math.floor(b.maxZ/binSize);z++)for(let y=Math.floor(b.minY/binSize);y<=Math.floor(b.maxY/binSize);y++)for(let x=Math.floor(b.minX/binSize);x<=Math.floor(b.maxX/binSize);x++){const key=x+','+y+','+z;if(!bins.has(key))bins.set(key,[]);bins.get(key).push(p);}}
 const value=(x,y,z)=>{const candidates=bins.get(Math.floor(x/binSize)+','+Math.floor(y/binSize)+','+Math.floor(z/binSize));if(!candidates)return 1e5;let best=1e5;
  for(const p of candidates){let d;
   if(p.type==='passage'){const dx=p.b.x-p.a.x,dz=p.b.z-p.a.z,t=clamp(((x-p.a.x)*dx+(z-p.a.z)*dz)/(dx*dx+dz*dz||1),0,1),floor=p.a.y+(p.b.y-p.a.y)*t;
    d=Math.max(Math.hypot(x-p.a.x-dx*t,z-p.a.z-dz*t)-p.radius,floor+p.bottom-y,y-floor-p.clearance);
   }else if(p.type==='room'){const dx=x-p.x,dz=z-p.z,angle=Math.atan2(dz,dx),shape=1+.07*Math.sin(angle*3+p.node.variation*TAU)+.05*Math.cos(angle*5);
    d=Math.max((Math.hypot(dx/p.rx,dz/p.rz)-shape)*Math.min(p.rx,p.rz),p.bottom-y,y-p.top);
   }else{const dx=x-p.x,dz=z-p.z,angle=Math.atan2(dz,dx),r=p.radius*(1+.14*Math.sin(angle*3+p.phase)+.09*Math.cos(angle*5));
    d=Math.max(Math.hypot(dx,dz)-r,p.bottom-y,y-p.top);
   }best=Math.min(best,d);
  }return best;
 };
 return {value,primitives};
}
export function vertexColor(modules,x,y,z){
 let d=1e5,tag=0;for(let k=0;k<modules.length;k++){const v=moduleDistance(modules[k],x,y,z);if(v<d){d=v;tag=k;}}
 const m=modules[tag],p=inverse(m,x,y,z),b=clamp(Math.round(p[1]/m.a.height*(m.a.bands-1)),0,m.a.bands-1),angle=Math.atan2(p[2],p[0]),j=((Math.round(angle/TAU*m.a.angles)%m.a.angles)+m.a.angles)%m.a.angles;
 const c=m.a.colors[b];return {tag,color:[c[j*3]*.86+.08,c[j*3+1]*.86+.08,c[j*3+2]*.86+.08]};
}
const cube=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]];
const tetra=[[0,5,1,6],[0,1,2,6],[0,2,3,6],[0,3,7,6],[0,7,4,6],[0,4,5,6]];
export function remesh(field,modules,bounds,onProgress=()=>{}){
 let step=.36,volume=(bounds.maxX-bounds.minX)*(bounds.maxY-bounds.minY)*(bounds.maxZ-bounds.minZ);
 step=Math.max(step,Math.cbrt(volume/420000));
 const nx=Math.ceil((bounds.maxX-bounds.minX)/step)+1,ny=Math.ceil((bounds.maxY-bounds.minY)/step)+1,nz=Math.ceil((bounds.maxZ-bounds.minZ)/step)+1,minX=bounds.minX,minY=bounds.minY,minZ=bounds.minZ;
 const indexOf=(x,y,z)=>(z*ny+y)*nx+x,values=new Float32Array(nx*ny*nz);
 for(let z=0;z<nz;z++){for(let y=0;y<ny;y++)for(let x=0;x<nx;x++){let d=field(minX+x*step,minY+y*step,minZ+z*step);if(Math.abs(d)<1e-5)d=1e-5;values[indexOf(x,y,z)]=d;}if(z%5===0)onProgress(30+Math.round(z/nz*25),'Blending the source bodies and carving connected voids');}
 const positions=[],colors=[],tags=[],indices=[],edges=new Map();
 const coord=id=>{const x=id%nx,y=Math.floor(id/nx)%ny,z=Math.floor(id/(nx*ny));return [minX+x*step,minY+y*step,minZ+z*step];};
 function vertex(a,b){const key=Math.min(a,b)+':'+Math.max(a,b);if(edges.has(key))return edges.get(key);const pa=coord(a),pb=coord(b),t=values[a]/(values[a]-values[b]),p=pa.map((v,k)=>v+(pb[k]-v)*t),v=positions.length/3,c=vertexColor(modules,...p);positions.push(...p);colors.push(...c.color);tags.push(c.tag);edges.set(key,v);return v;}
 function triangle(a,b,c,direction){if(a===b||b===c||c===a)return;const i=a*3,j=b*3,k=c*3,ux=positions[j]-positions[i],uy=positions[j+1]-positions[i+1],uz=positions[j+2]-positions[i+2],vx=positions[k]-positions[i],vy=positions[k+1]-positions[i+1],vz=positions[k+2]-positions[i+2];
 const dot=(uy*vz-uz*vy)*direction[0]+(uz*vx-ux*vz)*direction[1]+(ux*vy-uy*vx)*direction[2];indices.push(a,dot>=0?b:c,dot>=0?c:b);}
 for(let z=0;z<nz-1;z++){for(let y=0;y<ny-1;y++)for(let x=0;x<nx-1;x++){
  const ids=cube.map(p=>indexOf(x+p[0],y+p[1],z+p[2])),negative=ids.filter(id=>values[id]<0).length;if(!negative||negative===8)continue;
  for(const t of tetra){const all=t.map(i=>ids[i]),inside=all.filter(id=>values[id]<0),outside=all.filter(id=>values[id]>=0);if(!inside.length||!outside.length)continue;
   const avg=list=>list.map(coord).reduce((a,p)=>a.map((v,k)=>v+p[k]/list.length),[0,0,0]),a=avg(inside),b=avg(outside),direction=b.map((v,k)=>v-a[k]);
   if(inside.length===1||outside.length===1){const single=inside.length===1?inside[0]:outside[0],other=inside.length===1?outside:inside,v=other.map(id=>vertex(single,id));triangle(...v,direction);}
   else{const a=vertex(inside[0],outside[0]),b=vertex(inside[0],outside[1]),c=vertex(inside[1],outside[0]),d=vertex(inside[1],outside[1]);triangle(a,b,d,direction);triangle(a,d,c,direction);}
  }
 }if(z%6===0)onProgress(56+Math.round(z/nz*16),'Extracting a shared, welded architectural surface');}
 return {mesh:{name:'The shared body / source-derived volumetric fusion',operation:'Overlapping source bodies → one blended mass with carved atriums, split levels and twisting passages',solid:true,positions:Float32Array.from(positions),colors:Float32Array.from(colors),index:Uint32Array.from(indices),sourceTags:Uint8Array.from(tags),sourceIds:modules.map(m=>m.sourceId),moduleIds:modules.map(m=>m.id),fusionCore:true},
 grid:{values,nx,ny,nz,minX,minY,minZ,step}};
}
export function topology(mesh){
 const nv=mesh.positions.length/3,parent=Uint32Array.from({length:nv},(_,i)=>i),edgeCounts=new Map();const find=i=>{while(parent[i]!==i){parent[i]=parent[parent[i]];i=parent[i];}return i;};
 for(let k=0;k<mesh.index.length;k+=3){const ids=Array.from(mesh.index.subarray(k,k+3));for(let j=0;j<3;j++){const a=ids[j],b=ids[(j+1)%3],ra=find(a),rb=find(b);if(ra!==rb)parent[ra]=rb;const key=Math.min(a,b)+':'+Math.max(a,b);edgeCounts.set(key,(edgeCounts.get(key)||0)+1);}}
 const components=new Map();for(let k=0;k<mesh.index.length;k+=3){const r=find(mesh.index[k]);components.set(r,(components.get(r)||0)+1);}
 return {components:components.size,componentTriangles:[...components.values()].sort((a,b)=>b-a),boundaryEdges:[...edgeCounts.values()].filter(v=>v===1).length,nonManifoldEdges:[...edgeCounts.values()].filter(v=>v>2).length,triangles:mesh.index.length/3,vertices:nv};
}

export function keepPrimaryCore(mesh){
 const parent=Uint32Array.from({length:mesh.positions.length/3},(_,i)=>i),find=i=>{while(parent[i]!==i){parent[i]=parent[parent[i]];i=parent[i];}return i;};
 for(let k=0;k<mesh.index.length;k+=3){const a=find(mesh.index[k]);for(let j=1;j<3;j++){const b=find(mesh.index[k+j]);if(a!==b)parent[b]=a;}}
 const counts=new Map();for(let k=0;k<mesh.index.length;k+=3){const r=find(mesh.index[k]);counts.set(r,(counts.get(r)||0)+1);}
 if(counts.size===1)return 0;const biggest=[...counts].sort((a,b)=>b[1]-a[1])[0],total=mesh.index.length/3;
 if(biggest[1]/total<.95)throw Error('The carved body split into separate volumes. Trying another growth pattern is necessary.');
 const p=[],c=[],tags=[],index=[],map=new Map();
 for(let k=0;k<mesh.index.length;k+=3)if(find(mesh.index[k])===biggest[0])for(let j=0;j<3;j++){const old=mesh.index[k+j];if(!map.has(old)){map.set(old,p.length/3);p.push(...mesh.positions.subarray(old*3,old*3+3));c.push(...mesh.colors.subarray(old*3,old*3+3));tags.push(mesh.sourceTags[old]);}index.push(map.get(old));}
 mesh.positions=Float32Array.from(p);mesh.colors=Float32Array.from(c);mesh.sourceTags=Uint8Array.from(tags);mesh.index=Uint32Array.from(index);return total-biggest[1];
}
