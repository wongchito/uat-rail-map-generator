(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[123],{180:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(t,n){if(["linestart","lineend"].includes(t)||n[t].parents.length>1||n[t].children.length>1)return 0;var r=n[t].parents[0];return r?1===n[r].children.length?e(r,n):0===n[r].children.indexOf(t)?1:-1:0}},237:function(e,t,n){var r=n(238);e.exports=function(e,t){if(null==e)return{};var n,a,c=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c},e.exports.default=e.exports,e.exports.__esModule=!0},238:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.default=e.exports,e.exports.__esModule=!0},311:function(e,t,n){"use strict";var r=n(1),a=n(0),c=(n(8),n(7)),i=n(163),o=a.forwardRef((function(e,t){return a.createElement(i.a,Object(r.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(c.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(o)},322:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},353:function(e,t,n){"use strict";n.r(t);var r=n(30),a=n(0),c=n.n(a),i=n(157),o=n(178),s=n(342),l=n(131),d=n(168),u=n(170),h=n(132),b=n(163),p=n(334),j=n(338),f=n(166),O=n(167),m=n(138),g=n(169),x=n(137),v=n(21),y=n(6),k=n(14),w=n(2),C=Object(i.a)((function(e){return Object(o.a)({listItemNum:{marginRight:e.spacing(1),fontSize:"1.2rem"},listItemText:{display:"flex",alignItems:"baseline",whiteSpace:"nowrap",overflow:"hidden","& .MuiListItemText-primary":{marginRight:e.spacing(1)}},selectedItem:{background:e.palette.action.hover}})})),E=function(e){var t=Object(v.c)((function(e){return e.helper.tpo}));return Object(w.jsx)(l.a,{children:Object(w.jsx)(d.a,{dense:!0,disablePadding:!0,children:t.map((function(t){return Object(w.jsxs)(c.a.Fragment,{children:[Object(w.jsx)(S,{stnId:t,isSelected:t===e.selectedId,onAction:e.onAction(t)}),Object(w.jsx)(u.a,{})]},t)}))})})},S=function(e){var t=e.stnId,n=e.isSelected,c=e.onAction,i=Object(x.a)().t,o=C(),s=Object(v.b)(),l=Object(v.c)((function(e){return e.param.style})),d=Object(v.c)((function(e){return e.param.stn_list[t]})),u=(null===d||void 0===d?void 0:d.name)||["",""],E=(null===d||void 0===d?void 0:d.num)||"00",S=Object(a.useState)(null),N=Object(r.a)(S,2),I=N[0],T=N[1],_=function(e){return function(){c(e),T(null)}};return Object(w.jsxs)(h.a,{className:n?o.selectedItem:"",children:[l===y.k.GZMTR&&Object(w.jsx)(b.a,{className:o.listItemNum,children:E}),Object(w.jsx)(p.a,{primary:u[0],secondary:u[1].replace("\\"," "),className:o.listItemText}),Object(w.jsxs)(j.a,{children:[Object(w.jsx)(f.a,{size:"small",onClick:function(e){return T(e.currentTarget)},children:Object(w.jsx)(O.a,{children:"more_vert"})}),Object(w.jsxs)(m.a,{anchorEl:I,open:Boolean(I),onClose:function(){return T(null)},children:[Object(w.jsx)(g.a,{onClick:function(){s(Object(k.H)(t)),T(null)},children:i("stations.current")}),Object(w.jsx)(g.a,{onClick:_("edit"),children:i("stations.edit.button")}),Object(w.jsx)(g.a,{onClick:_("remove"),children:i("stations.remove.button")})]})]})]})},N=n(363),I=n(335),T=n(336),_=n(333),M=n(357),F=n(337),R=n(312),P=n(74),z=n(180),A=n(9),B=n(3),V=function(){return Math.floor(Math.random()*Math.pow(36,4)).toString(36).padStart(4,"0")};function D(e){var t="\u7678\u7532\u4e59\u4e19\u4e01\u620a\u5df1\u5e9a\u8f9b\u58ec\u65e5\u6708\u91d1\u6728\u6c34\u706b\u571f\u7af9\u6208\u5341\u5927\u4e2d\u4e00\u5f13\u4eba\u5fc3\u624b\u53e3\u5c38\u5eff\u5c71\u5973\u7530\u96e3\u535c\u91cd".split(""),n="Zero One Two Three Four Five Six Seven Eight Nine Alfa Bravo Charlie Delta Echo Foxtrot Golf Hotel India Juliett Kilo Lima Mike November Oscar Papa Quebec Romeo Sierra Tango Uniform Victor Whiskey X-ray Yankee Zulu".split(" ");return[e.split("").map((function(e){return t[parseInt(e,36)]})).join(""),e.split("").map((function(e){return n[parseInt(e,36)]})).join(" ")]}var H=Object(i.a)((function(){return Object(o.a)({dialogContent:{padding:8},select:{width:166,marginLeft:8}})})),W=c.a.memo((function(e){var t=Object(x.a)().t,n=H(),i=Object(v.b)(),o=Object(v.c)((function(e){return e.param.style})),s=Object(v.c)((function(e){return e.param.stn_list})),l=Object(v.c)((function(e){return e.helper})).tpo,b={centre:t("stations.add.centre"),upper:t("stations.add.upper"),lower:t("stations.add.lower"),newupper:t("stations.add.newUpper"),newlower:t("stations.add.newLower")},j=c.a.useState("before"),f=Object(r.a)(j,2),m=f[0],g=f[1],C=c.a.useState(l[0]),E=Object(r.a)(C,2),S=E[0],W=E[1],$=c.a.useState(Object.keys(b)[0]),J=Object(r.a)($,2),K=J[0],L=J[1],Z=c.a.useState(Array(5).fill(!0)),G=Object(r.a)(Z,2),U=G[0],Y=G[1],Q=c.a.useState(""),X=Object(r.a)(Q,2),q=X[0],ee=X[1],te=c.a.useState([]),ne=Object(r.a)(te,2),re=ne[0],ae=ne[1],ce=Object(a.useMemo)((function(){return function(e,t,n){switch(n[t]?n[t]["before"===e?"parents":"children"].length:0){case 2:return[1,1,1,[],[]];case 1:var r=Object(z.a)(t,n);if(0===r){var a=function(e,t,n){var r=[];if("before"===e){for(;1===n[t].parents.length;)t=n[t].parents[0],r.unshift(t);r.pop()}else{for(;1===n[t].children.length;)t=n[t].children[0],r.push(t);r.shift()}return r}(e,t,n);return[1,0,0,a=a.length?a:[],a]}return r<0?"before"===e?[n[n[t].parents[0]].children.length-1,0,1,[],[]]:[n[n[t].children[0]].parents.length-1,0,1,[],[]]:"before"===e?[n[n[t].parents[0]].children.length-1,1,0,[],[]]:[n[n[t].children[0]].parents.length-1,1,0,[],[]]}return[0,0,0,[],[]]}(m,S,s)}),[m,S,s]);Object(a.useEffect)((function(){Y(ce.map((function(e){return"number"===typeof e?Boolean(e):Boolean(e.length)}))),ae(ce[3])}),[ce.toString()]),Object(a.useEffect)((function(){return L(Object.keys(b)[U.indexOf(!0)])}),[U]),Object(a.useEffect)((function(){0!==re.length&&ee(re[0])}),[re]),Object(a.useEffect)((function(){S in s||W(l[0])}),[Object.keys(s).toString()]);var ie=function(t){if("close"===t)e.onClose("close");else{var n=function(e,t,n,r,a){for(var c=V();Object.keys(a).includes(c);)c=V();var i={name:D(c),secondaryName:!1,num:"00",services:[y.l.local],parents:[],children:[],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:y.m.right,paid_area:!0,osi_names:[]},facility:y.e.none},o=JSON.parse(JSON.stringify(a));return"before"===e?"centre"===n?(i.parents=a[t].parents,0===a[t].parents.length&&0!==Object(z.a)(t,a)?i.children=a.linestart.children:0!==Object(z.a)(t,a)?(i.children=a[a[t].parents[0]].children.slice(),i.branch.right=a[i.parents[0]].branch.right,o[i.parents[0]].branch.right=[]):(i.children=[t],i.branch.left=a[t].branch.left,o[t].branch.left=[]),i.parents.forEach((function(e){o[e].children=[c]})),i.children.forEach((function(e){o[e].parents=[c]}))):"upper"===n?2===a[t].parents.length?(a[t].branch.left[1]===a[t].parents[0]&&(o[t].branch.left[1]=c),i.parents=a[t].parents.slice(0,1),i.children=[t],i.parents.forEach((function(e){o[e].children=[c]})),o[t].parents[0]=c):(i.parents=a[t].parents,i.children=[t],i.parents.forEach((function(e){o[e].children[0]=c,a[e].branch.right[1]===t&&(o[e].branch.right[1]=c)})),i.children.forEach((function(e){o[e].parents=[c]}))):"lower"===n?2===a[t].parents.length?(a[t].branch.left[1]===a[t].parents[1]&&(o[t].branch.left[1]=c),i.parents=a[t].parents.slice(1),i.children=[t],i.parents.forEach((function(e){o[e].children=[c]})),o[t].parents[1]=c):(i.parents=a[t].parents,i.children=[t],i.parents.forEach((function(e){var n=a[e].children.length;o[e].children[n-1]=c,a[e].branch.right[1]===t&&(o[e].branch.right[1]=c)})),i.children.forEach((function(e){o[e].parents=[c]}))):(o[t].branch.left=[y.b.through,c],o[r].branch.right=[y.b.through,c],i.parents=[r],i.children=[t],"newupper"===n?(o[r].children.unshift(c),o[t].parents.unshift(c)):(o[r].children.push(c),o[t].parents.push(c))):"centre"===n?(i.children=a[t].children,0===a[t].children.length&&0!==Object(z.a)(t,a)?i.parents=a.lineend.parents:0!==Object(z.a)(t,a)?(i.parents=a[a[t].children[0]].parents,i.branch.left=a[i.children[0]].branch.left,o[i.children[0]].branch.left=[]):(i.parents=[t],i.branch.right=a[t].branch.right,o[t].branch.right=[]),i.children.forEach((function(e){o[e].parents=[c]})),i.parents.forEach((function(e){o[e].children=[c]}))):"upper"===n?2===a[t].children.length?(a[t].branch.right[1]===a[t].children[0]&&(o[t].branch.right[1]=c),i.children=a[t].children.slice(0,1),i.parents=[t],i.children.forEach((function(e){o[e].parents=[c]})),o[t].children[0]=c):(i.children=a[t].children,i.parents=[t],i.children.forEach((function(e){o[e].parents[0]=c,a[e].branch.left[1]===t&&(o[e].branch.left[1]=c)})),i.parents.forEach((function(e){o[e].children=[c]}))):"lower"===n?2===a[t].children.length?(a[t].branch.right[1]===a[t].children[1]&&(o[t].branch.right[1]=c),i.children=a[t].children.slice(1),i.parents=[t],i.children.forEach((function(e){o[e].parents=[c]})),o[t].children[1]=c):(i.children=a[t].children,i.parents=[t],i.children.forEach((function(e){o[e].parents[1===a[e].parents.length?0:1]=c,a[e].branch.left[1]===t&&(o[e].branch.left[1]=c)})),i.parents.forEach((function(e){o[e].children=[c]}))):(o[t].branch.right=[y.b.through,c],o[r].branch.left=[y.b.through,c],i.children=[r],i.parents=[t],"newupper"===n?(o[r].parents.unshift(c),o[t].children.unshift(c)):(o[r].parents.push(c),o[t].children.push(c))),[c,Object(B.a)(Object(B.a)({},o),{},Object(A.a)({},c,i))]}(m,S,K,q,s),a=Object(r.a)(n,2),c=a[0],o=a[1];i(Object(k.S)(o)),e.onClose(c)}};return Object(w.jsxs)(N.a,{open:e.open,onClose:function(){return ie("close")},children:[Object(w.jsx)(I.a,{children:t("stations.add.title")}),Object(w.jsx)(T.a,{className:n.dialogContent,children:Object(w.jsxs)(d.a,{component:"div",disablePadding:!0,children:[Object(w.jsxs)(h.a,{children:[Object(w.jsx)(_.a,{children:Object(w.jsx)(O.a,{children:"control_camera"})}),Object(w.jsx)(p.a,{primary:t("stations.add.prep")}),Object(w.jsx)(M.a,{native:!0,onChange:function(e){return g(e.target.value)},value:m,className:n.select,children:["before","after"].map((function(e){return Object(w.jsx)("option",{value:e,children:t("stations.add."+e)},e)}))})]}),Object(w.jsx)(u.a,{variant:"middle"}),Object(w.jsxs)(h.a,{children:[Object(w.jsx)(_.a,{children:Object(w.jsx)(O.a,{children:"near_me"})}),Object(w.jsx)(p.a,{primary:t("stations.add.pivot")}),Object(w.jsx)(M.a,{native:!0,onChange:function(e){return W(e.target.value)},value:S,className:n.select,children:l.map((function(e){return Object(w.jsx)("option",{value:e,children:Object(P.a)(s[e],o)},e)}))})]}),Object(w.jsx)(u.a,{variant:"middle"}),Object(w.jsxs)(h.a,{children:[Object(w.jsx)(_.a,{children:Object(w.jsx)(O.a,{children:"share"})}),Object(w.jsx)(p.a,{primary:t("stations.add.loc")}),Object(w.jsx)(M.a,{native:!0,onChange:function(e){return L(e.target.value)},value:K,className:n.select,children:Object.keys(b).map((function(e,t){return Object(w.jsx)("option",{value:e,disabled:!U[t],children:b[e]},e)}))})]}),Object(w.jsx)(u.a,{variant:"middle",style:{display:["newupper","newlower"].includes(K)?"flex":"none"}}),Object(w.jsxs)(h.a,{style:{display:["newupper","newlower"].includes(K)?"flex":"none"},children:[Object(w.jsx)(_.a,{children:Object(w.jsx)(O.a,{children:"undo"})}),Object(w.jsx)(p.a,{primary:t("stations.add.end")}),Object(w.jsx)(M.a,{native:!0,onChange:function(e){return ee(e.target.value)},value:q,className:n.select,children:re.map((function(e){return Object(w.jsx)("option",{value:e,children:Object(P.a)(s[e],o)},e)}))})]})]})}),Object(w.jsxs)(F.a,{children:[Object(w.jsx)(R.a,{onClick:function(){return ie("close")},color:"primary",children:t("dialog.cancel")}),Object(w.jsx)(R.a,{onClick:function(){return ie("accept")},color:"primary",autoFocus:!0,children:t("dialog.ok")})]})]})}),(function(e,t){return e.open===t.open})),$=n(175),J=n(171),K=n(172),L=n(34),Z=n(160),G=c.a.lazy((function(){return Promise.all([n.e(1),n.e(127)]).then(n.bind(null,351))})),U=c.a.lazy((function(){return Promise.all([n.e(1),n.e(106),n.e(125)]).then(n.bind(null,372))})),Y=c.a.lazy((function(){return n.e(124).then(n.bind(null,352))})),Q=c.a.lazy((function(){return n.e(126).then(n.bind(null,366))})),X=Object(i.a)((function(){return Object(o.a)({tab:{padding:"6px 24px",height:48,minWidth:"calc(100% / 4)","& .MuiTab-wrapper":{flexDirection:"row"},"&.MuiTab-labelIcon":{minHeight:"unset","& .MuiTab-wrapper":{"& > *:first-child":{marginBottom:0},"& > *:not(first-child)":{paddingLeft:8}}}}})}));var q=function(e){var t=Object(x.a)().t,n=Object(L.a)(),r=Object(Z.a)(n.breakpoints.down("xs"));return Object(Z.a)(n.breakpoints.down("sm"))?Object(w.jsxs)(N.a,{onClose:e.onClose,open:e.open,fullScreen:r,children:[Object(w.jsx)(I.a,{children:t("stations.edit.title")}),Object(w.jsx)(T.a,{dividers:!0,style:{padding:"0 16px"},children:e.children}),Object(w.jsx)(F.a,{children:Object(w.jsx)(R.a,{onClick:e.onClose,color:"primary",children:t("dialog.done")})})]}):Object(w.jsx)(l.a,{children:e.children})},ee=function(e){var t=Object(x.a)().t,n=c.a.useState(0),a=Object(r.a)(n,2),i=a[0],o=a[1],s=X(),l=c.a.useMemo((function(){return Object(w.jsx)($.a,{value:i,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return o(t)},variant:"scrollable",scrollButtons:"off",children:[["name","title"],["interchange","transfer_within_a_station"],["branch","share"],["more","more_horiz"]].map((function(e,n){return Object(w.jsx)(J.a,{label:Object(w.jsx)("span",{children:t("stations.edit.tab."+e[0])}),icon:Object(w.jsx)(O.a,{children:e[1]}),className:s.tab},n)}))})}),[i,s.tab]);return Object(w.jsxs)(q,Object(B.a)(Object(B.a)({},e),{},{children:[l,Object(w.jsx)(b.a,{component:"div",role:"tabpanel",children:Object(w.jsx)(c.a.Suspense,{fallback:Object(w.jsx)(K.a,{}),children:function(t){switch(t){case 0:return Object(w.jsx)(G,{stnId:e.stnId});case 1:return Object(w.jsx)(U,{stnId:e.stnId});case 2:return Object(w.jsx)(Y,{stnId:e.stnId});case 3:return Object(w.jsx)(Q,{stnId:e.stnId})}}(i)})})]}))},te=n(237),ne=n.n(te),re=n(89),ae=n.n(re),ce=n(62),ie=n.n(ce),oe=n(322),se=n.n(oe),le=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function de(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(se.a[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var a=new RegExp(le),c=null;null!==(c=a.exec(e));)if(c[0].trim())if(c[1]){var i=c[1].trim(),o=[i,""];i.indexOf("=")>-1&&(o=i.split("=")),t.attrs[o[0]]=o[1],a.lastIndex--}else c[2]&&(t.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return t}var ue=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,he=/^\s*$/,be=Object.create(null);function pe(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(pe,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var je={parse:function(e,t){t||(t={}),t.components||(t.components=be);var n,r=[],a=[],c=-1,i=!1;if(0!==e.indexOf("<")){var o=e.indexOf("<");r.push({type:"text",content:-1===o?e:e.substring(0,o)})}return e.replace(ue,(function(o,s){if(i){if(o!=="</"+n.name+">")return;i=!1}var l,d="/"!==o.charAt(1),u=o.startsWith("\x3c!--"),h=s+o.length,b=e.charAt(h);if(u){var p=de(o);return c<0?(r.push(p),r):((l=a[c]).children.push(p),r)}if(d&&(c++,"tag"===(n=de(o)).type&&t.components[n.name]&&(n.type="component",i=!0),n.voidElement||i||!b||"<"===b||n.children.push({type:"text",content:e.slice(h,e.indexOf("<",h))}),0===c&&r.push(n),(l=a[c-1])&&l.children.push(n),a[c]=n),(!d||n.voidElement)&&(c>-1&&(n.voidElement||n.name===o.slice(2,-1))&&(c--,n=-1===c?r:a[c]),!i&&"<"!==b&&b)){l=-1===c?r:a[c].children;var j=e.indexOf("<",h),f=e.slice(h,-1===j?void 0:j);he.test(f)&&(f=" "),(j>-1&&c+l.length>=0||" "!==f)&&l.push({type:"text",content:f})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+pe("",t)}),"")}},fe=n(56),Oe=n(49),me=["format"],ge=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(n),!0).forEach((function(t){ie()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ye(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function ke(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function we(e){return Array.isArray(e)?e:[e]}function Ce(e,t){if(!e)return"";var n="",r=we(e),a=t.transKeepBasicHtmlNodesFor||[];return r.forEach((function(e,r){if("string"===typeof e)n+="".concat(e);else if(c.a.isValidElement(e)){var i=Object.keys(e.props).length,o=a.indexOf(e.type)>-1,s=e.props.children;if(!s&&o&&0===i)n+="<".concat(e.type,"/>");else if(s||o&&0===i)if(e.props.i18nIsDynamicList)n+="<".concat(r,"></").concat(r,">");else if(o&&1===i&&"string"===typeof s)n+="<".concat(e.type,">").concat(s,"</").concat(e.type,">");else{var l=Ce(s,t);n+="<".concat(r,">").concat(l,"</").concat(r,">")}else n+="<".concat(r,"></").concat(r,">")}else if(null===e)Object(Oe.d)("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===ae()(e)){var d=e.format,u=ne()(e,me),h=Object.keys(u);if(1===h.length){var b=d?"".concat(h[0],", ").concat(d):h[0];n+="{{".concat(b,"}}")}else Object(Oe.d)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else Object(Oe.d)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function Ee(e,t,n,r,a){if(""===t)return[];var i=r.transKeepBasicHtmlNodesFor||[],o=t&&new RegExp(i.join("|")).test(t);if(!e&&!o)return[t];var s={};!function e(t){we(t).forEach((function(t){"string"!==typeof t&&(ye(t)?e(ke(t)):"object"!==ae()(t)||c.a.isValidElement(t)||Object.assign(s,t))}))}(e);var l=je.parse("<0>".concat(t,"</0>")),d=ve(ve({},s),a);function u(e,t,n){var r=ke(e),a=b(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return c.a.isValidElement(e)}))}(r)&&0===a.length?r:a}function h(e,t,n,r,a){e.dummy&&(e.children=t),n.push(c.a.cloneElement(e,ve(ve({},e.props),{},{key:r}),a?void 0:t))}function b(t,a,s){var l=we(t);return we(a).reduce((function(t,a,p){var j=a.children&&a.children[0]&&a.children[0].content&&n.services.interpolator.interpolate(a.children[0].content,d,n.language);if("tag"===a.type){var f=l[parseInt(a.name,10)];!f&&1===s.length&&s[0][a.name]&&(f=s[0][a.name]),f||(f={});var O=0!==Object.keys(a.attrs).length?function(e,t){var n=ve({},t);return n.props=Object.assign(e.props,t.props),n}({props:a.attrs},f):f,m=c.a.isValidElement(O),g=m&&ye(a,!0)&&!a.voidElement,x=o&&"object"===ae()(O)&&O.dummy&&!m,v="object"===ae()(e)&&null!==e&&Object.hasOwnProperty.call(e,a.name);if("string"===typeof O){var y=n.services.interpolator.interpolate(O,d,n.language);t.push(y)}else if(ye(O)||g){h(O,u(O,a,s),t,p)}else if(x){var k=b(l,a.children,s);t.push(c.a.cloneElement(O,ve(ve({},O.props),{},{key:p}),k))}else if(Number.isNaN(parseFloat(a.name))){if(v)h(O,u(O,a,s),t,p,a.voidElement);else if(r.transSupportBasicHtmlNodes&&i.indexOf(a.name)>-1)if(a.voidElement)t.push(c.a.createElement(a.name,{key:"".concat(a.name,"-").concat(p)}));else{var w=b(l,a.children,s);t.push(c.a.createElement(a.name,{key:"".concat(a.name,"-").concat(p)},w))}else if(a.voidElement)t.push("<".concat(a.name," />"));else{var C=b(l,a.children,s);t.push("<".concat(a.name,">").concat(C,"</").concat(a.name,">"))}}else if("object"!==ae()(O)||m)1===a.children.length&&j?t.push(c.a.cloneElement(O,ve(ve({},O.props),{},{key:p}),j)):t.push(c.a.cloneElement(O,ve(ve({},O.props),{},{key:p})));else{var E=a.children[0]?j:null;E&&t.push(E)}}else if("text"===a.type){var S=r.transWrapTextNodes,N=n.services.interpolator.interpolate(a.content,d,n.language);S?t.push(c.a.createElement(S,{key:"".concat(a.name,"-").concat(p)},N)):t.push(N)}return t}),[])}return ke(b([{dummy:!0,children:e||[]}],l,we(e||[]))[0])}function Se(e){var t=e.children,n=e.count,r=e.parent,i=e.i18nKey,o=e.tOptions,s=void 0===o?{}:o,l=e.values,d=e.defaults,u=e.components,h=e.ns,b=e.i18n,p=e.t,j=ne()(e,ge),f=Object(a.useContext)(fe.a)||{},O=f.i18n,m=f.defaultNS,g=b||O||Object(fe.d)();if(!g)return Object(Oe.e)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var x=p||g.t.bind(g)||function(e){return e},v=ve(ve({},Object(fe.c)()),g.options&&g.options.react),y=h||x.ns||m||g.options&&g.options.defaultNS;y="string"===typeof y?[y]:y||["translation"];var k=d||Ce(t,v)||v.transEmptyNodeValue||i,w=v.hashTransKey,C=i||(w?w(k):k),E=l?s.interpolation:{interpolation:ve(ve({},s.interpolation),{},{prefix:"#$?",suffix:"?$#"})},S=ve(ve(ve(ve({},s),{},{count:n},l),E),{},{defaultValue:k,ns:y}),N=Ee(u||t,C?x(C,S):k,g,v,S),I=void 0!==r?r:v.defaultTransParent;return I?c.a.createElement(I,j,N):N}var Ne=n(311);function Ie(e){var t,n=e.stnId,c=e.open,i=e.onClose,o=Object(x.a)().t,s=Object(v.b)(),l=Object(v.c)((function(e){return e.param.stn_list})),d=Object(v.c)((function(e){return e.param.current_stn_idx})),u=Object(a.useState)(!1),h=Object(r.a)(u,2),b=h[0],p=h[1],j=function(e){return function(){if("accept"===e){var t=function(e,t){var n=JSON.parse(JSON.stringify(t)),r=n[e].parents,a=n[e].children,c=!0;for(var i in n)if(![e,"linestart","lineend"].includes(i)&&0===Object(z.a)(i,n)){c=!1;break}if(2===r.length&&2===a.length)return!1;if(c)return!1;if(4===Object.keys(n).length)return!1;if(2===r.length||2===a.length)console.log("this case"),r.forEach((function(e){n[e].children=a})),a.forEach((function(e){n[e].parents=r})),1===r.length&&(n[r[0]].branch.right=n[e].branch.right),1===a.length&&(n[a[0]].branch.left=n[e].branch.left);else if(2===n[r[0]].children.length&&2===n[a[0]].parents.length){var o=n[r[0]].children.indexOf(e),s=n[a[0]].parents.indexOf(e);n[r[0]].children.splice(o,1),n[a[0]].parents.splice(s,1),n[r[0]].branch.right=[],n[a[0]].branch.left=[]}else r.forEach((function(t){var r=n[t].children.indexOf(e);a.length?n[t].children[r]=a[0]:n[t].children.splice(r,1),n[t].branch.right[1]===e&&(n[t].branch.right[1]=a[0])})),a.forEach((function(t){var a=n[t].parents.indexOf(e);r.length?n[t].parents[a]=r[0]:n[t].parents.splice(a,1),n[t].branch.left[1]===e&&(n[t].branch.left[1]=r[0])}));return delete n[e],n}(n,l);if(!1===t)p(!0);else{if(d===n){var r=Object.keys(t).filter((function(e){return!["linestart","lineend"].includes(e)}))[0];s(Object(k.H)(r))}s(Object(k.S)(t))}}i()}};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(N.a,{open:c,onClose:j("close"),children:[Object(w.jsx)(I.a,{children:o("stations.remove.title")}),Object(w.jsx)(T.a,{children:Object(w.jsx)(Ne.a,{children:Object(w.jsx)(Se,{i18nKey:"stations.remove.msg",children:{name:null===(t=l[e.stnId])||void 0===t?void 0:t.name.join()}})})}),Object(w.jsxs)(F.a,{children:[Object(w.jsx)(R.a,{onClick:j("close"),color:"primary",autoFocus:!0,children:o("dialog.cancel")}),Object(w.jsx)(R.a,{onClick:j("accept"),color:"primary",children:o("stations.remove.button")})]})]}),Object(w.jsx)(Te,{open:b,onClose:function(){return p(!1)}})]})}var Te=Object(a.memo)((function(e){var t=Object(x.a)().t;return Object(w.jsxs)(N.a,{open:e.open,onClose:e.onClose,children:[Object(w.jsx)(I.a,{children:t("stations.remove.error.title")}),Object(w.jsx)(T.a,{children:Object(w.jsx)(Ne.a,{children:t("stations.remove.error.msg")})}),Object(w.jsx)(F.a,{children:Object(w.jsx)(R.a,{onClick:e.onClose,color:"primary",autoFocus:!0,children:t("dialog.ok")})})]})}),(function(e,t){return e.open===t.open})),_e=n(177),Me=n(4),Fe=n(1),Re=(n(8),n(5)),Pe=n(7),ze=n(79),Ae=n(10),Be=a.forwardRef((function(e,t){var n=e.children,r=e.classes,c=e.className,i=e.color,o=void 0===i?"default":i,s=e.component,l=void 0===s?"button":s,d=e.disabled,u=void 0!==d&&d,h=e.disableFocusRipple,b=void 0!==h&&h,p=e.focusVisibleClassName,j=e.size,f=void 0===j?"large":j,O=e.variant,m=void 0===O?"circular":O,g=Object(Me.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return a.createElement(ze.a,Object(Fe.a)({className:Object(Re.a)(r.root,c,"large"!==f&&r["size".concat(Object(Ae.a)(f))],u&&r.disabled,"extended"===m&&r.extended,{primary:r.primary,secondary:r.secondary,inherit:r.colorInherit}[o]),component:l,disabled:u,focusRipple:!b,focusVisibleClassName:Object(Re.a)(r.focusVisible,p),ref:t},g),a.createElement("span",{className:r.label},n))})),Ve=Object(Pe.a)((function(e){return{root:Object(Fe.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(Be),De=Object(i.a)((function(e){return Object(o.a)({fab:{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}})})),He=c.a.memo((function(e){var t=Object(x.a)().t,n=Object(v.c)((function(e){return e.param.style})),a=De(),i=c.a.useState(null),o=Object(r.a)(i,2),s=o[0],l=o[1],d=function(t){return function(){l(null),e.onAction(t)}};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(_e.a,{title:t("stations.fabs.tooltip")||"","aria-label":"options",children:Object(w.jsx)(Ve,{color:"primary",className:a.fab,onClick:function(e){return l(e.target)},children:Object(w.jsx)(O.a,{children:"more_vert"})})}),Object(w.jsxs)(m.a,{anchorEl:s,open:Boolean(s),onClose:function(){return l(null)},children:[Object(w.jsxs)(g.a,{onClick:d("add"),children:[Object(w.jsx)(_.a,{children:Object(w.jsx)(O.a,{children:"add_box"})}),Object(w.jsx)(p.a,{primary:t("stations.fabs.add")})]}),Object(w.jsxs)(g.a,{onClick:d("reverse"),children:[Object(w.jsx)(_.a,{children:Object(w.jsx)(O.a,{children:"cached"})}),Object(w.jsx)(p.a,{primary:t("stations.fabs.reverse")})]}),n===y.k.GZMTR&&Object(w.jsxs)(g.a,{onClick:d("autonum"),children:[Object(w.jsx)(_.a,{children:Object(w.jsx)(O.a,{children:"filter_1"})}),Object(w.jsx)(p.a,{primary:t("design.autoNum.button")})]})]})]})}),(function(){return!0})),We=function(e){var t=Object(x.a)().t,n=Object(v.b)(),r=Object(v.c)((function(e){return e.helper})).branches,a=function(t){var a=r[0];a.forEach((function(e,r){var c;c="ascend"===t?r.toString().padStart(2,"0"):(a.length-1-r).toString().padStart(2,"0"),n(Object(k.gb)(e,c))})),e.onClose()};return c.a.useMemo((function(){return Object(w.jsxs)(N.a,{onClose:e.onClose,open:e.open,children:[Object(w.jsx)(I.a,{children:t("design.autoNum.title")}),Object(w.jsx)(T.a,{children:Object(w.jsx)(Ne.a,{children:t("design.autoNum.msg")})}),Object(w.jsxs)(F.a,{children:[Object(w.jsx)(R.a,{onClick:e.onClose,color:"primary",autoFocus:!0,children:t("dialog.cancel")}),Object(w.jsx)(R.a,{onClick:function(){return a("ascend")},color:"primary",children:t("design.autoNum.ascend")}),Object(w.jsx)(R.a,{onClick:function(){return a("descend")},color:"primary",children:t("design.autoNum.descend")})]})]})}),[e.open])},$e=Object(i.a)((function(){return Object(o.a)({gridContainer:{height:"100%",overflow:"hidden"},gridItem:{height:"100%",overflow:"auto"}})})),Je=function(){var e=$e(),t=Object(v.b)(),n=Object(v.c)((function(e){return e.param.style})),c=Object(a.useState)(""),i=Object(r.a)(c,2),o=i[0],l=i[1],d=Object(a.useState)(!1),u=Object(r.a)(d,2),h=u[0],b=u[1],p=Object(a.useState)(!1),j=Object(r.a)(p,2),f=j[0],O=j[1],m=Object(a.useState)(!1),g=Object(r.a)(m,2),x=g[0],C=g[1],S=Object(a.useState)(""),N=Object(r.a)(S,2),I=N[0],T=N[1],_=Object(a.useState)(!1),M=Object(r.a)(_,2),F=M[0],R=M[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(s.a,{container:!0,spacing:1,className:e.gridContainer,children:[Object(w.jsx)(s.a,{item:!0,xs:12,md:4,className:e.gridItem,children:Object(w.jsx)(E,{selectedId:o,onAction:function(e){return function(t){"edit"===t&&(l(e),b(!0)),"remove"===t&&(o===e&&l(""),T(e),R(!0))}}})}),Object(w.jsx)(s.a,{item:!0,xs:8,className:e.gridItem,children:o&&Object(w.jsx)(ee,{open:h,stnId:o,onClose:function(){return b(!1)}})})]}),Object(w.jsx)(He,{onAction:function(e){"add"===e&&O(!0),"reverse"===e&&t(Object(k.F)()),"autonum"===e&&C(!0)}}),Object(w.jsx)(W,{open:f,onClose:function(e){O(!1),"close"!==e&&(l(e),b(!0))}}),Object(w.jsx)(Ie,{open:F,onClose:function(){return R(!1)},stnId:I}),n===y.k.GZMTR&&Object(w.jsx)(We,{open:x,onClose:function(){return C(!1)}})]})};t.default=Je}}]);
//# sourceMappingURL=panelStations.c3d9871e.chunk.js.map