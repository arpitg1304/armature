import { MEMORY_ENABLED } from "../features.js";
function initializeControlTabs() {
  let n = (r) => document.getElementById(r),
    e = [...document.querySelectorAll("#controlPanel [role=tab]")];
  function t(r, c = !1) {
    for (let i of e) {
      let v = i === r;
      (i.setAttribute("aria-selected", String(v)),
        (i.tabIndex = v ? 0 : -1),
        (n(i.getAttribute("aria-controls")).hidden = !v));
    }
    (c && r.focus(), (document.querySelector(".controlContent").scrollTop = 0));
  }
  (e.forEach((r, c) => {
    (r.addEventListener("click", () => t(r)),
      r.addEventListener("keydown", (i) => {
        let v;
        if (i.key === "ArrowRight") v = (c + 1) % e.length;
        else if (i.key === "ArrowLeft") v = (c + e.length - 1) % e.length;
        else if (i.key === "Home") v = 0;
        else if (i.key === "End") v = e.length - 1;
        else return;
        (i.preventDefault(), t(e[v], !0));
      }));
  }),
    n("configureExperiment").addEventListener("click", () =>
      t(n("tab-experiment"), !0),
    ));
}
function syncControlSummary() {
  let n = (t) => document.getElementById(t);
  if (!MEMORY_ENABLED || !n("controlPanel")) return;
  let e = n("task").value.startsWith("memory_");
  ((n("memorySettingsHost").hidden = !e),
    (n("episodeSettings").hidden = e),
    (n("experimentHeading").textContent = e
      ? "Memory experiment"
      : "Episode setup"),
    (n("experimentTask").textContent =
      n("task").selectedOptions[0].textContent),
    (document.querySelector("label[for=seed]").textContent = e
      ? "Cue seed"
      : "Episode seed"),
    (n("configureExperiment").textContent = e
      ? "Configure memory trial \u2192"
      : "Experiment settings \u2192"),
    (n("controlContext").textContent = e ? "Memory Lab" : "Scene setup"));
}
export { syncControlSummary, initializeControlTabs };
