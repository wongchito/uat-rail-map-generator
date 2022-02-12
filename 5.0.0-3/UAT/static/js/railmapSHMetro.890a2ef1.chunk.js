"use strict";(self.webpackChunkrail_map_generator=self.webpackChunkrail_map_generator||[]).push([[3957],{3824:function(n,t,e){e.d(t,{Az:function(){return f},QE:function(){return h},ML:function(){return d},h6:function(){return m},LD:function(){return g},pS:function(){return x}});var r=e(885),c=e(5671),i=e(3144),a=e(2982),o=e(7762),s=e(4942),l=e(1413),u=e(713),f=function(n,t,e){return Object.keys(n).reduce((function(r,c){return(0,l.Z)((0,l.Z)({},r),{},(0,s.Z)({},c,n[c].children.reduce((function(r,i){return(0,l.Z)((0,l.Z)({},r),{},(0,s.Z)({},i,1+t(n,i)+e(n,c)))}),{})))}),{})},h=function n(t,e,r){if(t===e)return{len:0,nodes:[t]};var c=[],i=[];Object.keys(r[t]).forEach((function(a){var o=n(a,e,r);o.len<0||(c.push(r[t][a]+o.len),o.nodes.unshift(t),i.push(o.nodes))}));var a=Math.max.apply(Math,c);return{len:a,nodes:i[c.indexOf(a)]}},d=function(n,t,e){var r=h("linestart","lineend",t);if(r.nodes.includes(n))return h(r.nodes[1],n,t).len;for(var c=e.filter((function(t){return t.includes(n)}))[0],i=n;!r.nodes.includes(i);)i=c[c.indexOf(i)-1];for(var a=n;!r.nodes.includes(a);)a=c[c.indexOf(a)+1];var o="linestart"===i,s=[];return o||"lineend"===a?o?(s[0]=0,s[1]=h(r.nodes[1],a,t).len,s[2]=h(c[1],n,t).len,s[3]=h(n,a,t).len):(s[0]=h(r.nodes[1],i,t).len,s[1]=h(i,r.nodes.slice(-2)[0],t).len,s[2]=h(i,n,t).len,s[3]=h(n,c.slice(-2)[0],t).len):(s[0]=h(r.nodes[1],i,t).len,s[1]=h(i,a,t).len,s[2]=h(i,n,t).len,s[3]=h(n,a,t).len),s[0]+s[2]*s[1]/(s[2]+s[3])},m=function(n,t,e){var r;return console.log("computing stations' states"),(0,a.Z)(new Set((r=[]).concat.apply(r,(0,a.Z)(t)))).reduce((function(r,c){return(0,l.Z)((0,l.Z)({},r),{},(0,s.Z)({},c,c===n?0:(e===u.wA.right?function(n,t,e){var r,c=(0,o.Z)(e);try{for(c.s();!(r=c.n()).done;){var i=r.value,a=i.indexOf(n),s=i.indexOf(t);if(-1!==a&&a<s)return!0}}catch(l){c.e(l)}finally{c.f()}return!1}(n,c,t):function(n,t,e){var r,c=(0,o.Z)(e);try{for(c.s();!(r=c.n()).done;){var i=r.value,a=i.indexOf(n),s=i.indexOf(t);if(-1!==s&&s<a)return!0}}catch(l){c.e(l)}finally{c.f()}return!1}(n,c,t))?1:-1))}),{})},g=function(){function n(t){var e=this;(0,c.Z)(this,n),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(n){return 0},this.rightWideFactor=function(n){return 0},this.pathWeight=function(n,t){return e.stnList[n].children.includes(t)?1+e.rightWideFactor(n)+e.leftWideFactor(t):-1/0},this.pathTurnParams=function(n){var t=35-17.5*Math.sqrt(3),e=n-2*t;return{tr:35,dx_a:17.5,dy_a:t,dx_l:e*Math.sqrt(3),dy_l:e}},this.pathTurnSE=function(n){var t=e.pathTurnParams(n),r=t.tr,c=t.dx_a,i=t.dy_a,a=t.dx_l,o=t.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(i," l ").concat(a,",").concat(o," a ").concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(i)},this.pathTurnNE=function(n){var t=e.pathTurnParams(n),r=t.tr,c=t.dx_a,i=t.dy_a,a=t.dx_l,o=t.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(c,",").concat(-i," l ").concat(a,",").concat(-o," a ").concat(r,",").concat(r," 0 0,1 ").concat(c,",").concat(-i)},this.stnList=t.stnList,this.criticalPath=t.criticalPath}return(0,i.Z)(n,[{key:"getYShare",value:function(n,t){if(n in this.yShares)return this.yShares[n];if(["linestart","lineend"].includes(n)||this.stnList[n].parents.length>1||this.stnList[n].children.length>1)return this.yShares[n]=0,0;var e=this.stnList[n].parents[0];if(e){if(1===this.stnList[e].children.length){var r=this.getYShare(e);return this.yShares[n]=r,r}var c=0===this.stnList[e].children.indexOf(n)?1:-1;return this.yShares[n]=c,c}return this.yShares[n]=0,0}},{key:"_linePath",value:function(n,t,e,c,i,a,o,s){var l=this,u=(0,r.Z)([],3),f=u[0],h=u[1],d=u[2],m=[],g=this.pathTurnParams(a),x=g.dx_a+g.dx_l/2,p=(t[1]-t[0])/o.len*2,j=((t[1]-t[0])/o.len-2*x)/2;return j+p<0&&console.warn("SVG width too small! ".concat(j+p)),n.forEach((function(t){var r=c[t],o=i[t];if(!h&&0!==h)return f=t,d=r,h=o,void(1===n.length?m.push("M ".concat(r,",").concat(o)):e[0].includes(t)?e[0].includes(n[1])?m.push("M ".concat(r,",").concat(o)):(c[n[1]]>0&&m.push("M ".concat(r,",").concat(o+s)),i[n[1]]<0&&m.push("M ".concat(r,",").concat(o-s))):m.push("M ".concat(r,",").concat(o)));o>h?(m.push("h ".concat(0===o?r-d-p*l.leftWideFactor(t)-j-2*x:p*l.rightWideFactor(f)+j)),m.push(l.pathTurnSE(a))):o<h&&(m.push("h ".concat(0===o?r-d-p*l.leftWideFactor(t)-j-2*x:p*l.rightWideFactor(f)+j)),m.push(l.pathTurnNE(a))),m.push("H ".concat(r)),f=t,d=r,h=o})),m.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(n,t){console.log("computing y shares");var e=new this({stnList:n});return Object.keys(n).forEach((function(n){["linestart","lineend"].includes(n)||n in e.yShares||e.getYShare(n,t)})),e.yShares}},{key:"drawLine",value:function(n,t,e,r,c,i,a,o){var s=this,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:9.68,u={main:[],pass:[]};return n.forEach((function(f,h){var d=(f=f.filter((function(n){return!["linestart","lineend"].includes(n)}))).filter((function(n){return t[n]>=0})),m=f.filter((function(n){return t[n]<=0}));1===d.length&&(m=f),0===d.filter((function(n){return-1!==m.indexOf(n)})).length&&d.length&&(m[0]===f[0]?m.push(d[0]):d[0]===f[0]&&d[d.length-1]===f[f.length-1]&&m.length?(m=f,d=[]):m.unshift(d[d.length-1])),u.main.push(new s({stnList:e,criticalPath:o})._linePath(d,r,n,c,i,a,o,l)),u.pass.push(new s({stnList:e,criticalPath:o})._linePath(m,r,n,c,i,a,o,l))})),u}}]),n}(),x=function(n,t){var e=(n=n.filter((function(n){return!["linestart","lineend"].includes(n)}))).filter((function(n){return t[n]>=0})),r=n.filter((function(n){return t[n]<=0}));return 1===e.length&&(r=n),0===e.filter((function(n){return-1!==r.indexOf(n)})).length&&e.length&&(r[0]===n[0]?r.push(e[0]):e[0]===n[0]&&e[e.length-1]===n[n.length-1]&&r.length?(r=n,e=[]):r.unshift(e[e.length-1])),{main:e,pass:r}}},949:function(n,t,e){e.r(t),e.d(t,{default:function(){return N}});var r=e(2791),c=e(885),i=e(4942),a=e(1413),o=e(3824),s=e(5987),l=e(2982),u=e(713),f=e(6169),h=e(184),d=["stnName"],m=["intInfos","direction"],g=function(n){var t=n.stnId,e=n.stnState,r=n.color,c=(0,f.CG)((function(n){return n.param})),i=c.stn_list[t],o=([].concat((0,l.Z)(i.branch.left),(0,l.Z)(i.branch.right)).length?8+12*i.name[1].split("\\").length:0)*("r"===c.direction?-1:1),s="",u={};return"sh2020"===c.info_panel_type?(s=3===i.services.length?"stn_sh_2020_direct":2===i.services.length?"stn_sh_2020_express":"stn_sh_2020",u.fill=-1===e?"gray":r?r[2]:"var(--rmg-theme-colour)"):(s=3===i.services.length?"direct_sh":2===i.services.length?"express_sh":[].concat((0,l.Z)(i.transfer.info[0]),(0,l.Z)(i.transfer.info[1]||[])).length>0?"int2_sh":"stn_sh",u.stroke=-1===e?"gray":r?r[2]:"var(--rmg-theme-colour)"),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("use",(0,a.Z)({xlinkHref:"#".concat(s)},u)),(0,h.jsx)("g",{transform:"translate(".concat(o,",0)"),children:(0,h.jsx)(x,{name:i.name,infos:i.transfer.info,stnState:e,direction:c.direction,info_panel_type:c.info_panel_type,facility:i.facility})})]})},x=function(n){var t,e=n.name,i=n.infos,a=n.stnState,o=n.info_panel_type,s=n.direction,f=n.facility,d=n.name[1].split("\\").length,m=(0,r.useRef)(null),g=r.useState({width:0}),x=(0,c.Z)(g,2),v=x[0],_=x[1];r.useEffect((function(){return _(m.current.getBBox())}),(0,l.Z)(e));var y=v.width+5,S="l"===s?1:-1,k=f!==u.mV.none?30:0;return(0,h.jsxs)("g",{transform:"translate(".concat("l"===s?6:-6,",").concat("sh2020"===o?-20:-6,")rotate(").concat("l"===n.direction?-45:45,")"),children:[i.flat().length>0&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("line",{x1:k*S,x2:(k+y)*S,stroke:-1===a?"gray":"black",strokeWidth:.5}),(0,h.jsx)(j,{intInfos:i,transform:"translate(".concat((k+y)*S,",-10.75)"),direction:s})]}),f!==u.mV.none&&(0,h.jsx)("use",{xlinkHref:"#"+f,x:10*S,y:-30}),(0,h.jsxs)("g",{textAnchor:"l"===s?"start":"end",transform:"translate(".concat(k*S,",").concat(-16.15625-12*(d-1),")"),children:[(0,h.jsx)(p,{ref:m,stnName:e,fill:-1===a?"gray":0===a?"red":"black"}),(null===(t=i[1])||void 0===t?void 0:t.length)>0&&(0,h.jsx)("g",{transform:"translate(".concat((y+15*i.reduce((function(n,t){return n+t.length}),0))*S,",-30)"),children:(0,h.jsx)(Z,{osiInfos:i[1]})})]})]})},p=r.forwardRef((function(n,t){var e=n.stnName,c=(0,s.Z)(n,d);return(0,h.jsx)("g",(0,a.Z)((0,a.Z)({ref:t},c),{},{children:r.useMemo((function(){return(0,h.jsxs)(h.Fragment,{children:[e[0].split("\\").map((function(n,t,e){return(0,h.jsx)("text",{className:"rmg-name__zh",dy:-15*(e.length-1-t),children:n},t)})),(0,h.jsx)("g",{fontSize:9.6,children:e[1].split("\\").map((function(n,t){return(0,h.jsx)("text",{className:"rmg-name__en",dy:12*(t+1),children:n},t)}))})]})}),(0,l.Z)(e))}))})),j=function(n){var t,e=n.intInfos,r=(n.direction,(0,s.Z)(n,m)),c=[].concat((0,l.Z)(e[0]),(0,l.Z)(e[1]||[]),(0,l.Z)((null===(t=e[2])||void 0===t?void 0:t.filter((function(n){return Boolean(n[4].match(/^\u78c1(\u60ac)*\u6d6e/))})))||[])),i=0;return(0,h.jsxs)("g",(0,a.Z)((0,a.Z)({fontSize:14,textAnchor:"middle"},r),{},{children:[c.map((function(t,e){var r=Boolean(t[4].match(/^\d.*$/)),c=Boolean(t[4].match(/^\u78c1(\u60ac)*\u6d6e/));"r"===n.direction&&(i-=(r||c?20:14*t[4].length+12+0)+(0===e?0:5));var a=(0,h.jsx)("g",{});return a=c?(0,h.jsx)("g",{transform:"translate(".concat(i,",-16)scale(0.1428571429)"),children:(0,h.jsx)(v,{info:t})},e):r?(0,h.jsx)("g",{transform:"translate(".concat(i,",0)"),children:(0,h.jsx)(_,{info:t})},e):(0,h.jsx)("g",{transform:"translate(".concat(i,",0)"),children:(0,h.jsx)(y,{info:t})},e),"l"===n.direction&&(i+=r||c?25:14*t[4].length+12+5),a})),(0,l.Z)(e[2]||[]).length>0&&(0,h.jsx)("g",{transform:"translate(".concat(i-("r"===n.direction?5:0),",0)"),children:(0,h.jsx)(S,{osysiInfos:e[2],direction:n.direction})},c.length+1)]}))},v=(0,r.memo)((function(n){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("use",{xlinkHref:"#intbox_maglev",fill:n.info[2],stroke:n.info[2]})})}),(function(n,t){return n.info.toString()===t.info.toString()})),_=(0,r.memo)((function(n){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("use",{xlinkHref:"#intbox_number",fill:n.info[2]}),(0,h.jsx)("text",{x:10,className:"rmg-name__zh",fill:n.info[3],dominantBaseline:"central",children:n.info[4].match(/(\d*)\w+/)[0]})]})}),(function(n,t){return n.info.toString()===t.info.toString()})),y=(0,r.memo)((function(n){var t=n.info[4].split("\\")[0].length;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("rect",{height:22,width:14*t+12,y:-11,fill:n.info[2]}),(0,h.jsx)("text",{x:7*t+6,className:"rmg-name__zh",fill:n.info[3],dominantBaseline:"central",children:n.info[4].split("\\")[0]})]})}),(function(n,t){return n.info.toString()===t.info.toString()})),Z=function(n){var t=n.osiInfos.map((function(n){return n[4]})).join("\uff0c");return r.useMemo((function(){return(0,h.jsxs)("g",{textAnchor:"middle",fontSize:"50%",children:[(0,h.jsx)("text",{className:"rmg-name__zh",dy:-5,children:"\u6362\u4e58".concat(t)}),(0,h.jsx)("text",{className:"rmg-name__zh",dy:5,children:"\u4ec5\u9650\u516c\u5171\u4ea4\u901a\u5361"}),(0,h.jsx)("text",{className:"rmg-name__en",dy:12.5,fontSize:"75%",children:"Only for Public Transportation Card"})]})}),[t.toString()])},S=function(n){var t=n.osysiInfos.map((function(n){return n[4]})).join("\uff0c"),e=n.osysiInfos.map((function(n){return n[5]})).join(", ");return r.useMemo((function(){return(0,h.jsxs)("g",{textAnchor:"l"===n.direction?"start":"end",fontSize:"50%",children:[(0,h.jsxs)("text",{className:"rmg-name__zh",dy:3,children:["\u8f6c\u4e58",t]}),(0,h.jsxs)("text",{className:"rmg-name__en",dy:10,fontSize:"75%",children:["To ",e]})]})}),[n.osysiInfos.toString(),n.direction])},k=function(n,t){return n.map((function(n){var e=t.filter((function(t){return t.includes(n.from)&&t.includes(n.to)}));if(1!==e.length)return{linePath:[],colors:n.colors};var r=e.flat(),c=r.indexOf(n.from),i=r.indexOf(n.to);return{linePath:c<i?r.slice(c,i+1):r.slice(i,c+1),colors:n.colors}})).filter((function(n){return 0!==n.linePath.length}))},M=["shanghai","sh4","#5F259F","#fff"],O=function(n){var t=n.xs,e=n.servicesPresent,s=n.stnStates,u=(0,f.CG)((function(n){return n.param})),d=u.direction,m=u.stn_list,g=u.branch_spacing,x=u.coline,p=(0,f.CG)((function(n){return n.helper})),j=p.branches,v=p.depsStr,_=r.useMemo((function(){return console.log("computing y shares"),Object.keys(m).reduce((function(n,t){if(j[0].includes(t))return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},t,0));var e=j.slice(1).filter((function(n){return n.includes(t)}))[0];return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},t,m[e[0]].children.indexOf(e[1])?-3:3))}),{})}),[v]),y=Object.entries(_).filter((function(n){var t=(0,c.Z)(n,2);t[0];return t[1]<=0})).reduce((function(n,t){var e=(0,c.Z)(t,2),r=e[0],o=e[1];return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},r,o))}),{}),Z=Object.keys(y).reduce((function(n,t){return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},t,-y[t]*g))}),{}),S=r.useMemo((function(){return function(n,t){return n.map((function(n){var e=(0,o.pS)(n.linePath,t);return{main:[{linePath:e.main,colors:n.colors}],pass:[{linePath:e.pass,colors:n.colors}]}})).reduce((function(n,t){return n.main=[].concat((0,l.Z)(n.main),(0,l.Z)(t.main)),n.pass=[].concat((0,l.Z)(n.pass),(0,l.Z)(t.pass)),n}),{main:[],pass:[]})}(k(x,j),s)}),[JSON.stringify(x),JSON.stringify(j),JSON.stringify(s)]);console.log(S);var M=e.reduce((function(n,r){return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},r,Object.keys(S).reduce((function(n,c){return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},c,S[c].map((function(n){return{path:C(n.linePath,c,t,Z,d,r,e.length,m,"diagonal"),colors:n.colors}})).filter((function(n){return""!==n.path}))))}),{})))}),{});return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("g",{id:"coline",transform:"translate(0,".concat(15,")"),children:[(0,h.jsx)(b,{paths:M,direction:d}),(0,h.jsx)(w,{colineStns:S,branches:j,xs:t,ys:Z,stnStates:s,lineWidth:12,colineGap:3}),(0,h.jsx)(L,{stnIds:Object.entries(_).filter((function(n){var t=(0,c.Z)(n,2);t[0];return t[1]<0})).reduce((function(n,t){var e=(0,c.Z)(t,2),r=e[0];e[1];return[].concat((0,l.Z)(n),[r])}),[]).filter((function(n){return!["linestart","lineend"].includes(n)})).filter((function(n){return 0!==m[n].services.length})),xs:t,ys:Z,stnStates:s})]})})},b=function(n){var t=n.paths,e=n.direction;return(0,h.jsx)(h.Fragment,{children:Object.keys(t).map((function(n,c){var i,a;return(0,h.jsx)("g",{transform:"translate(0,".concat(25*c,")"),children:(0,h.jsxs)("g",{children:[null===(i=t[n])||void 0===i?void 0:i.pass.map((function(t,e){return(0,h.jsx)(r.Fragment,{children:(0,h.jsx)("path",{stroke:"var(--rmg-grey)",strokeWidth:12,fill:"none",d:t.path,strokeLinejoin:"round",filter:n===u.K9.local?void 0:"url(#contrast-".concat(n,")")},e)},e)})),null===(a=t[n])||void 0===a?void 0:a.main.map((function(t,c){var i;return(0,h.jsxs)(r.Fragment,{children:[t.colors.length>1&&(0,h.jsx)("linearGradient",{id:"grad".concat(c),y1:"-100%",y2:"100%",x1:"0",x2:"0",gradientUnits:"userSpaceOnUse",children:t.colors.map((function(n,e){return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)("stop",{offset:"".concat(100/t.colors.length*(e+0),"%"),stopColor:n[2]}),(0,h.jsx)("stop",{offset:"".concat(100/t.colors.length*(e+1),"%"),stopColor:n[2]})]},e)}))}),"l"===e&&(0,h.jsx)("marker",{id:"arrow_left_".concat(c,"_").concat(t.colors.map((function(n){return n[2]})).join("_")),refY:.5,refX:1,children:(0,h.jsx)("path",{d:"M1,0L0,1H1z",fill:t.colors.length>1?"url(#grad".concat(c,")"):t.colors[0][2]})}),"r"===e&&(0,h.jsx)("marker",{id:"arrow_right_".concat(c,"_").concat(t.colors.map((function(n){return n[2]})).join("_")),refY:.5,children:(0,h.jsx)("path",{d:"M0,0L1,1H-1z",fill:t.colors.length>1?"url(#grad".concat(c,")"):t.colors[0][2]})}),(0,h.jsx)("path",{stroke:(null!==(i=t.colors.at(-1))&&void 0!==i?i:M)[2],strokeWidth:12,fill:"none",d:t.path,markerStart:"l"===e?"url(#arrow_left_".concat(c,"_").concat(t.colors.map((function(n){return n[2]})).join("_"),")"):void 0,markerEnd:"r"===e?"url(#arrow_right_".concat(c,"_").concat(t.colors.map((function(n){return n[2]})).join("_"),")"):void 0,strokeLinejoin:"round",filter:n===u.K9.local?void 0:"url(#contrast-".concat(n,")")},c)]},c)}))]})},"servicePath".concat(c))}))})},w=function(n){var t=n.colineStns,e=n.branches,r=n.xs,c=n.ys,i=n.stnStates,a=n.lineWidth,o=n.colineGap,s=[].concat((0,l.Z)(t.main),(0,l.Z)(t.pass)).map((function(n){return n.linePath.map((function(t){var e;return{curStn:t,x:r[t],y:c[t],color:null!==(e=n.colors.at(-1))&&void 0!==e?e:M}}))})).flat().reduce((function(n,t){return n.find((function(n){return n.curStn===t.curStn}))?n:n.concat(t)}),[]).filter((function(n){return e[0].includes(n.curStn)}));return console.log(s),(0,h.jsx)(h.Fragment,{children:s.map((function(n){var t=n.curStn,e=n.x,r=n.y,c=n.color,s=(-1===i[t]?0:a)+o+a,l=(-1===i[t]?0:-a)-o-a/2;return(0,h.jsx)("g",{transform:"translate(".concat(e,",").concat(r,")"),children:(0,h.jsx)("rect",{stroke:"none",height:s,width:12,x:-6,y:l,fill:-1===i[t]?"var(--rmg-grey)":c[2]})},t)}))})},L=function(n){var t=n.xs,e=n.ys,c=n.stnStates,o=n.stnIds,s=(0,f.CG)((function(n){return n.helper})),l=s.branches,u=(s.depsStr,(0,f.CG)((function(n){return n.param})).coline),d=r.useMemo((function(){return k(u,l)}),[JSON.stringify(u),l.toString()]),m=o.reduce((function(n,t){var e;return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},t,null!==(e=d.filter((function(n){return n.linePath.includes("syq7")})).map((function(n){return n.colors})).flat().at(0))&&void 0!==e?e:M))}),{});return(0,h.jsx)("g",{children:o.map((function(n){return(0,h.jsx)("g",{transform:"translate(".concat(t[n],",").concat(e[n],")"),children:(0,h.jsx)(g,{stnId:n,stnState:c[n],color:m[n]})},n)}))})},H=function(){var n=(0,f.CG)((function(n){return n.helper})),t=n.routes,e=n.branches,s=n.depsStr,l=(0,f.CG)((function(n){return n.param})),d=(0,f.CG)((function(n){return n.param})),m=d.stn_list,g=d.branch_spacing,x=d.coline,p=d.direction,j=(0,o.Az)(l.stn_list,(function(){return 0}),(function(){return 0})),v=(0,o.QE)("linestart","lineend",j),_=(0,o.QE)(v.nodes[1],v.nodes.slice(-2)[0],j),y=r.useMemo((function(){return console.log("computing x shares"),Object.keys(l.stn_list).reduce((function(n,t){return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},t,(0,o.ML)(t,j,e)))}),{})}),[e.toString(),JSON.stringify(j)]),Z=[l.svgWidth.railmap*l.padding/100,l.svgWidth.railmap*(1-l.padding/100)],S=Object.keys(y).reduce((function(n,t){return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},t,Z[0]+y[t]/_.len*(Z[1]-Z[0])))}),{}),k=r.useMemo((function(){return console.log("computing y shares"),Object.keys(m).reduce((function(n,t){if(e[0].includes(t))return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},t,0));var r=e.slice(1).filter((function(n){return n.includes(t)}))[0];return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},t,m[r[0]].children.indexOf(r[1])?-3:3))}),{})}),[s]),M=Object.entries(k).filter((function(n){var t=(0,c.Z)(n,2);t[0];return t[1]>=0})).reduce((function(n,t){var e=(0,c.Z)(t,2),r=e[0],o=e[1];return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},r,o))}),{}),b=Object.keys(M).reduce((function(n,t){return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},t,-M[t]*g))}),{}),w=r.useMemo((function(){return(0,o.h6)(l.current_stn_idx,t,l.direction)}),[l.current_stn_idx,l.direction,t.toString()]),L=Object.values(u.K9),H=Object.values(l.stn_list).map((function(n){return n.services})).flat().reduce((function(n,t){return n[L.indexOf(t)]=!0,n}),[!1,!1,!1]).map((function(n,t){return[L[t],n]})).filter((function(n){return n[1]})).map((function(n){return n[0]})),N=e.map((function(n){return(0,o.pS)(n,w)})).reduce((function(n,t){return n.main.push(t.main),n.pass.push(t.pass),n}),{main:[],pass:[]});console.log(N);var G=H.reduce((function(n,t){return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},t,Object.keys(N).reduce((function(n,e){return(0,a.Z)((0,a.Z)({},n),{},(0,i.Z)({},e,N[e].map((function(n){return C(n,e,S,b,p,t,H.length,m)})).filter((function(n){return""!==n}))))}),{})))}),{});return console.log(G),(0,h.jsxs)("g",{id:"main",transform:"translate(0,".concat(l.svg_height-163,")"),children:[(0,h.jsx)(F,{paths:G,direction:l.direction}),(0,h.jsx)(P,{stnIds:Object.keys(M).filter((function(n){return!["linestart","lineend"].includes(n)})).filter((function(n){return 0!==m[n].services.length})),xs:S,ys:b,stnStates:w}),(null===x||void 0===x?void 0:x.length)>0&&(0,h.jsx)(O,{xs:S,servicesPresent:H,stnStates:w}),(0,h.jsx)(z,{servicesLevel:H,dy:100-l.svg_height,direction:l.direction,lineXs:Z}),(0,h.jsx)(W,{})]})},F=function(n){var t=(0,f.CG)((function(n){return n.param})).theme,e=n.paths,r=n.direction;return(0,h.jsx)(h.Fragment,{children:Object.keys(e).map((function(c,i){var a,o;return(0,h.jsxs)("g",{transform:"translate(0,".concat(25*i,")"),filter:"#999999"===t[2]?"url(#pujiang_outline_railmap)":void 0,children:[(0,h.jsx)("g",{children:null===(a=e[c])||void 0===a?void 0:a.pass.map((function(t,e){return(0,h.jsx)("path",{stroke:"var(--rmg-grey)",strokeWidth:12,fill:"none",d:t,markerStart:"l"===n.direction?"url(#arrow_gray)":void 0,markerEnd:"r"===n.direction?"url(#arrow_gray)":void 0,strokeLinejoin:"round"},e)}))}),(0,h.jsx)("g",{children:null===(o=e[c])||void 0===o?void 0:o.main.map((function(n,t){return(0,h.jsx)("path",{stroke:"var(--rmg-theme-colour)",strokeWidth:12,fill:"none",d:n,markerStart:"l"===r?"url(#arrow_theme_left)":void 0,markerEnd:"r"===r?"url(#arrow_theme_right)":void 0,strokeLinejoin:"round",filter:c===u.K9.local?void 0:"url(#contrast-".concat(c,")")},t)}))})]},"servicePath".concat(i))}))})},C=function(n,t,e,r,i,a,o,s){var l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"rightangle",u=[],f=(0,c.Z)(u,2),h=f[0],d=f[1],m={},g={local:0,express:20,direct:40}[a],x=o>1?50:0,p=30,j=!1,v=!1;if(n.length>0&&(s[n.at(-1)||0].children.some((function(n){return["linestart","lineend"].includes(n)}))?v=!0:s[n.at(0)||0].parents.some((function(n){return["linestart","lineend"].includes(n)}))&&(j=!0),p=j||v?p:0),n.forEach((function(n){var t=e[n],c=r[n];if(!h&&0!==h)return d=t,h=c,void(m.start=[t,c]);0===c?c!==h&&(m.bifurcate=[d,h]):c!==h&&(m.bifurcate=[t,c]),m.end=[t,c],d=t,h=c})),m.hasOwnProperty("start")){if(m.hasOwnProperty("end")){if(m.hasOwnProperty("bifurcate")){var _=(0,c.Z)(m.start,2),y=_[0],Z=_[1],S=m.bifurcate[0],k=(0,c.Z)(m.end,2),M=k[0],O=k[1];return"main"===t?"l"===i?O>Z?"rightangle"===l?"M ".concat(y-p,",").concat(Z," H ").concat(M," V ").concat(O):"M ".concat(y-p,",").concat(Z," H ").concat(S+p," L ").concat(M-p,",").concat(O," H ").concat(M):"rightangle"===l?"M ".concat(y,",").concat(Z," V ").concat(O," H ").concat(M):"M ".concat(y-p,",").concat(Z," H ").concat(S+p," L ").concat(M-p,",").concat(O," H ").concat(M):O>Z?"rightangle"===l?"M ".concat(y,",").concat(Z," H ").concat(M," V ").concat(O):"M ".concat(y,",").concat(Z," H ").concat(y+p," L ").concat(S-p,",").concat(O," H ").concat(M+p):"rightangle"===l?"M ".concat(y,",").concat(Z," V ").concat(O," H ").concat(M+p):"M ".concat(y-p,",").concat(Z," H ").concat(S+p," L ").concat(M-p,",").concat(O," H ").concat(M):O>Z?"rightangle"===l?"M ".concat(y-p,",").concat(Z," H ").concat(M," V ").concat(O):"M ".concat(y,",").concat(Z," H ").concat(y+p," L ").concat(S-p,",").concat(O," H ").concat(M+p):"rightangle"===l?"M ".concat(y,",").concat(Z," V ").concat(O," H ").concat(M+p):"M ".concat(y-p,",").concat(Z," H ").concat(S+p," L ").concat(M-p,",").concat(O," H ").concat(M)}var b=(0,c.Z)(m.start,2),w=b[0],L=b[1],H=m.end[0];return"main"===t?"l"===i?"M ".concat(w-p-g,",").concat(L," H ").concat(H):"M ".concat(w,",").concat(L," H ").concat(H+p+g):"l"===i?"M ".concat(w-p,",").concat(L," H ").concat(H+p+x):"M ".concat(w-p-x,",").concat(L," H ").concat(H+p)}var F=(0,c.Z)(m.start,2),C=F[0],P=F[1];return"main"===t?"l"===i?"M ".concat(C-p-g,",").concat(P," H ").concat(C):"M ".concat(C,",").concat(P," H ").concat(C+p+g):"l"===i?"M ".concat(C,",").concat(P," L ").concat(C+p+x,",").concat(P):"M ".concat(C-p-x,",").concat(P," L ").concat(C,",").concat(P)}return""},P=function(n){var t=n.xs,e=n.ys,r=n.stnStates,c=n.stnIds;return(0,h.jsx)("g",{children:c.map((function(n){return(0,h.jsx)("g",{transform:"translate(".concat(t[n],",").concat(e[n],")"),children:(0,h.jsx)(g,{stnId:n,stnState:r[n]})},n)}))})},z=function(n){var t=(0,f.CG)((function(n){return n.param}));if(1===n.servicesLevel.length)return(0,h.jsx)(h.Fragment,{});var e=n.servicesLevel.map((function(n){return{local:"\u666e\u901a\u8f66",express:"\u5927\u7ad9\u8f66",direct:"\u76f4\u8fbe\u8f66"}[n]})),r="r"===n.direction?n.lineXs[0]-42:n.lineXs[1]+42,c=2===n.servicesLevel.length?350:500;return(0,h.jsxs)("g",{children:[e.map((function(n,t){return(0,h.jsxs)("g",{transform:"translate(".concat(r,",").concat(25*t,")"),children:[(0,h.jsx)("rect",{x:-27.5,height:10,width:55,fill:"white",stroke:"black",y:-5}),(0,h.jsx)("text",{className:"rmg-name__zh",fontSize:9,y:3,textAnchor:"middle",children:"".concat(n,"\u8fd0\u884c\u7ebf")})]},n)})),(0,h.jsxs)("g",{transform:"translate(".concat("r"===n.direction?30:t.svgWidth.railmap-c,",").concat(n.dy,")"),children:[(0,h.jsx)("text",{className:"rmg-name__zh",children:"\u56fe\u4f8b\uff1a"}),e.map((function(n,t){return(0,h.jsxs)("g",{transform:"translate(".concat(150*t+50,",0)"),children:[(0,h.jsx)("line",{x1:"0",x2:"35",y1:"-5",y2:"-5",stroke:"var(--rmg-theme-colour)",strokeWidth:"12",filter:2===t?"url(#contrast-direct)":1===t?"url(#contrast-express)":""}),(0,h.jsx)("use",{x:"17.5",y:"-5",xlinkHref:"#stn_sh",fill:"var(--rmg-theme-colour)"}),(0,h.jsx)("text",{x:"40",className:"rmg-name__zh",children:"".concat(n,"\u505c\u9760\u7ad9")})]},"serviceLevel".concat(t))}))]})]})},W=function(){var n=(0,f.CG)((function(n){return n.param}));return r.useMemo((function(){return(0,h.jsxs)("g",{transform:"translate(".concat("l"===n.direction?50:n.svgWidth.railmap-150,",").concat(100-n.svg_height,")"),children:[(0,h.jsx)("text",{className:"rmg-name__zh",children:"\u5217\u8f66\u524d\u8fdb\u65b9\u5411"}),(0,h.jsx)("path",{d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-theme-colour)",transform:"translate(".concat("l"===n.direction?-30:125,",-5)rotate(").concat("l"===n.direction?0:180,")scale(0.15)")})]})}),[n.direction,n.svgWidth.railmap,n.svg_height])},N=r.memo((function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(G,{}),(0,h.jsx)(H,{})]})})),G=r.memo((function(){return(0,h.jsxs)("defs",{children:[(0,h.jsx)("circle",{id:"stn_sh",fill:"var(--rmg-white)",strokeWidth:0,r:5}),(0,h.jsx)("path",{id:"int2_sh",fill:"var(--rmg-white)",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V10 a 5,5 0 1 1 -10,0Z"}),(0,h.jsx)("path",{id:"direct_sh",fill:"var(--rmg-white)",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V50 a 5,5 0 1 1 -10,0Z"}),(0,h.jsx)("rect",{id:"stn_sh_2020",stroke:"none",height:24,width:12,x:-6,y:-18}),(0,h.jsx)("rect",{id:"stn_sh_2020_express",stroke:"none",height:49,width:12,x:-6,y:-18}),(0,h.jsx)("rect",{id:"stn_sh_2020_direct",stroke:"none",height:74,width:12,x:-6,y:-18}),(0,h.jsx)("rect",{id:"intbox_number",height:22,width:20,y:-11}),(0,h.jsxs)("g",{id:"airport",transform:"scale(0.5)",children:[(0,h.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"var(--rmg-grey)"}),(0,h.jsx)("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"var(--rmg-white)"})]}),(0,h.jsxs)("g",{id:"disney",transform:"scale(0.5)",children:[(0,h.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"var(--rmg-grey)"}),(0,h.jsx)("path",{fill:"var(--rmg-white)",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"})]}),(0,h.jsxs)("g",{id:"railway",children:[(0,h.jsx)("circle",{cx:"0",cy:"29.33899",r:"29.33899",fill:"var(--rmg-grey)",transform:"translate(0,-2)scale(0.5)"}),(0,h.jsx)("path",{fill:"var(--rmg-white)",d:"M169,273.5c0-19,14.7-34.8,33.7-36.3c18.9-1.5,38.1-2.2,57.4-2.2c19.3,0,38.4,0.8,57.3,2.2  c19,1.5,33.7,17.3,33.7,36.3v47.3l-51.3,14.7c-11.2,3.2-18.9,13.4-18.9,25v147.8c0,17.4,12.2,32.3,29.3,35.7l110.6,22.1  c4.9,1,8.4,5.2,8.4,10.2V599H91v-22.7c0-5,3.5-9.2,8.4-10.2L209.9,544c17-3.4,29.3-18.3,29.3-35.7V360.5c0-11.6-7.7-21.8-18.9-25  L169,320.8V273.5z M309.4,31.7c0.2-1.2,0.3-2.4,0.3-3.6c0-14-11.1-25.4-24.9-26C276.6,1.4,268.3,1,260,1c-8.3,0-16.6,0.4-24.7,1.1  c-13.9,0.6-24.9,12-24.9,26c0,1.2,0.1,2.5,0.3,3.6C90.6,54.8,0,160.3,0,287c0,97.2,53.4,182,132.4,226.6l36.8-48.1  C104.3,432.4,59.8,364.9,59.8,287c0-110.6,89.6-200.2,200.2-200.2S460.2,176.4,460.2,287c0,77.9-44.5,145.4-109.4,178.5  c15,19.6,25.6,33.5,36.8,48.1C466.6,469,520,384.2,520,287C520,160.3,429.4,54.8,309.4,31.7z",transform:"translate(-10,0)scale(0.04)"})]}),(0,h.jsx)("marker",{id:"arrow_gray",viewBox:"-1.5 0 3 1.5",refY:.5,children:(0,h.jsx)("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-grey)"})}),(0,h.jsx)("marker",{id:"arrow_theme_left",refX:1,refY:.5,children:(0,h.jsx)("path",{d:"M1,0L0,1H1z",fill:"var(--rmg-theme-colour)"})}),(0,h.jsx)("marker",{id:"arrow_theme_right",refY:.5,children:(0,h.jsx)("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-theme-colour)"})}),(0,h.jsx)("filter",{id:"contrast-direct",filterUnits:"userSpaceOnUse",children:(0,h.jsxs)("feComponentTransfer",{children:[(0,h.jsx)("feFuncR",{type:"linear",slope:.5,intercept:.25}),(0,h.jsx)("feFuncG",{type:"linear",slope:.5,intercept:.25}),(0,h.jsx)("feFuncB",{type:"linear",slope:.5,intercept:.25})]})}),(0,h.jsx)("filter",{id:"contrast-express",filterUnits:"userSpaceOnUse",children:(0,h.jsxs)("feComponentTransfer",{children:[(0,h.jsx)("feFuncR",{type:"linear",slope:.75,intercept:.125}),(0,h.jsx)("feFuncG",{type:"linear",slope:.75,intercept:.125}),(0,h.jsx)("feFuncB",{type:"linear",slope:.75,intercept:.125})]})}),(0,h.jsxs)("filter",{id:"pujiang_outline_railmap",colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",x:"0",y:"-1000",width:"5000",height:"2000",children:[(0,h.jsxs)("feComponentTransfer",{in:"SourceGraphic",children:[(0,h.jsx)("feFuncR",{type:"discrete",tableValues:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"}),(0,h.jsx)("feFuncG",{type:"discrete",tableValues:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"}),(0,h.jsx)("feFuncB",{type:"discrete",tableValues:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"})]}),(0,h.jsx)("feColorMatrix",{type:"matrix",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 1 1 1 1 -3",result:"selectedColor1"}),(0,h.jsx)("feMorphology",{operator:"erode",in:"selectedColor1",radius:"0",result:"e1"}),(0,h.jsx)("feMorphology",{operator:"erode",in:"selectedColor1",radius:"1",result:"e2"}),(0,h.jsx)("feComposite",{in:"e1",in2:"e2",operator:"xor",result:"uncoloredOutline"}),(0,h.jsx)("feFlood",{floodColor:"rgb(0,0,0)"}),(0,h.jsx)("feComposite",{operator:"in",in2:"uncoloredOutline",result:"outline"}),(0,h.jsx)("feComposite",{in:"outline",in2:"selectedColor1",operator:"over",result:"result"}),(0,h.jsx)("feComposite",{in:"result",in2:"SourceGraphic",operator:"over"})]})]})}))}}]);
//# sourceMappingURL=railmapSHMetro.890a2ef1.chunk.js.map