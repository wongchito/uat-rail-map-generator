(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[75],{123:function(t,e,n){"use strict";n.r(e);var r=n(11),c=n(12),a=n(5),i=n.n(a),s=n(8),o=n(0);e.default=Object(a.memo)((function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{}),Object(o.jsx)(m,{})]})}));var l=Object(a.memo)((function(){return Object(o.jsx)("defs",{children:Object(o.jsx)("marker",{id:"slope",viewBox:"-1.5 0 3 1.5",refY:.5,children:Object(o.jsx)("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-theme-colour)"})})})})),m=function(){var t=Object(s.c)((function(t){return t.helper})).routes,e=Object(s.c)((function(t){return t.param})),n=Object(c.a)(new Set(t.filter((function(t){return t.includes(e.current_stn_idx)})).map((function(t){var n=t.filter((function(t){return!["linestart","lineend"].includes(t)}));return"l"===e.direction?n[0]:n.reverse()[0]})))),i=[n.map((function(t){return e.stn_list[t].name[0]})),n.map((function(t){return e.stn_list[t].name[1]}))],l=Object(a.useRef)(null),m=Object(a.useState)({width:0}),h=Object(r.a)(m,2),b=h[0],O=h[1];Object(a.useEffect)((function(){return O(l.current.getBBox())}),Object(c.a)(i.flat()));var x=e.svgWidth.destination/2,g=x-10-36-b.width>=162.5&&x-10-36-264>=162.5?x:"l"===e.direction?(e.svgWidth.destination+b.width-264)/2:(e.svgWidth.destination-b.width+264)/2;return Object(o.jsxs)("g",{transform:"translate(0,".concat(e.svg_height-300,")"),children:[Object(o.jsx)("path",{stroke:"var(--rmg-theme-colour)",strokeWidth:12,d:"l"===e.direction?"M".concat(e.svgWidth.destination-24,",16 H 36"):"M24,16 H ".concat(e.svgWidth.destination-36),transform:"translate(0,220)",markerEnd:"url(#slope)"}),Object(o.jsx)(j,{ref:l,destNames:i}),!1!==e.platform_num&&Object(o.jsx)("g",{transform:"translate(".concat(g,",0)"),children:Object(o.jsx)(d,{})}),e.line_name[0].match(/^[\w\d]+/)?Object(o.jsx)(f,{}):Object(o.jsx)(u,{})]})},j=Object(a.forwardRef)((function(t,e){var n=Object(s.c)((function(t){return t.param}));return Object(o.jsx)("g",{ref:e,transform:"translate(".concat("l"===n.direction?36:n.svgWidth.destination-36,",145)"),children:Object(a.useMemo)((function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("g",{transform:"translate(0,".concat(2===t.destNames[0].length?-20:20,")"),children:Object(o.jsx)("path",{d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"black",transform:"rotate(".concat("l"===n.direction?0:180,")scale(0.8)")})}),Object(o.jsxs)("g",{textAnchor:"l"===n.direction?"start":"end",transform:"translate(".concat("l"===n.direction?148:-148,",25)"),children:[t.destNames[0].map((function(t,e){return Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:70,dy:-100*e+7,children:"\u5f80"+t},e)})),t.destNames[1].map((function(t,e){return Object(o.jsx)("text",{className:"rmg-name__en",fontSize:25,dy:-100*e+40,children:"To "+t},e)}))]})]})}),[n.direction].concat(Object(c.a)(t.destNames.flat())))})})),d=function(){var t=Object(s.c)((function(t){return t.param}));return Object(a.useMemo)((function(){return Object(o.jsxs)("g",{transform:"translate(".concat(-102.5,",150)"),children:[Object(o.jsx)("circle",{r:60,fill:"none",stroke:"black",strokeWidth:2}),Object(o.jsx)("text",{className:"rmg-name__en",dominantBaseline:"central",fontSize:120,textAnchor:"middle",children:t.platform_num}),Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:100,dominantBaseline:"central",x:65,children:"\u7ad9\u53f0"})]})}),[t.platform_num])},u=function(){var t=Object(s.c)((function(t){return t.param})),e=t.line_name,n=t.direction,l=t.svgWidth,m="l"===n?l.destination-42:42,j=Object(a.useRef)(null),d=i.a.useState({width:0}),u=Object(r.a)(d,2),f=u[0],h=u[1];i.a.useEffect((function(){return h(j.current.getBBox())}),Object(c.a)(e));var b=("l"===n?-f.width:0)-6,O=("l"===n?-1:1)*f.width/2;return Object(a.useMemo)((function(){return Object(o.jsxs)("g",{transform:"translate(".concat(m,",92)"),children:[Object(o.jsx)("rect",{fill:"var(--rmg-theme-colour)",x:b,width:f.width+10,height:120}),Object(o.jsxs)("g",{textAnchor:"r"===n?"start":"end",transform:"translate(0,68)",fill:"var(--rmg-theme-fg)",children:[Object(o.jsx)("g",{ref:j,children:Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:68,children:e[0]})}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:30,textAnchor:"middle",x:O,dy:42,children:e[1]})]})]})}),[f,m,n,e])},f=function(){var t=Object(s.c)((function(t){return t.param})),e=t.line_name[0].match(/^[\w\d]+|.+/g),n=Object(r.a)(e,2),i=n[0],l=n[1],m="l"===t.direction?t.svgWidth.destination-36-210:90;return Object(a.useMemo)((function(){return Object(o.jsxs)("g",{transform:"translate(".concat(m,",92)"),children:[Object(o.jsx)("rect",{fill:"var(--rmg-theme-colour)",x:-54,width:108,height:120}),Object(o.jsx)("text",{className:"rmg-name__zh",fill:"var(--rmg-theme-fg)",fontSize:96,textAnchor:"middle",dominantBaseline:"central",transform:"translate(0,60)",letterSpacing:-5,children:i}),Object(o.jsxs)("g",{textAnchor:"start",transform:"translate(74,68)",children:[Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:68,children:l}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:30,dy:42,children:t.line_name[1]})]})]})}),[m].concat(Object(c.a)(t.line_name)))}}}]);
//# sourceMappingURL=destinationSHMetro.699a98ba.chunk.js.map