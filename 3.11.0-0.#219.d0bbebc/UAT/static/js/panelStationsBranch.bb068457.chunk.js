"use strict";(self.webpackChunkrail_map_generator=self.webpackChunkrail_map_generator||[]).push([[9063],{6987:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r=t(1413),i=t(2791),s=t(2020),a=t(8596),l=t(2288),c=t(2067),o=t(8096),h=t(159),d=t(7447),u=t(1969),f=t(9418),p=t(9403),x=t(7253),m=t(3334),j=t(713),g=t(533),v=t(184),Z=(0,a.Z)((function(){return(0,l.Z)({select:{width:166}})}));function b(n){var e=n.stnId,t=(0,s.$)().t;return(0,v.jsxs)(c.Z,{children:[(0,v.jsx)(o.Z,{children:(0,v.jsx)(h.Z,{children:(0,v.jsx)("h3",{style:{margin:0},children:t("stations.edit.branch.left")})})}),(0,v.jsx)(y,{stnId:e,direction:j.Nm.left}),(0,v.jsx)(d.Z,{}),(0,v.jsx)(o.Z,{children:(0,v.jsx)(h.Z,{children:(0,v.jsx)("h3",{style:{margin:0},children:t("stations.edit.branch.right")})})}),(0,v.jsx)(y,{stnId:e,direction:j.Nm.right})]})}var y=function(n){var e=n.stnId,t=n.direction,s=(0,m.CG)((function(n){return n.param.style})),a=(0,m.CG)((function(n){return n.param.stn_list[e].branch[t]}));return i.useMemo((function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(N,(0,r.Z)({},n)),a[0]&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(_,(0,r.Z)({},n)),s!==j.RM.SHMetro&&(0,v.jsx)(C,(0,r.Z)({},n))]})]})}),[e,t,a[0]])},N=function(n){var e=n.stnId,t=n.direction,r=(0,s.$)().t,a=Z(),l=(0,m.TL)(),c=(0,m.CG)((function(n){return n.param.stn_list[e].branch[t]})),d=function(n){var r=n.target.value;"na"!==r&&r!==c[0]&&l((0,g.kM)(e,t,r))};return i.useMemo((function(){return(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(u.Z,{children:(0,v.jsx)(f.Z,{children:"merge_type"})}),(0,v.jsx)(h.Z,{primary:r("stations.edit.branch.type.title")}),(0,v.jsxs)(p.Z,{native:!0,onChange:d,value:c[0]||"na",className:a.select,children:[(0,v.jsx)("option",{value:"na",disabled:0!==c.length,children:r("stations.edit.branch.type.na")}),(0,v.jsx)("option",{value:j.H_.through,disabled:0===c.length,children:r("stations.edit.branch.type.through")}),(0,v.jsx)("option",{value:j.H_.nonThrough,disabled:0===c.length,children:r("stations.edit.branch.type.nonThrough")})]})]})}),[e,c[0]])},_=function(n){var e=n.stnId,t=n.direction,r=(0,s.$)().t,a=Z(),l=(0,m.TL)(),c=(0,m.CG)((function(n){return n.param.style})),d=(0,m.CG)((function(n){return n.param.stn_list})),b=d[e],y=b.branch[t],N=t===j.Nm.left?b.parents:b.children,_=function(n){var r=n.target.value;if(y[1]!==r){var i,s=r;if(t===j.Nm.right){for(;1===d[s].parents.length;)s=d[s].children[0];i=d[s].parents[N.indexOf(r)]}else{for(;1===d[s].children.length;)s=d[s].parents[0];i=d[s].children[N.indexOf(r)]}var a=[{stnId:e,direction:t,first:r},{stnId:s,direction:t===j.Nm.left?j.Nm.right:j.Nm.left,first:i}];l((0,g.B6)(a))}};return i.useMemo((function(){return(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(u.Z,{children:(0,v.jsx)(f.Z,{style:{transform:t===j.Nm.left?"scale(-1)":"scale(1)"},children:"share"})}),(0,v.jsx)(h.Z,{primary:r("stations.edit.branch.first")}),(0,v.jsx)(p.Z,{native:!0,onChange:_,value:y[1]||N[0],className:a.select,children:N.map((function(n){return(0,v.jsx)("option",{value:n,children:(0,x.Kd)(d[n],c)},n)}))})]})}),[e,y[1],N.toString()])},C=function(n){var e=n.stnId,t=n.direction,r=(0,s.$)().t,a=Z(),l=(0,m.TL)(),c=(0,m.CG)((function(n){return n.param.stn_list})),d=c[e],x=d.branch[t],b=t===j.Nm.left?d.parents:d.children,y=function(n){var r="lower"===n.target.value?1:0;if(b.indexOf(x[1])!==r){var i=x[1];if(t===j.Nm.right){for(;1===c[i].parents.length;)i=c[i].children[0];l((0,g.HT)(i,e))}else{for(;1===c[i].children.length;)i=c[i].parents[0];l((0,g.HT)(e,i))}}};return i.useMemo((function(){return(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(u.Z,{children:(0,v.jsx)(f.Z,{children:"swap_vert"})}),(0,v.jsx)(h.Z,{primary:r("stations.edit.branch.pos.title")}),(0,v.jsx)(p.Z,{native:!0,onChange:y,value:1===b.indexOf(x[1])?"lower":"upper",className:a.select,children:["upper","lower"].map((function(n){return(0,v.jsx)("option",{value:n,children:r("stations.edit.branch.pos."+n)},n)}))})]})}),[e,x[1],b.toString()])}}}]);
//# sourceMappingURL=panelStationsBranch.bb068457.chunk.js.map