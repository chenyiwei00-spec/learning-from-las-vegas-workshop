/* Saturate generated GLB colours, preserving geometry and alpha. Idempotent for saved models. */
(()=>{
'use strict';
const FACTOR=1.35,VERSION='saturation-1.35-v1',FINISH='original-archive-v1',cache=new WeakMap(),encoder=new TextEncoder();
function rgb(values,offset=0,max=1){const r=values[offset]/max,g=values[offset+1]/max,b=values[offset+2]/max,y=r*.2126+g*.7152+b*.0722;values[offset]=Math.max(0,Math.min(1,y+(r-y)*FACTOR))*max;values[offset+1]=Math.max(0,Math.min(1,y+(g-y)*FACTOR))*max;values[offset+2]=Math.max(0,Math.min(1,y+(b-y)*FACTOR))*max;}
async function enhance(blob){
 if(!(blob instanceof Blob))return blob;if(cache.has(blob))return cache.get(blob);
 const task=(async()=>{
  const raw=await blob.arrayBuffer(),view=new DataView(raw);if(view.byteLength<28||view.getUint32(0,true)!==0x46546c67)return blob;
  const jl=view.getUint32(12,true),tree=JSON.parse(new TextDecoder().decode(new Uint8Array(raw,20,jl)));if(tree.nodes?.some(n=>n.extras?.engine==='inhabitable-v1'))return blob;
  const colourDone=tree.asset?.extras?.colourVersion===VERSION,wasDeep=tree.asset?.extras?.pigmentFinish==='tripo-depth-v1';
  if(colourDone&&tree.asset?.extras?.materialFinish===FINISH&&!wasDeep)return blob;
  const start=20+jl;if(start+8>raw.byteLength)return blob;let binary=new Uint8Array(raw.slice(start+8,start+8+view.getUint32(start,true))),data=new DataView(binary.buffer);
  // Undo the optional dark pigment finish for cached models whose source is unavailable.
  // The reference Collage Studio renders the original saturated vertex values directly.
  if(wasDeep){
   const indices=new Set();for(const mesh of tree.meshes||[])for(const primitive of mesh.primitives||[])if(primitive.attributes?.COLOR_0!==undefined)indices.add(primitive.attributes.COLOR_0);
   for(const idx of indices){const a=tree.accessors[idx],bv=tree.bufferViews[a.bufferView];if(!bv||a.sparse)continue;
    const n=a.type==='VEC4'?4:3,size=a.componentType===5126?4:a.componentType===5123?2:1,stride=bv.byteStride||size*n,base=(bv.byteOffset||0)+(a.byteOffset||0),max=size===4?1:size===2?65535:255;
    for(let i=0;i<a.count;i++){const c=[];for(let j=0;j<3;j++){const at=base+i*stride+j*size,v=(size===4?data.getFloat32(at,true):size===2?data.getUint16(at,true):data.getUint8(at))/max;c.push(Math.pow(v<=.0031308?v*12.92:1.055*v**(1/2.4)-.055,1/1.04));}
     const y=c[0]*.2126+c[1]*.7152+c[2]*.0722;for(let j=0;j<3;j++){const at=base+i*stride+j*size,v=Math.max(0,Math.min(1,y+(c[j]-y)/1.12))*max;size===4?data.setFloat32(at,v,true):size===2?data.setUint16(at,Math.round(v),true):data.setUint8(at,Math.round(v));}
    }
   }
   Object.assign(tree.asset.extras,{pigmentFinish:'collage-studio-reference-v1',vertexColourSpace:'legacy'});
  }
  const seen=new Set();for(const mesh of colourDone?[]:tree.meshes||[])for(const primitive of mesh.primitives||[]){const idx=primitive.attributes?.COLOR_0;if(idx===undefined||seen.has(idx))continue;seen.add(idx);const a=tree.accessors[idx],bv=tree.bufferViews[a.bufferView];if(!bv||a.sparse)continue;const components=a.type==='VEC4'?4:3,size=a.componentType===5126?4:a.componentType===5123?2:1,stride=bv.byteStride||size*components,base=(bv.byteOffset||0)+(a.byteOffset||0);if(![5121,5123,5126].includes(a.componentType))continue;
   for(let i=0;i<a.count;i++){const p=base+i*stride,values=[];for(let j=0;j<3;j++)values.push(size===4?data.getFloat32(p+j*size,true):size===2?data.getUint16(p+j*size,true):data.getUint8(p+j));rgb(values,0,size===4?1:size===2?65535:255);for(let j=0;j<3;j++)size===4?data.setFloat32(p+j*size,values[j],true):size===2?data.setUint16(p+j*size,Math.round(values[j]),true):data.setUint8(p+j,Math.round(values[j]));}
  }
  // Only base-colour images are adjusted. Normal, roughness and metallic maps stay intact.
  const imageIndices=new Set();for(const m of tree.materials||[]){const p=m.pbrMetallicRoughness,t=p?.baseColorTexture;if(t&&!colourDone)imageIndices.add(tree.textures?.[t.index]?.source);if(!colourDone&&p?.baseColorFactor&&!t&&seen.size===0)rgb(p.baseColorFactor);}
  for(const idx of imageIndices){const image=tree.images?.[idx],bv=tree.bufferViews?.[image?.bufferView];if(!bv)continue;const original=new Blob([binary.slice(bv.byteOffset||0,(bv.byteOffset||0)+bv.byteLength)],{type:image.mimeType||'image/png'}),bitmap=await createImageBitmap(original),canvas=document.createElement('canvas');canvas.width=bitmap.width;canvas.height=bitmap.height;const g=canvas.getContext('2d');g.drawImage(bitmap,0,0);bitmap.close();const pixels=g.getImageData(0,0,canvas.width,canvas.height);for(let i=0;i<pixels.data.length;i+=4)rgb(pixels.data,i,255);g.putImageData(pixels,0,0);const png=await new Promise(r=>canvas.toBlob(r,'image/png')),encoded=new Uint8Array(await png.arrayBuffer()),offset=(binary.length+3)&~3,next=new Uint8Array(offset+encoded.length);next.set(binary);next.set(encoded,offset);binary=next;image.bufferView=tree.bufferViews.length;tree.bufferViews.push({buffer:0,byteOffset:offset,byteLength:encoded.length});image.mimeType='image/png';
  }
  // Undo only our previous finish migration; new inputs keep their source materials.
  if(tree.asset?.extras?.materialFinish==='metallic-archive-v1'){
   for(const material of tree.materials||[]){
    const p=material.pbrMetallicRoughness||={};p.metallicFactor=0;p.roughnessFactor=1;
    if(material.extensions)delete material.extensions.KHR_materials_clearcoat;
   }
   for(const key of ['extensionsUsed','extensionsRequired'])if(tree[key])tree[key]=tree[key].filter(x=>x!=='KHR_materials_clearcoat');
  }
  tree.asset ||= {version:'2.0'};tree.asset.extras={...tree.asset.extras,colourVersion:VERSION,saturation:FACTOR,materialFinish:FINISH};tree.buffers[0].byteLength=binary.length;
  const json=encoder.encode(JSON.stringify(tree)),jsonSize=(json.length+3)&~3,binSize=(binary.length+3)&~3,out=new ArrayBuffer(28+jsonSize+binSize),o=new DataView(out),bytes=new Uint8Array(out);
  o.setUint32(0,0x46546c67,true);o.setUint32(4,2,true);o.setUint32(8,out.byteLength,true);o.setUint32(12,jsonSize,true);o.setUint32(16,0x4e4f534a,true);bytes.fill(32,20,20+jsonSize);bytes.set(json,20);o.setUint32(20+jsonSize,binSize,true);o.setUint32(24+jsonSize,0x004e4942,true);bytes.set(binary,28+jsonSize);return new Blob([out],{type:'model/gltf-binary'});
 })();cache.set(blob,task);return task;
}
async function obj(blob){
 const value=await blob.text(),wasDeep=value.includes('# pigmentFinish tripo-depth-v1'),colourDone=value.includes('# colourVersion saturation-1.35-v1');
 if(colourDone&&!wasDeep)return blob;
 const output=value.replace(/^v\s+([-+\d.eE]+)\s+([-+\d.eE]+)\s+([-+\d.eE]+)\s+([-+\d.eE]+)\s+([-+\d.eE]+)\s+([-+\d.eE]+)(.*)$/gm,(line,x,y,z,r,g,b,tail)=>{
  const c=[+r,+g,+b];if(wasDeep){for(let j=0;j<3;j++)c[j]=Math.pow(c[j],1/1.04);const y0=c[0]*.2126+c[1]*.7152+c[2]*.0722;for(let j=0;j<3;j++)c[j]=Math.max(0,Math.min(1,y0+(c[j]-y0)/1.12));}else rgb(c);
  return 'v '+x+' '+y+' '+z+' '+c.map(v=>v.toFixed(8)).join(' ')+tail;
 }).replace('# pigmentFinish tripo-depth-v1','# pigmentFinish collage-studio-reference-v1');
 return new Blob([(colourDone?'':'# colourVersion saturation-1.35-v1\n')+output],{type:'text/plain'});
}
// Prefer the unmodified job cache when reopening an already-darkened saved model.
async function referenceSource(blob,url){
 try{const header=new DataView(await blob.slice(0,20).arrayBuffer());if(header.getUint32(0,true)!==0x46546c67)return blob;
  const tree=JSON.parse(await blob.slice(20,20+header.getUint32(12,true)).text());if(tree.asset?.extras?.pigmentFinish!=='tripo-depth-v1'||!/^assets\/generated-sculptures\/[a-f0-9]{64}\/sculpture\.glb$/.test(url||''))return blob;
  const response=await fetch(url,{cache:'no-store'});if(!response.ok)return blob;const original=await response.blob();if(await original.slice(0,4).text()!=='glTF')return blob;
  const sameGeometry=(left,right)=>{
   const unpack=raw=>{const v=new DataView(raw),n=v.getUint32(12,true);return {tree:JSON.parse(new TextDecoder().decode(raw.slice(20,20+n))),data:new Uint8Array(raw,28+n)};},a=unpack(left),b=unpack(right);
   if(JSON.stringify(a.tree.nodes)!==JSON.stringify(b.tree.nodes)||a.tree.meshes.length!==b.tree.meshes.length)return false;
   const bytes=(model,idx)=>{const x=model.tree.accessors[idx],v=model.tree.bufferViews[x.bufferView],size={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4}[x.componentType],n={SCALAR:1,VEC2:2,VEC3:3,VEC4:4}[x.type],stride=v.byteStride||size*n,base=(v.byteOffset||0)+(x.byteOffset||0),out=[];for(let i=0;i<x.count;i++)out.push(...model.data.slice(base+i*stride,base+i*stride+size*n));return out;};
   for(let i=0;i<a.tree.meshes.length;i++){const ap=a.tree.meshes[i].primitives,bp=b.tree.meshes[i].primitives;if(ap.length!==bp.length)return false;
    for(let k=0;k<ap.length;k++){if(ap[k].mode!==bp[k].mode)return false;const keys=Object.keys(ap[k].attributes).filter(key=>key!=='COLOR_0');if(ap[k].indices!==undefined)keys.push('indices');
     for(const key of keys){const ai=key==='indices'?ap[k].indices:ap[k].attributes[key],bi=key==='indices'?bp[k].indices:bp[k].attributes[key];if(bi===undefined)return false;const x=bytes(a,ai),y=bytes(b,bi);if(x.length!==y.length||x.some((v,n)=>v!==y[n]))return false;}
    }
   }return true;
  };
  return sameGeometry(await blob.arrayBuffer(),await original.arrayBuffer())?original:blob;
 }catch{return blob;}
}
window.ModelColour=Object.freeze({enhance,obj,referenceSource,version:VERSION,finish:FINISH,factor:FACTOR});
})();
