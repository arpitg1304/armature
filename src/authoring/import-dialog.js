import __asset_f7 from "../../assets/object-pack.zip.b64";
import { _l } from "../../vendor/three-addons.js";
import {
  prepareImportedVisual,
  Zl,
  x3,
  parseImportedAsset,
  u7,
} from "./import-assets.js";
var f7 = __asset_f7;
var m7 = {
    part: "Movable part",
    fixture: "Fixed fixture",
    distractor: "Protected distractor",
  },
  X7 = (s, e, t, n) => (Number.isFinite(s) ? Math.min(t, Math.max(e, s)) : n);
function createImportDialog({ T: s, canOpen: e, accept: t, notify: n }) {
  let r = document.createElement("div");
  ((r.className = "objectImportLayer"),
    (r.hidden = !0),
    (r.innerHTML = `<section class="objectImportDialog" role="dialog" aria-modal="true" aria-labelledby="objectImportTitle" tabindex="-1">
    <header><div><span class="buildKicker">SCENE COMPOSER</span><h2 id="objectImportTitle">Import an object</h2></div><button id="objectImportClose" aria-label="Close object import">\u2715</button></header>
    <div id="objectImportDrop" class="objectImportDrop"><b>Bring your own geometry</b><p>GLB with materials \xB7 STL or OBJ geometry<br>One object at a time, up to 8 MB.</p><button id="objectImportChoose" class="primary">Choose a file</button><span>or drop it here</span><button id="objectImportSamples" class="buildQuiet">Download 8 example objects \xB7 ZIP</button></div>
    <input id="buildObjectFile" type="file" accept=".glb,.stl,.obj,model/gltf-binary,model/stl,text/plain" hidden>
    <div id="objectImportReview" class="objectImportReview" hidden><div class="objectImportView"><div id="objectImportCanvas" class="objectImportCanvas" aria-label="Interactive object preview"></div><p>Drag to orbit \xB7 scroll to zoom</p><label class="buildCheck"><input id="objectImportWire" type="checkbox" checked> Show collision boxes</label><div id="objectImportDimensions" class="objectImportDimensions" aria-live="polite"></div><p id="objectImportStats" class="buildMeta"></p></div>
    <div class="objectImportFields"><label for="objectImportName">Object name</label><input id="objectImportName" maxlength="100">
      <label for="objectImportRole">Use as</label><select id="objectImportRole">${Object.entries(
        m7,
      )
        .map(([U, Z]) => `<option value="${U}">${Z}</option>`)
        .join("")}</select>
      <div class="objectImportPair"><div><label for="objectImportUnit">Source units</label><select id="objectImportUnit"><option value="m">Metres</option><option value="mm">Millimetres</option><option value="cm">Centimetres</option><option value="in">Inches</option></select></div><div><label for="objectImportUp">Source up axis</label><select id="objectImportUp"><option value="y">Y up</option><option value="z">Z up</option></select></div></div>
      <label for="objectImportSize">Longest side \xB7 mm</label><div class="objectImportSize"><input id="objectImportSize" type="number" min="5" max="1000" step="1"><button id="objectImportFit">Fit 100 mm</button></div>
      <label for="objectImportCollision">Collision model</label><select id="objectImportCollision"><option value="box">One fitted box</option><option value="mesh-boxes">Compound boxes \xB7 one per mesh</option></select><p id="objectImportCollisionHelp" class="buildMeta"></p>
      <details class="buildDetails"><summary>Physical properties</summary><div class="objectImportPair"><div><label for="objectImportMass">Mass \xB7 kg</label><input id="objectImportMass" type="number" min=".005" max="5" step=".005" value=".06"></div><div><label for="objectImportFriction">Friction</label><input id="objectImportFriction" type="number" min="0" max="2" step=".05" value=".8"></div></div><p id="objectImportMassHelp" class="buildMeta"></p></details>
    </div></div>
    <p id="objectImportStatus" role="status" aria-live="polite"></p><p id="objectImportNotes" class="objectImportNotes"></p>
    <footer><button id="objectImportReplace" hidden>Choose another file</button><span>Saved with your project</span><button id="objectImportCancel">Cancel</button><button id="objectImportAdd" class="primary" disabled>Add to scene</button></footer>
  </section>`),
    document.body.append(r));
  let i = (U) => r.querySelector("#" + U),
    c = r.firstElementChild,
    o = null,
    h = null,
    d = null,
    f = null,
    p = 0,
    b = !1,
    H = null,
    P,
    X,
    y,
    O,
    D,
    L,
    g;
  function q(U, Z = !1) {
    ((i("objectImportStatus").textContent = U),
      i("objectImportStatus").classList.toggle("error", Z));
  }
  function F() {
    (O?.dispose(),
      g?.disconnect(),
      P?.dispose?.(),
      P?.forceContextLoss?.(),
      (P = null),
      (X = null),
      (D = null),
      (L = null),
      i("objectImportCanvas").replaceChildren());
  }
  function T() {
    (p++,
      (r.hidden = !0),
      (o = null),
      (h = null),
      (d = null),
      F(),
      H?.focus?.());
  }
  function C() {
    P && X && P.render(X, y);
  }
  function M() {
    if (!P)
      try {
        ((P = new s.WebGLRenderer({ antialias: !0, alpha: !1 })),
          P.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)),
          P.setClearColor(1055267),
          (P.toneMapping = s.ACESFilmicToneMapping),
          (P.toneMappingExposure = 1.3),
          (X = new s.Scene()),
          (y = new s.PerspectiveCamera(36, 1, 1e-4, 100)),
          X.add(new s.HemisphereLight(15463679, 5861478, 2.4)));
        let U = new s.DirectionalLight(16777215, 3);
        (U.position.set(1, 2, 3), X.add(U));
        let Z = new s.DirectionalLight(10471935, 2);
        (Z.position.set(-1, 0.6, -1),
          X.add(Z),
          i("objectImportCanvas").append(P.domElement),
          (O = new _l(y, P.domElement)),
          (O.enablePan = !1),
          O.addEventListener("change", C));
        let ee = () => {
          let ae = i("objectImportCanvas").clientWidth || 340,
            oe = i("objectImportCanvas").clientHeight || 310;
          (P?.setSize(ae, oe),
            (y.aspect = ae / oe),
            y.updateProjectionMatrix(),
            C());
        };
        ((g = new ResizeObserver(ee)),
          g.observe(i("objectImportCanvas")),
          ee());
      } catch {
        (F(),
          (i("objectImportCanvas").textContent =
            "3D preview is unavailable on this device. You can still review dimensions and import the object."));
      }
  }
  function E(U = !1) {
    if (!h || (M(), !P)) return;
    (D && X.remove(D),
      L &&
        (X.remove(L),
        L.traverse((ee) => {
          (ee.geometry?.dispose(), ee.material?.dispose());
        })),
      (D = h.root),
      X.add(D),
      (L = new s.Group()));
    let Z =
      i("objectImportCollision").value === "mesh-boxes"
        ? h.parts
        : [{ size: h.dimensions, offset: [0, 0, 0] }];
    for (let ee of Z) {
      let ae = new s.BoxGeometry(...ee.size),
        oe = new s.LineSegments(
          new s.EdgesGeometry(ae),
          new s.LineBasicMaterial({
            color: 12840820,
            transparent: !0,
            opacity: 0.8,
            depthTest: !1,
          }),
        );
      (ae.dispose(),
        oe.position.fromArray(ee.offset),
        (oe.renderOrder = 5),
        L.add(oe));
    }
    if (((L.visible = i("objectImportWire").checked), X.add(L), U)) {
      let ee = Math.max(...h.dimensions);
      (y.position.set(ee * 1.9, ee * 1.45, ee * 2.15),
        O.target.set(0, 0, 0),
        (O.minDistance = ee * 0.65),
        (O.maxDistance = ee * 12),
        O.update());
    }
    C();
  }
  function W(U = !1) {
    if (!o || !f) return;
    let Z = f.fitMm;
    if (Z !== null && (!Number.isFinite(Z) || Z < 5 || Z > 1e3)) {
      (q("Set the longest side between 5 and 1,000 mm.", !0),
        (i("objectImportAdd").disabled = !0));
      return;
    }
    h = prepareImportedVisual(o, f);
    let ee = Math.max(...h.dimensions),
      ae = h.dimensions.every(
        (se) => Number.isFinite(se) && se >= 0.005 && se <= 1,
      );
    (Z === null &&
      (i("objectImportSize").value = +(
        Math.max(...h.sourceDimensions) *
        Zl[f.unit] *
        1e3
      ).toFixed(3)),
      (i("objectImportDimensions").innerHTML = ["X", "Y", "Z"]
        .map(
          (se, xe) =>
            `<div><span>${se}</span><b>${(h.dimensions[xe] * 1e3).toFixed(1)}<small> mm</small></b></div>`,
        )
        .join("")),
      (i("objectImportStats").textContent =
        `${d.format.toUpperCase()} \xB7 ${o.triangles.toLocaleString()} triangles \xB7 ${o.meshes} meshes`));
    let oe = i("objectImportCollision").querySelector('[value="mesh-boxes"]');
    ((oe.disabled = h.parts.length > 64 || h.parts.length < 2),
      oe.disabled &&
        i("objectImportCollision").value === "mesh-boxes" &&
        (i("objectImportCollision").value = "box"),
      (i("objectImportCollisionHelp").textContent =
        i("objectImportCollision").value === "mesh-boxes"
          ? `${h.parts.length} boxes preserve gaps between separate meshes. Holes within a single mesh are still filled.`
          : "Fast and stable. Fills all holes and concavities; use compound boxes for fixtures made of separate walls."));
    let de = i("objectImportRole").value === "fixture";
    ((i("objectImportMass").disabled = de),
      (i("objectImportMassHelp").textContent = de
        ? "Fixed fixtures do not move; simulated mass is zero."
        : "Mass is supplied by you; visual materials do not determine density."));
    let le = [...o.warnings];
    (d.format !== "glb" &&
      le.push(
        "STL and OBJ do not specify units. Check source units and up axis.",
      ),
      h.thin &&
        le.push("Thin axes use a minimum 5 mm overall collision thickness."),
      o.meshes > 64 &&
        le.push("More than 64 meshes: compound boxes are unavailable."),
      (i("objectImportNotes").textContent = le.join(" ")),
      (i("objectImportAdd").disabled = !ae || b),
      q(
        ae
          ? "Ready to add. Green outlines show the collision model."
          : "The object is larger than the 1 m workcell limit. Check units or choose Fit 100 mm.",
        !ae,
      ),
      ae && ee > 0 && E(U));
  }
  async function $(U) {
    if (!U) return;
    let Z = ++p;
    ((b = !0), (i("objectImportAdd").disabled = !0), q("Reading object\u2026"));
    try {
      e();
      let ee = U.name.split(".").pop().toLowerCase();
      if (!["glb", "stl", "obj"].includes(ee))
        throw Error(
          "Choose a .glb, .stl or .obj file. Unzip sample packs first.",
        );
      if (U.size > x3) throw Error("Choose an object smaller than 8 MB.");
      let ae = await U.arrayBuffer(),
        oe = await parseImportedAsset(ae, ee);
      if (Z !== p) return;
      ((o = oe),
        (d = {
          id: "asset-" + Math.random().toString(36).slice(2, 10),
          name: U.name,
          format: ee,
          data: u7(ae),
        }),
        (f = { unit: ee === "glb" ? "m" : "mm", up: "y", fitMm: null }));
      let de = o.metadata;
      ((i("objectImportName").value = String(
        de.name || U.name.replace(/\.[^.]+$/, ""),
      )
        .trim()
        .slice(0, 100)),
        (i("objectImportRole").value = Object.hasOwn(m7, de.role)
          ? de.role
          : "part"),
        (i("objectImportMass").value = X7(de.mass, 0.005, 5, 0.06)),
        (i("objectImportFriction").value = X7(de.friction, 0, 2, 0.8)),
        (i("objectImportUnit").value = f.unit),
        (i("objectImportUp").value = f.up),
        (i("objectImportCollision").value =
          de.collision === "mesh-boxes" ? "mesh-boxes" : "box"),
        (i("objectImportDrop").hidden = !0),
        (i("objectImportReview").hidden = !1),
        (i("objectImportReplace").hidden = !1),
        (b = !1),
        W(!0),
        i("objectImportName").focus());
    } catch (ee) {
      Z === p &&
        ((b = !1),
        (o = null),
        (h = null),
        (d = null),
        (i("objectImportReview").hidden = !0),
        (i("objectImportDrop").hidden = !1),
        (i("objectImportNotes").textContent = ""),
        F(),
        q(ee.message, !0));
    } finally {
      (Z === p && (b = !1), (i("buildObjectFile").value = ""));
    }
  }
  function J() {
    try {
      (e(),
        (H = document.activeElement),
        (r.hidden = !1),
        (i("objectImportDrop").hidden = !1),
        (i("objectImportReview").hidden = !0),
        (i("objectImportReplace").hidden = !0),
        (i("objectImportAdd").disabled = !0),
        (i("objectImportNotes").textContent = ""),
        q(""),
        i("objectImportChoose").focus());
    } catch (U) {
      n(U.message);
    }
  }
  ((i("objectImportSamples").onclick = () => {
    let U = Uint8Array.from(atob(f7), (ae) => ae.charCodeAt(0)),
      Z = URL.createObjectURL(new Blob([U], { type: "application/zip" })),
      ee = document.createElement("a");
    ((ee.href = Z),
      (ee.download = "robot-object-pack.zip"),
      ee.click(),
      setTimeout(() => URL.revokeObjectURL(Z), 1e3));
  }),
    (i("objectImportChoose").onclick = i("objectImportReplace").onclick =
      () => i("buildObjectFile").click()),
    (i("buildObjectFile").onchange = () => $(i("buildObjectFile").files[0])));
  for (let U of ["objectImportCancel", "objectImportClose"]) i(U).onclick = T;
  return (
    (i("objectImportUnit").onchange = () => {
      ((f.unit = i("objectImportUnit").value), (f.fitMm = null), W(!0));
    }),
    (i("objectImportUp").onchange = () => {
      ((f.up = i("objectImportUp").value), W(!0));
    }),
    (i("objectImportSize").oninput = () => {
      ((f.fitMm = Number(i("objectImportSize").value)), W(!0));
    }),
    (i("objectImportFit").onclick = () => {
      ((f.fitMm = 100), (i("objectImportSize").value = 100), W(!0));
    }),
    (i("objectImportCollision").onchange = i("objectImportRole").onchange =
      () => W()),
    (i("objectImportWire").onchange = () => {
      (L && (L.visible = i("objectImportWire").checked), C());
    }),
    (i("objectImportAdd").onclick = () => {
      if (!(!h || b || i("objectImportAdd").disabled))
        try {
          let U = i("objectImportName").value.trim();
          if (!U) throw Error("Give this object a name.");
          let Z = Number(i("objectImportMass").value),
            ee = Number(i("objectImportFriction").value);
          if (
            !Number.isFinite(Z) ||
            Z < 0.005 ||
            Z > 5 ||
            !Number.isFinite(ee) ||
            ee < 0 ||
            ee > 2
          )
            throw Error(
              "Use a mass of 0.005\u20135 kg and friction of 0\u20132.",
            );
          (t(
            { ...d, importOptions: { ...f }, dimensions: h.dimensions },
            { ...h },
            {
              name: U,
              role: i("objectImportRole").value,
              mass: Z,
              friction: ee,
              collision: i("objectImportCollision").value,
            },
          ),
            T());
        } catch (U) {
          q(U.message, !0);
        }
    }),
    r.addEventListener("dragover", (U) => {
      (U.preventDefault(), r.classList.add("dragging"));
    }),
    r.addEventListener("dragleave", (U) => {
      r.contains(U.relatedTarget) || r.classList.remove("dragging");
    }),
    r.addEventListener("drop", (U) => {
      if (
        (U.preventDefault(),
        r.classList.remove("dragging"),
        U.dataTransfer.files.length !== 1)
      ) {
        q("Choose one object at a time.", !0);
        return;
      }
      $(U.dataTransfer.files[0]);
    }),
    r.addEventListener("click", (U) => {
      U.target === r && T();
    }),
    r.addEventListener("keydown", (U) => {
      if ((U.stopPropagation(), U.key === "Escape")) {
        (U.preventDefault(), T());
        return;
      }
      if (U.key === "Tab") {
        let Z = [
            ...c.querySelectorAll("button,input,select,summary,[tabindex]"),
          ].filter(
            (oe) =>
              !oe.disabled &&
              !oe.hidden &&
              !oe.closest("[hidden]") &&
              (oe.tagName === "SUMMARY" ||
                !oe.closest("details") ||
                oe.closest("details").open),
          ),
          ee = Z[0],
          ae = Z.at(-1);
        U.shiftKey && document.activeElement === ee
          ? (U.preventDefault(), ae?.focus())
          : !U.shiftKey &&
            document.activeElement === ae &&
            (U.preventDefault(), ee?.focus());
      }
    }),
    {
      open: J,
      get isOpen() {
        return !r.hidden;
      },
    }
  );
}
export { createImportDialog };
