/* View-only Collage Studio finish. Source GLB bytes and room materials stay intact. */
(()=>{
'use strict';
const version='collage-studio-faceted-v1',previews=new Map();
async function prepare(blob,{target='sculpture'}={}){
 if(target==='space'||!(blob instanceof Blob))return blob;
 if(previews.has(blob))return previews.get(blob);
 const task=(async()=>{
  const raw=await blob.arrayBuffer(),view=new DataView(raw);
  if(raw.byteLength<28||view.getUint32(0,true)!==0x46546c67)return blob;
  const n=view.getUint32(12,true),tree=JSON.parse(new TextDecoder().decode(new Uint8Array(raw,20,n)));
  if(tree.asset?.extras?.previewSurface==='faceted-v1'||tree.nodes?.some(node=>node.extras?.engine==='inhabitable-v1'))return blob;
  if(tree.buffers?.length!==1||tree.extensionsRequired?.some(x=>/draco|meshopt|quantization/.test(x)))return blob;
  const start=28+n,binary=new Uint8Array(raw,start,view.getUint32(20+n,true)),data=new DataView(binary.buffer,binary.byteOffset,binary.byteLength),parts=[];let length=binary.length;
  const sizes={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4},widths={SCALAR:1,VEC2:2,VEC3:3,VEC4:4};
  function append(bytes){const offset=(length+3)&~3;parts.push({offset,bytes:new Uint8Array(bytes.buffer,bytes.byteOffset,bytes.byteLength)});length=offset+bytes.byteLength;const index=tree.bufferViews.length;tree.bufferViews.push({buffer:0,byteOffset:offset,byteLength:bytes.byteLength});return index;}
  for(const mesh of tree.meshes||[])for(const primitive of mesh.primitives||[]){
   if((primitive.mode??4)!==4||primitive.targets?.length)continue;
   const position=tree.accessors[primitive.attributes.POSITION];if(position?.componentType!==5126||position.type!=='VEC3'||position.sparse)continue;
   const sourceIndex=primitive.indices===undefined?null:tree.accessors[primitive.indices],count=sourceIndex?.count||position.count;if(count%3||sourceIndex?.sparse)continue;
   if(Object.values(primitive.attributes).some(idx=>tree.accessors[idx].sparse||!sizes[tree.accessors[idx].componentType]||!widths[tree.accessors[idx].type]))continue;
   const indices=new Uint32Array(count);
   if(sourceIndex){const b=tree.bufferViews[sourceIndex.bufferView],size=sizes[sourceIndex.componentType],stride=b.byteStride||size,base=(b.byteOffset||0)+(sourceIndex.byteOffset||0);
    for(let i=0;i<count;i++){const at=base+i*stride;indices[i]=size===4?data.getUint32(at,true):size===2?data.getUint16(at,true):data.getUint8(at);}
   }else for(let i=0;i<count;i++)indices[i]=i;
   const attributes={};let positions;
   for(const [key,idx]of Object.entries(primitive.attributes)){
    if(key==='NORMAL')continue;const a=tree.accessors[idx],b=tree.bufferViews[a.bufferView],size=sizes[a.componentType]*widths[a.type],stride=b.byteStride||size,base=(b.byteOffset||0)+(a.byteOffset||0),expanded=new Uint8Array(count*size);
    for(let i=0;i<count;i++){const at=base+indices[i]*stride;expanded.set(binary.subarray(at,at+size),i*size);}
    const accessor={...a,bufferView:append(expanded),byteOffset:0,count};attributes[key]=tree.accessors.length;tree.accessors.push(accessor);if(key==='POSITION')positions=new Float32Array(expanded.buffer);
   }
   const normals=new Float32Array(count*3);
   for(let i=0;i<count*3;i+=9){const ax=positions[i+3]-positions[i],ay=positions[i+4]-positions[i+1],az=positions[i+5]-positions[i+2],bx=positions[i+6]-positions[i],by=positions[i+7]-positions[i+1],bz=positions[i+8]-positions[i+2];
    let x=ay*bz-az*by,y=az*bx-ax*bz,z=ax*by-ay*bx;const size=Math.hypot(x,y,z);if(size>1e-12){x/=size;y/=size;z/=size;}else{x=0;y=1;z=0;}
    for(let k=0;k<9;k+=3){normals[i+k]=x;normals[i+k+1]=y;normals[i+k+2]=z;}
   }
   attributes.NORMAL=tree.accessors.length;tree.accessors.push({bufferView:append(normals),byteOffset:0,componentType:5126,count,type:'VEC3'});
   primitive.attributes=attributes;delete primitive.indices;
  }
  if(!parts.length)return blob;tree.buffers[0].byteLength=length;tree.asset.extras={...tree.asset.extras,previewSurface:'faceted-v1',previewOnly:true};
  const json=new TextEncoder().encode(JSON.stringify(tree)),jl=(json.length+3)&~3,bl=(length+3)&~3,out=new Uint8Array(28+jl+bl),header=new DataView(out.buffer);
  header.setUint32(0,0x46546c67,true);header.setUint32(4,2,true);header.setUint32(8,out.length,true);header.setUint32(12,jl,true);header.setUint32(16,0x4e4f534a,true);out.fill(32,20,20+jl);out.set(json,20);header.setUint32(20+jl,bl,true);header.setUint32(24+jl,0x004e4942,true);out.set(binary,28+jl);for(const part of parts)out.set(part.bytes,28+jl+part.offset);
  return new Blob([out],{type:'model/gltf-binary'});
 })();previews.set(blob,task);while(previews.size>3)previews.delete(previews.keys().next().value);return task;
}

function configure(viewer){
 viewer.environmentImage='neutral';viewer.exposure=1;viewer.toneMapping='neutral';
 viewer.shadowIntensity=.6;viewer.shadowSoftness=1;
}
function apply(viewer,{target='sculpture'}={}){
 if(target==='space')return;
 configure(viewer);
 for(const material of viewer.model?.materials||[]){
  const p=material.pbrMetallicRoughness;if(!p)continue;
  p.setMetallicFactor(0);p.setRoughnessFactor(.85);
  if(material.clearcoatFactor>0)material.setClearcoatFactor(0);
 }
 viewer.dataset.previewFinish=version;
}
window.ModelPreviewFinish=Object.freeze({prepare,configure,apply,version});
})();
