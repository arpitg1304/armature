// Research-only controls are opt-in; the public simulator hides them.
export const MEMORY_ENABLED =
  new URLSearchParams(globalThis.location?.search || "").get("memory") === "1";
