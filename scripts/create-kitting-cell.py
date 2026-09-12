"""Author the cell in Blender; export static, Y-up render geometry for Three.js.
Run with Blender --background --python scripts/create-kitting-cell.py, or bpy Python.
Visual fixtures stay outside the central manipulation area. No physics is exported.
"""
from pathlib import Path
import bpy, math, json, gzip, base64
from mathutils import Vector
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'assets/scenes';OUT.mkdir(parents=True,exist_ok=True)
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
bpy.context.scene.unit_settings.system='METRIC'
materials={}
def mat(name,color,metal=0,rough=.5):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
 bs=m.node_tree.nodes.get('Principled BSDF');bs.inputs['Base Color'].default_value=(*color,1);bs.inputs['Metallic'].default_value=metal;bs.inputs['Roughness'].default_value=rough
 materials[name]=m;return m
steel=mat('Anodized aluminum',(.42,.49,.53),.85,.3)
dark=mat('Graphite powder coat',(.055,.072,.082),.35,.44)
bench=mat('Warm grey laminate',(.39,.42,.41),.04,.67)
rubber=mat('ESD graphite',(.052,.081,.083),0,.85)
black=mat('Black polymer',(.023,.034,.039),.1,.5)
ivory=mat('Warm white markings',(.80,.85,.80),.05,.5)
teal=mat('Petrol blue storage',(.035,.20,.23),.08,.48)
amber=mat('Safety amber',(.95,.49,.075),.1,.48)
light=mat('Task light diffuser',(.88,.94,.87),0,.25)
red=mat('Emergency stop red',(.65,.055,.027),.08,.38)
# Construction takes Three.js coordinates, converted to Blender Z-up.
def pos(p):return (p[0],-p[2],p[1])
def box(name,center,size,material,bevel=.003):
 bpy.ops.mesh.primitive_cube_add(size=1,location=pos(center));o=bpy.context.object;o.name=name
 o.dimensions=(size[0],size[2],size[1]);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
 o.data.materials.append(material)
 if bevel:
  mod=o.modifiers.new('Manufactured edge radii','BEVEL');mod.width=min(bevel,min(size)*.35);mod.segments=3
  o.modifiers.new('Weighted face normals','WEIGHTED_NORMAL')
 return o

def cylinder(name,center,radius,depth,material):
 bpy.ops.mesh.primitive_cylinder_add(vertices=20,radius=radius,depth=depth,location=pos(center));o=bpy.context.object;o.name=name;o.data.materials.append(material)
 mod=o.modifiers.new('Edge radius','BEVEL');mod.width=min(.0015,depth*.2);mod.segments=2;o.modifiers.new('Weighted face normals','WEIGHTED_NORMAL');return o

def label(name,text,center,size,material,flat=False):
 bpy.ops.object.text_add(location=pos(center));o=bpy.context.object;o.name=name;o.data.body=text;o.data.size=size;o.data.extrude=.00015;o.data.align_x='LEFT';o.data.materials.append(material)
 if not flat:o.rotation_euler=(math.pi/2,0,0)
 bpy.ops.object.convert(target='MESH');return o

# Work surface matches the original physical table: top at y=0, 2.8 x 1.85 m.
box('Laminated worktop',(0,-.065,0),(2.8,.13,1.85),bench,.012)
box('Front impact strip',(0,-.067,.927),(2.8,.06,.008),dark)
box('Cell front crossmember',(0,-.19,.77),(2.6,.07,.055),steel)
box('Cell rear crossmember',(0,-.19,-.77),(2.6,.07,.055),steel)
for x in [-1.23,1.23]:
 for z in [-.76,.76]:
  box('Extruded aluminum upright',(x,-.55,z),(.065,.86,.065),steel)
  for dx in [-.027,.027]:box('Extrusion slot',(x+dx,-.55,z+.033),(.008,.80,.001),dark,.0001)
  cylinder('Leveling foot',(x,-.994,z),.052,.034,black)
