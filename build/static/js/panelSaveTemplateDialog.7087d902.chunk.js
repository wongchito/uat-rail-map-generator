(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[82],{105:function(e,n,a){var t={"./basic/blank":[34,0],"./basic/blank.ts":[34,0],"./basic/default":[71,42],"./basic/default.ts":[71,42],"./gzmtr/gf":[72,53],"./gzmtr/gf.ts":[72,53],"./gzmtr/gz1":[73,64],"./gzmtr/gz1.ts":[73,64],"./gzmtr/gz14":[74,68],"./gzmtr/gz14.ts":[74,68],"./gzmtr/gz2":[75,37],"./gzmtr/gz2.ts":[75,37],"./gzmtr/gz21":[76,38],"./gzmtr/gz21.ts":[76,38],"./gzmtr/gz3":[77,39],"./gzmtr/gz3.ts":[77,39],"./gzmtr/gz4":[78,40],"./gzmtr/gz4.ts":[78,40],"./gzmtr/gz5":[79,41],"./gzmtr/gz5.ts":[79,41],"./gzmtr/gz6":[80,43],"./gzmtr/gz6.ts":[80,43],"./gzmtr/gz7":[81,44],"./gzmtr/gz7.ts":[81,44],"./gzmtr/gz8":[82,45],"./gzmtr/gz8.ts":[82,45],"./gzmtr/gz9":[83,46],"./gzmtr/gz9.ts":[83,46],"./mlm/taipa":[84,47],"./mlm/taipa.ts":[84,47],"./mtr/ael":[85,48],"./mtr/ael.ts":[85,48],"./mtr/drl":[86,49],"./mtr/drl.ts":[86,49],"./mtr/eal":[87,50],"./mtr/eal.ts":[87,50],"./mtr/isl":[88,51],"./mtr/isl.ts":[88,51],"./mtr/ktl":[89,52],"./mtr/ktl.ts":[89,52],"./mtr/mol":[90,54],"./mtr/mol.ts":[90,54],"./mtr/sile":[91,55],"./mtr/sile.ts":[91,55],"./mtr/tkl":[92,56],"./mtr/tkl.ts":[92,56],"./mtr/twl":[93,57],"./mtr/twl.ts":[93,57],"./mtr/wrl":[94,58],"./mtr/wrl.ts":[94,58],"./shmetro/sh1":[95,59],"./shmetro/sh1.ts":[95,59],"./shmetro/sh11":[96,60],"./shmetro/sh11.ts":[96,60],"./shmetro/sh16":[97,61],"./shmetro/sh16.ts":[97,61],"./shmetro/sh2":[98,62],"./shmetro/sh2.ts":[98,62],"./shmetro/sh5":[99,63],"./shmetro/sh5.ts":[99,63],"./shmetro/sh6":[100,65],"./shmetro/sh6.ts":[100,65],"./shmetro/sh7":[101,66],"./shmetro/sh7.ts":[101,66],"./shmetro/sh8":[102,67],"./shmetro/sh8.ts":[102,67]};function i(e){if(!a.o(t,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],i=n[0];return a.e(n[1]).then((function(){return a(i)}))}i.keys=function(){return Object.keys(t)},i.id=105,e.exports=i},125:function(e,n,a){"use strict";a.r(n);var t=a(4),i=a(3),s=a(1),m=a(6),r=a(2),l=a(13),o=[{id:"basic",name:{en:"Basic",zh:"\u57fa\u672c"}},{id:"gzmtr",name:{en:"Guangzhou Metro","zh-Hans":"\u5e7f\u5dde\u5730\u94c1","zh-Hant":"\u5ee3\u5dde\u5730\u9435"}},{id:"mlm",name:{en:"Macao LRT",pt:"Metro Ligeiro de Macau","zh-Hans":"\u6fb3\u95e8\u8f7b\u8f68","zh-Hant":"\u6fb3\u9580\u8f15\u8ecc"}},{id:"mtr",name:{en:"MTR","zh-Hans":"\u6e2f\u94c1","zh-Hant":"\u6e2f\u9435"}},{id:"shmetro",name:{en:"Shanghai Metro","zh-Hans":"\u4e0a\u6d77\u5730\u94c1","zh-Hant":"\u4e0a\u6d77\u5730\u9435"}}],h={basic:[{filename:"blank",name:{en:"Blank",zh:"\u7a7a\u767d"}},{filename:"default",name:{en:"Default","zh-Hans":"\u9ed8\u8ba4","zh-Hant":"\u9810\u8a2d"}}],gzmtr:[{filename:"gz1",name:{en:"Line 1","zh-Hans":"1\u53f7\u7ebf","zh-Hant":"1\u865f\u7dda"}},{filename:"gz2",name:{en:"Line 2","zh-Hans":"2\u53f7\u7ebf","zh-Hant":"2\u865f\u7dda"}},{filename:"gz3",name:{en:"Line 3","zh-Hans":"3\u53f7\u7ebf","zh-Hant":"3\u865f\u7dda"}},{filename:"gz4",name:{en:"Line 4","zh-Hans":"4\u53f7\u7ebf","zh-Hant":"4\u865f\u7dda"}},{filename:"gz5",name:{en:"Line 5","zh-Hans":"5\u53f7\u7ebf","zh-Hant":"5\u865f\u7dda"}},{filename:"gz6",name:{en:"Line 6","zh-Hans":"6\u53f7\u7ebf","zh-Hant":"6\u865f\u7dda"}},{filename:"gz7",name:{en:"Line 7","zh-Hans":"7\u53f7\u7ebf","zh-Hant":"7\u865f\u7dda"}},{filename:"gz8",name:{en:"Line 8","zh-Hans":"8\u53f7\u7ebf","zh-Hant":"8\u865f\u7dda"}},{filename:"gz9",name:{en:"Line 9","zh-Hans":"9\u53f7\u7ebf","zh-Hant":"9\u865f\u7dda"}},{filename:"gz14",name:{en:"Line 14","zh-Hans":"14\u53f7\u7ebf","zh-Hant":"14\u865f\u7dda"}},{filename:"gz21",name:{en:"Line 21","zh-Hans":"21\u53f7\u7ebf","zh-Hant":"21\u865f\u7dda"}},{filename:"gf",name:{en:"Guangfo Line","zh-Hans":"\u5e7f\u4f5b\u7ebf","zh-Hant":"\u5ee3\u4f5b\u7dda"}}],mlm:[{filename:"taipa",name:{en:"Taipa Line",pt:"Linha Taipa","zh-Hans":"\u6c39\u4ed4\u7ebf","zh-Hant":"\u6c39\u4ed4\u7dda"}}],mtr:[{filename:"twl",name:{en:"Tsuen Wan Line","zh-Hans":"\u8343\u6e7e\u7ebf","zh-Hant":"\u8343\u7063\u7dab"}},{filename:"ktl",name:{en:"Kwun Tong Line","zh-Hans":"\u89c2\u5858\u7ebf","zh-Hant":"\u89c0\u5858\u7dab"}},{filename:"isl",name:{en:"Island Line","zh-Hans":"\u6e2f\u5c9b\u7ebf","zh-Hant":"\u6e2f\u5cf6\u7dab"}},{filename:"tkl",name:{en:"Tseung Kwan O Line","zh-Hans":"\u5c06\u519b\u6fb3\u7ebf","zh-Hant":"\u5c07\u8ecd\u6fb3\u7dab"}},{filename:"sile",name:{en:"South Island Line","zh-Hans":"\u5357\u6e2f\u5c9b\u7ebf","zh-Hant":"\u5357\u6e2f\u5cf6\u7dab"}},{filename:"eal",name:{en:"East Rail Line","zh-Hans":"\u4e1c\u94c1\u7ebf","zh-Hant":"\u6771\u9435\u7dab"}},{filename:"drl",name:{en:"Disneyland Resort Line","zh-Hans":"\u8fea\u58eb\u5c3c\u7ebf","zh-Hant":"\u8fea\u58eb\u5c3c\u7dab"}},{filename:"ael",name:{en:"Airport Express","zh-Hans":"\u673a\u573a\u5feb\u7ebf","zh-Hant":"\u6a5f\u5834\u5feb\u7dab"}},{filename:"wrl",name:{en:"West Rail Line","zh-Hans":"\u897f\u94c1\u7ebf","zh-Hant":"\u897f\u9435\u7dab"}},{filename:"mol",name:{en:"Tuen Ma Line Phase 1","zh-Hans":"\u5c6f\u9a6c\u7ebf\u4e00\u671f","zh-Hant":"\u5c6f\u99ac\u7dab\u4e00\u671f"}}],shmetro:[{filename:"sh1",name:{en:"Line 1","zh-Hans":"1\u53f7\u7ebf","zh-Hant":"1\u865f\u7dda"}},{filename:"sh2",name:{en:"Line 2 by Tianxiu11111","zh-Hans":"2\u53f7\u7ebf by Tianxiu11111","zh-Hant":"2\u865f\u7dda by Tianxiu11111"}},{filename:"sh5",name:{en:"Line 5 by Tianxiu11111","zh-Hans":"5\u53f7\u7ebf by Tianxiu11111","zh-Hant":"5\u865f\u7dda by Tianxiu11111"}},{filename:"sh6",name:{en:"Line 6 by Thomastzc","zh-Hans":"6\u53f7\u7ebf by Thomastzc","zh-Hant":"6\u865f\u7dda by Thomastzc"}},{filename:"sh7",name:{en:"Line 7 by Thomastzc","zh-Hans":"7\u53f7\u7ebf by Thomastzc","zh-Hant":"7\u865f\u7dda by Thomastzc"}},{filename:"sh8",name:{en:"Line 8 by Thomastzc","zh-Hans":"8\u53f7\u7ebf by Thomastzc","zh-Hant":"8\u865f\u7dda by Thomastzc"}},{filename:"sh11",name:{en:"Line 11 by Tianxiu11111","zh-Hans":"11\u53f7\u7ebf by Tianxiu11111","zh-Hant":"11\u865f\u7dda by Tianxiu11111"}},{filename:"sh16",name:{en:"Line 16","zh-Hans":"16\u53f7\u7ebf","zh-Hant":"16\u865f\u7dda"}}]},z=Object(r.makeStyles)((function(e){var n,a;return Object(r.createStyles)({root:(n={display:"flex",flexDirection:"row"},Object(i.a)(n,e.breakpoints.down("xs"),{flexDirection:"column",paddingTop:0,paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(i.a)(n,e.breakpoints.up("sm"),{height:350}),n),tab:(a={minWidth:0,"& .MuiTab-wrapper":{flexDirection:"row"}},Object(i.a)(a,e.breakpoints.down("xs"),{minWidth:"calc(100% / 3)"}),Object(i.a)(a,e.breakpoints.up("sm"),{"& .MuiTab-wrapper":{justifyContent:"flex-start"}}),a),tabpanel:{flex:1,overflow:"auto",minWidth:220}})})),c=function(e){var n=Object(m.useTranslation)(),i=n.t,c=n.i18n,g=z(),u=Object(r.useTheme)(),f=Object(r.useMediaQuery)(u.breakpoints.down("xs")),H=s.useState(0),b=Object(t.a)(H,2),p=b[0],d=b[1],L=o[p].id;return s.useMemo((function(){return s.createElement(r.Dialog,{open:e.open,onClose:function(){return e.onClose()}},s.createElement(r.DialogTitle,null,i("file.new.title")),s.createElement(r.DialogContent,{dividers:!0,className:g.root},s.createElement(r.Tabs,{value:p,orientation:f?"horizontal":"vertical",variant:"scrollable",scrollButtons:"off",textColor:"primary",indicatorColor:"primary",onChange:function(e,n){return d(n)}},o.map((function(e){return s.createElement(r.Tab,{key:e.id,label:Object(l.b)(e.name,c.languages),className:g.tab})}))),s.createElement(r.Typography,{component:"div",role:"tabpanel",className:g.tabpanel},s.createElement(r.List,{disablePadding:!0},h[o[p].id].map((function(e){return s.createElement(r.ListItem,{button:!0,onClick:(n=e.filename,function(){a(105)("./".concat(L,"/").concat(n)).then((function(e){localStorage.rmgParam=JSON.stringify(e.default),window.location.reload(!0)})).catch((function(e){return console.error(e)}))}),key:e.filename},s.createElement(r.ListItemText,{primary:Object(l.b)(e.name,c.languages)}));var n}))))),s.createElement(r.DialogActions,null,s.createElement(r.Button,{variant:"outlined",onClick:function(){return e.onClose()},color:"primary",autoFocus:!0},i("dialog.cancel"))))}),[e.open,p,f,c.language,JSON.stringify(g)])};n.default=c}}]);
//# sourceMappingURL=panelSaveTemplateDialog.7087d902.chunk.js.map