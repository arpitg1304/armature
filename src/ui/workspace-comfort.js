import { notifyStudio } from "./studio-feedback.js";
const KEY = "armature.workspace-preferences.v1";

export function createWorkspaceComfort() {
  const byId = (id) => document.getElementById(id);
  const sidebar = byId("controlPanel"),
    app = document.querySelector(".app");
  let prefs = {},
    dragging = null;
  try {
    const stored = JSON.parse(localStorage.getItem(KEY) || "{}");
    if (stored && typeof stored === "object" && !Array.isArray(stored))
      prefs = stored;
  } catch {
    /* Defaults remain usable without storage. */
  }
  function persist() {
    try {
      localStorage.setItem(KEY, JSON.stringify(prefs));
    } catch {
      notifyStudio(
        "Workspace preferences are available for this session only.",
      );
    }
  }
  function maxWidth() {
    return Math.max(280, Math.min(520, window.innerWidth - 420));
  }
  function applyWidth(value) {
    const width = Math.round(Math.max(280, Math.min(maxWidth(), value)));
    document.documentElement.style.setProperty("--sidebar-width", width + "px");
    splitter.setAttribute("aria-valuenow", String(width));
    splitter.setAttribute("aria-valuemax", String(maxWidth()));
    return width;
  }
  const splitter = document.createElement("div");
  splitter.id = "sidebarResize";
  splitter.tabIndex = 0;
  splitter.setAttribute("role", "separator");
  splitter.setAttribute("aria-label", "Resize studio sidebar");
  splitter.setAttribute("aria-orientation", "vertical");
  splitter.setAttribute("aria-controls", "controlPanel");
  splitter.setAttribute("aria-valuemin", "280");
  splitter.title =
    "Drag to resize. Arrow keys adjust width; double-click or Home restores default.";
  app.append(splitter);
  applyWidth(Number.isFinite(prefs.width) ? prefs.width : 368);
  splitter.onpointerdown = (event) => {
    if (event.button !== 0) return;
    dragging = {
      x: event.clientX,
      width: sidebar.getBoundingClientRect().width,
    };
    splitter.setPointerCapture(event.pointerId);
    document.body.classList.add("resizingSidebar");
    event.preventDefault();
  };
  splitter.onpointermove = (event) => {
    if (dragging) applyWidth(dragging.width + event.clientX - dragging.x);
  };
  function finishResize() {
    if (!dragging) return;
    prefs.width = Number(splitter.getAttribute("aria-valuenow"));
    dragging = null;
    document.body.classList.remove("resizingSidebar");
    persist();
  }
  splitter.onpointerup =
    splitter.onpointercancel =
    splitter.onlostpointercapture =
      finishResize;
  splitter.ondblclick = () => {
    prefs.width = applyWidth(368);
    persist();
  };
  splitter.onkeydown = (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home"].includes(event.key)) return;
    event.preventDefault();
    const current = Number(splitter.getAttribute("aria-valuenow"));
    prefs.width = applyWidth(
      event.key === "Home"
        ? 368
        : current +
            (event.key === "ArrowRight" ? 1 : -1) * (event.shiftKey ? 32 : 16),
    );
    persist();
  };
  window.addEventListener("resize", () =>
    applyWidth(Number.isFinite(prefs.width) ? prefs.width : 368),
  );

  // Store presentation state only; never write robot, scene, task or sensor configuration.
  if (typeof prefs.sidebarHidden === "boolean") {
    document.body.classList.toggle("sidebarHidden", prefs.sidebarHidden);
    byId("sidebarToggle").setAttribute(
      "aria-expanded",
      String(!prefs.sidebarHidden),
    );
  }
  byId("sidebarToggle").addEventListener("click", () => {
    prefs.sidebarHidden = document.body.classList.contains("sidebarHidden");
    persist();
  });
  new MutationObserver(() => {
    const hidden = document.body.classList.contains("sidebarHidden");
    if (prefs.sidebarHidden !== hidden) {
      prefs.sidebarHidden = hidden;
      persist();
    }
  }).observe(document.body, { attributes: true, attributeFilter: ["class"] });
  const tabs = [...sidebar.querySelectorAll('[role="tab"]')];
  const active = tabs.find((tab) => tab.id === prefs.activeTab);
  active?.click();
  tabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      prefs.activeTab = tab.id;
      persist();
    }),
  );
  if (
    !prefs.details ||
    typeof prefs.details !== "object" ||
    Array.isArray(prefs.details)
  )
    prefs.details = {};
  const defaults = new Map(
    [...sidebar.querySelectorAll("details")].map((details) => [
      details,
      details.open,
    ]),
  );
  sidebar.querySelectorAll("details").forEach((details) => {
    const key =
      (details.closest('[role="tabpanel"]')?.id || "studio") +
      ":" +
      details.querySelector(":scope > summary")?.textContent.trim();
    if (typeof prefs.details[key] === "boolean")
      details.open = prefs.details[key];
    details.addEventListener("toggle", () => {
      prefs.details[key] = details.open;
      persist();
    });
  });
  if (
    typeof prefs.recorderOpen === "boolean" &&
    byId("recorderBody").hidden === prefs.recorderOpen
  )
    byId("recorderToggle").click();
  byId("recorderToggle").addEventListener("click", () => {
    prefs.recorderOpen = !byId("recorderBody").hidden;
    persist();
  });

  const feeds = document.querySelector(".cameraFeeds");
  const collapse = document.createElement("button");
  collapse.id = "toggleCameraPreviews";
  collapse.title =
    "Show or collapse workspace thumbnails; camera capture is unchanged";
  feeds.prepend(collapse);
  function showFeeds() {
    const collapsed = prefs.feedsCollapsed === true;
    feeds.classList.toggle("previewsCollapsed", collapsed);
    collapse.textContent = collapsed ? "Show previews" : "Collapse previews";
    collapse.setAttribute("aria-expanded", String(!collapsed));
  }
  collapse.onclick = () => {
    prefs.feedsCollapsed = prefs.feedsCollapsed !== true;
    showFeeds();
    persist();
  };
  showFeeds();
  const openPreview = document.createElement("button");
  openPreview.id = "openCameraPreview";
  openPreview.className = "wide";
  openPreview.textContent = "Enlarge camera preview";
  byId("panel-cameras").prepend(openPreview);
  const dialog = document.createElement("dialog");
  dialog.id = "cameraPreviewDialog";
  dialog.setAttribute("aria-labelledby", "cameraPreviewTitle");
  dialog.innerHTML = `<div class="previewDialogHead"><h2 id="cameraPreviewTitle">Camera preview</h2><button id="closeCameraPreview" autofocus>Close</button></div>
    <label for="previewCamera">Camera</label><select id="previewCamera"><option value="overheadFeed">Overhead</option><option value="wristFeed">Wrist</option></select>
    <p id="previewDescription" class="note">Enlarged display of the existing capture; recording resolution is unchanged.</p>
    <canvas id="enlargedCamera"></canvas><p id="previewCameraStatus" class="note" role="status"></p>`;
  document.body.append(dialog);
  let returnFocus = null;
  function refreshPreview() {
    if (!dialog.open) return;
    const source = byId(byId("previewCamera").value),
      output = byId("enlargedCamera");
    const available = source && !source.closest(".feed").hidden;
    output.hidden = !available;
    const description = available
      ? source.width +
        " × " +
        source.height +
        " source pixels · live while simulation updates; paused during replay"
      : "This camera is disabled. Enable it in Cameras to see its preview.";
    if (byId("previewCameraStatus").textContent !== description)
      byId("previewCameraStatus").textContent = description;
    if (!available) return;
    if (output.width !== source.width || output.height !== source.height) {
      output.width = source.width;
      output.height = source.height;
    }
    output.getContext("2d").drawImage(source, 0, 0);
  }
  function open(source = "overheadFeed") {
    returnFocus = document.activeElement;
    byId("previewCamera").value = source;
    if (!dialog.open) dialog.showModal();
    refreshPreview();
  }
  byId("closeCameraPreview").onclick = () => dialog.close();
  dialog.addEventListener("close", () => returnFocus?.focus());
  byId("previewCamera").onchange = refreshPreview;
  openPreview.onclick = () => open();
  feeds.querySelectorAll(".feed").forEach((feed) => {
    const canvas = feed.querySelector("canvas");
    feed.tabIndex = 0;
    feed.setAttribute("role", "button");
    feed.setAttribute(
      "aria-label",
      canvas.id === "overheadFeed"
        ? "Enlarge overhead preview"
        : "Enlarge wrist preview",
    );
    feed.title = "Click to enlarge camera preview";
    feed.onclick = () => open(canvas.id);
    feed.onkeydown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(canvas.id);
      }
    };
  });
  const reset = document.createElement("button");
  reset.id = "resetWorkspacePreferences";
  reset.className = "wide";
  reset.textContent = "Reset workspace preferences";
  reset.title =
    "Restore sidebar, panels and previews; bookmarks and experiments are kept";
  sidebar.querySelector("#panel-advanced").append(reset);
  reset.onclick = () => {
    prefs = {};
    applyWidth(368);
    document.body.classList.remove("sidebarHidden");
    byId("sidebarToggle").setAttribute("aria-expanded", "true");
    // Restore the initial accordion states rather than changing experiment fields.
    sidebar.querySelectorAll("details").forEach((details) => {
      details.open = defaults.get(details);
    });
    if (!byId("recorderBody").hidden) byId("recorderToggle").click();
    byId("tab-scene").click();
    showFeeds();
    persist();
    notifyStudio(
      "Workspace preferences reset. Bookmarks and experiment settings kept.",
    );
  };
  return { refreshPreview };
}
