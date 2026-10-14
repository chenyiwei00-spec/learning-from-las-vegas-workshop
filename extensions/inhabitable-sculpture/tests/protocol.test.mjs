import test from 'node:test';
import assert from 'node:assert/strict';
import {PROTOCOL,MAX_BYTES,trustedMessage,validateImport} from '../src/integration/protocol.js';
test('handoff requires the exact parent window, origin and protocol',()=>{
 const peer={},origin='http://127.0.0.1:8066',event={source:peer,origin,data:{protocol:PROTOCOL}};
 assert.ok(trustedMessage(event,peer,origin));
 assert.equal(trustedMessage({...event,source:{}},peer,origin),false);
 assert.equal(trustedMessage({...event,origin:'https://other.example'},peer,origin),false);
 assert.equal(trustedMessage({...event,data:{protocol:2}},peer,origin),false);
});
test('handoff validates bounded binary input and metadata before GLB parsing',()=>{
 const request={type:'bw:inhabitable:import',requestId:'test-1',name:'Sculpture',buffer:new ArrayBuffer(28)};
 assert.equal(validateImport(request),request);
 for(const change of [{type:'other'},{requestId:123},{name:''},{name:'x'.repeat(241)},{buffer:'url'},{buffer:new ArrayBuffer(2)},{buffer:new ArrayBuffer(MAX_BYTES+1)}])assert.throws(()=>validateImport({...request,...change}));
});
