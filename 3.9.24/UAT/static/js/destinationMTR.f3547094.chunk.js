(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[74],{123:function(t,e,r){"use strict";r.r(e);var n=r(1),c=r(37),a=r(11),i=r(12),s=r(4),u=r.n(s),l=r(24),o=r(78),f=r(2),m=r(7),j=r(0),b=["num"];e.default=u.a.memo((function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{}),Object(j.jsx)(o.a,{stripPc:90}),Object(j.jsx)(g,{})]})}));var O=u.a.memo((function(){return Object(j.jsx)("defs",{children:Object(j.jsx)("path",{id:"arrow",d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-black,#000)"})})})),g=function(){var t,e=u.a.useContext(l.a).routes,r=Object(m.c)((function(t){return t.param.svgWidth})),n=Object(m.c)((function(t){return t.param.direction})),c=Object(m.c)((function(t){return t.param.customiseMTRDest})),s=Object(m.c)((function(t){return t.param.platform_num})),o=Object(m.c)((function(t){return t.param.line_name})),b=Object(m.c)((function(t){return t.param.current_stn_idx})),O=Object(m.c)((function(t){return t.param.stn_list}));if(!1!==c.terminal)t=c.terminal;else{var g=Object(i.a)(new Set(e.filter((function(t){return t.includes(b)})).map((function(t){return t.filter((function(t){return!["linestart","lineend"].includes(t)})).slice(n===f.m.left?0:-1)[0]})).filter((function(t){return t!==b}))));t=[g.map((function(t){return O[t].name[0]})).join("/"),g.map((function(t){return O[t].name[1]})).join("/").replace("\\"," ")]}var d=u.a.useRef(null),h=u.a.useState({width:0}),x=Object(a.a)(h,2),v=x[0],y=x[1];u.a.useEffect((function(){return y(d.current.getBBox())}),[t.toString(),c.isLegacy]);var _=310+v.width+45+50,w=(r[f.c.Destination]-(n===f.m.left?1:-1)*_)/2,S=w+285*(n===f.m.left?1:-1),L=S+120*(n===f.m.left?1:-1);return Object(j.jsxs)("g",{id:"dest_name",style:{transform:"translateY(calc(var(--rmg-svg-height) / 2 - 20px))"},children:[Object(j.jsx)("use",{xlinkHref:"#arrow",transform:"translate(".concat(w,",0)rotate(").concat(n===f.m.left?0:180,")")}),Object(j.jsx)(p,{num:s,transform:"translate(".concat(S,",0)")}),Object(j.jsxs)("g",{ref:d,textAnchor:n===f.m.left?"start":"end",transform:"translate(".concat(L,",-25)"),fill:"var(--rmg-black)",children:[Object(j.jsx)("text",{className:"rmg-name__zh",fontSize:90,children:(c.isLegacy?o[0]:"")+"\u5f80"+t[0]}),Object(j.jsx)("text",{className:"rmg-name__en",fontSize:45,dy:80,children:(c.isLegacy?o[1]+" ":"")+"to "+t[1]})]})]})},p=function(t){var e=t.num,r=Object(c.a)(t,b);return Object(j.jsx)("g",Object(n.a)(Object(n.a)({id:"platform"},r),{},{children:u.a.useMemo((function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("circle",{cx:0,cy:0,r:75,fill:"var(--rmg-theme-colour)"}),Object(j.jsx)("text",{className:"rmg-name__zh",dy:0,textAnchor:"middle",fontSize:135,fill:"#fff",children:e})]})}),[e])}))}},37:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,c=function(t,e){if(null==t)return{};var r,n,c={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(c[r]=t[r]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(c[r]=t[r])}return c}r.d(e,"a",(function(){return n}))},78:function(t,e,r){"use strict";var n=r(5),c=r(4),a=r(0);e.a=Object(c.memo)((function(t){var e;return Object(a.jsx)("rect",{fill:"var(--rmg-theme-colour)",height:20,style:(e={width:"var(--rmg-svg-width)"},Object(n.a)(e,"--strip-percentage",t.stripPc),Object(n.a)(e,"transform","translateY(calc(var(--strip-percentage, 95) * var(--rmg-svg-height) / 100 - 10px))"),e)})}))}}]);
//# sourceMappingURL=destinationMTR.f3547094.chunk.js.map