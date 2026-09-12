import { iu, ec, ms, K, Oh } from "../../vendor/cannon-dynamics.js";
import { pandaDynamicsModel, applyLinkInertia } from "./panda-inertias.js";
var Ph = (s, e, t) => Math.max(e, Math.min(t, s)),
  sf = class extends iu {
    constructor(e, t, n, r, i, c) {
      (super(e, t),
        (this.collideConnected = !1),
        (this.axis = e.vectorToLocalFrame(n)),
        (this.home = this.pivotA.clone()),
        (this.equationZ.minForce = -r * c),
        (this.equationZ.maxForce = r * c),
        (this.initialWidth = i),
        (this.separation = t.position.vsub(e.position).dot(n)),
        (this.stop = new ec(e, t)),
        this.equations.push(this.stop));
    }
    update() {
      super.update();
      let e = this.bodyA.vectorToWorldFrame(this.axis);
      (e.tangents(this.equationX.ni, this.equationY.ni),
        this.equationZ.ni.copy(e));
      let t =
          this.bodyB.position.vsub(this.bodyA.position).dot(e) -
          this.separation +
          this.initialWidth,
        n = Ph(t, 0, 0.04);
      ((this.stop.enabled = t < 1e-4 || t > 0.0399),
        (this.stop.minForce = t < 1e-4 ? 0 : -1e5),
        (this.stop.maxForce = t > 0.0399 ? 0 : 1e5),
        this.stop.ni.copy(e),
        this.bodyA.quaternion.vmult(
          this.home.vadd(this.axis.scale(n - this.initialWidth)),
          this.stop.ri,
        ),
        this.stop.rj.copy(this.equationZ.rj));
    }
    setTravel(e) {
      this.pivotA.copy(this.home.vadd(this.axis.scale(e)));
    }
  },
  cf = class extends ms {
    constructor(e, t, n, r, i, c) {
      (super(e, t, -1e5, 1e5),
        Object.assign(this, { hinge: n, getAngle: r, lower: i, upper: c }));
    }
    computeB(e) {
      let t = this.getAngle(),
        n = this.bi.vectorToWorldFrame(this.hinge.axisA),
        r = t < this.lower,
        i = t > this.upper;
      return (
        (this.minForce = r ? 0 : -1e5),
        (this.maxForce = i ? 0 : 1e5),
        this.jacobianElementA.rotational.copy(n.negate()),
        this.jacobianElementB.rotational.copy(n),
        -(t - Ph(t, this.lower, this.upper)) * this.a -
          this.computeGW() * this.b -
          e * this.computeGiMf()
      );
    }
  };
