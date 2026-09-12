import {
  Vo,
  Gl,
  kl,
  or,
  ht,
  os,
  Bl,
  Xr,
  ce,
} from "../../vendor/three-addons.js";
var x3 = 8 * 1024 * 1024,
  Zl = { m: 1, cm: 0.01, mm: 0.001, in: 0.0254 },
  u7 = (s) => {
    let e = "",
      t = new Uint8Array(s);
    for (let n = 0; n < t.length; n += 8192)
      e += String.fromCharCode(...t.subarray(n, n + 8192));
    return btoa(e);
  },
  l7 = (s) => Uint8Array.from(atob(s), (e) => e.charCodeAt(0)).buffer,
  m3 = (s) => s.data + JSON.stringify(s.importOptions || null),
  o7 = (s) => Array.isArray(s) && s.length === 3 && s.every(Number.isFinite);
function validateImportedCollision(s) {
  if (!s.collision) return;
  if (!["box", "mesh-boxes"].includes(s.collision.kind))
    throw Error("Choose box or compound mesh boxes for imported collision.");
  if (s.collision.kind === "box") return;
  let e = s.collision.parts;
  if (!Array.isArray(e) || !e.length || e.length > 64)
    throw Error("Compound collision needs 1\u201364 mesh boxes.");
  for (let t of e) {
    if (!o7(t.size) || t.size.some((n) => n < 1e-4 || n > 1) || !o7(t.offset))
      throw Error("Invalid compound collision box.");
    if (
      t.offset.some(
        (n, r) => Math.abs(n) + t.size[r] / 2 > s.dimensions[r] / 2 + 1e-4,
      )
    )
      throw Error("Compound collider extends beyond the imported object.");
  }
}
function validateImportOptions(s) {
  if (s.format && !["glb", "stl", "obj"].includes(s.format))
    throw Error("Supported object formats are GLB, STL and OBJ.");
  let e = s.importOptions;
  if (e) {
    if (!Object.hasOwn(Zl, e.unit) || !["y", "z"].includes(e.up))
      throw Error("Invalid import units or up axis.");
    if (
      e.fitMm !== null &&
      e.fitMm !== void 0 &&
      (!Number.isFinite(e.fitMm) || e.fitMm < 5 || e.fitMm > 1e3)
    )
      throw Error("Longest side must be 5\u20131,000 mm.");
  }
}
async function parseImportedAsset(s, e) {
  if (s.byteLength > x3) throw Error("Choose an object smaller than 8 MB.");
  let t,
    n = {},
    r = [];
  if (e === "glb") {
    let d = new DataView(s);
    if (
      d.byteLength < 20 ||
      d.getUint32(0, !0) !== 1179937895 ||
      d.getUint32(4, !0) !== 2 ||
      d.getUint32(8, !0) !== s.byteLength
    )
      throw Error("Choose a valid GLB 2.0 file.");
    let f = d.getUint32(12, !0);
    if (d.getUint32(16, !0) !== 1313821514 || f + 20 > s.byteLength)
      throw Error("Invalid GLB JSON chunk.");
    let p = JSON.parse(new TextDecoder().decode(new Uint8Array(s, 20, f)));
    if (
      [...(p.buffers || []), ...(p.images || [])].some(
        (P) => P.uri && !P.uri.startsWith("data:"),
      )
    )
      throw Error(
        "Export a self-contained GLB with embedded textures and buffers.",
      );
    if (
      (p.extensionsUsed || []).some((P) =>
        [
          "KHR_draco_mesh_compression",
          "EXT_meshopt_compression",
          "KHR_texture_basisu",
        ].includes(P),
      )
    )
      throw Error(
        "Export an uncompressed GLB with PNG/JPEG textures. Draco, Meshopt and KTX2 are not supported.",
      );
    if (
      (p.accessors || []).some(
        (P) => !Number.isInteger(P.count) || P.count < 0 || P.count > 135e4,
      ) ||
      (p.nodes || []).length > 2048
    )
      throw Error("This model is too complex. Simplify it before importing.");
    let b = new Vo();
    b.setURLModifier((P) => {
      if (!/^(data:|blob:)/.test(P))
        throw Error("External asset URLs are not supported.");
      return P;
    });
    let H = await new Gl(b).parseAsync(s, "");
    ((t = H.scene),
      (n = t.userData.armature || {}),
      H.animations.length &&
        r.push(
          "Animation is ignored; this object uses its saved static pose.",
        ));
  } else if (e === "stl") {
    let d = new kl().parse(s);
    (d.computeVertexNormals(),
      (t = new or()),
      t.add(
        new ht(d, new os({ color: 9481145, metalness: 0.25, roughness: 0.42 })),
      ),
      r.push("STL carries geometry only. A neutral material is applied."));
  } else if (e === "obj") {
    let d = new TextDecoder().decode(s);
    ((t = new Bl().parse(d)),
      t.traverse((f) => {
        f.isMesh &&
          (f.material = new os({
            color: 9481145,
            metalness: 0.25,
            roughness: 0.42,
            vertexColors: !!f.geometry.attributes.color,
          }));
      }),
      r.push(
        "OBJ geometry and vertex colors are imported. MTL files and textures are ignored; use GLB to keep materials.",
      ));
  } else
    throw Error(
      "Choose a .glb, .stl or .obj file. Export Blender/CAD objects to one of these formats first.",
    );
  let i = 0,
    c = 0,
    o = 0;
  if (
    (t.traverse((d) => {
      if (d.isSkinnedMesh)
        throw Error(
          "Bake the object to a static mesh before importing skinned geometry.",
        );
      if (
        ((d.isCamera || d.isLight || d.isLine || d.isPoints) &&
          (d.visible = !1),
        d.isMesh)
      ) {
        let f = d.geometry.attributes.position;
        if (!f) return;
        ((i += f.count),
          (c += (d.geometry.index?.count || f.count) / 3),
          o++,
          (d.castShadow = !0),
          (d.receiveShadow = !0));
        for (let p = 0; p < f.count; p++)
          if (!Number.isFinite(f.getX(p) + f.getY(p) + f.getZ(p)))
            throw Error("The mesh contains invalid coordinates.");
      }
    }),
    i > 45e4)
  )
    throw Error("Use fewer than 450,000 mesh vertices.");
  if (!o || !c) throw Error("This file contains no triangle meshes.");
  t.updateMatrixWorld(!0);
  let h = new Xr().setFromObject(t).getSize(new ce());
  if (!Number.isFinite(h.length()) || h.length() < 1e-9)
    throw Error("This file contains no usable mesh geometry.");
  return {
    root: t,
    format: e,
    vertices: i,
    triangles: Math.round(c),
    meshes: o,
    metadata: n,
    warnings: r,
  };
}
function prepareImportedVisual(s, e) {
  let t = new or(),
    n = new or();
  (n.add(s.root.clone(!0)),
    e?.up === "z" && (n.rotation.x = -Math.PI / 2),
    t.add(n),
    t.updateMatrixWorld(!0));
  let r = new Xr().setFromObject(t),
    i = r.getSize(new ce()),
    c = r.getCenter(new ce()),
    o = i.toArray(),
    h = e
      ? e.fitMm
        ? e.fitMm / 1e3 / Math.max(...o)
        : Zl[e.unit]
      : 0.1 / Math.max(...o);
  (n.position.sub(c), t.scale.setScalar(h), t.updateMatrixWorld(!0));
  let d = o.map((p) => Math.max(0.005, p * h)),
    f = [];
  return (
    t.traverseVisible((p) => {
      if (!p.isMesh || !p.geometry.attributes.position) return;
      p.geometry.computeBoundingBox();
      let b = p.geometry.boundingBox.clone().applyMatrix4(p.matrixWorld);
      f.push({
        size: b
          .getSize(new ce())
          .toArray()
          .map((H) => Math.max(1e-4, H)),
        offset: b.getCenter(new ce()).toArray(),
      });
    }),
    {
      root: t,
      dimensions: d,
      sourceDimensions: o,
      parts: f,
      factor: h,
      thin: o.some((p) => p * h < 0.005),
    }
  );
}
function collisionDescription(s) {
  return s.collision?.kind === "mesh-boxes"
    ? `Compound collider \xB7 ${s.collision.parts.length} mesh boxes`
    : "Fitted box collider \xB7 holes and concavities are filled";
}
export {
  prepareImportedVisual,
  Zl,
  x3,
  parseImportedAsset,
  u7,
  validateImportedCollision,
  validateImportOptions,
  m3,
  collisionDescription,
  l7,
};
