(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[78],{287:function(e,t,n){"use strict";n.r(t);var a=n(17),c=n(0),i=n(119),r=n(138),s=n(158),o=n(114),j=n(275),l=n(148),d=n(276),u=n(294),b=n(151),O=n(293),x=n(218),h=n(149),p=n(144),m=n(280),g=n(147),f=n(120),T=n(150),v=n(306),y=n(258),M=n(300),_=n(277),G=n(278),Z=n(279),R=n(256),C=n(28),E=n(52),k=n(3),N=Object(r.a)((function(e){return Object(s.a)({nestedList:{paddingLeft:e.spacing(5)}})}));t.default=function(){var e=Object(i.a)().t,t=Object(c.useContext)(C.b),n=t.param,a=t.dispatch;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(o.a,{children:[Object(k.jsx)(j.a,{children:Object(k.jsx)(l.a,{children:"looks_one"})}),Object(k.jsx)(d.a,{primary:e("design.lineNum")}),Object(k.jsx)(u.a,{value:n.line_num,onChange:function(e){return a({type:"SET_LINE_NUM",num:e.target.value})}})]}),Object(k.jsx)(b.a,{}),Object(k.jsxs)(o.a,{children:[Object(k.jsx)(j.a,{children:Object(k.jsx)(l.a,{children:"looks_one"})}),Object(k.jsx)(d.a,{primary:e("design.psd")}),Object(k.jsx)(u.a,{value:n.psd_num,onChange:function(e){return a({type:"SET_PSD_NUM",num:e.target.value})}})]}),Object(k.jsx)(b.a,{}),Object(k.jsx)(S,{}),Object(k.jsx)(b.a,{}),Object(k.jsx)(w,{})]})};var S=function(){var e=Object(i.a)().t,t=Object(c.useContext)(C.b),n=t.param,a=t.dispatch;return Object(c.useMemo)((function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(o.a,{children:[Object(k.jsx)(j.a,{children:Object(k.jsx)(l.a,{style:{transform:"rotate(180deg)"},children:"credit_card"})}),Object(k.jsx)(d.a,{primary:e("design.panelType.button")}),Object(k.jsx)(O.a,{native:!0,value:n.info_panel_type,onChange:function(e){return a({type:"SET_PANEL_TYPE",variant:e.target.value})},style:{width:166},children:E.a.map((function(t){return Object(k.jsx)("option",{value:t,children:e("design.panelType."+t)},t)}))})]})})}),[n.info_panel_type])},w=function(){var e=Object(i.a)().t,t=N(),n=Object(c.useContext)(C.b),r=n.param,s=n.dispatch,u=Object(c.useState)(!1),b=Object(a.a)(u,2),O=b[0],m=b[1],g=Object(c.useState)(!1),f=Object(a.a)(g,2),T=f[0],v=f[1],y=Object(c.useState)(0),M=Object(a.a)(y,2),_=M[0],G=M[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(o.a,{button:!0,onClick:function(){return m((function(e){return!e}))},children:[Object(k.jsx)(j.a,{children:Object(k.jsx)(l.a,{children:"notes"})}),Object(k.jsx)(d.a,{primary:e("design.notesGZMTR.text")}),O?Object(k.jsx)(l.a,{color:"action",children:"expand_less"}):Object(k.jsx)(l.a,{color:"action",children:"expand_more"})]}),Object(k.jsx)(x.a,{in:O,unmountOnExit:!0,children:Object(k.jsxs)(h.a,{component:"div",disablePadding:!0,className:t.nestedList,children:[r.notesGZMTR.map((function(e,t){return Object(k.jsx)(L,{idx:t,onEdit:(n=t,function(){G(n),v(!0)})},t);var n})),Object(k.jsx)(o.a,{children:Object(k.jsx)(d.a,{disableTypography:!0,children:Object(k.jsx)(p.a,{color:"primary",style:{cursor:"pointer"},onClick:function(){G(r.notesGZMTR.length),s({type:"ADD_NOTE_GZMTR"}),v(!0)},children:e("design.notesGZMTR.addNote")})})}),T&&Object(k.jsx)(D,{open:T,onClose:function(){return v(!1)},idx:_})]})})]})},L=function(e){var t=Object(i.a)().t,n=Object(c.useContext)(C.b),r=n.param,s=n.dispatch,j=Object(c.useState)(null),u=Object(a.a)(j,2),O=u[0],x=u[1],h=function(){x(null),e.onEdit()},p=function(t){return function(n,a){return"number"===typeof a&&s({type:"UPDATE_NOTE_GZMTR",idx:e.idx,note:r.notesGZMTR[e.idx].map((function(e,n){return n===t?a:e}))})}},M=function(){x(null),s({type:"REMOVE_NOTE_GZMTR",idx:e.idx})};return Object(c.useMemo)((function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(o.a,{children:[Object(k.jsx)(d.a,{primary:r.notesGZMTR[e.idx][0],secondary:r.notesGZMTR[e.idx][1],style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),Object(k.jsxs)(m.a,{children:[Object(k.jsx)(g.a,{size:"small",onClick:function(e){return x(e.currentTarget)},children:Object(k.jsx)(l.a,{children:"more_vert"})}),Object(k.jsxs)(f.a,{anchorEl:O,open:Boolean(O),onClose:function(){return x(null)},children:[Object(k.jsx)(T.a,{onClick:h,children:t("design.notesGZMTR.edit")}),Object(k.jsx)(o.a,{component:"div",children:Object(k.jsx)(v.a,{value:r.notesGZMTR[e.idx][2],onChange:p(2),step:.01,marks:[{value:0,label:t("layout.directionGZ.left")},{value:100,label:t("layout.directionGZ.right")}],style:{width:200,marginLeft:5,marginRight:5},valueLabelDisplay:"auto"})}),Object(k.jsx)(o.a,{children:Object(k.jsx)(v.a,{value:r.notesGZMTR[e.idx][3],onChange:p(3),step:.01,marks:[{value:0,label:t("layout.directionGZ.top")},{value:100,label:t("layout.directionGZ.bottom")}],style:{width:200,marginLeft:5,marginRight:5},valueLabelDisplay:"auto"})}),Object(k.jsxs)(o.a,{children:[Object(k.jsx)(d.a,{primary:t("design.notesGZMTR.border")}),Object(k.jsx)(m.a,{children:Object(k.jsx)(y.a,{edge:"end",color:"primary",checked:r.notesGZMTR[e.idx][4],onChange:function(t,n){return s({type:"UPDATE_NOTE_GZMTR",idx:e.idx,note:r.notesGZMTR[e.idx].map((function(e,t){return 4===t?n:e}))})}})})]}),Object(k.jsx)(T.a,{onClick:M,children:t("design.notesGZMTR.remove")})]})]})]}),Object(k.jsx)(b.a,{variant:"middle"})]})}),[r.notesGZMTR[e.idx].toString(),O])},D=function(e){var t=Object(i.a)().t,n=Object(c.useContext)(C.b),r=n.param,s=n.dispatch,o=r.notesGZMTR[e.idx]||["","",0,0],j=Object(c.useState)(o[0]||""),l=Object(a.a)(j,2),d=l[0],b=l[1],O=Object(c.useState)(o[1]||""),x=Object(a.a)(O,2),h=x[0],p=x[1],m=function(){s({type:"UPDATE_NOTE_GZMTR",idx:e.idx,note:[d,h,o[2],o[3],o[4]]}),e.onClose()};return Object(c.useMemo)((function(){return Object(k.jsxs)(M.a,{open:!0,onClose:e.onClose,children:[Object(k.jsx)(_.a,{children:t("design.notesGZMTR.editNote")}),Object(k.jsxs)(G.a,{children:[Object(k.jsx)(u.a,{variant:"outlined",label:t("editor.zh"),margin:"dense",multiline:!0,autoFocus:!0,value:d,onChange:function(e){return b(e.target.value)},style:{width:"100%"},helperText:t("editor.enterToWrap")}),Object(k.jsx)(u.a,{variant:"outlined",label:t("editor.en"),margin:"dense",multiline:!0,value:h,onChange:function(e){return p(e.target.value)},style:{width:"100%"},helperText:t("editor.enterToWrap")})]}),Object(k.jsx)(Z.a,{children:Object(k.jsx)(R.a,{variant:"contained",onClick:m,color:"primary",children:t("dialog.done")})})]})}),[d,h])}}}]);
//# sourceMappingURL=panelDesignGZMTR.37e79462.chunk.js.map