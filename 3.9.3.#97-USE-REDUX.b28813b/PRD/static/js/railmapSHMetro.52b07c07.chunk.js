(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[89],{131:function(t,e,n){"use strict";n.r(e);var r=n(4),c=n.n(r),a=n(10),i=n(3),s=n(0),o=n(21),l=n(37),u=n(36),h=n(13),f=n(1),d=["stnName"],j=["intInfos","direction"],b=function(t){var e=Object(r.useContext)(o.a).param,n=e.stn_list[t.stnId],c=([].concat(Object(h.a)(n.branch.left),Object(h.a)(n.branch.right)).length?8+12*n.name[1].split("\\").length:0)*("r"===e.direction?-1:1),a="",i={};return"sh2020"===e.info_panel_type?(a=3===n.services.length?"stn_sh_2020_direct":2===n.services.length?"stn_sh_2020_express":"stn_sh_2020",i.fill=-1===t.stnState?"gray":"var(--rmg-theme-colour)"):(a=3===n.services.length?"direct_sh":2===n.services.length?"express_sh":n.transfer.info.reduce((function(t,e){return t+e.length}),0)?"int2_sh":"stn_sh",i.stroke=-1===t.stnState?"gray":"var(--rmg-theme-colour)"),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("use",Object(s.a)({xlinkHref:"#".concat(a)},i)),Object(f.jsx)("g",{transform:"translate(".concat(c,",0)"),children:Object(f.jsx)(O,{name:n.name,infos:n.transfer.info,stnState:t.stnState,direction:e.direction,info_panel_type:e.info_panel_type})})]})},O=function(t){var e,n,i=t.name[1].split("\\").length,s=Object(r.useRef)(null),o=c.a.useState({width:0}),l=Object(a.a)(o,2),u=l[0],d=l[1];c.a.useEffect((function(){return d(s.current.getBBox())}),Object(h.a)(t.name));var j=u.width+5;return Object(f.jsxs)("g",{transform:"translate(".concat("l"===t.direction?6:-6,",").concat("sh2020"===t.info_panel_type?-20:-6,")rotate(").concat("l"===t.direction?-45:45,")"),children:[t.infos.reduce((function(t,e){return t+e.length}),0)&&Object(f.jsx)("line",{x1:0,x2:"l"===t.direction?j:-j,stroke:-1===t.stnState?"gray":"black",strokeWidth:.5}),Object(f.jsx)(x,{intInfos:t.infos[1]?(e=[]).concat.apply(e,Object(h.a)(t.infos)):t.infos[0],transform:"translate(".concat(j*("l"===t.direction?1:-1),",-10.75)"),direction:t.direction}),Object(f.jsxs)("g",{textAnchor:"l"===t.direction?"start":"end",transform:"translate(0,".concat(-16.15625-12*(i-1),")"),children:[Object(f.jsx)(m,{ref:s,stnName:t.name,fill:-1===t.stnState?"gray":0===t.stnState?"red":"black"}),(null===(n=t.infos[1])||void 0===n?void 0:n.length)&&Object(f.jsx)("g",{transform:"translate(".concat((j+15*t.infos.reduce((function(t,e){return t+e.length}),0))*("l"===t.direction?1:-1),",-22)"),children:Object(f.jsx)(_,{osiInfos:t.infos[1]})})]})]})},m=c.a.forwardRef((function(t,e){var n=t.stnName,r=Object(u.a)(t,d);return Object(f.jsx)("g",Object(s.a)(Object(s.a)({ref:e},r),{},{children:c.a.useMemo((function(){return Object(f.jsxs)(f.Fragment,{children:[n[0].split("\\").map((function(t,e,n){return Object(f.jsx)("text",{className:"rmg-name__zh",dy:-15*(n.length-1-e),children:t},e)})),Object(f.jsx)("g",{fontSize:9.6,children:n[1].split("\\").map((function(t,e){return Object(f.jsx)("text",{className:"rmg-name__en",dy:12*(e+1),children:t},e)}))})]})}),Object(h.a)(n))}))})),x=function(t){var e=t.intInfos,n=(t.direction,Object(u.a)(t,j)),r=0;return Object(f.jsx)("g",Object(s.a)(Object(s.a)({fontSize:14,textAnchor:"middle"},n),{},{children:e.map((function(e,n){var c=Boolean(e[4].match(/^\d.*$/)),a=Boolean(e[4].match(/^\u78c1(\u60ac)*\u6d6e/));"r"===t.direction&&(r-=(c||a?20:14*e[4].length+12+0)+(0===n?0:5));var i=Object(f.jsx)("g",{});return i=a?Object(f.jsx)("g",{transform:"translate(".concat(r,",-16)scale(0.1428571429)"),children:Object(f.jsx)(g,{info:e})},n):c?Object(f.jsx)("g",{transform:"translate(".concat(r,",0)"),children:Object(f.jsx)(p,{info:e})},n):Object(f.jsx)("g",{transform:"translate(".concat(r,",0)"),children:Object(f.jsx)(v,{info:e})},n),"l"===t.direction&&(r+=c||a?25:14*e[4].length+12+5),i}))}))},g=Object(r.memo)((function(t){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("use",{xlinkHref:"#intbox_maglev",fill:t.info[2],stroke:t.info[2]})})}),(function(t,e){return t.info.toString()===e.info.toString()})),p=Object(r.memo)((function(t){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("use",{xlinkHref:"#intbox_number",fill:t.info[2]}),Object(f.jsx)("text",{x:10,className:"rmg-name__zh",fill:t.info[3],dominantBaseline:"central",children:t.info[4].match(/(\d*)\w+/)[0]})]})}),(function(t,e){return t.info.toString()===e.info.toString()})),v=Object(r.memo)((function(t){var e=t.info[4].split("\\")[0].length;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("rect",{height:22,width:14*e+12,y:-11,fill:t.info[2]}),Object(f.jsx)("text",{x:7*e+6,className:"rmg-name__zh",fill:t.info[3],dominantBaseline:"central",children:t.info[4].split("\\")[0]})]})}),(function(t,e){return t.info.toString()===e.info.toString()})),_=function(t){var e=t.osiInfos.map((function(t){return t[4]}));return c.a.useMemo((function(){return Object(f.jsxs)("g",{textAnchor:"middle",fontSize:"50%",children:[Object(f.jsx)("text",{className:"rmg-name__zh",dy:-5,children:"\u6362\u4e58"+e.join("\uff0c")}),Object(f.jsx)("text",{className:"rmg-name__zh",dy:5,children:"\u4ec5\u9650\u516c\u5171\u4ea4\u901a\u5361"}),Object(f.jsx)("text",{className:"rmg-name__en",dy:12.5,fontSize:"75%",children:"Only for Public Transportation Card"})]})}),[e.toString()])},y=n(2),k=function(){var t=Object(r.useContext)(o.a),e=t.param,n=t.routes,a=t.branches,u=t.deps,h=Object(l.b)(e.stn_list,(function(){return 0}),(function(){return 0})),d=Object(l.c)("linestart","lineend",h),j=Object(l.c)(d.nodes[1],d.nodes.slice(-2)[0],h),b=c.a.useMemo((function(){return console.log("computing x shares"),Object.keys(e.stn_list).reduce((function(t,e){return Object(s.a)(Object(s.a)({},t),{},Object(i.a)({},e,Object(l.f)(e,h,a)))}),{})}),[a.toString(),JSON.stringify(h)]),O=[e.svgWidth.railmap*e.padding/100,e.svgWidth.railmap*(1-e.padding/100)],m=Object.keys(b).reduce((function(t,e){return Object(s.a)(Object(s.a)({},t),{},Object(i.a)({},e,O[0]+b[e]/j.len*(O[1]-O[0])))}),{}),x=c.a.useMemo((function(){return console.log("computing y shares"),Object.keys(e.stn_list).reduce((function(t,e){return Object(s.a)(Object(s.a)({},t),{},Object(i.a)({},e,a[0].includes(e)?0:3))}),{})}),[u]),g=Object.keys(x).reduce((function(t,n){return Object(s.a)(Object(s.a)({},t),{},Object(i.a)({},n,-x[n]*e.branch_spacing))}),{}),p=c.a.useMemo((function(){return Object(l.e)(e.current_stn_idx,n,e.direction)}),[e.current_stn_idx,e.direction,n.toString()]),v=Object.values(y.k),_=Object.values(e.stn_list).map((function(t){return t.services})).flat().reduce((function(t,e){return t[v.indexOf(e)]=!0,t}),[!1,!1,!1]).map((function(t,e){return[v[e],t]})).filter((function(t){return t[1]})).map((function(t){return t[0]})),k=Object(l.d)(a,p),W=_.map((function(t){return Object.keys(k).reduce((function(n,r){var c;return Object(s.a)(Object(s.a)({},n),{},(c={},Object(i.a)(c,r,k[r].map((function(n){return w(n,r,m,g,e.direction,t,_.length)})).filter((function(t){return""!==t}))),Object(i.a)(c,"service",t),c))}),{})}));return Object(f.jsxs)("g",{id:"main",transform:"translate(0,".concat(e.svg_height-63,")"),children:[Object(f.jsx)(S,{paths:W,direction:e.direction}),Object(f.jsx)(M,{xs:m,ys:g,stnStates:p}),Object(f.jsx)(L,{servicesLevel:_,dy:100-e.svg_height,direction:e.direction,lineXs:O}),Object(f.jsx)(H,{})]})},S=function(t){return Object(f.jsx)(f.Fragment,{children:t.paths.map((function(e,n){return Object(f.jsxs)("g",{transform:"translate(0,".concat(25*n,")"),children:[Object(f.jsx)("g",{children:e.pass.map((function(e,n){return Object(f.jsx)("path",{stroke:"gray",strokeWidth:12,fill:"none",d:e,markerStart:"l"===t.direction?"url(#arrow_gray)":void 0,markerEnd:"r"===t.direction?"url(#arrow_gray)":void 0,strokeLinejoin:"round"},n)}))}),Object(f.jsx)("g",{children:e.main.map((function(e,r){return Object(f.jsx)("path",{stroke:"var(--rmg-theme-colour)",strokeWidth:12,fill:"none",d:e,markerStart:"l"===t.direction?"url(#arrow_theme_left)":void 0,markerEnd:"r"===t.direction?"url(#arrow_theme_right)":void 0,strokeLinejoin:"round",filter:2===n?"url(#contrast-direct)":1===n?"url(#contrast-express)":""},r)}))})]},"servicePath".concat(n))}))})},w=function(t,e,n,r,c,i,s){var o=Object(a.a)([],2),l=o[0],u=o[1],h={},f=30,d={local:0,express:20,direct:40}[i],j=s>1?50:0;if(t.forEach((function(t){var e=n[t],c=r[t];if(!l&&0!==l)return u=e,l=c,void(h.start=[e,c]);0===c?c!==l&&(h.bifurcate=[u,l]):c!==l&&(h.bifurcate=[e,c]),h.end=[e,c],u=e,l=c})),h.hasOwnProperty("start")){if(h.hasOwnProperty("end")){if(h.hasOwnProperty("bifurcate")){var b=Object(a.a)(h.start,2),O=b[0],m=b[1],x=(h.bifurcate[0],Object(a.a)(h.end,2)),g=x[0],p=x[1];return"main"===e?"l"===c?p>m?"M ".concat(O-f,",").concat(m," H ").concat(g," V ").concat(p):"M ".concat(O,",").concat(m," V ").concat(p," H ").concat(g):p>m?"M ".concat(O,",").concat(m," H ").concat(g," V ").concat(p):"M ".concat(O,",").concat(m," V ").concat(p," H ").concat(g+f):p>m?"M ".concat(O-f,",").concat(m," H ").concat(g," V ").concat(p):"M ".concat(O,",").concat(m," V ").concat(p," H ").concat(g+f)}var v=Object(a.a)(h.start,2),_=v[0],y=v[1],k=h.end[0];return"main"===e?"l"===c?"M ".concat(_-f-d,",").concat(y," H ").concat(k):"M ".concat(_,",").concat(y," H ").concat(k+f+d):"l"===c?"M ".concat(_-f,",").concat(y," H ").concat(k+f+j):"M ".concat(_-f-j,",").concat(y," H ").concat(k+f)}var S=Object(a.a)(h.start,2),w=S[0],M=S[1];return"main"===e?"l"===c?"M ".concat(w-f-d,",").concat(M," H ").concat(w):"M ".concat(w,",").concat(M," H ").concat(w+f+d):"l"===c?"M ".concat(w,",").concat(M," L ").concat(w+f+j,",").concat(M):"M ".concat(w-f-j,",").concat(M," L ").concat(w,",").concat(M)}return""},M=function(t){var e=Object(r.useContext)(o.a).param;return Object(f.jsx)("g",{children:Object.keys(e.stn_list).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(e){return Object(f.jsx)("g",{transform:"translate(".concat(t.xs[e],",").concat(t.ys[e],")"),children:Object(f.jsx)(b,{stnId:e,stnState:t.stnStates[e]})},e)}))})},L=function(t){var e=Object(r.useContext)(o.a).param;if(1===t.servicesLevel.length)return Object(f.jsx)(f.Fragment,{});var n=t.servicesLevel.map((function(t){return{local:"\u666e\u901a\u8f66",express:"\u5927\u7ad9\u8f66",direct:"\u76f4\u8fbe\u8f66"}[t]})),c="r"===t.direction?t.lineXs[0]-42:t.lineXs[1]+42,a=2===t.servicesLevel.length?350:500;return Object(f.jsxs)("g",{children:[n.map((function(t,e){return Object(f.jsxs)("g",{transform:"translate(".concat(c,",").concat(25*e,")"),children:[Object(f.jsx)("rect",{x:-27.5,height:10,width:55,fill:"white",stroke:"black",y:-5}),Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:9,y:3,textAnchor:"middle",children:"".concat(t,"\u8fd0\u884c\u7ebf")})]},t)})),Object(f.jsxs)("g",{transform:"translate(".concat("r"===t.direction?30:e.svgWidth.railmap-a,",").concat(t.dy,")"),children:[Object(f.jsx)("text",{className:"rmg-name__zh",children:"\u56fe\u4f8b\uff1a"}),n.map((function(t,e){return Object(f.jsxs)("g",{transform:"translate(".concat(150*e+50,",0)"),children:[Object(f.jsx)("line",{x1:"0",x2:"35",y1:"-5",y2:"-5",stroke:"var(--rmg-theme-colour)",strokeWidth:"12",filter:2===e?"url(#contrast-direct)":1===e?"url(#contrast-express)":""}),Object(f.jsx)("use",{x:"17.5",y:"-5",xlinkHref:"#stn_sh",fill:"var(--rmg-theme-colour)"}),Object(f.jsx)("text",{x:"40",className:"rmg-name__zh",children:"".concat(t,"\u505c\u9760\u7ad9")})]},"serviceLevel".concat(e))}))]})]})},H=function(){var t=Object(r.useContext)(o.a).param;return c.a.useMemo((function(){return Object(f.jsxs)("g",{transform:"translate(".concat("l"===t.direction?50:t.svgWidth.railmap-150,",").concat(100-t.svg_height,")"),children:[Object(f.jsx)("text",{className:"rmg-name__zh",children:"\u5217\u8f66\u524d\u8fdb\u65b9\u5411"}),Object(f.jsx)("path",{d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-theme-colour)",transform:"translate(".concat("l"===t.direction?-30:125,",-5)rotate(").concat("l"===t.direction?0:180,")scale(0.15)")})]})}),[t.direction,t.svgWidth.railmap])},W=r.memo((function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(F,{}),Object(f.jsx)(k,{})]})})),F=(e.default=W,r.memo((function(){return Object(f.jsxs)("defs",{children:[Object(f.jsx)("circle",{id:"stn_sh",fill:"#fff",strokeWidth:2,r:5}),Object(f.jsx)("path",{id:"int2_sh",fill:"#fff",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V10 a 5,5 0 1 1 -10,0Z"}),Object(f.jsx)("path",{id:"express_sh",fill:"#fff",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V25 a 5,5 0 1 1 -10,0Z"}),Object(f.jsx)("path",{id:"direct_sh",fill:"#fff",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V50 a 5,5 0 1 1 -10,0Z"}),Object(f.jsx)("rect",{id:"stn_sh_2020",stroke:"none",height:24,width:10,y:-18}),Object(f.jsx)("rect",{id:"stn_sh_2020_express",stroke:"none",height:49,width:10,y:-18}),Object(f.jsx)("rect",{id:"stn_sh_2020_direct",stroke:"none",height:74,width:10,y:-18}),Object(f.jsx)("rect",{id:"intbox_number",height:22,width:20,y:-11}),Object(f.jsxs)("g",{id:"intbox_maglev",transform:"translate(-25,0)",children:[Object(f.jsx)("rect",{id:"maglev_5",height:144,width:130,y:"40",x:"30",strokeWidth:10}),Object(f.jsx)("path",{id:"maglev_3",fill:"white",d:"m90,55a40,5 0 0 0 -40,3a5,5 0 0 0 -5,5a5,60 0 0 0 -3,60a5,5 0 0 0 5,5l96,0a5,5 0 0 0 5,-5a5,60 0 0 0 -3,-60a5,5 0 0 0 -5,-5a40,5 0 0 0 -40,-3l-5,-10l-5,10"}),Object(f.jsx)("path",{id:"maglev_4",fill:"white",d:"m90,140l-40,0a10,5 0 0 1 -10,-5l0,25a10,15 0 0 0 10,15l15,0l0,-10l-15,0l0,-15l90,0l0,15l-15,0l0,10l15,0a10,15 0 0 0 10,-15l0,-25a10,5 0 0 1 -10,5l-50,0"}),Object(f.jsx)("rect",{id:"maglev_1",height:"25",width:"40",y:"80",x:"50"}),Object(f.jsx)("rect",{id:"maglev_2",height:"25",width:"40",y:"80",x:"100"})]}),Object(f.jsx)("marker",{id:"arrow_gray",viewBox:"-1.5 0 3 1.5",refY:.5,children:Object(f.jsx)("path",{d:"M0,0L1,1H-1z",fill:"gray"})}),Object(f.jsx)("marker",{id:"arrow_theme_left",refX:1,refY:.5,children:Object(f.jsx)("path",{d:"M1,0L0,1H1z",fill:"var(--rmg-theme-colour)"})}),Object(f.jsx)("marker",{id:"arrow_theme_right",refY:.5,children:Object(f.jsx)("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-theme-colour)"})}),Object(f.jsx)("filter",{id:"contrast-direct",filterUnits:"userSpaceOnUse",children:Object(f.jsxs)("feComponentTransfer",{children:[Object(f.jsx)("feFuncR",{type:"linear",slope:.5,intercept:.25}),Object(f.jsx)("feFuncG",{type:"linear",slope:.5,intercept:.25}),Object(f.jsx)("feFuncB",{type:"linear",slope:.5,intercept:.25})]})}),Object(f.jsx)("filter",{id:"contrast-express",filterUnits:"userSpaceOnUse",children:Object(f.jsxs)("feComponentTransfer",{children:[Object(f.jsx)("feFuncR",{type:"linear",slope:.75,intercept:.125}),Object(f.jsx)("feFuncG",{type:"linear",slope:.75,intercept:.125}),Object(f.jsx)("feFuncB",{type:"linear",slope:.75,intercept:.125})]})})]})})))},36:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}n.d(e,"a",(function(){return r}))},37:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return h})),n.d(e,"f",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"a",(function(){return j})),n.d(e,"d",(function(){return b}));var r=n(10),c=n(17),a=n(19),i=n(13),s=n(24),o=n(3),l=n(0),u=(n(18),function(t,e,n){return Object.keys(t).reduce((function(r,c){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},c,t[c].children.reduce((function(r,a){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},a,1+e(t,a)+n(t,c)))}),{})))}),{})}),h=function t(e,n,r){if(e===n)return{len:0,nodes:[e]};var c=[],a=[];Object.keys(r[e]).forEach((function(i){var s=t(i,n,r);s.len<0||(c.push(r[e][i]+s.len),s.nodes.unshift(e),a.push(s.nodes))}));var i=Math.max.apply(Math,c);return{len:i,nodes:a[c.indexOf(i)]}},f=function(t,e,n){var r=h("linestart","lineend",e);if(r.nodes.includes(t))return h(r.nodes[1],t,e).len;for(var c=n.filter((function(e){return e.includes(t)}))[0],a=t;!r.nodes.includes(a);)a=c[c.indexOf(a)-1];for(var i=t;!r.nodes.includes(i);)i=c[c.indexOf(i)+1];var s="linestart"===a,o=[];return s||"lineend"===i?s?(o[0]=0,o[1]=h(r.nodes[1],i,e).len,o[2]=h(c[1],t,e).len,o[3]=h(t,i,e).len):(o[0]=h(r.nodes[1],a,e).len,o[1]=h(a,r.nodes.slice(-2)[0],e).len,o[2]=h(a,t,e).len,o[3]=h(t,c.slice(-2)[0],e).len):(o[0]=h(r.nodes[1],a,e).len,o[1]=h(a,i,e).len,o[2]=h(a,t,e).len,o[3]=h(t,i,e).len),o[0]+o[2]*o[1]/(o[2]+o[3])},d=function(t,e,n){var r;return console.log("computing stations' states"),Object(i.a)(new Set((r=[]).concat.apply(r,Object(i.a)(e)))).reduce((function(r,c){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},c,c===t?0:("r"===n?function(t,e,n){var r,c=Object(s.a)(n);try{for(c.s();!(r=c.n()).done;){var a=r.value,i=a.indexOf(t),o=a.indexOf(e);if(-1!==i&&i<o)return!0}}catch(l){c.e(l)}finally{c.f()}return!1}(t,c,e):function(t,e,n){var r,c=Object(s.a)(n);try{for(c.s();!(r=c.n()).done;){var a=r.value,i=a.indexOf(t),o=a.indexOf(e);if(-1!==o&&o<i)return!0}}catch(l){c.e(l)}finally{c.f()}return!1}(t,c,e))?1:-1))}),{})},j=function(){function t(e){var n=this;Object(c.a)(this,t),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(t){return 0},this.rightWideFactor=function(t){return 0},this.pathWeight=function(t,e){return n.stnList[t].children.includes(e)?1+n.rightWideFactor(t)+n.leftWideFactor(e):-1/0},this.pathTurnParams=function(t){var e=35-17.5*Math.sqrt(3),n=t-2*e;return{tr:35,dx_a:17.5,dy_a:e,dx_l:n*Math.sqrt(3),dy_l:n}},this.pathTurnSE=function(t){var e=n.pathTurnParams(t),r=e.tr,c=e.dx_a,a=e.dy_a,i=e.dx_l,s=e.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(a," l ").concat(i,",").concat(s," a ").concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(a)},this.pathTurnNE=function(t){var e=n.pathTurnParams(t),r=e.tr,c=e.dx_a,a=e.dy_a,i=e.dx_l,s=e.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(-a," l ").concat(i,",").concat(-s," a ").concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(-a)},this.stnList=e.stnList,this.criticalPath=e.criticalPath}return Object(a.a)(t,[{key:"getYShare",value:function(t,e){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;var n=this.stnList[t].parents[0];if(n){if(1===this.stnList[n].children.length){var r=this.getYShare(n);return this.yShares[t]=r,r}var c=0===this.stnList[n].children.indexOf(t)?1:-1;return this.yShares[t]=c,c}return this.yShares[t]=0,0}},{key:"_linePath",value:function(t,e,n,c,a,i,s){var o=this,l=Object(r.a)([],3),u=l[0],h=l[1],f=l[2],d=[],j=this.pathTurnParams(i),b=j.dx_a+j.dx_l/2,O=(e[1]-e[0])/s.len*.8,m=((e[1]-e[0])/s.len-2*b)/2;return m+O<0&&console.warn("SVG width too small! ".concat(m+O)),t.forEach((function(e){var r=c[e],s=a[e];if(!h&&0!==h)return u=e,f=r,h=s,void(1===t.length?d.push("M ".concat(r,",").concat(s)):n[0].includes(e)?n[0].includes(t[1])?d.push("M ".concat(r,",").concat(s)):(c[t[1]]>0&&d.push("M ".concat(r,",").concat(s+9.68)),a[t[1]]<0&&d.push("M ".concat(r,",").concat(s-9.68))):d.push("M ".concat(r,",").concat(s)));s>h?(d.push("h ".concat(0===s?r-f-O*o.leftWideFactor(e)-m-2*b:O*o.rightWideFactor(u)+m)),d.push(o.pathTurnSE(i))):s<h&&(d.push("h ".concat(0===s?r-f-O*o.leftWideFactor(e)-m-2*b:O*o.rightWideFactor(u)+m)),d.push(o.pathTurnNE(i))),d.push("H ".concat(r)),u=e,f=r,h=s})),d.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(t,e){console.log("computing y shares");var n=new this({stnList:t});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in n.yShares||n.getYShare(t,e)})),n.yShares}},{key:"drawLine",value:function(t,e,n,r,c,a,i,s){var o=this,l={main:[],pass:[]};return t.forEach((function(u,h){var f=(u=u.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),d=u.filter((function(t){return e[t]<=0}));1===f.length&&(d=u),0===f.filter((function(t){return-1!==d.indexOf(t)})).length&&f.length&&(d[0]===u[0]?d.push(f[0]):f[0]===u[0]&&f[f.length-1]===u[u.length-1]&&d.length?(d=u,f=[]):d.unshift(f[f.length-1])),l.main.push(new o({stnList:n,criticalPath:s})._linePath(f,r,t,c,a,i,s)),l.pass.push(new o({stnList:n,criticalPath:s})._linePath(d,r,t,c,a,i,s))})),l}}]),t}(),b=function(t,e){var n={main:[],pass:[]};return t.forEach((function(t){var r=(t=t.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),c=t.filter((function(t){return e[t]<=0}));1===r.length&&(c=t),0===r.filter((function(t){return-1!==c.indexOf(t)})).length&&r.length&&(c[0]===t[0]?c.push(r[0]):r[0]===t[0]&&r[r.length-1]===t[t.length-1]&&c.length?(c=t,r=[]):c.unshift(r[r.length-1])),n.main.push(r),n.pass.push(c)})),n}}}]);
//# sourceMappingURL=railmapSHMetro.52b07c07.chunk.js.map