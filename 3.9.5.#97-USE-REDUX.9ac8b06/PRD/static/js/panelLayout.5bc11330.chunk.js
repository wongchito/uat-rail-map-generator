(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[78],{133:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n.n(c),r=n(5),i=n(10),a=n(12),j=n(21),l=n(11),u=n(2),o=n(7),b=n(1),d=Object(r.makeStyles)((function(e){return Object(r.createStyles)({nestedList:{paddingLeft:e.spacing(5)},textField:{maxWidth:168},slider:{width:168,marginLeft:8,marginRight:8}})})),O=Object(c.memo)((function(){var e=Object(l.useSelector)((function(e){return e.app.rmgStyle}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(r.Divider,{}),e!==u.j.SHMetro&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,{}),Object(b.jsx)(r.Divider,{})]}),Object(b.jsx)(p,{}),Object(b.jsx)(r.Divider,{}),Object(b.jsx)(h,{})]})})),m=function(){var e=Object(a.useTranslation)().t,t=d(),n=Object(l.useDispatch)(),O=Object(c.useContext)(j.a).dispatch,m=Object(l.useSelector)((function(e){return e.app.rmgStyle})),x=Object(l.useSelector)((function(e){return e.param.svg_height})),p=Object(l.useSelector)((function(e){return e.param.svgWidth})),h=Object(c.useState)(!1),g=Object(i.a)(h,2),v=g[0],f=g[1],I=function(e){return function(t){var c=t.target.value;isNaN(Number(c))||(O({type:"SET_WIDTH",targetId:e,value:Number(c)}),n(Object(o.K)(Number(c),e)))}},y=function(e){var t=e.target.value;isNaN(Number(t))||(O({type:"SET_HEIGHT",value:Number(t)}),n(Object(o.J)(Number(t))))};return Object(c.useMemo)((function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(r.ListItem,{button:!0,onClick:function(){return f((function(e){return!e}))},children:[Object(b.jsx)(r.ListItemIcon,{children:Object(b.jsx)(r.Icon,{children:"panorama_horizontal"})}),Object(b.jsx)(r.ListItemText,{primary:e("layout.size.title")}),v?Object(b.jsx)(r.Icon,{color:"action",children:"expand_less"}):Object(b.jsx)(r.Icon,{color:"action",children:"expand_more"})]}),Object(b.jsx)(r.Collapse,{in:v,unmountOnExit:!0,children:Object(b.jsxs)(r.List,{component:"div",disablePadding:!0,className:t.nestedList,children:[u.m[m].map((function(n){return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsxs)(r.ListItem,{children:[Object(b.jsx)(r.ListItemText,{primary:e("layout.size.width."+n)}),Object(b.jsx)(r.TextField,{value:p[n].toString(),onChange:I(n),className:t.textField,InputProps:{endAdornment:Object(b.jsx)(r.InputAdornment,{position:"end",children:"px"})}})]}),Object(b.jsx)(r.Divider,{variant:"middle"})]},n)})),Object(b.jsxs)(r.ListItem,{children:[Object(b.jsx)(r.ListItemText,{primary:e("layout.size.height")}),Object(b.jsx)(r.TextField,{value:x.toString(),onChange:y,className:t.textField,InputProps:{endAdornment:Object(b.jsx)(r.InputAdornment,{position:"end",children:"px"})}})]})]})})]})}),[JSON.stringify(p),x,v,t.nestedList])},x=function(){var e=Object(a.useTranslation)().t,t=d(),n=Object(l.useDispatch)(),s=Object(c.useContext)(j.a).dispatch,i=Object(l.useSelector)((function(e){return e.param.y_pc}));return Object(c.useMemo)((function(){return Object(b.jsxs)(r.ListItem,{children:[Object(b.jsx)(r.ListItemIcon,{children:Object(b.jsx)(r.Icon,{children:"vertical_align_center"})}),Object(b.jsx)(r.ListItemText,{primary:e("layout.y")}),Object(b.jsx)(r.Slider,{className:t.slider,value:i,onChange:function(e,t){s({type:"SET_Y",value:t}),n(Object(o.M)(t))},step:.01,marks:[{value:0,label:"0%"},{value:100,label:"100%"}],valueLabelDisplay:"auto"})]})}),[i,t.slider,e,s,n])},p=function(){var e=Object(a.useTranslation)().t,t=d(),n=Object(l.useDispatch)(),s=Object(c.useContext)(j.a).dispatch,i=Object(l.useSelector)((function(e){return e.param.branch_spacing}));return Object(c.useMemo)((function(){return Object(b.jsxs)(r.ListItem,{children:[Object(b.jsx)(r.ListItemIcon,{children:Object(b.jsx)(r.Icon,{children:"format_line_spacing"})}),Object(b.jsx)(r.ListItemText,{primary:e("layout.branchSpacing")}),Object(b.jsx)(r.Slider,{className:t.slider,value:i,onChange:function(e,t){s({type:"SET_BRANCH_SPACING",value:t}),n(Object(o.y)(t))},step:.01,marks:[{value:0,label:"0px"},{value:100,label:"100px"}],valueLabelDisplay:"auto"})]})}),[i,t.slider,e,s,n])},h=function(){var e=Object(a.useTranslation)().t,t=d(),n=Object(l.useDispatch)(),s=Object(c.useContext)(j.a).dispatch,i=Object(l.useSelector)((function(e){return e.param.padding}));return Object(c.useMemo)((function(){return Object(b.jsxs)(r.ListItem,{children:[Object(b.jsx)(r.ListItemIcon,{children:Object(b.jsx)(r.Icon,{children:"stay_current_landscape"})}),Object(b.jsx)(r.ListItemText,{primary:e("layout.padding")}),Object(b.jsx)(r.Slider,{className:t.slider,value:i,onChange:function(e,t){s({type:"SET_PADDING",value:t}),n(Object(o.F)(t))},step:.01,max:50,marks:[{value:0,label:"0%"},{value:50,label:"50%"}],valueLabelDisplay:"auto"})]})}),[i,t.slider,e,s,n])},g=s.a.lazy((function(){return n.e(79).then(n.bind(null,121))})),v=s.a.memo((function(){var e=Object(l.useSelector)((function(e){return e.app.rmgStyle}));return Object(b.jsx)(r.Grid,{container:!0,spacing:3,justify:"center",alignItems:"flex-start",children:Object(b.jsx)(r.Grid,{item:!0,xs:12,sm:10,md:7,lg:5,children:Object(b.jsx)(r.Paper,{children:Object(b.jsxs)(r.List,{component:"div",disablePadding:!0,children:[Object(b.jsx)(O,{}),e===u.j.GZMTR&&Object(b.jsx)(s.a.Suspense,{fallback:Object(b.jsx)(r.LinearProgress,{}),children:Object(b.jsx)(g,{})})]})})})})}));t.default=v}}]);
//# sourceMappingURL=panelLayout.5bc11330.chunk.js.map