import { j as t, o as W, r as T, t as q, d as G, x as H, u as V, a as J, c as Q, b as X, h as ee, T as te, D as ne } from "./index-D4Isi5fY.js";
import * as A from "react";
import { useEffect as M, useContext as Y, createContext as re, useRef as N, useMemo as oe, useState as D, useCallback as R, Suspense as ae } from "react";
import { u as le } from "./useLexicalNodeSelection.prod-D29Exbaz.js";
import { $getSelection as I, $isNodeSelection as y, $setSelection as K, KEY_ESCAPE_COMMAND as se, COMMAND_PRIORITY_LOW as w, KEY_ENTER_COMMAND as ie, KEY_BACKSPACE_COMMAND as ce, KEY_DELETE_COMMAND as ue, DRAGSTART_COMMAND as de, CLICK_COMMAND as pe, SELECTION_CHANGE_COMMAND as fe, $getNodeByKey as ge } from "lexical";
function me(...e) {
  return e.filter(Boolean).join(" ");
}
function he({
  "data-test-id": e,
  children: n,
  className: o,
  onClick: i,
  disabled: c,
  small: r,
  title: a
}) {
  return /* @__PURE__ */ t.jsx(
    "button",
    {
      disabled: c,
      className: me(
        "Button__root",
        c && "Button__disabled",
        r && "Button__small",
        o
      ),
      onClick: i,
      title: a,
      "aria-label": a,
      ...e && { "data-test-id": e },
      children: n
    }
  );
}
function be({
  children: e,
  label: n,
  className: o,
  ...i
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ t.jsx("label", { style: { marginTop: "-1em" }, className: "Input__label", children: n }),
    /* @__PURE__ */ t.jsx("select", { ...i, className: o || "select", children: e })
  ] });
}
function xe({ defaultSelection: e }) {
  const [n] = W();
  return M(() => {
    n.focus(() => {
      const o = document.activeElement, i = n.getRootElement();
      i === null || o !== null && i.contains(o) || i.focus({ preventScroll: !0 });
    }, { defaultSelection: e });
  }, [e, n]), null;
}
function O(e, n) {
  return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, O(e, n);
}
var B = { error: null }, Ce = function(e) {
  var n, o;
  function i() {
    for (var r, a = arguments.length, s = new Array(a), u = 0; u < a; u++) s[u] = arguments[u];
    return (r = e.call.apply(e, [this].concat(s)) || this).state = B, r.resetErrorBoundary = function() {
      for (var d, g = arguments.length, f = new Array(g), p = 0; p < g; p++) f[p] = arguments[p];
      r.props.onReset == null || (d = r.props).onReset.apply(d, f), r.reset();
    }, r;
  }
  o = e, (n = i).prototype = Object.create(o.prototype), n.prototype.constructor = n, O(n, o), i.getDerivedStateFromError = function(r) {
    return { error: r };
  };
  var c = i.prototype;
  return c.reset = function() {
    this.setState(B);
  }, c.componentDidCatch = function(r, a) {
    var s, u;
    (s = (u = this.props).onError) == null || s.call(u, r, a);
  }, c.componentDidUpdate = function(r, a) {
    var s, u, d, g, f = this.state.error, p = this.props.resetKeys;
    f !== null && a.error !== null && ((d = r.resetKeys) === void 0 && (d = []), (g = p) === void 0 && (g = []), d.length !== g.length || d.some(function(m, l) {
      return !Object.is(m, g[l]);
    })) && ((s = (u = this.props).onResetKeysChange) == null || s.call(u, r.resetKeys, p), this.reset());
  }, c.render = function() {
    var r = this.state.error, a = this.props, s = a.fallbackRender, u = a.FallbackComponent, d = a.fallback;
    if (r !== null) {
      var g = { error: r, resetErrorBoundary: this.resetErrorBoundary };
      if (A.isValidElement(d)) return d;
      if (typeof s == "function") return s(g);
      if (u) return A.createElement(u, g);
      throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, i;
}(A.Component);
function _e({ children: e, onError: n }) {
  return t.jsx(Ce, { fallback: t.jsx("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" }, children: "An error was thrown." }), onError: n, children: e });
}
const L = [["Cat", "rgb(125, 50, 0)"], ["Dog", "rgb(100, 0, 0)"], ["Rabbit", "rgb(150, 0, 0)"], ["Frog", "rgb(200, 0, 0)"], ["Fox", "rgb(200, 75, 0)"], ["Hedgehog", "rgb(0, 75, 0)"], ["Pigeon", "rgb(0, 125, 0)"], ["Squirrel", "rgb(75, 100, 0)"], ["Bear", "rgb(125, 100, 0)"], ["Tiger", "rgb(0, 0, 150)"], ["Leopard", "rgb(0, 0, 200)"], ["Zebra", "rgb(0, 0, 250)"], ["Wolf", "rgb(0, 100, 150)"], ["Owl", "rgb(0, 100, 100)"], ["Gull", "rgb(100, 0, 100)"], ["Squid", "rgb(150, 0, 150)"]], P = L[Math.floor(Math.random() * L.length)], Ee = re({ clientID: 0, color: P[1], isCollabActive: !1, name: P[0], yjsDocMap: /* @__PURE__ */ new Map() });
function ve(e, n) {
  return Y(Ee);
}
function F(e) {
  const n = e.transform();
  return n !== null ? /* @__PURE__ */ new Set([n]) : /* @__PURE__ */ new Set();
}
function je({ initialEditor: e, children: n, initialNodes: o, initialTheme: i, skipCollabChecks: c }) {
  const r = N(!1), a = Y(T);
  a == null && function(m, ...l) {
    const h = new URL("https://lexical.dev/docs/error"), _ = new URLSearchParams();
    _.append("code", m);
    for (const b of l) _.append("v", b);
    throw h.search = _.toString(), Error(`Minified Lexical error #${m}; visit ${h.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }(9);
  const [s, { getTheme: u }] = a, d = oe(() => {
    const m = i || u() || void 0, l = q(a, m);
    if (m !== void 0 && (e._config.theme = m), e._parentEditor = s, o) for (let h of o) {
      let _ = null, b = null;
      if (typeof h != "function") {
        const v = h;
        h = v.replace, _ = v.with, b = v.withKlass || null;
      }
      const S = e._nodes.get(h.getType());
      e._nodes.set(h.getType(), { exportDOM: S ? S.exportDOM : void 0, klass: h, replace: _, replaceWithKlass: b, transforms: F(h) });
    }
    else {
      const h = e._nodes = new Map(s._nodes);
      for (const [_, b] of h) e._nodes.set(_, { exportDOM: b.exportDOM, klass: b.klass, replace: b.replace, replaceWithKlass: b.replaceWithKlass, transforms: F(b.klass) });
    }
    return e._config.namespace = s._config.namespace, e._editable = s._editable, [e, l];
  }, []), { isCollabActive: g, yjsDocMap: f } = ve(), p = c || r.current || f.has(e.getKey());
  return M(() => {
    p && (r.current = !0);
  }, [p]), M(() => s.registerEditableListener((m) => {
    e.setEditable(m);
  }), [e, s]), t.jsx(T.Provider, { value: d, children: !g || p ? n : null });
}
const we = new RegExp(
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/
);
function ye(e) {
  return e === "https://" || we.test(e);
}
function Se({
  hasLinkAttributes: e = !1
}) {
  return /* @__PURE__ */ t.jsx(
    G,
    {
      validateUrl: ye,
      attributes: e ? {
        rel: "noopener noreferrer",
        target: "_blank"
      } : void 0
    }
  );
}
function Ne({
  className: e,
  placeholder: n,
  placeholderClassName: o
}) {
  return /* @__PURE__ */ t.jsx(
    H,
    {
      className: e ?? "ContentEditable__root",
      "aria-placeholder": n,
      placeholder: /* @__PURE__ */ t.jsx("div", { className: o ?? "ContentEditable__placeholder", children: n })
    }
  );
}
const U = /* @__PURE__ */ new Set();
function De(e) {
  if (!U.has(e))
    throw new Promise((n) => {
      const o = new Image();
      o.src = e, o.onload = () => {
        U.add(e), n(null);
      };
    });
}
function Me({
  altText: e,
  className: n,
  imageRef: o,
  src: i,
  width: c,
  height: r,
  position: a
}) {
  return De(i), /* @__PURE__ */ t.jsx(
    "img",
    {
      className: n || void 0,
      src: i,
      alt: e,
      ref: o,
      "data-position": a,
      style: {
        display: "block",
        height: r,
        width: c
      },
      draggable: "false"
    }
  );
}
function ke({
  activeEditor: e,
  nodeKey: n,
  onClose: o
}) {
  const c = e.getEditorState().read(
    () => ge(n)
  ), [r, a] = D(c.getAltText()), [s, u] = D(c.getShowCaption()), [d, g] = D(c.getPosition()), f = (l) => {
    u(l.target.checked);
  }, p = (l) => {
    g(l.target.value);
  }, m = () => {
    const l = { altText: r, position: d, showCaption: s };
    c && e.update(() => {
      c.update(l);
    }), o();
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ t.jsx(
      te,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: a,
        value: r,
        "data-test-id": "image-modal-alt-text-input"
      }
    ) }),
    /* @__PURE__ */ t.jsxs(
      be,
      {
        style: { marginBottom: "1em", width: "208px" },
        value: d,
        label: "Position",
        name: "position",
        id: "position-select",
        onChange: p,
        children: [
          /* @__PURE__ */ t.jsx("option", { value: "left", children: "Left" }),
          /* @__PURE__ */ t.jsx("option", { value: "right", children: "Right" }),
          /* @__PURE__ */ t.jsx("option", { value: "full", children: "Full Width" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "Input__wrapper", children: [
      /* @__PURE__ */ t.jsx(
        "input",
        {
          id: "caption",
          type: "checkbox",
          checked: s,
          onChange: f
        }
      ),
      /* @__PURE__ */ t.jsx("label", { htmlFor: "caption", children: "Show Caption" })
    ] }),
    /* @__PURE__ */ t.jsx(ne, { children: /* @__PURE__ */ t.jsx(
      he,
      {
        "data-test-id": "image-modal-file-upload-btn",
        onClick: () => m(),
        children: "Confirm"
      }
    ) })
  ] });
}
function $e({
  src: e,
  altText: n,
  nodeKey: o,
  width: i,
  height: c,
  showCaption: r,
  caption: a,
  position: s
}) {
  console.log("InlineImageComponent");
  const [u] = V(), d = N(null), g = N(null), [f, p, m] = le(o), [l] = W(), [h, _] = D(null), b = N(null), S = J(), v = R(
    (E) => {
      const C = I();
      return f && y(C) && (E.preventDefault(), f && y(C) && l.update(() => {
        C.getNodes().forEach((j) => {
          Q(j) && j.remove();
        });
      })), !1;
    },
    [l, f]
  ), k = R(
    (E) => {
      const C = I(), x = g.current;
      if (f && y(C) && C.getNodes().length === 1) {
        if (r)
          return K(null), E.preventDefault(), a.focus(), !0;
        if (x !== null && x !== document.activeElement)
          return E.preventDefault(), x.focus(), !0;
      }
      return !1;
    },
    [a, f, r]
  ), $ = R(
    (E) => b.current === a || g.current === E.target ? (K(null), l.update(() => {
      p(!0);
      const C = l.getRootElement();
      C !== null && C.focus();
    }), !0) : !1,
    [a, l, p]
  );
  M(() => {
    let E = !0;
    const C = X(
      l.registerUpdateListener(({ editorState: x }) => {
        E && _(x.read(() => I()));
      }),
      l.registerCommand(
        fe,
        (x, j) => (b.current = j, !1),
        w
      ),
      l.registerCommand(
        pe,
        (x) => {
          const j = x;
          return j.target === d.current ? (j.shiftKey ? p(!f) : (m(), p(!0)), !0) : !1;
        },
        w
      ),
      l.registerCommand(
        de,
        (x) => x.target === d.current ? (x.preventDefault(), !0) : !1,
        w
      ),
      l.registerCommand(
        ue,
        v,
        w
      ),
      l.registerCommand(
        ce,
        v,
        w
      ),
      l.registerCommand(ie, k, w),
      l.registerCommand(
        se,
        $,
        w
      )
    );
    return () => {
      E = !1, C();
    };
  }, [
    m,
    l,
    f,
    o,
    v,
    k,
    $,
    p
  ]);
  const z = f && y(h), Z = f && S;
  return /* @__PURE__ */ t.jsxs(ae, { fallback: null, children: [
    /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx("span", { draggable: z, children: /* @__PURE__ */ t.jsx(
        Me,
        {
          className: Z ? `focused ${y(h) ? "draggable" : ""}` : null,
          src: e,
          altText: n,
          imageRef: d,
          width: i,
          height: c,
          position: s
        }
      ) }),
      r && /* @__PURE__ */ t.jsx("span", { className: "image-caption-container", children: /* @__PURE__ */ t.jsxs(je, { initialEditor: a, children: [
        /* @__PURE__ */ t.jsx(xe, {}),
        /* @__PURE__ */ t.jsx(Se, {}),
        /* @__PURE__ */ t.jsx(
          ee,
          {
            contentEditable: /* @__PURE__ */ t.jsx(
              Ne,
              {
                placeholder: "Enter a caption...",
                placeholderClassName: "InlineImageNode__placeholder",
                className: "InlineImageNode__contentEditable"
              }
            ),
            ErrorBoundary: _e
          }
        )
      ] }) })
    ] }),
    u
  ] });
}
export {
  ke as UpdateInlineImageDialog,
  $e as default
};
