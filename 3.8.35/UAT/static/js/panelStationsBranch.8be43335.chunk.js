(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[84],{117:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(6),l=n(2),s=n(13),c=n(5),o=Object(l.makeStyles)((function(){return Object(l.createStyles)({select:{width:166}})}));t.default=function(e){var t=Object(i.useTranslation)().t;return r.a.createElement(l.List,null,r.a.createElement(l.ListItem,null,r.a.createElement(l.ListItemText,null,r.a.createElement("h3",{style:{margin:0}},t("stations.edit.branch.left")))),r.a.createElement(u,{stnId:e.stnId,direction:"left"}),r.a.createElement(l.Divider,null),r.a.createElement(l.ListItem,null,r.a.createElement(l.ListItemText,null,r.a.createElement("h3",{style:{margin:0}},t("stations.edit.branch.right")))),r.a.createElement(u,{stnId:e.stnId,direction:"right"}))};var u=function(e){var t=Object(a.useContext)(c.a).rmgStyle,n=Object(a.useContext)(c.b).param.stn_list[e.stnId].branch[e.direction];return r.a.useMemo((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,e),n[0]&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d,e),"shmetro"!==t&&r.a.createElement(h,e)))}),[e.stnId,e.direction,n[0]])},m=function(e){var t=Object(i.useTranslation)().t,n=o(),a=r.a.useContext(c.b),s=a.param,u=a.dispatch,m=s.stn_list[e.stnId].branch[e.direction],d=function(t){var n=t.target.value;"na"!==n&&n!==m[0]&&u({type:"UPDATE_STATION_BRANCH_TYPE",stnId:e.stnId,direction:e.direction,branchType:n})};return r.a.useMemo((function(){return r.a.createElement(l.ListItem,null,r.a.createElement(l.ListItemIcon,null,r.a.createElement(l.Icon,null,"merge_type")),r.a.createElement(l.ListItemText,{primary:t("stations.edit.branch.type.title")}),r.a.createElement(l.Select,{native:!0,onChange:d,value:m[0]||"na",className:n.select},r.a.createElement("option",{value:"na",disabled:0!==m.length},t("stations.edit.branch.type.na")),r.a.createElement("option",{value:"through",disabled:0===m.length},t("stations.edit.branch.type.through")),r.a.createElement("option",{value:"nonthrough",disabled:0===m.length},t("stations.edit.branch.type.nonThrough"))))}),[e.stnId,m[0]])},d=function(e){var t=Object(i.useTranslation)().t,n=o(),u=Object(a.useContext)(c.a).rmgStyle,m=Object(a.useContext)(c.b),d=m.param,h=m.dispatch,p=d.stn_list[e.stnId],I=p.branch[e.direction],f="left"===e.direction?p.parents:p.children,E=function(t){var n=t.target.value;if(I[1]!==n){var a,r=n,i=d.stn_list;if("right"===e.direction){for(;1===i[r].parents.length;)r=i[r].children[0];a=i[r].parents[f.indexOf(n)]}else{for(;1===i[r].children.length;)r=i[r].parents[0];a=i[r].children[f.indexOf(n)]}h({type:"UPDATE_STATION_BRANCH_FIRST",branches:[{stnId:e.stnId,direction:e.direction,first:n},{stnId:r,direction:"left"===e.direction?"right":"left",first:a}]})}};return r.a.useMemo((function(){return r.a.createElement(l.ListItem,null,r.a.createElement(l.ListItemIcon,null,r.a.createElement(l.Icon,{style:{transform:"left"===e.direction?"scale(-1)":"scale(1)"}},"share")),r.a.createElement(l.ListItemText,{primary:t("stations.edit.branch.first")}),r.a.createElement(l.Select,{native:!0,onChange:E,value:I[1]||f[0],className:n.select},f.map((function(e){return r.a.createElement("option",{key:e,value:e},Object(s.a)(d.stn_list[e],u))}))))}),[e.stnId,I[1],f.toString()])},h=function(e){var t=Object(i.useTranslation)().t,n=o(),a=r.a.useContext(c.b),s=a.param,u=a.dispatch,m=s.stn_list[e.stnId],d=m.branch[e.direction],h="left"===e.direction?m.parents:m.children,p=function(t){var n="lower"===t.target.value?1:0;if(h.indexOf(d[1])!==n){var a=d[1],r=s.stn_list;if("right"===e.direction){for(;1===r[a].parents.length;)a=r[a].children[0];u({type:"UPDATE_STATION_BRANCH_POS",right:e.stnId,left:a})}else{for(;1===r[a].children.length;)a=r[a].parents[0];u({type:"UPDATE_STATION_BRANCH_POS",left:e.stnId,right:a})}}};return r.a.useMemo((function(){return r.a.createElement(l.ListItem,null,r.a.createElement(l.ListItemIcon,null,r.a.createElement(l.Icon,null,"swap_vert")),r.a.createElement(l.ListItemText,{primary:t("stations.edit.branch.pos.title")}),r.a.createElement(l.Select,{native:!0,onChange:p,value:1===h.indexOf(d[1])?"lower":"upper",className:n.select},["upper","lower"].map((function(e){return r.a.createElement("option",{key:e,value:e},t("stations.edit.branch.pos."+e))}))))}),[e.stnId,d[1],h.toString()])}}}]);
//# sourceMappingURL=panelStationsBranch.8be43335.chunk.js.map