(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[120],{346:function(e,t,n){"use strict";n.r(t);var r=n(12),c=n.n(r),o=n(22),a=n(30),i=n(0),s=n.n(i),l=n(332),u=n(137),j=n(333),d=n(312),b=n(168),h=n(132),p=n(324),m=n(167),f=n(325),O=n(170),x=n(174),g=n(354),v=n(326),y=n(327),w=n(73),C=n(310),k=n(328),S=n(311),_=n(42),A=n(6),T=n(21),R=n(27),E=n(2);function N(){var e=Object(u.a)().t,t=Object(_.b)(),n=Object(T.c)((function(e){return e.app})).canvasToShow,r=s.a.useState(!1),i=Object(a.a)(r,2),l=i[0],j=i[1],d=s.a.useState({}),b=Object(a.a)(d,2),O=b[0],x=b[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(h.a,{button:!0,component:"label",htmlFor:"upload-param",children:[Object(E.jsx)(p.a,{children:Object(E.jsx)(m.a,{children:"folder_open"})}),Object(E.jsx)(f.a,{primary:e("file.open.button")})]}),Object(E.jsx)("input",{type:"file",accept:"application/json",style:{display:"none"},id:"upload-param",onChange:function(e){console.log(e.target.files[0]),new Promise((function(t){var n=new FileReader;n.onloadend=t,n.readAsText(e.target.files[0])})).then((function(e){return JSON.parse(e.target.result)})).then((function(e){x(e),j(!0)}))}}),Object(E.jsx)(q,{open:l,onClose:function(e){return Object(o.a)(c.a.mark((function r(){var o;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("close"!==e){r.next=4;break}return document.getElementById("upload-param").value="",j(!1),r.abrupt("return");case 4:if("accept"!==e){r.next=16;break}return r.prev=5,r.next=8,window.rmgStorage.writeFile("rmgParam",JSON.stringify(O));case 8:o=A.n[O.style].some((function(e){return e===n}))?n:A.a,t(Object(R.e)(o)),window.location.assign("./".concat(O.style||A.k.MTR)),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(5),console.error(r.t0);case 16:case"end":return r.stop()}}),r,null,[[5,13]])})))},content:O})]})}function q(e){var t,n=Object(u.a)().t;return Object(E.jsxs)(g.a,{onClose:e.onClose("close"),open:e.open,children:[Object(E.jsx)(v.a,{children:"Your Configuration"}),Object(E.jsx)(y.a,{dividers:!0,children:Object(E.jsx)(C.a,{style:{whiteSpace:"pre-line"},children:0===Object.keys(e.content).length?"empty":(t=e.content,"Number of stations: ".concat(Object.keys(t.stn_list).length-2,"\n                ").concat(Object.entries(t.stn_list).map((function(e){return["linestart","lineend"].includes(e[0])?"":e[1].name.join(" - ")})).join("\r\n").trim().replace(/\\/," ")))})}),Object(E.jsxs)(k.a,{children:[Object(E.jsx)(S.a,{onClick:e.onClose("close"),color:"primary",children:n("dialog.cancel")}),Object(E.jsx)(S.a,{onClick:e.onClose("accept"),color:"primary",autoFocus:!0,children:"Import"})]})]})}var I=n(41),z=n(9),F=n(157),M=n(178),P=n(329),L=n(249),D=n(347),G=n(316),W=n(163);function B(e,t,n){var r=e.viewBox.baseVal.width,c=e.viewBox.baseVal.height,o=document.querySelectorAll("canvas")[0];o.width=Number(r)*window.devicePixelRatio*t,o.height=Number(c)*window.devicePixelRatio*t,e.setAttribute("width",o.width.toString()),e.setAttribute("height",o.height.toString());var a=o.getContext("2d");a.clearRect(0,0,o.width,o.height),e.querySelectorAll(".rmg-name__en.rmg-name__mtr--station").forEach((function(e){return e.setAttribute("font-size","11px")})),e.querySelectorAll(".rmg-name__zh.IntName").forEach((function(e){return e.setAttribute("font-size","10px")})),e.querySelectorAll(".rmg-name__en.rmg-name__mtr--osi").forEach((function(e){return e.setAttribute("font-size","9px")})),e.querySelectorAll(".rmg-name__en.rmg-name__gzmtr--next2-dest").forEach((function(e){return e.setAttribute("font-size","8.5px")})),e.querySelectorAll(".rmg-name__en.IntName").forEach((function(e){return e.setAttribute("font-size","7px")})),e.querySelectorAll("text, tspan").forEach((function(e){var t=window.getComputedStyle(e);e.setAttribute("font-family",t.fontFamily),e.setAttribute("fill",t.fill),e.setAttribute("dominant-baseline",t.dominantBaseline),e.setAttribute("text-anchor",t.textAnchor||"")}));var i=new Image;i.onload=function(){setTimeout((function(){a.drawImage(i,0,0,o.width,o.height),function(e,t){var n=document.createElement("a");"string"===typeof n.download?(n.href=e,n.download="".concat(t,".png"),document.body.appendChild(n),n.click(),document.body.removeChild(n)):window.open(e)}(o.toDataURL("image/png"),n)}),2e3)},i.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(e.outerHTML)))}var H=Object(F.a)((function(e){return Object(M.a)({contentWrapper:Object(z.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentCanvas:{flex:1},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",minWidth:250},contentRoot:{padding:"unset","&:first-child":{paddingTop:"unset"}},contentControlContent:{display:"flex",flexDirection:"column",justifyContent:"space-between"},formControlRoot:{margin:0}})}));function U(e){var t=Object(u.a)().t,r=H(),l=Object(T.c)((function(e){return e.param.style})),j=Object(i.useState)(document.createElement("svg")),d=Object(a.a)(j,2),p=d[0],m=d[1],x=Object(i.useState)(!1),w=Object(a.a)(x,2),C=w[0],_=w[1],R=Object(i.useState)(!1),N=Object(a.a)(R,2),q=N[0],z=N[1],F=Object(i.useState)(!1),M=Object(a.a)(F,2),U=M[0],V=M[1],Y=Object(i.useState)(1),K=Object(a.a)(Y,2),Q=K[0],X=K[1],Z=Object(i.useState)("png"),$=Object(a.a)(Z,2),ee=$[0],te=$[1],ne=Object(i.useState)(!1),re=Object(a.a)(ne,2),ce=re[0],oe=re[1],ae=Object(i.useState)(!1),ie=Object(a.a)(ae,2),se=ie[0],le=ie[1],ue=s.a.useRef(null);Object(i.useEffect)((function(){var t,r;if(""===e.canvas)return m(document.createElement("svg")),void _(!1);var i=["--rmg-svg-width","--rmg-svg-height"].map((function(t){return document.querySelector("svg#".concat(e.canvas)).style.getPropertyValue(t).match(/\d+/g)[0]})).map(Number),s=Object(a.a)(i,2)[1],u=document.querySelector("svg#".concat(e.canvas)).cloneNode(!0);u.setAttribute("height",(s*Q).toString()),u.style.setProperty("all","initial"),["share",e.canvas].map((function(e){var t;return Object(I.a)((null===(t=Object(I.a)(document.querySelectorAll("link")).filter((function(t){return t.id==="css_"+e}))[0])||void 0===t?void 0:t.sheet).cssRules).map((function(e){return e.cssText})).join(" ")})).forEach((function(e){var t=document.createElement("style");t.textContent=e,u.prepend(t)})),null===(t=u.querySelector("rect#canvas-border"))||void 0===t||t.setAttribute("stroke",q?"black":"none"),null===(r=u.querySelector("rect#canvas-bg"))||void 0===r||r.setAttribute("fill",U?"none":"white"),l===A.k.MTR?n.e(119).then(n.bind(null,337)).then(function(){var e=Object(o.a)(c.a.mark((function e(t){var n,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.getBase64FontFace,e.prev=1,e.next=4,n(u);case 4:r=e.sent,(o=document.createElement("style")).textContent=r.join("\n"),u.prepend(o),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),alert("Failed to fonts. Fonts in the exported PNG will be missing."),console.error(e.t0);case 14:return e.prev=14,m(u),e.next=18,document.fonts.ready;case 18:return _(!0),e.finish(14);case 20:case"end":return e.stop()}}),e,null,[[1,10,14,20]])})));return function(t){return e.apply(this,arguments)}}()):(m(u),_(!0))}),[e.canvas]);var je=function(t){return function(){if("close"===t)e.onClose("close");else{var n=ue.current.querySelector("svg"),r="rmg.".concat((new Date).toISOString());if("png"===ee)B(n,Q,r);else if("svg"===ee){n.removeAttribute("height");var c=document.createElement("a");c.href="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(n.outerHTML))),c.download=r+".svg",c.click()}e.onClose("close")}}};return Object(E.jsxs)(g.a,{onClose:je("close"),open:e.open,maxWidth:!1,children:[Object(E.jsx)(v.a,{children:t("file.preview.title")}),Object(E.jsxs)("div",{className:r.contentWrapper,children:[Object(E.jsx)(y.a,{dangerouslySetInnerHTML:{__html:p.outerHTML},ref:ue,className:r.contentCanvas,classes:{root:r.contentRoot}}),Object(E.jsxs)("div",{className:r.contentControl,children:[Object(E.jsxs)(y.a,{classes:{root:r.contentRoot},className:r.contentControlContent,children:[Object(E.jsxs)(b.a,{component:"div",disablePadding:!0,children:[Object(E.jsxs)(h.a,{children:[Object(E.jsx)(f.a,{primary:t("file.preview.transparent")}),Object(E.jsx)(P.a,{children:Object(E.jsx)(L.a,{color:"primary",checked:U,onChange:function(e,t){var n;null===(n=p.querySelector("rect#canvas-bg"))||void 0===n||n.setAttribute("fill",t?"none":"white"),V(t)},disabled:!C})})]}),Object(E.jsx)(O.a,{variant:"middle"}),Object(E.jsxs)(h.a,{children:[Object(E.jsx)(f.a,{primary:t("file.preview.border")}),Object(E.jsx)(P.a,{children:Object(E.jsx)(L.a,{color:"primary",checked:q,onChange:function(e,t){var n;null===(n=p.querySelector("rect#canvas-border"))||void 0===n||n.setAttribute("stroke",t?"black":"none"),z(t)},disabled:!C})})]}),Object(E.jsx)(O.a,{variant:"middle"}),Object(E.jsxs)(h.a,{children:[Object(E.jsx)(f.a,{primary:t("file.preview.scale")}),Object(E.jsx)(P.a,{children:Object(E.jsx)(D.a,{native:!0,value:Q,onChange:function(e){var t=e.target.value;p.setAttribute("height",(Number(p.getAttribute("height"))/Q*t).toString()),X(t)},disabled:!C,children:[.25,.33,.5,.67,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5].map((function(e){return Object(E.jsx)("option",{value:e,children:(100*e).toFixed(0)+"%"},e)}))})})]}),Object(E.jsx)(O.a,{variant:"middle"}),Object(E.jsxs)(h.a,{children:[Object(E.jsx)(f.a,{primary:t("file.preview.format")}),Object(E.jsx)(P.a,{children:Object(E.jsxs)(D.a,{native:!0,value:ee,onChange:function(e){return te(e.target.value)},style:{width:65},disabled:!C,children:[Object(E.jsx)("option",{value:"png",children:"PNG"}),Object(E.jsx)("option",{value:"svg",children:"SVG (Web Use)"})]})})]})]}),Object(E.jsxs)(h.a,{style:{padding:0},children:[Object(E.jsx)(G.a,{color:"primary",size:"small",checked:ce,onChange:function(e,t){return oe(t)}}),Object(E.jsxs)(W.a,{variant:"body2",children:[t("file.preview.terms.accept"),Object(E.jsx)(W.a,{component:"a",color:"primary",variant:"body2",style:{cursor:"pointer"},onClick:function(){return le(!0)},children:t("file.preview.terms.tandc")})]}),Object(E.jsx)(J,{open:se,onClose:function(){return le(!1)}})]})]}),Object(E.jsxs)(k.a,{children:[Object(E.jsx)(S.a,{variant:"outlined",onClick:je("close"),color:"primary",autoFocus:!0,children:t("dialog.cancel")}),Object(E.jsx)(S.a,{variant:"contained",onClick:je("download"),color:"primary",disabled:!C||!ce,children:t("file.preview.download")})]})]})]})]})}var J=function(e){var t=Object(u.a)().t;return Object(i.useMemo)((function(){return Object(E.jsxs)(g.a,{open:e.open,onClose:e.onClose,children:[Object(E.jsx)(v.a,{children:t("file.preview.terms.tandc")}),Object(E.jsxs)(y.a,{dividers:!0,children:[Object(E.jsx)(W.a,{component:"p",children:"The downloaded image may be modified, published, or used for other purposes, under the following conditions."}),Object(E.jsxs)(W.a,{component:"ol",children:[Object(E.jsxs)(W.a,{component:"li",children:["The layout of the elements on the sign or rail map, is designed by"," ",Object(E.jsx)(W.a,{component:"a",color:"primary",href:"http://www.gzmtr.com",target:"_blank",children:"Guangzhou Metro Corporation"}),","," ",Object(E.jsx)(W.a,{component:"a",color:"primary",href:"http://www.mtr.com.hk",target:"_blank",children:"MTR Corporation"})," ","or"," ",Object(E.jsx)(W.a,{component:"a",color:"primary",href:"http://www.shmetro.com",target:"_blank",children:"Shanghai Shentong Metro Group"}),", depending on your selection. You shall grant appropriate permit or license from the relevant company above before using the downloaded image for commercial purposes, if it is required to do so."]}),Object(E.jsxs)(W.a,{component:"li",children:["The elements including shapes and lines on the image are drawn by"," ",Object(E.jsx)(W.a,{component:"a",color:"primary",href:"https://github.com/wongchito",target:"_blank",children:"Chito Wong"})," ","and"," ",Object(E.jsx)(W.a,{component:"a",color:"primary",href:"https://github.com/thekingofcity",target:"_blank",children:"thekingofcity"}),", based on the design standards or rules of the companies listed above. You may use them for any purposes, but it is recommended to state the name and the link of software alongside."]}),Object(E.jsxs)(W.a,{component:"li",children:["The fonts of the Chinese characters in MTR style are provided by"," ",Object(E.jsx)(W.a,{component:"a",color:"primary",href:"https://www.google.com/get/noto/help/cjk/",target:"_blank",children:"Google Inc."})," ","while all others fonts are rendered from local files. You shall grant appropriate permit or license from the manufacturers before using the downloaded image for commercial purposes."]})]}),Object(E.jsx)(W.a,{component:"p",children:"We reserve the rights, without notice, to modify, add, or remove these terms."}),Object(E.jsx)(W.a,{component:"p",children:"\u672c\u689d\u6b3e\u53ca\u7d30\u5247\u66ab\u53ea\u63d0\u4f9b\u82f1\u6587\u7248\uff0c\u656c\u8acb\u539f\u8ad2\u3002"}),Object(E.jsx)(W.a,{component:"p",variant:"body2",children:"Last modified: 6 Apr 2020, 12:39 UTC"})]}),Object(E.jsx)(k.a,{children:Object(E.jsx)(S.a,{variant:"outlined",color:"primary",onClick:e.onClose,children:t("dialog.close")})})]})}),[e.open])};var V=function(e){var t=Object(u.a)().t,n=Object(T.c)((function(e){return e.param.style})),r=Object(T.c)((function(e){return e.app.canvasToShow})),c=i.useState(!1),o=Object(a.a)(c,2),s=o[0],l=o[1],j=i.useState(""),d=Object(a.a)(j,2),p=d[0],m=d[1],O=function(t){return function(){"close"!==t&&(l(!0),m(t)),e.onClose("close")}};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(g.a,{onClose:O("close"),open:e.open,children:[Object(E.jsx)(v.a,{children:t("file.export.title")}),Object(E.jsx)(y.a,{dividers:!0,children:Object(E.jsx)(b.a,{children:(r===A.a?A.n[n]:[r]).map((function(e){return Object(E.jsx)(h.a,{button:!0,onClick:O(e),children:Object(E.jsx)(f.a,{primary:t("file.export."+e)})},e)}))})})]}),Object(E.jsx)(U,{open:s,onClose:function(e){"close"===e&&(l(!1),m(""))},canvas:p})]})},Y=n(75),K=n(14),Q=s.a.lazy((function(){return n.e(121).then(n.bind(null,356))}));var X={en:"English","zh-Hans":"\u4e2d\u6587\uff08\u7b80\u4f53\uff09","zh-HK":"\u4e2d\u6587\uff08\u9999\u6e2f\uff09"},Z=function(){var e=Object(u.a)(),t=e.t,n=e.i18n,r=Object(T.c)((function(e){return e.param.style})),l=Object(T.c)((function(e){return e.param})),j=Object(i.useState)(!1),g=Object(a.a)(j,2),v=g[0],y=g[1],C=Object(i.useState)(!1),k=Object(a.a)(C,2),S=k[0],_=k[1],A=Object(i.useState)(!1),R=Object(a.a)(A,2),q=R[0],I=R[1],z=Object(i.useState)(!1),F=Object(a.a)(z,2),M=F[0],P=F[1],L=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=document.createElement("a")).href="data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l)))),t.download="rmg.param."+(new Date).toISOString()+".json",t.click();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)("div",{children:[Object(E.jsxs)(d.a,{children:[Object(E.jsxs)(b.a,{component:"nav",children:[Object(E.jsxs)(h.a,{button:!0,onClick:function(){return y(!0)},children:[Object(E.jsx)(p.a,{children:Object(E.jsx)(m.a,{children:"note_add"})}),Object(E.jsx)(f.a,{primary:t("file.new.button")})]}),Object(E.jsx)(N,{}),Object(E.jsxs)(h.a,{button:!0,onClick:L,children:[Object(E.jsx)(p.a,{children:Object(E.jsx)(m.a,{children:"save"})}),Object(E.jsx)(f.a,{primary:t("file.save")})]}),Object(E.jsxs)(h.a,{button:!0,onClick:function(){return _(!0)},children:[Object(E.jsx)(p.a,{children:Object(E.jsx)(m.a,{children:"cloud_download"})}),Object(E.jsx)(f.a,{primary:t("file.export.button")})]})]}),Object(E.jsx)(O.a,{}),Object(E.jsxs)(b.a,{component:"nav",children:[Object(E.jsxs)(h.a,{button:!0,onClick:function(){return I(!0)},children:[Object(E.jsx)(p.a,{children:Object(E.jsx)(m.a,{children:"style"})}),Object(E.jsx)(f.a,{primary:t("file.style.button"),secondary:t("file.style."+r)})]}),Object(E.jsxs)(h.a,{button:!0,onClick:function(){return P(!0)},children:[Object(E.jsx)(p.a,{children:Object(E.jsx)(m.a,{children:"translate"})}),Object(E.jsx)(f.a,{primary:t("file.lang.button"),secondary:Object(w.b)(X,n.languages)})]})]})]}),Object(E.jsx)(s.a.Suspense,{fallback:Object(E.jsx)(x.a,{}),children:Object(E.jsx)(Q,{open:v,onClose:function(){return y(!1)}})}),Object(E.jsx)(V,{open:S,onClose:function(e){_(!1)}}),Object(E.jsx)($,{open:q,onClose:function(e){"close"===e||e===r||window.gtag("event","set",{event_category:"style",event_label:e}),I(!1)}}),Object(E.jsx)(ee,{open:M,onClose:function(){return P(!1)}})]})};function $(e){var t=Object(u.a)().t,n=Object(T.b)(),r=function(t){return function(){n(Object(K.T)(t)),e.onClose(t)}};return Object(E.jsxs)(g.a,{onClose:function(){return e.onClose("close")},open:e.open,children:[Object(E.jsx)(v.a,{children:t("file.style.title")}),Object(E.jsx)(y.a,{dividers:!0,children:Object(E.jsx)(b.a,{children:Object.values(A.k).map((function(e){return Object(E.jsx)(Y.b,{to:"/"+e,style:{textDecoration:"none",color:"unset"},children:Object(E.jsx)(h.a,{button:!0,onClick:r(e),children:Object(E.jsx)(f.a,{primary:t("file.style."+e)})})},e)}))})})]})}function ee(e){var t=Object(u.a)(),n=t.t,r=t.i18n;return Object(E.jsxs)(g.a,{onClose:e.onClose,open:e.open,children:[Object(E.jsx)(v.a,{children:n("file.lang.title")}),Object(E.jsx)(y.a,{dividers:!0,children:Object(E.jsx)(b.a,{children:Object.keys(X).map((function(t){return Object(E.jsx)(h.a,{button:!0,onClick:function(){return(n=t)===r.language||(r.changeLanguage(n).then((function(e){return document.title=e("title")})),window.gtag("event","set",{event_category:"language",event_label:n}),document.documentElement.setAttribute("lang",n)),void e.onClose();var n},children:Object(E.jsx)(f.a,{primary:X[t]})},t)}))})})]})}t.default=function(){var e=Object(l.a)()(Z);return Object(E.jsx)(j.a,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:Object(E.jsx)(j.a,{item:!0,xs:12,sm:8,md:6,lg:4,children:Object(E.jsx)(e,{})})})}}}]);
//# sourceMappingURL=panelSave.58512f59.chunk.js.map