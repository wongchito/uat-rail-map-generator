(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[96],{150:function(e,t,n){"use strict";n.r(t);var i=n(12),c=n(11),a=n(5),r=n.n(a),o=n(14),s=n(3),l=n(81),d=n(0),j=Object(s.makeStyles)((function(){return Object(s.createStyles)({listItemIcon:{width:"1em",fontSize:"1.5rem",textAlign:"center"}})})),u=function(e){var t,n=Object(o.useTranslation)().t,i=j();return a.useMemo((function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(s.ListItem,{children:[Object(d.jsx)(s.ListItemIcon,{children:Object(d.jsx)("span",{className:i.listItemIcon,children:"\u6587"})}),Object(d.jsx)(s.TextField,{style:{width:"100%"},variant:"outlined",label:n("stations.edit.name.nameZH"),onChange:e.onUpdate(0),value:e.name[0],autoFocus:!0})]}),Object(d.jsxs)(s.ListItem,{children:[Object(d.jsx)(s.ListItemIcon,{children:Object(d.jsx)("span",{className:i.listItemIcon,children:"A"})}),Object(d.jsx)(s.TextField,{style:{width:"100%"},variant:"outlined",label:n("stations.edit.name.nameEN"),onChange:e.onUpdate(1),value:e.name[1],helperText:n("stations.edit.name.nameENHelper")})]})]})}),[(null===(t=e.name)||void 0===t?void 0:t.toString())||""])},h=n(8),b=n(2),m=n(7),p=(t.default=function(e){var t=e.stnId,n=Object(o.useTranslation)().t,a=Object(h.b)(),l=Object(h.c)((function(e){return e.app.rmgStyle})),j=Object(h.c)((function(e){return e.param.theme})),u=Object(h.c)((function(e){return e.param.stn_list[t]})).transfer,p=r.a.useState(!1),f=Object(c.a)(p,2),v=f[0],I=f[1],y=r.a.useState(!1),C=Object(c.a)(y,2),k=C[0],S=C[1],L=function(e){var n=[].concat(Object(i.a)(j),["\u8f49\u7dab","Line"]);a(Object(m.v)(t,e,n))},T=function(e,n){a(Object(m.B)(t,e,n))};return Object(d.jsxs)(s.List,{children:[Object(d.jsxs)(s.ListItem,{children:[Object(d.jsx)(s.ListItemText,{children:Object(d.jsx)("h3",{style:{margin:0},children:n("stations.edit.interchange.within")})}),Object(d.jsx)(s.ListItemSecondaryAction,{children:Object(d.jsx)(s.Tooltip,{title:n("stations.edit.interchange.add"),"aria-label":"add",children:Object(d.jsx)(s.IconButton,{onClick:function(){return L(0)},children:Object(d.jsx)(s.Icon,{children:"add_circle"})})})})]}),Object(d.jsx)(s.ListItem,{children:Object(d.jsx)(O,{stnId:t,setIndex:0,onDelete:function(e){return T(0,e)}})}),[b.k.MTR,b.k.SHMetro].includes(l)&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.Divider,{}),Object(d.jsxs)(s.ListItem,{children:[Object(d.jsx)(s.ListItemText,{children:Object(d.jsx)("h3",{style:{margin:0},children:n("stations.edit.interchange.osi")})}),Object(d.jsxs)(s.ListItemSecondaryAction,{children:[[b.k.MTR].includes(l)&&Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(s.Button,{variant:"outlined",color:"primary",style:{lineHeight:"1rem",whiteSpace:"pre",marginRight:5},onClick:function(){return I(!0)},children:u.osi_names[0]?u.osi_names[0].join("\r\n"):"\u8eca\u7ad9\u540d\r\nStn Name"}),Object(d.jsx)(x,{open:v,stnId:t,setIndex:0,onClose:function(){return I(!1)}})]}),Object(d.jsx)(s.Tooltip,{title:n("stations.edit.interchange.add"),"aria-label":"add",children:Object(d.jsx)(s.IconButton,{onClick:function(){return L(1)},children:Object(d.jsx)(s.Icon,{children:"add_circle"})})})]})]}),Object(d.jsx)(s.ListItem,{children:Object(d.jsx)(O,{stnId:t,setIndex:1,onDelete:function(e){return T(1,e)}})})]}),[b.k.SHMetro].includes(l||"")&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.Divider,{}),Object(d.jsxs)(s.ListItem,{children:[Object(d.jsx)(s.ListItemText,{children:Object(d.jsx)("h3",{style:{margin:0},children:n("stations.edit.interchange.osysi")})}),Object(d.jsxs)(s.ListItemSecondaryAction,{children:[[b.k.MTR].includes(l)&&Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(s.Button,{variant:"outlined",color:"primary",style:{lineHeight:"1rem",whiteSpace:"pre",marginRight:5},onClick:function(){return S(!0)},children:u.osi_names[1]?u.osi_names[1].join("\r\n"):"\u8eca\u7ad9\u540d\r\nStn Name"}),Object(d.jsx)(x,{open:k,stnId:t,setIndex:1,onClose:function(){return S(!1)}})]}),Object(d.jsx)(s.Tooltip,{title:n("stations.edit.interchange.add"),"aria-label":"add",children:Object(d.jsx)(s.IconButton,{onClick:function(){return L(2)},children:Object(d.jsx)(s.Icon,{children:"add_circle"})})})]})]}),Object(d.jsx)(s.ListItem,{children:Object(d.jsx)(O,{stnId:t,setIndex:2,onDelete:function(e){return T(2,e)}})})]}),[b.k.MTR,b.k.SHMetro].includes(l)&&Object(d.jsx)(s.ListItem,{children:Object(d.jsx)("span",{children:n("stations.edit.interchange.note")})}),l===b.k.MTR&&Object(d.jsx)(g,{stnId:e.stnId})]})},Object(s.makeStyles)((function(){return Object(s.createStyles)({intChip:{borderRadius:4.5,height:40,lineHeight:"1rem",margin:2},intChipText:{display:"block",textAlign:"center"},intChipTextZH:{fontSize:18,lineHeight:"1.2rem"},intChipTextEN:{fontSize:".75rem",lineHeight:".9rem",whiteSpace:"pre-wrap"},intChipLabel:{paddingLeft:6,paddingRight:6},intChipDeleteIcon:{marginLeft:-3}})}))),O=function(e){var t=e.stnId,n=e.setIndex,i=e.onDelete,a=p(),o=Object(h.b)(),j=Object(h.c)((function(e){return e.param.stn_list[t].transfer.info[n]})),u=r.a.useState(-1),b=Object(c.a)(u,2),O=b[0],x=b[1],g=r.a.useState(!1),f=Object(c.a)(g,2),v=f[0],I=f[1],y=null===j||void 0===j?void 0:j.map((function(e,t){var n=Object(d.jsxs)("span",{style:{color:e[3]},children:[Object(d.jsx)("span",{className:"".concat(a.intChipText," ").concat(a.intChipTextZH),children:e[4]}),Object(d.jsx)("span",{className:"".concat(a.intChipText," ").concat(a.intChipTextEN),children:e[5]})]});return Object(d.jsx)(s.Chip,{label:n,className:a.intChip,classes:{label:a.intChipLabel,deleteIcon:a.intChipDeleteIcon},style:{backgroundColor:e[2]},onDelete:function(){return i(t)},onClick:function(){return x(t),void I(!0)}},t)}));return Object(d.jsxs)("div",{children:[y,Object(d.jsx)(l.a,{open:v,theme:void 0===(null===j||void 0===j?void 0:j[O])?[]:[j[O][0],j[O][1],j[O][2],j[O][3]],lineName:void 0===(null===j||void 0===j?void 0:j[O])?["",""]:[j[O][4],j[O][5]],onUpdate:function(e,i){if("theme"===e){var c=i.concat(Array(2));o(Object(m.Y)(t,n,O,c))}if("name"===e){var a=Array(4).concat(i);o(Object(m.Y)(t,n,O,a))}},onClose:function(){return I(!1)}})]})},x=function(e){var t=e.open,n=e.stnId,i=e.setIndex,c=e.onClose,a=Object(o.useTranslation)().t,r=Object(h.b)(),l=Object(h.c)((function(e){return e.param.stn_list[n].transfer.osi_names[i]}))||["\u8eca\u7ad9\u540d","Stn Name"];return Object(d.jsxs)(s.Dialog,{open:t,onClose:c,children:[Object(d.jsx)(s.DialogTitle,{children:a("stations.edit.interchange.osiName")}),Object(d.jsx)(s.DialogContent,{dividers:!0,children:Object(d.jsx)(s.List,{children:Object(d.jsx)(u,{onUpdate:function(e){return function(t){var c=t.target.value,a=l.map((function(t,n){return n===e?c:t}));r(Object(m.fb)(n,i,a))}},name:l})})}),Object(d.jsx)(s.DialogActions,{children:Object(d.jsx)(s.Button,{onClick:c,color:"primary",autoFocus:!0,children:a("dialog.done")})})]})},g=function(e){var t=e.stnId,n=Object(o.useTranslation)().t,i=Object(h.b)(),c=Object(h.c)((function(e){return e.param.stn_list[t]})).transfer;return r.a.useMemo((function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.Divider,{}),Object(d.jsx)(s.ListItem,{children:Object(d.jsx)(s.ListItemText,{children:Object(d.jsx)("h3",{style:{margin:0},children:n("stations.edit.interchange.settings")})})}),Object(d.jsxs)(s.ListItem,{children:[Object(d.jsx)(s.ListItemIcon,{children:Object(d.jsx)(s.Icon,{children:"format_textdirection_l_to_r"})}),Object(d.jsx)(s.ListItemText,{primary:n("stations.edit.interchange.tickDirec.label")}),Object(d.jsx)(s.ListItemSecondaryAction,{children:Object(d.jsx)(s.Select,{native:!0,value:c.tick_direc,onChange:function(e){var n=e.target.value;n!==b.m.left&&n!==b.m.right||i(Object(m.ib)(t,n))},children:Object.values(b.m).map((function(e){return Object(d.jsx)("option",{value:e,children:n("stations.edit.interchange.tickDirec."+e)},e)}))})})]}),Object(d.jsxs)(s.ListItem,{children:[Object(d.jsx)(s.ListItemIcon,{children:Object(d.jsx)(s.Icon,{children:"attach_money"})}),Object(d.jsx)(s.ListItemText,{primary:n("stations.edit.interchange.paidArea")}),Object(d.jsx)(s.ListItemSecondaryAction,{children:Object(d.jsx)(s.Switch,{color:"primary",edge:"end",onChange:function(e,n){i(Object(m.gb)(t,n))},checked:c.paid_area})})]})]})}),[t,n,i,c.paid_area,c.tick_direc])}},79:function(e,t,n){var i={"./README.md":[83,79],"./barcelona":[39,1],"./barcelona.ts":[39,1],"./beijing":[40,12],"./beijing.ts":[40,12],"./changsha":[41,23],"./changsha.ts":[41,23],"./chengdu":[42,34],"./chengdu.ts":[42,34],"./chongqing":[43,36],"./chongqing.ts":[43,36],"./dongguan":[44,2],"./dongguan.ts":[44,2],"./edinburgh":[45,3],"./edinburgh.ts":[45,3],"./foshan":[46,4],"./foshan.ts":[46,4],"./glasgow":[47,5],"./glasgow.ts":[47,5],"./guangzhou":[48,6],"./guangzhou.ts":[48,6],"./hangzhou":[49,7],"./hangzhou.ts":[49,7],"./hongkong":[50,8],"./hongkong.ts":[50,8],"./kansai":[51,9],"./kansai.ts":[51,9],"./kaohsiung":[52,10],"./kaohsiung.ts":[52,10],"./london":[53,11],"./london.ts":[53,11],"./macao":[54,13],"./macao.ts":[54,13],"./madrid":[55,14],"./madrid.ts":[55,14],"./nanjing":[56,15],"./nanjing.ts":[56,15],"./newtaipei":[57,16],"./newtaipei.ts":[57,16],"./osaka":[58,17],"./osaka.ts":[58,17],"./oslo":[59,18],"./oslo.ts":[59,18],"./other":[60,19],"./other.ts":[60,19],"./paris":[61,20],"./paris.ts":[61,20],"./qingdao":[62,21],"./qingdao.ts":[62,21],"./sanfrancisco":[63,22],"./sanfrancisco.ts":[63,22],"./seoul":[64,24],"./seoul.ts":[64,24],"./shanghai":[65,25],"./shanghai.ts":[65,25],"./shenzhen":[66,26],"./shenzhen.ts":[66,26],"./singapore":[67,27],"./singapore.ts":[67,27],"./stockholm":[68,28],"./stockholm.ts":[68,28],"./taipei":[69,29],"./taipei.ts":[69,29],"./tianjin":[70,30],"./tianjin.ts":[70,30],"./tokyo":[71,31],"./tokyo.ts":[71,31],"./toronto":[72,32],"./toronto.ts":[72,32],"./tyneandwear":[73,33],"./tyneandwear.ts":[73,33],"./xian":[74,35],"./xian.ts":[74,35]};function c(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(i)},c.id=79,e.exports=c},81:function(e,t,n){"use strict";var i=n(1),c=n(11),a=n(12),r=n(4),o=n(5),s=n.n(o),l=n(14),d=n(3),j=n(6),u=n.n(j),h=n(10),b=n(22),m=n(25),p=n(2),O=n(0),x=Object(d.makeStyles)((function(){return Object(d.createStyles)({cityItem:{display:"flex",flexDirection:"row",alignItems:"center"},menuItemSpan:{padding:"0 .3rem"},button:{borderRadius:"50%",height:24,width:24,minWidth:0,marginRight:8,padding:0},inputColour:{position:"absolute",width:0,height:0,left:27,top:32},buttonContainer:{display:"flex",flexShrink:1}})})),g=function(e){var t=Object(l.useTranslation)(),r=t.t,j=t.i18n,g=x(),f=function(e){var t=s.a.useState([]),a=Object(c.a)(t,2),r=a[0],l=a[1],d=e[0]?n(79)("./".concat(e[0])).then((function(e){return e.default})):Promise.resolve([]);return Object(o.useEffect)((function(){"undefined"!==typeof e[0]&&Object(h.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d;case 2:n=t.sent,l(e[0]===m.a.Other?[Object(i.a)(Object(i.a)({},n[0]),{},{colour:e[2],fg:e[3]||p.h.white})]:n);case 4:case"end":return t.stop()}}),t)})))()}),[e.toString()]),r}(e.theme);Object(o.useEffect)((function(){if(0!==f.length&&!f.filter((function(t){return t.id===e.theme[1]})).length){var t=f[0],n=t.id,i=t.colour,c=t.fg,a=[e.theme[0],n,i,c||p.h.white];e.onUpdate("theme",a)}}),[f]);return Object(O.jsxs)(d.List,{component:"div",disablePadding:!0,children:[Object(O.jsx)(v,{value:e.theme[0],onChange:function(t){return e.onUpdate("theme",[t.target.value].concat(Object(a.a)(e.theme.slice(1))))}}),Object(O.jsx)(d.Divider,{variant:"middle"}),Object(O.jsxs)(d.ListItem,{children:[Object(O.jsx)(d.ListItemText,{primary:r("colour.line")}),Object(O.jsx)(d.TextField,{select:!0,style:{width:166},onChange:function(t){var n=t.target.value,i=f.filter((function(e){return e.id===n}))[0],c=i.colour,a=i.fg,r=[e.theme[0],n,c,a||p.h.white];e.onUpdate("theme",r)},value:e.theme[1],disabled:"other"===e.theme[0],children:f.map((function(e){return Object(O.jsx)(d.MenuItem,{value:e.id,children:Object(O.jsx)("span",{className:g.menuItemSpan,style:{backgroundColor:e.colour,color:e.fg||p.h.white},children:Object(b.b)(e.name,j.languages)})},e.id)}))})]})]})},f=function(e){var t=Object(l.useTranslation)().t,n=x(),i=Object(o.useState)(e.theme[2]),r=Object(c.a)(i,2),s=r[0],j=r[1];Object(o.useEffect)((function(){return j(e.theme[2])}),[e.theme[2]]);return Object(O.jsxs)(d.List,{component:"div",disablePadding:!0,children:[Object(O.jsxs)(d.ListItem,{children:[Object(O.jsx)(d.ListItemText,{primary:t("colour.colour")}),Object(O.jsxs)("div",{className:n.buttonContainer,children:[Object(O.jsx)("input",{type:"color",id:"input-color",value:e.theme[2],onChange:function(t){var n=t.target.value;e.onUpdate("theme",[m.a.Other,"other",n,e.theme[3]])},className:n.inputColour,style:{opacity:0}}),Object(O.jsx)("label",{htmlFor:"input-color",children:Object(O.jsx)(d.Tooltip,{title:t("colour.tooltip"),"aria-label":"colour picker",children:Object(O.jsx)(d.Button,{className:n.button,style:{backgroundColor:e.theme[2],borderColor:e.theme[3]||p.h.white},variant:"contained",component:"span",children:" "})})})]}),Object(O.jsx)(d.TextField,{error:!(null===s||void 0===s?void 0:s.match(/^#[0-9a-fA-F]{6}$/g)),style:{width:85},onChange:function(t){var n=t.target.value;if(null!==n.match(/^#[0-9a-fA-F]{0,6}$/))if(j(n),"other"!==e.theme[0])if(null!==n.match(/^#[0-9a-fA-f]{6}$/)){var i=[m.a.Other,"other",n,e.theme[3]];e.onUpdate("theme",i)}else{var c=[m.a.Other,"other"].concat(Object(a.a)(e.theme.slice(2)));e.onUpdate("theme",c)}else if(null!==n.match(/^#[0-9a-fA-F]{6}$/)){var r=e.theme.map((function(e,t){return 2===t?n:e}));e.onUpdate("theme",r)}},value:null===s||void 0===s?void 0:s.toUpperCase()})]}),Object(O.jsx)(d.Divider,{variant:"middle"}),Object(O.jsxs)(d.ListItem,{children:[Object(O.jsx)(d.ListItemText,{primary:t("colour.fg")}),Object(O.jsxs)(d.Select,{native:!0,style:{width:85},label:t("colour.fg"),onChange:function(t){var n=[m.a.Other,"other",e.theme[2],t.target.value];e.onUpdate("theme",n)},value:e.theme[3]||p.h.white,children:[Object(O.jsx)("option",{value:"#fff",children:t("colour.fgWhite")}),Object(O.jsx)("option",{value:"#000",children:t("colour.fgBlack")})]})]})]})},v=function(e){var t=Object(l.useTranslation)(),n=t.t,i=t.i18n,c=x(),a=Object(o.useMemo)((function(){return m.b.map((function(e){return Object(O.jsx)(d.MenuItem,{value:e.id,children:Object(O.jsxs)("span",{className:c.cityItem,children:[Object(O.jsx)(y,{code:e.country}),Object(O.jsx)("span",{children:Object(b.b)(e.name,i.languages)})]})},e.id)}))}),[]);return Object(O.jsxs)(d.ListItem,{children:[Object(O.jsx)(d.ListItemText,{primary:n("colour.city")}),Object(O.jsx)(d.TextField,{select:!0,style:{width:166},value:e.value,onChange:e.onChange,children:a})]})},I=Object(d.makeStyles)((function(){return Object(d.createStyles)({img:{height:20,marginRight:"0.2rem"}})}));function y(e){var t=Object(l.useTranslation)().i18n,n=I(),i=[];return i=2===e.code.length?e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+127397).toString(16).toUpperCase()})):["1F3F4"].concat(e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+917536).toString(16).toUpperCase()})),"E007F"),[p.f.ChineseCN,p.f.ChineseSimp].includes(t.language)&&"TW"===e.code&&(i=["1F3F4"]),-1!==navigator.platform.indexOf("Win32")||-1!==navigator.platform.indexOf("Win64")?Object(O.jsx)("img",{src:"/uat-rail-map-generator"+"/images/flags/".concat(i.join("-"),".svg"),className:n.img,alt:"Flag of ".concat(e.code)}):Object(O.jsx)("span",{children:String.fromCodePoint.apply(String,Object(a.a)(i.map((function(e){return parseInt(e,16)}))))})}var C=n(8),k=Object(d.makeStyles)((function(e){return Object(d.createStyles)({contentWrapper:Object(r.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentLeft:{maxWidth:280},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",width:270},paperRoot:{maxWidth:250},listItemPaper:{justifyContent:"center"},iconRoot:{position:"absolute",color:e.palette.action.active},inputBaseRoot:{display:"block"},inputBaseInputZH:{textAlign:"center",fontSize:36,padding:0,paddingTop:6,height:45},inputBaseInputEN:{textAlign:"center",fontSize:18,padding:0,paddingBottom:6,height:"auto"},chipWrapper:{overflowX:"auto",display:"flex"},chipRoot:{borderRadius:4.5,height:32,lineHeight:"1rem",margin:2},chipLabel:{padding:"0 6px","& > span":{display:"block",textAlign:"center"},"& > span:first-child":{fontSize:"1rem"},"& > span:last-child":{lineHeight:"0.8rem"}}})})),S=function(e){var t=Object(l.useTranslation)().t,n=k();return Object(O.jsxs)(d.Dialog,{open:e.open,onClose:e.onClose,children:[Object(O.jsx)(d.DialogTitle,{children:t("colour.title")}),Object(O.jsxs)(d.DialogContent,{className:n.contentWrapper,children:[Object(O.jsxs)(d.List,{component:"div",disablePadding:!0,className:n.contentLeft,children:[Object(O.jsx)(L,{theme:e.theme,lineName:e.lineName,onUpdate:e.onUpdate}),Object(O.jsx)(d.Divider,{}),Object(O.jsx)(T,{onUpdate:e.onUpdate})]}),Object(O.jsx)("div",{className:n.contentControl,children:Object(O.jsx)(w,{theme:e.theme,onUpdate:e.onUpdate})})]}),Object(O.jsx)(d.DialogActions,{children:Object(O.jsx)(d.Button,{onClick:e.onClose,color:"primary",children:t("dialog.done")})})]})},L=function(e){var t=k(),n=function(t,n){var i=e.lineName.map((function(e,i){return i===n?t:e}));e.onUpdate("name",i)};return Object(O.jsx)(d.ListItem,{style:{justifyContent:"center"},children:Object(O.jsxs)(d.Paper,{className:t.paperRoot,style:{backgroundColor:e.theme[2]},children:[Object(O.jsx)(d.Icon,{className:t.iconRoot,children:"edit"}),Object(O.jsx)(d.InputBase,{value:e.lineName[0],classes:{root:t.inputBaseRoot,input:t.inputBaseInputZH},style:{color:e.theme[3]||p.h.white},onChange:function(e){return n(e.target.value,0)},autoFocus:!0}),Object(O.jsx)(d.InputBase,{value:e.lineName[1],classes:{root:t.inputBaseRoot,input:t.inputBaseInputEN},style:{color:e.theme[3]||p.h.white},onChange:function(e){return n(e.target.value,1)}})]})})},T=function(e){var t=Object(l.useTranslation)().t,n=k(),i=Object(C.c)((function(e){return e.param.theme})),c=Object(C.c)((function(e){return e.param.line_name})),r=Object(C.c)((function(e){return e.param.stn_list})),s=Object(o.useMemo)((function(){return new Set(Object.values(r).reduce((function(e,t){var n=t.transfer.info;return e.concat.apply(e,Object(a.a)(n))}),[[].concat(Object(a.a)(i),Object(a.a)(c))]).map((function(e){return JSON.stringify(e)})).reverse())}),[]),j=Object(o.useMemo)((function(){return Object(a.a)(s).map((function(t,i){var c=JSON.parse(t),a=c.slice(4).map((function(e,t){return Object(O.jsx)("span",{style:{color:c[3]},children:e},t)}));return Object(O.jsx)(d.Chip,{onClick:function(){e.onUpdate("theme",c.slice(0,4)),e.onUpdate("name",c.slice(4))},style:{backgroundColor:c[2]},className:n.chipRoot,classes:{label:n.chipLabel},label:a},i)}))}),[]);return Object(O.jsx)(d.ListItem,{children:Object(O.jsx)(d.ListItemText,{primary:t("colour.recent"),secondary:j,secondaryTypographyProps:{component:"div"},classes:{secondary:n.chipWrapper}})})},w=function(e){var t=Object(l.useTranslation)().t,n=Object(o.useState)("other"===e.theme[0]?1:0),a=Object(c.a)(n,2),r=a[0],s=a[1],j=Object(O.jsxs)(d.Tabs,{value:r,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return s(t)},variant:"fullWidth",scrollButtons:"off",children:[Object(O.jsx)(d.Tab,{label:t("colour.palette"),style:{minWidth:"unset"}}),Object(O.jsx)(d.Tab,{label:t("colour.custom"),style:{minWidth:"unset"}})]}),u=function(t){switch(t){case 0:return Object(O.jsx)(g,Object(i.a)({},e));case 1:return Object(O.jsx)(f,Object(i.a)({},e));default:return Object(O.jsx)(O.Fragment,{})}}(r);return Object(O.jsxs)(O.Fragment,{children:[j,u]})};t.a=S}}]);
//# sourceMappingURL=panelStationsInterchange.1f812e46.chunk.js.map