(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[123],{235:function(e,t,n){var a={"./README.md":[248,118],"./baku":[180,4],"./baku.ts":[180,4],"./barcelona":[181,16],"./barcelona.ts":[181,16],"./beijing":[182,27],"./beijing.ts":[182,27],"./cairo":[183,38],"./cairo.ts":[183,38],"./changsha":[184,49],"./changsha.ts":[184,49],"./chengdu":[185,6],"./chengdu.ts":[185,6],"./chongqing":[186,7],"./chongqing.ts":[186,7],"./dalian":[187,8],"./dalian.ts":[187,8],"./delhi":[188,9],"./delhi.ts":[188,9],"./dongguan":[189,10],"./dongguan.ts":[189,10],"./dortmund":[190,11],"./dortmund.ts":[190,11],"./edinburgh":[191,12],"./edinburgh.ts":[191,12],"./foshan":[192,13],"./foshan.ts":[192,13],"./glasgow":[193,14],"./glasgow.ts":[193,14],"./guangzhou":[194,15],"./guangzhou.ts":[194,15],"./hangzhou":[195,17],"./hangzhou.ts":[195,17],"./harbin":[196,18],"./harbin.ts":[196,18],"./hongkong":[197,19],"./hongkong.ts":[197,19],"./istanbul":[198,20],"./istanbul.ts":[198,20],"./kansai":[199,21],"./kansai.ts":[199,21],"./kaohsiung":[200,22],"./kaohsiung.ts":[200,22],"./klangvalley":[201,23],"./klangvalley.ts":[201,23],"./london":[202,24],"./london.ts":[202,24],"./macao":[203,25],"./macao.ts":[203,25],"./madrid":[204,26],"./madrid.ts":[204,26],"./nanjing":[205,28],"./nanjing.ts":[205,28],"./newtaipei":[206,29],"./newtaipei.ts":[206,29],"./osaka":[207,30],"./osaka.ts":[207,30],"./oslo":[208,31],"./oslo.ts":[208,31],"./other":[209,32],"./other.ts":[209,32],"./paris":[210,33],"./paris.ts":[210,33],"./qingdao":[211,34],"./qingdao.ts":[211,34],"./sanfrancisco":[212,35],"./sanfrancisco.ts":[212,35],"./sanktpeterburg":[213,36],"./sanktpeterburg.ts":[213,36],"./santiago":[214,37],"./santiago.ts":[214,37],"./saopaulo":[215,39],"./saopaulo.ts":[215,39],"./seoul":[216,40],"./seoul.ts":[216,40],"./shanghai":[217,41],"./shanghai.ts":[217,41],"./shenzhen":[218,42],"./shenzhen.ts":[218,42],"./singapore":[219,43],"./singapore.ts":[219,43],"./stockholm":[220,44],"./stockholm.ts":[220,44],"./suzhou":[221,45],"./suzhou.ts":[221,45],"./taipei":[222,46],"./taipei.ts":[222,46],"./tehran":[223,47],"./tehran.ts":[223,47],"./tianjin":[224,48],"./tianjin.ts":[224,48],"./tokyo":[225,50],"./tokyo.ts":[225,50],"./toronto":[226,51],"./toronto.ts":[226,51],"./tyneandwear":[227,52],"./tyneandwear.ts":[227,52],"./wuxi":[228,53],"./wuxi.ts":[228,53],"./xiamen":[229,54],"./xiamen.ts":[229,54],"./xian":[230,5],"./xian.ts":[230,5]};function i(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(a)},i.id=235,e.exports=i},239:function(e,t,n){"use strict";var a=n(3),i=n(18),r=n(38),c=n(9),o=n(0),s=n.n(o),l=n(130),u=n(150),d=n(171),j=n(366),h=n(338),b=n(339),p=n(161),m=n(163),f=n(340),O=n(315),g=n(125),x=n(124),v=n(160),y=n(371),C=n(374),k=n(337),w=n(168),E=n(164),N=n(14),S=n.n(N),U=n(21),R=n(361),M=n(162),z=n(170),F=n(360),I=n(71),W=n(82),H=n(6),A=n(2),P=Object(u.a)((function(){return Object(d.a)({cityItem:{display:"flex",flexDirection:"row",alignItems:"center"},menuItemSpan:{padding:"0 .3rem"},button:{borderRadius:"50%",height:24,width:24,minWidth:0,marginRight:8,padding:0},inputColour:{position:"absolute",width:0,height:0,left:27,top:32},buttonContainer:{display:"flex",flexShrink:1}})})),D=function(e){var t=Object(l.a)(),c=t.t,u=t.i18n,d=P(),j=function(e){var t=s.a.useState([]),r=Object(i.a)(t,2),c=r[0],l=r[1],u=e[0]?n(235)("./".concat(e[0])).then((function(e){return e.default})):Promise.resolve([]);return Object(o.useEffect)((function(){"undefined"!==typeof e[0]&&Object(U.a)(S.a.mark((function t(){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u;case 2:n=t.sent,l(e[0]===W.a.Other?[Object(a.a)(Object(a.a)({},n[0]),{},{colour:e[2],fg:e[3]||H.h.white})]:n);case 4:case"end":return t.stop()}}),t)})))()}),[e.toString()]),c}(e.theme);Object(o.useEffect)((function(){if(0!==j.length&&!j.filter((function(t){return t.id===e.theme[1]})).length){var t=j[0],n=t.id,a=t.colour,i=t.fg,r=[e.theme[0],n,a,i||H.h.white];e.onUpdate("theme",r)}}),[j]);return Object(A.jsxs)(p.a,{component:"div",disablePadding:!0,children:[Object(A.jsx)(B,{value:e.theme[0],onChange:function(t){return e.onUpdate("theme",[t.target.value].concat(Object(r.a)(e.theme.slice(1))))}}),Object(A.jsx)(m.a,{variant:"middle"}),Object(A.jsxs)(g.a,{children:[Object(A.jsx)(k.a,{primary:c("colour.line")}),Object(A.jsx)(R.a,{select:!0,style:{width:166},onChange:function(t){var n=t.target.value,a=j.filter((function(e){return e.id===n}))[0],i=a.colour,r=a.fg,c=[e.theme[0],n,i,r||H.h.white];e.onUpdate("theme",c)},value:e.theme[1],disabled:"other"===e.theme[0],children:j.map((function(e){return Object(A.jsx)(M.a,{value:e.id,children:Object(A.jsx)("span",{className:d.menuItemSpan,style:{backgroundColor:e.colour,color:e.fg||H.h.white},children:Object(I.b)(e.name,u.languages)})},e.id)}))})]})]})},_=function(e){var t=Object(l.a)().t,n=P(),a=Object(o.useState)(e.theme[2]),c=Object(i.a)(a,2),s=c[0],u=c[1];Object(o.useEffect)((function(){return u(e.theme[2])}),[e.theme[2]]);return Object(A.jsxs)(p.a,{component:"div",disablePadding:!0,children:[Object(A.jsxs)(g.a,{children:[Object(A.jsx)(k.a,{primary:t("colour.colour")}),Object(A.jsxs)("div",{className:n.buttonContainer,children:[Object(A.jsx)("input",{type:"color",id:"input-color",value:e.theme[2],onChange:function(t){var n=t.target.value;e.onUpdate("theme",[W.a.Other,"other",n,e.theme[3]])},className:n.inputColour,style:{opacity:0}}),Object(A.jsx)("label",{htmlFor:"input-color",children:Object(A.jsx)(z.a,{title:t("colour.tooltip")||"","aria-label":"colour picker",children:Object(A.jsx)(O.a,{className:n.button,style:{backgroundColor:e.theme[2],borderColor:e.theme[3]||H.h.white},variant:"contained",component:"span",children:" "})})})]}),Object(A.jsx)(R.a,{error:!(null===s||void 0===s?void 0:s.match(/^#[0-9a-fA-F]{6}$/g)),style:{width:85},onChange:function(t){var n=t.target.value;if(null!==n.match(/^#[0-9a-fA-F]{0,6}$/))if(u(n),"other"!==e.theme[0])if(null!==n.match(/^#[0-9a-fA-f]{6}$/)){var a=[W.a.Other,"other",n,e.theme[3]];e.onUpdate("theme",a)}else{var i=[W.a.Other,"other"].concat(Object(r.a)(e.theme.slice(2)));e.onUpdate("theme",i)}else if(null!==n.match(/^#[0-9a-fA-F]{6}$/)){var c=e.theme.map((function(e,t){return 2===t?n:e}));e.onUpdate("theme",c)}},value:null===s||void 0===s?void 0:s.toUpperCase()})]}),Object(A.jsx)(m.a,{variant:"middle"}),Object(A.jsxs)(g.a,{children:[Object(A.jsx)(k.a,{primary:t("colour.fg")}),Object(A.jsxs)(F.a,{native:!0,style:{width:85},label:t("colour.fg"),onChange:function(t){var n=[W.a.Other,"other",e.theme[2],t.target.value];e.onUpdate("theme",n)},value:e.theme[3]||H.h.white,children:[Object(A.jsx)("option",{value:"#fff",children:t("colour.fgWhite")}),Object(A.jsx)("option",{value:"#000",children:t("colour.fgBlack")})]})]})]})},B=function(e){var t=Object(l.a)(),n=t.t,a=t.i18n,i=P(),r=Object(o.useMemo)((function(){return W.b.map((function(e){return Object(A.jsx)(M.a,{value:e.id,children:Object(A.jsxs)("span",{className:i.cityItem,children:[Object(A.jsx)(T,{code:e.country}),Object(A.jsx)("span",{children:Object(I.b)(e.name,a.languages)})]})},e.id)}))}),[]);return Object(A.jsxs)(g.a,{children:[Object(A.jsx)(k.a,{primary:n("colour.city")}),Object(A.jsx)(R.a,{select:!0,style:{width:166},value:e.value,onChange:e.onChange,children:r})]})},L=Object(u.a)((function(){return Object(d.a)({img:{height:20,marginRight:"0.2rem"}})}));function T(e){var t=Object(l.a)().i18n,n=L(),a=[];return a=2===e.code.length?e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+127397).toString(16).toUpperCase()})):["1F3F4"].concat(e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+917536).toString(16).toUpperCase()})),"E007F"),[H.f.ChineseCN,H.f.ChineseSimp].includes(t.language)&&"TW"===e.code&&(a=["1F3F4"]),-1!==navigator.platform.indexOf("Win32")||-1!==navigator.platform.indexOf("Win64")?Object(A.jsx)("img",{src:"/uat-rail-map-generator"+"/images/flags/".concat(a.join("-"),".svg"),className:n.img,alt:"Flag of ".concat(e.code)}):Object(A.jsx)("span",{children:String.fromCodePoint.apply(String,Object(r.a)(a.map((function(e){return parseInt(e,16)}))))})}var q=n(20),J=Object(u.a)((function(e){return Object(d.a)({contentWrapper:Object(c.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentLeft:{maxWidth:280},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",width:270},paperRoot:{maxWidth:250},listItemPaper:{justifyContent:"center"},iconRoot:{position:"absolute",color:e.palette.action.active},inputBaseRoot:{display:"block"},inputBaseInputZH:{textAlign:"center",fontSize:36,padding:0,paddingTop:6,height:45},inputBaseInputEN:{textAlign:"center",fontSize:18,padding:0,paddingBottom:6,height:"auto"},chipWrapper:{overflowX:"auto",display:"flex"},chipRoot:{borderRadius:4.5,height:32,lineHeight:"1rem",margin:2},chipLabel:{padding:"0 6px","& > span":{display:"block",textAlign:"center"},"& > span:first-child":{fontSize:"1rem"},"& > span:last-child":{lineHeight:"0.8rem"}}})})),Q=function(e){var t=Object(l.a)().t,n=J();return Object(A.jsxs)(j.a,{open:e.open,onClose:e.onClose,children:[Object(A.jsx)(h.a,{children:t("colour.title")}),Object(A.jsxs)(b.a,{className:n.contentWrapper,children:[Object(A.jsxs)(p.a,{component:"div",disablePadding:!0,className:n.contentLeft,children:[Object(A.jsx)($,{theme:e.theme,lineName:e.lineName,onUpdate:e.onUpdate}),Object(A.jsx)(m.a,{}),Object(A.jsx)(V,{onUpdate:e.onUpdate})]}),Object(A.jsx)("div",{className:n.contentControl,children:Object(A.jsx)(Z,{theme:e.theme,onUpdate:e.onUpdate})})]}),Object(A.jsx)(f.a,{children:Object(A.jsx)(O.a,{onClick:e.onClose,color:"primary",children:t("dialog.done")})})]})},$=function(e){var t=J(),n=function(t,n){var a=e.lineName.map((function(e,a){return a===n?t:e}));e.onUpdate("name",a)};return Object(A.jsx)(g.a,{style:{justifyContent:"center"},children:Object(A.jsxs)(x.a,{className:t.paperRoot,style:{backgroundColor:e.theme[2]},children:[Object(A.jsx)(v.a,{className:t.iconRoot,children:"edit"}),Object(A.jsx)(y.a,{value:e.lineName[0],classes:{root:t.inputBaseRoot,input:t.inputBaseInputZH},style:{color:e.theme[3]||H.h.white},onChange:function(e){return n(e.target.value,0)},autoFocus:!0}),Object(A.jsx)(y.a,{value:e.lineName[1],classes:{root:t.inputBaseRoot,input:t.inputBaseInputEN},style:{color:e.theme[3]||H.h.white},onChange:function(e){return n(e.target.value,1)}})]})})},V=function(e){var t=Object(l.a)().t,n=J(),a=Object(q.c)((function(e){return e.param.theme})),i=Object(q.c)((function(e){return e.param.line_name})),c=Object(q.c)((function(e){return e.param.stn_list})),s=Object(o.useMemo)((function(){return new Set(Object.values(c).reduce((function(e,t){var n=t.transfer.info;return e.concat.apply(e,Object(r.a)(n))}),[[].concat(Object(r.a)(a),Object(r.a)(i))]).map((function(e){return JSON.stringify(e)})).reverse())}),[]),u=Object(o.useMemo)((function(){return Object(r.a)(s).map((function(t,a){var i=JSON.parse(t),r=i.slice(4).map((function(e,t){return Object(A.jsx)("span",{style:{color:i[3]},children:e},t)}));return Object(A.jsx)(C.a,{onClick:function(){e.onUpdate("theme",i.slice(0,4)),e.onUpdate("name",i.slice(4))},style:{backgroundColor:i[2]},className:n.chipRoot,classes:{label:n.chipLabel},label:r},a)}))}),[]);return Object(A.jsx)(g.a,{children:Object(A.jsx)(k.a,{primary:t("colour.recent"),secondary:u,secondaryTypographyProps:{component:"div"},classes:{secondary:n.chipWrapper}})})},Z=function(e){var t=Object(l.a)().t,n=Object(o.useState)("other"===e.theme[0]?1:0),r=Object(i.a)(n,2),c=r[0],s=r[1],u=Object(A.jsxs)(w.a,{value:c,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return s(t)},variant:"fullWidth",scrollButtons:"off",children:[Object(A.jsx)(E.a,{label:t("colour.palette"),style:{minWidth:"unset"}}),Object(A.jsx)(E.a,{label:t("colour.custom"),style:{minWidth:"unset"}})]}),d=function(t){switch(t){case 0:return Object(A.jsx)(D,Object(a.a)({},e));case 1:return Object(A.jsx)(_,Object(a.a)({},e));default:return Object(A.jsx)(A.Fragment,{})}}(c);return Object(A.jsxs)(A.Fragment,{children:[u,d]})};t.a=Q},247:function(e,t,n){"use strict";var a=n(1),i=n(34),r=n(4),c=n(0),o=n(5),s=(n(8),n(127)),l=n(7),u=n(81),d=n(60),j=n(32),h=n(17),b=c.forwardRef((function(e,t){var n=e.children,l=e.classes,b=e.className,p=e.collapsedHeight,m=e.collapsedSize,f=void 0===m?"0px":m,O=e.component,g=void 0===O?"div":O,x=e.disableStrictModeCompat,v=void 0!==x&&x,y=e.in,C=e.onEnter,k=e.onEntered,w=e.onEntering,E=e.onExit,N=e.onExited,S=e.onExiting,U=e.style,R=e.timeout,M=void 0===R?u.b.standard:R,z=e.TransitionComponent,F=void 0===z?s.a:z,I=Object(r.a)(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),W=Object(j.a)(),H=c.useRef(),A=c.useRef(null),P=c.useRef(),D="number"===typeof(p||f)?"".concat(p||f,"px"):p||f;c.useEffect((function(){return function(){clearTimeout(H.current)}}),[]);var _=W.unstable_strictMode&&!v,B=c.useRef(null),L=Object(h.a)(t,_?B:void 0),T=function(e){return function(t,n){if(e){var a=_?[B.current,t]:[t,n],r=Object(i.a)(a,2),c=r[0],o=r[1];void 0===o?e(c):e(c,o)}}},q=T((function(e,t){e.style.height=D,C&&C(e,t)})),J=T((function(e,t){var n=A.current?A.current.clientHeight:0,a=Object(d.a)({style:U,timeout:M},{mode:"enter"}).duration;if("auto"===M){var i=W.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),P.current=i}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),w&&w(e,t)})),Q=T((function(e,t){e.style.height="auto",k&&k(e,t)})),$=T((function(e){var t=A.current?A.current.clientHeight:0;e.style.height="".concat(t,"px"),E&&E(e)})),V=T(N),Z=T((function(e){var t=A.current?A.current.clientHeight:0,n=Object(d.a)({style:U,timeout:M},{mode:"exit"}).duration;if("auto"===M){var a=W.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),P.current=a}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=D,S&&S(e)}));return c.createElement(F,Object(a.a)({in:y,onEnter:q,onEntered:Q,onEntering:J,onExit:$,onExited:V,onExiting:Z,addEndListener:function(e,t){var n=_?e:t;"auto"===M&&(H.current=setTimeout(n,P.current||0))},nodeRef:_?B:void 0,timeout:"auto"===M?null:M},I),(function(e,t){return c.createElement(g,Object(a.a)({className:Object(o.a)(l.root,l.container,b,{entered:l.entered,exited:!y&&"0px"===D&&l.hidden}[e]),style:Object(a.a)({minHeight:D},U),ref:L},t),c.createElement("div",{className:l.wrapper,ref:A},c.createElement("div",{className:l.wrapperInner},n)))}))}));b.muiSupportAuto=!0,t.a=Object(l.a)((function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(b)},367:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(345),c=n(124),o=n(161),s=n(167),l=n(163),u=n(18),d=n(130),j=n(150),h=n(171),b=n(125),p=n(336),m=n(160),f=n(337),O=n(315),g=n(361),x=n(341),v=n(246),y=n(247),C=n(239),k=n(20),w=n(6),E=n(15),N=n(2),S=Object(j.a)((function(e){return Object(h.a)({dividerVertical:{margin:e.spacing(0,2)},nestedList:{paddingLeft:e.spacing(5)}})})),U=function(){var e=Object(d.a)().t,t=Object(k.b)(),n=Object(k.c)((function(e){return e.param.style})),a=Object(k.c)((function(e){return e.param.line_name})),r=Object(k.c)((function(e){return e.param.theme})),c=i.a.useState(!1),o=Object(u.a)(c,2),s=o[0],j=o[1];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(b.a,{button:!0,onClick:function(){return j(!0)},children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(m.a,{children:"color_lens"})}),Object(N.jsx)(f.a,{primary:e("design.theme"),secondary:Object(N.jsx)("span",{style:{backgroundColor:r[2],color:r[3],padding:".1rem .3rem"},children:Object.values(a).join()})}),Object(N.jsx)(m.a,{color:"action",children:"arrow_right"})]}),Object(N.jsx)(C.a,{open:s,theme:r,lineName:a,onUpdate:function(e,n){"name"===e&&t(Object(E.M)(Object.values(n))),"theme"===e&&t(Object(E.W)(n))},onClose:function(){return j(!1)}}),Object(N.jsx)(l.a,{}),Object(N.jsx)(R,{}),Object(N.jsx)(l.a,{}),n===w.k.SHMetro?Object(N.jsx)(z,{}):Object(N.jsx)(M,{})]})},R=function(){var e=Object(d.a)().t,t=S(),n=Object(k.b)(),a=Object(k.c)((function(e){return e.param.direction}));return i.a.useMemo((function(){return Object(N.jsxs)(b.a,{children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(m.a,{children:"directions"})}),Object(N.jsx)(f.a,{primary:e("design.direction.button"),secondary:e("design.direction."+a)}),Object(N.jsx)(l.a,{orientation:"vertical",flexItem:!0,className:t.dividerVertical}),Object(N.jsx)(O.a,{variant:"outlined",color:"primary",onClick:function(){n(Object(E.I)(a===w.m.left?w.m.right:w.m.left))},children:e("design.direction.switch")})]})}),[t.dividerVertical,a,e,n])},M=function(){var e=Object(d.a)().t,t=Object(k.b)(),n=Object(k.c)((function(e){return e.param.platform_num}));return i.a.useMemo((function(){return Object(N.jsxs)(b.a,{children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(m.a,{children:"looks_one"})}),Object(N.jsx)(f.a,{primary:e("design.platform")}),Object(N.jsx)(g.a,{value:n,onChange:function(e){var n=e.target.value;t(Object(E.Q)(n))}})]})}),[n,t,e])},z=function(){var e=Object(d.a)().t,t=S(),n=Object(k.b)(),i=Object(k.c)((function(e){return e.param.platform_num}));return Object(a.useMemo)((function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(b.a,{children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(m.a,{children:"looks_one"})}),Object(N.jsx)(f.a,{primary:e("design.platform")}),Object(N.jsx)(x.a,{children:Object(N.jsx)(v.a,{color:"primary",checked:!1!==i,onChange:function(e,t){n(t?Object(E.Q)(""):Object(E.Q)(!1))}})})]}),Object(N.jsx)(y.a,{in:!1!==i,unmountOnExit:!0,children:Object(N.jsx)(o.a,{component:"div",disablePadding:!0,className:t.nestedList,children:Object(N.jsx)(b.a,{children:Object(N.jsx)(g.a,{placeholder:e("design.platform"),value:i,onChange:function(e){var t=e.target.value;n(Object(E.Q)(t))}})})})})]})}),[i,t.nestedList,e,n])},F=i.a.lazy((function(){return n.e(125).then(n.bind(null,351))})),I=i.a.lazy((function(){return Promise.all([n.e(117),n.e(124)]).then(n.bind(null,352))})),W=i.a.lazy((function(){return n.e(126).then(n.bind(null,353))})),H=function(){var e=Object(k.c)((function(e){return e.param.style}));return Object(N.jsx)(r.a,{container:!0,spacing:3,justifyContent:"center",alignItems:"flex-start",children:Object(N.jsx)(r.a,{item:!0,xs:12,sm:10,md:7,lg:5,children:Object(N.jsx)(c.a,{children:Object(N.jsxs)(o.a,{component:"div",disablePadding:!0,children:[Object(N.jsx)(U,{}),e===w.k.MTR&&Object(N.jsxs)(i.a.Suspense,{fallback:Object(N.jsx)(s.a,{}),children:[Object(N.jsx)(l.a,{}),Object(N.jsx)(F,{})]}),e===w.k.GZMTR&&Object(N.jsxs)(i.a.Suspense,{fallback:Object(N.jsx)(s.a,{}),children:[Object(N.jsx)(l.a,{}),Object(N.jsx)(I,{})]}),e===w.k.SHMetro&&Object(N.jsxs)(i.a.Suspense,{fallback:Object(N.jsx)(s.a,{}),children:[Object(N.jsx)(l.a,{}),Object(N.jsx)(W,{})]})]})})})})};t.default=H}}]);
//# sourceMappingURL=panelDesign.2d0fc773.chunk.js.map