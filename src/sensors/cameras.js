import {
  createDepthSensor,
  depthRange,
  sensorPreview,
  exportSensorSnapshot,
} from "./depth.js";
var Ga = ["overhead", "wrist", "custom"],
  hh = { overhead: "Overhead", wrist: "Wrist", custom: "Custom" },
  Vi = (s) => JSON.parse(JSON.stringify(s));
function enabledCameras(s) {
  return (s?.cameras || [])
    .filter((e) => e.enabled)
    .map((e) => ({ id: e.id, width: e.width, height: e.height }));
}
function createCameraRig({
  T: s,
  scene: e,
  renderer: t,
  getEnv: n,
  getRecording: r,
  getEpisodes: i,
  getReplay: c,
  getSensorEV: o,
  save: h,
  getOverlays: d = () => [],
  getInstances: f = () => [],
  syncVisuals: p = () => {},
}) {
  let b = (fe) => document.getElementById(fe),
    H = b("panel-cameras"),
    P = "overhead",
    X,
    y,
    O = !1,
    D = "",
    L = null,
    g = 0,
    q = Object.fromEntries(Ga.map((fe) => [fe, new s.PerspectiveCamera()])),
    F = new s.Group(),
    T = new Map();
  (e.add(F), (F.visible = !1));
  let C = null,
    M = createDepthSensor({
      T: s,
      scene: e,
      renderer: t,
      getInstances: f,
      getOverlays: d,
      getRGB: () => {
        let fe = t.getSize(new s.Vector2());
        try {
          Se(!1);
          let Oe = X.cameras.find((Me) => Me.id === P);
          return new Uint8Array(
            b(P + "Feed")
              .getContext("2d")
              .getImageData(0, 0, Oe.width, Oe.height).data,
          );
        } finally {
          t.setSize(fe.x, fe.y);
        }
      },
    }),
    E = () => !!r() || !!c(),
    W = () => r()?.config?.cameraSensorEV ?? o(),
    $ = Ga.map((fe) => {
      let Oe = new s.CameraHelper(q[fe]);
      return (F.add(Oe), Oe);
    }),
    J = document.createElement("div");
  ((J.className = "feed"),
    (J.hidden = !0),
    (J.innerHTML =
      '<canvas id="customFeed" width="320" height="240"></canvas><span>03 / CUSTOM</span>'),
    b("wristFeed").parentElement.after(J),
    (H.innerHTML = `<div class="panelHeading"><div><span class="sectionKicker">OBSERVATIONS</span><h2>Cameras</h2></div><span id="cameraCount" class="quietBadge"></span></div>
 <div class="cameraMonitor"><div class="cameraPicker" role="group" aria-label="Choose a camera">${Ga.map((fe) => `<button type="button" data-camera="${fe}" aria-pressed="${fe === P}">${hh[fe]}<small id="cameraBadge-${fe}">RGB</small></button>`).join("")}</div>
 <div class="cameraPreview"><canvas id="cameraPreview" width="320" height="240" aria-label="Selected camera output"></canvas><div class="previewCaption"><span id="cameraPreviewName">Overhead</span><span id="cameraPreviewSize"></span></div></div>
 </div><div class="captureCard"><label for="cameraOutput">Preview output</label><select id="cameraOutput"><option value="rgb">Live RGB</option><option value="depth">Depth \xB7 snapshot</option><option value="instances">Object instances \xB7 snapshot</option></select><div class="fieldPair"><button id="syntheticCapture" type="button">Capture snapshot</button><button id="syntheticDownload" type="button" disabled>Download bundle</button></div><p id="syntheticStatus" class="note" role="status">Capture RGB, depth and instance IDs at one simulation step.</p><div id="depthDisplayControls"><div class="fieldPair"><label for="depthRangeMode">Contrast range<select id="depthRangeMode"><option value="workspace">Robot &amp; objects \xB7 auto</option><option value="scene">Visible scene \xB7 auto</option><option value="clip">Full clipping range</option></select></label><label for="depthPalette">Palette<select id="depthPalette"><option value="viridis">Viridis</option><option value="gray">Grayscale</option></select></label></div><div id="depthColorBar" style="height:10px;border-radius:5px;background:linear-gradient(90deg,#fde725,#5cc863,#21908d,#3b518b,#440154)"></div><p id="depthRangeLabels" class="note">Capture a snapshot to see the depth scale.</p><p id="depthPixelReadout" class="note" aria-live="polite">Point at the preview to inspect depth.</p></div><details><summary>Instance legend &amp; depth conventions</summary><p class="note">Near surfaces are bright; far surfaces are dark. No hit is charcoal. Auto contrast uses the 2nd\u201398th percentiles; values outside the displayed range saturate. Display adjustments never change raw metric depth. Ideal visual geometry; transparent surfaces count as opaque.</p><div id="syntheticLegend" class="note"></div></details><p class="note">Snapshot export only. Episode recording remains RGB + robot state.</p></div><p id="cameraLock" class="cameraNotice" role="status" hidden></p><p id="cameraError" class="cameraNotice" role="alert" hidden></p>
 <fieldset id="cameraFields"><legend class="srOnly">Camera configuration</legend>
 <div class="settingRow"><label for="cameraIncluded">Include in RGB recordings</label><input id="cameraIncluded" type="checkbox"></div>
 <div class="fieldPair"><div><label for="cameraMount">Mount</label><select id="cameraMount"><option value="world">Fixed in world</option><option value="hand">Robot hand</option></select></div><div><label for="cameraResolution">Image size</label><select id="cameraResolution"><option value="160x120">160 \xD7 120</option><option value="320x240">320 \xD7 240</option><option value="640x480">640 \xD7 480</option></select></div></div>
 <label>Frame the task</label><div class="presetGrid">${[
   ["top", "Top-down"],
   ["front", "Front oblique"],
   ["side", "Side view"],
   ["wrist", "Wrist close-up"],
 ]
   .map(
     ([fe, Oe]) =>
       `<button type="button" data-camera-preset="${fe}">${Oe}</button>`,
   )
   .join("")}</div>
 <div class="rangeHeading"><label for="cameraFov">Field of view</label><output id="cameraFovValue"></output></div><input id="cameraFov" type="range" min="20" max="110" step="1">
 <div class="rangeHeading"><label for="cameraExposure">Exposure offset</label><output id="cameraExposureValue"></output></div><input id="cameraExposure" type="range" min="-2" max="2" step=".1"><p class="note">Added to the shared camera exposure in Lighting. Renderer brightness, not a physical sensor exposure.</p>
 <details><summary>Precise placement</summary><p id="cameraFrameHint" class="note"></p><div class="axisInputs">${["x", "y", "z"].map((fe, Oe) => `<label for="cameraPosition${Oe}">${fe.toUpperCase()} \xB7 m<input id="cameraPosition${Oe}" type="number" min="-5" max="5" step=".01"></label>`).join("")}</div><div class="axisInputs">${["X", "Y", "Z"].map((fe, Oe) => `<label for="cameraRotation${Oe}">Rotate ${fe} \xB7 \xB0<input id="cameraRotation${Oe}" type="number" min="-180" max="180" step="1"></label>`).join("")}</div><button id="cameraAim" type="button" class="wide">Aim at workspace</button></details>
 <details><summary>Clipping & reset</summary><div class="fieldPair"><label for="cameraNear">Near \xB7 m<input id="cameraNear" type="number" min=".001" max="1" step=".001"></label><label for="cameraFar">Far \xB7 m<input id="cameraFar" type="number" min=".1" max="30" step=".1"></label></div><button id="cameraReset" type="button" class="wide">Reset this camera</button></details></fieldset>
 <div class="settingRow"><label for="cameraFrustums">Show coverage in workspace</label><input id="cameraFrustums" type="checkbox"></div>
 <details><summary>Calibration</summary><p class="note">Pinhole RGB, no distortion. Intrinsics use pixels; poses use metres. Optical axes: right, down, forward.</p><pre id="cameraCalibration"></pre><button id="cameraDownload" type="button" class="wide">Download camera configuration</button></details>
 <div class="captureCard"><div class="settingRow"><label for="cameraRGB">Record RGB images</label><input id="cameraRGB" type="checkbox"></div><p id="cameraCaptureSummary"></p><p id="cameraEstimate" class="note"></p><p id="cameraSchemaNote" class="note" hidden></p><button id="cameraRecorder" type="button" class="wide primary">Open data recorder</button></div>`));
  function U(fe, Oe, Me = [0, 0, -1]) {
    let ke = new s.Matrix4().lookAt(
        new s.Vector3(...fe),
        new s.Vector3(...Oe),
        new s.Vector3(...Me),
      ),
      Ee = new s.Euler().setFromRotationMatrix(ke, "XYZ");
    return [Ee.x, Ee.y, Ee.z].map(s.MathUtils.radToDeg);
  }
  function Z() {
    let fe = n(),
      Oe = fe.model.id === "so101",
      Me = [0.02, Oe ? 0.6 : 1.3, 0.025],
      ke = fe.model.cameraOffset.slice(),
      Ee = fe.hand.worldToLocal(fe.tcp().clone()).toArray(),
      Q = {
        enabled: !0,
        width: 320,
        height: 240,
        near: 0.006,
        far: 8,
        exposureEV: 0,
      };
    return {
      version: "armature-cameras-v1",
      cameras: [
        {
          ...Q,
          id: "overhead",
          mount: "world",
          position: Me,
          rotation: U(Me, [0.02, 0, 0]),
          fov: 42,
        },
        {
          ...Q,
          id: "wrist",
          mount: "hand",
          position: ke,
          rotation: U(ke, Ee, [0, 1, 0]),
          fov: 75,
        },
        {
          ...Q,
          id: "custom",
          enabled: !1,
          mount: "world",
          position: [0.55, 0.55, 0.7],
          rotation: U([0.55, 0.55, 0.7], [0.02, 0.04, 0], [0, 1, 0]),
          fov: 55,
        },
      ],
    };
  }
  function ee(fe) {
    if (fe?.version !== "armature-cameras-v1" || fe.cameras?.length !== 3)
      throw Error("Expected a configuration with three cameras.");
    let Oe = Vi(fe);
    for (let [Me, ke] of Oe.cameras.entries()) {
      if (
        ke.id !== Ga[Me] ||
        !["world", "hand"].includes(ke.mount) ||
        typeof ke.enabled != "boolean"
      )
        throw Error("Invalid camera identity or mount.");
      if (
        ![160, 320, 640].includes(ke.width) ||
        ke.height !== (ke.width * 3) / 4
      )
        throw Error("Choose a supported image size.");
      for (let Ee of ["position", "rotation"])
        if (
          !Array.isArray(ke[Ee]) ||
          ke[Ee].length !== 3 ||
          !ke[Ee].every(Number.isFinite) ||
          ke[Ee].some((Q) => Math.abs(Q) > (Ee === "position" ? 5 : 180))
        )
          throw Error("Invalid camera " + Ee);
      for (let Ee of ["fov", "near", "far", "exposureEV"])
        if (!Number.isFinite(ke[Ee])) throw Error("Invalid camera " + Ee);
      if (
        ke.fov < 20 ||
        ke.fov > 110 ||
        ke.near < 0.001 ||
        ke.near > 1 ||
        ke.far <= ke.near ||
        ke.far > 30 ||
        ke.exposureEV < -2 ||
        ke.exposureEV > 2
      )
        throw Error("Camera range is invalid; far must exceed near.");
    }
    if (!Oe.cameras.some((Me) => Me.enabled))
      throw Error("Keep at least one camera included.");
    return Oe;
  }
  function ae() {
    let fe = i().find((Oe) => Oe.rgb && Oe.frames.length);
    return fe ? enabledCameras(fe.config.cameras) : null;
  }
  function oe(fe, { internal: Oe = !1 } = {}) {
    if (!Oe && E())
      throw Error("Stop recording or exit replay before changing cameras.");
    let Me = ee(fe),
      ke = ae();
    if (!Oe && ke && JSON.stringify(enabledCameras(Me)) !== JSON.stringify(ke))
      throw Error(
        "Image selection and sizes are fixed for this dataset. Download, then reload to start a new dataset.",
      );
    ((X = Me), T.set(y, Vi(X)), (n().config.cameras = Vi(X)), se(), Ze());
  }
  function de(fe) {
    let Oe = Vi(X);
    (Object.assign(
      Oe.cameras.find((Me) => Me.id === P),
      fe,
    ),
      oe(Oe));
  }
  function le(fe) {
    try {
      ((b("cameraError").hidden = !0), fe(), c() || Se(!1));
    } catch (Oe) {
      ((b("cameraError").textContent = Oe.message),
        (b("cameraError").hidden = !1),
        Ze());
    }
  }
  function se() {
    if (!X) return;
    let fe = n();
    fe.root.updateMatrixWorld(!0);
    for (let Oe of X.cameras) {
      let Me = q[Oe.id],
        ke = new s.Quaternion().setFromEuler(
          new s.Euler(...Oe.rotation.map(s.MathUtils.degToRad), "XYZ"),
        ),
        Ee = new s.Vector3(...Oe.position);
      (Oe.mount === "hand"
        ? (Me.position.copy(fe.hand.localToWorld(Ee)),
          Me.quaternion.copy(
            fe.hand.getWorldQuaternion(new s.Quaternion()).multiply(ke),
          ))
        : (Me.position.copy(Ee), Me.quaternion.copy(ke)),
        (Me.fov = Oe.fov),
        (Me.aspect = Oe.width / Oe.height),
        (Me.near = Oe.near),
        (Me.far = Oe.far),
        Me.updateProjectionMatrix(),
        Me.updateMatrixWorld(!0));
    }
    ($.forEach((Oe, Me) => {
      ((Oe.visible = X.cameras[Me].enabled || Ga[Me] === P), Oe.update());
    }),
      (F.visible = O));
  }
  function xe(fe) {
    let Oe = q[fe.id],
      Me = fe.height / (2 * Math.tan(s.MathUtils.degToRad(fe.fov) / 2)),
      ke = Oe.matrixWorld
        .clone()
        .multiply(new s.Matrix4().makeScale(1, -1, -1)),
      Ee = (Q) =>
        Array.from({ length: 4 }, (A, Pe) =>
          Array.from({ length: 4 }, (Ke, Ce) => Q.elements[Ce * 4 + Pe]),
        );
    return {
      id: fe.id,
      width: fe.width,
      height: fe.height,
      K: [
        [Me, 0, fe.width / 2],
        [0, Me, fe.height / 2],
        [0, 0, 1],
      ],
      distortion: [0, 0, 0, 0, 0],
      worldFromOptical: Ee(ke),
      opticalFromWorld: Ee(ke.clone().invert()),
      exposureEV: W() + fe.exposureEV,
    };
  }
  function me() {
    return c() && L?._cameras
      ? Vi(L._cameras)
      : (se(),
        {
          version: X.version,
          simulationStep: n().steps,
          timestamp: n().steps / 30,
          worldAxes: "+X right, +Y up, +Z per Three.js world",
          opticalAxes: "+X right, +Y down, +Z forward",
          matrixLayout: "row-major",
          units: "metres",
          pixelConvention:
            "origin at top-left image edge; pixel centres at (u+0.5,v+0.5)",
          cameras: X.cameras.filter((fe) => fe.enabled).map(xe),
        });
  }
  function Le(fe) {
    ((C = null), (L = null), g++, (n().config.cameraSensorEV = o()));
    let Oe = n().model.id;
    return (
      Oe !== y && (X && T.set(y, Vi(X)), (y = Oe), (X = T.get(Oe) || Z())),
      oe(fe || X, { internal: !0 }),
      Vi(X)
    );
  }
  function Se(fe = !1) {
    se();
    let Oe = {},
      Me = t.toneMappingExposure,
      ke = [F, ...d()].filter(Boolean).map((Ee) => [Ee, Ee.visible]);
    ke.forEach(([Ee]) => (Ee.visible = !1));
    try {
      for (let Ee of X.cameras) {
        if (!Ee.enabled && Ee.id !== P) continue;
        let Q = b(Ee.id + "Feed");
        ((Q.width !== Ee.width || Q.height !== Ee.height) &&
          ((Q.width = Ee.width), (Q.height = Ee.height)),
          t.setSize(Ee.width, Ee.height),
          (t.toneMappingExposure = 1.12 * 2 ** (W() + Ee.exposureEV)),
          t.render(e, q[Ee.id]));
        let A = Q.getContext("2d", { alpha: !1 });
        if (
          (A.drawImage(t.domElement, 0, 0, Ee.width, Ee.height),
          fe && Ee.enabled)
        ) {
          let Pe = Uint8Array.from(
              atob(Q.toDataURL("image/png").split(",")[1]),
              (bt) => bt.charCodeAt(0),
            ),
            Ke = A.getImageData(0, 0, Ee.width, Ee.height).data,
            Ce = {
              sum: [0, 0, 0],
              sq: [0, 0, 0],
              min: [1, 1, 1],
              max: [0, 0, 0],
              n: Ee.width * Ee.height,
            };
          for (let bt = 0; bt < Ke.length; bt += 4)
            for (let Be = 0; Be < 3; Be++) {
              let ut = Ke[bt + Be] / 255;
              ((Ce.sum[Be] += ut),
                (Ce.sq[Be] += ut * ut),
                (Ce.min[Be] = Math.min(Ce.min[Be], ut)),
                (Ce.max[Be] = Math.max(Ce.max[Be], ut)));
            }
          let _e = "observation.images." + Ee.id;
          ((Oe[_e] = { bytes: Pe, path: null }),
            Oe._imageStats ?? (Oe._imageStats = {}),
            (Oe._imageStats[_e] = Ce));
        }
      }
      return (fe && (Oe._cameras = me()), rt(), Oe);
    } finally {
      ((t.toneMappingExposure = Me), ke.forEach(([Ee, Q]) => (Ee.visible = Q)));
    }
  }
  function rt() {
    if (
      ((b("depthDisplayControls").hidden = b("cameraOutput").value !== "depth"),
      b("cameraOutput").value !== "rgb")
    ) {
      ot();
      return;
    }
    let fe = X.cameras.find((ke) => ke.id === P),
      Oe = b("cameraPreview");
    (Oe.width !== fe.width || Oe.height !== fe.height) &&
      ((Oe.width = fe.width), (Oe.height = fe.height));
    let Me = Oe.getContext("2d", { alpha: !1 });
    (c() && !L?.["observation.images." + P]
      ? Me.clearRect(0, 0, fe.width, fe.height)
      : Me.drawImage(b(P + "Feed"), 0, 0, fe.width, fe.height),
      (b("cameraPreviewSize").textContent = fe.width + " \xD7 " + fe.height),
      (b("cameraPreviewName").textContent =
        hh[P] +
        (c()
          ? L?.["observation.images." + P]
            ? " \xB7 recorded"
            : " \xB7 not recorded"
          : fe.enabled
            ? " \xB7 RGB"
            : " \xB7 preview only")));
  }
  function tt(fe, Oe, Me) {
    let ke = document.createElement("canvas");
    ((ke.width = Oe), (ke.height = Me));
    let Ee = ke.getContext("2d"),
      Q = Ee.createImageData(Oe, Me);
    return (
      Q.data.set(fe),
      Ee.putImageData(Q, 0, 0),
      Uint8Array.from(atob(ke.toDataURL("image/png").split(",")[1]), (A) =>
        A.charCodeAt(0),
      )
    );
  }
  function ot() {
    var Ke;
    let fe = C,
      Oe = b("cameraPreview"),
      Me = Oe.getContext("2d");
    if (!fe || fe.metadata.camera.id !== P) {
      (Me.clearRect(0, 0, Oe.width, Oe.height),
        (b("cameraPreviewName").textContent = "Capture this camera to preview"),
        (b("cameraPreviewSize").textContent = ""));
      return;
    }
    ((Oe.width = fe.width), (Oe.height = fe.height));
    let ke = b("cameraOutput").value === "depth",
      Ee = Me.createImageData(fe.width, fe.height),
      Q = b("depthRangeMode").value,
      A = b("depthPalette").value;
    fe.displayRanges ?? (fe.displayRanges = {});
    let Pe =
      (Ke = fe.displayRanges)[Q] ??
      (Ke[Q] = depthRange(fe.depth, fe.ids, {
        mode: Q,
        near: fe.metadata.camera.near,
        far: fe.metadata.camera.far,
      }));
    ((fe.metadata.depthDisplay = {
      ...Pe,
      palette: A,
      units: "metres",
      nearIsBright: !0,
    }),
      (b("depthDisplayControls").hidden = !ke),
      (b("depthRangeLabels").textContent = Pe.empty
        ? "No valid depth in this capture."
        : Pe.min.toFixed(3) +
          " m \xB7 near     \u2014     " +
          Pe.max.toFixed(3) +
          " m \xB7 far"),
      (b("depthColorBar").style.background =
        A === "gray"
          ? "linear-gradient(90deg,#ffffff,#232323)"
          : "linear-gradient(90deg,#fde725,#5cc863,#21908d,#3b518b,#440154)"),
      Ee.data.set(
        sensorPreview(ke ? fe.depth : fe.ids, fe.width, fe.height, {
          depth: ke,
          range: Pe,
          palette: A,
        }),
      ),
      Me.putImageData(Ee, 0, 0),
      (b("cameraPreviewName").textContent =
        hh[P] +
        " \xB7 " +
        (ke ? "depth" : "instances") +
        " \xB7 captured step " +
        fe.metadata.simulationStep),
      (b("cameraPreviewSize").textContent = fe.width + " \xD7 " + fe.height));
  }
  function Ot() {
    if (E())
      throw Error(
        "Stop recording or exit replay before capturing ground truth.",
      );
    (p(), se());
    let fe = Vi(X.cameras.find((ke) => ke.id === P)),
      Oe = t.toneMappingExposure;
    try {
      ((t.toneMappingExposure = 1.12 * 2 ** (W() + fe.exposureEV)),
        (C = M.capture(q[P], fe, { ...me(), cameras: [xe(fe)] })));
    } finally {
      t.toneMappingExposure = Oe;
    }
    ((b("syntheticDownload").disabled = !1),
      (b("syntheticStatus").textContent =
        "Captured " +
        hh[P] +
        " at step " +
        C.metadata.simulationStep +
        " \xB7 " +
        C.metadata.timestamp.toFixed(3) +
        " s. Snapshot stays fixed until captured again."));
    let Me = b("syntheticLegend");
    Me.replaceChildren();
    for (let ke of C.metadata.instances.labels) {
      let Ee = document.createElement("div");
      ((Ee.textContent =
        ke.id + " \xB7 " + ke.label + " \xB7 " + ke.visiblePixels + " pixels"),
        Me.append(Ee));
    }
    return (
      b("cameraOutput").value === "rgb" && (b("cameraOutput").value = "depth"),
      ot(),
      C.metadata
    );
  }
  ((b("depthRangeMode").onchange = ot),
    (b("depthPalette").onchange = ot),
    b("cameraPreview").addEventListener("pointermove", (fe) => {
      let Oe = C;
      if (
        !Oe ||
        Oe.metadata.camera.id !== P ||
        b("cameraOutput").value !== "depth"
      )
        return;
      let Me = b("cameraPreview").getBoundingClientRect(),
        ke = Math.max(
          0,
          Math.min(
            Oe.width - 1,
            Math.floor(((fe.clientX - Me.left) / Me.width) * Oe.width),
          ),
        ),
        Ee = Math.max(
          0,
          Math.min(
            Oe.height - 1,
            Math.floor(((fe.clientY - Me.top) / Me.height) * Oe.height),
          ),
        ),
        Q = Ee * Oe.width + ke,
        A = Oe.depth[Q],
        Pe = Oe.ids[Q],
        Ke =
          Oe.metadata.instances.labels.find((Ce) => Ce.id === Pe)?.label ||
          "Unknown";
      b("depthPixelReadout").textContent =
        "Pixel " +
        ke +
        ", " +
        Ee +
        " \xB7 " +
        (Number.isFinite(A) ? A.toFixed(4) + " m" : "No hit") +
        " \xB7 " +
        Ke;
    }),
    (b("cameraOutput").onchange = rt),
    (b("syntheticCapture").onclick = () => {
      try {
        ((b("cameraError").hidden = !0), Ot());
      } catch (fe) {
        ((b("cameraError").textContent = fe.message),
          (b("cameraError").hidden = !1));
      }
    }),
    (b("syntheticDownload").onclick = () => {
      try {
        if (!C) throw Error("Capture a snapshot first.");
        h(
          exportSensorSnapshot(C, tt),
          "armature-" +
            C.metadata.camera.id +
            "-step-" +
            C.metadata.simulationStep +
            ".zip",
          "application/zip",
        );
      } catch (fe) {
        ((b("cameraError").textContent = fe.message),
          (b("cameraError").hidden = !1));
      }
    }));
  function Ze() {
    if (!X) return;
    ((b("syntheticCapture").disabled = E()),
      (b("syntheticDownload").disabled = !C),
      C ||
        ((b("syntheticStatus").textContent =
          "Capture RGB, depth and instance IDs at one simulation step."),
        b("syntheticLegend").replaceChildren()));
    let fe = X.cameras.find((A) => A.id === P),
      Oe = E(),
      Me = !!ae();
    ((b("cameraFields").disabled = Oe),
      (b("cameraIncluded").disabled = Oe || Me),
      (b("cameraResolution").disabled = Oe || Me),
      (b("cameraRGB").disabled = Oe || i().length > 0),
      (b("cameraRGB").checked = b("rgb").checked),
      (b("cameraLock").hidden = !Oe),
      (b("cameraLock").textContent = c()
        ? "Recorded replay \xB7 camera settings are read-only."
        : "Recording \xB7 camera settings are locked."),
      b("sensorExposure") && (b("sensorExposure").disabled = Oe),
      (b("cameraSchemaNote").hidden = !Me),
      (b("cameraSchemaNote").textContent =
        "Image selection and sizes are fixed for this dataset. Download, then reload to start another."),
      (b("cameraIncluded").checked = fe.enabled),
      (b("cameraMount").value = fe.mount),
      (b("cameraResolution").value = fe.width + "x" + fe.height),
      (b("cameraFov").value = fe.fov),
      (b("cameraFovValue").textContent = fe.fov + "\xB0"),
      (b("cameraExposure").value = fe.exposureEV),
      (b("cameraExposureValue").textContent =
        (fe.exposureEV >= 0 ? "+" : "") + fe.exposureEV.toFixed(1) + " EV"),
      ["position", "rotation"].forEach((A) =>
        fe[A].forEach(
          (Pe, Ke) =>
            (b(
              "camera" + (A === "position" ? "Position" : "Rotation") + Ke,
            ).value = Number(Pe.toFixed(4))),
        ),
      ),
      (b("cameraNear").value = fe.near),
      (b("cameraFar").value = fe.far),
      (b("cameraFrameHint").textContent =
        fe.mount === "hand"
          ? "Relative to the hand link. Rotations use local XYZ degrees; camera looks along local \u2212Z."
          : "World coordinates in metres. Rotations use XYZ degrees; camera looks along local \u2212Z."),
      H.querySelectorAll("[data-camera]").forEach((A) => {
        A.setAttribute("aria-pressed", A.dataset.camera === P);
        let Pe = X.cameras.find((Ke) => Ke.id === A.dataset.camera);
        b("cameraBadge-" + Pe.id).textContent = Pe.enabled
          ? "Included"
          : "Preview";
      }));
    for (let A of X.cameras)
      b(A.id + "Feed").parentElement.hidden = c()
        ? !L?.["observation.images." + A.id]
        : !A.enabled;
    let ke = b("cameraFeedsNote");
    (ke &&
      (ke.textContent = c()
        ? X.cameras.some((A) => L?.["observation.images." + A.id])
          ? "Recorded RGB \xB7 synchronized frames"
          : "This episode has no recorded RGB"
        : "Live RGB \xB7 optional synchronized capture"),
      (b("cameraCount").textContent = enabledCameras(X).length + " included"));
    let Ee =
      enabledCameras(X).reduce(
        (A, Pe) => A + Pe.width * Pe.height * 3 * 30,
        0,
      ) / 1e6;
    ((b("cameraCaptureSummary").textContent =
      (b("rgb").checked ? "RGB + joint state" : "Joint state only") +
      " \xB7 30 Hz synchronized"),
      (b("cameraEstimate").textContent =
        Ee.toFixed(1) +
        " MB/s raw RGB \xB7 " +
        ((Ee * 60) / 1e3).toFixed(2) +
        " GB/min before PNG compression. Encoded image buffer capped at 128 MiB."),
      se());
    let Q = xe(fe);
    ((b("cameraCalibration").textContent =
      `K \xB7 pixels
` +
      Q.K.map((A) => A.map((Pe) => Pe.toFixed(1)).join("  ")).join(`
`) +
      `

World \u2190 optical \xB7 metres
` +
      Q.worldFromOptical.map((A) => A.map((Pe) => Pe.toFixed(4)).join("  "))
        .join(`
`)),
      rt(),
      (D = String(Oe) + String(Me)));
  }
  function Nt() {
    (D !== String(E()) + String(!!ae()) && Ze(), O && se());
  }
  function De(fe = !1) {
    if (!fe && !b("rgb").checked) return;
    let Oe = ae();
    if (Oe && JSON.stringify(enabledCameras(X)) !== JSON.stringify(Oe))
      throw Error("Camera image layout differs from this dataset.");
  }
  (H.querySelectorAll("[data-camera]").forEach(
    (fe) =>
      (fe.onclick = () => {
        ((P = fe.dataset.camera), Ze(), c() || Se(!1));
      }),
  ),
    H.querySelectorAll("[data-camera-preset]").forEach(
      (fe) =>
        (fe.onclick = () =>
          le(() => {
            let Oe = fe.dataset.cameraPreset,
              Me = n().model.id === "so101",
              ke = Me ? 0.5 : 1,
              Ee;
            if (Oe === "wrist") {
              let Q = Z().cameras[1];
              Ee = {
                mount: Q.mount,
                position: Q.position,
                rotation: Q.rotation,
                fov: Q.fov,
              };
            } else {
              let Q = {
                top: [0.02, 1.3 * ke, 0.025],
                front: [0.5 * ke, 0.55 * ke, 0.7 * ke],
                side: [0.85 * ke, 0.32 * ke, 0],
              }[Oe];
              Ee = {
                mount: "world",
                position: Q,
                rotation: U(
                  Q,
                  [0.02, 0.03, 0],
                  Oe === "top" ? [0, 0, -1] : [0, 1, 0],
                ),
              };
            }
            de(Ee);
          })),
    ),
    (b("cameraIncluded").onchange = () =>
      le(() => de({ enabled: b("cameraIncluded").checked }))),
    (b("cameraMount").onchange = () =>
      le(() => {
        se();
        let fe = q[P],
          Oe = b("cameraMount").value,
          Me = fe.position.clone(),
          ke = fe.quaternion.clone();
        Oe === "hand" &&
          (n().hand.worldToLocal(Me),
          ke.premultiply(
            n().hand.getWorldQuaternion(new s.Quaternion()).invert(),
          ));
        let Ee = new s.Euler().setFromQuaternion(ke, "XYZ");
        de({
          mount: Oe,
          position: Me.toArray(),
          rotation: [Ee.x, Ee.y, Ee.z].map(s.MathUtils.radToDeg),
        });
      })),
    (b("cameraResolution").onchange = () =>
      le(() => {
        let [fe, Oe] = b("cameraResolution").value.split("x").map(Number);
        de({ width: fe, height: Oe });
      })));
  for (let [fe, Oe] of [
    ["cameraFov", "fov"],
    ["cameraExposure", "exposureEV"],
    ["cameraNear", "near"],
    ["cameraFar", "far"],
  ])
    b(fe).onchange = () => le(() => de({ [Oe]: Number(b(fe).value) }));
  for (let fe of ["Position", "Rotation"])
    for (let Oe = 0; Oe < 3; Oe++)
      b("camera" + fe + Oe).onchange = () =>
        le(() =>
          de({
            [fe.toLowerCase()]: [0, 1, 2].map((Me) =>
              Number(b("camera" + fe + Me).value),
            ),
          }),
        );
  ((b("cameraAim").onclick = () =>
    le(() => {
      let fe = X.cameras.find((Me) => Me.id === P),
        Oe = new s.Vector3(0.02, 0.03, 0);
      (fe.mount === "hand" && n().hand.worldToLocal(Oe),
        de({
          rotation: U(
            fe.position,
            Oe.toArray(),
            fe.mount === "hand" ? [0, 1, 0] : [0, 0, -1],
          ),
        }));
    })),
    (b("cameraReset").onclick = () =>
      le(() => {
        let fe = Z().cameras.find((Me) => Me.id === P),
          Oe = X.cameras.find((Me) => Me.id === P);
        de({ ...fe, enabled: Oe.enabled, width: Oe.width, height: Oe.height });
      })),
    (b("cameraFrustums").onchange = () => {
      ((O = b("cameraFrustums").checked), se());
    }),
    (b("cameraDownload").onclick = () =>
      h(
        JSON.stringify(
          { configuration: Vi(X), sharedExposureEV: W(), calibration: me() },
          null,
          2,
        ),
        "armature-cameras.json",
        "application/json",
      )),
    (b("cameraRecorder").onclick = () => {
      b("recorderBody").hidden && b("recorderToggle").click();
    }),
    (b("cameraRGB").onchange = () => {
      if (E() || i().length) {
        Ze();
        return;
      }
      ((b("rgb").checked = b("cameraRGB").checked), Ze());
    }),
    b("rgb").addEventListener("change", Ze));
  for (let fe of ["cameraFov", "cameraExposure"])
    b(fe).oninput = b(fe).onchange;
  function Kt(fe) {
    L = fe;
    let Oe = ++g;
    for (let Me of X.cameras) {
      let ke = fe["observation.images." + Me.id];
      if (!ke?.bytes) continue;
      let Ee = URL.createObjectURL(new Blob([ke.bytes], { type: "image/png" })),
        Q = new Image();
      ((Q.onload = () => {
        if ((URL.revokeObjectURL(Ee), Oe !== g)) return;
        let A = b(Me.id + "Feed");
        ((A.width = Me.width),
          (A.height = Me.height),
          A.getContext("2d", { alpha: !1 }).drawImage(
            Q,
            0,
            0,
            Me.width,
            Me.height,
          ),
          rt());
      }),
        (Q.onerror = () => {
          (URL.revokeObjectURL(Ee),
            Oe === g &&
              ((b("cameraError").textContent =
                "Could not decode the recorded camera image."),
              (b("cameraError").hidden = !1)));
        }),
        (Q.src = Ee));
    }
    Ze();
  }
  return (
    Le(),
    {
      captureSynthetic: Ot,
      validate: ee,
      capture: Se,
      showRecorded: Kt,
      snapshot: me,
      beginEpisode: Le,
      refresh: Ze,
      update: Nt,
      assertRecording: De,
      setConfig: oe,
      get config() {
        return Vi(X);
      },
      get selected() {
        return P;
      },
      select: (fe) => {
        if (!Ga.includes(fe)) throw Error("Unknown camera");
        ((P = fe), Ze(), c() || Se(!1));
      },
    }
  );
}
export { enabledCameras, createCameraRig };
