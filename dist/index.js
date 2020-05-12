"use strict";
function e(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var t = e(require("react"));
require("prop-types");
var r = e(require("classnames")),
  n = e(require("date-fns/isDate")),
  a = e(require("date-fns/isValid")),
  o = e(require("date-fns/format")),
  s = e(require("date-fns/addMinutes")),
  i = e(require("date-fns/addHours")),
  p = e(require("date-fns/addDays")),
  c = e(require("date-fns/addWeeks")),
  l = e(require("date-fns/addMonths")),
  d = e(require("date-fns/addYears"));
require("date-fns/subMinutes"), require("date-fns/subHours");
var u = e(require("date-fns/subDays")),
  h = e(require("date-fns/subWeeks")),
  m = e(require("date-fns/subMonths")),
  f = e(require("date-fns/subYears")),
  v = e(require("date-fns/getSeconds")),
  y = e(require("date-fns/getMinutes")),
  D = e(require("date-fns/getHours")),
  w = e(require("date-fns/getDay")),
  k = e(require("date-fns/getDate")),
  g = e(require("date-fns/getWeek")),
  b = e(require("date-fns/getMonth")),
  C = e(require("date-fns/getQuarter")),
  _ = e(require("date-fns/getYear")),
  S = e(require("date-fns/getTime")),
  M = e(require("date-fns/setSeconds")),
  P = e(require("date-fns/setMinutes")),
  E = e(require("date-fns/setHours")),
  N = e(require("date-fns/setMonth")),
  x = e(require("date-fns/setQuarter")),
  O = e(require("date-fns/setYear")),
  Y = e(require("date-fns/min")),
  T = e(require("date-fns/max")),
  L = e(require("date-fns/differenceInCalendarDays")),
  I = e(require("date-fns/differenceInCalendarMonths"));
require("date-fns/differenceInCalendarWeeks");
var F = e(require("date-fns/differenceInCalendarYears")),
  q = e(require("date-fns/startOfDay")),
  R = e(require("date-fns/startOfWeek")),
  W = e(require("date-fns/startOfMonth")),
  A = e(require("date-fns/startOfQuarter")),
  B = e(require("date-fns/startOfYear")),
  j = e(require("date-fns/endOfDay"));
require("date-fns/endOfWeek"), require("date-fns/endOfMonth");
var K = e(require("date-fns/isEqual")),
  H = e(require("date-fns/isSameDay")),
  Q = e(require("date-fns/isSameMonth")),
  V = e(require("date-fns/isSameYear")),
  U = e(require("date-fns/isSameQuarter")),
  $ = e(require("date-fns/isAfter")),
  z = e(require("date-fns/isBefore")),
  G = e(require("date-fns/isWithinInterval")),
  J = e(require("date-fns/toDate")),
  X = e(require("date-fns/parse")),
  Z = e(require("date-fns/parseISO")),
  ee = e(require("react-onclickoutside")),
  te = require("react-popper");
function re(e) {
  return (re =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(e) {
          return typeof e;
        }
      : function(e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function ne(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ae(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function oe(e, t, r) {
  return t && ae(e.prototype, t), r && ae(e, r), e;
}
function se(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = r),
    e
  );
}
function ie() {
  return (ie =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function pe(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? pe(Object(r), !0).forEach(function(t) {
          se(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : pe(Object(r)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
  }
  return e;
}
function le(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 }
  })),
    t && ue(e, t);
}
function de(e) {
  return (de = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function ue(e, t) {
  return (ue =
    Object.setPrototypeOf ||
    function(e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function he(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function me(e, t) {
  return !t || ("object" != typeof t && "function" != typeof t) ? he(e) : t;
}
function fe(e) {
  var t = (function() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function() {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  })();
  return function() {
    var r,
      n = de(e);
    if (t) {
      var a = de(this).constructor;
      r = Reflect.construct(n, arguments, a);
    } else r = n.apply(this, arguments);
    return me(this, r);
  };
}
function ve(e, t) {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}
function ye(e, t) {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}
var De = {
    p: ye,
    P: function(e, t) {
      var r,
        n = e.match(/(P+)(p+)?/),
        a = n[1],
        o = n[2];
      if (!o) return ve(e, t);
      switch (a) {
        case "P":
          r = t.dateTime({ width: "short" });
          break;
        case "PP":
          r = t.dateTime({ width: "medium" });
          break;
        case "PPP":
          r = t.dateTime({ width: "long" });
          break;
        case "PPPP":
        default:
          r = t.dateTime({ width: "full" });
      }
      return r.replace("{{date}}", ve(a, t)).replace("{{time}}", ye(o, t));
    }
  },
  we = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function ke(e) {
  var t = e
    ? "string" == typeof e || e instanceof String
      ? Z(e)
      : J(e)
    : new Date();
  return be(t) ? t : null;
}
function ge(e, t, r, n) {
  var a = null,
    s = Re(r) || qe(),
    i = !0;
  return Array.isArray(t)
    ? (t.forEach(function(t) {
        var r = X(e, t, new Date(), { locale: s });
        n && (i = be(r) && e === o(r, t, { awareOfUnicodeTokens: !0 })),
          be(r) && i && (a = r);
      }),
      a)
    : ((a = X(e, t, new Date(), { locale: s })),
      n
        ? (i = be(a) && e === o(a, t, { awareOfUnicodeTokens: !0 }))
        : be(a) ||
          ((t = t
            .match(we)
            .map(function(e) {
              var t = e[0];
              return "p" === t || "P" === t
                ? s
                  ? (0, De[t])(e, s.formatLong)
                  : t
                : e;
            })
            .join("")),
          e.length > 0 && (a = X(e, t.slice(0, e.length), new Date())),
          be(a) || (a = new Date(e))),
      be(a) && i ? a : null);
}
function be(e) {
  return a(e) && $(e, new Date("1/1/1000"));
}
function Ce(e, t, r) {
  if ("en" === r) return o(e, t, { awareOfUnicodeTokens: !0 });
  var n = Re(r);
  return (
    r &&
      !n &&
      console.warn(
        'A locale object was not found for the provided string ["'.concat(
          r,
          '"].'
        )
      ),
    !n && qe() && Re(qe()) && (n = Re(qe())),
    o(e, t, { locale: n || null, awareOfUnicodeTokens: !0 })
  );
}
function _e(e, t) {
  var r = t.hour,
    n = void 0 === r ? 0 : r,
    a = t.minute,
    o = void 0 === a ? 0 : a,
    s = t.second;
  return E(P(M(e, void 0 === s ? 0 : s), o), n);
}
function Se(e, t) {
  var r = (t && Re(t)) || (qe() && Re(qe()));
  return g(e, r ? { locale: r } : null);
}
function Me(e, t) {
  return Ce(e, "ddd", t);
}
function Pe(e) {
  return q(e);
}
function Ee(e, t) {
  var r = Re(t || qe());
  return R(e, { locale: r });
}
function Ne(e) {
  return W(e);
}
function xe(e) {
  return A(e);
}
function Oe(e, t) {
  return e && t ? V(e, t) : !e && !t;
}
function Ye(e, t) {
  return e && t ? Q(e, t) : !e && !t;
}
function Te(e, t) {
  return e && t ? U(e, t) : !e && !t;
}
function Le(e, t) {
  return e && t ? H(e, t) : !e && !t;
}
function Ie(e, t) {
  return e && t ? K(e, t) : !e && !t;
}
function Fe(e, t, r) {
  var n,
    a = q(t),
    o = j(r);
  try {
    n = G(e, { start: a, end: o });
  } catch (e) {
    n = !1;
  }
  return n;
}
function qe() {
  return ("undefined" != typeof window ? window : global).__localeId__;
}
function Re(e) {
  if ("string" == typeof e) {
    var t = "undefined" != typeof window ? window : global;
    return t.__localeData__ ? t.__localeData__[e] : null;
  }
  return e;
}
function We(e, t) {
  return Ce(N(ke(), e), "LLLL", t);
}
function Ae(e, t) {
  return Ce(N(ke(), e), "LLL", t);
}
function Be(e, t) {
  return Ce(x(ke(), e), "QQQ", t);
}
function je(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    a = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    $e(e, { minDate: r, maxDate: n }) ||
    (a &&
      a.some(function(t) {
        return Le(e, t);
      })) ||
    (o &&
      !o.some(function(t) {
        return Le(e, t);
      })) ||
    (s && !s(ke(e))) ||
    !1
  );
}
function Ke(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.excludeDates;
  return (
    (r &&
      r.some(function(t) {
        return Le(e, t);
      })) ||
    !1
  );
}
function He(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    a = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    $e(e, { minDate: r, maxDate: n }) ||
    (a &&
      a.some(function(t) {
        return Ye(e, t);
      })) ||
    (o &&
      !o.some(function(t) {
        return Ye(e, t);
      })) ||
    (s && !s(ke(e))) ||
    !1
  );
}
function Qe(e, t, r, n) {
  var a = _(e),
    o = b(e),
    s = _(t),
    i = b(t),
    p = _(n);
  return a === s && a === p
    ? o <= r && r <= i
    : a < s
    ? (p === a && o <= r) || (p === s && i >= r) || (p < s && p > a)
    : void 0;
}
function Ve(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    a = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    $e(e, { minDate: r, maxDate: n }) ||
    (a &&
      a.some(function(t) {
        return Te(e, t);
      })) ||
    (o &&
      !o.some(function(t) {
        return Te(e, t);
      })) ||
    (s && !s(ke(e))) ||
    !1
  );
}
function Ue(e, t, r, n) {
  var a = _(e),
    o = C(e),
    s = _(t),
    i = C(t),
    p = _(n);
  return a === s && a === p
    ? o <= r && r <= i
    : a < s
    ? (p === a && o <= r) || (p === s && i >= r) || (p < s && p > a)
    : void 0;
}
function $e(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate;
  return (r && L(e, r) < 0) || (n && L(e, n) > 0);
}
function ze(e, t) {
  for (var r = t.length, n = 0; n < r; n++)
    if (D(t[n]) === D(e) && y(t[n]) === y(e)) return !0;
  return !1;
}
function Ge(e, t) {
  var r = t.minTime,
    n = t.maxTime;
  if (!r || !n) throw new Error("Both minTime and maxTime props required");
  var a,
    o = ke(),
    s = E(P(o, y(e)), D(e)),
    i = E(P(o, y(r)), D(r)),
    p = E(P(o, y(n)), D(n));
  try {
    a = !G(s, { start: i, end: p });
  } catch (e) {
    a = !1;
  }
  return a;
}
function Je(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.includeDates,
    a = m(e, 1);
  return (
    (r && I(r, a) > 0) ||
    (n &&
      n.every(function(e) {
        return I(e, a) > 0;
      })) ||
    !1
  );
}
function Xe(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    n = t.includeDates,
    a = l(e, 1);
  return (
    (r && I(a, r) > 0) ||
    (n &&
      n.every(function(e) {
        return I(a, e) > 0;
      })) ||
    !1
  );
}
function Ze(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.includeDates,
    a = f(e, 1);
  return (
    (r && F(r, a) > 0) ||
    (n &&
      n.every(function(e) {
        return F(e, a) > 0;
      })) ||
    !1
  );
}
function et(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    n = t.includeDates,
    a = d(e, 1);
  return (
    (r && F(a, r) > 0) ||
    (n &&
      n.every(function(e) {
        return F(a, e) > 0;
      })) ||
    !1
  );
}
function tt(e) {
  var t = e.minDate,
    r = e.includeDates;
  if (r && t) {
    var n = r.filter(function(e) {
      return L(e, t) >= 0;
    });
    return Y(n);
  }
  return r ? Y(r) : t;
}
function rt(e) {
  var t = e.maxDate,
    r = e.includeDates;
  if (r && t) {
    var n = r.filter(function(e) {
      return L(e, t) <= 0;
    });
    return T(n);
  }
  return r ? T(r) : t;
}
function nt() {
  for (
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "react-datepicker__day--highlighted",
      r = new Map(),
      a = 0,
      o = e.length;
    a < o;
    a++
  ) {
    var s = e[a];
    if (n(s)) {
      var i = Ce(s, "MM.dd.yyyy"),
        p = r.get(i) || [];
      p.includes(t) || (p.push(t), r.set(i, p));
    } else if ("object" === re(s)) {
      var c = Object.keys(s),
        l = c[0],
        d = s[c[0]];
      if ("string" == typeof l && d.constructor === Array)
        for (var u = 0, h = d.length; u < h; u++) {
          var m = Ce(d[u], "MM.dd.yyyy"),
            f = r.get(m) || [];
          f.includes(l) || (f.push(l), r.set(m, f));
        }
    }
  }
  return r;
}
function at(e, t, r, n, a) {
  for (var o = a.length, p = [], c = 0; c < o; c++) {
    var l = s(i(e, D(a[c])), y(a[c])),
      d = s(e, (r + 1) * n);
    $(l, t) && z(l, d) && p.push(a[c]);
  }
  return p;
}
function ot(e) {
  return e < 10 ? "0".concat(e) : "".concat(e);
}
function st(e, t, r, n) {
  for (var a = [], o = 0; o < 2 * t + 1; o++) {
    var s = e + t - o,
      i = !0;
    r && (i = _(r) <= s), n && i && (i = _(n) >= s), i && a.push(s);
  }
  return a;
}
var it = ee(
    (function(e) {
      le(a, t.Component);
      var n = fe(a);
      function a(e) {
        var r;
        ne(this, a),
          se(he((r = n.call(this, e))), "renderOptions", function() {
            var e = r.props.year,
              n = r.state.yearsList.map(function(n) {
                return t.createElement(
                  "div",
                  {
                    className:
                      e === n
                        ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                        : "react-datepicker__year-option",
                    key: n,
                    onClick: r.onChange.bind(he(r), n)
                  },
                  e === n
                    ? t.createElement(
                        "span",
                        {
                          className: "react-datepicker__year-option--selected"
                        },
                        "✓"
                      )
                    : "",
                  n
                );
              }),
              a = r.props.minDate ? _(r.props.minDate) : null,
              o = r.props.maxDate ? _(r.props.maxDate) : null;
            return (
              (o &&
                r.state.yearsList.find(function(e) {
                  return e === o;
                })) ||
                n.unshift(
                  t.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "upcoming",
                      onClick: r.incrementYears
                    },
                    t.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"
                    })
                  )
                ),
              (a &&
                r.state.yearsList.find(function(e) {
                  return e === a;
                })) ||
                n.push(
                  t.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "previous",
                      onClick: r.decrementYears
                    },
                    t.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"
                    })
                  )
                ),
              n
            );
          }),
          se(he(r), "onChange", function(e) {
            r.props.onChange(e);
          }),
          se(he(r), "handleClickOutside", function() {
            r.props.onCancel();
          }),
          se(he(r), "shiftYears", function(e) {
            var t = r.state.yearsList.map(function(t) {
              return t + e;
            });
            r.setState({ yearsList: t });
          }),
          se(he(r), "incrementYears", function() {
            return r.shiftYears(1);
          }),
          se(he(r), "decrementYears", function() {
            return r.shiftYears(-1);
          });
        var o = e.yearDropdownItemNumber,
          s = e.scrollableYearDropdown,
          i = o || (s ? 10 : 5);
        return (
          (r.state = {
            yearsList: st(r.props.year, i, r.props.minDate, r.props.maxDate)
          }),
          r
        );
      }
      return (
        oe(a, [
          {
            key: "render",
            value: function() {
              var e = r({
                "react-datepicker__year-dropdown": !0,
                "react-datepicker__year-dropdown--scrollable": this.props
                  .scrollableYearDropdown
              });
              return t.createElement(
                "div",
                { className: e },
                this.renderOptions()
              );
            }
          }
        ]),
        a
      );
    })()
  ),
  pt = (function(e) {
    le(n, t.Component);
    var r = fe(n);
    function n() {
      var e;
      ne(this, n);
      for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      return (
        se(he((e = r.call.apply(r, [this].concat(o)))), "state", {
          dropdownVisible: !1
        }),
        se(he(e), "renderSelectOptions", function() {
          for (
            var r = e.props.minDate ? _(e.props.minDate) : 1900,
              n = e.props.maxDate ? _(e.props.maxDate) : 2100,
              a = [],
              o = r;
            o <= n;
            o++
          )
            a.push(t.createElement("option", { key: o, value: o }, o));
          return a;
        }),
        se(he(e), "onSelectChange", function(t) {
          e.onChange(t.target.value);
        }),
        se(he(e), "renderSelectMode", function() {
          return t.createElement(
            "select",
            {
              value: e.props.year,
              className: "react-datepicker__year-select",
              onChange: e.onSelectChange
            },
            e.renderSelectOptions()
          );
        }),
        se(he(e), "renderReadView", function(r) {
          return t.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__year-read-view",
              onClick: function(t) {
                return e.toggleDropdown(t);
              }
            },
            t.createElement("span", {
              className: "react-datepicker__year-read-view--down-arrow"
            }),
            t.createElement(
              "span",
              { className: "react-datepicker__year-read-view--selected-year" },
              e.props.year
            )
          );
        }),
        se(he(e), "renderDropdown", function() {
          return t.createElement(it, {
            key: "dropdown",
            year: e.props.year,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
            minDate: e.props.minDate,
            maxDate: e.props.maxDate,
            scrollableYearDropdown: e.props.scrollableYearDropdown,
            yearDropdownItemNumber: e.props.yearDropdownItemNumber
          });
        }),
        se(he(e), "renderScrollMode", function() {
          var t = e.state.dropdownVisible,
            r = [e.renderReadView(!t)];
          return t && r.unshift(e.renderDropdown()), r;
        }),
        se(he(e), "onChange", function(t) {
          e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
        }),
        se(he(e), "toggleDropdown", function(t) {
          e.setState({ dropdownVisible: !e.state.dropdownVisible }, function() {
            e.props.adjustDateOnChange && e.handleYearChange(e.props.date, t);
          });
        }),
        se(he(e), "handleYearChange", function(t, r) {
          e.onSelect(t, r), e.setOpen();
        }),
        se(he(e), "onSelect", function(t, r) {
          e.props.onSelect && e.props.onSelect(t, r);
        }),
        se(he(e), "setOpen", function() {
          e.props.setOpen && e.props.setOpen(!0);
        }),
        e
      );
    }
    return (
      oe(n, [
        {
          key: "render",
          value: function() {
            var e;
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode();
                break;
              case "select":
                e = this.renderSelectMode();
            }
            return t.createElement(
              "div",
              {
                className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                  this.props.dropdownMode
                )
              },
              e
            );
          }
        }
      ]),
      n
    );
  })(),
  ct = ee(
    (function(e) {
      le(n, t.Component);
      var r = fe(n);
      function n() {
        var e;
        ne(this, n);
        for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
          o[s] = arguments[s];
        return (
          se(
            he((e = r.call.apply(r, [this].concat(o)))),
            "renderOptions",
            function() {
              return e.props.monthNames.map(function(r, n) {
                return t.createElement(
                  "div",
                  {
                    className:
                      e.props.month === n
                        ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                        : "react-datepicker__month-option",
                    key: r,
                    onClick: e.onChange.bind(he(e), n)
                  },
                  e.props.month === n
                    ? t.createElement(
                        "span",
                        {
                          className: "react-datepicker__month-option--selected"
                        },
                        "✓"
                      )
                    : "",
                  r
                );
              });
            }
          ),
          se(he(e), "onChange", function(t) {
            return e.props.onChange(t);
          }),
          se(he(e), "handleClickOutside", function() {
            return e.props.onCancel();
          }),
          e
        );
      }
      return (
        oe(n, [
          {
            key: "render",
            value: function() {
              return t.createElement(
                "div",
                { className: "react-datepicker__month-dropdown" },
                this.renderOptions()
              );
            }
          }
        ]),
        n
      );
    })()
  ),
  lt = (function(e) {
    le(n, t.Component);
    var r = fe(n);
    function n() {
      var e;
      ne(this, n);
      for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      return (
        se(he((e = r.call.apply(r, [this].concat(o)))), "state", {
          dropdownVisible: !1
        }),
        se(he(e), "renderSelectOptions", function(e) {
          return e.map(function(e, r) {
            return t.createElement("option", { key: r, value: r }, e);
          });
        }),
        se(he(e), "renderSelectMode", function(r) {
          return t.createElement(
            "select",
            {
              value: e.props.month,
              className: "react-datepicker__month-select",
              onChange: function(t) {
                return e.onChange(t.target.value);
              }
            },
            e.renderSelectOptions(r)
          );
        }),
        se(he(e), "renderReadView", function(r, n) {
          return t.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__month-read-view",
              onClick: e.toggleDropdown
            },
            t.createElement("span", {
              className: "react-datepicker__month-read-view--down-arrow"
            }),
            t.createElement(
              "span",
              {
                className: "react-datepicker__month-read-view--selected-month"
              },
              n[e.props.month]
            )
          );
        }),
        se(he(e), "renderDropdown", function(r) {
          return t.createElement(ct, {
            key: "dropdown",
            month: e.props.month,
            monthNames: r,
            onChange: e.onChange,
            onCancel: e.toggleDropdown
          });
        }),
        se(he(e), "renderScrollMode", function(t) {
          var r = e.state.dropdownVisible,
            n = [e.renderReadView(!r, t)];
          return r && n.unshift(e.renderDropdown(t)), n;
        }),
        se(he(e), "onChange", function(t) {
          e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
        }),
        se(he(e), "toggleDropdown", function() {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      oe(n, [
        {
          key: "render",
          value: function() {
            var e,
              r = this,
              n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                this.props.useShortMonthInDropdown
                  ? function(e) {
                      return Ae(e, r.props.locale);
                    }
                  : function(e) {
                      return We(e, r.props.locale);
                    }
              );
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode(n);
                break;
              case "select":
                e = this.renderSelectMode(n);
            }
            return t.createElement(
              "div",
              {
                className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                  this.props.dropdownMode
                )
              },
              e
            );
          }
        }
      ]),
      n
    );
  })();
