# ARMATURE architecture

ARMATURE is a browser robotics authoring and experiment prototype. `src/main.js` composes rendering, simulation, transport, recording/replay, and the public `window.armature` API. `scripts/build.mjs` uses esbuild to embed all code, CSS, assets, notices and a source-built worker into one HTML file.

| Source | Responsibility |
| --- | --- |
| `src/main.js` | Live workspace, orchestration, public API and experimental Panda CEM reach experiment |
| `src/simulation/environment.js` | Robot FK/IK, reset/step, kinematic servos, object physics and baseline plans |
| `src/simulation/objects.js` | Object catalog, visuals and collision proxies |
| `src/simulation/panda-{dynamics,inertias}.js` | Explicitly experimental Panda constraint motors and inertial/collision data |
| `src/robots/{models,visuals,urdf}.js` | Four robot models, asset decoding, visuals and combined URDF |
| `src/authoring/{project,skills,task-runner}.js` | Project validation, skill composition, stage execution and evaluator checks |
| `src/authoring/{builder,import-assets,import-dialog}.js` | Scene/task UI, undo, transform controls, static object import |
| `src/scenes/{kitting-cell,lighting}.js` | Blender cell and lighting/switch task |
| `src/sensors/{cameras,depth}.js` | Camera configuration/calibration/RGB capture; separate synthetic depth/instance snapshots |
| `src/teleop/{demonstrations,phone}.js` | Operator takeover, input paths, review UI; phone-service client |
| `src/export/{lerobot,demonstrations}.js` | Dataset packaging and immutable curated segments |
| `src/experiments/{config,trials,randomized}.js` | Save/load experiment settings, trial variants and seeded sweeps |
| `src/memory/{protocol,lab,export}.js` | Memory state machine, UI/executor bridge, public and privileged sidecars |
| `src/stress/{lab,worker}.js` | Stress grid and shared-simulator worker entry |
| `src/ui/{studio-tabs,tabs}.js` | Navigation (Setup / Demonstrate / Cameras / Lighting / Episodes / Tools), underlying scene/experiment/advanced panels and memory summary |
| `vendor/`, `assets/` | Bundled dependencies, robot meshes, cell and sample object pack |

Simulation runs at 30 Hz control. Default robot motion is velocity-limited kinematic servo motion, with eight 1/240-second Cannon substeps per control action. Objects are dynamic; arm motion cannot be resisted by contact in this mode. The separate Panda experiment uses constraint motors and configurable physics stepping (480 Hz default). Actions remain absolute joint targets, not commanded joint torques. Neither mode is a validated hardware dynamics model.

The standard environment is extended with trial, lighting and authored-task hooks. Authored tasks add collidable entities and measured stage/final conditions. The Blender scenery itself remains largely visual dressing. Imported objects use fitted box/compound-box collision approximations; visual holes do not imply physical holes. The built-in socket has explicit approximate collision geometry.

Recording captures pre-action state and RGB, advances simulation, then stores action and next-state/reward/termination information. Replay restores recorded state/images; it is not physical resimulation. Dataset curation copies selected frames and preserves source indices; a human label does not overwrite evaluator success.

`armature.observe()` is a privileged simulator interface. `armature.trials.observe()` and `armature.memory.observe()` expose narrower inputs, but do not provide process isolation or an external inference connection. Memory report files, authored evaluator traces, seeds, object poses and synthetic instance/depth metadata require explicit policy-input controls.

Camera capture hides debug overlays. Synthetic passes also leave hidden helper materials untouched. Memory language cues are a separate public channel, not burned into RGB; covered-bay cues are intentional scene changes. Complete sidecar histories must be filtered to the current timestep before policy use.

Runtime needs WebGL and browser memory for decoded assets/recordings. No network is needed for the standalone simulation. Phone pairing additionally requires a backend not provided here.
