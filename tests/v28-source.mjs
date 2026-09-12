import assert from "node:assert/strict";
import fs from "node:fs/promises";
import crypto from "node:crypto";
import { parse } from "acorn";
import { canonical } from "../scripts/semantic.mjs";
const hash = (s) => crypto.createHash("sha256").update(s).digest("hex");
const manifest = JSON.parse(
  await fs.readFile("docs/v28-extraction-manifest.json", "utf8"),
);
const html = await fs.readFile(manifest.source, "utf8");
assert.equal(hash(html), manifest.sha256, "V28 input remains unchanged");
const legacy = JSON.parse(
  await fs.readFile("docs/extraction-manifest.json", "utf8"),
);
assert.equal(
  hash(await fs.readFile(legacy.source, "utf8")),
  legacy.sha256,
  "Original input remains unchanged",
);
const script = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)],
  code = script[2][2];
const outer = parse(code, { ecmaVersion: "latest" }).body[0].expression.callee
    .body.body,
  core = outer.at(-1).expression.callee.body.body;
const names = JSON.parse(await fs.readFile("scripts/v28-names.json", "utf8"));
const reverse = Object.fromEntries(
  Object.values(names).flatMap((map) =>
    Object.entries(map).map(([old, current]) => [current, old]),
  ),
);
function expected(g) {
  const ns = g.scope === "outer" ? outer : core;
  let source = g.ranges
    .map(([a, b]) => code.slice(ns[a].start, ns[b - 1].end))
    .join("\n");
  for (const [index, name, file] of [
    [30, "Qe", "src/robots/models.js"],
    [81, "to", "src/simulation/objects.js"],
  ]) {
    const node = core[index],
      d = node.declarations.find((d) => d.id.name === name);
    if (g.file === "vendor/cannon-es.js")
      source = source.replace(
        code.slice(node.start, node.end),
        "var " +
          node.declarations
            .filter((n) => n !== d)
            .map((n) => code.slice(n.start, n.end))
            .join(",") +
          ";",
      );
    if (g.file === file)
      source = "var " + code.slice(d.start, d.end) + ";\n" + source;
  }
  const edits = [];
  for (const n of parse(source, { ecmaVersion: "latest" }).body)
    if (n.type === "VariableDeclaration")
      for (const d of n.declarations)
        if (
          d.init?.type === "Literal" &&
          typeof d.init.value === "string" &&
          d.init.value.length > 10000
        )
          edits.push([d.init.start, d.init.end, "__asset_" + d.id.name]);
  for (const [a, b, s] of edits.sort((a, b) => b[0] - a[0]))
    source = source.slice(0, a) + s + source.slice(b);
  return source;
}
const intentional = new Set([
  "src/main.js",
  "src/simulation/environment.js",
  "src/export/lerobot.js",
  "src/ui/studio-tabs.js",
  "src/sensors/depth.js",
  "src/teleop/phone.js",
]);
for (const g of manifest.groups) {
  const current = await fs.readFile(g.file, "utf8"),
    before = expected(g);
  if (!intentional.has(g.file))
    assert.equal(
      hash(canonical(current, reverse)),
      hash(canonical(before)),
      g.file + " preserves V28 behavior",
    );
}
// Check unchanged functions in the patched modules, including the complete reach controller/search.
for (const file of intentional) {
  const g = manifest.groups.find((g) => g.file === file),
    before = expected(g),
    after = await fs.readFile(file, "utf8");
  const a = parse(before, { ecmaVersion: "latest" }).body,
    b = parse(after, { ecmaVersion: "latest", sourceType: "module" }).body;
  const changed = new Set([
    "resetScene",
    "readSceneConfig",
    "advanceControl",
    "stepAndRecord",
    "startReplay",
    "showReplayFrame",
    "toggleRecording",
    "rebuildTaskVisuals",
    "animate",
    "initializeStudioTabs",
    "createDatasetFiles",
    "createDepthSensor",
    "createPhonePairing",
    "buildJointControls",
    "applyPrompt",
    "updateReplayStatus",
  ]);
  for (const n of a.filter((n) => n.type === "FunctionDeclaration")) {
    const name = names[file]?.[n.id.name] || n.id.name;
    if (changed.has(name)) continue;
    const m = b.find(
      (n) => n.type === "FunctionDeclaration" && n.id.name === name,
    );
    assert(m, name);
    assert.equal(
      hash(canonical(after.slice(m.start, m.end), reverse)),
      hash(canonical(before.slice(n.start, n.end))),
      file + ": " + name,
    );
  }
}
function training(source) {
  const ast = parse(source, { ecmaVersion: "latest", sourceType: "module" });
  let found;
  function walk(n) {
    if (!n || typeof n !== "object") return;
    if (
      n.type === "AssignmentExpression" &&
      n.right?.type === "ArrowFunctionExpression" &&
      source.slice(n.left.start, n.left.end).includes('("train").onclick')
    )
      found = source.slice(n.right.start, n.right.end);
    for (const [k, v] of Object.entries(n))
      if (!["start", "end"].includes(k)) {
        if (Array.isArray(v)) v.forEach(walk);
        else walk(v);
      }
  }
  walk(ast);
  assert(found, "training handler found");
  return "(" + found + ")";
}
const current = await fs.readFile("src/main.js", "utf8");
const originalMain = expected(
  manifest.groups.find((g) => g.file === "src/main.js"),
);
assert.equal(
  hash(canonical(training(current), reverse)),
  hash(canonical(training(originalMain))),
  "V28 CEM training untouched",
);
assert.equal(await fs.readFile("vendor/three.min.js", "utf8"), script[1][2]);
assert.equal(
  await fs.readFile("assets/third-party-notices.json", "utf8"),
  script[0][2],
);
console.log(
  "PASS: input hashes, 28 complete modules, unchanged helpers and CEM search retain V28 semantics.",
);
// Catch minified bindings accidentally omitted at extraction boundaries.
const { analyze } = await import("eslint-scope");
const browserGlobals = new Set([
  "THREE",
  "document",
  "window",
  "devicePixelRatio",
  "requestAnimationFrame",
  "ResizeObserver",
  "MutationObserver",
  "Worker",
  "Image",
  "FileReader",
  "RTCPeerConnection",
  "navigator",
  "location",
  "localStorage",
  "sessionStorage",
  "self",
  "HTMLCanvasElement",
  "HTMLImageElement",
  "ImageBitmap",
  "OffscreenCanvas",
  "ProgressEvent",
  "ImageData",
  "XMLHttpRequest",
  "createImageBitmap",
  "__THREE_DEVTOOLS__",
  "WebGLRenderingContext",
  "WebGL2RenderingContext",
  "DOMParser",
  "XRWebGLLayer",
  "XRWebGLBinding",
]);
for (const file of (await fs.readdir("src", { recursive: true })).filter(
  (file) => file.endsWith(".js"),
)) {
  const source = await fs.readFile("src/" + file, "utf8");
  const scope = analyze(
    parse(source, {
      ecmaVersion: "latest",
      sourceType: "module",
      ranges: true,
    }),
    { ecmaVersion: 2024, sourceType: "module", optimistic: true },
  );
  const unknown = [
    ...new Set(scope.globalScope.through.map((r) => r.identifier.name)),
  ].filter((name) => !(name in globalThis) && !browserGlobals.has(name));
  assert.deepEqual(unknown, [], file + ": no missing module bindings");
}
console.log("PASS: no unresolved application bindings.");
