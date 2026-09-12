var escapeXml = (u) =>
  String(u)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
function simulationUrdf(u) {
  let a = u.asset;
  return (
    `<?xml version="1.0"?>
<!-- Combined kinematic model. Visual mesh paths reference source repositories. No dynamic inertias or proxy collisions. -->
<robot name="` +
    u.id +
    `_armature">
` +
    a.links.map(
      (l) =>
        '<link name="' +
        escapeXml(l.name) +
        '">' +
        (l.visuals || (l.visual ? [l.visual] : []))
          .map(
            (v) =>
              '<visual><origin xyz="' +
              v.xyz.join(" ") +
              '" rpy="' +
              v.rpy.join(" ") +
              '"/><geometry><mesh filename="' +
              escapeXml(v.mesh) +
              '" scale="' +
              (v.scale || [1, 1, 1]).join(" ") +
              '"/></geometry></visual>',
          )
          .join("") +
        "</link>",
    ).join(`
`) +
    `
` +
    a.joints.map(
      (l) =>
        '<joint name="' +
        escapeXml(l.name) +
        '" type="' +
        l.type +
        '"><parent link="' +
        escapeXml(l.parent) +
        '"/><child link="' +
        escapeXml(l.child) +
        '"/><origin xyz="' +
        l.xyz.join(" ") +
        '" rpy="' +
        l.rpy.join(" ") +
        '"/><axis xyz="' +
        l.axis.join(" ") +
        '"/>' +
        (l.limit
          ? "<limit " +
            Object.entries(l.limit)
              .map(([v, m]) => v + '="' + m + '"')
              .join(" ") +
            "/>"
          : "") +
        "</joint>",
    ).join(`
`) +
    `
</robot>`
  );
}
export { simulationUrdf };
