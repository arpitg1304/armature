/** Memory controls and controller/executor bridge. The executor is privileged; policy input comes only from the protocol observation and supplied proprioception. */
import { MEMORY_TASKS, memoryCueText, MemoryProtocol } from "./protocol.js";
import { syncControlSummary } from "../ui/tabs.js";
function createMemoryLab({
  onStart: n,
  onMotion: e,
  onStepMotion: t,
  onStepHold: r,
  onVisual: c,
  onFinish: i,
  onSave: v,
  onResume: s,
  onPause: u,
  getState: a,
}) {
  let b = (M) => document.getElementById(M),
    h = null,
    o = ["Bay A", "Bay B", "Bay C"],
    f = null,
    l = [],
    H = !1,
    p = !1,
    O = "",
    X = document.createElement("details");
  ((X.id = "memoryControls"),
    (X.open = !0),
    (X.innerHTML = `<summary>Memory Lab \xB7 history-dependent tasks</summary><p class="note" id="memoryDescription"></p><label>Controller<select id="memoryController"><option value="history">Scripted history buffer</option><option value="human">You choose from memory</option><option value="none">No history \xB7 fixed prior</option><option value="window">Last 2 seconds only</option><option value="stale">Keep first instruction</option></select></label><label>Distraction / interruption <b id="memoryDelayLabel">6 s</b><input id="memoryDelay" type="range" min="1" max="30" value="6"></label><label>Independent layout seed<input id="memoryLayoutSeed" type="number" min="0" max="4294967295" value="7"></label><label><input id="memoryJitter" type="checkbox"> Randomize start poses and masses</label><label><input id="memoryRecord" type="checkbox" checked> Record trial at 30 Hz</label><button id="memoryStart" class="primary wide">Start memory trial</button><button id="memoryExport" class="wide" disabled>Download memory experiment JSON</button><p class="note">Recording includes cue, distraction and manipulation. RGB uses the recorder\u2019s setting. Scripted baselines choose a part; a shared IK skill executes it. Session limits: 12,000 state frames or 3,000 RGB frames; long manual waits can truncate capture.</p><details><summary>Protocol & leakage controls</summary><p class="note">Use armature.memory.observe() for current policy input. Legacy armature.observe() contains privileged object poses. Join cue sidecars to LeRobot frames by episode/frame index; the stock loader does not add them automatically. Cue history lives in memory/public_events.jsonl; answers and scores live separately in memory/evaluator.json. Covered-bin shields are visual occluders and retract after the choice is committed. This is a prototype protocol, not a validated robot-learning benchmark.</p><pre>const m = armature.memory;
m.reset({task:"covered", seed:42,
  condition:2, controller:"human",
  autoRun:false, record:true});
m.step(); // advances 1/30 second
m.observe(); // current input only
// At phase "choose": m.choose(0)
// After completion: m.report()</pre><p class="note">The main seed controls cue history; the layout seed independently controls physical variation. Hold the layout seed fixed and change condition to create different histories with the same retrieval scene. Conditions: 0\u20132; interrupted kitting: 0\u20135. Exclude the condition and seed from policy inputs.</p><a href="https://corl2026-memory.github.io/" target="_blank" rel="noopener" style="color:#c3ef74">CoRL memory workshop \u2197</a></details>`),
    document.getElementById("memorySettingsHost").appendChild(X));
  let x = document.createElement("div");
  ((x.id = "memoryHud"),
    (x.hidden = !0),
    (x.innerHTML =
      '<div class="memoryHead"><span id="memoryPhase">STUDY</span><button id="memoryStop">Stop \xD7</button></div><div id="memoryCue" role="status"></div><p id="memoryHint"></p><div id="memoryChoices"></div><div class="memoryMetrics"><span>MEMORY <b id="memoryScore">\u2014</b></span><span>PLACEMENT <b id="memoryPhysical">\u2014</b></span><span>TRIALS <b id="memoryTrials">0</b></span></div><small id="memoryCaption">Current instruction only \xB7 no hidden answer in policy input</small>'),
    document.querySelector("main").appendChild(x));
  function y() {
    let M = b("task").value.replace("memory_", "");
    return MEMORY_TASKS[M] ? M : "covered";
  }
  function z() {
    return {
      task: y(),
      seed: Number(b("seed").value) || 1,
      delay: Number(b("memoryDelay").value),
      controller: b("memoryController").value,
      layoutSeed: Number(b("memoryLayoutSeed").value) || 7,
      randomize: b("memoryJitter").checked,
      record: b("memoryRecord").checked,
      object: b("object").value,
    };
  }
  function w() {
    if (!h) return;
    let M = h.observe();
    ((b("memoryPhase").textContent =
      M.phase.toUpperCase() +
      (M.task === "sequence" && M.phase === "choose"
        ? " \xB7 SLOT " + (M.slot + 1) + "/3"
        : "") +
      " \xB7 " +
      M.timestamp.toFixed(1) +
      "s"),
      (b("memoryCue").textContent = memoryCueText(M, o)),
      (b("memoryHint").textContent =
        M.phase === "choose"
          ? "Commit a choice below. The robot will execute it."
          : M.phase === "study" || M.phase === "correction"
            ? "This cue will disappear."
            : M.phase === "interruption"
              ? "A part is already committed. Remember what remains."
              : M.phase === "complete"
                ? f.success
                  ? "Memory and placement both passed."
                  : "Inspect the separate scores to identify the failure."
                : "The current cue is the only instruction visible to the policy."));
    let S = M.phase + M.available.join(",");
    (S !== O &&
      ((O = S),
      (b("memoryChoices").innerHTML = [0, 1, 2]
        .map(
          (U) =>
            `<button data-memory-choice="${U}" ${M.phase !== "choose" || !M.available.includes(U) ? "disabled" : ""}>${String.fromCharCode(65 + U)} \xB7 ${o[U]}</button>`,
        )
        .join("")),
      document
        .querySelectorAll("[data-memory-choice]")
        .forEach((U) => (U.onclick = () => W(Number(U.dataset.memoryChoice))))),
      c(M));
  }
  function m(M = !1) {
    ((p = !1),
      (H = !1),
      (f = h.report()),
      l.push(f),
      (b("memoryScore").textContent = `${f.correctChoices}/${f.totalChoices}`),
      (b("memoryPhysical").textContent =
        `${f.placements.filter((S) => S.placed).length}/${f.totalChoices}`),
      (b("memoryTrials").textContent = l.length),
      (b("memoryExport").disabled = !1),
      i(f, M),
      w());
  }
  function V(M = "Stopped by user") {
    return (p && h && (h.abort(M), m(!0)), f);
  }
  function N(M = {}) {
    V("New memory trial");
    let S = { ...z(), ...M },
      U = new MemoryProtocol(S);
    ((b("memoryController").value = S.controller),
      (b("memoryRecord").checked = !!S.record),
      (b("memoryDelay").value = S.delay),
      (b("memoryDelayLabel").textContent = S.delay + " s"),
      S.layoutSeed !== void 0 && (b("memoryLayoutSeed").value = S.layoutSeed),
      (b("memoryJitter").checked = !!S.randomize));
    let Q = n(S);
    return (
      (o = Q.names),
      (h = U),
      h.events.unshift({
        step: 0,
        timestamp: 0,
        type: "parts",
        names: o.slice(),
      }),
      Object.assign(h.settings, {
        robotId: Q.robotId,
        object: Q.object,
        scene: Q.scene,
        sizeScale: Q.sizeScale,
        environment: Q.environment,
      }),
      (p = !0),
      (H = !1),
      (f = null),
      (x.hidden = !1),
      (b("memoryScore").textContent = "\u2014"),
      (b("memoryPhysical").textContent = "\u2014"),
      (b("memoryCaption").textContent =
        "Scripted high-level memory protocol \xB7 shared physical controller"),
      w(),
      M.autoRun !== !1 && s(),
      R()
    );
  }
  function W(M) {
    if (!p) throw Error("Start a memory trial first.");
    let S = h.choose(M);
    return (e(S.item, S.slot), (H = !0), w(), R());
  }
  function E() {
    if (!p) return R();
    if (
      (h.phase === "choose" &&
        h.settings.controller !== "human" &&
        h.stageTick > 0 &&
        W(h.baselineChoice()),
      H)
    ) {
      let M = t();
      if ((h.advance(), M.fatal))
        return (h.abort("Physics time limit or fallen object"), m(!0), R());
      if (
        M.done &&
        ((H = !1), h.placed(M.placed, M.error), h.phase === "complete")
      )
        return (m(), R());
    } else {
      let M = r();
      if ((h.advance(), M?.truncated))
        return (h.abort("Physics time limit or fallen object"), m(!0), R());
    }
    return (w(), R());
  }
  function R() {
    return h ? { ...h.observe(), parts: o.slice(), proprioception: a() } : null;
  }
  function L() {
    return p && h ? { ...h.observe(), parts: o.slice() } : null;
  }
  function q(M, S) {
    x.hidden = !1;
    let U = S || o;
    ((b("memoryPhase").textContent = "REPLAY \xB7 " + M.phase.toUpperCase()),
      (b("memoryCue").textContent = memoryCueText(M, U)),
      (b("memoryHint").textContent = "Recorded public cue stream"),
      (b("memoryChoices").innerHTML = ""),
      (O = ""),
      c(M));
  }
  function T() {
    (p || (x.hidden = !0), c(null));
  }
  ((b("memoryStart").onclick = () => {
    try {
      N();
    } catch (M) {
      b("memoryDescription").textContent = M.message;
    }
  }),
    (b("memoryStop").onclick = () => {
      (V(), u());
    }),
    (b("memoryDelay").oninput = () =>
      (b("memoryDelayLabel").textContent = b("memoryDelay").value + " s")),
    (b("memoryExport").onclick = () =>
      v(
        JSON.stringify(
          {
            format: "armature-memory-experiment-v1",
            trials: l,
            limitations:
              "Scripted high-level memory baselines; shared privileged IK executor. Choice accuracy and physical placement scored separately. Browser prototype, not sim-to-real validation.",
          },
          null,
          2,
        ),
        "memory-experiments.json",
        "application/json",
      )));
  function j() {
    syncControlSummary();
    let M = b("task").value.startsWith("memory_");
    ((X.open = M),
      (X.style.borderColor = M ? "#88afbf" : "#364955"),
      (b("memoryDescription").textContent = M
        ? MEMORY_TASKS[y()].description
        : "Four memory protocols are available in the Task selector."));
  }
  return (
    j(),
    {
      start: N,
      stop: V,
      step: E,
      choose: W,
      observe: R,
      frame: L,
      replay: q,
      hide: T,
      refresh: j,
      get active() {
        return p;
      },
      get report() {
        return f;
      },
      get events() {
        return h?.events || [];
      },
    }
  );
}
export { createMemoryLab };
