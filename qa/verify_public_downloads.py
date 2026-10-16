"""Public downloads never request login; private downloads retain explicit credentials."""
import io,json,sys,unittest,urllib.error
from pathlib import Path
from unittest.mock import patch,MagicMock
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'scripts'))
import github_api as api
class Response(io.BytesIO):
 status=200
class Downloads(unittest.TestCase):
 def test_public_release_never_reads_credentials(self):
  release={'assets':[]}
  with patch.object(api,'request',return_value=release) as get,patch.object(api,'credential',side_effect=AssertionError('Login requested')):
   self.assertEqual(api.release_for_download('example'),(None,release))
   self.assertIsNone(get.call_args.args[0])
 def test_missing_public_release_does_not_request_login(self):
  with patch.object(api,'request',side_effect=[api.GitHubAPIError(404,'Missing release'),{'private':False}]),patch.object(api,'credential',side_effect=AssertionError('Login requested')):
   with self.assertRaisesRegex(api.GitHubAPIError,'Missing release'):api.release_for_download('example')
 def test_private_release_keeps_credential_fallback(self):
  release={'assets':[]}
  with patch.object(api,'request',side_effect=[api.GitHubAPIError(404,'Private'),api.GitHubAPIError(404,'Private'),release]) as get,patch.object(api,'credential',return_value='test-credential') as auth:
   self.assertEqual(api.release_for_download('example'),('test-credential',release))
   auth.assert_called_once();self.assertEqual(get.call_args.args[0],'test-credential')
 def test_rate_limit_does_not_spawn_login(self):
  with patch.object(api,'request',side_effect=api.GitHubAPIError(403,'Rate limited')),patch.object(api,'credential',side_effect=AssertionError('Login requested')):
   with self.assertRaises(api.GitHubAPIError):api.release_for_download('example')
 def test_anonymous_json_request_has_no_authorization(self):
  with patch.object(api.urllib.request,'urlopen',return_value=Response(b'{"ok":true}')) as get:
   self.assertEqual(api.request(None,'/repos/example/test'),{'ok':True})
   self.assertIsNone(get.call_args.args[0].get_header('Authorization'))
 def test_private_json_request_includes_authorization(self):
  with patch.object(api.urllib.request,'urlopen',return_value=Response(b'{"ok":true}')) as get:
   api.request('test-credential','/repos/example/test')
   self.assertEqual(get.call_args.args[0].get_header('Authorization'),'Bearer test-credential')
 def test_public_asset_has_no_authorization(self):
  opener=MagicMock();opener.open.return_value=io.BytesIO(b'asset')
  with patch.object(api.urllib.request,'build_opener',return_value=opener):
   with api.asset_stream(None,1) as source:self.assertEqual(source.read(),b'asset')
   self.assertIsNone(opener.open.call_args.args[0].get_header('Authorization'))
 def test_redirect_never_forwards_credential(self):
  opener=MagicMock()
  opener.open.side_effect=urllib.error.HTTPError('https://api.github.com',302,'Redirect',{'Location':'https://release-assets.githubusercontent.com/signed'},None)
  with patch.object(api.urllib.request,'build_opener',return_value=opener),patch.object(api.urllib.request,'urlopen',return_value=io.BytesIO(b'asset')) as redirected:
   with api.asset_stream('test-credential',1) as source:self.assertEqual(source.read(),b'asset')
   self.assertEqual(opener.open.call_args.args[0].get_header('Authorization'),'Bearer test-credential')
   self.assertIsNone(redirected.call_args.args[0].get_header('Authorization'))
if __name__=='__main__':unittest.main()
