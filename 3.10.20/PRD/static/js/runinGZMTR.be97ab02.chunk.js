(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[132],{172:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return c}))},238:function(e,t,n){"use strict";var c=n(3),r=n(9),a=n(0),s=n.n(a),i=n(172),l=n(6),j=n(2),m=["num","inStrip"];function u(e){var t=e.num,n=e.inStrip,r=Object(i.a)(e,m);return Object(j.jsxs)("g",Object(c.a)(Object(c.a)({textAnchor:"middle",fill:n?l.h.black:"var(--rmg-theme-fg)"},r),{},{children:[Object(j.jsx)("rect",{height:40,width:40,rx:4,x:-20,fill:n?"#fff":"var(--rmg-theme-colour)"}),Object(j.jsx)("text",{className:"rmg-name__en",fontSize:20,dy:12,children:t}),Object(j.jsx)("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"\u5c4f\u853d\u95e8"}),Object(j.jsx)("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]}))}t.a=function(e){var t=function(e){switch(e){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}}(e.variant),n=s.a.useMemo((function(){switch(e.variant){case"gz1":return Object(j.jsx)("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return Object(j.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return Object(j.jsx)("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return Object(j.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return Object(j.jsx)("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return Object(j.jsx)("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return Object(j.jsx)("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return Object(j.jsx)("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return Object(j.jsx)(j.Fragment,{})}}),[e.variant]);return Object(j.jsxs)("g",{transform:"translate(0,".concat("gz4"===e.variant?-20:0,")"),children:[Object(j.jsx)("rect",{id:"strip_gz",style:Object(r.a)({},"--height","".concat(t,"px"))}),Object(j.jsx)("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:e.isShowLight&&n}),!1!==e.isShowPSD&&Object(j.jsx)(o,Object(c.a)({},e))]})};var o=s.a.memo((function(e){var t,n=["gz28","gz2otis","gz6","gzgf"].includes(e.variant),c=function(e){switch(e){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}}(e.variant);return Object(j.jsx)(u,{num:e.isShowPSD,inStrip:n,style:(t={},Object(r.a)(t,"--psd-dy",c),Object(r.a)(t,"transform","translate(var(--translate-x), var(--translate-y))"),Object(r.a)(t,"--translate-x","calc(var(--rmg-svg-width) / 2 + 80px)"),Object(r.a)(t,"--translate-y","calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"),t)})}),(function(e,t){return e.variant===t.variant&&e.isShowPSD===t.isShowPSD}))},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var c=n(3),r=n(18),a=n(172),s=n(0),i=n(2),l=Object(s.memo)((function(e){var t=e.passed,n=e.large?"M0,12.95 V-12.95 H-12.95 a12.95,12.95 0 0,0 0,25.9 h25.9 a12.95,12.95 0 0,0 0,-25.9 H0":"M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0";return Object(i.jsx)("path",{d:n,fill:"#fff",strokeWidth:2,stroke:t?"#aaa":"var(--rmg-theme-colour)"})}),(function(e,t){return e.passed===t.passed&&e.large===t.large})),j=["lineNum","stnNum","passed","large"];function m(e){var t=e.lineNum,n=e.stnNum,m=e.passed,u=e.large,o=Object(a.a)(e,j),x=Object(s.useRef)(null),h=Object(s.useRef)(null),b=Object(s.useState)({width:0}),f=Object(r.a)(b,2),d=f[0],O=f[1],g=Object(s.useState)({width:0}),p=Object(r.a)(g,2),_=p[0],z=p[1];Object(s.useEffect)((function(){O(x.current.getBBox()),z(h.current.getBBox())}),[t,n]);var v=15/Math.max(15,d.width),y=2===t.length&&2===n.length?v:15/Math.max(15,_.width);return Object(i.jsxs)("g",Object(c.a)(Object(c.a)({},o),{},{children:[Object(i.jsx)(l,{passed:m,large:u}),Object(i.jsxs)("g",{textAnchor:"middle",fontSize:13.5,transform:u?"scale(1.4)":"",fill:m?"#aaa":"#000",children:[Object(i.jsx)("g",{transform:"translate(-9.25,0)scale(".concat(v,")"),children:Object(i.jsx)("text",{ref:x,className:"rmg-name__zh",children:t})}),Object(i.jsx)("g",{transform:"translate(9.25,0)scale(".concat(y,")"),children:Object(i.jsx)("text",{ref:h,className:"rmg-name__zh",children:n})})]})]}))}},355:function(e,t,n){"use strict";n.r(t);var c=n(9),r=n(0),a=n.n(r),s=n(238),i=n(38),l=n(3),j=n(172),m=n(18),u=n(239),o=n(6),x=n(20),h=n(2),b=["curName","curSecName"],f=["secName"],d=["secName"],O=function(){var e,t=Object(x.c)((function(e){return e.param.svg_height})),n=Object(x.c)((function(e){return e.param.svgWidth})),s=Object(x.c)((function(e){return e.param.direction})),i=Object(x.c)((function(e){return e.param.info_panel_type})),l=Object(x.c)((function(e){return e.param.line_num})),j=Object(x.c)((function(e){return e.param.current_stn_idx})),b=Object(x.c)((function(e){return e.param.stn_list[j]})),f=a.a.useRef(null),d=Object(r.useState)({width:0}),O=Object(m.a)(d,2),p=O[0],z=O[1];Object(r.useEffect)((function(){return z(f.current.getBBox())}),[b.name[0],b.name[1]]);var y=b[s===o.m.left?"parents":"children"],w={name:"translate(".concat((s===o.m.left?1:-1)*n[o.c.RunIn]/4,",45)"),next:"translate(".concat((s===o.m.left?1:-1)*n[o.c.RunIn]/10,",45)")};return Object(h.jsxs)("g",{children:[Object(h.jsxs)("g",{transform:i===o.i.gz2otis?w.name:"",children:[Object(h.jsx)(g,{ref:f,curName:b.name,curSecName:b.secondaryName,style:Object(c.a)({},"--translate-y","".concat(.5*t-50-18*(b.name[1].split("\\").length-1)-(b.secondaryName?29:0),"px"))}),Object(h.jsx)(u.a,{lineNum:l,stnNum:b.num,style:(e={},Object(c.a)(e,"--translate-x","".concat((n[o.c.RunIn]+p.width)/2+55,"px")),Object(c.a)(e,"--translate-y","".concat(.5*t-30-18*(b.name[1].split("\\").length-1)-(b.secondaryName?29:0),"px")),Object(c.a)(e,"transform","translate(var(--translate-x, 800px), var(--translate-y, 145px))"),e),large:!0})]}),Object(h.jsx)("g",{transform:i===o.i.gz2otis?w.next:"",children:y.includes("linestart")||y.includes("lineend")?Object(h.jsx)(h.Fragment,{}):1===y.length?Object(h.jsx)(_,{nextId:y[0],nameBBox:p}):Object(h.jsx)(v,{nextIds:y,nameBBox:p})})]})},g=a.a.forwardRef((function(e,t){var n=e.curName,c=e.curSecName,r=Object(j.a)(e,b);return Object(h.jsxs)("g",Object(l.a)(Object(l.a)({id:"big_name"},r),{},{children:[a.a.useMemo((function(){return Object(h.jsxs)("g",{ref:t,children:[Object(h.jsx)("text",{className:"rmg-name__zh",fontSize:90,children:n[0]}),Object(h.jsx)("g",{fontSize:36,className:"rmg-name__en",children:n[1].split("\\").map((function(e,t){return Object(h.jsx)("text",{dy:70+36*t,children:e},t)}))})]})}),[n]),c&&Object(h.jsx)(p,{secName:c,transform:"translate(0,".concat(70+36*n[1].split("\\").length,")")})]}))})),p=function(e){var t=e.secName,n=Object(j.a)(e,f),c=Object(r.useRef)(null),a=Object(r.useState)({x:0,width:0}),s=Object(m.a)(a,2),i=s[0],u=s[1];return Object(r.useEffect)((function(){return u(c.current.getBBox())}),[e.secName.toString()]),Object(h.jsxs)("g",Object(l.a)(Object(l.a)({},n),{},{children:[Object(h.jsxs)("g",{transform:"translate(0,4.5)",fontSize:36,children:[Object(h.jsx)("text",{textAnchor:"end",x:i.x-3,className:"rmg-name__zh",children:"("}),Object(h.jsx)("text",{textAnchor:"start",x:i.width+i.x+3,className:"rmg-name__zh",children:")"})]}),Object(h.jsxs)("g",{ref:c,textAnchor:"middle",children:[Object(h.jsx)("text",{className:"rmg-name__zh",fontSize:26,children:t[0]}),Object(h.jsx)("text",{dy:22,className:"rmg-name__en",fontSize:14,children:t[1]})]})]}))},_=function(e){var t,n=e.nextId,s=e.nameBBox,i=Object(x.c)((function(e){return e.param.svgWidth})),l=Object(x.c)((function(e){return e.param.direction})),j=Object(x.c)((function(e){return e.param.stn_list[n]})),u=j.name,b=j.secondaryName,f=Object(r.useState)({width:0}),d=Object(m.a)(f,2),O=d[0],g=d[1],p=a.a.useRef(null);Object(r.useEffect)((function(){return g(p.current.getBBox())}),[u.toString()]);var _=u[0].length,v=(i[o.c.RunIn]-s.width)/2;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("g",{id:"big_next",children:[Object(h.jsxs)("g",{textAnchor:"middle",style:Object(c.a)({},"--translate-x",l===o.m.left?"80px":"".concat(_<=2?i[o.c.RunIn]-45-O.width-70:i[o.c.RunIn]-45-O.width-52.5,"px")),children:[Object(h.jsx)("text",{className:"rmg-name__zh",fontSize:35,children:"\u4e0b\u7ad9"}),Object(h.jsx)("text",{className:"rmg-name__en",fontSize:17,dy:30,children:"Next"})]}),Object(h.jsxs)("g",{textAnchor:"start",ref:p,style:Object(c.a)({},"--translate-x",l===o.m.left?"".concat(_<=2?150:132.5,"px"):"".concat(i[o.c.RunIn]-45-O.width,"px")),children:[Object(h.jsx)("text",{className:"rmg-name__zh",fontSize:35,children:u[0]}),Object(h.jsx)("g",{fontSize:17,children:u[1].split("\\").map((function(e,t){return Object(h.jsx)("text",{className:"rmg-name__en",dy:30+17*t,children:e},t)}))})]}),b&&Object(h.jsx)("g",{textAnchor:"middle",style:Object(c.a)({},"--translate-x",l===o.m.left?"".concat(_<=2?150:132.5,"px"):"".concat(i[o.c.RunIn]-45-O.width,"px")),children:Object(h.jsx)(z,{secName:b,transform:"translate(".concat(O.width/2,",").concat(30+17*u[1].split("\\").length+5,")")})})]}),Object(h.jsx)("path",{id:"arrow",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black",style:(t={},Object(c.a)(t,"--translate-x",l===o.m.left?"".concat((115+35*((_<=2?1:.5)+_)+v)/2-20,"px"):"".concat((i[o.c.RunIn]-45-O.width-(_<=2?105:87.5)+v+e.nameBBox.width+55+25.9)/2+20,"px")),Object(c.a)(t,"--rotate",l===o.m.left?"0deg":"180deg"),t)})]})},z=function(e){var t=e.secName,n=Object(j.a)(e,d),c=Object(r.useRef)(null),a=Object(r.useState)({x:0,width:0}),s=Object(m.a)(a,2),i=s[0],u=s[1];return Object(r.useEffect)((function(){return u(c.current.getBBox())}),[e.secName.toString()]),Object(h.jsxs)("g",Object(l.a)(Object(l.a)({},n),{},{children:[Object(h.jsxs)("g",{transform:"translate(0,2.5)",fontSize:25,children:[Object(h.jsx)("text",{textAnchor:"end",x:i.x-3,className:"rmg-name__zh",children:"("}),Object(h.jsx)("text",{textAnchor:"start",x:i.width+i.x+3,className:"rmg-name__zh",children:")"})]}),Object(h.jsxs)("g",{ref:c,children:[Object(h.jsx)("text",{className:"rmg-name__zh",fontSize:18,children:t[0]}),Object(h.jsx)("text",{className:"rmg-name__en",fontSize:10,dy:15,children:t[1]})]})]}))},v=function(e){var t,n=e.nextIds,s=e.nameBBox,j=Object(x.c)((function(e){return e.helper})).routes,u=Object(x.c)((function(e){return e.param.svgWidth})),b=Object(x.c)((function(e){return e.param.direction})),f=Object(x.c)((function(e){return e.param.stn_list})),d=n.map((function(e){return f[e].name})),O=Object(r.useState)({width:0}),g=Object(m.a)(O,2),p=g[0],_=g[1],z=Object(r.useRef)([]);Object(r.useEffect)((function(){_((function(e){return Object(l.a)(Object(l.a)({},e),{},{width:0})})),z.current.forEach((function(e){var t=null===e||void 0===e?void 0:e.getBBox();_((function(e){return t?e.width>t.width?e:t:e}))}))}),[d.toString()]);var v=e.nextIds.map((function(e){return j.reduce((function(t,n){return n.includes(e)?t.concat(n.filter((function(e){return!["linestart","lineend"].includes(e)})).slice(b===o.m.left?0:-1)[0]):t}),[])})),y=Math.max.apply(Math,Object(i.a)(d.map((function(e){return e[0].length})))),w=(u[o.c.RunIn]-s.width)/2;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("g",{id:"big_next_2",children:d.map((function(e,t){return Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsxs)("g",{textAnchor:"middle",style:Object(c.a)({},"--translate-x",b===o.m.left?"72px":"".concat(u[o.c.RunIn]-45-p.width-41,"px")),children:[Object(h.jsx)("text",{className:"rmg-name__zh",children:"\u4e0b\u7ad9"}),Object(h.jsx)("text",{className:"rmg-name__en",y:22,children:"Next"})]}),Object(h.jsxs)("g",{ref:function(e){return z.current[t]=e},textAnchor:"start",style:Object(c.a)({},"--translate-x",b===o.m.left?"113px":"".concat(u[o.c.RunIn]-45-p.width,"px")),children:[Object(h.jsx)("text",{className:"rmg-name__zh",children:e[0]}),e[1].split("\\").map((function(e,t){return Object(h.jsx)("text",{className:"rmg-name__en",y:22+13*t,children:e},t)})),Object(h.jsx)("text",{className:"rmg-name__zh",y:-35,children:v[t].map((function(e){return f[e].name[0]})).join("/")+"\u65b9\u5411"}),Object(h.jsx)("text",{className:"rmg-name__en rmg-name__gzmtr--next2-dest",y:-20,children:"Towards "+v[t].map((function(e){return f[e].name[1]})).join("/").replace("\\"," ")})]})]},t)}))}),Object(h.jsx)("path",{id:"arrow",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black",style:(t={},Object(c.a)(t,"--translate-x",b===o.m.left?"".concat((99+27*(1+y)+w)/2-20,"px"):"".concat((u[o.c.RunIn]-45-p.width-41-27+w+e.nameBBox.width+55+25.9)/2+20,"px")),Object(c.a)(t,"--rotate",b===o.m.left?"0deg":"180deg"),t)})]})},y=["num"];function w(e){var t=e.num,n=Object(j.a)(e,y);return Object(h.jsxs)("g",Object(l.a)(Object(l.a)({textAnchor:"middle",fill:"var(--rmg-theme-fg)"},n),{},{children:[Object(h.jsx)("circle",{cx:0,cy:0,r:30,fill:"var(--rmg-theme-colour)"}),Object(h.jsx)("text",{className:"rmg-name__en",fontSize:38,dy:-9.5,children:t}),Object(h.jsx)("text",{className:"rmg-name__zh",fontSize:13,dy:10,children:"\u7ad9\u53f0"}),Object(h.jsx)("text",{className:"rmg-name__en",fontSize:9,dy:21,children:"Platform"})]}))}t.default=function(){var e,t=Object(x.c)((function(e){return e.param.svgWidth})),n=Object(x.c)((function(e){return e.param.direction})),r=Object(x.c)((function(e){return e.param.info_panel_type})),a=Object(x.c)((function(e){return e.param.platform_num})),i=Object(x.c)((function(e){return e.param.psd_num})),l={platform:"translate(".concat(n===o.m.left?50:-50,",45)")};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(s.a,{variant:r,isShowLight:r!==o.i.gz2otis,isShowPSD:r!==o.i.gz2otis&&i}),Object(h.jsx)("g",{transform:r===o.i.gz2otis?l.platform:"",children:Object(h.jsx)(w,{num:a,style:(e={},Object(c.a)(e,"--translate-x","".concat(n===o.m.left?t[o.c.RunIn]-100:100,"px")),Object(c.a)(e,"--translate-y","calc(var(--rmg-svg-height) / 2 - 30px)"),Object(c.a)(e,"transform","translate(var(--translate-x, 100px), var(--translate-y))"),e)})}),Object(h.jsx)(O,{}),r===o.i.gz2otis&&Object(h.jsx)(N,{})]})};var N=function(){var e=Object(x.c)((function(e){return e.param.svgWidth})),t=Object(x.c)((function(e){return e.param.svg_height}));return Object(h.jsxs)("g",{id:"otis_frame",strokeWidth:3,stroke:"black",children:[Object(h.jsx)("line",{y2:t,transform:"translate(".concat(e[o.c.RunIn]/2,",0)")}),Object(h.jsx)("line",{x2:e[o.c.RunIn],transform:"translate(0,90)"})]})}}}]);
//# sourceMappingURL=runinGZMTR.be97ab02.chunk.js.map