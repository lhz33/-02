var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var a = function(b) {
                var c = b.nodeType,
                    d = "";
                if (1 === c || 9 === c || 11 === c) { if ("string" == typeof b.textContent) return b.textContent; for (b = b.firstChild; b; b = b.nextSibling) d += a(b) } else if (3 === c || 4 === c) return b.nodeValue;
                return d
            },
            b = "[-]|�[�-�]|�[�-�]|[⚔-⚗]|�[�-�]|[�-�][�-�]",
            c = new RegExp(b),
            d = new RegExp(b + "|.", "g"),
            e = function(a, b) { return "" !== b && b || !c.test(a) ? a.split(b || "") : a.match(d) },
            f = _gsScope._gsDefine.plugin({
                propName: "text",
                API: 2,
                version: "0.6.2",
                init: function(b, c, d, f) { var g, h = b.nodeName.toUpperCase(); if ("function" == typeof c && (c = c(f, b)), this._svg = b.getBBox && ("TEXT" === h || "TSPAN" === h), !("innerHTML" in b || this._svg)) return !1; if (this._target = b, "object" != typeof c && (c = { value: c }), void 0 === c.value) return this._text = this._original = [""], !0; for (this._delimiter = c.delimiter || "", this._original = e(a(b).replace(/\s+/g, " "), this._delimiter), this._text = e(c.value.replace(/\s+/g, " "), this._delimiter), this._runBackwards = d.vars.runBackwards === !0, this._runBackwards && (h = this._original, this._original = this._text, this._text = h), "string" == typeof c.newClass && (this._newClass = c.newClass, this._hasClass = !0), "string" == typeof c.oldClass && (this._oldClass = c.oldClass, this._hasClass = !0), h = this._original.length - this._text.length, g = 0 > h ? this._original : this._text, this._fillChar = c.fillChar || (c.padSpace ? "&nbsp;" : ""), 0 > h && (h = -h); --h > -1;) g.push(this._fillChar); return !0 },
                set: function(a) {
                    a > 1 ? a = 1 : 0 > a && (a = 0), this._runBackwards && (a = 1 - a);
                    var b, c, d, e = this._text.length,
                        f = a * e + .5 | 0;
                    this._hasClass ? (b = this._newClass && 0 !== f, c = this._oldClass && f !== e, d = (b ? "<span class='" + this._newClass + "'>" : "") + this._text.slice(0, f).join(this._delimiter) + (b ? "</span>" : "") + (c ? "<span class='" + this._oldClass + "'>" : "") + this._delimiter + this._original.slice(f).join(this._delimiter) + (c ? "</span>" : "")) : d = this._text.slice(0, f).join(this._delimiter) + this._delimiter + this._original.slice(f).join(this._delimiter), this._svg ? this._target.textContent = d : this._target.innerHTML = "&nbsp;" === this._fillChar && -1 !== d.indexOf("  ") ? d.split("  ").join("&nbsp;&nbsp;") : d
                }
            }),
            g = f.prototype;
        g._newClass = g._oldClass = g._delimiter = ""
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) { "use strict"; var b = function() { return (_gsScope.GreenSockGlobals || _gsScope)[a] }; "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite"], b) }("TextPlugin");