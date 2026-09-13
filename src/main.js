import { createWorkspaceComfort } from "./ui/workspace-comfort.js";
import { createStudioFeedback, notifyStudio } from "./ui/studio-feedback.js";
import { createRobotBookmarks } from "./ui/bookmarks.js";
import { createViewPresets } from "./ui/view-presets.js";
import { MEMORY_ENABLED } from "./features.js";
import { createMemoryLab } from "./memory/lab.js";
import { syncControlSummary } from "./ui/tabs.js";
import { RobotEnvironment, seededRandom } from "./simulation/environment.js";
import { attachRobotVisuals } from "./robots/visuals.js";
import {
  createObjectVisual,
  OBJECT_TYPES,
  getObjectSpec,
} from "./simulation/objects.js";
import { createKittingCell } from "./scenes/kitting-cell.js";
import { syncStudioControls, initializeStudioTabs } from "./ui/studio-tabs.js";
import { enabledCameras, createCameraRig } from "./sensors/cameras.js";
import { exportDatasetZip, createDatasetFiles } from "./export/lerobot.js";
import { simulationUrdf } from "./robots/urdf.js";
import { ROBOT_MODELS, getRobotModel } from "./robots/models.js";
import { TRIAL_TASKS, createTrialLab } from "./experiments/trials.js";
import { createStressLab } from "./stress/lab.js";
import { createLightingLab } from "./scenes/lighting.js";
import { createExperimentConfig } from "./experiments/config.js";
import { createDemonstrationStudio } from "./teleop/demonstrations.js";
import { createSceneBuilder } from "./authoring/builder.js";
if (!MEMORY_ENABLED)
  document.querySelector('optgroup[label="Memory experiments"]')?.remove();
var studioFeedback = null,
  workspaceComfort = null;
var bookmarks = null,
  bookmarkTarget = null;
var memoryLab = null,
  activeMemoryObject = 0,
  stablePlacementSteps = 0,
  memoryCovers = [];
var element = (u) => document.getElementById(u),
  T = THREE,
  vector = (u = 0, a = 0, l = 0) => new T.Vector3(u, a, l),
  renderer;
try {
  renderer = new T.WebGLRenderer({
    antialias: !0,
    powerPreference: "high-performance",
  });
} catch (u) {
  throw (
    (element("canvas").textContent =
      "WebGL unavailable. Enable hardware acceleration in your browser."),
    u
  );
}
(renderer.setPixelRatio(Math.min(devicePixelRatio, 2)),
  (renderer.shadowMap.enabled = !0),
  (renderer.shadowMap.type = T.PCFSoftShadowMap),
  (renderer.toneMapping = T.ACESFilmicToneMapping),
  (renderer.toneMappingExposure = 1.12),
  element("canvas").appendChild(renderer.domElement));
var scene = new T.Scene();
((scene.background = new T.Color("#28333e")),
  (scene.fog = new T.FogExp2("#28333e", 0.035)));
var viewCamera = new T.PerspectiveCamera(40, 1, 0.05, 100),
  material = (u, a = 0, l = 0.4) =>
    new T.MeshStandardMaterial({ color: u, metalness: a, roughness: l }),
  Jz = material("#e6e7e2", 0.55, 0.26),
  H2 = material("#182126", 0.6, 0.28),
  P2 = material("#a8b6be", 0.85, 0.23),
  _z = material("#b5df65", 0.3, 0.3);
function addMesh(u, a, l = scene) {
  let v = new T.Mesh(u, a);
  return ((v.castShadow = !0), (v.receiveShadow = !0), l.add(v), v);
}
function addBox(u, a, l, v, m, x, w, z = scene) {
  let j = addMesh(new T.BoxGeometry(u, a, l), v, z);
  return (j.position.set(m, x, w), j);
}
function addCylinder(u, a, l, v, m, x, w = scene) {
  let z = addMesh(new T.CylinderGeometry(u, u, a, 48), l, w);
  return (z.position.set(v, m, x), z);
}
scene.add(new T.HemisphereLight(14544895, 3813413, 2));
function addLight(u, a, l, v, m) {
  let x = new T.DirectionalLight(v, m);
  return (x.position.set(u, a, l), scene.add(x), x);
}
var keyLight = addLight(1, 5, 3, 16773599, 4);
((keyLight.castShadow = !0),
  keyLight.shadow.mapSize.set(2048, 2048),
  Object.assign(keyLight.shadow.camera, {
    left: -4,
    right: 4,
    top: 4,
    bottom: -4,
    near: 0.1,
    far: 15,
  }),
  (keyLight.shadow.bias = -25e-5),
  (keyLight.shadow.normalBias = 0.018),
  (keyLight.shadow.radius = 4),
  addLight(-3, 2, -2, 10013439, 2.2));
var environmentScene = new T.Scene();
environmentScene.background = new T.Color("#71818d");
for (let [u, a, l, v, m, x] of [
  [0, 4, 0, 7, 0.1, 4],
  [-4, 1, 0, 0.1, 3, 5],
  [1, 1, -4, 3, 2, 0.1],
])
  addBox(
    v,
    m,
    x,
    new T.MeshBasicMaterial({ color: "#eef5ff" }),
    u,
    a,
    l,
    environmentScene,
  );
var environmentGenerator = new T.PMREMGenerator(renderer),
  environmentMap = environmentGenerator.fromScene(environmentScene, 0.08);
scene.environment = environmentMap.texture;
var floorMaterial = material("#303b42", 0.25, 0.6),
  benchMaterial = material("#77868b", 0.65, 0.35);
addBox(30, 0.15, 30, floorMaterial, 0, -1.05, 0);
var legacyWorkbench = new T.Group();
scene.add(legacyWorkbench);
var kittingCell = null;
(addBox(2.8, 0.13, 1.85, benchMaterial, 0, -0.065, 0, legacyWorkbench),
  addBox(2.86, 0.05, 1.9, H2, 0, -0.15, 0, legacyWorkbench));
for (let u of [-1.2, 1.2])
  for (let a of [-0.7, 0.7])
    addBox(0.09, 0.85, 0.09, P2, u, -0.59, a, legacyWorkbench);
var floorGrid = new T.GridHelper(20, 40, 5662064, 4279380);
((floorGrid.position.y = -0.968), scene.add(floorGrid));
for (let u = -1.2; u <= 1.2; u += 0.2)
  for (let a = -0.75; a <= 0.75; a += 0.2)
    addCylinder(0.009, 0.002, H2, u, 0.002, a, legacyWorkbench);
var backgroundGroup = new T.Group();
scene.add(backgroundGroup);
var robotDatasets = new Map(),
  downloadedFrameCounts = new Map(),
  environment = new RobotEnvironment(T);
scene.add(environment.root);
var geometryCache = {};
attachRobotVisuals(T, environment, geometryCache);
var taskGroup = new T.Group();
scene.add(taskGroup);
var objectVisuals = [],
  goalVisuals = [],
  pathOverlay,
  $z = 0,
  stressReplayPlaying = !1,
  stressReplayTime = 0,
  expertPlan = [],
  planIndex = 0,
  planStep = 0,
  running = !1,
  controlMode = "expert",
  stepAccumulator = 0,
  cinemaMode = !1,
  recordingEpisode = null,
  episodes = [],
  downloadedFrames = 0,
  batchRemaining = 0,
  training = !1,
  cancelTraining = !1,
  learnedPolicy = null,
  replay = null,
  cameraRig = null,
  demonstrations = null,
  builder = null,
  fixtureVisuals = [],
  overheadCamera = new T.PerspectiveCamera(42, 4 / 3, 0.01, 20);
(overheadCamera.position.set(0.02, 1.3, 0.025),
  overheadCamera.up.set(0, 0, -1),
  overheadCamera.lookAt(0.02, 0, 0));
var wristCamera = new T.PerspectiveCamera(75, 4 / 3, 0.006, 20),
  captureRenderer = new T.WebGLRenderer({ antialias: !0 });
(captureRenderer.setSize(160, 120),
  captureRenderer.setPixelRatio(1),
  (captureRenderer.toneMapping = T.ACESFilmicToneMapping),
  (captureRenderer.toneMappingExposure = 1.12));
var ghostOverlay = new T.Mesh(
  new T.SphereGeometry(0.008, 12, 8),
  new T.MeshBasicMaterial({ color: 12840820 }),
);
(scene.add(ghostOverlay), (ghostOverlay.visible = !1));
var trialLab = null,
  lightingLab = null;
