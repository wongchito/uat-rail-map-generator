(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[81],{112:function(e,n,a){var t={"./basic/blank":[78,0],"./basic/blank.ts":[78,0],"./basic/default":[80,42],"./basic/default.ts":[80,42],"./data":[76],"./data.ts":[76],"./gzmtr/gf":[81,63],"./gzmtr/gf.ts":[81,63],"./gzmtr/gz1":[82,67],"./gzmtr/gz1.ts":[82,67],"./gzmtr/gz14":[83,37],"./gzmtr/gz14.ts":[83,37],"./gzmtr/gz2":[84,38],"./gzmtr/gz2.ts":[84,38],"./gzmtr/gz21":[85,39],"./gzmtr/gz21.ts":[85,39],"./gzmtr/gz3":[86,40],"./gzmtr/gz3.ts":[86,40],"./gzmtr/gz4":[87,41],"./gzmtr/gz4.ts":[87,41],"./gzmtr/gz5":[88,43],"./gzmtr/gz5.ts":[88,43],"./gzmtr/gz6":[89,44],"./gzmtr/gz6.ts":[89,44],"./gzmtr/gz7":[90,45],"./gzmtr/gz7.ts":[90,45],"./gzmtr/gz8":[91,46],"./gzmtr/gz8.ts":[91,46],"./gzmtr/gz9":[92,47],"./gzmtr/gz9.ts":[92,47],"./mlm/taipa":[93,48],"./mlm/taipa.ts":[93,48],"./mtr/ael":[94,49],"./mtr/ael.ts":[94,49],"./mtr/drl":[95,50],"./mtr/drl.ts":[95,50],"./mtr/eal":[96,51],"./mtr/eal.ts":[96,51],"./mtr/isl":[97,52],"./mtr/isl.ts":[97,52],"./mtr/ktl":[98,53],"./mtr/ktl.ts":[98,53],"./mtr/sile":[99,54],"./mtr/sile.ts":[99,54],"./mtr/tkl":[100,55],"./mtr/tkl.ts":[100,55],"./mtr/tml":[101,56],"./mtr/tml.ts":[101,56],"./mtr/twl":[102,57],"./mtr/twl.ts":[102,57],"./shmetro/sh1":[103,58],"./shmetro/sh1.ts":[103,58],"./shmetro/sh11":[104,59],"./shmetro/sh11.ts":[104,59],"./shmetro/sh16":[105,60],"./shmetro/sh16.ts":[105,60],"./shmetro/sh2":[106,61],"./shmetro/sh2.ts":[106,61],"./shmetro/sh5":[107,62],"./shmetro/sh5.ts":[107,62],"./shmetro/sh6":[108,64],"./shmetro/sh6.ts":[108,64],"./shmetro/sh7":[109,65],"./shmetro/sh7.ts":[109,65],"./shmetro/sh8":[110,66],"./shmetro/sh8.ts":[110,66]};function i(e){if(!a.o(t,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],i=n[0];return Promise.all(n.slice(1).map(a.e)).then((function(){return a(i)}))}i.keys=function(){return Object.keys(t)},i.id=112,e.exports=i},133:function(e,n,a){"use strict";a.r(n);var t=a(6),i=a.n(t),s=a(9),r=a(7),m=a(2),o=a(3),h=a(11),l=a(4),z=a(21),c=a(76),g=a(1),u=Object(l.makeStyles)((function(e){var n,a;return Object(l.createStyles)({root:(n={display:"flex",flexDirection:"row"},Object(m.a)(n,e.breakpoints.down("xs"),{flexDirection:"column",paddingTop:0,paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(m.a)(n,e.breakpoints.up("sm"),{height:350}),n),tab:(a={minWidth:0,"& .MuiTab-wrapper":{flexDirection:"row"}},Object(m.a)(a,e.breakpoints.down("xs"),{minWidth:"calc(100% / 3)"}),Object(m.a)(a,e.breakpoints.up("sm"),{"& .MuiTab-wrapper":{justifyContent:"flex-start"}}),a),tabpanel:{flex:1,overflow:"auto",minWidth:220}})})),f=function(e){var n=Object(h.useTranslation)(),t=n.t,m=n.i18n,f=u(),H=Object(l.useTheme)(),d=Object(l.useMediaQuery)(H.breakpoints.down("xs")),b=o.useState(0),p=Object(r.a)(b,2),L=p[0],j=p[1],x=c.companies[L].id;return o.useMemo((function(){return Object(g.jsxs)(l.Dialog,{open:e.open,onClose:function(){return e.onClose()},children:[Object(g.jsx)(l.DialogTitle,{children:t("file.new.title")}),Object(g.jsxs)(l.DialogContent,{dividers:!0,className:f.root,children:[Object(g.jsx)(l.Tabs,{value:L,orientation:d?"horizontal":"vertical",variant:"scrollable",scrollButtons:"off",textColor:"primary",indicatorColor:"primary",onChange:function(e,n){return j(n)},children:c.companies.map((function(e){return Object(g.jsx)(l.Tab,{label:Object(z.b)(e.name,m.languages),className:f.tab},e.id)}))}),Object(g.jsx)(l.Typography,{component:"div",role:"tabpanel",className:f.tabpanel,children:Object(g.jsx)(l.List,{disablePadding:!0,children:c.templateList[c.companies[L].id].map((function(e){return Object(g.jsx)(l.ListItem,{button:!0,onClick:(n=e.filename,Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(112)("./".concat(x,"/").concat(n));case 3:return t=e.sent,e.next=6,window.rmgStorage.writeFile("rmgParam",JSON.stringify(t.default));case 6:window.location.reload(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))),children:Object(g.jsx)(l.ListItemText,{primary:Object(z.b)(e.name,m.languages)})},e.filename);var n}))})})]}),Object(g.jsx)(l.DialogActions,{children:Object(g.jsx)(l.Button,{variant:"outlined",onClick:function(){return e.onClose()},color:"primary",autoFocus:!0,children:t("dialog.cancel")})})]})}),[e.open,L,d,m.language,JSON.stringify(f)])};n.default=f},76:function(e,n,a){"use strict";a.r(n),a.d(n,"companies",(function(){return t})),a.d(n,"templateList",(function(){return i}));var t=[{id:"basic",name:{en:"Basic",zh:"\u57fa\u672c"}},{id:"gzmtr",name:{en:"Guangzhou Metro","zh-Hans":"\u5e7f\u5dde\u5730\u94c1","zh-Hant":"\u5ee3\u5dde\u5730\u9435"}},{id:"mlm",name:{en:"Macao LRT",pt:"Metro Ligeiro de Macau","zh-Hans":"\u6fb3\u95e8\u8f7b\u8f68","zh-Hant":"\u6fb3\u9580\u8f15\u8ecc"}},{id:"mtr",name:{en:"MTR","zh-Hans":"\u6e2f\u94c1","zh-Hant":"\u6e2f\u9435"}},{id:"shmetro",name:{en:"Shanghai Metro","zh-Hans":"\u4e0a\u6d77\u5730\u94c1","zh-Hant":"\u4e0a\u6d77\u5730\u9435"}}],i={basic:[{filename:"blank",name:{en:"Blank",zh:"\u7a7a\u767d"}},{filename:"default",name:{en:"Default","zh-Hans":"\u9ed8\u8ba4","zh-Hant":"\u9810\u8a2d"}}],gzmtr:[{filename:"gz1",name:{en:"Line 1","zh-Hans":"1\u53f7\u7ebf","zh-Hant":"1\u865f\u7dda"}},{filename:"gz2",name:{en:"Line 2","zh-Hans":"2\u53f7\u7ebf","zh-Hant":"2\u865f\u7dda"}},{filename:"gz3",name:{en:"Line 3","zh-Hans":"3\u53f7\u7ebf","zh-Hant":"3\u865f\u7dda"}},{filename:"gz4",name:{en:"Line 4","zh-Hans":"4\u53f7\u7ebf","zh-Hant":"4\u865f\u7dda"}},{filename:"gz5",name:{en:"Line 5","zh-Hans":"5\u53f7\u7ebf","zh-Hant":"5\u865f\u7dda"}},{filename:"gz6",name:{en:"Line 6","zh-Hans":"6\u53f7\u7ebf","zh-Hant":"6\u865f\u7dda"}},{filename:"gz7",name:{en:"Line 7","zh-Hans":"7\u53f7\u7ebf","zh-Hant":"7\u865f\u7dda"}},{filename:"gz8",name:{en:"Line 8","zh-Hans":"8\u53f7\u7ebf","zh-Hant":"8\u865f\u7dda"}},{filename:"gz9",name:{en:"Line 9","zh-Hans":"9\u53f7\u7ebf","zh-Hant":"9\u865f\u7dda"}},{filename:"gz14",name:{en:"Line 14","zh-Hans":"14\u53f7\u7ebf","zh-Hant":"14\u865f\u7dda"}},{filename:"gz21",name:{en:"Line 21","zh-Hans":"21\u53f7\u7ebf","zh-Hant":"21\u865f\u7dda"}},{filename:"gf",name:{en:"Guangfo Line","zh-Hans":"\u5e7f\u4f5b\u7ebf","zh-Hant":"\u5ee3\u4f5b\u7dda"}}],mlm:[{filename:"taipa",name:{en:"Taipa Line",pt:"Linha Taipa","zh-Hans":"\u6c39\u4ed4\u7ebf","zh-Hant":"\u6c39\u4ed4\u7dda"}}],mtr:[{filename:"twl",name:{en:"Tsuen Wan Line","zh-Hans":"\u8343\u6e7e\u7ebf","zh-Hant":"\u8343\u7063\u7dab"}},{filename:"ktl",name:{en:"Kwun Tong Line","zh-Hans":"\u89c2\u5858\u7ebf","zh-Hant":"\u89c0\u5858\u7dab"}},{filename:"isl",name:{en:"Island Line","zh-Hans":"\u6e2f\u5c9b\u7ebf","zh-Hant":"\u6e2f\u5cf6\u7dab"}},{filename:"tkl",name:{en:"Tseung Kwan O Line","zh-Hans":"\u5c06\u519b\u6fb3\u7ebf","zh-Hant":"\u5c07\u8ecd\u6fb3\u7dab"}},{filename:"sile",name:{en:"South Island Line","zh-Hans":"\u5357\u6e2f\u5c9b\u7ebf","zh-Hant":"\u5357\u6e2f\u5cf6\u7dab"}},{filename:"eal",name:{en:"East Rail Line","zh-Hans":"\u4e1c\u94c1\u7ebf","zh-Hant":"\u6771\u9435\u7dab"}},{filename:"drl",name:{en:"Disneyland Resort Line","zh-Hans":"\u8fea\u58eb\u5c3c\u7ebf","zh-Hant":"\u8fea\u58eb\u5c3c\u7dab"}},{filename:"ael",name:{en:"Airport Express","zh-Hans":"\u673a\u573a\u5feb\u7ebf","zh-Hant":"\u6a5f\u5834\u5feb\u7dab"}},{filename:"tml",name:{en:"Tuen Ma Line","zh-Hans":"\u5c6f\u9a6c\u7ebf","zh-Hant":"\u5c6f\u99ac\u7dab"}}],shmetro:[{filename:"sh1",name:{en:"Line 1","zh-Hans":"1\u53f7\u7ebf","zh-Hant":"1\u865f\u7dda"}},{filename:"sh2",name:{en:"Line 2 by Tianxiu11111","zh-Hans":"2\u53f7\u7ebf \u6765\u81ea Tianxiu11111","zh-Hant":"2\u865f\u7dda \u4f86\u81ea Tianxiu11111"}},{filename:"sh5",name:{en:"Line 5 by Tianxiu11111","zh-Hans":"5\u53f7\u7ebf \u6765\u81ea Tianxiu11111","zh-Hant":"5\u865f\u7dda \u4f86\u81ea Tianxiu11111"}},{filename:"sh6",name:{en:"Line 6 by Thomastzc","zh-Hans":"6\u53f7\u7ebf \u6765\u81ea Thomastzc","zh-Hant":"6\u865f\u7dda \u4f86\u81ea Thomastzc"}},{filename:"sh7",name:{en:"Line 7 by Thomastzc","zh-Hans":"7\u53f7\u7ebf \u6765\u81ea Thomastzc","zh-Hant":"7\u865f\u7dda \u4f86\u81ea Thomastzc"}},{filename:"sh8",name:{en:"Line 8 by Thomastzc","zh-Hans":"8\u53f7\u7ebf \u6765\u81ea Thomastzc","zh-Hant":"8\u865f\u7dda \u4f86\u81ea Thomastzc"}},{filename:"sh11",name:{en:"Line 11 by Tianxiu11111","zh-Hans":"11\u53f7\u7ebf \u6765\u81ea Tianxiu11111","zh-Hant":"11\u865f\u7dda \u4f86\u81ea Tianxiu11111"}},{filename:"sh16",name:{en:"Line 16","zh-Hans":"16\u53f7\u7ebf","zh-Hant":"16\u865f\u7dda"}}]}}}]);
//# sourceMappingURL=panelSaveTemplateDialog.872687fb.chunk.js.map