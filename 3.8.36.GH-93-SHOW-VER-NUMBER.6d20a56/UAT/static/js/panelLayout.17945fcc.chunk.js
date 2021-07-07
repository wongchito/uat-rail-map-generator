(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[82],{218:function(e,t,n){"use strict";var a=n(2),i=n(4),r=n(0),s=n(5),c=(n(7),n(116)),o=n(6),l=n(70),u=n(50),d=n(29),j=r.forwardRef((function(e,t){var n=e.children,o=e.classes,j=e.className,b=e.collapsedHeight,m=void 0===b?"0px":b,p=e.component,h=void 0===p?"div":p,x=e.in,O=e.onEnter,g=e.onEntered,v=e.onEntering,f=e.onExit,y=e.onExiting,E=e.style,N=e.timeout,_=void 0===N?l.b.standard:N,S=Object(i.a)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","timeout"]),C=Object(d.a)(),w=r.useRef(),D=r.useRef(null),L=r.useRef(),H="number"===typeof m?"".concat(m,"px"):m;r.useEffect((function(){return function(){clearTimeout(w.current)}}),[]);return r.createElement(c.a,Object(a.a)({in:x,onEnter:function(e,t){e.style.height=H,O&&O(e,t)},onEntered:function(e,t){e.style.height="auto",g&&g(e,t)},onEntering:function(e,t){var n=D.current?D.current.clientHeight:0,a=Object(u.a)({style:E,timeout:_},{mode:"enter"}).duration;if("auto"===_){var i=C.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),L.current=i}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),v&&v(e,t)},onExit:function(e){var t=D.current?D.current.clientHeight:0;e.style.height="".concat(t,"px"),f&&f(e)},onExiting:function(e){var t=D.current?D.current.clientHeight:0,n=Object(u.a)({style:E,timeout:_},{mode:"exit"}).duration;if("auto"===_){var a=C.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),L.current=a}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=H,y&&y(e)},addEndListener:function(e,t){"auto"===_&&(w.current=setTimeout(t,L.current||0))},timeout:"auto"===_?null:_},S),(function(e,i){return r.createElement(h,Object(a.a)({className:Object(s.a)(o.container,j,{entered:o.entered,exited:!x&&"0px"===H&&o.hidden}[e]),style:Object(a.a)({minHeight:H},E),ref:t},i),r.createElement("div",{className:o.wrapper,ref:D},r.createElement("div",{className:o.wrapperInner},n)))}))}));j.muiSupportAuto=!0,t.a=Object(o.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(j)},297:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(283),s=n(113),c=n(149),o=n(155),l=n(17),u=n(119),d=n(138),j=n(158),b=n(151),m=n(114),p=n(275),h=n(148),x=n(276),O=n(218),g=n(294),v=n(2),f=n(4),y=(n(7),n(5)),E=n(144),N=n(6),_=n(168),S=a.forwardRef((function(e,t){var n=e.children,i=e.classes,r=e.className,s=e.component,c=void 0===s?"div":s,o=e.disablePointerEvents,l=void 0!==o&&o,u=e.disableTypography,d=void 0!==u&&u,j=e.position,b=e.variant,m=Object(f.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),p=Object(_.b)()||{},h=b;return b&&p.variant,p&&!h&&(h=p.variant),a.createElement(_.a.Provider,{value:null},a.createElement(c,Object(v.a)({className:Object(y.a)(i.root,r,l&&i.disablePointerEvents,p.hiddenLabel&&i.hiddenLabel,"filled"===h&&i.filled,{start:i.positionStart,end:i.positionEnd}[j],"dense"===p.margin&&i.marginDense),ref:t},m),"string"!==typeof n||d?n:a.createElement(E.a,{color:"textSecondary"},n)))})),C=Object(N.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(S),w=n(306),D=n(28),L=n(3),H=Object(d.a)((function(e){return Object(j.a)({nestedList:{paddingLeft:e.spacing(5)},textField:{maxWidth:168},slider:{width:168,marginLeft:8,marginRight:8}})})),I=Object(a.memo)((function(){var e=Object(a.useContext)(D.a).rmgStyle;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(T,{}),Object(L.jsx)(b.a,{}),"shmetro"!==e&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(P,{}),Object(L.jsx)(b.a,{})]}),Object(L.jsx)(A,{}),Object(L.jsx)(b.a,{}),Object(L.jsx)(R,{})]})})),T=function(){var e=Object(u.a)().t,t=H(),n=Object(a.useContext)(D.b),r=n.param,s=n.dispatch,o=Object(a.useContext)(D.a).canvasAvailable,d=Object(a.useState)(!1),j=Object(l.a)(d,2),v=j[0],f=j[1];return Object(a.useMemo)((function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(m.a,{button:!0,onClick:function(){return f((function(e){return!e}))},children:[Object(L.jsx)(p.a,{children:Object(L.jsx)(h.a,{children:"panorama_horizontal"})}),Object(L.jsx)(x.a,{primary:e("layout.size.title")}),v?Object(L.jsx)(h.a,{color:"action",children:"expand_less"}):Object(L.jsx)(h.a,{color:"action",children:"expand_more"})]}),Object(L.jsx)(O.a,{in:v,unmountOnExit:!0,children:Object(L.jsxs)(c.a,{component:"div",disablePadding:!0,className:t.nestedList,children:[o.map((function(n){return Object(L.jsxs)(i.a.Fragment,{children:[Object(L.jsxs)(m.a,{children:[Object(L.jsx)(x.a,{primary:e("layout.size.width."+n)}),Object(L.jsx)(g.a,{value:r.svgWidth[n].toString(),onChange:function(e){return!isNaN(Number(e.target.value))&&s({type:"SET_WIDTH",targetId:n,value:Number(e.target.value)})},className:t.textField,InputProps:{endAdornment:Object(L.jsx)(C,{position:"end",children:"px"})}})]}),Object(L.jsx)(b.a,{variant:"middle"})]},n)})),Object(L.jsxs)(m.a,{children:[Object(L.jsx)(x.a,{primary:e("layout.size.height")}),Object(L.jsx)(g.a,{value:r.svg_height.toString(),onChange:function(e){return!isNaN(Number(e.target.value))&&s({type:"SET_HEIGHT",value:Number(e.target.value)})},className:t.textField,InputProps:{endAdornment:Object(L.jsx)(C,{position:"end",children:"px"})}})]})]})})]})}),[JSON.stringify(r.svgWidth),r.svg_height,v,t.nestedList])},P=function(){var e=Object(u.a)().t,t=H(),n=Object(a.useContext)(D.b),i=n.param,r=n.dispatch;return Object(a.useMemo)((function(){return Object(L.jsxs)(m.a,{children:[Object(L.jsx)(p.a,{children:Object(L.jsx)(h.a,{children:"vertical_align_center"})}),Object(L.jsx)(x.a,{primary:e("layout.y")}),Object(L.jsx)(w.a,{className:t.slider,value:i.y_pc,onChange:function(e,t){return r({type:"SET_Y",value:t})},step:.01,marks:[{value:0,label:"0%"},{value:100,label:"100%"}],valueLabelDisplay:"auto"})]})}),[i.y_pc,t.slider])},A=function(){var e=Object(u.a)().t,t=H(),n=Object(a.useContext)(D.b),i=n.param,r=n.dispatch;return Object(a.useMemo)((function(){return Object(L.jsxs)(m.a,{children:[Object(L.jsx)(p.a,{children:Object(L.jsx)(h.a,{children:"format_line_spacing"})}),Object(L.jsx)(x.a,{primary:e("layout.branchSpacing")}),Object(L.jsx)(w.a,{className:t.slider,value:i.branch_spacing,onChange:function(e,t){return r({type:"SET_BRANCH_SPACING",value:t})},step:.01,marks:[{value:0,label:"0px"},{value:100,label:"100px"}],valueLabelDisplay:"auto"})]})}),[i.branch_spacing,t.slider])},R=function(){var e=Object(u.a)().t,t=H(),n=Object(a.useContext)(D.b),i=n.param,r=n.dispatch;return Object(a.useMemo)((function(){return Object(L.jsxs)(m.a,{children:[Object(L.jsx)(p.a,{children:Object(L.jsx)(h.a,{children:"stay_current_landscape"})}),Object(L.jsx)(x.a,{primary:e("layout.padding")}),Object(L.jsx)(w.a,{className:t.slider,value:i.padding,onChange:function(e,t){return r({type:"SET_PADDING",value:t})},step:.01,max:50,marks:[{value:0,label:"0%"},{value:50,label:"50%"}],valueLabelDisplay:"auto"})]})}),[i.padding,t.slider])},k=i.a.lazy((function(){return n.e(83).then(n.bind(null,285))})),F=i.a.memo((function(){var e=Object(a.useContext)(D.a).rmgStyle;return Object(L.jsx)(r.a,{container:!0,spacing:3,justify:"center",alignItems:"flex-start",children:Object(L.jsx)(r.a,{item:!0,xs:12,sm:10,md:7,lg:5,children:Object(L.jsx)(s.a,{children:Object(L.jsxs)(c.a,{component:"div",disablePadding:!0,children:[Object(L.jsx)(I,{}),"gzmtr"===e&&Object(L.jsx)(i.a.Suspense,{fallback:Object(L.jsx)(o.a,{}),children:Object(L.jsx)(k,{})})]})})})})}));t.default=F}}]);
//# sourceMappingURL=panelLayout.17945fcc.chunk.js.map