(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[112],{340:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,c=function(t,e){if(null==t)return{};var r,n,c={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(c[r]=t[r]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(c[r]=t[r])}return c}r.d(e,"a",(function(){return n}))},404:function(t,e,r){"use strict";var n=r(3),c=r(0),a=r(2);e.a=Object(c.memo)((function(t){var e;return Object(a.jsx)("rect",{fill:"var(--rmg-theme-colour)",height:20,style:(e={width:"var(--rmg-svg-width)"},Object(n.a)(e,"--strip-percentage",t.stripPc),Object(n.a)(e,"transform","translateY(calc(var(--strip-percentage, 95) * var(--rmg-svg-height) / 100 - 10px))"),e)})}))},506:function(t,e,r){"use strict";r.r(e);var n=r(8),c=r(340),a=r(14),i=r(26),s=r(0),u=r.n(s),l=r(404),o=r(16),f=r(27),m=r(2),j=["num"];e.default=Object(s.memo)((function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{}),Object(m.jsx)(l.a,{stripPc:90}),Object(m.jsx)(O,{})]})}));var b=Object(s.memo)((function(){return Object(m.jsx)("defs",{children:Object(m.jsx)("path",{id:"arrow",d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-black,#000)"})})})),O=function(){var t,e=Object(f.c)((function(t){return t.helper.routes})),r=Object(f.c)((function(t){return t.param.svgWidth})),n=Object(f.c)((function(t){return t.param.direction})),c=Object(f.c)((function(t){return t.param.customiseMTRDest})),s=Object(f.c)((function(t){return t.param.platform_num})),l=Object(f.c)((function(t){return t.param.line_name})),j=Object(f.c)((function(t){return t.param.current_stn_idx})),b=Object(f.c)((function(t){return t.param.stn_list}));if(!1!==c.terminal)t=c.terminal;else{var O=Object(i.a)(new Set(e.filter((function(t){return t.includes(j)})).map((function(t){return t.filter((function(t){return!["linestart","lineend"].includes(t)})).slice(n===o.m.left?0:-1)[0]})).filter((function(t){return t!==j}))));t=[O.map((function(t){return b[t].name[0]})).join("/"),O.map((function(t){return b[t].name[1]})).join("/").replace("\\"," ")]}var g=u.a.useRef(null),d=u.a.useState({width:0}),h=Object(a.a)(d,2),x=h[0],v=h[1];u.a.useEffect((function(){return v(g.current.getBBox())}),[t.toString(),c.isLegacy]);var y=310+x.width+45+50,_=(r[o.c.Destination]-(n===o.m.left?1:-1)*y)/2,w=_+285*(n===o.m.left?1:-1),S=w+120*(n===o.m.left?1:-1);return Object(m.jsxs)("g",{id:"dest_name",style:{transform:"translateY(calc(var(--rmg-svg-height) / 2 - 20px))"},children:[Object(m.jsx)("use",{xlinkHref:"#arrow",transform:"translate(".concat(_,",0)rotate(").concat(n===o.m.left?0:180,")")}),Object(m.jsx)(p,{num:s,transform:"translate(".concat(w,",0)")}),Object(m.jsxs)("g",{ref:g,textAnchor:n===o.m.left?"start":"end",transform:"translate(".concat(S,",-25)"),fill:"var(--rmg-black)",children:[Object(m.jsx)("text",{className:"rmg-name__zh",fontSize:90,children:(c.isLegacy?l[0]:"")+"\u5f80"+t[0]}),Object(m.jsx)("text",{className:"rmg-name__en",fontSize:45,dy:80,children:(c.isLegacy?l[1]+" ":"")+"to "+t[1]})]})]})},p=function(t){var e=t.num,r=Object(c.a)(t,j);return Object(m.jsx)("g",Object(n.a)(Object(n.a)({id:"platform"},r),{},{children:u.a.useMemo((function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("circle",{cx:0,cy:0,r:75,fill:"var(--rmg-theme-colour)"}),Object(m.jsx)("text",{className:"rmg-name__zh",dy:0,textAnchor:"middle",fontSize:135,fill:"#fff",children:e})]})}),[e])}))}}}]);
//# sourceMappingURL=destinationMTR.78b482ed.chunk.js.map