export const SETTINGS={spatialScale:2.6,opening:.5,separation:1.0,repetition:1,intensity:.65,moduleCount:9,density:.88,rotationVariation:.65,scaleVariation:.28,connectionStrength:.65,distortion:.50,corridorWidth:2.2,seed:42,compactness:.88,interlocking:.88,verticalComplexity:.9,fusionStrength:.7,voidDensity:.65};
export function signature(items,settings){return JSON.stringify({items:items.map(({id,asset,x,z,rotation,scale})=>({id,asset,x,z,rotation,scale})),settings});}
export class WorkspaceState{
 constructor(){this.items=[];this.settings={...SETTINGS};this.generated=null;this.history=[];this.future=[];}
 get dirty(){return !!this.generated&&this.generated.signature!==signature(this.items,this.settings);}
 snapshot(){return structuredClone({items:this.items,settings:this.settings});}
 edit(fn){const before=this.snapshot();fn(this);if(JSON.stringify(before)===JSON.stringify(this.snapshot()))return false;this.history.push(before);if(this.history.length>40)this.history.shift();this.future=[];return true;}
 undo(){if(!this.history.length)return false;this.future.push(this.snapshot());Object.assign(this,this.history.pop());return true;}
 redo(){if(!this.future.length)return false;this.history.push(this.snapshot());Object.assign(this,this.future.pop());return true;}
 generation(plan,input){this.generated={signature:signature(input.items,input.settings),input:structuredClone({items:input.items,settings:input.settings}),plan};}
 save(){return {format:'borrowed-worlds-model-architecture',version:1,...this.snapshot(),generated:this.generated?{input:this.generated.input}:null};}
}
export function validateComposition(doc,assets){
 if(doc?.format!=='borrowed-worlds-model-architecture'||doc.version!==1)throw Error('Choose a composition saved by the model transformation workspace.');
 const check=input=>{if(!input||!Array.isArray(input.items)||input.items.length>12)throw Error('Choose a composition with up to twelve casts.');const s=input.settings;for(const [key,min,max] of [['spatialScale',1.8,3.4],['opening',.2,.85],['separation',0,2.5],['repetition',1,3],['intensity',.2,1]])if(!Number.isFinite(s?.[key])||s[key]<min||s[key]>max)throw Error('A transformation setting is outside its limits.');if(!Number.isInteger(s.repetition))throw Error('Invalid repetition count.');const ids=new Set();for(const i of input.items){if(typeof i.id!=='string'||ids.has(i.id)||!assets.includes(i.asset)||!['x','z','rotation','scale'].every(k=>Number.isFinite(i[k]))||Math.abs(i.x)>18||Math.abs(i.z)>18||Math.abs(i.rotation)>2*Math.PI||i.scale<.5||i.scale>1.4)throw Error('A source cast has invalid placement or size.');ids.add(i.id);}};
 const value=structuredClone(doc);value.settings={...SETTINGS,...value.settings};if(value.generated)value.generated.input.settings={...SETTINGS,...value.generated.input.settings};
 const aggregation=input=>{for(const [key,min,max] of [['moduleCount',1,12],['density',.25,1],['rotationVariation',0,1],['scaleVariation',0,.45],['connectionStrength',0,1],['distortion',0,1],['corridorWidth',1.8,3.2],['seed',0,999999],['compactness',0,1],['interlocking',0,1],['verticalComplexity',0,1],['fusionStrength',0,1],['voidDensity',.2,.85]])if(!Number.isFinite(input.settings[key])||input.settings[key]<min||input.settings[key]>max)throw Error('An aggregation setting is outside its limits.');if(!Number.isInteger(input.settings.seed)||!Number.isInteger(input.settings.moduleCount))throw Error('Module count and seed must be whole numbers.');};
 check(value);aggregation(value);if(value.generated){check(value.generated.input);aggregation(value.generated.input);}return value;
}
