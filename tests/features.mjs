import assert from "node:assert/strict";
import { validatePhonePacket, PhoneInputBuffer } from "../src/teleop/phone.js";
import {
  sliceDemonstration,
  defaultReview,
} from "../src/export/demonstrations.js";
import {
  sampleExperiment,
  validateExperimentSweep,
} from "../src/experiments/randomized.js";
import {
  parseImportedAsset,
  prepareImportedVisual,
  validateImportedCollision,
} from "../src/authoring/import-assets.js";
import { decodeSensorPixels } from "../src/sensors/depth.js";
let now = 1000;
const phone = new PhoneInputBuffer(() => now);
const packet = {
  seq: 1,
  echo: now,
  enabled: true,
  translation: [2, 0, 0],
  rotation: [0, 0, 0],
};
assert.equal(validatePhonePacket(packet).translation[0], 1);
phone.receive(packet);
assert.equal(phone.read().enabled, false, "requires release after connection");
phone.receive({ ...packet, seq: 2, enabled: false });
phone.receive({ ...packet, seq: 3 });
assert.equal(phone.read().enabled, true);
assert.equal(
  phone.receive({ ...packet, seq: 2 }),
  false,
  "reject out-of-order packets",
);
now += 451;
assert.equal(phone.read().enabled, false, "stale input stops motion");
assert.throws(() =>
  validatePhonePacket({ ...packet, translation: [NaN, 0, 0] }),
);
const source = {
  success: true,
  frames: Array.from({ length: 5 }, (_, i) => ({
    "next.done": i === 4,
    "next.success": i === 4,
    "next.terminated": i === 4,
    "next.truncated": false,
    action: [i],
  })),
};
const before = structuredClone(source);
const segment = sliceDemonstration(
  source,
  {
    ...defaultReview(source),
    start: 1,
    end: 3,
    label: "success",
    markers: [{ frame: 2 }],
  },
  "episode-1",
);
assert.deepEqual(source, before, "curation preserves raw recording");
assert.equal(segment.frames.at(-1)["next.truncated"], true);
assert.equal(
  segment.success,
  false,
  "human success label never overrides evaluator",
);
assert.equal(segment.curation.markers[0].segmentFrameIndex, 1);
assert.throws(() =>
  sliceDemonstration(source, { ...defaultReview(source), end: 99 }, "bad"),
);
const sweep = {
  count: 3,
  seed: 42,
  mass: [0.04, 0.12],
  friction: [0.4, 1],
  padFriction: [1, 2.8],
  placement: 0.02,
};
validateExperimentSweep(sweep);
assert.deepEqual(sampleExperiment(sweep, 2), sampleExperiment(sweep, 2));
assert.notDeepEqual(sampleExperiment(sweep, 1), sampleExperiment(sweep, 2));
assert.throws(() => validateExperimentSweep({ ...sweep, mass: [0.2, 0.1] }));
const obj = new TextEncoder().encode(
  "o fixture\nv 0 0 0\nv 1 0 0\nv 0 1 1\nf 1 2 3\n",
);
const imported = await parseImportedAsset(obj.buffer, "obj");
assert.equal(imported.triangles, 1);
const visual = prepareImportedVisual(imported, { up: "y", unit: "cm" });
assert(visual);
assert.throws(() =>
  validateImportedCollision({ collision: { kind: "concave" } }),
);
const decoded = decodeSensorPixels(
  new Uint8Array([0, 0, 0, 0, 255, 255, 254, 255]),
  new Uint8Array([0, 0, 0, 0, 0, 0, 100, 255]),
  1,
  2,
  8,
);
assert.equal(decoded.depth[0], 8, "metric far-plane depth and row flip");
assert(Number.isNaN(decoded.depth[1]));
assert.equal(decoded.ids[0], 100);
console.log(
  "PASS: phone release/staleness/order, immutable curation, deterministic sweeps, OBJ import, collision validation, depth units/row order.",
);
