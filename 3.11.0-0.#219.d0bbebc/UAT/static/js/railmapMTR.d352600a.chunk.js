"use strict";(self.webpackChunkrail_map_generator=self.webpackChunkrail_map_generator||[]).push([[3472],{8359:function(t,n,e){e.d(n,{Z:function(){return c}});var r=e(3144),i=e(5671),s=e(136),a=e(4062),c=function(t){(0,s.Z)(e,t);var n=(0,a.Z)(e);function e(){var t;(0,i.Z)(this,e);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(t=n.call.apply(n,[this].concat(s))).leftWideFactor=function(n){var e=0,r=t.stnList[n].transfer,i=r.info.map((function(t){return t.length}));return"l"===r.tick_direc&&(!i[1]&&i[0]>1&&(e+=.8),!i[1]||1===i[0]&&2===i[1]||(e+=.8)),1===i[0]&&2===i[1]&&"linestart"!==t.stnList[n].parents[0]&&"lineend"!==t.stnList[n].children[0]&&(e+=.8),2===t.stnList[n].parents.length&&(e+=.4),2===t.stnList[t.stnList[n].parents[0]].children.length&&(e+=.4),e},t.rightWideFactor=function(n){var e=0,r=t.stnList[n].transfer,i=r.info.map((function(t){return t.length}));return"r"===r.tick_direc&&(!i[1]&&i[0]>1&&(e+=.8),!i[1]||1===i[0]&&2===i[1]||(e+=.8)),1===i[0]&&2===i[1]&&"linestart"!==t.stnList[n].parents[0]&&"lineend"!==t.stnList[n].children[0]&&(e+=.8),2===t.stnList[n].children.length&&(e+=.4),2===t.stnList[t.stnList[n].children[0]].parents.length&&(e+=.4),e},t}return(0,r.Z)(e)}(e(3824).LD)},3824:function(t,n,e){e.d(n,{Az:function(){return h},QE:function(){return d},ML:function(){return f},h6:function(){return m},LD:function(){return x},pS:function(){return g}});var r=e(885),i=e(5671),s=e(3144),a=e(2982),c=e(7762),o=e(4942),l=e(1413),u=e(713),h=function(t,n,e){return Object.keys(t).reduce((function(r,i){return(0,l.Z)((0,l.Z)({},r),{},(0,o.Z)({},i,t[i].children.reduce((function(r,s){return(0,l.Z)((0,l.Z)({},r),{},(0,o.Z)({},s,1+n(t,s)+e(t,i)))}),{})))}),{})},d=function t(n,e,r){if(n===e)return{len:0,nodes:[n]};var i=[],s=[];Object.keys(r[n]).forEach((function(a){var c=t(a,e,r);c.len<0||(i.push(r[n][a]+c.len),c.nodes.unshift(n),s.push(c.nodes))}));var a=Math.max.apply(Math,i);return{len:a,nodes:s[i.indexOf(a)]}},f=function(t,n,e){var r=d("linestart","lineend",n);if(r.nodes.includes(t))return d(r.nodes[1],t,n).len;for(var i=e.filter((function(n){return n.includes(t)}))[0],s=t;!r.nodes.includes(s);)s=i[i.indexOf(s)-1];for(var a=t;!r.nodes.includes(a);)a=i[i.indexOf(a)+1];var c="linestart"===s,o=[];return c||"lineend"===a?c?(o[0]=0,o[1]=d(r.nodes[1],a,n).len,o[2]=d(i[1],t,n).len,o[3]=d(t,a,n).len):(o[0]=d(r.nodes[1],s,n).len,o[1]=d(s,r.nodes.slice(-2)[0],n).len,o[2]=d(s,t,n).len,o[3]=d(t,i.slice(-2)[0],n).len):(o[0]=d(r.nodes[1],s,n).len,o[1]=d(s,a,n).len,o[2]=d(s,t,n).len,o[3]=d(t,a,n).len),o[0]+o[2]*o[1]/(o[2]+o[3])},m=function(t,n,e){var r;return console.log("computing stations' states"),(0,a.Z)(new Set((r=[]).concat.apply(r,(0,a.Z)(n)))).reduce((function(r,i){return(0,l.Z)((0,l.Z)({},r),{},(0,o.Z)({},i,i===t?0:(e===u.wA.right?function(t,n,e){var r,i=(0,c.Z)(e);try{for(i.s();!(r=i.n()).done;){var s=r.value,a=s.indexOf(t),o=s.indexOf(n);if(-1!==a&&a<o)return!0}}catch(l){i.e(l)}finally{i.f()}return!1}(t,i,n):function(t,n,e){var r,i=(0,c.Z)(e);try{for(i.s();!(r=i.n()).done;){var s=r.value,a=s.indexOf(t),o=s.indexOf(n);if(-1!==o&&o<a)return!0}}catch(l){i.e(l)}finally{i.f()}return!1}(t,i,n))?1:-1))}),{})},x=function(){function t(n){var e=this;(0,i.Z)(this,t),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(t){return 0},this.rightWideFactor=function(t){return 0},this.pathWeight=function(t,n){return e.stnList[t].children.includes(n)?1+e.rightWideFactor(t)+e.leftWideFactor(n):-1/0},this.pathTurnParams=function(t){var n=35-17.5*Math.sqrt(3),e=t-2*n;return{tr:35,dx_a:17.5,dy_a:n,dx_l:e*Math.sqrt(3),dy_l:e}},this.pathTurnSE=function(t){var n=e.pathTurnParams(t),r=n.tr,i=n.dx_a,s=n.dy_a,a=n.dx_l,c=n.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(i,",").concat(s," l ").concat(a,",").concat(c," a ").concat(r,",").concat(r," 0 0,0 ").concat(i,",").concat(s)},this.pathTurnNE=function(t){var n=e.pathTurnParams(t),r=n.tr,i=n.dx_a,s=n.dy_a,a=n.dx_l,c=n.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(i,",").concat(-s," l ").concat(a,",").concat(-c," a ").concat(r,",").concat(r," 0 0,1 ").concat(i,",").concat(-s)},this.stnList=n.stnList,this.criticalPath=n.criticalPath}return(0,s.Z)(t,[{key:"getYShare",value:function(t,n){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;var e=this.stnList[t].parents[0];if(e){if(1===this.stnList[e].children.length){var r=this.getYShare(e);return this.yShares[t]=r,r}var i=0===this.stnList[e].children.indexOf(t)?1:-1;return this.yShares[t]=i,i}return this.yShares[t]=0,0}},{key:"_linePath",value:function(t,n,e,i,s,a,c,o){var l=this,u=(0,r.Z)([],3),h=u[0],d=u[1],f=u[2],m=[],x=this.pathTurnParams(a),g=x.dx_a+x.dx_l/2,p=(n[1]-n[0])/c.len*2,j=((n[1]-n[0])/c.len-2*g)/2;return j+p<0&&console.warn("SVG width too small! ".concat(j+p)),t.forEach((function(n){var r=i[n],c=s[n];if(!d&&0!==d)return h=n,f=r,d=c,void(1===t.length?m.push("M ".concat(r,",").concat(c)):e[0].includes(n)?e[0].includes(t[1])?m.push("M ".concat(r,",").concat(c)):(i[t[1]]>0&&m.push("M ".concat(r,",").concat(c+o)),s[t[1]]<0&&m.push("M ".concat(r,",").concat(c-o))):m.push("M ".concat(r,",").concat(c)));c>d?(m.push("h ".concat(0===c?r-f-p*l.leftWideFactor(n)-j-2*g:p*l.rightWideFactor(h)+j)),m.push(l.pathTurnSE(a))):c<d&&(m.push("h ".concat(0===c?r-f-p*l.leftWideFactor(n)-j-2*g:p*l.rightWideFactor(h)+j)),m.push(l.pathTurnNE(a))),m.push("H ".concat(r)),h=n,f=r,d=c})),m.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(t,n){console.log("computing y shares");var e=new this({stnList:t});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in e.yShares||e.getYShare(t,n)})),e.yShares}},{key:"drawLine",value:function(t,n,e,r,i,s,a,c){var o=this,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:9.68,u={main:[],pass:[]};return t.forEach((function(h,d){var f=(h=h.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return n[t]>=0})),m=h.filter((function(t){return n[t]<=0}));1===f.length&&(m=h),0===f.filter((function(t){return-1!==m.indexOf(t)})).length&&f.length&&(m[0]===h[0]?m.push(f[0]):f[0]===h[0]&&f[f.length-1]===h[h.length-1]&&m.length?(m=h,f=[]):m.unshift(f[f.length-1])),u.main.push(new o({stnList:e,criticalPath:c})._linePath(f,r,t,i,s,a,c,l)),u.pass.push(new o({stnList:e,criticalPath:c})._linePath(m,r,t,i,s,a,c,l))})),u}}]),t}(),g=function(t,n){var e={main:[],pass:[]};return t.forEach((function(t){var r=(t=t.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return n[t]>=0})),i=t.filter((function(t){return n[t]<=0}));1===r.length&&(i=t),0===r.filter((function(t){return-1!==i.indexOf(t)})).length&&r.length&&(i[0]===t[0]?i.push(r[0]):r[0]===t[0]&&r[r.length-1]===t[t.length-1]&&i.length?(i=t,r=[]):i.unshift(r[r.length-1])),e.main.push(r),e.pass.push(i)})),e}},995:function(t,n,e){e.r(n),e.d(n,{default:function(){return w}});var r=e(2791),i=e(5459),s=e(4942),a=e(1413),c=e(3824),o=e(8359),l=e(713),u=e(3334),h=e(885),d=e(5987),f=e(184),m=(0,r.memo)((function(t){var n=t.stnName,e=t.onUpdate,i=t.align,s=(0,r.useRef)(null);(0,r.useEffect)((function(){document.fonts.ready.then((function(){return null===e||void 0===e?void 0:e(s.current.getBBox())}))}),[n.toString(),i]);return(0,f.jsxs)("g",{ref:s,textAnchor:function(t){switch(t){case l.Nm.left:return"start";case l.Nm.right:return"end";default:return"middle"}}(i),children:[(0,f.jsx)("text",{className:"rmg-name__zh rmg-name__mtr--station",children:n[0]}),n[1].split("\\").map((function(t,n){return(0,f.jsx)("text",{className:"rmg-name__en rmg-name__mtr--station",dy:(e=n,17+11*e),children:t},n);var e}))]})}),(function(t,n){return t.stnName.toString()===n.stnName.toString()&&t.align===n.align})),x=["stationName","stationState","lower","align","facility"];function g(t){var n=t.stationName,e=t.stationState,i=t.lower,s=t.align,c=t.facility,o=(0,d.Z)(t,x),u=(0,r.useState)({x:0,width:0}),g=(0,h.Z)(u,2),p=g[0],j=g[1],v=n[1].split("\\").length,_={g:{x:s?s===l.Nm.right?-3:3:0,y:(i?24.8125:-36.21875-11*(v-1))+(s?i?10:-10:0)},rect:{x:p.x-3+(c===l.mV.none?0:s?s===l.Nm.right?-36.03125:0:-17.015625),y:-11.8125,width:p.width+6+(c===l.mV.none?0:36.03125),height:35.03125+11*(v-1)},use:{x:s?s===l.Nm.right?-17.515625-p.width-3:15.515625:-(p.width+3)/2,y:5.5*(v-1)-11.8125},StationName:{x:c===l.mV.none?0:s?s===l.Nm.right?0:36.03125:19.015625,y:0}};return(0,f.jsx)("g",(0,a.Z)((0,a.Z)({},o),{},{children:(0,f.jsxs)("g",{fill:function(t){switch(t){case l.KR.PASSED:return"var(--rmg-grey)";case l.KR.CURRENT:return"#fff";case l.KR.FUTURE:return"var(--rmg-black)"}}(e),transform:"translate(".concat(_.g.x,",").concat(_.g.y,")"),children:[e===l.KR.CURRENT&&(0,f.jsx)("rect",{x:_.rect.x,y:_.rect.y,width:_.rect.width,height:_.rect.height,fill:"var(--rmg-black)"}),c!==l.mV.none&&(0,f.jsx)("use",{xlinkHref:"#".concat(c),fill:e===l.KR.PASSED?"var(--rmg-grey)":"var(--rmg-black)",x:_.use.x,y:_.use.y}),(0,f.jsx)("g",{transform:"translate(".concat(_.StationName.x,",").concat(_.StationName.y,")"),children:(0,f.jsx)(m,{stnName:n,onUpdate:j,align:s})})]})}))}var p=function(t){var n=t.stnId,e=t.stnState,i=t.namePos,s=(0,u.CG)((function(t){return t.param.stn_list[n]})),a=(0,r.useMemo)((function(){var t=[];return s.branch.right.length&&t.push(1===s.children.indexOf(s.branch.right[1])?"SE":"NE"),s.branch.left.length&&t.push(1===s.parents.indexOf(s.branch.left[1])?"SW":"NW"),t}),[s.parents.toString(),s.children.toString(),JSON.stringify(s.branch)]),c=(0,r.useMemo)((function(){var t=a;return 0===t.length?"":t.includes("NW")&&t.includes("SE")||t.includes("NE")&&t.includes("SW")?"_bb":"_b"}),[a.toString()]),o=(0,r.useMemo)((function(){if(""===c)return 0;if("_bb"===c)return i?9.68:-9.68;var t=a;return t.includes("SE")||t.includes("SW")?i?9.68:0:t.includes("NE")||t.includes("NW")?i?0:-9.68:void 0}),[a.toString(),c,i]),h=(0,r.useMemo)((function(){if(""===c)return 0;if("_bb"===c)return i?-9.68:9.68;var t=a;return t.includes("SE")||t.includes("SW")?i?0:9.68:t.includes("NE")||t.includes("NW")?i?-9.68:0:void 0}),[c,i,a]),d=function(t){var n=function(t){return t<11?"int"+(t+1):"int12"};return t[1]?1===t[1]?t[0]<=1?"osi11":n(t[0]):2===t[1]?0===t[0]?"osi12":1===t[0]?"linestart"===s.parents[0]||"lineend"===s.children[0]?"osi22end":"osi22":n(t[0]):t[0]&&1!==t[0]?n(t[0]):"osi12":t[0]?1===t[0]?"int":n(t[0]):"stn"}(s.transfer.info.map((function(t){return t.length})));return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("g",{transform:"translate(0,".concat(h,")"),children:[(0,f.jsx)(j,{variant:d,stnTrans:s.transfer,stnState:e,namePos:i,end:"osi22end"===d?"linestart"===s.parents[0]?l.Nm.left:l.Nm.right:void 0}),d.includes("osi")&&(0,f.jsx)(_,{name:s.transfer.osi_names[0],stnState:e,variant:d,tickDirec:s.transfer.tick_direc,namePos:i,end:"osi22end"===d?"linestart"===s.parents[0]?l.Nm.left:l.Nm.right:void 0})]}),(0,f.jsx)("use",{xlinkHref:"#"+d+c,stroke:-1===e?"var(--rmg-grey)":"var(--rmg-black)",className:s.transfer.paid_area?"rmg-stn__mtr--paid-osi":"rmg-stn__mtr--unpaid-osi",transform:"translate(0,".concat(o,")")+"scale(".concat("lineend"===s.children[0]?1:-1,",").concat(i?-1:1,")")}),(0,f.jsx)(g,{stationName:s.name,stationState:e,facility:s.facility,lower:i,align:"osi22"===d?s.transfer.tick_direc===l.wA.left?l.Nm.left:l.Nm.right:void 0,transform:"translate(0,".concat(o,")")})]})},j=function(t){var n=t.variant,e=t.stnTrans,r=t.stnState,i=t.namePos,s=t.end;switch(n){case"int":return(0,f.jsx)("g",{children:(0,f.jsx)(v,{intInfo:e.info[0][0],stnState:r,rotation:i?180:0})});case"osi11":return(0,f.jsx)("g",{transform:"translate(0,".concat(i?-26:26,")"),children:(0,f.jsx)(v,{intInfo:e.info[1][0],stnState:r,rotation:i?180:0})});case"osi12":return(0,f.jsx)(f.Fragment,{children:e.info[1].map((function(t,n){return(0,f.jsx)("g",{transform:"translate(0,".concat(i?-8-18*(e.info[1].length-n):8+18*(n+1),")"),children:(0,f.jsx)(v,{intInfo:t,stnState:r,rotation:e.tick_direc===l.wA.right?-90:90})},n)}))});case"osi22":return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("g",{children:(0,f.jsx)(v,{intInfo:e.info[0][0],stnState:r,rotation:i?0:180,nameDX:e.tick_direc===l.wA.right?3:-3})}),e.info[1].map((function(t,n){return(0,f.jsx)("g",{transform:"translate(0,".concat(i?-8-18*(e.info[1].length-n):8+18*(n+1),")"),children:(0,f.jsx)(v,{intInfo:t,stnState:r,rotation:e.tick_direc===l.wA.right?-90:90})},n)}))]});case"osi22end":return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("g",{children:(0,f.jsx)(v,{intInfo:e.info[0][0],stnState:r,rotation:i?180:0})}),e.info[1].map((function(t,n){return(0,f.jsx)("g",{transform:"translate(".concat(s===l.Nm.left?-41:41,",").concat(i?18*n:-18*(e.info[1].length-1-n),")"),children:(0,f.jsx)(v,{intInfo:t,stnState:r,rotation:s===l.Nm.left?90:-90})},n)}))]});default:return n.includes("int")?(0,f.jsx)(f.Fragment,{children:e.info[0].map((function(t,n){return(0,f.jsx)("g",{style:{transform:"translateY(".concat(i?-18*(e.info[0].length-n):18*(n+1),"px)")},children:(0,f.jsx)(v,{intInfo:t,stnState:r,rotation:e.tick_direc===l.wA.right?-90:90})},n)}))}):(0,f.jsx)(f.Fragment,{})}},v=function(t){var n=t.intInfo,e=t.stnState,i=t.rotation,s=t.nameDX,a=n[4].split("\\").length,c=n[5].split("\\").length,o=function(t){switch(t){case 90:return-24;case-90:return 24;default:return 0}}(i),l=function(t){switch(t){case 0:return 30.953125;case 180:return-37.703125-10*(a-1)-7*(c-1);default:return 5.953125-(19.65625+10*(a-1)+7*(c-1)-1)/2}}(i),u=function(t){switch(t){case 90:return"end";case-90:return"start";default:return s?s>0?"start":"end":"middle"}}(i);return(0,r.useMemo)((function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("use",{xlinkHref:"#inttick",stroke:n[2],transform:"rotate(".concat(i,")"),className:"rmg-line rmg-line__mtr rmg-line__change"+(-1===e?" rmg-line__pass":"")}),(0,f.jsxs)("g",{textAnchor:u,transform:"translate(".concat(o+(s||0),",").concat(l,")"),className:"Name ".concat(-1===e?"Pass":"Future"),children:[n[4].split("\\").map((function(t,n){return(0,f.jsx)("text",{className:"rmg-name__zh IntName",dy:10*n,children:t},n)})),n[5].split("\\").map((function(t,n){return(0,f.jsx)("text",{className:"rmg-name__en IntName",dy:10*a-1+7*n,children:t},a+n)}))]})]})}),[n.toString(),i,e])},_=function(t){var n,e=t.name,r=t.stnState,i=t.variant,s=t.tickDirec,a=t.namePos,c=t.end,o=function(t){switch(t){case"osi11":return s===l.wA.left?"end":"start";case"osi22":return s===l.wA.left?"start":"end";default:return"middle"}}(i),u=function(t){switch(t){case"osi11":return s===l.wA.left?-13:13;case"osi22":return s===l.wA.left?13:-13;case"osi22end":return c===l.Nm.left?-41:41;default:return 0}}(i),h=function(t){var n,r,i,s;switch(t){case"osi11":return 8.34375+(a?-26:26)-12.515625-(a?10*((null===e||void 0===e||null===(n=e[1])||void 0===n?void 0:n.split("\\").length)-1):0);case"osi12":return a?-70.6875-10*((null===e||void 0===e||null===(r=e[1])||void 0===r?void 0:r.split("\\").length)-1):62.34375;case"osi22":return(a?-8:8)-(a?27:-27)+8.34375-12.515625-5*((null===e||void 0===e||null===(i=e[1])||void 0===i?void 0:i.split("\\").length)-1);case"osi22end":return a?-26.6875-10*((null===e||void 0===e||null===(s=e[1])||void 0===s?void 0:s.split("\\").length)-1):18.34375;default:return 0}}(i);return(0,f.jsxs)("g",{textAnchor:o,transform:"translate(".concat(u,",").concat(h,")"),className:"Name ".concat(-1===r?"Pass":"Future"),children:[(0,f.jsx)("text",{className:"rmg-name__zh rmg-name__mtr--osi",children:null===e||void 0===e?void 0:e[0]}),null===e||void 0===e||null===(n=e[1])||void 0===n?void 0:n.split("\\").map((function(t,n){return(0,f.jsx)("text",{className:"rmg-name__en rmg-name__mtr--osi",dy:12+10*n,children:t},n)}))]})},y=function(t,n){var e=0,r=t[n].transfer,i=r.info.map((function(t){return t.length}));return"l"===r.tick_direc&&(!i[1]&&i[0]>1&&(e+=.8),!i[1]||1===i[0]&&2===i[1]||(e+=.8)),1===i[0]&&2===i[1]&&"linestart"!==t[n].parents[0]&&"lineend"!==t[n].children[0]&&(e+=.8),2===t[n].parents.length&&(e+=.4),2===t[t[n].parents[0]].children.length&&(e+=.4),2*e},S=function(t,n){var e=0,r=t[n].transfer,i=r.info.map((function(t){return t.length}));return"r"===r.tick_direc&&(!i[1]&&i[0]>1&&(e+=.8),!i[1]||1===i[0]&&2===i[1]||(e+=.8)),1===i[0]&&2===i[1]&&"linestart"!==t[n].parents[0]&&"lineend"!==t[n].children[0]&&(e+=.8),2===t[n].children.length&&(e+=.4),2===t[t[n].children[0]].parents.length&&(e+=.4),e},k=function(){var t,n=(0,u.CG)((function(t){return t.helper})),e=n.branches,i=n.routes,h=n.depsStr,d=(0,u.CG)((function(t){return t.param.svgWidth})),m=(0,u.CG)((function(t){return t.param.y_pc})),x=(0,u.CG)((function(t){return t.param.padding})),g=(0,u.CG)((function(t){return t.param.branch_spacing})),p=(0,u.CG)((function(t){return t.param.direction})),j=(0,u.CG)((function(t){return t.param.namePosMTR})),v=(0,u.CG)((function(t){return t.param.current_stn_idx})),_=(0,u.CG)((function(t){return t.param.stn_list})),k=(0,c.Az)(_,y,S),w=(0,r.useMemo)((function(){return(0,c.QE)("linestart","lineend",k)}),[JSON.stringify(k)]),Z=(0,r.useMemo)((function(){return(0,c.QE)(w.nodes[1],w.nodes.slice(-2)[0],k)}),[JSON.stringify(k)]),M=(0,r.useMemo)((function(){return console.log("computing x shares"),Object.keys(_).reduce((function(t,n){return(0,a.Z)((0,a.Z)({},t),{},(0,s.Z)({},n,(0,c.ML)(n,k,e)))}),{})}),[e.toString(),JSON.stringify(k)]),H=[d[l.Ht.RailMap]*x/100,d[l.Ht.RailMap]*(1-x/100)],L=Object.keys(M).reduce((function(t,n){return(0,a.Z)((0,a.Z)({},t),{},(0,s.Z)({},n,H[0]+M[n]/Z.len*(H[1]-H[0])))}),{}),P=(0,r.useMemo)((function(){return o.Z.getYShares(_,e)}),[h]),O=Object.keys(P).reduce((function(t,n){return(0,a.Z)((0,a.Z)({},t),{},(0,s.Z)({},n,-P[n]*g+(e[0].includes(n)?0:P[n]>0?-9.68:9.68)))}),{}),E=(0,r.useMemo)((function(){return(0,c.h6)(v,i,p)}),[v,p,i.toString()]),F=Object.keys(_).reduce((function(t,n){return(0,a.Z)((0,a.Z)({},t),{},(0,s.Z)({},n,function(t,n,e){var r,i=e.isStagger,s=e.isFlip;if(!i)return s;if(n[0].includes(t))r=n[0].indexOf(t)%2;else{var a=n.filter((function(n){return n.includes(t)}))[0];r=(n[0].indexOf(a[0])+a.indexOf(t)+1)%2}return 0===r?s:!s}(n,e,j)))}),{}),W=o.Z.drawLine(e,E,_,H,L,O,g,w);return(0,f.jsxs)("g",{id:"main",style:(t={},(0,s.Z)(t,"--y-percentage",m),(0,s.Z)(t,"transform","translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"),t),children:[(0,f.jsx)(N,{paths:W}),(0,f.jsx)(b,{xs:L,ys:O,stnStates:E,namePoss:F})]})},N=r.memo((function(t){return(0,f.jsxs)("g",{fill:"none",strokeWidth:9.68,children:[(0,f.jsx)("g",{stroke:"var(--rmg-grey)",children:t.paths.pass.map((function(t,n){return(0,f.jsx)("path",{d:t},n)}))}),(0,f.jsx)("g",{stroke:"var(--rmg-theme-colour)",children:t.paths.main.map((function(t,n){return(0,f.jsx)("path",{d:t},n)}))})]})}),(function(t,n){return JSON.stringify(t.paths)===JSON.stringify(n.paths)})),b=function(t){var n=t.xs,e=t.ys,r=t.stnStates,i=t.namePoss,s=(0,u.CG)((function(t){return t.param.stn_list}));return(0,f.jsx)("g",{id:"stn_icons",children:Object.keys(s).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(t){return(0,f.jsx)("g",{style:{transform:"translate(".concat(n[t],"px,").concat(e[t],"px)")},children:(0,f.jsx)(p,{stnId:t,stnState:r[t],namePos:i[t]})},t)}))})},w=(0,r.memo)((function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Z,{}),(0,f.jsx)(i.Z,{stripPc:90}),(0,f.jsx)(k,{})]})})),Z=r.memo((function(){return(0,f.jsxs)("defs",{children:[(0,f.jsxs)("g",{id:"airport",transform:"scale(0.5970084519)",children:[(0,f.jsx)("rect",{x:-29.33899,height:58.67798,width:58.67798}),(0,f.jsx)("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})]}),(0,f.jsxs)("g",{id:"disney",transform:"scale(0.5970084519)",children:[(0,f.jsx)("rect",{x:-29.33899,width:58.67798,height:58.67798}),(0,f.jsx)("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"})]}),(0,f.jsx)("clipPath",{id:"hsr-clip-path",transform:"translate(-0.00057 0.01643)",children:(0,f.jsx)("path",{fill:"none",d:"M5.1606.89861a3.67176,3.67176,0,0,0-3.676,3.667v48.966a3.67842,3.67842,0,0,0,3.676,3.692h48.443a3.67892,3.67892,0,0,0,3.678-3.692V4.5656a3.67227,3.67227,0,0,0-3.678-3.667Z"})}),(0,f.jsxs)("g",{id:"hsr",transform:"scale(0.5970084519)",children:[(0,f.jsx)("rect",{x:-29.33899,width:58.67798,height:58.67798}),(0,f.jsxs)("g",{clipPath:"url(#hsr-clip-path)",transform:"translate(-29.33899,0)",children:[(0,f.jsx)("rect",{x:-3.25242,y:24.74141,width:61.75879,height:.98008,transform:"translate(-8.93747 17.31321) rotate(-30.16134)",fill:"white"}),(0,f.jsx)("path",{d:"M5.77169,48.97289c-2.17407-3.89294,2.56994-10.525,4.85-13.724l.173-.248a83.00826,83.00826,0,0,1,7.39294-9.285,97.384,97.384,0,0,1,11.082-9.958c7.051-6.045,15.832-5.876,16.447-5.894l11.785-.957.276,17.42-11.5271,10.586c-.36.39405-5.553,5.863-18.10193,11.035-6.752,2.783-11.877,4.146-15.66,4.146-3.301,0-5.561-1.049-6.71692-3.121",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,f.jsx)("polygon",{points:"57.453 29.614 32.426 58.31 35.582 58.509 57.584 30.433 57.453 29.614",fill:"white"}),(0,f.jsx)("path",{d:"M49.04708,11.61364a.94277.94277,0,0,0-.17407-.227c-.752-.93695-2.988-1.259-5.933-.793a25.98382,25.98382,0,0,0-9.99695,3.032A98.52916,98.52916,0,0,0,20.723,23.69768c-3.1759,3.487-4.645,6.388-3.62292,7.584,1.84,2.166,13.7539.716,22.00793-6.066,9.035-7.42,10.718-11.577,9.93909-13.602",transform:"translate(-0.00057 0.01643)"}),(0,f.jsx)("path",{d:"M34.65255,13.81182c5.65991-2.842,11.28088-2.856,12.1499-1.213.88306,1.652-2.99792,5.303-8.656,8.128-5.648,2.837-10.9469,3.805-11.81994,2.15-.873-1.641,2.668-6.237,8.326-9.065",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,f.jsx)("path",{d:"M58.10958,25.03454c-16.832,20.708-40.7301,26.038-40.7301,26.038,11-6.73,12.769-8.111,18.968-18.01,8.364-13.351,21.77808-21.549,21.912-21.63,0,0-.068,13.5-.1499,13.602",transform:"translate(-0.00057 0.01643)"}),(0,f.jsx)("path",{d:"M27.1877,26.69561l9.705-2.814a6.22768,6.22768,0,0,1-1.994,2.759,25.57277,25.57277,0,0,1-6.697,3.405,11.78221,11.78221,0,0,1-5.5.783Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,f.jsx)("path",{d:"M19.59005,25.97692a18.37656,18.37656,0,0,1,3.891-3.976,6.66452,6.66452,0,0,0-.30908,2.213l-4.391,4.829a6.18212,6.18212,0,0,1,.80908-3.066",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,f.jsx)("polygon",{points:"23.156 58.311 57.463 26.746 57.396 25.857 21.582 58.607 23.156 58.311",fill:"white"}),(0,f.jsx)("path",{d:"M60.15645,12.35973a68.6782,68.6782,0,0,0-12.602,9.542c-8.15,7.745-12.109,15.259-9.855,16.091,2.24793.816,10.678-4.782,18.83594-12.543,1.828-1.74,3.48-3.424,4.926-5.024Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),(0,f.jsx)("path",{d:"M63.07638,11.82653a40.86955,40.86955,0,0,0-10,7.096c-5.90406,5.437-9.48609,11.105-7.848,11.742,1.657.631,8.28894-3.955,14.188-9.401a61.76591,61.76591,0,0,0,4.61694-4.705Z",transform:"translate(-0.00057 0.01643)"}),(0,f.jsx)("path",{d:"M12.67989,42.93969a9.87,9.87,0,0,0-5.754-1.895c-.113.22-.223.439-.33008.662a9.45046,9.45046,0,0,1,5.69507,1.749,6.27885,6.27885,0,0,1,2.61,6.305,10.16524,10.16524,0,0,1-.598,2.228c.238-.023.481-.053.725-.087.78308-2.249,1.394-6.184-2.3479-8.962",transform:"translate(-0.00057 0.01643)"})]})]}),(0,f.jsx)("circle",{id:"stn",r:8,className:"rmg-stn__mtr"}),(0,f.jsx)("path",{id:"stn_b",className:"rmg-stn__mtr",d:"M-6.369803765,4.84a8,8,0,1,1,12.73960753,0a8,8,0,1,1-12.73960758,0Z"}),(0,f.jsx)("path",{id:"stn_bb",d:"M-6.369803765,4.84a8,8,0,1,1,12.73960753,0a8,8,0,0,1,0,9.68a8,8,0,1,1-12.73960753,0a8,8,0,0,1,0,-9.68Z",className:"rmg-stn__mtr"}),(0,f.jsx)("use",{id:"int",xlinkHref:"#stn"}),(0,f.jsx)("use",{id:"int_b",xlinkHref:"#stn_b"}),(0,f.jsx)("use",{id:"int_bb",xlinkHref:"#stn_bb"}),(0,f.jsx)("path",{id:"int2",d:"M -8,0 v 18 a 8,8 0 0,0 16,0 v -18 a 8,8 0 0,0 -16,0 Z",className:"rmg-stn__mtr"}),[3,4,5,6,7,8,9,10,11,12].map((function(t){var n=18*(t-1);return(0,f.jsxs)(r.Fragment,{children:[(0,f.jsx)("path",{id:"int".concat(t),d:"M-8,0v".concat(n,"a8,8,0,0,0,16,0v-").concat(n,"a8,8,0,0,0-16,0Z"),className:"rmg-stn__mtr"}),(0,f.jsx)("path",{id:"int".concat(t,"_b"),className:"rmg-stn__mtr",d:"M-8,9.68v".concat(n,"a8,8,0,0,0,16,0v-").concat(n,"a8,8,0,0,0-1.630196235-4.84a8,8,0,1,0-12.73960758,0a8,8,0,0,0-1.630196235,4.84Z")}),(0,f.jsx)("path",{id:"int".concat(t,"_bb"),className:"rmg-stn__mtr",d:"M-8,19.36v".concat(n,"a8,8,0,0,0,16,0v-").concat(n,"a8,8,0,0,0-1.630196235-4.84a8,8,0,0,0,0-9.68a8,8,0,1,0-12.73960758,0a8,8,0,0,0,0,9.68a8,8,0,0,0-1.630196235,4.84Z")})]},t)})),(0,f.jsxs)("g",{id:"osi11",children:[(0,f.jsx)("path",{d:"M0,0V26"}),(0,f.jsx)("use",{xlinkHref:"#stn"}),(0,f.jsx)("use",{xlinkHref:"#stn",y:26})]}),(0,f.jsxs)("g",{id:"osi11_b",children:[(0,f.jsx)("path",{d:"M0,0V35.68"}),(0,f.jsx)("use",{xlinkHref:"#stn_b"}),(0,f.jsx)("use",{xlinkHref:"#stn",y:35.68})]}),(0,f.jsxs)("g",{id:"osi11_bb",children:[(0,f.jsx)("path",{d:"M0,0V45.36"}),(0,f.jsx)("use",{xlinkHref:"#stn_bb"}),(0,f.jsx)("use",{xlinkHref:"#stn",y:45.36})]}),(0,f.jsxs)("g",{id:"osi12",children:[(0,f.jsx)("path",{d:"M0,0V26"}),(0,f.jsx)("use",{xlinkHref:"#stn"}),(0,f.jsx)("use",{xlinkHref:"#int2",y:26})]}),(0,f.jsxs)("g",{id:"osi12_b",children:[(0,f.jsx)("path",{d:"M0,11V35.68"}),(0,f.jsx)("use",{xlinkHref:"#stn_b"}),(0,f.jsx)("use",{xlinkHref:"#int2",y:35.68})]}),(0,f.jsxs)("g",{id:"osi12_bb",children:[(0,f.jsx)("path",{d:"M0,11V45.36"}),(0,f.jsx)("use",{xlinkHref:"#stn_bb"}),(0,f.jsx)("use",{xlinkHref:"#int2",y:45.36})]}),(0,f.jsx)("use",{id:"osi22",xlinkHref:"#osi12"}),(0,f.jsx)("use",{id:"osi22_b",xlinkHref:"#osi12_b"}),(0,f.jsx)("use",{id:"osi22_bb",xlinkHref:"#osi12_bb"}),(0,f.jsxs)("g",{id:"osi22end",children:[(0,f.jsx)("path",{d:"M0,0H41"}),(0,f.jsx)("use",{xlinkHref:"#stn"}),(0,f.jsx)("use",{xlinkHref:"#int2",x:41,y:-18})]}),(0,f.jsxs)("g",{id:"osi22end_b",children:[(0,f.jsx)("path",{d:"M0,9.68H41"}),(0,f.jsx)("use",{xlinkHref:"#stn_b"}),(0,f.jsx)("use",{xlinkHref:"#int2",x:41,y:-8.32})]}),(0,f.jsx)("path",{id:"inttick",d:"M0,0v17",strokeLinecap:"round"})]})}))},5459:function(t,n,e){var r=e(4942),i=e(2791),s=e(184);n.Z=(0,i.memo)((function(t){var n;return(0,s.jsx)("rect",{fill:"var(--rmg-theme-colour)",height:20,style:(n={width:"var(--rmg-svg-width)"},(0,r.Z)(n,"--strip-percentage",t.stripPc),(0,r.Z)(n,"transform","translateY(calc(var(--strip-percentage, 95) * var(--rmg-svg-height) / 100 - 10px))"),n)})}))}}]);
//# sourceMappingURL=railmapMTR.d352600a.chunk.js.map