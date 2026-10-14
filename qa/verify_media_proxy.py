"""A stream timeout must not append a second HTTP response to partially sent video."""
from pathlib import Path
import ast,io,urllib.request
from unittest.mock import patch
root=Path(__file__).resolve().parent.parent
tree=ast.parse((root/'serve_local.py').read_text(encoding='utf-8-sig'))
handler=next(n for n in tree.body if isinstance(n,ast.ClassDef) and n.name=='Handler')
method=next(n for n in handler.body if isinstance(n,ast.FunctionDef) and n.name=='proxy_media')
namespace={'REMOTE':'https://archive.example.invalid','urllib':urllib}
exec(compile(ast.fix_missing_locations(ast.Module(body=[method],type_ignores=[])),'proxy_media','exec'),namespace)
class Fake:
 proxy_media=namespace['proxy_media']
 def __init__(self):self.command='GET';self.headers={'Range':'bytes=12-'};self.wfile=io.BytesIO();self.responses=[];self.json=[];self.close_connection=False
 def send_response(self,status):self.responses.append(status)
 def send_header(self,*args):pass
 def end_headers(self):pass
 def send_json(self,status,data):self.json.append((status,data))
class Stream:
 status=206;headers={'Content-Length':'100','Content-Range':'bytes 12-111/200'}
 def __enter__(self):self.calls=0;return self
 def __exit__(self,*args):pass
 def read(self,n):
  self.calls+=1
  if self.calls==1:return b'video-fragment'
  raise TimeoutError('simulated read timeout')
f=Fake()
with patch('urllib.request.urlopen',return_value=Stream()):f.proxy_media('assets/video/test.mp4')
assert f.responses==[206] and f.wfile.getvalue()==b'video-fragment' and not f.json and f.close_connection
f=Fake()
with patch('urllib.request.urlopen',side_effect=TimeoutError('simulated connect timeout')):f.proxy_media('assets/video/test.mp4')
assert len(f.json)==1 and f.json[0][0]==502 and not f.responses
print('PASS range stream timeout closes the partial response without corrupting video; connection errors before headers return JSON.')
