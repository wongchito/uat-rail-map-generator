(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[75],{114:function(e,t,n){"use strict";n.r(t);var a=n(4),l=n(1),r=n.n(l),i=n(6),o=n(2),c=n(5),u=n(12),m=Object(o.makeStyles)((function(e){return Object(o.createStyles)({nestedList:{paddingLeft:e.spacing(5)}})}));t.default=function(){var e=Object(i.useTranslation)().t,t=Object(l.useContext)(c.b),n=t.param,a=t.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.ListItem,null,r.a.createElement(o.ListItemIcon,null,r.a.createElement(o.Icon,null,"looks_one")),r.a.createElement(o.ListItemText,{primary:e("design.lineNum")}),r.a.createElement(o.TextField,{value:n.line_num,onChange:function(e){return a({type:"SET_LINE_NUM",num:e.target.value})}})),r.a.createElement(o.Divider,null),r.a.createElement(o.ListItem,null,r.a.createElement(o.ListItemIcon,null,r.a.createElement(o.Icon,null,"looks_one")),r.a.createElement(o.ListItemText,{primary:e("design.psd")}),r.a.createElement(o.TextField,{value:n.psd_num,onChange:function(e){return a({type:"SET_PSD_NUM",num:e.target.value})}})),r.a.createElement(o.Divider,null),r.a.createElement(s,null),r.a.createElement(o.Divider,null),r.a.createElement(d,null))};var s=function(){var e=Object(i.useTranslation)().t,t=Object(l.useContext)(c.b),n=t.param,a=t.dispatch;return Object(l.useMemo)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.ListItem,null,r.a.createElement(o.ListItemIcon,null,r.a.createElement(o.Icon,{style:{transform:"rotate(180deg)"}},"credit_card")),r.a.createElement(o.ListItemText,{primary:e("design.panelType.button")}),r.a.createElement(o.Select,{native:!0,value:n.info_panel_type,onChange:function(e){return a({type:"SET_PANEL_TYPE",variant:e.target.value})},style:{width:166}},u.a.map((function(t){return r.a.createElement("option",{key:t,value:t},e("design.panelType."+t))})))))}),[n.info_panel_type])},d=function(){var e=Object(i.useTranslation)().t,t=m(),n=Object(l.useContext)(c.b),u=n.param,s=n.dispatch,d=Object(l.useState)(!1),T=Object(a.a)(d,2),g=T[0],b=T[1],y=Object(l.useState)(!1),f=Object(a.a)(y,2),v=f[0],x=f[1],I=Object(l.useState)(0),h=Object(a.a)(I,2),O=h[0],L=h[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.ListItem,{button:!0,onClick:function(){return b((function(e){return!e}))}},r.a.createElement(o.ListItemIcon,null,r.a.createElement(o.Icon,null,"notes")),r.a.createElement(o.ListItemText,{primary:e("design.notesGZMTR.text")}),g?r.a.createElement(o.Icon,{color:"action"},"expand_less"):r.a.createElement(o.Icon,{color:"action"},"expand_more")),r.a.createElement(o.Collapse,{in:g,unmountOnExit:!0},r.a.createElement(o.List,{component:"div",disablePadding:!0,className:t.nestedList},u.notesGZMTR.map((function(e,t){return r.a.createElement(E,{key:t,idx:t,onEdit:(n=t,function(){L(n),x(!0)})});var n})),r.a.createElement(o.ListItem,null,r.a.createElement(o.ListItemText,{disableTypography:!0},r.a.createElement(o.Typography,{color:"primary",style:{cursor:"pointer"},onClick:function(){L(u.notesGZMTR.length),s({type:"ADD_NOTE_GZMTR"}),x(!0)}},e("design.notesGZMTR.addNote")))),v&&r.a.createElement(p,{open:v,onClose:function(){return x(!1)},idx:O}))))},E=function(e){var t=Object(i.useTranslation)().t,n=Object(l.useContext)(c.b),u=n.param,m=n.dispatch,s=Object(l.useState)(null),d=Object(a.a)(s,2),E=d[0],p=d[1],T=function(){p(null),e.onEdit()},g=function(t){return function(n,a){return"number"===typeof a&&m({type:"UPDATE_NOTE_GZMTR",idx:e.idx,note:u.notesGZMTR[e.idx].map((function(e,n){return n===t?a:e}))})}},b=function(){p(null),m({type:"REMOVE_NOTE_GZMTR",idx:e.idx})};return Object(l.useMemo)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.ListItem,null,r.a.createElement(o.ListItemText,{primary:u.notesGZMTR[e.idx][0],secondary:u.notesGZMTR[e.idx][1],style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),r.a.createElement(o.ListItemSecondaryAction,null,r.a.createElement(o.IconButton,{size:"small",onClick:function(e){return p(e.currentTarget)}},r.a.createElement(o.Icon,null,"more_vert")),r.a.createElement(o.Menu,{anchorEl:E,open:Boolean(E),onClose:function(){return p(null)}},r.a.createElement(o.MenuItem,{onClick:T},t("design.notesGZMTR.edit")),r.a.createElement(o.ListItem,{component:"div"},r.a.createElement(o.Slider,{value:u.notesGZMTR[e.idx][2],onChange:g(2),step:.01,marks:[{value:0,label:t("layout.directionGZ.left")},{value:100,label:t("layout.directionGZ.right")}],style:{width:200,marginLeft:5,marginRight:5},valueLabelDisplay:"auto"})),r.a.createElement(o.ListItem,null,r.a.createElement(o.Slider,{value:u.notesGZMTR[e.idx][3],onChange:g(3),step:.01,marks:[{value:0,label:t("layout.directionGZ.top")},{value:100,label:t("layout.directionGZ.bottom")}],style:{width:200,marginLeft:5,marginRight:5},valueLabelDisplay:"auto"})),r.a.createElement(o.ListItem,null,r.a.createElement(o.ListItemText,{primary:t("design.notesGZMTR.border")}),r.a.createElement(o.ListItemSecondaryAction,null,r.a.createElement(o.Switch,{edge:"end",color:"primary",checked:u.notesGZMTR[e.idx][4],onChange:function(t,n){return m({type:"UPDATE_NOTE_GZMTR",idx:e.idx,note:u.notesGZMTR[e.idx].map((function(e,t){return 4===t?n:e}))})}}))),r.a.createElement(o.MenuItem,{onClick:b},t("design.notesGZMTR.remove"))))),r.a.createElement(o.Divider,{variant:"middle"}))}),[u.notesGZMTR[e.idx].toString(),E])},p=function(e){var t=Object(i.useTranslation)().t,n=Object(l.useContext)(c.b),u=n.param,m=n.dispatch,s=u.notesGZMTR[e.idx]||["","",0,0],d=Object(l.useState)(s[0]||""),E=Object(a.a)(d,2),p=E[0],T=E[1],g=Object(l.useState)(s[1]||""),b=Object(a.a)(g,2),y=b[0],f=b[1],v=function(){m({type:"UPDATE_NOTE_GZMTR",idx:e.idx,note:[p,y,s[2],s[3],s[4]]}),e.onClose()};return Object(l.useMemo)((function(){return r.a.createElement(o.Dialog,{open:!0,onClose:e.onClose},r.a.createElement(o.DialogTitle,null,t("design.notesGZMTR.editNote")),r.a.createElement(o.DialogContent,null,r.a.createElement(o.TextField,{variant:"outlined",label:t("editor.zh"),margin:"dense",multiline:!0,autoFocus:!0,value:p,onChange:function(e){return T(e.target.value)},style:{width:"100%"},helperText:t("editor.enterToWrap")}),r.a.createElement(o.TextField,{variant:"outlined",label:t("editor.en"),margin:"dense",multiline:!0,value:y,onChange:function(e){return f(e.target.value)},style:{width:"100%"},helperText:t("editor.enterToWrap")})),r.a.createElement(o.DialogActions,null,r.a.createElement(o.Button,{variant:"contained",onClick:v,color:"primary"},t("dialog.done"))))}),[p,y])}}}]);
//# sourceMappingURL=panelDesignGZMTR.1918d3eb.chunk.js.map