function dt(e, t) {
  for (var r = [], n = Ne(e), a = Ne(t); !$(n, a); )
    r.push(ke(n)), (n = l(n, 1));
  return r;
}
var ut = ee(
    (function(e) {
      le(a, t.Component);
      var n = fe(a);
      function a(e) {
        var r;
        return (
          ne(this, a),
          se(he((r = n.call(this, e))), "renderOptions", function() {
            return r.state.monthYearsList.map(function(e) {
              var n = S(e),
                a = Oe(r.props.date, e) && Ye(r.props.date, e);
              return t.createElement(
                "div",
                {
                  className: a
                    ? "react-datepicker__month-year-option --selected_month-year"
                    : "react-datepicker__month-year-option",
                  key: n,
                  onClick: r.onChange.bind(he(r), n)
                },
                a
                  ? t.createElement(
                      "span",
                      {
                        className:
                          "react-datepicker__month-year-option--selected"
                      },
                      "✓"
                    )
                  : "",
                Ce(e, r.props.dateFormat)
              );
            });
          }),
          se(he(r), "onChange", function(e) {
            return r.props.onChange(e);
          }),
          se(he(r), "handleClickOutside", function() {
            r.props.onCancel();
          }),
          (r.state = { monthYearsList: dt(r.props.minDate, r.props.maxDate) }),
          r
        );
      }
      return (
        oe(a, [
          {
            key: "render",
            value: function() {
              var e = r({
                "react-datepicker__month-year-dropdown": !0,
                "react-datepicker__month-year-dropdown--scrollable": this.props
                  .scrollableMonthYearDropdown
              });
              return t.createElement(
                "div",
                { className: e },
                this.renderOptions()
              );
            }
          }
        ]),
        a
      );
    })()
  ),
  ht = (function(e) {
    le(n, t.Component);
    var r = fe(n);
    function n() {
      var e;
      ne(this, n);
      for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      return (
        se(he((e = r.call.apply(r, [this].concat(o)))), "state", {
          dropdownVisible: !1
        }),
        se(he(e), "renderSelectOptions", function() {
          for (
            var r = Ne(e.props.minDate), n = Ne(e.props.maxDate), a = [];
            !$(r, n);

          ) {
            var o = S(r);
            a.push(
              t.createElement(
                "option",
                { key: o, value: o },
                Ce(r, e.props.dateFormat, e.props.locale)
              )
            ),
              (r = l(r, 1));
          }
          return a;
        }),
        se(he(e), "onSelectChange", function(t) {
          e.onChange(t.target.value);
        }),
        se(he(e), "renderSelectMode", function() {
          return t.createElement(
            "select",
            {
              value: S(Ne(e.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: e.onSelectChange
            },
            e.renderSelectOptions()
          );
        }),
        se(he(e), "renderReadView", function(r) {
          var n = Ce(e.props.date, e.props.dateFormat, e.props.locale);
          return t.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__month-year-read-view",
              onClick: function(t) {
                return e.toggleDropdown(t);
              }
            },
            t.createElement("span", {
              className: "react-datepicker__month-year-read-view--down-arrow"
            }),
            t.createElement(
              "span",
              {
                className:
                  "react-datepicker__month-year-read-view--selected-month-year"
              },
              n
            )
          );
        }),
        se(he(e), "renderDropdown", function() {
          return t.createElement(ut, {
            key: "dropdown",
            date: e.props.date,
            dateFormat: e.props.dateFormat,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
            minDate: e.props.minDate,
            maxDate: e.props.maxDate,
            scrollableMonthYearDropdown: e.props.scrollableMonthYearDropdown
          });
        }),
        se(he(e), "renderScrollMode", function() {
          var t = e.state.dropdownVisible,
            r = [e.renderReadView(!t)];
          return t && r.unshift(e.renderDropdown()), r;
        }),
        se(he(e), "onChange", function(t) {
          e.toggleDropdown();
          var r = ke(parseInt(t));
          (Oe(e.props.date, r) && Ye(e.props.date, r)) || e.props.onChange(r);
        }),
        se(he(e), "toggleDropdown", function() {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      oe(n, [
        {
          key: "render",
          value: function() {
            var e;
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode();
                break;
              case "select":
                e = this.renderSelectMode();
            }
            return t.createElement(
              "div",
              {
                className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                  this.props.dropdownMode
                )
              },
              e
            );
          }
        }
      ]),
      n
    );
  })(),
  mt = (function(e) {
    le(a, t.Component);
    var n = fe(a);
    function a() {
      var e;
      ne(this, a);
      for (var o = arguments.length, s = new Array(o), i = 0; i < o; i++)
        s[i] = arguments[i];
      return (
        se(he((e = n.call.apply(n, [this].concat(s)))), "dayEl", t.createRef()),
        se(he(e), "handleClick", function(t) {
          !e.isDisabled() && e.props.onClick && e.props.onClick(t);
        }),
        se(he(e), "handleMouseEnter", function(t) {
          !e.isDisabled() && e.props.onMouseEnter && e.props.onMouseEnter(t);
        }),
        se(he(e), "handleOnKeyDown", function(t) {
          " " === t.key && (t.preventDefault(), (t.key = "Enter")),
            e.props.handleOnKeyDown(t);
        }),
        se(he(e), "isSameDay", function(t) {
          return Le(e.props.day, t);
        }),
        se(he(e), "isKeyboardSelected", function() {
          return (
            !e.props.disabledKeyboardNavigation &&
            !e.props.inline &&
            !e.isSameDay(e.props.selected) &&
            e.isSameDay(e.props.preSelection)
          );
        }),
        se(he(e), "isDisabled", function() {
          return je(e.props.day, e.props);
        }),
        se(he(e), "isExcluded", function() {
          return Ke(e.props.day, e.props);
        }),
        se(he(e), "getHighLightedClass", function(t) {
          var r = e.props,
            n = r.day,
            a = r.highlightDates;
          if (!a) return !1;
          var o = Ce(n, "MM.dd.yyyy");
          return a.get(o);
        }),
        se(he(e), "isInRange", function() {
          var t = e.props,
            r = t.day,
            n = t.startDate,
            a = t.endDate;
          return !(!n || !a) && Fe(r, n, a);
        }),
        se(he(e), "isInSelectingRange", function() {
          var t = e.props,
            r = t.day,
            n = t.selectsStart,
            a = t.selectsEnd,
            o = t.selectingDate,
            s = t.startDate,
            i = t.endDate;
          return (
            !((!n && !a) || !o || e.isDisabled()) &&
            (n && i && (z(o, i) || Ie(o, i))
              ? Fe(r, o, i)
              : !(!a || !s || (!$(o, s) && !Ie(o, s))) && Fe(r, s, o))
          );
        }),
        se(he(e), "isSelectingRangeStart", function() {
          if (!e.isInSelectingRange()) return !1;
          var t = e.props,
            r = t.day,
            n = t.selectingDate,
            a = t.startDate;
          return Le(r, t.selectsStart ? n : a);
        }),
        se(he(e), "isSelectingRangeEnd", function() {
          if (!e.isInSelectingRange()) return !1;
          var t = e.props,
            r = t.day,
            n = t.selectingDate,
            a = t.endDate;
          return Le(r, t.selectsEnd ? n : a);
        }),
        se(he(e), "isRangeStart", function() {
          var t = e.props,
            r = t.day,
            n = t.startDate,
            a = t.endDate;
          return !(!n || !a) && Le(n, r);
        }),
        se(he(e), "isRangeEnd", function() {
          var t = e.props,
            r = t.day,
            n = t.startDate,
            a = t.endDate;
          return !(!n || !a) && Le(a, r);
        }),
        se(he(e), "isWeekend", function() {
          var t = w(e.props.day);
          return 0 === t || 6 === t;
        }),
        se(he(e), "isOutsideMonth", function() {
          return void 0 !== e.props.month && e.props.month !== b(e.props.day);
        }),
        se(he(e), "getClassNames", function(t) {
          var n = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
          return r(
            "react-datepicker__day",
            n,
            "react-datepicker__day--" + Me(e.props.day),
            {
              "react-datepicker__day--disabled": e.isDisabled(),
              "react-datepicker__day--excluded": e.isExcluded(),
              "react-datepicker__day--selected": e.isSameDay(e.props.selected),
              "react-datepicker__day--keyboard-selected": e.isKeyboardSelected(),
              "react-datepicker__day--range-start": e.isRangeStart(),
              "react-datepicker__day--range-end": e.isRangeEnd(),
              "react-datepicker__day--in-range": e.isInRange(),
              "react-datepicker__day--in-selecting-range": e.isInSelectingRange(),
              "react-datepicker__day--selecting-range-start": e.isSelectingRangeStart(),
              "react-datepicker__day--selecting-range-end": e.isSelectingRangeEnd(),
              "react-datepicker__day--today": e.isSameDay(ke()),
              "react-datepicker__day--weekend": e.isWeekend(),
              "react-datepicker__day--outside-month": e.isOutsideMonth()
            },
            e.getHighLightedClass("react-datepicker__day--highlighted")
          );
        }),
        se(he(e), "getAriaLabel", function() {
          var t = e.props,
            r = t.day,
            n = t.ariaLabelPrefixWhenEnabled,
            a = void 0 === n ? "Choose" : n,
            o = t.ariaLabelPrefixWhenDisabled,
            s = void 0 === o ? "Not available" : o,
            i = e.isDisabled() || e.isExcluded() ? s : a;
          return "".concat(i, " ").concat(Ce(r, "PPPP"));
        }),
        se(he(e), "getTabIndex", function(t, r) {
          var n = t || e.props.selected,
            a = r || e.props.preSelection;
          return e.isKeyboardSelected() || (e.isSameDay(n) && Le(a, n))
            ? 0
            : -1;
        }),
        se(he(e), "handleFocusDay", function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = !1;
          0 === e.getTabIndex() &&
            !t.isInputFocused &&
            e.isSameDay(e.props.preSelection) &&
            ((document.activeElement &&
              document.activeElement !== document.body) ||
              (r = !0),
            e.props.containerRef &&
              e.props.containerRef.current &&
              e.props.containerRef.current.contains(document.activeElement) &&
              document.activeElement.classList.contains(
                "react-datepicker__day"
              ) &&
              (r = !0)),
            r && e.dayEl.current.focus();
        }),
        se(he(e), "render", function() {
          return t.createElement(
            "div",
            {
              ref: e.dayEl,
              className: e.getClassNames(e.props.day),
              onKeyDown: e.handleOnKeyDown,
              onClick: e.handleClick,
              onMouseEnter: e.handleMouseEnter,
              tabIndex: e.getTabIndex(),
              "aria-label": e.getAriaLabel(),
              role: "button",
              "aria-disabled": e.isDisabled()
            },
            e.props.renderDayContents
              ? e.props.renderDayContents(k(e.props.day), e.props.day)
              : k(e.props.day)
          );
        }),
        e
      );
    }
    return (
      oe(a, [
        {
          key: "componentDidMount",
          value: function() {
            this.handleFocusDay();
          }
        },
        {
          key: "componentDidUpdate",
          value: function(e) {
            this.handleFocusDay(e);
          }
        }
      ]),
      a
    );
  })(),
  ft = (function(e) {
    le(a, t.Component);
    var n = fe(a);
    function a() {
      var e;
      ne(this, a);
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return (
        se(he((e = n.call.apply(n, [this].concat(r)))), "handleClick", function(
          t
        ) {
          e.props.onClick && e.props.onClick(t);
        }),
        e
      );
    }
    return (
      oe(a, [
        {
          key: "render",
          value: function() {
            var e = this.props,
              n = e.weekNumber,
              a = e.ariaLabelPrefix,
              o = void 0 === a ? "week " : a,
              s = {
                "react-datepicker__week-number": !0,
                "react-datepicker__week-number--clickable": !!e.onClick
              };
            return t.createElement(
              "div",
              {
                className: r(s),
                "aria-label": "".concat(o, " ").concat(this.props.weekNumber),
                onClick: this.handleClick
              },
              n
            );
          }
        }
      ]),
      a
    );
  })(),
  vt = (function(e) {
    le(n, t.Component);
    var r = fe(n);
    function n() {
      var e;
      ne(this, n);
      for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      return (
        se(
          he((e = r.call.apply(r, [this].concat(o)))),
          "handleDayClick",
          function(t, r) {
            e.props.onDayClick && e.props.onDayClick(t, r);
          }
        ),
        se(he(e), "handleDayMouseEnter", function(t) {
          e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
        }),
        se(he(e), "handleWeekClick", function(t, r, n) {
          "function" == typeof e.props.onWeekSelect &&
            e.props.onWeekSelect(t, r, n),
            e.props.shouldCloseOnSelect && e.props.setOpen(!1);
        }),
        se(he(e), "formatWeekNumber", function(t) {
          return e.props.formatWeekNumber
            ? e.props.formatWeekNumber(t)
            : Se(t, e.props.locale);
        }),
        se(he(e), "renderDays", function() {
          var r = Ee(e.props.day, e.props.locale),
            n = [],
            a = e.formatWeekNumber(r);
          if (e.props.showWeekNumber) {
            var o = e.props.onWeekSelect
              ? e.handleWeekClick.bind(he(e), r, a)
              : void 0;
            n.push(
              t.createElement(ft, {
                key: "W",
                weekNumber: a,
                onClick: o,
                ariaLabelPrefix: e.props.ariaLabelPrefix
              })
            );
          }
          return n.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function(n) {
              var a = p(r, n);
              return t.createElement(mt, {
                ariaLabelPrefixWhenEnabled: e.props.chooseDayAriaLabelPrefix,
                ariaLabelPrefixWhenDisabled: e.props.disabledDayAriaLabelPrefix,
                key: a.valueOf(),
                day: a,
                month: e.props.month,
                onClick: e.handleDayClick.bind(he(e), a),
                onMouseEnter: e.handleDayMouseEnter.bind(he(e), a),
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                excludeDates: e.props.excludeDates,
                includeDates: e.props.includeDates,
                inline: e.props.inline,
                highlightDates: e.props.highlightDates,
                selectingDate: e.props.selectingDate,
                filterDate: e.props.filterDate,
                preSelection: e.props.preSelection,
                selected: e.props.selected,
                selectsStart: e.props.selectsStart,
                selectsEnd: e.props.selectsEnd,
                startDate: e.props.startDate,
                endDate: e.props.endDate,
                dayClassName: e.props.dayClassName,
                renderDayContents: e.props.renderDayContents,
                disabledKeyboardNavigation: e.props.disabledKeyboardNavigation,
                handleOnKeyDown: e.props.handleOnKeyDown,
                isInputFocused: e.props.isInputFocused,
                containerRef: e.props.containerRef
              });
            })
          );
        }),
        e
      );
    }
    return (
      oe(
        n,
        [
          {
            key: "render",
            value: function() {
              return t.createElement(
                "div",
                { className: "react-datepicker__week" },
                this.renderDays()
              );
            }
          }
        ],
        [
          {
            key: "defaultProps",
            get: function() {
              return { shouldCloseOnSelect: !0 };
            }
          }
        ]
      ),
      n
    );
  })(),
  yt = (function(e) {
    le(a, t.Component);
    var n = fe(a);
    function a() {
      var e;
      ne(this, a);
      for (var o = arguments.length, s = new Array(o), i = 0; i < o; i++)
        s[i] = arguments[i];
      return (
        se(
          he((e = n.call.apply(n, [this].concat(s)))),
          "handleDayClick",
          function(t, r) {
            e.props.onDayClick &&
              e.props.onDayClick(t, r, e.props.orderInDisplay);
          }
        ),
        se(he(e), "handleDayMouseEnter", function(t) {
          e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
        }),
        se(he(e), "handleMouseLeave", function() {
          e.props.onMouseLeave && e.props.onMouseLeave();
        }),
        se(he(e), "isRangeStartMonth", function(t) {
          var r = e.props,
            n = r.day,
            a = r.startDate,
            o = r.endDate;
          return !(!a || !o) && Ye(N(n, t), a);
        }),
        se(he(e), "isRangeStartQuarter", function(t) {
          var r = e.props,
            n = r.day,
            a = r.startDate,
            o = r.endDate;
          return !(!a || !o) && Te(x(n, t), a);
        }),
        se(he(e), "isRangeEndMonth", function(t) {
          var r = e.props,
            n = r.day,
            a = r.startDate,
            o = r.endDate;
          return !(!a || !o) && Ye(N(n, t), o);
        }),
        se(he(e), "isRangeEndQuarter", function(t) {
          var r = e.props,
            n = r.day,
            a = r.startDate,
            o = r.endDate;
          return !(!a || !o) && Te(x(n, t), o);
        }),
        se(he(e), "isWeekInMonth", function(t) {
          var r = e.props.day,
            n = p(t, 6);
          return Ye(t, r) || Ye(n, r);
        }),
        se(he(e), "renderWeeks", function() {
          for (
            var r = [],
              n = e.props.fixedHeight,
              a = Ee(Ne(e.props.day), e.props.locale),
              o = 0,
              s = !1;
            r.push(
              t.createElement(vt, {
                ariaLabelPrefix: e.props.weekAriaLabelPrefix,
                chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
                disabledDayAriaLabelPrefix: e.props.disabledDayAriaLabelPrefix,
                key: o,
                day: a,
                month: b(e.props.day),
                onDayClick: e.handleDayClick,
                onDayMouseEnter: e.handleDayMouseEnter,
                onWeekSelect: e.props.onWeekSelect,
                formatWeekNumber: e.props.formatWeekNumber,
                locale: e.props.locale,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                excludeDates: e.props.excludeDates,
                includeDates: e.props.includeDates,
                inline: e.props.inline,
                highlightDates: e.props.highlightDates,
                selectingDate: e.props.selectingDate,
                filterDate: e.props.filterDate,
                preSelection: e.props.preSelection,
                selected: e.props.selected,
                selectsStart: e.props.selectsStart,
                selectsEnd: e.props.selectsEnd,
                showWeekNumber: e.props.showWeekNumbers,
                startDate: e.props.startDate,
                endDate: e.props.endDate,
                dayClassName: e.props.dayClassName,
                setOpen: e.props.setOpen,
                shouldCloseOnSelect: e.props.shouldCloseOnSelect,
                disabledKeyboardNavigation: e.props.disabledKeyboardNavigation,
                renderDayContents: e.props.renderDayContents,
                handleOnKeyDown: e.props.handleOnKeyDown,
                isInputFocused: e.props.isInputFocused,
                containerRef: e.props.containerRef
              })
            ),
              !s;

          ) {
            o++, (a = c(a, 1));
            var i = n && o >= 6,
              p = !n && !e.isWeekInMonth(a);
            if (i || p) {
              if (!e.props.peekNextMonth) break;
              s = !0;
            }
          }
          return r;
        }),
        se(he(e), "onMonthClick", function(t, r) {
          e.handleDayClick(Ne(N(e.props.day, r)), t);
        }),
        se(he(e), "onQuarterClick", function(t, r) {
          e.handleDayClick(xe(x(e.props.day, r)), t);
        }),
        se(he(e), "getMonthClassNames", function(t) {
          var n = e.props,
            a = n.day,
            o = n.startDate,
            s = n.endDate,
            i = n.selected,
            p = n.minDate,
            c = n.maxDate;
          return r(
            "react-datepicker__month-text",
            "react-datepicker__month-".concat(t),
            {
              "react-datepicker__month--disabled":
                (p || c) && He(N(a, t), e.props),
              "react-datepicker__month--selected": b(a) === t && _(a) === _(i),
              "react-datepicker__month--in-range": Qe(o, s, t, a),
              "react-datepicker__month--range-start": e.isRangeStartMonth(t),
              "react-datepicker__month--range-end": e.isRangeEndMonth(t)
            }
          );
        }),
        se(he(e), "getQuarterClassNames", function(t) {
          var n = e.props,
            a = n.day,
            o = n.startDate,
            s = n.endDate,
            i = n.selected,
            p = n.minDate,
            c = n.maxDate;
          return r(
            "react-datepicker__quarter-text",
            "react-datepicker__quarter-".concat(t),
            {
              "react-datepicker__quarter--disabled":
                (p || c) && Ve(x(a, t), e.props),
              "react-datepicker__quarter--selected":
                C(a) === t && _(a) === _(i),
              "react-datepicker__quarter--in-range": Ue(o, s, t, a),
              "react-datepicker__quarter--range-start": e.isRangeStartQuarter(
                t
              ),
              "react-datepicker__quarter--range-end": e.isRangeEndQuarter(t)
            }
          );
        }),
        se(he(e), "renderMonths", function() {
          var r = e.props,
            n = r.showFullMonthYearPicker,
            a = r.locale;
          return [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [9, 10, 11]
          ].map(function(r, o) {
            return t.createElement(
              "div",
              { className: "react-datepicker__month-wrapper", key: o },
              r.map(function(r, o) {
                return t.createElement(
                  "div",
                  {
                    key: o,
                    onClick: function(t) {
                      e.onMonthClick(t, r);
                    },
                    className: e.getMonthClassNames(r)
                  },
                  n ? We(r, a) : Ae(r, a)
                );
              })
            );
          });
        }),
        se(he(e), "renderQuarters", function() {
          return t.createElement(
            "div",
            { className: "react-datepicker__quarter-wrapper" },
            [1, 2, 3, 4].map(function(r, n) {
              return t.createElement(
                "div",
                {
                  key: n,
                  onClick: function(t) {
                    e.onQuarterClick(t, r);
                  },
                  className: e.getQuarterClassNames(r)
                },
                Be(r, e.props.locale)
              );
            })
          );
        }),
        se(he(e), "getClassNames", function() {
          var t = e.props,
            n = t.selectingDate,
            a = t.selectsStart,
            o = t.selectsEnd,
            s = t.showMonthYearPicker,
            i = t.showQuarterYearPicker;
          return r(
            "react-datepicker__month",
            { "react-datepicker__month--selecting-range": n && (a || o) },
            { "react-datepicker__monthPicker": s },
            { "react-datepicker__quarterPicker": i }
          );
        }),
        e
      );
    }
    return (
      oe(a, [
        {
          key: "render",
          value: function() {
            var e = this.props,
              r = e.showMonthYearPicker,
              n = e.showQuarterYearPicker,
              a = e.day,
              o = e.ariaLabelPrefix,
              s = void 0 === o ? "month " : o;
            return t.createElement(
              "div",
              {
                className: this.getClassNames(),
                onMouseLeave: this.handleMouseLeave,
                "aria-label": "".concat(s, " ").concat(Ce(a, "yyyy-MM"))
              },
              r
                ? this.renderMonths()
                : n
                ? this.renderQuarters()
                : this.renderWeeks()
            );
          }
        }
      ]),
      a
    );
  })(),
  Dt = (function(e) {
    le(n, t.Component);
    var r = fe(n);
    function n() {
      var e;
      ne(this, n);
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
        o[i] = arguments[i];
      return (
        se(he((e = r.call.apply(r, [this].concat(o)))), "state", {
          height: null
        }),
        se(he(e), "handleClick", function(t) {
          ((e.props.minTime || e.props.maxTime) && Ge(t, e.props)) ||
            (e.props.excludeTimes && ze(t, e.props.excludeTimes)) ||
            (e.props.includeTimes && !ze(t, e.props.includeTimes)) ||
            e.props.onChange(t);
        }),
        se(he(e), "liClasses", function(t, r, n) {
          var a = [
            "react-datepicker__time-list-item",
            e.props.timeClassName ? e.props.timeClassName(t, r, n) : void 0
          ];
          return (
            e.props.selected &&
              r === D(t) &&
              n === y(t) &&
              a.push("react-datepicker__time-list-item--selected"),
            (((e.props.minTime || e.props.maxTime) && Ge(t, e.props)) ||
              (e.props.excludeTimes && ze(t, e.props.excludeTimes)) ||
              (e.props.includeTimes && !ze(t, e.props.includeTimes))) &&
              a.push("react-datepicker__time-list-item--disabled"),
            e.props.injectTimes &&
              (60 * D(t) + y(t)) % e.props.intervals != 0 &&
              a.push("react-datepicker__time-list-item--injected"),
            a.join(" ")
          );
        }),
        se(he(e), "renderTimes", function() {
          for (
            var r = [],
              n = e.props.format ? e.props.format : "p",
              a = e.props.intervals,
              o = e.props.selected || e.props.openToDate || ke(),
              i = D(o),
              p = y(o),
              c = Pe(ke()),
              l = 1440 / a,
              d =
                e.props.injectTimes &&
                e.props.injectTimes.sort(function(e, t) {
                  return e - t;
                }),
              u = 0;
            u < l;
            u++
          ) {
            var h = s(c, u * a);
            if ((r.push(h), d)) {
              var m = at(c, h, u, a, d);
              r = r.concat(m);
            }
          }
          return r.map(function(r, a) {
            return t.createElement(
              "li",
              {
                key: a,
                onClick: e.handleClick.bind(he(e), r),
                className: e.liClasses(r, i, p),
                ref: function(t) {
                  i === D(r) && p >= y(r) && (e.centerLi = t);
                }
              },
              Ce(r, n, e.props.locale)
            );
          });
        }),
        e
      );
    }
    return (
      oe(
        n,
        [
          {
            key: "componentDidMount",
            value: function() {
              (this.list.scrollTop = n.calcCenterPosition(
                this.props.monthRef
                  ? this.props.monthRef.clientHeight - this.header.clientHeight
                  : this.list.clientHeight,
                this.centerLi
              )),
                this.props.monthRef &&
                  this.header &&
                  this.setState({
                    height:
                      this.props.monthRef.clientHeight -
                      this.header.clientHeight
                  });
            }
          },
          {
            key: "render",
            value: function() {
              var e = this,
                r = this.state.height;
              return t.createElement(
                "div",
                {
                  className: "react-datepicker__time-container ".concat(
                    this.props.todayButton
                      ? "react-datepicker__time-container--with-today-button"
                      : ""
                  )
                },
                t.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__header react-datepicker__header--time",
                    ref: function(t) {
                      e.header = t;
                    }
                  },
                  t.createElement(
                    "div",
                    { className: "react-datepicker-time__header" },
                    this.props.timeCaption
                  )
                ),
                t.createElement(
                  "div",
                  { className: "react-datepicker__time" },
                  t.createElement(
                    "div",
                    { className: "react-datepicker__time-box" },
                    t.createElement(
                      "ul",
                      {
                        className: "react-datepicker__time-list",
                        ref: function(t) {
                          e.list = t;
                        },
                        style: r ? { height: r } : {}
                      },
                      this.renderTimes()
                    )
                  )
                )
              );
            }
          }
        ],
        [
          {
            key: "defaultProps",
            get: function() {
              return {
                intervals: 30,
                onTimeChange: function() {},
                todayButton: null,
                timeCaption: "Time"
              };
            }
          }
        ]
      ),
      n
    );
  })();
