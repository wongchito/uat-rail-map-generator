(self.webpackChunkrail_map_generator=self.webpackChunkrail_map_generator||[]).push([[4462],{3171:function(e,n,t){var i={"./baku.js":[2481,5727],"./barcelona.js":[6340,8228],"./beijing.js":[2145,6071],"./cairo.js":[6509,6827],"./changsha.js":[574,1606],"./chengdu.js":[6312,1921],"./chongqing.js":[300,903],"./dalian.js":[5169,8863],"./delhi.js":[3707,6995],"./dongguan.js":[3280,2709],"./dortmund.js":[6079,1034],"./edinburgh.js":[285,8005],"./foshan.js":[3204,1987],"./glasgow.js":[4476,6820],"./guangzhou.js":[5841,1207],"./hangzhou.js":[3427,6172],"./harbin.js":[4826,5304],"./hongkong.js":[4243,5053],"./istanbul.js":[3107,7504],"./kansai.js":[382,3851],"./kaohsiung.js":[3037,2020],"./klangvalley.js":[137,6410],"./london.js":[8087,9379],"./macao.js":[8015,9893],"./madrid.js":[8020,2275],"./nanjing.js":[1664,5638],"./newtaipei.js":[9114,5485],"./osaka.js":[1064,2343],"./oslo.js":[8057,5200],"./other.js":[7642,7856],"./paris.js":[2720,9309],"./qingdao.js":[7994,103],"./sanfrancisco.js":[4747,4432],"./sanktpeterburg.js":[1832,255],"./santiago.js":[2568,5360],"./saopaulo.js":[6956,7480],"./seoul.js":[3266,3541],"./shanghai.js":[9656,313],"./shenzhen.js":[4691,1435],"./singapore.js":[2459,2897],"./stockholm.js":[4606,640],"./suzhou.js":[9819,2281],"./taipei.js":[9489,2088],"./tehran.js":[2573,2297],"./tianjin.js":[7942,7984],"./tokyo.js":[3762,9039],"./toronto.js":[8148,9837],"./tyneandwear.js":[9314,111],"./wuxi.js":[4099,8050],"./xiamen.js":[4610,6840],"./xian.js":[2591,938]};function r(e){if(!t.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],r=n[0];return t.e(n[1]).then((function(){return t(r)}))}r.keys=function(){return Object.keys(i)},r.id=3171,e.exports=r},9505:function(e,n,t){"use strict";t.d(n,{Z:function(){return Y}});var i=t(1413),r=t(885),a=t(2982),s=t(4942),o=t(2791),c=t(2020),l=t(8596),d=t(2288),u=t(3594),h=t(5159),p=t(4026),m=t(2067),j=t(7447),f=t(269),x=t(6513),g=t(8096),Z=t(9526),v=t(9418),C=t(5088),y=t(908),b=t(159),k=t(8192),w=t(1370),I=t(5861),N=t(7757),S=t.n(N),R=t(9038),U=t(1859),_=t(2734),A=t(9403),M=t(7253),F=t(1125),T=t(713),L=t(184),H=(0,l.Z)((function(){return(0,d.Z)({cityItem:{display:"flex",flexDirection:"row",alignItems:"center"},menuItemSpan:{padding:"0 .3rem"},button:{borderRadius:"50%",height:24,width:24,minWidth:0,marginRight:8,padding:0},inputColour:{position:"absolute",width:0,height:0,left:27,top:32},buttonContainer:{display:"flex",flexShrink:1}})})),O=function(e){var n=(0,c.$)(),s=n.t,l=n.i18n,d=H(),u=function(e){var n=o.useState([]),a=(0,r.Z)(n,2),s=a[0],c=a[1],l=t(3171)("./".concat(e[0],".js")).then((function(e){return e.default})).catch((function(){return[]}));return(0,o.useEffect)((function(){"undefined"!==typeof e[0]&&(0,I.Z)(S().mark((function n(){var t;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l;case 2:t=n.sent,c(e[0]===F.jk.Other?[(0,i.Z)((0,i.Z)({},t[0]),{},{colour:e[2],fg:e[3]||T.AJ.white})]:t);case 4:case"end":return n.stop()}}),n)})))()}),[e.toString()]),s}(e.theme);(0,o.useEffect)((function(){if(0!==u.length&&!u.filter((function(n){return n.id===e.theme[1]})).length){var n=u[0],t=n.id,i=n.colour,r=n.fg,a=[e.theme[0],t,i,r||T.AJ.white];e.onUpdate("theme",a)}}),[u]);return(0,L.jsxs)(m.Z,{component:"div",disablePadding:!0,children:[(0,L.jsx)(D,{value:e.theme[0],onChange:function(n){return e.onUpdate("theme",[n.target.value].concat((0,a.Z)(e.theme.slice(1))))}}),(0,L.jsx)(j.Z,{variant:"middle"}),(0,L.jsxs)(g.Z,{children:[(0,L.jsx)(b.Z,{primary:s("colour.line")}),(0,L.jsx)(R.Z,{select:!0,style:{width:166},onChange:function(n){var t=n.target.value,i=u.filter((function(e){return e.id===t}))[0],r=i.colour,a=i.fg,s=[e.theme[0],t,r,a||T.AJ.white];e.onUpdate("theme",s)},value:e.theme[1],disabled:"other"===e.theme[0],children:u.map((function(e){return(0,L.jsx)(U.Z,{value:e.id,children:(0,L.jsx)("span",{className:d.menuItemSpan,style:{backgroundColor:e.colour,color:e.fg||T.AJ.white},children:(0,M.YL)(e.name,l.languages)})},e.id)}))})]})]})},$=function(e){var n=(0,c.$)().t,t=H(),i=(0,o.useState)(e.theme[2]),s=(0,r.Z)(i,2),l=s[0],d=s[1];(0,o.useEffect)((function(){return d(e.theme[2])}),[e.theme[2]]);return(0,L.jsxs)(m.Z,{component:"div",disablePadding:!0,children:[(0,L.jsxs)(g.Z,{children:[(0,L.jsx)(b.Z,{primary:n("colour.colour")}),(0,L.jsxs)("div",{className:t.buttonContainer,children:[(0,L.jsx)("input",{type:"color",id:"input-color",value:e.theme[2],onChange:function(n){var t=n.target.value;e.onUpdate("theme",[F.jk.Other,"other",t,e.theme[3]])},className:t.inputColour,style:{opacity:0}}),(0,L.jsx)("label",{htmlFor:"input-color",children:(0,L.jsx)(_.ZP,{title:n("colour.tooltip")||"","aria-label":"colour picker",children:(0,L.jsx)(x.Z,{className:t.button,style:{backgroundColor:e.theme[2],borderColor:e.theme[3]||T.AJ.white},variant:"contained",component:"span",children:" "})})})]}),(0,L.jsx)(R.Z,{error:!(null!==l&&void 0!==l&&l.match(/^#[0-9a-fA-F]{6}$/g)),style:{width:85},onChange:function(n){var t=n.target.value;if(null!==t.match(/^#[0-9a-fA-F]{0,6}$/))if(d(t),"other"!==e.theme[0])if(null!==t.match(/^#[0-9a-fA-f]{6}$/)){var i=[F.jk.Other,"other",t,e.theme[3]];e.onUpdate("theme",i)}else{var r=[F.jk.Other,"other"].concat((0,a.Z)(e.theme.slice(2)));e.onUpdate("theme",r)}else if(null!==t.match(/^#[0-9a-fA-F]{6}$/)){var s=e.theme.map((function(e,n){return 2===n?t:e}));e.onUpdate("theme",s)}},value:null===l||void 0===l?void 0:l.toUpperCase()})]}),(0,L.jsx)(j.Z,{variant:"middle"}),(0,L.jsxs)(g.Z,{children:[(0,L.jsx)(b.Z,{primary:n("colour.fg")}),(0,L.jsxs)(A.Z,{native:!0,style:{width:85},label:n("colour.fg"),onChange:function(n){var t=[F.jk.Other,"other",e.theme[2],n.target.value];e.onUpdate("theme",t)},value:e.theme[3]||T.AJ.white,children:[(0,L.jsx)("option",{value:"#fff",children:n("colour.fgWhite")}),(0,L.jsx)("option",{value:"#000",children:n("colour.fgBlack")})]})]})]})},D=function(e){var n=(0,c.$)(),t=n.t,i=n.i18n,r=H(),a=(0,o.useMemo)((function(){return F.nB.map((function(e){return(0,L.jsx)(U.Z,{value:e.id,children:(0,L.jsxs)("span",{className:r.cityItem,children:[(0,L.jsx)(P,{code:e.country}),(0,L.jsx)("span",{children:(0,M.YL)(e.name,i.languages)})]})},e.id)}))}),[]);return(0,L.jsxs)(g.Z,{children:[(0,L.jsx)(b.Z,{primary:t("colour.city")}),(0,L.jsx)(R.Z,{select:!0,style:{width:166},value:e.value,onChange:e.onChange,children:a})]})},W=(0,l.Z)((function(){return(0,d.Z)({img:{height:20,marginRight:"0.2rem"}})}));function P(e){var n=(0,c.$)().i18n,t=W(),i=[];return i=2===e.code.length?e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+127397).toString(16).toUpperCase()})):["1F3F4"].concat(e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+917536).toString(16).toUpperCase()})),"E007F"),[T.sp.ChineseCN,T.sp.ChineseSimp].includes(n.language)&&"TW"===e.code&&(i=["1F3F4"]),-1!==navigator.platform.indexOf("Win32")||-1!==navigator.platform.indexOf("Win64")?(0,L.jsx)("img",{src:"/RailMapGenerator"+"/images/flags/".concat(i.join("-"),".svg"),className:t.img,alt:"Flag of ".concat(e.code)}):(0,L.jsx)("span",{children:String.fromCodePoint.apply(String,(0,a.Z)(i.map((function(e){return parseInt(e,16)}))))})}var B=t(6169),E=(0,l.Z)((function(e){return(0,d.Z)({contentWrapper:(0,s.Z)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentLeft:{maxWidth:280},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",width:270},paperRoot:{maxWidth:250},listItemPaper:{justifyContent:"center"},iconRoot:{position:"absolute",color:e.palette.action.active},inputBaseRoot:{display:"block"},inputBaseInputZH:{textAlign:"center",fontSize:36,padding:0,paddingTop:6,height:45},inputBaseInputEN:{textAlign:"center",fontSize:18,padding:0,paddingBottom:6,height:"auto"},chipWrapper:{overflowX:"auto",display:"flex"},chipRoot:{borderRadius:4.5,height:32,lineHeight:"1rem",margin:2},chipLabel:{padding:"0 6px","& > span":{display:"block",textAlign:"center"},"& > span:first-child":{fontSize:"1rem"},"& > span:last-child":{lineHeight:"0.8rem"}}})})),G=function(e){var n=(0,c.$)().t,t=E();return(0,L.jsxs)(u.Z,{open:e.open,onClose:e.onClose,children:[(0,L.jsx)(h.Z,{children:n("colour.title")}),(0,L.jsxs)(p.Z,{className:t.contentWrapper,children:[(0,L.jsxs)(m.Z,{component:"div",disablePadding:!0,className:t.contentLeft,children:[(0,L.jsx)(z,{theme:e.theme,lineName:e.lineName,onUpdate:e.onUpdate}),(0,L.jsx)(j.Z,{}),(0,L.jsx)(J,{onUpdate:e.onUpdate})]}),(0,L.jsx)("div",{className:t.contentControl,children:(0,L.jsx)(q,{theme:e.theme,onUpdate:e.onUpdate})})]}),(0,L.jsx)(f.Z,{children:(0,L.jsx)(x.Z,{onClick:e.onClose,color:"primary",children:n("dialog.done")})})]})},z=function(e){var n=E(),t=function(n,t){var i=e.lineName.map((function(e,i){return i===t?n:e}));e.onUpdate("name",i)};return(0,L.jsx)(g.Z,{style:{justifyContent:"center"},children:(0,L.jsxs)(Z.Z,{className:n.paperRoot,style:{backgroundColor:e.theme[2]},children:[(0,L.jsx)(v.Z,{className:n.iconRoot,children:"edit"}),(0,L.jsx)(C.Z,{value:e.lineName[0],classes:{root:n.inputBaseRoot,input:n.inputBaseInputZH},style:{color:e.theme[3]||T.AJ.white},onChange:function(e){return t(e.target.value,0)},autoFocus:!0}),(0,L.jsx)(C.Z,{value:e.lineName[1],classes:{root:n.inputBaseRoot,input:n.inputBaseInputEN},style:{color:e.theme[3]||T.AJ.white},onChange:function(e){return t(e.target.value,1)}})]})})},J=function(e){var n=(0,c.$)().t,t=E(),i=(0,B.CG)((function(e){return e.param.theme})),r=(0,B.CG)((function(e){return e.param.line_name})),s=(0,B.CG)((function(e){return e.param.stn_list})),l=(0,o.useMemo)((function(){return new Set(Object.values(s).reduce((function(e,n){var t=n.transfer.info;return e.concat.apply(e,(0,a.Z)(t))}),[[].concat((0,a.Z)(i),(0,a.Z)(r))]).map((function(e){return JSON.stringify(e)})).reverse())}),[]),d=(0,o.useMemo)((function(){return(0,a.Z)(l).map((function(n,i){var r=JSON.parse(n),a=r.slice(4).map((function(e,n){return(0,L.jsx)("span",{style:{color:r[3]},children:e},n)}));return(0,L.jsx)(y.Z,{onClick:function(){e.onUpdate("theme",r.slice(0,4)),e.onUpdate("name",r.slice(4))},style:{backgroundColor:r[2]},className:t.chipRoot,classes:{label:t.chipLabel},label:a},i)}))}),[]);return(0,L.jsx)(g.Z,{children:(0,L.jsx)(b.Z,{primary:n("colour.recent"),secondary:d,secondaryTypographyProps:{component:"div"},classes:{secondary:t.chipWrapper}})})},q=function(e){var n=(0,c.$)().t,t=(0,o.useState)("other"===e.theme[0]?1:0),a=(0,r.Z)(t,2),s=a[0],l=a[1],d=(0,L.jsxs)(k.Z,{value:s,indicatorColor:"primary",textColor:"primary",onChange:function(e,n){return l(n)},variant:"fullWidth",scrollButtons:"off",children:[(0,L.jsx)(w.Z,{label:n("colour.palette"),style:{minWidth:"unset"}}),(0,L.jsx)(w.Z,{label:n("colour.custom"),style:{minWidth:"unset"}})]}),u=function(n){switch(n){case 0:return(0,L.jsx)(O,(0,i.Z)({},e));case 1:return(0,L.jsx)($,(0,i.Z)({},e));default:return(0,L.jsx)(L.Fragment,{})}}(s);return(0,L.jsxs)(L.Fragment,{children:[d,u]})},Y=G},8225:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var i=t(2982),r=t(885),a=t(2791),s=t(2020),o=t(2067),c=t(8096),l=t(159),d=t(4212),u=t(2734),h=t(7025),p=t(9418),m=t(7447),j=t(6513),f=t(8596),x=t(2288),g=t(908),Z=t(3594),v=t(5159),C=t(4026),y=t(269),b=t(1969),k=t(9403),w=t(8528),I=t(9505),N=t(9038),S=t(184),R=(0,f.Z)((function(){return(0,x.Z)({listItemIcon:{width:"1em",fontSize:"1.5rem",textAlign:"center"}})})),U=function(e){var n,t=(0,s.$)().t,i=R();return a.useMemo((function(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(c.Z,{children:[(0,S.jsx)(b.Z,{children:(0,S.jsx)("span",{className:i.listItemIcon,children:"\u6587"})}),(0,S.jsx)(N.Z,{style:{width:"100%"},variant:"outlined",label:t("stations.edit.name.nameZH"),onChange:e.onUpdate(0),value:e.name[0],autoFocus:!0})]}),(0,S.jsxs)(c.Z,{children:[(0,S.jsx)(b.Z,{children:(0,S.jsx)("span",{className:i.listItemIcon,children:"A"})}),(0,S.jsx)(N.Z,{style:{width:"100%"},variant:"outlined",label:t("stations.edit.name.nameEN"),onChange:e.onUpdate(1),value:e.name[1],helperText:t("stations.edit.name.nameENHelper")})]})]})}),[(null===(n=e.name)||void 0===n?void 0:n.toString())||""])},_=t(6169),A=t(713),M=t(533),F=function(e){var n=e.stnId,t=(0,s.$)().t,f=(0,_.TL)(),x=(0,_.CG)((function(e){return e.param.style})),g=(0,_.CG)((function(e){return e.param.theme})),Z=(0,_.CG)((function(e){return e.param.stn_list[n]})).transfer,v=a.useState(!1),C=(0,r.Z)(v,2),y=C[0],b=C[1],k=a.useState(!1),w=(0,r.Z)(k,2),I=w[0],N=w[1],R=function(e){var t=[].concat((0,i.Z)(g),["\u8f49\u7dab","Line"]);f((0,M.Ui)(n,e,t))},U=function(e,t){f((0,M.SA)(n,e,t))};return(0,S.jsxs)(o.Z,{children:[(0,S.jsxs)(c.Z,{children:[(0,S.jsx)(l.Z,{children:(0,S.jsx)("h3",{style:{margin:0},children:t("stations.edit.interchange.within")})}),(0,S.jsx)(d.Z,{children:(0,S.jsx)(u.ZP,{title:t("stations.edit.interchange.add")||"","aria-label":"add",children:(0,S.jsx)(h.Z,{onClick:function(){return R(0)},children:(0,S.jsx)(p.Z,{children:"add_circle"})})})})]}),(0,S.jsx)(c.Z,{children:(0,S.jsx)(L,{stnId:n,setIndex:0,onDelete:function(e){return U(0,e)}})}),[A.RM.MTR,A.RM.SHMetro].includes(x)&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(m.Z,{}),(0,S.jsxs)(c.Z,{children:[(0,S.jsx)(l.Z,{children:(0,S.jsx)("h3",{style:{margin:0},children:t("stations.edit.interchange.osi")})}),(0,S.jsxs)(d.Z,{children:[[A.RM.MTR].includes(x)&&(0,S.jsxs)(a.Fragment,{children:[(0,S.jsx)(j.Z,{variant:"outlined",color:"primary",style:{lineHeight:"1rem",whiteSpace:"pre",marginRight:5},onClick:function(){return b(!0)},children:Z.osi_names[0]?Z.osi_names[0].join("\r\n"):"\u8eca\u7ad9\u540d\r\nStn Name"}),(0,S.jsx)(H,{open:y,stnId:n,setIndex:0,onClose:function(){return b(!1)}})]}),(0,S.jsx)(u.ZP,{title:t("stations.edit.interchange.add")||"","aria-label":"add",children:(0,S.jsx)(h.Z,{onClick:function(){return R(1)},children:(0,S.jsx)(p.Z,{children:"add_circle"})})})]})]}),(0,S.jsx)(c.Z,{children:(0,S.jsx)(L,{stnId:n,setIndex:1,onDelete:function(e){return U(1,e)}})})]}),[A.RM.SHMetro].includes(x||"")&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(m.Z,{}),(0,S.jsxs)(c.Z,{children:[(0,S.jsx)(l.Z,{children:(0,S.jsx)("h3",{style:{margin:0},children:t("stations.edit.interchange.osysi")})}),(0,S.jsxs)(d.Z,{children:[[A.RM.MTR].includes(x)&&(0,S.jsxs)(a.Fragment,{children:[(0,S.jsx)(j.Z,{variant:"outlined",color:"primary",style:{lineHeight:"1rem",whiteSpace:"pre",marginRight:5},onClick:function(){return N(!0)},children:Z.osi_names[1]?Z.osi_names[1].join("\r\n"):"\u8eca\u7ad9\u540d\r\nStn Name"}),(0,S.jsx)(H,{open:I,stnId:n,setIndex:1,onClose:function(){return N(!1)}})]}),(0,S.jsx)(u.ZP,{title:t("stations.edit.interchange.add")||"","aria-label":"add",children:(0,S.jsx)(h.Z,{onClick:function(){return R(2)},children:(0,S.jsx)(p.Z,{children:"add_circle"})})})]})]}),(0,S.jsx)(c.Z,{children:(0,S.jsx)(L,{stnId:n,setIndex:2,onDelete:function(e){return U(2,e)}})})]}),[A.RM.MTR,A.RM.SHMetro].includes(x)&&(0,S.jsx)(c.Z,{children:(0,S.jsx)("span",{children:t("stations.edit.interchange.note")})}),x===A.RM.MTR&&(0,S.jsx)(O,{stnId:e.stnId})]})},T=(0,f.Z)((function(){return(0,x.Z)({intChip:{borderRadius:4.5,height:40,lineHeight:"1rem",margin:2},intChipText:{display:"block",textAlign:"center"},intChipTextZH:{fontSize:18,lineHeight:"1.2rem"},intChipTextEN:{fontSize:".75rem",lineHeight:".9rem",whiteSpace:"pre-wrap"},intChipLabel:{paddingLeft:6,paddingRight:6},intChipDeleteIcon:{marginLeft:-3}})})),L=function(e){var n=e.stnId,t=e.setIndex,i=e.onDelete,s=T(),o=(0,_.TL)(),c=(0,_.CG)((function(e){return e.param.stn_list[n].transfer.info[t]})),l=a.useState(-1),d=(0,r.Z)(l,2),u=d[0],h=d[1],p=a.useState(!1),m=(0,r.Z)(p,2),j=m[0],f=m[1],x=null===c||void 0===c?void 0:c.map((function(e,n){var t=(0,S.jsxs)("span",{style:{color:e[3]},children:[(0,S.jsx)("span",{className:"".concat(s.intChipText," ").concat(s.intChipTextZH),children:e[4]}),(0,S.jsx)("span",{className:"".concat(s.intChipText," ").concat(s.intChipTextEN),children:e[5]})]});return(0,S.jsx)(g.Z,{label:t,className:s.intChip,classes:{label:s.intChipLabel,deleteIcon:s.intChipDeleteIcon},style:{backgroundColor:e[2]},onDelete:function(){return i(n)},onClick:function(){return h(n),void f(!0)}},n)}));return(0,S.jsxs)("div",{children:[x,(0,S.jsx)(I.Z,{open:j,theme:void 0===(null===c||void 0===c?void 0:c[u])?[]:[c[u][0],c[u][1],c[u][2],c[u][3]],lineName:void 0===(null===c||void 0===c?void 0:c[u])?["",""]:[c[u][4],c[u][5]],onUpdate:function(e,i){if("theme"===e){var r=i.concat(Array(2));o((0,M.vM)(n,t,u,r))}if("name"===e){var a=Array(4).concat(i);o((0,M.vM)(n,t,u,a))}},onClose:function(){return f(!1)}})]})},H=function(e){var n=e.open,t=e.stnId,i=e.setIndex,r=e.onClose,a=(0,s.$)().t,c=(0,_.TL)(),l=(0,_.CG)((function(e){return e.param.stn_list[t].transfer.osi_names[i]}))||["\u8eca\u7ad9\u540d","Stn Name"];return(0,S.jsxs)(Z.Z,{open:n,onClose:r,children:[(0,S.jsx)(v.Z,{children:a("stations.edit.interchange.osiName")}),(0,S.jsx)(C.Z,{dividers:!0,children:(0,S.jsx)(o.Z,{children:(0,S.jsx)(U,{onUpdate:function(e){return function(n){var r=n.target.value,a=l.map((function(n,t){return t===e?r:n}));c((0,M.fr)(t,i,a))}},name:l})})}),(0,S.jsx)(y.Z,{children:(0,S.jsx)(j.Z,{onClick:r,color:"primary",autoFocus:!0,children:a("dialog.done")})})]})},O=function(e){var n=e.stnId,t=(0,s.$)().t,i=(0,_.TL)(),r=(0,_.CG)((function(e){return e.param.stn_list[n]})).transfer;return a.useMemo((function(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(m.Z,{}),(0,S.jsx)(c.Z,{children:(0,S.jsx)(l.Z,{children:(0,S.jsx)("h3",{style:{margin:0},children:t("stations.edit.interchange.settings")})})}),(0,S.jsxs)(c.Z,{children:[(0,S.jsx)(b.Z,{children:(0,S.jsx)(p.Z,{children:"format_textdirection_l_to_r"})}),(0,S.jsx)(l.Z,{primary:t("stations.edit.interchange.tickDirec.label")}),(0,S.jsx)(d.Z,{children:(0,S.jsx)(k.Z,{native:!0,value:r.tick_direc,onChange:function(e){var t=e.target.value;t!==A.wA.left&&t!==A.wA.right||i((0,M.bC)(n,t))},children:Object.values(A.wA).map((function(e){return(0,S.jsx)("option",{value:e,children:t("stations.edit.interchange.tickDirec."+e)},e)}))})})]}),(0,S.jsxs)(c.Z,{children:[(0,S.jsx)(b.Z,{children:(0,S.jsx)(p.Z,{children:"attach_money"})}),(0,S.jsx)(l.Z,{primary:t("stations.edit.interchange.paidArea")}),(0,S.jsx)(d.Z,{children:(0,S.jsx)(w.Z,{color:"primary",edge:"end",onChange:function(e,t){i((0,M.lL)(n,t))},checked:r.paid_area})})]})]})}),[n,t,i,r.paid_area,r.tick_direc])}}}]);
//# sourceMappingURL=panelStationsInterchange.78cd981e.chunk.js.map