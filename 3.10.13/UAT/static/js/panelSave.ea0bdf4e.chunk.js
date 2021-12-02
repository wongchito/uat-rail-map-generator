(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[120],{354:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n.n(r),c=n(22),o=n(30),i=n(0),s=n.n(i),l=n(340),u=n(137),d=n(341),j=n(320),b=n(168),p=n(132),h=n(332),m=n(167),f=n(333),O=n(170),x=n(174),g=n(362),v=n(334),y=n(335),w=n(74),C=n(310),k=n(336),S=n(311),A=n(42),_=n(6),T=n(21),R=n(27),N=n(2);function E(){var e=Object(u.a)().t,t=Object(A.b)(),n=Object(T.c)((function(e){return e.app})).canvasToShow,r=s.a.useState(!1),i=Object(o.a)(r,2),l=i[0],d=i[1],j=s.a.useState({}),b=Object(o.a)(j,2),O=b[0],x=b[1];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(p.a,{button:!0,component:"label",htmlFor:"upload-param",children:[Object(N.jsx)(h.a,{children:Object(N.jsx)(m.a,{children:"folder_open"})}),Object(N.jsx)(f.a,{primary:e("file.open.button")})]}),Object(N.jsx)("input",{type:"file",accept:"application/json",style:{display:"none"},id:"upload-param",onChange:function(e){console.log(e.target.files[0]),new Promise((function(t){var n=new FileReader;n.onloadend=t,n.readAsText(e.target.files[0])})).then((function(e){return JSON.parse(e.target.result)})).then((function(e){x(e),d(!0)}))}}),Object(N.jsx)(q,{open:l,onClose:function(e){return Object(c.a)(a.a.mark((function r(){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("close"!==e){r.next=4;break}return document.getElementById("upload-param").value="",d(!1),r.abrupt("return");case 4:if("accept"!==e){r.next=16;break}return r.prev=5,r.next=8,window.rmgStorage.writeFile("rmgParam",JSON.stringify(O));case 8:c=_.o[O.style].some((function(e){return e===n}))?n:_.a,t(Object(R.e)(c)),window.location.assign("./".concat(O.style||_.k.MTR)),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(5),console.error(r.t0);case 16:case"end":return r.stop()}}),r,null,[[5,13]])})))},content:O})]})}function q(e){var t,n=Object(u.a)().t;return Object(N.jsxs)(g.a,{onClose:e.onClose("close"),open:e.open,children:[Object(N.jsx)(v.a,{children:"Your Configuration"}),Object(N.jsx)(y.a,{dividers:!0,children:Object(N.jsx)(C.a,{style:{whiteSpace:"pre-line"},children:0===Object.keys(e.content).length?"empty":(t=e.content,"Number of stations: ".concat(Object.keys(t.stn_list).length-2,"\n                ").concat(Object.entries(t.stn_list).map((function(e){return["linestart","lineend"].includes(e[0])?"":e[1].name.join(" - ")})).join("\r\n").trim().replace(/\\/," ")))})}),Object(N.jsxs)(k.a,{children:[Object(N.jsx)(S.a,{onClick:e.onClose("close"),color:"primary",children:n("dialog.cancel")}),Object(N.jsx)(S.a,{onClick:e.onClose("accept"),color:"primary",autoFocus:!0,children:"Import"})]})]})}var z=n(83),F=n(41),I=n(9),M=n(312),P=n.n(M),L=n(157),B=n(178),H=n(337),U=n(249),G=n(355),W=n(324),D=n(163);function J(e,t){return V.apply(this,arguments)}function V(){return(V=Object(c.a)(a.a.mark((function e(t,n){var r,c,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.viewBox.baseVal.width,c=t.viewBox.baseVal.height,(o=document.querySelectorAll("canvas")[0]).width=Number(r)*window.devicePixelRatio*n,o.height=Number(c)*window.devicePixelRatio*n,t.setAttribute("width",o.width.toString()),t.setAttribute("height",o.height.toString()),(i=o.getContext("2d")).clearRect(0,0,o.width,o.height),t.querySelectorAll(".rmg-name__en.rmg-name__mtr--station").forEach((function(e){return e.setAttribute("font-size","11px")})),t.querySelectorAll(".rmg-name__zh.IntName").forEach((function(e){return e.setAttribute("font-size","10px")})),t.querySelectorAll(".rmg-name__en.rmg-name__mtr--osi").forEach((function(e){return e.setAttribute("font-size","9px")})),t.querySelectorAll(".rmg-name__en.rmg-name__gzmtr--next2-dest").forEach((function(e){return e.setAttribute("font-size","8.5px")})),t.querySelectorAll(".rmg-name__en.IntName").forEach((function(e){return e.setAttribute("font-size","7px")})),t.querySelectorAll("text, tspan").forEach((function(e){var t=window.getComputedStyle(e);e.setAttribute("font-family",t.fontFamily),e.setAttribute("fill",t.fill),e.setAttribute("dominant-baseline",t.dominantBaseline),e.setAttribute("text-anchor",t.textAnchor||"")})),e.abrupt("return",new Promise((function(e,n){var r=new Image;r.onload=function(){return i.drawImage(r,0,0,o.width,o.height),e(o.toDataURL("image/png"))},r.onerror=n,r.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t.outerHTML)))})));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e,t){var n=document.createElement("a");"string"===typeof n.download?(n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)):window.open(e)}var K=n(14),Z=Object(L.a)((function(e){return Object(B.a)({contentWrapper:Object(I.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentCanvas:{flex:1},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",minWidth:250},contentAction:{display:"flex",alignSelf:"end"},contentRoot:{padding:"unset","&:first-child":{paddingTop:"unset"}},contentControlContent:{display:"flex",flexDirection:"column",justifyContent:"space-between"},formControlRoot:{margin:0}})}));function Q(e){var t=Object(u.a)().t,r=Z(),l=Object(T.b)(),d=Object(T.c)((function(e){return e.param.stn_list})),j=Object(T.c)((function(e){return e.param.line_name})),h=Object(T.c)((function(e){return e.param.current_stn_idx})),m=Object(T.c)((function(e){return e.param.style})),x=Object(i.useState)(document.createElement("svg")),w=Object(o.a)(x,2),C=w[0],A=w[1],R=Object(i.useState)(!1),E=Object(o.a)(R,2),q=E[0],I=E[1],M=Object(i.useState)(!1),L=Object(o.a)(M,2),B=L[0],V=L[1],Q=Object(i.useState)(!1),$=Object(o.a)(Q,2),ee=$[0],te=$[1],ne=Object(i.useState)(1),re=Object(o.a)(ne,2),ae=re[0],ce=re[1],oe=Object(i.useState)("png"),ie=Object(o.a)(oe,2),se=ie[0],le=ie[1],ue=Object(i.useState)(!1),de=Object(o.a)(ue,2),je=de[0],be=de[1],pe=Object(i.useState)(!1),he=Object(o.a)(pe,2),me=he[0],fe=he[1],Oe=s.a.useRef(null);Object(i.useEffect)((function(){if(""===e.canvas)return A(document.createElement("svg")),void I(!1);xe().then((function(e){A(e),I(!0)}))}),[e.canvas]);var xe=function(){var t=Object(c.a)(a.a.mark((function t(){var r,c,i,s,l,u,d,j,b,p;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=["--rmg-svg-width","--rmg-svg-height"].map((function(t){return document.querySelector("svg#".concat(e.canvas)).style.getPropertyValue(t).match(/\d+/g)[0]})).map(Number),s=Object(o.a)(i,2),l=s[1],(u=document.querySelector("svg#".concat(e.canvas)).cloneNode(!0)).setAttribute("height",(l*ae).toString()),u.style.setProperty("all","initial"),["share",e.canvas].map((function(e){var t;return Object(F.a)((null===(t=Object(F.a)(document.querySelectorAll("link")).filter((function(t){return t.id==="css_"+e}))[0])||void 0===t?void 0:t.sheet).cssRules).map((function(e){return e.cssText})).join(" ")})).forEach((function(e){var t=document.createElement("style");t.textContent=e,u.prepend(t)})),null===(r=u.querySelector("rect#canvas-border"))||void 0===r||r.setAttribute("stroke",B?"black":"none"),null===(c=u.querySelector("rect#canvas-bg"))||void 0===c||c.setAttribute("fill",ee?"none":"white"),m!==_.k.MTR){t.next=25;break}return t.prev=8,t.next=11,n.e(119).then(n.bind(null,345));case 11:return d=t.sent,j=d.getBase64FontFace,t.next=15,j(u);case 15:b=t.sent,(p=document.createElement("style")).textContent=b.join("\n"),u.prepend(p),t.next=25;break;case 21:t.prev=21,t.t0=t.catch(8),alert("Failed to fonts. Fonts in the exported PNG will be missing."),console.error(t.t0);case 25:return t.abrupt("return",u);case 26:case"end":return t.stop()}}),t,null,[[8,21]])})));return function(){return t.apply(this,arguments)}}(),ge=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,o,i,s,u,b,p,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new P.a,r=Object(z.a)(t),e.prev=2,r.s();case 4:if((c=r.n()).done){e.next=27;break}return o=c.value,e.next=8,l(Object(K.H)(o));case 8:return e.next=10,xe();case 10:if(i=e.sent,document.body.appendChild(i),s="rmg.".concat(o,".").concat(d[o].name[0],".").concat(d[o].name[1]).replaceAll(" ","_"),"png"!==se){e.next=23;break}return e.next=16,J(i,ae);case 16:if(u=e.sent,!navigator.userAgent.includes("Safari")||navigator.userAgent.includes("Chrome")){e.next=20;break}return e.next=20,new Promise((function(e){setTimeout((function(){console.log("Sleep 1 second for Safari"),e()}),1e3)}));case 20:t.length>1?n.file("".concat(s,".png"),u.split("base64,")[1],{base64:!0}):Y(u,"".concat(s,".png")),e.next=24;break;case 23:"svg"===se&&(i.removeAttribute("height"),b="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(i.outerHTML))),t.length>1?n.file("".concat(s,".svg"),b.split("base64,")[1],{base64:!0}):Y(b,"".concat(s,".svg")));case 24:document.body.removeChild(i);case 25:e.next=4;break;case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(2),r.e(e.t0);case 32:return e.prev=32,r.f(),e.finish(32);case 35:if(!(t.length>1)){e.next=41;break}return e.next=38,n.generateAsync({type:"blob"});case 38:p=e.sent,m="rmg.".concat(j[0],".").concat(j[1],".zip").replaceAll(" ","_"),Y(URL.createObjectURL(p),m);case 41:return e.next=43,l(Object(K.H)(h));case 43:case"end":return e.stop()}}),e,null,[[2,29,32,35]])})));return function(t){return e.apply(this,arguments)}}(),ve=function(t){return function(){if("downloadCurrentStation"===t)ge([h]);else if("downloadAllStation"===t){var n=Object.keys(d).filter((function(e){return!["linestart","lineend"].includes(e)}));ge(n)}e.onClose("close")}};return Object(N.jsxs)(g.a,{onClose:ve("close"),open:e.open,maxWidth:!1,children:[Object(N.jsx)(v.a,{children:t("file.preview.title")}),Object(N.jsxs)("div",{className:r.contentWrapper,children:[Object(N.jsx)(y.a,{dangerouslySetInnerHTML:{__html:C.outerHTML},ref:Oe,className:r.contentCanvas,classes:{root:r.contentRoot}}),Object(N.jsx)("div",{className:r.contentControl,children:Object(N.jsxs)(y.a,{classes:{root:r.contentRoot},className:r.contentControlContent,children:[Object(N.jsxs)(b.a,{component:"div",disablePadding:!0,children:[Object(N.jsxs)(p.a,{children:[Object(N.jsx)(f.a,{primary:t("file.preview.transparent")}),Object(N.jsx)(H.a,{children:Object(N.jsx)(U.a,{color:"primary",checked:ee,onChange:function(e,t){var n;null===(n=C.querySelector("rect#canvas-bg"))||void 0===n||n.setAttribute("fill",t?"none":"white"),te(t)},disabled:!q})})]}),Object(N.jsx)(O.a,{variant:"middle"}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(f.a,{primary:t("file.preview.border")}),Object(N.jsx)(H.a,{children:Object(N.jsx)(U.a,{color:"primary",checked:B,onChange:function(e,t){var n;null===(n=C.querySelector("rect#canvas-border"))||void 0===n||n.setAttribute("stroke",t?"black":"none"),V(t)},disabled:!q})})]}),Object(N.jsx)(O.a,{variant:"middle"}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(f.a,{primary:t("file.preview.scale")}),Object(N.jsx)(H.a,{children:Object(N.jsx)(G.a,{native:!0,value:ae,onChange:function(e){var t=e.target.value;C.setAttribute("height",(Number(C.getAttribute("height"))/ae*t).toString()),ce(t)},disabled:!q,children:[.25,.33,.5,.67,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5].map((function(e){return Object(N.jsx)("option",{value:e,children:(100*e).toFixed(0)+"%"},e)}))})})]}),Object(N.jsx)(O.a,{variant:"middle"}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(f.a,{primary:t("file.preview.format")}),Object(N.jsx)(H.a,{children:Object(N.jsxs)(G.a,{native:!0,value:se,onChange:function(e){return le(e.target.value)},style:{width:65},disabled:!q,children:[Object(N.jsx)("option",{value:"png",children:"PNG"}),Object(N.jsx)("option",{value:"svg",children:"SVG (Web Use)"})]})})]})]}),Object(N.jsxs)(p.a,{style:{padding:0},children:[Object(N.jsx)(W.a,{color:"primary",size:"small",checked:je,onChange:function(e,t){return be(t)}}),Object(N.jsxs)(D.a,{variant:"body2",children:[t("file.preview.terms.accept"),Object(N.jsx)(D.a,{component:"a",color:"primary",variant:"body2",style:{cursor:"pointer"},onClick:function(){return fe(!0)},children:t("file.preview.terms.tandc")})]}),Object(N.jsx)(X,{open:me,onClose:function(){return fe(!1)}})]})]})})]}),Object(N.jsx)("div",{className:r.contentAction,children:Object(N.jsxs)(k.a,{children:[Object(N.jsx)(S.a,{variant:"contained",onClick:ve("downloadCurrentStation"),color:"primary",disabled:!q||!je,children:t("file.preview.downloadCurrentStation")}),Object(N.jsx)(S.a,{variant:"contained",onClick:ve("downloadAllStation"),color:"primary",disabled:!q||!je||m===_.k.GZMTR,children:t("file.preview.downloadAllStations")}),Object(N.jsx)(S.a,{variant:"outlined",onClick:ve("close"),color:"primary",autoFocus:!0,children:t("dialog.cancel")})]})})]})}var X=function(e){var t=Object(u.a)().t;return Object(i.useMemo)((function(){return Object(N.jsxs)(g.a,{open:e.open,onClose:e.onClose,children:[Object(N.jsx)(v.a,{children:t("file.preview.terms.tandc")}),Object(N.jsxs)(y.a,{dividers:!0,children:[Object(N.jsx)(D.a,{component:"p",children:"The downloaded image may be modified, published, or used for other purposes, under the following conditions."}),Object(N.jsxs)(D.a,{component:"ol",children:[Object(N.jsxs)(D.a,{component:"li",children:["The layout of the elements on the sign or rail map, is designed by"," ",Object(N.jsx)(D.a,{component:"a",color:"primary",href:"http://www.gzmtr.com",target:"_blank",children:"Guangzhou Metro Corporation"}),","," ",Object(N.jsx)(D.a,{component:"a",color:"primary",href:"http://www.mtr.com.hk",target:"_blank",children:"MTR Corporation"})," ","or"," ",Object(N.jsx)(D.a,{component:"a",color:"primary",href:"http://www.shmetro.com",target:"_blank",children:"Shanghai Shentong Metro Group"}),", depending on your selection. You shall grant appropriate permit or license from the relevant company above before using the downloaded image for commercial purposes, if it is required to do so."]}),Object(N.jsxs)(D.a,{component:"li",children:["The elements including shapes and lines on the image are drawn by"," ",Object(N.jsx)(D.a,{component:"a",color:"primary",href:"https://github.com/wongchito",target:"_blank",children:"Chito Wong"})," ","and"," ",Object(N.jsx)(D.a,{component:"a",color:"primary",href:"https://github.com/thekingofcity",target:"_blank",children:"thekingofcity"}),", based on the design standards or rules of the companies listed above. You may use them for any purposes, but it is recommended to state the name and the link of software alongside."]}),Object(N.jsxs)(D.a,{component:"li",children:["The fonts of the Chinese characters in MTR style are provided by"," ",Object(N.jsx)(D.a,{component:"a",color:"primary",href:"https://github.com/ButTaiwan/genyo-font",target:"_blank",children:"ButTaiwan"})," ","while all others fonts are rendered from local files. You shall grant appropriate permit or license from the manufacturers before using the downloaded image for commercial purposes."]})]}),Object(N.jsx)(D.a,{component:"p",children:"We reserve the rights, without notice, to modify, add, or remove these terms."}),Object(N.jsx)(D.a,{component:"p",children:"\u672c\u689d\u6b3e\u53ca\u7d30\u5247\u66ab\u53ea\u63d0\u4f9b\u82f1\u6587\u7248\uff0c\u656c\u8acb\u539f\u8ad2\u3002"}),Object(N.jsx)(D.a,{component:"p",variant:"body2",children:"Last modified: 30 Nov 2021, 18:30 UTC"})]}),Object(N.jsx)(k.a,{children:Object(N.jsx)(S.a,{variant:"outlined",color:"primary",onClick:e.onClose,children:t("dialog.close")})})]})}),[e.open])};var $=function(e){var t=Object(u.a)().t,n=Object(T.c)((function(e){return e.param.style})),r=Object(T.c)((function(e){return e.app.canvasToShow})),a=i.useState(!1),c=Object(o.a)(a,2),s=c[0],l=c[1],d=i.useState(""),j=Object(o.a)(d,2),h=j[0],m=j[1],O=function(t){return function(){"close"!==t&&(l(!0),m(t)),e.onClose("close")}};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(g.a,{onClose:O("close"),open:e.open,children:[Object(N.jsx)(v.a,{children:t("file.export.title")}),Object(N.jsx)(y.a,{dividers:!0,children:Object(N.jsx)(b.a,{children:(r===_.a?_.o[n]:[r]).map((function(e){return Object(N.jsx)(p.a,{button:!0,onClick:O(e),children:Object(N.jsx)(f.a,{primary:t("file.export."+e)})},e)}))})})]}),Object(N.jsx)(Q,{open:s,onClose:function(e){"close"===e&&(l(!1),m(""))},canvas:h})]})},ee=n(75),te=s.a.lazy((function(){return n.e(121).then(n.bind(null,364))}));var ne={en:"English","zh-Hans":"\u4e2d\u6587\uff08\u7b80\u4f53\uff09","zh-HK":"\u4e2d\u6587\uff08\u9999\u6e2f\uff09"},re=function(){var e=Object(u.a)(),t=e.t,n=e.i18n,r=Object(T.c)((function(e){return e.param.style})),l=Object(T.c)((function(e){return e.param})),d=Object(i.useState)(!1),g=Object(o.a)(d,2),v=g[0],y=g[1],C=Object(i.useState)(!1),k=Object(o.a)(C,2),S=k[0],A=k[1],_=Object(i.useState)(!1),R=Object(o.a)(_,2),q=R[0],z=R[1],F=Object(i.useState)(!1),I=Object(o.a)(F,2),M=I[0],P=I[1],L=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=document.createElement("a")).href="data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l)))),t.download="rmg.param."+(new Date).toISOString()+".json",t.click();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{children:[Object(N.jsxs)(j.a,{children:[Object(N.jsxs)(b.a,{component:"nav",children:[Object(N.jsxs)(p.a,{button:!0,onClick:function(){return y(!0)},children:[Object(N.jsx)(h.a,{children:Object(N.jsx)(m.a,{children:"note_add"})}),Object(N.jsx)(f.a,{primary:t("file.new.button")})]}),Object(N.jsx)(E,{}),Object(N.jsxs)(p.a,{button:!0,onClick:L,children:[Object(N.jsx)(h.a,{children:Object(N.jsx)(m.a,{children:"save"})}),Object(N.jsx)(f.a,{primary:t("file.save")})]}),Object(N.jsxs)(p.a,{button:!0,onClick:function(){return A(!0)},children:[Object(N.jsx)(h.a,{children:Object(N.jsx)(m.a,{children:"cloud_download"})}),Object(N.jsx)(f.a,{primary:t("file.export.button")})]})]}),Object(N.jsx)(O.a,{}),Object(N.jsxs)(b.a,{component:"nav",children:[Object(N.jsxs)(p.a,{button:!0,onClick:function(){return z(!0)},children:[Object(N.jsx)(h.a,{children:Object(N.jsx)(m.a,{children:"style"})}),Object(N.jsx)(f.a,{primary:t("file.style.button"),secondary:t("file.style."+r)})]}),Object(N.jsxs)(p.a,{button:!0,onClick:function(){return P(!0)},children:[Object(N.jsx)(h.a,{children:Object(N.jsx)(m.a,{children:"translate"})}),Object(N.jsx)(f.a,{primary:t("file.lang.button"),secondary:Object(w.b)(ne,n.languages)})]})]})]}),Object(N.jsx)(s.a.Suspense,{fallback:Object(N.jsx)(x.a,{}),children:Object(N.jsx)(te,{open:v,onClose:function(){return y(!1)}})}),Object(N.jsx)($,{open:S,onClose:function(e){A(!1)}}),Object(N.jsx)(ae,{open:q,onClose:function(e){"close"===e||e===r||window.gtag("event","set",{event_category:"style",event_label:e}),z(!1)}}),Object(N.jsx)(ce,{open:M,onClose:function(){return P(!1)}})]})};function ae(e){var t=Object(u.a)().t,n=Object(T.b)(),r=function(t){return function(){n(Object(K.T)(t)),e.onClose(t)}};return Object(N.jsxs)(g.a,{onClose:function(){return e.onClose("close")},open:e.open,children:[Object(N.jsx)(v.a,{children:t("file.style.title")}),Object(N.jsx)(y.a,{dividers:!0,children:Object(N.jsx)(b.a,{children:Object.values(_.k).map((function(e){return Object(N.jsx)(ee.b,{to:"/"+e,style:{textDecoration:"none",color:"unset"},children:Object(N.jsx)(p.a,{button:!0,onClick:r(e),children:Object(N.jsx)(f.a,{primary:t("file.style."+e)})})},e)}))})})]})}function ce(e){var t=Object(u.a)(),n=t.t,r=t.i18n;return Object(N.jsxs)(g.a,{onClose:e.onClose,open:e.open,children:[Object(N.jsx)(v.a,{children:n("file.lang.title")}),Object(N.jsx)(y.a,{dividers:!0,children:Object(N.jsx)(b.a,{children:Object.keys(ne).map((function(t){return Object(N.jsx)(p.a,{button:!0,onClick:function(){return(n=t)===r.language||(r.changeLanguage(n).then((function(e){return document.title=e("title")})),window.gtag("event","set",{event_category:"language",event_label:n}),document.documentElement.setAttribute("lang",n)),void e.onClose();var n},children:Object(N.jsx)(f.a,{primary:ne[t]})},t)}))})})]})}t.default=function(){var e=Object(l.a)()(re);return Object(N.jsx)(d.a,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:Object(N.jsx)(d.a,{item:!0,xs:12,sm:8,md:6,lg:4,children:Object(N.jsx)(e,{})})})}}}]);
//# sourceMappingURL=panelSave.ea0bdf4e.chunk.js.map