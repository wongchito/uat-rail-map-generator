(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[89],{145:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n.n(c),i=n(3),s=n(11),a=n(14),j=n(8),l=n(2),b=n(7),u=n(0),o=Object(i.makeStyles)((function(e){return Object(i.createStyles)({nestedList:{paddingLeft:e.spacing(5)},textField:{maxWidth:168},slider:{width:168,marginLeft:8,marginRight:8}})})),d=Object(c.memo)((function(){var e=Object(j.c)((function(e){return e.app.rmgStyle}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)(i.Divider,{}),e!==l.k.SHMetro&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{}),Object(u.jsx)(i.Divider,{})]}),Object(u.jsx)(x,{}),Object(u.jsx)(i.Divider,{}),Object(u.jsx)(p,{})]})})),O=function(){var e=Object(a.useTranslation)().t,t=o(),n=Object(j.b)(),r=Object(j.c)((function(e){return e.app.rmgStyle})),d=Object(j.c)((function(e){return e.param.svg_height})),O=Object(j.c)((function(e){return e.param.svgWidth})),m=Object(c.useState)(!1),x=Object(s.a)(m,2),p=x[0],h=x[1],g=function(e){return function(t){var c=t.target.value;isNaN(Number(c))||n(Object(b.T)(Number(c),e))}};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(i.ListItem,{button:!0,onClick:function(){return h((function(e){return!e}))},children:[Object(u.jsx)(i.ListItemIcon,{children:Object(u.jsx)(i.Icon,{children:"panorama_horizontal"})}),Object(u.jsx)(i.ListItemText,{primary:e("layout.size.title")}),p?Object(u.jsx)(i.Icon,{color:"action",children:"expand_less"}):Object(u.jsx)(i.Icon,{color:"action",children:"expand_more"})]}),Object(u.jsx)(i.Collapse,{in:p,unmountOnExit:!0,children:Object(u.jsxs)(i.List,{component:"div",disablePadding:!0,className:t.nestedList,children:[l.n[r].map((function(n){return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsxs)(i.ListItem,{children:[Object(u.jsx)(i.ListItemText,{primary:e("layout.size.width."+n)}),Object(u.jsx)(i.TextField,{defaultValue:O[n].toString(),onChange:g(n),className:t.textField,InputProps:{endAdornment:Object(u.jsx)(i.InputAdornment,{position:"end",children:"px"})}})]}),Object(u.jsx)(i.Divider,{variant:"middle"})]},n+".width")})),Object(u.jsxs)(i.ListItem,{children:[Object(u.jsx)(i.ListItemText,{primary:e("layout.size.height")}),Object(u.jsx)(i.TextField,{value:d.toString(),onChange:function(e){var t=e.target.value;isNaN(Number(t))||n(Object(b.S)(Number(t)))},className:t.textField,InputProps:{endAdornment:Object(u.jsx)(i.InputAdornment,{position:"end",children:"px"})}})]})]})})]})},m=function(){var e=Object(a.useTranslation)().t,t=o(),n=Object(j.b)(),r=Object(j.c)((function(e){return e.param.y_pc}));return Object(c.useMemo)((function(){return Object(u.jsxs)(i.ListItem,{children:[Object(u.jsx)(i.ListItemIcon,{children:Object(u.jsx)(i.Icon,{children:"vertical_align_center"})}),Object(u.jsx)(i.ListItemText,{primary:e("layout.y")}),Object(u.jsx)(i.Slider,{className:t.slider,value:r,onChange:function(e,t){n(Object(b.V)(t))},step:.01,marks:[{value:0,label:"0%"},{value:100,label:"100%"}],valueLabelDisplay:"auto"})]})}),[r,t.slider,e,n])},x=function(){var e=Object(a.useTranslation)().t,t=o(),n=Object(j.b)(),r=Object(j.c)((function(e){return e.param.branch_spacing}));return Object(c.useMemo)((function(){return Object(u.jsxs)(i.ListItem,{children:[Object(u.jsx)(i.ListItemIcon,{children:Object(u.jsx)(i.Icon,{children:"format_line_spacing"})}),Object(u.jsx)(i.ListItemText,{primary:e("layout.branchSpacing")}),Object(u.jsx)(i.Slider,{className:t.slider,value:r,onChange:function(e,t){n(Object(b.F)(t))},step:.01,marks:[{value:0,label:"0px"},{value:100,label:"100px"}],valueLabelDisplay:"auto"})]})}),[r,t.slider,e,n])},p=function(){var e=Object(a.useTranslation)().t,t=o(),n=Object(j.b)(),r=Object(j.c)((function(e){return e.param.padding}));return Object(c.useMemo)((function(){return Object(u.jsxs)(i.ListItem,{children:[Object(u.jsx)(i.ListItemIcon,{children:Object(u.jsx)(i.Icon,{children:"stay_current_landscape"})}),Object(u.jsx)(i.ListItemText,{primary:e("layout.padding")}),Object(u.jsx)(i.Slider,{className:t.slider,value:r,onChange:function(e,t){n(Object(b.N)(t))},step:.01,max:50,marks:[{value:0,label:"0%"},{value:50,label:"50%"}],valueLabelDisplay:"auto"})]})}),[r,t.slider,e,n])},h=r.a.lazy((function(){return n.e(90).then(n.bind(null,133))})),g=r.a.memo((function(){var e=Object(j.c)((function(e){return e.app.rmgStyle}));return Object(u.jsx)(i.Grid,{container:!0,spacing:3,justify:"center",alignItems:"flex-start",children:Object(u.jsx)(i.Grid,{item:!0,xs:12,sm:10,md:7,lg:5,children:Object(u.jsx)(i.Paper,{children:Object(u.jsxs)(i.List,{component:"div",disablePadding:!0,children:[Object(u.jsx)(d,{}),e===l.k.GZMTR&&Object(u.jsx)(r.a.Suspense,{fallback:Object(u.jsx)(i.LinearProgress,{}),children:Object(u.jsx)(h,{})})]})})})})}));t.default=g}}]);
//# sourceMappingURL=panelLayout.9e876774.chunk.js.map