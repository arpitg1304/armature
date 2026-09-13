# Validation

Run from the repository root:

```sh
npm ci
npm run build
npm test
npm run test:browser
npm run test:stress-ui
npm run test:bookmarks
npm run test:ui
npm run test:comfort
npm run build:pages
npm run test:pages
```

Browser checks use installed Chrome with a temporary profile. Set `ARMATURE_BROWSER_CHANNEL` to another compatible installed channel for the integration and stress suites. The Pages check uses Chrome locally and Playwright Chromium in CI.

## Checks

- Source analysis detects unresolved application bindings.
- Four worker controllers and eight rollouts (four robots × two friction settings) reproduce deterministically in independent worker contexts. Zero pad friction misses the grasp; the tested high-friction cases succeed with final goal error below 5 mm.
- A nominal SO-101 three-part kit succeeds; a UR5e six-stage grasp/lift/move/place/release/retreat task checks measured final conditions.
- Browser integration exercises seeded resets and finite stepping for all four robots, six additional task settings, and experimental Panda effort settings.
- The Blob-worker UI runs 25 trials, exports a report, pins a baseline, inspects/scrubs a trajectory, and reproduces its final state.
- Project edit/undo/load, operator takeover, camera configuration and synthetic capture are exercised.
- Research checks cover four memory protocols, physical success versus memory failure, hidden-history ambiguity in observations/RGB, and manual interruption.
- Unit checks cover phone release/stale/out-of-order input handling, immutable demonstration slicing, human-label/evaluator separation, deterministic sweeps, OBJ parsing, collision validation, and sensor encoding.
- The Pages smoke boots the self-contained HTML under a project URL path, verifies memory is hidden by default, steps the simulator, checks that no additional resources are requested, and verifies research opt-in.

The bookmark/view suite checks per-robot persistence, non-teleporting velocity-limited moves, stopping and deletion, exact workspace-view restoration, and unchanged sensor RGB/configuration.

The UI polish check exercises real run/pause/record/replay/finished status transitions, empty-state guidance, save/download confirmations, keyboard focus, and desktop/tablet/phone layout bounds. It writes review screenshots to `test-results/ui-review/`.

The workspace comfort check covers pointer/keyboard sidebar sizing, preference persistence/reset, bookmark rename and file validation, enlarged camera pixel copies, focus return and phone dialog bounds. Review images are in `test-results/comfort-review/`.

## Independent dataset checks

After the browser suite creates its recordings:

```sh
python3 -m venv .venv-validation
.venv-validation/bin/python -m pip install -r tests/requirements-validation.txt
npm run test:dataset
```

The reader decodes Parquet and PNG data independently. It checks frame counts, dimensions, nonblank RGB, pixel-identical recordings with debug overlays off/on, timestamps, and state/action/next-state alignment. Synthetic depth and instance checks cover array dimensions, valid ranges, label pixel counts, and matching RGB dimensions. Memory sidecars are checked for frame alignment, evaluator separation, and a completed trial with physical success but memory failure.

Outputs live in `test-results/integration/`; worker and nominal kitting reports are in `test-results/`. These generated recordings and reports are not committed.

## Limits

No real robot, hardware calibration, stock LeRobot training/loader, external policy inference, phone backend/client, network pairing, or live gamepad is covered. Arbitrary GLB/STL assets, every skill/layout, large sweep throughput, long recording sessions, and cross-browser/GPU agreement are not established by this suite.

Experimental Panda dynamics are checked for finite execution, not physical accuracy. Depth and instances are ideal visual-mesh ground truth, not validated sensor measurements. Successful scripted examples do not establish general task feasibility.