function rebuildTaskVisuals() {
  (taskGroup.traverse((a) => {
    a.isMesh && (a.geometry?.dispose(), a.material?.dispose());
  }),
    taskGroup.clear(),
    (objectVisuals = []),
    (goalVisuals = []),
    (fixtureVisuals = []));
  for (let { entity: a, body: l } of environment.composerFixtures || []) {
    let v = createObjectVisual(T, environment.composerSpec(a), a.color);
    (v.position.copy(l.position),
      v.quaternion.copy(l.quaternion),
      v.scale.setScalar(a.scale),
      taskGroup.add(v),
      fixtureVisuals.push({ root: v, id: a.id }));
  }
  for (let a of environment.trialFixtures || [])
    addBox(
      ...a.size,
      material(a.kind === "divider" ? "#dca964" : "#718caa", 0.4, 0.45),
      ...a.pos,
      taskGroup,
    );
  if (environment.insertionFixture) {
    let a = environment.insertionFixture;
    for (let l of a.parts)
      addBox(
        ...l.size,
        material("#83a4b5", 0.65, 0.3),
        a.x + l.offset[0],
        l.offset[1],
        a.z + l.offset[2],
        taskGroup,
      );
  }
  let u = window.overrideColor
    ? [window.overrideColor, window.overrideColor, window.overrideColor]
    : ["#db7757", "#76b7e6", "#b5d47a"];
  (environment.objects.forEach((a, l) => {
    let v = environment.config.composition?.entities.find(
        (z) => z.id === a.composerId,
      ),
      m = environment.objectSpecs[l],
      x = createObjectVisual(
        T,
        m,
        v?.color ||
          (environment.trial
            ? l === 0
              ? "#db7757"
              : "#76b7e6"
            : m.id === "fruit"
              ? "#ef972b"
              : u[l % 3]),
      );
    (taskGroup.add(x),
      x.scale.setScalar(v?.scale ?? environment.config.sizeScale ?? 1),
      objectVisuals.push(x));
    let w = addBox(
      0.075 * environment.model.sizeScale,
      0.001,
      0.075 * environment.model.sizeScale,
      material(u[l % 3], 0.2, 0.5),
      environment.goals[l][0],
      0.001,
      environment.goals[l][2],
      taskGroup,
    );
    ((w.visible =
      !environment.config.composition &&
      environment.config.task !== "insert" &&
      (!environment.trial || l === 0)),
      goalVisuals.push(w));
  }),
    environment.config.task === "reach" &&
      addMesh(
        new T.SphereGeometry(0.015, 24, 16),
        new T.MeshBasicMaterial({ color: 12840820, wireframe: !0 }),
        taskGroup,
      ).position.fromArray(environment.reachGoal),
    syncObjectVisuals(),
    pathOverlay &&
      (scene.remove(pathOverlay),
      pathOverlay.geometry.dispose(),
      pathOverlay.material.dispose()),
    (pathOverlay = new T.Line(
      new T.BufferGeometry().setFromPoints([
        environment.tcp(),
        ...expertPlan.map((a) => vector(...a.p)),
      ]),
      new T.LineDashedMaterial({
        color: 12840820,
        dashSize: 0.02,
        gapSize: 0.01,
        transparent: !0,
        opacity: 0.5,
      }),
    )),
    pathOverlay.computeLineDistances(),
    (pathOverlay.visible = element("path").checked),
    scene.add(pathOverlay));
  rebuildMemoryVisuals();
}
function syncObjectVisuals() {
  environment.objects.forEach((u, a) => {
    let l = objectVisuals[a];
    l && (l.position.copy(u.position), l.quaternion.copy(u.quaternion));
  });
}
function applySceneTheme() {
  let u = element("scene").value === "kitting";
  (u &&
    !kittingCell &&
    ((kittingCell = createKittingCell(T)), scene.add(kittingCell)),
    u &&
      (!kittingCell.visible ||
        kittingCell.userData.framedRobot !== environment.model.id) &&
      ((cameraDistance = 2.8),
      (cameraAzimuth = 1.1),
      (cameraInclination = 1.07),
      cameraTarget.set(-0.04, 0.35, -0.08),
      (kittingCell.userData.framedRobot = environment.model.id),
      updateViewCamera()),
    kittingCell && (kittingCell.visible = u),
    (legacyWorkbench.visible = !u),
    (renderer.toneMappingExposure = captureRenderer.toneMappingExposure =
      u ? 0.88 : 1.12),
    (keyLight.shadow.normalBias = u ? 0.002 : 0.018),
    (keyLight.shadow.bias = u ? -3e-5 : -25e-5));
  let a = u ? 1.6 : 4;
  (Object.assign(keyLight.shadow.camera, {
    left: -a,
    right: a,
    top: a,
    bottom: -a,
  }),
    keyLight.shadow.camera.updateProjectionMatrix(),
    (element("cellNote").hidden = !u));
  let l = {
      kitting: ["#253338", "#71818a", "#303b42", 16773599],
      lab: ["#273842", "#71818a", "#303b42", 16773599],
      factory: ["#343b3d", "#646e72", "#323638", 16768942],
      kitchen: ["#485352", "#c2c8c3", "#515754", 16774879],
      mars: ["#643e31", "#888077", "#754734", 16756864],
    },
    v = l[element("scene").value];
  (scene.background.set(v[0]),
    scene.fog.color.set(v[0]),
    benchMaterial.color.set(v[1]),
    floorMaterial.color.set(v[2]),
    keyLight.color.set(v[3]),
    backgroundGroup.clear());
  for (let m = -2; m <= 2; m++)
    (addBox(0.055, 3, 0.08, P2, m * 1.8, 0.5, -3.3, backgroundGroup),
      addBox(
        1.72,
        2.8,
        0.08,
        material(v[0], 0.3, 0.45),
        m * 1.8 + 0.9,
        0.5,
        -3.38,
        backgroundGroup,
      ),
      addBox(
        1.3,
        0.045,
        0.035,
        new T.MeshBasicMaterial({ color: 12837867 }),
        m * 1.8 + 0.9,
        1.8,
        -3.29,
        backgroundGroup,
      ));
  element("title").textContent = element("scene").selectedOptions[0].text;
}
function readSceneConfig() {
  return {
    physicsMode: document.getElementById("physicsMode")?.value || "kinematic",
    effortScale: Number(document.getElementById("effortScale")?.value || 1),
    robotId: element("robot").value,
    seed: Math.max(
      0,
      Math.min(4294967295, Math.floor(Number(element("seed").value) || 0)),
    ),
    task: element("task").value.startsWith("memory_")
      ? "memory"
      : element("task").value,
    memoryTask: element("task").value.replace("memory_", ""),
    difficulty: document.getElementById("trialDifficulty")?.value || "standard",
    object: element("object").value,
    friction: T.MathUtils.clamp(
      Number(element("friction").value) || 0.8,
      0.1,
      1.5,
    ),
    mass: T.MathUtils.clamp(Number(element("mass").value) || 0.06, 0.01, 0.5),
    randomize: element("variation").checked,
    maxSteps: 1800,
  };
}
function switchRobot(u) {
  environment.model.id !== u &&
    (training && (cancelTraining = !0),
    robotDatasets.set(environment.model.id, episodes),
    (downloadedFrames = downloadedFrameCounts.get(u) || 0),
    (episodes = robotDatasets.get(u) || []),
    scene.remove(environment.root),
    environment.root.traverse((a) => {
      a.isMesh && a.material.dispose();
    }),
    (environment = new RobotEnvironment(T, u)),
    attachRobotVisuals(T, environment, geometryCache),
    scene.add(environment.root),
    (element("robot").value = u),
    buildJointControls(),
    (learnedPolicy = null),
    (element("learned").disabled = !0),
    (element("policyDownload").disabled = !0),
    (cameraDistance = environment.model.cameraDistance),
    cameraTarget.set(-0.08, u === "so101" ? 0.13 : 0.27, 0),
    updateViewCamera(),
    (element("robotTag").textContent =
      environment.model.label.toUpperCase() +
      " / " +
      environment.model.description),
    (element("robotDetails").textContent =
      environment.model.workspace + ". " + environment.model.gripper + "."),
    (element("datasetTitle").textContent =
      "Dataset capture \xB7 " + environment.model.label));
}
function resetScene(u) {
  bookmarkTarget = null;
  memoryLab?.stop("Scene reset");
  memoryLab?.hide();
  ((element("workspaceMode").textContent = "LIVE WORKSPACE"),
    demonstrations?.reset(),
    finishRecording(!1, "Reset or scene change"),
    (running = !1),
    (replay = null),
    (stressReplayPlaying = !1),
    element("stressReplayBanner") &&
      (element("stressReplayBanner").hidden = !0),
    document.querySelector(".cameraFeeds")?.removeAttribute("hidden"),
    (element("replayRow").hidden = !0),
    (controlMode = "expert"),
    (stepAccumulator = 0));
  let a = {
    ...readSceneConfig(),
    ...(u === void 0 ? builder?.configForReset() : null),
    ...u,
  };
  return (
    (document.getElementById("physicsMode").value =
      a.physicsMode || "kinematic"),
    (document.getElementById("effortScale").value = String(a.effortScale ?? 1)),
    a.physicsMode === "dynamic" &&
      ((a.robotId = "panda"), (element("robot").value = "panda")),
    lightingLab && (a.lighting = lightingLab.beginEpisode(a.seed, u?.lighting)),
    a.task === "lights" &&
      ((a.robotId = "panda"),
      (element("robot").value = "panda"),
      (element("scene").value = "kitting")),
    switchRobot(a.robotId),
    environment.reset(a),
    cameraRig?.beginEpisode(u?.cameras),
    (overheadCamera.position.y = environment.model.id === "so101" ? 0.6 : 1.3),
    overheadCamera.lookAt(0.02, 0, 0),
    (expertPlan = environment.expertPlan()),
    (controlMode = environment.taskRunner ? "authored" : "expert"),
    (planIndex = 0),
    (planStep = 0),
    rebuildTaskVisuals(),
    applySceneTheme(),
    lightingLab?.refresh(),
    (element("run").textContent = "\u25B6 Run task"),
    (element("phase").textContent = "Ready \xB7 " + environment.model.label),
    (element("robotTag").textContent =
      environment.model.label.toUpperCase() +
      " / " +
      environment.model.description),
    (element("robotDetails").textContent =
      environment.model.workspace + ". " + environment.model.gripper + "."),
    (element("datasetTitle").textContent =
      "Dataset capture \xB7 " + environment.model.label),
    (element("train").disabled =
      environment.model.id !== "panda" || environment.config.task === "memory"),
    (element("progress").style.width = "0%"),
    (element("batch").disabled = environment.config.task === "memory"),
    syncStudioControls(),
    memoryLab?.refresh(),
    syncControlSummary(),
    bookmarks?.refresh(),
    builder?.onReset(),
    updateStatus(),
    { observation: environment.observe(), info: environment.info() }
  );
}
function expertAction() {
  let u = expertPlan[planIndex];
  if (!u) return environment.q.slice();
  let a = Math.round(u.seconds * 30),
    l = Math.min((planStep + 1) / a, 1),
    v = l * l * (3 - 2 * l),
    m = u.from.map((w, z) => w + (u.p[z] - w) * v),
    x = environment.ik(vector(...m), environment.q, 18);
  return ((x.q[environment.n] = u.width), x.q);
}
function captureCameras(u = !1) {
  if ((syncObjectVisuals(), cameraRig)) return cameraRig.capture(u);
  let a = pathOverlay.visible;
  ((pathOverlay.visible = !1), (ghostOverlay.visible = !1));
  let l = {};
  (captureRenderer.render(scene, overheadCamera),
    element("overheadFeed")
      .getContext("2d")
      .drawImage(captureRenderer.domElement, 0, 0, 160, 120));
  let v = environment.hand;
  if (
    (wristCamera.position.copy(
      v.localToWorld(vector(...environment.model.cameraOffset)),
    ),
    wristCamera.up.set(0, 0, -1),
    wristCamera.lookAt(environment.tcp()),
    captureRenderer.render(scene, wristCamera),
    element("wristFeed")
      .getContext("2d")
      .drawImage(captureRenderer.domElement, 0, 0, 160, 120),
    u)
  )
    for (let [m, x] of [
      ["overhead", "overheadFeed"],
      ["wrist", "wristFeed"],
    ]) {
      let w = element(x),
        z = Uint8Array.from(atob(w.toDataURL("image/png").split(",")[1]), (V) =>
          V.charCodeAt(0),
        ),
        j = w.getContext("2d").getImageData(0, 0, 160, 120).data,
        N = {
          sum: [0, 0, 0],
          sq: [0, 0, 0],
          min: [1, 1, 1],
          max: [0, 0, 0],
          n: 19200,
        };
      for (let V = 0; V < j.length; V += 4)
        for (let S = 0; S < 3; S++) {
          let G = j[V + S] / 255;
          ((N.sum[S] += G),
            (N.sq[S] += G * G),
            (N.min[S] = Math.min(N.min[S], G)),
            (N.max[S] = Math.max(N.max[S], G)));
        }
      ((l["observation.images." + m] = { bytes: z, path: null }),
        l._imageStats ?? (l._imageStats = {}),
        (l._imageStats["observation.images." + m] = N));
    }
  return ((pathOverlay.visible = a), l);
}
function stepAndRecord(u) {
  let a = environment.steps,
    l = controlMode === "teleop" ? demonstrations?.annotateFrame() : null,
    memoryFrame = memoryLab?.frame(),
    v = environment.observe(),
    m = environment.dynamics?.poses(),
    x = recordingEpisode?.rgb ? captureCameras(!0) : {},
    w = environment.step(u);
  return (
    recordingEpisode &&
      (recordingEpisode.frames.push({
        "observation.state": v.state,
        ...(memoryFrame ? { _memory: memoryFrame } : {}),
        _controller: controlMode === "expert" ? "scripted-IK-v1" : controlMode,
        _operator: l,
        _simulationStep: a,
        _authoredTask: w.info.authoredTask && {
          ...w.info.authoredTask,
          results: void 0,
          events: w.info.authoredTask.events.filter(
            (z) => z.step === environment.steps || (a === 0 && z.step === 0),
          ),
        },
        "observation.velocity": v.velocity,
        action: environment.target.slice(),
        "observation.tcp": v.tcp,
        "observation.object_positions": v.objectPositions,
        "observation.object_orientations": v.objectOrientations,
        "observation.grasped": [v.grasped],
        "next.reward": w.reward,
        "next.done": w.terminated || w.truncated,
        "next.success": w.terminated,
        "next.terminated": w.terminated,
        "next.truncated": w.truncated,
        _nextObservation: w.observation.state,
        _robotPoses: m,
        _dynamics: w.info.dynamics,
        _lighting: lightingLab?.state,
        ...x,
      }),
      (recordingEpisode.imageBytes =
        (recordingEpisode.imageBytes || 0) +
        Object.entries(x)
          .filter(([z]) => z.startsWith("observation.images."))
          .reduce((z, [, j]) => z + j.bytes.length, 0)),
      (recordedImageBytes() >= 128 * 1024 * 1024 ||
        recordingEpisode.frames.length >= environment.config.maxSteps ||
        recordedFrameCount() >=
          (recordingEpisode?.rgb || element("rgb").checked ? 3e3 : 12e3)) &&
        finishRecording(!1, "Recording frame limit")),
    syncObjectVisuals(),
    w
  );
}
function finishRecording(u, a) {
  if (!recordingEpisode) return;
  ((recordingEpisode.success = u), (recordingEpisode.termination = a));
  let l = recordingEpisode.frames.at(-1);
  (l &&
    !l["next.done"] &&
    ((l["next.done"] = !0),
    (l["next.truncated"] = !u),
    (l["next.terminated"] = u),
    (l["next.success"] = u)),
    recordingEpisode.frames.length && episodes.push(recordingEpisode),
    (recordingEpisode = null),
    updateRecorder());
}
function toggleRecording() {
  if (element("task").value.startsWith("memory_")) {
    if (memoryLab?.active) {
      memoryLab.stop("Recording stopped");
      return;
    }
    try {
      memoryLab.start({ record: !0 });
    } catch (n) {
      ((element("exportStatus").textContent = n.message),
        element("memoryDescription") &&
          (element("memoryDescription").textContent = n.message));
    }
    return;
  }

  if (recordingEpisode) {
    ((batchRemaining = 0), finishRecording(!1, "Stopped by user"));
    return;
  }
  if (episodes.length && episodes[0].rgb !== element("rgb").checked) {
    element("exportStatus").textContent =
      "Keep RGB setting consistent within a dataset; download then reload to change it.";
    return;
  }
  if (
    recordedImageBytes() >= 128 * 1024 * 1024 ||
    recordedFrameCount() >=
      (recordingEpisode?.rgb || element("rgb").checked ? 3e3 : 12e3)
  ) {
    element("exportStatus").textContent =
      "Download then reload: 12,000-frame session limit reached.";
    return;
  }
  try {
    cameraRig?.assertRecording();
  } catch (u) {
    element("exportStatus").textContent = u.message;
    return;
  }
  (resetScene(),
    (recordingEpisode = {
      task:
        element("task").selectedOptions[0].text +
        " " +
        element("object").selectedOptions[0].text,
      scene: element("scene").value,
      objectType: element("object").value,
      config: { ...environment.config },
      rgb: element("rgb").checked,
      frames: [],
      success: !1,
    }),
    (running = !0),
    builder?.showExecution(),
    showRecorder(!0),
    (element("run").textContent = "\u2161 Pause"),
    updateRecorder());
}
function recordedImageBytes() {
  return (
    episodes.reduce((u, a) => u + (a.imageBytes || 0), 0) +
    (recordingEpisode?.imageBytes || 0)
  );
}
function recordedFrameCount() {
  return (
    episodes.reduce((u, a) => u + a.frames.length, 0) +
    (recordingEpisode?.frames.length || 0)
  );
}
function advanceControl() {
  if (controlMode === "memory" && memoryLab?.active) {
    memoryLab.step();
    updateStatus();
    return;
  }
  if (controlMode !== "bookmark") bookmarkTarget = null;
  let u;
  controlMode === "bookmark" && bookmarkTarget
    ? (u = bookmarkTarget)
    : controlMode === "authored" && environment.taskRunner
      ? (u = environment.taskRunner.action())
      : controlMode === "teleop" && demonstrations
        ? (u = demonstrations.action())
        : controlMode === "expert"
          ? (u = expertAction())
          : controlMode === "learned" && learnedPolicy
            ? (u = reachControllerAction(environment, learnedPolicy.gains))
            : (u = Array.from({ length: environment.dof }, (v, m) =>
                Number(element("joint" + m).value),
              ));
  let a = stepAndRecord(u);
  if (
    controlMode === "bookmark" &&
    bookmarkTarget &&
    environment.q.every(
      (value, index) => Math.abs(value - bookmarkTarget[index]) < 0.0001,
    )
  ) {
    running = false;
    bookmarkTarget = null;
    element("run").textContent = "▶ Resume";
    element("phase").textContent = "Bookmark reached";
    bookmarks?.message("Pose reached. Simulation paused.");
  }
  if (controlMode === "expert") {
    let v = expertPlan[planIndex];
    ((element("phase").textContent = v?.name || "Evaluate"),
      v &&
        ++planStep >= Math.round(v.seconds * 30) &&
        ((planStep = 0), planIndex++));
  }
  let l = controlMode === "expert" && planIndex >= expertPlan.length;
  ((a.terminated || a.truncated || l) &&
    ((running = !1),
    finishRecording(
      a.terminated,
      a.info?.authoredTask?.reason ||
        (a.terminated
          ? "Stable success"
          : a.truncated
            ? "Time limit or object fell"
            : "Expert ended without stable success"),
    ),
    (element("phase").textContent = a.terminated
      ? "Verified success"
      : "Episode ended \xB7 goal not reached"),
    (element("run").textContent = "\u21BB Run again"),
    batchRemaining > 0 &&
      (batchRemaining--,
      batchRemaining &&
        ((element("seed").value = String(Number(element("seed").value) + 1)),
        toggleRecording()))),
    updateStatus());
}
function updateStatus() {
  studioFeedback?.refresh();
  if (
    (trialLab?.refresh(),
    lightingLab?.update(),
    cameraRig?.update(),
    demonstrations?.refresh(),
    replay)
  ) {
    (updateReplayStatus(replay.episode.frames[replay.index], replay.index),
      updateRecorder());
    return;
  }
  let u = document.getElementById("dynamicsStatus");
  if (
    (u &&
      (u.textContent = environment.dynamics
        ? "Dynamic Panda \xB7 max tracking error " +
          Math.max(
            ...environment.dynamics.info().trackingError.map(Math.abs),
          ).toFixed(3) +
          " rad \xB7 effort cap " +
          Math.round(environment.config.effortScale * 100) +
          "%"
        : "Kinematic motion \xB7 contact cannot resist the arm"),
    (element("tcp").textContent =
      "TCP " +
      environment
        .tcp()
        .toArray()
        .map((a) => a.toFixed(3))
        .join(" / ") +
      " m"),
    (element("joints").textContent =
      "J1 " +
      environment.q[0].toFixed(2) +
      " \xB7 J4 " +
      environment.q[3].toFixed(2) +
      " \xB7 " +
      environment.contacts +
      " contacts"),
    (element("count").textContent = environment.insertionFixture
      ? (environment.insertionMetrics().depth * 1e3).toFixed(1) +
        " mm INSERTED \xB7 " +
        environment.insertionMetrics().tilt.toFixed(1) +
        "\xB0 TILT"
      : environment.distance().toFixed(3) + " m GOAL ERROR"),
    (element("subphase").textContent =
      (environment.grasped
        ? "Bilateral finger contact"
        : "No bilateral grasp") +
      " \xB7 " +
      environment.steps +
      "/" +
      environment.config.maxSteps +
      " steps"),
    (element("progress").style.width =
      Math.min(
        100,
        controlMode === "expert"
          ? (planIndex / expertPlan.length) * 100
          : (environment.steps / environment.config.maxSteps) * 100,
      ) + "%"),
    controlMode !== "manual")
  )
    for (let a = 0; a < environment.dof; a++)
      element("joint" + a) &&
        ((element("joint" + a).value = environment.q[a]),
        (element("jointValue" + a).textContent = environment.q[a].toFixed(3)));
  if (environment.taskRunner) {
    let a = environment.taskRunner.snapshot();
    ((element("phase").textContent = a.stageName),
      (element("subphase").textContent = a.reason),
      (element("count").textContent =
        Math.min(
          a.stageIndex,
          environment.config.composition.task.stages.length,
        ) +
        " / " +
        environment.config.composition.task.stages.length +
        " STAGES"),
      (element("progress").style.width =
        (a.stageIndex /
          Math.max(1, environment.config.composition.task.stages.length)) *
          100 +
        "%"));
  }
  updateRecorder();
}
function showRecorder(u) {
  ((element("recorderBody").hidden = !u),
    element("recorderToggle").setAttribute("aria-expanded", String(u)),
    (element("chevron").textContent = u ? "\u2304" : "\u2303"));
}
function updateRecorder() {
  studioFeedback?.refresh();
  ((element("rgb").disabled = !!recordingEpisode || episodes.length > 0),
    cameraRig?.refresh());
  let u = recordingEpisode || episodes.at(-1),
    a = recordedFrameCount();
  ((element("epTotal").textContent = episodes.length),
    (element("frameTotal").textContent = a.toLocaleString()),
    (element("duration").textContent =
      ((u?.frames.length || 0) / 30).toFixed(2) + "s"),
    (element("recStatus").textContent = recordingEpisode
      ? running
        ? "Recording"
        : "Paused"
      : "Idle"),
    element("recorder").classList.toggle("recording", !!recordingEpisode),
    (element("record").textContent = recordingEpisode
      ? "\u25A0 Stop recording"
      : "\u25CF Record task"),
    (element("download").disabled = !!recordingEpisode || !episodes.length),
    (element("recordSummary").textContent = a
      ? `${a.toLocaleString()} frames \xB7 ${episodes.length} episodes`
      : "No recordings yet · open to begin"));
  let l = u?.frames.at(-1);
  (l &&
    ((element("frameLabel").textContent =
      `${u.frames.length - 1} / ${((u.frames.length - 1) / 30).toFixed(3)} s`),
    (element("frameJson").textContent = JSON.stringify(
      {
        timestamp: (u.frames.length - 1) / 30,
        state: l["observation.state"].map((v) => +v.toFixed(4)),
        action: l.action.map((v) => +v.toFixed(4)),
        reward: +l["next.reward"].toFixed(4),
        terminated: l["next.terminated"],
        truncated: l["next.truncated"],
        rgb: u.rgb
          ? u.config?.cameras
            ? enabledCameras(u.config.cameras)
                .map((v) => v.id + " " + v.width + "\xD7" + v.height)
                .join(", ")
            : "Legacy 160\xD7120 RGB"
          : "off",
      },
      null,
      2,
    ))),
    (element("episodeList").innerHTML =
      episodes
        .slice(-4)
        .map(
          (v, m) =>
            `<div class="epRow ${v.success ? "" : "interrupted"}"><button data-replay="${episodes.length - Math.min(4, episodes.length) + m}">Replay ${episodes.length - Math.min(4, episodes.length) + m}</button><span>${v.frames.length} frames</span><i>${v.success ? "Success" : "Failure / interrupted"}</i></div>`,
        )
        .join("") ||
      (!recordingEpisode
        ? '<div class="emptyState"><strong>Your first recording starts here</strong><p>Choose Record task to capture a fresh episode, or use Demonstrate to record manual control. Finished episodes appear here for replay and download.</p></div>'
        : '<div class="emptyState"><strong>Episode in progress</strong><p>Finish recording to replay or download this episode.</p></div>')),
    document
      .querySelectorAll("[data-replay]")
      .forEach(
        (v) => (v.onclick = () => startReplay(Number(v.dataset.replay))),
      ),
    element("recorderBody").hidden || drawSignalPlot(u?.frames || []));
}
function drawSignalPlot(u) {
  let a = element("signalPlot").getContext("2d");
  (a.clearRect(0, 0, 600, 115), (a.strokeStyle = "#2b404e"));
  for (let l = 15; l < 115; l += 25)
    (a.beginPath(), a.moveTo(0, l), a.lineTo(600, l), a.stroke());
  ["#c3ef74", "#68bef8", "#e79d74", "#bd9efa"].forEach((l, v) => {
    ((a.strokeStyle = l),
      a.beginPath(),
      u.slice(-150).forEach((m, x) => {
        let w = (x / 149) * 600,
          z = 57 - m["observation.state"][v] * 14;
        x ? a.lineTo(w, z) : a.moveTo(w, z);
      }),
      a.stroke());
  });
}
function saveDownload(u, a, l = "application/octet-stream") {
  let v = URL.createObjectURL(new Blob([u], { type: l })),
    m = document.createElement("a");
  ((m.href = v),
    (m.download = a),
    m.click(),
    notifyStudio("Download prepared: " + a),
    setTimeout(() => URL.revokeObjectURL(v), 3e4));
}
function startReplay(u) {
  memoryLab?.stop("Episode replay");
  memoryLab?.hide();
  if (recordingEpisode || training) return;
  running = !1;
  let a = episodes[u];
  a &&
    (environment.reset(a.config),
    cameraRig?.beginEpisode(a.config?.cameras),
    (expertPlan = environment.expertPlan()),
    rebuildTaskVisuals(),
    builder?.replaying(),
    (replay = { episode: a, index: 0 }),
    (element("replayRow").hidden = !1),
    (element("scrub").max = a.frames.length - 1),
    (element("scrub").value = 0),
    showReplayFrame(0));
}
function updateReplayStatus(u, a) {
  studioFeedback?.refresh();
  if (!u || !replay) return;
  let l = u["observation.state"],
    // Stress trajectories contain joints/objects only; FK supplies their TCP.
    v = u["observation.tcp"] || environment.tcp().toArray(),
    m = replay.episode.frames.length;
  ((element("workspaceMode").textContent = "RECORDED EPISODE"),
    (element("tcp").textContent =
      "TCP " + v.map((w) => w.toFixed(3)).join(" / ") + " m"),
    (element("joints").textContent =
      "J1 " +
      l[0].toFixed(2) +
      " \xB7 J4 " +
      l[3].toFixed(2) +
      " \xB7 recorded"),
    (element("count").textContent = a + 1 + " / " + m + " FRAMES"),
    (element("subphase").textContent =
      (u["observation.grasped"]?.[0] > 0.5
        ? "Recorded grasp"
        : "No recorded grasp") +
      " \xB7 " +
      ((u._step ?? a) / 30).toFixed(2) +
      " s \xB7 source step " +
      (u._simulationStep ?? u._step ?? a)),
    (element("progress").style.width =
      (m > 1 ? (100 * a) / (m - 1) : 100) + "%"),
    (element("run").textContent = "\u25B6 Reset & run task"));
  let x = element("dynamicsStatus");
  x &&
    (x.textContent =
      "Recorded robot state. Live solver diagnostics are paused during replay.");
  for (let w = 0; w < l.length; w++)
    element("joint" + w) &&
      ((element("joint" + w).value = l[w]),
      (element("jointValue" + w).textContent = l[w].toFixed(3)));
}
function showReplayFrame(u) {
  const memoryFrame = replay?.episode.frames[u]?._memory;
  if (memoryFrame) memoryLab?.replay(memoryFrame, replay.episode.memoryNames);
  else memoryLab?.hide();
  if (!replay) return;
  let a = replay.episode.frames[u];
  if (a) {
    ((replay.index = u),
      lightingLab?.restore(a._lighting || replay.episode.config?.lighting),
      a._robotPoses &&
        environment.dynamics &&
        environment.dynamics.restorePoses(a._robotPoses),
      (environment.q = a["observation.state"].slice()),
      environment.fk());
    for (let l = 0; l < objectVisuals.length; l++)
      (objectVisuals[l].position.fromArray(
        a["observation.object_positions"],
        l * 3,
      ),
        objectVisuals[l].quaternion.fromArray(
          a["observation.object_orientations"],
          l * 4,
        ));
    (cameraRig?.showRecorded(a),
      updateReplayStatus(a, u),
      (element("phase").textContent = "Recorded replay \xB7 frame " + u),
      (element("replayLabel").textContent =
        ((a._step ?? u) / 30).toFixed(2) + "s"));
  }
}
((element("scrub").oninput = () => {
  ((stressReplayPlaying = !1), showReplayFrame(Number(element("scrub").value)));
}),
  (element("exitReplay").onclick = () => {
    ((element("replayRow").hidden = !0), resetScene());
  }),
  (element("recorderToggle").onclick = () =>
    showRecorder(element("recorderBody").hidden)),
  (element("record").onclick = () => {
    ((batchRemaining = 0), toggleRecording());
  }),
  (element("batch").onclick = () => {
    ((batchRemaining = Math.min(
      8,
      Math.max(1, Number(element("batchCount").value) || 3),
    )),
      (element("variation").checked = !0),
      toggleRecording());
  }),
  (element("download").onclick = async () => {
    if (!recordingEpisode) {
      ((element("download").disabled = !0),
        (element("exportStatus").textContent =
          "Encoding Parquet and ZIP\u2026"));
      try {
        await new Promise((a) => setTimeout(a, 30));
        let u = exportDatasetZip(episodes);
        (saveDownload(
          u,
          environment.model.id + "-lerobot-v3.zip",
          "application/zip",
        ),
          (downloadedFrames = recordedFrameCount()),
          downloadedFrameCounts.set(environment.model.id, downloadedFrames),
          (element("exportStatus").textContent =
            "Dataset downloaded. Includes model, controller conventions and episode seeds."));
      } catch (u) {
        element("exportStatus").textContent = "Export failed: " + u.message;
      }
      updateRecorder();
    }
  }),
  (element("run").onclick = () => {
    if (!training) {
      if (builder?.runAuthored()) return;
      ((replay ||
        environment.terminated ||
        environment.truncated ||
        planIndex >= expertPlan.length) &&
        resetScene(),
        (running = !running),
        (element("run").textContent = running
          ? "\u2161 Pause"
          : "\u25B6 Resume"),
        updateRecorder());
    }
  }),
  (element("reset").onclick = () => {
    builder?.resetAuthored() || ((batchRemaining = 0), resetScene());
  }));
