(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[93],{162:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return d})),e.d(n,"f",(function(){return h})),e.d(n,"e",(function(){return j})),e.d(n,"a",(function(){return f})),e.d(n,"d",(function(){return m}));var r=e(17),s=e(72),a=e(73),i=e(36),c=e(74),o=e(8),l=e(1),u=(e(49),function(t,n,e){return Object.keys(t).reduce((function(r,s){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},s,t[s].children.reduce((function(r,a){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},a,1+n(t,a)+e(t,s)))}),{})))}),{})}),d=function t(n,e,r){if(n===e)return{len:0,nodes:[n]};var s=[],a=[];Object.keys(r[n]).forEach((function(i){var c=t(i,e,r);c.len<0||(s.push(r[n][i]+c.len),c.nodes.unshift(n),a.push(c.nodes))}));var i=Math.max.apply(Math,s);return{len:i,nodes:a[s.indexOf(i)]}},h=function(t,n,e){var r=d("linestart","lineend",n);if(r.nodes.includes(t))return d(r.nodes[1],t,n).len;for(var s=e.filter((function(n){return n.includes(t)}))[0],a=t;!r.nodes.includes(a);)a=s[s.indexOf(a)-1];for(var i=t;!r.nodes.includes(i);)i=s[s.indexOf(i)+1];var c="linestart"===a,o=[];return c||"lineend"===i?c?(o[0]=0,o[1]=d(r.nodes[1],i,n).len,o[2]=d(s[1],t,n).len,o[3]=d(t,i,n).len):(o[0]=d(r.nodes[1],a,n).len,o[1]=d(a,r.nodes.slice(-2)[0],n).len,o[2]=d(a,t,n).len,o[3]=d(t,s.slice(-2)[0],n).len):(o[0]=d(r.nodes[1],a,n).len,o[1]=d(a,i,n).len,o[2]=d(a,t,n).len,o[3]=d(t,i,n).len),o[0]+o[2]*o[1]/(o[2]+o[3])},j=function(t,n,e){var r;return console.log("computing stations' states"),Object(i.a)(new Set((r=[]).concat.apply(r,Object(i.a)(n)))).reduce((function(r,s){return Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},s,s===t?0:("r"===e?function(t,n,e){var r,s=Object(c.a)(e);try{for(s.s();!(r=s.n()).done;){var a=r.value,i=a.indexOf(t),o=a.indexOf(n);if(-1!==i&&i<o)return!0}}catch(l){s.e(l)}finally{s.f()}return!1}(t,s,n):function(t,n,e){var r,s=Object(c.a)(e);try{for(s.s();!(r=s.n()).done;){var a=r.value,i=a.indexOf(t),o=a.indexOf(n);if(-1!==o&&o<i)return!0}}catch(l){s.e(l)}finally{s.f()}return!1}(t,s,n))?1:-1))}),{})},f=function(){function t(n){var e=this;Object(s.a)(this,t),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(t){return 0},this.rightWideFactor=function(t){return 0},this.pathWeight=function(t,n){return e.stnList[t].children.includes(n)?1+e.rightWideFactor(t)+e.leftWideFactor(n):-1/0},this.pathTurnParams=function(t){var n=35-17.5*Math.sqrt(3),e=t-2*n;return{tr:35,dx_a:17.5,dy_a:n,dx_l:e*Math.sqrt(3),dy_l:e}},this.pathTurnSE=function(t){var n=e.pathTurnParams(t),r=n.tr,s=n.dx_a,a=n.dy_a,i=n.dx_l,c=n.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(s,",").concat(a," l ").concat(i,",").concat(c," a ").concat(r,",").concat(r," 0 0,0 ").concat(s,",").concat(a)},this.pathTurnNE=function(t){var n=e.pathTurnParams(t),r=n.tr,s=n.dx_a,a=n.dy_a,i=n.dx_l,c=n.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(s,",").concat(-a," l ").concat(i,",").concat(-c," a ").concat(r,",").concat(r," 0 0,1 ").concat(s,",").concat(-a)},this.stnList=n.stnList,this.criticalPath=n.criticalPath}return Object(a.a)(t,[{key:"getYShare",value:function(t,n){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;var e=this.stnList[t].parents[0];if(e){if(1===this.stnList[e].children.length){var r=this.getYShare(e);return this.yShares[t]=r,r}var s=0===this.stnList[e].children.indexOf(t)?1:-1;return this.yShares[t]=s,s}return this.yShares[t]=0,0}},{key:"_linePath",value:function(t,n,e,s,a,i,c){var o=this,l=Object(r.a)([],3),u=l[0],d=l[1],h=l[2],j=[],f=this.pathTurnParams(i),m=f.dx_a+f.dx_l/2,b=(n[1]-n[0])/c.len*.8,O=((n[1]-n[0])/c.len-2*m)/2;return O+b<0&&console.warn("SVG width too small! ".concat(O+b)),t.forEach((function(n){var r=s[n],c=a[n];if(!d&&0!==d)return u=n,h=r,d=c,void(1===t.length?j.push("M ".concat(r,",").concat(c)):e[0].includes(n)?e[0].includes(t[1])?j.push("M ".concat(r,",").concat(c)):(s[t[1]]>0&&j.push("M ".concat(r,",").concat(c+9.68)),a[t[1]]<0&&j.push("M ".concat(r,",").concat(c-9.68))):j.push("M ".concat(r,",").concat(c)));c>d?(j.push("h ".concat(0===c?r-h-b*o.leftWideFactor(n)-O-2*m:b*o.rightWideFactor(u)+O)),j.push(o.pathTurnSE(i))):c<d&&(j.push("h ".concat(0===c?r-h-b*o.leftWideFactor(n)-O-2*m:b*o.rightWideFactor(u)+O)),j.push(o.pathTurnNE(i))),j.push("H ".concat(r)),u=n,h=r,d=c})),j.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(t,n){console.log("computing y shares");var e=new this({stnList:t});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in e.yShares||e.getYShare(t,n)})),e.yShares}},{key:"drawLine",value:function(t,n,e,r,s,a,i,c){var o=this,l={main:[],pass:[]};return t.forEach((function(u,d){var h=(u=u.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return n[t]>=0})),j=u.filter((function(t){return n[t]<=0}));1===h.length&&(j=u),0===h.filter((function(t){return-1!==j.indexOf(t)})).length&&h.length&&(j[0]===u[0]?j.push(h[0]):h[0]===u[0]&&h[h.length-1]===u[u.length-1]&&j.length?(j=u,h=[]):j.unshift(h[h.length-1])),l.main.push(new o({stnList:e,criticalPath:c})._linePath(h,r,t,s,a,i,c)),l.pass.push(new o({stnList:e,criticalPath:c})._linePath(j,r,t,s,a,i,c))})),l}}]),t}(),m=function(t,n){var e={main:[],pass:[]};return t.forEach((function(t){var r=(t=t.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return n[t]>=0})),s=t.filter((function(t){return n[t]<=0}));1===r.length&&(s=t),0===r.filter((function(t){return-1!==s.indexOf(t)})).length&&r.length&&(s[0]===t[0]?s.push(r[0]):r[0]===t[0]&&r[r.length-1]===t[t.length-1]&&s.length?(s=t,r=[]):s.unshift(r[r.length-1])),e.main.push(r),e.pass.push(s)})),e}},207:function(t,n,e){"use strict";var r=e(8),s=e(0),a=e(3);n.a=Object(s.memo)((function(t){var n;return Object(a.jsx)("rect",{fill:"var(--rmg-theme-colour)",height:20,style:(n={width:"var(--rmg-svg-width)"},Object(r.a)(n,"--strip-percentage",t.stripPc),Object(r.a)(n,"transform","translateY(calc(var(--strip-percentage, 95) * var(--rmg-svg-height) / 100 - 10px))"),n)})}))},295:function(t,n,e){"use strict";e.r(n);var r=e(0),s=e.n(r),a=e(207),i=e(8),c=e(1),o=e(28),l=e(162),u=e(72),d=e(82),h=e(81),j=function(t){Object(d.a)(e,t);var n=Object(h.a)(e);function e(){var t;Object(u.a)(this,e);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(t=n.call.apply(n,[this].concat(s))).leftWideFactor=function(n){var e=0,r=t.stnList[n].transfer,s=r.info.map((function(t){return t.length}));return"l"===r.tick_direc&&(!s[1]&&s[0]>1&&(e+=.8),!s[1]||1===s[0]&&2===s[1]||(e+=.8)),1===s[0]&&2===s[1]&&"linestart"!==t.stnList[n].parents[0]&&"lineend"!==t.stnList[n].children[0]&&(e+=.8),2===t.stnList[n].parents.length&&(e+=.4),2===t.stnList[t.stnList[n].parents[0]].children.length&&(e+=.4),e},t.rightWideFactor=function(n){var e=0,r=t.stnList[n].transfer,s=r.info.map((function(t){return t.length}));return"r"===r.tick_direc&&(!s[1]&&s[0]>1&&(e+=.8),!s[1]||1===s[0]&&2===s[1]||(e+=.8)),1===s[0]&&2===s[1]&&"linestart"!==t.stnList[n].parents[0]&&"lineend"!==t.stnList[n].children[0]&&(e+=.8),2===t.stnList[n].children.length&&(e+=.4),2===t.stnList[t.stnList[n].children[0]].parents.length&&(e+=.4),e},t}return e}(l.a),f=e(17),m=e(3),b=function(t){var n=Object(r.useContext)(o.b).param.stn_list[t.stnId],e=Object(r.useMemo)((function(){var t=[];return n.branch.right.length&&t.push(1===n.children.indexOf(n.branch.right[1])?"SE":"NE"),n.branch.left.length&&t.push(1===n.parents.indexOf(n.branch.left[1])?"SW":"NW"),t}),[n.parents.toString(),n.children.toString(),JSON.stringify(n.branch)]),s=Object(r.useMemo)((function(){var t=e;return 0===t.length?"":t.includes("NW")&&t.includes("SE")||t.includes("NE")&&t.includes("SW")?"_bb":"_b"}),[e.toString()]),a=Object(r.useMemo)((function(){if(""===s)return 0;if("_bb"===s)return t.namePos?9.68:-9.68;var n=e;return n.includes("SE")||n.includes("SW")?t.namePos?9.68:0:n.includes("NE")||n.includes("NW")?t.namePos?0:-9.68:void 0}),[e.toString(),s,t.namePos]),i=Object(r.useMemo)((function(){if(""===s)return 0;if("_bb"===s)return t.namePos?-9.68:9.68;var n=e;return n.includes("SE")||n.includes("SW")?t.namePos?0:9.68:n.includes("NE")||n.includes("NW")?t.namePos?-9.68:0:void 0}),[s,t.namePos,e]),c=function(t){var e=function(t){return t<11?"int"+(t+1):"int12"};return t[1]?1===t[1]?t[0]<=1?"osi11":e(t[0]):2===t[1]?0===t[0]?"osi12":1===t[0]?"linestart"===n.parents[0]||"lineend"===n.children[0]?"osi22end":"osi22":e(t[0]):t[0]&&1!==t[0]?e(t[0]):"osi12":t[0]?1===t[0]?"int":e(t[0]):"stn"}(n.transfer.info.map((function(t){return t.length})));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("g",{transform:"translate(0,".concat(i,")"),children:[Object(m.jsx)(g,{variant:c,stnTrans:n.transfer,stnState:t.stnState,namePos:t.namePos,end:"osi22end"===c?"linestart"===n.parents[0]?"left":"right":void 0}),c.includes("osi")&&Object(m.jsx)(v,{name:n.transfer.osi_names[0],stnState:t.stnState,variant:c,tickDirec:n.transfer.tick_direc,namePos:t.namePos,end:"osi22end"===c?"linestart"===n.parents[0]?"left":"right":void 0})]}),Object(m.jsx)("use",{xlinkHref:"#"+c+s,stroke:-1===t.stnState?"var(--rmg-grey)":"var(--rmg-black)",className:n.transfer.paid_area?"rmg-stn__mtr--paid-osi":"rmg-stn__mtr--unpaid-osi",transform:"translate(0,".concat(a,")")+"scale(".concat("lineend"===n.children[0]?1:-1,",").concat(t.namePos?-1:1,")")}),Object(m.jsx)("g",{transform:"translate(0,".concat(a,")"),children:Object(m.jsx)(O,{name:n.name,namePos:t.namePos,stnState:t.stnState,facility:n.facility,nameDX:"osi22"===c?"l"===n.transfer.tick_direc?3:-3:void 0})})]})},O=function(t){var n=33.03125,e=Object(r.useRef)(null),s=Object(r.useState)({width:0,x:0}),a=Object(f.a)(s,2),i=a[0],c=a[1];Object(r.useEffect)((function(){document.fonts.ready.then((function(){return c(e.current.getBBox())}))}),[t.stnState,t.name.toString()]);var o=t.namePos?24.8125:-36.21875-11*(t.name[1].split("\\").length-1),l=t.nameDX?t.nameDX>0?"start":"end":"middle",u=t.nameDX?t.namePos?10:-10:0,d=t.nameDX?t.nameDX>0?t.nameDX+17.515625:-17.515625-i.width+t.nameDX:-(i.width+3)/2,h=""===t.facility?0:t.nameDX?t.nameDX<0?0:38.03125+t.nameDX:19.015625;return Object(m.jsxs)("g",{textAnchor:l,transform:"translate(0,".concat(o+u,")"),className:"Name ".concat(-1===t.stnState?"Pass":0===t.stnState?"Current":"Future"),children:[0===t.stnState&&Object(m.jsx)("rect",{x:i.x-3+(0===h?0:h-3-n),y:-11.8125,width:i.width+6+(0===h?0:36.03125),height:n+11*(t.name[1].split("\\").length-1)+2,fill:"var(--rmg-black)"}),""!==t.facility&&Object(m.jsx)("use",{xlinkHref:"#"+t.facility,fill:-1===t.stnState?"var(--rmg-grey)":"var(--rmg-black)",x:d,y:5.5*(t.name[1].split("\\").length-1)-11.8125}),Object(m.jsx)("g",{ref:e,transform:"translate(".concat(h,",0)"),children:Object(m.jsx)(x,{name:t.name,nameGap:17})})]})},x=s.a.memo((function(t){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("text",{className:"rmg-name__zh rmg-name__mtr--station",children:t.name[0]}),t.name[1].split("\\").map((function(n,e){return Object(m.jsx)("text",{className:"rmg-name__en rmg-name__mtr--station",dy:t.nameGap+11*e,children:n},e)}))]})}),(function(t,n){return t.name.toString()===n.name.toString()&&t.nameGap===n.nameGap})),g=function(t){switch(t.variant){case"int":return Object(m.jsx)("g",{children:Object(m.jsx)(p,{intInfo:t.stnTrans.info[0][0],stnState:t.stnState,rotation:t.namePos?180:0})});case"osi11":return Object(m.jsx)("g",{transform:"translate(0,".concat(t.namePos?-26:26,")"),children:Object(m.jsx)(p,{intInfo:t.stnTrans.info[1][0],stnState:t.stnState,rotation:t.namePos?180:0})});case"osi12":return Object(m.jsx)(m.Fragment,{children:t.stnTrans.info[1].map((function(n,e){return Object(m.jsx)("g",{transform:"translate(0,".concat(t.namePos?-8-18*(t.stnTrans.info[1].length-e):8+18*(e+1),")"),children:Object(m.jsx)(p,{intInfo:n,stnState:t.stnState,rotation:"r"===t.stnTrans.tick_direc?-90:90})},e)}))});case"osi22":return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("g",{children:Object(m.jsx)(p,{intInfo:t.stnTrans.info[0][0],stnState:t.stnState,rotation:t.namePos?0:180,nameDX:"r"===t.stnTrans.tick_direc?3:-3})}),t.stnTrans.info[1].map((function(n,e){return Object(m.jsx)("g",{transform:"translate(0,".concat(t.namePos?-8-18*(t.stnTrans.info[1].length-e):8+18*(e+1),")"),children:Object(m.jsx)(p,{intInfo:n,stnState:t.stnState,rotation:"r"===t.stnTrans.tick_direc?-90:90})},e)}))]});case"osi22end":return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("g",{children:Object(m.jsx)(p,{intInfo:t.stnTrans.info[0][0],stnState:t.stnState,rotation:t.namePos?180:0})}),t.stnTrans.info[1].map((function(n,e){return Object(m.jsx)("g",{transform:"translate(".concat("left"===t.end?-41:41,",").concat(t.namePos?18*e:-18*(t.stnTrans.info[1].length-1-e),")"),children:Object(m.jsx)(p,{intInfo:n,stnState:t.stnState,rotation:"left"===t.end?90:-90})},e)}))]});default:return t.variant.includes("int")?Object(m.jsx)(m.Fragment,{children:t.stnTrans.info[0].map((function(n,e){return Object(m.jsx)("g",{style:{transform:"translateY(".concat(t.namePos?-18*(t.stnTrans.info[0].length-e):18*(e+1),"px)")},children:Object(m.jsx)(p,{intInfo:n,stnState:t.stnState,rotation:"r"===t.stnTrans.tick_direc?-90:90})},e)}))}):Object(m.jsx)(m.Fragment,{})}},p=function(t){var n=t.intInfo[4].split("\\").length,e=t.intInfo[5].split("\\").length,s=function(t){switch(t){case 90:return-24;case-90:return 24;default:return 0}}(t.rotation),a=function(t){switch(t){case 0:return 30.953125;case 180:return-37.703125-10*(n-1)-7*(e-1);default:return 5.953125-(19.65625+10*(n-1)+7*(e-1)-1)/2}}(t.rotation),i=function(n){switch(n){case 90:return"end";case-90:return"start";default:return t.nameDX?t.nameDX>0?"start":"end":"middle"}}(t.rotation);return Object(r.useMemo)((function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("use",{xlinkHref:"#inttick",stroke:t.intInfo[2],transform:"rotate(".concat(t.rotation,")"),className:"rmg-line rmg-line__mtr rmg-line__change"+(-1===t.stnState?" rmg-line__pass":"")}),Object(m.jsxs)("g",{textAnchor:i,transform:"translate(".concat(s+(t.nameDX||0),",").concat(a,")"),className:"Name ".concat(-1===t.stnState?"Pass":"Future"),children:[t.intInfo[4].split("\\").map((function(t,n){return Object(m.jsx)("text",{className:"rmg-name__zh IntName",dy:10*n,children:t},n)})),t.intInfo[5].split("\\").map((function(t,e){return Object(m.jsx)("text",{className:"rmg-name__en IntName",dy:10*n-1+7*e,children:t},n+e)}))]})]})}),[t.intInfo.toString(),t.rotation,t.stnState])},v=function(t){var n,e,r,s=function(n){switch(n){case"osi11":return"l"===t.tickDirec?"end":"start";case"osi22":return"l"===t.tickDirec?"start":"end";default:return"middle"}}(t.variant),a=function(n){switch(n){case"osi11":return"l"===t.tickDirec?-13:13;case"osi22":return"l"===t.tickDirec?13:-13;case"osi22end":return"left"===t.end?-41:41;default:return 0}}(t.variant),i=function(n){var e,r,s,a,i,c,o,l;switch(n){case"osi11":return 8.34375+(t.namePos?-26:26)-12.515625-(t.namePos?10*((null===(e=t.name)||void 0===e||null===(r=e[1])||void 0===r?void 0:r.split("\\").length)-1):0);case"osi12":return t.namePos?-70.6875-10*((null===(s=t.name)||void 0===s||null===(a=s[1])||void 0===a?void 0:a.split("\\").length)-1):62.34375;case"osi22":return(t.namePos?-8:8)-(t.namePos?27:-27)+8.34375-12.515625-5*((null===(i=t.name)||void 0===i||null===(c=i[1])||void 0===c?void 0:c.split("\\").length)-1);case"osi22end":return t.namePos?-26.6875-10*((null===(o=t.name)||void 0===o||null===(l=o[1])||void 0===l?void 0:l.split("\\").length)-1):18.34375;default:return 0}}(t.variant);return Object(m.jsxs)("g",{textAnchor:s,transform:"translate(".concat(a,",").concat(i,")"),className:"Name ".concat(-1===t.stnState?"Pass":"Future"),children:[Object(m.jsx)("text",{className:"rmg-name__zh rmg-name__mtr--osi",children:null===(n=t.name)||void 0===n?void 0:n[0]}),null===(e=t.name)||void 0===e||null===(r=e[1])||void 0===r?void 0:r.split("\\").map((function(t,n){return Object(m.jsx)("text",{className:"rmg-name__en rmg-name__mtr--osi",dy:12+10*n,children:t},n)}))]})},_=function(t,n){var e=0,r=t[n].transfer,s=r.info.map((function(t){return t.length}));return"l"===r.tick_direc&&(!s[1]&&s[0]>1&&(e+=.8),!s[1]||1===s[0]&&2===s[1]||(e+=.8)),1===s[0]&&2===s[1]&&"linestart"!==t[n].parents[0]&&"lineend"!==t[n].children[0]&&(e+=.8),2===t[n].parents.length&&(e+=.4),2===t[t[n].parents[0]].children.length&&(e+=.4),e},S=function(t,n){var e=0,r=t[n].transfer,s=r.info.map((function(t){return t.length}));return"r"===r.tick_direc&&(!s[1]&&s[0]>1&&(e+=.8),!s[1]||1===s[0]&&2===s[1]||(e+=.8)),1===s[0]&&2===s[1]&&"linestart"!==t[n].parents[0]&&"lineend"!==t[n].children[0]&&(e+=.8),2===t[n].children.length&&(e+=.4),2===t[t[n].children[0]].parents.length&&(e+=.4),e},y=function(){var t,n=s.a.useContext(o.b),e=n.param,a=n.branches,u=n.routes,d=n.deps,h=Object(l.b)(e.stn_list,_,S),f=Object(r.useMemo)((function(){return Object(l.c)("linestart","lineend",h)}),[JSON.stringify(h)]),b=Object(r.useMemo)((function(){return Object(l.c)(f.nodes[1],f.nodes.slice(-2)[0],h)}),[JSON.stringify(h)]),O=Object(r.useMemo)((function(){return console.log("computing x shares"),Object.keys(e.stn_list).reduce((function(t,n){return Object(c.a)(Object(c.a)({},t),{},Object(i.a)({},n,Object(l.f)(n,h,a)))}),{})}),[a.toString(),JSON.stringify(h)]),x=[e.svgWidth.railmap*e.padding/100,e.svgWidth.railmap*(1-e.padding/100)],g=Object.keys(O).reduce((function(t,n){return Object(c.a)(Object(c.a)({},t),{},Object(i.a)({},n,x[0]+O[n]/b.len*(x[1]-x[0])))}),{}),p=Object(r.useMemo)((function(){return j.getYShares(e.stn_list,a)}),[d]),v=Object.keys(p).reduce((function(t,n){return Object(c.a)(Object(c.a)({},t),{},Object(i.a)({},n,-p[n]*e.branch_spacing+(a[0].includes(n)?0:p[n]>0?-9.68:9.68)))}),{}),y=Object(r.useMemo)((function(){return Object(l.e)(e.current_stn_idx,u,e.direction)}),[e.current_stn_idx,e.direction,u.toString()]),M=Object.keys(e.stn_list).reduce((function(t,n){return Object(c.a)(Object(c.a)({},t),{},Object(i.a)({},n,function(t,n,e){var r,s=e.isStagger,a=e.isFlip;if(!s)return a;if(n[0].includes(t))r=n[0].indexOf(t)%2;else{var i=n.filter((function(n){return n.includes(t)}))[0];r=(n[0].indexOf(i[0])+i.indexOf(t)+1)%2}return 0===r?a:!a}(n,a,e.namePosMTR)))}),{}),w=j.drawLine(a,y,e.stn_list,x,g,v,e.branch_spacing,f);return Object(m.jsxs)("g",{id:"main",style:(t={},Object(i.a)(t,"--y-percentage",e.y_pc),Object(i.a)(t,"transform","translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"),t),children:[Object(m.jsx)(k,{paths:w}),Object(m.jsx)(P,{xs:g,ys:v,stnStates:y,namePoss:M})]})},k=s.a.memo((function(t){return Object(m.jsxs)("g",{fill:"none",strokeWidth:9.68,children:[Object(m.jsx)("g",{stroke:"var(--rmg-grey)",children:t.paths.pass.map((function(t,n){return Object(m.jsx)("path",{d:t},n)}))}),Object(m.jsx)("g",{stroke:"var(--rmg-theme-colour)",children:t.paths.main.map((function(t,n){return Object(m.jsx)("path",{d:t},n)}))})]})}),(function(t,n){return JSON.stringify(t.paths)===JSON.stringify(n.paths)})),P=function(t){var n=s.a.useContext(o.b).param;return Object(m.jsx)("g",{id:"stn_icons",children:Object.keys(n.stn_list).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(n){return Object(m.jsx)("g",{style:{transform:"translate(".concat(t.xs[n],"px,").concat(t.ys[n],"px)")},children:Object(m.jsx)(b,{stnId:n,stnState:t.stnStates[n],namePos:t.namePoss[n]})},n)}))})},M=(n.default=Object(r.memo)((function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(M,{}),Object(m.jsx)(a.a,{stripPc:90}),Object(m.jsx)(y,{})]})})),s.a.memo((function(){return Object(m.jsxs)("defs",{children:[Object(m.jsxs)("g",{id:"airport",transform:"scale(0.5970084519)",children:[Object(m.jsx)("rect",{x:-29.33899,height:58.67798,width:58.67798}),Object(m.jsx)("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})]}),Object(m.jsxs)("g",{id:"disney",transform:"scale(0.5970084519)",children:[Object(m.jsx)("rect",{x:-29.33899,width:58.67798,height:58.67798}),Object(m.jsx)("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"})]}),Object(m.jsx)("clipPath",{id:"hsr-clip-path",transform:"translate(-0.00057 0.01643)",children:Object(m.jsx)("path",{fill:"none",d:"M5.1606.89861a3.67176,3.67176,0,0,0-3.676,3.667v48.966a3.67842,3.67842,0,0,0,3.676,3.692h48.443a3.67892,3.67892,0,0,0,3.678-3.692V4.5656a3.67227,3.67227,0,0,0-3.678-3.667Z"})}),Object(m.jsxs)("g",{id:"hsr",transform:"scale(0.5970084519)",children:[Object(m.jsx)("rect",{x:-29.33899,width:58.67798,height:58.67798}),Object(m.jsxs)("g",{clipPath:"url(#hsr-clip-path)",transform:"translate(-29.33899,0)",children:[Object(m.jsx)("rect",{x:-3.25242,y:24.74141,width:61.75879,height:.98008,transform:"translate(-8.93747 17.31321) rotate(-30.16134)",fill:"white"}),Object(m.jsx)("path",{d:"M5.77169,48.97289c-2.17407-3.89294,2.56994-10.525,4.85-13.724l.173-.248a83.00826,83.00826,0,0,1,7.39294-9.285,97.384,97.384,0,0,1,11.082-9.958c7.051-6.045,15.832-5.876,16.447-5.894l11.785-.957.276,17.42-11.5271,10.586c-.36.39405-5.553,5.863-18.10193,11.035-6.752,2.783-11.877,4.146-15.66,4.146-3.301,0-5.561-1.049-6.71692-3.121",transform:"translate(-0.00057 0.01643)",fill:"white"}),Object(m.jsx)("polygon",{points:"57.453 29.614 32.426 58.31 35.582 58.509 57.584 30.433 57.453 29.614",fill:"white"}),Object(m.jsx)("path",{d:"M49.04708,11.61364a.94277.94277,0,0,0-.17407-.227c-.752-.93695-2.988-1.259-5.933-.793a25.98382,25.98382,0,0,0-9.99695,3.032A98.52916,98.52916,0,0,0,20.723,23.69768c-3.1759,3.487-4.645,6.388-3.62292,7.584,1.84,2.166,13.7539.716,22.00793-6.066,9.035-7.42,10.718-11.577,9.93909-13.602",transform:"translate(-0.00057 0.01643)"}),Object(m.jsx)("path",{d:"M34.65255,13.81182c5.65991-2.842,11.28088-2.856,12.1499-1.213.88306,1.652-2.99792,5.303-8.656,8.128-5.648,2.837-10.9469,3.805-11.81994,2.15-.873-1.641,2.668-6.237,8.326-9.065",transform:"translate(-0.00057 0.01643)",fill:"white"}),Object(m.jsx)("path",{d:"M58.10958,25.03454c-16.832,20.708-40.7301,26.038-40.7301,26.038,11-6.73,12.769-8.111,18.968-18.01,8.364-13.351,21.77808-21.549,21.912-21.63,0,0-.068,13.5-.1499,13.602",transform:"translate(-0.00057 0.01643)"}),Object(m.jsx)("path",{d:"M27.1877,26.69561l9.705-2.814a6.22768,6.22768,0,0,1-1.994,2.759,25.57277,25.57277,0,0,1-6.697,3.405,11.78221,11.78221,0,0,1-5.5.783Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),Object(m.jsx)("path",{d:"M19.59005,25.97692a18.37656,18.37656,0,0,1,3.891-3.976,6.66452,6.66452,0,0,0-.30908,2.213l-4.391,4.829a6.18212,6.18212,0,0,1,.80908-3.066",transform:"translate(-0.00057 0.01643)",fill:"white"}),Object(m.jsx)("polygon",{points:"23.156 58.311 57.463 26.746 57.396 25.857 21.582 58.607 23.156 58.311",fill:"white"}),Object(m.jsx)("path",{d:"M60.15645,12.35973a68.6782,68.6782,0,0,0-12.602,9.542c-8.15,7.745-12.109,15.259-9.855,16.091,2.24793.816,10.678-4.782,18.83594-12.543,1.828-1.74,3.48-3.424,4.926-5.024Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),Object(m.jsx)("path",{d:"M63.07638,11.82653a40.86955,40.86955,0,0,0-10,7.096c-5.90406,5.437-9.48609,11.105-7.848,11.742,1.657.631,8.28894-3.955,14.188-9.401a61.76591,61.76591,0,0,0,4.61694-4.705Z",transform:"translate(-0.00057 0.01643)"}),Object(m.jsx)("path",{d:"M12.67989,42.93969a9.87,9.87,0,0,0-5.754-1.895c-.113.22-.223.439-.33008.662a9.45046,9.45046,0,0,1,5.69507,1.749,6.27885,6.27885,0,0,1,2.61,6.305,10.16524,10.16524,0,0,1-.598,2.228c.238-.023.481-.053.725-.087.78308-2.249,1.394-6.184-2.3479-8.962",transform:"translate(-0.00057 0.01643)"})]})]}),Object(m.jsx)("circle",{id:"stn",r:8,className:"rmg-stn__mtr"}),Object(m.jsx)("path",{id:"stn_b",className:"rmg-stn__mtr",d:"M-6.369803765,4.84a8,8,0,1,1,12.73960753,0a8,8,0,1,1-12.73960758,0Z"}),Object(m.jsx)("path",{id:"stn_bb",d:"M-6.369803765,4.84a8,8,0,1,1,12.73960753,0a8,8,0,0,1,0,9.68a8,8,0,1,1-12.73960753,0a8,8,0,0,1,0,-9.68Z",className:"rmg-stn__mtr"}),Object(m.jsx)("use",{id:"int",xlinkHref:"#stn"}),Object(m.jsx)("use",{id:"int_b",xlinkHref:"#stn_b"}),Object(m.jsx)("use",{id:"int_bb",xlinkHref:"#stn_bb"}),Object(m.jsx)("path",{id:"int2",d:"M -8,0 v 18 a 8,8 0 0,0 16,0 v -18 a 8,8 0 0,0 -16,0 Z",className:"rmg-stn__mtr"}),[3,4,5,6,7,8,9,10,11,12].map((function(t){var n=18*(t-1);return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)("path",{id:"int".concat(t),d:"M-8,0v".concat(n,"a8,8,0,0,0,16,0v-").concat(n,"a8,8,0,0,0-16,0Z"),className:"rmg-stn__mtr"}),Object(m.jsx)("path",{id:"int".concat(t,"_b"),className:"rmg-stn__mtr",d:"M-8,9.68v".concat(n,"a8,8,0,0,0,16,0v-").concat(n,"a8,8,0,0,0-1.630196235-4.84a8,8,0,1,0-12.73960758,0a8,8,0,0,0-1.630196235,4.84Z")}),Object(m.jsx)("path",{id:"int".concat(t,"_bb"),className:"rmg-stn__mtr",d:"M-8,19.36v".concat(n,"a8,8,0,0,0,16,0v-").concat(n,"a8,8,0,0,0-1.630196235-4.84a8,8,0,0,0,0-9.68a8,8,0,1,0-12.73960758,0a8,8,0,0,0,0,9.68a8,8,0,0,0-1.630196235,4.84Z")})]},t)})),Object(m.jsxs)("g",{id:"osi11",children:[Object(m.jsx)("path",{d:"M0,0V26"}),Object(m.jsx)("use",{xlinkHref:"#stn"}),Object(m.jsx)("use",{xlinkHref:"#stn",y:26})]}),Object(m.jsxs)("g",{id:"osi11_b",children:[Object(m.jsx)("path",{d:"M0,0V35.68"}),Object(m.jsx)("use",{xlinkHref:"#stn_b"}),Object(m.jsx)("use",{xlinkHref:"#stn",y:35.68})]}),Object(m.jsxs)("g",{id:"osi11_bb",children:[Object(m.jsx)("path",{d:"M0,0V45.36"}),Object(m.jsx)("use",{xlinkHref:"#stn_bb"}),Object(m.jsx)("use",{xlinkHref:"#stn",y:45.36})]}),Object(m.jsxs)("g",{id:"osi12",children:[Object(m.jsx)("path",{d:"M0,0V26"}),Object(m.jsx)("use",{xlinkHref:"#stn"}),Object(m.jsx)("use",{xlinkHref:"#int2",y:26})]}),Object(m.jsxs)("g",{id:"osi12_b",children:[Object(m.jsx)("path",{d:"M0,11V35.68"}),Object(m.jsx)("use",{xlinkHref:"#stn_b"}),Object(m.jsx)("use",{xlinkHref:"#int2",y:35.68})]}),Object(m.jsxs)("g",{id:"osi12_bb",children:[Object(m.jsx)("path",{d:"M0,11V45.36"}),Object(m.jsx)("use",{xlinkHref:"#stn_bb"}),Object(m.jsx)("use",{xlinkHref:"#int2",y:45.36})]}),Object(m.jsx)("use",{id:"osi22",xlinkHref:"#osi12"}),Object(m.jsx)("use",{id:"osi22_b",xlinkHref:"#osi12_b"}),Object(m.jsx)("use",{id:"osi22_bb",xlinkHref:"#osi12_bb"}),Object(m.jsxs)("g",{id:"osi22end",children:[Object(m.jsx)("path",{d:"M0,0H41"}),Object(m.jsx)("use",{xlinkHref:"#stn"}),Object(m.jsx)("use",{xlinkHref:"#int2",x:41,y:-18})]}),Object(m.jsxs)("g",{id:"osi22end_b",children:[Object(m.jsx)("path",{d:"M0,9.68H41"}),Object(m.jsx)("use",{xlinkHref:"#stn_b"}),Object(m.jsx)("use",{xlinkHref:"#int2",x:41,y:-8.32})]}),Object(m.jsx)("path",{id:"inttick",d:"M0,0v17",strokeLinecap:"round"})]})})))}}]);
//# sourceMappingURL=railmapMTR.82033859.chunk.js.map