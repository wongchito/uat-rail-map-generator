(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[95],{162:function(t,n,e){"use strict";e.r(n),e.d(n,"DefsSHMetro",(function(){return p}));var r=e(4),c=e(1),i=e(5),a=e.n(i),s=e(38),o=e(36),l=e(12),u=e(8),h=e(0),d=["stnName","nameDirection"],f=function(t){var n=Object(u.c)((function(t){return t.param})),e=n.stn_list[t.stnId],r="";return r=e.transfer.info.flat().length>0?"int2_indoor_sh":"stn_indoor_sh",Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j,{name:e.name,infos:e.transfer.info,stnState:t.stnState,direction:n.direction,nameDirection:t.nameDirection}),Object(h.jsx)("use",{xlinkHref:"#".concat(r),stroke:"var(--rmg-theme-colour)"})]})},j=function(t){var n,e,r,c;return Object(h.jsxs)("g",{transform:"translate(0,".concat("upward"===t.nameDirection?60:-30,")"),children:[Object(h.jsx)("line",{x1:-30,x2:30,y1:"upward"===t.nameDirection?-23:-10,y2:"upward"===t.nameDirection?-23:-10,stroke:"black"}),Object(h.jsx)("line",{y1:"upward"===t.nameDirection?-23:-10,y2:"upward"===t.nameDirection?-48:20,stroke:"black"}),[].concat(Object(l.a)(t.infos[0]),Object(l.a)(t.infos[1]||[])).length>0&&Object(h.jsx)(g,{intInfos:[].concat(Object(l.a)(t.infos[0]),Object(l.a)(t.infos[1]||[])),arrowDirection:t.nameDirection}),Object(h.jsx)(m,{stnName:t.name,nameDirection:t.nameDirection,fill:"black"}),(null===(n=t.infos[1])||void 0===n?void 0:n.length)>0&&Object(h.jsx)("g",{transform:"translate(0,".concat("upward"===t.nameDirection?-185:150,")"),children:Object(h.jsx)(b,{osiInfos:t.infos[1]})}),(null===(e=t.infos[2])||void 0===e?void 0:e.length)>0&&Object(h.jsx)("g",{transform:"translate(0,".concat("upward"===t.nameDirection?(null===(r=t.infos[1])||void 0===r?void 0:r.length)?-210:t.infos[0].length?-180:-100:(null===(c=t.infos[1])||void 0===c?void 0:c.length)?190:t.infos[0].length?160:75,")"),children:Object(h.jsx)(O,{osysiInfos:t.infos[2]})})]})},m=a.a.forwardRef((function(t,n){var e=t.stnName,r=t.nameDirection,i=Object(o.a)(t,d),s=e[0].split("\\"),u=e[1].split("\\").length;return Object(h.jsx)("g",Object(c.a)(Object(c.a)({ref:n},i),{},{textAnchor:"middle",transform:"translate(0,".concat("upward"===r?-2:-30-12*(u-1),")"),children:a.a.useMemo((function(){return Object(h.jsxs)(h.Fragment,{children:[s.map((function(t,n,e){return Object(h.jsx)("text",{className:"rmg-name__zh",dy:"upward"===r?16*n:-16*(e.length-1-n),children:t},n)})),Object(h.jsx)("g",{fontSize:9.6,children:e[1].split("\\").map((function(t,n){return Object(h.jsx)("text",{className:"rmg-name__en",dy:12*(n+1)+("upward"===r&&s.length>1?7.5*s.length:0),children:t},n)}))})]})}),Object(l.a)(e))}))})),g=function(t){var n=t.intInfos,e=t.arrowDirection,r=n.map((function(t){return t[2]})).reduce((function(t,n){return t+n}),""),c=[n.filter((function(t){return t[4].match(/^\d+.*$/)})).map((function(t){return t[4].replace(/^(\d+)(.*)$/,"$1")})).join("\uff0c").concat("\u53f7\u7ebf"),n.filter((function(t){return!t[4].match(/^\d+.*$/)})).map((function(t){return t[4]})).join("\uff0c")].filter((function(t){return t&&"\u53f7\u7ebf"!==t})).join("\uff0c"),i=["Line ".concat(n.filter((function(t){return t[5].match(/^L|line$/)})).map((function(t){return t[5].replace("Line","").replace("line","").trim()})).join(",")),n.filter((function(t){return!t[5].match(/^L|line$/)})).map((function(t){return t[5]})).join("\uff0c")].filter((function(t){return t&&"Line "!==t})).join(",");return Object(h.jsxs)("g",{children:[Object(h.jsx)("use",{xlinkHref:"#int_indoor_arrow_sh",transform:"translate(0,".concat("upward"===e?-74:44,")rotate(").concat("upward"===e?0:180,")"),fill:1===n.length?n[0][2]:"url(#grad".concat(r,")")}),n.length>1&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("linearGradient",{id:"grad".concat(r),y1:"0",y2:"0",x1:"upward"===e?"25%":"75%",x2:"upward"===e?"75%":"25%",children:n.map((function(t,e){return Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)("stop",{offset:"".concat(100/n.length*(e+0),"%"),stopColor:t[2]}),Object(h.jsx)("stop",{offset:"".concat(100/n.length*(e+1),"%"),stopColor:t[2]})]},e)}))})}),Object(h.jsxs)("g",{transform:"translate(0,".concat("upward"===e?-145:125,")"),textAnchor:"middle",children:[Object(h.jsx)("text",{className:"rmg-name__zh",dy:-7,children:"\u6362\u4e58".concat(c)}),Object(h.jsx)("text",{className:"rmg-name__en",dy:5,fontSize:9.6,children:"Interchange ".concat(i)})]})]})},b=function(t){return a.a.useMemo((function(){return Object(h.jsxs)("g",{textAnchor:"middle",fontSize:"50%",children:[Object(h.jsx)("text",{className:"rmg-name__zh",dy:-5,children:"\u6362\u4e58".concat(t.osiInfos.map((function(t){return t[4]})).join("\uff0c"))}),Object(h.jsx)("text",{className:"rmg-name__zh",dy:5,children:"\u4ec5\u9650\u516c\u5171\u4ea4\u901a\u5361"}),Object(h.jsx)("text",{className:"rmg-name__en",dy:12.5,fontSize:"75%",children:"Only for Public Transportation Card"})]})}),[t.osiInfos.toString()])},O=function(t){return a.a.useMemo((function(){return Object(h.jsxs)("g",{textAnchor:"middle",children:[Object(h.jsx)("text",{className:"rmg-name__zh",dy:-5,children:"\u8f6c\u4e58".concat(t.osysiInfos.map((function(t){return t[4]})).join("\uff0c"))}),Object(h.jsx)("text",{className:"rmg-name__en",dy:7.5,fontSize:9.6,children:"To ".concat(t.osysiInfos.map((function(t){return t[5]})).join(", "))})]})}),[t.osysiInfos.toString()])},x=e(86),p=(n.default=Object(i.memo)((function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{}),Object(h.jsx)(y,{})]})})),a.a.memo((function(){return Object(h.jsxs)("defs",{children:[Object(h.jsx)("circle",{id:"stn_indoor_sh",fill:"var(--rmg-white)",strokeWidth:5,stroke:"var(--rmg-theme-colour)",r:8,transform:"scale(1.5)"}),Object(h.jsx)("path",{id:"int2_indoor_sh",fill:"var(--rmg-white)",strokeWidth:4,d:"M -5,0 a 5,5 0 1 1 10,0 V10 a 5,5 0 1 1 -10,0Z",stroke:"black",transform:"translate(0, -10)scale(2)"}),Object(h.jsx)("path",{id:"int_indoor_arrow_sh",stroke:"var(--rmg-black)",strokeWidth:1,d:"M -7.5,0 v -40 h -7.5 l 15,-15 l 15,15 h -7.5 v 40 Z "})]})}))),_=function(t,n){var e=0;return 2===t[n].parents.length&&(e+=1),2===t[t[n].parents[0]].children.length&&(e+=1),e},v=function(t,n){var e=0;return 2===t[n].children.length&&(e+=1),2===t[t[n].children[0]].parents.length&&(e+=1),e},y=function(){var t=Object(u.c)((function(t){return t.helper})),n=t.routes,e=t.branches,o=t.depsStr,l=Object(u.c)((function(t){return t.param})),d=Object(s.b)(l.stn_list,_,v),f=Object(s.c)("linestart","lineend",d),j=Object(s.c)(f.nodes[1],f.nodes.slice(-2)[0],d),m=a.a.useMemo((function(){return console.log("computing x shares"),Object.keys(l.stn_list).reduce((function(t,n){return Object(c.a)(Object(c.a)({},t),{},Object(r.a)({},n,Object(s.f)(n,d,e)))}),{})}),[e.toString(),JSON.stringify(d)]),g=[l.svgWidth.indoor*l.padding/100,l.svgWidth.indoor*(1-l.padding/100)],b=Object.keys(m).reduce((function(t,n){return Object(c.a)(Object(c.a)({},t),{},Object(r.a)({},n,g[0]+m[n]/j.len*(g[1]-g[0])))}),{}),O=Object(i.useMemo)((function(){return x.a.getYShares(l.stn_list,e)}),[o]),p=Object.keys(O).reduce((function(t,n){return Object(c.a)(Object(c.a)({},t),{},Object(r.a)({},n,O[n]*l.branch_spacing*2))}),{}),y=a.a.useMemo((function(){return Object(s.e)(l.current_stn_idx,n,l.direction)}),[l.current_stn_idx,l.direction,n.toString()]),L=x.a.drawLine(e,y,l.stn_list,g,b,p,2*l.branch_spacing,f,0);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("g",{id:"main",transform:"translate(0,".concat(l.svg_height/2,")"),children:[Object(h.jsx)(S,{paths:L}),Object(h.jsx)(k,{xs:b,ys:p,xShares:m,stnStates:y})]}),Object(h.jsx)(w,{})]})},S=a.a.memo((function(t){return Object(h.jsx)("g",{fill:"none",strokeWidth:12,children:Object(h.jsxs)("g",{stroke:"var(--rmg-theme-colour)",children:[t.paths.main.map((function(t,n){return Object(h.jsx)("path",{d:t},n)})),t.paths.pass.map((function(t,n){return Object(h.jsx)("path",{d:t},n)}))]})})}),(function(t,n){return JSON.stringify(t.paths)===JSON.stringify(n.paths)})),k=function(t){var n=Object(u.c)((function(t){return t.helper})).branches,e=Object(u.c)((function(t){return t.param}));return Object(h.jsx)("g",{children:Object.keys(e.stn_list).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(e){return Object(h.jsx)("g",{transform:"translate(".concat(t.xs[e],",").concat(t.ys[e],")"),children:Object(h.jsx)(f,{stnId:e,stnState:t.stnStates[e],nameDirection:n.filter((function(t){return t.includes(e)})).map((function(t){return t.indexOf(e)%2===0?"downward":"upward"}))[0]})},e)}))})},w=function(){var t=Object(u.c)((function(t){return t.param}));return a.a.useMemo((function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("g",{transform:"translate(".concat(t.svgWidth.indoor/2,",50)"),children:Object(h.jsxs)("text",{textAnchor:"middle",fontSize:"30",className:"rmg-name__zh",children:["\u8f68\u9053\u4ea4\u901a",t.line_name[0],"\u8fd0\u8425\u7ebf\u8def\u793a\u610f\u56fe"]})}),Object(h.jsxs)("g",{transform:"translate(".concat(t.svgWidth.indoor/2,",").concat(t.svg_height-300,")"),children:[Object(h.jsx)("text",{textAnchor:"middle",fontSize:"18",className:"rmg-name__zh",dx:"-30",dy:"230",children:"\u53cb\u60c5\u63d0\u793a\uff1a\u8bf7\u7559\u610f\u60a8\u9700\u8981\u6362\u4e58\u7ebf\u8def\u7684\u9996\u672b\u73ed\u65f6\u95f4\uff0c\u4ee5\u514d\u803d\u8bef\u60a8\u7684\u51fa\u884c\uff0c\u672b\u73ed\u8f66\u8fdb\u7ad9\u524d\u4e09\u5206\u949f\u505c\u552e\u8be5\u672b\u73ed\u8f66\u8f66\u7968\u3002"}),Object(h.jsx)("text",{textAnchor:"middle",fontSize:"12",className:"rmg-name__en",dx:"10",dy:"250",children:"Please pay attention to the interchange schedule if you want to transfer to other lines. Stop selling tickets 3 minutes before the last train services."}),Object(h.jsxs)("g",{transform:"translate(-600,215)",children:[Object(h.jsx)("rect",{x:"-5",y:"-25",width:"100",height:"70",fill:"none",stroke:"black",rx:"5"}),Object(h.jsx)("line",{x1:"30",x2:"30",y1:"-20",y2:"40",stroke:"black"}),Object(h.jsx)("text",{className:"rmg-name__zh",dx:"3",fontSize:"18",children:"\u56fe"}),Object(h.jsx)("text",{className:"rmg-name__zh",dx:"3",dy:"18",fontSize:"18",children:"\u4f8b"}),Object(h.jsx)("text",{className:"rmg-name__en",dy:"35",fontSize:"8",children:"legend"}),Object(h.jsx)("use",{transform:"translate(45,10)",xlinkHref:"#int2_indoor_sh",stroke:"var(--rmg-theme-colour)"}),Object(h.jsx)("text",{className:"rmg-name__zh",dx:"60",dy:"10",fontSize:"10",children:"\u6362\u4e58\u7ad9"}),Object(h.jsx)("text",{className:"rmg-name__en",dx:"60",dy:"20",fontSize:"6",children:"Interchange"}),Object(h.jsx)("text",{className:"rmg-name__en",dx:"60",dy:"30",fontSize:"6",children:"Station"})]})]})]})}),[t.svgWidth.indoor,t.svg_height,t.line_name])}},36:function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,c=function(t,n){if(null==t)return{};var e,r,c={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(c[e]=t[e]);return c}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(c[e]=t[e])}return c}e.d(n,"a",(function(){return r}))},37:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function t(n,e){if(["linestart","lineend"].includes(n)||e[n].parents.length>1||e[n].children.length>1)return 0;var r=e[n].parents[0];return r?1===e[r].children.length?t(r,e):0===e[r].children.indexOf(n)?1:-1:0}},38:function(t,n,e){"use strict";e.d(n,"b",(function(){return h})),e.d(n,"c",(function(){return d})),e.d(n,"f",(function(){return f})),e.d(n,"e",(function(){return j})),e.d(n,"a",(function(){return m})),e.d(n,"d",(function(){return g}));var r=e(11),c=e(19),i=e(20),a=e(12),s=e(24),o=e(4),l=e(1),u=(e(37),e(2)),h=function(t,n,e){return Object.keys(t).reduce((function(r,c){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},c,t[c].children.reduce((function(r,i){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},i,1+n(t,i)+e(t,c)))}),{})))}),{})},d=function t(n,e,r){if(n===e)return{len:0,nodes:[n]};var c=[],i=[];Object.keys(r[n]).forEach((function(a){var s=t(a,e,r);s.len<0||(c.push(r[n][a]+s.len),s.nodes.unshift(n),i.push(s.nodes))}));var a=Math.max.apply(Math,c);return{len:a,nodes:i[c.indexOf(a)]}},f=function(t,n,e){var r=d("linestart","lineend",n);if(r.nodes.includes(t))return d(r.nodes[1],t,n).len;for(var c=e.filter((function(n){return n.includes(t)}))[0],i=t;!r.nodes.includes(i);)i=c[c.indexOf(i)-1];for(var a=t;!r.nodes.includes(a);)a=c[c.indexOf(a)+1];var s="linestart"===i,o=[];return s||"lineend"===a?s?(o[0]=0,o[1]=d(r.nodes[1],a,n).len,o[2]=d(c[1],t,n).len,o[3]=d(t,a,n).len):(o[0]=d(r.nodes[1],i,n).len,o[1]=d(i,r.nodes.slice(-2)[0],n).len,o[2]=d(i,t,n).len,o[3]=d(t,c.slice(-2)[0],n).len):(o[0]=d(r.nodes[1],i,n).len,o[1]=d(i,a,n).len,o[2]=d(i,t,n).len,o[3]=d(t,a,n).len),o[0]+o[2]*o[1]/(o[2]+o[3])},j=function(t,n,e){var r;return console.log("computing stations' states"),Object(a.a)(new Set((r=[]).concat.apply(r,Object(a.a)(n)))).reduce((function(r,c){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},c,c===t?0:(e===u.m.right?function(t,n,e){var r,c=Object(s.a)(e);try{for(c.s();!(r=c.n()).done;){var i=r.value,a=i.indexOf(t),o=i.indexOf(n);if(-1!==a&&a<o)return!0}}catch(l){c.e(l)}finally{c.f()}return!1}(t,c,n):function(t,n,e){var r,c=Object(s.a)(e);try{for(c.s();!(r=c.n()).done;){var i=r.value,a=i.indexOf(t),o=i.indexOf(n);if(-1!==o&&o<a)return!0}}catch(l){c.e(l)}finally{c.f()}return!1}(t,c,n))?1:-1))}),{})},m=function(){function t(n){var e=this;Object(c.a)(this,t),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(t){return 0},this.rightWideFactor=function(t){return 0},this.pathWeight=function(t,n){return e.stnList[t].children.includes(n)?1+e.rightWideFactor(t)+e.leftWideFactor(n):-1/0},this.pathTurnParams=function(t){var n=35-17.5*Math.sqrt(3),e=t-2*n;return{tr:35,dx_a:17.5,dy_a:n,dx_l:e*Math.sqrt(3),dy_l:e}},this.pathTurnSE=function(t){var n=e.pathTurnParams(t),r=n.tr,c=n.dx_a,i=n.dy_a,a=n.dx_l,s=n.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(i," l ").concat(a,",").concat(s," a ").concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(i)},this.pathTurnNE=function(t){var n=e.pathTurnParams(t),r=n.tr,c=n.dx_a,i=n.dy_a,a=n.dx_l,s=n.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(-i," l ").concat(a,",").concat(-s," a ").concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(-i)},this.stnList=n.stnList,this.criticalPath=n.criticalPath}return Object(i.a)(t,[{key:"getYShare",value:function(t,n){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;var e=this.stnList[t].parents[0];if(e){if(1===this.stnList[e].children.length){var r=this.getYShare(e);return this.yShares[t]=r,r}var c=0===this.stnList[e].children.indexOf(t)?1:-1;return this.yShares[t]=c,c}return this.yShares[t]=0,0}},{key:"_linePath",value:function(t,n,e,c,i,a,s,o){var l=this,u=Object(r.a)([],3),h=u[0],d=u[1],f=u[2],j=[],m=this.pathTurnParams(a),g=m.dx_a+m.dx_l/2,b=(n[1]-n[0])/s.len*2,O=((n[1]-n[0])/s.len-2*g)/2;return O+b<0&&console.warn("SVG width too small! ".concat(O+b)),t.forEach((function(n){var r=c[n],s=i[n];if(!d&&0!==d)return h=n,f=r,d=s,void(1===t.length?j.push("M ".concat(r,",").concat(s)):e[0].includes(n)?e[0].includes(t[1])?j.push("M ".concat(r,",").concat(s)):(c[t[1]]>0&&j.push("M ".concat(r,",").concat(s+o)),i[t[1]]<0&&j.push("M ".concat(r,",").concat(s-o))):j.push("M ".concat(r,",").concat(s)));s>d?(j.push("h ".concat(0===s?r-f-b*l.leftWideFactor(n)-O-2*g:b*l.rightWideFactor(h)+O)),j.push(l.pathTurnSE(a))):s<d&&(j.push("h ".concat(0===s?r-f-b*l.leftWideFactor(n)-O-2*g:b*l.rightWideFactor(h)+O)),j.push(l.pathTurnNE(a))),j.push("H ".concat(r)),h=n,f=r,d=s})),j.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(t,n){console.log("computing y shares");var e=new this({stnList:t});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in e.yShares||e.getYShare(t,n)})),e.yShares}},{key:"drawLine",value:function(t,n,e,r,c,i,a,s){var o=this,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:9.68,u={main:[],pass:[]};return t.forEach((function(h,d){var f=(h=h.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return n[t]>=0})),j=h.filter((function(t){return n[t]<=0}));1===f.length&&(j=h),0===f.filter((function(t){return-1!==j.indexOf(t)})).length&&f.length&&(j[0]===h[0]?j.push(f[0]):f[0]===h[0]&&f[f.length-1]===h[h.length-1]&&j.length?(j=h,f=[]):j.unshift(f[f.length-1])),u.main.push(new o({stnList:e,criticalPath:s})._linePath(f,r,t,c,i,a,s,l)),u.pass.push(new o({stnList:e,criticalPath:s})._linePath(j,r,t,c,i,a,s,l))})),u}}]),t}(),g=function(t,n){var e={main:[],pass:[]};return t.forEach((function(t){var r=(t=t.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return n[t]>=0})),c=t.filter((function(t){return n[t]<=0}));1===r.length&&(c=t),0===r.filter((function(t){return-1!==c.indexOf(t)})).length&&r.length&&(c[0]===t[0]?c.push(r[0]):r[0]===t[0]&&r[r.length-1]===t[t.length-1]&&c.length?(c=t,r=[]):c.unshift(r[r.length-1])),e.main.push(r),e.pass.push(c)})),e}},86:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(19),c=e(27),i=e(26),a=function(t){Object(c.a)(e,t);var n=Object(i.a)(e);function e(){var t;Object(r.a)(this,e);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=n.call.apply(n,[this].concat(i))).leftWideFactor=function(n){var e=0,r=t.stnList[n].transfer,c=r.info.map((function(t){return t.length}));return"l"===r.tick_direc&&(!c[1]&&c[0]>1&&(e+=.8),!c[1]||1===c[0]&&2===c[1]||(e+=.8)),1===c[0]&&2===c[1]&&"linestart"!==t.stnList[n].parents[0]&&"lineend"!==t.stnList[n].children[0]&&(e+=.8),2===t.stnList[n].parents.length&&(e+=.4),2===t.stnList[t.stnList[n].parents[0]].children.length&&(e+=.4),e},t.rightWideFactor=function(n){var e=0,r=t.stnList[n].transfer,c=r.info.map((function(t){return t.length}));return"r"===r.tick_direc&&(!c[1]&&c[0]>1&&(e+=.8),!c[1]||1===c[0]&&2===c[1]||(e+=.8)),1===c[0]&&2===c[1]&&"linestart"!==t.stnList[n].parents[0]&&"lineend"!==t.stnList[n].children[0]&&(e+=.8),2===t.stnList[n].children.length&&(e+=.4),2===t.stnList[t.stnList[n].children[0]].parents.length&&(e+=.4),e},t}return e}(e(38).a)}}]);
//# sourceMappingURL=indoorSHMetro.d6f4d716.chunk.js.map