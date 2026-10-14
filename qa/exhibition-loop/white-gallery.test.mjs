import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {environmentState, validDescriptor, modelFactory} from '../../src/exhibition-composition.js';

const source={name:'Golden Nugget',previewUrl:'assets/exhibition-desert/models/sign_01_preview.glb',original:true};
const part=(position=[1,2,3])=>({descriptor:source,position,quaternion:[0,0,Math.SQRT1_2,Math.SQRT1_2],scale:[.675,.675,.675]});
test('a fresh exhibition stays white and changes only through visitor placements',()=>{
 assert.equal(environmentState(Array.from({length:7},()=>source)).amount,0);
 const placed={...source,original:false,palette:'#c08040',relevance:0};
 const state=environmentState([source,placed]);
 assert.equal(state.changed,1);assert.equal(state.amount,1/7);
 assert.equal(state.palette,'#c08040');
 assert.equal(environmentState([{...placed,relevance:1}]).amount,state.amount);
 assert.equal(environmentState(Array.from({length:20},()=>placed)).amount,1);
});
test('composition validation rejects remote models, nonfinite transforms and runaway nesting',()=>{
 assert.equal(validDescriptor({...source,previewUrl:'https://example.com/model.glb'}),false);
 assert.equal(validDescriptor({name:'Art',kind:'composition',parts:[part()]}),true);
 assert.equal(validDescriptor({name:'Art',kind:'composition',parts:[part([Infinity,0,0])]}),false);
 assert.equal(validDescriptor({name:'Art',kind:'composition',parts:[{...part(),quaternion:[0,0,0,0]}]}),false);
 assert.equal(validDescriptor({name:'Art',kind:'composition',parts:[]}),false);
 let nested=source;for(let i=0;i<8;i++)nested={name:'Nested',kind:'composition',parts:[{...part(),descriptor:nested}]};
 assert.equal(validDescriptor(nested),false);
});
test('installing a composition preserves its model positions, proportions and rotation',async()=>{
 const model=new THREE.Group();model.add(new THREE.Mesh(new THREE.BoxGeometry(2,4,2),new THREE.MeshStandardMaterial()));
 const factory=modelFactory({loadAsync:async()=>({scene:model})});
 const composition={name:'Visitor work',kind:'composition',parts:[part()]};
 const object=await factory.raw(composition),box=new THREE.Box3().setFromObject(object);
 for(const [value,expected] of box.min.toArray().map((v,i)=>[v,[-.35,1.325,2.325][i]]))assert.ok(Math.abs(value-expected)<1e-6);
 for(const [value,expected] of box.max.toArray().map((v,i)=>[v,[2.35,2.675,3.675][i]]))assert.ok(Math.abs(value-expected)<1e-6);
 const second=await factory.raw(composition);
 assert.notEqual(object.children[0].children[0].children[0].geometry,second.children[0].children[0].children[0].geometry);
});