se(Dt, "calcCenterPosition", function(e, t) {
  return t.offsetTop - (e / 2 - t.clientHeight / 2);
});
var wt = (function(e) {
    le(n, t.Component);
    var r = fe(n);
    function n(e) {
      var t;
      return (
        ne(this, n),
        se(he((t = r.call(this, e))), "handleYearClick", function(e, r) {
          t.props.onDayClick && t.props.onDayClick(e, r);
        }),
        se(he(t), "onYearClick", function(e, r) {
          var n;
          t.handleYearClick(((n = O(t.props.date, r)), B(n)), e);
        }),
        t
      );
    }
    return (
      oe(n, [
        {
          key: "render",
          value: function() {
            for (
              var e = this,
                r = [],
                n = this.props.date,
                a = function(n, a) {
                  r.push(
                    t.createElement(
                      "div",
                      {
                        onClick: function(t) {
                          e.onYearClick(t, n);
                        },
                        className: "react-datepicker__year-container-text",
                        key: n
                      },
                      n
                    )
                  );
                },
                o = _(n) - 11,
                s = 0;
              o <= _(n);
              o++, s++
            )
              a(o);
            return t.createElement(
              "div",
              { className: "react-datepicker__year-container" },
              r
            );
          }
        }
      ]),
      n
    );
  })(),
  kt = (function(e) {
    le(n, t.Component);
    var r = fe(n);
    function n(e) {
      var a;
      return (
        ne(this, n),
        se(he((a = r.call(this, e))), "onTimeChange", function(e) {
          a.setState({ time: e });
          var t = new Date();
          t.setHours(e.split(":")[0]),
            t.setMinutes(e.split(":")[1]),
            a.props.onChange(t);
        }),
        se(he(a), "renderTimeInput", function() {
          var e = a.state.time,
            r = a.props,
            n = r.timeString,
            o = r.customTimeInput;
          return o
            ? t.cloneElement(o, { value: e, onChange: a.onTimeChange })
            : t.createElement("input", {
                type: "time",
                className: "react-datepicker-time__input",
                placeholder: "Time",
                name: "time-input",
                required: !0,
                value: e,
                onChange: function(e) {
                  a.onTimeChange(e.target.value || n);
                }
              });
        }),
        (a.state = { time: a.props.timeString }),
        a
      );
    }
    return (
      oe(n, [
        {
          key: "render",
          value: function() {
            return t.createElement(
              "div",
              { className: "react-datepicker__input-time-container" },
              t.createElement(
                "div",
                { className: "react-datepicker-time__caption" },
                this.props.timeInputLabel
              ),
              t.createElement(
                "div",
                { className: "react-datepicker-time__input-container" },
                t.createElement(
                  "div",
                  { className: "react-datepicker-time__input" },
                  this.renderTimeInput()
                )
              )
            );
          }
        }
      ]),
      n
    );
  })();
