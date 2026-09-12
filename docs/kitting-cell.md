# Blender-built kitting cell

The default scene is now **Kitting cell / SO-101 / Pack a parts kit**. Use the Scene dropdown to return to the original lab or other presets. All four robot choices remain available.

The cell has a beveled laminate worktop, aluminum frame with extrusion slots and mounting hardware, drawers, an ESD work area, a perforated rear panel, four labeled supply bins with spare components, task-light housing, procedure signage, a side staging tray, and an emergency-stop prop. The procedure signage and bin labels are fixed environmental markings and never depend on memory answers or evaluator state. The emergency-stop prop is decorative, not an interactive safety control.

The current implementation improves environmental detail. It retains the original robot meshes and 160×120 capture resolution; it is not a claim of photorealism or calibrated sensor simulation.

## Files and regeneration

- `assets/scenes/kitting-cell.blend`: editable Blender scene, created with Blender 4.5.12.
- `scripts/create-kitting-cell.py`: reproducible procedural authoring script, including bevels, normals, materials, and geometry export.
- `assets/scenes/kitting-cell.json.gz.b64`: checked-in render asset; 108,176 triangles, ten material batches, about 1.28 MB base64 text.
- `src/scenes/kitting-cell.js`: decodes the asset and creates cached Three.js geometry/materials.
- `src/main.js`: scene selection, visibility, cell framing, exposure, and shadow settings.

This uses Blender's evaluated geometry directly rather than a glTF loader. The exporter combines triangles by material and converts Blender Z-up coordinates to Three.js Y-up metres. Lights/cameras in the `.blend` are useful for editing; the browser uses its own renderer. No Blender runtime is needed to open or rebuild the HTML.

To regenerate using an installed Blender:

```sh
blender --background --python scripts/create-kitting-cell.py
npm run build
```

The isolated Blender Python installation used here can also regenerate it:

```sh
.tools/blender-env/bin/python scripts/create-kitting-cell.py
npm run build
```

For a new environment, `uv venv --python 3.11 .tools/blender-env` followed by `uv pip install --python .tools/blender-env/bin/python bpy==4.5.12` installs the authoring dependency. `.tools/` is ignored. Ordinary builds use the committed asset and do not install Blender. The authoring script recreates the scene; preserve manual `.blend` edits separately before rerunning it.

The finished standalone HTML is approximately 16 MB. A cell instance is created once and hidden/reused across resets to avoid repeatedly rebuilding the static meshes. The former workbench is hidden only in the cell preset; it remains available for legacy scenes.

## Physics and experiment boundaries

The worktop's upper surface remains at y=0 and retains the existing 2.8×1.85 m flat-table collision model. Bins, gantry, drawer cabinet, buttons, and staging fixture are **visual-only**. The central manipulation area remains open; this implementation does not simulate picking from the supply bins or placing into the side staging tray. “Pack a parts kit” still uses the existing three task objects and goal positions on the bench. The Scene panel states the visual-fixture limitation.

No environment mechanics, collision proxies, servos, IK, reward/end criteria, or Panda reach-controller logic were changed. Cell exposure is fixed at 0.88 for both the main and capture renderers. The shadow frustum/bias is tuned for the cell; legacy settings are restored when leaving it. Capture still hides path/ghost overlays, and the memory/evaluator interfaces remain separated.

## Validation

- `npm test` retains original-module comparisons for simulation, memory, export, and models. Existing composition-root functions and the complete CEM section are still compared; the deliberately changed scene builder has dedicated checks.
- `npm run test:browser` explicitly selects the legacy lab and verifies original/build transitions, RGB exports, memory, and replay still match.
- `npm run test:kitting` checks the new default, all four robot choices, identical lab/cell physics traces, identical public query observations for different hidden covered-bin conditions, local-only loading, and RGB export. It also saves `test-results/kitting-cell.png` and reports a short render-timing sample.
- `npm run test:kitting:dataset` independently decodes the camera PNGs and checks pixel-identical captures with path/ghost controls off/on, SO-101 dimensions, and scene metadata.
- The nominal SO-101 three-block kit fixture, seed 1, completed successfully in 1,176 control steps with mean goal error about 1.59 mm. This verifies one existing expert rollout, not general reliability across objects or seeds.

The initial timing sample used forced SwiftShader and concurrent browser checks and was slow (30 rendered frames in about 8.9 seconds). That is not a hardware-GPU performance estimate. The hardware-backed check used ANGLE Metal on Apple M5 Pro: 30 frames in 496 ms (about 60 FPS). Run `ARMATURE_GPU=1 npm run test:kitting` to use the default backend instead of forced software rendering. The backend and timing are recorded in `test-results/kitting-cell.json`; this short sample measures main-view renders, not sustained recording or stress-sweep throughput. No 60 FPS guarantee is made.

## V28 migration note

The original Blender scenery remains mostly visual-only. V28 adds a simulated work-light switch and separately authored collidable fixtures/objects. See [v28-migration.md](v28-migration.md) for the distinction and current validation; earlier screenshots and timing samples in this document describe the pre-V28 build.
