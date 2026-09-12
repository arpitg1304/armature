> V28 migration: these are future research proposals. V28 adds authoring, sensors and trial tools, but does not implement the controlled inference/evaluation bridge proposed here.

# Proposed next improvements

These are proposals for discussion, not implemented features. Priority follows the goal of useful memory research now and SO-101 experiments later. The Panda reach-controller experiment remains out of scope.

## 1. An explicit policy-input contract and memory dataset adapter

The protocol currently separates observations from reports, but callers can easily pass privileged legacy fields or future events to a policy. A small, versioned adapter would make correct experiments easier to write and audit.

Acceptance criteria:

- Define a versioned observation schema that whitelists proprioception, current RGB/cue, phase, and explicitly allowed history. Hidden conditions, seeds, object poses, evaluator answers, and correctness never enter policy inputs.
- Provide a Python adapter that joins memory sidecars by episode/frame index and enforces current-only, last-two-seconds, or full-past-history access. Future cues must be inaccessible through that adapter.
- Load a generated state-only memory dataset and an RGB dataset using a pinned, named LeRobot version; iterate every frame with correct action/state widths and timestamp alignment. Fail loudly on malformed joins or unsupported schema versions.
- Across all 15 history conditions (three each for recall/covered/revision, six for sequence), paired trials with identical physical layout have identical current query inputs before commitment. Include an RGB covered-bin test, not just JSON key checks.
- Regression fixtures contain an incorrect choice with successful placement and a correct choice with failed placement; evaluation retains both scores independently.

Recommended first feature. This strengthens the experiment boundary before adding policies or collecting larger datasets. It preserves legacy APIs for inspection with explicit privileged labeling.

## 2. A reproducible memory evaluation runner

Manual trials and scripted baselines are useful, but they do not yet constitute a controlled evaluation suite.

Acceptance criteria:

- A saved manifest specifies source/build hash, robot/model identity, task, independent history/layout seeds, balanced conditions, delay, controller/history budget, and episode limits.
- A headless batch runs the four protocols with full history, no history, finite-window, and stale-instruction baselines over balanced conditions and at least two delays.
- Produce per-trial results plus aggregate choice accuracy, physical placement rate, joint success, truncations, and sample counts. Report uncertainty and avoid counting interrupted/pending trials as ordinary failures.
- A repeated manifest reproduces public cue/action sequences and end reasons; numeric tolerances and browser/runtime versions are explicit. Repeatability claims stay scoped to tested runtimes.
- Interrupted batches resume from completed trial IDs without duplicating records or changing seed assignment. Training/evaluation history/layout seed sets are disjoint and recorded.

This would turn the current demonstration into a practical memory experiment workflow. It does not claim a validated benchmark or end-to-end visual manipulation.

## 3. An offline SO-101 calibration and experiment bridge

Current SO-101 actions are URDF radians. They cannot be sent directly as hardware servo commands.

Acceptance criteria:

- Define a versioned calibration file with joint order, units, sign, zero offsets, limits, jaw convention, and model/source identity. Missing or mismatched calibration is rejected.
- Verify forward/inverse conversion against recorded calibration fixtures and reject non-finite/out-of-range inputs. State/action metadata records the exact conversion used.
- Compare FK and TCP orientation at at least ten measured poses; report joint/TCP residuals and agree on acceptable error before calling the model calibrated. Do not assume simulated contact/friction matches hardware.
- Import a real recorded SO-101 trajectory into offline replay and export simulation trajectories through the explicit conversion adapter. Preserve timestamps and distinguish measured data from synthetic data.
- Keep the first implementation offline. Any later live actuation requires a separately discussed scope covering command-rate limits, stop behavior, and hardware validation.

This creates a measurable path toward real experiments without presenting the current simulator as a digital twin.
