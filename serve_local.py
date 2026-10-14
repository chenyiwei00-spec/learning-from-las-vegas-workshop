"""Loopback-only website test server. Shared media are read-only; no publishing capability."""
from pathlib import Path
from http.server import ThreadingHTTPServer,BaseHTTPRequestHandler
from urllib.parse import urlsplit,unquote
import json,mimetypes,os,sys,argparse,socket,time,subprocess,urllib.request,webbrowser,threading,importlib.util,hashlib,base64,re
ROOT=Path(__file__).resolve().parent
CONFIG=json.loads((ROOT/'team_config.json').read_text(encoding='utf-8'))
settings_file=Path(os.environ.get('BW_SETTINGS_FILE',str(ROOT/'settings.local.json')))
if settings_file.is_file():CONFIG.update(json.loads(settings_file.read_text(encoding='utf-8')))
def configured_path(key,default):
 value=Path(CONFIG.get(key,default)).expanduser()
 return (value if value.is_absolute() else ROOT/value).resolve()
os.environ['BW_MODEL_ROOT']=str(configured_path('generationModelRoot','external-assets/single-photo-3d'))
if CONFIG.get('generationPython'):os.environ['BW_MODEL_PYTHON']=str(configured_path('generationPython',''))
os.environ['BW_RELEVANCE_MODEL_ROOT']=str(configured_path('relevanceModelRoot','qa/exhibition-loop/clip'))
(ROOT/'runtime').mkdir(exist_ok=True)
SITE=(ROOT/'site').resolve()
MEDIA=configured_path('readOnlyMediaRoot','external-assets/archive-assets')
SHARED=configured_path('sharedSiteAssets','external-assets/site-assets')
CUTOUTS=configured_path('cutoutRoot','external-assets/collage-objects')
ANALYSIS=configured_path('analysisRoot','external-assets/analysis')
REMOTE=CONFIG.get('remoteMediaBase','').rstrip('/')
IDENTITY='borrowed-worlds-team-collaboration'
manager_path=ROOT/'qa/sculpture-3d/job_manager.py'
spec=importlib.util.spec_from_file_location('local_sculpture_jobs',manager_path)
jobs=importlib.util.module_from_spec(spec);spec.loader.exec_module(jobs)
mimetypes.add_type('text/javascript','.js');mimetypes.add_type('model/gltf-binary','.glb');mimetypes.add_type('audio/mp4','.m4a')
ANALYSIS_LOCK=threading.Lock()
def relevance(payload):
 if not isinstance(payload,dict) or not re.fullmatch(r'[a-f0-9]{64}',str(payload.get('id',''))):return 400,{'error':'A generated local model is required.'}
 try:folder=jobs.job_path(payload['id'])
 except ValueError:return 400,{'error':'Invalid local model.'}
 if not (folder/'sculpture.glb').is_file():return 404,{'error':'Generate the model before checking resemblance.'}
 images=payload.get('images')
 if not isinstance(images,list) or not 1<=len(images)<=3:return 400,{'error':'Send one to three rendered views.'}
 for v in images:
  if not isinstance(v,str) or not v.startswith('data:image/png;base64,') or len(v)>2*1024*1024:return 400,{'error':'Invalid rendered view.'}
  try:
   d=base64.b64decode(v.split(',',1)[1],validate=True)
   if d[:8]!=b'\x89PNG\r\n\x1a\n' or max(int.from_bytes(d[16:20],'big'),int.from_bytes(d[20:24],'big'))>512:return 400,{'error':'Render views at 512 pixels or smaller.'}
  except Exception:return 400,{'error':'Invalid PNG view.'}
 identity=hashlib.sha256(json.dumps(images).encode()).hexdigest()
 output=folder/('relevance-'+identity+'.json')
 with ANALYSIS_LOCK:
  if output.is_file():return 200,json.loads(output.read_text(encoding='utf-8'))
  request=folder/('relevance-'+identity+'-input.json');request.write_text(json.dumps(payload),encoding='utf-8')
  env=os.environ.copy();env.update(HF_HUB_OFFLINE='1',TRANSFORMERS_OFFLINE='1',PYTHONUTF8='1',OMP_NUM_THREADS='2')
  log=folder/'relevance.log'
  with log.open('w',encoding='utf-8') as f:
   try:
    result=subprocess.run([str(jobs.PYTHON),str(ROOT/'qa/exhibition-loop/analyze_relevance.py'),'--input',str(request),'--output',str(output)],env=env,stdout=f,stderr=subprocess.STDOUT,timeout=150,creationflags=getattr(subprocess,'CREATE_NO_WINDOW',0))
   except subprocess.TimeoutExpired:return 503,{'error':'Visual analysis timed out. Try again.'}
  if result.returncode or not output.is_file():return 503,{'error':'Local visual analysis could not complete. See the local relevance log.'}
  return 200,json.loads(output.read_text(encoding='utf-8'))
