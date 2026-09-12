function createExperimentConfig({
  getCameras: s,
  validateCameras: e,
  getLighting: t,
  reset: n,
  save: r,
  isBusy: i,
  hasData: c,
}) {
  let o = (H) => document.getElementById(H),
    h = [
      "robot",
      "scene",
      "task",
      "object",
      "physicsMode",
      "effortScale",
      "seed",
      "mass",
      "friction",
      "variation",
      "trialDifficulty",
      "rgb",
    ],
    d = document.createElement("details");
  ((d.open = !0),
    (d.innerHTML =
      '<summary>Experiment recipe</summary><label for="experimentName">Name</label><input id="experimentName" maxlength="80" value="My experiment"><div class="fieldPair"><button id="experimentSave" type="button">Save recipe</button><button id="experimentLoad" type="button">Load recipe</button></div><input id="experimentFile" type="file" accept=".json,application/json" hidden><p class="note">Portable setup: task, robot, seed, physics controls, lighting and cameras. Loading resets the task. Episodes and runtime state are not included.</p><p id="experimentStatus" class="note" role="status" aria-live="polite"></p>'),
    o("panel-experiment").prepend(d));
  function f() {
    return {
      format: "armature-experiment",
      version: 1,
      name: o("experimentName").value.trim() || "Untitled experiment",
      simulator: "armature-recipes-v1",
      controller: "scripted-IK-v1",
      controls: Object.fromEntries(
        h
          .filter((H) => o(H))
          .map((H) => [
            H,
            o(H).type === "checkbox" ? o(H).checked : o(H).value,
          ]),
      ),
      cameras: s(),
      lighting: t(),
    };
  }
  function p(H) {
    let P = JSON.parse(JSON.stringify(H));
    if (P?.format !== "armature-experiment" || P.version !== 1)
      throw Error("Unsupported recipe format or version.");
    if (
      typeof P.name != "string" ||
      P.name.length > 80 ||
      P.controller !== "scripted-IK-v1"
    )
      throw Error("Invalid recipe name or controller.");
    for (let y of h) {
      let O = o(y);
      if (!O) continue;
      let D = P.controls?.[y];
      if (O.type === "checkbox") {
        if (typeof D != "boolean") throw Error("Invalid " + y);
      } else if (O.tagName === "SELECT") {
        if (![...O.options].some((L) => L.value === D))
          throw Error("Unsupported " + y);
      } else {
        let L = Number(D);
        if (
          typeof D != "string" ||
          !D.trim() ||
          !Number.isFinite(L) ||
          (O.min !== "" && L < Number(O.min)) ||
          (O.max !== "" && L > Number(O.max)) ||
          (y === "seed" && !Number.isInteger(L))
        )
          throw Error("Invalid " + y);
      }
    }
    if (P.controls.physicsMode === "dynamic" && P.controls.robot !== "panda")
      throw Error("Dynamic mode requires Panda.");
    if (
      P.controls.task === "lights" &&
      (P.controls.robot !== "panda" || P.controls.scene !== "kitting")
    )
      throw Error("Light switch requires Panda in the kitting cell.");
    e(P.cameras);
    let X = P.lighting;
    if (
      X?.version !== "armature-lighting-v1" ||
      !["workOn", "varyPerEpisode", "manualAdjusted"].every(
        (y) => typeof X[y] == "boolean",
      )
    )
      throw Error("Invalid lighting configuration.");
    if (![...o("lightingPreset").options].some((y) => y.value === X.preset))
      throw Error("Unknown lighting preset.");
    for (let [y, O, D] of [
      ["workBrightness", 0.1, 1.5],
      ["roomFill", 0, 1],
      ["viewEV", -2, 2],
      ["sensorEV", -2, 2],
      ["lightingSeed", 0, 4294967295],
    ])
      if (!Number.isFinite(X[y]) || X[y] < O || X[y] > D)
        throw Error("Invalid lighting " + y);
    for (let [y, O, D] of [
      ["keyPosition", -8, 8],
      ["keyColor", 0, 1],
    ])
      if (
        !Array.isArray(X[y]) ||
        X[y].length !== 3 ||
        !X[y].every((L) => Number.isFinite(L) && L >= O && L <= D)
      )
        throw Error("Invalid lighting " + y);
    if (X.keyPosition[1] < 0.3 || !Number.isInteger(X.lightingSeed))
      throw Error("Invalid lighting position or seed.");
    return P;
  }
  function b(H) {
    if (i())
      throw Error(
        "Pause playback and stop recording or replay before loading a recipe.",
      );
    if (c())
      throw Error(
        "Download your episodes, then reload the HTML before loading a recipe.",
      );
    let P = p(H),
      X = f(),
      y = (O) => {
        for (let D of h) {
          let L = o(D);
          L &&
            (L.type === "checkbox"
              ? (L.checked = O.controls[D])
              : (L.value = O.controls[D]));
        }
        ((o("experimentName").value = O.name),
          n({ lighting: O.lighting, cameras: O.cameras }));
      };
    try {
      y(P);
    } catch (O) {
      throw (y(X), O);
    }
    return (
      (o("experimentStatus").textContent =
        "Loaded " + P.name + ". Initial setup restored; ready to run."),
      f()
    );
  }
  return (
    (o("experimentSave").onclick = () => {
      try {
        if (i())
          throw Error(
            "Pause playback and stop recording or replay before saving a recipe.",
          );
        let H = p(f());
        (r(
          JSON.stringify(H, null, 2),
          "armature-experiment.json",
          "application/json",
        ),
          (o("experimentStatus").textContent =
            "Recipe saved. Load it in this version of the HTML to repeat the setup."));
      } catch (H) {
        o("experimentStatus").textContent = H.message;
      }
    }),
    (o("experimentLoad").onclick = () => o("experimentFile").click()),
    (o("experimentFile").onchange = async (H) => {
      let P = H.target.files[0];
      try {
        if (!P) return;
        if (P.size > 128 * 1024) throw Error("Recipe exceeds 128 KB.");
        b(JSON.parse(await P.text()));
      } catch (X) {
        o("experimentStatus").textContent = X.message;
      } finally {
        H.target.value = "";
      }
    }),
    { snapshot: f, validate: p, load: b }
  );
}
export { createExperimentConfig };
