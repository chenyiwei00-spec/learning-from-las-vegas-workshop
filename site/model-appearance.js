/* Non-destructive GLB finish variants; exports retain the source mesh. */
(()=>{
'use strict';
function variant(buffer,mode){
 const dv=new DataView(buffer);if(dv.getUint32(0,true)!==0x46546c67||dv.getUint32(4,true)!==2)throw Error('Invalid GLB preview.');
 const chunks=[];let tree;
 for(let p=12;p<buffer.byteLength;){const n=dv.getUint32(p,true),type=dv.getUint32(p+4,true),data=new Uint8Array(buffer,p+8,n);if(type===0x4e4f534a)tree=JSON.parse(new TextDecoder().decode(data));else chunks.push({type,data});p+=8+n;}
 if(mode!=='collage'){
  for(const mesh of tree.meshes||[])for(const primitive of mesh.primitives){delete primitive.attributes.COLOR_0;primitive.material=0;}
  tree.materials=[{name:mode==='metal'?'Brushed metal preview':'White clay preview',doubleSided:true,pbrMetallicRoughness:{baseColorFactor:mode==='metal'?[.72,.74,.77,1]:[.93,.92,.89,1],metallicFactor:mode==='metal'?1:0,roughnessFactor:mode==='metal'?.26:.88}}];
 }
 const json=new TextEncoder().encode(JSON.stringify(tree)),padded=new Uint8Array(Math.ceil(json.length/4)*4);padded.fill(32);padded.set(json);const bytes=12+8+padded.length+chunks.reduce((n,c)=>n+8+c.data.length,0),out=new Uint8Array(bytes),header=new DataView(out.buffer);
 header.setUint32(0,0x46546c67,true);header.setUint32(4,2,true);header.setUint32(8,bytes,true);let offset=12;
 for(const c of [{type:0x4e4f534a,data:padded},...chunks]){header.setUint32(offset,c.data.length,true);header.setUint32(offset+4,c.type,true);out.set(c.data,offset+8);offset+=8+c.data.length;}
 return new Blob([out],{type:'model/gltf-binary'});
}
function attach(viewer,{onLoading,onError}={}){
 const $=id=>document.getElementById(id);let buffer=null,url=null,ticket=0,isSwitch=false;
 function lighting(){const kind=$('model-light').value;viewer.environmentImage=kind==='contrast'?'assets/studio-light.png':'neutral';viewer.exposure=Number($('model-exposure').value);viewer.shadowIntensity=$('model-shadow').checked?(kind==='contrast'?1:kind==='flat'?.25:.65):0;viewer.shadowSoftness=kind==='contrast'?.25:1;viewer.toneMapping=kind==='contrast'?'aces':'neutral';}
 function select(mode,switched=true){if(!buffer)return;const old=url;isSwitch=switched;url=URL.createObjectURL(variant(buffer,mode));onLoading?.();viewer.src=url;if(old)setTimeout(()=>URL.revokeObjectURL(old),3000);}
 $('model-material').addEventListener('change',()=>select($('model-material').value));
 for(const id of ['model-light','model-shadow','model-exposure'])$(id).addEventListener('input',lighting);
 lighting();
 return {
  async load(input){const run=++ticket;try{const blob=input instanceof Blob?input:await fetch(input,{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Model file could not load.');return r.blob();});const bytes=await blob.arrayBuffer();if(run!==ticket)return;buffer=bytes;select($('model-material').value,false);lighting();}catch(e){if(run===ticket)onError?.(e);}},
  owns:()=>viewer.src===url,isVariant:()=>isSwitch,
  clear(){ticket++;buffer=null;if(url)URL.revokeObjectURL(url);url=null;},
  settings:()=>({material:$('model-material').value,light:$('model-light').value,shadow:$('model-shadow').checked,exposure:Number($('model-exposure').value)}),
  set(settings={}){for(const [key,id]of [['material','model-material'],['light','model-light'],['exposure','model-exposure']])if(settings[key]!==undefined)$(id).value=settings[key];if(settings.shadow!==undefined)$('model-shadow').checked=settings.shadow;lighting();}
 };
}
window.ModelAppearance=Object.freeze({attach,variant});
})();
