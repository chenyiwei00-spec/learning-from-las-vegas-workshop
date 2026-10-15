const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
/** Three orthographic triangle-ray passes + conservative sampled surface. */
export function voxelize(geometry,params){
 const p=geometry.positions,ix=geometry.indices,lo=[Infinity,Infinity,Infinity],hi=[-Infinity,-Infinity,-Infinity];for(let i=0;i<p.length;i++) {const a=i%3;lo[a]=Math.min(lo[a],p[i]);hi[a]=Math.max(hi[a],p[i]);}
 const size=hi.map((x,a)=>x-lo[a]),factor=params.scale/Math.max(...size),h=params.scale/params.resolution,pad=Math.ceil(3.5/h)+3,dims=size.map(s=>Math.ceil(s*factor/h)+pad*2+1),[nx,ny,nz]=dims,origin=[-size[0]*factor/2-pad*h,-pad*h,-size[2]*factor/2-pad*h],total=nx*ny*nz;
 if(total>2500000)throw new Error('This scale/resolution combination requires too many voxels. Increase scale or reduce resolution.');
 const q=new Float64Array(p.length);for(let i=0;i<p.length;i++){const a=i%3,normalized=(p[i]-(a===1?lo[a]:(lo[a]+hi[a])/2))*factor;q[i]=(normalized-origin[a])/h;}
 const surface=new Uint8Array(total),votes=new Uint8Array(total),index=(x,y,z)=>x+nx*(y+ny*z),write=(x,y,z)=>{x=Math.floor(x);y=Math.floor(y);z=Math.floor(z);if(x>=0&&y>=0&&z>=0&&x<nx&&y<ny&&z<nz)surface[index(x,y,z)]=1;};
 for(let i=0;i<q.length;i+=3)write(q[i],q[i+1],q[i+2]);
 for(let f=0;f<ix.length;f+=3){const a=ix[f]*3,b=ix[f+1]*3,c=ix[f+2]*3,steps=Math.max(1,Math.ceil(Math.max(Math.hypot(q[a]-q[b],q[a+1]-q[b+1],q[a+2]-q[b+2]),Math.hypot(q[a]-q[c],q[a+1]-q[c+1],q[a+2]-q[c+2]))*2));for(let u=0;u<=steps;u++)for(let v=0;v<=steps-u;v++){const s=u/steps,t=v/steps;write(q[a]*(1-s-t)+q[b]*s+q[c]*t,q[a+1]*(1-s-t)+q[b+1]*s+q[c+1]*t,q[a+2]*(1-s-t)+q[b+2]*s+q[c+2]*t);}}
 let oddColumns=0;
 for(let axis=0;axis<3;axis++){
  const u=(axis+1)%3,v=(axis+2)%3,nu=dims[u],nv=dims[v],buckets=Array.from({length:nu*nv},()=>[]);
  for(let f=0;f<ix.length;f+=3){const a=ix[f]*3,b=ix[f+1]*3,c=ix[f+2]*3,u0=clamp(Math.floor(Math.min(q[a+u],q[b+u],q[c+u])),0,nu-1),u1=clamp(Math.floor(Math.max(q[a+u],q[b+u],q[c+u])),0,nu-1),v0=clamp(Math.floor(Math.min(q[a+v],q[b+v],q[c+v])),0,nv-1),v1=clamp(Math.floor(Math.max(q[a+v],q[b+v],q[c+v])),0,nv-1);for(let j=v0;j<=v1;j++)for(let i=u0;i<=u1;i++)buckets[j*nu+i].push(f);}
  for(let j=0;j<nv;j++)for(let i=0;i<nu;i++){const hits=[];for(const f of buckets[j*nu+i]){const a=ix[f]*3,b=ix[f+1]*3,c=ix[f+2]*3,den=(q[b+v]-q[c+v])*(q[a+u]-q[c+u])+(q[c+u]-q[b+u])*(q[a+v]-q[c+v]);if(Math.abs(den)<1e-9)continue;const s=((q[b+v]-q[c+v])*(i+.5-q[c+u])+(q[c+u]-q[b+u])*(j+.5-q[c+v]))/den,t=((q[c+v]-q[a+v])*(i+.5-q[c+u])+(q[a+u]-q[c+u])*(j+.5-q[c+v]))/den,w=1-s-t;if(s>=-1e-8&&t>=-1e-8&&w>=-1e-8)hits.push(s*q[a+axis]+t*q[b+axis]+w*q[c+axis]);}
   hits.sort((a,b)=>a-b);const unique=hits.filter((x,k)=>!k||x-hits[k-1]>1e-5);if(unique.length%2){oddColumns++;continue;}for(let k=0;k<unique.length;k+=2)for(let a=Math.max(0,Math.ceil(unique[k]-.5));a<dims[axis]&&a+.5<unique[k+1];a++){const coord=[];coord[axis]=a;coord[u]=i;coord[v]=j;votes[index(...coord)]++;}
  }
 }
 const solid=Uint8Array.from(votes,(v,i)=>Number(v>=2||surface[i]));return {solid,surface,grid:{dims,origin,cell:h},transform:{factor,sourceMin:lo,sourceMax:hi,sourceCenter:[(lo[0]+hi[0])/2,lo[1],(lo[2]+hi[2])/2]},oddColumns};
}
export function smoothSolid(mask,dims,passes){const [nx,ny,nz]=dims;let current=mask;for(let pass=0;pass<passes;pass++){const next=new Uint8Array(mask.length);for(let z=1;z<nz-1;z++)for(let y=1;y<ny-1;y++)for(let x=1;x<nx-1;x++){let count=0;const i=x+nx*(y+ny*z);for(let dz=-1;dz<=1;dz++)for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++)count+=current[i+dx+nx*(dy+ny*dz)];next[i]=Number(count>=13||(current[i]&&count>=9));}current=next;}return current;}
