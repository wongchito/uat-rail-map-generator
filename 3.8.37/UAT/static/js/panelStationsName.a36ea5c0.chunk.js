(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[91],{163:function(e,t,n){"use strict";var a=n(2),r=n(48),i=n(4),o=n(0),c=(n(7),n(5)),s=n(71),l=n(161),d=n(6),u=n(147),p=o.forwardRef((function(e,t){var n=e.autoFocus,d=e.checked,p=e.checkedIcon,m=e.classes,h=e.className,b=e.defaultChecked,g=e.disabled,f=e.icon,y=e.id,j=e.inputProps,x=e.inputRef,O=e.name,I=e.onBlur,v=e.onChange,N=e.onFocus,k=e.readOnly,E=e.required,C=e.tabIndex,w=e.type,S=e.value,A=Object(i.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),T=Object(s.a)({controlled:d,default:Boolean(b),name:"SwitchBase"}),R=Object(r.a)(T,2),z=R[0],_=R[1],$=Object(l.a)(),B=g;$&&"undefined"===typeof B&&(B=$.disabled);var H="checkbox"===w||"radio"===w;return o.createElement(u.a,Object(a.a)({component:"span",className:Object(c.a)(m.root,h,z&&m.checked,B&&m.disabled),disabled:B,tabIndex:null,role:void 0,onFocus:function(e){N&&N(e),$&&$.onFocus&&$.onFocus(e)},onBlur:function(e){I&&I(e),$&&$.onBlur&&$.onBlur(e)},ref:t},A),o.createElement("input",Object(a.a)({autoFocus:n,checked:d,defaultChecked:b,className:m.input,disabled:B,id:H&&y,name:O,onChange:function(e){var t=e.target.checked;_(t),v&&v(e,t)},readOnly:k,ref:x,required:E,tabIndex:C,type:w,value:S},j)),z?p:f)}));t.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(p)},218:function(e,t,n){"use strict";var a=n(2),r=n(4),i=n(0),o=n(5),c=(n(7),n(116)),s=n(6),l=n(70),d=n(50),u=n(29),p=i.forwardRef((function(e,t){var n=e.children,s=e.classes,p=e.className,m=e.collapsedHeight,h=void 0===m?"0px":m,b=e.component,g=void 0===b?"div":b,f=e.in,y=e.onEnter,j=e.onEntered,x=e.onEntering,O=e.onExit,I=e.onExiting,v=e.style,N=e.timeout,k=void 0===N?l.b.standard:N,E=Object(r.a)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","timeout"]),C=Object(u.a)(),w=i.useRef(),S=i.useRef(null),A=i.useRef(),T="number"===typeof h?"".concat(h,"px"):h;i.useEffect((function(){return function(){clearTimeout(w.current)}}),[]);return i.createElement(c.a,Object(a.a)({in:f,onEnter:function(e,t){e.style.height=T,y&&y(e,t)},onEntered:function(e,t){e.style.height="auto",j&&j(e,t)},onEntering:function(e,t){var n=S.current?S.current.clientHeight:0,a=Object(d.a)({style:v,timeout:k},{mode:"enter"}).duration;if("auto"===k){var r=C.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(r,"ms"),A.current=r}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),x&&x(e,t)},onExit:function(e){var t=S.current?S.current.clientHeight:0;e.style.height="".concat(t,"px"),O&&O(e)},onExiting:function(e){var t=S.current?S.current.clientHeight:0,n=Object(d.a)({style:v,timeout:k},{mode:"exit"}).duration;if("auto"===k){var a=C.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),A.current=a}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=T,I&&I(e)},addEndListener:function(e,t){"auto"===k&&(w.current=setTimeout(t,A.current||0))},timeout:"auto"===k?null:k},E),(function(e,r){return i.createElement(g,Object(a.a)({className:Object(o.a)(s.container,p,{entered:s.entered,exited:!f&&"0px"===T&&s.hidden}[e]),style:Object(a.a)({minHeight:T},v),ref:t},r),i.createElement("div",{className:s.wrapper,ref:S},i.createElement("div",{className:s.wrapperInner},n)))}))}));p.muiSupportAuto=!0,t.a=Object(s.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(p)},258:function(e,t,n){"use strict";var a=n(2),r=n(4),i=n(0),o=(n(7),n(5)),c=n(6),s=n(18),l=n(9),d=n(163),u=i.forwardRef((function(e,t){var n=e.classes,c=e.className,s=e.color,u=void 0===s?"secondary":s,p=e.edge,m=void 0!==p&&p,h=e.size,b=void 0===h?"medium":h,g=Object(r.a)(e,["classes","className","color","edge","size"]),f=i.createElement("span",{className:n.thumb});return i.createElement("span",{className:Object(o.a)(n.root,c,{start:n.edgeStart,end:n.edgeEnd}[m],"small"===b&&n["size".concat(Object(l.a)(b))])},i.createElement(d.a,Object(a.a)({type:"checkbox",icon:f,checkedIcon:f,classes:{root:Object(o.a)(n.switchBase,n["color".concat(Object(l.a)(u))]),input:n.input,checked:n.checked,disabled:n.disabled},ref:t},g)),i.createElement("span",{className:n.track}))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle"},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(u)},289:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n(149),o=n(138),c=n(158),s=n(114),l=n(294),d=n(275),u=n(148),p=n(276),m=n(280),h=n(258),b=n(218),g=n(28),f=n(119),y=n(3);t.default=function(e){var t=Object(r.useContext)(g.a).rmgStyle;return Object(y.jsxs)(i.a,{component:"div",children:["gzmtr"===t&&Object(y.jsx)(x,Object(a.a)({},e)),Object(y.jsx)(O,Object(a.a)({},e)),"gzmtr"===t&&Object(y.jsx)(I,Object(a.a)({},e))]})};var j=Object(o.a)((function(){return Object(c.a)({lineNumRoot:{display:"inline-flex",alignItems:"center",justifyContent:"center",border:"solid 2px",borderRightWidth:1,borderRadius:"32px 0 0 32px",padding:"2px 5px",minWidth:32,height:32,fontSize:"1.5rem"},numInput:{display:"inline-block",border:"solid 2px",borderLeftWidth:1,borderRadius:"0 32px 32px 0",padding:"2px 5px",width:32,height:32,"& .MuiInputBase-root":{marginTop:1.7},"& .MuiInputBase-input":{fontSize:"1.5rem",padding:"unset",textAlign:"center"}},nameInputZH:{"& .MuiInputBase-input":{textAlign:"center",fontSize:"3rem",lineHeight:"3rem"}},nameInputEN:{"& .MuiInputBase-input":{textAlign:"center",fontSize:"1.2rem",lineHeight:"1.2rem"}},"nameInputZH-mtr":{"& .MuiInputBase-input":{fontFamily:["Myriad Pro","Vegur","Noto Serif KR","Noto Serif JP","Noto Serif TC","Noto Serif SC","HiraMinProN-W6","serif"].join()}},"nameInputEN-mtr":{"& .MuiInputBase-input":{fontFamily:["Myriad Pro","Vegur","Arial","sans-serif"].join()}},"nameInputZH-gzmtr":{"& .MuiInputBase-input":{fontFamily:["Arial","STKaiti","KaiTi","sans-serif"].join()}},collapseWrapper:{justifyContent:"center"},collapseWrapperInner:{width:"65%"},secondaryNameRoot:{display:"flex",justifyContent:"center",alignItems:"center","& .MuiInputBase-input":{textAlign:"center"}},secondaryNameParenthesis:{fontSize:"4rem"},secondaryNameInputRoot:{display:"flex",flexDirection:"column",width:"100%"},secondaryNameInputZH:{"& .MuiInputBase-input":{fontSize:"1.5rem",lineHeight:"1.5rem"}}})})),x=function(e){var t,n=j(),a=Object(r.useContext)(g.b),i=a.param,o=a.dispatch;return Object(y.jsxs)(s.a,{style:{justifyContent:"center"},children:[Object(y.jsx)("div",{className:n.lineNumRoot,children:Object(y.jsx)("span",{children:i.line_num})}),Object(y.jsx)(l.a,{fullWidth:!0,className:n.numInput,value:null===(t=i.stn_list[e.stnId])||void 0===t?void 0:t.num,onChange:function(t){return o({type:"UPDATE_STATION_NUM",stnId:e.stnId,num:t.target.value})}})]})},O=function(e){var t=Object(f.a)().t,n=j(),a=Object(r.useContext)(g.a).rmgStyle,i=Object(r.useContext)(g.b),o=i.param,c=i.dispatch,d=(o.stn_list[e.stnId]||o.stn_list.linestart).name;return Object(y.jsxs)(s.a,{style:{flexDirection:"column"},children:[Object(y.jsx)(l.a,{fullWidth:!0,placeholder:t("editor.zh"),className:"".concat(n.nameInputZH," ").concat("gzmtr"===a?n["nameInputZH-gzmtr"]:"mtr"===a?n["nameInputZH-mtr"]:""),value:d[0],onChange:function(t){return c({type:"UPDATE_STATION_NAME",stnId:e.stnId,name:[t.target.value,d[1]]})},autoFocus:!0}),Object(y.jsx)(l.a,{fullWidth:!0,placeholder:t("editor.en"),className:"".concat(n.nameInputEN," ").concat("mtr"===a?n["nameInputEN-mtr"]:""),value:d[1],onChange:function(t){return c({type:"UPDATE_STATION_NAME",stnId:e.stnId,name:[d[0],t.target.value]})},helperText:t("editor.backslashToWrap")})]})},I=function(e){var t=Object(f.a)().t,n=j(),a=Object(r.useContext)(g.b),i=a.param,o=a.dispatch,c=(i.stn_list[e.stnId]||i.stn_list.linestart).secondaryName;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(s.a,{children:[Object(y.jsx)(d.a,{children:Object(y.jsx)(u.a,{children:"text_fields"})}),Object(y.jsx)(p.a,{primary:t("stations.edit.name.secondary")}),Object(y.jsx)(m.a,{children:Object(y.jsx)(h.a,{color:"primary",edge:"end",checked:!1!==c,onChange:function(t,n){return o({type:"UPDATE_STATION_SECONDARY_NAME",stnId:e.stnId,name:!!n&&["",""]})}})})]}),Object(y.jsx)(b.a,{in:!1!==c,unmountOnExit:!0,classes:{wrapper:n.collapseWrapper,wrapperInner:n.collapseWrapperInner},children:Object(y.jsxs)("div",{className:n.secondaryNameRoot,children:[Object(y.jsx)("span",{className:n.secondaryNameParenthesis,children:"("}),Object(y.jsxs)("div",{className:n.secondaryNameInputRoot,children:[Object(y.jsx)(l.a,{fullWidth:!0,placeholder:t("editor.zh"),className:n.secondaryNameInputZH,value:c?c[0]:"",onChange:function(t){return o({type:"UPDATE_STATION_SECONDARY_NAME",stnId:e.stnId,name:[t.target.value,c?c[1]:""]})}}),Object(y.jsx)(l.a,{fullWidth:!0,placeholder:t("editor.en"),value:c?c[1]:"",onChange:function(t){return o({type:"UPDATE_STATION_SECONDARY_NAME",stnId:e.stnId,name:[c?c[0]:"",t.target.value]})}})]}),Object(y.jsx)("span",{className:n.secondaryNameParenthesis,children:")"})]})})]})}}}]);
//# sourceMappingURL=panelStationsName.a36ea5c0.chunk.js.map