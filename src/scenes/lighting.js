var LIGHTING_PRESETS = {
  factory: {
    label: "Bright factory",
    workBrightness: 1.2,
    roomFill: 0.5,
    keyPosition: [1, 5, 3],
    keyColor: [1, 0.95, 0.87],
  },
  daylight: {
    label: "Soft daylight",
    workBrightness: 0.85,
    roomFill: 0.8,
    keyPosition: [-2, 4, 2],
    keyColor: [0.87, 0.94, 1],
  },
  dim: {
    label: "Dim shift",
    workBrightness: 0.3,
    roomFill: 0.12,
    keyPosition: [1, 3, 2],
    keyColor: [1, 0.77, 0.5],
  },
  side: {
    label: "Harsh side light",
    workBrightness: 1.3,
    roomFill: 0.12,
    keyPosition: [3, 0.8, 0.2],
    keyColor: [1, 0.9, 0.75],
  },
  back: {
    label: "Backlit workspace",
    workBrightness: 1.4,
    roomFill: 0.08,
    keyPosition: [0, 2, -3],
    keyColor: [0.8, 0.9, 1],
  },
};
function lightingForSeed(s, e) {
  let t = LIGHTING_PRESETS[s] || LIGHTING_PRESETS.factory,
    n = e >>> 0,
    r = () => {
      n += 1831565813;
      let i = Math.imul(n ^ (n >>> 15), 1 | n);
      return (
        (i ^= i + Math.imul(i ^ (i >>> 7), 61 | i)),
        ((i ^ (i >>> 14)) >>> 0) / 4294967296
      );
    };
  return {
    workOn: !0,
    workBrightness: Math.min(1.5, t.workBrightness * (0.7 + 0.6 * r())),
    roomFill: Math.min(1, t.roomFill * (0.65 + 0.7 * r())),
    keyPosition: t.keyPosition.map((i, c) =>
      c === 1 ? Math.max(0.5, i + (r() - 0.5)) : i + (r() - 0.5) * 1.5,
    ),
    keyColor: t.keyColor.map((i) => Math.min(1, i * (0.88 + 0.24 * r()))),
  };
}
var hr = { x: -0.94, y: 0.117, z: 0.43 };
function installLightingTask(s) {
  let e = s.prototype.reset,
    t = s.prototype.step,
    n = s.prototype.expertPlan,
    r = s.prototype.distance,
    i = s.prototype.info;
  ((s.prototype.reset = function (c = {}) {
    if (
      ((this.lightPressFrames = 0),
      (this.lightButtonPressed = !1),
      (this.lightSwitchTask = c.task === "lights"),
      this.lightSwitchTask && this.model.id !== "panda")
    )
      throw Error("The table light switch demo uses the Panda.");
    return e.call(this, c);
  }),
    (s.prototype.distance = function () {
      return this.lightSwitchTask
        ? this.tcp().distanceTo(new this.T.Vector3(hr.x, hr.y, hr.z))
        : r.call(this);
    }),
    (s.prototype.step = function (c) {
      let o = t.call(this, c);
      if (!this.lightSwitchTask) return o;
      let h = this.tcp(),
        d = Math.hypot(h.x - hr.x, h.z - hr.z) < 0.018,
        f = d && h.y >= 0.097 && h.y <= 0.123 && this.q[this.n] < 0.012;
      ((this.lightPressFrames = f ? this.lightPressFrames + 1 : 0),
        this.lightPressFrames >= 8 && (this.lightButtonPressed = !0),
        (this.terminated = this.lightButtonPressed && h.y > 0.205),
        (this.truncated =
          !this.terminated && this.steps >= this.config.maxSteps));
      let p = o.reward - (o.terminated ? 10 : 0) + (this.terminated ? 10 : 0);
      return {
        ...o,
        reward: p,
        terminated: this.terminated,
        truncated: this.truncated,
        info: this.info(),
      };
    }),
    (s.prototype.info = function () {
      return {
        ...i.call(this),
        ...(this.lightSwitchTask
          ? {
              lightSwitch: {
                pressed: this.lightButtonPressed,
                contactFrames: this.lightPressFrames,
              },
            }
          : {}),
      };
    }),
    (s.prototype.expertPlan = function (c) {
      if (!this.lightSwitchTask) return n.call(this, c);
      let o = hr,
        h = [],
        d = (f, p, b, H) =>
          h.push({
            from: h.length ? h.at(-1).p.slice() : this.tcp().toArray(),
            p: f,
            width: p,
            seconds: b,
            name: H,
          });
      return (
        d([-0.25, 0.42, 0.12], 0.006, 3, "Close gripper and clear table"),
        d([o.x, 0.32, o.z], 0.006, 4, "Approach red light switch"),
        d([o.x, 0.16, o.z], 0.006, 3, "Align over button"),
        d([o.x, 0.111, o.z], 0.006, 2, "Press red button"),
        d([o.x, 0.111, o.z], 0.006, 1, "Hold light switch"),
        d([o.x, 0.27, o.z], 0.006, 2, "Release and withdraw"),
        h
      );
    }));
}
function createLightingLab({
  T: s,
  scene: e,
  getEnv: t,
  getCell: n,
  keyLight: r,
  start: i,
  pause: c,
  renderer: o,
  feedRenderer: h,
}) {
  let d = (se) => document.getElementById(se),
    f = !0,
    p = 1.2,
    b = 0.5,
    H = null,
    P = "Work lights on.",
    X = null,
    y = "factory",
    O = [1, 5, 3],
    D = [1, 0.95, 0.87],
    L = 0,
    g = 0,
    q = null,
    F = null,
    T = !1,
    C = null,
    M = -1;
  d("panel-lights").innerHTML =
    '<h2>Lighting control</h2><p class="note">Control the work lights and room fill independently.</p><label><input type="checkbox" id="workLights" checked> Work lights on</label><label for="workBrightness">Work brightness <span id="workBrightnessValue">100%</span></label><input type="range" id="workBrightness" min="10" max="150" value="100"><label for="roomBrightness">Room fill <span id="roomBrightnessValue">40%</span></label><input type="range" id="roomBrightness" min="0" max="100" value="40"><button id="robotLightsOff" class="wide primary">Robot: switch work lights off</button><button id="restoreLights" class="wide">Restore work lights</button><p id="lightingStatus" role="status" class="note">Work lights on.</p><p class="note">The robot command uses Panda in the Blender kitting cell and starts a fresh task. The red cap is a simulated touch switch: activation uses the actual tool position and a short dwell, with visual button travel. It does not model switch force or electrical safety behavior.</p><p class="note">Try: \u201Cswitch off the lights\u201D or \u201Cpress the red button\u201D. Lighting changes also appear in camera feeds and recorded RGB.</p>';
  let E = document.createElement("div");
  ((E.innerHTML = `<label for="lightingPreset">Lighting preset</label><select id="lightingPreset">${Object.entries(
    LIGHTING_PRESETS,
  )
    .map(([se, xe]) => `<option value="${se}">${xe.label}</option>`)
    .join(
      "",
    )}</select><details><summary>Camera exposure</summary><label for="viewExposure">Viewport <span id="viewExposureValue">0 EV</span></label><input type="range" id="viewExposure" min="-2" max="2" step="0.1" value="0"><label for="sensorExposure">Recorded cameras <span id="sensorExposureValue">0 EV</span></label><input type="range" id="sensorExposure" min="-2" max="2" step="0.1" value="0"><p class="note">Fixed exposure, shared by overhead and wrist cameras. Presets and lighting variation never adjust exposure automatically. EV changes rendered brightness; this is not a calibrated camera sensor model.</p></details><details><summary>Repeatable lighting variation</summary><label for="lightingSeed">Lighting seed</label><input id="lightingSeed" type="number" min="0" max="4294967295" value="42"><button id="sampleLighting" class="wide">Apply this seed</button><button id="nextLighting" class="wide">Next lighting seed</button><label><input type="checkbox" id="varyEpisodeLighting"> Vary lighting on each episode reset</label><p id="lightingSeedStatus" class="note">Direction, brightness and color vary around the chosen preset.</p><p class="note">Episode variation combines the lighting seed with the episode seed. Settings are saved in episode metadata and lighting/events.jsonl. The built-in evaluation suite uses privileged state without rendering; its lighting settings are metadata, not a test of visual robustness.</p></details>`),
    d("panel-lights").querySelector("h2").after(E));
  let W = document.createElement("button");
  ((W.id = "lightingOpen"),
    (W.textContent = "Lights"),
    (W.title = "Open lighting controls"),
    document.querySelector(".views").prepend(W),
    (W.onclick = () => {
      (document.body.classList.remove("sidebarHidden"),
        d("sidebarToggle").setAttribute("aria-expanded", "true"),
        d("tab-lights").click());
    }));
  function $() {
    return {
      version: "armature-lighting-v1",
      preset: y,
      workOn: f,
      workBrightness: p,
      roomFill: b,
      keyPosition: O.slice(),
      keyColor: D.slice(),
      viewEV: L,
      sensorEV: g,
      lightingSeed: Number(d("lightingSeed").value) >>> 0,
      varyPerEpisode: d("varyEpisodeLighting").checked,
      sampleSeed: q,
      episodeSeed: F,
      manualAdjusted: T,
    };
  }
  function J() {
    (r.position.fromArray(O),
      r.color.setRGB(...D),
      o && (o.toneMappingExposure = 1.12 * 2 ** L),
      h && (h.toneMappingExposure = 1.12 * 2 ** g),
      t()?.config && (t().config.lighting = $()),
      e.traverse((xe) => {
        var me;
        if (
          (xe.isLight &&
            ((me = xe.userData).originalLightIntensity ??
              (me.originalLightIntensity = xe.intensity),
            xe === r
              ? (xe.intensity = f ? 4 * p : 0)
              : n()?.children.includes(xe)
                ? (xe.intensity = f
                    ? xe.userData.originalLightIntensity * p
                    : 0)
                : (xe.intensity = xe.userData.originalLightIntensity * b)),
          xe.isMesh)
        ) {
          let Le = Array.isArray(xe.material) ? xe.material : [xe.material];
          for (let Se of Le)
            "envMapIntensity" in Se &&
              (Se.envMapIntensity = f ? 0.7 + 0.3 * p : 0.12 + 0.25 * b);
        }
      }));
    let se = n()?.getObjectByName("Task light diffuser");
    (se &&
      ((se.material.emissive = new s.Color("#fff3ce")),
      (se.material.emissiveIntensity = f ? 0.55 * p : 0),
      se.material.color.setRGB(0.88, 0.94, 0.87).multiplyScalar(f ? 1 : 0.2)),
      (d("workLights").checked = f),
      (d("workBrightnessValue").textContent = Math.round(p * 100) + "%"),
      (d("roomBrightnessValue").textContent = Math.round(b * 100) + "%"),
      (d("lightingStatus").textContent = P),
      (d("workBrightness").value = p * 100),
      (d("roomBrightness").value = b * 100),
      (d("lightingPreset").value = y),
      (d("viewExposure").value = L),
      (d("sensorExposure").value = g),
      (d("viewExposureValue").textContent = L.toFixed(1) + " EV"),
      (d("sensorExposureValue").textContent = g.toFixed(1) + " EV"),
      (d("lightingSeedStatus").textContent =
        q === null
          ? "Preset lighting \xB7 no sampled variation."
          : "Applied seed " +
            q +
            (F === null ? "" : " \xB7 episode seed " + F) +
            (T ? " \xB7 manually adjusted" : "")));
  }
  function U(se) {
    if (!se) return;
    let xe = (me, Le, Se, rt) =>
      Number.isFinite(me) ? Math.max(Le, Math.min(Se, me)) : rt;
    ((y = LIGHTING_PRESETS[se.preset] ? se.preset : y),
      (f = se.workOn !== !1),
      (p = xe(se.workBrightness, 0.1, 1.5, 1)),
      (b = xe(se.roomFill, 0, 1, 0.4)),
      (L = xe(se.viewEV, -2, 2, 0)),
      (g = xe(se.sensorEV, -2, 2, 0)),
      Array.isArray(se.keyPosition) &&
        se.keyPosition.length === 3 &&
        se.keyPosition.every(Number.isFinite) &&
        (O = se.keyPosition.map((me, Le) => xe(me, Le === 1 ? 0.3 : -8, 8, 1))),
      Array.isArray(se.keyColor) &&
        se.keyColor.length === 3 &&
        se.keyColor.every(Number.isFinite) &&
        (D = se.keyColor.map((me) => xe(me, 0, 1, 1))),
      (T = !!se.manualAdjusted),
      (q = se.sampleSeed ?? null),
      (F = se.episodeSeed ?? null),
      se.lightingSeed !== void 0 &&
        (d("lightingSeed").value = se.lightingSeed >>> 0),
      se.varyPerEpisode !== void 0 &&
        (d("varyEpisodeLighting").checked = !!se.varyPerEpisode),
      t()?.composerButton && se.workOn !== void 0 && (t().skillWorkLights = f),
      J());
  }
  function Z(se, xe = $()) {
    if (!xe.varyPerEpisode) return xe;
    let me = (xe.lightingSeed ^ Math.imul(se >>> 0, 2654435761)) >>> 0;
    return {
      ...xe,
      ...lightingForSeed(xe.preset, me),
      manualAdjusted: !1,
      sampleSeed: me,
      episodeSeed: se >>> 0,
    };
  }
  function ee(se, xe) {
    return (U(xe || Z(se)), $());
  }
  ((d("lightingPreset").onchange = () => {
    y = d("lightingPreset").value;
    let se = LIGHTING_PRESETS[y];
    (U({
      ...$(),
      ...se,
      workOn: !0,
      manualAdjusted: !1,
      sampleSeed: null,
      episodeSeed: null,
    }),
      (P = se.label + " \xB7 exposure unchanged."),
      J());
  }),
    (d("viewExposure").oninput = () => {
      ((L = Number(d("viewExposure").value)), J());
    }),
    (d("sensorExposure").oninput = () => {
      ((g = Number(d("sensorExposure").value)), J());
    }));
  function ae() {
    let se = Number(d("lightingSeed").value) >>> 0;
    (U({
      ...$(),
      ...lightingForSeed(y, se),
      manualAdjusted: !1,
      sampleSeed: se,
      episodeSeed: null,
    }),
      (P = "Repeatable lighting sample applied."),
      J());
  }
  ((d("sampleLighting").onclick = ae),
    (d("nextLighting").onclick = () => {
      ((d("lightingSeed").value = (Number(d("lightingSeed").value) + 1) >>> 0),
        ae());
    }),
    (d("varyEpisodeLighting").onchange = J));
  function oe(se, xe) {
    ((T = !0),
      (f = se),
      t()?.composerButton && (t().skillWorkLights = se),
      (P = xe),
      J());
  }
  ((d("workLights").onchange = () =>
    oe(
      d("workLights").checked,
      d("workLights").checked
        ? "Work lights on."
        : "Work lights off \xB7 room fill remains on.",
    )),
    (d("workBrightness").oninput = () => {
      ((p = Number(d("workBrightness").value) / 100), (T = !0), J());
    }),
    (d("roomBrightness").oninput = () => {
      ((b = Number(d("roomBrightness").value) / 100), (T = !0), J());
    }),
    (d("restoreLights").onclick = () => oe(!0, "Work lights restored.")));
  function de() {
    (c(),
      oe(!0, "Panda is moving to the red switch\u2026"),
      i(),
      W.click(),
      (H = null));
  }
  d("robotLightsOff").onclick = de;
  function le() {
    let se = t(),
      xe = n();
    if (xe) {
      let me = xe.getObjectByName("Emergency stop red");
      (me !== X && ((X = me), J()),
        X &&
          (X.position.y = se.composerButton
            ? -Math.max(
                0,
                Math.min(
                  0.006,
                  se.composerButton.restY - se.composerButton.body.position.y,
                ),
              )
            : se.lightSwitchTask && se.lightPressFrames > 0
              ? -0.004
              : 0));
    }
    (se.composerButton && (C !== se || M !== se.skillLightRevision)
      ? ((C = se),
        (M = se.skillLightRevision),
        M > 0 &&
          oe(
            se.skillWorkLights,
            "Task button pressed \xB7 work lights " +
              (se.skillWorkLights ? "on." : "off."),
          ))
      : se.composerButton || ((C = null), (M = -1)),
      se.lightSwitchTask &&
        se.lightButtonPressed &&
        H !== se &&
        ((H = se),
        oe(!1, "Button pressed \xB7 work lights off. Room fill is unchanged.")),
      !se.lightButtonPressed && H === se && (H = null));
  }
  return (
    J(),
    {
      command: de,
      update: le,
      refresh: J,
      restore: U,
      beginEpisode: ee,
      previewEpisode: Z,
      setWorkLights: (se) =>
        oe(!!se, se ? "Work lights on." : "Work lights off."),
      get state() {
        return $();
      },
    }
  );
}
export { hr, installLightingTask, createLightingLab };
