import fs from "node:fs/promises";
import assert from "node:assert/strict";
import { parse } from "acorn";
import { format } from "prettier";
import { canonical } from "./semantic.mjs";
const original = await fs.readFile("robotics-arm-studio.html", "utf8");
const app = [
  ...original.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g),
][2][2];
const statements = parse(app, { ecmaVersion: "latest" }).body[0].expression
  .callee.body.body;
const worker = statements[107].declarations[0].init.value;
const nodes = parse(worker, { ecmaVersion: "latest" }).body[1].expression.callee
  .body.body;
const section = (start, end) =>
  worker.slice(nodes[start].start, nodes[end - 1].end);
assert.equal(
  canonical(await fs.readFile("src/simulation/environment.js", "utf8")),
  canonical(section(138, 141), {
    $e: "He",
    ge: "qn",
    X: "d",
    le: "lt",
    ie: "ft",
    S: "k",
    _: "Ve",
    e3: "Vn",
    t3: "Zc",
    ae: "Tt",
  }),
  "Worker environment must equal main environment",
);
assert.equal(
  canonical(await fs.readFile("src/robots/models.js", "utf8")),
  canonical(section(130, 138), {
    H3: "vi",
    h3: "ci",
    d3: "ui",
    O3: "ai",
    s3: "bi",
    z3: "oi",
  }),
  "Worker models must equal main models",
);
for (let i = 0; i < 4; i++)
  assert.equal(
    nodes[126 + i].declarations[0].init.value,
    statements[136 + i].declarations[0].init.value,
  );
await fs.writeFile(
  "src/stress/worker.js",
  await format(
    'import { it as Me } from "../simulation/environment.js";\n' +
      section(141, 149),
    { parser: "babel" },
  ),
);
console.log(
  "Worker environment, models, and assets verified equivalent; worker now imports shared simulation.",
);
