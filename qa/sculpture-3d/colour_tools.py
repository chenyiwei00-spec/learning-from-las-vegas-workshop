"""Generated mesh colour enhancement. Coordinates, topology and alpha are preserved."""
def saturate_mesh(mesh, factor=1.35):
 import numpy as np
 colours=mesh.visual.vertex_colors.copy()
 rgb=colours[:,:3].astype(np.float32)/255
 y=(rgb*np.array([.2126,.7152,.0722])).sum(axis=1,keepdims=True)
 colours[:,:3]=np.rint(np.clip(y+(rgb-y)*factor,0,1)*255).astype(np.uint8)
 mesh.visual.vertex_colors=colours
 return mesh

def preserve_front_colour(mesh, source):
 """Reproject the source photograph onto front-facing vertices; inferred backs stay intact."""
 import numpy as np
 rgba=np.asarray(source.convert('RGBA'));box=source.getchannel('A').getbbox()
 if not box:return {'projectedVertices':0}
 lo,hi=mesh.bounds;verts=mesh.vertices;dx=max(hi[1]-lo[1],1e-8);dy=max(hi[2]-lo[2],1e-8)
 u=box[0]+(verts[:,1]-lo[1])/dx*(box[2]-box[0]-1)
 v=box[1]+(hi[2]-verts[:,2])/dy*(box[3]-box[1]-1)
 ix=np.clip(np.rint(u).astype(int),0,rgba.shape[1]-1);iy=np.clip(np.rint(v).astype(int),0,rgba.shape[0]-1)
 pixels=rgba[iy,ix];facing=np.clip((mesh.vertex_normals[:,0]-.05)/.45,0,1)
 weights=(.90*facing*(pixels[:,3]/255))[:,None]
 original=mesh.visual.vertex_colors.copy();rgb=original[:,:3].astype(float)
 original[:,:3]=np.rint(np.clip(rgb*(1-weights)+pixels[:,:3]*weights,0,255)).astype(np.uint8)
 mesh.visual.vertex_colors=original
 return {'projectedVertices':int((weights[:,0]>.1).sum()),'method':'Source photo projected onto front-facing canonical vertices','frontBlend':.90,'backColour':'AI inferred'}

def linear_vertex_colours(mesh):
 """glTF COLOR_0 is linear; the neural RGB predictions and source pixels are sRGB."""
 import numpy as np
 colours=mesh.visual.vertex_colors.copy();rgb=colours[:,:3].astype(float)/255
 linear=np.where(rgb<=.04045,rgb/12.92,((rgb+.055)/1.055)**2.4)
 colours[:,:3]=np.rint(np.clip(linear,0,1)*255).astype(np.uint8)
 mesh.visual.vertex_colors=colours
 return mesh
