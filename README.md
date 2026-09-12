# ARMATURE

A standalone browser robotics authoring and experiment prototype, migrated from `armature-studio-v28.html`. Includes four robots, a Blender kitting cell, scene/task authoring, static object imports, demonstration recording/review, configurable RGB cameras, synthetic depth/instances, lighting, trial sweeps, and stress testing. Memory tasks are hidden by default; research mode is available by appending `?memory=1` to the page URL.

Default robot motion uses velocity-limited kinematic servos and approximate collision proxies. V28 also includes a separately selected, unvalidated Panda constraint-dynamics experiment. Neither mode establishes MuJoCo-level fidelity or sim-to-real validity.

```sh
npm ci
npm run build
```

Open **`dist/robotics-arm-studio.html`** in a WebGL-capable browser. Edit `src/`, then rebuild; do not edit generated HTML. Both supplied HTML artifacts remain unchanged. Node 22+ is required for development.

The generated page embeds its scripts, worker, styles, models, scenery and notices. Simulation, authoring and local recording work offline. GitHub Actions tests and builds a single `index.html`, then publishes it to GitHub Pages on pushes to `main`. See [deployment instructions](docs/deployment.md). **Phone pairing requires a separate `/api/phone` service and phone client; those are not included and static hosting alone does not provide them.**

- [V28 migration, provenance and feature limitations](docs/v28-migration.md)
- [Architecture and policy/evaluator boundaries](docs/architecture.md)
- [Validation procedures and measured results](docs/validation.md)
- [Blender kitting cell](docs/kitting-cell.md)
- [Proposed future research improvements](docs/next-improvements.md)

```sh
npm test                 # source parity, protocols, input/export helpers, physics
npm run test:browser     # local Chrome: V28 comparison, authoring, sensors, recording, memory
npm run test:stress-ui   # worker sweep, export and inspection
```

Independent Parquet/PNG/sensor validation requires an optional Python environment:

```sh
python3 -m venv .venv-validation
.venv-validation/bin/python -m pip install -r tests/requirements-validation.txt
npm run test:dataset     # after test:browser creates the exports
```

Browser tests use temporary profiles, not your existing browser profile. `test-results/` and `dist/` are generated locally. Stock LeRobot loading/training and real-robot transfer remain unverified. Privileged reports/object poses must not be passed wholesale to policies.

The experimental Panda reach-controller/CEM code remains unchanged. A workshop evaluation runner and policy-inference bridge are still proposed future work, not features of this migration. Third-party licenses remain applicable; package `UNLICENSED` does not replace them.
