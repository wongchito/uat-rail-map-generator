(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[117],{179:function(t,e,n){"use strict";function c(t,e){if(null==t)return{};var n,c,r=function(t,e){if(null==t)return{};var n,c,r={},a=Object.keys(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,"a",(function(){return c}))},180:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var c=function t(e,n){if(["linestart","lineend"].includes(e)||n[e].parents.length>1||n[e].children.length>1)return 0;var c=n[e].parents[0];return c?1===n[c].children.length?t(c,n):0===n[c].children.indexOf(e)?1:-1:0}},182:function(t,e,n){"use strict";n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return h})),n.d(e,"f",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"a",(function(){return O})),n.d(e,"d",(function(){return b}));var c=n(30),r=n(59),a=n(60),i=n(41),s=n(83),o=n(9),l=n(3),u=(n(180),n(6)),j=function(t,e,n){return Object.keys(t).reduce((function(c,r){return Object(l.a)(Object(l.a)({},c),{},Object(o.a)({},r,t[r].children.reduce((function(c,a){return Object(l.a)(Object(l.a)({},c),{},Object(o.a)({},a,1+e(t,a)+n(t,r)))}),{})))}),{})},h=function t(e,n,c){if(e===n)return{len:0,nodes:[e]};var r=[],a=[];Object.keys(c[e]).forEach((function(i){var s=t(i,n,c);s.len<0||(r.push(c[e][i]+s.len),s.nodes.unshift(e),a.push(s.nodes))}));var i=Math.max.apply(Math,r);return{len:i,nodes:a[r.indexOf(i)]}},f=function(t,e,n){var c=h("linestart","lineend",e);if(c.nodes.includes(t))return h(c.nodes[1],t,e).len;for(var r=n.filter((function(e){return e.includes(t)}))[0],a=t;!c.nodes.includes(a);)a=r[r.indexOf(a)-1];for(var i=t;!c.nodes.includes(i);)i=r[r.indexOf(i)+1];var s="linestart"===a,o=[];return s||"lineend"===i?s?(o[0]=0,o[1]=h(c.nodes[1],i,e).len,o[2]=h(r[1],t,e).len,o[3]=h(t,i,e).len):(o[0]=h(c.nodes[1],a,e).len,o[1]=h(a,c.nodes.slice(-2)[0],e).len,o[2]=h(a,t,e).len,o[3]=h(t,r.slice(-2)[0],e).len):(o[0]=h(c.nodes[1],a,e).len,o[1]=h(a,i,e).len,o[2]=h(a,t,e).len,o[3]=h(t,i,e).len),o[0]+o[2]*o[1]/(o[2]+o[3])},d=function(t,e,n){var c;return console.log("computing stations' states"),Object(i.a)(new Set((c=[]).concat.apply(c,Object(i.a)(e)))).reduce((function(c,r){return Object(l.a)(Object(l.a)({},c),{},Object(o.a)({},r,r===t?0:(n===u.m.right?function(t,e,n){var c,r=Object(s.a)(n);try{for(r.s();!(c=r.n()).done;){var a=c.value,i=a.indexOf(t),o=a.indexOf(e);if(-1!==i&&i<o)return!0}}catch(l){r.e(l)}finally{r.f()}return!1}(t,r,e):function(t,e,n){var c,r=Object(s.a)(n);try{for(r.s();!(c=r.n()).done;){var a=c.value,i=a.indexOf(t),o=a.indexOf(e);if(-1!==o&&o<i)return!0}}catch(l){r.e(l)}finally{r.f()}return!1}(t,r,e))?1:-1))}),{})},O=function(){function t(e){var n=this;Object(r.a)(this,t),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(t){return 0},this.rightWideFactor=function(t){return 0},this.pathWeight=function(t,e){return n.stnList[t].children.includes(e)?1+n.rightWideFactor(t)+n.leftWideFactor(e):-1/0},this.pathTurnParams=function(t){var e=35-17.5*Math.sqrt(3),n=t-2*e;return{tr:35,dx_a:17.5,dy_a:e,dx_l:n*Math.sqrt(3),dy_l:n}},this.pathTurnSE=function(t){var e=n.pathTurnParams(t),c=e.tr,r=e.dx_a,a=e.dy_a,i=e.dx_l,s=e.dy_l;return"a ".concat(c,",").concat(c," 0 0,1 ").concat(r,",").concat(a," l ").concat(i,",").concat(s," a ").concat(c,",").concat(c," 0 0,0 ").concat(r,",").concat(a)},this.pathTurnNE=function(t){var e=n.pathTurnParams(t),c=e.tr,r=e.dx_a,a=e.dy_a,i=e.dx_l,s=e.dy_l;return"a ".concat(c,",").concat(c," 0 0,0 ").concat(r,",").concat(-a," l ").concat(i,",").concat(-s," a ").concat(c,",").concat(c," 0 0,1 ").concat(r,",").concat(-a)},this.stnList=e.stnList,this.criticalPath=e.criticalPath}return Object(a.a)(t,[{key:"getYShare",value:function(t,e){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;var n=this.stnList[t].parents[0];if(n){if(1===this.stnList[n].children.length){var c=this.getYShare(n);return this.yShares[t]=c,c}var r=0===this.stnList[n].children.indexOf(t)?1:-1;return this.yShares[t]=r,r}return this.yShares[t]=0,0}},{key:"_linePath",value:function(t,e,n,r,a,i,s,o){var l=this,u=Object(c.a)([],3),j=u[0],h=u[1],f=u[2],d=[],O=this.pathTurnParams(i),b=O.dx_a+O.dx_l/2,m=(e[1]-e[0])/s.len*2,g=((e[1]-e[0])/s.len-2*b)/2;return g+m<0&&console.warn("SVG width too small! ".concat(g+m)),t.forEach((function(e){var c=r[e],s=a[e];if(!h&&0!==h)return j=e,f=c,h=s,void(1===t.length?d.push("M ".concat(c,",").concat(s)):n[0].includes(e)?n[0].includes(t[1])?d.push("M ".concat(c,",").concat(s)):(r[t[1]]>0&&d.push("M ".concat(c,",").concat(s+o)),a[t[1]]<0&&d.push("M ".concat(c,",").concat(s-o))):d.push("M ".concat(c,",").concat(s)));s>h?(d.push("h ".concat(0===s?c-f-m*l.leftWideFactor(e)-g-2*b:m*l.rightWideFactor(j)+g)),d.push(l.pathTurnSE(i))):s<h&&(d.push("h ".concat(0===s?c-f-m*l.leftWideFactor(e)-g-2*b:m*l.rightWideFactor(j)+g)),d.push(l.pathTurnNE(i))),d.push("H ".concat(c)),j=e,f=c,h=s})),d.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(t,e){console.log("computing y shares");var n=new this({stnList:t});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in n.yShares||n.getYShare(t,e)})),n.yShares}},{key:"drawLine",value:function(t,e,n,c,r,a,i,s){var o=this,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:9.68,u={main:[],pass:[]};return t.forEach((function(j,h){var f=(j=j.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),d=j.filter((function(t){return e[t]<=0}));1===f.length&&(d=j),0===f.filter((function(t){return-1!==d.indexOf(t)})).length&&f.length&&(d[0]===j[0]?d.push(f[0]):f[0]===j[0]&&f[f.length-1]===j[j.length-1]&&d.length?(d=j,f=[]):d.unshift(f[f.length-1])),u.main.push(new o({stnList:n,criticalPath:s})._linePath(f,c,t,r,a,i,s,l)),u.pass.push(new o({stnList:n,criticalPath:s})._linePath(d,c,t,r,a,i,s,l))})),u}}]),t}(),b=function(t,e){var n={main:[],pass:[]};return t.forEach((function(t){var c=(t=t.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),r=t.filter((function(t){return e[t]<=0}));1===c.length&&(r=t),0===c.filter((function(t){return-1!==r.indexOf(t)})).length&&c.length&&(r[0]===t[0]?r.push(c[0]):c[0]===t[0]&&c[c.length-1]===t[t.length-1]&&r.length?(r=t,c=[]):r.unshift(c[c.length-1])),n.main.push(c),n.pass.push(r)})),n}},236:function(t,e,n){"use strict";var c=n(3),r=n(9),a=n(0),i=n.n(a),s=n(6),o=n(2);e.a=function(t){var e=function(t){switch(t){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}}(t.variant),n=i.a.useMemo((function(){switch(t.variant){case"gz1":return Object(o.jsx)("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return Object(o.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return Object(o.jsx)("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return Object(o.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return Object(o.jsx)("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return Object(o.jsx)("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return Object(o.jsx)("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return Object(o.jsx)("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return Object(o.jsx)(o.Fragment,{})}}),[t.variant]);return Object(o.jsxs)("g",{transform:"translate(0,".concat("gz4"===t.variant?-20:0,")"),children:[Object(o.jsx)("rect",{id:"strip_gz",style:Object(r.a)({},"--height","".concat(e,"px"))}),Object(o.jsx)("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:t.isShowLight&&n}),!1!==t.isShowPSD&&Object(o.jsx)(l,Object(c.a)({},t))]})};var l=i.a.memo((function(t){var e,n=["gz28","gz2otis","gz6","gzgf"].includes(t.variant),c=function(t){switch(t){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}}(t.variant);return Object(o.jsxs)("g",{textAnchor:"middle",fill:n?s.h.black:"var(--rmg-theme-fg)",style:(e={},Object(r.a)(e,"--psd-dy",c),Object(r.a)(e,"transform","translate(var(--translate-x), var(--translate-y))"),Object(r.a)(e,"--translate-x","calc(var(--rmg-svg-width) / 2 + 80px)"),Object(r.a)(e,"--translate-y","calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"),e),children:[Object(o.jsx)("rect",{height:40,width:40,rx:4,x:-20,fill:n?"#fff":"var(--rmg-theme-colour)"}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:20,dy:12,children:t.isShowPSD}),Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"\u5c4f\u853d\u95e8"}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]})}),(function(t,e){return t.variant===e.variant&&t.isShowPSD===e.isShowPSD}))},237:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var c=n(3),r=n(30),a=n(179),i=n(0),s=n(2),o=["lineNum","stnNum"];function l(t){var e=t.lineNum,n=t.stnNum,l=Object(a.a)(t,o),u=Object(i.useRef)(null),j=Object(i.useRef)(null),h=Object(i.useState)({width:0}),f=Object(r.a)(h,2),d=f[0],O=f[1],b=Object(i.useState)({width:0}),m=Object(r.a)(b,2),g=m[0],x=m[1];Object(i.useEffect)((function(){O(u.current.getBBox()),x(j.current.getBBox())}),[e,n]);var p=15/Math.max(15,d.width),v=2===e.length&&2===n.length?p:15/Math.max(15,g.width);return Object(s.jsxs)("g",Object(c.a)(Object(c.a)({textAnchor:"middle",fontSize:13.5},l),{},{children:[Object(s.jsx)("g",{transform:"translate(-9.25,0)scale(".concat(p,")"),children:Object(s.jsx)("text",{ref:u,className:"rmg-name__zh",children:e})}),Object(s.jsx)("g",{transform:"translate(9.25,0)scale(".concat(v,")"),children:Object(s.jsx)("text",{ref:j,className:"rmg-name__zh",children:n})})]}))}},338:function(t,e,n){"use strict";n.r(e);var c=n(30),r=n(179),a=n(3),i=n(9),s=n(41),o=n(0),l=n.n(o),u=n(236),j=n(237),h=n(6),f=n(2),d=Object(o.memo)((function(t){return Object(f.jsxs)("g",{textAnchor:"middle",fill:-1===t.stnState?h.h.white:t.info[3],children:[Object(f.jsx)("use",{xlinkHref:"#intbox",fill:-1===t.stnState?"#aaa":t.info[2]}),t.info[4][0]===t.info[5][0]?Object(f.jsx)(b,{name:t.info.slice(-2)}):Object(f.jsx)(O,{name:t.info.slice(-2)})]})}),(function(t,e){return t.info.toString()===e.info.toString()&&t.stnState===e.stnState})),O=Object(o.memo)((function(t){var e,n=[],r=0;null===(e=t.name[0].match(/\d+|\D+/g))||void 0===e||e.forEach((function(t,e){isNaN(Number(t))?(n.push(Object(f.jsx)("tspan",{dominantBaseline:"hanging",dy:1-r,children:t},e)),r+=1-r):(n.push(Object(f.jsx)("tspan",{dominantBaseline:"hanging",fontSize:16,dy:-r,children:t},e)),r=0)}));var a=Object(o.useRef)(null),i=Object(o.useState)({width:0}),s=Object(c.a)(i,2),l=s[0],u=s[1];Object(o.useEffect)((function(){return u(a.current.getBBox())}),[t.name[0]]);var j=l.width>43.5?43.5/l.width:1,h=Object(o.useRef)(null),d=Object(o.useState)({width:0}),O=Object(c.a)(d,2),b=O[0],m=O[1];Object(o.useEffect)((function(){return m(h.current.getBBox())}),[t.name[1]]);var g=b.width>43.5?43.5/b.width:1;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("text",{ref:a,y:navigator.userAgent.includes("Firefox")?-.5:2,className:"rmg-name__zh",fontSize:12,transform:"scale(".concat(j,",1)"),children:n}),Object(f.jsx)("text",{ref:h,y:19.5,fontSize:t.name[1].replace("\\"," ").length>10?7:8,className:"rmg-name__en",transform:"scale(".concat(g,",1)"),children:t.name[1]})]})}),(function(t,e){return t.name.toString()===e.name.toString()})),b=Object(o.memo)((function(t){var e="";for(var n in Object(s.a)(t.name[0])){if(t.name[0][n]!==t.name[1][n])break;e+=t.name[0][n]}var r=Object(o.useRef)(null),a=Object(o.useState)({x:0,width:0}),i=Object(c.a)(a,2),l=i[0],u=i[1];Object(o.useEffect)((function(){return u(r.current.getBBox())}),[t.name.toString()]);var j=l.width>43.5?43.5/l.width:1;return Object(f.jsx)("g",{transform:"scale(".concat(j,",1)"),children:Object(f.jsx)("g",{transform:"translate(".concat(-l.x-l.width/2,",0)"),children:Object(f.jsxs)("text",{ref:r,className:"rmg-name__zh",fontSize:14,y:12,textAnchor:"end",children:[e,Object(f.jsx)("tspan",{className:"rmg-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:t.name[0].slice(e.length)}),Object(f.jsx)("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:t.name[1].slice(e.length).trim()})]})})})}),(function(t,e){return t.name.toString()===e.name.toString()})),m=n(21),g=["intInfos","stnState","tickRotation"],x=["intInfos","tickRotation","stnState"],p=function(t){var e=t.stnId,n=t.stnState,c=t.stnY,r=Object(m.c)((function(t){return t.param.theme})),a=Object(m.c)((function(t){return t.param.line_name})),i=Object(m.c)((function(t){return t.param.line_num})),o=Object(m.c)((function(t){return t.param.stn_list[e]})),l=2===o.parents.length||2===o.children.length,u=c>0||1===o.parents.indexOf(o.branch.left[1]||"")||1===o.children.indexOf(o.branch.right[1]||"")?180:0,d=o.name[1].split("\\").length,O=l?180===u?16+12*(d-1)*Math.cos(-45):-9:180===u?-6:(25+15*(d-1))*Math.cos(-45);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(z,{intInfos:l?[[r[0],r[1],"var(--rmg-theme-colour)","var(--rmg-theme-fg)"].concat(Object(s.a)(a))].concat(o.transfer.info[0]):o.transfer.info[0],stnState:n,tickRotation:u}),Object(f.jsxs)("g",{children:[Object(f.jsx)("use",{xlinkHref:"#stn",stroke:-1===n?"#aaa":"var(--rmg-theme-colour)"}),Object(f.jsx)(j.a,{className:"Name ".concat(-1===n?"Pass":"Future"),lineNum:i,stnNum:o.num})]}),Object(f.jsx)("g",{transform:"translate(".concat(-O,",0)"),children:Object(f.jsx)(v,{name:o.name,secondaryName:o.secondaryName,stnState:n,tickRotation:u,isExpress:o.services.includes(h.l.express)})})]})},v=function(t){var e=180===t.tickRotation?17.5:-20-14*t.name[1].split("\\").length*Math.cos(-45),n=Object(o.useRef)(null),r=Object(o.useState)({width:0}),a=Object(c.a)(r,2),i=a[0],s=a[1];Object(o.useEffect)((function(){return s(n.current.getBBox())}),[t.name.toString()]);var l=Object(o.useRef)(null),u=Object(o.useState)({x:0,width:-20}),j=Object(c.a)(u,2),h=j[0],d=j[1];return Object(o.useEffect)((function(){l.current?d(l.current.getBBox()):d((function(t){return{x:t.x,width:-20}}))}),[t.secondaryName.toString()]),Object(f.jsxs)("g",{textAnchor:180===t.tickRotation?"end":"start",className:"Name ".concat(-1===t.stnState?"Pass":0===t.stnState?"CurrentGZ":"Future"),transform:"translate(0,".concat(e,")rotate(-45)"),children:[Object(f.jsx)(S,{ref:n,name:t.name}),t.secondaryName&&Object(f.jsxs)("g",{transform:"translate(".concat((i.width+h.width/2+10)*(180===t.tickRotation?-1:1),",").concat(2+5*(t.name[1].split("\\").length-1),")"),className:"Name ".concat(-1===t.stnState?"Pass":"Future"),children:[Object(f.jsxs)("g",{transform:"translate(0,3)",fontSize:18,children:[Object(f.jsx)("text",{textAnchor:"end",x:h.x-3,className:"rmg-name__zh",children:"("}),Object(f.jsx)("text",{textAnchor:"start",x:h.width+h.x+3,className:"rmg-name__zh",children:")"})]}),Object(f.jsx)(y,{ref:l,secName:t.secondaryName})]}),t.isExpress&&Object(f.jsx)(_,{fill:-1===t.stnState?"#aaa":"var(--rmg-theme-colour)",transform:"translate(".concat((i.width+h.width+20+35)*(180===t.tickRotation?-1:1),",").concat(2+5*(t.name[1].split("\\").length-1),")")})]})},S=Object(o.forwardRef)((function(t,e){return Object(o.useMemo)((function(){return Object(f.jsxs)("g",{ref:e,children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:18,children:t.name[0]}),Object(f.jsx)("g",{fontSize:10.5,children:t.name[1].split("\\").map((function(t,e){return Object(f.jsx)("text",{className:"rmg-name__en",dy:16+11*e,children:t},e)}))})]})}),[t.name[0],t.name[1]])})),y=Object(o.forwardRef)((function(t,e){return Object(o.useMemo)((function(){return Object(f.jsxs)("g",{ref:e,textAnchor:"middle",children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:13,children:t.secName[0]}),Object(f.jsx)("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:t.secName[1]})]})}),[t.secName.toString()])})),_=l.a.memo((function(t){return Object(f.jsxs)("g",Object(a.a)(Object(a.a)({textAnchor:"middle"},t),{},{children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:13,children:"\u5feb\u8f66\u505c\u9760\u7ad9"}),Object(f.jsx)("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:"Express Station"})]}))})),z=function(t){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,Object(a.a)({strokeWidth:4},t)),Object(f.jsx)(N,Object(a.a)({transform:"translate(0,".concat(180===t.tickRotation?-47:23,")")},t))]})},w=function(t){var e=t.intInfos,n=t.stnState,c=t.tickRotation,i=Object(r.a)(t,g);return Object(f.jsx)("g",Object(a.a)(Object(a.a)({},i),{},{children:e.map((function(t,r){return Object(f.jsx)("use",{xlinkHref:"#inttick",stroke:-1===n?"#aaa":t[2],transform:"translate(".concat(-2*(e.length-1)+4*r,",0)rotate(").concat(180===c?180:0,")")},r)}))}))},N=function(t){var e=t.intInfos,n=t.tickRotation,c=t.stnState,i=Object(r.a)(t,x);return Object(f.jsx)("g",Object(a.a)(Object(a.a)({},i),{},{children:e.map((function(t,e){return Object(f.jsx)("g",{transform:"translate(0,".concat(28*e*(180===n?-1:1),")"),children:Object(f.jsx)(d,{info:t,stnState:c})},e)}))}))},k=n(182),M=function(t,e){return 2===t[e].parents.length||2===t[e].children.length?.25:0},R=function(){var t,e=Object(m.c)((function(t){return t.helper})),n=e.branches,c=e.routes,r=e.depsStr,s=Object(m.c)((function(t){return t.param.svgWidth})),l=Object(m.c)((function(t){return t.param.y_pc})),u=Object(m.c)((function(t){return t.param.padding})),j=Object(m.c)((function(t){return t.param.branch_spacing})),O=Object(m.c)((function(t){return t.param.direction})),b=Object(m.c)((function(t){return t.param.line_name})),g=Object(m.c)((function(t){return t.param.current_stn_idx})),x=Object(m.c)((function(t){return t.param.stn_list})),p=Object(k.b)(x,M,M),v=Object(o.useMemo)((function(){return console.log("computing x shares"),Object.keys(x).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(i.a)({},e,function(t,e,n){var c=Object(k.c)("linestart","lineend",e);if(c.nodes.includes(t))return Object(k.c)(c.nodes[1],t,e).len;for(var r=n.filter((function(e){return e.includes(t)}))[0],a=t;!c.nodes.includes(a);)a=r[r.indexOf(a)-1];for(var i=t;!c.nodes.includes(i);)i=r[r.indexOf(i)+1];var s="linestart"===a,o="lineend"===i;if(r.toString()===n[0].toString()){var l=[];return s||o?s?(l[0]=0,l[1]=Object(k.c)(c.nodes[1],i,e).len,l[2]=Object(k.c)(r[1],t,e).len,l[3]=Object(k.c)(t,i,e).len):(l[0]=Object(k.c)(c.nodes[1],a,e).len,l[1]=Object(k.c)(a,c.nodes.slice(-2)[0],e).len,l[2]=Object(k.c)(a,t,e).len,l[3]=Object(k.c)(t,r.slice(-2)[0],e).len):(l[0]=Object(k.c)(c.nodes[1],a,e).len,l[1]=Object(k.c)(a,i,e).len,l[2]=Object(k.c)(a,t,e).len,l[3]=Object(k.c)(t,i,e).len),l[0]+l[2]*l[1]/(l[2]+l[3])}if(s||o)return s?Object(k.c)(c.nodes[1],i,e).len-Object(k.c)(t,i,e).len:Object(k.c)(c.nodes[1],a,e).len+Object(k.c)(a,t,e).len;var u=[];return u[0]=Object(k.c)(c.nodes[1],a,e).len,u[1]=Object(k.c)(a,i,e).len,u[2]=Object(k.c)(a,t,e).len,u[3]=Object(k.c)(t,i,e).len,u[0]+u[2]*u[1]/(u[2]+u[3])}(e,p,n)))}),{})}),[n.toString(),JSON.stringify(p)]),S=Object(k.c)("linestart","lineend",p),y=Object(k.c)(S.nodes[1],S.nodes.slice(-2)[0],p),_=O===h.m.right?[s[h.c.RailMap]*u/100+65,s[h.c.RailMap]*(1-u/100)-20]:[s[h.c.RailMap]*u/100,s[h.c.RailMap]*(1-u/100)-65],z=Object.keys(v).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(i.a)({},e,_[0]+v[e]/y.len*(_[1]-_[0])))}),{}),w=Object(o.useMemo)((function(){return console.log("computing y shares"),Object.keys(x).reduce((function(t,e){if(n[0].includes(e))return Object(a.a)(Object(a.a)({},t),{},Object(i.a)({},e,0));var c=n.slice(1).filter((function(t){return t.includes(e)}))[0];return Object(a.a)(Object(a.a)({},t),{},Object(i.a)({},e,x[c[0]].children.indexOf(c[1])?-2:2))}),{})}),[r]),N=Object.keys(w).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(i.a)({},e,-w[e]*j))}),{}),R=Object(o.useMemo)((function(){return Object(k.e)(g,c,O)}),[g,O,c.toString()]),L=Object(k.d)(n,R),F=Object.keys(L).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(i.a)({},e,L[e].map((function(t){return E(t,z,N)}))))}),{});return Object(f.jsxs)("g",{id:"main",style:(t={},Object(i.a)(t,"--y-percentage",l),Object(i.a)(t,"transform","translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"),t),children:[Object(f.jsx)(P,{paths:F}),Object(f.jsx)(H,{xs:z,ys:N,stnStates:R}),Object(f.jsx)("g",{id:"line_name",style:Object(i.a)({},"--translate-x",O===h.m.right?"".concat(_[0]-65,"px"):"".concat(_[1]+65,"px")),children:Object(f.jsx)(d,{info:Array(2).concat(["var(--rmg-theme-colour)","var(--rmg-theme-fg)"],b),stnState:1})})]})},P=l.a.memo((function(t){return Object(f.jsxs)("g",{fill:"none",strokeWidth:4,children:[Object(f.jsx)("g",{stroke:"#aaa",strokeDasharray:4,children:t.paths.pass.map((function(t,e){return Object(f.jsx)("path",{d:t},e)}))}),Object(f.jsx)("g",{stroke:"var(--rmg-theme-colour)",children:t.paths.main.map((function(t,e){return Object(f.jsx)("path",{d:t},e)}))})]})}),(function(t,e){return JSON.stringify(t.paths)===JSON.stringify(e.paths)})),E=function(t,e,n){var c,r=[];return t.forEach((function(t){var a=e[t],i=n[t];if(!c&&0!==c)return c=i,void r.push("M ".concat(a,",").concat(i));0===i?(i<c&&r.push("H ".concat(a-40),"a 40,40 0 0,0 40,-40","V ".concat(i)),i>c&&r.push("H ".concat(a-40),"a 40,40 0 0,1 40,40","V ".concat(i))):(i<c&&r.push("V ".concat(i+40),"a 40,40 0 0,1 40,-40","H ".concat(a)),i>c&&r.push("V ".concat(i-40),"a 40,40 0 0,0 40,40","H ".concat(a))),r.push("H ".concat(a)),c=i})),r.join(" ").replace(/( H ([\d.]+))+/g," H $2")},H=function(t){var e=t.xs,n=t.ys,c=t.stnStates,r=Object(m.c)((function(t){return t.param.stn_list}));return Object(f.jsx)("g",{id:"stn_icons",children:Object.keys(r).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(t){return Object(f.jsx)("g",{style:{transform:"translate(".concat(e[t],"px,").concat(n[t],"px)")},children:Object(f.jsx)(p,{stnId:t,stnState:c[t],stnY:n[t]})},t)}))})},L=["destIds"],F=["destIds"],B=(e.default=function(){var t=Object(m.c)((function(t){return t.param.svgWidth})),e=Object(m.c)((function(t){return t.param.direction})),n=Object(m.c)((function(t){return t.param.psd_num})),c=Object(m.c)((function(t){return t.param.info_panel_type})),r=Object(m.c)((function(t){return t.param.notesGZMTR})),a=Object(m.c)((function(t){return t.param.current_stn_idx})),i=Object(m.c)((function(t){return t.param.stn_list[a]}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(B,{}),Object(f.jsx)(u.a,{variant:c,isShowLight:c===h.i.gz2otis,isShowPSD:c===h.i.gz2otis&&n}),e===h.m.left&&i.parents.includes("linestart")||e===h.m.right&&i.children.includes("lineend")?Object(f.jsx)(T,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(R,{}),Object(f.jsx)(A,{}),r.map((function(t,e){return Object(f.jsx)(D,{note:t},e)}))]}),c===h.i.gz2otis&&Object(f.jsx)("line",{x2:t[h.c.RailMap],transform:"translate(0,90)",strokeWidth:3,stroke:"black"})]})},Object(o.memo)((function(){return Object(f.jsxs)("defs",{children:[Object(f.jsx)("path",{id:"stn",className:"rmg-stn",d:"M 0,9.25 V -9.25 H -9.25 a 9.25,9.25 0 0,0 0,18.5 h 18.5 a 9.25,9.25 0 0,0 0,-18.5 H 0 "}),Object(f.jsx)("path",{id:"stn_pass",stroke:"#aaa",fill:"#fff",strokeWidth:2,d:"M 0,9.25 V -9.25 H -9.25 a 9.25,9.25 0 0,0 0,18.5 h 18.5 a 9.25,9.25 0 0,0 0,-18.5 H 0 "}),Object(f.jsx)("path",{id:"arrow_direction",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black"}),Object(f.jsx)("path",{id:"inttick",d:"M 0,0 v 18",strokeLinecap:"square"}),Object(f.jsx)("rect",{id:"intbox",x:-22.5,height:24,width:45,rx:4.5})]})}))),A=function(){var t,e=Object(m.c)((function(t){return t.helper})).routes,n=Object(m.c)((function(t){return t.param})),c=n.direction,r=n.direction_gz_x,l=n.direction_gz_y,u=n.current_stn_idx,j=Object(o.useMemo)((function(){return Object(s.a)(new Set(e.reduce((function(t,e){return e.includes(u)?t.concat(e.filter((function(t){return!["linestart","lineend"].includes(t)})).slice(c===h.m.left?0:-1)[0]):t}),[]).filter((function(t){return t!==u}))))}),[u,c,e.toString()]),d={textAnchor:c===h.m.left?"start":"end",transform:"translate(".concat(c===h.m.left?65:-65,",-5)"),destIds:j};return Object(f.jsxs)("g",{id:"direction_gz",style:(t={},Object(i.a)(t,"--x-percentage",r),Object(i.a)(t,"--y-percentage",l),t),children:[Object(f.jsx)("use",{xlinkHref:"#arrow_direction",style:Object(i.a)({},"--rotate",c===h.m.left?"0deg":"180deg")}),2!==j.length?Object(f.jsx)(W,Object(a.a)({},d)):Object(f.jsx)(I,Object(a.a)({},d))]})},W=function(t){var e=t.destIds,n=Object(r.a)(t,L),c=Object(m.c)((function(t){return t.param.stn_list}));return Object(f.jsxs)("g",Object(a.a)(Object(a.a)({},n),{},{children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:28,children:e.map((function(t){return c[t].name[0]})).join("/")+"\u65b9\u5411"}),Object(f.jsx)("text",{className:"rmg-name__en",fontSize:14,dy:22,children:"Towards "+e.map((function(t){return c[t].name[1].replace("\\"," ")})).join("/")})]}))},I=function(t){var e=t.destIds,n=Object(r.a)(t,F),c=Object(m.c)((function(t){return t.param.direction})),i=Object(m.c)((function(t){return t.param.stn_list})),o=e.map((function(t){return i[t].name[0].length})),u=Math.min.apply(Math,Object(s.a)(o)),j=u>1&&o[0]!==o[1]?Math.abs(o[0]-o[1])/(u-1):0;return Object(f.jsxs)("g",Object(a.a)(Object(a.a)({},n),{},{children:[e.map((function(t,e){return Object(f.jsxs)(l.a.Fragment,{children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:25,x:c===h.m.left?0:-75,y:42*e-21,letterSpacing:o[e]>o[1-e]?"0em":"".concat(j,"em"),children:i[t].name[0]}),Object(f.jsx)("text",{className:"rmg-name__en",fontSize:11.5,x:c===h.m.left?0:-75,y:42*e-1,children:"Towards "+i[t].name[1].replace("\\"," ")})]},t)})),Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:28,x:c===h.m.left?25*(Math.max.apply(Math,Object(s.a)(o))+1):0,y:5,children:"\u65b9\u5411"})]}))},T=l.a.memo((function(){return Object(f.jsxs)("g",{id:"terminus_gz",textAnchor:"middle",children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:90,children:"\u7ec8 \u70b9 \u7ad9"}),Object(f.jsx)("text",{dy:70,className:"rmg-name__en",fontSize:36,children:"Terminal"}),Object(f.jsxs)("g",{strokeWidth:8,stroke:"#000",children:[Object(f.jsx)("path",{d:"M -160,68 h -160"}),Object(f.jsx)("path",{d:"M 160,68 h 160"})]})]})})),D=l.a.memo((function(t){var e,n=l.a.useRef(null),r=l.a.useState({width:0,height:0,y:0}),a=Object(c.a)(r,2),s=a[0],o=a[1];return l.a.useEffect((function(){return o(n.current.getBBox())}),[t.note[0],t.note[1]]),Object(f.jsxs)("g",{className:"note-box",style:(e={},Object(i.a)(e,"--x-percentage",t.note[2]),Object(i.a)(e,"--y-percentage",t.note[3]),e),children:[t.note[4]&&Object(f.jsx)("rect",{height:s.height+4,width:s.width+4,x:-2,y:s.y-2,fill:"none",stroke:"black",strokeWidth:.5}),Object(f.jsxs)("g",{ref:n,children:[Object(f.jsx)("g",{fontSize:16,letterSpacing:1.2,children:t.note[0].split("\n").map((function(t,e){return Object(f.jsx)("text",{className:"rmg-name__zh",y:18*e,children:t},e)}))}),Object(f.jsx)("g",{fontSize:10,letterSpacing:.33,transform:"translate(0,".concat(18*t.note[0].split("\n").length,")"),children:t.note[1].split("\n").map((function(e,n){var c;return Object(f.jsx)("text",{className:"rmg-name__en",y:11*n,textLength:n<((null===(c=t.note[1].match(/\n/g))||void 0===c?void 0:c.length)||0)?s.width:navigator.userAgent.includes("Firefox")?-1:0,lengthAdjust:"spacing",children:e},n)}))})]})]})}),(function(t,e){return t.note.toString()===e.note.toString()}))}}]);
//# sourceMappingURL=railmapGZMTR.c2de4962.chunk.js.map