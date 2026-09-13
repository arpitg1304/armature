// Workspace view only: sensor camera calibration and recorded RGB are untouched.
export function createViewPresets({ read, write, getEnv }) {
  let previous = null;
  const restore = document.getElementById("restoreView");
  restore.disabled = true;
  const copy = (state) => ({ ...state, target: state.target.slice() });
  function apply(name) {
    const env = getEnv();
    const current = copy(read());
    const next = copy(current);
    next.cinema = false;
    const small = env.model.id === "so101";
    if (name === "gripper") {
      next.target = env.tcp().toArray();
      next.azimuth = 0.8;
      next.inclination = 1.08;
      next.distance = small ? 0.28 : 0.6;
    } else if (name === "top") {
      next.target = [-0.08, 0, 0];
      next.azimuth = 0;
      next.inclination = 0.04;
      next.distance = small ? 1.15 : 2.7;
    } else {
      next.target = [-0.08, small ? 0.13 : 0.27, 0];
      next.azimuth = name === "front" ? Math.PI / 2 : 0.8;
      next.inclination = name === "front" ? 1.15 : 1.03;
      next.distance = name === "wide" ? 3.7 : env.model.cameraDistance;
    }
    previous ??= current; // Keep the view from before the first preset.
    write(next);
    restore.disabled = false;
  }
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.onclick = () => apply(button.dataset.view);
  });
  restore.onclick = () => {
    if (previous) write(previous);
    previous = null;
    restore.disabled = true;
  };
  return { apply };
}
