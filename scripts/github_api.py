"""GitHub credentials stay in memory; never write or print a token."""
import os,subprocess,json,urllib.request,urllib.error,shutil
API='https://api.github.com'
class NoRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,*args,**kwargs):return None
def credential(username=None):
 if username is None and shutil.which('gh'):
  result=subprocess.run(['gh','auth','token','--hostname','github.com'],capture_output=True,text=True,timeout=30)
  if result.returncode==0 and result.stdout.strip():return result.stdout.strip()
 fields='protocol=https\nhost=github.com\n'+('username='+username+'\n' if username else '')+'\n'
 proc=subprocess.run(['git','credential','fill'],input=fields,capture_output=True,text=True,encoding='utf-8',timeout=120,env={**os.environ,'GIT_TRACE':'0','GIT_TRACE_CURL':'0','GCM_TRACE':'0'})
 if proc.returncode:raise RuntimeError('GitHub login unavailable. Use gh auth login or git credential-manager github login --browser first.')
 data=dict(line.split('=',1) for line in proc.stdout.splitlines() if '=' in line)
 if not data.get('password'):raise RuntimeError('GitHub credential missing.')
 return data['password']
def request(token,path,method='GET',data=None):
 url=path if path.startswith('https://') else API+path
 if not url.startswith(API+'/'):raise ValueError('API host rejected.')
 headers={'Authorization':'Bearer '+token,'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2026-03-10','User-Agent':'LearningFromLasVegasTeam'}
 body=json.dumps(data).encode() if data is not None else None
 if body is not None:headers['Content-Type']='application/json'
 try:
  with urllib.request.urlopen(urllib.request.Request(url,data=body,headers=headers,method=method),timeout=90) as r:return json.load(r) if r.status!=204 else {}
 except urllib.error.HTTPError as e:
  try:detail=json.load(e).get('message','')
  except Exception:detail=''
  raise RuntimeError('GitHub API '+str(e.code)+': '+detail) from None
def asset_stream(token,asset_id):
 # Private assets redirect to a signed storage URL. Never forward the GitHub token there.
 req=urllib.request.Request(API+'/repos/'+repository_name()+'/releases/assets/'+str(asset_id),headers={'Authorization':'Bearer '+token,'Accept':'application/octet-stream','X-GitHub-Api-Version':'2026-03-10','User-Agent':'LearningFromLasVegasTeam'})
 opener=urllib.request.build_opener(NoRedirect)
 try:return opener.open(req,timeout=120)
 except urllib.error.HTTPError as e:
  if e.code not in (301,302,303,307,308):raise RuntimeError('Asset download failed: HTTP '+str(e.code)) from None
  url=e.headers.get('Location','')
  if not url.startswith('https://'):raise RuntimeError('Unsafe asset redirect.')
  return urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'LearningFromLasVegasTeam'}),timeout=120)
def repository_name():
 from pathlib import Path
 return json.loads((Path(__file__).resolve().parent.parent/'repository.json').read_text(encoding='utf-8'))['full_name']

