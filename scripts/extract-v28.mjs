/** One-time v28 recovery. Refuses to overwrite a completed migration; builds use src/. */
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { parse } from "acorn";
import { analyze } from "eslint-scope";
import { format } from "prettier";
const manifestPath = "docs/v28-extraction-manifest.json";
try {
  await fs.access(manifestPath);
  throw Error("V28 already extracted; edit src/ instead.");
} catch (e) {
  if (e.code !== "ENOENT") throw e;
}
const html = await fs.readFile("armature-studio-v28.html", "utf8");
const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)];
const code = scripts[2][2],
  outer = parse(code, { ecmaVersion: "latest", ranges: true }).body[0]
    .expression.callee.body.body;
const core = outer.at(-1).expression.callee.body.body;
const groups = [];
function group(file, scope, ranges) {
  const nodes = scope === "outer" ? outer : core;
  groups.push({
    file,
    scope,
    ranges,
    code: ranges
      .map(([a, b]) => code.slice(nodes[a].start, nodes[b - 1].end))
      .join("\n"),
  });
}
group("vendor/three-addons.js", "outer", [
  [0, 301],
  [308, 309],
]);
group("src/authoring/import-assets.js", "outer", [[301, 307]]);
group("src/authoring/import-dialog.js", "outer", [
  [307, 308],
  [309, 311],
]);
group("src/authoring/skills.js", "outer", [
  [311, 315],
  [320, 331],
]);
group("src/scenes/lighting.js", "outer", [[315, 320]]);
group("src/authoring/project.js", "outer", [
  [331, 346],
  [348, 349],
]);
group("src/authoring/task-runner.js", "outer", [[346, 348]]);
group("src/authoring/builder.js", "outer", [[349, 351]]);
group("vendor/qrcode.js", "outer", [[351, 355]]);
group("src/teleop/phone.js", "outer", [[355, 361]]);
group("vendor/fflate-sensors.js", "outer", [[361, 388]]);
group("src/export/demonstrations.js", "outer", [[388, 394]]);
group("src/teleop/demonstrations.js", "outer", [[394, 396]]);
group("src/experiments/config.js", "outer", [[396, 397]]);
group("src/sensors/depth.js", "outer", [[397, 406]]);
group("src/sensors/cameras.js", "outer", [[406, 409]]);
group("src/simulation/panda-inertias.js", "outer", [[409, 412]]);
group("vendor/cannon-dynamics.js", "outer", [[412, 506]]);
group("src/simulation/panda-dynamics.js", "outer", [[506, 508]]);
group("src/experiments/randomized.js", "outer", [[508, 511]]);
group("src/experiments/trials.js", "outer", [[511, 514]]);
group("vendor/fflate.js", "core", [[0, 24]]);
group("src/robots/models.js", "core", [[24, 30]]);
group("vendor/cannon-es.js", "core", [[30, 82]]);
group("src/simulation/objects.js", "core", [[82, 85]]);
group("src/simulation/environment.js", "core", [[85, 89]]);
group("src/robots/visuals.js", "core", [[89, 90]]);
group("vendor/parquet.js", "core", [[90, 235]]);
group("src/robots/urdf.js", "core", [[235, 237]]);
group("src/export/lerobot.js", "core", [[237, 244]]);
group("src/ui/studio-tabs.js", "core", [[244, 246]]);
group("src/stress/lab.js", "core", [[247, 249]]);
group("src/scenes/kitting-cell.js", "core", [[250, 251]]);
group("src/main.js", "core", [[251, 334]]);
// Move the model lookup and object catalog out of the adjacent Cannon bundle.
const cannon = groups.find((g) => g.file === "vendor/cannon-es.js");
for (const [statement, name, target] of [
  [30, "Qe", "src/robots/models.js"],
  [81, "to", "src/simulation/objects.js"],
]) {
  const node = core[statement],
    d = node.declarations.find((d) => d.id.name === name);
  const replacement =
    "var " +
    node.declarations
      .filter((x) => x !== d)
      .map((x) => code.slice(x.start, x.end))
      .join(",") +
    ";";
  cannon.code = cannon.code.replace(
    code.slice(node.start, node.end),
    replacement,
  );
  const dest = groups.find((g) => g.file === target);
  dest.code = "var " + code.slice(d.start, d.end) + ";\n" + dest.code;
}
const owners = { outer: new Map(), core: new Map() },
  special = new Map();
