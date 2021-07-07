(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[82],{125:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n(3),i=n.n(c),a=n(4),s=n(15),o=n(11),l=n(10),h=n(5),u=n(1),d=Object(a.makeStyles)((function(e){return Object(a.createStyles)({listItemNum:{marginRight:e.spacing(1),fontSize:"1.2rem"},listItemText:{display:"flex",alignItems:"baseline",whiteSpace:"nowrap",overflow:"hidden","& .MuiListItemText-primary":{marginRight:e.spacing(1)}},selectedItem:{background:e.palette.action.hover}})})),j=function(e){var t=Object(c.useContext)(s.a).tpo;return Object(u.jsx)(a.Paper,{children:Object(u.jsx)(a.List,{dense:!0,disablePadding:!0,children:t.map((function(t){return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)(b,{stnId:t,isSelected:t===e.selectedId,onAction:e.onAction(t)}),Object(u.jsx)(a.Divider,{})]},t)}))})})},b=function(e){var t=Object(o.useTranslation)().t,n=d(),i=Object(l.useSelector)((function(e){return e.app.rmgStyle})),j=Object(c.useContext)(s.a),b=j.param,p=j.dispatch,f=b.stn_list[e.stnId]||b.stn_list.linestart,O=f.name,m=f.num,g=Object(c.useState)(null),x=Object(r.a)(g,2),I=x[0],v=x[1],y=function(t){return function(){e.onAction(t),v(null)}};return Object(u.jsxs)(a.ListItem,{className:e.isSelected?n.selectedItem:"",children:[i===h.f.GZMTR&&Object(u.jsx)(a.Typography,{className:n.listItemNum,children:m}),Object(u.jsx)(a.ListItemText,{primary:O[0],secondary:O[1].replace("\\"," "),className:n.listItemText}),Object(u.jsxs)(a.ListItemSecondaryAction,{children:[Object(u.jsx)(a.IconButton,{size:"small",onClick:function(e){return v(e.currentTarget)},children:Object(u.jsx)(a.Icon,{children:"more_vert"})}),Object(u.jsxs)(a.Menu,{anchorEl:I,open:Boolean(I),onClose:function(){return v(null)},children:[Object(u.jsx)(a.MenuItem,{onClick:function(){p({type:"SET_CURRENT_STATION",stnId:e.stnId}),v(null)},children:t("stations.current")}),Object(u.jsx)(a.MenuItem,{onClick:y("edit"),children:t("stations.edit.button")}),Object(u.jsx)(a.MenuItem,{onClick:y("remove"),children:t("stations.remove.button")})]})]})]})},p=n(21),f=n(18),O=n(2),m=n(0),g=function(){return Math.floor(Math.random()*Math.pow(36,4)).toString(36).padStart(4,"0")};function x(e){var t="\u7678\u7532\u4e59\u4e19\u4e01\u620a\u5df1\u5e9a\u8f9b\u58ec\u65e5\u6708\u91d1\u6728\u6c34\u706b\u571f\u7af9\u6208\u5341\u5927\u4e2d\u4e00\u5f13\u4eba\u5fc3\u624b\u53e3\u5c38\u5eff\u5c71\u5973\u7530\u96e3\u535c\u91cd".split(""),n="Zero One Two Three Four Five Six Seven Eight Nine Alfa Bravo Charlie Delta Echo Foxtrot Golf Hotel India Juliett Kilo Lima Mike November Oscar Papa Quebec Romeo Sierra Tango Uniform Victor Whiskey X-ray Yankee Zulu".split(" ");return[e.split("").map((function(e){return t[parseInt(e,36)]})).join(""),e.split("").map((function(e){return n[parseInt(e,36)]})).join(" ")]}var I=Object(a.makeStyles)((function(){return Object(a.createStyles)({dialogContent:{padding:8},select:{width:166,marginLeft:8}})})),v=i.a.memo((function(e){var t=Object(o.useTranslation)().t,n=I(),h=Object(l.useSelector)((function(e){return e.app.rmgStyle})),d=Object(c.useContext)(s.a),j=d.param,b=d.dispatch,v=d.tpo,y=j.stn_list,S={centre:t("stations.add.centre"),upper:t("stations.add.upper"),lower:t("stations.add.lower"),newupper:t("stations.add.newUpper"),newlower:t("stations.add.newLower")},C=i.a.useState("before"),T=Object(r.a)(C,2),k=T[0],E=T[1],w=i.a.useState(v[0]),N=Object(r.a)(w,2),D=N[0],L=N[1],_=i.a.useState(Object.keys(S)[0]),M=Object(r.a)(_,2),A=M[0],B=M[1],F=i.a.useState(Array(5).fill(!0)),R=Object(r.a)(F,2),P=R[0],U=R[1],z=i.a.useState(""),G=Object(r.a)(z,2),J=G[0],Z=G[1],Q=i.a.useState([]),H=Object(r.a)(Q,2),K=H[0],V=H[1],W=Object(c.useMemo)((function(){return function(e,t,n){switch(n[t]?n[t]["before"===e?"parents":"children"].length:0){case 2:return[1,1,1,[],[]];case 1:var r=Object(f.c)(t,n);if(0===r){var c=function(e,t,n){var r=[];if("before"===e){for(;1===n[t].parents.length;)t=n[t].parents[0],r.unshift(t);r.pop()}else{for(;1===n[t].children.length;)t=n[t].children[0],r.push(t);r.shift()}return r}(e,t,n);return[1,0,0,c=c.length?c:[],c]}return r<0?"before"===e?[n[n[t].parents[0]].children.length-1,0,1,[],[]]:[n[n[t].children[0]].parents.length-1,0,1,[],[]]:"before"===e?[n[n[t].parents[0]].children.length-1,1,0,[],[]]:[n[n[t].children[0]].parents.length-1,1,0,[],[]]}return[0,0,0,[],[]]}(k,D,y)}),[k,D,y]);Object(c.useEffect)((function(){U(W.map((function(e){return"number"===typeof e?Boolean(e):Boolean(e.length)}))),V(W[3])}),[W.toString()]),Object(c.useEffect)((function(){return B(Object.keys(S)[P.indexOf(!0)])}),[P]),Object(c.useEffect)((function(){0!==K.length&&Z(K[0])}),[K]),Object(c.useEffect)((function(){D in y||L(v[0])}),[Object.keys(y).toString()]);var X=function(t){if("close"===t)e.onClose("close");else{var n=function(e,t,n,r,c){for(var i=g();Object.keys(c).includes(i);)i=g();var a={name:x(i),secondaryName:!1,num:"00",services:["local"],parents:[],children:[],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},s=JSON.parse(JSON.stringify(c));return"before"===e?"centre"===n?(a.parents=c[t].parents,0===c[t].parents.length&&0!==Object(f.c)(t,c)?a.children=c.linestart.children:0!==Object(f.c)(t,c)?(a.children=c[c[t].parents[0]].children.slice(),a.branch.right=c[a.parents[0]].branch.right,s[a.parents[0]].branch.right=[]):(a.children=[t],a.branch.left=c[t].branch.left,s[t].branch.left=[]),a.parents.forEach((function(e){s[e].children=[i]})),a.children.forEach((function(e){s[e].parents=[i]}))):"upper"===n?2===c[t].parents.length?(c[t].branch.left[1]===c[t].parents[0]&&(s[t].branch.left[1]=i),a.parents=c[t].parents.slice(0,1),a.children=[t],a.parents.forEach((function(e){s[e].children=[i]})),s[t].parents[0]=i):(a.parents=c[t].parents,a.children=[t],a.parents.forEach((function(e){s[e].children[0]=i,c[e].branch.right[1]===t&&(s[e].branch.right[1]=i)})),a.children.forEach((function(e){s[e].parents=[i]}))):"lower"===n?2===c[t].parents.length?(c[t].branch.left[1]===c[t].parents[1]&&(s[t].branch.left[1]=i),a.parents=c[t].parents.slice(1),a.children=[t],a.parents.forEach((function(e){s[e].children=[i]})),s[t].parents[1]=i):(a.parents=c[t].parents,a.children=[t],a.parents.forEach((function(e){var n=c[e].children.length;s[e].children[n-1]=i,c[e].branch.right[1]===t&&(s[e].branch.right[1]=i)})),a.children.forEach((function(e){s[e].parents=[i]}))):(s[t].branch.left=["through",i],s[r].branch.right=["through",i],a.parents=[r],a.children=[t],"newupper"===n?(s[r].children.unshift(i),s[t].parents.unshift(i)):(s[r].children.push(i),s[t].parents.push(i))):"centre"===n?(a.children=c[t].children,0===c[t].children.length&&0!==Object(f.c)(t,c)?a.parents=c.lineend.parents:0!==Object(f.c)(t,c)?(a.parents=c[c[t].children[0]].parents,a.branch.left=c[a.children[0]].branch.left,s[a.children[0]].branch.left=[]):(a.parents=[t],a.branch.right=c[t].branch.right,s[t].branch.right=[]),a.children.forEach((function(e){s[e].parents=[i]})),a.parents.forEach((function(e){s[e].children=[i]}))):"upper"===n?2===c[t].children.length?(c[t].branch.right[1]===c[t].children[0]&&(s[t].branch.right[1]=i),a.children=c[t].children.slice(0,1),a.parents=[t],a.children.forEach((function(e){s[e].parents=[i]})),s[t].children[0]=i):(a.children=c[t].children,a.parents=[t],a.children.forEach((function(e){s[e].parents[0]=i,c[e].branch.left[1]===t&&(s[e].branch.left[1]=i)})),a.parents.forEach((function(e){s[e].children=[i]}))):"lower"===n?2===c[t].children.length?(c[t].branch.right[1]===c[t].children[1]&&(s[t].branch.right[1]=i),a.children=c[t].children.slice(1),a.parents=[t],a.children.forEach((function(e){s[e].parents=[i]})),s[t].children[1]=i):(a.children=c[t].children,a.parents=[t],a.children.forEach((function(e){s[e].parents[1===c[e].parents.length?0:1]=i,c[e].branch.left[1]===t&&(s[e].branch.left[1]=i)})),a.parents.forEach((function(e){s[e].children=[i]}))):(s[t].branch.right=["through",i],s[r].branch.left=["through",i],a.children=[r],a.parents=[t],"newupper"===n?(s[r].parents.unshift(i),s[t].children.unshift(i)):(s[r].parents.push(i),s[t].children.push(i))),[i,Object(m.a)(Object(m.a)({},s),{},Object(O.a)({},i,a))]}(k,D,A,J,y),c=Object(r.a)(n,2),i=c[0],a=c[1];b({type:"UPDATE_STATION_LIST",stnList:a}),e.onClose(i)}};return Object(u.jsxs)(a.Dialog,{open:e.open,onClose:function(){return X("close")},children:[Object(u.jsx)(a.DialogTitle,{children:t("stations.add.title")}),Object(u.jsx)(a.DialogContent,{className:n.dialogContent,children:Object(u.jsxs)(a.List,{component:"div",disablePadding:!0,children:[Object(u.jsxs)(a.ListItem,{children:[Object(u.jsx)(a.ListItemIcon,{children:Object(u.jsx)(a.Icon,{children:"control_camera"})}),Object(u.jsx)(a.ListItemText,{primary:t("stations.add.prep")}),Object(u.jsx)(a.Select,{native:!0,onChange:function(e){return E(e.target.value)},value:k,className:n.select,children:["before","after"].map((function(e){return Object(u.jsx)("option",{value:e,children:t("stations.add."+e)},e)}))})]}),Object(u.jsx)(a.Divider,{variant:"middle"}),Object(u.jsxs)(a.ListItem,{children:[Object(u.jsx)(a.ListItemIcon,{children:Object(u.jsx)(a.Icon,{children:"near_me"})}),Object(u.jsx)(a.ListItemText,{primary:t("stations.add.pivot")}),Object(u.jsx)(a.Select,{native:!0,onChange:function(e){return L(e.target.value)},value:D,className:n.select,children:v.map((function(e){return Object(u.jsx)("option",{value:e,children:Object(p.a)(y[e],h)},e)}))})]}),Object(u.jsx)(a.Divider,{variant:"middle"}),Object(u.jsxs)(a.ListItem,{children:[Object(u.jsx)(a.ListItemIcon,{children:Object(u.jsx)(a.Icon,{children:"share"})}),Object(u.jsx)(a.ListItemText,{primary:t("stations.add.loc")}),Object(u.jsx)(a.Select,{native:!0,onChange:function(e){return B(e.target.value)},value:A,className:n.select,children:Object.keys(S).map((function(e,t){return Object(u.jsx)("option",{value:e,disabled:!P[t],children:S[e]},e)}))})]}),Object(u.jsx)(a.Divider,{variant:"middle",style:{display:["newupper","newlower"].includes(A)?"flex":"none"}}),Object(u.jsxs)(a.ListItem,{style:{display:["newupper","newlower"].includes(A)?"flex":"none"},children:[Object(u.jsx)(a.ListItemIcon,{children:Object(u.jsx)(a.Icon,{children:"undo"})}),Object(u.jsx)(a.ListItemText,{primary:t("stations.add.end")}),Object(u.jsx)(a.Select,{native:!0,onChange:function(e){return Z(e.target.value)},value:J,className:n.select,children:K.map((function(e){return Object(u.jsx)("option",{value:e,children:Object(p.a)(y[e],h)},e)}))})]})]})}),Object(u.jsxs)(a.DialogActions,{children:[Object(u.jsx)(a.Button,{onClick:function(){return X("close")},color:"primary",children:t("dialog.cancel")}),Object(u.jsx)(a.Button,{onClick:function(){return X("accept")},color:"primary",autoFocus:!0,children:t("dialog.ok")})]})]})}),(function(e,t){return e.open===t.open})),y=i.a.lazy((function(){return n.e(86).then(n.bind(null,122))})),S=i.a.lazy((function(){return n.e(84).then(n.bind(null,134))})),C=i.a.lazy((function(){return n.e(83).then(n.bind(null,123))})),T=i.a.lazy((function(){return n.e(85).then(n.bind(null,124))})),k=Object(a.makeStyles)((function(){return Object(a.createStyles)({tab:{padding:"6px 24px",height:48,minWidth:"calc(100% / 4)","& .MuiTab-wrapper":{flexDirection:"row"},"&.MuiTab-labelIcon":{minHeight:"unset","& .MuiTab-wrapper":{"& > *:first-child":{marginBottom:0},"& > *:not(first-child)":{paddingLeft:8}}}}})}));var E=function(e){var t=Object(o.useTranslation)().t,n=Object(a.useTheme)(),r=Object(a.useMediaQuery)(n.breakpoints.down("xs"));return Object(a.useMediaQuery)(n.breakpoints.down("sm"))?Object(u.jsxs)(a.Dialog,{onClose:e.onClose,open:e.open,fullScreen:r,children:[Object(u.jsx)(a.DialogTitle,{children:t("stations.edit.title")}),Object(u.jsx)(a.DialogContent,{dividers:!0,style:{padding:"0 16px"},children:e.children}),Object(u.jsx)(a.DialogActions,{children:Object(u.jsx)(a.Button,{onClick:e.onClose,color:"primary",children:t("dialog.done")})})]}):Object(u.jsx)(a.Paper,{children:e.children})},w=function(e){var t=Object(o.useTranslation)().t,n=i.a.useState(0),c=Object(r.a)(n,2),s=c[0],l=c[1],h=k(),d=i.a.useMemo((function(){return Object(u.jsx)(a.Tabs,{value:s,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return l(t)},variant:"scrollable",scrollButtons:"off",children:[["name","title"],["interchange","transfer_within_a_station"],["branch","share"],["more","more_horiz"]].map((function(e,n){return Object(u.jsx)(a.Tab,{label:Object(u.jsx)("span",{children:t("stations.edit.tab."+e[0])}),icon:Object(u.jsx)(a.Icon,{children:e[1]}),className:h.tab},n)}))})}),[s,h.tab]);return Object(u.jsxs)(E,Object(m.a)(Object(m.a)({},e),{},{children:[d,Object(u.jsx)(a.Typography,{component:"div",role:"tabpanel",children:Object(u.jsx)(i.a.Suspense,{fallback:Object(u.jsx)(a.CircularProgress,{}),children:function(t){switch(t){case 0:return Object(u.jsx)(y,{stnId:e.stnId});case 1:return Object(u.jsx)(S,{stnId:e.stnId});case 2:return Object(u.jsx)(C,{stnId:e.stnId});case 3:return Object(u.jsx)(T,{stnId:e.stnId})}}(s)})})]}))};function N(e){var t,n=Object(o.useTranslation)().t,i=Object(c.useContext)(s.a),l=i.param,h=i.dispatch,d=l.stn_list,j=Object(c.useState)(!1),b=Object(r.a)(j,2),p=b[0],O=b[1],m=function(t){return function(){if("accept"===t){var n=function(e,t){var n=JSON.parse(JSON.stringify(t)),r=n[e].parents,c=n[e].children,i=!0;for(var a in n)if(![e,"linestart","lineend"].includes(a)&&0===Object(f.c)(a,n)){i=!1;break}if(2===r.length&&2===c.length)return!1;if(i)return!1;if(4===Object.keys(n).length)return!1;if(2===r.length||2===c.length)console.log("this case"),r.forEach((function(e){n[e].children=c})),c.forEach((function(e){n[e].parents=r})),1===r.length&&(n[r[0]].branch.right=n[e].branch.right),1===c.length&&(n[c[0]].branch.left=n[e].branch.left);else if(2===n[r[0]].children.length&&2===n[c[0]].parents.length){var s=n[r[0]].children.indexOf(e),o=n[c[0]].parents.indexOf(e);n[r[0]].children.splice(s,1),n[c[0]].parents.splice(o,1),n[r[0]].branch.right=[],n[c[0]].branch.left=[]}else r.forEach((function(t){var r=n[t].children.indexOf(e);c.length?n[t].children[r]=c[0]:n[t].children.splice(r,1),n[t].branch.right[1]===e&&(n[t].branch.right[1]=c[0])})),c.forEach((function(t){var c=n[t].parents.indexOf(e);r.length?n[t].parents[c]=r[0]:n[t].parents.splice(c,1),n[t].branch.left[1]===e&&(n[t].branch.left[1]=r[0])}));return delete n[e],n}(e.stnId,d);if(!1===n)O(!0);else{if(l.current_stn_idx===e.stnId){var r=Object.keys(n).filter((function(e){return!["linestart","lineend"].includes(e)}))[0];h({type:"SET_CURRENT_STATION",stnId:r})}h({type:"UPDATE_STATION_LIST",stnList:n})}}e.onClose()}};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(a.Dialog,{open:e.open,onClose:m("close"),children:[Object(u.jsx)(a.DialogTitle,{children:n("stations.remove.title")}),Object(u.jsx)(a.DialogContent,{children:Object(u.jsx)(a.DialogContentText,{children:Object(u.jsx)(o.Trans,{i18nKey:"stations.remove.msg",children:{name:null===(t=d[e.stnId])||void 0===t?void 0:t.name.join()}})})}),Object(u.jsxs)(a.DialogActions,{children:[Object(u.jsx)(a.Button,{onClick:m("close"),color:"primary",autoFocus:!0,children:n("dialog.cancel")}),Object(u.jsx)(a.Button,{onClick:m("accept"),color:"primary",children:n("stations.remove.button")})]})]}),Object(u.jsx)(D,{open:p,onClose:function(){return O(!1)}})]})}var D=Object(c.memo)((function(e){var t=Object(o.useTranslation)().t;return Object(u.jsxs)(a.Dialog,{open:e.open,onClose:e.onClose,children:[Object(u.jsx)(a.DialogTitle,{children:t("stations.remove.error.title")}),Object(u.jsx)(a.DialogContent,{children:Object(u.jsx)(a.DialogContentText,{children:t("stations.remove.error.msg")})}),Object(u.jsx)(a.DialogActions,{children:Object(u.jsx)(a.Button,{onClick:e.onClose,color:"primary",autoFocus:!0,children:t("dialog.ok")})})]})}),(function(e,t){return e.open===t.open})),L=Object(a.makeStyles)((function(e){return Object(a.createStyles)({fab:{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}})})),_=i.a.memo((function(e){var t=Object(o.useTranslation)().t,n=Object(l.useSelector)((function(e){return e.app.rmgStyle})),c=L(),s=i.a.useState(null),d=Object(r.a)(s,2),j=d[0],b=d[1],p=function(t){return function(){b(null),e.onAction(t)}};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(a.Tooltip,{title:t("stations.fabs.tooltip"),"aria-label":"options",children:Object(u.jsx)(a.Fab,{color:"primary",className:c.fab,onClick:function(e){return b(e.target)},children:Object(u.jsx)(a.Icon,{children:"more_vert"})})}),Object(u.jsxs)(a.Menu,{anchorEl:j,open:Boolean(j),onClose:function(){return b(null)},children:[Object(u.jsxs)(a.MenuItem,{onClick:p("add"),children:[Object(u.jsx)(a.ListItemIcon,{children:Object(u.jsx)(a.Icon,{children:"add_box"})}),Object(u.jsx)(a.ListItemText,{primary:t("stations.fabs.add")})]}),Object(u.jsxs)(a.MenuItem,{onClick:p("reverse"),children:[Object(u.jsx)(a.ListItemIcon,{children:Object(u.jsx)(a.Icon,{children:"cached"})}),Object(u.jsx)(a.ListItemText,{primary:t("stations.fabs.reverse")})]}),n===h.f.GZMTR&&Object(u.jsxs)(a.MenuItem,{onClick:p("autonum"),children:[Object(u.jsx)(a.ListItemIcon,{children:Object(u.jsx)(a.Icon,{children:"filter_1"})}),Object(u.jsx)(a.ListItemText,{primary:t("design.autoNum.button")})]})]})]})}),(function(){return!0})),M=function(e){var t=Object(o.useTranslation)().t,n=c.useContext(s.a),r=n.dispatch,i=n.branches,l=function(t){var n=i[0];n.forEach((function(e,c){var i;i="ascend"===t?c.toString().padStart(2,"0"):(n.length-1-c).toString().padStart(2,"0"),r({type:"UPDATE_STATION_NUM",stnId:e,num:i})})),e.onClose()};return c.useMemo((function(){return Object(u.jsxs)(a.Dialog,{onClose:e.onClose,open:e.open,children:[Object(u.jsx)(a.DialogTitle,{children:t("design.autoNum.title")}),Object(u.jsx)(a.DialogContent,{children:Object(u.jsx)(a.DialogContentText,{children:t("design.autoNum.msg")})}),Object(u.jsxs)(a.DialogActions,{children:[Object(u.jsx)(a.Button,{onClick:e.onClose,color:"primary",autoFocus:!0,children:t("dialog.cancel")}),Object(u.jsx)(a.Button,{onClick:function(){return l("ascend")},color:"primary",children:t("design.autoNum.ascend")}),Object(u.jsx)(a.Button,{onClick:function(){return l("descend")},color:"primary",children:t("design.autoNum.descend")})]})]})}),[e.open])},A=Object(a.makeStyles)((function(){return Object(a.createStyles)({gridContainer:{height:"100%",overflow:"hidden"},gridItem:{height:"100%",overflow:"auto"}})})),B=function(){var e=A(),t=Object(l.useSelector)((function(e){return e.app.rmgStyle})),n=Object(c.useContext)(s.a).dispatch,i=Object(c.useState)(""),o=Object(r.a)(i,2),d=o[0],b=o[1],p=Object(c.useState)(!1),f=Object(r.a)(p,2),O=f[0],m=f[1],g=Object(c.useState)(!1),x=Object(r.a)(g,2),I=x[0],y=x[1],S=Object(c.useState)(!1),C=Object(r.a)(S,2),T=C[0],k=C[1],E=Object(c.useState)(""),D=Object(r.a)(E,2),L=D[0],B=D[1],F=Object(c.useState)(!1),R=Object(r.a)(F,2),P=R[0],U=R[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(a.Grid,{container:!0,spacing:1,className:e.gridContainer,children:[Object(u.jsx)(a.Grid,{item:!0,xs:12,md:4,className:e.gridItem,children:Object(u.jsx)(j,{selectedId:d,onAction:function(e){return function(t){"edit"===t&&(b(e),m(!0)),"remove"===t&&(d===e&&b(""),B(e),U(!0))}}})}),Object(u.jsx)(a.Grid,{item:!0,xs:8,className:e.gridItem,children:d&&Object(u.jsx)(w,{open:O,stnId:d,onClose:function(){return m(!1)}})})]}),Object(u.jsx)(_,{onAction:function(e){"add"===e&&y(!0),"reverse"===e&&n({type:"REVERSE_STATIONS"}),"autonum"===e&&k(!0)}}),Object(u.jsx)(v,{open:I,onClose:function(e){y(!1),"close"!==e&&(b(e),m(!0))}}),Object(u.jsx)(N,{open:P,onClose:function(){return U(!1)},stnId:L}),t===h.f.GZMTR&&Object(u.jsx)(M,{open:T,onClose:function(){return k(!1)}})]})};t.default=B}}]);
//# sourceMappingURL=panelStations.a4ae8357.chunk.js.map