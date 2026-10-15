import * as THREE from 'three';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {FLOOR_HALF,FLOOR_SIZE} from './exhibition-dimensions.js';
/* White sound-stage shell: real window openings, vaulted side panels and slender roof ribs. */
export function createFactoryRoom({scene,height,wallMaterial}){
 const group=new THREE.Group();group.name='white-studio-factory-shell';scene.add(group);const metal=new THREE.MeshStandardMaterial({color:0xb4b9bc,roughness:.39,metalness:.55}),glass=new THREE.MeshPhysicalMaterial({color:0xdcecf3,transparent:true,opacity:.085,roughness:.10,clearcoat:.5,side:THREE.DoubleSide,depthWrite:false}),roof=new THREE.MeshStandardMaterial({color:0xfafaf8,roughness:.70,side:THREE.DoubleSide});let walls=[],roofHeight=height;const owned=[];
 function ceilingAt(x){return roofHeight-6+6*Math.sqrt(Math.max(0,1-(x/FLOOR_HALF)**2));}
 function build(h){group.clear();owned.forEach(g=>g.dispose());owned.length=0;walls=[];roofHeight=h;const frames=[],panes=[],windowY=h-8,windowBottom=windowY-.9,windowTop=windowY+.9;
  function box(w,h,d,x,y,z,rotation,into){const g=new THREE.BoxGeometry(w,h,d),m=new THREE.Matrix4().makeRotationY(rotation);m.setPosition(x,y,z);g.applyMatrix4(m);into.push(g);}
  for(const [side,rotation,x,z]of [['north',0,0,-20],['south',Math.PI,0,20],['west',Math.PI/2,-20,0],['east',-Math.PI/2,20,0]]){
   const wall=new THREE.Group();wall.position.set(x,0,z);wall.rotation.y=rotation;group.add(wall);
   const panel=(w,h,cx,cy)=>{const g=new THREE.BoxGeometry(w,h,.24);owned.push(g);const m=new THREE.Mesh(g,wallMaterial);m.position.set(cx,cy,0);m.name=side+'-wall';m.castShadow=true;m.receiveShadow=true;wall.add(m);walls.push(m);};panel(40,windowBottom,0,windowBottom/2);panel(40,h-windowTop,0,(h+windowTop)/2);
   let last=-20;for(const cx of [-15,-5,5,15]){const start=cx-1.9;panel(start-last,1.8,(last+start)/2,windowY);last=cx+1.9;const pg=new THREE.PlaneGeometry(3.8,1.8);pg.translate(cx,windowY,0);pg.applyMatrix4(new THREE.Matrix4().makeRotationY(rotation));pg.translate(x,0,z);panes.push(pg);
    for(const dx of [-1.9,0,1.9]){const p=new THREE.Vector3(cx+dx,windowY,0).applyAxisAngle(new THREE.Vector3(0,1,0),rotation).add(new THREE.Vector3(x,0,z));box(.10,1.92,.12,p.x,p.y,p.z,rotation,frames);}for(const yy of [windowBottom,windowTop]){const p=new THREE.Vector3(cx,yy,0).applyAxisAngle(new THREE.Vector3(0,1,0),rotation).add(new THREE.Vector3(x,0,z));box(3.92,.10,.12,p.x,p.y,p.z,rotation,frames);}
   }panel(20-last,1.8,(last+20)/2,windowY);
  }
  const addMerged=(geometries,material,name,cast)=>{const g=mergeGeometries(geometries,false);geometries.forEach(v=>v.dispose());owned.push(g);const m=new THREE.Mesh(g,material);m.name=name;m.castShadow=cast;m.receiveShadow=true;group.add(m);return m;};addMerged(frames,metal,'studio-window-mullions',true);addMerged(panes,glass,'studio-window-glazing',false);
  const ribs=[];for(const z of [-20,-12,-4,4,12,20]){const points=Array.from({length:41},(_,i)=>{const x=-20+i;return new THREE.Vector3(x,ceilingAt(x)-.24,z);});ribs.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),64,.075,6,false));}addMerged(ribs,metal,'studio-vault-ribs',true);
  const positions=[];for(const side of [-1,1])for(let i=0;i<24;i++){const x0=side*(12+8*i/24),x1=side*(12+8*(i+1)/24),y0=ceilingAt(x0),y1=ceilingAt(x1);positions.push(x0,y0,-20,x1,y1,-20,x0,y0,20,x0,y0,20,x1,y1,-20,x1,y1,20);}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.computeVertexNormals();owned.push(g);const mesh=new THREE.Mesh(g,roof);mesh.name='white-vault-side-panels';mesh.castShadow=true;mesh.receiveShadow=true;group.add(mesh);
 }
 build(height);return {ceilingAt,setHeight:build,setVisible:value=>group.visible=!!value,collisionMeshes:()=>walls,state:()=>({windows:16,windowOpenings:true,windowWidth:3.8,windowHeight:1.8,windowCentreY:roofHeight-8,vaultedRoof:true,structuralRibs:6,height:roofHeight,visible:group.visible}),dispose:()=>{scene.remove(group);owned.forEach(g=>g.dispose());metal.dispose();glass.dispose();roof.dispose();}};
}