for (let u of ["robot", "scene", "object", "task"])
  element(u).onchange = () => {
    ((batchRemaining = 0), resetScene());
  };
((element("randomize").onclick = () => {
  ((element("seed").value = String(Number(element("seed").value) + 1)),
    (element("variation").checked = !0),
    resetScene());
}),
  (element("path").onchange = () =>
    (pathOverlay.visible = element("path").checked)),
  (element("speed").oninput = () =>
    (element("speedlabel").textContent =
      Number(element("speed").value).toFixed(1) + "\xD7")),
  (element("sidebarToggle").onclick = () => {
    (document.body.classList.toggle("sidebarHidden"),
      element("sidebarToggle").setAttribute(
        "aria-expanded",
        String(!document.body.classList.contains("sidebarHidden")),
      ));
  }));
function applyPrompt() {
  if (
    /(?:switch|turn).*(?:off.*lights?|lights?.*off)|press.*red.*button/i.test(
      element("prompt").value,
    )
  ) {
    lightingLab?.command();
    return;
  }
  let u = element("prompt").value.toLowerCase(),
    a = !1;
  for (let [v, m, x] of [
    ["robot", /so[- ]?101/, "so101"],
    ["robot", /panda|franka/, "panda"],
    ["robot", /ur5e/, "ur5e"],
    ["robot", /xarm[ -]?6/, "xarm6"],
    ["scene", /kitting cell|blender/, "kitting"],
    ["scene", /factory|warehouse/, "factory"],
    ["scene", /kitchen|food/, "kitchen"],
    ["scene", /mars|martian/, "mars"],
    ["scene", /lab/, "lab"],
    ["object", /blocks?|cubes?/, "blocks"],
    ["object", /\b(cans?|cylinders?)\b/, "cans"],
    ["object", /oranges?|fruit/, "fruit"],
    ["object", /pegs?/, "pegs"],
    ["object", /bottles?|samples?/, "bottles"],
    ["object", /tiles?|circuits?|modules?/, "tiles"],
    ["object", /spools?/, "spools"],
    ["object", /mixed|parts kit/, "mixed"],
    ["task", /stack/, "stack"],
    ["task", /sort/, "sort"],
    ["task", /move|pick|place/, "transfer"],
    ["task", /reach/, "reach"],
    ["task", /unpack|return/, "return"],
    ["task", /\bkit\b/, "kit"],
    ["task", /insert|peg.in.hole/, "insert"],
    ["task", /isolated pickup/, "trial_pick"],
    ["task", /clutter/, "trial_clutter"],
    ["task", /narrow placement/, "trial_place"],
    ["task", /obstacle transfer/, "trial_obstacle"],
    ["task", /memory|remember|recall/, "memory_recall"],
    ["task", /covered|hidden|occlu/, "memory_covered"],
    ["task", /interrupt|recipe|sequence/, "memory_sequence"],
    ["task", /corrected|revised|revision/, "memory_revision"],
  ])
    (MEMORY_ENABLED || !x.startsWith("memory_")) &&
      m.test(u) &&
      ((element(v).value = x), (a = !0));
  window.overrideColor = null;
  for (let [v, m] of [
    ["blue", "#69aadd"],
    ["red", "#db7757"],
    ["green", "#b5d47a"],
  ])
    u.includes(v) && ((window.overrideColor = m), (a = !0));
  let l = u.match(/seed\s+(\d+)/);
  if (
    (l && ((element("seed").value = l[1]), (a = !0)),
    /random/.test(u) && ((element("variation").checked = !0), (a = !0)),
    !a)
  ) {
    element("feedback").textContent =
      "Try \u201CStack blue blocks in the lab, seed 42\u201D.";
    return;
  }
  ((batchRemaining = 0),
    resetScene(),
    (element("feedback").textContent =
      "Applied validated presets. Contact outcomes can fail."));
}
((element("apply").onclick = applyPrompt),
  document.querySelectorAll("[data-p]").forEach(
    (u) =>
      (u.onclick = () => {
        ((element("prompt").value = u.dataset.p), applyPrompt());
      }),
  ),
  (element("prompt").onkeydown = (u) => {
    u.key === "Enter" && (u.ctrlKey || u.metaKey) && applyPrompt();
  }));
