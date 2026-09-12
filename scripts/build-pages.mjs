import { mkdir, copyFile } from "node:fs/promises";
await mkdir("_site", { recursive: true });
await copyFile("dist/robotics-arm-studio.html", "_site/index.html");
console.log("GitHub Pages artifact: _site/index.html (self-contained)");
