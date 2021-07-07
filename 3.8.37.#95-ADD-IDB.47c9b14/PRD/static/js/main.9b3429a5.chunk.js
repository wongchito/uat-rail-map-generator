(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[76],{103:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n.n(a),c=n(31),s=n(38),i=n(0),l=n.n(i),o=n(11),u=(n(103),n(70)),b=n(46),j=n(85),d=n(86);u.a.use(j.a).use(d.a).use(b.e).init({fallbackLng:{"zh-CN":["zh-Hans","en"],"zh-Hant":["zh-HK","en"],"zh-HK":["zh-Hant","en"],"zh-TW":["zh-HK","zh-Hant"],default:["en"]},backend:{loadPath:"/RailMapGenerator/locale/{{lng}}.json"},interpolation:{escapeValue:!1}}).then((function(e){document.title=e("title"),document.documentElement.setAttribute("lang",u.a.language)}));var O=n(17),h=n(67),f=n(122),_=n(141),g=n(161),p=n(144),m=n(145),v=n(146),x=n(147),w=n(162),y=n(150),T=n(151),I=n(123),S=n(153),E=n(154),N=n(29),A=n(3),k=Object(_.a)((function(e){return Object(g.a)({rootLight:{backgroundColor:e.palette.primary.main},rootDark:{backgroundColor:e.palette.background.paper},title:{flexGrow:1,color:"#fff"},menuButton:{color:"#fff"}})})),R=function(){var e=Object(f.a)(),t=e.t,n=e.i18n,a=k(),r=Object(p.a)("(prefers-color-scheme: dark)");return i.useMemo((function(){return Object(A.jsx)(m.a,{position:"sticky",className:r?a.rootDark:a.rootLight,children:Object(A.jsxs)(v.a,{variant:"dense",children:[Object(A.jsx)(x.a,{variant:"h6",className:a.title,color:"textPrimary",children:"/RailMapGenerator".includes("uat")?t("titleUAT"):t("title")}),Object(A.jsx)(M,{}),Object(A.jsx)(D,{})]})})}),[r,n.language])},M=function(){var e=Object(f.a)().t,t=k(),n=i.useContext(N.a),a=n.canvasAvailable,r=n.setCanvasToShown,c=i.useState(null),s=Object(O.a)(c,2),l=s[0],o=s[1],u=function(e){return function(){r(e),o(null)}};return i.useMemo((function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(w.a,{title:e("toggle.tooltip"),children:Object(A.jsx)(y.a,{onClick:function(e){return o(e.currentTarget)},className:t.menuButton,children:Object(A.jsx)(T.a,{children:"photo_library"})})}),Object(A.jsxs)(I.a,{anchorEl:l,open:Boolean(l),onClose:function(){return o(null)},children:[a.map((function(t){return Object(A.jsx)(S.a,{onClick:u(t),children:e("toggle."+t)},t)})),Object(A.jsx)(E.a,{style:{margin:"6px 0"}}),Object(A.jsx)(S.a,{onClick:u("all"),children:e("toggle.all")})]})]})}),[a.toString(),l,t.menuButton])},D=function(){var e=Object(f.a)().t,t=k(),n=i.useContext(N.a).setCanvasScale;return i.useMemo((function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(w.a,{title:e("zoom.out"),children:Object(A.jsx)(y.a,{onClick:function(){return n((function(e){return e<=.1?e:e-.1}))},className:t.menuButton,children:Object(A.jsx)(T.a,{children:"zoom_out"})})}),Object(A.jsx)(w.a,{title:e("zoom.in"),children:Object(A.jsx)(y.a,{onClick:function(){return n((function(e){return e+.1}))},className:t.menuButton,children:Object(A.jsx)(T.a,{children:"zoom_in"})})})]})}),[t.menuButton])},C=n(1),P=n(8),z=n(155),F=n(13),B=n(51),G=n(54),L=n(84),U=n(83),H=function(e){Object(L.a)(n,e);var t=Object(U.a)(n);function n(e){var a;return Object(B.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(G.a)(n,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?Object(A.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(l.a.Component),W=n(56),Z=Object(_.a)((function(){return Object(g.a)({root:{display:"flex",flexDirection:"row",overflowX:"scroll","&::before, &::after":{content:'""',margin:"auto"},"& > svg":{flex:"0 0 auto",border:"1px solid black"}}})})),J=function(){var e=Z(),t=l.a.useContext(N.b).param,n=l.a.useContext(N.a).canvasScale,a=l.a.useCallback((function(e){var a;return{id:e,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",height:t.svg_height*n,viewBox:"0 0 ".concat(t.svgWidth[e]," ").concat(t.svg_height),colorInterpolationFilters:"sRGB",style:(a={},Object(P.a)(a,"--rmg-svg-width",t.svgWidth[e]+"px"),Object(P.a)(a,"--rmg-svg-height",t.svg_height+"px"),Object(P.a)(a,"--rmg-theme-colour",t.theme[2]),Object(P.a)(a,"--rmg-theme-fg",t.theme[3]),a)}}),[t.svg_height,JSON.stringify(t.svgWidth),t.theme[2],t.theme[3],n]);return Object(A.jsx)("div",{className:e.root,children:Object(A.jsxs)(F.d,{children:[Object.keys(te).map((function(e){return Object(A.jsx)(F.b,{path:"/".concat(e),children:Object(A.jsx)(Y,{rmgStyle:e,canvasAvailable:te[e],svgProps:a})},e)})),Object(A.jsx)(F.a,{to:"/"+(new URLSearchParams(window.location.search).get("style")||"mtr")})]})})},Y=Object(i.memo)((function(e){var t=Object(i.useContext)(N.a),n=t.canvasToShown,a=t.setCanvasToShown,r=t.setCanvasAvailable;return Object(i.useEffect)((function(){["share"].concat(Object(s.a)(W.c)).forEach((function(t){t in e.canvasAvailable||"share"===t?document.getElementById("css_"+t).href="/RailMapGenerator"+"/styles/".concat(t,"_").concat(e.rmgStyle,".css"):document.getElementById("css_"+t).href=""})),r(Object.keys(e.canvasAvailable)),a((function(t){return["all"].concat(Object(s.a)(Object.keys(e.canvasAvailable))).includes(t)?t:"all"}))}),[]),Object(A.jsx)(A.Fragment,{children:Object.keys(e.canvasAvailable).map((function(t){return["all",t].includes(n)&&Object(A.jsx)(l.a.Suspense,{fallback:Object(A.jsx)(z.a,{}),children:Object(A.jsx)(H,{children:Object(A.jsxs)("svg",Object(C.a)(Object(C.a)({},e.svgProps(t)),{},{children:[Object(A.jsx)("rect",{id:"canvas-bg",fill:"white",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}}),e.canvasAvailable[t],Object(A.jsx)("rect",{id:"canvas-border",fill:"none",strokeWidth:3,stroke:"none",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}})]}))})},t)}))})})),V=Object(i.lazy)((function(){return n.e(95).then(n.bind(null,302))})),X=Object(i.lazy)((function(){return n.e(92).then(n.bind(null,294))})),K=Object(i.lazy)((function(){return n.e(74).then(n.bind(null,271))})),$=Object(i.lazy)((function(){return n.e(93).then(n.bind(null,295))})),q=Object(i.lazy)((function(){return n.e(75).then(n.bind(null,272))})),Q=Object(i.lazy)((function(){return n.e(96).then(n.bind(null,273))})),ee=Object(i.lazy)((function(){return n.e(94).then(n.bind(null,298))})),te={gzmtr:{runin:Object(A.jsx)(V,{}),railmap:Object(A.jsx)(X,{})},mtr:{destination:Object(A.jsx)(K,{}),railmap:Object(A.jsx)($,{})},shmetro:{destination:Object(A.jsx)(q,{}),runin:Object(A.jsx)(Q,{}),railmap:Object(A.jsx)(ee,{})}},ne=J,ae=n(30),re=n(159),ce=n(156),se=i.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(85)]).then(n.bind(null,291))})),ie=i.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(72),n.e(82)]).then(n.bind(null,296))})),le=i.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(71),n.e(77)]).then(n.bind(null,300))})),oe=i.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(87)]).then(n.bind(null,290))})),ue=i.lazy((function(){return n.e(81).then(n.bind(null,297))})),be=Object(_.a)((function(e){var t;return Object(g.a)({root:Object(P.a)({display:"flex",flexDirection:"row",height:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),typography:{background:e.palette.background.default},tab:(t={padding:"6px 24px",height:48,"& .MuiTab-wrapper":{flexDirection:"row"}},Object(P.a)(t,e.breakpoints.up("sm"),{"& .MuiTab-wrapper":{justifyContent:"flex-start"}}),Object(P.a)(t,e.breakpoints.down("xs"),{minWidth:"calc(100% / 5)"}),Object(P.a)(t,"&.MuiTab-labelIcon",{minHeight:"unset","& .MuiTab-wrapper":{"& > *:first-child":{marginBottom:0},"& > *:not(first-child)":{paddingLeft:8}}}),t),tabs:{overflow:"auto","&::-webkit-scrollbar":{width:0},scrollbarWidth:"none",WebkitOverflowScrolling:"touch"},tabpanel:{overflow:"auto",flex:1,padding:e.spacing(3),paddingBottom:0,height:"calc(100% - ".concat(e.spacing(3),"px)"),display:"flex",justifyContent:"center",alignItems:"flex-start"}})}));function je(){var e=Object(f.a)(),t=e.t,n=e.i18n,a=be(),r=Object(ae.a)(),c=Object(p.a)(r.breakpoints.down("xs")),s=i.useState(0),l=Object(O.a)(s,2),o=l[0],u=l[1],b=i.useMemo((function(){return Object(A.jsx)(x.a,{className:"".concat(a.typography," ").concat(a.tabs),component:"div",children:Object(A.jsx)(re.a,{value:o,orientation:c?"horizontal":"vertical",indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return u(t)},variant:"scrollable",scrollButtons:"off",children:[["file","insert_drive_file"],["layout","panorama"],["design","brush"],["stations","directions_transit"],["info","info"]].map((function(e,n){return Object(A.jsx)(ce.a,{label:Object(A.jsx)("span",{children:t("tab."+e[0])}),icon:Object(A.jsx)(T.a,{children:e[1]}),className:a.tab},n)}))})})}),[o,n.language,a.tab,c]);return Object(A.jsxs)("div",{className:a.root,children:[b,Object(A.jsx)(x.a,{className:"".concat(a.typography," ").concat(a.tabpanel),component:"div",role:"tabpanel",children:Object(A.jsx)(i.Suspense,{fallback:Object(A.jsx)(z.a,{}),children:function(e){switch(e){case 0:return Object(A.jsx)(se,{});case 1:return Object(A.jsx)(ie,{});case 2:return Object(A.jsx)(le,{});case 3:return Object(A.jsx)(oe,{});case 4:return Object(A.jsx)(ue,{});default:return Object(A.jsx)(se,{})}}(o)})})]})}function de(){return Object(A.jsx)(i.Suspense,{fallback:Object(A.jsx)(z.a,{}),children:Object(A.jsx)(je,{})})}var Oe=n(52),he=n(93),fe=n(157),_e=n(158),ge=Object(he.a)({palette:{type:"dark",primary:{main:"#bb86fc"},secondary:{main:"#018786"},error:{main:"#cf6679"}},overrides:{MuiDialog:{paper:{minWidth:280}}}}),pe=Object(he.a)({palette:{primary:{light:"#bb86fc",main:"#6200ee"},secondary:{main:"#018786"},error:{main:"#b00020"}},overrides:{MuiDialog:{paper:{minWidth:280}}}});function me(){var e=Object(p.a)("(prefers-color-scheme: dark)")?ge:pe,t=Object(i.useState)([]),n=Object(O.a)(t,2),a=n[0],r=n[1],c=Object(i.useState)(localStorage.rmgCanvas),s=Object(O.a)(c,2),o=s[0],u=s[1];Object(i.useEffect)((function(){window.rmgStorage.writeFile("rmgCanvas",o).then()}),[o]);var b=Object(i.useState)(Number(localStorage.rmgScale)>=.1?Number(localStorage.rmgScale):1),j=Object(O.a)(b,2),d=j[0],f=j[1];return Object(i.useEffect)((function(){window.rmgStorage.writeFile("rmgScale",d.toFixed(1)).then()}),[d]),Object(A.jsx)(h.a,{basename:"/RailMapGenerator",children:Object(A.jsx)(fe.a,{theme:e,children:Object(A.jsxs)(N.a.Provider,{value:{rmgStyle:window.location.pathname.split("/")[2],canvasAvailable:a,setCanvasAvailable:r,canvasToShown:o,setCanvasToShown:u,canvasScale:d,setCanvasScale:f},children:[Object(A.jsx)(l.a.Suspense,{fallback:Object(A.jsx)(_e.a,{}),children:Object(A.jsx)(R,{})}),Object(A.jsx)(ve,{})]})})})}var ve=function(){var e=Object(i.useReducer)(N.c,JSON.parse(localStorage.rmgParam)),t=Object(O.a)(e,2),n=t[0],a=t[1],r=JSON.stringify(n);Object(i.useEffect)((function(){window.rmgStorage.writeFile("rmgParam",r).then()}),[r]);var c=Object.keys(n.stn_list).reduce((function(e,t){return e+t+function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t+JSON.stringify(e[n])}),"")}}("parents","children","branch")(n.stn_list[t])}),""),s=Object(i.useMemo)((function(){return Object(Oe.a)(n.stn_list)}),[c]),l=Object(i.useMemo)((function(){return Object(Oe.b)(n.stn_list)}),[c]),o=Object(Oe.d)(s);return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(N.b.Provider,{value:{param:n,dispatch:a,branches:s,routes:l,deps:c,tpo:o},children:[Object(A.jsx)("div",{style:{overflowY:"auto"},children:Object(A.jsx)(ne,{})}),Object(A.jsx)("div",{style:{flex:1,overflow:"hidden"},children:Object(A.jsx)(de,{})})]}),Object(A.jsx)("canvas",{style:{display:"none"}})]})},xe=n(66);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we,ye=function(){function e(){Object(B.a)(this,e),this.currentBusyFilename=void 0,this.currentBusyFilename=!1}return Object(G.a)(e,[{key:"init",value:function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.warn("Using localStorage, please update your browser"),window.localStorage){e.next=4;break}throw alert("Local storage is not available! Please upgrade to a newer browser!"),new Error("LocalStorage unavailable");case 4:e.prev=4,window.localStorage.setItem("storage_test","1"),window.localStorage.removeItem("storage_test"),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(4),alert("Local storage is not accessible! Please modify your browser's settings or try with another browser!"),new Error("LocalStorage no write permission");case 13:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"writeFile",value:function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.currentBusyFilename===t&&console.warn("Attempt to write",t,"while write process is not finished!"),this.currentBusyFilename=t,window.localStorage.setItem(t,n),this.currentBusyFilename=!1;case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"readFile",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.currentBusyFilename===t&&console.warn("Attempt to read",t,"while write process is not finished!"),n=window.localStorage.getItem(t)){e.next=4;break}throw new Error("FILE_NOT_FOUND");case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteFile",value:function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.currentBusyFilename===t&&console.warn("Attempt to delete",t,"while write process is not finished!"),this.currentBusyFilename=t,window.localStorage.removeItem(t),this.currentBusyFilename=!1;case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function Te(){return(Te=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.indexedDB){e.next=3;break}return console.log("IndexedDB not supported"),e.abrupt("return",new ye);case 3:return e.next=5,new Promise((function(e){try{var t=window.indexedDB.open("indexeddb_feature_detection",1);t.onerror=function(t){console.log("IndexedDB can NOT be accessed:",t),console.log("Fallback to LocalStorage"),e(new ye)},t.onsuccess=function(){console.log("IndexedDB can be accessed"),e(new ye)}}catch(n){console.warn("Error while opening IndexedDB:",n),e(new ye)}}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),(we=document.head).append.apply(we,Object(s.a)(["share"].concat(Object(s.a)(W.c)).map((function(e){var t=document.createElement("link");return t.rel="stylesheet",t.id="css_"+e,t}))));(function(){return Te.apply(this,arguments)})().then((function(e){e.init().then(Object(c.a)(r.a.mark((function t(){var a,c,s,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.readFile("rmgParam");case 3:return a=t.sent,c=Object(xe.c)(JSON.parse(a)),t.next=7,e.writeFile("rmgParam",JSON.stringify(c));case 7:t.next=18;break;case 9:return t.prev=9,t.t0=t.catch(0),console.warn(t.t0),t.next=14,n.e(2).then(n.bind(null,218));case 14:return s=t.sent,i=Object(xe.c)(s.default),t.next=18,e.writeFile("rmgParam",JSON.stringify(i));case 18:return t.prev=18,window.rmgStorage=e,o.render(Object(A.jsx)(me,{}),document.getElementById("root")),t.finish(18);case 22:case"end":return t.stop()}}),t,null,[[0,9,18,22]])}))))}))},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l}));var a=n(8),r=n(1),c=n(0),s=Object(c.createContext)({}),i=Object(c.createContext)({}),l=function(e,t){var n,c,s,i,l,o;switch(t.type){case"GLOBAL":return t.data;case"ANY":return Object(r.a)(Object(r.a)({},e),{},Object(a.a)({},t.key,t.data));case"SET_HEIGHT":return Object(r.a)(Object(r.a)({},e),{},{svg_height:t.value});case"SET_WIDTH":return Object(r.a)(Object(r.a)({},e),{},{svgWidth:Object(r.a)(Object(r.a)({},e.svgWidth),{},Object(a.a)({},t.targetId,t.value))});case"SET_Y":return Object(r.a)(Object(r.a)({},e),{},{y_pc:t.value});case"SET_BRANCH_SPACING":return Object(r.a)(Object(r.a)({},e),{},{branch_spacing:t.value});case"SET_PADDING":return Object(r.a)(Object(r.a)({},e),{},{padding:t.value});case"SET_DIRECTION_GZ_X":return Object(r.a)(Object(r.a)({},e),{},{direction_gz_x:t.value});case"SET_DIRECTION_GZ_Y":return Object(r.a)(Object(r.a)({},e),{},{direction_gz_y:t.value});case"SET_LINE_NAME":return Object(r.a)(Object(r.a)({},e),{},{line_name:t.name});case"SET_THEME":return Object(r.a)(Object(r.a)({},e),{},{theme:t.theme});case"SET_DIRECTION":return Object(r.a)(Object(r.a)({},e),{},{direction:"l"===e.direction?"r":"l"});case"SET_PLATFORM":return Object(r.a)(Object(r.a)({},e),{},{platform_num:t.platform});case"SET_TEXT_STAGGER":return Object(r.a)(Object(r.a)({},e),{},{namePosMTR:Object(r.a)(Object(r.a)({},e.namePosMTR),{},{isStagger:t.checked})});case"SET_TEXT_FLIP":return Object(r.a)(Object(r.a)({},e),{},{namePosMTR:Object(r.a)(Object(r.a)({},e.namePosMTR),{},{isFlip:!e.namePosMTR.isFlip})});case"SET_DEST_LEGACY":return Object(r.a)(Object(r.a)({},e),{},{customiseMTRDest:Object(r.a)(Object(r.a)({},e.customiseMTRDest),{},{isLegacy:t.isLegacy})});case"SET_TERMINAL_OVERRIDE":return Object(r.a)(Object(r.a)({},e),{},{customiseMTRDest:Object(r.a)(Object(r.a)({},e.customiseMTRDest),{},{terminal:t.terminal})});case"SET_LINE_NUM":return Object(r.a)(Object(r.a)({},e),{},{line_num:t.num});case"SET_PSD_NUM":return Object(r.a)(Object(r.a)({},e),{},{psd_num:t.num});case"SET_PANEL_TYPE":return Object(r.a)(Object(r.a)({},e),{},{info_panel_type:t.variant});case"ADD_NOTE_GZMTR":return Object(r.a)(Object(r.a)({},e),{},{notesGZMTR:null===(n=e.notesGZMTR)||void 0===n?void 0:n.concat([["","",0,0,!1]])});case"REMOVE_NOTE_GZMTR":return Object(r.a)(Object(r.a)({},e),{},{notesGZMTR:null===(c=e.notesGZMTR)||void 0===c?void 0:c.filter((function(e,n){return n!==t.idx}))});case"UPDATE_NOTE_GZMTR":return Object(r.a)(Object(r.a)({},e),{},{notesGZMTR:null===(s=e.notesGZMTR)||void 0===s?void 0:s.map((function(e,n){return n===t.idx?t.note:e}))});case"SET_CURRENT_STATION":return Object(r.a)(Object(r.a)({},e),{},{current_stn_idx:t.stnId});case"REVERSE_STATIONS":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object.keys(e.stn_list).reduce((function(t,n){return Object(r.a)(Object(r.a)({},t),{},Object(a.a)({},n,function(t){switch(t){case"linestart":return Object(r.a)(Object(r.a)({},e.stn_list.lineend),{},{parents:[],children:e.stn_list.lineend.parents.slice().reverse(),branch:{left:[],right:e.stn_list.lineend.branch.left}});case"lineend":return Object(r.a)(Object(r.a)({},e.stn_list.linestart),{},{parents:e.stn_list.linestart.children.slice().reverse(),children:[],branch:{left:e.stn_list.linestart.branch.right,right:[]}});default:return Object(r.a)(Object(r.a)({},e.stn_list[t]),{},{parents:e.stn_list[t].children.map((function(e){return"linestart"===e?"lineend":"lineend"===e?"linestart":e})).reverse(),children:e.stn_list[t].parents.map((function(e){return"linestart"===e?"lineend":"lineend"===e?"linestart":e})).reverse(),branch:{left:e.stn_list[t].branch.right,right:e.stn_list[t].branch.left}})}}(n)))}),{})});case"UPDATE_STATION_NAME":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object(r.a)(Object(r.a)({},e.stn_list),{},Object(a.a)({},t.stnId,Object(r.a)(Object(r.a)({},e.stn_list[t.stnId]),{},{name:t.name})))});case"UPDATE_STATION_SECONDARY_NAME":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object(r.a)(Object(r.a)({},e.stn_list),{},Object(a.a)({},t.stnId,Object(r.a)(Object(r.a)({},e.stn_list[t.stnId]),{},{secondaryName:t.name})))});case"UPDATE_STATION_NUM":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object(r.a)(Object(r.a)({},e.stn_list),{},Object(a.a)({},t.stnId,Object(r.a)(Object(r.a)({},e.stn_list[t.stnId]),{},{num:t.num})))});case"ADD_STATION_INTERCHANGE_INFO":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object(r.a)(Object(r.a)({},e.stn_list),{},Object(a.a)({},t.stnId,Object(r.a)(Object(r.a)({},e.stn_list[t.stnId]),{},{transfer:Object(r.a)(Object(r.a)({},e.stn_list[t.stnId].transfer),{},{info:function(n){var a=n.setIdx,r=n.info,c=e.stn_list[t.stnId].transfer.info.slice();return c[a]=(c[a]||[]).concat([r]),c}(t)})})))});case"REMOVE_STATION_INTERCHANGE_INFO":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object(r.a)(Object(r.a)({},e.stn_list),{},Object(a.a)({},t.stnId,Object(r.a)(Object(r.a)({},e.stn_list[t.stnId]),{},{transfer:Object(r.a)(Object(r.a)({},e.stn_list[t.stnId].transfer),{},{info:e.stn_list[t.stnId].transfer.info.map((function(e,n){return n===t.setIdx?e.slice(0,t.intIdx).concat(e.slice(t.intIdx+1)):e}))})})))});case"UPDATE_STATION_INTERCHANGE_INFO":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object(r.a)(Object(r.a)({},e.stn_list),{},Object(a.a)({},t.stnId,Object(r.a)(Object(r.a)({},e.stn_list[t.stnId]),{},{transfer:Object(r.a)(Object(r.a)({},e.stn_list[t.stnId].transfer),{},{info:null===(i=e.stn_list[t.stnId].transfer)||void 0===i?void 0:i.info.map((function(e,n){return n===t.setIdx?e.map((function(e,n){return n===t.intIdx?[0,1,2,3,4,5].map((function(n){return void 0===t.info[n]?e[n]:t.info[n]})):e})):e}))})})))});case"UPDATE_STATION_OSI_NAME":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object(r.a)(Object(r.a)({},e.stn_list),{},Object(a.a)({},t.stnId,Object(r.a)(Object(r.a)({},e.stn_list[t.stnId]),{},{transfer:Object(r.a)(Object(r.a)({},e.stn_list[t.stnId].transfer),{},{osi_names:[t.name]})})))});case"UPDATE_STATION_TICK_DIREC":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object(r.a)(Object(r.a)({},e.stn_list),{},Object(a.a)({},t.stnId,Object(r.a)(Object(r.a)({},e.stn_list[t.stnId]),{},{transfer:Object(r.a)(Object(r.a)({},e.stn_list[t.stnId].transfer),{},{tick_direc:t.direction})})))});case"UPDATE_STATION_PAID_AREA":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object(r.a)(Object(r.a)({},e.stn_list),{},Object(a.a)({},t.stnId,Object(r.a)(Object(r.a)({},e.stn_list[t.stnId]),{},{transfer:Object(r.a)(Object(r.a)({},e.stn_list[t.stnId].transfer),{},{paid_area:t.isPaid})})))});case"UPDATE_STATION_BRANCH_TYPE":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object(r.a)(Object(r.a)({},e.stn_list),{},Object(a.a)({},t.stnId,Object(r.a)(Object(r.a)({},e.stn_list[t.stnId]),{},{branch:Object(r.a)(Object(r.a)({},e.stn_list[t.stnId].branch),{},Object(a.a)({},t.direction,[t.branchType,e.stn_list[t.stnId].branch[t.direction][1]]))})))});case"UPDATE_STATION_BRANCH_FIRST":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object(r.a)(Object(r.a)({},e.stn_list),{},(l={},Object(a.a)(l,t.branches[0].stnId,Object(r.a)(Object(r.a)({},e.stn_list[t.branches[0].stnId]),{},{branch:Object(r.a)(Object(r.a)({},e.stn_list[t.branches[0].stnId].branch),{},Object(a.a)({},t.branches[0].direction,[e.stn_list[t.branches[0].stnId].branch[t.branches[0].direction][0],t.branches[0].first]))})),Object(a.a)(l,t.branches[1].stnId,Object(r.a)(Object(r.a)({},e.stn_list[t.branches[1].stnId]),{},{branch:Object(r.a)(Object(r.a)({},e.stn_list[t.branches[1].stnId].branch),{},Object(a.a)({},t.branches[1].direction,[e.stn_list[t.branches[1].stnId].branch[t.branches[1].direction][0],t.branches[1].first]))})),l))});case"UPDATE_STATION_BRANCH_POS":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object(r.a)(Object(r.a)({},e.stn_list),{},(o={},Object(a.a)(o,t.left,Object(r.a)(Object(r.a)({},e.stn_list[t.left]),{},{parents:e.stn_list[t.left].parents.slice().reverse()})),Object(a.a)(o,t.right,Object(r.a)(Object(r.a)({},e.stn_list[t.right]),{},{children:e.stn_list[t.right].children.slice().reverse()})),o))});case"UPDATE_STATION_FACILITY":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object(r.a)(Object(r.a)({},e.stn_list),{},Object(a.a)({},t.stnId,Object(r.a)(Object(r.a)({},e.stn_list[t.stnId]),{},{facility:t.facility})))});case"UPDATE_STATION_SERVICES":return Object(r.a)(Object(r.a)({},e),{},{stn_list:Object(r.a)(Object(r.a)({},e.stn_list),{},Object(a.a)({},t.stnId,Object(r.a)(Object(r.a)({},e.stn_list[t.stnId]),{},{services:Array.from(t.isChecked?new Set(e.stn_list[t.stnId].services).add(t.serviceId):e.stn_list[t.stnId].services.filter((function(e){return e!==t.serviceId})))})))});case"UPDATE_STATION_LIST":return Object(r.a)(Object(r.a)({},e),{},{stn_list:t.stnList});default:return e}}},52:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return o}));var a=n(17),r=n(0),c=n.n(r),s=function e(t,n){if(["linestart","lineend"].includes(t)||n[t].parents.length>1||n[t].children.length>1)return 0;var a=n[t].parents[0];return a?1===n[a].children.length?e(a,n):0===n[a].children.indexOf(t)?1:-1:0},i=function(e){console.log("computing branches");for(var t=["linestart"],n=[["linestart"]],a=0;t.length;){var r=t.shift(),c=n[a].slice().reverse()[0]||null;for(c&&"linestart"!==r?n[a].push(r):n[a]=[r];"lineend"!==r;){var s=e[c=r].children;if(function(){switch(s.length){case 1:r=s[0];break;case 2:var i=e[c].branch.right[1];"through"===e[c].branch.right[0]?(n.push([r]),t.push(i)):0===a&&(n.push([c]),t.push(i)),r=s.filter((function(e){return e!==i}))[0]}}(),n[a].push(r),c===e[r].branch.left[1])break}a++}return n},l=function(e){console.log("computing routes");for(var t=["linestart"],n=[["linestart"]],a=0;t.length;){var r=t.shift(),c=n[a].slice().reverse()[0]||null;for(c&&"linestart"!==r?n[a].push(r):n[a]=[r];"lineend"!==r;){var s=e[c=r].children;if(function(){switch(s.length){case 1:r=s[0];break;case 2:var i=e[c].branch.right[1];"through"===e[c].branch.right[0]?(n.push(n[a].slice()),t.push(i)):0===a&&(n.push([c]),t.push(i)),r=s.filter((function(e){return e!==i}))[0]}}(),n[a].push(r),c===e[r].branch.left[1]&&"nonthrough"===e[r].branch.left[0])break}a++}return n},o=function(e){var t=c.a.useState([]),n=Object(a.a)(t,2),r=n[0],s=n[1];return c.a.useEffect((function(){if(console.log("computing tpo"),1!==e.length){var t=e.reduce((function(e,t){var n=e.indexOf(t.slice(-1)[0]);return e.slice(0,n).concat(t.slice(1),e.slice(n+1))}),["lineend"]).slice(0,-1);s(t)}else s(e[0].slice(1,-1))}),[e.toString()]),r}},56:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=["destination","runin","railmap"],r=["gz1","gz2otis","gz28","gz3","gz4","gz1421","gz5","gz6","gzgf"],c=["sh","sh2020"]},66:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var a=n(76),r=n(17),c=function(e){var t;"line_name"in e||(e.line_name=["\u8def\u7dda\u540d","Name of Line"]),"dest_legacy"in e||(e.dest_legacy=!1),delete e.fontZH,delete e.fontEN,delete e.weightZH,delete e.weightEN;for(var n=0,a=Object.entries(e.stn_list);n<a.length;n++){var c=Object(r.a)(a[n],2),s=c[0],i=c[1];"branch"in i||(e.stn_list[s].branch={left:[],right:[]},2===i.children.length?e.stn_list[s].branch.right=["through",i.children[1]]:e.stn_list[s].branch.right=[],2===i.parents.length?e.stn_list[s].branch.left=["through",i.parents[1]]:e.stn_list[s].branch.left=[])}e.psd_num="psd_num"in e?e.psd_num.toString():"1","line_num"in e||(e.line_num="1"),delete e.style,3===e.theme.length&&e.theme.push("#fff");for(var l=0,o=Object.entries(e.stn_list);l<o.length;l++){var u=Object(r.a)(o[l],2),b=u[0],j=u[1];"num"in j||(e.stn_list[b].num="00"),"interchange"in j&&j.interchange.map((function(e){return e.forEach((function(e){5===e.length&&e.splice(3,0,"#fff")}))}))}for(var d=0,O=Object.entries(e.stn_list);d<O.length;d++){var h=Object(r.a)(O[d],2),f=h[0],_=h[1];"osi22_end_p"===_.change_type&&(e.stn_list[f].change_type="osi22_pr"),"osi22_end_u"===_.change_type&&(e.stn_list[f].change_type="osi22_ur")}for(var g=0,p=Object.entries(e.stn_list);g<p.length;g++){var m=Object(r.a)(p[g],2),v=m[0];"interchange"in m[1]||(e.stn_list[v].interchange=[[]])}e.info_panel_type="info_panel_type"in e?function(e){switch(e){case"gz_1":case"panasonic":return"gz28";case"gz_2":return"gz6";case"gz_3":return"gz3";default:return e}}(e.info_panel_type):"gz28","direction_gz_x"in e||(e.direction_gz_x=50),"direction_gz_y"in e||(e.direction_gz_y=70);for(var x=0,w=Object.entries(e.stn_list);x<w.length;x++){var y,T,I,S,E=Object(r.a)(w[x],2),N=E[0],A=E[1];if(!("transfer"in A))e.stn_list[N].transfer={tick_direc:"none"===A.change_type||"int2"===A.change_type?"r":null===(y=A.change_type)||void 0===y?void 0:y.split("_")[1].split("").slice().reverse()[0],paid_area:-1===(null===(T=A.change_type)||void 0===T?void 0:T.indexOf("osi"))||"p"===(null===(I=A.change_type)||void 0===I?void 0:I.split("_")[1][0]),osi_names:-1!==(null===(S=A.change_type)||void 0===S?void 0:S.indexOf("osi"))?[A.interchange[1][0]]:[],info:2===A.interchange.length?[A.interchange[0],A.interchange[1].slice(1)]:A.interchange};delete e.stn_list[N].change_type,delete e.stn_list[N].interchange}for(var k=0,R=Object.entries(e.stn_list);k<R.length;k++){var M=Object(r.a)(R[k],2),D=M[0],C=M[1];"services"in C||(e.stn_list[D].services=["local"]),"facility"in C||(e.stn_list[D].facility="usage"in C?C.usage:""),delete e.stn_list[D].usage}return"customiseMTRDest"in e||(e.customiseMTRDest={isLegacy:e.dest_legacy||!1,terminal:!1}),delete e.dest_legacy,"svgWidth"in e||(e.svgWidth={destination:e.svg_dest_width,runin:e.svg_dest_width,railmap:e.svg_width}),delete e.svg_width,delete e.svg_dest_width,"notesGZMTR"in e||(e.notesGZMTR=[]),e.notesGZMTR=null===(t=e.notesGZMTR)||void 0===t?void 0:t.map((function(e){return 4===e.length?e.concat([!1]):e})),delete e.char_form,delete e.show_outer,delete e.strip_pc,delete e.txt_bg_gap,"namePosMTR"in e||(e.namePosMTR={isStagger:!0,isFlip:e.txt_flip}),delete e.txt_flip,Object.keys(e.stn_list).forEach((function(t){"secondaryName"in e.stn_list[t]?!1!==e.stn_list[t].secondaryName&&","===e.stn_list[t].secondaryName.join()&&(e.stn_list[t].secondaryName=!1):e.stn_list[t].secondaryName=!1,"type"in e.stn_list[t].transfer&&delete e.stn_list[t].transfer.type})),e},s=function(e,t){var n,r=Object(a.a)(t);try{for(r.s();!(n=r.n()).done;){var c=n.value;if(e[c])return e[c]}}catch(s){r.e(s)}finally{r.f()}return e.en},i=function(e,t){return("gzmtr"===t?((null===e||void 0===e?void 0:e.num)||"-")+": ":"")+(null===e||void 0===e?void 0:e.name.join().replace("\\"," "))}}},[[114,97,98]]]);
//# sourceMappingURL=main.9b3429a5.chunk.js.map