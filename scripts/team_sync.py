from pathlib import Path
import argparse,subprocess,time,sys,os
ROOT=Path(__file__).resolve().parent.parent
def git(*args):
 return subprocess.run(['git','-C',str(ROOT),*args],capture_output=True,text=True,encoding='utf-8',errors='replace',timeout=60,env={**os.environ,'GIT_TERMINAL_PROMPT':'0','GCM_INTERACTIVE':'never'})
def sync_once():
 if not (ROOT/'.git').exists():return 'Clone this repository with Git first.'
 branch=git('branch','--show-current')
 dirty=git('status','--porcelain','--untracked-files=normal')
 if branch.returncode or dirty.returncode:return 'Could not read Git status.'
 if branch.stdout.strip()!='main':return 'Paused: switch to main to receive the shared accepted version.'
 if dirty.stdout.strip():return 'Paused: tracked/unignored local edits exist; commit them on your branch first.'
 fetched=git('fetch','origin','main')
 if fetched.returncode:return 'Fetch failed. Check your GitHub login or internet connection.'
 # Re-check after fetch: an editor may have changed files while the network request ran.
 branch_after=git('branch','--show-current')
 status_after=git('status','--porcelain','--untracked-files=normal')
 if branch_after.returncode or status_after.returncode:return 'Paused: could not re-check checkout after fetch.'
 if branch_after.stdout.strip()!='main':return 'Paused: branch changed during fetch.'
 if status_after.stdout.strip():return 'Paused: local edits appeared during fetch.'
 old=git('rev-parse','HEAD').stdout.strip()
 merged=git('merge','--ff-only','origin/main')
 if merged.returncode:return 'Paused: main has diverged or files conflict. Ask Codex to resolve without discarding changes.'
 new=git('rev-parse','HEAD').stdout.strip()
 return 'Updated to '+new[:12] if new!=old else 'Already up to date: '+new[:12]
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('--watch',action='store_true');p.add_argument('--interval',type=int,default=30);a=p.parse_args()
 try:
  while True:
   try:print(sync_once(),flush=True)
   except (subprocess.TimeoutExpired,OSError) as e:print('Sync unavailable: '+type(e).__name__,flush=True)
   if not a.watch:break
   time.sleep(max(15,a.interval))
 except KeyboardInterrupt:print('Live sync stopped.')
