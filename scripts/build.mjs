import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('..',import.meta.url));
for(const name of ['exhibition-walk','exhibition-model-studio']){
 await build({entryPoints:[path.join(root,'src',name+'.js')],bundle:true,format:'iife',platform:'browser',target:'es2022',minify:true,outfile:path.join(root,'site',name+'.js')});
}
console.log('Both exhibition bundles built.');
