import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {readFile} from 'node:fs/promises';
import {createRequire} from 'node:module';
const root=fileURLToPath(new URL('..',import.meta.url));
// Some Windows workspaces allow file reads but not ancestor-directory listing.
// Let Node resolve/read the same project files without esbuild walking parents.
const nodeFiles={name:'node-file-access',setup(builder){
 builder.onResolve({filter:/.*/},args=>{
  let resolved;
  if(args.kind==='entry-point')resolved=path.resolve(root,args.path);
  else if(args.path==='three')resolved=path.join(root,'node_modules/three/build/three.module.js');
  else resolved=createRequire(args.importer).resolve(args.path);
  return {path:resolved,namespace:'project-js'};
 });
 builder.onLoad({filter:/.*/,namespace:'project-js'},async args=>({contents:await readFile(args.path,'utf8'),loader:'js',resolveDir:path.dirname(args.path)}));
}};
for(const name of ['exhibition-walk','exhibition-model-studio']){
 await build({absWorkingDir:root,tsconfigRaw:{},plugins:process.platform==='win32'?[nodeFiles]:[],entryPoints:[path.join(root,'src',name+'.js')],bundle:true,format:'iife',platform:'browser',target:'es2022',minify:true,outfile:path.join(root,'site',name+'.js')});
}
console.log('Both exhibition bundles built.');