var cameraAzimuth = 0.8,
  cameraInclination = 1.03,
  cameraDistance = 2.8,
  cameraTarget = vector(-0.08, 0.27, 0);
function updateViewCamera() {
  (viewCamera.position.set(
    cameraTarget.x +
      cameraDistance * Math.sin(cameraInclination) * Math.cos(cameraAzimuth),
    cameraTarget.y + cameraDistance * Math.cos(cameraInclination),
    cameraTarget.z +
      cameraDistance * Math.sin(cameraInclination) * Math.sin(cameraAzimuth),
  ),
    viewCamera.lookAt(cameraTarget));
}
(updateViewCamera(),
  createViewPresets({
    read: () => ({
      azimuth: cameraAzimuth,
      inclination: cameraInclination,
      distance: cameraDistance,
      target: cameraTarget.toArray(),
      cinema: cinemaMode,
    }),
    write: (state) => {
      cameraAzimuth = state.azimuth;
      cameraInclination = state.inclination;
      cameraDistance = state.distance;
      cameraTarget.fromArray(state.target);
      cinemaMode = state.cinema;
      element("cinema").classList.toggle("active", cinemaMode);
      updateViewCamera();
    },
    getEnv: () => environment,
  }),
  (element("cinema").onclick = () => {
    ((cinemaMode = !cinemaMode),
      element("cinema").classList.toggle("active", cinemaMode));
  }),
  (element("snapshot").onclick = () => {
    (renderer.render(scene, viewCamera),
      renderer.domElement.toBlob(
        (u) =>
          u &&
          saveDownload(u, environment.model.id + "-workspace.png", "image/png"),
      ));
  }));
