import {projectMesh} from './projectMesh.js';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
function eigenSymmetric(matrix){
 const a=matrix.map(r=>r.slice()),v=[[1,0,0],[0,1,0],[0,0,1]];
 for(let iter=0;iter<40;iter++){
  let p=0,q=1;for(const [i,j] of [[0,2],[1,2]])if(Math.abs(a[i][j])>Math.abs(a[p][q])){p=i;q=j;}
  if(Math.abs(a[p][q])<1e-14)break;
  const angle=.5*Math.atan2(2*a[p][q],a[q][q]-a[p][p]),c=Math.cos(angle),s=Math.sin(angle);
  const app=a[p][p],aqq=a[q][q],apq=a[p][q];
  for(let k=0;k<3;k++)if(k!==p&&k!==q){const kp=a[k][p],kq=a[k][q];a[k][p]=a[p][k]=c*kp-s*kq;a[k][q]=a[q][k]=s*kp+c*kq;}
  a[p][p]=c*c*app-2*s*c*apq+s*s*aqq;a[q][q]=s*s*app+2*s*c*apq+c*c*aqq;a[p][q]=a[q][p]=0;
  for(let k=0;k<3;k++){const kp=v[k][p],kq=v[k][q];v[k][p]=c*kp-s*kq;v[k][q]=s*kp+c*kq;}
 }
 const result=[0,1,2].map(i=>({variance:Math.max(0,a[i][i]),axis:v.map(row=>row[i])})).sort((x,y)=>y.variance-x.variance);
 for(const e of result){const j=e.axis.reduce((best,x,i)=>Math.abs(x)>Math.abs(e.axis[best])?i:best,0);if(e.axis[j]<0)e.axis=e.axis.map(x=>-x);}
 return result;
}

