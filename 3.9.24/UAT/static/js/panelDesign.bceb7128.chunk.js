(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[78],{141:function(e,t,n){"use strict";n.r(t);var i=n(4),c=n.n(i),a=n(3),r=n(11),o=n(14),s=n(82),l=n(7),u=n(2),j=n(8),d=n(0),h=Object(a.makeStyles)((function(e){return Object(a.createStyles)({dividerVertical:{margin:e.spacing(0,2)},nestedList:{paddingLeft:e.spacing(5)}})})),b=function(){var e=Object(o.useTranslation)().t,t=Object(l.b)(),n=Object(l.c)((function(e){return e.app.rmgStyle})),i=Object(l.c)((function(e){return e.param.line_name})),h=Object(l.c)((function(e){return e.param.theme})),b=c.a.useState(!1),f=Object(r.a)(b,2),g=f[0],x=f[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(a.ListItem,{button:!0,onClick:function(){return x(!0)},children:[Object(d.jsx)(a.ListItemIcon,{children:Object(d.jsx)(a.Icon,{children:"color_lens"})}),Object(d.jsx)(a.ListItemText,{primary:e("design.theme"),secondary:Object(d.jsx)("span",{style:{backgroundColor:h[2],color:h[3],padding:".1rem .3rem"},children:Object.values(i).join()})}),Object(d.jsx)(a.Icon,{color:"action",children:"arrow_right"})]}),Object(d.jsx)(s.a,{open:g,theme:h,lineName:i,onUpdate:function(e,n){"name"===e&&t(Object(j.L)(Object.values(n))),"theme"===e&&t(Object(j.U)(n))},onClose:function(){return x(!1)}}),Object(d.jsx)(a.Divider,{}),Object(d.jsx)(m,{}),Object(d.jsx)(a.Divider,{}),n===u.k.SHMetro?Object(d.jsx)(O,{}):Object(d.jsx)(p,{})]})},m=function(){var e=Object(o.useTranslation)().t,t=h(),n=Object(l.b)(),i=Object(l.c)((function(e){return e.param.direction}));return c.a.useMemo((function(){return Object(d.jsxs)(a.ListItem,{children:[Object(d.jsx)(a.ListItemIcon,{children:Object(d.jsx)(a.Icon,{children:"directions"})}),Object(d.jsx)(a.ListItemText,{primary:e("design.direction.button"),secondary:e("design.direction."+i)}),Object(d.jsx)(a.Divider,{orientation:"vertical",flexItem:!0,className:t.dividerVertical}),Object(d.jsx)(a.Button,{variant:"outlined",color:"primary",onClick:function(){n(Object(j.H)(i===u.m.left?u.m.right:u.m.left))},children:e("design.direction.switch")})]})}),[t.dividerVertical,i,e,n])},p=function(){var e=Object(o.useTranslation)().t,t=Object(l.b)(),n=Object(l.c)((function(e){return e.param.platform_num}));return c.a.useMemo((function(){return Object(d.jsxs)(a.ListItem,{children:[Object(d.jsx)(a.ListItemIcon,{children:Object(d.jsx)(a.Icon,{children:"looks_one"})}),Object(d.jsx)(a.ListItemText,{primary:e("design.platform")}),Object(d.jsx)(a.TextField,{value:n,onChange:function(e){var n=e.target.value;t(Object(j.P)(n))}})]})}),[n,t,e])},O=function(){var e=Object(o.useTranslation)().t,t=h(),n=Object(l.b)(),c=Object(l.c)((function(e){return e.param.platform_num}));return Object(i.useMemo)((function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(a.ListItem,{children:[Object(d.jsx)(a.ListItemIcon,{children:Object(d.jsx)(a.Icon,{children:"looks_one"})}),Object(d.jsx)(a.ListItemText,{primary:e("design.platform")}),Object(d.jsx)(a.ListItemSecondaryAction,{children:Object(d.jsx)(a.Switch,{color:"primary",checked:!1!==c,onChange:function(e,t){n(t?Object(j.P)(""):Object(j.P)(!1))}})})]}),Object(d.jsx)(a.Collapse,{in:!1!==c,unmountOnExit:!0,children:Object(d.jsx)(a.List,{component:"div",disablePadding:!0,className:t.nestedList,children:Object(d.jsx)(a.ListItem,{children:Object(d.jsx)(a.TextField,{placeholder:e("design.platform"),value:c,onChange:function(e){var t=e.target.value;n(Object(j.P)(t))}})})})})]})}),[c,t.nestedList,e,n])},f=c.a.lazy((function(){return n.e(80).then(n.bind(null,129))})),g=c.a.lazy((function(){return n.e(79).then(n.bind(null,130))})),x=c.a.lazy((function(){return n.e(81).then(n.bind(null,131))})),v=function(){var e=Object(l.c)((function(e){return e.app.rmgStyle}));return Object(d.jsx)(a.Grid,{container:!0,spacing:3,justify:"center",alignItems:"flex-start",children:Object(d.jsx)(a.Grid,{item:!0,xs:12,sm:10,md:7,lg:5,children:Object(d.jsx)(a.Paper,{children:Object(d.jsxs)(a.List,{component:"div",disablePadding:!0,children:[Object(d.jsx)(b,{}),e===u.k.MTR&&Object(d.jsxs)(c.a.Suspense,{fallback:Object(d.jsx)(a.LinearProgress,{}),children:[Object(d.jsx)(a.Divider,{}),Object(d.jsx)(f,{})]}),e===u.k.GZMTR&&Object(d.jsxs)(c.a.Suspense,{fallback:Object(d.jsx)(a.LinearProgress,{}),children:[Object(d.jsx)(a.Divider,{}),Object(d.jsx)(g,{})]}),e===u.k.SHMetro&&Object(d.jsxs)(c.a.Suspense,{fallback:Object(d.jsx)(a.LinearProgress,{}),children:[Object(d.jsx)(a.Divider,{}),Object(d.jsx)(x,{})]})]})})})})};t.default=v},80:function(e,t,n){var i={"./README.md":[84,73],"./barcelona":[40,1],"./barcelona.ts":[40,1],"./beijing":[41,12],"./beijing.ts":[41,12],"./changsha":[42,23],"./changsha.ts":[42,23],"./chengdu":[43,34],"./chengdu.ts":[43,34],"./chongqing":[44,36],"./chongqing.ts":[44,36],"./dongguan":[45,2],"./dongguan.ts":[45,2],"./edinburgh":[46,3],"./edinburgh.ts":[46,3],"./foshan":[47,4],"./foshan.ts":[47,4],"./glasgow":[48,5],"./glasgow.ts":[48,5],"./guangzhou":[49,6],"./guangzhou.ts":[49,6],"./hangzhou":[50,7],"./hangzhou.ts":[50,7],"./hongkong":[51,8],"./hongkong.ts":[51,8],"./kansai":[52,9],"./kansai.ts":[52,9],"./kaohsiung":[53,10],"./kaohsiung.ts":[53,10],"./london":[54,11],"./london.ts":[54,11],"./macao":[55,13],"./macao.ts":[55,13],"./madrid":[56,14],"./madrid.ts":[56,14],"./nanjing":[57,15],"./nanjing.ts":[57,15],"./newtaipei":[58,16],"./newtaipei.ts":[58,16],"./osaka":[59,17],"./osaka.ts":[59,17],"./oslo":[60,18],"./oslo.ts":[60,18],"./other":[61,19],"./other.ts":[61,19],"./paris":[62,20],"./paris.ts":[62,20],"./qingdao":[63,21],"./qingdao.ts":[63,21],"./sanfrancisco":[64,22],"./sanfrancisco.ts":[64,22],"./seoul":[65,24],"./seoul.ts":[65,24],"./shanghai":[66,25],"./shanghai.ts":[66,25],"./shenzhen":[67,26],"./shenzhen.ts":[67,26],"./singapore":[68,27],"./singapore.ts":[68,27],"./stockholm":[69,28],"./stockholm.ts":[69,28],"./taipei":[70,29],"./taipei.ts":[70,29],"./tianjin":[71,30],"./tianjin.ts":[71,30],"./tokyo":[72,31],"./tokyo.ts":[72,31],"./toronto":[73,32],"./toronto.ts":[73,32],"./tyneandwear":[74,33],"./tyneandwear.ts":[74,33],"./xian":[75,35],"./xian.ts":[75,35]};function c(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(i)},c.id=80,e.exports=c},82:function(e,t,n){"use strict";var i=n(1),c=n(11),a=n(12),r=n(5),o=n(4),s=n.n(o),l=n(14),u=n(3),j=n(6),d=n.n(j),h=n(10),b=n(22),m=n(26),p=n(2),O=n(0),f=Object(u.makeStyles)((function(){return Object(u.createStyles)({cityItem:{display:"flex",flexDirection:"row",alignItems:"center"},menuItemSpan:{padding:"0 .3rem"},button:{borderRadius:"50%",height:24,width:24,minWidth:0,marginRight:8,padding:0},inputColour:{position:"absolute",width:0,height:0,left:27,top:32},buttonContainer:{display:"flex",flexShrink:1}})})),g=function(e){var t=Object(l.useTranslation)(),r=t.t,j=t.i18n,g=f(),x=function(e){var t=s.a.useState([]),a=Object(c.a)(t,2),r=a[0],l=a[1],u=e[0]?n(80)("./".concat(e[0])).then((function(e){return e.default})):Promise.resolve([]);return Object(o.useEffect)((function(){"undefined"!==typeof e[0]&&Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u;case 2:n=t.sent,l(e[0]===m.a.Other?[Object(i.a)(Object(i.a)({},n[0]),{},{colour:e[2],fg:e[3]||p.h.white})]:n);case 4:case"end":return t.stop()}}),t)})))()}),[e.toString()]),r}(e.theme);Object(o.useEffect)((function(){if(0!==x.length&&!x.filter((function(t){return t.id===e.theme[1]})).length){var t=x[0],n=t.id,i=t.colour,c=t.fg,a=[e.theme[0],n,i,c||p.h.white];e.onUpdate("theme",a)}}),[x]);return Object(O.jsxs)(u.List,{component:"div",disablePadding:!0,children:[Object(O.jsx)(v,{value:e.theme[0],onChange:function(t){return e.onUpdate("theme",[t.target.value].concat(Object(a.a)(e.theme.slice(1))))}}),Object(O.jsx)(u.Divider,{variant:"middle"}),Object(O.jsxs)(u.ListItem,{children:[Object(O.jsx)(u.ListItemText,{primary:r("colour.line")}),Object(O.jsx)(u.TextField,{select:!0,style:{width:166},onChange:function(t){var n=t.target.value,i=x.filter((function(e){return e.id===n}))[0],c=i.colour,a=i.fg,r=[e.theme[0],n,c,a||p.h.white];e.onUpdate("theme",r)},value:e.theme[1],disabled:"other"===e.theme[0],children:x.map((function(e){return Object(O.jsx)(u.MenuItem,{value:e.id,children:Object(O.jsx)("span",{className:g.menuItemSpan,style:{backgroundColor:e.colour,color:e.fg||p.h.white},children:Object(b.b)(e.name,j.languages)})},e.id)}))})]})]})},x=function(e){var t=Object(l.useTranslation)().t,n=f(),i=Object(o.useState)(e.theme[2]),r=Object(c.a)(i,2),s=r[0],j=r[1];Object(o.useEffect)((function(){return j(e.theme[2])}),[e.theme[2]]);return Object(O.jsxs)(u.List,{component:"div",disablePadding:!0,children:[Object(O.jsxs)(u.ListItem,{children:[Object(O.jsx)(u.ListItemText,{primary:t("colour.colour")}),Object(O.jsxs)("div",{className:n.buttonContainer,children:[Object(O.jsx)("input",{type:"color",id:"input-color",value:e.theme[2],onChange:function(t){var n=t.target.value;e.onUpdate("theme",[m.a.Other,"other",n,e.theme[3]])},className:n.inputColour,style:{opacity:0}}),Object(O.jsx)("label",{htmlFor:"input-color",children:Object(O.jsx)(u.Tooltip,{title:t("colour.tooltip"),"aria-label":"colour picker",children:Object(O.jsx)(u.Button,{className:n.button,style:{backgroundColor:e.theme[2],borderColor:e.theme[3]||p.h.white},variant:"contained",component:"span",children:" "})})})]}),Object(O.jsx)(u.TextField,{error:!(null===s||void 0===s?void 0:s.match(/^#[0-9a-fA-F]{6}$/g)),style:{width:85},onChange:function(t){var n=t.target.value;if(null!==n.match(/^#[0-9a-fA-F]{0,6}$/))if(j(n),"other"!==e.theme[0])if(null!==n.match(/^#[0-9a-fA-f]{6}$/)){var i=[m.a.Other,"other",n,e.theme[3]];e.onUpdate("theme",i)}else{var c=[m.a.Other,"other"].concat(Object(a.a)(e.theme.slice(2)));e.onUpdate("theme",c)}else if(null!==n.match(/^#[0-9a-fA-F]{6}$/)){var r=e.theme.map((function(e,t){return 2===t?n:e}));e.onUpdate("theme",r)}},value:null===s||void 0===s?void 0:s.toUpperCase()})]}),Object(O.jsx)(u.Divider,{variant:"middle"}),Object(O.jsxs)(u.ListItem,{children:[Object(O.jsx)(u.ListItemText,{primary:t("colour.fg")}),Object(O.jsxs)(u.Select,{native:!0,style:{width:85},label:t("colour.fg"),onChange:function(t){var n=[m.a.Other,"other",e.theme[2],t.target.value];e.onUpdate("theme",n)},value:e.theme[3]||p.h.white,children:[Object(O.jsx)("option",{value:"#fff",children:t("colour.fgWhite")}),Object(O.jsx)("option",{value:"#000",children:t("colour.fgBlack")})]})]})]})},v=function(e){var t=Object(l.useTranslation)(),n=t.t,i=t.i18n,c=f(),a=Object(o.useMemo)((function(){return m.b.map((function(e){return Object(O.jsx)(u.MenuItem,{value:e.id,children:Object(O.jsxs)("span",{className:c.cityItem,children:[Object(O.jsx)(I,{code:e.country}),Object(O.jsx)("span",{children:Object(b.b)(e.name,i.languages)})]})},e.id)}))}),[]);return Object(O.jsxs)(u.ListItem,{children:[Object(O.jsx)(u.ListItemText,{primary:n("colour.city")}),Object(O.jsx)(u.TextField,{select:!0,style:{width:166},value:e.value,onChange:e.onChange,children:a})]})},y=Object(u.makeStyles)((function(){return Object(u.createStyles)({img:{height:20,marginRight:"0.2rem"}})}));function I(e){var t=Object(l.useTranslation)().i18n,n=y(),i=[];return i=2===e.code.length?e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+127397).toString(16).toUpperCase()})):["1F3F4"].concat(e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+917536).toString(16).toUpperCase()})),"E007F"),[p.f.ChineseCN,p.f.ChineseSimp].includes(t.language)&&"TW"===e.code&&(i=["1F3F4"]),-1!==navigator.platform.indexOf("Win32")||-1!==navigator.platform.indexOf("Win64")?Object(O.jsx)("img",{src:"/uat-rail-map-generator"+"/images/flags/".concat(i.join("-"),".svg"),className:n.img,alt:"Flag of ".concat(e.code)}):Object(O.jsx)("span",{children:String.fromCodePoint.apply(String,Object(a.a)(i.map((function(e){return parseInt(e,16)}))))})}var C=n(7),k=Object(u.makeStyles)((function(e){return Object(u.createStyles)({contentWrapper:Object(r.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentLeft:{maxWidth:280},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",width:270},paperRoot:{maxWidth:250},listItemPaper:{justifyContent:"center"},iconRoot:{position:"absolute",color:e.palette.action.active},inputBaseRoot:{display:"block"},inputBaseInputZH:{textAlign:"center",fontSize:36,padding:0,paddingTop:6,height:45},inputBaseInputEN:{textAlign:"center",fontSize:18,padding:0,paddingBottom:6,height:"auto"},chipWrapper:{overflowX:"auto",display:"flex"},chipRoot:{borderRadius:4.5,height:32,lineHeight:"1rem",margin:2},chipLabel:{padding:"0 6px","& > span":{display:"block",textAlign:"center"},"& > span:first-child":{fontSize:"1rem"},"& > span:last-child":{lineHeight:"0.8rem"}}})})),L=function(e){var t=Object(l.useTranslation)().t,n=k();return Object(O.jsxs)(u.Dialog,{open:e.open,onClose:e.onClose,children:[Object(O.jsx)(u.DialogTitle,{children:t("colour.title")}),Object(O.jsxs)(u.DialogContent,{className:n.contentWrapper,children:[Object(O.jsxs)(u.List,{component:"div",disablePadding:!0,className:n.contentLeft,children:[Object(O.jsx)(S,{theme:e.theme,lineName:e.lineName,onUpdate:e.onUpdate}),Object(O.jsx)(u.Divider,{}),Object(O.jsx)(w,{onUpdate:e.onUpdate})]}),Object(O.jsx)("div",{className:n.contentControl,children:Object(O.jsx)(T,{theme:e.theme,onUpdate:e.onUpdate})})]}),Object(O.jsx)(u.DialogActions,{children:Object(O.jsx)(u.Button,{onClick:e.onClose,color:"primary",children:t("dialog.done")})})]})},S=function(e){var t=k(),n=function(t,n){var i=e.lineName.map((function(e,i){return i===n?t:e}));e.onUpdate("name",i)};return Object(O.jsx)(u.ListItem,{style:{justifyContent:"center"},children:Object(O.jsxs)(u.Paper,{className:t.paperRoot,style:{backgroundColor:e.theme[2]},children:[Object(O.jsx)(u.Icon,{className:t.iconRoot,children:"edit"}),Object(O.jsx)(u.InputBase,{value:e.lineName[0],classes:{root:t.inputBaseRoot,input:t.inputBaseInputZH},style:{color:e.theme[3]||p.h.white},onChange:function(e){return n(e.target.value,0)},autoFocus:!0}),Object(O.jsx)(u.InputBase,{value:e.lineName[1],classes:{root:t.inputBaseRoot,input:t.inputBaseInputEN},style:{color:e.theme[3]||p.h.white},onChange:function(e){return n(e.target.value,1)}})]})})},w=function(e){var t=Object(l.useTranslation)().t,n=k(),i=Object(C.c)((function(e){return e.param.theme})),c=Object(C.c)((function(e){return e.param.line_name})),r=Object(C.c)((function(e){return e.param.stn_list})),s=Object(o.useMemo)((function(){return new Set(Object.values(r).reduce((function(e,t){var n=t.transfer.info;return e.concat.apply(e,Object(a.a)(n))}),[[].concat(Object(a.a)(i),Object(a.a)(c))]).map((function(e){return JSON.stringify(e)})).reverse())}),[]),j=Object(o.useMemo)((function(){return Object(a.a)(s).map((function(t,i){var c=JSON.parse(t),a=c.slice(4).map((function(e,t){return Object(O.jsx)("span",{style:{color:c[3]},children:e},t)}));return Object(O.jsx)(u.Chip,{onClick:function(){e.onUpdate("theme",c.slice(0,4)),e.onUpdate("name",c.slice(4))},style:{backgroundColor:c[2]},className:n.chipRoot,classes:{label:n.chipLabel},label:a},i)}))}),[]);return Object(O.jsx)(u.ListItem,{children:Object(O.jsx)(u.ListItemText,{primary:t("colour.recent"),secondary:j,secondaryTypographyProps:{component:"div"},classes:{secondary:n.chipWrapper}})})},T=function(e){var t=Object(l.useTranslation)().t,n=Object(o.useState)("other"===e.theme[0]?1:0),a=Object(c.a)(n,2),r=a[0],s=a[1],j=Object(O.jsxs)(u.Tabs,{value:r,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return s(t)},variant:"fullWidth",scrollButtons:"off",children:[Object(O.jsx)(u.Tab,{label:t("colour.palette"),style:{minWidth:"unset"}}),Object(O.jsx)(u.Tab,{label:t("colour.custom"),style:{minWidth:"unset"}})]}),d=function(t){switch(t){case 0:return Object(O.jsx)(g,Object(i.a)({},e));case 1:return Object(O.jsx)(x,Object(i.a)({},e));default:return Object(O.jsx)(O.Fragment,{})}}(r);return Object(O.jsxs)(O.Fragment,{children:[j,d]})};t.a=L}}]);
//# sourceMappingURL=panelDesign.bceb7128.chunk.js.map