var Ms = new Map(),
  Lu = 0;
((renderer.domElement.onpointerdown = (u) => {
  builder?.blocksOrbit ||
    ((cinemaMode = !1),
    Ms.set(u.pointerId, [u.clientX, u.clientY]),
    renderer.domElement.setPointerCapture(u.pointerId));
}),
  (renderer.domElement.onpointermove = (u) => {
    if (builder?.blocksOrbit || !Ms.has(u.pointerId)) return;
    let a = Ms.get(u.pointerId);
    if (
      (Ms.size === 1 &&
        ((cameraAzimuth -= (u.clientX - a[0]) * 0.006),
        (cameraInclination = T.MathUtils.clamp(
          cameraInclination + (u.clientY - a[1]) * 0.005,
          0.05,
          1.55,
        ))),
      Ms.set(u.pointerId, [u.clientX, u.clientY]),
      Ms.size === 2)
    ) {
      let l = [...Ms.values()],
        v = Math.hypot(l[0][0] - l[1][0], l[0][1] - l[1][1]);
      (Lu &&
        (cameraDistance = T.MathUtils.clamp(
          (cameraDistance * Lu) / v,
          0.15,
          7,
        )),
        (Lu = v));
    }
    updateViewCamera();
  }),
  (renderer.domElement.onpointerup = renderer.domElement.onpointercancel =
    (u) => {
      (Ms.delete(u.pointerId), (Lu = 0));
    }),
  (renderer.domElement.onwheel = (u) => {
    (u.preventDefault(),
      (cameraDistance = T.MathUtils.clamp(
        cameraDistance + u.deltaY * 0.002,
        0.15,
        7,
      )),
      updateViewCamera());
  }),
  new ResizeObserver(() => {
    let u = element("canvas").getBoundingClientRect();
    (renderer.setSize(u.width, u.height),
      (viewCamera.aspect = u.width / u.height),
      viewCamera.updateProjectionMatrix());
  }).observe(element("canvas")));
