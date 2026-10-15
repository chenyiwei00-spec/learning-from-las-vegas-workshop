import * as THREE from 'three';
// Bake base colour / UV texture into vertex colours for contour reconstruction.
// Original staging retains its full materials; reconstructed surfaces use sampled colours.
export function extractSource(root){
 root.updateMatrixWorld(true);const pieces=[];let offset=0,triangles=0;
 const images=new Map();
 const texturePixels=texture=>{if(!texture?.image)return null;if(images.has(texture))return images.get(texture);
  try{const image=texture.image,canvas=document.createElement('canvas'),w=Math.max(1,Math.min(1024,image.width)),h=Math.max(1,Math.min(1024,image.height));canvas.width=w;canvas.height=h;const g=canvas.getContext('2d',{willReadFrequently:true});g.drawImage(image,0,0,w,h);const result={w,h,pixels:g.getImageData(0,0,w,h).data};images.set(texture,result);return result;}catch{throw Error('This model texture cannot be sampled. Use an embedded GLB texture or vertex colours.');}};
 root.traverse(o=>{
  if(!o.isMesh)return;if(o.isSkinnedMesh||Object.keys(o.geometry.morphAttributes||{}).length)throw Error('Animated or deforming meshes must be saved as a static model first.');
  const geo=o.geometry,pos=geo.attributes.position,vertex=geo.attributes.color,uv=geo.attributes.uv;
  if(!pos||pos.itemSize!==3)return;const index=geo.index?Uint32Array.from(geo.index.array):Uint32Array.from({length:pos.count},(_,i)=>i);triangles+=index.length/3;if(triangles>600000)throw Error('This model exceeds 600,000 triangles. Use a lighter version for spatial generation.');
  const materials=Array.isArray(o.material)?o.material:[o.material],materialIds=new Uint16Array(pos.count);
  for(const group of geo.groups||[])for(let j=group.start;j<Math.min(index.length,group.start+group.count);j++)materialIds[index[j]]=group.materialIndex||0;
  const positions=new Float32Array(pos.count*3),colors=new Float32Array(pos.count*3),p=new THREE.Vector3(),q=new THREE.Vector2(),c=new THREE.Color(),texel=new THREE.Color();
  for(let i=0;i<pos.count;i++){
   p.fromBufferAttribute(pos,i).applyMatrix4(o.matrixWorld);positions.set(p.toArray(),i*3);
   const m=materials[materialIds[i]]||materials[0];c.copy(m?.color||new THREE.Color(.65,.65,.65));
   if(vertex&&m?.vertexColors)c.multiply(new THREE.Color(vertex.getX(i),vertex.getY(i),vertex.getZ(i)));
   if(m?.map&&uv){const pixels=texturePixels(m.map);if(pixels){q.fromBufferAttribute(uv,i);m.map.updateMatrix();m.map.transformUv(q);const x=Math.max(0,Math.min(pixels.w-1,Math.floor(q.x*pixels.w))),y=Math.max(0,Math.min(pixels.h-1,Math.floor(q.y*pixels.h))),at=(y*pixels.w+x)*4;texel.setRGB(pixels.pixels[at]/255,pixels.pixels[at+1]/255,pixels.pixels[at+2]/255,THREE.SRGBColorSpace);c.multiply(texel);}}
   colors.set(c.toArray(),i*3);
  }pieces.push({positions,colors,index,offset});offset+=pos.count;
 });
 if(!triangles)throw Error('This model has no usable triangles.');
 const positions=new Float32Array(offset*3),colors=new Float32Array(offset*3),index=new Uint32Array(triangles*3);let k=0;
 for(const p of pieces){positions.set(p.positions,p.offset*3);colors.set(p.colors,p.offset*3);for(const i of p.index)index[k++]=i+p.offset;}
 return {positions,colors,index};
}