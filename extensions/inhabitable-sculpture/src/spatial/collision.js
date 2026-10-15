import {inRegion} from './contours.js';
export {pointInPolygon as inPolygon} from './contours.js';
export function segmentDistance(x,z,a,b){const dx=b[0]-a[0],dz=b[1]-a[1],t=Math.max(0,Math.min(1,((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz||1)));return Math.hypot(x-a[0]-t*dx,z-a[1]-t*dz);}
export function canStand(g,x,z,r=g.avatar.radius){
 const covered=(px,pz)=>g.floors.some(f=>inRegion(px,pz,f));if(!covered(x,z))return false;
 for(let i=0;i<12;i++){const a=i*Math.PI/6;if(!covered(x+Math.cos(a)*r,z+Math.sin(a)*r))return false;}
 if(g.walls.some(w=>w.bottom<g.avatar.height&&segmentDistance(x,z,w.a,w.b)<r+w.thickness/2-1e-7))return false;
 if(g.obstacles.some(o=>{const dx=Math.max(0,Math.abs(x-o.x)-o.halfX),dz=Math.max(0,Math.abs(z-o.z)-o.halfZ);return Math.hypot(dx,dz)<r;}))return false;return true;
}
/** Substeps prevent tunnelling; axis slides keep diagonal motion along walls. */
export function moveWithCollisions(g,position,dx,dz){
 let {x,z}=position;const distance=Math.hypot(dx,dz);if(!Number.isFinite(distance)||distance>200)throw new Error('Movement must be a finite displacement of at most 200 metres.');
 const steps=Math.max(1,Math.ceil(distance/(g.avatar.radius*.4))),sx=dx/steps,sz=dz/steps;let blocked=0;
 for(let i=0;i<steps;i++){if(canStand(g,x+sx,z+sz)){x+=sx;z+=sz;}else{blocked++;if(canStand(g,x+sx,z))x+=sx;if(canStand(g,x,z+sz))z+=sz;}}
 return {x,z,blocked};
}
