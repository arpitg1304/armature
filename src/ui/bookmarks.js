import {
  encodeBookmarks,
  decodeBookmarks,
  validatePose,
} from "./bookmark-files.js";
import { notifyStudio } from "./studio-feedback.js";
const STORAGE_KEY = "armature.robot-bookmarks.v1";

export { validatePose } from "./bookmark-files.js";

export function createRobotBookmarks({ host, getEnv, move, stop, save }) {
  host.innerHTML = `<details open>
    <summary>Robot bookmarks</summary>
    <p class="note">Save current joints and gripper for this robot. Moves use joint servos; paths are not collision-planned.</p>
    <label for="bookmarkName">Pose name</label>
    <input id="bookmarkName" type="text" maxlength="60" placeholder="Ready to grasp">
    <button id="bookmarkSave" class="wide">Save current pose</button>
    <div id="bookmarkEmpty" class="emptyState"><strong>No poses saved for this robot</strong><p>Give the current pose a name and choose Save current pose. Each robot has its own list.</p></div>
    <label for="bookmarkList">Saved poses</label>
    <select id="bookmarkList"></select>
    <div class="fieldPair"><button id="bookmarkMove">Move to pose</button><button id="bookmarkStop">Stop move</button></div>
    <label for="bookmarkRenameName">Rename selected pose</label>
    <div class="fieldPair"><input id="bookmarkRenameName" type="text" maxlength="60"><button id="bookmarkRename">Rename</button></div>
    <div class="fieldPair bookmarkFileActions"><button id="bookmarkExport">Export this robot</button><button id="bookmarkImport">Import poses</button></div>
    <input id="bookmarkFile" type="file" accept=".json,application/json" hidden>
    <p class="note">Imports must match this robot. Existing poses are kept; duplicate names receive a suffix.</p>
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
    el("bookmarkEmpty").hidden = items.length > 0;
    el("bookmarkList").replaceChildren(
      ...items.map((item) => new Option(item.name, item.name)),
    );
    if (items.some((item) => item.name === previous))
      el("bookmarkList").value = previous;
    if (!items.length)
      el("bookmarkList").append(
        new Option("No saved poses for this robot", ""),
      );
    for (const id of [
      "bookmarkList",
      "bookmarkMove",
      "bookmarkDelete",
      "bookmarkRename",
      "bookmarkRenameName",
      "bookmarkExport",
    ])
      el(id).disabled = !items.length;
    el("bookmarkRenameName").value = selected()?.name || "";
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
      if (entries.filter((item) => item.robot === env.model.id).length >= 200)
        throw Error("Keep at most 200 poses per robot.");
      entries.push({
        robot: env.model.id,
        name,
        pose: validatePose(env.q, env),
      });
      persist();
      refresh();
      el("bookmarkList").value = name;
      el("bookmarkRenameName").value = name;
      message(
        storageNotice || "Saved " + name + " for " + env.model.label + ".",
      );
      notifyStudio(storageNotice || "Pose saved: " + name);
    });
  el("bookmarkList").onchange = () => {
    el("bookmarkRenameName").value = selected()?.name || "";
  };
  el("bookmarkRename").onclick = () =>
    attempt(() => {
      const item = selected(),
        name = el("bookmarkRenameName").value.trim();
      if (!item || !name) throw Error("Enter a name for the selected pose.");
      if (
        entries.some(
          (other) =>
            other !== item && other.robot === item.robot && other.name === name,
        )
      )
        throw Error("That name is already used by this robot.");
      item.name = name;
      persist();
      refresh();
      el("bookmarkList").value = name;
      el("bookmarkRenameName").value = name;
      message(storageNotice || "Pose renamed.");
      notifyStudio(storageNotice || "Pose renamed: " + name);
    });
  el("bookmarkExport").onclick = () =>
    attempt(() => {
      const env = getEnv();
      save(
        JSON.stringify(encodeBookmarks(entries, env), null, 2),
        env.model.id + "-bookmarks.json",
        "application/json",
      );
    });
  el("bookmarkImport").onclick = () => el("bookmarkFile").click();
  el("bookmarkFile").onchange = async () => {
    const file = el("bookmarkFile").files[0];
    if (!file) return;
    try {
      if (file.size > 256000)
        throw Error("Bookmark files must be smaller than 256 KB.");
      const additions = decodeBookmarks(
        JSON.parse(await file.text()),
        getEnv(),
        entries,
      );
      entries.push(...additions);
      persist();
      refresh();
      message(storageNotice || "Imported " + additions.length + " poses.");
      notifyStudio(storageNotice || "Imported " + additions.length + " poses.");
    } catch (error) {
      message(error.message);
    } finally {
      el("bookmarkFile").value = "";
    }
  };
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
