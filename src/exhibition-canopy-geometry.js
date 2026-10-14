import * as THREE from 'three';
import {modelGrowthProfile,growthSection} from './exhibition-canopy-profile.js';
import {MarchingCubes} from 'three/examples/jsm/objects/MarchingCubes.js';
const tick=()=>new Promise(r=>requestAnimationFrame(r));
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const smoothMin=(a,b,k)=>{const h=Math.max(k-Math.abs(a-b),0)/k;return Math.min(a,b)-h*h*k*.25;};
/* One implicit solid: original footprints grow into a continuous, thick canopy. */
export async function buildCanopy(sources,{onProgress=()=>{},resolution=112}={}){
 if(!sources.length)throw Error('Place models on the floor first.');
 const pillars=sources.map(s=>{s.object.updateWorldMatrix(true,true);const b=new THREE.Box3().setFromObject(s.object),v=b.getSize(new THREE.Vector3()),c=new THREE.Vector3().setFromMatrixPosition(s.object.matrixWorld),growth=modelGrowthProfile(s,b,c);return {growth,id:s.id,modelId:s.modelId,name:s.name,x:c.x,z:c.z,width:Math.max(v.x,v.z),sourceHeight:v.y,height:5.25+v.y*.22,minimumClearance:3,footprintSpan:s.layout?.span||Math.max(1,Math.ceil(Math.max(v.x,v.z))),baseY:b.min.y,radius:Math.max(v.x,v.z)/2,source:s};});
 if(pillars.some(p=>p.sourceHeight<.15||p.radius<.08))throw Error('Enlarge very small models before making a space.');
 const materials=[],textures=[],owned=[],placeholder=new THREE.MeshBasicMaterial();let marching;
 const dispose=()=>{owned.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());};
 try{
  for(const p of pillars){let chosen=null,weight=-1;const colour=new THREE.Color(1,1,1);p.source.object.traverse(m=>{if(!m.isMesh)return;const ms=Array.isArray(m.material)?m.material:[m.material];for(const material of ms){const w=(material.map?1000000:0)+(m.geometry.index?.count||m.geometry.attributes.position.count);if(w>weight){chosen=material;weight=w;const a=m.geometry.attributes.color;if(a&&!material.map){colour.setRGB(0,0,0);let n=0;for(let i=0;i<a.count;i+=Math.max(1,Math.floor(a.count/500))){colour.r+=a.getX(i);colour.g+=a.getY(i);colour.b+=a.getZ(i);n++;}colour.multiplyScalar(1/n);}else colour.setRGB(1,1,1);}}});
   if(!chosen)throw Error('A placed model has no usable material.');
   const map=(p.source.surfaceMap||chosen.map)?.clone()||null;if(map){map.wrapS=map.wrapT=THREE.ClampToEdgeWrapping;map.magFilter=THREE.LinearFilter;map.minFilter=THREE.LinearMipmapLinearFilter;map.generateMipmaps=true;map.needsUpdate=true;textures.push(map);}
   const material=new THREE.MeshStandardMaterial({map,color:p.source.surfaceMap?0xffffff:chosen.color?.clone().multiply(colour)||colour,roughness:.82,metalness:.02,side:THREE.DoubleSide});material.name='Canopy / '+p.name;material.userData={sourcePlacementId:p.id,sourceModelId:p.modelId,textureKind:p.source.surfaceMap?.userData.kind||'source-material',backgroundRemoved:!!p.source.surfaceMap?.userData.backgroundRemoved};materials.push(material);
  }
  // A spanning tree guarantees connections across any distance without making a rectangular slab.
  const links=[],seen=new Set([0]);while(seen.size<pillars.length){let best=null;for(const a of seen)for(let b=0;b<pillars.length;b++)if(!seen.has(b)){const d=Math.hypot(pillars[a].x-pillars[b].x,pillars[a].z-pillars[b].z);if(!best||d<best.d)best={a,b,d};}links.push(best);seen.add(best.b);}
  const canopyRadius=p=>1.3+p.radius*2.1;
  const minX=Math.max(-9.8,Math.min(...pillars.map(p=>p.x-canopyRadius(p)))),maxX=Math.min(9.8,Math.max(...pillars.map(p=>p.x+canopyRadius(p)))),minZ=Math.max(-9.8,Math.min(...pillars.map(p=>p.z-canopyRadius(p)))),maxZ=Math.min(9.8,Math.max(...pillars.map(p=>p.z+canopyRadius(p))));
  const thickness=.24,highest=Math.max(...pillars.map(p=>p.height+p.baseY)),low=-.35,high=highest+1.05;
  const domain={minX:minX-.9,maxX:maxX+.9,minZ:minZ-.9,maxZ:maxZ+.9,low,high},dx=domain.maxX-domain.minX,dy=high-low,dz=domain.maxZ-domain.minZ;
  const n=resolution,middle=new THREE.Vector3((domain.minX+domain.maxX)/2,(high+low)/2,(domain.minZ+domain.maxZ)/2),scale=new THREE.Vector3(dx/2,dy/2,dz/2);
  const maxFaces=220000;marching=new MarchingCubes(n,placeholder,false,false,maxFaces);marching.isolation=0;
  const minSectionRadius=Math.max(dx,dz)/n*.8;
  const sectionAt=(p,y)=>{const section=growthSection(p,clamp((y-p.baseY)/p.height,0,1));section.rx=Math.max(minSectionRadius,section.rx);section.rz=Math.max(minSectionRadius,section.rz);if(y<3.4){const half=p.footprintSpan/2-.025;section.rx=Math.min(section.rx,Math.max(minSectionRadius,half-Math.abs(section.x-p.x)));section.rz=Math.min(section.rz,Math.max(minSectionRadius,half-Math.abs(section.z-p.z)));}return section;};
  const radialAt=(p,y)=>{const r=sectionAt(p,y);return Math.max(r.rx,r.rz)+Math.hypot(r.x-p.x,r.z-p.z);};
  const roofAt=(x,z)=>{let sum=0,weight=0,nearest=Infinity;for(const p of pillars){const d2=(x-p.x)**2+(z-p.z)**2,w=1/Math.pow(d2+.008,1.55);sum+=(p.height+p.baseY)*w;weight+=w;nearest=Math.min(nearest,d2);}return sum/weight+.18*(1-Math.exp(-nearest/1.6));};

  const footprintAt=(x,z)=>{let edge=Infinity;for(const p of pillars)edge=smoothMin(edge,Math.hypot(x-p.x,z-p.z)-canopyRadius(p),.6);for(const link of links){const a=pillars[link.a],b=pillars[link.b],vx=b.x-a.x,vz=b.z-a.z,t=clamp(((x-a.x)*vx+(z-a.z)*vz)/Math.max(1e-8,vx*vx+vz*vz),0,1),r=(canopyRadius(a)*(1-t)+canopyRadius(b)*t)*.75;edge=smoothMin(edge,Math.hypot(x-a.x-vx*t,z-a.z-vz*t)-r,.6);}return Math.max(edge,Math.abs(x)-9.8,Math.abs(z)-9.8);};
  const segmentDistance=(x,y,z,segment)=>{const a=segment.a,b=segment.b,dx=b[0]-a[0],dy=b[1]-a[1],dz=b[2]-a[2],t=clamp(((x-a[0])*dx+(y-a[1])*dy+(z-a[2])*dz)/Math.max(1e-9,dx*dx+dy*dy+dz*dz),0,1);return Math.hypot(x-a[0]-dx*t,y-a[1]-dy*t,z-a[2]-dz*t)-(segment.r0+(segment.r1-segment.r0)*t);};
  const branches=[];
  const curve=(p,points,r0,r1,role)=>{const c=new THREE.CubicBezierCurve3(...points.map(v=>new THREE.Vector3(...v)));for(let i=0;i<7;i++){const u=i/7,v=(i+1)/7,r=t=>r0+(r1-r0)*(t*t*(3-2*t));const segment={a:c.getPoint(u).toArray(),b:c.getPoint(v).toArray(),r0:r(u),r1:r(v),sourcePlacementId:p.id,role};branches.push(segment);p.branchSegments.push(segment);}};
  for(const p of pillars){p.branchSegments=[];p.trunkTop=p.height+p.baseY;for(const branch of p.growth.branches){
   const startY=clamp(p.baseY+p.height*branch.t,4.15,p.height+p.baseY-.85),section=sectionAt(p,startY),ux=Math.cos(branch.angle),uz=Math.sin(branch.angle),length=branch.length,root=[section.x+ux*section.rx*.55,startY,section.z+uz*section.rz*.55],joint=[section.x+ux*(section.rx*.55+length*.5),startY+.45*(p.height+p.baseY-startY),section.z+uz*(section.rz*.55+length*.5)],r=Math.min(.72,Math.max(.25,minSectionRadius,Math.max(section.rx,section.rz)*.52));
   // A narrow central crown keeps the fork interior filled without hiding its limbs.
   curve(p,[root,[root[0]+ux*length*.12,startY+.20,root[2]+uz*length*.12],[joint[0]-ux*length*.12,joint[1]-.25,joint[2]-uz*length*.12],joint],r,r*.7,'stem');
   for(const turn of [-.38,.38]){const a=branch.angle+turn,tx=clamp(p.x+Math.cos(a)*(p.radius*.3+length),-9.4,9.4),tz=clamp(p.z+Math.sin(a)*(p.radius*.3+length),-9.4,9.4),roof=roofAt(tx,tz);curve(p,[joint,[joint[0]+Math.cos(a)*length*.32,joint[1]+.25,joint[2]+Math.sin(a)*length*.32],[tx,roof-.48,tz],[tx,roof,tz]],r*.7,Math.max(r*.9,.25),'fork');}
  }}
  const baseFloor=Math.min(...pillars.map(p=>p.baseY));
  const rings=pillars.map(p=>Array.from({length:n},(_,yi)=>sectionAt(p,low+yi/n*dy)));
  for(let zi=0;zi<n;zi++){
   const z=domain.minZ+zi/n*dz;
   for(let xi=0;xi<n;xi++){
    const x=domain.minX+xi/n*dx,roofY=roofAt(x,z),distances=pillars.map(p=>Math.hypot(x-p.x,z-p.z));const edge=footprintAt(x,z),nearBranches=branches.filter(s=>x>=Math.min(s.a[0],s.b[0])-Math.max(s.r0,s.r1)-.6&&x<=Math.max(s.a[0],s.b[0])+Math.max(s.r0,s.r1)+.6&&z>=Math.min(s.a[2],s.b[2])-Math.max(s.r0,s.r1)-.6&&z<=Math.max(s.a[2],s.b[2])+Math.max(s.r0,s.r1)+.6);
    for(let yi=0;yi<n;yi++){
     const y=low+yi/n*dy;let sd=Math.max(Math.abs(y-roofY)-thickness/2,edge);
     for(let i=0;i<pillars.length;i++){const p=pillars[i],r=rings[i][yi],xx=x-r.x,zz=z-r.z;if(Math.abs(xx)>r.rx+.7||Math.abs(zz)>r.rz+.7)continue;const lateral=(Math.hypot(xx/r.rx,zz/r.rz)-1)*Math.min(r.rx,r.rz),column=Math.max(lateral,p.baseY-y,y-p.trunkTop);sd=smoothMin(sd,column,clamp(.42+p.radius*.30,.5,.95));}
     for(const segment of nearBranches)if(y>=Math.min(segment.a[1],segment.b[1])-.7&&y<=Math.max(segment.a[1],segment.b[1])+.7)sd=smoothMin(sd,segmentDistance(x,y,z,segment),.40);
     // Fillets grow below the roof; clipping their upper extent keeps one smooth closed top.
     sd=Math.max(sd,y-(roofY+thickness/2),baseFloor-y);
     marching.field[zi*n*n+yi*n+xi]=-sd;
    }
   }
   if(zi%6===0){onProgress('Joining supports / '+Math.round(zi/n*100)+'%');await tick();}
  }
  // Preserve all exterior circulation; remove only sealed voxel cavities at fork joints.
  const exterior=new Uint8Array(n*n*n),queue=new Uint32Array(n*n*n);let head=0,tail=0;
  const visit=i=>{if(!exterior[i]&&marching.field[i]<=0){exterior[i]=1;queue[tail++]=i;}};
  for(let a=0;a<n;a++)for(let b=0;b<n;b++){visit(a*n+b);visit((n-1)*n*n+a*n+b);visit(a*n*n+b);visit(a*n*n+(n-1)*n+b);visit(a*n*n+b*n);visit(a*n*n+b*n+n-1);}
  while(head<tail){const i=queue[head++],x=i%n,y=Math.floor(i/n)%n,z=Math.floor(i/(n*n));if(x)visit(i-1);if(x<n-1)visit(i+1);if(y)visit(i-n);if(y<n-1)visit(i+n);if(z)visit(i-n*n);if(z<n-1)visit(i+n*n);}
  for(let i=0;i<exterior.length;i++)if(!exterior[i]&&marching.field[i]<=0)marching.field[i]=.08;
  onProgress('Building the thick surface...');await tick();marching.update();if(marching.count/3>=maxFaces)throw Error('This layout is too complex. Use fewer models.');
  const raw=marching.geometry.attributes.position,normal=marching.geometry.attributes.normal,buckets=pillars.map(()=>[]),uvs=pillars.map(()=>[]),normals=pillars.map(()=>[]),v=new THREE.Vector3(),nv=new THREE.Vector3();
  for(let at=0;at<marching.count;at+=3){let x=0,z=0;for(let i=0;i<3;i++){x+=raw.getX(at+i)*scale.x+middle.x;z+=raw.getZ(at+i)*scale.z+middle.z;}x/=3;z/=3;let owner=0,d=Infinity;for(let i=0;i<pillars.length;i++){const dd=(x-pillars[i].x)**2+(z-pillars[i].z)**2;if(dd<d){d=dd;owner=i;}}
   const p=pillars[owner];for(let i=0;i<3;i++){v.fromBufferAttribute(raw,at+i).multiply(scale).add(middle);nv.fromBufferAttribute(normal,at+i);nv.set(nv.x/scale.x,nv.y/scale.y,nv.z/scale.z).normalize();buckets[owner].push(v.x,v.y,v.z);normals[owner].push(nv.x,nv.y,nv.z);
    // One non-repeating material field runs over the entire spatial domain.
    uvs[owner].push(.02+.96*(v.x+.35*v.z-domain.minX-.35*domain.minZ)/(dx+.35*dz),.02+.96*(v.y+.25*v.z-low-.25*domain.minZ)/(dy+.25*dz));
   }
  }
  const group=new THREE.Group();group.name='exhibition-continuous-canopy';const meshes=[];
  for(let i=0;i<pillars.length;i++)if(buckets[i].length){const g=new THREE.BufferGeometry();owned.push(g);g.setAttribute('position',new THREE.Float32BufferAttribute(buckets[i],3));g.setAttribute('normal',new THREE.Float32BufferAttribute(normals[i],3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs[i],2));g.computeBoundingBox();g.computeBoundingSphere();const mesh=new THREE.Mesh(g,materials[i]);mesh.castShadow=true;mesh.receiveShadow=true;mesh.name='Canopy region / '+pillars[i].name;mesh.userData={sourcePlacementId:pillars[i].id,sourceModelId:pillars[i].modelId};group.add(mesh);meshes.push(mesh);}
  const data=pillars.map(({source,...p})=>p);group.userData={kind:'forked-model-growth-canopy-v5',thickness,pillars:data};
  const bounds=new THREE.Box3().setFromObject(group),centre=bounds.getCenter(new THREE.Vector3()),clearance=Math.min(Math.min(...pillars.map(p=>p.height+p.baseY))-.4,...branches.map(s=>Math.min(s.a[1],s.b[1])-Math.max(s.r0,s.r1)-.12));
  marching.geometry.dispose();marching=null;placeholder.dispose();
  return {group,meshes,materials,pillars:data,thickness,bounds,centre,triangles:buckets.reduce((s,a)=>s+a.length/9,0),roofConnected:true,links:links.map(l=>({from:pillars[l.a].id,to:pillars[l.b].id})),clearance,roofAt,footprintAt,radialAt,sectionAt,branches,segmentDistance,dispose};
 }catch(e){marching?.geometry.dispose();placeholder.dispose();dispose();throw e;}
}
