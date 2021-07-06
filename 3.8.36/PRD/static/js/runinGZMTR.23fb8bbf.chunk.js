(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[95],{160:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}n.d(t,"a",(function(){return r}))},205:function(e,t,n){"use strict";var r=n(1),c=n(8),a=n(0),s=n.n(a),i=n(3);t.a=function(e){var t=function(e){switch(e){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}}(e.variant),n=s.a.useMemo((function(){switch(e.variant){case"gz1":return Object(i.jsx)("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return Object(i.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return Object(i.jsx)("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return Object(i.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return Object(i.jsx)("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return Object(i.jsx)("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return Object(i.jsx)("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return Object(i.jsx)("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return Object(i.jsx)(i.Fragment,{})}}),[e.variant]);return Object(i.jsxs)("g",{transform:"translate(0,".concat("gz4"===e.variant?-20:0,")"),children:[Object(i.jsx)("rect",{id:"strip_gz",style:Object(c.a)({},"--height","".concat(t,"px"))}),Object(i.jsx)("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:e.isShowLight&&n}),!1!==e.isShowPSD&&Object(i.jsx)(l,Object(r.a)({},e))]})};var l=s.a.memo((function(e){var t,n=["gz28","gz2otis","gz6","gzgf"].includes(e.variant),r=function(e){switch(e){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}}(e.variant);return Object(i.jsxs)("g",{textAnchor:"middle",fill:n?"#000":"var(--rmg-theme-fg)",style:(t={},Object(c.a)(t,"--psd-dy",r),Object(c.a)(t,"transform","translate(var(--translate-x), var(--translate-y))"),Object(c.a)(t,"--translate-x","calc(var(--rmg-svg-width) / 2 + 80px)"),Object(c.a)(t,"--translate-y","calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"),t),children:[Object(i.jsx)("rect",{height:40,width:40,rx:4,x:-20,fill:n?"#fff":"var(--rmg-theme-colour)"}),Object(i.jsx)("text",{className:"rmg-name__en",fontSize:20,dy:12,children:e.isShowPSD}),Object(i.jsx)("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"\u5c4f\u853d\u95e8"}),Object(i.jsx)("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]})}),(function(e,t){return e.variant===t.variant&&e.isShowPSD===t.isShowPSD}))},206:function(e,t,n){"use strict";var r=n(1),c=n(17),a=n(160),s=n(0),i=n.n(s),l=n(3),j=["lineNum","stnNum"];t.a=function(e){var t=e.lineNum,n=e.stnNum,s=Object(a.a)(e,j),o=15.03125,x=i.a.useRef(null),m=i.a.useState({width:o}),u=Object(c.a)(m,2),d=u[0],h=u[1];i.a.useEffect((function(){return h(x.current.getBBox())}),[t]);var g=d.width>o?o/d.width:1,b=2===t.length?g:1;return Object(l.jsx)("g",Object(r.a)(Object(r.a)({textAnchor:"middle",fontSize:13.5},s),{},{children:i.a.useMemo((function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("g",{transform:"translate(-9.25,0)scale(".concat(g,")"),children:Object(l.jsx)("text",{ref:x,className:"rmg-name__zh",children:t})}),Object(l.jsx)("g",{transform:"translate(9.25,0)scale(".concat(b,")"),children:Object(l.jsx)("text",{className:"rmg-name__zh",children:n})})]})}),[d.width,t,n])}))}},302:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(160),a=n(8),s=n(0),i=n.n(s),l=n(28),j=n(205),o=n(36),x=n(17),m=n(206),u=n(3),d=["curName","curSecName"],h=["secName"],g=["lineNum","stnNum"],b=["secName"],O=function(){var e,t=i.a.useContext(l.b).param,n=t.stn_list[t.current_stn_idx],r=i.a.useRef(null),c=Object(s.useState)({width:0}),j=Object(x.a)(c,2),o=j[0],m=j[1];Object(s.useEffect)((function(){return m(r.current.getBBox())}),[n.name[0],n.name[1]]);var d=n["l"===t.direction?"parents":"children"],h={name:"translate(".concat(("l"===t.direction?1:-1)*t.svgWidth.runin/4,",45)"),next:"translate(".concat(("l"===t.direction?1:-1)*t.svgWidth.runin/10,",45)")};return Object(u.jsxs)("g",{children:[Object(u.jsxs)("g",{transform:"gz2otis"===t.info_panel_type?h.name:"",children:[Object(u.jsx)(f,{ref:r,curName:n.name,curSecName:n.secondaryName,style:Object(a.a)({},"--translate-y","".concat(.5*t.svg_height-50-18*(n.name[1].split("\\").length-1)-(n.secondaryName?29:0),"px"))}),Object(u.jsx)(p,{lineNum:t.line_num,stnNum:n.num,style:(e={},Object(a.a)(e,"--translate-x","".concat((t.svgWidth.runin+o.width)/2+55,"px")),Object(a.a)(e,"--translate-y","".concat(.5*t.svg_height-30-18*(n.name[1].split("\\").length-1)-(n.secondaryName?29:0),"px")),e)})]}),Object(u.jsx)("g",{transform:"gz2otis"===t.info_panel_type?h.next:"",children:d.includes("linestart")||d.includes("lineend")?Object(u.jsx)(u.Fragment,{}):1===d.length?Object(u.jsx)(z,{nextId:d[0],nameBBox:o}):Object(u.jsx)(y,{nextIds:d,nameBBox:o})})]})},f=i.a.forwardRef((function(e,t){var n=e.curName,a=e.curSecName,s=Object(c.a)(e,d);return Object(u.jsxs)("g",Object(r.a)(Object(r.a)({id:"big_name"},s),{},{children:[i.a.useMemo((function(){return Object(u.jsxs)("g",{ref:t,children:[Object(u.jsx)("text",{className:"rmg-name__zh",fontSize:90,children:n[0]}),Object(u.jsx)("g",{fontSize:36,className:"rmg-name__en",children:n[1].split("\\").map((function(e,t){return Object(u.jsx)("text",{dy:70+36*t,children:e},t)}))})]})}),[n]),a&&Object(u.jsx)(_,{secName:a,transform:"translate(0,".concat(70+36*n[1].split("\\").length,")")})]}))})),_=function(e){var t=e.secName,n=Object(c.a)(e,h),a=Object(s.useRef)(null),i=Object(s.useState)({x:0,width:0}),l=Object(x.a)(i,2),j=l[0],o=l[1];return Object(s.useEffect)((function(){return o(a.current.getBBox())}),[e.secName.toString()]),Object(u.jsxs)("g",Object(r.a)(Object(r.a)({},n),{},{children:[Object(u.jsxs)("g",{transform:"translate(0,4.5)",fontSize:36,children:[Object(u.jsx)("text",{textAnchor:"end",x:j.x-3,className:"rmg-name__zh",children:"("}),Object(u.jsx)("text",{textAnchor:"start",x:j.width+j.x+3,className:"rmg-name__zh",children:")"})]}),Object(u.jsxs)("g",{ref:a,textAnchor:"middle",children:[Object(u.jsx)("text",{className:"rmg-name__zh",fontSize:26,children:t[0]}),Object(u.jsx)("text",{dy:22,className:"rmg-name__en",fontSize:14,children:t[1]})]})]}))},p=function(e){var t=e.lineNum,n=e.stnNum,a=Object(c.a)(e,g);return Object(u.jsx)("g",Object(r.a)(Object(r.a)({id:"big_stn_num"},a),{},{children:i.a.useMemo((function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("path",{className:"rmg-stn rmg-stn--future",d:"M 0,12.95 V -12.95 H -12.95 a 12.95,12.95 0 0,0 0,25.9 h 25.9 a 12.95,12.95 0 0,0 0,-25.9 H 0 "}),Object(u.jsx)(m.a,{transform:"scale(1.4)",lineNum:t,stnNum:n})]})}),[t,n])}))},z=function(e){var t,n=i.a.useContext(l.b).param,r=n.stn_list[e.nextId],c=r.name,j=r.secondaryName,o=Object(s.useState)({width:0}),m=Object(x.a)(o,2),d=m[0],h=m[1],g=i.a.useRef(null);Object(s.useEffect)((function(){return h(g.current.getBBox())}),[c.toString()]);var b=n.stn_list[e.nextId].name[0].length,O=(n.svgWidth.runin-e.nameBBox.width)/2;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("g",{id:"big_next",children:[Object(u.jsxs)("g",{textAnchor:"middle",style:Object(a.a)({},"--translate-x","l"===n.direction?"80px":"".concat(b<=2?n.svgWidth.runin-45-d.width-70:n.svgWidth.runin-45-d.width-52.5,"px")),children:[Object(u.jsx)("text",{className:"rmg-name__zh",fontSize:35,children:"\u4e0b\u7ad9"}),Object(u.jsx)("text",{className:"rmg-name__en",fontSize:17,dy:30,children:"Next"})]}),Object(u.jsxs)("g",{textAnchor:"start",ref:g,style:Object(a.a)({},"--translate-x","l"===n.direction?"".concat(b<=2?150:132.5,"px"):"".concat(n.svgWidth.runin-45-d.width,"px")),children:[Object(u.jsx)("text",{className:"rmg-name__zh",fontSize:35,children:c[0]}),Object(u.jsx)("g",{fontSize:17,children:c[1].split("\\").map((function(e,t){return Object(u.jsx)("text",{className:"rmg-name__en",dy:30+17*t,children:e},t)}))})]}),j&&Object(u.jsx)("g",{textAnchor:"middle",style:Object(a.a)({},"--translate-x","l"===n.direction?"".concat(b<=2?150:132.5,"px"):"".concat(n.svgWidth.runin-45-d.width,"px")),children:Object(u.jsx)(v,{secName:j,transform:"translate(".concat(d.width/2,",").concat(30+17*c[1].split("\\").length+5,")")})})]}),Object(u.jsx)("path",{id:"arrow",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black",style:(t={},Object(a.a)(t,"--translate-x","l"===n.direction?"".concat((115+35*((b<=2?1:.5)+b)+O)/2-20,"px"):"".concat((n.svgWidth.runin-45-d.width-(b<=2?105:87.5)+O+e.nameBBox.width+55+25.9)/2+20,"px")),Object(a.a)(t,"--rotate","l"===n.direction?"0deg":"180deg"),t)})]})},v=function(e){var t=e.secName,n=Object(c.a)(e,b),a=Object(s.useRef)(null),i=Object(s.useState)({x:0,width:0}),l=Object(x.a)(i,2),j=l[0],o=l[1];return Object(s.useEffect)((function(){return o(a.current.getBBox())}),[e.secName.toString()]),Object(u.jsxs)("g",Object(r.a)(Object(r.a)({},n),{},{children:[Object(u.jsxs)("g",{transform:"translate(0,2.5)",fontSize:25,children:[Object(u.jsx)("text",{textAnchor:"end",x:j.x-3,className:"rmg-name__zh",children:"("}),Object(u.jsx)("text",{textAnchor:"start",x:j.width+j.x+3,className:"rmg-name__zh",children:")"})]}),Object(u.jsxs)("g",{ref:a,children:[Object(u.jsx)("text",{className:"rmg-name__zh",fontSize:18,children:t[0]}),Object(u.jsx)("text",{className:"rmg-name__en",fontSize:10,dy:15,children:t[1]})]})]}))},y=function(e){var t,n=i.a.useContext(l.b),c=n.param,j=n.routes,m=e.nextIds.map((function(e){return c.stn_list[e].name})),d=Object(s.useState)({width:0}),h=Object(x.a)(d,2),g=h[0],b=h[1],O=Object(s.useRef)([]);Object(s.useEffect)((function(){b((function(e){return Object(r.a)(Object(r.a)({},e),{},{width:0})})),O.current.forEach((function(e){var t=null===e||void 0===e?void 0:e.getBBox();b((function(e){return t?e.width>t.width?e:t:e}))}))}),[m.toString()]);var f=e.nextIds.map((function(e){return j.reduce((function(t,n){return n.includes(e)?t.concat(n.filter((function(e){return!["linestart","lineend"].includes(e)})).slice("l"===c.direction?0:-1)[0]):t}),[])})),_=Math.max.apply(Math,Object(o.a)(m.map((function(e){return e[0].length})))),p=(c.svgWidth.runin-e.nameBBox.width)/2;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("g",{id:"big_next_2",children:m.map((function(e,t){return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsxs)("g",{textAnchor:"middle",style:Object(a.a)({},"--translate-x","l"===c.direction?"72px":"".concat(c.svgWidth.runin-45-g.width-41,"px")),children:[Object(u.jsx)("text",{className:"rmg-name__zh",children:"\u4e0b\u7ad9"}),Object(u.jsx)("text",{className:"rmg-name__en",y:22,children:"Next"})]}),Object(u.jsxs)("g",{ref:function(e){return O.current[t]=e},textAnchor:"start",style:Object(a.a)({},"--translate-x","l"===c.direction?"113px":"".concat(c.svgWidth.runin-45-g.width,"px")),children:[Object(u.jsx)("text",{className:"rmg-name__zh",children:e[0]}),e[1].split("\\").map((function(e,t){return Object(u.jsx)("text",{className:"rmg-name__en",y:22+13*t,children:e},t)})),Object(u.jsx)("text",{className:"rmg-name__zh",y:-35,children:f[t].map((function(e){return c.stn_list[e].name[0]})).join("/")+"\u65b9\u5411"}),Object(u.jsx)("text",{className:"rmg-name__en rmg-name__gzmtr--next2-dest",y:-20,children:"Towards "+f[t].map((function(e){return c.stn_list[e].name[1]})).join("/").replace("\\"," ")})]})]},t)}))}),Object(u.jsx)("path",{id:"arrow",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black",style:(t={},Object(a.a)(t,"--translate-x","l"===c.direction?"".concat((99+27*(1+_)+p)/2-20,"px"):"".concat((c.svgWidth.runin-45-g.width-41-27+p+e.nameBBox.width+55+25.9)/2+20,"px")),Object(a.a)(t,"--rotate","l"===c.direction?"0deg":"180deg"),t)})]})},N=["num"],w=(t.default=function(){var e=s.useContext(l.b).param,t={platform:"translate(".concat("l"===e.direction?50:-50,",45)")};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j.a,{variant:e.info_panel_type,isShowLight:"gz2otis"!==e.info_panel_type,isShowPSD:"gz2otis"!==e.info_panel_type&&e.psd_num}),Object(u.jsx)("g",{transform:"gz2otis"===e.info_panel_type?t.platform:"",children:Object(u.jsx)(w,{num:e.platform_num,style:Object(a.a)({},"--translate-x","".concat("l"===e.direction?e.svgWidth.runin-100:100,"px"))})}),Object(u.jsx)(O,{}),"gz2otis"===e.info_panel_type&&Object(u.jsx)(S,{})]})},function(e){var t=e.num,n=Object(c.a)(e,N);return Object(u.jsx)("g",Object(r.a)(Object(r.a)({id:"platform"},n),{},{children:s.useMemo((function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("circle",{cx:0,cy:0,r:30,fill:"var(--rmg-theme-colour)"}),Object(u.jsx)("text",{className:"rmg-name__en",fontSize:38,dy:-9.5,children:t}),Object(u.jsx)("text",{className:"rmg-name__zh",fontSize:13,dy:10,children:"\u7ad9\u53f0"}),Object(u.jsx)("text",{className:"rmg-name__en",fontSize:9,dy:21,children:"Platform"})]})}),[t])}))}),S=function(){var e=s.useContext(l.b).param;return Object(u.jsxs)("g",{id:"otis_frame",strokeWidth:3,stroke:"black",children:[Object(u.jsx)("line",{y2:e.svg_height,transform:"translate(".concat(e.svgWidth.runin/2,",0)")}),Object(u.jsx)("line",{x2:e.svgWidth.runin,transform:"translate(0,90)"})]})}}}]);
//# sourceMappingURL=runinGZMTR.23fb8bbf.chunk.js.map