import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { parse } from "acorn";
import { analyze } from "eslint-scope";
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
  "Option",
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
