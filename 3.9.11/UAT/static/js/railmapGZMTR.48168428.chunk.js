(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[95],{137:function(t,e,n){"use strict";n.r(e);var r=n(10),c=n(36),a=n(0),s=n(2),i=n(13),o=n(4),l=n.n(o),u=n(21),h=n(74),j=n(75),d=n(3),f=n(1),m=Object(o.memo)((function(t){return Object(f.jsxs)("g",{textAnchor:"middle",fill:-1===t.stnState?d.h.white:t.info[3],children:[Object(f.jsx)("use",{xlinkHref:"#intbox",fill:-1===t.stnState?"#aaa":t.info[2]}),t.info[4][0]===t.info[5][0]?Object(f.jsx)(b,{name:t.info.slice(-2)}):Object(f.jsx)(O,{name:t.info.slice(-2)})]})}),(function(t,e){return t.info.toString()===e.info.toString()&&t.stnState===e.stnState})),O=Object(o.memo)((function(t){var e,n=[],c=0;null===(e=t.name[0].match(/\d+|\D+/g))||void 0===e||e.forEach((function(t,e){isNaN(Number(t))?(n.push(Object(f.jsx)("tspan",{dominantBaseline:"hanging",dy:1-c,children:t},e)),c+=1-c):(n.push(Object(f.jsx)("tspan",{dominantBaseline:"hanging",fontSize:16,dy:-c,children:t},e)),c=0)}));var a=Object(o.useRef)(null),s=Object(o.useState)({width:0}),i=Object(r.a)(s,2),l=i[0],u=i[1];Object(o.useEffect)((function(){return u(a.current.getBBox())}),[t.name[0]]);var h=l.width>43.5?43.5/l.width:1,j=Object(o.useRef)(null),d=Object(o.useState)({width:0}),m=Object(r.a)(d,2),O=m[0],b=m[1];Object(o.useEffect)((function(){return b(j.current.getBBox())}),[t.name[1]]);var g=O.width>43.5?43.5/O.width:1;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("text",{ref:a,y:navigator.userAgent.includes("Firefox")?-.5:2,className:"rmg-name__zh",fontSize:12,transform:"scale(".concat(h,",1)"),children:n}),Object(f.jsx)("text",{ref:j,y:19.5,fontSize:t.name[1].replace("\\"," ").length>10?7:8,className:"rmg-name__en",transform:"scale(".concat(g,",1)"),children:t.name[1]})]})}),(function(t,e){return t.name.toString()===e.name.toString()})),b=Object(o.memo)((function(t){var e="";for(var n in Object(i.a)(t.name[0])){if(t.name[0][n]!==t.name[1][n])break;e+=t.name[0][n]}var c=Object(o.useRef)(null),a=Object(o.useState)({x:0,width:0}),s=Object(r.a)(a,2),l=s[0],u=s[1];Object(o.useEffect)((function(){return u(c.current.getBBox())}),[t.name.toString()]);var h=l.width>43.5?43.5/l.width:1;return Object(f.jsx)("g",{transform:"scale(".concat(h,",1)"),children:Object(f.jsx)("g",{transform:"translate(".concat(-l.x-l.width/2,",0)"),children:Object(f.jsxs)("text",{ref:c,className:"rmg-name__zh",fontSize:14,y:12,textAnchor:"end",children:[e,Object(f.jsx)("tspan",{className:"rmg-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:t.name[0].slice(e.length)}),Object(f.jsx)("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:t.name[1].slice(e.length).trim()})]})})})}),(function(t,e){return t.name.toString()===e.name.toString()})),g=["intInfos","stnState","tickRotation"],x=["intInfos","tickRotation","stnState"],p=function(t){var e=Object(o.useContext)(u.a).param,n=e.stn_list[t.stnId],r=2===n.parents.length||2===n.children.length,c=t.stnY>0||1===n.parents.indexOf(n.branch.left[1]||"")||1===n.children.indexOf(n.branch.right[1]||"")?180:0,a=n.name[1].split("\\").length,s=r?180===c?16+12*(a-1)*Math.cos(-45):-9:180===c?-6:(25+15*(a-1))*Math.cos(-45);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(z,{intInfos:r?[[e.theme[0],e.theme[1],"var(--rmg-theme-colour)","var(--rmg-theme-fg)",e.line_name[0],e.line_name[1]]].concat(n.transfer.info[0]):n.transfer.info[0],stnState:t.stnState,tickRotation:c}),Object(f.jsxs)("g",{children:[Object(f.jsx)("use",{xlinkHref:"#stn",stroke:-1===t.stnState?"#aaa":"var(--rmg-theme-colour)"}),Object(f.jsx)(j.a,{className:"Name ".concat(-1===t.stnState?"Pass":"Future"),lineNum:e.line_num,stnNum:n.num})]}),Object(f.jsx)("g",{transform:"translate(".concat(-s,",0)"),children:Object(f.jsx)(_,{name:n.name,secondaryName:n.secondaryName,stnState:t.stnState,tickRotation:c,isExpress:n.services.includes(d.l.express)})})]})},_=function(t){var e=180===t.tickRotation?17.5:-20-14*t.name[1].split("\\").length*Math.cos(-45),n=Object(o.useRef)(null),c=Object(o.useState)({width:0}),a=Object(r.a)(c,2),s=a[0],i=a[1];Object(o.useEffect)((function(){return i(n.current.getBBox())}),[t.name.toString()]);var l=Object(o.useRef)(null),u=Object(o.useState)({x:0,width:-20}),h=Object(r.a)(u,2),j=h[0],d=h[1];return Object(o.useEffect)((function(){l.current?d(l.current.getBBox()):d((function(t){return{x:t.x,width:-20}}))}),[t.secondaryName.toString()]),Object(f.jsxs)("g",{textAnchor:180===t.tickRotation?"end":"start",className:"Name ".concat(-1===t.stnState?"Pass":0===t.stnState?"CurrentGZ":"Future"),transform:"translate(0,".concat(e,")rotate(-45)"),children:[Object(f.jsx)(v,{ref:n,name:t.name}),t.secondaryName&&Object(f.jsxs)("g",{transform:"translate(".concat((s.width+j.width/2+10)*(180===t.tickRotation?-1:1),",").concat(2+5*(t.name[1].split("\\").length-1),")"),className:"Name ".concat(-1===t.stnState?"Pass":"Future"),children:[Object(f.jsxs)("g",{transform:"translate(0,3)",fontSize:18,children:[Object(f.jsx)("text",{textAnchor:"end",x:j.x-3,className:"rmg-name__zh",children:"("}),Object(f.jsx)("text",{textAnchor:"start",x:j.width+j.x+3,className:"rmg-name__zh",children:")"})]}),Object(f.jsx)(y,{ref:l,secName:t.secondaryName})]}),t.isExpress&&Object(f.jsx)(S,{fill:-1===t.stnState?"#aaa":"var(--rmg-theme-colour)",transform:"translate(".concat((s.width+j.width+20+35)*(180===t.tickRotation?-1:1),",").concat(2+5*(t.name[1].split("\\").length-1),")")})]})},v=Object(o.forwardRef)((function(t,e){return Object(o.useMemo)((function(){return Object(f.jsxs)("g",{ref:e,children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:18,children:t.name[0]}),Object(f.jsx)("g",{fontSize:10.5,children:t.name[1].split("\\").map((function(t,e){return Object(f.jsx)("text",{className:"rmg-name__en",dy:16+11*e,children:t},e)}))})]})}),[t.name[0],t.name[1]])})),y=Object(o.forwardRef)((function(t,e){return Object(o.useMemo)((function(){return Object(f.jsxs)("g",{ref:e,textAnchor:"middle",children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:13,children:t.secName[0]}),Object(f.jsx)("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:t.secName[1]})]})}),[t.secName.toString()])})),S=l.a.memo((function(t){return Object(f.jsxs)("g",Object(a.a)(Object(a.a)({textAnchor:"middle"},t),{},{children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:13,children:"\u5feb\u8f66\u505c\u9760\u7ad9"}),Object(f.jsx)("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:"Express Station"})]}))})),z=function(t){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,Object(a.a)({strokeWidth:4},t)),Object(f.jsx)(N,Object(a.a)({transform:"translate(0,".concat(180===t.tickRotation?-47:23,")")},t))]})},w=function(t){var e=t.intInfos,n=t.stnState,r=t.tickRotation,s=Object(c.a)(t,g);return Object(f.jsx)("g",Object(a.a)(Object(a.a)({},s),{},{children:e.map((function(t,c){return Object(f.jsx)("use",{xlinkHref:"#inttick",stroke:-1===n?"#aaa":t[2],transform:"translate(".concat(-2*(e.length-1)+4*c,",0)rotate(").concat(180===r?180:0,")")},c)}))}))},N=function(t){var e=t.intInfos,n=t.tickRotation,r=t.stnState,s=Object(c.a)(t,x);return Object(f.jsx)("g",Object(a.a)(Object(a.a)({},s),{},{children:e.map((function(t,e){return Object(f.jsx)("g",{transform:"translate(0,".concat(28*e*(180===n?-1:1),")"),children:Object(f.jsx)(m,{info:t,stnState:r})},e)}))}))},k=n(37),M=function(t,e){return 2===t[e].parents.length||2===t[e].children.length?.25:0},P=function(){var t,e=l.a.useContext(u.a),n=e.param,r=e.branches,c=e.routes,i=e.deps,h=Object(k.b)(n.stn_list,M,M),j=Object(o.useMemo)((function(){return console.log("computing x shares"),Object.keys(n.stn_list).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,function(t,e,n){var r=Object(k.c)("linestart","lineend",e);if(r.nodes.includes(t))return Object(k.c)(r.nodes[1],t,e).len;for(var c=n.filter((function(e){return e.includes(t)}))[0],a=t;!r.nodes.includes(a);)a=c[c.indexOf(a)-1];for(var s=t;!r.nodes.includes(s);)s=c[c.indexOf(s)+1];var i="linestart"===a,o="lineend"===s;if(c.toString()===n[0].toString()){var l=[];return i||o?i?(l[0]=0,l[1]=Object(k.c)(r.nodes[1],s,e).len,l[2]=Object(k.c)(c[1],t,e).len,l[3]=Object(k.c)(t,s,e).len):(l[0]=Object(k.c)(r.nodes[1],a,e).len,l[1]=Object(k.c)(a,r.nodes.slice(-2)[0],e).len,l[2]=Object(k.c)(a,t,e).len,l[3]=Object(k.c)(t,c.slice(-2)[0],e).len):(l[0]=Object(k.c)(r.nodes[1],a,e).len,l[1]=Object(k.c)(a,s,e).len,l[2]=Object(k.c)(a,t,e).len,l[3]=Object(k.c)(t,s,e).len),l[0]+l[2]*l[1]/(l[2]+l[3])}if(i||o)return i?Object(k.c)(r.nodes[1],s,e).len-Object(k.c)(t,s,e).len:Object(k.c)(r.nodes[1],a,e).len+Object(k.c)(a,t,e).len;var u=[];return u[0]=Object(k.c)(r.nodes[1],a,e).len,u[1]=Object(k.c)(a,s,e).len,u[2]=Object(k.c)(a,t,e).len,u[3]=Object(k.c)(t,s,e).len,u[0]+u[2]*u[1]/(u[2]+u[3])}(e,h,r)))}),{})}),[r.toString(),JSON.stringify(h)]),d=Object(k.c)("linestart","lineend",h),O=Object(k.c)(d.nodes[1],d.nodes.slice(-2)[0],h),b="r"===n.direction?[n.svgWidth.railmap*n.padding/100+65,n.svgWidth.railmap*(1-n.padding/100)-20]:[n.svgWidth.railmap*n.padding/100,n.svgWidth.railmap*(1-n.padding/100)-65],g=Object.keys(j).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,b[0]+j[e]/O.len*(b[1]-b[0])))}),{}),x=Object(o.useMemo)((function(){return console.log("computing y shares"),Object.keys(n.stn_list).reduce((function(t,e){if(r[0].includes(e))return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,0));var c=r.slice(1).filter((function(t){return t.includes(e)}))[0];return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,n.stn_list[c[0]].children.indexOf(c[1])?-2:2))}),{})}),[i]),p=Object.keys(x).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,-x[e]*n.branch_spacing))}),{}),_=Object(o.useMemo)((function(){return Object(k.e)(n.current_stn_idx,c,n.direction)}),[n.current_stn_idx,n.direction,c.toString()]),v=Object(k.d)(r,_),y=Object.keys(v).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,v[e].map((function(t){return F(t,g,p)}))))}),{});return Object(f.jsxs)("g",{id:"main",style:(t={},Object(s.a)(t,"--y-percentage",n.y_pc),Object(s.a)(t,"transform","translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"),t),children:[Object(f.jsx)(E,{paths:y}),Object(f.jsx)(H,{xs:g,ys:p,stnStates:_}),Object(f.jsx)("g",{id:"line_name",style:Object(s.a)({},"--translate-x","r"===n.direction?"".concat(b[0]-65,"px"):"".concat(b[1]+65,"px")),children:Object(f.jsx)(m,{info:Array(2).concat(["var(--rmg-theme-colour)","var(--rmg-theme-fg)"],n.line_name),stnState:1})})]})},E=l.a.memo((function(t){return Object(f.jsxs)("g",{fill:"none",strokeWidth:4,children:[Object(f.jsx)("g",{stroke:"#aaa",strokeDasharray:4,children:t.paths.pass.map((function(t,e){return Object(f.jsx)("path",{d:t},e)}))}),Object(f.jsx)("g",{stroke:"var(--rmg-theme-colour)",children:t.paths.main.map((function(t,e){return Object(f.jsx)("path",{d:t},e)}))})]})}),(function(t,e){return JSON.stringify(t.paths)===JSON.stringify(e.paths)})),F=function(t,e,n){var r,c=[];return t.forEach((function(t){var a=e[t],s=n[t];if(!r&&0!==r)return r=s,void c.push("M ".concat(a,",").concat(s));0===s?(s<r&&c.push("H ".concat(a-40),"a 40,40 0 0,0 40,-40","V ".concat(s)),s>r&&c.push("H ".concat(a-40),"a 40,40 0 0,1 40,40","V ".concat(s))):(s<r&&c.push("V ".concat(s+40),"a 40,40 0 0,1 40,-40","H ".concat(a)),s>r&&c.push("V ".concat(s-40),"a 40,40 0 0,0 40,40","H ".concat(a))),c.push("H ".concat(a)),r=s})),c.join(" ").replace(/( H ([\d.]+))+/g," H $2")},H=function(t){var e=l.a.useContext(u.a).param;return Object(f.jsx)("g",{id:"stn_icons",children:Object.keys(e.stn_list).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(e){return Object(f.jsx)("g",{style:{transform:"translate(".concat(t.xs[e],"px,").concat(t.ys[e],"px)")},children:Object(f.jsx)(p,{stnId:e,stnState:t.stnStates[e],stnY:t.ys[e]})},e)}))})},L=["destIds"],R=["destIds"],W=(e.default=function(){var t=o.useContext(u.a).param;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(W,{}),Object(f.jsx)(h.a,{variant:t.info_panel_type,isShowLight:"gz2otis"===t.info_panel_type,isShowPSD:"gz2otis"===t.info_panel_type&&t.psd_num}),"l"===t.direction&&t.stn_list[t.current_stn_idx].parents.includes("linestart")||"r"===t.direction&&t.stn_list[t.current_stn_idx].children.includes("lineend")?Object(f.jsx)(T,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(P,{}),Object(f.jsx)(A,{}),t.notesGZMTR.map((function(t,e){return Object(f.jsx)(C,{note:t},e)}))]}),"gz2otis"===t.info_panel_type&&Object(f.jsx)("line",{x2:t.svgWidth.railmap,transform:"translate(0,90)",strokeWidth:3,stroke:"black"})]})},o.memo((function(){return Object(f.jsxs)("defs",{children:[Object(f.jsx)("path",{id:"stn",className:"rmg-stn",d:"M 0,9.25 V -9.25 H -9.25 a 9.25,9.25 0 0,0 0,18.5 h 18.5 a 9.25,9.25 0 0,0 0,-18.5 H 0 "}),Object(f.jsx)("path",{id:"stn_pass",stroke:"#aaa",fill:"#fff",strokeWidth:2,d:"M 0,9.25 V -9.25 H -9.25 a 9.25,9.25 0 0,0 0,18.5 h 18.5 a 9.25,9.25 0 0,0 0,-18.5 H 0 "}),Object(f.jsx)("path",{id:"arrow_direction",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black"}),Object(f.jsx)("path",{id:"inttick",d:"M 0,0 v 18",strokeLinecap:"square"}),Object(f.jsx)("rect",{id:"intbox",x:-22.5,height:24,width:45,rx:4.5})]})}))),A=function(){var t,e=o.useContext(u.a),n=e.param,r=e.routes,c=o.useMemo((function(){return Object(i.a)(new Set(r.reduce((function(t,e){return e.includes(n.current_stn_idx)?t.concat(e.filter((function(t){return!["linestart","lineend"].includes(t)})).slice("l"===n.direction?0:-1)[0]):t}),[]).filter((function(t){return t!==n.current_stn_idx}))))}),[n.current_stn_idx,n.direction,r.toString()]),l={textAnchor:"l"===n.direction?"start":"end",transform:"translate(".concat("l"===n.direction?65:-65,",-5)"),destIds:c};return Object(f.jsxs)("g",{id:"direction_gz",style:(t={},Object(s.a)(t,"--x-percentage",n.direction_gz_x),Object(s.a)(t,"--y-percentage",n.direction_gz_y),t),children:[Object(f.jsx)("use",{xlinkHref:"#arrow_direction",style:Object(s.a)({},"--rotate","l"===n.direction?"0deg":"180deg")}),2!==c.length?Object(f.jsx)(B,Object(a.a)({},l)):Object(f.jsx)(I,Object(a.a)({},l))]})},B=function(t){var e=t.destIds,n=Object(c.a)(t,L),r=o.useContext(u.a).param;return Object(f.jsxs)("g",Object(a.a)(Object(a.a)({},n),{},{children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:28,children:e.map((function(t){return r.stn_list[t].name[0]})).join("/")+"\u65b9\u5411"}),Object(f.jsx)("text",{className:"rmg-name__en",fontSize:14,dy:22,children:"Towards "+e.map((function(t){return r.stn_list[t].name[1].replace("\\"," ")})).join("/")})]}))},I=function(t){var e=t.destIds,n=Object(c.a)(t,R),r=o.useContext(u.a).param,s=e.map((function(t){return r.stn_list[t].name[0].length})),l=Math.min.apply(Math,Object(i.a)(s)),h=l>1&&s[0]!==s[1]?Math.abs(s[0]-s[1])/(l-1):0;return Object(f.jsxs)("g",Object(a.a)(Object(a.a)({},n),{},{children:[e.map((function(t,e){return Object(f.jsxs)(o.Fragment,{children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:25,x:"l"===r.direction?0:-75,y:42*e-21,letterSpacing:s[e]>s[1-e]?"0em":"".concat(h,"em"),children:r.stn_list[t].name[0]}),Object(f.jsx)("text",{className:"rmg-name__en",fontSize:11.5,x:"l"===r.direction?0:-75,y:42*e-1,children:"Towards "+r.stn_list[t].name[1].replace("\\"," ")})]},t)})),Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:28,x:"l"===r.direction?25*(Math.max.apply(Math,Object(i.a)(s))+1):0,y:5,children:"\u65b9\u5411"})]}))},T=o.memo((function(){return Object(f.jsxs)("g",{id:"terminus_gz",textAnchor:"middle",children:[Object(f.jsx)("text",{className:"rmg-name__zh",fontSize:90,children:"\u7ec8 \u70b9 \u7ad9"}),Object(f.jsx)("text",{dy:70,className:"rmg-name__en",fontSize:36,children:"Terminal"}),Object(f.jsxs)("g",{strokeWidth:8,stroke:"#000",children:[Object(f.jsx)("path",{d:"M -160,68 h -160"}),Object(f.jsx)("path",{d:"M 160,68 h 160"})]})]})})),C=o.memo((function(t){var e,n=o.useRef(null),c=o.useState({width:0,height:0,y:0}),a=Object(r.a)(c,2),i=a[0],l=a[1];return o.useEffect((function(){return l(n.current.getBBox())}),[t.note[0],t.note[1]]),Object(f.jsxs)("g",{className:"note-box",style:(e={},Object(s.a)(e,"--x-percentage",t.note[2]),Object(s.a)(e,"--y-percentage",t.note[3]),e),children:[t.note[4]&&Object(f.jsx)("rect",{height:i.height+4,width:i.width+4,x:-2,y:i.y-2,fill:"none",stroke:"black",strokeWidth:.5}),Object(f.jsxs)("g",{ref:n,children:[Object(f.jsx)("g",{fontSize:16,letterSpacing:1.2,children:t.note[0].split("\n").map((function(t,e){return Object(f.jsx)("text",{className:"rmg-name__zh",y:18*e,children:t},e)}))}),Object(f.jsx)("g",{fontSize:10,letterSpacing:.33,transform:"translate(0,".concat(18*t.note[0].split("\n").length,")"),children:t.note[1].split("\n").map((function(e,n){var r;return Object(f.jsx)("text",{className:"rmg-name__en",y:11*n,textLength:n<((null===(r=t.note[1].match(/\n/g))||void 0===r?void 0:r.length)||0)?i.width:navigator.userAgent.includes("Firefox")?-1:0,lengthAdjust:"spacing",children:e},n)}))})]})]})}),(function(t,e){return t.note.toString()===e.note.toString()}))},36:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}n.d(e,"a",(function(){return r}))},37:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return h})),n.d(e,"f",(function(){return j})),n.d(e,"e",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return m}));var r=n(10),c=n(17),a=n(19),s=n(13),i=n(24),o=n(2),l=n(0),u=(n(18),function(t,e,n){return Object.keys(t).reduce((function(r,c){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},c,t[c].children.reduce((function(r,a){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},a,1+e(t,a)+n(t,c)))}),{})))}),{})}),h=function t(e,n,r){if(e===n)return{len:0,nodes:[e]};var c=[],a=[];Object.keys(r[e]).forEach((function(s){var i=t(s,n,r);i.len<0||(c.push(r[e][s]+i.len),i.nodes.unshift(e),a.push(i.nodes))}));var s=Math.max.apply(Math,c);return{len:s,nodes:a[c.indexOf(s)]}},j=function(t,e,n){var r=h("linestart","lineend",e);if(r.nodes.includes(t))return h(r.nodes[1],t,e).len;for(var c=n.filter((function(e){return e.includes(t)}))[0],a=t;!r.nodes.includes(a);)a=c[c.indexOf(a)-1];for(var s=t;!r.nodes.includes(s);)s=c[c.indexOf(s)+1];var i="linestart"===a,o=[];return i||"lineend"===s?i?(o[0]=0,o[1]=h(r.nodes[1],s,e).len,o[2]=h(c[1],t,e).len,o[3]=h(t,s,e).len):(o[0]=h(r.nodes[1],a,e).len,o[1]=h(a,r.nodes.slice(-2)[0],e).len,o[2]=h(a,t,e).len,o[3]=h(t,c.slice(-2)[0],e).len):(o[0]=h(r.nodes[1],a,e).len,o[1]=h(a,s,e).len,o[2]=h(a,t,e).len,o[3]=h(t,s,e).len),o[0]+o[2]*o[1]/(o[2]+o[3])},d=function(t,e,n){var r;return console.log("computing stations' states"),Object(s.a)(new Set((r=[]).concat.apply(r,Object(s.a)(e)))).reduce((function(r,c){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},c,c===t?0:("r"===n?function(t,e,n){var r,c=Object(i.a)(n);try{for(c.s();!(r=c.n()).done;){var a=r.value,s=a.indexOf(t),o=a.indexOf(e);if(-1!==s&&s<o)return!0}}catch(l){c.e(l)}finally{c.f()}return!1}(t,c,e):function(t,e,n){var r,c=Object(i.a)(n);try{for(c.s();!(r=c.n()).done;){var a=r.value,s=a.indexOf(t),o=a.indexOf(e);if(-1!==o&&o<s)return!0}}catch(l){c.e(l)}finally{c.f()}return!1}(t,c,e))?1:-1))}),{})},f=function(){function t(e){var n=this;Object(c.a)(this,t),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(t){return 0},this.rightWideFactor=function(t){return 0},this.pathWeight=function(t,e){return n.stnList[t].children.includes(e)?1+n.rightWideFactor(t)+n.leftWideFactor(e):-1/0},this.pathTurnParams=function(t){var e=35-17.5*Math.sqrt(3),n=t-2*e;return{tr:35,dx_a:17.5,dy_a:e,dx_l:n*Math.sqrt(3),dy_l:n}},this.pathTurnSE=function(t){var e=n.pathTurnParams(t),r=e.tr,c=e.dx_a,a=e.dy_a,s=e.dx_l,i=e.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(a," l ").concat(s,",").concat(i," a ").concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(a)},this.pathTurnNE=function(t){var e=n.pathTurnParams(t),r=e.tr,c=e.dx_a,a=e.dy_a,s=e.dx_l,i=e.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(-a," l ").concat(s,",").concat(-i," a ").concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(-a)},this.stnList=e.stnList,this.criticalPath=e.criticalPath}return Object(a.a)(t,[{key:"getYShare",value:function(t,e){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;var n=this.stnList[t].parents[0];if(n){if(1===this.stnList[n].children.length){var r=this.getYShare(n);return this.yShares[t]=r,r}var c=0===this.stnList[n].children.indexOf(t)?1:-1;return this.yShares[t]=c,c}return this.yShares[t]=0,0}},{key:"_linePath",value:function(t,e,n,c,a,s,i,o){var l=this,u=Object(r.a)([],3),h=u[0],j=u[1],d=u[2],f=[],m=this.pathTurnParams(s),O=m.dx_a+m.dx_l/2,b=(e[1]-e[0])/i.len*.8,g=((e[1]-e[0])/i.len-2*O)/2;return g+b<0&&console.warn("SVG width too small! ".concat(g+b)),t.forEach((function(e){var r=c[e],i=a[e];if(!j&&0!==j)return h=e,d=r,j=i,void(1===t.length?f.push("M ".concat(r,",").concat(i)):n[0].includes(e)?n[0].includes(t[1])?f.push("M ".concat(r,",").concat(i)):(c[t[1]]>0&&f.push("M ".concat(r,",").concat(i+o)),a[t[1]]<0&&f.push("M ".concat(r,",").concat(i-o))):f.push("M ".concat(r,",").concat(i)));i>j?(f.push("h ".concat(0===i?r-d-b*l.leftWideFactor(e)-g-2*O:b*l.rightWideFactor(h)+g)),f.push(l.pathTurnSE(s))):i<j&&(f.push("h ".concat(0===i?r-d-b*l.leftWideFactor(e)-g-2*O:b*l.rightWideFactor(h)+g)),f.push(l.pathTurnNE(s))),f.push("H ".concat(r)),h=e,d=r,j=i})),f.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(t,e){console.log("computing y shares");var n=new this({stnList:t});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in n.yShares||n.getYShare(t,e)})),n.yShares}},{key:"drawLine",value:function(t,e,n,r,c,a,s,i){var o=this,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:9.68,u={main:[],pass:[]};return t.forEach((function(h,j){var d=(h=h.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),f=h.filter((function(t){return e[t]<=0}));1===d.length&&(f=h),0===d.filter((function(t){return-1!==f.indexOf(t)})).length&&d.length&&(f[0]===h[0]?f.push(d[0]):d[0]===h[0]&&d[d.length-1]===h[h.length-1]&&f.length?(f=h,d=[]):f.unshift(d[d.length-1])),u.main.push(new o({stnList:n,criticalPath:i})._linePath(d,r,t,c,a,s,i,l)),u.pass.push(new o({stnList:n,criticalPath:i})._linePath(f,r,t,c,a,s,i,l))})),u}}]),t}(),m=function(t,e){var n={main:[],pass:[]};return t.forEach((function(t){var r=(t=t.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),c=t.filter((function(t){return e[t]<=0}));1===r.length&&(c=t),0===r.filter((function(t){return-1!==c.indexOf(t)})).length&&r.length&&(c[0]===t[0]?c.push(r[0]):r[0]===t[0]&&r[r.length-1]===t[t.length-1]&&c.length?(c=t,r=[]):c.unshift(r[r.length-1])),n.main.push(r),n.pass.push(c)})),n}},74:function(t,e,n){"use strict";var r=n(0),c=n(2),a=n(4),s=n.n(a),i=n(3),o=n(1);e.a=function(t){var e=function(t){switch(t){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}}(t.variant),n=s.a.useMemo((function(){switch(t.variant){case"gz1":return Object(o.jsx)("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return Object(o.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return Object(o.jsx)("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return Object(o.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return Object(o.jsx)("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return Object(o.jsx)("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return Object(o.jsx)("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return Object(o.jsx)("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return Object(o.jsx)(o.Fragment,{})}}),[t.variant]);return Object(o.jsxs)("g",{transform:"translate(0,".concat("gz4"===t.variant?-20:0,")"),children:[Object(o.jsx)("rect",{id:"strip_gz",style:Object(c.a)({},"--height","".concat(e,"px"))}),Object(o.jsx)("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:t.isShowLight&&n}),!1!==t.isShowPSD&&Object(o.jsx)(l,Object(r.a)({},t))]})};var l=s.a.memo((function(t){var e,n=["gz28","gz2otis","gz6","gzgf"].includes(t.variant),r=function(t){switch(t){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}}(t.variant);return Object(o.jsxs)("g",{textAnchor:"middle",fill:n?i.h.black:"var(--rmg-theme-fg)",style:(e={},Object(c.a)(e,"--psd-dy",r),Object(c.a)(e,"transform","translate(var(--translate-x), var(--translate-y))"),Object(c.a)(e,"--translate-x","calc(var(--rmg-svg-width) / 2 + 80px)"),Object(c.a)(e,"--translate-y","calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"),e),children:[Object(o.jsx)("rect",{height:40,width:40,rx:4,x:-20,fill:n?"#fff":"var(--rmg-theme-colour)"}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:20,dy:12,children:t.isShowPSD}),Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"\u5c4f\u853d\u95e8"}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]})}),(function(t,e){return t.variant===e.variant&&t.isShowPSD===e.isShowPSD}))},75:function(t,e,n){"use strict";var r=n(0),c=n(10),a=n(36),s=n(4),i=n.n(s),o=n(1),l=["lineNum","stnNum"];e.a=function(t){var e=t.lineNum,n=t.stnNum,s=Object(a.a)(t,l),u=15.03125,h=i.a.useRef(null),j=i.a.useState({width:u}),d=Object(c.a)(j,2),f=d[0],m=d[1];i.a.useEffect((function(){return m(h.current.getBBox())}),[e]);var O=f.width>u?u/f.width:1,b=2===e.length?O:1;return Object(o.jsx)("g",Object(r.a)(Object(r.a)({textAnchor:"middle",fontSize:13.5},s),{},{children:i.a.useMemo((function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("g",{transform:"translate(-9.25,0)scale(".concat(O,")"),children:Object(o.jsx)("text",{ref:h,className:"rmg-name__zh",children:e})}),Object(o.jsx)("g",{transform:"translate(9.25,0)scale(".concat(b,")"),children:Object(o.jsx)("text",{className:"rmg-name__zh",children:n})})]})}),[f.width,e,n])}))}}}]);
//# sourceMappingURL=railmapGZMTR.48168428.chunk.js.map