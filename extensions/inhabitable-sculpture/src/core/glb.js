export const MAX_MODEL_BYTES=100*1024*1024;
export function inspectGLB(input){
 const bytes=input instanceof Uint8Array?input:new Uint8Array(input);
 if(bytes.byteLength<20)throw Error('This file is too short to be a GLB model.');
 if(bytes.byteLength>MAX_MODEL_BYTES)throw Error('Choose a GLB smaller than 100 MB.');
 const view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
 if(view.getUint32(0,true)!==0x46546c67)throw Error('Not a GLB file. Choose a binary glTF (.glb) model.');
 if(view.getUint32(4,true)!==2)throw Error('Only glTF 2.0 GLB models are supported.');
 if(view.getUint32(8,true)!==bytes.byteLength)throw Error('The GLB is incomplete or its file length is invalid.');
 let offset=12,document=null,binBytes=0,chunks=0;
 while(offset<bytes.byteLength){
  if(offset+8>bytes.byteLength)throw Error('The GLB chunk header is incomplete.');
  const length=view.getUint32(offset,true),type=view.getUint32(offset+4,true);offset+=8;
  if(length%4||offset+length>bytes.byteLength)throw Error('The GLB contains an invalid chunk.');
  if(chunks===0&&type!==0x4e4f534a)throw Error('The GLB must start with a JSON chunk.');
  if(type===0x4e4f534a){if(document)throw Error('The GLB contains more than one JSON chunk.');try{document=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(bytes.subarray(offset,offset+length)).replace(/[\s\0]+$/,''));}catch{throw Error('The GLB JSON data is invalid.');}}
  if(type===0x004e4942)binBytes+=length;
  offset+=length;chunks++;
 }
 if(document?.asset?.version!=='2.0'||!document.meshes?.length)throw Error('The file has no glTF 2.0 mesh.');
 for(const key of ['buffers','images'])for(const item of document[key]||[])if(item.uri&&!item.uri.startsWith('data:'))throw Error('This GLB references external files. Export a self-contained GLB with embedded resources.');
 const embedded=(document.buffers||[]).filter(b=>!b.uri);
 if(embedded.length>1||embedded.some(b=>b.byteLength>binBytes))throw Error('The embedded model buffer is incomplete.');
 const primitives=document.meshes.flatMap(mesh=>mesh.primitives||[]),accessors=document.accessors||[];
 let vertices=0,triangles=0;
 for(const primitive of primitives){const position=accessors[primitive.attributes?.POSITION];if(!position)throw Error('A mesh is missing its position data.');vertices+=position.count;const count=primitive.indices!==undefined?accessors[primitive.indices]?.count:position.count;if(!Number.isInteger(count)||count<0)throw Error('A mesh has invalid index data.');if((primitive.mode??4)===4)triangles+=count/3;else if([5,6].includes(primitive.mode))triangles+=Math.max(0,count-2);}
 if(!vertices)throw Error('The model contains no vertices.');
 return {document,bytes:bytes.byteLength,vertices,triangles,meshes:document.meshes.length,materials:document.materials?.length||0,images:document.images?.length||0,extensions:document.extensionsRequired||[]};
}
export async function sha256(buffer){const digest=await crypto.subtle.digest('SHA-256',buffer);return [...new Uint8Array(digest)].map(v=>v.toString(16).padStart(2,'0')).join('');}
