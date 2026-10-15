"""Loopback-only bounded generation jobs. Inputs and meshes stay inside the independent test."""
from pathlib import Path
import json,base64,hashlib,threading,subprocess,os,time,re
ROOT=Path(__file__).resolve().parent.parent.parent
OUTPUT=(ROOT/'site/assets/generated-sculptures').resolve()
MODELROOT=Path(os.environ.get('BW_MODEL_ROOT',str(ROOT/'external-assets/single-photo-3d'))).expanduser().resolve()
PYTHON=Path(os.environ.get('BW_MODEL_PYTHON',str(MODELROOT/('venv/Scripts/python.exe' if os.name=='nt' else 'venv/bin/python'))))
LOCK=threading.Lock();ACTIVE=None;PROCESS=None
def ready():
 return PYTHON.is_file() and (MODELROOT/'weights/model.ckpt').is_file() and (MODELROOT/'TripoSR/tsr/system.py').is_file()
def job_path(job):
 if not re.fullmatch(r'[a-f0-9]{64}',str(job)):raise ValueError('Invalid generation identifier.')
 p=(OUTPUT/job).resolve();p.relative_to(OUTPUT);return p
def read(job):
 p=job_path(job)/'status.json'
 if not p.is_file():return None
 return json.loads(p.read_text(encoding='utf-8'))
def completed():
 rows=[]
 for path in sorted(OUTPUT.glob('*/status.json'),key=lambda p:p.stat().st_mtime,reverse=True)[:100]:
  try:
   state=json.loads(path.read_text(encoding='utf-8'))
   if state.get('status')!='complete' or not (path.parent/'sculpture.glb').is_file():continue
   composition=json.loads((path.parent/'composition.json').read_text(encoding='utf-8'))
   state['target']=composition.get('modelTarget','sculpture')
   state['title']=composition.get('agentPlan',{}).get('title','Recovered model')
   rows.append(state)
  except (OSError,ValueError,KeyError):continue
 return rows

def write(folder,value):
 value['updatedAt']=time.time();temp=folder/'status-writing.tmp';temp.write_text(json.dumps(value),encoding='utf-8');temp.replace(folder/'status.json')
def supervise(process,folder,log):
 global ACTIVE,PROCESS
 try:
  elapsed=0;last=time.monotonic()
  while process.poll() is None:
   time.sleep(1);now=time.monotonic();gap=now-last;last=now
   if gap<10:elapsed+=gap
   if elapsed>480:process.kill();process.wait();break
  code=process.returncode
  state=read(folder.name) or {}
  if state.get('status') not in ['complete','failed']:
   write(folder,{**state,'status':'failed','phase':'failed','message':'The 3D generator stopped before producing a valid mesh. See the local generation log.','exitCode':code})
 finally:
  log.close()
  with LOCK:
   if PROCESS is process:ACTIVE=None;PROCESS=None
def submit(payload):
 global ACTIVE,PROCESS
 if not ready():return 503,{'error':'Local TripoSR installation or weights are unavailable.'}
 if not isinstance(payload,dict):return 400,{'error':'Invalid generation request.'}
 image=payload.get('image','');fingerprint=payload.get('fingerprint','')
 if not isinstance(image,str) or not image.startswith('data:image/png;base64,') or not re.fullmatch(r'[a-f0-9]{64}',str(fingerprint)):return 400,{'error':'Send a transparent sculpture PNG and a composition fingerprint.'}
 try:data=base64.b64decode(image.split(',',1)[1],validate=True)
 except Exception:return 400,{'error':'Invalid PNG data.'}
 if len(data)>10*1024*1024 or data[:8]!=b'\x89PNG\r\n\x1a\n':return 400,{'error':'Invalid or oversized sculpture PNG.'}
 if len(data)<24 or int.from_bytes(data[16:20],'big')!=1600 or int.from_bytes(data[20:24],'big')!=1000:return 400,{'error':'The sculpture image must be 1600 x 1000 pixels.'}
 composition=payload.get('composition')
 if not isinstance(composition,dict) or not isinstance(composition.get('layers'),list) or not 1<=len(composition['layers'])<=40:return 400,{'error':'Compose between one and forty fragments first.'}
 job=hashlib.sha256(b'paired-triposr-v3-photo-colour-linear-recipe'+data+fingerprint.encode('ascii')).hexdigest();folder=job_path(job)
 with LOCK:
  existing=read(job)
  if existing and existing.get('status')=='complete' and (folder/'sculpture.glb').is_file():return 200,existing
  if PROCESS is not None and PROCESS.poll() is None:
   if ACTIVE==job:return 202,existing or {'id':job,'status':'running'}
   return 409,{'error':'Another sculpture is still generating. Please wait for it to finish.','activeJob':ACTIVE}
  if existing and existing.get('status') not in ['complete','failed'] and time.time()-existing.get('updatedAt',0)<510:
   return 202,existing
  folder.mkdir(parents=True,exist_ok=True)
  (folder/'source.png').write_bytes(data)
  (folder/'composition.json').write_text(json.dumps(composition,ensure_ascii=False,indent=2),encoding='utf-8')
  state={'id':job,'status':'queued','phase':'starting','message':'Starting the local 3D generator…','fingerprint':fingerprint,'startedAt':time.time(),'generator':'TripoSR','localOnly':True}
  write(folder,state);log=(folder/'generation.log').open('w',encoding='utf-8')
  env=os.environ.copy();env.update(HF_HUB_OFFLINE='1',TRANSFORMERS_OFFLINE='1',PYTHONUTF8='1',PYTHONUNBUFFERED='1')
  flags=subprocess.CREATE_NO_WINDOW if os.name=='nt' else 0
  try:process=subprocess.Popen([str(PYTHON),str(Path(__file__).parent/'generate_mesh.py'),'--job-dir',str(folder)],cwd=str(ROOT),stdout=log,stderr=subprocess.STDOUT,env=env,creationflags=flags)
  except Exception as e:
   log.close();write(folder,{**state,'status':'failed','phase':'failed','message':str(e)});return 503,{'error':'The local generator could not start.'}
  ACTIVE=job;PROCESS=process
  threading.Thread(target=supervise,args=(process,folder,log),daemon=True).start()
 return 202,state

