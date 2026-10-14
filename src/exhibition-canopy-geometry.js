import * as THREE from 'three';
import {MarchingCubes} from 'three/examples/jsm/objects/MarchingCubes.js';
const tick=()=>new Promise(r=>requestAnimationFrame(r));
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const smoothMin=(a,b,k)=>{const h=Math.max(k-Math.abs(a-b),0)/k;return Math.min(a,b)-h*h*k*.25;};
/* One implicit solid: original footprints grow into a continuous, thick canopy. */
export async function buildCanopy(sources,{onProgress=()=>{},resolution=112}={}){
 if(!sources.length)throw Error('Place models on the floor first.');
 const pillars=sources.map(s=>{s.object.updateWorldMatrix(true,true);const b=new THREE.Box3().setFromObject(s.object),v=b.getSize(new THREE.Vector3()),c=b.getCenter(new THREE.Vector3());return {id:s.id,modelId:s.modelId,name:s.name,x:c.x,z:c.z,width:Math.max(v.x,v.z),height:v.y,baseY:b.min.y,radius:Math.max(v.x,v.z)/2,source:s};});
 if(pillars.some(p=>p.height<.15||p.radius<.08))throw Error('Enlarge very small models before making a space.');
 const materials=[],textures=[],owned=[],placeholder=new THREE.MeshBasicMaterial();let marching;
 const dispose=()=>{owned.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());};
 try{
  for(const p of pillars){let chosen=null,weight=-1;const colour=new THREE.Color(1,1,1);p.source.object.traverse(m=>{if(!m.isMesh)return;const ms=Array.isArray(m.material)?m.material:[m.material];for(const material of ms){const w=(material.map?1000000:0)+(m.geometry.index?.count||m.geometry.attributes.position.count);if(w>weight){chosen=material;weight=w;const a=m.geometry.attributes.color;if(a&&!material.map){colour.setRGB(0,0,0);let n=0;for(let i=0;i<a.count;i+=Math.max(1,Math.floor(a.count/500))){colour.r+=a.getX(i);colour.g+=a.getY(i);colour.b+=a.getZ(i);n++;}colour.multiplyScalar(1/n);}else colour.setRGB(1,1,1);}}});
   if(!chosen)throw Error('A placed model has no usable material.');
   const map=(p.source.surfaceMap||chosen.map)?.clone()||null;if(map){map.wrapS=map.wrapT=THREE.RepeatWrapping;map.needsUpdate=true;textures.push(map);}
   const material=new THREE.MeshStandardMaterial({map,color:p.source.surfaceMap?0xffffff:chosen.color?.clone().multiply(colour)||colour,roughness:.72,metalness:.02,side:THREE.DoubleSide});material.name='Canopy / '+p.name;material.userData={sourcePlacementId:p.id,sourceModelId:p.modelId};materials.push(material);
  }
  // A spanning tree guarantees connections across any distance without making a rectangular slab.
  const links=[],seen=new Set([0]);while(seen.size<pillars.length){let best=null;for(const a of seen)for(let b=0;b<pillars.length;b++)if(!seen.has(b)){const d=Math.hypot(pillars[a].x-pillars[b].x,pillars[a].z-pillars[b].z);if(!best||d<best.d)best={a,b,d};}links.push(best);seen.add(best.b);}
  const canopyRadius=p=>1.1+p.radius*1.6;
  const minX=Math.max(-9.8,Math.min(...pillars.map(p=>p.x-canopyRadius(p)))),maxX=Math.min(9.8,Math.max(...pillars.map(p=>p.x+canopyRadius(p)))),minZ=Math.max(-9.8,Math.min(...pillars.map(p=>p.z-canopyRadius(p)))),maxZ=Math.min(9.8,Math.max(...pillars.map(p=>p.z+canopyRadius(p))));
  const thickness=.24,highest=Math.max(...pillars.map(p=>p.height+p.baseY)),low=-.35,high=highest+1.05;
  const domain={minX:minX-.4,maxX:maxX+.4,minZ:minZ-.4,maxZ:maxZ+.4,low,high},dx=domain.maxX-domain.minX,dy=high-low,dz=domain.maxZ-domain.minZ;
  const n=resolution,middle=new THREE.Vector3((domain.minX+domain.maxX)/2,(high+low)/2,(domain.minZ+domain.maxZ)/2),scale=new THREE.Vector3(dx/2,dy/2,dz/2);
  const maxFaces=220000;marching=new MarchingCubes(n,placeholder,false,false,maxFaces);marching.isolation=0;
  const radialAt=(p,y)=>{const t=clamp((y-p.baseY)/p.height,0,1),flare=Math.pow(Math.max(0,(t-.54)/.46),2);return p.radius*(1-.32*Math.sin(Math.PI*t))+flare*(.9+p.radius*.25);};
  const roofAt=(x,z)=>{let sum=0,weight=0,nearest=Infinity;for(const p of pillars){const d2=(x-p.x)**2+(z-p.z)**2,w=1/Math.pow(d2+.008,1.55);sum+=(p.height+p.baseY)*w;weight+=w;nearest=Math.min(nearest,d2);}return sum/weight+.18*(1-Math.exp(-nearest/1.6));};

  const footprintAt=(x,z)=>{let edge=Infinity;for(const p of pillars)edge=smoothMin(edge,Math.hypot(x-p.x,z-p.z)-canopyRadius(p),.6);for(const link of links){const a=pillars[link.a],b=pillars[link.b],vx=b.x-a.x,vz=b.z-a.z,t=clamp(((x-a.x)*vx+(z-a.z)*vz)/Math.max(1e-8,vx*vx+vz*vz),0,1),r=(canopyRadius(a)*(1-t)+canopyRadius(b)*t)*.75;edge=smoothMin(edge,Math.hypot(x-a.x-vx*t,z-a.z-vz*t)-r,.6);}return Math.max(edge,Math.abs(x)-9.8,Math.abs(z)-9.8);};
  for(let zi=0;zi<n;zi++){
   const z=domain.minZ+zi/n*dz;
   for(let xi=0;xi<n;xi++){
    const x=domain.minX+xi/n*dx,roofY=roofAt(x,z),distances=pillars.map(p=>Math.hypot(x-p.x,z-p.z));const edge=footprintAt(x,z);
    for(let yi=0;yi<n;yi++){
     const y=low+yi/n*dy;let sd=Math.max(Math.abs(y-roofY)-thickness/2,edge);
     for(let i=0;i<pillars.length;i++){const p=pillars[i],column=Math.max(distances[i]-radialAt(p,y),p.baseY-y,y-(p.height+p.baseY));sd=smoothMin(sd,column,.22);}
     marching.field[zi*n*n+yi*n+xi]=-sd;
    }
   }
   if(zi%6===0){onProgress('Joining supports / '+Math.round(zi/n*100)+'%');await tick();}
  }
  onProgress('Building the thick surface...');await tick();marching.update();if(marching.count/3>=maxFaces)throw Error('This layout is too complex. Use fewer models.');
  const raw=marching.geometry.attributes.position,normal=marching.geometry.attributes.normal,buckets=pillars.map(()=>[]),uvs=pillars.map(()=>[]),normals=pillars.map(()=>[]),v=new THREE.Vector3(),nv=new THREE.Vector3();
  for(let at=0;at<marching.count;at+=3){let x=0,z=0;for(let i=0;i<3;i++){x+=raw.getX(at+i)*scale.x+middle.x;z+=raw.getZ(at+i)*scale.z+middle.z;}x/=3;z/=3;let owner=0,d=Infinity;for(let i=0;i<pillars.length;i++){const dd=(x-pillars[i].x)**2+(z-pillars[i].z)**2;if(dd<d){d=dd;owner=i;}}
   const p=pillars[owner];for(let i=0;i<3;i++){v.fromBufferAttribute(raw,at+i).multiply(scale).add(middle);nv.fromBufferAttribute(normal,at+i);nv.set(nv.x/scale.x,nv.y/scale.y,nv.z/scale.z).normalize();buckets[owner].push(v.x,v.y,v.z);normals[owner].push(nv.x,nv.y,nv.z);const radial=Math.hypot(v.x-p.x,v.z-p.z),blend=clamp((v.y-(p.baseY+p.height*.65))/(p.height*.35),0,1),u=(Math.atan2(v.z-p.z,v.x-p.x)/Math.PI/2+.5),vv=(v.y-p.baseY)/p.height;
    // Cylindrical column coordinates become a local planar image on its roof region.
    const pu=.5+(v.x-p.x)/Math.max(2,p.width*4),pv=.5+(v.z-p.z)/Math.max(2,p.width*4);uvs[owner].push(u*(1-blend)+pu*blend,vv*(1-blend)+pv*blend);
   }
  }
  const group=new THREE.Group();group.name='exhibition-continuous-canopy';const meshes=[];
  for(let i=0;i<pillars.length;i++)if(buckets[i].length){const g=new THREE.BufferGeometry();owned.push(g);g.setAttribute('position',new THREE.Float32BufferAttribute(buckets[i],3));g.setAttribute('normal',new THREE.Float32BufferAttribute(normals[i],3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs[i],2));g.computeBoundingBox();g.computeBoundingSphere();const mesh=new THREE.Mesh(g,materials[i]);mesh.name='Canopy region / '+pillars[i].name;mesh.userData={sourcePlacementId:pillars[i].id,sourceModelId:pillars[i].modelId};group.add(mesh);meshes.push(mesh);}
  const data=pillars.map(({source,...p})=>p);group.userData={kind:'continuous-exhibition-canopy-v2',thickness,pillars:data};
  const bounds=new THREE.Box3().setFromObject(group),centre=bounds.getCenter(new THREE.Vector3()),clearance=Math.min(...pillars.map(p=>p.height))-.12;
  marching.geometry.dispose();marching=null;placeholder.dispose();
  return {group,meshes,materials,pillars:data,thickness,bounds,centre,triangles:buckets.reduce((s,a)=>s+a.length/9,0),roofConnected:true,links:links.map(l=>({from:pillars[l.a].id,to:pillars[l.b].id})),clearance,roofAt,footprintAt,radialAt,dispose};
 }catch(e){marching?.geometry.dispose();placeholder.dispose();dispose();throw e;}
}
