(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[89],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(1),c=n(3),i=n.n(c),s=n(12),a=n(4),l=n(21),o=n(10),j=n(2),d=n(7),b=n(0),h=Object(a.makeStyles)((function(){return Object(a.createStyles)({select:{width:166}})}));function u(e){var t=e.stnId,n=Object(s.useTranslation)().t;return Object(b.jsxs)(a.List,{children:[Object(b.jsx)(a.ListItem,{children:Object(b.jsx)(a.ListItemText,{children:Object(b.jsx)("h3",{style:{margin:0},children:n("stations.edit.branch.left")})})}),Object(b.jsx)(O,{stnId:t,direction:j.d.left}),Object(b.jsx)(a.Divider,{}),Object(b.jsx)(a.ListItem,{children:Object(b.jsx)(a.ListItemText,{children:Object(b.jsx)("h3",{style:{margin:0},children:n("stations.edit.branch.right")})})}),Object(b.jsx)(O,{stnId:t,direction:j.d.right})]})}var O=function(e){var t=e.stnId,n=e.direction,c=Object(o.useSelector)((function(e){return e.app.rmgStyle})),s=Object(o.useSelector)((function(e){return e.param.stn_list[t].branch[n]}));return i.a.useMemo((function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,Object(r.a)({},e)),s[0]&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,Object(r.a)({},e)),c!==j.k.SHMetro&&Object(b.jsx)(x,Object(r.a)({},e))]})]})}),[t,n,s[0]])},f=function(e){var t=e.stnId,n=e.direction,r=Object(s.useTranslation)().t,c=h(),l=Object(o.useDispatch)(),u=Object(o.useSelector)((function(e){return e.param.stn_list[t].branch[n]})),O=function(e){var r=e.target.value;"na"!==r&&r!==u[0]&&l(Object(d.bb)(t,n,r))};return i.a.useMemo((function(){return Object(b.jsxs)(a.ListItem,{children:[Object(b.jsx)(a.ListItemIcon,{children:Object(b.jsx)(a.Icon,{children:"merge_type"})}),Object(b.jsx)(a.ListItemText,{primary:r("stations.edit.branch.type.title")}),Object(b.jsxs)(a.Select,{native:!0,onChange:O,value:u[0]||"na",className:c.select,children:[Object(b.jsx)("option",{value:"na",disabled:0!==u.length,children:r("stations.edit.branch.type.na")}),Object(b.jsx)("option",{value:j.b.through,disabled:0===u.length,children:r("stations.edit.branch.type.through")}),Object(b.jsx)("option",{value:j.b.nonThrough,disabled:0===u.length,children:r("stations.edit.branch.type.nonThrough")})]})]})}),[t,u[0]])},p=function(e){var t=e.stnId,n=e.direction,r=Object(s.useTranslation)().t,c=h(),u=Object(o.useDispatch)(),O=Object(o.useSelector)((function(e){return e.app.rmgStyle})),f=Object(o.useSelector)((function(e){return e.param.stn_list})),p=f[t],x=p.branch[n],m=n===j.d.left?p.parents:p.children,g=function(e){var r=e.target.value;if(x[1]!==r){var c,i=r;if(n===j.d.right){for(;1===f[i].parents.length;)i=f[i].children[0];c=f[i].parents[m.indexOf(r)]}else{for(;1===f[i].children.length;)i=f[i].parents[0];c=f[i].children[m.indexOf(r)]}var s=[{stnId:t,direction:n,first:r},{stnId:i,direction:n===j.d.left?j.d.right:j.d.left,first:c}];u(Object(d.ab)(s))}};return i.a.useMemo((function(){return Object(b.jsxs)(a.ListItem,{children:[Object(b.jsx)(a.ListItemIcon,{children:Object(b.jsx)(a.Icon,{style:{transform:n===j.d.left?"scale(-1)":"scale(1)"},children:"share"})}),Object(b.jsx)(a.ListItemText,{primary:r("stations.edit.branch.first")}),Object(b.jsx)(a.Select,{native:!0,onChange:g,value:x[1]||m[0],className:c.select,children:m.map((function(e){return Object(b.jsx)("option",{value:e,children:Object(l.a)(f[e],O)},e)}))})]})}),[t,x[1],m.toString()])},x=function(e){var t=e.stnId,n=e.direction,r=Object(s.useTranslation)().t,c=h(),l=Object(o.useDispatch)(),u=Object(o.useSelector)((function(e){return e.param.stn_list})),O=u[t],f=O.branch[n],p=n===j.d.left?O.parents:O.children,x=function(e){var r="lower"===e.target.value?1:0;if(p.indexOf(f[1])!==r){var c=f[1];if(n===j.d.right){for(;1===u[c].parents.length;)c=u[c].children[0];l(Object(d.z)(c,t))}else{for(;1===u[c].children.length;)c=u[c].parents[0];l(Object(d.z)(t,c))}}};return i.a.useMemo((function(){return Object(b.jsxs)(a.ListItem,{children:[Object(b.jsx)(a.ListItemIcon,{children:Object(b.jsx)(a.Icon,{children:"swap_vert"})}),Object(b.jsx)(a.ListItemText,{primary:r("stations.edit.branch.pos.title")}),Object(b.jsx)(a.Select,{native:!0,onChange:x,value:1===p.indexOf(f[1])?"lower":"upper",className:c.select,children:["upper","lower"].map((function(e){return Object(b.jsx)("option",{value:e,children:r("stations.edit.branch.pos."+e)},e)}))})]})}),[t,f[1],p.toString()])}}}]);
//# sourceMappingURL=panelStationsBranch.db0cbdf2.chunk.js.map