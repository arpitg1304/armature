import { hr } from "../scenes/lighting.js";
var IO = "table-work-light-switch",
  Or = {
    pickPlace: {
      label: "Pick & place",
      objectLabel: "Object",
      targetLabel: "Target zone",
      targetRole: "zone",
      stages: ["grasp", "lift", "move", "place", "release", "retreat"],
      description: "Move an object to a target and release it.",
    },
    stack: {
      label: "Stack on object",
      objectLabel: "Object to stack",
      targetLabel: "Supporting object",
      targetRole: "support",
      stages: ["grasp", "lift", "move", "place", "release", "retreat"],
      description: "Place on a supporting object and verify stable contact.",
    },
    unstack: {
      label: "Unstack",
      objectLabel: "Top object",
      targetLabel: "Destination zone",
      targetRole: "zone",
      stages: ["grasp", "lift", "move", "place", "release", "retreat"],
      description: "Remove a top object while keeping its supports in place.",
    },
    push: {
      label: "Push / slide",
      objectLabel: "Object to push",
      targetLabel: "Target zone",
      targetRole: "zone",
      stages: ["approachPush", "push", "settlePush", "retreat"],
      description: "Push along the table, then verify position and settling.",
    },
    press: {
      label: "Press button",
      objectLabel: "Button",
      targetLabel: "Work lights after press",
      targetRole: "state",
      stages: ["approachButton", "pressButton", "withdrawButton", "retreat"],
      description: "Touch the red table switch and set the work lights.",
    },
    insert: {
      label: "Insert peg",
      objectLabel: "Insertion peg",
      targetLabel: "Holed cube",
      targetRole: "socket",
      stages: [
        "graspPeg",
        "lift",
        "alignPeg",
        "insertPeg",
        "releasePeg",
        "retreat",
      ],
      description: "Align an upright peg, insert slowly and verify seating.",
    },
    extract: {
      label: "Extract peg",
      objectLabel: "Seated peg",
      targetLabel: "Holed cube",
      targetRole: "socket",
      stages: ["graspPeg", "extractPeg", "move", "place", "release", "retreat"],
      description:
        "Pull a seated peg clear, then place it in a destination zone.",
    },
  },
  Ao = {
    approachPush: "Approach push",
    push: "Push to target",
    settlePush: "Verify slide",
    approachButton: "Approach button",
    pressButton: "Press & hold",
    withdrawButton: "Release button",
    graspPeg: "Grasp upper peg",
    alignPeg: "Align above socket",
    insertPeg: "Insert slowly",
    releasePeg: "Release seated peg",
    extractPeg: "Pull clear of socket",
  },
  w3 = ["wait", "retreat", "approachButton", "pressButton", "withdrawButton"];
