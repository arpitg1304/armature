import { addMemorySidecars } from "../memory/export.js";
import { PANDA_JOINT_NAMES } from "../simulation/environment.js";
import { Sx } from "../../vendor/parquet.js";
import { getRobotModel, pandaAsset } from "../robots/models.js";
import { enabledCameras } from "../sensors/cameras.js";
import { A, bt } from "../../vendor/fflate.js";
import { simulationUrdf } from "../robots/urdf.js";
import { getObjectSpec } from "../simulation/objects.js";
import { pandaDynamicsModel } from "../simulation/panda-inertias.js";
import { demonstrationMetadata } from "./demonstrations.js";
var featureSpec = (u, a, l = null) => ({ dtype: u, shape: [a], names: l }),
  DEFAULT_FEATURES = {
    "observation.state": featureSpec("float32", 8, PANDA_JOINT_NAMES),
    "observation.velocity": featureSpec(
      "float32",
      8,
      PANDA_JOINT_NAMES.map((u) => u + "_per_s"),
    ),
    action: featureSpec("float32", 8, PANDA_JOINT_NAMES),
    "observation.tcp": featureSpec("float32", 3, ["x", "y", "z"]),
    "observation.object_positions": featureSpec("float32", 9),
    "observation.object_orientations": featureSpec("float32", 12),
    "observation.grasped": featureSpec("float32", 1),
    "next.reward": featureSpec("float32", 1),
    "next.done": featureSpec("bool", 1),
    "next.success": featureSpec("bool", 1),
    "next.terminated": featureSpec("bool", 1),
    "next.truncated": featureSpec("bool", 1),
    timestamp: featureSpec("float32", 1),
    frame_index: featureSpec("int64", 1),
    episode_index: featureSpec("int64", 1),
    index: featureSpec("int64", 1),
    task_index: featureSpec("int64", 1),
  };
