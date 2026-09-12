import { getRobotModel } from "../robots/models.js";
import { K1, R, Ja, Qa, re, Yn, Of, Zn, xt } from "../../vendor/cannon-es.js";
import {
  getObjectSpec,
  addObjectCollisionShapes,
  OBJECT_TYPES,
} from "./objects.js";
import { createPandaDynamics } from "./panda-dynamics.js";
import { installTrialTasks } from "../experiments/trials.js";
import { installLightingTask } from "../scenes/lighting.js";
import { installAuthoredTasks } from "../authoring/task-runner.js";
var PANDA_JOINT_NAMES = getRobotModel("panda").names;
function seededRandom(u) {
  let a = u >>> 0;
  return () => {
    a += 1831565813;
    let l = Math.imul(a ^ (a >>> 15), 1 | a);
    return (
      (l ^= l + Math.imul(l ^ (l >>> 7), 61 | l)),
      ((l ^ (l >>> 14)) >>> 0) / 4294967296
    );
  };
}
var clamp = (u, a, l) => Math.max(a, Math.min(l, u)),
  RobotEnvironment = class {
    constructor(u, a = "panda") {
      ((this.T = u),
        (this.model = getRobotModel(a)),
        (this.n = this.model.armNames.length),
        (this.dof = this.n + 1),
        (this.names = this.model.names),
        (this.root = new u.Group()),
        (this.root.position.x = this.model.baseX),
        (this.root.rotation.x = -Math.PI / 2),
        (this.links = { [this.model.base]: new u.Group() }),
        this.root.add(this.links[this.model.base]),
        (this.joints = []),
        (this.arm = []),
        (this.fingers = []));
      for (let l of this.model.asset.joints) {
        let v = new u.Group(),
          m = new u.Group();
        (v.position.fromArray(l.xyz),
          v.rotation.set(...l.rpy, "ZYX"),
          this.links[l.parent].add(v),
          v.add(m),
          (m.name = l.child),
          (this.links[l.child] = m));
        let x = { ...l, origin: v, link: m, axisV: new u.Vector3(...l.axis) };
        (this.joints.push(x), l.type === "prismatic" && this.fingers.push(x));
      }
      ((this.arm = this.model.armNames.map((l) =>
        this.joints.find((v) => v.name === l),
      )),
        (this.jaw = this.joints.find((l) => l.name === this.model.jawName)),
        (this.q = this.model.home.slice()),
        (this.target = this.q.slice()),
        (this.qdot = Array(this.dof).fill(0)),
        this.fk(),
        this.reset({ seed: 1 }));
    }
    fk(u = this.q) {
      for (let a of this.joints)
        (a.link.position.set(0, 0, 0), a.link.quaternion.identity());
      for (let a = 0; a < this.n; a++)
        this.arm[a].link.quaternion.setFromAxisAngle(this.arm[a].axisV, u[a]);
      return (
        this.jaw
          ? this.jaw.link.quaternion.setFromAxisAngle(this.jaw.axisV, u[this.n])
          : this.fingers.forEach((a) =>
              a.link.position.copy(a.axisV).multiplyScalar(u[this.n] / 2),
            ),
        this.root.updateMatrixWorld(!0),
        u === this.q && this.dynamics?.syncVisuals(),
        this.tcp()
      );
    }
    tcp() {
      return this.links[this.model.tcp].getWorldPosition(new this.T.Vector3());
    }
    get hand() {
      return this.links[this.model.hand];
    }
    get isOpen() {
      return this.q[this.n] > this.model.open * 0.75;
    }
    ik(u, a = this.q, l = 55, v = null) {
      let m = this.T,
        x = a.slice(),
        w =
          v?.clone() ||
          new m.Quaternion().setFromAxisAngle(
            new m.Vector3(1, 0, 0),
            Math.PI / 2,
          ),
        z = 1 / 0;
      for (let j = 0; j < l; j++) {
        let N = this.fk(x),
          V = w
            .clone()
            .multiply(
              this.links[this.model.tcp]
                .getWorldQuaternion(new m.Quaternion())
                .invert(),
            );
        if (
          (V.w < 0 && ((V.x *= -1), (V.y *= -1), (V.z *= -1), (V.w *= -1)),
          this.n === 5 && !v)
        ) {
          let _ = new m.Vector3(0, 0, 1)
            .applyQuaternion(
              this.links[this.model.tcp].getWorldQuaternion(new m.Quaternion()),
            )
            .cross(new m.Vector3(0, -1, 0));
          V.set(_.x / 2, _.y / 2, _.z / 2, 1);
        }
        let S = [u.x - N.x, u.y - N.y, u.z - N.z, V.x * 2, V.y * 2, V.z * 2];
        if (
          ((z = Math.hypot(...S.slice(0, 3))),
          z < 3e-4 && Math.hypot(...S.slice(3)) < 0.002)
        )
          break;
        let G = this.arm.map((_) => {
            let ue = _.axisV
                .clone()
                .applyQuaternion(
                  _.origin.getWorldQuaternion(new m.Quaternion()),
                ),
              he = _.origin.getWorldPosition(new m.Vector3());
            return [
              ...ue.clone().cross(N.clone().sub(he)).toArray(),
              ...ue.toArray(),
            ];
          }),
          B = Array.from({ length: 6 }, (_, ue) =>
            Array.from({ length: 7 }, (he, ve) =>
              ve === 6
                ? S[ue]
                : G.reduce((we, je) => we + je[ue] * je[ve], 0) +
                  (ue === ve ? 9e-4 : 0),
            ),
          );
        for (let _ = 0; _ < 6; _++) {
          let ue = _;
          for (let ve = _ + 1; ve < 6; ve++)
            Math.abs(B[ve][_]) > Math.abs(B[ue][_]) && (ue = ve);
          [B[_], B[ue]] = [B[ue], B[_]];
          let he = B[_][_];
          for (let ve = _; ve < 7; ve++) B[_][ve] /= he;
          for (let ve = 0; ve < 6; ve++)
            if (ve !== _) {
              let we = B[ve][_];
              for (let je = _; je < 7; je++) B[ve][je] -= we * B[_][je];
            }
        }
        for (let _ = 0; _ < this.n; _++) {
          let ue = G[_].reduce((ve, we, je) => ve + we * B[je][6], 0),
            he = this.arm[_].limit;
          x[_] = clamp(
            x[_] + clamp(ue, -0.16, 0.16),
            he.lower + 0.02,
            he.upper - 0.02,
          );
        }
      }
      return (this.fk(), { q: x, residual: z });
    }
    reset(u = {}) {
      if (u.physicsMode === "dynamic" && this.model.id !== "panda")
        throw Error("Dynamics mode supports Panda only.");
      if (
        u.physicsMode !== void 0 &&
        !["kinematic", "dynamic"].includes(u.physicsMode)
      )
        throw Error("Unknown physics mode");
      if (((this.dynamics = null), u.robotId && u.robotId !== this.model.id))
        throw Error("Create an environment for the requested robot.");
      ((this.config = {
        physicsMode: "kinematic",
        effortScale: 1,
        robotId: this.model.id,
        sizeScale: this.model.sizeScale,
        seed: 1,
        task: "transfer",
        object: "blocks",
        friction: 0.8,
        mass: 0.06,
        randomize: !1,
        maxSteps: 1800,
        ...u,
      }),
        this.config.task === "insert" &&
          ((this.config.object = "insertion_peg"),
          (this.config.objectCount = 1)),
        (this.insertionFixture = null));
      let a = seededRandom(this.config.seed);
      ((this.world = new K1({ gravity: new R(0, -9.81, 0) })),
        (this.world.solver.iterations = 45),
        (this.world.solver.tolerance = 1e-8),
        (this.world.allowSleep = !1),
        (this.world.defaultContactMaterial.friction = this.config.friction),
        (this.world.defaultContactMaterial.restitution = 0.02),
        (this.world.defaultContactMaterial.contactEquationStiffness = 1e7),
        (this.world.defaultContactMaterial.contactEquationRelaxation = 4),
        (this.objectMat = new Ja("objects")),
        (this.padMat = new Ja("pads")),
        this.world.addContactMaterial(
          new Qa(this.objectMat, this.padMat, {
            friction: this.config.padFriction ?? 2.8,
            restitution: 0,
            contactEquationStiffness: 1e6,
            contactEquationRelaxation: 4,
          }),
        ),
        this.world.addContactMaterial(
          new Qa(this.objectMat, this.objectMat, {
            friction: this.config.friction,
            restitution: 0,
          }),
        ));
      let l = new re({
        mass: 0,
        shape: new Yn(new R(1.4, 0.065, 0.925)),
        position: new R(0, -0.065, 0),
        material: this.objectMat,
      });
      (this.world.addBody(l),
        (this.objects = []),
        (this.objectSpecs = []),
        (this.goals = []));
      for (let m = 0; m < (this.config.objectCount ?? 3); m++) {
        let x = this.config.sizeScale ?? 1,
          w = getObjectSpec(this.config.object, m),
          z = new re({
            mass:
              this.config.mass * (this.config.randomize ? 0.75 + 0.5 * a() : 1),
            material: this.objectMat,
            linearDamping: 0.08,
            angularDamping: 0.15,
          });
        (addObjectCollisionShapes(z, w, x),
          z.position.set(
            (this.config.task === "return"
              ? this.model.goalX
              : this.model.spawnX) +
              (this.config.randomize ? (a() - 0.5) * 0.055 : 0),
            (w.height * x) / 2 + 0.001,
            this.model.rowZ +
              m * this.model.rowSpacing +
              (this.config.randomize ? (a() - 0.5) * 0.035 : 0),
          ),
          this.config.spawnPositions?.[m] &&
            z.position.set(...this.config.spawnPositions[m]),
          (z.position.y = (w.height * x) / 2 + 0.001),
          this.world.addBody(z),
          this.objects.push(z),
          this.objectSpecs.push(w));
        let j =
            this.config.task === "return"
              ? this.model.spawnX
              : this.model.goalX,
          N = [
            j,
            (w.height * x) / 2 + 0.001,
            this.model.rowZ + m * this.model.rowSpacing,
          ];
        (this.config.task === "stack" &&
          (N = [
            j,
            this.objectSpecs.slice(0, m).reduce((V, S) => V + S.height * x, 0) +
              (w.height * x) / 2 +
              0.001,
            0,
          ]),
          this.config.task === "kit" &&
            (N = [
              j - (m === 1 ? 0.035 * x : 0),
              (w.height * x) / 2 + 0.001,
              (m - 1) * this.model.rowSpacing * 0.65,
            ]),
          this.goals.push(N));
      }
      if (this.config.task === "insert") {
        let m = this.config.sizeScale,
          x = 0.065 * m,
          w = 0.036 * m,
          z = x,
          j = this.model.goalX,
          N = 0,
          V = (x - w) / 2,
          S = [
            { size: [V, z, x], offset: [-(x + w) / 4, z / 2, 0] },
            { size: [V, z, x], offset: [(x + w) / 4, z / 2, 0] },
            { size: [w, z, V], offset: [0, z / 2, -(x + w) / 4] },
            { size: [w, z, V], offset: [0, z / 2, (x + w) / 4] },
          ],
          G = new re({
            mass: 0,
            material: this.objectMat,
            position: new R(j, 0, N),
          });
        for (let B of S)
          G.addShape(
            new Yn(new R(...B.size.map((_) => _ / 2))),
            new R(...B.offset),
          );
        (this.world.addBody(G),
          (this.insertionFixture = {
            body: G,
            parts: S,
            x: j,
            z: N,
            height: z,
            hole: w,
          }),
          (this.config.insertion = {
            outer: x,
            hole: w,
            height: z,
            pegDiameter: 0.028 * m,
            pegLength: 0.14 * m,
            position: [j, 0, N],
          }),
          (this.goals[0] = [j, 0.07 * m + 0.001, N]));
      }
      ((this.q = this.model.home.slice()), this.fk());
      let v = this.ik(new this.T.Vector3(...this.model.homePoint));
      ((this.q = v.q),
        (this.q[this.n] = this.model.open),
        (this.target = this.q.slice()),
        (this.qdot = Array(this.dof).fill(0)),
        this.fk(),
        (this.proxies = []));
      for (let m = 0; m < this.n; m++)
        this.addProxy(
          this.arm[m].link,
          new this.T.Vector3(),
          new Of(this.model.id === "so101" ? 0.018 : m < 4 ? 0.065 : 0.047),
          "arm",
        );
      (this.jaw
        ? (this.addProxy(
            this.hand,
            new this.T.Vector3(0, 0, -0.023),
            new Yn(new R(0.024, 0.024, 0.023)),
            "hand",
          ),
          this.addProxy(
            this.hand,
            new this.T.Vector3(-0.014, -2e-4, -0.093),
            new Yn(new R(0.006, 0.0072, 0.011)),
            "finger0",
          ),
          this.addProxy(
            this.jaw.link,
            new this.T.Vector3(-0.0052, -0.072, 0.0189),
            new Yn(new R(0.0071, 0.01, 0.0072)),
            "finger1",
          ))
        : (this.addProxy(
            this.hand,
            new this.T.Vector3(0, 0, 0.025),
            new Yn(new R(0.03, 0.055, 0.024)),
            "hand",
          ),
          this.fingers.forEach((m, x) =>
            this.addProxy(
              m.link,
              new this.T.Vector3(0, x ? -0.004 : 0.004, 0.036),
              new Yn(new R(0.012, 0.004, 0.022)),
              "finger" + x,
            ),
          )),
        (this.reachGoal = this.model.reach.map(
          (m, x) =>
            m +
            (this.config.randomize
              ? (a() - 0.5) *
                (this.model.id === "so101" ? 0.04 : x === 1 ? 0.12 : 0.15)
              : 0),
        )),
        (this.steps = 0),
        (this.stable = 0),
        (this.contacts = 0),
        (this.memorySuccess = !1),
        (this.grasped = !1),
        (this.terminated = !1),
        (this.truncated = !1),
        (this.lastReward = 0),
        (this.previousDistance = this.distance()));
      for (let m = 0; m < 30; m++) this.world.step(1 / 240);
      return (
        this.config.physicsMode === "dynamic" &&
          (this.dynamics = createPandaDynamics(this, {
            Body: re,
            ConvexPolyhedron: Zn,
            Box: Yn,
            Vec3: R,
            Quaternion: xt,
          })),
        { observation: this.observe(), info: this.info() }
      );
    }
    addProxy(u, a, l, v) {
      let m = u.localToWorld(a.clone()),
        x = u.getWorldQuaternion(new this.T.Quaternion()),
        w = new re({
          type: re.KINEMATIC,
          mass: 0,
          shape: l,
          material: v.startsWith("finger") ? this.padMat : void 0,
          position: new R(...m.toArray()),
        });
      (w.quaternion.set(x.x, x.y, x.z, x.w),
        (w.collisionFilterGroup = 2),
        (w.collisionFilterMask = 1),
        this.world.addBody(w),
        this.proxies.push({ body: w, link: u, offset: a, kind: v }));
    }
    step(u) {
      if (
        !Array.isArray(u) ||
        u.length !== this.dof ||
        !u.every(Number.isFinite)
      )
        throw Error(
          "Action must contain " +
            this.dof +
            " finite values: " +
            this.names.join(", "),
        );
      if (this.terminated || this.truncated)
        throw Error("Episode ended; call reset().");
      this.target = u.map((x, w) =>
        w === this.n
          ? clamp(x, this.model.jawLimit.lower, this.model.jawLimit.upper)
          : clamp(
              x,
              this.arm[w].limit.lower + 0.02,
              this.arm[w].limit.upper - 0.02,
            ),
      );
      let a = this.q.slice();
      for (let x = 0; x < (this.dynamics?.substeps || 8); x++) {
        let w = this.dynamics?.dt || 0.004166666666666667;
        if (this.dynamics) {
          (this.dynamics.before(), this.world.step(w), this.dynamics.read());
          continue;
        }
        ((this.q = this.q.map(
          (z, j) =>
            z +
            clamp(
              this.target[j] - z,
              -(j === this.n
                ? this.model.jawSpeed
                : Math.min(0.9, this.arm[j].limit.velocity)) * w,
              (j === this.n
                ? this.model.jawSpeed
                : Math.min(0.9, this.arm[j].limit.velocity)) * w,
            ),
        )),
          this.fk());
        for (let z of this.proxies) {
          let j = z.link.localToWorld(z.offset.clone()),
            N = z.link.getWorldQuaternion(new this.T.Quaternion()),
            V = z.body;
          V.velocity.set(
            (j.x - V.position.x) / w,
            (j.y - V.position.y) / w,
            (j.z - V.position.z) / w,
          );
          let S = N.clone().multiply(
              new this.T.Quaternion(
                V.quaternion.x,
                V.quaternion.y,
                V.quaternion.z,
                V.quaternion.w,
              ).invert(),
            ),
            G = S.w < 0 ? -1 : 1;
          V.angularVelocity.set(
            (2 * S.x * G) / w,
            (2 * S.y * G) / w,
            (2 * S.z * G) / w,
          );
        }
        this.world.step(w);
      }
      ((this.qdot = this.q.map((x, w) => (x - a[w]) * 30)),
        this.steps++,
        (this.contacts = this.world.contacts.filter(
          (x) => this.objects.includes(x.bi) || this.objects.includes(x.bj),
        ).length));
      let l = this.proxies
        .filter((x) => x.kind.startsWith("finger"))
        .map(
          (x) =>
            new Set(
              this.world.contacts
                .filter((w) => w.bi === x.body || w.bj === x.body)
                .map((w) => (w.bi === x.body ? w.bj : w.bi)),
            ),
        );
      this.grasped = this.objects.some((x) => l[0].has(x) && l[1].has(x));
      let v = this.distance();
      ((this.lastReward = 5 * (this.previousDistance - v) - 0.001),
        (this.previousDistance = v));
      let m =
        this.config.task === "memory"
          ? false
          : this.config.task === "insert"
            ? this.insertionMetrics().seated && this.isOpen
            : this.config.task === "reach"
              ? v < 0.015
              : this.objects.every(
                  (x, w) =>
                    x.position.distanceTo(new R(...this.goals[w])) < 0.018 &&
                    x.velocity.length() < 0.035,
                ) && this.isOpen;
      return (
        (this.stable = m ? this.stable + 1 : 0),
        (this.terminated = this.stable >= 15),
        (this.truncated =
          !this.terminated &&
          (this.steps >= this.config.maxSteps ||
            this.objects.some((x) => x.position.y < -0.3))),
        this.terminated && (this.lastReward += 10),
        {
          observation: this.observe(),
          reward: this.lastReward,
          terminated: this.terminated,
          truncated: this.truncated,
          info: this.info(),
        }
      );
    }
    insertionMetrics() {
      let u = this.insertionFixture;
      if (!u) return null;
      let a = this.objects[0],
        l = this.config.sizeScale,
        v = a.quaternion.vmult(new R(0, 1, 0)),
        m = a.position.vsub(v.scale(0.07 * l)),
        x = (Math.acos(clamp(v.y, -1, 1)) * 180) / Math.PI,
        w = clamp(u.height - m.y, 0, u.height),
        z = v.y > 0 ? clamp((u.height - m.y) / v.y, 0, 0.14 * l) : 0,
        j = m.vadd(v.scale(z)),
        N = Math.max(
          Math.abs(m.x - u.x),
          Math.abs(m.z - u.z),
          Math.abs(j.x - u.x),
          Math.abs(j.z - u.z),
        ),
        V = u.hole / 2 - 0.014 * l,
        S = N < V + 2e-4 * l && x < 5;
      return {
        depth: S ? w : 0,
        tilt: x,
        lateral: N,
        clearance: V,
        aligned: S,
        seated:
          S &&
          m.y > -0.003 * l &&
          m.y < 0.006 * l &&
          a.velocity.length() < 0.015 &&
          a.angularVelocity.length() < 0.15,
      };
    }
    distance() {
      if (this.config.task === "memory") {
        const indices = this.config.activeIndices || [];
        return indices.length
          ? indices.reduce(
              (sum, index) =>
                sum +
                this.objects[index].position.distanceTo(
                  new R(...this.goals[index]),
                ),
              0,
            ) / indices.length
          : 0;
      }
      return this.config.task === "reach"
        ? this.tcp().distanceTo(new this.T.Vector3(...this.reachGoal))
        : this.objects.reduce(
            (u, a, l) => u + a.position.distanceTo(new R(...this.goals[l])),
            0,
          ) / this.objects.length;
    }
    observe() {
      return {
        state: this.q.slice(),
        velocity: this.qdot.slice(),
        tcp: this.tcp().toArray(),
        objectPositions: this.objects.flatMap((u) => [
          u.position.x,
          u.position.y,
          u.position.z,
        ]),
        objectOrientations: this.objects.flatMap((u) => [
          u.quaternion.x,
          u.quaternion.y,
          u.quaternion.z,
          u.quaternion.w,
        ]),
        grasped: this.grasped ? 1 : 0,
      };
    }
    info() {
      return {
        robotId: this.model.id,
        physicsMode: this.dynamics ? "dynamic" : "kinematic",
        ...(this.dynamics ? { dynamics: this.dynamics.info() } : {}),
        ...(this.insertionFixture
          ? { insertion: this.insertionMetrics() }
          : {}),
        seed: this.config.seed,
        success:
          this.config.task === "memory"
            ? !!this.memorySuccess
            : this.terminated,
        contacts: this.contacts,
        goalDistance: this.distance(),
        step: this.steps,
        physicsHz: this.dynamics ? this.config.physicsHz : 240,
        controlHz: 30,
      };
    }
    expertPlan(u = null) {
      let a = [],
        l = this.tcp().toArray(),
        v = (m, x, w, z) => {
          (a.push({
            from: l.slice(),
            p: m.slice(),
            width: x,
            seconds: w,
            name: z,
          }),
            (l = m.slice()));
        };
      if (this.config.task === "insert") {
        let m = this.config.sizeScale,
          x = this.objects[0],
          w = this.insertionFixture,
          z = 0.106 * m,
          j = Math.max(this.model.high, (0.106 + 0.065 + 0.025) * m),
          N = this.jaw
            ? clamp(this.model.close + (0.028 * m - 0.026) / 0.065, -0.15, 1.5)
            : 0.025 * m;
        return (
          v(
            [x.position.x, j, x.position.z],
            this.model.open,
            1.5,
            "Approach peg",
          ),
          v(
            [x.position.x, z, x.position.z],
            this.model.open,
            2,
            "Grasp upper peg",
          ),
          v([x.position.x, z, x.position.z], N, 1.5, "Close fingers"),
          v([x.position.x, j, x.position.z], N, 2, "Lift clear of fixture"),
          v([w.x, j, w.z], N, 2.5, "Align with square bore"),
          v([w.x, (0.106 + 0.065 + 0.008) * m, w.z], N, 2, "Approach hole"),
          v([w.x, z, w.z], N, 4, "Insert slowly"),
          v([w.x, z, w.z], this.model.open, 1.5, "Release seated peg"),
          v([w.x, j, w.z], this.model.open, 2, "Withdraw"),
          v(this.model.homePoint, this.model.open, 2, "Return home"),
          v(this.model.homePoint, this.model.open, 2, "Evaluate insertion"),
          a
        );
      }
      if (this.config.task === "reach")
        return (
          v(this.reachGoal, this.model.open, 3, "Reach target"),
          v(this.reachGoal, this.model.open, 1, "Hold target"),
          a
        );
      for (let m of u ||
        Array.from({ length: this.objects.length }, (x, w) => w)) {
        let x = this.objects[m],
          w = this.objectSpecs[m],
          z = [
            x.position.x,
            (w.height * this.config.sizeScale) / 2 - 0.004,
            x.position.z,
          ],
          j = this.goals[m].slice();
        j[1] -= 0.003;
        let N = this.model.high,
          V = this.jaw
            ? clamp(
                this.model.close +
                  (w.grip * this.config.sizeScale - 0.026) / 0.065,
                -0.15,
                1.5,
              )
            : (w.grip - (w.id === "cans" ? 0.004 : 0.003)) *
              this.config.sizeScale;
        (v([z[0], N, z[2]], this.model.open, 1.5, "Approach " + (m + 1)),
          v(z, this.model.open, 2, "Descend"),
          v(z, V, 1.3, "Close fingers"),
          v([z[0], N, z[2]], V, 2, "Lift"),
          v([j[0], N, j[2]], V, 2, "Transfer"),
          v(j, V, 2, "Lower"),
          v(j, this.model.open, 1.3, "Release"),
          v([j[0], N, j[2]], this.model.open, 1.5, "Withdraw"));
      }
      return (
        v(this.model.homePoint, this.model.open, 1.5, "Home"),
        v(this.model.homePoint, this.model.open, 1, "Evaluate stability"),
        a
      );
    }
  };
(installTrialTasks(RobotEnvironment, { Body: re, Box: Yn, Vec3: R }),
  installLightingTask(RobotEnvironment),
  installAuthoredTasks(RobotEnvironment, {
    Body: re,
    Box: Yn,
    Vec3: R,
    Material: Ja,
    ContactMaterial: Qa,
    addShapes: addObjectCollisionShapes,
    getSpec: getObjectSpec,
    types: Object.keys(OBJECT_TYPES),
  }));
export { PANDA_JOINT_NAMES, seededRandom, RobotEnvironment };
