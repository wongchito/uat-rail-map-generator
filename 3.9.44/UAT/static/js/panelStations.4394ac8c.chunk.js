(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[107],{153:function(e,t,n){"use strict";n.r(t);var r=n(11),c=n(5),i=n.n(c),a=n(3),s=n(13),o=n(8),l=n(2),u=n(7),h=n(0),d=Object(a.makeStyles)((function(e){return Object(a.createStyles)({listItemNum:{marginRight:e.spacing(1),fontSize:"1.2rem"},listItemText:{display:"flex",alignItems:"baseline",whiteSpace:"nowrap",overflow:"hidden","& .MuiListItemText-primary":{marginRight:e.spacing(1)}},selectedItem:{background:e.palette.action.hover}})})),j=function(e){var t=Object(o.c)((function(e){return e.helper.tpo}));return Object(h.jsx)(a.Paper,{children:Object(h.jsx)(a.List,{dense:!0,disablePadding:!0,children:t.map((function(t){return Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsx)(b,{stnId:t,isSelected:t===e.selectedId,onAction:e.onAction(t)}),Object(h.jsx)(a.Divider,{})]},t)}))})})},b=function(e){var t=e.stnId,n=e.isSelected,i=e.onAction,j=Object(s.useTranslation)().t,b=d(),f=Object(o.b)(),p=Object(o.c)((function(e){return e.param.style})),O=Object(o.c)((function(e){return e.param.stn_list[t]})),m=(null===O||void 0===O?void 0:O.name)||["",""],g=(null===O||void 0===O?void 0:O.num)||"00",x=Object(c.useState)(null),v=Object(r.a)(x,2),I=v[0],y=v[1],C=function(e){return function(){i(e),y(null)}};return Object(h.jsxs)(a.ListItem,{className:n?b.selectedItem:"",children:[p===l.k.GZMTR&&Object(h.jsx)(a.Typography,{className:b.listItemNum,children:g}),Object(h.jsx)(a.ListItemText,{primary:m[0],secondary:m[1].replace("\\"," "),className:b.listItemText}),Object(h.jsxs)(a.ListItemSecondaryAction,{children:[Object(h.jsx)(a.IconButton,{size:"small",onClick:function(e){return y(e.currentTarget)},children:Object(h.jsx)(a.Icon,{children:"more_vert"})}),Object(h.jsxs)(a.Menu,{anchorEl:I,open:Boolean(I),onClose:function(){return y(null)},children:[Object(h.jsx)(a.MenuItem,{onClick:function(){f(Object(u.H)(t)),y(null)},children:j("stations.current")}),Object(h.jsx)(a.MenuItem,{onClick:C("edit"),children:j("stations.edit.button")}),Object(h.jsx)(a.MenuItem,{onClick:C("remove"),children:j("stations.remove.button")})]})]})]})},f=n(22),p=n(37),O=n(4),m=n(1),g=function(){return Math.floor(Math.random()*Math.pow(36,4)).toString(36).padStart(4,"0")};function x(e){var t="\u7678\u7532\u4e59\u4e19\u4e01\u620a\u5df1\u5e9a\u8f9b\u58ec\u65e5\u6708\u91d1\u6728\u6c34\u706b\u571f\u7af9\u6208\u5341\u5927\u4e2d\u4e00\u5f13\u4eba\u5fc3\u624b\u53e3\u5c38\u5eff\u5c71\u5973\u7530\u96e3\u535c\u91cd".split(""),n="Zero One Two Three Four Five Six Seven Eight Nine Alfa Bravo Charlie Delta Echo Foxtrot Golf Hotel India Juliett Kilo Lima Mike November Oscar Papa Quebec Romeo Sierra Tango Uniform Victor Whiskey X-ray Yankee Zulu".split(" ");return[e.split("").map((function(e){return t[parseInt(e,36)]})).join(""),e.split("").map((function(e){return n[parseInt(e,36)]})).join(" ")]}var v=Object(a.makeStyles)((function(){return Object(a.createStyles)({dialogContent:{padding:8},select:{width:166,marginLeft:8}})})),I=i.a.memo((function(e){var t=Object(s.useTranslation)().t,n=v(),d=Object(o.b)(),j=Object(o.c)((function(e){return e.param.style})),b=Object(o.c)((function(e){return e.param.stn_list})),I=Object(o.c)((function(e){return e.helper})).tpo,y={centre:t("stations.add.centre"),upper:t("stations.add.upper"),lower:t("stations.add.lower"),newupper:t("stations.add.newUpper"),newlower:t("stations.add.newLower")},C=i.a.useState("before"),S=Object(r.a)(C,2),k=S[0],T=S[1],w=i.a.useState(I[0]),D=Object(r.a)(w,2),E=D[0],L=D[1],N=i.a.useState(Object.keys(y)[0]),M=Object(r.a)(N,2),_=M[0],B=M[1],A=i.a.useState(Array(5).fill(!0)),F=Object(r.a)(A,2),z=F[0],G=F[1],J=i.a.useState(""),P=Object(r.a)(J,2),R=P[0],Z=P[1],H=i.a.useState([]),Q=Object(r.a)(H,2),K=Q[0],U=Q[1],W=Object(c.useMemo)((function(){return function(e,t,n){switch(n[t]?n[t]["before"===e?"parents":"children"].length:0){case 2:return[1,1,1,[],[]];case 1:var r=Object(p.a)(t,n);if(0===r){var c=function(e,t,n){var r=[];if("before"===e){for(;1===n[t].parents.length;)t=n[t].parents[0],r.unshift(t);r.pop()}else{for(;1===n[t].children.length;)t=n[t].children[0],r.push(t);r.shift()}return r}(e,t,n);return[1,0,0,c=c.length?c:[],c]}return r<0?"before"===e?[n[n[t].parents[0]].children.length-1,0,1,[],[]]:[n[n[t].children[0]].parents.length-1,0,1,[],[]]:"before"===e?[n[n[t].parents[0]].children.length-1,1,0,[],[]]:[n[n[t].children[0]].parents.length-1,1,0,[],[]]}return[0,0,0,[],[]]}(k,E,b)}),[k,E,b]);Object(c.useEffect)((function(){G(W.map((function(e){return"number"===typeof e?Boolean(e):Boolean(e.length)}))),U(W[3])}),[W.toString()]),Object(c.useEffect)((function(){return B(Object.keys(y)[z.indexOf(!0)])}),[z]),Object(c.useEffect)((function(){0!==K.length&&Z(K[0])}),[K]),Object(c.useEffect)((function(){E in b||L(I[0])}),[Object.keys(b).toString()]);var V=function(t){if("close"===t)e.onClose("close");else{var n=function(e,t,n,r,c){for(var i=g();Object.keys(c).includes(i);)i=g();var a={name:x(i),secondaryName:!1,num:"00",services:[l.l.local],parents:[],children:[],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:l.m.right,paid_area:!0,osi_names:[]},facility:l.e.none},s=JSON.parse(JSON.stringify(c));return"before"===e?"centre"===n?(a.parents=c[t].parents,0===c[t].parents.length&&0!==Object(p.a)(t,c)?a.children=c.linestart.children:0!==Object(p.a)(t,c)?(a.children=c[c[t].parents[0]].children.slice(),a.branch.right=c[a.parents[0]].branch.right,s[a.parents[0]].branch.right=[]):(a.children=[t],a.branch.left=c[t].branch.left,s[t].branch.left=[]),a.parents.forEach((function(e){s[e].children=[i]})),a.children.forEach((function(e){s[e].parents=[i]}))):"upper"===n?2===c[t].parents.length?(c[t].branch.left[1]===c[t].parents[0]&&(s[t].branch.left[1]=i),a.parents=c[t].parents.slice(0,1),a.children=[t],a.parents.forEach((function(e){s[e].children=[i]})),s[t].parents[0]=i):(a.parents=c[t].parents,a.children=[t],a.parents.forEach((function(e){s[e].children[0]=i,c[e].branch.right[1]===t&&(s[e].branch.right[1]=i)})),a.children.forEach((function(e){s[e].parents=[i]}))):"lower"===n?2===c[t].parents.length?(c[t].branch.left[1]===c[t].parents[1]&&(s[t].branch.left[1]=i),a.parents=c[t].parents.slice(1),a.children=[t],a.parents.forEach((function(e){s[e].children=[i]})),s[t].parents[1]=i):(a.parents=c[t].parents,a.children=[t],a.parents.forEach((function(e){var n=c[e].children.length;s[e].children[n-1]=i,c[e].branch.right[1]===t&&(s[e].branch.right[1]=i)})),a.children.forEach((function(e){s[e].parents=[i]}))):(s[t].branch.left=[l.b.through,i],s[r].branch.right=[l.b.through,i],a.parents=[r],a.children=[t],"newupper"===n?(s[r].children.unshift(i),s[t].parents.unshift(i)):(s[r].children.push(i),s[t].parents.push(i))):"centre"===n?(a.children=c[t].children,0===c[t].children.length&&0!==Object(p.a)(t,c)?a.parents=c.lineend.parents:0!==Object(p.a)(t,c)?(a.parents=c[c[t].children[0]].parents,a.branch.left=c[a.children[0]].branch.left,s[a.children[0]].branch.left=[]):(a.parents=[t],a.branch.right=c[t].branch.right,s[t].branch.right=[]),a.children.forEach((function(e){s[e].parents=[i]})),a.parents.forEach((function(e){s[e].children=[i]}))):"upper"===n?2===c[t].children.length?(c[t].branch.right[1]===c[t].children[0]&&(s[t].branch.right[1]=i),a.children=c[t].children.slice(0,1),a.parents=[t],a.children.forEach((function(e){s[e].parents=[i]})),s[t].children[0]=i):(a.children=c[t].children,a.parents=[t],a.children.forEach((function(e){s[e].parents[0]=i,c[e].branch.left[1]===t&&(s[e].branch.left[1]=i)})),a.parents.forEach((function(e){s[e].children=[i]}))):"lower"===n?2===c[t].children.length?(c[t].branch.right[1]===c[t].children[1]&&(s[t].branch.right[1]=i),a.children=c[t].children.slice(1),a.parents=[t],a.children.forEach((function(e){s[e].parents=[i]})),s[t].children[1]=i):(a.children=c[t].children,a.parents=[t],a.children.forEach((function(e){s[e].parents[1===c[e].parents.length?0:1]=i,c[e].branch.left[1]===t&&(s[e].branch.left[1]=i)})),a.parents.forEach((function(e){s[e].children=[i]}))):(s[t].branch.right=[l.b.through,i],s[r].branch.left=[l.b.through,i],a.children=[r],a.parents=[t],"newupper"===n?(s[r].parents.unshift(i),s[t].children.unshift(i)):(s[r].parents.push(i),s[t].children.push(i))),[i,Object(m.a)(Object(m.a)({},s),{},Object(O.a)({},i,a))]}(k,E,_,R,b),c=Object(r.a)(n,2),i=c[0],a=c[1];d(Object(u.S)(a)),e.onClose(i)}};return Object(h.jsxs)(a.Dialog,{open:e.open,onClose:function(){return V("close")},children:[Object(h.jsx)(a.DialogTitle,{children:t("stations.add.title")}),Object(h.jsx)(a.DialogContent,{className:n.dialogContent,children:Object(h.jsxs)(a.List,{component:"div",disablePadding:!0,children:[Object(h.jsxs)(a.ListItem,{children:[Object(h.jsx)(a.ListItemIcon,{children:Object(h.jsx)(a.Icon,{children:"control_camera"})}),Object(h.jsx)(a.ListItemText,{primary:t("stations.add.prep")}),Object(h.jsx)(a.Select,{native:!0,onChange:function(e){return T(e.target.value)},value:k,className:n.select,children:["before","after"].map((function(e){return Object(h.jsx)("option",{value:e,children:t("stations.add."+e)},e)}))})]}),Object(h.jsx)(a.Divider,{variant:"middle"}),Object(h.jsxs)(a.ListItem,{children:[Object(h.jsx)(a.ListItemIcon,{children:Object(h.jsx)(a.Icon,{children:"near_me"})}),Object(h.jsx)(a.ListItemText,{primary:t("stations.add.pivot")}),Object(h.jsx)(a.Select,{native:!0,onChange:function(e){return L(e.target.value)},value:E,className:n.select,children:I.map((function(e){return Object(h.jsx)("option",{value:e,children:Object(f.a)(b[e],j)},e)}))})]}),Object(h.jsx)(a.Divider,{variant:"middle"}),Object(h.jsxs)(a.ListItem,{children:[Object(h.jsx)(a.ListItemIcon,{children:Object(h.jsx)(a.Icon,{children:"share"})}),Object(h.jsx)(a.ListItemText,{primary:t("stations.add.loc")}),Object(h.jsx)(a.Select,{native:!0,onChange:function(e){return B(e.target.value)},value:_,className:n.select,children:Object.keys(y).map((function(e,t){return Object(h.jsx)("option",{value:e,disabled:!z[t],children:y[e]},e)}))})]}),Object(h.jsx)(a.Divider,{variant:"middle",style:{display:["newupper","newlower"].includes(_)?"flex":"none"}}),Object(h.jsxs)(a.ListItem,{style:{display:["newupper","newlower"].includes(_)?"flex":"none"},children:[Object(h.jsx)(a.ListItemIcon,{children:Object(h.jsx)(a.Icon,{children:"undo"})}),Object(h.jsx)(a.ListItemText,{primary:t("stations.add.end")}),Object(h.jsx)(a.Select,{native:!0,onChange:function(e){return Z(e.target.value)},value:R,className:n.select,children:K.map((function(e){return Object(h.jsx)("option",{value:e,children:Object(f.a)(b[e],j)},e)}))})]})]})}),Object(h.jsxs)(a.DialogActions,{children:[Object(h.jsx)(a.Button,{onClick:function(){return V("close")},color:"primary",children:t("dialog.cancel")}),Object(h.jsx)(a.Button,{onClick:function(){return V("accept")},color:"primary",autoFocus:!0,children:t("dialog.ok")})]})]})}),(function(e,t){return e.open===t.open})),y=i.a.lazy((function(){return n.e(111).then(n.bind(null,150))})),C=i.a.lazy((function(){return n.e(109).then(n.bind(null,163))})),S=i.a.lazy((function(){return n.e(108).then(n.bind(null,151))})),k=i.a.lazy((function(){return n.e(110).then(n.bind(null,152))})),T=Object(a.makeStyles)((function(){return Object(a.createStyles)({tab:{padding:"6px 24px",height:48,minWidth:"calc(100% / 4)","& .MuiTab-wrapper":{flexDirection:"row"},"&.MuiTab-labelIcon":{minHeight:"unset","& .MuiTab-wrapper":{"& > *:first-child":{marginBottom:0},"& > *:not(first-child)":{paddingLeft:8}}}}})}));var w=function(e){var t=Object(s.useTranslation)().t,n=Object(a.useTheme)(),r=Object(a.useMediaQuery)(n.breakpoints.down("xs"));return Object(a.useMediaQuery)(n.breakpoints.down("sm"))?Object(h.jsxs)(a.Dialog,{onClose:e.onClose,open:e.open,fullScreen:r,children:[Object(h.jsx)(a.DialogTitle,{children:t("stations.edit.title")}),Object(h.jsx)(a.DialogContent,{dividers:!0,style:{padding:"0 16px"},children:e.children}),Object(h.jsx)(a.DialogActions,{children:Object(h.jsx)(a.Button,{onClick:e.onClose,color:"primary",children:t("dialog.done")})})]}):Object(h.jsx)(a.Paper,{children:e.children})},D=function(e){var t=Object(s.useTranslation)().t,n=i.a.useState(0),c=Object(r.a)(n,2),o=c[0],l=c[1],u=T(),d=i.a.useMemo((function(){return Object(h.jsx)(a.Tabs,{value:o,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return l(t)},variant:"scrollable",scrollButtons:"off",children:[["name","title"],["interchange","transfer_within_a_station"],["branch","share"],["more","more_horiz"]].map((function(e,n){return Object(h.jsx)(a.Tab,{label:Object(h.jsx)("span",{children:t("stations.edit.tab."+e[0])}),icon:Object(h.jsx)(a.Icon,{children:e[1]}),className:u.tab},n)}))})}),[o,u.tab]);return Object(h.jsxs)(w,Object(m.a)(Object(m.a)({},e),{},{children:[d,Object(h.jsx)(a.Typography,{component:"div",role:"tabpanel",children:Object(h.jsx)(i.a.Suspense,{fallback:Object(h.jsx)(a.CircularProgress,{}),children:function(t){switch(t){case 0:return Object(h.jsx)(y,{stnId:e.stnId});case 1:return Object(h.jsx)(C,{stnId:e.stnId});case 2:return Object(h.jsx)(S,{stnId:e.stnId});case 3:return Object(h.jsx)(k,{stnId:e.stnId})}}(o)})})]}))};function E(e){var t,n=e.stnId,i=e.open,l=e.onClose,d=Object(s.useTranslation)().t,j=Object(o.b)(),b=Object(o.c)((function(e){return e.param.stn_list})),f=Object(o.c)((function(e){return e.param.current_stn_idx})),O=Object(c.useState)(!1),m=Object(r.a)(O,2),g=m[0],x=m[1],v=function(e){return function(){if("accept"===e){var t=function(e,t){var n=JSON.parse(JSON.stringify(t)),r=n[e].parents,c=n[e].children,i=!0;for(var a in n)if(![e,"linestart","lineend"].includes(a)&&0===Object(p.a)(a,n)){i=!1;break}if(2===r.length&&2===c.length)return!1;if(i)return!1;if(4===Object.keys(n).length)return!1;if(2===r.length||2===c.length)console.log("this case"),r.forEach((function(e){n[e].children=c})),c.forEach((function(e){n[e].parents=r})),1===r.length&&(n[r[0]].branch.right=n[e].branch.right),1===c.length&&(n[c[0]].branch.left=n[e].branch.left);else if(2===n[r[0]].children.length&&2===n[c[0]].parents.length){var s=n[r[0]].children.indexOf(e),o=n[c[0]].parents.indexOf(e);n[r[0]].children.splice(s,1),n[c[0]].parents.splice(o,1),n[r[0]].branch.right=[],n[c[0]].branch.left=[]}else r.forEach((function(t){var r=n[t].children.indexOf(e);c.length?n[t].children[r]=c[0]:n[t].children.splice(r,1),n[t].branch.right[1]===e&&(n[t].branch.right[1]=c[0])})),c.forEach((function(t){var c=n[t].parents.indexOf(e);r.length?n[t].parents[c]=r[0]:n[t].parents.splice(c,1),n[t].branch.left[1]===e&&(n[t].branch.left[1]=r[0])}));return delete n[e],n}(n,b);if(!1===t)x(!0);else{if(f===n){var r=Object.keys(t).filter((function(e){return!["linestart","lineend"].includes(e)}))[0];j(Object(u.H)(r))}j(Object(u.S)(t))}}l()}};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(a.Dialog,{open:i,onClose:v("close"),children:[Object(h.jsx)(a.DialogTitle,{children:d("stations.remove.title")}),Object(h.jsx)(a.DialogContent,{children:Object(h.jsx)(a.DialogContentText,{children:Object(h.jsx)(s.Trans,{i18nKey:"stations.remove.msg",children:{name:null===(t=b[e.stnId])||void 0===t?void 0:t.name.join()}})})}),Object(h.jsxs)(a.DialogActions,{children:[Object(h.jsx)(a.Button,{onClick:v("close"),color:"primary",autoFocus:!0,children:d("dialog.cancel")}),Object(h.jsx)(a.Button,{onClick:v("accept"),color:"primary",children:d("stations.remove.button")})]})]}),Object(h.jsx)(L,{open:g,onClose:function(){return x(!1)}})]})}var L=Object(c.memo)((function(e){var t=Object(s.useTranslation)().t;return Object(h.jsxs)(a.Dialog,{open:e.open,onClose:e.onClose,children:[Object(h.jsx)(a.DialogTitle,{children:t("stations.remove.error.title")}),Object(h.jsx)(a.DialogContent,{children:Object(h.jsx)(a.DialogContentText,{children:t("stations.remove.error.msg")})}),Object(h.jsx)(a.DialogActions,{children:Object(h.jsx)(a.Button,{onClick:e.onClose,color:"primary",autoFocus:!0,children:t("dialog.ok")})})]})}),(function(e,t){return e.open===t.open})),N=Object(a.makeStyles)((function(e){return Object(a.createStyles)({fab:{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}})})),M=i.a.memo((function(e){var t=Object(s.useTranslation)().t,n=Object(o.c)((function(e){return e.param.style})),c=N(),u=i.a.useState(null),d=Object(r.a)(u,2),j=d[0],b=d[1],f=function(t){return function(){b(null),e.onAction(t)}};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(a.Tooltip,{title:t("stations.fabs.tooltip"),"aria-label":"options",children:Object(h.jsx)(a.Fab,{color:"primary",className:c.fab,onClick:function(e){return b(e.target)},children:Object(h.jsx)(a.Icon,{children:"more_vert"})})}),Object(h.jsxs)(a.Menu,{anchorEl:j,open:Boolean(j),onClose:function(){return b(null)},children:[Object(h.jsxs)(a.MenuItem,{onClick:f("add"),children:[Object(h.jsx)(a.ListItemIcon,{children:Object(h.jsx)(a.Icon,{children:"add_box"})}),Object(h.jsx)(a.ListItemText,{primary:t("stations.fabs.add")})]}),Object(h.jsxs)(a.MenuItem,{onClick:f("reverse"),children:[Object(h.jsx)(a.ListItemIcon,{children:Object(h.jsx)(a.Icon,{children:"cached"})}),Object(h.jsx)(a.ListItemText,{primary:t("stations.fabs.reverse")})]}),n===l.k.GZMTR&&Object(h.jsxs)(a.MenuItem,{onClick:f("autonum"),children:[Object(h.jsx)(a.ListItemIcon,{children:Object(h.jsx)(a.Icon,{children:"filter_1"})}),Object(h.jsx)(a.ListItemText,{primary:t("design.autoNum.button")})]})]})]})}),(function(){return!0})),_=function(e){var t=Object(s.useTranslation)().t,n=Object(o.b)(),r=Object(o.c)((function(e){return e.helper})).branches,c=function(t){var c=r[0];c.forEach((function(e,r){var i;i="ascend"===t?r.toString().padStart(2,"0"):(c.length-1-r).toString().padStart(2,"0"),n(Object(u.gb)(e,i))})),e.onClose()};return i.a.useMemo((function(){return Object(h.jsxs)(a.Dialog,{onClose:e.onClose,open:e.open,children:[Object(h.jsx)(a.DialogTitle,{children:t("design.autoNum.title")}),Object(h.jsx)(a.DialogContent,{children:Object(h.jsx)(a.DialogContentText,{children:t("design.autoNum.msg")})}),Object(h.jsxs)(a.DialogActions,{children:[Object(h.jsx)(a.Button,{onClick:e.onClose,color:"primary",autoFocus:!0,children:t("dialog.cancel")}),Object(h.jsx)(a.Button,{onClick:function(){return c("ascend")},color:"primary",children:t("design.autoNum.ascend")}),Object(h.jsx)(a.Button,{onClick:function(){return c("descend")},color:"primary",children:t("design.autoNum.descend")})]})]})}),[e.open])},B=Object(a.makeStyles)((function(){return Object(a.createStyles)({gridContainer:{height:"100%",overflow:"hidden"},gridItem:{height:"100%",overflow:"auto"}})})),A=function(){var e=B(),t=Object(o.b)(),n=Object(o.c)((function(e){return e.param.style})),i=Object(c.useState)(""),s=Object(r.a)(i,2),d=s[0],b=s[1],f=Object(c.useState)(!1),p=Object(r.a)(f,2),O=p[0],m=p[1],g=Object(c.useState)(!1),x=Object(r.a)(g,2),v=x[0],y=x[1],C=Object(c.useState)(!1),S=Object(r.a)(C,2),k=S[0],T=S[1],w=Object(c.useState)(""),L=Object(r.a)(w,2),N=L[0],A=L[1],F=Object(c.useState)(!1),z=Object(r.a)(F,2),G=z[0],J=z[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(a.Grid,{container:!0,spacing:1,className:e.gridContainer,children:[Object(h.jsx)(a.Grid,{item:!0,xs:12,md:4,className:e.gridItem,children:Object(h.jsx)(j,{selectedId:d,onAction:function(e){return function(t){"edit"===t&&(b(e),m(!0)),"remove"===t&&(d===e&&b(""),A(e),J(!0))}}})}),Object(h.jsx)(a.Grid,{item:!0,xs:8,className:e.gridItem,children:d&&Object(h.jsx)(D,{open:O,stnId:d,onClose:function(){return m(!1)}})})]}),Object(h.jsx)(M,{onAction:function(e){"add"===e&&y(!0),"reverse"===e&&t(Object(u.F)()),"autonum"===e&&T(!0)}}),Object(h.jsx)(I,{open:v,onClose:function(e){y(!1),"close"!==e&&(b(e),m(!0))}}),Object(h.jsx)(E,{open:G,onClose:function(){return J(!1)},stnId:N}),n===l.k.GZMTR&&Object(h.jsx)(_,{open:k,onClose:function(){return T(!1)}})]})};t.default=A},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(t,n){if(["linestart","lineend"].includes(t)||n[t].parents.length>1||n[t].children.length>1)return 0;var r=n[t].parents[0];return r?1===n[r].children.length?e(r,n):0===n[r].children.indexOf(t)?1:-1:0}}}]);
//# sourceMappingURL=panelStations.4394ac8c.chunk.js.map