box('Lower storage shelf',(0,-.72,0),(2.5,.035,1.45),dark)
for x in [-.64,.64]:
 box('Drawer cabinet',(x,-.40,.15),(1.06,.34,.87),dark,.01)
 for y in [-.32,-.49]:
  box('Drawer front',(x,y,.594),(1.015,.145,.016),bench,.004)
  box('Drawer pull',(x,y+.025,.622),(.32,.014,.023),steel)

# Thin floor graphics and work mat are render-only, nearly flush with the table.
box('Central ESD work mat',(-.10,.0003,.02),(1.10,.0006,.62),rubber,.0001)
for z in [-.285,.325]:box('ESD mat border',(-.10,.0008,z),(1.10,.0003,.003),teal,.0001)
label('Mat identity','ESD / ASSEMBLY',(-.61,.001,.28),.018,ivory,True)
# Neutral board graphics never encode target answers or chosen parts.
for i in range(3):
 x=.31+i*.043
 box('Registration rule',(x,.0008,.245),(.022,.0003,.0015),ivory,.0001)
label('Process marking','01  /  KIT',(.26,.001,.21),.025,ivory,True)

# Rear frame and perforated tool panel, behind the reachable parts.
for x in [-.91,.91]:
 box('Rear gantry column',(x,.51,-.72),(.046,1.02,.046),steel)
 box('Column extrusion groove',(x,.51,-.695),(.011,.93,.002),dark,.0003)
 for y in [.055,.94]:
  box('Gantry mounting bracket',(x,y,-.69),(.08,.07,.011),dark)
box('Overhead gantry',(0,1.03,-.72),(1.9,.05,.06),steel)
box('Perforated tooling panel',(0,.58,-.754),(1.72,.67,.018),dark)
# Visible pegboard apertures are dark insets; no hidden-history variation.
for row in range(10):
 for col in range(26):
  o=cylinder('Pegboard aperture',(-.81+col*.064,.30+row*.056,-.741),.004,.001,black);o.rotation_euler=(math.pi/2,0,0)
box('Rear supply shelf',(0,.22,-.59),(1.67,.025,.29),steel)
box('Shelf front lip',(0,.228,-.443),(1.67,.032,.012),dark)

def bin_tray(x,z,index):
 w=.245;depth=.22;y=.235
 box('Supply bin floor',(x,y,z),(w,.008,depth),teal)
 box('Supply bin back',(x,y+.072,z-depth/2), (w,.145,.007),teal)
 for side in [-1,1]:box('Supply bin side',(x+side*w/2,y+.053,z),(.007,.108,depth),teal)
 box('Supply bin low front',(x,y+.019,z+depth/2),(w,.04,.007),teal)
 box('Bin label plate',(x,y+.013,z+depth/2+.005),(w*.70,.026,.002),ivory,.001)
 label('Supply bin number',f'STOCK  {index:02d}',(x-.074,y+.004,z+depth/2+.007),.017,dark)
 for j in range(3):
  if index%2: cylinder('Spare hardware',(x-.063+j*.06,y+.025,z),.018,.045,steel)
  else:box('Spare component',(x-.065+j*.059,y+.023,z),(.041,.03,.059),black,.004)
