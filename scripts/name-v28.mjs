import fs from "node:fs/promises";
import path from "node:path";
import { parse } from "acorn";
import { analyze } from "eslint-scope";
import { format } from "prettier";
const names = {
  "src/main.js": {
    Xe: "element",
    Tt: "T",
    Yc: "vector",
    Sn: "renderer",
    rn: "scene",
    ys: "viewCamera",
    yi: "material",
    _h: "addMesh",
    si: "addBox",
    Ux: "addCylinder",
    y2: "addLight",
    Gr: "keyLight",
    $h: "environmentScene",
    Gx: "environmentGenerator",
    Ax: "environmentMap",
    z2: "floorMaterial",
    D2: "benchMaterial",
    Qc: "legacyWorkbench",
    Ki: "kittingCell",
    L2: "floorGrid",
    oo: "backgroundGroup",
    Hu: "robotDatasets",
    ed: "downloadedFrameCounts",
    ye: "environment",
    td: "geometryCache",
    Bi: "taskGroup",
    zs: "objectVisuals",
    nd: "goalVisuals",
    gr: "pathOverlay",
    uc: "stressReplayPlaying",
    rd: "stressReplayTime",
    jr: "expertPlan",
    ci: "planIndex",
    uo: "planStep",
    un: "running",
    zn: "controlMode",
    Zi: "stepAccumulator",
    Jc: "cinemaMode",
    Wt: "recordingEpisode",
    vn: "episodes",
    Pu: "downloadedFrames",
    ai: "batchRemaining",
    yr: "training",
    _c: "cancelTraining",
    lc: "learnedPolicy",
    ln: "replay",
    Wn: "cameraRig",
    Ds: "demonstrations",
    Ar: "builder",
    yu: "fixtureVisuals",
    $c: "overheadCamera",
    zu: "wristCamera",
    oi: "captureRenderer",
    hc: "ghostOverlay",
    id: "trialLab",
    zr: "lightingLab",
    sd: "rebuildTaskVisuals",
    lo: "syncObjectVisuals",
    kx: "applySceneTheme",
    Kx: "readSceneConfig",
    M2: "switchRobot",
    $n: "resetScene",
    Bx: "expertAction",
    cd: "captureCameras",
    g2: "stepAndRecord",
    Yi: "finishRecording",
    ad: "toggleRecording",
    Du: "recordedImageBytes",
    ea: "recordedFrameCount",
    Zx: "advanceControl",
    od: "updateStatus",
    ud: "showRecorder",
    dc: "updateRecorder",
    Yx: "drawSignalPlot",
    kr: "saveDownload",
    j2: "startReplay",
    N2: "updateReplayStatus",
    ho: "showReplayFrame",
    ld: "applyPrompt",
    ta: "cameraAzimuth",
    vc: "cameraInclination",
    ui: "cameraDistance",
    fc: "cameraTarget",
    Ls: "updateViewCamera",
    T2: "buildJointControls",
    hd: "reachControllerAction",
    S2: "yieldTraining",
    V2: "previousFrameTime",
    E2: "previousCaptureTime",
    q2: "animate",
  },
  "src/simulation/environment.js": {
    Os: "RobotEnvironment",
    Th: "seededRandom",
    Hi: "clamp",
    Nh: "PANDA_JOINT_NAMES",
  },
  "src/robots/models.js": {
    Qe: "getRobotModel",
    ie: "ROBOT_MODELS",
    It: "pandaAsset",
    qe: "decodeRobotAsset",
    Et: "PANDA_HAND_LINKS",
    jt: "attachPandaHand",
    Ht: "DEFAULT_ROBOT_CONFIG",
    dt: "so101Asset",
  },
  "src/robots/visuals.js": { Sh: "attachRobotVisuals" },
  "src/robots/urdf.js": { p2: "simulationUrdf", ao: "escapeXml" },
  "src/simulation/objects.js": {
    to: "OBJECT_TYPES",
    fu: "getObjectSpec",
    Lf: "addObjectCollisionShapes",
    Mf: "createObjectVisual",
  },
  "src/export/lerobot.js": {
    X2: "createDatasetFiles",
    Ex: "exportDatasetZip",
    Tn: "featureSpec",
    Vx: "DEFAULT_FEATURES",
    Qh: "parquetField",
    Jh: "parquetSchema",
    x2: "numericStatistics",
    m2: "imageStatistics",
  },
  "src/scenes/kitting-cell.js": { Wx: "createKittingCell" },
  "src/ui/studio-tabs.js": {
    qx: "initializeStudioTabs",
    Fx: "syncStudioControls",
  },
  "src/stress/lab.js": { O2: "createStressScenarios", Ix: "createStressLab" },
  "src/authoring/builder.js": { I7: "createSceneBuilder" },
  "src/authoring/project.js": {
    Zo: "validateProject",
    th: "validateTask",
    nh: "createStage",
    L3: "projectFromEnvironment",
  },
  "src/authoring/task-runner.js": {
    eh: "AuthoredTaskRunner",
    R7: "installAuthoredTasks",
  },
  "src/authoring/import-assets.js": {
    Yl: "parseImportedAsset",
    Ql: "prepareImportedVisual",
    h7: "validateImportedCollision",
    d7: "validateImportOptions",
    v7: "collisionDescription",
  },
  "src/authoring/import-dialog.js": { w7: "createImportDialog" },
  "src/scenes/lighting.js": {
    P7: "installLightingTask",
    y7: "createLightingLab",
    H7: "lightingForSeed",
    ko: "LIGHTING_PRESETS",
  },
  "src/teleop/phone.js": {
    JO: "validatePhonePacket",
    sh: "PhoneInputBuffer",
    A7: "createPeerConnection",
    k7: "createPhonePairing",
  },
  "src/teleop/demonstrations.js": { dp: "createDemonstrationStudio" },
  "src/export/demonstrations.js": {
    q3: "validateSegment",
    ap: "defaultReview",
    F3: "sliceDemonstration",
    R3: "demonstrationMetadata",
    op: "exportDemonstrations",
  },
  "src/experiments/config.js": { vp: "createExperimentConfig" },
  "src/experiments/randomized.js": {
    Ly: "sampleExperiment",
    My: "validateExperimentSweep",
    Gp: "createRandomizedExperiments",
  },
  "src/experiments/trials.js": {
    ti: "TRIAL_TASKS",
    Ap: "installTrialTasks",
    kp: "createTrialLab",
  },
  "src/sensors/depth.js": {
    vH: "decodeSensorPixels",
    fp: "encodeSensorArray",
    pp: "instanceColor",
    W3: "depthRange",
    lh: "sensorPreview",
    xp: "createDepthSensor",
    mp: "exportSensorSnapshot",
  },
  "src/sensors/cameras.js": { ps: "enabledCameras", Xp: "createCameraRig" },
  "src/simulation/panda-dynamics.js": { Up: "createPandaDynamics" },
  "src/simulation/panda-inertias.js": {
    U3: "PANDA_INERTIAS",
    Fc: "pandaDynamicsModel",
    eu: "applyLinkInertia",
  },
};
const files = (await fs.readdir("src", { recursive: true }))
  .filter((f) => f.endsWith(".js"))
  .map((f) => "src/" + f);
