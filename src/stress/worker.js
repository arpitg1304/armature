/** Stress worker entry. Imports the shared simulator; the original embedded worker implementation was verified equivalent before deduplication. */
import { RobotEnvironment as Me } from "../simulation/environment.js";
var v9 = "robot-frozen-pick-v2";
function x3(H, e = "panda") {
  let t = new Me(H, e);
  t.reset({ objectCount: 1, maxSteps: 700 });
  let c = [];
  for (let v of t.expertPlan()) {
    let b = Math.round(v.seconds * 30);
    for (let n = 1; n <= b; n++) {
      let u = n / b,
        r = u * u * (3 - 2 * u),
        f = v.from.map((h, z) => h + (v.p[z] - h) * r),
        d = t.ik(new H.Vector3(...f), t.q, 18).q;
      ((d[t.n] = v.width), c.push(d.slice()));
      let O = t.step(d);
      if (O.terminated || O.truncated) return c;
    }
  }
  return c;
}
function Ke(H) {
  let e = H.objects[0];
  return [
    H.steps,
    ...H.q,
    e.position.x,
    e.position.y,
    e.position.z,
    e.quaternion.x,
    e.quaternion.y,
    e.quaternion.z,
    e.quaternion.w,
  ];
}
function w3(H, e) {
  let t = new Me(H, e.config.robotId || "panda");
  return (
    t.reset(e.config),
    {
      e: t,
      scenario: e,
      frames: [Ke(t)],
      everGrip: !1,
      lifted: !1,
      lostGrip: !1,
      maxHeight: t.objects[0].position.y,
      return: 0,
    }
  );
}
function o3(H, e) {
  let t = H.e.step(e);
  H.return += t.reward;
  let c = H.e.objects[0].position.y;
  return (
    (H.maxHeight = Math.max(H.maxHeight, c)),
    H.everGrip || (H.everGrip = H.e.grasped),
    H.lifted || (H.lifted = c > (H.e.model.id === "so101" ? 0.035 : 0.09)),
    H.lostGrip ||
      (H.lostGrip =
        H.lifted &&
        !H.e.grasped &&
        c > (H.e.model.id === "so101" ? 0.035 : 0.09) &&
        !H.e.isOpen),
    (H.e.steps % 3 === 0 || t.terminated || t.truncated) &&
      H.frames.push(Ke(H.e)),
    t.terminated || t.truncated
  );
}
function D3(H) {
  H.frames.at(-1)[0] !== H.e.steps && H.frames.push(Ke(H.e));
  let e = H.e.terminated,
    t = e
      ? "success"
      : H.e.objects[0].position.y < -0.1
        ? "fell"
        : H.lifted
          ? H.lostGrip
            ? "slipped"
            : "off target"
          : "missed grasp";
  return {
    ...H.scenario,
    skillId: H.e.model.id + "-" + v9,
    success: e,
    outcome: t,
    steps: H.e.steps,
    goalError: H.e.distance(),
    return: H.return,
    everGrip: H.everGrip,
    lifted: H.lifted,
    lostGrip: H.lostGrip,
    maxHeight: H.maxHeight,
    trajectoryStride: H.e.dof + 8,
    jointNames: H.e.names,
    trajectory: new Float32Array(H.frames.flat()),
    final: H.frames.at(-1),
  };
}
var planIndex;
self.onmessage = ({ data: H }) => {
  try {
    if (H.type === "compile") {
      ((planIndex = x3(THREE, H.robotId)),
        self.postMessage({ type: "compiled", actions: planIndex }));
      return;
    }
    H.actions && (planIndex = H.actions);
    let e = w3(THREE, H.scenario);
    for (let c = 0; c < planIndex.length; c++) {
      let v = o3(e, planIndex[c]);
      if (
        (c % 45 === 0 &&
          self.postMessage({
            type: "progress",
            id: H.scenario.id,
            progress: (c + 1) / planIndex.length,
            frame: Ke(e.e),
          }),
        v)
      )
        break;
    }
    let t = D3(e);
    self.postMessage({ type: "result", result: t }, [t.trajectory.buffer]);
  } catch (e) {
    self.postMessage({ type: "error", message: e.message, id: H.scenario?.id });
  }
};
