(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[75],{121:function(e,t,i){"use strict";i.r(t);var n=i(8),s=i(4),c=i.n(s),r=i(11),a=i(15),o=i(5),d=i(1),j=Object(o.makeStyles)((function(e){return Object(o.createStyles)({divider:{margin:e.spacing(0,2)},nested:{paddingLeft:e.spacing(5)},grid:{paddingLeft:e.spacing(8),paddingBottom:e.spacing(1),paddingRight:e.spacing(2),"& .MuiFormControl-root":{width:"100%"}}})}));t.default=Object(s.memo)((function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(o.Divider,{}),Object(d.jsx)(m,{})]})}));var l=function(){var e=Object(r.useTranslation)().t,t=j(),i=Object(s.useContext)(a.a),n=i.param,c=i.dispatch;return Object(s.useMemo)((function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(o.ListItem,{children:[Object(d.jsx)(o.ListItemIcon,{children:Object(d.jsx)(o.Icon,{children:"text_rotation_none"})}),Object(d.jsx)(o.ListItemText,{primary:e("design.txtFlip.text")}),Object(d.jsx)(o.ListItemSecondaryAction,{children:Object(d.jsx)(o.Switch,{edge:"end",color:"primary",checked:n.namePosMTR.isStagger,onChange:function(e,t){return c({type:"SET_TEXT_STAGGER",checked:t})}})})]}),Object(d.jsx)(o.List,{component:"div",disablePadding:!0,children:Object(d.jsxs)(o.ListItem,{className:t.nested,children:[Object(d.jsx)(o.ListItemText,{primary:e("design.txtFlip.flipText")}),Object(d.jsx)(o.Divider,{orientation:"vertical",flexItem:!0,className:t.divider}),Object(d.jsx)(o.Button,{variant:"outlined",color:"primary",onClick:function(){return c({type:"SET_TEXT_FLIP"})},children:e("design.txtFlip.flip")})]})})]})}),[n.namePosMTR.isStagger,t.nested,t.divider])},m=function(){var e=Object(r.useTranslation)().t,t=j(),i=c.a.useContext(a.a),l=i.param,m=i.dispatch,u=c.a.useState(l.customiseMTRDest.isLegacy||!1!==l.customiseMTRDest.terminal),x=Object(n.a)(u,2),b=x[0],O=x[1],g=function(e){return function(t){var i=!1!==l.customiseMTRDest.terminal&&l.customiseMTRDest.terminal.map((function(i,n){return n===e?t.target.value:i}));m({type:"SET_TERMINAL_OVERRIDE",terminal:i})}};return Object(s.useMemo)((function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(o.ListItem,{button:!0,onClick:function(){return O((function(e){return!e}))},children:[Object(d.jsx)(o.ListItemIcon,{children:Object(d.jsx)(o.Icon,{children:"text_fields"})}),Object(d.jsx)(o.ListItemText,{primary:e("design.MTRDest.button")}),b?Object(d.jsx)(o.Icon,{color:"action",children:"expand_less"}):Object(d.jsx)(o.Icon,{color:"action",children:"expand_more"})]}),Object(d.jsx)(o.Collapse,{in:b,children:Object(d.jsxs)(o.List,{component:"div",disablePadding:!0,children:[Object(d.jsxs)(o.ListItem,{className:t.nested,children:[Object(d.jsx)(o.ListItemText,{primary:e("design.MTRDest.legacy")}),Object(d.jsx)(o.ListItemSecondaryAction,{children:Object(d.jsx)(o.Switch,{color:"primary",edge:"end",onChange:function(e,t){return m({type:"SET_DEST_LEGACY",isLegacy:t})},checked:l.customiseMTRDest.isLegacy})})]}),Object(d.jsxs)(o.ListItem,{className:t.nested,children:[Object(d.jsx)(o.ListItemText,{primary:e("design.MTRDest.terminal")}),Object(d.jsx)(o.ListItemSecondaryAction,{children:Object(d.jsx)(o.Switch,{color:"primary",edge:"end",checked:!1!==l.customiseMTRDest.terminal,onChange:function(e,t){return m({type:"SET_TERMINAL_OVERRIDE",terminal:!!t&&["",""]})}})})]}),Object(d.jsx)(o.Collapse,{in:!1!==l.customiseMTRDest.terminal,unmountOnExit:!0,children:Object(d.jsxs)(o.Grid,{container:!0,spacing:1,justify:"center",alignItems:"flex-start",className:t.grid,children:[Object(d.jsx)(o.Grid,{item:!0,xs:12,sm:6,children:Object(d.jsx)(o.TextField,{label:e("design.MTRDest.zh"),value:l.customiseMTRDest.terminal?l.customiseMTRDest.terminal[0]:"",onChange:g(0)})}),Object(d.jsx)(o.Grid,{item:!0,xs:12,sm:6,children:Object(d.jsx)(o.TextField,{label:e("design.MTRDest.en"),value:l.customiseMTRDest.terminal?l.customiseMTRDest.terminal[1]:"",onChange:g(1)})})]})})]})})]})}),[JSON.stringify(l.customiseMTRDest),b,t.nested,t.grid])}}}]);
//# sourceMappingURL=panelDesignMTR.4b05beed.chunk.js.map