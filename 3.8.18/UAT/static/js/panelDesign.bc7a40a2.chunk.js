(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[74],{124:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),i=n(4),c=n(6),m=n(103),o=n(5),u=Object(l.makeStyles)((function(e){return Object(l.createStyles)({dividerVertical:{margin:e.spacing(0,2)},nestedList:{paddingLeft:e.spacing(5)}})})),s=function(){var e=Object(c.useTranslation)().t,t=Object(a.useContext)(o.a).rmgStyle,n=r.a.useContext(o.b),u=n.param,s=n.dispatch,f=r.a.useState(!1),g=Object(i.a)(f,2),b=g[0],I=g[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.ListItem,{button:!0,onClick:function(){return I(!0)}},r.a.createElement(l.ListItemIcon,null,r.a.createElement(l.Icon,null,"color_lens")),r.a.createElement(l.ListItemText,{primary:e("design.theme"),secondary:r.a.createElement("span",{style:{backgroundColor:u.theme[2],color:u.theme[3],padding:".1rem .3rem"}},Object.values(u.line_name).join())}),r.a.createElement(l.Icon,{color:"action"},"arrow_right")),r.a.createElement(m.a,{open:b,theme:u.theme,lineName:u.line_name,onUpdate:function(e,t){"name"===e&&s({type:"SET_LINE_NAME",name:Object.values(t)}),"theme"===e&&s({type:"SET_THEME",theme:t})},onClose:function(){return I(!1)}}),r.a.createElement(l.Divider,null),r.a.createElement(E,null),r.a.createElement(l.Divider,null),"shmetro"===t?r.a.createElement(p,null):r.a.createElement(d,null))},E=function(){var e=Object(c.useTranslation)().t,t=u(),n=r.a.useContext(o.b),a=n.param,i=n.dispatch;return r.a.useMemo((function(){return r.a.createElement(l.ListItem,null,r.a.createElement(l.ListItemIcon,null,r.a.createElement(l.Icon,null,"directions")),r.a.createElement(l.ListItemText,{primary:e("design.direction.button"),secondary:e("design.direction."+a.direction)}),r.a.createElement(l.Divider,{orientation:"vertical",flexItem:!0,className:t.dividerVertical}),r.a.createElement(l.Button,{variant:"outlined",color:"primary",onClick:function(){return i({type:"SET_DIRECTION"})}},e("design.direction.switch")))}),[t.dividerVertical,a.direction])},d=function(){var e=Object(c.useTranslation)().t,t=r.a.useContext(o.b),n=t.param,a=t.dispatch;return r.a.useMemo((function(){return r.a.createElement(l.ListItem,null,r.a.createElement(l.ListItemIcon,null,r.a.createElement(l.Icon,null,"looks_one")),r.a.createElement(l.ListItemText,{primary:e("design.platform")}),r.a.createElement(l.TextField,{value:n.platform_num,onChange:function(e){return a({type:"SET_PLATFORM",platform:e.target.value})}}))}),[n.platform_num])},p=function(){var e=Object(c.useTranslation)().t,t=u(),n=Object(a.useContext)(o.b),i=n.param,m=n.dispatch,s=function(e,t){m(t?{type:"SET_PLATFORM",platform:""}:{type:"SET_PLATFORM",platform:!1})};return Object(a.useMemo)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.ListItem,null,r.a.createElement(l.ListItemIcon,null,r.a.createElement(l.Icon,null,"looks_one")),r.a.createElement(l.ListItemText,{primary:e("design.platform")}),r.a.createElement(l.ListItemSecondaryAction,null,r.a.createElement(l.Switch,{color:"primary",checked:!1!==i.platform_num,onChange:s}))),r.a.createElement(l.Collapse,{in:!1!==i.platform_num,unmountOnExit:!0},r.a.createElement(l.List,{component:"div",disablePadding:!0,className:t.nestedList},r.a.createElement(l.ListItem,null,r.a.createElement(l.TextField,{placeholder:e("design.platform"),value:i.platform_num,onChange:function(e){return m({type:"SET_PLATFORM",platform:e.target.value})}})))))}),[i.platform_num,t.nestedList])},f=r.a.lazy((function(){return n.e(76).then(n.bind(null,113))})),g=r.a.lazy((function(){return n.e(75).then(n.bind(null,114))})),b=function(){var e=Object(a.useContext)(o.a).rmgStyle;return r.a.createElement(l.Grid,{container:!0,spacing:3,justify:"center",alignItems:"flex-start"},r.a.createElement(l.Grid,{item:!0,xs:12,sm:10,md:7,lg:5},r.a.createElement(l.Paper,null,r.a.createElement(l.List,{component:"div",disablePadding:!0},r.a.createElement(s,null),"mtr"===e&&r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(l.LinearProgress,null)},r.a.createElement(l.Divider,null),r.a.createElement(f,null)),"gzmtr"===e&&r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(l.LinearProgress,null)},r.a.createElement(l.Divider,null),r.a.createElement(g,null))))))};t.default=b}}]);
//# sourceMappingURL=panelDesign.bc7a40a2.chunk.js.map