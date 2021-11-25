(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[117],{250:function(e,t,n){"use strict";var a=n(1),i=n(37),r=n(4),c=n(0),s=n(5),o=(n(8),n(134)),l=n(7),u=n(82),d=n(61),j=n(34),b=n(16),m=c.forwardRef((function(e,t){var n=e.children,l=e.classes,m=e.className,p=e.collapsedHeight,O=e.collapsedSize,h=void 0===O?"0px":O,x=e.component,f=void 0===x?"div":x,g=e.disableStrictModeCompat,v=void 0!==g&&g,y=e.in,E=e.onEnter,N=e.onEntered,w=e.onEntering,S=e.onExit,L=e.onExited,_=e.onExiting,C=e.style,D=e.timeout,H=void 0===D?u.b.standard:D,M=e.TransitionComponent,R=void 0===M?o.a:M,k=Object(r.a)(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),P=Object(j.a)(),T=c.useRef(),z=c.useRef(null),F=c.useRef(),I="number"===typeof(p||h)?"".concat(p||h,"px"):p||h;c.useEffect((function(){return function(){clearTimeout(T.current)}}),[]);var A=P.unstable_strictMode&&!v,G=c.useRef(null),J=Object(b.a)(t,A?G:void 0),V=function(e){return function(t,n){if(e){var a=A?[G.current,t]:[t,n],r=Object(i.a)(a,2),c=r[0],s=r[1];void 0===s?e(c):e(c,s)}}},W=V((function(e,t){e.style.height=I,E&&E(e,t)})),$=V((function(e,t){var n=z.current?z.current.clientHeight:0,a=Object(d.a)({style:C,timeout:H},{mode:"enter"}).duration;if("auto"===H){var i=P.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),F.current=i}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),w&&w(e,t)})),U=V((function(e,t){e.style.height="auto",N&&N(e,t)})),X=V((function(e){var t=z.current?z.current.clientHeight:0;e.style.height="".concat(t,"px"),S&&S(e)})),Z=V(L),q=V((function(e){var t=z.current?z.current.clientHeight:0,n=Object(d.a)({style:C,timeout:H},{mode:"exit"}).duration;if("auto"===H){var a=P.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),F.current=a}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=I,_&&_(e)}));return c.createElement(R,Object(a.a)({in:y,onEnter:W,onEntered:U,onEntering:$,onExit:X,onExited:Z,onExiting:q,addEndListener:function(e,t){var n=A?e:t;"auto"===H&&(T.current=setTimeout(n,F.current||0))},nodeRef:A?G:void 0,timeout:"auto"===H?null:H},k),(function(e,t){return c.createElement(f,Object(a.a)({className:Object(s.a)(l.root,l.container,m,{entered:l.entered,exited:!y&&"0px"===I&&l.hidden}[e]),style:Object(a.a)({minHeight:I},C),ref:J},t),c.createElement("div",{className:l.wrapper,ref:z},c.createElement("div",{className:l.wrapperInner},n)))}))}));m.muiSupportAuto=!0,t.a=Object(l.a)((function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(m)},349:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(333),c=n(131),s=n(168),o=n(174),l=n(30),u=n(137),d=n(157),j=n(178),b=n(170),m=n(132),p=n(324),O=n(167),h=n(325),x=n(250),f=n(348),g=n(1),v=n(4),y=(n(8),n(5)),E=n(163),N=n(7),w=n(186),S=a.forwardRef((function(e,t){var n=e.children,i=e.classes,r=e.className,c=e.component,s=void 0===c?"div":c,o=e.disablePointerEvents,l=void 0!==o&&o,u=e.disableTypography,d=void 0!==u&&u,j=e.position,b=e.variant,m=Object(v.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),p=Object(w.b)()||{},O=b;return b&&p.variant,p&&!O&&(O=p.variant),a.createElement(w.a.Provider,{value:null},a.createElement(s,Object(g.a)({className:Object(y.a)(i.root,r,"end"===j?i.positionEnd:i.positionStart,l&&i.disablePointerEvents,p.hiddenLabel&&i.hiddenLabel,"filled"===O&&i.filled,"dense"===p.margin&&i.marginDense),ref:t},m),"string"!==typeof n||d?n:a.createElement(E.a,{color:"textSecondary"},n)))})),L=Object(N.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(S),_=n(361),C=n(21),D=n(6),H=n(14),M=n(2),R=Object(d.a)((function(e){return Object(j.a)({nestedList:{paddingLeft:e.spacing(5)},textField:{maxWidth:168},slider:{width:168,marginLeft:8,marginRight:8}})})),k=Object(a.memo)((function(){var e=Object(C.c)((function(e){return e.param.style}));return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(P,{}),Object(M.jsx)(b.a,{}),e!==D.k.SHMetro&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(T,{}),Object(M.jsx)(b.a,{})]}),Object(M.jsx)(z,{}),Object(M.jsx)(b.a,{}),Object(M.jsx)(F,{})]})})),P=function(){var e=Object(u.a)().t,t=R(),n=Object(C.b)(),i=Object(C.c)((function(e){return e.param.style})),r=Object(C.c)((function(e){return e.param.svg_height})),c=Object(C.c)((function(e){return e.param.svgWidth})),o=Object(a.useState)(!1),d=Object(l.a)(o,2),j=d[0],g=d[1],v=function(e){return function(t){var a=t.target.value;isNaN(Number(a))||n(Object(H.V)(Number(a),e))}};return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(m.a,{button:!0,onClick:function(){return g((function(e){return!e}))},children:[Object(M.jsx)(p.a,{children:Object(M.jsx)(O.a,{children:"panorama_horizontal"})}),Object(M.jsx)(h.a,{primary:e("layout.size.title")}),j?Object(M.jsx)(O.a,{color:"action",children:"expand_less"}):Object(M.jsx)(O.a,{color:"action",children:"expand_more"})]}),Object(M.jsx)(x.a,{in:j,unmountOnExit:!0,children:Object(M.jsxs)(s.a,{component:"div",disablePadding:!0,className:t.nestedList,children:[D.o[i].map((function(n){return Object(M.jsxs)(a.Fragment,{children:[Object(M.jsxs)(m.a,{children:[Object(M.jsx)(h.a,{primary:e("layout.size.width."+n)}),Object(M.jsx)(f.a,{defaultValue:c[n].toString(),onChange:v(n),className:t.textField,InputProps:{endAdornment:Object(M.jsx)(L,{position:"end",children:"px"})}})]}),Object(M.jsx)(b.a,{variant:"middle"})]},n+".width")})),Object(M.jsxs)(m.a,{children:[Object(M.jsx)(h.a,{primary:e("layout.size.height")}),Object(M.jsx)(f.a,{value:r.toString(),onChange:function(e){var t=e.target.value;isNaN(Number(t))||n(Object(H.U)(Number(t)))},className:t.textField,InputProps:{endAdornment:Object(M.jsx)(L,{position:"end",children:"px"})}})]})]})})]})},T=function(){var e=Object(u.a)().t,t=R(),n=Object(C.b)(),i=Object(C.c)((function(e){return e.param.y_pc}));return Object(a.useMemo)((function(){return Object(M.jsxs)(m.a,{children:[Object(M.jsx)(p.a,{children:Object(M.jsx)(O.a,{children:"vertical_align_center"})}),Object(M.jsx)(h.a,{primary:e("layout.y")}),Object(M.jsx)(_.a,{className:t.slider,value:i,onChange:function(e,t){n(Object(H.X)(t))},step:.01,marks:[{value:0,label:"0%"},{value:100,label:"100%"}],valueLabelDisplay:"auto"})]})}),[i,t.slider,e,n])},z=function(){var e=Object(u.a)().t,t=R(),n=Object(C.b)(),i=Object(C.c)((function(e){return e.param.branch_spacing}));return Object(a.useMemo)((function(){return Object(M.jsxs)(m.a,{children:[Object(M.jsx)(p.a,{children:Object(M.jsx)(O.a,{children:"format_line_spacing"})}),Object(M.jsx)(h.a,{primary:e("layout.branchSpacing")}),Object(M.jsx)(_.a,{className:t.slider,value:i,onChange:function(e,t){n(Object(H.G)(t))},step:.01,marks:[{value:0,label:"0px"},{value:100,label:"100px"}],valueLabelDisplay:"auto"})]})}),[i,t.slider,e,n])},F=function(){var e=Object(u.a)().t,t=R(),n=Object(C.b)(),i=Object(C.c)((function(e){return e.param.padding}));return Object(a.useMemo)((function(){return Object(M.jsxs)(m.a,{children:[Object(M.jsx)(p.a,{children:Object(M.jsx)(O.a,{children:"stay_current_landscape"})}),Object(M.jsx)(h.a,{primary:e("layout.padding")}),Object(M.jsx)(_.a,{className:t.slider,value:i,onChange:function(e,t){n(Object(H.O)(t))},step:.01,max:50,marks:[{value:0,label:"0%"},{value:50,label:"50%"}],valueLabelDisplay:"auto"})]})}),[i,t.slider,e,n])},I=i.a.lazy((function(){return n.e(118).then(n.bind(null,338))})),A=i.a.memo((function(){var e=Object(C.c)((function(e){return e.param.style}));return Object(M.jsx)(r.a,{container:!0,spacing:3,justifyContent:"center",alignItems:"flex-start",children:Object(M.jsx)(r.a,{item:!0,xs:12,sm:10,md:7,lg:5,children:Object(M.jsx)(c.a,{children:Object(M.jsxs)(s.a,{component:"div",disablePadding:!0,children:[Object(M.jsx)(k,{}),e===D.k.GZMTR&&Object(M.jsx)(i.a.Suspense,{fallback:Object(M.jsx)(o.a,{}),children:Object(M.jsx)(I,{})})]})})})})}));t.default=A}}]);
//# sourceMappingURL=panelLayout.eca18129.chunk.js.map