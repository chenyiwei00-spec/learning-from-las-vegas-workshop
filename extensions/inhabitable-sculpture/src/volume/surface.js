const directions=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];
/** Every emitted face is an exposed boundary of the very same occupied collision cell. */
export function voxelSurface(volume,{enlarged=false,cut=false,cutZ=volume.inside?.z??0}={}){
 const {grid}=volume,[nx,ny,nz]=grid.dims,h=grid.cell,mask=enlarged?volume.outer:volume.material,positions=[],normals=[],colors=[],cellIndices=[],faceDirections=[];
 const visible=(x,y,z)=>x>=0&&y>=0&&z>=0&&x<nx&&y<ny&&z<nz&&mask[x+nx*(y+ny*z)]&&(!cut||grid.origin[2]+(z+.5)*h<=cutZ);
 for(let z=0;z<nz;z++)for(let y=0;y<ny;y++)for(let x=0;x<nx;x++){
  if(!visible(x,y,z))continue;const i=x+nx*(y+ny*z);
  for(let side=0;side<6;side++){const dir=directions[side],[dx,dy,dz]=dir,xx=x+dx,yy=y+dy,zz=z+dz;if(visible(xx,yy,zz))continue;
   const axis=Math.floor(side/2),u=(axis+1)%3,v=(axis+2)%3,p=[x,y,z];p[axis]+=side%2===0?1:0;const a=p.slice(),b=p.slice(),c=p.slice(),d=p.slice();b[u]++;c[u]++;c[v]++;d[v]++;
   const neighbor=xx>=0&&yy>=0&&zz>=0&&xx<nx&&yy<ny&&zz<nz?xx+nx*(yy+ny*zz):-1,isCap=cut&&neighbor>=0&&mask[neighbor]&&grid.origin[2]+(zz+.5)*h>cutZ,isInside=neighbor>=0&&(volume.void[neighbor]||volume.entrance[neighbor]),floor=side===2&&isInside;
   const color=isCap?[.72,.37,.17]:floor?[.42,.44,.38]:isInside?[.68,.71,.65]:[.53,.56,.52],verts=side%2===0?[a,b,c,a,c,d]:[a,d,c,a,c,b];
   for(const q of verts){positions.push(...q.map((s,j)=>grid.origin[j]+s*h));normals.push(...dir);colors.push(...color);}
   cellIndices.push(i);faceDirections.push(side);
  }
 }
 return {positions:new Float32Array(positions),normals:new Float32Array(normals),colors:new Float32Array(colors),cells:new Uint32Array(cellIndices),sides:new Uint8Array(faceDirections),faces:cellIndices.length,cut,cutZ};
}
