(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[102],{235:function(e,t,n){var a={"./README.md":[248,97],"./baku":[187,4],"./baku.ts":[187,4],"./barcelona":[188,15],"./barcelona.ts":[188,15],"./beijing":[189,26],"./beijing.ts":[189,26],"./changsha":[190,37],"./changsha.ts":[190,37],"./chengdu":[191,47],"./chengdu.ts":[191,47],"./chongqing":[192,5],"./chongqing.ts":[192,5],"./delhi":[193,6],"./delhi.ts":[193,6],"./dongguan":[194,7],"./dongguan.ts":[194,7],"./dortmund":[195,8],"./dortmund.ts":[195,8],"./edinburgh":[196,9],"./edinburgh.ts":[196,9],"./foshan":[197,10],"./foshan.ts":[197,10],"./glasgow":[198,11],"./glasgow.ts":[198,11],"./guangzhou":[199,12],"./guangzhou.ts":[199,12],"./hangzhou":[200,13],"./hangzhou.ts":[200,13],"./hongkong":[201,14],"./hongkong.ts":[201,14],"./istanbul":[202,16],"./istanbul.ts":[202,16],"./kansai":[203,17],"./kansai.ts":[203,17],"./kaohsiung":[204,18],"./kaohsiung.ts":[204,18],"./london":[205,19],"./london.ts":[205,19],"./macao":[206,20],"./macao.ts":[206,20],"./madrid":[207,21],"./madrid.ts":[207,21],"./nanjing":[208,22],"./nanjing.ts":[208,22],"./newtaipei":[209,23],"./newtaipei.ts":[209,23],"./osaka":[210,24],"./osaka.ts":[210,24],"./oslo":[211,25],"./oslo.ts":[211,25],"./other":[212,27],"./other.ts":[212,27],"./paris":[213,28],"./paris.ts":[213,28],"./qingdao":[214,29],"./qingdao.ts":[214,29],"./sanfrancisco":[215,30],"./sanfrancisco.ts":[215,30],"./sanktpeterburg":[216,31],"./sanktpeterburg.ts":[216,31],"./saopaulo":[217,32],"./saopaulo.ts":[217,32],"./seoul":[218,33],"./seoul.ts":[218,33],"./shanghai":[219,34],"./shanghai.ts":[219,34],"./shenzhen":[220,35],"./shenzhen.ts":[220,35],"./singapore":[221,36],"./singapore.ts":[221,36],"./stockholm":[222,38],"./stockholm.ts":[222,38],"./taipei":[223,39],"./taipei.ts":[223,39],"./tehran":[224,40],"./tehran.ts":[224,40],"./tianjin":[225,41],"./tianjin.ts":[225,41],"./tokyo":[226,42],"./tokyo.ts":[226,42],"./toronto":[227,43],"./toronto.ts":[227,43],"./tyneandwear":[228,44],"./tyneandwear.ts":[228,44],"./xiamen":[229,45],"./xiamen.ts":[229,45],"./xian":[230,46],"./xian.ts":[230,46]};function i(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(a)},i.id=235,e.exports=i},241:function(e,t,n){"use strict";var a=n(3),i=n(30),r=n(41),c=n(9),o=n(0),s=n.n(o),l=n(137),u=n(157),d=n(178),j=n(343),h=n(316),b=n(317),p=n(168),m=n(170),f=n(318),O=n(301),g=n(132),x=n(131),v=n(167),y=n(349),C=n(352),k=n(315),w=n(175),E=n(171),N=n(12),S=n.n(N),U=n(22),R=n(337),M=n(169),F=n(177),I=n(336),W=n(73),z=n(84),H=n(6),A=n(2),P=Object(u.a)((function(){return Object(d.a)({cityItem:{display:"flex",flexDirection:"row",alignItems:"center"},menuItemSpan:{padding:"0 .3rem"},button:{borderRadius:"50%",height:24,width:24,minWidth:0,marginRight:8,padding:0},inputColour:{position:"absolute",width:0,height:0,left:27,top:32},buttonContainer:{display:"flex",flexShrink:1}})})),D=function(e){var t=Object(l.a)(),c=t.t,u=t.i18n,d=P(),j=function(e){var t=s.a.useState([]),r=Object(i.a)(t,2),c=r[0],l=r[1],u=e[0]?n(235)("./".concat(e[0])).then((function(e){return e.default})):Promise.resolve([]);return Object(o.useEffect)((function(){"undefined"!==typeof e[0]&&Object(U.a)(S.a.mark((function t(){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u;case 2:n=t.sent,l(e[0]===z.a.Other?[Object(a.a)(Object(a.a)({},n[0]),{},{colour:e[2],fg:e[3]||H.h.white})]:n);case 4:case"end":return t.stop()}}),t)})))()}),[e.toString()]),c}(e.theme);Object(o.useEffect)((function(){if(0!==j.length&&!j.filter((function(t){return t.id===e.theme[1]})).length){var t=j[0],n=t.id,a=t.colour,i=t.fg,r=[e.theme[0],n,a,i||H.h.white];e.onUpdate("theme",r)}}),[j]);return Object(A.jsxs)(p.a,{component:"div",disablePadding:!0,children:[Object(A.jsx)(B,{value:e.theme[0],onChange:function(t){return e.onUpdate("theme",[t.target.value].concat(Object(r.a)(e.theme.slice(1))))}}),Object(A.jsx)(m.a,{variant:"middle"}),Object(A.jsxs)(g.a,{children:[Object(A.jsx)(k.a,{primary:c("colour.line")}),Object(A.jsx)(R.a,{select:!0,style:{width:166},onChange:function(t){var n=t.target.value,a=j.filter((function(e){return e.id===n}))[0],i=a.colour,r=a.fg,c=[e.theme[0],n,i,r||H.h.white];e.onUpdate("theme",c)},value:e.theme[1],disabled:"other"===e.theme[0],children:j.map((function(e){return Object(A.jsx)(M.a,{value:e.id,children:Object(A.jsx)("span",{className:d.menuItemSpan,style:{backgroundColor:e.colour,color:e.fg||H.h.white},children:Object(W.b)(e.name,u.languages)})},e.id)}))})]})]})},_=function(e){var t=Object(l.a)().t,n=P(),a=Object(o.useState)(e.theme[2]),c=Object(i.a)(a,2),s=c[0],u=c[1];Object(o.useEffect)((function(){return u(e.theme[2])}),[e.theme[2]]);return Object(A.jsxs)(p.a,{component:"div",disablePadding:!0,children:[Object(A.jsxs)(g.a,{children:[Object(A.jsx)(k.a,{primary:t("colour.colour")}),Object(A.jsxs)("div",{className:n.buttonContainer,children:[Object(A.jsx)("input",{type:"color",id:"input-color",value:e.theme[2],onChange:function(t){var n=t.target.value;e.onUpdate("theme",[z.a.Other,"other",n,e.theme[3]])},className:n.inputColour,style:{opacity:0}}),Object(A.jsx)("label",{htmlFor:"input-color",children:Object(A.jsx)(F.a,{title:t("colour.tooltip")||"","aria-label":"colour picker",children:Object(A.jsx)(O.a,{className:n.button,style:{backgroundColor:e.theme[2],borderColor:e.theme[3]||H.h.white},variant:"contained",component:"span",children:" "})})})]}),Object(A.jsx)(R.a,{error:!(null===s||void 0===s?void 0:s.match(/^#[0-9a-fA-F]{6}$/g)),style:{width:85},onChange:function(t){var n=t.target.value;if(null!==n.match(/^#[0-9a-fA-F]{0,6}$/))if(u(n),"other"!==e.theme[0])if(null!==n.match(/^#[0-9a-fA-f]{6}$/)){var a=[z.a.Other,"other",n,e.theme[3]];e.onUpdate("theme",a)}else{var i=[z.a.Other,"other"].concat(Object(r.a)(e.theme.slice(2)));e.onUpdate("theme",i)}else if(null!==n.match(/^#[0-9a-fA-F]{6}$/)){var c=e.theme.map((function(e,t){return 2===t?n:e}));e.onUpdate("theme",c)}},value:null===s||void 0===s?void 0:s.toUpperCase()})]}),Object(A.jsx)(m.a,{variant:"middle"}),Object(A.jsxs)(g.a,{children:[Object(A.jsx)(k.a,{primary:t("colour.fg")}),Object(A.jsxs)(I.a,{native:!0,style:{width:85},label:t("colour.fg"),onChange:function(t){var n=[z.a.Other,"other",e.theme[2],t.target.value];e.onUpdate("theme",n)},value:e.theme[3]||H.h.white,children:[Object(A.jsx)("option",{value:"#fff",children:t("colour.fgWhite")}),Object(A.jsx)("option",{value:"#000",children:t("colour.fgBlack")})]})]})]})},B=function(e){var t=Object(l.a)(),n=t.t,a=t.i18n,i=P(),r=Object(o.useMemo)((function(){return z.b.map((function(e){return Object(A.jsx)(M.a,{value:e.id,children:Object(A.jsxs)("span",{className:i.cityItem,children:[Object(A.jsx)(T,{code:e.country}),Object(A.jsx)("span",{children:Object(W.b)(e.name,a.languages)})]})},e.id)}))}),[]);return Object(A.jsxs)(g.a,{children:[Object(A.jsx)(k.a,{primary:n("colour.city")}),Object(A.jsx)(R.a,{select:!0,style:{width:166},value:e.value,onChange:e.onChange,children:r})]})},L=Object(u.a)((function(){return Object(d.a)({img:{height:20,marginRight:"0.2rem"}})}));function T(e){var t=Object(l.a)().i18n,n=L(),a=[];return a=2===e.code.length?e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+127397).toString(16).toUpperCase()})):["1F3F4"].concat(e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+917536).toString(16).toUpperCase()})),"E007F"),[H.f.ChineseCN,H.f.ChineseSimp].includes(t.language)&&"TW"===e.code&&(a=["1F3F4"]),-1!==navigator.platform.indexOf("Win32")||-1!==navigator.platform.indexOf("Win64")?Object(A.jsx)("img",{src:"/RailMapGenerator"+"/images/flags/".concat(a.join("-"),".svg"),className:n.img,alt:"Flag of ".concat(e.code)}):Object(A.jsx)("span",{children:String.fromCodePoint.apply(String,Object(r.a)(a.map((function(e){return parseInt(e,16)}))))})}var q=n(21),J=Object(u.a)((function(e){return Object(d.a)({contentWrapper:Object(c.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentLeft:{maxWidth:280},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",width:270},paperRoot:{maxWidth:250},listItemPaper:{justifyContent:"center"},iconRoot:{position:"absolute",color:e.palette.action.active},inputBaseRoot:{display:"block"},inputBaseInputZH:{textAlign:"center",fontSize:36,padding:0,paddingTop:6,height:45},inputBaseInputEN:{textAlign:"center",fontSize:18,padding:0,paddingBottom:6,height:"auto"},chipWrapper:{overflowX:"auto",display:"flex"},chipRoot:{borderRadius:4.5,height:32,lineHeight:"1rem",margin:2},chipLabel:{padding:"0 6px","& > span":{display:"block",textAlign:"center"},"& > span:first-child":{fontSize:"1rem"},"& > span:last-child":{lineHeight:"0.8rem"}}})})),Q=function(e){var t=Object(l.a)().t,n=J();return Object(A.jsxs)(j.a,{open:e.open,onClose:e.onClose,children:[Object(A.jsx)(h.a,{children:t("colour.title")}),Object(A.jsxs)(b.a,{className:n.contentWrapper,children:[Object(A.jsxs)(p.a,{component:"div",disablePadding:!0,className:n.contentLeft,children:[Object(A.jsx)($,{theme:e.theme,lineName:e.lineName,onUpdate:e.onUpdate}),Object(A.jsx)(m.a,{}),Object(A.jsx)(G,{onUpdate:e.onUpdate})]}),Object(A.jsx)("div",{className:n.contentControl,children:Object(A.jsx)(V,{theme:e.theme,onUpdate:e.onUpdate})})]}),Object(A.jsx)(f.a,{children:Object(A.jsx)(O.a,{onClick:e.onClose,color:"primary",children:t("dialog.done")})})]})},$=function(e){var t=J(),n=function(t,n){var a=e.lineName.map((function(e,a){return a===n?t:e}));e.onUpdate("name",a)};return Object(A.jsx)(g.a,{style:{justifyContent:"center"},children:Object(A.jsxs)(x.a,{className:t.paperRoot,style:{backgroundColor:e.theme[2]},children:[Object(A.jsx)(v.a,{className:t.iconRoot,children:"edit"}),Object(A.jsx)(y.a,{value:e.lineName[0],classes:{root:t.inputBaseRoot,input:t.inputBaseInputZH},style:{color:e.theme[3]||H.h.white},onChange:function(e){return n(e.target.value,0)},autoFocus:!0}),Object(A.jsx)(y.a,{value:e.lineName[1],classes:{root:t.inputBaseRoot,input:t.inputBaseInputEN},style:{color:e.theme[3]||H.h.white},onChange:function(e){return n(e.target.value,1)}})]})})},G=function(e){var t=Object(l.a)().t,n=J(),a=Object(q.c)((function(e){return e.param.theme})),i=Object(q.c)((function(e){return e.param.line_name})),c=Object(q.c)((function(e){return e.param.stn_list})),s=Object(o.useMemo)((function(){return new Set(Object.values(c).reduce((function(e,t){var n=t.transfer.info;return e.concat.apply(e,Object(r.a)(n))}),[[].concat(Object(r.a)(a),Object(r.a)(i))]).map((function(e){return JSON.stringify(e)})).reverse())}),[]),u=Object(o.useMemo)((function(){return Object(r.a)(s).map((function(t,a){var i=JSON.parse(t),r=i.slice(4).map((function(e,t){return Object(A.jsx)("span",{style:{color:i[3]},children:e},t)}));return Object(A.jsx)(C.a,{onClick:function(){e.onUpdate("theme",i.slice(0,4)),e.onUpdate("name",i.slice(4))},style:{backgroundColor:i[2]},className:n.chipRoot,classes:{label:n.chipLabel},label:r},a)}))}),[]);return Object(A.jsx)(g.a,{children:Object(A.jsx)(k.a,{primary:t("colour.recent"),secondary:u,secondaryTypographyProps:{component:"div"},classes:{secondary:n.chipWrapper}})})},V=function(e){var t=Object(l.a)().t,n=Object(o.useState)("other"===e.theme[0]?1:0),r=Object(i.a)(n,2),c=r[0],s=r[1],u=Object(A.jsxs)(w.a,{value:c,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return s(t)},variant:"fullWidth",scrollButtons:"off",children:[Object(A.jsx)(E.a,{label:t("colour.palette"),style:{minWidth:"unset"}}),Object(A.jsx)(E.a,{label:t("colour.custom"),style:{minWidth:"unset"}})]}),d=function(t){switch(t){case 0:return Object(A.jsx)(D,Object(a.a)({},e));case 1:return Object(A.jsx)(_,Object(a.a)({},e));default:return Object(A.jsx)(A.Fragment,{})}}(c);return Object(A.jsxs)(A.Fragment,{children:[u,d]})};t.a=Q},247:function(e,t,n){"use strict";var a=n(1),i=n(37),r=n(4),c=n(0),o=n(5),s=(n(8),n(134)),l=n(7),u=n(82),d=n(61),j=n(34),h=n(16),b=c.forwardRef((function(e,t){var n=e.children,l=e.classes,b=e.className,p=e.collapsedHeight,m=e.collapsedSize,f=void 0===m?"0px":m,O=e.component,g=void 0===O?"div":O,x=e.disableStrictModeCompat,v=void 0!==x&&x,y=e.in,C=e.onEnter,k=e.onEntered,w=e.onEntering,E=e.onExit,N=e.onExited,S=e.onExiting,U=e.style,R=e.timeout,M=void 0===R?u.b.standard:R,F=e.TransitionComponent,I=void 0===F?s.a:F,W=Object(r.a)(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),z=Object(j.a)(),H=c.useRef(),A=c.useRef(null),P=c.useRef(),D="number"===typeof(p||f)?"".concat(p||f,"px"):p||f;c.useEffect((function(){return function(){clearTimeout(H.current)}}),[]);var _=z.unstable_strictMode&&!v,B=c.useRef(null),L=Object(h.a)(t,_?B:void 0),T=function(e){return function(t,n){if(e){var a=_?[B.current,t]:[t,n],r=Object(i.a)(a,2),c=r[0],o=r[1];void 0===o?e(c):e(c,o)}}},q=T((function(e,t){e.style.height=D,C&&C(e,t)})),J=T((function(e,t){var n=A.current?A.current.clientHeight:0,a=Object(d.a)({style:U,timeout:M},{mode:"enter"}).duration;if("auto"===M){var i=z.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),P.current=i}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),w&&w(e,t)})),Q=T((function(e,t){e.style.height="auto",k&&k(e,t)})),$=T((function(e){var t=A.current?A.current.clientHeight:0;e.style.height="".concat(t,"px"),E&&E(e)})),G=T(N),V=T((function(e){var t=A.current?A.current.clientHeight:0,n=Object(d.a)({style:U,timeout:M},{mode:"exit"}).duration;if("auto"===M){var a=z.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),P.current=a}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=D,S&&S(e)}));return c.createElement(I,Object(a.a)({in:y,onEnter:q,onEntered:Q,onEntering:J,onExit:$,onExited:G,onExiting:V,addEndListener:function(e,t){var n=_?e:t;"auto"===M&&(H.current=setTimeout(n,P.current||0))},nodeRef:_?B:void 0,timeout:"auto"===M?null:M},W),(function(e,t){return c.createElement(g,Object(a.a)({className:Object(o.a)(l.root,l.container,b,{entered:l.entered,exited:!y&&"0px"===D&&l.hidden}[e]),style:Object(a.a)({minHeight:D},U),ref:L},t),c.createElement("div",{className:l.wrapper,ref:A},c.createElement("div",{className:l.wrapperInner},n)))}))}));b.muiSupportAuto=!0,t.a=Object(l.a)((function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(b)},344:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(323),c=n(131),o=n(168),s=n(174),l=n(170),u=n(30),d=n(137),j=n(157),h=n(178),b=n(132),p=n(314),m=n(167),f=n(315),O=n(301),g=n(337),x=n(319),v=n(246),y=n(247),C=n(241),k=n(21),w=n(6),E=n(14),N=n(2),S=Object(j.a)((function(e){return Object(h.a)({dividerVertical:{margin:e.spacing(0,2)},nestedList:{paddingLeft:e.spacing(5)}})})),U=function(){var e=Object(d.a)().t,t=Object(k.b)(),n=Object(k.c)((function(e){return e.param.style})),a=Object(k.c)((function(e){return e.param.line_name})),r=Object(k.c)((function(e){return e.param.theme})),c=i.a.useState(!1),o=Object(u.a)(c,2),s=o[0],j=o[1];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(b.a,{button:!0,onClick:function(){return j(!0)},children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(m.a,{children:"color_lens"})}),Object(N.jsx)(f.a,{primary:e("design.theme"),secondary:Object(N.jsx)("span",{style:{backgroundColor:r[2],color:r[3],padding:".1rem .3rem"},children:Object.values(a).join()})}),Object(N.jsx)(m.a,{color:"action",children:"arrow_right"})]}),Object(N.jsx)(C.a,{open:s,theme:r,lineName:a,onUpdate:function(e,n){"name"===e&&t(Object(E.M)(Object.values(n))),"theme"===e&&t(Object(E.W)(n))},onClose:function(){return j(!1)}}),Object(N.jsx)(l.a,{}),Object(N.jsx)(R,{}),Object(N.jsx)(l.a,{}),n===w.k.SHMetro?Object(N.jsx)(F,{}):Object(N.jsx)(M,{})]})},R=function(){var e=Object(d.a)().t,t=S(),n=Object(k.b)(),a=Object(k.c)((function(e){return e.param.direction}));return i.a.useMemo((function(){return Object(N.jsxs)(b.a,{children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(m.a,{children:"directions"})}),Object(N.jsx)(f.a,{primary:e("design.direction.button"),secondary:e("design.direction."+a)}),Object(N.jsx)(l.a,{orientation:"vertical",flexItem:!0,className:t.dividerVertical}),Object(N.jsx)(O.a,{variant:"outlined",color:"primary",onClick:function(){n(Object(E.I)(a===w.m.left?w.m.right:w.m.left))},children:e("design.direction.switch")})]})}),[t.dividerVertical,a,e,n])},M=function(){var e=Object(d.a)().t,t=Object(k.b)(),n=Object(k.c)((function(e){return e.param.platform_num}));return i.a.useMemo((function(){return Object(N.jsxs)(b.a,{children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(m.a,{children:"looks_one"})}),Object(N.jsx)(f.a,{primary:e("design.platform")}),Object(N.jsx)(g.a,{value:n,onChange:function(e){var n=e.target.value;t(Object(E.Q)(n))}})]})}),[n,t,e])},F=function(){var e=Object(d.a)().t,t=S(),n=Object(k.b)(),i=Object(k.c)((function(e){return e.param.platform_num}));return Object(a.useMemo)((function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(b.a,{children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(m.a,{children:"looks_one"})}),Object(N.jsx)(f.a,{primary:e("design.platform")}),Object(N.jsx)(x.a,{children:Object(N.jsx)(v.a,{color:"primary",checked:!1!==i,onChange:function(e,t){n(t?Object(E.Q)(""):Object(E.Q)(!1))}})})]}),Object(N.jsx)(y.a,{in:!1!==i,unmountOnExit:!0,children:Object(N.jsx)(o.a,{component:"div",disablePadding:!0,className:t.nestedList,children:Object(N.jsx)(b.a,{children:Object(N.jsx)(g.a,{placeholder:e("design.platform"),value:i,onChange:function(e){var t=e.target.value;n(Object(E.Q)(t))}})})})})]})}),[i,t.nestedList,e,n])},I=i.a.lazy((function(){return n.e(104).then(n.bind(null,329))})),W=i.a.lazy((function(){return Promise.all([n.e(96),n.e(103)]).then(n.bind(null,330))})),z=i.a.lazy((function(){return n.e(105).then(n.bind(null,331))})),H=function(){var e=Object(k.c)((function(e){return e.param.style}));return Object(N.jsx)(r.a,{container:!0,spacing:3,justifyContent:"center",alignItems:"flex-start",children:Object(N.jsx)(r.a,{item:!0,xs:12,sm:10,md:7,lg:5,children:Object(N.jsx)(c.a,{children:Object(N.jsxs)(o.a,{component:"div",disablePadding:!0,children:[Object(N.jsx)(U,{}),e===w.k.MTR&&Object(N.jsxs)(i.a.Suspense,{fallback:Object(N.jsx)(s.a,{}),children:[Object(N.jsx)(l.a,{}),Object(N.jsx)(I,{})]}),e===w.k.GZMTR&&Object(N.jsxs)(i.a.Suspense,{fallback:Object(N.jsx)(s.a,{}),children:[Object(N.jsx)(l.a,{}),Object(N.jsx)(W,{})]}),e===w.k.SHMetro&&Object(N.jsxs)(i.a.Suspense,{fallback:Object(N.jsx)(s.a,{}),children:[Object(N.jsx)(l.a,{}),Object(N.jsx)(z,{})]})]})})})})};t.default=H}}]);
//# sourceMappingURL=panelDesign.71fed7b2.chunk.js.map