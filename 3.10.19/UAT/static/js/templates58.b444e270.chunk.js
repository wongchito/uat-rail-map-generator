(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[84],{281:function(e,n,a){"use strict";a.r(n);n.default={style:"mtr",svg_height:300,svg_width:1100,svg_dest_width:1100,show_outer:!0,padding:5,y_pc:40,strip_pc:90,branch_spacing:45,theme:["hongkong","ktl","#00AF41","#fff"],direction:"l",current_stn_idx:"byzb",platform_num:"2",txt_bg_gap:15,txt_flip:!0,stn_list:{linestart:{parents:[],children:["o7qv"],name:["\u8def\u7dab\u5de6\u7aef","LEFT END"],change_type:"none",branch:{left:[],right:[]},interchange:[[]],transfer:{type:"none",tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],usage:"",facility:""},lineend:{parents:["iwf6"],children:[],name:["\u8def\u7dab\u53f3\u7aef","RIGHT END"],change_type:"none",branch:{left:[],right:[]},interchange:[[]],transfer:{type:"none",tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],usage:"",facility:""},l1mz:{parents:["ysjb"],children:["iwf6"],name:["\u4f55\u6587\u7530","Ho Man Tin"],change_type:"none",branch:{left:[],right:[]},num:"00",interchange:[[]],transfer:{type:"none",tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],usage:"",facility:""},iwf6:{children:["lineend"],parents:["l1mz"],name:["\u9ec3\u57d4","Whampoa"],change_type:"none",branch:{left:[],right:[]},num:"00",interchange:[[]],transfer:{type:"none",tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],usage:"",facility:""},ysjb:{branch:{left:[],right:[]},parents:["2vlg"],children:["l1mz"],name:["\u6cb9\u9ebb\u5730","Yau Ma Tei"],change_type:"int2",interchange:[[["hongkong","twl","#E2231A","#fff","\u8343\u7063\u7dab\\\u5f80\u4e2d\u74b0","Tsuen Wan Line\\to Central"]]],num:"00",transfer:{type:"int2",tick_direc:"r",paid_area:!0,osi_names:[],info:[[["hongkong","twl","#E2231A","#fff","\u8343\u7063\u7dab\\\u5f80\u4e2d\u74b0","Tsuen Wan Line\\to Central"]]]},services:["local"],usage:"",facility:""},"2vlg":{branch:{left:[],right:[]},parents:["byzb"],children:["ysjb"],name:["\u65fa\u89d2","Mong Kok"],change_type:"int2",interchange:[[["hongkong","twl","#E2231A","#fff","\u8343\u7063\u7dab\\\u5f80\u8343\u7063","Tsuen Wan Line\\to Tsuen Wan"]]],num:"00",transfer:{type:"int2",tick_direc:"r",paid_area:!0,osi_names:[],info:[[["hongkong","twl","#E2231A","#fff","\u8343\u7063\u7dab\\\u5f80\u8343\u7063","Tsuen Wan Line\\to Tsuen Wan"]]]},services:["local"],usage:"",facility:""},byzb:{branch:{left:[],right:[]},parents:["7cgp"],children:["2vlg"],name:["\u592a\u5b50","Prince Edward"],change_type:"none",num:"00",interchange:[[]],transfer:{type:"none",tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],usage:"",facility:""},"7cgp":{branch:{left:[],right:[]},parents:["fv4r"],children:["byzb"],name:["\u77f3\u7864\u5c3e","Shek Kip Mei"],change_type:"none",num:"00",interchange:[[]],transfer:{type:"none",tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],usage:"",facility:""},fv4r:{branch:{left:[],right:[]},parents:["0p85"],children:["7cgp"],name:["\u4e5d\u9f8d\u5858","Kowloon Tong"],change_type:"none",num:"00",interchange:[[]],transfer:{type:"int2",tick_direc:"r",paid_area:!0,osi_names:[],info:[[["hongkong","eal","#61B4E4","#fff","\u6771\u9435\u7dab","East Rail Line"]]]},services:["local"],usage:"",facility:""},"0p85":{branch:{left:[],right:[]},parents:["v1c1"],children:["fv4r"],name:["\u6a02\u5bcc","Lok Fu"],change_type:"none",num:"00",interchange:[[]],transfer:{type:"none",tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],usage:"",facility:""},v1c1:{branch:{left:[],right:[]},parents:["1k7y"],children:["0p85"],name:["\u9ec3\u5927\u4ed9","Wong Tai Sin"],change_type:"none",num:"00",interchange:[[]],transfer:{type:"none",tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],usage:"",facility:""},"1k7y":{branch:{left:[],right:[]},parents:["uc5y"],children:["v1c1"],name:["\u947d\u77f3\u5c71","Diamond Hill"],change_type:"none",num:"00",interchange:[[]],transfer:{type:"int2",tick_direc:"r",paid_area:!0,osi_names:[],info:[[["hongkong","mol","#9A3820","#fff","\u5c6f\u99ac\u7dab\u4e00\u671f","Tuen Ma Line Phase 1"]]]},services:["local"],usage:"",facility:""},uc5y:{branch:{left:[],right:[]},parents:["c6q1"],children:["1k7y"],name:["\u5f69\u8679","Choi Hung"],change_type:"none",num:"00",interchange:[[]],transfer:{type:"none",tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],usage:"",facility:""},c6q1:{branch:{left:[],right:[]},parents:["6ase"],children:["uc5y"],name:["\u4e5d\u9f8d\u7063","Kowloon Bay"],change_type:"int2",interchange:[[["hongkong","eal","#61B4E4","#fff","\u6771\u9435\u7dab","East Rail Line"]]],num:"00",transfer:{type:"none",tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],usage:"",facility:""},"6ase":{branch:{left:[],right:[]},parents:["ckt3"],children:["c6q1"],name:["\u725b\u982d\u89d2","Ngau Tau Kok"],change_type:"none",num:"00",interchange:[[]],transfer:{type:"none",tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],usage:"",facility:""},ckt3:{branch:{left:[],right:[]},parents:["hxxu"],children:["6ase"],name:["\u89c0\u5858","Kwun Tong"],change_type:"none",num:"00",interchange:[[]],transfer:{type:"none",tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],usage:"",facility:""},hxxu:{branch:{left:[],right:[]},parents:["awvh"],children:["ckt3"],name:["\u85cd\u7530","Lam Tin"],change_type:"none",num:"00",interchange:[[]],transfer:{type:"none",tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],usage:"",facility:""},awvh:{branch:{left:[],right:[]},parents:["o7qv"],children:["hxxu"],name:["\u6cb9\u5858","Yau Tong"],change_type:"int2",interchange:[[["hongkong","tkl","#A35EB5","#fff","\u5c07\u8ecd\u6fb3\u7dab\\\u5f80\u5317\u89d2","Tseung Kwan O Line\\to North Point"]]],num:"00",transfer:{type:"int2",tick_direc:"r",paid_area:!0,osi_names:[],info:[[["hongkong","tkl","#A35EB5","#fff","\u5c07\u8ecd\u6fb3\u7dab\\\u5f80\u5317\u89d2","Tseung Kwan O Line\\to North Point"]]]},services:["local"],usage:"",facility:""},o7qv:{branch:{left:[],right:[]},parents:["linestart"],children:["awvh"],name:["\u8abf\u666f\u5dba","Tiu Keng Leng"],change_type:"int2",interchange:[[["hongkong","tkl","#A35EB5","#fff","\u5c07\u8ecd\u6fb3\u7dab\\\u5f80\u5bf6\u7433/\u5eb7\u57ce","Tseung Kwan O Line\\to Po Lam/LOHAS Park"]]],num:"00",transfer:{type:"int2",tick_direc:"r",paid_area:!0,osi_names:[],info:[[["hongkong","tkl","#A35EB5","#fff","\u5c07\u8ecd\u6fb3\u7dab\\\u5f80\u5bf6\u7433/\u5eb7\u57ce","Tseung Kwan O Line\\to Po Lam/LOHAS Park"]]]},services:["local"],usage:"",facility:""}},line_name:["\u89c0\u5858\u7dab","Kwun Tong Line"],dest_legacy:!0,char_form:"trad",psd_num:1,line_num:1,info_panel_type:"gz28",direction_gz_x:50,direction_gz_y:70}}}]);
//# sourceMappingURL=templates58.b444e270.chunk.js.map