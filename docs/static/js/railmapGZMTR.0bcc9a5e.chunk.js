(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[127],{179:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}n.d(e,"a",(function(){return r}))},180:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function t(e,n){if(["linestart","lineend"].includes(e)||n[e].parents.length>1||n[e].children.length>1)return 0;var r=n[e].parents[0];return r?1===n[r].children.length?t(r,n):0===n[r].children.indexOf(e)?1:-1:0}},182:function(t,e,n){"use strict";n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return h})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"a",(function(){return O})),n.d(e,"d",(function(){return b}));var r=n(30),c=n(59),a=n(60),s=n(41),i=n(83),o=n(9),l=n(3),u=(n(180),n(6)),j=function(t,e,n){return Object.keys(t).reduce((function(r,c){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},c,t[c].children.reduce((function(r,a){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},a,1+e(t,a)+n(t,c)))}),{})))}),{})},h=function t(e,n,r){if(e===n)return{len:0,nodes:[e]};var c=[],a=[];Object.keys(r[e]).forEach((function(s){var i=t(s,n,r);i.len<0||(c.push(r[e][s]+i.len),i.nodes.unshift(e),a.push(i.nodes))}));var s=Math.max.apply(Math,c);return{len:s,nodes:a[c.indexOf(s)]}},d=function(t,e,n){var r=h("linestart","lineend",e);if(r.nodes.includes(t))return h(r.nodes[1],t,e).len;for(var c=n.filter((function(e){return e.includes(t)}))[0],a=t;!r.nodes.includes(a);)a=null===c||void 0===c?void 0:c[c.indexOf(a)-1];for(var s=t;!r.nodes.includes(s);)s=null===c||void 0===c?void 0:c[c.indexOf(s)+1];var i="linestart"===a,o=[];return i||"lineend"===s?i?(o[0]=0,o[1]=h(r.nodes[1],s,e).len,o[2]=h(c[1],t,e).len,o[3]=h(t,s,e).len):(o[0]=h(r.nodes[1],a,e).len,o[1]=h(a,r.nodes.slice(-2)[0],e).len,o[2]=h(a,t,e).len,o[3]=h(t,c.slice(-2)[0],e).len):(o[0]=h(r.nodes[1],a,e).len,o[1]=h(a,s,e).len,o[2]=h(a,t,e).len,o[3]=h(t,s,e).len),o[0]+o[2]*o[1]/(o[2]+o[3])},f=function(t,e,n){var r;return console.log("computing stations' states"),Object(s.a)(new Set((r=[]).concat.apply(r,Object(s.a)(e)))).reduce((function(r,c){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},c,c===t?0:(n===u.m.right?function(t,e,n){var r,c=Object(i.a)(n);try{for(c.s();!(r=c.n()).done;){var a=r.value,s=a.indexOf(t),o=a.indexOf(e);if(-1!==s&&s<o)return!0}}catch(l){c.e(l)}finally{c.f()}return!1}(t,c,e):function(t,e,n){var r,c=Object(i.a)(n);try{for(c.s();!(r=c.n()).done;){var a=r.value,s=a.indexOf(t),o=a.indexOf(e);if(-1!==o&&o<s)return!0}}catch(l){c.e(l)}finally{c.f()}return!1}(t,c,e))?1:-1))}),{})},O=function(){function t(e){var n=this;Object(c.a)(this,t),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(t){return 0},this.rightWideFactor=function(t){return 0},this.pathWeight=function(t,e){return n.stnList[t].children.includes(e)?1+n.rightWideFactor(t)+n.leftWideFactor(e):-1/0},this.pathTurnParams=function(t){var e=35-17.5*Math.sqrt(3),n=t-2*e;return{tr:35,dx_a:17.5,dy_a:e,dx_l:n*Math.sqrt(3),dy_l:n}},this.pathTurnSE=function(t){var e=n.pathTurnParams(t),r=e.tr,c=e.dx_a,a=e.dy_a,s=e.dx_l,i=e.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(a," l ").concat(s,",").concat(i," a ").concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(a)},this.pathTurnNE=function(t){var e=n.pathTurnParams(t),r=e.tr,c=e.dx_a,a=e.dy_a,s=e.dx_l,i=e.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(-a," l ").concat(s,",").concat(-i," a ").concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(-a)},this.stnList=e.stnList,this.criticalPath=e.criticalPath}return Object(a.a)(t,[{key:"getYShare",value:function(t,e){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;var n=this.stnList[t].parents[0];if(n){if(1===this.stnList[n].children.length){var r=this.getYShare(n);return this.yShares[t]=r,r}var c=0===this.stnList[n].children.indexOf(t)?1:-1;return this.yShares[t]=c,c}return this.yShares[t]=0,0}},{key:"_linePath",value:function(t,e,n,c,a,s,i,o){var l=this,u=Object(r.a)([],3),j=u[0],h=u[1],d=u[2],f=[],O=this.pathTurnParams(s),b=O.dx_a+O.dx_l/2,m=(e[1]-e[0])/i.len*2,g=((e[1]-e[0])/i.len-2*b)/2;return g+m<0&&console.warn("SVG width too small! ".concat(g+m)),t.forEach((function(e){var r=c[e],i=a[e];if(!h&&0!==h)return j=e,d=r,h=i,void(1===t.length?f.push("M ".concat(r,",").concat(i)):n[0].includes(e)?n[0].includes(t[1])?f.push("M ".concat(r,",").concat(i)):(c[t[1]]>0&&f.push("M ".concat(r,",").concat(i+o)),a[t[1]]<0&&f.push("M ".concat(r,",").concat(i-o))):f.push("M ".concat(r,",").concat(i)));i>h?(f.push("h ".concat(0===i?r-d-m*l.leftWideFactor(e)-g-2*b:m*l.rightWideFactor(j)+g)),f.push(l.pathTurnSE(s))):i<h&&(f.push("h ".concat(0===i?r-d-m*l.leftWideFactor(e)-g-2*b:m*l.rightWideFactor(j)+g)),f.push(l.pathTurnNE(s))),f.push("H ".concat(r)),j=e,d=r,h=i})),f.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(t,e){console.log("computing y shares");var n=new this({stnList:t});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in n.yShares||n.getYShare(t,e)})),n.yShares}},{key:"drawLine",value:function(t,e,n,r,c,a,s,i){var o=this,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:9.68,u={main:[],pass:[]};return t.forEach((function(j,h){var d=(j=j.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),f=j.filter((function(t){return e[t]<=0}));1===d.length&&(f=j),0===d.filter((function(t){return-1!==f.indexOf(t)})).length&&d.length&&(f[0]===j[0]?f.push(d[0]):d[0]===j[0]&&d[d.length-1]===j[j.length-1]&&f.length?(f=j,d=[]):f.unshift(d[d.length-1])),u.main.push(new o({stnList:n,criticalPath:i})._linePath(d,r,t,c,a,s,i,l)),u.pass.push(new o({stnList:n,criticalPath:i})._linePath(f,r,t,c,a,s,i,l))})),u}}]),t}(),b=function(t,e){var n={main:[],pass:[]};return t.forEach((function(t){var r=(t=t.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),c=t.filter((function(t){return e[t]<=0}));1===r.length&&(c=t),0===r.filter((function(t){return-1!==c.indexOf(t)})).length&&r.length&&(c[0]===t[0]?c.push(r[0]):r[0]===t[0]&&r[r.length-1]===t[t.length-1]&&c.length?(c=t,r=[]):c.unshift(r[r.length-1])),n.main.push(r),n.pass.push(c)})),n}},243:function(t,e,n){"use strict";var r=n(3),c=n(9),a=n(0),s=n.n(a),i=n(179),o=n(6),l=n(2),u=["num","inStrip"];function j(t){var e=t.num,n=t.inStrip,c=Object(i.a)(t,u);return Object(l.jsxs)("g",Object(r.a)(Object(r.a)({textAnchor:"middle",fill:n?o.h.black:"var(--rmg-theme-fg)"},c),{},{children:[Object(l.jsx)("rect",{height:40,width:40,rx:4,x:-20,fill:n?"#fff":"var(--rmg-theme-colour)"}),Object(l.jsx)("text",{className:"rmg-name__en",fontSize:20,dy:12,children:e}),Object(l.jsx)("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"\u5c4f\u853d\u95e8"}),Object(l.jsx)("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]}))}e.a=function(t){var e=function(t){switch(t){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}}(t.variant),n=s.a.useMemo((function(){switch(t.variant){case"gz1":return Object(l.jsx)("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return Object(l.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return Object(l.jsx)("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return Object(l.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return Object(l.jsx)("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return Object(l.jsx)("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return Object(l.jsx)("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return Object(l.jsx)("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return Object(l.jsx)(l.Fragment,{})}}),[t.variant]);return Object(l.jsxs)("g",{transform:"translate(0,".concat("gz4"===t.variant?-20:0,")"),children:[Object(l.jsx)("rect",{id:"strip_gz",style:Object(c.a)({},"--height","".concat(e,"px"))}),Object(l.jsx)("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:t.isShowLight&&n}),!1!==t.isShowPSD&&Object(l.jsx)(h,Object(r.a)({},t))]})};var h=s.a.memo((function(t){var e,n=["gz28","gz2otis","gz6","gzgf"].includes(t.variant),r=function(t){switch(t){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}}(t.variant);return Object(l.jsx)(j,{num:t.isShowPSD,inStrip:n,style:(e={},Object(c.a)(e,"--psd-dy",r),Object(c.a)(e,"transform","translate(var(--translate-x), var(--translate-y))"),Object(c.a)(e,"--translate-x","calc(var(--rmg-svg-width) / 2 + 80px)"),Object(c.a)(e,"--translate-y","calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"),e)})}),(function(t,e){return t.variant===e.variant&&t.isShowPSD===e.isShowPSD}))},244:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(3),c=n(30),a=n(179),s=n(0),i=n(2),o=Object(s.memo)((function(t){var e=t.passed,n=t.large?"M0,12.95 V-12.95 H-12.95 a12.95,12.95 0 0,0 0,25.9 h25.9 a12.95,12.95 0 0,0 0,-25.9 H0":"M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0";return Object(i.jsx)("path",{d:n,fill:"#fff",strokeWidth:2,stroke:e?"#aaa":"var(--rmg-theme-colour)"})}),(function(t,e){return t.passed===e.passed&&t.large===e.large})),l=["lineNum","stnNum","passed","large"];function u(t){var e=t.lineNum,n=t.stnNum,u=t.passed,j=t.large,h=Object(a.a)(t,l),d=Object(s.useRef)(null),f=Object(s.useRef)(null),O=Object(s.useState)({width:0}),b=Object(c.a)(O,2),m=b[0],g=b[1],x=Object(s.useState)({width:0}),p=Object(c.a)(x,2),v=p[0],S=p[1];Object(s.useEffect)((function(){g(d.current.getBBox()),S(f.current.getBBox())}),[e,n]);var y=15/Math.max(15,m.width),_=2===e.length&&2===n.length?y:15/Math.max(15,v.width);return Object(i.jsxs)("g",Object(r.a)(Object(r.a)({},h),{},{children:[Object(i.jsx)(o,{passed:u,large:j}),Object(i.jsxs)("g",{textAnchor:"middle",fontSize:13.5,transform:j?"scale(1.4)":"",fill:u?"#aaa":"#000",children:[Object(i.jsx)("g",{transform:"translate(-9.25,0)scale(".concat(y,")"),children:Object(i.jsx)("text",{ref:d,className:"rmg-name__zh",children:e})}),Object(i.jsx)("g",{transform:"translate(9.25,0)scale(".concat(_,")"),children:Object(i.jsx)("text",{ref:f,className:"rmg-name__zh",children:n})})]})]}))}},353:function(t,e,n){"use strict";n.r(e);var r=n(30),c=n(179),a=n(3),s=n(9),i=n(41),o=n(0),l=n.n(o),u=n(243),j=n(244),h=n(6),d=n(21),f=n(2),O=Object(o.memo)((function(t){var e=t.lineName,n=t.commonPart,c=Object(o.useRef)(null),a=Object(o.useState)({x:0,height:0,width:0}),s=Object(r.a)(a,2),i=s[0],l=s[1];Object(o.useEffect)((function(){c.current&&l(c.current.getBBox())}),[e.toString()]);var u=m/Math.max(m,i.width),j=(-i.x-i.width/2)*u,h=i.height*(1-u)*1.2/2;return Object(f.jsx)("g",{ref:c,transform:"translate(".concat(j,",").concat(h,")scale(").concat(u,")"),children:Object(f.jsxs)("text",{className:"rmg-name__zh",fontSize:14,y:12,textAnchor:"end",children:[n,Object(f.jsx)("tspan",{className:"rmg-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:e[0].slice(n.length).trim()}),Object(f.jsx)("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:e[1].slice(n.length).trim()})]})})}),(function(t,e){return t.lineName.toString()===e.lineName.toString()}));function b(t){return Object(f.jsx)("rect",Object(a.a)({x:-22.5,height:24,width:45,rx:4.5},t))}var m=42,g=Object(o.memo)((function(t){var e=t.lineName,n=t.foregroundColour,c=t.backgroundColour,a=t.passed,s=x(e),i=Object(r.a)(s,2),l=i[0],u=i[1],j=Object(o.useRef)(null),d=Object(o.useRef)(null),g=Object(o.useState)({width:0}),v=Object(r.a)(g,2),S=v[0],y=v[1],_=Object(o.useState)({width:0}),z=Object(r.a)(_,2),N=z[0],w=z[1];Object(o.useEffect)((function(){j.current&&y(j.current.getBBox()),d.current&&w(d.current.getBBox())}),[e.toString()]);var k=m/Math.max(m,S.width),M=m/Math.max(m,N.width);return Object(f.jsxs)("g",{textAnchor:"middle",fill:a?h.h.white:n,children:[Object(f.jsx)(b,{fill:a?"#aaa":c}),2===l?Object(f.jsx)(O,{lineName:e,commonPart:u}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("text",{ref:j,y:p(l,"zh",k),className:"rmg-name__zh",fontSize:12,transform:"scale(".concat(k,")"),children:1===l?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("tspan",{fontSize:16,dy:.7,children:u}),Object(f.jsx)("tspan",{dy:-.7,children:e[0].slice(u.length)})]}):e[0]}),Object(f.jsx)("text",{ref:d,y:p(l,"en",M),className:"rmg-name__en",fontSize:8,transform:"scale(".concat(M,")"),children:e[1]})]})]})}),(function(t,e){return t.lineName.toString()===e.lineName.toString()&&t.foregroundColour===e.foregroundColour&&t.backgroundColour===e.backgroundColour&&t.passed===e.passed})),x=function(t){var e=t[0].match(/^(\d+)\D+$/);if(e)return[1,e[1]];var n=t.map((function(t){return t.match(/^([\w\d]+).+$/)}));return n[0]&&n[1]&&n[0][1]===n[1][1]?[2,n[0][1]]:[3,""]},p=function(t,e,n){switch(t){case 1:return("zh"===e?7.3:19.5)*(2-n);case 2:return 0;case 3:return("zh"===e?8:19.5)*(2-n)}},v=Object(o.memo)((function(t){var e=t.stnName,n=t.onUpdate,r=Object(o.useRef)(null);return Object(o.useEffect)((function(){n&&n(r.current.getBBox())}),[e.toString()]),Object(f.jsxs)("g",{ref:r,children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:18,children:e[0]}),Object(f.jsx)("g",{fontSize:10.5,children:e[1].split("\\").map((function(t,e){return Object(f.jsx)("text",{className:"rmg-name__en",dy:16+11*e,children:t},e)}))})]})}),(function(t,e){return t.stnName.toString()===e.stnName.toString()})),S=["stnName","onUpdate","passed"];function y(t){var e=t.stnName,n=t.onUpdate,s=t.passed,i=Object(c.a)(t,S),l=Object(o.useRef)(null),u=Object(o.useState)({x:0,width:0}),j=Object(r.a)(u,2),h=j[0],d=j[1];return Object(o.useEffect)((function(){var t=l.current.getBBox();d(t),n&&n(t)}),[e.toString()]),Object(f.jsxs)("g",Object(a.a)(Object(a.a)({fill:s?"#aaa":"#000"},i),{},{children:[Object(f.jsxs)("g",{transform:"translate(0,3)",fontSize:18,children:[Object(f.jsx)("text",{textAnchor:"end",x:h.x-3,className:"rmg-name__zh",children:"("}),Object(f.jsx)("text",{textAnchor:"start",x:h.width+h.x+3,className:"rmg-name__zh",children:")"})]}),Object(f.jsxs)("g",{ref:l,textAnchor:"middle",children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:13,children:e[0]}),Object(f.jsx)("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:e[1]})]})]}))}var _=["passed"];function z(t){var e=t.passed,n=Object(c.a)(t,_);return Object(f.jsxs)("g",Object(a.a)(Object(a.a)({textAnchor:"middle",fill:e?"#aaa":"var(--rmg-theme-colour)"},n),{},{children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:13,children:"\u5feb\u8f66\u505c\u9760\u7ad9"}),Object(f.jsx)("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:"Express Station"})]}))}function N(t){var e=t.primaryName,n=t.secondaryName,c=t.stationState,a=t.flipped,s=t.express,i=Object(o.useState)({width:0}),l=Object(r.a)(i,2),u=l[0],j=l[1],d=Object(o.useState)({x:0,width:-20}),O=Object(r.a)(d,2),b=O[0],m=O[1],g=e[1].split("\\").length,x={g:{x:0,y:a?17.5:-20-14*g*Math.cos(-45)},StationSecondaryName:{x:(u.width+b.width/2+10)*(a?-1:1),y:2+5*(g-1)},ExpressTag:{x:(u.width+b.width+20+35)*(a?-1:1),y:2+5*(g-1)}};return Object(f.jsxs)("g",{textAnchor:a?"end":"start",fill:function(t){switch(t){case h.n.PASSED:return"#aaa";case h.n.CURRENT:return"#f00";case h.n.FUTURE:return"#000"}}(c),transform:"translate(".concat(x.g.x,",").concat(x.g.y,")rotate(-45)"),children:[Object(f.jsx)(v,{stnName:e,onUpdate:j}),n&&Object(f.jsx)(y,{stnName:n,onUpdate:m,passed:c===h.n.PASSED,transform:"translate(".concat(x.StationSecondaryName.x,",").concat(x.StationSecondaryName.y,")")}),s&&Object(f.jsx)(z,{passed:c===h.n.PASSED,transform:"translate(".concat(x.ExpressTag.x,",").concat(x.ExpressTag.y,")")})]})}var w=["intInfos","stnState","tickRotation"],k=["intInfos","tickRotation","stnState"],M=function(t){var e=t.stnId,n=t.stnState,r=t.stnY,c=Object(d.c)((function(t){return t.param.theme})),a=Object(d.c)((function(t){return t.param.line_name})),s=Object(d.c)((function(t){return t.param.line_num})),o=Object(d.c)((function(t){return t.param.stn_list[e]})),l=2===o.parents.length||2===o.children.length,u=r>0||1===o.parents.indexOf(o.branch.left[1]||"")||1===o.children.indexOf(o.branch.right[1]||"")?180:0,O=o.name[1].split("\\").length,b=l?180===u?16+12*(O-1)*Math.cos(-45):-9:180===u?-6:(25+15*(O-1))*Math.cos(-45);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(E,{intInfos:l?[[c[0],c[1],"var(--rmg-theme-colour)","var(--rmg-theme-fg)"].concat(Object(i.a)(a))].concat(o.transfer.info[0]):o.transfer.info[0],stnState:n,tickRotation:u}),Object(f.jsx)(j.a,{lineNum:s,stnNum:o.num,passed:-1===n}),Object(f.jsx)("g",{transform:"translate(".concat(-b,",0)"),children:Object(f.jsx)(N,{primaryName:o.name,secondaryName:o.secondaryName||void 0,stationState:n,flipped:180===u,express:o.services.includes(h.l.express)})})]})},E=function(t){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(P,Object(a.a)({strokeWidth:4},t)),Object(f.jsx)(R,Object(a.a)({transform:"translate(0,".concat(180===t.tickRotation?-47:23,")")},t))]})},P=function(t){var e=t.intInfos,n=t.stnState,r=t.tickRotation,s=Object(c.a)(t,w);return Object(f.jsx)("g",Object(a.a)(Object(a.a)({},s),{},{children:e.map((function(t,c){return Object(f.jsx)("use",{xlinkHref:"#inttick",stroke:-1===n?"#aaa":t[2],transform:"translate(".concat(-2*(e.length-1)+4*c,",0)rotate(").concat(180===r?180:0,")")},c)}))}))},R=function(t){var e=t.intInfos,n=t.tickRotation,r=t.stnState,s=Object(c.a)(t,k);return Object(f.jsx)("g",Object(a.a)(Object(a.a)({},s),{},{children:e.map((function(t,e){return Object(f.jsx)("g",{transform:"translate(0,".concat(28*e*(180===n?-1:1),")"),children:Object(f.jsx)(g,{lineName:[t[4],t[5]],foregroundColour:t[3],backgroundColour:t[2],passed:-1===r})},e)}))}))},L=n(182),H=function(t,e){return 2===t[e].parents.length||2===t[e].children.length?.25:0},A=function(){var t,e=Object(d.c)((function(t){return t.helper})),n=e.branches,r=e.routes,c=e.depsStr,i=Object(d.c)((function(t){return t.param.svgWidth})),l=Object(d.c)((function(t){return t.param.y_pc})),u=Object(d.c)((function(t){return t.param.padding})),j=Object(d.c)((function(t){return t.param.branch_spacing})),O=Object(d.c)((function(t){return t.param.direction})),b=Object(d.c)((function(t){return t.param.line_name})),m=Object(d.c)((function(t){return t.param.current_stn_idx})),x=Object(d.c)((function(t){return t.param.stn_list})),p=Object(L.b)(x,H,H),v=Object(o.useMemo)((function(){return console.log("computing x shares"),Object.keys(x).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,function(t,e,n){var r=Object(L.c)("linestart","lineend",e);if(r.nodes.includes(t))return Object(L.c)(r.nodes[1],t,e).len;var c=n.filter((function(e){return e.includes(t)}))[0];if(!c)return 0;for(var a=t;!r.nodes.includes(a);)a=c[c.indexOf(a)-1];for(var s=t;!r.nodes.includes(s);)s=c[c.indexOf(s)+1];var i="linestart"===a,o="lineend"===s;if(c.toString()===n[0].toString()){var l=[];return i||o?i?(l[0]=0,l[1]=Object(L.c)(r.nodes[1],s,e).len,l[2]=Object(L.c)(c[1],t,e).len,l[3]=Object(L.c)(t,s,e).len):(l[0]=Object(L.c)(r.nodes[1],a,e).len,l[1]=Object(L.c)(a,r.nodes.slice(-2)[0],e).len,l[2]=Object(L.c)(a,t,e).len,l[3]=Object(L.c)(t,c.slice(-2)[0],e).len):(l[0]=Object(L.c)(r.nodes[1],a,e).len,l[1]=Object(L.c)(a,s,e).len,l[2]=Object(L.c)(a,t,e).len,l[3]=Object(L.c)(t,s,e).len),l[0]+l[2]*l[1]/(l[2]+l[3])}if(i||o)return i?Object(L.c)(r.nodes[1],s,e).len-Object(L.c)(t,s,e).len:Object(L.c)(r.nodes[1],a,e).len+Object(L.c)(a,t,e).len;var u=[];return u[0]=Object(L.c)(r.nodes[1],a,e).len,u[1]=Object(L.c)(a,s,e).len,u[2]=Object(L.c)(a,t,e).len,u[3]=Object(L.c)(t,s,e).len,u[0]+u[2]*u[1]/(u[2]+u[3])}(e,p,n)))}),{})}),[n.toString(),JSON.stringify(p)]),S=Object(L.c)("linestart","lineend",p),y=Object(L.c)(S.nodes[1],S.nodes.slice(-2)[0],p),_=O===h.m.right?[i[h.c.RailMap]*u/100+65,i[h.c.RailMap]*(1-u/100)-20]:[i[h.c.RailMap]*u/100,i[h.c.RailMap]*(1-u/100)-65],z=Object.keys(v).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,_[0]+v[e]/y.len*(_[1]-_[0])))}),{}),N=Object(o.useMemo)((function(){return console.log("computing y shares"),Object.keys(x).reduce((function(t,e){if(n[0].includes(e))return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,0));var r=n.slice(1).filter((function(t){return t.includes(e)}))[0];return r?Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,x[r[0]].children.indexOf(r[1])?-2:2)):Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,0))}),{})}),[c]),w=Object.keys(N).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,-N[e]*j))}),{}),k=Object(o.useMemo)((function(){return Object(L.e)(m,r,O)}),[m,O,r.toString()]),M=Object(L.d)(n,k),E=Object.keys(M).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,M[e].map((function(t){return T(t,z,w)}))))}),{});return Object(f.jsxs)("g",{id:"main",style:(t={},Object(s.a)(t,"--y-percentage",l),Object(s.a)(t,"transform","translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"),t),children:[Object(f.jsx)(F,{paths:E}),Object(f.jsx)(W,{xs:z,ys:w,stnStates:k}),Object(f.jsx)("g",{id:"line_name",style:Object(s.a)({},"--translate-x",O===h.m.right?"".concat(_[0]-65,"px"):"".concat(_[1]+65,"px")),children:Object(f.jsx)(g,{lineName:b,foregroundColour:"var(--rmg-theme-fg)",backgroundColour:"var(--rmg-theme-colour)"})})]})},F=l.a.memo((function(t){return Object(f.jsxs)("g",{fill:"none",strokeWidth:4,children:[Object(f.jsx)("g",{stroke:"#aaa",strokeDasharray:4,children:t.paths.pass.map((function(t,e){return Object(f.jsx)("path",{d:t},e)}))}),Object(f.jsx)("g",{stroke:"var(--rmg-theme-colour)",children:t.paths.main.map((function(t,e){return Object(f.jsx)("path",{d:t},e)}))})]})}),(function(t,e){return JSON.stringify(t.paths)===JSON.stringify(e.paths)})),T=function(t,e,n){var r,c=[];return t.forEach((function(t){var a=e[t],s=n[t];if(!r&&0!==r)return r=s,void c.push("M ".concat(a,",").concat(s));0===s?(s<r&&c.push("H ".concat(a-40),"a 40,40 0 0,0 40,-40","V ".concat(s)),s>r&&c.push("H ".concat(a-40),"a 40,40 0 0,1 40,40","V ".concat(s))):(s<r&&c.push("V ".concat(s+40),"a 40,40 0 0,1 40,-40","H ".concat(a)),s>r&&c.push("V ".concat(s-40),"a 40,40 0 0,0 40,40","H ".concat(a))),c.push("H ".concat(a)),r=s})),c.join(" ").replace(/( H ([\d.]+))+/g," H $2")},W=function(t){var e=t.xs,n=t.ys,r=t.stnStates,c=Object(d.c)((function(t){return t.param.stn_list}));return Object(f.jsx)("g",{id:"stn_icons",children:Object.keys(c).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(t){return Object(f.jsx)("g",{style:{transform:"translate(".concat(e[t],"px,").concat(n[t],"px)")},children:Object(f.jsx)(M,{stnId:t,stnState:r[t],stnY:n[t]})},t)}))})},B=["destIds"],I=["destIds"],C=(e.default=function(){var t=Object(d.c)((function(t){return t.param.svgWidth})),e=Object(d.c)((function(t){return t.param.direction})),n=Object(d.c)((function(t){return t.param.psd_num})),r=Object(d.c)((function(t){return t.param.info_panel_type})),c=Object(d.c)((function(t){return t.param.notesGZMTR})),a=Object(d.c)((function(t){return t.param.current_stn_idx})),s=Object(d.c)((function(t){return t.param.stn_list[a]}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(C,{}),Object(f.jsx)(u.a,{variant:r,isShowLight:r===h.i.gz2otis,isShowPSD:r===h.i.gz2otis&&n}),e===h.m.left&&s.parents.includes("linestart")||e===h.m.right&&s.children.includes("lineend")?Object(f.jsx)(Y,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(A,{}),Object(f.jsx)(D,{}),c.map((function(t,e){return Object(f.jsx)(J,{note:t},e)}))]}),r===h.i.gz2otis&&Object(f.jsx)("line",{x2:t[h.c.RailMap],transform:"translate(0,90)",strokeWidth:3,stroke:"black"})]})},Object(o.memo)((function(){return Object(f.jsxs)("defs",{children:[Object(f.jsx)("path",{id:"arrow_direction",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black"}),Object(f.jsx)("path",{id:"inttick",d:"M 0,0 v 18",strokeLinecap:"square"})]})}))),D=function(){var t,e=Object(d.c)((function(t){return t.helper})).routes,n=Object(d.c)((function(t){return t.param})),r=n.direction,c=n.direction_gz_x,l=n.direction_gz_y,u=n.current_stn_idx,j=Object(o.useMemo)((function(){return Object(i.a)(new Set(e.reduce((function(t,e){return e.includes(u)?t.concat(e.filter((function(t){return!["linestart","lineend"].includes(t)})).slice(r===h.m.left?0:-1)[0]):t}),[]).filter((function(t){return t!==u}))))}),[u,r,e.toString()]),O={textAnchor:r===h.m.left?"start":"end",transform:"translate(".concat(r===h.m.left?65:-65,",-5)"),destIds:j};return Object(f.jsxs)("g",{id:"direction_gz",style:(t={},Object(s.a)(t,"--x-percentage",c),Object(s.a)(t,"--y-percentage",l),t),children:[Object(f.jsx)("use",{xlinkHref:"#arrow_direction",style:Object(s.a)({},"--rotate",r===h.m.left?"0deg":"180deg")}),2!==j.length?Object(f.jsx)(U,Object(a.a)({},O)):Object(f.jsx)(V,Object(a.a)({},O))]})},U=function(t){var e=t.destIds,n=Object(c.a)(t,B),r=Object(d.c)((function(t){return t.param.stn_list}));return Object(f.jsxs)("g",Object(a.a)(Object(a.a)({},n),{},{children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:28,children:e.map((function(t){return r[t].name[0]})).join("/")+"\u65b9\u5411"}),Object(f.jsx)("text",{className:"rmg-name__en",fontSize:14,dy:22,children:"Towards "+e.map((function(t){return r[t].name[1].replace("\\"," ")})).join("/")})]}))},V=function(t){var e=t.destIds,n=Object(c.a)(t,I),r=Object(d.c)((function(t){return t.param.direction})),s=Object(d.c)((function(t){return t.param.stn_list})),o=e.map((function(t){return s[t].name[0].length})),u=Math.min.apply(Math,Object(i.a)(o)),j=u>1&&o[0]!==o[1]?Math.abs(o[0]-o[1])/(u-1):0;return Object(f.jsxs)("g",Object(a.a)(Object(a.a)({},n),{},{children:[e.map((function(t,e){return Object(f.jsxs)(l.a.Fragment,{children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:25,x:r===h.m.left?0:-75,y:42*e-21,letterSpacing:o[e]>o[1-e]?"0em":"".concat(j,"em"),children:s[t].name[0]}),Object(f.jsx)("text",{className:"rmg-name__en",fontSize:11.5,x:r===h.m.left?0:-75,y:42*e-1,children:"Towards "+s[t].name[1].replace("\\"," ")})]},t)})),Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:28,x:r===h.m.left?25*(Math.max.apply(Math,Object(i.a)(o))+1):0,y:5,children:"\u65b9\u5411"})]}))},Y=l.a.memo((function(){return Object(f.jsxs)("g",{id:"terminus_gz",textAnchor:"middle",children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:90,children:"\u7ec8 \u70b9 \u7ad9"}),Object(f.jsx)("text",{dy:70,className:"rmg-name__en",fontSize:36,children:"Terminal"}),Object(f.jsxs)("g",{strokeWidth:8,stroke:"#000",children:[Object(f.jsx)("path",{d:"M -160,68 h -160"}),Object(f.jsx)("path",{d:"M 160,68 h 160"})]})]})})),J=l.a.memo((function(t){var e,n=l.a.useRef(null),c=l.a.useState({width:0,height:0,y:0}),a=Object(r.a)(c,2),i=a[0],o=a[1];return l.a.useEffect((function(){return o(n.current.getBBox())}),[t.note[0],t.note[1]]),Object(f.jsxs)("g",{className:"note-box",style:(e={},Object(s.a)(e,"--x-percentage",t.note[2]),Object(s.a)(e,"--y-percentage",t.note[3]),e),children:[t.note[4]&&Object(f.jsx)("rect",{height:i.height+4,width:i.width+4,x:-2,y:i.y-2,fill:"none",stroke:"black",strokeWidth:.5}),Object(f.jsxs)("g",{ref:n,children:[Object(f.jsx)("g",{fontSize:16,letterSpacing:1.2,children:t.note[0].split("\n").map((function(t,e){return Object(f.jsx)("text",{className:"rmg-name__zh",y:18*e,children:t},e)}))}),Object(f.jsx)("g",{fontSize:10,letterSpacing:.33,transform:"translate(0,".concat(18*t.note[0].split("\n").length,")"),children:t.note[1].split("\n").map((function(e,n){var r;return Object(f.jsx)("text",{className:"rmg-name__en",y:11*n,textLength:n<((null===(r=t.note[1].match(/\n/g))||void 0===r?void 0:r.length)||0)?i.width:navigator.userAgent.includes("Firefox")?-1:0,lengthAdjust:"spacing",children:e},n)}))})]})]})}),(function(t,e){return t.note.toString()===e.note.toString()}))}}]);
//# sourceMappingURL=railmapGZMTR.0bcc9a5e.chunk.js.map