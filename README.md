# ARMATURE

**Build a robot workspace. Teach a task. Inspect what happened.**

ARMATURE is a browser-based robotics studio for scene authoring, demonstration recording, and repeatable experiments. Set up a kitting cell, compose a pick-and-place sequence, capture camera observations, and inspect failures—all in a single self-contained page.

**[Launch the simulator →](https://arpitg1304.github.io/armature/)** · [Architecture](docs/architecture.md) · [Validation](docs/validation.md)

![ARMATURE running a Franka Panda robot in its kitting cell, with task controls and camera views](docs/images/armature-studio.png)

### From workbench to experiment

| Create | Run | Understand |
| --- | --- | --- |
| Arrange parts, targets, and fixtures with scene editing and undo. | Compose task stages or take over manually to record demonstrations. | Scrub recordings and inspect failed stress trials. |
| Choose Panda, SO-101, UR5e, or xArm 6. | Try kitting, transfer, sorting, stacking, insertion, and lighting tasks. | Compare seeded trial sweeps and reproduce individual rollouts. |
| Import static objects and configure cameras and lighting. | Export demonstrations in a LeRobot v3-style dataset layout. | Capture RGB and separate synthetic depth/instance snapshots. |

The studio opens on a **Franka Panda in a Blender-built kitting cell**; switch to SO-101, UR5e, or xArm 6 from the robot selector. Robot assets, scenery, styles, code, and simulation workers are embedded in the generated HTML. Download the page and run the core simulator offline—no application server or Blender installation required.

### Try a first task

1. [Open ARMATURE](https://arpitg1304.github.io/armature/) in a browser with WebGL enabled.
2. Choose **Kitting cell / SO-101 / Pack a parts kit** and run the task.
3. Explore **Demonstrate** to record an episode, **Cameras** to inspect observations, or **Tools** to run stress trials.
4. Change the layout or experiment settings and compare the result.

### Run and develop locally

Requires Node.js 22+.

```sh
npm ci
npm run build
```

Open `dist/robotics-arm-studio.html`. Edit the modules in `src/` and rebuild; the generated page contains everything needed for the core simulator.

```sh
npm test                 # source bindings, protocols, features, worker and task physics
npm run test:browser     # Chrome: simulation, authoring, sensors, recording and research tasks
npm run test:stress-ui   # Chrome: worker sweeps, export, replay and reproduction
npm run build:pages      # create _site/index.html for static hosting
npm run test:pages       # Chrome: check the deployed page layout and runtime
```

GitHub Actions runs tests and a Chromium smoke check, then deploys successful pushes to `main`. See [deployment](docs/deployment.md) for details.

### What the simulator models

ARMATURE is an experiment and authoring prototype. Default robot motion uses **velocity-limited kinematic servos with approximate collision proxies**; movable objects use Cannon-es physics. This is not a validated torque-dynamics simulator, a MuJoCo-fidelity model, or evidence of sim-to-real transfer. A separate Panda constraint-dynamics mode is experimental and unvalidated.

The kitting cell's peripheral bins and fixtures are mostly visual scenery; authored objects have separate collision approximations. Dataset exports have independent Parquet/PNG checks, but stock LeRobot loading and training remain unverified. Phone pairing needs a separate backend and phone client, which this repository does not provide.

### Research and deeper inspection

Memory tasks are hidden in the default studio. Append `?memory=1` to enable the research interface. Privileged evaluator data is kept separate from memory-policy observations, and debug overlays are excluded from recorded RGB. The general simulator API still exposes privileged state; an external policy-inference bridge is not yet implemented.

- [Architecture and observation boundaries](docs/architecture.md)
- [Kitting cell assets and Blender authoring](docs/kitting-cell.md)
- [Validation coverage and dataset checks](docs/validation.md)
- [Research directions](docs/next-improvements.md)

Third-party notices ship with the standalone page. Their licenses remain applicable; the application's `UNLICENSED` package designation does not replace them.
