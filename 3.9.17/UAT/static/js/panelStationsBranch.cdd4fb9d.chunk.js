(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[89],{131:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var r=n(0),c=n(4),s=n.n(c),i=n(12),a=n(5),l=n(22),o=n(21),j=n(11),d=n(3),h=n(7),b=n(1),u=Object(a.makeStyles)((function(){return Object(a.createStyles)({select:{width:166}})}));function O(t){var e=t.stnId,n=Object(i.useTranslation)().t;return Object(b.jsxs)(a.List,{children:[Object(b.jsx)(a.ListItem,{children:Object(b.jsx)(a.ListItemText,{children:Object(b.jsx)("h3",{style:{margin:0},children:n("stations.edit.branch.left")})})}),Object(b.jsx)(p,{stnId:e,direction:d.d.left}),Object(b.jsx)(a.Divider,{}),Object(b.jsx)(a.ListItem,{children:Object(b.jsx)(a.ListItemText,{children:Object(b.jsx)("h3",{style:{margin:0},children:n("stations.edit.branch.right")})})}),Object(b.jsx)(p,{stnId:e,direction:d.d.right})]})}var p=function(t){var e=t.stnId,n=t.direction,c=Object(j.useSelector)((function(t){return t.app.rmgStyle})),i=Object(j.useSelector)((function(t){return t.param.stn_list[e].branch[n]}));return s.a.useMemo((function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,Object(r.a)({},t)),i[0]&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,Object(r.a)({},t)),c!==d.k.SHMetro&&Object(b.jsx)(m,Object(r.a)({},t))]})]})}),[e,n,i[0]])},f=function(t){var e=t.stnId,n=t.direction,r=Object(i.useTranslation)().t,c=u(),l=Object(j.useDispatch)(),O=s.a.useContext(o.a).dispatch,p=Object(j.useSelector)((function(t){return t.param.stn_list[e].branch[n]})),f=function(t){var r=t.target.value;"na"!==r&&r!==p[0]&&(O({type:"UPDATE_STATION_BRANCH_TYPE",stnId:e,direction:n,branchType:r}),l(Object(h.bb)(e,n,r)))};return s.a.useMemo((function(){return Object(b.jsxs)(a.ListItem,{children:[Object(b.jsx)(a.ListItemIcon,{children:Object(b.jsx)(a.Icon,{children:"merge_type"})}),Object(b.jsx)(a.ListItemText,{primary:r("stations.edit.branch.type.title")}),Object(b.jsxs)(a.Select,{native:!0,onChange:f,value:p[0]||"na",className:c.select,children:[Object(b.jsx)("option",{value:"na",disabled:0!==p.length,children:r("stations.edit.branch.type.na")}),Object(b.jsx)("option",{value:d.b.through,disabled:0===p.length,children:r("stations.edit.branch.type.through")}),Object(b.jsx)("option",{value:d.b.nonThrough,disabled:0===p.length,children:r("stations.edit.branch.type.nonThrough")})]})]})}),[e,p[0]])},x=function(t){var e=t.stnId,n=t.direction,r=Object(i.useTranslation)().t,O=u(),p=Object(j.useDispatch)(),f=Object(j.useSelector)((function(t){return t.app.rmgStyle})),x=Object(j.useSelector)((function(t){return t.param.stn_list})),m=Object(c.useContext)(o.a).dispatch,g=x[e],I=g.branch[n],v=n===d.d.left?g.parents:g.children,T=function(t){var r=t.target.value;if(I[1]!==r){var c,s=r;if(n===d.d.right){for(;1===x[s].parents.length;)s=x[s].children[0];c=x[s].parents[v.indexOf(r)]}else{for(;1===x[s].children.length;)s=x[s].parents[0];c=x[s].children[v.indexOf(r)]}var i=[{stnId:e,direction:n,first:r},{stnId:s,direction:n===d.d.left?d.d.right:d.d.left,first:c}];m({type:"UPDATE_STATION_BRANCH_FIRST",branches:i}),p(Object(h.ab)(i))}};return s.a.useMemo((function(){return Object(b.jsxs)(a.ListItem,{children:[Object(b.jsx)(a.ListItemIcon,{children:Object(b.jsx)(a.Icon,{style:{transform:n===d.d.left?"scale(-1)":"scale(1)"},children:"share"})}),Object(b.jsx)(a.ListItemText,{primary:r("stations.edit.branch.first")}),Object(b.jsx)(a.Select,{native:!0,onChange:T,value:I[1]||v[0],className:O.select,children:v.map((function(t){return Object(b.jsx)("option",{value:t,children:Object(l.a)(x[t],f)},t)}))})]})}),[e,I[1],v.toString()])},m=function(t){var e=t.stnId,n=t.direction,r=Object(i.useTranslation)().t,c=u(),l=Object(j.useDispatch)(),O=s.a.useContext(o.a).dispatch,p=Object(j.useSelector)((function(t){return t.param.stn_list})),f=p[e],x=f.branch[n],m=n===d.d.left?f.parents:f.children,g=function(t){var r="lower"===t.target.value?1:0;if(m.indexOf(x[1])!==r){var c=x[1];if(n===d.d.right){for(;1===p[c].parents.length;)c=p[c].children[0];O({type:"UPDATE_STATION_BRANCH_POS",right:e,left:c}),l(Object(h.z)(c,e))}else{for(;1===p[c].children.length;)c=p[c].parents[0];O({type:"UPDATE_STATION_BRANCH_POS",left:e,right:c}),l(Object(h.z)(e,c))}}};return s.a.useMemo((function(){return Object(b.jsxs)(a.ListItem,{children:[Object(b.jsx)(a.ListItemIcon,{children:Object(b.jsx)(a.Icon,{children:"swap_vert"})}),Object(b.jsx)(a.ListItemText,{primary:r("stations.edit.branch.pos.title")}),Object(b.jsx)(a.Select,{native:!0,onChange:g,value:1===m.indexOf(x[1])?"lower":"upper",className:c.select,children:["upper","lower"].map((function(t){return Object(b.jsx)("option",{value:t,children:r("stations.edit.branch.pos."+t)},t)}))})]})}),[e,x[1],m.toString()])}}}]);
//# sourceMappingURL=panelStationsBranch.cdd4fb9d.chunk.js.map