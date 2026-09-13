export function validatePose(pose, env) {
  if (!Array.isArray(pose) || pose.length !== env.dof)
    throw Error("This pose does not match the selected robot.");
  pose.forEach((value, index) => {
    const limit = index === env.n ? env.model.jawLimit : env.arm[index].limit;
    const margin = index === env.n ? 0 : 0.02;
    if (
      !Number.isFinite(value) ||
      value < limit.lower + margin ||
      value > limit.upper - margin
    )
      throw Error("This pose is outside the robot servo target limits.");
  });
  return pose.slice();
}

export function encodeBookmarks(entries, env) {
  return {
    format: "armature-bookmarks",
    version: 1,
    robotId: env.model.id,
    jointNames: [...env.names],
    units: [...env.model.units],
    bookmarks: entries
      .filter((entry) => entry.robot === env.model.id)
      .map((entry) => ({
        name: entry.name,
        pose: validatePose(entry.pose, env),
      })),
  };
}
export function decodeBookmarks(value, env, existing) {
  if (!value || value.format !== "armature-bookmarks" || value.version !== 1)
    throw Error("Expected an ARMATURE bookmarks version 1 file.");
  if (value.robotId !== env.model.id)
    throw Error("Select the file's robot before importing: " + value.robotId);
  if (
    JSON.stringify(value.jointNames) !== JSON.stringify(env.names) ||
    JSON.stringify(value.units) !== JSON.stringify(env.model.units)
  )
    throw Error("The file's joints or units do not match this robot.");
  if (!Array.isArray(value.bookmarks) || value.bookmarks.length > 200)
    throw Error("A bookmark file can contain up to 200 poses.");
  const used = new Set(
    existing
      .filter((entry) => entry.robot === env.model.id)
      .map((entry) => entry.name),
  );
  if (used.size + value.bookmarks.length > 200)
    throw Error("Keep at most 200 poses per robot.");
  // Validate the complete file before returning any additions.
  return value.bookmarks.map((entry) => {
    if (
      !entry ||
      typeof entry.name !== "string" ||
      !entry.name.trim() ||
      entry.name.length > 60
    )
      throw Error("Each pose needs a name of 1–60 characters.");
    const pose = validatePose(entry.pose, env);
    const base = entry.name.trim();
    let name = base,
      suffix = 2;
    while (used.has(name))
      name = base.slice(0, 40) + " (imported " + suffix++ + ")";
    used.add(name);
    return { robot: env.model.id, name, pose };
  });
}
