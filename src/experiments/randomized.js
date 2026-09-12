function sampleExperiment(s, e) {
  let t = (s.seed + e) >>> 0,
    n = t,
    r = () => {
      t = (t + 1831565813) >>> 0;
      let c = t;
      return (
        (c = Math.imul(c ^ (c >>> 15), c | 1)),
        (c ^= c + Math.imul(c ^ (c >>> 7), c | 61)),
        ((c ^ (c >>> 14)) >>> 0) / 4294967296
      );
    },
    i = ([c, o]) => c + (o - c) * r();
  return {
    seed: n,
    mass: i(s.mass),
    friction: i(s.friction),
    padFriction: i(s.padFriction),
    trialJitter: s.placement,
    randomize: !1,
  };
}
function validateExperimentSweep(s) {
  if (!Number.isInteger(s.count) || s.count < 1 || s.count > 100)
    throw Error("Choose 1\u2013100 experiments.");
  if (!Number.isInteger(s.seed) || s.seed < 0 || s.seed > 4294967295)
    throw Error("Seed must be an integer from 0 to 4294967295.");
  for (let [e, t, n] of [
    ["mass", 0.01, 0.5],
    ["friction", 0.1, 1.5],
    ["padFriction", 0.1, 3],
  ])
    if (
      !Array.isArray(s[e]) ||
      s[e].length !== 2 ||
      !s[e].every(Number.isFinite) ||
      s[e][0] < t ||
      s[e][1] > n ||
      s[e][0] > s[e][1]
    )
      throw Error("Invalid " + e + " range: minimum must not exceed maximum.");
  if (!Number.isFinite(s.placement) || s.placement < 0 || s.placement > 0.04)
    throw Error("Placement variation must be 0\u201340 mm.");
  return s;
}
function createRandomizedExperiments({
  T: s,
  Env: e,
  getEnv: t,
  resetLive: n,
  save: r,
  variants: i,
  otherBusy: c,
  canInspect: o,
}) {
  let h = (O) => document.getElementById(O),
    d = document.createElement("details");
  ((d.open = !0),
    (d.id = "randomizedExperiments"),
    (d.innerHTML = `<summary>Randomized experiments</summary><p class="note">Run the scripted controller on repeatable pick-and-place cases. Uses a separate simulation and the current robot / physics mode. No RGB recording; this controller sees object positions directly.</p><fieldset id="sweepFields"><label for="sweepTask">Task<select id="sweepTask">${Object.entries(
      i,
    )
      .map(([O, D]) => `<option value="${O}">${D}</option>`)
      .join(
        "",
      )}</select></label><div class="fieldPair"><label for="sweepCount">Experiments<input id="sweepCount" type="number" min="1" max="100" value="10"></label><label for="sweepSeed">Starting seed<input id="sweepSeed" type="number" min="0" max="4294967295" value="42"></label></div><label for="sweepDifficulty">Difficulty<select id="sweepDifficulty"><option value="easy">Easy</option><option value="standard" selected>Standard</option><option value="hard">Hard</option></select></label><label for="sweepPlacement">Placement span \xB7 mm \xD7 robot scale<input id="sweepPlacement" type="number" min="0" max="40" value="20"></label><p class="note">Seeded X/Z offsets within \xB1 half the span. Clutter moves together to preserve spacing; goals and fixtures stay fixed.</p>${[
      ["mass", "Object mass \xB7 kg", 0.01, 0.5, 0.04, 0.12, 0.01],
      ["friction", "Surface friction", 0.1, 1.5, 0.4, 1, 0.1],
      ["padFriction", "Gripper friction", 0.1, 3, 1, 2.8, 0.1],
    ]
      .map(
        ([O, D, L, g, q, F, T]) =>
          `<label>${D}</label><div class="fieldPair"><label for="sweep-${O}-min">Minimum<input id="sweep-${O}-min" type="number" min="${L}" max="${g}" step="${T}" value="${q}"></label><label for="sweep-${O}-max">Maximum<input id="sweep-${O}-max" type="number" min="${L}" max="${g}" step="${T}" value="${F}"></label></div>`,
      )
      .join(
        "",
      )}</fieldset><button id="sweepRun" class="wide primary">Run randomized experiments</button><button id="sweepCancel" class="wide" disabled>Cancel</button><progress id="sweepProgress" max="100" value="0" style="width:100%" aria-label="Experiment progress"></progress><p id="sweepStatus" class="note" role="status">Independent uniform samples. Equal minimum and maximum keep a parameter fixed.</p><div class="fieldPair"><button id="sweepJSON" disabled>Download JSON</button><button id="sweepCSV" disabled>Download CSV</button></div><div id="sweepResults" style="max-height:320px;overflow:auto"></div><p class="note">Prototype physics evaluations. Kinematic runs cannot test actuator load limits. Results contain initial states and task metrics, not recorded trajectories. Loading a case resets the workspace; rerunning is not a replay.</p>`),
    h("panel-experiment").append(d));
  let f = !1,
    p = !1,
    b = [],
    H = null,
    P = () =>
      validateExperimentSweep({
        count: Number(h("sweepCount").value),
        seed: Number(h("sweepSeed").value),
        placement: Number(h("sweepPlacement").value) / 1e3,
        ...Object.fromEntries(
          ["mass", "friction", "padFriction"].map((O) => [
            O,
            ["min", "max"].map((D) => Number(h("sweep-" + O + "-" + D).value)),
          ]),
        ),
      });
  function X() {
    let O = h("sweepResults");
    O.replaceChildren();
    let D = b.filter((q) => q.reason !== "cancelled" && q.reason !== "error"),
      L = D.filter((q) => q.metrics?.success).length,
      g = document.createElement("p");
    ((g.className = "note"),
      (g.textContent = D.length
        ? `${L}/${D.length} success (${((100 * L) / D.length).toFixed(1)}%) \xB7 ${D.filter((q) => q.metrics?.cleanSuccess).length} clean`
        : "No completed trials yet."),
      O.append(g));
    for (let q of b) {
      let F = document.createElement("button");
      ((F.className = "wide"),
        (F.disabled = f || !q.config),
        (F.textContent = `#${q.index + 1} \xB7 seed ${q.seed} \xB7 ${q.reason}${q.metrics ? " \xB7 " + (q.metrics.positionError * 1e3).toFixed(1) + " mm" : ""}`),
        (F.onclick = () => {
          try {
            if (!o())
              throw Error(
                "Pause playback and stop recording/replay before loading a case.",
              );
            for (let [T, C] of Object.entries({
              robot: q.config.robotId,
              task: q.config.task,
              object: "blocks",
              trialDifficulty: q.config.difficulty,
              mass: q.config.mass,
              friction: q.config.friction,
              seed: q.seed,
              physicsMode: q.config.physicsMode,
              effortScale: q.config.effortScale,
            }))
              h(T) && (h(T).value = String(C));
            ((h("variation").checked = !1),
              n(q.config),
              (h("sweepStatus").textContent =
                "Loaded case " +
                (q.index + 1) +
                ". Press Run task to rerun its initial setup."));
          } catch (T) {
            h("sweepStatus").textContent = T.message;
          }
        }),
        O.append(F));
    }
  }
  async function y() {
    if (f || c()) {
      h("sweepStatus").textContent =
        "Wait for the current evaluation to finish.";
      return;
    }
    let O;
    try {
      O = P();
    } catch (q) {
      h("sweepStatus").textContent = q.message;
      return;
    }
    let D = JSON.parse(JSON.stringify(t().config));
    if (
      ((H = {
        ...O,
        task: h("sweepTask").value,
        difficulty: h("sweepDifficulty").value,
        base: D,
        controller: "scripted-IK-v1",
        format: "armature-randomized-trials-v1",
        sampling:
          "independent uniform; per-case seed; mass shared by all objects",
        observations: "privileged object state; no rendering",
        createdAt: new Date().toISOString(),
      }),
      !i[H.task])
    )
      return;
    ((b = []),
      (p = !1),
      (f = !0),
      (h("sweepFields").disabled = !0),
      (h("sweepRun").disabled = !0),
      (h("sweepCancel").disabled = !1),
      (h("sweepJSON").disabled = !0),
      (h("sweepCSV").disabled = !0),
      (h("sweepProgress").max = H.count),
      (h("sweepProgress").value = 0),
      X());
    let L,
      g = null;
    try {
      L = new e(s, D.robotId);
      for (let q = 0; q < H.count && !p; q++) {
        let F = sampleExperiment(H, q),
          T = {
            ...D,
            ...F,
            task: H.task,
            difficulty: H.difficulty,
            object: "blocks",
            spawnPositions: void 0,
            objectCount: void 0,
          },
          C = {
            index: q,
            seed: F.seed,
            sampled: F,
            config: T,
            reason: "error",
          };
        try {
          (L.reset(T),
            (C.config = JSON.parse(JSON.stringify(L.config))),
            (C.initialObjects = L.objects.map((W) => ({
              position: [W.position.x, W.position.y, W.position.z],
              quaternion: [
                W.quaternion.x,
                W.quaternion.y,
                W.quaternion.z,
                W.quaternion.w,
              ],
              mass: W.mass,
            }))),
            (C.goals = JSON.parse(JSON.stringify(L.goals))));
          let M = L.expertPlan(),
            E = !1;
          ((h("sweepStatus").textContent =
            `Running ${q + 1}/${H.count} \xB7 seed ${F.seed} \xB7 ${D.physicsMode}`),
            await new Promise((W) => setTimeout(W, 0)));
          for (let W of M) {
            let $ = Math.round(W.seconds * 30);
            for (let J = 0; J < $; J++) {
              if (p) {
                E = !0;
                break;
              }
              let U = (J + 1) / $,
                Z = U * U * (3 - 2 * U),
                ee = L.ik(
                  new s.Vector3(
                    ...W.from.map((oe, de) => oe + (W.p[de] - oe) * Z),
                  ),
                  L.q,
                  18,
                ).q;
              ee[L.n] = W.width;
              let ae = L.step(ee);
              if (ae.terminated || ae.truncated) {
                E = !0;
                break;
              }
              L.steps % 15 === 0 &&
                (await new Promise((oe) => setTimeout(oe, 0)));
            }
            if (E) break;
          }
          ((C.metrics = L.trialMetrics()),
            (C.reason = p
              ? "cancelled"
              : L.terminated
                ? "success"
                : L.truncated
                  ? "environment limit"
                  : "controller exhausted"));
        } catch (M) {
          C.error = M.message;
        }
        (b.push(C), (h("sweepProgress").value = b.length), X());
      }
    } catch (q) {
      g = q.message;
    } finally {
      ((f = !1),
        (h("sweepFields").disabled = !1),
        (h("sweepRun").disabled = !1),
        (h("sweepCancel").disabled = !0),
        (h("sweepJSON").disabled = !b.length),
        (h("sweepCSV").disabled = !b.length),
        X(),
        (h("sweepStatus").textContent = g
          ? "Evaluation stopped: " + g
          : `${p ? "Cancelled" : "Finished"} \xB7 ${b.length}/${H.count} attempted \xB7 ${b.filter((q) => q.reason === "error").length} errors. Download before starting another batch.`));
    }
    return b;
  }
  return (
    (h("sweepRun").onclick = y),
    (h("sweepCancel").onclick = () => (p = !0)),
    (h("sweepJSON").onclick = () =>
      r(
        JSON.stringify({ spec: H, results: b }, null, 2),
        "randomized-experiments.json",
        "application/json",
      )),
    (h("sweepCSV").onclick = () => {
      let O = [
          "index",
          "seed",
          "reason",
          "mass",
          "friction",
          "padFriction",
          "success",
          "cleanSuccess",
          "positionErrorMetres",
          "simulationSeconds",
        ],
        D = (g) => '"' + String(g ?? "").replaceAll('"', '""') + '"',
        L = b.map((g) => [
          g.index + 1,
          g.seed,
          g.reason,
          g.sampled.mass,
          g.sampled.friction,
          g.sampled.padFriction,
          g.metrics?.success,
          g.metrics?.cleanSuccess,
          g.metrics?.positionError,
          g.metrics?.simulationSeconds,
        ]);
      r(
        [O, ...L].map((g) => g.map(D).join(",")).join(`
`),
        "randomized-experiments.csv",
        "text/csv",
      );
    }),
    {
      run: y,
      cancel: () => (p = !0),
      get active() {
        return f;
      },
      get results() {
        return JSON.parse(JSON.stringify(b));
      },
    }
  );
}
export { createRandomizedExperiments };

export { sampleExperiment, validateExperimentSweep };
