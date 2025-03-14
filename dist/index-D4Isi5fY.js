import * as Vt from "react";
import Yt, { useContext as Si, createContext as Ai, useMemo as _e, useLayoutEffect as rt, useEffect as j, useState as J, useRef as he, Suspense as Ln, forwardRef as Ti, useCallback as Ae, useReducer as gs, Component as hs } from "react";
import { createEditor as Mn, $getRoot as be, $createParagraphNode as q, $getSelection as O, $isDecoratorNode as tt, $isElementNode as D, $isParagraphNode as $n, $isTextNode as V, $caretFromPoint as ps, $isExtendableTextPointCaret as ms, $extendCaretToRange as _s, $isChildCaret as bs, $isRootNode as Pn, $getCharacterOffsets as ys, $isRangeSelection as k, $caretRangeFromSelection as ws, $isTokenOrSegmented as vs, $createRangeSelection as Gt, INTERNAL_$isBlock as un, $setSelection as Ct, $getChildCaret as xn, makeStepwiseIterator as xs, $isSiblingCaret as Es, ArtificialNode__DO_NOT_USE as Ni, $createLineBreakNode as zt, $isRootOrShadowRoot as Le, $isBlockElementNode as En, isBlockDomNode as pr, isInlineDomNode as mr, $cloneWithProperties as ki, isHTMLElement as Q, isDocumentFragment as _r, $createTabNode as jn, getDOMSelection as qt, COPY_COMMAND as Oi, COMMAND_PRIORITY_CRITICAL as Cs, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND as Ss, $parseSerializedNode as As, isSelectionWithinEditor as Ts, $getEditor as Ri, KEY_TAB_COMMAND as Ns, COMMAND_PRIORITY_EDITOR as M, KEY_SPACE_COMMAND as Fi, PASTE_COMMAND as zn, createCommand as Te, isDOMNode as ks, isSelectionCapturedInDecoratorInput as Os, CUT_COMMAND as Rs, $isNodeSelection as Se, SELECT_ALL_COMMAND as Fs, $selectAll as Is, DRAGOVER_COMMAND as Un, $getNearestNodeFromDOMNode as Me, DRAGSTART_COMMAND as Bn, DROP_COMMAND as Wn, $normalizeSelection__EXPERIMENTAL as Ut, KEY_ESCAPE_COMMAND as Ii, KEY_ENTER_COMMAND as Di, INSERT_LINE_BREAK_COMMAND as br, INSERT_PARAGRAPH_COMMAND as Cn, KEY_DELETE_COMMAND as Ds, DELETE_CHARACTER_COMMAND as dn, KEY_BACKSPACE_COMMAND as Ls, OUTDENT_CONTENT_COMMAND as yr, KEY_ARROW_RIGHT_COMMAND as Ms, KEY_ARROW_LEFT_COMMAND as Li, KEY_ARROW_DOWN_COMMAND as Mi, $getAdjacentNode as wr, KEY_ARROW_UP_COMMAND as $i, INDENT_CONTENT_COMMAND as $s, INSERT_TAB_COMMAND as Ps, $insertNodes as Hn, FORMAT_ELEMENT_COMMAND as ht, FORMAT_TEXT_COMMAND as pt, REMOVE_TEXT_COMMAND as js, CONTROLLED_TEXT_INSERTION_COMMAND as zs, DELETE_LINE_COMMAND as Us, DELETE_WORD_COMMAND as Bs, CLICK_COMMAND as Ws, ElementNode as ye, $applyNodeReplacement as fe, setNodeIndentFromDOM as Pi, CAN_REDO_COMMAND as mt, CAN_UNDO_COMMAND as _t, CLEAR_HISTORY_COMMAND as Hs, CLEAR_EDITOR_COMMAND as Ks, REDO_COMMAND as ji, UNDO_COMMAND as zi, $isTabNode as Ui, $getSiblingCaret as Js, TextNode as Bi, $createTextNode as Wi, COMMAND_PRIORITY_LOW as oe, $isLeafNode as Hi, $setPointFromCaret as vr, $normalizeCaret as xr, setDOMUnmanaged as Vs, $createPoint as Er, TEXT_TYPE_TO_FORMAT as Ys, isCurrentlyReadOnlyMode as Gs, $isLineBreakNode as qs, isHTMLAnchorElement as Ki, DecoratorNode as Kn, COMMAND_PRIORITY_HIGH as Et, SELECTION_CHANGE_COMMAND as Zs, getNearestEditorFromDOMNode as Xs } from "lexical";
import { flushSync as Qs, createPortal as Jn } from "react-dom";
var Cr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Sn = { exports: {} }, dt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sr;
function ea() {
  if (Sr) return dt;
  Sr = 1;
  var n = Yt, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, c) {
    var u, g = {}, p = null, b = null;
    c !== void 0 && (p = "" + c), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (b = l.ref);
    for (u in l) r.call(l, u) && !o.hasOwnProperty(u) && (g[u] = l[u]);
    if (a && a.defaultProps) for (u in l = a.defaultProps, l) g[u] === void 0 && (g[u] = l[u]);
    return { $$typeof: e, type: a, key: p, ref: b, props: g, _owner: i.current };
  }
  return dt.Fragment = t, dt.jsx = s, dt.jsxs = s, dt;
}
var ft = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar;
function ta() {
  return Ar || (Ar = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Yt, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y = Symbol.iterator, x = "@@iterator";
    function E(d) {
      if (d === null || typeof d != "object")
        return null;
      var C = y && d[y] || d[x];
      return typeof C == "function" ? C : null;
    }
    var S = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(d) {
      {
        for (var C = arguments.length, T = new Array(C > 1 ? C - 1 : 0), R = 1; R < C; R++)
          T[R - 1] = arguments[R];
        m("error", d, T);
      }
    }
    function m(d, C, T) {
      {
        var R = S.ReactDebugCurrentFrame, U = R.getStackAddendum();
        U !== "" && (C += "%s", T = T.concat([U]));
        var W = T.map(function($) {
          return String($);
        });
        W.unshift("Warning: " + C), Function.prototype.apply.call(console[d], console, W);
      }
    }
    var _ = !1, v = !1, w = !1, A = !1, F = !1, N;
    N = Symbol.for("react.module.reference");
    function P(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === r || d === o || F || d === i || d === c || d === u || A || d === b || _ || v || w || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === g || d.$$typeof === s || d.$$typeof === a || d.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === N || d.getModuleId !== void 0));
    }
    function B(d, C, T) {
      var R = d.displayName;
      if (R)
        return R;
      var U = C.displayName || C.name || "";
      return U !== "" ? T + "(" + U + ")" : T;
    }
    function ne(d) {
      return d.displayName || "Context";
    }
    function Y(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case a:
            var C = d;
            return ne(C) + ".Consumer";
          case s:
            var T = d;
            return ne(T._context) + ".Provider";
          case l:
            return B(d, d.render, "ForwardRef");
          case g:
            var R = d.displayName || null;
            return R !== null ? R : Y(d.type) || "Memo";
          case p: {
            var U = d, W = U._payload, $ = U._init;
            try {
              return Y($(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, re = 0, Nt, lt, Z, ue, Ce, Pe, se;
    function kt() {
    }
    kt.__reactDisabledLog = !0;
    function ve() {
      {
        if (re === 0) {
          Nt = console.log, lt = console.info, Z = console.warn, ue = console.error, Ce = console.group, Pe = console.groupCollapsed, se = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: kt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        re++;
      }
    }
    function je() {
      {
        if (re--, re === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, d, {
              value: Nt
            }),
            info: H({}, d, {
              value: lt
            }),
            warn: H({}, d, {
              value: Z
            }),
            error: H({}, d, {
              value: ue
            }),
            group: H({}, d, {
              value: Ce
            }),
            groupCollapsed: H({}, d, {
              value: Pe
            }),
            groupEnd: H({}, d, {
              value: se
            })
          });
        }
        re < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ne = S.ReactCurrentDispatcher, ke;
    function Oe(d, C, T) {
      {
        if (ke === void 0)
          try {
            throw Error();
          } catch (U) {
            var R = U.stack.trim().match(/\n( *(at )?)/);
            ke = R && R[1] || "";
          }
        return `
` + ke + d;
      }
    }
    var Ve = !1, Re;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new Ye();
    }
    function Ot(d, C) {
      if (!d || Ve)
        return "";
      {
        var T = Re.get(d);
        if (T !== void 0)
          return T;
      }
      var R;
      Ve = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = Ne.current, Ne.current = null, ve();
      try {
        if (C) {
          var $ = function() {
            throw Error();
          };
          if (Object.defineProperty($.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($, []);
            } catch (ae) {
              R = ae;
            }
            Reflect.construct(d, [], $);
          } else {
            try {
              $.call();
            } catch (ae) {
              R = ae;
            }
            d.call($.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            R = ae;
          }
          d();
        }
      } catch (ae) {
        if (ae && R && typeof ae.stack == "string") {
          for (var L = ae.stack.split(`
`), ie = R.stack.split(`
`), K = L.length - 1, G = ie.length - 1; K >= 1 && G >= 0 && L[K] !== ie[G]; )
            G--;
          for (; K >= 1 && G >= 0; K--, G--)
            if (L[K] !== ie[G]) {
              if (K !== 1 || G !== 1)
                do
                  if (K--, G--, G < 0 || L[K] !== ie[G]) {
                    var ge = `
` + L[K].replace(" at new ", " at ");
                    return d.displayName && ge.includes("<anonymous>") && (ge = ge.replace("<anonymous>", d.displayName)), typeof d == "function" && Re.set(d, ge), ge;
                  }
                while (K >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        Ve = !1, Ne.current = W, je(), Error.prepareStackTrace = U;
      }
      var qe = d ? d.displayName || d.name : "", ze = qe ? Oe(qe) : "";
      return typeof d == "function" && Re.set(d, ze), ze;
    }
    function ct(d, C, T) {
      return Ot(d, !1);
    }
    function Ho(d) {
      var C = d.prototype;
      return !!(C && C.isReactComponent);
    }
    function Rt(d, C, T) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return Ot(d, Ho(d));
      if (typeof d == "string")
        return Oe(d);
      switch (d) {
        case c:
          return Oe("Suspense");
        case u:
          return Oe("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            return ct(d.render);
          case g:
            return Rt(d.type, C, T);
          case p: {
            var R = d, U = R._payload, W = R._init;
            try {
              return Rt(W(U), C, T);
            } catch {
            }
          }
        }
      return "";
    }
    var ut = Object.prototype.hasOwnProperty, tr = {}, nr = S.ReactDebugCurrentFrame;
    function Ft(d) {
      if (d) {
        var C = d._owner, T = Rt(d.type, d._source, C ? C.type : null);
        nr.setExtraStackFrame(T);
      } else
        nr.setExtraStackFrame(null);
    }
    function Ko(d, C, T, R, U) {
      {
        var W = Function.call.bind(ut);
        for (var $ in d)
          if (W(d, $)) {
            var L = void 0;
            try {
              if (typeof d[$] != "function") {
                var ie = Error((R || "React class") + ": " + T + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              L = d[$](C, $, R, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (K) {
              L = K;
            }
            L && !(L instanceof Error) && (Ft(U), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", T, $, typeof L), Ft(null)), L instanceof Error && !(L.message in tr) && (tr[L.message] = !0, Ft(U), h("Failed %s type: %s", T, L.message), Ft(null));
          }
      }
    }
    var Jo = Array.isArray;
    function on(d) {
      return Jo(d);
    }
    function Vo(d) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, T = C && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return T;
      }
    }
    function Yo(d) {
      try {
        return rr(d), !1;
      } catch {
        return !0;
      }
    }
    function rr(d) {
      return "" + d;
    }
    function ir(d) {
      if (Yo(d))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vo(d)), rr(d);
    }
    var or = S.ReactCurrentOwner, Go = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sr, ar;
    function qo(d) {
      if (ut.call(d, "ref")) {
        var C = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function Zo(d) {
      if (ut.call(d, "key")) {
        var C = Object.getOwnPropertyDescriptor(d, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function Xo(d, C) {
      typeof d.ref == "string" && or.current;
    }
    function Qo(d, C) {
      {
        var T = function() {
          sr || (sr = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        T.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function es(d, C) {
      {
        var T = function() {
          ar || (ar = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        T.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var ts = function(d, C, T, R, U, W, $) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: d,
        key: C,
        ref: T,
        props: $,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return L._store = {}, Object.defineProperty(L._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(L, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function ns(d, C, T, R, U) {
      {
        var W, $ = {}, L = null, ie = null;
        T !== void 0 && (ir(T), L = "" + T), Zo(C) && (ir(C.key), L = "" + C.key), qo(C) && (ie = C.ref, Xo(C, U));
        for (W in C)
          ut.call(C, W) && !Go.hasOwnProperty(W) && ($[W] = C[W]);
        if (d && d.defaultProps) {
          var K = d.defaultProps;
          for (W in K)
            $[W] === void 0 && ($[W] = K[W]);
        }
        if (L || ie) {
          var G = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          L && Qo($, G), ie && es($, G);
        }
        return ts(d, L, ie, U, R, or.current, $);
      }
    }
    var sn = S.ReactCurrentOwner, lr = S.ReactDebugCurrentFrame;
    function Ge(d) {
      if (d) {
        var C = d._owner, T = Rt(d.type, d._source, C ? C.type : null);
        lr.setExtraStackFrame(T);
      } else
        lr.setExtraStackFrame(null);
    }
    var an;
    an = !1;
    function ln(d) {
      return typeof d == "object" && d !== null && d.$$typeof === e;
    }
    function cr() {
      {
        if (sn.current) {
          var d = Y(sn.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function rs(d) {
      return "";
    }
    var ur = {};
    function is(d) {
      {
        var C = cr();
        if (!C) {
          var T = typeof d == "string" ? d : d.displayName || d.name;
          T && (C = `

Check the top-level render call using <` + T + ">.");
        }
        return C;
      }
    }
    function dr(d, C) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var T = is(C);
        if (ur[T])
          return;
        ur[T] = !0;
        var R = "";
        d && d._owner && d._owner !== sn.current && (R = " It was passed a child from " + Y(d._owner.type) + "."), Ge(d), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, R), Ge(null);
      }
    }
    function fr(d, C) {
      {
        if (typeof d != "object")
          return;
        if (on(d))
          for (var T = 0; T < d.length; T++) {
            var R = d[T];
            ln(R) && dr(R, C);
          }
        else if (ln(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var U = E(d);
          if (typeof U == "function" && U !== d.entries)
            for (var W = U.call(d), $; !($ = W.next()).done; )
              ln($.value) && dr($.value, C);
        }
      }
    }
    function os(d) {
      {
        var C = d.type;
        if (C == null || typeof C == "string")
          return;
        var T;
        if (typeof C == "function")
          T = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === g))
          T = C.propTypes;
        else
          return;
        if (T) {
          var R = Y(C);
          Ko(T, d.props, "prop", R, d);
        } else if (C.PropTypes !== void 0 && !an) {
          an = !0;
          var U = Y(C);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ss(d) {
      {
        for (var C = Object.keys(d.props), T = 0; T < C.length; T++) {
          var R = C[T];
          if (R !== "children" && R !== "key") {
            Ge(d), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), Ge(null);
            break;
          }
        }
        d.ref !== null && (Ge(d), h("Invalid attribute `ref` supplied to `React.Fragment`."), Ge(null));
      }
    }
    var gr = {};
    function hr(d, C, T, R, U, W) {
      {
        var $ = P(d);
        if (!$) {
          var L = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = rs();
          ie ? L += ie : L += cr();
          var K;
          d === null ? K = "null" : on(d) ? K = "array" : d !== void 0 && d.$$typeof === e ? (K = "<" + (Y(d.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : K = typeof d, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", K, L);
        }
        var G = ns(d, C, T, U, W);
        if (G == null)
          return G;
        if ($) {
          var ge = C.children;
          if (ge !== void 0)
            if (R)
              if (on(ge)) {
                for (var qe = 0; qe < ge.length; qe++)
                  fr(ge[qe], d);
                Object.freeze && Object.freeze(ge);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(ge, d);
        }
        if (ut.call(C, "key")) {
          var ze = Y(d), ae = Object.keys(C).filter(function(fs) {
            return fs !== "key";
          }), cn = ae.length > 0 ? "{key: someKey, " + ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!gr[ze + cn]) {
            var ds = ae.length > 0 ? "{" + ae.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, cn, ze, ds, ze), gr[ze + cn] = !0;
          }
        }
        return d === r ? ss(G) : os(G), G;
      }
    }
    function as(d, C, T) {
      return hr(d, C, T, !0);
    }
    function ls(d, C, T) {
      return hr(d, C, T, !1);
    }
    var cs = ls, us = as;
    ft.Fragment = r, ft.jsx = cs, ft.jsxs = us;
  }()), ft;
}
process.env.NODE_ENV === "production" ? Sn.exports = ea() : Sn.exports = ta();
var f = Sn.exports;
const Ji = Ai(null);
function na(n, e) {
  let t = null;
  return n != null && (t = n[1]), { getTheme: function() {
    return e ?? (t != null ? t.getTheme() : null);
  } };
}
function te() {
  const n = Si(Ji);
  return n == null && function(e, ...t) {
    const r = new URL("https://lexical.dev/docs/error"), i = new URLSearchParams();
    i.append("code", e);
    for (const o of t) i.append("v", o);
    throw r.search = i.toString(), Error(`Minified Lexical error #${e}; visit ${r.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }(8), n;
}
const Vi = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, ra = Vi ? rt : j, It = { tag: "history-merge" };
function ia({ initialConfig: n, children: e }) {
  const t = _e(() => {
    const { theme: r, namespace: i, nodes: o, onError: s, editorState: a, html: l } = n, c = na(null, r), u = Mn({ editable: n.editable, html: l, namespace: i, nodes: o, onError: (g) => s(g, u), theme: r });
    return function(g, p) {
      if (p !== null) {
        if (p === void 0) g.update(() => {
          const b = be();
          if (b.isEmpty()) {
            const y = q();
            b.append(y);
            const x = Vi ? document.activeElement : null;
            (O() !== null || x !== null && x === g.getRootElement()) && y.select();
          }
        }, It);
        else if (p !== null) switch (typeof p) {
          case "string": {
            const b = g.parseEditorState(p);
            g.setEditorState(b, It);
            break;
          }
          case "object":
            g.setEditorState(p, It);
            break;
          case "function":
            g.update(() => {
              be().isEmpty() && p(g);
            }, It);
        }
      }
    }(u, a), [u, c];
  }, []);
  return ra(() => {
    const r = n.editable, [i] = t;
    i.setEditable(r === void 0 || r);
  }, []), f.jsx(Ji.Provider, { value: t, children: e });
}
const oa = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? rt : j;
function sa(n) {
  return { initialValueFn: () => n.isEditable(), subscribe: (e) => n.registerEditableListener(e) };
}
function aa() {
  return function(n) {
    const [e] = te(), t = _e(() => n(e), [e, n]), [r, i] = J(() => t.initialValueFn()), o = he(r);
    return oa(() => {
      const { initialValueFn: s, subscribe: a } = t, l = s();
      return o.current !== l && (o.current = l, i(l)), a((c) => {
        o.current = c, i(c);
      });
    }, [t, n]), r;
  }(sa);
}
function la() {
  return be().getTextContent();
}
function ca(n, e = !0) {
  if (n) return !1;
  let t = la();
  return e && (t = t.trim()), t === "";
}
function ua(n) {
  if (!ca(n, !1)) return !1;
  const e = be().getChildren(), t = e.length;
  if (t > 1) return !1;
  for (let r = 0; r < t; r++) {
    const i = e[r];
    if (tt(i)) return !1;
    if (D(i)) {
      if (!$n(i) || i.__indent !== 0) return !1;
      const o = i.getChildren(), s = o.length;
      for (let a = 0; a < s; a++) {
        const l = o[r];
        if (!V(l)) return !1;
      }
    }
  }
  return !0;
}
function Yi(n) {
  return () => ua(n);
}
function Gi(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e) r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const Bt = /* @__PURE__ */ new Map();
function qi(n) {
  const e = {};
  if (!n) return e;
  const t = n.split(";");
  for (const r of t) if (r !== "") {
    const [i, o] = r.split(/:([^]+)/);
    i && o && (e[i.trim()] = o.trim());
  }
  return e;
}
function Vn(n) {
  let e = Bt.get(n);
  return e === void 0 && (e = qi(n), Bt.set(n, e)), e;
}
function da(n) {
  let e = "";
  for (const t in n) t && (e += `${t}: ${n[t]};`);
  return e;
}
function Zi(n, e) {
  const t = n.getStartEndPoints();
  if (e.isSelected(n) && !e.isSegmented() && !e.isToken() && t !== null) {
    const [r, i] = t, o = n.isBackward(), s = r.getNode(), a = i.getNode(), l = e.is(s), c = e.is(a);
    if (l || c) {
      const [u, g] = ys(n), p = s.is(a), b = e.is(o ? a : s), y = e.is(o ? s : a);
      let x, E = 0;
      return p ? (E = u > g ? g : u, x = u > g ? u : g) : b ? (E = o ? g : u, x = void 0) : y && (E = 0, x = o ? u : g), e.__text = e.__text.slice(E, x), e;
    }
  }
  return e;
}
function Tr(n) {
  if (n.type === "text") return n.offset === n.getNode().getTextContentSize();
  const e = n.getNode();
  return D(e) || Gi(177), n.offset === e.getChildrenSize();
}
function fa(n) {
  const e = n.getStyle(), t = qi(e);
  Bt.set(e, t);
}
function fn(n, e) {
  (k(n) ? n.isCollapsed() : V(n) || D(n)) || Gi(280);
  const t = Vn(k(n) ? n.style : V(n) ? n.getStyle() : n.getTextStyle()), r = Object.entries(e).reduce((o, [s, a]) => (typeof a == "function" ? o[s] = a(t[s], n) : a === null ? delete o[s] : o[s] = a, o), { ...t }), i = da(r);
  k(n) || V(n) ? n.setStyle(i) : n.setTextStyle(i), Bt.set(i, r);
}
function ga(n, e) {
  if (k(n) && n.isCollapsed()) {
    fn(n, e);
    const t = n.anchor.getNode();
    D(t) && t.isEmpty() && fn(t, e);
  }
  ha((t) => {
    fn(t, e);
  });
}
function ha(n) {
  const e = O();
  if (!e) return;
  const t = /* @__PURE__ */ new Map();
  if (k(e)) for (const o of ws(e).getTextSlices()) o && t.set(o.caret.origin.getKey(), o.getSliceIndices());
  const r = e.getNodes();
  for (const o of r) {
    if (!V(o) || !o.canHaveFormat()) continue;
    const [s, a] = (i = o, t.get(i.getKey()) || [0, i.getTextContentSize()]);
    a !== s && (vs(o) || s === 0 && a === o.getTextContentSize() ? n(o) : n(o.splitText(s, a)[s === 0 ? 0 : 1]));
  }
  var i;
  k(e) && e.anchor.type === "text" && e.focus.type === "text" && e.anchor.key === e.focus.key && pa(e);
}
function pa(n) {
  if (n.isBackward()) {
    const { anchor: e, focus: t } = n, { key: r, offset: i, type: o } = e;
    e.set(t.key, t.offset, t.type), t.set(r, i, o);
  }
}
function ma(n, e) {
  const t = n.getFormatType(), r = n.getIndent();
  t !== e.getFormatType() && e.setFormat(t), r !== e.getIndent() && e.setIndent(r);
}
function Xi(n, e, t = ma) {
  if (n === null) return;
  const r = n.getStartEndPoints(), i = /* @__PURE__ */ new Map();
  let o = null;
  if (r) {
    const [s, a] = r;
    o = Gt(), o.anchor.set(s.key, s.offset, s.type), o.focus.set(a.key, a.offset, a.type);
    const l = Or(s.getNode(), un), c = Or(a.getNode(), un);
    D(l) && i.set(l.getKey(), l), D(c) && i.set(c.getKey(), c);
  }
  for (const s of n.getNodes()) D(s) && un(s) && i.set(s.getKey(), s);
  for (const [s, a] of i) {
    const l = e();
    t(a, l), a.replace(l, !0), o && (s === o.anchor.key && o.anchor.set(l.getKey(), o.anchor.offset, o.anchor.type), s === o.focus.key && o.focus.set(l.getKey(), o.focus.offset, o.focus.type));
  }
  o && n.is(O()) && Ct(o);
}
function Nr(n, e) {
  const t = ps(n.focus, e ? "previous" : "next");
  if (ms(t)) return !1;
  for (const r of _s(t)) {
    if (bs(r)) return !r.origin.isInline();
    if (!D(r.origin)) {
      if (tt(r.origin)) return !0;
      break;
    }
  }
  return !1;
}
function _a(n, e, t, r) {
  n.modify(e ? "extend" : "move", t, r);
}
function Qi(n) {
  const e = n.anchor.getNode();
  return (Pn(e) ? e : e.getParentOrThrow()).getDirection() === "rtl";
}
function kr(n, e, t) {
  const r = Qi(n);
  _a(n, e, t ? !r : r, "character");
}
function ba(n, e, t) {
  const r = Vn(n.getStyle());
  return r !== null && r[e] || t;
}
function Dt(n, e, t = "") {
  let r = null;
  const i = n.getNodes(), o = n.anchor, s = n.focus, a = n.isBackward(), l = a ? s.offset : o.offset, c = a ? s.getNode() : o.getNode();
  if (k(n) && n.isCollapsed() && n.style !== "") {
    const u = Vn(n.style);
    if (u !== null && e in u) return u[e];
  }
  for (let u = 0; u < i.length; u++) {
    const g = i[u];
    if ((u === 0 || l !== 0 || !g.is(c)) && V(g)) {
      const p = ba(g, e, t);
      if (r === null) r = p;
      else if (r !== p) {
        r = "";
        break;
      }
    }
  }
  return r === null ? t : r;
}
function Or(n, e) {
  let t = n;
  for (; t !== null && t.getParent() !== null && !e(t); ) t = t.getParentOrThrow();
  return e(t) ? t : null;
}
function ya(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e) r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const Zt = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, wa = Zt && "documentMode" in document ? document.documentMode : null, va = Zt && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
!(!Zt || !("InputEvent" in window) || wa) && "getTargetRanges" in new window.InputEvent("input");
function eo(...n) {
  const e = [];
  for (const t of n) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) e.push(r);
  return e;
}
function we(...n) {
  return () => {
    for (let e = n.length - 1; e >= 0; e--) n[e]();
    n.length = 0;
  };
}
const xa = Zt, Ea = va;
function ee(n, ...e) {
  const t = eo(...e);
  t.length > 0 && n.classList.add(...t);
}
function He(n, ...e) {
  const t = eo(...e);
  t.length > 0 && n.classList.remove(...t);
}
function to(n, e) {
  for (const t of e) if (n.type.startsWith(t)) return !0;
  return !1;
}
function Ca(n, e) {
  const t = n[Symbol.iterator]();
  return new Promise((r, i) => {
    const o = [], s = () => {
      const { done: a, value: l } = t.next();
      if (a) return r(o);
      const c = new FileReader();
      c.addEventListener("error", i), c.addEventListener("load", () => {
        const u = c.result;
        typeof u == "string" && o.push({ file: l, result: u }), s();
      }), to(l, e) ? c.readAsDataURL(l) : s();
    };
    s();
  });
}
function Sa(n) {
  return n ? n.getAdjacentCaret() : null;
}
function no(n, e) {
  let t = n;
  for (; t != null; ) {
    if (t instanceof e) return t;
    t = t.getParent();
  }
  return null;
}
function Aa(n) {
  const e = me(n, (t) => D(t) && !t.isInline());
  return D(e) || ya(4, n.__key), e;
}
const me = (n, e) => {
  let t = n;
  for (; t !== be() && t != null; ) {
    if (e(t)) return t;
    t = t.getParent();
  }
  return null;
};
function ro(n, e) {
  const t = e();
  return n.replace(t), t.append(n), t;
}
function De(n, e) {
  return n !== null && Object.getPrototypeOf(n).constructor.name === e.name;
}
let gn = !(Ea || !xa) && void 0;
function io(n) {
  let e = 1;
  if (function() {
    if (gn === void 0) {
      const t = document.createElement("div");
      t.style.cssText = "position: absolute; opacity: 0; width: 100px; left: -1000px;", document.body.appendChild(t);
      const r = t.getBoundingClientRect();
      t.style.setProperty("zoom", "2"), gn = t.getBoundingClientRect().width === r.width, document.body.removeChild(t);
    }
    return gn;
  }()) for (; n; ) e *= Number(window.getComputedStyle(n).getPropertyValue("zoom")), n = n.parentElement;
  return e;
}
function oo(n, e) {
  const t = [], r = Array.from(n).reverse();
  for (let i = r.pop(); i !== void 0; i = r.pop()) if (e(i)) t.push(i);
  else if (D(i)) for (const o of Ta(i)) r.push(o);
  return t;
}
function Ta(n) {
  return Na(xn(n, "previous"));
}
function Na(n) {
  return xs({ hasNext: Es, initial: n.getAdjacentCaret(), map: (e) => e.origin.getLatest(), step: (e) => e.getAdjacentCaret() });
}
function ka(n) {
  const e = window.location.origin, t = (r) => {
    if (r.origin !== e) return;
    const i = n.getRootElement();
    if (document.activeElement !== i) return;
    const o = r.data;
    if (typeof o == "string") {
      let s;
      try {
        s = JSON.parse(o);
      } catch {
        return;
      }
      if (s && s.protocol === "nuanria_messaging" && s.type === "request") {
        const a = s.payload;
        if (a && a.functionId === "makeChanges") {
          const l = a.args;
          if (l) {
            const [c, u, g, p, b, y] = l;
            n.update(() => {
              const x = O();
              if (k(x)) {
                const E = x.anchor;
                let S = E.getNode(), h = 0, m = 0;
                if (V(S) && c >= 0 && u >= 0 && (h = c, m = c + u, x.setTextNodeRange(S, h, S, m)), h === m && g === "" || (x.insertRawText(g), S = E.getNode()), V(S)) {
                  h = p, m = p + b;
                  const _ = S.getTextContentSize();
                  h = h > _ ? _ : h, m = m > _ ? _ : m, x.setTextNodeRange(S, h, S, m);
                }
                r.stopImmediatePropagation();
              }
            });
          }
        }
      }
    }
  };
  return window.addEventListener("message", t, !0), () => {
    window.removeEventListener("message", t, !0);
  };
}
function yt(n, e) {
  const t = e.body ? e.body.childNodes : [];
  let r = [];
  const i = [];
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    if (!lo.has(s.nodeName)) {
      const a = co(s, n, i, !1);
      a !== null && (r = r.concat(a));
    }
  }
  return function(o) {
    for (const s of o) s.getNextSibling() instanceof Ni && s.insertAfter(zt());
    for (const s of o) {
      const a = s.getChildren();
      for (const l of a) s.insertBefore(l);
      s.remove();
    }
  }(i), r;
}
function so(n, e) {
  if (typeof document > "u" || typeof window > "u" && global.window === void 0) throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  const t = document.createElement("div"), r = be().getChildren();
  for (let i = 0; i < r.length; i++)
    ao(n, r[i], t, e);
  return t.innerHTML;
}
function ao(n, e, t, r = null) {
  let i = r === null || e.isSelected(r);
  const o = D(e) && e.excludeFromCopy("html");
  let s = e;
  if (r !== null) {
    let b = ki(e);
    b = V(b) && r !== null ? Zi(r, b) : b, s = b;
  }
  const a = D(s) ? s.getChildren() : [], l = n._nodes.get(s.getType());
  let c;
  c = l && l.exportDOM !== void 0 ? l.exportDOM(n, s) : s.exportDOM(n);
  const { element: u, after: g } = c;
  if (!u) return !1;
  const p = document.createDocumentFragment();
  for (let b = 0; b < a.length; b++) {
    const y = a[b], x = ao(n, y, p, r);
    !i && D(e) && x && e.extractWithChild(y, r, "html") && (i = !0);
  }
  if (i && !o) {
    if ((Q(u) || _r(u)) && u.append(p), t.append(u), g) {
      const b = g.call(s, u);
      b && (_r(u) ? u.replaceChildren(b) : u.replaceWith(b));
    }
  } else t.append(p);
  return i;
}
const lo = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function co(n, e, t, r, i = /* @__PURE__ */ new Map(), o) {
  let s = [];
  if (lo.has(n.nodeName)) return s;
  let a = null;
  const l = function(y, x) {
    const { nodeName: E } = y, S = x._htmlConversions.get(E.toLowerCase());
    let h = null;
    if (S !== void 0) for (const m of S) {
      const _ = m(y);
      _ !== null && (h === null || (h.priority || 0) <= (_.priority || 0)) && (h = _);
    }
    return h !== null ? h.conversion : null;
  }(n, e), c = l ? l(n) : null;
  let u = null;
  if (c !== null) {
    u = c.after;
    const y = c.node;
    if (a = Array.isArray(y) ? y[y.length - 1] : y, a !== null) {
      for (const [, x] of i) if (a = x(a, o), !a) break;
      a && s.push(...Array.isArray(y) ? y : [a]);
    }
    c.forChild != null && i.set(n.nodeName, c.forChild);
  }
  const g = n.childNodes;
  let p = [];
  const b = (a == null || !Le(a)) && (a != null && En(a) || r);
  for (let y = 0; y < g.length; y++) p.push(...co(g[y], e, t, b, new Map(i), a));
  return u != null && (p = u(p)), pr(n) && (p = Oa(n, p, b ? () => {
    const y = new Ni();
    return t.push(y), y;
  } : q)), a == null ? p.length > 0 ? s = s.concat(p) : pr(n) && function(y) {
    return y.nextSibling == null || y.previousSibling == null ? !1 : mr(y.nextSibling) && mr(y.previousSibling);
  }(n) && (s = s.concat(zt())) : D(a) && a.append(...p), s;
}
function Oa(n, e, t) {
  const r = n.style.textAlign, i = [];
  let o = [];
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (En(a)) r && !a.getFormat() && a.setFormat(r), i.push(a);
    else if (o.push(a), s === e.length - 1 || s < e.length - 1 && En(e[s + 1])) {
      const l = t();
      l.setFormat(r), l.append(...o), i.push(l), o = [];
    }
  }
  return i;
}
function Wt(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e) r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Ra(n, e = O()) {
  return e == null && Wt(166), k(e) && e.isCollapsed() || e.getNodes().length === 0 ? "" : so(n, e);
}
function Fa(n, e = O()) {
  return e == null && Wt(166), k(e) && e.isCollapsed() || e.getNodes().length === 0 ? null : JSON.stringify(Ia(n, e));
}
function Rr(n, e, t) {
  const r = n.getData("application/x-lexical-editor");
  if (r) try {
    const a = JSON.parse(r);
    if (a.namespace === t._config.namespace && Array.isArray(a.nodes))
      return Fr(t, Da(a.nodes), e);
  } catch {
  }
  const i = n.getData("text/html"), o = n.getData("text/plain");
  if (i && o !== i) try {
    const a = new DOMParser().parseFromString(function(l) {
      return window.trustedTypes && window.trustedTypes.createPolicy ? window.trustedTypes.createPolicy("lexical", { createHTML: (c) => c }).createHTML(l) : l;
    }(i), "text/html");
    return Fr(t, yt(t, a), e);
  } catch {
  }
  const s = o || n.getData("text/uri-list");
  if (s != null) if (k(e)) {
    const a = s.split(/(\r?\n|\t)/);
    a[a.length - 1] === "" && a.pop();
    for (let l = 0; l < a.length; l++) {
      const c = O();
      if (k(c)) {
        const u = a[l];
        u === `
` || u === `\r
` ? c.insertParagraph() : u === "	" ? c.insertNodes([jn()]) : c.insertText(u);
      }
    }
  } else e.insertRawText(s);
}
function Fr(n, e, t) {
  n.dispatchCommand(Ss, { nodes: e, selection: t }) || t.insertNodes(e);
}
function uo(n, e, t, r = []) {
  let i = e === null || t.isSelected(e);
  const o = D(t) && t.excludeFromCopy("html");
  let s = t;
  if (e !== null) {
    let c = ki(t);
    c = V(c) && e !== null ? Zi(e, c) : c, s = c;
  }
  const a = D(s) ? s.getChildren() : [], l = function(c) {
    const u = c.exportJSON(), g = c.constructor;
    if (u.type !== g.getType() && Wt(58, g.name), D(c)) {
      const p = u.children;
      Array.isArray(p) || Wt(59, g.name);
    }
    return u;
  }(s);
  if (V(s)) {
    const c = s.__text;
    c.length > 0 ? l.text = c : i = !1;
  }
  for (let c = 0; c < a.length; c++) {
    const u = a[c], g = uo(n, e, u, l.children);
    !i && D(t) && g && t.extractWithChild(u, e, "clone") && (i = !0);
  }
  if (i && !o) r.push(l);
  else if (Array.isArray(l.children)) for (let c = 0; c < l.children.length; c++) {
    const u = l.children[c];
    r.push(u);
  }
  return i;
}
function Ia(n, e) {
  const t = [], r = be().getChildren();
  for (let i = 0; i < r.length; i++)
    uo(n, e, r[i], t);
  return { namespace: n._config.namespace, nodes: t };
}
function Da(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) {
    const r = n[t], i = As(r);
    V(i) && fa(i), e.push(i);
  }
  return e;
}
let Ze = null;
async function Ir(n, e, t) {
  if (Ze !== null) return !1;
  if (e !== null) return new Promise((c, u) => {
    n.update(() => {
      c(Dr(n, e, t));
    });
  });
  const r = n.getRootElement(), i = n._window || window, o = window.document, s = qt(i);
  if (r === null || s === null) return !1;
  const a = o.createElement("span");
  a.style.cssText = "position: fixed; top: -1000px;", a.append(o.createTextNode("#")), r.append(a);
  const l = new Range();
  return l.setStart(a, 0), l.setEnd(a, 1), s.removeAllRanges(), s.addRange(l), new Promise((c, u) => {
    const g = n.registerCommand(Oi, (p) => (De(p, ClipboardEvent) && (g(), Ze !== null && (window.clearTimeout(Ze), Ze = null), c(Dr(n, p, t))), !0), Cs);
    Ze = window.setTimeout(() => {
      g(), Ze = null, c(!1);
    }, 50), o.execCommand("copy"), a.remove();
  });
}
function Dr(n, e, t) {
  if (t === void 0) {
    const i = qt(n._window);
    if (!i) return !1;
    const o = i.anchorNode, s = i.focusNode;
    if (o !== null && s !== null && !Ts(n, o, s)) return !1;
    const a = O();
    if (a === null) return !1;
    t = Ma(a);
  }
  e.preventDefault();
  const r = e.clipboardData;
  return r !== null && ($a(r, t), !0);
}
const La = [["text/html", Ra], ["application/x-lexical-editor", Fa]];
function Ma(n = O()) {
  const e = { "text/plain": n ? n.getTextContent() : "" };
  if (n) {
    const t = Ri();
    for (const [r, i] of La) {
      const o = i(t, n);
      o !== null && (e[r] = o);
    }
  }
  return e;
}
function $a(n, e) {
  for (const t in e) {
    const r = e[t];
    r !== void 0 && n.setData(t, r);
  }
}
function Lr(n, e) {
  if (document.caretRangeFromPoint !== void 0) {
    const t = document.caretRangeFromPoint(n, e);
    return t === null ? null : { node: t.startContainer, offset: t.startOffset };
  }
  if (document.caretPositionFromPoint !== "undefined") {
    const t = document.caretPositionFromPoint(n, e);
    return t === null ? null : { node: t.offsetNode, offset: t.offset };
  }
  return null;
}
const it = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Pa = it && "documentMode" in document ? document.documentMode : null, ja = !(!it || !("InputEvent" in window) || Pa) && "getTargetRanges" in new window.InputEvent("input"), za = it && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Mr = it && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Ua = it && /^(?=.*Chrome).*/i.test(navigator.userAgent), Ba = it && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Ua, An = Te("DRAG_DROP_PASTE_FILE");
class Xt extends ye {
  static getType() {
    return "quote";
  }
  static clone(e) {
    return new Xt(e.__key);
  }
  createDOM(e) {
    const t = document.createElement("blockquote");
    return ee(t, e.theme.quote), t;
  }
  updateDOM(e, t) {
    return !1;
  }
  static importDOM() {
    return { blockquote: (e) => ({ conversion: Wa, priority: 0 }) };
  }
  exportDOM(e) {
    const { element: t } = super.exportDOM(e);
    if (Q(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const r = this.getFormatType();
      t.style.textAlign = r;
      const i = this.getDirection();
      i && (t.dir = i);
    }
    return { element: t };
  }
  static importJSON(e) {
    return fo().updateFromJSON(e);
  }
  insertNewAfter(e, t) {
    const r = q(), i = this.getDirection();
    return r.setDirection(i), this.insertAfter(r, t), r;
  }
  collapseAtStart() {
    const e = q();
    return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
  }
  canMergeWhenEmpty() {
    return !0;
  }
}
function fo() {
  return fe(new Xt());
}
class ot extends ye {
  static getType() {
    return "heading";
  }
  static clone(e) {
    return new ot(e.__tag, e.__key);
  }
  constructor(e, t) {
    super(t), this.__tag = e;
  }
  getTag() {
    return this.__tag;
  }
  setTag(e) {
    const t = this.getWritable();
    return this.__tag = e, t;
  }
  createDOM(e) {
    const t = this.__tag, r = document.createElement(t), i = e.theme.heading;
    if (i !== void 0) {
      const o = i[t];
      ee(r, o);
    }
    return r;
  }
  updateDOM(e, t, r) {
    return e.__tag !== this.__tag;
  }
  static importDOM() {
    return { h1: (e) => ({ conversion: Xe, priority: 0 }), h2: (e) => ({ conversion: Xe, priority: 0 }), h3: (e) => ({ conversion: Xe, priority: 0 }), h4: (e) => ({ conversion: Xe, priority: 0 }), h5: (e) => ({ conversion: Xe, priority: 0 }), h6: (e) => ({ conversion: Xe, priority: 0 }), p: (e) => {
      const t = e.firstChild;
      return t !== null && $r(t) ? { conversion: () => ({ node: null }), priority: 3 } : null;
    }, span: (e) => $r(e) ? { conversion: (t) => ({ node: et("h1") }), priority: 3 } : null };
  }
  exportDOM(e) {
    const { element: t } = super.exportDOM(e);
    if (Q(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const r = this.getFormatType();
      t.style.textAlign = r;
      const i = this.getDirection();
      i && (t.dir = i);
    }
    return { element: t };
  }
  static importJSON(e) {
    return et(e.tag).updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setTag(e.tag);
  }
  exportJSON() {
    return { ...super.exportJSON(), tag: this.getTag() };
  }
  insertNewAfter(e, t = !0) {
    const r = e ? e.anchor.offset : 0, i = this.getLastDescendant(), o = !i || e && e.anchor.key === i.getKey() && r === i.getTextContentSize() || !e ? q() : et(this.getTag()), s = this.getDirection();
    if (o.setDirection(s), this.insertAfter(o, t), r === 0 && !this.isEmpty() && e) {
      const a = q();
      a.select(), this.replace(a, !0);
    }
    return o;
  }
  collapseAtStart() {
    const e = this.isEmpty() ? q() : et(this.getTag());
    return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
  }
  extractWithChild() {
    return !0;
  }
}
function $r(n) {
  return n.nodeName.toLowerCase() === "span" && n.style.fontSize === "26pt";
}
function Xe(n) {
  const e = n.nodeName.toLowerCase();
  let t = null;
  return e !== "h1" && e !== "h2" && e !== "h3" && e !== "h4" && e !== "h5" && e !== "h6" || (t = et(e), n.style !== null && (Pi(n, t), t.setFormat(n.style.textAlign))), { node: t };
}
function Wa(n) {
  const e = fo();
  return n.style !== null && (e.setFormat(n.style.textAlign), Pi(n, e)), { node: e };
}
function et(n = "h1") {
  return fe(new ot(n));
}
function Ha(n) {
  return n instanceof ot;
}
function Lt(n) {
  let e = null;
  if (De(n, DragEvent) ? e = n.dataTransfer : De(n, ClipboardEvent) && (e = n.clipboardData), e === null) return [!1, [], !1];
  const t = e.types, r = t.includes("Files"), i = t.includes("text/html") || t.includes("text/plain");
  return [r, Array.from(e.files), i];
}
function Pr(n) {
  const e = O();
  if (!k(e)) return !1;
  const t = /* @__PURE__ */ new Set(), r = e.getNodes();
  for (let i = 0; i < r.length; i++) {
    const o = r[i], s = o.getKey();
    if (t.has(s)) continue;
    const a = me(o, (c) => D(c) && !c.isInline());
    if (a === null) continue;
    const l = a.getKey();
    a.canIndent() && !t.has(l) && (t.add(l), n(a));
  }
  return t.size > 0;
}
function Mt(n) {
  const e = Me(n);
  return tt(e);
}
function hn(n) {
  for (const e of ["lowercase", "uppercase", "capitalize"]) n.hasFormat(e) && n.toggleFormat(e);
}
function Ka(n) {
  return we(n.registerCommand(Ws, (e) => {
    const t = O();
    return !!Se(t) && (t.clear(), !0);
  }, 0), n.registerCommand(dn, (e) => {
    const t = O();
    return !!k(t) && (t.deleteCharacter(e), !0);
  }, M), n.registerCommand(Bs, (e) => {
    const t = O();
    return !!k(t) && (t.deleteWord(e), !0);
  }, M), n.registerCommand(Us, (e) => {
    const t = O();
    return !!k(t) && (t.deleteLine(e), !0);
  }, M), n.registerCommand(zs, (e) => {
    const t = O();
    if (typeof e == "string") t !== null && t.insertText(e);
    else {
      if (t === null) return !1;
      const r = e.dataTransfer;
      if (r != null) Rr(r, t, n);
      else if (k(t)) {
        const i = e.data;
        return i && t.insertText(i), !0;
      }
    }
    return !0;
  }, M), n.registerCommand(js, () => {
    const e = O();
    return !!k(e) && (e.removeText(), !0);
  }, M), n.registerCommand(pt, (e) => {
    const t = O();
    return !!k(t) && (t.formatText(e), !0);
  }, M), n.registerCommand(ht, (e) => {
    const t = O();
    if (!k(t) && !Se(t)) return !1;
    const r = t.getNodes();
    for (const i of r) {
      const o = me(i, (s) => D(s) && !s.isInline());
      o !== null && o.setFormat(e);
    }
    return !0;
  }, M), n.registerCommand(br, (e) => {
    const t = O();
    return !!k(t) && (t.insertLineBreak(e), !0);
  }, M), n.registerCommand(Cn, () => {
    const e = O();
    return !!k(e) && (e.insertParagraph(), !0);
  }, M), n.registerCommand(Ps, () => (Hn([jn()]), !0), M), n.registerCommand($s, () => Pr((e) => {
    const t = e.getIndent();
    e.setIndent(t + 1);
  }), M), n.registerCommand(yr, () => Pr((e) => {
    const t = e.getIndent();
    t > 0 && e.setIndent(t - 1);
  }), M), n.registerCommand($i, (e) => {
    const t = O();
    if (Se(t) && !Mt(e.target)) {
      const r = t.getNodes();
      if (r.length > 0) return r[0].selectPrevious(), !0;
    } else if (k(t)) {
      const r = wr(t.focus, !0);
      if (!e.shiftKey && tt(r) && !r.isIsolated() && !r.isInline()) return r.selectPrevious(), e.preventDefault(), !0;
    }
    return !1;
  }, M), n.registerCommand(Mi, (e) => {
    const t = O();
    if (Se(t)) {
      const r = t.getNodes();
      if (r.length > 0) return r[0].selectNext(0, 0), !0;
    } else if (k(t)) {
      if (function(i) {
        const o = i.focus;
        return o.key === "root" && o.offset === be().getChildrenSize();
      }(t)) return e.preventDefault(), !0;
      const r = wr(t.focus, !1);
      if (!e.shiftKey && tt(r) && !r.isIsolated() && !r.isInline()) return r.selectNext(), e.preventDefault(), !0;
    }
    return !1;
  }, M), n.registerCommand(Li, (e) => {
    const t = O();
    if (Se(t)) {
      const r = t.getNodes();
      if (r.length > 0) return e.preventDefault(), r[0].selectPrevious(), !0;
    }
    if (!k(t)) return !1;
    if (Nr(t, !0)) {
      const r = e.shiftKey;
      return e.preventDefault(), kr(t, r, !0), !0;
    }
    return !1;
  }, M), n.registerCommand(Ms, (e) => {
    const t = O();
    if (Se(t) && !Mt(e.target)) {
      const i = t.getNodes();
      if (i.length > 0) return e.preventDefault(), i[0].selectNext(0, 0), !0;
    }
    if (!k(t)) return !1;
    const r = e.shiftKey;
    return !!Nr(t, !1) && (e.preventDefault(), kr(t, r, !1), !0);
  }, M), n.registerCommand(Ls, (e) => {
    if (Mt(e.target)) return !1;
    const t = O();
    if (!k(t)) return !1;
    const { anchor: r } = t, i = r.getNode();
    return t.isCollapsed() && r.offset === 0 && !Pn(i) && Aa(i).getIndent() > 0 ? (e.preventDefault(), n.dispatchCommand(yr, void 0)) : (!Mr || navigator.language !== "ko-KR") && (e.preventDefault(), n.dispatchCommand(dn, !0));
  }, M), n.registerCommand(Ds, (e) => {
    if (Mt(e.target)) return !1;
    const t = O();
    return !!k(t) && (e.preventDefault(), n.dispatchCommand(dn, !1));
  }, M), n.registerCommand(Di, (e) => {
    const t = O();
    if (!k(t)) return !1;
    if (hn(t), e !== null) {
      if ((Mr || za || Ba) && ja) return !1;
      if (e.preventDefault(), e.shiftKey) return n.dispatchCommand(br, !1);
    }
    return n.dispatchCommand(Cn, void 0);
  }, M), n.registerCommand(Ii, () => {
    const e = O();
    return !!k(e) && (n.blur(), !0);
  }, M), n.registerCommand(Wn, (e) => {
    const [, t] = Lt(e);
    if (t.length > 0) {
      const i = Lr(e.clientX, e.clientY);
      if (i !== null) {
        const { offset: o, node: s } = i, a = Me(s);
        if (a !== null) {
          const l = Gt();
          if (V(a)) l.anchor.set(a.getKey(), o, "text"), l.focus.set(a.getKey(), o, "text");
          else {
            const u = a.getParentOrThrow().getKey(), g = a.getIndexWithinParent() + 1;
            l.anchor.set(u, g, "element"), l.focus.set(u, g, "element");
          }
          const c = Ut(l);
          Ct(c);
        }
        n.dispatchCommand(An, t);
      }
      return e.preventDefault(), !0;
    }
    const r = O();
    return !!k(r);
  }, M), n.registerCommand(Bn, (e) => {
    const [t] = Lt(e), r = O();
    return !(t && !k(r));
  }, M), n.registerCommand(Un, (e) => {
    const [t] = Lt(e), r = O();
    if (t && !k(r)) return !1;
    const i = Lr(e.clientX, e.clientY);
    if (i !== null) {
      const o = Me(i.node);
      tt(o) && e.preventDefault();
    }
    return !0;
  }, M), n.registerCommand(Fs, () => (Is(), !0), M), n.registerCommand(Oi, (e) => (Ir(n, De(e, ClipboardEvent) ? e : null), !0), M), n.registerCommand(Rs, (e) => (async function(t, r) {
    await Ir(r, De(t, ClipboardEvent) ? t : null), r.update(() => {
      const i = O();
      k(i) ? i.removeText() : Se(i) && i.getNodes().forEach((o) => o.remove());
    });
  }(e, n), !0), M), n.registerCommand(zn, (e) => {
    const [, t, r] = Lt(e);
    return t.length > 0 && !r ? (n.dispatchCommand(An, t), !0) : ks(e.target) && Os(e.target) ? !1 : O() !== null && (function(i, o) {
      i.preventDefault(), o.update(() => {
        const s = O(), a = De(i, InputEvent) || De(i, KeyboardEvent) ? null : i.clipboardData;
        a != null && s !== null && Rr(a, s, o);
      }, { tag: "paste" });
    }(e, n), !0);
  }, M), n.registerCommand(Fi, (e) => {
    const t = O();
    return k(t) && hn(t), !1;
  }, M), n.registerCommand(Ns, (e) => {
    const t = O();
    return k(t) && hn(t), !1;
  }, M));
}
const Tn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? rt : j;
function jr(n) {
  return n.getEditorState().read(Yi(n.isComposing()));
}
function Ja({ contentEditable: n, placeholder: e = null, ErrorBoundary: t }) {
  const [r] = te(), i = function(o, s) {
    const [a, l] = J(() => o.getDecorators());
    return Tn(() => o.registerDecoratorListener((c) => {
      Qs(() => {
        l(c);
      });
    }), [o]), j(() => {
      l(o.getDecorators());
    }, [o]), _e(() => {
      const c = [], u = Object.keys(a);
      for (let g = 0; g < u.length; g++) {
        const p = u[g], b = f.jsx(s, { onError: (x) => o._onError(x), children: f.jsx(Ln, { fallback: null, children: a[p] }) }), y = o.getElementByKey(p);
        y !== null && c.push(Jn(b, y, p));
      }
      return c;
    }, [s, a, o]);
  }(r, t);
  return function(o) {
    Tn(() => we(Ka(o), ka(o)), [o]);
  }(r), f.jsxs(f.Fragment, { children: [n, f.jsx(Va, { content: e }), i] });
}
function Va({ content: n }) {
  const [e] = te(), t = function(i) {
    const [o, s] = J(() => jr(i));
    return Tn(() => {
      function a() {
        const l = jr(i);
        s(l);
      }
      return a(), we(i.registerUpdateListener(() => {
        a();
      }), i.registerEditableListener(() => {
        a();
      }));
    }, [i]), o;
  }(e), r = aa();
  return t ? typeof n == "function" ? n(r) : n : null;
}
const go = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? rt : j;
function Ya({ editor: n, ariaActiveDescendant: e, ariaAutoComplete: t, ariaControls: r, ariaDescribedBy: i, ariaErrorMessage: o, ariaExpanded: s, ariaInvalid: a, ariaLabel: l, ariaLabelledBy: c, ariaMultiline: u, ariaOwns: g, ariaRequired: p, autoCapitalize: b, className: y, id: x, role: E = "textbox", spellCheck: S = !0, style: h, tabIndex: m, "data-testid": _, ...v }, w) {
  const [A, F] = J(n.isEditable()), N = Ae((B) => {
    B && B.ownerDocument && B.ownerDocument.defaultView ? n.setRootElement(B) : n.setRootElement(null);
  }, [n]), P = _e(() => /* @__PURE__ */ function(...B) {
    return (ne) => {
      B.forEach((Y) => {
        typeof Y == "function" ? Y(ne) : Y != null && (Y.current = ne);
      });
    };
  }(w, N), [N, w]);
  return go(() => (F(n.isEditable()), n.registerEditableListener((B) => {
    F(B);
  })), [n]), f.jsx("div", { "aria-activedescendant": A ? e : void 0, "aria-autocomplete": A ? t : "none", "aria-controls": A ? r : void 0, "aria-describedby": i, ...o != null ? { "aria-errormessage": o } : {}, "aria-expanded": A && E === "combobox" ? !!s : void 0, ...a != null ? { "aria-invalid": a } : {}, "aria-label": l, "aria-labelledby": c, "aria-multiline": u, "aria-owns": A ? g : void 0, "aria-readonly": !A || void 0, "aria-required": p, autoCapitalize: b, className: y, contentEditable: A, "data-testid": _, id: x, ref: P, role: A ? E : void 0, spellCheck: S, style: h, tabIndex: m, ...v });
}
const Ga = Ti(Ya);
function zr(n) {
  return n.getEditorState().read(Yi(n.isComposing()));
}
const qa = Ti(Za);
function Za(n, e) {
  const { placeholder: t, ...r } = n, [i] = te();
  return f.jsxs(f.Fragment, { children: [f.jsx(Ga, { editor: i, ...r, ref: e }), t != null && f.jsx(Xa, { editor: i, content: t })] });
}
function Xa({ content: n, editor: e }) {
  const t = function(s) {
    const [a, l] = J(() => zr(s));
    return go(() => {
      function c() {
        const u = zr(s);
        l(u);
      }
      return c(), we(s.registerUpdateListener(() => {
        c();
      }), s.registerEditableListener(() => {
        c();
      }));
    }, [s]), a;
  }(e), [r, i] = J(e.isEditable());
  if (rt(() => (i(e.isEditable()), e.registerEditableListener((s) => {
    i(s);
  })), [e]), !t) return null;
  let o = null;
  return typeof n == "function" ? o = n(r) : n !== null && (o = n), o === null ? null : f.jsx("div", { "aria-hidden": !0, children: o });
}
const $t = 0, Nn = 1, kn = 2, pe = 0, Qa = 1, Ur = 2, el = 3, tl = 4;
function nl(n, e, t, r, i) {
  if (n === null || t.size === 0 && r.size === 0 && !i) return pe;
  const o = e._selection, s = n._selection;
  if (i) return Qa;
  if (!(k(o) && k(s) && s.isCollapsed() && o.isCollapsed())) return pe;
  const a = function(S, h, m) {
    const _ = S._nodeMap, v = [];
    for (const w of h) {
      const A = _.get(w);
      A !== void 0 && v.push(A);
    }
    for (const [w, A] of m) {
      if (!A) continue;
      const F = _.get(w);
      F === void 0 || Pn(F) || v.push(F);
    }
    return v;
  }(e, t, r);
  if (a.length === 0) return pe;
  if (a.length > 1) {
    const S = e._nodeMap, h = S.get(o.anchor.key), m = S.get(s.anchor.key);
    return h && m && !n._nodeMap.has(h.__key) && V(h) && h.__text.length === 1 && o.anchor.offset === 1 ? Ur : pe;
  }
  const l = a[0], c = n._nodeMap.get(l.__key);
  if (!V(c) || !V(l) || c.__mode !== l.__mode) return pe;
  const u = c.__text, g = l.__text;
  if (u === g) return pe;
  const p = o.anchor, b = s.anchor;
  if (p.key !== b.key || p.type !== "text") return pe;
  const y = p.offset, x = b.offset, E = g.length - u.length;
  return E === 1 && x === y - 1 ? Ur : E === -1 && x === y + 1 ? el : E === -1 && x === y ? tl : pe;
}
function rl(n, e) {
  let t = Date.now(), r = pe;
  return (i, o, s, a, l, c) => {
    const u = Date.now();
    if (c.has("historic")) return r = pe, t = u, kn;
    const g = nl(i, o, a, l, n.isComposing()), p = (() => {
      const b = s === null || s.editor === n, y = c.has("history-push");
      if (!y && b && c.has("history-merge")) return $t;
      if (i === null) return Nn;
      const x = o._selection;
      return a.size > 0 || l.size > 0 ? y === !1 && g !== pe && g === r && u < t + e && b || a.size === 1 && function(E, S, h) {
        const m = S._nodeMap.get(E), _ = h._nodeMap.get(E), v = S._selection, w = h._selection;
        return !(k(v) && k(w) && v.anchor.type === "element" && v.focus.type === "element" && w.anchor.type === "text" && w.focus.type === "text" || !V(m) || !V(_) || m.__parent !== _.__parent) && JSON.stringify(S.read(() => m.exportJSON())) === JSON.stringify(h.read(() => _.exportJSON()));
      }(Array.from(a)[0], i, o) ? $t : Nn : x !== null ? $t : kn;
    })();
    return t = u, r = g, p;
  };
}
function Br(n) {
  n.undoStack = [], n.redoStack = [], n.current = null;
}
function il(n, e, t) {
  const r = rl(n, t);
  return we(n.registerCommand(zi, () => (function(o, s) {
    const a = s.redoStack, l = s.undoStack;
    if (l.length !== 0) {
      const c = s.current, u = l.pop();
      c !== null && (a.push(c), o.dispatchCommand(mt, !0)), l.length === 0 && o.dispatchCommand(_t, !1), s.current = u || null, u && u.editor.setEditorState(u.editorState, { tag: "historic" });
    }
  }(n, e), !0), M), n.registerCommand(ji, () => (function(o, s) {
    const a = s.redoStack, l = s.undoStack;
    if (a.length !== 0) {
      const c = s.current;
      c !== null && (l.push(c), o.dispatchCommand(_t, !0));
      const u = a.pop();
      a.length === 0 && o.dispatchCommand(mt, !1), s.current = u || null, u && u.editor.setEditorState(u.editorState, { tag: "historic" });
    }
  }(n, e), !0), M), n.registerCommand(Ks, () => (Br(e), !1), M), n.registerCommand(Hs, () => (Br(e), n.dispatchCommand(mt, !1), n.dispatchCommand(_t, !1), !0), M), n.registerUpdateListener(({ editorState: o, prevEditorState: s, dirtyLeaves: a, dirtyElements: l, tags: c }) => {
    const u = e.current, g = e.redoStack, p = e.undoStack, b = u === null ? null : u.editorState;
    if (u !== null && o === b) return;
    const y = r(s, o, u, a, l, c);
    if (y === Nn) g.length !== 0 && (e.redoStack = [], n.dispatchCommand(mt, !1)), u !== null && (p.push({ ...u }), n.dispatchCommand(_t, !0));
    else if (y === kn) return;
    e.current = { editor: n, editorState: o };
  }));
}
function ol() {
  return { current: null, redoStack: [], undoStack: [] };
}
function sl({ delay: n, externalHistoryState: e }) {
  const [t] = te();
  return function(r, i, o = 1e3) {
    const s = _e(() => i || ol(), [i]);
    j(() => il(r, s, o), [o, r, s]);
  }(t, e, n), null;
}
const al = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? rt : j;
function ll({ ignoreHistoryMergeTagChange: n = !0, ignoreSelectionChange: e = !1, onChange: t }) {
  const [r] = te();
  return al(() => {
    if (t) return r.registerUpdateListener(({ editorState: i, dirtyElements: o, dirtyLeaves: s, prevEditorState: a, tags: l }) => {
      e && o.size === 0 && s.size === 0 || n && l.has("history-merge") || a.isEmpty() || t(i, r, l);
    });
  }, [r, n, e, t]), null;
}
const cl = (n, e) => {
  switch (e.type) {
    case "SHOW":
      return { ...n, visible: !0 };
    case "HIDE":
      return { ...n, visible: !1 };
    case "SET_TIMEOUT":
      return { ...n, timeoutId: e.payload };
    case "CLEAR_TIMEOUT":
      return n.timeoutId && clearTimeout(n.timeoutId), { ...n, timeoutId: null };
    default:
      return n;
  }
}, ul = ({ isLoading: n }) => {
  const [t, r] = gs(cl, {
    visible: !1,
    timeoutId: null
  }), i = _e(
    () => n ? "Saving" : "Saved",
    [n]
  );
  return j(() => {
    if (n)
      r({ type: "SHOW" }), r({ type: "CLEAR_TIMEOUT" });
    else {
      const o = setTimeout(() => {
        r({ type: "HIDE" });
      }, 2e3);
      r({ type: "SET_TIMEOUT", payload: o });
    }
    return () => {
      r({ type: "CLEAR_TIMEOUT" });
    };
  }, [n]), t.visible ? /* @__PURE__ */ f.jsx("div", { className: "autosave-indicator", children: /* @__PURE__ */ f.jsx(
    "span",
    {
      className: `body-m-medium autosave-text ${n ? "saving" : "saved"}`,
      children: i
    }
  ) }) : null;
}, dl = () => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
        }
      ),
      /* @__PURE__ */ f.jsx("path", { d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" })
    ]
  }
), fl = () => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
        }
      ),
      /* @__PURE__ */ f.jsx("path", { d: "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" })
    ]
  }
), gl = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ f.jsx("path", { d: "M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" })
  }
), hl = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ f.jsx("path", { d: "M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" })
  }
), pl = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ f.jsx("path", { d: "M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z" })
  }
), ml = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ f.jsx("path", { d: "M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z" })
  }
), _l = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
      }
    )
  }
), bl = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
      }
    )
  }
), yl = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
      }
    )
  }
), wl = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
      }
    )
  }
), ho = Vt.createContext(null), Wr = 4;
function Ue({
  children: n,
  className: e,
  onClick: t,
  title: r
}) {
  const i = he(null), o = Vt.useContext(ho);
  if (o === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: s } = o;
  return j(() => {
    i && i.current && s(i);
  }, [i, s]), /* @__PURE__ */ f.jsx(
    "button",
    {
      className: e,
      onClick: t,
      ref: i,
      title: r,
      type: "button",
      children: n
    }
  );
}
function vl({
  children: n,
  dropDownRef: e,
  onClose: t
}) {
  const [r, i] = J(), [o, s] = J(), a = Ae(
    (u) => {
      i((g) => g ? [...g, u] : [u]);
    },
    [i]
  ), l = (u) => {
    if (!r)
      return;
    const g = u.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(g) && u.preventDefault(), g === "Escape" || g === "Tab" ? t() : g === "ArrowUp" ? s((p) => {
      if (!p)
        return r[0];
      const b = r.indexOf(p) - 1;
      return r[b === -1 ? r.length - 1 : b];
    }) : g === "ArrowDown" && s((p) => p ? r[r.indexOf(p) + 1] : r[0]);
  }, c = _e(
    () => ({
      registerItem: a
    }),
    [a]
  );
  return j(() => {
    r && !o && s(r[0]), o && o.current && o.current.focus();
  }, [r, o]), /* @__PURE__ */ f.jsx(ho.Provider, { value: c, children: /* @__PURE__ */ f.jsx(
    "div",
    {
      className: "lexical-editor-toolbar-dropdown",
      ref: e,
      onKeyDown: l,
      children: n
    }
  ) });
}
function po({
  disabled: n = !1,
  buttonLabel: e,
  buttonAriaLabel: t,
  buttonClassName: r,
  children: i,
  stopCloseOnClickSelf: o,
  icon: s,
  container: a
}) {
  const l = he(null), c = he(null), [u, g] = J(!1), p = () => {
    g(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const b = c.current, y = l.current;
    if (u && b !== null && y !== null) {
      const { top: x, left: E } = b.getBoundingClientRect();
      y.style.top = `${x + b.offsetHeight + Wr}px`, y.style.left = `${Math.min(E, window.innerWidth - y.offsetWidth - 20)}px`;
    }
  }, [l, c, u]), j(() => {
    const b = c.current;
    if (b !== null && u) {
      const y = (x) => {
        const E = x.target;
        o && l.current && l.current.contains(E) || b.contains(E) || g(!1);
      };
      return document.addEventListener("click", y), () => {
        document.removeEventListener("click", y);
      };
    }
  }, [l, c, u, o]), j(() => {
    const b = () => {
      if (u) {
        const y = c.current, x = l.current;
        if (y !== null && x !== null) {
          const { top: E } = y.getBoundingClientRect(), S = E + y.offsetHeight + Wr;
          S !== x.getBoundingClientRect().top && (x.style.top = `${S}px`);
        }
      }
    };
    return document.addEventListener("scroll", b), () => {
      document.removeEventListener("scroll", b);
    };
  }, [c, l, u]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsxs(
      "button",
      {
        type: "button",
        disabled: n,
        "aria-label": t || e,
        className: r,
        onClick: () => g(!u),
        ref: c,
        children: [
          e && /* @__PURE__ */ f.jsx("span", { className: "text dropdown-button-text", children: e }),
          s,
          /* @__PURE__ */ f.jsx("i", { className: "chevron-down" })
        ]
      }
    ),
    u && Jn(
      /* @__PURE__ */ f.jsx(vl, { dropDownRef: l, onClose: p, children: i }),
      a || document.body
    )
  ] });
}
function mo({
  label: n,
  value: e,
  onChange: t,
  placeholder: r = "",
  "data-test-id": i,
  type: o = "text"
}) {
  return /* @__PURE__ */ f.jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ f.jsx("label", { className: "Input__label", children: n }),
    /* @__PURE__ */ f.jsx(
      "input",
      {
        type: o,
        className: "Input__input",
        placeholder: r,
        value: e,
        onChange: (s) => {
          t(s.target.value);
        },
        "data-test-id": i
      }
    )
  ] });
}
let On = !1;
const xl = [
  "#d0021b",
  "#f5a623",
  "#f8e71c",
  "#8b572a",
  "#7ed321",
  "#417505",
  "#bd10e0",
  "#9013fe",
  "#4a90e2",
  "#50e3c2",
  "#b8e986",
  "#000000",
  "#4a4a4a",
  "#9b9b9b",
  "#ffffff"
], gt = 214, Hr = 150;
function El({
  color: n,
  onChange: e
}) {
  const [t, r] = J(Qe("hex", n)), [i, o] = J(n), s = he(null), a = _e(
    () => ({
      x: t.hsv.s / 100 * gt,
      y: (100 - t.hsv.v) / 100 * Hr
    }),
    [t.hsv.s, t.hsv.v]
  ), l = _e(
    () => ({
      x: t.hsv.h / 360 * gt
    }),
    [t.hsv]
  ), c = (p) => {
    if (o(p), /^#[0-9A-Fa-f]{6}$/i.test(p)) {
      const b = Qe("hex", p);
      r(b);
    }
  }, u = ({ x: p, y: b }) => {
    const y = {
      ...t.hsv,
      s: p / gt * 100,
      v: 100 - b / Hr * 100
    }, x = Qe("hsv", y);
    r(x), o(x.hex);
  }, g = ({ x: p }) => {
    const b = { ...t.hsv, h: p / gt * 360 }, y = Qe("hsv", b);
    r(y), o(y.hex);
  };
  return j(() => {
    s.current !== null && e && (e(t.hex, On), o(t.hex));
  }, [t, e]), j(() => {
    if (n === void 0)
      return;
    const p = Qe("hex", n);
    r(p), o(p.hex);
  }, [n]), /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: "color-picker-wrapper",
      style: { width: gt },
      ref: s,
      children: [
        /* @__PURE__ */ f.jsx(mo, { label: "Hex", onChange: c, value: i }),
        /* @__PURE__ */ f.jsx("div", { className: "color-picker-basic-color", children: xl.map((p) => /* @__PURE__ */ f.jsx(
          "button",
          {
            className: p === t.hex ? " active" : "",
            style: { backgroundColor: p },
            onClick: () => {
              o(p), r(Qe("hex", p));
            }
          },
          p
        )) }),
        /* @__PURE__ */ f.jsx(
          Kr,
          {
            className: "color-picker-saturation",
            style: { backgroundColor: `hsl(${t.hsv.h}, 100%, 50%)` },
            onChange: u,
            children: /* @__PURE__ */ f.jsx(
              "div",
              {
                className: "color-picker-saturation_cursor",
                style: {
                  backgroundColor: t.hex,
                  left: a.x,
                  top: a.y
                }
              }
            )
          }
        ),
        /* @__PURE__ */ f.jsx(Kr, { className: "color-picker-hue", onChange: g, children: /* @__PURE__ */ f.jsx(
          "div",
          {
            className: "color-picker-hue_cursor",
            style: {
              backgroundColor: `hsl(${t.hsv.h}, 100%, 50%)`,
              left: l.x
            }
          }
        ) }),
        /* @__PURE__ */ f.jsx(
          "div",
          {
            className: "color-picker-color",
            style: { backgroundColor: t.hex }
          }
        )
      ]
    }
  );
}
function Kr({
  className: n,
  style: e,
  onChange: t,
  children: r
}) {
  const i = he(null), o = he(!1), s = (l) => {
    if (i.current) {
      const { current: c } = i, { width: u, height: g, left: p, top: b } = c.getBoundingClientRect(), y = io(c), x = Jr(l.clientX / y - p, u, 0), E = Jr(l.clientY / y - b, g, 0);
      t({ x, y: E });
    }
  }, a = (l) => {
    if (l.button !== 0)
      return;
    s(l);
    const c = (g) => {
      o.current = !0, On = !0, s(g);
    }, u = (g) => {
      o.current && (On = !1), document.removeEventListener("mousemove", c, !1), document.removeEventListener("mouseup", u, !1), s(g), o.current = !1;
    };
    document.addEventListener("mousemove", c, !1), document.addEventListener("mouseup", u, !1);
  };
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: i,
      className: n,
      style: e,
      onMouseDown: a,
      children: r
    }
  );
}
function Jr(n, e, t) {
  return n > e ? e : n < t ? t : n;
}
function Vr(n) {
  if (n.startsWith("#")) {
    if (n.length === 4 || n.length === 5)
      return n = n.split("").map((e, t) => t ? e + e : "#").join(""), n;
    if (n.length === 7 || n.length === 9)
      return n;
  } else {
    const e = document.createElement("canvas").getContext("2d");
    if (!e)
      throw new Error("2d context not supported or canvas already initialized");
    return e.fillStyle = n, e.fillStyle;
  }
  return "#000000";
}
function Yr(n) {
  const e = (n.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (t, r, i, o) => "#" + r + r + i + i + o + o
  ).substring(1).match(/.{2}/g) || []).map((t) => parseInt(t, 16));
  return {
    b: e[2],
    g: e[1],
    r: e[0]
  };
}
function pn({ r: n, g: e, b: t }) {
  n /= 255, e /= 255, t /= 255;
  const r = Math.max(n, e, t), i = r - Math.min(n, e, t), o = i ? (r === n ? (e - t) / i + (e < t ? 6 : 0) : r === e ? 2 + (t - n) / i : 4 + (n - e) / i) * 60 : 0, s = r ? i / r * 100 : 0, a = r * 100;
  return { h: o, s, v: a };
}
function Cl({ h: n, s: e, v: t }) {
  e /= 100, t /= 100;
  const r = ~~(n / 60), i = n / 60 - r, o = t * (1 - e), s = t * (1 - e * i), a = t * (1 - e * (1 - i)), l = r % 6, c = Math.round([t, s, o, o, a, t][l] * 255), u = Math.round([a, t, t, s, o, o][l] * 255);
  return { b: Math.round([o, o, a, t, t, s][l] * 255), g: u, r: c };
}
function Gr({ b: n, g: e, r: t }) {
  return "#" + [t, e, n].map((r) => r.toString(16).padStart(2, "0")).join("");
}
function Qe(n, e) {
  let t = Vr("#121212"), r = Yr(t), i = pn(r);
  return n === "hex" ? (t = Vr(e), r = Yr(t), i = pn(r)) : n === "rgb" ? (r = e, t = Gr(r), i = pn(r)) : n === "hsv" && (i = e, r = Cl(i), t = Gr(r)), { hex: t, hsv: i, rgb: r };
}
function qr({
  disabled: n = !1,
  stopCloseOnClickSelf: e = !0,
  color: t,
  onChange: r,
  container: i,
  ...o
}) {
  return /* @__PURE__ */ f.jsx(
    po,
    {
      ...o,
      disabled: n,
      stopCloseOnClickSelf: e,
      container: i,
      children: /* @__PURE__ */ f.jsx(El, { color: t, onChange: r })
    }
  );
}
const Zr = 15, Sl = {
  bgColor: "#fff",
  blockType: "paragraph",
  canRedo: !1,
  canUndo: !1,
  codeLanguage: "",
  elementFormat: "left",
  fontColor: "#000",
  fontFamily: "Arial",
  // Current font size in px
  fontSize: `${Zr}px`,
  // Font size input value - for controlled input
  fontSizeInputValue: `${Zr}`,
  isBold: !1,
  isCode: !1,
  isImageCaption: !1,
  isItalic: !1,
  isLink: !1,
  isRTL: !1,
  isStrikethrough: !1,
  isSubscript: !1,
  isSuperscript: !1,
  isUnderline: !1,
  isLowercase: !1,
  isUppercase: !1,
  isCapitalize: !1,
  rootType: "root"
}, _o = Ai(void 0), Al = ({
  children: n
}) => {
  const [e, t] = J(Sl), r = e.fontSize, i = Ae(
    (s, a) => {
      t((l) => ({ ...l, [s]: a }));
    },
    []
  );
  j(() => {
    i("fontSizeInputValue", r.slice(0, -2));
  }, [r, i]);
  const o = _e(() => ({ toolbarState: e, updateToolbarState: i }), [e, i]);
  return /* @__PURE__ */ f.jsx(_o.Provider, { value: o, children: n });
}, Tl = () => {
  const n = Si(_o);
  if (n === void 0)
    throw new Error("useToolbarState must be used within a ToolbarProvider");
  return n;
}, Nl = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 512 512",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        fill: "#777",
        d: "M221.631 109 109.92 392h58.055l24.079-61h127.892l24.079 61h58.055L290.369 109Zm-8.261 168L256 169l42.63 108Z"
      }
    )
  }
), kl = () => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ f.jsx("path", { fill: "#fff", fillOpacity: ".01", d: "M0 0h48v48H0z" }),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M37 37a4 4 0 0 0 4-4c0-1.473-1.333-3.473-4-6-2.667 2.527-4 4.527-4 6a4 4 0 0 0 4 4Z",
          fill: "#777"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          d: "m20.854 5.504 3.535 3.536",
          stroke: "#777",
          strokeWidth: "4",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          d: "M23.682 8.333 8.125 23.889 19.44 35.203l15.556-15.557L23.682 8.333Z",
          stroke: "#777",
          strokeWidth: "4",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          d: "m12 20.073 16.961 5.577M4 43h40",
          stroke: "#777",
          strokeWidth: "4",
          strokeLinecap: "round"
        }
      )
    ]
  }
);
var Ol = { exports: {} };
(function(n) {
  var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var t = function(r) {
    var i = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, o = 0, s = {}, a = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: r.Prism && r.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function h(m) {
          return m instanceof l ? new l(m.type, h(m.content), m.alias) : Array.isArray(m) ? m.map(h) : m.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(h) {
          return Object.prototype.toString.call(h).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(h) {
          return h.__id || Object.defineProperty(h, "__id", { value: ++o }), h.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function h(m, _) {
          _ = _ || {};
          var v, w;
          switch (a.util.type(m)) {
            case "Object":
              if (w = a.util.objId(m), _[w])
                return _[w];
              v = /** @type {Record<string, any>} */
              {}, _[w] = v;
              for (var A in m)
                m.hasOwnProperty(A) && (v[A] = h(m[A], _));
              return (
                /** @type {any} */
                v
              );
            case "Array":
              return w = a.util.objId(m), _[w] ? _[w] : (v = [], _[w] = v, /** @type {Array} */
              /** @type {any} */
              m.forEach(function(F, N) {
                v[N] = h(F, _);
              }), /** @type {any} */
              v);
            default:
              return m;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(h) {
          for (; h; ) {
            var m = i.exec(h.className);
            if (m)
              return m[1].toLowerCase();
            h = h.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(h, m) {
          h.className = h.className.replace(RegExp(i, "gi"), ""), h.classList.add("language-" + m);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if (document.currentScript && document.currentScript.tagName === "SCRIPT")
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (v) {
            var h = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(v.stack) || [])[1];
            if (h) {
              var m = document.getElementsByTagName("script");
              for (var _ in m)
                if (m[_].src == h)
                  return m[_];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(h, m, _) {
          for (var v = "no-" + m; h; ) {
            var w = h.classList;
            if (w.contains(m))
              return !0;
            if (w.contains(v))
              return !1;
            h = h.parentElement;
          }
          return !!_;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: s,
        plaintext: s,
        text: s,
        txt: s,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(h, m) {
          var _ = a.util.clone(a.languages[h]);
          for (var v in m)
            _[v] = m[v];
          return _;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(h, m, _, v) {
          v = v || /** @type {any} */
          a.languages;
          var w = v[h], A = {};
          for (var F in w)
            if (w.hasOwnProperty(F)) {
              if (F == m)
                for (var N in _)
                  _.hasOwnProperty(N) && (A[N] = _[N]);
              _.hasOwnProperty(F) || (A[F] = w[F]);
            }
          var P = v[h];
          return v[h] = A, a.languages.DFS(a.languages, function(B, ne) {
            ne === P && B != h && (this[B] = A);
          }), A;
        },
        // Traverse a language definition with Depth First Search
        DFS: function h(m, _, v, w) {
          w = w || {};
          var A = a.util.objId;
          for (var F in m)
            if (m.hasOwnProperty(F)) {
              _.call(m, F, m[F], v || F);
              var N = m[F], P = a.util.type(N);
              P === "Object" && !w[A(N)] ? (w[A(N)] = !0, h(N, _, null, w)) : P === "Array" && !w[A(N)] && (w[A(N)] = !0, h(N, _, F, w));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(h, m) {
        a.highlightAllUnder(document, h, m);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(h, m, _) {
        var v = {
          callback: _,
          container: h,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        a.hooks.run("before-highlightall", v), v.elements = Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)), a.hooks.run("before-all-elements-highlight", v);
        for (var w = 0, A; A = v.elements[w++]; )
          a.highlightElement(A, m === !0, v.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(h, m, _) {
        var v = a.util.getLanguage(h), w = a.languages[v];
        a.util.setLanguage(h, v);
        var A = h.parentElement;
        A && A.nodeName.toLowerCase() === "pre" && a.util.setLanguage(A, v);
        var F = h.textContent, N = {
          element: h,
          language: v,
          grammar: w,
          code: F
        };
        function P(ne) {
          N.highlightedCode = ne, a.hooks.run("before-insert", N), N.element.innerHTML = N.highlightedCode, a.hooks.run("after-highlight", N), a.hooks.run("complete", N), _ && _.call(N.element);
        }
        if (a.hooks.run("before-sanity-check", N), A = N.element.parentElement, A && A.nodeName.toLowerCase() === "pre" && !A.hasAttribute("tabindex") && A.setAttribute("tabindex", "0"), !N.code) {
          a.hooks.run("complete", N), _ && _.call(N.element);
          return;
        }
        if (a.hooks.run("before-highlight", N), !N.grammar) {
          P(a.util.encode(N.code));
          return;
        }
        if (m && r.Worker) {
          var B = new Worker(a.filename);
          B.onmessage = function(ne) {
            P(ne.data);
          }, B.postMessage(JSON.stringify({
            language: N.language,
            code: N.code,
            immediateClose: !0
          }));
        } else
          P(a.highlight(N.code, N.grammar, N.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(h, m, _) {
        var v = {
          code: h,
          grammar: m,
          language: _
        };
        if (a.hooks.run("before-tokenize", v), !v.grammar)
          throw new Error('The language "' + v.language + '" has no grammar.');
        return v.tokens = a.tokenize(v.code, v.grammar), a.hooks.run("after-tokenize", v), l.stringify(a.util.encode(v.tokens), v.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(h, m) {
        var _ = m.rest;
        if (_) {
          for (var v in _)
            m[v] = _[v];
          delete m.rest;
        }
        var w = new g();
        return p(w, w.head, h), u(h, w, m, w.head, 0), y(w);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(h, m) {
          var _ = a.hooks.all;
          _[h] = _[h] || [], _[h].push(m);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(h, m) {
          var _ = a.hooks.all[h];
          if (!(!_ || !_.length))
            for (var v = 0, w; w = _[v++]; )
              w(m);
        }
      },
      Token: l
    };
    r.Prism = a;
    function l(h, m, _, v) {
      this.type = h, this.content = m, this.alias = _, this.length = (v || "").length | 0;
    }
    l.stringify = function h(m, _) {
      if (typeof m == "string")
        return m;
      if (Array.isArray(m)) {
        var v = "";
        return m.forEach(function(P) {
          v += h(P, _);
        }), v;
      }
      var w = {
        type: m.type,
        content: h(m.content, _),
        tag: "span",
        classes: ["token", m.type],
        attributes: {},
        language: _
      }, A = m.alias;
      A && (Array.isArray(A) ? Array.prototype.push.apply(w.classes, A) : w.classes.push(A)), a.hooks.run("wrap", w);
      var F = "";
      for (var N in w.attributes)
        F += " " + N + '="' + (w.attributes[N] || "").replace(/"/g, "&quot;") + '"';
      return "<" + w.tag + ' class="' + w.classes.join(" ") + '"' + F + ">" + w.content + "</" + w.tag + ">";
    };
    function c(h, m, _, v) {
      h.lastIndex = m;
      var w = h.exec(_);
      if (w && v && w[1]) {
        var A = w[1].length;
        w.index += A, w[0] = w[0].slice(A);
      }
      return w;
    }
    function u(h, m, _, v, w, A) {
      for (var F in _)
        if (!(!_.hasOwnProperty(F) || !_[F])) {
          var N = _[F];
          N = Array.isArray(N) ? N : [N];
          for (var P = 0; P < N.length; ++P) {
            if (A && A.cause == F + "," + P)
              return;
            var B = N[P], ne = B.inside, Y = !!B.lookbehind, H = !!B.greedy, re = B.alias;
            if (H && !B.pattern.global) {
              var Nt = B.pattern.toString().match(/[imsuy]*$/)[0];
              B.pattern = RegExp(B.pattern.source, Nt + "g");
            }
            for (var lt = B.pattern || B, Z = v.next, ue = w; Z !== m.tail && !(A && ue >= A.reach); ue += Z.value.length, Z = Z.next) {
              var Ce = Z.value;
              if (m.length > h.length)
                return;
              if (!(Ce instanceof l)) {
                var Pe = 1, se;
                if (H) {
                  if (se = c(lt, ue, h, Y), !se || se.index >= h.length)
                    break;
                  var Ne = se.index, kt = se.index + se[0].length, ve = ue;
                  for (ve += Z.value.length; Ne >= ve; )
                    Z = Z.next, ve += Z.value.length;
                  if (ve -= Z.value.length, ue = ve, Z.value instanceof l)
                    continue;
                  for (var je = Z; je !== m.tail && (ve < kt || typeof je.value == "string"); je = je.next)
                    Pe++, ve += je.value.length;
                  Pe--, Ce = h.slice(ue, ve), se.index -= ue;
                } else if (se = c(lt, 0, Ce, Y), !se)
                  continue;
                var Ne = se.index, ke = se[0], Oe = Ce.slice(0, Ne), Ve = Ce.slice(Ne + ke.length), Re = ue + Ce.length;
                A && Re > A.reach && (A.reach = Re);
                var Ye = Z.prev;
                Oe && (Ye = p(m, Ye, Oe), ue += Oe.length), b(m, Ye, Pe);
                var Ot = new l(F, ne ? a.tokenize(ke, ne) : ke, re, ke);
                if (Z = p(m, Ye, Ot), Ve && p(m, Z, Ve), Pe > 1) {
                  var ct = {
                    cause: F + "," + P,
                    reach: Re
                  };
                  u(h, m, _, Z.prev, ue, ct), A && ct.reach > A.reach && (A.reach = ct.reach);
                }
              }
            }
          }
        }
    }
    function g() {
      var h = { value: null, prev: null, next: null }, m = { value: null, prev: h, next: null };
      h.next = m, this.head = h, this.tail = m, this.length = 0;
    }
    function p(h, m, _) {
      var v = m.next, w = { value: _, prev: m, next: v };
      return m.next = w, v.prev = w, h.length++, w;
    }
    function b(h, m, _) {
      for (var v = m.next, w = 0; w < _ && v !== h.tail; w++)
        v = v.next;
      m.next = v, v.prev = m, h.length -= w;
    }
    function y(h) {
      for (var m = [], _ = h.head.next; _ !== h.tail; )
        m.push(_.value), _ = _.next;
      return m;
    }
    if (!r.document)
      return r.addEventListener && (a.disableWorkerMessageHandler || r.addEventListener("message", function(h) {
        var m = JSON.parse(h.data), _ = m.language, v = m.code, w = m.immediateClose;
        r.postMessage(a.highlight(v, a.languages[_], _)), w && r.close();
      }, !1)), a;
    var x = a.util.currentScript();
    x && (a.filename = x.src, x.hasAttribute("data-manual") && (a.manual = !0));
    function E() {
      a.manual || a.highlightAll();
    }
    if (!a.manual) {
      var S = document.readyState;
      S === "loading" || S === "interactive" && x && x.defer ? document.addEventListener("DOMContentLoaded", E) : window.requestAnimationFrame ? window.requestAnimationFrame(E) : window.setTimeout(E, 16);
    }
    return a;
  }(e);
  n.exports && (n.exports = t), typeof Cr < "u" && (Cr.Prism = t), t.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(r) {
    r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(i, o) {
      var s = {};
      s["language-" + o] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: t.languages[o]
      }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var a = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: s
        }
      };
      a["language-" + o] = {
        pattern: /[\s\S]+/,
        inside: t.languages[o]
      };
      var l = {};
      l[i] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return i;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: a
      }, t.languages.insertBefore("markup", "cdata", l);
    }
  }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(r, i) {
      t.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [i, "language-" + i],
                inside: t.languages[i]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(r) {
    var i = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    r.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + i.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + i.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + i.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + i.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: i,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, r.languages.css.atrule.inside.rest = r.languages.css;
    var o = r.languages.markup;
    o && (o.tag.addInlined("style", "css"), o.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, t.languages.javascript = t.languages.extend("clike", {
    "class-name": [
      t.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: t.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: t.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), t.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: t.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), t.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var r = "Loading…", i = function(x, E) {
      return "✖ Error " + x + " while fetching file: " + E;
    }, o = "✖ Error: File does not exist or is empty", s = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, a = "data-src-status", l = "loading", c = "loaded", u = "failed", g = "pre[data-src]:not([" + a + '="' + c + '"]):not([' + a + '="' + l + '"])';
    function p(x, E, S) {
      var h = new XMLHttpRequest();
      h.open("GET", x, !0), h.onreadystatechange = function() {
        h.readyState == 4 && (h.status < 400 && h.responseText ? E(h.responseText) : h.status >= 400 ? S(i(h.status, h.statusText)) : S(o));
      }, h.send(null);
    }
    function b(x) {
      var E = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x || "");
      if (E) {
        var S = Number(E[1]), h = E[2], m = E[3];
        return h ? m ? [S, Number(m)] : [S, void 0] : [S, S];
      }
    }
    t.hooks.add("before-highlightall", function(x) {
      x.selector += ", " + g;
    }), t.hooks.add("before-sanity-check", function(x) {
      var E = (
        /** @type {HTMLPreElement} */
        x.element
      );
      if (E.matches(g)) {
        x.code = "", E.setAttribute(a, l);
        var S = E.appendChild(document.createElement("CODE"));
        S.textContent = r;
        var h = E.getAttribute("data-src"), m = x.language;
        if (m === "none") {
          var _ = (/\.(\w+)$/.exec(h) || [, "none"])[1];
          m = s[_] || _;
        }
        t.util.setLanguage(S, m), t.util.setLanguage(E, m);
        var v = t.plugins.autoloader;
        v && v.loadLanguages(m), p(
          h,
          function(w) {
            E.setAttribute(a, c);
            var A = b(E.getAttribute("data-range"));
            if (A) {
              var F = w.split(/\r\n?|\n/g), N = A[0], P = A[1] == null ? F.length : A[1];
              N < 0 && (N += F.length), N = Math.max(0, Math.min(N - 1, F.length)), P < 0 && (P += F.length), P = Math.max(0, Math.min(P, F.length)), w = F.slice(N, P).join(`
`), E.hasAttribute("data-start") || E.setAttribute("data-start", String(N + 1));
            }
            S.textContent = w, t.highlightElement(S);
          },
          function(w) {
            E.setAttribute(a, u), S.textContent = w;
          }
        );
      }
    }), t.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(E) {
        for (var S = (E || document).querySelectorAll(g), h = 0, m; m = S[h++]; )
          t.highlightElement(m);
      }
    };
    var y = !1;
    t.fileHighlight = function() {
      y || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), y = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(Ol);
Prism.languages.clike = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0
    }
  ],
  keyword: [
    {
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }
  ],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source + "(?:" + // constant
      (/NaN|Infinity/.source + "|" + // binary integer
      /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
      /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
      /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
      /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
      /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
    ),
    lookbehind: !0
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(
      // lookbehind
      // eslint-disable-next-line regexp/no-dupe-characters-character-class
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
      // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
      // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
      // with the only syntax, so we have to define 2 different regex patterns.
      /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
      /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
      /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [
    {
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  }
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
});
Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(
  /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
  "javascript"
));
Prism.languages.js = Prism.languages.javascript;
Prism.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: !0
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: !0
  },
  doctype: {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
        // see below
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: !0
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            {
              pattern: /^=/,
              alias: "attr-equals"
            },
            {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: !0
            }
          ]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [
    {
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    },
    /&#x?[\da-f]{1,8};/i
  ]
};
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity;
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup;
Prism.hooks.add("wrap", function(n) {
  n.type === "entity" && (n.attributes.title = n.content.replace(/&amp;/, "&"));
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function(e, t) {
    var r = {};
    r["language-" + t] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[t]
    }, r.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var i = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: r
      }
    };
    i["language-" + t] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[t]
    };
    var o = {};
    o[e] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return e;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: i
    }, Prism.languages.insertBefore("markup", "cdata", o);
  }
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function(n, e) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source + "(?:" + n + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i"
      ),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [e, "language-" + e],
              inside: Prism.languages[e]
            },
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              /"|'/
            ]
          }
        }
      }
    });
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
(function(n) {
  var e = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function t(u) {
    return u = u.replace(/<inner>/g, function() {
      return e;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + u + ")");
  }
  var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return r;
  }), o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  n.languages.markdown = n.languages.extend("markup", {}), n.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        punctuation: /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: n.languages.yaml
        }
      }
    },
    blockquote: {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    table: {
      pattern: RegExp("^" + i + o + "(?:" + i + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + i + o + ")(?:" + i + ")*$"),
          lookbehind: !0,
          inside: {
            "table-data": {
              pattern: RegExp(r),
              inside: n.languages.markdown
            },
            punctuation: /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + i + ")" + o + "$"),
          lookbehind: !0,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + i + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(r),
              alias: "important",
              inside: n.languages.markdown
            },
            punctuation: /\|/
          }
        }
      }
    },
    code: [
      {
        // Prefixed by 4 spaces or 1 tab and preceded by an empty line
        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
        lookbehind: !0,
        alias: "keyword"
      },
      {
        // ```optional language
        // code block
        // ```
        pattern: /^```[\s\S]*?^```$/m,
        greedy: !0,
        inside: {
          "code-block": {
            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
            lookbehind: !0
          },
          "code-language": {
            pattern: /^(```).+/,
            lookbehind: !0
          },
          punctuation: /```/
        }
      }
    ],
    title: [
      {
        // title 1
        // =======
        // title 2
        // -------
        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
        alias: "important",
        inside: {
          punctuation: /==+$|--+$/
        }
      },
      {
        // # title 1
        // ###### title 6
        pattern: /(^\s*)#.+/m,
        lookbehind: !0,
        alias: "important",
        inside: {
          punctuation: /^#+|#+$/
        }
      }
    ],
    hr: {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    list: {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    "url-reference": {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: !0
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    bold: {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /\*\*|__/
      }
    },
    italic: {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /[*_]/
      }
    },
    strike: {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /~~?/
      }
    },
    "code-snippet": {
      // `code`
      // ``code``
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: !0,
      greedy: !0,
      alias: ["code", "keyword"]
    },
    url: {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        operator: /^!/,
        content: {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        variable: {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: !0
        },
        url: {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: !0
        },
        string: {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: !0
        }
      }
    }
  }), ["url", "bold", "italic", "strike"].forEach(function(u) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(g) {
      u !== g && (n.languages.markdown[u].inside.content.inside[g] = n.languages.markdown[g]);
    });
  }), n.hooks.add("after-tokenize", function(u) {
    if (u.language !== "markdown" && u.language !== "md")
      return;
    function g(p) {
      if (!(!p || typeof p == "string"))
        for (var b = 0, y = p.length; b < y; b++) {
          var x = p[b];
          if (x.type !== "code") {
            g(x.content);
            continue;
          }
          var E = x.content[1], S = x.content[3];
          if (E && S && E.type === "code-language" && S.type === "code-block" && typeof E.content == "string") {
            var h = E.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
            h = (/[a-z][\w-]*/i.exec(h) || [""])[0].toLowerCase();
            var m = "language-" + h;
            S.alias ? typeof S.alias == "string" ? S.alias = [S.alias, m] : S.alias.push(m) : S.alias = [m];
          }
        }
    }
    g(u.tokens);
  }), n.hooks.add("wrap", function(u) {
    if (u.type === "code-block") {
      for (var g = "", p = 0, b = u.classes.length; p < b; p++) {
        var y = u.classes[p], x = /language-(.+)/.exec(y);
        if (x) {
          g = x[1];
          break;
        }
      }
      var E = n.languages[g];
      if (E)
        u.content = n.highlight(c(u.content), E, g);
      else if (g && g !== "none" && n.plugins.autoloader) {
        var S = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
        u.attributes.id = S, n.plugins.autoloader.loadLanguages(g, function() {
          var h = document.getElementById(S);
          h && (h.innerHTML = n.highlight(h.textContent, n.languages[g], g));
        });
      }
    }
  });
  var s = RegExp(n.languages.markup.tag.pattern.source, "gi"), a = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"'
  }, l = String.fromCodePoint || String.fromCharCode;
  function c(u) {
    var g = u.replace(s, "");
    return g = g.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(p, b) {
      if (b = b.toLowerCase(), b[0] === "#") {
        var y;
        return b[1] === "x" ? y = parseInt(b.slice(2), 16) : y = Number(b.slice(1)), l(y);
      } else {
        var x = a[b];
        return x || p;
      }
    }), g;
  }
  n.languages.md = n.languages.markdown;
})(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
(function(n) {
  var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  n.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + e.source + ")*?" + /(?:;|(?=\s*\{))/.source),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
        // See rest below
      }
    },
    url: {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp("\\burl\\((?:" + e.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + e.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + e.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: e,
      greedy: !0
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: !0
    },
    punctuation: /[(){};:,]/
  }, n.languages.css.atrule.inside.rest = n.languages.css;
  var t = n.languages.markup;
  t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.objectivec = Prism.languages.extend("c", {
  string: {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete Prism.languages.objectivec["class-name"];
Prism.languages.objc = Prism.languages.objectivec;
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: !0
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
(function(n) {
  var e = n.languages.powershell = {
    comment: [
      {
        pattern: /(^|[^`])<#[\s\S]*?#>/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^`])#.*/,
        lookbehind: !0
      }
    ],
    string: [
      {
        pattern: /"(?:`[\s\S]|[^`"])*"/,
        greedy: !0,
        inside: null
        // see below
      },
      {
        pattern: /'(?:[^']|'')*'/,
        greedy: !0
      }
    ],
    // Matches name spaces as well as casts, attribute decorators. Force starting with letter to avoid matching array indices
    // Supports two levels of nested brackets (e.g. `[OutputType([System.Collections.Generic.List[int]])]`)
    namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
    boolean: /\$(?:false|true)\b/i,
    variable: /\$\w+\b/,
    // Cmdlets and aliases. Aliases should come last, otherwise "write" gets preferred over "write-host" for example
    // Get-Command | ?{ $_.ModuleName -match "Microsoft.PowerShell.(Util|Core|Management)" }
    // Get-Alias | ?{ $_.ReferencedCommand.Module.Name -match "Microsoft.PowerShell.(Util|Core|Management)" }
    function: [
      /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
      /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
    ],
    // per http://technet.microsoft.com/en-us/library/hh847744.aspx
    keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
    operator: {
      pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
      lookbehind: !0
    },
    punctuation: /[|{}[\];(),.]/
  };
  e.string[0].inside = {
    function: {
      // Allow for one level of nesting
      pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
      lookbehind: !0,
      inside: e
    },
    boolean: e.boolean,
    variable: e.variable
  };
})(Prism);
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(n) {
  for (var e = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, t = 0; t < 2; t++)
    e = e.replace(/<self>/g, function() {
      return e;
    });
  e = e.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), n.languages.rust = {
    comment: [
      {
        pattern: RegExp(/(^|[^\\])/.source + e),
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
      greedy: !0
    },
    char: {
      pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
      greedy: !0
    },
    attribute: {
      pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
      greedy: !0,
      alias: "attr-name",
      inside: {
        string: null
        // see below
      }
    },
    // Closure params should not be confused with bitwise OR |
    "closure-params": {
      pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "closure-punctuation": {
          pattern: /^\||\|$/,
          alias: "punctuation"
        },
        rest: null
        // see below
      }
    },
    "lifetime-annotation": {
      pattern: /'\w+/,
      alias: "symbol"
    },
    "fragment-specifier": {
      pattern: /(\$\w+:)[a-z]+/,
      lookbehind: !0,
      alias: "punctuation"
    },
    variable: /\$\w+/,
    "function-definition": {
      pattern: /(\bfn\s+)\w+/,
      lookbehind: !0,
      alias: "function"
    },
    "type-definition": {
      pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
      lookbehind: !0,
      alias: "class-name"
    },
    "module-declaration": [
      {
        pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
        lookbehind: !0,
        alias: "namespace"
      },
      {
        pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
        lookbehind: !0,
        alias: "namespace",
        inside: {
          punctuation: /::/
        }
      }
    ],
    keyword: [
      // https://github.com/rust-lang/reference/blob/master/src/keywords.md
      /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
      // primitives and str
      // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
      /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
    ],
    // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
    // and Rust's naming conventions recommend snake_case anyway.
    // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
    function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
    macro: {
      pattern: /\b\w+!/,
      alias: "property"
    },
    constant: /\b[A-Z_][A-Z_\d]+\b/,
    "class-name": /\b[A-Z]\w*\b/,
    namespace: {
      pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
      inside: {
        punctuation: /::/
      }
    },
    // Hex, oct, bin, dec numbers with visual separators and type suffix
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
    boolean: /\b(?:false|true)\b/,
    punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
    operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
  }, n.languages.rust["closure-params"].inside.rest = n.languages.rust, n.languages.rust.attribute.inside.string = n.languages.rust.string;
})(Prism);
Prism.languages.swift = {
  comment: {
    // Nested comments are supported up to 2 levels
    pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
    lookbehind: !0,
    greedy: !0
  },
  "string-literal": [
    // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
    {
      pattern: RegExp(
        /(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\\($/,
          alias: "punctuation"
        },
        punctuation: /\\(?=[\r\n])/,
        string: /[\s\S]+/
      }
    },
    {
      pattern: RegExp(
        /(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\#+\($/,
          alias: "punctuation"
        },
        string: /[\s\S]+/
      }
    }
  ],
  directive: {
    // directives with conditions
    pattern: RegExp(
      /#/.source + "(?:" + (/(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+") + "|" + /(?:else|endif)\b/.source + ")"
    ),
    alias: "property",
    inside: {
      "directive-name": /^#\w+/,
      boolean: /\b(?:false|true)\b/,
      number: /\b\d+(?:\.\d+)*\b/,
      operator: /!|&&|\|\||[<>]=?/,
      punctuation: /[(),]/
    }
  },
  literal: {
    pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: "constant"
  },
  "other-directive": {
    pattern: /#\w+\b/,
    alias: "property"
  },
  attribute: {
    pattern: /@\w+/,
    alias: "atrule"
  },
  "function-definition": {
    pattern: /(\bfunc\s+)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  label: {
    // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
    pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: !0,
    alias: "important"
  },
  keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  boolean: /\b(?:false|true)\b/,
  nil: {
    pattern: /\bnil\b/,
    alias: "constant"
  },
  "short-argument": /\$\d+\b/,
  omit: {
    pattern: /\b_\b/,
    alias: "keyword"
  },
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
  "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
  // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
  // This regex only supports ASCII operators.
  operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
  punctuation: /[{}[\]();,.:\\]/
};
Prism.languages.swift["string-literal"].forEach(function(n) {
  n.inside.interpolation.inside = Prism.languages.swift;
});
(function(n) {
  n.languages.typescript = n.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null
      // see below
    },
    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }), n.languages.typescript.keyword.push(
    /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
    // keywords that have to be followed by an identifier
    /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
    // This is for `import type *, {}`
    /\btype\b(?=\s*(?:[\{*]|$))/
  ), delete n.languages.typescript.parameter, delete n.languages.typescript["literal-property"];
  var e = n.languages.extend("typescript", {});
  delete e["class-name"], n.languages.typescript["class-name"].inside = e, n.languages.insertBefore("typescript", "function", {
    decorator: {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        at: {
          pattern: /^@/,
          alias: "operator"
        },
        function: /^[\s\S]+/
      }
    },
    "generic-function": {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: !0,
      inside: {
        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        generic: {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: "class-name",
          inside: e
        }
      }
    }
  }), n.languages.ts = n.languages.typescript;
})(Prism);
(function(n) {
  var e = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, t = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, r = {
    pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
    lookbehind: !0,
    inside: {
      namespace: {
        pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
        inside: {
          punctuation: /\./
        }
      },
      punctuation: /\./
    }
  };
  n.languages.java = n.languages.extend("clike", {
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
      lookbehind: !0,
      greedy: !0
    },
    "class-name": [
      r,
      {
        // variables, parameters, and constructor references
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
        lookbehind: !0,
        inside: r.inside
      },
      {
        // class names based on keyword
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + t + /[A-Z]\w*\b/.source),
        lookbehind: !0,
        inside: r.inside
      }
    ],
    keyword: e,
    function: [
      n.languages.clike.function,
      {
        pattern: /(::\s*)[a-z_]\w*/,
        lookbehind: !0
      }
    ],
    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0
    },
    constant: /\b[A-Z][A-Z_\d]+\b/
  }), n.languages.insertBefore("java", "string", {
    "triple-quoted-string": {
      // http://openjdk.java.net/jeps/355#Description
      pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
      greedy: !0,
      alias: "string"
    },
    char: {
      pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
      greedy: !0
    }
  }), n.languages.insertBefore("java", "class-name", {
    annotation: {
      pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
      lookbehind: !0,
      alias: "punctuation"
    },
    generics: {
      pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
      inside: {
        "class-name": r,
        keyword: e,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    },
    import: [
      {
        pattern: RegExp(/(\bimport\s+)/.source + t + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
        lookbehind: !0,
        inside: {
          namespace: r.inside.namespace,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      },
      {
        pattern: RegExp(/(\bimport\s+static\s+)/.source + t + /(?:\w+|\*)(?=\s*;)/.source),
        lookbehind: !0,
        alias: "static",
        inside: {
          namespace: r.inside.namespace,
          static: /\b\w+$/,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      }
    ],
    namespace: {
      pattern: RegExp(
        /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
          return e.source;
        })
      ),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }
  });
})(Prism);
(function(n) {
  var e = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return e.source;
  });
  n.languages.cpp = n.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return e.source;
        })),
        lookbehind: !0
      },
      // This is intended to capture the class name of method implementations like:
      //   void foo::bar() const {}
      // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
      // it starts with an uppercase letter. This approximation should give decent results.
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      // This will capture the class name before destructors like:
      //   Foo::~Foo() {}
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      // This also intends to capture the class name of method implementations but here the class has template
      // parameters, so it can't be a namespace (until C++ adds generic namespaces).
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],
    keyword: e,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0
    },
    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/
  }), n.languages.insertBefore("cpp", "string", {
    module: {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(
        /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
        /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
        /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
          return t;
        }) + ")"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        string: /^[<"][\s\S]+/,
        operator: /:/,
        punctuation: /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: !0
    }
  }), n.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        function: /^\w+/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: n.languages.cpp
        }
      }
    }
  }), n.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  }), n.languages.insertBefore("cpp", "class-name", {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: n.languages.extend("cpp", {})
    }
  }), n.languages.insertBefore("inside", "double-colon", {
    // All untokenized words that are not namespaces should be class names
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, n.languages.cpp["base-clause"]);
})(Prism);
const Rl = globalThis.Prism || window.Prism, Xr = (n) => {
  try {
    return !!n && Rl.languages.hasOwnProperty(n);
  } catch {
    return !1;
  }
};
function bo(n, e) {
  for (const t of n.childNodes) {
    if (Q(t) && t.tagName === e) return !0;
    bo(t, e);
  }
  return !1;
}
const bt = "data-language", Pt = "data-highlight-language";
let yo = class wo extends ye {
  static getType() {
    return "code";
  }
  static clone(e) {
    return new wo(e.__language, e.__key);
  }
  constructor(e, t) {
    super(t), this.__language = e || void 0, this.__isSyntaxHighlightSupported = Xr(e);
  }
  createDOM(e) {
    const t = document.createElement("code");
    ee(t, e.theme.code), t.setAttribute("spellcheck", "false");
    const r = this.getLanguage();
    return r && (t.setAttribute(bt, r), this.getIsSyntaxHighlightSupported() && t.setAttribute(Pt, r)), t;
  }
  updateDOM(e, t, r) {
    const i = this.__language, o = e.__language;
    return i ? i !== o && (t.setAttribute(bt, i), this.__isSyntaxHighlightSupported && t.setAttribute(Pt, i)) : o && (t.removeAttribute(bt), e.__isSyntaxHighlightSupported && t.removeAttribute(Pt)), !1;
  }
  exportDOM(e) {
    const t = document.createElement("pre");
    ee(t, e._config.theme.code), t.setAttribute("spellcheck", "false");
    const r = this.getLanguage();
    return r && (t.setAttribute(bt, r), this.getIsSyntaxHighlightSupported() && t.setAttribute(Pt, r)), { element: t };
  }
  static importDOM() {
    return { code: (e) => e.textContent != null && (/\r?\n/.test(e.textContent) || bo(e, "BR")) ? { conversion: Qr, priority: 1 } : null, div: () => ({ conversion: Fl, priority: 1 }), pre: () => ({ conversion: Qr, priority: 0 }), table: (e) => mn(e) ? { conversion: Il, priority: 3 } : null, td: (e) => {
      const t = e, r = t.closest("table");
      return t.classList.contains("js-file-line") || r && mn(r) ? { conversion: ei, priority: 3 } : null;
    }, tr: (e) => {
      const t = e.closest("table");
      return t && mn(t) ? { conversion: ei, priority: 3 } : null;
    } };
  }
  static importJSON(e) {
    return St().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setLanguage(e.language);
  }
  exportJSON() {
    return { ...super.exportJSON(), language: this.getLanguage() };
  }
  insertNewAfter(e, t = !0) {
    const r = this.getChildren(), i = r.length;
    if (i >= 2 && r[i - 1].getTextContent() === `
` && r[i - 2].getTextContent() === `
` && e.isCollapsed() && e.anchor.key === this.__key && e.anchor.offset === i) {
      r[i - 1].remove(), r[i - 2].remove();
      const l = q();
      return this.insertAfter(l, t), l;
    }
    const { anchor: o, focus: s } = e, a = (o.isBefore(s) ? o : s).getNode();
    if (V(a)) {
      let l = Ml(a);
      const c = [];
      for (; ; ) if (Ui(l)) c.push(jn()), l = l.getNextSibling();
      else {
        if (!So(l)) break;
        {
          let E = 0;
          const S = l.getTextContent(), h = l.getTextContentSize();
          for (; E < h && S[E] === " "; ) E++;
          if (E !== 0 && c.push(Co(" ".repeat(E))), E !== h) break;
          l = l.getNextSibling();
        }
      }
      const u = a.splitText(o.offset)[0], g = o.offset === 0 ? 0 : 1, p = u.getIndexWithinParent() + g, b = a.getParentOrThrow(), y = [zt(), ...c];
      b.splice(p, 0, y);
      const x = c[c.length - 1];
      x ? x.select() : o.offset === 0 ? u.selectPrevious() : u.getNextSibling().selectNext(0, 0);
    }
    if (vo(a)) {
      const { offset: l } = e.anchor;
      a.splice(l, 0, [zt()]), a.select(l + 1, l + 1);
    }
    return null;
  }
  canIndent() {
    return !1;
  }
  collapseAtStart() {
    const e = q();
    return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
  }
  setLanguage(e) {
    const t = this.getWritable();
    return t.__language = e || void 0, t.__isSyntaxHighlightSupported = Xr(e), t;
  }
  getLanguage() {
    return this.getLatest().__language;
  }
  getIsSyntaxHighlightSupported() {
    return this.getLatest().__isSyntaxHighlightSupported;
  }
};
function St(n) {
  return fe(new yo(n));
}
function vo(n) {
  return n instanceof yo;
}
function Qr(n) {
  return { node: St(n.getAttribute(bt)) };
}
function Fl(n) {
  const e = n, t = ti(e);
  return t || function(r) {
    let i = r.parentElement;
    for (; i !== null; ) {
      if (ti(i)) return !0;
      i = i.parentElement;
    }
    return !1;
  }(e) ? { node: t ? St() : null } : { node: null };
}
function Il() {
  return { node: St() };
}
function ei() {
  return { node: null };
}
function ti(n) {
  return n.style.fontFamily.match("monospace") !== null;
}
function mn(n) {
  return n.classList.contains("js-file-line-container");
}
const Dl = { cpp: "cpp", java: "java", javascript: "js", md: "markdown", plaintext: "plain", python: "py", text: "plain", ts: "typescript" };
let xo = class Eo extends Bi {
  constructor(e = "", t, r) {
    super(e, r), this.__highlightType = t;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(e) {
    return new Eo(e.__text, e.__highlightType || void 0, e.__key);
  }
  getHighlightType() {
    return this.getLatest().__highlightType;
  }
  setHighlightType(e) {
    const t = this.getWritable();
    return t.__highlightType = e || void 0, t;
  }
  canHaveFormat() {
    return !1;
  }
  createDOM(e) {
    const t = super.createDOM(e), r = _n(e.theme, this.__highlightType);
    return ee(t, r), t;
  }
  updateDOM(e, t, r) {
    const i = super.updateDOM(e, t, r), o = _n(r.theme, e.__highlightType), s = _n(r.theme, this.__highlightType);
    return o !== s && (o && He(t, o), s && ee(t, s)), i;
  }
  static importJSON(e) {
    return Co().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setHighlightType(e.highlightType);
  }
  exportJSON() {
    return { ...super.exportJSON(), highlightType: this.getHighlightType() };
  }
  setFormat(e) {
    return this;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return St();
  }
};
function _n(n, e) {
  return e && n && n.codeHighlight && n.codeHighlight[e];
}
function Co(n = "", e) {
  return fe(new xo(n, e));
}
function So(n) {
  return n instanceof xo;
}
function Ll(n, e) {
  let t = n;
  for (let r = Js(n, e); r && (So(r.origin) || Ui(r.origin)); r = Sa(r)) t = r.origin;
  return t;
}
function Ml(n) {
  return Ll(n, "previous");
}
function xe(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e) r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function $l(n) {
  let e = 1, t = n.getParent();
  for (; t != null; ) {
    if (z(t)) {
      const r = t.getParent();
      if (I(r)) {
        e++, t = r.getParent();
        continue;
      }
      xe(40);
    }
    return e;
  }
  return e;
}
function Rn(n) {
  let e = n.getParent();
  I(e) || xe(40);
  let t = e;
  for (; t !== null; ) t = t.getParent(), I(t) && (e = t);
  return e;
}
function Ao(n) {
  let e = [];
  const t = n.getChildren().filter(z);
  for (let r = 0; r < t.length; r++) {
    const i = t[r], o = i.getFirstChild();
    I(o) ? e = e.concat(Ao(o)) : e.push(i);
  }
  return e;
}
function Ee(n) {
  return z(n) && I(n.getFirstChild());
}
function ni(n) {
  return de().append(n);
}
function To(n, e) {
  return z(n) && (e.length === 0 || e.length === 1 && n.is(e[0]) && n.getChildrenSize() === 0);
}
function Fn(n) {
  const e = O();
  if (e !== null) {
    let t = e.getNodes();
    if (k(e)) {
      const i = e.getStartEndPoints();
      i === null && xe(143);
      const [o] = i, s = o.getNode(), a = s.getParent();
      if (Le(s)) {
        const l = s.getFirstChild();
        if (l) t = l.selectStart().getNodes();
        else {
          const c = q();
          s.append(c), t = c.select().getNodes();
        }
      } else if (To(s, t)) {
        const l = ce(n);
        if (Le(a)) {
          s.replace(l);
          const c = de();
          D(s) && (c.setFormat(s.getFormatType()), c.setIndent(s.getIndent())), l.append(c);
        } else if (z(s)) {
          const c = s.getParentOrThrow();
          We(l, c.getChildren()), c.replace(l);
        }
        return;
      }
    }
    const r = /* @__PURE__ */ new Set();
    for (let i = 0; i < t.length; i++) {
      const o = t[i];
      if (!D(o) || !o.isEmpty() || z(o) || r.has(o.getKey())) {
        if (Hi(o)) {
          let s = o.getParent();
          for (; s != null; ) {
            const a = s.getKey();
            if (I(s)) {
              if (!r.has(a)) {
                const l = ce(n);
                We(l, s.getChildren()), s.replace(l), r.add(a);
              }
              break;
            }
            {
              const l = s.getParent();
              if (Le(l) && !r.has(a)) {
                r.add(a), ri(s, n);
                break;
              }
              s = l;
            }
          }
        }
      } else ri(o, n);
    }
  }
}
function We(n, e) {
  n.splice(n.getChildrenSize(), 0, e);
}
function ri(n, e) {
  if (I(n)) return n;
  const t = n.getPreviousSibling(), r = n.getNextSibling(), i = de();
  let o;
  if (We(i, n.getChildren()), I(t) && e === t.getListType()) t.append(i), I(r) && e === r.getListType() && (We(t, r.getChildren()), r.remove()), o = t;
  else if (I(r) && e === r.getListType()) r.getFirstChildOrThrow().insertBefore(i), o = r;
  else {
    const s = ce(e);
    s.append(i), n.replace(s), o = s;
  }
  return i.setFormat(n.getFormatType()), i.setIndent(n.getIndent()), n.remove(), o;
}
function Yn(n, e) {
  const t = n.getLastChild(), r = e.getFirstChild();
  t && r && Ee(t) && Ee(r) && (Yn(t.getFirstChild(), r.getFirstChild()), r.remove());
  const i = e.getChildren();
  i.length > 0 && n.append(...i), e.remove();
}
function Pl() {
  const n = O();
  if (k(n)) {
    const e = /* @__PURE__ */ new Set(), t = n.getNodes(), r = n.anchor.getNode();
    if (To(r, t)) e.add(Rn(r));
    else for (let i = 0; i < t.length; i++) {
      const o = t[i];
      if (Hi(o)) {
        const s = no(o, $e);
        s != null && e.add(Rn(s));
      }
    }
    for (const i of e) {
      let o = i;
      const s = Ao(i);
      for (const a of s) {
        const l = q().setTextStyle(n.style).setTextFormat(n.format);
        We(l, a.getChildren()), o.insertAfter(l), o = l, a.__key === n.anchor.key && vr(n.anchor, xr(xn(l, "next"))), a.__key === n.focus.key && vr(n.focus, xr(xn(l, "next"))), a.remove();
      }
      i.remove();
    }
  }
}
function jl(n) {
  const e = /* @__PURE__ */ new Set();
  if (Ee(n) || e.has(n.getKey())) return;
  const t = n.getParent(), r = n.getNextSibling(), i = n.getPreviousSibling();
  if (Ee(r) && Ee(i)) {
    const o = i.getFirstChild();
    if (I(o)) {
      o.append(n);
      const s = r.getFirstChild();
      I(s) && (We(o, s.getChildren()), r.remove(), e.add(r.getKey()));
    }
  } else if (Ee(r)) {
    const o = r.getFirstChild();
    if (I(o)) {
      const s = o.getFirstChild();
      s !== null && s.insertBefore(n);
    }
  } else if (Ee(i)) {
    const o = i.getFirstChild();
    I(o) && o.append(n);
  } else if (I(t)) {
    const o = de().setTextFormat(t.getTextFormat()).setTextStyle(t.getTextStyle()), s = ce(t.getListType()).setTextFormat(t.getTextFormat()).setTextStyle(t.getTextStyle());
    o.append(s), s.append(n), i ? i.insertAfter(o) : r ? r.insertBefore(o) : t.append(o);
  }
}
function zl(n) {
  if (Ee(n)) return;
  const e = n.getParent(), t = e ? e.getParent() : void 0;
  if (I(t ? t.getParent() : void 0) && z(t) && I(e)) {
    const r = e ? e.getFirstChild() : void 0, i = e ? e.getLastChild() : void 0;
    if (n.is(r)) t.insertBefore(n), e.isEmpty() && t.remove();
    else if (n.is(i)) t.insertAfter(n), e.isEmpty() && t.remove();
    else {
      const o = e.getListType(), s = de(), a = ce(o);
      s.append(a), n.getPreviousSiblings().forEach((u) => a.append(u));
      const l = de(), c = ce(o);
      l.append(c), We(c, n.getNextSiblings()), t.insertBefore(s), t.insertAfter(l), t.replace(n);
    }
  }
}
function Ul() {
  const n = O();
  if (!k(n) || !n.isCollapsed()) return !1;
  const e = n.anchor.getNode();
  if (!z(e) || e.getChildrenSize() !== 0) return !1;
  const t = Rn(e), r = e.getParent();
  I(r) || xe(40);
  const i = r.getParent();
  let o;
  if (Le(i)) o = q(), t.insertAfter(o);
  else {
    if (!z(i)) return !1;
    o = de(), i.insertAfter(o);
  }
  o.setTextStyle(n.style).setTextFormat(n.format).select();
  const s = e.getNextSiblings();
  if (s.length > 0) {
    const a = ce(r.getListType());
    if (z(o)) {
      const l = de();
      l.append(a), o.insertAfter(l);
    } else o.insertAfter(a);
    a.append(...s);
  }
  return function(a) {
    let l = a;
    for (; l.getNextSibling() == null && l.getPreviousSibling() == null; ) {
      const c = l.getParent();
      if (c == null || !z(c) && !I(c)) break;
      l = c;
    }
    l.remove();
  }(e), !0;
}
function Ht(...n) {
  const e = [];
  for (const t of n) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) e.push(r);
  return e;
}
class $e extends ye {
  static getType() {
    return "listitem";
  }
  static clone(e) {
    return new $e(e.__value, e.__checked, e.__key);
  }
  constructor(e, t, r) {
    super(r), this.__value = e === void 0 ? 1 : e, this.__checked = t;
  }
  createDOM(e) {
    const t = document.createElement("li"), r = this.getParent();
    I(r) && r.getListType() === "check" && oi(t, this, null), t.value = this.__value, ii(t, e.theme, this);
    const i = this.__style || this.__textStyle;
    return i && (t.style.cssText = i), t;
  }
  updateDOM(e, t, r) {
    const i = this.getParent();
    I(i) && i.getListType() === "check" && oi(t, this, e), t.value = this.__value, ii(t, r.theme, this);
    const o = e.__style || e.__textStyle, s = this.__style || this.__textStyle;
    return o !== s && (t.style.cssText = s, s === "" && t.removeAttribute("style")), !1;
  }
  static transform() {
    return (e) => {
      if (z(e) || xe(144), e.__checked == null) return;
      const t = e.getParent();
      I(t) && t.getListType() !== "check" && e.getChecked() != null && e.setChecked(void 0);
    };
  }
  static importDOM() {
    return { li: () => ({ conversion: Bl, priority: 0 }) };
  }
  static importJSON(e) {
    return de().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setValue(e.value).setChecked(e.checked);
  }
  exportDOM(e) {
    const t = this.createDOM(e._config);
    t.style.textAlign = this.getFormatType();
    const r = this.getDirection();
    return r && (t.dir = r), { element: t };
  }
  exportJSON() {
    return { ...super.exportJSON(), checked: this.getChecked(), value: this.getValue() };
  }
  append(...e) {
    for (let t = 0; t < e.length; t++) {
      const r = e[t];
      if (D(r) && this.canMergeWith(r)) {
        const i = r.getChildren();
        this.append(...i), r.remove();
      } else super.append(r);
    }
    return this;
  }
  replace(e, t) {
    if (z(e)) return super.replace(e);
    this.setIndent(0);
    const r = this.getParentOrThrow();
    if (!I(r)) return e;
    if (r.__first === this.getKey()) r.insertBefore(e);
    else if (r.__last === this.getKey()) r.insertAfter(e);
    else {
      const i = ce(r.getListType());
      let o = this.getNextSibling();
      for (; o; ) {
        const s = o;
        o = o.getNextSibling(), i.append(s);
      }
      r.insertAfter(e), e.insertAfter(i);
    }
    return t && (D(e) || xe(139), this.getChildren().forEach((i) => {
      e.append(i);
    })), this.remove(), r.getChildrenSize() === 0 && r.remove(), e;
  }
  insertAfter(e, t = !0) {
    const r = this.getParentOrThrow();
    if (I(r) || xe(39), z(e)) return super.insertAfter(e, t);
    const i = this.getNextSiblings();
    if (r.insertAfter(e, t), i.length !== 0) {
      const o = ce(r.getListType());
      i.forEach((s) => o.append(s)), e.insertAfter(o, t);
    }
    return e;
  }
  remove(e) {
    const t = this.getPreviousSibling(), r = this.getNextSibling();
    super.remove(e), t && r && Ee(t) && Ee(r) && (Yn(t.getFirstChild(), r.getFirstChild()), r.remove());
  }
  insertNewAfter(e, t = !0) {
    const r = de().updateFromJSON(this.exportJSON()).setChecked(!this.getChecked() && void 0);
    return this.insertAfter(r, t), r;
  }
  collapseAtStart(e) {
    const t = q();
    this.getChildren().forEach((s) => t.append(s));
    const r = this.getParentOrThrow(), i = r.getParentOrThrow(), o = z(i);
    if (r.getChildrenSize() === 1) if (o) r.remove(), i.select();
    else {
      r.insertBefore(t), r.remove();
      const s = e.anchor, a = e.focus, l = t.getKey();
      s.type === "element" && s.getNode().is(this) && s.set(l, s.offset, "element"), a.type === "element" && a.getNode().is(this) && a.set(l, a.offset, "element");
    }
    else r.insertBefore(t), this.remove();
    return !0;
  }
  getValue() {
    return this.getLatest().__value;
  }
  setValue(e) {
    const t = this.getWritable();
    return t.__value = e, t;
  }
  getChecked() {
    const e = this.getLatest();
    let t;
    const r = this.getParent();
    return I(r) && (t = r.getListType()), t === "check" ? !!e.__checked : void 0;
  }
  setChecked(e) {
    const t = this.getWritable();
    return t.__checked = e, t;
  }
  toggleChecked() {
    const e = this.getWritable();
    return e.setChecked(!e.__checked);
  }
  getIndent() {
    const e = this.getParent();
    if (e === null || !this.isAttached()) return this.getLatest().__indent;
    let t = e.getParentOrThrow(), r = 0;
    for (; z(t); ) t = t.getParentOrThrow().getParentOrThrow(), r++;
    return r;
  }
  setIndent(e) {
    typeof e != "number" && xe(117), (e = Math.floor(e)) >= 0 || xe(199);
    let t = this.getIndent();
    for (; t !== e; ) t < e ? (jl(this), t++) : (zl(this), t--);
    return this;
  }
  canInsertAfter(e) {
    return z(e);
  }
  canReplaceWith(e) {
    return z(e);
  }
  canMergeWith(e) {
    return z(e) || $n(e);
  }
  extractWithChild(e, t) {
    if (!k(t)) return !1;
    const r = t.anchor.getNode(), i = t.focus.getNode();
    return this.isParentOf(r) && this.isParentOf(i) && this.getTextContent().length === t.getTextContent().length;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return ce("bullet");
  }
  canMergeWhenEmpty() {
    return !0;
  }
}
function ii(n, e, t) {
  const r = [], i = [], o = e.list, s = o ? o.listitem : void 0;
  let a;
  if (o && o.nested && (a = o.nested.listitem), s !== void 0 && r.push(...Ht(s)), o) {
    const l = t.getParent(), c = I(l) && l.getListType() === "check", u = t.getChecked();
    c && !u || i.push(o.listitemUnchecked), c && u || i.push(o.listitemChecked), c && r.push(u ? o.listitemChecked : o.listitemUnchecked);
  }
  if (a !== void 0) {
    const l = Ht(a);
    t.getChildren().some((c) => I(c)) ? r.push(...l) : i.push(...l);
  }
  i.length > 0 && He(n, ...i), r.length > 0 && ee(n, ...r);
}
function oi(n, e, t, r) {
  I(e.getFirstChild()) ? (n.removeAttribute("role"), n.removeAttribute("tabIndex"), n.removeAttribute("aria-checked")) : (n.setAttribute("role", "checkbox"), n.setAttribute("tabIndex", "-1"), t && e.__checked === t.__checked || n.setAttribute("aria-checked", e.getChecked() ? "true" : "false"));
}
function Bl(n) {
  if (n.classList.contains("task-list-item")) {
    for (const t of n.children) if (t.tagName === "INPUT") return Wl(t);
  }
  const e = n.getAttribute("aria-checked");
  return { node: de(e === "true" || e !== "false" && void 0) };
}
function Wl(n) {
  return n.getAttribute("type") !== "checkbox" ? { node: null } : { node: de(n.hasAttribute("checked")) };
}
function de(n) {
  return fe(new $e(void 0, n));
}
function z(n) {
  return n instanceof $e;
}
class Ke extends ye {
  static getType() {
    return "list";
  }
  static clone(e) {
    const t = e.__listType || li[e.__tag];
    return new Ke(t, e.__start, e.__key);
  }
  constructor(e = "number", t = 1, r) {
    super(r);
    const i = li[e] || e;
    this.__listType = i, this.__tag = i === "number" ? "ol" : "ul", this.__start = t;
  }
  getTag() {
    return this.__tag;
  }
  setListType(e) {
    const t = this.getWritable();
    return t.__listType = e, t.__tag = e === "number" ? "ol" : "ul", t;
  }
  getListType() {
    return this.__listType;
  }
  getStart() {
    return this.__start;
  }
  setStart(e) {
    const t = this.getWritable();
    return t.__start = e, t;
  }
  createDOM(e, t) {
    const r = this.__tag, i = document.createElement(r);
    return this.__start !== 1 && i.setAttribute("start", String(this.__start)), i.__lexicalListType = this.__listType, si(i, e.theme, this), i;
  }
  updateDOM(e, t, r) {
    return e.__tag !== this.__tag || (si(t, r.theme, this), !1);
  }
  static transform() {
    return (e) => {
      I(e) || xe(163), function(t) {
        const r = t.getNextSibling();
        I(r) && t.getListType() === r.getListType() && Yn(t, r);
      }(e), function(t) {
        const r = t.getListType() !== "check";
        let i = t.getStart();
        for (const o of t.getChildren()) z(o) && (o.getValue() !== i && o.setValue(i), r && o.getLatest().__checked != null && o.setChecked(void 0), I(o.getFirstChild()) || i++);
      }(e);
    };
  }
  static importDOM() {
    return { ol: () => ({ conversion: ai, priority: 0 }), ul: () => ({ conversion: ai, priority: 0 }) };
  }
  static importJSON(e) {
    return ce().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setListType(e.listType).setStart(e.start);
  }
  exportDOM(e) {
    const t = this.createDOM(e._config, e);
    return Q(t) && (this.__start !== 1 && t.setAttribute("start", String(this.__start)), this.__listType === "check" && t.setAttribute("__lexicalListType", "check")), { element: t };
  }
  exportJSON() {
    return { ...super.exportJSON(), listType: this.getListType(), start: this.getStart(), tag: this.getTag() };
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
  append(...e) {
    for (let t = 0; t < e.length; t++) {
      const r = e[t];
      if (z(r)) super.append(r);
      else {
        const i = de();
        if (I(r)) i.append(r);
        else if (D(r)) if (r.isInline()) i.append(r);
        else {
          const o = Wi(r.getTextContent());
          i.append(o);
        }
        else i.append(r);
        super.append(i);
      }
    }
    return this;
  }
  extractWithChild(e) {
    return z(e);
  }
}
function si(n, e, t) {
  const r = [], i = [], o = e.list;
  if (o !== void 0) {
    const s = o[`${t.__tag}Depth`] || [], a = $l(t) - 1, l = a % s.length, c = s[l], u = o[t.__tag];
    let g;
    const p = o.nested, b = o.checklist;
    if (p !== void 0 && p.list && (g = p.list), u !== void 0 && r.push(u), b !== void 0 && t.__listType === "check" && r.push(b), c !== void 0) {
      r.push(...Ht(c));
      for (let y = 0; y < s.length; y++) y !== l && i.push(t.__tag + y);
    }
    if (g !== void 0) {
      const y = Ht(g);
      a > 1 ? r.push(...y) : i.push(...y);
    }
  }
  i.length > 0 && He(n, ...i), r.length > 0 && ee(n, ...r);
}
function Hl(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    if (z(r)) {
      e.push(r);
      const i = r.getChildren();
      i.length > 1 && i.forEach((o) => {
        I(o) && e.push(ni(o));
      });
    } else e.push(ni(r));
  }
  return e;
}
function ai(n) {
  const e = n.nodeName.toLowerCase();
  let t = null;
  return e === "ol" ? t = ce("number", n.start) : e === "ul" && (t = function(r) {
    if (r.getAttribute("__lexicallisttype") === "check" || r.classList.contains("contains-task-list")) return !0;
    for (const i of r.childNodes) if (Q(i) && i.hasAttribute("aria-checked")) return !0;
    return !1;
  }(n) ? ce("check") : ce("bullet")), { after: Hl, node: t };
}
const li = { ol: "number", ul: "bullet" };
function ce(n = "number", e = 1) {
  return fe(new Ke(n, e));
}
function I(n) {
  return n instanceof Ke;
}
const No = Te("INSERT_UNORDERED_LIST_COMMAND"), ko = Te("INSERT_ORDERED_LIST_COMMAND"), Oo = Te("INSERT_CHECK_LIST_COMMAND"), Kl = Te("REMOVE_LIST_COMMAND");
function Jl(n) {
  return we(n.registerCommand(ko, () => (Fn("number"), !0), oe), n.registerCommand(No, () => (Fn("bullet"), !0), oe), n.registerCommand(Kl, () => (Pl(), !0), oe), n.registerCommand(Cn, () => Ul(), oe), n.registerNodeTransform($e, (e) => {
    const t = e.getFirstChild();
    if (t) {
      if (V(t)) {
        const r = t.getStyle(), i = t.getFormat();
        e.getTextStyle() !== r && e.setTextStyle(r), e.getTextFormat() !== i && e.setTextFormat(i);
      }
    } else {
      const r = O();
      k(r) && (r.style !== e.getTextStyle() || r.format !== e.getTextFormat()) && r.isCollapsed() && e.is(r.anchor.getNode()) && e.setTextStyle(r.style).setTextFormat(r.format);
    }
  }), n.registerNodeTransform(Bi, (e) => {
    const t = e.getParent();
    if (z(t) && e.is(t.getFirstChild())) {
      const r = e.getStyle(), i = e.getFormat();
      r === t.getTextStyle() && i === t.getTextFormat() || t.setTextStyle(r).setTextFormat(i);
    }
  }));
}
function Vl(n, e) {
  n.update(() => Fn(e));
}
const Gn = /^(\d+(?:\.\d+)?)px$/, nt = { BOTH: 3, NO_STATUS: 0, ROW: 1 };
class At extends ye {
  static getType() {
    return "tablecell";
  }
  static clone(e) {
    return new At(e.__headerState, e.__colSpan, e.__width, e.__key);
  }
  afterCloneFrom(e) {
    super.afterCloneFrom(e), this.__rowSpan = e.__rowSpan, this.__backgroundColor = e.__backgroundColor, this.__verticalAlign = e.__verticalAlign;
  }
  static importDOM() {
    return { td: (e) => ({ conversion: ci, priority: 0 }), th: (e) => ({ conversion: ci, priority: 0 }) };
  }
  static importJSON(e) {
    return Ro().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setHeaderStyles(e.headerState).setColSpan(e.colSpan || 1).setRowSpan(e.rowSpan || 1).setWidth(e.width || void 0).setBackgroundColor(e.backgroundColor || null).setVerticalAlign(e.verticalAlign || void 0);
  }
  constructor(e = nt.NO_STATUS, t = 1, r, i) {
    super(i), this.__colSpan = t, this.__rowSpan = 1, this.__headerState = e, this.__width = r, this.__backgroundColor = null, this.__verticalAlign = void 0;
  }
  createDOM(e) {
    const t = document.createElement(this.getTag());
    return this.__width && (t.style.width = `${this.__width}px`), this.__colSpan > 1 && (t.colSpan = this.__colSpan), this.__rowSpan > 1 && (t.rowSpan = this.__rowSpan), this.__backgroundColor !== null && (t.style.backgroundColor = this.__backgroundColor), In(this.__verticalAlign) && (t.style.verticalAlign = this.__verticalAlign), ee(t, e.theme.tableCell, this.hasHeader() && e.theme.tableCellHeader), t;
  }
  exportDOM(e) {
    const t = super.exportDOM(e);
    if (Q(t.element)) {
      const r = t.element;
      r.setAttribute("data-temporary-table-cell-lexical-key", this.getKey()), r.style.border = "1px solid black", this.__colSpan > 1 && (r.colSpan = this.__colSpan), this.__rowSpan > 1 && (r.rowSpan = this.__rowSpan), r.style.width = `${this.getWidth() || 75}px`, r.style.verticalAlign = this.getVerticalAlign() || "top", r.style.textAlign = "start", this.__backgroundColor === null && this.hasHeader() && (r.style.backgroundColor = "#f2f3f5");
    }
    return t;
  }
  exportJSON() {
    return { ...super.exportJSON(), ...In(this.__verticalAlign) && { verticalAlign: this.__verticalAlign }, backgroundColor: this.getBackgroundColor(), colSpan: this.__colSpan, headerState: this.__headerState, rowSpan: this.__rowSpan, width: this.getWidth() };
  }
  getColSpan() {
    return this.getLatest().__colSpan;
  }
  setColSpan(e) {
    const t = this.getWritable();
    return t.__colSpan = e, t;
  }
  getRowSpan() {
    return this.getLatest().__rowSpan;
  }
  setRowSpan(e) {
    const t = this.getWritable();
    return t.__rowSpan = e, t;
  }
  getTag() {
    return this.hasHeader() ? "th" : "td";
  }
  setHeaderStyles(e, t = nt.BOTH) {
    const r = this.getWritable();
    return r.__headerState = e & t | r.__headerState & ~t, r;
  }
  getHeaderStyles() {
    return this.getLatest().__headerState;
  }
  setWidth(e) {
    const t = this.getWritable();
    return t.__width = e, t;
  }
  getWidth() {
    return this.getLatest().__width;
  }
  getBackgroundColor() {
    return this.getLatest().__backgroundColor;
  }
  setBackgroundColor(e) {
    const t = this.getWritable();
    return t.__backgroundColor = e, t;
  }
  getVerticalAlign() {
    return this.getLatest().__verticalAlign;
  }
  setVerticalAlign(e) {
    const t = this.getWritable();
    return t.__verticalAlign = e || void 0, t;
  }
  toggleHeaderStyle(e) {
    const t = this.getWritable();
    return (t.__headerState & e) === e ? t.__headerState -= e : t.__headerState += e, t;
  }
  hasHeaderState(e) {
    return (this.getHeaderStyles() & e) === e;
  }
  hasHeader() {
    return this.getLatest().__headerState !== nt.NO_STATUS;
  }
  updateDOM(e) {
    return e.__headerState !== this.__headerState || e.__width !== this.__width || e.__colSpan !== this.__colSpan || e.__rowSpan !== this.__rowSpan || e.__backgroundColor !== this.__backgroundColor || e.__verticalAlign !== this.__verticalAlign;
  }
  isShadowRoot() {
    return !0;
  }
  collapseAtStart() {
    return !0;
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
}
function In(n) {
  return n === "middle" || n === "bottom";
}
function ci(n) {
  const e = n, t = n.nodeName.toLowerCase();
  let r;
  Gn.test(e.style.width) && (r = parseFloat(e.style.width));
  const i = Ro(t === "th" ? nt.ROW : nt.NO_STATUS, e.colSpan, r);
  i.__rowSpan = e.rowSpan;
  const o = e.style.backgroundColor;
  o !== "" && (i.__backgroundColor = o);
  const s = e.style.verticalAlign;
  In(s) && (i.__verticalAlign = s);
  const a = e.style, l = (a && a.textDecoration || "").split(" "), c = a.fontWeight === "700" || a.fontWeight === "bold", u = l.includes("line-through"), g = a.fontStyle === "italic", p = l.includes("underline");
  return { after: (b) => (b.length === 0 && b.push(q()), b), forChild: (b, y) => {
    if (le(y) && !D(b)) {
      const x = q();
      return qs(b) && b.getTextContent() === `
` ? null : (V(b) && (c && b.toggleFormat("bold"), u && b.toggleFormat("strikethrough"), g && b.toggleFormat("italic"), p && b.toggleFormat("underline")), x.append(b), x);
    }
    return b;
  }, node: i };
}
function Ro(n = nt.NO_STATUS, e = 1, t) {
  return fe(new At(n, e, t));
}
function le(n) {
  return n instanceof At;
}
Te("INSERT_TABLE_COMMAND");
function X(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e) r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
class Qt extends ye {
  static getType() {
    return "tablerow";
  }
  static clone(e) {
    return new Qt(e.__height, e.__key);
  }
  static importDOM() {
    return { tr: (e) => ({ conversion: Yl, priority: 0 }) };
  }
  static importJSON(e) {
    return Fo().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setHeight(e.height);
  }
  constructor(e, t) {
    super(t), this.__height = e;
  }
  exportJSON() {
    const e = this.getHeight();
    return { ...super.exportJSON(), ...e === void 0 ? void 0 : { height: e } };
  }
  createDOM(e) {
    const t = document.createElement("tr");
    return this.__height && (t.style.height = `${this.__height}px`), ee(t, e.theme.tableRow), t;
  }
  extractWithChild(e, t, r) {
    return r === "html";
  }
  isShadowRoot() {
    return !0;
  }
  setHeight(e) {
    const t = this.getWritable();
    return t.__height = e, t;
  }
  getHeight() {
    return this.getLatest().__height;
  }
  updateDOM(e) {
    return e.__height !== this.__height;
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
}
function Yl(n) {
  const e = n;
  let t;
  return Gn.test(e.style.height) && (t = parseFloat(e.style.height)), { after: (r) => oo(r, le), node: Fo(t) };
}
function Fo(n) {
  return fe(new Qt(n));
}
function Tt(n) {
  return n instanceof Qt;
}
const Io = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Gl = Io && "documentMode" in document ? document.documentMode : null;
Io && "InputEvent" in window && !Gl && new window.InputEvent("input");
function ql(n, e, t) {
  const [r, i, o] = Do(n, e, t);
  return i === null && X(207), o === null && X(208), [r, i, o];
}
function Do(n, e, t) {
  const r = [];
  let i = null, o = null;
  function s(l) {
    let c = r[l];
    return c === void 0 && (r[l] = c = []), c;
  }
  const a = n.getChildren();
  for (let l = 0; l < a.length; l++) {
    const c = a[l];
    Tt(c) || X(209);
    const u = s(l);
    for (let g = c.getFirstChild(), p = 0; g != null; g = g.getNextSibling()) {
      for (le(g) || X(147); u[p] !== void 0; ) p++;
      const b = { cell: g, startColumn: p, startRow: l }, { __rowSpan: y, __colSpan: x } = g;
      for (let E = 0; E < y && !(l + E >= a.length); E++) {
        const S = s(l + E);
        for (let h = 0; h < x; h++) S[p + h] = b;
      }
      e !== null && i === null && e.is(g) && (i = b), t !== null && o === null && t.is(g) && (o = b);
    }
  }
  return [r, i, o];
}
function Zl(n) {
  let e;
  if (n instanceof At) e = n;
  else if ("__type" in n) {
    const i = me(n, le);
    le(i) || X(148), e = i;
  } else {
    const i = me(n.getNode(), le);
    le(i) || X(148), e = i;
  }
  const t = e.getParent();
  Tt(t) || X(149);
  const r = t.getParent();
  return Kt(r) || X(210), [e, t, r];
}
function Xl(n, e, t) {
  let r, i = Math.min(e.startColumn, t.startColumn), o = Math.min(e.startRow, t.startRow), s = Math.max(e.startColumn + e.cell.__colSpan - 1, t.startColumn + t.cell.__colSpan - 1), a = Math.max(e.startRow + e.cell.__rowSpan - 1, t.startRow + t.cell.__rowSpan - 1);
  do {
    r = !1;
    for (let l = 0; l < n.length; l++) for (let c = 0; c < n[0].length; c++) {
      const u = n[l][c];
      if (!u) continue;
      const g = u.startColumn + u.cell.__colSpan - 1, p = u.startRow + u.cell.__rowSpan - 1, b = u.startColumn <= s && g >= i, y = u.startRow <= a && p >= o;
      if (b && y) {
        const x = Math.min(i, u.startColumn), E = Math.max(s, g), S = Math.min(o, u.startRow), h = Math.max(a, p);
        x === i && E === s && S === o && h === a || (i = x, s = E, o = S, a = h, r = !0);
      }
    }
  } while (r);
  return { maxColumn: s, maxRow: a, minColumn: i, minRow: o };
}
function ui(n) {
  const [e, , t] = Zl(n), r = t.getChildren(), i = r.length, o = r[0].getChildren().length, s = new Array(i);
  for (let a = 0; a < i; a++) s[a] = new Array(o);
  for (let a = 0; a < i; a++) {
    const l = r[a].getChildren();
    let c = 0;
    for (let u = 0; u < l.length; u++) {
      for (; s[a][c]; ) c++;
      const g = l[u], p = g.__rowSpan || 1, b = g.__colSpan || 1;
      for (let y = 0; y < p; y++) for (let x = 0; x < b; x++) s[a + y][c + x] = g;
      if (e === g) return { colSpan: b, columnIndex: c, rowIndex: a, rowSpan: p };
      c += b;
    }
  }
  return null;
}
function di(n) {
  const [[e, t, r, i], [o, s, a, l]] = ["anchor", "focus"].map((c) => {
    const u = n[c].getNode(), g = me(u, le);
    le(g) || X(238, c, u.getKey(), u.getType());
    const p = g.getParent();
    Tt(p) || X(239, c);
    const b = p.getParent();
    return Kt(b) || X(240, c), [u, g, p, b];
  });
  return i.is(l) || X(241), { anchorCell: t, anchorNode: e, anchorRow: r, anchorTable: i, focusCell: s, focusNode: o, focusRow: a, focusTable: l };
}
class qn {
  constructor(e, t, r) {
    this.anchor = t, this.focus = r, t._selection = this, r._selection = this, this._cachedNodes = null, this.dirty = !1, this.tableKey = e;
  }
  getStartEndPoints() {
    return [this.anchor, this.focus];
  }
  isValid() {
    return this.tableKey !== "root" && this.anchor.key !== "root" && this.anchor.type === "element" && this.focus.key !== "root" && this.focus.type === "element";
  }
  isBackward() {
    return this.focus.isBefore(this.anchor);
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(e) {
    this._cachedNodes = e;
  }
  is(e) {
    return Lo(e) && this.tableKey === e.tableKey && this.anchor.is(e.anchor) && this.focus.is(e.focus);
  }
  set(e, t, r) {
    this.dirty = this.dirty || e !== this.tableKey || t !== this.anchor.key || r !== this.focus.key, this.tableKey = e, this.anchor.key = t, this.focus.key = r, this._cachedNodes = null;
  }
  clone() {
    return new qn(this.tableKey, Er(this.anchor.key, this.anchor.offset, this.anchor.type), Er(this.focus.key, this.focus.offset, this.focus.type));
  }
  isCollapsed() {
    return !1;
  }
  extract() {
    return this.getNodes();
  }
  insertRawText(e) {
  }
  insertText() {
  }
  hasFormat(e) {
    let t = 0;
    this.getNodes().filter(le).forEach((i) => {
      const o = i.getFirstChild();
      $n(o) && (t |= o.getTextFormat());
    });
    const r = Ys[e];
    return !!(t & r);
  }
  insertNodes(e) {
    const t = this.focus.getNode();
    D(t) || X(151), Ut(t.select(0, t.getChildrenSize())).insertNodes(e);
  }
  getShape() {
    const { anchorCell: e, focusCell: t } = di(this), r = ui(e);
    r === null && X(153);
    const i = ui(t);
    i === null && X(155);
    const o = Math.min(r.columnIndex, i.columnIndex), s = Math.max(r.columnIndex + r.colSpan - 1, i.columnIndex + i.colSpan - 1), a = Math.min(r.rowIndex, i.rowIndex), l = Math.max(r.rowIndex + r.rowSpan - 1, i.rowIndex + i.rowSpan - 1);
    return { fromX: Math.min(o, s), fromY: Math.min(a, l), toX: Math.max(o, s), toY: Math.max(a, l) };
  }
  getNodes() {
    if (!this.isValid()) return [];
    const e = this._cachedNodes;
    if (e !== null) return e;
    const { anchorTable: t, anchorCell: r, focusCell: i } = di(this), o = i.getParents()[1];
    if (o !== t) {
      if (t.isParentOf(i)) {
        const E = o.getParent();
        E == null && X(159), this.set(this.tableKey, i.getKey(), E.getKey());
      } else {
        const E = t.getParent();
        E == null && X(158), this.set(this.tableKey, E.getKey(), i.getKey());
      }
      return this.getNodes();
    }
    const [s, a, l] = ql(t, r, i), { minColumn: c, maxColumn: u, minRow: g, maxRow: p } = Xl(s, a, l), b = /* @__PURE__ */ new Map([[t.getKey(), t]]);
    let y = null;
    for (let E = g; E <= p; E++) for (let S = c; S <= u; S++) {
      const { cell: h } = s[E][S], m = h.getParent();
      Tt(m) || X(160), m !== y && (b.set(m.getKey(), m), y = m), b.has(h.getKey()) || Ql(h, (_) => {
        b.set(_.getKey(), _);
      });
    }
    const x = Array.from(b.values());
    return Gs() || (this._cachedNodes = x), x;
  }
  getTextContent() {
    const e = this.getNodes().filter((r) => le(r));
    let t = "";
    for (let r = 0; r < e.length; r++) {
      const i = e[r], o = i.__parent, s = (e[r + 1] || {}).__parent;
      t += i.getTextContent() + (s !== o ? `
` : "	");
    }
    return t;
  }
}
function Lo(n) {
  return n instanceof qn;
}
function Ql(n, e) {
  const t = [[n]];
  for (let r = t.at(-1); r !== void 0 && t.length > 0; r = t.at(-1)) {
    const i = r.pop();
    i === void 0 ? t.pop() : e(i) !== !1 && D(i) && t.push(i.getChildren());
  }
}
function ec(n, e) {
  for (let t = e, r = null; t !== null; t = t.getParent()) {
    if (n.is(t)) return r;
    le(t) && (r = t);
  }
  return null;
}
function tc(n, e, t) {
  return ec(n, Me(e, t));
}
function fi(n, e, t, r) {
  const i = n.querySelector("colgroup");
  if (!i) return;
  const o = [];
  for (let s = 0; s < t; s++) {
    const a = document.createElement("col"), l = r && r[s];
    l && (a.style.width = `${l}px`), o.push(a);
  }
  i.replaceChildren(...o);
}
function gi(n, e, t) {
  t ? (ee(n, e.theme.tableRowStriping), n.setAttribute("data-lexical-row-striping", "true")) : (He(n, e.theme.tableRowStriping), n.removeAttribute("data-lexical-row-striping"));
}
function hi(n, e, t) {
  t > 0 ? (ee(n, e.theme.tableFrozenColumn), n.setAttribute("data-lexical-frozen-column", "true")) : (He(n, e.theme.tableFrozenColumn), n.removeAttribute("data-lexical-frozen-column"));
}
function pi(n, e, t) {
  t > 0 ? (ee(n, e.theme.tableFrozenRow), n.setAttribute("data-lexical-frozen-row", "true")) : (He(n, e.theme.tableFrozenRow), n.removeAttribute("data-lexical-frozen-row"));
}
function bn(n, e, t) {
  if (!e.theme.tableAlignment) return;
  const r = [], i = [];
  for (const o of ["center", "right"]) {
    const s = e.theme.tableAlignment[o];
    s && (o === t ? i : r).push(s);
  }
  He(n, ...r), ee(n, ...i);
}
const nc = /* @__PURE__ */ new WeakSet();
function rc(n = Ri()) {
  return nc.has(n);
}
class en extends ye {
  static getType() {
    return "table";
  }
  getColWidths() {
    return this.getLatest().__colWidths;
  }
  setColWidths(e) {
    const t = this.getWritable();
    return t.__colWidths = e, t;
  }
  static clone(e) {
    return new en(e.__key);
  }
  afterCloneFrom(e) {
    super.afterCloneFrom(e), this.__colWidths = e.__colWidths, this.__rowStriping = e.__rowStriping, this.__frozenColumnCount = e.__frozenColumnCount, this.__frozenRowCount = e.__frozenRowCount;
  }
  static importDOM() {
    return { table: (e) => ({ conversion: ic, priority: 1 }) };
  }
  static importJSON(e) {
    return Mo().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setRowStriping(e.rowStriping || !1).setFrozenColumns(e.frozenColumnCount || 0).setFrozenRows(e.frozenRowCount || 0).setColWidths(e.colWidths);
  }
  constructor(e) {
    super(e), this.__rowStriping = !1, this.__frozenColumnCount = 0, this.__frozenRowCount = 0;
  }
  exportJSON() {
    return { ...super.exportJSON(), colWidths: this.getColWidths(), frozenColumnCount: this.__frozenColumnCount ? this.__frozenColumnCount : void 0, frozenRowCount: this.__frozenRowCount ? this.__frozenRowCount : void 0, rowStriping: this.__rowStriping ? this.__rowStriping : void 0 };
  }
  extractWithChild(e, t, r) {
    return r === "html";
  }
  getDOMSlot(e) {
    const t = e.nodeName !== "TABLE" && e.querySelector("table") || e;
    return t.nodeName !== "TABLE" && X(229), super.getDOMSlot(t).withAfter(t.querySelector("colgroup"));
  }
  createDOM(e, t) {
    const r = document.createElement("table");
    this.__style && (r.style.cssText = this.__style);
    const i = document.createElement("colgroup");
    if (r.appendChild(i), fi(r, 0, this.getColumnCount(), this.getColWidths()), Vs(i), ee(r, e.theme.table), bn(r, e, this.getFormatType()), this.__frozenColumnCount && hi(r, e, this.__frozenColumnCount), this.__frozenRowCount && pi(r, e, this.__frozenRowCount), this.__rowStriping && gi(r, e, !0), rc(t)) {
      const o = document.createElement("div"), s = e.theme.tableScrollableWrapper;
      return s ? ee(o, s) : o.style.cssText = "overflow-x: auto;", o.appendChild(r), o;
    }
    return r;
  }
  updateDOM(e, t, r) {
    e.__rowStriping !== this.__rowStriping && gi(t, r, this.__rowStriping), e.__frozenColumnCount !== this.__frozenColumnCount && hi(t, r, this.__frozenColumnCount), e.__frozenRowCount !== this.__frozenRowCount && pi(t, r, this.__frozenRowCount), fi(t, 0, this.getColumnCount(), this.getColWidths());
    const i = this.getDOMSlot(t).element;
    return e.__style !== this.__style && (i.style.cssText = this.__style), bn(i, r, this.getFormatType()), !1;
  }
  exportDOM(e) {
    const t = super.exportDOM(e), { element: r } = t;
    return { after: (i) => {
      if (t.after && (i = t.after(i), this.__format && bn(i, e._config, this.getFormatType())), Q(i) && i.nodeName !== "TABLE" && (i = i.querySelector("table")), !Q(i)) return null;
      const [o] = Do(this, null, null), s = /* @__PURE__ */ new Map();
      for (const u of o) for (const g of u) {
        const p = g.cell.getKey();
        s.has(p) || s.set(p, { colSpan: g.cell.getColSpan(), startColumn: g.startColumn });
      }
      const a = /* @__PURE__ */ new Set();
      for (const u of i.querySelectorAll(":scope > tr > [data-temporary-table-cell-lexical-key]")) {
        const g = u.getAttribute("data-temporary-table-cell-lexical-key");
        if (g) {
          const p = s.get(g);
          if (u.removeAttribute("data-temporary-table-cell-lexical-key"), p) {
            s.delete(g);
            for (let b = 0; b < p.colSpan; b++) a.add(b + p.startColumn);
          }
        }
      }
      const l = i.querySelector(":scope > colgroup");
      if (l) {
        const u = Array.from(i.querySelectorAll(":scope > colgroup > col")).filter((g, p) => a.has(p));
        l.replaceChildren(...u);
      }
      const c = i.querySelectorAll(":scope > tr");
      if (c.length > 0) {
        const u = document.createElement("tbody");
        for (const g of c) u.appendChild(g);
        i.append(u);
      }
      return i;
    }, element: Q(r) && r.nodeName !== "TABLE" ? r.querySelector("table") : r };
  }
  canBeEmpty() {
    return !1;
  }
  isShadowRoot() {
    return !0;
  }
  getCordsFromCellNode(e, t) {
    const { rows: r, domRows: i } = t;
    for (let o = 0; o < r; o++) {
      const s = i[o];
      if (s != null) for (let a = 0; a < s.length; a++) {
        const l = s[a];
        if (l == null) continue;
        const { elem: c } = l, u = tc(this, c);
        if (u !== null && e.is(u)) return { x: a, y: o };
      }
    }
    throw new Error("Cell not found in table.");
  }
  getDOMCellFromCords(e, t, r) {
    const { domRows: i } = r, o = i[t];
    if (o == null) return null;
    const s = o[e < o.length ? e : o.length - 1];
    return s ?? null;
  }
  getDOMCellFromCordsOrThrow(e, t, r) {
    const i = this.getDOMCellFromCords(e, t, r);
    if (!i) throw new Error("Cell not found at cords.");
    return i;
  }
  getCellNodeFromCords(e, t, r) {
    const i = this.getDOMCellFromCords(e, t, r);
    if (i == null) return null;
    const o = Me(i.elem);
    return le(o) ? o : null;
  }
  getCellNodeFromCordsOrThrow(e, t, r) {
    const i = this.getCellNodeFromCords(e, t, r);
    if (!i) throw new Error("Node at cords not TableCellNode.");
    return i;
  }
  getRowStriping() {
    return !!this.getLatest().__rowStriping;
  }
  setRowStriping(e) {
    const t = this.getWritable();
    return t.__rowStriping = e, t;
  }
  setFrozenColumns(e) {
    const t = this.getWritable();
    return t.__frozenColumnCount = e, t;
  }
  getFrozenColumns() {
    return this.getLatest().__frozenColumnCount;
  }
  setFrozenRows(e) {
    const t = this.getWritable();
    return t.__frozenRowCount = e, t;
  }
  getFrozenRows() {
    return this.getLatest().__frozenRowCount;
  }
  canSelectBefore() {
    return !0;
  }
  canIndent() {
    return !1;
  }
  getColumnCount() {
    const e = this.getFirstChild();
    if (!e) return 0;
    let t = 0;
    return e.getChildren().forEach((r) => {
      le(r) && (t += r.getColSpan());
    }), t;
  }
}
function ic(n) {
  const e = Mo();
  n.hasAttribute("data-lexical-row-striping") && e.setRowStriping(!0);
  const t = n.querySelector(":scope > colgroup");
  if (t) {
    let r = [];
    for (const i of t.querySelectorAll(":scope > col")) {
      let o = i.style.width || "";
      if (!Gn.test(o) && (o = i.getAttribute("width") || "", !/^\d+$/.test(o))) {
        r = void 0;
        break;
      }
      r.push(parseFloat(o));
    }
    r && e.setColWidths(r);
  }
  return { after: (r) => oo(r, Tt), node: e };
}
function Mo() {
  return fe(new en());
}
function Kt(n) {
  return n instanceof en;
}
const tn = (n) => {
  n.update(() => {
    const e = O();
    k(e) && Xi(e, () => q());
  });
}, yn = (n, e, t) => {
  e !== t && n.update(() => {
    const r = O();
    Xi(r, () => et(t));
  });
}, oc = (n, e) => {
  console.log("blockType", e), e !== "bullet" ? n.dispatchCommand(No, void 0) : tn(n);
}, sc = (n, e) => {
  e !== "check" ? n.dispatchCommand(Oo, void 0) : tn(n);
}, ac = (n, e) => {
  e !== "number" ? n.dispatchCommand(ko, void 0) : tn(n);
};
function lc(n) {
  const e = n.anchor, t = n.focus, r = n.anchor.getNode(), i = n.focus.getNode();
  return r === i ? r : n.isBackward() ? Tr(t) ? r : i : Tr(e) ? r : i;
}
const cc = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
class Je extends ye {
  static getType() {
    return "link";
  }
  static clone(e) {
    return new Je(e.__url, { rel: e.__rel, target: e.__target, title: e.__title }, e.__key);
  }
  constructor(e = "", t = {}, r) {
    super(r);
    const { target: i = null, rel: o = null, title: s = null } = t;
    this.__url = e, this.__target = i, this.__rel = o, this.__title = s;
  }
  createDOM(e) {
    const t = document.createElement("a");
    return t.href = this.sanitizeUrl(this.__url), this.__target !== null && (t.target = this.__target), this.__rel !== null && (t.rel = this.__rel), this.__title !== null && (t.title = this.__title), ee(t, e.theme.link), t;
  }
  updateDOM(e, t, r) {
    if (Ki(t)) {
      const i = this.__url, o = this.__target, s = this.__rel, a = this.__title;
      i !== e.__url && (t.href = i), o !== e.__target && (o ? t.target = o : t.removeAttribute("target")), s !== e.__rel && (s ? t.rel = s : t.removeAttribute("rel")), a !== e.__title && (a ? t.title = a : t.removeAttribute("title"));
    }
    return !1;
  }
  static importDOM() {
    return { a: (e) => ({ conversion: uc, priority: 1 }) };
  }
  static importJSON(e) {
    return Jt().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setURL(e.url).setRel(e.rel || null).setTarget(e.target || null).setTitle(e.title || null);
  }
  sanitizeUrl(e) {
    try {
      const t = new URL(e);
      if (!cc.has(t.protocol)) return "about:blank";
    } catch {
      return e;
    }
    return e;
  }
  exportJSON() {
    return { ...super.exportJSON(), rel: this.getRel(), target: this.getTarget(), title: this.getTitle(), url: this.getURL() };
  }
  getURL() {
    return this.getLatest().__url;
  }
  setURL(e) {
    const t = this.getWritable();
    return t.__url = e, t;
  }
  getTarget() {
    return this.getLatest().__target;
  }
  setTarget(e) {
    const t = this.getWritable();
    return t.__target = e, t;
  }
  getRel() {
    return this.getLatest().__rel;
  }
  setRel(e) {
    const t = this.getWritable();
    return t.__rel = e, t;
  }
  getTitle() {
    return this.getLatest().__title;
  }
  setTitle(e) {
    const t = this.getWritable();
    return t.__title = e, t;
  }
  insertNewAfter(e, t = !0) {
    const r = Jt(this.__url, { rel: this.__rel, target: this.__target, title: this.__title });
    return this.insertAfter(r, t), r;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
  extractWithChild(e, t, r) {
    if (!k(t)) return !1;
    const i = t.anchor.getNode(), o = t.focus.getNode();
    return this.isParentOf(i) && this.isParentOf(o) && t.getTextContent().length > 0;
  }
  isEmailURI() {
    return this.__url.startsWith("mailto:");
  }
  isWebSiteURI() {
    return this.__url.startsWith("https://") || this.__url.startsWith("http://");
  }
}
function uc(n) {
  let e = null;
  if (Ki(n)) {
    const t = n.textContent;
    (t !== null && t !== "" || n.children.length > 0) && (e = Jt(n.getAttribute("href") || "", { rel: n.getAttribute("rel"), target: n.getAttribute("target"), title: n.getAttribute("title") }));
  }
  return { node: e };
}
function Jt(n = "", e) {
  return fe(new Je(n, e));
}
function Ie(n) {
  return n instanceof Je;
}
class nn extends Je {
  constructor(e = "", t = {}, r) {
    super(e, t, r), this.__isUnlinked = t.isUnlinked !== void 0 && t.isUnlinked !== null && t.isUnlinked;
  }
  static getType() {
    return "autolink";
  }
  static clone(e) {
    return new nn(e.__url, { isUnlinked: e.__isUnlinked, rel: e.__rel, target: e.__target, title: e.__title }, e.__key);
  }
  getIsUnlinked() {
    return this.__isUnlinked;
  }
  setIsUnlinked(e) {
    const t = this.getWritable();
    return t.__isUnlinked = e, t;
  }
  createDOM(e) {
    return this.__isUnlinked ? document.createElement("span") : super.createDOM(e);
  }
  updateDOM(e, t, r) {
    return super.updateDOM(e, t, r) || e.__isUnlinked !== this.__isUnlinked;
  }
  static importJSON(e) {
    return mi().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setIsUnlinked(e.isUnlinked || !1);
  }
  static importDOM() {
    return null;
  }
  exportJSON() {
    return { ...super.exportJSON(), isUnlinked: this.__isUnlinked };
  }
  insertNewAfter(e, t = !0) {
    const r = this.getParentOrThrow().insertNewAfter(e, t);
    if (D(r)) {
      const i = mi(this.__url, { isUnlinked: this.__isUnlinked, rel: this.__rel, target: this.__target, title: this.__title });
      return r.append(i), i;
    }
    return null;
  }
}
function mi(n = "", e) {
  return fe(new nn(n, e));
}
function _i(n) {
  return n instanceof nn;
}
const bi = Te("TOGGLE_LINK_COMMAND");
function yi(n, e) {
  if (n.type === "element") {
    const t = n.getNode();
    return D(t) || function(r, ...i) {
      const o = new URL("https://lexical.dev/docs/error"), s = new URLSearchParams();
      s.append("code", r);
      for (const a of i) s.append("v", a);
      throw o.search = s.toString(), Error(`Minified Lexical error #${r}; visit ${o.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
    }(252), t.getChildren()[n.offset + e] || null;
  }
  return null;
}
function wn(n, e = {}) {
  const { target: t, title: r } = e, i = e.rel === void 0 ? "noreferrer" : e.rel, o = O();
  if (!k(o)) return;
  const s = o.extract();
  if (n === null) return void s.forEach((c) => {
    const u = me(c, (g) => !_i(g) && Ie(g));
    if (u) {
      const g = u.getChildren();
      for (let p = 0; p < g.length; p++) u.insertBefore(g[p]);
      u.remove();
    }
  });
  const a = /* @__PURE__ */ new Set(), l = (c) => {
    a.has(c.getKey()) || (a.add(c.getKey()), c.setURL(n), t !== void 0 && c.setTarget(t), i !== void 0 && c.setRel(i), r !== void 0 && c.setTitle(r));
  };
  if (s.length === 1) {
    const c = wi(s[0], Ie);
    if (c !== null) return l(c);
  }
  (function(c) {
    const u = O();
    if (!k(u)) return c();
    const g = Ut(u), p = g.isBackward(), b = yi(g.anchor, p ? -1 : 0), y = yi(g.focus, p ? 0 : -1);
    if (c(), b || y) {
      const x = O();
      if (k(x)) {
        const E = x.clone();
        if (b) {
          const S = b.getParent();
          S && E.anchor.set(S.getKey(), b.getIndexWithinParent() + (p ? 1 : 0), "element");
        }
        if (y) {
          const S = y.getParent();
          S && E.focus.set(S.getKey(), y.getIndexWithinParent() + (p ? 0 : 1), "element");
        }
        Ct(Ut(E));
      }
    }
  })(() => {
    let c = null;
    for (const u of s) {
      if (!u.isAttached()) continue;
      const g = wi(u, Ie);
      if (g) {
        l(g);
        continue;
      }
      if (D(u)) {
        if (!u.isInline()) continue;
        if (Ie(u)) {
          if (!(_i(u) || c !== null && c.getParentOrThrow().isParentOf(u))) {
            l(u), c = u;
            continue;
          }
          for (const b of u.getChildren()) u.insertBefore(b);
          u.remove();
          continue;
        }
      }
      const p = u.getPreviousSibling();
      Ie(p) && p.is(c) ? p.append(u) : (c = Jt(n, { rel: i, target: t, title: r }), u.insertAfter(c), c.append(u));
    }
  });
}
function wi(n, e) {
  let t = n;
  for (; t !== null && t.getParent() !== null && !e(t); ) t = t.getParentOrThrow();
  return e(t) ? t : null;
}
const dc = ({
  onClick: n,
  className: e
}) => {
  const t = (r) => {
    n && n(r);
  };
  return /* @__PURE__ */ f.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      onClick: t,
      className: e,
      children: /* @__PURE__ */ f.jsx("path", { d: "M8.9735 8.00004L12.6668 11.6934V12.6667H11.6935L8.00016 8.97337L4.30683 12.6667H3.3335V11.6934L7.02683 8.00004L3.3335 4.30671V3.33337H4.30683L8.00016 7.02671L11.6935 3.33337H12.6668V4.30671L8.9735 8.00004Z" })
    }
  );
};
function fc({
  onClose: n,
  children: e,
  title: t,
  closeOnClickOutside: r
}) {
  const i = he(null);
  return j(() => {
    i.current !== null && i.current.focus();
  }, []), j(() => {
    let o = null;
    const s = (c) => {
      c.key === "Escape" && n();
    }, a = (c) => {
      const u = c.target;
      i.current !== null && // isDOMNode(target) &&
      !i.current.contains(u) && r && n();
    }, l = i.current;
    return l !== null && (o = l.parentElement, o !== null && o.addEventListener("click", a)), window.addEventListener("keydown", s), () => {
      window.removeEventListener("keydown", s), o !== null && (o == null || o.removeEventListener("click", a));
    };
  }, [r, n]), /* @__PURE__ */ f.jsx("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ f.jsxs("div", { className: "Modal__wrapper", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ f.jsxs("div", { className: "Modal__header modalHeader", children: [
      /* @__PURE__ */ f.jsx("span", { className: "text-default headings-h3", children: t }),
      /* @__PURE__ */ f.jsx(
        "button",
        {
          "data-size": "small",
          className: "iconButton secondaryIconButton",
          onClick: n,
          children: /* @__PURE__ */ f.jsx(dc, {})
        }
      )
    ] }),
    e
  ] }) });
}
function gc({
  onClose: n,
  children: e,
  title: t,
  closeOnClickOutside: r = !1
}) {
  return Jn(
    /* @__PURE__ */ f.jsx(
      fc,
      {
        onClose: n,
        title: t,
        closeOnClickOutside: r,
        children: e
      }
    ),
    document.querySelector(".templates-editor-main-container") || document.body
  );
}
function hc() {
  const [n, e] = J(null), t = Ae(() => {
    e(null);
  }, []), r = _e(() => {
    if (n === null)
      return null;
    const { title: o, content: s, closeOnClickOutside: a } = n;
    return /* @__PURE__ */ f.jsx(
      gc,
      {
        onClose: t,
        title: o,
        closeOnClickOutside: a,
        children: s
      }
    );
  }, [n, t]), i = Ae(
    (o, s, a = !1) => {
      e({
        closeOnClickOutside: a,
        content: s(t),
        title: o
      });
    },
    [t]
  );
  return [r, i];
}
const pc = Vt.lazy(() => import("./ImageComponent-DtVn3sQq.js"));
function mc(n) {
  return n.parentElement != null && n.parentElement.tagName === "LI" && n.previousSibling === null && n.getAttribute("aria-roledescription") === "checkbox";
}
function _c(n) {
  const e = n;
  if (e.src.startsWith("file:///") || mc(e))
    return null;
  const { alt: t, src: r, width: i, height: o } = e;
  return { node: Zn({ altText: t, height: o, src: r, width: i }) };
}
class st extends Kn {
  static getType() {
    return "image";
  }
  static clone(e) {
    return new st(
      e.__src,
      e.__altText,
      e.__maxWidth,
      e.__width,
      e.__height,
      e.__showCaption,
      e.__caption,
      e.__captionsEnabled,
      e.__key
    );
  }
  static importJSON(e) {
    const { altText: t, height: r, width: i, maxWidth: o, caption: s, src: a, showCaption: l } = e, c = Zn({
      altText: t,
      height: r,
      maxWidth: o,
      showCaption: l,
      src: a,
      width: i
    }), u = c.__caption, g = u.parseEditorState(s.editorState);
    return g.isEmpty() || u.setEditorState(g), c;
  }
  exportDOM() {
    const e = document.createElement("img");
    return e.setAttribute("src", this.__src), e.setAttribute("alt", this.__altText), e.setAttribute("width", this.__width.toString()), e.setAttribute("height", this.__height.toString()), { element: e };
  }
  static importDOM() {
    return {
      img: () => ({
        conversion: _c,
        priority: 2
      })
    };
  }
  constructor(e, t, r, i, o, s, a, l, c) {
    super(c), this.__src = e, this.__altText = t, this.__maxWidth = r, this.__width = i || "inherit", this.__height = o || "inherit", this.__showCaption = s || !1, this.__caption = a || Mn({
      nodes: []
    }), this.__captionsEnabled = l || l === void 0;
  }
  exportJSON() {
    return {
      altText: this.getAltText(),
      caption: this.__caption.toJSON(),
      height: this.__height === "inherit" ? 0 : this.__height,
      maxWidth: this.__maxWidth,
      showCaption: this.__showCaption,
      src: this.getSrc(),
      type: "image",
      version: 1,
      width: this.__width === "inherit" ? 0 : this.__width
    };
  }
  setWidthAndHeight(e, t) {
    const r = this.getWritable();
    r.__width = e, r.__height = t;
  }
  setShowCaption(e) {
    const t = this.getWritable();
    t.__showCaption = e;
  }
  // View
  createDOM(e) {
    const t = document.createElement("span"), i = e.theme.image;
    return i !== void 0 && (t.className = i), t;
  }
  updateDOM() {
    return !1;
  }
  getSrc() {
    return this.__src;
  }
  getAltText() {
    return this.__altText;
  }
  decorate() {
    return /* @__PURE__ */ f.jsx(Ln, { fallback: null, children: /* @__PURE__ */ f.jsx(
      pc,
      {
        src: this.__src,
        altText: this.__altText,
        width: this.__width,
        height: this.__height,
        maxWidth: this.__maxWidth,
        nodeKey: this.getKey(),
        showCaption: this.__showCaption,
        caption: this.__caption,
        captionsEnabled: this.__captionsEnabled,
        resizable: !0
      }
    ) });
  }
}
function Zn({
  altText: n,
  height: e,
  maxWidth: t = 600,
  captionsEnabled: r,
  src: i,
  width: o,
  showCaption: s,
  caption: a,
  key: l
}) {
  return fe(
    new st(
      i,
      n,
      t,
      o,
      e,
      s,
      a,
      r,
      l
    )
  );
}
function bc(n) {
  return n instanceof st;
}
function yc({ children: n }) {
  return /* @__PURE__ */ f.jsx("div", { className: "DialogButtonsList", children: n });
}
function au({
  "data-test-id": n,
  children: e
}) {
  return /* @__PURE__ */ f.jsx("div", { className: "DialogActions", "data-test-id": n, children: e });
}
function wc({
  accept: n,
  label: e,
  onChange: t,
  "data-test-id": r
}) {
  return /* @__PURE__ */ f.jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ f.jsx("label", { className: "Input__label", children: e }),
    /* @__PURE__ */ f.jsx(
      "input",
      {
        type: "file",
        accept: n,
        className: "Input__input",
        onChange: (i) => t(i.target.files),
        "data-test-id": r
      }
    )
  ] });
}
const $o = {
  bullet: "Bulleted List",
  check: "Check List",
  code: "Code Block",
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
  number: "Numbered List",
  paragraph: "Normal",
  quote: "Quote"
}, lu = /* @__PURE__ */ new Set(), rn = Te("INSERT_IMAGE_COMMAND"), Po = Te("INSERT_INLINE_IMAGE_COMMAND");
function vc({
  onClick: n,
  onCancel: e
}) {
  const [t, r] = J(""), [i] = J(""), o = t === "";
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx("div", { className: "Modal__content", children: /* @__PURE__ */ f.jsx(
      mo,
      {
        label: "Image URL",
        placeholder: "i.e. https://source.unsplash.com/random",
        onChange: r,
        value: t,
        "data-test-id": "image-modal-url-input"
      }
    ) }),
    /* @__PURE__ */ f.jsxs("div", { className: "Modal__footer", children: [
      /* @__PURE__ */ f.jsx("button", { onClick: () => e(), className: "button secondaryButton", children: "Back" }),
      /* @__PURE__ */ f.jsx(
        "button",
        {
          disabled: o,
          onClick: () => n({ altText: i, src: t }),
          className: "button primaryButton",
          children: "Confirm"
        }
      )
    ] })
  ] });
}
function xc({
  onClick: n,
  onCancel: e
}) {
  const [t, r] = J(""), [i] = J(""), o = t === "", s = (a) => {
    const l = new FileReader();
    l.onload = function() {
      return typeof l.result == "string" && r(l.result), "";
    }, a !== null && l.readAsDataURL(a[0]);
  };
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx("div", { className: "Modal__content", children: /* @__PURE__ */ f.jsx(
      wc,
      {
        label: "Image Upload",
        onChange: s,
        accept: "image/*",
        "data-test-id": "image-modal-file-upload"
      }
    ) }),
    /* @__PURE__ */ f.jsxs("div", { className: "Modal__footer", children: [
      /* @__PURE__ */ f.jsx("button", { onClick: () => e(), className: "button secondaryButton", children: "Back" }),
      /* @__PURE__ */ f.jsx(
        "button",
        {
          disabled: o,
          onClick: () => n({ altText: i, src: t }),
          className: "button primaryButton",
          children: "Confirm"
        }
      )
    ] })
  ] });
}
function Ec({
  activeEditor: n,
  onClose: e,
  InsertImageFromListDialogBody: t
}) {
  const [r, i] = J(null), o = he(!1);
  j(() => {
    o.current = !1;
    const a = (l) => {
      o.current = l.altKey;
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a);
    };
  }, [n]);
  const s = (a) => {
    n.dispatchCommand(rn, a), e();
  };
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    !r && /* @__PURE__ */ f.jsxs(yc, { children: [
      t && /* @__PURE__ */ f.jsx(
        "button",
        {
          "data-test-id": "image-modal-option-file",
          onClick: () => i("list"),
          className: "button secondaryButton",
          style: { width: "150px" },
          children: "Select from files"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "button",
        {
          "data-test-id": "image-modal-option-file",
          onClick: () => i("file"),
          className: "button secondaryButton",
          style: { width: "150px" },
          children: "File"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "button",
        {
          "data-test-id": "image-modal-option-url",
          onClick: () => i("url"),
          className: "button secondaryButton",
          style: { width: "150px" },
          children: "URL"
        }
      )
    ] }),
    r === "url" && /* @__PURE__ */ f.jsx(
      vc,
      {
        onClick: s,
        onCancel: () => i(null)
      }
    ),
    r === "file" && /* @__PURE__ */ f.jsx(
      xc,
      {
        onClick: s,
        onCancel: () => i(null)
      }
    ),
    r === "list" && t && /* @__PURE__ */ f.jsx(
      t,
      {
        onClick: s,
        onCancel: () => i(null)
      }
    )
  ] });
}
function Cc({
  captionsEnabled: n
}) {
  const [e] = te();
  return j(() => {
    if (!e.hasNodes([st]))
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    return we(
      e.registerCommand(
        rn,
        (t) => {
          const r = Zn(t);
          return Hn([r]), Le(r.getParentOrThrow()) && ro(r, q).selectEnd(), !0;
        },
        M
      ),
      e.registerCommand(
        Bn,
        (t) => Ac(t),
        Et
      ),
      e.registerCommand(
        Un,
        (t) => Tc(t),
        oe
      ),
      e.registerCommand(
        Wn,
        (t) => Nc(t, e),
        Et
      )
    );
  }, [n, e]), null;
}
const Sc = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", jo = document.createElement("img");
jo.src = Sc;
function Ac(n) {
  const e = Xn();
  if (!e)
    return !1;
  const t = n.dataTransfer;
  return t ? (t.setData("text/plain", "_"), t.setDragImage(jo, 0, 0), t.setData(
    "application/x-lexical-drag",
    JSON.stringify({
      data: {
        altText: e.__altText,
        caption: e.__caption,
        height: e.__height,
        key: e.getKey(),
        maxWidth: e.__maxWidth,
        showCaption: e.__showCaption,
        src: e.__src,
        width: e.__width
      },
      type: "image"
    })
  ), !0) : !1;
}
function Tc(n) {
  return Xn() ? (zo(n) || n.preventDefault(), !0) : !1;
}
function Nc(n, e) {
  const t = Xn();
  if (!t)
    return !1;
  const r = kc(n);
  if (!r)
    return !1;
  if (n.preventDefault(), zo(n)) {
    const i = Oc(n);
    t.remove();
    const o = Gt();
    i != null && o.applyDOMRange(i), Ct(o), e.dispatchCommand(rn, r);
  }
  return !0;
}
function Xn() {
  const n = O();
  if (!Se(n))
    return null;
  const t = n.getNodes()[0];
  return bc(t) ? t : null;
}
function kc(n) {
  var i;
  const e = (i = n.dataTransfer) == null ? void 0 : i.getData("application/x-lexical-drag");
  if (!e)
    return null;
  const { type: t, data: r } = JSON.parse(e);
  return t !== "image" ? null : r;
}
function zo(n) {
  const e = n.target;
  return !!(e !== null && Q(e) && !e.closest("code, span.editor-image") && e.parentElement !== null && Q(e.parentElement) && e.parentElement.closest("div.ContentEditable__root"));
}
function Oc(n) {
  let e;
  const t = n.target, r = t == null ? null : t.nodeType === 9 ? t.defaultView : t.ownerDocument.defaultView, i = qt(r);
  if (document.caretRangeFromPoint)
    e = document.caretRangeFromPoint(n.clientX, n.clientY);
  else if (n.rangeParent && i !== null)
    i.collapse(n.rangeParent, n.rangeOffset || 0), e = i.getRangeAt(0);
  else
    throw Error("Cannot get the selection when dragging");
  return e;
}
const Rc = () => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "",
    children: [
      /* @__PURE__ */ f.jsx("path", { d: "M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }),
      /* @__PURE__ */ f.jsx("path", { d: "M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z" })
    ]
  }
), vn = 1;
function jt() {
  return /* @__PURE__ */ f.jsx("div", { className: "divider" });
}
function Fc({
  isAutosaving: n,
  isDisabled: e,
  InsertImageFromListDialogBody: t,
  addButtonForToolbar: r
}) {
  const [i, o] = hc(), [, s] = J(null), { toolbarState: a, updateToolbarState: l } = Tl(), [c] = te(), u = he(null), [g, p] = J(!1), [b, y] = J(!1), x = Ae(() => {
    const _ = O();
    if (k(_)) {
      l("isImageCaption", !1);
      const v = _.anchor.getNode();
      let w = v.getKey() === "root" ? v : me(v, (H) => {
        const re = H.getParent();
        return re !== null && Le(re);
      });
      w === null && (w = v.getTopLevelElementOrThrow());
      const A = w.getKey(), F = c.getElementByKey(A);
      l("isRTL", Qi(_));
      const N = lc(_), P = N.getParent(), B = Ie(P) || Ie(N);
      l("isLink", B);
      const ne = me(N, Kt);
      if (Kt(ne) ? l("rootType", "table") : l("rootType", "root"), w = P, F !== null)
        if (s(A), I(w) || (w == null ? void 0 : w.__type) === "listitem") {
          const H = no(
            v,
            Ke
          ), re = H && H.getListType() || "paragraph";
          l("blockType", re);
        } else {
          const H = Ha(w) ? w.getTag() : w == null ? void 0 : w.getType();
          if (H && H in $o && l(
            "blockType",
            H
          ), vo(w)) {
            const re = w.getLanguage();
            l(
              "codeLanguage",
              re ? Dl[re] || re : ""
            );
            return;
          }
        }
      l(
        "fontColor",
        Dt(_, "color", "#000")
      ), l(
        "bgColor",
        Dt(
          _,
          "background-color",
          "#fff"
        )
      ), l(
        "fontFamily",
        Dt(_, "font-family", "Arial")
      );
      let Y;
      Ie(P) && (Y = me(
        N,
        (H) => D(H) && !H.isInline()
      )), l(
        "elementFormat",
        D(Y) ? Y.getFormatType() : D(N) ? N.getFormatType() : (P == null ? void 0 : P.getFormatType()) || "left"
      );
    }
    (k(_) || Lo(_)) && (l("isBold", _.hasFormat("bold")), l("isItalic", _.hasFormat("italic")), l("isUnderline", _.hasFormat("underline")), l(
      "isStrikethrough",
      _.hasFormat("strikethrough")
    ), l("isSubscript", _.hasFormat("subscript")), l("isSuperscript", _.hasFormat("superscript")), l("isCode", _.hasFormat("code")), l(
      "fontSize",
      Dt(_, "font-size", "15px")
    ));
  }, [c, l]);
  j(() => we(
    c.registerUpdateListener(({ editorState: _ }) => {
      _.read(() => {
        x();
      });
    }),
    c.registerCommand(
      Zs,
      (_, v) => (x(), !1),
      vn
    ),
    c.registerCommand(
      _t,
      (_) => (p(_), !1),
      vn
    ),
    c.registerCommand(
      mt,
      (_) => (y(_), !1),
      vn
    )
  ), [c, x]);
  const E = Ae(
    (_, v) => {
      c.update(
        () => {
          const w = O();
          w !== null && ga(w, _);
        },
        v ? { tag: "historic" } : {}
      );
    },
    [c]
  ), S = Ae(
    (_, v) => {
      E({ color: _ }, v);
    },
    [E]
  ), h = Ae(
    (_, v) => {
      E({ "background-color": _ }, v);
    },
    [E]
  ), m = he(null);
  return j(() => {
    m.current = document.querySelector(
      ".templates-editor-main-container"
    );
  }, []), /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `toolbar-templates-lexical ${e ? "toolbar-disabled" : ""}`,
      ref: u,
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "toolbar-templates-lexical-left", children: [
          /* @__PURE__ */ f.jsx(
            "button",
            {
              disabled: !g || e,
              onClick: () => {
                c.dispatchCommand(zi, void 0);
              },
              className: "toolbar-item spaced",
              "aria-label": "Undo",
              children: /* @__PURE__ */ f.jsx(fl, {})
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              disabled: !b || e,
              onClick: () => {
                c.dispatchCommand(ji, void 0);
              },
              className: "toolbar-item",
              "aria-label": "Redo",
              children: /* @__PURE__ */ f.jsx(dl, {})
            }
          ),
          /* @__PURE__ */ f.jsx(jt, {}),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              disabled: e,
              onClick: () => {
                c.dispatchCommand(pt, "bold");
              },
              className: "toolbar-item spaced " + (a.isBold ? "active" : ""),
              "aria-label": "Format Bold",
              children: /* @__PURE__ */ f.jsx(gl, {})
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              disabled: e,
              onClick: () => {
                c.dispatchCommand(pt, "italic");
              },
              className: "toolbar-item spaced " + (a.isItalic ? "active" : ""),
              "aria-label": "Format Italics",
              children: /* @__PURE__ */ f.jsx(hl, {})
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              disabled: e,
              onClick: () => {
                c.dispatchCommand(pt, "underline");
              },
              className: "toolbar-item spaced " + (a.isUnderline ? "active" : ""),
              "aria-label": "Format Underline",
              children: /* @__PURE__ */ f.jsx(pl, {})
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              disabled: e,
              onClick: () => {
                c.dispatchCommand(pt, "strikethrough");
              },
              className: "toolbar-item spaced " + (a.isStrikethrough ? "active" : ""),
              "aria-label": "Format Strikethrough",
              children: /* @__PURE__ */ f.jsx(ml, {})
            }
          ),
          /* @__PURE__ */ f.jsx(jt, {}),
          /* @__PURE__ */ f.jsx(
            Ic,
            {
              blockType: a.blockType,
              editor: c,
              container: m.current
            }
          ),
          /* @__PURE__ */ f.jsx(jt, {}),
          /* @__PURE__ */ f.jsx(
            qr,
            {
              disabled: !1,
              buttonClassName: "toolbar-item color-picker",
              icon: /* @__PURE__ */ f.jsx(Nl, {}),
              buttonAriaLabel: "Formatting text color",
              buttonIconClassName: "icon font-color",
              color: a.fontColor,
              onChange: S,
              title: "text color",
              container: m.current
            }
          ),
          /* @__PURE__ */ f.jsx(
            qr,
            {
              disabled: !1,
              buttonClassName: "toolbar-item color-picker",
              icon: /* @__PURE__ */ f.jsx(kl, {}),
              buttonAriaLabel: "Formatting background color",
              buttonIconClassName: "icon bg-color",
              color: a.bgColor,
              onChange: h,
              title: "bg color",
              container: m.current
            }
          ),
          /* @__PURE__ */ f.jsx(jt, {}),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              disabled: e,
              onClick: () => {
                c.dispatchCommand(ht, "left");
              },
              className: "toolbar-item spaced",
              "aria-label": "Left Align",
              children: /* @__PURE__ */ f.jsx(_l, {})
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              disabled: e,
              onClick: () => {
                c.dispatchCommand(ht, "center");
              },
              className: "toolbar-item spaced",
              "aria-label": "Center Align",
              children: /* @__PURE__ */ f.jsx(bl, {})
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              disabled: e,
              onClick: () => {
                c.dispatchCommand(ht, "right");
              },
              className: "toolbar-item spaced",
              "aria-label": "Right Align",
              children: /* @__PURE__ */ f.jsx(yl, {})
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              disabled: e,
              onClick: () => {
                c.dispatchCommand(ht, "justify");
              },
              className: "toolbar-item",
              "aria-label": "Justify Align",
              children: /* @__PURE__ */ f.jsx(wl, {})
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              disabled: e,
              onClick: () => {
                o("Insert Image", (_) => /* @__PURE__ */ f.jsx(
                  Ec,
                  {
                    activeEditor: c,
                    onClose: _,
                    InsertImageFromListDialogBody: t
                  }
                ));
              },
              className: "toolbar-item",
              "aria-label": "Justify Align",
              children: /* @__PURE__ */ f.jsx(Rc, {})
            }
          ),
          r == null ? void 0 : r.map((_, v) => /* @__PURE__ */ f.jsx(Yt.Fragment, { children: _ }, v))
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "toolbar-templates-lexical-right", children: /* @__PURE__ */ f.jsx(
          ul,
          {
            isLoading: n === void 0 ? !1 : n
          }
        ) }),
        i
      ]
    }
  );
}
function Be(n) {
  return n ? "active toolbar-item" : "toolbar-item";
}
function Ic({
  editor: n,
  blockType: e,
  disabled: t = !1,
  container: r
}) {
  return /* @__PURE__ */ f.jsxs(
    po,
    {
      disabled: t,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-type " + e,
      buttonLabel: $o[e],
      buttonAriaLabel: "Formatting options for text style",
      container: r,
      children: [
        /* @__PURE__ */ f.jsx(
          Ue,
          {
            className: "item wide " + Be(e === "paragraph"),
            onClick: () => tn(n),
            children: /* @__PURE__ */ f.jsx("div", { className: "icon-text-container", children: /* @__PURE__ */ f.jsx("span", { className: "text", children: "Normal" }) })
          }
        ),
        /* @__PURE__ */ f.jsx(
          Ue,
          {
            className: "item wide " + Be(e === "h1"),
            onClick: () => yn(n, e, "h1"),
            children: /* @__PURE__ */ f.jsx("div", { className: "icon-text-container", children: /* @__PURE__ */ f.jsx("span", { className: "text", children: "Heading 1" }) })
          }
        ),
        /* @__PURE__ */ f.jsx(
          Ue,
          {
            className: "item wide " + Be(e === "h2"),
            onClick: () => yn(n, e, "h2"),
            children: /* @__PURE__ */ f.jsx("div", { className: "icon-text-container", children: /* @__PURE__ */ f.jsx("span", { className: "text", children: "Heading 2" }) })
          }
        ),
        /* @__PURE__ */ f.jsx(
          Ue,
          {
            className: "item wide " + Be(e === "h3"),
            onClick: () => yn(n, e, "h3"),
            children: /* @__PURE__ */ f.jsx("div", { className: "icon-text-container", children: /* @__PURE__ */ f.jsx("span", { className: "text", children: "Heading 3" }) })
          }
        ),
        /* @__PURE__ */ f.jsx(
          Ue,
          {
            className: "item wide " + Be(e === "bullet"),
            onClick: () => oc(n, e),
            children: /* @__PURE__ */ f.jsx("div", { className: "icon-text-container", children: /* @__PURE__ */ f.jsx("span", { className: "text", children: "Bullet List" }) })
          }
        ),
        /* @__PURE__ */ f.jsx(
          Ue,
          {
            className: "item wide " + Be(e === "number"),
            onClick: () => ac(n, e),
            children: /* @__PURE__ */ f.jsx("div", { className: "icon-text-container", children: /* @__PURE__ */ f.jsx("span", { className: "text", children: "Numbered List" }) })
          }
        ),
        /* @__PURE__ */ f.jsx(
          Ue,
          {
            className: "item wide " + Be(e === "check"),
            onClick: () => {
              console.log("blockType!!", e), sc(n, e);
            },
            children: /* @__PURE__ */ f.jsx("div", { className: "icon-text-container", children: /* @__PURE__ */ f.jsx("span", { className: "text", children: "Check List" }) })
          }
        )
      ]
    }
  );
}
class Dc extends hs {
  constructor(e) {
    super(e), this.state = { hasError: !1 };
  }
  // Method to update state when an error occurs
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  // Method to capture errors and call the onError function from props
  componentDidCatch(e, t) {
    console.error("ErrorBoundary caught an error", e, t), this.props.onError(e);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ f.jsx("div", { children: "Something went wrong." }) : this.props.children;
  }
}
function Lc(n) {
  const e = /^```html\s*([\s\S]*?)\s*```$/m, t = n.match(e);
  t && (n = t[1]);
  const i = new DOMParser().parseFromString(n, "text/html");
  return i.body && i.body.innerHTML && i.body.innerHTML.trim() !== "" ? i.body.innerHTML : n;
}
const Mc = ({
  initialContent: n
}) => {
  const [e] = te(), t = he();
  return j(() => {
    t.current = n, e.update(() => {
      let r = Lc(n);
      r.includes("<") || (r = `<p>${r}</p>`);
      const o = new DOMParser().parseFromString(r, "text/html"), s = document.implementation.createHTMLDocument();
      s.body.innerHTML = o.body ? o.body.innerHTML : o.documentElement.innerHTML;
      const a = yt(e, s), l = be();
      l.clear(), a.forEach((u) => {
        l.append(u);
      });
      const c = l.getFirstChild();
      c && c.selectStart();
    });
  }, [e, n]), null;
};
function $c() {
  const [n] = te();
  return j(() => {
    if (!n.hasNodes([Ke, $e])) throw new Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
  }, [n]), function(e) {
    j(() => Jl(e), [e]);
  }(n), null;
}
function Pc({ validateUrl: n, attributes: e }) {
  const [t] = te();
  return j(() => {
    if (!t.hasNodes([Je])) throw new Error("LinkPlugin: LinkNode not registered on editor");
    return we(t.registerCommand(bi, (r) => {
      if (r === null) return wn(r), !0;
      if (typeof r == "string") return !(n !== void 0 && !n(r)) && (wn(r, e), !0);
      {
        const { url: i, target: o, rel: s, title: a } = r;
        return wn(i, { ...e, rel: s, target: o, title: a }), !0;
      }
    }, oe), n !== void 0 ? t.registerCommand(zn, (r) => {
      const i = O();
      if (!k(i) || i.isCollapsed() || !De(r, ClipboardEvent)) return !1;
      const o = r;
      if (o.clipboardData === null) return !1;
      const s = o.clipboardData.getData("text");
      return !!n(s) && !i.getNodes().some((a) => D(a)) && (t.dispatchCommand(bi, { ...e, url: s }), r.preventDefault(), !0);
    }, oe) : () => {
    });
  }, [t, n, e]), null;
}
function jc({ readOnly: n }) {
  const [e] = te();
  return j(() => {
    e.setEditable(!n);
  }, [e, n]), null;
}
function zc() {
  const [n] = te();
  return j(() => {
    const e = (t) => {
      if (t.detail && typeof t.detail == "string" && n) {
        const i = new DOMParser().parseFromString(t.detail, "text/html");
        n.update(() => {
          const o = O();
          if (k(o)) {
            const s = o.anchor.getNode(), a = o.focus.getNode();
            if (!s || !a || !s.getParent() || !a.getParent()) {
              console.warn(
                "Invalid selection detected. Falling back to root insertion."
              );
              const c = yt(n, i), u = be();
              c.forEach((g) => u.append(g));
              return;
            }
            const l = yt(n, i);
            o.insertNodes(l);
          } else {
            console.warn(
              "No valid range selection. Falling back to root insertion."
            );
            const s = yt(n, i), a = be();
            s.forEach((l) => a.append(l));
          }
        });
      }
    };
    return window.addEventListener(
      "addBlockInEditor",
      e
    ), () => {
      window.removeEventListener(
        "addBlockInEditor",
        e
      );
    };
  }, [n]), null;
}
function Uc() {
  const [n] = te();
  return j(() => we(
    n.registerCommand(
      Oo,
      () => (Vl(n, "check"), !0),
      oe
    ),
    // Add ENTER key handler
    n.registerCommand(
      Di,
      (e) => {
        const t = O();
        if (!k(t))
          return !1;
        const i = t.anchor.getNode();
        if (!z(i))
          return !1;
        const o = i.getParent();
        if (!I(o))
          return !1;
        if (i.getTextContent().trim() === "") {
          e == null || e.preventDefault();
          const s = q();
          return console.log(i, o), o.insertAfter(s), s.select(), i.remove(), !0;
        }
        return !1;
      },
      Et
    ),
    n.registerCommand(
      Mi,
      (e) => Ei(e, n, !1),
      oe
    ),
    n.registerCommand(
      $i,
      (e) => Ei(e, n, !0),
      oe
    ),
    n.registerCommand(
      Ii,
      (e) => {
        if (Dn() != null) {
          const r = n.getRootElement();
          return r != null && r.focus(), !0;
        }
        return !1;
      },
      oe
    ),
    n.registerCommand(
      Fi,
      (e) => {
        const t = Dn();
        return t != null && n.isEditable() ? (n.update(() => {
          const r = Me(t);
          z(r) && (e.preventDefault(), r.toggleChecked());
        }), !0) : !1;
      },
      oe
    ),
    n.registerCommand(
      Li,
      (e) => n.getEditorState().read(() => {
        const t = O();
        if (k(t) && t.isCollapsed()) {
          const { anchor: r } = t, i = r.type === "element";
          if (i || r.offset === 0) {
            const o = r.getNode(), s = me(
              o,
              (a) => D(a) && !a.isInline()
            );
            if (z(s)) {
              const a = s.getParent();
              if (I(a) && a.getListType() === "check" && (i || s.getFirstDescendant() === o)) {
                const l = n.getElementByKey(s.__key);
                if (l != null && document.activeElement !== l)
                  return l.focus(), e.preventDefault(), !0;
              }
            }
          }
        }
        return !1;
      }),
      oe
    ),
    n.registerRootListener((e, t) => {
      e !== null && (e.addEventListener("click", vi), e.addEventListener("pointerdown", xi)), t !== null && (t.removeEventListener("click", vi), t.removeEventListener("pointerdown", xi));
    })
  )), null;
}
function Uo(n, e) {
  const t = n.target;
  if (t === null || !Q(t))
    return;
  const r = t.firstChild;
  if (r !== null && Q(r) && (r.tagName === "UL" || r.tagName === "OL"))
    return;
  const i = t.parentNode;
  if (!i || i.__lexicalListType !== "check")
    return;
  const o = t.getBoundingClientRect(), s = n.pageX / io(t);
  (t.dir === "rtl" ? s < o.right && s > o.right - 20 : s > o.left && s < o.left + 20) && e();
}
function vi(n) {
  Uo(n, () => {
    const e = n.target;
    if (e !== null && Q(e)) {
      const t = e, r = Xs(t);
      r != null && r.isEditable() && r.update(() => {
        const i = Me(t);
        z(i) && (t.focus(), i.toggleChecked());
      });
    }
  });
}
function xi(n) {
  Uo(n, () => {
    n.preventDefault();
  });
}
function Dn() {
  const n = document.activeElement;
  return n !== null && Q(n) && n.tagName === "LI" && n.parentNode != null && // @ts-expect-error internal field Type mismatch due to legacy API
  n.parentNode.__lexicalListType === "check" ? n : null;
}
function Bc(n, e) {
  let t = e ? n.getPreviousSibling() : n.getNextSibling(), r = n;
  for (; t == null && z(r); )
    r = r.getParentOrThrow().getParent(), r != null && (t = e ? r.getPreviousSibling() : r.getNextSibling());
  for (; z(t); ) {
    const i = e ? t.getLastChild() : t.getFirstChild();
    if (!I(i))
      return t;
    t = e ? i.getLastChild() : i.getFirstChild();
  }
  return null;
}
function Ei(n, e, t) {
  const r = Dn();
  return r != null && e.update(() => {
    const i = Me(r);
    if (!z(i))
      return;
    const o = Bc(i, t);
    if (o != null) {
      o.selectStart();
      const s = e.getElementByKey(o.__key);
      s != null && (n.preventDefault(), setTimeout(() => {
        s.focus();
      }, 0));
    }
  }), !1;
}
const Ci = [
  "image/",
  "image/heic",
  "image/heif",
  "image/gif",
  "image/webp"
];
function Wc() {
  const [n] = te();
  return j(() => n.registerCommand(
    An,
    (e) => ((async () => {
      const t = await Ca(
        e,
        [Ci].flatMap((r) => r)
      );
      for (const { file: r, result: i } of t)
        to(r, Ci) && n.dispatchCommand(rn, {
          altText: r.name,
          src: i
        });
    })(), !0),
    oe
  ), [n]), null;
}
const Hc = Vt.lazy(() => import("./InlineImageComponent-hHZqMorS.js"));
function Kc(n) {
  if (Q(n) && n.nodeName === "IMG") {
    const { alt: e, src: t, width: r, height: i } = n;
    return { node: Qn({ altText: e, height: i, src: t, width: r }) };
  }
  return null;
}
class at extends Kn {
  static getType() {
    return "inline-image";
  }
  static clone(e) {
    return new at(
      e.__src,
      e.__altText,
      e.__position,
      e.__width,
      e.__height,
      e.__showCaption,
      e.__caption,
      e.__key
    );
  }
  static importJSON(e) {
    const { altText: t, height: r, width: i, caption: o, src: s, showCaption: a, position: l } = e, c = Qn({
      altText: t,
      height: r,
      position: l,
      showCaption: a,
      src: s,
      width: i
    }), u = c.__caption, g = u.parseEditorState(o.editorState);
    return g.isEmpty() || u.setEditorState(g), c;
  }
  static importDOM() {
    return {
      img: (e) => ({
        conversion: Kc,
        priority: 0
      })
    };
  }
  constructor(e, t, r, i, o, s, a, l) {
    super(l), this.__src = e, this.__altText = t, this.__width = i || "inherit", this.__height = o || "inherit", this.__showCaption = s || !1, this.__caption = a || Mn(), this.__position = r;
  }
  exportDOM() {
    const e = document.createElement("img");
    return e.setAttribute("src", this.__src), e.setAttribute("alt", this.__altText), e.setAttribute("width", this.__width.toString()), e.setAttribute("height", this.__height.toString()), { element: e };
  }
  exportJSON() {
    return {
      altText: this.getAltText(),
      caption: this.__caption.toJSON(),
      height: this.__height === "inherit" ? 0 : this.__height,
      position: this.__position,
      showCaption: this.__showCaption,
      src: this.getSrc(),
      type: "inline-image",
      version: 1,
      width: this.__width === "inherit" ? 0 : this.__width
    };
  }
  getSrc() {
    return this.__src;
  }
  getAltText() {
    return this.__altText;
  }
  setAltText(e) {
    const t = this.getWritable();
    t.__altText = e;
  }
  setWidthAndHeight(e, t) {
    const r = this.getWritable();
    r.__width = e, r.__height = t;
  }
  getShowCaption() {
    return this.__showCaption;
  }
  setShowCaption(e) {
    const t = this.getWritable();
    t.__showCaption = e;
  }
  getPosition() {
    return this.__position;
  }
  setPosition(e) {
    const t = this.getWritable();
    t.__position = e;
  }
  update(e) {
    const t = this.getWritable(), { altText: r, showCaption: i, position: o } = e;
    r !== void 0 && (t.__altText = r), i !== void 0 && (t.__showCaption = i), o !== void 0 && (t.__position = o);
  }
  // View
  createDOM(e) {
    const t = document.createElement("span"), r = `${e.theme.inlineImage} position-${this.__position}`;
    return r !== void 0 && (t.className = r), t;
  }
  updateDOM(e, t, r) {
    const i = this.__position;
    if (i !== e.__position) {
      const o = `${r.theme.inlineImage} position-${i}`;
      o !== void 0 && (t.className = o);
    }
    return !1;
  }
  decorate() {
    return /* @__PURE__ */ f.jsx(Ln, { fallback: null, children: /* @__PURE__ */ f.jsx(
      Hc,
      {
        src: this.__src,
        altText: this.__altText,
        width: this.__width,
        height: this.__height,
        nodeKey: this.getKey(),
        showCaption: this.__showCaption,
        caption: this.__caption,
        position: this.__position
      }
    ) });
  }
}
function Qn({
  altText: n,
  position: e,
  height: t,
  src: r,
  width: i,
  showCaption: o,
  caption: s,
  key: a
}) {
  return fe(
    new at(
      r,
      n,
      e,
      i,
      t,
      o,
      s,
      a
    )
  );
}
function Jc(n) {
  return n instanceof at;
}
function Vc() {
  const [n] = te();
  return j(() => {
    if (!n.hasNodes([at]))
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    return we(
      n.registerCommand(
        Po,
        (e) => {
          const t = Qn(e);
          return Hn([t]), Le(t.getParentOrThrow()) && ro(t, q).selectEnd(), !0;
        },
        M
      ),
      n.registerCommand(
        Bn,
        (e) => Gc(e),
        Et
      ),
      n.registerCommand(
        Un,
        (e) => qc(e),
        oe
      ),
      n.registerCommand(
        Wn,
        (e) => Zc(e, n),
        Et
      )
    );
  }, [n]), null;
}
const Yc = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Bo = document.createElement("img");
Bo.src = Yc;
function Gc(n) {
  const e = er();
  if (!e)
    return !1;
  const t = n.dataTransfer;
  return t ? (t.setData("text/plain", "_"), t.setDragImage(Bo, 0, 0), t.setData(
    "application/x-lexical-drag",
    JSON.stringify({
      data: {
        altText: e.__altText,
        caption: e.__caption,
        height: e.__height,
        key: e.getKey(),
        showCaption: e.__showCaption,
        src: e.__src,
        width: e.__width
      },
      type: "image"
    })
  ), !0) : !1;
}
function qc(n) {
  return er() ? (Wo(n) || n.preventDefault(), !0) : !1;
}
function Zc(n, e) {
  const t = er();
  if (!t)
    return !1;
  const r = Xc(n);
  if (!r)
    return !1;
  if (n.preventDefault(), Wo(n)) {
    const i = Qc(n);
    t.remove();
    const o = Gt();
    i != null && o.applyDOMRange(i), Ct(o), e.dispatchCommand(Po, r);
  }
  return !0;
}
function er() {
  const n = O();
  if (!Se(n))
    return null;
  const t = n.getNodes()[0];
  return Jc(t) ? t : null;
}
function Xc(n) {
  var i;
  const e = (i = n.dataTransfer) == null ? void 0 : i.getData("application/x-lexical-drag");
  if (!e)
    return null;
  const { type: t, data: r } = JSON.parse(e);
  return t !== "image" ? null : r;
}
function Wo(n) {
  const e = n.target;
  return !!(e !== null && Q(e) && !e.closest("code, span.editor-image") && e.parentElement !== null && Q(e.parentElement) && e.parentElement.closest("div.ContentEditable__root"));
}
function Qc(n) {
  let e;
  const t = n.target, r = t == null ? null : t.nodeType === 9 ? t.defaultView : t.ownerDocument.defaultView, i = qt(r);
  if (document.caretRangeFromPoint)
    e = document.caretRangeFromPoint(n.clientX, n.clientY);
  else if (n.rangeParent && i !== null)
    i.collapse(n.rangeParent, n.rangeOffset || 0), e = i.getRangeAt(0);
  else
    throw Error("Cannot get the selection when dragging");
  return e;
}
function eu(n) {
  const t = new DOMParser().parseFromString(n, "text/html");
  return t.body.querySelectorAll("*").forEach((r) => {
    r.removeAttribute("style");
  }), t.body.innerHTML;
}
function tu() {
  const [n] = te();
  return j(() => n.registerCommand(
    zn,
    (e) => {
      if (e) {
        const t = e.clipboardData;
        if (t) {
          const r = t.getData("text/html");
          if (r) {
            const i = eu(r);
            return n.update(() => {
              const o = O();
              k(o) && new DOMParser().parseFromString(
                i,
                "text/html"
              ).body.childNodes.forEach((l) => {
                if (l.nodeType === Node.TEXT_NODE)
                  o.insertText(l.textContent || "");
                else if (l.nodeType === Node.ELEMENT_NODE) {
                  const c = q();
                  c.append(
                    Wi(l.textContent || "")
                  ), o.insertNodes([c]);
                }
              });
            }), !0;
          }
        }
      }
      return !1;
    },
    1
    // Priority of the command
  ), [n]), null;
}
class wt extends ye {
  constructor(e) {
    super(e), this.__attributes = {};
  }
  static getType() {
    return "div";
  }
  static clone(e) {
    const t = new wt(e.__key);
    return t.setAttributes(e.getAttributes()), t;
  }
  static importDOM() {
    return {
      //   div: () => ({
      //     conversion: (element: HTMLElement) => {
      //       console.log("Importing <div>: ", element);
      //       const node = new DivNode();
      //       node.setAttributesFromElement(element);
      //       return { node };
      //     },
      //     priority: 1,
      //   }),
      div: () => ({
        conversion: (e) => {
          const t = new wt(), r = Array.from(e.attributes).reduce(
            (i, o) => ({ ...i, [o.name]: o.value }),
            {}
          );
          return t.setAttributes(r), { node: t };
        },
        priority: 2
      })
    };
  }
  createDOM(e) {
    const t = document.createElement("div");
    return this.applyAttributesToDOM(t), t;
  }
  updateDOM(e, t) {
    return Object.entries(this.__attributes).some(
      ([i, o]) => e.__attributes[i] !== o
    ) ? (this.applyAttributesToDOM(t), !0) : !1;
  }
  static importJSON(e) {
    console.log("importJSON");
    const t = new wt();
    return t.setAttributes(e.attributes || {}), t;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "div",
      version: 1,
      attributes: this.__attributes
    };
  }
  setAttributesFromElement(e) {
    const t = {};
    Array.from(e.attributes).forEach(({ name: r, value: i }) => {
      t[r] = i;
    }), this.__attributes = t;
  }
  applyAttributesToDOM(e) {
    const t = this.getAttributes();
    Object.entries(t).forEach(([r, i]) => {
      i != null && e.setAttribute(r, i);
    });
  }
  setAttributes(e) {
    this.__attributes = e;
  }
  getAttributes() {
    return this.__attributes;
  }
  isInline() {
    return !1;
  }
}
class Fe extends ot {
  constructor(e, t, r = {}) {
    super(e, t), this.__attributes = r;
  }
  static getType() {
    return "custom-heading";
  }
  static clone(e) {
    return new Fe(e.__tag, e.__key, e.__attributes);
  }
  static importDOM() {
    return {
      h1: () => ({
        conversion: (e) => {
          const t = {};
          return Array.from(e.attributes).forEach(({ name: i, value: o }) => {
            t[i] = o;
          }), { node: new Fe("h1", void 0, t) };
        },
        priority: 2
      }),
      h2: () => ({
        conversion: (e) => {
          const t = {};
          return Array.from(e.attributes).forEach(({ name: i, value: o }) => {
            t[i] = o;
          }), { node: new Fe("h2", void 0, t) };
        },
        priority: 2
      }),
      h3: () => ({
        conversion: (e) => {
          const t = {};
          return Array.from(e.attributes).forEach(({ name: i, value: o }) => {
            t[i] = o;
          }), { node: new Fe("h3", void 0, t) };
        },
        priority: 2
      }),
      h4: () => ({
        conversion: (e) => {
          const t = {};
          return Array.from(e.attributes).forEach(({ name: i, value: o }) => {
            t[i] = o;
          }), { node: new Fe("h4", void 0, t) };
        },
        priority: 2
      })
    };
  }
  static importJSON(e) {
    const { tag: t, attributes: r } = e;
    return new Fe(t, void 0, r);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "custom-heading",
      version: 1,
      attributes: this.__attributes
    };
  }
  createDOM(e) {
    const t = super.createDOM(e);
    return this.applyAttributesToDOM(t), t;
  }
  updateDOM(e, t, r) {
    return JSON.stringify(this.__attributes) !== JSON.stringify(e.__attributes) && this.applyAttributesToDOM(t), super.updateDOM(e, t, r);
  }
  applyAttributesToDOM(e) {
    Object.entries(this.__attributes).forEach(([t, r]) => {
      e.setAttribute(t, r);
    });
  }
  setAttributes(e) {
    const t = this.getWritable();
    t.__attributes = e;
  }
  getAttributes() {
    return this.__attributes;
  }
}
class vt extends ye {
  constructor(e) {
    super(e), this.__attributes = {};
  }
  static getType() {
    return "input";
  }
  static clone(e) {
    const t = new vt(e.__key);
    return t.setAttributes(e.getAttributes()), t;
  }
  static importDOM() {
    return {
      input: () => ({
        conversion: (e) => {
          const t = new vt(), r = Array.from(e.attributes).reduce(
            (i, o) => ({ ...i, [o.name]: o.value }),
            {}
          );
          return t.setAttributes(r), { node: t };
        },
        priority: 2
      })
    };
  }
  createDOM(e) {
    const t = document.createElement("input");
    return this.applyAttributesToDOM(t), t;
  }
  updateDOM(e, t) {
    return Object.entries(this.__attributes).some(
      ([i, o]) => e.__attributes[i] !== o
    ) ? (this.applyAttributesToDOM(t), !0) : !1;
  }
  static importJSON(e) {
    const t = new vt();
    return t.setAttributes(e.attributes || {}), t;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "input",
      version: 1,
      attributes: this.__attributes
    };
  }
  setAttributesFromElement(e) {
    const t = {};
    Array.from(e.attributes).forEach(({ name: r, value: i }) => {
      t[r] = i;
    }), this.__attributes = t;
  }
  applyAttributesToDOM(e) {
    const t = this.getAttributes();
    Object.entries(t).forEach(([r, i]) => {
      i != null && e.setAttribute(r, i);
    });
  }
  setAttributes(e) {
    this.__attributes = e;
  }
  getAttributes() {
    return this.__attributes;
  }
  isInline() {
    return !0;
  }
}
class xt extends Kn {
  // <== Хранение стилей
  // ====== 1) Node Type ======
  static getType() {
    return "field-node";
  }
  // ====== 2) Cloning ======
  static clone(e) {
    return new xt(
      e.__attributes,
      e.__text,
      e.__style,
      e.__key
    );
  }
  // ====== 3) Constructor ======
  constructor(e, t, r, i) {
    super(i), this.__attributes = e || {}, this.__text = t || "", this.__style = r;
  }
  // ====== 4) Import from DOM ======
  static importDOM() {
    return {
      span: (e) => e.classList.contains("dragged-field") && e.classList.contains("not-merged") || e.classList.contains("noValue") || e.classList.contains("noValueOutput") || e.style && e.style.color ? {
        conversion: (t) => {
          const r = {};
          for (const { name: s, value: a } of Array.from(t.attributes))
            r[s] = a;
          const i = t.textContent || "", o = t.getAttribute("style") || "";
          return { node: new xt(r, i, o) };
        },
        priority: 2
      } : null
    };
  }
  // ====== 5) Import from JSON ======
  static importJSON(e) {
    const { attributes: t, text: r, style: i } = e;
    return new xt(t, r, i);
  }
  // ====== 6) Export to JSON ======
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "field-node",
      version: 1,
      attributes: this.__attributes,
      text: this.__text,
      style: this.__style
      // <== Экспортируем style
    };
  }
  // ====== 7) Create DOM Element ======
  createDOM(e, t) {
    const r = document.createElement("span");
    for (const [i, o] of Object.entries(this.__attributes))
      r.setAttribute(i, o);
    return this.__style && r.setAttribute("style", this.__style), r.textContent = this.__text, r.classList.contains("dragged-field") && r.classList.contains("not-merged") && (r.contentEditable = "false", r.tabIndex = -1, r.setAttribute("data-lexical-field", "true"), r.addEventListener("click", (i) => {
      if (!t.isEditable())
        return;
      const { clientX: o, target: s } = i, l = s.getBoundingClientRect(), c = l.right - 20;
      o >= c && o <= l.right && (i.stopPropagation(), t.update(() => {
        const u = this.getLatest();
        u && u.remove();
      }));
    })), r;
  }
  // ====== 8) Update DOM on Changes ======
  updateDOM(e, t) {
    if (this.__text !== e.__text && (t.textContent = this.__text), this.__attributes !== e.__attributes)
      for (const [r, i] of Object.entries(this.__attributes))
        t.setAttribute(r, i);
    return this.__style !== e.__style && t.setAttribute("style", this.__style || ""), !1;
  }
  // exportDOM(options: any = {}): DOMExportOutput {
  //   const element = super.exportDOM(options).element;
  //   if (this.__style) {
  //     element.style.cssText = this.__style;
  //   }
  //   return { element };
  // }
  // ====== 9) Render via React (Decorate) ======
  decorate(e, t) {
    return null;
  }
}
const nu = {
  code: "editor-code",
  heading: {
    h1: "editor-heading-h1",
    h2: "editor-heading-h2",
    h3: "editor-heading-h3",
    h4: "editor-heading-h4",
    h5: "editor-heading-h5"
  },
  image: "editor-image",
  inlineImage: "inline-editor-image",
  link: "editor-link",
  list: {
    checklist: "editor-checklist",
    listitem: "editor-listitem",
    nested: {
      listitem: "editor-nested-listitem"
    },
    listitemChecked: "editor-listItemChecked",
    listitemUnchecked: "editor-listItemUnchecked",
    olDepth: [
      "editor-ol1",
      "editor-ol2",
      "editor-ol3",
      "editor-ol4",
      "editor-ol5"
    ],
    ol: "editor-list-ol",
    ul: "editor-list-ul"
  },
  ltr: "ltr",
  paragraph: "editor-paragraph",
  placeholder: "editor-placeholder",
  quote: "editor-quote",
  rtl: "rtl",
  text: {
    bold: "editor-text-bold",
    code: "editor-text-code",
    hashtag: "editor-text-hashtag",
    italic: "editor-text-italic",
    overflowed: "editor-text-overflowed",
    strikethrough: "editor-text-strikethrough",
    underline: "editor-text-underline",
    underlineStrikethrough: "editor-text-underlineStrikethrough"
  }
}, ru = {
  namespace: "EditLexicalEditor",
  theme: nu,
  nodes: [
    wt,
    vt,
    xt,
    ot,
    Fe,
    Xt,
    st,
    at,
    Ke,
    $e,
    Je
  ],
  onError: (n) => {
    console.error(n);
  }
}, cu = ({
  initialContent: n = "",
  onContentChange: e,
  readOnly: t = !1,
  isAutosaving: r,
  toolbarHide: i,
  hideBorder: o,
  addButtonForToolbar: s
}) => {
  const [a, l] = Yt.useState("");
  return j(() => {
    l(n);
  }, [n]), /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsx("div", { className: "templates-editor-main-container", children: /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `lexical-editor-wrapper ${o ? "hide-border" : ""}`,
      children: /* @__PURE__ */ f.jsx(Al, { children: /* @__PURE__ */ f.jsx(
        ia,
        {
          initialConfig: { ...ru, editable: !t },
          children: /* @__PURE__ */ f.jsxs(
            "div",
            {
              className: `editor-container   ${t ? "readonly" : ""}`,
              children: [
                /* @__PURE__ */ f.jsx(zc, {}),
                !i && /* @__PURE__ */ f.jsx(
                  Fc,
                  {
                    isAutosaving: r,
                    isDisabled: t,
                    addButtonForToolbar: s
                  }
                ),
                /* @__PURE__ */ f.jsxs("div", { className: "editor-inner", children: [
                  /* @__PURE__ */ f.jsx(
                    Ja,
                    {
                      contentEditable: /* @__PURE__ */ f.jsx(qa, { className: "editor-input" }),
                      placeholder: /* @__PURE__ */ f.jsx("div", { className: "editor-placeholder", children: "Type something..." }),
                      ErrorBoundary: Dc
                    }
                  ),
                  /* @__PURE__ */ f.jsx(sl, {}),
                  /* @__PURE__ */ f.jsx(Wc, {}),
                  /* @__PURE__ */ f.jsx(Cc, {}),
                  /* @__PURE__ */ f.jsx(Vc, {}),
                  /* @__PURE__ */ f.jsx($c, {}),
                  /* @__PURE__ */ f.jsx(Uc, {}),
                  /* @__PURE__ */ f.jsx(Pc, {}),
                  /* @__PURE__ */ f.jsx(tu, {}),
                  /* @__PURE__ */ f.jsx(
                    ll,
                    {
                      onChange: (c, u) => {
                        c.read(() => {
                          const g = so(u);
                          e && e(g);
                        });
                      }
                    }
                  ),
                  /* @__PURE__ */ f.jsx(
                    Mc,
                    {
                      initialContent: a
                    }
                  ),
                  /* @__PURE__ */ f.jsx(jc, { readOnly: t })
                ] })
              ]
            }
          )
        }
      ) })
    }
  ) }) });
};
export {
  bc as $,
  au as D,
  cu as E,
  io as L,
  mo as T,
  aa as a,
  we as b,
  Jc as c,
  Pc as d,
  Ja as h,
  lu as i,
  f as j,
  te as o,
  Ji as r,
  na as t,
  hc as u,
  qa as x
};
