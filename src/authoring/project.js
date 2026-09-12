import { Ao, Or, w3, Fa, P3 } from "./skills.js";
import {
  validateImportedCollision,
  validateImportOptions,
} from "./import-assets.js";
var Kn = (s) => JSON.parse(JSON.stringify(s)),
  vs = (s) => s + "-" + Math.random().toString(36).slice(2, 10),
  Ra = {
    grasp: "Grasp",
    lift: "Lift",
    move: "Transport",
    place: "Lower into target",
    release: "Release & settle",
    retreat: "Withdraw",
    wait: "Wait",
    check: "Check placement",
    ...Ao,
  },
  ei = (s, e, t, n) => {
    if (!Number.isFinite(s) || s < e || s > t)
      throw Error(`${n} must be between ${e} and ${t}.`);
    return s;
  },
  y3 = (s, e, t, n) => {
    if (!Array.isArray(s) || s.length !== 3)
      throw Error(`${n} needs X, Y and Z.`);
    return s.map((r) => ei(r, e, t, n));
  },
  Ys = (s, e) => {
    if (typeof s != "string" || !s.trim() || s.length > 100)
      throw Error(`${e} must contain 1\u2013100 characters.`);
    return s.trim();
  };
function validateProject(s, e) {
  if (!s || s.format !== "armature-project" || s.version !== 1)
    throw Error("Choose an Armature project JSON (version 1).");
  let t = Kn(s);
  if (
    ((t.name = Ys(t.name, "Project name")),
    !["panda", "so101", "ur5e", "xarm6"].includes(t.robotId))
  )
    throw Error("Unsupported robot.");
  if (
    !["kinematic", "dynamic"].includes(t.physicsMode) ||
    (t.physicsMode === "dynamic" && t.robotId !== "panda")
  )
    throw Error("Dynamic mode requires Panda.");
  if (!Array.isArray(t.entities) || t.entities.length > 32)
    throw Error("A project supports up to 32 objects and targets.");
  let n = new Set();
  for (let h of t.entities) {
    if ((Ys(h.id, "Object ID"), n.has(h.id)))
      throw Error("Object IDs must be unique.");
    if (
      (n.add(h.id),
      (h.name = Ys(h.name, "Object name")),
      !["part", "fixture", "zone", "distractor"].includes(h.role))
    )
      throw Error("Unsupported object role.");
    if (
      !e.includes(h.type) &&
      !["box", "zone", "glb", "socket"].includes(h.type)
    )
      throw Error("Unsupported object type.");
    if (
      (y3(h.position, -1.3, 1.3, "Position"),
      y3(h.rotation, -360, 360, "Rotation"),
      ei(h.scale, 0.1, 4, "Scale"),
      y3(h.dimensions, 0.005, 1, "Dimensions"),
      ei(h.mass, 0.005, 5, "Mass"),
      ei(h.friction, 0, 2, "Friction"),
      h.type === "socket")
    ) {
      if (h.role !== "fixture")
        throw Error("A socket must be a fixed fixture.");
      ei(
        h.hole,
        0.008,
        Math.min(h.dimensions[0], h.dimensions[2]) - 0.008,
        "Socket opening",
      );
    }
    if (!/^#[\da-f]{6}$/i.test(h.color)) throw Error("Choose a valid color.");
    if (
      h.type === "glb" &&
      (!t.assets?.[h.assetId] || typeof t.assets[h.assetId].data != "string")
    )
      throw Error("Imported mesh data is missing.");
    h.type === "glb" && validateImportedCollision(h);
  }
  if (
    Object.keys(t.assets || {}).length > 8 ||
    JSON.stringify(t.assets || {}).length > 18 * 1024 * 1024
  )
    throw Error("Keep imported assets under 12 MB total.");
  for (let [h, d] of Object.entries(t.assets || {})) {
    if (
      d.id !== h ||
      typeof d.data != "string" ||
      !d.data.length ||
      d.data.length > 12 * 1024 * 1024 ||
      !/^[A-Za-z0-9+/]*={0,2}$/.test(d.data)
    )
      throw Error("Invalid embedded mesh asset.");
    validateImportOptions(d);
  }
  if (!t.task || !Array.isArray(t.task.stages) || t.task.stages.length > 80)
    throw Error("A task supports up to 80 stages.");
  t.task.name = Ys(t.task.name, "Task name");
  let r = new Set();
  for (let h of t.task.stages) {
    if ((Ys(h.id, "Stage ID"), r.has(h.id)))
      throw Error("Stage IDs must be unique.");
    if (!Object.hasOwn(Ra, h.kind)) throw Error("Unsupported stage type.");
    if (h.recovery && h.recovery !== h.id && !r.has(h.recovery))
      throw Error("Recovery must restart this stage or an earlier stage.");
    if (
      (r.add(h.id),
      Ys(h.name, "Stage name"),
      ei(h.timeout, 1, 60, "Timeout"),
      ei(h.hold, 0, 5, "Hold duration"),
      ei(h.tolerance, 0.003, 0.1, "Position tolerance"),
      ei(h.height, 0.02, 0.4, "Lift height"),
      ei(h.angle, 1, 180, "Orientation tolerance"),
      ei(h.retries, 0, 2, "Retry count"),
      !Number.isInteger(h.retries))
    )
      throw Error("Retry count must be an integer.");
  }
  if (t.task.blocks !== void 0 && !Array.isArray(t.task.blocks))
    throw Error("Task blocks must be a list.");
  let i = new Map();
  for (let h of t.task.blocks || []) {
    if ((Ys(h.id, "Block ID"), i.has(h.id) || r.has(h.id)))
      throw Error("Block IDs must be unique.");
    if (!Object.hasOwn(Or, h.kind)) throw Error("Unsupported task block.");
    if (
      ((h.name = Ys(h.name, "Block name")),
      typeof h.object != "string" || typeof h.target != "string")
    )
      throw Error("A skill block needs object and target inputs.");
    if (
      (h.kind === "insert" && ei(h.depth, 0.005, 0.4, "Insertion depth"),
      h.kind === "extract" && typeof h.destination != "string")
    )
      throw Error("An extraction skill needs a destination.");
    i.set(h.id, h);
  }
  let c = new Set(),
    o = null;
  for (let h of t.task.stages) {
    if (h.blockId) {
      let d = i.get(h.blockId);
      if (!d) throw Error("A stage refers to a missing task block.");
      if (o !== d.id && c.has(d.id))
        throw Error("Keep the stages of a block together.");
      if (
        (c.add(d.id),
        h.object !== d.object ||
          h.target !== d.target ||
          h.destination !== d.destination ||
          h.depth !== d.depth)
      )
        throw Error("Edit shared inputs on the skill block.");
    }
    o = h.blockId || null;
  }
  if ([...i.keys()].some((h) => !c.has(h)))
    throw Error("A task block must contain at least one stage.");
  return ((t.task.protectDistractors = !!t.task.protectDistractors), t);
}
function validateTask(s) {
  let e = [],
    t = [],
    n = s.entities.filter((i) => ["part", "distractor"].includes(i.role)),
    r = s.task.stages;
  (r.length || e.push("Add a skill block or an individual stage."),
    !n.length &&
      r.some((i) => !w3.includes(i.kind)) &&
      e.push("Add a movable part to the scene."));
  for (let i of s.task.blocks || []) {
    let c = Fa(s, i.kind, i.object, i.target, i);
    c && e.push(`${i.name}: ${c}`);
  }
  for (let [i, c] of r.entries()) {
    let o = s.entities.find((f) => f.id === c.object),
      h = s.entities.find((f) => f.id === c.target);
    !w3.includes(c.kind) &&
      (!o || !["part", "distractor"].includes(o.role)) &&
      e.push(`Stage ${i + 1}: choose a movable object.`);
    let d = s.task.blocks?.find((f) => f.id === c.blockId);
    (!d &&
      ["move", "place", "release", "check"].includes(c.kind) &&
      h?.role !== "zone" &&
      e.push(`Stage ${i + 1}: choose a target zone.`),
      !d &&
        Object.hasOwn(Ao, c.kind) &&
        e.push(`Stage ${i + 1}: add this action through its skill block.`),
      ["grasp", "lift", "move", "place"].includes(c.kind) &&
        o?.type === "glb" &&
        t.push(
          o.collision?.kind === "mesh-boxes"
            ? "Imported meshes use compound boxes; check grasp clearance."
            : "Imported meshes use a fitted box collider; holes are filled. Check grasp clearance.",
        ));
  }
  for (let i of s.entities)
    (i.role !== "zone" &&
      (Math.abs(i.position[0]) + (i.dimensions[0] * i.scale) / 2 > 1.4 ||
        Math.abs(i.position[2]) + (i.dimensions[2] * i.scale) / 2 > 0.925) &&
      e.push(`${i.name} extends beyond the table.`),
      i.role !== "zone" &&
        i.position[1] < (i.dimensions[1] * i.scale) / 2 - 0.002 &&
        t.push(
          `${i.name} may intersect the table. Use \u201CRest on table\u201D.`,
        ));
  return { errors: [...new Set(e)], warnings: [...new Set(t)] };
}
function createStage(s, e = "", t = "") {
  return {
    id: vs("stage"),
    kind: s,
    name: Ra[s],
    object: e,
    target: t,
    timeout: s === "grasp" ? 12 : 10,
    hold: s === "release" || s === "check" ? 1 : 0.15,
    tolerance: 0.018,
    height: 0.1,
    angle: 180,
    retries: 0,
    recovery: "",
  };
}
function WO(s, e = "pick") {
  let t = s.entities.filter((i) => i.role === "part"),
    n = s.entities.filter((i) => i.role === "zone");
  return (e === "pick" ? t.slice(0, 1) : t).flatMap((i, c) =>
    ["grasp", "lift", "move", "place", "release", "retreat"].map((o) =>
      createStage(o, i.id, n[c % Math.max(1, n.length)]?.id || ""),
    ),
  );
}
function V7(s, e, t) {
  let n = {
    id: vs("block"),
    kind: "pickPlace",
    name: "Pick & place",
    object: e,
    target: t,
  };
  for (let r of s) ((r.blockId = n.id), (r.object = e), (r.target = t));
  return n;
}
function E7(s, e, t, n, r = {}) {
  var d;
  let i = Fa(s, e, t, n, r);
  if (i) throw Error(i);
  let c = Or[e];
  if (s.task.stages.length + c.stages.length > 80)
    throw Error(
      `This block needs ${c.stages.length} stages. A task supports up to 80; remove stages first.`,
    );
  let o = c.stages.map((f) => createStage(f, t, n)),
    h = V7(o, t, n);
  ((h.kind = e),
    (h.name = c.label),
    e === "insert" && (h.depth = r.depth),
    e === "extract" && (h.destination = r.destination));
  for (let f of o)
    (h.depth !== void 0 && (f.depth = h.depth),
      h.destination !== void 0 && (f.destination = h.destination),
      ["insertPeg", "extractPeg", "push"].includes(f.kind) && (f.timeout = 16),
      f.kind === "approachButton" && (f.timeout = 14),
      e === "extract" && f.kind === "release" && (f.timeout = 20),
      ["pressButton", "settlePush", "releasePeg"].includes(f.kind) &&
        (f.hold = f.kind === "pressButton" ? 0.3 : 1));
  return (
    ((d = s.task).blocks ?? (d.blocks = [])).push(h),
    s.task.stages.push(...o),
    h
  );
}
function q7(s, e, t, n, r = {}) {
  let i = s.task.blocks?.find((h) => h.id === e);
  if (!i) throw Error("Select a skill block.");
  let c = { ...i, ...r },
    o = Fa(s, i.kind, t, n, c);
  if (o) throw Error(o);
  ((i.object = t),
    (i.target = n),
    i.kind === "insert" && (i.depth = c.depth),
    i.kind === "extract" && (i.destination = c.destination));
  for (let h of s.task.stages)
    h.blockId === e &&
      ((h.object = t),
      (h.target = n),
      i.depth !== void 0 && (h.depth = i.depth),
      i.destination !== void 0 && (h.destination = i.destination));
}
function rh(s, e = "pick") {
  let t = WO(s, e);
  if (t.length > 80)
    throw Error(
      "This template exceeds the 80-stage limit. Add selected pairs instead.",
    );
  let n = [];
  for (let r = 0; r < t.length; r += 6)
    n.push(V7(t.slice(r, r + 6), t[r].object, t[r].target));
  ((s.task.stages = t), (s.task.blocks = n));
}
function ih(s) {
  let e = [],
    t = new Map((s.task.blocks || []).map((n) => [n.id, n]));
  for (let n of s.task.stages) {
    let r = t.get(n.blockId);
    r && e.at(-1)?.id === r.id
      ? e.at(-1).stages.push(n)
      : e.push({ id: r?.id || n.id, block: r, stages: [n] });
  }
  return e;
}
function F7(s, e) {
  let t = new Set(
    s.task.stages.filter((n) => n.id === e || n.blockId === e).map((n) => n.id),
  );
  s.task.stages = s.task.stages.filter((n) => !t.has(n.id));
  for (let n of s.task.stages) t.has(n.recovery) && (n.recovery = "");
  s.task.blocks &&
    (s.task.blocks = s.task.blocks.filter((n) =>
      s.task.stages.some((r) => r.blockId === n.id),
    ));
}
function Ia(s, e, t) {
  let n = s.task.stages.find((o) => o.id === e),
    r = ih(s),
    i = n?.blockId ? s.task.stages.filter((o) => o.blockId === n.blockId) : r,
    c = i.findIndex((o) => o.id === e);
  return c >= 0 && c + t >= 0 && c + t < i.length;
}
function D3(s, e, t) {
  if (!Ia(s, e, t)) return;
  let n = s.task.stages.find((r) => r.id === e);
  if (n?.blockId) {
    let r = s.task.stages.indexOf(n);
    [s.task.stages[r], s.task.stages[r + t]] = [
      s.task.stages[r + t],
      s.task.stages[r],
    ];
  } else {
    let r = ih(s),
      i = r.findIndex((c) => c.id === e);
    (([r[i], r[i + t]] = [r[i + t], r[i]]),
      (s.task.stages = r.flatMap((c) => c.stages)));
  }
}
function Bo(s, e, t = null) {
  let n = P3(s, e, t);
  if (n) return n;
  let r = s.entities.find((c) => c.id === e.object),
    i = s.entities.find((c) => c.id === e.target);
  return !r || !i
    ? null
    : [
        i.position[0],
        i.position[1] + (r.dimensions[1] * r.scale) / 2 + 0.001,
        i.position[2],
      ];
}
function z3(s, e) {
  let t = s.proxies.filter((n) => n.kind.startsWith("finger"));
  return (
    t.length >= 2 &&
    t
      .slice(0, 2)
      .every((n) =>
        s.world.contacts.some(
          (r) =>
            (r.bi === e && r.bj === n.body) || (r.bj === e && r.bi === n.body),
        ),
      )
  );
}
function projectFromEnvironment(s, e = "Tabletop experiment") {
  let t = ["#db7757", "#76b7e6", "#b5d47a"],
    n = [];
  for (let r = 0; r < s.objects.length; r++) {
    let i = s.objects[r],
      c = s.objectSpecs[r],
      o = s.config.sizeScale || 1,
      h = c.dims || [c.radius * 2, c.height, c.radius * 2],
      d = new s.T.Euler().setFromQuaternion(
        new s.T.Quaternion(
          i.quaternion.x,
          i.quaternion.y,
          i.quaternion.z,
          i.quaternion.w,
        ),
        "XYZ",
      );
    n.push({
      id: "part-" + (r + 1),
      name: c.label + " " + (r + 1),
      role: "part",
      type: c.id,
      dimensions: h,
      position: [i.position.x, i.position.y, i.position.z],
      rotation: [d.x, d.y, d.z].map((p) => (p * 180) / Math.PI),
      scale: o,
      mass: i.mass,
      friction: s.config.friction,
      color: t[r % 3],
    });
    let f = s.goals[r];
    n.push({
      id: "target-" + (r + 1),
      name: "Target " + (r + 1),
      role: "zone",
      type: "zone",
      dimensions: [0.075, 0.006, 0.075],
      position: [f[0], Math.max(0, f[1] - (c.height * o) / 2 - 0.001), f[2]],
      rotation: [0, 0, 0],
      scale: o,
      mass: 0.06,
      friction: 0.8,
      color: t[r % 3],
    });
  }
  for (let [r, i] of (s.trialFixtures || []).entries())
    n.push({
      id: "fixture-" + r,
      name: "Fixture " + (r + 1),
      role: "fixture",
      type: "box",
      dimensions: i.size.slice(),
      position: i.pos.slice(),
      rotation: [0, 0, 0],
      scale: 1,
      mass: 0.1,
      friction: 0.8,
      color: "#718caa",
    });
  if (s.insertionFixture) {
    let r = s.insertionFixture;
    n.push({
      id: "insertion-socket",
      name: "Holed cube",
      role: "fixture",
      type: "socket",
      dimensions: [r.height, r.height, r.height],
      hole: r.hole,
      position: [r.x, r.height / 2, r.z],
      rotation: [0, 0, 0],
      scale: 1,
      mass: 0.1,
      friction: 0.8,
      color: "#83a4b5",
    });
  }
  return {
    format: "armature-project",
    version: 1,
    name: e,
    robotId: s.model.id,
    physicsMode: s.config.physicsMode || "kinematic",
    seed: s.config.seed,
    entities: n,
    assets: {},
    task: { name: "Pick and place", protectDistractors: !0, stages: [] },
  };
}
export {
  Kn,
  Bo,
  z3,
  validateTask,
  validateProject,
  vs,
  projectFromEnvironment,
  rh,
  F7,
  Ra,
  E7,
  createStage,
  ih,
  Ia,
  q7,
  D3,
};
