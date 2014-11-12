var swfobject = function() {
    function C() {
        if (b) {
            return
        }
        try {
            var e = a.getElementsByTagName("body")[0].appendChild(U("span"));
            e.parentNode.removeChild(e)
        } catch (t) {
            return
        }
        b = true;
        var n = c.length;
        for (var r = 0; r < n; r++) {
            c[r]()
        }
    }

    function k(e) {
        if (b) {
            e()
        } else {
            c[c.length] = e
        }
    }

    function L(t) {
        if (typeof u.addEventListener != e) {
            u.addEventListener("load", t, false)
        } else {
            if (typeof a.addEventListener != e) {
                a.addEventListener("load", t, false)
            } else {
                if (typeof u.attachEvent != e) {
                    z(u, "onload", t)
                } else {
                    if (typeof u.onload == "function") {
                        var n = u.onload;
                        u.onload = function() {
                            n();
                            t()
                        }
                    } else {
                        u.onload = t
                    }
                }
            }
        }
    }

    function A() {
        if (l) {
            O()
        } else {
            M()
        }
    }

    function O() {
        var n = a.getElementsByTagName("body")[0];
        var r = U(t);
        r.setAttribute("type", i);
        var s = n.appendChild(r);
        if (s) {
            var o = 0;
            (function() {
                if (typeof s.GetVariable != e) {
                    var t = s.GetVariable("$version");
                    if (t) {
                        t = t.split(" ")[1].split(",");
                        T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)]
                    }
                } else {
                    if (o < 10) {
                        o++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                n.removeChild(r);
                s = null;
                M()
            })()
        } else {
            M()
        }
    }

    function M() {
        var t = h.length;
        if (t > 0) {
            for (var n = 0; n < t; n++) {
                var r = h[n].id;
                var i = h[n].callbackFn;
                var s = {
                    success: false,
                    id: r
                };
                if (T.pv[0] > 0) {
                    var o = R(r);
                    if (o) {
                        if (W(h[n].swfVersion) && !(T.wk && T.wk < 312)) {
                            V(r, true);
                            if (i) {
                                s.success = true;
                                s.ref = _(r);
                                i(s)
                            }
                        } else {
                            if (h[n].expressInstall && D()) {
                                var u = {};
                                u.data = h[n].expressInstall;
                                u.width = o.getAttribute("width") || "0";
                                u.height = o.getAttribute("height") || "0";
                                if (o.getAttribute("class")) {
                                    u.styleclass = o.getAttribute("class")
                                }
                                if (o.getAttribute("align")) {
                                    u.align = o.getAttribute("align")
                                }
                                var a = {};
                                var f = o.getElementsByTagName("param");
                                var l = f.length;
                                for (var c = 0; c < l; c++) {
                                    if (f[c].getAttribute("name").toLowerCase() != "movie") {
                                        a[f[c].getAttribute("name")] = f[c].getAttribute("value")
                                    }
                                }
                                P(u, a, r, i)
                            } else {
                                H(o);
                                if (i) {
                                    i(s)
                                }
                            }
                        }
                    }
                } else {
                    V(r, true);
                    if (i) {
                        var p = _(r);
                        if (p && typeof p.SetVariable != e) {
                            s.success = true;
                            s.ref = p
                        }
                        i(s)
                    }
                }
            }
        }
    }

    function _(n) {
        var r = null;
        var i = R(n);
        if (i && i.nodeName == "OBJECT") {
            if (typeof i.SetVariable != e) {
                r = i
            } else {
                var s = i.getElementsByTagName(t)[0];
                if (s) {
                    r = s
                }
            }
        }
        return r
    }

    function D() {
        return !w && W("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
    }

    function P(t, n, r, i) {
        w = true;
        g = i || null;
        y = {
            success: false,
            id: r
        };
        var o = R(r);
        if (o) {
            if (o.nodeName == "OBJECT") {
                v = B(o);
                m = null
            } else {
                v = o;
                m = r
            }
            t.id = s;
            if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) {
                t.width = "310"
            }
            if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) {
                t.height = "137"
            }
            a.title = a.title.slice(0, 47) + " - Flash Player Installation";
            var f = T.ie && T.win ? "ActiveX" : "PlugIn",
                l = "MMredirectURL=" + u.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + a.title;
            if (typeof n.flashvars != e) {
                n.flashvars += "&" + l
            } else {
                n.flashvars = l
            } if (T.ie && T.win && o.readyState != 4) {
                var c = U("div");
                r += "SWFObjectNew";
                c.setAttribute("id", r);
                o.parentNode.insertBefore(c, o);
                o.style.display = "none";
                (function() {
                    if (o.readyState == 4) {
                        o.parentNode.removeChild(o)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            j(t, n, r)
        }
    }

    function H(e) {
        if (T.ie && T.win && e.readyState != 4) {
            var t = U("div");
            e.parentNode.insertBefore(t, e);
            t.parentNode.replaceChild(B(e), t);
            e.style.display = "none";
            (function() {
                if (e.readyState == 4) {
                    e.parentNode.removeChild(e)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            e.parentNode.replaceChild(B(e), e)
        }
    }

    function B(e) {
        var n = U("div");
        if (T.win && T.ie) {
            n.innerHTML = e.innerHTML
        } else {
            var r = e.getElementsByTagName(t)[0];
            if (r) {
                var i = r.childNodes;
                if (i) {
                    var s = i.length;
                    for (var o = 0; o < s; o++) {
                        if (!(i[o].nodeType == 1 && i[o].nodeName == "PARAM") && !(i[o].nodeType == 8)) {
                            n.appendChild(i[o].cloneNode(true))
                        }
                    }
                }
            }
        }
        return n
    }

    function j(n, r, s) {
        var o, u = R(s);
        if (T.wk && T.wk < 312) {
            return o
        }
        if (u) {
            if (typeof n.id == e) {
                n.id = s
            }
            if (T.ie && T.win) {
                var a = "";
                for (var f in n) {
                    if (n[f] != Object.prototype[f]) {
                        if (f.toLowerCase() == "data") {
                            r.movie = n[f]
                        } else {
                            if (f.toLowerCase() == "styleclass") {
                                a += ' class="' + n[f] + '"'
                            } else {
                                if (f.toLowerCase() != "classid") {
                                    a += " " + f + '="' + n[f] + '"'
                                }
                            }
                        }
                    }
                }
                var l = "";
                for (var c in r) {
                    if (r[c] != Object.prototype[c]) {
                        l += '<param name="' + c + '" value="' + r[c] + '" />'
                    }
                }
                u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>";
                p[p.length] = n.id;
                o = R(n.id)
            } else {
                var h = U(t);
                h.setAttribute("type", i);
                for (var d in n) {
                    if (n[d] != Object.prototype[d]) {
                        if (d.toLowerCase() == "styleclass") {
                            h.setAttribute("class", n[d])
                        } else {
                            if (d.toLowerCase() != "classid") {
                                h.setAttribute(d, n[d])
                            }
                        }
                    }
                }
                for (var v in r) {
                    if (r[v] != Object.prototype[v] && v.toLowerCase() != "movie") {
                        F(h, v, r[v])
                    }
                }
                u.parentNode.replaceChild(h, u);
                o = h
            }
        }
        return o
    }

    function F(e, t, n) {
        var r = U("param");
        r.setAttribute("name", t);
        r.setAttribute("value", n);
        e.appendChild(r)
    }

    function I(e) {
        var t = R(e);
        if (t && t.nodeName == "OBJECT") {
            if (T.ie && T.win) {
                t.style.display = "none";
                (function() {
                    if (t.readyState == 4) {
                        q(e)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                t.parentNode.removeChild(t)
            }
        }
    }

    function q(e) {
        var t = R(e);
        if (t) {
            for (var n in t) {
                if (typeof t[n] == "function") {
                    t[n] = null
                }
            }
            t.parentNode.removeChild(t)
        }
    }

    function R(e) {
        var t = null;
        try {
            t = a.getElementById(e)
        } catch (n) {}
        return t
    }

    function U(e) {
        return a.createElement(e)
    }

    function z(e, t, n) {
        e.attachEvent(t, n);
        d[d.length] = [e, t, n]
    }

    function W(e) {
        var t = T.pv,
            n = e.split(".");
        n[0] = parseInt(n[0], 10);
        n[1] = parseInt(n[1], 10) || 0;
        n[2] = parseInt(n[2], 10) || 0;
        return t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? true : false
    }

    function X(n, r, i, s) {
        if (T.ie && T.mac) {
            return
        }
        var o = a.getElementsByTagName("head")[0];
        if (!o) {
            return
        }
        var u = i && typeof i == "string" ? i : "screen";
        if (s) {
            E = null;
            S = null
        }
        if (!E || S != u) {
            var f = U("style");
            f.setAttribute("type", "text/css");
            f.setAttribute("media", u);
            E = o.appendChild(f);
            if (T.ie && T.win && typeof a.styleSheets != e && a.styleSheets.length > 0) {
                E = a.styleSheets[a.styleSheets.length - 1]
            }
            S = u
        }
        if (T.ie && T.win) {
            if (E && typeof E.addRule == t) {
                E.addRule(n, r)
            }
        } else {
            if (E && typeof a.createTextNode != e) {
                E.appendChild(a.createTextNode(n + " {" + r + "}"))
            }
        }
    }

    function V(e, t) {
        if (!x) {
            return
        }
        var n = t ? "visible" : "hidden";
        if (b && R(e)) {
            R(e).style.visibility = n
        } else {
            X("#" + e, "visibility:" + n)
        }
    }

    function $(t) {
        var n = /[\\\"<>\.;]/;
        var r = n.exec(t) != null;
        return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
    }
    var e = "undefined",
        t = "object",
        n = "Shockwave Flash",
        r = "ShockwaveFlash.ShockwaveFlash",
        i = "application/x-shockwave-flash",
        s = "SWFObjectExprInst",
        o = "onreadystatechange",
        u = window,
        a = document,
        f = navigator,
        l = false,
        c = [A],
        h = [],
        p = [],
        d = [],
        v, m, g, y, b = false,
        w = false,
        E, S, x = true,
        T = function() {
            var s = typeof a.getElementById != e && typeof a.getElementsByTagName != e && typeof a.createElement != e,
                o = f.userAgent.toLowerCase(),
                c = f.platform.toLowerCase(),
                h = c ? /win/.test(c) : /win/.test(o),
                p = c ? /mac/.test(c) : /mac/.test(o),
                d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                v = !+"1",
                m = [0, 0, 0],
                g = null;
            if (typeof f.plugins != e && typeof f.plugins[n] == t) {
                g = f.plugins[n].description;
                if (g && !(typeof f.mimeTypes != e && f.mimeTypes[i] && !f.mimeTypes[i].enabledPlugin)) {
                    l = true;
                    v = false;
                    g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10);
                    m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof u.ActiveXObject != e) {
                    try {
                        var y = new ActiveXObject(r);
                        if (y) {
                            g = y.GetVariable("$version");
                            if (g) {
                                v = true;
                                g = g.split(" ")[1].split(",");
                                m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]
                            }
                        }
                    } catch (b) {}
                }
            }
            return {
                w3: s,
                pv: m,
                wk: d,
                ie: v,
                win: h,
                mac: p
            }
        }(),
        N = function() {
            if (!T.w3) {
                return
            }
            if (typeof a.readyState != e && a.readyState == "complete" || typeof a.readyState == e && (a.getElementsByTagName("body")[0] || a.body)) {
                C()
            }
            if (!b) {
                if (typeof a.addEventListener != e) {
                    a.addEventListener("DOMContentLoaded", C, false)
                }
                if (T.ie && T.win) {
                    a.attachEvent(o, function() {
                        if (a.readyState == "complete") {
                            a.detachEvent(o, arguments.callee);
                            C()
                        }
                    });
                    if (u == top) {
                        (function() {
                            if (b) {
                                return
                            }
                            try {
                                a.documentElement.doScroll("left")
                            } catch (e) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            C()
                        })()
                    }
                }
                if (T.wk) {
                    (function() {
                        if (b) {
                            return
                        }
                        if (!/loaded|complete/.test(a.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        C()
                    })()
                }
                L(C)
            }
        }();
    var J = function() {
        if (T.ie && T.win) {
            window.attachEvent("onunload", function() {
                var e = d.length;
                for (var t = 0; t < e; t++) {
                    d[t][0].detachEvent(d[t][1], d[t][2])
                }
                var n = p.length;
                for (var r = 0; r < n; r++) {
                    I(p[r])
                }
                for (var i in T) {
                    T[i] = null
                }
                T = null;
                for (var s in swfobject) {
                    swfobject[s] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function(e, t, n, r) {
            if (T.w3 && e && t) {
                var i = {};
                i.id = e;
                i.swfVersion = t;
                i.expressInstall = n;
                i.callbackFn = r;
                h[h.length] = i;
                V(e, false)
            } else {
                if (r) {
                    r({
                        success: false,
                        id: e
                    })
                }
            }
        },
        getObjectById: function(e) {
            if (T.w3) {
                return _(e)
            }
        },
        embedSWF: function(n, r, i, s, o, u, a, f, l, c) {
            var h = {
                success: false,
                id: r
            };
            if (T.w3 && !(T.wk && T.wk < 312) && n && r && i && s && o) {
                V(r, false);
                k(function() {
                    i += "";
                    s += "";
                    var p = {};
                    if (l && typeof l === t) {
                        for (var d in l) {
                            p[d] = l[d]
                        }
                    }
                    p.data = n;
                    p.width = i;
                    p.height = s;
                    var v = {};
                    if (f && typeof f === t) {
                        for (var m in f) {
                            v[m] = f[m]
                        }
                    }
                    if (a && typeof a === t) {
                        for (var g in a) {
                            if (typeof v.flashvars != e) {
                                v.flashvars += "&" + g + "=" + a[g]
                            } else {
                                v.flashvars = g + "=" + a[g]
                            }
                        }
                    }
                    if (W(o)) {
                        var y = j(p, v, r);
                        if (p.id == r) {
                            V(r, true)
                        }
                        h.success = true;
                        h.ref = y
                    } else {
                        if (u && D()) {
                            p.data = u;
                            P(p, v, r, c);
                            return
                        } else {
                            V(r, true)
                        }
                    } if (c) {
                        c(h)
                    }
                })
            } else {
                if (c) {
                    c(h)
                }
            }
        },
        switchOffAutoHideShow: function() {
            x = false
        },
        ua: T,
        getFlashPlayerVersion: function() {
            return {
                major: T.pv[0],
                minor: T.pv[1],
                release: T.pv[2]
            }
        },
        hasFlashPlayerVersion: W,
        createSWF: function(e, t, n) {
            if (T.w3) {
                return j(e, t, n)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(e, t, n, r) {
            if (T.w3 && D()) {
                P(e, t, n, r)
            }
        },
        removeSWF: function(e) {
            if (T.w3) {
                I(e)
            }
        },
        createCSS: function(e, t, n, r) {
            if (T.w3) {
                X(e, t, n, r)
            }
        },
        addDomLoadEvent: k,
        addLoadEvent: L,
        getQueryParamValue: function(e) {
            var t = a.location.search || a.location.hash;
            if (t) {
                if (/\?/.test(t)) {
                    t = t.split("?")[1]
                }
                if (e == null) {
                    return $(t)
                }
                var n = t.split("&");
                for (var r = 0; r < n.length; r++) {
                    if (n[r].substring(0, n[r].indexOf("=")) == e) {
                        return $(n[r].substring(n[r].indexOf("=") + 1))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (w) {
                var e = R(s);
                if (e && v) {
                    e.parentNode.replaceChild(v, e);
                    if (m) {
                        V(m, true);
                        if (T.ie && T.win) {
                            v.style.display = "block"
                        }
                    }
                    if (g) {
                        g(y)
                    }
                }
                w = false
            }
        }
    }
}();
(function(e) {
    window.videoLightBox = function(t, n) {
        if (!e(t).length) {
            return
        }
        var r = e(t).get(0).className.split(/\s+/)[0] || "voverlay";
        var i = r + "_overlay";
        var s = "#" + r;
        n = e.extend({
            onClose: 0,
            opacity: 0,
            color: "#000",
            closeOnComplete: true,
            volume: 100
        }, n);
        if (!e(s).length) {
            e("body").prepend("<div id='" + r + "'><div class='vcontainer'></div></div>")
        }
        e(t).overlay({
            api: true,
            fixed: false,
            expose: n.opacity ? {
                color: n.color,
                loadSpeed: 400,
                opacity: n.opacity
            } : null,
            effect: "apple",
            target: s,
            onClose: function() {
                swfobject.removeSWF(i);
                e("#" + i).html("");
                if (n.onClose) {
                    n.onClose()
                }
            },
            onBeforeLoad: function() {
                function h(e) {
                    var t = "";
                    for (var n = 0; n < e.length; n += 4) {
                        t += String.fromCharCode(parseInt(e.substr(n, 4), 16))
                    }
                    return t
                }
                var t = n.closeOnComplete;
                var o = document.getElementById(i);
                if (!o) {
                    var u = e("<div></div>");
                    u.attr({
                        id: i
                    });
                    e(s + " .vcontainer").append(u)
                }
                var l = "0056006900640065006f004c00690067006800740042006f0078002e0063006f006d";
                var c = "0068007400740070003a002f002f0076006900640065006f006c00690067006800740062006f0078002e0063006f006d";
                o = l ? e("<div></div>") : 0;
                if (o) {
                    o.css({
                        position: "absolute",
                        right: (parseInt("38") || 38) + "px",
                        top: (parseInt("38") || 38) + "px",
                        padding: "0 0 0 0",
                        height: "auto"
                    });
                    e(s + " .vcontainer").append(o)
                }
                if (o && document.all) {
                    var p = e('<iframe src="javascript:false"></iframe>');
                    p.css({
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        filter: "alpha(opacity=0)"
                    });
                    p.attr({
                        scrolling: "no",
                        framespacing: 0,
                        border: 0,
                        frameBorder: "no"
                    });
                    o.append(p)
                }
                var u = o ? e(document.createElement("A")) : o;
                if (u) {
                    o.append(u)
                }
                var v = this.getTrigger().attr("href");
                if (typeof u != "number" && (!o || !o.html || !o.html())) {
                    return
                }
                var m = this;
                var g = r + "complite_event";
                if (t) {
                    window[g] = function() {
                        m.close()
                    }
                }
                window.onYouTubePlayerReady = function(r) {
                    var s = e("#" + i).get(0);
                    s.setVolume(n.volume);
                    if (t) {
                        s.addEventListener("onStateChange", "videolbYTStateChange");
                        window.videolbYTStateChange = function(e) {
                            if (!e) {
                                m.close()
                            }
                        }
                    }
                };
                var y = /^(.*\/)?[^\/]+\.swf\?.*url=([^&]+\.(mp4|m4v|mov))/.exec(v);
                var w;
                if (/Safari|Mobile/i.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
                    if (w = /youtube\.com\/v\/([^?]+)\?/.exec(v)) {
                        w = "//www.youtube.com/embed/" + w[1] + (/autoplay=1/.test(v) ? "?autoplay=1" : "")
                    } else {
                        if (w = /vimeo\.com\/moogaloop\.swf\?clip_id\=([^&]+)\&/.exec(v)) {
                            w = "//player.vimeo.com/video/" + w[1] + (/autoplay=1/.test(v) ? "?autoplay=1" : "")
                        }
                    }
                }
                var E = document.createElement("video");
                if (E.canPlayType && E.canPlayType("video/mp4") && y) {
                    y = (y[1] || "") + y[2];
                    var S = e('<video src="' + y + '" type="video/mp4" controls="controls" style="width:100%;height:100%;"></video>');
                    S.appendTo(e("#" + i));
                    if (t) {
                        S.bind("ended", function() {
                            m.close()
                        });
                        S.bind("pause", function() {
                            if (!S.get(0).webkitDisplayingFullscreen) {
                                m.close()
                            }
                        })
                    }
                    if (/Android/.test(navigator.userAgent)) {
                        setTimeout(function() {
                            S.get(0).play()
                        }, 1e3)
                    } else {
                        S.get(0).play()
                    }
                } else {
                    if (w) {
                        e('<iframe width="100%" height="100%" src="' + w + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>').appendTo(e("#" + i))
                    } else {
                        swfobject.createSWF({
                            data: v,
                            width: "100%",
                            height: "100%",
                            wmode: "opaque"
                        }, {
                            allowScriptAccess: "always",
                            allowFullScreen: true,
                            FlashVars: t ? "complete_event=" + g + "()&enablejsapi=1" : ""
                        }, i)
                    }
                }
            }
        })
    }
})(jQuery);
$(function() {
    videoLightBox(".voverlay", {
        opacity: 0,
        color: "#151410",
        closeOnComplete: false,
        volume: 100
    })
})