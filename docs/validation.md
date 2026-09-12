# Validation — V28 migration

Run from the repository root:

```sh
npm ci
npm run build
npm test
npm run test:browser
npm run test:dataset
npm run test:stress-ui
```

Browser tests use an installed Chrome with a temporary profile. Set `ARMATURE_BROWSER_CHANNEL` to another compatible installed channel. The independent Python reader requires `tests/requirements-validation.txt` in `.venv-validation`. Tests write local reports/exports under `test-results/`; old reports elsewhere are historical, not evidence for the current build.

## Checks

- Incoming V28 and original artifact hashes remain unchanged. Alpha-equivalence checks cover 28 complete recovered modules, unchanged functions in modified modules, and the entire incoming CEM training handler.
- Four stress-controller compilations and eight rollouts (four robots × two friction settings) match the original artifact exactly. The worker imports the current shared simulator.
- Nominal SO-101 three-part kitting succeeds in 1,176 steps with approximately 1.59 mm mean final goal distance.
- A UR5e authored six-stage grasp/lift/move/place/release/retreat task succeeds in 533 steps, including measured final conditions.
- Current Chrome compares V28/reference and rebuilt reset/step traces for all four robots, six additional task settings, and Panda experimental effort settings 0 and 1. This is implementation parity, not dynamics validation.
- The actual Blob-worker UI runs 25 trials, exports the report, pins a baseline, inspects/scrubs a trajectory, and reproduces it with zero final-state difference.
- Builder project edit/undo/load round trips, operator takeover, camera configuration and calibration are exercised.
- The reference's synthetic-capture crash is reproduced. The repaired build exports 320×240 raw float32 axial depth and uint32 instance IDs. Independent decoding verifies sizes, valid ranges, label pixel counts and PNG dimensions.
- Two three-frame RGB episodes decode independently from Parquet. Their PNG bytes match the V28 reference exactly. Enabling path/ghost/camera helpers does not change recorded RGB pixels. State/action/next-state timing is checked.
- All four restored memory protocols complete with correct scripted recall and successful UR5e placement in the tested cases. A separate wrong-choice trial completes with physical success and memory failure; its 603 recorded frames align with the public sidecar, and evaluator answers remain separate.
- Three covered-bay histories produce identical public observations and overhead RGB at retrieval. Manual joint takeover interrupts the memory protocol; its Panda training button is disabled, and memory prompt shortcuts remain available.
- Unit checks cover phone release/stale/out-of-order input handling, immutable demonstration slicing, human-label/evaluator separation, deterministic sweeps, OBJ parsing and collision validation, and sensor row order/metric encoding.

Detailed outputs: `test-results/v28/{browser,dataset,authored}.json`, RGB/sensor/memory ZIPs and a screenshot; worker and nominal kitting reports remain at `test-results/{worker,kitting-physics}.json`.

## Limits of this validation

No real robot, hardware calibration, stock LeRobot training/loader, external policy inference, phone backend/client, network pairing, or live gamepad was tested. Arbitrary GLB/STL assets, every authoring skill/layout, large sweep throughput, long recording sessions, and cross-browser/GPU numerical agreement are not established by this regression suite. Successful scripted examples do not make arbitrary tasks feasible.

Tests preserve the default kinematic behavior. Experimental Panda dynamics are checked for finite execution and reference parity only, not physical accuracy. Depth and instances are ideal visual-mesh ground truth, not validated sensor measurements.
