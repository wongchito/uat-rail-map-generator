(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[124],{238:function(e,t,n){var a={"./README.md":[251,107],"./baku":[187,4],"./baku.ts":[187,4],"./barcelona":[188,15],"./barcelona.ts":[188,15],"./beijing":[189,26],"./beijing.ts":[189,26],"./cairo":[190,37],"./cairo.ts":[190,37],"./changsha":[191,48],"./changsha.ts":[191,48],"./chengdu":[192,5],"./chengdu.ts":[192,5],"./chongqing":[193,6],"./chongqing.ts":[193,6],"./delhi":[194,7],"./delhi.ts":[194,7],"./dongguan":[195,8],"./dongguan.ts":[195,8],"./dortmund":[196,9],"./dortmund.ts":[196,9],"./edinburgh":[197,10],"./edinburgh.ts":[197,10],"./foshan":[198,11],"./foshan.ts":[198,11],"./glasgow":[199,12],"./glasgow.ts":[199,12],"./guangzhou":[200,13],"./guangzhou.ts":[200,13],"./hangzhou":[201,14],"./hangzhou.ts":[201,14],"./hongkong":[202,16],"./hongkong.ts":[202,16],"./istanbul":[203,17],"./istanbul.ts":[203,17],"./kansai":[204,18],"./kansai.ts":[204,18],"./kaohsiung":[205,19],"./kaohsiung.ts":[205,19],"./klangvalley":[206,20],"./klangvalley.ts":[206,20],"./london":[207,21],"./london.ts":[207,21],"./macao":[208,22],"./macao.ts":[208,22],"./madrid":[209,23],"./madrid.ts":[209,23],"./nanjing":[210,24],"./nanjing.ts":[210,24],"./newtaipei":[211,25],"./newtaipei.ts":[211,25],"./osaka":[212,27],"./osaka.ts":[212,27],"./oslo":[213,28],"./oslo.ts":[213,28],"./other":[214,29],"./other.ts":[214,29],"./paris":[215,30],"./paris.ts":[215,30],"./qingdao":[216,31],"./qingdao.ts":[216,31],"./sanfrancisco":[217,32],"./sanfrancisco.ts":[217,32],"./sanktpeterburg":[218,33],"./sanktpeterburg.ts":[218,33],"./santiago":[219,34],"./santiago.ts":[219,34],"./saopaulo":[220,35],"./saopaulo.ts":[220,35],"./seoul":[221,36],"./seoul.ts":[221,36],"./shanghai":[222,38],"./shanghai.ts":[222,38],"./shenzhen":[223,39],"./shenzhen.ts":[223,39],"./singapore":[224,40],"./singapore.ts":[224,40],"./stockholm":[225,41],"./stockholm.ts":[225,41],"./taipei":[226,42],"./taipei.ts":[226,42],"./tehran":[227,43],"./tehran.ts":[227,43],"./tianjin":[228,44],"./tianjin.ts":[228,44],"./tokyo":[229,45],"./tokyo.ts":[229,45],"./toronto":[230,46],"./toronto.ts":[230,46],"./tyneandwear":[231,47],"./tyneandwear.ts":[231,47],"./xiamen":[232,49],"./xiamen.ts":[232,49],"./xian":[233,50],"./xian.ts":[233,50]};function i(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(a)},i.id=238,e.exports=i},242:function(e,t,n){"use strict";var a=n(3),i=n(30),c=n(41),r=n(9),o=n(0),s=n.n(o),l=n(137),j=n(157),d=n(178),u=n(362),h=n(334),b=n(335),p=n(168),m=n(170),O=n(336),g=n(311),f=n(132),x=n(131),v=n(167),y=n(367),C=n(370),k=n(333),w=n(175),I=n(171),N=n(12),S=n.n(N),U=n(22),_=n(356),R=n(169),F=n(177),T=n(355),A=n(74),H=n(84),D=n(6),M=n(2),E=Object(j.a)((function(){return Object(d.a)({cityItem:{display:"flex",flexDirection:"row",alignItems:"center"},menuItemSpan:{padding:"0 .3rem"},button:{borderRadius:"50%",height:24,width:24,minWidth:0,marginRight:8,padding:0},inputColour:{position:"absolute",width:0,height:0,left:27,top:32},buttonContainer:{display:"flex",flexShrink:1}})})),W=function(e){var t=Object(l.a)(),r=t.t,j=t.i18n,d=E(),u=function(e){var t=s.a.useState([]),c=Object(i.a)(t,2),r=c[0],l=c[1],j=e[0]?n(238)("./".concat(e[0])).then((function(e){return e.default})):Promise.resolve([]);return Object(o.useEffect)((function(){"undefined"!==typeof e[0]&&Object(U.a)(S.a.mark((function t(){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j;case 2:n=t.sent,l(e[0]===H.a.Other?[Object(a.a)(Object(a.a)({},n[0]),{},{colour:e[2],fg:e[3]||D.h.white})]:n);case 4:case"end":return t.stop()}}),t)})))()}),[e.toString()]),r}(e.theme);Object(o.useEffect)((function(){if(0!==u.length&&!u.filter((function(t){return t.id===e.theme[1]})).length){var t=u[0],n=t.id,a=t.colour,i=t.fg,c=[e.theme[0],n,a,i||D.h.white];e.onUpdate("theme",c)}}),[u]);return Object(M.jsxs)(p.a,{component:"div",disablePadding:!0,children:[Object(M.jsx)(B,{value:e.theme[0],onChange:function(t){return e.onUpdate("theme",[t.target.value].concat(Object(c.a)(e.theme.slice(1))))}}),Object(M.jsx)(m.a,{variant:"middle"}),Object(M.jsxs)(f.a,{children:[Object(M.jsx)(k.a,{primary:r("colour.line")}),Object(M.jsx)(_.a,{select:!0,style:{width:166},onChange:function(t){var n=t.target.value,a=u.filter((function(e){return e.id===n}))[0],i=a.colour,c=a.fg,r=[e.theme[0],n,i,c||D.h.white];e.onUpdate("theme",r)},value:e.theme[1],disabled:"other"===e.theme[0],children:u.map((function(e){return Object(M.jsx)(R.a,{value:e.id,children:Object(M.jsx)("span",{className:d.menuItemSpan,style:{backgroundColor:e.colour,color:e.fg||D.h.white},children:Object(A.b)(e.name,j.languages)})},e.id)}))})]})]})},z=function(e){var t=Object(l.a)().t,n=E(),a=Object(o.useState)(e.theme[2]),r=Object(i.a)(a,2),s=r[0],j=r[1];Object(o.useEffect)((function(){return j(e.theme[2])}),[e.theme[2]]);return Object(M.jsxs)(p.a,{component:"div",disablePadding:!0,children:[Object(M.jsxs)(f.a,{children:[Object(M.jsx)(k.a,{primary:t("colour.colour")}),Object(M.jsxs)("div",{className:n.buttonContainer,children:[Object(M.jsx)("input",{type:"color",id:"input-color",value:e.theme[2],onChange:function(t){var n=t.target.value;e.onUpdate("theme",[H.a.Other,"other",n,e.theme[3]])},className:n.inputColour,style:{opacity:0}}),Object(M.jsx)("label",{htmlFor:"input-color",children:Object(M.jsx)(F.a,{title:t("colour.tooltip")||"","aria-label":"colour picker",children:Object(M.jsx)(g.a,{className:n.button,style:{backgroundColor:e.theme[2],borderColor:e.theme[3]||D.h.white},variant:"contained",component:"span",children:" "})})})]}),Object(M.jsx)(_.a,{error:!(null===s||void 0===s?void 0:s.match(/^#[0-9a-fA-F]{6}$/g)),style:{width:85},onChange:function(t){var n=t.target.value;if(null!==n.match(/^#[0-9a-fA-F]{0,6}$/))if(j(n),"other"!==e.theme[0])if(null!==n.match(/^#[0-9a-fA-f]{6}$/)){var a=[H.a.Other,"other",n,e.theme[3]];e.onUpdate("theme",a)}else{var i=[H.a.Other,"other"].concat(Object(c.a)(e.theme.slice(2)));e.onUpdate("theme",i)}else if(null!==n.match(/^#[0-9a-fA-F]{6}$/)){var r=e.theme.map((function(e,t){return 2===t?n:e}));e.onUpdate("theme",r)}},value:null===s||void 0===s?void 0:s.toUpperCase()})]}),Object(M.jsx)(m.a,{variant:"middle"}),Object(M.jsxs)(f.a,{children:[Object(M.jsx)(k.a,{primary:t("colour.fg")}),Object(M.jsxs)(T.a,{native:!0,style:{width:85},label:t("colour.fg"),onChange:function(t){var n=[H.a.Other,"other",e.theme[2],t.target.value];e.onUpdate("theme",n)},value:e.theme[3]||D.h.white,children:[Object(M.jsx)("option",{value:"#fff",children:t("colour.fgWhite")}),Object(M.jsx)("option",{value:"#000",children:t("colour.fgBlack")})]})]})]})},B=function(e){var t=Object(l.a)(),n=t.t,a=t.i18n,i=E(),c=Object(o.useMemo)((function(){return H.b.map((function(e){return Object(M.jsx)(R.a,{value:e.id,children:Object(M.jsxs)("span",{className:i.cityItem,children:[Object(M.jsx)(P,{code:e.country}),Object(M.jsx)("span",{children:Object(A.b)(e.name,a.languages)})]})},e.id)}))}),[]);return Object(M.jsxs)(f.a,{children:[Object(M.jsx)(k.a,{primary:n("colour.city")}),Object(M.jsx)(_.a,{select:!0,style:{width:166},value:e.value,onChange:e.onChange,children:c})]})},L=Object(j.a)((function(){return Object(d.a)({img:{height:20,marginRight:"0.2rem"}})}));function P(e){var t=Object(l.a)().i18n,n=L(),a=[];return a=2===e.code.length?e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+127397).toString(16).toUpperCase()})):["1F3F4"].concat(e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+917536).toString(16).toUpperCase()})),"E007F"),[D.f.ChineseCN,D.f.ChineseSimp].includes(t.language)&&"TW"===e.code&&(a=["1F3F4"]),-1!==navigator.platform.indexOf("Win32")||-1!==navigator.platform.indexOf("Win64")?Object(M.jsx)("img",{src:"/uat-rail-map-generator"+"/images/flags/".concat(a.join("-"),".svg"),className:n.img,alt:"Flag of ".concat(e.code)}):Object(M.jsx)("span",{children:String.fromCodePoint.apply(String,Object(c.a)(a.map((function(e){return parseInt(e,16)}))))})}var Z=n(21),q=Object(j.a)((function(e){return Object(d.a)({contentWrapper:Object(r.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentLeft:{maxWidth:280},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",width:270},paperRoot:{maxWidth:250},listItemPaper:{justifyContent:"center"},iconRoot:{position:"absolute",color:e.palette.action.active},inputBaseRoot:{display:"block"},inputBaseInputZH:{textAlign:"center",fontSize:36,padding:0,paddingTop:6,height:45},inputBaseInputEN:{textAlign:"center",fontSize:18,padding:0,paddingBottom:6,height:"auto"},chipWrapper:{overflowX:"auto",display:"flex"},chipRoot:{borderRadius:4.5,height:32,lineHeight:"1rem",margin:2},chipLabel:{padding:"0 6px","& > span":{display:"block",textAlign:"center"},"& > span:first-child":{fontSize:"1rem"},"& > span:last-child":{lineHeight:"0.8rem"}}})})),J=function(e){var t=Object(l.a)().t,n=q();return Object(M.jsxs)(u.a,{open:e.open,onClose:e.onClose,children:[Object(M.jsx)(h.a,{children:t("colour.title")}),Object(M.jsxs)(b.a,{className:n.contentWrapper,children:[Object(M.jsxs)(p.a,{component:"div",disablePadding:!0,className:n.contentLeft,children:[Object(M.jsx)($,{theme:e.theme,lineName:e.lineName,onUpdate:e.onUpdate}),Object(M.jsx)(m.a,{}),Object(M.jsx)(G,{onUpdate:e.onUpdate})]}),Object(M.jsx)("div",{className:n.contentControl,children:Object(M.jsx)(X,{theme:e.theme,onUpdate:e.onUpdate})})]}),Object(M.jsx)(O.a,{children:Object(M.jsx)(g.a,{onClick:e.onClose,color:"primary",children:t("dialog.done")})})]})},$=function(e){var t=q(),n=function(t,n){var a=e.lineName.map((function(e,a){return a===n?t:e}));e.onUpdate("name",a)};return Object(M.jsx)(f.a,{style:{justifyContent:"center"},children:Object(M.jsxs)(x.a,{className:t.paperRoot,style:{backgroundColor:e.theme[2]},children:[Object(M.jsx)(v.a,{className:t.iconRoot,children:"edit"}),Object(M.jsx)(y.a,{value:e.lineName[0],classes:{root:t.inputBaseRoot,input:t.inputBaseInputZH},style:{color:e.theme[3]||D.h.white},onChange:function(e){return n(e.target.value,0)},autoFocus:!0}),Object(M.jsx)(y.a,{value:e.lineName[1],classes:{root:t.inputBaseRoot,input:t.inputBaseInputEN},style:{color:e.theme[3]||D.h.white},onChange:function(e){return n(e.target.value,1)}})]})})},G=function(e){var t=Object(l.a)().t,n=q(),a=Object(Z.c)((function(e){return e.param.theme})),i=Object(Z.c)((function(e){return e.param.line_name})),r=Object(Z.c)((function(e){return e.param.stn_list})),s=Object(o.useMemo)((function(){return new Set(Object.values(r).reduce((function(e,t){var n=t.transfer.info;return e.concat.apply(e,Object(c.a)(n))}),[[].concat(Object(c.a)(a),Object(c.a)(i))]).map((function(e){return JSON.stringify(e)})).reverse())}),[]),j=Object(o.useMemo)((function(){return Object(c.a)(s).map((function(t,a){var i=JSON.parse(t),c=i.slice(4).map((function(e,t){return Object(M.jsx)("span",{style:{color:i[3]},children:e},t)}));return Object(M.jsx)(C.a,{onClick:function(){e.onUpdate("theme",i.slice(0,4)),e.onUpdate("name",i.slice(4))},style:{backgroundColor:i[2]},className:n.chipRoot,classes:{label:n.chipLabel},label:c},a)}))}),[]);return Object(M.jsx)(f.a,{children:Object(M.jsx)(k.a,{primary:t("colour.recent"),secondary:j,secondaryTypographyProps:{component:"div"},classes:{secondary:n.chipWrapper}})})},X=function(e){var t=Object(l.a)().t,n=Object(o.useState)("other"===e.theme[0]?1:0),c=Object(i.a)(n,2),r=c[0],s=c[1],j=Object(M.jsxs)(w.a,{value:r,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return s(t)},variant:"fullWidth",scrollButtons:"off",children:[Object(M.jsx)(I.a,{label:t("colour.palette"),style:{minWidth:"unset"}}),Object(M.jsx)(I.a,{label:t("colour.custom"),style:{minWidth:"unset"}})]}),d=function(t){switch(t){case 0:return Object(M.jsx)(W,Object(a.a)({},e));case 1:return Object(M.jsx)(z,Object(a.a)({},e));default:return Object(M.jsx)(M.Fragment,{})}}(r);return Object(M.jsxs)(M.Fragment,{children:[j,d]})};t.a=J},371:function(e,t,n){"use strict";n.r(t);var a=n(41),i=n(30),c=n(0),r=n.n(c),o=n(137),s=n(168),l=n(132),j=n(333),d=n(337),u=n(177),h=n(166),b=n(167),p=n(170),m=n(311),O=n(157),g=n(178),f=n(370),x=n(362),v=n(334),y=n(335),C=n(336),k=n(332),w=n(355),I=n(249),N=n(242),S=n(356),U=n(2),_=Object(O.a)((function(){return Object(g.a)({listItemIcon:{width:"1em",fontSize:"1.5rem",textAlign:"center"}})})),R=function(e){var t,n=Object(o.a)().t,a=_();return c.useMemo((function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(l.a,{children:[Object(U.jsx)(k.a,{children:Object(U.jsx)("span",{className:a.listItemIcon,children:"\u6587"})}),Object(U.jsx)(S.a,{style:{width:"100%"},variant:"outlined",label:n("stations.edit.name.nameZH"),onChange:e.onUpdate(0),value:e.name[0],autoFocus:!0})]}),Object(U.jsxs)(l.a,{children:[Object(U.jsx)(k.a,{children:Object(U.jsx)("span",{className:a.listItemIcon,children:"A"})}),Object(U.jsx)(S.a,{style:{width:"100%"},variant:"outlined",label:n("stations.edit.name.nameEN"),onChange:e.onUpdate(1),value:e.name[1],helperText:n("stations.edit.name.nameENHelper")})]})]})}),[(null===(t=e.name)||void 0===t?void 0:t.toString())||""])},F=n(21),T=n(6),A=n(14),H=(t.default=function(e){var t=e.stnId,n=Object(o.a)().t,c=Object(F.b)(),O=Object(F.c)((function(e){return e.param.style})),g=Object(F.c)((function(e){return e.param.theme})),f=Object(F.c)((function(e){return e.param.stn_list[t]})).transfer,x=r.a.useState(!1),v=Object(i.a)(x,2),y=v[0],C=v[1],k=r.a.useState(!1),w=Object(i.a)(k,2),I=w[0],N=w[1],S=function(e){var n=[].concat(Object(a.a)(g),["\u8f49\u7dab","Line"]);c(Object(A.w)(t,e,n))},_=function(e,n){c(Object(A.C)(t,e,n))};return Object(U.jsxs)(s.a,{children:[Object(U.jsxs)(l.a,{children:[Object(U.jsx)(j.a,{children:Object(U.jsx)("h3",{style:{margin:0},children:n("stations.edit.interchange.within")})}),Object(U.jsx)(d.a,{children:Object(U.jsx)(u.a,{title:n("stations.edit.interchange.add")||"","aria-label":"add",children:Object(U.jsx)(h.a,{onClick:function(){return S(0)},children:Object(U.jsx)(b.a,{children:"add_circle"})})})})]}),Object(U.jsx)(l.a,{children:Object(U.jsx)(D,{stnId:t,setIndex:0,onDelete:function(e){return _(0,e)}})}),[T.k.MTR,T.k.SHMetro].includes(O)&&Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(p.a,{}),Object(U.jsxs)(l.a,{children:[Object(U.jsx)(j.a,{children:Object(U.jsx)("h3",{style:{margin:0},children:n("stations.edit.interchange.osi")})}),Object(U.jsxs)(d.a,{children:[[T.k.MTR].includes(O)&&Object(U.jsxs)(r.a.Fragment,{children:[Object(U.jsx)(m.a,{variant:"outlined",color:"primary",style:{lineHeight:"1rem",whiteSpace:"pre",marginRight:5},onClick:function(){return C(!0)},children:f.osi_names[0]?f.osi_names[0].join("\r\n"):"\u8eca\u7ad9\u540d\r\nStn Name"}),Object(U.jsx)(M,{open:y,stnId:t,setIndex:0,onClose:function(){return C(!1)}})]}),Object(U.jsx)(u.a,{title:n("stations.edit.interchange.add")||"","aria-label":"add",children:Object(U.jsx)(h.a,{onClick:function(){return S(1)},children:Object(U.jsx)(b.a,{children:"add_circle"})})})]})]}),Object(U.jsx)(l.a,{children:Object(U.jsx)(D,{stnId:t,setIndex:1,onDelete:function(e){return _(1,e)}})})]}),[T.k.SHMetro].includes(O||"")&&Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(p.a,{}),Object(U.jsxs)(l.a,{children:[Object(U.jsx)(j.a,{children:Object(U.jsx)("h3",{style:{margin:0},children:n("stations.edit.interchange.osysi")})}),Object(U.jsxs)(d.a,{children:[[T.k.MTR].includes(O)&&Object(U.jsxs)(r.a.Fragment,{children:[Object(U.jsx)(m.a,{variant:"outlined",color:"primary",style:{lineHeight:"1rem",whiteSpace:"pre",marginRight:5},onClick:function(){return N(!0)},children:f.osi_names[1]?f.osi_names[1].join("\r\n"):"\u8eca\u7ad9\u540d\r\nStn Name"}),Object(U.jsx)(M,{open:I,stnId:t,setIndex:1,onClose:function(){return N(!1)}})]}),Object(U.jsx)(u.a,{title:n("stations.edit.interchange.add")||"","aria-label":"add",children:Object(U.jsx)(h.a,{onClick:function(){return S(2)},children:Object(U.jsx)(b.a,{children:"add_circle"})})})]})]}),Object(U.jsx)(l.a,{children:Object(U.jsx)(D,{stnId:t,setIndex:2,onDelete:function(e){return _(2,e)}})})]}),[T.k.MTR,T.k.SHMetro].includes(O)&&Object(U.jsx)(l.a,{children:Object(U.jsx)("span",{children:n("stations.edit.interchange.note")})}),O===T.k.MTR&&Object(U.jsx)(E,{stnId:e.stnId})]})},Object(O.a)((function(){return Object(g.a)({intChip:{borderRadius:4.5,height:40,lineHeight:"1rem",margin:2},intChipText:{display:"block",textAlign:"center"},intChipTextZH:{fontSize:18,lineHeight:"1.2rem"},intChipTextEN:{fontSize:".75rem",lineHeight:".9rem",whiteSpace:"pre-wrap"},intChipLabel:{paddingLeft:6,paddingRight:6},intChipDeleteIcon:{marginLeft:-3}})}))),D=function(e){var t=e.stnId,n=e.setIndex,a=e.onDelete,c=H(),o=Object(F.b)(),s=Object(F.c)((function(e){return e.param.stn_list[t].transfer.info[n]})),l=r.a.useState(-1),j=Object(i.a)(l,2),d=j[0],u=j[1],h=r.a.useState(!1),b=Object(i.a)(h,2),p=b[0],m=b[1],O=null===s||void 0===s?void 0:s.map((function(e,t){var n=Object(U.jsxs)("span",{style:{color:e[3]},children:[Object(U.jsx)("span",{className:"".concat(c.intChipText," ").concat(c.intChipTextZH),children:e[4]}),Object(U.jsx)("span",{className:"".concat(c.intChipText," ").concat(c.intChipTextEN),children:e[5]})]});return Object(U.jsx)(f.a,{label:n,className:c.intChip,classes:{label:c.intChipLabel,deleteIcon:c.intChipDeleteIcon},style:{backgroundColor:e[2]},onDelete:function(){return a(t)},onClick:function(){return u(t),void m(!0)}},t)}));return Object(U.jsxs)("div",{children:[O,Object(U.jsx)(N.a,{open:p,theme:void 0===(null===s||void 0===s?void 0:s[d])?[]:[s[d][0],s[d][1],s[d][2],s[d][3]],lineName:void 0===(null===s||void 0===s?void 0:s[d])?["",""]:[s[d][4],s[d][5]],onUpdate:function(e,a){if("theme"===e){var i=a.concat(Array(2));o(Object(A.ab)(t,n,d,i))}if("name"===e){var c=Array(4).concat(a);o(Object(A.ab)(t,n,d,c))}},onClose:function(){return m(!1)}})]})},M=function(e){var t=e.open,n=e.stnId,a=e.setIndex,i=e.onClose,c=Object(o.a)().t,r=Object(F.b)(),l=Object(F.c)((function(e){return e.param.stn_list[n].transfer.osi_names[a]}))||["\u8eca\u7ad9\u540d","Stn Name"];return Object(U.jsxs)(x.a,{open:t,onClose:i,children:[Object(U.jsx)(v.a,{children:c("stations.edit.interchange.osiName")}),Object(U.jsx)(y.a,{dividers:!0,children:Object(U.jsx)(s.a,{children:Object(U.jsx)(R,{onUpdate:function(e){return function(t){var i=t.target.value,c=l.map((function(t,n){return n===e?i:t}));r(Object(A.hb)(n,a,c))}},name:l})})}),Object(U.jsx)(C.a,{children:Object(U.jsx)(m.a,{onClick:i,color:"primary",autoFocus:!0,children:c("dialog.done")})})]})},E=function(e){var t=e.stnId,n=Object(o.a)().t,a=Object(F.b)(),i=Object(F.c)((function(e){return e.param.stn_list[t]})).transfer;return r.a.useMemo((function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(p.a,{}),Object(U.jsx)(l.a,{children:Object(U.jsx)(j.a,{children:Object(U.jsx)("h3",{style:{margin:0},children:n("stations.edit.interchange.settings")})})}),Object(U.jsxs)(l.a,{children:[Object(U.jsx)(k.a,{children:Object(U.jsx)(b.a,{children:"format_textdirection_l_to_r"})}),Object(U.jsx)(j.a,{primary:n("stations.edit.interchange.tickDirec.label")}),Object(U.jsx)(d.a,{children:Object(U.jsx)(w.a,{native:!0,value:i.tick_direc,onChange:function(e){var n=e.target.value;n!==T.m.left&&n!==T.m.right||a(Object(A.kb)(t,n))},children:Object.values(T.m).map((function(e){return Object(U.jsx)("option",{value:e,children:n("stations.edit.interchange.tickDirec."+e)},e)}))})})]}),Object(U.jsxs)(l.a,{children:[Object(U.jsx)(k.a,{children:Object(U.jsx)(b.a,{children:"attach_money"})}),Object(U.jsx)(j.a,{primary:n("stations.edit.interchange.paidArea")}),Object(U.jsx)(d.a,{children:Object(U.jsx)(I.a,{color:"primary",edge:"end",onChange:function(e,n){a(Object(A.ib)(t,n))},checked:i.paid_area})})]})]})}),[t,n,a,i.paid_area,i.tick_direc])}}}]);
//# sourceMappingURL=panelStationsInterchange.3758ad23.chunk.js.map