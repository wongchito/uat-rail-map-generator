(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[73],{120:function(e,t,n){"use strict";n.r(t);var i=n(8),c=n(3),r=n(11),s=n(4),o=n(15),a=n(5),l=n(1),j=Object(s.makeStyles)((function(e){return Object(s.createStyles)({nestedList:{paddingLeft:e.spacing(5)}})}));t.default=function(){var e=Object(r.useTranslation)().t,t=Object(c.useContext)(o.a),n=t.param,i=t.dispatch;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(s.ListItem,{children:[Object(l.jsx)(s.ListItemIcon,{children:Object(l.jsx)(s.Icon,{children:"looks_one"})}),Object(l.jsx)(s.ListItemText,{primary:e("design.lineNum")}),Object(l.jsx)(s.TextField,{value:n.line_num,onChange:function(e){return i({type:"SET_LINE_NUM",num:e.target.value})}})]}),Object(l.jsx)(s.Divider,{}),Object(l.jsxs)(s.ListItem,{children:[Object(l.jsx)(s.ListItemIcon,{children:Object(l.jsx)(s.Icon,{children:"looks_one"})}),Object(l.jsx)(s.ListItemText,{primary:e("design.psd")}),Object(l.jsx)(s.TextField,{value:n.psd_num,onChange:function(e){return i({type:"SET_PSD_NUM",num:e.target.value})}})]}),Object(l.jsx)(s.Divider,{}),Object(l.jsx)(d,{}),Object(l.jsx)(s.Divider,{}),Object(l.jsx)(u,{})]})};var d=function(){var e=Object(r.useTranslation)().t,t=Object(c.useContext)(o.a),n=t.param,i=t.dispatch;return Object(c.useMemo)((function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(s.ListItem,{children:[Object(l.jsx)(s.ListItemIcon,{children:Object(l.jsx)(s.Icon,{style:{transform:"rotate(180deg)"},children:"credit_card"})}),Object(l.jsx)(s.ListItemText,{primary:e("design.panelType.button")}),Object(l.jsx)(s.Select,{native:!0,value:n.info_panel_type,onChange:function(e){return i({type:"SET_PANEL_TYPE",variant:e.target.value})},style:{width:166},children:a.d.map((function(t){return Object(l.jsx)("option",{value:t,children:e("design.panelType."+t)},t)}))})]})})}),[n.info_panel_type])},u=function(){var e=Object(r.useTranslation)().t,t=j(),n=Object(c.useContext)(o.a),a=n.param,d=n.dispatch,u=Object(c.useState)(!1),O=Object(i.a)(u,2),m=O[0],p=O[1],h=Object(c.useState)(!1),T=Object(i.a)(h,2),g=T[0],y=T[1],f=Object(c.useState)(0),v=Object(i.a)(f,2),I=v[0],L=v[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(s.ListItem,{button:!0,onClick:function(){return p((function(e){return!e}))},children:[Object(l.jsx)(s.ListItemIcon,{children:Object(l.jsx)(s.Icon,{children:"notes"})}),Object(l.jsx)(s.ListItemText,{primary:e("design.notesGZMTR.text")}),m?Object(l.jsx)(s.Icon,{color:"action",children:"expand_less"}):Object(l.jsx)(s.Icon,{color:"action",children:"expand_more"})]}),Object(l.jsx)(s.Collapse,{in:m,unmountOnExit:!0,children:Object(l.jsxs)(s.List,{component:"div",disablePadding:!0,className:t.nestedList,children:[a.notesGZMTR.map((function(e,t){return Object(l.jsx)(b,{idx:t,onEdit:(n=t,function(){L(n),y(!0)})},t);var n})),Object(l.jsx)(s.ListItem,{children:Object(l.jsx)(s.ListItemText,{disableTypography:!0,children:Object(l.jsx)(s.Typography,{color:"primary",style:{cursor:"pointer"},onClick:function(){L(a.notesGZMTR.length),d({type:"ADD_NOTE_GZMTR"}),y(!0)},children:e("design.notesGZMTR.addNote")})})}),g&&Object(l.jsx)(x,{open:g,onClose:function(){return y(!1)},idx:I})]})})]})},b=function(e){var t=Object(r.useTranslation)().t,n=Object(c.useContext)(o.a),a=n.param,j=n.dispatch,d=Object(c.useState)(null),u=Object(i.a)(d,2),b=u[0],x=u[1],O=function(){x(null),e.onEdit()},m=function(t){return function(n,i){return"number"===typeof i&&j({type:"UPDATE_NOTE_GZMTR",idx:e.idx,note:a.notesGZMTR[e.idx].map((function(e,n){return n===t?i:e}))})}},p=function(){x(null),j({type:"REMOVE_NOTE_GZMTR",idx:e.idx})};return Object(c.useMemo)((function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(s.ListItem,{children:[Object(l.jsx)(s.ListItemText,{primary:a.notesGZMTR[e.idx][0],secondary:a.notesGZMTR[e.idx][1],style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),Object(l.jsxs)(s.ListItemSecondaryAction,{children:[Object(l.jsx)(s.IconButton,{size:"small",onClick:function(e){return x(e.currentTarget)},children:Object(l.jsx)(s.Icon,{children:"more_vert"})}),Object(l.jsxs)(s.Menu,{anchorEl:b,open:Boolean(b),onClose:function(){return x(null)},children:[Object(l.jsx)(s.MenuItem,{onClick:O,children:t("design.notesGZMTR.edit")}),Object(l.jsx)(s.ListItem,{component:"div",children:Object(l.jsx)(s.Slider,{value:a.notesGZMTR[e.idx][2],onChange:m(2),step:.01,marks:[{value:0,label:t("layout.directionGZ.left")},{value:100,label:t("layout.directionGZ.right")}],style:{width:200,marginLeft:5,marginRight:5},valueLabelDisplay:"auto"})}),Object(l.jsx)(s.ListItem,{children:Object(l.jsx)(s.Slider,{value:a.notesGZMTR[e.idx][3],onChange:m(3),step:.01,marks:[{value:0,label:t("layout.directionGZ.top")},{value:100,label:t("layout.directionGZ.bottom")}],style:{width:200,marginLeft:5,marginRight:5},valueLabelDisplay:"auto"})}),Object(l.jsxs)(s.ListItem,{children:[Object(l.jsx)(s.ListItemText,{primary:t("design.notesGZMTR.border")}),Object(l.jsx)(s.ListItemSecondaryAction,{children:Object(l.jsx)(s.Switch,{edge:"end",color:"primary",checked:a.notesGZMTR[e.idx][4],onChange:function(t,n){return j({type:"UPDATE_NOTE_GZMTR",idx:e.idx,note:a.notesGZMTR[e.idx].map((function(e,t){return 4===t?n:e}))})}})})]}),Object(l.jsx)(s.MenuItem,{onClick:p,children:t("design.notesGZMTR.remove")})]})]})]}),Object(l.jsx)(s.Divider,{variant:"middle"})]})}),[a.notesGZMTR[e.idx].toString(),b])},x=function(e){var t=Object(r.useTranslation)().t,n=Object(c.useContext)(o.a),a=n.param,j=n.dispatch,d=a.notesGZMTR[e.idx]||["","",0,0],u=Object(c.useState)(d[0]||""),b=Object(i.a)(u,2),x=b[0],O=b[1],m=Object(c.useState)(d[1]||""),p=Object(i.a)(m,2),h=p[0],T=p[1],g=function(){j({type:"UPDATE_NOTE_GZMTR",idx:e.idx,note:[x,h,d[2],d[3],d[4]]}),e.onClose()};return Object(c.useMemo)((function(){return Object(l.jsxs)(s.Dialog,{open:!0,onClose:e.onClose,children:[Object(l.jsx)(s.DialogTitle,{children:t("design.notesGZMTR.editNote")}),Object(l.jsxs)(s.DialogContent,{children:[Object(l.jsx)(s.TextField,{variant:"outlined",label:t("editor.zh"),margin:"dense",multiline:!0,autoFocus:!0,value:x,onChange:function(e){return O(e.target.value)},style:{width:"100%"},helperText:t("editor.enterToWrap")}),Object(l.jsx)(s.TextField,{variant:"outlined",label:t("editor.en"),margin:"dense",multiline:!0,value:h,onChange:function(e){return T(e.target.value)},style:{width:"100%"},helperText:t("editor.enterToWrap")})]}),Object(l.jsx)(s.DialogActions,{children:Object(l.jsx)(s.Button,{variant:"contained",onClick:g,color:"primary",children:t("dialog.done")})})]})}),[x,h])}}}]);
//# sourceMappingURL=panelDesignGZMTR.2b947a38.chunk.js.map