const assetFiles = {
  Be: "assets/panda.json.gz.b64",
  ut: "assets/so101.json.gz.b64",
  Pt: "assets/ur5e.json.gz.b64",
  yt: "assets/xarm6.json.gz.b64",
};
function moduleScope(source) {
  return analyze(
    parse(source, {
      ecmaVersion: "latest",
      sourceType: "module",
      ranges: true,
    }),
    { ecmaVersion: 2024, sourceType: "module", optimistic: true },
  ).scopes.find((s) => s.type === "module");
}
// Extract all large static strings (including the supplied frozen stress worker).
for (const g of groups) {
  const ast = parse(g.code, { ecmaVersion: "latest" }),
    edits = [];
  for (const n of ast.body)
    if (n.type === "VariableDeclaration")
      for (const d of n.declarations) {
        if (
          d.init?.type === "Literal" &&
          typeof d.init.value === "string" &&
          d.init.value.length > 10000
        ) {
          const file =
            assetFiles[d.id.name] ||
            `assets/${d.id.name === "f7" ? "object-pack.zip" : d.id.name}.b64`;
          await fs.writeFile(file, d.init.value);
          special.set(g.scope + ":" + d.id.name, file);
          edits.push([d.init.start, d.init.end, `__asset_${d.id.name}`]);
        }
      }
  for (const [a, b, v] of edits.sort((a, b) => b[0] - a[0]))
    g.code = g.code.slice(0, a) + v + g.code.slice(b);
}
// The worker declaration also carries the stress report identifier.
await fs.writeFile(
  "src/stress/skill.js",
  "export const STRESS_SKILL_ID = " +
    JSON.stringify(core[246].declarations[1].init.value) +
    ";\nexport { STRESS_SKILL_ID as Rx };\n",
);
special.set("core:Rx", "src/stress/skill.js");
const worker = core[246].declarations[0].init.quasis[0].value.cooked;
await fs.writeFile("src/stress/v28-worker.js.txt", worker);
special.set("core:w2", "src/stress/v28-worker.js.txt");
await fs.writeFile(
  "assets/scenes/kitting-cell.json.gz.b64",
  core[249].declarations[0].init.value,
);
special.set("core:Cx", "assets/scenes/kitting-cell.json.gz.b64");
for (const g of groups) {
  g.bindings = moduleScope(g.code);
  for (const v of g.bindings.variables) owners[g.scope].set(v.name, g.file);
}
const exports = new Map();
for (const g of groups) {
  g.imports = new Map();
  for (const ref of g.bindings.through) {
    const name = ref.identifier.name,
      assetName = name.startsWith("__asset_") ? name.slice(8) : name;
    const owner =
      special.get(g.scope + ":" + assetName) ||
      owners[g.scope].get(name) ||
      (g.scope === "core" ? owners.outer.get(name) : null);
    if (!owner || owner === g.file) continue;
    if (ref.isWrite())
      throw Error("Cross-module mutation " + g.file + " " + name);
    if (!g.imports.has(owner)) g.imports.set(owner, new Set());
    g.imports.get(owner).add(name);
    if (!exports.has(owner)) exports.set(owner, new Set());
    exports.get(owner).add(name);
  }
}
for (const g of groups) {
  let pre = "";
  for (const [owner, names] of g.imports) {
    let rel = path.relative(path.dirname(g.file), owner);
    if (!rel.startsWith(".")) rel = "./" + rel;
    pre +=
      owner.endsWith(".b64") || owner.endsWith(".txt")
        ? `import ${[...names][0]} from ${JSON.stringify(rel)};\n`
        : `import {${[...names]}} from ${JSON.stringify(rel)};\n`;
  }
  let result =
    pre +
    g.code +
    "\n" +
    (exports.has(g.file) ? `export {${[...exports.get(g.file)]}};\n` : "");
  if (!g.file.startsWith("vendor/"))
    result = await format(result, { parser: "babel" });
  await fs.mkdir(path.dirname(g.file), { recursive: true });
  await fs.writeFile(g.file, result);
}
await fs.writeFile("vendor/three.min.js", scripts[1][2]);
await fs.writeFile("assets/third-party-notices.json", scripts[0][2]);
await fs.writeFile(
  "vendor/v28-bundle-LICENSE.txt",
  code.slice(outer.at(-1).end + 5),
);
const css = [...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/g)];
let template = html;
for (const [i, m] of css.entries())
  template = template.replace(
    m[0],
    i === 0 ? "<style>/* ARMATURE_STYLES */</style>" : "",
  );
for (const [i, m] of scripts.entries())
  template = template.replace(
    m[0],
    [
      '<script type="application/json" id="third-party-notices">ARMATURE_NOTICES</script>',
      "<script>/* ARMATURE_THREE */</script>",
      "<script>/* ARMATURE_APP */</script>",
    ][i],
  );
await fs.writeFile(
  "src/styles.css",
  await format(css.map((m) => m[1]).join("\n"), { parser: "css" }),
);
await fs.writeFile(
  "src/index.html",
  await format(template, { parser: "html" }),
);
await fs.writeFile(
  manifestPath,
  JSON.stringify(
    {
      source: "armature-studio-v28.html",
      sha256: crypto.createHash("sha256").update(html).digest("hex"),
      groups: groups.map(({ file, scope, ranges }) => ({
        file,
        scope,
        ranges,
      })),
      workerSha256: crypto.createHash("sha256").update(worker).digest("hex"),
    },
    null,
    2,
  ) + "\n",
);
console.log(
  "Extracted",
  groups.length,
  "modules; original v28 left unchanged.",
);
