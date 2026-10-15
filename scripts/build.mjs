import {build} from 'esbuild';
import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('..',import.meta.url));
for(const name of ['exhibition-walk','exhibition-model-studio']){
 await build({entryPoints:[path.join(root,'src',name+'.js')],bundle:true,format:'iife',platform:'browser',target:'es2022',minify:true,outfile:path.join(root,'site',name+'.js')});
}
// Vendor shader strings contain mixed tabs/spaces. Normalise indentation in emitted
// bundles without changing shader tokens, so generated files pass whitespace checks.
for(const name of ['exhibition-walk']){
 const file=path.join(root,'site',name+'.js'),source=await readFile(file,'utf8');
 await writeFile(file,source.replace(/^[ \t]+/gm,line=>line.replace(/\t/g,'  ')).replace(/[ \t]+$/gm,''));
}
console.log('Both exhibition bundles built.');

await build({entryPoints:[path.join(root,"src/inhabitable/form-worker.js")],bundle:true,format:"iife",platform:"browser",target:"es2022",minify:true,outfile:path.join(root,"site/exhibition-space-worker.js")});
