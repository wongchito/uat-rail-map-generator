(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[91],{115:function(t,n,e){"use strict";e.r(n);var r=e(0),s=e(34),c=e(12),a=e(3),i=e(15),o=e(1),d=["nextName"];n.default=function(){var t=Object(a.useContext)(i.a),n=t.param,e=t.routes,r=n.svg_height-300,s=Object(a.useMemo)((function(){return e.filter((function(t){return t.includes(n.current_stn_idx)})).map((function(t){return t[t.indexOf(n.current_stn_idx)+("l"===n.direction?1:-1)]})).reduce((function(t,n){return t.includes(n)?t:t.concat(n)}),[])}),[e.toString(),n.current_stn_idx,n.direction]),c=Object(a.useMemo)((function(){return e.filter((function(t){return t.includes(n.current_stn_idx)})).map((function(t){return t[t.indexOf(n.current_stn_idx)+("l"===n.direction?-1:1)]})).reduce((function(t,n){return t.includes(n)?t:t.concat(n)}),[])}),[e.toString(),n.current_stn_idx,n.direction]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{}),Object(o.jsx)("g",{transform:"translate(0,".concat(r,")"),children:Object(o.jsx)(j,{prevStnIds:s,nextStnIds:c})})]})};var l=Object(a.memo)((function(){return Object(o.jsx)("defs",{children:Object(o.jsx)("marker",{id:"slope",viewBox:"-1.5 0 3 1.5",refY:.5,children:Object(o.jsx)("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-theme-colour)"})})})})),j=function(t){var n=Object(a.useContext)(i.a).param,e=n.svgWidth.runin/2,r=1===t.nextStnIds.length&&["linestart","lineend"].includes(t.nextStnIds[0]),s=1===t.prevStnIds.length&&["linestart","lineend"].includes(t.prevStnIds[0]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("g",{transform:"translate(0,110)",strokeWidth:12,fill:"none",children:[t.nextStnIds.length>1&&Object(o.jsx)("path",{stroke:"var(--rmg-theme-colour)",d:"l"===n.direction?"M".concat(n.svgWidth.runin/3,",125 L").concat(n.svgWidth.runin/6,",10 H36"):"M".concat(n.svgWidth.runin/3*2,",125 L").concat(n.svgWidth.runin/6*5,",10 H").concat(n.svgWidth.runin-36),markerEnd:"url(#slope)"}),t.prevStnIds.length>1&&Object(o.jsx)("path",{stroke:"gray",d:"l"===n.direction?"M".concat(n.svgWidth.runin/3*2,",125 L").concat(n.svgWidth.runin/6*5,",10 H").concat(n.svgWidth.runin-24):"M".concat(n.svgWidth.runin/3,",125 L").concat(n.svgWidth.runin/6,",10 H24")})]}),r&&"sh"===n.info_panel_type?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("path",{transform:"translate(0,220)",stroke:"gray",strokeWidth:12,d:"M24,16 H ".concat(n.svgWidth.runin-24)}),Object(o.jsx)("g",{transform:"translate(".concat("l"===n.direction?36:n.svgWidth.runin-36,",160)"),textAnchor:"l"===n.direction?"start":"end",children:Object(o.jsx)(u,{})})]}):s&&"sh"===n.info_panel_type?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("path",{transform:"translate(0,220)",stroke:"var(--rmg-theme-colour)",strokeWidth:12,d:"l"===n.direction?"M ".concat(n.svgWidth.runin-24,",16 H 36"):"M24,16 H ".concat(n.svgWidth.runin-36),markerEnd:"url(#slope)"}),Object(o.jsx)("g",{transform:"translate(".concat("l"===n.direction?n.svgWidth.runin-36:36,",160)"),textAnchor:"l"===n.direction?"end":"start",children:Object(o.jsx)(u,{})})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("g",{transform:"translate(0,220)",strokeWidth:12,children:[Object(o.jsx)("path",{stroke:"var(--rmg-theme-colour)",d:"M ".concat(e,",16 H ").concat("l"===n.direction?36:n.svgWidth.runin-36),markerEnd:"url(#slope)"}),Object(o.jsx)("path",{stroke:"gray",d:"M ".concat(e,",16 H ").concat("l"===n.direction?n.svgWidth.runin-24:24," ")})]}),Object(o.jsx)("g",{transform:"translate(".concat(e,",160)"),textAnchor:"middle",children:Object(o.jsx)(u,{})})]}),(s||!r)&&Object(o.jsx)(m,{stnIds:t.nextStnIds}),(r||!s)&&Object(o.jsx)(h,{stnIds:t.prevStnIds})]})},u=function(){var t=Object(a.useContext)(i.a).param,n=t.stn_list[t.current_stn_idx].name;return Object(a.useMemo)((function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:112,children:n[0]}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:36,dy:50,children:n[1].replace("\\"," ")})]})}),Object(c.a)(n))},x=function(t){var n=t.nextName,e=Object(s.a)(t,d);return Object(o.jsx)("g",Object(r.a)(Object(r.a)({},e),{},{children:Object(a.useMemo)((function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:48,children:n[0]}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:24,dy:28,children:n[1].replace("\\"," ")})]})}),Object(c.a)(n))}))},h=function(t){var n=Object(a.useContext)(i.a).param;return Object(o.jsxs)("g",{fill:"gray",textAnchor:"l"===n.direction?"end":"start",transform:"translate(".concat("l"===n.direction?n.svgWidth.runin-36:36,",0)"),children:[Object(o.jsx)(x,{nextName:n.stn_list[t.stnIds[0]].name,transform:"translate(0,183)"}),t.stnIds.length>1&&Object(o.jsx)(x,{nextName:n.stn_list[t.stnIds[1]].name,transform:"translate(0,70)"}),Object(o.jsxs)("g",{transform:"translate(0, ".concat(125-(t.stnIds.length>1?110:0),")"),children:[Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:22,children:"\u4e0a\u4e00\u7ad9"}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:12,dx:"l"===n.direction?-70:70,children:"Past Stop"})]})]})},m=function(t){var n=Object(a.useContext)(i.a).param;return Object(o.jsxs)("g",{textAnchor:"l"===n.direction?"start":"end",transform:"translate(".concat("l"===n.direction?36:n.svgWidth.runin-36,",0)"),children:[Object(o.jsx)(x,{nextName:n.stn_list[t.stnIds[0]].name,transform:"translate(0,183)"}),t.stnIds.length>1&&Object(o.jsx)(x,{nextName:n.stn_list[t.stnIds[1]].name,transform:"translate(0,70)"}),Object(o.jsxs)("g",{transform:"translate(0, ".concat(125-(t.stnIds.length>1?110:0),")"),children:[Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:22,children:"\u4e0b\u4e00\u7ad9"}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:12,dx:"l"===n.direction?70:-70,children:"Next Stop"})]})]})}},34:function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,s=function(t,n){if(null==t)return{};var e,r,s={},c=Object.keys(t);for(r=0;r<c.length;r++)e=c[r],n.indexOf(e)>=0||(s[e]=t[e]);return s}(t,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)e=c[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(s[e]=t[e])}return s}e.d(n,"a",(function(){return r}))}}]);
//# sourceMappingURL=runinSHMetro.5606570b.chunk.js.map