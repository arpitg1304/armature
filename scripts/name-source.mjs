import fs from "node:fs/promises";
import { parse } from "acorn";
import { analyze } from "eslint-scope";
const names = JSON.parse(await fs.readFile("scripts/names.json", "utf8"));
const files = await fs.readdir("src", { recursive: true });
for (const relative of files.filter((f) => f.endsWith(".js"))) {
  const file = "src/" + relative,
    source = await fs.readFile(file, "utf8");
  const ast = parse(source, {
    ecmaVersion: "latest",
    sourceType: "module",
    ranges: true,
  });
  const scope = analyze(ast, {
    ecmaVersion: 2024,
    sourceType: "module",
    optimistic: true,
  }).scopes.find((s) => s.type === "module");
  const edits = new Map();
  const add = (node) => {
    if (names[node.name])
      edits.set(node.start, { end: node.end, text: names[node.name] });
  };
  for (const variable of scope.variables)
    if (names[variable.name]) {
      variable.identifiers.forEach(add);
      variable.references.forEach((r) => add(r.identifier));
    }
  for (const node of ast.body) {
    if (node.type === "ExportNamedDeclaration")
      for (const spec of node.specifiers) {
        add(spec.local);
        add(spec.exported);
      }
    if (
      node.type === "ImportDeclaration" &&
      !node.source.value.includes("vendor/")
    )
      for (const spec of node.specifiers) if (spec.imported) add(spec.imported);
  }
  let result = source;
  for (const [start, { end, text }] of [...edits].sort((a, b) => b[0] - a[0]))
    result = result.slice(0, start) + text + result.slice(end);
  await fs.writeFile(file, result);
}
