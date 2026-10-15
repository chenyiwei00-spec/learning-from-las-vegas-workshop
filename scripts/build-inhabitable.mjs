import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('../extensions/inhabitable-sculpture/',import.meta.url));
const env={...process.env,PATH:path.dirname(process.execPath)+path.delimiter+process.env.PATH};
const result=spawnSync(process.execPath,[path.join(root,'node_modules/vite/bin/vite.js'),'build','--configLoader','native'],{cwd:root,env,stdio:'inherit'});
process.exitCode=result.status??1;
