import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import * as THREE from 'three';
import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
globalThis.FileReader=class{readAsArrayBuffer(b){b.arrayBuffer().then(result=>{this.result=result;this.onloadend?.();});}};
const window={};vm.runInNewContext(await fs.readFile('site/model-colour.js','utf8'),{window,Blob,TextEncoder,TextDecoder,Uint8Array,DataView,ArrayBuffer,WeakMap});
const finish=window.ModelColour;
const source=new THREE.Mesh(new THREE.BoxGeometry(2,4,2),new THREE.MeshStandardMaterial({color:0xcf5830,transparent:true,opacity:.7}));
const original=new Blob([await new GLTFExporter().parseAsync(source,{binary:true})]);
async function unpack(blob){const raw=await blob.arrayBuffer(),v=new DataView(raw),size=v.getUint32(12,true);return {json:JSON.parse(new TextDecoder().decode(raw.slice(20,20+size))),bin:new Uint8Array(raw.slice(28+size))};}
function pack({json,bin}){const j=new TextEncoder().encode(JSON.stringify(json)),n=(j.length+3)&~3,b=(bin.length+3)&~3,raw=new ArrayBuffer(28+n+b),v=new DataView(raw),bytes=new Uint8Array(raw);v.setUint32(0,0x46546c67,true);v.setUint32(4,2,true);v.setUint32(8,raw.byteLength,true);v.setUint32(12,n,true);v.setUint32(16,0x4e4f534a,true);bytes.fill(32,20,20+n);bytes.set(j,20);v.setUint32(20+n,b,true);v.setUint32(24+n,0x004e4942,true);bytes.set(bin,28+n);return new Blob([raw]);}
const shiny=await finish.enhance(original),a=await unpack(original),b=await unpack(shiny);
assert.deepEqual(a.bin,b.bin,'PBR finish must not change any position/index/normal/UV bytes');
assert.equal(b.json.materials[0].alphaMode,a.json.materials[0].alphaMode);
assert.equal(b.json.materials[0].pbrMetallicRoughness.baseColorFactor[3],a.json.materials[0].pbrMetallicRoughness.baseColorFactor[3]);
assert.equal(b.json.materials[0].pbrMetallicRoughness.metallicFactor,a.json.materials[0].pbrMetallicRoughness.metallicFactor);assert.equal(b.json.materials[0].pbrMetallicRoughness.roughnessFactor,a.json.materials[0].pbrMetallicRoughness.roughnessFactor);
assert.equal(await finish.enhance(shiny),shiny);
const colours=b.json.materials[0].pbrMetallicRoughness.baseColorFactor.slice();b.json.asset.extras.materialFinish='metallic-archive-v1';
b.json.materials[0].pbrMetallicRoughness.metallicFactor=.48;b.json.materials[0].pbrMetallicRoughness.roughnessFactor=.32;
b.json.materials[0].extensions={KHR_materials_clearcoat:{clearcoatFactor:.4}};
b.json.extensionsUsed=['KHR_materials_clearcoat'];

const legacy=await finish.enhance(pack(b)),c=await unpack(legacy);assert.deepEqual(c.bin,a.bin);assert.deepEqual(c.json.materials[0].pbrMetallicRoughness.baseColorFactor,colours,'Legacy saturated models must not saturate twice');
assert.equal(c.json.materials[0].pbrMetallicRoughness.metallicFactor,0);assert.equal(c.json.materials[0].pbrMetallicRoughness.roughnessFactor,1);assert(!c.json.materials[0].extensions.KHR_materials_clearcoat);assert.equal(await finish.enhance(legacy),legacy);
const group=new THREE.Group();group.userData.engine='inhabitable-v1';group.add(new THREE.Mesh(new THREE.BoxGeometry(2,.24,2),new THREE.MeshPhysicalMaterial({metalness:.96,roughness:.055})));
const space=new Blob([await new GLTFExporter().parseAsync(group,{binary:true})]);assert.equal(await finish.enhance(space),space,'Generated space materials must retain their mirror-road finish');
console.log('PASS: original GLB finish and legacy non-metal migration, unchanged geometry/UV/index/alpha, repeat/legacy colour idempotence and preserved space-road materials.');
