(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56a622cf"],{"291d":function(t,a,e){t.exports=e.p+"img/HUD.f74503d3.png"},"3bff":function(t,a,e){"use strict";var i=e("e6a0"),l=e.n(i);l.a},"49a8":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"mainDiv"},[i("img",{staticClass:"bgImage",attrs:{src:e("6f3d")}}),i("div",{staticClass:"mainDiv",staticStyle:{position:"absolute"}},[t._m(0),i("div",{staticClass:"tableDiv"},[t._m(1),i("div",{staticStyle:{width:"85%","padding-top":"6px",float:"left"}},[i("p",{staticStyle:{"font-size":"16px",color:"#FFFFFF","font-weight":"bold",width:"100%","margin-left":"97.3%",float:"left"},on:{click:t.goBackV}},[t._v("X")])]),i("el-table",{ref:"table",staticClass:"tableList",style:t.note,attrs:{size:"mini","row-style":t.tableRowStyle,"header-cell-style":t.tableHeaderColor,height:"calc(100vh - 190px)","cell-style":t.tableCellStyle,data:t.tableData}},[i("el-table-column",{attrs:{prop:"time","min-width":"",label:"成交时间",align:"center"}}),i("el-table-column",{attrs:{prop:"stocknum","min-width":"",label:"证券代码",align:"center"}}),i("el-table-column",{attrs:{prop:"stockname","min-width":"",label:"证券名称",align:"center"}}),i("el-table-column",{attrs:{prop:"type","min-width":"",label:"买卖方向",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return["买入"===a.row.type?i("span",{staticStyle:{color:"#FB3B43"}},[t._v(t._s(a.row.type))]):"卖出"===a.row.type?i("span",{staticStyle:{color:"#e9e9e9"}},[t._v(t._s(a.row.type))]):t._e()]}}])}),i("el-table-column",{attrs:{prop:"price","min-width":"",label:"成交价格",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return["买入"===a.row.type?i("span",{staticStyle:{color:"#FB3B43"}},[t._v(t._s(a.row.price))]):"卖出"===a.row.type?i("span",{staticStyle:{color:"#e9e9e9"}},[t._v(t._s(a.row.price))]):t._e()]}}])}),i("el-table-column",{attrs:{prop:"num","min-width":"",label:"成交数量",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return["买入"===a.row.type?i("span",{staticStyle:{color:"#FB3B43"}},[t._v(t._s(a.row.num))]):"卖出"===a.row.type?i("span",{staticStyle:{color:"#e9e9e9"}},[t._v(t._s(a.row.num))]):t._e()]}}])})],1)],1),i("div",{staticClass:"chartDiv"},[t._m(2),i("div",{staticStyle:{width:"calc(100% - 20px)",height:"220px","margin-left":"10px","margin-right":"10px"}},[i("div",{staticStyle:{width:"100%",height:"100px"}},[i("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[i("p",{staticClass:"textTitlt"},[t._v("账户")]),i("p",{staticClass:"textData"},[t._v(t._s(this.indexData.acc))])]),i("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[i("p",{staticClass:"textTitlt"},[t._v("账户名称")]),i("p",{staticClass:"textData"},[t._v(t._s(this.indexData.acc_info))])]),i("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[i("p",{staticClass:"textTitlt"},[t._v("总市值")]),i("p",{staticClass:"textData"},[t._v(t._s(this.indexData.total_market_value))])]),i("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[i("p",{staticClass:"textTitlt"},[t._v("证券市值")]),i("p",{staticClass:"textData"},[t._v(t._s(this.indexData.new_market_value))])]),i("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[i("p",{staticClass:"textTitlt"},[t._v("可用资金")]),i("p",{staticClass:"textData"},[t._v(t._s(this.indexData.all_balance))])])]),i("div",{staticStyle:{"padding-top":"0px",width:"100%",height:"100px"}},[i("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[i("p",{staticClass:"textTitlt"},[t._v("盈亏")]),i("p",{staticClass:"textData"},[t._v(t._s(this.indexData.profit_loss))])]),i("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[i("p",{staticClass:"textTitlt"},[t._v("交易胜率")]),i("p",{staticClass:"textData"},[t._v(t._s(this.indexData.win_rate))])]),i("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[i("p",{staticClass:"textTitlt"},[t._v("累积收益率")]),i("p",{staticClass:"textData"},[t._v(t._s(this.indexData.cumulative_rate))])]),i("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[i("p",{staticClass:"textTitlt"},[t._v("年化收益率")]),i("p",{staticClass:"textData"},[t._v(t._s(this.indexData.year_rate))])]),i("div",{staticStyle:{float:"left",width:"20%","margin-top":"20px"}},[i("p",{staticClass:"textTitlt"},[t._v("最大回撤")]),i("p",{staticClass:"textData"},[t._v(t._s(this.indexData.low_market_ratio))])])])]),i("div",{staticStyle:{"margin-left":"25px","margin-right":"25px"}},[i("el-table",{ref:"table",staticClass:"tableList",style:t.note,attrs:{size:"mini","row-style":t.tableRowStyle,"header-cell-style":t.tableHeaderColor,height:"350px","cell-style":t.tableCellStyle,data:t.tableData},on:{"sort-change":t.tableSortChange}},[i("el-table-column",{attrs:{prop:"acc","min-width":"",label:"证券名称",align:"center"}},[[i("span",{staticStyle:{"font-size":"14px"}},[t._v("中国平安")])]],2),i("el-table-column",{attrs:{prop:"acc_info","min-width":"",label:"证券数量",align:"center"}},[[i("span",{staticStyle:{"font-size":"14px"}},[t._v("10000")])]],2),i("el-table-column",{attrs:{prop:"total_market_value","min-width":"",label:"可卖数量",align:"center"}},[[i("span",{staticStyle:{"font-size":"14px"}},[t._v("10000")])]],2),i("el-table-column",{attrs:{prop:"profit_loss","min-width":"",label:"买入均价",align:"center"}},[[i("span",{staticStyle:{"font-size":"14px"}},[t._v("99.99")])]],2),i("el-table-column",{attrs:{prop:"win_rate","min-width":"",label:"当前价",align:"center"}},[[i("span",{staticStyle:{"font-size":"14px"}},[t._v("99.99")])]],2),i("el-table-column",{attrs:{prop:"cumulative_rate","min-width":"",label:"最新市值",align:"center"}},[[i("span",{staticStyle:{"font-size":"14px"}},[t._v("99.99")])]],2),i("el-table-column",{attrs:{prop:"year_rate","min-width":"",label:"浮动盈亏",align:"center"}},[[i("span",{staticStyle:{"font-size":"14px"}},[t._v("99.99")])]],2),i("el-table-column",{attrs:{prop:"low_market_ratio","min-width":"",label:"盈亏比例",align:"center"}},[[i("span",{staticStyle:{"font-size":"14px"}},[t._v("100.00%")])]],2)],1)],1),i("div",{ref:"chart",staticStyle:{width:"100%",height:"calc(100% - 655px)"}}),t._m(3)])])])},l=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticStyle:{width:"100%","padding-top":"-5px"}},[i("img",{staticClass:"headerImg",attrs:{src:e("291d")}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{width:"15%","padding-top":"6px",float:"left"}},[e("p",{staticStyle:{"font-size":"20px",color:"#FFFFFF","font-weight":"bold",width:"80%","text-align":"center"}},[t._v("账户总览")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{width:"23%","padding-top":"6px"}},[e("p",{staticStyle:{"font-size":"20px",color:"#FFFFFF","font-weight":"bold",width:"100%","text-align":"center"}},[t._v("净值走势")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{width:"100%"}},[e("h6",{staticStyle:{"text-align":"center","font-size":"22px",color:"#9D95BF","font-weight":"bold"}},[t._v("账户净值走势图")])])}],s=e("313e"),n={name:"productdetailspage",data:function(){return{note:{borderStyle:"none",width:"100%"},code:"",acc:"",charts:"",tableData:[{}],indexData:{},chartData:[],timeData:[]}},mounted:function(){this.code=this.$route.params.code,this.acc=this.$route.params.acc,console.log(this.acc),this.chart(),this.getTableData()},methods:{goBackV:function(){this.$router.go(-1)},getTableData:function(){var t=this,a=this.COCKPIT.cockpitBaseURL+"/get_score/get_trade_history/"+this.code;this.$http.get(a).then((function(a){t.tableData=a.body.data,t.getParameterData()}),(function(t){console.log("连接出错Klinep")})).catch((function(t){console.log("连接catch-Kline"+t)}))},getParameterData:function(){var t=this,a=this.COCKPIT.cockpitBaseURL+"/get_score/get_chart/"+this.acc;this.$http.get(a).then((function(a){t.indexData=a.body.ratio,t.chartData=[],t.timeData=[];for(var e=0;e<a.body.chart.length;e++)t.chartData.push(a.body.chart[e][0]),t.timeData.push(a.body.chart[e][1]),t.chart()}),(function(t){console.log("连接出错Klinep")})).catch((function(t){console.log("连接catch-Kline"+t)}))},tableRowStyle:function(t){t.row,t.rowIndex;return"background-color: transparent"},tableHeaderColor:function(t){t.row,t.column;var a=t.rowIndex;t.columnIndex;if(0===a)return"background-color: transparent;color: #cdc4ec;"},showDetail:function(t){this.indexData=t},showDetail2:function(t){this.$router.push({name:"cockpitDetails",params:{code:t.acc_info}})},tableCellStyle:function(){return"border-color: #4E5D90;"},chart:function(){var t={grid:{left:"120px",right:"60px",top:"10%",height:"85%"},xAxis:{type:"category",data:this.timeData,axisLine:{lineStyle:{color:"#ffffff"}}},yAxis:{offset:"0",type:"value",min:0,max:3e6,splitNumber:7,axisLine:{lineStyle:{color:"#ffffff"}},splitLine:{lineStyle:{color:"#36394F",type:"dashed"}}},series:[{data:this.chartData,type:"line",lineStyle:{color:"#b26dea"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#6d4397"},{offset:1,color:"#111111"}],global:!1}}}]};this.charts||(this.charts=s.init(this.$refs.chart)),this.charts.clear(),this.charts.setOption(t)}}},o=n,c=(e("3bff"),e("2877")),r=Object(c["a"])(o,i,l,!1,null,null,null);a["default"]=r.exports},"6f3d":function(t,a,e){t.exports=e.p+"img/bg.af717442.png"},e6a0:function(t,a,e){}}]);
//# sourceMappingURL=chunk-56a622cf.41f40f06.js.map