for (const file of files) {
  const source = await fs.readFile(file, "utf8"),
    ast = parse(source, {
      ecmaVersion: "latest",
      sourceType: "module",
      ranges: true,
    }),
    scope = analyze(ast, {
      ecmaVersion: 2024,
      sourceType: "module",
      optimistic: true,
    }).scopes.find((s) => s.type === "module"),
    map = { ...names[file] };
  for (const n of ast.body)
    if (n.type === "ImportDeclaration") {
      const owner = path.normalize(
        path.join(path.dirname(file), n.source.value),
      );
      for (const spec of n.specifiers)
        if (spec.imported && names[owner]?.[spec.imported.name])
          map[spec.local.name] = names[owner][spec.imported.name];
    }
  const edits = new Map(),
    add = (n) => {
      if (map[n.name]) edits.set(n.start, { end: n.end, text: map[n.name] });
    };
  for (const v of scope.variables)
    if (map[v.name]) {
      v.identifiers.forEach(add);
      v.references.forEach((r) => add(r.identifier));
    }
  for (const n of ast.body) {
    if (n.type === "ExportNamedDeclaration")
      for (const s of n.specifiers) {
        add(s.local);
        add(s.exported);
      }
    if (n.type === "ImportDeclaration") {
      const owner = path.normalize(
        path.join(path.dirname(file), n.source.value),
      );
      for (const spec of n.specifiers)
        if (spec.imported && names[owner]?.[spec.imported.name])
          edits.set(spec.imported.start, {
            end: spec.imported.end,
            text: names[owner][spec.imported.name],
          });
    }
  }
  function walk(n) {
    if (!n || typeof n !== "object") return;
    if (n.type === "Property" && n.shorthand && edits.has(n.value.start)) {
      const edit = edits.get(n.value.start);
      edit.text = n.key.name + ": " + edit.text;
    }
    for (const [k, v] of Object.entries(n))
      if (!["start", "end", "range"].includes(k)) {
        if (Array.isArray(v)) v.forEach(walk);
        else walk(v);
      }
  }
  walk(ast);
  let result = source;
  for (const [a, { end, text }] of [...edits].sort((a, b) => b[0] - a[0]))
    result = result.slice(0, a) + text + result.slice(end);
  await fs.writeFile(file, await format(result, { parser: "babel" }));
}
await fs.writeFile(
  "scripts/v28-names.json",
  JSON.stringify(names, null, 2) + "\n",
);
