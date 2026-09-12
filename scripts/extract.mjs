// One-time, provenance-preserving recovery from the supplied artifact.
// Normal builds use src/; this script refuses to overwrite an existing extraction.
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { parse } from "acorn";
import { analyze } from "eslint-scope";
import { format } from "prettier";
const original = await fs.readFile("robotics-arm-studio.html", "utf8");
try {
  await fs.access("src/main.js");
  throw new Error("Extraction already exists; do not overwrite edited source.");
} catch (e) {
  if (e.code !== "ENOENT") throw e;
}
const scripts = [
  ...original.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g),
];
const code = scripts[2][2];
const ast = parse(code, { ecmaVersion: "latest", ranges: true });
const statements = ast.body[0].expression.callee.body.body;
const worker = statements[107].declarations[0].init.value;
const groups = [
  ["src/ui/tabs.js", 0, 2],
  ["src/memory/protocol.js", 2, 4],
  ["src/memory/lab.js", 4, 5],
  ["vendor/cannon-es.js", 5, 103],
  ["src/simulation/objects.js", 103, 107],
  ["vendor/fflate.js", 108, 136],
  ["src/robots/models.js", 140, 148],
  ["src/robots/visuals.js", 148, 149],
  ["src/robots/urdf.js", 149, 151],
  ["src/simulation/environment.js", 151, 154],
  ["src/stress/lab.js", 154, 157],
  ["vendor/parquet.js", 157, 302],
  ["src/export/lerobot.js", 302, 309],
  ["src/main.js", 309, 438],
];
const assets = ["panda", "so101", "ur5e", "xarm6"];
for (let i = 0; i < 4; i++) {
  await fs.writeFile(
    `assets/${assets[i]}.json.gz.b64`,
    statements[136 + i].declarations[0].init.value,
  );
}
const special = {
  ui: "assets/panda.json.gz.b64",
  ai: "assets/so101.json.gz.b64",
  bi: "assets/ur5e.json.gz.b64",
  oi: "assets/xarm6.json.gz.b64",
  Vr: "src/stress/worker-source.js",
};
const chunks = groups.map(([file, start, end]) => ({
  file,
  code: code.slice(statements[start].start, statements[end - 1].end),
}));
const owners = new Map(Object.entries(special));
function scopeFor(code) {
  return analyze(
    parse(code, { ecmaVersion: "latest", sourceType: "module", ranges: true }),
    { ecmaVersion: 2024, sourceType: "module", optimistic: true },
  ).scopes.find((s) => s.type === "module");
}
for (const chunk of chunks) {
  chunk.scope = scopeFor(chunk.code);
  for (const variable of chunk.scope.variables)
    owners.set(variable.name, chunk.file);
}
const exports = new Map();
for (const chunk of chunks) {
  const imports = new Map();
  for (const ref of chunk.scope.through) {
    const name = ref.identifier.name,
      owner = owners.get(name);
    if (!owner || owner === chunk.file) continue;
    if (ref.isWrite())
      throw new Error(`Cross-module mutation ${name} in ${chunk.file}`);
    if (!imports.has(owner)) imports.set(owner, new Set());
    imports.get(owner).add(name);
    if (!exports.has(owner)) exports.set(owner, new Set());
    exports.get(owner).add(name);
  }
  chunk.imports = imports;
}
for (const chunk of chunks) {
  let pre = "";
  for (const [owner, names] of chunk.imports) {
    let rel = path.relative(path.dirname(chunk.file), owner);
    if (!rel.startsWith(".")) rel = "./" + rel;
    if (owner.endsWith("worker-source.js")) rel = "armature:stress-worker";
    pre +=
      owner.endsWith(".b64") || owner.endsWith("worker-source.js")
        ? `import ${[...names][0]} from ${JSON.stringify(rel)};\n`
        : `import {${[...names].join(",")}} from ${JSON.stringify(rel)};\n`;
  }
  let result =
    pre +
    chunk.code +
    "\n" +
    (exports.has(chunk.file)
      ? `export {${[...exports.get(chunk.file)].join(",")}};\n`
      : "");
  if (!chunk.file.startsWith("vendor/"))
    result = await format(result, { parser: "babel" });
  await fs.mkdir(path.dirname(chunk.file), { recursive: true });
  await fs.writeFile(chunk.file, result);
}
await fs.writeFile("vendor/three.min.js", scripts[1][2]);
await fs.writeFile("assets/third-party-notices.json", scripts[0][2]);
const css = original.match(/<style>([\s\S]*?)<\/style>/)[1];
await fs.writeFile("src/styles.css", await format(css, { parser: "css" }));
let template = original.replace(
  /<style>[\s\S]*?<\/style>/,
  "<style>/* ARMATURE_STYLES */</style>",
);
for (let i = 0; i < scripts.length; i++)
  template = template.replace(
    scripts[i][0],
    [
      '<script type="application/json" id="third-party-notices">ARMATURE_NOTICES</script>',
      "<script>/* ARMATURE_THREE */</script>",
      "<script>/* ARMATURE_APP */</script>",
    ][i],
  );
await fs.writeFile(
  "src/index.html",
  await format(template, { parser: "html" }),
);
await fs.writeFile(
  "docs/extraction-manifest.json",
  JSON.stringify(
    {
      source: "robotics-arm-studio.html",
      sha256: crypto.createHash("sha256").update(original).digest("hex"),
      groups: groups.map(([file, start, end]) => ({
        file,
        firstStatement: start,
        lastStatement: end - 1,
      })),
      assets,
      workerSha256: crypto.createHash("sha256").update(worker).digest("hex"),
    },
    null,
    2,
  ) + "\n",
);
console.log(
  "Extracted modules, styles, template, assets and notices. Run recover-worker.mjs next to recover the shared worker entry.",
);
