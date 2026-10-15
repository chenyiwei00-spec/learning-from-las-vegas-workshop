import {analyseSource,Builder,meshBounds} from './form-geometry.js';
import {SETTINGS,validateComposition} from './form-state.js';
import {seeded,rotation,profile,forward,moduleDistance,massFunction,makeVoids,remesh,topology,vertexColor,clamp,keepPrimaryCore,refineSurface} from './surreal-volume.js';
import {surfaceGrid,buildNavigation,validateCirculation,floorAt,renderedFloor,floorClear,prepareTerrain,terrainVoid,bodyClear,buildWideRoutes} from './surreal-navigation.js';
const TAU=Math.PI*2,distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
function curve(a,b,width,rng,role,options={}){
 const dx=b.x-a.x,dz=b.z-a.z,L=Math.hypot(dx,dz)||1,right={x:-dz/L,z:dx/L},rise=Math.abs(b.y-a.y),bend=options.bend??(rise>.7?2.7+rise*.5:.65+rng()*.7),sign=options.sign??(rng()>.5?1:-1),points=[];
 const N=36;
 for(let k=0;k<=N;k++){const t=k/N,offset=Math.sin(t*Math.PI)*bend*sign;points.push({x:a.x+dx*t+right.x*offset,y:0,z:a.z+dz*t+right.z*offset});}
 const lengths=[0];for(let k=1;k<points.length;k++)lengths.push(lengths.at(-1)+distance(points[k-1],points[k]));
 const total=lengths.at(-1);
 let first=0,last=points.length-1;
 const clearA=(a.radius||0)+width/2+.40,clearB=(b.radius||0)+width/2+.40;
 if(rise>.2){while(first<points.length-2&&distance(points[first],a)<clearA)first++;while(last>first+1&&distance(points[last],b)<clearB)last--;}
 for(let k=0;k<points.length;k++){const u=clamp((lengths[k]-lengths[first])/(lengths[last]-lengths[first]||1),0,1);points[k].y=a.y+(b.y-a.y)*u;}
 return {points,width,role,length:total,maxGrade:rise/(lengths[last]-lengths[first]||1),from:a.id,to:b.id};
}
function growth(items,analysis,s,rng){
 const modules=[],nodes=[],edges=[],count=Math.max(items.length,s.moduleCount);
 const compact=clamp(s.compactness+(s.density-.7)*.18,0,1),lock=clamp(s.interlocking+(s.connectionStrength-.65)*.12,0,1);
 for(let k=0;k<count;k++){
  const source=items[k%items.length],a=analysis[source.asset],base=Math.max(3.4,(3.6*s.spatialScale/2.6)*source.scale*(1+(rng()*2-1)*s.scaleVariation));
  const scaleX=base*(.92+rng()*.22),scaleY=Math.max(base*(.88+rng()*.25),s.layoutDriven?7.5/a.height:0),scaleZ=base*(.90+rng()*.23);
  const footprint=a.maxRadius*Math.min(scaleX,scaleZ),parent=k?(k<3?k-1:k%4===3?modules.reduce((best,m,j)=>m.floor>modules[best].floor?j:best,0):Math.floor(rng()*k)):null;
  let x=source.x*.15,z=source.z*.15,floor=0,yaw=source.rotation+(rng()-.5)*1.1;
  if(k){const p=modules[parent],spacing=Math.max(5.7+(1-compact)*.6+(1-lock)*.25,(footprint+p.footprint)*(.73-.17*lock)*(1.10-.18*compact)+s.separation*.10),heading=p.yaw+(rng()-.5)*2.8+1.1+Math.atan2(source.x-p.stageX,source.z-p.stageZ)*.28;
   let best=null;
   for(let c=0;c<16;c++){const angle=heading+(rng()-.5)*2.6,xx=p.x+Math.sin(angle)*spacing,zz=p.z+Math.cos(angle)*spacing;
    let score=Math.hypot(xx,zz)*compact*.14;
    for(const q of modules){const d=Math.hypot(xx-q.x,zz-q.z);score+=Math.max(0,5.2-d)**2*3.0;}
    if(!best||score<best.score)best={x:xx,z:zz,angle,score};
   }x=best.x;z=best.z;yaw=best.angle+(rng()-.5)*1.7+source.rotation*.23;
   const direction=k<3?1:rng()>.28?1:-1,step=(1.35+rng()*.50)*s.verticalComplexity;
   floor=clamp(p.floor+direction*step,0,5.7*s.verticalComplexity);
   edges.push({a:parent,b:k});
  }
  if(s.layoutDriven&&k<items.length){
   // Anchor the first room for each sculpture; additional rooms can grow in split levels.
   x=source.x;z=source.z;yaw=source.rotation;
   if(k){
    const nearest=modules.reduce((best,q,j)=>distance({x,z},q)<distance({x,z},modules[best])?j:best,0);
    edges[edges.length-1]={a:nearest,b:k};
    floor=clamp(modules[nearest].floor+(1.35+rng()*.50)*s.verticalComplexity,0,5.7*s.verticalComplexity);
   }
  }
  const pitch=(rng()-.5)*(.25+s.rotationVariation*.8),roll=(rng()-.5)*(.22+s.rotationVariation*.7);
  const m={layoutDriven:!!s.layoutDriven,id:source.id+'/grown '+(k+1),sourceId:source.id,asset:source.asset,a,scaleX,scaleY,scaleZ,x,z,floor,cy:floor+a.height*scaleY*.23,matrix:rotation(yaw,pitch,roll),yaw,pitch,roll,distortion:s.distortion,phase:rng()*TAU,footprint,parent:s.layoutDriven&&k?edges.at(-1).a:parent,stageX:source.x,stageZ:source.z};
  const radius=2.10+s.voidDensity*.65+a.maxRadius*.15,variation=rng();
  modules.push(m);nodes.push({id:m.id,sourceId:m.sourceId,asset:m.asset,kind:'interlocked source void',center:{x,z,y:floor},floor,radius,variation,view:{x,z,y:floor+.055},entry:{x,z,y:floor+.055},exit:null,height:floor+a.height*scaleY*.78,openingHeight:3.4,openingWidth:s.corridorWidth,scale:base});
 }
 // Short loop connections between adjacent growth branches, never a star or
 // annular plan. The tree already guarantees a connected multilevel network.
 for(let k=2;k<nodes.length;k++)for(let j=0;j<k-1;j++)if(distance(nodes[k].center,nodes[j].center)<5.6&&Math.abs(nodes[k].floor-nodes[j].floor)<1.0&&!edges.some(e=>e.a===j&&e.b===k)&&rng()<.23+s.connectionStrength*.17)edges.push({a:j,b:k,loop:true});
 return {modules,nodes,edges};
}
function nativeFragments(modules,sources,voids,s,paths){
 const meshes=[];let retainedTriangles=0;
 for(let k=0;k<modules.length;k++){const m=modules[k],source=sources[m.asset],p=source.positions,c=source.colors,b=new Builder(m.id+'/recognisable scanned fragments',m.sourceId,'Original scanned crown and projecting fragments → tilted, stretched and locally cut by the shared voids');
  const count=p.length/3,transformed=new Float32Array(p.length);for(let v=0;v<count;v++)transformed.set(forward(m,Array.from(p.subarray(v*3,v*3+3))),v*3);
  for(let i=0;i<source.index.length;i+=3){
   const ids=[source.index[i]*3,source.index[i+1]*3,source.index[i+2]*3],nativeY=(p[ids[0]+1]+p[ids[1]+1]+p[ids[2]+1])/3,radial=(Math.hypot(p[ids[0]],p[ids[0]+2])+Math.hypot(p[ids[1]],p[ids[1]+2])+Math.hypot(p[ids[2]],p[ids[2]+2]))/3;
   if(nativeY/m.a.height<.66-s.intensity*.14&&!(nativeY/m.a.height>.24&&radial>m.a.maxRadius*.83))continue;
   const tri=ids.map(v=>Array.from(transformed.subarray(v,v+3)));if(tri.some(v=>v[1]<-.65))continue;
   const center=tri.reduce((acc,v)=>acc.map((q,j)=>q+v[j]/3),[0,0,0]);if([center,...tri].some(v=>voids.value(...v)<.65))continue;
   if(s.layoutDriven&&paths.some(path=>path.points.some(q=>Math.hypot(q.x-center[0],q.z-center[2])<s.corridorWidth/2+.65&&center[1]>q.y-.25&&center[1]<q.y+2.4)))continue;
   // Exclude scanned faces buried deeply inside another fused body.
   if(modules.some((other,j)=>j!==k&&moduleDistance(other,...center)<-.35))continue;
   b.tri(...tri,...ids.map(v=>Array.from(c.subarray(v,v+3))));retainedTriangles++;
  }
  const mesh=b.finish();mesh.moduleId=m.id;mesh.nativeSource=true;meshes.push(mesh);
  // Optional repeated native crown shards stay suspended above the carved
  // circulation. They are attributed fragments, not claimed as welded solids.
  if(s.repetition>1&&k%2===0)for(let r=1;r<s.repetition;r++){
   const copy={...mesh,name:mesh.name+'/suspended cast '+r,operation:'Original upper cast fragment → repeated and suspended above the shared interior',positions:mesh.positions.slice()};
   for(let i=0;i<copy.positions.length;i+=3){copy.positions[i]+=r*.85;copy.positions[i+1]+=r*1.65;copy.positions[i+2]-=r*.4;}
   // Only roof-height repetitions are retained, so they cannot enter a route.
   const bb=new Builder(copy.name,m.sourceId,copy.operation);for(let i=0;i<copy.positions.length;i+=9){const t=[Array.from(copy.positions.subarray(i,i+3)),Array.from(copy.positions.subarray(i+3,i+6)),Array.from(copy.positions.subarray(i+6,i+9))];if(t.every(v=>v[1]>m.floor+5.2&&voids.value(...v)>.65))bb.tri(...t,Array.from(copy.colors.subarray(i,i+3)),Array.from(copy.colors.subarray(i+3,i+6)),Array.from(copy.colors.subarray(i+6,i+9)));}const part=bb.finish();part.moduleId=m.id;part.nativeSource=true;meshes.push(part);
  }
 }
 return {meshes,retainedTriangles};
}
function floors(nav,modules,thickness=0){
 nav.corners=new Float32Array(nav.heights.length*4);nav.corners.fill(NaN);const b=new Builder('Carved floors / connected split levels',null,'Source footprints → level terraces and continuously rising carved ramps',false),step=nav.step;
 const heightNear=(ix,iz,h)=>{if(ix<0||iz<0||ix>=nav.nx||iz>=nav.nz)return h;const id=iz*nav.nx+ix;let best=h,d=.35;for(let k=0;k<nav.counts[id];k++){const v=nav.heights[id*nav.layers+k],delta=Math.abs(v-h);if(delta<d){d=delta;best=v;}}return best;};
 const corner=(x,z,h,sx,sz)=>{const sum=heightNear(x,z,h)+heightNear(x+sx,z,h)+heightNear(x,z+sz,h)+heightNear(x+sx,z+sz,h);return [nav.minX+(x+sx*.5)*step,sum/4,nav.minZ+(z+sz*.5)*step];};
 for(let z=0;z<nav.nz;z++)for(let x=0;x<nav.nx;x++){const id=z*nav.nx+x;for(let k=0;k<nav.counts[id];k++){const h=nav.heights[id*nav.layers+k],color=vertexColor(modules,nav.minX+x*step,h+1,nav.minZ+z*step).color.map(v=>v*.25+.48);const q=[corner(x,z,h,-1,-1),corner(x,z,h,1,-1),corner(x,z,h,1,1),corner(x,z,h,-1,1)];nav.corners.set(q.map(v=>v[1]),(id*nav.layers+k)*4);b.quad(...q,color);
  if(thickness){
   const lower=q.map(v=>[v[0],v[1]-thickness,v[2]]);b.quad(lower[3],lower[2],lower[1],lower[0],[.018,.023,.032]);
   for(const [edge,dx,dz] of [[0,0,-1],[1,1,0],[2,0,1],[3,-1,0]]){
    const xx=x+dx,zz=z+dz,j=zz*nav.nx+xx;
    let neighbour=false;if(xx>=0&&xx<nav.nx&&zz>=0&&zz<nav.nz)for(let n=0;n<nav.counts[j];n++)if(Math.abs(nav.heights[j*nav.layers+n]-h)<.35){neighbour=true;break;}
    if(!neighbour){const next=(edge+1)%4;b.quad(q[edge],lower[edge],lower[next],q[next],[.018,.023,.032]);}
   }
  }}}
 const mesh=b.finish();mesh.road=true;mesh.thickness=thickness;return mesh;
}
function connectedNavigation(nav,nodes,entrance,exit){
 const index=p=>{const x=Math.round((p.x-nav.minX)/nav.step),z=Math.round((p.z-nav.minZ)/nav.step),id=z*nav.nx+x;let best=-1,d=.4;for(let k=0;k<nav.counts[id];k++){const h=nav.heights[id*nav.layers+k],v=Math.abs(h-p.y);if(v<d){d=v;best=id*nav.layers+k;}}return best;};
 const start=index(entrance);if(start<0)throw Error('The entrance has no walkable support.');const seen=new Uint8Array(nav.heights.length),queue=[start];seen[start]=1;
 for(let head=0;head<queue.length;head++){const k=queue[head],id=Math.floor(k/nav.layers),x=id%nav.nx,z=Math.floor(id/nav.nx),h=nav.heights[k];for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){const xx=x+dx,zz=z+dz;if(xx<0||zz<0||xx>=nav.nx||zz>=nav.nz)continue;const cell=zz*nav.nx+xx;for(let j=0;j<nav.counts[cell];j++){const next=cell*nav.layers+j;if(!seen[next]&&Math.abs(nav.heights[next]-h)<=.22){seen[next]=1;queue.push(next);}}}}
 for(const p of [exit,...nodes.map(n=>n.view)]){const id=index(p);if(id<0||!seen[id]){const e=Error('A split-level room is not connected to the entrance. Try the next seed.');e.details={target:p,index:id,visited:queue.length};throw e;}}
 return queue.length;
}
function oneGrowth(items,sources,input,onProgress=()=>{},diagnostics=null){
 const start=Date.now(),s={...SETTINGS,...input};
 validateComposition({format:'borrowed-worlds-model-architecture',version:1,items,settings:s},Object.keys(sources));
 if(!items.length)throw Error('Add at least one original source.');
 onProgress(3,'Measuring the original casts, projections and source contours');const analysis={};for(const i of items)if(!analysis[i.asset])analysis[i.asset]=analyseSource(sources[i.asset]);
 const rng=seeded(s.seed),{modules,nodes,edges}=growth(items,analysis,s,rng);
 onProgress(10,'Growing a compact, interlocking three-dimensional body');
 const roughBounds={minX:Infinity,maxX:-Infinity,minY:-1.5,maxY:-Infinity,minZ:Infinity,maxZ:-Infinity};
 for(const m of modules){const r=m.a.maxRadius*Math.max(m.scaleX,m.scaleZ)+m.a.height*m.scaleY*(Math.abs(Math.sin(m.pitch))+Math.abs(Math.sin(m.roll)))*.5+1.6;roughBounds.minX=Math.min(roughBounds.minX,m.x-r);roughBounds.maxX=Math.max(roughBounds.maxX,m.x+r);roughBounds.minZ=Math.min(roughBounds.minZ,m.z-r);roughBounds.maxZ=Math.max(roughBounds.maxZ,m.z+r);roughBounds.maxY=Math.max(roughBounds.maxY,m.floor+m.a.height*m.scaleY+2.0);}
 const mass=massFunction(modules,.18+s.fusionStrength*1.6),paths=[];
 function connect(a,b,role,optional=false){let best=null;
  const rise=Math.abs(b.y-a.y),base=rise>.7?2.7+rise*.5:.8;
  for(const sign of [-1,1])for(const factor of [.75,1,1.35,1.8,2.3]){const p=curve(a,b,s.corridorWidth,rng,role,{sign,bend:base*factor});let conflicts=0,outside=0;
   for(let k=0;k<p.points.length;k+=2){const v=p.points[k];if(mass(v.x,v.y+1.65,v.z)>.3)outside++;
    for(const n of nodes){const delta=Math.abs(v.y-n.floor);if(delta>.28&&delta<2.85&&distance(v,n.center)<n.radius*.72+s.corridorWidth/2+.45)conflicts++;}
    for(const previous of paths)for(let j=0;j<previous.points.length;j+=2){const q=previous.points[j],delta=Math.abs(v.y-q.y);if(delta>.28&&delta<2.85&&distance(v,q)<s.corridorWidth+.5)conflicts++;}
   }
   const score=conflicts*1000+Math.max(0,p.maxGrade-.45)*100000+outside*1.5+p.length*.1;if(!best||score<best.score)best={p,score,conflicts};
  }
  if(optional&&best.conflicts)return;paths.push(best.p);return best.p;
 }
 for(const e of edges){const a=nodes[e.a],b=nodes[e.b];connect({...a.center,id:a.id,radius:a.radius*.72},{...b.center,id:b.id,radius:b.radius*.72},e.loop?'interlocking loop':'rising carved connection',e.loop);}
 function exterior(n,angle){let p;for(let r=n.radius+1.0;r<13;r+=.4){p={x:n.center.x+Math.sin(angle)*r,z:n.center.z+Math.cos(angle)*r,y:n.floor,id:'external'};if(mass(p.x,p.y+1.6,p.z)>.65)break;}return p;}
 const entranceAngle=modules.length>1?Math.atan2(nodes[0].center.x-nodes[1].center.x,nodes[0].center.z-nodes[1].center.z):modules[0].yaw;
 const entrance=exterior(nodes[0],entranceAngle),last=nodes.at(-1),mean={x:nodes.reduce((a,n)=>a+n.center.x,0)/nodes.length,z:nodes.reduce((a,n)=>a+n.center.z,0)/nodes.length},exit=exterior(last,Math.atan2(last.center.x-mean.x,last.center.z-mean.z)+.35);
 connect(entrance,{...nodes[0].center,id:nodes[0].id,radius:nodes[0].radius*.72},'carved entrance');
 connect({...last.center,id:last.id,radius:last.radius*.72},exit,'carved exit / terrace');
 const next=nodes[1]||nodes[0],dx=next.center.x-nodes[0].center.x,dz=next.center.z-nodes[0].center.z,L=Math.hypot(dx,dz)||1;
 const atriums=[{x:(next.center.x+nodes[0].center.x)/2-dz/L*.85,z:(next.center.z+nodes[0].center.z)/2+dx/L*.85,floor:0,radius:1.65+s.voidDensity*.45,phase:rng()*TAU}];
 if(nodes.length>5){const n=nodes[Math.floor(nodes.length/2)];atriums.push({x:n.center.x+1.5,z:n.center.z-1.4,floor:n.floor,radius:1.1+s.voidDensity*.45,phase:rng()*TAU});}
 const margin=2.2,bounds={minX:Math.floor(Math.min(roughBounds.minX,...paths.flatMap(p=>p.points.map(v=>v.x)))-margin),maxX:Math.ceil(Math.max(roughBounds.maxX,...paths.flatMap(p=>p.points.map(v=>v.x)))+margin),minY:-1.5,maxY:Math.ceil(roughBounds.maxY),minZ:Math.floor(Math.min(roughBounds.minZ,...paths.flatMap(p=>p.points.map(v=>v.z)))-margin),maxZ:Math.ceil(Math.max(roughBounds.maxZ,...paths.flatMap(p=>p.points.map(v=>v.z)))+margin)};
 onProgress(22,'Carving overlapping rooms, irregular atriums and split-level passages');
 const nav=prepareTerrain(buildNavigation(nodes,paths,null,null,bounds));
 const floorMesh=floors(nav,modules);
 for(const n of nodes){const h=floorAt(nav,n.center.x,n.center.z,n.floor+.055,10);if(h!==null){n.nominalFloor=n.floor;n.floor=h-.055;n.view.y=h;n.entry.y=h;}}
 for(const path of paths)for(const p of path.points){const h=floorAt(nav,p.x,p.z,p.y+.055,10);if(h!==null)p.y=h-.055;}
 const outer=nodes.slice().sort((a,b)=>distance(b.center,mean)-distance(a.center,mean)).slice(0,Math.max(1,Math.ceil(nodes.length/3)));
 const windows=outer.map((n,k)=>{const dx=n.center.x-mean.x,dz=n.center.z-mean.z,L=Math.hypot(dx,dz)||1,normal={x:dx/L,z:dz/L};return {role:'source facade section',carveRadius:k===0?1.35+s.opening*.7:.87+s.opening*.5,clearance:k===0?4.1:2.7,points:[{x:n.center.x+normal.x*n.radius*.35,z:n.center.z+normal.z*n.radius*.35,y:n.floor+(k===0?0:.5)},{x:n.center.x+normal.x*8,z:n.center.z+normal.z*8,y:n.floor+(k===0?0:.5)}]};});
 const originalVoids=makeVoids(nodes,paths.concat(windows),atriums,s,bounds),bedVoid=terrainVoid(nav),voids={value:(x,y,z)=>Math.min(originalVoids.value(x,y,z),bedVoid(x,y,z))};
 const field=(x,y,z)=>Math.max(mass(x,y,z),-voids.value(x,y,z));
 const extracted=remesh(field,modules,bounds,onProgress),core=extracted.mesh;const discardedVoxelTriangles=keepPrimaryCore(core);refineSurface(core,modules);
 onProgress(74,'Restoring recognisable original crowns and projecting fragments');
 const details=nativeFragments(modules,sources,voids,s,paths),meshes=[core,...details.meshes],topo=topology(core);
 if(topo.boundaryEdges||topo.nonManifoldEdges)throw Error('The shared volume could not close reliably. Try the next seed.');
 diagnostics?.({meshes,nodes,paths,bounds,grid:extracted.grid,topology:topo,atriums});
 onProgress(83,'Measuring the actual three-dimensional carved surface');
 const occupancy=surfaceGrid(meshes,extracted.grid),circulation=validateCirculation(nodes,paths,extracted.grid,occupancy,s.corridorWidth);
 for(let id=0;id<nav.counts.length;id++){const x=nav.minX+(id%nav.nx)*nav.step,z=nav.minZ+Math.floor(id/nav.nx)*nav.step,keep=[];
  for(let k=0;k<nav.counts[id];k++){const h=renderedFloor(nav,id,k,x,z);if(bodyClear(extracted.grid,occupancy,x,h,z)&&floorClear(nav,x,z,h))keep.push({h,c:Array.from(nav.corners.subarray((id*nav.layers+k)*4,(id*nav.layers+k)*4+4))});}
  nav.counts[id]=keep.length;for(let k=0;k<keep.length;k++){nav.heights[id*nav.layers+k]=keep[k].h;nav.corners.set(keep[k].c,(id*nav.layers+k)*4);}
 }
 meshes.push(floors(nav,modules,.24));
 const actualRoutes=buildWideRoutes(nav,nodes,entrance,exit,extracted.grid,occupancy,s.corridorWidth,edges);paths.splice(0,paths.length,...actualRoutes);
 const floorCirculation=validateCirculation(nodes,paths,extracted.grid,occupancy,s.corridorWidth,nav);
 const walkableCells=connectedNavigation(nav,nodes,{...entrance,y:floorAt(nav,entrance.x,entrance.z,entrance.y+.055,10)},{...exit,y:floorAt(nav,exit.x,exit.z,exit.y+.055,10)});
 const ground=new Builder('Surrounding ground',null,'A modest ground plane around the shared source body',false);ground.quad([bounds.minX,-.025,bounds.minZ],[bounds.maxX,-.025,bounds.minZ],[bounds.maxX,-.025,bounds.maxZ],[bounds.minX,-.025,bounds.maxZ],[.64,.61,.54]);meshes.push(ground.finish());
 onProgress(97,'Checking connected floors, rising ramps and source attribution');
 let inMass=0,total=0;for(const p of paths.filter(p=>p.role.includes('connection')||p.role.includes('loop')))for(const v of p.points){total++;if(mass(v.x,v.y+1.6,v.z)<.15)inMass++;}
 const plan={generator:'source-volume-organism-v1',meshes,nodes,paths,entrance:{...entrance},exit:{...exit},gathering:nodes[0].view,courtyard:atriums[0],atriums,clusters:[],bounds,nav,volumeGrid:{...extracted.grid,surfaces:occupancy},walkGrid:{data:new Uint8Array(1),nx:1,nz:1,step:1,minX:0,minZ:0},settings:s,
 skeleton:{growthEdges:edges,modules:modules.map(m=>({id:m.id,sourceId:m.sourceId,asset:m.asset,parent:m.parent,center:{x:m.x,y:m.floor,z:m.z},rotation:{yaw:m.yaw,pitch:m.pitch,roll:m.roll},scale:[m.scaleX,m.scaleY,m.scaleZ]})),sequence:['carved entrance','interlocked lower void','rising interior','split-level chambers','exit terrace'],atriums,seed:s.seed},
 analysis:Object.fromEntries(Object.entries(analysis).map(([key,a])=>[key,{kind:a.kind,height:a.height,width:a.width,depth:a.depth,sourceTriangles:a.sourceTriangles,sourceVertices:a.sourceVertices}])),
 validation:{roadThickness:.24,discardedVoxelTriangles,...floorCirculation,floorTrianglesChecked:true,topology:topo,modules:nodes.length,roomFloorRange:Math.max(...nodes.map(n=>n.floor))-Math.min(...nodes.map(n=>n.floor)),verticalRange:(()=>{let lo=Infinity,hi=-Infinity;for(let id=0;id<nav.counts.length;id++)for(let k=0;k<nav.counts[id];k++){const h=nav.heights[id*nav.layers+k];lo=Math.min(lo,h);hi=Math.max(hi,h);}return hi-lo;})(),multilevelColumns:Array.from(nav.counts).filter(v=>v>1).length,nativeTriangles:details.retainedTriangles,connectedWalkableCells:walkableCells,voxelResolution:extracted.grid.step,voxelSamples:extracted.grid.values.length,carvedRouteInsideMass:inMass/(total||1),longestGrowthContact:Math.max(0,...edges.map(e=>distance(nodes[e.a].center,nodes[e.b].center))),runtimeMs:Date.now()-start,topologicallyFusedCore:true,nativeFragmentsSeparatelyRetained:true,routesClear:true}};
 onProgress(100,'One shared body. Many borrowed spaces.');return plan;
}

export function generateSurreal(items,sources,input,onProgress=()=>{},diagnostics=null){
 let lastError;const requested=input.seed??SETTINGS.seed;
 for(let attempt=0;attempt<3;attempt++){const effective=attempt===0?requested:((requested^(Math.imul(attempt,0x9e3779b9)))>>>0)%1000000;
  try{const plan=oneGrowth(items,sources,{...input,seed:effective},(p,m)=>onProgress(Math.min(99,attempt*30+p*.30),(attempt?'Refining the growth contacts. ':'')+m),diagnostics);
   plan.settings={...SETTINGS,...input};plan.validation.requestedSeed=requested;plan.validation.effectiveSeed=effective;plan.validation.growthAttempts=attempt+1;onProgress(100,'One shared body. Many borrowed spaces.');return plan;
  }catch(error){lastError=error;if(/outside its limits|invalid|unavailable|at least one/.test(error.message))throw error;}
 }
 throw lastError;
}
