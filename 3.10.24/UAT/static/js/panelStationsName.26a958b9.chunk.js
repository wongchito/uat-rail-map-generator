(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[137],{176:function(e,t,n){"use strict";var a=n(1),r=n(34),i=n(4),o=n(0),c=(n(8),n(5)),s=n(79),l=n(174),d=n(7),u=n(159),p=o.forwardRef((function(e,t){var n=e.autoFocus,d=e.checked,p=e.checkedIcon,h=e.classes,m=e.className,b=e.defaultChecked,f=e.disabled,g=e.icon,j=e.id,y=e.inputProps,x=e.inputRef,O=e.name,v=e.onBlur,k=e.onChange,I=e.onFocus,N=e.readOnly,w=e.required,E=e.tabIndex,C=e.type,R=e.value,M=Object(i.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),S=Object(s.a)({controlled:d,default:Boolean(b),name:"SwitchBase",state:"checked"}),z=Object(r.a)(S,2),$=z[0],B=z[1],H=Object(l.a)(),T=f;H&&"undefined"===typeof T&&(T=H.disabled);var W="checkbox"===C||"radio"===C;return o.createElement(u.a,Object(a.a)({component:"span",className:Object(c.a)(h.root,m,$&&h.checked,T&&h.disabled),disabled:T,tabIndex:null,role:void 0,onFocus:function(e){I&&I(e),H&&H.onFocus&&H.onFocus(e)},onBlur:function(e){v&&v(e),H&&H.onBlur&&H.onBlur(e)},ref:t},M),o.createElement("input",Object(a.a)({autoFocus:n,checked:d,defaultChecked:b,className:h.input,disabled:T,id:W&&j,name:O,onChange:function(e){var t=e.target.checked;B(t),k&&k(e,t)},readOnly:N,ref:x,required:w,tabIndex:E,type:C,value:R},y)),$?p:g)}));t.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(p)},246:function(e,t,n){"use strict";var a=n(1),r=n(4),i=n(0),o=(n(8),n(5)),c=n(7),s=n(22),l=n(12),d=n(176),u=i.forwardRef((function(e,t){var n=e.classes,c=e.className,s=e.color,u=void 0===s?"secondary":s,p=e.edge,h=void 0!==p&&p,m=e.size,b=void 0===m?"medium":m,f=Object(r.a)(e,["classes","className","color","edge","size"]),g=i.createElement("span",{className:n.thumb});return i.createElement("span",{className:Object(o.a)(n.root,c,{start:n.edgeStart,end:n.edgeEnd}[h],"small"===b&&n["size".concat(Object(l.a)(b))])},i.createElement(d.a,Object(a.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(o.a)(n.switchBase,n["color".concat(Object(l.a)(u))]),input:n.input,checked:n.checked,disabled:n.disabled},ref:t},f)),i.createElement("span",{className:n.track}))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(u)},247:function(e,t,n){"use strict";var a=n(1),r=n(34),i=n(4),o=n(0),c=n(5),s=(n(8),n(127)),l=n(7),d=n(81),u=n(60),p=n(32),h=n(17),m=o.forwardRef((function(e,t){var n=e.children,l=e.classes,m=e.className,b=e.collapsedHeight,f=e.collapsedSize,g=void 0===f?"0px":f,j=e.component,y=void 0===j?"div":j,x=e.disableStrictModeCompat,O=void 0!==x&&x,v=e.in,k=e.onEnter,I=e.onEntered,N=e.onEntering,w=e.onExit,E=e.onExited,C=e.onExiting,R=e.style,M=e.timeout,S=void 0===M?d.b.standard:M,z=e.TransitionComponent,$=void 0===z?s.a:z,B=Object(i.a)(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),H=Object(p.a)(),T=o.useRef(),W=o.useRef(null),F=o.useRef(),A="number"===typeof(b||g)?"".concat(b||g,"px"):b||g;o.useEffect((function(){return function(){clearTimeout(T.current)}}),[]);var Z=H.unstable_strictMode&&!O,P=o.useRef(null),D=Object(h.a)(t,Z?P:void 0),_=function(e){return function(t,n){if(e){var a=Z?[P.current,t]:[t,n],i=Object(r.a)(a,2),o=i[0],c=i[1];void 0===c?e(o):e(o,c)}}},G=_((function(e,t){e.style.height=A,k&&k(e,t)})),q=_((function(e,t){var n=W.current?W.current.clientHeight:0,a=Object(u.a)({style:R,timeout:S},{mode:"enter"}).duration;if("auto"===S){var r=H.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(r,"ms"),F.current=r}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),N&&N(e,t)})),L=_((function(e,t){e.style.height="auto",I&&I(e,t)})),J=_((function(e){var t=W.current?W.current.clientHeight:0;e.style.height="".concat(t,"px"),w&&w(e)})),K=_(E),V=_((function(e){var t=W.current?W.current.clientHeight:0,n=Object(u.a)({style:R,timeout:S},{mode:"exit"}).duration;if("auto"===S){var a=H.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),F.current=a}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=A,C&&C(e)}));return o.createElement($,Object(a.a)({in:v,onEnter:G,onEntered:L,onEntering:q,onExit:J,onExited:K,onExiting:V,addEndListener:function(e,t){var n=Z?e:t;"auto"===S&&(T.current=setTimeout(n,F.current||0))},nodeRef:Z?P:void 0,timeout:"auto"===S?null:S},B),(function(e,t){return o.createElement(y,Object(a.a)({className:Object(c.a)(l.root,l.container,m,{entered:l.entered,exited:!v&&"0px"===A&&l.hidden}[e]),style:Object(a.a)({minHeight:A},R),ref:D},t),o.createElement("div",{className:l.wrapper,ref:W},o.createElement("div",{className:l.wrapperInner},n)))}))}));m.muiSupportAuto=!0,t.a=Object(l.a)((function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(m)},354:function(e,t,n){"use strict";n.r(t);var a=n(3),r=(n(0),n(161)),i=n(150),o=n(171),c=n(125),s=n(361),l=n(336),d=n(160),u=n(337),p=n(341),h=n(246),m=n(247),b=n(130),f=n(20),g=n(6),j=n(15),y=n(2);t.default=function(e){var t=Object(f.c)((function(e){return e.param.style}));return Object(y.jsxs)(r.a,{component:"div",children:[t===g.k.GZMTR&&Object(y.jsx)(O,Object(a.a)({},e)),Object(y.jsx)(v,Object(a.a)({},e)),t===g.k.GZMTR&&Object(y.jsx)(k,Object(a.a)({},e))]})};var x=Object(i.a)((function(){return Object(o.a)({lineNumRoot:{display:"inline-flex",alignItems:"center",justifyContent:"center",border:"solid 2px",borderRightWidth:1,borderRadius:"32px 0 0 32px",padding:"2px 5px",minWidth:32,height:32,fontSize:"1.5rem"},numInput:{display:"inline-block",border:"solid 2px",borderLeftWidth:1,borderRadius:"0 32px 32px 0",padding:"2px 5px",width:"auto",height:32,"& .MuiInputBase-root":{marginTop:1.7},"& .MuiInputBase-input":{fontSize:"1.5rem",padding:"unset",textAlign:"center"},"& input":{width:50}},nameInputZH:{"& .MuiInputBase-input":{textAlign:"center",fontSize:"3rem",lineHeight:"3rem"}},nameInputEN:{"& .MuiInputBase-input":{textAlign:"center",fontSize:"1.2rem",lineHeight:"1.2rem"}},"nameInputZH-mtr":{"& .MuiInputBase-input":{fontFamily:["Myriad Pro","Vegur","GenYoMin TW","HiraMinProN-W6","serif"].join()}},"nameInputEN-mtr":{"& .MuiInputBase-input":{fontFamily:["Myriad Pro","Vegur","Arial","sans-serif"].join()}},"nameInputZH-gzmtr":{"& .MuiInputBase-input":{fontFamily:["Arial","STKaiti","KaiTi","sans-serif"].join()}},collapseWrapper:{justifyContent:"center"},collapseWrapperInner:{width:"65%"},secondaryNameRoot:{display:"flex",justifyContent:"center",alignItems:"center","& .MuiInputBase-input":{textAlign:"center"}},secondaryNameParenthesis:{fontSize:"4rem"},secondaryNameInputRoot:{display:"flex",flexDirection:"column",width:"100%"},secondaryNameInputZH:{"& .MuiInputBase-input":{fontSize:"1.5rem",lineHeight:"1.5rem"}}})})),O=function(e){var t=e.stnId,n=x(),a=Object(f.b)(),r=Object(f.c)((function(e){return e.param.line_num})),i=Object(f.c)((function(e){return e.param.stn_list[t]}));return Object(y.jsxs)(c.a,{style:{justifyContent:"center"},children:[Object(y.jsx)("div",{className:n.lineNumRoot,children:Object(y.jsx)("span",{children:r})}),Object(y.jsx)(s.a,{fullWidth:!0,className:n.numInput,value:null===i||void 0===i?void 0:i.num,onChange:function(e){var n=e.target.value;a(Object(j.gb)(t,n))}})]})},v=function(e){var t=e.stnId,n=Object(b.a)().t,a=x(),r=Object(f.b)(),i=Object(f.c)((function(e){return e.param.style})),o=Object(f.c)((function(e){return e.param.stn_list[t]})).name;return Object(y.jsxs)(c.a,{style:{flexDirection:"column"},children:[Object(y.jsx)(s.a,{fullWidth:!0,placeholder:n("editor.zh"),className:"".concat(a.nameInputZH," ").concat(i===g.k.GZMTR?a["nameInputZH-gzmtr"]:i===g.k.MTR?a["nameInputZH-mtr"]:""),value:o[0],onChange:function(e){var n=e.target.value;return r(Object(j.fb)(t,[n,o[1]]))},autoFocus:!0}),Object(y.jsx)(s.a,{fullWidth:!0,placeholder:n("editor.en"),className:"".concat(a.nameInputEN," ").concat(i===g.k.MTR?a["nameInputEN-mtr"]:""),value:o[1],onChange:function(e){var n=e.target.value;return r(Object(j.fb)(t,[o[0],n]))},helperText:n("editor.backslashToWrap")})]})},k=function(e){var t=e.stnId,n=Object(b.a)().t,a=x(),r=Object(f.b)(),i=Object(f.c)((function(e){return e.param.stn_list[t]})).secondaryName;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(c.a,{children:[Object(y.jsx)(l.a,{children:Object(y.jsx)(d.a,{children:"text_fields"})}),Object(y.jsx)(u.a,{primary:n("stations.edit.name.secondary")}),Object(y.jsx)(p.a,{children:Object(y.jsx)(h.a,{color:"primary",edge:"end",checked:!1!==i,onChange:function(e,n){r(Object(j.jb)(t,!!n&&["",""]))}})})]}),Object(y.jsx)(m.a,{in:!1!==i,unmountOnExit:!0,classes:{wrapper:a.collapseWrapper,wrapperInner:a.collapseWrapperInner},children:Object(y.jsxs)("div",{className:a.secondaryNameRoot,children:[Object(y.jsx)("span",{className:a.secondaryNameParenthesis,children:"("}),Object(y.jsxs)("div",{className:a.secondaryNameInputRoot,children:[Object(y.jsx)(s.a,{fullWidth:!0,placeholder:n("editor.zh"),className:a.secondaryNameInputZH,value:i?i[0]:"",onChange:function(e){var n=e.target.value;r(Object(j.jb)(t,[n,i?i[1]:""]))}}),Object(y.jsx)(s.a,{fullWidth:!0,placeholder:n("editor.en"),value:i?i[1]:"",onChange:function(e){var n=e.target.value;r(Object(j.jb)(t,[i?i[0]:"",n]))}})]}),Object(y.jsx)("span",{className:a.secondaryNameParenthesis,children:")"})]})})]})}}}]);
//# sourceMappingURL=panelStationsName.26a958b9.chunk.js.map