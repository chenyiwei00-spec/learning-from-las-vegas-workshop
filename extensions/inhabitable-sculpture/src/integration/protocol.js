export const PROTOCOL=1;
export const MAX_BYTES=100*1024*1024;
export function trustedMessage(event,peer,origin){
 return event.source===peer&&event.origin===origin&&event.data?.protocol===PROTOCOL;
}
export function validateImport(data){
 if(data.type!=='bw:inhabitable:import')throw Error('Unsupported message.');
 if(typeof data.requestId!=='string'||data.requestId.length>100)throw Error('Invalid request identifier.');
 if(!(data.buffer instanceof ArrayBuffer)||data.buffer.byteLength<20||data.buffer.byteLength>MAX_BYTES)throw Error('Choose a self-contained GLB smaller than 100 MB.');
 if(typeof data.name!=='string'||!data.name.trim()||data.name.length>240)throw Error('Invalid model name.');
 return data;
}