class Handler(BaseHTTPRequestHandler):
 protocol_version='HTTP/1.1'
 def log_message(self,*args):pass
 def send_json(self,status,value):
  data=json.dumps(value).encode();self.send_response(status);self.send_header('Content-Type','application/json');self.send_header('Content-Length',str(len(data)));self.send_header('Cache-Control','no-store');self.end_headers()
  if self.command!='HEAD':self.wfile.write(data)
 def do_GET(self):self.serve()
 def do_HEAD(self):self.serve()
 def do_POST(self):
  if urlsplit(self.path).path not in ['/api/sculpture3d/jobs','/api/exhibition/relevance']:
   self.close_connection=True;return self.send_json(405,{'error':'This local endpoint does not accept writes.'})
  origin=self.headers.get('Origin')
  if origin and origin not in [f'http://127.0.0.1:{self.server.server_port}',f'http://localhost:{self.server.server_port}']:
   self.close_connection=True;return self.send_json(403,{'error':'Generation is only available to this local page.'})
  if not self.headers.get('Content-Type','').startswith('application/json'):
   self.close_connection=True;return self.send_json(415,{'error':'Send a JSON composition.'})
  try:
   length=int(self.headers.get('Content-Length','0'))
   if length<1 or length>16*1024*1024:raise ValueError('Request size is invalid.')
   self.connection.settimeout(15)
   payload=json.loads(self.rfile.read(length).decode('utf-8'))
   code,result=relevance(payload) if urlsplit(self.path).path=='/api/exhibition/relevance' else jobs.submit(payload);return self.send_json(code,result)
  except (ValueError,UnicodeError,json.JSONDecodeError) as e:return self.send_json(400,{'error':str(e)})
  except Exception:return self.send_json(500,{'error':'The local generation request could not be processed.'})
  finally:self.connection.settimeout(None)
 def proxy_media(self,rel):
  # Only the fixed archive media prefix is proxied, never arbitrary requested URLs.
  from urllib.parse import quote
  from urllib.error import HTTPError,URLError
  headers={'User-Agent':'Mozilla/5.0','Accept-Encoding':'identity'}
  if self.headers.get('Range'):headers['Range']=self.headers['Range']
  request=urllib.request.Request(REMOTE+'/'+quote(rel,safe='/'),headers=headers,method=self.command)
  try:
   with urllib.request.urlopen(request,timeout=45) as upstream:
    self.send_response(upstream.status)
    for key in ['Content-Type','Content-Length','Content-Range','Accept-Ranges','Content-Encoding']:
     value=upstream.headers.get(key)
     if value:self.send_header(key,value)
    self.send_header('Cache-Control','no-store');self.send_header('X-Content-Type-Options','nosniff')
    if not upstream.headers.get('Content-Length'):
     self.send_header('Connection','close');self.close_connection=True
    self.end_headers()
    if self.command!='HEAD':
     while True:
      block=upstream.read(256*1024)
      if not block:break
      self.wfile.write(block)
  except HTTPError as error:self.send_json(error.code,{'error':'Shared archive media is unavailable.'})
  except (URLError,TimeoutError):self.send_json(502,{'error':'Cannot reach the shared archive. Check your connection or configure a local media folder.'})
  except (BrokenPipeError,ConnectionResetError,ConnectionAbortedError):pass
 def reject_write(self):
  self.close_connection=True;self.send_json(405,{'error':'This local endpoint does not accept writes.'})
 do_PUT=reject_write;do_DELETE=reject_write;do_PATCH=reject_write
 def serve(self):
  name=unquote(urlsplit(self.path).path)
  if name=='/__team/version':
   signatures=[(p.name,p.stat().st_size,p.stat().st_mtime_ns) for p in sorted(SITE.iterdir()) if p.is_file()]
   return self.send_json(200,{'version':hashlib.sha256(json.dumps(signatures).encode()).hexdigest()})
  if name=='/api/sculpture3d/capabilities':
   return self.send_json(200,{'ready':jobs.ready(),'generator':'TripoSR','localOnly':True,'activeJob':jobs.ACTIVE})
  if name.startswith('/api/sculpture3d/jobs/'):
   try:
    record=jobs.read(name.split('/')[-1])
    return self.send_json(200,record) if record else self.send_json(404,{'error':'Generation job not found.'})
   except ValueError:return self.send_json(400,{'error':'Invalid generation job.'})
  if name=='/__local_test_status':
   return self.send_json(200,{'identity':IDENTITY,'testRoot':str(ROOT),'localOnly':True,'readOnlyMedia':True,'sourceCommit':CONFIG.get('sourceCommit','team-main')})
  if name=='/favicon.ico':name='/favicon.svg'
  if name=='/':name='/index.html'
  rel=name.lstrip('/')
  if '\\' in rel or ':' in rel or '\0' in rel or any(p in ['..','.'] or p.startswith('.') for p in rel.split('/')):
   return self.send_json(403,{'error':'Invalid path.'})
  p=(SITE/rel).resolve()
  try:p.relative_to(SITE)
  except ValueError:return self.send_json(403,{'error':'Invalid path.'})
  if rel.startswith('collage-objects/'):
   parts=rel.split('/')
   if len(parts)<4 or parts[1] not in ['architecture','advertisement','publicity','inspiration','detournement']:
    return self.send_json(403,{'error':'Invalid object path.'})
   allowed=parts[-1]=='original.jpg' or (len(parts)==6 and parts[3]=='objects' and parts[-1]=='cutout.png')
   if not allowed:return self.send_json(403,{'error':'Only image references and transparent cutouts are available.'})
   object_root=(CUTOUTS/parts[1]).resolve()
   if not object_root.is_dir():object_root=(ANALYSIS/(parts[1]+'_analysis')/'blender_handoff/items').resolve()
   p=(object_root/'/'.join(parts[2:])).resolve()
   try:p.relative_to(object_root)
   except ValueError:return self.send_json(403,{'error':'Invalid object path.'})
   if not p.is_file():
    alternate=(ANALYSIS/(parts[1]+'_analysis')/'blender_handoff/items').resolve()
    candidate=(alternate/'/'.join(parts[2:])).resolve()
    try:candidate.relative_to(alternate)
    except ValueError:return self.send_json(403,{'error':'Invalid object path.'})
    if candidate.is_file():p=candidate
  if not p.is_file() and rel.startswith('assets/'):
   shared=(SHARED/rel[len('assets/'):]).resolve()
   try:shared.relative_to(SHARED)
   except ValueError:return self.send_json(403,{'error':'Invalid shared asset path.'})
   if shared.is_file():p=shared
  if not p.is_file() and rel.startswith('assets/'):
   p=(MEDIA/rel[len('assets/'):]).resolve()
   try:p.relative_to(MEDIA)
   except ValueError:return self.send_json(403,{'error':'Invalid media path.'})
  if not p.is_file() and rel.startswith('assets/') and REMOTE:return self.proxy_media(rel)
  if not p.is_file():return self.send_json(404,{'error':'File not found. Install the collaboration asset pack for collage and exhibition assets.'})
  size=p.stat().st_size;start=0;end=size-1;partial=False
  value=self.headers.get('Range')
  if value:
   try:
    if not value.startswith('bytes=') or ',' in value:raise ValueError
    left,right=value[6:].split('-',1)
    if left:
     start=int(left);end=min(int(right),size-1) if right else size-1
    else:
     suffix=int(right)
     if suffix<=0:raise ValueError
     start=max(0,size-suffix);end=size-1
    if start<0 or start>=size or end<start:raise ValueError
    partial=True
   except ValueError:
    self.send_response(416);self.send_header('Content-Range',f'bytes */{size}');self.send_header('Content-Length','0');self.end_headers();return
  length=max(0,end-start+1)
  self.send_response(206 if partial else 200);self.send_header('Content-Type',mimetypes.guess_type(str(p))[0] or 'application/octet-stream');self.send_header('Content-Length',str(length));self.send_header('Accept-Ranges','bytes');self.send_header('Cache-Control','no-store');self.send_header('X-Content-Type-Options','nosniff')
  if partial:self.send_header('Content-Range',f'bytes {start}-{end}/{size}')
  self.end_headers()
  if self.command=='HEAD':return
  try:
   with p.open('rb') as f:
    f.seek(start);left=length
    while left:
     data=f.read(min(left,1024*1024))
     if not data:break
     self.wfile.write(data);left-=len(data)
  except (BrokenPipeError,ConnectionResetError,ConnectionAbortedError):pass
