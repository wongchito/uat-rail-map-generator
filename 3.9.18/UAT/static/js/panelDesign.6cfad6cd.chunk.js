(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[78],{139:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n.n(i),c=n(4),r=n(11),o=n(12),s=n(80),l=n(23),u=n(10),j=n(2),d=n(7),h=n(0),b=Object(c.makeStyles)((function(e){return Object(c.createStyles)({dividerVertical:{margin:e.spacing(0,2)},nestedList:{paddingLeft:e.spacing(5)}})})),p=function(){var e=Object(o.useTranslation)().t,t=Object(u.useDispatch)(),n=Object(u.useSelector)((function(e){return e.app.rmgStyle})),i=Object(u.useSelector)((function(e){return e.param.line_name})),b=Object(u.useSelector)((function(e){return e.param.theme})),p=a.a.useContext(l.a).dispatch,g=a.a.useState(!1),x=Object(r.a)(g,2),v=x[0],y=x[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(c.ListItem,{button:!0,onClick:function(){return y(!0)},children:[Object(h.jsx)(c.ListItemIcon,{children:Object(h.jsx)(c.Icon,{children:"color_lens"})}),Object(h.jsx)(c.ListItemText,{primary:e("design.theme"),secondary:Object(h.jsx)("span",{style:{backgroundColor:b[2],color:b[3],padding:".1rem .3rem"},children:Object.values(i).join()})}),Object(h.jsx)(c.Icon,{color:"action",children:"arrow_right"})]}),Object(h.jsx)(s.a,{open:v,theme:b,lineName:i,onUpdate:function(e,n){"name"===e&&(p({type:"SET_LINE_NAME",name:Object.values(n)}),t(Object(d.L)(Object.values(n)))),"theme"===e&&(p({type:"SET_THEME",theme:n}),t(Object(d.U)(n)))},onClose:function(){return y(!1)}}),Object(h.jsx)(c.Divider,{}),Object(h.jsx)(m,{}),Object(h.jsx)(c.Divider,{}),n===j.k.SHMetro?Object(h.jsx)(f,{}):Object(h.jsx)(O,{})]})},m=function(){var e=Object(o.useTranslation)().t,t=b(),n=Object(u.useDispatch)(),i=a.a.useContext(l.a).dispatch,r=Object(u.useSelector)((function(e){return e.param.direction}));return a.a.useMemo((function(){return Object(h.jsxs)(c.ListItem,{children:[Object(h.jsx)(c.ListItemIcon,{children:Object(h.jsx)(c.Icon,{children:"directions"})}),Object(h.jsx)(c.ListItemText,{primary:e("design.direction.button"),secondary:e("design.direction."+r)}),Object(h.jsx)(c.Divider,{orientation:"vertical",flexItem:!0,className:t.dividerVertical}),Object(h.jsx)(c.Button,{variant:"outlined",color:"primary",onClick:function(){i({type:"SET_DIRECTION"}),n(Object(d.H)(r===j.m.left?j.m.right:j.m.left))},children:e("design.direction.switch")})]})}),[t.dividerVertical,r,e,i,n])},O=function(){var e=Object(o.useTranslation)().t,t=Object(u.useDispatch)(),n=a.a.useContext(l.a).dispatch,i=Object(u.useSelector)((function(e){return e.param.platform_num}));return a.a.useMemo((function(){return Object(h.jsxs)(c.ListItem,{children:[Object(h.jsx)(c.ListItemIcon,{children:Object(h.jsx)(c.Icon,{children:"looks_one"})}),Object(h.jsx)(c.ListItemText,{primary:e("design.platform")}),Object(h.jsx)(c.TextField,{value:i,onChange:function(e){var i=e.target.value;n({type:"SET_PLATFORM",platform:i}),t(Object(d.P)(i))}})]})}),[i,n,t,e])},f=function(){var e=Object(o.useTranslation)().t,t=b(),n=Object(u.useDispatch)(),a=Object(i.useContext)(l.a).dispatch,r=Object(u.useSelector)((function(e){return e.param.platform_num}));return Object(i.useMemo)((function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(c.ListItem,{children:[Object(h.jsx)(c.ListItemIcon,{children:Object(h.jsx)(c.Icon,{children:"looks_one"})}),Object(h.jsx)(c.ListItemText,{primary:e("design.platform")}),Object(h.jsx)(c.ListItemSecondaryAction,{children:Object(h.jsx)(c.Switch,{color:"primary",checked:!1!==r,onChange:function(e,t){t?(a({type:"SET_PLATFORM",platform:""}),n(Object(d.P)(""))):(a({type:"SET_PLATFORM",platform:!1}),n(Object(d.P)(!1)))}})})]}),Object(h.jsx)(c.Collapse,{in:!1!==r,unmountOnExit:!0,children:Object(h.jsx)(c.List,{component:"div",disablePadding:!0,className:t.nestedList,children:Object(h.jsx)(c.ListItem,{children:Object(h.jsx)(c.TextField,{placeholder:e("design.platform"),value:r,onChange:function(e){var t=e.target.value;a({type:"SET_PLATFORM",platform:t}),n(Object(d.P)(t))}})})})})]})}),[r,t.nestedList,e,n,a])},g=a.a.lazy((function(){return n.e(80).then(n.bind(null,127))})),x=a.a.lazy((function(){return n.e(79).then(n.bind(null,128))})),v=a.a.lazy((function(){return n.e(81).then(n.bind(null,129))})),y=function(){var e=Object(u.useSelector)((function(e){return e.app.rmgStyle}));return Object(h.jsx)(c.Grid,{container:!0,spacing:3,justify:"center",alignItems:"flex-start",children:Object(h.jsx)(c.Grid,{item:!0,xs:12,sm:10,md:7,lg:5,children:Object(h.jsx)(c.Paper,{children:Object(h.jsxs)(c.List,{component:"div",disablePadding:!0,children:[Object(h.jsx)(p,{}),e===j.k.MTR&&Object(h.jsxs)(a.a.Suspense,{fallback:Object(h.jsx)(c.LinearProgress,{}),children:[Object(h.jsx)(c.Divider,{}),Object(h.jsx)(g,{})]}),e===j.k.GZMTR&&Object(h.jsxs)(a.a.Suspense,{fallback:Object(h.jsx)(c.LinearProgress,{}),children:[Object(h.jsx)(c.Divider,{}),Object(h.jsx)(x,{})]}),e===j.k.SHMetro&&Object(h.jsxs)(a.a.Suspense,{fallback:Object(h.jsx)(c.LinearProgress,{}),children:[Object(h.jsx)(c.Divider,{}),Object(h.jsx)(v,{})]})]})})})})};t.default=y},78:function(e,t,n){var i={"./README.md":[82,73],"./barcelona":[38,1],"./barcelona.ts":[38,1],"./beijing":[39,12],"./beijing.ts":[39,12],"./changsha":[40,23],"./changsha.ts":[40,23],"./chengdu":[41,34],"./chengdu.ts":[41,34],"./chongqing":[42,36],"./chongqing.ts":[42,36],"./dongguan":[43,2],"./dongguan.ts":[43,2],"./edinburgh":[44,3],"./edinburgh.ts":[44,3],"./foshan":[45,4],"./foshan.ts":[45,4],"./glasgow":[46,5],"./glasgow.ts":[46,5],"./guangzhou":[47,6],"./guangzhou.ts":[47,6],"./hangzhou":[48,7],"./hangzhou.ts":[48,7],"./hongkong":[49,8],"./hongkong.ts":[49,8],"./kansai":[50,9],"./kansai.ts":[50,9],"./kaohsiung":[51,10],"./kaohsiung.ts":[51,10],"./london":[52,11],"./london.ts":[52,11],"./macao":[53,13],"./macao.ts":[53,13],"./madrid":[54,14],"./madrid.ts":[54,14],"./nanjing":[55,15],"./nanjing.ts":[55,15],"./newtaipei":[56,16],"./newtaipei.ts":[56,16],"./osaka":[57,17],"./osaka.ts":[57,17],"./oslo":[58,18],"./oslo.ts":[58,18],"./other":[59,19],"./other.ts":[59,19],"./paris":[60,20],"./paris.ts":[60,20],"./qingdao":[61,21],"./qingdao.ts":[61,21],"./sanfrancisco":[62,22],"./sanfrancisco.ts":[62,22],"./seoul":[63,24],"./seoul.ts":[63,24],"./shanghai":[64,25],"./shanghai.ts":[64,25],"./shenzhen":[65,26],"./shenzhen.ts":[65,26],"./singapore":[66,27],"./singapore.ts":[66,27],"./stockholm":[67,28],"./stockholm.ts":[67,28],"./taipei":[68,29],"./taipei.ts":[68,29],"./tianjin":[69,30],"./tianjin.ts":[69,30],"./tokyo":[70,31],"./tokyo.ts":[70,31],"./toronto":[71,32],"./toronto.ts":[71,32],"./tyneandwear":[72,33],"./tyneandwear.ts":[72,33],"./xian":[73,35],"./xian.ts":[73,35]};function a(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(i)},a.id=78,e.exports=a},80:function(e,t,n){"use strict";var i=n(1),a=n(11),c=n(13),r=n(5),o=n(3),s=n.n(o),l=n(12),u=n(4),j=n(6),d=n.n(j),h=n(9),b=n(21),p=n(25),m=n(2),O=n(0),f=Object(u.makeStyles)((function(){return Object(u.createStyles)({cityItem:{display:"flex",flexDirection:"row",alignItems:"center"},menuItemSpan:{padding:"0 .3rem"},button:{borderRadius:"50%",height:24,width:24,minWidth:0,marginRight:8,padding:0},inputColour:{position:"absolute",width:0,height:0,left:27,top:32},buttonContainer:{display:"flex",flexShrink:1}})})),g=function(e){var t=Object(l.useTranslation)(),r=t.t,j=t.i18n,g=f(),x=function(e){var t=s.a.useState([]),c=Object(a.a)(t,2),r=c[0],l=c[1],u=e[0]?n(78)("./".concat(e[0])).then((function(e){return e.default})):Promise.resolve([]);return Object(o.useEffect)((function(){"undefined"!==typeof e[0]&&Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u;case 2:n=t.sent,l(e[0]===p.a.Other?[Object(i.a)(Object(i.a)({},n[0]),{},{colour:e[2],fg:e[3]||m.h.white})]:n);case 4:case"end":return t.stop()}}),t)})))()}),[e.toString()]),r}(e.theme);Object(o.useEffect)((function(){if(0!==x.length&&!x.filter((function(t){return t.id===e.theme[1]})).length){var t=x[0],n=t.id,i=t.colour,a=t.fg,c=[e.theme[0],n,i,a||m.h.white];e.onUpdate("theme",c)}}),[x]);return Object(O.jsxs)(u.List,{component:"div",disablePadding:!0,children:[Object(O.jsx)(v,{value:e.theme[0],onChange:function(t){return e.onUpdate("theme",[t.target.value].concat(Object(c.a)(e.theme.slice(1))))}}),Object(O.jsx)(u.Divider,{variant:"middle"}),Object(O.jsxs)(u.ListItem,{children:[Object(O.jsx)(u.ListItemText,{primary:r("colour.line")}),Object(O.jsx)(u.TextField,{select:!0,style:{width:166},onChange:function(t){var n=t.target.value,i=x.filter((function(e){return e.id===n}))[0],a=i.colour,c=i.fg,r=[e.theme[0],n,a,c||m.h.white];e.onUpdate("theme",r)},value:e.theme[1],disabled:"other"===e.theme[0],children:x.map((function(e){return Object(O.jsx)(u.MenuItem,{value:e.id,children:Object(O.jsx)("span",{className:g.menuItemSpan,style:{backgroundColor:e.colour,color:e.fg||m.h.white},children:Object(b.b)(e.name,j.languages)})},e.id)}))})]})]})},x=function(e){var t=Object(l.useTranslation)().t,n=f(),i=Object(o.useState)(e.theme[2]),r=Object(a.a)(i,2),s=r[0],j=r[1];Object(o.useEffect)((function(){return j(e.theme[2])}),[e.theme[2]]);return Object(O.jsxs)(u.List,{component:"div",disablePadding:!0,children:[Object(O.jsxs)(u.ListItem,{children:[Object(O.jsx)(u.ListItemText,{primary:t("colour.colour")}),Object(O.jsxs)("div",{className:n.buttonContainer,children:[Object(O.jsx)("input",{type:"color",id:"input-color",value:e.theme[2],onChange:function(t){var n=t.target.value;e.onUpdate("theme",[p.a.Other,"other",n,e.theme[3]])},className:n.inputColour,style:{opacity:0}}),Object(O.jsx)("label",{htmlFor:"input-color",children:Object(O.jsx)(u.Tooltip,{title:t("colour.tooltip"),"aria-label":"colour picker",children:Object(O.jsx)(u.Button,{className:n.button,style:{backgroundColor:e.theme[2],borderColor:e.theme[3]||m.h.white},variant:"contained",component:"span",children:" "})})})]}),Object(O.jsx)(u.TextField,{error:!(null===s||void 0===s?void 0:s.match(/^#[0-9a-fA-F]{6}$/g)),style:{width:85},onChange:function(t){var n=t.target.value;if(null!==n.match(/^#[0-9a-fA-F]{0,6}$/))if(j(n),"other"!==e.theme[0])if(null!==n.match(/^#[0-9a-fA-f]{6}$/)){var i=[p.a.Other,"other",n,e.theme[3]];e.onUpdate("theme",i)}else{var a=[p.a.Other,"other"].concat(Object(c.a)(e.theme.slice(2)));e.onUpdate("theme",a)}else if(null!==n.match(/^#[0-9a-fA-F]{6}$/)){var r=e.theme.map((function(e,t){return 2===t?n:e}));e.onUpdate("theme",r)}},value:null===s||void 0===s?void 0:s.toUpperCase()})]}),Object(O.jsx)(u.Divider,{variant:"middle"}),Object(O.jsxs)(u.ListItem,{children:[Object(O.jsx)(u.ListItemText,{primary:t("colour.fg")}),Object(O.jsxs)(u.Select,{native:!0,style:{width:85},label:t("colour.fg"),onChange:function(t){var n=[p.a.Other,"other",e.theme[2],t.target.value];e.onUpdate("theme",n)},value:e.theme[3]||m.h.white,children:[Object(O.jsx)("option",{value:"#fff",children:t("colour.fgWhite")}),Object(O.jsx)("option",{value:"#000",children:t("colour.fgBlack")})]})]})]})},v=function(e){var t=Object(l.useTranslation)(),n=t.t,i=t.i18n,a=f(),c=Object(o.useMemo)((function(){return p.b.map((function(e){return Object(O.jsx)(u.MenuItem,{value:e.id,children:Object(O.jsxs)("span",{className:a.cityItem,children:[Object(O.jsx)(C,{code:e.country}),Object(O.jsx)("span",{children:Object(b.b)(e.name,i.languages)})]})},e.id)}))}),[]);return Object(O.jsxs)(u.ListItem,{children:[Object(O.jsx)(u.ListItemText,{primary:n("colour.city")}),Object(O.jsx)(u.TextField,{select:!0,style:{width:166},value:e.value,onChange:e.onChange,children:c})]})},y=Object(u.makeStyles)((function(){return Object(u.createStyles)({img:{height:20,marginRight:"0.2rem"}})}));function C(e){var t=Object(l.useTranslation)().i18n,n=y(),i=[];return i=2===e.code.length?e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+127397).toString(16).toUpperCase()})):["1F3F4"].concat(e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+917536).toString(16).toUpperCase()})),"E007F"),[m.f.ChineseCN,m.f.ChineseSimp].includes(t.language)&&"TW"===e.code&&(i=["1F3F4"]),-1!==navigator.platform.indexOf("Win32")||-1!==navigator.platform.indexOf("Win64")?Object(O.jsx)("img",{src:"/uat-rail-map-generator"+"/images/flags/".concat(i.join("-"),".svg"),className:n.img,alt:"Flag of ".concat(e.code)}):Object(O.jsx)("span",{children:String.fromCodePoint.apply(String,Object(c.a)(i.map((function(e){return parseInt(e,16)}))))})}var I=n(10),S=Object(u.makeStyles)((function(e){return Object(u.createStyles)({contentWrapper:Object(r.a)({display:"flex",overflow:"hidden",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},e.breakpoints.down("xs"),{flexDirection:"column"}),contentLeft:{maxWidth:280},contentControl:{flexGrow:0,flexShrink:0,display:"flex",flexDirection:"column",width:270},paperRoot:{maxWidth:250},listItemPaper:{justifyContent:"center"},iconRoot:{position:"absolute",color:e.palette.action.active},inputBaseRoot:{display:"block"},inputBaseInputZH:{textAlign:"center",fontSize:36,padding:0,paddingTop:6,height:45},inputBaseInputEN:{textAlign:"center",fontSize:18,padding:0,paddingBottom:6,height:"auto"},chipWrapper:{overflowX:"auto",display:"flex"},chipRoot:{borderRadius:4.5,height:32,lineHeight:"1rem",margin:2},chipLabel:{padding:"0 6px","& > span":{display:"block",textAlign:"center"},"& > span:first-child":{fontSize:"1rem"},"& > span:last-child":{lineHeight:"0.8rem"}}})})),T=function(e){var t=Object(l.useTranslation)().t,n=S();return Object(O.jsxs)(u.Dialog,{open:e.open,onClose:e.onClose,children:[Object(O.jsx)(u.DialogTitle,{children:t("colour.title")}),Object(O.jsxs)(u.DialogContent,{className:n.contentWrapper,children:[Object(O.jsxs)(u.List,{component:"div",disablePadding:!0,className:n.contentLeft,children:[Object(O.jsx)(L,{theme:e.theme,lineName:e.lineName,onUpdate:e.onUpdate}),Object(O.jsx)(u.Divider,{}),Object(O.jsx)(k,{onUpdate:e.onUpdate})]}),Object(O.jsx)("div",{className:n.contentControl,children:Object(O.jsx)(w,{theme:e.theme,onUpdate:e.onUpdate})})]}),Object(O.jsx)(u.DialogActions,{children:Object(O.jsx)(u.Button,{onClick:e.onClose,color:"primary",children:t("dialog.done")})})]})},L=function(e){var t=S(),n=function(t,n){var i=e.lineName.map((function(e,i){return i===n?t:e}));e.onUpdate("name",i)};return Object(O.jsx)(u.ListItem,{style:{justifyContent:"center"},children:Object(O.jsxs)(u.Paper,{className:t.paperRoot,style:{backgroundColor:e.theme[2]},children:[Object(O.jsx)(u.Icon,{className:t.iconRoot,children:"edit"}),Object(O.jsx)(u.InputBase,{value:e.lineName[0],classes:{root:t.inputBaseRoot,input:t.inputBaseInputZH},style:{color:e.theme[3]||m.h.white},onChange:function(e){return n(e.target.value,0)},autoFocus:!0}),Object(O.jsx)(u.InputBase,{value:e.lineName[1],classes:{root:t.inputBaseRoot,input:t.inputBaseInputEN},style:{color:e.theme[3]||m.h.white},onChange:function(e){return n(e.target.value,1)}})]})})},k=function(e){var t=Object(l.useTranslation)().t,n=S(),i=Object(I.useSelector)((function(e){return e.param.theme})),a=Object(I.useSelector)((function(e){return e.param.line_name})),r=Object(I.useSelector)((function(e){return e.param.stn_list})),s=Object(o.useMemo)((function(){return new Set(Object.values(r).reduce((function(e,t){var n=t.transfer.info;return e.concat.apply(e,Object(c.a)(n))}),[[].concat(Object(c.a)(i),Object(c.a)(a))]).map((function(e){return JSON.stringify(e)})).reverse())}),[]),j=Object(o.useMemo)((function(){return Object(c.a)(s).map((function(t,i){var a=JSON.parse(t),c=a.slice(4).map((function(e,t){return Object(O.jsx)("span",{style:{color:a[3]},children:e},t)}));return Object(O.jsx)(u.Chip,{onClick:function(){e.onUpdate("theme",a.slice(0,4)),e.onUpdate("name",a.slice(4))},style:{backgroundColor:a[2]},className:n.chipRoot,classes:{label:n.chipLabel},label:c},i)}))}),[]);return Object(O.jsx)(u.ListItem,{children:Object(O.jsx)(u.ListItemText,{primary:t("colour.recent"),secondary:j,secondaryTypographyProps:{component:"div"},classes:{secondary:n.chipWrapper}})})},w=function(e){var t=Object(l.useTranslation)().t,n=Object(o.useState)("other"===e.theme[0]?1:0),c=Object(a.a)(n,2),r=c[0],s=c[1],j=Object(O.jsxs)(u.Tabs,{value:r,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return s(t)},variant:"fullWidth",scrollButtons:"off",children:[Object(O.jsx)(u.Tab,{label:t("colour.palette"),style:{minWidth:"unset"}}),Object(O.jsx)(u.Tab,{label:t("colour.custom"),style:{minWidth:"unset"}})]}),d=function(t){switch(t){case 0:return Object(O.jsx)(g,Object(i.a)({},e));case 1:return Object(O.jsx)(x,Object(i.a)({},e));default:return Object(O.jsx)(O.Fragment,{})}}(r);return Object(O.jsxs)(O.Fragment,{children:[j,d]})};t.a=T}}]);
//# sourceMappingURL=panelDesign.6cfad6cd.chunk.js.map