(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[88],{130:function(t,e,n){"use strict";n.r(e);var r=n(10),c=n(36),a=n(0),s=n(2),i=n(13),o=n(4),u=n.n(o),l=n(21),j=n(74),h=n(75),f=n(3),d=n(1),m=Object(o.memo)((function(t){return Object(d.jsxs)("g",{textAnchor:"middle",fill:-1===t.stnState?f.h.white:t.info[3],children:[Object(d.jsx)("use",{xlinkHref:"#intbox",fill:-1===t.stnState?"#aaa":t.info[2]}),t.info[4][0]===t.info[5][0]?Object(d.jsx)(b,{name:t.info.slice(-2)}):Object(d.jsx)(O,{name:t.info.slice(-2)})]})}),(function(t,e){return t.info.toString()===e.info.toString()&&t.stnState===e.stnState})),O=Object(o.memo)((function(t){var e,n=[],c=0;null===(e=t.name[0].match(/\d+|\D+/g))||void 0===e||e.forEach((function(t,e){isNaN(Number(t))?(n.push(Object(d.jsx)("tspan",{dominantBaseline:"hanging",dy:1-c,children:t},e)),c+=1-c):(n.push(Object(d.jsx)("tspan",{dominantBaseline:"hanging",fontSize:16,dy:-c,children:t},e)),c=0)}));var a=Object(o.useRef)(null),s=Object(o.useState)({width:0}),i=Object(r.a)(s,2),u=i[0],l=i[1];Object(o.useEffect)((function(){return l(a.current.getBBox())}),[t.name[0]]);var j=u.width>43.5?43.5/u.width:1,h=Object(o.useRef)(null),f=Object(o.useState)({width:0}),m=Object(r.a)(f,2),O=m[0],b=m[1];Object(o.useEffect)((function(){return b(h.current.getBBox())}),[t.name[1]]);var g=O.width>43.5?43.5/O.width:1;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("text",{ref:a,y:navigator.userAgent.includes("Firefox")?-.5:2,className:"rmg-name__zh",fontSize:12,transform:"scale(".concat(j,",1)"),children:n}),Object(d.jsx)("text",{ref:h,y:19.5,fontSize:t.name[1].replace("\\"," ").length>10?7:8,className:"rmg-name__en",transform:"scale(".concat(g,",1)"),children:t.name[1]})]})}),(function(t,e){return t.name.toString()===e.name.toString()})),b=Object(o.memo)((function(t){var e="";for(var n in Object(i.a)(t.name[0])){if(t.name[0][n]!==t.name[1][n])break;e+=t.name[0][n]}var c=Object(o.useRef)(null),a=Object(o.useState)({x:0,width:0}),s=Object(r.a)(a,2),u=s[0],l=s[1];Object(o.useEffect)((function(){return l(c.current.getBBox())}),[t.name.toString()]);var j=u.width>43.5?43.5/u.width:1;return Object(d.jsx)("g",{transform:"scale(".concat(j,",1)"),children:Object(d.jsx)("g",{transform:"translate(".concat(-u.x-u.width/2,",0)"),children:Object(d.jsxs)("text",{ref:c,className:"rmg-name__zh",fontSize:14,y:12,textAnchor:"end",children:[e,Object(d.jsx)("tspan",{className:"rmg-name__zh",fontSize:8,x:0,dy:-2,textAnchor:"start",children:t.name[0].slice(e.length)}),Object(d.jsx)("tspan",{className:"rmg-name__en",fontSize:4,x:0,dy:6,textAnchor:"start",children:t.name[1].slice(e.length).trim()})]})})})}),(function(t,e){return t.name.toString()===e.name.toString()})),g=n(11),x=["intInfos","stnState","tickRotation"],p=["intInfos","tickRotation","stnState"],S=function(t){var e=t.stnId,n=t.stnState,r=t.stnY,c=Object(g.useSelector)((function(t){return t.param.theme})),a=Object(g.useSelector)((function(t){return t.param.line_name})),s=Object(g.useSelector)((function(t){return t.param.line_num})),o=Object(g.useSelector)((function(t){return t.param.stn_list[e]})),u=2===o.parents.length||2===o.children.length,l=r>0||1===o.parents.indexOf(o.branch.left[1]||"")||1===o.children.indexOf(o.branch.right[1]||"")?180:0,j=o.name[1].split("\\").length,m=u?180===l?16+12*(j-1)*Math.cos(-45):-9:180===l?-6:(25+15*(j-1))*Math.cos(-45);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(w,{intInfos:u?[[c[0],c[1],"var(--rmg-theme-colour)","var(--rmg-theme-fg)"].concat(Object(i.a)(a))].concat(o.transfer.info[0]):o.transfer.info[0],stnState:n,tickRotation:l}),Object(d.jsxs)("g",{children:[Object(d.jsx)("use",{xlinkHref:"#stn",stroke:-1===n?"#aaa":"var(--rmg-theme-colour)"}),Object(d.jsx)(h.a,{className:"Name ".concat(-1===n?"Pass":"Future"),lineNum:s,stnNum:o.num})]}),Object(d.jsx)("g",{transform:"translate(".concat(-m,",0)"),children:Object(d.jsx)(v,{name:o.name,secondaryName:o.secondaryName,stnState:n,tickRotation:l,isExpress:o.services.includes(f.l.express)})})]})},v=function(t){var e=180===t.tickRotation?17.5:-20-14*t.name[1].split("\\").length*Math.cos(-45),n=Object(o.useRef)(null),c=Object(o.useState)({width:0}),a=Object(r.a)(c,2),s=a[0],i=a[1];Object(o.useEffect)((function(){return i(n.current.getBBox())}),[t.name.toString()]);var u=Object(o.useRef)(null),l=Object(o.useState)({x:0,width:-20}),j=Object(r.a)(l,2),h=j[0],f=j[1];return Object(o.useEffect)((function(){u.current?f(u.current.getBBox()):f((function(t){return{x:t.x,width:-20}}))}),[t.secondaryName.toString()]),Object(d.jsxs)("g",{textAnchor:180===t.tickRotation?"end":"start",className:"Name ".concat(-1===t.stnState?"Pass":0===t.stnState?"CurrentGZ":"Future"),transform:"translate(0,".concat(e,")rotate(-45)"),children:[Object(d.jsx)(y,{ref:n,name:t.name}),t.secondaryName&&Object(d.jsxs)("g",{transform:"translate(".concat((s.width+h.width/2+10)*(180===t.tickRotation?-1:1),",").concat(2+5*(t.name[1].split("\\").length-1),")"),className:"Name ".concat(-1===t.stnState?"Pass":"Future"),children:[Object(d.jsxs)("g",{transform:"translate(0,3)",fontSize:18,children:[Object(d.jsx)("text",{textAnchor:"end",x:h.x-3,className:"rmg-name__zh",children:"("}),Object(d.jsx)("text",{textAnchor:"start",x:h.width+h.x+3,className:"rmg-name__zh",children:")"})]}),Object(d.jsx)(_,{ref:u,secName:t.secondaryName})]}),t.isExpress&&Object(d.jsx)(z,{fill:-1===t.stnState?"#aaa":"var(--rmg-theme-colour)",transform:"translate(".concat((s.width+h.width+20+35)*(180===t.tickRotation?-1:1),",").concat(2+5*(t.name[1].split("\\").length-1),")")})]})},y=Object(o.forwardRef)((function(t,e){return Object(o.useMemo)((function(){return Object(d.jsxs)("g",{ref:e,children:[Object(d.jsx)("text",{className:"rmg-name__zh",fontSize:18,children:t.name[0]}),Object(d.jsx)("g",{fontSize:10.5,children:t.name[1].split("\\").map((function(t,e){return Object(d.jsx)("text",{className:"rmg-name__en",dy:16+11*e,children:t},e)}))})]})}),[t.name[0],t.name[1]])})),_=Object(o.forwardRef)((function(t,e){return Object(o.useMemo)((function(){return Object(d.jsxs)("g",{ref:e,textAnchor:"middle",children:[Object(d.jsx)("text",{className:"rmg-name__zh",fontSize:13,children:t.secName[0]}),Object(d.jsx)("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:t.secName[1]})]})}),[t.secName.toString()])})),z=u.a.memo((function(t){return Object(d.jsxs)("g",Object(a.a)(Object(a.a)({textAnchor:"middle"},t),{},{children:[Object(d.jsx)("text",{className:"rmg-name__zh",fontSize:13,children:"\u5feb\u8f66\u505c\u9760\u7ad9"}),Object(d.jsx)("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:"Express Station"})]}))})),w=function(t){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(N,Object(a.a)({strokeWidth:4},t)),Object(d.jsx)(k,Object(a.a)({transform:"translate(0,".concat(180===t.tickRotation?-47:23,")")},t))]})},N=function(t){var e=t.intInfos,n=t.stnState,r=t.tickRotation,s=Object(c.a)(t,x);return Object(d.jsx)("g",Object(a.a)(Object(a.a)({},s),{},{children:e.map((function(t,c){return Object(d.jsx)("use",{xlinkHref:"#inttick",stroke:-1===n?"#aaa":t[2],transform:"translate(".concat(-2*(e.length-1)+4*c,",0)rotate(").concat(180===r?180:0,")")},c)}))}))},k=function(t){var e=t.intInfos,n=t.tickRotation,r=t.stnState,s=Object(c.a)(t,p);return Object(d.jsx)("g",Object(a.a)(Object(a.a)({},s),{},{children:e.map((function(t,e){return Object(d.jsx)("g",{transform:"translate(0,".concat(28*e*(180===n?-1:1),")"),children:Object(d.jsx)(m,{info:t,stnState:r})},e)}))}))},M=n(37),R=function(t,e){return 2===t[e].parents.length||2===t[e].children.length?.25:0},P=function(){var t,e=u.a.useContext(l.a),n=e.branches,r=e.routes,c=e.deps,i=Object(g.useSelector)((function(t){return t.param.svgWidth})),j=Object(g.useSelector)((function(t){return t.param.y_pc})),h=Object(g.useSelector)((function(t){return t.param.padding})),O=Object(g.useSelector)((function(t){return t.param.branch_spacing})),b=Object(g.useSelector)((function(t){return t.param.direction})),x=Object(g.useSelector)((function(t){return t.param.line_name})),p=Object(g.useSelector)((function(t){return t.param.current_stn_idx})),S=Object(g.useSelector)((function(t){return t.param.stn_list})),v=Object(M.b)(S,R,R),y=Object(o.useMemo)((function(){return console.log("computing x shares"),Object.keys(S).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,function(t,e,n){var r=Object(M.c)("linestart","lineend",e);if(r.nodes.includes(t))return Object(M.c)(r.nodes[1],t,e).len;for(var c=n.filter((function(e){return e.includes(t)}))[0],a=t;!r.nodes.includes(a);)a=c[c.indexOf(a)-1];for(var s=t;!r.nodes.includes(s);)s=c[c.indexOf(s)+1];var i="linestart"===a,o="lineend"===s;if(c.toString()===n[0].toString()){var u=[];return i||o?i?(u[0]=0,u[1]=Object(M.c)(r.nodes[1],s,e).len,u[2]=Object(M.c)(c[1],t,e).len,u[3]=Object(M.c)(t,s,e).len):(u[0]=Object(M.c)(r.nodes[1],a,e).len,u[1]=Object(M.c)(a,r.nodes.slice(-2)[0],e).len,u[2]=Object(M.c)(a,t,e).len,u[3]=Object(M.c)(t,c.slice(-2)[0],e).len):(u[0]=Object(M.c)(r.nodes[1],a,e).len,u[1]=Object(M.c)(a,s,e).len,u[2]=Object(M.c)(a,t,e).len,u[3]=Object(M.c)(t,s,e).len),u[0]+u[2]*u[1]/(u[2]+u[3])}if(i||o)return i?Object(M.c)(r.nodes[1],s,e).len-Object(M.c)(t,s,e).len:Object(M.c)(r.nodes[1],a,e).len+Object(M.c)(a,t,e).len;var l=[];return l[0]=Object(M.c)(r.nodes[1],a,e).len,l[1]=Object(M.c)(a,s,e).len,l[2]=Object(M.c)(a,t,e).len,l[3]=Object(M.c)(t,s,e).len,l[0]+l[2]*l[1]/(l[2]+l[3])}(e,v,n)))}),{})}),[n.toString(),JSON.stringify(v)]),_=Object(M.c)("linestart","lineend",v),z=Object(M.c)(_.nodes[1],_.nodes.slice(-2)[0],v),w=b===f.m.right?[i[f.c.RailMap]*h/100+65,i[f.c.RailMap]*(1-h/100)-20]:[i[f.c.RailMap]*h/100,i[f.c.RailMap]*(1-h/100)-65],N=Object.keys(y).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,w[0]+y[e]/z.len*(w[1]-w[0])))}),{}),k=Object(o.useMemo)((function(){return console.log("computing y shares"),Object.keys(S).reduce((function(t,e){if(n[0].includes(e))return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,0));var r=n.slice(1).filter((function(t){return t.includes(e)}))[0];return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,S[r[0]].children.indexOf(r[1])?-2:2))}),{})}),[c]),P=Object.keys(k).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,-k[e]*O))}),{}),L=Object(o.useMemo)((function(){return Object(M.e)(p,r,b)}),[p,b,r.toString()]),A=Object(M.d)(n,L),W=Object.keys(A).reduce((function(t,e){return Object(a.a)(Object(a.a)({},t),{},Object(s.a)({},e,A[e].map((function(t){return F(t,N,P)}))))}),{});return Object(d.jsxs)("g",{id:"main",style:(t={},Object(s.a)(t,"--y-percentage",j),Object(s.a)(t,"transform","translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"),t),children:[Object(d.jsx)(E,{paths:W}),Object(d.jsx)(H,{xs:N,ys:P,stnStates:L}),Object(d.jsx)("g",{id:"line_name",style:Object(s.a)({},"--translate-x",b===f.m.right?"".concat(w[0]-65,"px"):"".concat(w[1]+65,"px")),children:Object(d.jsx)(m,{info:Array(2).concat(["var(--rmg-theme-colour)","var(--rmg-theme-fg)"],x),stnState:1})})]})},E=u.a.memo((function(t){return Object(d.jsxs)("g",{fill:"none",strokeWidth:4,children:[Object(d.jsx)("g",{stroke:"#aaa",strokeDasharray:4,children:t.paths.pass.map((function(t,e){return Object(d.jsx)("path",{d:t},e)}))}),Object(d.jsx)("g",{stroke:"var(--rmg-theme-colour)",children:t.paths.main.map((function(t,e){return Object(d.jsx)("path",{d:t},e)}))})]})}),(function(t,e){return JSON.stringify(t.paths)===JSON.stringify(e.paths)})),F=function(t,e,n){var r,c=[];return t.forEach((function(t){var a=e[t],s=n[t];if(!r&&0!==r)return r=s,void c.push("M ".concat(a,",").concat(s));0===s?(s<r&&c.push("H ".concat(a-40),"a 40,40 0 0,0 40,-40","V ".concat(s)),s>r&&c.push("H ".concat(a-40),"a 40,40 0 0,1 40,40","V ".concat(s))):(s<r&&c.push("V ".concat(s+40),"a 40,40 0 0,1 40,-40","H ".concat(a)),s>r&&c.push("V ".concat(s-40),"a 40,40 0 0,0 40,40","H ".concat(a))),c.push("H ".concat(a)),r=s})),c.join(" ").replace(/( H ([\d.]+))+/g," H $2")},H=function(t){var e=t.xs,n=t.ys,r=t.stnStates,c=Object(g.useSelector)((function(t){return t.param.stn_list}));return Object(d.jsx)("g",{id:"stn_icons",children:Object.keys(c).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(t){return Object(d.jsx)("g",{style:{transform:"translate(".concat(e[t],"px,").concat(n[t],"px)")},children:Object(d.jsx)(S,{stnId:t,stnState:r[t],stnY:n[t]})},t)}))})},L=["destIds"],A=["destIds"],W=(e.default=function(){var t=Object(g.useSelector)((function(t){return t.param.svgWidth})),e=Object(g.useSelector)((function(t){return t.param.direction})),n=Object(g.useSelector)((function(t){return t.param.psd_num})),r=Object(g.useSelector)((function(t){return t.param.info_panel_type})),c=Object(g.useSelector)((function(t){return t.param.notesGZMTR})),a=Object(g.useSelector)((function(t){return t.param.current_stn_idx})),s=Object(g.useSelector)((function(t){return t.param.stn_list[a]}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(W,{}),Object(d.jsx)(j.a,{variant:r,isShowLight:r===f.i.gz2otis,isShowPSD:r===f.i.gz2otis&&n}),e===f.m.left&&s.parents.includes("linestart")||e===f.m.right&&s.children.includes("lineend")?Object(d.jsx)(D,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(P,{}),Object(d.jsx)(B,{}),c.map((function(t,e){return Object(d.jsx)(V,{note:t},e)}))]}),r===f.i.gz2otis&&Object(d.jsx)("line",{x2:t[f.c.RailMap],transform:"translate(0,90)",strokeWidth:3,stroke:"black"})]})},u.a.memo((function(){return Object(d.jsxs)("defs",{children:[Object(d.jsx)("path",{id:"stn",className:"rmg-stn",d:"M 0,9.25 V -9.25 H -9.25 a 9.25,9.25 0 0,0 0,18.5 h 18.5 a 9.25,9.25 0 0,0 0,-18.5 H 0 "}),Object(d.jsx)("path",{id:"stn_pass",stroke:"#aaa",fill:"#fff",strokeWidth:2,d:"M 0,9.25 V -9.25 H -9.25 a 9.25,9.25 0 0,0 0,18.5 h 18.5 a 9.25,9.25 0 0,0 0,-18.5 H 0 "}),Object(d.jsx)("path",{id:"arrow_direction",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black"}),Object(d.jsx)("path",{id:"inttick",d:"M 0,0 v 18",strokeLinecap:"square"}),Object(d.jsx)("rect",{id:"intbox",x:-22.5,height:24,width:45,rx:4.5})]})}))),B=function(){var t,e=u.a.useContext(l.a).routes,n=Object(g.useSelector)((function(t){return t.param.direction})),r=Object(g.useSelector)((function(t){return t.param.direction_gz_x})),c=Object(g.useSelector)((function(t){return t.param.direction_gz_y})),o=Object(g.useSelector)((function(t){return t.param.current_stn_idx})),j=u.a.useMemo((function(){return Object(i.a)(new Set(e.reduce((function(t,e){return e.includes(o)?t.concat(e.filter((function(t){return!["linestart","lineend"].includes(t)})).slice(n===f.m.left?0:-1)[0]):t}),[]).filter((function(t){return t!==o}))))}),[o,n,e.toString()]),h={textAnchor:n===f.m.left?"start":"end",transform:"translate(".concat(n===f.m.left?65:-65,",-5)"),destIds:j};return Object(d.jsxs)("g",{id:"direction_gz",style:(t={},Object(s.a)(t,"--x-percentage",r),Object(s.a)(t,"--y-percentage",c),t),children:[Object(d.jsx)("use",{xlinkHref:"#arrow_direction",style:Object(s.a)({},"--rotate",n===f.m.left?"0deg":"180deg")}),2!==j.length?Object(d.jsx)(I,Object(a.a)({},h)):Object(d.jsx)(T,Object(a.a)({},h))]})},I=function(t){var e=t.destIds,n=Object(c.a)(t,L),r=Object(g.useSelector)((function(t){return t.param.stn_list}));return Object(d.jsxs)("g",Object(a.a)(Object(a.a)({},n),{},{children:[Object(d.jsx)("text",{className:"rmg-name__zh",fontSize:28,children:e.map((function(t){return r[t].name[0]})).join("/")+"\u65b9\u5411"}),Object(d.jsx)("text",{className:"rmg-name__en",fontSize:14,dy:22,children:"Towards "+e.map((function(t){return r[t].name[1].replace("\\"," ")})).join("/")})]}))},T=function(t){var e=t.destIds,n=Object(c.a)(t,A),r=Object(g.useSelector)((function(t){return t.param.direction})),s=Object(g.useSelector)((function(t){return t.param.stn_list})),o=e.map((function(t){return s[t].name[0].length})),l=Math.min.apply(Math,Object(i.a)(o)),j=l>1&&o[0]!==o[1]?Math.abs(o[0]-o[1])/(l-1):0;return Object(d.jsxs)("g",Object(a.a)(Object(a.a)({},n),{},{children:[e.map((function(t,e){return Object(d.jsxs)(u.a.Fragment,{children:[Object(d.jsx)("text",{className:"rmg-name__zh",fontSize:25,x:r===f.m.left?0:-75,y:42*e-21,letterSpacing:o[e]>o[1-e]?"0em":"".concat(j,"em"),children:s[t].name[0]}),Object(d.jsx)("text",{className:"rmg-name__en",fontSize:11.5,x:r===f.m.left?0:-75,y:42*e-1,children:"Towards "+s[t].name[1].replace("\\"," ")})]},t)})),Object(d.jsx)("text",{className:"rmg-name__zh",fontSize:28,x:r===f.m.left?25*(Math.max.apply(Math,Object(i.a)(o))+1):0,y:5,children:"\u65b9\u5411"})]}))},D=u.a.memo((function(){return Object(d.jsxs)("g",{id:"terminus_gz",textAnchor:"middle",children:[Object(d.jsx)("text",{className:"rmg-name__zh",fontSize:90,children:"\u7ec8 \u70b9 \u7ad9"}),Object(d.jsx)("text",{dy:70,className:"rmg-name__en",fontSize:36,children:"Terminal"}),Object(d.jsxs)("g",{strokeWidth:8,stroke:"#000",children:[Object(d.jsx)("path",{d:"M -160,68 h -160"}),Object(d.jsx)("path",{d:"M 160,68 h 160"})]})]})})),V=u.a.memo((function(t){var e,n=u.a.useRef(null),c=u.a.useState({width:0,height:0,y:0}),a=Object(r.a)(c,2),i=a[0],o=a[1];return u.a.useEffect((function(){return o(n.current.getBBox())}),[t.note[0],t.note[1]]),Object(d.jsxs)("g",{className:"note-box",style:(e={},Object(s.a)(e,"--x-percentage",t.note[2]),Object(s.a)(e,"--y-percentage",t.note[3]),e),children:[t.note[4]&&Object(d.jsx)("rect",{height:i.height+4,width:i.width+4,x:-2,y:i.y-2,fill:"none",stroke:"black",strokeWidth:.5}),Object(d.jsxs)("g",{ref:n,children:[Object(d.jsx)("g",{fontSize:16,letterSpacing:1.2,children:t.note[0].split("\n").map((function(t,e){return Object(d.jsx)("text",{className:"rmg-name__zh",y:18*e,children:t},e)}))}),Object(d.jsx)("g",{fontSize:10,letterSpacing:.33,transform:"translate(0,".concat(18*t.note[0].split("\n").length,")"),children:t.note[1].split("\n").map((function(e,n){var r;return Object(d.jsx)("text",{className:"rmg-name__en",y:11*n,textLength:n<((null===(r=t.note[1].match(/\n/g))||void 0===r?void 0:r.length)||0)?i.width:navigator.userAgent.includes("Firefox")?-1:0,lengthAdjust:"spacing",children:e},n)}))})]})]})}),(function(t,e){return t.note.toString()===e.note.toString()}))},36:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}n.d(e,"a",(function(){return r}))},37:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return j})),n.d(e,"f",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m}));var r=n(10),c=n(17),a=n(19),s=n(13),i=n(24),o=n(2),u=n(0),l=(n(18),function(t,e,n){return Object.keys(t).reduce((function(r,c){return Object(u.a)(Object(u.a)({},r),{},Object(o.a)({},c,t[c].children.reduce((function(r,a){return Object(u.a)(Object(u.a)({},r),{},Object(o.a)({},a,1+e(t,a)+n(t,c)))}),{})))}),{})}),j=function t(e,n,r){if(e===n)return{len:0,nodes:[e]};var c=[],a=[];Object.keys(r[e]).forEach((function(s){var i=t(s,n,r);i.len<0||(c.push(r[e][s]+i.len),i.nodes.unshift(e),a.push(i.nodes))}));var s=Math.max.apply(Math,c);return{len:s,nodes:a[c.indexOf(s)]}},h=function(t,e,n){var r=j("linestart","lineend",e);if(r.nodes.includes(t))return j(r.nodes[1],t,e).len;for(var c=n.filter((function(e){return e.includes(t)}))[0],a=t;!r.nodes.includes(a);)a=c[c.indexOf(a)-1];for(var s=t;!r.nodes.includes(s);)s=c[c.indexOf(s)+1];var i="linestart"===a,o=[];return i||"lineend"===s?i?(o[0]=0,o[1]=j(r.nodes[1],s,e).len,o[2]=j(c[1],t,e).len,o[3]=j(t,s,e).len):(o[0]=j(r.nodes[1],a,e).len,o[1]=j(a,r.nodes.slice(-2)[0],e).len,o[2]=j(a,t,e).len,o[3]=j(t,c.slice(-2)[0],e).len):(o[0]=j(r.nodes[1],a,e).len,o[1]=j(a,s,e).len,o[2]=j(a,t,e).len,o[3]=j(t,s,e).len),o[0]+o[2]*o[1]/(o[2]+o[3])},f=function(t,e,n){var r;return console.log("computing stations' states"),Object(s.a)(new Set((r=[]).concat.apply(r,Object(s.a)(e)))).reduce((function(r,c){return Object(u.a)(Object(u.a)({},r),{},Object(o.a)({},c,c===t?0:("r"===n?function(t,e,n){var r,c=Object(i.a)(n);try{for(c.s();!(r=c.n()).done;){var a=r.value,s=a.indexOf(t),o=a.indexOf(e);if(-1!==s&&s<o)return!0}}catch(u){c.e(u)}finally{c.f()}return!1}(t,c,e):function(t,e,n){var r,c=Object(i.a)(n);try{for(c.s();!(r=c.n()).done;){var a=r.value,s=a.indexOf(t),o=a.indexOf(e);if(-1!==o&&o<s)return!0}}catch(u){c.e(u)}finally{c.f()}return!1}(t,c,e))?1:-1))}),{})},d=function(){function t(e){var n=this;Object(c.a)(this,t),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(t){return 0},this.rightWideFactor=function(t){return 0},this.pathWeight=function(t,e){return n.stnList[t].children.includes(e)?1+n.rightWideFactor(t)+n.leftWideFactor(e):-1/0},this.pathTurnParams=function(t){var e=35-17.5*Math.sqrt(3),n=t-2*e;return{tr:35,dx_a:17.5,dy_a:e,dx_l:n*Math.sqrt(3),dy_l:n}},this.pathTurnSE=function(t){var e=n.pathTurnParams(t),r=e.tr,c=e.dx_a,a=e.dy_a,s=e.dx_l,i=e.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(a," l ").concat(s,",").concat(i," a ").concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(a)},this.pathTurnNE=function(t){var e=n.pathTurnParams(t),r=e.tr,c=e.dx_a,a=e.dy_a,s=e.dx_l,i=e.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(-a," l ").concat(s,",").concat(-i," a ").concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(-a)},this.stnList=e.stnList,this.criticalPath=e.criticalPath}return Object(a.a)(t,[{key:"getYShare",value:function(t,e){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;var n=this.stnList[t].parents[0];if(n){if(1===this.stnList[n].children.length){var r=this.getYShare(n);return this.yShares[t]=r,r}var c=0===this.stnList[n].children.indexOf(t)?1:-1;return this.yShares[t]=c,c}return this.yShares[t]=0,0}},{key:"_linePath",value:function(t,e,n,c,a,s,i,o){var u=this,l=Object(r.a)([],3),j=l[0],h=l[1],f=l[2],d=[],m=this.pathTurnParams(s),O=m.dx_a+m.dx_l/2,b=(e[1]-e[0])/i.len*.8,g=((e[1]-e[0])/i.len-2*O)/2;return g+b<0&&console.warn("SVG width too small! ".concat(g+b)),t.forEach((function(e){var r=c[e],i=a[e];if(!h&&0!==h)return j=e,f=r,h=i,void(1===t.length?d.push("M ".concat(r,",").concat(i)):n[0].includes(e)?n[0].includes(t[1])?d.push("M ".concat(r,",").concat(i)):(c[t[1]]>0&&d.push("M ".concat(r,",").concat(i+o)),a[t[1]]<0&&d.push("M ".concat(r,",").concat(i-o))):d.push("M ".concat(r,",").concat(i)));i>h?(d.push("h ".concat(0===i?r-f-b*u.leftWideFactor(e)-g-2*O:b*u.rightWideFactor(j)+g)),d.push(u.pathTurnSE(s))):i<h&&(d.push("h ".concat(0===i?r-f-b*u.leftWideFactor(e)-g-2*O:b*u.rightWideFactor(j)+g)),d.push(u.pathTurnNE(s))),d.push("H ".concat(r)),j=e,f=r,h=i})),d.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(t,e){console.log("computing y shares");var n=new this({stnList:t});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in n.yShares||n.getYShare(t,e)})),n.yShares}},{key:"drawLine",value:function(t,e,n,r,c,a,s,i){var o=this,u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:9.68,l={main:[],pass:[]};return t.forEach((function(j,h){var f=(j=j.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),d=j.filter((function(t){return e[t]<=0}));1===f.length&&(d=j),0===f.filter((function(t){return-1!==d.indexOf(t)})).length&&f.length&&(d[0]===j[0]?d.push(f[0]):f[0]===j[0]&&f[f.length-1]===j[j.length-1]&&d.length?(d=j,f=[]):d.unshift(f[f.length-1])),l.main.push(new o({stnList:n,criticalPath:i})._linePath(f,r,t,c,a,s,i,u)),l.pass.push(new o({stnList:n,criticalPath:i})._linePath(d,r,t,c,a,s,i,u))})),l}}]),t}(),m=function(t,e){var n={main:[],pass:[]};return t.forEach((function(t){var r=(t=t.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),c=t.filter((function(t){return e[t]<=0}));1===r.length&&(c=t),0===r.filter((function(t){return-1!==c.indexOf(t)})).length&&r.length&&(c[0]===t[0]?c.push(r[0]):r[0]===t[0]&&r[r.length-1]===t[t.length-1]&&c.length?(c=t,r=[]):c.unshift(r[r.length-1])),n.main.push(r),n.pass.push(c)})),n}},74:function(t,e,n){"use strict";var r=n(0),c=n(2),a=n(4),s=n.n(a),i=n(3),o=n(1);e.a=function(t){var e=function(t){switch(t){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}}(t.variant),n=s.a.useMemo((function(){switch(t.variant){case"gz1":return Object(o.jsx)("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return Object(o.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return Object(o.jsx)("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return Object(o.jsx)("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return Object(o.jsx)("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return Object(o.jsx)("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return Object(o.jsx)("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return Object(o.jsx)("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return Object(o.jsx)(o.Fragment,{})}}),[t.variant]);return Object(o.jsxs)("g",{transform:"translate(0,".concat("gz4"===t.variant?-20:0,")"),children:[Object(o.jsx)("rect",{id:"strip_gz",style:Object(c.a)({},"--height","".concat(e,"px"))}),Object(o.jsx)("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:t.isShowLight&&n}),!1!==t.isShowPSD&&Object(o.jsx)(u,Object(r.a)({},t))]})};var u=s.a.memo((function(t){var e,n=["gz28","gz2otis","gz6","gzgf"].includes(t.variant),r=function(t){switch(t){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}}(t.variant);return Object(o.jsxs)("g",{textAnchor:"middle",fill:n?i.h.black:"var(--rmg-theme-fg)",style:(e={},Object(c.a)(e,"--psd-dy",r),Object(c.a)(e,"transform","translate(var(--translate-x), var(--translate-y))"),Object(c.a)(e,"--translate-x","calc(var(--rmg-svg-width) / 2 + 80px)"),Object(c.a)(e,"--translate-y","calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"),e),children:[Object(o.jsx)("rect",{height:40,width:40,rx:4,x:-20,fill:n?"#fff":"var(--rmg-theme-colour)"}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:20,dy:12,children:t.isShowPSD}),Object(o.jsx)("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"\u5c4f\u853d\u95e8"}),Object(o.jsx)("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]})}),(function(t,e){return t.variant===e.variant&&t.isShowPSD===e.isShowPSD}))},75:function(t,e,n){"use strict";var r=n(0),c=n(10),a=n(36),s=n(4),i=n.n(s),o=n(1),u=["lineNum","stnNum"];e.a=function(t){var e=t.lineNum,n=t.stnNum,s=Object(a.a)(t,u),l=15.03125,j=i.a.useRef(null),h=i.a.useState({width:l}),f=Object(c.a)(h,2),d=f[0],m=f[1];i.a.useEffect((function(){return m(j.current.getBBox())}),[e]);var O=d.width>l?l/d.width:1,b=2===e.length?O:1;return Object(o.jsx)("g",Object(r.a)(Object(r.a)({textAnchor:"middle",fontSize:13.5},s),{},{children:i.a.useMemo((function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("g",{transform:"translate(-9.25,0)scale(".concat(O,")"),children:Object(o.jsx)("text",{ref:j,className:"rmg-name__zh",children:e})}),Object(o.jsx)("g",{transform:"translate(9.25,0)scale(".concat(b,")"),children:Object(o.jsx)("text",{className:"rmg-name__zh",children:n})})]})}),[d.width,e,n])}))}}}]);
//# sourceMappingURL=railmapGZMTR.3d2166a7.chunk.js.map