function qa(s, e, t = "") {
  let n = (o) => ["part", "distractor"].includes(o.role),
    r = Or[e] || Or.pickPlace,
    i =
      e === "press"
        ? [{ id: IO, name: "Red table light switch" }]
        : s.entities.filter(
            (o) =>
              n(o) &&
              (!["insert", "extract"].includes(e) ||
                o.type === "insertion_peg"),
          ),
    c =
      e === "press"
        ? [
            { id: "off", name: "Off" },
            { id: "on", name: "On" },
          ]
        : s.entities.filter(
            (o) =>
              o.id !== t &&
              (r.targetRole === "support"
                ? n(o) && ["blocks", "box", "tiles", "glb"].includes(o.type)
                : r.targetRole === "socket"
                  ? o.type === "socket" && o.role === "fixture"
                  : o.role === "zone"),
          );
  return {
    objects: i,
    targets: c,
    zones: s.entities.filter((o) => o.role === "zone"),
  };
}
function Fa(s, e, t, n, r = {}) {
  if (!Object.hasOwn(Or, e)) return "Choose a skill.";
  let { objects: i, targets: c, zones: o } = qa(s, e, t);
  if (!i.length)
    return `Add ${e === "insert" || e === "extract" ? "an insertion peg" : "a movable object"} in Scene composer first.`;
  if (!c.length)
    return `Add ${Or[e].targetLabel.toLowerCase()} in Scene composer first.`;
  if (!i.some((h) => h.id === t))
    return `Choose ${e === "press" ? "the table button" : e === "insert" || e === "extract" ? "an insertion peg" : "a movable object"}.`;
  if (!c.some((h) => h.id === n))
    return `Choose ${Or[e].targetLabel.toLowerCase()}.`;
  if (e === "press" && (s.robotId !== "panda" || s.sceneTheme !== "kitting"))
    return "The table switch uses Panda in the Blender kitting cell.";
  if (e === "extract" && !o.some((h) => h.id === r.destination))
    return "Choose a destination zone for the extracted peg.";
  if (["insert", "extract"].includes(e)) {
    let h = s.entities.find((f) => f.id === n),
      d = s.entities.find((f) => f.id === t);
    if (Math.abs(h.rotation[0]) > 0.1 || Math.abs(h.rotation[2]) > 0.1)
      return "Keep the socket upright for vertical insertion.";
    if (d.dimensions[0] * d.scale >= h.hole * h.scale - 0.001)
      return "The peg needs at least 1 mm of clearance inside this socket.";
    if (d.dimensions[1] * d.scale < h.dimensions[1] * h.scale + 0.035)
      return "Use a peg long enough to grasp above the socket.";
    if (
      e === "insert" &&
      (!Number.isFinite(r.depth) ||
        r.depth < 0.005 ||
        r.depth > h.dimensions[1] * h.scale)
    )
      return "Minimum insertion depth must fit within the socket height.";
  }
  return "";
}
function O7(s) {
  let [e, t, n] = s.dimensions,
    r = s.hole,
    i = (e - r) / 2,
    c = (n - r) / 2;
  return [
    { size: [i, t, n], offset: [-(e + r) / 4, 0, 0] },
    { size: [i, t, n], offset: [(e + r) / 4, 0, 0] },
    { size: [r, t, c], offset: [0, 0, -(n + r) / 4] },
    { size: [r, t, c], offset: [0, 0, (n + r) / 4] },
  ];
}
var Ko = (s, e) => s.project.task.blocks?.find((t) => t.id === e.blockId),
  ds = (s, e) => s.project.entities.find((t) => t.id === e),
  Ir = (s, e) =>
    s.objects.find((t) => t.composerId === e) ||
    s.composerFixtures?.find((t) => t.entity.id === e)?.body,
  pi = (s) => [s.position.x, s.position.y, s.position.z],
  z7 = (s, e, t) =>
    !!e &&
    !!t &&
    s.world.contacts.some(
      (n) => (n.bi === e && n.bj === t) || (n.bi === t && n.bj === e),
    ),
  Ec = (s, e) =>
    s.proxies.some((t) => t.kind.startsWith("finger") && z7(s, t.body, e)),
  gn = (s, e, t) => ({ label: s, pass: !!e, value: t }),
  O3 = (s, e) => Math.hypot(...s.map((t, n) => t - e[n])),
  D7 = (s) => s.dimensions[1] * s.scale * (0.106 / 0.14 - 0.5),
  CO = (s, e) => {
    let t = e ? s.composerSpec(e).grip * e.scale : 0.008;
    return s.jaw
      ? Math.max(-0.15, Math.min(1.5, s.model.close + (t - 0.026) / 0.065))
      : Math.max(0.003, t - 0.003);
  };
