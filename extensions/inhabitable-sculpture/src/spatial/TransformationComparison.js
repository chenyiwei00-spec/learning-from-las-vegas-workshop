import * as T from 'three';
const $=id=>document.getElementById(id);
/** Preview images are renders of the actual source and generated scene, not design mockups. */
export class TransformationComparison{
 constructor(thumbnails,onStage){this.thumbnails=thumbnails;this.onStage=onStage;this.cache=new Map();this.selected=null;}
 update(loaded,analyses,layout,built){
  this.layout=layout;this.analyses=analyses;this.loaded=loaded;this.cache.clear();$('comparison-tabs').replaceChildren();
  for(const entry of loaded){const button=document.createElement('button');button.textContent=entry.entry.name;button.dataset.comparisonId=entry.entry.id;button.onclick=()=>this.select(entry.entry.id);$('comparison-tabs').append(button);}
  for(const a of analyses){const r=layout.rooms.find(r=>r.id===a.id),m=loaded.find(m=>m.entry.id===a.id);this.cache.set(a.id,{original:this.renderSource(m,a),extracted:this.renderExtraction(a,r),shell:this.renderRoom(built,r,false),interior:this.renderRoom(built,r,true)});}
  this.select(analyses.some(a=>a.id===this.selected)?this.selected:analyses[0].id);$('transformation-comparison').hidden=false;
 }
 renderScene(scene,camera){const renderer=this.thumbnails.renderer;renderer.setSize(420,300);renderer.toneMappingExposure=.86;scene.environment=this.thumbnails.environment;scene.environmentIntensity=.28;scene.background=new T.Color('#c9cdc5');scene.add(new T.HemisphereLight('#ecf0ef','#747367',1.15));const sun=new T.DirectionalLight('#ffefda',1.9);sun.position.set(-12,30,17);scene.add(sun);renderer.render(scene,camera);return renderer.domElement.toDataURL('image/png');}
 renderSource(model,analysis){const scene=new T.Scene();scene.add(model.scene.clone(true));const p=analysis.projection,u=new T.Vector3(...p.axes[0]),v=new T.Vector3(...p.axes[1]),normal=new T.Vector3().crossVectors(u,v).negate().normalize(),center=new T.Vector3(...analysis.centroid).addScaledVector(u,p.sourceCenter[0]).addScaledVector(v,p.sourceCenter[1]),half=p.sourceSpan*2/3,camera=new T.OrthographicCamera(-half*1.4,half*1.4,half,-half,.001,p.sourceSpan*10);camera.up.copy(v).negate();camera.position.copy(center).addScaledVector(normal,p.sourceSpan*3);camera.lookAt(center);return this.renderScene(scene,camera);}
 renderExtraction(a,r){const canvas=document.createElement('canvas'),n=a.projection.resolution;canvas.width=420;canvas.height=300;const ctx=canvas.getContext('2d');ctx.fillStyle='#d7dad2';ctx.fillRect(0,0,420,300);const tile=300/n,ox=60;
  for(let z=0;z<n;z++)for(let x=0;x<n;x++){const i=z*n+x;if(!a.projection.mask[i])continue;const depth=a.projection.upper[i];ctx.fillStyle=`hsl(${155+depth*20} 14% ${30+depth*25}%)`;ctx.fillRect(ox+x*tile,z*tile,tile+.2,tile+.2);}
  ctx.strokeStyle='#b66c43';ctx.lineWidth=1.8;for(const ring of [r.polygon,...r.holes]){ctx.beginPath();ring.forEach(([x,z],i)=>{const px=ox+(x/r.grid.cell+n/2)*tile,py=((z+r.grid.zOffset)/r.grid.cell+n/2)*tile;i?ctx.lineTo(px,py):ctx.moveTo(px,py);});ctx.closePath();ctx.stroke();}return canvas.toDataURL('image/png');
 }
 renderRoom(built,r,interior){const scene=new T.Scene(),parts=built.rooms.get(r.id);scene.add(parts.body.clone(true),parts.roof.clone(true));let camera;
  if(interior){camera=new T.PerspectiveCamera(70,1.4,.04,250);camera.position.set(r.x+r.doors[0].center[0]+1.8,1.65,0);camera.lookAt(r.worldAnchor.x+5,1.9,0);}
  else{const bounds=new T.Box3().setFromObject(parts.body),sphere=bounds.getBoundingSphere(new T.Sphere());camera=new T.PerspectiveCamera(38,1.4,.04,250);camera.position.copy(sphere.center).add(new T.Vector3(.75,1.2,1.3).normalize().multiplyScalar(sphere.radius/Math.sin(19*Math.PI/180)*1.05));camera.lookAt(sphere.center);}
  return this.renderScene(scene,camera);
 }
 select(id){if(!this.cache.has(id))return;this.selected=id;const cached=this.cache.get(id),r=this.layout.rooms.find(r=>r.id===id);
  for(const button of $('comparison-tabs').children)button.setAttribute('aria-pressed',String(button.dataset.comparisonId===id));
  for(const stage of ['original','extracted','shell','interior']){const image=$('comparison-'+stage);image.src=cached[stage];image.alt=r.name+' — '+stage;$('inspect-'+stage).onclick=()=>this.onStage(stage,id);}
  $('comparison-metrics').textContent=`${r.name} · ${(r.features.retainedSourceCells*100).toFixed(1)}% of source raster retained before contour smoothing · ${r.floorArea.toFixed(1)} m² floor · ${(r.features.rectangleFill*100).toFixed(1)}% bounding-rectangle fill · ceiling ${r.heightRange[0].toFixed(1)}–${r.heightRange[1].toFixed(1)} m`;
 }
}
