const STORAGE_KEY = "armature.robot-bookmarks.v1";

export function validatePose(pose, env) {
  if (!Array.isArray(pose) || pose.length !== env.dof)
    throw Error("This pose does not match the selected robot.");
  pose.forEach((value, index) => {
    const limit = index === env.n ? env.model.jawLimit : env.arm[index].limit;
    if (!Number.isFinite(value) || value < limit.lower || value > limit.upper)
      throw Error("This pose contains an invalid joint target.");
  });
  return pose.slice();
}

export function createRobotBookmarks({ host, getEnv, move, stop }) {
  host.innerHTML = `<details open>
    <summary>Robot bookmarks</summary>
    <p class="note">Save current joints and gripper for this robot. Moves use joint servos; paths are not collision-planned.</p>
    <label for="bookmarkName">Pose name</label>
    <input id="bookmarkName" type="text" maxlength="60" placeholder="Ready to grasp">
    <button id="bookmarkSave" class="wide">Save current pose</button>
    <label for="bookmarkList">Saved poses</label>
    <select id="bookmarkList"></select>
    <div class="fieldPair"><button id="bookmarkMove">Move to pose</button><button id="bookmarkStop">Stop move</button></div>
    <button id="bookmarkDelete" class="wide">Delete selected pose</button>
    <p id="bookmarkMessage" class="note" role="status" aria-live="polite"></p>
  </details>`;
  const el = (id) => host.querySelector("#" + id);
  let entries = [],
    storageNotice = "";
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(value)) throw Error();
    entries = value.filter(
      (item) =>
        item &&
        typeof item.robot === "string" &&
        typeof item.name === "string" &&
        item.name.length <= 60 &&
        Array.isArray(item.pose) &&
        item.pose.every(Number.isFinite),
    );
  } catch {
    storageNotice =
      "Saved poses could not be loaded; new poses are available for this session.";
  }
  const message = (text) => {
    el("bookmarkMessage").textContent = text;
  };
  const selected = () =>
    entries.find(
      (item) =>
        item.robot === getEnv().model.id &&
        item.name === el("bookmarkList").value,
    );
  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      storageNotice =
        "Browser storage unavailable; changes last for this session only.";
    }
  }
  function refresh() {
    const previous = el("bookmarkList").value;
    const items = entries.filter((item) => item.robot === getEnv().model.id);
    el("bookmarkList").replaceChildren(
      ...items.map((item) => new Option(item.name, item.name)),
    );
    if (items.some((item) => item.name === previous))
      el("bookmarkList").value = previous;
    if (!items.length)
      el("bookmarkList").append(
        new Option("No saved poses for this robot", ""),
      );
    for (const id of ["bookmarkList", "bookmarkMove", "bookmarkDelete"])
      el(id).disabled = !items.length;
  }
  function attempt(fn) {
    try {
      fn();
    } catch (error) {
      message(error.message);
    }
  }
  el("bookmarkSave").onclick = () =>
    attempt(() => {
      const name = el("bookmarkName").value.trim();
      if (!name) throw Error("Enter a pose name.");
      const env = getEnv();
      if (
        entries.some(
          (item) => item.robot === env.model.id && item.name === name,
        )
      )
        throw Error(
          "That name already exists for this robot. Choose another name or delete it first.",
        );
      entries.push({
        robot: env.model.id,
        name,
        pose: validatePose(env.q, env),
      });
      persist();
      refresh();
      el("bookmarkList").value = name;
      message(
        storageNotice || "Saved " + name + " for " + env.model.label + ".",
      );
    });
  el("bookmarkMove").onclick = () =>
    attempt(() => {
      const item = selected();
      if (!item) throw Error("Select a saved pose.");
      move(validatePose(item.pose, getEnv()));
      message("Moving to " + item.name + ". Use Stop move to pause.");
    });
  el("bookmarkStop").onclick = () => {
    stop();
    message("Bookmark move stopped.");
  };
  el("bookmarkDelete").onclick = () => {
    const item = selected();
    entries = entries.filter((entry) => entry !== item);
    persist();
    refresh();
    message(storageNotice || "Pose deleted.");
  };
  refresh();
  message(storageNotice || "Saved in this browser, separately for each robot.");
  return { refresh, message };
}
