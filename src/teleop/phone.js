import { G7 } from "../../vendor/qrcode.js";
var QO = new Set([
  "takeover",
  "pause",
  "record-start",
  "record-stop",
  "finish",
  "grip-open",
  "grip-close",
  "marker",
]);
function validatePhonePacket(s) {
  if (
    !s ||
    !Number.isSafeInteger(s.seq) ||
    s.seq < 0 ||
    s.seq > 1e12 ||
    !Number.isFinite(s.echo)
  )
    throw Error("Invalid input sequence");
  let e = (n) => {
      if (!Array.isArray(n) || n.length !== 3 || !n.every(Number.isFinite))
        throw Error("Invalid axes");
      return n.map((r) => Math.max(-1, Math.min(1, r)));
    },
    t = s.event == null ? null : { id: s.event.id, type: s.event.type };
  if (t && (!Number.isSafeInteger(t.id) || t.id < 1 || !QO.has(t.type)))
    throw Error("Invalid control event");
  return {
    seq: s.seq,
    echo: s.echo,
    enabled: s.enabled === !0,
    fine: s.fine === !0,
    translation: e(s.translation),
    rotation: e(s.rotation),
    event: t,
  };
}
var PhoneInputBuffer = class {
  constructor(e = () => Date.now()) {
    ((this.now = e), this.clear(), (this.seq = -1), (this.eventId = 0));
  }
  clear() {
    ((this.packet = null),
      (this.received = 0),
      (this.lastArrival = 0),
      (this.needsRelease = !0),
      (this.ttl = 450));
  }
  receive(e, t = 0, n = 450) {
    let r = validatePhonePacket(e),
      i = this.now();
    return r.seq <= this.seq ||
      t > n ||
      i - r.echo > Math.max(1800, n * 4) ||
      r.echo > i + 100
      ? !1
      : ((this.seq = r.seq),
        (this.ttl = n),
        (this.packet = r),
        (this.lastArrival = i),
        (this.received = i - Math.max(0, t)),
        r.enabled || (this.needsRelease = !1),
        !0);
  }
  read() {
    let e = this.packet && this.now() - this.received <= this.ttl,
      t = this.packet;
    return {
      translation:
        e && !this.needsRelease && t.enabled ? t.translation : [0, 0, 0],
      rotation: e && !this.needsRelease && t.enabled ? t.rotation : [0, 0, 0],
      enabled: !!(e && !this.needsRelease && t.enabled),
      fine: !!t?.fine,
      fresh: !!e,
      ready:
        !!t && !this.needsRelease && this.now() - this.lastArrival <= this.ttl,
      sequence: this.seq,
    };
  }
  nextEvent() {
    let e = this.packet?.event;
    return !e || e.id <= this.eventId ? null : ((this.eventId = e.id), e);
  }
};
async function Ua(s, e, t, n) {
  let r = n ? null : new AbortController(),
    i = r ? setTimeout(() => r.abort(), 6e3) : null;
  try {
    let c = await fetch(s, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(e ? { Authorization: "Bearer " + e } : {}),
        },
        body: JSON.stringify(t),
        cache: "no-store",
        signal: n || r.signal,
      }),
      o = await c.json().catch(() => ({ error: "Phone service unavailable" }));
    if (!c.ok)
      throw Object.assign(Error(o.error || "Connection failed"), {
        status: c.status,
      });
    return o;
  } finally {
    clearTimeout(i);
  }
}
function createPeerConnection(s, e = () => {}) {
  if (typeof RTCPeerConnection > "u") return null;
  let t = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    }),
    n = null,
    r = (c) => {
      ((n = c),
        (c.onopen = c.onclose = () => e()),
        (c.onmessage = (o) => {
          if (!(typeof o.data != "string" || o.data.length > 5e3))
            try {
              s(JSON.parse(o.data));
            } catch {}
        }));
    };
  ((t.ondatachannel = (c) => r(c.channel)), (t.onconnectionstatechange = e));
  let i = async () => (
    t.iceGatheringState !== "complete" &&
      (await new Promise((c) => {
        let o = () => {
            (clearTimeout(d),
              t.removeEventListener("icegatheringstatechange", h),
              c());
          },
          h = () => {
            t.iceGatheringState === "complete" && o();
          },
          d = setTimeout(o, 3e3);
        t.addEventListener("icegatheringstatechange", h);
      })),
    JSON.stringify(t.localDescription)
  );
  return {
    get open() {
      return n?.readyState === "open";
    },
    send(c) {
      if (n?.readyState !== "open" || n.bufferedAmount > 12e3) return !1;
      try {
        return (n.send(JSON.stringify(c)), !0);
      } catch {
        return !1;
      }
    },
    async offer() {
      return (
        r(
          t.createDataChannel("phone-control", {
            ordered: !1,
            maxRetransmits: 0,
          }),
        ),
        await t.setLocalDescription(await t.createOffer()),
        i()
      );
    },
    async answer(c) {
      return (
        await t.setRemoteDescription(JSON.parse(c)),
        await t.setLocalDescription(await t.createAnswer()),
        i()
      );
    },
    async accept(c) {
      t.signalingState === "have-local-offer" &&
        (await t.setRemoteDescription(JSON.parse(c)));
    },
    close() {
      (n?.close(), t.close());
    },
  };
}
function createPhonePairing({
  container: s,
  getStatus: e,
  onCommand: t,
  onPause: n,
}) {
  s.innerHTML =
    '<div class="phonePairHeader"><div><strong>Use your phone</strong><p class="note">Scan, pair, and control this robot.</p></div><button id="phoneCreate">Connect phone</button></div><p id="phoneStatus" class="note" role="status"></p><div id="phoneSession" hidden><div id="phoneInvite"><div id="phoneQR" aria-label="Phone pairing QR code"></div><label for="phoneURL">Temporary pairing link</label><input id="phoneURL" type="text" readonly><button id="phoneCopy" class="wide">Copy pairing link</button><p class="note">Scan with your phone camera. Approve the connection here. Invite expires after 5 minutes.</p></div><div id="phoneApproveBox" class="demoNotice" hidden><p>A phone is ready. Allow it to start manual control.</p><button id="phoneApprove" class="primary wide">Allow & enable phone</button></div><p id="phoneSessionInfo" class="note demoNumeric"></p><button id="phoneEnd" class="wide">End phone session</button></div>';
  let r = (W) => s.querySelector("#" + W),
    i = new PhoneInputBuffer(),
    c = null,
    o = null,
    h,
    d,
    f = !1,
    p = !1,
    b = !1,
    H = !1,
    P = "https",
    X = "",
    y = null,
    O = !1,
    D = 0,
    L = !1;
  function g(W) {
    r("phoneStatus").textContent = W;
  }
  function q() {
    let W = e(),
      $ = i.read();
    return {
      ...W,
      inputReady: $.ready,
      inputActive: $.enabled,
      inputSequence: $.sequence,
      inputAgeMs: i.received ? Date.now() - i.received : null,
      clock: Date.now(),
      ack: i.eventId,
      message: X,
      transport: P,
      expires: c?.expires,
    };
  }
  function F(W, $ = 0, J = "https") {
    if (
      !(!c || !p || Date.now() >= c.expires || !L) &&
      i.receive(W, $, J === "https" ? 1500 : void 0)
    ) {
      ((H = !0), (P = J));
      let U = i.nextEvent();
      if (U)
        try {
          (t(U, i.read().enabled), (X = ""));
        } catch (Z) {
          X = Z.message;
        }
    }
  }
  function T() {
    (i.clear(), (H = !1));
  }
  function C(W = "Phone session ended.", $ = !0) {
    let J = c;
    (++D,
      (c = null),
      (p = !1),
      (L = !1),
      clearTimeout(h),
      clearInterval(d),
      o?.close(),
      (o = null),
      T(),
      n(W),
      (r("phoneSession").hidden = !0),
      (r("phoneCreate").disabled = !1),
      (r("phoneCreate").textContent = "Connect phone"),
      g(W),
      J &&
        $ &&
        Ua("/api/phone/" + J.id + "/host", J.hostToken, { close: !0 }).catch(
          () => {},
        ));
  }
  function M(W = 500) {
    (clearTimeout(h), c && (h = setTimeout(E, W)));
  }
  async function E() {
    if (!c || f) return;
    f = !0;
    let W = c,
      $ = D,
      J = Date.now();
    try {
      let U = q();
      o?.send({ kind: "status", state: U });
      let Z = await Ua("/api/phone/" + W.id + "/host", W.hostToken, {
        state: U,
        offer: y,
      });
      if ($ !== D) return;
      ((y = null),
        (L = !0),
        (p = Z.approved),
        (r("phoneApproveBox").hidden = !Z.waiting || p),
        (r("phoneInvite").hidden = p),
        Z.answer && !O && o && ((O = !0), o.accept(Z.answer).catch(() => {})),
        Z.packet && F(Z.packet, Z.packetAge + Date.now() - J, "https"));
      let ee = Math.max(0, Math.ceil((W.expires - Date.now()) / 6e4));
      ((r("phoneSessionInfo").textContent =
        "Session ends in " +
        ee +
        " min \xB7 " +
        (P === "webrtc" ? "Direct connection" : "HTTPS relay")),
        g(
          p
            ? Z.phoneAge > 3e3
              ? "Phone connection interrupted. Reopen the controller."
              : e().selected
                ? "Phone paired \xB7 " +
                  (P === "webrtc" ? "direct control" : "HTTPS relay")
                : "Phone paired. Select Phone controller as the input device."
            : Z.waiting
              ? "Approve the phone below to enable pairing."
              : "Waiting for your phone to scan the code.",
        ));
    } catch (U) {
      if ($ !== D) return;
      if (
        ((L = !1),
        T(),
        n("Phone connection interrupted. Motion paused."),
        [401, 404, 410].includes(U.status))
      ) {
        C(U.message, !1);
        return;
      }
      g("Pairing connection interrupted. Retrying\u2026");
    } finally {
      ((f = !1), c && $ === D && M(p ? 110 : 500));
    }
  }
  return (
    (r("phoneCreate").onclick = async () => {
      if (c || f) return;
      ((r("phoneCreate").disabled = !0),
        g("Creating a temporary pairing link\u2026"));
      let W = ++D;
      try {
        if (((c = await Ua("/api/phone/create", null, {})), W !== D)) return;
        ((L = !0),
          (p = !1),
          (O = !1),
          (y = null),
          (X = ""),
          (i.seq = -1),
          (i.eventId = 0),
          T());
        let $ = new URL("/phone", location.origin);
        (($.hash = new URLSearchParams({
          session: c.id,
          key: c.phoneToken,
        }).toString()),
          (r("phoneURL").value = $.href));
        let J = G7(0, "M");
        (J.addData($.href),
          J.make(),
          (r("phoneQR").innerHTML = J.createSvgTag({
            cellSize: 4,
            margin: 16,
            scalable: !0,
          })),
          (r("phoneSession").hidden = !1),
          (r("phoneInvite").hidden = !1),
          (r("phoneApproveBox").hidden = !0),
          (o = createPeerConnection((U) => {
            U.kind === "input" && F(U.packet, 0, "webrtc");
          })),
          o &&
            o
              .offer()
              .then((Z) => {
                W === D && (y = Z);
              })
              .catch(() => {}),
          (d = setInterval(() => {
            if (!c) return;
            if (Date.now() >= c.expires) {
              C("Phone session expired. Connect again.");
              return;
            }
            let U = e();
            (H &&
              !i.read().fresh &&
              Date.now() - i.lastArrival > i.ttl &&
              U.selected &&
              U.running &&
              (T(),
              n(
                "Phone input timed out. Motion paused. Tap Take control to resume.",
              )),
              o?.open && o.send({ kind: "status", state: q() }));
          }, 100)),
          M(0));
      } catch ($) {
        ((c = null), g($.message), (r("phoneCreate").disabled = !1));
      }
    }),
    (r("phoneApprove").onclick = async () => {
      if (!(!c || b)) {
        ((b = !0), (r("phoneApprove").disabled = !0));
        try {
          (await Ua("/api/phone/" + c.id + "/host", c.hostToken, {
            approve: !0,
            state: q(),
          }),
            (p = !0),
            t({ type: "select-phone" }, !1),
            (r("phoneApproveBox").hidden = !0),
            (r("phoneInvite").hidden = !0));
          try {
            (t({ type: "takeover" }, !1),
              (X = ""),
              g("Phone enabled. Steer from your phone."));
          } catch (W) {
            ((X = W.message), g("Phone connected. " + W.message));
          }
          M(0);
        } catch (W) {
          g(W.message);
        } finally {
          ((b = !1), (r("phoneApprove").disabled = !1));
        }
      }
    }),
    (r("phoneEnd").onclick = () => C()),
    (r("phoneCopy").onclick = async () => {
      try {
        (await navigator.clipboard.writeText(r("phoneURL").value),
          g("Pairing link copied."));
      } catch {
        (r("phoneURL").focus(),
          r("phoneURL").select(),
          g("Select and copy the pairing link."));
      }
    }),
    location.protocol === "file:" &&
      ((r("phoneCreate").disabled = !0),
      g(
        "Phone pairing requires a server with /api/phone endpoints; static hosting alone is insufficient.",
      )),
    window.addEventListener("pagehide", () => {
      c &&
        Ua("/api/phone/" + c.id + "/host", c.hostToken, { close: !0 }).catch(
          () => {},
        );
    }),
    {
      clear: T,
      read: () =>
        p && L
          ? i.read()
          : {
              translation: [0, 0, 0],
              rotation: [0, 0, 0],
              enabled: !1,
              fine: !1,
              fresh: !1,
            },
      metadata: () =>
        c
          ? {
              sessionId: c.id,
              transport: P,
              sequence: i.seq,
              inputAgeMs: i.received
                ? Math.max(0, Date.now() - i.received)
                : null,
            }
          : null,
    }
  );
}
export { createPhonePairing };

export { validatePhonePacket, PhoneInputBuffer };
