(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[72],{108:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(7),c=n(1),l=n.n(c),m=n(5);t.default=Object(c.memo)((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,null),l.a.createElement(o,null))}));var i=Object(c.memo)((function(){return l.a.createElement("defs",null,l.a.createElement("marker",{id:"slope",viewBox:"-1.5 0 3 1.5",refY:.5},l.a.createElement("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-theme-colour)"})))})),o=function(){var e=Object(c.useContext)(m.b),t=e.param,n=e.routes,i=Object(r.a)(new Set(n.filter((function(e){return e.includes(t.current_stn_idx)})).map((function(e){var n=e.filter((function(e){return!["linestart","lineend"].includes(e)}));return"l"===t.direction?n[0]:n.reverse()[0]})))),o=[i.map((function(e){return t.stn_list[e].name[0]})).join("\uff0c"),i.map((function(e){return t.stn_list[e].name[1]})).join(", ").replace("\\"," ")],h=Object(c.useRef)(null),g=Object(c.useState)({width:0}),E=Object(a.a)(g,2),_=E[0],b=E[1];Object(c.useEffect)((function(){return b(h.current.getBBox())}),[].concat(o));var v=t.svgWidth.destination/2,x=v-10-36-_.width>=162.5&&v-10-36-264>=162.5?v:"l"===t.direction?(t.svgWidth.destination+_.width-264)/2:(t.svgWidth.destination-_.width+264)/2;return l.a.createElement("g",{transform:"translate(0,".concat(t.svg_height-300,")")},l.a.createElement("path",{stroke:"var(--rmg-theme-colour)",strokeWidth:12,d:"l"===t.direction?"M".concat(t.svgWidth.destination-24,",16 H 36"):"M24,16 H ".concat(t.svgWidth.destination-36),transform:"translate(0,220)",markerEnd:"url(#slope)"}),l.a.createElement(s,{ref:h,destNames:o}),!1!==t.platform_num&&l.a.createElement("g",{transform:"translate(".concat(x,",0)")},l.a.createElement(u,null)),t.line_name[0].match(/^[\w\d]+/)?l.a.createElement(f,null):l.a.createElement(d,null))},s=Object(c.forwardRef)((function(e,t){var n=Object(c.useContext)(m.b).param;return l.a.createElement("g",{ref:t,transform:"translate(".concat("l"===n.direction?36:n.svgWidth.destination-36,",145)")},Object(c.useMemo)((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("path",{d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"black",transform:"rotate(".concat("l"===n.direction?0:180,")scale(0.8)")}),l.a.createElement("g",{textAnchor:"l"===n.direction?"start":"end",transform:"translate(".concat("l"===n.direction?148:-148,",15)")},l.a.createElement("text",{className:"rmg-name__zh",fontSize:90},"\u5f80"+e.destNames[0]),l.a.createElement("text",{className:"rmg-name__en",fontSize:30,dy:44},"To "+e.destNames[1])))}),[n.direction].concat(Object(r.a)(e.destNames))))})),u=function(){var e=Object(c.useContext)(m.b).param;return l.a.createElement("g",{transform:"translate(".concat(-102.5,",130)")},l.a.createElement("circle",{r:60,fill:"none",stroke:"black",strokeWidth:2}),l.a.createElement("text",{className:"rmg-name__en",dominantBaseline:"central",fontSize:120,textAnchor:"middle"},e.platform_num),l.a.createElement("text",{className:"rmg-name__zh",fontSize:100,dominantBaseline:"central",x:65},"\u7ad9\u53f0"))},d=function(){var e=Object(c.useContext)(m.b).param,t=e.line_name,n="l"===e.direction?e.svgWidth.destination-36-132:168;return Object(c.useMemo)((function(){return l.a.createElement("g",{transform:"translate(".concat(n,",92)")},l.a.createElement("rect",{fill:"var(--rmg-theme-colour)",x:-132,width:264,height:120}),l.a.createElement("g",{textAnchor:"middle",transform:"translate(0,68)",fill:"var(--rmg-theme-fg)"},l.a.createElement("text",{className:"rmg-name__zh",fontSize:68},t[0]),l.a.createElement("text",{className:"rmg-name__en",fontSize:30,dy:42},t[1])))}),[n].concat(Object(r.a)(t)))},f=function(){var e=Object(c.useContext)(m.b).param,t=e.line_name[0].match(/^[\w\d]+|.+/g),n=Object(a.a)(t,2),i=n[0],o=n[1],s="l"===e.direction?e.svgWidth.destination-36-210:90;return Object(c.useMemo)((function(){return l.a.createElement("g",{transform:"translate(".concat(s,",92)")},l.a.createElement("rect",{fill:"var(--rmg-theme-colour)",x:-54,width:108,height:120}),l.a.createElement("text",{className:"rmg-name__zh",fill:"var(--rmg-theme-fg)",fontSize:96,textAnchor:"middle",dominantBaseline:"central",transform:"translate(0,60)",letterSpacing:-5},i),l.a.createElement("g",{textAnchor:"start",transform:"translate(74,68)"},l.a.createElement("text",{className:"rmg-name__zh",fontSize:68},o),l.a.createElement("text",{className:"rmg-name__en",fontSize:30,dy:42},e.line_name[1])))}),[s].concat(Object(r.a)(e.line_name)))}}}]);
//# sourceMappingURL=destinationSHMetro.1208fc19.chunk.js.map