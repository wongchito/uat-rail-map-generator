(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[69],{114:function(t,e,r){"use strict";r.r(e);var n=r(0),c=r(35),a=r(8),i=r(12),s=r(4),l=r.n(s),o=r(15),u=r(75),m=r(1),f=["num"];e.default=l.a.memo((function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j,{}),Object(m.jsx)(u.a,{stripPc:90}),Object(m.jsx)(d,{})]})}));var j=l.a.memo((function(){return Object(m.jsx)("defs",{children:Object(m.jsx)("path",{id:"arrow",d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-black,#000)"})})})),d=function(){var t,e=l.a.useContext(o.a),r=e.param,n=e.routes;if(!1!==r.customiseMTRDest.terminal)t=r.customiseMTRDest.terminal;else{var c=Object(i.a)(new Set(n.filter((function(t){return t.includes(r.current_stn_idx)})).map((function(t){return t.filter((function(t){return!["linestart","lineend"].includes(t)})).slice("l"===r.direction?0:-1)[0]})).filter((function(t){return t!==r.current_stn_idx}))));t=[c.map((function(t){return r.stn_list[t].name[0]})).join("/"),c.map((function(t){return r.stn_list[t].name[1]})).join("/").replace("\\"," ")]}var s=l.a.useRef(null),u=l.a.useState({width:0}),f=Object(a.a)(u,2),j=f[0],d=f[1];l.a.useEffect((function(){return d(s.current.getBBox())}),[t.toString(),r.customiseMTRDest.isLegacy]);var g=310+j.width+45+50,O=(r.svgWidth.destination-("l"===r.direction?1:-1)*g)/2,h=O+285*("l"===r.direction?1:-1),x=h+120*("l"===r.direction?1:-1);return Object(m.jsxs)("g",{id:"dest_name",style:{transform:"translateY(calc(var(--rmg-svg-height) / 2 - 20px))"},children:[Object(m.jsx)("use",{xlinkHref:"#arrow",transform:"translate(".concat(O,",0)rotate(").concat("l"===r.direction?0:180,")")}),Object(m.jsx)(b,{num:r.platform_num,transform:"translate(".concat(h,",0)")}),Object(m.jsxs)("g",{ref:s,textAnchor:"l"===r.direction?"start":"end",transform:"translate(".concat(x,",-25)"),fill:"var(--rmg-black)",children:[Object(m.jsx)("text",{className:"rmg-name__zh",fontSize:90,children:(r.customiseMTRDest.isLegacy?r.line_name[0]:"")+"\u5f80"+t[0]}),Object(m.jsx)("text",{className:"rmg-name__en",fontSize:45,dy:80,children:(r.customiseMTRDest.isLegacy?r.line_name[1]+" ":"")+"to "+t[1]})]})]})},b=function(t){var e=t.num,r=Object(c.a)(t,f);return Object(m.jsx)("g",Object(n.a)(Object(n.a)({id:"platform"},r),{},{children:l.a.useMemo((function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("circle",{cx:0,cy:0,r:75,fill:"var(--rmg-theme-colour)"}),Object(m.jsx)("text",{className:"rmg-name__zh",dy:0,textAnchor:"middle",fontSize:135,fill:"#fff",children:e})]})}),[e])}))}},35:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,c=function(t,e){if(null==t)return{};var r,n,c={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(c[r]=t[r]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(c[r]=t[r])}return c}r.d(e,"a",(function(){return n}))},75:function(t,e,r){"use strict";var n=r(3),c=r(4),a=r(1);e.a=Object(c.memo)((function(t){var e;return Object(a.jsx)("rect",{fill:"var(--rmg-theme-colour)",height:20,style:(e={width:"var(--rmg-svg-width)"},Object(n.a)(e,"--strip-percentage",t.stripPc),Object(n.a)(e,"transform","translateY(calc(var(--strip-percentage, 95) * var(--rmg-svg-height) / 100 - 10px))"),e)})}))}}]);
//# sourceMappingURL=destinationMTR.bf79b2cf.chunk.js.map