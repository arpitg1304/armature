import {
  defaultReview,
  validateSegment,
  sliceDemonstration,
  exportDemonstrations,
} from "../export/demonstrations.js";
import { createPhonePairing } from "./phone.js";
var up = (s) => JSON.parse(JSON.stringify(s)),
  lp = {
    KeyD: [1, 0, 0],
    KeyA: [-1, 0, 0],
    KeyQ: [0, 1, 0],
    KeyE: [0, -1, 0],
    KeyW: [0, 0, -1],
    KeyS: [0, 0, 1],
  },
  hp = {
    KeyI: [1, 0, 0],
    KeyK: [-1, 0, 0],
    KeyJ: [0, 1, 0],
    KeyL: [0, -1, 0],
    KeyU: [0, 0, 1],
    KeyO: [0, 0, -1],
  },
  I3 = !1,
  C3 = [
    "grasp",
    "slip",
    "contact",
    "placement",
    "recovery",
    "intervention",
    "other",
  ];
function createDemonstrationStudio({
  T: s,
  getEnv: e,
  getState: t,
  getEpisodes: n,
  takeover: r,
  pause: i,
  resumeScript: c,
  beginRecording: o,
  endRecording: h,
  reset: d,
  playEpisode: f,
  seek: p,
  exitReplay: b,
  createDatasetFiles: H,
  save: P,
}) {
  let X = (Y) => document.getElementById(Y),
    y = X("panel-demo"),
    O = null,
    D = "control",
    L = new Set(),
    g = null,
    q = null,
    F = null,
    T = null,
    C = 0,
    M = null,
    E = "",
    W = "",
    $ = !1,
    J = "",
    U = -1,
    Z = 0,
    ee = !1,
    ae = 0,
    oe = "",
    de = 0,
    le = "",
    se = 0,
    xe = globalThis.crypto?.randomUUID?.() || String(Date.now()),
    me = new Map(),
    Le = new Map(),
    Se = () => t().mode === "teleop",
    rt = () => !t().recording && !t().running && !t().replay;
  y.innerHTML = `<div class="panelHeading"><div><span class="sectionKicker">DEMONSTRATION EDITION</span><h2>Teach by doing</h2></div></div>
 <div class="demoViews" role="group" aria-label="Demonstration view"><button id="demoControlView" aria-pressed="true">Control</button><button id="demoReviewView" aria-pressed="false">Review <span id="demoReviewCount">0</span></button></div>
 <p id="demoMessage" class="demoNotice" role="status" aria-live="polite">Take control to move the gripper. Record when ready.</p>
 <div id="demoControlBody"><div class="demoState"><strong id="demoStateTitle">Scripted controller</strong><span id="demoStateDetail">30 Hz control</span></div>
 <div class="fieldPair"><button id="demoTakeover" class="primary">Take control</button><button id="demoPause" class="demoStop">Pause \xB7 Esc</button></div>
 <div class="fieldPair"><button id="demoRecord" class="demoRecord">\u25CF Record demo</button><button id="demoFinish">Finish & review</button></div>
 <div class="settingRow"><label for="demoRGB">Include camera images</label><input id="demoRGB" type="checkbox"></div>
 <label for="demoInputMode">Input device</label><select id="demoInputMode"><option value="keyboard">Keyboard & on-screen controls</option><option value="mouse">Mouse pad & on-screen controls</option><option value="gamepad">Gamepad & on-screen controls</option>${I3 ? '<option value="phone">Phone controller</option>' : ""}</select>
 ${I3 ? '<div id="demoPhone" class="phonePair"></div>' : ""}
 <div class="fieldPair"><label for="demoSpeed">Move speed<select id="demoSpeed"><option value=".015">15 mm/s \xB7 fine</option><option value=".05" selected>50 mm/s \xB7 normal</option><option value=".12">120 mm/s \xB7 fast</option></select></label><label for="demoFrame">Movement axes<select id="demoFrame"><option value="world">World axes</option><option value="tool">Tool axes</option></select></label></div>
 <p class="note">Hold <kbd>Space</kbd> to enable keyboard motion. In World mode, <kbd>W A S D</kbd> moves across the table; <kbd>Q E</kbd> moves up/down. Hold <kbd>Shift</kbd> for fine motion. <kbd>G</kbd> toggles the gripper while enabled.</p>
 <div id="demoMousePad" class="demoMousePad" tabindex="0" role="application" aria-label="Mouse motion pad: hold and drag for X and Z motion"><span>Hold & drag to move X / Z</span><small>Release to stop \xB7 up/down controls below</small></div>
 <div id="demoGamepadArea" hidden><p id="demoGamepad" class="note" role="status">Connect a standard controller and press a button.</p><p class="note">Hold LB to enable. Left stick moves X/Z; triggers move up/down. Right stick rotates pitch/yaw, D-pad left/right rolls, A toggles grip, and RB selects fine speed.</p><details><summary>Controller diagnostics</summary><p id="demoPadMapping" class="note">Waiting for a controller</p><p id="demoPadEnable" class="demoPadEnable">LB enable \xB7 released</p><div class="demoPadAxes">${["Left X", "Left Y", "Right X", "Right Y"].map((Y, ze) => `<label>${Y}<meter id="demoPadAxis${ze}" min="-1" max="1" value="0" aria-label="${Y} raw axis"></meter><output id="demoPadValue${ze}">0.00</output></label>`).join("")}</div><p id="demoPadTriggers" class="note demoNumeric">LT 0.00 \xB7 RT 0.00</p><p id="demoPadButtons" class="note">Pressed buttons \xB7 none</p><p id="demoPadNeutral" class="note">Stick dead zone: 0.15. Release sticks and triggers to check for drift.</p><p class="note">These are live browser readings. Check the mapping here before taking control. A physical controller must be connected to this computer.</p></details></div>
 <div class="demoNudges" aria-label="Hold to move the gripper">${[
   ["x-", "\u2212X"],
   ["x+", "+X"],
   ["y-", "\u2212Y"],
   ["y+", "+Y"],
   ["z-", "\u2212Z"],
   ["z+", "+Z"],
 ]
   .map(([Y, ze]) => `<button data-demo-move="${Y}">${ze}</button>`)
   .join(
     "",
   )}</div><div class="fieldPair"><button id="demoOpen">Open gripper</button><button id="demoClose">Close gripper</button></div>
 <details><summary>Rotate the tool</summary><p class="note">Hold Space + I/K for pitch, J/L for yaw, U/O for roll. Best-effort IK; the SO101 has fewer orientation degrees of freedom. Rotation slows with Fine mode.</p><div class="demoNudges">${[
   ["x-", "Pitch \u2212"],
   ["x+", "Pitch +"],
   ["y-", "Yaw \u2212"],
   ["y+", "Yaw +"],
   ["z-", "Roll \u2212"],
   ["z+", "Roll +"],
 ]
   .map(([Y, ze]) => `<button data-demo-rotate="${Y}">${ze}</button>`)
   .join("")}</div></details>
 <p id="demoPose" class="note demoNumeric"></p><p id="demoIK" class="note" role="status"></p>
 <details><summary>Capture & recovery workflow</summary><button id="demoScript" class="wide">Return to scripted controller</button><p class="note">Replans from the current object state. Best effort after a manual recovery; check the next motion.</p><div class="fieldPair"><button id="demoReset">Reset same seed</button><button id="demoNext">Next randomized scene</button></div><p class="note">Both finish any open recording before reset. New scenes keep the selected task and robot.</p><label for="demoEvent">Live event marker<select id="demoEvent">${C3.map((Y) => `<option>${Y}</option>`).join("")}</select></label><button id="demoMarkLive" class="wide">Mark current recorded frame</button></details>
 <p class="note">A mouse/gamepad release holds the target. Blur, a hidden tab, device disconnect or Esc pauses simulation. Inputs never control a physical robot.</p></div>
 <div id="demoReviewBody" hidden><label for="demoEpisode">Recorded episode<select id="demoEpisode"></select></label><p id="demoReviewEmpty" class="note">Record a demo or scripted episode to begin. Episodes shown here belong to the current robot.</p>
 <fieldset id="demoReviewFields" disabled><div class="demoReviewPreview"><canvas id="demoReviewPreview" width="320" height="240" aria-label="Recorded camera preview"></canvas><p id="demoReviewPreviewNote" class="note">State-only episode</p></div><label for="demoReviewCamera">Recorded view<select id="demoReviewCamera"><option value="overhead">Overhead</option><option value="wrist">Wrist</option><option value="custom">Custom</option></select></label>
 <div class="fieldPair"><button id="demoPlay">Play selection</button><button id="demoExitReview">Return to live setup</button></div><label for="demoTimeline">Frame <output id="demoFrameText">0</output></label><input id="demoTimeline" type="range" min="0" max="0" value="0" step="1"><p id="demoFrameInfo" class="note demoNumeric"></p>
 <div class="fieldPair"><label for="demoStart">Start frame<input id="demoStart" type="number" min="0" value="0"></label><label for="demoEnd">End frame \xB7 inclusive<input id="demoEnd" type="number" min="0" value="0"></label></div><div class="fieldPair"><button id="demoSetStart">Set start here</button><button id="demoSetEnd">Set end here</button></div><button id="demoFullRange" class="wide">Restore full range</button>
 <label for="demoLabel">Human label for this selection<select id="demoLabel"><option value="unreviewed">Unreviewed</option><option value="success">Success</option><option value="failure">Failure</option><option value="uncertain">Uncertain</option></select></label><p id="demoEvaluator" class="note"></p><label for="demoNotes">Notes / failure reason<textarea id="demoNotes" rows="3" maxlength="2000" placeholder="What happened? What should this example teach?"></textarea></label>
 <div class="fieldPair"><label for="demoMarkerType">Event<select id="demoMarkerType">${C3.map((Y) => `<option>${Y}</option>`).join("")}</select></label><label for="demoMarkerNote">Marker note<input id="demoMarkerNote" type="text" maxlength="120"></label></div><button id="demoMark" class="wide">Add marker at this frame</button><div id="demoMarkers"></div>
 <label class="settingRow" for="demoIncluded">Include selection in curated export<input id="demoIncluded" type="checkbox"></label></fieldset>
 <div class="captureCard"><p id="demoExportCount">0 selections ready</p><button id="demoExport" class="wide primary" disabled>Download curated dataset</button><button id="demoAnnotations" class="wide" disabled>Download review notes</button><p class="note">Original frames are retained. Trims preserve source frame references; human labels never replace simulator success flags. Selections with different image/object shapes export as separate datasets.</p></div></div>`;
  function tt(Y) {
    X("demoMessage").textContent = Y;
  }
  function ot(Y) {
    try {
      Y();
    } catch (ze) {
      tt(ze.message);
    }
  }
  function Ot(Y) {
    return (
      Y.demoId ?? (Y.demoId = `${xe}-${++se}`),
      Le.set(Y.demoId, {
        sourceEpisodeId: Y.demoId,
        robotId: Y.config.robotId,
        task: Y.task,
        frameCount: Y.frames.length,
        evaluatorSuccess: !!Y.success,
      }),
      Y.demoId
    );
  }
  function Ze(Y) {
    let ze = Ot(Y);
    if (!me.has(ze)) {
      let Ge = defaultReview(Y);
      ((Ge.markers = (Y.demonstration?.markers || []).map((st) => ({ ...st }))),
        me.set(ze, Ge));
    }
    return me.get(ze);
  }
  function Nt() {
    let Y = e();
    (Y.fk(),
      (F = Y.tcp().clone()),
      (T = Y.links[Y.model.tcp].getWorldQuaternion(new s.Quaternion())),
      (C = Y.target?.[Y.n] ?? Y.q[Y.n]),
      (E = ""),
      (M = null));
  }
  function De() {
    (O?.clear(), L.clear(), (g = null), (q = null), ($ = !1));
  }
  function Kt(Y = "Paused. Take control to continue.") {
    (De(), i(), (ee = !1), Nt(), tt(Y), at());
  }
  function fe() {
    if (t().replay)
      throw Error(
        "Exit recorded replay before taking control. Replay cannot resume physics.",
      );
    if (t().training) throw Error("Stop training before taking control.");
    if (e().terminated || e().truncated)
      throw Error(
        "This task has ended. Reset the scene before taking control.",
      );
    (r(),
      (be = !!t().recording),
      (W = "teleop"),
      Nt(),
      tt(
        X("demoInputMode").value === "phone"
          ? "Phone control enabled. Steer on your phone; Pause works on either device."
          : "Manual control ready. Hold Space, drag the pad, or hold a movement button.",
      ),
      at());
  }
  function Oe(Y) {
    if (
      ((D = Y),
      (X("demoControlBody").hidden = Y !== "control"),
      (X("demoReviewBody").hidden = Y !== "review"),
      X("demoControlView").setAttribute(
        "aria-pressed",
        String(Y === "control"),
      ),
      X("demoReviewView").setAttribute("aria-pressed", String(Y === "review")),
      Y === "review")
    ) {
      if (t().recording) {
        (tt("Finish recording before reviewing."), Oe("control"));
        return;
      }
      (i(), De(), bt(), n().length && U < 0 && ut(n().length - 1));
    } else ee = !1;
  }
  ((X("demoControlView").onclick = () => Oe("control")),
    (X("demoReviewView").onclick = () => Oe("review")),
    (X("demoTakeover").onclick = () =>
      ot(() => {
        (t().replay && b(), fe());
      })),
    (X("demoPause").onclick = () => Kt()),
    (X("demoRecord").onclick = () =>
      ot(() => {
        if (t().recording)
          (h(), i(), tt("Recording saved. Open Review to trim and label it."));
        else {
          if (t().replay) throw Error("Exit replay before recording.");
          ((e().terminated || e().truncated) && d(!1), o(X("demoRGB").checked));
          try {
            fe();
          } catch (Y) {
            throw (h(), Y);
          }
          tt("Recording manual demonstration at 30 Hz. Hold Space to move.");
        }
        at();
      })),
    (X("demoFinish").onclick = () =>
      ot(() => {
        (t().recording && h(),
          i(),
          De(),
          Oe("review"),
          n().length && ut(n().length - 1),
          tt("Select the useful range and add a human label."));
      })));
  let Me = (Y) =>
    ot(() => {
      if (!Se() || !t().running)
        throw Error("Take control before moving the gripper.");
      C = Y ? e().model.open : e().model.close;
    });
  ((X("demoOpen").onclick = () => Me(!0)),
    (X("demoClose").onclick = () => Me(!1)),
    (X("demoScript").onclick = () =>
      ot(() => {
        (De(),
          c(),
          tt("Scripted controller resumed from the current scene."),
          at());
      })));
  for (let [Y, ze] of [
    ["demoReset", !1],
    ["demoNext", !0],
  ])
    X(Y).onclick = () =>
      ot(() => {
        (De(),
          d(ze),
          Nt(),
          tt(
            ze
              ? "New randomized scene ready. Take control to demonstrate."
              : "Initial scene restored.",
          ),
          at());
      });
  let ke = (Y) =>
      Y?.closest?.('input,textarea,select,[contenteditable="true"]'),
    Ee = () => D === "control" && !y.hidden;
  (window.addEventListener("keydown", (Y) => {
    if (Y.code === "Escape" && (t().running || Se() || t().recording || ee)) {
      (Y.preventDefault(), Kt());
      return;
    }
    ke(Y.target) ||
      !Ee() ||
      !Se() ||
      X("demoInputMode").value !== "keyboard" ||
      ([
        "Space",
        "ShiftLeft",
        "ShiftRight",
        "KeyG",
        ...Object.keys(lp),
        ...Object.keys(hp),
      ].includes(Y.code) &&
        (Y.preventDefault(),
        L.add(Y.code),
        Y.code === "KeyG" &&
          !Y.repeat &&
          L.has("Space") &&
          Me(C < (e().model.open + e().model.close) / 2)));
  }),
    window.addEventListener("keyup", (Y) => L.delete(Y.code)),
    window.addEventListener("blur", () => {
      if (X("demoInputMode").value === "phone" && Ee()) {
        (L.clear(), (g = null), (q = null), ($ = !1));
        return;
      }
      Se() || t().recording
        ? Kt("Paused because the window lost focus.")
        : De();
    }),
    document.addEventListener("visibilitychange", () => {
      document.hidden &&
        (Se() || t().recording || ee) &&
        Kt("Paused while this tab is hidden.");
    }),
    window.addEventListener("gamepaddisconnected", () => {
      Se() &&
        X("demoInputMode").value === "gamepad" &&
        Kt("Gamepad disconnected. Motion paused.");
    }),
    y.addEventListener("focusin", (Y) => {
      ke(Y.target) && De();
    }));
  for (let Y of y.querySelectorAll("[data-demo-move],[data-demo-rotate]")) {
    let ze = () => {
      if (!Se() || !t().running) {
        tt("Take control before moving.");
        return;
      }
      q = {
        axis: Y.dataset.demoMove || Y.dataset.demoRotate,
        rotate: !!Y.dataset.demoRotate,
      };
    };
    ((Y.onpointerdown = (Ge) => {
      (Ge.preventDefault(), Y.setPointerCapture?.(Ge.pointerId), ze());
    }),
      (Y.onpointerup =
        Y.onpointercancel =
        Y.onlostpointercapture =
          () => (q = null)),
      (Y.onkeydown = (Ge) => {
        (Ge.key === "Enter" || Ge.key === " ") && (Ge.preventDefault(), ze());
      }),
      (Y.onkeyup = () => (q = null)),
      (Y.onblur = () => (q = null)));
  }
  let Q = X("demoMousePad");
  ((Q.onpointerdown = (Y) => {
    if (!Se() || !t().running) {
      tt("Take control before moving.");
      return;
    }
    (Y.preventDefault(),
      Q.setPointerCapture?.(Y.pointerId),
      (g = { x: Y.clientX, y: Y.clientY, dx: 0, dz: 0 }));
  }),
    (Q.onpointermove = (Y) => {
      g &&
        ((g.dx = Math.max(-1, Math.min(1, (Y.clientX - g.x) / 70))),
        (g.dz = Math.max(-1, Math.min(1, (Y.clientY - g.y) / 70))));
    }),
    (Q.onpointerup =
      Q.onpointercancel =
      Q.onlostpointercapture =
        () => (g = null)));
  for (let Y of ["demoInputMode", "demoFrame"])
    X(Y).onchange = () => {
      (De(), Nt(), at());
    };
  function A() {
    if (typeof navigator.getGamepads != "function")
      return {
        pad: null,
        message:
          "Gamepad API unavailable in this browser. Use keyboard or mouse.",
      };
    try {
      let Y = Array.from(navigator.getGamepads()).filter((Ge) => Ge?.connected),
        ze = Y.find((Ge) => Ge.mapping === "standard");
      return {
        pad: ze,
        message: ze
          ? "Connected: " + ze.id
          : Y.length
            ? "Controller detected with unsupported mapping. Use a standard-mapped controller, keyboard or mouse."
            : "No controller detected. Connect one, then press a button while this tab is focused.",
      };
    } catch (Y) {
      return {
        pad: null,
        message:
          Y.name === "SecurityError"
            ? "Gamepad access is blocked by browser permissions. Open this HTML in its own browser tab, or use keyboard or mouse."
            : "Gamepad readings unavailable. Reconnect the controller or use keyboard or mouse.",
      };
    }
  }
  function Pe() {
    let { pad: Y, message: ze } = A(),
      Ge = Y ? Y.index + ":" + Y.id : "";
    (J &&
      Ge !== J &&
      Se() &&
      Kt(
        Ge
          ? "Controller changed. Motion paused; release inputs before resuming."
          : "Gamepad disconnected or access lost. Motion paused.",
      ),
      (J = Ge),
      (X("demoGamepad").textContent = ze));
    let st = Array.from({ length: 4 }, (Ct, _t) =>
        Number.isFinite(Y?.axes[_t])
          ? Math.max(-1, Math.min(1, Y.axes[_t]))
          : 0,
      ),
      it = Y?.buttons || [],
      lt = [
        "A",
        "B",
        "X",
        "Y",
        "LB",
        "RB",
        "LT",
        "RT",
        "Back",
        "Start",
        "Left stick",
        "Right stick",
        "D-pad up",
        "D-pad down",
        "D-pad left",
        "D-pad right",
        "Home",
      ];
    X("demoPadMapping").textContent = Y
      ? "Standard mapping \xB7 controller " +
        (Y.index + 1) +
        " \xB7 " +
        Y.axes.length +
        " axes / " +
        it.length +
        " buttons"
      : "No standard controller connected";
    let xt = !!it[4]?.pressed;
    ((X("demoPadEnable").textContent =
      "LB enable \xB7 " +
      (xt ? "held" : "released") +
      (xt && (!Se() || !t().running) ? " \xB7 robot paused" : "")),
      X("demoPadEnable").classList.toggle("held", xt),
      st.forEach((Ct, _t) => {
        ((X("demoPadAxis" + _t).value = Ct),
          (X("demoPadValue" + _t).textContent = Ct.toFixed(2)));
      }));
    let Xt = (Ct) => (Number.isFinite(it[Ct]?.value) ? it[Ct].value : 0);
    ((X("demoPadTriggers").textContent =
      "LT " + Xt(6).toFixed(2) + " \xB7 RT " + Xt(7).toFixed(2)),
      (X("demoPadButtons").textContent =
        "Pressed buttons \xB7 " +
        (it
          .map((Ct, _t) => (Ct.pressed ? lt[_t] || "Button " + _t : null))
          .filter(Boolean)
          .join(", ") || "none")),
      (X("demoPadNeutral").textContent = Y
        ? st.every((Ct) => Math.abs(Ct) < 0.15) && Xt(6) < 0.05 && Xt(7) < 0.05
          ? "Sticks and triggers are neutral. Stick dead zone: 0.15."
          : "Input above dead zone. Release sticks and triggers to check for drift."
        : "Stick dead zone: 0.15. Waiting for live readings."));
  }
  function Ke() {
    let Y = [0, 0, 0],
      ze = [0, 0, 0],
      Ge = X("demoInputMode").value,
      st = !1,
      it = L.has("ShiftLeft") || L.has("ShiftRight");
    if (
      Ee() &&
      Ge === "keyboard" &&
      L.has("Space") &&
      !ke(document.activeElement)
    ) {
      st = !0;
      for (let lt of L)
        (lp[lt]?.forEach((xt, Xt) => (Y[Xt] += xt)),
          hp[lt]?.forEach((xt, Xt) => (ze[Xt] += xt)));
    }
    if (Ee() && Ge === "phone") {
      let lt = O?.read();
      lt &&
        ((st = lt.enabled),
        (it = lt.fine),
        lt.translation.forEach((xt, Xt) => (Y[Xt] = xt)),
        lt.rotation.forEach((xt, Xt) => (ze[Xt] = xt)));
    }
    if (
      (Ee() && Ge === "mouse" && g && ((st = !0), (Y[0] = g.dx), (Y[2] = g.dz)),
      Ee() && q)
    ) {
      st = !0;
      let lt = q.rotate ? ze : Y;
      lt["xyz".indexOf(q.axis[0])] = q.axis[1] === "+" ? 1 : -1;
    }
    if (Ee() && Ge === "gamepad" && !ke(document.activeElement)) {
      let { pad: lt } = A(),
        xt = (Xt) =>
          Math.abs(Xt) < 0.15
            ? 0
            : (Math.sign(Xt) * (Math.abs(Xt) - 0.15)) / 0.85;
      if (lt) {
        let Xt = !!lt.buttons[0]?.pressed;
        (lt.buttons[4]?.pressed &&
          ((st = !0),
          (Y[0] = xt(lt.axes[0] || 0)),
          (Y[2] = xt(lt.axes[1] || 0)),
          (Y[1] = (lt.buttons[7]?.value || 0) - (lt.buttons[6]?.value || 0)),
          (ze[0] = -xt(lt.axes[3] || 0)),
          (ze[1] = -xt(lt.axes[2] || 0)),
          (ze[2] = +!!lt.buttons[15]?.pressed - +!!lt.buttons[14]?.pressed),
          (it = !!lt.buttons[5]?.pressed),
          Xt &&
            !$ &&
            (C =
              C < (e().model.open + e().model.close) / 2
                ? e().model.open
                : e().model.close)),
          ($ = Xt));
      } else $ = !1;
    }
    for (let lt of [Y, ze]) {
      let xt = Math.hypot(...lt);
      if (xt > 1) for (let Xt = 0; Xt < 3; Xt++) lt[Xt] /= xt;
    }
    return {
      translation: Y,
      rotation: ze,
      enabled: st,
      fine: it,
      device: q ? "on-screen" : Ge,
    };
  }
  function Ce() {
    let Y = e();
    F || Nt();
    let ze = Ke(),
      Ge = Number(X("demoSpeed").value) * (ze.fine ? 0.25 : 1),
      st = 0.55 * (Number(X("demoSpeed").value) / 0.05) * (ze.fine ? 0.25 : 1),
      it = new s.Vector3(...ze.translation).multiplyScalar(Ge / 30),
      lt = new s.Vector3(...ze.rotation).multiplyScalar(st / 30);
    X("demoFrame").value === "tool" && it.applyQuaternion(T);
    let xt = F.clone().add(it),
      Xt = new s.Quaternion().setFromEuler(
        new s.Euler(lt.x, lt.y, lt.z, "XYZ"),
      ),
      Ct = T.clone();
    X("demoFrame").value === "tool" ? Ct.multiply(Xt) : Ct.premultiply(Xt);
    let _t = ze.enabled && (it.lengthSq() > 0 || lt.lengthSq() > 0),
      ft = Y.target.slice();
    if (((E = ""), _t))
      if (!(
        xt.y >= 0.006 * Y.model.sizeScale &&
        xt.y <= 1.8 * Y.model.sizeScale &&
        Math.hypot(xt.x - Y.model.baseX, xt.z) < 1.8 * Y.model.sizeScale
      ))
        E = "Workspace limit: requested motion held.";
      else {
        let fr = Y.ik(xt, Y.q, 24, Ct);
        Y.fk(fr.q);
        let ni = Y.tcp().distanceTo(xt),
          nc = Y.links[Y.model.tcp]
            .getWorldQuaternion(new s.Quaternion())
            .angleTo(Ct);
        (Y.fk(),
          ni > 0.012 * Y.model.sizeScale || nc > 0.2
            ? (E = "IK limit: reduce rotation or move away from this pose.")
            : ((ft = fr.q), F.copy(xt), T.copy(Ct)));
      }
    ft[Y.n] = Math.max(
      Y.model.jawLimit.lower,
      Math.min(Y.model.jawLimit.upper, C),
    );
    let Zt = Y.tcp();
    return (
      Zt.distanceTo(F) > 0.045 * Y.model.sizeScale &&
        (F.copy(Zt),
        T.copy(Y.links[Y.model.tcp].getWorldQuaternion(new s.Quaternion())),
        (E = "Tracking lag: target recentered on the actual tool.")),
      (M = {
        device: ze.device,
        ...(ze.device === "phone" ? { phone: O?.metadata() } : {}),
        enabled: ze.enabled,
        axes: X("demoFrame").value,
        translationVelocity: ze.translation.map((Zn) => Zn * Ge),
        rotationVelocity: ze.rotation.map((Zn) => Zn * st),
        requestedTCP: F.toArray(),
        requestedTCPQuaternion: T.toArray(),
        gripperTarget: ft[Y.n],
        fine: ze.fine,
        blocked: !!E,
      }),
      ft
    );
  }
  function _e() {
    return M ? up(M) : null;
  }
  function bt() {
    let Y = n(),
      ze = Y.map((st) => Ot(st) + ":" + st.frames.length).join("|");
    if (ze === oe) return;
    oe = ze;
    let Ge = X("demoEpisode");
    (Ge.replaceChildren(),
      Y.forEach((st, it) => {
        let lt = document.createElement("option");
        ((lt.value = String(it)),
          (lt.textContent = `${it + 1} \xB7 ${st.task} \xB7 ${(st.frames.length / 30).toFixed(1)} s`),
          Ge.append(lt),
          Ze(st));
      }),
      U >= Y.length && (U = -1),
      U >= 0 && (Ge.value = String(U)),
      (X("demoReviewEmpty").hidden = Y.length > 0),
      (X("demoReviewCount").textContent = Y.length),
      (X("demoReviewFields").disabled = U < 0 || !Y.length),
      ie());
  }
  function Be() {
    return n()[U];
  }
  function ut(Y) {
    if (t().recording) throw Error("Stop recording before reviewing.");
    let ze = n()[Y];
    if (!ze) throw Error("Choose an episode.");
    ((ee = !1),
      (U = Y),
      (Z = Ze(ze).start),
      f(Y),
      (X("demoEpisode").value = String(Y)),
      (X("demoReviewFields").disabled = !1),
      Pt(),
      Et(Z));
  }
  function Pt() {
    let Y = Be();
    if (!Y) return;
    let ze = Ze(Y);
    ((X("demoStart").value = ze.start),
      (X("demoEnd").value = ze.end),
      (X("demoStart").max = X("demoEnd").max = Y.frames.length - 1),
      (X("demoTimeline").max = Y.frames.length - 1),
      (X("demoLabel").value = ze.label),
      (X("demoNotes").value = ze.notes),
      (X("demoIncluded").checked = ze.included),
      (X("demoEvaluator").textContent =
        "Simulator result: " +
        (Y.success ? "success" : Y.termination || "not successful") +
        ". Human label applies only to the selected frames."),
      Ht(),
      ie());
  }
  let yt = 0,
    qe = "";
  function It() {
    let Y = Be(),
      ze = Y?.frames[Z];
    if (!ze) return;
    let Ge = X("demoReviewCamera").value,
      st = Ot(Y) + ":" + Z + ":" + Ge;
    if (st === qe) return;
    qe = st;
    let it = X("demoReviewPreview"),
      lt = it.getContext("2d"),
      xt = ze["observation.images." + Ge],
      Xt = ++yt;
    if (
      (lt.clearRect(0, 0, it.width, it.height),
      (it.hidden = !xt?.bytes),
      !xt?.bytes)
    ) {
      X("demoReviewPreviewNote").textContent =
        "No " +
        Ge +
        " image in this episode. Inspect the 3D replay and joint state.";
      return;
    }
    let Ct = URL.createObjectURL(new Blob([xt.bytes], { type: "image/png" })),
      _t = new Image();
    ((_t.onload = () => {
      if ((URL.revokeObjectURL(Ct), Xt !== yt)) return;
      let ft = Y.config.cameras?.cameras.find((Zt) => Zt.id === Ge);
      ((it.width = ft?.width || _t.naturalWidth || 160),
        (it.height = ft?.height || _t.naturalHeight || 120),
        lt.drawImage(_t, 0, 0, it.width, it.height),
        (X("demoReviewPreviewNote").textContent =
          "Recorded " + Ge + " \xB7 frame " + Z));
    }),
      (_t.onerror = () => {
        (URL.revokeObjectURL(Ct),
          Xt === yt &&
            ((it.hidden = !0),
            (X("demoReviewPreviewNote").textContent =
              "Could not decode this recorded image.")));
      }),
      (_t.src = Ct));
  }
  function Et(Y) {
    let ze = Be();
    if (!ze) return;
    ((Z = Math.max(0, Math.min(ze.frames.length - 1, Math.floor(Y)))),
      t().replay && p(Z),
      (X("demoTimeline").value = Z),
      (X("demoFrameText").textContent =
        `${Z} / ${ze.frames.length - 1} \xB7 ${(Z / 30).toFixed(2)} s`));
    let Ge = ze.frames[Z];
    ((X("demoFrameInfo").textContent =
      "Controller: " +
      (Ge._controller || "legacy") +
      " \xB7 TCP " +
      Ge["observation.tcp"].map((st) => st.toFixed(3)).join(", ") +
      " m"),
      It());
  }
  function jt(Y, ze) {
    let Ge = Be();
    if (!Ge) return;
    validateSegment(Y, ze, Ge.frames.length);
    let st = Ze(Ge);
    ((st.start !== Y || st.end !== ze) &&
      ((st.start = Y),
      (st.end = ze),
      (st.label = "unreviewed"),
      de++,
      tt("Selection changed. Add a label for this range.")),
      (ee = !1),
      (X("demoPlay").textContent = "Play selection"),
      Pt(),
      Et(Math.max(Y, Math.min(ze, Z))));
  }
  function Ht() {
    let Y = Be(),
      ze = X("demoMarkers");
    (ze.replaceChildren(),
      Y &&
        Ze(Y).markers.forEach((Ge, st) => {
          let it = document.createElement("div");
          it.className = "demoMarker";
          let lt = document.createElement("button");
          ((lt.textContent = `${(Ge.frame / 30).toFixed(2)} s \xB7 ${Ge.type}${Ge.note ? " \xB7 " + Ge.note : ""}`),
            (lt.onclick = () => {
              ((ee = !1), Et(Ge.frame));
            }));
          let xt = document.createElement("button");
          ((xt.textContent = "\xD7"),
            xt.setAttribute("aria-label", "Remove marker"),
            (xt.onclick = () => {
              (Ze(Y).markers.splice(st, 1), de++, Ht());
            }),
            it.append(lt, xt),
            ze.append(it));
        }));
  }
  function dt(Y, ze, Ge, st = "") {
    var lt;
    if (!Y?.frames.length) throw Error("Record at least one frame first.");
    if (!C3.includes(Ge)) throw Error("Unknown marker type.");
    let it = {
      frame: Math.min(Y.frames.length - 1, ze),
      type: Ge,
      note: st.slice(0, 120),
    };
    (Y === t().recording
      ? (Y.demonstration ?? (Y.demonstration = {}),
        (lt = Y.demonstration).markers ?? (lt.markers = []),
        Y.demonstration.markers.push(it))
      : (Ze(Y).markers.push(it), de++, Ht()),
      tt("Marked " + Ge + " at frame " + it.frame + "."));
  }
  ((X("demoMarkLive").onclick = () =>
    ot(() => {
      let Y = t().recording;
      if (!Y) throw Error("Start recording to add a live marker.");
      dt(Y, Y.frames.length - 1, X("demoEvent").value);
    })),
    (X("demoEpisode").onchange = () =>
      ot(() => ut(Number(X("demoEpisode").value)))),
    (X("demoTimeline").oninput = () => {
      ((ee = !1),
        (X("demoPlay").textContent = "Play selection"),
        Et(Number(X("demoTimeline").value)));
    }),
    (X("demoReviewCamera").onchange = It),
    (X("demoPlay").onclick = () =>
      ot(() => {
        if (!Be()) return;
        (t().replay || f(U), (ee = !ee), (ae = 0));
        let Y = Ze(Be());
        ((Z >= Y.end || Z < Y.start) && Et(Y.start),
          (X("demoPlay").textContent = ee
            ? "Pause playback"
            : "Play selection"));
      })),
    (X("demoExitReview").onclick = () =>
      ot(() => {
        ((ee = !1),
          b(),
          Oe("control"),
          tt(
            "Returned to a fresh live setup. Recorded frames remain available.",
          ));
      })));
  for (let Y of ["demoStart", "demoEnd"])
    X(Y).onchange = () =>
      ot(() => jt(Number(X("demoStart").value), Number(X("demoEnd").value)));
  ((X("demoSetStart").onclick = () => ot(() => jt(Z, Ze(Be()).end))),
    (X("demoSetEnd").onclick = () => ot(() => jt(Ze(Be()).start, Z))),
    (X("demoFullRange").onclick = () =>
      ot(() => jt(0, Be().frames.length - 1))),
    (X("demoLabel").onchange = () => {
      Be() && ((Ze(Be()).label = X("demoLabel").value), de++);
    }),
    (X("demoNotes").oninput = () => {
      Be() && ((Ze(Be()).notes = X("demoNotes").value.slice(0, 2e3)), de++);
    }),
    (X("demoMark").onclick = () =>
      ot(() => {
        (dt(Be(), Z, X("demoMarkerType").value, X("demoMarkerNote").value),
          (X("demoMarkerNote").value = ""));
      })),
    (X("demoIncluded").onchange = () => {
      Be() && ((Ze(Be()).included = X("demoIncluded").checked), de++, ie());
    }));
  function ie() {
    let Y = n().filter((ze) => Ze(ze).included);
    ((X("demoExportCount").textContent =
      Y.length +
      " selection" +
      (Y.length === 1 ? "" : "s") +
      " \xB7 " +
      Y.reduce((ze, Ge) => ze + Ze(Ge).end - Ze(Ge).start + 1, 0) +
      " frames"),
      (X("demoExport").disabled = !Y.length || !!t().recording),
      (X("demoAnnotations").disabled = !me.size));
  }
  function Qe() {
    return {
      format: "armature-review-v1",
      scope:
        "All reviewed episodes from this browser session, including other robots",
      episodes: Array.from(me, ([Y, ze]) => ({ ...Le.get(Y), review: ze })),
    };
  }
  let mt = !1;
  ((X("demoExport").onclick = async () => {
    if (!mt)
      try {
        if (t().recording) throw Error("Finish recording before exporting.");
        ((mt = !0),
          (X("demoExport").disabled = !0),
          tt("Preparing curated dataset\u2026"),
          await new Promise((ze) => setTimeout(ze, 0)));
        let Y = n()
          .filter((ze) => Ze(ze).included)
          .map((ze) => sliceDemonstration(ze, Ze(ze), Ot(ze)));
        (P(
          exportDemonstrations(Y, H, Qe()),
          "armature-curated-demonstrations.zip",
          "application/zip",
        ),
          (de = 0),
          tt("Curated dataset downloaded. Original recordings are retained."));
      } catch (Y) {
        tt(Y.message);
      } finally {
        ((mt = !1), ie());
      }
  }),
    (X("demoAnnotations").onclick = () => {
      (P(
        JSON.stringify(Qe(), null, 2),
        "armature-review-notes.json",
        "application/json",
      ),
        (de = 0),
        tt("Review notes downloaded. Dataset frames are exported separately."));
    }),
    window.addEventListener("beforeunload", (Y) => {
      de && (Y.preventDefault(), (Y.returnValue = ""));
    }));
  function at() {
    let Y = t(),
      ze = n().length,
      Ge = [
        Y.mode,
        Y.running,
        !!Y.recording,
        !!Y.replay,
        ze,
        e().model.id,
      ].join("|");
    Ge !== le &&
      ((le = Ge),
      (X("demoStateTitle").textContent = Y.replay
        ? "Recorded replay"
        : Y.mode === "teleop"
          ? "Manual controller"
          : Y.mode === "expert"
            ? "Scripted controller"
            : Y.mode + " controller"),
      (X("demoRGB").checked = X("rgb").checked),
      (X("demoRGB").disabled = !!Y.recording || ze > 0),
      (X("demoRecord").textContent = Y.recording
        ? "\u25A0 Stop recording"
        : "\u25CF Record demo"),
      (X("demoTakeover").textContent = Y.replay
        ? "Reset to live control"
        : Se() && !Y.running
          ? "Resume control"
          : "Take control"),
      (X("demoRecord").disabled = !!Y.replay || Y.training),
      (X("demoFinish").disabled = !Y.recording && !ze),
      (X("demoScript").disabled = !!Y.replay || Y.training),
      bt(),
      ie());
    let st = e();
    ((X("demoStateDetail").textContent =
      (Y.recording
        ? "\u25CF REC \xB7 " +
          (Y.recording.frames.length / 30).toFixed(1) +
          " s"
        : "Not recording") +
      " \xB7 " +
      (Y.running ? "running" : "paused")),
      (X("demoPose").textContent =
        "TCP \xB7 " +
        st
          .tcp()
          .toArray()
          .map((it) => it.toFixed(3))
          .join(" / ") +
        " m"),
      (X("demoIK").textContent =
        E ||
        (Se() && Y.running
          ? M?.enabled
            ? "Motion enabled \xB7 release the input to hold target."
            : "Holding target \xB7 motion enable released."
          : "")),
      (X("demoMousePad").hidden = X("demoInputMode").value !== "mouse"),
      (X("demoGamepadArea").hidden = X("demoInputMode").value !== "gamepad"));
  }
  ((X("demoRGB").onchange = () => {
    !t().recording && !n().length && (X("rgb").checked = X("demoRGB").checked);
  }),
    I3 &&
      (O = createPhonePairing({
        container: X("demoPhone"),
        getStatus: () => {
          let Y = t(),
            ze = e();
          return {
            selected: X("demoInputMode").value === "phone" && Ee(),
            mode: Y.mode,
            running: !!Y.running,
            recording: !!Y.recording,
            frames: Y.recording?.frames.length || 0,
            replay: !!Y.replay,
            blockedReason: Y.training
              ? "Stop training on desktop first."
              : ze.terminated || ze.truncated
                ? "Task ended. Reset the scene on desktop to continue."
                : "",
            robot: ze.model.label,
            tcp: ze.tcp().toArray(),
            limit: E,
          };
        },
        onPause: (Y) => {
          Se() && X("demoInputMode").value === "phone" && Kt(Y);
        },
        onCommand: (Y) => {
          if (Y.type === "select-phone") {
            ((X("demoInputMode").value = "phone"),
              X("demoInputMode").dispatchEvent(new Event("change")));
            return;
          }
          if (Y.type === "pause") {
            Kt("Paused from phone.");
            return;
          }
          if (X("demoInputMode").value !== "phone" || !Ee())
            throw Error(
              "Select Phone controller in Demonstrate > Control on desktop.",
            );
          if (t().replay)
            throw Error(
              "Return to live setup on desktop before controlling the robot.",
            );
          if (Y.type === "takeover") {
            fe();
            return;
          }
          if (Y.type === "record-start") {
            t().recording || X("demoRecord").click();
            return;
          }
          if (Y.type === "record-stop") {
            t().recording && X("demoRecord").click();
            return;
          }
          if (Y.type === "finish") {
            X("demoFinish").click();
            return;
          }
          if (Y.type === "marker") {
            let ze = t().recording;
            if (!ze)
              throw Error("Start recording before marking an intervention.");
            dt(ze, ze.frames.length - 1, "intervention", "Phone marker");
            return;
          }
          if (Y.type === "grip-open" || Y.type === "grip-close") {
            if (!Se() || !t().running)
              throw Error("Tap Take control before operating the gripper.");
            Me(Y.type === "grip-open");
          }
        },
      })));
  let R = 0,
    be = !1;
  function nt(Y) {
    let ze = t();
    if (
      (be &&
        !ze.recording &&
        ze.running &&
        (i(),
        tt(
          "Recording finished or reached its buffer limit. Motion paused; review or download your episode.",
        )),
      (be = !!ze.recording),
      W !== ze.mode && (De(), (W = ze.mode), Se() && Nt()),
      Ee() || De(),
      ee)
    )
      if (!ze.replay) ee = !1;
      else {
        ae += Y;
        let Ge = Math.floor(ae * 30);
        if (Ge) {
          ae -= Ge / 30;
          let st = Ze(Be()).end;
          (Et(Math.min(st, Z + Ge)),
            Z >= st &&
              ((ee = !1), (X("demoPlay").textContent = "Play selection")));
        }
      }
    ((R += Y),
      R > 0.12 &&
        ((R = 0), at(), X("demoInputMode").value === "gamepad" && Pe()));
  }
  return (
    at(),
    {
      action: Ce,
      annotateFrame: _e,
      refresh: at,
      update: nt,
      reanchor: Nt,
      reset: () => {
        (De(),
          (be = !1),
          (F = null),
          (T = null),
          (ee = !1),
          (M = null),
          (le = ""),
          (U = -1),
          (oe = ""));
      },
      takeover: fe,
      pause: Kt,
      get mode() {
        return D;
      },
      get review() {
        return Be() ? up(Ze(Be())) : null;
      },
      reviewEpisode: (Y) => {
        (Oe("review"), ut(Y));
      },
      deriveSelection: () => sliceDemonstration(Be(), Ze(Be()), Ot(Be())),
    }
  );
}
export { createDemonstrationStudio };
