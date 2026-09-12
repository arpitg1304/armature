import { STRESS_SKILL_ID } from "./skill.js";
import { getRobotModel, ROBOT_MODELS } from "../robots/models.js";
import { seededRandom } from "../simulation/environment.js";
import w2 from "armature:stress-worker";
function createStressScenarios({
  side: u = 10,
  seed: a = 42,
  friction: l = 2.8,
  spread: v = 0.03,
  variety: m = !1,
  robotId: x = "panda",
} = {}) {
  let w = getRobotModel(x),
    z = seededRandom(a);
  return Array.from({ length: u * u }, (j, N) => {
    let V = Math.floor(N / u),
      S = N % u,
      G = ((S / (u - 1)) * 2 - 1) * v,
      B = ((V / (u - 1)) * 2 - 1) * v;
    return {
      id: N,
      row: V,
      col: S,
      x: G,
      z: B,
      config: {
        robotId: x,
        seed: a + N,
        task: "transfer",
        object: "blocks",
        objectCount: 1,
        randomize: !1,
        sizeScale: w.sizeScale * (m ? 0.85 + 0.3 * z() : 1),
        mass: m ? 0.03 + 0.09 * z() : 0.06,
        padFriction: l,
        friction: 0.8,
        spawnPositions: [
          [w.spawnX + G, 0.02 * w.sizeScale + 0.001, w.rowZ + B],
        ],
        maxSteps: 700,
      },
    };
  });
}
function createStressLab({
  T: u,
  getRobotId: a,
  makeRobot: l,
  onInspect: v,
  onPause: m,
  onSave: x,
}) {
  let w = document.createElement("section");
  ((w.id = "stressLab"),
    w.setAttribute("aria-label", "Skill Stress Lab"),
    (w.hidden = !0),
    (w.innerHTML = `<div class="stressTop"><div><span class="stressEyebrow">SKILL STRESS LAB / FIXED CONTROLLER</span><p id="stressCurrentRobot" class="stressNote"></p><h1>One skill. <span id="stressWorlds">100</span> worlds.</h1></div><button id="stressClose">Back to studio \xD7</button></div><div class="stressLayout"><aside class="stressControls"><h2>Experiment</h2><p class="stressNote">This separate lab uses kinematic robots, regardless of the studio physics setting. One nominal command sequence per robot, frozen across its trials. Compact SO-101 and standard bench tasks use different layouts. Baseline comparisons require the same robot.</p><label>Robot<select id="stressRobot">${Object.values(
      ROBOT_MODELS,
    )
      .map((et) => `<option value="${et.id}">${et.label}</option>`)
      .join(
        "",
      )}</select></label><label>Worlds<select id="stressSize"><option value="10">100 \xB7 10 \xD7 10</option><option value="5">25 \xB7 quick sweep</option></select></label><label>Pose spread <b id="spreadValue">\xB130 mm</b><input id="stressSpread" type="range" min="5" max="40" step="5" value="30"></label><label>Finger friction <b id="frictionValue">2.8</b><input id="stressFriction" type="range" min="0" max="3.5" step="0.1" value="2.8"></label><label>Scenario seed<input id="stressSeed" type="number" min="0" max="999999" value="42"></label><label><input id="stressVariety" type="checkbox"> Also vary mass and size</label><p class="stressNote">X offset runs left \u2192 right. Z offset runs top \u2192 bottom. Table friction stays 0.8. Finger friction is a simulation coefficient, not a calibrated material.</p><button id="stressRun" class="primary wide">\u25B6 Stress-test this skill</button><button id="stressCancel" class="wide" disabled>Stop sweep</button><button id="stressPin" class="wide" disabled>Pin results as baseline A</button><button id="stressExport" class="wide" disabled>\u2193 Experiment + rollout JSON</button><div class="stressLegend"><span class="pass">\u25CF Success</span><span class="fail">\u25CF Failure</span><span>\u25CF Pending</span></div><details><summary>What counts as success?</summary><p class="stressNote">Object within 18 mm of its goal, speed below 35 mm/s, gripper open, maintained for 15 control steps. Outcomes come from contact simulation. Failure names are heuristic indicators. Arm dynamics and self-collision remain simplified.</p></details></aside><div class="stressResults"><div class="stressMetrics"><div><small>SUCCESS RATE</small><strong id="stressRate">\u2014</strong></div><div><small>COMPLETED</small><strong id="stressCount">0 / 100</strong></div><div><small>BASELINE A</small><strong id="stressCompare">Not pinned</strong></div><div><small>ELAPSED</small><strong id="stressElapsed">0s</strong></div></div><div class="stressToolbar"><label>Show<select id="stressFilter"><option value="all">All trials</option><option value="success">Successes</option><option value="failure">Failures</option><option value="missed grasp">Missed grasp</option><option value="slipped">Slipped</option><option value="off target">Off target</option><option value="changed">Changed vs A</option></select></label><label><input id="stressAnimate" type="checkbox" checked> Animate completed rollouts</label><span id="stressStatus" role="status">Ready. Run a sweep to see its robustness envelope.</span></div><div class="stressAxes"><span>\u2212X \u2190 OBJECT POSE \u2192 +X</span><span id="stressRange">\xB130 mm \xB7 each square is one seeded trial</span></div><div id="stressGrid"></div><p class="stressNote">Click any completed cell to scrub its actual rollout in the studio. Pending cells are never counted as failures. Results stay in this tab; download to preserve them.</p></div></div>`),
    document.body.appendChild(w));
  let z = (et) => document.getElementById(et),
    j = new Map(),
    N = null,
    V = [],
    S = null,
    G = [],
    B = [],
    _ = null,
    ue = null,
    he = !1,
    ve = 0,
    we = 0,
    je = [],
    Ne = 0,
    ge = 0,
    We = document.createElement("button");
  ((We.id = "stressOpen"),
    (We.textContent = "\u25EB Skill Stress Lab"),
    (We.className = "primary"),
    document.querySelector("header").appendChild(We),
    (We.onclick = () => {
      (m(),
        he || (z("stressRobot").value = a()),
        (w.hidden = !1),
        (document.querySelector(".app").inert = !0));
    }),
    (z("stressClose").onclick = () => {
      ((w.hidden = !0), (document.querySelector(".app").inert = !1));
    }));
  let Ue = new u.Scene();
  ((Ue.background = new u.Color("#24333d")),
    Ue.add(new u.HemisphereLight(14939647, 3682600, 3)));
  let pe = new u.DirectionalLight(16777215, 3);
  (pe.position.set(1, 3, 2), Ue.add(pe));
  let Ve = null;
  function Je(et) {
    Ve?.model.id !== et &&
      (Ve &&
        (Ue.remove(Ve.root),
        Ve.root.traverse((Vt) => {
          Vt.isMesh && Vt.material.dispose();
        })),
      (Ve = l(et)),
      Ue.add(Ve.root));
  }
  let Ie = new u.Mesh(
    new u.BoxGeometry(0.04, 0.04, 0.04),
    new u.MeshStandardMaterial({ color: "#e1a371", roughness: 0.45 }),
  );
  Ue.add(Ie);
  let Re = new u.Mesh(
    new u.BoxGeometry(1.05, 0.035, 0.65),
    new u.MeshStandardMaterial({
      color: "#71838a",
      metalness: 0.2,
      roughness: 0.7,
    }),
  );
  (Re.position.set(-0.1, -0.018, 0), Ue.add(Re));
  let Ae = new u.Mesh(
    new u.BoxGeometry(0.075, 0.001, 0.075),
    new u.MeshBasicMaterial({ color: "#b1d874" }),
  );
  (Ae.position.set(0.23, 0.001, -0.17), Ue.add(Ae));
  let Ye = new u.PerspectiveCamera(39, 1.45, 0.01, 10);
  (Ye.position.set(0.96, 0.84, 1.02), Ye.lookAt(-0.08, 0.25, -0.02));
  let $e = new u.WebGLRenderer({ antialias: !1 });
  ($e.setSize(174, 120),
    $e.setPixelRatio(1),
    ($e.toneMapping = u.ACESFilmicToneMapping));
  function Mt(et, Vt) {
    let Dt = z("stressCell" + et);
    if (!Dt || !Vt) return;
    Je(B[et].config.robotId || "panda");
    let tn = Ve.dof;
    ((Ve.q = Array.from(Vt.slice(1, 1 + tn))),
      Ve.fk(),
      Ie.position.fromArray(Vt, 1 + tn),
      Ie.quaternion.fromArray(Vt, 4 + tn),
      Ae.position.set(Ve.model.goalX, 0.001, Ve.model.rowZ),
      Ae.scale.set(Ve.model.sizeScale, 1, Ve.model.sizeScale),
      Ve.model.id === "so101"
        ? (Ye.position.set(0.42, 0.43, 0.48), Ye.lookAt(-0.05, 0.11, 0))
        : (Ye.position.set(0.96, 0.84, 1.02), Ye.lookAt(-0.08, 0.25, -0.02)),
      Ie.scale.setScalar(B[et].config.sizeScale),
      $e.render(Ue, Ye),
      Dt.querySelector("canvas")
        .getContext("2d")
        .drawImage($e.domElement, 0, 0));
  }
  function gt() {
    return {
      robotId: z("stressRobot").value,
      side: Number(z("stressSize").value),
      seed: Math.max(
        0,
        Math.min(999999, Math.floor(Number(z("stressSeed").value) || 0)),
      ),
      friction: Number(z("stressFriction").value),
      spread: Number(z("stressSpread").value) / 1e3,
      variety: z("stressVariety").checked,
    };
  }
  function St() {
    return (
      _ &&
      ue &&
      _.settings.robotId === ue.robotId &&
      _.settings.side === ue.side &&
      _.settings.seed === ue.seed &&
      _.settings.spread === ue.spread &&
      _.settings.variety === ue.variety
    );
  }
  function Yt() {
    let et = G.filter(Boolean),
      Vt = et.filter((Dt) => Dt.success).length;
    if (
      ((z("stressRate").textContent = et.length
        ? Math.round((Vt / et.length) * 100) + "%"
        : "\u2014"),
      (z("stressCount").textContent = et.length + " / " + B.length),
      ve &&
        he &&
        (z("stressElapsed").textContent =
          ((performance.now() - ve) / 1e3).toFixed(0) + "s"),
      _)
    )
      if (!St()) z("stressCompare").textContent = "Robot / grid differs";
      else {
        let Dt = et.filter((Dr) => _.results[Dr.id]),
          tn = Dt.reduce(
            (Dr, na) =>
              Dr + Number(na.success) - Number(_.results[na.id].success),
            0,
          );
        z("stressCompare").textContent = Dt.length
          ? `${tn >= 0 ? "+" : ""}${tn} / ${Dt.length} paired`
          : "Waiting";
      }
    ((z("stressPin").disabled = he || et.length !== B.length || !et.length),
      (z("stressExport").disabled = !et.length));
  }
  function mn() {
    let et = z("stressFilter").value;
    B.forEach((Vt) => {
      let Dt = G[Vt.id],
        tn =
          St() &&
          Dt &&
          _.results[Vt.id] &&
          Dt.success !== _.results[Vt.id].success,
        Dr =
          et === "all" ||
          (et === "failure" && Dt && !Dt.success) ||
          Dt?.outcome === et ||
          (et === "changed" && tn);
      z("stressCell" + Vt.id).classList.toggle("dimmed", !Dr);
    });
  }
  function zt() {
    let et = ue;
    ((z("stressCurrentRobot").textContent =
      getRobotModel(et.robotId).label +
      " \xB7 " +
      getRobotModel(et.robotId).workspace),
      (z("stressWorlds").textContent = B.length),
      z("stressGrid").style.setProperty("--cols", et.side),
      (z("stressGrid").innerHTML = B.map(
        (Vt) =>
          `<button class="stressCell" id="stressCell${Vt.id}" disabled aria-label="Trial ${Vt.id + 1}, pending"><canvas width="174" height="120"></canvas><span class="cellNumber">${String(Vt.id + 1).padStart(3, "0")}</span><span class="cellOutcome">Queued</span><span class="cellBar"></span></button>`,
      ).join("")),
      (z("stressRange").textContent =
        `\xB1${Math.round(et.spread * 1e3)} mm \xB7 ${et.variety ? "mass/size randomized" : "mass/size fixed"}`));
  }
  function Vn(et) {
    ((w.hidden = !0),
      (document.querySelector(".app").inert = !1),
      v(
        et,
        N,
        () => {
          ((w.hidden = !1), (document.querySelector(".app").inert = !0));
        },
        () => Nr(et),
      ));
  }
  function fn(et, Vt) {
    if (!he || Vt !== we) return;
    let Dt = je.shift();
    if (!Dt) {
      V.some((Dr) => Dr._working) || Ln();
      return;
    }
    ((et._working = !0), (et._id = Dt.id));
    let tn = z("stressCell" + Dt.id);
    (tn.classList.add("working"),
      (tn.querySelector(".cellOutcome").textContent = "Simulating"),
      et.postMessage({ type: "trial", scenario: Dt, actions: N }));
  }
  function Dn(et) {
    G[et.id] = et;
    let Vt = z("stressCell" + et.id);
    ((Vt.disabled = !1),
      Vt.classList.remove("working"),
      Vt.classList.add(et.success ? "success" : "failure"),
      (Vt.querySelector(".cellOutcome").textContent = et.outcome),
      (Vt.querySelector(".cellBar").style.width = "100%"),
      Vt.setAttribute(
        "aria-label",
        `Trial ${et.id + 1}: ${et.outcome}. Click to inspect`,
      ),
      (Vt.title = `${et.outcome} \xB7 X ${(et.x * 1e3).toFixed(0)} mm / Z ${(et.z * 1e3).toFixed(0)} mm
Finger friction ${et.config.padFriction} \xB7 mass ${(et.config.mass * 1e3).toFixed(0)} g \xB7 scale ${et.config.sizeScale.toFixed(2)}
Goal error ${(et.goalError * 1e3).toFixed(1)} mm`),
      (Vt.onclick = () => Vn(et)),
      Mt(et.id, et.final),
      Yt(),
      mn());
  }
  function Ut() {
    (V.forEach((et) => et.terminate()),
      (V = []),
      S && (URL.revokeObjectURL(S), (S = null)));
  }
  function Ln() {
    ((he = !1),
      Ut(),
      (z("stressRun").disabled = !1),
      (z("stressRobot").disabled = !1),
      (z("stressCancel").disabled = !0),
      (z("stressStatus").textContent =
        "Sweep complete. Click a cell to inspect or pin A before changing friction."),
      Yt());
  }
  function sr(et) {
    ((he = !1),
      Ut(),
      (z("stressRun").disabled = !1),
      (z("stressRobot").disabled = !1),
      (z("stressCancel").disabled = !0),
      (z("stressStatus").textContent = et),
      Yt());
  }
  function zi(et, Vt) {
    ((et.onmessage = ({ data: Dt }) => {
      if (Vt === we)
        if (Dt.type === "compiled")
          ((N = Dt.actions),
            j.set(ue.robotId, N),
            V.forEach((tn) => fn(tn, Vt)));
        else if (Dt.type === "progress") {
          let tn = z("stressCell" + Dt.id);
          ((tn.querySelector(".cellBar").style.width = Dt.progress * 100 + "%"),
            w.hidden || Mt(Dt.id, Dt.frame));
        } else
          Dt.type === "result"
            ? ((et._working = !1), Dn(Dt.result), fn(et, Vt))
            : Dt.type === "error" && sr("Simulation stopped: " + Dt.message);
    }),
      (et.onerror = (Dt) =>
        sr(
          "Worker unavailable: " +
            Dt.message +
            ". Try a browser that permits local Web Workers.",
        )));
  }
  ((z("stressRun").onclick = () => {
    if (he) return;
    (m(), we++);
    let et = we;
    ((ue = gt()),
      (N = j.get(ue.robotId) || null),
      (B = createStressScenarios(ue)),
      (G = Array(B.length)),
      (je = B.slice()),
      (he = !0),
      (ve = performance.now()),
      zt(),
      Yt(),
      (z("stressRun").disabled = !0),
      (z("stressRobot").disabled = !0),
      (z("stressCancel").disabled = !1),
      (z("stressStatus").textContent = N
        ? "Running frozen commands in background workers\u2026"
        : "Compiling the nominal command sequence once\u2026"));
    try {
      S = URL.createObjectURL(new Blob([w2], { type: "text/javascript" }));
      let Vt = Math.min(
        3,
        Math.max(1, (navigator.hardwareConcurrency || 2) - 1),
      );
      ((V = Array.from({ length: Vt }, () => new Worker(S))),
        V.forEach((Dt) => zi(Dt, et)),
        N
          ? V.forEach((Dt) => fn(Dt, et))
          : V[0].postMessage({ type: "compile", robotId: ue.robotId }));
    } catch (Vt) {
      sr("Cannot start workers: " + Vt.message);
    }
  }),
    (z("stressCancel").onclick = () => {
      (we++,
        document.querySelectorAll(".stressCell.working").forEach((et) => {
          (et.classList.remove("working"),
            (et.querySelector(".cellOutcome").textContent = "Stopped"));
        }),
        sr(
          "Sweep stopped. Completed cells are retained; queued cells are not failures.",
        ));
    }),
    (z("stressPin").onclick = () => {
      ((_ = { settings: { ...ue }, results: G.slice() }),
        (z("stressStatus").textContent =
          "Baseline A pinned. Change finger friction and run again with the same seed and grid."),
        Yt());
    }),
    (z("stressExport").onclick = () => {
      let et = (Dt) => ({ ...Dt, trajectory: Array.from(Dt.trajectory) }),
        Vt = {
          format: "armature-stress-v1",
          skillId: ue.robotId + "-" + STRESS_SKILL_ID,
          controller:
            "Frozen absolute joint commands at 30 Hz, unchanged across trials; no per-trial IK replanning",
          trajectoryColumns: [
            "control_step",
            ...getRobotModel(ue.robotId).names,
            "object_x",
            "object_y",
            "object_z",
            "qx",
            "qy",
            "qz",
            "qw",
          ],
          actionUnits: getRobotModel(ue.robotId).units,
          trajectoryHz: 10,
          settings: ue,
          actions: N,
          results: G.filter(Boolean).map(et),
          baseline: _
            ? {
                settings: _.settings,
                results: _.results.filter(Boolean).map(et),
              }
            : null,
          limitations:
            "Kinematic arm, approximate contact proxies, no arm dynamics/self-collision; failure classes are heuristic. JSON is a reproducible experiment report, not a LeRobot dataset.",
        };
      x(JSON.stringify(Vt), "skill-stress-lab.json", "application/json");
    }));
  function Nr(et) {
    let Vt = URL.createObjectURL(new Blob([w2], { type: "text/javascript" })),
      Dt = new Worker(Vt);
    (v(
      et,
      N,
      () => {
        ((w.hidden = !1), (document.querySelector(".app").inert = !0));
      },
      null,
      "Reproducing the same seed and commands\u2026",
    ),
      (Dt.onmessage = ({ data: tn }) => {
        if (tn.type === "result") {
          let Dr = Math.max(
            ...tn.result.final.map((na, Mu) => Math.abs(na - et.final[Mu])),
          );
          (v(
            tn.result,
            N,
            () => {
              ((w.hidden = !1), (document.querySelector(".app").inert = !0));
            },
            () => Nr(et),
            `Reproduction max state difference: ${Dr.toExponential(2)} (mixed units).`,
          ),
            Dt.terminate(),
            URL.revokeObjectURL(Vt));
        } else
          tn.type === "error" &&
            (v(
              et,
              N,
              () => {
                ((w.hidden = !1), (document.querySelector(".app").inert = !0));
              },
              null,
              "Reproduction failed: " + tn.message,
            ),
            Dt.terminate(),
            URL.revokeObjectURL(Vt));
      }),
      (Dt.onerror = () => {
        (Dt.terminate(),
          URL.revokeObjectURL(Vt),
          v(
            et,
            N,
            () => {
              ((w.hidden = !1), (document.querySelector(".app").inert = !0));
            },
            null,
            "Reproduction worker failed.",
          ));
      }),
      Dt.postMessage({
        type: "trial",
        scenario: {
          id: et.id,
          row: et.row,
          col: et.col,
          x: et.x,
          z: et.z,
          config: et.config,
        },
        actions: N,
      }));
  }
  ((z("stressFilter").onchange = mn),
    (z("stressFriction").oninput = () =>
      (z("frictionValue").textContent = Number(
        z("stressFriction").value,
      ).toFixed(1))),
    (z("stressSpread").oninput = () =>
      (z("spreadValue").textContent =
        "\xB1" + z("stressSpread").value + " mm")));
  function Kr(et) {
    if (
      (requestAnimationFrame(Kr),
      w.hidden || !z("stressAnimate").checked || et - ge < 70)
    )
      return;
    ge = et;
    let Vt = G.filter(Boolean);
    for (let Dt = 0; Dt < 2 && Vt.length; Dt++) {
      let tn = Vt[Ne++ % Vt.length],
        Dr = tn.trajectoryStride || 16,
        na = tn.trajectory.length / Dr,
        Mu = Math.floor(et / 100) % na;
      Mt(tn.id, tn.trajectory.subarray(Mu * Dr, Mu * Dr + Dr));
    }
    he && Yt();
  }
  return (
    requestAnimationFrame(Kr),
    (ue = gt()),
    (N = j.get(ue.robotId) || null),
    (B = createStressScenarios(ue)),
    zt(),
    { open: () => We.onclick() }
  );
}
export { createStressLab };