function buildJointControls() {
  element("jointControls").innerHTML = "";
  for (let u = 0; u < environment.dof; u++) {
    let a =
        u === environment.n
          ? environment.model.jawLimit
          : environment.arm[u].limit,
      l = document.createElement("label");
    ((l.innerHTML = `${environment.names[u]} (${environment.model.units[u]}) <span id="jointValue${u}">${environment.q[u].toFixed(3)}</span><input id="joint${u}" type="range" min="${a.lower}" max="${a.upper}" step="0.001" value="${environment.q[u]}">`),
      element("jointControls").appendChild(l),
      (element("joint" + u).oninput = () => {
        memoryLab?.stop("Manual joint control");
        memoryLab?.hide();
        (replay && resetScene(),
          (controlMode = "manual"),
          (element("jointValue" + u).textContent = Number(
            element("joint" + u).value,
          ).toFixed(3)),
          !environment.terminated &&
            !environment.truncated &&
            ((running = !0),
            (element("run").textContent = "\u2161 Pause"),
            (element("phase").textContent = "Joint control")));
      }));
  }
}
buildJointControls();
function reachControllerAction(u, a) {
  let l = u.tcp(),
    v = l
      .toArray()
      .map(
        (x, w) =>
          x + T.MathUtils.clamp((u.reachGoal[w] - x) * a[w], -0.016, 0.016),
      ),
    m = u.ik(vector(...v), u.q, 12).q;
  return ((m[7] = 0.08), m);
}
var yieldTraining = () => new Promise((u) => setTimeout(u, 0));
((element("train").onclick = async () => {
  if (environment.model.id !== "panda") return;
  if (training) {
    cancelTraining = !0;
    return;
  }
  (finishRecording(!1, "Training started"),
    (running = !1),
    (training = !0),
    (cancelTraining = !1),
    (element("train").textContent = "\u25A0 Cancel search"),
    (element("trainStatus").textContent =
      "Starting CEM reach-controller search\u2026"));
  let u = seededRandom(9183),
    a = () =>
      Math.sqrt(-2 * Math.log(Math.max(1e-9, u()))) *
      Math.cos(2 * Math.PI * u()),
    l = [0.08, 0.08, 0.08],
    v = [0.08, 0.08, 0.08],
    m = { score: -1 / 0, gains: l },
    x = new RobotEnvironment(T);
  try {
    for (let z = 0; z < 4; z++) {
      let j = [];
      for (let N = 0; N < 6; N++) {
        if (cancelTraining) throw Error("Cancelled");
        let V =
          N === 0
            ? l.slice()
            : l.map((G, B) => T.MathUtils.clamp(G + v[B] * a(), 0.005, 0.65));
        x.reset({ task: "reach", seed: 42, randomize: !0, maxSteps: 110 });
        let S = 0;
        for (let G = 0; G < 110; G++) {
          let B = x.step(reachControllerAction(x, V));
          if (
            ((S += B.reward - 0.05 * B.info.goalDistance),
            G % 12 === 0 && (await yieldTraining(), cancelTraining))
          )
            throw Error("Cancelled");
          if (B.terminated || B.truncated) break;
        }
        (j.push({ score: S, gains: V }),
          S > m.score && (m = { score: S, gains: V }),
          (element("trainStatus").textContent =
            `Generation ${z + 1}/4 \xB7 candidate ${N + 1}/6 \xB7 best return ${m.score.toFixed(2)}`));
      }
      (j.sort((N, V) => V.score - N.score),
        (l = l.map((N, V) => (j[0].gains[V] + j[1].gains[V]) / 2)),
        (v = v.map((N, V) =>
          Math.max(0.015, Math.abs(j[0].gains[V] - j[1].gains[V]) / 2),
        )));
    }
    let w = 0;
    for (let z of [1001, 1002, 1003]) {
      x.reset({ task: "reach", seed: z, randomize: !0, maxSteps: 110 });
      for (let j = 0; j < 110; j++) {
        let N = x.step(reachControllerAction(x, m.gains));
        if (j % 12 === 0 && (await yieldTraining(), cancelTraining))
          throw Error("Cancelled");
        if (N.terminated) {
          w++;
          break;
        }
        if (N.truncated) break;
      }
    }
    ((learnedPolicy = {
      algorithm: "CEM black-box policy search",
      task: "reach",
      gains: m.gains,
      action:
        "TCP proportional feedback through Panda numerical IK; absolute joint position targets",
      observation: ["tcp_world", "goal_world"],
      trainingSeed: 42,
      evaluationSeeds: [1001, 1002, 1003],
      evaluationSuccesses: w,
      physics: "Cannon-es objects, kinematic arm servo",
    }),
      (element("trainStatus").textContent =
        `Search complete \xB7 held-out reach goals ${w}/3 successful. This is a small CEM controller experiment, not deep RL.`),
      (element("learned").disabled = !1),
      (element("policyDownload").disabled = !1));
  } catch (w) {
    element("trainStatus").textContent = w.message;
  } finally {
    ((training = !1),
      (element("train").textContent = "Train reach controller"),
      (element("train").disabled = environment.model.id !== "panda"));
  }
}),
  (element("learned").onclick = () => {
    learnedPolicy &&
      ((element("task").value = "reach"),
      resetScene(),
      (controlMode = "learned"),
      (running = !0),
      (element("phase").textContent = "Learned CEM reach controller"));
  }),
  (element("policyDownload").onclick = () =>
    learnedPolicy &&
    saveDownload(
      JSON.stringify(learnedPolicy, null, 2),
      "panda-reach-policy.json",
      "application/json",
    )),
  (element("combinedUrdf").onclick = () =>
    saveDownload(
      simulationUrdf(environment.model),
      environment.model.id + "-simulation.urdf",
      "application/xml",
    )),
  (element("urdf").onclick = () =>
    saveDownload(
      environment.model.asset.urdf,
      environment.model.id + ".urdf",
      "application/xml",
    )),
  (element("license").onclick = () =>
    saveDownload(
      environment.model.asset.license,
      environment.model.id + "-model-LICENSE.txt",
      "text/plain",
    )),
  (window.armature = {
    version: "0.1.0",
    robots: Object.keys(ROBOT_MODELS),
    get spec() {
      return {
        robotId: environment.model.id,
        observation: `state[${environment.dof}], velocity[${environment.dof}], tcp[3]; object poses are privileged`,
        action: environment.names,
        actionUnits: environment.model.units,
        jointLimits: [
          ...environment.arm.map((u) => u.limit),
          environment.model.jawLimit,
        ],
        fps: 30,
        physicsHz: environment.info().physicsHz,
        physicsMode: environment.info().physicsMode,
        modelSource: environment.model.asset.source,
      };
    },
    reset(u = {}) {
      let a = [
          "transfer",
          "sort",
          "stack",
          "reach",
          "kit",
          "return",
          "memory",
          "insert",
          "lights",
          ...Object.keys(TRIAL_TASKS),
        ],
        l = Object.keys(OBJECT_TYPES);
      if (u.task && !a.includes(u.task)) throw Error("Unknown task");
      if (u.object && !l.includes(u.object)) throw Error("Unknown object");
      for (let m of ["seed", "mass", "friction", "maxSteps"])
        if (u[m] !== void 0 && !Number.isFinite(u[m]))
          throw Error("Invalid " + m);
      if (u.mass !== void 0 && u.mass <= 0)
        throw Error("Mass must be positive");
      if (u.friction !== void 0 && u.friction < 0)
        throw Error("Friction must be nonnegative");
      u.robotId && getRobotModel(u.robotId);
      let v = resetScene(u);
      if (((controlMode = "external"), u.record)) {
        if (recordedImageBytes() >= 128 * 1024 * 1024)
          throw Error(
            "Image buffer full. Download then reload to start another dataset.",
          );
        if (
          (u.rgb && cameraRig?.assertRecording(!0),
          episodes.length && episodes[0].rgb !== !!u.rgb)
        )
          throw Error("RGB setting must match existing episodes");
        recordingEpisode = {
          task: environment.config.task,
          scene: element("scene").value,
          objectType: environment.config.object,
          config: { ...environment.config },
          rgb: !!u.rgb,
          frames: [],
          success: !1,
        };
      }
      return (cameraRig?.refresh(), v);
    },
    step(u) {
      if (memoryLab?.active)
        throw Error(
          "Use armature.memory.step() and choose() while a memory trial is active.",
        );
      if (running || training || replay)
        throw Error(
          "Pause playback or call armature.reset() before external stepping.",
        );
      let a = stepAndRecord(u);
      return (
        (a.terminated || a.truncated) &&
          finishRecording(a.terminated, "External episode ended"),
        updateStatus(),
        a
      );
    },
    info: () => environment.info(),
    observe: () => environment.observe(),
    finishRecording: () => finishRecording(!1, "External recording stopped"),
    download: () => element("download").onclick(),
    render: () => {
      (syncObjectVisuals(), renderer.render(scene, viewCamera));
    },
    ik: (u) => {
      if (!Array.isArray(u) || u.length !== 3 || !u.every(Number.isFinite))
        throw Error("Expected [x,y,z] metres");
      return environment.ik(vector(...u));
    },
  }),
  window.addEventListener("beforeunload", (u) => {
    (recordedFrameCount() > downloadedFrames ||
      [...robotDatasets.entries()].some(
        ([a, l]) =>
          a !== environment.model.id &&
          l.reduce((v, m) => v + m.frames.length, 0) >
            (downloadedFrameCounts.get(a) || 0),
      )) &&
      (u.preventDefault(), (u.returnValue = ""));
  }),
  globalThis.ARMATURE_TEST || initializeStudioTabs(showRecorder),
  globalThis.ARMATURE_TEST ||
    createStressLab({
      T: T,
      getRobotId: () => environment.model.id,
      makeRobot: (u) => {
        let a = new RobotEnvironment(T, u);
        return (attachRobotVisuals(T, a, geometryCache), a);
      },
      onPause: () => {
        ((running = !1), (element("run").textContent = "\u25B6 Resume"));
      },
      onSave: saveDownload,
      onInspect: (u, a, l, v, m) => {
        memoryLab?.stop("Stress trial inspection");
        memoryLab?.hide();
        (finishRecording(!1, "Inspecting stress trial"),
          (running = !1),
          document.querySelector(".cameraFeeds")?.setAttribute("hidden", ""),
          switchRobot(u.config.robotId || "panda"),
          environment.reset(u.config),
          (expertPlan = environment.expertPlan()),
          rebuildTaskVisuals());
        let x = [],
          w = environment.dof + 8;
        for (let z = 0; z < u.trajectory.length; z += w) {
          let j = u.trajectory.subarray(z, z + w);
          x.push({
            _step: j[0],
            "observation.state": Array.from(j.slice(1, 1 + environment.dof)),
            "observation.object_positions": Array.from(
              j.slice(1 + environment.dof, 4 + environment.dof),
            ),
            "observation.object_orientations": Array.from(
              j.slice(4 + environment.dof, w),
            ),
          });
        }
        ((replay = { episode: { frames: x }, index: 0 }),
          (element("replayRow").hidden = !1),
          (element("scrub").max = x.length - 1),
          (element("scrub").value = 0),
          (element("stressReplayBanner").hidden = !1),
          (element("stressTrialText").textContent =
            `Trial ${u.id + 1} \xB7 ${u.outcome} \xB7 X ${(u.x * 1e3).toFixed(0)} / Z ${(u.z * 1e3).toFixed(0)} mm \xB7 friction ${u.config.padFriction}`),
          (element("stressTrialNote").textContent =
            m ||
            `Seed ${u.config.seed} \xB7 mass ${(u.config.mass * 1e3).toFixed(0)} g \xB7 scale ${u.config.sizeScale.toFixed(2)} \xB7 goal error ${(u.goalError * 1e3).toFixed(1)} mm`),
          (element("stressBack").onclick = () => {
            ((stressReplayPlaying = !1), l());
          }),
          (element("stressReproduce").disabled = !v),
          (element("stressReproduce").onclick = v),
          (element("stressPlay").onclick = () => {
            stressReplayPlaying = !stressReplayPlaying;
          }),
          (stressReplayPlaying = !0),
          (stressReplayTime = 0),
          showReplayFrame(0));
      },
    }),
  globalThis.ARMATURE_TEST ||
    ((trialLab = createTrialLab({
      T: T,
      Env: RobotEnvironment,
      canInspect: () => !running && !training && !recordingEpisode && !replay,
      getEnv: () => environment,
      lightingForSeed: (u, a) => lightingLab?.previewEpisode(u, a),
      getStatus: () => ({
        finished:
          environment.terminated ||
          environment.truncated ||
          (controlMode === "expert" && planIndex >= expertPlan.length),
        controller: controlMode === "expert" ? "scripted-IK-v1" : controlMode,
      }),
      resetLive: resetScene,
      save: saveDownload,
      observePolicy: ({ rgb: u = !1 } = {}) => {
        let a = environment.observe(),
          l = u ? captureCameras(!0) : null;
        return {
          instruction:
            "Place the coral block at the marked destination without disturbing blue blocks.",
          state: a.state,
          velocity: a.velocity,
          ...(u
            ? {
                images: Object.fromEntries(
                  Object.entries(l)
                    .filter(([v]) => v.startsWith("observation.images."))
                    .map(([v, m]) => [v.slice(19), m.bytes]),
                ),
              }
            : {}),
        };
      },
    })),
    (window.armature.trials = trialLab)),
  globalThis.ARMATURE_TEST ||
    ((lightingLab = createLightingLab({
      T: T,
      scene: scene,
      getEnv: () => environment,
      getCell: () => kittingCell,
      keyLight: keyLight,
      renderer: renderer,
      feedRenderer: captureRenderer,
      pause: () => {
        running = !1;
      },
      start: () => {
        ((element("task").value = "lights"),
          resetScene({ task: "lights", robotId: "panda" }),
          (running = !0),
          (element("run").textContent = "\u2161 Pause"));
      },
    })),
    (window.armature.lighting = lightingLab)),
  globalThis.ARMATURE_TEST ||
    ((cameraRig = createCameraRig({
      T: T,
      scene: scene,
      renderer: captureRenderer,
      getEnv: () => environment,
      getRecording: () => recordingEpisode,
      getEpisodes: () => episodes,
      getReplay: () => replay,
      getSensorEV: () => lightingLab?.state.sensorEV || 0,
      save: saveDownload,
      getOverlays: () => [
        pathOverlay,
        ghostOverlay,
        ...goalVisuals,
        ...(builder?.overlays || []),
      ],
      syncVisuals: syncObjectVisuals,
      getInstances: () => [
        {
          id: 1,
          label: environment.model.label,
          kind: "robot",
          root: environment.root,
        },
        ...objectVisuals.map((u, a) => ({
          id: 100 + a,
          label:
            environment.config.composition?.entities.find(
              (l) => l.id === environment.objects[a]?.composerId,
            )?.name ||
            (environment.objectSpecs[a]?.id || "object") + " " + (a + 1),
          kind: "task-object",
          objectIndex: a,
          root: u,
        })),
        ...fixtureVisuals.map(({ root: u, id: a }, l) => ({
          id: 200 + l,
          label:
            environment.config.composition?.entities.find((v) => v.id === a)
              ?.name || "Fixture",
          kind: "fixture",
          root: u,
        })),
      ],
    })),
    (window.armature.cameras = {
      get config() {
        return cameraRig.config;
      },
      snapshot: () => cameraRig.snapshot(),
      captureSynthetic: () => cameraRig.captureSynthetic(),
      setConfig: (u) => cameraRig.setConfig(u),
      select: (u) => cameraRig.select(u),
    })),
  globalThis.ARMATURE_TEST ||
    (window.armature.experiments = createExperimentConfig({
      getCameras: () => cameraRig.config,
      validateCameras: (u) => cameraRig.validate(u),
      getLighting: () => lightingLab.state,
      reset: resetScene,
      save: saveDownload,
      isBusy: () => running || training || !!recordingEpisode || !!replay,
      hasData: () =>
        [...robotDatasets.values(), episodes].some((u) => u.length),
    })),
  globalThis.ARMATURE_TEST ||
    ((demonstrations = createDemonstrationStudio({
      T: T,
      getEnv: () => environment,
      getState: () => ({
        mode: controlMode,
        running: running,
        recording: recordingEpisode,
        replay: replay,
        training: training,
      }),
      getEpisodes: () => episodes,
      takeover: () => {
        memoryLab?.stop("Teleoperation takeover");
        memoryLab?.hide();
        var a;
        ((controlMode = "teleop"),
          (environment.target = environment.q.slice()),
          (running = !0),
          (stepAccumulator = 0),
          (element("run").textContent = "\u2161 Pause"),
          (element("phase").textContent = "Manual demonstration"),
          recordingEpisode &&
            (recordingEpisode.demonstration ??
              (recordingEpisode.demonstration = {}),
            (a = recordingEpisode.demonstration).interventions ??
              (a.interventions = []),
            recordingEpisode.demonstration.interventions.push({
              frame: recordingEpisode.frames.length,
              simulationStep: environment.steps,
              to: "teleop",
            })));
      },
      pause: () => {
        ((running = !1),
          (stepAccumulator = 0),
          (element("run").textContent = "\u25B6 Resume"));
      },
      resumeScript: () => {
        var a;
        if (replay || training) throw Error("Exit replay or training first.");
        if (environment.terminated || environment.truncated)
          throw Error("The task ended; reset before running.");
        ((expertPlan = environment.expertPlan()),
          (planIndex = 0),
          (planStep = 0),
          (controlMode = "expert"),
          (running = !0),
          (stepAccumulator = 0),
          (element("run").textContent = "\u2161 Pause"),
          recordingEpisode &&
            (recordingEpisode.demonstration ??
              (recordingEpisode.demonstration = {}),
            (a = recordingEpisode.demonstration).interventions ??
              (a.interventions = []),
            recordingEpisode.demonstration.interventions.push({
              frame: recordingEpisode.frames.length,
              simulationStep: environment.steps,
              to: "scripted-IK-v1",
            })));
      },
      beginRecording: (a) => {
        if (!recordingEpisode) {
          if (training || replay) throw Error("Exit replay or training first.");
          if (episodes.length && episodes[0].rgb !== a)
            throw Error("Image setting must match existing episodes.");
          if (
            recordedImageBytes() >= 128 * 1024 * 1024 ||
            recordedFrameCount() >= (a ? 3e3 : 12e3)
          )
            throw Error("Recording buffer full. Download episodes and reload.");
          (cameraRig?.assertRecording(a),
            (element("rgb").checked = a),
            (environment.config.cameraSensorEV =
              lightingLab?.state.sensorEV || 0),
            (recordingEpisode = {
              task:
                (TRIAL_TASKS[environment.config.task] ||
                  environment.config.task) +
                " " +
                environment.config.object,
              scene: element("scene").value,
              objectType: environment.config.object,
              config: JSON.parse(JSON.stringify(environment.config)),
              rgb: a,
              frames: [],
              success: !1,
              demonstration: {
                version: "armature-teleop-v1",
                startSimulationStep: environment.steps,
                startObservation: environment.observe(),
                recordingFromCurrentState: !0,
                inputCoordinates:
                  "world or tool; rotation is about XYZ; exported actions are absolute joint targets",
                markers: [],
                interventions: [],
              },
            }),
            (batchRemaining = 0),
            updateRecorder());
        }
      },
      endRecording: () =>
        finishRecording(
          environment.terminated,
          "Demonstration stopped by user",
        ),
      reset: (a) => {
        ((batchRemaining = 0),
          a &&
            ((element("seed").value = String(
              (Number(element("seed").value) + 1) >>> 0,
            )),
            (element("variation").checked = !0)),
          resetScene());
      },
      playEpisode: startReplay,
      seek: showReplayFrame,
      exitReplay: () => resetScene(),
      createDatasetFiles: createDatasetFiles,
      save: saveDownload,
    })),
    (window.armature.demonstrations = demonstrations)),
  globalThis.ARMATURE_TEST ||
    ((builder = createSceneBuilder({
      T: T,
      scene: scene,
      camera: viewCamera,
      canvas: renderer.domElement,
      getEnv: () => environment,
      reset: resetScene,
      getVisuals: () => objectVisuals,
      getFixtures: () => fixtureVisuals,
      save: saveDownload,
      types: Object.keys(OBJECT_TYPES).filter((u) => u !== "mixed"),
      getSpec: getObjectSpec,
      getState: () => ({
        running: running,
        training: training,
        recording: recordingEpisode,
        replay: replay,
      }),
      pause: () => {
        ((running = !1),
          (stepAccumulator = 0),
          (cinemaMode = !1),
          (element("run").textContent = "\u25B6 Resume"));
      },
      start: () => {
        ((controlMode = "authored"),
          (running = !0),
          (stepAccumulator = 0),
          (element("run").textContent = "\u2161 Pause"));
      },
      frame: (u) => {
        (cameraTarget.fromArray(u),
          (cameraDistance = Math.max(
            1.2,
            environment.model.cameraDistance * 0.65,
          )),
          updateViewCamera());
      },
    })),
    (window.armature.builder = builder)),
  resetScene(),
  globalThis.ARMATURE_TEST || element("tab-scene").click());
