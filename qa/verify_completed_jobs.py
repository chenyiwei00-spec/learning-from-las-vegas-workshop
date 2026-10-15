import importlib.util,json,tempfile
from pathlib import Path
root=Path(__file__).resolve().parent.parent
spec=importlib.util.spec_from_file_location('completed_jobs',root/'qa/sculpture-3d/job_manager.py')
jobs=importlib.util.module_from_spec(spec);spec.loader.exec_module(jobs)
with tempfile.TemporaryDirectory(dir=root/'runtime') as directory:
 jobs.OUTPUT=Path(directory)
 for n,status in enumerate(['complete','running','failed']):
  id=f'{n:064x}';folder=jobs.OUTPUT/id;folder.mkdir()
  (folder/'status.json').write_text(json.dumps({'id':id,'status':status,'fingerprint':'a'*64}),encoding='utf-8')
  (folder/'composition.json').write_text(json.dumps({'modelTarget':'city','agentPlan':{'title':'Test city'}}),encoding='utf-8')
  (folder/'sculpture.glb').write_bytes(b'glTF')
 rows=jobs.completed();assert len(rows)==1 and rows[0]['target']=='city' and rows[0]['title']=='Test city'
 try:jobs.job_path('../outside')
 except ValueError:pass
 else:raise AssertionError('Traversal must fail')
print('PASS: completed-job recovery returns only finished models with the correct target and source title.')
