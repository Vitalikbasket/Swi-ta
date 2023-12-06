/*! For license information please see main.js.LICENSE.txt */
(()=>{
    var e, t, r = {}, a = {};
    function n(e) {
        var t = a[e];
        if (void 0 !== t)
            return t.exports;
        var i = a[e] = {
            exports: {}
        };
        return r[e].call(i.exports, i, i.exports, n),
        i.exports
    }
    if (n.m = r,
    n.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e,t)=>{
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.f = {},
    n.e = e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e, t),
    t)), [])),
    n.u = e=>(({
        185: "tag.lazy",
        578: "game.lazy",
        831: "home.lazy",
        979: "page.lazy"
    }[e] || e) + "." + {
        185: "c159436d",
        306: "8213b86a",
        578: "8c14097f",
        831: "4b9196bf",
        920: "27385f24",
        979: "a6100cd6"
    }[e] + ".js"),
    n.miniCssF = e=>({
        185: "tag.lazy",
        578: "game.lazy",
        831: "home.lazy",
        979: "page.lazy"
    }[e] + "." + {
        185: "c159436d",
        578: "8c14097f",
        831: "4b9196bf",
        979: "a6100cd6"
    }[e] + ".css"),
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    e = {},
    t = "orca:",
    n.l = (r,a,i,o)=>{
        if (e[r])
            e[r].push(a);
        else {
            var l, s;
            if (void 0 !== i)
                for (var d = document.getElementsByTagName("script"), c = 0; c < d.length; c++) {
                    var u = d[c];
                    if (u.getAttribute("src") == r || u.getAttribute("data-webpack") == t + i) {
                        l = u;
                        break
                    }
                }
            l || (s = !0,
            (l = document.createElement("script")).charset = "utf-8",
            l.timeout = 120,
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + i),
            l.src = r),
            e[r] = [a];
            var p = (t,a)=>{
                l.onerror = l.onload = null,
                clearTimeout(f);
                var n = e[r];
                if (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                n && n.forEach((e=>e(a))),
                t)
                    return t(a)
            }
              , f = setTimeout(p.bind(null, void 0, {
                type: "timeout",
                target: l
            }), 12e4);
            l.onerror = p.bind(null, l.onerror),
            l.onload = p.bind(null, l.onload),
            s && document.head.appendChild(l)
        }
    }
    ,
    n.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.p = "/",
    (()=>{
        if ("undefined" != typeof document) {
            var e = {
                179: 0
            };
            n.f.miniCss = (t,r)=>{
                e[t] ? r.push(e[t]) : 0 !== e[t] && {
                    185: 1,
                    578: 1,
                    831: 1,
                    979: 1
                }[t] && r.push(e[t] = (e=>new Promise(((t,r)=>{
                    var a = n.miniCssF(e)
                      , i = n.p + a;
                    if (((e,t)=>{
                        for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                            var n = (o = r[a]).getAttribute("data-href") || o.getAttribute("href");
                            if ("stylesheet" === o.rel && (n === e || n === t))
                                return o
                        }
                        var i = document.getElementsByTagName("style");
                        for (a = 0; a < i.length; a++) {
                            var o;
                            if ((n = (o = i[a]).getAttribute("data-href")) === e || n === t)
                                return o
                        }
                    }
                    )(a, i))
                        return t();
                    ((e,t,r,a,n)=>{
                        var i = document.createElement("link");
                        i.rel = "stylesheet",
                        i.type = "text/css",
                        i.onerror = i.onload = r=>{
                            if (i.onerror = i.onload = null,
                            "load" === r.type)
                                a();
                            else {
                                var o = r && ("load" === r.type ? "missing" : r.type)
                                  , l = r && r.target && r.target.href || t
                                  , s = new Error("Loading CSS chunk " + e + " failed.\n(" + l + ")");
                                s.code = "CSS_CHUNK_LOAD_FAILED",
                                s.type = o,
                                s.request = l,
                                i.parentNode.removeChild(i),
                                n(s)
                            }
                        }
                        ,
                        i.href = t,
                        document.head.appendChild(i)
                    }
                    )(e, i, 0, t, r)
                }
                )))(t).then((()=>{
                    e[t] = 0
                }
                ), (r=>{
                    throw delete e[t],
                    r
                }
                )))
            }
        }
    }
    )(),
    (()=>{
        var e = {
            179: 0
        };
        n.f.j = (t,r)=>{
            var a = n.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a)
                    r.push(a[2]);
                else if (979 != t) {
                    var i = new Promise(((r,n)=>a = e[t] = [r, n]));
                    r.push(a[2] = i);
                    var o = n.p + n.u(t)
                      , l = new Error;
                    n.l(o, (r=>{
                        if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0),
                        a)) {
                            var i = r && ("load" === r.type ? "missing" : r.type)
                              , o = r && r.target && r.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")",
                            l.name = "ChunkLoadError",
                            l.type = i,
                            l.request = o,
                            a[1](l)
                        }
                    }
                    ), "chunk-" + t, t)
                } else
                    e[t] = 0
        }
        ;
        var t = (t,r)=>{
            var a, i, [o,l,s] = r, d = 0;
            if (o.some((t=>0 !== e[t]))) {
                for (a in l)
                    n.o(l, a) && (n.m[a] = l[a]);
                s && s(n)
            }
            for (t && t(r); d < o.length; d++)
                i = o[d],
                n.o(e, i) && e[i] && e[i][0](),
                e[i] = 0
        }
          , r = self.webpackChunkorca = self.webpackChunkorca || [];
        r.forEach(t.bind(null, 0)),
        r.push = t.bind(null, r.push.bind(r))
    }
    )(),
    String.prototype.replaceAll || (String.prototype.replaceAll = function(e, t) {
        return "[object regexp]" === Object.prototype.toString.call(e).toLowerCase() ? this.replace(e, t) : this.replaceAll(new RegExp(e,"g"), t)
    }
    ),
    "serviceWorker"in navigator)
        try {
            navigator.serviceWorker.register("/service-worker.js", {
                scope: "/"
            })
        } catch {}
    if (["disclaimer-page", "cookies-page", "privacy-page", "third-parties-page"].includes(window.SITE_OPTIONS.util)) {
        const e = document.querySelector("#policy");
        setTimeout((function() {
            e.contentWindow.postMessage({
                domain: window.SITE_OPTIONS.domain,
                url: window.SITE_OPTIONS.url,
                privacyStatementUrl: window.SITE_OPTIONS.privacyStatementUrl,
                termsOfUseUrl: window.SITE_OPTIONS.termsOfUseUrl,
                cookieStatementUrl: window.SITE_OPTIONS.cookieStatementUrl,
                thirdPartiesUrl: window.SITE_OPTIONS.thirdPartiesUrl,
                kidsPrivacyStatementUrl: window.SITE_OPTIONS.kidsPrivacyStatementUrl
            }, "https://legal.talpagaming.com")
        }
        ), 5e3),
        window.addEventListener("message", (function(e) {
            e.data && "open-privacy-settings" === e.data && window.Optanon && window.Optanon.ToggleInfoDisplay()
        }
        ), !1)
    }
    if (window && window.SITE_OPTIONS && window.SITE_OPTIONS.util)
        try {
            switch (window.SITE_OPTIONS.util) {
            case "home-page":
                Promise.all([n.e(306), n.e(920), n.e(831)]).then(n.bind(n, 786)).then((async e=>{
                    const t = new e.default(window.SITE_OPTIONS.util);
                    t.headerLift.template = "home",
                    await t.start()
                }
                ));
                break;
            case "game-page":
                Promise.all([n.e(306), n.e(920), n.e(578)]).then(n.bind(n, 471)).then((async e=>{
                    const t = new e.default(window.SITE_OPTIONS.util);
                    t.headerLift.template = "game",
                    await t.start()
                }
                ));
                break;
            case "kids-game-page":
                Promise.all([n.e(306), n.e(920), n.e(578)]).then(n.bind(n, 471)).then((async e=>{
                    const t = new e.default(window.SITE_OPTIONS.util);
                    await t.setupStartEvent()
                }
                ));
                break;
            case "tag-page":
                Promise.all([n.e(306), n.e(920), n.e(185)]).then(n.bind(n, 534)).then((async e=>{
                    const t = new e.default(window.SITE_OPTIONS.util);
                    t.headerLift.template = "category",
                    await t.start()
                }
                ));
                break;
            default:
                window.SITE_OPTIONS.util.startsWith("kids-") || window.SITE_OPTIONS.util.startsWith("parents-") ? Promise.all([n.e(306), n.e(920), n.e(979)]).then(n.bind(n, 979)).then((async e=>{
                    new e.default(window.SITE_OPTIONS.util)
                }
                )) : Promise.all([n.e(306), n.e(920), n.e(979)]).then(n.bind(n, 979)).then((async e=>{
                    const t = new e.default(window.SITE_OPTIONS.util);
                    t.headerLift.template = "default",
                    await t.start()
                }
                ))
            }
        } catch {}
}
)();
