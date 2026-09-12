"""Independent Parquet, PNG and raw sensor validation; not a stock LeRobot loader test."""
import io,json,math,zipfile
from pathlib import Path
import numpy as np
import pyarrow.parquet as pq
from PIL import Image
root=Path('test-results/v28')
def rows(z,name='data/chunk-000/file-000.parquet'): return pq.read_table(io.BytesIO(z.read(name))).to_pylist()
def jsonl(z,name): return [json.loads(line) for line in z.read(name).splitlines()]
a=zipfile.ZipFile(root/'reference-rgb.zip');b=zipfile.ZipFile(root/'built-rgb.zip')
reference=rows(a);data=rows(b)
assert reference==data,'Rebuilt recordings match V28 data, including PNG bytes'
info=json.loads(b.read('meta/info.json'));assert len(data)==info['total_frames']==6
images=[key for key in info['features'] if key.startswith('observation.images.')]
for key in images:
 pixels=[]
 for row in data:
  im=Image.open(io.BytesIO(row[key]['bytes'])).convert('RGB');assert list(reversed(im.size))==info['features'][key]['shape'][:2]
  assert any(lo!=hi for lo,hi in im.getextrema()),'RGB is nonblank'
  pixels.append(im.tobytes())
 assert pixels[:3]==pixels[3:],'Debug overlays must not change recorded RGB'
transitions=jsonl(b,'transitions.jsonl')
for i,row in enumerate(data):
 assert row['index']==i and math.isclose(row['timestamp'],row['frame_index']/30,abs_tol=1e-6)
 if i+1<len(data) and data[i+1]['episode_index']==row['episode_index']:
  assert np.allclose(transitions[i]['next_observation'],data[i+1]['observation.state'],rtol=0,atol=1e-6)
s=zipfile.ZipFile(root/'sensors.zip');meta=json.loads(s.read('metadata.json'));shape=meta['depth']['shape'];depth=np.frombuffer(s.read('depth.f32'),dtype='<f4').reshape(shape);ids=np.frombuffer(s.read('instances.u32'),dtype='<u4').reshape(shape)
assert depth.shape==ids.shape;valid=np.isfinite(depth);assert valid.any();assert np.all(depth[valid]>0) and np.all(depth[valid]<=meta['camera']['far']);assert len(np.unique(ids))>1
assert Image.open(io.BytesIO(s.read('rgb.png'))).size==tuple(reversed(shape))
for label in meta['instances']['labels']: assert np.count_nonzero(ids==label['id'])==label['visiblePixels']
m=zipfile.ZipFile(root/'memory.zip');memory=rows(m);public=jsonl(m,'memory/public_frames.jsonl');evaluation=json.loads(m.read('memory/evaluator.json'))
assert len(public)==len(memory)>100 and evaluation['privileged'] is True
for frame,row in zip(public,memory):
 assert frame['frame_index']==row['frame_index'] and frame['episode_index']==row['episode_index']
 assert not ({'answer','condition','seed','correct','success'} & frame['observation'].keys())
 if frame['observation']['phase']=='choose': assert frame['observation']['cue'] is None
trial=evaluation['trials'][0]['report'];assert trial['completed'] and not trial['memorySuccess'] and trial['physicalSuccess']
assert memory[-1]['next.terminated'] and not memory[-1]['next.success'] and not memory[-1]['next.truncated']
summary={'rgb_frames':len(data),'cameras':images,'rgb_reference_exact':True,'debug_overlay_pixels_equal':True,'depth_shape':shape,'valid_depth_pixels':int(valid.sum()),'instance_ids':list(map(int,np.unique(ids))),'memory_frames':len(memory),'wrong_choice_physical_success_separate':True}
(root/'dataset.json').write_text(json.dumps(summary,indent=2)+'\n');print('PASS:',json.dumps(summary))
