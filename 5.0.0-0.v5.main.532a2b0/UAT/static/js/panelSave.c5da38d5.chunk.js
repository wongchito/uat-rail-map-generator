"use strict";(self.webpackChunkrail_map_generator=self.webpackChunkrail_map_generator||[]).push([[5701],{5489:function(e,n,t){t.r(n),t.d(n,{default:function(){return ae}});var r=t(5861),o=t(885),i=t(7757),a=t.n(i),s=t(2791),c=t(6489),l=t(2020),u=t(1288),d=t(283),p=t(2067),h=t(8096),m=t(1969),f=t(9418),x=t(159),g=t(7447),v=t(4446),j=t(3594),Z=t(5159),b=t(4026),y=t(7253),w=t(6068),C=t(269),k=t(6513),S=t(6030),_=t(713),A=t(6169),R=t(8539),T=t(4768),N=t(184);function E(){var e=(0,l.$)().t,n=(0,S.I0)(),t=(0,A.CG)((function(e){return e.app})).canvasToShow,i=s.useState(!1),c=(0,o.Z)(i,2),u=c[0],d=c[1],p=s.useState({}),g=(0,o.Z)(p,2),v=g[0],j=g[1];return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(h.Z,{button:!0,component:"label",htmlFor:"upload-param",children:[(0,N.jsx)(m.Z,{children:(0,N.jsx)(f.Z,{children:"folder_open"})}),(0,N.jsx)(x.Z,{primary:e("file.open.button")})]}),(0,N.jsx)("input",{type:"file",accept:"application/json",style:{display:"none"},id:"upload-param",onChange:function(e){console.log(e.target.files[0]),new Promise((function(n){var t=new FileReader;t.onloadend=n,t.readAsText(e.target.files[0])})).then((function(e){return JSON.parse(e.target.result)})).then((function(e){j(e),d(!0)}))}}),(0,N.jsx)(G,{open:u,onClose:function(e){return(0,r.Z)(a().mark((function r(){var o,i;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("close"!==e){r.next=4;break}return document.getElementById("upload-param").value="",d(!1),r.abrupt("return");case 4:if("accept"!==e){r.next=17;break}return r.prev=5,o=(0,y.db)(v),r.next=9,window.rmgStorage.writeFile("rmgParam",JSON.stringify(o));case 9:i=_.tK[v.style].some((function(e){return e===t}))?t:_.iu,n((0,R.SC)(i)),(0,T.P)(o),r.next=17;break;case 14:r.prev=14,r.t0=r.catch(5),console.error(r.t0);case 17:case"end":return r.stop()}}),r,null,[[5,14]])})))},content:v})]})}function G(e){var n,t=(0,l.$)().t;return(0,N.jsxs)(j.Z,{onClose:e.onClose("close"),open:e.open,children:[(0,N.jsx)(Z.Z,{children:"Your Configuration"}),(0,N.jsx)(b.Z,{dividers:!0,children:(0,N.jsx)(w.Z,{style:{whiteSpace:"pre-line"},children:0===Object.keys(e.content).length?"empty":(n=e.content,"Number of stations: ".concat(Object.keys(n.stn_list).length-2,"\n                ").concat(Object.entries(n.stn_list).map((function(e){return["linestart","lineend"].includes(e[0])?"":e[1].name.join(" - ")})).join("\r\n").trim().replace(/\\/," ")))})}),(0,N.jsxs)(C.Z,{children:[(0,N.jsx)(k.Z,{onClick:e.onClose("close"),color:"primary",children:t("dialog.cancel")}),(0,N.jsx)(k.Z,{onClick:e.onClose("accept"),color:"primary",autoFocus:!0,children:"Import"})]})]})}var q=t(7762),z=t(2982),M=t(4942),F=t(5587),I=t.n(F),L=t(8596),P=t(2288),O=t(4212),U=t(8528),B=t(9403),$=t(5247),W=t(8302);function D(e,n){return H.apply(this,arguments)}function H(){return(H=(0,r.Z)(a().mark((function e(n,t){var r,o,i,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.viewBox.baseVal.width,o=n.viewBox.baseVal.height,(i=document.querySelectorAll("canvas")[0]).width=Number(r)*window.devicePixelRatio*t,i.height=Number(o)*window.devicePixelRatio*t,n.setAttribute("width",i.width.toString()),n.setAttribute("height",i.height.toString()),(s=i.getContext("2d")).clearRect(0,0,i.width,i.height),n.querySelectorAll(".rmg-name__en.rmg-name__mtr--station").forEach((function(e){return e.setAttribute("font-size","11px")})),n.querySelectorAll(".rmg-name__zh.IntName").forEach((function(e){return e.setAttribute("font-size","10px")})),n.querySelectorAll(".rmg-name__en.rmg-name__mtr--osi").forEach((function(e){return e.setAttribute("font-size","9px")})),n.querySelectorAll(".rmg-name__en.rmg-name__gzmtr--next2-dest").forEach((function(e){return e.setAttribute("font-size","8.5px")})),n.querySelectorAll(".rmg-name__en.IntName").forEach((function(e){return e.setAttribute("font-size","7px")})),n.querySelectorAll("text, tspan").forEach((function(e){var n=window.getComputedStyle(e);e.setAttribute("font-family",n.fontFamily),e.setAttribute("fill",n.fill),e.setAttribute("dominant-baseline",n.dominantBaseline),e.setAttribute("text-anchor",n.textAnchor||"")})),e.abrupt("return",new Promise((function(e,t){var r=new Image;r.onload=function(){return s.drawImage(r,0,0,i.width,i.height),e(i.toDataURL("image/png"))},r.onerror=t,r.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(n.outerHTML)))})));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e,n){var t=document.createElement("a");"string"===typeof t.download?(t.href=e,t.download=n,document.body.appendChild(t),t.click(),document.body.removeChild(t)):window.open(e)}var V=t(533),J=(0,L.Z)((function(e){return(0,P.Z)({contentWrapper:(0,M.Z)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentCanvas:{flex:1},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",minWidth:250},contentAction:{display:"flex",alignSelf:"end"},contentRoot:{padding:"unset","&:first-child":{paddingTop:"unset"}},contentControlContent:{display:"flex",flexDirection:"column",justifyContent:"space-between"},formControlRoot:{margin:0}})}));function K(e){var n=(0,l.$)().t,i=J(),c=(0,A.TL)(),u=(0,A.CG)((function(e){return e.param.stn_list})),d=(0,A.CG)((function(e){return e.param.line_name})),m=(0,A.CG)((function(e){return e.param.current_stn_idx})),f=(0,A.CG)((function(e){return e.param.style})),v=(0,s.useState)(document.createElement("svg")),y=(0,o.Z)(v,2),w=y[0],S=y[1],R=(0,s.useState)(!1),T=(0,o.Z)(R,2),E=T[0],G=T[1],M=(0,s.useState)(!1),F=(0,o.Z)(M,2),L=F[0],P=F[1],H=(0,s.useState)(!1),K=(0,o.Z)(H,2),X=K[0],ee=K[1],ne=(0,s.useState)(1),te=(0,o.Z)(ne,2),re=te[0],oe=te[1],ie=(0,s.useState)("png"),ae=(0,o.Z)(ie,2),se=ae[0],ce=ae[1],le=(0,s.useState)(!1),ue=(0,o.Z)(le,2),de=ue[0],pe=ue[1],he=(0,s.useState)(!1),me=(0,o.Z)(he,2),fe=me[0],xe=me[1],ge=s.useRef(null);(0,s.useEffect)((function(){if(""===e.canvas)return S(document.createElement("svg")),void G(!1);ve().then((function(e){S(e),G(!0)}))}),[e.canvas]);var ve=function(){var n=(0,r.Z)(a().mark((function n(){var r,i,s,c,l,u,d,p,h,m;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s=["--rmg-svg-width","--rmg-svg-height"].map((function(n){return document.querySelector("svg#".concat(e.canvas)).style.getPropertyValue(n).match(/\d+/g)[0]})).map(Number),c=(0,o.Z)(s,2),l=c[1],(u=document.querySelector("svg#".concat(e.canvas)).cloneNode(!0)).setAttribute("height",(l*re).toString()),u.style.setProperty("all","initial"),["share",e.canvas].map((function(e){var n;return(0,z.Z)((null===(n=(0,z.Z)(document.querySelectorAll("link")).filter((function(n){return n.id==="css_"+e}))[0])||void 0===n?void 0:n.sheet).cssRules).map((function(e){return e.cssText})).join(" ")})).forEach((function(e){var n=document.createElement("style");n.textContent=e,u.prepend(n)})),null===(r=u.querySelector("rect#canvas-border"))||void 0===r||r.setAttribute("stroke",L?"black":"none"),null===(i=u.querySelector("rect#canvas-bg"))||void 0===i||i.setAttribute("fill",X?"none":"white"),f!==_.RM.MTR){n.next=25;break}return n.prev=8,n.next=11,t.e(4913).then(t.bind(t,773));case 11:return d=n.sent,p=d.getBase64FontFace,n.next=15,p(u);case 15:h=n.sent,(m=document.createElement("style")).textContent=h.join("\n"),u.prepend(m),n.next=25;break;case 21:n.prev=21,n.t0=n.catch(8),alert("Failed to fonts. Fonts in the exported PNG will be missing."),console.error(n.t0);case 25:return n.abrupt("return",u);case 26:case"end":return n.stop()}}),n,null,[[8,21]])})));return function(){return n.apply(this,arguments)}}(),je=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r,o,i,s,l,p,h,f,x;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new(I()),r=(0,q.Z)(n),e.prev=2,r.s();case 4:if((o=r.n()).done){e.next=27;break}return i=o.value,e.next=8,c((0,V.lS)(i));case 8:return e.next=10,ve();case 10:if(s=e.sent,document.body.appendChild(s),l="rmg.".concat(i,".").concat(u[i].name[0],".").concat(u[i].name[1]).replaceAll(" ","_"),"png"!==se){e.next=23;break}return e.next=16,D(s,re);case 16:if(p=e.sent,!navigator.userAgent.includes("Safari")||navigator.userAgent.includes("Chrome")){e.next=20;break}return e.next=20,new Promise((function(e){setTimeout((function(){console.log("Sleep 1 second for Safari"),e()}),1e3)}));case 20:n.length>1?t.file("".concat(l,".png"),p.split("base64,")[1],{base64:!0}):Y(p,"".concat(l,".png")),e.next=24;break;case 23:"svg"===se&&(s.removeAttribute("height"),h="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(s.outerHTML))),n.length>1?t.file("".concat(l,".svg"),h.split("base64,")[1],{base64:!0}):Y(h,"".concat(l,".svg")));case 24:document.body.removeChild(s);case 25:e.next=4;break;case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(2),r.e(e.t0);case 32:return e.prev=32,r.f(),e.finish(32);case 35:if(!(n.length>1)){e.next=41;break}return e.next=38,t.generateAsync({type:"blob"});case 38:f=e.sent,x="rmg.".concat(d[0],".").concat(d[1],".zip").replaceAll(" ","_"),Y(URL.createObjectURL(f),x);case 41:return e.next=43,c((0,V.lS)(m));case 43:case"end":return e.stop()}}),e,null,[[2,29,32,35]])})));return function(n){return e.apply(this,arguments)}}(),Ze=function(n){return function(){if("downloadCurrentStation"===n)je([m]);else if("downloadAllStation"===n){var t=Object.keys(u).filter((function(e){return!["linestart","lineend"].includes(e)}));je(t)}e.onClose("close")}};return(0,N.jsxs)(j.Z,{onClose:Ze("close"),open:e.open,maxWidth:!1,children:[(0,N.jsx)(Z.Z,{children:n("file.preview.title")}),(0,N.jsxs)("div",{className:i.contentWrapper,children:[(0,N.jsx)(b.Z,{dangerouslySetInnerHTML:{__html:w.outerHTML},ref:ge,className:i.contentCanvas,classes:{root:i.contentRoot}}),(0,N.jsx)("div",{className:i.contentControl,children:(0,N.jsxs)(b.Z,{classes:{root:i.contentRoot},className:i.contentControlContent,children:[(0,N.jsxs)(p.Z,{component:"div",disablePadding:!0,children:[(0,N.jsxs)(h.Z,{children:[(0,N.jsx)(x.Z,{primary:n("file.preview.transparent")}),(0,N.jsx)(O.Z,{children:(0,N.jsx)(U.Z,{color:"primary",checked:X,onChange:function(e,n){var t;null===(t=w.querySelector("rect#canvas-bg"))||void 0===t||t.setAttribute("fill",n?"none":"white"),ee(n)},disabled:!E})})]}),(0,N.jsx)(g.Z,{variant:"middle"}),(0,N.jsxs)(h.Z,{children:[(0,N.jsx)(x.Z,{primary:n("file.preview.border")}),(0,N.jsx)(O.Z,{children:(0,N.jsx)(U.Z,{color:"primary",checked:L,onChange:function(e,n){var t;null===(t=w.querySelector("rect#canvas-border"))||void 0===t||t.setAttribute("stroke",n?"black":"none"),P(n)},disabled:!E})})]}),(0,N.jsx)(g.Z,{variant:"middle"}),(0,N.jsxs)(h.Z,{children:[(0,N.jsx)(x.Z,{primary:n("file.preview.scale")}),(0,N.jsx)(O.Z,{children:(0,N.jsx)(B.Z,{native:!0,value:re,onChange:function(e){var n=e.target.value;w.setAttribute("height",(Number(w.getAttribute("height"))/re*n).toString()),oe(n)},disabled:!E,children:[.25,.33,.5,.67,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5].map((function(e){return(0,N.jsx)("option",{value:e,children:(100*e).toFixed(0)+"%"},e)}))})})]}),(0,N.jsx)(g.Z,{variant:"middle"}),(0,N.jsxs)(h.Z,{children:[(0,N.jsx)(x.Z,{primary:n("file.preview.format")}),(0,N.jsx)(O.Z,{children:(0,N.jsxs)(B.Z,{native:!0,value:se,onChange:function(e){return ce(e.target.value)},style:{width:65},disabled:!E,children:[(0,N.jsx)("option",{value:"png",children:"PNG"}),(0,N.jsx)("option",{value:"svg",children:"SVG (Web Use)"})]})})]})]}),(0,N.jsxs)(h.Z,{style:{padding:0},children:[(0,N.jsx)($.Z,{color:"primary",size:"small",checked:de,onChange:function(e,n){return pe(n)}}),(0,N.jsxs)(W.Z,{variant:"body2",children:[n("file.preview.terms.accept"),(0,N.jsx)(W.Z,{component:"a",color:"primary",variant:"body2",style:{cursor:"pointer"},onClick:function(){return xe(!0)},children:n("file.preview.terms.tandc")})]}),(0,N.jsx)(Q,{open:fe,onClose:function(){return xe(!1)}})]})]})})]}),(0,N.jsx)("div",{className:i.contentAction,children:(0,N.jsxs)(C.Z,{children:[(0,N.jsx)(k.Z,{variant:"contained",onClick:Ze("downloadCurrentStation"),color:"primary",disabled:!E||!de,children:n("file.preview.downloadCurrentStation")}),(0,N.jsx)(k.Z,{variant:"contained",onClick:Ze("downloadAllStation"),color:"primary",disabled:!E||!de||f===_.RM.GZMTR,children:n("file.preview.downloadAllStations")}),(0,N.jsx)(k.Z,{variant:"outlined",onClick:Ze("close"),color:"primary",autoFocus:!0,children:n("dialog.cancel")})]})})]})}var Q=function(e){var n=(0,l.$)().t;return(0,s.useMemo)((function(){return(0,N.jsxs)(j.Z,{open:e.open,onClose:e.onClose,children:[(0,N.jsx)(Z.Z,{children:n("file.preview.terms.tandc")}),(0,N.jsxs)(b.Z,{dividers:!0,children:[(0,N.jsx)(W.Z,{component:"p",children:"The downloaded image may be modified, published, or used for other purposes, under the following conditions."}),(0,N.jsxs)(W.Z,{component:"ol",children:[(0,N.jsxs)(W.Z,{component:"li",children:["The layout of the elements on the sign or rail map, is designed by"," ",(0,N.jsx)(W.Z,{component:"a",color:"primary",href:"http://www.gzmtr.com",target:"_blank",children:"Guangzhou Metro Corporation"}),","," ",(0,N.jsx)(W.Z,{component:"a",color:"primary",href:"http://www.mtr.com.hk",target:"_blank",children:"MTR Corporation"})," ","or"," ",(0,N.jsx)(W.Z,{component:"a",color:"primary",href:"http://www.shmetro.com",target:"_blank",children:"Shanghai Shentong Metro Group"}),", depending on your selection. You shall grant appropriate permit or license from the relevant company above before using the downloaded image for commercial purposes, if it is required to do so."]}),(0,N.jsxs)(W.Z,{component:"li",children:["The elements including shapes and lines on the image are drawn by"," ",(0,N.jsx)(W.Z,{component:"a",color:"primary",href:"https://github.com/wongchito",target:"_blank",children:"Chito Wong"})," ","and"," ",(0,N.jsx)(W.Z,{component:"a",color:"primary",href:"https://github.com/thekingofcity",target:"_blank",children:"thekingofcity"}),", based on the design standards or rules of the companies listed above. You may use them for any purposes, but it is recommended to state the name and the link of software alongside."]}),(0,N.jsxs)(W.Z,{component:"li",children:["The fonts of the Chinese characters in MTR style are provided by"," ",(0,N.jsx)(W.Z,{component:"a",color:"primary",href:"https://github.com/ButTaiwan/genyo-font",target:"_blank",children:"ButTaiwan"})," ","while all others fonts are rendered from local files. You shall grant appropriate permit or license from the manufacturers before using the downloaded image for commercial purposes."]})]}),(0,N.jsx)(W.Z,{component:"p",children:"We reserve the rights, without notice, to modify, add, or remove these terms."}),(0,N.jsx)(W.Z,{component:"p",children:"\u672c\u689d\u6b3e\u53ca\u7d30\u5247\u66ab\u53ea\u63d0\u4f9b\u82f1\u6587\u7248\uff0c\u656c\u8acb\u539f\u8ad2\u3002"}),(0,N.jsx)(W.Z,{component:"p",variant:"body2",children:"Last modified: 30 Nov 2021, 18:30 UTC"})]}),(0,N.jsx)(C.Z,{children:(0,N.jsx)(k.Z,{variant:"outlined",color:"primary",onClick:e.onClose,children:n("dialog.close")})})]})}),[e.open])};var X=function(e){var n=(0,l.$)().t,t=(0,A.CG)((function(e){return e.param.style})),r=(0,A.CG)((function(e){return e.app.canvasToShow})),i=s.useState(!1),a=(0,o.Z)(i,2),c=a[0],u=a[1],d=s.useState(""),m=(0,o.Z)(d,2),f=m[0],g=m[1],v=function(n){return function(){"close"!==n&&(u(!0),g(n)),e.onClose("close")}};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(j.Z,{onClose:v("close"),open:e.open,children:[(0,N.jsx)(Z.Z,{children:n("file.export.title")}),(0,N.jsx)(b.Z,{dividers:!0,children:(0,N.jsx)(p.Z,{children:(r===_.iu?_.tK[t]:[r]).map((function(e){return(0,N.jsx)(h.Z,{button:!0,onClick:v(e),children:(0,N.jsx)(x.Z,{primary:n("file.export."+e)})},e)}))})})]}),(0,N.jsx)(K,{open:c,onClose:function(e){"close"===e&&(u(!1),g(""))},canvas:f})]})},ee=t(3504),ne=s.lazy((function(){return t.e(7818).then(t.bind(t,6358))}));var te={en:"English","zh-Hans":"\u4e2d\u6587\uff08\u7b80\u4f53\uff09","zh-HK":"\u4e2d\u6587\uff08\u9999\u6e2f\uff09"},re=function(){var e=(0,l.$)(),n=e.t,t=e.i18n,i=(0,A.CG)((function(e){return e.param.style})),c=(0,A.CG)((function(e){return e.param})),u=(0,s.useState)(!1),j=(0,o.Z)(u,2),Z=j[0],b=j[1],w=(0,s.useState)(!1),C=(0,o.Z)(w,2),k=C[0],S=C[1],_=(0,s.useState)(!1),R=(0,o.Z)(_,2),T=R[0],G=R[1],q=(0,s.useState)(!1),z=(0,o.Z)(q,2),M=z[0],F=z[1],I=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=document.createElement("a")).href="data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c)))),n.download="rmg.param."+(new Date).toISOString()+".json",n.click();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,N.jsxs)("div",{children:[(0,N.jsxs)(d.Z,{children:[(0,N.jsxs)(p.Z,{component:"nav",children:[(0,N.jsxs)(h.Z,{button:!0,onClick:function(){return b(!0)},children:[(0,N.jsx)(m.Z,{children:(0,N.jsx)(f.Z,{children:"note_add"})}),(0,N.jsx)(x.Z,{primary:n("file.new.button")})]}),(0,N.jsx)(E,{}),(0,N.jsxs)(h.Z,{button:!0,onClick:I,children:[(0,N.jsx)(m.Z,{children:(0,N.jsx)(f.Z,{children:"save"})}),(0,N.jsx)(x.Z,{primary:n("file.save")})]}),(0,N.jsxs)(h.Z,{button:!0,onClick:function(){return S(!0)},children:[(0,N.jsx)(m.Z,{children:(0,N.jsx)(f.Z,{children:"cloud_download"})}),(0,N.jsx)(x.Z,{primary:n("file.export.button")})]})]}),(0,N.jsx)(g.Z,{}),(0,N.jsxs)(p.Z,{component:"nav",children:[(0,N.jsxs)(h.Z,{button:!0,onClick:function(){return G(!0)},children:[(0,N.jsx)(m.Z,{children:(0,N.jsx)(f.Z,{children:"style"})}),(0,N.jsx)(x.Z,{primary:n("file.style.button"),secondary:n("file.style."+i)})]}),(0,N.jsxs)(h.Z,{button:!0,onClick:function(){return F(!0)},children:[(0,N.jsx)(m.Z,{children:(0,N.jsx)(f.Z,{children:"translate"})}),(0,N.jsx)(x.Z,{primary:n("file.lang.button"),secondary:(0,y.YL)(te,t.languages)})]})]})]}),(0,N.jsx)(s.Suspense,{fallback:(0,N.jsx)(v.Z,{}),children:(0,N.jsx)(ne,{open:Z,onClose:function(){return b(!1)}})}),(0,N.jsx)(X,{open:k,onClose:function(e){S(!1)}}),(0,N.jsx)(oe,{open:T,onClose:function(e){"close"===e||e===i||window.gtag("event","set",{event_category:"style",event_label:e}),G(!1)}}),(0,N.jsx)(ie,{open:M,onClose:function(){return F(!1)}})]})};function oe(e){var n=(0,l.$)().t,t=(0,A.TL)(),r=function(n){return function(){t((0,V.A_)(n)),e.onClose(n)}};return(0,N.jsxs)(j.Z,{onClose:function(){return e.onClose("close")},open:e.open,children:[(0,N.jsx)(Z.Z,{children:n("file.style.title")}),(0,N.jsx)(b.Z,{dividers:!0,children:(0,N.jsx)(p.Z,{children:Object.values(_.RM).map((function(e){return(0,N.jsx)(ee.rU,{to:"/"+e,style:{textDecoration:"none",color:"unset"},children:(0,N.jsx)(h.Z,{button:!0,onClick:r(e),children:(0,N.jsx)(x.Z,{primary:n("file.style."+e)})})},e)}))})})]})}function ie(e){var n=(0,l.$)(),t=n.t,r=n.i18n;return(0,N.jsxs)(j.Z,{onClose:e.onClose,open:e.open,children:[(0,N.jsx)(Z.Z,{children:t("file.lang.title")}),(0,N.jsx)(b.Z,{dividers:!0,children:(0,N.jsx)(p.Z,{children:Object.keys(te).map((function(n){return(0,N.jsx)(h.Z,{button:!0,onClick:function(){return(t=n)===r.language||(r.changeLanguage(t).then((function(e){return document.title=e("title")})),window.gtag("event","set",{event_category:"language",event_label:t}),document.documentElement.setAttribute("lang",t)),void e.onClose();var t},children:(0,N.jsx)(x.Z,{primary:te[n]})},n)}))})})]})}var ae=function(){var e=(0,c.Z)()(re);return(0,N.jsx)(u.Z,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:(0,N.jsx)(u.Z,{item:!0,xs:12,sm:8,md:6,lg:4,children:(0,N.jsx)(e,{})})})}}}]);
//# sourceMappingURL=panelSave.c5da38d5.chunk.js.map