(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[84],{126:function(e,t,i){"use strict";i.r(t);var n=i(11),c=i(3),r=i(12),a=i(4),s=i(10),l=i(7),o=i(0),u=Object(a.makeStyles)((function(e){return Object(a.createStyles)({nestedList:{paddingLeft:e.spacing(5)},slider:{width:168,marginLeft:8,marginRight:8}})}));t.default=c.memo((function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(a.Divider,{}),Object(o.jsx)(j,{})]})}));var j=function(){var e=Object(r.useTranslation)().t,t=u(),i=Object(s.useDispatch)(),j=Object(s.useSelector)((function(e){return e.param.direction_gz_x})),d=Object(s.useSelector)((function(e){return e.param.direction_gz_y})),b=c.useState(!1),m=Object(n.a)(b,2),O=m[0],x=m[1];return c.useMemo((function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(a.ListItem,{button:!0,onClick:function(){return x((function(e){return!e}))},children:[Object(o.jsx)(a.ListItemIcon,{children:Object(o.jsx)(a.Icon,{children:"open_with"})}),Object(o.jsx)(a.ListItemText,{primary:e("layout.directionGZ.title")}),O?Object(o.jsx)(a.Icon,{color:"action",children:"expand_less"}):Object(o.jsx)(a.Icon,{color:"action",children:"expand_more"})]}),Object(o.jsx)(a.Collapse,{in:O,unmountOnExit:!0,children:Object(o.jsxs)(a.List,{component:"div",disablePadding:!0,className:t.nestedList,children:[Object(o.jsxs)(a.ListItem,{children:[Object(o.jsx)(a.ListItemText,{primary:e("layout.directionGZ.horizontal")}),Object(o.jsx)(a.Slider,{className:t.slider,value:j,onChange:function(e,t){i(Object(l.I)(t))},step:.01,marks:[{value:0,label:e("layout.directionGZ.left")},{value:100,label:e("layout.directionGZ.right")}],valueLabelDisplay:"auto"})]}),Object(o.jsx)(a.Divider,{variant:"middle"}),Object(o.jsxs)(a.ListItem,{children:[Object(o.jsx)(a.ListItemText,{primary:e("layout.directionGZ.vertical")}),Object(o.jsx)(a.Slider,{className:t.slider,value:d,onChange:function(e,t){i(Object(l.J)(t))},step:.01,marks:[{value:0,label:e("layout.directionGZ.top")},{value:100,label:e("layout.directionGZ.bottom")}],valueLabelDisplay:"auto"})]})]})})]})}),[j,d,O,t.nestedList,t.slider,e,i])}}}]);
//# sourceMappingURL=panelLayoutGZMTR.33998475.chunk.js.map