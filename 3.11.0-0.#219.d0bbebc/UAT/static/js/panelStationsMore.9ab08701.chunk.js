"use strict";(self.webpackChunkrail_map_generator=self.webpackChunkrail_map_generator||[]).push([[5060],{7061:function(e,n,a){a.r(n),a.d(n,{default:function(){return E}});var t=a(4942),o=a(2791),r=a(2020),c=a(7462),i=a(5987),l=(a(2007),a(8182)),d=a(5936),s=o.forwardRef((function(e,n){var a=e.classes,t=e.className,r=e.row,d=void 0!==r&&r,s=(0,i.Z)(e,["classes","className","row"]);return o.createElement("div",(0,c.Z)({className:(0,l.Z)(a.root,t,d&&a.row),ref:n},s))})),u=(0,d.Z)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(s),m=a(1024),p=a(8302),f=a(1122),h=o.forwardRef((function(e,n){e.checked;var a=e.classes,t=e.className,r=e.control,d=e.disabled,s=(e.inputRef,e.label),u=e.labelPlacement,h=void 0===u?"end":u,v=(e.name,e.onChange,e.value,(0,i.Z)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),b=(0,m.Z)(),Z=d;"undefined"===typeof Z&&"undefined"!==typeof r.props.disabled&&(Z=r.props.disabled),"undefined"===typeof Z&&b&&(Z=b.disabled);var k={disabled:Z};return["checked","name","onChange","value","inputRef"].forEach((function(n){"undefined"===typeof r.props[n]&&"undefined"!==typeof e[n]&&(k[n]=e[n])})),o.createElement("label",(0,c.Z)({className:(0,l.Z)(a.root,t,"end"!==h&&a["labelPlacement".concat((0,f.Z)(h))],Z&&a.disabled),ref:n},v),o.cloneElement(r,k),o.createElement(p.Z,{component:"span",className:(0,l.Z)(a.label,Z&&a.disabled)},s))})),v=(0,d.Z)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(h),b=a(2067),Z=a(8096),k=a(1969),x=a(9418),y=a(159),g=a(4212),C=a(9403),I=a(5247),j=a(3334),R=a(713),w=a(533),M=a(184),E=(0,o.memo)((function(e){var n,a,o=(0,j.CG)((function(e){return e.param.style})),r=(n={},(0,t.Z)(n,R.RM.GZMTR,[R.K9.local,R.K9.express]),(0,t.Z)(n,R.RM.SHMetro,[R.K9.local,R.K9.express,R.K9.direct]),n),c=(a={},(0,t.Z)(a,R.RM.MTR,[R.mV.airport,R.mV.disney,R.mV.hsr,R.mV.none]),(0,t.Z)(a,R.RM.SHMetro,[R.mV.railway,R.mV.airport,R.mV.disney,R.mV.none]),a);return(0,M.jsx)("div",{children:(0,M.jsxs)(b.Z,{children:[o in r&&(0,M.jsx)(z,{stnId:e.stnId,providedServices:r[o]}),o in c&&(0,M.jsx)(S,{stnId:e.stnId,providedFacilities:c[o]})]})})})),S=function(e){var n=e.stnId,a=e.providedFacilities,t=(0,r.$)().t,o=(0,j.TL)(),c=(0,j.CG)((function(e){return e.param.stn_list[n]})).facility;return(0,M.jsxs)(Z.Z,{children:[(0,M.jsx)(k.Z,{children:(0,M.jsx)(x.Z,{children:"place"})}),(0,M.jsx)(y.Z,{primary:t("stations.edit.more.facility.button")}),(0,M.jsx)(g.Z,{children:(0,M.jsx)(C.Z,{native:!0,value:c,onChange:function(e){var a=e.target.value;o((0,w.cm)(n,a))},children:a.map((function(e){return(0,M.jsx)("option",{value:e,children:t("stations.edit.more.facility."+(""===e?"none":e))},e)}))})})]})},z=function(e){var n=e.stnId,a=e.providedServices,o=(0,r.$)().t,c=(0,j.TL)(),i=(0,j.CG)((function(e){return e.param.style})),l=(0,j.CG)((function(e){return e.param.stn_list[n]})).services;return(0,M.jsxs)(Z.Z,{children:[(0,M.jsx)(k.Z,{children:(0,M.jsx)(x.Z,{children:"train"})}),(0,M.jsx)(y.Z,{primary:o("stations.edit.more.services.button"),secondary:(0,M.jsx)(u,{row:!0,children:a.map((function(n){return(0,M.jsx)(v,{control:(0,M.jsx)(I.Z,{checked:l.includes(n),value:n,onChange:(a=n,function(n){var t=n.target.checked;a===R.K9.local&&i!==R.RM.SHMetro||c(t?(0,w.$j)(e.stnId,a):(0,w.LJ)(e.stnId,a))}),disabled:n===R.K9.local&&i!==R.RM.SHMetro}),label:o("stations.edit.more.services."+n)},n);var a}))}),secondaryTypographyProps:(0,t.Z)({},"component","div")})]})}},5247:function(e,n,a){a.d(n,{Z:function(){return k}});var t=a(7462),o=a(5987),r=a(2791),c=(a(2007),a(8182)),i=a(839),l=a(8499),d=(0,l.Z)(r.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),s=(0,l.Z)(r.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),u=a(3108),m=(0,l.Z)(r.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(1122),f=a(5936),h=r.createElement(s,null),v=r.createElement(d,null),b=r.createElement(m,null),Z=r.forwardRef((function(e,n){var a=e.checkedIcon,l=void 0===a?h:a,d=e.classes,s=e.color,u=void 0===s?"secondary":s,m=e.icon,f=void 0===m?v:m,Z=e.indeterminate,k=void 0!==Z&&Z,x=e.indeterminateIcon,y=void 0===x?b:x,g=e.inputProps,C=e.size,I=void 0===C?"medium":C,j=(0,o.Z)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),R=k?y:f,w=k?y:l;return r.createElement(i.Z,(0,t.Z)({type:"checkbox",classes:{root:(0,c.Z)(d.root,d["color".concat((0,p.Z)(u))],k&&d.indeterminate),checked:d.checked,disabled:d.disabled},color:u,inputProps:(0,t.Z)({"data-indeterminate":k},g),icon:r.cloneElement(R,{fontSize:void 0===R.props.fontSize&&"small"===I?I:R.props.fontSize}),checkedIcon:r.cloneElement(w,{fontSize:void 0===w.props.fontSize&&"small"===I?I:w.props.fontSize}),ref:n},j))})),k=(0,f.Z)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,u.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,u.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(Z)},839:function(e,n,a){var t=a(7462),o=a(885),r=a(5987),c=a(2791),i=(a(2007),a(8182)),l=a(2497),d=a(1024),s=a(5936),u=a(7025),m=c.forwardRef((function(e,n){var a=e.autoFocus,s=e.checked,m=e.checkedIcon,p=e.classes,f=e.className,h=e.defaultChecked,v=e.disabled,b=e.icon,Z=e.id,k=e.inputProps,x=e.inputRef,y=e.name,g=e.onBlur,C=e.onChange,I=e.onFocus,j=e.readOnly,R=e.required,w=e.tabIndex,M=e.type,E=e.value,S=(0,r.Z)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),z=(0,l.Z)({controlled:s,default:Boolean(h),name:"SwitchBase",state:"checked"}),F=(0,o.Z)(z,2),P=F[0],B=F[1],V=(0,d.Z)(),N=v;V&&"undefined"===typeof N&&(N=V.disabled);var H="checkbox"===M||"radio"===M;return c.createElement(u.Z,(0,t.Z)({component:"span",className:(0,i.Z)(p.root,f,P&&p.checked,N&&p.disabled),disabled:N,tabIndex:null,role:void 0,onFocus:function(e){I&&I(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){g&&g(e),V&&V.onBlur&&V.onBlur(e)},ref:n},S),c.createElement("input",(0,t.Z)({autoFocus:a,checked:s,defaultChecked:h,className:p.input,disabled:N,id:H&&Z,name:y,onChange:function(e){var n=e.target.checked;B(n),C&&C(e,n)},readOnly:j,ref:x,required:R,tabIndex:w,type:M,value:E},k)),P?m:b)}));n.Z=(0,s.Z)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)}}]);
//# sourceMappingURL=panelStationsMore.9ab08701.chunk.js.map