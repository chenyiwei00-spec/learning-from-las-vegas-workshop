/** Weld the shared top surface, round its real outline, then extrude a closed slab. */
export function roundRoad(mesh,topOffsets,step){
 const original=mesh.positions,columns=new Map(),refs=[];
 for(const start of topOffsets)for(let k=start;k<start+18;k+=3){
  const v=[original[k],original[k+1],original[k+2]],key=[v[0],v[2]].map(x=>Math.round(x*1e4)).join(',');
  const record={v,index:refs.length,id:0};refs.push(record);if(!columns.has(key))columns.set(key,[]);columns.get(key).push(record);
 }
 const points=[];
 for(const values of columns.values()){
  values.sort((a,b)=>a.v[1]-b.v[1]);const levels=[];
  for(const r of values){let group=levels.at(-1);if(!group||r.v[1]-group[0].v[1]>.35){group=[];levels.push(group);}group.push(r);}
  for(const group of levels){const id=points.length/3,y=group.reduce((n,r)=>n+r.v[1],0)/group.length;points.push(group[0].v[0],y,group[0].v[2]);for(const r of group)r.id=id;}
 }
 const tops=[],edges=new Map();
 for(let k=0;k<refs.length;k+=3){const tri=refs.slice(k,k+3).map(r=>r.id);if(new Set(tri).size<3)continue;tops.push(...tri);
  for(let j=0;j<3;j++){const a=tri[j],b=tri[(j+1)%3],key=Math.min(a,b)+','+Math.max(a,b),e=edges.get(key);if(e)e.count++;else edges.set(key,{a,b,count:1});}
 }
 const boundary=new Map(),rims=[...edges.values()].filter(e=>e.count===1);
 for(const {a,b} of rims){if(!boundary.has(a))boundary.set(a,[]);if(!boundary.has(b))boundary.set(b,[]);boundary.get(a).push(b);boundary.get(b).push(a);}
 const before=points.slice();
 for(let pass=0;pass<8;pass++){const next=points.slice();for(const [id,near] of boundary){if(near.length!==2)continue;for(const axis of [0,2]){const at=id*3+axis,average=(points[near[0]*3+axis]+points[near[1]*3+axis])/2;next[at]=Math.max(before[at]-step*.49,Math.min(before[at]+step*.49,points[at]+(average-points[at])*.45));}}for(let i=0;i<points.length;i++)points[i]=next[i];}
 // Each cell is a closed slab, including at multilevel branch junctions.
 // Shared corner positions and shared top normals make the union visually seamless.
 const smooth=new Float64Array(points.length);
 for(let k=0;k<tops.length;k+=3){const a=tops[k]*3,b=tops[k+1]*3,c=tops[k+2]*3,ux=points[b]-points[a],uy=points[b+1]-points[a+1],uz=points[b+2]-points[a+2],vx=points[c]-points[a],vy=points[c+1]-points[a+1],vz=points[c+2]-points[a+2],n=[uy*vz-uz*vy,uz*vx-ux*vz,ux*vy-uy*vx];for(const at of [a,b,c])for(let j=0;j<3;j++)smooth[at+j]+=n[j];}
 const positions=[],normals=[],index=[],walkIndex=[];
 for(let k=0;k<tops.length;k+=6){
  const source=tops.slice(k,k+6),unique=[...new Set(source)],map=new Map(),base=positions.length/3,n=unique.length;
  for(let j=0;j<n;j++){const id=unique[j];map.set(id,base+j);positions.push(...points.slice(id*3,id*3+3));const v=Array.from(smooth.slice(id*3,id*3+3)),L=Math.hypot(...v)||1;normals.push(...v.map(x=>x/L));}
  for(let j=0;j<n;j++){const id=unique[j],at=id*3;positions.push(points[at],points[at+1]-mesh.thickness,points[at+2]);normals.push(-normals[(base+j)*3],-normals[(base+j)*3+1],-normals[(base+j)*3+2]);}
  const local=source.map(id=>map.get(id)),rim=new Map();
  for(let q=0;q<local.length;q+=3){const tri=local.slice(q,q+3);index.push(...tri);walkIndex.push(...tri);index.push(tri[2]+n,tri[1]+n,tri[0]+n);for(let j=0;j<3;j++){const a=tri[j],b=tri[(j+1)%3],key=Math.min(a,b)+','+Math.max(a,b);if(rim.has(key))rim.delete(key);else rim.set(key,{a,b});}}
  for(const {a,b} of rim.values())index.push(b,a,a+n,b,a+n,b+n);
 }
 mesh.positions=Float32Array.from(positions);mesh.normals=Float32Array.from(normals);mesh.index=Uint32Array.from(index);mesh.colors=new Float32Array(positions.length).fill(1);mesh.walkIndex=Uint32Array.from(walkIndex);mesh.roundedBoundary=true;
 return mesh;
}
/** Bin the rendered top triangles, so rounded edges and walking cannot disagree. */
export function roadSupport(mesh){
 const p=mesh.positions,idx=mesh.walkIndex,bins=new Map(),step=1;
 if(!idx)return ()=>[];
 for(let k=0;k<idx.length;k+=3){const a=idx[k]*3,b=idx[k+1]*3,c=idx[k+2]*3;
  for(let z=Math.floor(Math.min(p[a+2],p[b+2],p[c+2])/step);z<=Math.floor(Math.max(p[a+2],p[b+2],p[c+2])/step);z++)for(let x=Math.floor(Math.min(p[a],p[b],p[c])/step);x<=Math.floor(Math.max(p[a],p[b],p[c])/step);x++){const key=x+','+z;if(!bins.has(key))bins.set(key,[]);bins.get(key).push(k);}
 }
 return (x,z)=>{const out=[];for(const k of bins.get(Math.floor(x/step)+','+Math.floor(z/step))||[]){const a=idx[k]*3,b=idx[k+1]*3,c=idx[k+2]*3,ax=p[a],az=p[a+2],bx=p[b],bz=p[b+2],cx=p[c],cz=p[c+2],den=(bz-cz)*(ax-cx)+(cx-bx)*(az-cz);if(Math.abs(den)<1e-10)continue;const u=((bz-cz)*(x-cx)+(cx-bx)*(z-cz))/den,v=((cz-az)*(x-cx)+(ax-cx)*(z-cz))/den;if(u>=-1e-5&&v>=-1e-5&&u+v<=1.00001)out.push(u*p[a+1]+v*p[b+1]+(1-u-v)*p[c+1]);}return out;};
}
