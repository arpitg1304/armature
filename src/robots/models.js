import __asset_Be from "../../assets/panda.json.gz.b64";
import __asset_ut from "../../assets/so101.json.gz.b64";
import __asset_Pt from "../../assets/ur5e.json.gz.b64";
import __asset_yt from "../../assets/xarm6.json.gz.b64";
import { Pe, fe } from "../../vendor/fflate.js";
var getRobotModel = (u) => {
  if (!ROBOT_MODELS[u]) throw Error("Unknown robot: " + u);
  return ROBOT_MODELS[u];
};
var Be = __asset_Be,
  ut = __asset_ut,
  Pt = __asset_Pt,
  yt = __asset_yt,
  decodeRobotAsset = (u) =>
    JSON.parse(Pe(fe(Uint8Array.from(atob(u), (a) => a.charCodeAt(0))))),
  pandaAsset = decodeRobotAsset(Be),
  PANDA_HAND_LINKS = [
    "panda_hand",
    "panda_leftfinger",
    "panda_rightfinger",
    "panda_grasptarget",
  ];
function attachPandaHand(u, a) {
  return {
    ...u,
    links: [
      ...u.links,
      ...pandaAsset.links.filter((l) => PANDA_HAND_LINKS.includes(l.name)),
    ],
    meshes: { ...u.meshes, ...pandaAsset.meshes },
    joints: [
      ...u.joints,
      {
        name: "sim_hand_mount",
        type: "fixed",
        parent: a,
        child: "panda_hand",
        xyz: [0, 0, 0],
        rpy: [0, 0, 0],
        axis: [0, 0, 1],
      },
      ...pandaAsset.joints.filter((l) => PANDA_HAND_LINKS.includes(l.parent)),
    ],
  };
}
var DEFAULT_ROBOT_CONFIG = {
    baseX: -0.4,
    tcp: "panda_grasptarget",
    hand: "panda_hand",
    jawType: "parallel",
    open: 0.08,
    close: 0.037,
    jawSpeed: 0.045,
    jawLimit: { lower: 0, upper: 0.08 },
    homePoint: [0, 0.32, 0],
    high: 0.27,
    spawnX: 0.02,
    goalX: 0.23,
    rowZ: -0.17,
    rowSpacing: 0.17,
    sizeScale: 1,
    reach: [0.18, 0.18, 0.1],
    cameraOffset: [0.055, 0, 0.035],
    cameraDistance: 2.8,
  },
  so101Asset = decodeRobotAsset(ut);
(so101Asset.links.push({ name: "sim_grasp_center", visuals: [] }),
  so101Asset.joints.push({
    name: "sim_grasp_center_joint",
    type: "fixed",
    parent: "gripper_frame_link",
    child: "sim_grasp_center",
    xyz: [-0.013, 0, -0.003],
    rpy: [0, 0, 0],
    axis: [0, 0, 1],
  }));
var ROBOT_MODELS = {
  panda: {
    ...DEFAULT_ROBOT_CONFIG,
    id: "panda",
    label: "Franka Panda",
    asset: pandaAsset,
    base: "panda_link0",
    armNames: Array.from({ length: 7 }, (u, a) => "panda_joint" + (a + 1)),
    home: [0, -0.6, 0, -2.25, 0, 1.65, 0.7854, 0.08],
    description: "7 arm joints \xB7 parallel gripper \xB7 8 values",
    workspace: "Standard bench \xB7 40 mm objects",
    gripper: "Franka hand \xB7 width in metres",
  },
  so101: {
    ...DEFAULT_ROBOT_CONFIG,
    id: "so101",
    label: "SO-101",
    asset: so101Asset,
    base: "base_link",
    baseX: -0.2,
    tcp: "sim_grasp_center",
    hand: "gripper_link",
    armNames: [
      "shoulder_pan",
      "shoulder_lift",
      "elbow_flex",
      "wrist_flex",
      "wrist_roll",
    ],
    jawType: "revolute",
    jawName: "gripper",
    open: 1.1,
    close: 0.12,
    jawSpeed: 1,
    jawLimit: { lower: -0.174533, upper: 1.74533 },
    home: [0, 0.1, 0.1, 1.3, 0, 1.1],
    homePoint: [0.025, 0.065, 0],
    high: 0.065,
    spawnX: 0.025,
    goalX: 0.065,
    rowZ: -0.06,
    rowSpacing: 0.06,
    sizeScale: 0.65,
    reach: [0.04, 0.06, 0.04],
    cameraOffset: [0.025, 0.035, -0.02],
    cameraDistance: 1.35,
    description: "5 arm joints \xB7 rotating jaw \xB7 6 values",
    workspace: "Compact bench \xB7 26 mm objects \xB7 60 mm row spacing",
    gripper: "Native SO-101 jaw \xB7 URDF radians, not servo ticks",
  },
  ur5e: {
    ...DEFAULT_ROBOT_CONFIG,
    id: "ur5e",
    label: "UR5e",
    asset: attachPandaHand(decodeRobotAsset(Pt), "tool0"),
    base: "world",
    armNames: [
      "shoulder_pan_joint",
      "shoulder_lift_joint",
      "elbow_joint",
      "wrist_1_joint",
      "wrist_2_joint",
      "wrist_3_joint",
    ],
    home: [0, -1.3, 1.8, -2.1, -1.57, 0, 0.08],
    description: "6 arm joints \xB7 simulated hand \xB7 7 values",
    workspace: "Standard bench \xB7 40 mm objects",
    gripper: "Simulated Franka hand attachment \xB7 width in metres",
  },
  xarm6: {
    ...DEFAULT_ROBOT_CONFIG,
    id: "xarm6",
    label: "xArm 6",
    asset: attachPandaHand(decodeRobotAsset(yt), "link6"),
    base: "link_base",
    armNames: ["joint1", "joint2", "joint3", "joint4", "joint5", "joint6"],
    home: [0, -0.5, -1.5, 0, 2, 0, 0.08],
    description: "6 arm joints \xB7 simulated hand \xB7 7 values",
    workspace: "Standard bench \xB7 40 mm objects",
    gripper: "Simulated Franka hand attachment \xB7 width in metres",
  },
};
for (let u of Object.values(ROBOT_MODELS))
  ((u.names = [
    ...u.armNames,
    u.jawType === "revolute" ? "gripper" : "gripper_width_m",
  ]),
    (u.units = u.names.map((a, l) =>
      l === u.armNames.length && u.jawType === "parallel" ? "m" : "rad",
    )));
export { getRobotModel, pandaAsset, ROBOT_MODELS };
