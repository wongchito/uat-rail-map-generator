(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[77],{211:function(e,t,n){var a={"./README.md":[219,73],"./barcelona":[169,5],"./barcelona.ts":[169,5],"./beijing":[170,16],"./beijing.ts":[170,16],"./changsha":[171,27],"./changsha.ts":[171,27],"./chengdu":[172,38],"./chengdu.ts":[172,38],"./chongqing":[173,40],"./chongqing.ts":[173,40],"./dongguan":[174,6],"./dongguan.ts":[174,6],"./edinburgh":[175,7],"./edinburgh.ts":[175,7],"./foshan":[176,8],"./foshan.ts":[176,8],"./glasgow":[177,9],"./glasgow.ts":[177,9],"./guangzhou":[178,10],"./guangzhou.ts":[178,10],"./hangzhou":[179,11],"./hangzhou.ts":[179,11],"./hongkong":[180,12],"./hongkong.ts":[180,12],"./kansai":[181,13],"./kansai.ts":[181,13],"./kaohsiung":[182,14],"./kaohsiung.ts":[182,14],"./london":[183,15],"./london.ts":[183,15],"./macao":[184,17],"./macao.ts":[184,17],"./madrid":[185,18],"./madrid.ts":[185,18],"./nanjing":[186,19],"./nanjing.ts":[186,19],"./newtaipei":[187,20],"./newtaipei.ts":[187,20],"./osaka":[188,21],"./osaka.ts":[188,21],"./oslo":[189,22],"./oslo.ts":[189,22],"./other":[190,23],"./other.ts":[190,23],"./paris":[191,24],"./paris.ts":[191,24],"./qingdao":[192,25],"./qingdao.ts":[192,25],"./sanfrancisco":[193,26],"./sanfrancisco.ts":[193,26],"./seoul":[194,28],"./seoul.ts":[194,28],"./shanghai":[195,29],"./shanghai.ts":[195,29],"./shenzhen":[196,30],"./shenzhen.ts":[196,30],"./singapore":[197,31],"./singapore.ts":[197,31],"./stockholm":[198,32],"./stockholm.ts":[198,32],"./taipei":[199,33],"./taipei.ts":[199,33],"./tianjin":[200,34],"./tianjin.ts":[200,34],"./tokyo":[201,35],"./tokyo.ts":[201,35],"./toronto":[202,36],"./toronto.ts":[202,36],"./tyneandwear":[203,37],"./tyneandwear.ts":[203,37],"./xian":[204,39],"./xian.ts":[204,39]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(a)},o.id=211,e.exports=o},213:function(e,t,n){"use strict";var a=n(1),o=n(17),r=n(36),c=n(8),i=n(0),l=n.n(i),s=n(119),d=n(138),u=n(158),h=n(299),m=n(276),p=n(277),b=n(149),j=n(151),g=n(278),f=n(256),O=n(114),y=n(113),x=n(148),v=n(303),C=n(263),k=n(275),z=n(156),S=n(153),N=n(166),E=n.n(N),w=n(167),H=n(293),T=n(150),R=n(159),I=n(292),P=n(62),U=[{id:"barcelona",country:"ES",name:{en:"Barcelona","zh-Hans":"\u5df4\u585e\u7f57\u90a3","zh-HK":"\u5df4\u585e\u9686\u62ff","zh-TW":"\u5df4\u585e\u9686\u7d0d"}},{id:"beijing",country:"CN",name:{en:"Beijing",zh:"\u5317\u4eac"}},{id:"changsha",country:"CN",name:{en:"Changsha","zh-Hans":"\u957f\u6c99","zh-Hant":"\u9577\u6c99"}},{id:"chengdu",country:"CN",name:{en:"Chengdu",zh:"\u6210\u90fd"}},{id:"chongqing",country:"CN",name:{en:"Chongqing","zh-Hans":"\u91cd\u5e86","zh-Hant":"\u91cd\u6176"}},{id:"dongguan",country:"CN",name:{en:"Dongguan","zh-Hans":"\u4e1c\u839e","zh-Hant":"\u6771\u839e"}},{id:"edinburgh",country:"GBSCT",name:{en:"Edinburgh",ga:"D\xf9n \xc8ideann","zh-Hans":"\u7231\u4e01\u5821","zh-Hant":"\u611b\u4e01\u5821"}},{id:"foshan",country:"CN",name:{en:"Foshan",zh:"\u4f5b\u5c71"}},{id:"glasgow",country:"GBSCT",name:{en:"Glasgow",ga:"Glaschu",zh:"\u683c\u62c9\u65af\u54e5"}},{id:"guangzhou",country:"CN",name:{en:"Guangzhou","zh-Hans":"\u5e7f\u5dde","zh-Hant":"\u5ee3\u5dde"}},{id:"hangzhou",country:"CN",name:{en:"Hangzhou",zh:"\u676d\u5dde"}},{id:"hongkong",country:"HK",name:{en:"Hong Kong",zh:"\u9999\u6e2f"}},{id:"kansai",country:"JP",name:{en:"Kansai Area",ja:"\u8fd1\u757f\u5730\u65b9","zh-Hans":"\u8fd1\u757f\u5730\u65b9\uff08\u5173\u897f\u5730\u65b9\uff09","zh-Hant":"\u8fd1\u757f\u5730\u65b9\uff08\u95dc\u897f\u5730\u65b9\uff09"}},{id:"kaohsiung",country:"TW",name:{en:"Kaohsiung",zh:"\u9ad8\u96c4"}},{id:"london",country:"GBENG",name:{en:"London","zh-Hans":"\u4f26\u6566","zh-Hant":"\u502b\u6566"}},{id:"macao",country:"MO",name:{en:"Macao",pt:"Macau","zh-Hans":"\u6fb3\u95e8","zh-Hant":"\u6fb3\u9580"}},{id:"madrid",country:"ES",name:{en:"Madrid","zh-Hans":"\u9a6c\u5fb7\u91cc","zh-Hant":"\u99ac\u5fb7\u91cc"}},{id:"nanjing",country:"CN",name:{en:"Nanjing",zh:"\u5357\u4eac"}},{id:"newtaipei",country:"TW",name:{en:"New Taipei",zh:"\u65b0\u5317"}},{id:"osaka",country:"JP",name:{en:"Osaka",ja:"\u5927\u962a",zh:"\u5927\u962a"}},{id:"oslo",country:"NO",name:{en:"Oslo","zh-Hans":"\u5965\u65af\u9646","zh-Hant":"\u5967\u65af\u9678"}},{id:"paris",country:"FR",name:{en:"Paris",zh:"\u5df4\u9ece"}},{id:"qingdao",country:"CN",name:{en:"Qingdao","zh-Hans":"\u9752\u5c9b","zh-Hant":"\u9752\u5cf6"}},{id:"sanfrancisco",country:"US",name:{en:"San Francisco","zh-Hans":"\u65e7\u91d1\u5c71","zh-HK":"\u4e09\u85e9\u5e02","zh-TW":"\u820a\u91d1\u5c71"}},{id:"seoul",country:"KR",name:{en:"Seoul (Metropolitan Area)",ko:"\uc11c\uc6b8(\uc218\ub3c4\uad8c)","zh-Hans":"\u9996\u5c14\uff08\u9996\u90fd\u5708\uff09","zh-Hant":"\u9996\u723e\uff08\u9996\u90fd\u5708\uff09"}},{id:"shanghai",country:"CN",name:{en:"Shanghai",zh:"\u4e0a\u6d77"}},{id:"shenzhen",country:"CN",name:{en:"Shenzhen",zh:"\u6df1\u5733"}},{id:"singapore",country:"SG",name:{en:"Singapore",zh:"\u65b0\u52a0\u5761"}},{id:"stockholm",country:"SE",name:{en:"Stockholm","zh-Hans":"\u65af\u5fb7\u54e5\u5c14\u6469","zh-Hant":"\u65af\u5fb7\u54e5\u723e\u6469"}},{id:"taipei",country:"TW",name:{en:"Taipei",zh:"\u53f0\u5317"}},{id:"tianjin",country:"CN",name:{en:"Tianjin",zh:"\u5929\u6d25"}},{id:"tokyo",country:"JP",name:{en:"Tokyo (Greater Tokyo Area)",ja:"\u6771\u4eac\uff08\u9996\u90fd\u570f\uff09","zh-Hans":"\u4e1c\u4eac\uff08\u9996\u90fd\u5708\uff09","zh-Hant":"\u6771\u4eac\uff08\u9996\u90fd\u5708\uff09"}},{id:"toronto",country:"CA",name:{en:"Toronto","zh-Hans":"\u591a\u4f26\u591a","zh-Hant":"\u591a\u502b\u591a"}},{id:"tyneandwear",country:"GBENG",name:{en:"Tyne and Wear","zh-Hans":"\u6cf0\u6069-\u5a01\u5c14","zh-HK":"\u6cf0\u5a01","zh-TW":"\u6cf0\u6069-\u5a01\u723e"}},{id:"xian",country:"CN",name:{en:"Xi'an",zh:"\u897f\u5b89"}},{id:"other",country:"UN",name:{en:"Customise","zh-Hans":"\u81ea\u5b9a\u4e49","zh-Hant":"\u81ea\u8a02"}}],L=n(3),F=Object(d.a)((function(){return Object(u.a)({cityItem:{display:"flex",flexDirection:"row",alignItems:"center"},menuItemSpan:{padding:"0 .3rem"},button:{borderRadius:"50%",height:24,width:24,minWidth:0,marginRight:8,padding:0},inputColour:{position:"absolute",width:0,height:0,left:27,top:32},buttonContainer:{display:"flex",flexShrink:1}})})),$=function(e){var t=Object(s.a)(),c=t.t,d=t.i18n,u=F(),h=function(e){var t=l.a.useState([]),r=Object(o.a)(t,2),c=r[0],s=r[1],d=e[0]?n(211)("./".concat(e[0])).then((function(e){return e.default})):Promise.resolve([]);return Object(i.useEffect)((function(){"undefined"!==typeof e[0]&&Object(w.a)(E.a.mark((function t(){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d;case 2:n=t.sent,s("other"===e[0]?[Object(a.a)(Object(a.a)({},n[0]),{},{colour:e[2],fg:e[3]||"#fff"})]:n);case 4:case"end":return t.stop()}}),t)})))()}),[e.toString()]),c}(e.theme);Object(i.useEffect)((function(){if(0!==h.length&&!h.filter((function(t){return t.id===e.theme[1]})).length){var t=h[0],n=t.id,a=t.colour,o=t.fg,r=[e.theme[0],n,a,o||"#fff"];e.onUpdate("theme",r)}}),[h]);return Object(L.jsxs)(b.a,{component:"div",disablePadding:!0,children:[Object(L.jsx)(A,{value:e.theme[0],onChange:function(t){return e.onUpdate("theme",[t.target.value].concat(Object(r.a)(e.theme.slice(1))))}}),Object(L.jsx)(j.a,{variant:"middle"}),Object(L.jsxs)(O.a,{children:[Object(L.jsx)(k.a,{primary:c("colour.line")}),Object(L.jsx)(H.a,{select:!0,style:{width:166},onChange:function(t){var n=t.target.value,a=h.filter((function(e){return e.id===n}))[0],o=a.colour,r=a.fg,c=[e.theme[0],n,o,r||"#fff"];e.onUpdate("theme",c)},value:e.theme[1],disabled:"other"===e.theme[0],children:h.map((function(e){return Object(L.jsx)(T.a,{value:e.id,children:Object(L.jsx)("span",{className:u.menuItemSpan,style:{backgroundColor:e.colour,color:e.fg||"#fff"},children:Object(P.b)(e.name,d.languages)})},e.id)}))})]})]})},_=function(e){var t=Object(s.a)().t,n=F(),a=Object(i.useState)(e.theme[2]),c=Object(o.a)(a,2),l=c[0],d=c[1];Object(i.useEffect)((function(){return d(e.theme[2])}),[e.theme[2]]);return Object(L.jsxs)(b.a,{component:"div",disablePadding:!0,children:[Object(L.jsxs)(O.a,{children:[Object(L.jsx)(k.a,{primary:t("colour.colour")}),Object(L.jsxs)("div",{className:n.buttonContainer,children:[Object(L.jsx)("input",{type:"color",id:"input-color",value:e.theme[2],onChange:function(t){var n=t.target.value;e.onUpdate("theme",["other","other",n,e.theme[3]])},className:n.inputColour,style:{opacity:0}}),Object(L.jsx)("label",{htmlFor:"input-color",children:Object(L.jsx)(R.a,{title:t("colour.tooltip"),"aria-label":"colour picker",children:Object(L.jsx)(f.a,{className:n.button,style:{backgroundColor:e.theme[2],borderColor:e.theme[3]||"#fff"},variant:"contained",component:"span",children:" "})})})]}),Object(L.jsx)(H.a,{error:!(null===l||void 0===l?void 0:l.match(/^#[0-9a-fA-F]{6}$/g)),style:{width:85},onChange:function(t){var n=t.target.value;if(null!==n.match(/^#[0-9a-fA-F]{0,6}$/))if(d(n),"other"!==e.theme[0])if(null!==n.match(/^#[0-9a-fA-f]{6}$/)){var a=["other","other",n,e.theme[3]];e.onUpdate("theme",a)}else{var o=["other","other"].concat(Object(r.a)(e.theme.slice(2)));e.onUpdate("theme",o)}else if(null!==n.match(/^#[0-9a-fA-F]{6}$/)){var c=e.theme.map((function(e,t){return 2===t?n:e}));e.onUpdate("theme",c)}},value:null===l||void 0===l?void 0:l.toUpperCase()})]}),Object(L.jsx)(j.a,{variant:"middle"}),Object(L.jsxs)(O.a,{children:[Object(L.jsx)(k.a,{primary:t("colour.fg")}),Object(L.jsxs)(I.a,{native:!0,style:{width:85},label:t("colour.fg"),onChange:function(t){var n=["other","other",e.theme[2],t.target.value];e.onUpdate("theme",n)},value:e.theme[3]||"#fff",children:[Object(L.jsx)("option",{value:"#fff",children:t("colour.fgWhite")}),Object(L.jsx)("option",{value:"#000",children:t("colour.fgBlack")})]})]})]})},A=function(e){var t=Object(s.a)(),n=t.t,a=t.i18n,o=F(),r=Object(i.useMemo)((function(){return U.map((function(e){return Object(L.jsx)(T.a,{value:e.id,children:Object(L.jsxs)("span",{className:o.cityItem,children:[Object(L.jsx)(W,{code:e.country}),Object(L.jsx)("span",{children:Object(P.b)(e.name,a.languages)})]})},e.id)}))}),[]);return Object(L.jsxs)(O.a,{children:[Object(L.jsx)(k.a,{primary:n("colour.city")}),Object(L.jsx)(H.a,{select:!0,style:{width:166},value:e.value,onChange:e.onChange,children:r})]})},D=Object(d.a)((function(){return Object(u.a)({img:{height:20,marginRight:"0.2rem"}})}));function W(e){var t=Object(s.a)().i18n,n=D(),a=[];return a=2===e.code.length?e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+127397).toString(16).toUpperCase()})):["1F3F4"].concat(e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+917536).toString(16).toUpperCase()})),"E007F"),["zh-CN","zh-Hans"].includes(t.language)&&"TW"===e.code&&(a=["1F3F4"]),-1!==navigator.platform.indexOf("Win32")||-1!==navigator.platform.indexOf("Win64")?Object(L.jsx)("img",{src:"/uat-rail-map-generator"+"/images/flags/".concat(a.join("-"),".svg"),className:n.img,alt:"Flag of ".concat(e.code)}):Object(L.jsx)("span",{children:String.fromCodePoint.apply(String,Object(r.a)(a.map((function(e){return parseInt(e,16)}))))})}var M=n(28),B=Object(d.a)((function(e){return Object(u.a)({contentWrapper:Object(c.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentLeft:{maxWidth:280},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",width:270},paperRoot:{maxWidth:250},listItemPaper:{justifyContent:"center"},iconRoot:{position:"absolute",color:e.palette.action.active},inputBaseRoot:{display:"block"},inputBaseInputZH:{textAlign:"center",fontSize:36,padding:0,paddingTop:6,height:45},inputBaseInputEN:{textAlign:"center",fontSize:18,padding:0,paddingBottom:6,height:"auto"},chipWrapper:{overflowX:"auto",display:"flex"},chipRoot:{borderRadius:4.5,height:32,lineHeight:"1rem",margin:2},chipLabel:{padding:"0 6px","& > span":{display:"block",textAlign:"center"},"& > span:first-child":{fontSize:"1rem"},"& > span:last-child":{lineHeight:"0.8rem"}}})})),K=function(e){var t=Object(s.a)().t,n=B();return Object(L.jsxs)(h.a,{open:e.open,onClose:e.onClose,children:[Object(L.jsx)(m.a,{children:t("colour.title")}),Object(L.jsxs)(p.a,{className:n.contentWrapper,children:[Object(L.jsxs)(b.a,{component:"div",disablePadding:!0,className:n.contentLeft,children:[Object(L.jsx)(G,{theme:e.theme,lineName:e.lineName,onUpdate:e.onUpdate}),Object(L.jsx)(j.a,{}),Object(L.jsx)(q,{onUpdate:e.onUpdate})]}),Object(L.jsx)("div",{className:n.contentControl,children:Object(L.jsx)(J,{theme:e.theme,onUpdate:e.onUpdate})})]}),Object(L.jsx)(g.a,{children:Object(L.jsx)(f.a,{onClick:e.onClose,color:"primary",children:t("dialog.done")})})]})},G=function(e){var t=B(),n=function(t,n){var a=e.lineName.map((function(e,a){return a===n?t:e}));e.onUpdate("name",a)};return Object(L.jsx)(O.a,{style:{justifyContent:"center"},children:Object(L.jsxs)(y.a,{className:t.paperRoot,style:{backgroundColor:e.theme[2]},children:[Object(L.jsx)(x.a,{className:t.iconRoot,children:"edit"}),Object(L.jsx)(v.a,{value:e.lineName[0],classes:{root:t.inputBaseRoot,input:t.inputBaseInputZH},style:{color:e.theme[3]||"#fff"},onChange:function(e){return n(e.target.value,0)},autoFocus:!0}),Object(L.jsx)(v.a,{value:e.lineName[1],classes:{root:t.inputBaseRoot,input:t.inputBaseInputEN},style:{color:e.theme[3]||"#fff"},onChange:function(e){return n(e.target.value,1)}})]})})},q=function(e){var t=Object(s.a)().t,n=B(),a=Object(i.useContext)(M.b).param,o=Object(i.useMemo)((function(){return new Set(Object.values(a.stn_list).reduce((function(e,t){var n=t.transfer.info;return e.concat.apply(e,Object(r.a)(n))}),[[].concat(Object(r.a)(a.theme),Object(r.a)(a.line_name))]).map((function(e){return JSON.stringify(e)})).reverse())}),[]),c=Object(i.useMemo)((function(){return Object(r.a)(o).map((function(t,a){var o=JSON.parse(t),r=o.slice(4).map((function(e,t){return Object(L.jsx)("span",{style:{color:o[3]},children:e},t)}));return Object(L.jsx)(C.a,{onClick:function(){e.onUpdate("theme",o.slice(0,4)),e.onUpdate("name",o.slice(4))},style:{backgroundColor:o[2]},className:n.chipRoot,classes:{label:n.chipLabel},label:r},a)}))}),[]);return Object(L.jsx)(O.a,{children:Object(L.jsx)(k.a,{primary:t("colour.recent"),secondary:c,secondaryTypographyProps:{component:"div"},classes:{secondary:n.chipWrapper}})})},J=function(e){var t=Object(s.a)().t,n=Object(i.useState)("other"===e.theme[0]?1:0),r=Object(o.a)(n,2),c=r[0],l=r[1],d=Object(L.jsxs)(z.a,{value:c,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return l(t)},variant:"fullWidth",scrollButtons:"off",children:[Object(L.jsx)(S.a,{label:t("colour.palette"),style:{minWidth:"unset"}}),Object(L.jsx)(S.a,{label:t("colour.custom"),style:{minWidth:"unset"}})]}),u=function(t){switch(t){case 0:return Object(L.jsx)($,Object(a.a)({},e));case 1:return Object(L.jsx)(_,Object(a.a)({},e));default:return Object(L.jsx)(L.Fragment,{})}}(c);return Object(L.jsxs)(L.Fragment,{children:[d,u]})};t.a=K},218:function(e,t,n){"use strict";var a=n(2),o=n(4),r=n(0),c=n(5),i=(n(7),n(116)),l=n(6),s=n(70),d=n(50),u=n(29),h=r.forwardRef((function(e,t){var n=e.children,l=e.classes,h=e.className,m=e.collapsedHeight,p=void 0===m?"0px":m,b=e.component,j=void 0===b?"div":b,g=e.in,f=e.onEnter,O=e.onEntered,y=e.onEntering,x=e.onExit,v=e.onExiting,C=e.style,k=e.timeout,z=void 0===k?s.b.standard:k,S=Object(o.a)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","timeout"]),N=Object(u.a)(),E=r.useRef(),w=r.useRef(null),H=r.useRef(),T="number"===typeof p?"".concat(p,"px"):p;r.useEffect((function(){return function(){clearTimeout(E.current)}}),[]);return r.createElement(i.a,Object(a.a)({in:g,onEnter:function(e,t){e.style.height=T,f&&f(e,t)},onEntered:function(e,t){e.style.height="auto",O&&O(e,t)},onEntering:function(e,t){var n=w.current?w.current.clientHeight:0,a=Object(d.a)({style:C,timeout:z},{mode:"enter"}).duration;if("auto"===z){var o=N.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(o,"ms"),H.current=o}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),y&&y(e,t)},onExit:function(e){var t=w.current?w.current.clientHeight:0;e.style.height="".concat(t,"px"),x&&x(e)},onExiting:function(e){var t=w.current?w.current.clientHeight:0,n=Object(d.a)({style:C,timeout:z},{mode:"exit"}).duration;if("auto"===z){var a=N.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),H.current=a}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=T,v&&v(e)},addEndListener:function(e,t){"auto"===z&&(E.current=setTimeout(t,H.current||0))},timeout:"auto"===z?null:z},S),(function(e,o){return r.createElement(j,Object(a.a)({className:Object(c.a)(l.container,h,{entered:l.entered,exited:!g&&"0px"===T&&l.hidden}[e]),style:Object(a.a)({minHeight:T},C),ref:t},o),r.createElement("div",{className:l.wrapper,ref:w},r.createElement("div",{className:l.wrapperInner},n)))}))}));h.muiSupportAuto=!0,t.a=Object(l.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(h)},263:function(e,t,n){"use strict";var a=n(2),o=n(4),r=n(0),c=(n(7),n(5)),i=n(47),l=Object(i.a)(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),s=n(6),d=n(18),u=n(12),h=n(9),m=n(68);function p(e){return"Backspace"===e.key||"Delete"===e.key}var b=r.forwardRef((function(e,t){var n=e.avatar,i=e.classes,s=e.className,d=e.clickable,b=e.color,j=void 0===b?"default":b,g=e.component,f=e.deleteIcon,O=e.disabled,y=void 0!==O&&O,x=e.icon,v=e.label,C=e.onClick,k=e.onDelete,z=e.onKeyDown,S=e.onKeyUp,N=e.size,E=void 0===N?"medium":N,w=e.variant,H=void 0===w?"default":w,T=Object(o.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),R=r.useRef(null),I=Object(u.a)(R,t),P=function(e){e.stopPropagation(),k&&k(e)},U=!(!1===d||!C)||d,L="small"===E,F=g||(U?m.a:"div"),$=F===m.a?{component:"div"}:{},_=null;if(k){var A=Object(c.a)("default"!==j&&("default"===H?i["deleteIconColor".concat(Object(h.a)(j))]:i["deleteIconOutlinedColor".concat(Object(h.a)(j))]),L&&i.deleteIconSmall);_=f&&r.isValidElement(f)?r.cloneElement(f,{className:Object(c.a)(f.props.className,i.deleteIcon,A),onClick:P}):r.createElement(l,{className:Object(c.a)(i.deleteIcon,A),onClick:P})}var D=null;n&&r.isValidElement(n)&&(D=r.cloneElement(n,{className:Object(c.a)(i.avatar,n.props.className,L&&i.avatarSmall,"default"!==j&&i["avatarColor".concat(Object(h.a)(j))])}));var W=null;return x&&r.isValidElement(x)&&(W=r.cloneElement(x,{className:Object(c.a)(i.icon,x.props.className,L&&i.iconSmall,"default"!==j&&i["iconColor".concat(Object(h.a)(j))])})),r.createElement(F,Object(a.a)({role:U||k?"button":void 0,className:Object(c.a)(i.root,s,"default"!==j&&[i["color".concat(Object(h.a)(j))],U&&i["clickableColor".concat(Object(h.a)(j))],k&&i["deletableColor".concat(Object(h.a)(j))]],"default"!==H&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[j]],y&&i.disabled,L&&i.sizeSmall,U&&i.clickable,k&&i.deletable),"aria-disabled":!!y||void 0,tabIndex:U||k?0:void 0,onClick:C,onKeyDown:function(e){e.currentTarget===e.target&&p(e)&&e.preventDefault(),z&&z(e)},onKeyUp:function(e){e.currentTarget===e.target&&(k&&p(e)?k(e):"Escape"===e.key&&R.current&&R.current.blur()),S&&S(e)},ref:I},$,T),D||W,r.createElement("span",{className:Object(c.a)(i.label,L&&i.labelSmall)},v),_)}));t.a=Object(s.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],n=Object(d.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(d.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(d.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(d.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(d.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(d.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(d.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:n,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(d.c)(n,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(d.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(d.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(d.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(d.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(b)},300:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(282),c=n(113),i=n(149),l=n(155),s=n(151),d=n(17),u=n(119),h=n(138),m=n(158),p=n(114),b=n(274),j=n(148),g=n(275),f=n(256),O=n(293),y=n(279),x=n(258),v=n(218),C=n(213),k=n(28),z=n(3),S=Object(h.a)((function(e){return Object(m.a)({dividerVertical:{margin:e.spacing(0,2)},nestedList:{paddingLeft:e.spacing(5)}})})),N=function(){var e=Object(u.a)().t,t=Object(a.useContext)(k.a).rmgStyle,n=o.a.useContext(k.b),r=n.param,c=n.dispatch,i=o.a.useState(!1),l=Object(d.a)(i,2),h=l[0],m=l[1];return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(p.a,{button:!0,onClick:function(){return m(!0)},children:[Object(z.jsx)(b.a,{children:Object(z.jsx)(j.a,{children:"color_lens"})}),Object(z.jsx)(g.a,{primary:e("design.theme"),secondary:Object(z.jsx)("span",{style:{backgroundColor:r.theme[2],color:r.theme[3],padding:".1rem .3rem"},children:Object.values(r.line_name).join()})}),Object(z.jsx)(j.a,{color:"action",children:"arrow_right"})]}),Object(z.jsx)(C.a,{open:h,theme:r.theme,lineName:r.line_name,onUpdate:function(e,t){"name"===e&&c({type:"SET_LINE_NAME",name:Object.values(t)}),"theme"===e&&c({type:"SET_THEME",theme:t})},onClose:function(){return m(!1)}}),Object(z.jsx)(s.a,{}),Object(z.jsx)(E,{}),Object(z.jsx)(s.a,{}),"shmetro"===t?Object(z.jsx)(H,{}):Object(z.jsx)(w,{})]})},E=function(){var e=Object(u.a)().t,t=S(),n=o.a.useContext(k.b),a=n.param,r=n.dispatch;return o.a.useMemo((function(){return Object(z.jsxs)(p.a,{children:[Object(z.jsx)(b.a,{children:Object(z.jsx)(j.a,{children:"directions"})}),Object(z.jsx)(g.a,{primary:e("design.direction.button"),secondary:e("design.direction."+a.direction)}),Object(z.jsx)(s.a,{orientation:"vertical",flexItem:!0,className:t.dividerVertical}),Object(z.jsx)(f.a,{variant:"outlined",color:"primary",onClick:function(){return r({type:"SET_DIRECTION"})},children:e("design.direction.switch")})]})}),[t.dividerVertical,a.direction])},w=function(){var e=Object(u.a)().t,t=o.a.useContext(k.b),n=t.param,a=t.dispatch;return o.a.useMemo((function(){return Object(z.jsxs)(p.a,{children:[Object(z.jsx)(b.a,{children:Object(z.jsx)(j.a,{children:"looks_one"})}),Object(z.jsx)(g.a,{primary:e("design.platform")}),Object(z.jsx)(O.a,{value:n.platform_num,onChange:function(e){return a({type:"SET_PLATFORM",platform:e.target.value})}})]})}),[n.platform_num])},H=function(){var e=Object(u.a)().t,t=S(),n=Object(a.useContext)(k.b),o=n.param,r=n.dispatch,c=function(e,t){r(t?{type:"SET_PLATFORM",platform:""}:{type:"SET_PLATFORM",platform:!1})};return Object(a.useMemo)((function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(p.a,{children:[Object(z.jsx)(b.a,{children:Object(z.jsx)(j.a,{children:"looks_one"})}),Object(z.jsx)(g.a,{primary:e("design.platform")}),Object(z.jsx)(y.a,{children:Object(z.jsx)(x.a,{color:"primary",checked:!1!==o.platform_num,onChange:c})})]}),Object(z.jsx)(v.a,{in:!1!==o.platform_num,unmountOnExit:!0,children:Object(z.jsx)(i.a,{component:"div",disablePadding:!0,className:t.nestedList,children:Object(z.jsx)(p.a,{children:Object(z.jsx)(O.a,{placeholder:e("design.platform"),value:o.platform_num,onChange:function(e){return r({type:"SET_PLATFORM",platform:e.target.value})}})})})})]})}),[o.platform_num,t.nestedList])},T=o.a.lazy((function(){return n.e(79).then(n.bind(null,285))})),R=o.a.lazy((function(){return Promise.all([n.e(72),n.e(78)]).then(n.bind(null,286))})),I=o.a.lazy((function(){return n.e(80).then(n.bind(null,287))})),P=function(){var e=Object(a.useContext)(k.a).rmgStyle;return Object(z.jsx)(r.a,{container:!0,spacing:3,justify:"center",alignItems:"flex-start",children:Object(z.jsx)(r.a,{item:!0,xs:12,sm:10,md:7,lg:5,children:Object(z.jsx)(c.a,{children:Object(z.jsxs)(i.a,{component:"div",disablePadding:!0,children:[Object(z.jsx)(N,{}),"mtr"===e&&Object(z.jsxs)(o.a.Suspense,{fallback:Object(z.jsx)(l.a,{}),children:[Object(z.jsx)(s.a,{}),Object(z.jsx)(T,{})]}),"gzmtr"===e&&Object(z.jsxs)(o.a.Suspense,{fallback:Object(z.jsx)(l.a,{}),children:[Object(z.jsx)(s.a,{}),Object(z.jsx)(R,{})]}),"shmetro"===e&&Object(z.jsxs)(o.a.Suspense,{fallback:Object(z.jsx)(l.a,{}),children:[Object(z.jsx)(s.a,{}),Object(z.jsx)(I,{})]})]})})})})};t.default=P}}]);
//# sourceMappingURL=panelDesign.eff92856.chunk.js.map