/** Pure, deterministic analysis; coordinates are baked world coordinates, not render-normalized. */
export function analyzeGeometry({positions:p,indices:ix,meshInstances=1}){
 const n=p.length/3,triangles=ix.length/3,min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity],mean=[0,0,0];
 for(let i=0;i<n;i++)for(let j=0;j<3;j++){const x=p[i*3+j];if(!Number.isFinite(x))throw new Error('Non-finite mesh coordinates.');min[j]=Math.min(min[j],x);max[j]=Math.max(max[j],x);mean[j]+=x/n;}
 const size=max.map((x,j)=>x-min[j]),diag=Math.hypot(...size);if(diag<1e-10)throw new Error('Degenerate geometry has no usable extent.');
 const cov=[[0,0,0],[0,0,0],[0,0,0]];
 for(let i=0;i<n;i++)for(let j=0;j<3;j++)for(let k=j;k<3;k++)cov[j][k]+=(p[i*3+j]-mean[j])*(p[i*3+k]-mean[k])/n;
 for(let j=0;j<3;j++)for(let k=0;k<j;k++)cov[j][k]=cov[k][j];const axes=eigenSymmetric(cov);
 const tolerance=diag*1e-6,weld=new Map(),ids=new Uint32Array(n);let unique=0;
 for(let i=0;i<n;i++){const key=[0,1,2].map(j=>Math.round((p[i*3+j]-min[j])/tolerance)).join(',');if(!weld.has(key))weld.set(key,unique++);ids[i]=weld.get(key);}
 const parent=Uint32Array.from({length:unique},(_,i)=>i),weight=new Uint32Array(unique).fill(1),used=new Set();
 const find=i=>{while(parent[i]!==i){parent[i]=parent[parent[i]];i=parent[i];}return i;};
 const join=(a,b)=>{a=find(a);b=find(b);if(a===b)return;if(weight[a]<weight[b])[a,b]=[b,a];parent[b]=a;weight[a]+=weight[b];};
 const edges=new Map(),normals=new Float32Array(triangles*3),resolution=20,buckets=Array.from({length:resolution**2},()=>[]);let area=0,degenerate=0;
 for(let f=0;f<triangles;f++){
  const ia=ix[f*3],ib=ix[f*3+1],ic=ix[f*3+2];if(Math.max(ia,ib,ic)>=n)throw new Error('Triangle index outside vertex buffer.');
  const a=ia*3,b=ib*3,c=ic*3,ux=p[b]-p[a],uy=p[b+1]-p[a+1],uz=p[b+2]-p[a+2],vx=p[c]-p[a],vy=p[c+1]-p[a+1],vz=p[c+2]-p[a+2];
  const nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx,len=Math.hypot(nx,ny,nz);
  if(len<diag*diag*1e-14){degenerate++;continue;}area+=len/2;normals.set([nx/len,ny/len,nz/len],f*3);
  const vv=[ids[ia],ids[ib],ids[ic]];vv.forEach(i=>used.add(i));join(vv[0],vv[1]);join(vv[1],vv[2]);
  for(let j=0;j<3;j++){let u=vv[j],v=vv[(j+1)%3];if(u>v)[u,v]=[v,u];const key=u*unique+v,old=edges.get(key);if(old){old.count++;if(old.count===2){old.dot=clamp(normals[f*3]*normals[old.face*3]+normals[f*3+1]*normals[old.face*3+1]+normals[f*3+2]*normals[old.face*3+2],-1,1);}}else edges.set(key,{count:1,face:f,dot:1});}
  if(size[0]>1e-12&&size[2]>1e-12){const x0=clamp(Math.floor((Math.min(p[a],p[b],p[c])-min[0])/size[0]*resolution),0,resolution-1),x1=clamp(Math.floor((Math.max(p[a],p[b],p[c])-min[0])/size[0]*resolution),0,resolution-1),z0=clamp(Math.floor((Math.min(p[a+2],p[b+2],p[c+2])-min[2])/size[2]*resolution),0,resolution-1),z1=clamp(Math.floor((Math.max(p[a+2],p[b+2],p[c+2])-min[2])/size[2]*resolution),0,resolution-1);for(let z=z0;z<=z1;z++)for(let x=x0;x<=x1;x++)buckets[z*resolution+x].push(f);}
 }
 let boundary=0,nonManifold=0,roughness=0,paired=0;for(const e of edges.values()){if(e.count===1)boundary++;if(e.count>2)nonManifold++;if(e.count===2){roughness+=Math.acos(e.dot)/Math.PI;paired++;}}
 const groups=new Map();for(const i of used){const root=find(i);groups.set(root,(groups.get(root)||0)+1);}
 let odd=0,hitColumns=0,inside=0,totalVolume=0;
 for(let z=0;z<resolution;z++)for(let x=0;x<resolution;x++){
  const px=min[0]+(x+.5)*size[0]/resolution,pz=min[2]+(z+.5)*size[2]/resolution,hits=[];
  for(const f of buckets[z*resolution+x]){const a=ix[f*3]*3,b=ix[f*3+1]*3,c=ix[f*3+2]*3,den=(p[b+2]-p[c+2])*(p[a]-p[c])+(p[c]-p[b])*(p[a+2]-p[c+2]);if(Math.abs(den)<diag*diag*1e-14)continue;
   const u=((p[b+2]-p[c+2])*(px-p[c])+(p[c]-p[b])*(pz-p[c+2]))/den,v=((p[c+2]-p[a+2])*(px-p[c])+(p[a]-p[c])*(pz-p[c+2]))/den,w=1-u-v;
   if(u>=-1e-8&&v>=-1e-8&&w>=-1e-8)hits.push(u*p[a+1]+v*p[b+1]+w*p[c+1]);
  }
  hits.sort((a,b)=>a-b);const ys=hits.filter((y,i)=>!i||y-hits[i-1]>diag*1e-7);if(ys.length)hitColumns++;if(ys.length%2){odd++;continue;}
  for(let i=0;i<ys.length;i+=2){totalVolume+=ys[i+1]-ys[i];for(let y=0;y<resolution;y++){const py=min[1]+(y+.5)*size[1]/resolution;if(py>=ys[i]&&py<=ys[i+1])inside++;}}
 }
 const watertight=boundary===0&&nonManifold===0,solidReliable=watertight&&odd===0&&size.every(x=>x>diag*1e-8);
 // Surface occupancy: vertices AND triangle samples, independent of solid assumptions.
 const voxels=new Set(),voxel=(x,y,z)=>{const q=[x,y,z].map((a,j)=>clamp(Math.floor((a-min[j])/(size[j]||1)*resolution),0,resolution-1));voxels.add(q[0]+resolution*(q[1]+resolution*q[2]));};
 for(let i=0;i<n;i++)voxel(p[i*3],p[i*3+1],p[i*3+2]);
 for(let f=0;f<triangles;f++){const a=ix[f*3]*3,b=ix[f*3+1]*3,c=ix[f*3+2]*3;const steps=Math.min(32,Math.max(1,Math.ceil(Math.max(Math.hypot(p[a]-p[b],p[a+1]-p[b+1],p[a+2]-p[b+2]),Math.hypot(p[a]-p[c],p[a+1]-p[c+1],p[a+2]-p[c+2]))/diag*resolution*2)));for(let u=0;u<=steps;u++)for(let v=0;v<=steps-u;v++){const s=u/steps,t=v/steps;voxel(p[a]*(1-s-t)+p[b]*s+p[c]*t,p[a+1]*(1-s-t)+p[b+1]*s+p[c+1]*t,p[a+2]*(1-s-t)+p[b+2]*s+p[c+2]*t);}}
 const theta=.5*Math.atan2(2*cov[0][2],cov[0][0]-cov[2][2]),along=[Math.cos(theta),Math.sin(theta)],lateral=[-along[1],along[0]];
 let lo=Infinity,hi=-Infinity;for(let i=0;i<n;i++){const t=(p[i*3]-mean[0])*along[0]+(p[i*3+2]-mean[2])*along[1];lo=Math.min(lo,t);hi=Math.max(hi,t);}
 const bins=Array.from({length:12},()=>({count:0,min:Infinity,max:-Infinity,height:0}));
 for(let i=0;i<n;i++){const dx=p[i*3]-mean[0],dz=p[i*3+2]-mean[2],t=dx*along[0]+dz*along[1],q=dx*lateral[0]+dz*lateral[1],b=bins[clamp(Math.floor((t-lo)/(hi-lo||1)*12),0,11)];b.count++;b.min=Math.min(b.min,q);b.max=Math.max(b.max,q);b.height+=p[i*3+1]-min[1];}
 const lateralSpan=Math.max(...bins.filter(b=>b.count).map(b=>b.max))-Math.min(...bins.filter(b=>b.count).map(b=>b.min))||diag;
 const profile=bins.map(b=>b.count?{width:(b.max-b.min)/lateralSpan,offset:(b.max+b.min)/2/lateralSpan,height:b.height/b.count/(size[1]||1)}:{width:.5,offset:0,height:.5});
 const boxSurface=2*(size[0]*size[1]+size[0]*size[2]+size[1]*size[2]),projection=projectMesh({positions:p,indices:ix},axes,mean);
 return {vertices:n,triangles,meshInstances,bounds:{min,max,size},proportions:size.map(x=>x/Math.max(...size)),centroid:mean,principalAxes:axes,principalAxesMethod:'Vertex-weighted covariance PCA; near-equal eigenvalues have ambiguous directions.',axisConfidence:axes.map((a,i)=>i===2?null:(a.variance-axes[i+1].variance)/(axes[0].variance||1)),surface:{area,areaToBox:area/(boxSurface||1),meanDihedral:roughness/(paired||1),degenerateTriangles:degenerate},components:{count:groups.size,sizes:[...groups.values()].sort((a,b)=>b-a),weldTolerance:tolerance,method:'Triangle connectivity after quantized position welding; touching parts may merge.'},topology:{boundaryEdges:boundary,nonManifoldEdges:nonManifold,watertight},occupancy:{resolution,solidFraction:solidReliable?clamp(totalVolume/(resolution**2*(size[1]||1)),0,1):null,interiorVoxelFraction:solidReliable?inside/resolution**3:null,surfaceVoxelFraction:voxels.size/resolution**3,projectedCoverage:hitColumns/resolution**2,oddRayColumns:odd,method:'20 × 20 vertical ray columns; solid volume only for closed manifold meshes with even intersections. Surface voxels are a sampled estimate.'},horizontalAxis:along,profile,projection,warnings:[...(!solidReliable?['Solid occupancy unavailable: open/non-manifold mesh or ambiguous ray intersections.']:[]),...(axes[0].variance&&((axes[0].variance-axes[1].variance)/axes[0].variance)<.05?['Leading principal axes are ambiguous (similar eigenvalues).']:[])]};
}
