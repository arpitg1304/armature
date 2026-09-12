import { oh, Si } from "../../vendor/fflate-sensors.js";
var bp = 16777214;
function decodeSensorPixels(s, e, t, n, r) {
  let i = new Float32Array(t * n),
    c = new Uint32Array(t * n);
  for (let o = 0; o < n; o++)
    for (let h = 0; h < t; h++) {
      let d = o * t + h,
        f = ((n - 1 - o) * t + h) * 4;
      ((i[d] = s[f + 3]
        ? ((s[f] * 65536 + s[f + 1] * 256 + s[f + 2]) / bp) * r
        : NaN),
        (c[d] = e[f] * 65536 + e[f + 1] * 256 + e[f + 2]));
    }
  return { depth: i, ids: c };
}
function encodeSensorArray(s, e = !1) {
  let t = new Uint8Array(s.length * 4),
    n = new DataView(t.buffer);
  return (
    s.forEach((r, i) =>
      e ? n.setFloat32(i * 4, r, !0) : n.setUint32(i * 4, r, !0),
    ),
    t
  );
}
function instanceColor(s) {
  if (!s) return [0, 0, 0];
  let e = Math.imul(s, 2654435761) >>> 0;
  return [64 + (e & 127), 64 + ((e >>> 8) & 127), 64 + ((e >>> 16) & 127)];
}
function depthRange(
  s,
  e,
  { mode: t = "workspace", near: n = 0, far: r = 8 } = {},
) {
  if (t === "clip") return { min: n, max: r, mode: t };
  let i = [];
  for (let d = 0; d < s.length; d++)
    Number.isFinite(s[d]) &&
      s[d] > 0 &&
      (t !== "workspace" || e?.[d] === 1 || e?.[d] >= 100) &&
      i.push(s[d]);
  if (!i.length) for (let d of s) Number.isFinite(d) && d > 0 && i.push(d);
  if (!i.length) return { min: n, max: r, mode: t, empty: !0 };
  i.sort((d, f) => d - f);
  let c = i[Math.floor((i.length - 1) * 0.02)],
    o = i[Math.floor((i.length - 1) * 0.98)],
    h = Math.max(0.005, (o - c) * 0.05);
  return {
    min: Math.max(n, c - h),
    max: Math.min(r, Math.max(c + 0.01, o + h)),
    mode: t,
  };
}
var uh = [
  [68, 1, 84],
  [71, 44, 122],
  [59, 81, 139],
  [44, 113, 142],
  [33, 144, 141],
  [39, 173, 129],
  [92, 200, 99],
  [170, 220, 50],
  [253, 231, 37],
];
function sensorPreview(
  s,
  e,
  t,
  { depth: n = !1, far: r = 1, range: i, palette: c = "viridis" } = {},
) {
  let o = new Uint8ClampedArray(e * t * 4),
    h = i?.min ?? 0,
    d = i?.max ?? r;
  return (
    s.forEach((f, p) => {
      let b;
      if (n) {
        let H = 1 - Math.max(0, Math.min(1, (f - h) / Math.max(1e-6, d - h)));
        if (!Number.isFinite(f)) b = [12, 17, 25];
        else if (c === "gray") b = Array(3).fill(Math.round(35 + 220 * H));
        else {
          let P = H * (uh.length - 1),
            X = Math.min(uh.length - 2, Math.floor(P)),
            y = P - X;
          b = uh[X].map((O, D) => Math.round(O + (uh[X + 1][D] - O) * y));
        }
      } else b = instanceColor(f);
      o.set([...b, 255], p * 4);
    }),
    o
  );
}
function createDepthSensor({
  T: s,
  scene: e,
  renderer: t,
  getInstances: n,
  getOverlays: r,
  getRGB: i,
}) {
  let c =
      "varying float axialDepth; void main(){vec4 p=modelViewMatrix*vec4(position,1.0);axialDepth=-p.z;gl_Position=projectionMatrix*p;}",
    o =
      "precision highp float; varying float axialDepth; uniform float farPlane; uniform float instanceId; uniform bool depthPass; void main(){float n=depthPass?floor(clamp(axialDepth/farPlane,0.0,1.0)*16777214.0+0.5):instanceId;float r=floor(n/65536.0);float g=floor((n-r*65536.0)/256.0);float b=n-r*65536.0-g*256.0;gl_FragColor=vec4(vec3(r,g,b)/255.0,1.0);}";
  function h(d, f, p) {
    let { width: b, height: H, far: P } = f,
      X = n(),
      y = new Map();
    for (let C of X)
      C.root.traverse((M) => {
        M.isMesh && y.set(M, C.id);
      });
    let O = new s.WebGLRenderTarget(b, H, {
      minFilter: s.NearestFilter,
      magFilter: s.NearestFilter,
      format: s.RGBAFormat,
      type: s.UnsignedByteType,
      depthBuffer: !0,
      stencilBuffer: !1,
    });
    ((O.samples = 0),
      "colorSpace" in O.texture
        ? (O.texture.colorSpace = s.NoColorSpace)
        : (O.texture.encoding = s.LinearEncoding));
    let D = {
        target: t.getRenderTarget(),
        viewport: t.getViewport(new s.Vector4()),
        scissor: t.getScissor(new s.Vector4()),
        scissorTest: t.getScissorTest(),
        clear: t.getClearColor(new s.Color()).clone(),
        alpha: t.getClearAlpha(),
        auto: t.autoClear,
        tone: t.toneMapping,
        override: e.overrideMaterial,
        background: e.background,
      },
      L = [],
      g = [],
      q = new Map(),
      F = (C) => {
        C && (g.push([C, C.visible]), (C.visible = !1));
      },
      T = () => {
        let C = new Uint8Array(b * H * 4);
        return (t.readRenderTargetPixels(O, 0, 0, b, H, C), C);
      };
    try {
      for (let J of r()) F(J);
      e.traverse((J) => {
        (J.isLine ||
          J.isPoints ||
          J.isSprite ||
          (J.isMesh &&
            (Array.isArray(J.material)
              ? J.material.some((U) => U.wireframe)
              : J.material?.wireframe))) &&
          F(J);
      });
      let C = i();
      (e.traverse((J) => {
        (J.isLine || J.isPoints || J.isSprite) && F(J);
      }),
        t.setRenderTarget(O),
        t.setViewport(0, 0, b, H),
        t.setScissorTest(!1),
        (t.autoClear = !0),
        (e.overrideMaterial = null),
        (e.background = null),
        t.setClearColor(0, 0),
        (t.toneMapping = s.NoToneMapping),
        // Hidden debug/helper meshes retain their own materials: TransformControls
        // updates them even when invisible and requires material.color.
        e.traverseVisible((J) => {
          if (!J.isMesh) return;
          let U = y.get(J) || 2,
            Z = q.get(U);
          (Z ||
            ((Z = new s.ShaderMaterial({
              vertexShader: c,
              fragmentShader: o,
              uniforms: {
                farPlane: { value: P },
                instanceId: { value: U },
                depthPass: { value: !0 },
              },
              side: s.DoubleSide,
              blending: s.NoBlending,
              depthTest: !0,
              depthWrite: !0,
              toneMapped: !1,
            })),
            q.set(U, Z)),
            L.push([J, J.material]),
            (J.material = Z));
        }),
        t.render(e, d));
      let M = T();
      for (let J of q.values()) J.uniforms.depthPass.value = !1;
      t.render(e, d);
      let E = T(),
        W = decodeSensorPixels(M, E, b, H, P),
        $ = new Map();
      for (let J of W.ids) $.set(J, ($.get(J) || 0) + 1);
      return {
        ...W,
        rgb: C,
        width: b,
        height: H,
        metadata: {
          format: "armature-synthetic-snapshot-v1",
          ...p,
          camera: f,
          depth: {
            file: "depth.f32",
            dtype: "float32",
            byteOrder: "little-endian",
            shape: [H, b],
            units: "metres",
            definition: "positive optical-axis Z, not Euclidean range",
            invalid: "NaN (no surface within clipping planes)",
            quantizationMetres: P / bp,
          },
          instances: {
            file: "instances.u32",
            dtype: "uint32",
            byteOrder: "little-endian",
            shape: [H, b],
            scope:
              "IDs stable within an episode; task object index preserved across resets with the same object set",
            labels: [
              { id: 0, label: "background / no surface" },
              { id: 2, label: "static scenery and fixtures", aggregate: !0 },
              ...X.map(({ root: J, ...U }) => ({
                ...U,
                worldPosition: J.getWorldPosition(new s.Vector3()).toArray(),
                worldQuaternion: J.getWorldQuaternion(
                  new s.Quaternion(),
                ).toArray(),
              })),
            ].map((J) => ({
              ...J,
              visiblePixels: $.get(J.id) || 0,
              previewColor: instanceColor(J.id),
            })),
          },
          rowOrder: "top-to-bottom, left-to-right",
          surfaceModel:
            "Ideal pinhole ground truth from visual mesh geometry, not collision shapes. Depth and IDs treat transparent surfaces as opaque and double-sided; no sensor noise or lens distortion. Lines, points, sprites and task overlays excluded. RGB retains visual materials.",
          preview:
            "depth-preview.png and instances-preview.png are display colors, not raw measurements",
        },
      };
    } finally {
      (L.forEach(([C, M]) => (C.material = M)),
        g.reverse().forEach(([C, M]) => (C.visible = M)),
        (e.overrideMaterial = D.override),
        (e.background = D.background),
        (t.toneMapping = D.tone),
        (t.autoClear = D.auto),
        t.setClearColor(D.clear, D.alpha),
        t.setRenderTarget(D.target),
        t.setViewport(D.viewport),
        t.setScissor(D.scissor),
        t.setScissorTest(D.scissorTest),
        O.dispose(),
        q.forEach((C) => C.dispose()));
    }
  }
  return { capture: h };
}
function exportSensorSnapshot(s, e) {
  let t = s.rgb;
  return oh(
    {
      "rgb.png": e(t, s.width, s.height),
      "depth.f32": encodeSensorArray(s.depth, !0),
      "instances.u32": encodeSensorArray(s.ids),
      "depth-preview.png": e(
        sensorPreview(s.depth, s.width, s.height, {
          depth: !0,
          far: s.metadata.camera.far,
          range:
            s.metadata.depthDisplay ||
            depthRange(s.depth, s.ids, {
              near: s.metadata.camera.near || 0,
              far: s.metadata.camera.far,
            }),
          palette: s.metadata.depthDisplay?.palette,
        }),
        s.width,
        s.height,
      ),
      "instances-preview.png": e(
        sensorPreview(s.ids, s.width, s.height),
        s.width,
        s.height,
      ),
      "metadata.json": Si(JSON.stringify(s.metadata, null, 2)),
      "README.txt":
        Si(`Depth and instance arrays are row-major, top-left origin.
Python: depth = numpy.fromfile("depth.f32", dtype="<f4").reshape(height, width)
ids = numpy.fromfile("instances.u32", dtype="<u4").reshape(height, width)
Depth is optical Z in metres; NaN means no hit.
Unproject pixel (u,v): X=(u+0.5-cx)*Z/fx; Y=(v+0.5-cy)*Z/fy. Transform [X,Y,Z,1] with worldFromOptical.
Calibration, clip planes, timestamp and instance labels are in metadata.json.
Preview PNG colors are not numeric IDs or metric depth. RGB comes from the standard camera canvas with its configured exposure and tone mapping.
These are ideal visual geometry measurements, not a realistic depth sensor simulation.
`),
    },
    { level: 6 },
  );
}
export { createDepthSensor, depthRange, sensorPreview, exportSensorSnapshot };

export { decodeSensorPixels };
