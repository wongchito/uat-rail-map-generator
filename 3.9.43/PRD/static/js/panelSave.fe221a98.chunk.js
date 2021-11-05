(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[105],{154:function(e,t,n){"use strict";n.r(t);var o=n(6),r=n.n(o),c=n(9),i=n(11),a=n(5),s=n.n(a),l=n(14),u=n(3),d=n(22),j=n(2),b=n(0);function p(){var e=Object(l.useTranslation)().t,t=s.a.useState(!1),n=Object(i.a)(t,2),o=n[0],a=n[1],d=s.a.useState({}),p=Object(i.a)(d,2),m=p[0],g=p[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(u.ListItem,{button:!0,component:"label",htmlFor:"upload-param",children:[Object(b.jsx)(u.ListItemIcon,{children:Object(b.jsx)(u.Icon,{children:"folder_open"})}),Object(b.jsx)(u.ListItemText,{primary:e("file.open.button")})]}),Object(b.jsx)("input",{type:"file",accept:"application/json",style:{display:"none"},id:"upload-param",onChange:function(e){console.log(e.target.files[0]),new Promise((function(t){var n=new FileReader;n.onloadend=t,n.readAsText(e.target.files[0])})).then((function(e){return JSON.parse(e.target.result)})).then((function(e){g(e),a(!0)}))}}),Object(b.jsx)(h,{open:o,onClose:function(e){return Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("close"!==e){t.next=4;break}return document.getElementById("upload-param").value="",a(!1),t.abrupt("return");case 4:if("accept"!==e){t.next=14;break}return t.prev=5,t.next=8,window.rmgStorage.writeFile("rmgParam",JSON.stringify(m));case 8:window.location.assign("./".concat(m.style||j.k.MTR)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[5,11]])})))},content:m})]})}function h(e){var t,n=Object(l.useTranslation)().t;return Object(b.jsxs)(u.Dialog,{onClose:e.onClose("close"),open:e.open,children:[Object(b.jsx)(u.DialogTitle,{children:"Your Configuration"}),Object(b.jsx)(u.DialogContent,{dividers:!0,children:Object(b.jsx)(u.DialogContentText,{style:{whiteSpace:"pre-line"},children:0===Object.keys(e.content).length?"empty":(t=e.content,"Number of stations: ".concat(Object.keys(t.stn_list).length-2,"\n                ").concat(Object.entries(t.stn_list).map((function(e){return["linestart","lineend"].includes(e[0])?"":e[1].name.join(" - ")})).join("\r\n").trim().replace(/\\/," ")))})}),Object(b.jsxs)(u.DialogActions,{children:[Object(b.jsx)(u.Button,{onClick:e.onClose("close"),color:"primary",children:n("dialog.cancel")}),Object(b.jsx)(u.Button,{onClick:e.onClose("accept"),color:"primary",autoFocus:!0,children:"Import"})]})]})}var m=n(12),g=n(4);function f(e,t){var n=e.viewBox.baseVal.width,o=e.viewBox.baseVal.height,r=document.querySelectorAll("canvas")[0];r.width=Number(n)*window.devicePixelRatio*t,r.height=Number(o)*window.devicePixelRatio*t,e.setAttribute("width",r.width.toString()),e.setAttribute("height",r.height.toString());var c=r.getContext("2d");c.clearRect(0,0,r.width,r.height),e.querySelectorAll(".rmg-name__en.rmg-name__mtr--station").forEach((function(e){return e.setAttribute("font-size","11px")})),e.querySelectorAll(".rmg-name__zh.IntName").forEach((function(e){return e.setAttribute("font-size","10px")})),e.querySelectorAll(".rmg-name__en.rmg-name__mtr--osi").forEach((function(e){return e.setAttribute("font-size","9px")})),e.querySelectorAll(".rmg-name__en.rmg-name__gzmtr--next2-dest").forEach((function(e){return e.setAttribute("font-size","8.5px")})),e.querySelectorAll(".rmg-name__en.IntName").forEach((function(e){return e.setAttribute("font-size","7px")})),e.querySelectorAll("text, tspan").forEach((function(e){var t=window.getComputedStyle(e);e.setAttribute("font-family",t.fontFamily),e.setAttribute("fill",t.fill),e.setAttribute("dominant-baseline",t.dominantBaseline),e.setAttribute("text-anchor",t.textAnchor||"")}));var i=new Image;i.onload=function(){setTimeout((function(){c.drawImage(i,0,0,r.width,r.height),function(e,t){var n=document.createElement("a");"string"===typeof n.download?(n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)):window.open(e)}(r.toDataURL("image/png"),"rmg."+(new Date).toISOString()+".png")}),2e3)},i.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(e.outerHTML)))}var O=n(8),x=Object(u.makeStyles)((function(e){return Object(u.createStyles)({contentWrapper:Object(g.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentCanvas:{flex:1},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",minWidth:250},contentRoot:{padding:"unset","&:first-child":{paddingTop:"unset"}},contentControlContent:{display:"flex",flexDirection:"column",justifyContent:"space-between"},formControlRoot:{margin:0}})}));function y(e){var t=Object(l.useTranslation)().t,o=x(),d=Object(O.c)((function(e){return e.param.style})),p=Object(a.useState)(document.createElement("svg")),h=Object(i.a)(p,2),g=h[0],y=h[1],w=Object(a.useState)(!1),C=Object(i.a)(w,2),T=C[0],I=C[1],S=Object(a.useState)(!1),k=Object(i.a)(S,2),L=k[0],A=k[1],D=Object(a.useState)(!1),_=Object(i.a)(D,2),R=_[0],E=_[1],N=Object(a.useState)(1),q=Object(i.a)(N,2),z=q[0],F=q[1],B=Object(a.useState)("png"),M=Object(i.a)(B,2),P=M[0],G=M[1],W=Object(a.useState)(!1),H=Object(i.a)(W,2),U=H[0],J=H[1],V=Object(a.useState)(!1),Y=Object(i.a)(V,2),K=Y[0],Q=Y[1],X=s.a.useRef(null);Object(a.useEffect)((function(){var t,o;if(""===e.canvas)return y(document.createElement("svg")),void I(!1);var a=["--rmg-svg-width","--rmg-svg-height"].map((function(t){return document.querySelector("svg#".concat(e.canvas)).style.getPropertyValue(t).match(/\d+/g)[0]})).map(Number),s=Object(i.a)(a,2)[1],l=document.querySelector("svg#".concat(e.canvas)).cloneNode(!0);l.setAttribute("height",(s*z).toString()),l.style.setProperty("all","initial"),["share",e.canvas].map((function(e){var t;return Object(m.a)((null===(t=Object(m.a)(document.querySelectorAll("link")).filter((function(t){return t.id==="css_"+e}))[0])||void 0===t?void 0:t.sheet).cssRules).map((function(e){return e.cssText})).join(" ")})).forEach((function(e){var t=document.createElement("style");t.textContent=e,l.prepend(t)})),null===(t=l.querySelector("rect#canvas-border"))||void 0===t||t.setAttribute("stroke",L?"black":"none"),null===(o=l.querySelector("rect#canvas-bg"))||void 0===o||o.setAttribute("fill",R?"none":"white"),d===j.k.MTR?n.e(104).then(n.bind(null,145)).then((function(e){return(0,e.getBase64FontFace)(l).then(function(){var e=Object(c.a)(r.a.mark((function e(t){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t);case 2:n=e.sent,(o=document.createElement("style")).textContent=n.join(" "),l.prepend(o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){alert("Failed to fonts. Fonts in the exported PNG will be missing."),console.error(e)}))})).then((function(){y(l),document.fonts.ready.then((function(){return I(!0)}))})):(y(l),I(!0))}),[e.canvas]);var Z=function(t){return function(){if("close"===t)e.onClose("close");else{var n=X.current.querySelector("svg");if("png"===P)f(n,z);else if("svg"===P){n.removeAttribute("height");var o=document.createElement("a");o.href="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(n.outerHTML))),o.download="rmg."+(new Date).toISOString()+".svg",o.click()}e.onClose("close")}}};return Object(b.jsxs)(u.Dialog,{onClose:Z("close"),open:e.open,maxWidth:!1,children:[Object(b.jsx)(u.DialogTitle,{children:t("file.preview.title")}),Object(b.jsxs)("div",{className:o.contentWrapper,children:[Object(b.jsx)(u.DialogContent,{dangerouslySetInnerHTML:{__html:g.outerHTML},ref:X,className:o.contentCanvas,classes:{root:o.contentRoot}}),Object(b.jsxs)("div",{className:o.contentControl,children:[Object(b.jsxs)(u.DialogContent,{classes:{root:o.contentRoot},className:o.contentControlContent,children:[Object(b.jsxs)(u.List,{component:"div",disablePadding:!0,children:[Object(b.jsxs)(u.ListItem,{children:[Object(b.jsx)(u.ListItemText,{primary:t("file.preview.transparent")}),Object(b.jsx)(u.ListItemSecondaryAction,{children:Object(b.jsx)(u.Switch,{color:"primary",checked:R,onChange:function(e,t){var n;null===(n=g.querySelector("rect#canvas-bg"))||void 0===n||n.setAttribute("fill",t?"none":"white"),E(t)},disabled:!T})})]}),Object(b.jsx)(u.Divider,{variant:"middle"}),Object(b.jsxs)(u.ListItem,{children:[Object(b.jsx)(u.ListItemText,{primary:t("file.preview.border")}),Object(b.jsx)(u.ListItemSecondaryAction,{children:Object(b.jsx)(u.Switch,{color:"primary",checked:L,onChange:function(e,t){var n;null===(n=g.querySelector("rect#canvas-border"))||void 0===n||n.setAttribute("stroke",t?"black":"none"),A(t)},disabled:!T})})]}),Object(b.jsx)(u.Divider,{variant:"middle"}),Object(b.jsxs)(u.ListItem,{children:[Object(b.jsx)(u.ListItemText,{primary:t("file.preview.scale")}),Object(b.jsx)(u.ListItemSecondaryAction,{children:Object(b.jsx)(u.Select,{native:!0,value:z,onChange:function(e){var t=e.target.value;g.setAttribute("height",(Number(g.getAttribute("height"))/z*t).toString()),F(t)},disabled:!T,children:[.25,.33,.5,.67,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5].map((function(e){return Object(b.jsx)("option",{value:e,children:(100*e).toFixed(0)+"%"},e)}))})})]}),Object(b.jsx)(u.Divider,{variant:"middle"}),Object(b.jsxs)(u.ListItem,{children:[Object(b.jsx)(u.ListItemText,{primary:t("file.preview.format")}),Object(b.jsx)(u.ListItemSecondaryAction,{children:Object(b.jsxs)(u.Select,{native:!0,value:P,onChange:function(e){return G(e.target.value)},style:{width:65},disabled:!T,children:[Object(b.jsx)("option",{value:"png",children:"PNG"}),Object(b.jsx)("option",{value:"svg",children:"SVG (Web Use)"})]})})]})]}),Object(b.jsxs)(u.ListItem,{style:{padding:0},children:[Object(b.jsx)(u.Checkbox,{color:"primary",size:"small",checked:U,onChange:function(e,t){return J(t)}}),Object(b.jsxs)(u.Typography,{variant:"body2",children:[t("file.preview.terms.accept"),Object(b.jsx)(u.Typography,{component:"a",color:"primary",variant:"body2",style:{cursor:"pointer"},onClick:function(){return Q(!0)},children:t("file.preview.terms.tandc")})]}),Object(b.jsx)(v,{open:K,onClose:function(){return Q(!1)}})]})]}),Object(b.jsxs)(u.DialogActions,{children:[Object(b.jsx)(u.Button,{variant:"outlined",onClick:Z("close"),color:"primary",autoFocus:!0,children:t("dialog.cancel")}),Object(b.jsx)(u.Button,{variant:"contained",onClick:Z("download"),color:"primary",disabled:!T||!U,children:t("file.preview.download")})]})]})]})]})}var v=function(e){var t=Object(l.useTranslation)().t;return Object(a.useMemo)((function(){return Object(b.jsxs)(u.Dialog,{open:e.open,onClose:e.onClose,children:[Object(b.jsx)(u.DialogTitle,{children:t("file.preview.terms.tandc")}),Object(b.jsxs)(u.DialogContent,{dividers:!0,children:[Object(b.jsx)(u.Typography,{component:"p",children:"The downloaded image may be modified, published, or used for other purposes, under the following conditions."}),Object(b.jsxs)(u.Typography,{component:"ol",children:[Object(b.jsxs)(u.Typography,{component:"li",children:["The layout of the elements on the sign or rail map, is designed by"," ",Object(b.jsx)(u.Typography,{component:"a",color:"primary",href:"http://www.gzmtr.com",target:"_blank",children:"Guangzhou Metro Corporation"}),","," ",Object(b.jsx)(u.Typography,{component:"a",color:"primary",href:"http://www.mtr.com.hk",target:"_blank",children:"MTR Corporation"})," ","or"," ",Object(b.jsx)(u.Typography,{component:"a",color:"primary",href:"http://www.shmetro.com",target:"_blank",children:"Shanghai Shentong Metro Group"}),", depending on your selection. You shall grant appropriate permit or license from the relevant company above before using the downloaded image for commercial purposes, if it is required to do so."]}),Object(b.jsxs)(u.Typography,{component:"li",children:["The elements including shapes and lines on the image are drawn by"," ",Object(b.jsx)(u.Typography,{component:"a",color:"primary",href:"https://github.com/wongchito",target:"_blank",children:"Chito Wong"})," ","and"," ",Object(b.jsx)(u.Typography,{component:"a",color:"primary",href:"https://github.com/thekingofcity",target:"_blank",children:"thekingofcity"}),", based on the design standards or rules of the companies listed above. You may use them for any purposes, but it is recommended to state the name and the link of software alongside."]}),Object(b.jsxs)(u.Typography,{component:"li",children:["The fonts of the Chinese characters in MTR style are provided by"," ",Object(b.jsx)(u.Typography,{component:"a",color:"primary",href:"https://www.google.com/get/noto/help/cjk/",target:"_blank",children:"Google Inc."})," ","while all others fonts are rendered from local files. You shall grant appropriate permit or license from the manufacturers before using the downloaded image for commercial purposes."]})]}),Object(b.jsx)(u.Typography,{component:"p",children:"We reserve the rights, without notice, to modify, add, or remove these terms."}),Object(b.jsx)(u.Typography,{component:"p",children:"\u672c\u689d\u6b3e\u53ca\u7d30\u5247\u66ab\u53ea\u63d0\u4f9b\u82f1\u6587\u7248\uff0c\u656c\u8acb\u539f\u8ad2\u3002"}),Object(b.jsx)(u.Typography,{component:"p",variant:"body2",children:"Last modified: 6 Apr 2020, 12:39 UTC"})]}),Object(b.jsx)(u.DialogActions,{children:Object(b.jsx)(u.Button,{variant:"outlined",color:"primary",onClick:e.onClose,children:t("dialog.close")})})]})}),[e.open])};var w=function(e){var t=Object(l.useTranslation)().t,n=Object(O.c)((function(e){return e.param.style})),o=Object(O.c)((function(e){return e.app.canvasToShow})),r=a.useState(!1),c=Object(i.a)(r,2),s=c[0],d=c[1],p=a.useState(""),h=Object(i.a)(p,2),m=h[0],g=h[1],f=function(t){return function(){"close"!==t&&(d(!0),g(t)),e.onClose("close")}};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(u.Dialog,{onClose:f("close"),open:e.open,children:[Object(b.jsx)(u.DialogTitle,{children:t("file.export.title")}),Object(b.jsx)(u.DialogContent,{dividers:!0,children:Object(b.jsx)(u.List,{children:(o===j.a?j.n[n]:[o]).map((function(e){return Object(b.jsx)(u.ListItem,{button:!0,onClick:f(e),children:Object(b.jsx)(u.ListItemText,{primary:t("file.export."+e)})},e)}))})})]}),Object(b.jsx)(y,{open:s,onClose:function(e){"close"===e&&(d(!1),g(""))},canvas:m})]})},C=n(16),T=n(7),I=s.a.lazy((function(){return n.e(106).then(n.bind(null,160))}));var S={en:"English","zh-Hans":"\u4e2d\u6587\uff08\u7b80\u4f53\uff09","zh-HK":"\u4e2d\u6587\uff08\u9999\u6e2f\uff09"},k=function(){var e=Object(l.useTranslation)(),t=e.t,n=e.i18n,o=Object(O.c)((function(e){return e.param.style})),j=Object(O.c)((function(e){return e.param})),h=Object(a.useState)(!1),m=Object(i.a)(h,2),g=m[0],f=m[1],x=Object(a.useState)(!1),y=Object(i.a)(x,2),v=y[0],C=y[1],T=Object(a.useState)(!1),k=Object(i.a)(T,2),D=k[0],_=k[1],R=Object(a.useState)(!1),E=Object(i.a)(R,2),N=E[0],q=E[1],z=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=document.createElement("a")).href="data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(j)))),t.download="rmg.param."+(new Date).toISOString()+".json",t.click();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsxs)(u.Card,{children:[Object(b.jsxs)(u.List,{component:"nav",children:[Object(b.jsxs)(u.ListItem,{button:!0,onClick:function(){return f(!0)},children:[Object(b.jsx)(u.ListItemIcon,{children:Object(b.jsx)(u.Icon,{children:"note_add"})}),Object(b.jsx)(u.ListItemText,{primary:t("file.new.button")})]}),Object(b.jsx)(p,{}),Object(b.jsxs)(u.ListItem,{button:!0,onClick:z,children:[Object(b.jsx)(u.ListItemIcon,{children:Object(b.jsx)(u.Icon,{children:"save"})}),Object(b.jsx)(u.ListItemText,{primary:t("file.save")})]}),Object(b.jsxs)(u.ListItem,{button:!0,onClick:function(){return C(!0)},children:[Object(b.jsx)(u.ListItemIcon,{children:Object(b.jsx)(u.Icon,{children:"cloud_download"})}),Object(b.jsx)(u.ListItemText,{primary:t("file.export.button")})]})]}),Object(b.jsx)(u.Divider,{}),Object(b.jsxs)(u.List,{component:"nav",children:[Object(b.jsxs)(u.ListItem,{button:!0,onClick:function(){return _(!0)},children:[Object(b.jsx)(u.ListItemIcon,{children:Object(b.jsx)(u.Icon,{children:"style"})}),Object(b.jsx)(u.ListItemText,{primary:t("file.style.button"),secondary:t("file.style."+o)})]}),Object(b.jsxs)(u.ListItem,{button:!0,onClick:function(){return q(!0)},children:[Object(b.jsx)(u.ListItemIcon,{children:Object(b.jsx)(u.Icon,{children:"translate"})}),Object(b.jsx)(u.ListItemText,{primary:t("file.lang.button"),secondary:Object(d.b)(S,n.languages)})]})]})]}),Object(b.jsx)(s.a.Suspense,{fallback:Object(b.jsx)(u.LinearProgress,{}),children:Object(b.jsx)(I,{open:g,onClose:function(){return f(!1)}})}),Object(b.jsx)(w,{open:v,onClose:function(e){C(!1)}}),Object(b.jsx)(L,{open:D,onClose:function(e){"close"===e||e===o||window.gtag("event","set",{event_category:"style",event_label:e}),_(!1)}}),Object(b.jsx)(A,{open:N,onClose:function(){return q(!1)}})]})};function L(e){var t=Object(l.useTranslation)().t,n=Object(O.b)(),o=function(t){return function(){n(Object(T.T)(t)),e.onClose(t)}};return Object(b.jsxs)(u.Dialog,{onClose:function(){return e.onClose("close")},open:e.open,children:[Object(b.jsx)(u.DialogTitle,{children:t("file.style.title")}),Object(b.jsx)(u.DialogContent,{dividers:!0,children:Object(b.jsx)(u.List,{children:Object.values(j.k).map((function(e){return Object(b.jsx)(C.Link,{to:"/"+e,style:{textDecoration:"none",color:"unset"},children:Object(b.jsx)(u.ListItem,{button:!0,onClick:o(e),children:Object(b.jsx)(u.ListItemText,{primary:t("file.style."+e)})})},e)}))})})]})}function A(e){var t=Object(l.useTranslation)(),n=t.t,o=t.i18n;return Object(b.jsxs)(u.Dialog,{onClose:e.onClose,open:e.open,children:[Object(b.jsx)(u.DialogTitle,{children:n("file.lang.title")}),Object(b.jsx)(u.DialogContent,{dividers:!0,children:Object(b.jsx)(u.List,{children:Object.keys(S).map((function(t){return Object(b.jsx)(u.ListItem,{button:!0,onClick:function(){return(n=t)===o.language||(o.changeLanguage(n).then((function(e){return document.title=e("title")})),window.gtag("event","set",{event_category:"language",event_label:n}),document.documentElement.setAttribute("lang",n)),void e.onClose();var n},children:Object(b.jsx)(u.ListItemText,{primary:S[t]})},t)}))})})]})}t.default=function(){var e=Object(l.withTranslation)()(k);return Object(b.jsx)(u.Grid,{container:!0,spacing:3,justify:"center",alignItems:"center",children:Object(b.jsx)(u.Grid,{item:!0,xs:12,sm:8,md:6,lg:4,children:Object(b.jsx)(e,{})})})}}}]);
//# sourceMappingURL=panelSave.fe221a98.chunk.js.map