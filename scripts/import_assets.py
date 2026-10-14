from pathlib import Path
import argparse,zipfile,json,hashlib,shutil
ROOT=Path(__file__).resolve().parent.parent
def install(archive):
 with zipfile.ZipFile(archive) as z:
  manifest=json.loads(z.read('asset-pack.json'))
  if manifest.get('format')!='borrowed-worlds-team-assets-v1':raise ValueError('Not a team asset pack.')
  for i,row in enumerate(manifest['files']):
   relative=Path(row['path'])
   if relative.is_absolute() or '..' in relative.parts or '\\' in row['path'] or ':' in row['path']:raise ValueError('Invalid asset path.')
   if not row['path'].startswith(('site/assets/','external-assets/collage-objects/')):raise ValueError('Asset outside approved directories.')
   if relative.suffix.lower() not in {'.png','.jpg','.jpeg','.webp','.glb'}:raise ValueError('The pack cannot replace code or metadata files.')
   dest=(ROOT/relative).resolve();dest.relative_to(ROOT)
   if dest.is_file() and dest.stat().st_size==row['bytes'] and hashlib.sha256(dest.read_bytes()).hexdigest()==row['sha256']:continue
   dest.parent.mkdir(parents=True,exist_ok=True)
   temp=dest.with_name(dest.name+'.installing')
   h=hashlib.sha256();total=0
   try:
    with z.open(row['path']) as source,temp.open('wb') as output:
     for block in iter(lambda:source.read(1024*1024),b''):
      output.write(block);h.update(block);total+=len(block)
    if total!=row['bytes'] or h.hexdigest()!=row['sha256']:raise ValueError('Checksum failed: '+row['path'])
    temp.replace(dest)
   finally:
    if temp.exists():temp.unlink()
   if (i+1)%250==0:print(str(i+1)+' / '+str(len(manifest['files']))+' assets installed',flush=True)
  print('Asset pack installed and SHA256 checked: '+str(len(manifest['files']))+' files.')
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('archive');install(p.parse_args().archive)
