(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[94],{136:function(t,n,e){"use strict";e.r(n);var r=e(3),s=e.n(r),c=e(76),a=e(5),i=e(1),o=e(23),l=e(37),u=e(77),d=e(11),h=e(2),j=e(10),f=e(0),b=function(t){var n=t.stnId,e=t.stnState,s=t.namePos,c=Object(j.useSelector)((function(t){return t.param.stn_list[n]})),a=Object(r.useMemo)((function(){var t=[];return c.branch.right.length&&t.push(1===c.children.indexOf(c.branch.right[1])?"SE":"NE"),c.branch.left.length&&t.push(1===c.parents.indexOf(c.branch.left[1])?"SW":"NW"),t}),[c.parents.toString(),c.children.toString(),JSON.stringify(c.branch)]),i=Object(r.useMemo)((function(){var t=a;return 0===t.length?"":t.includes("NW")&&t.includes("SE")||t.includes("NE")&&t.includes("SW")?"_bb":"_b"}),[a.toString()]),o=Object(r.useMemo)((function(){if(""===i)return 0;if("_bb"===i)return s?9.68:-9.68;var t=a;return t.includes("SE")||t.includes("SW")?s?9.68:0:t.includes("NE")||t.includes("NW")?s?0:-9.68:void 0}),[a.toString(),i,s]),l=Object(r.useMemo)((function(){if(""===i)return 0;if("_bb"===i)return s?-9.68:9.68;var t=a;return t.includes("SE")||t.includes("SW")?s?0:9.68:t.includes("NE")||t.includes("NW")?s?-9.68:0:void 0}),[i,s,a]),u=function(t){var n=function(t){return t<11?"int"+(t+1):"int12"};return t[1]?1===t[1]?t[0]<=1?"osi11":n(t[0]):2===t[1]?0===t[0]?"osi12":1===t[0]?"linestart"===c.parents[0]||"lineend"===c.children[0]?"osi22end":"osi22":n(t[0]):t[0]&&1!==t[0]?n(t[0]):"osi12":t[0]?1===t[0]?"int":n(t[0]):"stn"}(c.transfer.info.map((function(t){return t.length})));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("g",{transform:"translate(0,".concat(l,")"),children:[Object(f.jsx)(x,{variant:u,stnTrans:c.transfer,stnState:e,namePos:s,end:"osi22end"===u?"linestart"===c.parents[0]?h.d.left:h.d.right:void 0}),u.includes("osi")&&Object(f.jsx)(p,{name:c.transfer.osi_names[0],stnState:e,variant:u,tickDirec:c.transfer.tick_direc,namePos:s,end:"osi22end"===u?"linestart"===c.parents[0]?h.d.left:h.d.right:void 0})]}),Object(f.jsx)("use",{xlinkHref:"#"+u+i,stroke:-1===e?"var(--rmg-grey)":"var(--rmg-black)",className:c.transfer.paid_area?"rmg-stn__mtr--paid-osi":"rmg-stn__mtr--unpaid-osi",transform:"translate(0,".concat(o,")")+"scale(".concat("lineend"===c.children[0]?1:-1,",").concat(s?-1:1,")")}),Object(f.jsx)("g",{transform:"translate(0,".concat(o,")"),children:Object(f.jsx)(m,{name:c.name,namePos:s,stnState:e,facility:c.facility,nameDX:"osi22"===u?"l"===c.transfer.tick_direc?3:-3:void 0})})]})},m=function(t){var n=t.name,e=t.namePos,s=t.stnState,c=t.nameDX,a=t.facility,i=33.03125,o=Object(r.useRef)(null),l=Object(r.useState)({width:0,x:0}),u=Object(d.a)(l,2),j=u[0],b=u[1];Object(r.useEffect)((function(){document.fonts.ready.then((function(){return b(o.current.getBBox())}))}),[s,n.toString()]);var m=e?24.8125:-36.21875-11*(n[1].split("\\").length-1),x=c?c>0?"start":"end":"middle",g=c?e?10:-10:0,p=c?c>0?c+17.515625:-17.515625-j.width+c:-(j.width+3)/2,v=a===h.e.none?0:c?c<0?0:38.03125+c:19.015625;return Object(f.jsxs)("g",{textAnchor:x,transform:"translate(0,".concat(m+g,")"),className:"Name ".concat(-1===s?"Pass":0===s?"Current":"Future"),children:[0===s&&Object(f.jsx)("rect",{x:j.x-3+(0===v?0:v-3-i),y:-11.8125,width:j.width+6+(0===v?0:36.03125),height:i+11*(n[1].split("\\").length-1)+2,fill:"var(--rmg-black)"}),a!==h.e.none&&Object(f.jsx)("use",{xlinkHref:"#"+a,fill:-1===s?"var(--rmg-grey)":"var(--rmg-black)",x:p,y:5.5*(n[1].split("\\").length-1)-11.8125}),Object(f.jsx)("g",{ref:o,transform:"translate(".concat(v,",0)"),children:Object(f.jsx)(O,{name:n,nameGap:17})})]})},O=s.a.memo((function(t){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("text",{className:"rmg-name__zh rmg-name__mtr--station",children:t.name[0]}),t.name[1].split("\\").map((function(n,e){return Object(f.jsx)("text",{className:"rmg-name__en rmg-name__mtr--station",dy:t.nameGap+11*e,children:n},e)}))]})}),(function(t,n){return t.name.toString()===n.name.toString()&&t.nameGap===n.nameGap})),x=function(t){var n=t.variant,e=t.stnTrans,r=t.stnState,s=t.namePos,c=t.end;switch(n){case"int":return Object(f.jsx)("g",{children:Object(f.jsx)(g,{intInfo:e.info[0][0],stnState:r,rotation:s?180:0})});case"osi11":return Object(f.jsx)("g",{transform:"translate(0,".concat(s?-26:26,")"),children:Object(f.jsx)(g,{intInfo:e.info[1][0],stnState:r,rotation:s?180:0})});case"osi12":return Object(f.jsx)(f.Fragment,{children:e.info[1].map((function(t,n){return Object(f.jsx)("g",{transform:"translate(0,".concat(s?-8-18*(e.info[1].length-n):8+18*(n+1),")"),children:Object(f.jsx)(g,{intInfo:t,stnState:r,rotation:e.tick_direc===h.m.right?-90:90})},n)}))});case"osi22":return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("g",{children:Object(f.jsx)(g,{intInfo:e.info[0][0],stnState:r,rotation:s?0:180,nameDX:e.tick_direc===h.m.right?3:-3})}),e.info[1].map((function(t,n){return Object(f.jsx)("g",{transform:"translate(0,".concat(s?-8-18*(e.info[1].length-n):8+18*(n+1),")"),children:Object(f.jsx)(g,{intInfo:t,stnState:r,rotation:e.tick_direc===h.m.right?-90:90})},n)}))]});case"osi22end":return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("g",{children:Object(f.jsx)(g,{intInfo:e.info[0][0],stnState:r,rotation:s?180:0})}),e.info[1].map((function(t,n){return Object(f.jsx)("g",{transform:"translate(".concat(c===h.d.left?-41:41,",").concat(s?18*n:-18*(e.info[1].length-1-n),")"),children:Object(f.jsx)(g,{intInfo:t,stnState:r,rotation:c===h.d.left?90:-90})},n)}))]});default:return n.includes("int")?Object(f.jsx)(f.Fragment,{children:e.info[0].map((function(t,n){return Object(f.jsx)("g",{style:{transform:"translateY(".concat(s?-18*(e.info[0].length-n):18*(n+1),"px)")},children:Object(f.jsx)(g,{intInfo:t,stnState:r,rotation:e.tick_direc===h.m.right?-90:90})},n)}))}):Object(f.jsx)(f.Fragment,{})}},g=function(t){var n=t.intInfo,e=t.stnState,s=t.rotation,c=t.nameDX,a=n[4].split("\\").length,i=n[5].split("\\").length,o=function(t){switch(t){case 90:return-24;case-90:return 24;default:return 0}}(s),l=function(t){switch(t){case 0:return 30.953125;case 180:return-37.703125-10*(a-1)-7*(i-1);default:return 5.953125-(19.65625+10*(a-1)+7*(i-1)-1)/2}}(s),u=function(t){switch(t){case 90:return"end";case-90:return"start";default:return c?c>0?"start":"end":"middle"}}(s);return Object(r.useMemo)((function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("use",{xlinkHref:"#inttick",stroke:n[2],transform:"rotate(".concat(s,")"),className:"rmg-line rmg-line__mtr rmg-line__change"+(-1===e?" rmg-line__pass":"")}),Object(f.jsxs)("g",{textAnchor:u,transform:"translate(".concat(o+(c||0),",").concat(l,")"),className:"Name ".concat(-1===e?"Pass":"Future"),children:[n[4].split("\\").map((function(t,n){return Object(f.jsx)("text",{className:"rmg-name__zh IntName",dy:10*n,children:t},n)})),n[5].split("\\").map((function(t,n){return Object(f.jsx)("text",{className:"rmg-name__en IntName",dy:10*a-1+7*n,children:t},a+n)}))]})]})}),[n.toString(),s,e])},p=function(t){var n,e=t.name,r=t.stnState,s=t.variant,c=t.tickDirec,a=t.namePos,i=t.end,o=function(t){switch(t){case"osi11":return c===h.m.left?"end":"start";case"osi22":return c===h.m.left?"start":"end";default:return"middle"}}(s),l=function(t){switch(t){case"osi11":return c===h.m.left?-13:13;case"osi22":return c===h.m.left?13:-13;case"osi22end":return i===h.d.left?-41:41;default:return 0}}(s),u=function(t){var n,r,s,c;switch(t){case"osi11":return 8.34375+(a?-26:26)-12.515625-(a?10*((null===e||void 0===e||null===(n=e[1])||void 0===n?void 0:n.split("\\").length)-1):0);case"osi12":return a?-70.6875-10*((null===e||void 0===e||null===(r=e[1])||void 0===r?void 0:r.split("\\").length)-1):62.34375;case"osi22":return(a?-8:8)-(a?27:-27)+8.34375-12.515625-5*((null===e||void 0===e||null===(s=e[1])||void 0===s?void 0:s.split("\\").length)-1);case"osi22end":return a?-26.6875-10*((null===e||void 0===e||null===(c=e[1])||void 0===c?void 0:c.split("\\").length)-1):18.34375;default:return 0}}(s);return Object(f.jsxs)("g",{textAnchor:o,transform:"translate(".concat(l,",").concat(u,")"),className:"Name ".concat(-1===r?"Pass":"Future"),children:[Object(f.jsx)("text",{className:"rmg-name__zh rmg-name__mtr--osi",children:null===e||void 0===e?void 0:e[0]}),null===e||void 0===e||null===(n=e[1])||void 0===n?void 0:n.split("\\").map((function(t,n){return Object(f.jsx)("text",{className:"rmg-name__en rmg-name__mtr--osi",dy:12+10*n,children:t},n)}))]})},v=function(t,n){var e=0,r=t[n].transfer,s=r.info.map((function(t){return t.length}));return"l"===r.tick_direc&&(!s[1]&&s[0]>1&&(e+=.8),!s[1]||1===s[0]&&2===s[1]||(e+=.8)),1===s[0]&&2===s[1]&&"linestart"!==t[n].parents[0]&&"lineend"!==t[n].children[0]&&(e+=.8),2===t[n].parents.length&&(e+=.4),2===t[t[n].parents[0]].children.length&&(e+=.4),e},_=function(t,n){var e=0,r=t[n].transfer,s=r.info.map((function(t){return t.length}));return"r"===r.tick_direc&&(!s[1]&&s[0]>1&&(e+=.8),!s[1]||1===s[0]&&2===s[1]||(e+=.8)),1===s[0]&&2===s[1]&&"linestart"!==t[n].parents[0]&&"lineend"!==t[n].children[0]&&(e+=.8),2===t[n].children.length&&(e+=.4),2===t[t[n].children[0]].parents.length&&(e+=.4),e},y=function(){var t,n=s.a.useContext(o.a),e=n.branches,c=n.routes,d=n.deps,b=Object(j.useSelector)((function(t){return t.param.svgWidth})),m=Object(j.useSelector)((function(t){return t.param.y_pc})),O=Object(j.useSelector)((function(t){return t.param.padding})),x=Object(j.useSelector)((function(t){return t.param.branch_spacing})),g=Object(j.useSelector)((function(t){return t.param.direction})),p=Object(j.useSelector)((function(t){return t.param.namePosMTR})),y=Object(j.useSelector)((function(t){return t.param.current_stn_idx})),M=Object(j.useSelector)((function(t){return t.param.stn_list})),w=Object(l.b)(M,v,_),N=Object(r.useMemo)((function(){return Object(l.c)("linestart","lineend",w)}),[JSON.stringify(w)]),P=Object(r.useMemo)((function(){return Object(l.c)(N.nodes[1],N.nodes.slice(-2)[0],w)}),[JSON.stringify(w)]),H=Object(r.useMemo)((function(){return console.log("computing x shares"),Object.keys(M).reduce((function(t,n){return Object(i.a)(Object(i.a)({},t),{},Object(a.a)({},n,Object(l.f)(n,w,e)))}),{})}),[e.toString(),JSON.stringify(w)]),L=[b[h.c.RailMap]*O/100,b[h.c.RailMap]*(1-O/100)],F=Object.keys(H).reduce((function(t,n){return Object(i.a)(Object(i.a)({},t),{},Object(a.a)({},n,L[0]+H[n]/P.len*(L[1]-L[0])))}),{}),W=Object(r.useMemo)((function(){return u.a.getYShares(M,e)}),[d]),E=Object.keys(W).reduce((function(t,n){return Object(i.a)(Object(i.a)({},t),{},Object(a.a)({},n,-W[n]*x+(e[0].includes(n)?0:W[n]>0?-9.68:9.68)))}),{}),I=Object(r.useMemo)((function(){return Object(l.e)(y,c,g)}),[y,g,c.toString()]),T=Object.keys(M).reduce((function(t,n){return Object(i.a)(Object(i.a)({},t),{},Object(a.a)({},n,function(t,n,e){var r,s=e.isStagger,c=e.isFlip;if(!s)return c;if(n[0].includes(t))r=n[0].indexOf(t)%2;else{var a=n.filter((function(n){return n.includes(t)}))[0];r=(n[0].indexOf(a[0])+a.indexOf(t)+1)%2}return 0===r?c:!c}(n,e,p)))}),{}),Z=u.a.drawLine(e,I,M,L,F,E,x,N);return Object(f.jsxs)("g",{id:"main",style:(t={},Object(a.a)(t,"--y-percentage",m),Object(a.a)(t,"transform","translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"),t),children:[Object(f.jsx)(S,{paths:Z}),Object(f.jsx)(k,{xs:F,ys:E,stnStates:I,namePoss:T})]})},S=s.a.memo((function(t){return Object(f.jsxs)("g",{fill:"none",strokeWidth:9.68,children:[Object(f.jsx)("g",{stroke:"var(--rmg-grey)",children:t.paths.pass.map((function(t,n){return Object(f.jsx)("path",{d:t},n)}))}),Object(f.jsx)("g",{stroke:"var(--rmg-theme-colour)",children:t.paths.main.map((function(t,n){return Object(f.jsx)("path",{d:t},n)}))})]})}),(function(t,n){return JSON.stringify(t.paths)===JSON.stringify(n.paths)})),k=function(t){var n=t.xs,e=t.ys,r=t.stnStates,s=t.namePoss,c=Object(j.useSelector)((function(t){return t.param.stn_list}));return Object(f.jsx)("g",{id:"stn_icons",children:Object.keys(c).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(t){return Object(f.jsx)("g",{style:{transform:"translate(".concat(n[t],"px,").concat(e[t],"px)")},children:Object(f.jsx)(b,{stnId:t,stnState:r[t],namePos:s[t]})},t)}))})},M=(n.default=Object(r.memo)((function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(M,{}),Object(f.jsx)(c.a,{stripPc:90}),Object(f.jsx)(y,{})]})})),s.a.memo((function(){return Object(f.jsxs)("defs",{children:[Object(f.jsxs)("g",{id:"airport",transform:"scale(0.5970084519)",children:[Object(f.jsx)("rect",{x:-29.33899,height:58.67798,width:58.67798}),Object(f.jsx)("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})]}),Object(f.jsxs)("g",{id:"disney",transform:"scale(0.5970084519)",children:[Object(f.jsx)("rect",{x:-29.33899,width:58.67798,height:58.67798}),Object(f.jsx)("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"})]}),Object(f.jsx)("clipPath",{id:"hsr-clip-path",transform:"translate(-0.00057 0.01643)",children:Object(f.jsx)("path",{fill:"none",d:"M5.1606.89861a3.67176,3.67176,0,0,0-3.676,3.667v48.966a3.67842,3.67842,0,0,0,3.676,3.692h48.443a3.67892,3.67892,0,0,0,3.678-3.692V4.5656a3.67227,3.67227,0,0,0-3.678-3.667Z"})}),Object(f.jsxs)("g",{id:"hsr",transform:"scale(0.5970084519)",children:[Object(f.jsx)("rect",{x:-29.33899,width:58.67798,height:58.67798}),Object(f.jsxs)("g",{clipPath:"url(#hsr-clip-path)",transform:"translate(-29.33899,0)",children:[Object(f.jsx)("rect",{x:-3.25242,y:24.74141,width:61.75879,height:.98008,transform:"translate(-8.93747 17.31321) rotate(-30.16134)",fill:"white"}),Object(f.jsx)("path",{d:"M5.77169,48.97289c-2.17407-3.89294,2.56994-10.525,4.85-13.724l.173-.248a83.00826,83.00826,0,0,1,7.39294-9.285,97.384,97.384,0,0,1,11.082-9.958c7.051-6.045,15.832-5.876,16.447-5.894l11.785-.957.276,17.42-11.5271,10.586c-.36.39405-5.553,5.863-18.10193,11.035-6.752,2.783-11.877,4.146-15.66,4.146-3.301,0-5.561-1.049-6.71692-3.121",transform:"translate(-0.00057 0.01643)",fill:"white"}),Object(f.jsx)("polygon",{points:"57.453 29.614 32.426 58.31 35.582 58.509 57.584 30.433 57.453 29.614",fill:"white"}),Object(f.jsx)("path",{d:"M49.04708,11.61364a.94277.94277,0,0,0-.17407-.227c-.752-.93695-2.988-1.259-5.933-.793a25.98382,25.98382,0,0,0-9.99695,3.032A98.52916,98.52916,0,0,0,20.723,23.69768c-3.1759,3.487-4.645,6.388-3.62292,7.584,1.84,2.166,13.7539.716,22.00793-6.066,9.035-7.42,10.718-11.577,9.93909-13.602",transform:"translate(-0.00057 0.01643)"}),Object(f.jsx)("path",{d:"M34.65255,13.81182c5.65991-2.842,11.28088-2.856,12.1499-1.213.88306,1.652-2.99792,5.303-8.656,8.128-5.648,2.837-10.9469,3.805-11.81994,2.15-.873-1.641,2.668-6.237,8.326-9.065",transform:"translate(-0.00057 0.01643)",fill:"white"}),Object(f.jsx)("path",{d:"M58.10958,25.03454c-16.832,20.708-40.7301,26.038-40.7301,26.038,11-6.73,12.769-8.111,18.968-18.01,8.364-13.351,21.77808-21.549,21.912-21.63,0,0-.068,13.5-.1499,13.602",transform:"translate(-0.00057 0.01643)"}),Object(f.jsx)("path",{d:"M27.1877,26.69561l9.705-2.814a6.22768,6.22768,0,0,1-1.994,2.759,25.57277,25.57277,0,0,1-6.697,3.405,11.78221,11.78221,0,0,1-5.5.783Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),Object(f.jsx)("path",{d:"M19.59005,25.97692a18.37656,18.37656,0,0,1,3.891-3.976,6.66452,6.66452,0,0,0-.30908,2.213l-4.391,4.829a6.18212,6.18212,0,0,1,.80908-3.066",transform:"translate(-0.00057 0.01643)",fill:"white"}),Object(f.jsx)("polygon",{points:"23.156 58.311 57.463 26.746 57.396 25.857 21.582 58.607 23.156 58.311",fill:"white"}),Object(f.jsx)("path",{d:"M60.15645,12.35973a68.6782,68.6782,0,0,0-12.602,9.542c-8.15,7.745-12.109,15.259-9.855,16.091,2.24793.816,10.678-4.782,18.83594-12.543,1.828-1.74,3.48-3.424,4.926-5.024Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),Object(f.jsx)("path",{d:"M63.07638,11.82653a40.86955,40.86955,0,0,0-10,7.096c-5.90406,5.437-9.48609,11.105-7.848,11.742,1.657.631,8.28894-3.955,14.188-9.401a61.76591,61.76591,0,0,0,4.61694-4.705Z",transform:"translate(-0.00057 0.01643)"}),Object(f.jsx)("path",{d:"M12.67989,42.93969a9.87,9.87,0,0,0-5.754-1.895c-.113.22-.223.439-.33008.662a9.45046,9.45046,0,0,1,5.69507,1.749,6.27885,6.27885,0,0,1,2.61,6.305,10.16524,10.16524,0,0,1-.598,2.228c.238-.023.481-.053.725-.087.78308-2.249,1.394-6.184-2.3479-8.962",transform:"translate(-0.00057 0.01643)"})]})]}),Object(f.jsx)("circle",{id:"stn",r:8,className:"rmg-stn__mtr"}),Object(f.jsx)("path",{id:"stn_b",className:"rmg-stn__mtr",d:"M-6.369803765,4.84a8,8,0,1,1,12.73960753,0a8,8,0,1,1-12.73960758,0Z"}),Object(f.jsx)("path",{id:"stn_bb",d:"M-6.369803765,4.84a8,8,0,1,1,12.73960753,0a8,8,0,0,1,0,9.68a8,8,0,1,1-12.73960753,0a8,8,0,0,1,0,-9.68Z",className:"rmg-stn__mtr"}),Object(f.jsx)("use",{id:"int",xlinkHref:"#stn"}),Object(f.jsx)("use",{id:"int_b",xlinkHref:"#stn_b"}),Object(f.jsx)("use",{id:"int_bb",xlinkHref:"#stn_bb"}),Object(f.jsx)("path",{id:"int2",d:"M -8,0 v 18 a 8,8 0 0,0 16,0 v -18 a 8,8 0 0,0 -16,0 Z",className:"rmg-stn__mtr"}),[3,4,5,6,7,8,9,10,11,12].map((function(t){var n=18*(t-1);return Object(f.jsxs)(s.a.Fragment,{children:[Object(f.jsx)("path",{id:"int".concat(t),d:"M-8,0v".concat(n,"a8,8,0,0,0,16,0v-").concat(n,"a8,8,0,0,0-16,0Z"),className:"rmg-stn__mtr"}),Object(f.jsx)("path",{id:"int".concat(t,"_b"),className:"rmg-stn__mtr",d:"M-8,9.68v".concat(n,"a8,8,0,0,0,16,0v-").concat(n,"a8,8,0,0,0-1.630196235-4.84a8,8,0,1,0-12.73960758,0a8,8,0,0,0-1.630196235,4.84Z")}),Object(f.jsx)("path",{id:"int".concat(t,"_bb"),className:"rmg-stn__mtr",d:"M-8,19.36v".concat(n,"a8,8,0,0,0,16,0v-").concat(n,"a8,8,0,0,0-1.630196235-4.84a8,8,0,0,0,0-9.68a8,8,0,1,0-12.73960758,0a8,8,0,0,0,0,9.68a8,8,0,0,0-1.630196235,4.84Z")})]},t)})),Object(f.jsxs)("g",{id:"osi11",children:[Object(f.jsx)("path",{d:"M0,0V26"}),Object(f.jsx)("use",{xlinkHref:"#stn"}),Object(f.jsx)("use",{xlinkHref:"#stn",y:26})]}),Object(f.jsxs)("g",{id:"osi11_b",children:[Object(f.jsx)("path",{d:"M0,0V35.68"}),Object(f.jsx)("use",{xlinkHref:"#stn_b"}),Object(f.jsx)("use",{xlinkHref:"#stn",y:35.68})]}),Object(f.jsxs)("g",{id:"osi11_bb",children:[Object(f.jsx)("path",{d:"M0,0V45.36"}),Object(f.jsx)("use",{xlinkHref:"#stn_bb"}),Object(f.jsx)("use",{xlinkHref:"#stn",y:45.36})]}),Object(f.jsxs)("g",{id:"osi12",children:[Object(f.jsx)("path",{d:"M0,0V26"}),Object(f.jsx)("use",{xlinkHref:"#stn"}),Object(f.jsx)("use",{xlinkHref:"#int2",y:26})]}),Object(f.jsxs)("g",{id:"osi12_b",children:[Object(f.jsx)("path",{d:"M0,11V35.68"}),Object(f.jsx)("use",{xlinkHref:"#stn_b"}),Object(f.jsx)("use",{xlinkHref:"#int2",y:35.68})]}),Object(f.jsxs)("g",{id:"osi12_bb",children:[Object(f.jsx)("path",{d:"M0,11V45.36"}),Object(f.jsx)("use",{xlinkHref:"#stn_bb"}),Object(f.jsx)("use",{xlinkHref:"#int2",y:45.36})]}),Object(f.jsx)("use",{id:"osi22",xlinkHref:"#osi12"}),Object(f.jsx)("use",{id:"osi22_b",xlinkHref:"#osi12_b"}),Object(f.jsx)("use",{id:"osi22_bb",xlinkHref:"#osi12_bb"}),Object(f.jsxs)("g",{id:"osi22end",children:[Object(f.jsx)("path",{d:"M0,0H41"}),Object(f.jsx)("use",{xlinkHref:"#stn"}),Object(f.jsx)("use",{xlinkHref:"#int2",x:41,y:-18})]}),Object(f.jsxs)("g",{id:"osi22end_b",children:[Object(f.jsx)("path",{d:"M0,9.68H41"}),Object(f.jsx)("use",{xlinkHref:"#stn_b"}),Object(f.jsx)("use",{xlinkHref:"#int2",x:41,y:-8.32})]}),Object(f.jsx)("path",{id:"inttick",d:"M0,0v17",strokeLinecap:"round"})]})})))},37:function(t,n,e){"use strict";e.d(n,"b",(function(){return d})),e.d(n,"c",(function(){return h})),e.d(n,"f",(function(){return j})),e.d(n,"e",(function(){return f})),e.d(n,"a",(function(){return b})),e.d(n,"d",(function(){return m}));var r=e(11),s=e(17),c=e(19),a=e(13),i=e(24),o=e(5),l=e(1),u=(e(18),e(2)),d=function(t,n,e){return Object.keys(t).reduce((function(r,s){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},s,t[s].children.reduce((function(r,c){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},c,1+n(t,c)+e(t,s)))}),{})))}),{})},h=function t(n,e,r){if(n===e)return{len:0,nodes:[n]};var s=[],c=[];Object.keys(r[n]).forEach((function(a){var i=t(a,e,r);i.len<0||(s.push(r[n][a]+i.len),i.nodes.unshift(n),c.push(i.nodes))}));var a=Math.max.apply(Math,s);return{len:a,nodes:c[s.indexOf(a)]}},j=function(t,n,e){var r=h("linestart","lineend",n);if(r.nodes.includes(t))return h(r.nodes[1],t,n).len;for(var s=e.filter((function(n){return n.includes(t)}))[0],c=t;!r.nodes.includes(c);)c=s[s.indexOf(c)-1];for(var a=t;!r.nodes.includes(a);)a=s[s.indexOf(a)+1];var i="linestart"===c,o=[];return i||"lineend"===a?i?(o[0]=0,o[1]=h(r.nodes[1],a,n).len,o[2]=h(s[1],t,n).len,o[3]=h(t,a,n).len):(o[0]=h(r.nodes[1],c,n).len,o[1]=h(c,r.nodes.slice(-2)[0],n).len,o[2]=h(c,t,n).len,o[3]=h(t,s.slice(-2)[0],n).len):(o[0]=h(r.nodes[1],c,n).len,o[1]=h(c,a,n).len,o[2]=h(c,t,n).len,o[3]=h(t,a,n).len),o[0]+o[2]*o[1]/(o[2]+o[3])},f=function(t,n,e){var r;return console.log("computing stations' states"),Object(a.a)(new Set((r=[]).concat.apply(r,Object(a.a)(n)))).reduce((function(r,s){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},s,s===t?0:(e===u.m.right?function(t,n,e){var r,s=Object(i.a)(e);try{for(s.s();!(r=s.n()).done;){var c=r.value,a=c.indexOf(t),o=c.indexOf(n);if(-1!==a&&a<o)return!0}}catch(l){s.e(l)}finally{s.f()}return!1}(t,s,n):function(t,n,e){var r,s=Object(i.a)(e);try{for(s.s();!(r=s.n()).done;){var c=r.value,a=c.indexOf(t),o=c.indexOf(n);if(-1!==o&&o<a)return!0}}catch(l){s.e(l)}finally{s.f()}return!1}(t,s,n))?1:-1))}),{})},b=function(){function t(n){var e=this;Object(s.a)(this,t),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(t){return 0},this.rightWideFactor=function(t){return 0},this.pathWeight=function(t,n){return e.stnList[t].children.includes(n)?1+e.rightWideFactor(t)+e.leftWideFactor(n):-1/0},this.pathTurnParams=function(t){var n=35-17.5*Math.sqrt(3),e=t-2*n;return{tr:35,dx_a:17.5,dy_a:n,dx_l:e*Math.sqrt(3),dy_l:e}},this.pathTurnSE=function(t){var n=e.pathTurnParams(t),r=n.tr,s=n.dx_a,c=n.dy_a,a=n.dx_l,i=n.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(s,",").concat(c," l ").concat(a,",").concat(i," a ").concat(r,",").concat(r," 0 0,0 ").concat(s,",").concat(c)},this.pathTurnNE=function(t){var n=e.pathTurnParams(t),r=n.tr,s=n.dx_a,c=n.dy_a,a=n.dx_l,i=n.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(s,",").concat(-c," l ").concat(a,",").concat(-i," a ").concat(r,",").concat(r," 0 0,1 ").concat(s,",").concat(-c)},this.stnList=n.stnList,this.criticalPath=n.criticalPath}return Object(c.a)(t,[{key:"getYShare",value:function(t,n){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;var e=this.stnList[t].parents[0];if(e){if(1===this.stnList[e].children.length){var r=this.getYShare(e);return this.yShares[t]=r,r}var s=0===this.stnList[e].children.indexOf(t)?1:-1;return this.yShares[t]=s,s}return this.yShares[t]=0,0}},{key:"_linePath",value:function(t,n,e,s,c,a,i,o){var l=this,u=Object(r.a)([],3),d=u[0],h=u[1],j=u[2],f=[],b=this.pathTurnParams(a),m=b.dx_a+b.dx_l/2,O=(n[1]-n[0])/i.len*.8,x=((n[1]-n[0])/i.len-2*m)/2;return x+O<0&&console.warn("SVG width too small! ".concat(x+O)),t.forEach((function(n){var r=s[n],i=c[n];if(!h&&0!==h)return d=n,j=r,h=i,void(1===t.length?f.push("M ".concat(r,",").concat(i)):e[0].includes(n)?e[0].includes(t[1])?f.push("M ".concat(r,",").concat(i)):(s[t[1]]>0&&f.push("M ".concat(r,",").concat(i+o)),c[t[1]]<0&&f.push("M ".concat(r,",").concat(i-o))):f.push("M ".concat(r,",").concat(i)));i>h?(f.push("h ".concat(0===i?r-j-O*l.leftWideFactor(n)-x-2*m:O*l.rightWideFactor(d)+x)),f.push(l.pathTurnSE(a))):i<h&&(f.push("h ".concat(0===i?r-j-O*l.leftWideFactor(n)-x-2*m:O*l.rightWideFactor(d)+x)),f.push(l.pathTurnNE(a))),f.push("H ".concat(r)),d=n,j=r,h=i})),f.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(t,n){console.log("computing y shares");var e=new this({stnList:t});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in e.yShares||e.getYShare(t,n)})),e.yShares}},{key:"drawLine",value:function(t,n,e,r,s,c,a,i){var o=this,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:9.68,u={main:[],pass:[]};return t.forEach((function(d,h){var j=(d=d.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return n[t]>=0})),f=d.filter((function(t){return n[t]<=0}));1===j.length&&(f=d),0===j.filter((function(t){return-1!==f.indexOf(t)})).length&&j.length&&(f[0]===d[0]?f.push(j[0]):j[0]===d[0]&&j[j.length-1]===d[d.length-1]&&f.length?(f=d,j=[]):f.unshift(j[j.length-1])),u.main.push(new o({stnList:e,criticalPath:i})._linePath(j,r,t,s,c,a,i,l)),u.pass.push(new o({stnList:e,criticalPath:i})._linePath(f,r,t,s,c,a,i,l))})),u}}]),t}(),m=function(t,n){var e={main:[],pass:[]};return t.forEach((function(t){var r=(t=t.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return n[t]>=0})),s=t.filter((function(t){return n[t]<=0}));1===r.length&&(s=t),0===r.filter((function(t){return-1!==s.indexOf(t)})).length&&r.length&&(s[0]===t[0]?s.push(r[0]):r[0]===t[0]&&r[r.length-1]===t[t.length-1]&&s.length?(s=t,r=[]):s.unshift(r[r.length-1])),e.main.push(r),e.pass.push(s)})),e}},76:function(t,n,e){"use strict";var r=e(5),s=e(3),c=e(0);n.a=Object(s.memo)((function(t){var n;return Object(c.jsx)("rect",{fill:"var(--rmg-theme-colour)",height:20,style:(n={width:"var(--rmg-svg-width)"},Object(r.a)(n,"--strip-percentage",t.stripPc),Object(r.a)(n,"transform","translateY(calc(var(--strip-percentage, 95) * var(--rmg-svg-height) / 100 - 10px))"),n)})}))},77:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(17),s=e(27),c=e(26),a=function(t){Object(s.a)(e,t);var n=Object(c.a)(e);function e(){var t;Object(r.a)(this,e);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(t=n.call.apply(n,[this].concat(c))).leftWideFactor=function(n){var e=0,r=t.stnList[n].transfer,s=r.info.map((function(t){return t.length}));return"l"===r.tick_direc&&(!s[1]&&s[0]>1&&(e+=.8),!s[1]||1===s[0]&&2===s[1]||(e+=.8)),1===s[0]&&2===s[1]&&"linestart"!==t.stnList[n].parents[0]&&"lineend"!==t.stnList[n].children[0]&&(e+=.8),2===t.stnList[n].parents.length&&(e+=.4),2===t.stnList[t.stnList[n].parents[0]].children.length&&(e+=.4),e},t.rightWideFactor=function(n){var e=0,r=t.stnList[n].transfer,s=r.info.map((function(t){return t.length}));return"r"===r.tick_direc&&(!s[1]&&s[0]>1&&(e+=.8),!s[1]||1===s[0]&&2===s[1]||(e+=.8)),1===s[0]&&2===s[1]&&"linestart"!==t.stnList[n].parents[0]&&"lineend"!==t.stnList[n].children[0]&&(e+=.8),2===t.stnList[n].children.length&&(e+=.4),2===t.stnList[t.stnList[n].children[0]].parents.length&&(e+=.4),e},t}return e}(e(37).a)}}]);
//# sourceMappingURL=railmapMTR.a0c0a157.chunk.js.map