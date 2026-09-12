import { parse } from "acorn";
import { analyze } from "eslint-scope";
// Alpha-equivalence: ignore formatting and local binding spelling, not behavior.
export function canonical(source, externalNames = {}) {
  const ast = parse(source, {
    ecmaVersion: "latest",
    sourceType: "module",
    ranges: true,
  });
  ast.body = ast.body.filter(
    (n) => !["ImportDeclaration", "ExportNamedDeclaration"].includes(n.type),
  );
  const manager = analyze(ast, {
    ecmaVersion: 2024,
    sourceType: "module",
    optimistic: true,
  });
  for (const [i, scope] of manager.scopes.entries())
    for (const [j, variable] of scope.variables.entries()) {
      for (const node of new Set([
        ...variable.identifiers,
        ...variable.references.map((r) => r.identifier),
      ]))
        node.name = `binding_${i}_${j}`;
    }
  for (const reference of manager.globalScope.through) {
    const n = reference.identifier;
    n.name = externalNames[n.name] || n.name;
  }
  const clean = (value) => {
    if (Array.isArray(value)) return value.map(clean);
    if (value && typeof value === "object")
      return Object.fromEntries(
        Object.entries(value)
          .filter(([k]) => !["start", "end", "range", "raw"].includes(k))
          .map(([k, v]) => [k, clean(v)]),
      );
    return typeof value === "bigint" ? String(value) + "n" : value;
  };
  return JSON.stringify(clean(ast));
}