for i,x in enumerate([-.63,-.32,.32,.63]):bin_tray(x,-.575,i+1)
# Fixed signage is cell identity only, never evaluator output.
box('Station identity plate',(-.44,.88,-.736),(.70,.115,.008),teal)
label('Station name','ARMATURE',(-.745,.875,-.729),.048,ivory)
label('Station subtitle','KITTING CELL   /   01',(-.742,.842,-.729),.019,ivory)
box('Procedure card',(.46,.65,-.736),(.35,.24,.008),ivory)
label('Procedure heading','STANDARD WORK',(.31,.731,-.729),.019,dark)
for i,text in enumerate(['01   READ REQUEST','02   PICK PARTS','03   PLACE & VERIFY']):label('Procedure line',text,(.31,.686-i*.05,-.729),.014,dark)
# Task-light housing and diffuser. Three.js lighting remains separately controlled.
box('Task light housing',(0,.99,-.48),(1.31,.025,.10),dark)
box('Task light diffuser',(0,.975,-.48),(1.23,.004,.068),light,.001)
for x in [-.59,.59]:box('Task light suspension',(x,1.0,-.60),(.017,.025,.24),steel)
# Side staging fixture, outside central manipulation work area.
box('Empty kit tray',(.80,.014,.35),(.38,.024,.30),dark,.007)
for x in [.615,.985]:box('Kit tray rim',(x,.034,.35),(.009,.04,.30),steel)
for z in [.205,.495]:box('Kit tray rim',(.8,.034,z),(.37,.04,.009),steel)
for x in [.738,.862]:box('Kit tray divider',(x,.026,.35),(.004,.025,.28),dark,.001)
label('Tray marking','COMPLETED KITS',(.64,.001,.565),.026,dark,True)
box('Control pod',(-.90,.043,.41),(.24,.08,.19),dark,.009)
cylinder('Emergency stop bezel',(-.94,.09,.43),.03,.013,amber)
cylinder('Emergency stop mushroom',(-.94,.105,.43),.021,.023,red)
cylinder('Status indicator',(-.84,.087,.38),.009,.006,teal)
# Hardware on the accessible outside edge, away from the robot base.
for x in [-1.30,1.30]:
 for z in [-.83,.83]:cylinder('Worktop countersunk screw',(x,.0005,z),.006,.001,steel)

# Save the editable Blender source with useful lighting and framing.
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=32
scene.world.color=(.22,.25,.28)
bpy.ops.object.light_add(type='AREA',location=(1,-2,3));bpy.context.object.data.energy=650;bpy.context.object.data.shape='DISK';bpy.context.object.data.size=4
bpy.ops.object.camera_add(location=(2.6,-3.4,2.3));cam=bpy.context.object;direction=Vector((0,0,.2))-cam.location;cam.rotation_euler=direction.to_track_quat('-Z','Y').to_euler();cam.data.lens=45;scene.camera=cam
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'kitting-cell.blend'))
# Bake evaluated bevels/normals and combine by material: no Blender runtime dependency.
groups={};depsgraph=bpy.context.evaluated_depsgraph_get()
for obj in scene.objects:
 if obj.type!='MESH':continue
 evaluated=obj.evaluated_get(depsgraph);mesh=evaluated.to_mesh();mesh.calc_loop_triangles()
 name=obj.data.materials[0].name;g=groups.setdefault(name,{'positions':[],'normals':[]})
 normal_matrix=obj.matrix_world.to_3x3().inverted().transposed()
 for tri in mesh.loop_triangles:
  for li in tri.loops:
   loop=mesh.loops[li];v=obj.matrix_world@mesh.vertices[loop.vertex_index].co;n=(normal_matrix@mesh.corner_normals[li].vector).normalized()
   g['positions'].extend(round(q,6) for q in (v.x,v.z,-v.y));g['normals'].extend(round(q,5) for q in (n.x,n.z,-n.y))
 evaluated.to_mesh_clear()
for name,g in groups.items():
 bs=materials[name].node_tree.nodes.get('Principled BSDF');g['color']=list(bs.inputs['Base Color'].default_value)[:3];g['metalness']=bs.inputs['Metallic'].default_value;g['roughness']=bs.inputs['Roughness'].default_value
payload={'schema':'armature-static-scene-v1','generator':'Blender '+bpy.app.version_string,'units':'metres','up':'Y','physics':'visual-only; existing flat table collider remains','groups':groups}
raw=json.dumps(payload,separators=(',',':')).encode();encoded=base64.b64encode(gzip.compress(raw,mtime=0)).decode();(OUT/'kitting-cell.json.gz.b64').write_text(encoded)
print('Exported',sum(len(g['positions'])//9 for g in groups.values()),'triangles;',len(groups),'material batches;',len(encoded),'base64 bytes')
