(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[92],{145:function(e,t,n){"use strict";n.r(t);var i=n(13),c=n(10),a=n(4),s=n.n(a),o=n(12),r=n(5),l=n(21),d=n(80),u=n(1),j=Object(r.makeStyles)((function(){return Object(r.createStyles)({listItemIcon:{width:"1em",fontSize:"1.5rem",textAlign:"center"}})})),h=function(e){var t,n=Object(o.useTranslation)().t,i=j();return a.useMemo((function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(r.ListItem,{children:[Object(u.jsx)(r.ListItemIcon,{children:Object(u.jsx)("span",{className:i.listItemIcon,children:"\u6587"})}),Object(u.jsx)(r.TextField,{style:{width:"100%"},variant:"outlined",label:n("stations.edit.name.nameZH"),onChange:e.onUpdate(0),value:e.name[0],autoFocus:!0})]}),Object(u.jsxs)(r.ListItem,{children:[Object(u.jsx)(r.ListItemIcon,{children:Object(u.jsx)("span",{className:i.listItemIcon,children:"A"})}),Object(u.jsx)(r.TextField,{style:{width:"100%"},variant:"outlined",label:n("stations.edit.name.nameEN"),onChange:e.onUpdate(1),value:e.name[1],helperText:n("stations.edit.name.nameENHelper")})]})]})}),[(null===(t=e.name)||void 0===t?void 0:t.toString())||""])},b=n(11),m=n(3),p=n(7),O=(t.default=function(e){var t=e.stnId,n=Object(o.useTranslation)().t,d=Object(b.useDispatch)(),j=Object(b.useSelector)((function(e){return e.app.rmgStyle})),h=Object(b.useSelector)((function(e){return e.param.theme})),O=Object(b.useSelector)((function(e){return e.param.stn_list[t]})).transfer,I=Object(a.useContext)(l.a).dispatch,v=s.a.useState(!1),y=Object(c.a)(v,2),C=y[0],T=y[1],S=s.a.useState(!1),N=Object(c.a)(S,2),k=N[0],L=N[1],w="localhost"===window.location.hostname||window.location.pathname.includes("uat"),_=function(e){var n=[].concat(Object(i.a)(h),["\u8f49\u7dab","Line"]);I({type:"ADD_STATION_INTERCHANGE_INFO",stnId:t,setIdx:e,info:n}),d(Object(p.v)(t,e,n))},A=function(e,n){I({type:"REMOVE_STATION_INTERCHANGE_INFO",stnId:t,setIdx:e,intIdx:n}),d(Object(p.B)(t,e,n))};return Object(u.jsxs)(r.List,{children:[Object(u.jsxs)(r.ListItem,{children:[Object(u.jsx)(r.ListItemText,{children:Object(u.jsx)("h3",{style:{margin:0},children:n("stations.edit.interchange.within")})}),Object(u.jsx)(r.ListItemSecondaryAction,{children:Object(u.jsx)(r.Tooltip,{title:n("stations.edit.interchange.add"),"aria-label":"add",children:Object(u.jsx)(r.IconButton,{onClick:function(){return _(0)},children:Object(u.jsx)(r.Icon,{children:"add_circle"})})})})]}),Object(u.jsx)(r.ListItem,{children:Object(u.jsx)(x,{stnId:t,setIndex:0,onDelete:function(e){return A(0,e)}})}),[m.k.MTR,m.k.SHMetro].includes(j)&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.Divider,{}),Object(u.jsxs)(r.ListItem,{children:[Object(u.jsx)(r.ListItemText,{children:Object(u.jsx)("h3",{style:{margin:0},children:n("stations.edit.interchange.osi")})}),Object(u.jsxs)(r.ListItemSecondaryAction,{children:[Object(u.jsx)(r.Button,{variant:"outlined",color:"primary",style:{lineHeight:"1rem",whiteSpace:"pre",marginRight:5},onClick:function(){return T(!0)},children:O.osi_names[0]?O.osi_names[0].join("\r\n"):"\u8eca\u7ad9\u540d\r\nStn Name"}),Object(u.jsx)(g,{open:C,stnId:t,setIndex:0,onClose:function(){return T(!1)}}),Object(u.jsx)(r.Tooltip,{title:n("stations.edit.interchange.add"),"aria-label":"add",children:Object(u.jsx)(r.IconButton,{onClick:function(){return _(1)},children:Object(u.jsx)(r.Icon,{children:"add_circle"})})})]})]}),Object(u.jsx)(r.ListItem,{children:Object(u.jsx)(x,{stnId:t,setIndex:1,onDelete:function(e){return A(1,e)}})})]}),w&&j===m.k.SHMetro&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.Divider,{}),Object(u.jsxs)(r.ListItem,{children:[Object(u.jsx)(r.ListItemText,{children:Object(u.jsx)("h3",{style:{margin:0},children:n("stations.edit.interchange.osysi")})}),Object(u.jsxs)(r.ListItemSecondaryAction,{children:[Object(u.jsx)(r.Button,{variant:"outlined",color:"primary",style:{lineHeight:"1rem",whiteSpace:"pre",marginRight:5},onClick:function(){return L(!0)},children:O.osi_names[1]?O.osi_names[1].join("\r\n"):"\u8eca\u7ad9\u540d\r\nStn Name"}),Object(u.jsx)(g,{open:k,stnId:t,setIndex:1,onClose:function(){return L(!1)}}),Object(u.jsx)(r.Tooltip,{title:n("stations.edit.interchange.add"),"aria-label":"add",children:Object(u.jsx)(r.IconButton,{onClick:function(){return _(2)},children:Object(u.jsx)(r.Icon,{children:"add_circle"})})})]})]}),Object(u.jsx)(r.ListItem,{children:Object(u.jsx)(x,{stnId:t,setIndex:2,onDelete:function(e){return A(1,e)}})})]}),[m.k.MTR,m.k.SHMetro].includes(j)&&Object(u.jsx)(r.ListItem,{children:Object(u.jsx)("span",{children:n("stations.edit.interchange.note")})}),j===m.k.MTR&&Object(u.jsx)(f,{stnId:t})]})},Object(r.makeStyles)((function(){return Object(r.createStyles)({intChip:{borderRadius:4.5,height:40,lineHeight:"1rem",margin:2},intChipText:{display:"block",textAlign:"center"},intChipTextZH:{fontSize:18,lineHeight:"1.2rem"},intChipTextEN:{fontSize:".75rem",lineHeight:".9rem",whiteSpace:"pre-wrap"},intChipLabel:{paddingLeft:6,paddingRight:6},intChipDeleteIcon:{marginLeft:-3}})}))),x=function(e){var t=e.stnId,n=e.setIndex,i=e.onDelete,a=O(),o=Object(b.useDispatch)(),j=s.a.useContext(l.a).dispatch,h=Object(b.useSelector)((function(e){return e.param.stn_list[t].transfer.info[n]})),m=s.a.useState(-1),x=Object(c.a)(m,2),g=x[0],f=x[1],I=s.a.useState(!1),v=Object(c.a)(I,2),y=v[0],C=v[1],T=null===h||void 0===h?void 0:h.map((function(e,t){var n=Object(u.jsxs)("span",{style:{color:e[3]},children:[Object(u.jsx)("span",{className:"".concat(a.intChipText," ").concat(a.intChipTextZH),children:e[4]}),Object(u.jsx)("span",{className:"".concat(a.intChipText," ").concat(a.intChipTextEN),children:e[5]})]});return Object(u.jsx)(r.Chip,{label:n,className:a.intChip,classes:{label:a.intChipLabel,deleteIcon:a.intChipDeleteIcon},style:{backgroundColor:e[2]},onDelete:function(){return i(t)},onClick:function(){return f(t),void C(!0)}},t)}));return Object(u.jsxs)("div",{children:[T,Object(u.jsx)(d.a,{open:y,theme:void 0===(null===h||void 0===h?void 0:h[g])?[]:[h[g][0],h[g][1],h[g][2],h[g][3]],lineName:void 0===(null===h||void 0===h?void 0:h[g])?["",""]:[h[g][4],h[g][5]],onUpdate:function(e,i){if("theme"===e){var c=i.concat(Array(2));j({type:"UPDATE_STATION_INTERCHANGE_INFO",stnId:t,setIdx:n,intIdx:g,info:c}),o(Object(p.Y)(t,n,g,c))}if("name"===e){var a=Array(4).concat(i);j({type:"UPDATE_STATION_INTERCHANGE_INFO",stnId:t,setIdx:n,intIdx:g,info:a}),o(Object(p.Y)(t,n,g,a))}},onClose:function(){return C(!1)}})]})},g=function(e){var t=e.open,n=e.stnId,i=e.setIndex,c=e.onClose,s=Object(o.useTranslation)().t,d=Object(b.useDispatch)(),j=Object(a.useContext)(l.a).dispatch,m=Object(b.useSelector)((function(e){return e.param.stn_list[n].transfer.osi_names[i]}))||["\u8eca\u7ad9\u540d","Stn Name"];return Object(u.jsxs)(r.Dialog,{open:t,onClose:c,children:[Object(u.jsx)(r.DialogTitle,{children:s("stations.edit.interchange.osiName")}),Object(u.jsx)(r.DialogContent,{dividers:!0,children:Object(u.jsx)(r.List,{children:Object(u.jsx)(h,{onUpdate:function(e){return function(t){var c=t.target.value,a=m.map((function(t,n){return n===e?c:t}));j({type:"UPDATE_STATION_OSI_NAME",stnId:n,setIndex:i,name:a}),d(Object(p.fb)(n,i,a))}},name:m})})}),Object(u.jsx)(r.DialogActions,{children:Object(u.jsx)(r.Button,{onClick:c,color:"primary",autoFocus:!0,children:s("dialog.done")})})]})},f=function(e){var t=e.stnId,n=Object(o.useTranslation)().t,i=Object(b.useDispatch)(),c=s.a.useContext(l.a).dispatch,a=Object(b.useSelector)((function(e){return e.param.stn_list[t]})).transfer;return s.a.useMemo((function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.Divider,{}),Object(u.jsx)(r.ListItem,{children:Object(u.jsx)(r.ListItemText,{children:Object(u.jsx)("h3",{style:{margin:0},children:n("stations.edit.interchange.settings")})})}),Object(u.jsxs)(r.ListItem,{children:[Object(u.jsx)(r.ListItemIcon,{children:Object(u.jsx)(r.Icon,{children:"format_textdirection_l_to_r"})}),Object(u.jsx)(r.ListItemText,{primary:n("stations.edit.interchange.tickDirec.label")}),Object(u.jsx)(r.ListItemSecondaryAction,{children:Object(u.jsx)(r.Select,{native:!0,value:a.tick_direc,onChange:function(e){var n=e.target.value;n!==m.m.left&&n!==m.m.right||(c({type:"UPDATE_STATION_TICK_DIREC",stnId:t,direction:n}),i(Object(p.ib)(t,n)))},children:Object.values(m.m).map((function(e){return Object(u.jsx)("option",{value:e,children:n("stations.edit.interchange.tickDirec."+e)},e)}))})})]}),Object(u.jsxs)(r.ListItem,{children:[Object(u.jsx)(r.ListItemIcon,{children:Object(u.jsx)(r.Icon,{children:"attach_money"})}),Object(u.jsx)(r.ListItemText,{primary:n("stations.edit.interchange.paidArea")}),Object(u.jsx)(r.ListItemSecondaryAction,{children:Object(u.jsx)(r.Switch,{color:"primary",edge:"end",onChange:function(e,n){c({type:"UPDATE_STATION_PAID_AREA",stnId:t,isPaid:n}),i(Object(p.gb)(t,n))},checked:a.paid_area})})]})]})}),[t,n,c,i,a.paid_area,a.tick_direc])}},78:function(e,t,n){var i={"./README.md":[82,75],"./barcelona":[38,1],"./barcelona.ts":[38,1],"./beijing":[39,12],"./beijing.ts":[39,12],"./changsha":[40,23],"./changsha.ts":[40,23],"./chengdu":[41,34],"./chengdu.ts":[41,34],"./chongqing":[42,36],"./chongqing.ts":[42,36],"./dongguan":[43,2],"./dongguan.ts":[43,2],"./edinburgh":[44,3],"./edinburgh.ts":[44,3],"./foshan":[45,4],"./foshan.ts":[45,4],"./glasgow":[46,5],"./glasgow.ts":[46,5],"./guangzhou":[47,6],"./guangzhou.ts":[47,6],"./hangzhou":[48,7],"./hangzhou.ts":[48,7],"./hongkong":[49,8],"./hongkong.ts":[49,8],"./kansai":[50,9],"./kansai.ts":[50,9],"./kaohsiung":[51,10],"./kaohsiung.ts":[51,10],"./london":[52,11],"./london.ts":[52,11],"./macao":[53,13],"./macao.ts":[53,13],"./madrid":[54,14],"./madrid.ts":[54,14],"./nanjing":[55,15],"./nanjing.ts":[55,15],"./newtaipei":[56,16],"./newtaipei.ts":[56,16],"./osaka":[57,17],"./osaka.ts":[57,17],"./oslo":[58,18],"./oslo.ts":[58,18],"./other":[59,19],"./other.ts":[59,19],"./paris":[60,20],"./paris.ts":[60,20],"./qingdao":[61,21],"./qingdao.ts":[61,21],"./sanfrancisco":[62,22],"./sanfrancisco.ts":[62,22],"./seoul":[63,24],"./seoul.ts":[63,24],"./shanghai":[64,25],"./shanghai.ts":[64,25],"./shenzhen":[65,26],"./shenzhen.ts":[65,26],"./singapore":[66,27],"./singapore.ts":[66,27],"./stockholm":[67,28],"./stockholm.ts":[67,28],"./taipei":[68,29],"./taipei.ts":[68,29],"./tianjin":[69,30],"./tianjin.ts":[69,30],"./tokyo":[70,31],"./tokyo.ts":[70,31],"./toronto":[71,32],"./toronto.ts":[71,32],"./tyneandwear":[72,33],"./tyneandwear.ts":[72,33],"./xian":[73,35],"./xian.ts":[73,35]};function c(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(i)},c.id=78,e.exports=c},80:function(e,t,n){"use strict";var i=n(0),c=n(10),a=n(13),s=n(2),o=n(4),r=n.n(o),l=n(12),d=n(5),u=n(6),j=n.n(u),h=n(9),b=n(22),m=n(25),p=n(3),O=n(1),x=Object(d.makeStyles)((function(){return Object(d.createStyles)({cityItem:{display:"flex",flexDirection:"row",alignItems:"center"},menuItemSpan:{padding:"0 .3rem"},button:{borderRadius:"50%",height:24,width:24,minWidth:0,marginRight:8,padding:0},inputColour:{position:"absolute",width:0,height:0,left:27,top:32},buttonContainer:{display:"flex",flexShrink:1}})})),g=function(e){var t=Object(l.useTranslation)(),s=t.t,u=t.i18n,g=x(),f=function(e){var t=r.a.useState([]),a=Object(c.a)(t,2),s=a[0],l=a[1],d=e[0]?n(78)("./".concat(e[0])).then((function(e){return e.default})):Promise.resolve([]);return Object(o.useEffect)((function(){"undefined"!==typeof e[0]&&Object(h.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d;case 2:n=t.sent,l(e[0]===m.a.Other?[Object(i.a)(Object(i.a)({},n[0]),{},{colour:e[2],fg:e[3]||p.h.white})]:n);case 4:case"end":return t.stop()}}),t)})))()}),[e.toString()]),s}(e.theme);Object(o.useEffect)((function(){if(0!==f.length&&!f.filter((function(t){return t.id===e.theme[1]})).length){var t=f[0],n=t.id,i=t.colour,c=t.fg,a=[e.theme[0],n,i,c||p.h.white];e.onUpdate("theme",a)}}),[f]);return Object(O.jsxs)(d.List,{component:"div",disablePadding:!0,children:[Object(O.jsx)(I,{value:e.theme[0],onChange:function(t){return e.onUpdate("theme",[t.target.value].concat(Object(a.a)(e.theme.slice(1))))}}),Object(O.jsx)(d.Divider,{variant:"middle"}),Object(O.jsxs)(d.ListItem,{children:[Object(O.jsx)(d.ListItemText,{primary:s("colour.line")}),Object(O.jsx)(d.TextField,{select:!0,style:{width:166},onChange:function(t){var n=t.target.value,i=f.filter((function(e){return e.id===n}))[0],c=i.colour,a=i.fg,s=[e.theme[0],n,c,a||p.h.white];e.onUpdate("theme",s)},value:e.theme[1],disabled:"other"===e.theme[0],children:f.map((function(e){return Object(O.jsx)(d.MenuItem,{value:e.id,children:Object(O.jsx)("span",{className:g.menuItemSpan,style:{backgroundColor:e.colour,color:e.fg||p.h.white},children:Object(b.b)(e.name,u.languages)})},e.id)}))})]})]})},f=function(e){var t=Object(l.useTranslation)().t,n=x(),i=Object(o.useState)(e.theme[2]),s=Object(c.a)(i,2),r=s[0],u=s[1];Object(o.useEffect)((function(){return u(e.theme[2])}),[e.theme[2]]);return Object(O.jsxs)(d.List,{component:"div",disablePadding:!0,children:[Object(O.jsxs)(d.ListItem,{children:[Object(O.jsx)(d.ListItemText,{primary:t("colour.colour")}),Object(O.jsxs)("div",{className:n.buttonContainer,children:[Object(O.jsx)("input",{type:"color",id:"input-color",value:e.theme[2],onChange:function(t){var n=t.target.value;e.onUpdate("theme",[m.a.Other,"other",n,e.theme[3]])},className:n.inputColour,style:{opacity:0}}),Object(O.jsx)("label",{htmlFor:"input-color",children:Object(O.jsx)(d.Tooltip,{title:t("colour.tooltip"),"aria-label":"colour picker",children:Object(O.jsx)(d.Button,{className:n.button,style:{backgroundColor:e.theme[2],borderColor:e.theme[3]||p.h.white},variant:"contained",component:"span",children:" "})})})]}),Object(O.jsx)(d.TextField,{error:!(null===r||void 0===r?void 0:r.match(/^#[0-9a-fA-F]{6}$/g)),style:{width:85},onChange:function(t){var n=t.target.value;if(null!==n.match(/^#[0-9a-fA-F]{0,6}$/))if(u(n),"other"!==e.theme[0])if(null!==n.match(/^#[0-9a-fA-f]{6}$/)){var i=[m.a.Other,"other",n,e.theme[3]];e.onUpdate("theme",i)}else{var c=[m.a.Other,"other"].concat(Object(a.a)(e.theme.slice(2)));e.onUpdate("theme",c)}else if(null!==n.match(/^#[0-9a-fA-F]{6}$/)){var s=e.theme.map((function(e,t){return 2===t?n:e}));e.onUpdate("theme",s)}},value:null===r||void 0===r?void 0:r.toUpperCase()})]}),Object(O.jsx)(d.Divider,{variant:"middle"}),Object(O.jsxs)(d.ListItem,{children:[Object(O.jsx)(d.ListItemText,{primary:t("colour.fg")}),Object(O.jsxs)(d.Select,{native:!0,style:{width:85},label:t("colour.fg"),onChange:function(t){var n=[m.a.Other,"other",e.theme[2],t.target.value];e.onUpdate("theme",n)},value:e.theme[3]||p.h.white,children:[Object(O.jsx)("option",{value:"#fff",children:t("colour.fgWhite")}),Object(O.jsx)("option",{value:"#000",children:t("colour.fgBlack")})]})]})]})},I=function(e){var t=Object(l.useTranslation)(),n=t.t,i=t.i18n,c=x(),a=Object(o.useMemo)((function(){return m.b.map((function(e){return Object(O.jsx)(d.MenuItem,{value:e.id,children:Object(O.jsxs)("span",{className:c.cityItem,children:[Object(O.jsx)(y,{code:e.country}),Object(O.jsx)("span",{children:Object(b.b)(e.name,i.languages)})]})},e.id)}))}),[]);return Object(O.jsxs)(d.ListItem,{children:[Object(O.jsx)(d.ListItemText,{primary:n("colour.city")}),Object(O.jsx)(d.TextField,{select:!0,style:{width:166},value:e.value,onChange:e.onChange,children:a})]})},v=Object(d.makeStyles)((function(){return Object(d.createStyles)({img:{height:20,marginRight:"0.2rem"}})}));function y(e){var t=Object(l.useTranslation)().i18n,n=v(),i=[];return i=2===e.code.length?e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+127397).toString(16).toUpperCase()})):["1F3F4"].concat(e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+917536).toString(16).toUpperCase()})),"E007F"),[p.f.ChineseCN,p.f.ChineseSimp].includes(t.language)&&"TW"===e.code&&(i=["1F3F4"]),-1!==navigator.platform.indexOf("Win32")||-1!==navigator.platform.indexOf("Win64")?Object(O.jsx)("img",{src:"/uat-rail-map-generator"+"/images/flags/".concat(i.join("-"),".svg"),className:n.img,alt:"Flag of ".concat(e.code)}):Object(O.jsx)("span",{children:String.fromCodePoint.apply(String,Object(a.a)(i.map((function(e){return parseInt(e,16)}))))})}var C=n(11),T=Object(d.makeStyles)((function(e){return Object(d.createStyles)({contentWrapper:Object(s.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentLeft:{maxWidth:280},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",width:270},paperRoot:{maxWidth:250},listItemPaper:{justifyContent:"center"},iconRoot:{position:"absolute",color:e.palette.action.active},inputBaseRoot:{display:"block"},inputBaseInputZH:{textAlign:"center",fontSize:36,padding:0,paddingTop:6,height:45},inputBaseInputEN:{textAlign:"center",fontSize:18,padding:0,paddingBottom:6,height:"auto"},chipWrapper:{overflowX:"auto",display:"flex"},chipRoot:{borderRadius:4.5,height:32,lineHeight:"1rem",margin:2},chipLabel:{padding:"0 6px","& > span":{display:"block",textAlign:"center"},"& > span:first-child":{fontSize:"1rem"},"& > span:last-child":{lineHeight:"0.8rem"}}})})),S=function(e){var t=Object(l.useTranslation)().t,n=T();return Object(O.jsxs)(d.Dialog,{open:e.open,onClose:e.onClose,children:[Object(O.jsx)(d.DialogTitle,{children:t("colour.title")}),Object(O.jsxs)(d.DialogContent,{className:n.contentWrapper,children:[Object(O.jsxs)(d.List,{component:"div",disablePadding:!0,className:n.contentLeft,children:[Object(O.jsx)(N,{theme:e.theme,lineName:e.lineName,onUpdate:e.onUpdate}),Object(O.jsx)(d.Divider,{}),Object(O.jsx)(k,{onUpdate:e.onUpdate})]}),Object(O.jsx)("div",{className:n.contentControl,children:Object(O.jsx)(L,{theme:e.theme,onUpdate:e.onUpdate})})]}),Object(O.jsx)(d.DialogActions,{children:Object(O.jsx)(d.Button,{onClick:e.onClose,color:"primary",children:t("dialog.done")})})]})},N=function(e){var t=T(),n=function(t,n){var i=e.lineName.map((function(e,i){return i===n?t:e}));e.onUpdate("name",i)};return Object(O.jsx)(d.ListItem,{style:{justifyContent:"center"},children:Object(O.jsxs)(d.Paper,{className:t.paperRoot,style:{backgroundColor:e.theme[2]},children:[Object(O.jsx)(d.Icon,{className:t.iconRoot,children:"edit"}),Object(O.jsx)(d.InputBase,{value:e.lineName[0],classes:{root:t.inputBaseRoot,input:t.inputBaseInputZH},style:{color:e.theme[3]||p.h.white},onChange:function(e){return n(e.target.value,0)},autoFocus:!0}),Object(O.jsx)(d.InputBase,{value:e.lineName[1],classes:{root:t.inputBaseRoot,input:t.inputBaseInputEN},style:{color:e.theme[3]||p.h.white},onChange:function(e){return n(e.target.value,1)}})]})})},k=function(e){var t=Object(l.useTranslation)().t,n=T(),i=Object(C.useSelector)((function(e){return e.param.theme})),c=Object(C.useSelector)((function(e){return e.param.line_name})),s=Object(C.useSelector)((function(e){return e.param.stn_list})),r=Object(o.useMemo)((function(){return new Set(Object.values(s).reduce((function(e,t){var n=t.transfer.info;return e.concat.apply(e,Object(a.a)(n))}),[[].concat(Object(a.a)(i),Object(a.a)(c))]).map((function(e){return JSON.stringify(e)})).reverse())}),[]),u=Object(o.useMemo)((function(){return Object(a.a)(r).map((function(t,i){var c=JSON.parse(t),a=c.slice(4).map((function(e,t){return Object(O.jsx)("span",{style:{color:c[3]},children:e},t)}));return Object(O.jsx)(d.Chip,{onClick:function(){e.onUpdate("theme",c.slice(0,4)),e.onUpdate("name",c.slice(4))},style:{backgroundColor:c[2]},className:n.chipRoot,classes:{label:n.chipLabel},label:a},i)}))}),[]);return Object(O.jsx)(d.ListItem,{children:Object(O.jsx)(d.ListItemText,{primary:t("colour.recent"),secondary:u,secondaryTypographyProps:{component:"div"},classes:{secondary:n.chipWrapper}})})},L=function(e){var t=Object(l.useTranslation)().t,n=Object(o.useState)("other"===e.theme[0]?1:0),a=Object(c.a)(n,2),s=a[0],r=a[1],u=Object(O.jsxs)(d.Tabs,{value:s,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return r(t)},variant:"fullWidth",scrollButtons:"off",children:[Object(O.jsx)(d.Tab,{label:t("colour.palette"),style:{minWidth:"unset"}}),Object(O.jsx)(d.Tab,{label:t("colour.custom"),style:{minWidth:"unset"}})]}),j=function(t){switch(t){case 0:return Object(O.jsx)(g,Object(i.a)({},e));case 1:return Object(O.jsx)(f,Object(i.a)({},e));default:return Object(O.jsx)(O.Fragment,{})}}(s);return Object(O.jsxs)(O.Fragment,{children:[u,j]})};t.a=S}}]);
//# sourceMappingURL=panelStationsInterchange.337dca06.chunk.js.map