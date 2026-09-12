# V28 migration

The active source now follows `armature-studio-v28.html`, with the earlier Memory Lab restored. Edit `src/` and run `npm run build`; the output remains `dist/robotics-arm-studio.html`, a single self-contained page. Both supplied HTML files remain unchanged.

The pre-migration source, dependencies, scripts, tests and documentation are preserved locally in `reports/v28-migration/pre-v28-source.tar.gz` (excluded from Git; not part of a fresh clone). `docs/v28-extraction-manifest.json` records the incoming artifact hash and recovered module boundaries. The recovery scripts are provenance tools, not build steps; do not rerun them over maintained source.

## What arrived in V28

| Area | Recovered implementation | Limits |
| --- | --- | --- |
| Scene authoring | Entity roles, transforms/gizmos, undo, project JSON import/export, scene and task modes | Imported visual geometry is not automatically exact collision geometry |
| Object import | GLB, STL, OBJ, units/up-axis/size preview, sample object pack | 8 MB input limit; static meshes; fitted boxes or compound mesh boxes; unsupported dependencies/formats are rejected |
| Task authoring | Pick/place, stack, push, insertion/extraction, light-switch skills; individual stages; measured stage and final checks | Privileged scripted IK; arbitrary authored layouts are not guaranteed reachable or successful |
| Demonstrations | Keyboard/gamepad/phone input paths, takeover, recording, review, segment selection, human labels and curation export | Phone pairing needs a separate service; human labels remain distinct from evaluator success |
| Cameras | Overhead, wrist, custom camera; camera configuration/calibration, exposure, replay and recording schema locks | Ideal rendered sensors; changing selected cameras/resolutions requires a new compatible dataset |
| Synthetic sensors | Axial depth, instance IDs, previews, raw array/PNG/metadata export | Privileged visual-mesh ground truth; no sensor noise; depth/IDs are separate snapshots, not automatically recorded policy observations |
| Lighting | Presets, seeded variation, work-light switch and lighting traces | Simulated appearance and task state, not calibrated real lighting |
| Evaluation | Four pick/place trial variants, diagnostics, seeded parameter sweeps, existing stress grid | Current baselines use privileged simulator state; no external inference server or trained-policy adapter included |
| Panda dynamics | Experimental constraint/motor mode with supplied inertias and collision geometry | Panda only; unvalidated Cannon implementation; not MuJoCo fidelity, calibrated hardware dynamics, or a torque-action policy interface |

## Integration decisions and fixes

- Recovered 34 modules, then named public interfaces and composition state. Kept the incoming vendored Three.js addon bundle and dynamics dependency intact. These contain duplicate library code; deduplication would need its own compatibility checks.
- Restored the shared, source-built stress worker rather than retaining V28's embedded frozen worker string. All four compiled controllers and eight tested rollouts still match the original reference exactly.
- Restored delayed recall, covered bays, interrupted recipe and revision protocols, their UI, replay cues, and separate public/evaluator sidecars. Memory experiments explicitly use kinematic physics and clear authored composition state.
- Fixed an inherited synthetic sensor crash: replacing hidden TransformControls materials with shader materials caused its matrix update to access a missing material color. Sensor passes now replace materials only on visible meshes; hidden helpers retain their original materials. The regression suite reproduces the error in the incoming V28 file and verifies successful capture in the build.
- Fixed an inherited stress-inspection crash: compact stress trajectories omit TCP, so replay status now derives it from joint FK and uses the stored control-step timestamp. The 25-trial UI sweep, download, scrubbing and exact reproduction are tested.
- Restored the stress report identifier carried beside the embedded worker in the minified input; a new unresolved-binding check guards extraction boundaries.
- Report the actual physics mode/rate in `armature.spec` instead of always claiming 240 Hz. Kinematic mode remains 240 Hz; the experimental Panda mode defaults to 480 Hz.
- Updated application/package/export-generator identification to 28.0.0. LeRobot's format identifier remains `v3.0`.
- Kept the experimental Panda reach controller and its CEM search unchanged. No workshop evaluation runner or new policy feature was implemented.

## Deployment and unsupported behavior

The simulator, authoring tools, local imports, recording and exports work from a local file without network requests in the tested workflows. The generated HTML can be served on GitHub Pages. A native application is not required.

**Phone pairing is an exception.** V28 calls relative `/api/phone` endpoints and may use WebRTC/STUN. The supplied artifact does not include that backend or the phone client. GitHub Pages does not supply those endpoints. The migration retains the client code and makes the requirement explicit; end-to-end phone control is not validated. A linked `armature-studio.html` page in the original UI also was not supplied; the migrated download link refers to the current document, including when deployed as `index.html`.

The default robot motion still uses velocity-limited kinematic servos and approximate collision proxies. The separate experimental Panda mode must be selected explicitly. Neither mode establishes hardware fidelity, self-collision coverage, robust insertion performance, or sim-to-real transfer.

Memory public observations omit hidden answers/conditions/correctness, but still expose allowed task-progress information. Legacy `armature.observe()` and task reports contain privileged information. Separation is an API convention, not a security boundary. Model adapters must whitelist fields and enforce causal history. Synthetic depth/instance metadata includes ground truth and must be treated explicitly in experimental observation contracts.

LeRobot-shaped Parquet, PNG and sidecar contents are independently decoded and checked. Compatibility with the stock LeRobot loader or a training pipeline remains unverified. Recorded RGB excludes debug helpers; task geometry and intentional visual cues remain part of the scene.

See [validation.md](validation.md) for measured regression results and untested paths.
