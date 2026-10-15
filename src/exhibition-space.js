/* Replacement seam: an external engine takes priority; the inhabitable engine is the default. */
import {createInhabitableSpace} from './exhibition-inhabitable.js';
export const SPACE_ENGINE_API_VERSION=1;
export function createExhibitionSpace(context){
 const provider=globalThis.ExhibitionSpaceEngine;
 if(provider&&provider.apiVersion!==SPACE_ENGINE_API_VERSION)throw Error('Unsupported exhibition space engine API version.');
 const engine=provider?provider.create(context):createInhabitableSpace(context);
 for(const name of ['generate','enter','showOriginal','showSpace','constrain','collisionMeshes','exportGLB','state','dispose']){
  if(typeof engine?.[name]!=='function')throw Error('Exhibition space engine must implement '+name+'().');
 }
 if(!engine.ready||typeof engine.ready.then!=='function')throw Error('Exhibition space engine must expose a ready promise.');
 return engine;
}