function gt(e) {
  var r = e.className,
    n = e.children,
    a = e.showPopperArrow,
    o = e.arrowProps,
    s = void 0 === o ? {} : o;
  return t.createElement(
    "div",
    { className: r },
    a &&
      t.createElement(
        "div",
        ie({ className: "react-datepicker__triangle" }, s)
      ),
    n
  );
}
var bt = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select"
  ],
  Ct = (function(e) {
    le(a, t.Component);
    var n = fe(a);
    function a(e) {
      var o;
      return (
        ne(this, a),
        se(he((o = n.call(this, e))), "handleClickOutside", function(e) {
          o.props.onClickOutside(e);
        }),
        se(he(o), "setClickOutsideRef", function() {
          return o.containerRef.current;
        }),
        se(he(o), "handleDropdownFocus", function(e) {
          (function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (e.className || "").split(/\s+/);
            return bt.some(function(e) {
              return t.indexOf(e) >= 0;
            });
          })(e.target) && o.props.onDropdownFocus();
        }),
        se(he(o), "getDateInView", function() {
          var e = o.props,
            t = e.preSelection,
            r = e.selected,
            n = e.openToDate,
            a = tt(o.props),
            s = rt(o.props),
            i = ke(),
            p = n || r || t;
          return p || (a && z(i, a) ? a : s && $(i, s) ? s : i);
        }),
        se(he(o), "increaseMonth", function() {
          o.setState(
            function(e) {
              var t = e.date;
              return { date: l(t, 1) };
            },
            function() {
              return o.handleMonthChange(o.state.date);
            }
          );
        }),
        se(he(o), "decreaseMonth", function() {
          o.setState(
            function(e) {
              var t = e.date;
              return { date: m(t, 1) };
            },
            function() {
              return o.handleMonthChange(o.state.date);
            }
          );
        }),
        se(he(o), "handleDayClick", function(e, t, r) {
          return o.props.onSelect(e, t, r);
        }),
        se(he(o), "handleDayMouseEnter", function(e) {
          o.setState({ selectingDate: e }),
            o.props.onDayMouseEnter && o.props.onDayMouseEnter(e);
        }),
        se(he(o), "handleMonthMouseLeave", function() {
          o.setState({ selectingDate: null }),
            o.props.onMonthMouseLeave && o.props.onMonthMouseLeave();
        }),
        se(he(o), "handleYearChange", function(e) {
          o.props.onYearChange && o.props.onYearChange(e);
        }),
        se(he(o), "handleMonthChange", function(e) {
          o.props.onMonthChange && o.props.onMonthChange(e),
            o.props.adjustDateOnChange &&
              (o.props.onSelect && o.props.onSelect(e),
              o.props.setOpen && o.props.setOpen(!0)),
            o.props.setPreSelection && o.props.setPreSelection(e);
        }),
        se(he(o), "handleMonthYearChange", function(e) {
          o.handleYearChange(e), o.handleMonthChange(e);
        }),
        se(he(o), "changeYear", function(e) {
          o.setState(
            function(t) {
              var r = t.date;
              return { date: O(r, e) };
            },
            function() {
              return o.handleYearChange(o.state.date);
            }
          );
        }),
        se(he(o), "changeMonth", function(e) {
          o.setState(
            function(t) {
              var r = t.date;
              return { date: N(r, e) };
            },
            function() {
              return o.handleMonthChange(o.state.date);
            }
          );
        }),
        se(he(o), "changeMonthYear", function(e) {
          o.setState(
            function(t) {
              var r = t.date;
              return { date: O(N(r, b(e)), _(e)) };
            },
            function() {
              return o.handleMonthYearChange(o.state.date);
            }
          );
        }),
        se(he(o), "header", function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : o.state.date,
            n = Ee(e, o.props.locale),
            a = [];
          return (
            o.props.showWeekNumbers &&
              a.push(
                t.createElement(
                  "div",
                  { key: "W", className: "react-datepicker__day-name" },
                  o.props.weekLabel || "#"
                )
              ),
            a.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function(e) {
                var a = p(n, e),
                  s = o.formatWeekday(a, o.props.locale),
                  i = o.props.weekDayClassName
                    ? o.props.weekDayClassName(a)
                    : void 0;
                return t.createElement(
                  "div",
                  { key: e, className: r("react-datepicker__day-name", i) },
                  s
                );
              })
            )
          );
        }),
        se(he(o), "formatWeekday", function(e, t) {
          return o.props.formatWeekDay
            ? (function(e, t, r) {
                return t(Ce(e, "EEEE", r));
              })(e, o.props.formatWeekDay, t)
            : o.props.useWeekdaysShort
            ? (function(e, t) {
                return Ce(e, "EEE", t);
              })(e, t)
            : (function(e, t) {
                return Ce(e, "EEEEEE", t);
              })(e, t);
        }),
        se(he(o), "decreaseYear", function() {
          o.setState(
            function(e) {
              var t = e.date;
              return { date: f(t, o.props.showYearPicker ? 11 : 1) };
            },
            function() {
              return o.handleYearChange(o.state.date);
            }
          );
        }),
        se(he(o), "renderPreviousButton", function() {
          if (!o.props.renderCustomHeader) {
            var e = o.props.showMonthYearPicker
              ? Ze(o.state.date, o.props)
              : Je(o.state.date, o.props);
            if (
              (o.props.forceShowMonthNavigation ||
                o.props.showDisabledMonthNavigation ||
                !e) &&
              !o.props.showTimeSelectOnly
            ) {
              var r = [
                  "react-datepicker__navigation",
                  "react-datepicker__navigation--previous"
                ],
                n = o.decreaseMonth;
              (o.props.showMonthYearPicker ||
                o.props.showQuarterYearPicker ||
                o.props.showYearPicker) &&
                (n = o.decreaseYear),
                e &&
                  o.props.showDisabledMonthNavigation &&
                  (r.push("react-datepicker__navigation--previous--disabled"),
                  (n = null));
              var a =
                  o.props.showMonthYearPicker || o.props.showQuarterYearPicker,
                s = o.props,
                i = s.previousMonthAriaLabel,
                p = void 0 === i ? "Previous Month" : i,
                c = s.previousYearAriaLabel,
                l = void 0 === c ? "Previous Year" : c;
              return t.createElement(
                "button",
                {
                  type: "button",
                  className: r.join(" "),
                  onClick: n,
                  "aria-label": a ? l : p
                },
                a
                  ? o.props.previousYearButtonLabel
                  : o.props.previousMonthButtonLabel
              );
            }
          }
        }),
        se(he(o), "increaseYear", function() {
          o.setState(
            function(e) {
              var t = e.date;
              return { date: d(t, o.props.showYearPicker ? 11 : 1) };
            },
            function() {
              return o.handleYearChange(o.state.date);
            }
          );
        }),
        se(he(o), "renderNextButton", function() {
          if (!o.props.renderCustomHeader) {
            var e = o.props.showMonthYearPicker
              ? et(o.state.date, o.props)
              : Xe(o.state.date, o.props);
            if (
              (o.props.forceShowMonthNavigation ||
                o.props.showDisabledMonthNavigation ||
                !e) &&
              !o.props.showTimeSelectOnly
            ) {
              var r = [
                "react-datepicker__navigation",
                "react-datepicker__navigation--next"
              ];
              o.props.showTimeSelect &&
                r.push("react-datepicker__navigation--next--with-time"),
                o.props.todayButton &&
                  r.push(
                    "react-datepicker__navigation--next--with-today-button"
                  );
              var n = o.increaseMonth;
              (o.props.showMonthYearPicker ||
                o.props.showQuarterYearPicker ||
                o.props.showYearPicker) &&
                (n = o.increaseYear),
                e &&
                  o.props.showDisabledMonthNavigation &&
                  (r.push("react-datepicker__navigation--next--disabled"),
                  (n = null));
              var a =
                  o.props.showMonthYearPicker || o.props.showQuarterYearPicker,
                s = o.props,
                i = s.nextMonthAriaLabel,
                p = void 0 === i ? "Next Month" : i,
                c = s.nextYearAriaLabel,
                l = void 0 === c ? "Next Year" : c;
              return t.createElement(
                "button",
                {
                  type: "button",
                  className: r.join(" "),
                  onClick: n,
                  "aria-label": a ? l : p
                },
                a ? o.props.nextYearButtonLabel : o.props.nextMonthButtonLabel
              );
            }
          }
        }),
        se(he(o), "renderCurrentMonth", function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : o.state.date,
            r = ["react-datepicker__current-month"];
          return (
            o.props.showYearDropdown &&
              r.push("react-datepicker__current-month--hasYearDropdown"),
            o.props.showMonthDropdown &&
              r.push("react-datepicker__current-month--hasMonthDropdown"),
            o.props.showMonthYearDropdown &&
              r.push("react-datepicker__current-month--hasMonthYearDropdown"),
            t.createElement(
              "div",
              { className: r.join(" ") },
              Ce(e, o.props.dateFormat, o.props.locale)
            )
          );
        }),
        se(he(o), "renderYearDropdown", function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (o.props.showYearDropdown && !e)
            return t.createElement(pt, {
              adjustDateOnChange: o.props.adjustDateOnChange,
              date: o.state.date,
              onSelect: o.props.onSelect,
              setOpen: o.props.setOpen,
              dropdownMode: o.props.dropdownMode,
              onChange: o.changeYear,
              minDate: o.props.minDate,
              maxDate: o.props.maxDate,
              year: _(o.state.date),
              scrollableYearDropdown: o.props.scrollableYearDropdown,
              yearDropdownItemNumber: o.props.yearDropdownItemNumber
            });
        }),
        se(he(o), "renderMonthDropdown", function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (o.props.showMonthDropdown && !e)
            return t.createElement(lt, {
              dropdownMode: o.props.dropdownMode,
              locale: o.props.locale,
              onChange: o.changeMonth,
              month: b(o.state.date),
              useShortMonthInDropdown: o.props.useShortMonthInDropdown
            });
        }),
        se(he(o), "renderMonthYearDropdown", function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (o.props.showMonthYearDropdown && !e)
            return t.createElement(ht, {
              dropdownMode: o.props.dropdownMode,
              locale: o.props.locale,
              dateFormat: o.props.dateFormat,
              onChange: o.changeMonthYear,
              minDate: o.props.minDate,
              maxDate: o.props.maxDate,
              date: o.state.date,
              scrollableMonthYearDropdown: o.props.scrollableMonthYearDropdown
            });
        }),
        se(he(o), "renderTodayButton", function() {
          if (o.props.todayButton && !o.props.showTimeSelectOnly)
            return t.createElement(
              "div",
              {
                className: "react-datepicker__today-button",
                onClick: function(e) {
                  return o.props.onSelect(q(ke()), e);
                }
              },
              o.props.todayButton
            );
        }),
        se(he(o), "renderDefaultHeader", function(e) {
          var r = e.monthDate,
            n = e.i;
          return t.createElement(
            "div",
            { className: "react-datepicker__header" },
            o.renderCurrentMonth(r),
            t.createElement(
              "div",
              {
                className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                  o.props.dropdownMode
                ),
                onFocus: o.handleDropdownFocus
              },
              o.renderMonthDropdown(0 !== n),
              o.renderMonthYearDropdown(0 !== n),
              o.renderYearDropdown(0 !== n)
            ),
            t.createElement(
              "div",
              { className: "react-datepicker__day-names" },
              o.header(r)
            )
          );
        }),
        se(he(o), "renderCustomHeader", function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = e.monthDate,
            n = e.i;
          if (0 !== n && void 0 !== n) return null;
          var a = Je(o.state.date, o.props),
            s = Xe(o.state.date, o.props),
            i = Ze(o.state.date, o.props),
            p = et(o.state.date, o.props),
            c =
              !o.props.showMonthYearPicker &&
              !o.props.showQuarterYearPicker &&
              !o.props.showYearPicker;
          return t.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--custom",
              onFocus: o.props.onDropdownFocus
            },
            o.props.renderCustomHeader(
              ce(
                ce({}, o.state),
                {},
                {
                  changeMonth: o.changeMonth,
                  changeYear: o.changeYear,
                  decreaseMonth: o.decreaseMonth,
                  increaseMonth: o.increaseMonth,
                  decreaseYear: o.decreaseYear,
                  increaseYear: o.increaseYear,
                  prevMonthButtonDisabled: a,
                  nextMonthButtonDisabled: s,
                  prevYearButtonDisabled: i,
                  nextYearButtonDisabled: p
                }
              )
            ),
            c &&
              t.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                o.header(r)
              )
          );
        }),
        se(he(o), "renderYearHeader", function() {
          return t.createElement(
            "div",
            {
              className: "react-datepicker__header react-datepicker-year-header"
            },
            o.props.showYearPicker
              ? "".concat(_(o.state.date) - 11, " - ").concat(_(o.state.date))
              : _(o.state.date)
          );
        }),
        se(he(o), "renderHeader", function(e) {
          switch (!0) {
            case void 0 !== o.props.renderCustomHeader:
              return o.renderCustomHeader(e);
            case o.props.showMonthYearPicker ||
              o.props.showQuarterYearPicker ||
              o.props.showYearPicker:
              return o.renderYearHeader(e);
            default:
              return o.renderDefaultHeader(e);
          }
        }),
        se(he(o), "renderMonths", function() {
          if (!o.props.showTimeSelectOnly && !o.props.showYearPicker) {
            for (
              var e = [],
                r = o.props.showPreviousMonths ? o.props.monthsShown - 1 : 0,
                n = m(o.state.date, r),
                a = 0;
              a < o.props.monthsShown;
              ++a
            ) {
              var s = a - o.props.monthSelectedIn,
                i = l(n, s),
                p = "month-".concat(a);
              e.push(
                t.createElement(
                  "div",
                  {
                    key: p,
                    ref: function(e) {
                      o.monthContainer = e;
                    },
                    className: "react-datepicker__month-container"
                  },
                  o.renderHeader({ monthDate: i, i: a }),
                  t.createElement(yt, {
                    chooseDayAriaLabelPrefix: o.props.chooseDayAriaLabelPrefix,
                    disabledDayAriaLabelPrefix:
                      o.props.disabledDayAriaLabelPrefix,
                    weekAriaLabelPrefix: o.props.weekAriaLabelPrefix,
                    onChange: o.changeMonthYear,
                    day: i,
                    dayClassName: o.props.dayClassName,
                    monthClassName: o.props.monthClassName,
                    onDayClick: o.handleDayClick,
                    handleOnKeyDown: o.props.handleOnKeyDown,
                    onDayMouseEnter: o.handleDayMouseEnter,
                    onMouseLeave: o.handleMonthMouseLeave,
                    onWeekSelect: o.props.onWeekSelect,
                    orderInDisplay: a,
                    formatWeekNumber: o.props.formatWeekNumber,
                    locale: o.props.locale,
                    minDate: o.props.minDate,
                    maxDate: o.props.maxDate,
                    excludeDates: o.props.excludeDates,
                    highlightDates: o.props.highlightDates,
                    selectingDate: o.state.selectingDate,
                    includeDates: o.props.includeDates,
                    inline: o.props.inline,
                    fixedHeight: o.props.fixedHeight,
                    filterDate: o.props.filterDate,
                    preSelection: o.props.preSelection,
                    selected: o.props.selected,
                    selectsStart: o.props.selectsStart,
                    selectsEnd: o.props.selectsEnd,
                    showWeekNumbers: o.props.showWeekNumbers,
                    startDate: o.props.startDate,
                    endDate: o.props.endDate,
                    peekNextMonth: o.props.peekNextMonth,
                    setOpen: o.props.setOpen,
                    shouldCloseOnSelect: o.props.shouldCloseOnSelect,
                    renderDayContents: o.props.renderDayContents,
                    disabledKeyboardNavigation:
                      o.props.disabledKeyboardNavigation,
                    showMonthYearPicker: o.props.showMonthYearPicker,
                    showFullMonthYearPicker: o.props.showFullMonthYearPicker,
                    showYearPicker: o.props.showYearPicker,
                    showQuarterYearPicker: o.props.showQuarterYearPicker,
                    isInputFocused: o.props.isInputFocused,
                    containerRef: o.containerRef
                  })
                )
              );
            }
            return e;
          }
        }),
        se(he(o), "renderYears", function() {
          if (!o.props.showTimeSelectOnly)
            return o.props.showYearPicker
              ? t.createElement(
                  "div",
                  { className: "react-datepicker__year" },
                  o.renderHeader(),
                  t.createElement(wt, {
                    onDayClick: o.handleDayClick,
                    date: o.state.date
                  })
                )
              : void 0;
        }),
        se(he(o), "renderTimeSection", function() {
          if (
            o.props.showTimeSelect &&
            (o.state.monthContainer || o.props.showTimeSelectOnly)
          )
            return t.createElement(Dt, {
              selected: o.props.selected,
              openToDate: o.props.openToDate,
              onChange: o.props.onTimeChange,
              timeClassName: o.props.timeClassName,
              format: o.props.timeFormat,
              includeTimes: o.props.includeTimes,
              intervals: o.props.timeIntervals,
              minTime: o.props.minTime,
              maxTime: o.props.maxTime,
              excludeTimes: o.props.excludeTimes,
              timeCaption: o.props.timeCaption,
              todayButton: o.props.todayButton,
              showMonthDropdown: o.props.showMonthDropdown,
              showMonthYearDropdown: o.props.showMonthYearDropdown,
              showYearDropdown: o.props.showYearDropdown,
              withPortal: o.props.withPortal,
              monthRef: o.state.monthContainer,
              injectTimes: o.props.injectTimes,
              locale: o.props.locale
            });
        }),
        se(he(o), "renderInputTimeSection", function() {
          var e = new Date(o.props.selected),
            r = "".concat(ot(e.getHours()), ":").concat(ot(e.getMinutes()));
          if (o.props.showTimeInput)
            return t.createElement(kt, {
              timeString: r,
              timeInputLabel: o.props.timeInputLabel,
              onChange: o.props.onTimeChange,
              customTimeInput: o.props.customTimeInput
            });
        }),
        (o.containerRef = t.createRef()),
        (o.state = {
          date: o.getDateInView(),
          selectingDate: null,
          monthContainer: null
        }),
        o
      );
    }
    return (
      oe(a, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              onDropdownFocus: function() {},
              monthsShown: 1,
              monthSelectedIn: 0,
              forceShowMonthNavigation: !1,
              timeCaption: "Time",
              previousYearButtonLabel: "Previous Year",
              nextYearButtonLabel: "Next Year",
              previousMonthButtonLabel: "Previous Month",
              nextMonthButtonLabel: "Next Month",
              customTimeInput: null
            };
          }
        }
      ]),
      oe(a, [
        {
          key: "componentDidMount",
          value: function() {
            var e = this;
            this.props.showTimeSelect &&
              (this.assignMonthContainer = void e.setState({
                monthContainer: e.monthContainer
              }));
          }
        },
        {
          key: "componentDidUpdate",
          value: function(e) {
            this.props.preSelection &&
            !Le(this.props.preSelection, e.preSelection)
              ? this.setState({ date: this.props.preSelection })
              : this.props.openToDate &&
                !Le(this.props.openToDate, e.openToDate) &&
                this.setState({ date: this.props.openToDate });
          }
        },
        {
          key: "render",
          value: function() {
            var e = this.props.container || gt;
            return t.createElement(
              "div",
              { ref: this.containerRef },
              t.createElement(
                e,
                {
                  className: r("react-datepicker", this.props.className, {
                    "react-datepicker--time-only": this.props.showTimeSelectOnly
                  }),
                  showPopperArrow: this.props.showPopperArrow
                },
                this.renderPreviousButton(),
                this.renderNextButton(),
                this.renderMonths(),
                this.renderYears(),
                this.renderTodayButton(),
                this.renderTimeSection(),
                this.renderInputTimeSection(),
                this.props.children
              )
            );
          }
        }
      ]),
      a
    );
  })(),
  _t = function(e) {
    return !e.disabled && -1 !== e.tabIndex;
  },
  St = (function(e) {
    le(n, t.Component);
    var r = fe(n);
    function n(e) {
      var a;
      return (
        ne(this, n),
        se(he((a = r.call(this, e))), "getTabChildren", function() {
          return Array.prototype.slice
            .call(
              a.tabLoopRef.current.querySelectorAll(
                "[tabindex], a, button, input, select, textarea"
              ),
              1,
              -1
            )
            .filter(_t);
        }),
        se(he(a), "handleFocusStart", function(e) {
          var t = a.getTabChildren();
          t && t.length > 1 && t[t.length - 1].focus();
        }),
        se(he(a), "handleFocusEnd", function(e) {
          var t = a.getTabChildren();
          t && t.length > 1 && t[0].focus();
        }),
        (a.tabLoopRef = t.createRef()),
        a
      );
    }
    return (
      oe(n, null, [
        {
          key: "defaultProps",
          get: function() {
            return { enableTabLoop: !0 };
          }
        }
      ]),
      oe(n, [
        {
          key: "render",
          value: function() {
            return this.props.enableTabLoop
              ? t.createElement(
                  "div",
                  {
                    className: "react-datepicker__tab-loop",
                    ref: this.tabLoopRef
                  },
                  t.createElement("div", {
                    className: "react-datepicker__tab-loop__start",
                    tabIndex: "0",
                    onFocus: this.handleFocusStart
                  }),
                  this.props.children,
                  t.createElement("div", {
                    className: "react-datepicker__tab-loop__end",
                    tabIndex: "0",
                    onFocus: this.handleFocusEnd
                  })
                )
              : this.props.children;
          }
        }
      ]),
      n
    );
  })(),
  Mt = (function(e) {
    le(a, t.Component);
    var n = fe(a);
    function a() {
      return ne(this, a), n.apply(this, arguments);
    }
    return (
      oe(
        a,
        [
          {
            key: "render",
            value: function() {
              var e,
                n = this.props,
                a = n.className,
                o = n.wrapperClassName,
                s = n.hidePopper,
                i = n.popperComponent,
                p = n.popperModifiers,
                c = n.popperPlacement,
                l = n.popperProps,
                d = n.targetComponent,
                u = n.enableTabLoop,
                h = n.popperOnKeyDown;
              if (!s) {
                var m = r("react-datepicker-popper", a);
                e = t.createElement(
                  te.Popper,
                  ie({ modifiers: p, placement: c }, l),
                  function(e) {
                    var r = e.ref,
                      n = e.style,
                      a = e.placement,
                      o = e.arrowProps;
                    return t.createElement(
                      St,
                      { enableTabLoop: u },
                      t.createElement(
                        "div",
                        ie(
                          { ref: r, style: n },
                          { className: m, "data-placement": a, onKeyDown: h }
                        ),
                        t.cloneElement(i, { arrowProps: o })
                      )
                    );
                  }
                );
              }
              this.props.popperContainer &&
                (e = t.createElement(this.props.popperContainer, {}, e));
              var f = r("react-datepicker-wrapper", o);
              return t.createElement(
                te.Manager,
                { className: "react-datepicker-manager" },
                t.createElement(te.Reference, null, function(e) {
                  var r = e.ref;
                  return t.createElement("div", { ref: r, className: f }, d);
                }),
                e
              );
            }
          }
        ],
        [
          {
            key: "defaultProps",
            get: function() {
              return {
                hidePopper: !0,
                popperModifiers: {
                  preventOverflow: {
                    enabled: !0,
                    escapeWithReference: !0,
                    boundariesElement: "viewport"
                  }
                },
                popperProps: {},
                popperPlacement: "bottom-start"
              };
            }
          }
        ]
      ),
      a
    );
  })(),
  Pt = ee(Ct);
