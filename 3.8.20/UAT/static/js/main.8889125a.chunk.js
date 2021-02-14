(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[73],[function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},function(e,t){e.exports=React},function(e,t){e.exports=MaterialUI},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(8);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,c=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var r=n(3),a=n(0),c=n(1),i=Object(c.createContext)({}),s=Object(c.createContext)({}),l=function(e,t){var n,c,i,s,l,o;switch(t.type){case"GLOBAL":return t.data;case"ANY":return Object(a.a)(Object(a.a)({},e),{},Object(r.a)({},t.key,t.data));case"SET_HEIGHT":return Object(a.a)(Object(a.a)({},e),{},{svg_height:t.value});case"SET_WIDTH":return Object(a.a)(Object(a.a)({},e),{},{svgWidth:Object(a.a)(Object(a.a)({},e.svgWidth),{},Object(r.a)({},t.targetId,t.value))});case"SET_Y":return Object(a.a)(Object(a.a)({},e),{},{y_pc:t.value});case"SET_BRANCH_SPACING":return Object(a.a)(Object(a.a)({},e),{},{branch_spacing:t.value});case"SET_PADDING":return Object(a.a)(Object(a.a)({},e),{},{padding:t.value});case"SET_DIRECTION_GZ_X":return Object(a.a)(Object(a.a)({},e),{},{direction_gz_x:t.value});case"SET_DIRECTION_GZ_Y":return Object(a.a)(Object(a.a)({},e),{},{direction_gz_y:t.value});case"SET_LINE_NAME":return Object(a.a)(Object(a.a)({},e),{},{line_name:t.name});case"SET_THEME":return Object(a.a)(Object(a.a)({},e),{},{theme:t.theme});case"SET_DIRECTION":return Object(a.a)(Object(a.a)({},e),{},{direction:"l"===e.direction?"r":"l"});case"SET_PLATFORM":return Object(a.a)(Object(a.a)({},e),{},{platform_num:t.platform});case"SET_TEXT_STAGGER":return Object(a.a)(Object(a.a)({},e),{},{namePosMTR:Object(a.a)(Object(a.a)({},e.namePosMTR),{},{isStagger:t.checked})});case"SET_TEXT_FLIP":return Object(a.a)(Object(a.a)({},e),{},{namePosMTR:Object(a.a)(Object(a.a)({},e.namePosMTR),{},{isFlip:!e.namePosMTR.isFlip})});case"SET_DEST_LEGACY":return Object(a.a)(Object(a.a)({},e),{},{customiseMTRDest:Object(a.a)(Object(a.a)({},e.customiseMTRDest),{},{isLegacy:t.isLegacy})});case"SET_TERMINAL_OVERRIDE":return Object(a.a)(Object(a.a)({},e),{},{customiseMTRDest:Object(a.a)(Object(a.a)({},e.customiseMTRDest),{},{terminal:t.terminal})});case"SET_LINE_NUM":return Object(a.a)(Object(a.a)({},e),{},{line_num:t.num});case"SET_PSD_NUM":return Object(a.a)(Object(a.a)({},e),{},{psd_num:t.num});case"SET_PANEL_TYPE":return Object(a.a)(Object(a.a)({},e),{},{info_panel_type:t.variant});case"ADD_NOTE_GZMTR":return Object(a.a)(Object(a.a)({},e),{},{notesGZMTR:null===(n=e.notesGZMTR)||void 0===n?void 0:n.concat([["","",0,0,!1]])});case"REMOVE_NOTE_GZMTR":return Object(a.a)(Object(a.a)({},e),{},{notesGZMTR:null===(c=e.notesGZMTR)||void 0===c?void 0:c.filter((function(e,n){return n!==t.idx}))});case"UPDATE_NOTE_GZMTR":return Object(a.a)(Object(a.a)({},e),{},{notesGZMTR:null===(i=e.notesGZMTR)||void 0===i?void 0:i.map((function(e,n){return n===t.idx?t.note:e}))});case"SET_CURRENT_STATION":return Object(a.a)(Object(a.a)({},e),{},{current_stn_idx:t.stnId});case"REVERSE_STATIONS":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object.keys(e.stn_list).reduce((function(t,n){return Object(a.a)(Object(a.a)({},t),{},Object(r.a)({},n,function(t){switch(t){case"linestart":return Object(a.a)(Object(a.a)({},e.stn_list.lineend),{},{parents:[],children:e.stn_list.lineend.parents.slice().reverse(),branch:{left:[],right:e.stn_list.lineend.branch.left}});case"lineend":return Object(a.a)(Object(a.a)({},e.stn_list.linestart),{},{parents:e.stn_list.linestart.children.slice().reverse(),children:[],branch:{left:e.stn_list.linestart.branch.right,right:[]}});default:return Object(a.a)(Object(a.a)({},e.stn_list[t]),{},{parents:e.stn_list[t].children.map((function(e){return"linestart"===e?"lineend":"lineend"===e?"linestart":e})).reverse(),children:e.stn_list[t].parents.map((function(e){return"linestart"===e?"lineend":"lineend"===e?"linestart":e})).reverse(),branch:{left:e.stn_list[t].branch.right,right:e.stn_list[t].branch.left}})}}(n)))}),{})});case"UPDATE_STATION_NAME":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object(a.a)(Object(a.a)({},e.stn_list),{},Object(r.a)({},t.stnId,Object(a.a)(Object(a.a)({},e.stn_list[t.stnId]),{},{name:t.name})))});case"UPDATE_STATION_SECONDARY_NAME":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object(a.a)(Object(a.a)({},e.stn_list),{},Object(r.a)({},t.stnId,Object(a.a)(Object(a.a)({},e.stn_list[t.stnId]),{},{secondaryName:t.name})))});case"UPDATE_STATION_NUM":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object(a.a)(Object(a.a)({},e.stn_list),{},Object(r.a)({},t.stnId,Object(a.a)(Object(a.a)({},e.stn_list[t.stnId]),{},{num:t.num})))});case"ADD_STATION_INTERCHANGE_INFO":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object(a.a)(Object(a.a)({},e.stn_list),{},Object(r.a)({},t.stnId,Object(a.a)(Object(a.a)({},e.stn_list[t.stnId]),{},{transfer:Object(a.a)(Object(a.a)({},e.stn_list[t.stnId].transfer),{},{info:function(n){var r=n.setIdx,a=n.info,c=e.stn_list[t.stnId].transfer.info.slice();return c[r]=(c[r]||[]).concat([a]),c}(t)})})))});case"REMOVE_STATION_INTERCHANGE_INFO":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object(a.a)(Object(a.a)({},e.stn_list),{},Object(r.a)({},t.stnId,Object(a.a)(Object(a.a)({},e.stn_list[t.stnId]),{},{transfer:Object(a.a)(Object(a.a)({},e.stn_list[t.stnId].transfer),{},{info:e.stn_list[t.stnId].transfer.info.map((function(e,n){return n===t.setIdx?e.slice(0,t.intIdx).concat(e.slice(t.intIdx+1)):e}))})})))});case"UPDATE_STATION_INTERCHANGE_INFO":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object(a.a)(Object(a.a)({},e.stn_list),{},Object(r.a)({},t.stnId,Object(a.a)(Object(a.a)({},e.stn_list[t.stnId]),{},{transfer:Object(a.a)(Object(a.a)({},e.stn_list[t.stnId].transfer),{},{info:null===(s=e.stn_list[t.stnId].transfer)||void 0===s?void 0:s.info.map((function(e,n){return n===t.setIdx?e.map((function(e,n){return n===t.intIdx?[0,1,2,3,4,5].map((function(n){return void 0===t.info[n]?e[n]:t.info[n]})):e})):e}))})})))});case"UPDATE_STATION_OSI_NAME":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object(a.a)(Object(a.a)({},e.stn_list),{},Object(r.a)({},t.stnId,Object(a.a)(Object(a.a)({},e.stn_list[t.stnId]),{},{transfer:Object(a.a)(Object(a.a)({},e.stn_list[t.stnId].transfer),{},{osi_names:[t.name]})})))});case"UPDATE_STATION_TICK_DIREC":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object(a.a)(Object(a.a)({},e.stn_list),{},Object(r.a)({},t.stnId,Object(a.a)(Object(a.a)({},e.stn_list[t.stnId]),{},{transfer:Object(a.a)(Object(a.a)({},e.stn_list[t.stnId].transfer),{},{tick_direc:t.direction})})))});case"UPDATE_STATION_PAID_AREA":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object(a.a)(Object(a.a)({},e.stn_list),{},Object(r.a)({},t.stnId,Object(a.a)(Object(a.a)({},e.stn_list[t.stnId]),{},{transfer:Object(a.a)(Object(a.a)({},e.stn_list[t.stnId].transfer),{},{paid_area:t.isPaid})})))});case"UPDATE_STATION_BRANCH_TYPE":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object(a.a)(Object(a.a)({},e.stn_list),{},Object(r.a)({},t.stnId,Object(a.a)(Object(a.a)({},e.stn_list[t.stnId]),{},{branch:Object(a.a)(Object(a.a)({},e.stn_list[t.stnId].branch),{},Object(r.a)({},t.direction,[t.branchType,e.stn_list[t.stnId].branch[t.direction][1]]))})))});case"UPDATE_STATION_BRANCH_FIRST":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object(a.a)(Object(a.a)({},e.stn_list),{},(l={},Object(r.a)(l,t.branches[0].stnId,Object(a.a)(Object(a.a)({},e.stn_list[t.branches[0].stnId]),{},{branch:Object(a.a)(Object(a.a)({},e.stn_list[t.branches[0].stnId].branch),{},Object(r.a)({},t.branches[0].direction,[e.stn_list[t.branches[0].stnId].branch[t.branches[0].direction][0],t.branches[0].first]))})),Object(r.a)(l,t.branches[1].stnId,Object(a.a)(Object(a.a)({},e.stn_list[t.branches[1].stnId]),{},{branch:Object(a.a)(Object(a.a)({},e.stn_list[t.branches[1].stnId].branch),{},Object(r.a)({},t.branches[1].direction,[e.stn_list[t.branches[1].stnId].branch[t.branches[1].direction][0],t.branches[1].first]))})),l))});case"UPDATE_STATION_BRANCH_POS":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object(a.a)(Object(a.a)({},e.stn_list),{},(o={},Object(r.a)(o,t.left,Object(a.a)(Object(a.a)({},e.stn_list[t.left]),{},{parents:e.stn_list[t.left].parents.slice().reverse()})),Object(r.a)(o,t.right,Object(a.a)(Object(a.a)({},e.stn_list[t.right]),{},{children:e.stn_list[t.right].children.slice().reverse()})),o))});case"UPDATE_STATION_FACILITY":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object(a.a)(Object(a.a)({},e.stn_list),{},Object(r.a)({},t.stnId,Object(a.a)(Object(a.a)({},e.stn_list[t.stnId]),{},{facility:t.facility})))});case"UPDATE_STATION_SERVICES":return Object(a.a)(Object(a.a)({},e),{},{stn_list:Object(a.a)(Object(a.a)({},e.stn_list),{},Object(r.a)({},t.stnId,Object(a.a)(Object(a.a)({},e.stn_list[t.stnId]),{},{services:Array.from(t.isChecked?new Set(e.stn_list[t.stnId].services).add(t.serviceId):e.stn_list[t.stnId].services.filter((function(e){return e!==t.serviceId})))})))});case"UPDATE_STATION_LIST":return Object(a.a)(Object(a.a)({},e),{},{stn_list:t.stnList});default:return e}}},function(e,t){e.exports=ReactI18next},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(10);var a=n(8);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(10);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},function(e,t){e.exports=ReactRouterDOM},function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return o}));var r=n(4),a=n(1),c=n.n(a),i=function e(t,n){if(["linestart","lineend"].includes(t)||n[t].parents.length>1||n[t].children.length>1)return 0;var r=n[t].parents[0];return r?1===n[r].children.length?e(r,n):0===n[r].children.indexOf(t)?1:-1:0},s=function(e){console.log("computing branches");for(var t=["linestart"],n=[["linestart"]],r=0;t.length;){var a=t.shift(),c=n[r].slice().reverse()[0]||null;for(c&&"linestart"!==a?n[r].push(a):n[r]=[a];"lineend"!==a;){var i=e[c=a].children;if(function(){switch(i.length){case 1:a=i[0];break;case 2:var s=e[c].branch.right[1];"through"===e[c].branch.right[0]?(n.push([a]),t.push(s)):0===r&&(n.push([c]),t.push(s)),a=i.filter((function(e){return e!==s}))[0]}}(),n[r].push(a),c===e[a].branch.left[1])break}r++}return n},l=function(e){console.log("computing routes");for(var t=["linestart"],n=[["linestart"]],r=0;t.length;){var a=t.shift(),c=n[r].slice().reverse()[0]||null;for(c&&"linestart"!==a?n[r].push(a):n[r]=[a];"lineend"!==a;){var i=e[c=a].children;if(function(){switch(i.length){case 1:a=i[0];break;case 2:var s=e[c].branch.right[1];"through"===e[c].branch.right[0]?(n.push(n[r].slice()),t.push(s)):0===r&&(n.push([c]),t.push(s)),a=i.filter((function(e){return e!==s}))[0]}}(),n[r].push(a),c===e[a].branch.left[1]&&"nonthrough"===e[a].branch.left[0])break}r++}return n},o=function(e){var t=c.a.useState([]),n=Object(r.a)(t,2),a=n[0],i=n[1];return c.a.useEffect((function(){if(console.log("computing tpo"),1!==e.length){var t=e.reduce((function(e,t){var n=e.indexOf(t.slice(-1)[0]);return e.slice(0,n).concat(t.slice(1),e.slice(n+1))}),["lineend"]).slice(0,-1);i(t)}else i(e[0].slice(1,-1))}),[e.toString()]),a}},function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=["destination","runin","railmap"],a=["gz1","gz2otis","gz28","gz3","gz4","gz1421","gz5","gz6","gzgf"],c=["sh","sh2020"]},function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(17),a=n(4);function c(){var e,t=JSON.parse(localStorage.rmgParam);"line_name"in t||(t.line_name=["\u8def\u7dda\u540d","Name of Line"]),"dest_legacy"in t||(t.dest_legacy=!1),delete t.fontZH,delete t.fontEN,delete t.weightZH,delete t.weightEN;for(var n=0,r=Object.entries(t.stn_list);n<r.length;n++){var c=Object(a.a)(r[n],2),i=c[0],s=c[1];"branch"in s||(t.stn_list[i].branch={left:[],right:[]},2===s.children.length?t.stn_list[i].branch.right=["through",s.children[1]]:t.stn_list[i].branch.right=[],2===s.parents.length?t.stn_list[i].branch.left=["through",s.parents[1]]:t.stn_list[i].branch.left=[])}t.psd_num="psd_num"in t?t.psd_num.toString():"1","line_num"in t||(t.line_num="1"),delete t.style,3===t.theme.length&&t.theme.push("#fff");for(var l=0,o=Object.entries(t.stn_list);l<o.length;l++){var u=Object(a.a)(o[l],2),b=u[0],f=u[1];"num"in f||(t.stn_list[b].num="00"),"interchange"in f&&f.interchange.map((function(e){return e.forEach((function(e){5===e.length&&e.splice(3,0,"#fff")}))}))}for(var d=0,O=Object.entries(t.stn_list);d<O.length;d++){var h=Object(a.a)(O[d],2),m=h[0],j=h[1];"osi22_end_p"===j.change_type&&(t.stn_list[m].change_type="osi22_pr"),"osi22_end_u"===j.change_type&&(t.stn_list[m].change_type="osi22_ur")}for(var g=0,_=Object.entries(t.stn_list);g<_.length;g++){var p=Object(a.a)(_[g],2),v=p[0];"interchange"in p[1]||(t.stn_list[v].interchange=[[]])}t.info_panel_type="info_panel_type"in t?function(e){switch(e){case"gz_1":case"panasonic":return"gz28";case"gz_2":return"gz6";case"gz_3":return"gz3";default:return e}}(t.info_panel_type):"gz28","direction_gz_x"in t||(t.direction_gz_x=50),"direction_gz_y"in t||(t.direction_gz_y=70);for(var y=0,E=Object.entries(t.stn_list);y<E.length;y++){var T,S,I,w,A=Object(a.a)(E[y],2),N=A[0],x=A[1];if(!("transfer"in x))t.stn_list[N].transfer={tick_direc:"none"===x.change_type||"int2"===x.change_type?"r":null===(T=x.change_type)||void 0===T?void 0:T.split("_")[1].split("").slice().reverse()[0],paid_area:-1===(null===(S=x.change_type)||void 0===S?void 0:S.indexOf("osi"))||"p"===(null===(I=x.change_type)||void 0===I?void 0:I.split("_")[1][0]),osi_names:-1!==(null===(w=x.change_type)||void 0===w?void 0:w.indexOf("osi"))?[x.interchange[1][0]]:[],info:2===x.interchange.length?[x.interchange[0],x.interchange[1].slice(1)]:x.interchange};delete t.stn_list[N].change_type,delete t.stn_list[N].interchange}for(var R=0,k=Object.entries(t.stn_list);R<k.length;R++){var P=Object(a.a)(k[R],2),M=P[0],C=P[1];"services"in C||(t.stn_list[M].services=["local"]),"facility"in C||(t.stn_list[M].facility="usage"in C?C.usage:""),delete t.stn_list[M].usage}"customiseMTRDest"in t||(t.customiseMTRDest={isLegacy:t.dest_legacy||!1,terminal:!1}),delete t.dest_legacy,"svgWidth"in t||(t.svgWidth={destination:t.svg_dest_width,runin:t.svg_dest_width,railmap:t.svg_width}),delete t.svg_width,delete t.svg_dest_width,"notesGZMTR"in t||(t.notesGZMTR=[]),t.notesGZMTR=null===(e=t.notesGZMTR)||void 0===e?void 0:e.map((function(e){return 4===e.length?e.concat([!1]):e})),delete t.char_form,delete t.show_outer,delete t.strip_pc,delete t.txt_bg_gap,"namePosMTR"in t||(t.namePosMTR={isStagger:!0,isFlip:t.txt_flip}),delete t.txt_flip,Object.keys(t.stn_list).forEach((function(e){"secondaryName"in t.stn_list[e]?!1!==t.stn_list[e].secondaryName&&","===t.stn_list[e].secondaryName.join()&&(t.stn_list[e].secondaryName=!1):t.stn_list[e].secondaryName=!1,"type"in t.stn_list[e].transfer&&delete t.stn_list[e].transfer.type})),localStorage.setItem("rmgParam",JSON.stringify(t))}var i=function(e,t){var n,a=Object(r.a)(t);try{for(a.s();!(n=a.n()).done;){var c=n.value;if(e[c])return e[c]}}catch(i){a.e(i)}finally{a.f()}return e.en},s=function(e,t){return("gzmtr"===t?((null===e||void 0===e?void 0:e.num)||"-")+": ":"")+(null===e||void 0===e?void 0:e.name.join().replace("\\"," "))}},function(e,t){e.exports=i18next},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(8);function a(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(r.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c,i=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){s=!0,c=e},f:function(){try{i||null==a.return||a.return()}finally{if(s)throw c}}}}},function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return function(){var t,n=r(e);if(a()){var c=r(this).constructor;t=Reflect.construct(n,arguments,c)}else t=n.apply(this,arguments);return i(this,t)}}n.d(t,"a",(function(){return s}))},function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))},function(e,t){e.exports=ReactDOM},function(e,t){e.exports=i18nextXHRBackend},function(e,t){e.exports=i18nextBrowserLanguageDetector},function(e,t,n){e.exports=n(25)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(1),c=n.n(a),i=n(20),s=(n(24),n(14)),l=n.n(s),o=n(6),u=n(21),b=n.n(u),f=n(22),d=n.n(f);l.a.use(b.a).use(d.a).use(o.initReactI18next).init({fallbackLng:{"zh-CN":["zh-Hans","en"],"zh-Hant":["zh-HK","en"],"zh-HK":["zh-Hant","en"],"zh-TW":["zh-HK","zh-Hant"],default:["en"]},backend:{loadPath:"/uat-rail-map-generator/locale/{{lng}}.json"},interpolation:{escapeValue:!1}}).then((function(e){document.title=e("title"),document.documentElement.setAttribute("lang",l.a.language)}));var O=n(4),h=n(9),m=n(2),j=n(5),g=Object(m.makeStyles)((function(e){return Object(m.createStyles)({rootLight:{backgroundColor:e.palette.primary.main},rootDark:{backgroundColor:e.palette.background.paper},title:{flexGrow:1,color:"#fff"},menuButton:{color:"#fff"}})})),_=function(){var e=Object(o.useTranslation)(),t=e.t,n=e.i18n,r=g(),c=Object(m.useMediaQuery)("(prefers-color-scheme: dark)");return a.useMemo((function(){return a.createElement(m.AppBar,{position:"sticky",className:c?r.rootDark:r.rootLight},a.createElement(m.Toolbar,{variant:"dense"},a.createElement(m.Typography,{variant:"h6",className:r.title,color:"textPrimary"},"/uat-rail-map-generator".includes("uat")?t("titleUAT"):t("title")),a.createElement(p,null),a.createElement(v,null)))}),[c,n.language])},p=function(){var e=Object(o.useTranslation)().t,t=g(),n=a.useContext(j.a),r=n.canvasAvailable,c=n.setCanvasToShown,i=a.useState(null),s=Object(O.a)(i,2),l=s[0],u=s[1],b=function(e){return function(){c(e),u(null)}};return a.useMemo((function(){return a.createElement(a.Fragment,null,a.createElement(m.Tooltip,{title:e("toggle.tooltip")},a.createElement(m.IconButton,{onClick:function(e){return u(e.currentTarget)},className:t.menuButton},a.createElement(m.Icon,null,"photo_library"))),a.createElement(m.Menu,{anchorEl:l,open:Boolean(l),onClose:function(){return u(null)}},r.map((function(t){return a.createElement(m.MenuItem,{key:t,onClick:b(t)},e("toggle."+t))})),a.createElement(m.Divider,{style:{margin:"6px 0"}}),a.createElement(m.MenuItem,{onClick:b("all")},e("toggle.all"))))}),[r.toString(),l,t.menuButton])},v=function(){var e=Object(o.useTranslation)().t,t=g(),n=a.useContext(j.a).setCanvasScale;return a.useMemo((function(){return a.createElement(a.Fragment,null,a.createElement(m.Tooltip,{title:e("zoom.out")},a.createElement(m.IconButton,{onClick:function(){return n((function(e){return e<=.1?e:e-.1}))},className:t.menuButton},a.createElement(m.Icon,null,"zoom_out"))),a.createElement(m.Tooltip,{title:e("zoom.in")},a.createElement(m.IconButton,{onClick:function(){return n((function(e){return e+.1}))},className:t.menuButton},a.createElement(m.Icon,null,"zoom_in"))))}),[t.menuButton])},y=n(3),E=n(15),T=n(16),S=n(19),I=n(18),w=function(e){Object(S.a)(n,e);var t=Object(I.a)(n);function n(e){var r;return Object(E.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(T.a)(n,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?c.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(c.a.Component),A=n(12),N=Object(m.makeStyles)((function(){return Object(m.createStyles)({root:{display:"flex",flexDirection:"row",overflowX:"scroll","&::before, &::after":{content:'""',margin:"auto"},"& > svg":{flex:"0 0 auto",border:"1px solid black"}}})})),x=function(){var e=N(),t=c.a.useContext(j.b).param,n=c.a.useContext(j.a).canvasScale,r=c.a.useCallback((function(e){var r;return{id:e,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",height:t.svg_height*n,viewBox:"0 0 ".concat(t.svgWidth[e]," ").concat(t.svg_height),colorInterpolationFilters:"sRGB",style:(r={},Object(y.a)(r,"--rmg-svg-width",t.svgWidth[e]+"px"),Object(y.a)(r,"--rmg-svg-height",t.svg_height+"px"),Object(y.a)(r,"--rmg-theme-colour",t.theme[2]),Object(y.a)(r,"--rmg-theme-fg",t.theme[3]),r)}}),[t.svg_height,JSON.stringify(t.svgWidth),t.theme[2],t.theme[3],n]);return c.a.createElement("div",{className:e.root},c.a.createElement(h.Switch,null,Object.keys(G).map((function(e){return c.a.createElement(h.Route,{path:"/".concat(e),key:e},c.a.createElement(R,{rmgStyle:e,canvasAvailable:G[e],svgProps:r}))})),c.a.createElement(h.Redirect,{to:"/"+(new URLSearchParams(window.location.search).get("style")||"mtr")})))},R=Object(a.memo)((function(e){var t=Object(a.useContext)(j.a),n=t.canvasToShown,i=t.setCanvasToShown,s=t.setCanvasAvailable;return Object(a.useEffect)((function(){["share"].concat(Object(r.a)(A.c)).forEach((function(t){t in e.canvasAvailable||"share"===t?document.getElementById("css_"+t).href="/uat-rail-map-generator"+"/styles/".concat(t,"_").concat(e.rmgStyle,".css"):document.getElementById("css_"+t).href=""})),s(Object.keys(e.canvasAvailable)),i((function(t){return["all"].concat(Object(r.a)(Object.keys(e.canvasAvailable))).includes(t)?t:"all"}))}),[]),c.a.createElement(c.a.Fragment,null,Object.keys(e.canvasAvailable).map((function(t){return["all",t].includes(n)&&c.a.createElement(c.a.Suspense,{key:t,fallback:c.a.createElement(m.CircularProgress,null)},c.a.createElement(w,null,c.a.createElement("svg",e.svgProps(t),c.a.createElement("rect",{id:"canvas-bg",fill:"white",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}}),e.canvasAvailable[t],c.a.createElement("rect",{id:"canvas-border",fill:"none",strokeWidth:3,stroke:"none",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}}))))})))})),k=Object(a.lazy)((function(){return n.e(92).then(n.bind(null,127))})),P=Object(a.lazy)((function(){return n.e(89).then(n.bind(null,121))})),M=Object(a.lazy)((function(){return n.e(71).then(n.bind(null,107))})),C=Object(a.lazy)((function(){return n.e(90).then(n.bind(null,122))})),D=Object(a.lazy)((function(){return n.e(72).then(n.bind(null,108))})),z=Object(a.lazy)((function(){return n.e(93).then(n.bind(null,109))})),B=Object(a.lazy)((function(){return n.e(91).then(n.bind(null,123))})),G={gzmtr:{runin:c.a.createElement(k,null),railmap:c.a.createElement(P,null)},mtr:{destination:c.a.createElement(M,null),railmap:c.a.createElement(C,null)},shmetro:{destination:c.a.createElement(D,null),runin:c.a.createElement(z,null),railmap:c.a.createElement(B,null)}},L=x,H=a.lazy((function(){return n.e(82).then(n.bind(null,120))})),U=a.lazy((function(){return n.e(79).then(n.bind(null,124))})),F=a.lazy((function(){return Promise.all([n.e(69),n.e(74)]).then(n.bind(null,125))})),W=a.lazy((function(){return n.e(84).then(n.bind(null,119))})),Z=a.lazy((function(){return n.e(78).then(n.bind(null,110))})),J=Object(m.makeStyles)((function(e){var t;return Object(m.createStyles)({root:Object(y.a)({display:"flex",flexDirection:"row",height:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),typography:{background:e.palette.background.default},tab:(t={padding:"6px 24px",height:48,"& .MuiTab-wrapper":{flexDirection:"row"}},Object(y.a)(t,e.breakpoints.up("sm"),{"& .MuiTab-wrapper":{justifyContent:"flex-start"}}),Object(y.a)(t,e.breakpoints.down("xs"),{minWidth:"calc(100% / 5)"}),Object(y.a)(t,"&.MuiTab-labelIcon",{minHeight:"unset","& .MuiTab-wrapper":{"& > *:first-child":{marginBottom:0},"& > *:not(first-child)":{paddingLeft:8}}}),t),tabs:{overflow:"auto","&::-webkit-scrollbar":{width:0},scrollbarWidth:"none",WebkitOverflowScrolling:"touch"},tabpanel:{overflow:"auto",flex:1,padding:e.spacing(3),paddingBottom:0,height:"calc(100% - ".concat(e.spacing(3),"px)"),display:"flex",justifyContent:"center",alignItems:"flex-start"}})}));function Y(){var e=Object(o.useTranslation)(),t=e.t,n=e.i18n,r=J(),c=Object(m.useTheme)(),i=Object(m.useMediaQuery)(c.breakpoints.down("xs")),s=a.useState(0),l=Object(O.a)(s,2),u=l[0],b=l[1],f=a.useMemo((function(){return a.createElement(m.Typography,{className:"".concat(r.typography," ").concat(r.tabs),component:"div"},a.createElement(m.Tabs,{value:u,orientation:i?"horizontal":"vertical",indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return b(t)},variant:"scrollable",scrollButtons:"off"},[["file","insert_drive_file"],["layout","panorama"],["design","brush"],["stations","directions_transit"],["info","info"]].map((function(e,n){return a.createElement(m.Tab,{label:a.createElement("span",null,t("tab."+e[0])),icon:a.createElement(m.Icon,null,e[1]),key:n,className:r.tab})}))))}),[u,n.language,r.tab,i]);return a.createElement("div",{className:r.root},f,a.createElement(m.Typography,{className:"".concat(r.typography," ").concat(r.tabpanel),component:"div",role:"tabpanel"},a.createElement(a.Suspense,{fallback:a.createElement(m.CircularProgress,null)},function(e){switch(e){case 0:return a.createElement(H,null);case 1:return a.createElement(U,null);case 2:return a.createElement(F,null);case 3:return a.createElement(W,null);case 4:return a.createElement(Z,null);default:return a.createElement(H,null)}}(u))))}var V=function(){return a.createElement(a.Suspense,{fallback:a.createElement(m.CircularProgress,null)},a.createElement(Y,null))},X=n(11),K=Object(m.createMuiTheme)({palette:{type:"dark",primary:{main:"#bb86fc"},secondary:{main:"#018786"},error:{main:"#cf6679"}},overrides:{MuiDialog:{paper:{minWidth:280}}}}),Q=Object(m.createMuiTheme)({palette:{primary:{light:"#bb86fc",main:"#6200ee"},secondary:{main:"#018786"},error:{main:"#b00020"}},overrides:{MuiDialog:{paper:{minWidth:280}}}});function $(){var e=Object(m.useMediaQuery)("(prefers-color-scheme: dark)")?K:Q,t=Object(a.useState)([]),n=Object(O.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(localStorage.rmgCanvas),l=Object(O.a)(s,2),o=l[0],u=l[1];Object(a.useEffect)((function(){return localStorage.setItem("rmgCanvas",o)}),[o]);var b=Object(a.useState)(Number(localStorage.rmgScale)>=.1?Number(localStorage.rmgScale):1),f=Object(O.a)(b,2),d=f[0],g=f[1];return Object(a.useEffect)((function(){return localStorage.setItem("rmgScale",d.toFixed(1))}),[d]),c.a.createElement(h.BrowserRouter,{basename:"/uat-rail-map-generator"},c.a.createElement(m.ThemeProvider,{theme:e},c.a.createElement(j.a.Provider,{value:{rmgStyle:window.location.pathname.split("/")[2],canvasAvailable:r,setCanvasAvailable:i,canvasToShown:o,setCanvasToShown:u,canvasScale:d,setCanvasScale:g}},c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(m.LinearProgress,null)},c.a.createElement(_,null)),c.a.createElement(ee,null))))}var q,ee=function(){var e=Object(a.useReducer)(j.c,JSON.parse(localStorage.rmgParam)),t=Object(O.a)(e,2),n=t[0],r=t[1],i=JSON.stringify(n);Object(a.useEffect)((function(){return localStorage.setItem("rmgParam",i)}),[i]);var s=Object.keys(n.stn_list).reduce((function(e,t){return e+t+function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t+JSON.stringify(e[n])}),"")}}("parents","children","branch")(n.stn_list[t])}),""),l=Object(a.useMemo)((function(){return Object(X.a)(n.stn_list)}),[s]),o=Object(a.useMemo)((function(){return Object(X.b)(n.stn_list)}),[s]),u=Object(X.d)(l);return c.a.createElement(c.a.Fragment,null,c.a.createElement(j.b.Provider,{value:{param:n,dispatch:r,branches:l,routes:o,deps:s,tpo:u}},c.a.createElement("div",{style:{overflowY:"auto"}},c.a.createElement(L,null)),c.a.createElement("div",{style:{flex:1,overflow:"hidden"}},c.a.createElement(V,null))),c.a.createElement("canvas",{style:{display:"none"}}))},te=n(13);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),(q=document.head).append.apply(q,Object(r.a)(["share"].concat(Object(r.a)(A.c)).map((function(e){var t=document.createElement("link");return t.rel="stylesheet",t.id="css_"+e,t}))));var ne=function(){i.render(a.createElement($,null),document.querySelectorAll("div#root")[0])};if(localStorage.rmgParam){try{Object(te.c)()}catch(re){alert(re+"Something error! Please refresh to start from a new canvas. "),console.error(re),localStorage.removeItem("rmgParam")}ne()}else n.e(0).then(n.bind(null,34)).then((function(e){localStorage.setItem("rmgParam",JSON.stringify(e.default)),Object(te.c)()})).then((function(){return ne()}))}],[[23,94]]]);
//# sourceMappingURL=main.8889125a.chunk.js.map