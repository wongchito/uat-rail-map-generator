(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[98],{148:function(e,t,n){"use strict";n.r(t);var c=n(11),i=n(5),r=n(13),s=n(3),o=n(2),a=n(8),l=n(7),j=n(0),u=Object(s.makeStyles)((function(e){return Object(s.createStyles)({nestedList:{paddingLeft:e.spacing(5)}})}));t.default=function(){var e=Object(r.useTranslation)().t,t=Object(a.b)(),n=Object(a.c)((function(e){return e.param.line_num})),c=Object(a.c)((function(e){return e.param.psd_num}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(s.ListItem,{children:[Object(j.jsx)(s.ListItemIcon,{children:Object(j.jsx)(s.Icon,{children:"looks_one"})}),Object(j.jsx)(s.ListItemText,{primary:e("design.lineNum")}),Object(j.jsx)(s.TextField,{value:n,onChange:function(e){var n=e.target.value;t(Object(l.N)(n))}})]}),Object(j.jsx)(s.Divider,{}),Object(j.jsxs)(s.ListItem,{children:[Object(j.jsx)(s.ListItemIcon,{children:Object(j.jsx)(s.Icon,{children:"looks_one"})}),Object(j.jsx)(s.ListItemText,{primary:e("design.psd")}),Object(j.jsx)(s.TextField,{value:c,onChange:function(e){var n=e.target.value;t(Object(l.R)(n))}})]}),Object(j.jsx)(s.Divider,{}),Object(j.jsx)(b,{}),Object(j.jsx)(s.Divider,{}),Object(j.jsx)(d,{})]})};var b=function(){var e=Object(r.useTranslation)().t,t=Object(a.b)(),n=Object(a.c)((function(e){return e.param.info_panel_type}));return Object(i.useMemo)((function(){return Object(j.jsxs)(s.ListItem,{children:[Object(j.jsx)(s.ListItemIcon,{children:Object(j.jsx)(s.Icon,{style:{transform:"rotate(180deg)"},children:"credit_card"})}),Object(j.jsx)(s.ListItemText,{primary:e("design.panelType.button")}),Object(j.jsx)(s.Select,{native:!0,value:n,onChange:function(e){var n=e.target.value;t(Object(l.P)(n))},style:{width:166},children:Object.values(o.i).map((function(t){return Object(j.jsx)("option",{value:t,children:e("design.panelType."+t)},t)}))})]})}),[n,e,t])},d=function(){var e=Object(r.useTranslation)().t,t=u(),n=Object(a.b)(),o=Object(a.c)((function(e){return e.param.notesGZMTR})),b=Object(i.useState)(!1),d=Object(c.a)(b,2),m=d[0],h=d[1],p=Object(i.useState)(!1),g=Object(c.a)(p,2),f=g[0],v=g[1],y=Object(i.useState)(0),I=Object(c.a)(y,2),T=I[0],L=I[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(s.ListItem,{button:!0,onClick:function(){return h((function(e){return!e}))},children:[Object(j.jsx)(s.ListItemIcon,{children:Object(j.jsx)(s.Icon,{children:"notes"})}),Object(j.jsx)(s.ListItemText,{primary:e("design.notesGZMTR.text")}),m?Object(j.jsx)(s.Icon,{color:"action",children:"expand_less"}):Object(j.jsx)(s.Icon,{color:"action",children:"expand_more"})]}),Object(j.jsx)(s.Collapse,{in:m,unmountOnExit:!0,children:Object(j.jsxs)(s.List,{component:"div",disablePadding:!0,className:t.nestedList,children:[o.map((function(e,t){return Object(j.jsx)(O,{idx:t,onEdit:(n=t,function(){L(n),v(!0)})},t);var n})),Object(j.jsx)(s.ListItem,{children:Object(j.jsx)(s.ListItemText,{disableTypography:!0,children:Object(j.jsx)(s.Typography,{color:"primary",style:{cursor:"pointer"},onClick:function(){L(o.length),n(Object(l.x)()),v(!0)},children:e("design.notesGZMTR.addNote")})})}),f&&Object(j.jsx)(x,{open:f,onClose:function(){return v(!1)},idx:T})]})})]})},O=function(e){var t=Object(r.useTranslation)().t,n=Object(a.b)(),o=Object(a.c)((function(e){return e.param.notesGZMTR}))[e.idx],u=Object(i.useState)(null),b=Object(c.a)(u,2),d=b[0],O=b[1],x=function(){O(null),e.onEdit()},m=function(t){return function(c,i){if("number"===typeof i){var r=o.map((function(e,n){return n===t?i:e}));n(Object(l.bb)(e.idx,r))}}},h=function(t,c){var i=o.map((function(e,t){return 4===t?c:e}));n(Object(l.bb)(e.idx,i))},p=function(){O(null),n(Object(l.D)(e.idx))};return Object(i.useMemo)((function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(s.ListItem,{children:[Object(j.jsx)(s.ListItemText,{primary:o[0],secondary:o[1],style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),Object(j.jsxs)(s.ListItemSecondaryAction,{children:[Object(j.jsx)(s.IconButton,{size:"small",onClick:function(e){return O(e.currentTarget)},children:Object(j.jsx)(s.Icon,{children:"more_vert"})}),Object(j.jsxs)(s.Menu,{anchorEl:d,open:Boolean(d),onClose:function(){return O(null)},children:[Object(j.jsx)(s.MenuItem,{onClick:x,children:t("design.notesGZMTR.edit")}),Object(j.jsx)(s.ListItem,{component:"div",children:Object(j.jsx)(s.Slider,{value:o[2],onChange:m(2),step:.01,marks:[{value:0,label:t("layout.directionGZ.left")},{value:100,label:t("layout.directionGZ.right")}],style:{width:200,marginLeft:5,marginRight:5},valueLabelDisplay:"auto"})}),Object(j.jsx)(s.ListItem,{children:Object(j.jsx)(s.Slider,{value:o[3],onChange:m(3),step:.01,marks:[{value:0,label:t("layout.directionGZ.top")},{value:100,label:t("layout.directionGZ.bottom")}],style:{width:200,marginLeft:5,marginRight:5},valueLabelDisplay:"auto"})}),Object(j.jsxs)(s.ListItem,{children:[Object(j.jsx)(s.ListItemText,{primary:t("design.notesGZMTR.border")}),Object(j.jsx)(s.ListItemSecondaryAction,{children:Object(j.jsx)(s.Switch,{edge:"end",color:"primary",checked:o[4],onChange:h})})]}),Object(j.jsx)(s.MenuItem,{onClick:p,children:t("design.notesGZMTR.remove")})]})]})]}),Object(j.jsx)(s.Divider,{variant:"middle"})]})}),[o.toString(),d])},x=function(e){var t=Object(r.useTranslation)().t,n=Object(a.b)(),o=Object(a.c)((function(e){return e.param.notesGZMTR}))[e.idx]||["","",0,0,!1],u=Object(i.useState)(o[0]||""),b=Object(c.a)(u,2),d=b[0],O=b[1],x=Object(i.useState)(o[1]||""),m=Object(c.a)(x,2),h=m[0],p=m[1],g=function(){var t=[d,h,o[2],o[3],o[4]];n(Object(l.bb)(e.idx,t)),e.onClose()};return Object(i.useMemo)((function(){return Object(j.jsxs)(s.Dialog,{open:!0,onClose:e.onClose,children:[Object(j.jsx)(s.DialogTitle,{children:t("design.notesGZMTR.editNote")}),Object(j.jsxs)(s.DialogContent,{children:[Object(j.jsx)(s.TextField,{variant:"outlined",label:t("editor.zh"),margin:"dense",multiline:!0,autoFocus:!0,value:d,onChange:function(e){return O(e.target.value)},style:{width:"100%"},helperText:t("editor.enterToWrap")}),Object(j.jsx)(s.TextField,{variant:"outlined",label:t("editor.en"),margin:"dense",multiline:!0,value:h,onChange:function(e){return p(e.target.value)},style:{width:"100%"},helperText:t("editor.enterToWrap")})]}),Object(j.jsx)(s.DialogActions,{children:Object(j.jsx)(s.Button,{variant:"contained",onClick:g,color:"primary",children:t("dialog.done")})})]})}),[d,h])}}}]);
//# sourceMappingURL=panelDesignGZMTR.d1e2f121.chunk.js.map