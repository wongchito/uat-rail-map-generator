(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[71],{107:function(e,t,r){"use strict";r.r(t);var n=r(26),a=r(4),c=r(7),i=r(1),l=r.n(i),s=r(5),o=r(32);t.default=l.a.memo((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(o.a,{stripPc:90}),l.a.createElement(u,null))}));var m=l.a.memo((function(){return l.a.createElement("defs",null,l.a.createElement("path",{id:"arrow",d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-black,#000)"}))})),u=function(){var e,t=l.a.useContext(s.b),r=t.param,n=t.routes;if(!1!==r.customiseMTRDest.terminal)e=r.customiseMTRDest.terminal;else{var i=Object(c.a)(new Set(n.filter((function(e){return e.includes(r.current_stn_idx)})).map((function(e){return e.filter((function(e){return!["linestart","lineend"].includes(e)})).slice("l"===r.direction?0:-1)[0]})).filter((function(e){return e!==r.current_stn_idx}))));e=[i.map((function(e){return r.stn_list[e].name[0]})).join("/"),i.map((function(e){return r.stn_list[e].name[1]})).join("/").replace("\\"," ")]}var o=l.a.useRef(null),m=l.a.useState({width:0}),u=Object(a.a)(m,2),g=u[0],d=u[1];l.a.useEffect((function(){return d(o.current.getBBox())}),[e.toString(),r.customiseMTRDest.isLegacy]);var p=310+g.width+45+50,v=(r.svgWidth.destination-("l"===r.direction?1:-1)*p)/2,h=v+285*("l"===r.direction?1:-1),b=h+120*("l"===r.direction?1:-1);return l.a.createElement("g",{id:"dest_name",style:{transform:"translateY(calc(var(--rmg-svg-height) / 2 - 20px))"}},l.a.createElement("use",{xlinkHref:"#arrow",transform:"translate(".concat(v,",0)rotate(").concat("l"===r.direction?0:180,")")}),l.a.createElement(f,{num:r.platform_num,transform:"translate(".concat(h,",0)")}),l.a.createElement("g",{ref:o,textAnchor:"l"===r.direction?"start":"end",transform:"translate(".concat(b,",-25)"),fill:"var(--rmg-black)"},l.a.createElement("text",{className:"rmg-name__zh",fontSize:90},(r.customiseMTRDest.isLegacy?r.line_name[0]:"")+"\u5f80"+e[0]),l.a.createElement("text",{className:"rmg-name__en",fontSize:45,dy:80},(r.customiseMTRDest.isLegacy?r.line_name[1]+" ":"")+"to "+e[1])))},f=function(e){var t=e.num,r=Object(n.a)(e,["num"]);return l.a.createElement("g",Object.assign({id:"platform"},r),l.a.useMemo((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("circle",{cx:0,cy:0,r:75,fill:"var(--rmg-theme-colour)"}),l.a.createElement("text",{className:"rmg-name__zh",dy:0,textAnchor:"middle",fontSize:135,fill:"#fff"},t))}),[t]))}},26:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,"a",(function(){return n}))},32:function(e,t,r){"use strict";var n=r(3),a=r(1),c=r.n(a);t.a=Object(a.memo)((function(e){var t;return c.a.createElement("rect",{fill:"var(--rmg-theme-colour)",height:20,style:(t={width:"var(--rmg-svg-width)"},Object(n.a)(t,"--strip-percentage",e.stripPc),Object(n.a)(t,"transform","translateY(calc(var(--strip-percentage, 95) * var(--rmg-svg-height) / 100 - 10px))"),t)})}))}}]);
//# sourceMappingURL=destinationMTR.737a60a7.chunk.js.map