(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67c6d8c4"],{"0e9a":function(t,a,e){"use strict";var l=e("2a21"),i=e.n(l);i.a},"291d":function(t,a,e){t.exports=e.p+"img/HUD.f74503d3.png"},"2a21":function(t,a,e){},"62d0":function(t,a,e){"use strict";var l=e("72b2"),i=e.n(l);i.a},"6f3d":function(t,a,e){t.exports=e.p+"img/bg.af717442.png"},"72b2":function(t,a,e){},"7ede":function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("div",{staticClass:"mainDiv"},[l("img",{staticClass:"bgImage",attrs:{src:e("6f3d")}}),l("div",{staticClass:"mainDiv",staticStyle:{position:"absolute"}},[t._m(0),l("div",{staticClass:"tableDiv"},[t._m(1),l("el-table",{ref:"table",staticClass:"tableList",style:t.note,attrs:{size:"mini","row-style":t.tableRowStyle,"header-cell-style":t.tableHeaderColor,height:"calc(100vh - 190px)","cell-style":t.tableCellStyle,data:t.tableData},on:{"sort-change":t.tableSortChange}},[l("el-table-column",{attrs:{sortable:"custom",prop:"acc","min-width":"12%",label:"账号",align:"center"}}),l("el-table-column",{attrs:{prop:"acc_info","min-width":"13%",label:"账户名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[l("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(a.row.acc_info))])]}}])}),l("el-table-column",{attrs:{sortable:"custom",prop:"total_market_value","min-width":"12%",label:"总市值",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.total_market_value>1e6?l("span",{staticStyle:{color:"#FB3B43"}},[t._v(t._s(a.row.total_market_value))]):"1000000.00"===a.row.total_market_value?l("span",{staticStyle:{color:"#e9e9e9"}},[t._v(t._s(a.row.total_market_value))]):a.row.total_market_value<1e6?l("span",{staticStyle:{color:"#22FF04"}},[t._v(t._s(a.row.total_market_value))]):t._e()]}}])}),l("el-table-column",{attrs:{sortable:"custom",prop:"profit_loss","min-width":"10%",label:"盈亏",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.total_market_value>1e6?l("span",{staticStyle:{color:"#FB3B43"}},[t._v(t._s(a.row.profit_loss))]):"1000000.00"===a.row.total_market_value?l("span",{staticStyle:{color:"#e9e9e9"}},[t._v(t._s(a.row.profit_loss))]):a.row.total_market_value<1e6?l("span",{staticStyle:{color:"#22FF04"}},[t._v(t._s(a.row.profit_loss))]):t._e()]}}])}),l("el-table-column",{attrs:{sortable:"custom",prop:"win_rate","min-width":"10%",label:"交易胜率",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.total_market_value>1e6?l("span",{staticStyle:{color:"#FB3B43"}},[t._v(t._s(a.row.win_rate))]):"1000000.00"===a.row.total_market_value?l("span",{staticStyle:{color:"#e9e9e9"}},[t._v(t._s(a.row.win_rate))]):a.row.total_market_value<1e6?l("span",{staticStyle:{color:"#22FF04"}},[t._v(t._s(a.row.win_rate))]):t._e()]}}])}),l("el-table-column",{attrs:{sortable:"custom",prop:"cumulative_rate","min-width":"11%",label:"累积收益率",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.total_market_value>1e6?l("span",{staticStyle:{color:"#FB3B43"}},[t._v(t._s(a.row.cumulative_rate))]):"1000000.00"===a.row.total_market_value?l("span",{staticStyle:{color:"#e9e9e9"}},[t._v(t._s(a.row.cumulative_rate))]):a.row.total_market_value<1e6?l("span",{staticStyle:{color:"#22FF04"}},[t._v(t._s(a.row.cumulative_rate))]):t._e()]}}])}),l("el-table-column",{attrs:{sortable:"custom",prop:"year_rate","min-width":"11%",label:"年化收益率",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.total_market_value>1e6?l("span",{staticStyle:{color:"#FB3B43"}},[t._v(t._s(a.row.year_rate))]):"1000000.00"===a.row.total_market_value?l("span",{staticStyle:{color:"#e9e9e9"}},[t._v(t._s(a.row.year_rate))]):a.row.total_market_value<1e6?l("span",{staticStyle:{color:"#22FF04"}},[t._v(t._s(a.row.year_rate))]):t._e()]}}])}),l("el-table-column",{attrs:{sortable:"custom",prop:"low_market_ratio","min-width":"8%",label:"最大回撤",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[l("span",{staticStyle:{color:"#22FF04"}},[t._v(t._s(a.row.low_market_ratio))])]}}])}),l("el-table-column",{attrs:{prop:"index","min-width":"10%",label:"净值走势",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[l("el-button",{staticClass:"tableButton",staticStyle:{"background-color":"#323B57",padding:"14px 16px","font-size":"12px",border:"0px",color:"#E9E9E9","line-height":"9px"},on:{click:function(e){return t.showDetail(a.row)}}},[t._v("详情")])]}}])}),l("el-table-column",{attrs:{prop:"index","min-width":"10%",label:"交易明细",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[l("el-button",{staticClass:"tableButton",staticStyle:{"background-color":"#323B57",padding:"14px 16px","font-size":"12px",border:"0px",color:"#E9E9E9","line-height":"9px"},on:{click:function(e){return t.showDetail2(a.row)}}},[t._v("详情")])]}}])})],1)],1),l("div",{staticClass:"chartDiv"},[t._m(2),l("div",{staticStyle:{width:"calc(100% - 20px)",height:"220px","margin-left":"10px","margin-right":"10px"}},[l("div",{staticStyle:{width:"100%",height:"100px"}},[l("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[l("p",{staticClass:"textTitlt"},[t._v("账户")]),l("p",{staticClass:"textData"},[t._v(t._s(this.indexData.acc))])]),l("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[l("p",{staticClass:"textTitlt"},[t._v("账户名称")]),l("p",{staticClass:"textData"},[t._v(t._s(this.indexData.acc_info))])]),l("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[l("p",{staticClass:"textTitlt"},[t._v("总市值")]),l("p",{staticClass:"textData"},[t._v(t._s(this.indexData.total_market_value))])]),l("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[l("p",{staticClass:"textTitlt"},[t._v("证券市值")]),l("p",{staticClass:"textData"},[t._v(t._s(this.indexData.new_market_value))])]),l("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[l("p",{staticClass:"textTitlt"},[t._v("可用资金")]),l("p",{staticClass:"textData"},[t._v(t._s(this.indexData.all_balance))])])]),l("div",{staticStyle:{"padding-top":"0px",width:"100%",height:"100px"}},[l("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[l("p",{staticClass:"textTitlt"},[t._v("盈亏")]),l("p",{staticClass:"textData"},[t._v(t._s(this.indexData.profit_loss))])]),l("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[l("p",{staticClass:"textTitlt"},[t._v("交易胜率")]),l("p",{staticClass:"textData"},[t._v(t._s(this.indexData.win_rate))])]),l("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[l("p",{staticClass:"textTitlt"},[t._v("累积收益率")]),l("p",{staticClass:"textData"},[t._v(t._s(this.indexData.cumulative_rate))])]),l("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[l("p",{staticClass:"textTitlt"},[t._v("年化收益率")]),l("p",{staticClass:"textData"},[t._v(t._s(this.indexData.year_rate))])]),l("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[l("p",{staticClass:"textTitlt"},[t._v("最大回撤")]),l("p",{staticClass:"textData"},[t._v(t._s(this.indexData.low_market_ratio))])])])]),l("div",{staticStyle:{"margin-left":"25px","margin-right":"25px"}},[l("el-table",{ref:"table",staticClass:"tableList",style:t.note,attrs:{size:"mini","row-style":t.tableRowStyle,"header-cell-style":t.tableHeaderColor,height:"350px","cell-style":t.tableCellStyle,data:t.tableData},on:{"sort-change":t.tableSortChange}},[l("el-table-column",{attrs:{sortable:"custom",prop:"acc","min-width":"",label:"证券名称",align:"center"}},[[l("span",{staticStyle:{"font-size":"14px"}},[t._v("中国平安")])]],2),l("el-table-column",{attrs:{prop:"acc_info","min-width":"",label:"证券数量",align:"center"}},[[l("span",{staticStyle:{"font-size":"14px"}},[t._v("10000")])]],2),l("el-table-column",{attrs:{sortable:"custom",prop:"total_market_value","min-width":"",label:"可卖数量",align:"center"}},[[l("span",{staticStyle:{"font-size":"14px"}},[t._v("10000")])]],2),l("el-table-column",{attrs:{sortable:"custom",prop:"profit_loss","min-width":"",label:"买入均价",align:"center"}},[[l("span",{staticStyle:{"font-size":"14px"}},[t._v("99.99")])]],2),l("el-table-column",{attrs:{sortable:"custom",prop:"win_rate","min-width":"",label:"当前价",align:"center"}},[[l("span",{staticStyle:{"font-size":"14px"}},[t._v("99.99")])]],2),l("el-table-column",{attrs:{sortable:"custom",prop:"cumulative_rate","min-width":"",label:"最新市值",align:"center"}},[[l("span",{staticStyle:{"font-size":"14px"}},[t._v("99.99")])]],2),l("el-table-column",{attrs:{sortable:"custom",prop:"year_rate","min-width":"",label:"浮动盈亏",align:"center"}},[[l("span",{staticStyle:{"font-size":"14px"}},[t._v("99.99")])]],2),l("el-table-column",{attrs:{sortable:"custom",prop:"low_market_ratio","min-width":"",label:"盈亏比例",align:"center"}},[[l("span",{staticStyle:{"font-size":"14px"}},[t._v("100.00%")])]],2)],1)],1),l("div",{ref:"chart",staticStyle:{width:"100%",height:"calc(100% - 655px)"}}),t._m(3)])])])},i=[function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("div",{staticStyle:{width:"100%","padding-top":"-5px"}},[l("img",{staticClass:"headerImg",attrs:{src:e("291d")}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{width:"15%","padding-top":"6px"}},[e("p",{staticStyle:{"font-size":"20px",color:"#FFFFFF","font-weight":"bold",width:"100%","text-align":"center"}},[t._v("账户总览")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{width:"23%","padding-top":"6px"}},[e("p",{staticStyle:{"font-size":"20px",color:"#FFFFFF","font-weight":"bold",width:"100%","text-align":"center"}},[t._v("净值走势")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{width:"100%"}},[e("h6",{staticStyle:{"text-align":"center","font-size":"22px",color:"#9D95BF","font-weight":"bold"}},[t._v("账户净值走势图")])])}],o=e("313e"),s={name:"productdetailspage",data:function(){return{note:{borderStyle:"none",width:"100%"},charts:"",tableData:[],indexData:{},chartData:[],timeData:[],acc:"",sorting:""}},mounted:function(){this.acc="acc",this.sorting="0",this.chart(),this.getTableData()},methods:{tableSortChange:function(t){console.log(t),this.acc=t.prop,"descending"===t.order?this.sorting="0":this.sorting="1",this.getTableData()},getTableData:function(){var t=this,a=this.COCKPIT.cockpitBaseURL+"/get_score/get_account_overview/"+this.acc+"/"+this.sorting;this.$http.get(a).then((function(a){t.tableData=a.body.data,t.indexData=a.body.data[0],t.getChartData(t.indexData.acc)}),(function(t){console.log("连接出错Klinep")})).catch((function(t){console.log("连接catch-Kline"+t)}))},getChartData:function(t){var a=this,e=this.COCKPIT.cockpitBaseURL+"/get_score/get_chart/"+t;this.$http.get(e).then((function(t){a.chartData=[],a.timeData=[];for(var e=0;e<t.body.chart.length;e++)a.chartData.push(t.body.chart[e][0]),a.timeData.push(t.body.chart[e][1]),a.chart()}),(function(t){console.log("连接出错Klinep")})).catch((function(t){console.log("连接catch-Kline"+t)}))},tableRowStyle:function(t){t.row,t.rowIndex;return"background-color: transparent"},tableHeaderColor:function(t){t.row,t.column;var a=t.rowIndex;t.columnIndex;if(0===a)return"background-color: transparent;color: #cdc4ec;"},showDetail:function(t){this.indexData=t,this.getChartData(this.indexData.acc)},showDetail2:function(t){this.$router.push({name:"cockpitDetails",params:{code:t.acc_info,acc:t.acc}})},tableCellStyle:function(){return"border-color: #4E5D90;"},chart:function(){var t={grid:{left:"120px",right:"60px",top:"10%",height:"85%"},xAxis:{type:"category",data:this.timeData,axisLine:{lineStyle:{color:"#ffffff"}}},yAxis:{offset:"0",type:"value",min:0,max:3e6,splitNumber:7,axisLine:{lineStyle:{color:"#ffffff"}},splitLine:{lineStyle:{color:"#36394F",type:"dashed"}}},series:[{data:this.chartData,type:"line",lineStyle:{color:"#b26dea"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#494C8E"},{offset:1,color:"#111111"}],global:!1}}}]};this.charts||(this.charts=o.init(this.$refs.chart)),this.charts.clear(),this.charts.setOption(t)}}},r=s,n=(e("0e9a"),e("62d0"),e("2877")),c=Object(n["a"])(r,l,i,!1,null,"5f3e5362",null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-67c6d8c4.04095993.js.map