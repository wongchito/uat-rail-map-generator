(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[92],{132:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(4),n(3)),i=n(14),c=n(7),s=n(2),o=n(8),l=n(0);t.default=function(e){var t=Object(c.c)((function(e){return e.app.rmgStyle}));return Object(l.jsxs)(r.List,{component:"div",children:[t===s.k.GZMTR&&Object(l.jsx)(p,Object(a.a)({},e)),Object(l.jsx)(d,Object(a.a)({},e)),t===s.k.GZMTR&&Object(l.jsx)(m,Object(a.a)({},e))]})};var u=Object(r.makeStyles)((function(){return Object(r.createStyles)({lineNumRoot:{display:"inline-flex",alignItems:"center",justifyContent:"center",border:"solid 2px",borderRightWidth:1,borderRadius:"32px 0 0 32px",padding:"2px 5px",minWidth:32,height:32,fontSize:"1.5rem"},numInput:{display:"inline-block",border:"solid 2px",borderLeftWidth:1,borderRadius:"0 32px 32px 0",padding:"2px 5px",width:32,height:32,"& .MuiInputBase-root":{marginTop:1.7},"& .MuiInputBase-input":{fontSize:"1.5rem",padding:"unset",textAlign:"center"}},nameInputZH:{"& .MuiInputBase-input":{textAlign:"center",fontSize:"3rem",lineHeight:"3rem"}},nameInputEN:{"& .MuiInputBase-input":{textAlign:"center",fontSize:"1.2rem",lineHeight:"1.2rem"}},"nameInputZH-mtr":{"& .MuiInputBase-input":{fontFamily:["Myriad Pro","Vegur","Noto Serif KR","Noto Serif JP","Noto Serif TC","Noto Serif SC","HiraMinProN-W6","serif"].join()}},"nameInputEN-mtr":{"& .MuiInputBase-input":{fontFamily:["Myriad Pro","Vegur","Arial","sans-serif"].join()}},"nameInputZH-gzmtr":{"& .MuiInputBase-input":{fontFamily:["Arial","STKaiti","KaiTi","sans-serif"].join()}},collapseWrapper:{justifyContent:"center"},collapseWrapperInner:{width:"65%"},secondaryNameRoot:{display:"flex",justifyContent:"center",alignItems:"center","& .MuiInputBase-input":{textAlign:"center"}},secondaryNameParenthesis:{fontSize:"4rem"},secondaryNameInputRoot:{display:"flex",flexDirection:"column",width:"100%"},secondaryNameInputZH:{"& .MuiInputBase-input":{fontSize:"1.5rem",lineHeight:"1.5rem"}}})})),p=function(e){var t=e.stnId,n=u(),a=Object(c.b)(),i=Object(c.c)((function(e){return e.param.line_num})),s=Object(c.c)((function(e){return e.param.stn_list[t]}));return Object(l.jsxs)(r.ListItem,{style:{justifyContent:"center"},children:[Object(l.jsx)("div",{className:n.lineNumRoot,children:Object(l.jsx)("span",{children:i})}),Object(l.jsx)(r.TextField,{fullWidth:!0,className:n.numInput,value:null===s||void 0===s?void 0:s.num,onChange:function(e){var n=e.target.value;a(Object(o.eb)(t,n))}})]})},d=function(e){var t=e.stnId,n=Object(i.useTranslation)().t,a=u(),p=Object(c.b)(),d=Object(c.c)((function(e){return e.app.rmgStyle})),m=Object(c.c)((function(e){return e.param.stn_list[t]})).name;return Object(l.jsxs)(r.ListItem,{style:{flexDirection:"column"},children:[Object(l.jsx)(r.TextField,{fullWidth:!0,placeholder:n("editor.zh"),className:"".concat(a.nameInputZH," ").concat(d===s.k.GZMTR?a["nameInputZH-gzmtr"]:d===s.k.MTR?a["nameInputZH-mtr"]:""),value:m[0],onChange:function(e){var n=e.target.value;return p(Object(o.db)(t,[n,m[1]]))},autoFocus:!0}),Object(l.jsx)(r.TextField,{fullWidth:!0,placeholder:n("editor.en"),className:"".concat(a.nameInputEN," ").concat(d===s.k.MTR?a["nameInputEN-mtr"]:""),value:m[1],onChange:function(e){var n=e.target.value;return p(Object(o.db)(t,[m[0],n]))},helperText:n("editor.backslashToWrap")})]})},m=function(e){var t=e.stnId,n=Object(i.useTranslation)().t,a=u(),s=Object(c.b)(),p=Object(c.c)((function(e){return e.param.stn_list[t]})).secondaryName;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(r.ListItem,{children:[Object(l.jsx)(r.ListItemIcon,{children:Object(l.jsx)(r.Icon,{children:"text_fields"})}),Object(l.jsx)(r.ListItemText,{primary:n("stations.edit.name.secondary")}),Object(l.jsx)(r.ListItemSecondaryAction,{children:Object(l.jsx)(r.Switch,{color:"primary",edge:"end",checked:!1!==p,onChange:function(e,n){s(Object(o.hb)(t,!!n&&["",""]))}})})]}),Object(l.jsx)(r.Collapse,{in:!1!==p,unmountOnExit:!0,classes:{wrapper:a.collapseWrapper,wrapperInner:a.collapseWrapperInner},children:Object(l.jsxs)("div",{className:a.secondaryNameRoot,children:[Object(l.jsx)("span",{className:a.secondaryNameParenthesis,children:"("}),Object(l.jsxs)("div",{className:a.secondaryNameInputRoot,children:[Object(l.jsx)(r.TextField,{fullWidth:!0,placeholder:n("editor.zh"),className:a.secondaryNameInputZH,value:p?p[0]:"",onChange:function(e){var n=e.target.value;s(Object(o.hb)(t,[n,p?p[1]:""]))}}),Object(l.jsx)(r.TextField,{fullWidth:!0,placeholder:n("editor.en"),value:p?p[1]:"",onChange:function(e){var n=e.target.value;s(Object(o.hb)(t,[p?p[0]:"",n]))}})]}),Object(l.jsx)("span",{className:a.secondaryNameParenthesis,children:")"})]})})]})}}}]);
//# sourceMappingURL=panelStationsName.18562720.chunk.js.map