var previousFrameTime = performance.now(),
  previousCaptureTime = 0;
function animate(u) {
  studioFeedback?.refresh();
  requestAnimationFrame(animate);
  let a = Math.min(0.1, (u - previousFrameTime) / 1e3);
  if (
    (demonstrations?.update(a),
    builder?.update(a),
    (previousFrameTime = u),
    stressReplayPlaying && replay)
  ) {
    stressReplayTime += a;
    let l = Math.floor(stressReplayTime * 10) % replay.episode.frames.length;
    ((element("scrub").value = l), showReplayFrame(l));
  }
  if (running && !training) {
    stepAccumulator +=
      a * (controlMode === "teleop" ? 1 : Number(element("speed").value));
    let l = 8;
    for (; stepAccumulator >= 1 / 30 && running && l-- > 0;)
      (advanceControl(), (stepAccumulator -= 1 / 30));
  }
  (cinemaMode && ((cameraAzimuth += a * 0.08), updateViewCamera()),
    (ghostOverlay.visible =
      element("ghost").checked && !replay && !memoryLab?.frame()?.coversClosed),
    ghostOverlay.visible &&
      expertPlan[planIndex] &&
      ghostOverlay.position.fromArray(expertPlan[planIndex].p),
    u - previousCaptureTime > 160 &&
      !replay &&
      (captureCameras(!1), (previousCaptureTime = u)),
    lightingLab?.update(),
    workspaceComfort?.refreshPreview(),
    renderer.render(scene, viewCamera));
}
requestAnimationFrame(animate);
export { showRecorder };

