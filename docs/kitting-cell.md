# Blender-built kitting cell

The default scene is **Kitting cell / Franka Panda / Pack a parts kit**. Use the Scene dropdown to return to the lab or other presets. All four robot choices remain available.

The cell has a beveled laminate worktop, aluminum frame with extrusion slots and mounting hardware, drawers, an ESD work area, a perforated rear panel, four labeled supply bins with spare components, task-light housing, procedure signage, a side staging tray, and an emergency-stop prop. The procedure signage and bin labels are fixed environmental markings and never depend on memory answers or evaluator state. The emergency-stop prop is decorative, not an interactive safety control.

The current implementation improves environmental detail. It uses bundled robot meshes and configurable camera capture; it is not a claim of photorealism or calibrated sensor simulation.

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

The finished standalone HTML is approximately 19 MB. A cell instance is created once and hidden/reused across resets to avoid repeatedly rebuilding the static meshes. The lab workbench is hidden only in the cell preset; it remains available for other scenes.

## Physics and experiment boundaries

The worktop's upper surface remains at y=0 and retains the existing 2.8×1.85 m flat-table collision model. Bins, gantry, drawer cabinet, buttons, and staging fixture are **visual-only**. The central manipulation area remains open; this implementation does not simulate picking from the supply bins or placing into the side staging tray. “Pack a parts kit” still uses the existing three task objects and goal positions on the bench. The Scene panel states the visual-fixture limitation.

Cell exposure is fixed at 0.88 for both the main and capture renderers. The shadow frustum/bias is tuned for the cell; lab settings are restored when leaving it. Capture still hides path/ghost overlays, and the memory/evaluator interfaces remain separated.

Authored fixtures and task objects have their own collision geometry. A separate lighting task includes a simulated work-light switch. These do not make every decorative fixture interactive.

## Validation

`npm test` includes a nominal SO-101 three-part kit and measured UR5e authored placement checks. `npm run test:browser` exercises all four robots, camera capture and recording; `npm run test:dataset` independently checks the exported images and sensor data.

The nominal SO-101 fixture has completed in 1,176 control steps with approximately 1.59 mm mean final goal distance. This is one scripted rollout, not a reliability estimate across arbitrary objects or seeds. See [validation](validation.md) for the full test scope.
