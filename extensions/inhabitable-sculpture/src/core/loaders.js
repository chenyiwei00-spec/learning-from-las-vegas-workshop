import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js';
import {KTX2Loader} from 'three/addons/loaders/KTX2Loader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';

export function createModelLoader(renderer,base='./'){
 const draco=new DRACOLoader().setDecoderPath(base+'decoders/draco/').setDecoderConfig({type:'wasm'}).setWorkerLimit(2);
 const ktx2=new KTX2Loader().setTranscoderPath(base+'decoders/basis/').setWorkerLimit(2).detectSupport(renderer);
 const loader=new GLTFLoader().setDRACOLoader(draco).setKTX2Loader(ktx2).setMeshoptDecoder(MeshoptDecoder);
 return {loader,dispose(){draco.dispose();ktx2.dispose();}};
}
