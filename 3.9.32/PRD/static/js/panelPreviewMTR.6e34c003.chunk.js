(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[91],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"getBase64FontFace",(function(){return p}));var r=n(6),a=n.n(r),c=n(12),o=n(11),u=n(10),s=function(){var e=Object(u.a)(a.a.mark((function e(t,n){var r,u,s,i,f,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.fonts.load("80px Noto Serif "+n,t);case 2:if(r=e.sent,u=Object(o.a)(r,1),!(s=u[0])){e.next=14;break}i=0,f=Object(c.a)(document.querySelector("style#googlefonts").sheet.cssRules);case 7:if(!(i<f.length)){e.next=14;break}if(!(p=f[i]).cssText.includes("Noto Serif "+n)||!p.cssText.includes(s.unicodeRange)){e.next=11;break}return e.abrupt("return",p.cssText);case 11:i++,e.next=7;break;case 14:throw Error("Can't render ".concat(t," with Noto Serif ").concat(n));case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("\u95e8"!==t){e.next=2;break}return e.abrupt("return",s(t,"SC"));case 2:return e.abrupt("return",Promise.resolve(s(t,"KR")).catch((function(){return Promise.resolve(s(t,"JP")).catch(Object(u.a)(a.a.mark((function e(){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.allSettled([s(t,"TC"),s(t,"SC")]);case 2:return n=e.sent,(r=n.reduce((function(e,t){return"fulfilled"===t.status?e.concat(t.value):e}),[])).length||console.warn(t+": not found"),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))))})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return new Promise((function(t){var n=new FileReader;n.onloadend=function(){return t(n.result)},n.readAsDataURL(e)}))},p=function(e){return fetch("https://fonts.googleapis.com/css?family=Noto+Serif+KR:600|Noto+Serif+JP:600|Noto+Serif+TC:600|Noto+Serif+SC:600%26display=swap").then((function(e){return e.text()})).then(function(){var t=Object(u.a)(a.a.mark((function t(n){var r,o,u,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=document.createElement("style")).type="text/css",o.id="googlefonts",o.textContent=n,document.head.append(o),u=Object(c.a)(new Set(Object(c.a)(e.querySelectorAll(".rmg-name__zh")).map((function(e){return e.innerHTML})).join("").replace(/[\d\w\s]/g,""))),t.next=8,Promise.all(u.map(i));case 8:return s=t.sent,o.remove(),t.abrupt("return",Object(c.a)(new Set((r=[]).concat.apply(r,Object(c.a)(s)))).map((function(e){return fetch(e.match(/https:[\w:/.-]+.woff2/g)[0]).then((function(e){return e.blob()})).then(f).then((function(t){return e.replace(/src:[ \w('",\-:/.)]+;/g,"src: url('".concat(t,"'); "))})).catch((function(e){return console.warn(e),""}))})));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}}]);
//# sourceMappingURL=panelPreviewMTR.6e34c003.chunk.js.map