import { Si, oh } from "../../vendor/fflate-sensors.js";
var dH = ["unreviewed", "success", "failure", "uncertain"];
function validateSegment(s, e, t) {
  if (!Number.isInteger(s) || !Number.isInteger(e) || s < 0 || e < s || e >= t)
    throw Error("Choose a valid inclusive frame range.");
  return { start: s, end: e };
}
function defaultReview(s) {
  return {
    included: !1,
    start: 0,
    end: s.frames.length - 1,
    label: "unreviewed",
    notes: "",
    markers: [],
  };
}
function sliceDemonstration(s, e, t) {
  if ((validateSegment(e.start, e.end, s.frames.length), !dH.includes(e.label)))
    throw Error("Unknown human label.");
  let n = s.frames.slice(e.start, e.end + 1).map((c, o) => ({
      ...c,
      _sourceFrameIndex: e.start + o,
      _sourceTimestamp: (e.start + o) / 30,
    })),
    r = e.end === s.frames.length - 1,
    i = n.at(-1);
  return (
    r ||
      ((i["next.done"] = !0),
      (i["next.truncated"] = !0),
      (i["next.terminated"] = !1),
      (i["next.success"] = !1)),
    {
      ...s,
      frames: n,
      success: r && !!s.success,
      termination: r ? s.termination : "Human-selected segment boundary",
      imageBytes: n.reduce(
        (c, o) =>
          c +
          Object.entries(o)
            .filter(([h]) => h.startsWith("observation.images."))
            .reduce((h, [, d]) => h + (d?.bytes?.length || 0), 0),
        0,
      ),
      curation: {
        sourceEpisodeId: t,
        sourceFrameCount: s.frames.length,
        startFrameInclusive: e.start,
        endFrameInclusive: e.end,
        sourceStartTimestamp: e.start / 30,
        sourceEndTimestamp: e.end / 30,
        humanLabel: e.label,
        notes: e.notes,
        sourceEvaluatorSuccess: !!s.success,
        completeEnd: r,
        markers: e.markers
          .filter((c) => c.frame >= e.start && c.frame <= e.end)
          .map((c) => ({
            ...c,
            sourceFrameIndex: c.frame,
            segmentFrameIndex: c.frame - e.start,
            sourceTimestamp: c.frame / 30,
            segmentTimestamp: (c.frame - e.start) / 30,
          })),
      },
    }
  );
}
function demonstrationMetadata(s) {
  return {
    "demonstrations/episodes.json": Si(
      JSON.stringify(
        {
          format: "armature-demonstrations-v1",
          note: "Human labels are independent from evaluator success. Timesteps are 30 Hz. Segment end truncation is an editing boundary, not an environment failure. Raw originals are preserved in the app.",
          episodes: s.map((e, t) => ({
            episode_index: t,
            sourceEpisodeId: e.demoId,
            task: e.task,
            evaluatorSuccess: e.success,
            termination: e.termination,
            capture: e.demonstration || null,
            curation: e.curation || null,
          })),
        },
        null,
        2,
      ),
    ),
    "demonstrations/controls.jsonl": Si(
      s.flatMap((e, t) =>
        e.frames.map((n, r) =>
          JSON.stringify({
            episode_index: t,
            frame_index: r,
            timestamp: r / 30,
            sourceFrameIndex: n._sourceFrameIndex ?? r,
            sourceTimestamp: n._sourceTimestamp ?? r / 30,
            simulationStep:
              n._simulationStep ?? n._cameras?.simulationStep ?? null,
            controller: n._controller || "legacy-unspecified",
            operator: n._operator || null,
          }),
        ),
      ).join(`
`),
    ),
  };
}
function exportDemonstrations(s, e, t = null) {
  if (!s.length) throw Error("Select at least one episode for export.");
  let n = new Map();
  for (let o of s) {
    let h = o.frames[0],
      d = JSON.stringify([
        o.config.robotId,
        h["observation.state"].length,
        h["observation.object_positions"].length,
        o.rgb,
        o.config.cameras?.cameras
          ?.filter((f) => f.enabled)
          .map((f) => [f.id, f.width, f.height]),
      ]);
    (n.has(d) || n.set(d, []), n.get(d).push(o));
  }
  let r = {},
    i = [],
    c = 0;
  for (let o of n.values()) {
    let h = n.size === 1 ? "" : `dataset-${String(++c).padStart(3, "0")}/`,
      d = e(o);
    for (let [f, p] of Object.entries({
      ...d.files,
      ...demonstrationMetadata(o),
    }))
      r[h + f] = p;
    i.push({
      root: h || ".",
      episodes: o.length,
      frames: o.reduce((f, p) => f + p.frames.length, 0),
      sources: o.map((f) => f.curation),
    });
  }
  return (
    t && (r["REVIEW.json"] = Si(JSON.stringify(t, null, 2))),
    (r["CURATION.json"] = Si(
      JSON.stringify(
        {
          format: "armature-curated-export-v1",
          datasets: i,
          originalsIncluded: !1,
          note: "Each dataset root has a consistent observation/image schema. Parquet timestamps are segment-relative. Original frame/time references and human labels are in demonstrations sidecars. Camera simulation timestamps retain original simulation time. Training-loader compatibility must be checked before use.",
        },
        null,
        2,
      ),
    )),
    oh(r, { level: 4 })
  );
}
export {
  defaultReview,
  validateSegment,
  sliceDemonstration,
  exportDemonstrations,
  demonstrationMetadata,
};
