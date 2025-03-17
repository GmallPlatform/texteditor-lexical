import * as Gt from "react";
import qt, { useContext as Ni, createContext as ki, useMemo as we, useLayoutEffect as st, useEffect as j, useState as J, useRef as ge, Suspense as $n, forwardRef as Oi, useCallback as ke, useReducer as ms, Component as _s } from "react";
import { createEditor as Pn, $getRoot as ve, $createParagraphNode as G, $getSelection as R, $isDecoratorNode as it, $isElementNode as D, $isParagraphNode as jn, $isTextNode as V, $caretFromPoint as bs, $isExtendableTextPointCaret as ys, $extendCaretToRange as ws, $isChildCaret as vs, $isRootNode as Un, $getCharacterOffsets as xs, $isRangeSelection as O, $caretRangeFromSelection as Es, $isTokenOrSegmented as Ss, $createRangeSelection as Zt, INTERNAL_$isBlock as gn, $setSelection as At, $getChildCaret as Sn, makeStepwiseIterator as Cs, $isSiblingCaret as As, ArtificialNode__DO_NOT_USE as Ri, $createLineBreakNode as Bt, $isRootOrShadowRoot as Pe, $isBlockElementNode as Cn, isBlockDomNode as _r, isInlineDomNode as br, $cloneWithProperties as Fi, isHTMLElement as X, isDocumentFragment as yr, $createTabNode as zn, getDOMSelection as Xt, COPY_COMMAND as Ii, COMMAND_PRIORITY_CRITICAL as Ts, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND as Ns, $parseSerializedNode as ks, isSelectionWithinEditor as Os, $getEditor as Di, KEY_TAB_COMMAND as Rs, COMMAND_PRIORITY_EDITOR as M, KEY_SPACE_COMMAND as Li, PASTE_COMMAND as Bn, createCommand as Oe, isDOMNode as Fs, isSelectionCapturedInDecoratorInput as Is, CUT_COMMAND as Ds, $isNodeSelection as Ne, SELECT_ALL_COMMAND as Ls, $selectAll as Ms, DRAGOVER_COMMAND as Wn, $getNearestNodeFromDOMNode as je, DRAGSTART_COMMAND as Hn, DROP_COMMAND as Kn, $normalizeSelection__EXPERIMENTAL as Wt, KEY_ESCAPE_COMMAND as Mi, KEY_ENTER_COMMAND as $i, INSERT_LINE_BREAK_COMMAND as wr, INSERT_PARAGRAPH_COMMAND as An, KEY_DELETE_COMMAND as $s, DELETE_CHARACTER_COMMAND as fn, KEY_BACKSPACE_COMMAND as Ps, OUTDENT_CONTENT_COMMAND as vr, KEY_ARROW_RIGHT_COMMAND as js, KEY_ARROW_LEFT_COMMAND as Pi, KEY_ARROW_DOWN_COMMAND as ji, $getAdjacentNode as xr, KEY_ARROW_UP_COMMAND as Ui, INDENT_CONTENT_COMMAND as Us, INSERT_TAB_COMMAND as zs, $insertNodes as Jn, FORMAT_ELEMENT_COMMAND as mt, FORMAT_TEXT_COMMAND as _t, REMOVE_TEXT_COMMAND as Bs, CONTROLLED_TEXT_INSERTION_COMMAND as Ws, DELETE_LINE_COMMAND as Hs, DELETE_WORD_COMMAND as Ks, CLICK_COMMAND as Js, ElementNode as xe, $applyNodeReplacement as he, setNodeIndentFromDOM as zi, CAN_REDO_COMMAND as bt, CAN_UNDO_COMMAND as yt, CLEAR_HISTORY_COMMAND as Vs, CLEAR_EDITOR_COMMAND as Ys, REDO_COMMAND as Bi, UNDO_COMMAND as Wi, $isTabNode as Hi, $getSiblingCaret as Gs, TextNode as Ki, $createTextNode as Ji, COMMAND_PRIORITY_LOW as oe, $isLeafNode as Vi, $setPointFromCaret as Er, $normalizeCaret as Sr, setDOMUnmanaged as qs, $createPoint as Cr, TEXT_TYPE_TO_FORMAT as Zs, isCurrentlyReadOnlyMode as Xs, $isLineBreakNode as Qs, isHTMLAnchorElement as Yi, DecoratorNode as Vn, COMMAND_PRIORITY_HIGH as Ct, SELECTION_CHANGE_COMMAND as ea, getNearestEditorFromDOMNode as ta } from "lexical";
import { flushSync as na, createPortal as Yn } from "react-dom";
var Ar = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Tn = { exports: {} }, ft = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr;
function ra() {
  if (Tr) return ft;
  Tr = 1;
  var n = qt, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var c, f = {}, p = null, b = null;
    u !== void 0 && (p = "" + u), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (b = l.ref);
    for (c in l) r.call(l, c) && !o.hasOwnProperty(c) && (f[c] = l[c]);
    if (a && a.defaultProps) for (c in l = a.defaultProps, l) f[c] === void 0 && (f[c] = l[c]);
    return { $$typeof: e, type: a, key: p, ref: b, props: f, _owner: i.current };
  }
  return ft.Fragment = t, ft.jsx = s, ft.jsxs = s, ft;
}
var ht = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function ia() {
  return Nr || (Nr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = qt, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y = Symbol.iterator, v = "@@iterator";
    function x(d) {
      if (d === null || typeof d != "object")
        return null;
      var S = y && d[y] || d[v];
      return typeof S == "function" ? S : null;
    }
    var C = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(d) {
      {
        for (var S = arguments.length, T = new Array(S > 1 ? S - 1 : 0), F = 1; F < S; F++)
          T[F - 1] = arguments[F];
        m("error", d, T);
      }
    }
    function m(d, S, T) {
      {
        var F = C.ReactDebugCurrentFrame, z = F.getStackAddendum();
        z !== "" && (S += "%s", T = T.concat([z]));
        var W = T.map(function(P) {
          return String(P);
        });
        W.unshift("Warning: " + S), Function.prototype.apply.call(console[d], console, W);
      }
    }
    var w = !1, E = !1, _ = !1, A = !1, N = !1, k;
    k = Symbol.for("react.module.reference");
    function B(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === r || d === o || N || d === i || d === u || d === c || A || d === b || w || E || _ || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === f || d.$$typeof === s || d.$$typeof === a || d.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === k || d.getModuleId !== void 0));
    }
    function $(d, S, T) {
      var F = d.displayName;
      if (F)
        return F;
      var z = S.displayName || S.name || "";
      return z !== "" ? T + "(" + z + ")" : T;
    }
    function H(d) {
      return d.displayName || "Context";
    }
    function Q(d) {
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
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case a:
            var S = d;
            return H(S) + ".Consumer";
          case s:
            var T = d;
            return H(T._context) + ".Provider";
          case l:
            return $(d, d.render, "ForwardRef");
          case f:
            var F = d.displayName || null;
            return F !== null ? F : Q(d.type) || "Memo";
          case p: {
            var z = d, W = z._payload, P = z._init;
            try {
              return Q(P(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var pe = Object.assign, _e = 0, re, se, q, de, Te, ze, ae;
    function Ot() {
    }
    Ot.__reactDisabledLog = !0;
    function Se() {
      {
        if (_e === 0) {
          re = console.log, se = console.info, q = console.warn, de = console.error, Te = console.group, ze = console.groupCollapsed, ae = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: Ot,
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
        _e++;
      }
    }
    function Be() {
      {
        if (_e--, _e === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: pe({}, d, {
              value: re
            }),
            info: pe({}, d, {
              value: se
            }),
            warn: pe({}, d, {
              value: q
            }),
            error: pe({}, d, {
              value: de
            }),
            group: pe({}, d, {
              value: Te
            }),
            groupCollapsed: pe({}, d, {
              value: ze
            }),
            groupEnd: pe({}, d, {
              value: ae
            })
          });
        }
        _e < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Re = C.ReactCurrentDispatcher, Fe;
    function Ie(d, S, T) {
      {
        if (Fe === void 0)
          try {
            throw Error();
          } catch (z) {
            var F = z.stack.trim().match(/\n( *(at )?)/);
            Fe = F && F[1] || "";
          }
        return `
` + Fe + d;
      }
    }
    var qe = !1, De;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      De = new Ze();
    }
    function Rt(d, S) {
      if (!d || qe)
        return "";
      {
        var T = De.get(d);
        if (T !== void 0)
          return T;
      }
      var F;
      qe = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = Re.current, Re.current = null, Se();
      try {
        if (S) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (le) {
              F = le;
            }
            Reflect.construct(d, [], P);
          } else {
            try {
              P.call();
            } catch (le) {
              F = le;
            }
            d.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (le) {
            F = le;
          }
          d();
        }
      } catch (le) {
        if (le && F && typeof le.stack == "string") {
          for (var L = le.stack.split(`
`), ie = F.stack.split(`
`), K = L.length - 1, Y = ie.length - 1; K >= 1 && Y >= 0 && L[K] !== ie[Y]; )
            Y--;
          for (; K >= 1 && Y >= 0; K--, Y--)
            if (L[K] !== ie[Y]) {
              if (K !== 1 || Y !== 1)
                do
                  if (K--, Y--, Y < 0 || L[K] !== ie[Y]) {
                    var me = `
` + L[K].replace(" at new ", " at ");
                    return d.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", d.displayName)), typeof d == "function" && De.set(d, me), me;
                  }
                while (K >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        qe = !1, Re.current = W, Be(), Error.prepareStackTrace = z;
      }
      var Qe = d ? d.displayName || d.name : "", We = Qe ? Ie(Qe) : "";
      return typeof d == "function" && De.set(d, We), We;
    }
    function dt(d, S, T) {
      return Rt(d, !1);
    }
    function Vo(d) {
      var S = d.prototype;
      return !!(S && S.isReactComponent);
    }
    function Ft(d, S, T) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return Rt(d, Vo(d));
      if (typeof d == "string")
        return Ie(d);
      switch (d) {
        case u:
          return Ie("Suspense");
        case c:
          return Ie("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            return dt(d.render);
          case f:
            return Ft(d.type, S, T);
          case p: {
            var F = d, z = F._payload, W = F._init;
            try {
              return Ft(W(z), S, T);
            } catch {
            }
          }
        }
      return "";
    }
    var gt = Object.prototype.hasOwnProperty, rr = {}, ir = C.ReactDebugCurrentFrame;
    function It(d) {
      if (d) {
        var S = d._owner, T = Ft(d.type, d._source, S ? S.type : null);
        ir.setExtraStackFrame(T);
      } else
        ir.setExtraStackFrame(null);
    }
    function Yo(d, S, T, F, z) {
      {
        var W = Function.call.bind(gt);
        for (var P in d)
          if (W(d, P)) {
            var L = void 0;
            try {
              if (typeof d[P] != "function") {
                var ie = Error((F || "React class") + ": " + T + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              L = d[P](S, P, F, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (K) {
              L = K;
            }
            L && !(L instanceof Error) && (It(z), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", T, P, typeof L), It(null)), L instanceof Error && !(L.message in rr) && (rr[L.message] = !0, It(z), h("Failed %s type: %s", T, L.message), It(null));
          }
      }
    }
    var Go = Array.isArray;
    function an(d) {
      return Go(d);
    }
    function qo(d) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, T = S && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return T;
      }
    }
    function Zo(d) {
      try {
        return or(d), !1;
      } catch {
        return !0;
      }
    }
    function or(d) {
      return "" + d;
    }
    function sr(d) {
      if (Zo(d))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qo(d)), or(d);
    }
    var ar = C.ReactCurrentOwner, Xo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lr, ur;
    function Qo(d) {
      if (gt.call(d, "ref")) {
        var S = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function es(d) {
      if (gt.call(d, "key")) {
        var S = Object.getOwnPropertyDescriptor(d, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function ts(d, S) {
      typeof d.ref == "string" && ar.current;
    }
    function ns(d, S) {
      {
        var T = function() {
          lr || (lr = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        T.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function rs(d, S) {
      {
        var T = function() {
          ur || (ur = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        T.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var is = function(d, S, T, F, z, W, P) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: d,
        key: S,
        ref: T,
        props: P,
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
        value: F
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function os(d, S, T, F, z) {
      {
        var W, P = {}, L = null, ie = null;
        T !== void 0 && (sr(T), L = "" + T), es(S) && (sr(S.key), L = "" + S.key), Qo(S) && (ie = S.ref, ts(S, z));
        for (W in S)
          gt.call(S, W) && !Xo.hasOwnProperty(W) && (P[W] = S[W]);
        if (d && d.defaultProps) {
          var K = d.defaultProps;
          for (W in K)
            P[W] === void 0 && (P[W] = K[W]);
        }
        if (L || ie) {
          var Y = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          L && ns(P, Y), ie && rs(P, Y);
        }
        return is(d, L, ie, z, F, ar.current, P);
      }
    }
    var ln = C.ReactCurrentOwner, cr = C.ReactDebugCurrentFrame;
    function Xe(d) {
      if (d) {
        var S = d._owner, T = Ft(d.type, d._source, S ? S.type : null);
        cr.setExtraStackFrame(T);
      } else
        cr.setExtraStackFrame(null);
    }
    var un;
    un = !1;
    function cn(d) {
      return typeof d == "object" && d !== null && d.$$typeof === e;
    }
    function dr() {
      {
        if (ln.current) {
          var d = Q(ln.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function ss(d) {
      return "";
    }
    var gr = {};
    function as(d) {
      {
        var S = dr();
        if (!S) {
          var T = typeof d == "string" ? d : d.displayName || d.name;
          T && (S = `

Check the top-level render call using <` + T + ">.");
        }
        return S;
      }
    }
    function fr(d, S) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var T = as(S);
        if (gr[T])
          return;
        gr[T] = !0;
        var F = "";
        d && d._owner && d._owner !== ln.current && (F = " It was passed a child from " + Q(d._owner.type) + "."), Xe(d), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, F), Xe(null);
      }
    }
    function hr(d, S) {
      {
        if (typeof d != "object")
          return;
        if (an(d))
          for (var T = 0; T < d.length; T++) {
            var F = d[T];
            cn(F) && fr(F, S);
          }
        else if (cn(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var z = x(d);
          if (typeof z == "function" && z !== d.entries)
            for (var W = z.call(d), P; !(P = W.next()).done; )
              cn(P.value) && fr(P.value, S);
        }
      }
    }
    function ls(d) {
      {
        var S = d.type;
        if (S == null || typeof S == "string")
          return;
        var T;
        if (typeof S == "function")
          T = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === f))
          T = S.propTypes;
        else
          return;
        if (T) {
          var F = Q(S);
          Yo(T, d.props, "prop", F, d);
        } else if (S.PropTypes !== void 0 && !un) {
          un = !0;
          var z = Q(S);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function us(d) {
      {
        for (var S = Object.keys(d.props), T = 0; T < S.length; T++) {
          var F = S[T];
          if (F !== "children" && F !== "key") {
            Xe(d), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), Xe(null);
            break;
          }
        }
        d.ref !== null && (Xe(d), h("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
      }
    }
    var pr = {};
    function mr(d, S, T, F, z, W) {
      {
        var P = B(d);
        if (!P) {
          var L = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = ss();
          ie ? L += ie : L += dr();
          var K;
          d === null ? K = "null" : an(d) ? K = "array" : d !== void 0 && d.$$typeof === e ? (K = "<" + (Q(d.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : K = typeof d, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", K, L);
        }
        var Y = os(d, S, T, z, W);
        if (Y == null)
          return Y;
        if (P) {
          var me = S.children;
          if (me !== void 0)
            if (F)
              if (an(me)) {
                for (var Qe = 0; Qe < me.length; Qe++)
                  hr(me[Qe], d);
                Object.freeze && Object.freeze(me);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              hr(me, d);
        }
        if (gt.call(S, "key")) {
          var We = Q(d), le = Object.keys(S).filter(function(ps) {
            return ps !== "key";
          }), dn = le.length > 0 ? "{key: someKey, " + le.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!pr[We + dn]) {
            var hs = le.length > 0 ? "{" + le.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, dn, We, hs, We), pr[We + dn] = !0;
          }
        }
        return d === r ? us(Y) : ls(Y), Y;
      }
    }
    function cs(d, S, T) {
      return mr(d, S, T, !0);
    }
    function ds(d, S, T) {
      return mr(d, S, T, !1);
    }
    var gs = ds, fs = cs;
    ht.Fragment = r, ht.jsx = gs, ht.jsxs = fs;
  }()), ht;
}
process.env.NODE_ENV === "production" ? Tn.exports = ra() : Tn.exports = ia();
var g = Tn.exports;
const Gi = ki(null);
function oa(n, e) {
  let t = null;
  return n != null && (t = n[1]), { getTheme: function() {
    return e ?? (t != null ? t.getTheme() : null);
  } };
}
function ne() {
  const n = Ni(Gi);
  return n == null && function(e, ...t) {
    const r = new URL("https://lexical.dev/docs/error"), i = new URLSearchParams();
    i.append("code", e);
    for (const o of t) i.append("v", o);
    throw r.search = i.toString(), Error(`Minified Lexical error #${e}; visit ${r.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }(8), n;
}
const qi = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, sa = qi ? st : j, Dt = { tag: "history-merge" };
function aa({ initialConfig: n, children: e }) {
  const t = we(() => {
    const { theme: r, namespace: i, nodes: o, onError: s, editorState: a, html: l } = n, u = oa(null, r), c = Pn({ editable: n.editable, html: l, namespace: i, nodes: o, onError: (f) => s(f, c), theme: r });
    return function(f, p) {
      if (p !== null) {
        if (p === void 0) f.update(() => {
          const b = ve();
          if (b.isEmpty()) {
            const y = G();
            b.append(y);
            const v = qi ? document.activeElement : null;
            (R() !== null || v !== null && v === f.getRootElement()) && y.select();
          }
        }, Dt);
        else if (p !== null) switch (typeof p) {
          case "string": {
            const b = f.parseEditorState(p);
            f.setEditorState(b, Dt);
            break;
          }
          case "object":
            f.setEditorState(p, Dt);
            break;
          case "function":
            f.update(() => {
              ve().isEmpty() && p(f);
            }, Dt);
        }
      }
    }(c, a), [c, u];
  }, []);
  return sa(() => {
    const r = n.editable, [i] = t;
    i.setEditable(r === void 0 || r);
  }, []), g.jsx(Gi.Provider, { value: t, children: e });
}
const la = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? st : j;
function ua(n) {
  return { initialValueFn: () => n.isEditable(), subscribe: (e) => n.registerEditableListener(e) };
}
function ca() {
  return function(n) {
    const [e] = ne(), t = we(() => n(e), [e, n]), [r, i] = J(() => t.initialValueFn()), o = ge(r);
    return la(() => {
      const { initialValueFn: s, subscribe: a } = t, l = s();
      return o.current !== l && (o.current = l, i(l)), a((u) => {
        o.current = u, i(u);
      });
    }, [t, n]), r;
  }(ua);
}
function da() {
  return ve().getTextContent();
}
function ga(n, e = !0) {
  if (n) return !1;
  let t = da();
  return e && (t = t.trim()), t === "";
}
function fa(n) {
  if (!ga(n, !1)) return !1;
  const e = ve().getChildren(), t = e.length;
  if (t > 1) return !1;
  for (let r = 0; r < t; r++) {
    const i = e[r];
    if (it(i)) return !1;
    if (D(i)) {
      if (!jn(i) || i.__indent !== 0) return !1;
      const o = i.getChildren(), s = o.length;
      for (let a = 0; a < s; a++) {
        const l = o[r];
        if (!V(l)) return !1;
      }
    }
  }
  return !0;
}
function Zi(n) {
  return () => fa(n);
}
function Xi(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e) r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const Ht = /* @__PURE__ */ new Map();
function Qi(n) {
  const e = {};
  if (!n) return e;
  const t = n.split(";");
  for (const r of t) if (r !== "") {
    const [i, o] = r.split(/:([^]+)/);
    i && o && (e[i.trim()] = o.trim());
  }
  return e;
}
function Gn(n) {
  let e = Ht.get(n);
  return e === void 0 && (e = Qi(n), Ht.set(n, e)), e;
}
function ha(n) {
  let e = "";
  for (const t in n) t && (e += `${t}: ${n[t]};`);
  return e;
}
function eo(n, e) {
  const t = n.getStartEndPoints();
  if (e.isSelected(n) && !e.isSegmented() && !e.isToken() && t !== null) {
    const [r, i] = t, o = n.isBackward(), s = r.getNode(), a = i.getNode(), l = e.is(s), u = e.is(a);
    if (l || u) {
      const [c, f] = xs(n), p = s.is(a), b = e.is(o ? a : s), y = e.is(o ? s : a);
      let v, x = 0;
      return p ? (x = c > f ? f : c, v = c > f ? c : f) : b ? (x = o ? f : c, v = void 0) : y && (x = 0, v = o ? c : f), e.__text = e.__text.slice(x, v), e;
    }
  }
  return e;
}
function kr(n) {
  if (n.type === "text") return n.offset === n.getNode().getTextContentSize();
  const e = n.getNode();
  return D(e) || Xi(177), n.offset === e.getChildrenSize();
}
function pa(n) {
  const e = n.getStyle(), t = Qi(e);
  Ht.set(e, t);
}
function hn(n, e) {
  (O(n) ? n.isCollapsed() : V(n) || D(n)) || Xi(280);
  const t = Gn(O(n) ? n.style : V(n) ? n.getStyle() : n.getTextStyle()), r = Object.entries(e).reduce((o, [s, a]) => (typeof a == "function" ? o[s] = a(t[s], n) : a === null ? delete o[s] : o[s] = a, o), { ...t }), i = ha(r);
  O(n) || V(n) ? n.setStyle(i) : n.setTextStyle(i), Ht.set(i, r);
}
function ma(n, e) {
  if (O(n) && n.isCollapsed()) {
    hn(n, e);
    const t = n.anchor.getNode();
    D(t) && t.isEmpty() && hn(t, e);
  }
  _a((t) => {
    hn(t, e);
  });
}
function _a(n) {
  const e = R();
  if (!e) return;
  const t = /* @__PURE__ */ new Map();
  if (O(e)) for (const o of Es(e).getTextSlices()) o && t.set(o.caret.origin.getKey(), o.getSliceIndices());
  const r = e.getNodes();
  for (const o of r) {
    if (!V(o) || !o.canHaveFormat()) continue;
    const [s, a] = (i = o, t.get(i.getKey()) || [0, i.getTextContentSize()]);
    a !== s && (Ss(o) || s === 0 && a === o.getTextContentSize() ? n(o) : n(o.splitText(s, a)[s === 0 ? 0 : 1]));
  }
  var i;
  O(e) && e.anchor.type === "text" && e.focus.type === "text" && e.anchor.key === e.focus.key && ba(e);
}
function ba(n) {
  if (n.isBackward()) {
    const { anchor: e, focus: t } = n, { key: r, offset: i, type: o } = e;
    e.set(t.key, t.offset, t.type), t.set(r, i, o);
  }
}
function ya(n, e) {
  const t = n.getFormatType(), r = n.getIndent();
  t !== e.getFormatType() && e.setFormat(t), r !== e.getIndent() && e.setIndent(r);
}
function to(n, e, t = ya) {
  if (n === null) return;
  const r = n.getStartEndPoints(), i = /* @__PURE__ */ new Map();
  let o = null;
  if (r) {
    const [s, a] = r;
    o = Zt(), o.anchor.set(s.key, s.offset, s.type), o.focus.set(a.key, a.offset, a.type);
    const l = Fr(s.getNode(), gn), u = Fr(a.getNode(), gn);
    D(l) && i.set(l.getKey(), l), D(u) && i.set(u.getKey(), u);
  }
  for (const s of n.getNodes()) D(s) && gn(s) && i.set(s.getKey(), s);
  for (const [s, a] of i) {
    const l = e();
    t(a, l), a.replace(l, !0), o && (s === o.anchor.key && o.anchor.set(l.getKey(), o.anchor.offset, o.anchor.type), s === o.focus.key && o.focus.set(l.getKey(), o.focus.offset, o.focus.type));
  }
  o && n.is(R()) && At(o);
}
function Or(n, e) {
  const t = bs(n.focus, e ? "previous" : "next");
  if (ys(t)) return !1;
  for (const r of ws(t)) {
    if (vs(r)) return !r.origin.isInline();
    if (!D(r.origin)) {
      if (it(r.origin)) return !0;
      break;
    }
  }
  return !1;
}
function wa(n, e, t, r) {
  n.modify(e ? "extend" : "move", t, r);
}
function no(n) {
  const e = n.anchor.getNode();
  return (Un(e) ? e : e.getParentOrThrow()).getDirection() === "rtl";
}
function Rr(n, e, t) {
  const r = no(n);
  wa(n, e, t ? !r : r, "character");
}
function va(n, e, t) {
  const r = Gn(n.getStyle());
  return r !== null && r[e] || t;
}
function Lt(n, e, t = "") {
  let r = null;
  const i = n.getNodes(), o = n.anchor, s = n.focus, a = n.isBackward(), l = a ? s.offset : o.offset, u = a ? s.getNode() : o.getNode();
  if (O(n) && n.isCollapsed() && n.style !== "") {
    const c = Gn(n.style);
    if (c !== null && e in c) return c[e];
  }
  for (let c = 0; c < i.length; c++) {
    const f = i[c];
    if ((c === 0 || l !== 0 || !f.is(u)) && V(f)) {
      const p = va(f, e, t);
      if (r === null) r = p;
      else if (r !== p) {
        r = "";
        break;
      }
    }
  }
  return r === null ? t : r;
}
function Fr(n, e) {
  let t = n;
  for (; t !== null && t.getParent() !== null && !e(t); ) t = t.getParentOrThrow();
  return e(t) ? t : null;
}
function xa(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e) r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const Qt = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Ea = Qt && "documentMode" in document ? document.documentMode : null, Sa = Qt && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
!(!Qt || !("InputEvent" in window) || Ea) && "getTargetRanges" in new window.InputEvent("input");
function ro(...n) {
  const e = [];
  for (const t of n) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) e.push(r);
  return e;
}
function Ee(...n) {
  return () => {
    for (let e = n.length - 1; e >= 0; e--) n[e]();
    n.length = 0;
  };
}
const Ca = Qt, Aa = Sa;
function te(n, ...e) {
  const t = ro(...e);
  t.length > 0 && n.classList.add(...t);
}
function Ve(n, ...e) {
  const t = ro(...e);
  t.length > 0 && n.classList.remove(...t);
}
function io(n, e) {
  for (const t of e) if (n.type.startsWith(t)) return !0;
  return !1;
}
function Ta(n, e) {
  const t = n[Symbol.iterator]();
  return new Promise((r, i) => {
    const o = [], s = () => {
      const { done: a, value: l } = t.next();
      if (a) return r(o);
      const u = new FileReader();
      u.addEventListener("error", i), u.addEventListener("load", () => {
        const c = u.result;
        typeof c == "string" && o.push({ file: l, result: c }), s();
      }), io(l, e) ? u.readAsDataURL(l) : s();
    };
    s();
  });
}
function Na(n) {
  return n ? n.getAdjacentCaret() : null;
}
function oo(n, e) {
  let t = n;
  for (; t != null; ) {
    if (t instanceof e) return t;
    t = t.getParent();
  }
  return null;
}
function ka(n) {
  const e = ye(n, (t) => D(t) && !t.isInline());
  return D(e) || xa(4, n.__key), e;
}
const ye = (n, e) => {
  let t = n;
  for (; t !== ve() && t != null; ) {
    if (e(t)) return t;
    t = t.getParent();
  }
  return null;
};
function so(n, e) {
  const t = e();
  return n.replace(t), t.append(n), t;
}
function $e(n, e) {
  return n !== null && Object.getPrototypeOf(n).constructor.name === e.name;
}
let pn = !(Aa || !Ca) && void 0;
function ao(n) {
  let e = 1;
  if (function() {
    if (pn === void 0) {
      const t = document.createElement("div");
      t.style.cssText = "position: absolute; opacity: 0; width: 100px; left: -1000px;", document.body.appendChild(t);
      const r = t.getBoundingClientRect();
      t.style.setProperty("zoom", "2"), pn = t.getBoundingClientRect().width === r.width, document.body.removeChild(t);
    }
    return pn;
  }()) for (; n; ) e *= Number(window.getComputedStyle(n).getPropertyValue("zoom")), n = n.parentElement;
  return e;
}
function lo(n, e) {
  const t = [], r = Array.from(n).reverse();
  for (let i = r.pop(); i !== void 0; i = r.pop()) if (e(i)) t.push(i);
  else if (D(i)) for (const o of Oa(i)) r.push(o);
  return t;
}
function Oa(n) {
  return Ra(Sn(n, "previous"));
}
function Ra(n) {
  return Cs({ hasNext: As, initial: n.getAdjacentCaret(), map: (e) => e.origin.getLatest(), step: (e) => e.getAdjacentCaret() });
}
function Fa(n) {
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
            const [u, c, f, p, b, y] = l;
            n.update(() => {
              const v = R();
              if (O(v)) {
                const x = v.anchor;
                let C = x.getNode(), h = 0, m = 0;
                if (V(C) && u >= 0 && c >= 0 && (h = u, m = u + c, v.setTextNodeRange(C, h, C, m)), h === m && f === "" || (v.insertRawText(f), C = x.getNode()), V(C)) {
                  h = p, m = p + b;
                  const w = C.getTextContentSize();
                  h = h > w ? w : h, m = m > w ? w : m, v.setTextNodeRange(C, h, C, m);
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
function vt(n, e) {
  const t = e.body ? e.body.childNodes : [];
  let r = [];
  const i = [];
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    if (!go.has(s.nodeName)) {
      const a = fo(s, n, i, !1);
      a !== null && (r = r.concat(a));
    }
  }
  return function(o) {
    for (const s of o) s.getNextSibling() instanceof Ri && s.insertAfter(Bt());
    for (const s of o) {
      const a = s.getChildren();
      for (const l of a) s.insertBefore(l);
      s.remove();
    }
  }(i), r;
}
function uo(n, e) {
  if (typeof document > "u" || typeof window > "u" && global.window === void 0) throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  const t = document.createElement("div"), r = ve().getChildren();
  for (let i = 0; i < r.length; i++)
    co(n, r[i], t, e);
  return t.innerHTML;
}
function co(n, e, t, r = null) {
  let i = r === null || e.isSelected(r);
  const o = D(e) && e.excludeFromCopy("html");
  let s = e;
  if (r !== null) {
    let b = Fi(e);
    b = V(b) && r !== null ? eo(r, b) : b, s = b;
  }
  const a = D(s) ? s.getChildren() : [], l = n._nodes.get(s.getType());
  let u;
  u = l && l.exportDOM !== void 0 ? l.exportDOM(n, s) : s.exportDOM(n);
  const { element: c, after: f } = u;
  if (!c) return !1;
  const p = document.createDocumentFragment();
  for (let b = 0; b < a.length; b++) {
    const y = a[b], v = co(n, y, p, r);
    !i && D(e) && v && e.extractWithChild(y, r, "html") && (i = !0);
  }
  if (i && !o) {
    if ((X(c) || yr(c)) && c.append(p), t.append(c), f) {
      const b = f.call(s, c);
      b && (yr(c) ? c.replaceChildren(b) : c.replaceWith(b));
    }
  } else t.append(p);
  return i;
}
const go = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function fo(n, e, t, r, i = /* @__PURE__ */ new Map(), o) {
  let s = [];
  if (go.has(n.nodeName)) return s;
  let a = null;
  const l = function(y, v) {
    const { nodeName: x } = y, C = v._htmlConversions.get(x.toLowerCase());
    let h = null;
    if (C !== void 0) for (const m of C) {
      const w = m(y);
      w !== null && (h === null || (h.priority || 0) <= (w.priority || 0)) && (h = w);
    }
    return h !== null ? h.conversion : null;
  }(n, e), u = l ? l(n) : null;
  let c = null;
  if (u !== null) {
    c = u.after;
    const y = u.node;
    if (a = Array.isArray(y) ? y[y.length - 1] : y, a !== null) {
      for (const [, v] of i) if (a = v(a, o), !a) break;
      a && s.push(...Array.isArray(y) ? y : [a]);
    }
    u.forChild != null && i.set(n.nodeName, u.forChild);
  }
  const f = n.childNodes;
  let p = [];
  const b = (a == null || !Pe(a)) && (a != null && Cn(a) || r);
  for (let y = 0; y < f.length; y++) p.push(...fo(f[y], e, t, b, new Map(i), a));
  return c != null && (p = c(p)), _r(n) && (p = Ia(n, p, b ? () => {
    const y = new Ri();
    return t.push(y), y;
  } : G)), a == null ? p.length > 0 ? s = s.concat(p) : _r(n) && function(y) {
    return y.nextSibling == null || y.previousSibling == null ? !1 : br(y.nextSibling) && br(y.previousSibling);
  }(n) && (s = s.concat(Bt())) : D(a) && a.append(...p), s;
}
function Ia(n, e, t) {
  const r = n.style.textAlign, i = [];
  let o = [];
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (Cn(a)) r && !a.getFormat() && a.setFormat(r), i.push(a);
    else if (o.push(a), s === e.length - 1 || s < e.length - 1 && Cn(e[s + 1])) {
      const l = t();
      l.setFormat(r), l.append(...o), i.push(l), o = [];
    }
  }
  return i;
}
function Kt(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e) r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Da(n, e = R()) {
  return e == null && Kt(166), O(e) && e.isCollapsed() || e.getNodes().length === 0 ? "" : uo(n, e);
}
function La(n, e = R()) {
  return e == null && Kt(166), O(e) && e.isCollapsed() || e.getNodes().length === 0 ? null : JSON.stringify(Ma(n, e));
}
function Ir(n, e, t) {
  const r = n.getData("application/x-lexical-editor");
  if (r) try {
    const a = JSON.parse(r);
    if (a.namespace === t._config.namespace && Array.isArray(a.nodes))
      return Dr(t, $a(a.nodes), e);
  } catch {
  }
  const i = n.getData("text/html"), o = n.getData("text/plain");
  if (i && o !== i) try {
    const a = new DOMParser().parseFromString(function(l) {
      return window.trustedTypes && window.trustedTypes.createPolicy ? window.trustedTypes.createPolicy("lexical", { createHTML: (u) => u }).createHTML(l) : l;
    }(i), "text/html");
    return Dr(t, vt(t, a), e);
  } catch {
  }
  const s = o || n.getData("text/uri-list");
  if (s != null) if (O(e)) {
    const a = s.split(/(\r?\n|\t)/);
    a[a.length - 1] === "" && a.pop();
    for (let l = 0; l < a.length; l++) {
      const u = R();
      if (O(u)) {
        const c = a[l];
        c === `
` || c === `\r
` ? u.insertParagraph() : c === "	" ? u.insertNodes([zn()]) : u.insertText(c);
      }
    }
  } else e.insertRawText(s);
}
function Dr(n, e, t) {
  n.dispatchCommand(Ns, { nodes: e, selection: t }) || t.insertNodes(e);
}
function ho(n, e, t, r = []) {
  let i = e === null || t.isSelected(e);
  const o = D(t) && t.excludeFromCopy("html");
  let s = t;
  if (e !== null) {
    let u = Fi(t);
    u = V(u) && e !== null ? eo(e, u) : u, s = u;
  }
  const a = D(s) ? s.getChildren() : [], l = function(u) {
    const c = u.exportJSON(), f = u.constructor;
    if (c.type !== f.getType() && Kt(58, f.name), D(u)) {
      const p = c.children;
      Array.isArray(p) || Kt(59, f.name);
    }
    return c;
  }(s);
  if (V(s)) {
    const u = s.__text;
    u.length > 0 ? l.text = u : i = !1;
  }
  for (let u = 0; u < a.length; u++) {
    const c = a[u], f = ho(n, e, c, l.children);
    !i && D(t) && f && t.extractWithChild(c, e, "clone") && (i = !0);
  }
  if (i && !o) r.push(l);
  else if (Array.isArray(l.children)) for (let u = 0; u < l.children.length; u++) {
    const c = l.children[u];
    r.push(c);
  }
  return i;
}
function Ma(n, e) {
  const t = [], r = ve().getChildren();
  for (let i = 0; i < r.length; i++)
    ho(n, e, r[i], t);
  return { namespace: n._config.namespace, nodes: t };
}
function $a(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) {
    const r = n[t], i = ks(r);
    V(i) && pa(i), e.push(i);
  }
  return e;
}
let et = null;
async function Lr(n, e, t) {
  if (et !== null) return !1;
  if (e !== null) return new Promise((u, c) => {
    n.update(() => {
      u(Mr(n, e, t));
    });
  });
  const r = n.getRootElement(), i = n._window || window, o = window.document, s = Xt(i);
  if (r === null || s === null) return !1;
  const a = o.createElement("span");
  a.style.cssText = "position: fixed; top: -1000px;", a.append(o.createTextNode("#")), r.append(a);
  const l = new Range();
  return l.setStart(a, 0), l.setEnd(a, 1), s.removeAllRanges(), s.addRange(l), new Promise((u, c) => {
    const f = n.registerCommand(Ii, (p) => ($e(p, ClipboardEvent) && (f(), et !== null && (window.clearTimeout(et), et = null), u(Mr(n, p, t))), !0), Ts);
    et = window.setTimeout(() => {
      f(), et = null, u(!1);
    }, 50), o.execCommand("copy"), a.remove();
  });
}
function Mr(n, e, t) {
  if (t === void 0) {
    const i = Xt(n._window);
    if (!i) return !1;
    const o = i.anchorNode, s = i.focusNode;
    if (o !== null && s !== null && !Os(n, o, s)) return !1;
    const a = R();
    if (a === null) return !1;
    t = ja(a);
  }
  e.preventDefault();
  const r = e.clipboardData;
  return r !== null && (Ua(r, t), !0);
}
const Pa = [["text/html", Da], ["application/x-lexical-editor", La]];
function ja(n = R()) {
  const e = { "text/plain": n ? n.getTextContent() : "" };
  if (n) {
    const t = Di();
    for (const [r, i] of Pa) {
      const o = i(t, n);
      o !== null && (e[r] = o);
    }
  }
  return e;
}
function Ua(n, e) {
  for (const t in e) {
    const r = e[t];
    r !== void 0 && n.setData(t, r);
  }
}
function $r(n, e) {
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
const at = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, za = at && "documentMode" in document ? document.documentMode : null, Ba = !(!at || !("InputEvent" in window) || za) && "getTargetRanges" in new window.InputEvent("input"), Wa = at && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Pr = at && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Ha = at && /^(?=.*Chrome).*/i.test(navigator.userAgent), Ka = at && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Ha, Nn = Oe("DRAG_DROP_PASTE_FILE");
class en extends xe {
  static getType() {
    return "quote";
  }
  static clone(e) {
    return new en(e.__key);
  }
  createDOM(e) {
    const t = document.createElement("blockquote");
    return te(t, e.theme.quote), t;
  }
  updateDOM(e, t) {
    return !1;
  }
  static importDOM() {
    return { blockquote: (e) => ({ conversion: Ja, priority: 0 }) };
  }
  exportDOM(e) {
    const { element: t } = super.exportDOM(e);
    if (X(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const r = this.getFormatType();
      t.style.textAlign = r;
      const i = this.getDirection();
      i && (t.dir = i);
    }
    return { element: t };
  }
  static importJSON(e) {
    return po().updateFromJSON(e);
  }
  insertNewAfter(e, t) {
    const r = G(), i = this.getDirection();
    return r.setDirection(i), this.insertAfter(r, t), r;
  }
  collapseAtStart() {
    const e = G();
    return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
  }
  canMergeWhenEmpty() {
    return !0;
  }
}
function po() {
  return he(new en());
}
class lt extends xe {
  static getType() {
    return "heading";
  }
  static clone(e) {
    return new lt(e.__tag, e.__key);
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
      te(r, o);
    }
    return r;
  }
  updateDOM(e, t, r) {
    return e.__tag !== this.__tag;
  }
  static importDOM() {
    return { h1: (e) => ({ conversion: tt, priority: 0 }), h2: (e) => ({ conversion: tt, priority: 0 }), h3: (e) => ({ conversion: tt, priority: 0 }), h4: (e) => ({ conversion: tt, priority: 0 }), h5: (e) => ({ conversion: tt, priority: 0 }), h6: (e) => ({ conversion: tt, priority: 0 }), p: (e) => {
      const t = e.firstChild;
      return t !== null && jr(t) ? { conversion: () => ({ node: null }), priority: 3 } : null;
    }, span: (e) => jr(e) ? { conversion: (t) => ({ node: rt("h1") }), priority: 3 } : null };
  }
  exportDOM(e) {
    const { element: t } = super.exportDOM(e);
    if (X(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const r = this.getFormatType();
      t.style.textAlign = r;
      const i = this.getDirection();
      i && (t.dir = i);
    }
    return { element: t };
  }
  static importJSON(e) {
    return rt(e.tag).updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setTag(e.tag);
  }
  exportJSON() {
    return { ...super.exportJSON(), tag: this.getTag() };
  }
  insertNewAfter(e, t = !0) {
    const r = e ? e.anchor.offset : 0, i = this.getLastDescendant(), o = !i || e && e.anchor.key === i.getKey() && r === i.getTextContentSize() || !e ? G() : rt(this.getTag()), s = this.getDirection();
    if (o.setDirection(s), this.insertAfter(o, t), r === 0 && !this.isEmpty() && e) {
      const a = G();
      a.select(), this.replace(a, !0);
    }
    return o;
  }
  collapseAtStart() {
    const e = this.isEmpty() ? G() : rt(this.getTag());
    return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
  }
  extractWithChild() {
    return !0;
  }
}
function jr(n) {
  return n.nodeName.toLowerCase() === "span" && n.style.fontSize === "26pt";
}
function tt(n) {
  const e = n.nodeName.toLowerCase();
  let t = null;
  return e !== "h1" && e !== "h2" && e !== "h3" && e !== "h4" && e !== "h5" && e !== "h6" || (t = rt(e), n.style !== null && (zi(n, t), t.setFormat(n.style.textAlign))), { node: t };
}
function Ja(n) {
  const e = po();
  return n.style !== null && (e.setFormat(n.style.textAlign), zi(n, e)), { node: e };
}
function rt(n = "h1") {
  return he(new lt(n));
}
function Va(n) {
  return n instanceof lt;
}
function Mt(n) {
  let e = null;
  if ($e(n, DragEvent) ? e = n.dataTransfer : $e(n, ClipboardEvent) && (e = n.clipboardData), e === null) return [!1, [], !1];
  const t = e.types, r = t.includes("Files"), i = t.includes("text/html") || t.includes("text/plain");
  return [r, Array.from(e.files), i];
}
function Ur(n) {
  const e = R();
  if (!O(e)) return !1;
  const t = /* @__PURE__ */ new Set(), r = e.getNodes();
  for (let i = 0; i < r.length; i++) {
    const o = r[i], s = o.getKey();
    if (t.has(s)) continue;
    const a = ye(o, (u) => D(u) && !u.isInline());
    if (a === null) continue;
    const l = a.getKey();
    a.canIndent() && !t.has(l) && (t.add(l), n(a));
  }
  return t.size > 0;
}
function $t(n) {
  const e = je(n);
  return it(e);
}
function mn(n) {
  for (const e of ["lowercase", "uppercase", "capitalize"]) n.hasFormat(e) && n.toggleFormat(e);
}
function Ya(n) {
  return Ee(n.registerCommand(Js, (e) => {
    const t = R();
    return !!Ne(t) && (t.clear(), !0);
  }, 0), n.registerCommand(fn, (e) => {
    const t = R();
    return !!O(t) && (t.deleteCharacter(e), !0);
  }, M), n.registerCommand(Ks, (e) => {
    const t = R();
    return !!O(t) && (t.deleteWord(e), !0);
  }, M), n.registerCommand(Hs, (e) => {
    const t = R();
    return !!O(t) && (t.deleteLine(e), !0);
  }, M), n.registerCommand(Ws, (e) => {
    const t = R();
    if (typeof e == "string") t !== null && t.insertText(e);
    else {
      if (t === null) return !1;
      const r = e.dataTransfer;
      if (r != null) Ir(r, t, n);
      else if (O(t)) {
        const i = e.data;
        return i && t.insertText(i), !0;
      }
    }
    return !0;
  }, M), n.registerCommand(Bs, () => {
    const e = R();
    return !!O(e) && (e.removeText(), !0);
  }, M), n.registerCommand(_t, (e) => {
    const t = R();
    return !!O(t) && (t.formatText(e), !0);
  }, M), n.registerCommand(mt, (e) => {
    const t = R();
    if (!O(t) && !Ne(t)) return !1;
    const r = t.getNodes();
    for (const i of r) {
      const o = ye(i, (s) => D(s) && !s.isInline());
      o !== null && o.setFormat(e);
    }
    return !0;
  }, M), n.registerCommand(wr, (e) => {
    const t = R();
    return !!O(t) && (t.insertLineBreak(e), !0);
  }, M), n.registerCommand(An, () => {
    const e = R();
    return !!O(e) && (e.insertParagraph(), !0);
  }, M), n.registerCommand(zs, () => (Jn([zn()]), !0), M), n.registerCommand(Us, () => Ur((e) => {
    const t = e.getIndent();
    e.setIndent(t + 1);
  }), M), n.registerCommand(vr, () => Ur((e) => {
    const t = e.getIndent();
    t > 0 && e.setIndent(t - 1);
  }), M), n.registerCommand(Ui, (e) => {
    const t = R();
    if (Ne(t) && !$t(e.target)) {
      const r = t.getNodes();
      if (r.length > 0) return r[0].selectPrevious(), !0;
    } else if (O(t)) {
      const r = xr(t.focus, !0);
      if (!e.shiftKey && it(r) && !r.isIsolated() && !r.isInline()) return r.selectPrevious(), e.preventDefault(), !0;
    }
    return !1;
  }, M), n.registerCommand(ji, (e) => {
    const t = R();
    if (Ne(t)) {
      const r = t.getNodes();
      if (r.length > 0) return r[0].selectNext(0, 0), !0;
    } else if (O(t)) {
      if (function(i) {
        const o = i.focus;
        return o.key === "root" && o.offset === ve().getChildrenSize();
      }(t)) return e.preventDefault(), !0;
      const r = xr(t.focus, !1);
      if (!e.shiftKey && it(r) && !r.isIsolated() && !r.isInline()) return r.selectNext(), e.preventDefault(), !0;
    }
    return !1;
  }, M), n.registerCommand(Pi, (e) => {
    const t = R();
    if (Ne(t)) {
      const r = t.getNodes();
      if (r.length > 0) return e.preventDefault(), r[0].selectPrevious(), !0;
    }
    if (!O(t)) return !1;
    if (Or(t, !0)) {
      const r = e.shiftKey;
      return e.preventDefault(), Rr(t, r, !0), !0;
    }
    return !1;
  }, M), n.registerCommand(js, (e) => {
    const t = R();
    if (Ne(t) && !$t(e.target)) {
      const i = t.getNodes();
      if (i.length > 0) return e.preventDefault(), i[0].selectNext(0, 0), !0;
    }
    if (!O(t)) return !1;
    const r = e.shiftKey;
    return !!Or(t, !1) && (e.preventDefault(), Rr(t, r, !1), !0);
  }, M), n.registerCommand(Ps, (e) => {
    if ($t(e.target)) return !1;
    const t = R();
    if (!O(t)) return !1;
    const { anchor: r } = t, i = r.getNode();
    return t.isCollapsed() && r.offset === 0 && !Un(i) && ka(i).getIndent() > 0 ? (e.preventDefault(), n.dispatchCommand(vr, void 0)) : (!Pr || navigator.language !== "ko-KR") && (e.preventDefault(), n.dispatchCommand(fn, !0));
  }, M), n.registerCommand($s, (e) => {
    if ($t(e.target)) return !1;
    const t = R();
    return !!O(t) && (e.preventDefault(), n.dispatchCommand(fn, !1));
  }, M), n.registerCommand($i, (e) => {
    const t = R();
    if (!O(t)) return !1;
    if (mn(t), e !== null) {
      if ((Pr || Wa || Ka) && Ba) return !1;
      if (e.preventDefault(), e.shiftKey) return n.dispatchCommand(wr, !1);
    }
    return n.dispatchCommand(An, void 0);
  }, M), n.registerCommand(Mi, () => {
    const e = R();
    return !!O(e) && (n.blur(), !0);
  }, M), n.registerCommand(Kn, (e) => {
    const [, t] = Mt(e);
    if (t.length > 0) {
      const i = $r(e.clientX, e.clientY);
      if (i !== null) {
        const { offset: o, node: s } = i, a = je(s);
        if (a !== null) {
          const l = Zt();
          if (V(a)) l.anchor.set(a.getKey(), o, "text"), l.focus.set(a.getKey(), o, "text");
          else {
            const c = a.getParentOrThrow().getKey(), f = a.getIndexWithinParent() + 1;
            l.anchor.set(c, f, "element"), l.focus.set(c, f, "element");
          }
          const u = Wt(l);
          At(u);
        }
        n.dispatchCommand(Nn, t);
      }
      return e.preventDefault(), !0;
    }
    const r = R();
    return !!O(r);
  }, M), n.registerCommand(Hn, (e) => {
    const [t] = Mt(e), r = R();
    return !(t && !O(r));
  }, M), n.registerCommand(Wn, (e) => {
    const [t] = Mt(e), r = R();
    if (t && !O(r)) return !1;
    const i = $r(e.clientX, e.clientY);
    if (i !== null) {
      const o = je(i.node);
      it(o) && e.preventDefault();
    }
    return !0;
  }, M), n.registerCommand(Ls, () => (Ms(), !0), M), n.registerCommand(Ii, (e) => (Lr(n, $e(e, ClipboardEvent) ? e : null), !0), M), n.registerCommand(Ds, (e) => (async function(t, r) {
    await Lr(r, $e(t, ClipboardEvent) ? t : null), r.update(() => {
      const i = R();
      O(i) ? i.removeText() : Ne(i) && i.getNodes().forEach((o) => o.remove());
    });
  }(e, n), !0), M), n.registerCommand(Bn, (e) => {
    const [, t, r] = Mt(e);
    return t.length > 0 && !r ? (n.dispatchCommand(Nn, t), !0) : Fs(e.target) && Is(e.target) ? !1 : R() !== null && (function(i, o) {
      i.preventDefault(), o.update(() => {
        const s = R(), a = $e(i, InputEvent) || $e(i, KeyboardEvent) ? null : i.clipboardData;
        a != null && s !== null && Ir(a, s, o);
      }, { tag: "paste" });
    }(e, n), !0);
  }, M), n.registerCommand(Li, (e) => {
    const t = R();
    return O(t) && mn(t), !1;
  }, M), n.registerCommand(Rs, (e) => {
    const t = R();
    return O(t) && mn(t), !1;
  }, M));
}
const kn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? st : j;
function zr(n) {
  return n.getEditorState().read(Zi(n.isComposing()));
}
function Ga({ contentEditable: n, placeholder: e = null, ErrorBoundary: t }) {
  const [r] = ne(), i = function(o, s) {
    const [a, l] = J(() => o.getDecorators());
    return kn(() => o.registerDecoratorListener((u) => {
      na(() => {
        l(u);
      });
    }), [o]), j(() => {
      l(o.getDecorators());
    }, [o]), we(() => {
      const u = [], c = Object.keys(a);
      for (let f = 0; f < c.length; f++) {
        const p = c[f], b = g.jsx(s, { onError: (v) => o._onError(v), children: g.jsx($n, { fallback: null, children: a[p] }) }), y = o.getElementByKey(p);
        y !== null && u.push(Yn(b, y, p));
      }
      return u;
    }, [s, a, o]);
  }(r, t);
  return function(o) {
    kn(() => Ee(Ya(o), Fa(o)), [o]);
  }(r), g.jsxs(g.Fragment, { children: [n, g.jsx(qa, { content: e }), i] });
}
function qa({ content: n }) {
  const [e] = ne(), t = function(i) {
    const [o, s] = J(() => zr(i));
    return kn(() => {
      function a() {
        const l = zr(i);
        s(l);
      }
      return a(), Ee(i.registerUpdateListener(() => {
        a();
      }), i.registerEditableListener(() => {
        a();
      }));
    }, [i]), o;
  }(e), r = ca();
  return t ? typeof n == "function" ? n(r) : n : null;
}
const mo = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? st : j;
function Za({ editor: n, ariaActiveDescendant: e, ariaAutoComplete: t, ariaControls: r, ariaDescribedBy: i, ariaErrorMessage: o, ariaExpanded: s, ariaInvalid: a, ariaLabel: l, ariaLabelledBy: u, ariaMultiline: c, ariaOwns: f, ariaRequired: p, autoCapitalize: b, className: y, id: v, role: x = "textbox", spellCheck: C = !0, style: h, tabIndex: m, "data-testid": w, ...E }, _) {
  const [A, N] = J(n.isEditable()), k = ke(($) => {
    $ && $.ownerDocument && $.ownerDocument.defaultView ? n.setRootElement($) : n.setRootElement(null);
  }, [n]), B = we(() => /* @__PURE__ */ function(...$) {
    return (H) => {
      $.forEach((Q) => {
        typeof Q == "function" ? Q(H) : Q != null && (Q.current = H);
      });
    };
  }(_, k), [k, _]);
  return mo(() => (N(n.isEditable()), n.registerEditableListener(($) => {
    N($);
  })), [n]), g.jsx("div", { "aria-activedescendant": A ? e : void 0, "aria-autocomplete": A ? t : "none", "aria-controls": A ? r : void 0, "aria-describedby": i, ...o != null ? { "aria-errormessage": o } : {}, "aria-expanded": A && x === "combobox" ? !!s : void 0, ...a != null ? { "aria-invalid": a } : {}, "aria-label": l, "aria-labelledby": u, "aria-multiline": c, "aria-owns": A ? f : void 0, "aria-readonly": !A || void 0, "aria-required": p, autoCapitalize: b, className: y, contentEditable: A, "data-testid": w, id: v, ref: B, role: A ? x : void 0, spellCheck: C, style: h, tabIndex: m, ...E });
}
const Xa = Oi(Za);
function Br(n) {
  return n.getEditorState().read(Zi(n.isComposing()));
}
const Qa = Oi(el);
function el(n, e) {
  const { placeholder: t, ...r } = n, [i] = ne();
  return g.jsxs(g.Fragment, { children: [g.jsx(Xa, { editor: i, ...r, ref: e }), t != null && g.jsx(tl, { editor: i, content: t })] });
}
function tl({ content: n, editor: e }) {
  const t = function(s) {
    const [a, l] = J(() => Br(s));
    return mo(() => {
      function u() {
        const c = Br(s);
        l(c);
      }
      return u(), Ee(s.registerUpdateListener(() => {
        u();
      }), s.registerEditableListener(() => {
        u();
      }));
    }, [s]), a;
  }(e), [r, i] = J(e.isEditable());
  if (st(() => (i(e.isEditable()), e.registerEditableListener((s) => {
    i(s);
  })), [e]), !t) return null;
  let o = null;
  return typeof n == "function" ? o = n(r) : n !== null && (o = n), o === null ? null : g.jsx("div", { "aria-hidden": !0, children: o });
}
const Pt = 0, On = 1, Rn = 2, be = 0, nl = 1, Wr = 2, rl = 3, il = 4;
function ol(n, e, t, r, i) {
  if (n === null || t.size === 0 && r.size === 0 && !i) return be;
  const o = e._selection, s = n._selection;
  if (i) return nl;
  if (!(O(o) && O(s) && s.isCollapsed() && o.isCollapsed())) return be;
  const a = function(C, h, m) {
    const w = C._nodeMap, E = [];
    for (const _ of h) {
      const A = w.get(_);
      A !== void 0 && E.push(A);
    }
    for (const [_, A] of m) {
      if (!A) continue;
      const N = w.get(_);
      N === void 0 || Un(N) || E.push(N);
    }
    return E;
  }(e, t, r);
  if (a.length === 0) return be;
  if (a.length > 1) {
    const C = e._nodeMap, h = C.get(o.anchor.key), m = C.get(s.anchor.key);
    return h && m && !n._nodeMap.has(h.__key) && V(h) && h.__text.length === 1 && o.anchor.offset === 1 ? Wr : be;
  }
  const l = a[0], u = n._nodeMap.get(l.__key);
  if (!V(u) || !V(l) || u.__mode !== l.__mode) return be;
  const c = u.__text, f = l.__text;
  if (c === f) return be;
  const p = o.anchor, b = s.anchor;
  if (p.key !== b.key || p.type !== "text") return be;
  const y = p.offset, v = b.offset, x = f.length - c.length;
  return x === 1 && v === y - 1 ? Wr : x === -1 && v === y + 1 ? rl : x === -1 && v === y ? il : be;
}
function sl(n, e) {
  let t = Date.now(), r = be;
  return (i, o, s, a, l, u) => {
    const c = Date.now();
    if (u.has("historic")) return r = be, t = c, Rn;
    const f = ol(i, o, a, l, n.isComposing()), p = (() => {
      const b = s === null || s.editor === n, y = u.has("history-push");
      if (!y && b && u.has("history-merge")) return Pt;
      if (i === null) return On;
      const v = o._selection;
      return a.size > 0 || l.size > 0 ? y === !1 && f !== be && f === r && c < t + e && b || a.size === 1 && function(x, C, h) {
        const m = C._nodeMap.get(x), w = h._nodeMap.get(x), E = C._selection, _ = h._selection;
        return !(O(E) && O(_) && E.anchor.type === "element" && E.focus.type === "element" && _.anchor.type === "text" && _.focus.type === "text" || !V(m) || !V(w) || m.__parent !== w.__parent) && JSON.stringify(C.read(() => m.exportJSON())) === JSON.stringify(h.read(() => w.exportJSON()));
      }(Array.from(a)[0], i, o) ? Pt : On : v !== null ? Pt : Rn;
    })();
    return t = c, r = f, p;
  };
}
function Hr(n) {
  n.undoStack = [], n.redoStack = [], n.current = null;
}
function al(n, e, t) {
  const r = sl(n, t);
  return Ee(n.registerCommand(Wi, () => (function(o, s) {
    const a = s.redoStack, l = s.undoStack;
    if (l.length !== 0) {
      const u = s.current, c = l.pop();
      u !== null && (a.push(u), o.dispatchCommand(bt, !0)), l.length === 0 && o.dispatchCommand(yt, !1), s.current = c || null, c && c.editor.setEditorState(c.editorState, { tag: "historic" });
    }
  }(n, e), !0), M), n.registerCommand(Bi, () => (function(o, s) {
    const a = s.redoStack, l = s.undoStack;
    if (a.length !== 0) {
      const u = s.current;
      u !== null && (l.push(u), o.dispatchCommand(yt, !0));
      const c = a.pop();
      a.length === 0 && o.dispatchCommand(bt, !1), s.current = c || null, c && c.editor.setEditorState(c.editorState, { tag: "historic" });
    }
  }(n, e), !0), M), n.registerCommand(Ys, () => (Hr(e), !1), M), n.registerCommand(Vs, () => (Hr(e), n.dispatchCommand(bt, !1), n.dispatchCommand(yt, !1), !0), M), n.registerUpdateListener(({ editorState: o, prevEditorState: s, dirtyLeaves: a, dirtyElements: l, tags: u }) => {
    const c = e.current, f = e.redoStack, p = e.undoStack, b = c === null ? null : c.editorState;
    if (c !== null && o === b) return;
    const y = r(s, o, c, a, l, u);
    if (y === On) f.length !== 0 && (e.redoStack = [], n.dispatchCommand(bt, !1)), c !== null && (p.push({ ...c }), n.dispatchCommand(yt, !0));
    else if (y === Rn) return;
    e.current = { editor: n, editorState: o };
  }));
}
function ll() {
  return { current: null, redoStack: [], undoStack: [] };
}
function ul({ delay: n, externalHistoryState: e }) {
  const [t] = ne();
  return function(r, i, o = 1e3) {
    const s = we(() => i || ll(), [i]);
    j(() => al(r, s, o), [o, r, s]);
  }(t, e, n), null;
}
const cl = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? st : j;
function dl({ ignoreHistoryMergeTagChange: n = !0, ignoreSelectionChange: e = !1, onChange: t }) {
  const [r] = ne();
  return cl(() => {
    if (t) return r.registerUpdateListener(({ editorState: i, dirtyElements: o, dirtyLeaves: s, prevEditorState: a, tags: l }) => {
      e && o.size === 0 && s.size === 0 || n && l.has("history-merge") || a.isEmpty() || t(i, r, l);
    });
  }, [r, n, e, t]), null;
}
let jt;
const gl = new Uint8Array(16);
function fl() {
  if (!jt && (jt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !jt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return jt(gl);
}
const ee = [];
for (let n = 0; n < 256; ++n)
  ee.push((n + 256).toString(16).slice(1));
function hl(n, e = 0) {
  return ee[n[e + 0]] + ee[n[e + 1]] + ee[n[e + 2]] + ee[n[e + 3]] + "-" + ee[n[e + 4]] + ee[n[e + 5]] + "-" + ee[n[e + 6]] + ee[n[e + 7]] + "-" + ee[n[e + 8]] + ee[n[e + 9]] + "-" + ee[n[e + 10]] + ee[n[e + 11]] + ee[n[e + 12]] + ee[n[e + 13]] + ee[n[e + 14]] + ee[n[e + 15]];
}
const pl = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Kr = {
  randomUUID: pl
};
function ml(n, e, t) {
  if (Kr.randomUUID && !n)
    return Kr.randomUUID();
  n = n || {};
  const r = n.random || (n.rng || fl)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, hl(r);
}
const _l = (n, e) => {
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
}, bl = ({ isLoading: n }) => {
  const [t, r] = ms(_l, {
    visible: !1,
    timeoutId: null
  }), i = we(
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
  }, [n]), t.visible ? /* @__PURE__ */ g.jsx("div", { className: "autosave-indicator", children: /* @__PURE__ */ g.jsx(
    "span",
    {
      className: `body-m-medium autosave-text ${n ? "saving" : "saved"}`,
      children: i
    }
  ) }) : null;
}, yl = () => /* @__PURE__ */ g.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ g.jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
        }
      ),
      /* @__PURE__ */ g.jsx("path", { d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" })
    ]
  }
), wl = () => /* @__PURE__ */ g.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ g.jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
        }
      ),
      /* @__PURE__ */ g.jsx("path", { d: "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" })
    ]
  }
), vl = () => /* @__PURE__ */ g.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ g.jsx("path", { d: "M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" })
  }
), xl = () => /* @__PURE__ */ g.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ g.jsx("path", { d: "M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" })
  }
), El = () => /* @__PURE__ */ g.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ g.jsx("path", { d: "M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z" })
  }
), Sl = () => /* @__PURE__ */ g.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ g.jsx("path", { d: "M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z" })
  }
), Cl = () => /* @__PURE__ */ g.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ g.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
      }
    )
  }
), Al = () => /* @__PURE__ */ g.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ g.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
      }
    )
  }
), Tl = () => /* @__PURE__ */ g.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ g.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
      }
    )
  }
), Nl = () => /* @__PURE__ */ g.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ g.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
      }
    )
  }
), _o = Gt.createContext(null), Jr = 4;
function He({
  children: n,
  className: e,
  onClick: t,
  title: r
}) {
  const i = ge(null), o = Gt.useContext(_o);
  if (o === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: s } = o;
  return j(() => {
    i && i.current && s(i);
  }, [i, s]), /* @__PURE__ */ g.jsx(
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
function kl({
  children: n,
  dropDownRef: e,
  onClose: t
}) {
  const [r, i] = J(), [o, s] = J(), a = ke(
    (c) => {
      i((f) => f ? [...f, c] : [c]);
    },
    [i]
  ), l = (c) => {
    if (!r)
      return;
    const f = c.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(f) && c.preventDefault(), f === "Escape" || f === "Tab" ? t() : f === "ArrowUp" ? s((p) => {
      if (!p)
        return r[0];
      const b = r.indexOf(p) - 1;
      return r[b === -1 ? r.length - 1 : b];
    }) : f === "ArrowDown" && s((p) => p ? r[r.indexOf(p) + 1] : r[0]);
  }, u = we(
    () => ({
      registerItem: a
    }),
    [a]
  );
  return j(() => {
    r && !o && s(r[0]), o && o.current && o.current.focus();
  }, [r, o]), /* @__PURE__ */ g.jsx(_o.Provider, { value: u, children: /* @__PURE__ */ g.jsx(
    "div",
    {
      className: "lexical-editor-toolbar-dropdown",
      ref: e,
      onKeyDown: l,
      children: n
    }
  ) });
}
function bo({
  disabled: n = !1,
  buttonLabel: e,
  buttonAriaLabel: t,
  buttonClassName: r,
  children: i,
  stopCloseOnClickSelf: o,
  icon: s,
  container: a
}) {
  const l = ge(null), u = ge(null), [c, f] = J(!1), p = () => {
    f(!1), u && u.current && u.current.focus();
  };
  return j(() => {
    const b = u.current, y = l.current;
    if (c && b !== null && y !== null) {
      const { top: v, left: x } = b.getBoundingClientRect();
      y.style.top = `${v + b.offsetHeight + Jr}px`, y.style.left = `${Math.min(x, window.innerWidth - y.offsetWidth - 20)}px`;
    }
  }, [l, u, c]), j(() => {
    const b = u.current;
    if (b !== null && c) {
      const y = (v) => {
        const x = v.target;
        o && l.current && l.current.contains(x) || b.contains(x) || f(!1);
      };
      return document.addEventListener("click", y), () => {
        document.removeEventListener("click", y);
      };
    }
  }, [l, u, c, o]), j(() => {
    const b = () => {
      if (c) {
        const y = u.current, v = l.current;
        if (y !== null && v !== null) {
          const { top: x } = y.getBoundingClientRect(), C = x + y.offsetHeight + Jr;
          C !== v.getBoundingClientRect().top && (v.style.top = `${C}px`);
        }
      }
    };
    return document.addEventListener("scroll", b), () => {
      document.removeEventListener("scroll", b);
    };
  }, [u, l, c]), /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsxs(
      "button",
      {
        type: "button",
        disabled: n,
        "aria-label": t || e,
        className: r,
        onClick: () => f(!c),
        ref: u,
        children: [
          e && /* @__PURE__ */ g.jsx("span", { className: "text dropdown-button-text", children: e }),
          s,
          /* @__PURE__ */ g.jsx("i", { className: "chevron-down" })
        ]
      }
    ),
    c && Yn(
      /* @__PURE__ */ g.jsx(kl, { dropDownRef: l, onClose: p, children: i }),
      a || document.body
    )
  ] });
}
function yo({
  label: n,
  value: e,
  onChange: t,
  placeholder: r = "",
  "data-test-id": i,
  type: o = "text"
}) {
  return /* @__PURE__ */ g.jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ g.jsx("label", { className: "Input__label", children: n }),
    /* @__PURE__ */ g.jsx(
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
let Fn = !1;
const Ol = [
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
], pt = 214, Vr = 150;
function Rl({
  color: n,
  onChange: e
}) {
  const [t, r] = J(nt("hex", n)), [i, o] = J(n), s = ge(null), a = we(
    () => ({
      x: t.hsv.s / 100 * pt,
      y: (100 - t.hsv.v) / 100 * Vr
    }),
    [t.hsv.s, t.hsv.v]
  ), l = we(
    () => ({
      x: t.hsv.h / 360 * pt
    }),
    [t.hsv]
  ), u = (p) => {
    if (o(p), /^#[0-9A-Fa-f]{6}$/i.test(p)) {
      const b = nt("hex", p);
      r(b);
    }
  }, c = ({ x: p, y: b }) => {
    const y = {
      ...t.hsv,
      s: p / pt * 100,
      v: 100 - b / Vr * 100
    }, v = nt("hsv", y);
    r(v), o(v.hex);
  }, f = ({ x: p }) => {
    const b = { ...t.hsv, h: p / pt * 360 }, y = nt("hsv", b);
    r(y), o(y.hex);
  };
  return j(() => {
    s.current !== null && e && (e(t.hex, Fn), o(t.hex));
  }, [t, e]), j(() => {
    if (n === void 0)
      return;
    const p = nt("hex", n);
    r(p), o(p.hex);
  }, [n]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: "color-picker-wrapper",
      style: { width: pt },
      ref: s,
      children: [
        /* @__PURE__ */ g.jsx(yo, { label: "Hex", onChange: u, value: i }),
        /* @__PURE__ */ g.jsx("div", { className: "color-picker-basic-color", children: Ol.map((p) => /* @__PURE__ */ g.jsx(
          "button",
          {
            className: p === t.hex ? " active" : "",
            style: { backgroundColor: p },
            onClick: () => {
              o(p), r(nt("hex", p));
            }
          },
          p
        )) }),
        /* @__PURE__ */ g.jsx(
          Yr,
          {
            className: "color-picker-saturation",
            style: { backgroundColor: `hsl(${t.hsv.h}, 100%, 50%)` },
            onChange: c,
            children: /* @__PURE__ */ g.jsx(
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
        /* @__PURE__ */ g.jsx(Yr, { className: "color-picker-hue", onChange: f, children: /* @__PURE__ */ g.jsx(
          "div",
          {
            className: "color-picker-hue_cursor",
            style: {
              backgroundColor: `hsl(${t.hsv.h}, 100%, 50%)`,
              left: l.x
            }
          }
        ) }),
        /* @__PURE__ */ g.jsx(
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
function Yr({
  className: n,
  style: e,
  onChange: t,
  children: r
}) {
  const i = ge(null), o = ge(!1), s = (l) => {
    if (i.current) {
      const { current: u } = i, { width: c, height: f, left: p, top: b } = u.getBoundingClientRect(), y = ao(u), v = Gr(l.clientX / y - p, c, 0), x = Gr(l.clientY / y - b, f, 0);
      t({ x: v, y: x });
    }
  }, a = (l) => {
    if (l.button !== 0)
      return;
    s(l);
    const u = (f) => {
      o.current = !0, Fn = !0, s(f);
    }, c = (f) => {
      o.current && (Fn = !1), document.removeEventListener("mousemove", u, !1), document.removeEventListener("mouseup", c, !1), s(f), o.current = !1;
    };
    document.addEventListener("mousemove", u, !1), document.addEventListener("mouseup", c, !1);
  };
  return /* @__PURE__ */ g.jsx(
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
function Gr(n, e, t) {
  return n > e ? e : n < t ? t : n;
}
function qr(n) {
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
function Zr(n) {
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
function _n({ r: n, g: e, b: t }) {
  n /= 255, e /= 255, t /= 255;
  const r = Math.max(n, e, t), i = r - Math.min(n, e, t), o = i ? (r === n ? (e - t) / i + (e < t ? 6 : 0) : r === e ? 2 + (t - n) / i : 4 + (n - e) / i) * 60 : 0, s = r ? i / r * 100 : 0, a = r * 100;
  return { h: o, s, v: a };
}
function Fl({ h: n, s: e, v: t }) {
  e /= 100, t /= 100;
  const r = ~~(n / 60), i = n / 60 - r, o = t * (1 - e), s = t * (1 - e * i), a = t * (1 - e * (1 - i)), l = r % 6, u = Math.round([t, s, o, o, a, t][l] * 255), c = Math.round([a, t, t, s, o, o][l] * 255);
  return { b: Math.round([o, o, a, t, t, s][l] * 255), g: c, r: u };
}
function Xr({ b: n, g: e, r: t }) {
  return "#" + [t, e, n].map((r) => r.toString(16).padStart(2, "0")).join("");
}
function nt(n, e) {
  let t = qr("#121212"), r = Zr(t), i = _n(r);
  return n === "hex" ? (t = qr(e), r = Zr(t), i = _n(r)) : n === "rgb" ? (r = e, t = Xr(r), i = _n(r)) : n === "hsv" && (i = e, r = Fl(i), t = Xr(r)), { hex: t, hsv: i, rgb: r };
}
function Qr({
  disabled: n = !1,
  stopCloseOnClickSelf: e = !0,
  color: t,
  onChange: r,
  container: i,
  ...o
}) {
  return /* @__PURE__ */ g.jsx(
    bo,
    {
      ...o,
      disabled: n,
      stopCloseOnClickSelf: e,
      container: i,
      children: /* @__PURE__ */ g.jsx(Rl, { color: t, onChange: r })
    }
  );
}
const ei = 15, Il = {
  bgColor: "#fff",
  blockType: "paragraph",
  canRedo: !1,
  canUndo: !1,
  codeLanguage: "",
  elementFormat: "left",
  fontColor: "#000",
  fontFamily: "Arial",
  // Current font size in px
  fontSize: `${ei}px`,
  // Font size input value - for controlled input
  fontSizeInputValue: `${ei}`,
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
}, wo = ki(void 0), Dl = ({
  children: n
}) => {
  const [e, t] = J(Il), r = e.fontSize, i = ke(
    (s, a) => {
      t((l) => ({ ...l, [s]: a }));
    },
    []
  );
  j(() => {
    i("fontSizeInputValue", r.slice(0, -2));
  }, [r, i]);
  const o = we(() => ({ toolbarState: e, updateToolbarState: i }), [e, i]);
  return /* @__PURE__ */ g.jsx(wo.Provider, { value: o, children: n });
}, Ll = () => {
  const n = Ni(wo);
  if (n === void 0)
    throw new Error("useToolbarState must be used within a ToolbarProvider");
  return n;
}, Ml = () => /* @__PURE__ */ g.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 512 512",
    children: /* @__PURE__ */ g.jsx(
      "path",
      {
        fill: "#777",
        d: "M221.631 109 109.92 392h58.055l24.079-61h127.892l24.079 61h58.055L290.369 109Zm-8.261 168L256 169l42.63 108Z"
      }
    )
  }
), $l = () => /* @__PURE__ */ g.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ g.jsx("path", { fill: "#fff", fillOpacity: ".01", d: "M0 0h48v48H0z" }),
      /* @__PURE__ */ g.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M37 37a4 4 0 0 0 4-4c0-1.473-1.333-3.473-4-6-2.667 2.527-4 4.527-4 6a4 4 0 0 0 4 4Z",
          fill: "#777"
        }
      ),
      /* @__PURE__ */ g.jsx(
        "path",
        {
          d: "m20.854 5.504 3.535 3.536",
          stroke: "#777",
          strokeWidth: "4",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ g.jsx(
        "path",
        {
          d: "M23.682 8.333 8.125 23.889 19.44 35.203l15.556-15.557L23.682 8.333Z",
          stroke: "#777",
          strokeWidth: "4",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ g.jsx(
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
var Pl = { exports: {} };
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
        clone: function h(m, w) {
          w = w || {};
          var E, _;
          switch (a.util.type(m)) {
            case "Object":
              if (_ = a.util.objId(m), w[_])
                return w[_];
              E = /** @type {Record<string, any>} */
              {}, w[_] = E;
              for (var A in m)
                m.hasOwnProperty(A) && (E[A] = h(m[A], w));
              return (
                /** @type {any} */
                E
              );
            case "Array":
              return _ = a.util.objId(m), w[_] ? w[_] : (E = [], w[_] = E, /** @type {Array} */
              /** @type {any} */
              m.forEach(function(N, k) {
                E[k] = h(N, w);
              }), /** @type {any} */
              E);
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
          } catch (E) {
            var h = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(E.stack) || [])[1];
            if (h) {
              var m = document.getElementsByTagName("script");
              for (var w in m)
                if (m[w].src == h)
                  return m[w];
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
        isActive: function(h, m, w) {
          for (var E = "no-" + m; h; ) {
            var _ = h.classList;
            if (_.contains(m))
              return !0;
            if (_.contains(E))
              return !1;
            h = h.parentElement;
          }
          return !!w;
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
          var w = a.util.clone(a.languages[h]);
          for (var E in m)
            w[E] = m[E];
          return w;
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
        insertBefore: function(h, m, w, E) {
          E = E || /** @type {any} */
          a.languages;
          var _ = E[h], A = {};
          for (var N in _)
            if (_.hasOwnProperty(N)) {
              if (N == m)
                for (var k in w)
                  w.hasOwnProperty(k) && (A[k] = w[k]);
              w.hasOwnProperty(N) || (A[N] = _[N]);
            }
          var B = E[h];
          return E[h] = A, a.languages.DFS(a.languages, function($, H) {
            H === B && $ != h && (this[$] = A);
          }), A;
        },
        // Traverse a language definition with Depth First Search
        DFS: function h(m, w, E, _) {
          _ = _ || {};
          var A = a.util.objId;
          for (var N in m)
            if (m.hasOwnProperty(N)) {
              w.call(m, N, m[N], E || N);
              var k = m[N], B = a.util.type(k);
              B === "Object" && !_[A(k)] ? (_[A(k)] = !0, h(k, w, null, _)) : B === "Array" && !_[A(k)] && (_[A(k)] = !0, h(k, w, N, _));
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
      highlightAllUnder: function(h, m, w) {
        var E = {
          callback: w,
          container: h,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        a.hooks.run("before-highlightall", E), E.elements = Array.prototype.slice.apply(E.container.querySelectorAll(E.selector)), a.hooks.run("before-all-elements-highlight", E);
        for (var _ = 0, A; A = E.elements[_++]; )
          a.highlightElement(A, m === !0, E.callback);
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
      highlightElement: function(h, m, w) {
        var E = a.util.getLanguage(h), _ = a.languages[E];
        a.util.setLanguage(h, E);
        var A = h.parentElement;
        A && A.nodeName.toLowerCase() === "pre" && a.util.setLanguage(A, E);
        var N = h.textContent, k = {
          element: h,
          language: E,
          grammar: _,
          code: N
        };
        function B(H) {
          k.highlightedCode = H, a.hooks.run("before-insert", k), k.element.innerHTML = k.highlightedCode, a.hooks.run("after-highlight", k), a.hooks.run("complete", k), w && w.call(k.element);
        }
        if (a.hooks.run("before-sanity-check", k), A = k.element.parentElement, A && A.nodeName.toLowerCase() === "pre" && !A.hasAttribute("tabindex") && A.setAttribute("tabindex", "0"), !k.code) {
          a.hooks.run("complete", k), w && w.call(k.element);
          return;
        }
        if (a.hooks.run("before-highlight", k), !k.grammar) {
          B(a.util.encode(k.code));
          return;
        }
        if (m && r.Worker) {
          var $ = new Worker(a.filename);
          $.onmessage = function(H) {
            B(H.data);
          }, $.postMessage(JSON.stringify({
            language: k.language,
            code: k.code,
            immediateClose: !0
          }));
        } else
          B(a.highlight(k.code, k.grammar, k.language));
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
      highlight: function(h, m, w) {
        var E = {
          code: h,
          grammar: m,
          language: w
        };
        if (a.hooks.run("before-tokenize", E), !E.grammar)
          throw new Error('The language "' + E.language + '" has no grammar.');
        return E.tokens = a.tokenize(E.code, E.grammar), a.hooks.run("after-tokenize", E), l.stringify(a.util.encode(E.tokens), E.language);
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
        var w = m.rest;
        if (w) {
          for (var E in w)
            m[E] = w[E];
          delete m.rest;
        }
        var _ = new f();
        return p(_, _.head, h), c(h, _, m, _.head, 0), y(_);
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
          var w = a.hooks.all;
          w[h] = w[h] || [], w[h].push(m);
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
          var w = a.hooks.all[h];
          if (!(!w || !w.length))
            for (var E = 0, _; _ = w[E++]; )
              _(m);
        }
      },
      Token: l
    };
    r.Prism = a;
    function l(h, m, w, E) {
      this.type = h, this.content = m, this.alias = w, this.length = (E || "").length | 0;
    }
    l.stringify = function h(m, w) {
      if (typeof m == "string")
        return m;
      if (Array.isArray(m)) {
        var E = "";
        return m.forEach(function(B) {
          E += h(B, w);
        }), E;
      }
      var _ = {
        type: m.type,
        content: h(m.content, w),
        tag: "span",
        classes: ["token", m.type],
        attributes: {},
        language: w
      }, A = m.alias;
      A && (Array.isArray(A) ? Array.prototype.push.apply(_.classes, A) : _.classes.push(A)), a.hooks.run("wrap", _);
      var N = "";
      for (var k in _.attributes)
        N += " " + k + '="' + (_.attributes[k] || "").replace(/"/g, "&quot;") + '"';
      return "<" + _.tag + ' class="' + _.classes.join(" ") + '"' + N + ">" + _.content + "</" + _.tag + ">";
    };
    function u(h, m, w, E) {
      h.lastIndex = m;
      var _ = h.exec(w);
      if (_ && E && _[1]) {
        var A = _[1].length;
        _.index += A, _[0] = _[0].slice(A);
      }
      return _;
    }
    function c(h, m, w, E, _, A) {
      for (var N in w)
        if (!(!w.hasOwnProperty(N) || !w[N])) {
          var k = w[N];
          k = Array.isArray(k) ? k : [k];
          for (var B = 0; B < k.length; ++B) {
            if (A && A.cause == N + "," + B)
              return;
            var $ = k[B], H = $.inside, Q = !!$.lookbehind, pe = !!$.greedy, _e = $.alias;
            if (pe && !$.pattern.global) {
              var re = $.pattern.toString().match(/[imsuy]*$/)[0];
              $.pattern = RegExp($.pattern.source, re + "g");
            }
            for (var se = $.pattern || $, q = E.next, de = _; q !== m.tail && !(A && de >= A.reach); de += q.value.length, q = q.next) {
              var Te = q.value;
              if (m.length > h.length)
                return;
              if (!(Te instanceof l)) {
                var ze = 1, ae;
                if (pe) {
                  if (ae = u(se, de, h, Q), !ae || ae.index >= h.length)
                    break;
                  var Re = ae.index, Ot = ae.index + ae[0].length, Se = de;
                  for (Se += q.value.length; Re >= Se; )
                    q = q.next, Se += q.value.length;
                  if (Se -= q.value.length, de = Se, q.value instanceof l)
                    continue;
                  for (var Be = q; Be !== m.tail && (Se < Ot || typeof Be.value == "string"); Be = Be.next)
                    ze++, Se += Be.value.length;
                  ze--, Te = h.slice(de, Se), ae.index -= de;
                } else if (ae = u(se, 0, Te, Q), !ae)
                  continue;
                var Re = ae.index, Fe = ae[0], Ie = Te.slice(0, Re), qe = Te.slice(Re + Fe.length), De = de + Te.length;
                A && De > A.reach && (A.reach = De);
                var Ze = q.prev;
                Ie && (Ze = p(m, Ze, Ie), de += Ie.length), b(m, Ze, ze);
                var Rt = new l(N, H ? a.tokenize(Fe, H) : Fe, _e, Fe);
                if (q = p(m, Ze, Rt), qe && p(m, q, qe), ze > 1) {
                  var dt = {
                    cause: N + "," + B,
                    reach: De
                  };
                  c(h, m, w, q.prev, de, dt), A && dt.reach > A.reach && (A.reach = dt.reach);
                }
              }
            }
          }
        }
    }
    function f() {
      var h = { value: null, prev: null, next: null }, m = { value: null, prev: h, next: null };
      h.next = m, this.head = h, this.tail = m, this.length = 0;
    }
    function p(h, m, w) {
      var E = m.next, _ = { value: w, prev: m, next: E };
      return m.next = _, E.prev = _, h.length++, _;
    }
    function b(h, m, w) {
      for (var E = m.next, _ = 0; _ < w && E !== h.tail; _++)
        E = E.next;
      m.next = E, E.prev = m, h.length -= _;
    }
    function y(h) {
      for (var m = [], w = h.head.next; w !== h.tail; )
        m.push(w.value), w = w.next;
      return m;
    }
    if (!r.document)
      return r.addEventListener && (a.disableWorkerMessageHandler || r.addEventListener("message", function(h) {
        var m = JSON.parse(h.data), w = m.language, E = m.code, _ = m.immediateClose;
        r.postMessage(a.highlight(E, a.languages[w], w)), _ && r.close();
      }, !1)), a;
    var v = a.util.currentScript();
    v && (a.filename = v.src, v.hasAttribute("data-manual") && (a.manual = !0));
    function x() {
      a.manual || a.highlightAll();
    }
    if (!a.manual) {
      var C = document.readyState;
      C === "loading" || C === "interactive" && v && v.defer ? document.addEventListener("DOMContentLoaded", x) : window.requestAnimationFrame ? window.requestAnimationFrame(x) : window.setTimeout(x, 16);
    }
    return a;
  }(e);
  n.exports && (n.exports = t), typeof Ar < "u" && (Ar.Prism = t), t.languages.markup = {
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
    var r = "Loading…", i = function(v, x) {
      return "✖ Error " + v + " while fetching file: " + x;
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
    }, a = "data-src-status", l = "loading", u = "loaded", c = "failed", f = "pre[data-src]:not([" + a + '="' + u + '"]):not([' + a + '="' + l + '"])';
    function p(v, x, C) {
      var h = new XMLHttpRequest();
      h.open("GET", v, !0), h.onreadystatechange = function() {
        h.readyState == 4 && (h.status < 400 && h.responseText ? x(h.responseText) : h.status >= 400 ? C(i(h.status, h.statusText)) : C(o));
      }, h.send(null);
    }
    function b(v) {
      var x = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v || "");
      if (x) {
        var C = Number(x[1]), h = x[2], m = x[3];
        return h ? m ? [C, Number(m)] : [C, void 0] : [C, C];
      }
    }
    t.hooks.add("before-highlightall", function(v) {
      v.selector += ", " + f;
    }), t.hooks.add("before-sanity-check", function(v) {
      var x = (
        /** @type {HTMLPreElement} */
        v.element
      );
      if (x.matches(f)) {
        v.code = "", x.setAttribute(a, l);
        var C = x.appendChild(document.createElement("CODE"));
        C.textContent = r;
        var h = x.getAttribute("data-src"), m = v.language;
        if (m === "none") {
          var w = (/\.(\w+)$/.exec(h) || [, "none"])[1];
          m = s[w] || w;
        }
        t.util.setLanguage(C, m), t.util.setLanguage(x, m);
        var E = t.plugins.autoloader;
        E && E.loadLanguages(m), p(
          h,
          function(_) {
            x.setAttribute(a, u);
            var A = b(x.getAttribute("data-range"));
            if (A) {
              var N = _.split(/\r\n?|\n/g), k = A[0], B = A[1] == null ? N.length : A[1];
              k < 0 && (k += N.length), k = Math.max(0, Math.min(k - 1, N.length)), B < 0 && (B += N.length), B = Math.max(0, Math.min(B, N.length)), _ = N.slice(k, B).join(`
`), x.hasAttribute("data-start") || x.setAttribute("data-start", String(k + 1));
            }
            C.textContent = _, t.highlightElement(C);
          },
          function(_) {
            x.setAttribute(a, c), C.textContent = _;
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
      highlight: function(x) {
        for (var C = (x || document).querySelectorAll(f), h = 0, m; m = C[h++]; )
          t.highlightElement(m);
      }
    };
    var y = !1;
    t.fileHighlight = function() {
      y || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), y = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(Pl);
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
  function t(c) {
    return c = c.replace(/<inner>/g, function() {
      return e;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + c + ")");
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
  }), ["url", "bold", "italic", "strike"].forEach(function(c) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(f) {
      c !== f && (n.languages.markdown[c].inside.content.inside[f] = n.languages.markdown[f]);
    });
  }), n.hooks.add("after-tokenize", function(c) {
    if (c.language !== "markdown" && c.language !== "md")
      return;
    function f(p) {
      if (!(!p || typeof p == "string"))
        for (var b = 0, y = p.length; b < y; b++) {
          var v = p[b];
          if (v.type !== "code") {
            f(v.content);
            continue;
          }
          var x = v.content[1], C = v.content[3];
          if (x && C && x.type === "code-language" && C.type === "code-block" && typeof x.content == "string") {
            var h = x.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
            h = (/[a-z][\w-]*/i.exec(h) || [""])[0].toLowerCase();
            var m = "language-" + h;
            C.alias ? typeof C.alias == "string" ? C.alias = [C.alias, m] : C.alias.push(m) : C.alias = [m];
          }
        }
    }
    f(c.tokens);
  }), n.hooks.add("wrap", function(c) {
    if (c.type === "code-block") {
      for (var f = "", p = 0, b = c.classes.length; p < b; p++) {
        var y = c.classes[p], v = /language-(.+)/.exec(y);
        if (v) {
          f = v[1];
          break;
        }
      }
      var x = n.languages[f];
      if (x)
        c.content = n.highlight(u(c.content), x, f);
      else if (f && f !== "none" && n.plugins.autoloader) {
        var C = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
        c.attributes.id = C, n.plugins.autoloader.loadLanguages(f, function() {
          var h = document.getElementById(C);
          h && (h.innerHTML = n.highlight(h.textContent, n.languages[f], f));
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
  function u(c) {
    var f = c.replace(s, "");
    return f = f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(p, b) {
      if (b = b.toLowerCase(), b[0] === "#") {
        var y;
        return b[1] === "x" ? y = parseInt(b.slice(2), 16) : y = Number(b.slice(1)), l(y);
      } else {
        var v = a[b];
        return v || p;
      }
    }), f;
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
const jl = globalThis.Prism || window.Prism, ti = (n) => {
  try {
    return !!n && jl.languages.hasOwnProperty(n);
  } catch {
    return !1;
  }
};
function vo(n, e) {
  for (const t of n.childNodes) {
    if (X(t) && t.tagName === e) return !0;
    vo(t, e);
  }
  return !1;
}
const wt = "data-language", Ut = "data-highlight-language";
let xo = class Eo extends xe {
  static getType() {
    return "code";
  }
  static clone(e) {
    return new Eo(e.__language, e.__key);
  }
  constructor(e, t) {
    super(t), this.__language = e || void 0, this.__isSyntaxHighlightSupported = ti(e);
  }
  createDOM(e) {
    const t = document.createElement("code");
    te(t, e.theme.code), t.setAttribute("spellcheck", "false");
    const r = this.getLanguage();
    return r && (t.setAttribute(wt, r), this.getIsSyntaxHighlightSupported() && t.setAttribute(Ut, r)), t;
  }
  updateDOM(e, t, r) {
    const i = this.__language, o = e.__language;
    return i ? i !== o && (t.setAttribute(wt, i), this.__isSyntaxHighlightSupported && t.setAttribute(Ut, i)) : o && (t.removeAttribute(wt), e.__isSyntaxHighlightSupported && t.removeAttribute(Ut)), !1;
  }
  exportDOM(e) {
    const t = document.createElement("pre");
    te(t, e._config.theme.code), t.setAttribute("spellcheck", "false");
    const r = this.getLanguage();
    return r && (t.setAttribute(wt, r), this.getIsSyntaxHighlightSupported() && t.setAttribute(Ut, r)), { element: t };
  }
  static importDOM() {
    return { code: (e) => e.textContent != null && (/\r?\n/.test(e.textContent) || vo(e, "BR")) ? { conversion: ni, priority: 1 } : null, div: () => ({ conversion: Ul, priority: 1 }), pre: () => ({ conversion: ni, priority: 0 }), table: (e) => bn(e) ? { conversion: zl, priority: 3 } : null, td: (e) => {
      const t = e, r = t.closest("table");
      return t.classList.contains("js-file-line") || r && bn(r) ? { conversion: ri, priority: 3 } : null;
    }, tr: (e) => {
      const t = e.closest("table");
      return t && bn(t) ? { conversion: ri, priority: 3 } : null;
    } };
  }
  static importJSON(e) {
    return Tt().updateFromJSON(e);
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
      const l = G();
      return this.insertAfter(l, t), l;
    }
    const { anchor: o, focus: s } = e, a = (o.isBefore(s) ? o : s).getNode();
    if (V(a)) {
      let l = Hl(a);
      const u = [];
      for (; ; ) if (Hi(l)) u.push(zn()), l = l.getNextSibling();
      else {
        if (!No(l)) break;
        {
          let x = 0;
          const C = l.getTextContent(), h = l.getTextContentSize();
          for (; x < h && C[x] === " "; ) x++;
          if (x !== 0 && u.push(To(" ".repeat(x))), x !== h) break;
          l = l.getNextSibling();
        }
      }
      const c = a.splitText(o.offset)[0], f = o.offset === 0 ? 0 : 1, p = c.getIndexWithinParent() + f, b = a.getParentOrThrow(), y = [Bt(), ...u];
      b.splice(p, 0, y);
      const v = u[u.length - 1];
      v ? v.select() : o.offset === 0 ? c.selectPrevious() : c.getNextSibling().selectNext(0, 0);
    }
    if (So(a)) {
      const { offset: l } = e.anchor;
      a.splice(l, 0, [Bt()]), a.select(l + 1, l + 1);
    }
    return null;
  }
  canIndent() {
    return !1;
  }
  collapseAtStart() {
    const e = G();
    return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
  }
  setLanguage(e) {
    const t = this.getWritable();
    return t.__language = e || void 0, t.__isSyntaxHighlightSupported = ti(e), t;
  }
  getLanguage() {
    return this.getLatest().__language;
  }
  getIsSyntaxHighlightSupported() {
    return this.getLatest().__isSyntaxHighlightSupported;
  }
};
function Tt(n) {
  return he(new xo(n));
}
function So(n) {
  return n instanceof xo;
}
function ni(n) {
  return { node: Tt(n.getAttribute(wt)) };
}
function Ul(n) {
  const e = n, t = ii(e);
  return t || function(r) {
    let i = r.parentElement;
    for (; i !== null; ) {
      if (ii(i)) return !0;
      i = i.parentElement;
    }
    return !1;
  }(e) ? { node: t ? Tt() : null } : { node: null };
}
function zl() {
  return { node: Tt() };
}
function ri() {
  return { node: null };
}
function ii(n) {
  return n.style.fontFamily.match("monospace") !== null;
}
function bn(n) {
  return n.classList.contains("js-file-line-container");
}
const Bl = { cpp: "cpp", java: "java", javascript: "js", md: "markdown", plaintext: "plain", python: "py", text: "plain", ts: "typescript" };
let Co = class Ao extends Ki {
  constructor(e = "", t, r) {
    super(e, r), this.__highlightType = t;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(e) {
    return new Ao(e.__text, e.__highlightType || void 0, e.__key);
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
    const t = super.createDOM(e), r = yn(e.theme, this.__highlightType);
    return te(t, r), t;
  }
  updateDOM(e, t, r) {
    const i = super.updateDOM(e, t, r), o = yn(r.theme, e.__highlightType), s = yn(r.theme, this.__highlightType);
    return o !== s && (o && Ve(t, o), s && te(t, s)), i;
  }
  static importJSON(e) {
    return To().updateFromJSON(e);
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
    return Tt();
  }
};
function yn(n, e) {
  return e && n && n.codeHighlight && n.codeHighlight[e];
}
function To(n = "", e) {
  return he(new Co(n, e));
}
function No(n) {
  return n instanceof Co;
}
function Wl(n, e) {
  let t = n;
  for (let r = Gs(n, e); r && (No(r.origin) || Hi(r.origin)); r = Na(r)) t = r.origin;
  return t;
}
function Hl(n) {
  return Wl(n, "previous");
}
function Ce(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e) r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Kl(n) {
  let e = 1, t = n.getParent();
  for (; t != null; ) {
    if (U(t)) {
      const r = t.getParent();
      if (I(r)) {
        e++, t = r.getParent();
        continue;
      }
      Ce(40);
    }
    return e;
  }
  return e;
}
function In(n) {
  let e = n.getParent();
  I(e) || Ce(40);
  let t = e;
  for (; t !== null; ) t = t.getParent(), I(t) && (e = t);
  return e;
}
function ko(n) {
  let e = [];
  const t = n.getChildren().filter(U);
  for (let r = 0; r < t.length; r++) {
    const i = t[r], o = i.getFirstChild();
    I(o) ? e = e.concat(ko(o)) : e.push(i);
  }
  return e;
}
function Ae(n) {
  return U(n) && I(n.getFirstChild());
}
function oi(n) {
  return fe().append(n);
}
function Oo(n, e) {
  return U(n) && (e.length === 0 || e.length === 1 && n.is(e[0]) && n.getChildrenSize() === 0);
}
function Dn(n) {
  const e = R();
  if (e !== null) {
    let t = e.getNodes();
    if (O(e)) {
      const i = e.getStartEndPoints();
      i === null && Ce(143);
      const [o] = i, s = o.getNode(), a = s.getParent();
      if (Pe(s)) {
        const l = s.getFirstChild();
        if (l) t = l.selectStart().getNodes();
        else {
          const u = G();
          s.append(u), t = u.select().getNodes();
        }
      } else if (Oo(s, t)) {
        const l = ce(n);
        if (Pe(a)) {
          s.replace(l);
          const u = fe();
          D(s) && (u.setFormat(s.getFormatType()), u.setIndent(s.getIndent())), l.append(u);
        } else if (U(s)) {
          const u = s.getParentOrThrow();
          Je(l, u.getChildren()), u.replace(l);
        }
        return;
      }
    }
    const r = /* @__PURE__ */ new Set();
    for (let i = 0; i < t.length; i++) {
      const o = t[i];
      if (!D(o) || !o.isEmpty() || U(o) || r.has(o.getKey())) {
        if (Vi(o)) {
          let s = o.getParent();
          for (; s != null; ) {
            const a = s.getKey();
            if (I(s)) {
              if (!r.has(a)) {
                const l = ce(n);
                Je(l, s.getChildren()), s.replace(l), r.add(a);
              }
              break;
            }
            {
              const l = s.getParent();
              if (Pe(l) && !r.has(a)) {
                r.add(a), si(s, n);
                break;
              }
              s = l;
            }
          }
        }
      } else si(o, n);
    }
  }
}
function Je(n, e) {
  n.splice(n.getChildrenSize(), 0, e);
}
function si(n, e) {
  if (I(n)) return n;
  const t = n.getPreviousSibling(), r = n.getNextSibling(), i = fe();
  let o;
  if (Je(i, n.getChildren()), I(t) && e === t.getListType()) t.append(i), I(r) && e === r.getListType() && (Je(t, r.getChildren()), r.remove()), o = t;
  else if (I(r) && e === r.getListType()) r.getFirstChildOrThrow().insertBefore(i), o = r;
  else {
    const s = ce(e);
    s.append(i), n.replace(s), o = s;
  }
  return i.setFormat(n.getFormatType()), i.setIndent(n.getIndent()), n.remove(), o;
}
function qn(n, e) {
  const t = n.getLastChild(), r = e.getFirstChild();
  t && r && Ae(t) && Ae(r) && (qn(t.getFirstChild(), r.getFirstChild()), r.remove());
  const i = e.getChildren();
  i.length > 0 && n.append(...i), e.remove();
}
function Jl() {
  const n = R();
  if (O(n)) {
    const e = /* @__PURE__ */ new Set(), t = n.getNodes(), r = n.anchor.getNode();
    if (Oo(r, t)) e.add(In(r));
    else for (let i = 0; i < t.length; i++) {
      const o = t[i];
      if (Vi(o)) {
        const s = oo(o, Ue);
        s != null && e.add(In(s));
      }
    }
    for (const i of e) {
      let o = i;
      const s = ko(i);
      for (const a of s) {
        const l = G().setTextStyle(n.style).setTextFormat(n.format);
        Je(l, a.getChildren()), o.insertAfter(l), o = l, a.__key === n.anchor.key && Er(n.anchor, Sr(Sn(l, "next"))), a.__key === n.focus.key && Er(n.focus, Sr(Sn(l, "next"))), a.remove();
      }
      i.remove();
    }
  }
}
function Vl(n) {
  const e = /* @__PURE__ */ new Set();
  if (Ae(n) || e.has(n.getKey())) return;
  const t = n.getParent(), r = n.getNextSibling(), i = n.getPreviousSibling();
  if (Ae(r) && Ae(i)) {
    const o = i.getFirstChild();
    if (I(o)) {
      o.append(n);
      const s = r.getFirstChild();
      I(s) && (Je(o, s.getChildren()), r.remove(), e.add(r.getKey()));
    }
  } else if (Ae(r)) {
    const o = r.getFirstChild();
    if (I(o)) {
      const s = o.getFirstChild();
      s !== null && s.insertBefore(n);
    }
  } else if (Ae(i)) {
    const o = i.getFirstChild();
    I(o) && o.append(n);
  } else if (I(t)) {
    const o = fe().setTextFormat(t.getTextFormat()).setTextStyle(t.getTextStyle()), s = ce(t.getListType()).setTextFormat(t.getTextFormat()).setTextStyle(t.getTextStyle());
    o.append(s), s.append(n), i ? i.insertAfter(o) : r ? r.insertBefore(o) : t.append(o);
  }
}
function Yl(n) {
  if (Ae(n)) return;
  const e = n.getParent(), t = e ? e.getParent() : void 0;
  if (I(t ? t.getParent() : void 0) && U(t) && I(e)) {
    const r = e ? e.getFirstChild() : void 0, i = e ? e.getLastChild() : void 0;
    if (n.is(r)) t.insertBefore(n), e.isEmpty() && t.remove();
    else if (n.is(i)) t.insertAfter(n), e.isEmpty() && t.remove();
    else {
      const o = e.getListType(), s = fe(), a = ce(o);
      s.append(a), n.getPreviousSiblings().forEach((c) => a.append(c));
      const l = fe(), u = ce(o);
      l.append(u), Je(u, n.getNextSiblings()), t.insertBefore(s), t.insertAfter(l), t.replace(n);
    }
  }
}
function Gl() {
  const n = R();
  if (!O(n) || !n.isCollapsed()) return !1;
  const e = n.anchor.getNode();
  if (!U(e) || e.getChildrenSize() !== 0) return !1;
  const t = In(e), r = e.getParent();
  I(r) || Ce(40);
  const i = r.getParent();
  let o;
  if (Pe(i)) o = G(), t.insertAfter(o);
  else {
    if (!U(i)) return !1;
    o = fe(), i.insertAfter(o);
  }
  o.setTextStyle(n.style).setTextFormat(n.format).select();
  const s = e.getNextSiblings();
  if (s.length > 0) {
    const a = ce(r.getListType());
    if (U(o)) {
      const l = fe();
      l.append(a), o.insertAfter(l);
    } else o.insertAfter(a);
    a.append(...s);
  }
  return function(a) {
    let l = a;
    for (; l.getNextSibling() == null && l.getPreviousSibling() == null; ) {
      const u = l.getParent();
      if (u == null || !U(u) && !I(u)) break;
      l = u;
    }
    l.remove();
  }(e), !0;
}
function Jt(...n) {
  const e = [];
  for (const t of n) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) e.push(r);
  return e;
}
class Ue extends xe {
  static getType() {
    return "listitem";
  }
  static clone(e) {
    return new Ue(e.__value, e.__checked, e.__key);
  }
  constructor(e, t, r) {
    super(r), this.__value = e === void 0 ? 1 : e, this.__checked = t;
  }
  createDOM(e) {
    const t = document.createElement("li"), r = this.getParent();
    I(r) && r.getListType() === "check" && li(t, this, null), t.value = this.__value, ai(t, e.theme, this);
    const i = this.__style || this.__textStyle;
    return i && (t.style.cssText = i), t;
  }
  updateDOM(e, t, r) {
    const i = this.getParent();
    I(i) && i.getListType() === "check" && li(t, this, e), t.value = this.__value, ai(t, r.theme, this);
    const o = e.__style || e.__textStyle, s = this.__style || this.__textStyle;
    return o !== s && (t.style.cssText = s, s === "" && t.removeAttribute("style")), !1;
  }
  static transform() {
    return (e) => {
      if (U(e) || Ce(144), e.__checked == null) return;
      const t = e.getParent();
      I(t) && t.getListType() !== "check" && e.getChecked() != null && e.setChecked(void 0);
    };
  }
  static importDOM() {
    return { li: () => ({ conversion: ql, priority: 0 }) };
  }
  static importJSON(e) {
    return fe().updateFromJSON(e);
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
    if (U(e)) return super.replace(e);
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
    return t && (D(e) || Ce(139), this.getChildren().forEach((i) => {
      e.append(i);
    })), this.remove(), r.getChildrenSize() === 0 && r.remove(), e;
  }
  insertAfter(e, t = !0) {
    const r = this.getParentOrThrow();
    if (I(r) || Ce(39), U(e)) return super.insertAfter(e, t);
    const i = this.getNextSiblings();
    if (r.insertAfter(e, t), i.length !== 0) {
      const o = ce(r.getListType());
      i.forEach((s) => o.append(s)), e.insertAfter(o, t);
    }
    return e;
  }
  remove(e) {
    const t = this.getPreviousSibling(), r = this.getNextSibling();
    super.remove(e), t && r && Ae(t) && Ae(r) && (qn(t.getFirstChild(), r.getFirstChild()), r.remove());
  }
  insertNewAfter(e, t = !0) {
    const r = fe().updateFromJSON(this.exportJSON()).setChecked(!this.getChecked() && void 0);
    return this.insertAfter(r, t), r;
  }
  collapseAtStart(e) {
    const t = G();
    this.getChildren().forEach((s) => t.append(s));
    const r = this.getParentOrThrow(), i = r.getParentOrThrow(), o = U(i);
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
    for (; U(t); ) t = t.getParentOrThrow().getParentOrThrow(), r++;
    return r;
  }
  setIndent(e) {
    typeof e != "number" && Ce(117), (e = Math.floor(e)) >= 0 || Ce(199);
    let t = this.getIndent();
    for (; t !== e; ) t < e ? (Vl(this), t++) : (Yl(this), t--);
    return this;
  }
  canInsertAfter(e) {
    return U(e);
  }
  canReplaceWith(e) {
    return U(e);
  }
  canMergeWith(e) {
    return U(e) || jn(e);
  }
  extractWithChild(e, t) {
    if (!O(t)) return !1;
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
function ai(n, e, t) {
  const r = [], i = [], o = e.list, s = o ? o.listitem : void 0;
  let a;
  if (o && o.nested && (a = o.nested.listitem), s !== void 0 && r.push(...Jt(s)), o) {
    const l = t.getParent(), u = I(l) && l.getListType() === "check", c = t.getChecked();
    u && !c || i.push(o.listitemUnchecked), u && c || i.push(o.listitemChecked), u && r.push(c ? o.listitemChecked : o.listitemUnchecked);
  }
  if (a !== void 0) {
    const l = Jt(a);
    t.getChildren().some((u) => I(u)) ? r.push(...l) : i.push(...l);
  }
  i.length > 0 && Ve(n, ...i), r.length > 0 && te(n, ...r);
}
function li(n, e, t, r) {
  I(e.getFirstChild()) ? (n.removeAttribute("role"), n.removeAttribute("tabIndex"), n.removeAttribute("aria-checked")) : (n.setAttribute("role", "checkbox"), n.setAttribute("tabIndex", "-1"), t && e.__checked === t.__checked || n.setAttribute("aria-checked", e.getChecked() ? "true" : "false"));
}
function ql(n) {
  if (n.classList.contains("task-list-item")) {
    for (const t of n.children) if (t.tagName === "INPUT") return Zl(t);
  }
  const e = n.getAttribute("aria-checked");
  return { node: fe(e === "true" || e !== "false" && void 0) };
}
function Zl(n) {
  return n.getAttribute("type") !== "checkbox" ? { node: null } : { node: fe(n.hasAttribute("checked")) };
}
function fe(n) {
  return he(new Ue(void 0, n));
}
function U(n) {
  return n instanceof Ue;
}
class Ye extends xe {
  static getType() {
    return "list";
  }
  static clone(e) {
    const t = e.__listType || di[e.__tag];
    return new Ye(t, e.__start, e.__key);
  }
  constructor(e = "number", t = 1, r) {
    super(r);
    const i = di[e] || e;
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
    return this.__start !== 1 && i.setAttribute("start", String(this.__start)), i.__lexicalListType = this.__listType, ui(i, e.theme, this), i;
  }
  updateDOM(e, t, r) {
    return e.__tag !== this.__tag || (ui(t, r.theme, this), !1);
  }
  static transform() {
    return (e) => {
      I(e) || Ce(163), function(t) {
        const r = t.getNextSibling();
        I(r) && t.getListType() === r.getListType() && qn(t, r);
      }(e), function(t) {
        const r = t.getListType() !== "check";
        let i = t.getStart();
        for (const o of t.getChildren()) U(o) && (o.getValue() !== i && o.setValue(i), r && o.getLatest().__checked != null && o.setChecked(void 0), I(o.getFirstChild()) || i++);
      }(e);
    };
  }
  static importDOM() {
    return { ol: () => ({ conversion: ci, priority: 0 }), ul: () => ({ conversion: ci, priority: 0 }) };
  }
  static importJSON(e) {
    return ce().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setListType(e.listType).setStart(e.start);
  }
  exportDOM(e) {
    const t = this.createDOM(e._config, e);
    return X(t) && (this.__start !== 1 && t.setAttribute("start", String(this.__start)), this.__listType === "check" && t.setAttribute("__lexicalListType", "check")), { element: t };
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
      if (U(r)) super.append(r);
      else {
        const i = fe();
        if (I(r)) i.append(r);
        else if (D(r)) if (r.isInline()) i.append(r);
        else {
          const o = Ji(r.getTextContent());
          i.append(o);
        }
        else i.append(r);
        super.append(i);
      }
    }
    return this;
  }
  extractWithChild(e) {
    return U(e);
  }
}
function ui(n, e, t) {
  const r = [], i = [], o = e.list;
  if (o !== void 0) {
    const s = o[`${t.__tag}Depth`] || [], a = Kl(t) - 1, l = a % s.length, u = s[l], c = o[t.__tag];
    let f;
    const p = o.nested, b = o.checklist;
    if (p !== void 0 && p.list && (f = p.list), c !== void 0 && r.push(c), b !== void 0 && t.__listType === "check" && r.push(b), u !== void 0) {
      r.push(...Jt(u));
      for (let y = 0; y < s.length; y++) y !== l && i.push(t.__tag + y);
    }
    if (f !== void 0) {
      const y = Jt(f);
      a > 1 ? r.push(...y) : i.push(...y);
    }
  }
  i.length > 0 && Ve(n, ...i), r.length > 0 && te(n, ...r);
}
function Xl(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    if (U(r)) {
      e.push(r);
      const i = r.getChildren();
      i.length > 1 && i.forEach((o) => {
        I(o) && e.push(oi(o));
      });
    } else e.push(oi(r));
  }
  return e;
}
function ci(n) {
  const e = n.nodeName.toLowerCase();
  let t = null;
  return e === "ol" ? t = ce("number", n.start) : e === "ul" && (t = function(r) {
    if (r.getAttribute("__lexicallisttype") === "check" || r.classList.contains("contains-task-list")) return !0;
    for (const i of r.childNodes) if (X(i) && i.hasAttribute("aria-checked")) return !0;
    return !1;
  }(n) ? ce("check") : ce("bullet")), { after: Xl, node: t };
}
const di = { ol: "number", ul: "bullet" };
function ce(n = "number", e = 1) {
  return he(new Ye(n, e));
}
function I(n) {
  return n instanceof Ye;
}
const Ro = Oe("INSERT_UNORDERED_LIST_COMMAND"), Fo = Oe("INSERT_ORDERED_LIST_COMMAND"), Io = Oe("INSERT_CHECK_LIST_COMMAND"), Ql = Oe("REMOVE_LIST_COMMAND");
function eu(n) {
  return Ee(n.registerCommand(Fo, () => (Dn("number"), !0), oe), n.registerCommand(Ro, () => (Dn("bullet"), !0), oe), n.registerCommand(Ql, () => (Jl(), !0), oe), n.registerCommand(An, () => Gl(), oe), n.registerNodeTransform(Ue, (e) => {
    const t = e.getFirstChild();
    if (t) {
      if (V(t)) {
        const r = t.getStyle(), i = t.getFormat();
        e.getTextStyle() !== r && e.setTextStyle(r), e.getTextFormat() !== i && e.setTextFormat(i);
      }
    } else {
      const r = R();
      O(r) && (r.style !== e.getTextStyle() || r.format !== e.getTextFormat()) && r.isCollapsed() && e.is(r.anchor.getNode()) && e.setTextStyle(r.style).setTextFormat(r.format);
    }
  }), n.registerNodeTransform(Ki, (e) => {
    const t = e.getParent();
    if (U(t) && e.is(t.getFirstChild())) {
      const r = e.getStyle(), i = e.getFormat();
      r === t.getTextStyle() && i === t.getTextFormat() || t.setTextStyle(r).setTextFormat(i);
    }
  }));
}
function tu(n, e) {
  n.update(() => Dn(e));
}
const Zn = /^(\d+(?:\.\d+)?)px$/, ot = { BOTH: 3, NO_STATUS: 0, ROW: 1 };
class Nt extends xe {
  static getType() {
    return "tablecell";
  }
  static clone(e) {
    return new Nt(e.__headerState, e.__colSpan, e.__width, e.__key);
  }
  afterCloneFrom(e) {
    super.afterCloneFrom(e), this.__rowSpan = e.__rowSpan, this.__backgroundColor = e.__backgroundColor, this.__verticalAlign = e.__verticalAlign;
  }
  static importDOM() {
    return { td: (e) => ({ conversion: gi, priority: 0 }), th: (e) => ({ conversion: gi, priority: 0 }) };
  }
  static importJSON(e) {
    return Do().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setHeaderStyles(e.headerState).setColSpan(e.colSpan || 1).setRowSpan(e.rowSpan || 1).setWidth(e.width || void 0).setBackgroundColor(e.backgroundColor || null).setVerticalAlign(e.verticalAlign || void 0);
  }
  constructor(e = ot.NO_STATUS, t = 1, r, i) {
    super(i), this.__colSpan = t, this.__rowSpan = 1, this.__headerState = e, this.__width = r, this.__backgroundColor = null, this.__verticalAlign = void 0;
  }
  createDOM(e) {
    const t = document.createElement(this.getTag());
    return this.__width && (t.style.width = `${this.__width}px`), this.__colSpan > 1 && (t.colSpan = this.__colSpan), this.__rowSpan > 1 && (t.rowSpan = this.__rowSpan), this.__backgroundColor !== null && (t.style.backgroundColor = this.__backgroundColor), Ln(this.__verticalAlign) && (t.style.verticalAlign = this.__verticalAlign), te(t, e.theme.tableCell, this.hasHeader() && e.theme.tableCellHeader), t;
  }
  exportDOM(e) {
    const t = super.exportDOM(e);
    if (X(t.element)) {
      const r = t.element;
      r.setAttribute("data-temporary-table-cell-lexical-key", this.getKey()), r.style.border = "1px solid black", this.__colSpan > 1 && (r.colSpan = this.__colSpan), this.__rowSpan > 1 && (r.rowSpan = this.__rowSpan), r.style.width = `${this.getWidth() || 75}px`, r.style.verticalAlign = this.getVerticalAlign() || "top", r.style.textAlign = "start", this.__backgroundColor === null && this.hasHeader() && (r.style.backgroundColor = "#f2f3f5");
    }
    return t;
  }
  exportJSON() {
    return { ...super.exportJSON(), ...Ln(this.__verticalAlign) && { verticalAlign: this.__verticalAlign }, backgroundColor: this.getBackgroundColor(), colSpan: this.__colSpan, headerState: this.__headerState, rowSpan: this.__rowSpan, width: this.getWidth() };
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
  setHeaderStyles(e, t = ot.BOTH) {
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
    return this.getLatest().__headerState !== ot.NO_STATUS;
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
function Ln(n) {
  return n === "middle" || n === "bottom";
}
function gi(n) {
  const e = n, t = n.nodeName.toLowerCase();
  let r;
  Zn.test(e.style.width) && (r = parseFloat(e.style.width));
  const i = Do(t === "th" ? ot.ROW : ot.NO_STATUS, e.colSpan, r);
  i.__rowSpan = e.rowSpan;
  const o = e.style.backgroundColor;
  o !== "" && (i.__backgroundColor = o);
  const s = e.style.verticalAlign;
  Ln(s) && (i.__verticalAlign = s);
  const a = e.style, l = (a && a.textDecoration || "").split(" "), u = a.fontWeight === "700" || a.fontWeight === "bold", c = l.includes("line-through"), f = a.fontStyle === "italic", p = l.includes("underline");
  return { after: (b) => (b.length === 0 && b.push(G()), b), forChild: (b, y) => {
    if (ue(y) && !D(b)) {
      const v = G();
      return Qs(b) && b.getTextContent() === `
` ? null : (V(b) && (u && b.toggleFormat("bold"), c && b.toggleFormat("strikethrough"), f && b.toggleFormat("italic"), p && b.toggleFormat("underline")), v.append(b), v);
    }
    return b;
  }, node: i };
}
function Do(n = ot.NO_STATUS, e = 1, t) {
  return he(new Nt(n, e, t));
}
function ue(n) {
  return n instanceof Nt;
}
Oe("INSERT_TABLE_COMMAND");
function Z(n, ...e) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", n);
  for (const i of e) r.append("v", i);
  throw t.search = r.toString(), Error(`Minified Lexical error #${n}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
class tn extends xe {
  static getType() {
    return "tablerow";
  }
  static clone(e) {
    return new tn(e.__height, e.__key);
  }
  static importDOM() {
    return { tr: (e) => ({ conversion: nu, priority: 0 }) };
  }
  static importJSON(e) {
    return Lo().updateFromJSON(e);
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
    return this.__height && (t.style.height = `${this.__height}px`), te(t, e.theme.tableRow), t;
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
function nu(n) {
  const e = n;
  let t;
  return Zn.test(e.style.height) && (t = parseFloat(e.style.height)), { after: (r) => lo(r, ue), node: Lo(t) };
}
function Lo(n) {
  return he(new tn(n));
}
function kt(n) {
  return n instanceof tn;
}
const Mo = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, ru = Mo && "documentMode" in document ? document.documentMode : null;
Mo && "InputEvent" in window && !ru && new window.InputEvent("input");
function iu(n, e, t) {
  const [r, i, o] = $o(n, e, t);
  return i === null && Z(207), o === null && Z(208), [r, i, o];
}
function $o(n, e, t) {
  const r = [];
  let i = null, o = null;
  function s(l) {
    let u = r[l];
    return u === void 0 && (r[l] = u = []), u;
  }
  const a = n.getChildren();
  for (let l = 0; l < a.length; l++) {
    const u = a[l];
    kt(u) || Z(209);
    const c = s(l);
    for (let f = u.getFirstChild(), p = 0; f != null; f = f.getNextSibling()) {
      for (ue(f) || Z(147); c[p] !== void 0; ) p++;
      const b = { cell: f, startColumn: p, startRow: l }, { __rowSpan: y, __colSpan: v } = f;
      for (let x = 0; x < y && !(l + x >= a.length); x++) {
        const C = s(l + x);
        for (let h = 0; h < v; h++) C[p + h] = b;
      }
      e !== null && i === null && e.is(f) && (i = b), t !== null && o === null && t.is(f) && (o = b);
    }
  }
  return [r, i, o];
}
function ou(n) {
  let e;
  if (n instanceof Nt) e = n;
  else if ("__type" in n) {
    const i = ye(n, ue);
    ue(i) || Z(148), e = i;
  } else {
    const i = ye(n.getNode(), ue);
    ue(i) || Z(148), e = i;
  }
  const t = e.getParent();
  kt(t) || Z(149);
  const r = t.getParent();
  return Vt(r) || Z(210), [e, t, r];
}
function su(n, e, t) {
  let r, i = Math.min(e.startColumn, t.startColumn), o = Math.min(e.startRow, t.startRow), s = Math.max(e.startColumn + e.cell.__colSpan - 1, t.startColumn + t.cell.__colSpan - 1), a = Math.max(e.startRow + e.cell.__rowSpan - 1, t.startRow + t.cell.__rowSpan - 1);
  do {
    r = !1;
    for (let l = 0; l < n.length; l++) for (let u = 0; u < n[0].length; u++) {
      const c = n[l][u];
      if (!c) continue;
      const f = c.startColumn + c.cell.__colSpan - 1, p = c.startRow + c.cell.__rowSpan - 1, b = c.startColumn <= s && f >= i, y = c.startRow <= a && p >= o;
      if (b && y) {
        const v = Math.min(i, c.startColumn), x = Math.max(s, f), C = Math.min(o, c.startRow), h = Math.max(a, p);
        v === i && x === s && C === o && h === a || (i = v, s = x, o = C, a = h, r = !0);
      }
    }
  } while (r);
  return { maxColumn: s, maxRow: a, minColumn: i, minRow: o };
}
function fi(n) {
  const [e, , t] = ou(n), r = t.getChildren(), i = r.length, o = r[0].getChildren().length, s = new Array(i);
  for (let a = 0; a < i; a++) s[a] = new Array(o);
  for (let a = 0; a < i; a++) {
    const l = r[a].getChildren();
    let u = 0;
    for (let c = 0; c < l.length; c++) {
      for (; s[a][u]; ) u++;
      const f = l[c], p = f.__rowSpan || 1, b = f.__colSpan || 1;
      for (let y = 0; y < p; y++) for (let v = 0; v < b; v++) s[a + y][u + v] = f;
      if (e === f) return { colSpan: b, columnIndex: u, rowIndex: a, rowSpan: p };
      u += b;
    }
  }
  return null;
}
function hi(n) {
  const [[e, t, r, i], [o, s, a, l]] = ["anchor", "focus"].map((u) => {
    const c = n[u].getNode(), f = ye(c, ue);
    ue(f) || Z(238, u, c.getKey(), c.getType());
    const p = f.getParent();
    kt(p) || Z(239, u);
    const b = p.getParent();
    return Vt(b) || Z(240, u), [c, f, p, b];
  });
  return i.is(l) || Z(241), { anchorCell: t, anchorNode: e, anchorRow: r, anchorTable: i, focusCell: s, focusNode: o, focusRow: a, focusTable: l };
}
class Xn {
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
    return Po(e) && this.tableKey === e.tableKey && this.anchor.is(e.anchor) && this.focus.is(e.focus);
  }
  set(e, t, r) {
    this.dirty = this.dirty || e !== this.tableKey || t !== this.anchor.key || r !== this.focus.key, this.tableKey = e, this.anchor.key = t, this.focus.key = r, this._cachedNodes = null;
  }
  clone() {
    return new Xn(this.tableKey, Cr(this.anchor.key, this.anchor.offset, this.anchor.type), Cr(this.focus.key, this.focus.offset, this.focus.type));
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
    this.getNodes().filter(ue).forEach((i) => {
      const o = i.getFirstChild();
      jn(o) && (t |= o.getTextFormat());
    });
    const r = Zs[e];
    return !!(t & r);
  }
  insertNodes(e) {
    const t = this.focus.getNode();
    D(t) || Z(151), Wt(t.select(0, t.getChildrenSize())).insertNodes(e);
  }
  getShape() {
    const { anchorCell: e, focusCell: t } = hi(this), r = fi(e);
    r === null && Z(153);
    const i = fi(t);
    i === null && Z(155);
    const o = Math.min(r.columnIndex, i.columnIndex), s = Math.max(r.columnIndex + r.colSpan - 1, i.columnIndex + i.colSpan - 1), a = Math.min(r.rowIndex, i.rowIndex), l = Math.max(r.rowIndex + r.rowSpan - 1, i.rowIndex + i.rowSpan - 1);
    return { fromX: Math.min(o, s), fromY: Math.min(a, l), toX: Math.max(o, s), toY: Math.max(a, l) };
  }
  getNodes() {
    if (!this.isValid()) return [];
    const e = this._cachedNodes;
    if (e !== null) return e;
    const { anchorTable: t, anchorCell: r, focusCell: i } = hi(this), o = i.getParents()[1];
    if (o !== t) {
      if (t.isParentOf(i)) {
        const x = o.getParent();
        x == null && Z(159), this.set(this.tableKey, i.getKey(), x.getKey());
      } else {
        const x = t.getParent();
        x == null && Z(158), this.set(this.tableKey, x.getKey(), i.getKey());
      }
      return this.getNodes();
    }
    const [s, a, l] = iu(t, r, i), { minColumn: u, maxColumn: c, minRow: f, maxRow: p } = su(s, a, l), b = /* @__PURE__ */ new Map([[t.getKey(), t]]);
    let y = null;
    for (let x = f; x <= p; x++) for (let C = u; C <= c; C++) {
      const { cell: h } = s[x][C], m = h.getParent();
      kt(m) || Z(160), m !== y && (b.set(m.getKey(), m), y = m), b.has(h.getKey()) || au(h, (w) => {
        b.set(w.getKey(), w);
      });
    }
    const v = Array.from(b.values());
    return Xs() || (this._cachedNodes = v), v;
  }
  getTextContent() {
    const e = this.getNodes().filter((r) => ue(r));
    let t = "";
    for (let r = 0; r < e.length; r++) {
      const i = e[r], o = i.__parent, s = (e[r + 1] || {}).__parent;
      t += i.getTextContent() + (s !== o ? `
` : "	");
    }
    return t;
  }
}
function Po(n) {
  return n instanceof Xn;
}
function au(n, e) {
  const t = [[n]];
  for (let r = t.at(-1); r !== void 0 && t.length > 0; r = t.at(-1)) {
    const i = r.pop();
    i === void 0 ? t.pop() : e(i) !== !1 && D(i) && t.push(i.getChildren());
  }
}
function lu(n, e) {
  for (let t = e, r = null; t !== null; t = t.getParent()) {
    if (n.is(t)) return r;
    ue(t) && (r = t);
  }
  return null;
}
function uu(n, e, t) {
  return lu(n, je(e, t));
}
function pi(n, e, t, r) {
  const i = n.querySelector("colgroup");
  if (!i) return;
  const o = [];
  for (let s = 0; s < t; s++) {
    const a = document.createElement("col"), l = r && r[s];
    l && (a.style.width = `${l}px`), o.push(a);
  }
  i.replaceChildren(...o);
}
function mi(n, e, t) {
  t ? (te(n, e.theme.tableRowStriping), n.setAttribute("data-lexical-row-striping", "true")) : (Ve(n, e.theme.tableRowStriping), n.removeAttribute("data-lexical-row-striping"));
}
function _i(n, e, t) {
  t > 0 ? (te(n, e.theme.tableFrozenColumn), n.setAttribute("data-lexical-frozen-column", "true")) : (Ve(n, e.theme.tableFrozenColumn), n.removeAttribute("data-lexical-frozen-column"));
}
function bi(n, e, t) {
  t > 0 ? (te(n, e.theme.tableFrozenRow), n.setAttribute("data-lexical-frozen-row", "true")) : (Ve(n, e.theme.tableFrozenRow), n.removeAttribute("data-lexical-frozen-row"));
}
function wn(n, e, t) {
  if (!e.theme.tableAlignment) return;
  const r = [], i = [];
  for (const o of ["center", "right"]) {
    const s = e.theme.tableAlignment[o];
    s && (o === t ? i : r).push(s);
  }
  Ve(n, ...r), te(n, ...i);
}
const cu = /* @__PURE__ */ new WeakSet();
function du(n = Di()) {
  return cu.has(n);
}
class nn extends xe {
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
    return new nn(e.__key);
  }
  afterCloneFrom(e) {
    super.afterCloneFrom(e), this.__colWidths = e.__colWidths, this.__rowStriping = e.__rowStriping, this.__frozenColumnCount = e.__frozenColumnCount, this.__frozenRowCount = e.__frozenRowCount;
  }
  static importDOM() {
    return { table: (e) => ({ conversion: gu, priority: 1 }) };
  }
  static importJSON(e) {
    return jo().updateFromJSON(e);
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
    return t.nodeName !== "TABLE" && Z(229), super.getDOMSlot(t).withAfter(t.querySelector("colgroup"));
  }
  createDOM(e, t) {
    const r = document.createElement("table");
    this.__style && (r.style.cssText = this.__style);
    const i = document.createElement("colgroup");
    if (r.appendChild(i), pi(r, 0, this.getColumnCount(), this.getColWidths()), qs(i), te(r, e.theme.table), wn(r, e, this.getFormatType()), this.__frozenColumnCount && _i(r, e, this.__frozenColumnCount), this.__frozenRowCount && bi(r, e, this.__frozenRowCount), this.__rowStriping && mi(r, e, !0), du(t)) {
      const o = document.createElement("div"), s = e.theme.tableScrollableWrapper;
      return s ? te(o, s) : o.style.cssText = "overflow-x: auto;", o.appendChild(r), o;
    }
    return r;
  }
  updateDOM(e, t, r) {
    e.__rowStriping !== this.__rowStriping && mi(t, r, this.__rowStriping), e.__frozenColumnCount !== this.__frozenColumnCount && _i(t, r, this.__frozenColumnCount), e.__frozenRowCount !== this.__frozenRowCount && bi(t, r, this.__frozenRowCount), pi(t, 0, this.getColumnCount(), this.getColWidths());
    const i = this.getDOMSlot(t).element;
    return e.__style !== this.__style && (i.style.cssText = this.__style), wn(i, r, this.getFormatType()), !1;
  }
  exportDOM(e) {
    const t = super.exportDOM(e), { element: r } = t;
    return { after: (i) => {
      if (t.after && (i = t.after(i), this.__format && wn(i, e._config, this.getFormatType())), X(i) && i.nodeName !== "TABLE" && (i = i.querySelector("table")), !X(i)) return null;
      const [o] = $o(this, null, null), s = /* @__PURE__ */ new Map();
      for (const c of o) for (const f of c) {
        const p = f.cell.getKey();
        s.has(p) || s.set(p, { colSpan: f.cell.getColSpan(), startColumn: f.startColumn });
      }
      const a = /* @__PURE__ */ new Set();
      for (const c of i.querySelectorAll(":scope > tr > [data-temporary-table-cell-lexical-key]")) {
        const f = c.getAttribute("data-temporary-table-cell-lexical-key");
        if (f) {
          const p = s.get(f);
          if (c.removeAttribute("data-temporary-table-cell-lexical-key"), p) {
            s.delete(f);
            for (let b = 0; b < p.colSpan; b++) a.add(b + p.startColumn);
          }
        }
      }
      const l = i.querySelector(":scope > colgroup");
      if (l) {
        const c = Array.from(i.querySelectorAll(":scope > colgroup > col")).filter((f, p) => a.has(p));
        l.replaceChildren(...c);
      }
      const u = i.querySelectorAll(":scope > tr");
      if (u.length > 0) {
        const c = document.createElement("tbody");
        for (const f of u) c.appendChild(f);
        i.append(c);
      }
      return i;
    }, element: X(r) && r.nodeName !== "TABLE" ? r.querySelector("table") : r };
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
        const { elem: u } = l, c = uu(this, u);
        if (c !== null && e.is(c)) return { x: a, y: o };
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
    const o = je(i.elem);
    return ue(o) ? o : null;
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
      ue(r) && (t += r.getColSpan());
    }), t;
  }
}
function gu(n) {
  const e = jo();
  n.hasAttribute("data-lexical-row-striping") && e.setRowStriping(!0);
  const t = n.querySelector(":scope > colgroup");
  if (t) {
    let r = [];
    for (const i of t.querySelectorAll(":scope > col")) {
      let o = i.style.width || "";
      if (!Zn.test(o) && (o = i.getAttribute("width") || "", !/^\d+$/.test(o))) {
        r = void 0;
        break;
      }
      r.push(parseFloat(o));
    }
    r && e.setColWidths(r);
  }
  return { after: (r) => lo(r, kt), node: e };
}
function jo() {
  return he(new nn());
}
function Vt(n) {
  return n instanceof nn;
}
const rn = (n) => {
  n.update(() => {
    const e = R();
    O(e) && to(e, () => G());
  });
}, vn = (n, e, t) => {
  e !== t && n.update(() => {
    const r = R();
    to(r, () => rt(t));
  });
}, fu = (n, e) => {
  console.log("blockType", e), e !== "bullet" ? n.dispatchCommand(Ro, void 0) : rn(n);
}, hu = (n, e) => {
  e !== "check" ? n.dispatchCommand(Io, void 0) : rn(n);
}, pu = (n, e) => {
  e !== "number" ? n.dispatchCommand(Fo, void 0) : rn(n);
};
function mu(n) {
  const e = n.anchor, t = n.focus, r = n.anchor.getNode(), i = n.focus.getNode();
  return r === i ? r : n.isBackward() ? kr(t) ? r : i : kr(e) ? r : i;
}
const _u = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
class Ge extends xe {
  static getType() {
    return "link";
  }
  static clone(e) {
    return new Ge(e.__url, { rel: e.__rel, target: e.__target, title: e.__title }, e.__key);
  }
  constructor(e = "", t = {}, r) {
    super(r);
    const { target: i = null, rel: o = null, title: s = null } = t;
    this.__url = e, this.__target = i, this.__rel = o, this.__title = s;
  }
  createDOM(e) {
    const t = document.createElement("a");
    return t.href = this.sanitizeUrl(this.__url), this.__target !== null && (t.target = this.__target), this.__rel !== null && (t.rel = this.__rel), this.__title !== null && (t.title = this.__title), te(t, e.theme.link), t;
  }
  updateDOM(e, t, r) {
    if (Yi(t)) {
      const i = this.__url, o = this.__target, s = this.__rel, a = this.__title;
      i !== e.__url && (t.href = i), o !== e.__target && (o ? t.target = o : t.removeAttribute("target")), s !== e.__rel && (s ? t.rel = s : t.removeAttribute("rel")), a !== e.__title && (a ? t.title = a : t.removeAttribute("title"));
    }
    return !1;
  }
  static importDOM() {
    return { a: (e) => ({ conversion: bu, priority: 1 }) };
  }
  static importJSON(e) {
    return Yt().updateFromJSON(e);
  }
  updateFromJSON(e) {
    return super.updateFromJSON(e).setURL(e.url).setRel(e.rel || null).setTarget(e.target || null).setTitle(e.title || null);
  }
  sanitizeUrl(e) {
    try {
      const t = new URL(e);
      if (!_u.has(t.protocol)) return "about:blank";
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
    const r = Yt(this.__url, { rel: this.__rel, target: this.__target, title: this.__title });
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
    if (!O(t)) return !1;
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
function bu(n) {
  let e = null;
  if (Yi(n)) {
    const t = n.textContent;
    (t !== null && t !== "" || n.children.length > 0) && (e = Yt(n.getAttribute("href") || "", { rel: n.getAttribute("rel"), target: n.getAttribute("target"), title: n.getAttribute("title") }));
  }
  return { node: e };
}
function Yt(n = "", e) {
  return he(new Ge(n, e));
}
function Me(n) {
  return n instanceof Ge;
}
class on extends Ge {
  constructor(e = "", t = {}, r) {
    super(e, t, r), this.__isUnlinked = t.isUnlinked !== void 0 && t.isUnlinked !== null && t.isUnlinked;
  }
  static getType() {
    return "autolink";
  }
  static clone(e) {
    return new on(e.__url, { isUnlinked: e.__isUnlinked, rel: e.__rel, target: e.__target, title: e.__title }, e.__key);
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
    return yi().updateFromJSON(e);
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
      const i = yi(this.__url, { isUnlinked: this.__isUnlinked, rel: this.__rel, target: this.__target, title: this.__title });
      return r.append(i), i;
    }
    return null;
  }
}
function yi(n = "", e) {
  return he(new on(n, e));
}
function wi(n) {
  return n instanceof on;
}
const vi = Oe("TOGGLE_LINK_COMMAND");
function xi(n, e) {
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
function xn(n, e = {}) {
  const { target: t, title: r } = e, i = e.rel === void 0 ? "noreferrer" : e.rel, o = R();
  if (!O(o)) return;
  const s = o.extract();
  if (n === null) return void s.forEach((u) => {
    const c = ye(u, (f) => !wi(f) && Me(f));
    if (c) {
      const f = c.getChildren();
      for (let p = 0; p < f.length; p++) c.insertBefore(f[p]);
      c.remove();
    }
  });
  const a = /* @__PURE__ */ new Set(), l = (u) => {
    a.has(u.getKey()) || (a.add(u.getKey()), u.setURL(n), t !== void 0 && u.setTarget(t), i !== void 0 && u.setRel(i), r !== void 0 && u.setTitle(r));
  };
  if (s.length === 1) {
    const u = Ei(s[0], Me);
    if (u !== null) return l(u);
  }
  (function(u) {
    const c = R();
    if (!O(c)) return u();
    const f = Wt(c), p = f.isBackward(), b = xi(f.anchor, p ? -1 : 0), y = xi(f.focus, p ? 0 : -1);
    if (u(), b || y) {
      const v = R();
      if (O(v)) {
        const x = v.clone();
        if (b) {
          const C = b.getParent();
          C && x.anchor.set(C.getKey(), b.getIndexWithinParent() + (p ? 1 : 0), "element");
        }
        if (y) {
          const C = y.getParent();
          C && x.focus.set(C.getKey(), y.getIndexWithinParent() + (p ? 0 : 1), "element");
        }
        At(Wt(x));
      }
    }
  })(() => {
    let u = null;
    for (const c of s) {
      if (!c.isAttached()) continue;
      const f = Ei(c, Me);
      if (f) {
        l(f);
        continue;
      }
      if (D(c)) {
        if (!c.isInline()) continue;
        if (Me(c)) {
          if (!(wi(c) || u !== null && u.getParentOrThrow().isParentOf(c))) {
            l(c), u = c;
            continue;
          }
          for (const b of c.getChildren()) c.insertBefore(b);
          c.remove();
          continue;
        }
      }
      const p = c.getPreviousSibling();
      Me(p) && p.is(u) ? p.append(c) : (u = Yt(n, { rel: i, target: t, title: r }), c.insertAfter(u), u.append(c));
    }
  });
}
function Ei(n, e) {
  let t = n;
  for (; t !== null && t.getParent() !== null && !e(t); ) t = t.getParentOrThrow();
  return e(t) ? t : null;
}
const yu = ({
  onClick: n,
  className: e
}) => {
  const t = (r) => {
    n && n(r);
  };
  return /* @__PURE__ */ g.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      onClick: t,
      className: e,
      children: /* @__PURE__ */ g.jsx("path", { d: "M8.9735 8.00004L12.6668 11.6934V12.6667H11.6935L8.00016 8.97337L4.30683 12.6667H3.3335V11.6934L7.02683 8.00004L3.3335 4.30671V3.33337H4.30683L8.00016 7.02671L11.6935 3.33337H12.6668V4.30671L8.9735 8.00004Z" })
    }
  );
};
function wu({
  onClose: n,
  children: e,
  title: t,
  closeOnClickOutside: r
}) {
  const i = ge(null);
  return j(() => {
    i.current !== null && i.current.focus();
  }, []), j(() => {
    let o = null;
    const s = (u) => {
      u.key === "Escape" && n();
    }, a = (u) => {
      const c = u.target;
      i.current !== null && // isDOMNode(target) &&
      !i.current.contains(c) && r && n();
    }, l = i.current;
    return l !== null && (o = l.parentElement, o !== null && o.addEventListener("click", a)), window.addEventListener("keydown", s), () => {
      window.removeEventListener("keydown", s), o !== null && (o == null || o.removeEventListener("click", a));
    };
  }, [r, n]), /* @__PURE__ */ g.jsx("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ g.jsxs("div", { className: "Modal__wrapper", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ g.jsxs("div", { className: "Modal__header modalHeader", children: [
      /* @__PURE__ */ g.jsx("span", { className: "text-default headings-h3", children: t }),
      /* @__PURE__ */ g.jsx(
        "button",
        {
          "data-size": "small",
          className: "iconButton secondaryIconButton",
          onClick: n,
          children: /* @__PURE__ */ g.jsx(yu, {})
        }
      )
    ] }),
    e
  ] }) });
}
function vu({
  onClose: n,
  children: e,
  title: t,
  closeOnClickOutside: r = !1
}) {
  return Yn(
    /* @__PURE__ */ g.jsx(
      wu,
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
function xu() {
  const [n, e] = J(null), t = ke(() => {
    e(null);
  }, []), r = we(() => {
    if (n === null)
      return null;
    const { title: o, content: s, closeOnClickOutside: a } = n;
    return /* @__PURE__ */ g.jsx(
      vu,
      {
        onClose: t,
        title: o,
        closeOnClickOutside: a,
        children: s
      }
    );
  }, [n, t]), i = ke(
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
const Eu = Gt.lazy(() => import("./ImageComponent-BRFrI6PU.js"));
function Su(n) {
  return n.parentElement != null && n.parentElement.tagName === "LI" && n.previousSibling === null && n.getAttribute("aria-roledescription") === "checkbox";
}
function Cu(n) {
  const e = n;
  if (e.src.startsWith("file:///") || Su(e))
    return null;
  const { alt: t, src: r, width: i, height: o } = e;
  return { node: Qn({ altText: t, height: o, src: r, width: i }) };
}
class ut extends Vn {
  static getType() {
    return "image";
  }
  static clone(e) {
    return new ut(
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
    const { altText: t, height: r, width: i, maxWidth: o, caption: s, src: a, showCaption: l } = e, u = Qn({
      altText: t,
      height: r,
      maxWidth: o,
      showCaption: l,
      src: a,
      width: i
    }), c = u.__caption, f = c.parseEditorState(s.editorState);
    return f.isEmpty() || c.setEditorState(f), u;
  }
  exportDOM() {
    const e = document.createElement("img");
    return e.setAttribute("src", this.__src), e.setAttribute("alt", this.__altText), e.setAttribute("width", this.__width.toString()), e.setAttribute("height", this.__height.toString()), { element: e };
  }
  static importDOM() {
    return {
      img: () => ({
        conversion: Cu,
        priority: 2
      })
    };
  }
  constructor(e, t, r, i, o, s, a, l, u) {
    super(u), this.__src = e, this.__altText = t, this.__maxWidth = r, this.__width = i || "inherit", this.__height = o || "inherit", this.__showCaption = s || !1, this.__caption = a || Pn({
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
    return /* @__PURE__ */ g.jsx($n, { fallback: null, children: /* @__PURE__ */ g.jsx(
      Eu,
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
function Qn({
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
  return he(
    new ut(
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
function Au(n) {
  return n instanceof ut;
}
function Tu({ children: n }) {
  return /* @__PURE__ */ g.jsx("div", { className: "DialogButtonsList", children: n });
}
function pc({
  "data-test-id": n,
  children: e
}) {
  return /* @__PURE__ */ g.jsx("div", { className: "DialogActions", "data-test-id": n, children: e });
}
function Nu({
  accept: n,
  label: e,
  onChange: t,
  "data-test-id": r
}) {
  return /* @__PURE__ */ g.jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ g.jsx("label", { className: "Input__label", children: e }),
    /* @__PURE__ */ g.jsx(
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
const Uo = {
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
}, mc = /* @__PURE__ */ new Set(), sn = Oe("INSERT_IMAGE_COMMAND"), zo = Oe("INSERT_INLINE_IMAGE_COMMAND");
function ku({
  onClick: n,
  onCancel: e
}) {
  const [t, r] = J(""), [i] = J(""), o = t === "";
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "Modal__content", children: /* @__PURE__ */ g.jsx(
      yo,
      {
        label: "Image URL",
        placeholder: "i.e. https://source.unsplash.com/random",
        onChange: r,
        value: t,
        "data-test-id": "image-modal-url-input"
      }
    ) }),
    /* @__PURE__ */ g.jsxs("div", { className: "Modal__footer", children: [
      /* @__PURE__ */ g.jsx("button", { onClick: () => e(), className: "button secondaryButton", children: "Back" }),
      /* @__PURE__ */ g.jsx(
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
function Ou({
  onClick: n,
  onCancel: e
}) {
  const [t, r] = J(""), [i] = J(""), o = t === "", s = (a) => {
    const l = new FileReader();
    l.onload = function() {
      return typeof l.result == "string" && r(l.result), "";
    }, a !== null && l.readAsDataURL(a[0]);
  };
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "Modal__content", children: /* @__PURE__ */ g.jsx(
      Nu,
      {
        label: "Image Upload",
        onChange: s,
        accept: "image/*",
        "data-test-id": "image-modal-file-upload"
      }
    ) }),
    /* @__PURE__ */ g.jsxs("div", { className: "Modal__footer", children: [
      /* @__PURE__ */ g.jsx("button", { onClick: () => e(), className: "button secondaryButton", children: "Back" }),
      /* @__PURE__ */ g.jsx(
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
function Ru({
  activeEditor: n,
  onClose: e,
  InsertImageFromListDialogBody: t
}) {
  const [r, i] = J(null), o = ge(!1);
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
    n.dispatchCommand(sn, a), e();
  };
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    !r && /* @__PURE__ */ g.jsxs(Tu, { children: [
      t && /* @__PURE__ */ g.jsx(
        "button",
        {
          "data-test-id": "image-modal-option-file",
          onClick: () => i("list"),
          className: "button secondaryButton",
          style: { width: "150px" },
          children: "Select from files"
        }
      ),
      /* @__PURE__ */ g.jsx(
        "button",
        {
          "data-test-id": "image-modal-option-file",
          onClick: () => i("file"),
          className: "button secondaryButton",
          style: { width: "150px" },
          children: "File"
        }
      ),
      /* @__PURE__ */ g.jsx(
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
    r === "url" && /* @__PURE__ */ g.jsx(
      ku,
      {
        onClick: s,
        onCancel: () => i(null)
      }
    ),
    r === "file" && /* @__PURE__ */ g.jsx(
      Ou,
      {
        onClick: s,
        onCancel: () => i(null)
      }
    ),
    r === "list" && t && /* @__PURE__ */ g.jsx(
      t,
      {
        onClick: s,
        onCancel: () => i(null)
      }
    )
  ] });
}
function Fu({
  captionsEnabled: n
}) {
  const [e] = ne();
  return j(() => {
    if (!e.hasNodes([ut]))
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    return Ee(
      e.registerCommand(
        sn,
        (t) => {
          const r = Qn(t);
          return Jn([r]), Pe(r.getParentOrThrow()) && so(r, G).selectEnd(), !0;
        },
        M
      ),
      e.registerCommand(
        Hn,
        (t) => Du(t),
        Ct
      ),
      e.registerCommand(
        Wn,
        (t) => Lu(t),
        oe
      ),
      e.registerCommand(
        Kn,
        (t) => Mu(t, e),
        Ct
      )
    );
  }, [n, e]), null;
}
const Iu = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Bo = document.createElement("img");
Bo.src = Iu;
function Du(n) {
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
        maxWidth: e.__maxWidth,
        showCaption: e.__showCaption,
        src: e.__src,
        width: e.__width
      },
      type: "image"
    })
  ), !0) : !1;
}
function Lu(n) {
  return er() ? (Wo(n) || n.preventDefault(), !0) : !1;
}
function Mu(n, e) {
  const t = er();
  if (!t)
    return !1;
  const r = $u(n);
  if (!r)
    return !1;
  if (n.preventDefault(), Wo(n)) {
    const i = Pu(n);
    t.remove();
    const o = Zt();
    i != null && o.applyDOMRange(i), At(o), e.dispatchCommand(sn, r);
  }
  return !0;
}
function er() {
  const n = R();
  if (!Ne(n))
    return null;
  const t = n.getNodes()[0];
  return Au(t) ? t : null;
}
function $u(n) {
  var i;
  const e = (i = n.dataTransfer) == null ? void 0 : i.getData("application/x-lexical-drag");
  if (!e)
    return null;
  const { type: t, data: r } = JSON.parse(e);
  return t !== "image" ? null : r;
}
function Wo(n) {
  const e = n.target;
  return !!(e !== null && X(e) && !e.closest("code, span.editor-image") && e.parentElement !== null && X(e.parentElement) && e.parentElement.closest("div.ContentEditable__root"));
}
function Pu(n) {
  let e;
  const t = n.target, r = t == null ? null : t.nodeType === 9 ? t.defaultView : t.ownerDocument.defaultView, i = Xt(r);
  if (document.caretRangeFromPoint)
    e = document.caretRangeFromPoint(n.clientX, n.clientY);
  else if (n.rangeParent && i !== null)
    i.collapse(n.rangeParent, n.rangeOffset || 0), e = i.getRangeAt(0);
  else
    throw Error("Cannot get the selection when dragging");
  return e;
}
const ju = () => /* @__PURE__ */ g.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "",
    children: [
      /* @__PURE__ */ g.jsx("path", { d: "M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }),
      /* @__PURE__ */ g.jsx("path", { d: "M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z" })
    ]
  }
), En = 1;
function zt() {
  return /* @__PURE__ */ g.jsx("div", { className: "divider" });
}
function Uu({
  isAutosaving: n,
  isDisabled: e,
  InsertImageFromListDialogBody: t,
  addButtonForToolbar: r,
  uploadImage: i
}) {
  const [o, s] = xu(), [, a] = J(null), { toolbarState: l, updateToolbarState: u } = Ll(), [c] = ne(), f = ge(null), [p, b] = J(!1), [y, v] = J(!1), x = ke(() => {
    const _ = R();
    if (O(_)) {
      u("isImageCaption", !1);
      const A = _.anchor.getNode();
      let N = A.getKey() === "root" ? A : ye(A, (re) => {
        const se = re.getParent();
        return se !== null && Pe(se);
      });
      N === null && (N = A.getTopLevelElementOrThrow());
      const k = N.getKey(), B = c.getElementByKey(k);
      u("isRTL", no(_));
      const $ = mu(_), H = $.getParent(), Q = Me(H) || Me($);
      u("isLink", Q);
      const pe = ye($, Vt);
      if (Vt(pe) ? u("rootType", "table") : u("rootType", "root"), N = H, B !== null)
        if (a(k), I(N) || (N == null ? void 0 : N.__type) === "listitem") {
          const re = oo(
            A,
            Ye
          ), se = re && re.getListType() || "paragraph";
          u("blockType", se);
        } else {
          const re = Va(N) ? N.getTag() : N == null ? void 0 : N.getType();
          if (re && re in Uo && u(
            "blockType",
            re
          ), So(N)) {
            const se = N.getLanguage();
            u(
              "codeLanguage",
              se ? Bl[se] || se : ""
            );
            return;
          }
        }
      u(
        "fontColor",
        Lt(_, "color", "#000")
      ), u(
        "bgColor",
        Lt(
          _,
          "background-color",
          "#fff"
        )
      ), u(
        "fontFamily",
        Lt(_, "font-family", "Arial")
      );
      let _e;
      Me(H) && (_e = ye(
        $,
        (re) => D(re) && !re.isInline()
      )), u(
        "elementFormat",
        D(_e) ? _e.getFormatType() : D($) ? $.getFormatType() : (H == null ? void 0 : H.getFormatType()) || "left"
      );
    }
    (O(_) || Po(_)) && (u("isBold", _.hasFormat("bold")), u("isItalic", _.hasFormat("italic")), u("isUnderline", _.hasFormat("underline")), u(
      "isStrikethrough",
      _.hasFormat("strikethrough")
    ), u("isSubscript", _.hasFormat("subscript")), u("isSuperscript", _.hasFormat("superscript")), u("isCode", _.hasFormat("code")), u(
      "fontSize",
      Lt(_, "font-size", "15px")
    ));
  }, [c, u]);
  j(() => Ee(
    c.registerUpdateListener(({ editorState: _ }) => {
      _.read(() => {
        x();
      });
    }),
    c.registerCommand(
      ea,
      (_, A) => (x(), !1),
      En
    ),
    c.registerCommand(
      yt,
      (_) => (b(_), !1),
      En
    ),
    c.registerCommand(
      bt,
      (_) => (v(_), !1),
      En
    )
  ), [c, x]);
  const C = ke(
    (_, A) => {
      c.update(
        () => {
          const N = R();
          N !== null && ma(N, _);
        },
        A ? { tag: "historic" } : {}
      );
    },
    [c]
  ), h = ke(
    (_, A) => {
      C({ color: _ }, A);
    },
    [C]
  ), m = ke(
    (_, A) => {
      C({ "background-color": _ }, A);
    },
    [C]
  ), w = ge(null);
  j(() => {
    w.current = document.querySelector(
      ".templates-editor-main-container"
    );
  }, []);
  const E = (_, A, N) => {
    _.preventDefault(), _.stopPropagation(), c.dispatchCommand(A, N);
  };
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: `toolbar-templates-lexical ${e ? "toolbar-disabled" : ""}`,
      ref: f,
      children: [
        /* @__PURE__ */ g.jsxs("div", { className: "toolbar-templates-lexical-left", children: [
          /* @__PURE__ */ g.jsx(
            "button",
            {
              disabled: !p || e,
              onClick: (_) => E(_, Wi),
              className: "toolbar-item spaced",
              "aria-label": "Undo",
              children: /* @__PURE__ */ g.jsx(wl, {})
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              disabled: !y || e,
              onClick: (_) => E(_, Bi),
              className: "toolbar-item",
              "aria-label": "Redo",
              children: /* @__PURE__ */ g.jsx(yl, {})
            }
          ),
          /* @__PURE__ */ g.jsx(zt, {}),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              disabled: e,
              onClick: (_) => E(_, _t, "bold"),
              className: "toolbar-item spaced " + (l.isBold ? "active" : ""),
              "aria-label": "Format Bold",
              children: /* @__PURE__ */ g.jsx(vl, {})
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              disabled: e,
              onClick: (_) => E(_, _t, "italic"),
              className: "toolbar-item spaced " + (l.isItalic ? "active" : ""),
              "aria-label": "Format Italics",
              children: /* @__PURE__ */ g.jsx(xl, {})
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              disabled: e,
              onClick: (_) => E(_, _t, "underline"),
              className: "toolbar-item spaced " + (l.isUnderline ? "active" : ""),
              "aria-label": "Format Underline",
              children: /* @__PURE__ */ g.jsx(El, {})
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              disabled: e,
              onClick: (_) => E(_, _t, "strikethrough"),
              className: "toolbar-item spaced " + (l.isStrikethrough ? "active" : ""),
              "aria-label": "Format Strikethrough",
              children: /* @__PURE__ */ g.jsx(Sl, {})
            }
          ),
          /* @__PURE__ */ g.jsx(zt, {}),
          /* @__PURE__ */ g.jsx(
            zu,
            {
              blockType: l.blockType,
              editor: c,
              container: w.current
            }
          ),
          /* @__PURE__ */ g.jsx(zt, {}),
          /* @__PURE__ */ g.jsx(
            Qr,
            {
              disabled: !1,
              buttonClassName: "toolbar-item color-picker",
              icon: /* @__PURE__ */ g.jsx(Ml, {}),
              buttonAriaLabel: "Formatting text color",
              buttonIconClassName: "icon font-color",
              color: l.fontColor,
              onChange: h,
              title: "text color",
              container: w.current
            }
          ),
          /* @__PURE__ */ g.jsx(
            Qr,
            {
              disabled: !1,
              buttonClassName: "toolbar-item color-picker",
              icon: /* @__PURE__ */ g.jsx($l, {}),
              buttonAriaLabel: "Formatting background color",
              buttonIconClassName: "icon bg-color",
              color: l.bgColor,
              onChange: m,
              title: "bg color",
              container: w.current
            }
          ),
          /* @__PURE__ */ g.jsx(zt, {}),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              disabled: e,
              onClick: (_) => E(_, mt, "left"),
              className: "toolbar-item spaced",
              "aria-label": "Left Align",
              children: /* @__PURE__ */ g.jsx(Cl, {})
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              disabled: e,
              onClick: (_) => E(_, mt, "center"),
              className: "toolbar-item spaced",
              "aria-label": "Center Align",
              children: /* @__PURE__ */ g.jsx(Al, {})
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              disabled: e,
              onClick: (_) => E(_, mt, "right"),
              className: "toolbar-item spaced",
              "aria-label": "Right Align",
              children: /* @__PURE__ */ g.jsx(Tl, {})
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              disabled: e,
              onClick: (_) => E(_, mt, "justify"),
              className: "toolbar-item",
              "aria-label": "Justify Align",
              children: /* @__PURE__ */ g.jsx(Nl, {})
            }
          ),
          i && /* @__PURE__ */ g.jsx(
            "button",
            {
              disabled: e,
              onClick: (_) => {
                _.preventDefault(), _.stopPropagation(), s("Insert Image", (A) => /* @__PURE__ */ g.jsx(
                  Ru,
                  {
                    activeEditor: c,
                    onClose: A,
                    InsertImageFromListDialogBody: t
                  }
                ));
              },
              className: "toolbar-item",
              "aria-label": "Justify Align",
              children: /* @__PURE__ */ g.jsx(ju, {})
            }
          ),
          r == null ? void 0 : r.map((_, A) => /* @__PURE__ */ g.jsx(qt.Fragment, { children: _ }, A))
        ] }),
        /* @__PURE__ */ g.jsx("div", { className: "toolbar-templates-lexical-right", children: /* @__PURE__ */ g.jsx(
          bl,
          {
            isLoading: n === void 0 ? !1 : n
          }
        ) }),
        o
      ]
    }
  );
}
function Ke(n) {
  return n ? "active toolbar-item" : "toolbar-item";
}
function zu({
  editor: n,
  blockType: e,
  disabled: t = !1,
  container: r
}) {
  return /* @__PURE__ */ g.jsxs(
    bo,
    {
      disabled: t,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-type " + e,
      buttonLabel: Uo[e],
      buttonAriaLabel: "Formatting options for text style",
      container: r,
      children: [
        /* @__PURE__ */ g.jsx(
          He,
          {
            className: "item wide " + Ke(e === "paragraph"),
            onClick: () => rn(n),
            children: /* @__PURE__ */ g.jsx("div", { className: "icon-text-container", children: /* @__PURE__ */ g.jsx("span", { className: "text", children: "Normal" }) })
          }
        ),
        /* @__PURE__ */ g.jsx(
          He,
          {
            className: "item wide " + Ke(e === "h1"),
            onClick: () => vn(n, e, "h1"),
            children: /* @__PURE__ */ g.jsx("div", { className: "icon-text-container", children: /* @__PURE__ */ g.jsx("span", { className: "text", children: "Heading 1" }) })
          }
        ),
        /* @__PURE__ */ g.jsx(
          He,
          {
            className: "item wide " + Ke(e === "h2"),
            onClick: () => vn(n, e, "h2"),
            children: /* @__PURE__ */ g.jsx("div", { className: "icon-text-container", children: /* @__PURE__ */ g.jsx("span", { className: "text", children: "Heading 2" }) })
          }
        ),
        /* @__PURE__ */ g.jsx(
          He,
          {
            className: "item wide " + Ke(e === "h3"),
            onClick: () => vn(n, e, "h3"),
            children: /* @__PURE__ */ g.jsx("div", { className: "icon-text-container", children: /* @__PURE__ */ g.jsx("span", { className: "text", children: "Heading 3" }) })
          }
        ),
        /* @__PURE__ */ g.jsx(
          He,
          {
            className: "item wide " + Ke(e === "bullet"),
            onClick: () => fu(n, e),
            children: /* @__PURE__ */ g.jsx("div", { className: "icon-text-container", children: /* @__PURE__ */ g.jsx("span", { className: "text", children: "Bullet List" }) })
          }
        ),
        /* @__PURE__ */ g.jsx(
          He,
          {
            className: "item wide " + Ke(e === "number"),
            onClick: () => pu(n, e),
            children: /* @__PURE__ */ g.jsx("div", { className: "icon-text-container", children: /* @__PURE__ */ g.jsx("span", { className: "text", children: "Numbered List" }) })
          }
        ),
        /* @__PURE__ */ g.jsx(
          He,
          {
            className: "item wide " + Ke(e === "check"),
            onClick: () => {
              console.log("blockType!!", e), hu(n, e);
            },
            children: /* @__PURE__ */ g.jsx("div", { className: "icon-text-container", children: /* @__PURE__ */ g.jsx("span", { className: "text", children: "Check List" }) })
          }
        )
      ]
    }
  );
}
class Bu extends _s {
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
    return this.state.hasError ? /* @__PURE__ */ g.jsx("div", { children: "Something went wrong." }) : this.props.children;
  }
}
function Wu(n) {
  const e = /^```html\s*([\s\S]*?)\s*```$/m, t = n.match(e);
  t && (n = t[1]);
  const i = new DOMParser().parseFromString(n, "text/html");
  return i.body && i.body.innerHTML && i.body.innerHTML.trim() !== "" ? i.body.innerHTML : n;
}
const Hu = ({
  initialContent: n
}) => {
  const [e] = ne(), t = ge();
  return j(() => {
    t.current = n, e.update(() => {
      let r = Wu(n);
      r.includes("<") || (r = `<p>${r}</p>`);
      const o = new DOMParser().parseFromString(r, "text/html"), s = document.implementation.createHTMLDocument();
      s.body.innerHTML = o.body ? o.body.innerHTML : o.documentElement.innerHTML;
      const a = vt(e, s), l = ve();
      l.clear(), a.forEach((c) => {
        l.append(c);
      });
      const u = l.getFirstChild();
      u && u.selectStart();
    });
  }, [e, n]), null;
};
function Ku() {
  const [n] = ne();
  return j(() => {
    if (!n.hasNodes([Ye, Ue])) throw new Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
  }, [n]), function(e) {
    j(() => eu(e), [e]);
  }(n), null;
}
function Ju({ validateUrl: n, attributes: e }) {
  const [t] = ne();
  return j(() => {
    if (!t.hasNodes([Ge])) throw new Error("LinkPlugin: LinkNode not registered on editor");
    return Ee(t.registerCommand(vi, (r) => {
      if (r === null) return xn(r), !0;
      if (typeof r == "string") return !(n !== void 0 && !n(r)) && (xn(r, e), !0);
      {
        const { url: i, target: o, rel: s, title: a } = r;
        return xn(i, { ...e, rel: s, target: o, title: a }), !0;
      }
    }, oe), n !== void 0 ? t.registerCommand(Bn, (r) => {
      const i = R();
      if (!O(i) || i.isCollapsed() || !$e(r, ClipboardEvent)) return !1;
      const o = r;
      if (o.clipboardData === null) return !1;
      const s = o.clipboardData.getData("text");
      return !!n(s) && !i.getNodes().some((a) => D(a)) && (t.dispatchCommand(vi, { ...e, url: s }), r.preventDefault(), !0);
    }, oe) : () => {
    });
  }, [t, n, e]), null;
}
function Vu({ readOnly: n }) {
  const [e] = ne();
  return j(() => {
    e.setEditable(!n);
  }, [e, n]), null;
}
function Yu() {
  const [n] = ne();
  return j(() => {
    const e = (t) => {
      if (t.detail && typeof t.detail == "string" && n) {
        const i = new DOMParser().parseFromString(t.detail, "text/html");
        n.update(() => {
          const o = R();
          if (O(o)) {
            const s = o.anchor.getNode(), a = o.focus.getNode();
            if (!s || !a || !s.getParent() || !a.getParent()) {
              console.warn(
                "Invalid selection detected. Falling back to root insertion."
              );
              const u = vt(n, i), c = ve();
              u.forEach((f) => c.append(f));
              return;
            }
            const l = vt(n, i);
            o.insertNodes(l);
          } else {
            console.warn(
              "No valid range selection. Falling back to root insertion."
            );
            const s = vt(n, i), a = ve();
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
function Gu() {
  const [n] = ne();
  return j(() => Ee(
    n.registerCommand(
      Io,
      () => (tu(n, "check"), !0),
      oe
    ),
    // Add ENTER key handler
    n.registerCommand(
      $i,
      (e) => {
        const t = R();
        if (!O(t))
          return !1;
        const i = t.anchor.getNode();
        if (!U(i))
          return !1;
        const o = i.getParent();
        if (!I(o))
          return !1;
        if (i.getTextContent().trim() === "") {
          e == null || e.preventDefault();
          const s = G();
          return console.log(i, o), o.insertAfter(s), s.select(), i.remove(), !0;
        }
        return !1;
      },
      Ct
    ),
    n.registerCommand(
      ji,
      (e) => Ai(e, n, !1),
      oe
    ),
    n.registerCommand(
      Ui,
      (e) => Ai(e, n, !0),
      oe
    ),
    n.registerCommand(
      Mi,
      (e) => {
        if (Mn() != null) {
          const r = n.getRootElement();
          return r != null && r.focus(), !0;
        }
        return !1;
      },
      oe
    ),
    n.registerCommand(
      Li,
      (e) => {
        const t = Mn();
        return t != null && n.isEditable() ? (n.update(() => {
          const r = je(t);
          U(r) && (e.preventDefault(), r.toggleChecked());
        }), !0) : !1;
      },
      oe
    ),
    n.registerCommand(
      Pi,
      (e) => n.getEditorState().read(() => {
        const t = R();
        if (O(t) && t.isCollapsed()) {
          const { anchor: r } = t, i = r.type === "element";
          if (i || r.offset === 0) {
            const o = r.getNode(), s = ye(
              o,
              (a) => D(a) && !a.isInline()
            );
            if (U(s)) {
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
      e !== null && (e.addEventListener("click", Si), e.addEventListener("pointerdown", Ci)), t !== null && (t.removeEventListener("click", Si), t.removeEventListener("pointerdown", Ci));
    })
  )), null;
}
function Ho(n, e) {
  const t = n.target;
  if (t === null || !X(t))
    return;
  const r = t.firstChild;
  if (r !== null && X(r) && (r.tagName === "UL" || r.tagName === "OL"))
    return;
  const i = t.parentNode;
  if (!i || i.__lexicalListType !== "check")
    return;
  const o = t.getBoundingClientRect(), s = n.pageX / ao(t);
  (t.dir === "rtl" ? s < o.right && s > o.right - 20 : s > o.left && s < o.left + 20) && e();
}
function Si(n) {
  Ho(n, () => {
    const e = n.target;
    if (e !== null && X(e)) {
      const t = e, r = ta(t);
      r != null && r.isEditable() && r.update(() => {
        const i = je(t);
        U(i) && (t.focus(), i.toggleChecked());
      });
    }
  });
}
function Ci(n) {
  Ho(n, () => {
    n.preventDefault();
  });
}
function Mn() {
  const n = document.activeElement;
  return n !== null && X(n) && n.tagName === "LI" && n.parentNode != null && // @ts-expect-error internal field Type mismatch due to legacy API
  n.parentNode.__lexicalListType === "check" ? n : null;
}
function qu(n, e) {
  let t = e ? n.getPreviousSibling() : n.getNextSibling(), r = n;
  for (; t == null && U(r); )
    r = r.getParentOrThrow().getParent(), r != null && (t = e ? r.getPreviousSibling() : r.getNextSibling());
  for (; U(t); ) {
    const i = e ? t.getLastChild() : t.getFirstChild();
    if (!I(i))
      return t;
    t = e ? i.getLastChild() : i.getFirstChild();
  }
  return null;
}
function Ai(n, e, t) {
  const r = Mn();
  return r != null && e.update(() => {
    const i = je(r);
    if (!U(i))
      return;
    const o = qu(i, t);
    if (o != null) {
      o.selectStart();
      const s = e.getElementByKey(o.__key);
      s != null && (n.preventDefault(), setTimeout(() => {
        s.focus();
      }, 0));
    }
  }), !1;
}
const Ti = [
  "image/",
  "image/heic",
  "image/heif",
  "image/gif",
  "image/webp"
];
function Zu() {
  const [n] = ne();
  return j(() => n.registerCommand(
    Nn,
    (e) => ((async () => {
      const t = await Ta(
        e,
        [Ti].flatMap((r) => r)
      );
      for (const { file: r, result: i } of t)
        io(r, Ti) && n.dispatchCommand(sn, {
          altText: r.name,
          src: i
        });
    })(), !0),
    oe
  ), [n]), null;
}
const Xu = Gt.lazy(() => import("./InlineImageComponent-BSPNjDpU.js"));
function Qu(n) {
  if (X(n) && n.nodeName === "IMG") {
    const { alt: e, src: t, width: r, height: i } = n;
    return { node: tr({ altText: e, height: i, src: t, width: r }) };
  }
  return null;
}
class ct extends Vn {
  static getType() {
    return "inline-image";
  }
  static clone(e) {
    return new ct(
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
    const { altText: t, height: r, width: i, caption: o, src: s, showCaption: a, position: l } = e, u = tr({
      altText: t,
      height: r,
      position: l,
      showCaption: a,
      src: s,
      width: i
    }), c = u.__caption, f = c.parseEditorState(o.editorState);
    return f.isEmpty() || c.setEditorState(f), u;
  }
  static importDOM() {
    return {
      img: (e) => ({
        conversion: Qu,
        priority: 0
      })
    };
  }
  constructor(e, t, r, i, o, s, a, l) {
    super(l), this.__src = e, this.__altText = t, this.__width = i || "inherit", this.__height = o || "inherit", this.__showCaption = s || !1, this.__caption = a || Pn(), this.__position = r;
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
    return /* @__PURE__ */ g.jsx($n, { fallback: null, children: /* @__PURE__ */ g.jsx(
      Xu,
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
function tr({
  altText: n,
  position: e,
  height: t,
  src: r,
  width: i,
  showCaption: o,
  caption: s,
  key: a
}) {
  return he(
    new ct(
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
function ec(n) {
  return n instanceof ct;
}
function tc() {
  const [n] = ne();
  return j(() => {
    if (!n.hasNodes([ct]))
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    return Ee(
      n.registerCommand(
        zo,
        (e) => {
          const t = tr(e);
          return Jn([t]), Pe(t.getParentOrThrow()) && so(t, G).selectEnd(), !0;
        },
        M
      ),
      n.registerCommand(
        Hn,
        (e) => rc(e),
        Ct
      ),
      n.registerCommand(
        Wn,
        (e) => ic(e),
        oe
      ),
      n.registerCommand(
        Kn,
        (e) => oc(e, n),
        Ct
      )
    );
  }, [n]), null;
}
const nc = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Ko = document.createElement("img");
Ko.src = nc;
function rc(n) {
  const e = nr();
  if (!e)
    return !1;
  const t = n.dataTransfer;
  return t ? (t.setData("text/plain", "_"), t.setDragImage(Ko, 0, 0), t.setData(
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
function ic(n) {
  return nr() ? (Jo(n) || n.preventDefault(), !0) : !1;
}
function oc(n, e) {
  const t = nr();
  if (!t)
    return !1;
  const r = sc(n);
  if (!r)
    return !1;
  if (n.preventDefault(), Jo(n)) {
    const i = ac(n);
    t.remove();
    const o = Zt();
    i != null && o.applyDOMRange(i), At(o), e.dispatchCommand(zo, r);
  }
  return !0;
}
function nr() {
  const n = R();
  if (!Ne(n))
    return null;
  const t = n.getNodes()[0];
  return ec(t) ? t : null;
}
function sc(n) {
  var i;
  const e = (i = n.dataTransfer) == null ? void 0 : i.getData("application/x-lexical-drag");
  if (!e)
    return null;
  const { type: t, data: r } = JSON.parse(e);
  return t !== "image" ? null : r;
}
function Jo(n) {
  const e = n.target;
  return !!(e !== null && X(e) && !e.closest("code, span.editor-image") && e.parentElement !== null && X(e.parentElement) && e.parentElement.closest("div.ContentEditable__root"));
}
function ac(n) {
  let e;
  const t = n.target, r = t == null ? null : t.nodeType === 9 ? t.defaultView : t.ownerDocument.defaultView, i = Xt(r);
  if (document.caretRangeFromPoint)
    e = document.caretRangeFromPoint(n.clientX, n.clientY);
  else if (n.rangeParent && i !== null)
    i.collapse(n.rangeParent, n.rangeOffset || 0), e = i.getRangeAt(0);
  else
    throw Error("Cannot get the selection when dragging");
  return e;
}
function lc(n) {
  const t = new DOMParser().parseFromString(n, "text/html");
  return t.body.querySelectorAll("*").forEach((r) => {
    r.removeAttribute("style");
  }), t.body.innerHTML;
}
function uc() {
  const [n] = ne();
  return j(() => n.registerCommand(
    Bn,
    (e) => {
      if (e) {
        const t = e.clipboardData;
        if (t) {
          const r = t.getData("text/html");
          if (r) {
            const i = lc(r);
            return n.update(() => {
              const o = R();
              O(o) && new DOMParser().parseFromString(
                i,
                "text/html"
              ).body.childNodes.forEach((l) => {
                if (l.nodeType === Node.TEXT_NODE)
                  o.insertText(l.textContent || "");
                else if (l.nodeType === Node.ELEMENT_NODE) {
                  const u = G();
                  u.append(
                    Ji(l.textContent || "")
                  ), o.insertNodes([u]);
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
class xt extends xe {
  constructor(e) {
    super(e), this.__attributes = {};
  }
  static getType() {
    return "div";
  }
  static clone(e) {
    const t = new xt(e.__key);
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
          const t = new xt(), r = Array.from(e.attributes).reduce(
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
    const t = new xt();
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
class Le extends lt {
  constructor(e, t, r = {}) {
    super(e, t), this.__attributes = r;
  }
  static getType() {
    return "custom-heading";
  }
  static clone(e) {
    return new Le(e.__tag, e.__key, e.__attributes);
  }
  static importDOM() {
    return {
      h1: () => ({
        conversion: (e) => {
          const t = {};
          return Array.from(e.attributes).forEach(({ name: i, value: o }) => {
            t[i] = o;
          }), { node: new Le("h1", void 0, t) };
        },
        priority: 2
      }),
      h2: () => ({
        conversion: (e) => {
          const t = {};
          return Array.from(e.attributes).forEach(({ name: i, value: o }) => {
            t[i] = o;
          }), { node: new Le("h2", void 0, t) };
        },
        priority: 2
      }),
      h3: () => ({
        conversion: (e) => {
          const t = {};
          return Array.from(e.attributes).forEach(({ name: i, value: o }) => {
            t[i] = o;
          }), { node: new Le("h3", void 0, t) };
        },
        priority: 2
      }),
      h4: () => ({
        conversion: (e) => {
          const t = {};
          return Array.from(e.attributes).forEach(({ name: i, value: o }) => {
            t[i] = o;
          }), { node: new Le("h4", void 0, t) };
        },
        priority: 2
      })
    };
  }
  static importJSON(e) {
    const { tag: t, attributes: r } = e;
    return new Le(t, void 0, r);
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
class Et extends xe {
  constructor(e) {
    super(e), this.__attributes = {};
  }
  static getType() {
    return "input";
  }
  static clone(e) {
    const t = new Et(e.__key);
    return t.setAttributes(e.getAttributes()), t;
  }
  static importDOM() {
    return {
      input: () => ({
        conversion: (e) => {
          const t = new Et(), r = Array.from(e.attributes).reduce(
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
    const t = new Et();
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
class St extends Vn {
  // <== Хранение стилей
  // ====== 1) Node Type ======
  static getType() {
    return "field-node";
  }
  // ====== 2) Cloning ======
  static clone(e) {
    return new St(
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
          return { node: new St(r, i, o) };
        },
        priority: 2
      } : null
    };
  }
  // ====== 5) Import from JSON ======
  static importJSON(e) {
    const { attributes: t, text: r, style: i } = e;
    return new St(t, r, i);
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
      const { clientX: o, target: s } = i, l = s.getBoundingClientRect(), u = l.right - 20;
      o >= u && o <= l.right && (i.stopPropagation(), t.update(() => {
        const c = this.getLatest();
        c && c.remove();
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
const cc = {
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
}, dc = {
  namespace: "EditLexicalEditor",
  theme: cc,
  nodes: [
    xt,
    Et,
    St,
    lt,
    Le,
    en,
    ut,
    ct,
    Ye,
    Ue,
    Ge
  ],
  onError: (n) => {
    console.error(n);
  }
}, _c = ({
  initialContent: n = "",
  onContentChange: e,
  readOnly: t = !1,
  isAutosaving: r,
  toolbarHide: i,
  hideBorder: o,
  addButtonForToolbar: s,
  placeholder: a,
  onFocusChange: l,
  onHoverChange: u,
  uploadImage: c
}) => {
  const f = ge(`LexicalEditor-${ml()}`), [p, b] = qt.useState("");
  j(() => {
    b(n);
  }, [n]);
  const y = () => {
    l == null || l(!0);
  }, v = () => {
    l == null || l(!1);
  }, x = () => {
    u == null || u(!0);
  }, C = () => {
    u == null || u(!1);
  };
  return /* @__PURE__ */ g.jsx(g.Fragment, { children: /* @__PURE__ */ g.jsx("div", { className: "templates-editor-main-container", children: /* @__PURE__ */ g.jsx(
    "div",
    {
      className: `lexical-editor-wrapper ${o ? "hide-border" : ""}`,
      onMouseEnter: x,
      onMouseLeave: C,
      children: /* @__PURE__ */ g.jsx(Dl, { children: /* @__PURE__ */ g.jsx(
        aa,
        {
          initialConfig: {
            ...dc,
            editable: !t,
            namespace: f.current
          },
          children: /* @__PURE__ */ g.jsxs(
            "div",
            {
              className: `editor-container   ${t ? "readonly" : ""}`,
              children: [
                /* @__PURE__ */ g.jsx(Yu, {}),
                !i && /* @__PURE__ */ g.jsx(
                  Uu,
                  {
                    isAutosaving: r,
                    isDisabled: t,
                    addButtonForToolbar: s,
                    uploadImage: c
                  }
                ),
                /* @__PURE__ */ g.jsxs("div", { className: "editor-inner", children: [
                  /* @__PURE__ */ g.jsx(
                    Ga,
                    {
                      contentEditable: /* @__PURE__ */ g.jsx(
                        Qa,
                        {
                          className: "editor-input",
                          onFocus: y,
                          onBlur: v
                        }
                      ),
                      placeholder: /* @__PURE__ */ g.jsx("div", { className: "editor-placeholder", children: a || "Type something..." }),
                      ErrorBoundary: Bu
                    }
                  ),
                  /* @__PURE__ */ g.jsx(ul, {}),
                  /* @__PURE__ */ g.jsx(Zu, {}),
                  /* @__PURE__ */ g.jsx(Fu, {}),
                  /* @__PURE__ */ g.jsx(tc, {}),
                  /* @__PURE__ */ g.jsx(Ku, {}),
                  /* @__PURE__ */ g.jsx(Gu, {}),
                  /* @__PURE__ */ g.jsx(Ju, {}),
                  /* @__PURE__ */ g.jsx(uc, {}),
                  /* @__PURE__ */ g.jsx(
                    dl,
                    {
                      onChange: (h, m) => {
                        h.read(() => {
                          const w = uo(m);
                          e && e(w);
                        });
                      }
                    }
                  ),
                  /* @__PURE__ */ g.jsx(
                    Hu,
                    {
                      initialContent: p
                    }
                  ),
                  /* @__PURE__ */ g.jsx(Vu, { readOnly: t })
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
  Au as $,
  pc as D,
  _c as E,
  ao as L,
  yo as T,
  ca as a,
  Ee as b,
  ec as c,
  Ju as d,
  Ga as h,
  mc as i,
  g as j,
  ne as o,
  Gi as r,
  oa as t,
  xu as u,
  Qa as x
};