var Et = (function(e) {
    le(o, t.Component);
    var a = fe(o);
    function o(e) {
      var s;
      return (
        ne(this, o),
        se(he((s = a.call(this, e))), "getPreSelection", function() {
          return s.props.openToDate
            ? s.props.openToDate
            : s.props.selectsEnd && s.props.startDate
            ? s.props.startDate
            : s.props.selectsStart && s.props.endDate
            ? s.props.endDate
            : ke();
        }),
        se(he(s), "calcInitialState", function() {
          var e = s.getPreSelection(),
            t = tt(s.props),
            r = rt(s.props),
            n = t && z(e, t) ? t : r && $(e, r) ? r : e;
          return {
            open: s.props.startOpen || !1,
            preventFocus: !1,
            preSelection: s.props.selected ? s.props.selected : n,
            highlightDates: nt(s.props.highlightDates),
            focused: !1
          };
        }),
        se(he(s), "clearPreventFocusTimeout", function() {
          s.preventFocusTimeout && clearTimeout(s.preventFocusTimeout);
        }),
        se(he(s), "setFocus", function() {
          s.input && s.input.focus && s.input.focus();
        }),
        se(he(s), "setBlur", function() {
          s.input && s.input.blur && s.input.blur(), s.cancelFocusInput();
        }),
        se(he(s), "setOpen", function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          s.setState(
            {
              open: e,
              preSelection:
                e && s.state.open
                  ? s.state.preSelection
                  : s.calcInitialState().preSelection,
              lastPreSelectChange: xt
            },
            function() {
              e ||
                s.setState(
                  function(e) {
                    return { focused: !!t && e.focused };
                  },
                  function() {
                    !t && s.setBlur(), s.setState({ inputValue: null });
                  }
                );
            }
          );
        }),
        se(he(s), "inputOk", function() {
          return n(s.state.preSelection);
        }),
        se(he(s), "isCalendarOpen", function() {
          return void 0 === s.props.open
            ? s.state.open && !s.props.disabled && !s.props.readOnly
            : s.props.open;
        }),
        se(he(s), "handleFocus", function(e) {
          s.state.preventFocus ||
            (s.props.onFocus(e),
            s.props.preventOpenOnFocus || s.props.readOnly || s.setOpen(!0)),
            s.setState({ focused: !0 });
        }),
        se(he(s), "cancelFocusInput", function() {
          clearTimeout(s.inputFocusTimeout), (s.inputFocusTimeout = null);
        }),
        se(he(s), "deferFocusInput", function() {
          s.cancelFocusInput(),
            (s.inputFocusTimeout = setTimeout(function() {
              return s.setFocus();
            }, 1));
        }),
        se(he(s), "handleDropdownFocus", function() {
          s.cancelFocusInput();
        }),
        se(he(s), "handleBlur", function(e) {
          (!s.state.open || s.props.withPortal || s.props.showTimeInput) &&
            s.props.onBlur(e),
            s.setState({ focused: !1 });
        }),
        se(he(s), "handleCalendarClickOutside", function(e) {
          s.props.inline || s.setOpen(!1),
            s.props.onClickOutside(e),
            s.props.withPortal && e.preventDefault();
        }),
        se(he(s), "handleChange", function() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          var n = t[0];
          if (
            !s.props.onChangeRaw ||
            (s.props.onChangeRaw.apply(he(s), t),
            "function" == typeof n.isDefaultPrevented &&
              !n.isDefaultPrevented())
          ) {
            s.setState({ inputValue: n.target.value, lastPreSelectChange: Nt });
            var a = ge(
              n.target.value,
              s.props.dateFormat,
              s.props.locale,
              s.props.strictParsing
            );
            (!a && n.target.value) || s.setSelected(a, n, !0);
          }
        }),
        se(he(s), "handleSelect", function(e, t, r) {
          s.setState({ preventFocus: !0 }, function() {
            return (
              (s.preventFocusTimeout = setTimeout(function() {
                return s.setState({ preventFocus: !1 });
              }, 50)),
              s.preventFocusTimeout
            );
          }),
            s.setSelected(e, t, !1, r),
            !s.props.shouldCloseOnSelect || s.props.showTimeSelect
              ? s.setPreSelection(e)
              : s.props.inline || s.setOpen(!1);
        }),
        se(he(s), "setSelected", function(e, t, r, n) {
          var a = e;
          (null !== a && je(a, s.props)) ||
            ((Ie(s.props.selected, a) && !s.props.allowSameDay) ||
              (null !== a &&
                (!s.props.selected ||
                  (r &&
                    (s.props.showTimeSelect ||
                      s.props.showTimeSelectOnly ||
                      s.props.showTimeInput)) ||
                  (a = _e(a, {
                    hour: D(s.props.selected),
                    minute: y(s.props.selected),
                    second: v(s.props.selected)
                  })),
                s.props.inline || s.setState({ preSelection: a }),
                s.props.inline &&
                  s.props.monthsShown > 1 &&
                  !s.props.inlineFocusSelectedMonth &&
                  s.setState({ monthSelectedIn: n })),
              s.props.onChange(a, t)),
            s.props.onSelect(a, t),
            r || s.setState({ inputValue: null }));
        }),
        se(he(s), "setPreSelection", function(e) {
          var t = void 0 !== s.props.minDate,
            r = void 0 !== s.props.maxDate,
            n = !0;
          e &&
            (t && r
              ? (n = Fe(e, s.props.minDate, s.props.maxDate))
              : t
              ? (n = $(e, s.props.minDate))
              : r && (n = z(e, s.props.maxDate))),
            n && s.setState({ preSelection: e });
        }),
        se(he(s), "handleTimeChange", function(e) {
          var t = _e(
            s.props.selected ? s.props.selected : s.getPreSelection(),
            { hour: D(e), minute: y(e) }
          );
          s.setState({ preSelection: t }),
            s.props.onChange(t),
            s.props.shouldCloseOnSelect && s.setOpen(!1),
            s.props.showTimeInput && s.setOpen(!0),
            s.setState({ inputValue: null });
        }),
        se(he(s), "onInputClick", function() {
          s.props.disabled || s.props.readOnly || s.setOpen(!0),
            s.props.onInputClick();
        }),
        se(he(s), "onInputKeyDown", function(e) {
          s.props.onKeyDown(e);
          var t = e.key;
          if (s.state.open || s.props.inline || s.props.preventOpenOnFocus) {
            if (s.state.open) {
              if ("ArrowDown" === t || "ArrowUp" === t) {
                e.preventDefault();
                var r =
                  s.calendar.componentNode &&
                  s.calendar.componentNode.querySelector(
                    '.react-datepicker__day[tabindex="0"]'
                  );
                return void (r && r.focus());
              }
              var n = ke(s.state.preSelection);
              "Enter" === t
                ? (e.preventDefault(),
                  s.inputOk() && s.state.lastPreSelectChange === xt
                    ? (s.handleSelect(n, e),
                      !s.props.shouldCloseOnSelect && s.setPreSelection(n))
                    : s.setOpen(!1))
                : "Escape" === t && (e.preventDefault(), s.setOpen(!1)),
                s.inputOk() ||
                  s.props.onInputError({
                    code: 1,
                    msg: "Date input not valid."
                  });
            }
          } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || s.onInputClick();
        }),
        se(he(s), "onDayKeyDown", function(e) {
          s.props.onKeyDown(e);
          var t = e.key,
            r = ke(s.state.preSelection);
          if ("Enter" === t)
            e.preventDefault(),
              s.handleSelect(r, e),
              !s.props.shouldCloseOnSelect && s.setPreSelection(r);
          else if ("Escape" === t)
            e.preventDefault(),
              s.setOpen(!1),
              s.inputOk() ||
                s.props.onInputError({ code: 1, msg: "Date input not valid." });
          else if (!s.props.disabledKeyboardNavigation) {
            var n;
            switch (t) {
              case "ArrowLeft":
                n = u(r, 1);
                break;
              case "ArrowRight":
                n = p(r, 1);
                break;
              case "ArrowUp":
                n = h(r, 1);
                break;
              case "ArrowDown":
                n = c(r, 1);
                break;
              case "PageUp":
                n = m(r, 1);
                break;
              case "PageDown":
                n = l(r, 1);
                break;
              case "Home":
                n = f(r, 1);
                break;
              case "End":
                n = d(r, 1);
            }
            if (!n)
              return void (
                s.props.onInputError &&
                s.props.onInputError({ code: 1, msg: "Date input not valid." })
              );
            e.preventDefault(),
              s.setState({ lastPreSelectChange: xt }),
              s.props.adjustDateOnChange && s.setSelected(n),
              s.setPreSelection(n);
          }
        }),
        se(he(s), "onPopperKeyDown", function(e) {
          "Escape" === e.key &&
            (e.preventDefault(),
            s.setState({ preventFocus: !0 }, function() {
              s.setOpen(!1), setTimeout(s.setFocus);
            }));
        }),
        se(he(s), "onClearClick", function(e) {
          e && e.preventDefault && e.preventDefault(),
            s.props.onChange(null, e),
            s.setState({ inputValue: null });
        }),
        se(he(s), "clear", function() {
          s.onClearClick();
        }),
        se(he(s), "renderCalendar", function() {
          return s.props.inline || s.isCalendarOpen()
            ? t.createElement(
                Pt,
                {
                  ref: function(e) {
                    s.calendar = e;
                  },
                  locale: s.props.locale,
                  chooseDayAriaLabelPrefix: s.props.chooseDayAriaLabelPrefix,
                  disabledDayAriaLabelPrefix:
                    s.props.disabledDayAriaLabelPrefix,
                  weekAriaLabelPrefix: s.props.weekAriaLabelPrefix,
                  adjustDateOnChange: s.props.adjustDateOnChange,
                  setOpen: s.setOpen,
                  shouldCloseOnSelect: s.props.shouldCloseOnSelect,
                  dateFormat: s.props.dateFormatCalendar,
                  useWeekdaysShort: s.props.useWeekdaysShort,
                  formatWeekDay: s.props.formatWeekDay,
                  dropdownMode: s.props.dropdownMode,
                  selected: s.props.selected,
                  preSelection: s.state.preSelection,
                  onSelect: s.handleSelect,
                  onWeekSelect: s.props.onWeekSelect,
                  openToDate: s.props.openToDate,
                  minDate: s.props.minDate,
                  maxDate: s.props.maxDate,
                  selectsStart: s.props.selectsStart,
                  selectsEnd: s.props.selectsEnd,
                  startDate: s.props.startDate,
                  endDate: s.props.endDate,
                  excludeDates: s.props.excludeDates,
                  filterDate: s.props.filterDate,
                  onClickOutside: s.handleCalendarClickOutside,
                  formatWeekNumber: s.props.formatWeekNumber,
                  highlightDates: s.state.highlightDates,
                  includeDates: s.props.includeDates,
                  includeTimes: s.props.includeTimes,
                  injectTimes: s.props.injectTimes,
                  inline: s.props.inline,
                  peekNextMonth: s.props.peekNextMonth,
                  showMonthDropdown: s.props.showMonthDropdown,
                  showPreviousMonths: s.props.showPreviousMonths,
                  useShortMonthInDropdown: s.props.useShortMonthInDropdown,
                  showMonthYearDropdown: s.props.showMonthYearDropdown,
                  showWeekNumbers: s.props.showWeekNumbers,
                  showYearDropdown: s.props.showYearDropdown,
                  withPortal: s.props.withPortal,
                  forceShowMonthNavigation: s.props.forceShowMonthNavigation,
                  showDisabledMonthNavigation:
                    s.props.showDisabledMonthNavigation,
                  scrollableYearDropdown: s.props.scrollableYearDropdown,
                  scrollableMonthYearDropdown:
                    s.props.scrollableMonthYearDropdown,
                  todayButton: s.props.todayButton,
                  weekLabel: s.props.weekLabel,
                  outsideClickIgnoreClass:
                    "react-datepicker-ignore-onclickoutside",
                  fixedHeight: s.props.fixedHeight,
                  monthsShown: s.props.monthsShown,
                  monthSelectedIn: s.state.monthSelectedIn,
                  onDropdownFocus: s.handleDropdownFocus,
                  onMonthChange: s.props.onMonthChange,
                  onYearChange: s.props.onYearChange,
                  dayClassName: s.props.dayClassName,
                  weekDayClassName: s.props.weekDayClassName,
                  monthClassName: s.props.monthClassName,
                  timeClassName: s.props.timeClassName,
                  showTimeSelect: s.props.showTimeSelect,
                  showTimeSelectOnly: s.props.showTimeSelectOnly,
                  onTimeChange: s.handleTimeChange,
                  timeFormat: s.props.timeFormat,
                  timeIntervals: s.props.timeIntervals,
                  minTime: s.props.minTime,
                  maxTime: s.props.maxTime,
                  excludeTimes: s.props.excludeTimes,
                  timeCaption: s.props.timeCaption,
                  className: s.props.calendarClassName,
                  container: s.props.calendarContainer,
                  yearDropdownItemNumber: s.props.yearDropdownItemNumber,
                  previousMonthButtonLabel: s.props.previousMonthButtonLabel,
                  nextMonthButtonLabel: s.props.nextMonthButtonLabel,
                  previousYearButtonLabel: s.props.previousYearButtonLabel,
                  nextYearButtonLabel: s.props.nextYearButtonLabel,
                  timeInputLabel: s.props.timeInputLabel,
                  disabledKeyboardNavigation:
                    s.props.disabledKeyboardNavigation,
                  renderCustomHeader: s.props.renderCustomHeader,
                  popperProps: s.props.popperProps,
                  renderDayContents: s.props.renderDayContents,
                  onDayMouseEnter: s.props.onDayMouseEnter,
                  onMonthMouseLeave: s.props.onMonthMouseLeave,
                  showTimeInput: s.props.showTimeInput,
                  showMonthYearPicker: s.props.showMonthYearPicker,
                  showFullMonthYearPicker: s.props.showFullMonthYearPicker,
                  showYearPicker: s.props.showYearPicker,
                  showQuarterYearPicker: s.props.showQuarterYearPicker,
                  showPopperArrow: s.props.showPopperArrow,
                  excludeScrollbar: s.props.excludeScrollbar,
                  handleOnKeyDown: s.onDayKeyDown,
                  isInputFocused: s.state.focused,
                  customTimeInput: s.props.customTimeInput,
                  setPreSelection: s.setPreSelection
                },
                s.props.children
              )
            : null;
        }),
        se(he(s), "renderDateInput", function() {
          var e,
            n,
            a,
            o,
            i,
            p = r(
              s.props.className,
              se({}, "react-datepicker-ignore-onclickoutside", s.state.open)
            ),
            c =
              s.props.customInput || t.createElement("input", { type: "text" }),
            l = s.props.customInputRef || "ref",
            d =
              "string" == typeof s.props.value
                ? s.props.value
                : "string" == typeof s.state.inputValue
                ? s.state.inputValue
                : ((n = s.props.selected),
                  (a = s.props),
                  (o = a.dateFormat),
                  (i = a.locale),
                  (n && Ce(n, Array.isArray(o) ? o[0] : o, i)) || "");
          return t.cloneElement(
            c,
            (se((e = {}), l, function(e) {
              s.input = e;
            }),
            se(e, "value", d),
            se(e, "onBlur", s.handleBlur),
            se(e, "onChange", s.handleChange),
            se(e, "onClick", s.onInputClick),
            se(e, "onFocus", s.handleFocus),
            se(e, "onKeyDown", s.onInputKeyDown),
            se(e, "id", s.props.id),
            se(e, "name", s.props.name),
            se(e, "autoFocus", s.props.autoFocus),
            se(e, "placeholder", s.props.placeholderText),
            se(e, "disabled", s.props.disabled),
            se(e, "autoComplete", s.props.autoComplete),
            se(e, "className", r(c.props.className, p)),
            se(e, "title", s.props.title),
            se(e, "readOnly", s.props.readOnly),
            se(e, "required", s.props.required),
            se(e, "tabIndex", s.props.tabIndex),
            se(e, "aria-labelledby", s.props.ariaLabelledBy),
            e)
          );
        }),
        se(he(s), "renderClearButton", function() {
          var e = s.props,
            r = e.isClearable,
            n = e.selected,
            a = e.clearButtonTitle,
            o = e.ariaLabelClose,
            i = void 0 === o ? "Close" : o;
          return r && null != n
            ? t.createElement("button", {
                type: "button",
                className: "react-datepicker__close-icon",
                "aria-label": i,
                onClick: s.onClearClick,
                title: a,
                tabIndex: -1
              })
            : null;
        }),
        (s.state = s.calcInitialState()),
        s
      );
    }
    return (
      oe(o, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              allowSameDay: !1,
              dateFormat: "MM/dd/yyyy",
              dateFormatCalendar: "LLLL yyyy",
              onChange: function() {},
              disabled: !1,
              disabledKeyboardNavigation: !1,
              dropdownMode: "scroll",
              onFocus: function() {},
              onBlur: function() {},
              onKeyDown: function() {},
              onInputClick: function() {},
              onSelect: function() {},
              onClickOutside: function() {},
              onMonthChange: function() {},
              onCalendarOpen: function() {},
              onCalendarClose: function() {},
              preventOpenOnFocus: !1,
              onYearChange: function() {},
              onInputError: function() {},
              monthsShown: 1,
              readOnly: !1,
              withPortal: !1,
              shouldCloseOnSelect: !0,
              showTimeSelect: !1,
              showTimeInput: !1,
              showPreviousMonths: !1,
              showMonthYearPicker: !1,
              showFullMonthYearPicker: !1,
              showYearPicker: !1,
              showQuarterYearPicker: !1,
              strictParsing: !1,
              timeIntervals: 30,
              timeCaption: "Time",
              previousMonthButtonLabel: "Previous Month",
              nextMonthButtonLabel: "Next Month",
              previousYearButtonLabel: "Previous Year",
              nextYearButtonLabel: "Next Year",
              timeInputLabel: "Time",
              enableTabLoop: !0,
              renderDayContents: function(e) {
                return e;
              },
              inlineFocusSelectedMonth: !1,
              showPopperArrow: !0,
              excludeScrollbar: !0,
              customTimeInput: null
            };
          }
        }
      ]),
      oe(o, [
        {
          key: "componentDidUpdate",
          value: function(e, t) {
            var r, n;
            e.inline &&
              ((r = e.selected),
              (n = this.props.selected),
              r && n ? b(r) !== b(n) || _(r) !== _(n) : r !== n) &&
              this.setPreSelection(this.props.selected),
              void 0 !== this.state.monthSelectedIn &&
                e.monthsShown !== this.props.monthsShown &&
                this.setState({ monthSelectedIn: 0 }),
              e.highlightDates !== this.props.highlightDates &&
                this.setState({
                  highlightDates: nt(this.props.highlightDates)
                }),
              t.focused ||
                Ie(e.selected, this.props.selected) ||
                this.setState({ inputValue: null }),
              t.open !== this.state.open &&
                (!1 === t.open &&
                  !0 === this.state.open &&
                  this.props.onCalendarOpen(),
                !0 === t.open &&
                  !1 === this.state.open &&
                  this.props.onCalendarClose());
          }
        },
        {
          key: "componentWillUnmount",
          value: function() {
            this.clearPreventFocusTimeout();
          }
        },
        {
          key: "render",
          value: function() {
            var e = this.renderCalendar();
            return this.props.inline && !this.props.withPortal
              ? e
              : this.props.withPortal
              ? t.createElement(
                  "div",
                  null,
                  this.props.inline
                    ? null
                    : t.createElement(
                        "div",
                        { className: "react-datepicker__input-container" },
                        this.renderDateInput(),
                        this.renderClearButton()
                      ),
                  this.state.open || this.props.inline
                    ? t.createElement(
                        "div",
                        { className: "react-datepicker__portal" },
                        e
                      )
                    : null
                )
              : t.createElement(Mt, {
                  className: this.props.popperClassName,
                  wrapperClassName: this.props.wrapperClassName,
                  hidePopper: !this.isCalendarOpen(),
                  popperModifiers: this.props.popperModifiers,
                  targetComponent: t.createElement(
                    "div",
                    { className: "react-datepicker__input-container" },
                    this.renderDateInput(),
                    this.renderClearButton()
                  ),
                  popperContainer: this.props.popperContainer,
                  popperComponent: e,
                  popperPlacement: this.props.popperPlacement,
                  popperProps: this.props.popperProps,
                  popperOnKeyDown: this.onPopperKeyDown,
                  enableTabLoop: this.props.enableTabLoop
                });
          }
        }
      ]),
      o
    );
  })(),
  Nt = "input",
  xt = "navigate";
(exports.CalendarContainer = gt),
  (exports.default = Et),
  (exports.getDefaultLocale = qe),
  (exports.registerLocale = function(e, t) {
    var r = "undefined" != typeof window ? window : global;
    r.__localeData__ || (r.__localeData__ = {}), (r.__localeData__[e] = t);
  }),
  (exports.setDefaultLocale = function(e) {
    ("undefined" != typeof window ? window : global).__localeId__ = e;
  });
