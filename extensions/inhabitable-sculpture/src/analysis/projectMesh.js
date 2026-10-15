/** Triangle surface rasterization. Does not assume a closed, consistently oriented solid. */
export function projectMesh({positions,indices},axes,centroid,resolution=128){
 const n=positions.length/3,projected=new Float64Array(positions.length),lo=[Infinity,Infinity,Infinity],hi=[-Infinity,-Infinity,-Infinity];
 for(let i=0;i<n;i++)for(let j=0;j<3;j++){let v=0;for(let k=0;k<3;k++)v+=(positions[i*3+k]-centroid[k])*axes[j].axis[k];projected[i*3+j]=v;lo[j]=Math.min(lo[j],v);hi[j]=Math.max(hi[j],v);}
 const span=Math.max(hi[0]-lo[0],hi[1]-lo[1]);if(span<1e-12)throw new Error('The mesh has no usable projected area.');
 const core=resolution-32,unit=span/core,center=[(hi[0]+lo[0])/2,(hi[1]+lo[1])/2],mask=new Uint8Array(resolution**2),upper=new Float64Array(mask.length).fill(-Infinity),lower=new Float64Array(mask.length).fill(Infinity),depthSpan=Math.max(hi[2]-lo[2],span*.01);
 const write=(x,z,d)=>{if(x<0||z<0||x>=resolution||z>=resolution)return;const i=z*resolution+x;mask[i]=1;upper[i]=Math.max(upper[i],d);lower[i]=Math.min(lower[i],d);};
 for(let i=0;i<n;i++){projected[i*3]=(projected[i*3]-center[0])/unit+resolution/2;projected[i*3+1]=(projected[i*3+1]-center[1])/unit+resolution/2;write(Math.floor(projected[i*3]),Math.floor(projected[i*3+1]),projected[i*3+2]);}
 for(let f=0;f<indices.length;f+=3){const a=indices[f]*3,b=indices[f+1]*3,c=indices[f+2]*3,ax=projected[a],az=projected[a+1],bx=projected[b],bz=projected[b+1],cx=projected[c],cz=projected[c+1],den=(bz-cz)*(ax-cx)+(cx-bx)*(az-cz);
  if(Math.abs(den)<1e-10)continue;
  const x0=Math.max(0,Math.floor(Math.min(ax,bx,cx))),x1=Math.min(resolution-1,Math.floor(Math.max(ax,bx,cx))),z0=Math.max(0,Math.floor(Math.min(az,bz,cz))),z1=Math.min(resolution-1,Math.floor(Math.max(az,bz,cz)));
  for(let z=z0;z<=z1;z++)for(let x=x0;x<=x1;x++){const px=x+.5,pz=z+.5,u=((bz-cz)*(px-cx)+(cx-bx)*(pz-cz))/den,v=((cz-az)*(px-cx)+(ax-cx)*(pz-cz))/den,w=1-u-v;if(u>=-1e-8&&v>=-1e-8&&w>=-1e-8)write(x,z,u*projected[a+2]+v*projected[b+2]+w*projected[c+2]);}
 }
 return {method:'Dominant-plane triangle rasterization; two PCA axes form the plan and the third supplies roof depth.',resolution,sourceCell:unit,sourceSpan:span,sourceCenter:center,axes:axes.map(a=>a.axis),centroid,depthRange:[lo[2],hi[2]],mask:Array.from(mask),upper:Array.from(upper,(v,i)=>mask[i]?(v-lo[2])/depthSpan:0),thickness:Array.from(lower,(v,i)=>mask[i]?(upper[i]-v)/depthSpan:0),occupiedCells:mask.reduce((a,b)=>a+b,0)};
}
