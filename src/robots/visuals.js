function attachRobotVisuals(u, a, l = {}) {
  for (let v of a.model.asset.links)
    for (let m of v.visuals || (v.visual ? [v.visual] : [])) {
      let x = a.model.id + ":" + m.mesh,
        w = l[x];
      if (!w) {
        let V = a.model.asset.meshes[m.mesh];
        ((w = new u.BufferGeometry()),
          w.setAttribute("position", new u.Float32BufferAttribute(V.v, 3)),
          w.setIndex(V.f),
          V.colors &&
            w.setAttribute("color", new u.Float32BufferAttribute(V.colors, 3)),
          w.computeVertexNormals(),
          (l[x] = w));
      }
      let z = w.getAttribute("color")
          ? new u.Color(1, 1, 1)
          : m.color
            ? new u.Color(...m.color)
            : new u.Color(v.name.includes("finger") ? "#182126" : "#e6e7e2"),
        j = new u.MeshStandardMaterial({
          color: z,
          vertexColors: !!w.getAttribute("color"),
          metalness: a.model.id === "so101" ? 0.12 : 0.55,
          roughness: a.model.id === "so101" ? 0.48 : 0.28,
        }),
        N = new u.Mesh(w, j);
      (N.position.fromArray(m.xyz),
        N.rotation.set(...m.rpy, "ZYX"),
        m.scale && N.scale.fromArray(m.scale),
        (N.castShadow = !0),
        (N.receiveShadow = !0),
        a.links[v.name].add(N));
    }
}
export { attachRobotVisuals };
