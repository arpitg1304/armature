"""Read-only audit of an ARMATURE export using independent Parquet/PNG readers."""
from pathlib import Path
import argparse, json, io, zipfile, hashlib, math, xml.etree.ElementTree as ET
import numpy as np
import pyarrow.parquet as pq
from PIL import Image
p=argparse.ArgumentParser();p.add_argument('dataset',type=Path);p.add_argument('--output',type=Path,required=True);a=p.parse_args();root=a.dataset;out=a.output;out.mkdir(parents=True,exist_ok=True)
info=json.loads((root/'meta/info.json').read_text());meta=json.loads((root/'meta/armature.json').read_text());stats=json.loads((root/'meta/stats.json').read_text())
rows=[r for f in sorted((root/'data').rglob('*.parquet')) for r in pq.read_table(f).to_pylist()]
eps=[r for f in sorted((root/'meta/episodes').rglob('*.parquet')) for r in pq.read_table(f).to_pylist()]
tasks=pq.read_table(root/'meta/tasks.parquet').to_pylist();transitions=[json.loads(s) for s in (root/'transitions.jsonl').read_text().splitlines()]
checks=[];warnings=[];metrics={}
def check(name,ok,detail=None):checks.append({'check':name,'passed':bool(ok),**({'detail':detail} if detail is not None else {})})
def maxerr(x,y):return float(np.max(np.abs(np.asarray(x,dtype=float)-np.asarray(y,dtype=float))))
check('Declared row, episode, task and transition counts',len(rows)==info['total_frames']==len(transitions) and len(eps)==info['total_episodes'] and len(tasks)==info['total_tasks'])
check('Continuous global indices',[r['index'] for r in rows]==list(range(len(rows))))
check('No missing feature columns',all(set(info['features'])<=set(r) for r in rows))
check('Metadata joint names/units agree',meta['joint_names']==info['features']['action']['names']==info['features']['observation.state']['names'] and len(meta['action_units'])==len(meta['joint_names']))
for ep in eps:
 erows=rows[ep['dataset_from_index']:ep['dataset_to_index']];eid=ep['episode_index'];et=transitions[ep['dataset_from_index']:ep['dataset_to_index']]
 check(f'Episode {eid}: bounds and local indices',len(erows)==ep['length'] and [r['frame_index'] for r in erows]==list(range(ep['length'])) and all(r['episode_index']==eid for r in erows))
 check(f'Episode {eid}: timestamps',maxerr([r['timestamp'] for r in erows],np.arange(len(erows))/info['fps'])<3e-6)
 check(f'Episode {eid}: single final end flag',all(not r['next.done'] for r in erows[:-1]) and erows[-1]['next.done'])
 check(f'Episode {eid}: end flags consistent',all(r['next.done']==(r['next.terminated'] or r['next.truncated']) and not(r['next.terminated'] and r['next.truncated']) for r in erows))
 check(f'Episode {eid}: declared success consistent',ep['success']==erows[-1]['next.success']==meta['episodes'][eid]['success'])
 for key,tkey in [('observation.state','observation'),('action','action'),('next.reward','reward')]:
  error=maxerr([r[key] for r in erows],[r[tkey] for r in et]);check(f'Episode {eid}: JSONL/Parquet {key}',error<1e-6,error)
 check(f'Episode {eid}: JSONL flags',all(r['next.terminated']==t['terminated'] and r['next.truncated']==t['truncated'] for r,t in zip(erows,et)))
 error=maxerr([r['observation.state'] for r in erows[1:]],[r['next_observation'] for r in et[:-1]])
 check(f'Episode {eid}: next state aligns to next row',error<1e-6,error)
 error=maxerr(np.diff(np.array([r['observation.state'] for r in erows]),axis=0)*info['fps'],[r['observation.velocity'] for r in erows[1:]])
 check(f'Episode {eid}: velocity aligns to state difference',error<2e-5,error)
 velocities=np.abs(np.array([r['observation.velocity'] for r in erows]));check(f'Episode {eid}: servo velocity limits',np.max(velocities[:,:-1])<.90001 and np.max(velocities[:,-1])<=meta['jaw_speed_limit']+1e-6)
 metrics[f'episode_{eid}']={'frames':len(erows),'duration_seconds':len(erows)/info['fps'],'success':ep['success'],'termination':meta['episodes'][eid]['termination'],'max_arm_speed':float(np.max(velocities[:,:-1])),'max_gripper_speed':float(np.max(velocities[:,-1]))}
for key,feature in info['features'].items():
 if feature['dtype']=='image':continue
 values=np.array([r[key] if isinstance(r[key],list) else [r[key]] for r in rows],dtype=float)
 check(key+': dimensions/finite',values.shape==(len(rows),feature['shape'][0]) and np.isfinite(values).all())
 computed={'min':values.min(axis=0),'max':values.max(axis=0),'mean':values.mean(axis=0),'std':values.std(axis=0)}
 check(key+': global statistics',all(np.allclose(computed[k],stats[key][k],atol=2e-6,rtol=2e-5) for k in computed) and stats[key]['count']==[len(rows)])
 for ep in eps:
  subset=values[ep['dataset_from_index']:ep['dataset_to_index']]
  computed={'min':subset.min(axis=0),'max':subset.max(axis=0),'mean':subset.mean(axis=0),'std':subset.std(axis=0)}
  check(key+f': episode {ep["episode_index"]} statistics',all(np.allclose(computed[k],ep[f'stats/{key}/{k}'],atol=2e-6,rtol=2e-5) for k in computed))
