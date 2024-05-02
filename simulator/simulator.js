/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function nt(e, t) {
  const n = new Set(e.split(","));
  return (o) => n.has(o);
}
const te = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ht = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ae = () => {
}, xi = () => !1, mn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Un = (e) => e.startsWith("onUpdate:"), se = Object.assign, Go = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hi = Object.prototype.hasOwnProperty, B = (e, t) => Hi.call(e, t), T = Array.isArray, St = (e) => gn(e) === "[object Map]", qt = (e) => gn(e) === "[object Set]", ws = (e) => gn(e) === "[object Date]", A = (e) => typeof e == "function", ce = (e) => typeof e == "string", tt = (e) => typeof e == "symbol", G = (e) => e !== null && typeof e == "object", Jo = (e) => (G(e) || A(e)) && A(e.then) && A(e.catch), vr = Object.prototype.toString, gn = (e) => vr.call(e), Xo = (e) => gn(e).slice(8, -1), yr = (e) => gn(e) === "[object Object]", Zo = (e) => ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, sn = /* @__PURE__ */ nt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ji = /* @__PURE__ */ nt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Jn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Bi = /-(\w)/g, ze = Jn((e) => e.replace(Bi, (t, n) => n ? n.toUpperCase() : "")), Ui = /\B([A-Z])/g, gt = Jn(
  (e) => e.replace(Ui, "-$1").toLowerCase()
), Pt = Jn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ot = Jn((e) => e ? `on${Pt(e)}` : ""), kt = (e, t) => !Object.is(e, t), Mt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, br = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Er = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ki = (e) => {
  const t = ce(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ss;
const Qo = () => Ss || (Ss = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _n(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = ce(o) ? Yi(o) : _n(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (ce(e) || G(e))
    return e;
}
const Wi = /;(?![^(]*\))/g, zi = /:([^]+)/, qi = /\/\*[^]*?\*\//g;
function Yi(e) {
  const t = {};
  return e.replace(qi, "").split(Wi).forEach((n) => {
    if (n) {
      const o = n.split(zi);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Xn(e) {
  let t = "";
  if (ce(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = Xn(e[n]);
      o && (t += o + " ");
    }
  else if (G(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Gi = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ji = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Xi = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Zi = /* @__PURE__ */ nt(Gi), Qi = /* @__PURE__ */ nt(Ji), el = /* @__PURE__ */ nt(Xi), tl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", nl = /* @__PURE__ */ nt(tl);
function Nr(e) {
  return !!e || e === "";
}
function ol(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = Lt(e[o], t[o]);
  return n;
}
function Lt(e, t) {
  if (e === t)
    return !0;
  let n = ws(e), o = ws(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = tt(e), o = tt(t), n || o)
    return e === t;
  if (n = T(e), o = T(t), n || o)
    return n && o ? ol(e, t) : !1;
  if (n = G(e), o = G(t), n || o) {
    if (!n || !o)
      return !1;
    const s = Object.keys(e).length, r = Object.keys(t).length;
    if (s !== r)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (l && !a || !l && a || !Lt(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function es(e, t) {
  return e.findIndex((n) => Lt(n, t));
}
const L = (e) => ce(e) ? e : e == null ? "" : T(e) || G(e) && (e.toString === vr || !A(e.toString)) ? JSON.stringify(e, Or, 2) : String(e), Or = (e, t) => t && t.__v_isRef ? Or(e, t.value) : St(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[mo(o, r) + " =>"] = s, n),
    {}
  )
} : qt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => mo(n))
} : tt(t) ? mo(t) : G(t) && !T(t) && !yr(t) ? String(t) : t, mo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    tt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function _t(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Fe;
class sl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Fe, !t && Fe && (this.index = (Fe.scopes || (Fe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Fe;
      try {
        return Fe = this, t();
      } finally {
        Fe = n;
      }
    } else
      process.env.NODE_ENV !== "production" && _t("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Fe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Fe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function rl(e, t = Fe) {
  t && t.active && t.effects.push(e);
}
function il() {
  return Fe;
}
let Ct;
class ts {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, rl(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, ot();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (ll(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), st();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = mt, n = Ct;
    try {
      return mt = !0, Ct = this, this._runnings++, Cs(this), this.fn();
    } finally {
      Vs(this), this._runnings--, Ct = n, mt = t;
    }
  }
  stop() {
    this.active && (Cs(this), Vs(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ll(e) {
  return e.value;
}
function Cs(e) {
  e._trackId++, e._depsLength = 0;
}
function Vs(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      $r(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function $r(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let mt = !0, Vo = 0;
const wr = [];
function ot() {
  wr.push(mt), mt = !1;
}
function st() {
  const e = wr.pop();
  mt = e === void 0 ? !0 : e;
}
function ns() {
  Vo++;
}
function os() {
  for (Vo--; !Vo && Do.length; )
    Do.shift()();
}
function Sr(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && $r(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, se({ effect: e }, n)));
  }
}
const Do = [];
function Cr(e, t, n) {
  var o;
  ns();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, se({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && Do.push(s.scheduler)));
  }
  os();
}
const Vr = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, To = /* @__PURE__ */ new WeakMap(), Vt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Io = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function ve(e, t, n) {
  if (mt && Ct) {
    let o = To.get(e);
    o || To.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Vr(() => o.delete(n))), Sr(
      Ct,
      s,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function We(e, t, n, o, s, r) {
  const i = To.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && T(e)) {
    const a = Number(o);
    i.forEach((d, m) => {
      (m === "length" || !tt(m) && m >= a) && l.push(d);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        T(e) ? Zo(n) && l.push(i.get("length")) : (l.push(i.get(Vt)), St(e) && l.push(i.get(Io)));
        break;
      case "delete":
        T(e) || (l.push(i.get(Vt)), St(e) && l.push(i.get(Io)));
        break;
      case "set":
        St(e) && l.push(i.get(Vt));
        break;
    }
  ns();
  for (const a of l)
    a && Cr(
      a,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: s,
        oldTarget: r
      } : void 0
    );
  os();
}
const cl = /* @__PURE__ */ nt("__proto__,__v_isRef,__isVue"), Dr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(tt)
), Ds = /* @__PURE__ */ al();
function al() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = j(this);
      for (let r = 0, i = this.length; r < i; r++)
        ve(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(j)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ot(), ns();
      const o = j(this)[t].apply(this, n);
      return os(), st(), o;
    };
  }), e;
}
function ul(e) {
  tt(e) || (e = String(e));
  const t = j(this);
  return ve(t, "has", e), t.hasOwnProperty(e);
}
class Tr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? Rr : Fr : r ? Ar : Lr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = T(t);
    if (!s) {
      if (i && B(Ds, n))
        return Reflect.get(Ds, n, o);
      if (n === "hasOwnProperty")
        return ul;
    }
    const l = Reflect.get(t, n, o);
    return (tt(n) ? Dr.has(n) : cl(n)) || (s || ve(t, "get", n), r) ? l : Ne(l) ? i && Zo(n) ? l : l.value : G(l) ? s ? Mr(l) : rs(l) : l;
  }
}
class Ir extends Tr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const a = Kt(r);
      if (!Bt(o) && !Kt(o) && (r = j(r), o = j(o)), !T(t) && Ne(r) && !Ne(o))
        return a ? !1 : (r.value = o, !0);
    }
    const i = T(t) && Zo(n) ? Number(n) < t.length : B(t, n), l = Reflect.set(t, n, o, s);
    return t === j(s) && (i ? kt(o, r) && We(t, "set", n, o, r) : We(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = B(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && We(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!tt(n) || !Dr.has(n)) && ve(t, "has", n), o;
  }
  ownKeys(t) {
    return ve(
      t,
      "iterate",
      T(t) ? "length" : Vt
    ), Reflect.ownKeys(t);
  }
}
class Pr extends Tr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && _t(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && _t(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const dl = /* @__PURE__ */ new Ir(), fl = /* @__PURE__ */ new Pr(), pl = /* @__PURE__ */ new Ir(
  !0
), hl = /* @__PURE__ */ new Pr(!0), ss = (e) => e, Zn = (e) => Reflect.getPrototypeOf(e);
function Sn(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = j(e), r = j(t);
  n || (kt(t, r) && ve(s, "get", t), ve(s, "get", r));
  const { has: i } = Zn(s), l = o ? ss : n ? ls : is;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function Cn(e, t = !1) {
  const n = this.__v_raw, o = j(n), s = j(e);
  return t || (kt(e, s) && ve(o, "has", e), ve(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Vn(e, t = !1) {
  return e = e.__v_raw, !t && ve(j(e), "iterate", Vt), Reflect.get(e, "size", e);
}
function Ts(e) {
  e = j(e);
  const t = j(this);
  return Zn(t).has.call(t, e) || (t.add(e), We(t, "add", e, e)), this;
}
function Is(e, t) {
  t = j(t);
  const n = j(this), { has: o, get: s } = Zn(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && kr(n, o, e) : (e = j(e), r = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), r ? kt(t, i) && We(n, "set", e, t, i) : We(n, "add", e, t), this;
}
function Ps(e) {
  const t = j(this), { has: n, get: o } = Zn(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && kr(t, n, e) : (e = j(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && We(t, "delete", e, void 0, r), i;
}
function ks() {
  const e = j(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? St(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && We(e, "clear", void 0, void 0, n), o;
}
function Dn(e, t) {
  return function(o, s) {
    const r = this, i = r.__v_raw, l = j(i), a = t ? ss : e ? ls : is;
    return !e && ve(l, "iterate", Vt), i.forEach((d, m) => o.call(s, a(d), a(m), r));
  };
}
function Tn(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = j(s), i = St(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, d = s[e](...o), m = n ? ss : t ? ls : is;
    return !t && ve(
      r,
      "iterate",
      a ? Io : Vt
    ), {
      // iterator protocol
      next() {
        const { value: p, done: h } = d.next();
        return h ? { value: p, done: h } : {
          value: l ? [m(p[0]), m(p[1])] : m(p),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function lt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      _t(
        `${Pt(e)} operation ${n}failed: target is readonly.`,
        j(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ml() {
  const e = {
    get(r) {
      return Sn(this, r);
    },
    get size() {
      return Vn(this);
    },
    has: Cn,
    add: Ts,
    set: Is,
    delete: Ps,
    clear: ks,
    forEach: Dn(!1, !1)
  }, t = {
    get(r) {
      return Sn(this, r, !1, !0);
    },
    get size() {
      return Vn(this);
    },
    has: Cn,
    add: Ts,
    set: Is,
    delete: Ps,
    clear: ks,
    forEach: Dn(!1, !0)
  }, n = {
    get(r) {
      return Sn(this, r, !0);
    },
    get size() {
      return Vn(this, !0);
    },
    has(r) {
      return Cn.call(this, r, !0);
    },
    add: lt("add"),
    set: lt("set"),
    delete: lt("delete"),
    clear: lt("clear"),
    forEach: Dn(!0, !1)
  }, o = {
    get(r) {
      return Sn(this, r, !0, !0);
    },
    get size() {
      return Vn(this, !0);
    },
    has(r) {
      return Cn.call(this, r, !0);
    },
    add: lt("add"),
    set: lt("set"),
    delete: lt("delete"),
    clear: lt("clear"),
    forEach: Dn(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    e[r] = Tn(r, !1, !1), n[r] = Tn(r, !0, !1), t[r] = Tn(r, !1, !0), o[r] = Tn(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  gl,
  _l,
  vl,
  yl
] = /* @__PURE__ */ ml();
function Qn(e, t) {
  const n = t ? e ? yl : vl : e ? _l : gl;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    B(n, s) && s in o ? n : o,
    s,
    r
  );
}
const bl = {
  get: /* @__PURE__ */ Qn(!1, !1)
}, El = {
  get: /* @__PURE__ */ Qn(!1, !0)
}, Nl = {
  get: /* @__PURE__ */ Qn(!0, !1)
}, Ol = {
  get: /* @__PURE__ */ Qn(!0, !0)
};
function kr(e, t, n) {
  const o = j(n);
  if (o !== n && t.call(e, o)) {
    const s = Xo(e);
    _t(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Lr = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap();
function $l(e) {
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
function wl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $l(Xo(e));
}
function rs(e) {
  return Kt(e) ? e : eo(
    e,
    !1,
    dl,
    bl,
    Lr
  );
}
function Sl(e) {
  return eo(
    e,
    !1,
    pl,
    El,
    Ar
  );
}
function Mr(e) {
  return eo(
    e,
    !0,
    fl,
    Nl,
    Fr
  );
}
function Ke(e) {
  return eo(
    e,
    !0,
    hl,
    Ol,
    Rr
  );
}
function eo(e, t, n, o, s) {
  if (!G(e))
    return process.env.NODE_ENV !== "production" && _t(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = wl(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return s.set(e, l), l;
}
function jt(e) {
  return Kt(e) ? jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Kt(e) {
  return !!(e && e.__v_isReadonly);
}
function Bt(e) {
  return !!(e && e.__v_isShallow);
}
function Po(e) {
  return e ? !!e.__v_raw : !1;
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function Cl(e) {
  return Object.isExtensible(e) && br(e, "__v_skip", !0), e;
}
const is = (e) => G(e) ? rs(e) : e, ls = (e) => G(e) ? Mr(e) : e, Vl = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class xr {
  constructor(t, n, o, s) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new ts(
      () => t(this._value),
      () => go(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
  }
  get value() {
    const t = j(this);
    return (!t._cacheable || t.effect.dirty) && kt(t._value, t._value = t.effect.run()) && go(t, 4), Tl(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && _t(Vl, `

getter: `, this.getter), go(t, 2)), t._value;
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
function Dl(e, t, n = !1) {
  let o, s;
  const r = A(e);
  r ? (o = e, s = process.env.NODE_ENV !== "production" ? () => {
    _t("Write operation failed: computed value is readonly");
  } : ae) : (o = e.get, s = e.set);
  const i = new xr(o, s, r || !s, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
function Tl(e) {
  var t;
  mt && Ct && (e = j(e), Sr(
    Ct,
    (t = e.dep) != null ? t : e.dep = Vr(
      () => e.dep = void 0,
      e instanceof xr ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function go(e, t = 4, n) {
  e = j(e);
  const o = e.dep;
  o && Cr(
    o,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function Ne(e) {
  return !!(e && e.__v_isRef === !0);
}
function Il(e) {
  return Ne(e) ? e.value : e;
}
const Pl = {
  get: (e, t, n) => Il(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return Ne(s) && !Ne(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Hr(e) {
  return jt(e) ? e : new Proxy(e, Pl);
}
/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Dt = [];
function An(e) {
  Dt.push(e);
}
function Fn() {
  Dt.pop();
}
function O(e, ...t) {
  ot();
  const n = Dt.length ? Dt[Dt.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = kl();
  if (o)
    Ze(
      o,
      n,
      11,
      [
        e + t.map((r) => {
          var i, l;
          return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${lo(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Ll(s)), console.warn(...r);
  }
  st();
}
function kl() {
  let e = Dt[Dt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Ll(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Al(n));
  }), t;
}
function Al({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${lo(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Fl(e.props), r] : [s + r];
}
function Fl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...jr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function jr(e, t, n) {
  return ce(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ne(t) ? (t = jr(e, j(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = j(t), n ? t : [`${e}=`, t]);
}
function Rl(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? O(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && O(`${t} is NaN - the duration expression might be incorrect.`));
}
const cs = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Ze(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    vn(s, t, n);
  }
}
function Pe(e, t, n, o) {
  if (A(e)) {
    const s = Ze(e, t, n, o);
    return s && Jo(s) && s.catch((r) => {
      vn(r, t, n);
    }), s;
  }
  if (T(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(Pe(e[r], t, n, o));
    return s;
  } else
    process.env.NODE_ENV !== "production" && O(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function vn(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? cs[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const d = r.ec;
      if (d) {
        for (let m = 0; m < d.length; m++)
          if (d[m](e, i, l) === !1)
            return;
      }
      r = r.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      ot(), Ze(
        a,
        null,
        10,
        [e, i, l]
      ), st();
      return;
    }
  }
  Ml(e, n, s, o);
}
function Ml(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = cs[t];
    if (n && An(n), O(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Fn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let un = !1, ko = !1;
const Ee = [];
let Ue = 0;
const Ut = [];
let Xe = null, ut = 0;
const Br = /* @__PURE__ */ Promise.resolve();
let as = null;
const xl = 100;
function Ur(e) {
  const t = as || Br;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Hl(e) {
  let t = Ue + 1, n = Ee.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = Ee[o], r = dn(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function to(e) {
  (!Ee.length || !Ee.includes(
    e,
    un && e.allowRecurse ? Ue + 1 : Ue
  )) && (e.id == null ? Ee.push(e) : Ee.splice(Hl(e.id), 0, e), Kr());
}
function Kr() {
  !un && !ko && (ko = !0, as = Br.then(qr));
}
function jl(e) {
  const t = Ee.indexOf(e);
  t > Ue && Ee.splice(t, 1);
}
function Wr(e) {
  T(e) ? Ut.push(...e) : (!Xe || !Xe.includes(
    e,
    e.allowRecurse ? ut + 1 : ut
  )) && Ut.push(e), Kr();
}
function Ls(e, t, n = un ? Ue + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ee.length; n++) {
    const o = Ee[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && us(t, o))
        continue;
      Ee.splice(n, 1), n--, o();
    }
  }
}
function zr(e) {
  if (Ut.length) {
    const t = [...new Set(Ut)].sort(
      (n, o) => dn(n) - dn(o)
    );
    if (Ut.length = 0, Xe) {
      Xe.push(...t);
      return;
    }
    for (Xe = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ut = 0; ut < Xe.length; ut++)
      process.env.NODE_ENV !== "production" && us(e, Xe[ut]) || Xe[ut]();
    Xe = null, ut = 0;
  }
}
const dn = (e) => e.id == null ? 1 / 0 : e.id, Bl = (e, t) => {
  const n = dn(e) - dn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function qr(e) {
  ko = !1, un = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ee.sort(Bl);
  const t = process.env.NODE_ENV !== "production" ? (n) => us(e, n) : ae;
  try {
    for (Ue = 0; Ue < Ee.length; Ue++) {
      const n = Ee[Ue];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Ze(n, null, 14);
      }
    }
  } finally {
    Ue = 0, Ee.length = 0, zr(e), un = !1, as = null, (Ee.length || Ut.length) && qr(e);
  }
}
function us(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > xl) {
      const o = t.ownerInstance, s = o && vs(o.type);
      return vn(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let Tt = !1;
const xt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Qo().__VUE_HMR_RUNTIME__ = {
  createRecord: _o(Yr),
  rerender: _o(Wl),
  reload: _o(zl)
});
const At = /* @__PURE__ */ new Map();
function Ul(e) {
  const t = e.type.__hmrId;
  let n = At.get(t);
  n || (Yr(t, e.type), n = At.get(t)), n.instances.add(e);
}
function Kl(e) {
  At.get(e.type.__hmrId).instances.delete(e);
}
function Yr(e, t) {
  return At.has(e) ? !1 : (At.set(e, {
    initialDef: rn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function rn(e) {
  return Di(e) ? e.__vccOpts : e;
}
function Wl(e, t) {
  const n = At.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, rn(o.type).render = t), o.renderCache = [], Tt = !0, o.effect.dirty = !0, o.update(), Tt = !1;
  }));
}
function zl(e, t) {
  const n = At.get(e);
  if (!n)
    return;
  t = rn(t), As(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = rn(s.type);
    xt.has(r) || (r !== n.initialDef && As(r, t), xt.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (xt.add(r), s.ceReload(t.styles), xt.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, to(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Wr(() => {
    for (const s of o)
      xt.delete(
        rn(s.type)
      );
  });
}
function As(e, t) {
  se(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function _o(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Me, nn = [], Lo = !1;
function yn(e, ...t) {
  Me ? Me.emit(e, ...t) : Lo || nn.push({ event: e, args: t });
}
function ds(e, t) {
  var n, o;
  Me = e, Me ? (Me.enabled = !0, nn.forEach(({ event: s, args: r }) => Me.emit(s, ...r)), nn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    ds(r, t);
  }), setTimeout(() => {
    Me || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Lo = !0, nn = []);
  }, 3e3)) : (Lo = !0, nn = []);
}
function ql(e, t) {
  yn("app:init", e, t, {
    Fragment: W,
    Text: En,
    Comment: me,
    Static: cn
  });
}
function Yl(e) {
  yn("app:unmount", e);
}
const Gl = /* @__PURE__ */ fs(
  "component:added"
  /* COMPONENT_ADDED */
), Gr = /* @__PURE__ */ fs(
  "component:updated"
  /* COMPONENT_UPDATED */
), Jl = /* @__PURE__ */ fs(
  "component:removed"
  /* COMPONENT_REMOVED */
), Xl = (e) => {
  Me && typeof Me.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Me.cleanupBuffer(e) && Jl(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function fs(e) {
  return (t) => {
    yn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Zl = /* @__PURE__ */ Jr(
  "perf:start"
  /* PERFORMANCE_START */
), Ql = /* @__PURE__ */ Jr(
  "perf:end"
  /* PERFORMANCE_END */
);
function Jr(e) {
  return (t, n, o) => {
    yn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function ec(e, t, n) {
  yn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function tc(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || te;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: m,
      propsOptions: [p]
    } = e;
    if (m)
      if (!(t in m))
        (!p || !(Ot(t) in p)) && O(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ot(t)}" prop.`
        );
      else {
        const h = m[t];
        A(h) && (h(...n) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && t.slice(7);
  if (i && i in o) {
    const m = `${i === "modelValue" ? "model" : i}Modifiers`, { number: p, trim: h } = o[m] || te;
    h && (s = n.map((w) => ce(w) ? w.trim() : w)), p && (s = n.map(Er));
  }
  if (process.env.NODE_ENV !== "production" && ec(e, t, s), process.env.NODE_ENV !== "production") {
    const m = t.toLowerCase();
    m !== t && o[Ot(m)] && O(
      `Event "${m}" is emitted in component ${lo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${gt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = o[l = Ot(t)] || // also try camelCase event handler (#2249)
  o[l = Ot(ze(t))];
  !a && r && (a = o[l = Ot(gt(t))]), a && Pe(
    a,
    e,
    6,
    s
  );
  const d = o[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Pe(
      d,
      e,
      6,
      s
    );
  }
}
function Xr(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, l = !1;
  if (!A(e)) {
    const a = (d) => {
      const m = Xr(d, t, !0);
      m && (l = !0, se(i, m));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (G(e) && o.set(e, null), null) : (T(r) ? r.forEach((a) => i[a] = null) : se(i, r), G(e) && o.set(e, i), i);
}
function no(e, t) {
  return !e || !mn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), B(e, t[0].toLowerCase() + t.slice(1)) || B(e, gt(t)) || B(e, t));
}
let _e = null, oo = null;
function Kn(e) {
  const t = _e;
  return _e = e, oo = e && e.type.__scopeId || null, t;
}
function Yt(e) {
  oo = e;
}
function Gt() {
  oo = null;
}
function Ao(e, t = _e, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && Gs(-1);
    const r = Kn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Kn(r), o._d && Gs(1);
    }
    return process.env.NODE_ENV !== "production" && Gr(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Fo = !1;
function Wn() {
  Fo = !0;
}
function vo(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: a,
    render: d,
    renderCache: m,
    props: p,
    data: h,
    setupState: w,
    ctx: P,
    inheritAttrs: R
  } = e, pe = Kn(e);
  let ee, oe;
  process.env.NODE_ENV !== "production" && (Fo = !1);
  try {
    if (n.shapeFlag & 4) {
      const J = s || o, ye = process.env.NODE_ENV !== "production" && w.__isScriptSetup ? new Proxy(J, {
        get(M, F, z) {
          return O(
            `Property '${String(
              F
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, F, z);
        }
      }) : J;
      ee = Re(
        d.call(
          ye,
          J,
          m,
          process.env.NODE_ENV !== "production" ? Ke(p) : p,
          w,
          h,
          P
        )
      ), oe = l;
    } else {
      const J = t;
      process.env.NODE_ENV !== "production" && l === p && Wn(), ee = Re(
        J.length > 1 ? J(
          process.env.NODE_ENV !== "production" ? Ke(p) : p,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Wn(), Ke(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : J(
          process.env.NODE_ENV !== "production" ? Ke(p) : p,
          null
        )
      ), oe = t.props ? l : nc(l);
    }
  } catch (J) {
    an.length = 0, vn(J, e, 1), ee = H(me);
  }
  let Z = ee, Y;
  if (process.env.NODE_ENV !== "production" && ee.patchFlag > 0 && ee.patchFlag & 2048 && ([Z, Y] = Zr(ee)), oe && R !== !1) {
    const J = Object.keys(oe), { shapeFlag: ye } = Z;
    if (J.length) {
      if (ye & 7)
        r && J.some(Un) && (oe = oc(
          oe,
          r
        )), Z = qe(Z, oe, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Fo && Z.type !== me) {
        const M = Object.keys(l), F = [], z = [];
        for (let ne = 0, de = M.length; ne < de; ne++) {
          const D = M[ne];
          mn(D) ? Un(D) || F.push(D[2].toLowerCase() + D.slice(3)) : z.push(D);
        }
        z.length && O(
          `Extraneous non-props attributes (${z.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), F.length && O(
          `Extraneous non-emits event listeners (${F.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Fs(Z) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), Z = qe(Z, null, !1, !0), Z.dirs = Z.dirs ? Z.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Fs(Z) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Z.transition = n.transition), process.env.NODE_ENV !== "production" && Y ? Y(Z) : ee = Z, Kn(pe), ee;
}
const Zr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = ps(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Zr(o);
  } else
    return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Re(o), i];
};
function ps(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (pn(s)) {
      if (s.type !== me || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return ps(n.children);
      }
    } else
      return;
  }
  return n;
}
const nc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || mn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, oc = (e, t) => {
  const n = {};
  for (const o in e)
    (!Un(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Fs = (e) => e.shapeFlag & 7 || e.type === me;
function sc(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: l, patchFlag: a } = t, d = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && Tt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? Rs(o, i, d) : !!i;
    if (a & 8) {
      const m = t.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        const h = m[p];
        if (i[h] !== o[h] && !no(d, h))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Rs(o, i, d) : !0 : !!i;
  return !1;
}
function Rs(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !no(n, r))
      return !0;
  }
  return !1;
}
function rc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ic = "components";
function Ce(e, t) {
  return cc(ic, e, !0, t) || e;
}
const lc = Symbol.for("v-ndc");
function cc(e, t, n = !0, o = !1) {
  const s = _e || fe;
  if (s) {
    const r = s.type;
    {
      const l = vs(
        r,
        !1
      );
      if (l && (l === t || l === ze(t) || l === Pt(ze(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ms(s[e] || r[e], t) || // global registration
      Ms(s.appContext[e], t)
    );
    return !i && o ? r : (process.env.NODE_ENV !== "production" && n && !i && O(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), i);
  } else
    process.env.NODE_ENV !== "production" && O(
      `resolve${Pt(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Ms(e, t) {
  return e && (e[t] || e[ze(t)] || e[Pt(ze(t))]);
}
const ac = (e) => e.__isSuspense;
function uc(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Wr(e);
}
const dc = Symbol.for("v-scx"), fc = () => {
  {
    const e = Mn(dc);
    return e || process.env.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, In = {};
function yo(e, t, n) {
  return process.env.NODE_ENV !== "production" && !A(t) && O(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Qr(e, t, n);
}
function Qr(e, t, {
  immediate: n,
  deep: o,
  flush: s,
  once: r,
  onTrack: i,
  onTrigger: l
} = te) {
  if (t && r) {
    const M = t;
    t = (...F) => {
      M(...F), ye();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && O(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && O(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = (M) => {
    O(
      "Invalid watch source: ",
      M,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = fe, m = (M) => o === !0 ? M : (
    // for deep: false, only traverse root-level properties
    wt(M, o === !1 ? 1 : void 0)
  );
  let p, h = !1, w = !1;
  if (Ne(e) ? (p = () => e.value, h = Bt(e)) : jt(e) ? (p = () => m(e), h = !0) : T(e) ? (w = !0, h = e.some((M) => jt(M) || Bt(M)), p = () => e.map((M) => {
    if (Ne(M))
      return M.value;
    if (jt(M))
      return m(M);
    if (A(M))
      return Ze(M, d, 2);
    process.env.NODE_ENV !== "production" && a(M);
  })) : A(e) ? t ? p = () => Ze(e, d, 2) : p = () => (P && P(), Pe(
    e,
    d,
    3,
    [R]
  )) : (p = ae, process.env.NODE_ENV !== "production" && a(e)), t && o) {
    const M = p;
    p = () => wt(M());
  }
  let P, R = (M) => {
    P = Y.onStop = () => {
      Ze(M, d, 4), P = Y.onStop = void 0;
    };
  }, pe;
  if (ro)
    if (R = ae, t ? n && Pe(t, d, 3, [
      p(),
      w ? [] : void 0,
      R
    ]) : p(), s === "sync") {
      const M = fc();
      pe = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return ae;
  let ee = w ? new Array(e.length).fill(In) : In;
  const oe = () => {
    if (!(!Y.active || !Y.dirty))
      if (t) {
        const M = Y.run();
        (o || h || (w ? M.some((F, z) => kt(F, ee[z])) : kt(M, ee))) && (P && P(), Pe(t, d, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          ee === In ? void 0 : w && ee[0] === In ? [] : ee,
          R
        ]), ee = M);
      } else
        Y.run();
  };
  oe.allowRecurse = !!t;
  let Z;
  s === "sync" ? Z = oe : s === "post" ? Z = () => Se(oe, d && d.suspense) : (oe.pre = !0, d && (oe.id = d.uid), Z = () => to(oe));
  const Y = new ts(p, ae, Z), J = il(), ye = () => {
    Y.stop(), J && Go(J.effects, Y);
  };
  return process.env.NODE_ENV !== "production" && (Y.onTrack = i, Y.onTrigger = l), t ? n ? oe() : ee = Y.run() : s === "post" ? Se(
    Y.run.bind(Y),
    d && d.suspense
  ) : Y.run(), pe && pe.push(ye), ye;
}
function pc(e, t, n) {
  const o = this.proxy, s = ce(e) ? e.includes(".") ? ei(o, e) : () => o[e] : e.bind(o, o);
  let r;
  A(t) ? r = t : (r = t.handler, n = t);
  const i = Nn(this), l = Qr(s, r.bind(o), n);
  return i(), l;
}
function ei(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function wt(e, t = 1 / 0, n) {
  if (t <= 0 || !G(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ne(e))
    wt(e.value, t, n);
  else if (T(e))
    for (let o = 0; o < e.length; o++)
      wt(e[o], t, n);
  else if (qt(e) || St(e))
    e.forEach((o) => {
      wt(o, t, n);
    });
  else if (yr(e))
    for (const o in e)
      wt(e[o], t, n);
  return e;
}
function ti(e) {
  ji(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function Qt(e, t) {
  if (_e === null)
    return process.env.NODE_ENV !== "production" && O("withDirectives can only be used inside render functions."), e;
  const n = io(_e) || _e.proxy, o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, i, l, a = te] = t[s];
    r && (A(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && wt(i), o.push({
      dir: r,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function yt(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[o];
    a && (ot(), Pe(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), st());
  }
}
const dt = Symbol("_leaveCb"), Pn = Symbol("_enterCb");
function hc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ii(() => {
    e.isMounted = !0;
  }), li(() => {
    e.isUnmounting = !0;
  }), e;
}
const Te = [Function, Array], ni = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Te,
  onEnter: Te,
  onAfterEnter: Te,
  onEnterCancelled: Te,
  // leave
  onBeforeLeave: Te,
  onLeave: Te,
  onAfterLeave: Te,
  onLeaveCancelled: Te,
  // appear
  onBeforeAppear: Te,
  onAppear: Te,
  onAfterAppear: Te,
  onAppearCancelled: Te
}, mc = {
  name: "BaseTransition",
  props: ni,
  setup(e, { slots: t }) {
    const n = Si(), o = hc();
    return () => {
      const s = t.default && si(t.default(), !0);
      if (!s || !s.length)
        return;
      let r = s[0];
      if (s.length > 1) {
        let h = !1;
        for (const w of s)
          if (w.type !== me) {
            if (process.env.NODE_ENV !== "production" && h) {
              O(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (r = w, h = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const i = j(e), { mode: l } = i;
      if (process.env.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && O(`invalid <transition> mode: ${l}`), o.isLeaving)
        return bo(r);
      const a = xs(r);
      if (!a)
        return bo(r);
      const d = Ro(
        a,
        i,
        o,
        n
      );
      Mo(a, d);
      const m = n.subTree, p = m && xs(m);
      if (p && p.type !== me && !$t(a, p)) {
        const h = Ro(
          p,
          i,
          o,
          n
        );
        if (Mo(p, h), l === "out-in" && a.type !== me)
          return o.isLeaving = !0, h.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, bo(r);
        l === "in-out" && a.type !== me && (h.delayLeave = (w, P, R) => {
          const pe = oi(
            o,
            p
          );
          pe[String(p.key)] = p, w[dt] = () => {
            P(), w[dt] = void 0, delete d.delayedLeave;
          }, d.delayedLeave = R;
        });
      }
      return r;
    };
  }
}, gc = mc;
function oi(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function Ro(e, t, n, o) {
  const {
    appear: s,
    mode: r,
    persisted: i = !1,
    onBeforeEnter: l,
    onEnter: a,
    onAfterEnter: d,
    onEnterCancelled: m,
    onBeforeLeave: p,
    onLeave: h,
    onAfterLeave: w,
    onLeaveCancelled: P,
    onBeforeAppear: R,
    onAppear: pe,
    onAfterAppear: ee,
    onAppearCancelled: oe
  } = t, Z = String(e.key), Y = oi(n, e), J = (F, z) => {
    F && Pe(
      F,
      o,
      9,
      z
    );
  }, ye = (F, z) => {
    const ne = z[1];
    J(F, z), T(F) ? F.every((de) => de.length <= 1) && ne() : F.length <= 1 && ne();
  }, M = {
    mode: r,
    persisted: i,
    beforeEnter(F) {
      let z = l;
      if (!n.isMounted)
        if (s)
          z = R || l;
        else
          return;
      F[dt] && F[dt](
        !0
        /* cancelled */
      );
      const ne = Y[Z];
      ne && $t(e, ne) && ne.el[dt] && ne.el[dt](), J(z, [F]);
    },
    enter(F) {
      let z = a, ne = d, de = m;
      if (!n.isMounted)
        if (s)
          z = pe || a, ne = ee || d, de = oe || m;
        else
          return;
      let D = !1;
      const ie = F[Pn] = (De) => {
        D || (D = !0, De ? J(de, [F]) : J(ne, [F]), M.delayedLeave && M.delayedLeave(), F[Pn] = void 0);
      };
      z ? ye(z, [F, ie]) : ie();
    },
    leave(F, z) {
      const ne = String(e.key);
      if (F[Pn] && F[Pn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return z();
      J(p, [F]);
      let de = !1;
      const D = F[dt] = (ie) => {
        de || (de = !0, z(), ie ? J(P, [F]) : J(w, [F]), F[dt] = void 0, Y[ne] === e && delete Y[ne]);
      };
      Y[ne] = e, h ? ye(h, [F, D]) : D();
    },
    clone(F) {
      return Ro(F, t, n, o);
    }
  };
  return M;
}
function bo(e) {
  if (bn(e))
    return e = qe(e), e.children = null, e;
}
function xs(e) {
  if (!bn(e))
    return e;
  if (process.env.NODE_ENV !== "production" && e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && A(n.default))
      return n.default();
  }
}
function Mo(e, t) {
  e.shapeFlag & 6 && e.component ? Mo(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function si(e, t = !1, n) {
  let o = [], s = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === W ? (i.patchFlag & 128 && s++, o = o.concat(
      si(i.children, t, l)
    )) : (t || i.type !== me) && o.push(l != null ? qe(i, { key: l }) : i);
  }
  if (s > 1)
    for (let r = 0; r < o.length; r++)
      o[r].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ke(e, t) {
  return A(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    se({ name: e.name }, t, { setup: e })
  ) : e;
}
const Rn = (e) => !!e.type.__asyncLoader, bn = (e) => e.type.__isKeepAlive;
function _c(e, t) {
  ri(e, "a", t);
}
function vc(e, t) {
  ri(e, "da", t);
}
function ri(e, t, n = fe) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (so(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      bn(s.parent.vnode) && yc(o, t, n, s), s = s.parent;
  }
}
function yc(e, t, n, o) {
  const s = so(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  ci(() => {
    Go(o[t], s);
  }, n);
}
function so(e, t, n = fe, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      ot();
      const l = Nn(n), a = Pe(t, n, e, i);
      return l(), st(), a;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Ot(cs[e].replace(/ hook$/, ""));
    O(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const rt = (e) => (t, n = fe) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!ro || e === "sp") && so(e, (...o) => t(...o), n)
), bc = rt("bm"), ii = rt("m"), Ec = rt("bu"), Nc = rt("u"), li = rt("bum"), ci = rt("um"), Oc = rt("sp"), $c = rt(
  "rtg"
), wc = rt(
  "rtc"
);
function Sc(e, t = fe) {
  so("ec", e, t);
}
function Ie(e, t, n, o) {
  let s;
  const r = n;
  if (T(e) || ce(e)) {
    s = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      s[i] = t(e[i], i, void 0, r);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && O(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, r);
  } else if (G(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (i, l) => t(i, l, void 0, r)
      );
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let l = 0, a = i.length; l < a; l++) {
        const d = i[l];
        s[l] = t(e[d], d, l, r);
      }
    }
  else
    s = [];
  return s;
}
const xo = (e) => e ? Ci(e) ? io(e) || e.proxy : xo(e.parent) : null, It = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ke(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ke(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ke(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ke(e.refs) : e.refs,
    $parent: (e) => xo(e.parent),
    $root: (e) => xo(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ms(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, to(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ur.bind(e.proxy)),
    $watch: (e) => pc.bind(e)
  })
), hs = (e) => e === "_" || e === "$", Eo = (e, t) => e !== te && !e.__isScriptSetup && B(e, t), ai = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const w = i[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Eo(o, t))
          return i[t] = 1, o[t];
        if (s !== te && B(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && B(d, t)
        )
          return i[t] = 3, r[t];
        if (n !== te && B(n, t))
          return i[t] = 4, n[t];
        Ho && (i[t] = 0);
      }
    }
    const m = It[t];
    let p, h;
    if (m)
      return t === "$attrs" ? (ve(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Wn()) : process.env.NODE_ENV !== "production" && t === "$slots" && ve(e, "get", t), m(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== te && B(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, B(h, t)
    )
      return h[t];
    process.env.NODE_ENV !== "production" && _e && (!ce(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== te && hs(t[0]) && B(s, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === _e && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Eo(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && B(s, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== te && B(o, t) ? (o[t] = n, !0) : B(e.props, t) ? (process.env.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && O(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== te && B(e, i) || Eo(t, i) || (l = r[0]) && B(l, i) || B(o, i) || B(It, i) || B(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : B(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (ai.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Cc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(It).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => It[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ae
    });
  }), t;
}
function Vc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ae
    });
  });
}
function Dc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(j(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (hs(o[0])) {
        O(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ae
      });
    }
  });
}
function Hs(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Tc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Ho = !0;
function Ic(e) {
  const t = ms(e), n = e.proxy, o = e.ctx;
  Ho = !1, t.beforeCreate && js(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: d,
    // lifecycle
    created: m,
    beforeMount: p,
    mounted: h,
    beforeUpdate: w,
    updated: P,
    activated: R,
    deactivated: pe,
    beforeDestroy: ee,
    beforeUnmount: oe,
    destroyed: Z,
    unmounted: Y,
    render: J,
    renderTracked: ye,
    renderTriggered: M,
    errorCaptured: F,
    serverPrefetch: z,
    // public API
    expose: ne,
    inheritAttrs: de,
    // assets
    components: D,
    directives: ie,
    filters: De
  } = t, Le = process.env.NODE_ENV !== "production" ? Tc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [q] = e.propsOptions;
    if (q)
      for (const K in q)
        Le("Props", K);
  }
  if (d && Pc(d, o, Le), i)
    for (const q in i) {
      const K = i[q];
      A(K) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, q, {
        value: K.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[q] = K.bind(n), process.env.NODE_ENV !== "production" && Le("Methods", q)) : process.env.NODE_ENV !== "production" && O(
        `Method "${q}" has type "${typeof K}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !A(s) && O(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const q = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && Jo(q) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !G(q))
      process.env.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = rs(q), process.env.NODE_ENV !== "production")
      for (const K in q)
        Le("Data", K), hs(K[0]) || Object.defineProperty(o, K, {
          configurable: !0,
          enumerable: !0,
          get: () => q[K],
          set: ae
        });
  }
  if (Ho = !0, r)
    for (const q in r) {
      const K = r[q], He = A(K) ? K.bind(n, n) : A(K.get) ? K.get.bind(n, n) : ae;
      process.env.NODE_ENV !== "production" && He === ae && O(`Computed property "${q}" has no getter.`);
      const fo = !A(K) && A(K.set) ? K.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${q}" is readonly.`
        );
      } : ae, Jt = va({
        get: He,
        set: fo
      });
      Object.defineProperty(o, q, {
        enumerable: !0,
        configurable: !0,
        get: () => Jt.value,
        set: (Ft) => Jt.value = Ft
      }), process.env.NODE_ENV !== "production" && Le("Computed", q);
    }
  if (l)
    for (const q in l)
      ui(l[q], o, n, q);
  if (a) {
    const q = A(a) ? a.call(n) : a;
    Reflect.ownKeys(q).forEach((K) => {
      Mc(K, q[K]);
    });
  }
  m && js(m, e, "c");
  function ge(q, K) {
    T(K) ? K.forEach((He) => q(He.bind(n))) : K && q(K.bind(n));
  }
  if (ge(bc, p), ge(ii, h), ge(Ec, w), ge(Nc, P), ge(_c, R), ge(vc, pe), ge(Sc, F), ge(wc, ye), ge($c, M), ge(li, oe), ge(ci, Y), ge(Oc, z), T(ne))
    if (ne.length) {
      const q = e.exposed || (e.exposed = {});
      ne.forEach((K) => {
        Object.defineProperty(q, K, {
          get: () => n[K],
          set: (He) => n[K] = He
        });
      });
    } else
      e.exposed || (e.exposed = {});
  J && e.render === ae && (e.render = J), de != null && (e.inheritAttrs = de), D && (e.components = D), ie && (e.directives = ie);
}
function Pc(e, t, n = ae) {
  T(e) && (e = jo(e));
  for (const o in e) {
    const s = e[o];
    let r;
    G(s) ? "default" in s ? r = Mn(
      s.from || o,
      s.default,
      !0
    ) : r = Mn(s.from || o) : r = Mn(s), Ne(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[o] = r, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function js(e, t, n) {
  Pe(
    T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ui(e, t, n, o) {
  const s = o.includes(".") ? ei(n, o) : () => n[o];
  if (ce(e)) {
    const r = t[e];
    A(r) ? yo(s, r) : process.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, r);
  } else if (A(e))
    yo(s, e.bind(n));
  else if (G(e))
    if (T(e))
      e.forEach((r) => ui(r, t, n, o));
    else {
      const r = A(e.handler) ? e.handler.bind(n) : t[e.handler];
      A(r) ? yo(s, r, e) : process.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    process.env.NODE_ENV !== "production" && O(`Invalid watch option: "${o}"`, e);
}
function ms(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !s.length && !n && !o ? a = t : (a = {}, s.length && s.forEach(
    (d) => zn(a, d, i, !0)
  ), zn(a, t, i)), G(t) && r.set(t, a), a;
}
function zn(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && zn(e, r, n, !0), s && s.forEach(
    (i) => zn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = kc[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const kc = {
  data: Bs,
  props: Us,
  emits: Us,
  // objects
  methods: on,
  computed: on,
  // lifecycle
  beforeCreate: we,
  created: we,
  beforeMount: we,
  mounted: we,
  beforeUpdate: we,
  updated: we,
  beforeDestroy: we,
  beforeUnmount: we,
  destroyed: we,
  unmounted: we,
  activated: we,
  deactivated: we,
  errorCaptured: we,
  serverPrefetch: we,
  // assets
  components: on,
  directives: on,
  // watch
  watch: Ac,
  // provide / inject
  provide: Bs,
  inject: Lc
};
function Bs(e, t) {
  return t ? e ? function() {
    return se(
      A(e) ? e.call(this, this) : e,
      A(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Lc(e, t) {
  return on(jo(e), jo(t));
}
function jo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function we(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function on(e, t) {
  return e ? se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Us(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : se(
    /* @__PURE__ */ Object.create(null),
    Hs(e),
    Hs(t ?? {})
  ) : t;
}
function Ac(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = se(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = we(e[o], t[o]);
  return n;
}
function di() {
  return {
    app: null,
    config: {
      isNativeTag: xi,
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
let Fc = 0;
function Rc(e, t) {
  return function(o, s = null) {
    A(o) || (o = se({}, o)), s != null && !G(s) && (process.env.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), s = null);
    const r = di(), i = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const a = r.app = {
      _uid: Fc++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Qs,
      get config() {
        return r.config;
      },
      set config(d) {
        process.env.NODE_ENV !== "production" && O(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...m) {
        return i.has(d) ? process.env.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : d && A(d.install) ? (i.add(d), d.install(a, ...m)) : A(d) ? (i.add(d), d(a, ...m)) : process.env.NODE_ENV !== "production" && O(
          'A plugin must either be a function or an object with an "install" function.'
        ), a;
      },
      mixin(d) {
        return r.mixins.includes(d) ? process.env.NODE_ENV !== "production" && O(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : r.mixins.push(d), a;
      },
      component(d, m) {
        return process.env.NODE_ENV !== "production" && zo(d, r.config), m ? (process.env.NODE_ENV !== "production" && r.components[d] && O(`Component "${d}" has already been registered in target app.`), r.components[d] = m, a) : r.components[d];
      },
      directive(d, m) {
        return process.env.NODE_ENV !== "production" && ti(d), m ? (process.env.NODE_ENV !== "production" && r.directives[d] && O(`Directive "${d}" has already been registered in target app.`), r.directives[d] = m, a) : r.directives[d];
      },
      mount(d, m, p) {
        if (l)
          process.env.NODE_ENV !== "production" && O(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && d.__vue_app__ && O(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = H(o, s);
          return h.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            e(
              qe(h),
              d,
              p
            );
          }), m && t ? t(h, d) : e(h, d, p), l = !0, a._container = d, d.__vue_app__ = a, process.env.NODE_ENV !== "production" && (a._instance = h.component, ql(a, Qs)), io(h.component) || h.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, a._container), process.env.NODE_ENV !== "production" && (a._instance = null, Yl(a)), delete a._container.__vue_app__) : process.env.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(d, m) {
        return process.env.NODE_ENV !== "production" && d in r.provides && O(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), r.provides[d] = m, a;
      },
      runWithContext(d) {
        const m = ln;
        ln = a;
        try {
          return d();
        } finally {
          ln = m;
        }
      }
    };
    return a;
  };
}
let ln = null;
function Mc(e, t) {
  if (!fe)
    process.env.NODE_ENV !== "production" && O("provide() can only be used inside setup().");
  else {
    let n = fe.provides;
    const o = fe.parent && fe.parent.provides;
    o === n && (n = fe.provides = Object.create(o)), n[e] = t;
  }
}
function Mn(e, t, n = !1) {
  const o = fe || _e;
  if (o || ln) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : ln._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && A(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
const fi = {}, pi = () => Object.create(fi), hi = (e) => Object.getPrototypeOf(e) === fi;
function xc(e, t, n, o = !1) {
  const s = {}, r = pi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), mi(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && _i(t || {}, s, e), n ? e.props = o ? s : Sl(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function Hc(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function jc(e, t, n, o) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = j(s), [a] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Hc(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const m = e.vnode.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        let h = m[p];
        if (no(e.emitsOptions, h))
          continue;
        const w = t[h];
        if (a)
          if (B(r, h))
            w !== r[h] && (r[h] = w, d = !0);
          else {
            const P = ze(h);
            s[P] = Bo(
              a,
              l,
              P,
              w,
              e,
              !1
            );
          }
        else
          w !== r[h] && (r[h] = w, d = !0);
      }
    }
  } else {
    mi(e, t, s, r) && (d = !0);
    let m;
    for (const p in l)
      (!t || // for camelCase
      !B(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = gt(p)) === p || !B(t, m))) && (a ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[m] !== void 0) && (s[p] = Bo(
        a,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete s[p]);
    if (r !== l)
      for (const p in r)
        (!t || !B(t, p)) && (delete r[p], d = !0);
  }
  d && We(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && _i(t || {}, s, e);
}
function mi(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (sn(a))
        continue;
      const d = t[a];
      let m;
      s && B(s, m = ze(a)) ? !r || !r.includes(m) ? n[m] = d : (l || (l = {}))[m] = d : no(e.emitsOptions, a) || (!(a in o) || d !== o[a]) && (o[a] = d, i = !0);
    }
  if (r) {
    const a = j(n), d = l || te;
    for (let m = 0; m < r.length; m++) {
      const p = r[m];
      n[p] = Bo(
        s,
        a,
        p,
        d[p],
        e,
        !B(d, p)
      );
    }
  }
  return i;
}
function Bo(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const l = B(i, "default");
    if (l && o === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && A(a)) {
        const { propsDefaults: d } = s;
        if (n in d)
          o = d[n];
        else {
          const m = Nn(s);
          o = d[n] = a.call(
            null,
            t
          ), m();
        }
      } else
        o = a;
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === gt(n)) && (o = !0));
  }
  return o;
}
function gi(e, t, n = !1) {
  const o = t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!A(e)) {
    const m = (p) => {
      a = !0;
      const [h, w] = gi(p, t, !0);
      se(i, h), w && l.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!r && !a)
    return G(e) && o.set(e, Ht), Ht;
  if (T(r))
    for (let m = 0; m < r.length; m++) {
      process.env.NODE_ENV !== "production" && !ce(r[m]) && O("props must be strings when using array syntax.", r[m]);
      const p = ze(r[m]);
      Ks(p) && (i[p] = te);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !G(r) && O("invalid props options", r);
    for (const m in r) {
      const p = ze(m);
      if (Ks(p)) {
        const h = r[m], w = i[p] = T(h) || A(h) ? { type: h } : se({}, h);
        if (w) {
          const P = zs(Boolean, w.type), R = zs(String, w.type);
          w[
            0
            /* shouldCast */
          ] = P > -1, w[
            1
            /* shouldCastTrue */
          ] = R < 0 || P < R, (P > -1 || B(w, "default")) && l.push(p);
        }
      }
    }
  }
  const d = [i, l];
  return G(e) && o.set(e, d), d;
}
function Ks(e) {
  return e[0] !== "$" && !sn(e) ? !0 : (process.env.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Uo(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ws(e, t) {
  return Uo(e) === Uo(t);
}
function zs(e, t) {
  return T(t) ? t.findIndex((n) => Ws(n, e)) : A(t) && Ws(t, e) ? 0 : -1;
}
function _i(e, t, n) {
  const o = j(t), s = n.propsOptions[0];
  for (const r in s) {
    let i = s[r];
    i != null && Bc(
      r,
      o[r],
      i,
      process.env.NODE_ENV !== "production" ? Ke(o) : o,
      !B(e, r) && !B(e, gt(r))
    );
  }
}
function Bc(e, t, n, o, s) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && s) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let d = !1;
      const m = T(r) ? r : [r], p = [];
      for (let h = 0; h < m.length && !d; h++) {
        const { valid: w, expectedType: P } = Kc(t, m[h]);
        p.push(P || ""), d = w;
      }
      if (!d) {
        O(Wc(e, t, p));
        return;
      }
    }
    l && !l(t, o) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Uc = /* @__PURE__ */ nt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Kc(e, t) {
  let n;
  const o = Uo(t);
  if (Uc(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = G(e) : o === "Array" ? n = T(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Wc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Pt).join(" | ")}`;
  const s = n[0], r = Xo(t), i = qs(t, s), l = qs(t, r);
  return n.length === 1 && Ys(s) && !zc(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, Ys(r) && (o += `with value ${l}.`), o;
}
function qs(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ys(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function zc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const vi = (e) => e[0] === "_" || e === "$stable", gs = (e) => T(e) ? e.map(Re) : [Re(e)], qc = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ao((...s) => (process.env.NODE_ENV !== "production" && fe && (!n || n.root === fe.root) && O(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), gs(t(...s))), n);
  return o._c = !1, o;
}, yi = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (vi(s))
      continue;
    const r = e[s];
    if (A(r))
      t[s] = qc(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && O(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = gs(r);
      t[s] = () => i;
    }
  }
}, bi = (e, t) => {
  process.env.NODE_ENV !== "production" && !bn(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = gs(t);
  e.slots.default = () => n;
}, Yc = (e, t) => {
  const n = e.slots = pi();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (se(n, t), br(n, "_", o, !0)) : yi(t, n);
  } else
    t && bi(e, t);
}, Gc = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = te;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Tt ? (se(s, t), We(e, "set", "$slots")) : n && l === 1 ? r = !1 : (se(s, t), !n && l === 1 && delete s._) : (r = !t.$stable, yi(t, s)), i = t;
  } else
    t && (bi(e, t), i = { default: 1 });
  if (r)
    for (const l in s)
      !vi(l) && i[l] == null && delete s[l];
};
function Ko(e, t, n, o, s = !1) {
  if (T(e)) {
    e.forEach(
      (h, w) => Ko(
        h,
        t && (T(t) ? t[w] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (Rn(o) && !s)
    return;
  const r = o.shapeFlag & 4 ? io(o.component) || o.component.proxy : o.el, i = s ? null : r, { i: l, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, m = l.refs === te ? l.refs = {} : l.refs, p = l.setupState;
  if (d != null && d !== a && (ce(d) ? (m[d] = null, B(p, d) && (p[d] = null)) : Ne(d) && (d.value = null)), A(a))
    Ze(a, l, 12, [i, m]);
  else {
    const h = ce(a), w = Ne(a);
    if (h || w) {
      const P = () => {
        if (e.f) {
          const R = h ? B(p, a) ? p[a] : m[a] : a.value;
          s ? T(R) && Go(R, r) : T(R) ? R.includes(r) || R.push(r) : h ? (m[a] = [r], B(p, a) && (p[a] = m[a])) : (a.value = [r], e.k && (m[e.k] = a.value));
        } else
          h ? (m[a] = i, B(p, a) && (p[a] = i)) : w ? (a.value = i, e.k && (m[e.k] = i)) : process.env.NODE_ENV !== "production" && O("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (P.id = -1, Se(P, n)) : P();
    } else
      process.env.NODE_ENV !== "production" && O("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let en, ht;
function Ge(e, t) {
  e.appContext.config.performance && qn() && ht.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Zl(e, t, qn() ? ht.now() : Date.now());
}
function Je(e, t) {
  if (e.appContext.config.performance && qn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    ht.mark(o), ht.measure(
      `<${lo(e, e.type)}> ${t}`,
      n,
      o
    ), ht.clearMarks(n), ht.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Ql(e, t, qn() ? ht.now() : Date.now());
}
function qn() {
  return en !== void 0 || (typeof window < "u" && window.performance ? (en = !0, ht = window.performance) : en = !1), en;
}
function Jc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Se = uc;
function Xc(e) {
  return Zc(e);
}
function Zc(e, t) {
  Jc();
  const n = Qo();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && ds(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: a,
    setText: d,
    setElementText: m,
    parentNode: p,
    nextSibling: h,
    setScopeId: w = ae,
    insertStaticContent: P
  } = e, R = (c, f, g, _ = null, v = null, N = null, C = void 0, E = null, $ = process.env.NODE_ENV !== "production" && Tt ? !1 : !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !$t(c, f) && (_ = wn(c), it(c, v, N, !0), c = null), f.patchFlag === -2 && ($ = !1, f.dynamicChildren = null);
    const { type: y, ref: V, shapeFlag: k } = f;
    switch (y) {
      case En:
        pe(c, f, g, _);
        break;
      case me:
        ee(c, f, g, _);
        break;
      case cn:
        c == null ? oe(f, g, _, C) : process.env.NODE_ENV !== "production" && Z(c, f, g, C);
        break;
      case W:
        ie(
          c,
          f,
          g,
          _,
          v,
          N,
          C,
          E,
          $
        );
        break;
      default:
        k & 1 ? ye(
          c,
          f,
          g,
          _,
          v,
          N,
          C,
          E,
          $
        ) : k & 6 ? De(
          c,
          f,
          g,
          _,
          v,
          N,
          C,
          E,
          $
        ) : k & 64 || k & 128 ? y.process(
          c,
          f,
          g,
          _,
          v,
          N,
          C,
          E,
          $,
          Xt
        ) : process.env.NODE_ENV !== "production" && O("Invalid VNode type:", y, `(${typeof y})`);
    }
    V != null && v && Ko(V, c && c.ref, N, f || c, !f);
  }, pe = (c, f, g, _) => {
    if (c == null)
      o(
        f.el = l(f.children),
        g,
        _
      );
    else {
      const v = f.el = c.el;
      f.children !== c.children && d(v, f.children);
    }
  }, ee = (c, f, g, _) => {
    c == null ? o(
      f.el = a(f.children || ""),
      g,
      _
    ) : f.el = c.el;
  }, oe = (c, f, g, _) => {
    [c.el, c.anchor] = P(
      c.children,
      f,
      g,
      _,
      c.el,
      c.anchor
    );
  }, Z = (c, f, g, _) => {
    if (f.children !== c.children) {
      const v = h(c.anchor);
      J(c), [f.el, f.anchor] = P(
        f.children,
        g,
        v,
        _
      );
    } else
      f.el = c.el, f.anchor = c.anchor;
  }, Y = ({ el: c, anchor: f }, g, _) => {
    let v;
    for (; c && c !== f; )
      v = h(c), o(c, g, _), c = v;
    o(f, g, _);
  }, J = ({ el: c, anchor: f }) => {
    let g;
    for (; c && c !== f; )
      g = h(c), s(c), c = g;
    s(f);
  }, ye = (c, f, g, _, v, N, C, E, $) => {
    f.type === "svg" ? C = "svg" : f.type === "math" && (C = "mathml"), c == null ? M(
      f,
      g,
      _,
      v,
      N,
      C,
      E,
      $
    ) : ne(
      c,
      f,
      v,
      N,
      C,
      E,
      $
    );
  }, M = (c, f, g, _, v, N, C, E) => {
    let $, y;
    const { props: V, shapeFlag: k, transition: I, dirs: x } = c;
    if ($ = c.el = i(
      c.type,
      N,
      V && V.is,
      V
    ), k & 8 ? m($, c.children) : k & 16 && z(
      c.children,
      $,
      null,
      _,
      v,
      No(c, N),
      C,
      E
    ), x && yt(c, null, _, "created"), F($, c, c.scopeId, C, _), V) {
      for (const Q in V)
        Q !== "value" && !sn(Q) && r(
          $,
          Q,
          null,
          V[Q],
          N,
          c.children,
          _,
          v,
          Ye
        );
      "value" in V && r($, "value", null, V.value, N), (y = V.onVnodeBeforeMount) && Be(y, _, c);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty($, "__vnode", {
      value: c,
      enumerable: !1
    }), Object.defineProperty($, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), x && yt(c, null, _, "beforeMount");
    const U = Qc(v, I);
    U && I.beforeEnter($), o($, f, g), ((y = V && V.onVnodeMounted) || U || x) && Se(() => {
      y && Be(y, _, c), U && I.enter($), x && yt(c, null, _, "mounted");
    }, v);
  }, F = (c, f, g, _, v) => {
    if (g && w(c, g), _)
      for (let N = 0; N < _.length; N++)
        w(c, _[N]);
    if (v) {
      let N = v.subTree;
      if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = ps(N.children) || N), f === N) {
        const C = v.vnode;
        F(
          c,
          C,
          C.scopeId,
          C.slotScopeIds,
          v.parent
        );
      }
    }
  }, z = (c, f, g, _, v, N, C, E, $ = 0) => {
    for (let y = $; y < c.length; y++) {
      const V = c[y] = E ? ft(c[y]) : Re(c[y]);
      R(
        null,
        V,
        f,
        g,
        _,
        v,
        N,
        C,
        E
      );
    }
  }, ne = (c, f, g, _, v, N, C) => {
    const E = f.el = c.el;
    let { patchFlag: $, dynamicChildren: y, dirs: V } = f;
    $ |= c.patchFlag & 16;
    const k = c.props || te, I = f.props || te;
    let x;
    if (g && bt(g, !1), (x = I.onVnodeBeforeUpdate) && Be(x, g, f, c), V && yt(f, c, g, "beforeUpdate"), g && bt(g, !0), process.env.NODE_ENV !== "production" && Tt && ($ = 0, C = !1, y = null), y ? (de(
      c.dynamicChildren,
      y,
      E,
      g,
      _,
      No(f, v),
      N
    ), process.env.NODE_ENV !== "production" && xn(c, f)) : C || He(
      c,
      f,
      E,
      null,
      g,
      _,
      No(f, v),
      N,
      !1
    ), $ > 0) {
      if ($ & 16)
        D(
          E,
          f,
          k,
          I,
          g,
          _,
          v
        );
      else if ($ & 2 && k.class !== I.class && r(E, "class", null, I.class, v), $ & 4 && r(E, "style", k.style, I.style, v), $ & 8) {
        const U = f.dynamicProps;
        for (let Q = 0; Q < U.length; Q++) {
          const re = U[Q], he = k[re], Ae = I[re];
          (Ae !== he || re === "value") && r(
            E,
            re,
            he,
            Ae,
            v,
            c.children,
            g,
            _,
            Ye
          );
        }
      }
      $ & 1 && c.children !== f.children && m(E, f.children);
    } else
      !C && y == null && D(
        E,
        f,
        k,
        I,
        g,
        _,
        v
      );
    ((x = I.onVnodeUpdated) || V) && Se(() => {
      x && Be(x, g, f, c), V && yt(f, c, g, "updated");
    }, _);
  }, de = (c, f, g, _, v, N, C) => {
    for (let E = 0; E < f.length; E++) {
      const $ = c[E], y = f[E], V = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        $.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        ($.type === W || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$t($, y) || // - In the case of a component, it could contain anything.
        $.shapeFlag & 70) ? p($.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      R(
        $,
        y,
        V,
        null,
        _,
        v,
        N,
        C,
        !0
      );
    }
  }, D = (c, f, g, _, v, N, C) => {
    if (g !== _) {
      if (g !== te)
        for (const E in g)
          !sn(E) && !(E in _) && r(
            c,
            E,
            g[E],
            null,
            C,
            f.children,
            v,
            N,
            Ye
          );
      for (const E in _) {
        if (sn(E))
          continue;
        const $ = _[E], y = g[E];
        $ !== y && E !== "value" && r(
          c,
          E,
          y,
          $,
          C,
          f.children,
          v,
          N,
          Ye
        );
      }
      "value" in _ && r(c, "value", g.value, _.value, C);
    }
  }, ie = (c, f, g, _, v, N, C, E, $) => {
    const y = f.el = c ? c.el : l(""), V = f.anchor = c ? c.anchor : l("");
    let { patchFlag: k, dynamicChildren: I, slotScopeIds: x } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Tt || k & 2048) && (k = 0, $ = !1, I = null), x && (E = E ? E.concat(x) : x), c == null ? (o(y, g, _), o(V, g, _), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      V,
      v,
      N,
      C,
      E,
      $
    )) : k > 0 && k & 64 && I && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (de(
      c.dynamicChildren,
      I,
      g,
      v,
      N,
      C,
      E
    ), process.env.NODE_ENV !== "production" ? xn(c, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || v && f === v.subTree) && xn(
        c,
        f,
        !0
        /* shallow */
      )
    )) : He(
      c,
      f,
      g,
      V,
      v,
      N,
      C,
      E,
      $
    );
  }, De = (c, f, g, _, v, N, C, E, $) => {
    f.slotScopeIds = E, c == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      g,
      _,
      C,
      $
    ) : Le(
      f,
      g,
      _,
      v,
      N,
      C,
      $
    ) : ge(c, f, $);
  }, Le = (c, f, g, _, v, N, C) => {
    const E = c.component = aa(
      c,
      _,
      v
    );
    if (process.env.NODE_ENV !== "production" && E.type.__hmrId && Ul(E), process.env.NODE_ENV !== "production" && (An(c), Ge(E, "mount")), bn(c) && (E.ctx.renderer = Xt), process.env.NODE_ENV !== "production" && Ge(E, "init"), da(E), process.env.NODE_ENV !== "production" && Je(E, "init"), E.asyncDep) {
      if (v && v.registerDep(E, q), !c.el) {
        const $ = E.subTree = H(me);
        ee(null, $, f, g);
      }
    } else
      q(
        E,
        c,
        f,
        g,
        v,
        N,
        C
      );
    process.env.NODE_ENV !== "production" && (Fn(), Je(E, "mount"));
  }, ge = (c, f, g) => {
    const _ = f.component = c.component;
    if (sc(c, f, g))
      if (_.asyncDep && !_.asyncResolved) {
        process.env.NODE_ENV !== "production" && An(f), K(_, f, g), process.env.NODE_ENV !== "production" && Fn();
        return;
      } else
        _.next = f, jl(_.update), _.effect.dirty = !0, _.update();
    else
      f.el = c.el, _.vnode = f;
  }, q = (c, f, g, _, v, N, C) => {
    const E = () => {
      if (c.isMounted) {
        let { next: V, bu: k, u: I, parent: x, vnode: U } = c;
        {
          const Rt = Ei(c);
          if (Rt) {
            V && (V.el = U.el, K(c, V, C)), Rt.asyncDep.then(() => {
              c.isUnmounted || E();
            });
            return;
          }
        }
        let Q = V, re;
        process.env.NODE_ENV !== "production" && An(V || c.vnode), bt(c, !1), V ? (V.el = U.el, K(c, V, C)) : V = U, k && Mt(k), (re = V.props && V.props.onVnodeBeforeUpdate) && Be(re, x, V, U), bt(c, !0), process.env.NODE_ENV !== "production" && Ge(c, "render");
        const he = vo(c);
        process.env.NODE_ENV !== "production" && Je(c, "render");
        const Ae = c.subTree;
        c.subTree = he, process.env.NODE_ENV !== "production" && Ge(c, "patch"), R(
          Ae,
          he,
          // parent may have changed if it's in a teleport
          p(Ae.el),
          // anchor may have changed if it's in a fragment
          wn(Ae),
          c,
          v,
          N
        ), process.env.NODE_ENV !== "production" && Je(c, "patch"), V.el = he.el, Q === null && rc(c, he.el), I && Se(I, v), (re = V.props && V.props.onVnodeUpdated) && Se(
          () => Be(re, x, V, U),
          v
        ), process.env.NODE_ENV !== "production" && Gr(c), process.env.NODE_ENV !== "production" && Fn();
      } else {
        let V;
        const { el: k, props: I } = f, { bm: x, m: U, parent: Q } = c, re = Rn(f);
        if (bt(c, !1), x && Mt(x), !re && (V = I && I.onVnodeBeforeMount) && Be(V, Q, f), bt(c, !0), k && Es) {
          const he = () => {
            process.env.NODE_ENV !== "production" && Ge(c, "render"), c.subTree = vo(c), process.env.NODE_ENV !== "production" && Je(c, "render"), process.env.NODE_ENV !== "production" && Ge(c, "hydrate"), Es(
              k,
              c.subTree,
              c,
              v,
              null
            ), process.env.NODE_ENV !== "production" && Je(c, "hydrate");
          };
          re ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !c.isUnmounted && he()
          ) : he();
        } else {
          process.env.NODE_ENV !== "production" && Ge(c, "render");
          const he = c.subTree = vo(c);
          process.env.NODE_ENV !== "production" && Je(c, "render"), process.env.NODE_ENV !== "production" && Ge(c, "patch"), R(
            null,
            he,
            g,
            _,
            c,
            v,
            N
          ), process.env.NODE_ENV !== "production" && Je(c, "patch"), f.el = he.el;
        }
        if (U && Se(U, v), !re && (V = I && I.onVnodeMounted)) {
          const he = f;
          Se(
            () => Be(V, Q, he),
            v
          );
        }
        (f.shapeFlag & 256 || Q && Rn(Q.vnode) && Q.vnode.shapeFlag & 256) && c.a && Se(c.a, v), c.isMounted = !0, process.env.NODE_ENV !== "production" && Gl(c), f = g = _ = null;
      }
    }, $ = c.effect = new ts(
      E,
      ae,
      () => to(y),
      c.scope
      // track it in component's effect scope
    ), y = c.update = () => {
      $.dirty && $.run();
    };
    y.id = c.uid, bt(c, !0), process.env.NODE_ENV !== "production" && ($.onTrack = c.rtc ? (V) => Mt(c.rtc, V) : void 0, $.onTrigger = c.rtg ? (V) => Mt(c.rtg, V) : void 0, y.ownerInstance = c), y();
  }, K = (c, f, g) => {
    f.component = c;
    const _ = c.vnode.props;
    c.vnode = f, c.next = null, jc(c, f.props, _, g), Gc(c, f.children, g), ot(), Ls(c), st();
  }, He = (c, f, g, _, v, N, C, E, $ = !1) => {
    const y = c && c.children, V = c ? c.shapeFlag : 0, k = f.children, { patchFlag: I, shapeFlag: x } = f;
    if (I > 0) {
      if (I & 128) {
        Jt(
          y,
          k,
          g,
          _,
          v,
          N,
          C,
          E,
          $
        );
        return;
      } else if (I & 256) {
        fo(
          y,
          k,
          g,
          _,
          v,
          N,
          C,
          E,
          $
        );
        return;
      }
    }
    x & 8 ? (V & 16 && Ye(y, v, N), k !== y && m(g, k)) : V & 16 ? x & 16 ? Jt(
      y,
      k,
      g,
      _,
      v,
      N,
      C,
      E,
      $
    ) : Ye(y, v, N, !0) : (V & 8 && m(g, ""), x & 16 && z(
      k,
      g,
      _,
      v,
      N,
      C,
      E,
      $
    ));
  }, fo = (c, f, g, _, v, N, C, E, $) => {
    c = c || Ht, f = f || Ht;
    const y = c.length, V = f.length, k = Math.min(y, V);
    let I;
    for (I = 0; I < k; I++) {
      const x = f[I] = $ ? ft(f[I]) : Re(f[I]);
      R(
        c[I],
        x,
        g,
        null,
        v,
        N,
        C,
        E,
        $
      );
    }
    y > V ? Ye(
      c,
      v,
      N,
      !0,
      !1,
      k
    ) : z(
      f,
      g,
      _,
      v,
      N,
      C,
      E,
      $,
      k
    );
  }, Jt = (c, f, g, _, v, N, C, E, $) => {
    let y = 0;
    const V = f.length;
    let k = c.length - 1, I = V - 1;
    for (; y <= k && y <= I; ) {
      const x = c[y], U = f[y] = $ ? ft(f[y]) : Re(f[y]);
      if ($t(x, U))
        R(
          x,
          U,
          g,
          null,
          v,
          N,
          C,
          E,
          $
        );
      else
        break;
      y++;
    }
    for (; y <= k && y <= I; ) {
      const x = c[k], U = f[I] = $ ? ft(f[I]) : Re(f[I]);
      if ($t(x, U))
        R(
          x,
          U,
          g,
          null,
          v,
          N,
          C,
          E,
          $
        );
      else
        break;
      k--, I--;
    }
    if (y > k) {
      if (y <= I) {
        const x = I + 1, U = x < V ? f[x].el : _;
        for (; y <= I; )
          R(
            null,
            f[y] = $ ? ft(f[y]) : Re(f[y]),
            g,
            U,
            v,
            N,
            C,
            E,
            $
          ), y++;
      }
    } else if (y > I)
      for (; y <= k; )
        it(c[y], v, N, !0), y++;
    else {
      const x = y, U = y, Q = /* @__PURE__ */ new Map();
      for (y = U; y <= I; y++) {
        const $e = f[y] = $ ? ft(f[y]) : Re(f[y]);
        $e.key != null && (process.env.NODE_ENV !== "production" && Q.has($e.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify($e.key),
          "Make sure keys are unique."
        ), Q.set($e.key, y));
      }
      let re, he = 0;
      const Ae = I - U + 1;
      let Rt = !1, Ns = 0;
      const Zt = new Array(Ae);
      for (y = 0; y < Ae; y++)
        Zt[y] = 0;
      for (y = x; y <= k; y++) {
        const $e = c[y];
        if (he >= Ae) {
          it($e, v, N, !0);
          continue;
        }
        let je;
        if ($e.key != null)
          je = Q.get($e.key);
        else
          for (re = U; re <= I; re++)
            if (Zt[re - U] === 0 && $t($e, f[re])) {
              je = re;
              break;
            }
        je === void 0 ? it($e, v, N, !0) : (Zt[je - U] = y + 1, je >= Ns ? Ns = je : Rt = !0, R(
          $e,
          f[je],
          g,
          null,
          v,
          N,
          C,
          E,
          $
        ), he++);
      }
      const Os = Rt ? ea(Zt) : Ht;
      for (re = Os.length - 1, y = Ae - 1; y >= 0; y--) {
        const $e = U + y, je = f[$e], $s = $e + 1 < V ? f[$e + 1].el : _;
        Zt[y] === 0 ? R(
          null,
          je,
          g,
          $s,
          v,
          N,
          C,
          E,
          $
        ) : Rt && (re < 0 || y !== Os[re] ? Ft(je, g, $s, 2) : re--);
      }
    }
  }, Ft = (c, f, g, _, v = null) => {
    const { el: N, type: C, transition: E, children: $, shapeFlag: y } = c;
    if (y & 6) {
      Ft(c.component.subTree, f, g, _);
      return;
    }
    if (y & 128) {
      c.suspense.move(f, g, _);
      return;
    }
    if (y & 64) {
      C.move(c, f, g, Xt);
      return;
    }
    if (C === W) {
      o(N, f, g);
      for (let k = 0; k < $.length; k++)
        Ft($[k], f, g, _);
      o(c.anchor, f, g);
      return;
    }
    if (C === cn) {
      Y(c, f, g);
      return;
    }
    if (_ !== 2 && y & 1 && E)
      if (_ === 0)
        E.beforeEnter(N), o(N, f, g), Se(() => E.enter(N), v);
      else {
        const { leave: k, delayLeave: I, afterLeave: x } = E, U = () => o(N, f, g), Q = () => {
          k(N, () => {
            U(), x && x();
          });
        };
        I ? I(N, U, Q) : Q();
      }
    else
      o(N, f, g);
  }, it = (c, f, g, _ = !1, v = !1) => {
    const {
      type: N,
      props: C,
      ref: E,
      children: $,
      dynamicChildren: y,
      shapeFlag: V,
      patchFlag: k,
      dirs: I
    } = c;
    if (E != null && Ko(E, null, g, c, !0), V & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const x = V & 1 && I, U = !Rn(c);
    let Q;
    if (U && (Q = C && C.onVnodeBeforeUnmount) && Be(Q, f, c), V & 6)
      Mi(c.component, g, _);
    else {
      if (V & 128) {
        c.suspense.unmount(g, _);
        return;
      }
      x && yt(c, null, f, "beforeUnmount"), V & 64 ? c.type.remove(
        c,
        f,
        g,
        v,
        Xt,
        _
      ) : y && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== W || k > 0 && k & 64) ? Ye(
        y,
        f,
        g,
        !1,
        !0
      ) : (N === W && k & 384 || !v && V & 16) && Ye($, f, g), _ && po(c);
    }
    (U && (Q = C && C.onVnodeUnmounted) || x) && Se(() => {
      Q && Be(Q, f, c), x && yt(c, null, f, "unmounted");
    }, g);
  }, po = (c) => {
    const { type: f, el: g, anchor: _, transition: v } = c;
    if (f === W) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && v && !v.persisted ? c.children.forEach((C) => {
        C.type === me ? s(C.el) : po(C);
      }) : Ri(g, _);
      return;
    }
    if (f === cn) {
      J(c);
      return;
    }
    const N = () => {
      s(g), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (c.shapeFlag & 1 && v && !v.persisted) {
      const { leave: C, delayLeave: E } = v, $ = () => C(g, N);
      E ? E(c.el, N, $) : $();
    } else
      N();
  }, Ri = (c, f) => {
    let g;
    for (; c !== f; )
      g = h(c), s(c), c = g;
    s(f);
  }, Mi = (c, f, g) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && Kl(c);
    const { bum: _, scope: v, update: N, subTree: C, um: E } = c;
    _ && Mt(_), v.stop(), N && (N.active = !1, it(C, c, f, g)), E && Se(E, f), Se(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Xl(c);
  }, Ye = (c, f, g, _ = !1, v = !1, N = 0) => {
    for (let C = N; C < c.length; C++)
      it(c[C], f, g, _, v);
  }, wn = (c) => c.shapeFlag & 6 ? wn(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : h(c.anchor || c.el);
  let ho = !1;
  const ys = (c, f, g) => {
    c == null ? f._vnode && it(f._vnode, null, null, !0) : R(
      f._vnode || null,
      c,
      f,
      null,
      null,
      null,
      g
    ), ho || (ho = !0, Ls(), zr(), ho = !1), f._vnode = c;
  }, Xt = {
    p: R,
    um: it,
    m: Ft,
    r: po,
    mt: Le,
    mc: z,
    pc: He,
    pbc: de,
    n: wn,
    o: e
  };
  let bs, Es;
  return {
    render: ys,
    hydrate: bs,
    createApp: Rc(ys, bs)
  };
}
function No({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Qc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function xn(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (T(o) && T(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = ft(s[r]), l.el = i.el), n || xn(i, l)), l.type === En && (l.el = i.el), process.env.NODE_ENV !== "production" && l.type === me && !l.el && (l.el = i.el);
    }
}
function ea(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, l;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const d = e[o];
    if (d !== 0) {
      if (s = n[n.length - 1], e[s] < d) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < d ? r = l + 1 : i = l;
      d < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function Ei(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ei(t);
}
const ta = (e) => e.__isTeleport, W = Symbol.for("v-fgt"), En = Symbol.for("v-txt"), me = Symbol.for("v-cmt"), cn = Symbol.for("v-stc"), an = [];
let xe = null;
function b(e = !1) {
  an.push(xe = e ? null : []);
}
function na() {
  an.pop(), xe = an[an.length - 1] || null;
}
let fn = 1;
function Gs(e) {
  fn += e;
}
function Ni(e) {
  return e.dynamicChildren = fn > 0 ? xe || Ht : null, na(), fn > 0 && xe && xe.push(e), e;
}
function S(e, t, n, o, s, r) {
  return Ni(
    u(
      e,
      t,
      n,
      o,
      s,
      r,
      !0
    )
  );
}
function be(e, t, n, o, s) {
  return Ni(
    H(
      e,
      t,
      n,
      o,
      s,
      !0
    )
  );
}
function pn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function $t(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && xt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const oa = (...e) => $i(
  ...e
), Oi = ({ key: e }) => e ?? null, Hn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ce(e) || Ne(e) || A(e) ? { i: _e, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, o = 0, s = null, r = e === W ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Oi(t),
    ref: t && Hn(t),
    scopeId: oo,
    slotScopeIds: null,
    children: n,
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
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: _e
  };
  return l ? (_s(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= ce(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && O("VNode created with invalid key (NaN). VNode type:", a.type), fn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && xe.push(a), a;
}
const H = process.env.NODE_ENV !== "production" ? oa : $i;
function $i(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === lc) && (process.env.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = me), pn(e)) {
    const l = qe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _s(l, n), fn > 0 && !r && xe && (l.shapeFlag & 6 ? xe[xe.indexOf(e)] = l : xe.push(l)), l.patchFlag |= -2, l;
  }
  if (Di(e) && (e = e.__vccOpts), t) {
    t = sa(t);
    let { class: l, style: a } = t;
    l && !ce(l) && (t.class = Xn(l)), G(a) && (Po(a) && !T(a) && (a = se({}, a)), t.style = _n(a));
  }
  const i = ce(e) ? 1 : ac(e) ? 128 : ta(e) ? 64 : G(e) ? 4 : A(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Po(e) && (e = j(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), u(
    e,
    t,
    n,
    o,
    s,
    i,
    r,
    !0
  );
}
function sa(e) {
  return e ? Po(e) || hi(e) ? se({}, e) : e : null;
}
function qe(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: l, transition: a } = e, d = t ? ia(s || {}, t) : s, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Oi(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(Hn(t)) : [r, Hn(t)] : Hn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && T(l) ? l.map(wi) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== W ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && qe(e.ssContent),
    ssFallback: e.ssFallback && qe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && o && (m.transition = a.clone(m)), m;
}
function wi(e) {
  const t = qe(e);
  return T(e.children) && (t.children = e.children.map(wi)), t;
}
function ue(e = " ", t = 0) {
  return H(En, null, e, t);
}
function ra(e, t) {
  const n = H(cn, null, e);
  return n.staticCount = t, n;
}
function le(e = "", t = !1) {
  return t ? (b(), be(me, null, e)) : H(me, null, e);
}
function Re(e) {
  return e == null || typeof e == "boolean" ? H(me) : T(e) ? H(
    W,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ft(e) : H(En, null, String(e));
}
function ft(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qe(e);
}
function _s(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), _s(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !hi(t) ? t._ctx = _e : s === 3 && _e && (_e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    A(t) ? (t = { default: t, _ctx: _e }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ue(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ia(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Xn([t.class, o.class]));
      else if (s === "style")
        t.style = _n([t.style, o.style]);
      else if (mn(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(T(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Be(e, t, n, o = null) {
  Pe(e, t, 7, [
    n,
    o
  ]);
}
const la = di();
let ca = 0;
function aa(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || la, r = {
    uid: ca++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new sl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: gi(o, s),
    emitsOptions: Xr(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: te,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: te,
    data: te,
    props: te,
    attrs: te,
    slots: te,
    refs: te,
    setupState: te,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return process.env.NODE_ENV !== "production" ? r.ctx = Cc(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = tc.bind(null, r), e.ce && e.ce(r), r;
}
let fe = null;
const Si = () => fe || _e;
let Yn, Wo;
{
  const e = Qo(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  Yn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => fe = n
  ), Wo = t(
    "__VUE_SSR_SETTERS__",
    (n) => ro = n
  );
}
const Nn = (e) => {
  const t = fe;
  return Yn(e), e.scope.on(), () => {
    e.scope.off(), Yn(t);
  };
}, Js = () => {
  fe && fe.scope.off(), Yn(null);
}, ua = /* @__PURE__ */ nt("slot,component");
function zo(e, { isNativeTag: t }) {
  (ua(e) || t(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ci(e) {
  return e.vnode.shapeFlag & 4;
}
let ro = !1;
function da(e, t = !1) {
  t && Wo(t);
  const { props: n, children: o } = e.vnode, s = Ci(e);
  xc(e, n, s, t), Yc(e, o);
  const r = s ? fa(e, t) : void 0;
  return t && Wo(!1), r;
}
function fa(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && zo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        zo(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        ti(r[i]);
    }
    o.compilerOptions && pa() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ai), process.env.NODE_ENV !== "production" && Vc(e);
  const { setup: s } = o;
  if (s) {
    const r = e.setupContext = s.length > 1 ? ma(e) : null, i = Nn(e);
    ot();
    const l = Ze(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Ke(e.props) : e.props,
        r
      ]
    );
    if (st(), i(), Jo(l)) {
      if (l.then(Js, Js), t)
        return l.then((a) => {
          Xs(e, a, t);
        }).catch((a) => {
          vn(a, e, 0);
        });
      if (e.asyncDep = l, process.env.NODE_ENV !== "production" && !e.suspense) {
        const a = (n = o.name) != null ? n : "Anonymous";
        O(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Xs(e, l, t);
  } else
    Vi(e, t);
}
function Xs(e, t, n) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : G(t) ? (process.env.NODE_ENV !== "production" && pn(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Hr(t), process.env.NODE_ENV !== "production" && Dc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Vi(e, n);
}
let qo;
const pa = () => !qo;
function Vi(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && qo && !o.render) {
      const s = o.template || ms(e).template;
      if (s) {
        process.env.NODE_ENV !== "production" && Ge(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = o, d = se(
          se(
            {
              isCustomElement: r,
              delimiters: l
            },
            i
          ),
          a
        );
        o.render = qo(s, d), process.env.NODE_ENV !== "production" && Je(e, "compile");
      }
    }
    e.render = o.render || ae;
  }
  {
    const s = Nn(e);
    ot();
    try {
      Ic(e);
    } finally {
      st(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === ae && !t && (o.template ? O(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : O("Component is missing template or render function."));
}
const Zs = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return Wn(), ve(e, "get", ""), e[t];
  },
  set() {
    return O("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return O("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ve(e, "get", ""), e[t];
  }
};
function ha(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return ve(e, "get", "$slots"), t[n];
    }
  }));
}
function ma(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && O("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (T(n) ? o = "array" : Ne(n) && (o = "ref")), o !== "object" && O(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Zs));
      },
      get slots() {
        return ha(e);
      },
      get emit() {
        return (o, ...s) => e.emit(o, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Zs),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function io(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Hr(Cl(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in It)
          return It[n](e);
      },
      has(t, n) {
        return n in t || n in It;
      }
    }));
}
const ga = /(?:^|[-_])(\w)/g, _a = (e) => e.replace(ga, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function vs(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function lo(e, t, n = !1) {
  let o = vs(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? _a(o) : n ? "App" : "Anonymous";
}
function Di(e) {
  return A(e) && "__vccOpts" in e;
}
const va = (e, t) => {
  const n = Dl(e, t, ro);
  if (process.env.NODE_ENV !== "production") {
    const o = Si();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Ti(e, t, n) {
  const o = arguments.length;
  return o === 2 ? G(t) && !T(t) ? pn(t) ? H(e, null, [t]) : H(e, t) : H(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && pn(n) && (n = [n]), H(e, t, n));
}
function ya() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    header(p) {
      return G(p) ? p.__isVue ? ["div", e, "VueInstance"] : Ne(p) ? [
        "div",
        {},
        ["span", e, m(p)],
        "<",
        l(p.value),
        ">"
      ] : jt(p) ? [
        "div",
        {},
        ["span", e, Bt(p) ? "ShallowReactive" : "Reactive"],
        "<",
        l(p),
        `>${Kt(p) ? " (readonly)" : ""}`
      ] : Kt(p) ? [
        "div",
        {},
        ["span", e, Bt(p) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(p),
        ">"
      ] : null : null;
    },
    hasBody(p) {
      return p && p.__isVue;
    },
    body(p) {
      if (p && p.__isVue)
        return [
          "div",
          {},
          ...r(p.$)
        ];
    }
  };
  function r(p) {
    const h = [];
    p.type.props && p.props && h.push(i("props", j(p.props))), p.setupState !== te && h.push(i("setup", p.setupState)), p.data !== te && h.push(i("data", j(p.data)));
    const w = a(p, "computed");
    w && h.push(i("computed", w));
    const P = a(p, "inject");
    return P && h.push(i("injected", P)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: p }]
    ]), h;
  }
  function i(p, h) {
    return h = se({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        p
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((w) => [
          "div",
          {},
          ["span", o, w + ": "],
          l(h[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(p, h = !0) {
    return typeof p == "number" ? ["span", t, p] : typeof p == "string" ? ["span", n, JSON.stringify(p)] : typeof p == "boolean" ? ["span", o, p] : G(p) ? ["object", { object: h ? j(p) : p }] : ["span", n, String(p)];
  }
  function a(p, h) {
    const w = p.type;
    if (A(w))
      return;
    const P = {};
    for (const R in p.ctx)
      d(w, R, h) && (P[R] = p.ctx[R]);
    return P;
  }
  function d(p, h, w) {
    const P = p[w];
    if (T(P) && P.includes(h) || G(P) && h in P || p.extends && d(p.extends, h, w) || p.mixins && p.mixins.some((R) => d(R, h, w)))
      return !0;
  }
  function m(p) {
    return Bt(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const Qs = "3.4.26", Qe = process.env.NODE_ENV !== "production" ? O : ae;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ba = "http://www.w3.org/2000/svg", Ea = "http://www.w3.org/1998/Math/MathML", pt = typeof document < "u" ? document : null, er = pt && /* @__PURE__ */ pt.createElement("template"), Na = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? pt.createElementNS(ba, e) : t === "mathml" ? pt.createElementNS(Ea, e) : pt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => pt.createTextNode(e),
  createComment: (e) => pt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => pt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      er.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
      const l = er.content;
      if (o === "svg" || o === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ct = "transition", tn = "animation", hn = Symbol("_vtc"), Gn = (e, { slots: t }) => Ti(gc, Oa(e), t);
Gn.displayName = "Transition";
const Ii = {
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
Gn.props = /* @__PURE__ */ se(
  {},
  ni,
  Ii
);
const Et = (e, t = []) => {
  T(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, tr = (e) => e ? T(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Oa(e) {
  const t = {};
  for (const D in e)
    D in Ii || (t[D] = e[D]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: s,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = r,
    appearActiveClass: d = i,
    appearToClass: m = l,
    leaveFromClass: p = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: w = `${n}-leave-to`
  } = e, P = $a(s), R = P && P[0], pe = P && P[1], {
    onBeforeEnter: ee,
    onEnter: oe,
    onEnterCancelled: Z,
    onLeave: Y,
    onLeaveCancelled: J,
    onBeforeAppear: ye = ee,
    onAppear: M = oe,
    onAppearCancelled: F = Z
  } = t, z = (D, ie, De) => {
    Nt(D, ie ? m : l), Nt(D, ie ? d : i), De && De();
  }, ne = (D, ie) => {
    D._isLeaving = !1, Nt(D, p), Nt(D, w), Nt(D, h), ie && ie();
  }, de = (D) => (ie, De) => {
    const Le = D ? M : oe, ge = () => z(ie, D, De);
    Et(Le, [ie, ge]), nr(() => {
      Nt(ie, D ? a : r), at(ie, D ? m : l), tr(Le) || or(ie, o, R, ge);
    });
  };
  return se(t, {
    onBeforeEnter(D) {
      Et(ee, [D]), at(D, r), at(D, i);
    },
    onBeforeAppear(D) {
      Et(ye, [D]), at(D, a), at(D, d);
    },
    onEnter: de(!1),
    onAppear: de(!0),
    onLeave(D, ie) {
      D._isLeaving = !0;
      const De = () => ne(D, ie);
      at(D, p), at(D, h), Ca(), nr(() => {
        D._isLeaving && (Nt(D, p), at(D, w), tr(Y) || or(D, o, pe, De));
      }), Et(Y, [D, De]);
    },
    onEnterCancelled(D) {
      z(D, !1), Et(Z, [D]);
    },
    onAppearCancelled(D) {
      z(D, !0), Et(F, [D]);
    },
    onLeaveCancelled(D) {
      ne(D), Et(J, [D]);
    }
  });
}
function $a(e) {
  if (e == null)
    return null;
  if (G(e))
    return [Oo(e.enter), Oo(e.leave)];
  {
    const t = Oo(e);
    return [t, t];
  }
}
function Oo(e) {
  const t = Ki(e);
  return process.env.NODE_ENV !== "production" && Rl(t, "<transition> explicit duration"), t;
}
function at(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[hn] || (e[hn] = /* @__PURE__ */ new Set())).add(t);
}
function Nt(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[hn];
  n && (n.delete(t), n.size || (e[hn] = void 0));
}
function nr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let wa = 0;
function or(e, t, n, o) {
  const s = e._endId = ++wa, r = () => {
    s === e._endId && o();
  };
  if (n)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = Sa(e, t);
  if (!i)
    return o();
  const d = i + "end";
  let m = 0;
  const p = () => {
    e.removeEventListener(d, h), r();
  }, h = (w) => {
    w.target === e && ++m >= a && p();
  };
  setTimeout(() => {
    m < a && p();
  }, l + 1), e.addEventListener(d, h);
}
function Sa(e, t) {
  const n = window.getComputedStyle(e), o = (P) => (n[P] || "").split(", "), s = o(`${ct}Delay`), r = o(`${ct}Duration`), i = sr(s, r), l = o(`${tn}Delay`), a = o(`${tn}Duration`), d = sr(l, a);
  let m = null, p = 0, h = 0;
  t === ct ? i > 0 && (m = ct, p = i, h = r.length) : t === tn ? d > 0 && (m = tn, p = d, h = a.length) : (p = Math.max(i, d), m = p > 0 ? i > d ? ct : tn : null, h = m ? m === ct ? r.length : a.length : 0);
  const w = m === ct && /\b(transform|all)(,|$)/.test(
    o(`${ct}Property`).toString()
  );
  return {
    type: m,
    timeout: p,
    propCount: h,
    hasTransform: w
  };
}
function sr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => rr(n) + rr(e[o])));
}
function rr(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ca() {
  return document.body.offsetHeight;
}
function Va(e, t, n) {
  const o = e[hn];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ir = Symbol("_vod"), Da = Symbol("_vsh");
process.env.NODE_ENV;
const Ta = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Ia = /(^|;)\s*display\s*:/;
function Pa(e, t, n) {
  const o = e.style, s = ce(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (ce(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && jn(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && jn(o, i, "");
    for (const i in n)
      i === "display" && (r = !0), jn(o, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = o[Ta];
      i && (n += ";" + i), o.cssText = n, r = Ia.test(n);
    }
  } else
    t && e.removeAttribute("style");
  ir in e && (e[ir] = r ? o.display : "", e[Da] && (o.display = "none"));
}
const ka = /[^\\];\s*$/, lr = /\s*!important$/;
function jn(e, t, n) {
  if (T(n))
    n.forEach((o) => jn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && ka.test(n) && Qe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = La(e, t);
    lr.test(n) ? e.setProperty(
      gt(o),
      n.replace(lr, ""),
      "important"
    ) : e[o] = n;
  }
}
const cr = ["Webkit", "Moz", "ms"], $o = {};
function La(e, t) {
  const n = $o[t];
  if (n)
    return n;
  let o = ze(t);
  if (o !== "filter" && o in e)
    return $o[t] = o;
  o = Pt(o);
  for (let s = 0; s < cr.length; s++) {
    const r = cr[s] + o;
    if (r in e)
      return $o[t] = r;
  }
  return t;
}
const ar = "http://www.w3.org/1999/xlink";
function Aa(e, t, n, o, s) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ar, t.slice(6, t.length)) : e.setAttributeNS(ar, t, n);
  else {
    const r = nl(t);
    n == null || r && !Nr(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function Fa(e, t, n, o, s, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, s, r), e[t] = n ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const d = l === "OPTION" ? e.getAttribute("value") || "" : e.value, m = n ?? "";
    (d !== m || !("_value" in e)) && (e.value = m), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = Nr(n) : n == null && d === "string" ? (n = "", a = !0) : d === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch (d) {
    process.env.NODE_ENV !== "production" && !a && Qe(
      `Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,
      d
    );
  }
  a && e.removeAttribute(t);
}
function co(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Ra(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const ur = Symbol("_vei");
function Ma(e, t, n, o, s = null) {
  const r = e[ur] || (e[ur] = {}), i = r[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? fr(o, t) : o;
  else {
    const [l, a] = xa(t);
    if (o) {
      const d = r[t] = Ba(
        process.env.NODE_ENV !== "production" ? fr(o, t) : o,
        s
      );
      co(e, l, d, a);
    } else
      i && (Ra(e, l, i, a), r[t] = void 0);
  }
}
const dr = /(?:Once|Passive|Capture)$/;
function xa(e) {
  let t;
  if (dr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(dr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : gt(e.slice(2)), t];
}
let wo = 0;
const Ha = /* @__PURE__ */ Promise.resolve(), ja = () => wo || (Ha.then(() => wo = 0), wo = Date.now());
function Ba(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Pe(
      Ua(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = ja(), n;
}
function fr(e, t) {
  return A(e) || T(e) ? e : (Qe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ae);
}
function Ua(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const pr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ka = (e, t, n, o, s, r, i, l, a) => {
  const d = s === "svg";
  t === "class" ? Va(e, o, d) : t === "style" ? Pa(e, n, o) : mn(t) ? Un(t) || Ma(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wa(e, t, o, d)) ? Fa(
    e,
    t,
    o,
    r,
    i,
    l,
    a
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Aa(e, t, o, d));
};
function Wa(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && pr(t) && A(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return pr(t) && ce(n) ? !1 : t in e;
}
const Wt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return T(t) ? (n) => Mt(t, n) : t;
}, et = Symbol("_assign"), za = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[et] = Wt(n), co(e, "change", () => {
      const o = e._modelValue, s = zt(e), r = e.checked, i = e[et];
      if (T(o)) {
        const l = es(o, s), a = l !== -1;
        if (r && !a)
          i(o.concat(s));
        else if (!r && a) {
          const d = [...o];
          d.splice(l, 1), i(d);
        }
      } else if (qt(o)) {
        const l = new Set(o);
        r ? l.add(s) : l.delete(s), i(l);
      } else
        i(Pi(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: hr,
  beforeUpdate(e, t, n) {
    e[et] = Wt(n), hr(e, t, n);
  }
};
function hr(e, { value: t, oldValue: n }, o) {
  e._modelValue = t, T(t) ? e.checked = es(t, o.props.value) > -1 : qt(t) ? e.checked = t.has(o.props.value) : t !== n && (e.checked = Lt(t, Pi(e, !0)));
}
const qa = {
  created(e, { value: t }, n) {
    e.checked = Lt(t, n.props.value), e[et] = Wt(n), co(e, "change", () => {
      e[et](zt(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, o) {
    e[et] = Wt(o), t !== n && (e.checked = Lt(t, o.props.value));
  }
}, So = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const s = qt(t);
    co(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Er(zt(i)) : zt(i)
      );
      e[et](
        e.multiple ? s ? new Set(r) : r : r[0]
      ), e._assigning = !0, Ur(() => {
        e._assigning = !1;
      });
    }), e[et] = Wt(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: n } }) {
    mr(e, t);
  },
  beforeUpdate(e, t, n) {
    e[et] = Wt(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || mr(e, t);
  }
};
function mr(e, t, n) {
  const o = e.multiple, s = T(t);
  if (o && !s && !qt(t)) {
    process.env.NODE_ENV !== "production" && Qe(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let r = 0, i = e.options.length; r < i; r++) {
    const l = e.options[r], a = zt(l);
    if (o)
      if (s) {
        const d = typeof a;
        d === "string" || d === "number" ? l.selected = t.some((m) => String(m) === String(a)) : l.selected = es(t, a) > -1;
      } else
        l.selected = t.has(a);
    else if (Lt(zt(l), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function zt(e) {
  return "_value" in e ? e._value : e.value;
}
function Pi(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Ya = /* @__PURE__ */ se({ patchProp: Ka }, Na);
let gr;
function Ga() {
  return gr || (gr = Xc(Ya));
}
const Ja = (...e) => {
  const t = Ga().createApp(...e);
  process.env.NODE_ENV !== "production" && (Za(t), Qa(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = eu(o);
    if (!s)
      return;
    const r = t._component;
    !A(r) && !r.render && !r.template && (r.template = s.innerHTML), s.innerHTML = "";
    const i = n(s, !1, Xa(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function Xa(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Za(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Zi(t) || Qi(t) || el(t),
    writable: !1
  });
}
function Qa(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Qe(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Qe(o), n;
      },
      set() {
        Qe(o);
      }
    });
  }
}
function eu(e) {
  if (ce(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Qe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Qe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function tu() {
  ya();
}
process.env.NODE_ENV !== "production" && tu();
const Ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, nu = /* @__PURE__ */ ke({
  props: {
    pathForm: String
  }
}), On = (e) => (Yt("data-v-5f038e28"), e = e(), Gt(), e), ou = { class: "SimulatorStart" }, su = /* @__PURE__ */ On(() => /* @__PURE__ */ u("h1", { class: "SimulatorStartHeading" }, "葬儀見積シミュレーション", -1)), ru = { class: "SimulatorStartBody" }, iu = /* @__PURE__ */ On(() => /* @__PURE__ */ u("p", { class: "SimulatorStartBody__lead" }, " 費用については多くの方が気になるポイント。「自分の家族だったら...」をお試しいただけます。 ", -1)), lu = { class: "SimulatorStartBody__button" }, cu = /* @__PURE__ */ On(() => /* @__PURE__ */ u("p", null, [
  /* @__PURE__ */ u("span", null, [
    /* @__PURE__ */ ue("こちらを"),
    /* @__PURE__ */ u("em", null, "タップ")
  ])
], -1)), au = ["href"], uu = /* @__PURE__ */ On(() => /* @__PURE__ */ u("span", null, "かんたんお見積スタート", -1)), du = /* @__PURE__ */ On(() => /* @__PURE__ */ u("small", null, "下記注意文を確認の上はじめる", -1)), fu = [
  uu,
  du
], pu = /* @__PURE__ */ ra('<div class="SimulatorStartBody__notes" data-v-5f038e28><h2 data-v-5f038e28>ご注意ください</h2><p data-v-5f038e28> シミュレーションでの価格はあくまでも現行販売コースを前提とした概算となります。実際の施行時の金額に相違があることをご了承ください。また、本シミュレーションでは <em class="red bold" data-v-5f038e28>パルモグループ会員価格を基準に金額を表示します</em>。 詳しくはパルモ葬祭までご連絡ください。 </p></div><div class="SimulatorStartBody__attention" data-v-5f038e28><ul data-v-5f038e28><li data-v-5f038e28> 概算のシミュレーション結果のため、実際の金額・内容とは異なる場合がございます。 </li><li data-v-5f038e28> シミュレーションにて掲示されている価格は予告なしに変更される場合がございます。 </li><li data-v-5f038e28> 写真はプランイメージです。お選びいただく式場、品目により仕様が異なります。 </li><li data-v-5f038e28> シミュレーション結果には、宗教者へのお礼の費用は含まれておりません。 </li><li data-v-5f038e28> 搬送時や火葬場までのご移動に関して、条件に応じて追加費用がかかる場合がございます。 </li></ul></div>', 2);
function hu(e, t, n, o, s, r) {
  return b(), S("div", ou, [
    su,
    u("div", ru, [
      iu,
      u("div", lu, [
        cu,
        u("a", { href: e.pathForm }, fu, 8, au)
      ]),
      pu
    ])
  ]);
}
const mu = /* @__PURE__ */ Ve(nu, [["render", hu], ["__scopeId", "data-v-5f038e28"]]), _r = {
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
}, gu = /* @__PURE__ */ ke({
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
      const e = _r[this.icon];
      return e ? `0 0 ${e.width} ${e.height}` : void 0;
    },
    html() {
      var e;
      return (e = _r[this.icon]) == null ? void 0 : e.path;
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
}), _u = ["icon", "viewBox", "aria-hidden", "role", "aria-label", "innerHTML"];
function vu(e, t, n, o, s, r) {
  return b(), S("svg", {
    class: "SimulatorIcon",
    icon: e.icon,
    viewBox: e.viewBox,
    "aria-hidden": e.ariaHidden,
    role: e.role,
    "aria-label": e.ariaLabel,
    innerHTML: e.html
  }, null, 8, _u);
}
const ao = /* @__PURE__ */ Ve(gu, [["render", vu], ["__scopeId", "data-v-5704c516"]]), yu = /* @__PURE__ */ ke({
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
      const e = this.$refs.viewport.offsetWidth, t = this.$refs.spWrap.offsetWidth, n = this.$refs.item[this.current], o = n.offsetLeft, s = n.offsetWidth, r = e / 2 - o - s / 2, i = e - t, l = Math.min(Math.max(i, r), 0);
      this.spTitlesStyle = `translate: ${l}px 0;`;
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
}), bu = {
  class: "SimulatorSteps",
  ref: "viewport"
}, Eu = { class: "SimulatorSteps__numbers" }, Nu = ["aria-label", "aria-current", "disabled", "onClick", "onMouseenter", "data-hover"], Ou = ["aria-label", "aria-current", "disabled", "onClick", "onMouseenter", "data-hover"];
function $u(e, t, n, o, s, r) {
  return b(), S("div", bu, [
    u("div", Eu, [
      (b(!0), S(W, null, Ie(e.steps, ({ title: i, disabled: l }, a) => (b(), S("button", {
        key: a,
        "aria-label": i,
        "aria-current": a === e.current ? "step" : !1,
        disabled: l,
        onClick: (d) => e.$emit("click:step", a),
        onMouseenter: (d) => e.onMouseenter(a),
        onMouseleave: t[0] || (t[0] = (...d) => e.onMouseleave && e.onMouseleave(...d)),
        "data-hover": e.hoverIndex === a
      }, L(a + 1), 41, Nu))), 128))
    ]),
    u("div", {
      class: "SimulatorSteps__titles",
      ref: "spWrap",
      style: _n(e.spTitlesStyle)
    }, [
      (b(!0), S(W, null, Ie(e.steps, ({ title: i, disabled: l }, a) => (b(), S("button", {
        key: a,
        ref_for: !0,
        ref: "item",
        "aria-label": i,
        "aria-current": a === e.current ? "step" : !1,
        disabled: l,
        onClick: (d) => e.$emit("click:step", a),
        onMouseenter: (d) => e.onMouseenter(a),
        onMouseleave: t[1] || (t[1] = (...d) => e.onMouseleave && e.onMouseleave(...d)),
        "data-hover": e.hoverIndex === a
      }, L(i), 41, Ou))), 128))
    ], 4)
  ], 512);
}
const ki = /* @__PURE__ */ Ve(yu, [["render", $u], ["__scopeId", "data-v-a13b1991"]]), wu = /* @__PURE__ */ ke({
  props: {
    message: String
  }
}), Su = { class: "SimulatorLoading" };
function Cu(e, t, n, o, s, r) {
  return b(), S("div", Su, [
    u("p", null, L(e.message || "Loading..."), 1)
  ]);
}
const Li = /* @__PURE__ */ Ve(wu, [["render", Cu], ["__scopeId", "data-v-d24434c8"]]), Vu = /* @__PURE__ */ ke({
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
}), uo = (e) => (Yt("data-v-93303bcf"), e = e(), Gt(), e), Du = /* @__PURE__ */ uo(() => /* @__PURE__ */ u("h2", { class: "SimulatorTotal__heading" }, [
  /* @__PURE__ */ u("span", null, "現在の合計価格"),
  /* @__PURE__ */ u("small", null, "会員価格")
], -1)), Tu = { class: "SimulatorTotal__price" }, Iu = /* @__PURE__ */ uo(() => /* @__PURE__ */ u("span", null, "税込", -1)), Pu = /* @__PURE__ */ uo(() => /* @__PURE__ */ u("span", null, "円〜", -1)), ku = {
  key: 0,
  class: "SimulatorTotal__detail"
}, Lu = /* @__PURE__ */ uo(() => /* @__PURE__ */ u("h3", null, [
  /* @__PURE__ */ u("span", null, "適用プラン")
], -1)), Au = { class: "el-thumb" }, Fu = ["src"], Ru = {
  key: 0,
  class: "el-label"
}, Mu = { class: "el-body" }, xu = { key: 0 }, Hu = { key: 1 }, ju = { key: 2 };
function Bu(e, t, n, o, s, r) {
  return b(), S("section", {
    class: Xn({ SimulatorTotal: !0, "is-disabled": e.disabled })
  }, [
    Du,
    u("p", Tu, [
      Iu,
      u("span", null, L((e.result.total || 0).toLocaleString("ja-JP")), 1),
      Pu
    ]),
    e.result.planTitle ? (b(), S("div", ku, [
      Lu,
      u("div", Au, [
        u("picture", null, [
          e.result.planImage ? (b(), S("img", {
            key: 0,
            src: e.result.planImage,
            alt: "祭壇のイメージ"
          }, null, 8, Fu)) : le("", !0)
        ]),
        e.result.planNote ? (b(), S("span", Ru, L(e.result.planNote), 1)) : le("", !0)
      ]),
      u("div", Mu, [
        u("p", null, L(e.result.planTitle), 1),
        u("ul", null, [
          e.result.type ? (b(), S("li", xu, L(e.result.type), 1)) : le("", !0),
          e.result.number ? (b(), S("li", Hu, L(e.result.number), 1)) : le("", !0),
          e.result.atmosphere ? (b(), S("li", ju, L(e.result.atmosphere), 1)) : le("", !0)
        ])
      ])
    ])) : le("", !0)
  ], 2);
}
const Uu = /* @__PURE__ */ Ve(Vu, [["render", Bu], ["__scopeId", "data-v-93303bcf"]]), Ku = /* @__PURE__ */ ke({
  props: {
    prev: String,
    next: String,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  components: {
    Icon: ao
  }
}), Wu = { class: "SimulatorPrevnext" }, zu = ["disabled"], qu = ["disabled"];
function Yu(e, t, n, o, s, r) {
  const i = Ce("Icon");
  return b(), S("div", Wu, [
    e.prev ? (b(), S("button", {
      key: 0,
      class: "el-prev",
      disabled: e.disabled,
      onClick: t[0] || (t[0] = (l) => e.$emit("click:prev"))
    }, [
      H(i, { icon: "angle-left-solid" }),
      u("span", null, L(e.prev), 1)
    ], 8, zu)) : le("", !0),
    e.next ? (b(), S("button", {
      key: 1,
      class: "el-next",
      disabled: e.disabled,
      onClick: t[1] || (t[1] = (l) => e.$emit("click:next"))
    }, [
      u("span", null, L(e.next), 1),
      H(i, { icon: "angle-right-solid" })
    ], 8, qu)) : le("", !0)
  ]);
}
const Gu = /* @__PURE__ */ Ve(Ku, [["render", Yu], ["__scopeId", "data-v-313d946f"]]), Ju = /* @__PURE__ */ ke({
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
}), Oe = (e) => (Yt("data-v-4665bf58"), e = e(), Gt(), e), Xu = { class: "SimulatorHallInfo" }, Zu = { class: "SimulatorHallInfo__image" }, Qu = ["src"], ed = { class: "SimulatorHallInfo__access" }, td = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("dt", null, "利便性", -1)), nd = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("dt", null, "住所", -1)), od = { class: "SimulatorHallInfo__tags" }, sd = ["aria-hidden"], rd = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("span", { "aria-hidden": "true" }, null, -1)), id = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("span", null, "駐車場", -1)), ld = [
  rd,
  id
], cd = ["aria-hidden"], ad = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("span", { "aria-hidden": "true" }, null, -1)), ud = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("span", null, [
  /* @__PURE__ */ ue("好ア"),
  /* @__PURE__ */ u("br"),
  /* @__PURE__ */ ue("クセス")
], -1)), dd = [
  ad,
  ud
], fd = ["aria-hidden"], pd = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("span", { "aria-hidden": "true" }, null, -1)), hd = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("span", null, [
  /* @__PURE__ */ ue("控室"),
  /* @__PURE__ */ u("br"),
  /* @__PURE__ */ ue("あり")
], -1)), md = [
  pd,
  hd
], gd = ["aria-hidden"], _d = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("span", { "aria-hidden": "true" }, null, -1)), vd = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("span", null, [
  /* @__PURE__ */ ue("仮眠"),
  /* @__PURE__ */ u("br"),
  /* @__PURE__ */ ue("施設")
], -1)), yd = [
  _d,
  vd
], bd = ["aria-hidden"], Ed = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("span", { "aria-hidden": "true" }, null, -1)), Nd = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("span", null, [
  /* @__PURE__ */ ue("付添い"),
  /* @__PURE__ */ u("br"),
  /* @__PURE__ */ ue("安置可")
], -1)), Od = [
  Ed,
  Nd
], $d = ["aria-hidden"], wd = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("span", { "aria-hidden": "true" }, null, -1)), Sd = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("span", null, [
  /* @__PURE__ */ ue("バリア"),
  /* @__PURE__ */ u("br"),
  /* @__PURE__ */ ue("フリー")
], -1)), Cd = [
  wd,
  Sd
], Vd = ["aria-hidden"], Dd = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("span", { "aria-hidden": "true" }, null, -1)), Td = /* @__PURE__ */ Oe(() => /* @__PURE__ */ u("span", null, [
  /* @__PURE__ */ ue("全宗派"),
  /* @__PURE__ */ u("br"),
  /* @__PURE__ */ ue("対応")
], -1)), Id = [
  Dd,
  Td
];
function Pd(e, t, n, o, s, r) {
  return b(), S("div", Xu, [
    u("div", Zu, [
      u("img", {
        src: e.hall.image || "@/static/image/noimage.webp"
      }, null, 8, Qu)
    ]),
    u("div", ed, [
      u("dl", null, [
        td,
        u("dd", null, L(e.hall.access), 1)
      ]),
      u("dl", null, [
        nd,
        u("dd", null, L(e.hall.address), 1)
      ])
    ]),
    u("ul", od, [
      u("li", {
        class: "type-parking",
        "aria-hidden": !e.hall.features.includes(1)
      }, ld, 8, sd),
      u("li", {
        class: "type-access",
        "aria-hidden": !e.hall.features.includes(2)
      }, dd, 8, cd),
      u("li", {
        class: "type-waiting",
        "aria-hidden": !e.hall.features.includes(3)
      }, md, 8, fd),
      u("li", {
        class: "type-bed",
        "aria-hidden": !e.hall.features.includes(4)
      }, yd, 8, gd),
      u("li", {
        class: "type-attend",
        "aria-hidden": !e.hall.features.includes(5)
      }, Od, 8, bd),
      u("li", {
        class: "type-barrierfree",
        "aria-hidden": !e.hall.features.includes(6)
      }, Cd, 8, $d),
      u("li", {
        class: "type-any",
        "aria-hidden": !e.hall.features.includes(7)
      }, Id, 8, Vd)
    ])
  ]);
}
const Ai = /* @__PURE__ */ Ve(Ju, [["render", Pd], ["__scopeId", "data-v-4665bf58"]]), kd = /* @__PURE__ */ ke({
  components: {
    HallInfo: Ai
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
}), Ld = ["aria-disabled"], Ad = { class: "SimulatorChoicebox__box" }, Fd = { class: "SimulatorChoicebox__header" }, Rd = ["type", "name", "value", "disabled", "checked"], Md = {
  key: 0,
  class: "SimulatorChoicebox__body"
}, xd = {
  key: 1,
  class: "SimulatorChoicebox__body"
}, Hd = { class: "SimulatorChoiceboxDefault" }, jd = ["src"], Bd = {
  key: 1,
  class: "SimulatorChoiceboxDefault__description"
}, Ud = {
  key: 2,
  class: "SimulatorChoiceboxDefault__price"
};
function Kd(e, t, n, o, s, r) {
  const i = Ce("HallInfo");
  return b(), S("label", {
    class: "SimulatorChoicebox",
    "aria-disabled": e.disabled || e.choice.disabled
  }, [
    u("div", Ad, [
      u("div", Fd, [
        u("input", {
          type: e.type,
          name: e.name,
          value: e.choice.title,
          disabled: e.disabled || e.choice.disabled || e.busy,
          checked: e.checked,
          onChange: t[0] || (t[0] = (l) => e.onChange(l.target.checked))
        }, null, 40, Rd),
        u("span", null, L(e.choice.title), 1)
      ]),
      e.ishallChoice(e.choice) ? (b(), S("div", Md, [
        H(i, { hall: e.choice }, null, 8, ["hall"])
      ])) : e.choice.image || e.choice.description ? (b(), S("div", xd, [
        u("div", Hd, [
          e.choice.image ? (b(), S("img", {
            key: 0,
            src: e.choice.image
          }, null, 8, jd)) : le("", !0),
          e.choice.description ? (b(), S("p", Bd, L(e.choice.description), 1)) : le("", !0),
          e.choice.price ? (b(), S("p", Ud, L(e.choice.price), 1)) : le("", !0)
        ])
      ])) : le("", !0)
    ])
  ], 8, Ld);
}
const Fi = /* @__PURE__ */ Ve(kd, [["render", Kd], ["__scopeId", "data-v-159dbb42"]]), Wd = /* @__PURE__ */ ke({
  components: {
    Choicebox: Fi
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
      const n = this.multiple ? e ? [...this.modelValue, t] : [...this.modelValue].filter((o) => o != t) : e ? t : "";
      this.$emit("update:modelValue", n), this.$emit(e ? "checked" : "unchecked");
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
}), zd = { class: "SimulatorChoiceboxList" };
function qd(e, t, n, o, s, r) {
  const i = Ce("Choicebox");
  return b(), S("div", zd, [
    (b(!0), S(W, null, Ie(e.choices, (l) => (b(), be(i, {
      "prop-value": e.getChecked(l),
      key: l.value,
      type: e.type,
      name: e.name,
      choice: l,
      disabled: e.disabled,
      busy: e.busy,
      onChange: (a) => e.onChange(a.target.checked, l.value)
    }, null, 8, ["prop-value", "type", "name", "choice", "disabled", "busy", "onChange"]))), 128))
  ]);
}
const Yd = /* @__PURE__ */ Ve(Wd, [["render", qd], ["__scopeId", "data-v-2135276d"]]), Co = {}, Bn = {};
async function Gd(e, t) {
  const n = "/sol_api/simulator", o = new URLSearchParams({ field: e, ...t });
  if (Co[`${o}`])
    return Co[`${o}`];
  try {
    const s = await fetch(`${n}?${o}`);
    if (!s.ok) {
      const { status: l, statusText: a } = s;
      throw new Error(`${l} ${a}`);
    }
    const { fields: r, result: i } = await s.json();
    return Co[`${o}`] = { fields: r, result: i }, o.delete("field"), Bn[`${o}`] = { result: i }, { fields: r, result: i };
  } catch (s) {
    return { error: s };
  }
}
async function Jd(e) {
  const t = "/sol_api/simulator", n = new URLSearchParams({ ...e });
  if (Bn[`${n}`])
    return Bn[`${n}`];
  try {
    const o = await fetch(`${t}?${n}`);
    if (!o.ok) {
      const { status: r, statusText: i } = o;
      throw new Error(`${r} ${i}`);
    }
    const { result: s } = await o.json();
    return Bn[`${n}`] = { result: s }, { result: s };
  } catch (o) {
    return { error: o };
  }
}
async function Xd(e) {
  const t = "/simulator/save", n = new FormData();
  for (const s in e)
    e.hasOwnProperty(s) && n.append(s, e[s]);
  const o = { method: "POST", body: n };
  try {
    const s = await fetch(t, o);
    if (!s.ok) {
      const { status: i, statusText: l } = s;
      throw new Error(`${i} ${l}`);
    }
    const { hash: r } = await s.json();
    return { hash: r };
  } catch (s) {
    return { error: s };
  }
}
async function Zd(e) {
  const t = "/sol_api/simulator/result", n = new URLSearchParams({ hash: e });
  try {
    const o = await fetch(`${t}?${n}`);
    if (!o.ok) {
      const { status: r, statusText: i } = o;
      throw new Error(`${r} ${i}`);
    }
    const { result: s } = await o.json();
    return { result: s };
  } catch (o) {
    return {
      result: null,
      error: o
    };
  }
}
function Yo(e, t) {
  const [n, o] = e.split("?"), s = new URLSearchParams(o);
  for (const r in t)
    s.set(r, t[r]);
  return n + "?" + s.toString();
}
const kn = {
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
}, Ln = [
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
], Qd = /* @__PURE__ */ ke({
  props: {
    pathResult: String
  },
  components: {
    Icon: ao,
    Steps: ki,
    Loading: Li,
    FormTotal: Uu,
    Prevnext: Gu,
    Choicebox: Fi,
    ChoiceboxList: Yd
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
      values: { ...kn },
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
        ...Ln.map(({ title: t }, n) => {
          const o = n >= this.pageIndex;
          return {
            title: t,
            disabled: o
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
      return Ln.map((e) => e.longTitle);
    },
    // 現在のページのデータ
    page() {
      return Ln[this.pageIndex];
    },
    // 式場 地域の選択肢
    hallPrefAreas() {
      if (!this.fields.hall)
        return [];
      const e = this.hallPref;
      return this.fields.hall.areas.find(
        (n) => n.pref === e
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
      const { fields: t, result: n } = await Gd(
        Ln[e].fieldKeys,
        this.values
      );
      Object.keys(t).forEach((o) => {
        this.fields[o] = t[o], o === "options" ? this.values[o] = t[o].value ? t[o].value.split(",") : [] : this.values[o] = t[o].value;
      }), this.result = n, this.isLoadingForm = !1;
    },
    /**
     * 合計金額の取得
     */
    async updateTotal() {
      this.isLoadingTotal = !0;
      const { result: e } = await Jd(this.values);
      this.result = e, this.isLoadingTotal = !1;
    },
    /**
     * ページ移動
     * @param {Number} index 移動先のページのindex
     */
    goPage(e) {
      const t = e > this.pageIndex;
      if (t) {
        const n = this.page.validator(this.values);
        if (n)
          return alert(n);
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
      const { hash: e, error: t } = await Xd(this.values);
      if (this.isSubmiting = !1, t)
        return this.error = t;
      const n = Yo(this.pathResult, { hash: e });
      window.location.replace(n);
    }
  },
  watch: {
    // ホール 県の変更で市区町村、ホールの値をリセット
    hallPref() {
      this.hallArea = "", this.values.hall = "";
    },
    // 葬儀の形態が変更されたら雰囲気、オプション、通夜会食をリセット
    "values.type"() {
      this.values.atmosphere = kn.atmosphere, this.values.options = kn.options, this.values.tsuyaDinner = kn.tsuyaDinner;
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
}), $n = (e) => (Yt("data-v-0dcdc80e"), e = e(), Gt(), e), ef = ["data-direction"], tf = { class: "SimulatorForm__steps" }, nf = { class: "SimulatorForm__main" }, of = { class: "SimulatorHeading" }, sf = ["aria-hidden"], rf = { class: "SimulatorFormBody" }, lf = {
  key: 0,
  class: "SimulatorFormBody__inner"
}, cf = { class: "SimulatorHallFilter" }, af = { class: "SimulatorCheckList" }, uf = ["value"], df = /* @__PURE__ */ $n(() => /* @__PURE__ */ u("option", { value: "" }, "市区町村で絞る", -1)), ff = ["value"], pf = {
  key: 1,
  class: "text-center"
}, hf = {
  key: 1,
  class: "SimulatorFormBody__inner"
}, mf = {
  key: 2,
  class: "SimulatorFormBody__inner"
}, gf = { class: "SimulatorNumberSelect" }, _f = /* @__PURE__ */ $n(() => /* @__PURE__ */ u("span", null, "ご親族", -1)), vf = ["disabled"], yf = /* @__PURE__ */ $n(() => /* @__PURE__ */ u("option", { value: "" }, "人数を選択", -1)), bf = ["value"], Ef = /* @__PURE__ */ $n(() => /* @__PURE__ */ u("span", null, "ご友人・知り合いの方", -1)), Nf = ["disabled"], Of = /* @__PURE__ */ $n(() => /* @__PURE__ */ u("option", { value: "" }, "人数を選択", -1)), $f = ["value"], wf = {
  key: 3,
  class: "SimulatorFormBody__inner"
}, Sf = {
  key: 4,
  class: "SimulatorFormBody__inner"
}, Cf = {
  key: 5,
  class: "SimulatorFormBody__inner"
}, Vf = { class: "SimulatorOptionsChoices" }, Df = ["aria-label"], Tf = ["value", "checked", "disabled"], If = ["src", "alt"], Pf = {
  key: 6,
  class: "SimulatorFormBody__inner"
}, kf = { class: "SimulatorGiftChoiceboxList" };
function Lf(e, t, n, o, s, r) {
  const i = Ce("Steps"), l = Ce("FormTotal"), a = Ce("Loading"), d = Ce("ChoiceboxList"), m = Ce("Prevnext"), p = Ce("Choicebox");
  return b(), S("div", {
    class: "SimulatorForm",
    "data-direction": e.pageTransitionDirection
  }, [
    u("div", tf, [
      H(i, {
        steps: e.steps,
        current: e.pageIndex,
        "onClick:step": e.goPage
      }, null, 8, ["steps", "current", "onClick:step"])
    ]),
    u("div", nf, [
      H(Gn, null, {
        default: Ao(() => [
          e.result ? (b(), be(l, {
            key: 0,
            result: e.result,
            disabled: e.isBusy
          }, null, 8, ["result", "disabled"])) : le("", !0)
        ]),
        _: 1
      }),
      u("h2", of, [
        u("div", {
          style: _n(e.headingStyleIndex)
        }, [
          (b(!0), S(W, null, Ie(e.pageLongTitles, (h, w) => (b(), S("div", {
            key: w,
            "aria-hidden": w !== e.pageIndex
          }, [
            (b(!0), S(W, null, Ie(h, (P) => (b(), S("span", null, L(P), 1))), 256))
          ], 8, sf))), 128))
        ], 4)
      ]),
      u("div", rf, [
        H(Gn, null, {
          default: Ao(() => [
            e.isPage("式場") ? (b(), S("div", lf, [
              e.isPage("式場") && e.isLoadingForm ? (b(), be(a, { key: 0 })) : (b(), S(W, { key: 1 }, [
                u("div", cf, [
                  u("div", af, [
                    (b(!0), S(W, null, Ie(e.fields.hall.areas, (h) => (b(), S("label", null, [
                      Qt(u("input", {
                        type: "radio",
                        "onUpdate:modelValue": t[0] || (t[0] = (w) => e.hallPref = w),
                        value: h.pref
                      }, null, 8, uf), [
                        [qa, e.hallPref]
                      ]),
                      u("span", null, L(h.pref), 1)
                    ]))), 256))
                  ]),
                  Qt(u("select", {
                    "onUpdate:modelValue": t[1] || (t[1] = (h) => e.hallArea = h),
                    class: "SimulatorSelect"
                  }, [
                    df,
                    (b(!0), S(W, null, Ie(e.hallPrefAreas, (h) => (b(), S("option", {
                      value: h.id
                    }, L(h.name), 9, ff))), 256))
                  ], 512), [
                    [So, e.hallArea]
                  ])
                ]),
                e.hallChoices.length ? (b(), be(d, {
                  key: 0,
                  name: "hall",
                  modelValue: e.values.hall,
                  "onUpdate:modelValue": t[2] || (t[2] = (h) => e.values.hall = h),
                  choices: e.hallChoices,
                  onChecked: e.goNext
                }, null, 8, ["modelValue", "choices", "onChecked"])) : (b(), S("p", pf, "選択した地域の式場はありません")),
                H(m, {
                  disabled: e.isBusy,
                  next: "次へ",
                  "onClick:next": e.goNext
                }, null, 8, ["disabled", "onClick:next"])
              ], 64))
            ])) : e.isPage("葬儀の形態") ? (b(), S("div", hf, [
              e.isPage("葬儀の形態") && e.isLoadingForm ? (b(), be(a, { key: 0 })) : (b(), S(W, { key: 1 }, [
                H(d, {
                  name: "type",
                  modelValue: e.values.type,
                  "onUpdate:modelValue": t[3] || (t[3] = (h) => e.values.type = h),
                  choices: e.fields.type.choices,
                  "onChange:choiceboxlist": e.updateTotal
                }, null, 8, ["modelValue", "choices", "onChange:choiceboxlist"]),
                H(m, {
                  disabled: e.isBusy,
                  prev: "戻る",
                  next: "次へ",
                  "onClick:prev": e.goPrev,
                  "onClick:next": e.goNext
                }, null, 8, ["disabled", "onClick:prev", "onClick:next"])
              ], 64))
            ])) : e.isPage("参列者") ? (b(), S("div", mf, [
              e.isPage("参列者") && e.isLoadingForm ? (b(), be(a, { key: 0 })) : (b(), S(W, { key: 1 }, [
                u("div", gf, [
                  u("label", null, [
                    _f,
                    Qt(u("select", {
                      "onUpdate:modelValue": t[4] || (t[4] = (h) => e.values.numberOfRelatives = h),
                      class: "SimulatorSelect",
                      name: "numberOfRelatives",
                      disabled: e.isBusy,
                      onChange: t[5] || (t[5] = (...h) => e.updateTotal && e.updateTotal(...h))
                    }, [
                      yf,
                      (b(!0), S(W, null, Ie(e.fields.numberOfRelatives.choices, (h) => (b(), S("option", {
                        value: h.value
                      }, L(h.title), 9, bf))), 256))
                    ], 40, vf), [
                      [So, e.values.numberOfRelatives]
                    ])
                  ]),
                  u("label", null, [
                    Ef,
                    Qt(u("select", {
                      "onUpdate:modelValue": t[6] || (t[6] = (h) => e.values.numberOfOthers = h),
                      class: "SimulatorSelect",
                      name: "numberOfOthers",
                      disabled: e.isBusy,
                      onChange: t[7] || (t[7] = (...h) => e.updateTotal && e.updateTotal(...h))
                    }, [
                      Of,
                      (b(!0), S(W, null, Ie(e.fields.numberOfOthers.choices, (h) => (b(), S("option", {
                        value: h.value
                      }, L(h.title), 9, $f))), 256))
                    ], 40, Nf), [
                      [So, e.values.numberOfOthers]
                    ])
                  ])
                ]),
                H(m, {
                  disabled: e.isBusy,
                  prev: "戻る",
                  next: "次へ",
                  "onClick:prev": e.goPrev,
                  "onClick:next": e.goNext
                }, null, 8, ["disabled", "onClick:prev", "onClick:next"])
              ], 64))
            ])) : e.isPage("お見送りの雰囲気") ? (b(), S("div", wf, [
              e.isPage("お見送りの雰囲気") && e.isLoadingForm ? (b(), be(a, { key: 0 })) : (b(), S(W, { key: 1 }, [
                H(d, {
                  name: "atmosphere",
                  modelValue: e.values.atmosphere,
                  "onUpdate:modelValue": t[8] || (t[8] = (h) => e.values.atmosphere = h),
                  choices: e.fields.atmosphere.choices,
                  "onChange:choiceboxlist": e.updateTotal
                }, null, 8, ["modelValue", "choices", "onChange:choiceboxlist"]),
                H(m, {
                  disabled: e.isBusy,
                  prev: "戻る",
                  next: "次へ",
                  "onClick:prev": e.goPrev,
                  "onClick:next": e.goNext
                }, null, 8, ["disabled", "onClick:prev", "onClick:next"])
              ], 64))
            ])) : e.isPage("宗教") ? (b(), S("div", Sf, [
              e.isPage("宗教") && e.isLoadingForm ? (b(), be(a, { key: 0 })) : (b(), S(W, { key: 1 }, [
                H(d, {
                  name: "atmosphere",
                  modelValue: e.values.religion,
                  "onUpdate:modelValue": t[9] || (t[9] = (h) => e.values.religion = h),
                  choices: e.fields.religion.choices,
                  "onChange:choiceboxlist": e.updateTotal
                }, null, 8, ["modelValue", "choices", "onChange:choiceboxlist"]),
                H(m, {
                  disabled: e.isBusy,
                  prev: "戻る",
                  next: "次へ",
                  "onClick:prev": e.goPrev,
                  "onClick:next": e.goNext
                }, null, 8, ["disabled", "onClick:prev", "onClick:next"])
              ], 64))
            ])) : e.isPage("オプション") ? (b(), S("div", Cf, [
              e.isPage("オプション") && e.isLoadingForm ? (b(), be(a, { key: 0 })) : (b(), S(W, { key: 1 }, [
                u("div", Vf, [
                  (b(!0), S(W, null, Ie(e.fields.options.choices, (h) => (b(), S("label", {
                    "aria-label": h.title
                  }, [
                    Qt(u("input", {
                      type: "checkbox",
                      name: "options",
                      "onUpdate:modelValue": t[10] || (t[10] = (w) => e.values.options = w),
                      value: h.value,
                      checked: e.values.options.includes(h.value),
                      disabled: e.isBusy,
                      onChange: t[11] || (t[11] = (...w) => e.updateTotal && e.updateTotal(...w))
                    }, null, 40, Tf), [
                      [za, e.values.options]
                    ]),
                    u("img", {
                      src: h.image,
                      alt: h.title
                    }, null, 8, If),
                    u("div", null, [
                      u("h3", null, L(h.title), 1),
                      u("b", null, L(h.price), 1),
                      u("p", null, L(h.description), 1)
                    ])
                  ], 8, Df))), 256))
                ]),
                H(m, {
                  disabled: e.isBusy,
                  prev: "戻る",
                  next: "次へ",
                  "onClick:prev": e.goPrev,
                  "onClick:next": e.goNext
                }, null, 8, ["disabled", "onClick:prev", "onClick:next"])
              ], 64))
            ])) : e.isPage("返礼品・食事") ? (b(), S("div", Pf, [
              e.isPage("返礼品・食事") && e.isLoadingForm ? (b(), be(a, { key: 0 })) : (b(), S(W, { key: 1 }, [
                u("div", kf, [
                  e.fields.gift ? (b(), be(p, {
                    key: 0,
                    name: "gift",
                    modelValue: e.values.gift,
                    "onUpdate:modelValue": t[12] || (t[12] = (h) => e.values.gift = h),
                    choice: e.fields.gift,
                    busy: e.isBusy,
                    "onChange:choicebox": e.updateTotal
                  }, null, 8, ["modelValue", "choice", "busy", "onChange:choicebox"])) : le("", !0),
                  e.fields.tsuyaDinner ? (b(), be(p, {
                    key: 1,
                    name: "tsuyaDinner",
                    modelValue: e.values.tsuyaDinner,
                    "onUpdate:modelValue": t[13] || (t[13] = (h) => e.values.tsuyaDinner = h),
                    choice: e.fields.tsuyaDinner,
                    busy: e.isBusy,
                    "onChange:choicebox": e.updateTotal
                  }, null, 8, ["modelValue", "choice", "busy", "onChange:choicebox"])) : le("", !0),
                  e.fields.lunch ? (b(), be(p, {
                    key: 2,
                    name: "lunch",
                    modelValue: e.values.lunch,
                    "onUpdate:modelValue": t[14] || (t[14] = (h) => e.values.lunch = h),
                    choice: e.fields.lunch,
                    busy: e.isBusy,
                    "onChange:choicebox": e.updateTotal
                  }, null, 8, ["modelValue", "choice", "busy", "onChange:choicebox"])) : le("", !0),
                  e.fields.sogiDinner ? (b(), be(p, {
                    key: 3,
                    name: "sogiDinner",
                    modelValue: e.values.sogiDinner,
                    "onUpdate:modelValue": t[15] || (t[15] = (h) => e.values.sogiDinner = h),
                    choice: e.fields.sogiDinner,
                    busy: e.isBusy,
                    "onChange:choicebox": e.updateTotal
                  }, null, 8, ["modelValue", "choice", "busy", "onChange:choicebox"])) : le("", !0)
                ]),
                H(m, {
                  disabled: e.isBusy,
                  prev: "戻る",
                  next: "結果を表示",
                  "onClick:prev": e.goPrev,
                  "onClick:next": e.goResult
                }, null, 8, ["disabled", "onClick:prev", "onClick:next"])
              ], 64))
            ])) : le("", !0)
          ]),
          _: 1
        })
      ])
    ])
  ], 8, ef);
}
const Af = /* @__PURE__ */ Ve(Qd, [["render", Lf], ["__scopeId", "data-v-0dcdc80e"]]), Ff = /* @__PURE__ */ ke({
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
    Icon: ao
  },
  methods: {
    formatPrice(e) {
      return e.toLocaleString("ja-JP");
    }
  }
}), vt = (e) => (Yt("data-v-08364721"), e = e(), Gt(), e), Rf = { class: "SimulatorResultPrice" }, Mf = /* @__PURE__ */ vt(() => /* @__PURE__ */ u("h2", { class: "SimulatorResultPrice__heading" }, "ご葬儀見積 合計価格", -1)), xf = { class: "SimulatorResultPrice__body" }, Hf = { class: "SimulatorResultPrice__table" }, jf = /* @__PURE__ */ vt(() => /* @__PURE__ */ u("thead", null, [
  /* @__PURE__ */ u("tr", null, [
    /* @__PURE__ */ u("th", null, "サービス内容"),
    /* @__PURE__ */ u("th", null, "費用")
  ])
], -1)), Bf = /* @__PURE__ */ vt(() => /* @__PURE__ */ u("th", null, "葬儀基本費用", -1)), Uf = /* @__PURE__ */ vt(() => /* @__PURE__ */ u("th", null, "オプション", -1)), Kf = /* @__PURE__ */ vt(() => /* @__PURE__ */ u("th", null, "返礼品・食事", -1)), Wf = { class: "SimulatorResultPrice__price" }, zf = /* @__PURE__ */ vt(() => /* @__PURE__ */ u("span", null, "税込", -1)), qf = /* @__PURE__ */ vt(() => /* @__PURE__ */ u("span", null, "円〜", -1)), Yf = ["href"], Gf = /* @__PURE__ */ vt(() => /* @__PURE__ */ u("span", null, "この見積で相談する", -1));
function Jf(e, t, n, o, s, r) {
  const i = Ce("Icon");
  return b(), S("div", Rf, [
    Mf,
    u("div", xf, [
      u("table", Hf, [
        jf,
        u("tbody", null, [
          u("tr", null, [
            Bf,
            u("td", null, L(e.formatPrice(e.result.price.basic)) + "円", 1)
          ]),
          u("tr", null, [
            Uf,
            u("td", null, L(e.formatPrice(e.result.price.option)) + "円", 1)
          ]),
          u("tr", null, [
            Kf,
            u("td", null, L(e.formatPrice(e.result.price.food)) + "円", 1)
          ])
        ])
      ]),
      u("div", Wf, [
        u("p", null, [
          zf,
          u("span", null, L(e.formatPrice(e.result.price.total)), 1),
          qf
        ]),
        u("p", null, [
          ue(" （一般価格 "),
          u("span", null, L(e.formatPrice(e.result.price.totalGeneral)), 1),
          ue(" 円） ")
        ])
      ]),
      u("a", {
        class: "SimulatorResultPrice__contact",
        href: e.contactUrl,
        target: "_blank"
      }, [
        u("span", null, [
          H(i, { icon: "list-check-solid" })
        ]),
        Gf
      ], 8, Yf)
    ])
  ]);
}
const Xf = /* @__PURE__ */ Ve(Ff, [["render", Jf], ["__scopeId", "data-v-08364721"]]), Zf = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], Qf = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ep = ["日", "月", "火", "水", "木", "金", "土"];
function tp(e, t) {
  const n = e.replace(/-/g, "/"), o = new Date(n), s = `${o.getFullYear()}`, r = s.padStart(4, "0"), i = `${o.getMonth() + 1}`, l = i.padStart(2, "0"), a = `${o.getDate()}`, d = a.padStart(2, "0"), m = `${o.getHours()}`, p = m.padStart(2, "0"), h = `${o.getHours() % 12}`, w = h.padStart(2, "0"), P = `${o.getMinutes()}`, R = P.padStart(2, "0"), pe = `${o.getSeconds()}`, ee = pe.padStart(2, "0"), oe = `${Qf[o.getDay()]}`, Z = `${Zf[o.getDay()]}`, Y = `${ep[o.getDay()]}`;
  return t.replace(/YYYY/g, r).replace(/Y/g, s).replace(/MM/g, l).replace(/M/g, i).replace(/DD/g, d).replace(/D/g, a).replace(/HH/g, p).replace(/H/g, m).replace(/hh/g, w).replace(/h/g, h).replace(/mm/g, R).replace(/m/g, P).replace(/ss/g, ee).replace(/s/g, pe).replace(/ww/g, Z).replace(/w/g, oe).replace(/W/g, Y);
}
const np = /* @__PURE__ */ ke({
  props: {
    pathForm: String,
    pathResult: String,
    pathInquiry: String
  },
  components: {
    Icon: ao,
    Steps: ki,
    Loading: Li,
    HallInfo: Ai,
    ResultPrice: Xf
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
      const e = this.hash;
      return Yo(this.pathResult, {
        hash: e,
        openExternalBrowser: 1
      });
    },
    contactUrl() {
      const e = this.hash;
      return Yo(this.pathInquiry, { hash: e });
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
      return tp(e, t);
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
    const { result: e, error: t } = await Zd(this.hash);
    if (this.isLoading = !1, t) {
      this.error = t;
      return;
    }
    this.result = e;
  }
}), X = (e) => (Yt("data-v-bef2d8a5"), e = e(), Gt(), e), op = { class: "SimulatorResult" }, sp = { class: "SimulatorResult__steps" }, rp = { class: "SimulatorResult__body" }, ip = {
  key: 1,
  class: "text-center"
}, lp = { class: "SimulatorResultBox" }, cp = { class: "SimulatorResultButtonWrap" }, ap = /* @__PURE__ */ X(() => /* @__PURE__ */ u("span", null, "結果のURLを共有", -1)), up = /* @__PURE__ */ X(() => /* @__PURE__ */ u("span", null, "結果のURLをコピー", -1)), dp = ["href"], fp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("span", null, "もう一度シミュレーションする", -1)), pp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("p", { class: "SimulatorLinkText mt-25 hiddenInPC" }, [
  /* @__PURE__ */ u("a", { href: "/" }, "トップページへ")
], -1)), hp = { class: "SimulatorResultContentWrap" }, mp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("h2", { class: "SimulatorResultContentHeading" }, "シミュレーション内容", -1)), gp = { class: "SimulatorResultContent" }, _p = { class: "SimulatorResultContent__heading" }, vp = { class: "SimulatorResultContent__table" }, yp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("th", null, "形態", -1)), bp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("th", null, "参列者", -1)), Ep = /* @__PURE__ */ X(() => /* @__PURE__ */ u("span", null, "親族", -1)), Np = /* @__PURE__ */ X(() => /* @__PURE__ */ u("span", null, "ご友人・知り合いの方", -1)), Op = /* @__PURE__ */ X(() => /* @__PURE__ */ u("span", null, "参列者合計", -1)), $p = /* @__PURE__ */ X(() => /* @__PURE__ */ u("th", null, "お別れの形", -1)), wp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("th", null, "宗教", -1)), Sp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("th", null, "オプション", -1)), Cp = { key: 0 }, Vp = { key: 1 }, Dp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("th", null, "返礼品・食事", -1)), Tp = { key: 0 }, Ip = { key: 1 }, Pp = { key: 0 }, kp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("span", null, "返礼品", -1)), Lp = { key: 1 }, Ap = /* @__PURE__ */ X(() => /* @__PURE__ */ u("span", null, "通夜の会食", -1)), Fp = { key: 2 }, Rp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("span", null, "昼食", -1)), Mp = { key: 3 }, xp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("span", null, "ご葬儀の会食", -1)), Hp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("th", null, "適用プラン", -1)), jp = ["href"], Bp = { style: { "text-decoration": "underline" } }, Up = ["src", "alt"], Kp = { class: "SimulatorResultNotes" }, Wp = ["innerHTML"], zp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("br", null, null, -1)), qp = { class: "SimulatorResultHideInPC" }, Yp = { class: "SimulatorResultButtonWrap" }, Gp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("span", null, "結果のURLを共有", -1)), Jp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("span", null, "結果のURLをコピー", -1)), Xp = ["href"], Zp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("span", null, "もう一度シミュレーションする", -1)), Qp = /* @__PURE__ */ X(() => /* @__PURE__ */ u("p", { class: "SimulatorLinkText mt-25 hiddenInPC" }, [
  /* @__PURE__ */ u("a", { href: "/" }, "トップページへ")
], -1)), eh = {
  key: 0,
  class: "SimulatorResultCasesWrap"
}, th = { class: "SimulatorResultCasesHeading2" }, nh = /* @__PURE__ */ X(() => /* @__PURE__ */ u("span", null, "ご利用いただいたお客様の", -1)), oh = /* @__PURE__ */ X(() => /* @__PURE__ */ u("h3", null, [
  /* @__PURE__ */ u("em", null, "葬儀事例"),
  /* @__PURE__ */ ue("はこちら")
], -1)), sh = { class: "SimulatorResultCases" }, rh = ["href"], ih = ["src", "alt"], lh = /* @__PURE__ */ X(() => /* @__PURE__ */ u("dt", null, "プラン", -1)), ch = /* @__PURE__ */ X(() => /* @__PURE__ */ u("dt", null, "参列", -1)), ah = /* @__PURE__ */ X(() => /* @__PURE__ */ u("dt", null, "費用", -1)), uh = /* @__PURE__ */ X(() => /* @__PURE__ */ u("div", { class: "SimulatorResultCasesMore" }, [
  /* @__PURE__ */ u("a", {
    href: "/case.html",
    class: "PageLinkBtn"
  }, [
    /* @__PURE__ */ u("span", null, "もっと見る")
  ])
], -1)), dh = /* @__PURE__ */ X(() => /* @__PURE__ */ u("p", { class: "SimulatorLinkText mt-30" }, [
  /* @__PURE__ */ u("a", { href: "/" }, "トップページへ")
], -1));
function fh(e, t, n, o, s, r) {
  const i = Ce("Steps"), l = Ce("Loading"), a = Ce("ResultPrice"), d = Ce("Icon");
  return b(), S("div", op, [
    u("div", sp, [
      H(i, {
        steps: e.steps,
        current: e.steps.length - 1
      }, null, 8, ["steps", "current"])
    ]),
    u("div", rp, [
      e.isLoading ? (b(), be(l, { key: 0 })) : e.error ? (b(), S("p", ip, L(e.error), 1)) : (b(), S(W, { key: 2 }, [
        u("div", lp, [
          H(a, {
            result: e.result,
            "contact-url": e.contactUrl
          }, null, 8, ["result", "contact-url"]),
          u("div", cp, [
            u("button", {
              class: "SimulatorResultShareButton",
              onClick: t[0] || (t[0] = (...m) => e.shareResult && e.shareResult(...m))
            }, [
              e.canShareAPI ? (b(), S(W, { key: 0 }, [
                ap,
                H(d, { icon: "share-nodes-solid" })
              ], 64)) : (b(), S(W, { key: 1 }, [
                up,
                H(d, {
                  icon: e.copied ? "circle-check-solid" : "copy-regular"
                }, null, 8, ["icon"])
              ], 64))
            ]),
            u("a", {
              class: "SimulatorResultAgainButton",
              href: e.pathForm
            }, [
              fp,
              H(d, { icon: "back" })
            ], 8, dp)
          ]),
          pp,
          u("section", hp, [
            mp,
            u("div", gp, [
              u("h3", _p, L(e.result.hall.title), 1),
              u("table", vp, [
                u("tr", null, [
                  yp,
                  u("td", null, L(e.result.type), 1)
                ]),
                u("tr", null, [
                  bp,
                  u("td", null, [
                    u("ul", null, [
                      u("li", null, [
                        Ep,
                        u("span", null, L(e.result.numberOfRelatives), 1)
                      ]),
                      u("li", null, [
                        Np,
                        u("span", null, L(e.result.numberOfOthers), 1)
                      ]),
                      u("li", null, [
                        Op,
                        u("span", null, L(e.result.numberOfTotal), 1)
                      ])
                    ])
                  ])
                ]),
                u("tr", null, [
                  $p,
                  u("td", null, L(e.result.atmosphere), 1)
                ]),
                u("tr", null, [
                  wp,
                  u("td", null, L(e.result.religion), 1)
                ]),
                u("tr", null, [
                  Sp,
                  u("td", null, [
                    e.result.options.length ? (b(), S("ul", Cp, [
                      (b(!0), S(W, null, Ie(e.result.options, (m) => (b(), S("li", null, [
                        u("span", null, L(m), 1)
                      ]))), 256))
                    ])) : (b(), S("span", Vp, L("-")))
                  ])
                ]),
                u("tr", null, [
                  Dp,
                  u("td", null, [
                    !e.result.gift && !e.result.tsuyaDinner && !e.result.lunch && !e.result.sogiDinner ? (b(), S("span", Tp, L("-"))) : (b(), S("ul", Ip, [
                      e.result.gift ? (b(), S("li", Pp, [
                        kp,
                        u("span", null, L(e.result.gift), 1)
                      ])) : le("", !0),
                      e.result.tsuyaDinner ? (b(), S("li", Lp, [
                        Ap,
                        u("span", null, L(e.result.tsuyaDinner), 1)
                      ])) : le("", !0),
                      e.result.lunch ? (b(), S("li", Fp, [
                        Rp,
                        u("span", null, L(e.result.lunch), 1)
                      ])) : le("", !0),
                      e.result.sogiDinner ? (b(), S("li", Mp, [
                        xp,
                        u("span", null, L(e.result.sogiDinner), 1)
                      ])) : le("", !0)
                    ]))
                  ])
                ]),
                u("tr", null, [
                  Hp,
                  u("td", null, [
                    u("a", {
                      href: e.result.planUrl,
                      target: "_blank"
                    }, [
                      u("span", Bp, L(e.result.planTitle === "オーダーメイド" ? e.result.planTitle + "(" + e.result.planNote + ")" : e.result.planTitle), 1),
                      u("img", {
                        class: "SimulatorResultContent__planImage",
                        src: e.result.planImage,
                        alt: e.result.planTitle + "の祭壇イメージ"
                      }, null, 8, Up)
                    ], 8, jp)
                  ])
                ])
              ])
            ]),
            u("p", Kp, [
              u("span", {
                innerHTML: e.convertNewLineToBr(e.result.planDescription)
              }, null, 8, Wp),
              zp,
              ue(" 作成日時: " + L(e.formatDate(e.result.createdAt)), 1)
            ])
          ]),
          u("div", qp, [
            H(a, {
              result: e.result,
              "contact-url": e.contactUrl
            }, null, 8, ["result", "contact-url"]),
            u("div", Yp, [
              u("button", {
                class: "SimulatorResultShareButton",
                onClick: t[1] || (t[1] = (...m) => e.shareResult && e.shareResult(...m))
              }, [
                e.canShareAPI ? (b(), S(W, { key: 0 }, [
                  Gp,
                  H(d, { icon: "share-nodes-solid" })
                ], 64)) : (b(), S(W, { key: 1 }, [
                  Jp,
                  H(d, {
                    icon: e.copied ? "circle-check-solid" : "copy-regular"
                  }, null, 8, ["icon"])
                ], 64))
              ]),
              u("a", {
                class: "SimulatorResultAgainButton",
                href: e.pathForm
              }, [
                Zp,
                H(d, { icon: "back" })
              ], 8, Xp)
            ]),
            Qp
          ])
        ]),
        e.result.cases.length ? (b(), S("section", eh, [
          u("div", th, [
            u("p", null, [
              u("em", null, L(e.result.planTitle) + "プラン", 1),
              ue("を"),
              nh
            ]),
            oh
          ]),
          u("div", sh, [
            (b(!0), S(W, null, Ie(e.result.cases, (m) => (b(), S("a", {
              href: m.url,
              target: "_blank"
            }, [
              u("img", {
                src: m.image,
                alt: m.title
              }, null, 8, ih),
              u("h3", null, L(m.title), 1),
              u("dl", null, [
                lh,
                u("dd", null, L(m.plan), 1),
                ch,
                u("dd", null, L(m.number), 1),
                ah,
                u("dd", null, L(m.price), 1)
              ]),
              u("span", null, [
                ue(" 詳細をみる "),
                H(d, { icon: "circle-right-regular" })
              ])
            ], 8, rh))), 256))
          ]),
          uh,
          dh
        ])) : le("", !0)
      ], 64))
    ])
  ]);
}
const ph = /* @__PURE__ */ Ve(np, [["render", fh], ["__scopeId", "data-v-bef2d8a5"]]), hh = { class: "Page" }, mh = "error", gh = {
  __name: "error",
  setup(e) {
    return (t, n) => (b(), S("div", hh, L(mh)));
  }
}, _h = /* @__PURE__ */ Ve(gh, [["__scopeId", "data-v-7c015945"]]);
function vh(e, t) {
  const n = (() => {
    const o = location.pathname + location.search;
    return o === t.start ? mu : o === t.form ? Af : o.startsWith(t.result) ? ph : _h;
  })();
  Ja({
    render() {
      return Ti(n, {
        pathStart: t.start,
        pathForm: t.form,
        pathResult: t.result,
        pathInquiry: t.inquiry
      });
    }
  }).mount(e);
}
export {
  vh as simulatorApp
};
