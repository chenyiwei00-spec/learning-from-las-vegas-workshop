import {defineConfig} from 'vite';
import {fileURLToPath} from 'node:url';
import {readFile} from 'node:fs/promises';

const root=fileURLToPath(new URL('.',import.meta.url));
const models=[]; // Models arrive through the library/file bridge; never bundle private GLBs.
const assets=new Map(models.map(name=>[name,{url:new URL(name,import.meta.url),type:'model/gltf-binary'}]));
for(const name of ['DM-Sans-OFL.txt','Manrope-OFL.txt'])assets.set('licenses/'+name,{url:new URL('src/assets/fonts/'+name,import.meta.url),type:'text/plain'});
for(const [folder,names] of [['draco/gltf',['draco_wasm_wrapper.js','draco_decoder.wasm']],['basis',['basis_transcoder.js','basis_transcoder.wasm']]])for(const name of names){
 const target='decoders/'+(folder.startsWith('draco')?'draco/':'basis/')+name;
 assets.set(target,{url:new URL('node_modules/three/examples/jsm/libs/'+folder+'/'+name,import.meta.url),type:name.endsWith('.wasm')?'application/wasm':'text/javascript'});
}
// Serve original files read-only in development and emit byte-identical build copies.
function originalModels(){
 return {
  name:'original-sculptures',
  configureServer(server){server.middlewares.use(async(req,res,next)=>{
   let name;try{name=decodeURIComponent((req.url||'').split('?')[0]).slice(1);}catch{return next();}
   const asset=assets.get(name);if(!asset)return next();
   if(!['GET','HEAD'].includes(req.method)){res.statusCode=405;return res.end();}
   try{const bytes=await readFile(asset.url);res.setHeader('Content-Type',asset.type);res.setHeader('Content-Length',bytes.length);res.end(req.method==='HEAD'?undefined:bytes);}catch{res.statusCode=404;res.end('Asset unavailable');}
  });},
  async generateBundle(){for(const [name,asset] of assets)this.emitFile({type:'asset',fileName:name,source:await readFile(asset.url)});}
 };
}
export default defineConfig({root,base:'./',publicDir:false,plugins:[originalModels()],server:{host:'127.0.0.1',port:5173,strictPort:true,fs:{allow:[root]}},preview:{host:'127.0.0.1',port:4173,strictPort:true},build:{outDir:'../../site/inhabitable-sculpture',emptyOutDir:true,chunkSizeWarningLimit:900}});
