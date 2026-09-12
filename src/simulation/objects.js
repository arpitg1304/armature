import { Yn, R, M4, Of } from "../../vendor/cannon-es.js";
var OBJECT_TYPES = {
  insertion_peg: {
    label: "Insertion peg",
    height: 0.14,
    grip: 0.028,
    kind: "cylinder",
    radius: 0.014,
  },
  blocks: {
    label: "Polymer block",
    height: 0.04,
    grip: 0.04,
    kind: "box",
    dims: [0.04, 0.04, 0.04],
  },
  cans: {
    label: "Aluminum can",
    height: 0.04,
    grip: 0.036,
    kind: "cylinder",
    radius: 0.018,
  },
  fruit: {
    label: "Orange",
    height: 0.04,
    grip: 0.04,
    kind: "sphere",
    radius: 0.02,
  },
  pegs: {
    label: "Alignment peg",
    height: 0.055,
    grip: 0.032,
    kind: "cylinder",
    radius: 0.016,
  },
  bottles: {
    label: "Sample bottle",
    height: 0.04,
    grip: 0.034,
    kind: "bottle",
    radius: 0.017,
  },
  tiles: {
    label: "Circuit module",
    height: 0.024,
    grip: 0.038,
    kind: "box",
    dims: [0.045, 0.024, 0.038],
  },
  spools: {
    label: "Cable spool",
    height: 0.044,
    grip: 0.042,
    kind: "spool",
    radius: 0.013,
  },
  mixed: { label: "Mixed parts kit" },
};
function getObjectSpec(u, a = 0) {
  let l = u === "mixed" ? ["blocks", "pegs", "bottles"][a % 3] : u;
  if (!OBJECT_TYPES[l] || l === "mixed")
    throw Error("Unknown object type: " + u);
  return { id: l, ...OBJECT_TYPES[l] };
}
function addObjectCollisionShapes(u, a, l) {
  let v = (x) => new Yn(new R(...x.map((w) => (w * l) / 2))),
    m = (x, w) => new M4(x * l, x * l, w * l, 24);
  if (a.kind === "compound")
    for (let x of a.parts)
      u.addShape(v(x.size), new R(...x.offset.map((w) => w * l)));
  else if (a.kind === "box") u.addShape(v(a.dims));
  else if (a.kind === "sphere") u.addShape(new Of(a.radius * l));
  else if (a.kind === "bottle")
    (u.addShape(m(a.radius, 0.04)),
      u.addShape(m(0.008, 0.018), new R(0, 0.029 * l, 0)),
      u.addShape(m(0.009, 0.006), new R(0, 0.041 * l, 0)));
  else if (a.kind === "spool") {
    u.addShape(m(a.radius, 0.044));
    for (let x of [-0.019, 0.019])
      u.addShape(m(0.021, 0.006), new R(0, x * l, 0));
  } else u.addShape(m(a.radius, a.height));
}
function createObjectVisual(u, a, l) {
  let v = new u.Group(),
    m = new u.MeshStandardMaterial({
      color: l,
      roughness: a.id === "cans" ? 0.25 : 0.44,
      metalness: a.id === "cans" ? 0.8 : a.id === "pegs" ? 0.6 : 0.12,
    }),
    x = new u.MeshStandardMaterial({
      color: "#243440",
      roughness: 0.45,
      metalness: 0.35,
    }),
    w = (z, j = m, N = 0) => {
      let V = new u.Mesh(z, j);
      ((V.position.y = N),
        (V.castShadow = !0),
        (V.receiveShadow = !0),
        v.add(V));
    };
  if (a.kind === "compound")
    for (let z of a.parts) {
      let j = new u.Mesh(new u.BoxGeometry(...z.size), m);
      (j.position.fromArray(z.offset),
        (j.castShadow = !0),
        (j.receiveShadow = !0),
        v.add(j));
    }
  else if (a.kind === "box") {
    if ((w(new u.BoxGeometry(...a.dims)), a.id === "tiles")) {
      w(new u.BoxGeometry(0.03, 0.002, 0.02), x, 0.013);
      for (let z of [-0.017, 0.017]) {
        let j = new u.Mesh(
          new u.BoxGeometry(0.004, 0.005, 0.026),
          new u.MeshStandardMaterial({
            color: "#bdaf77",
            metalness: 0.8,
            roughness: 0.25,
          }),
        );
        (j.position.set(z, 0.004, 0), v.add(j));
      }
    }
  } else if (a.kind === "sphere") w(new u.SphereGeometry(a.radius, 24, 16));
  else if (a.kind === "bottle")
    (w(new u.CylinderGeometry(0.017, 0.017, 0.04, 32)),
      w(new u.CylinderGeometry(0.008, 0.008, 0.018, 24), m, 0.029),
      w(new u.CylinderGeometry(0.009, 0.009, 0.006, 24), x, 0.041),
      w(
        new u.CylinderGeometry(0.0172, 0.0172, 0.012, 32),
        new u.MeshStandardMaterial({ color: "#e7eadb", roughness: 0.85 }),
        -0.002,
      ));
  else if (a.kind === "spool") {
    w(new u.CylinderGeometry(0.013, 0.013, 0.044, 24), x);
    for (let z of [-0.019, 0.019])
      w(new u.CylinderGeometry(0.021, 0.021, 0.006, 32), m, z);
    for (let z of [-0.008, 0, 0.008])
      w(new u.TorusGeometry(0.0135, 0.0015, 6, 32), m, z);
    v.children.slice(3).forEach((z) => (z.rotation.x = Math.PI / 2));
  } else
    (w(new u.CylinderGeometry(a.radius, a.radius, a.height, 32)),
      a.id === "pegs" &&
        w(
          new u.CylinderGeometry(a.radius * 0.99, a.radius * 0.99, 0.008, 32),
          x,
          a.height * 0.23,
        ));
  return v;
}
export {
  getObjectSpec,
  addObjectCollisionShapes,
  OBJECT_TYPES,
  createObjectVisual,
};
