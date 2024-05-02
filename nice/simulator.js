/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function dn(e, t) {
  const s = new Set(e.split(","));
  return (n) => s.has(n);
}
const Z = {}, vt = [], Ee = () => {
}, Hl = () => !1, ys = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), hn = (e) => e.startsWith("onUpdate:"), ae = Object.assign, pn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Bl = Object.prototype.hasOwnProperty, x = (e, t) => Bl.call(e, t), A = Array.isArray, $t = (e) => Kt(e) === "[object Map]", Tt = (e) => Kt(e) === "[object Set]", Bn = (e) => Kt(e) === "[object Date]", k = (e) => typeof e == "function", ce = (e) => typeof e == "string", We = (e) => typeof e == "symbol", Y = (e) => e !== null && typeof e == "object", Io = (e) => (Y(e) || k(e)) && k(e.then) && k(e.catch), Lo = Object.prototype.toString, Kt = (e) => Lo.call(e), Nl = (e) => Kt(e).slice(8, -1), Eo = (e) => Kt(e) === "[object Object]", mn = (e) => ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mt = /* @__PURE__ */ dn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), bs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Dl = /-(\w)/g, Ue = bs((e) => e.replace(Dl, (t, s) => s ? s.toUpperCase() : "")), Ul = /\B([A-Z])/g, Pt = bs(
  (e) => e.replace(Ul, "-$1").toLowerCase()
), vs = bs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ms = bs((e) => e ? `on${vs(e)}` : ""), _t = (e, t) => !Object.is(e, t), is = (e, t) => {
  for (let s = 0; s < e.length; s++)
    e[s](t);
}, Ao = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Ro = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, jl = (e) => {
  const t = ce(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Nn;
const Fo = () => Nn || (Nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wt(e) {
  if (A(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], o = ce(n) ? zl(n) : Wt(n);
      if (o)
        for (const l in o)
          t[l] = o[l];
    }
    return t;
  } else if (ce(e) || Y(e))
    return e;
}
const xl = /;(?![^(]*\))/g, Kl = /:([^]+)/, Wl = /\/\*[^]*?\*\//g;
function zl(e) {
  const t = {};
  return e.replace(Wl, "").split(xl).forEach((s) => {
    if (s) {
      const n = s.split(Kl);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function $s(e) {
  let t = "";
  if (ce(e))
    t = e;
  else if (A(e))
    for (let s = 0; s < e.length; s++) {
      const n = $s(e[s]);
      n && (t += n + " ");
    }
  else if (Y(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const ql = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yl = /* @__PURE__ */ dn(ql);
function Oo(e) {
  return !!e || e === "";
}
function Gl(e, t) {
  if (e.length !== t.length)
    return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = yt(e[n], t[n]);
  return s;
}
function yt(e, t) {
  if (e === t)
    return !0;
  let s = Bn(e), n = Bn(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = We(e), n = We(t), s || n)
    return e === t;
  if (s = A(e), n = A(t), s || n)
    return s && n ? Gl(e, t) : !1;
  if (s = Y(e), n = Y(t), s || n) {
    if (!s || !n)
      return !1;
    const o = Object.keys(e).length, l = Object.keys(t).length;
    if (o !== l)
      return !1;
    for (const i in e) {
      const r = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (r && !a || !r && a || !yt(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function gn(e, t) {
  return e.findIndex((s) => yt(s, t));
}
const R = (e) => ce(e) ? e : e == null ? "" : A(e) || Y(e) && (e.toString === Lo || !k(e.toString)) ? JSON.stringify(e, ko, 2) : String(e), ko = (e, t) => t && t.__v_isRef ? ko(e, t.value) : $t(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, o], l) => (s[Vs(n, l) + " =>"] = o, s),
    {}
  )
} : Tt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Vs(s))
} : We(t) ? Vs(t) : Y(t) && !A(t) && !Eo(t) ? String(t) : t, Vs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    We(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ke;
class Jl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ke, !t && ke && (this.index = (ke.scopes || (ke.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const s = ke;
      try {
        return ke = this, t();
      } finally {
        ke = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ke = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ke = this.parent;
  }
  stop(t) {
    if (this._active) {
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.scopes)
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Xl(e, t = ke) {
  t && t.active && t.effects.push(e);
}
function Zl() {
  return ke;
}
let mt;
class _n {
  constructor(t, s, n, o) {
    this.fn = t, this.trigger = s, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Xl(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, nt();
      for (let t = 0; t < this._depsLength; t++) {
        const s = this.deps[t];
        if (s.computed && (Ql(s.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ot();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = et, s = mt;
    try {
      return et = !0, mt = this, this._runnings++, Dn(this), this.fn();
    } finally {
      Un(this), this._runnings--, mt = s, et = t;
    }
  }
  stop() {
    this.active && (Dn(this), Un(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ql(e) {
  return e.value;
}
function Dn(e) {
  e._trackId++, e._depsLength = 0;
}
function Un(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Mo(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Mo(e, t) {
  const s = e.get(t);
  s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup());
}
let et = !0, Ys = 0;
const Vo = [];
function nt() {
  Vo.push(et), et = !1;
}
function ot() {
  const e = Vo.pop();
  et = e === void 0 ? !0 : e;
}
function yn() {
  Ys++;
}
function bn() {
  for (Ys--; !Ys && Gs.length; )
    Gs.shift()();
}
function Ho(e, t, s) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && Mo(n, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const Gs = [];
function Bo(e, t, s) {
  yn();
  for (const n of e.keys()) {
    let o;
    n._dirtyLevel < t && (o ?? (o = e.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), n._dirtyLevel = t), n._shouldSchedule && (o ?? (o = e.get(n) === n._trackId)) && (n.trigger(), (!n._runnings || n.allowRecurse) && n._dirtyLevel !== 2 && (n._shouldSchedule = !1, n.scheduler && Gs.push(n.scheduler)));
  }
  bn();
}
const No = (e, t) => {
  const s = /* @__PURE__ */ new Map();
  return s.cleanup = e, s.computed = t, s;
}, Js = /* @__PURE__ */ new WeakMap(), gt = Symbol(""), Xs = Symbol("");
function Se(e, t, s) {
  if (et && mt) {
    let n = Js.get(e);
    n || Js.set(e, n = /* @__PURE__ */ new Map());
    let o = n.get(s);
    o || n.set(s, o = No(() => n.delete(s))), Ho(
      mt,
      o
    );
  }
}
function xe(e, t, s, n, o, l) {
  const i = Js.get(e);
  if (!i)
    return;
  let r = [];
  if (t === "clear")
    r = [...i.values()];
  else if (s === "length" && A(e)) {
    const a = Number(n);
    i.forEach((d, h) => {
      (h === "length" || !We(h) && h >= a) && r.push(d);
    });
  } else
    switch (s !== void 0 && r.push(i.get(s)), t) {
      case "add":
        A(e) ? mn(s) && r.push(i.get("length")) : (r.push(i.get(gt)), $t(e) && r.push(i.get(Xs)));
        break;
      case "delete":
        A(e) || (r.push(i.get(gt)), $t(e) && r.push(i.get(Xs)));
        break;
      case "set":
        $t(e) && r.push(i.get(gt));
        break;
    }
  yn();
  for (const a of r)
    a && Bo(
      a,
      4
    );
  bn();
}
const ei = /* @__PURE__ */ dn("__proto__,__v_isRef,__isVue"), Do = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(We)
), jn = /* @__PURE__ */ ti();
function ti() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...s) {
      const n = W(this);
      for (let l = 0, i = this.length; l < i; l++)
        Se(n, "get", l + "");
      const o = n[t](...s);
      return o === -1 || o === !1 ? n[t](...s.map(W)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...s) {
      nt(), yn();
      const n = W(this)[t].apply(this, s);
      return bn(), ot(), n;
    };
  }), e;
}
function si(e) {
  We(e) || (e = String(e));
  const t = W(this);
  return Se(t, "has", e), t.hasOwnProperty(e);
}
class Uo {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    const o = this._isReadonly, l = this._isShallow;
    if (s === "__v_isReactive")
      return !o;
    if (s === "__v_isReadonly")
      return o;
    if (s === "__v_isShallow")
      return l;
    if (s === "__v_raw")
      return n === (o ? l ? mi : Wo : l ? Ko : xo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const i = A(t);
    if (!o) {
      if (i && x(jn, s))
        return Reflect.get(jn, s, n);
      if (s === "hasOwnProperty")
        return si;
    }
    const r = Reflect.get(t, s, n);
    return (We(s) ? Do.has(s) : ei(s)) || (o || Se(t, "get", s), l) ? r : Te(r) ? i && mn(s) ? r : r.value : Y(r) ? o ? zo(r) : Sn(r) : r;
  }
}
class jo extends Uo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, o) {
    let l = t[s];
    if (!this._isShallow) {
      const a = hs(l);
      if (!Zs(n) && !hs(n) && (l = W(l), n = W(n)), !A(t) && Te(l) && !Te(n))
        return a ? !1 : (l.value = n, !0);
    }
    const i = A(t) && mn(s) ? Number(s) < t.length : x(t, s), r = Reflect.set(t, s, n, o);
    return t === W(o) && (i ? _t(n, l) && xe(t, "set", s, n) : xe(t, "add", s, n)), r;
  }
  deleteProperty(t, s) {
    const n = x(t, s);
    t[s];
    const o = Reflect.deleteProperty(t, s);
    return o && n && xe(t, "delete", s, void 0), o;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!We(s) || !Do.has(s)) && Se(t, "has", s), n;
  }
  ownKeys(t) {
    return Se(
      t,
      "iterate",
      A(t) ? "length" : gt
    ), Reflect.ownKeys(t);
  }
}
class ni extends Uo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const oi = /* @__PURE__ */ new jo(), li = /* @__PURE__ */ new ni(), ii = /* @__PURE__ */ new jo(
  !0
);
const vn = (e) => e, Ss = (e) => Reflect.getPrototypeOf(e);
function Xt(e, t, s = !1, n = !1) {
  e = e.__v_raw;
  const o = W(e), l = W(t);
  s || (_t(t, l) && Se(o, "get", t), Se(o, "get", l));
  const { has: i } = Ss(o), r = n ? vn : s ? Tn : wn;
  if (i.call(o, t))
    return r(e.get(t));
  if (i.call(o, l))
    return r(e.get(l));
  e !== o && e.get(t);
}
function Zt(e, t = !1) {
  const s = this.__v_raw, n = W(s), o = W(e);
  return t || (_t(e, o) && Se(n, "has", e), Se(n, "has", o)), e === o ? s.has(e) : s.has(e) || s.has(o);
}
function Qt(e, t = !1) {
  return e = e.__v_raw, !t && Se(W(e), "iterate", gt), Reflect.get(e, "size", e);
}
function xn(e) {
  e = W(e);
  const t = W(this);
  return Ss(t).has.call(t, e) || (t.add(e), xe(t, "add", e, e)), this;
}
function Kn(e, t) {
  t = W(t);
  const s = W(this), { has: n, get: o } = Ss(s);
  let l = n.call(s, e);
  l || (e = W(e), l = n.call(s, e));
  const i = o.call(s, e);
  return s.set(e, t), l ? _t(t, i) && xe(s, "set", e, t) : xe(s, "add", e, t), this;
}
function Wn(e) {
  const t = W(this), { has: s, get: n } = Ss(t);
  let o = s.call(t, e);
  o || (e = W(e), o = s.call(t, e)), n && n.call(t, e);
  const l = t.delete(e);
  return o && xe(t, "delete", e, void 0), l;
}
function zn() {
  const e = W(this), t = e.size !== 0, s = e.clear();
  return t && xe(e, "clear", void 0, void 0), s;
}
function es(e, t) {
  return function(n, o) {
    const l = this, i = l.__v_raw, r = W(i), a = t ? vn : e ? Tn : wn;
    return !e && Se(r, "iterate", gt), i.forEach((d, h) => n.call(o, a(d), a(h), l));
  };
}
function ts(e, t, s) {
  return function(...n) {
    const o = this.__v_raw, l = W(o), i = $t(l), r = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, d = o[e](...n), h = s ? vn : t ? Tn : wn;
    return !t && Se(
      l,
      "iterate",
      a ? Xs : gt
    ), {
      // iterator protocol
      next() {
        const { value: g, done: p } = d.next();
        return p ? { value: g, done: p } : {
          value: r ? [h(g[0]), h(g[1])] : h(g),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function qe(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ri() {
  const e = {
    get(l) {
      return Xt(this, l);
    },
    get size() {
      return Qt(this);
    },
    has: Zt,
    add: xn,
    set: Kn,
    delete: Wn,
    clear: zn,
    forEach: es(!1, !1)
  }, t = {
    get(l) {
      return Xt(this, l, !1, !0);
    },
    get size() {
      return Qt(this);
    },
    has: Zt,
    add: xn,
    set: Kn,
    delete: Wn,
    clear: zn,
    forEach: es(!1, !0)
  }, s = {
    get(l) {
      return Xt(this, l, !0);
    },
    get size() {
      return Qt(this, !0);
    },
    has(l) {
      return Zt.call(this, l, !0);
    },
    add: qe("add"),
    set: qe("set"),
    delete: qe("delete"),
    clear: qe("clear"),
    forEach: es(!0, !1)
  }, n = {
    get(l) {
      return Xt(this, l, !0, !0);
    },
    get size() {
      return Qt(this, !0);
    },
    has(l) {
      return Zt.call(this, l, !0);
    },
    add: qe("add"),
    set: qe("set"),
    delete: qe("delete"),
    clear: qe("clear"),
    forEach: es(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    e[l] = ts(l, !1, !1), s[l] = ts(l, !0, !1), t[l] = ts(l, !1, !0), n[l] = ts(
      l,
      !0,
      !0
    );
  }), [
    e,
    s,
    t,
    n
  ];
}
const [
  ai,
  ci,
  ui,
  fi
] = /* @__PURE__ */ ri();
function $n(e, t) {
  const s = t ? e ? fi : ui : e ? ci : ai;
  return (n, o, l) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(
    x(s, o) && o in n ? s : n,
    o,
    l
  );
}
const di = {
  get: /* @__PURE__ */ $n(!1, !1)
}, hi = {
  get: /* @__PURE__ */ $n(!1, !0)
}, pi = {
  get: /* @__PURE__ */ $n(!0, !1)
};
const xo = /* @__PURE__ */ new WeakMap(), Ko = /* @__PURE__ */ new WeakMap(), Wo = /* @__PURE__ */ new WeakMap(), mi = /* @__PURE__ */ new WeakMap();
function gi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function _i(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gi(Nl(e));
}
function Sn(e) {
  return hs(e) ? e : Cn(
    e,
    !1,
    oi,
    di,
    xo
  );
}
function yi(e) {
  return Cn(
    e,
    !1,
    ii,
    hi,
    Ko
  );
}
function zo(e) {
  return Cn(
    e,
    !0,
    li,
    pi,
    Wo
  );
}
function Cn(e, t, s, n, o) {
  if (!Y(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = o.get(e);
  if (l)
    return l;
  const i = _i(e);
  if (i === 0)
    return e;
  const r = new Proxy(
    e,
    i === 2 ? n : s
  );
  return o.set(e, r), r;
}
function Vt(e) {
  return hs(e) ? Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function hs(e) {
  return !!(e && e.__v_isReadonly);
}
function Zs(e) {
  return !!(e && e.__v_isShallow);
}
function qo(e) {
  return e ? !!e.__v_raw : !1;
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function bi(e) {
  return Object.isExtensible(e) && Ao(e, "__v_skip", !0), e;
}
const wn = (e) => Y(e) ? Sn(e) : e, Tn = (e) => Y(e) ? zo(e) : e;
class Yo {
  constructor(t, s, n, o) {
    this.getter = t, this._setter = s, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new _n(
      () => t(this._value),
      () => Hs(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = n;
  }
  get value() {
    const t = W(this);
    return (!t._cacheable || t.effect.dirty) && _t(t._value, t._value = t.effect.run()) && Hs(t, 4), $i(t), t.effect._dirtyLevel >= 2 && Hs(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function vi(e, t, s = !1) {
  let n, o;
  const l = k(e);
  return l ? (n = e, o = Ee) : (n = e.get, o = e.set), new Yo(n, o, l || !o, s);
}
function $i(e) {
  var t;
  et && mt && (e = W(e), Ho(
    mt,
    (t = e.dep) != null ? t : e.dep = No(
      () => e.dep = void 0,
      e instanceof Yo ? e : void 0
    )
  ));
}
function Hs(e, t = 4, s) {
  e = W(e);
  const n = e.dep;
  n && Bo(
    n,
    t
  );
}
function Te(e) {
  return !!(e && e.__v_isRef === !0);
}
function Si(e) {
  return Te(e) ? e.value : e;
}
const Ci = {
  get: (e, t, s) => Si(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const o = e[t];
    return Te(o) && !Te(s) ? (o.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Go(e) {
  return Vt(e) ? e : new Proxy(e, Ci);
}
/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function tt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (o) {
    Cs(o, t, s);
  }
}
function Re(e, t, s, n) {
  if (k(e)) {
    const o = tt(e, t, s, n);
    return o && Io(o) && o.catch((l) => {
      Cs(l, t, s);
    }), o;
  }
  if (A(e)) {
    const o = [];
    for (let l = 0; l < e.length; l++)
      o.push(Re(e[l], t, s, n));
    return o;
  }
}
function Cs(e, t, s, n = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let l = t.parent;
    const i = t.proxy, r = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let h = 0; h < d.length; h++)
          if (d[h](e, i, r) === !1)
            return;
      }
      l = l.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      nt(), tt(
        a,
        null,
        10,
        [e, i, r]
      ), ot();
      return;
    }
  }
  wi(e, s, o, n);
}
function wi(e, t, s, n = !0) {
  console.error(e);
}
let Dt = !1, Qs = !1;
const me = [];
let De = 0;
const St = [];
let Je = null, dt = 0;
const Jo = /* @__PURE__ */ Promise.resolve();
let Pn = null;
function Xo(e) {
  const t = Pn || Jo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ti(e) {
  let t = De + 1, s = me.length;
  for (; t < s; ) {
    const n = t + s >>> 1, o = me[n], l = Ut(o);
    l < e || l === e && o.pre ? t = n + 1 : s = n;
  }
  return t;
}
function In(e) {
  (!me.length || !me.includes(
    e,
    Dt && e.allowRecurse ? De + 1 : De
  )) && (e.id == null ? me.push(e) : me.splice(Ti(e.id), 0, e), Zo());
}
function Zo() {
  !Dt && !Qs && (Qs = !0, Pn = Jo.then(el));
}
function Pi(e) {
  const t = me.indexOf(e);
  t > De && me.splice(t, 1);
}
function Ii(e) {
  A(e) ? St.push(...e) : (!Je || !Je.includes(
    e,
    e.allowRecurse ? dt + 1 : dt
  )) && St.push(e), Zo();
}
function qn(e, t, s = Dt ? De + 1 : 0) {
  for (; s < me.length; s++) {
    const n = me[s];
    if (n && n.pre) {
      if (e && n.id !== e.uid)
        continue;
      me.splice(s, 1), s--, n();
    }
  }
}
function Qo(e) {
  if (St.length) {
    const t = [...new Set(St)].sort(
      (s, n) => Ut(s) - Ut(n)
    );
    if (St.length = 0, Je) {
      Je.push(...t);
      return;
    }
    for (Je = t, dt = 0; dt < Je.length; dt++)
      Je[dt]();
    Je = null, dt = 0;
  }
}
const Ut = (e) => e.id == null ? 1 / 0 : e.id, Li = (e, t) => {
  const s = Ut(e) - Ut(t);
  if (s === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return s;
};
function el(e) {
  Qs = !1, Dt = !0, me.sort(Li);
  try {
    for (De = 0; De < me.length; De++) {
      const t = me[De];
      t && t.active !== !1 && tt(t, null, 14);
    }
  } finally {
    De = 0, me.length = 0, Qo(), Dt = !1, Pn = null, (me.length || St.length) && el();
  }
}
function Ei(e, t, ...s) {
  if (e.isUnmounted)
    return;
  const n = e.vnode.props || Z;
  let o = s;
  const l = t.startsWith("update:"), i = l && t.slice(7);
  if (i && i in n) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: g, trim: p } = n[h] || Z;
    p && (o = s.map((I) => ce(I) ? I.trim() : I)), g && (o = s.map(Ro));
  }
  let r, a = n[r = Ms(t)] || // also try camelCase event handler (#2249)
  n[r = Ms(Ue(t))];
  !a && l && (a = n[r = Ms(Pt(t))]), a && Re(
    a,
    e,
    6,
    o
  );
  const d = n[r + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, Re(
      d,
      e,
      6,
      o
    );
  }
}
function tl(e, t, s = !1) {
  const n = t.emitsCache, o = n.get(e);
  if (o !== void 0)
    return o;
  const l = e.emits;
  let i = {}, r = !1;
  if (!k(e)) {
    const a = (d) => {
      const h = tl(d, t, !0);
      h && (r = !0, ae(i, h));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !l && !r ? (Y(e) && n.set(e, null), null) : (A(l) ? l.forEach((a) => i[a] = null) : ae(i, l), Y(e) && n.set(e, i), i);
}
function ws(e, t) {
  return !e || !ys(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), x(e, t[0].toLowerCase() + t.slice(1)) || x(e, Pt(t)) || x(e, t));
}
let be = null, Ts = null;
function ps(e) {
  const t = be;
  return be = e, Ts = e && e.type.__scopeId || null, t;
}
function It(e) {
  Ts = e;
}
function Lt() {
  Ts = null;
}
function en(e, t = be, s) {
  if (!t || e._n)
    return e;
  const n = (...o) => {
    n._d && lo(-1);
    const l = ps(t);
    let i;
    try {
      i = e(...o);
    } finally {
      ps(l), n._d && lo(1);
    }
    return i;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Bs(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: o,
    propsOptions: [l],
    slots: i,
    attrs: r,
    emit: a,
    render: d,
    renderCache: h,
    props: g,
    data: p,
    setupState: I,
    ctx: H,
    inheritAttrs: B
  } = e, oe = ps(e);
  let J, ee;
  try {
    if (s.shapeFlag & 4) {
      const z = o || n, le = z;
      J = Ne(
        d.call(
          le,
          z,
          h,
          g,
          I,
          p,
          H
        )
      ), ee = r;
    } else {
      const z = t;
      J = Ne(
        z.length > 1 ? z(
          g,
          { attrs: r, slots: i, emit: a }
        ) : z(
          g,
          null
        )
      ), ee = t.props ? r : Ai(r);
    }
  } catch (z) {
    Nt.length = 0, Cs(z, e, 1), J = V(Ae);
  }
  let j = J;
  if (ee && B !== !1) {
    const z = Object.keys(ee), { shapeFlag: le } = j;
    z.length && le & 7 && (l && z.some(hn) && (ee = Ri(
      ee,
      l
    )), j = st(j, ee, !1, !0));
  }
  return s.dirs && (j = st(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(s.dirs) : s.dirs), s.transition && (j.transition = s.transition), J = j, ps(oe), J;
}
const Ai = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || ys(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Ri = (e, t) => {
  const s = {};
  for (const n in e)
    (!hn(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Fi(e, t, s) {
  const { props: n, children: o, component: l } = e, { props: i, children: r, patchFlag: a } = t, d = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? Yn(n, i, d) : !!i;
    if (a & 8) {
      const h = t.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        const p = h[g];
        if (i[p] !== n[p] && !ws(d, p))
          return !0;
      }
    }
  } else
    return (o || r) && (!r || !r.$stable) ? !0 : n === i ? !1 : n ? i ? Yn(n, i, d) : !0 : !!i;
  return !1;
}
function Yn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < n.length; o++) {
    const l = n[o];
    if (t[l] !== e[l] && !ws(s, l))
      return !0;
  }
  return !1;
}
function Oi({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const sl = "components";
function $e(e, t) {
  return Mi(sl, e, !0, t) || e;
}
const ki = Symbol.for("v-ndc");
function Mi(e, t, s = !0, n = !1) {
  const o = be || de;
  if (o) {
    const l = o.type;
    if (e === sl) {
      const r = Fr(
        l,
        !1
      );
      if (r && (r === t || r === Ue(t) || r === vs(Ue(t))))
        return l;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Gn(o[e] || l[e], t) || // global registration
      Gn(o.appContext[e], t)
    );
    return !i && n ? l : i;
  }
}
function Gn(e, t) {
  return e && (e[t] || e[Ue(t)] || e[vs(Ue(t))]);
}
const Vi = (e) => e.__isSuspense;
function Hi(e, t) {
  t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : Ii(e);
}
const Bi = Symbol.for("v-scx"), Ni = () => as(Bi), ss = {};
function Ns(e, t, s) {
  return nl(e, t, s);
}
function nl(e, t, {
  immediate: s,
  deep: n,
  flush: o,
  once: l,
  onTrack: i,
  onTrigger: r
} = Z) {
  if (t && l) {
    const N = t;
    t = (..._e) => {
      N(..._e), le();
    };
  }
  const a = de, d = (N) => n === !0 ? N : (
    // for deep: false, only traverse root-level properties
    pt(N, n === !1 ? 1 : void 0)
  );
  let h, g = !1, p = !1;
  if (Te(e) ? (h = () => e.value, g = Zs(e)) : Vt(e) ? (h = () => d(e), g = !0) : A(e) ? (p = !0, g = e.some((N) => Vt(N) || Zs(N)), h = () => e.map((N) => {
    if (Te(N))
      return N.value;
    if (Vt(N))
      return d(N);
    if (k(N))
      return tt(N, a, 2);
  })) : k(e) ? t ? h = () => tt(e, a, 2) : h = () => (I && I(), Re(
    e,
    a,
    3,
    [H]
  )) : h = Ee, t && n) {
    const N = h;
    h = () => pt(N());
  }
  let I, H = (N) => {
    I = j.onStop = () => {
      tt(N, a, 4), I = j.onStop = void 0;
    };
  }, B;
  if (Es)
    if (H = Ee, t ? s && Re(t, a, 3, [
      h(),
      p ? [] : void 0,
      H
    ]) : h(), o === "sync") {
      const N = Ni();
      B = N.__watcherHandles || (N.__watcherHandles = []);
    } else
      return Ee;
  let oe = p ? new Array(e.length).fill(ss) : ss;
  const J = () => {
    if (!(!j.active || !j.dirty))
      if (t) {
        const N = j.run();
        (n || g || (p ? N.some((_e, M) => _t(_e, oe[M])) : _t(N, oe))) && (I && I(), Re(t, a, 3, [
          N,
          // pass undefined as the old value when it's changed for the first time
          oe === ss ? void 0 : p && oe[0] === ss ? [] : oe,
          H
        ]), oe = N);
      } else
        j.run();
  };
  J.allowRecurse = !!t;
  let ee;
  o === "sync" ? ee = J : o === "post" ? ee = () => ve(J, a && a.suspense) : (J.pre = !0, a && (J.id = a.uid), ee = () => In(J));
  const j = new _n(h, Ee, ee), z = Zl(), le = () => {
    j.stop(), z && pn(z.effects, j);
  };
  return t ? s ? J() : oe = j.run() : o === "post" ? ve(
    j.run.bind(j),
    a && a.suspense
  ) : j.run(), B && B.push(le), le;
}
function Di(e, t, s) {
  const n = this.proxy, o = ce(e) ? e.includes(".") ? ol(n, e) : () => n[e] : e.bind(n, n);
  let l;
  k(t) ? l = t : (l = t.handler, s = t);
  const i = zt(this), r = nl(o, l.bind(n), s);
  return i(), r;
}
function ol(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let o = 0; o < s.length && n; o++)
      n = n[s[o]];
    return n;
  };
}
function pt(e, t = 1 / 0, s) {
  if (t <= 0 || !Y(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, Te(e))
    pt(e.value, t, s);
  else if (A(e))
    for (let n = 0; n < e.length; n++)
      pt(e[n], t, s);
  else if (Tt(e) || $t(e))
    e.forEach((n) => {
      pt(n, t, s);
    });
  else if (Eo(e))
    for (const n in e)
      pt(e[n], t, s);
  return e;
}
function Ft(e, t) {
  if (be === null)
    return e;
  const s = As(be) || be.proxy, n = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [l, i, r, a = Z] = t[o];
    l && (k(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && pt(i), n.push({
      dir: l,
      instance: s,
      value: i,
      oldValue: void 0,
      arg: r,
      modifiers: a
    }));
  }
  return e;
}
function at(e, t, s, n) {
  const o = e.dirs, l = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    l && (r.oldValue = l[i].value);
    let a = r.dir[n];
    a && (nt(), Re(a, s, 8, [
      e.el,
      r,
      e,
      t
    ]), ot());
  }
}
const Xe = Symbol("_leaveCb"), ns = Symbol("_enterCb");
function Ui() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return cl(() => {
    e.isMounted = !0;
  }), ul(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ie = [Function, Array], ll = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ie,
  onEnter: Ie,
  onAfterEnter: Ie,
  onEnterCancelled: Ie,
  // leave
  onBeforeLeave: Ie,
  onLeave: Ie,
  onAfterLeave: Ie,
  onLeaveCancelled: Ie,
  // appear
  onBeforeAppear: Ie,
  onAppear: Ie,
  onAfterAppear: Ie,
  onAppearCancelled: Ie
}, ji = {
  name: "BaseTransition",
  props: ll,
  setup(e, { slots: t }) {
    const s = Ir(), n = Ui();
    return () => {
      const o = t.default && rl(t.default(), !0);
      if (!o || !o.length)
        return;
      let l = o[0];
      if (o.length > 1) {
        for (const p of o)
          if (p.type !== Ae) {
            l = p;
            break;
          }
      }
      const i = W(e), { mode: r } = i;
      if (n.isLeaving)
        return Ds(l);
      const a = Jn(l);
      if (!a)
        return Ds(l);
      const d = tn(
        a,
        i,
        n,
        s
      );
      sn(a, d);
      const h = s.subTree, g = h && Jn(h);
      if (g && g.type !== Ae && !ht(a, g)) {
        const p = tn(
          g,
          i,
          n,
          s
        );
        if (sn(g, p), r === "out-in" && a.type !== Ae)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, s.update.active !== !1 && (s.effect.dirty = !0, s.update());
          }, Ds(l);
        r === "in-out" && a.type !== Ae && (p.delayLeave = (I, H, B) => {
          const oe = il(
            n,
            g
          );
          oe[String(g.key)] = g, I[Xe] = () => {
            H(), I[Xe] = void 0, delete d.delayedLeave;
          }, d.delayedLeave = B;
        });
      }
      return l;
    };
  }
}, xi = ji;
function il(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function tn(e, t, s, n) {
  const {
    appear: o,
    mode: l,
    persisted: i = !1,
    onBeforeEnter: r,
    onEnter: a,
    onAfterEnter: d,
    onEnterCancelled: h,
    onBeforeLeave: g,
    onLeave: p,
    onAfterLeave: I,
    onLeaveCancelled: H,
    onBeforeAppear: B,
    onAppear: oe,
    onAfterAppear: J,
    onAppearCancelled: ee
  } = t, j = String(e.key), z = il(s, e), le = (M, ie) => {
    M && Re(
      M,
      n,
      9,
      ie
    );
  }, N = (M, ie) => {
    const X = ie[1];
    le(M, ie), A(M) ? M.every((he) => he.length <= 1) && X() : M.length <= 1 && X();
  }, _e = {
    mode: l,
    persisted: i,
    beforeEnter(M) {
      let ie = r;
      if (!s.isMounted)
        if (o)
          ie = B || r;
        else
          return;
      M[Xe] && M[Xe](
        !0
        /* cancelled */
      );
      const X = z[j];
      X && ht(e, X) && X.el[Xe] && X.el[Xe](), le(ie, [M]);
    },
    enter(M) {
      let ie = a, X = d, he = h;
      if (!s.isMounted)
        if (o)
          ie = oe || a, X = J || d, he = ee || h;
        else
          return;
      let L = !1;
      const te = M[ns] = (Ce) => {
        L || (L = !0, Ce ? le(he, [M]) : le(X, [M]), _e.delayedLeave && _e.delayedLeave(), M[ns] = void 0);
      };
      ie ? N(ie, [M, te]) : te();
    },
    leave(M, ie) {
      const X = String(e.key);
      if (M[ns] && M[ns](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return ie();
      le(g, [M]);
      let he = !1;
      const L = M[Xe] = (te) => {
        he || (he = !0, ie(), te ? le(H, [M]) : le(I, [M]), M[Xe] = void 0, z[X] === e && delete z[X]);
      };
      z[X] = e, p ? N(p, [M, L]) : L();
    },
    clone(M) {
      return tn(M, t, s, n);
    }
  };
  return _e;
}
function Ds(e) {
  if (Ps(e))
    return e = st(e), e.children = null, e;
}
function Jn(e) {
  if (!Ps(e))
    return e;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && k(s.default))
      return s.default();
  }
}
function sn(e, t) {
  e.shapeFlag & 6 && e.component ? sn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function rl(e, t = !1, s) {
  let n = [], o = 0;
  for (let l = 0; l < e.length; l++) {
    let i = e[l];
    const r = s == null ? i.key : String(s) + String(i.key != null ? i.key : l);
    i.type === U ? (i.patchFlag & 128 && o++, n = n.concat(
      rl(i.children, t, r)
    )) : (t || i.type !== Ae) && n.push(r != null ? st(i, { key: r }) : i);
  }
  if (o > 1)
    for (let l = 0; l < n.length; l++)
      n[l].patchFlag = -2;
  return n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Fe(e, t) {
  return k(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ae({ name: e.name }, t, { setup: e })
  ) : e;
}
const rs = (e) => !!e.type.__asyncLoader, Ps = (e) => e.type.__isKeepAlive;
function Ki(e, t) {
  al(e, "a", t);
}
function Wi(e, t) {
  al(e, "da", t);
}
function al(e, t, s = de) {
  const n = e.__wdc || (e.__wdc = () => {
    let o = s;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Is(t, n, s), s) {
    let o = s.parent;
    for (; o && o.parent; )
      Ps(o.parent.vnode) && zi(n, t, s, o), o = o.parent;
  }
}
function zi(e, t, s, n) {
  const o = Is(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  fl(() => {
    pn(n[t], o);
  }, s);
}
function Is(e, t, s = de, n = !1) {
  if (s) {
    const o = s[e] || (s[e] = []), l = t.__weh || (t.__weh = (...i) => {
      if (s.isUnmounted)
        return;
      nt();
      const r = zt(s), a = Re(t, s, e, i);
      return r(), ot(), a;
    });
    return n ? o.unshift(l) : o.push(l), l;
  }
}
const ze = (e) => (t, s = de) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Es || e === "sp") && Is(e, (...n) => t(...n), s)
), qi = ze("bm"), cl = ze("m"), Yi = ze("bu"), Gi = ze("u"), ul = ze("bum"), fl = ze("um"), Ji = ze("sp"), Xi = ze(
  "rtg"
), Zi = ze(
  "rtc"
);
function Qi(e, t = de) {
  Is("ec", e, t);
}
function Le(e, t, s, n) {
  let o;
  const l = s;
  if (A(e) || ce(e)) {
    o = new Array(e.length);
    for (let i = 0, r = e.length; i < r; i++)
      o[i] = t(e[i], i, void 0, l);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let i = 0; i < e; i++)
      o[i] = t(i + 1, i, void 0, l);
  } else if (Y(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (i, r) => t(i, r, void 0, l)
      );
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let r = 0, a = i.length; r < a; r++) {
        const d = i[r];
        o[r] = t(e[d], d, r, l);
      }
    }
  else
    o = [];
  return o;
}
const nn = (e) => e ? Pl(e) ? As(e) || e.proxy : nn(e.parent) : null, Ht = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => nn(e.parent),
    $root: (e) => nn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ln(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, In(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Xo.bind(e.proxy)),
    $watch: (e) => Di.bind(e)
  })
), Us = (e, t) => e !== Z && !e.__isScriptSetup && x(e, t), er = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: o, props: l, accessCache: i, type: r, appContext: a } = e;
    let d;
    if (t[0] !== "$") {
      const I = i[t];
      if (I !== void 0)
        switch (I) {
          case 1:
            return n[t];
          case 2:
            return o[t];
          case 4:
            return s[t];
          case 3:
            return l[t];
        }
      else {
        if (Us(n, t))
          return i[t] = 1, n[t];
        if (o !== Z && x(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && x(d, t)
        )
          return i[t] = 3, l[t];
        if (s !== Z && x(s, t))
          return i[t] = 4, s[t];
        on && (i[t] = 0);
      }
    }
    const h = Ht[t];
    let g, p;
    if (h)
      return t === "$attrs" && Se(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (g = r.__cssModules) && (g = g[t])
    )
      return g;
    if (s !== Z && x(s, t))
      return i[t] = 4, s[t];
    if (
      // global properties
      p = a.config.globalProperties, x(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: o, ctx: l } = e;
    return Us(o, t) ? (o[t] = s, !0) : n !== Z && x(n, t) ? (n[t] = s, !0) : x(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: o, propsOptions: l }
  }, i) {
    let r;
    return !!s[i] || e !== Z && x(e, i) || Us(t, i) || (r = l[0]) && x(r, i) || x(n, i) || x(Ht, i) || x(o.config.globalProperties, i);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : x(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Xn(e) {
  return A(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let on = !0;
function tr(e) {
  const t = Ln(e), s = e.proxy, n = e.ctx;
  on = !1, t.beforeCreate && Zn(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: l,
    methods: i,
    watch: r,
    provide: a,
    inject: d,
    // lifecycle
    created: h,
    beforeMount: g,
    mounted: p,
    beforeUpdate: I,
    updated: H,
    activated: B,
    deactivated: oe,
    beforeDestroy: J,
    beforeUnmount: ee,
    destroyed: j,
    unmounted: z,
    render: le,
    renderTracked: N,
    renderTriggered: _e,
    errorCaptured: M,
    serverPrefetch: ie,
    // public API
    expose: X,
    inheritAttrs: he,
    // assets
    components: L,
    directives: te,
    filters: Ce
  } = t;
  if (d && sr(d, n, null), i)
    for (const se in i) {
      const G = i[se];
      k(G) && (n[se] = G.bind(s));
    }
  if (o) {
    const se = o.call(s, s);
    Y(se) && (e.data = Sn(se));
  }
  if (on = !0, l)
    for (const se in l) {
      const G = l[se], it = k(G) ? G.bind(s, s) : k(G.get) ? G.get.bind(s, s) : Ee, Gt = !k(G) && k(G.set) ? G.set.bind(s) : Ee, rt = kr({
        get: it,
        set: Gt
      });
      Object.defineProperty(n, se, {
        enumerable: !0,
        configurable: !0,
        get: () => rt.value,
        set: (Ve) => rt.value = Ve
      });
    }
  if (r)
    for (const se in r)
      dl(r[se], n, s, se);
  if (a) {
    const se = k(a) ? a.call(s) : a;
    Reflect.ownKeys(se).forEach((G) => {
      ar(G, se[G]);
    });
  }
  h && Zn(h, e, "c");
  function ue(se, G) {
    A(G) ? G.forEach((it) => se(it.bind(s))) : G && se(G.bind(s));
  }
  if (ue(qi, g), ue(cl, p), ue(Yi, I), ue(Gi, H), ue(Ki, B), ue(Wi, oe), ue(Qi, M), ue(Zi, N), ue(Xi, _e), ue(ul, ee), ue(fl, z), ue(Ji, ie), A(X))
    if (X.length) {
      const se = e.exposed || (e.exposed = {});
      X.forEach((G) => {
        Object.defineProperty(se, G, {
          get: () => s[G],
          set: (it) => s[G] = it
        });
      });
    } else
      e.exposed || (e.exposed = {});
  le && e.render === Ee && (e.render = le), he != null && (e.inheritAttrs = he), L && (e.components = L), te && (e.directives = te);
}
function sr(e, t, s = Ee) {
  A(e) && (e = ln(e));
  for (const n in e) {
    const o = e[n];
    let l;
    Y(o) ? "default" in o ? l = as(
      o.from || n,
      o.default,
      !0
    ) : l = as(o.from || n) : l = as(o), Te(l) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (i) => l.value = i
    }) : t[n] = l;
  }
}
function Zn(e, t, s) {
  Re(
    A(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function dl(e, t, s, n) {
  const o = n.includes(".") ? ol(s, n) : () => s[n];
  if (ce(e)) {
    const l = t[e];
    k(l) && Ns(o, l);
  } else if (k(e))
    Ns(o, e.bind(s));
  else if (Y(e))
    if (A(e))
      e.forEach((l) => dl(l, t, s, n));
    else {
      const l = k(e.handler) ? e.handler.bind(s) : t[e.handler];
      k(l) && Ns(o, l, e);
    }
}
function Ln(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: o,
    optionsCache: l,
    config: { optionMergeStrategies: i }
  } = e.appContext, r = l.get(t);
  let a;
  return r ? a = r : !o.length && !s && !n ? a = t : (a = {}, o.length && o.forEach(
    (d) => ms(a, d, i, !0)
  ), ms(a, t, i)), Y(t) && l.set(t, a), a;
}
function ms(e, t, s, n = !1) {
  const { mixins: o, extends: l } = t;
  l && ms(e, l, s, !0), o && o.forEach(
    (i) => ms(e, i, s, !0)
  );
  for (const i in t)
    if (!(n && i === "expose")) {
      const r = nr[i] || s && s[i];
      e[i] = r ? r(e[i], t[i]) : t[i];
    }
  return e;
}
const nr = {
  data: Qn,
  props: eo,
  emits: eo,
  // objects
  methods: kt,
  computed: kt,
  // lifecycle
  beforeCreate: ye,
  created: ye,
  beforeMount: ye,
  mounted: ye,
  beforeUpdate: ye,
  updated: ye,
  beforeDestroy: ye,
  beforeUnmount: ye,
  destroyed: ye,
  unmounted: ye,
  activated: ye,
  deactivated: ye,
  errorCaptured: ye,
  serverPrefetch: ye,
  // assets
  components: kt,
  directives: kt,
  // watch
  watch: lr,
  // provide / inject
  provide: Qn,
  inject: or
};
function Qn(e, t) {
  return t ? e ? function() {
    return ae(
      k(e) ? e.call(this, this) : e,
      k(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function or(e, t) {
  return kt(ln(e), ln(t));
}
function ln(e) {
  if (A(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function kt(e, t) {
  return e ? ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function eo(e, t) {
  return e ? A(e) && A(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ae(
    /* @__PURE__ */ Object.create(null),
    Xn(e),
    Xn(t ?? {})
  ) : t;
}
function lr(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const s = ae(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = ye(e[n], t[n]);
  return s;
}
function hl() {
  return {
    app: null,
    config: {
      isNativeTag: Hl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ir = 0;
function rr(e, t) {
  return function(n, o = null) {
    k(n) || (n = ae({}, n)), o != null && !Y(o) && (o = null);
    const l = hl(), i = /* @__PURE__ */ new WeakSet();
    let r = !1;
    const a = l.app = {
      _uid: ir++,
      _component: n,
      _props: o,
      _container: null,
      _context: l,
      _instance: null,
      version: Mr,
      get config() {
        return l.config;
      },
      set config(d) {
      },
      use(d, ...h) {
        return i.has(d) || (d && k(d.install) ? (i.add(d), d.install(a, ...h)) : k(d) && (i.add(d), d(a, ...h))), a;
      },
      mixin(d) {
        return l.mixins.includes(d) || l.mixins.push(d), a;
      },
      component(d, h) {
        return h ? (l.components[d] = h, a) : l.components[d];
      },
      directive(d, h) {
        return h ? (l.directives[d] = h, a) : l.directives[d];
      },
      mount(d, h, g) {
        if (!r) {
          const p = V(n, o);
          return p.appContext = l, g === !0 ? g = "svg" : g === !1 && (g = void 0), h && t ? t(p, d) : e(p, d, g), r = !0, a._container = d, d.__vue_app__ = a, As(p.component) || p.component.proxy;
        }
      },
      unmount() {
        r && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(d, h) {
        return l.provides[d] = h, a;
      },
      runWithContext(d) {
        const h = Bt;
        Bt = a;
        try {
          return d();
        } finally {
          Bt = h;
        }
      }
    };
    return a;
  };
}
let Bt = null;
function ar(e, t) {
  if (de) {
    let s = de.provides;
    const n = de.parent && de.parent.provides;
    n === s && (s = de.provides = Object.create(n)), s[e] = t;
  }
}
function as(e, t, s = !1) {
  const n = de || be;
  if (n || Bt) {
    const o = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : Bt._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return s && k(t) ? t.call(n && n.proxy) : t;
  }
}
const pl = {}, ml = () => Object.create(pl), gl = (e) => Object.getPrototypeOf(e) === pl;
function cr(e, t, s, n = !1) {
  const o = {}, l = ml();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), _l(e, t, o, l);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  s ? e.props = n ? o : yi(o) : e.type.props ? e.props = o : e.props = l, e.attrs = l;
}
function ur(e, t, s, n) {
  const {
    props: o,
    attrs: l,
    vnode: { patchFlag: i }
  } = e, r = W(o), [a] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        let p = h[g];
        if (ws(e.emitsOptions, p))
          continue;
        const I = t[p];
        if (a)
          if (x(l, p))
            I !== l[p] && (l[p] = I, d = !0);
          else {
            const H = Ue(p);
            o[H] = rn(
              a,
              r,
              H,
              I,
              e,
              !1
            );
          }
        else
          I !== l[p] && (l[p] = I, d = !0);
      }
    }
  } else {
    _l(e, t, o, l) && (d = !0);
    let h;
    for (const g in r)
      (!t || // for camelCase
      !x(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = Pt(g)) === g || !x(t, h))) && (a ? s && // for camelCase
      (s[g] !== void 0 || // for kebab-case
      s[h] !== void 0) && (o[g] = rn(
        a,
        r,
        g,
        void 0,
        e,
        !0
      )) : delete o[g]);
    if (l !== r)
      for (const g in l)
        (!t || !x(t, g)) && (delete l[g], d = !0);
  }
  d && xe(e.attrs, "set", "");
}
function _l(e, t, s, n) {
  const [o, l] = e.propsOptions;
  let i = !1, r;
  if (t)
    for (let a in t) {
      if (Mt(a))
        continue;
      const d = t[a];
      let h;
      o && x(o, h = Ue(a)) ? !l || !l.includes(h) ? s[h] = d : (r || (r = {}))[h] = d : ws(e.emitsOptions, a) || (!(a in n) || d !== n[a]) && (n[a] = d, i = !0);
    }
  if (l) {
    const a = W(s), d = r || Z;
    for (let h = 0; h < l.length; h++) {
      const g = l[h];
      s[g] = rn(
        o,
        a,
        g,
        d[g],
        e,
        !x(d, g)
      );
    }
  }
  return i;
}
function rn(e, t, s, n, o, l) {
  const i = e[s];
  if (i != null) {
    const r = x(i, "default");
    if (r && n === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && k(a)) {
        const { propsDefaults: d } = o;
        if (s in d)
          n = d[s];
        else {
          const h = zt(o);
          n = d[s] = a.call(
            null,
            t
          ), h();
        }
      } else
        n = a;
    }
    i[
      0
      /* shouldCast */
    ] && (l && !r ? n = !1 : i[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Pt(s)) && (n = !0));
  }
  return n;
}
function yl(e, t, s = !1) {
  const n = t.propsCache, o = n.get(e);
  if (o)
    return o;
  const l = e.props, i = {}, r = [];
  let a = !1;
  if (!k(e)) {
    const h = (g) => {
      a = !0;
      const [p, I] = yl(g, t, !0);
      ae(i, p), I && r.push(...I);
    };
    !s && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!l && !a)
    return Y(e) && n.set(e, vt), vt;
  if (A(l))
    for (let h = 0; h < l.length; h++) {
      const g = Ue(l[h]);
      to(g) && (i[g] = Z);
    }
  else if (l)
    for (const h in l) {
      const g = Ue(h);
      if (to(g)) {
        const p = l[h], I = i[g] = A(p) || k(p) ? { type: p } : ae({}, p);
        if (I) {
          const H = oo(Boolean, I.type), B = oo(String, I.type);
          I[
            0
            /* shouldCast */
          ] = H > -1, I[
            1
            /* shouldCastTrue */
          ] = B < 0 || H < B, (H > -1 || x(I, "default")) && r.push(g);
        }
      }
    }
  const d = [i, r];
  return Y(e) && n.set(e, d), d;
}
function to(e) {
  return e[0] !== "$" && !Mt(e);
}
function so(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function no(e, t) {
  return so(e) === so(t);
}
function oo(e, t) {
  return A(t) ? t.findIndex((s) => no(s, e)) : k(t) && no(t, e) ? 0 : -1;
}
const bl = (e) => e[0] === "_" || e === "$stable", En = (e) => A(e) ? e.map(Ne) : [Ne(e)], fr = (e, t, s) => {
  if (t._n)
    return t;
  const n = en((...o) => En(t(...o)), s);
  return n._c = !1, n;
}, vl = (e, t, s) => {
  const n = e._ctx;
  for (const o in e) {
    if (bl(o))
      continue;
    const l = e[o];
    if (k(l))
      t[o] = fr(o, l, n);
    else if (l != null) {
      const i = En(l);
      t[o] = () => i;
    }
  }
}, $l = (e, t) => {
  const s = En(t);
  e.slots.default = () => s;
}, dr = (e, t) => {
  const s = e.slots = ml();
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (ae(s, t), Ao(s, "_", n, !0)) : vl(t, s);
  } else
    t && $l(e, t);
}, hr = (e, t, s) => {
  const { vnode: n, slots: o } = e;
  let l = !0, i = Z;
  if (n.shapeFlag & 32) {
    const r = t._;
    r ? s && r === 1 ? l = !1 : (ae(o, t), !s && r === 1 && delete o._) : (l = !t.$stable, vl(t, o)), i = t;
  } else
    t && ($l(e, t), i = { default: 1 });
  if (l)
    for (const r in o)
      !bl(r) && i[r] == null && delete o[r];
};
function an(e, t, s, n, o = !1) {
  if (A(e)) {
    e.forEach(
      (p, I) => an(
        p,
        t && (A(t) ? t[I] : t),
        s,
        n,
        o
      )
    );
    return;
  }
  if (rs(n) && !o)
    return;
  const l = n.shapeFlag & 4 ? As(n.component) || n.component.proxy : n.el, i = o ? null : l, { i: r, r: a } = e, d = t && t.r, h = r.refs === Z ? r.refs = {} : r.refs, g = r.setupState;
  if (d != null && d !== a && (ce(d) ? (h[d] = null, x(g, d) && (g[d] = null)) : Te(d) && (d.value = null)), k(a))
    tt(a, r, 12, [i, h]);
  else {
    const p = ce(a), I = Te(a);
    if (p || I) {
      const H = () => {
        if (e.f) {
          const B = p ? x(g, a) ? g[a] : h[a] : a.value;
          o ? A(B) && pn(B, l) : A(B) ? B.includes(l) || B.push(l) : p ? (h[a] = [l], x(g, a) && (g[a] = h[a])) : (a.value = [l], e.k && (h[e.k] = a.value));
        } else
          p ? (h[a] = i, x(g, a) && (g[a] = i)) : I && (a.value = i, e.k && (h[e.k] = i));
      };
      i ? (H.id = -1, ve(H, s)) : H();
    }
  }
}
const ve = Hi;
function pr(e) {
  return mr(e);
}
function mr(e, t) {
  const s = Fo();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: o,
    patchProp: l,
    createElement: i,
    createText: r,
    createComment: a,
    setText: d,
    setElementText: h,
    parentNode: g,
    nextSibling: p,
    setScopeId: I = Ee,
    insertStaticContent: H
  } = e, B = (u, f, m, _ = null, y = null, S = null, T = void 0, $ = null, w = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !ht(u, f) && (_ = Jt(u), Ve(u, y, S, !0), u = null), f.patchFlag === -2 && (w = !1, f.dynamicChildren = null);
    const { type: v, ref: P, shapeFlag: F } = f;
    switch (v) {
      case Ls:
        oe(u, f, m, _);
        break;
      case Ae:
        J(u, f, m, _);
        break;
      case cs:
        u == null && ee(f, m, _, T);
        break;
      case U:
        L(
          u,
          f,
          m,
          _,
          y,
          S,
          T,
          $,
          w
        );
        break;
      default:
        F & 1 ? le(
          u,
          f,
          m,
          _,
          y,
          S,
          T,
          $,
          w
        ) : F & 6 ? te(
          u,
          f,
          m,
          _,
          y,
          S,
          T,
          $,
          w
        ) : (F & 64 || F & 128) && v.process(
          u,
          f,
          m,
          _,
          y,
          S,
          T,
          $,
          w,
          At
        );
    }
    P != null && y && an(P, u && u.ref, S, f || u, !f);
  }, oe = (u, f, m, _) => {
    if (u == null)
      n(
        f.el = r(f.children),
        m,
        _
      );
    else {
      const y = f.el = u.el;
      f.children !== u.children && d(y, f.children);
    }
  }, J = (u, f, m, _) => {
    u == null ? n(
      f.el = a(f.children || ""),
      m,
      _
    ) : f.el = u.el;
  }, ee = (u, f, m, _) => {
    [u.el, u.anchor] = H(
      u.children,
      f,
      m,
      _,
      u.el,
      u.anchor
    );
  }, j = ({ el: u, anchor: f }, m, _) => {
    let y;
    for (; u && u !== f; )
      y = p(u), n(u, m, _), u = y;
    n(f, m, _);
  }, z = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = p(u), o(u), u = m;
    o(f);
  }, le = (u, f, m, _, y, S, T, $, w) => {
    f.type === "svg" ? T = "svg" : f.type === "math" && (T = "mathml"), u == null ? N(
      f,
      m,
      _,
      y,
      S,
      T,
      $,
      w
    ) : ie(
      u,
      f,
      y,
      S,
      T,
      $,
      w
    );
  }, N = (u, f, m, _, y, S, T, $) => {
    let w, v;
    const { props: P, shapeFlag: F, transition: E, dirs: O } = u;
    if (w = u.el = i(
      u.type,
      S,
      P && P.is,
      P
    ), F & 8 ? h(w, u.children) : F & 16 && M(
      u.children,
      w,
      null,
      _,
      y,
      js(u, S),
      T,
      $
    ), O && at(u, null, _, "created"), _e(w, u, u.scopeId, T, _), P) {
      for (const q in P)
        q !== "value" && !Mt(q) && l(
          w,
          q,
          null,
          P[q],
          S,
          u.children,
          _,
          y,
          je
        );
      "value" in P && l(w, "value", null, P.value, S), (v = P.onVnodeBeforeMount) && Be(v, _, u);
    }
    O && at(u, null, _, "beforeMount");
    const D = gr(y, E);
    D && E.beforeEnter(w), n(w, f, m), ((v = P && P.onVnodeMounted) || D || O) && ve(() => {
      v && Be(v, _, u), D && E.enter(w), O && at(u, null, _, "mounted");
    }, y);
  }, _e = (u, f, m, _, y) => {
    if (m && I(u, m), _)
      for (let S = 0; S < _.length; S++)
        I(u, _[S]);
    if (y) {
      let S = y.subTree;
      if (f === S) {
        const T = y.vnode;
        _e(
          u,
          T,
          T.scopeId,
          T.slotScopeIds,
          y.parent
        );
      }
    }
  }, M = (u, f, m, _, y, S, T, $, w = 0) => {
    for (let v = w; v < u.length; v++) {
      const P = u[v] = $ ? Ze(u[v]) : Ne(u[v]);
      B(
        null,
        P,
        f,
        m,
        _,
        y,
        S,
        T,
        $
      );
    }
  }, ie = (u, f, m, _, y, S, T) => {
    const $ = f.el = u.el;
    let { patchFlag: w, dynamicChildren: v, dirs: P } = f;
    w |= u.patchFlag & 16;
    const F = u.props || Z, E = f.props || Z;
    let O;
    if (m && ct(m, !1), (O = E.onVnodeBeforeUpdate) && Be(O, m, f, u), P && at(f, u, m, "beforeUpdate"), m && ct(m, !0), v ? X(
      u.dynamicChildren,
      v,
      $,
      m,
      _,
      js(f, y),
      S
    ) : T || G(
      u,
      f,
      $,
      null,
      m,
      _,
      js(f, y),
      S,
      !1
    ), w > 0) {
      if (w & 16)
        he(
          $,
          f,
          F,
          E,
          m,
          _,
          y
        );
      else if (w & 2 && F.class !== E.class && l($, "class", null, E.class, y), w & 4 && l($, "style", F.style, E.style, y), w & 8) {
        const D = f.dynamicProps;
        for (let q = 0; q < D.length; q++) {
          const Q = D[q], fe = F[Q], Oe = E[Q];
          (Oe !== fe || Q === "value") && l(
            $,
            Q,
            fe,
            Oe,
            y,
            u.children,
            m,
            _,
            je
          );
        }
      }
      w & 1 && u.children !== f.children && h($, f.children);
    } else
      !T && v == null && he(
        $,
        f,
        F,
        E,
        m,
        _,
        y
      );
    ((O = E.onVnodeUpdated) || P) && ve(() => {
      O && Be(O, m, f, u), P && at(f, u, m, "updated");
    }, _);
  }, X = (u, f, m, _, y, S, T) => {
    for (let $ = 0; $ < f.length; $++) {
      const w = u[$], v = f[$], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === U || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ht(w, v) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 70) ? g(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      B(
        w,
        v,
        P,
        null,
        _,
        y,
        S,
        T,
        !0
      );
    }
  }, he = (u, f, m, _, y, S, T) => {
    if (m !== _) {
      if (m !== Z)
        for (const $ in m)
          !Mt($) && !($ in _) && l(
            u,
            $,
            m[$],
            null,
            T,
            f.children,
            y,
            S,
            je
          );
      for (const $ in _) {
        if (Mt($))
          continue;
        const w = _[$], v = m[$];
        w !== v && $ !== "value" && l(
          u,
          $,
          v,
          w,
          T,
          f.children,
          y,
          S,
          je
        );
      }
      "value" in _ && l(u, "value", m.value, _.value, T);
    }
  }, L = (u, f, m, _, y, S, T, $, w) => {
    const v = f.el = u ? u.el : r(""), P = f.anchor = u ? u.anchor : r("");
    let { patchFlag: F, dynamicChildren: E, slotScopeIds: O } = f;
    O && ($ = $ ? $.concat(O) : O), u == null ? (n(v, m, _), n(P, m, _), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
      P,
      y,
      S,
      T,
      $,
      w
    )) : F > 0 && F & 64 && E && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (X(
      u.dynamicChildren,
      E,
      m,
      y,
      S,
      T,
      $
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || y && f === y.subTree) && Sl(
      u,
      f,
      !0
      /* shallow */
    )) : G(
      u,
      f,
      m,
      P,
      y,
      S,
      T,
      $,
      w
    );
  }, te = (u, f, m, _, y, S, T, $, w) => {
    f.slotScopeIds = $, u == null ? f.shapeFlag & 512 ? y.ctx.activate(
      f,
      m,
      _,
      T,
      w
    ) : Ce(
      f,
      m,
      _,
      y,
      S,
      T,
      w
    ) : Et(u, f, w);
  }, Ce = (u, f, m, _, y, S, T) => {
    const $ = u.component = Pr(
      u,
      _,
      y
    );
    if (Ps(u) && ($.ctx.renderer = At), Lr($), $.asyncDep) {
      if (y && y.registerDep($, ue), !u.el) {
        const w = $.subTree = V(Ae);
        J(null, w, f, m);
      }
    } else
      ue(
        $,
        u,
        f,
        m,
        y,
        S,
        T
      );
  }, Et = (u, f, m) => {
    const _ = f.component = u.component;
    if (Fi(u, f, m))
      if (_.asyncDep && !_.asyncResolved) {
        se(_, f, m);
        return;
      } else
        _.next = f, Pi(_.update), _.effect.dirty = !0, _.update();
    else
      f.el = u.el, _.vnode = f;
  }, ue = (u, f, m, _, y, S, T) => {
    const $ = () => {
      if (u.isMounted) {
        let { next: P, bu: F, u: E, parent: O, vnode: D } = u;
        {
          const bt = Cl(u);
          if (bt) {
            P && (P.el = D.el, se(u, P, T)), bt.asyncDep.then(() => {
              u.isUnmounted || $();
            });
            return;
          }
        }
        let q = P, Q;
        ct(u, !1), P ? (P.el = D.el, se(u, P, T)) : P = D, F && is(F), (Q = P.props && P.props.onVnodeBeforeUpdate) && Be(Q, O, P, D), ct(u, !0);
        const fe = Bs(u), Oe = u.subTree;
        u.subTree = fe, B(
          Oe,
          fe,
          // parent may have changed if it's in a teleport
          g(Oe.el),
          // anchor may have changed if it's in a fragment
          Jt(Oe),
          u,
          y,
          S
        ), P.el = fe.el, q === null && Oi(u, fe.el), E && ve(E, y), (Q = P.props && P.props.onVnodeUpdated) && ve(
          () => Be(Q, O, P, D),
          y
        );
      } else {
        let P;
        const { el: F, props: E } = f, { bm: O, m: D, parent: q } = u, Q = rs(f);
        if (ct(u, !1), O && is(O), !Q && (P = E && E.onVnodeBeforeMount) && Be(P, q, f), ct(u, !0), F && kn) {
          const fe = () => {
            u.subTree = Bs(u), kn(
              F,
              u.subTree,
              u,
              y,
              null
            );
          };
          Q ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !u.isUnmounted && fe()
          ) : fe();
        } else {
          const fe = u.subTree = Bs(u);
          B(
            null,
            fe,
            m,
            _,
            u,
            y,
            S
          ), f.el = fe.el;
        }
        if (D && ve(D, y), !Q && (P = E && E.onVnodeMounted)) {
          const fe = f;
          ve(
            () => Be(P, q, fe),
            y
          );
        }
        (f.shapeFlag & 256 || q && rs(q.vnode) && q.vnode.shapeFlag & 256) && u.a && ve(u.a, y), u.isMounted = !0, f = m = _ = null;
      }
    }, w = u.effect = new _n(
      $,
      Ee,
      () => In(v),
      u.scope
      // track it in component's effect scope
    ), v = u.update = () => {
      w.dirty && w.run();
    };
    v.id = u.uid, ct(u, !0), v();
  }, se = (u, f, m) => {
    f.component = u;
    const _ = u.vnode.props;
    u.vnode = f, u.next = null, ur(u, f.props, _, m), hr(u, f.children, m), nt(), qn(u), ot();
  }, G = (u, f, m, _, y, S, T, $, w = !1) => {
    const v = u && u.children, P = u ? u.shapeFlag : 0, F = f.children, { patchFlag: E, shapeFlag: O } = f;
    if (E > 0) {
      if (E & 128) {
        Gt(
          v,
          F,
          m,
          _,
          y,
          S,
          T,
          $,
          w
        );
        return;
      } else if (E & 256) {
        it(
          v,
          F,
          m,
          _,
          y,
          S,
          T,
          $,
          w
        );
        return;
      }
    }
    O & 8 ? (P & 16 && je(v, y, S), F !== v && h(m, F)) : P & 16 ? O & 16 ? Gt(
      v,
      F,
      m,
      _,
      y,
      S,
      T,
      $,
      w
    ) : je(v, y, S, !0) : (P & 8 && h(m, ""), O & 16 && M(
      F,
      m,
      _,
      y,
      S,
      T,
      $,
      w
    ));
  }, it = (u, f, m, _, y, S, T, $, w) => {
    u = u || vt, f = f || vt;
    const v = u.length, P = f.length, F = Math.min(v, P);
    let E;
    for (E = 0; E < F; E++) {
      const O = f[E] = w ? Ze(f[E]) : Ne(f[E]);
      B(
        u[E],
        O,
        m,
        null,
        y,
        S,
        T,
        $,
        w
      );
    }
    v > P ? je(
      u,
      y,
      S,
      !0,
      !1,
      F
    ) : M(
      f,
      m,
      _,
      y,
      S,
      T,
      $,
      w,
      F
    );
  }, Gt = (u, f, m, _, y, S, T, $, w) => {
    let v = 0;
    const P = f.length;
    let F = u.length - 1, E = P - 1;
    for (; v <= F && v <= E; ) {
      const O = u[v], D = f[v] = w ? Ze(f[v]) : Ne(f[v]);
      if (ht(O, D))
        B(
          O,
          D,
          m,
          null,
          y,
          S,
          T,
          $,
          w
        );
      else
        break;
      v++;
    }
    for (; v <= F && v <= E; ) {
      const O = u[F], D = f[E] = w ? Ze(f[E]) : Ne(f[E]);
      if (ht(O, D))
        B(
          O,
          D,
          m,
          null,
          y,
          S,
          T,
          $,
          w
        );
      else
        break;
      F--, E--;
    }
    if (v > F) {
      if (v <= E) {
        const O = E + 1, D = O < P ? f[O].el : _;
        for (; v <= E; )
          B(
            null,
            f[v] = w ? Ze(f[v]) : Ne(f[v]),
            m,
            D,
            y,
            S,
            T,
            $,
            w
          ), v++;
      }
    } else if (v > E)
      for (; v <= F; )
        Ve(u[v], y, S, !0), v++;
    else {
      const O = v, D = v, q = /* @__PURE__ */ new Map();
      for (v = D; v <= E; v++) {
        const we = f[v] = w ? Ze(f[v]) : Ne(f[v]);
        we.key != null && q.set(we.key, v);
      }
      let Q, fe = 0;
      const Oe = E - D + 1;
      let bt = !1, Mn = 0;
      const Rt = new Array(Oe);
      for (v = 0; v < Oe; v++)
        Rt[v] = 0;
      for (v = O; v <= F; v++) {
        const we = u[v];
        if (fe >= Oe) {
          Ve(we, y, S, !0);
          continue;
        }
        let He;
        if (we.key != null)
          He = q.get(we.key);
        else
          for (Q = D; Q <= E; Q++)
            if (Rt[Q - D] === 0 && ht(we, f[Q])) {
              He = Q;
              break;
            }
        He === void 0 ? Ve(we, y, S, !0) : (Rt[He - D] = v + 1, He >= Mn ? Mn = He : bt = !0, B(
          we,
          f[He],
          m,
          null,
          y,
          S,
          T,
          $,
          w
        ), fe++);
      }
      const Vn = bt ? _r(Rt) : vt;
      for (Q = Vn.length - 1, v = Oe - 1; v >= 0; v--) {
        const we = D + v, He = f[we], Hn = we + 1 < P ? f[we + 1].el : _;
        Rt[v] === 0 ? B(
          null,
          He,
          m,
          Hn,
          y,
          S,
          T,
          $,
          w
        ) : bt && (Q < 0 || v !== Vn[Q] ? rt(He, m, Hn, 2) : Q--);
      }
    }
  }, rt = (u, f, m, _, y = null) => {
    const { el: S, type: T, transition: $, children: w, shapeFlag: v } = u;
    if (v & 6) {
      rt(u.component.subTree, f, m, _);
      return;
    }
    if (v & 128) {
      u.suspense.move(f, m, _);
      return;
    }
    if (v & 64) {
      T.move(u, f, m, At);
      return;
    }
    if (T === U) {
      n(S, f, m);
      for (let F = 0; F < w.length; F++)
        rt(w[F], f, m, _);
      n(u.anchor, f, m);
      return;
    }
    if (T === cs) {
      j(u, f, m);
      return;
    }
    if (_ !== 2 && v & 1 && $)
      if (_ === 0)
        $.beforeEnter(S), n(S, f, m), ve(() => $.enter(S), y);
      else {
        const { leave: F, delayLeave: E, afterLeave: O } = $, D = () => n(S, f, m), q = () => {
          F(S, () => {
            D(), O && O();
          });
        };
        E ? E(S, D, q) : q();
      }
    else
      n(S, f, m);
  }, Ve = (u, f, m, _ = !1, y = !1) => {
    const {
      type: S,
      props: T,
      ref: $,
      children: w,
      dynamicChildren: v,
      shapeFlag: P,
      patchFlag: F,
      dirs: E
    } = u;
    if ($ != null && an($, null, m, u, !0), P & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const O = P & 1 && E, D = !rs(u);
    let q;
    if (D && (q = T && T.onVnodeBeforeUnmount) && Be(q, f, u), P & 6)
      Vl(u.component, m, _);
    else {
      if (P & 128) {
        u.suspense.unmount(m, _);
        return;
      }
      O && at(u, null, f, "beforeUnmount"), P & 64 ? u.type.remove(
        u,
        f,
        m,
        y,
        At,
        _
      ) : v && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (S !== U || F > 0 && F & 64) ? je(
        v,
        f,
        m,
        !1,
        !0
      ) : (S === U && F & 384 || !y && P & 16) && je(w, f, m), _ && Rn(u);
    }
    (D && (q = T && T.onVnodeUnmounted) || O) && ve(() => {
      q && Be(q, f, u), O && at(u, null, f, "unmounted");
    }, m);
  }, Rn = (u) => {
    const { type: f, el: m, anchor: _, transition: y } = u;
    if (f === U) {
      Ml(m, _);
      return;
    }
    if (f === cs) {
      z(u);
      return;
    }
    const S = () => {
      o(m), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (u.shapeFlag & 1 && y && !y.persisted) {
      const { leave: T, delayLeave: $ } = y, w = () => T(m, S);
      $ ? $(u.el, S, w) : w();
    } else
      S();
  }, Ml = (u, f) => {
    let m;
    for (; u !== f; )
      m = p(u), o(u), u = m;
    o(f);
  }, Vl = (u, f, m) => {
    const { bum: _, scope: y, update: S, subTree: T, um: $ } = u;
    _ && is(_), y.stop(), S && (S.active = !1, Ve(T, u, f, m)), $ && ve($, f), ve(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, je = (u, f, m, _ = !1, y = !1, S = 0) => {
    for (let T = S; T < u.length; T++)
      Ve(u[T], f, m, _, y);
  }, Jt = (u) => u.shapeFlag & 6 ? Jt(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : p(u.anchor || u.el);
  let ks = !1;
  const Fn = (u, f, m) => {
    u == null ? f._vnode && Ve(f._vnode, null, null, !0) : B(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), ks || (ks = !0, qn(), Qo(), ks = !1), f._vnode = u;
  }, At = {
    p: B,
    um: Ve,
    m: rt,
    r: Rn,
    mt: Ce,
    mc: M,
    pc: G,
    pbc: X,
    n: Jt,
    o: e
  };
  let On, kn;
  return {
    render: Fn,
    hydrate: On,
    createApp: rr(Fn, On)
  };
}
function js({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ct({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s;
}
function gr(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Sl(e, t, s = !1) {
  const n = e.children, o = t.children;
  if (A(n) && A(o))
    for (let l = 0; l < n.length; l++) {
      const i = n[l];
      let r = o[l];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = o[l] = Ze(o[l]), r.el = i.el), s || Sl(i, r)), r.type === Ls && (r.el = i.el);
    }
}
function _r(e) {
  const t = e.slice(), s = [0];
  let n, o, l, i, r;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const d = e[n];
    if (d !== 0) {
      if (o = s[s.length - 1], e[o] < d) {
        t[n] = o, s.push(n);
        continue;
      }
      for (l = 0, i = s.length - 1; l < i; )
        r = l + i >> 1, e[s[r]] < d ? l = r + 1 : i = r;
      d < e[s[l]] && (l > 0 && (t[n] = s[l - 1]), s[l] = n);
    }
  }
  for (l = s.length, i = s[l - 1]; l-- > 0; )
    s[l] = i, i = t[i];
  return s;
}
function Cl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Cl(t);
}
const yr = (e) => e.__isTeleport, U = Symbol.for("v-fgt"), Ls = Symbol.for("v-txt"), Ae = Symbol.for("v-cmt"), cs = Symbol.for("v-stc"), Nt = [];
let Me = null;
function b(e = !1) {
  Nt.push(Me = e ? null : []);
}
function br() {
  Nt.pop(), Me = Nt[Nt.length - 1] || null;
}
let jt = 1;
function lo(e) {
  jt += e;
}
function wl(e) {
  return e.dynamicChildren = jt > 0 ? Me || vt : null, br(), jt > 0 && Me && Me.push(e), e;
}
function C(e, t, s, n, o, l) {
  return wl(
    c(
      e,
      t,
      s,
      n,
      o,
      l,
      !0
    )
  );
}
function pe(e, t, s, n, o) {
  return wl(
    V(
      e,
      t,
      s,
      n,
      o,
      !0
    )
  );
}
function cn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ht(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Tl = ({ key: e }) => e ?? null, us = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ce(e) || Te(e) || k(e) ? { i: be, r: e, k: t, f: !!s } : e : null);
function c(e, t = null, s = null, n = 0, o = null, l = e === U ? 0 : 1, i = !1, r = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Tl(t),
    ref: t && us(t),
    scopeId: Ts,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: l,
    patchFlag: n,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: be
  };
  return r ? (An(a, s), l & 128 && e.normalize(a)) : s && (a.shapeFlag |= ce(s) ? 8 : 16), jt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Me.push(a), a;
}
const V = vr;
function vr(e, t = null, s = null, n = 0, o = null, l = !1) {
  if ((!e || e === ki) && (e = Ae), cn(e)) {
    const r = st(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && An(r, s), jt > 0 && !l && Me && (r.shapeFlag & 6 ? Me[Me.indexOf(e)] = r : Me.push(r)), r.patchFlag |= -2, r;
  }
  if (Or(e) && (e = e.__vccOpts), t) {
    t = $r(t);
    let { class: r, style: a } = t;
    r && !ce(r) && (t.class = $s(r)), Y(a) && (qo(a) && !A(a) && (a = ae({}, a)), t.style = Wt(a));
  }
  const i = ce(e) ? 1 : Vi(e) ? 128 : yr(e) ? 64 : Y(e) ? 4 : k(e) ? 2 : 0;
  return c(
    e,
    t,
    s,
    n,
    o,
    i,
    l,
    !0
  );
}
function $r(e) {
  return e ? qo(e) || gl(e) ? ae({}, e) : e : null;
}
function st(e, t, s = !1, n = !1) {
  const { props: o, ref: l, patchFlag: i, children: r, transition: a } = e, d = t ? Cr(o || {}, t) : o, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Tl(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && l ? A(l) ? l.concat(us(t)) : [l, us(t)] : us(t)
    ) : l,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== U ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && st(e.ssContent),
    ssFallback: e.ssFallback && st(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && n && (h.transition = a.clone(h)), h;
}
function re(e = " ", t = 0) {
  return V(Ls, null, e, t);
}
function Sr(e, t) {
  const s = V(cs, null, e);
  return s.staticCount = t, s;
}
function ne(e = "", t = !1) {
  return t ? (b(), pe(Ae, null, e)) : V(Ae, null, e);
}
function Ne(e) {
  return e == null || typeof e == "boolean" ? V(Ae) : A(e) ? V(
    U,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ze(e) : V(Ls, null, String(e));
}
function Ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : st(e);
}
function An(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (A(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), An(e, o()), o._c && (o._d = !0));
      return;
    } else {
      s = 32;
      const o = t._;
      !o && !gl(t) ? t._ctx = be : o === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    k(t) ? (t = { default: t, _ctx: be }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [re(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Cr(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const o in n)
      if (o === "class")
        t.class !== n.class && (t.class = $s([t.class, n.class]));
      else if (o === "style")
        t.style = Wt([t.style, n.style]);
      else if (ys(o)) {
        const l = t[o], i = n[o];
        i && l !== i && !(A(l) && l.includes(i)) && (t[o] = l ? [].concat(l, i) : i);
      } else
        o !== "" && (t[o] = n[o]);
  }
  return t;
}
function Be(e, t, s, n = null) {
  Re(e, t, 7, [
    s,
    n
  ]);
}
const wr = hl();
let Tr = 0;
function Pr(e, t, s) {
  const n = e.type, o = (t ? t.appContext : e.appContext) || wr, l = {
    uid: Tr++,
    vnode: e,
    type: n,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Jl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: yl(n, o),
    emitsOptions: tl(n, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Z,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Z,
    data: Z,
    props: Z,
    attrs: Z,
    slots: Z,
    refs: Z,
    setupState: Z,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = Ei.bind(null, l), e.ce && e.ce(l), l;
}
let de = null;
const Ir = () => de || be;
let gs, un;
{
  const e = Fo(), t = (s, n) => {
    let o;
    return (o = e[s]) || (o = e[s] = []), o.push(n), (l) => {
      o.length > 1 ? o.forEach((i) => i(l)) : o[0](l);
    };
  };
  gs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => de = s
  ), un = t(
    "__VUE_SSR_SETTERS__",
    (s) => Es = s
  );
}
const zt = (e) => {
  const t = de;
  return gs(e), e.scope.on(), () => {
    e.scope.off(), gs(t);
  };
}, io = () => {
  de && de.scope.off(), gs(null);
};
function Pl(e) {
  return e.vnode.shapeFlag & 4;
}
let Es = !1;
function Lr(e, t = !1) {
  t && un(t);
  const { props: s, children: n } = e.vnode, o = Pl(e);
  cr(e, s, o, t), dr(e, n);
  const l = o ? Er(e, t) : void 0;
  return t && un(!1), l;
}
function Er(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, er);
  const { setup: n } = s;
  if (n) {
    const o = e.setupContext = n.length > 1 ? Rr(e) : null, l = zt(e);
    nt();
    const i = tt(
      n,
      e,
      0,
      [
        e.props,
        o
      ]
    );
    if (ot(), l(), Io(i)) {
      if (i.then(io, io), t)
        return i.then((r) => {
          ro(e, r, t);
        }).catch((r) => {
          Cs(r, e, 0);
        });
      e.asyncDep = i;
    } else
      ro(e, i, t);
  } else
    Il(e, t);
}
function ro(e, t, s) {
  k(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) && (e.setupState = Go(t)), Il(e, s);
}
let ao;
function Il(e, t, s) {
  const n = e.type;
  if (!e.render) {
    if (!t && ao && !n.render) {
      const o = n.template || Ln(e).template;
      if (o) {
        const { isCustomElement: l, compilerOptions: i } = e.appContext.config, { delimiters: r, compilerOptions: a } = n, d = ae(
          ae(
            {
              isCustomElement: l,
              delimiters: r
            },
            i
          ),
          a
        );
        n.render = ao(o, d);
      }
    }
    e.render = n.render || Ee;
  }
  {
    const o = zt(e);
    nt();
    try {
      tr(e);
    } finally {
      ot(), o();
    }
  }
}
const Ar = {
  get(e, t) {
    return Se(e, "get", ""), e[t];
  }
};
function Rr(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ar),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function As(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Go(bi(e.exposed)), {
      get(t, s) {
        if (s in t)
          return t[s];
        if (s in Ht)
          return Ht[s](e);
      },
      has(t, s) {
        return s in t || s in Ht;
      }
    }));
}
function Fr(e, t = !0) {
  return k(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Or(e) {
  return k(e) && "__vccOpts" in e;
}
const kr = (e, t) => vi(e, t, Es);
function Ll(e, t, s) {
  const n = arguments.length;
  return n === 2 ? Y(t) && !A(t) ? cn(t) ? V(e, null, [t]) : V(e, t) : V(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && cn(s) && (s = [s]), V(e, t, s));
}
const Mr = "3.4.26";
/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Vr = "http://www.w3.org/2000/svg", Hr = "http://www.w3.org/1998/Math/MathML", Qe = typeof document < "u" ? document : null, co = Qe && /* @__PURE__ */ Qe.createElement("template"), Br = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const o = t === "svg" ? Qe.createElementNS(Vr, e) : t === "mathml" ? Qe.createElementNS(Hr, e) : Qe.createElement(e, s ? { is: s } : void 0);
    return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o;
  },
  createText: (e) => Qe.createTextNode(e),
  createComment: (e) => Qe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Qe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, o, l) {
    const i = s ? s.previousSibling : t.lastChild;
    if (o && (o === l || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), s), !(o === l || !(o = o.nextSibling)); )
        ;
    else {
      co.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
      const r = co.content;
      if (n === "svg" || n === "mathml") {
        const a = r.firstChild;
        for (; a.firstChild; )
          r.appendChild(a.firstChild);
        r.removeChild(a);
      }
      t.insertBefore(r, s);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Ye = "transition", Ot = "animation", xt = Symbol("_vtc"), _s = (e, { slots: t }) => Ll(xi, Nr(e), t);
_s.displayName = "Transition";
const El = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
_s.props = /* @__PURE__ */ ae(
  {},
  ll,
  El
);
const ut = (e, t = []) => {
  A(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, uo = (e) => e ? A(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Nr(e) {
  const t = {};
  for (const L in e)
    L in El || (t[L] = e[L]);
  if (e.css === !1)
    return t;
  const {
    name: s = "v",
    type: n,
    duration: o,
    enterFromClass: l = `${s}-enter-from`,
    enterActiveClass: i = `${s}-enter-active`,
    enterToClass: r = `${s}-enter-to`,
    appearFromClass: a = l,
    appearActiveClass: d = i,
    appearToClass: h = r,
    leaveFromClass: g = `${s}-leave-from`,
    leaveActiveClass: p = `${s}-leave-active`,
    leaveToClass: I = `${s}-leave-to`
  } = e, H = Dr(o), B = H && H[0], oe = H && H[1], {
    onBeforeEnter: J,
    onEnter: ee,
    onEnterCancelled: j,
    onLeave: z,
    onLeaveCancelled: le,
    onBeforeAppear: N = J,
    onAppear: _e = ee,
    onAppearCancelled: M = j
  } = t, ie = (L, te, Ce) => {
    ft(L, te ? h : r), ft(L, te ? d : i), Ce && Ce();
  }, X = (L, te) => {
    L._isLeaving = !1, ft(L, g), ft(L, I), ft(L, p), te && te();
  }, he = (L) => (te, Ce) => {
    const Et = L ? _e : ee, ue = () => ie(te, L, Ce);
    ut(Et, [te, ue]), fo(() => {
      ft(te, L ? a : l), Ge(te, L ? h : r), uo(Et) || ho(te, n, B, ue);
    });
  };
  return ae(t, {
    onBeforeEnter(L) {
      ut(J, [L]), Ge(L, l), Ge(L, i);
    },
    onBeforeAppear(L) {
      ut(N, [L]), Ge(L, a), Ge(L, d);
    },
    onEnter: he(!1),
    onAppear: he(!0),
    onLeave(L, te) {
      L._isLeaving = !0;
      const Ce = () => X(L, te);
      Ge(L, g), Ge(L, p), xr(), fo(() => {
        L._isLeaving && (ft(L, g), Ge(L, I), uo(z) || ho(L, n, oe, Ce));
      }), ut(z, [L, Ce]);
    },
    onEnterCancelled(L) {
      ie(L, !1), ut(j, [L]);
    },
    onAppearCancelled(L) {
      ie(L, !0), ut(M, [L]);
    },
    onLeaveCancelled(L) {
      X(L), ut(le, [L]);
    }
  });
}
function Dr(e) {
  if (e == null)
    return null;
  if (Y(e))
    return [xs(e.enter), xs(e.leave)];
  {
    const t = xs(e);
    return [t, t];
  }
}
function xs(e) {
  return jl(e);
}
function Ge(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[xt] || (e[xt] = /* @__PURE__ */ new Set())).add(t);
}
function ft(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[xt];
  s && (s.delete(t), s.size || (e[xt] = void 0));
}
function fo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ur = 0;
function ho(e, t, s, n) {
  const o = e._endId = ++Ur, l = () => {
    o === e._endId && n();
  };
  if (s)
    return setTimeout(l, s);
  const { type: i, timeout: r, propCount: a } = jr(e, t);
  if (!i)
    return n();
  const d = i + "end";
  let h = 0;
  const g = () => {
    e.removeEventListener(d, p), l();
  }, p = (I) => {
    I.target === e && ++h >= a && g();
  };
  setTimeout(() => {
    h < a && g();
  }, r + 1), e.addEventListener(d, p);
}
function jr(e, t) {
  const s = window.getComputedStyle(e), n = (H) => (s[H] || "").split(", "), o = n(`${Ye}Delay`), l = n(`${Ye}Duration`), i = po(o, l), r = n(`${Ot}Delay`), a = n(`${Ot}Duration`), d = po(r, a);
  let h = null, g = 0, p = 0;
  t === Ye ? i > 0 && (h = Ye, g = i, p = l.length) : t === Ot ? d > 0 && (h = Ot, g = d, p = a.length) : (g = Math.max(i, d), h = g > 0 ? i > d ? Ye : Ot : null, p = h ? h === Ye ? l.length : a.length : 0);
  const I = h === Ye && /\b(transform|all)(,|$)/.test(
    n(`${Ye}Property`).toString()
  );
  return {
    type: h,
    timeout: g,
    propCount: p,
    hasTransform: I
  };
}
function po(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => mo(s) + mo(e[n])));
}
function mo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function xr() {
  return document.body.offsetHeight;
}
function Kr(e, t, s) {
  const n = e[xt];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const go = Symbol("_vod"), Wr = Symbol("_vsh"), zr = Symbol(""), qr = /(^|;)\s*display\s*:/;
function Yr(e, t, s) {
  const n = e.style, o = ce(s);
  let l = !1;
  if (s && !o) {
    if (t)
      if (ce(t))
        for (const i of t.split(";")) {
          const r = i.slice(0, i.indexOf(":")).trim();
          s[r] == null && fs(n, r, "");
        }
      else
        for (const i in t)
          s[i] == null && fs(n, i, "");
    for (const i in s)
      i === "display" && (l = !0), fs(n, i, s[i]);
  } else if (o) {
    if (t !== s) {
      const i = n[zr];
      i && (s += ";" + i), n.cssText = s, l = qr.test(s);
    }
  } else
    t && e.removeAttribute("style");
  go in e && (e[go] = l ? n.display : "", e[Wr] && (n.display = "none"));
}
const _o = /\s*!important$/;
function fs(e, t, s) {
  if (A(s))
    s.forEach((n) => fs(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Gr(e, t);
    _o.test(s) ? e.setProperty(
      Pt(n),
      s.replace(_o, ""),
      "important"
    ) : e[n] = s;
  }
}
const yo = ["Webkit", "Moz", "ms"], Ks = {};
function Gr(e, t) {
  const s = Ks[t];
  if (s)
    return s;
  let n = Ue(t);
  if (n !== "filter" && n in e)
    return Ks[t] = n;
  n = vs(n);
  for (let o = 0; o < yo.length; o++) {
    const l = yo[o] + n;
    if (l in e)
      return Ks[t] = l;
  }
  return t;
}
const bo = "http://www.w3.org/1999/xlink";
function Jr(e, t, s, n, o) {
  if (n && t.startsWith("xlink:"))
    s == null ? e.removeAttributeNS(bo, t.slice(6, t.length)) : e.setAttributeNS(bo, t, s);
  else {
    const l = Yl(t);
    s == null || l && !Oo(s) ? e.removeAttribute(t) : e.setAttribute(t, l ? "" : s);
  }
}
function Xr(e, t, s, n, o, l, i) {
  if (t === "innerHTML" || t === "textContent") {
    n && i(n, o, l), e[t] = s ?? "";
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const d = r === "OPTION" ? e.getAttribute("value") || "" : e.value, h = s ?? "";
    (d !== h || !("_value" in e)) && (e.value = h), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let a = !1;
  if (s === "" || s == null) {
    const d = typeof e[t];
    d === "boolean" ? s = Oo(s) : s == null && d === "string" ? (s = "", a = !0) : d === "number" && (s = 0, a = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  a && e.removeAttribute(t);
}
function Rs(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Zr(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const vo = Symbol("_vei");
function Qr(e, t, s, n, o = null) {
  const l = e[vo] || (e[vo] = {}), i = l[t];
  if (n && i)
    i.value = n;
  else {
    const [r, a] = ea(t);
    if (n) {
      const d = l[t] = na(
        n,
        o
      );
      Rs(e, r, d, a);
    } else
      i && (Zr(e, r, i, a), l[t] = void 0);
  }
}
const $o = /(?:Once|Passive|Capture)$/;
function ea(e) {
  let t;
  if ($o.test(e)) {
    t = {};
    let n;
    for (; n = e.match($o); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Pt(e.slice(2)), t];
}
let Ws = 0;
const ta = /* @__PURE__ */ Promise.resolve(), sa = () => Ws || (ta.then(() => Ws = 0), Ws = Date.now());
function na(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Re(
      oa(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = sa(), s;
}
function oa(e, t) {
  if (A(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (o) => !o._stopped && n && n(o)
    );
  } else
    return t;
}
const So = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, la = (e, t, s, n, o, l, i, r, a) => {
  const d = o === "svg";
  t === "class" ? Kr(e, n, d) : t === "style" ? Yr(e, s, n) : ys(t) ? hn(t) || Qr(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ia(e, t, n, d)) ? Xr(
    e,
    t,
    n,
    l,
    i,
    r,
    a
  ) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Jr(e, t, n, d));
};
function ia(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && So(t) && k(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return So(t) && ce(s) ? !1 : t in e;
}
const Ct = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return A(t) ? (s) => is(t, s) : t;
}, Ke = Symbol("_assign"), ra = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, s) {
    e[Ke] = Ct(s), Rs(e, "change", () => {
      const n = e._modelValue, o = wt(e), l = e.checked, i = e[Ke];
      if (A(n)) {
        const r = gn(n, o), a = r !== -1;
        if (l && !a)
          i(n.concat(o));
        else if (!l && a) {
          const d = [...n];
          d.splice(r, 1), i(d);
        }
      } else if (Tt(n)) {
        const r = new Set(n);
        l ? r.add(o) : r.delete(o), i(r);
      } else
        i(Al(e, l));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Co,
  beforeUpdate(e, t, s) {
    e[Ke] = Ct(s), Co(e, t, s);
  }
};
function Co(e, { value: t, oldValue: s }, n) {
  e._modelValue = t, A(t) ? e.checked = gn(t, n.props.value) > -1 : Tt(t) ? e.checked = t.has(n.props.value) : t !== s && (e.checked = yt(t, Al(e, !0)));
}
const aa = {
  created(e, { value: t }, s) {
    e.checked = yt(t, s.props.value), e[Ke] = Ct(s), Rs(e, "change", () => {
      e[Ke](wt(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: s }, n) {
    e[Ke] = Ct(n), t !== s && (e.checked = yt(t, n.props.value));
  }
}, zs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: s } }, n) {
    const o = Tt(t);
    Rs(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => s ? Ro(wt(i)) : wt(i)
      );
      e[Ke](
        e.multiple ? o ? new Set(l) : l : l[0]
      ), e._assigning = !0, Xo(() => {
        e._assigning = !1;
      });
    }), e[Ke] = Ct(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: s } }) {
    wo(e, t);
  },
  beforeUpdate(e, t, s) {
    e[Ke] = Ct(s);
  },
  updated(e, { value: t, modifiers: { number: s } }) {
    e._assigning || wo(e, t);
  }
};
function wo(e, t, s) {
  const n = e.multiple, o = A(t);
  if (!(n && !o && !Tt(t))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const r = e.options[l], a = wt(r);
      if (n)
        if (o) {
          const d = typeof a;
          d === "string" || d === "number" ? r.selected = t.some((h) => String(h) === String(a)) : r.selected = gn(t, a) > -1;
        } else
          r.selected = t.has(a);
      else if (yt(wt(r), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function wt(e) {
  return "_value" in e ? e._value : e.value;
}
function Al(e, t) {
  const s = t ? "_trueValue" : "_falseValue";
  return s in e ? e[s] : t;
}
const ca = /* @__PURE__ */ ae({ patchProp: la }, Br);
let To;
function ua() {
  return To || (To = pr(ca));
}
const fa = (...e) => {
  const t = ua().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const o = ha(n);
    if (!o)
      return;
    const l = t._component;
    !k(l) && !l.render && !l.template && (l.template = o.innerHTML), o.innerHTML = "";
    const i = s(o, !1, da(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function da(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ha(e) {
  return ce(e) ? document.querySelector(e) : e;
}
const Pe = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, o] of t)
    s[n] = o;
  return s;
}, pa = /* @__PURE__ */ Fe({
  props: {
    pathForm: String
  }
}), qt = (e) => (It("data-v-5f038e28"), e = e(), Lt(), e), ma = { class: "SimulatorStart" }, ga = /* @__PURE__ */ qt(() => /* @__PURE__ */ c("h1", { class: "SimulatorStartHeading" }, "葬儀見積シミュレーション", -1)), _a = { class: "SimulatorStartBody" }, ya = /* @__PURE__ */ qt(() => /* @__PURE__ */ c("p", { class: "SimulatorStartBody__lead" }, " 費用については多くの方が気になるポイント。「自分の家族だったら...」をお試しいただけます。 ", -1)), ba = { class: "SimulatorStartBody__button" }, va = /* @__PURE__ */ qt(() => /* @__PURE__ */ c("p", null, [
  /* @__PURE__ */ c("span", null, [
    /* @__PURE__ */ re("こちらを"),
    /* @__PURE__ */ c("em", null, "タップ")
  ])
], -1)), $a = ["href"], Sa = /* @__PURE__ */ qt(() => /* @__PURE__ */ c("span", null, "かんたんお見積スタート", -1)), Ca = /* @__PURE__ */ qt(() => /* @__PURE__ */ c("small", null, "下記注意文を確認の上はじめる", -1)), wa = [
  Sa,
  Ca
], Ta = /* @__PURE__ */ Sr('<div class="SimulatorStartBody__notes" data-v-5f038e28><h2 data-v-5f038e28>ご注意ください</h2><p data-v-5f038e28> シミュレーションでの価格はあくまでも現行販売コースを前提とした概算となります。実際の施行時の金額に相違があることをご了承ください。また、本シミュレーションでは <em class="red bold" data-v-5f038e28>パルモグループ会員価格を基準に金額を表示します</em>。 詳しくはパルモ葬祭までご連絡ください。 </p></div><div class="SimulatorStartBody__attention" data-v-5f038e28><ul data-v-5f038e28><li data-v-5f038e28> 概算のシミュレーション結果のため、実際の金額・内容とは異なる場合がございます。 </li><li data-v-5f038e28> シミュレーションにて掲示されている価格は予告なしに変更される場合がございます。 </li><li data-v-5f038e28> 写真はプランイメージです。お選びいただく式場、品目により仕様が異なります。 </li><li data-v-5f038e28> シミュレーション結果には、宗教者へのお礼の費用は含まれておりません。 </li><li data-v-5f038e28> 搬送時や火葬場までのご移動に関して、条件に応じて追加費用がかかる場合がございます。 </li></ul></div>', 2);
function Pa(e, t, s, n, o, l) {
  return b(), C("div", ma, [
    ga,
    c("div", _a, [
      ya,
      c("div", ba, [
        va,
        c("a", { href: e.pathForm }, wa, 8, $a)
      ]),
      Ta
    ])
  ]);
}
const Ia = /* @__PURE__ */ Pe(pa, [["render", Pa], ["__scopeId", "data-v-5f038e28"]]), Po = {
  "angle-right-solid": {
    width: 320,
    height: 512,
    path: '<!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>'
  },
  "angle-left-solid": {
    width: 320,
    height: 512,
    path: '<!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>'
  },
  "list-check-solid": {
    width: 512,
    height: 512,
    path: '<!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>'
  },
  "circle-check-solid": {
    width: 512,
    height: 512,
    path: '<!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>'
  },
  "copy-regular": {
    width: 448,
    height: 512,
    path: '<!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/>'
  },
  "share-nodes-solid": {
    width: 448,
    height: 512,
    path: '<!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/>'
  },
  "circle-right-regular": {
    width: 512,
    height: 512,
    path: '<!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z"/>'
  },
  back: {
    width: 16,
    height: 17,
    path: '<path d="M6.40625 1.58752C6.76562 1.74689 7 2.10627 7 2.50002V4.50002H10.5C13.5375 4.50002 16 6.96252 16 10C16 13.5406 13.4531 15.1219 12.8687 15.4406C12.7906 15.4844 12.7031 15.5 12.6156 15.5C12.275 15.5 12 15.2219 12 14.8844C12 14.65 12.1344 14.4344 12.3062 14.275C12.6 14 13 13.45 13 12.5031C13 10.8469 11.6562 9.50314 10 9.50314H7V11.5031C7 11.8969 6.76875 12.2563 6.40625 12.4156C6.04375 12.575 5.625 12.5094 5.33125 12.2469L0.33125 7.74689C0.121875 7.55314 0 7.28439 0 7.00002C0 6.71564 0.121875 6.44689 0.33125 6.25627L5.33125 1.75627C5.625 1.49064 6.04688 1.42502 6.40625 1.58752Z"/>'
  }
}, La = /* @__PURE__ */ Fe({
  props: {
    icon: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      default: ""
    }
  },
  computed: {
    viewBox() {
      const e = Po[this.icon];
      return e ? `0 0 ${e.width} ${e.height}` : void 0;
    },
    html() {
      var e;
      return (e = Po[this.icon]) == null ? void 0 : e.path;
    },
    ariaHidden() {
      return !this.label;
    },
    role() {
      return this.label ? "img" : void 0;
    },
    ariaLabel() {
      return this.label || void 0;
    }
  }
}), Ea = ["icon", "viewBox", "aria-hidden", "role", "aria-label", "innerHTML"];
function Aa(e, t, s, n, o, l) {
  return b(), C("svg", {
    class: "SimulatorIcon",
    icon: e.icon,
    viewBox: e.viewBox,
    "aria-hidden": e.ariaHidden,
    role: e.role,
    "aria-label": e.ariaLabel,
    innerHTML: e.html
  }, null, 8, Ea);
}
const Fs = /* @__PURE__ */ Pe(La, [["render", Aa], ["__scopeId", "data-v-5704c516"]]), Ra = /* @__PURE__ */ Fe({
  props: {
    steps: Array,
    // {title: String, disabled: Boolean}[]
    current: Number
  },
  data() {
    return {
      spTitlesStyle: "",
      resizeObserver: null,
      hoverIndex: -1
    };
  },
  methods: {
    onMouseenter(e) {
      this.steps[e].disabled || (this.hoverIndex = e);
    },
    onMouseleave() {
      this.hoverIndex = -1;
    },
    updateSpTitlesStyle() {
      const e = this.$refs.viewport.offsetWidth, t = this.$refs.spWrap.offsetWidth, s = this.$refs.item[this.current], n = s.offsetLeft, o = s.offsetWidth, l = e / 2 - n - o / 2, i = e - t, r = Math.min(Math.max(i, l), 0);
      this.spTitlesStyle = `translate: ${r}px 0;`;
    }
  },
  watch: {
    current() {
      this.updateSpTitlesStyle();
    }
  },
  mounted() {
    let e = 0;
    this.resizeObserver = new ResizeObserver(() => {
      clearTimeout(e), e = setTimeout(() => {
        this.updateSpTitlesStyle();
      }, 100);
    }).observe(this.$refs.viewport);
  },
  beforeUnmount() {
    this.resizeObserver.disconnect();
  }
}), Fa = {
  class: "SimulatorSteps",
  ref: "viewport"
}, Oa = { class: "SimulatorSteps__numbers" }, ka = ["aria-label", "aria-current", "disabled", "onClick", "onMouseenter", "data-hover"], Ma = ["aria-label", "aria-current", "disabled", "onClick", "onMouseenter", "data-hover"];
function Va(e, t, s, n, o, l) {
  return b(), C("div", Fa, [
    c("div", Oa, [
      (b(!0), C(U, null, Le(e.steps, ({ title: i, disabled: r }, a) => (b(), C("button", {
        key: a,
        "aria-label": i,
        "aria-current": a === e.current ? "step" : !1,
        disabled: r,
        onClick: (d) => e.$emit("click:step", a),
        onMouseenter: (d) => e.onMouseenter(a),
        onMouseleave: t[0] || (t[0] = (...d) => e.onMouseleave && e.onMouseleave(...d)),
        "data-hover": e.hoverIndex === a
      }, R(a + 1), 41, ka))), 128))
    ]),
    c("div", {
      class: "SimulatorSteps__titles",
      ref: "spWrap",
      style: Wt(e.spTitlesStyle)
    }, [
      (b(!0), C(U, null, Le(e.steps, ({ title: i, disabled: r }, a) => (b(), C("button", {
        key: a,
        ref_for: !0,
        ref: "item",
        "aria-label": i,
        "aria-current": a === e.current ? "step" : !1,
        disabled: r,
        onClick: (d) => e.$emit("click:step", a),
        onMouseenter: (d) => e.onMouseenter(a),
        onMouseleave: t[1] || (t[1] = (...d) => e.onMouseleave && e.onMouseleave(...d)),
        "data-hover": e.hoverIndex === a
      }, R(i), 41, Ma))), 128))
    ], 4)
  ], 512);
}
const Rl = /* @__PURE__ */ Pe(Ra, [["render", Va], ["__scopeId", "data-v-a13b1991"]]), Ha = /* @__PURE__ */ Fe({
  props: {
    message: String
  }
}), Ba = { class: "SimulatorLoading" };
function Na(e, t, s, n, o, l) {
  return b(), C("div", Ba, [
    c("p", null, R(e.message || "Loading..."), 1)
  ]);
}
const Fl = /* @__PURE__ */ Pe(Ha, [["render", Na], ["__scopeId", "data-v-d24434c8"]]), Da = /* @__PURE__ */ Fe({
  props: {
    result: {
      type: Object,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  }
}), Os = (e) => (It("data-v-93303bcf"), e = e(), Lt(), e), Ua = /* @__PURE__ */ Os(() => /* @__PURE__ */ c("h2", { class: "SimulatorTotal__heading" }, [
  /* @__PURE__ */ c("span", null, "現在の合計価格"),
  /* @__PURE__ */ c("small", null, "会員価格")
], -1)), ja = { class: "SimulatorTotal__price" }, xa = /* @__PURE__ */ Os(() => /* @__PURE__ */ c("span", null, "税込", -1)), Ka = /* @__PURE__ */ Os(() => /* @__PURE__ */ c("span", null, "円〜", -1)), Wa = {
  key: 0,
  class: "SimulatorTotal__detail"
}, za = /* @__PURE__ */ Os(() => /* @__PURE__ */ c("h3", null, [
  /* @__PURE__ */ c("span", null, "適用プラン")
], -1)), qa = { class: "el-thumb" }, Ya = ["src"], Ga = {
  key: 0,
  class: "el-label"
}, Ja = { class: "el-body" }, Xa = { key: 0 }, Za = { key: 1 }, Qa = { key: 2 };
function ec(e, t, s, n, o, l) {
  return b(), C("section", {
    class: $s({ SimulatorTotal: !0, "is-disabled": e.disabled })
  }, [
    Ua,
    c("p", ja, [
      xa,
      c("span", null, R((e.result.total || 0).toLocaleString("ja-JP")), 1),
      Ka
    ]),
    e.result.planTitle ? (b(), C("div", Wa, [
      za,
      c("div", qa, [
        c("picture", null, [
          e.result.planImage ? (b(), C("img", {
            key: 0,
            src: e.result.planImage,
            alt: "祭壇のイメージ"
          }, null, 8, Ya)) : ne("", !0)
        ]),
        e.result.planNote ? (b(), C("span", Ga, R(e.result.planNote), 1)) : ne("", !0)
      ]),
      c("div", Ja, [
        c("p", null, R(e.result.planTitle), 1),
        c("ul", null, [
          e.result.type ? (b(), C("li", Xa, R(e.result.type), 1)) : ne("", !0),
          e.result.number ? (b(), C("li", Za, R(e.result.number), 1)) : ne("", !0),
          e.result.atmosphere ? (b(), C("li", Qa, R(e.result.atmosphere), 1)) : ne("", !0)
        ])
      ])
    ])) : ne("", !0)
  ], 2);
}
const tc = /* @__PURE__ */ Pe(Da, [["render", ec], ["__scopeId", "data-v-93303bcf"]]), sc = /* @__PURE__ */ Fe({
  props: {
    prev: String,
    next: String,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  components: {
    Icon: Fs
  }
}), nc = { class: "SimulatorPrevnext" }, oc = ["disabled"], lc = ["disabled"];
function ic(e, t, s, n, o, l) {
  const i = $e("Icon");
  return b(), C("div", nc, [
    e.prev ? (b(), C("button", {
      key: 0,
      class: "el-prev",
      disabled: e.disabled,
      onClick: t[0] || (t[0] = (r) => e.$emit("click:prev"))
    }, [
      V(i, { icon: "angle-left-solid" }),
      c("span", null, R(e.prev), 1)
    ], 8, oc)) : ne("", !0),
    e.next ? (b(), C("button", {
      key: 1,
      class: "el-next",
      disabled: e.disabled,
      onClick: t[1] || (t[1] = (r) => e.$emit("click:next"))
    }, [
      c("span", null, R(e.next), 1),
      V(i, { icon: "angle-right-solid" })
    ], 8, lc)) : ne("", !0)
  ]);
}
const rc = /* @__PURE__ */ Pe(sc, [["render", ic], ["__scopeId", "data-v-313d946f"]]), ac = /* @__PURE__ */ Fe({
  props: {
    hall: Object
    // {
    //   image: String,
    //   access: String,
    //   address: String,
    //   features: Array,
    //   // [1, 2, 3, 4, 5, 6, 7]
    // }
  }
}), ge = (e) => (It("data-v-4665bf58"), e = e(), Lt(), e), cc = { class: "SimulatorHallInfo" }, uc = { class: "SimulatorHallInfo__image" }, fc = ["src"], dc = { class: "SimulatorHallInfo__access" }, hc = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("dt", null, "利便性", -1)), pc = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("dt", null, "住所", -1)), mc = { class: "SimulatorHallInfo__tags" }, gc = ["aria-hidden"], _c = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("span", { "aria-hidden": "true" }, null, -1)), yc = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("span", null, "駐車場", -1)), bc = [
  _c,
  yc
], vc = ["aria-hidden"], $c = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("span", { "aria-hidden": "true" }, null, -1)), Sc = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("span", null, [
  /* @__PURE__ */ re("好ア"),
  /* @__PURE__ */ c("br"),
  /* @__PURE__ */ re("クセス")
], -1)), Cc = [
  $c,
  Sc
], wc = ["aria-hidden"], Tc = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("span", { "aria-hidden": "true" }, null, -1)), Pc = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("span", null, [
  /* @__PURE__ */ re("控室"),
  /* @__PURE__ */ c("br"),
  /* @__PURE__ */ re("あり")
], -1)), Ic = [
  Tc,
  Pc
], Lc = ["aria-hidden"], Ec = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("span", { "aria-hidden": "true" }, null, -1)), Ac = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("span", null, [
  /* @__PURE__ */ re("仮眠"),
  /* @__PURE__ */ c("br"),
  /* @__PURE__ */ re("施設")
], -1)), Rc = [
  Ec,
  Ac
], Fc = ["aria-hidden"], Oc = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("span", { "aria-hidden": "true" }, null, -1)), kc = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("span", null, [
  /* @__PURE__ */ re("付添い"),
  /* @__PURE__ */ c("br"),
  /* @__PURE__ */ re("安置可")
], -1)), Mc = [
  Oc,
  kc
], Vc = ["aria-hidden"], Hc = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("span", { "aria-hidden": "true" }, null, -1)), Bc = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("span", null, [
  /* @__PURE__ */ re("バリア"),
  /* @__PURE__ */ c("br"),
  /* @__PURE__ */ re("フリー")
], -1)), Nc = [
  Hc,
  Bc
], Dc = ["aria-hidden"], Uc = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("span", { "aria-hidden": "true" }, null, -1)), jc = /* @__PURE__ */ ge(() => /* @__PURE__ */ c("span", null, [
  /* @__PURE__ */ re("全宗派"),
  /* @__PURE__ */ c("br"),
  /* @__PURE__ */ re("対応")
], -1)), xc = [
  Uc,
  jc
];
function Kc(e, t, s, n, o, l) {
  return b(), C("div", cc, [
    c("div", uc, [
      c("img", {
        src: e.hall.image || "@/static/image/noimage.webp"
      }, null, 8, fc)
    ]),
    c("div", dc, [
      c("dl", null, [
        hc,
        c("dd", null, R(e.hall.access), 1)
      ]),
      c("dl", null, [
        pc,
        c("dd", null, R(e.hall.address), 1)
      ])
    ]),
    c("ul", mc, [
      c("li", {
        class: "type-parking",
        "aria-hidden": !e.hall.features.includes(1)
      }, bc, 8, gc),
      c("li", {
        class: "type-access",
        "aria-hidden": !e.hall.features.includes(2)
      }, Cc, 8, vc),
      c("li", {
        class: "type-waiting",
        "aria-hidden": !e.hall.features.includes(3)
      }, Ic, 8, wc),
      c("li", {
        class: "type-bed",
        "aria-hidden": !e.hall.features.includes(4)
      }, Rc, 8, Lc),
      c("li", {
        class: "type-attend",
        "aria-hidden": !e.hall.features.includes(5)
      }, Mc, 8, Fc),
      c("li", {
        class: "type-barrierfree",
        "aria-hidden": !e.hall.features.includes(6)
      }, Nc, 8, Vc),
      c("li", {
        class: "type-any",
        "aria-hidden": !e.hall.features.includes(7)
      }, xc, 8, Dc)
    ])
  ]);
}
const Ol = /* @__PURE__ */ Pe(ac, [["render", Kc], ["__scopeId", "data-v-4665bf58"]]), Wc = /* @__PURE__ */ Fe({
  components: {
    HallInfo: Ol
  },
  props: {
    type: {
      type: String,
      default: "checkbox"
    },
    name: {
      type: String,
      default: void 0
    },
    modelValue: {
      type: Boolean,
      default: void 0
    },
    propValue: {
      type: Boolean,
      default: void 0
    },
    choice: {
      type: Object,
      // {value, disabled, title, description, image,}
      required: !0
    },
    // 強制的にdisabledにしたい場合
    disabled: {
      type: Boolean,
      default: !1
    },
    // 読み込み中とか一時的に操作不能にしたい場合
    busy: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    checked() {
      return this.modelValue || !!this.propValue;
    }
  },
  methods: {
    onChange(e) {
      this.$emit("update:modelValue", e);
    },
    ishallChoice(e) {
      return !!e.address;
    }
  },
  watch: {
    modelValue(e) {
      this.$emit("change:choicebox", e);
    }
  }
}), zc = ["aria-disabled"], qc = { class: "SimulatorChoicebox__box" }, Yc = { class: "SimulatorChoicebox__header" }, Gc = ["type", "name", "value", "disabled", "checked"], Jc = {
  key: 0,
  class: "SimulatorChoicebox__body"
}, Xc = {
  key: 1,
  class: "SimulatorChoicebox__body"
}, Zc = { class: "SimulatorChoiceboxDefault" }, Qc = ["src"], eu = {
  key: 1,
  class: "SimulatorChoiceboxDefault__description"
}, tu = {
  key: 2,
  class: "SimulatorChoiceboxDefault__price"
};
function su(e, t, s, n, o, l) {
  const i = $e("HallInfo");
  return b(), C("label", {
    class: "SimulatorChoicebox",
    "aria-disabled": e.disabled || e.choice.disabled
  }, [
    c("div", qc, [
      c("div", Yc, [
        c("input", {
          type: e.type,
          name: e.name,
          value: e.choice.title,
          disabled: e.disabled || e.choice.disabled || e.busy,
          checked: e.checked,
          onChange: t[0] || (t[0] = (r) => e.onChange(r.target.checked))
        }, null, 40, Gc),
        c("span", null, R(e.choice.title), 1)
      ]),
      e.ishallChoice(e.choice) ? (b(), C("div", Jc, [
        V(i, { hall: e.choice }, null, 8, ["hall"])
      ])) : e.choice.image || e.choice.description ? (b(), C("div", Xc, [
        c("div", Zc, [
          e.choice.image ? (b(), C("img", {
            key: 0,
            src: e.choice.image
          }, null, 8, Qc)) : ne("", !0),
          e.choice.description ? (b(), C("p", eu, R(e.choice.description), 1)) : ne("", !0),
          e.choice.price ? (b(), C("p", tu, R(e.choice.price), 1)) : ne("", !0)
        ])
      ])) : ne("", !0)
    ])
  ], 8, zc);
}
const kl = /* @__PURE__ */ Pe(Wc, [["render", su], ["__scopeId", "data-v-159dbb42"]]), nu = /* @__PURE__ */ Fe({
  components: {
    Choicebox: kl
  },
  props: {
    multiple: {
      type: Boolean,
      default: !1
    },
    name: {
      type: String,
      default: void 0
    },
    modelValue: {
      type: [String, Number, Array]
    },
    choices: {
      type: Array,
      // {value, disabled, title, description, image}[]
      required: !0
    },
    // 強制的にdisabledにしたい場合（見た目が変わる）
    disabled: {
      type: Boolean,
      default: !1
    },
    // 読み込み中とか一時的に操作不能にしたい場合（見た目は変わらず）
    busy: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    type() {
      return this.multiple ? "checkbox" : "radio";
    }
  },
  methods: {
    onChange(e, t) {
      const s = this.multiple ? e ? [...this.modelValue, t] : [...this.modelValue].filter((n) => n != t) : e ? t : "";
      this.$emit("update:modelValue", s), this.$emit(e ? "checked" : "unchecked");
    },
    getChecked(e) {
      return this.multiple ? this.modelValue.includes(e.value) : e.value == this.modelValue;
    },
    ishallChoice(e) {
      return !!e.address;
    }
  },
  watch: {
    modelValue(e) {
      this.$emit("change:choiceboxlist", e);
    }
  }
}), ou = { class: "SimulatorChoiceboxList" };
function lu(e, t, s, n, o, l) {
  const i = $e("Choicebox");
  return b(), C("div", ou, [
    (b(!0), C(U, null, Le(e.choices, (r) => (b(), pe(i, {
      "prop-value": e.getChecked(r),
      key: r.value,
      type: e.type,
      name: e.name,
      choice: r,
      disabled: e.disabled,
      busy: e.busy,
      onChange: (a) => e.onChange(a.target.checked, r.value)
    }, null, 8, ["prop-value", "type", "name", "choice", "disabled", "busy", "onChange"]))), 128))
  ]);
}
const iu = /* @__PURE__ */ Pe(nu, [["render", lu], ["__scopeId", "data-v-2135276d"]]), qs = {}, ds = {};
async function ru(e, t) {
  const s = "/sol_api/simulator", n = new URLSearchParams({ field: e, ...t });
  if (qs[`${n}`])
    return qs[`${n}`];
  try {
    const o = await fetch(`${s}?${n}`);
    if (!o.ok) {
      const { status: r, statusText: a } = o;
      throw new Error(`${r} ${a}`);
    }
    const { fields: l, result: i } = await o.json();
    return qs[`${n}`] = { fields: l, result: i }, n.delete("field"), ds[`${n}`] = { result: i }, { fields: l, result: i };
  } catch (o) {
    return { error: o };
  }
}
async function au(e) {
  const t = "/sol_api/simulator", s = new URLSearchParams({ ...e });
  if (ds[`${s}`])
    return ds[`${s}`];
  try {
    const n = await fetch(`${t}?${s}`);
    if (!n.ok) {
      const { status: l, statusText: i } = n;
      throw new Error(`${l} ${i}`);
    }
    const { result: o } = await n.json();
    return ds[`${s}`] = { result: o }, { result: o };
  } catch (n) {
    return { error: n };
  }
}
async function cu(e) {
  const t = "/simulator/save", s = new FormData();
  for (const o in e)
    e.hasOwnProperty(o) && s.append(o, e[o]);
  const n = { method: "POST", body: s };
  try {
    const o = await fetch(t, n);
    if (!o.ok) {
      const { status: i, statusText: r } = o;
      throw new Error(`${i} ${r}`);
    }
    const { hash: l } = await o.json();
    return { hash: l };
  } catch (o) {
    return { error: o };
  }
}
async function uu(e) {
  const t = "/sol_api/simulator/result", s = new URLSearchParams({ hash: e });
  try {
    const n = await fetch(`${t}?${s}`);
    if (!n.ok) {
      const { status: l, statusText: i } = n;
      throw new Error(`${l} ${i}`);
    }
    const { result: o } = await n.json();
    return { result: o };
  } catch (n) {
    return {
      result: null,
      error: n
    };
  }
}
function fn(e, t) {
  const [s, n] = e.split("?"), o = new URLSearchParams(n);
  for (const l in t)
    o.set(l, t[l]);
  return s + "?" + o.toString();
}
const os = {
  hall: "",
  type: "",
  numberOfRelatives: "",
  numberOfOthers: "",
  atmosphere: "",
  religion: "",
  options: [],
  gift: !1,
  tsuyaDinner: !1,
  lunch: !1,
  sogiDinner: !1
}, ls = [
  {
    title: "式場",
    longTitle: ["ご利用予定の式場を", "お選びください"],
    fieldKeys: ["hall"],
    validator: ({ hall: e }) => {
      if (!e)
        return "式場を選択してください";
    }
  },
  {
    title: "葬儀の形態",
    longTitle: ["葬儀の形態を", "お選びください"],
    fieldKeys: ["type"],
    validator: ({ type: e }) => {
      if (!e)
        return "形態を選択してください";
    }
  },
  {
    title: "参列者",
    longTitle: ["参列者の人数内訳を", "教えてください"],
    fieldKeys: ["numberOfRelatives", "numberOfOthers"],
    validator: ({ numberOfRelatives: e, numberOfOthers: t }) => {
      if (!e || !t)
        return "人数を選択してください";
    }
  },
  {
    title: "お見送りの雰囲気",
    longTitle: ["ご希望のお見送りの形が", "ございましたら教えてください"],
    fieldKeys: ["atmosphere"],
    validator: ({ atmosphere: e }) => {
      if (!e)
        return "お見送りの雰囲気を選択してください";
    }
  },
  {
    title: "宗教",
    longTitle: ["宗教の形式を", "お選びください"],
    fieldKeys: ["religion"],
    validator: ({ religion: e }) => {
      if (!e)
        return "宗教を選択してください";
    }
  },
  {
    title: "オプション",
    longTitle: ["オプションを", "選択してください"],
    fieldKeys: "options",
    validator: () => {
    }
  },
  {
    title: "返礼品・食事",
    longTitle: ["希望するものを", "選択してください"],
    fieldKeys: ["gift", "tsuyaDinner", "lunch", "sogiDinner"],
    validator: () => {
    }
  }
], fu = /* @__PURE__ */ Fe({
  props: {
    pathResult: String
  },
  components: {
    Icon: Fs,
    Steps: Rl,
    Loading: Fl,
    FormTotal: tc,
    Prevnext: rc,
    Choicebox: kl,
    ChoiceboxList: iu
  },
  data() {
    return {
      pageIndex: 0,
      // 表示するページのindex
      pageTransitionDirection: 1,
      // ページ遷移の方向（次へは1、前へは-1、遷移アニメーションで利用）
      isLoadingForm: !1,
      // フォームデータ取得中か否か
      isLoadingTotal: !1,
      // 合計金額取得中か否か
      isSubmiting: !1,
      // フォームの値をポスト中か否か
      error: null,
      // フォームの値
      values: { ...os },
      // フォームの値をkeyにした選択項目データ（APIで取得）
      fields: {
        // hall: {}
      },
      // ホールの地域フィルタリング
      hallPref: "静岡県",
      hallArea: "",
      // 現在の見積
      result: null
    };
  },
  computed: {
    // ページ移動中、API取得中、post中だったり
    isBusy() {
      return this.isLoadingForm || this.isLoadingTotal || this.isSubmiting;
    },
    // ステップ
    steps() {
      return [
        ...ls.map(({ title: t }, s) => {
          const n = s >= this.pageIndex;
          return {
            title: t,
            disabled: n
          };
        }),
        {
          title: "結果",
          disabled: !0
        }
      ];
    },
    // SimulatorHeading の --index
    headingStyleIndex() {
      return {
        "--index": this.pageIndex
      };
    },
    pageLongTitles() {
      return ls.map((e) => e.longTitle);
    },
    // 現在のページのデータ
    page() {
      return ls[this.pageIndex];
    },
    // 式場 地域の選択肢
    hallPrefAreas() {
      if (!this.fields.hall)
        return [];
      const e = this.hallPref;
      return this.fields.hall.areas.find(
        (s) => s.pref === e
      ).areas;
    },
    // 式場 フィルタリングされた式場の選択肢
    hallChoices() {
      if (!this.fields.hall)
        return [];
      const e = this.hallArea ? [this.hallArea] : this.hallPrefAreas.map((t) => t.id);
      return this.fields.hall.choices.filter(
        (t) => e.includes(t.area)
      );
    }
  },
  methods: {
    /**
     * 引数のタイトルのページか否か
     * @param {string} title ページタイトル
     * @returns {boolean}
     */
    isPage(e) {
      return e === this.page.title;
    },
    /**
     * ページのフォーム項目の取得
     * @param {Number} index 取得するページのindex
     */
    async fetchPageFields(e) {
      this.isLoadingForm = !0;
      const { fields: t, result: s } = await ru(
        ls[e].fieldKeys,
        this.values
      );
      Object.keys(t).forEach((n) => {
        this.fields[n] = t[n], n === "options" ? this.values[n] = t[n].value ? t[n].value.split(",") : [] : this.values[n] = t[n].value;
      }), this.result = s, this.isLoadingForm = !1;
    },
    /**
     * 合計金額の取得
     */
    async updateTotal() {
      this.isLoadingTotal = !0;
      const { result: e } = await au(this.values);
      this.result = e, this.isLoadingTotal = !1;
    },
    /**
     * ページ移動
     * @param {Number} index 移動先のページのindex
     */
    goPage(e) {
      const t = e > this.pageIndex;
      if (t) {
        const s = this.page.validator(this.values);
        if (s)
          return alert(s);
      }
      this.pageIndex = e, t && this.fetchPageFields(e);
    },
    /**
     * 次へ進む
     */
    async goNext() {
      this.goPage(this.pageIndex + 1);
    },
    /**
     * 前に戻る
     */
    goPrev() {
      this.goPage(this.pageIndex - 1);
    },
    /**
     * 値をポストして結果画面へ
     */
    async goResult() {
      this.isSubmiting = !0;
      const { hash: e, error: t } = await cu(this.values);
      if (this.isSubmiting = !1, t)
        return this.error = t;
      const s = fn(this.pathResult, { hash: e });
      window.location.replace(s);
    }
  },
  watch: {
    // ホール 県の変更で市区町村、ホールの値をリセット
    hallPref() {
      this.hallArea = "", this.values.hall = "";
    },
    // 葬儀の形態が変更されたら雰囲気、オプション、通夜会食をリセット
    "values.type"() {
      this.values.atmosphere = os.atmosphere, this.values.options = os.options, this.values.tsuyaDinner = os.tsuyaDinner;
    },
    // ページ移動時
    pageIndex(e, t) {
      this.pageTransitionDirection = e > t ? 1 : -1, window.scrollTo({
        top: 0
        // behavior: 'smooth',
      });
    }
  },
  created() {
    this.fetchPageFields(this.pageIndex);
  }
}), Yt = (e) => (It("data-v-0dcdc80e"), e = e(), Lt(), e), du = ["data-direction"], hu = { class: "SimulatorForm__steps" }, pu = { class: "SimulatorForm__main" }, mu = { class: "SimulatorHeading" }, gu = ["aria-hidden"], _u = { class: "SimulatorFormBody" }, yu = {
  key: 0,
  class: "SimulatorFormBody__inner"
}, bu = { class: "SimulatorHallFilter" }, vu = { class: "SimulatorCheckList" }, $u = ["value"], Su = /* @__PURE__ */ Yt(() => /* @__PURE__ */ c("option", { value: "" }, "市区町村で絞る", -1)), Cu = ["value"], wu = {
  key: 1,
  class: "text-center"
}, Tu = {
  key: 1,
  class: "SimulatorFormBody__inner"
}, Pu = {
  key: 2,
  class: "SimulatorFormBody__inner"
}, Iu = { class: "SimulatorNumberSelect" }, Lu = /* @__PURE__ */ Yt(() => /* @__PURE__ */ c("span", null, "ご親族", -1)), Eu = ["disabled"], Au = /* @__PURE__ */ Yt(() => /* @__PURE__ */ c("option", { value: "" }, "人数を選択", -1)), Ru = ["value"], Fu = /* @__PURE__ */ Yt(() => /* @__PURE__ */ c("span", null, "ご友人・知り合いの方", -1)), Ou = ["disabled"], ku = /* @__PURE__ */ Yt(() => /* @__PURE__ */ c("option", { value: "" }, "人数を選択", -1)), Mu = ["value"], Vu = {
  key: 3,
  class: "SimulatorFormBody__inner"
}, Hu = {
  key: 4,
  class: "SimulatorFormBody__inner"
}, Bu = {
  key: 5,
  class: "SimulatorFormBody__inner"
}, Nu = { class: "SimulatorOptionsChoices" }, Du = ["aria-label"], Uu = ["value", "checked", "disabled"], ju = ["src", "alt"], xu = {
  key: 6,
  class: "SimulatorFormBody__inner"
}, Ku = { class: "SimulatorGiftChoiceboxList" };
function Wu(e, t, s, n, o, l) {
  const i = $e("Steps"), r = $e("FormTotal"), a = $e("Loading"), d = $e("ChoiceboxList"), h = $e("Prevnext"), g = $e("Choicebox");
  return b(), C("div", {
    class: "SimulatorForm",
    "data-direction": e.pageTransitionDirection
  }, [
    c("div", hu, [
      V(i, {
        steps: e.steps,
        current: e.pageIndex,
        "onClick:step": e.goPage
      }, null, 8, ["steps", "current", "onClick:step"])
    ]),
    c("div", pu, [
      V(_s, null, {
        default: en(() => [
          e.result ? (b(), pe(r, {
            key: 0,
            result: e.result,
            disabled: e.isBusy
          }, null, 8, ["result", "disabled"])) : ne("", !0)
        ]),
        _: 1
      }),
      c("h2", mu, [
        c("div", {
          style: Wt(e.headingStyleIndex)
        }, [
          (b(!0), C(U, null, Le(e.pageLongTitles, (p, I) => (b(), C("div", {
            key: I,
            "aria-hidden": I !== e.pageIndex
          }, [
            (b(!0), C(U, null, Le(p, (H) => (b(), C("span", null, R(H), 1))), 256))
          ], 8, gu))), 128))
        ], 4)
      ]),
      c("div", _u, [
        V(_s, null, {
          default: en(() => [
            e.isPage("式場") ? (b(), C("div", yu, [
              e.isPage("式場") && e.isLoadingForm ? (b(), pe(a, { key: 0 })) : (b(), C(U, { key: 1 }, [
                c("div", bu, [
                  c("div", vu, [
                    (b(!0), C(U, null, Le(e.fields.hall.areas, (p) => (b(), C("label", null, [
                      Ft(c("input", {
                        type: "radio",
                        "onUpdate:modelValue": t[0] || (t[0] = (I) => e.hallPref = I),
                        value: p.pref
                      }, null, 8, $u), [
                        [aa, e.hallPref]
                      ]),
                      c("span", null, R(p.pref), 1)
                    ]))), 256))
                  ]),
                  Ft(c("select", {
                    "onUpdate:modelValue": t[1] || (t[1] = (p) => e.hallArea = p),
                    class: "SimulatorSelect"
                  }, [
                    Su,
                    (b(!0), C(U, null, Le(e.hallPrefAreas, (p) => (b(), C("option", {
                      value: p.id
                    }, R(p.name), 9, Cu))), 256))
                  ], 512), [
                    [zs, e.hallArea]
                  ])
                ]),
                e.hallChoices.length ? (b(), pe(d, {
                  key: 0,
                  name: "hall",
                  modelValue: e.values.hall,
                  "onUpdate:modelValue": t[2] || (t[2] = (p) => e.values.hall = p),
                  choices: e.hallChoices,
                  onChecked: e.goNext
                }, null, 8, ["modelValue", "choices", "onChecked"])) : (b(), C("p", wu, "選択した地域の式場はありません")),
                V(h, {
                  disabled: e.isBusy,
                  next: "次へ",
                  "onClick:next": e.goNext
                }, null, 8, ["disabled", "onClick:next"])
              ], 64))
            ])) : e.isPage("葬儀の形態") ? (b(), C("div", Tu, [
              e.isPage("葬儀の形態") && e.isLoadingForm ? (b(), pe(a, { key: 0 })) : (b(), C(U, { key: 1 }, [
                V(d, {
                  name: "type",
                  modelValue: e.values.type,
                  "onUpdate:modelValue": t[3] || (t[3] = (p) => e.values.type = p),
                  choices: e.fields.type.choices,
                  "onChange:choiceboxlist": e.updateTotal
                }, null, 8, ["modelValue", "choices", "onChange:choiceboxlist"]),
                V(h, {
                  disabled: e.isBusy,
                  prev: "戻る",
                  next: "次へ",
                  "onClick:prev": e.goPrev,
                  "onClick:next": e.goNext
                }, null, 8, ["disabled", "onClick:prev", "onClick:next"])
              ], 64))
            ])) : e.isPage("参列者") ? (b(), C("div", Pu, [
              e.isPage("参列者") && e.isLoadingForm ? (b(), pe(a, { key: 0 })) : (b(), C(U, { key: 1 }, [
                c("div", Iu, [
                  c("label", null, [
                    Lu,
                    Ft(c("select", {
                      "onUpdate:modelValue": t[4] || (t[4] = (p) => e.values.numberOfRelatives = p),
                      class: "SimulatorSelect",
                      name: "numberOfRelatives",
                      disabled: e.isBusy,
                      onChange: t[5] || (t[5] = (...p) => e.updateTotal && e.updateTotal(...p))
                    }, [
                      Au,
                      (b(!0), C(U, null, Le(e.fields.numberOfRelatives.choices, (p) => (b(), C("option", {
                        value: p.value
                      }, R(p.title), 9, Ru))), 256))
                    ], 40, Eu), [
                      [zs, e.values.numberOfRelatives]
                    ])
                  ]),
                  c("label", null, [
                    Fu,
                    Ft(c("select", {
                      "onUpdate:modelValue": t[6] || (t[6] = (p) => e.values.numberOfOthers = p),
                      class: "SimulatorSelect",
                      name: "numberOfOthers",
                      disabled: e.isBusy,
                      onChange: t[7] || (t[7] = (...p) => e.updateTotal && e.updateTotal(...p))
                    }, [
                      ku,
                      (b(!0), C(U, null, Le(e.fields.numberOfOthers.choices, (p) => (b(), C("option", {
                        value: p.value
                      }, R(p.title), 9, Mu))), 256))
                    ], 40, Ou), [
                      [zs, e.values.numberOfOthers]
                    ])
                  ])
                ]),
                V(h, {
                  disabled: e.isBusy,
                  prev: "戻る",
                  next: "次へ",
                  "onClick:prev": e.goPrev,
                  "onClick:next": e.goNext
                }, null, 8, ["disabled", "onClick:prev", "onClick:next"])
              ], 64))
            ])) : e.isPage("お見送りの雰囲気") ? (b(), C("div", Vu, [
              e.isPage("お見送りの雰囲気") && e.isLoadingForm ? (b(), pe(a, { key: 0 })) : (b(), C(U, { key: 1 }, [
                V(d, {
                  name: "atmosphere",
                  modelValue: e.values.atmosphere,
                  "onUpdate:modelValue": t[8] || (t[8] = (p) => e.values.atmosphere = p),
                  choices: e.fields.atmosphere.choices,
                  "onChange:choiceboxlist": e.updateTotal
                }, null, 8, ["modelValue", "choices", "onChange:choiceboxlist"]),
                V(h, {
                  disabled: e.isBusy,
                  prev: "戻る",
                  next: "次へ",
                  "onClick:prev": e.goPrev,
                  "onClick:next": e.goNext
                }, null, 8, ["disabled", "onClick:prev", "onClick:next"])
              ], 64))
            ])) : e.isPage("宗教") ? (b(), C("div", Hu, [
              e.isPage("宗教") && e.isLoadingForm ? (b(), pe(a, { key: 0 })) : (b(), C(U, { key: 1 }, [
                V(d, {
                  name: "atmosphere",
                  modelValue: e.values.religion,
                  "onUpdate:modelValue": t[9] || (t[9] = (p) => e.values.religion = p),
                  choices: e.fields.religion.choices,
                  "onChange:choiceboxlist": e.updateTotal
                }, null, 8, ["modelValue", "choices", "onChange:choiceboxlist"]),
                V(h, {
                  disabled: e.isBusy,
                  prev: "戻る",
                  next: "次へ",
                  "onClick:prev": e.goPrev,
                  "onClick:next": e.goNext
                }, null, 8, ["disabled", "onClick:prev", "onClick:next"])
              ], 64))
            ])) : e.isPage("オプション") ? (b(), C("div", Bu, [
              e.isPage("オプション") && e.isLoadingForm ? (b(), pe(a, { key: 0 })) : (b(), C(U, { key: 1 }, [
                c("div", Nu, [
                  (b(!0), C(U, null, Le(e.fields.options.choices, (p) => (b(), C("label", {
                    "aria-label": p.title
                  }, [
                    Ft(c("input", {
                      type: "checkbox",
                      name: "options",
                      "onUpdate:modelValue": t[10] || (t[10] = (I) => e.values.options = I),
                      value: p.value,
                      checked: e.values.options.includes(p.value),
                      disabled: e.isBusy,
                      onChange: t[11] || (t[11] = (...I) => e.updateTotal && e.updateTotal(...I))
                    }, null, 40, Uu), [
                      [ra, e.values.options]
                    ]),
                    c("img", {
                      src: p.image,
                      alt: p.title
                    }, null, 8, ju),
                    c("div", null, [
                      c("h3", null, R(p.title), 1),
                      c("b", null, R(p.price), 1),
                      c("p", null, R(p.description), 1)
                    ])
                  ], 8, Du))), 256))
                ]),
                V(h, {
                  disabled: e.isBusy,
                  prev: "戻る",
                  next: "次へ",
                  "onClick:prev": e.goPrev,
                  "onClick:next": e.goNext
                }, null, 8, ["disabled", "onClick:prev", "onClick:next"])
              ], 64))
            ])) : e.isPage("返礼品・食事") ? (b(), C("div", xu, [
              e.isPage("返礼品・食事") && e.isLoadingForm ? (b(), pe(a, { key: 0 })) : (b(), C(U, { key: 1 }, [
                c("div", Ku, [
                  e.fields.gift ? (b(), pe(g, {
                    key: 0,
                    name: "gift",
                    modelValue: e.values.gift,
                    "onUpdate:modelValue": t[12] || (t[12] = (p) => e.values.gift = p),
                    choice: e.fields.gift,
                    busy: e.isBusy,
                    "onChange:choicebox": e.updateTotal
                  }, null, 8, ["modelValue", "choice", "busy", "onChange:choicebox"])) : ne("", !0),
                  e.fields.tsuyaDinner ? (b(), pe(g, {
                    key: 1,
                    name: "tsuyaDinner",
                    modelValue: e.values.tsuyaDinner,
                    "onUpdate:modelValue": t[13] || (t[13] = (p) => e.values.tsuyaDinner = p),
                    choice: e.fields.tsuyaDinner,
                    busy: e.isBusy,
                    "onChange:choicebox": e.updateTotal
                  }, null, 8, ["modelValue", "choice", "busy", "onChange:choicebox"])) : ne("", !0),
                  e.fields.lunch ? (b(), pe(g, {
                    key: 2,
                    name: "lunch",
                    modelValue: e.values.lunch,
                    "onUpdate:modelValue": t[14] || (t[14] = (p) => e.values.lunch = p),
                    choice: e.fields.lunch,
                    busy: e.isBusy,
                    "onChange:choicebox": e.updateTotal
                  }, null, 8, ["modelValue", "choice", "busy", "onChange:choicebox"])) : ne("", !0),
                  e.fields.sogiDinner ? (b(), pe(g, {
                    key: 3,
                    name: "sogiDinner",
                    modelValue: e.values.sogiDinner,
                    "onUpdate:modelValue": t[15] || (t[15] = (p) => e.values.sogiDinner = p),
                    choice: e.fields.sogiDinner,
                    busy: e.isBusy,
                    "onChange:choicebox": e.updateTotal
                  }, null, 8, ["modelValue", "choice", "busy", "onChange:choicebox"])) : ne("", !0)
                ]),
                V(h, {
                  disabled: e.isBusy,
                  prev: "戻る",
                  next: "結果を表示",
                  "onClick:prev": e.goPrev,
                  "onClick:next": e.goResult
                }, null, 8, ["disabled", "onClick:prev", "onClick:next"])
              ], 64))
            ])) : ne("", !0)
          ]),
          _: 1
        })
      ])
    ])
  ], 8, du);
}
const zu = /* @__PURE__ */ Pe(fu, [["render", Wu], ["__scopeId", "data-v-0dcdc80e"]]), qu = /* @__PURE__ */ Fe({
  props: {
    result: Object,
    // {
    //   price: {
    //     basic: Number,
    //     option: Number,
    //     food: Number,
    //     total: Number,
    //     totalGeneral: Number,
    //   }
    // }
    contactUrl: String
  },
  components: {
    Icon: Fs
  },
  methods: {
    formatPrice(e) {
      return e.toLocaleString("ja-JP");
    }
  }
}), lt = (e) => (It("data-v-08364721"), e = e(), Lt(), e), Yu = { class: "SimulatorResultPrice" }, Gu = /* @__PURE__ */ lt(() => /* @__PURE__ */ c("h2", { class: "SimulatorResultPrice__heading" }, "ご葬儀見積 合計価格", -1)), Ju = { class: "SimulatorResultPrice__body" }, Xu = { class: "SimulatorResultPrice__table" }, Zu = /* @__PURE__ */ lt(() => /* @__PURE__ */ c("thead", null, [
  /* @__PURE__ */ c("tr", null, [
    /* @__PURE__ */ c("th", null, "サービス内容"),
    /* @__PURE__ */ c("th", null, "費用")
  ])
], -1)), Qu = /* @__PURE__ */ lt(() => /* @__PURE__ */ c("th", null, "葬儀基本費用", -1)), ef = /* @__PURE__ */ lt(() => /* @__PURE__ */ c("th", null, "オプション", -1)), tf = /* @__PURE__ */ lt(() => /* @__PURE__ */ c("th", null, "返礼品・食事", -1)), sf = { class: "SimulatorResultPrice__price" }, nf = /* @__PURE__ */ lt(() => /* @__PURE__ */ c("span", null, "税込", -1)), of = /* @__PURE__ */ lt(() => /* @__PURE__ */ c("span", null, "円〜", -1)), lf = ["href"], rf = /* @__PURE__ */ lt(() => /* @__PURE__ */ c("span", null, "この見積で相談する", -1));
function af(e, t, s, n, o, l) {
  const i = $e("Icon");
  return b(), C("div", Yu, [
    Gu,
    c("div", Ju, [
      c("table", Xu, [
        Zu,
        c("tbody", null, [
          c("tr", null, [
            Qu,
            c("td", null, R(e.formatPrice(e.result.price.basic)) + "円", 1)
          ]),
          c("tr", null, [
            ef,
            c("td", null, R(e.formatPrice(e.result.price.option)) + "円", 1)
          ]),
          c("tr", null, [
            tf,
            c("td", null, R(e.formatPrice(e.result.price.food)) + "円", 1)
          ])
        ])
      ]),
      c("div", sf, [
        c("p", null, [
          nf,
          c("span", null, R(e.formatPrice(e.result.price.total)), 1),
          of
        ]),
        c("p", null, [
          re(" （一般価格 "),
          c("span", null, R(e.formatPrice(e.result.price.totalGeneral)), 1),
          re(" 円） ")
        ])
      ]),
      c("a", {
        class: "SimulatorResultPrice__contact",
        href: e.contactUrl,
        target: "_blank"
      }, [
        c("span", null, [
          V(i, { icon: "list-check-solid" })
        ]),
        rf
      ], 8, lf)
    ])
  ]);
}
const cf = /* @__PURE__ */ Pe(qu, [["render", af], ["__scopeId", "data-v-08364721"]]), uf = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ff = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], df = ["日", "月", "火", "水", "木", "金", "土"];
function hf(e, t) {
  const s = e.replace(/-/g, "/"), n = new Date(s), o = `${n.getFullYear()}`, l = o.padStart(4, "0"), i = `${n.getMonth() + 1}`, r = i.padStart(2, "0"), a = `${n.getDate()}`, d = a.padStart(2, "0"), h = `${n.getHours()}`, g = h.padStart(2, "0"), p = `${n.getHours() % 12}`, I = p.padStart(2, "0"), H = `${n.getMinutes()}`, B = H.padStart(2, "0"), oe = `${n.getSeconds()}`, J = oe.padStart(2, "0"), ee = `${ff[n.getDay()]}`, j = `${uf[n.getDay()]}`, z = `${df[n.getDay()]}`;
  return t.replace(/YYYY/g, l).replace(/Y/g, o).replace(/MM/g, r).replace(/M/g, i).replace(/DD/g, d).replace(/D/g, a).replace(/HH/g, g).replace(/H/g, h).replace(/hh/g, I).replace(/h/g, p).replace(/mm/g, B).replace(/m/g, H).replace(/ss/g, J).replace(/s/g, oe).replace(/ww/g, j).replace(/w/g, ee).replace(/W/g, z);
}
const pf = /* @__PURE__ */ Fe({
  props: {
    pathForm: String,
    pathResult: String,
    pathInquiry: String
  },
  components: {
    Icon: Fs,
    Steps: Rl,
    Loading: Fl,
    HallInfo: Ol,
    ResultPrice: cf
  },
  data() {
    return {
      isLoading: !1,
      error: null,
      result: null,
      copied: !1
      // シェアボタンでコピーされたかどうか
    };
  },
  computed: {
    steps() {
      return [
        "式場",
        "葬儀の形態",
        "参列者",
        "お見送りの雰囲気",
        "宗教",
        "オプション",
        "返礼品・食事",
        "結果"
      ].map((e) => ({ title: e, disabled: !0 }));
    },
    hash() {
      return new URLSearchParams(location.search).get("hash");
    },
    resultURL() {
      const e = this.hash, s = fn(this.pathResult, {
        hash: e,
        openExternalBrowser: 1
      });
      return s.startsWith("/") ? location.origin + s : s;
    },
    contactUrl() {
      const e = this.hash;
      return fn(this.pathInquiry, { hash: e });
    },
    canShareAPI() {
      return "share" in navigator;
    }
  },
  methods: {
    formatPrice(e) {
      return e.toLocaleString("ja-JP");
    },
    formatDate(e, t = "YYYY年MM月DD日") {
      return hf(e, t);
    },
    convertNewLineToBr(e) {
      return e.replace(/\r?\n/g, "<br />");
    },
    shareResult() {
      const e = this.resultURL;
      this.canShareAPI ? navigator.share({ url: e, title: "パルモ葬祭 見積シミュレーション結果" }) : navigator.clipboard.writeText(e).then(() => {
        console.log("コピー！"), this.copied = !0;
      });
    }
  },
  async created() {
    if (!this.hash) {
      this.error = "404 Not Found";
      return;
    }
    this.isLoading = !0;
    const { result: e, error: t } = await uu(this.hash);
    if (this.isLoading = !1, t) {
      this.error = t;
      return;
    }
    this.result = e;
  }
}), K = (e) => (It("data-v-2f43e54e"), e = e(), Lt(), e), mf = { class: "SimulatorResult" }, gf = { class: "SimulatorResult__steps" }, _f = { class: "SimulatorResult__body" }, yf = {
  key: 1,
  class: "text-center"
}, bf = { class: "SimulatorResultBox" }, vf = { class: "SimulatorResultButtonWrap" }, $f = /* @__PURE__ */ K(() => /* @__PURE__ */ c("span", null, "結果のURLを共有", -1)), Sf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("span", null, "結果のURLをコピー", -1)), Cf = ["href"], wf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("span", null, "もう一度シミュレーションする", -1)), Tf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("p", { class: "SimulatorLinkText mt-25 hiddenInPC" }, [
  /* @__PURE__ */ c("a", { href: "/" }, "トップページへ")
], -1)), Pf = { class: "SimulatorResultContentWrap" }, If = /* @__PURE__ */ K(() => /* @__PURE__ */ c("h2", { class: "SimulatorResultContentHeading" }, "シミュレーション内容", -1)), Lf = { class: "SimulatorResultContent" }, Ef = { class: "SimulatorResultContent__heading" }, Af = { class: "SimulatorResultContent__table" }, Rf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("th", null, "形態", -1)), Ff = /* @__PURE__ */ K(() => /* @__PURE__ */ c("th", null, "参列者", -1)), Of = /* @__PURE__ */ K(() => /* @__PURE__ */ c("span", null, "親族", -1)), kf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("span", null, "ご友人・知り合いの方", -1)), Mf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("span", null, "参列者合計", -1)), Vf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("th", null, "お別れの形", -1)), Hf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("th", null, "宗教", -1)), Bf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("th", null, "オプション", -1)), Nf = { key: 0 }, Df = { key: 1 }, Uf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("th", null, "返礼品・食事", -1)), jf = { key: 0 }, xf = { key: 1 }, Kf = { key: 0 }, Wf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("span", null, "返礼品", -1)), zf = { key: 1 }, qf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("span", null, "通夜の会食", -1)), Yf = { key: 2 }, Gf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("span", null, "昼食", -1)), Jf = { key: 3 }, Xf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("span", null, "ご葬儀の会食", -1)), Zf = /* @__PURE__ */ K(() => /* @__PURE__ */ c("th", null, "適用プラン", -1)), Qf = ["href"], ed = { style: { "text-decoration": "underline" } }, td = ["src", "alt"], sd = { class: "SimulatorResultNotes" }, nd = ["innerHTML"], od = /* @__PURE__ */ K(() => /* @__PURE__ */ c("br", null, null, -1)), ld = { class: "SimulatorResultHideInPC" }, id = { class: "SimulatorResultButtonWrap" }, rd = /* @__PURE__ */ K(() => /* @__PURE__ */ c("span", null, "結果のURLを共有", -1)), ad = /* @__PURE__ */ K(() => /* @__PURE__ */ c("span", null, "結果のURLをコピー", -1)), cd = ["href"], ud = /* @__PURE__ */ K(() => /* @__PURE__ */ c("span", null, "もう一度シミュレーションする", -1)), fd = /* @__PURE__ */ K(() => /* @__PURE__ */ c("p", { class: "SimulatorLinkText mt-25 hiddenInPC" }, [
  /* @__PURE__ */ c("a", { href: "/" }, "トップページへ")
], -1)), dd = {
  key: 0,
  class: "SimulatorResultCasesWrap"
}, hd = { class: "SimulatorResultCasesHeading2" }, pd = /* @__PURE__ */ K(() => /* @__PURE__ */ c("span", null, "ご利用いただいたお客様の", -1)), md = /* @__PURE__ */ K(() => /* @__PURE__ */ c("h3", null, [
  /* @__PURE__ */ c("em", null, "葬儀事例"),
  /* @__PURE__ */ re("はこちら")
], -1)), gd = { class: "SimulatorResultCases" }, _d = ["href"], yd = ["src", "alt"], bd = /* @__PURE__ */ K(() => /* @__PURE__ */ c("dt", null, "プラン", -1)), vd = /* @__PURE__ */ K(() => /* @__PURE__ */ c("dt", null, "参列", -1)), $d = /* @__PURE__ */ K(() => /* @__PURE__ */ c("dt", null, "費用", -1)), Sd = /* @__PURE__ */ K(() => /* @__PURE__ */ c("div", { class: "SimulatorResultCasesMore" }, [
  /* @__PURE__ */ c("a", {
    href: "/case.html",
    class: "PageLinkBtn"
  }, [
    /* @__PURE__ */ c("span", null, "もっと見る")
  ])
], -1)), Cd = /* @__PURE__ */ K(() => /* @__PURE__ */ c("p", { class: "SimulatorLinkText mt-30" }, [
  /* @__PURE__ */ c("a", { href: "/" }, "トップページへ")
], -1));
function wd(e, t, s, n, o, l) {
  const i = $e("Steps"), r = $e("Loading"), a = $e("ResultPrice"), d = $e("Icon");
  return b(), C("div", mf, [
    c("div", gf, [
      V(i, {
        steps: e.steps,
        current: e.steps.length - 1
      }, null, 8, ["steps", "current"])
    ]),
    c("div", _f, [
      e.isLoading ? (b(), pe(r, { key: 0 })) : e.error ? (b(), C("p", yf, R(e.error), 1)) : (b(), C(U, { key: 2 }, [
        c("div", bf, [
          V(a, {
            result: e.result,
            "contact-url": e.contactUrl
          }, null, 8, ["result", "contact-url"]),
          c("div", vf, [
            c("button", {
              class: "SimulatorResultShareButton",
              onClick: t[0] || (t[0] = (...h) => e.shareResult && e.shareResult(...h))
            }, [
              e.canShareAPI ? (b(), C(U, { key: 0 }, [
                $f,
                V(d, { icon: "share-nodes-solid" })
              ], 64)) : (b(), C(U, { key: 1 }, [
                Sf,
                V(d, {
                  icon: e.copied ? "circle-check-solid" : "copy-regular"
                }, null, 8, ["icon"])
              ], 64))
            ]),
            c("a", {
              class: "SimulatorResultAgainButton",
              href: e.pathForm
            }, [
              wf,
              V(d, { icon: "back" })
            ], 8, Cf)
          ]),
          Tf,
          c("section", Pf, [
            If,
            c("div", Lf, [
              c("h3", Ef, R(e.result.hall.title), 1),
              c("table", Af, [
                c("tr", null, [
                  Rf,
                  c("td", null, R(e.result.type), 1)
                ]),
                c("tr", null, [
                  Ff,
                  c("td", null, [
                    c("ul", null, [
                      c("li", null, [
                        Of,
                        c("span", null, R(e.result.numberOfRelatives), 1)
                      ]),
                      c("li", null, [
                        kf,
                        c("span", null, R(e.result.numberOfOthers), 1)
                      ]),
                      c("li", null, [
                        Mf,
                        c("span", null, R(e.result.numberOfTotal), 1)
                      ])
                    ])
                  ])
                ]),
                c("tr", null, [
                  Vf,
                  c("td", null, R(e.result.atmosphere), 1)
                ]),
                c("tr", null, [
                  Hf,
                  c("td", null, R(e.result.religion), 1)
                ]),
                c("tr", null, [
                  Bf,
                  c("td", null, [
                    e.result.options.length ? (b(), C("ul", Nf, [
                      (b(!0), C(U, null, Le(e.result.options, (h) => (b(), C("li", null, [
                        c("span", null, R(h), 1)
                      ]))), 256))
                    ])) : (b(), C("span", Df, R("-")))
                  ])
                ]),
                c("tr", null, [
                  Uf,
                  c("td", null, [
                    !e.result.gift && !e.result.tsuyaDinner && !e.result.lunch && !e.result.sogiDinner ? (b(), C("span", jf, R("-"))) : (b(), C("ul", xf, [
                      e.result.gift ? (b(), C("li", Kf, [
                        Wf,
                        c("span", null, R(e.result.gift), 1)
                      ])) : ne("", !0),
                      e.result.tsuyaDinner ? (b(), C("li", zf, [
                        qf,
                        c("span", null, R(e.result.tsuyaDinner), 1)
                      ])) : ne("", !0),
                      e.result.lunch ? (b(), C("li", Yf, [
                        Gf,
                        c("span", null, R(e.result.lunch), 1)
                      ])) : ne("", !0),
                      e.result.sogiDinner ? (b(), C("li", Jf, [
                        Xf,
                        c("span", null, R(e.result.sogiDinner), 1)
                      ])) : ne("", !0)
                    ]))
                  ])
                ]),
                c("tr", null, [
                  Zf,
                  c("td", null, [
                    c("a", {
                      href: e.result.planUrl,
                      target: "_blank"
                    }, [
                      c("span", ed, R(e.result.planTitle === "オーダーメイド" ? e.result.planTitle + "(" + e.result.planNote + ")" : e.result.planTitle), 1),
                      c("img", {
                        class: "SimulatorResultContent__planImage",
                        src: e.result.planImage,
                        alt: e.result.planTitle + "の祭壇イメージ"
                      }, null, 8, td)
                    ], 8, Qf)
                  ])
                ])
              ])
            ]),
            c("p", sd, [
              c("span", {
                innerHTML: e.convertNewLineToBr(e.result.planDescription)
              }, null, 8, nd),
              od,
              re(" 作成日時: " + R(e.formatDate(e.result.createdAt)), 1)
            ])
          ]),
          c("div", ld, [
            V(a, {
              result: e.result,
              "contact-url": e.contactUrl
            }, null, 8, ["result", "contact-url"]),
            c("div", id, [
              c("button", {
                class: "SimulatorResultShareButton",
                onClick: t[1] || (t[1] = (...h) => e.shareResult && e.shareResult(...h))
              }, [
                e.canShareAPI ? (b(), C(U, { key: 0 }, [
                  rd,
                  V(d, { icon: "share-nodes-solid" })
                ], 64)) : (b(), C(U, { key: 1 }, [
                  ad,
                  V(d, {
                    icon: e.copied ? "circle-check-solid" : "copy-regular"
                  }, null, 8, ["icon"])
                ], 64))
              ]),
              c("a", {
                class: "SimulatorResultAgainButton",
                href: e.pathForm
              }, [
                ud,
                V(d, { icon: "back" })
              ], 8, cd)
            ]),
            fd
          ])
        ]),
        e.result.cases.length ? (b(), C("section", dd, [
          c("div", hd, [
            c("p", null, [
              c("em", null, R(e.result.planTitle) + "プラン", 1),
              re("を"),
              pd
            ]),
            md
          ]),
          c("div", gd, [
            (b(!0), C(U, null, Le(e.result.cases, (h) => (b(), C("a", {
              href: h.url,
              target: "_blank"
            }, [
              c("img", {
                src: h.image,
                alt: h.title
              }, null, 8, yd),
              c("h3", null, R(h.title), 1),
              c("dl", null, [
                bd,
                c("dd", null, R(h.plan), 1),
                vd,
                c("dd", null, R(h.number), 1),
                $d,
                c("dd", null, R(h.price), 1)
              ]),
              c("span", null, [
                re(" 詳細をみる "),
                V(d, { icon: "circle-right-regular" })
              ])
            ], 8, _d))), 256))
          ]),
          Sd,
          Cd
        ])) : ne("", !0)
      ], 64))
    ])
  ]);
}
const Td = /* @__PURE__ */ Pe(pf, [["render", wd], ["__scopeId", "data-v-2f43e54e"]]), Pd = { class: "Page" }, Id = "error", Ld = {
  __name: "error",
  setup(e) {
    return (t, s) => (b(), C("div", Pd, R(Id)));
  }
}, Ed = /* @__PURE__ */ Pe(Ld, [["__scopeId", "data-v-7c015945"]]);
function Ad(e, t) {
  const s = (() => {
    const n = location.pathname + location.search;
    return n === t.start ? Ia : n === t.form ? zu : n.startsWith(t.result) ? Td : Ed;
  })();
  fa({
    render() {
      return Ll(s, {
        pathStart: t.start,
        pathForm: t.form,
        pathResult: t.result,
        pathInquiry: t.inquiry
      });
    }
  }).mount(e);
}
export {
  Ad as simulatorApp
};
