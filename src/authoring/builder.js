import { Ul } from "../../vendor/three-addons.js";
import { createImportDialog } from "./import-dialog.js";
import {
  vs,
  Kn,
  projectFromEnvironment,
  rh,
  validateProject,
  F7,
  Ra,
  E7,
  createStage,
  ih,
  validateTask,
  Ia,
  q7,
  D3,
} from "./project.js";
import {
  m3,
  collisionDescription,
  parseImportedAsset,
  l7,
  prepareImportedVisual,
} from "./import-assets.js";
import { Or, qa, Ao, Fa } from "./skills.js";
var sn = (s) =>
    String(s ?? "").replace(
      /[&<>"']/g,
      (e) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[e],
    ),
  Ca = (s, e, t, n = "") =>
    `<label for="${e}">${s}</label><input id="${e}" value="${sn(t)}" ${n}>`,
  Cr = (s, e, t, n, r, i = 0.001) =>
    Ca(s, e, t, `type="number" min="${n}" max="${r}" step="${i}"`),
  Bn = (s, e, t) =>
    `<option value="${sn(s)}" ${s === t ? "selected" : ""}>${sn(e)}</option>`;
function createSceneBuilder(s) {
  let {
      T: e,
      scene: t,
      camera: n,
      canvas: r,
      getEnv: i,
      reset: c,
      getVisuals: o,
      getFixtures: h,
      save: d,
      getState: f,
      pause: p,
      start: b,
      types: H,
      getSpec: P,
    } = s,
    X = (I) => document.getElementById(I),
    y = X("panel-scene"),
    O = document.createElement("div");
  for (O.id = "composerPresets"; y.firstChild;) O.append(y.firstChild);
  y.append(O);
  let D = document.createElement("nav");
  ((D.className = "buildNavigation"),
    D.setAttribute("aria-label", "Setup workspace"),
    (D.innerHTML =
      '<button id="buildPresets" aria-pressed="true">Presets</button><button id="buildScene" aria-pressed="false">Scene composer</button><button id="buildTask" aria-pressed="false">Task builder</button>'),
    y.prepend(D));
  let L = document.createElement("div");
  ((L.id = "builderPanel"),
    (L.className = "builderPanel"),
    (L.hidden = !0),
    y.append(L));
  let g = document.createElement("div");
  ((g.className = "buildEntry"),
    (g.innerHTML =
      '<b>Build your own experiment</b><p>Arrange parts and fixtures, then define the steps and success conditions.</p><button id="buildOpen" class="wide">Open scene composer \u2192</button>'),
    O.prepend(g));
  let q = document.createElement("div");
  ((q.id = "buildInspector"),
    (q.className = "buildInspector"),
    q.setAttribute("aria-label", "Selection inspector"),
    (q.hidden = !0));
  let F = document.createElement("div");
  ((F.id = "buildToolbar"),
    (F.className = "buildToolbar"),
    (F.hidden = !0),
    (F.innerHTML =
      '<div class="buildToolGroup" aria-label="Transform mode"><button data-transform="translate" aria-pressed="true" title="Move (W)">Move</button><button data-transform="rotate" aria-pressed="false" title="Rotate (E)">Rotate</button><button data-transform="scale" aria-pressed="false" title="Scale (R)">Scale</button></div><label><input id="buildSnap" type="checkbox" checked> Snap</label><button id="buildUndo" title="Undo (Ctrl/\u2318 Z)" aria-label="Undo">\u21B6</button><button id="buildRedo" title="Redo (Ctrl/\u2318 Shift Z)" aria-label="Redo">\u21B7</button><button id="buildFrame" title="Frame selection (F)">Frame</button>'));
  let T = document.createElement("div");
  ((T.className = "buildLive"),
    (T.id = "buildLive"),
    (T.hidden = !0),
    T.setAttribute("role", "status"),
    T.setAttribute("aria-live", "polite"));
  let C = document.querySelector("main");
  C.append(q, F, T);
  let M = document.createElement("input");
  ((M.type = "file"),
    (M.accept = ".json,application/json"),
    (M.hidden = !0),
    y.append(M));
  let E = new e.Group();
  ((E.name = "Authoring helpers"), t.add(E));
  let W = new e.Group();
  ((W.name = "Authored target zones"), t.add(W));
  let $ = new e.Object3D();
  t.add($);
  let J = new Ul(n, r);
  (J.setSize(0.8),
    J.setTranslationSnap(0.01),
    J.setRotationSnap(Math.PI / 12),
    J.setScaleSnap(0.1),
    t.add(J),
    (J.enabled = !1));
  let U = new e.Box3Helper(new e.Box3(), 12840820);
  ((U.material.depthTest = !1),
    (U.renderOrder = 999),
    E.add(U),
    (U.visible = !1));
  let Z = new e.GridHelper(1.6, 32, 5402995, 3491662);
  ((Z.position.y = 0.002),
    (Z.material.transparent = !0),
    (Z.material.opacity = 0.3),
    E.add(Z),
    (E.visible = !1));
  let ee = new Map(),
    ae = new Map(),
    oe = new Map(),
    de = new Set(),
    le = null,
    se = "presets",
    xe = null,
    me = null,
    Le = null,
    Se = "pickPlace",
    rt = "",
    tt = "",
    ot = { depth: 0.05, destination: "" },
    Ot = [],
    Ze = [],
    Nt = null,
    De = !1,
    Kt = 0,
    fe = 0,
    Oe = "",
    Me = "",
    ke = !1,
    Ee = null;
  try {
    Ee = localStorage.getItem("armature.authoring.v1");
  } catch {}
  if (Ee) {
    let I = document.createElement("button");
    ((I.textContent = "Open saved draft"),
      (I.className = "wide"),
      (I.onclick = () => qe(() => Xs(JSON.parse(Ee)))),
      g.append(I));
  }
  let Q = () => le?.entities.find((I) => I.id === xe),
    A = () => se !== "presets" && !y.hidden,
    Pe = createImportDialog({
      T: e,
      notify: Ce,
      canOpen() {
        if (f().running || f().training || f().recording || f().replay)
          throw Error(
            "Pause and finish recording or replay before importing objects.",
          );
        Be();
      },
      accept(I, k, te) {
        let re = vs("mesh");
        (ee.set(I.id, k.root.clone(!0)),
          ae.set(I.id, m3(I)),
          oe.set(I.id, k.parts),
          yt(
            (He) => {
              ((He.assets = Object.fromEntries(
                Object.entries(He.assets || {}).filter(([pt]) =>
                  He.entities.some((wt) => wt.assetId === pt),
                ),
              )),
                (He.assets[I.id] = I));
              let Te = k.dimensions,
                Fe = { kind: te.collision };
              Fe.kind === "mesh-boxes" && (Fe.parts = Kn(k.parts));
              let ct = {
                id: re,
                name: te.name,
                role: te.role,
                type: "glb",
                assetId: I.id,
                dimensions: Te,
                position: Ke(Te),
                rotation: [0, 0, 0],
                scale: 1,
                mass: te.mass,
                friction: te.friction,
                color: "#90abb9",
                collision: Fe,
              };
              (He.entities.push(ct), (xe = ct.id));
            },
            te.name +
              " added. " +
              (te.collision === "mesh-boxes"
                ? k.parts.length + " compound collision boxes."
                : "Fitted box collision."),
          ),
          s.frame(le.entities.find((He) => He.id === re).position));
      },
    });
  function Ke(I) {
    let k = i(),
      te = [k.model.spawnX, k.model.goalX, 0.02, 0.32, -0.08],
      re = [-0.18, 0.18, -0.35, 0.35, -0.5, 0.5, 0];
    for (let He of re)
      for (let Te of te)
        if (
          !(Math.abs(Te) + I[0] / 2 > 0.72 || Math.abs(He) + I[2] / 2 > 0.65) &&
          !le.entities.some(
            (Fe) =>
              Fe.role !== "zone" &&
              Math.abs(Fe.position[0] - Te) <
                (Math.hypot(Fe.dimensions[0], Fe.dimensions[2]) * Fe.scale +
                  I[0]) /
                  2 +
                  0.02 &&
              Math.abs(Fe.position[2] - He) <
                (Math.hypot(Fe.dimensions[0], Fe.dimensions[2]) * Fe.scale +
                  I[2]) /
                  2 +
                  0.02,
          )
        )
          return [Te, I[1] / 2 + 0.001, He];
    throw Error(
      "Clear some space on the table or reduce this object\u2019s size before adding it.",
    );
  }
  function Ce(I) {
    Me = I;
    let k = X("buildMessage");
    k && (k.textContent = I);
  }
  function _e() {
    (Ot.push(Kn(le)), Ot.length > 40 && Ot.shift(), (Ze = []));
  }
  function bt() {
    ((ke = !0), fe++);
    try {
      (localStorage.setItem("armature.authoring.v1", JSON.stringify(le)),
        (ke = !1));
    } catch {
      Ce("Local draft is full. Export the project to keep these changes.");
    }
    let I = X("buildSaveState");
    I && (I.textContent = ke ? "Export to save" : "Draft saved on this device");
  }
  function Be() {
    le ||
      ((le = projectFromEnvironment(i())),
      (le.sceneTheme = X("scene").value),
      rh(le, "kit"),
      (xe = le.entities[0]?.id),
      be(),
      Ee
        ? ((ke = !0),
          (Me = "A previous draft is available under Project tools."))
        : bt());
  }
  function ut() {
    return {
      robotId: le.robotId,
      physicsMode: le.physicsMode,
      task: "transfer",
      composition: Kn(le),
      randomize: !1,
      seed: le.seed || 1,
      maxSteps: Math.min(
        24e3,
        Math.max(
          1800,
          Math.ceil(
            (le.task.stages.reduce(
              (I, k) => I + k.timeout * (k.retries + 1),
              0,
            ) +
              20) *
              30,
          ),
        ),
      ),
    };
  }
  function Pt() {
    if (f().training || f().replay || f().recording)
      throw Error("Finish recording, replay or training before editing.");
    (p(),
      le.sceneTheme &&
        [...X("scene").options].some((k) => k.value === le.sceneTheme) &&
        (X("scene").value = le.sceneTheme),
      c(ut()));
    let I = X("task").querySelector('option[value="authored"]');
    (I ||
      ((I = document.createElement("option")),
      (I.value = "authored"),
      X("task").prepend(I)),
      (I.textContent = "Custom \xB7 " + le.task.name),
      (X("task").value = "authored"),
      (X("object").disabled = !0),
      (X("experimentTask").textContent = le.task.name),
      Qe(),
      (Oe = ""));
  }
  function yt(I, k = "Updated") {
    if (f().running || f().training || f().recording || f().replay)
      throw Error(
        "Pause the task and finish recording or replay before editing.",
      );
    let te = Kn(le);
    try {
      (I(le), (le = validateProject(le, H)));
    } catch (re) {
      throw ((le = te), re);
    }
    (Ot.push(te),
      Ot.length > 40 && Ot.shift(),
      (Ze = []),
      Pt(),
      bt(),
      it(),
      Ce(k));
  }
  function qe(I) {
    try {
      let k = I();
      return (k?.catch && k.catch((te) => Ce(te.message)), k);
    } catch (k) {
      Ce(k.message);
    }
  }
  function It(I) {
    if (I !== "presets") {
      if (f().training || f().replay || f().recording) {
        Ce("Finish recording, replay or training before opening the builder.");
        return;
      }
      (Be(),
        !i().config.composition || (I === "scene" && i().steps > 0)
          ? (Pt(),
            I === "scene" &&
              Ce(
                "Editing the initial scene. Run the task to test this layout.",
              ))
          : p());
    }
    Et(I);
  }
  function Et(I) {
    ((se = I), (O.hidden = se !== "presets"), (L.hidden = se === "presets"));
    for (let [k, te] of [
      ["buildPresets", "presets"],
      ["buildScene", "scene"],
      ["buildTask", "task"],
    ])
      X(k).setAttribute("aria-pressed", String(se === te));
    (it(), jt());
  }
  function jt() {
    let I = A();
    (C.classList.toggle("authoring", I),
      C.classList.toggle("taskAuthoring", I && se === "task"),
      (F.hidden = !I || se !== "scene"),
      (q.hidden = !I),
      (T.hidden = !I || se !== "task"),
      (E.visible = I && se === "scene"),
      (J.enabled = I && se === "scene" && !f().running && !!Q()),
      J.enabled ? Ht() : J.detach(),
      (W.visible = !!i().config.composition));
  }
  function Ht() {
    if (Nt) return;
    let I = Q();
    if (!I || !A() || se !== "scene" || f().running) {
      (J.detach(), (U.visible = !1));
      return;
    }
    ((De = !0),
      $.position.fromArray(I.position),
      $.rotation.set(...I.rotation.map((te) => (te * Math.PI) / 180), "XYZ"),
      $.scale.setScalar(I.scale),
      $.updateMatrixWorld(!0),
      J.attach($),
      (De = !1));
    let k = ie(I.id);
    k && (k.updateMatrixWorld(!0), U.box.setFromObject(k), (U.visible = !0));
  }
  function dt() {
    return [
      ...o().map((I, k) => ({ root: I, id: i().objects[k]?.composerId })),
      ...h().map(({ root: I, id: k }) => ({ root: I, id: k })),
      ...W.children.map((I) => ({ root: I, id: I.userData.entityId })),
    ];
  }
  function ie(I) {
    return dt().find((k) => k.id === I)?.root;
  }
  function Qe() {
    for (let I of [...W.children])
      (W.remove(I),
        I.traverse((k) => {
          (k.geometry?.dispose(), k.material?.dispose());
        }));
    if (!i().config.composition) {
      W.visible = !1;
      return;
    }
    for (let I of le?.entities || [])
      if (I.role === "zone") {
        let k = new e.Group();
        k.userData.entityId = I.id;
        let te = I.dimensions,
          re = new e.Mesh(
            new e.BoxGeometry(te[0], 0.002, te[2]),
            new e.MeshBasicMaterial({
              color: I.color,
              transparent: !0,
              opacity: 0.16,
              depthWrite: !1,
            }),
          ),
          He = new e.LineSegments(
            new e.EdgesGeometry(re.geometry),
            new e.LineBasicMaterial({
              color: I.color,
              transparent: !0,
              opacity: 0.8,
            }),
          );
        (k.add(re, He),
          k.position.fromArray(I.position),
          (k.position.y += 0.003),
          k.rotation.set(
            ...I.rotation.map((Te) => (Te * Math.PI) / 180),
            "XYZ",
          ),
          k.scale.setScalar(I.scale),
          W.add(k));
      } else if (I.type === "glb" && ee.has(I.assetId)) {
        let k = ie(I.id);
        if (k) {
          for (let te of [...k.children])
            (k.remove(te), te.geometry?.dispose(), te.material?.dispose());
          k.add(ee.get(I.assetId).clone(!0));
        }
      }
    Ht();
  }
  function mt(I) {
    xe = I;
    let k = Q();
    (k?.role === "zone"
      ? (tt = I)
      : ["part", "distractor"].includes(k?.role) && (rt = I),
      Ct(),
      lt(),
      Ht());
  }
  function at(I) {
    ((me = I), (Le = null));
    let k = le.task.stages.find((te) => te.id === I);
    (k?.object && (xe = k.object), k?.blockId && de.add(k.blockId), Ct(), lt());
  }
  function R(I) {
    ((Le = I), (me = null));
    let k = le.task.blocks?.find((te) => te.id === I);
    (k?.object && (xe = k.object), Ct(), lt());
  }
  function be() {
    let I = le.task.stages[0];
    ((Le = I?.blockId || null), (me = Le ? null : I?.id || null));
  }
  function nt(I, k, te, re, He = "pickPlace", Te = {}) {
    let Fe = Or[He],
      ct = qa(le, He, te);
    return `<label for="${I}">${Fe.objectLabel}</label><select id="${I}">${Bn("", "Choose " + Fe.objectLabel.toLowerCase(), te)}${ct.objects.map((pt) => Bn(pt.id, pt.name, te)).join("")}</select><label for="${k}">${Fe.targetLabel}</label><select id="${k}">${Bn("", "Choose " + Fe.targetLabel.toLowerCase(), re)}${ct.targets.map((pt) => Bn(pt.id, pt.name, re)).join("")}</select>${He === "insert" ? Cr("Minimum insertion depth \xB7 mm", I + "Depth", (Te.depth ?? 0.05) * 1e3, 5, 400, 1) : ""}${He === "extract" ? `<label for="${I}Destination">Destination zone</label><select id="${I}Destination">${Bn("", "Choose a destination", Te.destination)}${ct.zones.map((pt) => Bn(pt.id, pt.name, Te.destination)).join("")}</select>` : ""}`;
  }
  function Y(I, k, te = {}) {
    return {
      ...te,
      ...(k === "insert" ? { depth: Number(X(I + "Depth").value) / 1e3 } : {}),
      ...(k === "extract" ? { destination: X(I + "Destination").value } : {}),
    };
  }
  function ze(I) {
    let k = (te) =>
      le.entities.find((re) => re.id === te)?.name || "Choose an input";
    return I.kind === "press"
      ? "Red table light switch \u2192 " + (I.target === "on" ? "On" : "Off")
      : k(I.object) +
          " \u2192 " +
          k(I.target) +
          (I.kind === "extract" ? " \u2192 " + k(I.destination) : "");
  }
  function Ge() {
    let { objects: I } = qa(le, Se),
      k = new Set(le.task.stages.map((Te) => Te.object)),
      te = new Set(le.task.stages.map((Te) => Te.target));
    rt =
      I.find((Te) => Te.id === rt)?.id ||
      I.find((Te) => Te.id === xe && !k.has(Te.id))?.id ||
      I.find((Te) => !k.has(Te.id))?.id ||
      I[0]?.id ||
      "";
    let { targets: re, zones: He } = qa(le, Se, rt);
    ((tt =
      re.find((Te) => Te.id === tt)?.id ||
      re.find((Te) => Te.id === xe)?.id ||
      re.find((Te) => !te.has(Te.id))?.id ||
      re[I.findIndex((Te) => Te.id === rt) % Math.max(1, re.length)]?.id ||
      ""),
      He.some((Te) => Te.id === ot.destination) ||
        (ot.destination = He[0]?.id || ""));
  }
  function st(I) {
    let k = le.task.blocks?.find((He) => He.id === I),
      te = le.task.stages.findIndex((He) => He.id === I || He.blockId === I);
    (yt(
      (He) => {
        F7(He, I);
        let Te = He.task.stages[Math.min(te, He.task.stages.length - 1)];
        ((Le = Te?.blockId && (k || !de.has(Te.blockId)) ? Te.blockId : null),
          (me = Le ? null : Te?.id || null));
      },
      k
        ? "Skill block deleted. Undo is available."
        : "Stage deleted. Undo is available.",
    ),
      (
        [...X("buildList").querySelectorAll("[data-block],[data-stage]")].find(
          (He) => He.dataset.block === Le || He.dataset.stage === me,
        ) || X("taskUndo")
      ).focus({ preventScroll: !0 }));
  }
  function it() {
    if (!le || se === "presets") return;
    let I = X("buildAdvanced")?.open,
      k = X("buildList")?.scrollTop || 0;
    if (
      (le.task.blocks?.some((te) => te.id === Le) || (Le = null),
      le.task.stages.some((te) => te.id === me) || (me = null),
      !Le && !me && be(),
      se === "task" && Ge(),
      (L.innerHTML = `<div class="buildHeading"><div><span class="buildKicker">${se === "scene" ? "SCENE COMPOSER" : "TASK BUILDER"}</span><h2>${se === "scene" ? "Your workcell" : "Define the sequence"}</h2></div><span class="buildCount">${se === "scene" ? le.entities.length + " items" : le.task.stages.length + " stages"}</span></div>
      ${Ca(se === "scene" ? "Project name" : "Task name", "buildName", se === "scene" ? le.name : le.task.name, 'maxlength="100"')}
      <div class="buildFileActions"><button id="buildExport">Export project</button><button id="buildImport">Open project</button></div><p class="buildMeta" id="buildSaveState">${ke ? "Export to save" : "Draft saved on this device"}</p>
      ${
        se === "scene"
          ? `<div class="buildAdd"><select id="buildAsset" aria-label="Object to add">${[
              ["blocks", "Block"],
              ["pegs", "Peg"],
              ["insertion_peg", "Long insertion peg"],
              ["socket", "Holed cube"],
              ["cans", "Can"],
              ["bottles", "Bottle"],
              ["tiles", "Circuit module"],
              ["spools", "Spool"],
              ["fruit", "Sphere"],
              ["box", "Fixed fixture"],
              ["zone", "Target zone"],
            ]
              .map(([te, re]) => Bn(te, re, "blocks"))
              .join(
                "",
              )}</select><button id="buildAdd" class="primary">+ Add</button></div><button id="buildMesh" class="buildQuiet">Import object\u2026 <span class="buildMeta">GLB \xB7 STL \xB7 OBJ</span></button><p class="buildMeta">Select an object in the viewport or list.</p>`
          : `<div class="buildPickPlace"><span class="buildKicker">ADD A SKILL</span><label class="buildSkillLabel" for="buildSkill">Skill</label><select id="buildSkill">${Object.entries(
              Or,
            )
              .map(([te, re]) => Bn(te, re.label, Se))
              .join(
                "",
              )}</select><p class="buildMeta">${Or[Se].description}</p>${nt("buildPairObject", "buildPairTarget", rt, tt, Se, ot)}<button id="buildAddPickPlace" class="wide primary">+ Add ${sn(Or[Se].label.toLowerCase())}</button><p class="buildMeta" id="buildPairHint"></p>${["insert", "extract"].includes(Se) ? '<button id="buildPrepareSkill" class="buildQuiet">Add peg + holed cube</button>' : Se === "press" && (le.robotId !== "panda" || le.sceneTheme !== "kitting") ? '<button id="buildPrepareSkill" class="buildQuiet">Use Panda kitting cell</button>' : ""}</div><details id="buildAdvanced" class="buildDetails"><summary>Advanced sequence tools</summary><label for="buildStageType">Add an individual stage</label><div class="buildAdd"><select id="buildStageType">${Object.entries(
              Ra,
            )
              .filter(([te]) => !Object.hasOwn(Ao, te))
              .map(([te, re]) => Bn(te, re, "grasp"))
              .join(
                "",
              )}</select><button id="buildAddStage">+ Stage</button></div><label for="buildTemplate">Replace the entire sequence</label><select id="buildTemplate"><option value="pick">Pick &amp; place one part</option><option value="kit">Ordered parts kitting</option><option value="stack">Stack parts</option></select><button id="buildUseTemplate" class="wide">Replace sequence</button><p class="buildMeta">Uses parts and targets in scene order. Undo restores the previous sequence.</p></details>`
      }
      ${se === "task" ? '<div class="buildFileActions"><button id="taskUndo">\u21B6 Undo</button><button id="taskRedo">\u21B7 Redo</button></div>' : ""}<div id="buildList" class="buildList" aria-label="${se === "scene" ? "Scene objects" : "Task stages"}"></div>
      ${se === "task" ? '<label class="buildCheck"><input id="buildProtect" type="checkbox" ' + (le.task.protectDistractors ? "checked" : "") + '> Keep distractors within 15 mm</label><div id="buildValidation" class="buildValidation"></div><div class="buildFileActions"><button id="buildRun" class="primary">\u25B6 Run task</button><button id="buildReset">Reset scene</button></div><button id="buildReport" class="buildQuiet">Download run report</button>' : '<button id="buildContinue" class="wide primary">Build the task \u2192</button><details class="buildDetails"><summary>Project tools</summary><button id="buildCapture" class="wide">Use current simulator scene</button><button id="buildRestore" class="wide">Restore saved draft</button><p class="buildMeta">Import objects as GLB, STL or OBJ. Review size, orientation and collision boxes before adding them. Export project includes the imported files.</p></details>'}
      <p id="buildMessage" class="buildMessage" role="status">${sn(Me)}</p>`),
      Yn(),
      (X("buildName").onchange = () =>
        qe(() =>
          yt((te) => {
            se === "scene"
              ? (te.name = X("buildName").value)
              : (te.task.name = X("buildName").value);
          }, "Name updated"),
        )),
      (X("buildExport").onclick = () =>
        d(
          JSON.stringify(le, null, 2),
          "armature-project.json",
          "application/json",
        )),
      (X("buildImport").onclick = () => M.click()),
      se === "scene")
    )
      ((X("buildAdd").onclick = () => qe(() => mi(X("buildAsset").value))),
        (X("buildMesh").onclick = () => Pe.open()),
        (X("buildContinue").onclick = () => It("task")),
        (X("buildCapture").onclick = () =>
          qe(() => {
            (_e(),
              (le = projectFromEnvironment(i())),
              (le.sceneTheme = X("scene").value),
              rh(le, "kit"),
              be(),
              Pt(),
              bt(),
              it(),
              Ce(
                "Current object poses captured. Undo restores your previous project.",
              ));
          })),
        (X("buildRestore").onclick = () =>
          qe(async () => {
            let te = Ee || localStorage.getItem("armature.authoring.v1");
            if (!te) throw Error("No saved draft on this device.");
            await Xs(JSON.parse(te));
          })));
    else {
      let te = () => {
        ((rt = X("buildPairObject").value),
          (tt = X("buildPairTarget").value),
          (ot = Y("buildPairObject", Se, ot)));
        let re = Or[Se].stages.length,
          He = le.task.stages.length + re > 80,
          Te = Fa(le, Se, rt, tt, ot);
        ((X("buildAddPickPlace").disabled = !!Te || He),
          (X("buildPairHint").textContent = He
            ? `This block needs ${re} stages; remove stages to stay within the 80-stage limit.`
            : Te || `Adds ${re} stages to the end of your sequence.`));
      };
      ((X("buildSkill").onchange = () => {
        ((Se = X("buildSkill").value),
          (rt = ""),
          (tt = ""),
          it(),
          X("buildSkill").focus());
      }),
        (X("buildPairObject").onchange = () => {
          (te(), Se === "stack" && (it(), X("buildPairObject").focus()));
        }),
        (X("buildPairTarget").onchange = te),
        X("buildPairObjectDepth") && (X("buildPairObjectDepth").oninput = te),
        X("buildPairObjectDestination") &&
          (X("buildPairObjectDestination").onchange = te),
        te(),
        X("buildPrepareSkill") &&
          (X("buildPrepareSkill").onclick = () => qe(Zt)),
        (X("buildAddPickPlace").onclick = () =>
          qe(() => {
            (yt((He) => {
              let Te = E7(
                He,
                Se,
                X("buildPairObject").value,
                X("buildPairTarget").value,
                Y("buildPairObject", Se, ot),
              );
              ((Le = Te.id),
                (me = null),
                (xe = Te.object),
                (rt = ""),
                (tt = ""));
            }, "Skill block appended. Expand it to tune or delete individual stages."),
              [...X("buildList").querySelectorAll("[data-block]")]
                .find((He) => He.dataset.block === Le)
                ?.scrollIntoView?.({ block: "nearest" }));
          })),
        (X("buildUseTemplate").onclick = () =>
          qe(() => {
            let re = X("buildTemplate").value;
            yt((He) => {
              if (re === "stack") {
                let Te = He.entities.filter((wt) => wt.role === "part"),
                  Fe = He.entities.filter((wt) => wt.role === "zone"),
                  ct = 0,
                  pt = Fe[0]?.position || [i().model.goalX, 0, 0];
                for (let wt = 0; wt < Te.length; wt++) {
                  let qt = Fe[wt];
                  (qt && (qt.position = [pt[0], ct, pt[2]]),
                    (ct += Te[wt].dimensions[1] * Te[wt].scale));
                }
              }
              (rh(He, re === "pick" ? "pick" : "kit"), be());
            }, "Sequence replaced. Undo is available.");
          })),
        (X("buildAddStage").onclick = () =>
          qe(() =>
            yt((re) => {
              let He = createStage(X("buildStageType").value, rt, tt);
              (re.task.stages.push(He), (me = He.id), (Le = null));
            }, "Individual stage appended"),
          )),
        (X("buildProtect").onchange = () =>
          qe(() =>
            yt(
              (re) => (re.task.protectDistractors = X("buildProtect").checked),
            ),
          )),
        (X("taskUndo").disabled = !Ot.length),
        (X("taskRedo").disabled = !Ze.length),
        (X("taskUndo").onclick = () => Zn()),
        (X("taskRedo").onclick = () => Zn(!0)),
        (X("buildRun").onclick = () => qe(fr)),
        (X("buildReset").onclick = () =>
          qe(() => {
            (Pt(), it(), Ce("Scene reset to authored poses."));
          })),
        (X("buildReport").onclick = () => ni()));
    }
    (X("buildAdvanced") && (X("buildAdvanced").open = !!I),
      lt(),
      (X("buildList").scrollTop = k),
      Ct(),
      xt(),
      (X("buildUndo").disabled = !Ot.length),
      (X("buildRedo").disabled = !Ze.length),
      Yn(),
      jt());
  }
  function lt() {
    let I = X("buildList");
    if (I) {
      if (se === "scene")
        I.innerHTML =
          le.entities
            .map(
              (k) =>
                `<button class="buildRow ${k.id === xe ? "selected" : ""}" data-entity="${sn(k.id)}" aria-pressed="${k.id === xe}"><span class="buildSwatch" style="background:${k.color}">${k.role === "zone" ? "\u25CE" : k.role === "fixture" ? "\u25A3" : "\u25C7"}</span><span><b>${sn(k.name)}</b><small>${k.role === "zone" ? "Target zone" : k.role === "fixture" ? "Fixed collider" : k.role === "distractor" ? "Protected distractor" : "Movable part"}</small></span></button>`,
            )
            .join("") ||
          '<p class="buildEmpty">Add a part, a fixture or a target to start composing.</p>';
      else {
        let k = i().taskRunner?.results || [],
          te = new Map(le.task.stages.map((He, Te) => [He.id, Te])),
          re = (He) => {
            let Te = te.get(He.id),
              Fe = k[Te]?.status || "pending";
            return `<div class="buildStageRow"><button class="buildRow buildStage ${He.id === me ? "selected" : ""}" data-stage="${sn(He.id)}" aria-pressed="${He.id === me}" data-result="${Fe}"><span class="buildStepNumber">${Fe === "passed" ? "\u2713" : Fe === "failed" ? "!" : String(Te + 1).padStart(2, "0")}</span><span><b>${sn(He.name)}</b><small>${sn(He.blockId ? Ra[He.kind] : le.entities.find((ct) => ct.id === He.object)?.name || Ra[He.kind])}</small></span></button><button class="buildDelete" data-delete-stage="${sn(He.id)}" aria-label="Delete stage ${Te + 1}: ${sn(He.name)}" title="Delete stage \xB7 Undo available">Delete</button></div>`;
          };
        I.innerHTML =
          ih(le)
            .map((He, Te) => {
              if (!He.block) return re(He.stages[0]);
              let Fe = He.block,
                ct = de.has(Fe.id),
                pt = He.stages.map(
                  (En) => k[te.get(En.id)]?.status || "pending",
                ),
                wt = pt.filter((En) => En === "passed").length,
                qt = pt.includes("failed")
                  ? "failed"
                  : pt.includes("running")
                    ? "running"
                    : wt === He.stages.length
                      ? "passed"
                      : "pending",
                on = ze(Fe);
              return `<section class="buildBlock ${Fe.id === Le || He.stages.some((En) => En.id === me) ? "selected" : ""}" data-result="${qt}" aria-label="${sn(Fe.name + ": " + on)}"><div class="buildBlockHeader"><button class="buildBlockSelect" data-block="${sn(Fe.id)}" aria-pressed="${Fe.id === Le}"><b>${sn(Fe.name)}</b><small>${sn(on)}</small></button><button class="buildDelete" data-delete-block="${sn(Fe.id)}" aria-label="Delete block: ${sn(on)}" title="Delete this block and its ${He.stages.length} stages \xB7 Undo available">Delete</button></div><div class="buildBlockSummary"><button class="buildBlockToggle" data-toggle-block="${sn(Fe.id)}" aria-expanded="${ct}" aria-controls="buildBlockStages${Te}"><span aria-hidden="true">${ct ? "\u25BE" : "\u25B8"}</span> ${ct ? "Hide" : "Show"} ${He.stages.length} stage${He.stages.length === 1 ? "" : "s"}</button><span class="buildBlockProgress ${qt}">${qt === "failed" ? "Failed" : qt === "running" ? "Running \xB7 " : ""}${qt === "failed" ? "" : `${wt}/${He.stages.length} passed`}</span></div><div id="buildBlockStages${Te}" ${ct ? "" : "hidden"}>${He.stages.map(re).join("")}</div></section>`;
            })
            .join("") ||
          '<p class="buildEmpty">Choose a skill and its inputs above to start your sequence.</p>';
      }
      (I.querySelectorAll("[data-entity]").forEach(
        (k) => (k.onclick = () => mt(k.dataset.entity)),
      ),
        I.querySelectorAll("[data-stage]").forEach(
          (k) => (k.onclick = () => at(k.dataset.stage)),
        ),
        I.querySelectorAll("[data-block]").forEach(
          (k) => (k.onclick = () => R(k.dataset.block)),
        ),
        I.querySelectorAll("[data-toggle-block]").forEach(
          (k) =>
            (k.onclick = () => {
              let te = k.dataset.toggleBlock;
              (de.has(te) ? de.delete(te) : de.add(te),
                !de.has(te) &&
                  le.task.stages.find((He) => He.id === me)?.blockId === te &&
                  ((me = null), (Le = te), Ct()));
              let re = I.scrollTop;
              (lt(),
                (I.scrollTop = re),
                [...I.querySelectorAll("[data-toggle-block]")]
                  .find((He) => He.dataset.toggleBlock === te)
                  ?.focus({ preventScroll: !0 }));
            }),
        ),
        I.querySelectorAll("[data-delete-stage],[data-delete-block]").forEach(
          (k) =>
            (k.onclick = () =>
              qe(() => st(k.dataset.deleteStage || k.dataset.deleteBlock))),
        ));
    }
  }
  function xt() {
    if (!X("buildValidation")) return;
    let I = validateTask(le);
    ((X("buildValidation").innerHTML = I.errors.length
      ? `<b>${I.errors.length} thing${I.errors.length === 1 ? "" : "s"} to fix</b>${I.errors.map((k) => `<p>${sn(k)}</p>`).join("")}`
      : `<b>\u2713 Ready to run</b><p>${le.task.stages.length} stages \xB7 checks evaluated at 30 Hz</p>${I.warnings.map((k) => `<p>${sn(k)}</p>`).join("")}`),
      (X("buildRun").disabled = !!I.errors.length));
  }
  function Xt(I, k) {
    return `<div class="buildInspectorHead"><span class="buildKicker">${I}</span><h3>${sn(k)}</h3></div>`;
  }
  function Ct() {
    if (le) {
      if (se === "scene") {
        let I = Q();
        if (!I) {
          q.innerHTML =
            Xt("INSPECTOR", "Select an object") +
            '<p class="buildEmpty">Click a part or target in the scene to edit its properties.</p>';
          return;
        }
        if (
          ((q.innerHTML =
            Xt(I.role === "zone" ? "TARGET ZONE" : "OBJECT", I.name) +
            `<div class="buildInspectorBody">${Ca("Name", "entityName", I.name, 'maxlength="100"')}
      <div class="buildFileActions"><button id="entityDuplicate">Duplicate</button><button id="entityDelete">Delete</button></div>
      <div class="buildFieldTitle">Position <span>metres \xB7 Y up</span></div><div class="buildVector">${["X", "Y", "Z"].map((k, te) => Cr(k, "entityP" + te, I.position[te].toFixed(3), -1.3, 1.3)).join("")}</div>
      <div class="buildFieldTitle">Rotation <span>degrees</span></div><div class="buildVector">${["X", "Y", "Z"].map((k, te) => Cr(k, "entityR" + te, I.rotation[te].toFixed(1), -360, 360, 1)).join("")}</div>
      <div class="buildPair">${Cr("Uniform scale", "entityScale", I.scale, 0.1, 4, 0.05)}${Ca("Color", "entityColor", I.color, 'type="color"')}</div>
      ${I.role === "zone" || ["box", "glb", "socket"].includes(I.type) ? `<div class="buildFieldTitle">${I.role === "zone" ? "Zone size" : I.type === "glb" ? "Imported dimensions" : "Box collider size"} <span>metres, before scale</span></div><div class="buildVector">${["X", "Y", "Z"].map((k, te) => Cr(k, "entityD" + te, I.dimensions[te], 0.005, 1, 0.005)).join("")}</div>` : ""}
      ${I.type === "socket" ? Cr("Socket opening \xB7 mm", "entityHole", I.hole * 1e3, 8, 400, 1) : ""}${I.role === "zone" ? "" : `<button id="entityGround" class="wide">Rest on table</button><details class="buildDetails"><summary>Physics &amp; semantics</summary><label for="entityRole">Role</label><select id="entityRole">${["part", "fixture", "distractor"].map((k) => Bn(k, { part: "Movable part", fixture: "Fixed fixture", distractor: "Protected distractor" }[k], I.role)).join("")}</select><div class="buildPair">${Cr("Mass \xB7 kg", "entityMass", I.mass, 0.005, 5, 0.01)}${Cr("Friction", "entityFriction", I.friction, 0, 2, 0.05)}</div><p class="buildMeta">${I.type === "glb" ? collisionDescription(I) : I.role === "fixture" ? "Fixed body \xB7 zero simulated mass" : "Collider follows position, rotation and scale."}</p></details>`}
      <div class="buildInspectorFooter"><button id="entityApply" class="primary">Apply properties</button><span>Enter to apply</span></div></div>`),
          I.type === "glb")
        ) {
          for (let He = 0; He < 3; He++)
            X("entityD" + He) &&
              ((X("entityD" + He).readOnly = !0),
              (X("entityD" + He).title =
                "Use uniform scale to resize both the mesh and its collider."));
          ((X("entityColor").disabled = !0),
            (X("entityColor").title = "Imported materials are preserved."));
          let k = X("entityRole").closest("details"),
            te = document.createElement("div"),
            re = oe.get(I.assetId) || [];
          ((te.innerHTML =
            '<label for="entityCollision">Collision model</label><select id="entityCollision"><option value="box">One fitted box</option>' +
            (re.length > 1 && re.length <= 64
              ? '<option value="mesh-boxes">Compound boxes \xB7 ' +
                re.length +
                " meshes</option>"
              : "") +
            '</select><p class="buildMeta">Resize with uniform scale to keep geometry and collision aligned.</p>'),
            k.append(te),
            (X("entityCollision").value = I.collision?.kind || "box"));
        }
        ((X("entityApply").onclick = () => qe(_t)),
          q.querySelectorAll("input").forEach((k) =>
            k.addEventListener("keydown", (te) => {
              te.key === "Enter" && (te.preventDefault(), qe(_t));
            }),
          ),
          (X("entityDuplicate").onclick = () =>
            qe(() =>
              yt((k) => {
                let te = Kn(I);
                ((te.id = vs(I.role)),
                  (te.name = I.name + " copy"),
                  (te.position[2] = Math.min(0.8, te.position[2] + 0.09)),
                  k.entities.push(te),
                  (xe = te.id));
              }, "Object duplicated"),
            )),
          (X("entityDelete").onclick = () =>
            qe(() =>
              yt((k) => {
                ((k.entities = k.entities.filter((te) => te.id !== I.id)),
                  (xe = k.entities[0]?.id));
              }, "Object deleted. Referencing stages need a new object. Undo is available."),
            )),
          X("entityGround") &&
            (X("entityGround").onclick = () =>
              qe(() =>
                yt((k) => {
                  let te = k.entities.find((Te) => Te.id === xe),
                    re = new e.Quaternion().setFromEuler(
                      new e.Euler(
                        ...te.rotation.map((Te) => (Te * Math.PI) / 180),
                        "XYZ",
                      ),
                    ),
                    He = new e.Matrix4().makeRotationFromQuaternion(
                      re,
                    ).elements;
                  te.position[1] =
                    ((Math.abs(He[1]) * te.dimensions[0] +
                      Math.abs(He[5]) * te.dimensions[1] +
                      Math.abs(He[9]) * te.dimensions[2]) *
                      te.scale) /
                      2 +
                    0.001;
                }, "Object placed on the table"),
              )));
      } else if (se === "task") {
        let I = le.task.blocks?.find((Fe) => Fe.id === Le);
        if (I) {
          let Fe = le.task.stages.filter((pt) => pt.blockId === I.id);
          q.innerHTML =
            Xt("SKILL \xB7 " + Or[I.kind].label.toUpperCase(), I.name) +
            `<div class="buildInspectorBody">${Ca("Block name", "blockName", I.name, 'maxlength="100"')}${nt("blockObject", "blockTarget", I.object, I.target, I.kind, I)}<p class="buildMeta">These inputs apply to all ${Fe.length} stages in this block. Stage tolerances and retries stay as configured.</p><div class="buildFileActions"><button id="blockUp" ${Ia(le, I.id, -1) ? "" : "disabled"}>\u2191 Earlier</button><button id="blockDown" ${Ia(le, I.id, 1) ? "" : "disabled"}>\u2193 Later</button></div><button id="blockStages" class="wide">Tune individual stages \u2192</button><button id="blockDelete" class="buildQuiet buildDelete">Delete block \xB7 ${Fe.length} stages</button><div class="buildInspectorFooter"><button id="blockApply" class="primary">Apply block</button><span>Enter to apply</span></div></div>`;
          let ct = () =>
            yt((pt) => {
              (q7(
                pt,
                I.id,
                X("blockObject").value,
                X("blockTarget").value,
                Y("blockObject", I.kind, I),
              ),
                (pt.task.blocks.find((wt) => wt.id === I.id).name =
                  X("blockName").value));
            }, "Block inputs updated for every stage.");
          ((X("blockApply").onclick = () => qe(ct)),
            (X("blockObject").onchange = () => {
              if (I.kind === "stack") {
                let pt = X("blockTarget").value;
                X("blockTarget").innerHTML =
                  Bn("", "Choose a supporting object", pt) +
                  qa(le, "stack", X("blockObject").value)
                    .targets.map((wt) => Bn(wt.id, wt.name, pt))
                    .join("");
              }
            }),
            q.querySelectorAll("input").forEach(
              (pt) =>
                (pt.onkeydown = (wt) => {
                  wt.key === "Enter" && (wt.preventDefault(), qe(ct));
                }),
            ));
          for (let [pt, wt] of [
            ["blockUp", -1],
            ["blockDown", 1],
          ])
            X(pt).onclick = () =>
              qe(() => yt((qt) => D3(qt, I.id, wt), "Block order updated"));
          ((X("blockDelete").onclick = () => qe(() => st(I.id))),
            (X("blockStages").onclick = () => {
              at(Fe[0].id);
              let pt = [
                ...X("buildList").querySelectorAll("[data-stage]"),
              ].find((wt) => wt.dataset.stage === Fe[0].id);
              (pt?.scrollIntoView?.({ block: "nearest" }),
                pt?.focus({ preventScroll: !0 }));
            }));
          return;
        }
        let k = le.task.stages.find((Fe) => Fe.id === me);
        if (!k) {
          q.innerHTML =
            Xt("STAGE INSPECTOR", "Select a stage") +
            '<p class="buildEmpty">Choose a stage to edit its goal and success conditions.</p>';
          return;
        }
        let te = le.task.stages.indexOf(k),
          re = !["wait", "retreat"].includes(k.kind),
          He = ["move", "place", "release", "check"].includes(k.kind),
          Te = le.task.blocks?.find((Fe) => Fe.id === k.blockId);
        ((q.innerHTML =
          Xt("STAGE " + String(te + 1).padStart(2, "0"), k.name) +
          `<div class="buildInspectorBody">${Ca("Stage name", "stageName", k.name, 'maxlength="100"')}
      <div class="buildFileActions"><button id="stageUp" ${Ia(le, k.id, -1) ? "" : "disabled"}>\u2191 Earlier</button><button id="stageDown" ${Ia(le, k.id, 1) ? "" : "disabled"}>\u2193 Later</button><button id="stageDelete" class="buildDelete" aria-label="Delete stage">Delete</button></div>
      ${Te ? `<div class="buildBoundInputs"><span class="buildKicker">BLOCK INPUTS</span><p>${sn(ze(Te))}</p><button id="stageEditBlock" class="buildQuiet">Edit block inputs \u2192</button></div>` : ""}
      ${
        re && !Te
          ? `<label for="stageObject">Object</label><select id="stageObject">${Bn("", "Choose an object", k.object)}${le.entities
              .filter((Fe) => ["part", "distractor"].includes(Fe.role))
              .map((Fe) => Bn(Fe.id, Fe.name, k.object))
              .join("")}</select>`
          : ""
      }
      ${
        He && !Te
          ? `<label for="stageTarget">Destination</label><select id="stageTarget">${Bn("", "Choose a target zone", k.target)}${le.entities
              .filter((Fe) => Fe.role === "zone")
              .map((Fe) => Bn(Fe.id, Fe.name, k.target))
              .join("")}</select>`
          : ""
      }
      ${Te ? '<p class="buildMeta">Earlier / Later reorders within this block. Move the whole block from its inspector.</p>' : ""}
      <div class="buildCondition"><span class="buildKicker">PASS WHEN</span><p>${{ grasp: "Both fingers contact this object.", lift: "The object clears its starting height.", move: "The object is carried above the destination.", place: "The object reaches the destination pose.", release: "The object is placed, stable, and released.", retreat: "The tool returns to its home point.", wait: "The requested time has elapsed.", check: "The object stays within the target tolerances.", approachPush: "The tool reaches its approach behind the object.", push: "Finger contact moves the object into the target without lifting it.", settlePush: "The pushed object is settled and the tool has cleared it.", approachButton: "The closed tool is aligned above the switch.", pressButton: "Finger contact depresses the spring-return switch and sets the work lights.", withdrawButton: "The tool is raised and no longer contacts the switch.", graspPeg: "Both fingers contact the upper portion of the peg.", alignPeg: "The upright peg is aligned above the open bore.", insertPeg: "The peg reaches the minimum depth, with less than 5\xB0 tilt and enough lateral clearance.", releasePeg: "The peg remains seated and settled after release.", extractPeg: "The held peg clears the top of the socket by at least 12 mm." }[k.kind]}</p></div>
      ${k.kind === "lift" ? Cr("Minimum lift \xB7 mm", "stageHeight", k.height * 1e3, 20, 400, 5) : ""}
      ${["move", "place", "release", "check", "retreat", "push", "settlePush"].includes(k.kind) ? Cr("Position tolerance \xB7 mm", "stageTolerance", k.tolerance * 1e3, 3, 100, 1) : ""}
      ${["place", "release", "check"].includes(k.kind) ? Cr("Orientation tolerance \xB7 \xB0", "stageAngle", k.angle, 1, 180, 1) + '<p class="buildMeta">180\xB0 accepts any orientation. Otherwise compare to the target zone rotation.</p>' : ""}
      <div class="buildPair">${Cr("Hold \xB7 seconds", "stageHold", k.hold, 0, 5, 0.1)}${Cr("Timeout \xB7 seconds", "stageTimeout", k.timeout, 1, 60, 1)}</div>
      <details class="buildDetails"><summary>Failure &amp; recovery</summary><label for="stageRetries">On timeout</label><select id="stageRetries">${[0, 1, 2].map((Fe) => Bn(String(Fe), Fe ? "Retry " + Fe + " time" + (Fe === 1 ? "" : "s") : "Stop and report failure", String(k.retries))).join("")}</select><label for="stageRecovery">Retry from</label><select id="stageRecovery">${Bn("", "This stage", k.recovery)}${le.task.stages
        .slice(0, te)
        .map((Fe, ct) => Bn(Fe.id, `${ct + 1}. ${Fe.name}`, k.recovery))
        .join("")}</select></details>
      <div class="buildInspectorFooter"><button id="stageApply" class="primary">Apply stage</button><span>Enter to apply</span></div><div id="stageLiveChecks" class="stageLiveChecks"></div></div>`),
          (X("stageApply").onclick = () => qe(ft)),
          q.querySelectorAll("input").forEach((Fe) =>
            Fe.addEventListener("keydown", (ct) => {
              ct.key === "Enter" && (ct.preventDefault(), qe(ft));
            }),
          ));
        for (let [Fe, ct] of [
          ["stageUp", -1],
          ["stageDown", 1],
        ])
          X(Fe).onclick = () =>
            qe(() => yt((pt) => D3(pt, k.id, ct), "Stage order updated"));
        ((X("stageDelete").onclick = () => qe(() => st(k.id))),
          X("stageEditBlock") &&
            (X("stageEditBlock").onclick = () => R(Te.id)));
      }
    }
  }
  function _t() {
    yt((I) => {
      let k = I.entities.find((te) => te.id === xe);
      ((k.name = X("entityName").value),
        (k.position = [0, 1, 2].map((te) => Number(X("entityP" + te).value))),
        (k.rotation = [0, 1, 2].map((te) => Number(X("entityR" + te).value))),
        (k.scale = Number(X("entityScale").value)),
        (k.color = X("entityColor").value),
        X("entityD0") &&
          k.type !== "glb" &&
          (k.dimensions = [0, 1, 2].map((te) =>
            Number(X("entityD" + te).value),
          )),
        X("entityHole") && (k.hole = Number(X("entityHole").value) / 1e3),
        X("entityRole") &&
          ((k.role = X("entityRole").value),
          (k.mass = Number(X("entityMass").value)),
          (k.friction = Number(X("entityFriction").value))),
        X("entityCollision") &&
          ((k.collision = { kind: X("entityCollision").value }),
          k.collision.kind === "mesh-boxes" &&
            (k.collision.parts = Kn(oe.get(k.assetId)))));
    }, "Properties applied");
  }
  function ft() {
    yt((I) => {
      let k = I.task.stages.find((te) => te.id === me);
      k.name = X("stageName").value;
      for (let [te, re, He] of [
        ["object", "stageObject", null],
        ["target", "stageTarget", null],
        ["height", "stageHeight", 0.001],
        ["tolerance", "stageTolerance", 0.001],
        ["angle", "stageAngle", 1],
        ["hold", "stageHold", 1],
        ["timeout", "stageTimeout", 1],
        ["retries", "stageRetries", 1],
        ["recovery", "stageRecovery", null],
      ])
        X(re) && (k[te] = He === null ? X(re).value : Number(X(re).value) * He);
    }, "Stage updated");
  }
  function Zt() {
    yt(
      (I) => {
        if (Se === "press") {
          ((I.robotId = "panda"),
            (I.physicsMode = "kinematic"),
            (I.sceneTheme = "kitting"));
          return;
        }
        let k = [-0.35, 0.35, -0.5, 0.5].find(
          (He) =>
            !I.entities.some(
              (Te) => Te.role !== "zone" && Math.abs(Te.position[2] - He) < 0.1,
            ),
        );
        if (k === void 0)
          throw Error(
            "Clear space for another peg and socket in Scene composer first.",
          );
        let te = {
            id: vs("peg"),
            name: "Insertion peg",
            role: "part",
            type: "insertion_peg",
            dimensions: [0.028, 0.14, 0.028],
            position: [i().model.spawnX, 0.071, k],
            rotation: [0, 0, 0],
            scale: 1,
            mass: 0.06,
            friction: 0.8,
            color: "#db7757",
          },
          re = {
            id: vs("socket"),
            name: "Holed cube",
            role: "fixture",
            type: "socket",
            dimensions: [0.065, 0.065, 0.065],
            hole: 0.036,
            position: [i().model.goalX, 0.0325, k],
            rotation: [0, 0, 0],
            scale: 1,
            mass: 0.1,
            friction: 0.8,
            color: "#83a4b5",
          };
        if (
          (Se === "extract" && (te.position = [re.position[0], 0.071, k]),
          I.entities.push(te, re),
          (rt = te.id),
          (tt = re.id),
          (xe = te.id),
          (ot.depth = 0.05),
          Se === "extract" && !I.entities.some((He) => He.role === "zone"))
        ) {
          let He = {
            ...Kn(re),
            id: vs("target"),
            name: "Peg destination",
            role: "zone",
            type: "zone",
            dimensions: [0.075, 0.006, 0.075],
            position: [i().model.spawnX, 0, k],
          };
          (delete He.hole, I.entities.push(He), (ot.destination = He.id));
        }
      },
      Se === "press"
        ? "Panda kitting cell selected."
        : "Peg and holed cube added. Undo is available.",
    );
  }
  function mi(I) {
    yt((k) => {
      let te = I === "box" || I === "socket",
        re = I === "zone",
        He = re || te ? null : P(I),
        Te =
          He?.dims ||
          (He && [He.radius * 2, He.height, He.radius * 2]) ||
          (re
            ? [0.075, 0.006, 0.075]
            : I === "socket"
              ? [0.065, 0.065, 0.065]
              : [0.12, 0.06, 0.035]),
        Fe = i().config.sizeScale || 1,
        ct = {
          id: vs(re ? "target" : te ? "fixture" : "part"),
          name:
            (re
              ? "Target"
              : I === "socket"
                ? "Holed cube"
                : te
                  ? "Fixture"
                  : He.label) +
            " " +
            (k.entities.length + 1),
          role: re ? "zone" : te ? "fixture" : "part",
          type: I,
          dimensions: Te,
          position: [
            re || I === "socket" ? i().model.goalX : i().model.spawnX,
            re ? 0 : (Te[1] * Fe) / 2 + 0.001,
            0.18,
          ],
          rotation: [0, 0, 0],
          scale: Fe,
          mass: 0.06,
          friction: 0.8,
          color: re ? "#b5d47a" : te ? "#718caa" : "#db7757",
        };
      (I === "socket" && (ct.hole = 0.036), k.entities.push(ct), (xe = ct.id));
    }, "Added to the scene");
  }
  function Zn(I = !1) {
    qe(() => {
      if (f().recording || f().training || f().replay)
        throw Error("Finish recording or replay before undoing edits.");
      let k = I ? Ze : Ot,
        te = I ? Ot : Ze;
      k.length &&
        (te.push(Kn(le)),
        (le = k.pop()),
        Pt(),
        bt(),
        it(),
        Ce(I ? "Change restored" : "Change undone"));
    });
  }
  function fr() {
    let I = validateTask(le);
    if (I.errors.length) throw Error(I.errors[0]);
    (Pt(),
      Et("task"),
      b(),
      jt(),
      Ce(
        "Running scripted stages. Each stage must pass its measured conditions.",
      ));
  }
  function ni() {
    if (!i().taskRunner) {
      Ce("Run an authored task first.");
      return;
    }
    d(
      JSON.stringify(
        {
          format: "armature-task-report",
          version: 1,
          project: Kn(le),
          physicsMode: i().config.physicsMode,
          contactModel: i().config.authoredContact,
          controlHz: 30,
          simulation: i().info().authoredTask,
        },
        null,
        2,
      ),
      "armature-task-report.json",
      "application/json",
    );
  }
  async function nc(I) {
    let k = m3(I);
    if (ee.has(I.id) && ae.get(I.id) === k) return;
    let te = await parseImportedAsset(l7(I.data), I.format || "glb"),
      re = prepareImportedVisual(te, I.importOptions);
    ((I.dimensions = re.dimensions),
      ee.set(I.id, re.root),
      oe.set(I.id, re.parts),
      ae.set(I.id, k));
  }
  async function Xs(I) {
    if (f().running || f().training || f().recording || f().replay)
      throw Error(
        "Pause and finish recording or replay before opening a project.",
      );
    let k = validateProject(I, H);
    for (let te of Object.values(k.assets || {})) await nc(te);
    (le && _e(),
      (le = k),
      (xe = le.entities[0]?.id),
      be(),
      de.clear(),
      (rt = ""),
      (tt = ""),
      Pt(),
      bt(),
      (se = se === "presets" ? "scene" : se),
      It(se),
      Ce("Project opened. Scene and task are ready to edit."));
  }
  ((M.onchange = async () => {
    try {
      let I = M.files[0];
      if (!I) return;
      if (I.size > 24 * 1024 * 1024)
        throw Error("Project files must be smaller than 24 MB.");
      await Xs(JSON.parse(await I.text()));
    } catch (I) {
      Ce(I.message);
    } finally {
      M.value = "";
    }
  }),
    (X("buildPresets").onclick = () => It("presets")),
    (X("buildScene").onclick = X("buildOpen").onclick =
      () => qe(() => It("scene"))),
    (X("buildTask").onclick = () => qe(() => It("task"))),
    (X("buildUndo").onclick = () => Zn()),
    (X("buildRedo").onclick = () => Zn(!0)),
    (X("buildFrame").onclick = () => {
      let I = Q();
      I && s.frame(I.position);
    }),
    F.querySelectorAll("[data-transform]").forEach(
      (I) =>
        (I.onclick = () => {
          (J.setMode(I.dataset.transform),
            F.querySelectorAll("[data-transform]").forEach((k) =>
              k.setAttribute("aria-pressed", String(k === I)),
            ));
        }),
    ),
    (X("buildSnap").onchange = () => {
      (J.setTranslationSnap(X("buildSnap").checked ? 0.01 : null),
        J.setRotationSnap(X("buildSnap").checked ? Math.PI / 12 : null),
        J.setScaleSnap(X("buildSnap").checked ? 0.1 : null));
    }),
    J.addEventListener("mouseDown", () => {
      ((Nt = Kn(le)), p());
    }),
    J.addEventListener("objectChange", () => {
      if (De || !Q() || !Nt) return;
      let I = Q();
      ((I.position = $.position
        .toArray()
        .map((re) => Math.max(-1.3, Math.min(1.3, re)))),
        (I.rotation = [$.rotation.x, $.rotation.y, $.rotation.z].map(
          (re) => (re * 180) / Math.PI,
        )),
        (I.scale = Math.max(
          0.1,
          Math.min(
            4,
            J.mode === "scale"
              ? J.axis === "Y"
                ? $.scale.y
                : J.axis === "Z"
                  ? $.scale.z
                  : $.scale.x
              : I.scale,
          ),
        )));
      let k = ie(I.id);
      k &&
        (k.position.fromArray(I.position),
        k.quaternion.copy($.quaternion),
        k.scale.setScalar(I.scale),
        k.updateMatrixWorld(!0),
        U.box.setFromObject(k));
      let te =
        i().objects.find((re) => re.composerId === I.id) ||
        i().composerFixtures.find((re) => re.entity.id === I.id)?.body;
      te &&
        (te.position.set(...I.position),
        te.quaternion.copy($.quaternion),
        te.velocity.setZero(),
        te.angularVelocity.setZero(),
        (te.aabbNeedsUpdate = !0));
    }),
    J.addEventListener("mouseUp", () => {
      Nt &&
        (Ot.push(Nt),
        (Ze = []),
        (Nt = null),
        Pt(),
        bt(),
        it(),
        Ce("Transform applied"));
    }),
    r.addEventListener(
      "pointerdown",
      (I) => {
        if (!A() || se !== "scene" || f().running || I.button !== 0 || J.axis)
          return;
        let k = r.getBoundingClientRect(),
          te = new e.Raycaster();
        ((te.params.Line.threshold = 0.002),
          (te.params.Points.threshold = 0.003),
          te.setFromCamera(
            new e.Vector2(
              ((I.clientX - k.left) / k.width) * 2 - 1,
              (-(I.clientY - k.top) / k.height) * 2 + 1,
            ),
            n,
          ),
          t.updateMatrixWorld(!0));
        let re = dt(),
          He = te.intersectObjects(
            re.map((ct) => ct.root),
            !0,
          )[0];
        if (!He) return;
        let Te = He.object,
          Fe;
        for (; Te && !Fe;)
          ((Fe = re.find((ct) => ct.root === Te)), (Te = Te.parent));
        Fe && (mt(Fe.id), I.stopImmediatePropagation(), I.preventDefault());
      },
      !0,
    ),
    document.addEventListener("keydown", (I) => {
      if (Pe.isOpen || !A() || /INPUT|TEXTAREA|SELECT/.test(I.target.tagName))
        return;
      if (I.key === "Escape") {
        (p(), J.detach(), (xe = null), Ct());
        return;
      }
      if ((I.ctrlKey || I.metaKey) && I.key.toLowerCase() === "z") {
        (I.preventDefault(), Zn(I.shiftKey));
        return;
      }
      if (se !== "scene") return;
      let k = I.key.toLowerCase();
      (["w", "e", "r"].includes(k) &&
        (I.preventDefault(),
        F.querySelector(
          `[data-transform="${{ w: "translate", e: "rotate", r: "scale" }[k]}"]`,
        ).click()),
        k === "f" && X("buildFrame").click(),
        (I.ctrlKey || I.metaKey) &&
          k === "d" &&
          (I.preventDefault(), X("entityDuplicate")?.click()));
    }),
    new MutationObserver(jt).observe(y, {
      attributes: !0,
      attributeFilter: ["hidden"],
    }));
  function Yn() {
    (window.innerWidth <= 1100 ? L : C).append(q);
  }
  window.addEventListener("resize", Yn);
  function ne(I) {
    if (((Kt += I), Kt < 0.15 || ((Kt = 0), jt(), !A() || se !== "task")))
      return;
    let k = i().taskRunner;
    if (!k) return;
    let te = k.snapshot();
    T.innerHTML = `<span class="buildRunState ${te.status}">${sn(te.status === "ready" ? "Ready" : te.status === "succeeded" ? "Passed" : te.status === "failed" ? "Failed" : f().running ? "Running" : "Paused")}</span><div><b>${sn(te.stageName)}</b><small>${sn(te.reason)}</small></div><span class="buildRunTime">${te.total.toFixed(1)} s</span>`;
    let re = te.status + ":" + te.stageIndex + ":" + te.events.length;
    re !== Oe && ((Oe = re), lt());
    let He = X("stageLiveChecks");
    if (He) {
      let Te = le.task.stages.findIndex((Fe) => Fe.id === me);
      He.innerHTML =
        Te === te.stageIndex
          ? `<span class="buildKicker">LIVE CONDITIONS</span>${te.checks.map((Fe) => `<div><span>${Fe.pass ? "\u2713" : "\u25CB"} ${sn(Fe.label)}</span><small>${sn(Fe.value)}</small></div>`).join("")}`
          : `<p class="buildMeta">${sn(te.results[Te]?.reason || te.results[Te]?.status || "Pending")}</p>`;
    }
    ((X("buildRun").textContent = f().running
      ? "\u21BB Restart task"
      : "\u25B6 Run task"),
      (X("buildReport").disabled = te.status === "ready"));
  }
  return {
    get project() {
      return le && Kn(le);
    },
    get mode() {
      return se;
    },
    get overlays() {
      return [E, W, J];
    },
    get blocksOrbit() {
      return A() && se === "scene" && (J.dragging || !!J.axis);
    },
    get busy() {
      return !!Nt;
    },
    setMode: It,
    loadProject: Xs,
    run: fr,
    undo: Zn,
    report: ni,
    update: ne,
    refreshVisuals: Qe,
    showExecution() {
      i().config.composition && Et("task");
    },
    replaying() {
      (i().config.composition
        ? ((le = Kn(i().config.composition)), Qe())
        : (W.visible = !1),
        It("presets"));
    },
    onReset() {
      i().config.composition
        ? ((le = Kn(i().config.composition)), Qe())
        : ((W.visible = !1), se !== "presets" && It("presets"));
    },
    resetAuthored() {
      return le && i().config.composition ? (Pt(), it(), !0) : !1;
    },
    runAuthored() {
      return i().config.composition
        ? (f().running
            ? p()
            : ["failed", "succeeded"].includes(i().taskRunner?.status)
              ? fr()
              : (Et("task"), b(), jt()),
          !0)
        : !1;
    },
    configForReset() {
      if (!le || X("task").value !== "authored") return null;
      let I = X("robot").value,
        k = X("physicsMode").value,
        te = X("scene").value;
      return (
        (I !== le.robotId || k !== le.physicsMode || te !== le.sceneTheme) &&
          (_e(),
          (le.robotId = k === "dynamic" ? "panda" : I),
          (le.physicsMode = k),
          (le.sceneTheme = te),
          bt()),
        ut()
      );
    },
    applyEdit: (I) => yt(I),
    selectEntity: mt,
    selectStage: at,
    selectBlock: R,
  };
}
export { createSceneBuilder };
