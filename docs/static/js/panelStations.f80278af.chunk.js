(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[83],{128:function(e,t,n){"use strict";n.r(t);var r=n(10),c=n(4),i=n.n(c),a=n(5),s=n(21),o=n(12),l=n(11),h=n(3),u=n(7),d=n(1),j=Object(a.makeStyles)((function(e){return Object(a.createStyles)({listItemNum:{marginRight:e.spacing(1),fontSize:"1.2rem"},listItemText:{display:"flex",alignItems:"baseline",whiteSpace:"nowrap",overflow:"hidden","& .MuiListItemText-primary":{marginRight:e.spacing(1)}},selectedItem:{background:e.palette.action.hover}})})),b=function(e){var t=Object(c.useContext)(s.a).tpo;return Object(d.jsx)(a.Paper,{children:Object(d.jsx)(a.List,{dense:!0,disablePadding:!0,children:t.map((function(t){return Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)(p,{stnId:t,isSelected:t===e.selectedId,onAction:e.onAction(t)}),Object(d.jsx)(a.Divider,{})]},t)}))})})},p=function(e){var t=Object(o.useTranslation)().t,n=j(),i=Object(l.useDispatch)(),b=Object(l.useSelector)((function(e){return e.app.rmgStyle})),p=Object(c.useContext)(s.a),O=p.param,f=p.dispatch,m=O.stn_list[e.stnId]||O.stn_list.linestart,g=m.name,x=m.num,I=Object(c.useState)(null),v=Object(r.a)(I,2),y=v[0],S=v[1],C=function(t){return function(){e.onAction(t),S(null)}};return Object(d.jsxs)(a.ListItem,{className:e.isSelected?n.selectedItem:"",children:[b===h.k.GZMTR&&Object(d.jsx)(a.Typography,{className:n.listItemNum,children:x}),Object(d.jsx)(a.ListItemText,{primary:g[0],secondary:g[1].replace("\\"," "),className:n.listItemText}),Object(d.jsxs)(a.ListItemSecondaryAction,{children:[Object(d.jsx)(a.IconButton,{size:"small",onClick:function(e){return S(e.currentTarget)},children:Object(d.jsx)(a.Icon,{children:"more_vert"})}),Object(d.jsxs)(a.Menu,{anchorEl:y,open:Boolean(y),onClose:function(){return S(null)},children:[Object(d.jsx)(a.MenuItem,{onClick:function(){f({type:"SET_CURRENT_STATION",stnId:e.stnId}),i(Object(u.G)(e.stnId)),S(null)},children:t("stations.current")}),Object(d.jsx)(a.MenuItem,{onClick:C("edit"),children:t("stations.edit.button")}),Object(d.jsx)(a.MenuItem,{onClick:C("remove"),children:t("stations.remove.button")})]})]})]})},O=n(22),f=n(18),m=n(2),g=n(0),x=function(){return Math.floor(Math.random()*Math.pow(36,4)).toString(36).padStart(4,"0")};function I(e){var t="\u7678\u7532\u4e59\u4e19\u4e01\u620a\u5df1\u5e9a\u8f9b\u58ec\u65e5\u6708\u91d1\u6728\u6c34\u706b\u571f\u7af9\u6208\u5341\u5927\u4e2d\u4e00\u5f13\u4eba\u5fc3\u624b\u53e3\u5c38\u5eff\u5c71\u5973\u7530\u96e3\u535c\u91cd".split(""),n="Zero One Two Three Four Five Six Seven Eight Nine Alfa Bravo Charlie Delta Echo Foxtrot Golf Hotel India Juliett Kilo Lima Mike November Oscar Papa Quebec Romeo Sierra Tango Uniform Victor Whiskey X-ray Yankee Zulu".split(" ");return[e.split("").map((function(e){return t[parseInt(e,36)]})).join(""),e.split("").map((function(e){return n[parseInt(e,36)]})).join(" ")]}var v=Object(a.makeStyles)((function(){return Object(a.createStyles)({dialogContent:{padding:8},select:{width:166,marginLeft:8}})})),y=i.a.memo((function(e){var t=Object(o.useTranslation)().t,n=v(),j=Object(l.useDispatch)(),b=Object(l.useSelector)((function(e){return e.app.rmgStyle})),p=Object(c.useContext)(s.a),y=p.param,S=p.dispatch,C=p.tpo,T=y.stn_list,k={centre:t("stations.add.centre"),upper:t("stations.add.upper"),lower:t("stations.add.lower"),newupper:t("stations.add.newUpper"),newlower:t("stations.add.newLower")},E=i.a.useState("before"),D=Object(r.a)(E,2),w=D[0],N=D[1],L=i.a.useState(C[0]),_=Object(r.a)(L,2),M=_[0],A=_[1],B=i.a.useState(Object.keys(k)[0]),R=Object(r.a)(B,2),F=R[0],G=R[1],P=i.a.useState(Array(5).fill(!0)),U=Object(r.a)(P,2),z=U[0],J=U[1],Z=i.a.useState(""),Q=Object(r.a)(Z,2),H=Q[0],K=Q[1],V=i.a.useState([]),W=Object(r.a)(V,2),X=W[0],Y=W[1],q=Object(c.useMemo)((function(){return function(e,t,n){switch(n[t]?n[t]["before"===e?"parents":"children"].length:0){case 2:return[1,1,1,[],[]];case 1:var r=Object(f.c)(t,n);if(0===r){var c=function(e,t,n){var r=[];if("before"===e){for(;1===n[t].parents.length;)t=n[t].parents[0],r.unshift(t);r.pop()}else{for(;1===n[t].children.length;)t=n[t].children[0],r.push(t);r.shift()}return r}(e,t,n);return[1,0,0,c=c.length?c:[],c]}return r<0?"before"===e?[n[n[t].parents[0]].children.length-1,0,1,[],[]]:[n[n[t].children[0]].parents.length-1,0,1,[],[]]:"before"===e?[n[n[t].parents[0]].children.length-1,1,0,[],[]]:[n[n[t].children[0]].parents.length-1,1,0,[],[]]}return[0,0,0,[],[]]}(w,M,T)}),[w,M,T]);Object(c.useEffect)((function(){J(q.map((function(e){return"number"===typeof e?Boolean(e):Boolean(e.length)}))),Y(q[3])}),[q.toString()]),Object(c.useEffect)((function(){return G(Object.keys(k)[z.indexOf(!0)])}),[z]),Object(c.useEffect)((function(){0!==X.length&&K(X[0])}),[X]),Object(c.useEffect)((function(){M in T||A(C[0])}),[Object.keys(T).toString()]);var $=function(t){if("close"===t)e.onClose("close");else{var n=function(e,t,n,r,c){for(var i=x();Object.keys(c).includes(i);)i=x();var a={name:I(i),secondaryName:!1,num:"00",services:[h.l.local],parents:[],children:[],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:h.m.right,paid_area:!0,osi_names:[]},facility:h.e.none},s=JSON.parse(JSON.stringify(c));return"before"===e?"centre"===n?(a.parents=c[t].parents,0===c[t].parents.length&&0!==Object(f.c)(t,c)?a.children=c.linestart.children:0!==Object(f.c)(t,c)?(a.children=c[c[t].parents[0]].children.slice(),a.branch.right=c[a.parents[0]].branch.right,s[a.parents[0]].branch.right=[]):(a.children=[t],a.branch.left=c[t].branch.left,s[t].branch.left=[]),a.parents.forEach((function(e){s[e].children=[i]})),a.children.forEach((function(e){s[e].parents=[i]}))):"upper"===n?2===c[t].parents.length?(c[t].branch.left[1]===c[t].parents[0]&&(s[t].branch.left[1]=i),a.parents=c[t].parents.slice(0,1),a.children=[t],a.parents.forEach((function(e){s[e].children=[i]})),s[t].parents[0]=i):(a.parents=c[t].parents,a.children=[t],a.parents.forEach((function(e){s[e].children[0]=i,c[e].branch.right[1]===t&&(s[e].branch.right[1]=i)})),a.children.forEach((function(e){s[e].parents=[i]}))):"lower"===n?2===c[t].parents.length?(c[t].branch.left[1]===c[t].parents[1]&&(s[t].branch.left[1]=i),a.parents=c[t].parents.slice(1),a.children=[t],a.parents.forEach((function(e){s[e].children=[i]})),s[t].parents[1]=i):(a.parents=c[t].parents,a.children=[t],a.parents.forEach((function(e){var n=c[e].children.length;s[e].children[n-1]=i,c[e].branch.right[1]===t&&(s[e].branch.right[1]=i)})),a.children.forEach((function(e){s[e].parents=[i]}))):(s[t].branch.left=[h.b.through,i],s[r].branch.right=[h.b.through,i],a.parents=[r],a.children=[t],"newupper"===n?(s[r].children.unshift(i),s[t].parents.unshift(i)):(s[r].children.push(i),s[t].parents.push(i))):"centre"===n?(a.children=c[t].children,0===c[t].children.length&&0!==Object(f.c)(t,c)?a.parents=c.lineend.parents:0!==Object(f.c)(t,c)?(a.parents=c[c[t].children[0]].parents,a.branch.left=c[a.children[0]].branch.left,s[a.children[0]].branch.left=[]):(a.parents=[t],a.branch.right=c[t].branch.right,s[t].branch.right=[]),a.children.forEach((function(e){s[e].parents=[i]})),a.parents.forEach((function(e){s[e].children=[i]}))):"upper"===n?2===c[t].children.length?(c[t].branch.right[1]===c[t].children[0]&&(s[t].branch.right[1]=i),a.children=c[t].children.slice(0,1),a.parents=[t],a.children.forEach((function(e){s[e].parents=[i]})),s[t].children[0]=i):(a.children=c[t].children,a.parents=[t],a.children.forEach((function(e){s[e].parents[0]=i,c[e].branch.left[1]===t&&(s[e].branch.left[1]=i)})),a.parents.forEach((function(e){s[e].children=[i]}))):"lower"===n?2===c[t].children.length?(c[t].branch.right[1]===c[t].children[1]&&(s[t].branch.right[1]=i),a.children=c[t].children.slice(1),a.parents=[t],a.children.forEach((function(e){s[e].parents=[i]})),s[t].children[1]=i):(a.children=c[t].children,a.parents=[t],a.children.forEach((function(e){s[e].parents[1===c[e].parents.length?0:1]=i,c[e].branch.left[1]===t&&(s[e].branch.left[1]=i)})),a.parents.forEach((function(e){s[e].children=[i]}))):(s[t].branch.right=[h.b.through,i],s[r].branch.left=[h.b.through,i],a.children=[r],a.parents=[t],"newupper"===n?(s[r].parents.unshift(i),s[t].children.unshift(i)):(s[r].parents.push(i),s[t].children.push(i))),[i,Object(g.a)(Object(g.a)({},s),{},Object(m.a)({},i,a))]}(w,M,F,H,T),c=Object(r.a)(n,2),i=c[0],a=c[1];S({type:"UPDATE_STATION_LIST",stnList:a}),j(Object(u.R)(a)),e.onClose(i)}};return Object(d.jsxs)(a.Dialog,{open:e.open,onClose:function(){return $("close")},children:[Object(d.jsx)(a.DialogTitle,{children:t("stations.add.title")}),Object(d.jsx)(a.DialogContent,{className:n.dialogContent,children:Object(d.jsxs)(a.List,{component:"div",disablePadding:!0,children:[Object(d.jsxs)(a.ListItem,{children:[Object(d.jsx)(a.ListItemIcon,{children:Object(d.jsx)(a.Icon,{children:"control_camera"})}),Object(d.jsx)(a.ListItemText,{primary:t("stations.add.prep")}),Object(d.jsx)(a.Select,{native:!0,onChange:function(e){return N(e.target.value)},value:w,className:n.select,children:["before","after"].map((function(e){return Object(d.jsx)("option",{value:e,children:t("stations.add."+e)},e)}))})]}),Object(d.jsx)(a.Divider,{variant:"middle"}),Object(d.jsxs)(a.ListItem,{children:[Object(d.jsx)(a.ListItemIcon,{children:Object(d.jsx)(a.Icon,{children:"near_me"})}),Object(d.jsx)(a.ListItemText,{primary:t("stations.add.pivot")}),Object(d.jsx)(a.Select,{native:!0,onChange:function(e){return A(e.target.value)},value:M,className:n.select,children:C.map((function(e){return Object(d.jsx)("option",{value:e,children:Object(O.a)(T[e],b)},e)}))})]}),Object(d.jsx)(a.Divider,{variant:"middle"}),Object(d.jsxs)(a.ListItem,{children:[Object(d.jsx)(a.ListItemIcon,{children:Object(d.jsx)(a.Icon,{children:"share"})}),Object(d.jsx)(a.ListItemText,{primary:t("stations.add.loc")}),Object(d.jsx)(a.Select,{native:!0,onChange:function(e){return G(e.target.value)},value:F,className:n.select,children:Object.keys(k).map((function(e,t){return Object(d.jsx)("option",{value:e,disabled:!z[t],children:k[e]},e)}))})]}),Object(d.jsx)(a.Divider,{variant:"middle",style:{display:["newupper","newlower"].includes(F)?"flex":"none"}}),Object(d.jsxs)(a.ListItem,{style:{display:["newupper","newlower"].includes(F)?"flex":"none"},children:[Object(d.jsx)(a.ListItemIcon,{children:Object(d.jsx)(a.Icon,{children:"undo"})}),Object(d.jsx)(a.ListItemText,{primary:t("stations.add.end")}),Object(d.jsx)(a.Select,{native:!0,onChange:function(e){return K(e.target.value)},value:H,className:n.select,children:X.map((function(e){return Object(d.jsx)("option",{value:e,children:Object(O.a)(T[e],b)},e)}))})]})]})}),Object(d.jsxs)(a.DialogActions,{children:[Object(d.jsx)(a.Button,{onClick:function(){return $("close")},color:"primary",children:t("dialog.cancel")}),Object(d.jsx)(a.Button,{onClick:function(){return $("accept")},color:"primary",autoFocus:!0,children:t("dialog.ok")})]})]})}),(function(e,t){return e.open===t.open})),S=i.a.lazy((function(){return n.e(87).then(n.bind(null,125))})),C=i.a.lazy((function(){return n.e(85).then(n.bind(null,138))})),T=i.a.lazy((function(){return n.e(84).then(n.bind(null,126))})),k=i.a.lazy((function(){return n.e(86).then(n.bind(null,127))})),E=Object(a.makeStyles)((function(){return Object(a.createStyles)({tab:{padding:"6px 24px",height:48,minWidth:"calc(100% / 4)","& .MuiTab-wrapper":{flexDirection:"row"},"&.MuiTab-labelIcon":{minHeight:"unset","& .MuiTab-wrapper":{"& > *:first-child":{marginBottom:0},"& > *:not(first-child)":{paddingLeft:8}}}}})}));var D=function(e){var t=Object(o.useTranslation)().t,n=Object(a.useTheme)(),r=Object(a.useMediaQuery)(n.breakpoints.down("xs"));return Object(a.useMediaQuery)(n.breakpoints.down("sm"))?Object(d.jsxs)(a.Dialog,{onClose:e.onClose,open:e.open,fullScreen:r,children:[Object(d.jsx)(a.DialogTitle,{children:t("stations.edit.title")}),Object(d.jsx)(a.DialogContent,{dividers:!0,style:{padding:"0 16px"},children:e.children}),Object(d.jsx)(a.DialogActions,{children:Object(d.jsx)(a.Button,{onClick:e.onClose,color:"primary",children:t("dialog.done")})})]}):Object(d.jsx)(a.Paper,{children:e.children})},w=function(e){var t=Object(o.useTranslation)().t,n=i.a.useState(0),c=Object(r.a)(n,2),s=c[0],l=c[1],h=E(),u=i.a.useMemo((function(){return Object(d.jsx)(a.Tabs,{value:s,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return l(t)},variant:"scrollable",scrollButtons:"off",children:[["name","title"],["interchange","transfer_within_a_station"],["branch","share"],["more","more_horiz"]].map((function(e,n){return Object(d.jsx)(a.Tab,{label:Object(d.jsx)("span",{children:t("stations.edit.tab."+e[0])}),icon:Object(d.jsx)(a.Icon,{children:e[1]}),className:h.tab},n)}))})}),[s,h.tab]);return Object(d.jsxs)(D,Object(g.a)(Object(g.a)({},e),{},{children:[u,Object(d.jsx)(a.Typography,{component:"div",role:"tabpanel",children:Object(d.jsx)(i.a.Suspense,{fallback:Object(d.jsx)(a.CircularProgress,{}),children:function(t){switch(t){case 0:return Object(d.jsx)(S,{stnId:e.stnId});case 1:return Object(d.jsx)(C,{stnId:e.stnId});case 2:return Object(d.jsx)(T,{stnId:e.stnId});case 3:return Object(d.jsx)(k,{stnId:e.stnId})}}(s)})})]}))};function N(e){var t,n=Object(o.useTranslation)().t,i=Object(l.useDispatch)(),h=Object(c.useContext)(s.a),j=h.param,b=h.dispatch,p=j.stn_list,O=Object(c.useState)(!1),m=Object(r.a)(O,2),g=m[0],x=m[1],I=function(t){return function(){if("accept"===t){var n=function(e,t){var n=JSON.parse(JSON.stringify(t)),r=n[e].parents,c=n[e].children,i=!0;for(var a in n)if(![e,"linestart","lineend"].includes(a)&&0===Object(f.c)(a,n)){i=!1;break}if(2===r.length&&2===c.length)return!1;if(i)return!1;if(4===Object.keys(n).length)return!1;if(2===r.length||2===c.length)console.log("this case"),r.forEach((function(e){n[e].children=c})),c.forEach((function(e){n[e].parents=r})),1===r.length&&(n[r[0]].branch.right=n[e].branch.right),1===c.length&&(n[c[0]].branch.left=n[e].branch.left);else if(2===n[r[0]].children.length&&2===n[c[0]].parents.length){var s=n[r[0]].children.indexOf(e),o=n[c[0]].parents.indexOf(e);n[r[0]].children.splice(s,1),n[c[0]].parents.splice(o,1),n[r[0]].branch.right=[],n[c[0]].branch.left=[]}else r.forEach((function(t){var r=n[t].children.indexOf(e);c.length?n[t].children[r]=c[0]:n[t].children.splice(r,1),n[t].branch.right[1]===e&&(n[t].branch.right[1]=c[0])})),c.forEach((function(t){var c=n[t].parents.indexOf(e);r.length?n[t].parents[c]=r[0]:n[t].parents.splice(c,1),n[t].branch.left[1]===e&&(n[t].branch.left[1]=r[0])}));return delete n[e],n}(e.stnId,p);if(!1===n)x(!0);else{if(j.current_stn_idx===e.stnId){var r=Object.keys(n).filter((function(e){return!["linestart","lineend"].includes(e)}))[0];b({type:"SET_CURRENT_STATION",stnId:r}),i(Object(u.G)(r))}b({type:"UPDATE_STATION_LIST",stnList:n}),i(Object(u.R)(n))}}e.onClose()}};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(a.Dialog,{open:e.open,onClose:I("close"),children:[Object(d.jsx)(a.DialogTitle,{children:n("stations.remove.title")}),Object(d.jsx)(a.DialogContent,{children:Object(d.jsx)(a.DialogContentText,{children:Object(d.jsx)(o.Trans,{i18nKey:"stations.remove.msg",children:{name:null===(t=p[e.stnId])||void 0===t?void 0:t.name.join()}})})}),Object(d.jsxs)(a.DialogActions,{children:[Object(d.jsx)(a.Button,{onClick:I("close"),color:"primary",autoFocus:!0,children:n("dialog.cancel")}),Object(d.jsx)(a.Button,{onClick:I("accept"),color:"primary",children:n("stations.remove.button")})]})]}),Object(d.jsx)(L,{open:g,onClose:function(){return x(!1)}})]})}var L=Object(c.memo)((function(e){var t=Object(o.useTranslation)().t;return Object(d.jsxs)(a.Dialog,{open:e.open,onClose:e.onClose,children:[Object(d.jsx)(a.DialogTitle,{children:t("stations.remove.error.title")}),Object(d.jsx)(a.DialogContent,{children:Object(d.jsx)(a.DialogContentText,{children:t("stations.remove.error.msg")})}),Object(d.jsx)(a.DialogActions,{children:Object(d.jsx)(a.Button,{onClick:e.onClose,color:"primary",autoFocus:!0,children:t("dialog.ok")})})]})}),(function(e,t){return e.open===t.open})),_=Object(a.makeStyles)((function(e){return Object(a.createStyles)({fab:{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}})})),M=i.a.memo((function(e){var t=Object(o.useTranslation)().t,n=Object(l.useSelector)((function(e){return e.app.rmgStyle})),c=_(),s=i.a.useState(null),u=Object(r.a)(s,2),j=u[0],b=u[1],p=function(t){return function(){b(null),e.onAction(t)}};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.Tooltip,{title:t("stations.fabs.tooltip"),"aria-label":"options",children:Object(d.jsx)(a.Fab,{color:"primary",className:c.fab,onClick:function(e){return b(e.target)},children:Object(d.jsx)(a.Icon,{children:"more_vert"})})}),Object(d.jsxs)(a.Menu,{anchorEl:j,open:Boolean(j),onClose:function(){return b(null)},children:[Object(d.jsxs)(a.MenuItem,{onClick:p("add"),children:[Object(d.jsx)(a.ListItemIcon,{children:Object(d.jsx)(a.Icon,{children:"add_box"})}),Object(d.jsx)(a.ListItemText,{primary:t("stations.fabs.add")})]}),Object(d.jsxs)(a.MenuItem,{onClick:p("reverse"),children:[Object(d.jsx)(a.ListItemIcon,{children:Object(d.jsx)(a.Icon,{children:"cached"})}),Object(d.jsx)(a.ListItemText,{primary:t("stations.fabs.reverse")})]}),n===h.k.GZMTR&&Object(d.jsxs)(a.MenuItem,{onClick:p("autonum"),children:[Object(d.jsx)(a.ListItemIcon,{children:Object(d.jsx)(a.Icon,{children:"filter_1"})}),Object(d.jsx)(a.ListItemText,{primary:t("design.autoNum.button")})]})]})]})}),(function(){return!0})),A=function(e){var t=Object(o.useTranslation)().t,n=Object(l.useDispatch)(),r=c.useContext(s.a),i=r.dispatch,h=r.branches,j=function(t){var r=h[0];r.forEach((function(e,c){var a;a="ascend"===t?c.toString().padStart(2,"0"):(r.length-1-c).toString().padStart(2,"0"),i({type:"UPDATE_STATION_NUM",stnId:e,num:a}),n(Object(u.eb)(e,a))})),e.onClose()};return c.useMemo((function(){return Object(d.jsxs)(a.Dialog,{onClose:e.onClose,open:e.open,children:[Object(d.jsx)(a.DialogTitle,{children:t("design.autoNum.title")}),Object(d.jsx)(a.DialogContent,{children:Object(d.jsx)(a.DialogContentText,{children:t("design.autoNum.msg")})}),Object(d.jsxs)(a.DialogActions,{children:[Object(d.jsx)(a.Button,{onClick:e.onClose,color:"primary",autoFocus:!0,children:t("dialog.cancel")}),Object(d.jsx)(a.Button,{onClick:function(){return j("ascend")},color:"primary",children:t("design.autoNum.ascend")}),Object(d.jsx)(a.Button,{onClick:function(){return j("descend")},color:"primary",children:t("design.autoNum.descend")})]})]})}),[e.open])},B=Object(a.makeStyles)((function(){return Object(a.createStyles)({gridContainer:{height:"100%",overflow:"hidden"},gridItem:{height:"100%",overflow:"auto"}})})),R=function(){var e=B(),t=Object(l.useDispatch)(),n=Object(l.useSelector)((function(e){return e.app.rmgStyle})),i=Object(c.useContext)(s.a).dispatch,o=Object(c.useState)(""),j=Object(r.a)(o,2),p=j[0],O=j[1],f=Object(c.useState)(!1),m=Object(r.a)(f,2),g=m[0],x=m[1],I=Object(c.useState)(!1),v=Object(r.a)(I,2),S=v[0],C=v[1],T=Object(c.useState)(!1),k=Object(r.a)(T,2),E=k[0],D=k[1],L=Object(c.useState)(""),_=Object(r.a)(L,2),R=_[0],F=_[1],G=Object(c.useState)(!1),P=Object(r.a)(G,2),U=P[0],z=P[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(a.Grid,{container:!0,spacing:1,className:e.gridContainer,children:[Object(d.jsx)(a.Grid,{item:!0,xs:12,md:4,className:e.gridItem,children:Object(d.jsx)(b,{selectedId:p,onAction:function(e){return function(t){"edit"===t&&(O(e),x(!0)),"remove"===t&&(p===e&&O(""),F(e),z(!0))}}})}),Object(d.jsx)(a.Grid,{item:!0,xs:8,className:e.gridItem,children:p&&Object(d.jsx)(w,{open:g,stnId:p,onClose:function(){return x(!1)}})})]}),Object(d.jsx)(M,{onAction:function(e){"add"===e&&C(!0),"reverse"===e&&(i({type:"REVERSE_STATIONS"}),t(Object(u.E)())),"autonum"===e&&D(!0)}}),Object(d.jsx)(y,{open:S,onClose:function(e){C(!1),"close"!==e&&(O(e),x(!0))}}),Object(d.jsx)(N,{open:U,onClose:function(){return z(!1)},stnId:R}),n===h.k.GZMTR&&Object(d.jsx)(A,{open:E,onClose:function(){return D(!1)}})]})};t.default=R}}]);
//# sourceMappingURL=panelStations.f80278af.chunk.js.map