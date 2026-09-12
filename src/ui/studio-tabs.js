import { TRIAL_TASKS } from "../experiments/trials.js";
function initializeStudioTabs(showRecorder) {
  let u = (v) => document.getElementById(v),
    a = [...document.querySelectorAll("#controlPanel [role=tab]")];
  function l(v, m = !1) {
    for (let x of a) {
      let w = x === v;
      (x.setAttribute("aria-selected", String(w)),
        (x.tabIndex = w ? 0 : -1),
        (u(x.getAttribute("aria-controls")).hidden = !w));
    }
    ((document.getElementById("controlContext").textContent =
      v.textContent.trim()),
      m && v.focus(),
      (document.querySelector(".controlContent").scrollTop = 0));
  }
  ((u("openRecorderSidebar").onclick = () => showRecorder(!0)),
    a.forEach((v, m) => {
      (v.addEventListener("click", () => l(v)),
        v.addEventListener("keydown", (x) => {
          let w;
          if (x.key === "ArrowRight") w = (m + 1) % a.length;
          else if (x.key === "ArrowLeft") w = (m + a.length - 1) % a.length;
          else if (x.key === "Home") w = 0;
          else if (x.key === "End") w = a.length - 1;
          else return;
          (x.preventDefault(), l(a[w], !0));
        }));
    }),
    u("configureExperiment").addEventListener("click", () =>
      l(u("tab-experiment"), !0),
    ));
}
function syncStudioControls() {
  let u = document.getElementById("task"),
    a = u.value === "insert";
  ((document.getElementById("insertionNote").hidden = !a),
    (document.getElementById("object").disabled = a || !!TRIAL_TASKS[u.value]),
    TRIAL_TASKS[u.value] &&
      (document.getElementById("object").value = "blocks"),
    a && (document.getElementById("object").value = "insertion_peg"),
    (document.getElementById("experimentTask").textContent =
      u.selectedOptions[0].textContent),
    (document.querySelector("label[for=seed]").textContent = "Episode seed"));
}
export { syncStudioControls, initializeStudioTabs };
