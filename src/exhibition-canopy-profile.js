import * as THREE from 'three';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const quantile=(values,f)=>{values.sort((a,b)=>a-b);return values[Math.min(values.length-1,Math.floor(values.length*f))]||0;};
/* Triangle/plane intersections recover a real section profile, even on low-poly objects. */
export function modelGrowthProfile(source,bounds,anchor){
 const count=14,sectors=16,bands=Array.from({length:count},()=>[]),height=bounds.max.y-bounds.min.y,radius=Math.max(bounds.max.x-bounds.min.x,bounds.max.z-bounds.min.z)/2;
 const va=new THREE.Vector3(),vb=new THREE.Vector3(),vc=new THREE.Vector3();let sampledFaces=0;
 source.object.traverse(mesh=>{if(!mesh.isMesh||!mesh.geometry?.attributes.position)return;const geometry=mesh.geometry,index=geometry.index,faces=Math.floor((index?.count||geometry.attributes.position.count)/3),stride=Math.max(1,Math.ceil(faces/10000));
  for(let f=0;f<faces;f+=stride){const at=f*3;mesh.getVertexPosition(index?index.getX(at):at,va);mesh.getVertexPosition(index?index.getX(at+1):at+1,vb);mesh.getVertexPosition(index?index.getX(at+2):at+2,vc);va.applyMatrix4(mesh.matrixWorld);vb.applyMatrix4(mesh.matrixWorld);vc.applyMatrix4(mesh.matrixWorld);const vertices=[va,vb,vc];sampledFaces++;
   for(let band=0;band<count;band++){const y=bounds.min.y+height*(band+.5)/count;if(y<Math.min(va.y,vb.y,vc.y)||y>Math.max(va.y,vb.y,vc.y))continue;for(let edge=0;edge<3;edge++){const a=vertices[edge],b=vertices[(edge+1)%3];if(Math.abs(a.y-b.y)<1e-9||(a.y-y)*(b.y-y)>0)continue;const t=(y-a.y)/(b.y-a.y);bands[band].push([a.x+(b.x-a.x)*t-anchor.x,a.z+(b.z-a.z)*t-anchor.z]);}}
  }
 });
 const rows=bands.map(points=>{if(!points.length)return null;const xs=points.map(p=>p[0]),zs=points.map(p=>p[1]),minX=quantile(xs.slice(),.03),maxX=quantile(xs.slice(),.97),minZ=quantile(zs.slice(),.03),maxZ=quantile(zs.slice(),.97),cx=(minX+maxX)/2,cz=(minZ+maxZ)/2,radials=Array(sectors).fill(0);
  for(const [x,z]of points){const theta=Math.atan2(z-cz,x-cx),at=((Math.round(theta/Math.PI/2*sectors)%sectors)+sectors)%sectors;radials[at]=Math.max(radials[at],Math.hypot(x-cx,z-cz));}
  const core=quantile(radials.filter(r=>r>0).slice(),.55);return {cx,cz,rx:Math.max(radius*.13,(maxX-minX)/2),rz:Math.max(radius*.13,(maxZ-minZ)/2),core,radials};});
 for(let i=0;i<count;i++)if(!rows[i]){let nearest=0,d=Infinity;for(let j=0;j<count;j++)if(rows[j]&&Math.abs(i-j)<d){d=Math.abs(i-j);nearest=j;}rows[i]=rows[nearest]?{...rows[nearest],radials:[...rows[nearest].radials]}:{cx:0,cz:0,rx:radius,rz:radius,core:radius,radials:Array(sectors).fill(radius)};}
 // Smooth noisy reconstructed sections; retain the model's top/bottom size trend.
 const smoothed=rows.map((row,i)=>{const neighbours=rows.slice(Math.max(0,i-1),Math.min(count,i+2));return {...row,...Object.fromEntries(['cx','cz','rx','rz','core'].map(k=>[k,neighbours.reduce((s,r)=>s+r[k],0)/neighbours.length]))};});
 const bottom=smoothed.slice(0,4).reduce((s,r)=>s+r.core,0)/4,top=smoothed.slice(-4).reduce((s,r)=>s+r.core,0)/4,inverted=bottom>top*1.18;
 const axisX=quantile(rows.map(r=>r.cx),.5),axisZ=quantile(rows.map(r=>r.cz),.5);
 for(let band=0;band<count;band++)if(bands[band].length){const outline=Array(sectors).fill(0);for(const [x,z]of bands[band]){const theta=Math.atan2(z-axisZ,x-axisX),at=((Math.round(theta/Math.PI/2*sectors)%sectors)+sectors)%sectors;outline[at]=Math.max(outline[at],Math.hypot(x-axisX,z-axisZ));}rows[band].radials=outline;}
 const candidates=[];
 for(let band=1;band<count;band++){const row=rows[band],nonzero=row.radials.filter(r=>r>0),core=Math.max(radius*.18,quantile(nonzero.slice(),.45));for(let s=0;s<sectors;s++){const reach=row.radials[s],a=row.radials[(s+sectors-1)%sectors],b=row.radials[(s+1)%sectors];if(reach>core*(band>count*.55?1.23:1.65)&&reach>radius*.48&&Math.max(a,b)<reach*.96)candidates.push({sourceT:(band+.5)/count,angle:s/sectors*Math.PI*2,prominence:reach/core,sourceReach:reach});}}
 const branches=[];for(const c of candidates.sort((a,b)=>b.prominence-a.prominence)){if(branches.some(b=>Math.abs(Math.atan2(Math.sin(b.angle-c.angle),Math.cos(b.angle-c.angle)))<.65))continue;branches.push({...c,t:clamp(inverted?1-c.sourceT:c.sourceT,.24,.72),length:clamp(c.sourceReach*1.25,.55,Math.min(3.2,radius*2.6)),width:clamp(radius*.2,.10,.34)});if(branches.length===4)break;}
 const scale=Math.max(...smoothed.map(r=>Math.max(r.rx,r.rz)),radius*.1);const profile=(inverted?[...smoothed].reverse():smoothed).map(row=>({x:row.cx*.38,z:row.cz*.38,rx:clamp(row.rx/scale,.18,1),rz:clamp(row.rz/scale,.18,1)}));
 return {method:'mesh-cross-sections-v1',sampledFaces,inverted,profile,branches};
}
export function growthSection(p,t){
 const profile=p.growth.profile,f=clamp(t,0,1)*(profile.length-1),at=Math.floor(f),u=f-at;
 const sample=k=>{const a=profile[Math.max(0,at-1)][k],b=profile[at][k],c=profile[Math.min(at+1,profile.length-1)][k],d=profile[Math.min(at+2,profile.length-1)][k];return .5*((2*b)+(-a+c)*u+(2*a-5*b+4*c-d)*u*u+(-a+3*b-3*c+d)*u*u*u);};
 const onset=Math.max(.55,(2.6-p.baseY)/p.height),v=clamp((t-onset)/(1-onset),0,1),blend=v*v*v*(v*(v*6-15)+10),forked=p.growth.branches.length>0,flare=blend*(forked?.03*p.radius:.65+p.radius*.35),taper=forked?1-.78*((q)=>q*q*q*(q*(q*6-15)+10))(clamp((t-.50)/.38,0,1)):1;
 return {x:p.x+sample('x')*(1-blend),z:p.z+sample('z')*(1-blend),rx:p.radius*(.26+.70*clamp(sample('rx'),.14,1.1))*taper+flare,rz:p.radius*(.26+.70*clamp(sample('rz'),.14,1.1))*taper+flare};
}
