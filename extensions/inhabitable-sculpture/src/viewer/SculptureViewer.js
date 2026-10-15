import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {clone as cloneSkeleton} from 'three/addons/utils/SkeletonUtils.js';

export class SculptureViewer{
 constructor(container){
  this.container=container;this.raf=0;this.autoRotate=false;this.wireframe=false;this.root=null;this.last=performance.now();
  this.renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true,powerPreference:'low-power'});
  this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));this.renderer.outputColorSpace=THREE.SRGBColorSpace;
  this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=.95;
  this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  container.append(this.renderer.domElement);this.renderer.domElement.setAttribute('aria-label','Interactive sculpture viewport. Drag to orbit; right-drag to pan; scroll to zoom.');
  this.renderer.domElement.tabIndex=0;
  this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#eeece7');
  this.camera=new THREE.PerspectiveCamera(38,1,.02,100);
  this.controls=new OrbitControls(this.camera,this.renderer.domElement);this.controls.enableDamping=true;this.controls.dampingFactor=.09;this.controls.minDistance=.5;this.controls.maxDistance=24;this.controls.maxPolarAngle=Math.PI*.49;
  this.controls.addEventListener('change',()=>this.invalidate());
  this.hemi=new THREE.HemisphereLight('#ffffff','#d3cdc4',1.2);this.scene.add(this.hemi);
  const light=this.sun=new THREE.DirectionalLight('#fff8ee',2.2);light.position.set(-4,7,5);light.castShadow=true;light.shadow.mapSize.set(1024,1024);light.shadow.radius=3;Object.assign(light.shadow.camera,{left:-5,right:5,top:6,bottom:-5,near:.1,far:30});light.shadow.normalBias=.025;this.scene.add(light,light.target);
  const fill=this.fill=new THREE.DirectionalLight('#e5ecff',1.2);fill.position.set(4,3,-4);this.scene.add(fill);
  const pmrem=new THREE.PMREMGenerator(this.renderer),room=new RoomEnvironment();this.environment=pmrem.fromScene(room,.04).texture;this.scene.environment=this.environment;this.scene.environmentIntensity=.65;pmrem.dispose();room.dispose();
  this.floor=new THREE.Mesh(new THREE.CircleGeometry(5,96),new THREE.ShadowMaterial({opacity:.14}));this.floor.rotation.x=-Math.PI/2;this.floor.position.y=-.012;this.floor.receiveShadow=true;this.scene.add(this.floor);
  this.grid=new THREE.GridHelper(12,24,'#b8b2a6','#d9d5cb');this.grid.position.y=-.009;this.grid.visible=false;this.scene.add(this.grid);
  this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(container);
  this.onKey=e=>{if(this.controls.enabled&&e.key.toLowerCase()==='f'){e.preventDefault();this.frame();}};this.renderer.domElement.addEventListener('keydown',this.onKey);
  this.resize();
 }
 setModel(loaded){
  this.clear();this.contentMode='model';this.scene.background.set('#eeece7');this.renderer.toneMappingExposure=.95;this.scene.environmentIntensity=.65;this.hemi.intensity=1.2;this.fill.intensity=1.2;this.sun.intensity=2.2;this.floor.visible=true;this.controls.maxDistance=24;this.camera.far=100;this.camera.updateProjectionMatrix();this.sun.position.set(-4,7,5);this.sun.target.position.set(0,0,0);Object.assign(this.sun.shadow.camera,{left:-5,right:5,top:6,bottom:-5,near:.1,far:30});this.sun.shadow.camera.updateProjectionMatrix();const object=cloneSkeleton(loaded.scene),materials=new Map();this.ownedGeometries=[];
  object.traverse(o=>{if(!o.isMesh)return;if(!o.geometry.attributes.normal){o.geometry=o.geometry.clone();o.geometry.computeVertexNormals();this.ownedGeometries.push(o.geometry);}o.castShadow=true;o.receiveShadow=true;
   const copy=m=>{if(!materials.has(m))materials.set(m,m.clone());return materials.get(m);};o.material=Array.isArray(o.material)?o.material.map(copy):copy(o.material);});
  this.materials=[...materials.values()];this.root=new THREE.Group();this.root.add(object);
  const box=new THREE.Box3().setFromObject(object),center=box.getCenter(new THREE.Vector3()),size=box.getSize(new THREE.Vector3()),scale=3.4/Math.max(size.x,size.y,size.z);
  this.root.scale.setScalar(scale);this.root.position.set(-center.x*scale,-box.min.y*scale,-center.z*scale);this.scene.add(this.root);this.activeId=loaded.entry.id;
  this.setWireframe(this.wireframe);this.frame();
 }
 setSpatialScene(built){
  this.clear();this.contentMode='space';this.scene.background.set('#535c5b');this.renderer.toneMappingExposure=.83;this.scene.environmentIntensity=.25;this.hemi.intensity=.85;this.fill.intensity=.4;this.sun.intensity=1.65;this.sun.shadow.normalBias=.075;this.sun.shadow.bias=-.00025;if(this.sun.shadow.mapSize.x!==2048){this.sun.shadow.mapSize.set(2048,2048);this.sun.shadow.map?.dispose();this.sun.shadow.map=null;}this.root=built.root;this.materials=built.materials;this.customDispose=built.dispose;this.scene.add(this.root);this.floor.visible=false;this.grid.visible=false;this.controls.maxDistance=500;this.camera.far=1500;this.camera.updateProjectionMatrix();
  const bounds=new THREE.Box3().setFromObject(this.root),center=bounds.getCenter(new THREE.Vector3()),size=bounds.getSize(new THREE.Vector3()),r=Math.max(1,size.x,size.z)*.65;this.sun.target.position.copy(center);this.sun.position.copy(center).add(new THREE.Vector3(-15,35,20));Object.assign(this.sun.shadow.camera,{left:-r,right:r,top:r,bottom:-r,near:.1,far:200});this.sun.shadow.camera.updateProjectionMatrix();this.setAutoRotate(false);this.setWireframe(this.wireframe);this.frame();
 }
 frame(){if(!this.root)return;this.root.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(this.root);if(box.isEmpty()){this.controls.target.set(0,0,0);this.camera.position.set(3,2,4);this.controls.update();this.invalidate();return;}const sphere=box.getBoundingSphere(new THREE.Sphere());
  const halfFov=THREE.MathUtils.degToRad(this.camera.fov/2),angle=Math.min(halfFov,Math.atan(Math.tan(halfFov)*this.camera.aspect)),distance=sphere.radius/Math.sin(angle)*1.18;
  if(this.contentMode==='space'){
   const direction=(this.root.userData.volume?new THREE.Vector3(.9,.5,1.5):new THREE.Vector3(.22,1.3,1.05)).normalize(),right=new THREE.Vector3().crossVectors(new THREE.Vector3(0,1,0),direction).normalize(),up=new THREE.Vector3().crossVectors(direction,right),center=box.getCenter(new THREE.Vector3());let fit=0;
   for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z]){const p=new THREE.Vector3(x,y,z).sub(center);fit=Math.max(fit,p.dot(direction)+Math.max(Math.abs(p.dot(right))/(Math.tan(halfFov)*this.camera.aspect),Math.abs(p.dot(up))/Math.tan(halfFov)));}
   this.controls.target.copy(center);this.camera.position.copy(center).addScaledVector(direction,fit*1.13);this.controls.update();this.invalidate();return;
  }
  this.controls.target.copy(sphere.center);this.camera.position.copy(sphere.center).add(new THREE.Vector3(1.1,.65,1.8).normalize().multiplyScalar(distance));this.controls.update();this.invalidate();}
 setWireframe(value){this.wireframe=value;this.materials?.forEach(m=>{m.wireframe=value;});this.invalidate();}
 setGrid(value){this.grid.visible=value;this.invalidate();}
 setAutoRotate(value){this.autoRotate=value;this.controls.autoRotate=value;this.controls.autoRotateSpeed=1.25;this.invalidate();}
 resize(){const width=Math.max(1,this.container.clientWidth),height=Math.max(1,this.container.clientHeight);this.renderer.setSize(width,height,false);this.camera.aspect=width/height;this.camera.updateProjectionMatrix();this.invalidate();}
 invalidate(){if(!this.raf)this.raf=requestAnimationFrame(now=>{this.raf=0;const dt=Math.min(.05,(now-this.last)/1000);this.last=now;const moving=this.frameTick?.(dt);const changed=this.controls.enabled&&this.controls.update(dt);this.renderer.render(this.scene,this.camera);if(this.autoRotate||changed||moving)this.invalidate();});}
 snapshot(){this.renderer.render(this.scene,this.camera);return this.renderer.domElement.toDataURL('image/png');}
 getState(){return {modelId:this.activeId,mode:this.contentMode,wireframe:this.wireframe,grid:this.grid.visible,autoRotate:this.autoRotate,triangles:this.renderer.info.render.triangles,rendering:!!this.raf};}
 clear(){if(this.root)this.scene.remove(this.root);if(this.customDispose){this.customDispose();this.customDispose=null;}else{this.materials?.forEach(m=>m.dispose());this.ownedGeometries?.forEach(g=>g.dispose());}this.materials=[];this.ownedGeometries=[];this.root=null;}
 dispose(){cancelAnimationFrame(this.raf);this.observer.disconnect();this.controls.dispose();this.clear();this.floor.geometry.dispose();this.floor.material.dispose();this.grid.geometry.dispose();this.grid.material.dispose();this.environment.dispose();this.renderer.dispose();this.renderer.domElement.remove();}
}
