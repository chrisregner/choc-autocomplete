import * as nn from "react";
import Xe, { useRef as _r, useState as ut, useEffect as gr, useImperativeHandle as oo, useContext as St, createContext as on, forwardRef as ao, useMemo as io, Children as so, memo as lo } from "react";
import { createContext as co } from "@chakra-ui/react-utils";
import { useDisclosure as uo, useControllableState as fo, useUpdateEffect as po, forwardRef as vr, Popover as go, chakra as ho, useMergeRefs as _t, Flex as xt, Box as mo, Divider as zt, InputGroup as vo, Input as bo, InputRightElement as yo, Spinner as an, useMultiStyleConfig as So, Wrap as _o, WrapItem as xo, PopoverAnchor as ko, PopoverContent as To, Center as wo } from "@chakra-ui/react";
import { pick as Co, isDefined as sn, isEmpty as kt, runIfFn as K, isUndefined as zr, getNextItem as Ro, getPrevItem as Eo, getFirstItem as Io, getLastItem as dt, isObject as Oo, omit as Ur, memoizedGet as jo, mergeWith as Ao, filterUndefined as ln, objectFilter as Po } from "@chakra-ui/utils";
import Nt from "@emotion/styled";
import { ThemeContext as Bo } from "@emotion/react";
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gt = { exports: {} }, Rr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt;
function $o() {
  return Gt || (Gt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Xe, r = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), p = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), I = Symbol.iterator, M = "@@iterator";
    function z(n) {
      if (n === null || typeof n != "object")
        return null;
      var f = I && n[I] || n[M];
      return typeof f == "function" ? f : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(n) {
      {
        for (var f = arguments.length, m = new Array(f > 1 ? f - 1 : 0), k = 1; k < f; k++)
          m[k - 1] = arguments[k];
        le("error", n, m);
      }
    }
    function le(n, f, m) {
      {
        var k = $.ReactDebugCurrentFrame, B = k.getStackAddendum();
        B !== "" && (f += "%s", m = m.concat([B]));
        var A = m.map(function(E) {
          return String(E);
        });
        A.unshift("Warning: " + f), Function.prototype.apply.call(console[n], console, A);
      }
    }
    var ir = !1, xr = !1, kr = !1, qe = !1, sr = !1, pe;
    pe = Symbol.for("react.module.reference");
    function ke(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === a || n === u || sr || n === l || n === h || n === v || qe || n === T || ir || xr || kr || typeof n == "object" && n !== null && (n.$$typeof === S || n.$$typeof === _ || n.$$typeof === d || n.$$typeof === p || n.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === pe || n.getModuleId !== void 0));
    }
    function Ee(n, f, m) {
      var k = n.displayName;
      if (k)
        return k;
      var B = f.displayName || f.name || "";
      return B !== "" ? m + "(" + B + ")" : m;
    }
    function lr(n) {
      return n.displayName || "Context";
    }
    function X(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case a:
          return "Fragment";
        case o:
          return "Portal";
        case u:
          return "Profiler";
        case l:
          return "StrictMode";
        case h:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case p:
            var f = n;
            return lr(f) + ".Consumer";
          case d:
            var m = n;
            return lr(m._context) + ".Provider";
          case g:
            return Ee(n, n.render, "ForwardRef");
          case _:
            var k = n.displayName || null;
            return k !== null ? k : X(n.type) || "Memo";
          case S: {
            var B = n, A = B._payload, E = B._init;
            try {
              return X(E(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, Ie = 0, Oe, Te, br, cr, De, ge, je;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function yr() {
      {
        if (Ie === 0) {
          Oe = console.log, Te = console.info, br = console.warn, cr = console.error, De = console.group, ge = console.groupCollapsed, je = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: F,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        Ie++;
      }
    }
    function Q() {
      {
        if (Ie--, Ie === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, n, {
              value: Oe
            }),
            info: J({}, n, {
              value: Te
            }),
            warn: J({}, n, {
              value: br
            }),
            error: J({}, n, {
              value: cr
            }),
            group: J({}, n, {
              value: De
            }),
            groupCollapsed: J({}, n, {
              value: ge
            }),
            groupEnd: J({}, n, {
              value: je
            })
          });
        }
        Ie < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = $.ReactCurrentDispatcher, Ae;
    function oe(n, f, m) {
      {
        if (Ae === void 0)
          try {
            throw Error();
          } catch (B) {
            var k = B.stack.trim().match(/\n( *(at )?)/);
            Ae = k && k[1] || "";
          }
        return `
` + Ae + n;
      }
    }
    var ce = !1, Pe;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new Ke();
    }
    function ze(n, f) {
      if (!n || ce)
        return "";
      {
        var m = Pe.get(n);
        if (m !== void 0)
          return m;
      }
      var k;
      ce = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = Z.current, Z.current = null, yr();
      try {
        if (f) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (fe) {
              k = fe;
            }
            Reflect.construct(n, [], E);
          } else {
            try {
              E.call();
            } catch (fe) {
              k = fe;
            }
            n.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            k = fe;
          }
          n();
        }
      } catch (fe) {
        if (fe && k && typeof fe.stack == "string") {
          for (var R = fe.stack.split(`
`), ae = k.stack.split(`
`), H = R.length - 1, q = ae.length - 1; H >= 1 && q >= 0 && R[H] !== ae[q]; )
            q--;
          for (; H >= 1 && q >= 0; H--, q--)
            if (R[H] !== ae[q]) {
              if (H !== 1 || q !== 1)
                do
                  if (H--, q--, q < 0 || R[H] !== ae[q]) {
                    var de = `
` + R[H].replace(" at new ", " at ");
                    return n.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", n.displayName)), typeof n == "function" && Pe.set(n, de), de;
                  }
                while (H >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        ce = !1, Z.current = A, Q(), Error.prepareStackTrace = B;
      }
      var We = n ? n.displayName || n.name : "", Br = We ? oe(We) : "";
      return typeof n == "function" && Pe.set(n, Br), Br;
    }
    function ur(n, f, m) {
      return ze(n, !1);
    }
    function we(n) {
      var f = n.prototype;
      return !!(f && f.isReactComponent);
    }
    function Be(n, f, m) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return ze(n, we(n));
      if (typeof n == "string")
        return oe(n);
      switch (n) {
        case h:
          return oe("Suspense");
        case v:
          return oe("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case g:
            return ur(n.render);
          case _:
            return Be(n.type, f, m);
          case S: {
            var k = n, B = k._payload, A = k._init;
            try {
              return Be(A(B), f, m);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, Je = {}, dr = $.ReactDebugCurrentFrame;
    function Qe(n) {
      if (n) {
        var f = n._owner, m = Be(n.type, n._source, f ? f.type : null);
        dr.setExtraStackFrame(m);
      } else
        dr.setExtraStackFrame(null);
    }
    function Ge(n, f, m, k, B) {
      {
        var A = Function.call.bind(Ne);
        for (var E in n)
          if (A(n, E)) {
            var R = void 0;
            try {
              if (typeof n[E] != "function") {
                var ae = Error((k || "React class") + ": " + m + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ae.name = "Invariant Violation", ae;
              }
              R = n[E](f, E, k, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              R = H;
            }
            R && !(R instanceof Error) && (Qe(B), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", m, E, typeof R), Qe(null)), R instanceof Error && !(R.message in Je) && (Je[R.message] = !0, Qe(B), C("Failed %s type: %s", m, R.message), Qe(null));
          }
      }
    }
    var Sr = Array.isArray;
    function Ve(n) {
      return Sr(n);
    }
    function ye(n) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, m = f && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return m;
      }
    }
    function Tr(n) {
      try {
        return Ze(n), !1;
      } catch {
        return !0;
      }
    }
    function Ze(n) {
      return "" + n;
    }
    function y(n) {
      if (Tr(n))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(n)), Ze(n);
    }
    var w = $.ReactCurrentOwner, G = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ee, se, re;
    re = {};
    function er(n) {
      if (Ne.call(n, "ref")) {
        var f = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function $e(n) {
      if (Ne.call(n, "key")) {
        var f = Object.getOwnPropertyDescriptor(n, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function D(n, f) {
      if (typeof n.ref == "string" && w.current && f && w.current.stateNode !== f) {
        var m = X(w.current.type);
        re[m] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(w.current.type), n.ref), re[m] = !0);
      }
    }
    function te(n, f) {
      {
        var m = function() {
          ee || (ee = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        m.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function L(n, f) {
      {
        var m = function() {
          se || (se = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        m.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var ue = function(n, f, m, k, B, A, E) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: n,
        key: f,
        ref: m,
        props: E,
        // Record the component responsible for creating this element.
        _owner: A
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function rr(n, f, m, k, B) {
      {
        var A, E = {}, R = null, ae = null;
        m !== void 0 && (y(m), R = "" + m), $e(f) && (y(f.key), R = "" + f.key), er(f) && (ae = f.ref, D(f, B));
        for (A in f)
          Ne.call(f, A) && !G.hasOwnProperty(A) && (E[A] = f[A]);
        if (n && n.defaultProps) {
          var H = n.defaultProps;
          for (A in H)
            E[A] === void 0 && (E[A] = H[A]);
        }
        if (R || ae) {
          var q = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          R && te(E, q), ae && L(E, q);
        }
        return ue(n, R, ae, B, k, w.current, E);
      }
    }
    var Fe = $.ReactCurrentOwner, ne = $.ReactDebugCurrentFrame;
    function he(n) {
      if (n) {
        var f = n._owner, m = Be(n.type, n._source, f ? f.type : null);
        ne.setExtraStackFrame(m);
      } else
        ne.setExtraStackFrame(null);
    }
    var me;
    me = !1;
    function Ye(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function ve() {
      {
        if (Fe.current) {
          var n = X(Fe.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Ue(n) {
      {
        if (n !== void 0) {
          var f = n.fileName.replace(/^.*[\\\/]/, ""), m = n.lineNumber;
          return `

Check your code at ` + f + ":" + m + ".";
        }
        return "";
      }
    }
    var fr = {};
    function Kr(n) {
      {
        var f = ve();
        if (!f) {
          var m = typeof n == "string" ? n : n.displayName || n.name;
          m && (f = `

Check the top-level render call using <` + m + ">.");
        }
        return f;
      }
    }
    function jr(n, f) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var m = Kr(f);
        if (fr[m])
          return;
        fr[m] = !0;
        var k = "";
        n && n._owner && n._owner !== Fe.current && (k = " It was passed a child from " + X(n._owner.type) + "."), he(n), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, k), he(null);
      }
    }
    function Ar(n, f) {
      {
        if (typeof n != "object")
          return;
        if (Ve(n))
          for (var m = 0; m < n.length; m++) {
            var k = n[m];
            Ye(k) && jr(k, f);
          }
        else if (Ye(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var B = z(n);
          if (typeof B == "function" && B !== n.entries)
            for (var A = B.call(n), E; !(E = A.next()).done; )
              Ye(E.value) && jr(E.value, f);
        }
      }
    }
    function Ce(n) {
      {
        var f = n.type;
        if (f == null || typeof f == "string")
          return;
        var m;
        if (typeof f == "function")
          m = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === _))
          m = f.propTypes;
        else
          return;
        if (m) {
          var k = X(f);
          Ge(m, n.props, "prop", k, n);
        } else if (f.PropTypes !== void 0 && !me) {
          me = !0;
          var B = X(f);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jr(n) {
      {
        for (var f = Object.keys(n.props), m = 0; m < f.length; m++) {
          var k = f[m];
          if (k !== "children" && k !== "key") {
            he(n), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), he(null);
            break;
          }
        }
        n.ref !== null && (he(n), C("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    function Pr(n, f, m, k, B, A) {
      {
        var E = ke(n);
        if (!E) {
          var R = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ae = Ue(B);
          ae ? R += ae : R += ve();
          var H;
          n === null ? H = "null" : Ve(n) ? H = "array" : n !== void 0 && n.$$typeof === r ? (H = "<" + (X(n.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : H = typeof n, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, R);
        }
        var q = rr(n, f, m, B, A);
        if (q == null)
          return q;
        if (E) {
          var de = f.children;
          if (de !== void 0)
            if (k)
              if (Ve(de)) {
                for (var We = 0; We < de.length; We++)
                  Ar(de[We], n);
                Object.freeze && Object.freeze(de);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ar(de, n);
        }
        return n === a ? Jr(q) : Ce(q), q;
      }
    }
    function Qr(n, f, m) {
      return Pr(n, f, m, !0);
    }
    function Zr(n, f, m) {
      return Pr(n, f, m, !1);
    }
    var et = Zr, tr = Qr;
    Rr.Fragment = a, Rr.jsx = et, Rr.jsxs = tr;
  }()), Rr;
}
var Er = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function Fo() {
  if (Vt)
    return Er;
  Vt = 1;
  var e = Xe, r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(p, g, h) {
    var v, _ = {}, S = null, T = null;
    h !== void 0 && (S = "" + h), g.key !== void 0 && (S = "" + g.key), g.ref !== void 0 && (T = g.ref);
    for (v in g)
      a.call(g, v) && !u.hasOwnProperty(v) && (_[v] = g[v]);
    if (p && p.defaultProps)
      for (v in g = p.defaultProps, g)
        _[v] === void 0 && (_[v] = g[v]);
    return { $$typeof: r, type: p, key: S, ref: T, props: _, _owner: l.current };
  }
  return Er.Fragment = o, Er.jsx = d, Er.jsxs = d, Er;
}
process.env.NODE_ENV === "production" ? gt.exports = Fo() : gt.exports = $o();
var x = gt.exports;
const [Wo, ar] = co({
  name: "AutoCompleteContext",
  errorMessage: "useAutoCompleteContext: `context` is undefined. Seems you forgot to wrap all autoomplete components within `<AutoComplete />`"
});
var Hr = function(e, r) {
  for (var o, a = nn.Children.toArray(e), l = 0, u = a; l < u.length; l++) {
    var d = u[l];
    if (r(d))
      return d;
    if (!((o = d.props) === null || o === void 0) && o.children) {
      var p = Hr(d.props.children, r);
      if (p)
        return p;
    }
  }
}, Mr = function(e, r) {
  for (var o = 0, a = r.length, l = e.length; o < a; o++, l++)
    e[l] = r[o];
  return e;
}, un = function(e, r) {
  for (var o, a = nn.Children.toArray(e), l = [], u = 0, d = a; u < d.length; u++) {
    var p = d[u];
    r(p) && (l = Mr(Mr([], l), [p])), !((o = p.props) === null || o === void 0) && o.children && (l = Mr(Mr([], l), un(p.props.children, r)));
  }
  return l;
};
function Yt(e, r, o = 2) {
  function a(_, S) {
    _ = " ".repeat(S - 1) + _.toLowerCase() + " ".repeat(S - 1);
    let T = new Array(_.length - S + 1);
    for (let I = 0; I < T.length; I++)
      T[I] = _.slice(I, I + S);
    return T;
  }
  if (!(e != null && e.length) || !(r != null && r.length))
    return 0;
  let l = e.length < r.length ? e : r, u = e.length < r.length ? r : e, d = a(l, o), p = a(u, o), g = new Set(d), h = p.length, v = 0;
  for (let _ of p)
    g.delete(_) && v++;
  return v / h;
}
const Tt = (e) => {
  var r;
  return (r = typeof e == "string" || typeof e == "number" ? e : e[Object.keys(e)[0]]) == null ? void 0 : r.toString();
}, Lo = (e, r) => typeof e != "string" || kt(r) ? e : e.toString().replace(
  new RegExp(No(r), "gi"),
  (a) => `<mark>${a}</mark>`
), Mo = (e) => un(
  e,
  (o) => {
    var a;
    return ((a = o == null ? void 0 : o.type) == null ? void 0 : a.displayName) === "AutoCompleteItem";
  }
).map((o) => {
  const a = Co(o.props, ["value", "label", "fixed", "disabled"]), { getValue: l = Tt } = o.props, u = l(a.value);
  return { ...sn(a.label) ? a : { ...a, label: u }, value: u, originalValue: a.value };
}), Do = () => ({
  bg: "whiteAlpha.100",
  _light: {
    bg: "gray.200"
  }
}), zo = (e, r, o) => (r == null ? void 0 : r.toLowerCase().indexOf(e == null ? void 0 : e.toLowerCase())) >= 0 || (o == null ? void 0 : o.toLowerCase().indexOf(e == null ? void 0 : e.toLowerCase())) >= 0 || Yt(e, r) >= 0.5 || Yt(e, o) >= 0.5;
function No(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
const Go = (e, r) => Hr(
  e,
  (a) => {
    var l;
    return ((l = a == null ? void 0 : a.type) == null ? void 0 : l.displayName) === "AutoCompleteItem" && a.props.value === (r == null ? void 0 : r.value);
  }
), Vo = (e, r) => Hr(
  e,
  (a) => {
    var l;
    return ((l = a == null ? void 0 : a.type) == null ? void 0 : l.displayName) === "AutoCompleteItem" && a.props.value === (r == null ? void 0 : r.value);
  }
), Yo = (e, r) => sn(
  Hr(e, (o) => {
    var l, u;
    const a = K(
      ((l = o.props) == null ? void 0 : l.getValue) || Tt,
      ((u = o.props) == null ? void 0 : u.value) || {}
    );
    return r.some((d) => d.value === a);
  })
), Uo = (e, r) => {
  const o = {}, a = {}, { field: l } = e;
  return l && Object.keys(l).forEach((u) => {
    if (u.startsWith("--input") === !1)
      o[u] = l[u];
    else {
      let d = l[u];
      const g = u.replace("--input-", "").replace(/-([a-z])/g, function(h) {
        return h[1].toUpperCase();
      });
      d.indexOf(".") !== -1 && (d = d.substring(d.indexOf(".") + 1)), a[g] = d;
    }
  }), {
    ...r && {
      ...o,
      ...a,
      _focusWithin: e.field._focus,
      pos: "relative",
      minH: 9,
      // px: 3,
      py: 1.5,
      spacing: 3
    },
    cursor: "text",
    h: "fit-content"
    // w: "full",
  };
};
function Ho(e) {
  var Ze;
  let {
    prefocusFirstItem: r = !0,
    closeOnBlur: o = !0,
    creatable: a,
    emphasize: l,
    emptyState: u = !0,
    freeSolo: d,
    isReadOnly: p,
    listAllValuesOnFocus: g,
    maxSuggestions: h,
    multiple: v,
    closeOnSelect: _ = !v,
    defaultValue: S,
    defaultValues: T = S ? [S] : [],
    onReady: I,
    defaultIsOpen: M,
    disableFilter: z,
    isLoading: $ = !1,
    placement: C = "bottom",
    restoreOnBlurIfEmpty: le = !d,
    shouldRenderSuggestions: ir = () => !0,
    submitKeys: xr = [],
    suggestWhenEmpty: kr,
    value: qe,
    values: sr = qe ? typeof qe == "string" ? [qe] : [...qe] : void 0
  } = e;
  d = d || (v ? !0 : e.freeSolo);
  const { isOpen: pe, onClose: ke, onOpen: Ee } = uo({ defaultIsOpen: M }), lr = K(e.children, {
    isOpen: pe,
    onClose: ke,
    onOpen: Ee
  }), X = Mo(lr), J = _r(null), Ie = _r(null), Oe = _r(null), Te = _r(null), [br, cr] = ut(!1);
  let De = "";
  v ? De = "" : zr(T) ? zr(sr) || (De = sr[0]) : De = T[0];
  const [ge, je] = ut(De ?? ""), F = z ? X : X.filter(
    (y) => y.fixed || K(
      e.filter || zo,
      ge,
      y.value,
      y.label
    ) || br
  ).filter(
    (y, w) => h ? y.fixed || w < h : !0
  ), yr = a ? [{ value: ge, noFilter: !0, creatable: !0 }] : [], Q = [...F, ...yr], [Z, Ae] = fo({
    defaultValue: T.map((y) => y == null ? void 0 : y.toString()),
    value: sr,
    onChange: (y) => {
      const w = Q.find((ee) => ee.value === y[0]), G = y.map(
        (ee) => Q.find((se) => se.value === ee)
      );
      K(
        e.onChange,
        v ? y : y[0],
        v ? G : w
      );
    }
  }), [oe, ce] = ut(
    r ? (Ze = X[0]) == null ? void 0 : Ze.value : null
  ), Pe = e.maxSelections || Z.length + 1, Ke = Q.findIndex((y) => y.value === oe), ze = Ro(
    Ke,
    Q,
    !!e.rollNavigation
  ), ur = Eo(
    Ke,
    Q,
    !!e.rollNavigation
  ), we = Io(Q), Be = dt(Q), Ne = !Q.some(
    (y) => y.value === oe
  );
  gr(() => {
    var y;
    Ne && ce(
      r ? (y = X[0]) == null ? void 0 : y.value : null
    );
  }, [Ne]), po(() => {
    r && ce(we == null ? void 0 : we.value);
  }, [ge]), gr(() => {
    var y;
    !pe && r && ce((y = X[0]) == null ? void 0 : y.value);
  }, [pe]), gr(() => {
    const y = X.find((w) => w.value === oe);
    K(e.onOptionFocus, {
      item: y,
      focusMethod: Te.current,
      isNewInput: y == null ? void 0 : y.creatable
    });
  }, [oe, e.onOptionFocus]);
  const Je = (y) => {
    var ee, se;
    !Z.includes(y) && Z.length < Pe && Ae((re) => v ? [...re, y] : [y]);
    const w = Q.find((re) => re.value === y);
    v && ((ee = J.current) == null || ee.focus()), e.focusInputOnSelect && ((se = J.current) == null || se.focus()), K(e.onSelectOption, {
      item: w,
      selectMethod: Te.current,
      isNewInput: w == null ? void 0 : w.creatable
    }), w != null && w.creatable && K(e.onCreateOption, {
      item: Ur(w, ["noFilter"]),
      selectMethod: Te.current
    });
    const G = (w == null ? void 0 : w.label) || (w == null ? void 0 : w.value);
    je(() => v ? "" : G ?? ""), _ && ke();
  }, dr = (y, w) => {
    var G;
    Ae((ee) => {
      const se = X.find((re) => re.value === y);
      return K(e.onTagRemoved, y, se, ee), ee.filter((re) => re !== y);
    }), ge === y && je(""), w && ((G = J.current) == null || G.focus());
  }, Qe = (y) => {
    var w;
    Ae([]), y && ((w = J.current) == null || w.focus());
  }, Ge = v ? Z.map((y) => {
    var w;
    return {
      label: ((w = X.find((G) => G.value === (y == null ? void 0 : y.toString()))) == null ? void 0 : w.label) || y,
      onRemove: () => dr(y)
    };
  }) : [];
  return gr(() => {
    K(I, { tags: Ge });
  }, [Z]), {
    autoCompleteProps: e,
    children: lr,
    filteredList: Q,
    filteredResults: F,
    focusedValue: oe,
    getEmptyStateProps: (y) => {
      if (Q.every((G) => G.noFilter) && u && !a)
        return typeof u == "boolean" ? y : K(u, { query: ge });
    },
    getGroupProps: (y) => {
      const w = Yo(y.children, Q);
      return {
        divider: {
          hasFirstChild: Go(y.children, we),
          hasLastChild: Vo(
            y.children,
            dt(Q.filter((G) => zr(G == null ? void 0 : G.noFilter)))
          )
        },
        group: {
          display: w ? "initial" : "none"
        }
      };
    },
    getInputProps: (y, w) => {
      const { onBlur: G, onChange: ee, onFocus: se, onKeyDown: re, variant: er, ...$e } = y;
      return {
        wrapper: {
          ref: Ie,
          onClick: () => {
            var D;
            (D = J == null ? void 0 : J.current) == null || D.focus();
          },
          ...Uo(w, v),
          ...$e
        },
        input: {
          isReadOnly: p,
          onFocus: (D) => {
            K(se, D), e.openOnFocus && !p && Ee(), e.selectOnFocus && D.target.select(), g && cr(!0);
          },
          onBlur: (D) => {
            var ue, rr;
            K(G, D);
            const te = D.relatedTarget === (Oe == null ? void 0 : Oe.current) || ((ue = Oe.current) == null ? void 0 : ue.contains(D.relatedTarget)), L = (rr = Ie.current) == null ? void 0 : rr.contains(
              D.relatedTarget
            );
            if (!te && !L && (o && ke(), !Z.includes(D.target.value) && le)) {
              const Fe = dt(Z), ne = X.find(
                (me) => me.value === Fe
              ), he = (ne == null ? void 0 : ne.label) || (ne == null ? void 0 : ne.value) || "";
              je(he);
            }
          },
          onChange: (D) => {
            const te = D.target.value;
            K(ee, D), je(te);
            const L = kt(te);
            K(ir, te) && (!L || kr) ? Ee() : ke(), cr(!1);
          },
          onKeyDown: (D) => {
            var ue;
            K(re, D), Te.current = "keyboard";
            const { key: te } = D, L = Q[Ke];
            if (["Enter", ...xr].includes(te)) {
              L && !(L != null && L.disabled) && pe ? Je(L == null ? void 0 : L.value) : (ue = J.current) == null || ue.focus(), D.preventDefault();
              return;
            }
            if (te === "ArrowDown") {
              pe ? ce(ze == null ? void 0 : ze.value) : Ee(), D.preventDefault();
              return;
            }
            if (te === "ArrowUp") {
              pe ? ce(ur == null ? void 0 : ur.value) : Ee(), D.preventDefault();
              return;
            }
            if (te === "Tab") {
              pe && L && !(L != null && L.disabled) ? Je(L == null ? void 0 : L.value) : ke();
              return;
            }
            if (te === "Home") {
              ce(we == null ? void 0 : we.value), D.preventDefault();
              return;
            }
            if (te === "End") {
              ce(Be == null ? void 0 : Be.value), D.preventDefault();
              return;
            }
            te === "Escape" && (ke(), D.preventDefault());
          },
          value: ge,
          variant: v ? "unstyled" : er,
          ...$e
        }
      };
    },
    getItemProps: (y, w) => {
      var ve;
      const {
        _fixed: G,
        _focus: ee,
        children: se,
        disabled: re,
        label: er,
        value: $e,
        fixed: D,
        getValue: te = Tt,
        onClick: L,
        onMouseOver: ue,
        sx: rr,
        ...Fe
      } = y, ne = w ? $e : (ve = te($e)) == null ? void 0 : ve.toString(), he = ne === oe, me = Q.findIndex((Ue) => Ue.value === ne) >= 0, Ye = se || er || ne;
      return {
        item: {
          ...typeof Ye != "string" || !l ? { children: Ye } : {
            dangerouslySetInnerHTML: {
              __html: Lo(Ye, ge)
            }
          },
          "aria-selected": Z.includes(ne),
          "aria-disabled": re,
          _disabled: { opacity: 0.4, cursor: "not-allowed", userSelect: "none" },
          onClick: (Ue) => {
            var fr;
            K(L, Ue), re ? (fr = J.current) == null || fr.focus() : Je(ne);
          },
          onMouseOver: (Ue) => {
            K(ue, Ue), ce(ne), Te.current = "mouse";
          },
          sx: {
            ...rr,
            mark: {
              color: "inherit",
              bg: "transparent",
              ...Oo(l) ? l : {
                fontWeight: l ? "extrabold" : "inherit"
              }
            }
          },
          ...he && (ee || Do()),
          ...D && G,
          ...Fe
        },
        root: {
          isValidSuggestion: me,
          value: ne
        }
      };
    },
    inputRef: J,
    interactionRef: Te,
    isLoading: $,
    isOpen: pe,
    itemList: X,
    listRef: Oe,
    onClose: ke,
    onOpen: Ee,
    placement: C,
    query: ge,
    removeItem: dr,
    resetItems: Qe,
    setQuery: je,
    tags: Ge,
    values: Z
  };
}
const Xo = vr(
  (e, r) => {
    const o = Ho(e), {
      children: a,
      isOpen: l,
      onClose: u,
      onOpen: d,
      placement: p,
      resetItems: g,
      removeItem: h
    } = o;
    return oo(r, () => ({
      resetItems: g,
      removeItem: h
    })), /* @__PURE__ */ x.jsx(Wo, { value: o, children: /* @__PURE__ */ x.jsx(
      go,
      {
        isLazy: !0,
        isOpen: l,
        onClose: u,
        onOpen: d,
        autoFocus: !1,
        placement: p,
        closeOnBlur: !0,
        matchWidth: !0,
        children: /* @__PURE__ */ x.jsx(
          ho.div,
          {
            w: "full",
            ref: r,
            children: a
          }
        )
      }
    ) });
  }
);
Xo.displayName = "AutoComplete";
const qo = vr(
  (e, r) => {
    const {
      focusedValue: o,
      getItemProps: a,
      interactionRef: l
    } = ar(), u = _r(), d = _t(r, u), p = a(e), { isValidSuggestion: g, value: h } = p.root, v = o === h;
    gr(() => {
      var M;
      v && l.current === "keyboard" && ((M = u == null ? void 0 : u.current) == null || M.scrollIntoView({
        behavior: "smooth",
        block: "center"
      }));
    }, [v, l]), gr(() => {
      typeof h != "string" && console.warn("wow"), typeof h != "string" && zr(e.getValue) && console.error(
        "You must define the `getValue` prop, when an Item's value is not a string"
      );
    }, []);
    const { children: _, dangerouslySetInnerHTML: S, ...T } = p.item, I = Ur(T, ["groupId"]);
    return g ? /* @__PURE__ */ x.jsx(xt, { ref: d, ...dn, ...I, children: _ || /* @__PURE__ */ x.jsx("span", { dangerouslySetInnerHTML: S }) }) : null;
  }
);
qo.displayName = "AutoCompleteItem";
const dn = {
  mx: "2",
  px: "2",
  py: "2",
  rounded: "md",
  cursor: "pointer"
};
function Ko(e) {
  const { alwaysDisplay: r, children: o, ...a } = e, {
    autoCompleteProps: l,
    getItemProps: u,
    query: d,
    filteredResults: p
  } = ar(), { children: g, ...h } = u(
    {
      ...e,
      value: d,
      children: K(o, {
        value: d
      })
    },
    !0
  ).item, v = p.some((T) => T.value === d), _ = kt(d) ? r : !0;
  return l.creatable && _ && !v ? /* @__PURE__ */ x.jsx(xt, { ...dn, ...h, ...a, children: g || `Add ${d}` }) : null;
}
Ko.displayName = "AutoCompleteCreatable";
const Jo = vr(
  (e, r) => {
    const { children: o, showDivider: a, ...l } = e, u = Ur(l, ["groupSibling"]), { getGroupProps: d } = ar(), { group: p } = d(e), g = ea(e);
    return /* @__PURE__ */ x.jsxs(mo, { ref: r, ...p, ...u, children: [
      /* @__PURE__ */ x.jsx(zt, { ...g.top }),
      o,
      /* @__PURE__ */ x.jsx(zt, { ...g.bottom })
    ] });
  }
), Qo = vr(
  (e, r) => /* @__PURE__ */ x.jsx(xt, { ...Zo, ...e, ref: r })
);
Jo.displayName = "AutoCompleteGroup";
Qo.displayName = "AutoCompleteGroupTitle";
const Zo = {
  ml: 5,
  my: 1,
  fontSize: "xs",
  letterSpacing: "wider",
  fontWeight: "extrabold",
  textTransform: "uppercase"
}, ea = (e) => {
  const { getGroupProps: r } = ar(), o = e.groupSibling, {
    divider: { hasFirstChild: a, hasLastChild: l }
  } = r(e), u = {
    my: 2,
    borderColor: e.dividerColor
  }, d = {
    ...u,
    mb: 4,
    display: !e.showDivider || a ? "none" : ""
  }, p = {
    ...u,
    display: !e.showDivider || l || o ? "none" : ""
  };
  return { top: d, bottom: p };
}, Ut = vr(
  (e, r) => {
    const { isLoading: o } = ar(), { loadingIcon: a, ...l } = e;
    return /* @__PURE__ */ x.jsxs(vo, { children: [
      /* @__PURE__ */ x.jsx(bo, { ...l, ref: r }),
      o && /* @__PURE__ */ x.jsx(yo, { children: a || /* @__PURE__ */ x.jsx(an, {}) })
    ] });
  }
), fn = vr(
  (e, r) => {
    const {
      autoCompleteProps: o,
      inputRef: a,
      getInputProps: l,
      tags: u,
      setQuery: d
    } = ar(), {
      children: p,
      isInvalid: g,
      hidePlaceholder: h,
      ...v
    } = e, { value: _ } = v;
    gr(() => {
      _ !== void 0 && (typeof _ == "string" || _ instanceof String) && d(_);
    }, [_]);
    const S = So("Input", e);
    let { wrapper: T, input: I } = l(v, S);
    const { ref: M, ...z } = T, $ = _t(r, a), C = K(p, { tags: u });
    h && (I = {
      ...I,
      placeholder: Array.isArray(C) && C.length ? void 0 : I.placeholder
    });
    const le = /* @__PURE__ */ x.jsx(Ut, { isInvalid: g, ...I, ref: $ }), ir = /* @__PURE__ */ x.jsxs(_o, { ...z, ref: M, children: [
      C,
      /* @__PURE__ */ x.jsx(xo, { as: Ut, ...I, ref: $ })
    ] });
    return /* @__PURE__ */ x.jsx(ko, { children: o.multiple ? ir : le });
  }
);
fn.displayName = "Input";
fn.id = "Input";
function ra() {
  const e = St(
    Bo
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var pn = on({});
pn.displayName = "ColorModeContext";
function gn() {
  const e = St(pn);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function ta() {
  const e = gn(), r = ra();
  return { ...e, theme: r };
}
var wt = (...e) => e.filter(Boolean).join(" ");
function mr(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function") && !Array.isArray(e);
}
function hr(e, ...r) {
  return na(e) ? e(...r) : e;
}
var na = (e) => typeof e == "function", Vr = { exports: {} };
Vr.exports;
(function(e, r) {
  var o = 200, a = "__lodash_hash_undefined__", l = 800, u = 16, d = 9007199254740991, p = "[object Arguments]", g = "[object Array]", h = "[object AsyncFunction]", v = "[object Boolean]", _ = "[object Date]", S = "[object Error]", T = "[object Function]", I = "[object GeneratorFunction]", M = "[object Map]", z = "[object Number]", $ = "[object Null]", C = "[object Object]", le = "[object Proxy]", ir = "[object RegExp]", xr = "[object Set]", kr = "[object String]", qe = "[object Undefined]", sr = "[object WeakMap]", pe = "[object ArrayBuffer]", ke = "[object DataView]", Ee = "[object Float32Array]", lr = "[object Float64Array]", X = "[object Int8Array]", J = "[object Int16Array]", Ie = "[object Int32Array]", Oe = "[object Uint8Array]", Te = "[object Uint8ClampedArray]", br = "[object Uint16Array]", cr = "[object Uint32Array]", De = /[\\^$.*+?()[\]{}|]/g, ge = /^\[object .+?Constructor\]$/, je = /^(?:0|[1-9]\d*)$/, F = {};
  F[Ee] = F[lr] = F[X] = F[J] = F[Ie] = F[Oe] = F[Te] = F[br] = F[cr] = !0, F[p] = F[g] = F[pe] = F[v] = F[ke] = F[_] = F[S] = F[T] = F[M] = F[z] = F[C] = F[ir] = F[xr] = F[kr] = F[sr] = !1;
  var yr = typeof Lr == "object" && Lr && Lr.Object === Object && Lr, Q = typeof self == "object" && self && self.Object === Object && self, Z = yr || Q || Function("return this")(), Ae = r && !r.nodeType && r, oe = Ae && !0 && e && !e.nodeType && e, ce = oe && oe.exports === Ae, Pe = ce && yr.process, Ke = function() {
    try {
      var t = oe && oe.require && oe.require("util").types;
      return t || Pe && Pe.binding && Pe.binding("util");
    } catch {
    }
  }(), ze = Ke && Ke.isTypedArray;
  function ur(t, i, c) {
    switch (c.length) {
      case 0:
        return t.call(i);
      case 1:
        return t.call(i, c[0]);
      case 2:
        return t.call(i, c[0], c[1]);
      case 3:
        return t.call(i, c[0], c[1], c[2]);
    }
    return t.apply(i, c);
  }
  function we(t, i) {
    for (var c = -1, b = Array(t); ++c < t; )
      b[c] = i(c);
    return b;
  }
  function Be(t) {
    return function(i) {
      return t(i);
    };
  }
  function Ne(t, i) {
    return t == null ? void 0 : t[i];
  }
  function Je(t, i) {
    return function(c) {
      return t(i(c));
    };
  }
  var dr = Array.prototype, Qe = Function.prototype, Ge = Object.prototype, Sr = Z["__core-js_shared__"], Ve = Qe.toString, ye = Ge.hasOwnProperty, Tr = function() {
    var t = /[^.]+$/.exec(Sr && Sr.keys && Sr.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }(), Ze = Ge.toString, y = Ve.call(Object), w = RegExp(
    "^" + Ve.call(ye).replace(De, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), G = ce ? Z.Buffer : void 0, ee = Z.Symbol, se = Z.Uint8Array, re = G ? G.allocUnsafe : void 0, er = Je(Object.getPrototypeOf, Object), $e = Object.create, D = Ge.propertyIsEnumerable, te = dr.splice, L = ee ? ee.toStringTag : void 0, ue = function() {
    try {
      var t = tt(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }(), rr = G ? G.isBuffer : void 0, Fe = Math.max, ne = Date.now, he = tt(Z, "Map"), me = tt(Object, "create"), Ye = /* @__PURE__ */ function() {
    function t() {
    }
    return function(i) {
      if (!pr(i))
        return {};
      if ($e)
        return $e(i);
      t.prototype = i;
      var c = new t();
      return t.prototype = void 0, c;
    };
  }();
  function ve(t) {
    var i = -1, c = t == null ? 0 : t.length;
    for (this.clear(); ++i < c; ) {
      var b = t[i];
      this.set(b[0], b[1]);
    }
  }
  function Ue() {
    this.__data__ = me ? me(null) : {}, this.size = 0;
  }
  function fr(t) {
    var i = this.has(t) && delete this.__data__[t];
    return this.size -= i ? 1 : 0, i;
  }
  function Kr(t) {
    var i = this.__data__;
    if (me) {
      var c = i[t];
      return c === a ? void 0 : c;
    }
    return ye.call(i, t) ? i[t] : void 0;
  }
  function jr(t) {
    var i = this.__data__;
    return me ? i[t] !== void 0 : ye.call(i, t);
  }
  function Ar(t, i) {
    var c = this.__data__;
    return this.size += this.has(t) ? 0 : 1, c[t] = me && i === void 0 ? a : i, this;
  }
  ve.prototype.clear = Ue, ve.prototype.delete = fr, ve.prototype.get = Kr, ve.prototype.has = jr, ve.prototype.set = Ar;
  function Ce(t) {
    var i = -1, c = t == null ? 0 : t.length;
    for (this.clear(); ++i < c; ) {
      var b = t[i];
      this.set(b[0], b[1]);
    }
  }
  function Jr() {
    this.__data__ = [], this.size = 0;
  }
  function Pr(t) {
    var i = this.__data__, c = fe(i, t);
    if (c < 0)
      return !1;
    var b = i.length - 1;
    return c == b ? i.pop() : te.call(i, c, 1), --this.size, !0;
  }
  function Qr(t) {
    var i = this.__data__, c = fe(i, t);
    return c < 0 ? void 0 : i[c][1];
  }
  function Zr(t) {
    return fe(this.__data__, t) > -1;
  }
  function et(t, i) {
    var c = this.__data__, b = fe(c, t);
    return b < 0 ? (++this.size, c.push([t, i])) : c[b][1] = i, this;
  }
  Ce.prototype.clear = Jr, Ce.prototype.delete = Pr, Ce.prototype.get = Qr, Ce.prototype.has = Zr, Ce.prototype.set = et;
  function tr(t) {
    var i = -1, c = t == null ? 0 : t.length;
    for (this.clear(); ++i < c; ) {
      var b = t[i];
      this.set(b[0], b[1]);
    }
  }
  function n() {
    this.size = 0, this.__data__ = {
      hash: new ve(),
      map: new (he || Ce)(),
      string: new ve()
    };
  }
  function f(t) {
    var i = Fr(this, t).delete(t);
    return this.size -= i ? 1 : 0, i;
  }
  function m(t) {
    return Fr(this, t).get(t);
  }
  function k(t) {
    return Fr(this, t).has(t);
  }
  function B(t, i) {
    var c = Fr(this, t), b = c.size;
    return c.set(t, i), this.size += c.size == b ? 0 : 1, this;
  }
  tr.prototype.clear = n, tr.prototype.delete = f, tr.prototype.get = m, tr.prototype.has = k, tr.prototype.set = B;
  function A(t) {
    var i = this.__data__ = new Ce(t);
    this.size = i.size;
  }
  function E() {
    this.__data__ = new Ce(), this.size = 0;
  }
  function R(t) {
    var i = this.__data__, c = i.delete(t);
    return this.size = i.size, c;
  }
  function ae(t) {
    return this.__data__.get(t);
  }
  function H(t) {
    return this.__data__.has(t);
  }
  function q(t, i) {
    var c = this.__data__;
    if (c instanceof Ce) {
      var b = c.__data__;
      if (!he || b.length < o - 1)
        return b.push([t, i]), this.size = ++c.size, this;
      c = this.__data__ = new tr(b);
    }
    return c.set(t, i), this.size = c.size, this;
  }
  A.prototype.clear = E, A.prototype.delete = R, A.prototype.get = ae, A.prototype.has = H, A.prototype.set = q;
  function de(t, i) {
    var c = at(t), b = !c && ot(t), P = !c && !b && $t(t), N = !c && !b && !P && Wt(t), Y = c || b || P || N, O = Y ? we(t.length, String) : [], U = O.length;
    for (var Se in t)
      (i || ye.call(t, Se)) && !(Y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Se == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      P && (Se == "offset" || Se == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      N && (Se == "buffer" || Se == "byteLength" || Se == "byteOffset") || // Skip index properties.
      Pt(Se, U))) && O.push(Se);
    return O;
  }
  function We(t, i, c) {
    (c !== void 0 && !Wr(t[i], c) || c === void 0 && !(i in t)) && rt(t, i, c);
  }
  function Br(t, i, c) {
    var b = t[i];
    (!(ye.call(t, i) && Wr(b, c)) || c === void 0 && !(i in t)) && rt(t, i, c);
  }
  function fe(t, i) {
    for (var c = t.length; c--; )
      if (Wr(t[c][0], i))
        return c;
    return -1;
  }
  function rt(t, i, c) {
    i == "__proto__" && ue ? ue(t, i, {
      configurable: !0,
      enumerable: !0,
      value: c,
      writable: !0
    }) : t[i] = c;
  }
  var Rn = Dn();
  function $r(t) {
    return t == null ? t === void 0 ? qe : $ : L && L in Object(t) ? zn(t) : Hn(t);
  }
  function jt(t) {
    return wr(t) && $r(t) == p;
  }
  function En(t) {
    if (!pr(t) || Yn(t))
      return !1;
    var i = st(t) ? w : ge;
    return i.test(Jn(t));
  }
  function In(t) {
    return wr(t) && Ft(t.length) && !!F[$r(t)];
  }
  function On(t) {
    if (!pr(t))
      return Un(t);
    var i = Bt(t), c = [];
    for (var b in t)
      b == "constructor" && (i || !ye.call(t, b)) || c.push(b);
    return c;
  }
  function At(t, i, c, b, P) {
    t !== i && Rn(i, function(N, Y) {
      if (P || (P = new A()), pr(N))
        jn(t, i, Y, c, At, b, P);
      else {
        var O = b ? b(nt(t, Y), N, Y + "", t, i, P) : void 0;
        O === void 0 && (O = N), We(t, Y, O);
      }
    }, Lt);
  }
  function jn(t, i, c, b, P, N, Y) {
    var O = nt(t, c), U = nt(i, c), Se = Y.get(U);
    if (Se) {
      We(t, c, Se);
      return;
    }
    var be = N ? N(O, U, c + "", t, i, Y) : void 0, Cr = be === void 0;
    if (Cr) {
      var lt = at(U), ct = !lt && $t(U), Dt = !lt && !ct && Wt(U);
      be = U, lt || ct || Dt ? at(O) ? be = O : Qn(O) ? be = Wn(O) : ct ? (Cr = !1, be = Bn(U, !0)) : Dt ? (Cr = !1, be = Fn(U, !0)) : be = [] : Zn(U) || ot(U) ? (be = O, ot(O) ? be = eo(O) : (!pr(O) || st(O)) && (be = Nn(U))) : Cr = !1;
    }
    Cr && (Y.set(U, be), P(be, U, b, N, Y), Y.delete(U)), We(t, c, be);
  }
  function An(t, i) {
    return qn(Xn(t, i, Mt), t + "");
  }
  var Pn = ue ? function(t, i) {
    return ue(t, "toString", {
      configurable: !0,
      enumerable: !1,
      value: to(i),
      writable: !0
    });
  } : Mt;
  function Bn(t, i) {
    if (i)
      return t.slice();
    var c = t.length, b = re ? re(c) : new t.constructor(c);
    return t.copy(b), b;
  }
  function $n(t) {
    var i = new t.constructor(t.byteLength);
    return new se(i).set(new se(t)), i;
  }
  function Fn(t, i) {
    var c = i ? $n(t.buffer) : t.buffer;
    return new t.constructor(c, t.byteOffset, t.length);
  }
  function Wn(t, i) {
    var c = -1, b = t.length;
    for (i || (i = Array(b)); ++c < b; )
      i[c] = t[c];
    return i;
  }
  function Ln(t, i, c, b) {
    var P = !c;
    c || (c = {});
    for (var N = -1, Y = i.length; ++N < Y; ) {
      var O = i[N], U = b ? b(c[O], t[O], O, c, t) : void 0;
      U === void 0 && (U = t[O]), P ? rt(c, O, U) : Br(c, O, U);
    }
    return c;
  }
  function Mn(t) {
    return An(function(i, c) {
      var b = -1, P = c.length, N = P > 1 ? c[P - 1] : void 0, Y = P > 2 ? c[2] : void 0;
      for (N = t.length > 3 && typeof N == "function" ? (P--, N) : void 0, Y && Gn(c[0], c[1], Y) && (N = P < 3 ? void 0 : N, P = 1), i = Object(i); ++b < P; ) {
        var O = c[b];
        O && t(i, O, b, N);
      }
      return i;
    });
  }
  function Dn(t) {
    return function(i, c, b) {
      for (var P = -1, N = Object(i), Y = b(i), O = Y.length; O--; ) {
        var U = Y[t ? O : ++P];
        if (c(N[U], U, N) === !1)
          break;
      }
      return i;
    };
  }
  function Fr(t, i) {
    var c = t.__data__;
    return Vn(i) ? c[typeof i == "string" ? "string" : "hash"] : c.map;
  }
  function tt(t, i) {
    var c = Ne(t, i);
    return En(c) ? c : void 0;
  }
  function zn(t) {
    var i = ye.call(t, L), c = t[L];
    try {
      t[L] = void 0;
      var b = !0;
    } catch {
    }
    var P = Ze.call(t);
    return b && (i ? t[L] = c : delete t[L]), P;
  }
  function Nn(t) {
    return typeof t.constructor == "function" && !Bt(t) ? Ye(er(t)) : {};
  }
  function Pt(t, i) {
    var c = typeof t;
    return i = i ?? d, !!i && (c == "number" || c != "symbol" && je.test(t)) && t > -1 && t % 1 == 0 && t < i;
  }
  function Gn(t, i, c) {
    if (!pr(c))
      return !1;
    var b = typeof i;
    return (b == "number" ? it(c) && Pt(i, c.length) : b == "string" && i in c) ? Wr(c[i], t) : !1;
  }
  function Vn(t) {
    var i = typeof t;
    return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? t !== "__proto__" : t === null;
  }
  function Yn(t) {
    return !!Tr && Tr in t;
  }
  function Bt(t) {
    var i = t && t.constructor, c = typeof i == "function" && i.prototype || Ge;
    return t === c;
  }
  function Un(t) {
    var i = [];
    if (t != null)
      for (var c in Object(t))
        i.push(c);
    return i;
  }
  function Hn(t) {
    return Ze.call(t);
  }
  function Xn(t, i, c) {
    return i = Fe(i === void 0 ? t.length - 1 : i, 0), function() {
      for (var b = arguments, P = -1, N = Fe(b.length - i, 0), Y = Array(N); ++P < N; )
        Y[P] = b[i + P];
      P = -1;
      for (var O = Array(i + 1); ++P < i; )
        O[P] = b[P];
      return O[i] = c(Y), ur(t, this, O);
    };
  }
  function nt(t, i) {
    if (!(i === "constructor" && typeof t[i] == "function") && i != "__proto__")
      return t[i];
  }
  var qn = Kn(Pn);
  function Kn(t) {
    var i = 0, c = 0;
    return function() {
      var b = ne(), P = u - (b - c);
      if (c = b, P > 0) {
        if (++i >= l)
          return arguments[0];
      } else
        i = 0;
      return t.apply(void 0, arguments);
    };
  }
  function Jn(t) {
    if (t != null) {
      try {
        return Ve.call(t);
      } catch {
      }
      try {
        return t + "";
      } catch {
      }
    }
    return "";
  }
  function Wr(t, i) {
    return t === i || t !== t && i !== i;
  }
  var ot = jt(/* @__PURE__ */ function() {
    return arguments;
  }()) ? jt : function(t) {
    return wr(t) && ye.call(t, "callee") && !D.call(t, "callee");
  }, at = Array.isArray;
  function it(t) {
    return t != null && Ft(t.length) && !st(t);
  }
  function Qn(t) {
    return wr(t) && it(t);
  }
  var $t = rr || no;
  function st(t) {
    if (!pr(t))
      return !1;
    var i = $r(t);
    return i == T || i == I || i == h || i == le;
  }
  function Ft(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= d;
  }
  function pr(t) {
    var i = typeof t;
    return t != null && (i == "object" || i == "function");
  }
  function wr(t) {
    return t != null && typeof t == "object";
  }
  function Zn(t) {
    if (!wr(t) || $r(t) != C)
      return !1;
    var i = er(t);
    if (i === null)
      return !0;
    var c = ye.call(i, "constructor") && i.constructor;
    return typeof c == "function" && c instanceof c && Ve.call(c) == y;
  }
  var Wt = ze ? Be(ze) : In;
  function eo(t) {
    return Ln(t, Lt(t));
  }
  function Lt(t) {
    return it(t) ? de(t, !0) : On(t);
  }
  var ro = Mn(function(t, i, c, b) {
    At(t, i, c, b);
  });
  function to(t) {
    return function() {
      return t;
    };
  }
  function Mt(t) {
    return t;
  }
  function no() {
    return !1;
  }
  e.exports = ro;
})(Vr, Vr.exports);
var oa = Vr.exports;
const or = /* @__PURE__ */ cn(oa);
var aa = (e) => /!(important)?$/.test(e), Ht = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, ia = (e, r) => (o) => {
  const a = String(r), l = aa(a), u = Ht(a), d = e ? `${e}.${u}` : u;
  let p = mr(o.__cssMap) && d in o.__cssMap ? o.__cssMap[d].varRef : r;
  return p = Ht(p), l ? `${p} !important` : p;
};
function Ct(e) {
  const { scale: r, transform: o, compose: a } = e;
  return (u, d) => {
    var p;
    const g = ia(r, u)(d);
    let h = (p = o == null ? void 0 : o(g, d)) != null ? p : g;
    return a && (h = a(h, d)), h;
  };
}
var Dr = (...e) => (r) => e.reduce((o, a) => a(o), r);
function _e(e, r) {
  return (o) => {
    const a = { property: o, scale: e };
    return a.transform = Ct({
      scale: e,
      transform: r
    }), a;
  };
}
var sa = ({ rtl: e, ltr: r }) => (o) => o.direction === "rtl" ? e : r;
function la(e) {
  const { property: r, scale: o, transform: a } = e;
  return {
    scale: o,
    property: sa(r),
    transform: o ? Ct({
      scale: o,
      compose: a
    }) : a
  };
}
var hn = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function ca() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...hn
  ].join(" ");
}
function ua() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...hn
  ].join(" ");
}
var da = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, fa = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function pa(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
var ga = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, ht = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, ha = new Set(Object.values(ht)), mt = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), ma = (e) => e.trim();
function va(e, r) {
  if (e == null || mt.has(e))
    return e;
  if (!(vt(e) || mt.has(e)))
    return `url('${e}')`;
  const l = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), u = l == null ? void 0 : l[1], d = l == null ? void 0 : l[2];
  if (!u || !d)
    return e;
  const p = u.includes("-gradient") ? u : `${u}-gradient`, [g, ...h] = d.split(",").map(ma).filter(Boolean);
  if ((h == null ? void 0 : h.length) === 0)
    return e;
  const v = g in ht ? ht[g] : g;
  h.unshift(v);
  const _ = h.map((S) => {
    if (ha.has(S))
      return S;
    const T = S.indexOf(" "), [I, M] = T !== -1 ? [S.substr(0, T), S.substr(T + 1)] : [S], z = vt(M) ? M : M && M.split(" "), $ = `colors.${I}`, C = $ in r.__cssMap ? r.__cssMap[$].varRef : I;
    return z ? [
      C,
      ...Array.isArray(z) ? z : [z]
    ].join(" ") : C;
  });
  return `${p}(${_.join(", ")})`;
}
var vt = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), ba = (e, r) => va(e, r ?? {});
function ya(e) {
  return /^var\(--.+\)$/.test(e);
}
var Sa = (e) => {
  const r = parseFloat(e.toString()), o = e.toString().replace(String(r), "");
  return { unitless: !o, value: r, unit: o };
}, Le = (e) => (r) => `${e}(${r})`, j = {
  filter(e) {
    return e !== "auto" ? e : da;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : fa;
  },
  ring(e) {
    return pa(j.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? ca() : e === "auto-gpu" ? ua() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: r } = Sa(e);
    return r || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, r) {
    const o = { left: "right", right: "left" };
    return r.direction === "rtl" ? o[e] : e;
  },
  degree(e) {
    if (ya(e) || e == null)
      return e;
    const r = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || r ? `${e}deg` : e;
  },
  gradient: ba,
  blur: Le("blur"),
  opacity: Le("opacity"),
  brightness: Le("brightness"),
  contrast: Le("contrast"),
  dropShadow: Le("drop-shadow"),
  grayscale: Le("grayscale"),
  hueRotate: (e) => Le("hue-rotate")(j.degree(e)),
  invert: Le("invert"),
  saturate: Le("saturate"),
  sepia: Le("sepia"),
  bgImage(e) {
    return e == null || vt(e) || mt.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const r = String(e) === "0" || String(e) === "none";
    return e !== null && r ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var r;
    const { space: o, divide: a } = (r = ga[e]) != null ? r : {}, l = { flexDirection: e };
    return o && (l[o] = 1), a && (l[a] = 1), l;
  }
}, s = {
  borderWidths: _e("borderWidths"),
  borderStyles: _e("borderStyles"),
  colors: _e("colors"),
  borders: _e("borders"),
  gradients: _e("gradients", j.gradient),
  radii: _e("radii", j.px),
  space: _e("space", Dr(j.vh, j.px)),
  spaceT: _e("space", Dr(j.vh, j.px)),
  degreeT(e) {
    return { property: e, transform: j.degree };
  },
  prop(e, r, o) {
    return {
      property: e,
      scale: r,
      ...r && {
        transform: Ct({ scale: r, transform: o })
      }
    };
  },
  propT(e, r) {
    return { property: e, transform: r };
  },
  sizes: _e("sizes", Dr(j.vh, j.px)),
  sizesT: _e("sizes", Dr(j.vh, j.fraction)),
  shadows: _e("shadows"),
  logical: la,
  blur: _e("blur", j.blur)
}, Nr = {
  background: s.colors("background"),
  backgroundColor: s.colors("backgroundColor"),
  backgroundImage: s.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: j.bgClip },
  bgSize: s.prop("backgroundSize"),
  bgPosition: s.prop("backgroundPosition"),
  bg: s.colors("background"),
  bgColor: s.colors("backgroundColor"),
  bgPos: s.prop("backgroundPosition"),
  bgRepeat: s.prop("backgroundRepeat"),
  bgAttachment: s.prop("backgroundAttachment"),
  bgGradient: s.gradients("backgroundImage"),
  bgClip: { transform: j.bgClip }
};
Object.assign(Nr, {
  bgImage: Nr.backgroundImage,
  bgImg: Nr.backgroundImage
});
var W = {
  border: s.borders("border"),
  borderWidth: s.borderWidths("borderWidth"),
  borderStyle: s.borderStyles("borderStyle"),
  borderColor: s.colors("borderColor"),
  borderRadius: s.radii("borderRadius"),
  borderTop: s.borders("borderTop"),
  borderBlockStart: s.borders("borderBlockStart"),
  borderTopLeftRadius: s.radii("borderTopLeftRadius"),
  borderStartStartRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: s.radii("borderTopRightRadius"),
  borderStartEndRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: s.borders("borderRight"),
  borderInlineEnd: s.borders("borderInlineEnd"),
  borderBottom: s.borders("borderBottom"),
  borderBlockEnd: s.borders("borderBlockEnd"),
  borderBottomLeftRadius: s.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: s.radii("borderBottomRightRadius"),
  borderLeft: s.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: s.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: s.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: s.borders(["borderLeft", "borderRight"]),
  borderInline: s.borders("borderInline"),
  borderY: s.borders(["borderTop", "borderBottom"]),
  borderBlock: s.borders("borderBlock"),
  borderTopWidth: s.borderWidths("borderTopWidth"),
  borderBlockStartWidth: s.borderWidths("borderBlockStartWidth"),
  borderTopColor: s.colors("borderTopColor"),
  borderBlockStartColor: s.colors("borderBlockStartColor"),
  borderTopStyle: s.borderStyles("borderTopStyle"),
  borderBlockStartStyle: s.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: s.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: s.borderWidths("borderBlockEndWidth"),
  borderBottomColor: s.colors("borderBottomColor"),
  borderBlockEndColor: s.colors("borderBlockEndColor"),
  borderBottomStyle: s.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: s.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: s.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: s.borderWidths("borderInlineStartWidth"),
  borderLeftColor: s.colors("borderLeftColor"),
  borderInlineStartColor: s.colors("borderInlineStartColor"),
  borderLeftStyle: s.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: s.borderStyles("borderInlineStartStyle"),
  borderRightWidth: s.borderWidths("borderRightWidth"),
  borderInlineEndWidth: s.borderWidths("borderInlineEndWidth"),
  borderRightColor: s.colors("borderRightColor"),
  borderInlineEndColor: s.colors("borderInlineEndColor"),
  borderRightStyle: s.borderStyles("borderRightStyle"),
  borderInlineEndStyle: s.borderStyles("borderInlineEndStyle"),
  borderTopRadius: s.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: s.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: s.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: s.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(W, {
  rounded: W.borderRadius,
  roundedTop: W.borderTopRadius,
  roundedTopLeft: W.borderTopLeftRadius,
  roundedTopRight: W.borderTopRightRadius,
  roundedTopStart: W.borderStartStartRadius,
  roundedTopEnd: W.borderStartEndRadius,
  roundedBottom: W.borderBottomRadius,
  roundedBottomLeft: W.borderBottomLeftRadius,
  roundedBottomRight: W.borderBottomRightRadius,
  roundedBottomStart: W.borderEndStartRadius,
  roundedBottomEnd: W.borderEndEndRadius,
  roundedLeft: W.borderLeftRadius,
  roundedRight: W.borderRightRadius,
  roundedStart: W.borderInlineStartRadius,
  roundedEnd: W.borderInlineEndRadius,
  borderStart: W.borderInlineStart,
  borderEnd: W.borderInlineEnd,
  borderTopStartRadius: W.borderStartStartRadius,
  borderTopEndRadius: W.borderStartEndRadius,
  borderBottomStartRadius: W.borderEndStartRadius,
  borderBottomEndRadius: W.borderEndEndRadius,
  borderStartRadius: W.borderInlineStartRadius,
  borderEndRadius: W.borderInlineEndRadius,
  borderStartWidth: W.borderInlineStartWidth,
  borderEndWidth: W.borderInlineEndWidth,
  borderStartColor: W.borderInlineStartColor,
  borderEndColor: W.borderInlineEndColor,
  borderStartStyle: W.borderInlineStartStyle,
  borderEndStyle: W.borderInlineEndStyle
});
var _a = {
  color: s.colors("color"),
  textColor: s.colors("color"),
  fill: s.colors("fill"),
  stroke: s.colors("stroke")
}, bt = {
  boxShadow: s.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: s.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: s.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(bt, {
  shadow: bt.boxShadow
});
var xa = {
  filter: { transform: j.filter },
  blur: s.blur("--chakra-blur"),
  brightness: s.propT("--chakra-brightness", j.brightness),
  contrast: s.propT("--chakra-contrast", j.contrast),
  hueRotate: s.propT("--chakra-hue-rotate", j.hueRotate),
  invert: s.propT("--chakra-invert", j.invert),
  saturate: s.propT("--chakra-saturate", j.saturate),
  dropShadow: s.propT("--chakra-drop-shadow", j.dropShadow),
  backdropFilter: { transform: j.backdropFilter },
  backdropBlur: s.blur("--chakra-backdrop-blur"),
  backdropBrightness: s.propT(
    "--chakra-backdrop-brightness",
    j.brightness
  ),
  backdropContrast: s.propT("--chakra-backdrop-contrast", j.contrast),
  backdropHueRotate: s.propT(
    "--chakra-backdrop-hue-rotate",
    j.hueRotate
  ),
  backdropInvert: s.propT("--chakra-backdrop-invert", j.invert),
  backdropSaturate: s.propT("--chakra-backdrop-saturate", j.saturate)
}, Yr = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: j.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: s.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: s.space("gap"),
  rowGap: s.space("rowGap"),
  columnGap: s.space("columnGap")
};
Object.assign(Yr, {
  flexDir: Yr.flexDirection
});
var mn = {
  gridGap: s.space("gridGap"),
  gridColumnGap: s.space("gridColumnGap"),
  gridRowGap: s.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, ka = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: j.outline },
  outlineOffset: !0,
  outlineColor: s.colors("outlineColor")
}, xe = {
  width: s.sizesT("width"),
  inlineSize: s.sizesT("inlineSize"),
  height: s.sizes("height"),
  blockSize: s.sizes("blockSize"),
  boxSize: s.sizes(["width", "height"]),
  minWidth: s.sizes("minWidth"),
  minInlineSize: s.sizes("minInlineSize"),
  minHeight: s.sizes("minHeight"),
  minBlockSize: s.sizes("minBlockSize"),
  maxWidth: s.sizes("maxWidth"),
  maxInlineSize: s.sizes("maxInlineSize"),
  maxHeight: s.sizes("maxHeight"),
  maxBlockSize: s.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, r) => {
      var o, a, l;
      return { [`@media screen and (min-width: ${(l = (a = (o = r.__breakpoints) == null ? void 0 : o.get(e)) == null ? void 0 : a.minW) != null ? l : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, r) => {
      var o, a, l;
      return { [`@media screen and (max-width: ${(l = (a = (o = r.__breakpoints) == null ? void 0 : o.get(e)) == null ? void 0 : a._minW) != null ? l : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: s.propT("float", j.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(xe, {
  w: xe.width,
  h: xe.height,
  minW: xe.minWidth,
  maxW: xe.maxWidth,
  minH: xe.minHeight,
  maxH: xe.maxHeight,
  overscroll: xe.overscrollBehavior,
  overscrollX: xe.overscrollBehaviorX,
  overscrollY: xe.overscrollBehaviorY
});
var Ta = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: s.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: s.prop("listStyleImage")
};
function wa(e, r, o, a) {
  const l = typeof r == "string" ? r.split(".") : [r];
  for (a = 0; a < l.length && e; a += 1)
    e = e[l[a]];
  return e === void 0 ? o : e;
}
var Ca = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (a, l, u, d) => {
    if (typeof a > "u")
      return e(a, l, u);
    r.has(a) || r.set(a, /* @__PURE__ */ new Map());
    const p = r.get(a);
    if (p.has(l))
      return p.get(l);
    const g = e(a, l, u, d);
    return p.set(l, g), g;
  };
}, Ra = Ca(wa), Ea = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Ia = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, ft = (e, r, o) => {
  const a = {}, l = Ra(e, r, {});
  for (const u in l)
    u in o && o[u] != null || (a[u] = l[u]);
  return a;
}, Oa = {
  srOnly: {
    transform(e) {
      return e === !0 ? Ea : e === "focusable" ? Ia : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, r, o) => ft(r, `layerStyles.${e}`, o)
  },
  textStyle: {
    processResult: !0,
    transform: (e, r, o) => ft(r, `textStyles.${e}`, o)
  },
  apply: {
    processResult: !0,
    transform: (e, r, o) => ft(r, e, o)
  }
}, Or = {
  position: !0,
  pos: s.prop("position"),
  zIndex: s.prop("zIndex", "zIndices"),
  inset: s.spaceT("inset"),
  insetX: s.spaceT(["left", "right"]),
  insetInline: s.spaceT("insetInline"),
  insetY: s.spaceT(["top", "bottom"]),
  insetBlock: s.spaceT("insetBlock"),
  top: s.spaceT("top"),
  insetBlockStart: s.spaceT("insetBlockStart"),
  bottom: s.spaceT("bottom"),
  insetBlockEnd: s.spaceT("insetBlockEnd"),
  left: s.spaceT("left"),
  insetInlineStart: s.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: s.spaceT("right"),
  insetInlineEnd: s.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Or, {
  insetStart: Or.insetInlineStart,
  insetEnd: Or.insetInlineEnd
});
var ja = {
  ring: { transform: j.ring },
  ringColor: s.colors("--chakra-ring-color"),
  ringOffset: s.prop("--chakra-ring-offset-width"),
  ringOffsetColor: s.colors("--chakra-ring-offset-color"),
  ringInset: s.prop("--chakra-ring-inset")
}, V = {
  margin: s.spaceT("margin"),
  marginTop: s.spaceT("marginTop"),
  marginBlockStart: s.spaceT("marginBlockStart"),
  marginRight: s.spaceT("marginRight"),
  marginInlineEnd: s.spaceT("marginInlineEnd"),
  marginBottom: s.spaceT("marginBottom"),
  marginBlockEnd: s.spaceT("marginBlockEnd"),
  marginLeft: s.spaceT("marginLeft"),
  marginInlineStart: s.spaceT("marginInlineStart"),
  marginX: s.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: s.spaceT("marginInline"),
  marginY: s.spaceT(["marginTop", "marginBottom"]),
  marginBlock: s.spaceT("marginBlock"),
  padding: s.space("padding"),
  paddingTop: s.space("paddingTop"),
  paddingBlockStart: s.space("paddingBlockStart"),
  paddingRight: s.space("paddingRight"),
  paddingBottom: s.space("paddingBottom"),
  paddingBlockEnd: s.space("paddingBlockEnd"),
  paddingLeft: s.space("paddingLeft"),
  paddingInlineStart: s.space("paddingInlineStart"),
  paddingInlineEnd: s.space("paddingInlineEnd"),
  paddingX: s.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: s.space("paddingInline"),
  paddingY: s.space(["paddingTop", "paddingBottom"]),
  paddingBlock: s.space("paddingBlock")
};
Object.assign(V, {
  m: V.margin,
  mt: V.marginTop,
  mr: V.marginRight,
  me: V.marginInlineEnd,
  marginEnd: V.marginInlineEnd,
  mb: V.marginBottom,
  ml: V.marginLeft,
  ms: V.marginInlineStart,
  marginStart: V.marginInlineStart,
  mx: V.marginX,
  my: V.marginY,
  p: V.padding,
  pt: V.paddingTop,
  py: V.paddingY,
  px: V.paddingX,
  pb: V.paddingBottom,
  pl: V.paddingLeft,
  ps: V.paddingInlineStart,
  paddingStart: V.paddingInlineStart,
  pr: V.paddingRight,
  pe: V.paddingInlineEnd,
  paddingEnd: V.paddingInlineEnd
});
var Aa = {
  textDecorationColor: s.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: s.shadows("textShadow")
}, Pa = {
  clipPath: !0,
  transform: s.propT("transform", j.transform),
  transformOrigin: !0,
  translateX: s.spaceT("--chakra-translate-x"),
  translateY: s.spaceT("--chakra-translate-y"),
  skewX: s.degreeT("--chakra-skew-x"),
  skewY: s.degreeT("--chakra-skew-y"),
  scaleX: s.prop("--chakra-scale-x"),
  scaleY: s.prop("--chakra-scale-y"),
  scale: s.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: s.degreeT("--chakra-rotate")
}, Ba = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: s.prop("transitionDuration", "transition.duration"),
  transitionProperty: s.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: s.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, $a = {
  fontFamily: s.prop("fontFamily", "fonts"),
  fontSize: s.prop("fontSize", "fontSizes", j.px),
  fontWeight: s.prop("fontWeight", "fontWeights"),
  lineHeight: s.prop("lineHeight", "lineHeights"),
  letterSpacing: s.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  isTruncated: {
    transform(e) {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, Fa = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: s.spaceT("scrollMargin"),
  scrollMarginTop: s.spaceT("scrollMarginTop"),
  scrollMarginBottom: s.spaceT("scrollMarginBottom"),
  scrollMarginLeft: s.spaceT("scrollMarginLeft"),
  scrollMarginRight: s.spaceT("scrollMarginRight"),
  scrollMarginX: s.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: s.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: s.spaceT("scrollPadding"),
  scrollPaddingTop: s.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: s.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: s.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: s.spaceT("scrollPaddingRight"),
  scrollPaddingX: s.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: s.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function vn(e) {
  return mr(e) && e.reference ? e.reference : String(e);
}
var Xr = (e, ...r) => r.map(vn).join(` ${e} `).replace(/calc/g, ""), Xt = (...e) => `calc(${Xr("+", ...e)})`, qt = (...e) => `calc(${Xr("-", ...e)})`, yt = (...e) => `calc(${Xr("*", ...e)})`, Kt = (...e) => `calc(${Xr("/", ...e)})`, Jt = (e) => {
  const r = vn(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : yt(r, -1);
}, Ir = Object.assign(
  (e) => ({
    add: (...r) => Ir(Xt(e, ...r)),
    subtract: (...r) => Ir(qt(e, ...r)),
    multiply: (...r) => Ir(yt(e, ...r)),
    divide: (...r) => Ir(Kt(e, ...r)),
    negate: () => Ir(Jt(e)),
    toString: () => e.toString()
  }),
  {
    add: Xt,
    subtract: qt,
    multiply: yt,
    divide: Kt,
    negate: Jt
  }
);
function Wa(e) {
  const r = parseFloat(e.toString()), o = e.toString().replace(String(r), "");
  return { unitless: !o, value: r, unit: o };
}
function Qt(e) {
  if (e == null)
    return e;
  const { unitless: r } = Wa(e);
  return r || typeof e == "number" ? `${e}px` : e;
}
function La(e, r) {
  const o = ["@media screen"];
  return e && o.push("and", `(min-width: ${Qt(e)})`), r && o.push("and", `(max-width: ${Qt(r)})`), o.join(" ");
}
var ie = {
  hover: (e, r) => `${e}:hover ${r}, ${e}[data-hover] ${r}`,
  focus: (e, r) => `${e}:focus ${r}, ${e}[data-focus] ${r}`,
  focusVisible: (e, r) => `${e}:focus-visible ${r}`,
  focusWithin: (e, r) => `${e}:focus-within ${r}`,
  active: (e, r) => `${e}:active ${r}, ${e}[data-active] ${r}`,
  disabled: (e, r) => `${e}:disabled ${r}, ${e}[data-disabled] ${r}`,
  invalid: (e, r) => `${e}:invalid ${r}, ${e}[data-invalid] ${r}`,
  checked: (e, r) => `${e}:checked ${r}, ${e}[data-checked] ${r}`,
  indeterminate: (e, r) => `${e}:indeterminate ${r}, ${e}[aria-checked=mixed] ${r}, ${e}[data-indeterminate] ${r}`,
  readOnly: (e, r) => `${e}:read-only ${r}, ${e}[readonly] ${r}, ${e}[data-read-only] ${r}`,
  expanded: (e, r) => `${e}:read-only ${r}, ${e}[aria-expanded=true] ${r}, ${e}[data-expanded] ${r}`,
  placeholderShown: (e, r) => `${e}:placeholder-shown ${r}`
}, nr = (e) => bn((r) => e(r, "&"), "[role=group]", "[data-group]", ".group"), He = (e) => bn((r) => e(r, "~ &"), "[data-peer]", ".peer"), bn = (e, ...r) => r.map(e).join(", "), Rt = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: nr(ie.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: He(ie.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: nr(ie.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: He(ie.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: nr(ie.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: He(ie.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: nr(ie.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: He(ie.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: nr(ie.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: He(ie.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: nr(ie.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: He(ie.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: nr(ie.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: He(ie.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: nr(ie.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: He(ie.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: He(ie.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]"
}, Ma = Object.keys(
  Rt
);
function Da(e, r = []) {
  const o = Object.assign({}, e);
  for (const a of r)
    a in o && delete o[a];
  return o;
}
var Et = or(
  {},
  Nr,
  W,
  _a,
  Yr,
  xe,
  xa,
  ja,
  ka,
  mn,
  Oa,
  Or,
  bt,
  V,
  Fa,
  $a,
  Aa,
  Pa,
  Ta,
  Ba
);
Object.assign({}, V, xe, Yr, mn, Or);
var za = [...Object.keys(Et), ...Ma], Na = { ...Et, ...Rt }, Ga = (e) => e in Na, Va = (e) => (r) => {
  if (!r.__breakpoints)
    return e;
  const { isResponsive: o, toArrayValue: a, media: l } = r.__breakpoints, u = {};
  for (const d in e) {
    let p = hr(e[d], r);
    if (p == null)
      continue;
    if (p = mr(p) && o(p) ? a(p) : p, !Array.isArray(p)) {
      u[d] = p;
      continue;
    }
    const g = p.slice(0, l.length).length;
    for (let h = 0; h < g; h += 1) {
      const v = l == null ? void 0 : l[h];
      if (!v) {
        u[d] = p[h];
        continue;
      }
      u[v] = u[v] || {}, p[h] != null && (u[v][d] = p[h]);
    }
  }
  return u;
};
function Ya(e) {
  const r = [];
  let o = "", a = !1;
  for (let l = 0; l < e.length; l++) {
    const u = e[l];
    u === "(" ? (a = !0, o += u) : u === ")" ? (a = !1, o += u) : u === "," && !a ? (r.push(o), o = "") : o += u;
  }
  return o = o.trim(), o && r.push(o), r;
}
function Ua(e) {
  return /^var\(--.+\)$/.test(e);
}
var Ha = (e, r) => e.startsWith("--") && typeof r == "string" && !Ua(r), Xa = (e, r) => {
  var o, a;
  if (r == null)
    return r;
  const l = (g) => {
    var h, v;
    return (v = (h = e.__cssMap) == null ? void 0 : h[g]) == null ? void 0 : v.varRef;
  }, u = (g) => {
    var h;
    return (h = l(g)) != null ? h : g;
  }, [d, p] = Ya(r);
  return r = (a = (o = l(d)) != null ? o : u(p)) != null ? a : u(r), r;
};
function qa(e) {
  const { configs: r = {}, pseudos: o = {}, theme: a } = e, l = (u, d = !1) => {
    var p, g, h;
    const v = hr(u, a), _ = Va(v)(a);
    let S = {};
    for (let T in _) {
      const I = _[T];
      let M = hr(I, a);
      T in o && (T = o[T]), Ha(T, M) && (M = Xa(a, M));
      let z = r[T];
      if (z === !0 && (z = { property: T }), mr(M)) {
        S[T] = (p = S[T]) != null ? p : {}, S[T] = or(
          {},
          S[T],
          l(M, !0)
        );
        continue;
      }
      let $ = (h = (g = z == null ? void 0 : z.transform) == null ? void 0 : g.call(z, M, a, v)) != null ? h : M;
      $ = z != null && z.processResult ? l($, !0) : $;
      const C = hr(z == null ? void 0 : z.property, a);
      if (!d && (z != null && z.static)) {
        const le = hr(z.static, a);
        S = or({}, S, le);
      }
      if (C && Array.isArray(C)) {
        for (const le of C)
          S[le] = $;
        continue;
      }
      if (C) {
        C === "&" && mr($) ? S = or({}, S, $) : S[C] = $;
        continue;
      }
      if (mr($)) {
        S = or({}, S, $);
        continue;
      }
      S[T] = $;
    }
    return S;
  };
  return l;
}
var Ka = (e) => (r) => qa({
  theme: r,
  pseudos: Rt,
  configs: Et
})(e);
function Ja(e, r) {
  if (Array.isArray(e))
    return e;
  if (mr(e))
    return r(e);
  if (e != null)
    return [e];
}
function Qa(e, r) {
  for (let o = r + 1; o < e.length; o++)
    if (e[o] != null)
      return o;
  return -1;
}
function Za(e) {
  const r = e.__breakpoints;
  return function(a, l, u, d) {
    var p, g;
    if (!r)
      return;
    const h = {}, v = Ja(u, r.toArrayValue);
    if (!v)
      return h;
    const _ = v.length, S = _ === 1, T = !!a.parts;
    for (let I = 0; I < _; I++) {
      const M = r.details[I], z = r.details[Qa(v, I)], $ = La(M.minW, z == null ? void 0 : z._minW), C = hr((p = a[l]) == null ? void 0 : p[v[I]], d);
      if (C) {
        if (T) {
          (g = a.parts) == null || g.forEach((le) => {
            or(h, {
              [le]: S ? C[le] : { [$]: C[le] }
            });
          });
          continue;
        }
        if (!T) {
          S ? or(h, C) : h[$] = C;
          continue;
        }
        h[$] = C;
      }
    }
    return h;
  };
}
function ei(e) {
  return (r) => {
    var o;
    const { variant: a, size: l, theme: u } = r, d = Za(u);
    return or(
      {},
      hr((o = e.baseStyle) != null ? o : {}, r),
      d(e, "sizes", l, r),
      d(e, "variants", a, r)
    );
  };
}
function ri(e) {
  return Da(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var ti = typeof Element < "u", ni = typeof Map == "function", oi = typeof Set == "function", ai = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Gr(e, r) {
  if (e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor)
      return !1;
    var o, a, l;
    if (Array.isArray(e)) {
      if (o = e.length, o != r.length)
        return !1;
      for (a = o; a-- !== 0; )
        if (!Gr(e[a], r[a]))
          return !1;
      return !0;
    }
    var u;
    if (ni && e instanceof Map && r instanceof Map) {
      if (e.size !== r.size)
        return !1;
      for (u = e.entries(); !(a = u.next()).done; )
        if (!r.has(a.value[0]))
          return !1;
      for (u = e.entries(); !(a = u.next()).done; )
        if (!Gr(a.value[1], r.get(a.value[0])))
          return !1;
      return !0;
    }
    if (oi && e instanceof Set && r instanceof Set) {
      if (e.size !== r.size)
        return !1;
      for (u = e.entries(); !(a = u.next()).done; )
        if (!r.has(a.value[0]))
          return !1;
      return !0;
    }
    if (ai && ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) {
      if (o = e.length, o != r.length)
        return !1;
      for (a = o; a-- !== 0; )
        if (e[a] !== r[a])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === r.source && e.flags === r.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof r.valueOf == "function")
      return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof r.toString == "function")
      return e.toString() === r.toString();
    if (l = Object.keys(e), o = l.length, o !== Object.keys(r).length)
      return !1;
    for (a = o; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, l[a]))
        return !1;
    if (ti && e instanceof Element)
      return !1;
    for (a = o; a-- !== 0; )
      if (!((l[a] === "_owner" || l[a] === "__v" || l[a] === "__o") && e.$$typeof) && !Gr(e[l[a]], r[l[a]]))
        return !1;
    return !0;
  }
  return e !== e && r !== r;
}
var ii = function(r, o) {
  try {
    return Gr(r, o);
  } catch (a) {
    if ((a.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw a;
  }
};
const si = /* @__PURE__ */ cn(ii);
function yn(e, r = {}) {
  var o;
  const { styleConfig: a, ...l } = r, { theme: u, colorMode: d } = ta(), p = e ? jo(u, `components.${e}`) : void 0, g = a || p, h = Ao(
    { theme: u, colorMode: d },
    (o = g == null ? void 0 : g.defaultProps) != null ? o : {},
    ln(Ur(l, ["children"]))
  ), v = _r({});
  if (g) {
    const S = ei(g)(h);
    si(v.current, S) || (v.current = S);
  }
  return v.current;
}
function li(e, r = {}) {
  return yn(e, r);
}
function ci(e, r = {}) {
  return yn(e, r);
}
var ui = /* @__PURE__ */ new Set([
  ...za,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), di = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function fi(e) {
  return di.has(e) || !ui.has(e);
}
function pi(e, ...r) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const o = { ...e };
  for (const a of r)
    if (a != null)
      for (const l in a)
        Object.prototype.hasOwnProperty.call(a, l) && (l in o && delete o[l], o[l] = a[l]);
  return o;
}
var Zt, gi = (Zt = Nt.default) != null ? Zt : Nt, hi = ({ baseStyle: e }) => (r) => {
  const { theme: o, css: a, __css: l, sx: u, ...d } = r, p = Po(d, (_, S) => Ga(S)), g = K(e, r), h = pi(
    {},
    l,
    g,
    ln(p),
    u
  ), v = Ka(h)(r.theme);
  return a ? [v, a] : v;
};
function pt(e, r) {
  const { baseStyle: o, ...a } = r ?? {};
  a.shouldForwardProp || (a.shouldForwardProp = fi);
  const l = hi({ baseStyle: o }), u = gi(
    e,
    a
  )(l);
  return Xe.forwardRef(function(g, h) {
    const { colorMode: v, forced: _ } = gn();
    return Xe.createElement(u, {
      ref: h,
      "data-theme": _ ? v : void 0,
      ...g
    });
  });
}
function mi() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(pt, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(r, o, a) {
      return pt(...a);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(r, o) {
      return e.has(o) || e.set(o, pt(o)), e.get(o);
    }
  });
}
var Me = mi();
function Re(e) {
  return ao(e);
}
var en = {
  path: /* @__PURE__ */ x.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ x.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ x.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ x.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, qr = Re((e, r) => {
  const {
    as: o,
    viewBox: a,
    color: l = "currentColor",
    focusable: u = !1,
    children: d,
    className: p,
    __css: g,
    ...h
  } = e, v = wt("chakra-icon", p), _ = li("Icon", e), S = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: l,
    ...g,
    ..._
  }, T = {
    ref: r,
    focusable: u,
    className: v,
    __css: S
  }, I = a ?? en.viewBox;
  if (o && typeof o != "string")
    return /* @__PURE__ */ x.jsx(Me.svg, { as: o, ...T, ...h });
  const M = d ?? en.path;
  return /* @__PURE__ */ x.jsx(Me.svg, { verticalAlign: "middle", viewBox: I, ...T, ...h, children: M });
});
qr.displayName = "Icon";
function vi(e, r) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${r}`;
}
function bi(e = {}) {
  const {
    name: r,
    strict: o = !0,
    hookName: a = "useContext",
    providerName: l = "Provider",
    errorMessage: u,
    defaultValue: d
  } = e, p = on(d);
  p.displayName = r;
  function g() {
    var h;
    const v = St(p);
    if (!v && o) {
      const _ = new Error(
        u ?? vi(a, l)
      );
      throw _.name = "ContextError", (h = Error.captureStackTrace) == null || h.call(Error, _, g), _;
    }
    return v;
  }
  return [p.Provider, g, p];
}
var yi = Re(function(r, o) {
  const {
    spacing: a = "0.5rem",
    spacingX: l,
    spacingY: u,
    children: d,
    justify: p,
    direction: g,
    align: h,
    className: v,
    shouldWrapChildren: _,
    ...S
  } = r, T = io(
    () => _ ? so.map(d, (I, M) => /* @__PURE__ */ x.jsx(It, { children: I }, M)) : d,
    [d, _]
  );
  return /* @__PURE__ */ x.jsx(Me.div, { ref: o, className: wt("chakra-wrap", v), ...S, children: /* @__PURE__ */ x.jsx(
    Me.ul,
    {
      className: "chakra-wrap__list",
      __css: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: p,
        alignItems: h,
        flexDirection: g,
        listStyleType: "none",
        gap: a,
        columnGap: l,
        rowGap: u,
        padding: "0"
      },
      children: T
    }
  ) });
});
yi.displayName = "Wrap";
var It = Re(function(r, o) {
  const { className: a, ...l } = r;
  return /* @__PURE__ */ x.jsx(
    Me.li,
    {
      ref: o,
      __css: { display: "flex", alignItems: "flex-start" },
      className: wt("chakra-wrap__listitem", a),
      ...l
    }
  );
});
It.displayName = "WrapItem";
var Ot = Me("div");
Ot.displayName = "Box";
var Sn = Re(function(r, o) {
  const { size: a, centerContent: l = !0, ...u } = r, d = l ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ x.jsx(
    Ot,
    {
      ref: o,
      boxSize: a,
      __css: {
        ...d,
        flexShrink: 0,
        flexGrow: 0
      },
      ...u
    }
  );
});
Sn.displayName = "Square";
var Si = Re(function(r, o) {
  const { size: a, ...l } = r;
  return /* @__PURE__ */ x.jsx(Sn, { size: a, ref: o, borderRadius: "9999px", ...l });
});
Si.displayName = "Circle";
var _n = Re(function(r, o) {
  const { direction: a, align: l, justify: u, wrap: d, basis: p, grow: g, shrink: h, ...v } = r, _ = {
    display: "flex",
    flexDirection: a,
    alignItems: l,
    justifyContent: u,
    flexWrap: d,
    flexBasis: p,
    flexGrow: g,
    flexShrink: h
  };
  return /* @__PURE__ */ x.jsx(Me.div, { ref: o, __css: _, ...v });
});
_n.displayName = "Flex";
const _i = (e) => {
  const { getEmptyStateProps: r } = ar(), o = r(
    /* @__PURE__ */ x.jsx(_n, { ...xi, children: "No options found!" })
  );
  return /* @__PURE__ */ x.jsx(Ot, { ...e, children: o });
}, xi = {
  fontSize: "sm",
  align: "center",
  justify: "center",
  fontWeight: "bold",
  fontStyle: "italic"
}, rn = [
  "AutoCompleteGroup",
  "AutoCompleteItem",
  "AutoCompleteCreatable"
], ki = (e) => {
  const r = Xe.Children.map(e, (l, u) => {
    var d;
    if (((d = l == null ? void 0 : l.type) == null ? void 0 : d.displayName) === "AutoCompleteGroup") {
      const p = Xe.Children.toArray(e)[u + 1];
      return Xe.cloneElement(l, {
        groupSibling: p ? p.type.displayName === "AutoCompleteGroup" : !1
      });
    }
    return l;
  }), o = Xe.Children.toArray(r).filter(
    (l) => {
      var u;
      return !rn.includes(
        (u = l == null ? void 0 : l.type) == null ? void 0 : u.displayName
      );
    }
  );
  return [Xe.Children.toArray(r).filter(
    (l) => {
      var u;
      return rn.includes(
        (u = l == null ? void 0 : l.type) == null ? void 0 : u.displayName
      );
    }
  ), o];
}, Ti = vr(
  (e, r) => {
    const { children: o, loadingState: a, ...l } = e, { listRef: u, isLoading: d } = ar(), p = _t(r, u), [g, h] = ki(o);
    return /* @__PURE__ */ x.jsxs(To, { ref: p, w: "inherit", ...wi, ...l, children: [
      d && /* @__PURE__ */ x.jsx(wo, { children: a || /* @__PURE__ */ x.jsx(an, { size: "md" }) }),
      !d && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        g,
        /* @__PURE__ */ x.jsx(_i, {}),
        h
      ] })
    ] });
  }
);
Ti.displayName = "AutoCompleteList";
const wi = {
  py: "4",
  opacity: "0",
  bg: "#232934",
  rounded: "md",
  maxH: "350px",
  border: "none",
  shadow: "base",
  zIndex: "popover",
  overflowY: "auto",
  _light: {
    bg: "#ffffff"
  },
  _focus: {
    boxShadow: "none"
  }
};
var [Ci, xn] = bi({
  name: "TagStylesContext",
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
}), kn = Re((e, r) => {
  const o = ci("Tag", e), a = ri(e), l = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...o.container
  };
  return /* @__PURE__ */ x.jsx(Ci, { value: o, children: /* @__PURE__ */ x.jsx(Me.span, { ref: r, ...a, __css: l }) });
});
kn.displayName = "Tag";
var Tn = Re((e, r) => {
  const o = xn();
  return /* @__PURE__ */ x.jsx(Me.span, { ref: r, noOfLines: 1, ...e, __css: o.label });
});
Tn.displayName = "TagLabel";
var Ri = Re((e, r) => /* @__PURE__ */ x.jsx(qr, { ref: r, verticalAlign: "top", marginEnd: "0.5rem", ...e }));
Ri.displayName = "TagLeftIcon";
var Ei = Re((e, r) => /* @__PURE__ */ x.jsx(qr, { ref: r, verticalAlign: "top", marginStart: "0.5rem", ...e }));
Ei.displayName = "TagRightIcon";
var wn = (e) => /* @__PURE__ */ x.jsx(qr, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...e, children: /* @__PURE__ */ x.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
wn.displayName = "TagCloseIcon";
var Cn = Re(
  (e, r) => {
    const { isDisabled: o, children: a, ...l } = e, d = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...xn().closeButton
    };
    return /* @__PURE__ */ x.jsx(
      Me.button,
      {
        ref: r,
        "aria-label": "close",
        ...l,
        type: "button",
        disabled: o,
        __css: d,
        children: a || /* @__PURE__ */ x.jsx(wn, {})
      }
    );
  }
);
Cn.displayName = "TagCloseButton";
const $i = lo((e) => {
  const { label: r, onRemove: o, disabled: a, ...l } = e;
  return /* @__PURE__ */ x.jsx(It, { children: /* @__PURE__ */ x.jsxs(
    kn,
    {
      borderRadius: "md",
      fontWeight: "normal",
      ...a && tn,
      ...l,
      children: [
        /* @__PURE__ */ x.jsx(Tn, { children: r }),
        /* @__PURE__ */ x.jsx(
          Cn,
          {
            onClick: () => !a && K(o),
            cursor: "pointer",
            ...a && tn
          }
        )
      ]
    }
  ) });
}), tn = {
  cursor: "text",
  userSelect: "none",
  opacity: 0.4,
  _focus: { boxShadow: "none" }
};
export {
  Xo as AutoComplete,
  Ko as AutoCompleteCreatable,
  Jo as AutoCompleteGroup,
  Qo as AutoCompleteGroupTitle,
  fn as AutoCompleteInput,
  qo as AutoCompleteItem,
  Ti as AutoCompleteList,
  Wo as AutoCompleteProvider,
  $i as AutoCompleteTag,
  dn as baseItemStyles,
  Ho as useAutoComplete,
  ar as useAutoCompleteContext
};
