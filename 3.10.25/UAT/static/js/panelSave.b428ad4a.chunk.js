(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[131],{358:function(e,t,n){"use strict";n.r(t);var r=n(14),a=n.n(r),c=n(21),o=n(18),i=n(0),s=n.n(i),l=n(344),u=n(130),d=n(345),j=n(324),b=n(161),p=n(125),h=n(336),m=n(160),f=n(337),O=n(163),x=n(167),g=n(366),v=n(338),y=n(339),w=n(71),C=n(314),k=n(340),S=n(315),A=n(39),_=n(6),T=n(20),R=n(27),N=n(103),E=n(2);function q(){var e=Object(u.a)().t,t=Object(A.b)(),n=Object(T.c)((function(e){return e.app})).canvasToShow,r=s.a.useState(!1),i=Object(o.a)(r,2),l=i[0],d=i[1],j=s.a.useState({}),b=Object(o.a)(j,2),O=b[0],x=b[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(p.a,{button:!0,component:"label",htmlFor:"upload-param",children:[Object(E.jsx)(h.a,{children:Object(E.jsx)(m.a,{children:"folder_open"})}),Object(E.jsx)(f.a,{primary:e("file.open.button")})]}),Object(E.jsx)("input",{type:"file",accept:"application/json",style:{display:"none"},id:"upload-param",onChange:function(e){console.log(e.target.files[0]),new Promise((function(t){var n=new FileReader;n.onloadend=t,n.readAsText(e.target.files[0])})).then((function(e){return JSON.parse(e.target.result)})).then((function(e){x(e),d(!0)}))}}),Object(E.jsx)(z,{open:l,onClose:function(e){return Object(c.a)(a.a.mark((function r(){var c,o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("close"!==e){r.next=4;break}return document.getElementById("upload-param").value="",d(!1),r.abrupt("return");case 4:if("accept"!==e){r.next=17;break}return r.prev=5,c=Object(w.c)(O),r.next=9,window.rmgStorage.writeFile("rmgParam",JSON.stringify(c));case 9:o=_.o[O.style].some((function(e){return e===n}))?n:_.a,t(Object(R.e)(o)),Object(N.reRenderApp)(c),r.next=17;break;case 14:r.prev=14,r.t0=r.catch(5),console.error(r.t0);case 17:case"end":return r.stop()}}),r,null,[[5,14]])})))},content:O})]})}function z(e){var t,n=Object(u.a)().t;return Object(E.jsxs)(g.a,{onClose:e.onClose("close"),open:e.open,children:[Object(E.jsx)(v.a,{children:"Your Configuration"}),Object(E.jsx)(y.a,{dividers:!0,children:Object(E.jsx)(C.a,{style:{whiteSpace:"pre-line"},children:0===Object.keys(e.content).length?"empty":(t=e.content,"Number of stations: ".concat(Object.keys(t.stn_list).length-2,"\n                ").concat(Object.entries(t.stn_list).map((function(e){return["linestart","lineend"].includes(e[0])?"":e[1].name.join(" - ")})).join("\r\n").trim().replace(/\\/," ")))})}),Object(E.jsxs)(k.a,{children:[Object(E.jsx)(S.a,{onClick:e.onClose("close"),color:"primary",children:n("dialog.cancel")}),Object(E.jsx)(S.a,{onClick:e.onClose("accept"),color:"primary",autoFocus:!0,children:"Import"})]})]})}var F=n(58),I=n(38),M=n(9),P=n(316),L=n.n(P),B=n(150),H=n(171),U=n(341),G=n(246),W=n(360),D=n(328),J=n(156);function V(e,t){return Y.apply(this,arguments)}function Y(){return(Y=Object(c.a)(a.a.mark((function e(t,n){var r,c,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.viewBox.baseVal.width,c=t.viewBox.baseVal.height,(o=document.querySelectorAll("canvas")[0]).width=Number(r)*window.devicePixelRatio*n,o.height=Number(c)*window.devicePixelRatio*n,t.setAttribute("width",o.width.toString()),t.setAttribute("height",o.height.toString()),(i=o.getContext("2d")).clearRect(0,0,o.width,o.height),t.querySelectorAll(".rmg-name__en.rmg-name__mtr--station").forEach((function(e){return e.setAttribute("font-size","11px")})),t.querySelectorAll(".rmg-name__zh.IntName").forEach((function(e){return e.setAttribute("font-size","10px")})),t.querySelectorAll(".rmg-name__en.rmg-name__mtr--osi").forEach((function(e){return e.setAttribute("font-size","9px")})),t.querySelectorAll(".rmg-name__en.rmg-name__gzmtr--next2-dest").forEach((function(e){return e.setAttribute("font-size","8.5px")})),t.querySelectorAll(".rmg-name__en.IntName").forEach((function(e){return e.setAttribute("font-size","7px")})),t.querySelectorAll("text, tspan").forEach((function(e){var t=window.getComputedStyle(e);e.setAttribute("font-family",t.fontFamily),e.setAttribute("fill",t.fill),e.setAttribute("dominant-baseline",t.dominantBaseline),e.setAttribute("text-anchor",t.textAnchor||"")})),e.abrupt("return",new Promise((function(e,n){var r=new Image;r.onload=function(){return i.drawImage(r,0,0,o.width,o.height),e(o.toDataURL("image/png"))},r.onerror=n,r.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t.outerHTML)))})));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e,t){var n=document.createElement("a");"string"===typeof n.download?(n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)):window.open(e)}var Z=n(15),Q=Object(B.a)((function(e){return Object(H.a)({contentWrapper:Object(M.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentCanvas:{flex:1},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",minWidth:250},contentAction:{display:"flex",alignSelf:"end"},contentRoot:{padding:"unset","&:first-child":{paddingTop:"unset"}},contentControlContent:{display:"flex",flexDirection:"column",justifyContent:"space-between"},formControlRoot:{margin:0}})}));function X(e){var t=Object(u.a)().t,r=Q(),l=Object(T.b)(),d=Object(T.c)((function(e){return e.param.stn_list})),j=Object(T.c)((function(e){return e.param.line_name})),h=Object(T.c)((function(e){return e.param.current_stn_idx})),m=Object(T.c)((function(e){return e.param.style})),x=Object(i.useState)(document.createElement("svg")),w=Object(o.a)(x,2),C=w[0],A=w[1],R=Object(i.useState)(!1),N=Object(o.a)(R,2),q=N[0],z=N[1],M=Object(i.useState)(!1),P=Object(o.a)(M,2),B=P[0],H=P[1],Y=Object(i.useState)(!1),X=Object(o.a)(Y,2),ee=X[0],te=X[1],ne=Object(i.useState)(1),re=Object(o.a)(ne,2),ae=re[0],ce=re[1],oe=Object(i.useState)("png"),ie=Object(o.a)(oe,2),se=ie[0],le=ie[1],ue=Object(i.useState)(!1),de=Object(o.a)(ue,2),je=de[0],be=de[1],pe=Object(i.useState)(!1),he=Object(o.a)(pe,2),me=he[0],fe=he[1],Oe=s.a.useRef(null);Object(i.useEffect)((function(){if(""===e.canvas)return A(document.createElement("svg")),void z(!1);xe().then((function(e){A(e),z(!0)}))}),[e.canvas]);var xe=function(){var t=Object(c.a)(a.a.mark((function t(){var r,c,i,s,l,u,d,j,b,p;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=["--rmg-svg-width","--rmg-svg-height"].map((function(t){return document.querySelector("svg#".concat(e.canvas)).style.getPropertyValue(t).match(/\d+/g)[0]})).map(Number),s=Object(o.a)(i,2),l=s[1],(u=document.querySelector("svg#".concat(e.canvas)).cloneNode(!0)).setAttribute("height",(l*ae).toString()),u.style.setProperty("all","initial"),["share",e.canvas].map((function(e){var t;return Object(I.a)((null===(t=Object(I.a)(document.querySelectorAll("link")).filter((function(t){return t.id==="css_"+e}))[0])||void 0===t?void 0:t.sheet).cssRules).map((function(e){return e.cssText})).join(" ")})).forEach((function(e){var t=document.createElement("style");t.textContent=e,u.prepend(t)})),null===(r=u.querySelector("rect#canvas-border"))||void 0===r||r.setAttribute("stroke",B?"black":"none"),null===(c=u.querySelector("rect#canvas-bg"))||void 0===c||c.setAttribute("fill",ee?"none":"white"),m!==_.k.MTR){t.next=25;break}return t.prev=8,t.next=11,n.e(130).then(n.bind(null,349));case 11:return d=t.sent,j=d.getBase64FontFace,t.next=15,j(u);case 15:b=t.sent,(p=document.createElement("style")).textContent=b.join("\n"),u.prepend(p),t.next=25;break;case 21:t.prev=21,t.t0=t.catch(8),alert("Failed to fonts. Fonts in the exported PNG will be missing."),console.error(t.t0);case 25:return t.abrupt("return",u);case 26:case"end":return t.stop()}}),t,null,[[8,21]])})));return function(){return t.apply(this,arguments)}}(),ge=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,o,i,s,u,b,p,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new L.a,r=Object(F.a)(t),e.prev=2,r.s();case 4:if((c=r.n()).done){e.next=27;break}return o=c.value,e.next=8,l(Object(Z.H)(o));case 8:return e.next=10,xe();case 10:if(i=e.sent,document.body.appendChild(i),s="rmg.".concat(o,".").concat(d[o].name[0],".").concat(d[o].name[1]).replaceAll(" ","_"),"png"!==se){e.next=23;break}return e.next=16,V(i,ae);case 16:if(u=e.sent,!navigator.userAgent.includes("Safari")||navigator.userAgent.includes("Chrome")){e.next=20;break}return e.next=20,new Promise((function(e){setTimeout((function(){console.log("Sleep 1 second for Safari"),e()}),1e3)}));case 20:t.length>1?n.file("".concat(s,".png"),u.split("base64,")[1],{base64:!0}):K(u,"".concat(s,".png")),e.next=24;break;case 23:"svg"===se&&(i.removeAttribute("height"),b="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(i.outerHTML))),t.length>1?n.file("".concat(s,".svg"),b.split("base64,")[1],{base64:!0}):K(b,"".concat(s,".svg")));case 24:document.body.removeChild(i);case 25:e.next=4;break;case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(2),r.e(e.t0);case 32:return e.prev=32,r.f(),e.finish(32);case 35:if(!(t.length>1)){e.next=41;break}return e.next=38,n.generateAsync({type:"blob"});case 38:p=e.sent,m="rmg.".concat(j[0],".").concat(j[1],".zip").replaceAll(" ","_"),K(URL.createObjectURL(p),m);case 41:return e.next=43,l(Object(Z.H)(h));case 43:case"end":return e.stop()}}),e,null,[[2,29,32,35]])})));return function(t){return e.apply(this,arguments)}}(),ve=function(t){return function(){if("downloadCurrentStation"===t)ge([h]);else if("downloadAllStation"===t){var n=Object.keys(d).filter((function(e){return!["linestart","lineend"].includes(e)}));ge(n)}e.onClose("close")}};return Object(E.jsxs)(g.a,{onClose:ve("close"),open:e.open,maxWidth:!1,children:[Object(E.jsx)(v.a,{children:t("file.preview.title")}),Object(E.jsxs)("div",{className:r.contentWrapper,children:[Object(E.jsx)(y.a,{dangerouslySetInnerHTML:{__html:C.outerHTML},ref:Oe,className:r.contentCanvas,classes:{root:r.contentRoot}}),Object(E.jsx)("div",{className:r.contentControl,children:Object(E.jsxs)(y.a,{classes:{root:r.contentRoot},className:r.contentControlContent,children:[Object(E.jsxs)(b.a,{component:"div",disablePadding:!0,children:[Object(E.jsxs)(p.a,{children:[Object(E.jsx)(f.a,{primary:t("file.preview.transparent")}),Object(E.jsx)(U.a,{children:Object(E.jsx)(G.a,{color:"primary",checked:ee,onChange:function(e,t){var n;null===(n=C.querySelector("rect#canvas-bg"))||void 0===n||n.setAttribute("fill",t?"none":"white"),te(t)},disabled:!q})})]}),Object(E.jsx)(O.a,{variant:"middle"}),Object(E.jsxs)(p.a,{children:[Object(E.jsx)(f.a,{primary:t("file.preview.border")}),Object(E.jsx)(U.a,{children:Object(E.jsx)(G.a,{color:"primary",checked:B,onChange:function(e,t){var n;null===(n=C.querySelector("rect#canvas-border"))||void 0===n||n.setAttribute("stroke",t?"black":"none"),H(t)},disabled:!q})})]}),Object(E.jsx)(O.a,{variant:"middle"}),Object(E.jsxs)(p.a,{children:[Object(E.jsx)(f.a,{primary:t("file.preview.scale")}),Object(E.jsx)(U.a,{children:Object(E.jsx)(W.a,{native:!0,value:ae,onChange:function(e){var t=e.target.value;C.setAttribute("height",(Number(C.getAttribute("height"))/ae*t).toString()),ce(t)},disabled:!q,children:[.25,.33,.5,.67,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5].map((function(e){return Object(E.jsx)("option",{value:e,children:(100*e).toFixed(0)+"%"},e)}))})})]}),Object(E.jsx)(O.a,{variant:"middle"}),Object(E.jsxs)(p.a,{children:[Object(E.jsx)(f.a,{primary:t("file.preview.format")}),Object(E.jsx)(U.a,{children:Object(E.jsxs)(W.a,{native:!0,value:se,onChange:function(e){return le(e.target.value)},style:{width:65},disabled:!q,children:[Object(E.jsx)("option",{value:"png",children:"PNG"}),Object(E.jsx)("option",{value:"svg",children:"SVG (Web Use)"})]})})]})]}),Object(E.jsxs)(p.a,{style:{padding:0},children:[Object(E.jsx)(D.a,{color:"primary",size:"small",checked:je,onChange:function(e,t){return be(t)}}),Object(E.jsxs)(J.a,{variant:"body2",children:[t("file.preview.terms.accept"),Object(E.jsx)(J.a,{component:"a",color:"primary",variant:"body2",style:{cursor:"pointer"},onClick:function(){return fe(!0)},children:t("file.preview.terms.tandc")})]}),Object(E.jsx)($,{open:me,onClose:function(){return fe(!1)}})]})]})})]}),Object(E.jsx)("div",{className:r.contentAction,children:Object(E.jsxs)(k.a,{children:[Object(E.jsx)(S.a,{variant:"contained",onClick:ve("downloadCurrentStation"),color:"primary",disabled:!q||!je,children:t("file.preview.downloadCurrentStation")}),Object(E.jsx)(S.a,{variant:"contained",onClick:ve("downloadAllStation"),color:"primary",disabled:!q||!je||m===_.k.GZMTR,children:t("file.preview.downloadAllStations")}),Object(E.jsx)(S.a,{variant:"outlined",onClick:ve("close"),color:"primary",autoFocus:!0,children:t("dialog.cancel")})]})})]})}var $=function(e){var t=Object(u.a)().t;return Object(i.useMemo)((function(){return Object(E.jsxs)(g.a,{open:e.open,onClose:e.onClose,children:[Object(E.jsx)(v.a,{children:t("file.preview.terms.tandc")}),Object(E.jsxs)(y.a,{dividers:!0,children:[Object(E.jsx)(J.a,{component:"p",children:"The downloaded image may be modified, published, or used for other purposes, under the following conditions."}),Object(E.jsxs)(J.a,{component:"ol",children:[Object(E.jsxs)(J.a,{component:"li",children:["The layout of the elements on the sign or rail map, is designed by"," ",Object(E.jsx)(J.a,{component:"a",color:"primary",href:"http://www.gzmtr.com",target:"_blank",children:"Guangzhou Metro Corporation"}),","," ",Object(E.jsx)(J.a,{component:"a",color:"primary",href:"http://www.mtr.com.hk",target:"_blank",children:"MTR Corporation"})," ","or"," ",Object(E.jsx)(J.a,{component:"a",color:"primary",href:"http://www.shmetro.com",target:"_blank",children:"Shanghai Shentong Metro Group"}),", depending on your selection. You shall grant appropriate permit or license from the relevant company above before using the downloaded image for commercial purposes, if it is required to do so."]}),Object(E.jsxs)(J.a,{component:"li",children:["The elements including shapes and lines on the image are drawn by"," ",Object(E.jsx)(J.a,{component:"a",color:"primary",href:"https://github.com/wongchito",target:"_blank",children:"Chito Wong"})," ","and"," ",Object(E.jsx)(J.a,{component:"a",color:"primary",href:"https://github.com/thekingofcity",target:"_blank",children:"thekingofcity"}),", based on the design standards or rules of the companies listed above. You may use them for any purposes, but it is recommended to state the name and the link of software alongside."]}),Object(E.jsxs)(J.a,{component:"li",children:["The fonts of the Chinese characters in MTR style are provided by"," ",Object(E.jsx)(J.a,{component:"a",color:"primary",href:"https://github.com/ButTaiwan/genyo-font",target:"_blank",children:"ButTaiwan"})," ","while all others fonts are rendered from local files. You shall grant appropriate permit or license from the manufacturers before using the downloaded image for commercial purposes."]})]}),Object(E.jsx)(J.a,{component:"p",children:"We reserve the rights, without notice, to modify, add, or remove these terms."}),Object(E.jsx)(J.a,{component:"p",children:"\u672c\u689d\u6b3e\u53ca\u7d30\u5247\u66ab\u53ea\u63d0\u4f9b\u82f1\u6587\u7248\uff0c\u656c\u8acb\u539f\u8ad2\u3002"}),Object(E.jsx)(J.a,{component:"p",variant:"body2",children:"Last modified: 30 Nov 2021, 18:30 UTC"})]}),Object(E.jsx)(k.a,{children:Object(E.jsx)(S.a,{variant:"outlined",color:"primary",onClick:e.onClose,children:t("dialog.close")})})]})}),[e.open])};var ee=function(e){var t=Object(u.a)().t,n=Object(T.c)((function(e){return e.param.style})),r=Object(T.c)((function(e){return e.app.canvasToShow})),a=i.useState(!1),c=Object(o.a)(a,2),s=c[0],l=c[1],d=i.useState(""),j=Object(o.a)(d,2),h=j[0],m=j[1],O=function(t){return function(){"close"!==t&&(l(!0),m(t)),e.onClose("close")}};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(g.a,{onClose:O("close"),open:e.open,children:[Object(E.jsx)(v.a,{children:t("file.export.title")}),Object(E.jsx)(y.a,{dividers:!0,children:Object(E.jsx)(b.a,{children:(r===_.a?_.o[n]:[r]).map((function(e){return Object(E.jsx)(p.a,{button:!0,onClick:O(e),children:Object(E.jsx)(f.a,{primary:t("file.export."+e)})},e)}))})})]}),Object(E.jsx)(X,{open:s,onClose:function(e){"close"===e&&(l(!1),m(""))},canvas:h})]})},te=n(74),ne=s.a.lazy((function(){return n.e(132).then(n.bind(null,368))}));var re={en:"English","zh-Hans":"\u4e2d\u6587\uff08\u7b80\u4f53\uff09","zh-HK":"\u4e2d\u6587\uff08\u9999\u6e2f\uff09"},ae=function(){var e=Object(u.a)(),t=e.t,n=e.i18n,r=Object(T.c)((function(e){return e.param.style})),l=Object(T.c)((function(e){return e.param})),d=Object(i.useState)(!1),g=Object(o.a)(d,2),v=g[0],y=g[1],C=Object(i.useState)(!1),k=Object(o.a)(C,2),S=k[0],A=k[1],_=Object(i.useState)(!1),R=Object(o.a)(_,2),N=R[0],z=R[1],F=Object(i.useState)(!1),I=Object(o.a)(F,2),M=I[0],P=I[1],L=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=document.createElement("a")).href="data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l)))),t.download="rmg.param."+(new Date).toISOString()+".json",t.click();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)("div",{children:[Object(E.jsxs)(j.a,{children:[Object(E.jsxs)(b.a,{component:"nav",children:[Object(E.jsxs)(p.a,{button:!0,onClick:function(){return y(!0)},children:[Object(E.jsx)(h.a,{children:Object(E.jsx)(m.a,{children:"note_add"})}),Object(E.jsx)(f.a,{primary:t("file.new.button")})]}),Object(E.jsx)(q,{}),Object(E.jsxs)(p.a,{button:!0,onClick:L,children:[Object(E.jsx)(h.a,{children:Object(E.jsx)(m.a,{children:"save"})}),Object(E.jsx)(f.a,{primary:t("file.save")})]}),Object(E.jsxs)(p.a,{button:!0,onClick:function(){return A(!0)},children:[Object(E.jsx)(h.a,{children:Object(E.jsx)(m.a,{children:"cloud_download"})}),Object(E.jsx)(f.a,{primary:t("file.export.button")})]})]}),Object(E.jsx)(O.a,{}),Object(E.jsxs)(b.a,{component:"nav",children:[Object(E.jsxs)(p.a,{button:!0,onClick:function(){return z(!0)},children:[Object(E.jsx)(h.a,{children:Object(E.jsx)(m.a,{children:"style"})}),Object(E.jsx)(f.a,{primary:t("file.style.button"),secondary:t("file.style."+r)})]}),Object(E.jsxs)(p.a,{button:!0,onClick:function(){return P(!0)},children:[Object(E.jsx)(h.a,{children:Object(E.jsx)(m.a,{children:"translate"})}),Object(E.jsx)(f.a,{primary:t("file.lang.button"),secondary:Object(w.b)(re,n.languages)})]})]})]}),Object(E.jsx)(s.a.Suspense,{fallback:Object(E.jsx)(x.a,{}),children:Object(E.jsx)(ne,{open:v,onClose:function(){return y(!1)}})}),Object(E.jsx)(ee,{open:S,onClose:function(e){A(!1)}}),Object(E.jsx)(ce,{open:N,onClose:function(e){"close"===e||e===r||window.gtag("event","set",{event_category:"style",event_label:e}),z(!1)}}),Object(E.jsx)(oe,{open:M,onClose:function(){return P(!1)}})]})};function ce(e){var t=Object(u.a)().t,n=Object(T.b)(),r=function(t){return function(){n(Object(Z.T)(t)),e.onClose(t)}};return Object(E.jsxs)(g.a,{onClose:function(){return e.onClose("close")},open:e.open,children:[Object(E.jsx)(v.a,{children:t("file.style.title")}),Object(E.jsx)(y.a,{dividers:!0,children:Object(E.jsx)(b.a,{children:Object.values(_.k).map((function(e){return Object(E.jsx)(te.b,{to:"/"+e,style:{textDecoration:"none",color:"unset"},children:Object(E.jsx)(p.a,{button:!0,onClick:r(e),children:Object(E.jsx)(f.a,{primary:t("file.style."+e)})})},e)}))})})]})}function oe(e){var t=Object(u.a)(),n=t.t,r=t.i18n;return Object(E.jsxs)(g.a,{onClose:e.onClose,open:e.open,children:[Object(E.jsx)(v.a,{children:n("file.lang.title")}),Object(E.jsx)(y.a,{dividers:!0,children:Object(E.jsx)(b.a,{children:Object.keys(re).map((function(t){return Object(E.jsx)(p.a,{button:!0,onClick:function(){return(n=t)===r.language||(r.changeLanguage(n).then((function(e){return document.title=e("title")})),window.gtag("event","set",{event_category:"language",event_label:n}),document.documentElement.setAttribute("lang",n)),void e.onClose();var n},children:Object(E.jsx)(f.a,{primary:re[t]})},t)}))})})]})}t.default=function(){var e=Object(l.a)()(ae);return Object(E.jsx)(d.a,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:Object(E.jsx)(d.a,{item:!0,xs:12,sm:8,md:6,lg:4,children:Object(E.jsx)(e,{})})})}}}]);
//# sourceMappingURL=panelSave.b428ad4a.chunk.js.map