export function canOccupy(volume,x,z){
 if(!volume.viable||!Number.isFinite(x)||!Number.isFinite(z))return false;
 const {grid,avatar}=volume,[nx,ny,nz]=grid.dims,h=grid.cell,r=avatar.radius,u=(x-grid.origin[0])/h,v=(z-grid.origin[2])/h;
 // Support and enclosure come from occupied cells, including the carved entry floor.
 for(let s=0;s<12;s++){const a=s*Math.PI/6,xx=Math.floor(u+Math.cos(a)*r/h),zz=Math.floor(v+Math.sin(a)*r/h);if(xx<0||zz<0||xx>=nx||zz>=nz||!volume.support[zz*nx+xx])return false;const below=xx+nx*(volume.floorLayer-1+ny*zz);if(!volume.material[below])return false;}
 const x0=Math.floor(u-r/h),x1=Math.floor(u+r/h),z0=Math.floor(v-r/h),z1=Math.floor(v+r/h),y0=volume.floorLayer,y1=Math.ceil(volume.floorLayer+avatar.height/h)-1;
 for(let zz=z0;zz<=z1;zz++)for(let xx=x0;xx<=x1;xx++){if(xx<0||zz<0||xx>=nx||zz>=nz)return false;const dx=Math.max(xx-u,0,u-(xx+1))*h,dz=Math.max(zz-v,0,v-(zz+1))*h;if(dx*dx+dz*dz>=r*r)continue;for(let y=y0;y<=y1;y++)if(volume.material[xx+nx*(y+ny*zz)])return false;}
 return true;
}
export function moveInVolume(volume,position,dx,dz){const distance=Math.hypot(dx,dz);if(!Number.isFinite(distance)||distance>200)throw new Error('Movement is outside the supported range.');const steps=Math.max(1,Math.ceil(distance/Math.min(.09,volume.grid.cell*.3))),sx=dx/steps,sz=dz/steps;let {x,z}=position,blocked=0;for(let i=0;i<steps;i++){if(canOccupy(volume,x+sx,z+sz)){x+=sx;z+=sz;}else{blocked++;if(canOccupy(volume,x+sx,z))x+=sx;if(canOccupy(volume,x,z+sz))z+=sz;}}return {x,z,blocked};}
