(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[114],{349:function(e,t,n){"use strict";n.r(t);var c=n(30),a=n(0),r=n(137),i=n(157),j=n(178),o=n(132),s=n(333),l=n(167),b=n(334),u=n(358),d=n(170),O=n(357),x=n(251),h=n(168),p=n(163),m=n(338),f=n(166),g=n(138),v=n(169),y=n(370),C=n(250),T=n(363),k=n(335),G=n(336),Z=n(337),M=n(312),R=n(6),w=n(21),_=n(14),S=n(2),L=Object(i.a)((function(e){return Object(j.a)({nestedList:{paddingLeft:e.spacing(5)}})}));t.default=function(){var e=Object(r.a)().t,t=Object(w.b)(),n=Object(w.c)((function(e){return e.param.line_num})),c=Object(w.c)((function(e){return e.param.psd_num}));return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(o.a,{children:[Object(S.jsx)(s.a,{children:Object(S.jsx)(l.a,{children:"looks_one"})}),Object(S.jsx)(b.a,{primary:e("design.lineNum")}),Object(S.jsx)(u.a,{value:n,onChange:function(e){var n=e.target.value;t(Object(_.N)(n))}})]}),Object(S.jsx)(d.a,{}),Object(S.jsxs)(o.a,{children:[Object(S.jsx)(s.a,{children:Object(S.jsx)(l.a,{children:"looks_one"})}),Object(S.jsx)(b.a,{primary:e("design.psd")}),Object(S.jsx)(u.a,{value:c,onChange:function(e){var n=e.target.value;t(Object(_.R)(n))}})]}),Object(S.jsx)(d.a,{}),Object(S.jsx)(N,{}),Object(S.jsx)(d.a,{}),Object(S.jsx)(E,{})]})};var N=function(){var e=Object(r.a)().t,t=Object(w.b)(),n=Object(w.c)((function(e){return e.param.info_panel_type}));return Object(a.useMemo)((function(){return Object(S.jsxs)(o.a,{children:[Object(S.jsx)(s.a,{children:Object(S.jsx)(l.a,{style:{transform:"rotate(180deg)"},children:"credit_card"})}),Object(S.jsx)(b.a,{primary:e("design.panelType.button")}),Object(S.jsx)(O.a,{native:!0,value:n,onChange:function(e){var n=e.target.value;t(Object(_.P)(n))},style:{width:166},children:Object.values(R.i).map((function(t){return Object(S.jsx)("option",{value:t,children:e("design.panelType."+t)},t)}))})]})}),[n,e,t])},E=function(){var e=Object(r.a)().t,t=L(),n=Object(w.b)(),i=Object(w.c)((function(e){return e.param.notesGZMTR})),j=Object(a.useState)(!1),u=Object(c.a)(j,2),d=u[0],O=u[1],m=Object(a.useState)(!1),f=Object(c.a)(m,2),g=f[0],v=f[1],y=Object(a.useState)(0),C=Object(c.a)(y,2),T=C[0],k=C[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(o.a,{button:!0,onClick:function(){return O((function(e){return!e}))},children:[Object(S.jsx)(s.a,{children:Object(S.jsx)(l.a,{children:"notes"})}),Object(S.jsx)(b.a,{primary:e("design.notesGZMTR.text")}),d?Object(S.jsx)(l.a,{color:"action",children:"expand_less"}):Object(S.jsx)(l.a,{color:"action",children:"expand_more"})]}),Object(S.jsx)(x.a,{in:d,unmountOnExit:!0,children:Object(S.jsxs)(h.a,{component:"div",disablePadding:!0,className:t.nestedList,children:[i.map((function(e,t){return Object(S.jsx)(F,{idx:t,onEdit:(n=t,function(){k(n),v(!0)})},t);var n})),Object(S.jsx)(o.a,{children:Object(S.jsx)(b.a,{disableTypography:!0,children:Object(S.jsx)(p.a,{color:"primary",style:{cursor:"pointer"},onClick:function(){k(i.length),n(Object(_.x)()),v(!0)},children:e("design.notesGZMTR.addNote")})})}),g&&Object(S.jsx)(D,{open:g,onClose:function(){return v(!1)},idx:T})]})})]})},F=function(e){var t=Object(r.a)().t,n=Object(w.b)(),i=Object(w.c)((function(e){return e.param.notesGZMTR}))[e.idx],j=Object(a.useState)(null),s=Object(c.a)(j,2),u=s[0],O=s[1],x=function(){O(null),e.onEdit()},h=function(t){return function(c,a){if("number"===typeof a){var r=i.map((function(e,n){return n===t?a:e}));n(Object(_.bb)(e.idx,r))}}},p=function(t,c){var a=i.map((function(e,t){return 4===t?c:e}));n(Object(_.bb)(e.idx,a))},T=function(){O(null),n(Object(_.D)(e.idx))};return Object(a.useMemo)((function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(o.a,{children:[Object(S.jsx)(b.a,{primary:i[0],secondary:i[1],style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),Object(S.jsxs)(m.a,{children:[Object(S.jsx)(f.a,{size:"small",onClick:function(e){return O(e.currentTarget)},children:Object(S.jsx)(l.a,{children:"more_vert"})}),Object(S.jsxs)(g.a,{anchorEl:u,open:Boolean(u),onClose:function(){return O(null)},children:[Object(S.jsx)(v.a,{onClick:x,children:t("design.notesGZMTR.edit")}),Object(S.jsx)(o.a,{component:"div",children:Object(S.jsx)(y.a,{value:i[2],onChange:h(2),step:.01,marks:[{value:0,label:t("layout.directionGZ.left")},{value:100,label:t("layout.directionGZ.right")}],style:{width:200,marginLeft:5,marginRight:5},valueLabelDisplay:"auto"})}),Object(S.jsx)(o.a,{children:Object(S.jsx)(y.a,{value:i[3],onChange:h(3),step:.01,marks:[{value:0,label:t("layout.directionGZ.top")},{value:100,label:t("layout.directionGZ.bottom")}],style:{width:200,marginLeft:5,marginRight:5},valueLabelDisplay:"auto"})}),Object(S.jsxs)(o.a,{children:[Object(S.jsx)(b.a,{primary:t("design.notesGZMTR.border")}),Object(S.jsx)(m.a,{children:Object(S.jsx)(C.a,{edge:"end",color:"primary",checked:i[4],onChange:p})})]}),Object(S.jsx)(v.a,{onClick:T,children:t("design.notesGZMTR.remove")})]})]})]}),Object(S.jsx)(d.a,{variant:"middle"})]})}),[i.toString(),u])},D=function(e){var t=Object(r.a)().t,n=Object(w.b)(),i=Object(w.c)((function(e){return e.param.notesGZMTR}))[e.idx]||["","",0,0,!1],j=Object(a.useState)(i[0]||""),o=Object(c.a)(j,2),s=o[0],l=o[1],b=Object(a.useState)(i[1]||""),d=Object(c.a)(b,2),O=d[0],x=d[1],h=function(){var t=[s,O,i[2],i[3],i[4]];n(Object(_.bb)(e.idx,t)),e.onClose()};return Object(a.useMemo)((function(){return Object(S.jsxs)(T.a,{open:!0,onClose:e.onClose,children:[Object(S.jsx)(k.a,{children:t("design.notesGZMTR.editNote")}),Object(S.jsxs)(G.a,{children:[Object(S.jsx)(u.a,{variant:"outlined",label:t("editor.zh"),margin:"dense",multiline:!0,autoFocus:!0,value:s,onChange:function(e){return l(e.target.value)},style:{width:"100%"},helperText:t("editor.enterToWrap")}),Object(S.jsx)(u.a,{variant:"outlined",label:t("editor.en"),margin:"dense",multiline:!0,value:O,onChange:function(e){return x(e.target.value)},style:{width:"100%"},helperText:t("editor.enterToWrap")})]}),Object(S.jsx)(Z.a,{children:Object(S.jsx)(M.a,{variant:"contained",onClick:h,color:"primary",children:t("dialog.done")})})]})}),[s,O])}}}]);
//# sourceMappingURL=panelDesignGZMTR.02381beb.chunk.js.map