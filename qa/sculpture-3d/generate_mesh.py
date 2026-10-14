"""Official locally installed TripoSR: a paired photographic collage becomes a real volumetric GLB/OBJ."""
from pathlib import Path
import argparse,json,sys,time,types,traceback,subprocess,os
p=argparse.ArgumentParser();p.add_argument('--job-dir',required=True);args=p.parse_args()
ROOT=Path(__file__).resolve().parent.parent.parent;OUTPUT=(ROOT/'site/assets/generated-sculptures').resolve();JOB=Path(args.job_dir).resolve();JOB.relative_to(OUTPUT)
BASE=Path(os.environ['BW_MODEL_ROOT']);started=time.time()
state=json.loads((JOB/'status.json').read_text(encoding='utf-8'))
def update(phase,message,**extra):
 state.update(status='running',phase=phase,message=message,updatedAt=time.time());state.update(extra)
 temp=JOB/'status-writing.tmp';temp.write_text(json.dumps(state),encoding='utf-8');temp.replace(JOB/'status.json');print(message,flush=True)
try:
 update('preparing','Preparing your sculpture fragments…')
 import numpy as np,torch,trimesh
 from PIL import Image
 from skimage.measure import marching_cubes as sk_mc
 torch.set_num_threads(4);torch.manual_seed(7);np.random.seed(7)
 if not torch.cuda.is_available():raise RuntimeError('A CUDA GPU is required for the local 3D generator.')
 sys.path.insert(0,str(BASE/'TripoSR'))
 adapter=types.ModuleType('torchmcubes')
 def marching_cubes(level,threshold):
  arr=np.ascontiguousarray(level.detach().cpu().numpy(),dtype=np.float32)
  v,f,n,value=sk_mc(arr,level=threshold,gradient_direction='descent',allow_degenerate=False)
  return torch.from_numpy(np.ascontiguousarray(v[:,[2,1,0]])),torch.from_numpy(f.astype(np.int64))
 adapter.marching_cubes=marching_cubes;sys.modules['torchmcubes']=adapter
 from tsr.system import TSR
 import tsr.models.tokenizers.image as tokenizer
 tokenizer.hf_hub_download=lambda **kwargs:str(BASE/'weights/dino-config.json')
 # Use the actual RGBA composition, centre its foreground, and follow official neutral-grey preprocessing.
 source=Image.open(JOB/'source.png').convert('RGBA')
 if source.size!=(1600,1000):raise RuntimeError('Invalid composition dimensions.')
 box=source.getchannel('A').getbbox()
 if not box:raise RuntimeError('Your sculpture has no visible fragments. Restore or add a fragment.')
 crop=source.crop(box);crop.thumbnail((870,870),Image.Resampling.LANCZOS)
 ratio=.85*1024/max(crop.size);crop=crop.resize((max(1,round(crop.width*ratio)),max(1,round(crop.height*ratio))),Image.Resampling.LANCZOS)
 square=Image.new('RGBA',(1024,1024),(0,0,0,0));square.alpha_composite(crop,((1024-crop.width)//2,(1024-crop.height)//2))
 background=Image.new('RGBA',square.size,(128,128,128,255));background.alpha_composite(square);model_input=background.convert('RGB');model_input.save(JOB/'model_input.png')
 update('loading','Loading the local image-to-3D model…')
 model=TSR.from_pretrained(str(BASE/'weights'),config_name='config.yaml',weight_name='model.ckpt').eval()
 model.renderer.set_chunk_size(4096);model.to('cuda:0')
 update('predicting','Inferring the sculpture volume and unseen surfaces…')
 with torch.inference_mode():codes=model([model_input],device='cuda:0')
 torch.cuda.synchronize();resolution=256
 update('meshing','Building the triangle mesh and its colours…')
 try:
  with torch.inference_mode():mesh=model.extract_mesh(codes,has_vertex_color=True,resolution=resolution)[0]
 except torch.cuda.OutOfMemoryError:
  torch.cuda.empty_cache();resolution=192
  update('meshing','Building the mesh at a resolution suited to available GPU memory…')
  with torch.inference_mode():mesh=model.extract_mesh(codes,has_vertex_color=True,resolution=resolution)[0]
 original_faces=len(mesh.faces);components=mesh.split(only_watertight=False)
 if components:
  largest=max(len(m.faces) for m in components);kept=[m for m in components if len(m.faces)>=max(16,int(largest*.0001))];mesh=trimesh.util.concatenate(kept)
 else:kept=[]
 mesh.fix_normals(multibody=True)
 if not np.isfinite(mesh.vertices).all() or len(mesh.faces)<300:raise RuntimeError('The generator did not produce a usable sculpture mesh. Try a more compact composition.')
 extents=mesh.extents
 if min(extents)<=.0001:raise RuntimeError('The generated geometry has no usable volume.')
 update('exporting','Saving the GLB and checking the generated geometry…')
 from colour_tools import saturate_mesh,preserve_front_colour,linear_vertex_colours
 saturate_mesh(mesh)
 composition=json.loads((JOB/'composition.json').read_text(encoding='utf-8'))
 colour_projection=preserve_front_colour(mesh,square) if composition.get('workspace')=='exhibition-model-loop-v1' else None
 mesh.metadata={'generator':'TripoSR','source':'Linked V&A photographic collage','geometryStatus':'AI inferred volume; unseen surfaces synthesised; illustrative scale'}
 mesh.export(JOB/'sculpture.obj')
 obj=JOB/'sculpture.obj';obj.write_text('# colourVersion saturation-1.35-v1\n'+obj.read_text(),encoding='utf-8')
 converted=mesh.copy();transform=np.eye(4);transform[:3,:3]=[[0,1,0],[0,0,1],[1,0,0]];converted.apply_transform(transform)
 if colour_projection:linear_vertex_colours(converted)
 # Standard lit vertex-colour material makes the real volume readable while orbiting.
 from trimesh.exchange.gltf import export_glb
 def material(tree):
  tree.setdefault('asset',{}).setdefault('extras',{}).update(colourVersion='saturation-1.35-v1',saturation=1.35,vertexColourSpace='linear' if colour_projection else 'legacy',colourProjection=colour_projection)
  if not tree.get('materials'):
   tree['materials']=[{'name':'Inferred sculpture colour','doubleSided':True,'pbrMetallicRoughness':{'baseColorFactor':[1,1,1,1],'metallicFactor':0,'roughnessFactor':.85}}]
   for m in tree['meshes']:
    for primitive in m['primitives']:primitive['material']=0
  else:
   for m in tree['materials']:m.setdefault('pbrMetallicRoughness',{}).update(metallicFactor=0,roughnessFactor=.85)
 (JOB/'sculpture.glb').write_bytes(export_glb(trimesh.Scene(converted),include_normals=True,tree_postprocessor=material))
 reloaded=trimesh.load(JOB/'sculpture.glb',force='mesh',process=False)
 if len(reloaded.faces)!=len(converted.faces) or not np.allclose(reloaded.bounds,converted.bounds,atol=1e-5):raise RuntimeError('Exported mesh geometry did not validate.')
 prefix='assets/generated-sculptures/'+JOB.name+'/'
 report={'generator':'Official TripoSR','modelRoot':str(BASE),'sourceCodeCommit':subprocess.check_output(['git','-C',str(BASE/'TripoSR'),'rev-parse','HEAD'],text=True).strip(),'checkpointBytes':(BASE/'weights/model.ckpt').stat().st_size,'gridResolution':resolution,'vertices':len(mesh.vertices),'triangles':len(mesh.faces),'originalTriangles':original_faces,'connectedComponents':len(kept),'extentsObjZup':extents.tolist(),'extentsGlbYup':converted.extents.tolist(),'thicknessRatio':float(min(extents)/max(extents)),'watertight':bool(mesh.is_watertight),'seconds':round(time.time()-started,1),'gpuPeakGiB':round(torch.cuda.max_memory_allocated()/2**30,2),'realVolumetricMesh':True,'saturationFactor':1.35,'colourVersion':'saturation-1.35-v1','colourProjection':colour_projection,'vertexColourSpace':'linear' if colour_projection else 'legacy','localOnly':True,'limitations':['AI infers back surfaces and anatomical connections from a single collage.','Fine details and exact fragment boundaries may change.','Scale is illustrative, not measured.'],'sourceComposition':'composition.json'}
 (JOB/'generation_report.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
 update('complete','Your 3D sculpture is ready.',status='complete',modelUrl=prefix+'sculpture.glb',objUrl=prefix+'sculpture.obj',reportUrl=prefix+'generation_report.json',vertices=report['vertices'],triangles=report['triangles'],seconds=report['seconds'],completedAt=time.time())
except Exception as e:
 traceback.print_exc()
 update('failed',str(e)[:450],status='failed')
 sys.exit(1)