function L7(s, e) {
  s.pegMotion ?? (s.pegMotion = new Map());
  for (let t = 0; t < s.env.objects.length; t++) {
    if (s.env.objectSpecs[t].id !== "insertion_peg") continue;
    let n = s.env.objects[t],
      r = s.pegMotion.get(n.composerId) || [];
    (r.push({
      p: pi(n),
      q: [n.quaternion.x, n.quaternion.y, n.quaternion.z, n.quaternion.w],
      dt: e,
    }),
      r.length > 31 && r.shift(),
      s.pegMotion.set(n.composerId, r));
  }
}
function H3(s, e, t = 0.035, n = 0.3) {
  let r = s.pegMotion?.get(e.composerId) || [],
    i = 0,
    c = 0,
    o = 0;
  for (let p = 1; p < r.length; p++) {
    let b = r[p - 1],
      H = r[p];
    ((i += O3(H.p, b.p)),
      (c +=
        2 *
        Math.acos(
          Math.min(1, Math.abs(H.q.reduce((P, X, y) => P + X * b.q[y], 0))),
        )),
      (o += H.dt));
  }
  let h = o ? i / o : 1 / 0,
    d = o ? c / o : 1 / 0,
    f = o >= 0.95;
  return [
    gn(
      "Linear motion \xB7 last second",
      f && h < t,
      `${Number.isFinite(h) ? (h * 1e3).toFixed(1) : "\u2014"} / ${(t * 1e3).toFixed(0)} mm/s`,
    ),
    gn(
      "Angular motion \xB7 last second",
      f && d < n,
      `${Number.isFinite(d) ? d.toFixed(2) : "\u2014"} / ${n.toFixed(2)} rad/s`,
    ),
  ];
}
function P3(s, e, t) {
  let n = s.task.blocks?.find((h) => h.id === e.blockId);
  if (!n) return null;
  let r = s.entities.find((h) => h.id === e.object),
    i = s.entities.find(
      (h) =>
        h.id ===
        (n.kind === "extract" &&
        ["move", "place", "release", "check"].includes(e.kind)
          ? e.destination
          : e.target),
    );
  if (!r || !i) return null;
  let c = t && Ir(t, i.id),
    o = c ? pi(c) : i.position;
  return n.kind === "stack"
    ? [
        o[0],
        o[1] +
          (i.dimensions[1] * i.scale) / 2 +
          (r.dimensions[1] * r.scale) / 2 +
          0.001,
        o[2],
      ]
    : i.type === "socket"
      ? [
          o[0],
          o[1] -
            (i.dimensions[1] * i.scale) / 2 +
            (r.dimensions[1] * r.scale) / 2 +
            0.001,
          o[2],
        ]
      : n.kind === "extract"
        ? [
            i.position[0],
            i.position[1] + (r.dimensions[1] * r.scale) / 2 + 0.001,
            i.position[2],
          ]
        : null;
}
function M7(s, e) {
  let t = ds(s, e.object),
    n = ds(s, e.target),
    r = Ir(s.env, e.object);
  if (!t || !n || !r || n.type !== "socket") return null;
  let i = s.env.T,
    c = new i.Quaternion()
      .setFromEuler(
        new i.Euler(...n.rotation.map((D) => (D * Math.PI) / 180), "XYZ"),
      )
      .invert(),
    o = new i.Vector3(...pi(r))
      .sub(new i.Vector3(...n.position))
      .applyQuaternion(c),
    h = new i.Vector3(0, 1, 0)
      .applyQuaternion(
        new i.Quaternion(
          r.quaternion.x,
          r.quaternion.y,
          r.quaternion.z,
          r.quaternion.w,
        ),
      )
      .applyQuaternion(c),
    d = t.dimensions[1] * t.scale,
    f = (n.dimensions[1] * n.scale) / 2,
    p = o.clone().addScaledVector(h, -d / 2),
    b = p
      .clone()
      .addScaledVector(
        h,
        Math.max(0, Math.min(d, (f - p.y) / Math.max(0.001, h.y))),
      ),
    H = (Math.acos(Math.min(1, Math.max(-1, h.y))) * 180) / Math.PI,
    P = (n.hole * n.scale) / 2 - (t.dimensions[0] * t.scale) / 2,
    X = Math.max(Math.abs(p.x), Math.abs(p.z), Math.abs(b.x), Math.abs(b.z)),
    y = H < 5 && X <= P + 2e-4,
    O = y ? Math.max(0, Math.min(f * 2, f - p.y)) : 0;
  return {
    aligned: y,
    depth: O,
    tilt: H,
    lateral: X,
    clearance: P,
    bottom: p.y,
    half: f,
    clear: p.y > f + 0.012,
    speed: r.velocity.length(),
    spin: r.angularVelocity.length(),
  };
}
function g7(s, e) {
  let t = Ko(s, e);
  if (t) {
    if (!s.skillStates.has(t.id)) {
      let n = ds(s, e.object),
        r = Ir(s.env, e.object),
        i = Ir(s.env, e.target),
        c = {
          objectStart: r ? pi(r) : null,
          targetStart: i ? pi(i) : null,
          supports: [],
          touched: !1,
          triggered: !1,
          maxLift: 0,
        };
      if (t.kind === "unstack" && n && r) {
        let o = r.position.y - (n.dimensions[1] * n.scale) / 2;
        c.supports = s.env.objects
          .filter((h) => {
            let d = ds(s, h.composerId);
            return (
              d &&
              h !== r &&
              h.position.y < r.position.y &&
              Math.abs(h.position.y + (d.dimensions[1] * d.scale) / 2 - o) <
                0.012 &&
              Math.abs(h.position.x - r.position.x) <
                (d.dimensions[0] * d.scale + n.dimensions[0] * n.scale) / 2 &&
              Math.abs(h.position.z - r.position.z) <
                (d.dimensions[2] * d.scale + n.dimensions[2] * n.scale) / 2
            );
          })
          .map((h) => ({ id: h.composerId, position: pi(h) }));
      }
      if (
        (s.skillStates.set(t.id, c), t.kind === "unstack" && !c.supports.length)
      ) {
        s.fail(
          "Unstack needs an object resting on another object. Stack it first.",
        );
        return;
      }
      if (t.kind === "extract") {
        let o = M7(s, e);
        if (!o?.aligned || o.depth < 0.005) {
          s.fail(
            "Extract needs a peg seated in the selected socket. Insert it first.",
          );
          return;
        }
      }
      if (
        ["insert", "extract"].includes(t.kind) &&
        r &&
        new s.env.T.Vector3(0, 1, 0).applyQuaternion(
          new s.env.T.Quaternion(
            r.quaternion.x,
            r.quaternion.y,
            r.quaternion.z,
            r.quaternion.w,
          ),
        ).y < 0.985
      ) {
        s.fail("This vertical insertion skill requires an upright peg.");
        return;
      }
      if (
        t.kind === "push" &&
        n &&
        (Math.abs(c.objectStart[1] - (n.dimensions[1] * n.scale) / 2) > 0.01 ||
          Math.abs(ds(s, e.target)?.position[1] || 0) > 0.005)
      ) {
        s.fail("Push needs an object and a target on the tabletop.");
        return;
      }
    }
    s.stageObjectStart = Ir(s.env, e.object) ? pi(Ir(s.env, e.object)) : null;
  }
}
function j7(s, e) {
  let t = Ko(s, e);
  if (!t || t.kind === "pickPlace") return null;
  let n = s.env,
    r = ds(s, e.object),
    i = Ir(n, e.object),
    c = ds(s, e.target),
    o = i ? pi(i) : n.tcp().toArray(),
    h =
      P3(s.project, e, n) ||
      (c && [
        c.position[0],
        c.position[1] + (r.dimensions[1] * r.scale) / 2 + 0.001,
        c.position[2],
      ]),
    d = CO(n, r),
    f = [],
    p = n.tcp().toArray(),
    b = (H, P, X) => {
      (f.push({ from: p.slice(), p: H.slice(), width: P, seconds: X }),
        (p = H.slice()));
    };
  if (t.kind === "press") {
    let H = hr;
    return (
      e.kind === "approachButton" &&
        (b([-0.25, 0.42, 0.12], 0.006, 3),
        b([H.x, 0.32, H.z], 0.006, 4),
        b([H.x, 0.16, H.z], 0.006, 3)),
      e.kind === "pressButton" &&
        (b([H.x, 0.111, H.z], 0.006, 2), b([H.x, 0.111, H.z], 0.006, 1)),
      e.kind === "withdrawButton" && b([H.x, 0.27, H.z], 0.006, 2),
      e.kind === "retreat" ? null : f
    );
  }
  if (t.kind === "push") {
    let H = s.skillStates.get(t.id),
      P = H?.objectStart || o,
      X = h[0] - P[0],
      y = h[2] - P[2],
      O = Math.hypot(X, y),
      D = O > 0.001 ? [X / O, y / O] : [1, 0],
      L =
        ((Math.abs(D[0]) * r.dimensions[0] + Math.abs(D[1]) * r.dimensions[2]) *
          r.scale) /
        2,
      g = [
        o[0] - D[0] * (L + 0.025),
        Math.max(0.021, o[1] - 0.004),
        o[2] - D[1] * (L + 0.025),
      ];
    if (
      (e.kind === "approachPush" &&
        (b([g[0], n.model.high, g[2]], 0.006, 2), b(g, 0.006, 2)),
      e.kind === "push" &&
        b(
          [h[0] - D[0] * (L + 0.014), g[1], h[2] - D[1] * (L + 0.014)],
          0.006,
          Math.max(2, O / 0.035),
        ),
      e.kind === "settlePush")
    ) {
      let q = n.tcp();
      (b([q.x - D[0] * 0.035, q.y, q.z - D[1] * 0.035], 0.006, 1),
        b([q.x - D[0] * 0.035, n.model.high, q.z - D[1] * 0.035], 0.006, 1.5));
    }
    return e.kind === "retreat" ? null : f;
  }
  if (["insert", "extract"].includes(t.kind)) {
    let H = D7(r),
      P = c.position[1] + (c.dimensions[1] * c.scale) / 2,
      X = Math.max(
        n.model.high,
        P + (r.dimensions[1] * r.scale) / 2 + H + 0.03,
      ),
      y = [o[0], o[1] + H - 0.001, o[2]];
    if (
      (e.kind === "graspPeg" &&
        (b([o[0], X, o[2]], n.model.open, 1.5),
        b(y, n.model.open, 2),
        b(y, d, 1.5)),
      e.kind === "lift" &&
        b([o[0], Math.max(X, o[1] + H + e.height + 0.005), o[2]], d, 2),
      e.kind === "alignPeg" &&
        (b([h[0], X, h[2]], d, 2.5),
        b([h[0], P + (r.dimensions[1] * r.scale) / 2 + H + 0.008, h[2]], d, 2)),
      e.kind === "insertPeg" && b([h[0], h[1] + H - 0.001, h[2]], d, 4),
      e.kind === "releasePeg")
    ) {
      let O = n.tcp().toArray();
      (b(O, n.model.open, 1.5), b([O[0], X, O[2]], n.model.open, 2));
    }
    if (
      (e.kind === "extractPeg" && b([o[0], X, o[2]], d, 3),
      e.kind === "move" && b([h[0], X, h[2]], d, 2.5),
      e.kind === "place" && b([h[0], h[1] + H, h[2]], d, 2),
      e.kind === "release")
    ) {
      let O = n.tcp().toArray();
      (b(O, n.model.open, 1.5), b([O[0], X, O[2]], n.model.open, 2));
    }
    if (["release", "releasePeg"].includes(e.kind)) {
      let O = n.links[n.model.tcp]
        .getWorldQuaternion(new n.T.Quaternion())
        .toArray();
      for (let D of f) D.orientation = O;
    }
    return e.kind === "retreat" || e.kind === "check" ? null : f;
  }
  return null;
}
function N7(s, e, t) {
  if (
    !e ||
    !["insert", "extract"].includes(Ko(s, e)?.kind) ||
    !["lift", "alignPeg", "insertPeg", "extractPeg", "move", "place"].includes(
      e.kind,
    )
  )
    return null;
  let n = s.env,
    r = Ir(n, e.object),
    i = ds(s, e.object);
  if (!r || !Ec(n, r)) return null;
  let c = n.T,
    o = new c.Vector3(0, 1, 0).applyQuaternion(
      new c.Quaternion(
        r.quaternion.x,
        r.quaternion.y,
        r.quaternion.z,
        r.quaternion.w,
      ),
    ),
    h = new c.Quaternion().setFromUnitVectors(o, new c.Vector3(0, 1, 0)),
    d = 2 * Math.acos(Math.min(1, Math.abs(h.w)));
  h.slerp(new c.Quaternion(), 1 - Math.min(0.25, 0.025 / Math.max(1e-4, d)));
  let f = n.links[n.model.tcp]
      .getWorldQuaternion(new c.Quaternion())
      .premultiply(h),
    p = n
      .tcp()
      .sub(new c.Vector3(...pi(r)))
      .applyQuaternion(h);
  return {
    position: new c.Vector3(...t)
      .add(p)
      .sub(new c.Vector3(0, D7(i), 0))
      .toArray(),
    orientation: f,
  };
}
function T7(s, e, t) {
  let n = Ko(s, e),
    r = n && s.skillStates.get(n.id);
  if (!r) return;
  let i = s.env,
    c = Ir(i, e.object);
  if (
    n.kind === "push" &&
    c &&
    (r.touched || (r.touched = Ec(i, c)),
    (r.maxLift = Math.max(r.maxLift, c.position.y - r.objectStart[1])),
    r.maxLift > 0.012)
  ) {
    s.fail("Push failed: the object lifted more than 12 mm from the table.");
    return;
  }
  if (n.kind === "unstack")
    for (let o of r.supports) {
      let h = Ir(i, o.id);
      if (!h || O3(pi(h), o.position) > 0.015) {
        s.fail("Unstack failed: a supporting object moved more than 15 mm.");
        return;
      }
    }
  if (
    n.kind === "stack" &&
    r.targetStart &&
    Ir(i, e.target) &&
    O3(pi(Ir(i, e.target)), r.targetStart) > 0.015
  ) {
    s.fail("Stack failed: the supporting object moved more than 15 mm.");
    return;
  }
  if (e.kind === "pressButton") {
    let o = i.composerButton,
      h = o && Ec(i, o.body),
      d = o && o.restY - o.body.position.y > 8e-4;
    (o && (o.contact = h),
      (r.contactTime = h && d ? (r.contactTime || 0) + t : 0),
      !r.triggered &&
        r.contactTime >= 0.25 &&
        ((r.triggered = !0),
        (r.desiredOn = e.target === "on"),
        (i.skillWorkLights = r.desiredOn),
        i.skillLightRevision++,
        s.events.push({
          type: "button-activated",
          stage: e.id,
          step: i.steps,
          workLights: i.skillWorkLights,
        })));
  }
}
function $l(s, e) {
  let t = Ko(s, e);
  if (!t) return null;
  let n = s.env,
    r = Ir(n, e.object),
    i = s.skillStates.get(t.id),
    c = n.tcp();
  if (t.kind === "press") {
    if (e.kind === "approachButton")
      return [
        gn(
          "Tool above switch",
          Math.hypot(c.x - hr.x, c.y - 0.16, c.z - hr.z) < 0.02,
          "Within 20 mm",
        ),
      ];
    if (e.kind === "pressButton")
      return [
        gn(
          "Physical button activation",
          i?.triggered,
          "Finger contact and button travel",
        ),
        gn(
          "Requested work-light state",
          n.skillWorkLights === (e.target === "on"),
          n.skillWorkLights ? "On" : "Off",
        ),
      ];
    if (e.kind === "withdrawButton")
      return [
        gn(
          "Tool clear of switch",
          c.y > 0.205 && !Ec(n, n.composerButton?.body),
          "Released and raised",
        ),
      ];
  }
  if (t.kind === "push") {
    if (e.kind === "approachPush")
      return [
        gn(
          "Tool at push approach",
          s.motion.at(-1) &&
            c.distanceTo(new n.T.Vector3(...s.motion.at(-1).p)) < 0.025,
          "Within 25 mm",
        ),
      ];
    if (["push", "settlePush"].includes(e.kind)) {
      let o = ds(s, e.target),
        h = r
          ? Math.hypot(
              r.position.x - o.position[0],
              r.position.z - o.position[2],
            )
          : 1 / 0,
        d = [
          gn(
            "Object reached target",
            h <= e.tolerance,
            `${(h * 1e3).toFixed(1)} / ${(e.tolerance * 1e3).toFixed(0)} mm`,
          ),
          gn(
            "Pushed by finger contact",
            i?.touched,
            "Physical contact observed",
          ),
          gn(
            "Object stayed on table",
            (i?.maxLift || 0) <= 0.012,
            `${((i?.maxLift || 0) * 1e3).toFixed(1)} mm maximum lift`,
          ),
        ];
      return (
        d.push(
          s
            .placement(e, !1)
            .find((f) => f.label === "Object inside target footprint") ||
            gn("Object and target exist", !1, "Missing reference"),
        ),
        e.kind === "settlePush" &&
          d.push(
            gn(
              "Object settled",
              r &&
                r.velocity.length() < 0.035 &&
                r.angularVelocity.length() < 0.3,
              "Below 35 mm/s and 0.3 rad/s",
            ),
            gn("Tool released contact", !Ec(n, r), "Clear of object"),
          ),
        d
      );
    }
  }
  if (["insert", "extract"].includes(t.kind)) {
    if (e.kind === "graspPeg")
      return [
        gn(
          "Both fingers contact the peg",
          n.proxies
            .filter((h) => h.kind.startsWith("finger"))
            .slice(0, 2)
            .every((h) => z7(n, h.body, r)),
          "Measured peg contacts",
        ),
      ];
    if (e.kind === "lift")
      return [
        gn(
          "Peg lifted clear",
          r && r.position.y >= (i?.objectStart[1] || 0) + e.height - 0.002,
          `At least ${(e.height * 1e3).toFixed(0)} mm`,
        ),
      ];
    let o = M7(s, e);
    if (e.kind === "alignPeg")
      return [
        gn(
          "Peg aligned with bore",
          o?.aligned,
          `${o?.tilt.toFixed(1) || "\u2014"}\xB0 tilt`,
        ),
        gn(
          "Peg above opening",
          o && o.bottom >= o.half + 0.002,
          "Clear of rim",
        ),
      ];
    if (["insertPeg", "releasePeg"].includes(e.kind)) {
      let h = [
        gn(
          "Peg aligned inside bore",
          o?.aligned,
          o
            ? `${(o.lateral * 1e3).toFixed(1)} mm lateral \xB7 ${o.tilt.toFixed(1)}\xB0 tilt`
            : "Missing peg or socket",
        ),
        gn(
          "Insertion depth",
          o && o.depth >= (e.depth || 0.05) - 0.001,
          o
            ? `${(o.depth * 1e3).toFixed(1)} / ${((e.depth || 0.05) * 1e3).toFixed(0)} mm`
            : "\u2014",
        ),
        gn(
          "Peg above supporting surface",
          o && o.bottom >= -o.half - 0.003,
          "No penetration below fixture",
        ),
      ];
      return (
        e.kind === "releasePeg" &&
          h.push(
            ...(r
              ? H3(s, r, 0.015, 0.15)
              : [gn("Peg exists", !1, "Missing object")]),
            gn("Gripper released", n.isOpen && !Ec(n, r), "Open and clear"),
          ),
        h
      );
    }
    if (e.kind === "extractPeg")
      return [
        gn(
          "Peg clears socket",
          o?.clear,
          o
            ? `${((o.bottom - o.half) * 1e3).toFixed(0)} mm clearance`
            : "Missing socket",
        ),
        gn("Peg retained", Ec(n, r), "Finger contact maintained"),
      ];
  }
  return null;
}
function S7(s) {
  let e = new Map(),
    t = null;
  for (let r of s.project.task.stages)
    (["release", "check", "releasePeg", "settlePush"].includes(r.kind) &&
      e.set(r.object, r),
      r.kind === "pressButton" && (t = r));
  let n = [...e.values()].flatMap((r) =>
    ["releasePeg", "settlePush"].includes(r.kind) ? $l(s, r) : s.placement(r),
  );
  return (t && n.push(...$l(s, t)), n);
}
export { Ao, Or, w3, Fa, P3, g7, j7, N7, H3, $l, L7, S7, T7, O7, qa };
