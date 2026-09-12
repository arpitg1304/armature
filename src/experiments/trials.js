import { createRandomizedExperiments } from "./randomized.js";
var TRIAL_TASKS = {
  trial_pick: "Isolated pickup",
  trial_clutter: "Cluttered pickup",
  trial_place: "Narrow placement",
  trial_obstacle: "Obstacle transfer",
};
function installTrialTasks(s, e) {
  let t = s.prototype.reset,
    n = s.prototype.step,
    r = s.prototype.expertPlan,
    i = s.prototype.distance,
    c = s.prototype.info;
  ((s.prototype.reset = function (o = {}) {
    if (((this.trial = null), (this.trialFixtures = []), !TRIAL_TASKS[o.task]))
      return t.call(this, o);
    let h = ["easy", "standard", "hard"].includes(o.difficulty)
        ? o.difficulty
        : "standard",
      d = ["easy", "standard", "hard"].indexOf(h),
      f = t.call(this, {
        ...o,
        difficulty: h,
        object: "blocks",
        objectCount: o.task === "trial_clutter" ? 5 : 1,
        maxSteps: 1800,
      }),
      p = this.config.sizeScale,
      b = this.objects[0],
      H = this.config.seed >>> 0,
      P = (D) => {
        let L = (H ^ D) >>> 0;
        return (
          (L = Math.imul(L ^ (L >>> 16), 73244475)),
          ((L >>> 0) % 1e4) / 1e4 - 0.5
        );
      };
    (b.position.set(
      this.model.spawnX + P(173) * (o.trialJitter ?? 0.02) * p,
      0.02 * p + 0.001,
      this.model.rowZ + P(911) * (o.trialJitter ?? 0.02) * p,
    ),
      (this.goals[0] = [this.model.goalX, 0.02 * p + 0.001, this.model.rowZ]));
    let X = [0.036, 0.018, 0.008][d] * p;
    this.objects.slice(1).forEach((D, L) => {
      let g = (L * Math.PI) / 2;
      (D.position.set(
        b.position.x + Math.cos(g) * (0.04 * p + X),
        0.02 * p + 0.001,
        b.position.z + Math.sin(g) * (0.04 * p + X),
      ),
        (this.goals[L] = [D.position.x, D.position.y, D.position.z]));
    });
    let y = (D, L, g) => {
        let q = new e.Body({
          mass: 0,
          shape: new e.Box(new e.Vec3(...D.map((F) => F / 2))),
          position: new e.Vec3(...L),
          material: this.objectMat,
        });
        (this.world.addBody(q),
          this.trialFixtures.push({ body: q, size: D, pos: L, kind: g }));
      },
      O = [0.018, 0.01, 0.005][d] * p;
    if (o.task === "trial_place") {
      let D = (0.04 + [0.032, 0.02, 0.012][d]) * p,
        L = 0.008 * p,
        g = 0.025 * p,
        q = this.goals[0][0],
        F = this.goals[0][2];
      for (let T of [-1, 1])
        (y([L, g, D + 2 * L], [q + (T * (D + L)) / 2, g / 2, F], "tray"),
          y([D, g, L], [q, g / 2, F + (T * (D + L)) / 2], "tray"));
      O = Math.min(O, (D - 0.04 * p) / 2);
    }
    o.task === "trial_obstacle" &&
      y(
        [0.016 * p, [0.065, 0.11, 0.16][d] * p, 0.24 * p],
        [
          (b.position.x + this.goals[0][0]) / 2,
          ([0.065, 0.11, 0.16][d] * p) / 2,
          this.model.rowZ,
        ],
        "divider",
      );
    for (let D = 0; D < 24; D++) this.world.step(1 / 240);
    return (
      (this.trial = {
        variant: o.task,
        difficulty: h,
        targetIndex: 0,
        tolerance: O,
        initial: this.objects.map((D) => D.position.clone()),
        graspedTarget: !1,
        wrongGrasp: !1,
        lifted: !1,
        dropped: !1,
        maxNeighborShift: 0,
        obstacleContactSteps: 0,
        toolDistance: 0,
        lastTCP: this.tcp().clone(),
        stable: 0,
      }),
      (this.config.trialSpec = {
        version: "pick-place-v1",
        variant: o.task,
        difficulty: h,
        targetIndex: 0,
        positionTolerance: O,
        uprightDegrees: 8,
        stableFrames: 15,
        withdrawDistance: 0.075 * p,
        neighborTolerance: 0.01 * p,
        fixtures: this.trialFixtures.map(({ size: D, pos: L, kind: g }) => ({
          size: D,
          pos: L,
          kind: g,
        })),
      }),
      (this.previousDistance = this.distance()),
      (this.terminated = !1),
      (this.truncated = !1),
      { observation: this.observe(), info: this.info() }
    );
  }),
    (s.prototype.distance = function () {
      return this.trial
        ? this.objects[0].position.distanceTo(new e.Vec3(...this.goals[0]))
        : i.call(this);
    }),
    (s.prototype.trialMetrics = function () {
      if (!this.trial) return null;
      let o = this.trial,
        h = this.objects[0],
        d = this.config.sizeScale,
        f = Math.max(
          ...[
            new e.Vec3(1, 0, 0),
            new e.Vec3(0, 1, 0),
            new e.Vec3(0, 0, 1),
          ].map((X) => Math.abs(h.quaternion.vmult(X).y)),
        ),
        p = (Math.acos(Math.max(-1, Math.min(1, f))) * 180) / Math.PI,
        b = h.position.distanceTo(new e.Vec3(...this.goals[0])),
        H =
          b < o.tolerance &&
          p < 8 &&
          h.velocity.length() < 0.025 &&
          h.angularVelocity.length() < 0.2,
        P =
          this.isOpen &&
          this.tcp().distanceTo(
            new this.T.Vector3(h.position.x, h.position.y, h.position.z),
          ) >
            0.075 * d;
      return {
        targetGrasp: o.graspedTarget,
        wrongObjectGrasp: o.wrongGrasp,
        transported: o.lifted,
        positionError: b,
        tiltDegrees: p,
        placement: H,
        withdrawn: P,
        stableFrames: o.stable,
        dropped: o.dropped,
        maxNeighborDisplacement: o.maxNeighborShift,
        obstacleContactControlSteps: o.obstacleContactSteps,
        toolTravel: o.toolDistance,
        simulationSeconds: this.steps / 30,
        success: this.terminated,
        cleanSuccess:
          this.terminated &&
          !o.wrongGrasp &&
          !o.dropped &&
          o.maxNeighborShift <= 0.01 * d &&
          o.obstacleContactSteps === 0,
      };
    }),
    (s.prototype.step = function (o) {
      let h = n.call(this, o);
      if (!this.trial) return h;
      let d = this.trial,
        f = this.config.sizeScale,
        p = this.objects[0],
        b = this.proxies.filter((O) => O.kind.startsWith("finger")),
        H = (O) =>
          b.length >= 2 &&
          b.every((D) =>
            this.world.contacts.some(
              (L) =>
                (L.bi === O && L.bj === D.body) ||
                (L.bj === O && L.bi === D.body),
            ),
          );
      (d.graspedTarget || (d.graspedTarget = H(p)),
        d.wrongGrasp || (d.wrongGrasp = this.objects.slice(1).some(H)),
        d.lifted ||
          (d.lifted =
            d.graspedTarget && p.position.y > d.initial[0].y + 0.025 * f),
        d.dropped ||
          (d.dropped =
            d.lifted &&
            p.position.y < d.initial[0].y + 0.008 * f &&
            this.distance() > 0.04 * f &&
            !H(p)),
        this.objects
          .slice(1)
          .forEach(
            (O, D) =>
              (d.maxNeighborShift = Math.max(
                d.maxNeighborShift,
                O.position.distanceTo(d.initial[D + 1]),
              )),
          ),
        this.world.contacts.some((O) =>
          this.trialFixtures.some(
            (D) =>
              D.kind === "divider" &&
              (O.bi === D.body || O.bj === D.body) &&
              (this.objects.includes(O.bi) ||
                this.objects.includes(O.bj) ||
                this.proxies.some((L) => L.body === O.bi || L.body === O.bj)),
          ),
        ) && d.obstacleContactSteps++);
      let P = this.tcp();
      ((d.toolDistance += P.distanceTo(d.lastTCP)), d.lastTCP.copy(P));
      let X = this.trialMetrics();
      ((d.stable =
        X.placement && X.withdrawn && d.graspedTarget && d.lifted
          ? d.stable + 1
          : 0),
        (this.terminated = d.stable >= 15),
        (this.stable = d.stable),
        (this.truncated =
          !this.terminated &&
          (this.steps >= this.config.maxSteps || p.position.y < -0.3)));
      let y = h.reward - (h.terminated ? 10 : 0) + (this.terminated ? 10 : 0);
      return (
        (this.lastReward = y),
        {
          ...h,
          reward: y,
          terminated: this.terminated,
          truncated: this.truncated,
          info: this.info(),
        }
      );
    }),
    (s.prototype.info = function () {
      let o = c.call(this);
      return this.trial ? { ...o, trial: this.trialMetrics() } : o;
    }),
    (s.prototype.expertPlan = function (o) {
      if (!this.trial) return r.call(this, o);
      let h = r.call(this, [0]);
      if (this.config.task === "trial_obstacle") {
        let d = Math.max(
          this.model.high,
          this.trialFixtures[0].size[1] + 0.065 * this.config.sizeScale,
        );
        for (let p of h)
          /Approach|Lift|Transfer|Withdraw/.test(p.name) && (p.p[1] = d);
        let f = this.tcp().toArray();
        for (let p of h) ((p.from = f.slice()), (f = p.p.slice()));
      }
      return (
        h.push({
          from: h.at(-1).p.slice(),
          p: this.model.homePoint.slice(),
          width: this.model.open,
          seconds: 1,
          name: "Verify released placement",
        }),
        h
      );
    }));
}
function createTrialLab({
  T: s,
  Env: e,
  getEnv: t,
  getStatus: n,
  resetLive: r,
  save: i,
  observePolicy: c,
  lightingForSeed: o,
  canInspect: h = () => !0,
}) {
  let d = (F) => document.getElementById(F),
    f = document.createElement("details");
  ((f.id = "trialPanel"),
    (f.open = !0),
    (f.innerHTML = `<summary>Pick-and-Place Trials</summary><p class="note">The coral block is the target. Other blocks are distractors. All four variants use the same target seed layout.</p><label>Difficulty<select id="trialDifficulty"><option value="easy">Easy</option><option value="standard" selected>Standard</option><option value="hard">Hard</option></select></label><p id="trialLive" class="note" role="status"></p><details><summary>Seeded policy evaluation</summary><p class="note">Scripted IK baseline \xB7 privileged object positions \xB7 no learned visual policy. Runs in an independent simulation. Results are prototype physics evaluations. Change difficulty and rerun with the same episode seed; the last five runs remain in the JSON report.</p><label>Seeds per variant<select id="trialSeeds"><option value="3">3 seeds \xB7 12 trials</option><option value="5">5 seeds \xB7 20 trials</option><option value="10">10 seeds \xB7 40 trials</option></select></label><button id="trialSuite" class="wide primary">Run all four variants</button><button id="trialCancel" class="wide" disabled>Cancel suite</button><p id="trialSuiteStatus" class="note" role="status">Starts at the episode seed. Same seeds for every variant.</p><div id="trialResults"></div></details><button id="trialDownload" class="wide">Download evaluation JSON</button><p class="note">Success: correct target grasped, lifted, placed flat on a face within tolerance, then stable for 0.5 s with the gripper withdrawn. Clean success also requires no drops, wrong grasps, divider contacts or neighbor motion over 10 mm \xD7 robot scale. Contacts sample the latest physics substep. Reports contain privileged evaluator state.</p><details><summary>External policy interface</summary><pre>armature.reset({task: "trial_clutter", seed: 42});
const obs = armature.trials.observe({rgb: true});
// proprioception + overhead / wrist PNG bytes
armature.step(jointTargets);
armature.trials.report();</pre><p class="note">The trial observation omits object poses, goals and evaluation state. The legacy armature.observe() API and trial reports remain privileged; this is an interface convention, not access isolation. External policies define their own input history.</p></details>`),
    d("panel-experiment").append(f));
  let p = [],
    b = !1,
    H = !1,
    P = null,
    X = [];
  function y() {
    let F = t(),
      T = !!F.trial;
    if (((f.hidden = !T), !T)) return;
    let C = F.trialMetrics();
    d("trialLive").textContent =
      `${TRIAL_TASKS[F.config.task]} \xB7 target #1 \xB7 tolerance ${(F.trial.tolerance * 1e3).toFixed(1)} mm. Grasp ${C.targetGrasp ? "\u2713" : "\u2014"} \xB7 lift ${C.transported ? "\u2713" : "\u2014"} \xB7 placement ${C.placement ? "\u2713" : "\u2014"} \xB7 ${C.positionError.toFixed(3)} m error \xB7 ${C.tiltDegrees.toFixed(1)}\xB0 tilt \xB7 ${C.stableFrames}/15 stable frames.`;
  }
  d("trialDifficulty").onchange = () =>
    r({ difficulty: d("trialDifficulty").value });
  function O(F, T) {
    return {
      variant: F.config.task,
      difficulty: F.config.difficulty,
      seed: F.config.seed,
      robotId: F.model.id,
      config: JSON.parse(JSON.stringify(F.config)),
      metrics: F.trialMetrics(),
      reason: T,
      controller: "scripted-IK-v1",
      observations: "privileged simulator state",
      lightingRendered: !1,
      actionUnits: F.model.units,
    };
  }
  function D() {
    let F = d("trialResults");
    F.replaceChildren();
    for (let T of Object.keys(TRIAL_TASKS)) {
      let C = p.filter((E) => E.variant === T && E.reason !== "cancelled");
      if (!C.length) continue;
      let M = document.createElement("p");
      ((M.className = "note"),
        (M.textContent = `${TRIAL_TASKS[T]}: ${C.filter((E) => E.metrics.success).length}/${C.length} success \xB7 ${C.filter((E) => E.metrics.cleanSuccess).length}/${C.length} clean`),
        F.append(M));
    }
    for (let T of X) {
      let C = document.createElement("p");
      C.className = "note";
      let M = T.reports.filter((E) => E.reason !== "cancelled");
      ((C.textContent = `Previous: ${T.suite.robotId} \xB7 ${T.suite.difficulty} \xB7 seed ${T.suite.seed} \xB7 ${M.filter((E) => E.metrics.success).length}/${M.length} success`),
        F.append(C));
    }
  }
  async function L() {
    if (b || q.active) return;
    (p.length && (X.push({ suite: P, reports: p }), (X = X.slice(-5))),
      (b = !0),
      (H = !1),
      (p = []),
      D(),
      (d("trialSuite").disabled = !0),
      (d("trialCancel").disabled = !1));
    let F = t();
    P = {
      ...F.config,
      seed: Math.floor(Number(d("seed").value) || 1) >>> 0,
      difficulty: d("trialDifficulty").value,
      randomize: !0,
    };
    let T = Number(d("trialSeeds").value),
      C = new e(s, F.model.id);
    try {
      for (let M of Object.keys(TRIAL_TASKS)) {
        for (let E = 0; E < T && !H; E++) {
          let W = (P.seed + E) >>> 0;
          C.reset({
            ...P,
            task: M,
            seed: W,
            lighting: o?.(W, P.lighting) || P.lighting,
          });
          let $ = C.expertPlan(),
            J = !1;
          d("trialSuiteStatus").textContent =
            `${TRIAL_TASKS[M]} \xB7 seed ${C.config.seed} \xB7 ${p.length + 1}/${4 * T}`;
          for (let U of $) {
            let Z = Math.round(U.seconds * 30);
            for (let ee = 0; ee < Z; ee++) {
              if (H) {
                J = !0;
                break;
              }
              let ae = (ee + 1) / Z,
                oe = ae * ae * (3 - 2 * ae),
                de = U.from.map((xe, me) => xe + (U.p[me] - xe) * oe),
                le = C.ik(new s.Vector3(...de), C.q, 18).q;
              le[C.n] = U.width;
              let se = C.step(le);
              if (se.terminated || se.truncated) {
                J = !0;
                break;
              }
              C.steps % 60 === 0 &&
                (await new Promise((xe) => setTimeout(xe, 0)));
            }
            if (J) break;
          }
          (p.push(
            O(
              C,
              H
                ? "cancelled"
                : C.terminated
                  ? "success"
                  : C.truncated
                    ? "environment limit"
                    : "controller exhausted",
            ),
          ),
            D());
        }
        if (H) break;
      }
      d("trialSuiteStatus").textContent =
        `${H ? "Cancelled" : "Complete"} \xB7 ${p.filter((M) => M.reason !== "cancelled").length} finished trials. Download the report to retain this run.`;
    } catch (M) {
      d("trialSuiteStatus").textContent = "Evaluation stopped: " + M.message;
    } finally {
      ((b = !1),
        (d("trialSuite").disabled = !1),
        (d("trialCancel").disabled = !0));
    }
    return p;
  }
  ((d("trialSuite").onclick = L), (d("trialCancel").onclick = () => (H = !0)));
  function g() {
    let F = t(),
      T = n();
    i(
      JSON.stringify(
        {
          format: "armature-pick-place-v1",
          limitations:
            "Approximate kinematic robot proxies; no torque dynamics or force control. Diagnostic contacts sample final substep at 30 Hz. Baseline has privileged state. Not a validated sim-to-real benchmark.",
          suite: P,
          reports: p,
          previousRuns: X,
          current: F.trial
            ? {
                ...O(F, T.finished ? "finished" : "in progress"),
                controller: T.controller,
                lightingRendered:
                  T.controller === "scripted-IK-v1" ? !1 : "caller-defined",
                observations:
                  T.controller === "scripted-IK-v1"
                    ? "privileged simulator state"
                    : "caller-defined; report contains privileged evaluator state",
                completed: T.finished,
              }
            : null,
        },
        null,
        2,
      ),
      "pick-place-evaluation.json",
      "application/json",
    );
  }
  let q = createRandomizedExperiments({
    T: s,
    Env: e,
    getEnv: t,
    resetLive: r,
    save: i,
    variants: TRIAL_TASKS,
    otherBusy: () => b,
    canInspect: h,
  });
  return (
    (d("trialDownload").onclick = g),
    y(),
    {
      randomized: q,
      refresh: y,
      runSuite: L,
      download: g,
      observe: c,
      report: () => t().trialMetrics(),
      cancel: () => (H = !0),
      get reports() {
        return p;
      },
    }
  );
}
export { installTrialTasks, TRIAL_TASKS, createTrialLab };
