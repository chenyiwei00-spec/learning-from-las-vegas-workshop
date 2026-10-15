import {voxelize,smoothSolid} from './voxelize.js';
import {distanceToZero,component2,components3} from './distance.js';
export const DEFAULT_PARAMETERS=Object.freeze({scale:28,thickness:.8,clearance:2.4,entranceWidth:2.4,entranceHeight:2.8,smoothing:1,resolution:64});
export function validateParameters(input={}){const p={...DEFAULT_PARAMETERS,...input};for(const [key,min,max] of [['scale',12,60],['thickness',.3,3],['clearance',2.4,5],['entranceWidth',1,5],['entranceHeight',2.4,5],['smoothing',0,3],['resolution',40,96]])if(!Number.isFinite(p[key])||p[key]<min||p[key]>max)throw new Error(`${key} must be between ${min} and ${max}.`);if(!Number.isInteger(p.resolution)||!Number.isInteger(p.smoothing))throw new Error('Resolution and smoothing must be integers.');return p;}
function findFloor(outer,grid,p){
 const [nx,ny,nz]=grid.dims,h=grid.cell,distance=distanceToZero(outer,grid.dims),allowed=Uint8Array.from(outer,(v,i)=>Number(v&&Math.sqrt(distance[i])*h-Math.sqrt(3)*h>=p.thickness)),runs=new Uint16Array(outer.length),head=Math.ceil(p.clearance/h),candidates=[];
 for(let z=0;z<nz;z++)for(let x=0;x<nx;x++)for(let y=ny-2;y>=0;y--){const i=x+nx*(y+ny*z);runs[i]=allowed[i]?1+runs[i+nx]:0;}
 for(let y=1;y<ny-head-1;y++){const footprint=new Uint8Array(nx*nz);for(let z=0;z<nz;z++)for(let x=0;x<nx;x++)if(runs[x+nx*(y+ny*z)]>=head)footprint[z*nx+x]=1;const group=component2(footprint,nx,nz).cells;if(group.length) candidates.push({y,area:group.length*h*h,cells:group});}
 if(!candidates.length)return {viable:false,reason:'No part of the reconstructed volume can fit the requested shell thickness and vertical clearance.',distance,allowed};
 const max=Math.max(...candidates.map(c=>c.area)),best=candidates.find(c=>c.area>=max*.85);return {viable:best.area>=6,reason:best.area<6?'The largest headroom-compliant floor is smaller than 6 m².':null,...best,distance,allowed,runs};
}
function localThickening(outer,grid,p){
 const [nx,ny,nz]=grid.dims,h=grid.cell,distance=distanceToZero(outer,grid.dims);let best=0;for(let i=0;i<outer.length;i++)if(distance[i]>distance[best])best=i;
 const cx=best%nx,cy=Math.floor(best/nx)%ny,cz=Math.floor(best/(nx*ny)),radius=(p.thickness+1.15)/h,half=(p.clearance/2)/h,next=outer.slice();
 for(let z=Math.max(1,Math.floor(cz-radius-1));z<Math.min(nz-1,cz+radius+1);z++)for(let y=Math.max(1,Math.floor(cy-half-radius-1));y<Math.min(ny-1,cy+half+radius+1);y++)for(let x=Math.max(1,Math.floor(cx-radius-1));x<Math.min(nx-1,cx+radius+1);x++){const dy=Math.max(0,Math.abs(y-cy)-half);if((x-cx)**2+(z-cz)**2+dy*dy<=radius*radius)next[x+nx*(y+ny*z)]=1;}return next;
}
export function generateInhabitableSculpture(geometry,input={},identity={}){
 const parameters=validateParameters(input),voxel=voxelize(geometry,parameters),{grid}=voxel,[nx,ny,nz]=grid.dims,h=grid.cell;let outer=smoothSolid(voxel.solid,grid.dims,parameters.smoothing).slice(),parts=components3(outer,grid.dims),discarded=0;
 for(const component of parts.slice(1))if(component.length<parts[0].length*.002){for(const i of component)outer[i]=0;discarded+=component.length;}
 let floor=findFloor(outer,grid,parameters),thickened=0,warning=[];
 if(!floor.viable){const expanded=localThickening(outer,grid,parameters),before=outer.reduce((s,v)=>s+v,0),added=expanded.reduce((s,v,i)=>s+(v&&!outer[i]?1:0),0);if(added/before<=.3){outer=expanded;thickened=added;floor=findFloor(outer,grid,parameters);warning.push('A local rounded enlargement was added around the thickest source region to fit an interior.');}else warning.push('Fitting a local interior would add more than 30% of the reconstructed volume; enlargement was rejected. Increase overall scale or reduce thickness.');}
 const common={version:4,mode:'inhabitable-sculpture',modelId:identity.id||'sculpture',name:identity.name||'Sculpture',parameters,grid,transform:voxel.transform,outer,source:voxel.solid,warnings:warning};
 const envelopeComponents=components3(outer,grid.dims).length;if(envelopeComponents>1)return {...common,viable:false,reason:`Reconstruction retains ${envelopeComponents} major disconnected solid islands. A coherent envelope cannot be formed at these settings without a larger geometric alteration.`,material:outer,void:new Uint8Array(outer.length),entrance:new Uint8Array(outer.length),metrics:{envelopeComponents,sourceSolidCells:voxel.solid.reduce((s,v)=>s+v,0),localThickeningCells:thickened}};
 if(!floor.viable)return {...common,viable:false,reason:floor.reason,material:outer,void:new Uint8Array(outer.length),entrance:new Uint8Array(outer.length),metrics:{sourceSolidCells:voxel.solid.reduce((s,v)=>s+v,0),outerCells:outer.reduce((s,v)=>s+v,0),localThickeningCells:thickened,oddRayColumns:voxel.oddColumns}};
 const rawFloor=new Uint8Array(nx*nz);floor.cells.forEach(i=>rawFloor[i]=1);const core=new Uint8Array(nx*nz);for(let z=1;z<nz-1;z++)for(let x=1;x<nx-1;x++){const i=z*nx+x;core[i]=Number(rawFloor[i]&&rawFloor[i-1]&&rawFloor[i+1]&&rawFloor[i-nx]&&rawFloor[i+nx]);}
 const mainCore=component2(core,nx,nz).cells;if(!mainCore.length)return {...common,viable:false,reason:'Headroom fits, but no connected floor has enough lateral clearance for the avatar.',material:outer,void:new Uint8Array(outer.length),entrance:new Uint8Array(outer.length),metrics:{}};
 const footprint=new Uint8Array(nx*nz);for(const c of mainCore){const x=c%nx,z=Math.floor(c/nx);for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++){const i=(z+dz)*nx+x+dx;if(rawFloor[i])footprint[i]=1;}}
 floor.cells=Array.from(footprint,(v,i)=>v?i:-1).filter(i=>i>=0);floor.area=floor.cells.length*h*h;
 const planarDistance=distanceToZero(footprint,[nx,nz,1]);let anchor=mainCore[0];for(const i of mainCore)if(planarDistance[i]>planarDistance[anchor])anchor=i;
 const ax=anchor%nx,az=Math.floor(anchor/nx),voidMask=new Uint8Array(outer.length),entrance=new Uint8Array(outer.length),support=footprint.slice();
 for(const c of floor.cells){const x=c%nx,z=Math.floor(c/nx);for(let y=floor.y;y<ny&&floor.allowed[x+nx*(y+ny*z)];y++)voidMask[x+nx*(y+ny*z)]=1;}
 let chosen=null;for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){let end=0,last=-1;for(let t=0;t<Math.max(nx,nz);t++){const x=ax+dx*t,z=az+dz*t;if(x<2||z<2||x>=nx-2||z>=nz-2){end=t-2;break;}let solid=false;for(let y=floor.y;y<Math.min(ny,floor.y+Math.ceil(parameters.entranceHeight/h));y++)solid||=!!outer[x+nx*(y+ny*z)];if(solid)last=t;if(t-last>Math.ceil(1.2/h)){end=t;break;}}if(last>0&&end>last&&(!chosen||last<chosen.last))chosen={dx,dz,last,end};}
 if(!chosen)return {...common,viable:false,reason:'No entrance can reach the exterior within the voxel domain. Increase scale or lower clearance.',material:outer,void:voidMask,entrance,metrics:{}};
 const half=parameters.entranceWidth/2,hCells=Math.ceil(parameters.entranceHeight/h),tEnd=chosen.last+Math.ceil(1.25/h),floorHeight=grid.origin[1]+floor.y*h;
 for(let z=1;z<nz-1;z++)for(let x=1;x<nx-1;x++){const dx=x-ax,dz=z-az,t=dx*chosen.dx+dz*chosen.dz,side=Math.abs(dx*chosen.dz-dz*chosen.dx)*h;if(t<-.5||t>tEnd||side>half)continue;support[z*nx+x]=1;
  for(let y=floor.y;y<Math.min(ny,floor.y+hCells);y++){const i=x+nx*(y+ny*z);entrance[i]=1;}
  // The entrance floor is part of the same occupied voxel volume, not a separate room.
  for(let y=Math.max(0,floor.y-Math.ceil(parameters.thickness/h));y<floor.y;y++)outer[x+nx*(y+ny*z)]=1;
 }
 const material=Uint8Array.from(outer,(v,i)=>Number(v&&!voidMask[i]&&!entrance[i]));
 grid.origin[1]-=floorHeight;common.transform.floorHeight=floorHeight;
 const world=(x,z)=>({x:grid.origin[0]+(x+.5)*h,z:grid.origin[2]+(z+.5)*h}),spawn=world(ax+chosen.dx*(chosen.last+Math.ceil(.6/h)),az+chosen.dz*(chosen.last+Math.ceil(.6/h))),inside=world(ax,az);
 const carved=Uint8Array.from(voidMask,(v,i)=>Number(v||entrance[i])),minimumHeadroom=Math.ceil(parameters.clearance/h)*h;
 return {...common,viable:true,reason:null,material,void:voidMask,carved,entrance,support,floorLayer:floor.y,spawn,inside,entranceDirection:[-chosen.dx,-chosen.dz],avatar:{radius:.28,height:1.8,eye:1.65},floorCells:floor.cells,metrics:{sourceSolidCells:voxel.solid.reduce((s,v)=>s+v,0),outerCells:outer.reduce((s,v)=>s+v,0),materialCells:material.reduce((s,v)=>s+v,0),interiorCells:voidMask.reduce((s,v)=>s+v,0),floorArea:floor.area,minimumHeadroom,minimumRequestedThickness:parameters.thickness,cell:h,floorHeightAboveSourceBase:floorHeight,localThickeningCells:thickened,discardedTinyCells:discarded,oddRayColumns:voxel.oddColumns,interiorComponents:components3(voidMask,grid.dims).length,envelopeComponents:components3(outer,grid.dims).length,sourceRetention:voxel.solid.reduce((s,v,i)=>s+(v&&outer[i]?1:0),0)/(voxel.solid.reduce((s,v)=>s+v,0)||1)}};
}
