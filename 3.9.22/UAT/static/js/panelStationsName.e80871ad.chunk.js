(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[92],{130:function(e,t,n){"use strict";n.r(t);var r=n(1),a=(n(3),n(4)),i=n(12),s=n(10),c=n(2),o=n(7),l=n(0);t.default=function(e){var t=Object(s.useSelector)((function(e){return e.app.rmgStyle}));return Object(l.jsxs)(a.List,{component:"div",children:[t===c.k.GZMTR&&Object(l.jsx)(p,Object(r.a)({},e)),Object(l.jsx)(d,Object(r.a)({},e)),t===c.k.GZMTR&&Object(l.jsx)(m,Object(r.a)({},e))]})};var u=Object(a.makeStyles)((function(){return Object(a.createStyles)({lineNumRoot:{display:"inline-flex",alignItems:"center",justifyContent:"center",border:"solid 2px",borderRightWidth:1,borderRadius:"32px 0 0 32px",padding:"2px 5px",minWidth:32,height:32,fontSize:"1.5rem"},numInput:{display:"inline-block",border:"solid 2px",borderLeftWidth:1,borderRadius:"0 32px 32px 0",padding:"2px 5px",width:32,height:32,"& .MuiInputBase-root":{marginTop:1.7},"& .MuiInputBase-input":{fontSize:"1.5rem",padding:"unset",textAlign:"center"}},nameInputZH:{"& .MuiInputBase-input":{textAlign:"center",fontSize:"3rem",lineHeight:"3rem"}},nameInputEN:{"& .MuiInputBase-input":{textAlign:"center",fontSize:"1.2rem",lineHeight:"1.2rem"}},"nameInputZH-mtr":{"& .MuiInputBase-input":{fontFamily:["Myriad Pro","Vegur","Noto Serif KR","Noto Serif JP","Noto Serif TC","Noto Serif SC","HiraMinProN-W6","serif"].join()}},"nameInputEN-mtr":{"& .MuiInputBase-input":{fontFamily:["Myriad Pro","Vegur","Arial","sans-serif"].join()}},"nameInputZH-gzmtr":{"& .MuiInputBase-input":{fontFamily:["Arial","STKaiti","KaiTi","sans-serif"].join()}},collapseWrapper:{justifyContent:"center"},collapseWrapperInner:{width:"65%"},secondaryNameRoot:{display:"flex",justifyContent:"center",alignItems:"center","& .MuiInputBase-input":{textAlign:"center"}},secondaryNameParenthesis:{fontSize:"4rem"},secondaryNameInputRoot:{display:"flex",flexDirection:"column",width:"100%"},secondaryNameInputZH:{"& .MuiInputBase-input":{fontSize:"1.5rem",lineHeight:"1.5rem"}}})})),p=function(e){var t=e.stnId,n=u(),r=Object(s.useDispatch)(),i=Object(s.useSelector)((function(e){return e.param.line_num})),c=Object(s.useSelector)((function(e){return e.param.stn_list[t]}));return Object(l.jsxs)(a.ListItem,{style:{justifyContent:"center"},children:[Object(l.jsx)("div",{className:n.lineNumRoot,children:Object(l.jsx)("span",{children:i})}),Object(l.jsx)(a.TextField,{fullWidth:!0,className:n.numInput,value:null===c||void 0===c?void 0:c.num,onChange:function(e){var n=e.target.value;r(Object(o.eb)(t,n))}})]})},d=function(e){var t=e.stnId,n=Object(i.useTranslation)().t,r=u(),p=Object(s.useDispatch)(),d=Object(s.useSelector)((function(e){return e.app.rmgStyle})),m=Object(s.useSelector)((function(e){return e.param.stn_list[t]})).name;return Object(l.jsxs)(a.ListItem,{style:{flexDirection:"column"},children:[Object(l.jsx)(a.TextField,{fullWidth:!0,placeholder:n("editor.zh"),className:"".concat(r.nameInputZH," ").concat(d===c.k.GZMTR?r["nameInputZH-gzmtr"]:d===c.k.MTR?r["nameInputZH-mtr"]:""),value:m[0],onChange:function(e){var n=e.target.value;return p(Object(o.db)(t,[n,m[1]]))},autoFocus:!0}),Object(l.jsx)(a.TextField,{fullWidth:!0,placeholder:n("editor.en"),className:"".concat(r.nameInputEN," ").concat(d===c.k.MTR?r["nameInputEN-mtr"]:""),value:m[1],onChange:function(e){var n=e.target.value;return p(Object(o.db)(t,[m[0],n]))},helperText:n("editor.backslashToWrap")})]})},m=function(e){var t=e.stnId,n=Object(i.useTranslation)().t,r=u(),c=Object(s.useDispatch)(),p=Object(s.useSelector)((function(e){return e.param.stn_list[t]})).secondaryName;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(a.ListItem,{children:[Object(l.jsx)(a.ListItemIcon,{children:Object(l.jsx)(a.Icon,{children:"text_fields"})}),Object(l.jsx)(a.ListItemText,{primary:n("stations.edit.name.secondary")}),Object(l.jsx)(a.ListItemSecondaryAction,{children:Object(l.jsx)(a.Switch,{color:"primary",edge:"end",checked:!1!==p,onChange:function(e,n){c(Object(o.hb)(t,!!n&&["",""]))}})})]}),Object(l.jsx)(a.Collapse,{in:!1!==p,unmountOnExit:!0,classes:{wrapper:r.collapseWrapper,wrapperInner:r.collapseWrapperInner},children:Object(l.jsxs)("div",{className:r.secondaryNameRoot,children:[Object(l.jsx)("span",{className:r.secondaryNameParenthesis,children:"("}),Object(l.jsxs)("div",{className:r.secondaryNameInputRoot,children:[Object(l.jsx)(a.TextField,{fullWidth:!0,placeholder:n("editor.zh"),className:r.secondaryNameInputZH,value:p?p[0]:"",onChange:function(e){var n=e.target.value;c(Object(o.hb)(t,[n,p?p[1]:""]))}}),Object(l.jsx)(a.TextField,{fullWidth:!0,placeholder:n("editor.en"),value:p?p[1]:"",onChange:function(e){var n=e.target.value;c(Object(o.hb)(t,[p?p[0]:"",n]))}})]}),Object(l.jsx)("span",{className:r.secondaryNameParenthesis,children:")"})]})})]})}}}]);
//# sourceMappingURL=panelStationsName.e80871ad.chunk.js.map