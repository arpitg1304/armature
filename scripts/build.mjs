import fs from "node:fs/promises";
import { build } from "esbuild";
const three = await fs.readFile("vendor/three.min.js", "utf8");
const options = {
  bundle: true,
  write: false,
  format: "iife",
  target: "es2022",
  minify: false,
  legalComments: "inline",
  loader: { ".b64": "text" },
};
const worker = await build({
  ...options,
  entryPoints: ["src/stress/worker.js"],
});
const workerSource = three + "\n" + worker.outputFiles[0].text;
const app = await build({
  ...options,
  entryPoints: ["src/main.js"],
  plugins: [
    {
      name: "inline-worker",
      setup(b) {
        b.onResolve({ filter: /^armature:stress-worker$/ }, () => ({
          path: "armature-worker",
          namespace: "inline-worker",
        }));
        b.onLoad({ filter: /.*/, namespace: "inline-worker" }, () => ({
          contents: "export default " + JSON.stringify(workerSource),
          loader: "js",
        }));
      },
    },
  ],
});
const escapeScript = (s) => s.replace(/<\/script/gi, "<\\/script");
let html = await fs.readFile("src/index.html", "utf8");
const notices = {
  ARMATURE:
    "Copyright © 2026 Arpit Gupta. Licensed under GPL-3.0-only.\nSource: https://github.com/arpitg1304/armature\n\n" +
    (await fs.readFile("LICENSE", "utf8")),
  ...JSON.parse(await fs.readFile("assets/third-party-notices.json", "utf8")),
};
const replacements = {
  "/* ARMATURE_STYLES */":
    (await fs.readFile("src/styles.css", "utf8")) +
    "\n" +
    (await fs.readFile("src/ui/studio-polish.css", "utf8")),
  ARMATURE_NOTICES: JSON.stringify(notices),
  "/* ARMATURE_THREE */": three,
  "/* ARMATURE_APP */":
    app.outputFiles[0].text +
    "\n" +
    (await fs.readFile("vendor/bundle-LICENSE.txt", "utf8")),
};
for (const [marker, value] of Object.entries(replacements)) {
  if (html.split(marker).length !== 2)
    throw Error("Expected one build marker: " + marker);
  html = html.replace(marker, () =>
    marker.includes("STYLES") ? value : escapeScript(value),
  );
}
await fs.mkdir("dist", { recursive: true });
await fs.writeFile("dist/robotics-arm-studio.html", html);
console.log(
  `Built dist/robotics-arm-studio.html (${Buffer.byteLength(html).toLocaleString()} bytes); scripts, worker, styles, robot assets and notices are inline.`,
);
