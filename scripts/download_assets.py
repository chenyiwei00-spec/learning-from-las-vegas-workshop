from pathlib import Path
import io,json,hashlib,argparse,sys
from github_api import credential,request,repository_name,asset_stream
from import_assets import install
ROOT=Path(__file__).resolve().parent.parent
class PartsReader(io.RawIOBase):
 def __init__(self,paths):
  self.handles=[p.open('rb') for p in paths];self.ends=[];self.pos=0
  for p in paths:self.ends.append((self.ends[-1] if self.ends else 0)+p.stat().st_size)
 def readable(self):return True
 def seekable(self):return True
 def tell(self):return self.pos
 def seek(self,offset,whence=0):
  pos=offset if whence==0 else self.pos+offset if whence==1 else self.ends[-1]+offset
  if pos<0:raise ValueError('Negative seek')
  self.pos=pos;return pos
 def read(self,size=-1):
  if size<0:size=self.ends[-1]-self.pos
  remaining=min(size,max(0,self.ends[-1]-self.pos));blocks=[]
  while remaining:
   import bisect
   index=bisect.bisect_right(self.ends,self.pos)
   start=self.ends[index-1] if index else 0
   handle=self.handles[index];handle.seek(self.pos-start)
   data=handle.read(min(remaining,self.ends[index]-self.pos))
   if not data:raise IOError('Part is truncated.')
   blocks.append(data);remaining-=len(data);self.pos+=len(data)
  return b''.join(blocks)
 def close(self):
  for handle in self.handles:handle.close()
  super().close()
def digest(path):
 h=hashlib.sha256()
 with path.open('rb') as f:
  for block in iter(lambda:f.read(1024*1024),b''):h.update(block)
 return h.hexdigest()
def main():
 parser=argparse.ArgumentParser();parser.add_argument('--download-only',action='store_true');args=parser.parse_args()
 token=credential();name=repository_name()
 release=request(token,'/repos/'+name+'/releases/tags/team-assets-v1')
 assets={a['name']:a for a in release['assets']}
 if 'team-assets-parts.json' not in assets:raise RuntimeError('The team asset release is not complete yet.')
 with asset_stream(token,assets['team-assets-parts.json']['id']) as response:manifest=json.load(response)
 if manifest.get('format')!='borrowed-worlds-team-parts-v1':raise ValueError('Wrong asset manifest.')
 folder=ROOT/'external-assets/downloads';folder.mkdir(parents=True,exist_ok=True);paths=[]
 for row in manifest['parts']:
  filename=row['name']
  if Path(filename).name!=filename or not filename.startswith('team-assets-v1.zip.part'):raise ValueError('Unsafe part name.')
  path=folder/filename;paths.append(path)
  if path.is_file() and path.stat().st_size==row['bytes'] and digest(path)==row['sha256']:
   print('Already checked: '+filename,flush=True);continue
  remote=assets.get(filename)
  if not remote or remote['size']!=row['bytes']:raise RuntimeError('Release part missing or wrong size: '+filename)
  temp=path.with_name(path.name+'.downloading')
  print('Downloading '+filename+' ('+str(round(row['bytes']/1024**3,2))+' GiB)',flush=True)
  h=hashlib.sha256();total=0
  with asset_stream(token,remote['id']) as source,temp.open('wb') as output:
   for block in iter(lambda:source.read(1024*1024),b''):
    output.write(block);h.update(block);total+=len(block)
  if total!=row['bytes'] or h.hexdigest()!=row['sha256']:
   temp.unlink();raise ValueError('Checksum failed; run again: '+filename)
  temp.replace(path)
 if args.download_only:print('All asset parts checked.');return
 with PartsReader(paths) as joined:install(joined)
 print('Ready. Start the team website. Keep download parts for reinstall, or remove only external-assets/downloads to reclaim about 10 GB.')
if __name__=='__main__':
 try:main()
 except Exception as e:print('Setup failed: '+str(e),file=sys.stderr);sys.exit(1)

