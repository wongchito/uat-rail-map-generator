(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[79],{128:function(e,t,n){"use strict";n.r(t);var i=n(11),c=n(3),r=n(12),s=n(4),o=n(23),a=n(2),l=n(10),j=n(7),u=n(0),d=Object(s.makeStyles)((function(e){return Object(s.createStyles)({nestedList:{paddingLeft:e.spacing(5)}})}));t.default=function(){var e=Object(r.useTranslation)().t,t=Object(l.useDispatch)(),n=Object(l.useSelector)((function(e){return e.param.line_num})),i=Object(l.useSelector)((function(e){return e.param.psd_num})),a=Object(c.useContext)(o.a).dispatch;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(s.ListItem,{children:[Object(u.jsx)(s.ListItemIcon,{children:Object(u.jsx)(s.Icon,{children:"looks_one"})}),Object(u.jsx)(s.ListItemText,{primary:e("design.lineNum")}),Object(u.jsx)(s.TextField,{value:n,onChange:function(e){var n=e.target.value;a({type:"SET_LINE_NUM",num:n}),t(Object(j.M)(n))}})]}),Object(u.jsx)(s.Divider,{}),Object(u.jsxs)(s.ListItem,{children:[Object(u.jsx)(s.ListItemIcon,{children:Object(u.jsx)(s.Icon,{children:"looks_one"})}),Object(u.jsx)(s.ListItemText,{primary:e("design.psd")}),Object(u.jsx)(s.TextField,{value:i,onChange:function(e){var n=e.target.value;a({type:"SET_PSD_NUM",num:n}),t(Object(j.Q)(n))}})]}),Object(u.jsx)(s.Divider,{}),Object(u.jsx)(b,{}),Object(u.jsx)(s.Divider,{}),Object(u.jsx)(O,{})]})};var b=function(){var e=Object(r.useTranslation)().t,t=Object(l.useDispatch)(),n=Object(l.useSelector)((function(e){return e.param.info_panel_type})),i=Object(c.useContext)(o.a).dispatch;return Object(c.useMemo)((function(){return Object(u.jsxs)(s.ListItem,{children:[Object(u.jsx)(s.ListItemIcon,{children:Object(u.jsx)(s.Icon,{style:{transform:"rotate(180deg)"},children:"credit_card"})}),Object(u.jsx)(s.ListItemText,{primary:e("design.panelType.button")}),Object(u.jsx)(s.Select,{native:!0,value:n,onChange:function(e){var n=e.target.value;i({type:"SET_PANEL_TYPE",variant:n}),t(Object(j.O)(n))},style:{width:166},children:Object.values(a.i).map((function(t){return Object(u.jsx)("option",{value:t,children:e("design.panelType."+t)},t)}))})]})}),[n,e,i,t])},O=function(){var e=Object(r.useTranslation)().t,t=d(),n=Object(l.useDispatch)(),a=Object(c.useContext)(o.a).dispatch,b=Object(l.useSelector)((function(e){return e.param.notesGZMTR})),O=Object(c.useState)(!1),h=Object(i.a)(O,2),m=h[0],g=h[1],T=Object(c.useState)(!1),v=Object(i.a)(T,2),f=v[0],y=v[1],I=Object(c.useState)(0),L=Object(i.a)(I,2),C=L[0],S=L[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(s.ListItem,{button:!0,onClick:function(){return g((function(e){return!e}))},children:[Object(u.jsx)(s.ListItemIcon,{children:Object(u.jsx)(s.Icon,{children:"notes"})}),Object(u.jsx)(s.ListItemText,{primary:e("design.notesGZMTR.text")}),m?Object(u.jsx)(s.Icon,{color:"action",children:"expand_less"}):Object(u.jsx)(s.Icon,{color:"action",children:"expand_more"})]}),Object(u.jsx)(s.Collapse,{in:m,unmountOnExit:!0,children:Object(u.jsxs)(s.List,{component:"div",disablePadding:!0,className:t.nestedList,children:[b.map((function(e,t){return Object(u.jsx)(x,{idx:t,onEdit:(n=t,function(){S(n),y(!0)})},t);var n})),Object(u.jsx)(s.ListItem,{children:Object(u.jsx)(s.ListItemText,{disableTypography:!0,children:Object(u.jsx)(s.Typography,{color:"primary",style:{cursor:"pointer"},onClick:function(){S(b.length),a({type:"ADD_NOTE_GZMTR"}),n(Object(j.w)()),y(!0)},children:e("design.notesGZMTR.addNote")})})}),f&&Object(u.jsx)(p,{open:f,onClose:function(){return y(!1)},idx:C})]})})]})},x=function(e){var t=Object(r.useTranslation)().t,n=Object(l.useDispatch)(),a=Object(c.useContext)(o.a).dispatch,d=Object(l.useSelector)((function(e){return e.param.notesGZMTR}))[e.idx],b=Object(c.useState)(null),O=Object(i.a)(b,2),x=O[0],p=O[1],h=function(){p(null),e.onEdit()},m=function(t){return function(i,c){if("number"===typeof c){var r=d.map((function(e,n){return n===t?c:e}));a({type:"UPDATE_NOTE_GZMTR",idx:e.idx,note:r}),n(Object(j.Z)(e.idx,r))}}},g=function(t,i){var c=d.map((function(e,t){return 4===t?i:e}));a({type:"UPDATE_NOTE_GZMTR",idx:e.idx,note:c}),n(Object(j.Z)(e.idx,c))},T=function(){p(null),a({type:"REMOVE_NOTE_GZMTR",idx:e.idx}),n(Object(j.C)(e.idx))};return Object(c.useMemo)((function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(s.ListItem,{children:[Object(u.jsx)(s.ListItemText,{primary:d[0],secondary:d[1],style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),Object(u.jsxs)(s.ListItemSecondaryAction,{children:[Object(u.jsx)(s.IconButton,{size:"small",onClick:function(e){return p(e.currentTarget)},children:Object(u.jsx)(s.Icon,{children:"more_vert"})}),Object(u.jsxs)(s.Menu,{anchorEl:x,open:Boolean(x),onClose:function(){return p(null)},children:[Object(u.jsx)(s.MenuItem,{onClick:h,children:t("design.notesGZMTR.edit")}),Object(u.jsx)(s.ListItem,{component:"div",children:Object(u.jsx)(s.Slider,{value:d[2],onChange:m(2),step:.01,marks:[{value:0,label:t("layout.directionGZ.left")},{value:100,label:t("layout.directionGZ.right")}],style:{width:200,marginLeft:5,marginRight:5},valueLabelDisplay:"auto"})}),Object(u.jsx)(s.ListItem,{children:Object(u.jsx)(s.Slider,{value:d[3],onChange:m(3),step:.01,marks:[{value:0,label:t("layout.directionGZ.top")},{value:100,label:t("layout.directionGZ.bottom")}],style:{width:200,marginLeft:5,marginRight:5},valueLabelDisplay:"auto"})}),Object(u.jsxs)(s.ListItem,{children:[Object(u.jsx)(s.ListItemText,{primary:t("design.notesGZMTR.border")}),Object(u.jsx)(s.ListItemSecondaryAction,{children:Object(u.jsx)(s.Switch,{edge:"end",color:"primary",checked:d[4],onChange:g})})]}),Object(u.jsx)(s.MenuItem,{onClick:T,children:t("design.notesGZMTR.remove")})]})]})]}),Object(u.jsx)(s.Divider,{variant:"middle"})]})}),[d.toString(),x])},p=function(e){var t=Object(r.useTranslation)().t,n=Object(l.useDispatch)(),a=Object(c.useContext)(o.a).dispatch,d=Object(l.useSelector)((function(e){return e.param.notesGZMTR}))[e.idx]||["","",0,0,!1],b=Object(c.useState)(d[0]||""),O=Object(i.a)(b,2),x=O[0],p=O[1],h=Object(c.useState)(d[1]||""),m=Object(i.a)(h,2),g=m[0],T=m[1],v=function(){var t=[x,g,d[2],d[3],d[4]];a({type:"UPDATE_NOTE_GZMTR",idx:e.idx,note:t}),n(Object(j.Z)(e.idx,t)),e.onClose()};return Object(c.useMemo)((function(){return Object(u.jsxs)(s.Dialog,{open:!0,onClose:e.onClose,children:[Object(u.jsx)(s.DialogTitle,{children:t("design.notesGZMTR.editNote")}),Object(u.jsxs)(s.DialogContent,{children:[Object(u.jsx)(s.TextField,{variant:"outlined",label:t("editor.zh"),margin:"dense",multiline:!0,autoFocus:!0,value:x,onChange:function(e){return p(e.target.value)},style:{width:"100%"},helperText:t("editor.enterToWrap")}),Object(u.jsx)(s.TextField,{variant:"outlined",label:t("editor.en"),margin:"dense",multiline:!0,value:g,onChange:function(e){return T(e.target.value)},style:{width:"100%"},helperText:t("editor.enterToWrap")})]}),Object(u.jsx)(s.DialogActions,{children:Object(u.jsx)(s.Button,{variant:"contained",onClick:v,color:"primary",children:t("dialog.done")})})]})}),[x,g])}}}]);
//# sourceMappingURL=panelDesignGZMTR.b518fbb8.chunk.js.map