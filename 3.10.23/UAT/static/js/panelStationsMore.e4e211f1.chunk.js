(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[134],{176:function(e,t,a){"use strict";var n=a(1),c=a(34),o=a(4),r=a(0),i=(a(8),a(5)),l=a(79),d=a(174),s=a(7),b=a(159),u=r.forwardRef((function(e,t){var a=e.autoFocus,s=e.checked,u=e.checkedIcon,p=e.classes,m=e.className,f=e.defaultChecked,j=e.disabled,h=e.icon,O=e.id,v=e.inputProps,k=e.inputRef,x=e.name,y=e.onBlur,g=e.onChange,I=e.onFocus,C=e.readOnly,w=e.required,E=e.tabIndex,z=e.type,P=e.value,S=Object(o.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),B=Object(l.a)({controlled:s,default:Boolean(f),name:"SwitchBase",state:"checked"}),R=Object(c.a)(B,2),F=R[0],N=R[1],M=Object(d.a)(),H=j;M&&"undefined"===typeof H&&(H=M.disabled);var L="checkbox"===z||"radio"===z;return r.createElement(b.a,Object(n.a)({component:"span",className:Object(i.a)(p.root,m,F&&p.checked,H&&p.disabled),disabled:H,tabIndex:null,role:void 0,onFocus:function(e){I&&I(e),M&&M.onFocus&&M.onFocus(e)},onBlur:function(e){y&&y(e),M&&M.onBlur&&M.onBlur(e)},ref:t},S),r.createElement("input",Object(n.a)({autoFocus:a,checked:s,defaultChecked:f,className:p.input,disabled:H,id:L&&O,name:x,onChange:function(e){var t=e.target.checked;N(t),g&&g(e,t)},readOnly:C,ref:k,required:w,tabIndex:E,type:z,value:P},v)),F?u:h)}));t.a=Object(s.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(u)},326:function(e,t,a){"use strict";var n=a(1),c=a(4),o=a(0),r=(a(8),a(5)),i=a(176),l=a(56),d=Object(l.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),s=Object(l.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),b=a(22),u=Object(l.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(12),m=a(7),f=o.createElement(s,null),j=o.createElement(d,null),h=o.createElement(u,null),O=o.forwardRef((function(e,t){var a=e.checkedIcon,l=void 0===a?f:a,d=e.classes,s=e.color,b=void 0===s?"secondary":s,u=e.icon,m=void 0===u?j:u,O=e.indeterminate,v=void 0!==O&&O,k=e.indeterminateIcon,x=void 0===k?h:k,y=e.inputProps,g=e.size,I=void 0===g?"medium":g,C=Object(c.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),w=v?x:m,E=v?x:l;return o.createElement(i.a,Object(n.a)({type:"checkbox",classes:{root:Object(r.a)(d.root,d["color".concat(Object(p.a)(b))],v&&d.indeterminate),checked:d.checked,disabled:d.disabled},color:b,inputProps:Object(n.a)({"data-indeterminate":v},y),icon:o.cloneElement(w,{fontSize:void 0===w.props.fontSize&&"small"===I?I:w.props.fontSize}),checkedIcon:o.cloneElement(E,{fontSize:void 0===E.props.fontSize&&"small"===I?I:E.props.fontSize}),ref:t},C))}));t.a=Object(m.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(b.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(b.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(O)},367:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(0),o=a(130),r=a(161),i=a(125),l=a(334),d=a(160),s=a(335),b=a(339),u=a(358),p=a(1),m=a(4),f=(a(8),a(5)),j=a(7),h=c.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.row,r=void 0!==o&&o,i=Object(m.a)(e,["classes","className","row"]);return c.createElement("div",Object(p.a)({className:Object(f.a)(a.root,n,r&&a.row),ref:t},i))})),O=Object(j.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(h),v=a(174),k=a(156),x=a(12),y=c.forwardRef((function(e,t){e.checked;var a=e.classes,n=e.className,o=e.control,r=e.disabled,i=(e.inputRef,e.label),l=e.labelPlacement,d=void 0===l?"end":l,s=(e.name,e.onChange,e.value,Object(m.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),b=Object(v.a)(),u=r;"undefined"===typeof u&&"undefined"!==typeof o.props.disabled&&(u=o.props.disabled),"undefined"===typeof u&&b&&(u=b.disabled);var j={disabled:u};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof o.props[t]&&"undefined"!==typeof e[t]&&(j[t]=e[t])})),c.createElement("label",Object(p.a)({className:Object(f.a)(a.root,n,"end"!==d&&a["labelPlacement".concat(Object(x.a)(d))],u&&a.disabled),ref:t},s),c.cloneElement(o,j),c.createElement(k.a,{component:"span",className:Object(f.a)(a.label,u&&a.disabled)},i))})),g=Object(j.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(y),I=a(326),C=a(20),w=a(6),E=a(15),z=a(2),P=(t.default=Object(c.memo)((function(e){var t,a,c=Object(C.c)((function(e){return e.param.style})),o=(t={},Object(n.a)(t,w.k.GZMTR,[w.l.local,w.l.express]),Object(n.a)(t,w.k.SHMetro,[w.l.local,w.l.express,w.l.direct]),t),i=(a={},Object(n.a)(a,w.k.MTR,[w.e.airport,w.e.disney,w.e.hsr,w.e.none]),Object(n.a)(a,w.k.SHMetro,[w.e.railway,w.e.airport,w.e.disney,w.e.none]),a);return Object(z.jsx)("div",{children:Object(z.jsxs)(r.a,{children:[c in o&&Object(z.jsx)(S,{stnId:e.stnId,providedServices:o[c]}),c in i&&Object(z.jsx)(P,{stnId:e.stnId,providedFacilities:i[c]})]})})})),function(e){var t=e.stnId,a=e.providedFacilities,n=Object(o.a)().t,c=Object(C.b)(),r=Object(C.c)((function(e){return e.param.stn_list[t]})).facility;return Object(z.jsxs)(i.a,{children:[Object(z.jsx)(l.a,{children:Object(z.jsx)(d.a,{children:"place"})}),Object(z.jsx)(s.a,{primary:n("stations.edit.more.facility.button")}),Object(z.jsx)(b.a,{children:Object(z.jsx)(u.a,{native:!0,value:r,onChange:function(e){var a=e.target.value;c(Object(E.eb)(t,a))},children:a.map((function(e){return Object(z.jsx)("option",{value:e,children:n("stations.edit.more.facility."+(""===e?"none":e))},e)}))})})]})}),S=function(e){var t=e.stnId,a=e.providedServices,c=Object(o.a)().t,r=Object(C.b)(),b=Object(C.c)((function(e){return e.param.stn_list[t]})).services;return Object(z.jsxs)(i.a,{children:[Object(z.jsx)(l.a,{children:Object(z.jsx)(d.a,{children:"train"})}),Object(z.jsx)(s.a,{primary:c("stations.edit.more.services.button"),secondary:Object(z.jsx)(O,{row:!0,children:a.map((function(t){return Object(z.jsx)(g,{control:Object(z.jsx)(I.a,{checked:b.includes(t),value:t,onChange:(a=t,function(t){var n=t.target.checked;a!==w.l.local&&r(n?Object(E.y)(e.stnId,a):Object(E.E)(e.stnId,a))}),disabled:t===w.l.local}),label:c("stations.edit.more.services."+t)},t);var a}))}),secondaryTypographyProps:Object(n.a)({},"component","div")})]})}}}]);
//# sourceMappingURL=panelStationsMore.e4e211f1.chunk.js.map