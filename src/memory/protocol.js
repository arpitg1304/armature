/** Pure 30 Hz memory state machine. observe() is current public input; report() is privileged evaluator output. Keep hidden conditions, answers, and correctness out of observe(). */
var MEMORY_TASKS = {
    recall: {
      label: "Delayed request",
      description:
        "Read a part request, withstand distraction, then fetch the requested part.",
    },
    covered: {
      label: "Covered-bin recall",
      description:
        "Watch which bay is marked. Covers hide all parts before the retrieval query.",
    },
    sequence: {
      label: "Interrupted kitting",
      description:
        "Memorize a three-part recipe. Resume the remaining order after an interruption.",
    },
    revision: {
      label: "Revised instruction",
      description:
        "Remember a corrected request and discard the superseded one.",
    },
  },
  RECIPE_PERMUTATIONS = [
    [0, 1, 2],
    [0, 2, 1],
    [1, 0, 2],
    [1, 2, 0],
    [2, 0, 1],
    [2, 1, 0],
  ],
  hashSeed = (n) => (
    (n = Math.imul(n ^ (n >>> 16), 73244475)),
    (n = Math.imul(n ^ (n >>> 16), 73244475)),
    (n ^ (n >>> 16)) >>> 0
  ),
  MemoryProtocol = class {
    constructor(e = {}) {
      if (
        ((this.settings = {
          task: "covered",
          seed: 42,
          delay: 6,
          controller: "history",
          windowSeconds: 2,
          ...e,
        }),
        !MEMORY_TASKS[this.settings.task])
      )
        throw Error("Unknown memory task");
      if (!Number.isFinite(this.settings.seed))
        throw Error("Seed must be finite");
      if (
        this.settings.layoutSeed !== void 0 &&
        !Number.isFinite(this.settings.layoutSeed)
      )
        throw Error("Layout seed must be finite");
      if (
        ((this.settings.seed = Math.max(
          0,
          Math.min(4294967295, Math.floor(this.settings.seed)),
        )),
        (this.settings.delay = Math.max(
          1,
          Math.min(30, Number(this.settings.delay) || 6),
        )),
        (this.settings.windowSeconds = Math.max(
          0.1,
          Math.min(30, Number(this.settings.windowSeconds) || 2),
        )),
        !["human", "history", "none", "window", "stale"].includes(
          this.settings.controller,
        ))
      )
        throw Error("Unknown memory baseline");
      let t = this.settings.task === "sequence" ? 6 : 3;
      if (
        ((this.condition =
          this.settings.condition ??
          hashSeed(this.settings.seed ^ 2773029543) % t),
        !Number.isInteger(this.condition) ||
          this.condition < 0 ||
          this.condition >= t)
      )
        throw Error("Invalid history condition");
      ((this.answer =
        this.settings.task === "sequence"
          ? RECIPE_PERMUTATIONS[this.condition].slice()
          : [this.condition]),
        (this.initial =
          this.settings.task === "revision"
            ? (this.condition + 1) % 3
            : this.answer[0]),
        (this.clock = 0),
        (this.stageTick = 0),
        (this.phase = "study"),
        (this.events = []),
        (this.decisions = []),
        (this.placements = []),
        (this.aborted = !1),
        this.emit("cue", {
          kind:
            this.settings.task === "sequence"
              ? "recipe"
              : this.settings.task === "covered"
                ? "mark"
                : "request",
          items:
            this.settings.task === "sequence"
              ? this.answer.slice()
              : [this.initial],
        }));
    }
    emit(e, t = {}) {
      let r = { step: this.clock, timestamp: this.clock / 30, type: e, ...t };
      return (this.events.push(r), r);
    }
    setPhase(e) {
      ((this.phase = e),
        (this.stageTick = 0),
        this.emit("phase", { phase: e }));
    }
    advance() {
      this.phase === "complete" ||
        this.aborted ||
        (this.clock++,
        this.stageTick++,
        this.phase === "study" && this.stageTick >= 90
          ? this.settings.task === "revision"
            ? (this.setPhase("correction"),
              this.emit("cue", { kind: "correction", items: [this.answer[0]] }))
            : this.distract()
          : this.phase === "correction" && this.stageTick >= 90
            ? this.distract()
            : (this.phase === "delay" || this.phase === "interruption") &&
              (this.stageTick >= Math.round(this.settings.delay * 30)
                ? this.setPhase("choose")
                : this.stageTick % 30 === 0 &&
                  this.emit("distractor", {
                    code: (this.stageTick / 30 + 7) % 10,
                  })));
    }
    distract(e = !1) {
      (this.setPhase(e ? "interruption" : "delay"),
        this.emit("distractor", { code: 7 }));
    }
    observe() {
      let e = this.phase === "study" || this.phase === "correction",
        t = e ? this.events.filter((r) => r.type === "cue").at(-1) : null;
      return {
        task: this.settings.task,
        phase: this.phase,
        step: this.clock,
        timestamp: this.clock / 30,
        cue: t ? { kind: t.kind, items: t.items.slice() } : null,
        instruction:
          this.phase === "choose"
            ? this.settings.task === "sequence"
              ? "Place the next part from the remembered recipe."
              : this.settings.task === "covered"
                ? "Retrieve the part from the previously marked bay."
                : "Fetch the part from the latest valid request."
            : "",
        distractor:
          this.phase === "delay" || this.phase === "interruption"
            ? this.events.filter((r) => r.type === "distractor").at(-1)?.code
            : null,
        coversClosed:
          this.settings.task === "covered" &&
          ["delay", "choose"].includes(this.phase),
        markedBay:
          this.settings.task === "covered" && this.phase === "study"
            ? this.initial
            : null,
        completedChoices: this.decisions.map((r) => r.item),
        slot: this.decisions.length,
        available: [0, 1, 2].filter(
          (r) => !this.decisions.some((c) => c.item === r),
        ),
        placementFeedback: this.placements.map((r) => ({
          placed: r.placed,
          error: r.error,
        })),
      };
    }
    baselineChoice() {
      let e = this.settings.controller;
      if (e === "human") return null;
      let t =
          e === "none"
            ? []
            : this.events.filter(
                (v) =>
                  v.type === "cue" &&
                  (e !== "window" ||
                    v.step + 89 >=
                      this.clock - this.settings.windowSeconds * 30),
              ),
        r = e === "stale" ? t[0] : t.at(-1),
        c = this.observe().available,
        i =
          r?.items[
            this.settings.task === "sequence" ? this.decisions.length : 0
          ];
      return (c.includes(i) || (i = c[0]), i);
    }
    choose(e) {
      if (this.phase !== "choose") throw Error("Wait for the retrieval query.");
      if (!Number.isInteger(e) || !this.observe().available.includes(e))
        throw Error("Choose an available part.");
      let t = this.decisions.length;
      return (
        this.decisions.push({
          item: e,
          slot: t,
          step: this.clock,
          correct: e === this.answer[t],
        }),
        this.emit("choice", { item: e, slot: t }),
        this.setPhase("execute"),
        { item: e, slot: t }
      );
    }
    placed(e, t) {
      if (this.phase !== "execute") throw Error("No placement in progress.");
      if (
        (this.placements.push({
          placed: !!e,
          error: Number.isFinite(t) ? t : null,
        }),
        this.emit("placement", {
          item: this.decisions.at(-1).item,
          placed: !!e,
          error: Number.isFinite(t) ? t : null,
        }),
        this.decisions.length >= this.answer.length)
      ) {
        this.setPhase("complete");
        return;
      }
      this.decisions.length === 1 ? this.distract(!0) : this.setPhase("choose");
    }
    abort(e) {
      this.phase !== "complete" &&
        ((this.aborted = !0),
        (this.phase = "aborted"),
        this.emit("aborted", { reason: e }));
    }
    report() {
      if (this.phase !== "complete" && !this.aborted) return null;
      let e = this.decisions.filter((t) => t.correct).length;
      return {
        protocol: "armature-memory-v1",
        settings: { ...this.settings, condition: this.condition },
        answer: this.answer.slice(),
        events: this.events.slice(),
        decisions: this.decisions.slice(),
        placements: this.placements.slice(),
        completed: !this.aborted,
        correctChoices: e,
        totalChoices: this.answer.length,
        memorySuccess: !this.aborted && e === this.answer.length,
        physicalSuccess:
          !this.aborted &&
          this.placements.length === this.answer.length &&
          this.placements.every((t) => t.placed),
        success:
          !this.aborted &&
          e === this.answer.length &&
          this.placements.every((t) => t.placed),
        duration: this.clock / 30,
      };
    }
  };
function memoryCueText(n, e) {
  let t = n.cue;
  return t
    ? (t.kind === "recipe"
        ? "Recipe: "
        : t.kind === "correction"
          ? "Correction \u2014 use "
          : t.kind === "mark"
            ? "Marked bay: "
            : "Request: ") + t.items.map((r) => e[r]).join(" \u2192 ")
    : n.distractor !== null
      ? (n.phase === "interruption" ? "Interrupt: " : "Inspect status: ") +
        n.distractor
      : n.phase === "choose"
        ? n.instruction
        : n.phase === "execute"
          ? "Executing your committed choice\u2026"
          : n.phase === "complete"
            ? "Trial complete"
            : "Trial stopped";
}
export { MEMORY_TASKS, memoryCueText, MemoryProtocol };
