import { j as l, L as X, o as ee, a as te, $ as V, b as re, i as Y } from "./index-D4Isi5fY.js";
import { u as ne } from "./useLexicalNodeSelection.prod-D29Exbaz.js";
import { createCommand as se, $getSelection as A, $isNodeSelection as L, $setSelection as B, $isRangeSelection as oe, KEY_ESCAPE_COMMAND as ie, COMMAND_PRIORITY_LOW as M, KEY_ENTER_COMMAND as ae, KEY_BACKSPACE_COMMAND as ce, KEY_DELETE_COMMAND as le, DRAGSTART_COMMAND as ue, CLICK_COMMAND as de, SELECTION_CHANGE_COMMAND as me, $getNodeByKey as K } from "lexical";
import { useRef as P, useState as k, useCallback as $, useEffect as ge, Suspense as he } from "react";
const fe = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22%203H2v18h20v-2h-2v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-2V5h2V3zm-2%204v2h-2v2h2v2h-2v2h2v2h-2v2H4V5h14v2h2zm-6%202h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v-2h-2V9zM6%207h2v2H6V7z'%20fill='%23000000'/%3e%3c/svg%3e";
function G(h, E, u) {
  return Math.min(Math.max(h, E), u);
}
const r = {
  east: 1,
  north: 8,
  south: 2,
  west: 4
};
function pe({
  onResizeStart: h,
  onResizeEnd: E,
  imageRef: u,
  maxWidth: N,
  editor: D
}) {
  const y = P(null), z = P({
    priority: "",
    value: "default"
  }), C = P({
    currentHeight: 0,
    currentWidth: 0,
    direction: 0,
    isResizing: !1,
    ratio: 0,
    startHeight: 0,
    startWidth: 0,
    startX: 0,
    startY: 0
  }), g = D.getRootElement(), j = N || (g !== null ? g.getBoundingClientRect().width - 20 : 100), S = g !== null ? g.getBoundingClientRect().height - 20 : 100, b = 100, f = 100, x = (e) => {
    const s = e === r.east || e === r.west, t = e === r.north || e === r.south, p = e & r.north && e & r.west || e & r.south && e & r.east, m = s ? "ew" : t ? "ns" : p ? "nwse" : "nesw";
    g !== null && g.style.setProperty(
      "cursor",
      `${m}-resize`,
      "important"
    ), document.body !== null && (document.body.style.setProperty(
      "cursor",
      `${m}-resize`,
      "important"
    ), z.current.value = document.body.style.getPropertyValue(
      "-webkit-user-select"
    ), z.current.priority = document.body.style.getPropertyPriority(
      "-webkit-user-select"
    ), document.body.style.setProperty(
      "-webkit-user-select",
      "none",
      "important"
    ));
  }, H = () => {
    g !== null && g.style.setProperty("cursor", "text"), document.body !== null && (document.body.style.setProperty("cursor", "default"), document.body.style.setProperty(
      "-webkit-user-select",
      z.current.value,
      z.current.priority
    ));
  }, d = (e, s) => {
    if (!D.isEditable())
      return;
    const t = u.current, p = y.current;
    if (t !== null && p !== null) {
      e.preventDefault();
      const { width: m, height: v } = t.getBoundingClientRect(), a = X(t), i = C.current;
      i.startWidth = m, i.startHeight = v, i.ratio = m / v, i.currentWidth = m, i.currentHeight = v, i.startX = e.clientX / a, i.startY = e.clientY / a, i.isResizing = !0, i.direction = s, x(s), h(), p.classList.add("image-control-wrapper--resizing"), t.style.height = `${v}px`, t.style.width = `${m}px`, document.addEventListener("pointermove", I), document.addEventListener("pointerup", n);
    }
  }, I = (e) => {
    const s = u.current, t = C.current, p = t.direction & (r.east | r.west), m = t.direction & (r.south | r.north);
    if (s !== null && t.isResizing) {
      const v = X(s);
      if (p && m) {
        let a = Math.floor(t.startX - e.clientX / v);
        a = t.direction & r.east ? -a : a;
        const i = G(
          t.startWidth + a,
          b,
          j
        ), _ = i / t.ratio;
        s.style.width = `${i}px`, s.style.height = `${_}px`, t.currentHeight = _, t.currentWidth = i;
      } else if (m) {
        let a = Math.floor(t.startY - e.clientY / v);
        a = t.direction & r.south ? -a : a;
        const i = G(
          t.startHeight + a,
          f,
          S
        );
        s.style.height = `${i}px`, t.currentHeight = i;
      } else {
        let a = Math.floor(t.startX - e.clientX / v);
        a = t.direction & r.east ? -a : a;
        const i = G(
          t.startWidth + a,
          b,
          j
        );
        s.style.width = `${i}px`, t.currentWidth = i;
      }
    }
  }, n = () => {
    const e = u.current, s = C.current, t = y.current;
    if (e !== null && t !== null && s.isResizing) {
      const p = s.currentWidth, m = s.currentHeight;
      s.startWidth = 0, s.startHeight = 0, s.ratio = 0, s.startX = 0, s.startY = 0, s.currentWidth = 0, s.currentHeight = 0, s.isResizing = !1, t.classList.remove("image-control-wrapper--resizing"), H(), E(p, m), document.removeEventListener("pointermove", I), document.removeEventListener("pointerup", n);
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { ref: y, children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "image-resizer image-resizer-n",
        onPointerDown: (e) => {
          d(e, r.north);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "image-resizer image-resizer-ne",
        onPointerDown: (e) => {
          d(e, r.north | r.east);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "image-resizer image-resizer-e",
        onPointerDown: (e) => {
          d(e, r.east);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "image-resizer image-resizer-se",
        onPointerDown: (e) => {
          d(e, r.south | r.east);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "image-resizer image-resizer-s",
        onPointerDown: (e) => {
          d(e, r.south);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "image-resizer image-resizer-sw",
        onPointerDown: (e) => {
          d(e, r.south | r.west);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "image-resizer image-resizer-w",
        onPointerDown: (e) => {
          d(e, r.west);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "image-resizer image-resizer-nw",
        onPointerDown: (e) => {
          d(e, r.north | r.west);
        }
      }
    )
  ] });
}
const U = se("RIGHT_CLICK_IMAGE_COMMAND");
function ve(h) {
  if (!Y.has(h))
    throw new Promise((E) => {
      const u = new Image();
      u.src = h, u.onload = () => {
        Y.add(h), E(null);
      }, u.onerror = () => {
        Y.add(h);
      };
    });
}
function we({
  altText: h,
  className: E,
  imageRef: u,
  src: N,
  width: D,
  height: y,
  maxWidth: z,
  onError: C
}) {
  return ve(N), /* @__PURE__ */ l.jsx(
    "img",
    {
      className: E || void 0,
      src: N,
      alt: h,
      ref: u,
      style: {
        height: y,
        maxWidth: z,
        width: D
      },
      onError: C,
      draggable: "false"
    }
  );
}
function Ee() {
  return /* @__PURE__ */ l.jsx(
    "img",
    {
      src: fe,
      style: {
        height: 200,
        opacity: 0.2,
        width: 200
      },
      draggable: "false"
    }
  );
}
function Re({
  src: h,
  altText: E,
  nodeKey: u,
  width: N,
  height: D,
  maxWidth: y,
  resizable: z,
  showCaption: C,
  caption: g,
  captionsEnabled: j
}) {
  const S = P(null), b = P(null), [f, x, H] = ne(u), [d, I] = k(!1), [n] = ee(), [e, s] = k(null), t = P(null), [p, m] = k(!1), v = te(), a = $(
    (c) => {
      const o = A();
      return f && L(o) && (c.preventDefault(), n.update(() => {
        o.getNodes().forEach((R) => {
          V(R) && R.remove();
        });
      })), !1;
    },
    [n, f]
  ), i = $(
    (c) => {
      const o = A(), w = b.current;
      if (f && L(o) && o.getNodes().length === 1) {
        if (C)
          return B(null), c.preventDefault(), g.focus(), !0;
        if (w !== null && w !== document.activeElement)
          return c.preventDefault(), w.focus(), !0;
      }
      return !1;
    },
    [g, f, C]
  ), _ = $(
    (c) => t.current === g || b.current === c.target ? (B(null), n.update(() => {
      x(!0);
      const o = n.getRootElement();
      o !== null && o.focus();
    }), !0) : !1,
    [g, n, x]
  ), W = $(
    (c) => {
      const o = c;
      return d ? !0 : o.target === S.current ? (o.shiftKey ? x(!f) : (H(), x(!0)), !0) : !1;
    },
    [d, f, x, H]
  ), O = $(
    (c) => {
      n.getEditorState().read(() => {
        const o = A();
        c.target.tagName === "IMG" && oe(o) && o.getNodes().length === 1 && n.dispatchCommand(
          U,
          c
        );
      });
    },
    [n]
  );
  ge(() => {
    let c = !0;
    const o = n.getRootElement(), w = re(
      n.registerUpdateListener(({ editorState: R }) => {
        c && s(R.read(() => A()));
      }),
      n.registerCommand(
        me,
        (R, Z) => (t.current = Z, !1),
        M
      ),
      n.registerCommand(
        de,
        W,
        M
      ),
      n.registerCommand(
        U,
        W,
        M
      ),
      n.registerCommand(
        ue,
        (R) => R.target === S.current ? (R.preventDefault(), !0) : !1,
        M
      ),
      n.registerCommand(
        le,
        a,
        M
      ),
      n.registerCommand(
        ce,
        a,
        M
      ),
      n.registerCommand(ae, i, M),
      n.registerCommand(
        ie,
        _,
        M
      )
    );
    return o == null || o.addEventListener("contextmenu", O), () => {
      c = !1, w(), o == null || o.removeEventListener("contextmenu", O);
    };
  }, [
    H,
    n,
    d,
    f,
    u,
    a,
    i,
    _,
    W,
    O,
    x
  ]);
  const F = () => {
    n.update(() => {
      const c = K(u);
      V(c) && c.setShowCaption(!0);
    });
  }, q = (c, o) => {
    setTimeout(() => {
      I(!1);
    }, 200), n.update(() => {
      const w = K(u);
      V(w) && w.setWidthAndHeight(c, o);
    });
  }, J = () => {
    I(!0);
  }, Q = f && L(e) && !d, T = (f || d) && v;
  return /* @__PURE__ */ l.jsx(he, { fallback: null, children: /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx("div", { draggable: Q, children: p ? /* @__PURE__ */ l.jsx(Ee, {}) : /* @__PURE__ */ l.jsx(
      we,
      {
        className: T ? `focused ${L(e) ? "draggable" : ""}` : null,
        src: h,
        altText: E,
        imageRef: S,
        width: N,
        height: D,
        maxWidth: y,
        onError: () => m(!0)
      }
    ) }),
    z && L(e) && T && /* @__PURE__ */ l.jsx(
      pe,
      {
        showCaption: C,
        setShowCaption: F,
        editor: n,
        buttonRef: b,
        imageRef: S,
        maxWidth: y,
        onResizeStart: J,
        onResizeEnd: q,
        captionsEnabled: !p && j
      }
    )
  ] }) });
}
export {
  U as RIGHT_CLICK_IMAGE_COMMAND,
  Re as default
};
