(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[123],{179:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}n.d(e,"a",(function(){return r}))},180:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function t(e,n){if(["linestart","lineend"].includes(e)||n[e].parents.length>1||n[e].children.length>1)return 0;var r=n[e].parents[0];return r?1===n[r].children.length?t(r,n):0===n[r].children.indexOf(e)?1:-1:0}},182:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return f})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return j})),n.d(e,"a",(function(){return b})),n.d(e,"d",(function(){return O}));var r=n(30),c=n(59),a=n(60),i=n(41),s=n(83),o=n(9),l=n(3),u=(n(180),n(6)),h=function(t,e,n){return Object.keys(t).reduce((function(r,c){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},c,t[c].children.reduce((function(r,a){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},a,1+e(t,a)+n(t,c)))}),{})))}),{})},f=function t(e,n,r){if(e===n)return{len:0,nodes:[e]};var c=[],a=[];Object.keys(r[e]).forEach((function(i){var s=t(i,n,r);s.len<0||(c.push(r[e][i]+s.len),s.nodes.unshift(e),a.push(s.nodes))}));var i=Math.max.apply(Math,c);return{len:i,nodes:a[c.indexOf(i)]}},d=function(t,e,n){var r=f("linestart","lineend",e);if(r.nodes.includes(t))return f(r.nodes[1],t,e).len;for(var c=n.filter((function(e){return e.includes(t)}))[0],a=t;!r.nodes.includes(a);)a=c[c.indexOf(a)-1];for(var i=t;!r.nodes.includes(i);)i=c[c.indexOf(i)+1];var s="linestart"===a,o=[];return s||"lineend"===i?s?(o[0]=0,o[1]=f(r.nodes[1],i,e).len,o[2]=f(c[1],t,e).len,o[3]=f(t,i,e).len):(o[0]=f(r.nodes[1],a,e).len,o[1]=f(a,r.nodes.slice(-2)[0],e).len,o[2]=f(a,t,e).len,o[3]=f(t,c.slice(-2)[0],e).len):(o[0]=f(r.nodes[1],a,e).len,o[1]=f(a,i,e).len,o[2]=f(a,t,e).len,o[3]=f(t,i,e).len),o[0]+o[2]*o[1]/(o[2]+o[3])},j=function(t,e,n){var r;return console.log("computing stations' states"),Object(i.a)(new Set((r=[]).concat.apply(r,Object(i.a)(e)))).reduce((function(r,c){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},c,c===t?0:(n===u.m.right?function(t,e,n){var r,c=Object(s.a)(n);try{for(c.s();!(r=c.n()).done;){var a=r.value,i=a.indexOf(t),o=a.indexOf(e);if(-1!==i&&i<o)return!0}}catch(l){c.e(l)}finally{c.f()}return!1}(t,c,e):function(t,e,n){var r,c=Object(s.a)(n);try{for(c.s();!(r=c.n()).done;){var a=r.value,i=a.indexOf(t),o=a.indexOf(e);if(-1!==o&&o<i)return!0}}catch(l){c.e(l)}finally{c.f()}return!1}(t,c,e))?1:-1))}),{})},b=function(){function t(e){var n=this;Object(c.a)(this,t),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(t){return 0},this.rightWideFactor=function(t){return 0},this.pathWeight=function(t,e){return n.stnList[t].children.includes(e)?1+n.rightWideFactor(t)+n.leftWideFactor(e):-1/0},this.pathTurnParams=function(t){var e=35-17.5*Math.sqrt(3),n=t-2*e;return{tr:35,dx_a:17.5,dy_a:e,dx_l:n*Math.sqrt(3),dy_l:n}},this.pathTurnSE=function(t){var e=n.pathTurnParams(t),r=e.tr,c=e.dx_a,a=e.dy_a,i=e.dx_l,s=e.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(a," l ").concat(i,",").concat(s," a ").concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(a)},this.pathTurnNE=function(t){var e=n.pathTurnParams(t),r=e.tr,c=e.dx_a,a=e.dy_a,i=e.dx_l,s=e.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(-a," l ").concat(i,",").concat(-s," a ").concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(-a)},this.stnList=e.stnList,this.criticalPath=e.criticalPath}return Object(a.a)(t,[{key:"getYShare",value:function(t,e){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;var n=this.stnList[t].parents[0];if(n){if(1===this.stnList[n].children.length){var r=this.getYShare(n);return this.yShares[t]=r,r}var c=0===this.stnList[n].children.indexOf(t)?1:-1;return this.yShares[t]=c,c}return this.yShares[t]=0,0}},{key:"_linePath",value:function(t,e,n,c,a,i,s,o){var l=this,u=Object(r.a)([],3),h=u[0],f=u[1],d=u[2],j=[],b=this.pathTurnParams(i),O=b.dx_a+b.dx_l/2,m=(e[1]-e[0])/s.len*2,g=((e[1]-e[0])/s.len-2*O)/2;return g+m<0&&console.warn("SVG width too small! ".concat(g+m)),t.forEach((function(e){var r=c[e],s=a[e];if(!f&&0!==f)return h=e,d=r,f=s,void(1===t.length?j.push("M ".concat(r,",").concat(s)):n[0].includes(e)?n[0].includes(t[1])?j.push("M ".concat(r,",").concat(s)):(c[t[1]]>0&&j.push("M ".concat(r,",").concat(s+o)),a[t[1]]<0&&j.push("M ".concat(r,",").concat(s-o))):j.push("M ".concat(r,",").concat(s)));s>f?(j.push("h ".concat(0===s?r-d-m*l.leftWideFactor(e)-g-2*O:m*l.rightWideFactor(h)+g)),j.push(l.pathTurnSE(i))):s<f&&(j.push("h ".concat(0===s?r-d-m*l.leftWideFactor(e)-g-2*O:m*l.rightWideFactor(h)+g)),j.push(l.pathTurnNE(i))),j.push("H ".concat(r)),h=e,d=r,f=s})),j.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(t,e){console.log("computing y shares");var n=new this({stnList:t});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in n.yShares||n.getYShare(t,e)})),n.yShares}},{key:"drawLine",value:function(t,e,n,r,c,a,i,s){var o=this,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:9.68,u={main:[],pass:[]};return t.forEach((function(h,f){var d=(h=h.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),j=h.filter((function(t){return e[t]<=0}));1===d.length&&(j=h),0===d.filter((function(t){return-1!==j.indexOf(t)})).length&&d.length&&(j[0]===h[0]?j.push(d[0]):d[0]===h[0]&&d[d.length-1]===h[h.length-1]&&j.length?(j=h,d=[]):j.unshift(d[d.length-1])),u.main.push(new o({stnList:n,criticalPath:s})._linePath(d,r,t,c,a,i,s,l)),u.pass.push(new o({stnList:n,criticalPath:s})._linePath(j,r,t,c,a,i,s,l))})),u}}]),t}(),O=function(t,e){var n={main:[],pass:[]};return t.forEach((function(t){var r=(t=t.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),c=t.filter((function(t){return e[t]<=0}));1===r.length&&(c=t),0===r.filter((function(t){return-1!==c.indexOf(t)})).length&&r.length&&(c[0]===t[0]?c.push(r[0]):r[0]===t[0]&&r[r.length-1]===t[t.length-1]&&c.length?(c=t,r=[]):c.unshift(r[r.length-1])),n.main.push(r),n.pass.push(c)})),n}},346:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(30),i=n(9),s=n(3),o=n(182),l=n(179),u=n(41),h=n(6),f=n(21),d=n(2),j=["stnName"],b=["intInfos","direction"],O=function(t){var e=Object(f.c)((function(t){return t.param})),n=e.stn_list[t.stnId],r=([].concat(Object(u.a)(n.branch.left),Object(u.a)(n.branch.right)).length?8+12*n.name[1].split("\\").length:0)*("r"===e.direction?-1:1),c="",a={};return"sh2020"===e.info_panel_type?(c=3===n.services.length?"stn_sh_2020_direct":2===n.services.length?"stn_sh_2020_express":"stn_sh_2020",a.fill=-1===t.stnState?"gray":"var(--rmg-theme-colour)"):(c=3===n.services.length?"direct_sh":2===n.services.length?"express_sh":[].concat(Object(u.a)(n.transfer.info[0]),Object(u.a)(n.transfer.info[1]||[])).length>0?"int2_sh":"stn_sh",a.stroke=-1===t.stnState?"gray":"var(--rmg-theme-colour)"),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("use",Object(s.a)({xlinkHref:"#".concat(c)},a)),Object(d.jsx)("g",{transform:"translate(".concat(r,",0)"),children:Object(d.jsx)(m,{name:n.name,infos:n.transfer.info,stnState:t.stnState,direction:e.direction,info_panel_type:e.info_panel_type,facility:n.facility})})]})},m=function(t){var e,n=t.name,i=t.infos,s=t.stnState,o=t.info_panel_type,l=t.direction,f=t.facility,j=t.name[1].split("\\").length,b=Object(r.useRef)(null),O=c.a.useState({width:0}),m=Object(a.a)(O,2),p=m[0],v=m[1];c.a.useEffect((function(){return v(b.current.getBBox())}),Object(u.a)(n));var _=p.width+5,S="l"===l?1:-1,k=f!==h.e.none?30:0;return Object(d.jsxs)("g",{transform:"translate(".concat("l"===l?6:-6,",").concat("sh2020"===o?-20:-6,")rotate(").concat("l"===t.direction?-45:45,")"),children:[i.flat().length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("line",{x1:k*S,x2:(k+_)*S,stroke:-1===s?"gray":"black",strokeWidth:.5}),Object(d.jsx)(x,{intInfos:i,transform:"translate(".concat((k+_)*S,",-10.75)"),direction:l})]}),f!==h.e.none&&Object(d.jsx)("use",{xlinkHref:"#"+f,x:10*S,y:-30}),Object(d.jsxs)("g",{textAnchor:"l"===l?"start":"end",transform:"translate(".concat(k*S,",").concat(-16.15625-12*(j-1),")"),children:[Object(d.jsx)(g,{ref:b,stnName:n,fill:-1===s?"gray":0===s?"red":"black"}),(null===(e=i[1])||void 0===e?void 0:e.length)>0&&Object(d.jsx)("g",{transform:"translate(".concat((_+15*i.reduce((function(t,e){return t+e.length}),0))*S,",-30)"),children:Object(d.jsx)(y,{osiInfos:i[1]})})]})]})},g=c.a.forwardRef((function(t,e){var n=t.stnName,r=Object(l.a)(t,j);return Object(d.jsx)("g",Object(s.a)(Object(s.a)({ref:e},r),{},{children:c.a.useMemo((function(){return Object(d.jsxs)(d.Fragment,{children:[n[0].split("\\").map((function(t,e,n){return Object(d.jsx)("text",{className:"rmg-name__zh",dy:-15*(n.length-1-e),children:t},e)})),Object(d.jsx)("g",{fontSize:9.6,children:n[1].split("\\").map((function(t,e){return Object(d.jsx)("text",{className:"rmg-name__en",dy:12*(e+1),children:t},e)}))})]})}),Object(u.a)(n))}))})),x=function(t){var e,n=t.intInfos,r=(t.direction,Object(l.a)(t,b)),c=[].concat(Object(u.a)(n[0]),Object(u.a)(n[1]||[]),Object(u.a)((null===(e=n[2])||void 0===e?void 0:e.filter((function(t){return Boolean(t[4].match(/^\u78c1(\u60ac)*\u6d6e/))})))||[])),a=0;return Object(d.jsxs)("g",Object(s.a)(Object(s.a)({fontSize:14,textAnchor:"middle"},r),{},{children:[c.map((function(e,n){var r=Boolean(e[4].match(/^\d.*$/)),c=Boolean(e[4].match(/^\u78c1(\u60ac)*\u6d6e/));"r"===t.direction&&(a-=(r||c?20:14*e[4].length+12+0)+(0===n?0:5));var i=Object(d.jsx)("g",{});return i=c?Object(d.jsx)("g",{transform:"translate(".concat(a,",-16)scale(0.1428571429)"),children:Object(d.jsx)(p,{info:e})},n):r?Object(d.jsx)("g",{transform:"translate(".concat(a,",0)"),children:Object(d.jsx)(v,{info:e})},n):Object(d.jsx)("g",{transform:"translate(".concat(a,",0)"),children:Object(d.jsx)(_,{info:e})},n),"l"===t.direction&&(a+=r||c?25:14*e[4].length+12+5),i})),Object(u.a)(n[2]||[]).length>0&&Object(d.jsx)("g",{transform:"translate(".concat(a-("r"===t.direction?5:0),",0)"),children:Object(d.jsx)(S,{osysiInfos:n[2],direction:t.direction})},c.length+1)]}))},p=Object(r.memo)((function(t){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("use",{xlinkHref:"#intbox_maglev",fill:t.info[2],stroke:t.info[2]})})}),(function(t,e){return t.info.toString()===e.info.toString()})),v=Object(r.memo)((function(t){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("use",{xlinkHref:"#intbox_number",fill:t.info[2]}),Object(d.jsx)("text",{x:10,className:"rmg-name__zh",fill:t.info[3],dominantBaseline:"central",children:t.info[4].match(/(\d*)\w+/)[0]})]})}),(function(t,e){return t.info.toString()===e.info.toString()})),_=Object(r.memo)((function(t){var e=t.info[4].split("\\")[0].length;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("rect",{height:22,width:14*e+12,y:-11,fill:t.info[2]}),Object(d.jsx)("text",{x:7*e+6,className:"rmg-name__zh",fill:t.info[3],dominantBaseline:"central",children:t.info[4].split("\\")[0]})]})}),(function(t,e){return t.info.toString()===e.info.toString()})),y=function(t){var e=t.osiInfos.map((function(t){return t[4]})).join("\uff0c");return c.a.useMemo((function(){return Object(d.jsxs)("g",{textAnchor:"middle",fontSize:"50%",children:[Object(d.jsx)("text",{className:"rmg-name__zh",dy:-5,children:"\u6362\u4e58".concat(e)}),Object(d.jsx)("text",{className:"rmg-name__zh",dy:5,children:"\u4ec5\u9650\u516c\u5171\u4ea4\u901a\u5361"}),Object(d.jsx)("text",{className:"rmg-name__en",dy:12.5,fontSize:"75%",children:"Only for Public Transportation Card"})]})}),[e.toString()])},S=function(t){var e=t.osysiInfos.map((function(t){return t[4]})).join("\uff0c"),n=t.osysiInfos.map((function(t){return t[5]})).join(", ");return c.a.useMemo((function(){return Object(d.jsxs)("g",{textAnchor:"l"===t.direction?"start":"end",fontSize:"50%",children:[Object(d.jsxs)("text",{className:"rmg-name__zh",dy:3,children:["\u8f6c\u4e58",e]}),Object(d.jsxs)("text",{className:"rmg-name__en",dy:10,fontSize:"75%",children:["To ",n]})]})}),[t.osysiInfos.toString(),t.direction])},k=function(){var t=Object(f.c)((function(t){return t.helper})),e=t.routes,n=t.branches,r=t.depsStr,a=Object(f.c)((function(t){return t.param})),l=Object(o.b)(a.stn_list,(function(){return 0}),(function(){return 0})),u=Object(o.c)("linestart","lineend",l),j=Object(o.c)(u.nodes[1],u.nodes.slice(-2)[0],l),b=c.a.useMemo((function(){return console.log("computing x shares"),Object.keys(a.stn_list).reduce((function(t,e){return Object(s.a)(Object(s.a)({},t),{},Object(i.a)({},e,Object(o.f)(e,l,n)))}),{})}),[n.toString(),JSON.stringify(l)]),O=[a.svgWidth.railmap*a.padding/100,a.svgWidth.railmap*(1-a.padding/100)],m=Object.keys(b).reduce((function(t,e){return Object(s.a)(Object(s.a)({},t),{},Object(i.a)({},e,O[0]+b[e]/j.len*(O[1]-O[0])))}),{}),g=c.a.useMemo((function(){return console.log("computing y shares"),Object.keys(a.stn_list).reduce((function(t,e){return Object(s.a)(Object(s.a)({},t),{},Object(i.a)({},e,n[0].includes(e)?0:3))}),{})}),[r]),x=Object.keys(g).reduce((function(t,e){return Object(s.a)(Object(s.a)({},t),{},Object(i.a)({},e,-g[e]*a.branch_spacing))}),{}),p=c.a.useMemo((function(){return Object(o.e)(a.current_stn_idx,e,a.direction)}),[a.current_stn_idx,a.direction,e.toString()]),v=Object.values(h.l),_=Object.values(a.stn_list).map((function(t){return t.services})).flat().reduce((function(t,e){return t[v.indexOf(e)]=!0,t}),[!1,!1,!1]).map((function(t,e){return[v[e],t]})).filter((function(t){return t[1]})).map((function(t){return t[0]})),y=Object(o.d)(n,p),S=_.map((function(t){return Object.keys(y).reduce((function(e,n){var r;return Object(s.a)(Object(s.a)({},e),{},(r={},Object(i.a)(r,n,y[n].map((function(e){return M(e,n,m,x,a.direction,t,_.length)})).filter((function(t){return""!==t}))),Object(i.a)(r,"service",t),r))}),{})}));return Object(d.jsxs)("g",{id:"main",transform:"translate(0,".concat(a.svg_height-63,")"),children:[Object(d.jsx)(w,{paths:S,direction:a.direction}),Object(d.jsx)(L,{xs:m,ys:x,stnStates:p}),Object(d.jsx)(H,{servicesLevel:_,dy:100-a.svg_height,direction:a.direction,lineXs:O}),Object(d.jsx)(z,{})]})},w=function(t){return Object(d.jsx)(d.Fragment,{children:t.paths.map((function(e,n){return Object(d.jsxs)("g",{transform:"translate(0,".concat(25*n,")"),children:[Object(d.jsx)("g",{children:e.pass.map((function(e,n){return Object(d.jsx)("path",{stroke:"gray",strokeWidth:12,fill:"none",d:e,markerStart:"l"===t.direction?"url(#arrow_gray)":void 0,markerEnd:"r"===t.direction?"url(#arrow_gray)":void 0,strokeLinejoin:"round"},n)}))}),Object(d.jsx)("g",{children:e.main.map((function(e,r){return Object(d.jsx)("path",{stroke:"var(--rmg-theme-colour)",strokeWidth:12,fill:"none",d:e,markerStart:"l"===t.direction?"url(#arrow_theme_left)":void 0,markerEnd:"r"===t.direction?"url(#arrow_theme_right)":void 0,strokeLinejoin:"round",filter:2===n?"url(#contrast-direct)":1===n?"url(#contrast-express)":""},r)}))})]},"servicePath".concat(n))}))})},M=function(t,e,n,r,c,i,s){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:30,l=[],u=Object(a.a)(l,2),h=u[0],f=u[1],d={},j={local:0,express:20,direct:40}[i],b=s>1?50:0;if(t.forEach((function(t){var e=n[t],c=r[t];if(!h&&0!==h)return f=e,h=c,void(d.start=[e,c]);0===c?c!==h&&(d.bifurcate=[f,h]):c!==h&&(d.bifurcate=[e,c]),d.end=[e,c],f=e,h=c})),d.hasOwnProperty("start")){if(d.hasOwnProperty("end")){if(d.hasOwnProperty("bifurcate")){var O=Object(a.a)(d.start,2),m=O[0],g=O[1],x=Object(a.a)(d.end,2),p=x[0],v=x[1];return"main"===e?"l"===c?v>g?"M ".concat(m-o,",").concat(g," H ").concat(p," V ").concat(v):"M ".concat(m,",").concat(g," V ").concat(v," H ").concat(p):v>g?"M ".concat(m,",").concat(g," H ").concat(p," V ").concat(v):"M ".concat(m,",").concat(g," V ").concat(v," H ").concat(p+o):v>g?"M ".concat(m-o,",").concat(g," H ").concat(p," V ").concat(v):"M ".concat(m,",").concat(g," V ").concat(v," H ").concat(p+o)}var _=Object(a.a)(d.start,2),y=_[0],S=_[1],k=d.end[0];return"main"===e?"l"===c?"M ".concat(y-o-j,",").concat(S," H ").concat(k):"M ".concat(y,",").concat(S," H ").concat(k+o+j):"l"===c?"M ".concat(y-o,",").concat(S," H ").concat(k+o+b):"M ".concat(y-o-b,",").concat(S," H ").concat(k+o)}var w=Object(a.a)(d.start,2),M=w[0],L=w[1];return"main"===e?"l"===c?"M ".concat(M-o-j,",").concat(L," H ").concat(M):"M ".concat(M,",").concat(L," H ").concat(M+o+j):"l"===c?"M ".concat(M,",").concat(L," L ").concat(M+o+b,",").concat(L):"M ".concat(M-o-b,",").concat(L," L ").concat(M,",").concat(L)}return""},L=function(t){var e=Object(f.c)((function(t){return t.param}));return Object(d.jsx)("g",{children:Object.keys(e.stn_list).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(e){return Object(d.jsx)("g",{transform:"translate(".concat(t.xs[e],",").concat(t.ys[e],")"),children:Object(d.jsx)(O,{stnId:e,stnState:t.stnStates[e]})},e)}))})},H=function(t){var e=Object(f.c)((function(t){return t.param}));if(1===t.servicesLevel.length)return Object(d.jsx)(d.Fragment,{});var n=t.servicesLevel.map((function(t){return{local:"\u666e\u901a\u8f66",express:"\u5927\u7ad9\u8f66",direct:"\u76f4\u8fbe\u8f66"}[t]})),r="r"===t.direction?t.lineXs[0]-42:t.lineXs[1]+42,c=2===t.servicesLevel.length?350:500;return Object(d.jsxs)("g",{children:[n.map((function(t,e){return Object(d.jsxs)("g",{transform:"translate(".concat(r,",").concat(25*e,")"),children:[Object(d.jsx)("rect",{x:-27.5,height:10,width:55,fill:"white",stroke:"black",y:-5}),Object(d.jsx)("text",{className:"rmg-name__zh",fontSize:9,y:3,textAnchor:"middle",children:"".concat(t,"\u8fd0\u884c\u7ebf")})]},t)})),Object(d.jsxs)("g",{transform:"translate(".concat("r"===t.direction?30:e.svgWidth.railmap-c,",").concat(t.dy,")"),children:[Object(d.jsx)("text",{className:"rmg-name__zh",children:"\u56fe\u4f8b\uff1a"}),n.map((function(t,e){return Object(d.jsxs)("g",{transform:"translate(".concat(150*e+50,",0)"),children:[Object(d.jsx)("line",{x1:"0",x2:"35",y1:"-5",y2:"-5",stroke:"var(--rmg-theme-colour)",strokeWidth:"12",filter:2===e?"url(#contrast-direct)":1===e?"url(#contrast-express)":""}),Object(d.jsx)("use",{x:"17.5",y:"-5",xlinkHref:"#stn_sh",fill:"var(--rmg-theme-colour)"}),Object(d.jsx)("text",{x:"40",className:"rmg-name__zh",children:"".concat(t,"\u505c\u9760\u7ad9")})]},"serviceLevel".concat(e))}))]})]})},z=function(){var t=Object(f.c)((function(t){return t.param}));return c.a.useMemo((function(){return Object(d.jsxs)("g",{transform:"translate(".concat("l"===t.direction?50:t.svgWidth.railmap-150,",").concat(100-t.svg_height,")"),children:[Object(d.jsx)("text",{className:"rmg-name__zh",children:"\u5217\u8f66\u524d\u8fdb\u65b9\u5411"}),Object(d.jsx)("path",{d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-theme-colour)",transform:"translate(".concat("l"===t.direction?-30:125,",-5)rotate(").concat("l"===t.direction?0:180,")scale(0.15)")})]})}),[t.direction,t.svgWidth.railmap,t.svg_height])},F=r.memo((function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(W,{}),Object(d.jsx)(k,{})]})})),W=(e.default=F,r.memo((function(){return Object(d.jsxs)("defs",{children:[Object(d.jsx)("circle",{id:"stn_sh",fill:"var(--rmg-white)",strokeWidth:2,r:5}),Object(d.jsx)("path",{id:"int2_sh",fill:"var(--rmg-white)",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V10 a 5,5 0 1 1 -10,0Z"}),Object(d.jsx)("path",{id:"express_sh",fill:"var(--rmg-white)",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V25 a 5,5 0 1 1 -10,0Z"}),Object(d.jsx)("path",{id:"direct_sh",fill:"var(--rmg-white)",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V50 a 5,5 0 1 1 -10,0Z"}),Object(d.jsx)("rect",{id:"stn_sh_2020",stroke:"none",height:24,width:10,y:-18}),Object(d.jsx)("rect",{id:"stn_sh_2020_express",stroke:"none",height:49,width:10,y:-18}),Object(d.jsx)("rect",{id:"stn_sh_2020_direct",stroke:"none",height:74,width:10,y:-18}),Object(d.jsx)("rect",{id:"intbox_number",height:22,width:20,y:-11}),Object(d.jsxs)("g",{id:"intbox_maglev",transform:"translate(-25,0)",children:[Object(d.jsx)("rect",{id:"maglev_5",height:144,width:130,y:"40",x:"30",strokeWidth:10}),Object(d.jsx)("path",{id:"maglev_3",fill:"var(--rmg-white)",d:"m90,55a40,5 0 0 0 -40,3a5,5 0 0 0 -5,5a5,60 0 0 0 -3,60a5,5 0 0 0 5,5l96,0a5,5 0 0 0 5,-5a5,60 0 0 0 -3,-60a5,5 0 0 0 -5,-5a40,5 0 0 0 -40,-3l-5,-10l-5,10"}),Object(d.jsx)("path",{id:"maglev_4",fill:"var(--rmg-white)",d:"m90,140l-40,0a10,5 0 0 1 -10,-5l0,25a10,15 0 0 0 10,15l15,0l0,-10l-15,0l0,-15l90,0l0,15l-15,0l0,10l15,0a10,15 0 0 0 10,-15l0,-25a10,5 0 0 1 -10,5l-50,0"}),Object(d.jsx)("rect",{id:"maglev_1",height:"25",width:"40",y:"80",x:"50"}),Object(d.jsx)("rect",{id:"maglev_2",height:"25",width:"40",y:"80",x:"100"})]}),Object(d.jsxs)("g",{id:"airport",transform:"scale(0.5)",children:[Object(d.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"var(--rmg-grey)"}),Object(d.jsx)("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"var(--rmg-white)"})]}),Object(d.jsxs)("g",{id:"disney",transform:"scale(0.5)",children:[Object(d.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"var(--rmg-grey)"}),Object(d.jsx)("path",{fill:"var(--rmg-white)",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"})]}),Object(d.jsxs)("g",{id:"railway",children:[Object(d.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"var(--rmg-grey)",transform:"translate(0,-2)scale(0.5)"}),Object(d.jsx)("path",{fill:"var(--rmg-white)",d:"M169,273.5c0-19,14.7-34.8,33.7-36.3c18.9-1.5,38.1-2.2,57.4-2.2c19.3,0,38.4,0.8,57.3,2.2  c19,1.5,33.7,17.3,33.7,36.3v47.3l-51.3,14.7c-11.2,3.2-18.9,13.4-18.9,25v147.8c0,17.4,12.2,32.3,29.3,35.7l110.6,22.1  c4.9,1,8.4,5.2,8.4,10.2V599H91v-22.7c0-5,3.5-9.2,8.4-10.2L209.9,544c17-3.4,29.3-18.3,29.3-35.7V360.5c0-11.6-7.7-21.8-18.9-25  L169,320.8V273.5z M309.4,31.7c0.2-1.2,0.3-2.4,0.3-3.6c0-14-11.1-25.4-24.9-26C276.6,1.4,268.3,1,260,1c-8.3,0-16.6,0.4-24.7,1.1  c-13.9,0.6-24.9,12-24.9,26c0,1.2,0.1,2.5,0.3,3.6C90.6,54.8,0,160.3,0,287c0,97.2,53.4,182,132.4,226.6l36.8-48.1  C104.3,432.4,59.8,364.9,59.8,287c0-110.6,89.6-200.2,200.2-200.2S460.2,176.4,460.2,287c0,77.9-44.5,145.4-109.4,178.5  c15,19.6,25.6,33.5,36.8,48.1C466.6,469,520,384.2,520,287C520,160.3,429.4,54.8,309.4,31.7z",transform:"translate(-10,0)scale(0.04)"})]}),Object(d.jsx)("marker",{id:"arrow_gray",viewBox:"-1.5 0 3 1.5",refY:.5,children:Object(d.jsx)("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-grey)"})}),Object(d.jsx)("marker",{id:"arrow_theme_left",refX:1,refY:.5,children:Object(d.jsx)("path",{d:"M1,0L0,1H1z",fill:"var(--rmg-theme-colour)"})}),Object(d.jsx)("marker",{id:"arrow_theme_right",refY:.5,children:Object(d.jsx)("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-theme-colour)"})}),Object(d.jsx)("filter",{id:"contrast-direct",filterUnits:"userSpaceOnUse",children:Object(d.jsxs)("feComponentTransfer",{children:[Object(d.jsx)("feFuncR",{type:"linear",slope:.5,intercept:.25}),Object(d.jsx)("feFuncG",{type:"linear",slope:.5,intercept:.25}),Object(d.jsx)("feFuncB",{type:"linear",slope:.5,intercept:.25})]})}),Object(d.jsx)("filter",{id:"contrast-express",filterUnits:"userSpaceOnUse",children:Object(d.jsxs)("feComponentTransfer",{children:[Object(d.jsx)("feFuncR",{type:"linear",slope:.75,intercept:.125}),Object(d.jsx)("feFuncG",{type:"linear",slope:.75,intercept:.125}),Object(d.jsx)("feFuncB",{type:"linear",slope:.75,intercept:.125})]})})]})})))}}]);
//# sourceMappingURL=railmapSHMetro.10c26e0e.chunk.js.map