quats=np.array([r['observation.object_orientations'] for r in rows]).reshape(-1,4);check('Object quaternions normalized',maxerr(np.linalg.norm(quats,axis=1),np.ones(len(quats)))<1e-5)
# Reconstruct FK from exported simulation URDF rather than the JS exporter.
urdf=ET.parse(root/'robot/simulation.urdf').getroot();joints=list(urdf.findall('joint'));children={j.find('child').get('link') for j in joints};base=next(l.get('name') for l in urdf.findall('link') if l.get('name') not in children)
def rotation(axis,theta):
 axis=np.asarray(axis,dtype=float);axis=axis/np.linalg.norm(axis);x,y,z=axis;K=np.array([[0,-z,y],[z,0,-x],[-y,x,0]]);return np.eye(3)+math.sin(theta)*K+(1-math.cos(theta))*(K@K)
def transform(xyz,rpy):
 m=np.eye(4);m[:3,3]=xyz;m[:3,:3]=rotation([0,0,1],rpy[2])@rotation([0,1,0],rpy[1])@rotation([1,0,0],rpy[0]);return m
base_transform=transform(meta['base_position'],meta['base_rotation_rpy']);tcp_errors=[]
for r in rows:
 q=dict(zip(meta['joint_names'],r['observation.state']));links={base:base_transform};pending=joints[:]
 while pending:
  progress=False
  for joint in pending[:]:
   parent=joint.find('parent').get('link')
   if parent not in links:continue
   origin=joint.find('origin');xyz=list(map(float,origin.get('xyz','0 0 0').split())) if origin is not None else [0,0,0];rpy=list(map(float,origin.get('rpy','0 0 0').split())) if origin is not None else [0,0,0]
   axis=joint.find('axis');axis=list(map(float,axis.get('xyz').split())) if axis is not None else [0,0,1];motion=np.eye(4)
   if joint.get('type') in ['revolute','continuous']:motion[:3,:3]=rotation(axis,q.get(joint.get('name'),0))
   elif joint.get('type')=='prismatic':motion[:3,3]=np.array(axis)*r['observation.state'][-1]/2
   links[joint.find('child').get('link')]=links[parent]@transform(xyz,rpy)@motion;pending.remove(joint);progress=True
  if not progress:raise ValueError('Unresolvable exported URDF tree')
 tcp_errors.append(maxerr(links[meta['tcp_link']][:3,3],r['observation.tcp']))
check('TCP reconstructed from exported URDF',max(tcp_errors)<2e-6,max(tcp_errors));metrics['max_tcp_reconstruction_error_m']=max(tcp_errors)
for key,feature in info['features'].items():
 if feature['dtype']!='image':continue
 sums=np.zeros(3);squares=np.zeros(3);minimum=np.ones(3);maximum=np.zeros(3);count=0;hashes=[];blank=0;camera=key.split('.')[-1]
 for i,r in enumerate(rows):
  payload=r[key]['bytes'];im=Image.open(io.BytesIO(payload));im.load();assert im.format=='PNG' and list(im.size)==[feature['shape'][1],feature['shape'][0]]
  pixels=np.asarray(im.convert('RGB'),dtype=float).reshape(-1,3)/255;hashes.append(hashlib.sha256(pixels.tobytes()).hexdigest());blank+=bool(np.all(np.ptp(pixels,axis=0)==0));sums+=pixels.sum(axis=0);squares+=(pixels*pixels).sum(axis=0);minimum=np.minimum(minimum,pixels.min(axis=0));maximum=np.maximum(maximum,pixels.max(axis=0));count+=len(pixels)
  if i in [0,len(rows)//2,len(rows)-1]:(out/f'{camera}-{i:04}.png').write_bytes(payload)
 computed={'mean':sums/count,'std':np.sqrt(np.maximum(0,squares/count-(sums/count)**2)),'min':minimum,'max':maximum}
 check(key+': every PNG decodes and has content',blank==0,{'decoded':len(rows),'blank':blank,'unique':len(set(hashes))})
 check(key+': global pixel statistics',all(np.allclose(computed[k],np.array(stats[key][k]).reshape(3),atol=1e-7) for k in computed))
 metrics[camera]={'decoded_pngs':len(rows),'distinct_images':len(set(hashes)),'blank_frames':blank}
archive=root.with_suffix('.zip')
if archive.exists():
 with zipfile.ZipFile(archive) as z:
  check('ZIP CRC integrity',z.testzip() is None)
  names=[n for n in z.namelist() if not n.endswith('/')];check('Extracted files match original ZIP',all((root/n).is_file() and (root/n).read_bytes()==z.read(n) for n in names),len(names))
if '5' in meta.get('generator',''):warnings.append('Exporter generator label still says Armature Studio 5; it does not identify the exact current source/build hash.')
if not (root/'memory').exists():warnings.append('This is an ordinary kitting episode, not a memory-protocol dataset; no cue/evaluator sidecars are expected.')
warnings.append('Object poses and grasp state are privileged fields; exclude them from visual-policy inputs.')
warnings.append('Independent file/data validation does not establish stock LeRobot loader/training compatibility.')
report={'dataset':str(root),'checks_passed':sum(c['passed'] for c in checks),'checks_total':len(checks),'failures':[c for c in checks if not c['passed']],'metrics':metrics,'warnings':warnings,'checks':checks}
(out/'audit.json').write_text(json.dumps(report,indent=2)+'\n');(out/'recorded-actions.json').write_text(json.dumps({'config':meta['episodes'][0]['config'],'transitions':transitions,'rows':[{k:v for k,v in r.items() if not k.startswith('observation.images.')} for r in rows]}))
print(json.dumps({k:v for k,v in report.items() if k!='checks'},indent=2))
