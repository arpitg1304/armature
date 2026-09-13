let notificationTimer;
export function notifyStudio(message) {
  const host = document.getElementById("studioNotification");
  if (!host) return;
  document.getElementById("studioNotificationText").textContent = message;
  host.hidden = false;
  clearTimeout(notificationTimer);
  notificationTimer = setTimeout(() => {
    host.hidden = true;
  }, 6000);
}

export function describeStudioState(state) {
  if (state.training) return ["training", "Training"];
  if (state.replay) return ["replay", "Replay"];
  if (state.recording)
    return state.running
      ? ["recording", "Recording"]
      : ["paused", "Recording paused"];
  if (state.finished) return ["finished", "Finished"];
  if (state.running) return ["running", "Running"];
  return state.steps > 0 ? ["paused", "Paused"] : ["ready", "Ready"];
}

export function createStudioFeedback(getState) {
  const badge = document.getElementById("studioStatus");
  let previous = "";
  document.getElementById("dismissNotification").onclick = () => {
    document.getElementById("studioNotification").hidden = true;
    clearTimeout(notificationTimer);
  };
  const lightingButton = document.getElementById("lightingOpen");
  if (lightingButton)
    document.getElementById("workspaceLighting").append(lightingButton);
  const trialCount = document.getElementById("stressCount");
  const trialRun = document.getElementById("stressRun");
  if (trialCount && trialRun) {
    const empty = document.createElement("div");
    empty.id = "stressEmpty";
    empty.className = "emptyState";
    const heading = document.createElement("strong");
    const detail = document.createElement("p");
    empty.append(heading, detail);
    document.getElementById("stressGrid").before(empty);
    const refreshTrials = () => {
      empty.hidden = Number.parseInt(trialCount.textContent, 10) > 0;
      heading.textContent = trialRun.disabled
        ? "Waiting for the first result"
        : "No trial results yet";
      detail.textContent = trialRun.disabled
        ? "Completed trials will appear below. You can stop the sweep and keep completed results."
        : "Choose a robot and run a sweep. Start with 25 worlds for a quick check; select a completed cell to inspect its rollout.";
    };
    const observer = new MutationObserver(refreshTrials);
    observer.observe(trialCount, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    observer.observe(trialRun, {
      attributes: true,
      attributeFilter: ["disabled"],
    });
    refreshTrials();
  }
  const hints = {
    run: "Run or pause the current task",
    reset: "Reset the current episode",
    restoreView: "Return to the workspace view before using presets",
    bookmarkSave: "Save current joints and gripper in this browser",
    bookmarkMove: "Move using joint servos; no collision planning",
    bookmarkStop: "Stop the bookmark move at the current pose",
    bookmarkDelete: "Remove the selected saved pose",
    download: "Prepare a ZIP of this robot's recorded episodes",
    record: "Start or finish recording an episode",
    recorderToggle: "Expand or collapse recording controls",
    sidebarToggle: "Show or hide studio controls",
  };
  for (const [id, title] of Object.entries(hints)) {
    const element = document.getElementById(id);
    if (element) element.title = title;
  }
  return {
    refresh() {
      const [kind, label] = describeStudioState(getState());
      if (previous === kind + label) return;
      previous = kind + label;
      badge.dataset.state = kind;
      badge.textContent = label;
    },
  };
}