function createPandaDynamics(s, e) {
  s.config.effortScale = Number.isFinite(s.config.effortScale)
    ? Ph(s.config.effortScale, 0, 1)
    : 1;
  let t = [240, 480, 960].includes(s.config.physicsHz)
      ? s.config.physicsHz
      : 480,
    n = 1 / t,
    r = [100, 200, 400].includes(s.config.solverIterations)
      ? s.config.solverIterations
      : 200;
  if (
    ((s.config.physicsHz = t),
    (s.config.solverIterations = r),
    (s.config.dynamicsModel = {
      version: pandaDynamicsModel.version,
      source: pandaDynamicsModel.source,
      inertials: "documented Menagerie COM and full tensors",
      collision: "source mesh convex hulls and fingertip boxes",
      selfCollision: !1,
      physicsHz: t,
      controlHz: 30,
      solverIterations: r,
      controller: "Cannon bounded velocity servo; not MJCF actuator dynamics",
      fingerForceLimitN: 20,
    }),
    s.model.id !== "panda")
  )
    throw Error("Dynamics mode currently supports Panda only.");
  let i = s.T,
    c = (g) => new K(g.x, g.y, g.z),
    o = s.proxies.filter((g) => g.kind === "arm"),
    h = s.proxies.find((g) => g.kind === "hand"),
    d = s.proxies.filter((g) => g.kind.startsWith("finger")),
    f = new e.Body({ mass: 0 });
  ((f.collisionFilterGroup = 2), (f.collisionFilterMask = 1));
  let p = { body: f, link: s.links[s.model.base], kind: "base" };
  (applyLinkInertia(s, p, "link0", e, { fixed: !0 }), s.world.addBody(f));
  for (let g = 0; g < o.length; g++)
    applyLinkInertia(s, o[g], "link" + (g + 1), e);
  (applyLinkInertia(s, h, "hand", e),
    d.forEach((g, q) =>
      applyLinkInertia(s, g, q ? "right_finger" : "left_finger", e),
    ));
  let b = [],
    H = s.q.slice(),
    P = [];
  for (let g = 0; g < s.n; g++) {
    let q = g ? o[g - 1].body : f,
      F = o[g].body,
      T = s.arm[g],
      C = c(T.origin.getWorldPosition(new i.Vector3())),
      M = c(
        T.axisV
          .clone()
          .applyQuaternion(T.origin.getWorldQuaternion(new i.Quaternion())),
      ),
      E = new Oh(q, F, {
        pivotA: q.pointToLocalFrame(C),
        pivotB: F.pointToLocalFrame(C),
        axisA: q.vectorToLocalFrame(M),
        axisB: F.vectorToLocalFrame(M),
        collideConnected: !1,
      });
    (E.enableMotor(),
      E.setMotorMaxForce((g < 4 ? 87 : 12) * (s.config.effortScale ?? 1) * n),
      s.world.addConstraint(E),
      b.push(E));
    let W = M.cross(Math.abs(M.x) < 0.8 ? new K(1, 0, 0) : new K(0, 1, 0));
    (W.normalize(), P.push([q.vectorToLocalFrame(W), F.vectorToLocalFrame(W)]));
  }
  let X = (g) => {
      let q = b[g],
        [F, T] = P[g],
        C = q.bodyA.vectorToWorldFrame(F),
        M = q.bodyB.vectorToWorldFrame(T),
        E = q.bodyA.vectorToWorldFrame(q.axisA),
        W = H[g] + Math.atan2(E.dot(C.cross(M)), C.dot(M));
      for (; W - s.q[g] > Math.PI;) W -= 2 * Math.PI;
      for (; W - s.q[g] < -Math.PI;) W += 2 * Math.PI;
      return W;
    },
    y = b.map((g, q) => {
      let F = new cf(
        g.bodyA,
        g.bodyB,
        g,
        () => X(q),
        s.arm[q].limit.lower,
        s.arm[q].limit.upper,
      );
      return (g.equations.push(F), F);
    }),
    O = new iu(o.at(-1).body, h.body);
  ((O.collideConnected = !1), s.world.addConstraint(O));
  let D = d.map((g, q) => {
      let F = c(
          s.fingers[q].axisV
            .clone()
            .applyQuaternion(
              s.fingers[q].origin.getWorldQuaternion(new i.Quaternion()),
            ),
        ),
        T = new sf(
          h.body,
          g.body,
          F,
          20 * (s.config.effortScale ?? 1),
          H[s.n] / 2,
          n,
        );
      return (
        s.world.addConstraint(T),
        {
          s: T,
          initialSeparation: g.body.position.vsub(h.body.position).dot(F),
        }
      );
    }),
    L = () => {
      for (let g = 0; g < s.n; g++) s.q[g] = X(g);
      ((s.q[s.n] = D.reduce(
        (g, { s: q, initialSeparation: F }) =>
          g +
          q.bodyB.position
            .vsub(q.bodyA.position)
            .dot(q.bodyA.vectorToWorldFrame(q.axis)) -
          F +
          H[s.n] / 2,
        0,
      )),
        s.fk());
    };
  return (
    (s.world.solver.iterations = r),
    {
      hinges: b,
      sliders: D,
      read: L,
      substeps: t / 30,
      dt: n,
      baseProxy: p,
      poses() {
        return s.proxies.map(({ body: g }) => [
          g.position.x,
          g.position.y,
          g.position.z,
          g.quaternion.x,
          g.quaternion.y,
          g.quaternion.z,
          g.quaternion.w,
        ]);
      },
      restorePoses(g) {
        g.forEach((q, F) => {
          (s.proxies[F].body.position.set(...q.slice(0, 3)),
            s.proxies[F].body.quaternion.set(...q.slice(3)));
        });
      },
      syncVisuals() {
        for (let g of s.proxies) {
          let q = g.body,
            F = new i.Quaternion(
              q.quaternion.x,
              q.quaternion.y,
              q.quaternion.z,
              q.quaternion.w,
            ).multiply(g.principalRotation.clone().invert()),
            T = new i.Vector3(q.position.x, q.position.y, q.position.z).sub(
              g.offset.clone().applyQuaternion(F),
            );
          (g.link.position.copy(g.link.parent.worldToLocal(T)),
            g.link.quaternion.copy(
              g.link.parent
                .getWorldQuaternion(new i.Quaternion())
                .invert()
                .multiply(F),
            ),
            g.link.updateMatrixWorld(!0));
        }
      },
      before() {
        for (let g = 0; g < s.n; g++) {
          let q = b[g],
            F = X(g),
            T = Ph(12 * (s.target[g] - F), -0.9, 0.9);
          (q.setMotorSpeed(-T),
            (y[g].enabled =
              F < s.arm[g].limit.lower + 0.005 ||
              F > s.arm[g].limit.upper - 0.005));
        }
        for (let { s: g } of D) g.setTravel((s.target[s.n] - H[s.n]) / 2);
      },
      info() {
        return {
          model: pandaDynamicsModel.version,
          experimental: !0,
          actuation: "effort-limited velocity servos",
          inertials: "Menagerie COM and full inertia tensors",
          physicsHz: t,
          solverIterations: r,
          selfCollision: !1,
          effortScale: s.config.effortScale ?? 1,
          jointEffortNm: b.map((g) => -g.motorEquation.multiplier),
          jointEffortLimitNm: b.map((g) => g.motorEquation.maxForce / n),
          fingerForceN: D.map(({ s: g }) => g.equationZ.multiplier),
          fingerForceLimitN: 20 * (s.config.effortScale ?? 1),
          trackingError: s.target.slice(0, s.n).map((g, q) => g - s.q[q]),
        };
      },
    }
  );
}
export { createPandaDynamics };
