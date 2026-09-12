import assert from "node:assert/strict";
import { MemoryProtocol } from "../src/memory/protocol.js";
for (const task of ["recall", "covered", "sequence", "revision"]) {
  const atChoice = [];
  for (
    let condition = 0;
    condition < (task === "sequence" ? 6 : 3);
    condition++
  ) {
    const trial = new MemoryProtocol({
      task,
      condition,
      seed: 42,
      layoutSeed: 7,
      delay: 3,
      controller: "history",
    });
    assert.throws(() => trial.choose(0), /Wait/);
    while (trial.phase !== "choose") trial.advance();
    atChoice.push(trial.observe());
    assert.equal(trial.report(), null);
    assert.throws(() => trial.choose(3), /available/);
    while (trial.phase !== "complete") {
      if (trial.phase === "choose") {
        trial.choose(trial.baselineChoice());
        trial.placed(true, 0.001);
      } else trial.advance();
    }
    assert.equal(trial.report().success, true);
    const report = trial.report();
    assert.equal(report.correctChoices, task === "sequence" ? 3 : 1);
  }
  for (const current of atChoice)
    assert.deepEqual(
      current,
      atChoice[0],
      `${task}: distinct hidden histories must have identical current query input`,
    );
  const revision = new MemoryProtocol({
    task: "revision",
    condition: 2,
    delay: 3,
    controller: "stale",
  });
  while (revision.phase !== "choose") revision.advance();
  revision.choose(revision.baselineChoice());
  revision.placed(true, 0.001);
  assert.equal(revision.report().memorySuccess, false);
  assert.equal(revision.report().physicalSuccess, true);
  console.log(
    "PASS:",
    task,
    "hidden-history ambiguity, phase guards and history baseline",
  );
}
const interrupted = new MemoryProtocol();
interrupted.abort("test");
assert.equal(interrupted.report().completed, false);
console.log(
  "PASS: memory and physical scores remain separate; interrupted trials remain incomplete.",
);
