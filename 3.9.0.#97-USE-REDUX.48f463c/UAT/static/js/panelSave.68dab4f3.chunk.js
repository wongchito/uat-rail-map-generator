(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[80],{127:function(e,t,n){"use strict";n.r(t);var o=n(7),r=n(4),c=n.n(r),i=n(11),a=n(5),s=n(21),l=n(6),u=n.n(l),d=n(9),j=n(1);function b(){var e=Object(i.useTranslation)().t,t=c.a.useState(!1),n=Object(o.a)(t,2),r=n[0],s=n[1],l=c.a.useState({}),b=Object(o.a)(l,2),h=b[0],m=b[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(a.ListItem,{button:!0,component:"label",htmlFor:"upload-param",children:[Object(j.jsx)(a.ListItemIcon,{children:Object(j.jsx)(a.Icon,{children:"folder_open"})}),Object(j.jsx)(a.ListItemText,{primary:e("file.open.button")})]}),Object(j.jsx)("input",{type:"file",accept:"application/json",style:{display:"none"},id:"upload-param",onChange:function(e){console.log(e.target.files[0]),new Promise((function(t){var n=new FileReader;n.onloadend=t,n.readAsText(e.target.files[0])})).then((function(e){return JSON.parse(e.target.result)})).then((function(e){m(e),s(!0)}))}}),Object(j.jsx)(p,{open:r,onClose:function(e){return Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("close"!==e){t.next=4;break}return document.getElementById("upload-param").value="",s(!1),t.abrupt("return");case 4:if("accept"!==e){t.next=14;break}return t.prev=5,t.next=8,window.rmgStorage.writeFile("rmgParam",JSON.stringify(h));case 8:window.location.reload(!0),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[5,11]])})))},content:h})]})}function p(e){var t,n=Object(i.useTranslation)().t;return Object(j.jsxs)(a.Dialog,{onClose:e.onClose("close"),open:e.open,children:[Object(j.jsx)(a.DialogTitle,{children:"Your Configuration"}),Object(j.jsx)(a.DialogContent,{dividers:!0,children:Object(j.jsx)(a.DialogContentText,{style:{whiteSpace:"pre-line"},children:0===Object.keys(e.content).length?"empty":(t=e.content,"Number of stations: ".concat(Object.keys(t.stn_list).length-2,"\n                ").concat(Object.entries(t.stn_list).map((function(e){return["linestart","lineend"].includes(e[0])?"":e[1].name.join(" - ")})).join("\r\n").trim().replace(/\\/," ")))})}),Object(j.jsxs)(a.DialogActions,{children:[Object(j.jsx)(a.Button,{onClick:e.onClose("close"),color:"primary",children:n("dialog.cancel")}),Object(j.jsx)(a.Button,{onClick:e.onClose("accept"),color:"primary",autoFocus:!0,children:"Import"})]})]})}var h=n(12),m=n(3);function g(e,t){var n=e.viewBox.baseVal.width,o=e.viewBox.baseVal.height,r=document.querySelectorAll("canvas")[0];r.width=Number(n)*window.devicePixelRatio*t,r.height=Number(o)*window.devicePixelRatio*t,e.setAttribute("width",r.width.toString()),e.setAttribute("height",r.height.toString());var c=r.getContext("2d");c.clearRect(0,0,r.width,r.height),e.querySelectorAll(".rmg-name__en.rmg-name__mtr--station").forEach((function(e){return e.setAttribute("font-size","11px")})),e.querySelectorAll(".rmg-name__zh.IntName").forEach((function(e){return e.setAttribute("font-size","10px")})),e.querySelectorAll(".rmg-name__en.rmg-name__mtr--osi").forEach((function(e){return e.setAttribute("font-size","9px")})),e.querySelectorAll(".rmg-name__en.rmg-name__gzmtr--next2-dest").forEach((function(e){return e.setAttribute("font-size","8.5px")})),e.querySelectorAll(".rmg-name__en.IntName").forEach((function(e){return e.setAttribute("font-size","7px")})),e.querySelectorAll("text, tspan").forEach((function(e){var t=window.getComputedStyle(e);e.setAttribute("font-family",t.fontFamily),e.setAttribute("fill",t.fill),e.setAttribute("dominant-baseline",t.dominantBaseline),e.setAttribute("text-anchor",t.textAnchor||"")}));var i=new Image;i.onload=function(){setTimeout((function(){c.drawImage(i,0,0,r.width,r.height),function(e,t){var n=document.createElement("a");"string"===typeof n.download?(n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)):window.open(e)}(r.toDataURL("image/png"),"rmg."+(new Date).toISOString()+".png")}),2e3)},i.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(e.outerHTML)))}var f=n(10),O=n(2),x=Object(a.makeStyles)((function(e){return Object(a.createStyles)({contentWrapper:Object(m.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentCanvas:{flex:1},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",minWidth:250},contentRoot:{padding:"unset","&:first-child":{paddingTop:"unset"}},contentControlContent:{display:"flex",flexDirection:"column",justifyContent:"space-between"},formControlRoot:{margin:0}})}));function y(e){var t=Object(i.useTranslation)().t,s=x(),l=Object(f.useSelector)((function(e){return e.app.rmgStyle})),b=Object(r.useState)(document.createElement("svg")),p=Object(o.a)(b,2),m=p[0],y=p[1],w=Object(r.useState)(!1),C=Object(o.a)(w,2),S=C[0],I=C[1],T=Object(r.useState)(!1),L=Object(o.a)(T,2),k=L[0],A=L[1],D=Object(r.useState)(!1),_=Object(o.a)(D,2),E=_[0],R=_[1],q=Object(r.useState)(1),N=Object(o.a)(q,2),z=N[0],F=N[1],P=Object(r.useState)("png"),B=Object(o.a)(P,2),M=B[0],G=B[1],W=Object(r.useState)(!1),H=Object(o.a)(W,2),U=H[0],J=H[1],V=Object(r.useState)(!1),Y=Object(o.a)(V,2),K=Y[0],Q=Y[1],X=c.a.useRef(null);Object(r.useEffect)((function(){var t,r;if(""===e.canvas)return y(document.createElement("svg")),void I(!1);var c=["--rmg-svg-width","--rmg-svg-height"].map((function(t){return document.querySelector("svg#".concat(e.canvas)).style.getPropertyValue(t).match(/\d+/g)[0]})).map(Number),i=Object(o.a)(c,2)[1],a=document.querySelector("svg#".concat(e.canvas)).cloneNode(!0);a.setAttribute("height",(i*z).toString()),a.style.setProperty("all","initial"),["share",e.canvas].map((function(e){var t;return Object(h.a)((null===(t=Object(h.a)(document.querySelectorAll("link")).filter((function(t){return t.id==="css_"+e}))[0])||void 0===t?void 0:t.sheet).cssRules).map((function(e){return e.cssText})).join(" ")})).forEach((function(e){var t=document.createElement("style");t.textContent=e,a.prepend(t)})),null===(t=a.querySelector("rect#canvas-border"))||void 0===t||t.setAttribute("stroke",k?"black":"none"),null===(r=a.querySelector("rect#canvas-bg"))||void 0===r||r.setAttribute("fill",E?"none":"white"),l===O.j.MTR?n.e(79).then(n.bind(null,118)).then((function(e){return(0,e.getBase64FontFace)(a).then(function(){var e=Object(d.a)(u.a.mark((function e(t){var n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t);case 2:n=e.sent,(o=document.createElement("style")).textContent=n.join(" "),a.prepend(o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){alert("Failed to fonts. Fonts in the exported PNG will be missing."),console.error(e)}))})).then((function(){y(a),document.fonts.ready.then((function(){return I(!0)}))})):(y(a),I(!0))}),[e.canvas]);var Z=function(t){return function(){if("close"===t)e.onClose("close");else{var n=X.current.querySelector("svg");if("png"===M)g(n,z);else if("svg"===M){n.removeAttribute("height");var o=document.createElement("a");o.href="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(n.outerHTML))),o.download="rmg."+(new Date).toISOString()+".svg",o.click()}e.onClose("close")}}};return Object(j.jsxs)(a.Dialog,{onClose:Z("close"),open:e.open,maxWidth:!1,children:[Object(j.jsx)(a.DialogTitle,{children:t("file.preview.title")}),Object(j.jsxs)("div",{className:s.contentWrapper,children:[Object(j.jsx)(a.DialogContent,{dangerouslySetInnerHTML:{__html:m.outerHTML},ref:X,className:s.contentCanvas,classes:{root:s.contentRoot}}),Object(j.jsxs)("div",{className:s.contentControl,children:[Object(j.jsxs)(a.DialogContent,{classes:{root:s.contentRoot},className:s.contentControlContent,children:[Object(j.jsxs)(a.List,{component:"div",disablePadding:!0,children:[Object(j.jsxs)(a.ListItem,{children:[Object(j.jsx)(a.ListItemText,{primary:t("file.preview.transparent")}),Object(j.jsx)(a.ListItemSecondaryAction,{children:Object(j.jsx)(a.Switch,{color:"primary",checked:E,onChange:function(e,t){var n;null===(n=m.querySelector("rect#canvas-bg"))||void 0===n||n.setAttribute("fill",t?"none":"white"),R(t)},disabled:!S})})]}),Object(j.jsx)(a.Divider,{variant:"middle"}),Object(j.jsxs)(a.ListItem,{children:[Object(j.jsx)(a.ListItemText,{primary:t("file.preview.border")}),Object(j.jsx)(a.ListItemSecondaryAction,{children:Object(j.jsx)(a.Switch,{color:"primary",checked:k,onChange:function(e,t){var n;null===(n=m.querySelector("rect#canvas-border"))||void 0===n||n.setAttribute("stroke",t?"black":"none"),A(t)},disabled:!S})})]}),Object(j.jsx)(a.Divider,{variant:"middle"}),Object(j.jsxs)(a.ListItem,{children:[Object(j.jsx)(a.ListItemText,{primary:t("file.preview.scale")}),Object(j.jsx)(a.ListItemSecondaryAction,{children:Object(j.jsx)(a.Select,{native:!0,value:z,onChange:function(e){var t=e.target.value;m.setAttribute("height",(Number(m.getAttribute("height"))/z*t).toString()),F(t)},disabled:!S,children:[.25,.33,.5,.67,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5].map((function(e){return Object(j.jsx)("option",{value:e,children:(100*e).toFixed(0)+"%"},e)}))})})]}),Object(j.jsx)(a.Divider,{variant:"middle"}),Object(j.jsxs)(a.ListItem,{children:[Object(j.jsx)(a.ListItemText,{primary:t("file.preview.format")}),Object(j.jsx)(a.ListItemSecondaryAction,{children:Object(j.jsxs)(a.Select,{native:!0,value:M,onChange:function(e){return G(e.target.value)},style:{width:65},disabled:!S,children:[Object(j.jsx)("option",{value:"png",children:"PNG"}),Object(j.jsx)("option",{value:"svg",children:"SVG (Web Use)"})]})})]})]}),Object(j.jsxs)(a.ListItem,{style:{padding:0},children:[Object(j.jsx)(a.Checkbox,{color:"primary",size:"small",checked:U,onChange:function(e,t){return J(t)}}),Object(j.jsxs)(a.Typography,{variant:"body2",children:[t("file.preview.terms.accept"),Object(j.jsx)(a.Typography,{component:"a",color:"primary",variant:"body2",style:{cursor:"pointer"},onClick:function(){return Q(!0)},children:t("file.preview.terms.tandc")})]}),Object(j.jsx)(v,{open:K,onClose:function(){return Q(!1)}})]})]}),Object(j.jsxs)(a.DialogActions,{children:[Object(j.jsx)(a.Button,{variant:"outlined",onClick:Z("close"),color:"primary",autoFocus:!0,children:t("dialog.cancel")}),Object(j.jsx)(a.Button,{variant:"contained",onClick:Z("download"),color:"primary",disabled:!S||!U,children:t("file.preview.download")})]})]})]})]})}var v=function(e){var t=Object(i.useTranslation)().t;return Object(r.useMemo)((function(){return Object(j.jsxs)(a.Dialog,{open:e.open,onClose:e.onClose,children:[Object(j.jsx)(a.DialogTitle,{children:t("file.preview.terms.tandc")}),Object(j.jsxs)(a.DialogContent,{dividers:!0,children:[Object(j.jsx)(a.Typography,{component:"p",children:"The downloaded image may be modified, published, or used for other purposes, under the following conditions."}),Object(j.jsxs)(a.Typography,{component:"ol",children:[Object(j.jsxs)(a.Typography,{component:"li",children:["The layout of the elements on the sign or rail map, is designed by"," ",Object(j.jsx)(a.Typography,{component:"a",color:"primary",href:"http://www.gzmtr.com",target:"_blank",children:"Guangzhou Metro Corporation"}),","," ",Object(j.jsx)(a.Typography,{component:"a",color:"primary",href:"http://www.mtr.com.hk",target:"_blank",children:"MTR Corporation"})," ","or"," ",Object(j.jsx)(a.Typography,{component:"a",color:"primary",href:"http://www.shmetro.com",target:"_blank",children:"Shanghai Shentong Metro Group"}),", depending on your selection. You shall grant appropriate permit or license from the relevant company above before using the downloaded image for commercial purposes, if it is required to do so."]}),Object(j.jsxs)(a.Typography,{component:"li",children:["The elements including shapes and lines on the image are drawn by"," ",Object(j.jsx)(a.Typography,{component:"a",color:"primary",href:"https://github.com/wongchito",target:"_blank",children:"Chito Wong"})," ","and"," ",Object(j.jsx)(a.Typography,{component:"a",color:"primary",href:"https://github.com/thekingofcity",target:"_blank",children:"thekingofcity"}),", based on the design standards or rules of the companies listed above. You may use them for any purposes, but it is recommended to state the name and the link of software alongside."]}),Object(j.jsxs)(a.Typography,{component:"li",children:["The fonts of the Chinese characters in MTR style are provided by"," ",Object(j.jsx)(a.Typography,{component:"a",color:"primary",href:"https://www.google.com/get/noto/help/cjk/",target:"_blank",children:"Google Inc."})," ","while all others fonts are rendered from local files. You shall grant appropriate permit or license from the manufacturers before using the downloaded image for commercial purposes."]})]}),Object(j.jsx)(a.Typography,{component:"p",children:"We reserve the rights, without notice, to modify, add, or remove these terms."}),Object(j.jsx)(a.Typography,{component:"p",children:"\u672c\u689d\u6b3e\u53ca\u7d30\u5247\u66ab\u53ea\u63d0\u4f9b\u82f1\u6587\u7248\uff0c\u656c\u8acb\u539f\u8ad2\u3002"}),Object(j.jsx)(a.Typography,{component:"p",variant:"body2",children:"Last modified: 6 Apr 2020, 12:39 UTC"})]}),Object(j.jsx)(a.DialogActions,{children:Object(j.jsx)(a.Button,{variant:"outlined",color:"primary",onClick:e.onClose,children:t("dialog.close")})})]})}),[e.open])};var w=function(e){var t=Object(i.useTranslation)().t,n=Object(f.useSelector)((function(e){return e.app.rmgStyle})),c=Object(f.useSelector)((function(e){return e.app.canvasToShow})),s=r.useState(!1),l=Object(o.a)(s,2),u=l[0],d=l[1],b=r.useState(""),p=Object(o.a)(b,2),h=p[0],m=p[1],g=function(t){return function(){"close"!==t&&(d(!0),m(t)),e.onClose("close")}};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(a.Dialog,{onClose:g("close"),open:e.open,children:[Object(j.jsx)(a.DialogTitle,{children:t("file.export.title")}),Object(j.jsx)(a.DialogContent,{dividers:!0,children:Object(j.jsx)(a.List,{children:(c===O.a?O.m[n]:[c]).map((function(e){return Object(j.jsx)(a.ListItem,{button:!0,onClick:g(e),children:Object(j.jsx)(a.ListItemText,{primary:t("file.export."+e)})},e)}))})})]}),Object(j.jsx)(y,{open:u,onClose:function(e){"close"===e&&(d(!1),m(""))},canvas:h})]})},C=n(14),S=n(8),I=c.a.lazy((function(){return n.e(81).then(n.bind(null,133))}));var T={en:"English","zh-Hans":"\u4e2d\u6587\uff08\u7b80\u4f53\uff09","zh-HK":"\u4e2d\u6587\uff08\u9999\u6e2f\uff09"},L=function(){var e=Object(i.useTranslation)(),t=e.t,n=e.i18n,l=Object(f.useSelector)((function(e){return e.app.rmgStyle})),u=Object(r.useState)(!1),d=Object(o.a)(u,2),p=d[0],h=d[1],m=Object(r.useState)(!1),g=Object(o.a)(m,2),O=g[0],x=g[1],y=Object(r.useState)(!1),v=Object(o.a)(y,2),C=v[0],S=v[1],L=Object(r.useState)(!1),D=Object(o.a)(L,2),_=D[0],E=D[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)(a.Card,{children:[Object(j.jsxs)(a.List,{component:"nav",children:[Object(j.jsxs)(a.ListItem,{button:!0,onClick:function(){return h(!0)},children:[Object(j.jsx)(a.ListItemIcon,{children:Object(j.jsx)(a.Icon,{children:"note_add"})}),Object(j.jsx)(a.ListItemText,{primary:t("file.new.button")})]}),Object(j.jsx)(b,{}),Object(j.jsxs)(a.ListItem,{button:!0,onClick:function(){var e=document.createElement("a");e.href="data:application/json;base64,"+btoa(unescape(encodeURIComponent(localStorage.rmgParam))),e.download="rmg.param."+(new Date).toISOString()+".json",e.click()},children:[Object(j.jsx)(a.ListItemIcon,{children:Object(j.jsx)(a.Icon,{children:"save"})}),Object(j.jsx)(a.ListItemText,{primary:t("file.save")})]}),Object(j.jsxs)(a.ListItem,{button:!0,onClick:function(){return x(!0)},children:[Object(j.jsx)(a.ListItemIcon,{children:Object(j.jsx)(a.Icon,{children:"cloud_download"})}),Object(j.jsx)(a.ListItemText,{primary:t("file.export.button")})]})]}),Object(j.jsx)(a.Divider,{}),Object(j.jsxs)(a.List,{component:"nav",children:[Object(j.jsxs)(a.ListItem,{button:!0,onClick:function(){return S(!0)},children:[Object(j.jsx)(a.ListItemIcon,{children:Object(j.jsx)(a.Icon,{children:"style"})}),Object(j.jsx)(a.ListItemText,{primary:t("file.style.button"),secondary:t("file.style."+l)})]}),Object(j.jsxs)(a.ListItem,{button:!0,onClick:function(){return E(!0)},children:[Object(j.jsx)(a.ListItemIcon,{children:Object(j.jsx)(a.Icon,{children:"translate"})}),Object(j.jsx)(a.ListItemText,{primary:t("file.lang.button"),secondary:Object(s.b)(T,n.languages)})]})]})]}),Object(j.jsx)(c.a.Suspense,{fallback:Object(j.jsx)(a.LinearProgress,{}),children:Object(j.jsx)(I,{open:p,onClose:function(){return h(!1)}})}),Object(j.jsx)(w,{open:O,onClose:function(e){x(!1)}}),Object(j.jsx)(k,{open:C,onClose:function(e){"close"===e||e===l||window.gtag("event","set",{event_category:"style",event_label:e}),S(!1)}}),Object(j.jsx)(A,{open:_,onClose:function(){return E(!1)}})]})};function k(e){var t=Object(i.useTranslation)().t,n=Object(f.useDispatch)(),o=function(t){return function(){n(Object(S.i)(t)),e.onClose(t)}};return Object(j.jsxs)(a.Dialog,{onClose:function(){return e.onClose("close")},open:e.open,children:[Object(j.jsx)(a.DialogTitle,{children:t("file.style.title")}),Object(j.jsx)(a.DialogContent,{dividers:!0,children:Object(j.jsx)(a.List,{children:Object.values(O.j).map((function(e){return Object(j.jsx)(C.Link,{to:"/"+e,style:{textDecoration:"none",color:"unset"},children:Object(j.jsx)(a.ListItem,{button:!0,onClick:o(e),children:Object(j.jsx)(a.ListItemText,{primary:t("file.style."+e)})})},e)}))})})]})}function A(e){var t=Object(i.useTranslation)(),n=t.t,o=t.i18n;return Object(j.jsxs)(a.Dialog,{onClose:e.onClose,open:e.open,children:[Object(j.jsx)(a.DialogTitle,{children:n("file.lang.title")}),Object(j.jsx)(a.DialogContent,{dividers:!0,children:Object(j.jsx)(a.List,{children:Object.keys(T).map((function(t){return Object(j.jsx)(a.ListItem,{button:!0,onClick:function(){return(n=t)===o.language||(o.changeLanguage(n).then((function(e){return document.title=e("title")})),window.gtag("event","set",{event_category:"language",event_label:n}),document.documentElement.setAttribute("lang",n)),void e.onClose();var n},children:Object(j.jsx)(a.ListItemText,{primary:T[t]})},t)}))})})]})}t.default=function(){var e=Object(i.withTranslation)()(L);return Object(j.jsx)(a.Grid,{container:!0,spacing:3,justify:"center",alignItems:"center",children:Object(j.jsx)(a.Grid,{item:!0,xs:12,sm:8,md:6,lg:4,children:Object(j.jsx)(e,{})})})}}}]);
//# sourceMappingURL=panelSave.68dab4f3.chunk.js.map