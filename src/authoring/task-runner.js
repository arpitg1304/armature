import { Kn, Bo, z3, validateTask, validateProject } from "./project.js";
import { g7, j7, N7, H3, $l, L7, S7, T7, O7 } from "./skills.js";
import { hr } from "../scenes/lighting.js";
var AuthoredTaskRunner = class {
  constructor(e, t) {
    ((this.env = e),
      (this.project = t),
      (this.index = 0),
      (this.elapsed = 0),
      (this.stable = 0),
      (this.status = "ready"),
      (this.reason = "Ready"),
      (this.results = t.task.stages.map(() => ({
        status: "pending",
        attempts: 0,
      }))),
      (this.events = []),
      (this.total = 0),
      (this.motion = []),
      (this.motionIndex = 0),
      (this.motionTime = 0),
      (this.finalHold = 0),
      (this.skillStates = new Map()));
  }
  get current() {
    return this.project.task.stages[this.index];
  }
  body(e = this.current) {
    return this.env.objects.find((t) => t.composerId === e?.object);
  }
  snapshot() {
    return {
      status: this.status,
      stageIndex: this.index,
      stageId: this.current?.id || null,
      stageName: this.current?.name || "Final verification",
      elapsed: this.elapsed,
      total: this.total,
      hold: this.stable,
      reason: this.reason,
      checks: this.checks || [],
      results: Kn(this.results),
      events: Kn(this.events),
    };
  }
  fail(e) {
    ((this.status = "failed"),
      (this.reason = e),
      this.results[this.index] &&
        Object.assign(this.results[this.index], {
          status: "failed",
          reason: e,
        }),
      this.events.push({
        type: "failed",
        step: this.env.steps,
        stage: this.current?.id,
        reason: e,
      }));
  }
  enter() {
    ((this.elapsed = 0),
      (this.stable = 0),
      (this.motionIndex = 0),
      (this.motionTime = 0),
      (this.status = "running"));
    let e = this.current;
    e &&
      ((this.results[this.index].status = "running"),
      this.results[this.index].attempts++,
      g7(this, e),
      this.status !== "failed" &&
        ((this.motion = this.plan(e)),
        this.events.push({
          type: "stage-start",
          stage: e.id,
          step: this.env.steps,
        }),
        (this.reason = e.name)));
  }
  plan(e) {
    let t = j7(this, e);
    if (t) return t;
    let n = this.env,
      r = this.body(e),
      i = this.project.entities.find((P) => P.id === e.object),
      c = Bo(this.project, e, n),
      o = r ? [r.position.x, r.position.y, r.position.z] : n.tcp().toArray(),
      h = Math.max(
        n.model.high,
        (i?.position[1] || 0) + e.height + 0.025,
        (c?.[1] || 0) + 0.1,
      ),
      d = i ? n.composerSpec(i).grip * i.scale : 0.035,
      f = n.jaw
        ? Math.max(-0.15, Math.min(1.5, n.model.close + (d - 0.026) / 0.065))
        : Math.max(0.003, d - 0.003),
      p = n.tcp().toArray(),
      b = [],
      H = (P, X, y) => {
        (b.push({ from: p, p: P, width: X, seconds: y }), (p = P.slice()));
      };
    return (
      e.kind === "grasp" &&
        r &&
        (H([o[0], h, o[2]], n.model.open, 1.5),
        H([o[0], o[1] - 0.004, o[2]], n.model.open, 2),
        H([o[0], o[1] - 0.004, o[2]], f, 1.3)),
      e.kind === "lift" && r && H([o[0], h, o[2]], f, 2),
      e.kind === "move" && c && H([c[0], h, c[2]], f, 2),
      e.kind === "place" && c && H([c[0], c[1] - 0.003, c[2]], f, 2),
      e.kind === "release" &&
        c &&
        (H([c[0], c[1] - 0.003, c[2]], n.model.open, 1.3),
        H([c[0], h, c[2]], n.model.open, 1.5)),
      e.kind === "retreat" && H(n.model.homePoint.slice(), n.model.open, 2),
      b
    );
  }
  action() {
    this.status === "ready" && this.enter();
    let e = this.env,
      t = this.motion[this.motionIndex],
      n = t || this.motion.at(-1);
    if (!n) return e.target.slice();
    let r = t ? Math.min(1, (this.motionTime + 1 / 30) / n.seconds) : 1,
      i = r * r * (3 - 2 * r),
      c = n.from.map((f, p) => f + (n.p[p] - f) * i),
      o = N7(this, this.current, c);
    if (!t && !o) return e.target.slice();
    let h =
        o?.orientation ||
        (n.orientation ? new e.T.Quaternion(...n.orientation) : null),
      d = e.ik(new e.T.Vector3(...(o?.position || c)), e.q, 24, h).q;
    return ((d[e.n] = n.width), d);
  }
  placement(e, t = !0) {
    let n = this.body(e),
      r = Bo(this.project, e, this.env),
      i = this.project.task.blocks?.find((O) => O.id === e.blockId),
      c = this.project.entities.find(
        (O) => O.id === (i?.kind === "extract" ? e.destination : e.target),
      );
    if (!n || !r)
      return [
        {
          label: "Object and target exist",
          pass: !1,
          value: "Missing reference",
        },
      ];
    let o = Math.hypot(
        n.position.x - r[0],
        n.position.y - r[1],
        n.position.z - r[2],
      ),
      h = new this.env.T.Quaternion().setFromEuler(
        new this.env.T.Euler(
          ...c.rotation.map((O) => (O * Math.PI) / 180),
          "XYZ",
        ),
      ),
      d =
        (2 *
          Math.acos(
            Math.min(
              1,
              Math.abs(
                n.quaternion.x * h.x +
                  n.quaternion.y * h.y +
                  n.quaternion.z * h.z +
                  n.quaternion.w * h.w,
              ),
            ),
          ) *
          180) /
        Math.PI,
      f = [
        {
          label: "Position error",
          pass: o <= e.tolerance,
          value: `${(o * 1e3).toFixed(1)} / ${(e.tolerance * 1e3).toFixed(0)} mm`,
        },
        {
          label: "Orientation error",
          pass: d <= e.angle,
          value:
            e.angle === 180
              ? "Any orientation"
              : `${d.toFixed(1)} / ${e.angle}\xB0`,
        },
      ],
      p = this.project.entities.find((O) => O.id === e.object),
      b = h.clone().invert(),
      H = new this.env.T.Quaternion(
        n.quaternion.x,
        n.quaternion.y,
        n.quaternion.z,
        n.quaternion.w,
      ),
      P = this.env.objects.find((O) => O.composerId === c.id),
      X = P?.position || {
        x: c.position[0],
        y: c.position[1],
        z: c.position[2],
      },
      y = 0;
    for (let O of [-1, 1])
      for (let D of [-1, 1])
        for (let L of [-1, 1]) {
          let g = new this.env.T.Vector3(
            O * p.dimensions[0],
            D * p.dimensions[1],
            L * p.dimensions[2],
          )
            .multiplyScalar(p.scale / 2)
            .applyQuaternion(H)
            .add(
              new this.env.T.Vector3(
                n.position.x - X.x,
                n.position.y - X.y,
                n.position.z - X.z,
              ),
            )
            .applyQuaternion(b);
          y = Math.max(
            y,
            Math.abs(g.x) - (c.dimensions[0] * c.scale) / 2,
            Math.abs(g.z) - (c.dimensions[2] * c.scale) / 2,
          );
        }
    if (i?.kind === "stack") {
      let O = new this.env.T.Vector3(
        n.position.x - X.x,
        n.position.y - X.y,
        n.position.z - X.z,
      ).applyQuaternion(b);
      f.push({
        label: "Object centered over support",
        pass:
          Math.abs(O.x) < c.dimensions[0] * c.scale * 0.35 &&
          Math.abs(O.z) < c.dimensions[2] * c.scale * 0.35,
        value: "Center within support footprint",
      });
    } else
      f.push({
        label: "Object inside target footprint",
        pass: y <= 0.002,
        value: y <= 0.002 ? "Inside" : `${(y * 1e3).toFixed(1)} mm outside`,
      });
    return (
      i?.kind === "stack" &&
        t &&
        f.push({
          label: "Supported by selected object",
          pass: this.env.world.contacts.some(
            (O) => (O.bi === n && O.bj === P) || (O.bi === P && O.bj === n),
          ),
          value: "Measured body contact",
        }),
      t &&
        (p.type === "insertion_peg"
          ? f.push(...H3(this, n))
          : f.push(
              {
                label: "Linear speed",
                pass: n.velocity.length() < 0.035,
                value: `${(n.velocity.length() * 1e3).toFixed(1)} / 35 mm/s`,
              },
              {
                label: "Angular speed",
                pass: n.angularVelocity.length() < 0.3,
                value: `${n.angularVelocity.length().toFixed(2)} / 0.30 rad/s`,
              },
            ),
        f.push({
          label: "Gripper released",
          pass: this.env.isOpen && !z3(this.env, n),
          value: this.env.isOpen ? "Open" : "Closed",
        })),
      f
    );
  }
  evaluate(e) {
    let t = $l(this, e);
    if (t) return t;
    let n = this.env,
      r = this.body(e),
      i = this.project.entities.find((o) => o.id === e.object),
      c = Bo(this.project, e, n);
    if (e.kind === "grasp")
      return [
        {
          label: "Both fingers contact selected object",
          pass: !!r && z3(n, r),
          value: r && z3(n, r) ? "Contact confirmed" : "Waiting for contact",
        },
      ];
    if (e.kind === "lift")
      return [
        {
          label: "Lift above starting height",
          pass: !!r && r.position.y >= i.position[1] + e.height,
          value: r
            ? `${((r.position.y - i.position[1]) * 1e3).toFixed(0)} / ${(e.height * 1e3).toFixed(0)} mm`
            : "Missing object",
        },
      ];
    if (e.kind === "move") {
      let o =
        r && c ? Math.hypot(r.position.x - c[0], r.position.z - c[2]) : 1 / 0;
      return [
        {
          label: "Object above destination",
          pass: o < e.tolerance && r.position.y > c[1] + 0.03,
          value: `${(o * 1e3).toFixed(1)} mm lateral`,
        },
      ];
    }
    if (["place", "release", "check"].includes(e.kind))
      return this.placement(e, e.kind !== "place");
    if (e.kind === "retreat") {
      let o = n.tcp().distanceTo(new n.T.Vector3(...n.model.homePoint));
      return [
        {
          label: "Tool at home",
          pass: o < e.tolerance,
          value: `${(o * 1e3).toFixed(1)} / ${(e.tolerance * 1e3).toFixed(0)} mm`,
        },
      ];
    }
    return [
      {
        label: "Wait duration",
        pass: !0,
        value: `${this.stable.toFixed(1)} / ${e.hold.toFixed(1)} s`,
      },
    ];
  }
  update(e = 1 / 30) {
    if (["succeeded", "failed"].includes(this.status)) return;
    if (this.status === "ready") {
      let i = validateTask(this.project);
      if (i.errors.length) {
        this.fail(i.errors[0]);
        return;
      }
      if ((this.enter(), this.status === "failed")) return;
    }
    if (
      (L7(this, e),
      (this.elapsed += e),
      (this.total += e),
      this.project.task.protectDistractors)
    )
      for (let i of this.project.entities.filter(
        (c) => c.role === "distractor",
      )) {
        let c = this.env.objects.find((o) => o.composerId === i.id);
        if (
          c &&
          Math.hypot(
            ...i.position.map(
              (o, h) => o - [c.position.x, c.position.y, c.position.z][h],
            ),
          ) > 0.015
        ) {
          this.fail(`${i.name} moved more than 15 mm.`);
          return;
        }
      }
    if (this.env.objects.some((i) => i.position.y < -0.3)) {
      this.fail("An object fell off the table.");
      return;
    }
    if (!this.current) {
      this.checks = S7(this);
      let i = this.checks.every((c) => c.pass);
      ((this.finalHold = i ? this.finalHold + e : 0),
        (this.reason = "Final task verification"),
        this.finalHold >= 0.5
          ? ((this.status = "succeeded"),
            (this.reason = "All stages and final checks passed."),
            this.events.push({ type: "succeeded", step: this.env.steps }))
          : this.elapsed > 6 &&
            this.fail("A completed goal no longer meets its conditions."));
      return;
    }
    let t = this.current;
    if ((T7(this, t, e), this.status === "failed")) return;
    let n = this.motion[this.motionIndex];
    (n &&
      ((this.motionTime += e),
      this.motionTime >= n.seconds &&
        ((this.motionTime = 0), this.motionIndex++)),
      (this.checks = this.evaluate(t)));
    let r =
      this.checks.every((i) => i.pass) &&
      this.motionIndex >= this.motion.length;
    if (
      ((this.stable = r ? this.stable + e : 0),
      r && this.stable + 1e-8 >= t.hold)
    ) {
      (Object.assign(this.results[this.index], {
        status: "passed",
        seconds: this.elapsed,
      }),
        this.events.push({
          type: "stage-passed",
          stage: t.id,
          step: this.env.steps,
        }),
        this.index++,
        this.enter());
      return;
    }
    if (this.elapsed >= t.timeout) {
      let i =
        this.checks.find((c) => !c.pass)?.label ||
        "Motion or hold duration exceeded timeout";
      if (this.results[this.index].attempts <= t.retries) {
        let c = t.recovery
          ? this.project.task.stages.findIndex((o) => o.id === t.recovery)
          : this.index;
        this.events.push({
          type: "retry",
          stage: t.id,
          step: this.env.steps,
          reason: i,
        });
        for (let o = Math.max(0, c); o <= this.index; o++)
          this.results[o].status = "pending";
        ((this.index = Math.max(0, c)), this.enter());
      } else this.fail(`${t.name}: ${i.toLowerCase()}.`);
    } else
      this.reason =
        this.checks.find((i) => !i.pass)?.label || "Holding success conditions";
  }
};
function installAuthoredTasks(
  s,
  {
    Body: e,
    Box: t,
    Vec3: n,
    Material: r,
    ContactMaterial: i,
    addShapes: c,
    getSpec: o,
    types: h,
  },
) {
  let d = s.prototype.reset,
    f = s.prototype.step,
    p = s.prototype.info,
    b = s.prototype.distance,
    H = s.prototype.expertPlan;
  ((s.prototype.composerSpec = function (P) {
    return P.type === "glb" && P.collision?.kind === "mesh-boxes"
      ? {
          id: "glb",
          label: P.name,
          kind: "compound",
          dims: P.dimensions.slice(),
          height: P.dimensions[1],
          grip: P.dimensions[2],
          parts: Kn(P.collision.parts),
        }
      : P.type === "socket"
        ? {
            id: "socket",
            label: P.name,
            kind: "compound",
            dims: P.dimensions.slice(),
            height: P.dimensions[1],
            parts: O7(P),
          }
        : ["box", "glb", "zone"].includes(P.type)
          ? {
              id: P.type,
              label: P.name,
              kind: "box",
              dims: P.dimensions.slice(),
              height: P.dimensions[1],
              grip: P.dimensions[2],
            }
          : o(P.type);
  }),
    (s.prototype.reset = function (P = {}) {
      let X = P.composition ? validateProject(P.composition, h) : null;
      ((this.taskRunner = null),
        (this.composerFixtures = []),
        (this.composerButton = null),
        (this.skillWorkLights = void 0),
        (this.skillLightRevision = 0));
      let y = d.call(
        this,
        X
          ? {
              ...P,
              task: "transfer",
              object: "blocks",
              objectCount: 1,
              randomize: !1,
            }
          : P,
      );
      if (!X) return y;
      ((this.config.composition = X),
        (this.skillWorkLights = this.config.lighting?.workOn !== !1),
        this.objects.forEach((O) => this.world.removeBody(O)),
        (this.objects = []),
        (this.objectSpecs = []),
        (this.goals = []));
      for (let O of X.entities.filter((D) => D.role !== "zone")) {
        let D = new r({ friction: Math.sqrt(O.friction), restitution: 0 });
        (this.world.addContactMaterial(
          new i(D, this.objectMat, { friction: O.friction, restitution: 0 }),
        ),
          this.world.addContactMaterial(
            new i(D, this.padMat, {
              friction: this.config.padFriction ?? 2.8,
              restitution: 0,
              contactEquationStiffness: 1e6,
              contactEquationRelaxation: 4,
            }),
          ));
        let L = new e({
            mass: O.role === "fixture" ? 0 : O.mass,
            material: D,
            linearDamping: 0.08,
            angularDamping: 0.15,
          }),
          g = this.composerSpec(O);
        (c(L, g, O.scale), L.position.set(...O.position));
        let q = new this.T.Quaternion().setFromEuler(
          new this.T.Euler(
            ...O.rotation.map((F) => (F * Math.PI) / 180),
            "XYZ",
          ),
        );
        if (
          (L.quaternion.set(q.x, q.y, q.z, q.w),
          (L.composerId = O.id),
          this.world.addBody(L),
          O.role === "fixture")
        )
          this.composerFixtures.push({ entity: O, body: L });
        else {
          (this.objects.push(L), this.objectSpecs.push(g));
          let F = X.task.stages.find((C) => C.object === O.id && C.target),
            T = F && Bo(X, F);
          this.goals.push(T || O.position.slice());
        }
      }
      if (X.task.blocks?.some((O) => O.kind === "press")) {
        let O = hr.y - 0.005,
          D = new e({
            mass: 0.025,
            material: this.objectMat,
            shape: new t(new n(0.023, 0.005, 0.023)),
            position: new n(hr.x, O, hr.z),
            linearDamping: 0.5,
          });
        (D.linearFactor.set(0, 1, 0), D.angularFactor.set(0, 0, 0));
        let L = new e({
          mass: 0,
          shape: new t(new n(0.025, 0.004, 0.025)),
          position: new n(hr.x, O - 0.015, hr.z),
          material: this.objectMat,
        });
        (this.world.addBody(D),
          this.world.addBody(L),
          (this.composerButton = { body: D, restY: O, contact: !1 }),
          this.world.addEventListener("preStep", () => {
            D.force.y +=
              0.025 * 9.81 + (O - D.position.y) * 160 - D.velocity.y * 0.9;
          }));
      }
      return (
        (this.config.authoredContact = { pegTorsionLength: 0.003 }),
        this.world.addEventListener("preStep", () => {
          for (let O = 0; O < this.objects.length; O++) {
            if (this.objectSpecs[O].id !== "insertion_peg") continue;
            let D = this.objects[O];
            for (let L of this.proxies.filter((g) =>
              g.kind.startsWith("finger"),
            )) {
              let g = this.world.contacts.filter(
                (W) =>
                  (W.bi === D && W.bj === L.body) ||
                  (W.bi === L.body && W.bj === D),
              );
              if (!g.length) continue;
              let q = g.reduce((W, $) => W + Math.max(0, $.multiplier || 0), 0),
                F = g[0].ni,
                T = D.angularVelocity.vsub(L.body.angularVelocity),
                C =
                  D.invInertiaWorld.vmult(F).dot(F) +
                  L.body.invInertiaWorld.vmult(F).dot(F);
              if (C <= 0 || q <= 0) continue;
              let M = q * 0.003,
                E = Math.max(
                  -M,
                  Math.min(
                    M,
                    (-T.dot(F) / C / (this.world.dt || 1 / 240)) * 0.22,
                  ),
                );
              for (let W of ["x", "y", "z"]) {
                let $ = F[W] * E;
                ((D.torque[W] += $), (L.body.torque[W] -= $));
              }
            }
          }
        }),
        (this.config.objectCount = this.objects.length),
        (this.previousDistance = this.distance()),
        (this.stable = 0),
        (this.terminated = !1),
        (this.truncated = !1),
        (this.taskRunner = new AuthoredTaskRunner(this, X)),
        { observation: this.observe(), info: this.info() }
      );
    }),
    (s.prototype.distance = function () {
      return this.config?.composition && !this.objects.length
        ? 0
        : b.call(this);
    }),
    (s.prototype.step = function (P) {
      let X = f.call(this, P);
      return this.taskRunner
        ? (this.taskRunner.update(),
          (this.terminated = this.taskRunner.status === "succeeded"),
          (this.truncated =
            this.taskRunner.status === "failed" ||
            (!this.terminated && this.steps >= this.config.maxSteps)),
          this.truncated &&
            this.taskRunner.status !== "failed" &&
            this.taskRunner.fail("Episode time limit reached."),
          (this.lastReward = this.terminated ? 1 : this.truncated ? -1 : 0),
          {
            ...X,
            reward: this.lastReward,
            terminated: this.terminated,
            truncated: this.truncated,
            info: this.info(),
          })
        : X;
    }),
    (s.prototype.info = function () {
      let P = p.call(this);
      return (
        this.taskRunner &&
          ((P.authoredTask = this.taskRunner.snapshot()),
          (P.authoredTask.workLights = this.skillWorkLights),
          this.composerButton &&
            (P.authoredTask.buttonTravel = Math.max(
              0,
              this.composerButton.restY - this.composerButton.body.position.y,
            ))),
        P
      );
    }),
    (s.prototype.expertPlan = function (...P) {
      return this.taskRunner
        ? this.taskRunner.project.task.stages.flatMap((X) =>
            this.taskRunner.plan(X).map((y) => ({ ...y, name: X.name })),
          )
        : H.apply(this, P);
    }));
}
export { installAuthoredTasks };
