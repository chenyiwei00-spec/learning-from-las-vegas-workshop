"""Local, experimental visual resemblance estimate. No API calls, identity inference or paid service."""
from pathlib import Path
import argparse,json,math,base64,io,os
p=argparse.ArgumentParser();p.add_argument('--input',required=True);p.add_argument('--output',required=True);a=p.parse_args()
import torch
from PIL import Image
from transformers import CLIPModel,CLIPProcessor
torch.set_num_threads(2)
root=Path(__file__).parent
weights=Path(os.environ.get('BW_RELEVANCE_MODEL_ROOT',str(root/'clip')))
positive=[
 'a three dimensional model of a vintage Las Vegas casino neon sign',
 'a sculpture of a tall roadside hotel advertising sign in Las Vegas',
 'a colourful Las Vegas casino sign with letters and an arrow',
 'a model of a Las Vegas hotel sign on a tall metal pole',
 'the Golden Nugget Las Vegas sign','the Dunes Las Vegas neon sign',
 'the Sahara Las Vegas hotel sign','the Imperial Palace Las Vegas sign',
 'the Vegas World casino roadside sign','a Las Vegas Strip advertising landmark']
negative=[
 'a sculpture of an abstract object with no readable signs',
 'an abstract assemblage of disconnected coloured shapes',
 'a three dimensional model of an animal','a statue of a human figure',
 'a sculpture of a head and arms','a model of a car or a chair',
 'a rock with an irregular shape','a flower or a tree',
 'a three dimensional model of a household object',
 'a sculpture of folded fabric','an abstract sculptural installation',
 'a plain geometric solid or an unrecognizable blob']
model=CLIPModel.from_pretrained(weights,local_files_only=True).eval()
processor=CLIPProcessor.from_pretrained(weights,local_files_only=True)
payload=json.loads(Path(a.input).read_text(encoding='utf-8'))
images=[]
for data in payload['images']:
 image=Image.open(io.BytesIO(base64.b64decode(data.split(',',1)[1]))).convert('RGBA')
 bg=Image.new('RGBA',image.size,(242,242,242,255));bg.alpha_composite(image);images.append(bg.convert('RGB'))
inputs=processor(text=positive+negative,images=images,return_tensors='pt',padding=True)
with torch.inference_mode():
 out=model(**inputs)
 similarity=out.logits_per_image/model.logit_scale.exp()
rows=[]
for v in similarity.tolist():
 pos=sorted(v[:len(positive)],reverse=True)[:3];neg=sorted(v[len(positive):],reverse=True)[:3]
 margin=sum(pos)/3-sum(neg)/3
 score=1/(1+math.exp(-70*(margin-.005)))
 rows.append({'positive':sum(pos)/3,'negative':sum(neg)/3,'margin':margin,'score':score,'closestLabel':(positive+negative)[max(range(len(v)),key=lambda i:v[i])]})
score=.7*sum(r['score'] for r in rows)/len(rows)+.3*max(r['score'] for r in rows)
score=max(0,min(1,(score-.15)/.75))
result={'score':round(score,5),'method':'local CLIP ViT-B/32, three rendered views','experimental':True,'meaning':'Visual resemblance to this exhibition taxonomy, not a factual probability or city identification.','views':rows,'version':'exhibition-resemblance-v1'}
Path(a.output).write_text(json.dumps(result,indent=2),encoding='utf-8')
print(json.dumps(result))

