(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[135],{332:function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,c=function(t,n){if(null==t)return{};var e,r,c={},s=Object.keys(t);for(r=0;r<s.length;r++)e=s[r],n.indexOf(e)>=0||(c[e]=t[e]);return c}(t,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)e=s[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(c[e]=t[e])}return c}e.d(n,"a",(function(){return r}))},501:function(t,n,e){"use strict";e.r(n);var r=e(8),c=e(332),s=e(26),i=e(0),a=e(27),o=e(2),l=["nextName"];n.default=function(){var t=Object(a.c)((function(t){return t.helper})).routes,n=Object(a.c)((function(t){return t.param})),e=n.svg_height-300,r=Object(i.useMemo)((function(){return t.filter((function(t){return t.includes(n.current_stn_idx)})).map((function(t){return t[t.indexOf(n.current_stn_idx)+("l"===n.direction?1:-1)]})).reduce((function(t,n){return t.includes(n)?t:t.concat(n)}),[])}),[t.toString(),n.current_stn_idx,n.direction]),c=Object(i.useMemo)((function(){return t.filter((function(t){return t.includes(n.current_stn_idx)})).map((function(t){return t[t.indexOf(n.current_stn_idx)+("l"===n.direction?-1:1)]})).reduce((function(t,n){return t.includes(n)?t:t.concat(n)}),[])}),[t.toString(),n.current_stn_idx,n.direction]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsx)("g",{transform:"translate(0,".concat(e,")"),children:Object(o.jsx)(u,{prevStnIds:r,nextStnIds:c})})]})};var d=Object(i.memo)((function(){return Object(o.jsx)("defs",{children:Object(o.jsx)("marker",{id:"slope",viewBox:"-1.5 0 3 1.5",refY:.5,children:Object(o.jsx)("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-theme-colour)"})})})})),u=function(t){var n=Object(a.c)((function(t){return t.param})),e=n.svgWidth.runin/2,r=1===t.nextStnIds.length&&["linestart","lineend"].includes(t.nextStnIds[0]),c=1===t.prevStnIds.length&&["linestart","lineend"].includes(t.prevStnIds[0]),s=t.nextStnIds.map((function(t){return n.stn_list[t].name})),i=10+(t.nextStnIds.length>1?-50*(s[0][0].split("\\").length-1)+-30*(s[0][1].split("\\").length-1):0),l=t.prevStnIds.map((function(t){return n.stn_list[t].name})),d=10+(t.prevStnIds.length>1?-50*(l[0][0].split("\\").length-1)+-30*(l[0][1].split("\\").length-1):0);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("g",{transform:"translate(0,110)",strokeWidth:12,fill:"none",children:[t.nextStnIds.length>1&&Object(o.jsx)("path",{stroke:"var(--rmg-theme-colour)",d:"l"===n.direction?"M".concat(n.svgWidth.runin/3,",125 L").concat(n.svgWidth.runin/6,",").concat(i," H36"):"M".concat(n.svgWidth.runin/3*2,",125 L").concat(n.svgWidth.runin/6*5,",").concat(i," H").concat(n.svgWidth.runin-36),markerEnd:"url(#slope)"}),t.prevStnIds.length>1&&Object(o.jsx)("path",{stroke:"gray",d:"l"===n.direction?"M".concat(n.svgWidth.runin/3*2,",125 L").concat(n.svgWidth.runin/6*5,",").concat(d," H").concat(n.svgWidth.runin-24):"M".concat(n.svgWidth.runin/3,",125 L").concat(n.svgWidth.runin/6,",").concat(d," H24")})]}),r&&"sh2020"!==n.info_panel_type?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("path",{transform:"translate(0,220)",stroke:"gray",strokeWidth:12,d:"M24,16 H ".concat(n.svgWidth.runin-24)}),Object(o.jsx)("g",{transform:"translate(".concat("l"===n.direction?36:n.svgWidth.runin-36,",160)"),textAnchor:"l"===n.direction?"start":"end",children:Object(o.jsx)(h,{})})]}):c&&"sh2020"!==n.info_panel_type?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("path",{transform:"translate(0,220)",stroke:"var(--rmg-theme-colour)",strokeWidth:12,d:"l"===n.direction?"M ".concat(n.svgWidth.runin-24,",16 H 36"):"M24,16 H ".concat(n.svgWidth.runin-36),markerEnd:"url(#slope)"}),Object(o.jsx)("g",{transform:"translate(".concat("l"===n.direction?n.svgWidth.runin-36:36,",160)"),textAnchor:"l"===n.direction?"end":"start",children:Object(o.jsx)(h,{})})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("g",{transform:"translate(0,220)",strokeWidth:12,children:[Object(o.jsx)("path",{stroke:"var(--rmg-theme-colour)",d:"M ".concat(e,",16 H ").concat("l"===n.direction?36:n.svgWidth.runin-36),markerEnd:"url(#slope)"}),Object(o.jsx)("path",{stroke:"gray",d:"M ".concat(e,",16 H ").concat("l"===n.direction?n.svgWidth.runin-24:24," ")})]}),Object(o.jsx)("g",{transform:"translate(".concat(e,",160)"),textAnchor:"middle",children:Object(o.jsx)(h,{})})]}),(c||!r)&&Object(o.jsx)(g,{stnIds:t.nextStnIds}),(r||!c)&&Object(o.jsx)(m,{stnIds:t.prevStnIds})]})},h=function(){var t=Object(a.c)((function(t){return t.param})),n=t.stn_list[t.current_stn_idx].name;return Object(i.useMemo)((function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:112,children:n[0]}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:36,dy:50,children:n[1].replace("\\"," ")})]})}),Object(s.a)(n))},j=function(t){var n=t.nextName,e=Object(c.a)(t,l);return Object(o.jsx)("g",Object(r.a)(Object(r.a)({},e),{},{children:Object(i.useMemo)((function(){return Object(o.jsxs)(o.Fragment,{children:[n[0].split("\\").map((function(t,e,r){return Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:48,dy:-50*(r.length-1-e)-30*(n[1].split("\\").length-1),children:t},t)})),n[1].split("\\").map((function(t,n,e){return Object(o.jsx)("text",{className:"rmg-name__en",fontSize:24,dy:28+-30*(e.length-1-n),children:t},t)}))]})}),Object(s.a)(n))}))},m=function(t){var n=Object(a.c)((function(t){return t.param})),e=t.stnIds.map((function(t){return n.stn_list[t].name})),r=(t.stnIds.length>1?15:125)+-50*e.map((function(t){return t[0].split("\\").length})).reduce((function(t,n){return t+n}),-e.length)+-30*e.map((function(t){return t[1].split("\\").length})).reduce((function(t,n){return t+n}),-e.length),c=70+(t.stnIds.length>1?-50*(e[0][0].split("\\").length-1)+-30*(e[0][1].split("\\").length-1):0);return Object(o.jsxs)("g",{fill:"gray",textAnchor:"l"===n.direction?"end":"start",transform:"translate(".concat("l"===n.direction?n.svgWidth.runin-36:36,",0)"),children:[Object(o.jsx)(j,{nextName:e[0],transform:"translate(0,183)"}),t.stnIds.length>1&&Object(o.jsx)(j,{nextName:e[1],transform:"translate(0,".concat(c,")")}),Object(o.jsxs)("g",{transform:"translate(0, ".concat(r,")"),children:[Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:22,children:"\u4e0a\u4e00\u7ad9"}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:12,dx:"l"===n.direction?-70:70,children:"Past Stop"})]})]})},g=function(t){var n=Object(a.c)((function(t){return t.param})),e=t.stnIds.map((function(t){return n.stn_list[t].name})),r=(t.stnIds.length>1?15:125)+-50*e.map((function(t){return t[0].split("\\").length})).reduce((function(t,n){return t+n}),-e.length)+-30*e.map((function(t){return t[1].split("\\").length})).reduce((function(t,n){return t+n}),-e.length),c=70+(t.stnIds.length>1?-50*(e[0][0].split("\\").length-1)+-30*(e[0][1].split("\\").length-1):0);return Object(o.jsxs)("g",{textAnchor:"l"===n.direction?"start":"end",transform:"translate(".concat("l"===n.direction?36:n.svgWidth.runin-36,",0)"),children:[Object(o.jsx)(j,{nextName:n.stn_list[t.stnIds[0]].name,transform:"translate(0,183)"}),t.stnIds.length>1&&Object(o.jsx)(j,{nextName:n.stn_list[t.stnIds[1]].name,transform:"translate(0,".concat(c,")")}),Object(o.jsxs)("g",{transform:"translate(0, ".concat(r,")"),children:[Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:22,children:"\u4e0b\u4e00\u7ad9"}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:12,dx:"l"===n.direction?70:-70,children:"Next Stop"})]})]})}}}]);
//# sourceMappingURL=runinSHMetro.c79120f8.chunk.js.map