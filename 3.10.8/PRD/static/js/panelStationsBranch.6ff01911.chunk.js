(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[123],{343:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var r=n(3),c=n(0),a=n.n(c),i=n(137),s=n(157),j=n(178),l=n(168),b=n(132),d=n(325),o=n(170),h=n(324),u=n(167),O=n(347),f=n(73),p=n(21),x=n(6),g=n(14),v=n(2),m=Object(s.a)((function(){return Object(j.a)({select:{width:166}})}));function y(t){var e=t.stnId,n=Object(i.a)().t;return Object(v.jsxs)(l.a,{children:[Object(v.jsx)(b.a,{children:Object(v.jsx)(d.a,{children:Object(v.jsx)("h3",{style:{margin:0},children:n("stations.edit.branch.left")})})}),Object(v.jsx)(I,{stnId:e,direction:x.d.left}),Object(v.jsx)(o.a,{}),Object(v.jsx)(b.a,{children:Object(v.jsx)(d.a,{children:Object(v.jsx)("h3",{style:{margin:0},children:n("stations.edit.branch.right")})})}),Object(v.jsx)(I,{stnId:e,direction:x.d.right})]})}var I=function(t){var e=t.stnId,n=t.direction,c=Object(p.c)((function(t){return t.param.style})),i=Object(p.c)((function(t){return t.param.stn_list[e].branch[n]}));return a.a.useMemo((function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(w,Object(r.a)({},t)),i[0]&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(_,Object(r.a)({},t)),c!==x.k.SHMetro&&Object(v.jsx)(M,Object(r.a)({},t))]})]})}),[e,n,i[0]])},w=function(t){var e=t.stnId,n=t.direction,r=Object(i.a)().t,c=m(),s=Object(p.b)(),j=Object(p.c)((function(t){return t.param.stn_list[e].branch[n]})),l=function(t){var r=t.target.value;"na"!==r&&r!==j[0]&&s(Object(g.db)(e,n,r))};return a.a.useMemo((function(){return Object(v.jsxs)(b.a,{children:[Object(v.jsx)(h.a,{children:Object(v.jsx)(u.a,{children:"merge_type"})}),Object(v.jsx)(d.a,{primary:r("stations.edit.branch.type.title")}),Object(v.jsxs)(O.a,{native:!0,onChange:l,value:j[0]||"na",className:c.select,children:[Object(v.jsx)("option",{value:"na",disabled:0!==j.length,children:r("stations.edit.branch.type.na")}),Object(v.jsx)("option",{value:x.b.through,disabled:0===j.length,children:r("stations.edit.branch.type.through")}),Object(v.jsx)("option",{value:x.b.nonThrough,disabled:0===j.length,children:r("stations.edit.branch.type.nonThrough")})]})]})}),[e,j[0]])},_=function(t){var e=t.stnId,n=t.direction,r=Object(i.a)().t,c=m(),s=Object(p.b)(),j=Object(p.c)((function(t){return t.param.style})),l=Object(p.c)((function(t){return t.param.stn_list})),o=l[e],y=o.branch[n],I=n===x.d.left?o.parents:o.children,w=function(t){var r=t.target.value;if(y[1]!==r){var c,a=r;if(n===x.d.right){for(;1===l[a].parents.length;)a=l[a].children[0];c=l[a].parents[I.indexOf(r)]}else{for(;1===l[a].children.length;)a=l[a].parents[0];c=l[a].children[I.indexOf(r)]}var i=[{stnId:e,direction:n,first:r},{stnId:a,direction:n===x.d.left?x.d.right:x.d.left,first:c}];s(Object(g.cb)(i))}};return a.a.useMemo((function(){return Object(v.jsxs)(b.a,{children:[Object(v.jsx)(h.a,{children:Object(v.jsx)(u.a,{style:{transform:n===x.d.left?"scale(-1)":"scale(1)"},children:"share"})}),Object(v.jsx)(d.a,{primary:r("stations.edit.branch.first")}),Object(v.jsx)(O.a,{native:!0,onChange:w,value:y[1]||I[0],className:c.select,children:I.map((function(t){return Object(v.jsx)("option",{value:t,children:Object(f.a)(l[t],j)},t)}))})]})}),[e,y[1],I.toString()])},M=function(t){var e=t.stnId,n=t.direction,r=Object(i.a)().t,c=m(),s=Object(p.b)(),j=Object(p.c)((function(t){return t.param.stn_list})),l=j[e],o=l.branch[n],f=n===x.d.left?l.parents:l.children,y=function(t){var r="lower"===t.target.value?1:0;if(f.indexOf(o[1])!==r){var c=o[1];if(n===x.d.right){for(;1===j[c].parents.length;)c=j[c].children[0];s(Object(g.A)(c,e))}else{for(;1===j[c].children.length;)c=j[c].parents[0];s(Object(g.A)(e,c))}}};return a.a.useMemo((function(){return Object(v.jsxs)(b.a,{children:[Object(v.jsx)(h.a,{children:Object(v.jsx)(u.a,{children:"swap_vert"})}),Object(v.jsx)(d.a,{primary:r("stations.edit.branch.pos.title")}),Object(v.jsx)(O.a,{native:!0,onChange:y,value:1===f.indexOf(o[1])?"lower":"upper",className:c.select,children:["upper","lower"].map((function(t){return Object(v.jsx)("option",{value:t,children:r("stations.edit.branch.pos."+t)},t)}))})]})}),[e,o[1],f.toString()])}}}]);
//# sourceMappingURL=panelStationsBranch.6ff01911.chunk.js.map