function updateMemoryVisuals(n) {
  (memoryCovers.forEach((e) => (e.visible = !!n?.coversClosed)),
    environment.config.memoryTask === "covered" &&
      objectVisuals.forEach((e, t) =>
        e.traverse((r) => {
          r.isMesh &&
            r.material.color.set(n?.markedBay === t ? "#c3ef74" : "#7b8f9d");
        }),
      ),
    n?.coversClosed &&
      ((pathOverlay.visible = !1), (ghostOverlay.visible = !1)));
}

function rebuildMemoryVisuals() {
  memoryCovers = [];
  if (environment.config.task !== "memory") return;
  goalVisuals.forEach((goal, index) => {
    goal.position.x = environment.model.goalX;
    goal.position.z =
      environment.config.memoryTask === "sequence"
        ? environment.model.rowZ + index * environment.model.rowSpacing
        : 0;
    goal.visible = environment.config.memoryTask === "sequence" || index === 0;
  });
  if (environment.config.memoryTask === "covered")
    for (const body of environment.objects) {
      const scale = environment.config.sizeScale;
      const cover = addBox(
        0.066 * scale,
        0.09 * scale,
        0.066 * scale,
        material("#647989", 0.55, 0.3),
        body.position.x,
        0.047 * scale,
        body.position.z,
        taskGroup,
      );
      cover.visible = false;
      memoryCovers.push(cover);
    }
  updateMemoryVisuals(memoryLab?.observe());
}

globalThis.ARMATURE_TEST ||
  !MEMORY_ENABLED ||
  (memoryLab = createMemoryLab({
    onStart: (n) => {
      if (training)
        throw Error(
          "Stop the reach-controller search before starting a memory trial.",
        );
      builder?.setMode("presets");
      let e =
        n.robotId && n.robotId !== environment.model.id
          ? robotDatasets.get(n.robotId) || []
          : episodes;
      if (n.record && e.length && e[0].rgb !== element("rgb").checked)
        throw Error(
          "Use the same RGB setting as this robot\u2019s existing dataset.",
        );
      let t =
          (n.task === "sequence" ? 1500 : 500) +
          (n.task === "revision" ? 180 : 90) +
          Math.round(n.delay * 30) * (n.task === "sequence" ? 2 : 1),
        r = e.reduce((v, s) => v + s.frames.length, 0);
      if (n.record && r + t > (element("rgb").checked ? 3e3 : 12e3))
        throw Error(
          "Not enough recording capacity for this trial. Shorten the delay or download and reload; RGB has a 3,000-frame limit.",
        );
      (n.robotId &&
        (getRobotModel(n.robotId), (element("robot").value = n.robotId)),
        (element("task").value = "memory_" + n.task));
      let c = n.object || element("object").value;
      if (!OBJECT_TYPES[c]) throw Error("Unknown object set");
      ((element("object").value = c),
        (window.overrideColor = null),
        resetScene({
          ...n.environment,
          task: "memory",
          physicsMode: "kinematic",
          composition: undefined,
          memoryTask: n.task,
          object: c,
          seed: n.layoutSeed ?? 7,
          randomize: !!n.randomize,
          maxSteps: 7200,
        }),
        (controlMode = "memory"),
        (running = !1),
        (batchRemaining = 0));
      let i =
        n.task === "covered"
          ? ["Bay A", "Bay B", "Bay C"]
          : environment.objectSpecs.map(
              (v, s) =>
                ["Coral ", "Blue ", "Green "][s] + v.label.toLowerCase(),
            );
      return (
        n.record &&
          ((recordingEpisode = {
            task: "Memory: " + n.task,
            scene: element("scene").value,
            objectType: c,
            config: { ...environment.config },
            rgb: element("rgb").checked,
            frames: [],
            success: !1,
            memoryNames: i,
            memoryProtocol: "armature-memory-v1",
          }),
          showRecorder(!0)),
        (element("phase").textContent = "Memory trial"),
        {
          names: i,
          robotId: environment.model.id,
          object: c,
          scene: element("scene").value,
          sizeScale: environment.config.sizeScale,
          environment: {
            ...environment.config,
            padFriction: environment.config.padFriction ?? 2.8,
          },
        }
      );
    },
    onMotion: (n, e) => {
      ((activeMemoryObject = n),
        (stablePlacementSteps = 0),
        (environment.goals[n] = [
          environment.model.goalX,
          (environment.objectSpecs[n].height * environment.config.sizeScale) /
            2 +
            0.001,
          element("task").value === "memory_sequence"
            ? environment.model.rowZ + e * environment.model.rowSpacing
            : 0,
        ]),
        (environment.config.activeIndices = [n]),
        (environment.previousDistance = environment.distance()),
        (expertPlan = environment.expertPlan([n])),
        (planIndex = 0),
        (planStep = 0),
        rebuildTaskVisuals());
    },
    onStepMotion: () => {
      let n = stepAndRecord(expertAction()),
        e = expertPlan[planIndex];
      e &&
        ++planStep >= Math.round(e.seconds * 30) &&
        (planIndex++, (planStep = 0));
      let t = environment.objects[activeMemoryObject],
        r = Math.hypot(
          t.position.x - environment.goals[activeMemoryObject][0],
          t.position.y - environment.goals[activeMemoryObject][1],
          t.position.z - environment.goals[activeMemoryObject][2],
        );
      return (
        (stablePlacementSteps =
          r < 0.018 && t.velocity.length() < 0.035 && environment.isOpen
            ? stablePlacementSteps + 1
            : 0),
        {
          done: planIndex >= expertPlan.length || n.truncated,
          placed: stablePlacementSteps >= 15,
          error: r,
          fatal: n.truncated,
        }
      );
    },
    onStepHold: () => stepAndRecord(environment.q.slice()),
    onVisual: updateMemoryVisuals,
    onFinish: (n, e) => {
      if (
        ((running = !1),
        (environment.memorySuccess = n.success),
        (environment.terminated = !e),
        (environment.truncated = e),
        recordingEpisode)
      ) {
        let t = recordingEpisode.frames.at(-1);
        (t &&
          ((t["next.done"] = !0),
          (t["next.terminated"] = !e),
          (t["next.truncated"] = e),
          (t["next.success"] = n.success),
          (t["next.reward"] += n.success ? 10 : 0)),
          (recordingEpisode.memoryEvaluation = n),
          finishRecording(
            n.success,
            e
              ? "Memory trial interrupted"
              : n.success
                ? "Memory and physical success"
                : "Memory or placement failed",
          ));
      }
      ((element("phase").textContent = e
        ? "Memory trial stopped"
        : n.success
          ? "Memory + placement passed"
          : "Memory trial complete"),
        (element("run").textContent = "\u21BB Run again"));
    },
    onSave: saveDownload,
    onResume: () => {
      ((running = !0),
        (controlMode = "memory"),
        (element("run").textContent = "\u2161 Pause"));
    },
    onPause: () => {
      running = !1;
    },
    getState: () => ({
      state: environment.q.slice(),
      tcp: environment.tcp().toArray(),
    }),
  }));
memoryLab &&
  (window.armature.memory = {
    reset: (n) => memoryLab.start(n),
    observe: () => memoryLab.observe(),
    choose: (n) => memoryLab.choose(n),
    step: () => {
      if (running)
        throw Error(
          "Use autoRun:false on memory.reset() before external stepping.",
        );
      let n = memoryLab.step();
      return (updateStatus(), n);
    },
    report: () => memoryLab.report,
    stop: () => memoryLab.stop("External stop"),
  });

if (memoryLab) {
  const runTask = element("run").onclick;
  element("run").onclick = () => {
    if (!element("task").value.startsWith("memory_")) return runTask();
    if (memoryLab.active) {
      running = !running;
      element("run").textContent = running ? "Ⅱ Pause" : "▶ Resume";
      return;
    }
    try {
      memoryLab.start();
    } catch (error) {
      element("memoryDescription").textContent = error.message;
    }
  };
  syncControlSummary();
}

if (!globalThis.ARMATURE_TEST) {
  bookmarks = createRobotBookmarks({
    host: element("robotBookmarks"),
    save: saveDownload,
    getEnv: () => environment,
    move: (pose) => {
      if (training || replay || memoryLab?.active)
        throw Error(
          "Finish training, replay, or the memory trial before moving to a bookmark.",
        );
      if (environment.config.physicsMode !== "kinematic")
        throw Error("Bookmarks require kinematic servo mode.");
      if (environment.terminated || environment.truncated)
        throw Error("Reset the ended episode before moving to a bookmark.");
      bookmarkTarget = pose;
      controlMode = "bookmark";
      batchRemaining = 0;
      stepAccumulator = 0;
      running = true;
      element("run").textContent = "Ⅱ Pause";
      element("phase").textContent = "Moving to bookmark";
      if (recordingEpisode) {
        recordingEpisode.demonstration ??= {};
        recordingEpisode.demonstration.interventions ??= [];
        recordingEpisode.demonstration.interventions.push({
          frame: recordingEpisode.frames.length,
          simulationStep: environment.steps,
          to: "bookmark",
        });
      }
    },
    stop: () => {
      if (controlMode !== "bookmark") return;
      bookmarkTarget = null;
      running = false;
      stepAccumulator = 0;
      controlMode = "manual";
      environment.q.forEach((value, index) => {
        element("joint" + index).value = value;
      });
      element("run").textContent = "▶ Resume";
      element("phase").textContent = "Bookmark move stopped";
    },
  });
}

if (!globalThis.ARMATURE_TEST) {
  studioFeedback = createStudioFeedback(() => ({
    running,
    training,
    replay: !!replay,
    recording: !!recordingEpisode,
    finished:
      environment.terminated ||
      environment.truncated ||
      (controlMode === "expert" &&
        expertPlan.length > 0 &&
        planIndex >= expertPlan.length),
    steps: environment.steps,
  }));
  studioFeedback.refresh();
}

if (!globalThis.ARMATURE_TEST) workspaceComfort = createWorkspaceComfort();
