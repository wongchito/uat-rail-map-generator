(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[89],{133:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var r=n(1),c=n(4),i=n.n(c),s=n(14),a=n(3),l=n(22),j=n(7),o=n(2),b=n(8),d=n(0),h=Object(a.makeStyles)((function(){return Object(a.createStyles)({select:{width:166}})}));function u(t){var e=t.stnId,n=Object(s.useTranslation)().t;return Object(d.jsxs)(a.List,{children:[Object(d.jsx)(a.ListItem,{children:Object(d.jsx)(a.ListItemText,{children:Object(d.jsx)("h3",{style:{margin:0},children:n("stations.edit.branch.left")})})}),Object(d.jsx)(O,{stnId:e,direction:o.d.left}),Object(d.jsx)(a.Divider,{}),Object(d.jsx)(a.ListItem,{children:Object(d.jsx)(a.ListItemText,{children:Object(d.jsx)("h3",{style:{margin:0},children:n("stations.edit.branch.right")})})}),Object(d.jsx)(O,{stnId:e,direction:o.d.right})]})}var O=function(t){var e=t.stnId,n=t.direction,c=Object(j.c)((function(t){return t.app.rmgStyle})),s=Object(j.c)((function(t){return t.param.stn_list[e].branch[n]}));return i.a.useMemo((function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,Object(r.a)({},t)),s[0]&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,Object(r.a)({},t)),c!==o.k.SHMetro&&Object(d.jsx)(x,Object(r.a)({},t))]})]})}),[e,n,s[0]])},f=function(t){var e=t.stnId,n=t.direction,r=Object(s.useTranslation)().t,c=h(),l=Object(j.b)(),u=Object(j.c)((function(t){return t.param.stn_list[e].branch[n]})),O=function(t){var r=t.target.value;"na"!==r&&r!==u[0]&&l(Object(b.bb)(e,n,r))};return i.a.useMemo((function(){return Object(d.jsxs)(a.ListItem,{children:[Object(d.jsx)(a.ListItemIcon,{children:Object(d.jsx)(a.Icon,{children:"merge_type"})}),Object(d.jsx)(a.ListItemText,{primary:r("stations.edit.branch.type.title")}),Object(d.jsxs)(a.Select,{native:!0,onChange:O,value:u[0]||"na",className:c.select,children:[Object(d.jsx)("option",{value:"na",disabled:0!==u.length,children:r("stations.edit.branch.type.na")}),Object(d.jsx)("option",{value:o.b.through,disabled:0===u.length,children:r("stations.edit.branch.type.through")}),Object(d.jsx)("option",{value:o.b.nonThrough,disabled:0===u.length,children:r("stations.edit.branch.type.nonThrough")})]})]})}),[e,u[0]])},p=function(t){var e=t.stnId,n=t.direction,r=Object(s.useTranslation)().t,c=h(),u=Object(j.b)(),O=Object(j.c)((function(t){return t.app.rmgStyle})),f=Object(j.c)((function(t){return t.param.stn_list})),p=f[e],x=p.branch[n],m=n===o.d.left?p.parents:p.children,g=function(t){var r=t.target.value;if(x[1]!==r){var c,i=r;if(n===o.d.right){for(;1===f[i].parents.length;)i=f[i].children[0];c=f[i].parents[m.indexOf(r)]}else{for(;1===f[i].children.length;)i=f[i].parents[0];c=f[i].children[m.indexOf(r)]}var s=[{stnId:e,direction:n,first:r},{stnId:i,direction:n===o.d.left?o.d.right:o.d.left,first:c}];u(Object(b.ab)(s))}};return i.a.useMemo((function(){return Object(d.jsxs)(a.ListItem,{children:[Object(d.jsx)(a.ListItemIcon,{children:Object(d.jsx)(a.Icon,{style:{transform:n===o.d.left?"scale(-1)":"scale(1)"},children:"share"})}),Object(d.jsx)(a.ListItemText,{primary:r("stations.edit.branch.first")}),Object(d.jsx)(a.Select,{native:!0,onChange:g,value:x[1]||m[0],className:c.select,children:m.map((function(t){return Object(d.jsx)("option",{value:t,children:Object(l.a)(f[t],O)},t)}))})]})}),[e,x[1],m.toString()])},x=function(t){var e=t.stnId,n=t.direction,r=Object(s.useTranslation)().t,c=h(),l=Object(j.b)(),u=Object(j.c)((function(t){return t.param.stn_list})),O=u[e],f=O.branch[n],p=n===o.d.left?O.parents:O.children,x=function(t){var r="lower"===t.target.value?1:0;if(p.indexOf(f[1])!==r){var c=f[1];if(n===o.d.right){for(;1===u[c].parents.length;)c=u[c].children[0];l(Object(b.z)(c,e))}else{for(;1===u[c].children.length;)c=u[c].parents[0];l(Object(b.z)(e,c))}}};return i.a.useMemo((function(){return Object(d.jsxs)(a.ListItem,{children:[Object(d.jsx)(a.ListItemIcon,{children:Object(d.jsx)(a.Icon,{children:"swap_vert"})}),Object(d.jsx)(a.ListItemText,{primary:r("stations.edit.branch.pos.title")}),Object(d.jsx)(a.Select,{native:!0,onChange:x,value:1===p.indexOf(f[1])?"lower":"upper",className:c.select,children:["upper","lower"].map((function(t){return Object(d.jsx)("option",{value:t,children:r("stations.edit.branch.pos."+t)},t)}))})]})}),[e,f[1],p.toString()])}}}]);
//# sourceMappingURL=panelStationsBranch.ca93526c.chunk.js.map