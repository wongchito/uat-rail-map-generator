(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[85],{165:function(e,t,n){"use strict";var a=n(2),r=n(50),o=n(4),c=n(0),i=(n(7),n(5)),l=n(74),s=n(164),d=n(6),u=n(150),b=c.forwardRef((function(e,t){var n=e.autoFocus,d=e.checked,b=e.checkedIcon,p=e.classes,j=e.className,h=e.defaultChecked,m=e.disabled,f=e.icon,O=e.id,g=e.inputProps,x=e.inputRef,v=e.name,y=e.onBlur,w=e.onChange,k=e.onFocus,C=e.readOnly,S=e.required,E=e.tabIndex,_=e.type,R=e.value,I=Object(o.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),A=Object(l.a)({controlled:d,default:Boolean(h),name:"SwitchBase"}),z=Object(r.a)(A,2),N=z[0],P=z[1],$=Object(s.a)(),B=m;$&&"undefined"===typeof B&&(B=$.disabled);var F="checkbox"===_||"radio"===_;return c.createElement(u.a,Object(a.a)({component:"span",className:Object(i.a)(p.root,j,N&&p.checked,B&&p.disabled),disabled:B,tabIndex:null,role:void 0,onFocus:function(e){k&&k(e),$&&$.onFocus&&$.onFocus(e)},onBlur:function(e){y&&y(e),$&&$.onBlur&&$.onBlur(e)},ref:t},I),c.createElement("input",Object(a.a)({autoFocus:n,checked:d,defaultChecked:h,className:p.input,disabled:B,id:F&&O,name:v,onChange:function(e){var t=e.target.checked;P(t),w&&w(e,t)},readOnly:C,ref:x,required:S,tabIndex:E,type:_,value:R},g)),N?b:f)}));t.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(b)},211:function(e,t,n){var a=n(212);e.exports=function(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.default=e.exports,e.exports.__esModule=!0},212:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r},e.exports.default=e.exports,e.exports.__esModule=!0},219:function(e,t,n){"use strict";var a=n(2),r=n(4),o=n(0),c=(n(7),n(5)),i=n(6),l=n(18),s=n(9),d=n(165),u=o.forwardRef((function(e,t){var n=e.classes,i=e.className,l=e.color,u=void 0===l?"secondary":l,b=e.edge,p=void 0!==b&&b,j=e.size,h=void 0===j?"medium":j,m=Object(r.a)(e,["classes","className","color","edge","size"]),f=o.createElement("span",{className:n.thumb});return o.createElement("span",{className:Object(c.a)(n.root,i,{start:n.edgeStart,end:n.edgeEnd}[p],"small"===h&&n["size".concat(Object(s.a)(h))])},o.createElement(d.a,Object(a.a)({type:"checkbox",icon:f,checkedIcon:f,classes:{root:Object(c.a)(n.switchBase,n["color".concat(Object(s.a)(u))]),input:n.input,checked:n.checked,disabled:n.disabled},ref:t},m)),o.createElement("span",{className:n.track}))}));t.a=Object(i.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle"},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(u)},257:function(e,t,n){"use strict";var a=n(2),r=n(0),o=(n(7),n(6)),c=n(147),i=r.forwardRef((function(e,t){return r.createElement(c.a,Object(a.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(o.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(i)},259:function(e,t,n){"use strict";var a=n(2),r=n(4),o=n(0),c=(n(7),n(5)),i=n(116),l=n(6),s=o.forwardRef((function(e,t){var n=e.classes,l=e.className,s=e.raised,d=void 0!==s&&s,u=Object(r.a)(e,["classes","className","raised"]);return o.createElement(i.a,Object(a.a)({className:Object(c.a)(n.root,l),elevation:d?8:1,ref:t},u))}));t.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},263:function(e,t,n){"use strict";var a=n(2),r=n(4),o=n(0),c=(n(7),n(5)),i=n(165),l=n(49),s=Object(l.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(l.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),u=n(18),b=Object(l.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=n(9),j=n(6),h=o.createElement(d,null),m=o.createElement(s,null),f=o.createElement(b,null),O=o.forwardRef((function(e,t){var n=e.checkedIcon,l=void 0===n?h:n,s=e.classes,d=e.color,u=void 0===d?"secondary":d,b=e.icon,j=void 0===b?m:b,O=e.indeterminate,g=void 0!==O&&O,x=e.indeterminateIcon,v=void 0===x?f:x,y=e.inputProps,w=e.size,k=void 0===w?"medium":w,C=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]);return o.createElement(i.a,Object(a.a)({type:"checkbox",classes:{root:Object(c.a)(s.root,s["color".concat(Object(p.a)(u))],g&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:u,inputProps:Object(a.a)({"data-indeterminate":g},y),icon:o.cloneElement(g?v:j,{fontSize:"small"===k?"small":"default"}),checkedIcon:o.cloneElement(g?v:l,{fontSize:"small"===k?"small":"default"}),ref:t},C))}));t.a=Object(j.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(O)},291:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(0),o=n.n(r),c=n(55),i=n.n(c),l=n(80),s=n.n(l),d=n(211),u=n.n(d),b=n(122),p=n(43),j=["forwardedRef"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=n(282),O=n(259),g=n(152),x=n(117),v=n(274),y=n(151),w=n(275),k=n(154),C=n(158),S=n(299),E=n(276),_=n(277),R=n(66),I=n(20),A=n.n(I),z=n(31),N=n(257),P=n(278),$=n(258),B=n(3);function F(){var e=Object(b.a)().t,t=o.a.useState(!1),n=Object(a.a)(t,2),r=n[0],c=n[1],i=o.a.useState({}),l=Object(a.a)(i,2),s=l[0],d=l[1];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(x.a,{button:!0,component:"label",htmlFor:"upload-param",children:[Object(B.jsx)(v.a,{children:Object(B.jsx)(y.a,{children:"folder_open"})}),Object(B.jsx)(w.a,{primary:e("file.open.button")})]}),Object(B.jsx)("input",{type:"file",accept:"application/json",style:{display:"none"},id:"upload-param",onChange:function(e){console.log(e.target.files[0]),new Promise((function(t){var n=new FileReader;n.onloadend=t,n.readAsText(e.target.files[0])})).then((function(e){return JSON.parse(e.target.result)})).then((function(e){d(e),c(!0)}))}}),Object(B.jsx)(q,{open:r,onClose:function(e){return Object(z.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("close"!==e){t.next=4;break}return document.getElementById("upload-param").value="",c(!1),t.abrupt("return");case 4:if("accept"!==e){t.next=14;break}return t.prev=5,t.next=8,window.rmgStorage.writeFile("rmgParam",JSON.stringify(s));case 8:window.location.reload(!0),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[5,11]])})))},content:s})]})}function q(e){var t,n=Object(b.a)().t;return Object(B.jsxs)(S.a,{onClose:e.onClose("close"),open:e.open,children:[Object(B.jsx)(E.a,{children:"Your Configuration"}),Object(B.jsx)(_.a,{dividers:!0,children:Object(B.jsx)(N.a,{style:{whiteSpace:"pre-line"},children:0===Object.keys(e.content).length?"empty":(t=e.content,"Number of stations: ".concat(Object.keys(t.stn_list).length-2,"\n                ").concat(Object.entries(t.stn_list).map((function(e){return["linestart","lineend"].includes(e[0])?"":e[1].name.join(" - ")})).join("\r\n").trim().replace(/\\/," ")))})}),Object(B.jsxs)(P.a,{children:[Object(B.jsx)($.a,{onClick:e.onClose("close"),color:"primary",children:n("dialog.cancel")}),Object(B.jsx)($.a,{onClick:e.onClose("accept"),color:"primary",autoFocus:!0,children:"Import"})]})]})}var T=n(38),M=n(8),D=n(141),H=n(161),L=n(279),V=n(219),W=n(292),G=n(263),U=n(147);function J(e,t){var n=e.viewBox.baseVal.width,a=e.viewBox.baseVal.height,r=document.querySelectorAll("canvas")[0];r.width=Number(n)*window.devicePixelRatio*t,r.height=Number(a)*window.devicePixelRatio*t,e.setAttribute("width",r.width.toString()),e.setAttribute("height",r.height.toString());var o=r.getContext("2d");o.clearRect(0,0,r.width,r.height),e.querySelectorAll(".rmg-name__en.rmg-name__mtr--station").forEach((function(e){return e.setAttribute("font-size","11px")})),e.querySelectorAll(".rmg-name__zh.IntName").forEach((function(e){return e.setAttribute("font-size","10px")})),e.querySelectorAll(".rmg-name__en.rmg-name__mtr--osi").forEach((function(e){return e.setAttribute("font-size","9px")})),e.querySelectorAll(".rmg-name__en.rmg-name__gzmtr--next2-dest").forEach((function(e){return e.setAttribute("font-size","8.5px")})),e.querySelectorAll(".rmg-name__en.IntName").forEach((function(e){return e.setAttribute("font-size","7px")})),e.querySelectorAll("text, tspan").forEach((function(e){var t=window.getComputedStyle(e);e.setAttribute("font-family",t.fontFamily),e.setAttribute("fill",t.fill),e.setAttribute("dominant-baseline",t.dominantBaseline),e.setAttribute("text-anchor",t.textAnchor||"")}));var c=new Image;c.onload=function(){setTimeout((function(){o.drawImage(c,0,0,r.width,r.height),function(e,t){var n=document.createElement("a");"string"===typeof n.download?(n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)):window.open(e)}(r.toDataURL("image/png"),"rmg."+(new Date).toISOString()+".png")}),2e3)},c.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(e.outerHTML)))}var Y=n(29),X=Object(D.a)((function(e){return Object(H.a)({contentWrapper:Object(M.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentCanvas:{flex:1},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",minWidth:250},contentRoot:{padding:"unset","&:first-child":{paddingTop:"unset"}},contentControlContent:{display:"flex",flexDirection:"column",justifyContent:"space-between"},formControlRoot:{margin:0}})}));function K(e){var t=Object(b.a)().t,c=X(),i=o.a.useContext(Y.a).rmgStyle,l=Object(r.useState)(document.createElement("svg")),s=Object(a.a)(l,2),d=s[0],u=s[1],p=Object(r.useState)(!1),j=Object(a.a)(p,2),h=j[0],m=j[1],f=Object(r.useState)(!1),O=Object(a.a)(f,2),v=O[0],y=O[1],C=Object(r.useState)(!1),R=Object(a.a)(C,2),I=R[0],N=R[1],F=Object(r.useState)(1),q=Object(a.a)(F,2),M=q[0],D=q[1],H=Object(r.useState)("png"),K=Object(a.a)(H,2),Z=K[0],ee=K[1],te=Object(r.useState)(!1),ne=Object(a.a)(te,2),ae=ne[0],re=ne[1],oe=Object(r.useState)(!1),ce=Object(a.a)(oe,2),ie=ce[0],le=ce[1],se=o.a.useRef(null);Object(r.useEffect)((function(){var t,r;if(""===e.canvas)return u(document.createElement("svg")),void m(!1);var o=["--rmg-svg-width","--rmg-svg-height"].map((function(t){return document.querySelector("svg#".concat(e.canvas)).style.getPropertyValue(t).match(/\d+/g)[0]})).map(Number),c=Object(a.a)(o,2)[1],l=document.querySelector("svg#".concat(e.canvas)).cloneNode(!0);l.setAttribute("height",(c*M).toString()),l.style.setProperty("all","initial"),["share",e.canvas].map((function(e){var t;return Object(T.a)((null===(t=Object(T.a)(document.querySelectorAll("link")).filter((function(t){return t.id==="css_"+e}))[0])||void 0===t?void 0:t.sheet).cssRules).map((function(e){return e.cssText})).join(" ")})).forEach((function(e){var t=document.createElement("style");t.textContent=e,l.prepend(t)})),null===(t=l.querySelector("rect#canvas-border"))||void 0===t||t.setAttribute("stroke",v?"black":"none"),null===(r=l.querySelector("rect#canvas-bg"))||void 0===r||r.setAttribute("fill",I?"none":"white"),"mtr"===i?n.e(84).then(n.bind(null,283)).then((function(e){return(0,e.getBase64FontFace)(l).then(function(){var e=Object(z.a)(A.a.mark((function e(t){var n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t);case 2:n=e.sent,(a=document.createElement("style")).textContent=n.join(" "),l.prepend(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){alert("Failed to fonts. Fonts in the exported PNG will be missing."),console.error(e)}))})).then((function(){u(l),document.fonts.ready.then((function(){return m(!0)}))})):(u(l),m(!0))}),[e.canvas]);var de=function(t){return function(){if("close"===t)e.onClose("close");else{var n=se.current.querySelector("svg");if("png"===Z)J(n,M);else if("svg"===Z){n.removeAttribute("height");var a=document.createElement("a");a.href="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(n.outerHTML))),a.download="rmg."+(new Date).toISOString()+".svg",a.click()}e.onClose("close")}}};return Object(B.jsxs)(S.a,{onClose:de("close"),open:e.open,maxWidth:!1,children:[Object(B.jsx)(E.a,{children:t("file.preview.title")}),Object(B.jsxs)("div",{className:c.contentWrapper,children:[Object(B.jsx)(_.a,{dangerouslySetInnerHTML:{__html:d.outerHTML},ref:se,className:c.contentCanvas,classes:{root:c.contentRoot}}),Object(B.jsxs)("div",{className:c.contentControl,children:[Object(B.jsxs)(_.a,{classes:{root:c.contentRoot},className:c.contentControlContent,children:[Object(B.jsxs)(g.a,{component:"div",disablePadding:!0,children:[Object(B.jsxs)(x.a,{children:[Object(B.jsx)(w.a,{primary:t("file.preview.transparent")}),Object(B.jsx)(L.a,{children:Object(B.jsx)(V.a,{color:"primary",checked:I,onChange:function(e,t){var n;null===(n=d.querySelector("rect#canvas-bg"))||void 0===n||n.setAttribute("fill",t?"none":"white"),N(t)},disabled:!h})})]}),Object(B.jsx)(k.a,{variant:"middle"}),Object(B.jsxs)(x.a,{children:[Object(B.jsx)(w.a,{primary:t("file.preview.border")}),Object(B.jsx)(L.a,{children:Object(B.jsx)(V.a,{color:"primary",checked:v,onChange:function(e,t){var n;null===(n=d.querySelector("rect#canvas-border"))||void 0===n||n.setAttribute("stroke",t?"black":"none"),y(t)},disabled:!h})})]}),Object(B.jsx)(k.a,{variant:"middle"}),Object(B.jsxs)(x.a,{children:[Object(B.jsx)(w.a,{primary:t("file.preview.scale")}),Object(B.jsx)(L.a,{children:Object(B.jsx)(W.a,{native:!0,value:M,onChange:function(e){var t=e.target.value;d.setAttribute("height",(Number(d.getAttribute("height"))/M*t).toString()),D(t)},disabled:!h,children:[.25,.33,.5,.67,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5].map((function(e){return Object(B.jsx)("option",{value:e,children:(100*e).toFixed(0)+"%"},e)}))})})]}),Object(B.jsx)(k.a,{variant:"middle"}),Object(B.jsxs)(x.a,{children:[Object(B.jsx)(w.a,{primary:t("file.preview.format")}),Object(B.jsx)(L.a,{children:Object(B.jsxs)(W.a,{native:!0,value:Z,onChange:function(e){return ee(e.target.value)},style:{width:65},disabled:!h,children:[Object(B.jsx)("option",{value:"png",children:"PNG"}),Object(B.jsx)("option",{value:"svg",children:"SVG (Web Use)"})]})})]})]}),Object(B.jsxs)(x.a,{style:{padding:0},children:[Object(B.jsx)(G.a,{color:"primary",size:"small",checked:ae,onChange:function(e,t){return re(t)}}),Object(B.jsxs)(U.a,{variant:"body2",children:[t("file.preview.terms.accept"),Object(B.jsx)(U.a,{component:"a",color:"primary",variant:"body2",style:{cursor:"pointer"},onClick:function(){return le(!0)},children:t("file.preview.terms.tandc")})]}),Object(B.jsx)(Q,{open:ie,onClose:function(){return le(!1)}})]})]}),Object(B.jsxs)(P.a,{children:[Object(B.jsx)($.a,{variant:"outlined",onClick:de("close"),color:"primary",autoFocus:!0,children:t("dialog.cancel")}),Object(B.jsx)($.a,{variant:"contained",onClick:de("download"),color:"primary",disabled:!h||!ae,children:t("file.preview.download")})]})]})]})]})}var Q=function(e){var t=Object(b.a)().t;return Object(r.useMemo)((function(){return Object(B.jsxs)(S.a,{open:e.open,onClose:e.onClose,children:[Object(B.jsx)(E.a,{children:t("file.preview.terms.tandc")}),Object(B.jsxs)(_.a,{dividers:!0,children:[Object(B.jsx)(U.a,{component:"p",children:"The downloaded image may be modified, published, or used for other purposes, under the following conditions."}),Object(B.jsxs)(U.a,{component:"ol",children:[Object(B.jsxs)(U.a,{component:"li",children:["The layout of the elements on the sign or rail map, is designed by"," ",Object(B.jsx)(U.a,{component:"a",color:"primary",href:"http://www.gzmtr.com",target:"_blank",children:"Guangzhou Metro Corporation"}),","," ",Object(B.jsx)(U.a,{component:"a",color:"primary",href:"http://www.mtr.com.hk",target:"_blank",children:"MTR Corporation"})," ","or"," ",Object(B.jsx)(U.a,{component:"a",color:"primary",href:"http://www.shmetro.com",target:"_blank",children:"Shanghai Shentong Metro Group"}),", depending on your selection. You shall grant appropriate permit or license from the relevant company above before using the downloaded image for commercial purposes, if it is required to do so."]}),Object(B.jsxs)(U.a,{component:"li",children:["The elements including shapes and lines on the image are drawn by"," ",Object(B.jsx)(U.a,{component:"a",color:"primary",href:"https://github.com/wongchito",target:"_blank",children:"Chito Wong"})," ","and"," ",Object(B.jsx)(U.a,{component:"a",color:"primary",href:"https://github.com/thekingofcity",target:"_blank",children:"thekingofcity"}),", based on the design standards or rules of the companies listed above. You may use them for any purposes, but it is recommended to state the name and the link of software alongside."]}),Object(B.jsxs)(U.a,{component:"li",children:["The fonts of the Chinese characters in MTR style are provided by"," ",Object(B.jsx)(U.a,{component:"a",color:"primary",href:"https://www.google.com/get/noto/help/cjk/",target:"_blank",children:"Google Inc."})," ","while all others fonts are rendered from local files. You shall grant appropriate permit or license from the manufacturers before using the downloaded image for commercial purposes."]})]}),Object(B.jsx)(U.a,{component:"p",children:"We reserve the rights, without notice, to modify, add, or remove these terms."}),Object(B.jsx)(U.a,{component:"p",children:"\u672c\u689d\u6b3e\u53ca\u7d30\u5247\u66ab\u53ea\u63d0\u4f9b\u82f1\u6587\u7248\uff0c\u656c\u8acb\u539f\u8ad2\u3002"}),Object(B.jsx)(U.a,{component:"p",variant:"body2",children:"Last modified: 6 Apr 2020, 12:39 UTC"})]}),Object(B.jsx)(P.a,{children:Object(B.jsx)($.a,{variant:"outlined",color:"primary",onClick:e.onClose,children:t("dialog.close")})})]})}),[e.open])};var Z=function(e){var t=Object(b.a)().t,n=r.useContext(Y.a),o=n.canvasAvailable,c=n.canvasToShown,i=r.useState(!1),l=Object(a.a)(i,2),s=l[0],d=l[1],u=r.useState(""),p=Object(a.a)(u,2),j=p[0],h=p[1],m=function(t){return function(){"close"!==t&&(d(!0),h(t)),e.onClose("close")}};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(S.a,{onClose:m("close"),open:e.open,children:[Object(B.jsx)(E.a,{children:t("file.export.title")}),Object(B.jsx)(_.a,{dividers:!0,children:Object(B.jsx)(g.a,{children:("all"===c?o:[c]).map((function(e){return Object(B.jsx)(x.a,{button:!0,onClick:m(e),children:Object(B.jsx)(w.a,{primary:t("file.export."+e)})},e)}))})})]}),Object(B.jsx)(K,{open:s,onClose:function(e){"close"===e&&(d(!1),h(""))},canvas:j})]})},ee=n(67),te=o.a.lazy((function(){return n.e(86).then(n.bind(null,307))}));var ne={en:"English","zh-Hans":"\u4e2d\u6587\uff08\u7b80\u4f53\uff09","zh-HK":"\u4e2d\u6587\uff08\u9999\u6e2f\uff09"},ae=function(){var e=Object(b.a)(),t=e.t,n=e.i18n,c=Object(r.useContext)(Y.a).rmgStyle,i=Object(r.useState)(!1),l=Object(a.a)(i,2),s=l[0],d=l[1],u=Object(r.useState)(!1),p=Object(a.a)(u,2),j=p[0],h=p[1],m=Object(r.useState)(!1),f=Object(a.a)(m,2),S=f[0],E=f[1],_=Object(r.useState)(!1),I=Object(a.a)(_,2),A=I[0],z=I[1];return Object(B.jsxs)("div",{children:[Object(B.jsxs)(O.a,{children:[Object(B.jsxs)(g.a,{component:"nav",children:[Object(B.jsxs)(x.a,{button:!0,onClick:function(){return d(!0)},children:[Object(B.jsx)(v.a,{children:Object(B.jsx)(y.a,{children:"note_add"})}),Object(B.jsx)(w.a,{primary:t("file.new.button")})]}),Object(B.jsx)(F,{}),Object(B.jsxs)(x.a,{button:!0,onClick:function(){var e=document.createElement("a");e.href="data:application/json;base64,"+btoa(unescape(encodeURIComponent(localStorage.rmgParam))),e.download="rmg.param."+(new Date).toISOString()+".json",e.click()},children:[Object(B.jsx)(v.a,{children:Object(B.jsx)(y.a,{children:"save"})}),Object(B.jsx)(w.a,{primary:t("file.save")})]}),Object(B.jsxs)(x.a,{button:!0,onClick:function(){return h(!0)},children:[Object(B.jsx)(v.a,{children:Object(B.jsx)(y.a,{children:"cloud_download"})}),Object(B.jsx)(w.a,{primary:t("file.export.button")})]})]}),Object(B.jsx)(k.a,{}),Object(B.jsxs)(g.a,{component:"nav",children:[Object(B.jsxs)(x.a,{button:!0,onClick:function(){return E(!0)},children:[Object(B.jsx)(v.a,{children:Object(B.jsx)(y.a,{children:"style"})}),Object(B.jsx)(w.a,{primary:t("file.style.button"),secondary:t("file.style."+c)})]}),Object(B.jsxs)(x.a,{button:!0,onClick:function(){return z(!0)},children:[Object(B.jsx)(v.a,{children:Object(B.jsx)(y.a,{children:"translate"})}),Object(B.jsx)(w.a,{primary:t("file.lang.button"),secondary:Object(R.b)(ne,n.languages)})]})]})]}),Object(B.jsx)(o.a.Suspense,{fallback:Object(B.jsx)(C.a,{}),children:Object(B.jsx)(te,{open:s,onClose:function(){return d(!1)}})}),Object(B.jsx)(Z,{open:j,onClose:function(e){h(!1)}}),Object(B.jsx)(re,{open:S,onClose:function(e){"close"===e||e===c||window.gtag("event","set",{event_category:"style",event_label:e}),E(!1)}}),Object(B.jsx)(oe,{open:A,onClose:function(){return z(!1)}})]})};function re(e){var t=Object(b.a)().t;return Object(B.jsxs)(S.a,{onClose:function(){return e.onClose("close")},open:e.open,children:[Object(B.jsx)(E.a,{children:t("file.style.title")}),Object(B.jsx)(_.a,{dividers:!0,children:Object(B.jsx)(g.a,{children:["gzmtr","mtr","shmetro"].map((function(n){return Object(B.jsx)(ee.b,{to:"/"+n,style:{textDecoration:"none",color:"unset"},children:Object(B.jsx)(x.a,{button:!0,onClick:function(){return e.onClose(n)},children:Object(B.jsx)(w.a,{primary:t("file.style."+n)})})},n)}))})})]})}function oe(e){var t=Object(b.a)(),n=t.t,a=t.i18n;return Object(B.jsxs)(S.a,{onClose:e.onClose,open:e.open,children:[Object(B.jsx)(E.a,{children:n("file.lang.title")}),Object(B.jsx)(_.a,{dividers:!0,children:Object(B.jsx)(g.a,{children:Object.keys(ne).map((function(t){return Object(B.jsx)(x.a,{button:!0,onClick:function(){return(n=t)===a.language||(a.changeLanguage(n).then((function(e){return document.title=e("title")})),window.gtag("event","set",{event_category:"language",event_label:n}),document.documentElement.setAttribute("lang",n)),void e.onClose();var n},children:Object(B.jsx)(w.a,{primary:ne[t]})},t)}))})})]})}t.default=function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function a(a){var r=a.forwardedRef,c=u()(a,j),i=Object(b.a)(e,c),l=s()(i,3),d=l[0],p=l[1],h=l[2],f=m(m({},c),{},{t:d,i18n:p,tReady:h});return t.withRef&&r?f.ref=r:!t.withRef&&r&&(f.forwardedRef=r),o.a.createElement(n,f)}return a.displayName="withI18nextTranslation(".concat(Object(p.a)(n),")"),a.WrappedComponent=n,t.withRef?o.a.forwardRef((function(e,t){return o.a.createElement(a,Object.assign({},e,{forwardedRef:t}))})):a}}()(ae);return Object(B.jsx)(f.a,{container:!0,spacing:3,justify:"center",alignItems:"center",children:Object(B.jsx)(f.a,{item:!0,xs:12,sm:8,md:6,lg:4,children:Object(B.jsx)(e,{})})})}}}]);
//# sourceMappingURL=panelSave.ecf3c3b7.chunk.js.map