function parquetField(u, a, l = !1) {
  return {
    name: u,
    type: a === "STRING" ? "BYTE_ARRAY" : a,
    repetition_type: l ? "OPTIONAL" : "REQUIRED",
    ...(a === "STRING" ? { converted_type: "UTF8" } : {}),
  };
}
function parquetSchema(u, a = []) {
  let l = [{ name: "schema", num_children: u.length }];
  for (let v of u) {
    if (v.image) {
      l.push(
        { name: v.name, repetition_type: "OPTIONAL", num_children: 2 },
        parquetField("bytes", "BYTE_ARRAY", !0),
        parquetField("path", "STRING", !0),
      );
      continue;
    }
    let m = v.depth ?? (v.list ? 1 : 0);
    for (let x = 0; x < m; x++)
      l.push(
        {
          name: x ? "element" : v.name,
          repetition_type: "REQUIRED",
          converted_type: "LIST",
          num_children: 1,
        },
        { name: "list", repetition_type: "REPEATED", num_children: 1 },
      );
    l.push(parquetField(m ? "element" : v.name, v.type));
  }
  return new Uint8Array(
    Sx({
      schema: l,
      columnData: u.map((v) => ({
        name: v.name,
        data: v.type === "INT64" && !v.list ? v.data.map(BigInt) : v.data,
      })),
      kvMetadata: a,
      codec: "SNAPPY",
    }),
  );
}
function numericStatistics(u, a) {
  let l = u.map((N) => (Array.isArray(N[a]) ? N[a] : [Number(N[a])])),
    v = l[0].length,
    m = l.length,
    x = Array(v).fill(0),
    w = Array(v).fill(1 / 0),
    z = Array(v).fill(-1 / 0),
    j = Array(v).fill(0);
  for (let N of l)
    for (let V = 0; V < v; V++)
      ((x[V] += N[V] / m),
        (w[V] = Math.min(w[V], N[V])),
        (z[V] = Math.max(z[V], N[V])));
  for (let N of l) for (let V = 0; V < v; V++) j[V] += (N[V] - x[V]) ** 2 / m;
  return { min: w, max: z, mean: x, std: j.map(Math.sqrt), count: [m] };
}
function imageStatistics(u, a) {
  let l = [0, 0, 0],
    v = [0, 0, 0],
    m = [1, 1, 1],
    x = [0, 0, 0],
    w = 0;
  for (let N of u) {
    let V = N._imageStats[a];
    w += V.n;
    for (let S = 0; S < 3; S++)
      ((l[S] += V.sum[S]),
        (v[S] += V.sq[S]),
        (m[S] = Math.min(m[S], V.min[S])),
        (x[S] = Math.max(x[S], V.max[S])));
  }
  let z = (N) => N.map((V) => [[V]]),
    j = l.map((N) => N / w);
  return {
    min: z(m),
    max: z(x),
    mean: z(j),
    std: z(v.map((N, V) => Math.sqrt(Math.max(0, N / w - j[V] ** 2)))),
    count: [u.length],
  };
}
function createDatasetFiles(u) {
  if (!u.length) throw Error("No episodes recorded.");
  let a = u.every((pe) => pe.rgb);
  if (u.some((pe) => pe.rgb) !== a)
    throw Error(
      "Mixed RGB settings: export one session with a consistent RGB setting. Reload after downloading to change it.",
    );
  let l = getRobotModel(u[0].config?.robotId || "panda"),
    v = l.names.length,
    m = u[0].frames[0]["observation.object_positions"].length / 3;
  if (u.some((pe) => (pe.config?.robotId || "panda") !== l.id))
    throw Error("Export each robot as a separate dataset.");
  let x = {
    ...DEFAULT_FEATURES,
    "observation.state": featureSpec("float32", v, l.names),
    "observation.velocity": featureSpec(
      "float32",
      v,
      l.names.map((pe) => pe + "_per_s"),
    ),
    action: featureSpec("float32", v, l.names),
    "observation.object_positions": featureSpec("float32", m * 3),
    "observation.object_orientations": featureSpec("float32", m * 4),
  };
  for (let pe of u)
    for (let Ve of pe.frames)
      if (
        Ve.action.length !== v ||
        Ve["observation.state"].length !== v ||
        Ve["observation.object_positions"].length !== m * 3
      )
        throw Error("Inconsistent dimensions within this dataset.");
  let w = a
    ? u[0].config?.cameras
      ? enabledCameras(u[0].config.cameras)
      : [
          { id: "overhead", width: 160, height: 120 },
          { id: "wrist", width: 160, height: 120 },
        ]
    : [];
  if (a)
    for (let pe of u) {
      let Ve = pe.config?.cameras
        ? enabledCameras(pe.config.cameras)
        : [
            { id: "overhead", width: 160, height: 120 },
            { id: "wrist", width: 160, height: 120 },
          ];
      if (JSON.stringify(Ve) !== JSON.stringify(w))
        throw Error(
          "Image selection and dimensions must match within one dataset.",
        );
      for (let Je of pe.frames)
        for (let Ie of Ve) {
          let Re = "observation.images." + Ie.id;
          if (
            !Je[Re]?.bytes ||
            Je._imageStats?.[Re]?.n !== Ie.width * Ie.height
          )
            throw Error(
              "Missing camera image or inconsistent dimensions: " + Ie.id,
            );
        }
    }
  let z = w.map((pe) => "observation.images." + pe.id);
  for (let pe of z)
    x[pe] = {
      dtype: "image",
      shape: [
        w.find((Ve) => "observation.images." + Ve.id === pe).height,
        w.find((Ve) => "observation.images." + Ve.id === pe).width,
        3,
      ],
      names: ["height", "width", "channels"],
    };
  let j = [...new Set(u.map((pe) => pe.task))],
    N = [],
    V = [],
    S = 0;
  u.forEach((pe, Ve) => {
    if (!pe.frames.length) throw Error("Empty episode");
    let Je = S,
      Ie = pe.frames.map((Re, Ae) => ({
        ...Re,
        timestamp: Ae / 30,
        frame_index: Ae,
        episode_index: Ve,
        index: S++,
        task_index: j.indexOf(pe.task),
      }));
    (N.push(...Ie),
      V.push({
        episode_index: Ve,
        length: Ie.length,
        tasks: [pe.task],
        dataset_from_index: Je,
        dataset_to_index: S,
        "data/chunk_index": 0,
        "data/file_index": 0,
        "meta/episodes/chunk_index": 0,
        "meta/episodes/file_index": 0,
        success: pe.success,
        stats: Object.fromEntries(
          Object.keys(x).map((Re) => [
            Re,
            z.includes(Re)
              ? imageStatistics(Ie, Re)
              : numericStatistics(Ie, Re),
          ]),
        ),
      }));
  });
  let G = Object.entries(x).map(([pe, Ve]) => ({
      name: pe,
      type:
        Ve.dtype === "int64"
          ? "INT64"
          : Ve.dtype === "bool"
            ? "BOOLEAN"
            : "FLOAT",
      image: Ve.dtype === "image",
      list:
        Ve.shape.length === 1 &&
        (Ve.shape[0] > 1 || pe === "observation.grasped"),
      data: N.map((Je) => Je[pe]),
    })),
    B = Object.fromEntries(
      G.map((pe) => [
        pe.name,
        pe.image
          ? { _type: "Image" }
          : pe.list
            ? {
                _type: "Sequence",
                feature: { _type: "Value", dtype: x[pe.name].dtype },
                length: -1,
              }
            : { _type: "Value", dtype: x[pe.name].dtype },
      ]),
    ),
    _ = [
      "episode_index",
      "length",
      "dataset_from_index",
      "dataset_to_index",
      "data/chunk_index",
      "data/file_index",
      "meta/episodes/chunk_index",
      "meta/episodes/file_index",
    ].map((pe) => ({ name: pe, type: "INT64", data: V.map((Ve) => Ve[pe]) }));
  _.push(
    { name: "tasks", type: "STRING", list: !0, data: V.map((pe) => pe.tasks) },
    { name: "success", type: "BOOLEAN", data: V.map((pe) => pe.success) },
  );
  for (let pe of Object.keys(x))
    for (let Ve of ["min", "max", "mean", "std", "count"])
      _.push({
        name: "stats/" + pe + "/" + Ve,
        type: "DOUBLE",
        depth: z.includes(pe) && Ve !== "count" ? 3 : 1,
        data: V.map((Je) => Je.stats[pe][Ve]),
      });
  let ue = {
      index_columns: ["__index_level_0__"],
      column_indexes: [
        {
          name: null,
          field_name: null,
          pandas_type: "unicode",
          numpy_type: "object",
          metadata: { encoding: "UTF-8" },
        },
      ],
      columns: [
        {
          name: "task_index",
          field_name: "task_index",
          pandas_type: "int64",
          numpy_type: "int64",
          metadata: null,
        },
        {
          name: null,
          field_name: "__index_level_0__",
          pandas_type: "unicode",
          numpy_type: "object",
          metadata: null,
        },
      ],
      creator: { library: "armature", version: "3" },
      pandas_version: "2.2.3",
    },
    he = {
      codebase_version: "v3.0",
      robot_type:
        l.id +
        "_browser_" +
        ([...new Set(u.map((pe) => pe.config?.physicsMode || "kinematic"))]
          .length === 1
          ? u[0].config?.physicsMode || "kinematic"
          : "mixed") +
        "_servo",
      total_episodes: V.length,
      total_frames: N.length,
      total_tasks: j.length,
      chunks_size: 1e3,
      data_files_size_in_mb: 100,
      video_files_size_in_mb: 500,
      fps: 30,
      splits: { train: `0:${V.length}` },
      data_path: "data/chunk-{chunk_index:03d}/file-{file_index:03d}.parquet",
      video_path: null,
      features: x,
    },
    ve = (pe) => A(JSON.stringify(pe, null, 2)),
    we = {
      "robot/simulation.urdf": A(simulationUrdf(l)),
      "meta/info.json": ve(he),
      "meta/stats.json": ve(
        Object.fromEntries(
          Object.keys(x).map((pe) => [
            pe,
            z.includes(pe) ? imageStatistics(N, pe) : numericStatistics(N, pe),
          ]),
        ),
      ),
      "meta/tasks.parquet": parquetSchema(
        [
          { name: "task_index", type: "INT64", data: j.map((pe, Ve) => Ve) },
          { name: "__index_level_0__", type: "STRING", data: j },
        ],
        [{ key: "pandas", value: JSON.stringify(ue) }],
      ),
      "meta/episodes/chunk-000/file-000.parquet": parquetSchema(_),
      "data/chunk-000/file-000.parquet": parquetSchema(G, [
        {
          key: "huggingface",
          value: JSON.stringify({ info: { features: B } }),
        },
      ]),
      ["robot/" + l.id + ".urdf"]: A(l.asset.urdf),
      "robot/LICENSE.txt": A(l.asset.license),
      ...(l.id === "ur5e" || l.id === "xarm6"
        ? {
            "robot/simulated-hand-source.urdf": A(pandaAsset.urdf),
            "robot/simulated-hand-LICENSE.txt": A(pandaAsset.license),
          }
        : {}),
      "meta/armature.json": ve({
        generator: "ARMATURE Studio 0.1.0",
        robot_id: l.id,
        model_source: l.asset.source,
        notice: l.asset.notice,
        gripper: l.gripper,
        joint_names: l.names,
        action_units: l.units,
        controller:
          "See episode config.physicsMode and dynamicsModel for the selected controller, model provenance and effort limits. Actions are absolute joint targets; no grasp attachments.",
        jaw_speed_limit: l.jawSpeed,
        tcp_link: l.tcp,
        simulated_tcp_offset:
          l.id === "so101"
            ? {
                parent: "gripper_frame_link",
                xyz: [-0.013, 0, -0.003],
                rpy: [0, 0, 0],
              }
            : null,
        base_position: [l.baseX, 0, 0],
        base_rotation_rpy: [-Math.PI / 2, 0, 0],
        coordinates: "Three.js world +Y up, metres/radians",
        action:
          "Absolute targets in joint_names order, with per-element action_units. Observation is pre-action. next.* describe the ensuing transition.",
        frequencies: {
          physics_per_episode: u.map((pe) =>
            pe.config?.physicsMode === "dynamic"
              ? pe.config.physicsHz || 480
              : 240,
          ),
          control: 30,
          recording: 30,
        },
        privileged_features: [
          "observation.object_positions",
          "observation.object_orientations",
          "observation.grasped",
        ],
        cameras: a
          ? {
              encoding: "PNG bytes embedded in Parquet Image structs",
              fps: 30,
              imageLayout: w,
              calibration:
                "cameras/frames.jsonl contains pre-action per-frame intrinsics and optical/world transforms; camera rig settings are in each episode config",
              pixelConvention:
                "top-left image edge origin; pixel centres at (u+0.5,v+0.5)",
              distortion: "none",
            }
          : null,
        episodes: u.map((pe, Ve) => ({
          index: Ve,
          task: pe.task,
          scene: pe.scene,
          config: pe.config,
          object_specs: Array.from({ length: m }, (Je, Ie) =>
            getObjectSpec(pe.config?.object || "blocks", Ie),
          ),
          success: pe.success,
          termination: pe.termination,
        })),
      }),
      "transitions.jsonl": A(
        N.map((pe) =>
          JSON.stringify({
            episode_index: pe.episode_index,
            timestamp: pe.timestamp,
            observation: pe["observation.state"],
            action: pe.action,
            reward: pe["next.reward"],
            terminated: pe["next.terminated"],
            truncated: pe["next.truncated"],
            next_observation: pe._nextObservation,
          }),
        ).join(`
`),
      ),
      "README.md": A(`# ${l.label} browser simulation dataset

LeRobot v3.0; 30 Hz; ${a ? "synchronized lossless overhead/wrist PNG images embedded in Parquet" : "state/action only"}. No MP4 files.


\`\`\`python
from lerobot.datasets.lerobot_dataset import LeRobotDataset
ds = LeRobotDataset(repo_id="local/${l.id}", root="/absolute/path/to/extracted-dataset")
print(ds[0])
\`\`\`

Observations precede their commanded action; next.* fields describe the ensuing transition. transitions.jsonl also contains next_observation for RL. Task success requires stable goal attainment; expert exhaustion is an unsuccessful truncation.

${l.description}. ${l.gripper}. See meta/armature.json for ordered joint names and units. SO-101 uses URDF radians, not hardware calibration ticks or LeRobot normalized servo values. Episode config.physicsMode identifies kinematic motion or experimental dynamic Panda. Dynamic mode uses pinned MuJoCo Menagerie Panda masses, centres of mass, full inertia tensors, source mesh convex hulls and fingertip boxes. It runs in Cannon with bounded velocity servos and force-limited finger sliders, not MuJoCo actuators. Source MJCF armature, joint damping, tendon/equality coupling, solver contact semantics and gyroscopic dynamics are not reproduced. Finger force remains a configured 20 N cap per finger. No hardware calibration is claimed. Kinematic mode cannot be resisted by contact. Both use Cannon-es objects with no grasp attachment. Neither provides self-collision or calibrated friction. Dynamic actuator measurements in physics/transitions.jsonl describe the final physics substep AFTER each action, not pre-action observations. This dataset is for prototyping, not verified sim-to-real training. Privileged object poses should be excluded for visual-only policies.

Camera selection, sizes and mounts are in each episode config.cameras. cameras/frames.jsonl stores intrinsics and world/optical transforms at the same pre-action simulation state as the RGB image. Matrices are row-major, metres; optical axes are right/down/forward. Pixel centres are (u+0.5,v+0.5) relative to the top-left image edge. No lens distortion or sensor noise. Camera settings are locked while recording.

Lighting changes are stored in lighting/events.jsonl by episode_index and frame_index. Each event applies from that frame until the next event. Exposure and sampled light settings are included; these are renderer settings, not calibrated sensor measurements.

See meta/armature.json for seeds, camera geometry, action conventions and termination reasons. robot/simulation.urdf includes the complete kinematic chain with the simulated hand or grasp-center frame. The original URDF references external mesh paths; those meshes are embedded in the HTML visualization, not included in this dataset archive. Model sources and licenses are included. For UR5e/xArm 6, the attached simulated hand comes from the separately included Panda model, mounted at tool0/link6 with zero offset. It is not a native manufacturer gripper.
`),
    };
  u.some((pe) => pe.config?.physicsMode === "dynamic") &&
    ((we["physics/panda-model.json"] = A(JSON.stringify(pandaDynamicsModel))),
    (we["physics/LICENSE-panda.txt"] = A(pandaDynamicsModel.licenseText)));
  let je = [];
  (u.forEach((pe, Ve) =>
    pe.frames.forEach((Je, Ie) => {
      Je._cameras &&
        je.push({ episode_index: Ve, frame_index: Ie, ...Je._cameras });
    }),
  ),
    je.length &&
      (we["cameras/frames.jsonl"] = A(
        je.map((pe) => JSON.stringify(pe)).join(`
`),
      )));
  let Ne = [];
  (u.forEach((pe, Ve) =>
    pe.frames.forEach((Je, Ie) => {
      Je._dynamics &&
        Ne.push({
          episode_index: Ve,
          frame_index: Ie,
          next_timestamp: (Ie + 1) / 30,
          observation_robot_proxy_poses: Je._robotPoses,
          dynamics: Je._dynamics,
        });
    }),
  ),
    Ne.length &&
      (we["physics/transitions.jsonl"] = A(
        Ne.map((pe) => JSON.stringify(pe)).join(`
`),
      )));
  let ge = [];
  (u.forEach((pe, Ve) => {
    let Je = "";
    pe.frames.forEach((Ie, Re) => {
      if (!Ie._lighting) return;
      let Ae = JSON.stringify(Ie._lighting);
      Ae !== Je &&
        (ge.push({
          episode_index: Ve,
          frame_index: Re,
          timestamp: Re / 30,
          lighting: Ie._lighting,
        }),
        (Je = Ae));
    });
  }),
    ge.length &&
      (we["lighting/events.jsonl"] = A(
        ge.map((pe) => JSON.stringify(pe)).join(`
`),
      )));
  let We = [],
    Ue = [];
  return (
    u.forEach((pe, Ve) => {
      (pe.config?.composition &&
        We.push({ episode_index: Ve, project: pe.config.composition }),
        pe.frames.forEach((Je, Ie) => {
          Je._authoredTask &&
            Ue.push({
              episode_index: Ve,
              frame_index: Ie,
              next_timestamp: (Ie + 1) / 30,
              next_simulation_step: Je._simulationStep + 1,
              ...Je._authoredTask,
            });
        }));
    }),
    We.length &&
      (we["tasks/projects.json"] = A(
        JSON.stringify({
          format: "armature-authored-tasks",
          version: 1,
          episodes: We,
        }),
      )),
    Ue.length &&
      (we["tasks/transitions.jsonl"] = A(
        Ue.map((pe) => JSON.stringify(pe)).join(`
`),
      )),
    Object.assign(we, demonstrationMetadata(u)),
    addMemorySidecars(u, N, we),
    { files: we, info: he, rows: N, eps: V }
  );
}
function exportDatasetZip(u) {
  return bt(createDatasetFiles(u).files, { level: 4 });
}
export { exportDatasetZip, createDatasetFiles };
