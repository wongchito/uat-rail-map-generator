(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[131],{179:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}n.d(e,"a",(function(){return r}))},180:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function t(e,n){if(["linestart","lineend"].includes(e)||n[e].parents.length>1||n[e].children.length>1)return 0;var r=n[e].parents[0];return r?1===n[r].children.length?t(r,n):0===n[r].children.indexOf(e)?1:-1:0}},182:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return j})),n.d(e,"f",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"a",(function(){return b})),n.d(e,"d",(function(){return O}));var r=n(30),c=n(59),i=n(60),a=n(41),s=n(83),o=n(9),l=n(3),u=(n(180),n(6)),h=function(t,e,n){return Object.keys(t).reduce((function(r,c){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},c,t[c].children.reduce((function(r,i){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},i,1+e(t,i)+n(t,c)))}),{})))}),{})},j=function t(e,n,r){if(e===n)return{len:0,nodes:[e]};var c=[],i=[];Object.keys(r[e]).forEach((function(a){var s=t(a,n,r);s.len<0||(c.push(r[e][a]+s.len),s.nodes.unshift(e),i.push(s.nodes))}));var a=Math.max.apply(Math,c);return{len:a,nodes:i[c.indexOf(a)]}},f=function(t,e,n){var r=j("linestart","lineend",e);if(r.nodes.includes(t))return j(r.nodes[1],t,e).len;for(var c=n.filter((function(e){return e.includes(t)}))[0],i=t;!r.nodes.includes(i);)i=c[c.indexOf(i)-1];for(var a=t;!r.nodes.includes(a);)a=c[c.indexOf(a)+1];var s="linestart"===i,o=[];return s||"lineend"===a?s?(o[0]=0,o[1]=j(r.nodes[1],a,e).len,o[2]=j(c[1],t,e).len,o[3]=j(t,a,e).len):(o[0]=j(r.nodes[1],i,e).len,o[1]=j(i,r.nodes.slice(-2)[0],e).len,o[2]=j(i,t,e).len,o[3]=j(t,c.slice(-2)[0],e).len):(o[0]=j(r.nodes[1],i,e).len,o[1]=j(i,a,e).len,o[2]=j(i,t,e).len,o[3]=j(t,a,e).len),o[0]+o[2]*o[1]/(o[2]+o[3])},d=function(t,e,n){var r;return console.log("computing stations' states"),Object(a.a)(new Set((r=[]).concat.apply(r,Object(a.a)(e)))).reduce((function(r,c){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},c,c===t?0:(n===u.m.right?function(t,e,n){var r,c=Object(s.a)(n);try{for(c.s();!(r=c.n()).done;){var i=r.value,a=i.indexOf(t),o=i.indexOf(e);if(-1!==a&&a<o)return!0}}catch(l){c.e(l)}finally{c.f()}return!1}(t,c,e):function(t,e,n){var r,c=Object(s.a)(n);try{for(c.s();!(r=c.n()).done;){var i=r.value,a=i.indexOf(t),o=i.indexOf(e);if(-1!==o&&o<a)return!0}}catch(l){c.e(l)}finally{c.f()}return!1}(t,c,e))?1:-1))}),{})},b=function(){function t(e){var n=this;Object(c.a)(this,t),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(t){return 0},this.rightWideFactor=function(t){return 0},this.pathWeight=function(t,e){return n.stnList[t].children.includes(e)?1+n.rightWideFactor(t)+n.leftWideFactor(e):-1/0},this.pathTurnParams=function(t){var e=35-17.5*Math.sqrt(3),n=t-2*e;return{tr:35,dx_a:17.5,dy_a:e,dx_l:n*Math.sqrt(3),dy_l:n}},this.pathTurnSE=function(t){var e=n.pathTurnParams(t),r=e.tr,c=e.dx_a,i=e.dy_a,a=e.dx_l,s=e.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(i," l ").concat(a,",").concat(s," a ").concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(i)},this.pathTurnNE=function(t){var e=n.pathTurnParams(t),r=e.tr,c=e.dx_a,i=e.dy_a,a=e.dx_l,s=e.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(-i," l ").concat(a,",").concat(-s," a ").concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(-i)},this.stnList=e.stnList,this.criticalPath=e.criticalPath}return Object(i.a)(t,[{key:"getYShare",value:function(t,e){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;var n=this.stnList[t].parents[0];if(n){if(1===this.stnList[n].children.length){var r=this.getYShare(n);return this.yShares[t]=r,r}var c=0===this.stnList[n].children.indexOf(t)?1:-1;return this.yShares[t]=c,c}return this.yShares[t]=0,0}},{key:"_linePath",value:function(t,e,n,c,i,a,s,o){var l=this,u=Object(r.a)([],3),h=u[0],j=u[1],f=u[2],d=[],b=this.pathTurnParams(a),O=b.dx_a+b.dx_l/2,m=(e[1]-e[0])/s.len*2,x=((e[1]-e[0])/s.len-2*O)/2;return x+m<0&&console.warn("SVG width too small! ".concat(x+m)),t.forEach((function(e){var r=c[e],s=i[e];if(!j&&0!==j)return h=e,f=r,j=s,void(1===t.length?d.push("M ".concat(r,",").concat(s)):n[0].includes(e)?n[0].includes(t[1])?d.push("M ".concat(r,",").concat(s)):(c[t[1]]>0&&d.push("M ".concat(r,",").concat(s+o)),i[t[1]]<0&&d.push("M ".concat(r,",").concat(s-o))):d.push("M ".concat(r,",").concat(s)));s>j?(d.push("h ".concat(0===s?r-f-m*l.leftWideFactor(e)-x-2*O:m*l.rightWideFactor(h)+x)),d.push(l.pathTurnSE(a))):s<j&&(d.push("h ".concat(0===s?r-f-m*l.leftWideFactor(e)-x-2*O:m*l.rightWideFactor(h)+x)),d.push(l.pathTurnNE(a))),d.push("H ".concat(r)),h=e,f=r,j=s})),d.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(t,e){console.log("computing y shares");var n=new this({stnList:t});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in n.yShares||n.getYShare(t,e)})),n.yShares}},{key:"drawLine",value:function(t,e,n,r,c,i,a,s){var o=this,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:9.68,u={main:[],pass:[]};return t.forEach((function(h,j){var f=(h=h.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),d=h.filter((function(t){return e[t]<=0}));1===f.length&&(d=h),0===f.filter((function(t){return-1!==d.indexOf(t)})).length&&f.length&&(d[0]===h[0]?d.push(f[0]):f[0]===h[0]&&f[f.length-1]===h[h.length-1]&&d.length?(d=h,f=[]):d.unshift(f[f.length-1])),u.main.push(new o({stnList:n,criticalPath:s})._linePath(f,r,t,c,i,a,s,l)),u.pass.push(new o({stnList:n,criticalPath:s})._linePath(d,r,t,c,i,a,s,l))})),u}}]),t}(),O=function(t,e){var n={main:[],pass:[]};return t.forEach((function(t){var r=(t=t.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),c=t.filter((function(t){return e[t]<=0}));1===r.length&&(c=t),0===r.filter((function(t){return-1!==c.indexOf(t)})).length&&r.length&&(c[0]===t[0]?c.push(r[0]):r[0]===t[0]&&r[r.length-1]===t[t.length-1]&&c.length?(c=t,r=[]):c.unshift(r[r.length-1])),n.main.push(r),n.pass.push(c)})),n}},363:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),i=n(30),a=n(9),s=n(3),o=n(182),l=n(179),u=n(41),h=n(6),j=n(21),f=n(2),d=["stnName"],b=["intInfos","direction"],O=function(t){var e=Object(j.c)((function(t){return t.param})),n=e.stn_list[t.stnId],r=([].concat(Object(u.a)(n.branch.left),Object(u.a)(n.branch.right)).length?8+12*n.name[1].split("\\").length:0)*("r"===e.direction?-1:1),c="",i={};return"sh2020"===e.info_panel_type?(c=3===n.services.length?"stn_sh_2020_direct":2===n.services.length?"stn_sh_2020_express":"stn_sh_2020",i.fill=-1===t.stnState?"gray":"var(--rmg-theme-colour)"):(c=3===n.services.length?"direct_sh":2===n.services.length?"express_sh":[].concat(Object(u.a)(n.transfer.info[0]),Object(u.a)(n.transfer.info[1]||[])).length>0?"int2_sh":"stn_sh",i.stroke=-1===t.stnState?"gray":"var(--rmg-theme-colour)"),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("use",Object(s.a)({xlinkHref:"#".concat(c)},i)),Object(f.jsx)("g",{transform:"translate(".concat(r,",0)"),children:Object(f.jsx)(m,{name:n.name,infos:n.transfer.info,stnState:t.stnState,direction:e.direction,info_panel_type:e.info_panel_type,facility:n.facility})})]})},m=function(t){var e,n=t.name,a=t.infos,s=t.stnState,o=t.info_panel_type,l=t.direction,j=t.facility,d=t.name[1].split("\\").length,b=Object(r.useRef)(null),O=c.a.useState({width:0}),m=Object(i.a)(O,2),p=m[0],v=m[1];c.a.useEffect((function(){return v(b.current.getBBox())}),Object(u.a)(n));var y=p.width+5,S="l"===l?1:-1,k=j!==h.e.none?30:0;return Object(f.jsxs)("g",{transform:"translate(".concat("l"===l?6:-6,",").concat("sh2020"===o?-20:-6,")rotate(").concat("l"===t.direction?-45:45,")"),children:[a.flat().length>0&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("line",{x1:k*S,x2:(k+y)*S,stroke:-1===s?"gray":"black",strokeWidth:.5}),Object(f.jsx)(g,{intInfos:a,transform:"translate(".concat((k+y)*S,",-10.75)"),direction:l})]}),j!==h.e.none&&Object(f.jsx)("use",{xlinkHref:"#"+j,x:10*S,y:-30}),Object(f.jsxs)("g",{textAnchor:"l"===l?"start":"end",transform:"translate(".concat(k*S,",").concat(-16.15625-12*(d-1),")"),children:[Object(f.jsx)(x,{ref:b,stnName:n,fill:-1===s?"gray":0===s?"red":"black"}),(null===(e=a[1])||void 0===e?void 0:e.length)>0&&Object(f.jsx)("g",{transform:"translate(".concat((y+15*a.reduce((function(t,e){return t+e.length}),0))*S,",-30)"),children:Object(f.jsx)(_,{osiInfos:a[1]})})]})]})},x=c.a.forwardRef((function(t,e){var n=t.stnName,r=Object(l.a)(t,d);return Object(f.jsx)("g",Object(s.a)(Object(s.a)({ref:e},r),{},{children:c.a.useMemo((function(){return Object(f.jsxs)(f.Fragment,{children:[n[0].split("\\").map((function(t,e,n){return Object(f.jsx)("text",{className:"rmg-name__zh",dy:-15*(n.length-1-e),children:t},e)})),Object(f.jsx)("g",{fontSize:9.6,children:n[1].split("\\").map((function(t,e){return Object(f.jsx)("text",{className:"rmg-name__en",dy:12*(e+1),children:t},e)}))})]})}),Object(u.a)(n))}))})),g=function(t){var e,n=t.intInfos,r=(t.direction,Object(l.a)(t,b)),c=[].concat(Object(u.a)(n[0]),Object(u.a)(n[1]||[]),Object(u.a)((null===(e=n[2])||void 0===e?void 0:e.filter((function(t){return Boolean(t[4].match(/^\u78c1(\u60ac)*\u6d6e/))})))||[])),i=0;return Object(f.jsxs)("g",Object(s.a)(Object(s.a)({fontSize:14,textAnchor:"middle"},r),{},{children:[c.map((function(e,n){var r=Boolean(e[4].match(/^\d.*$/)),c=Boolean(e[4].match(/^\u78c1(\u60ac)*\u6d6e/));"r"===t.direction&&(i-=(r||c?20:14*e[4].length+12+0)+(0===n?0:5));var a=Object(f.jsx)("g",{});return a=c?Object(f.jsx)("g",{transform:"translate(".concat(i,",-16)scale(0.1428571429)"),children:Object(f.jsx)(p,{info:e})},n):r?Object(f.jsx)("g",{transform:"translate(".concat(i,",0)"),children:Object(f.jsx)(v,{info:e})},n):Object(f.jsx)("g",{transform:"translate(".concat(i,",0)"),children:Object(f.jsx)(y,{info:e})},n),"l"===t.direction&&(i+=r||c?25:14*e[4].length+12+5),a})),Object(u.a)(n[2]||[]).length>0&&Object(f.jsx)("g",{transform:"translate(".concat(i-("r"===t.direction?5:0),",0)"),children:Object(f.jsx)(S,{osysiInfos:n[2],direction:t.direction})},c.length+1)]}))},p=Object(r.memo)((function(t){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("use",{xlinkHref:"#intbox_maglev",fill:t.info[2],stroke:t.info[2]})})}),(function(t,e){return t.info.toString()===e.info.toString()})),v=Object(r.memo)((function(t){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("use",{xlinkHref:"#intbox_number",fill:t.info[2]}),Object(f.jsx)("text",{x:10,className:"rmg-name__zh",fill:t.info[3],dominantBaseline:"central",children:t.info[4].match(/(\d*)\w+/)[0]})]})}),(function(t,e){return t.info.toString()===e.info.toString()})),y=Object(r.memo)((function(t){var e=t.info[4].split("\\")[0].length;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("rect",{height:22,width:14*e+12,y:-11,fill:t.info[2]}),Object(f.jsx)("text",{x:7*e+6,className:"rmg-name__zh",fill:t.info[3],dominantBaseline:"central",children:t.info[4].split("\\")[0]})]})}),(function(t,e){return t.info.toString()===e.info.toString()})),_=function(t){var e=t.osiInfos.map((function(t){return t[4]})).join("\uff0c");return c.a.useMemo((function(){return Object(f.jsxs)("g",{textAnchor:"middle",fontSize:"50%",children:[Object(f.jsx)("text",{className:"rmg-name__zh",dy:-5,children:"\u6362\u4e58".concat(e)}),Object(f.jsx)("text",{className:"rmg-name__zh",dy:5,children:"\u4ec5\u9650\u516c\u5171\u4ea4\u901a\u5361"}),Object(f.jsx)("text",{className:"rmg-name__en",dy:12.5,fontSize:"75%",children:"Only for Public Transportation Card"})]})}),[e.toString()])},S=function(t){var e=t.osysiInfos.map((function(t){return t[4]})).join("\uff0c"),n=t.osysiInfos.map((function(t){return t[5]})).join(", ");return c.a.useMemo((function(){return Object(f.jsxs)("g",{textAnchor:"l"===t.direction?"start":"end",fontSize:"50%",children:[Object(f.jsxs)("text",{className:"rmg-name__zh",dy:3,children:["\u8f6c\u4e58",e]}),Object(f.jsxs)("text",{className:"rmg-name__en",dy:10,fontSize:"75%",children:["To ",n]})]})}),[t.osysiInfos.toString(),t.direction])},k=function(){var t=Object(j.c)((function(t){return t.helper})),e=t.routes,n=t.branches,r=t.depsStr,i=Object(j.c)((function(t){return t.param})),l=Object(o.b)(i.stn_list,(function(){return 0}),(function(){return 0})),u=Object(o.c)("linestart","lineend",l),d=Object(o.c)(u.nodes[1],u.nodes.slice(-2)[0],l),b=c.a.useMemo((function(){return console.log("computing x shares"),Object.keys(i.stn_list).reduce((function(t,e){return Object(s.a)(Object(s.a)({},t),{},Object(a.a)({},e,Object(o.f)(e,l,n)))}),{})}),[n.toString(),JSON.stringify(l)]),O=[i.svgWidth.railmap*i.padding/100,i.svgWidth.railmap*(1-i.padding/100)],m=Object.keys(b).reduce((function(t,e){return Object(s.a)(Object(s.a)({},t),{},Object(a.a)({},e,O[0]+b[e]/d.len*(O[1]-O[0])))}),{}),x=c.a.useMemo((function(){return console.log("computing y shares"),Object.keys(i.stn_list).reduce((function(t,e){return Object(s.a)(Object(s.a)({},t),{},Object(a.a)({},e,n[0].includes(e)?0:3))}),{})}),[r]),g=Object.keys(x).reduce((function(t,e){return Object(s.a)(Object(s.a)({},t),{},Object(a.a)({},e,-x[e]*i.branch_spacing))}),{}),p=c.a.useMemo((function(){return Object(o.e)(i.current_stn_idx,e,i.direction)}),[i.current_stn_idx,i.direction,e.toString()]),v=Object.values(h.l),y=Object.values(i.stn_list).map((function(t){return t.services})).flat().reduce((function(t,e){return t[v.indexOf(e)]=!0,t}),[!1,!1,!1]).map((function(t,e){return[v[e],t]})).filter((function(t){return t[1]})).map((function(t){return t[0]})),_=Object(o.d)(n,p),S=y.map((function(t){return Object.keys(_).reduce((function(e,n){var r;return Object(s.a)(Object(s.a)({},e),{},(r={},Object(a.a)(r,n,_[n].map((function(e){return M(e,n,m,g,i.direction,t,y.length)})).filter((function(t){return""!==t}))),Object(a.a)(r,"service",t),r))}),{})}));return Object(f.jsxs)("g",{id:"main",transform:"translate(0,".concat(i.svg_height-63,")"),children:[Object(f.jsx)(w,{paths:S,direction:i.direction}),Object(f.jsx)(L,{xs:m,ys:g,stnStates:p}),Object(f.jsx)(F,{servicesLevel:y,dy:100-i.svg_height,direction:i.direction,lineXs:O}),Object(f.jsx)(H,{})]})},w=function(t){var e=Object(j.c)((function(t){return t.param})).theme;return Object(f.jsx)(f.Fragment,{children:t.paths.map((function(n,r){return Object(f.jsxs)("g",{transform:"translate(0,".concat(25*r,")"),filter:"#999999"===e[2]?"url(#colorreplace)":void 0,children:[Object(f.jsx)("g",{children:n.pass.map((function(e,n){return Object(f.jsx)("path",{stroke:"gray",strokeWidth:12,fill:"none",d:e,markerStart:"l"===t.direction?"url(#arrow_gray)":void 0,markerEnd:"r"===t.direction?"url(#arrow_gray)":void 0,strokeLinejoin:"round"},n)}))}),Object(f.jsx)("g",{children:n.main.map((function(e,n){return Object(f.jsx)("path",{stroke:"var(--rmg-theme-colour)",strokeWidth:12,fill:"none",d:e,markerStart:"l"===t.direction?"url(#arrow_theme_left)":void 0,markerEnd:"r"===t.direction?"url(#arrow_theme_right)":void 0,strokeLinejoin:"round",filter:2===r?"url(#contrast-direct)":1===r?"url(#contrast-express)":void 0},n)}))})]},"servicePath".concat(r))}))})},M=function(t,e,n,r,c,a,s){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:30,l=[],u=Object(i.a)(l,2),h=u[0],j=u[1],f={},d={local:0,express:20,direct:40}[a],b=s>1?50:0;if(t.forEach((function(t){var e=n[t],c=r[t];if(!h&&0!==h)return j=e,h=c,void(f.start=[e,c]);0===c?c!==h&&(f.bifurcate=[j,h]):c!==h&&(f.bifurcate=[e,c]),f.end=[e,c],j=e,h=c})),f.hasOwnProperty("start")){if(f.hasOwnProperty("end")){if(f.hasOwnProperty("bifurcate")){var O=Object(i.a)(f.start,2),m=O[0],x=O[1],g=Object(i.a)(f.end,2),p=g[0],v=g[1];return"main"===e?"l"===c?v>x?"M ".concat(m-o,",").concat(x," H ").concat(p," V ").concat(v):"M ".concat(m,",").concat(x," V ").concat(v," H ").concat(p):v>x?"M ".concat(m,",").concat(x," H ").concat(p," V ").concat(v):"M ".concat(m,",").concat(x," V ").concat(v," H ").concat(p+o):v>x?"M ".concat(m-o,",").concat(x," H ").concat(p," V ").concat(v):"M ".concat(m,",").concat(x," V ").concat(v," H ").concat(p+o)}var y=Object(i.a)(f.start,2),_=y[0],S=y[1],k=f.end[0];return"main"===e?"l"===c?"M ".concat(_-o-d,",").concat(S," H ").concat(k):"M ".concat(_,",").concat(S," H ").concat(k+o+d):"l"===c?"M ".concat(_-o,",").concat(S," H ").concat(k+o+b):"M ".concat(_-o-b,",").concat(S," H ").concat(k+o)}var w=Object(i.a)(f.start,2),M=w[0],L=w[1];return"main"===e?"l"===c?"M ".concat(M-o-d,",").concat(L," H ").concat(M):"M ".concat(M,",").concat(L," H ").concat(M+o+d):"l"===c?"M ".concat(M,",").concat(L," L ").concat(M+o+b,",").concat(L):"M ".concat(M-o-b,",").concat(L," L ").concat(M,",").concat(L)}return""},L=function(t){var e=Object(j.c)((function(t){return t.param}));return Object(f.jsx)("g",{children:Object.keys(e.stn_list).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(e){return Object(f.jsx)("g",{transform:"translate(".concat(t.xs[e],",").concat(t.ys[e],")"),children:Object(f.jsx)(O,{stnId:e,stnState:t.stnStates[e]})},e)}))})},F=function(t){var e=Object(j.c)((function(t){return t.param}));if(1===t.servicesLevel.length)return Object(f.jsx)(f.Fragment,{});var n=t.servicesLevel.map((function(t){return{local:"\u666e\u901a\u8f66",express:"\u5927\u7ad9\u8f66",direct:"\u76f4\u8fbe\u8f66"}[t]})),r="r"===t.direction?t.lineXs[0]-42:t.lineXs[1]+42,c=2===t.servicesLevel.length?350:500;return Object(f.jsxs)("g",{children:[n.map((function(t,e){return Object(f.jsxs)("g",{transform:"translate(".concat(r,",").concat(25*e,")"),children:[Object(f.jsx)("rect",{x:-27.5,height:10,width:55,fill:"white",stroke:"black",y:-5}),Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:9,y:3,textAnchor:"middle",children:"".concat(t,"\u8fd0\u884c\u7ebf")})]},t)})),Object(f.jsxs)("g",{transform:"translate(".concat("r"===t.direction?30:e.svgWidth.railmap-c,",").concat(t.dy,")"),children:[Object(f.jsx)("text",{className:"rmg-name__zh",children:"\u56fe\u4f8b\uff1a"}),n.map((function(t,e){return Object(f.jsxs)("g",{transform:"translate(".concat(150*e+50,",0)"),children:[Object(f.jsx)("line",{x1:"0",x2:"35",y1:"-5",y2:"-5",stroke:"var(--rmg-theme-colour)",strokeWidth:"12",filter:2===e?"url(#contrast-direct)":1===e?"url(#contrast-express)":""}),Object(f.jsx)("use",{x:"17.5",y:"-5",xlinkHref:"#stn_sh",fill:"var(--rmg-theme-colour)"}),Object(f.jsx)("text",{x:"40",className:"rmg-name__zh",children:"".concat(t,"\u505c\u9760\u7ad9")})]},"serviceLevel".concat(e))}))]})]})},H=function(){var t=Object(j.c)((function(t){return t.param}));return c.a.useMemo((function(){return Object(f.jsxs)("g",{transform:"translate(".concat("l"===t.direction?50:t.svgWidth.railmap-150,",").concat(100-t.svg_height,")"),children:[Object(f.jsx)("text",{className:"rmg-name__zh",children:"\u5217\u8f66\u524d\u8fdb\u65b9\u5411"}),Object(f.jsx)("path",{d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-theme-colour)",transform:"translate(".concat("l"===t.direction?-30:125,",-5)rotate(").concat("l"===t.direction?0:180,")scale(0.15)")})]})}),[t.direction,t.svgWidth.railmap,t.svg_height])},z=r.memo((function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(W,{}),Object(f.jsx)(k,{})]})})),W=(e.default=z,r.memo((function(){return Object(f.jsxs)("defs",{children:[Object(f.jsx)("circle",{id:"stn_sh",fill:"var(--rmg-white)",strokeWidth:2,r:5}),Object(f.jsx)("path",{id:"int2_sh",fill:"var(--rmg-white)",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V10 a 5,5 0 1 1 -10,0Z"}),Object(f.jsx)("path",{id:"express_sh",fill:"var(--rmg-white)",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V25 a 5,5 0 1 1 -10,0Z"}),Object(f.jsx)("path",{id:"direct_sh",fill:"var(--rmg-white)",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V50 a 5,5 0 1 1 -10,0Z"}),Object(f.jsx)("rect",{id:"stn_sh_2020",stroke:"none",height:24,width:10,y:-18}),Object(f.jsx)("rect",{id:"stn_sh_2020_express",stroke:"none",height:49,width:10,y:-18}),Object(f.jsx)("rect",{id:"stn_sh_2020_direct",stroke:"none",height:74,width:10,y:-18}),Object(f.jsx)("rect",{id:"intbox_number",height:22,width:20,y:-11}),Object(f.jsxs)("g",{id:"intbox_maglev",transform:"translate(-25,0)",children:[Object(f.jsx)("rect",{id:"maglev_5",height:144,width:130,y:"40",x:"30",strokeWidth:10}),Object(f.jsx)("path",{id:"maglev_3",fill:"var(--rmg-white)",d:"m90,55a40,5 0 0 0 -40,3a5,5 0 0 0 -5,5a5,60 0 0 0 -3,60a5,5 0 0 0 5,5l96,0a5,5 0 0 0 5,-5a5,60 0 0 0 -3,-60a5,5 0 0 0 -5,-5a40,5 0 0 0 -40,-3l-5,-10l-5,10"}),Object(f.jsx)("path",{id:"maglev_4",fill:"var(--rmg-white)",d:"m90,140l-40,0a10,5 0 0 1 -10,-5l0,25a10,15 0 0 0 10,15l15,0l0,-10l-15,0l0,-15l90,0l0,15l-15,0l0,10l15,0a10,15 0 0 0 10,-15l0,-25a10,5 0 0 1 -10,5l-50,0"}),Object(f.jsx)("rect",{id:"maglev_1",height:"25",width:"40",y:"80",x:"50"}),Object(f.jsx)("rect",{id:"maglev_2",height:"25",width:"40",y:"80",x:"100"})]}),Object(f.jsxs)("g",{id:"airport",transform:"scale(0.5)",children:[Object(f.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"var(--rmg-grey)"}),Object(f.jsx)("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"var(--rmg-white)"})]}),Object(f.jsxs)("g",{id:"disney",transform:"scale(0.5)",children:[Object(f.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"var(--rmg-grey)"}),Object(f.jsx)("path",{fill:"var(--rmg-white)",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"})]}),Object(f.jsxs)("g",{id:"railway",children:[Object(f.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"var(--rmg-grey)",transform:"translate(0,-2)scale(0.5)"}),Object(f.jsx)("path",{fill:"var(--rmg-white)",d:"M169,273.5c0-19,14.7-34.8,33.7-36.3c18.9-1.5,38.1-2.2,57.4-2.2c19.3,0,38.4,0.8,57.3,2.2  c19,1.5,33.7,17.3,33.7,36.3v47.3l-51.3,14.7c-11.2,3.2-18.9,13.4-18.9,25v147.8c0,17.4,12.2,32.3,29.3,35.7l110.6,22.1  c4.9,1,8.4,5.2,8.4,10.2V599H91v-22.7c0-5,3.5-9.2,8.4-10.2L209.9,544c17-3.4,29.3-18.3,29.3-35.7V360.5c0-11.6-7.7-21.8-18.9-25  L169,320.8V273.5z M309.4,31.7c0.2-1.2,0.3-2.4,0.3-3.6c0-14-11.1-25.4-24.9-26C276.6,1.4,268.3,1,260,1c-8.3,0-16.6,0.4-24.7,1.1  c-13.9,0.6-24.9,12-24.9,26c0,1.2,0.1,2.5,0.3,3.6C90.6,54.8,0,160.3,0,287c0,97.2,53.4,182,132.4,226.6l36.8-48.1  C104.3,432.4,59.8,364.9,59.8,287c0-110.6,89.6-200.2,200.2-200.2S460.2,176.4,460.2,287c0,77.9-44.5,145.4-109.4,178.5  c15,19.6,25.6,33.5,36.8,48.1C466.6,469,520,384.2,520,287C520,160.3,429.4,54.8,309.4,31.7z",transform:"translate(-10,0)scale(0.04)"})]}),Object(f.jsx)("marker",{id:"arrow_gray",viewBox:"-1.5 0 3 1.5",refY:.5,children:Object(f.jsx)("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-grey)"})}),Object(f.jsx)("marker",{id:"arrow_theme_left",refX:1,refY:.5,children:Object(f.jsx)("path",{d:"M1,0L0,1H1z",fill:"var(--rmg-theme-colour)"})}),Object(f.jsx)("marker",{id:"arrow_theme_right",refY:.5,children:Object(f.jsx)("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-theme-colour)"})}),Object(f.jsx)("filter",{id:"contrast-direct",filterUnits:"userSpaceOnUse",children:Object(f.jsxs)("feComponentTransfer",{children:[Object(f.jsx)("feFuncR",{type:"linear",slope:.5,intercept:.25}),Object(f.jsx)("feFuncG",{type:"linear",slope:.5,intercept:.25}),Object(f.jsx)("feFuncB",{type:"linear",slope:.5,intercept:.25})]})}),Object(f.jsx)("filter",{id:"contrast-express",filterUnits:"userSpaceOnUse",children:Object(f.jsxs)("feComponentTransfer",{children:[Object(f.jsx)("feFuncR",{type:"linear",slope:.75,intercept:.125}),Object(f.jsx)("feFuncG",{type:"linear",slope:.75,intercept:.125}),Object(f.jsx)("feFuncB",{type:"linear",slope:.75,intercept:.125})]})}),Object(f.jsxs)("filter",{id:"groupborder",filterUnits:"userSpaceOnUse",x:"0",y:"-300",width:"3000",height:"500",children:[Object(f.jsx)("feMorphology",{operator:"dilate",in:"SourceAlpha",radius:"0",result:"e1"}),Object(f.jsx)("feMorphology",{operator:"dilate",in:"SourceAlpha",radius:"1",result:"e2"}),Object(f.jsx)("feComposite",{in:"e1",in2:"e2",operator:"xor",result:"outline"}),Object(f.jsx)("feComposite",{in:"outline2",in2:"SourceGraphic",operator:"over",result:"output"})]}),Object(f.jsxs)("filter",{id:"colorreplace",colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",x:"0",y:"-1000",width:"5000",height:"2000",children:[Object(f.jsxs)("feComponentTransfer",{in:"SourceGraphic",children:[Object(f.jsx)("feFuncR",{type:"discrete",tableValues:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"}),Object(f.jsx)("feFuncG",{type:"discrete",tableValues:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"}),Object(f.jsx)("feFuncB",{type:"discrete",tableValues:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"})]}),Object(f.jsx)("feColorMatrix",{type:"matrix",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 1 1 1 1 -3",result:"selectedColor1"}),Object(f.jsx)("feMorphology",{operator:"erode",in:"selectedColor1",radius:"0",result:"e1"}),Object(f.jsx)("feMorphology",{operator:"erode",in:"selectedColor1",radius:"1",result:"e2"}),Object(f.jsx)("feComposite",{in:"e1",in2:"e2",operator:"xor",result:"uncoloredOutline"}),Object(f.jsx)("feFlood",{floodColor:"rgb(0,0,0)"}),Object(f.jsx)("feComposite",{operator:"in",in2:"uncoloredOutline",result:"outline"}),Object(f.jsx)("feComposite",{in:"outline",in2:"selectedColor1",operator:"over",result:"result"}),Object(f.jsx)("feComposite",{in:"result",in2:"SourceGraphic",operator:"over"})]})]})})))}}]);
//# sourceMappingURL=railmapSHMetro.2facf7fb.chunk.js.map