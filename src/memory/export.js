/** Public pre-action cues and privileged evaluator reports remain separate files. */
export function addMemorySidecars(n, u, O) {
  const xe = (text) => new TextEncoder().encode(text);
  const p = (value) => xe(JSON.stringify(value, null, 2));
  if (n.some((X) => X.memoryProtocol || X.frames.some((x) => x._memory))) {
    let X = u
      .filter((x) => x._memory)
      .map((x) => ({
        episode_index: x.episode_index,
        frame_index: x.frame_index,
        timestamp: x.timestamp,
        observation: x._memory,
      }));
    ((O["memory/public_frames.jsonl"] = xe(
      X.map((x) => JSON.stringify(x)).join(`
`),
    )),
      (O["memory/public_events.jsonl"] = xe(
        n.flatMap((x, y) =>
          (x.memoryEvaluation?.events || []).map((z) =>
            JSON.stringify({ episode_index: y, ...z }),
          ),
        ).join(`
`),
      )),
      (O["memory/evaluator.json"] = p({
        privileged: !0,
        warning:
          "Exclude this file from policy inputs. Contains hidden history conditions, target answers and correctness labels.",
        trials: n
          .map((x, y) =>
            x.memoryProtocol
              ? {
                  episode_index: y,
                  part_names: x.memoryNames,
                  report: x.memoryEvaluation || {
                    completed: !1,
                    reason: x.termination,
                  },
                }
              : null,
          )
          .filter(Boolean),
      })),
      (O["memory/README.md"] = xe(
        "Memory protocol: instruction and distraction events are a separate public language channel, not burned into RGB. Join public_frames.jsonl to LeRobot data by episode_index and frame_index; the stock LeRobot loader does not ingest sidecars automatically. public_frames.jsonl aligns the current cue, phase and completed choices to the pre-action episode/frame index. Cue contents disappear from current input after study; retrieve previous frames/events only when the experimental condition allows memory. evaluator.json contains privileged answers and scoring; exclude it and meta/armature.json seeds from policy inputs. Legacy object poses are privileged. Low-level IK uses simulator object poses after a high-level choice; this evaluates scripted high-level memory, not end-to-end visual policy performance. Covered-bin occluders retract after choice commitment. Physical placement and choice correctness are separate metrics. If recording is interrupted or capped, the evaluator report may be incomplete.",
      )));
  }
}
