(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[87],{118:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(1),c=n.n(r),s=n(6),l=n(2),i=n(5);t.default=Object(r.memo)((function(e){var t=Object(r.useContext)(i.a).rmgStyle,n={gzmtr:["local","express"],shmetro:["local","express","direct"]};return c.a.createElement("div",null,c.a.createElement(l.List,null,t in n&&c.a.createElement(m,{stnId:e.stnId,services:n[t]}),["mtr"].includes(t)&&c.a.createElement(o,{stnId:e.stnId})))}));var o=function(e){var t=Object(s.useTranslation)().t,n=Object(r.useContext)(i.b),a=n.param,o=n.dispatch;return c.a.createElement(l.ListItem,null,c.a.createElement(l.ListItemIcon,null,c.a.createElement(l.Icon,null,"place")),c.a.createElement(l.ListItemText,{primary:t("stations.edit.more.facility.button")}),c.a.createElement(l.ListItemSecondaryAction,null,c.a.createElement(l.Select,{native:!0,value:a.stn_list[e.stnId].facility,onChange:function(t){return o({type:"UPDATE_STATION_FACILITY",stnId:e.stnId,facility:t.target.value})}},["","airport","hsr","disney"].map((function(e){return c.a.createElement("option",{key:e,value:e},t("stations.edit.more.facility."+(""===e?"none":e)))})))))},m=function(e){var t=Object(s.useTranslation)().t,n=Object(r.useContext)(i.b),o=n.param,m=n.dispatch,u=new Set(o.stn_list[e.stnId].services);return c.a.createElement(l.ListItem,null,c.a.createElement(l.ListItemIcon,null,c.a.createElement(l.Icon,null,"train")),c.a.createElement(l.ListItemText,{primary:t("stations.edit.more.services.button"),secondary:c.a.createElement(l.FormGroup,{row:!0},e.services.map((function(n){return c.a.createElement(l.FormControlLabel,{control:c.a.createElement(l.Checkbox,{checked:u.has(n),value:n,onChange:(a=n,function(t){"local"!==a&&m({type:"UPDATE_STATION_SERVICES",stnId:e.stnId,serviceId:a,isChecked:t.target.checked})}),disabled:"local"===n}),label:t("stations.edit.more.services."+n),key:n});var a}))),secondaryTypographyProps:Object(a.a)({},"component","div")}))}}}]);
//# sourceMappingURL=panelStationsMore.8354983d.chunk.js.map