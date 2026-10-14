import {SculptureViewer} from '../viewer/SculptureViewer.js';
import {ModelRepository} from './ModelRepository.js';
import {createModelLoader} from './loaders.js';

/** Framework-independent entry point for a future Collage/Tripo3D adapter. */
export async function createSpatialEngine({container,models=[],assetBase='./'}){
 const events=new EventTarget(),viewer=new SculptureViewer(container),decoder=createModelLoader(viewer.renderer,assetBase);
 const repository=new ModelRepository({models,loader:decoder.loader});let ticket=0,current=null;
 await repository.initialize();
 async function selectModel(id){
  const own=++ticket,loaded=await repository.load(id);if(own!==ticket)return null;
  viewer.setModel(loaded);current=loaded;
  events.dispatchEvent(new CustomEvent('model-selected',{detail:{id,metadata:loaded.metadata,scene:loaded.scene}}));return loaded;
 }
 return {viewer,repository,events,selectModel,importGLB:async file=>{const entry=await repository.importFile(file);await selectModel(entry.id);return entry;},getCurrent:()=>current,getState:()=>({currentId:current?.entry.id||null,modelCount:repository.list().length,viewer:viewer.getState()}),async dispose(){ticket++;viewer.dispose();await repository.dispose();decoder.dispose();}};
}
