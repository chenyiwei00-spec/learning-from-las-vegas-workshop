import {analyzeGeometry} from './analyzeGeometry.js';
self.onmessage=({data})=>{try{self.postMessage({id:data.id,result:analyzeGeometry(data.geometry)});}catch(error){self.postMessage({id:data.id,error:error.message});}};