def status(port):
 try:
  with urllib.request.urlopen(f'http://127.0.0.1:{port}/__local_test_status',timeout=1) as r:obj=json.load(r)
  if obj.get('identity')==IDENTITY and obj.get('testRoot')==str(ROOT):return True
 except Exception:pass
 return False
def launch(open_browser):
 for port in range(8065,8075):
  if status(port):break
 else:
  port=None
  for candidate in range(8065,8075):
   with socket.socket() as probe:
    try:probe.bind(('127.0.0.1',candidate));port=candidate;break
    except OSError:pass
  if port is None:raise RuntimeError('No free local preview port in 8065–8074.')
  log=(ROOT/'runtime/server.log').open('a',encoding='utf-8')
  kwargs={'cwd':str(ROOT),'stdout':log,'stderr':subprocess.STDOUT}
  if os.name=='nt':kwargs['creationflags']=subprocess.CREATE_NO_WINDOW
  else:kwargs['start_new_session']=True
  subprocess.Popen([sys.executable,str(Path(__file__).resolve()),'--serve','--port',str(port)],**kwargs)
  log.close()
  for _ in range(100):
   if status(port):break
   time.sleep(.1)
  else:raise RuntimeError('Local test server did not become ready.')
 url=f'http://127.0.0.1:{port}/'
 (ROOT/'runtime/local_runtime.json').write_text(json.dumps({'url':url,'localOnly':True,'sourceCommit':CONFIG.get('sourceCommit','team-main')},indent=2),encoding='utf-8')
 if open_browser:webbrowser.open(url,new=2)
 print(url,flush=True)
parser=argparse.ArgumentParser();parser.add_argument('--serve',action='store_true');parser.add_argument('--open',action='store_true');parser.add_argument('--launch',action='store_true');parser.add_argument('--port',type=int,default=8065)
args=parser.parse_args()
if args.serve:
 server=ThreadingHTTPServer(('127.0.0.1',args.port),Handler);server.daemon_threads=True
 print(f'Local-only test preview: http://127.0.0.1:{args.port}/',flush=True);server.serve_forever()
else:launch(args.open)



