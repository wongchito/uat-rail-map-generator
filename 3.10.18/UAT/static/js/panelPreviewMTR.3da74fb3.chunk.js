(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[121],{347:function(e,r,n){"use strict";n.r(r),n.d(r,"getBase64FontFace",(function(){return o}));var t=n(12),a=n.n(t),c=n(41),u=n(22),s=function(e){return new Promise((function(r){var n=new FileReader;n.onloadend=function(){return r(n.result)},n.readAsDataURL(e)}))},o=function(){var e=Object(u.a)(a.a.mark((function e(r){var n,t,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Array.from(new Set([].concat(Object(c.a)(r.querySelectorAll(".rmg-name__zh")),Object(c.a)(r.querySelectorAll(".rmg-name__en"))).map((function(e){return e.innerHTML})).join("").replace(/[\s]/g,""))).join(""),e.next=3,document.fonts.load("80px GenYoMin TW, Vegur",n);case 3:return t=e.sent,o=Array.from(document.querySelector("link#css_share").sheet.cssRules[0].styleSheet.cssRules),i=t.reduce((function(e,r){var n,t=(n=r,o.find((function(e){var r=e.style;return r.fontFamily.replace(/^"(.+)"$/,"$1")===n.family&&r.unicodeRange===n.unicodeRange})));return t?e.find((function(e){var r=e.style,n=t.style;return r.fontFamily===n.fontFamily&&r.unicodeRange===n.unicodeRange}))?e:e.concat(t):e}),[]),e.next=8,Promise.all(i.map(function(){var e=Object(u.a)(a.a.mark((function e(r){var n,t,c,u,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=r.style.src,c=navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),u=c?t.replace(/^url\(([\S]+)\).*$/,"$1"):"/uat-rail-map-generator/styles/"+(null===(n=t.match(/^url\("([\S*]+)"\)/))||void 0===n?void 0:n[1]),e.next=6,fetch(u);case 6:return o=e.sent,e.t0=s,e.next=10,o.blob();case 10:return e.t1=e.sent,e.next=13,(0,e.t0)(e.t1);case 13:return i=e.sent,e.abrupt("return",r.cssText.replace(/src:[ \w('",\-:/.)]+;/g,"src: url('".concat(i,"'); ")));case 17:return e.prev=17,e.t2=e.catch(0),console.error(e.t2),e.abrupt("return","");case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(r){return e.apply(this,arguments)}}()));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=panelPreviewMTR.3da74fb3.chunk.js.map