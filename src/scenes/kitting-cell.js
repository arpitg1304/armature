import { Pe, fe } from "../../vendor/fflate.js";
import Cx from "../../assets/scenes/kitting-cell.json.gz.b64";
function createKittingCell(u) {
  let a = JSON.parse(Pe(fe(Uint8Array.from(atob(Cx), (m) => m.charCodeAt(0))))),
    l = new u.Group();
  l.name = "Kitting cell / Blender";
  for (let [m, x] of Object.entries(a.groups)) {
    let w = new u.BufferGeometry();
    (w.setAttribute("position", new u.Float32BufferAttribute(x.positions, 3)),
      w.setAttribute("normal", new u.Float32BufferAttribute(x.normals, 3)),
      w.computeBoundingSphere());
    let z = new u.Color().setRGB(...x.color),
      j = new u.MeshStandardMaterial({
        color: z,
        metalness: x.metalness,
        roughness: x.roughness,
      }),
      N = new u.Mesh(w, j);
    ((N.name = m), (N.castShadow = !0), (N.receiveShadow = !0), l.add(N));
  }
  let v = new u.DirectionalLight("#e6f2f4", 0.65);
  return (v.position.set(-1, 1.5, 0.5), l.add(v), l);
}
export { createKittingCell };
