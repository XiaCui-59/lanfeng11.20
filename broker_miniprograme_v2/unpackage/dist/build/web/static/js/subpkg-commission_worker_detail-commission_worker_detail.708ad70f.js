(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subpkg-commission_worker_detail-commission_worker_detail"],{1133:function(t,e,i){"use strict";i.r(e);var a=i("6a83"),n=i("7f4a");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("3888");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"eef31ac4",null,!1,a["a"],void 0);e["default"]=s.exports},1905:function(t,e,i){var a=i("8d1e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("07db90ca",a,!0,{sourceMap:!1,shadowMode:!1})},"2e63":function(t,e,i){"use strict";i.r(e);var a=i("f579"),n=i("c71e");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("da34");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"1ac2b048",null,!1,a["a"],void 0);e["default"]=s.exports},3888:function(t,e,i){"use strict";var a=i("1905"),n=i.n(a);n.a},6376:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),n={name:"custom_header",props:["title","showBack","headHeight","showSecondimage","showScan","backIndex"],data:function(){return{titleHeight:0,marginTop:0,backLeft:0,imgUrl:a.globalData.baseImageUrl}},created:function(){var t=uni.getMenuButtonBoundingClientRect();this.titleHeight=t.height,this.marginTop=t.top},methods:{back:function(){this.backIndex?uni.switchTab({url:"/pages/index/index"}):uni.navigateBack()},scanCode:function(){var t=this;uni.scanCode({onlyFromCamera:!0,scanType:"qrCode",hideAlbum:!0,success:function(e){console.log(e);var i=e.result;t.$request(i,{},"POST").then((function(t){0==t.code&&uni.showModal({title:"工人："+t.data+"，报到核销成功",showCancel:!1})}))}})}}};e.default=n},"6a83":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("customHeader",{attrs:{title:t.pageName,showBack:!0,headHeight:t.headerHeight}}),i("v-uni-view",{staticClass:"cont",style:{marginTop:t.marginTop+"px"}},[i("v-uni-view",{staticClass:"box",style:{top:t.marginTop+10+"px",background:0==t.list.length?"#fff":"#F3F3F5"}},[i("v-uni-scroll-view",{staticClass:"scroll-Y",style:{height:t.scrollHeight+"px"},attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.lower.apply(void 0,arguments)}}},[t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item"},[i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("姓名：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.worker_name))])],1),i("v-uni-view",{staticClass:"line flex flex_btween"},[i("v-uni-view",{staticClass:"in_item flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("工作时长：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.working_time))])],1),i("v-uni-view",{staticClass:"in_item flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("本期佣金：")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.commission_amount))])],1)],1)],1)})),0==t.list.length?i("v-uni-view",{staticClass:"empty"},[i("v-uni-image",{attrs:{src:t.imgUrl+"/broker/empty.png",mode:"heightFix"}})],1):t._e()],2)],1)],1)],1)},n=[]},"7f4a":function(t,e,i){"use strict";i.r(e);var a=i("c546"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"8d1e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */uni-image[data-v-eef31ac4]{width:auto;will-change:transform;height:auto}\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-eef31ac4] .uni-select{border:none;background:#fff;height:%?88?%;font-size:%?28?%;border-radius:%?8?%;padding:0 %?40?%}[data-v-eef31ac4] .uni-icons{display:none}[data-v-eef31ac4] .uni-select__input-placeholder{font-size:%?28?%}[data-v-eef31ac4] .uni-date-x--border{height:%?88?%;line-height:%?88?%;padding:0 %?40?%;background:#fff;border-radius:%?8?%;box-sizing:border-box;border:none}[data-v-eef31ac4] .uni-datetime-picker--btn,[data-v-eef31ac4] .uni-calendar-item__weeks-box .uni-calendar-item--checked{background:#f7bc05}[data-v-eef31ac4] .uni-datetime-picker-btn-text{color:#f7bc05}.top_area[data-v-eef31ac4]{width:calc(100% - %?96?%);position:fixed;left:%?48?%}.top_area .sele_box[data-v-eef31ac4]{margin:0 %?20?% %?20?% 0}.top_area .sele_box .text[data-v-eef31ac4]{font-size:%?28?%;color:#fff;font-weight:700}.top_area .sele_box uni-image[data-v-eef31ac4]{width:%?34?%;margin-right:%?8?%}.box[data-v-eef31ac4]{position:fixed;width:calc(100% - %?96?%);left:%?48?%;z-index:3;border-top-left-radius:%?16?%;border-top-right-radius:%?16?%;overflow:hidden}.box .item[data-v-eef31ac4]{padding:%?40?%;border-radius:%?16?%;background:#fff;box-shadow:0 %?2?% %?6?% 0 rgba(0,0,0,.15);margin-bottom:%?20?%;position:relative}.box .item .line[data-v-eef31ac4]{margin-bottom:%?28?%;font-size:%?28?%}.box .item .line[data-v-eef31ac4]:last-child{margin-bottom:0}.box .item .line .tit[data-v-eef31ac4]{color:#686868}.box .item .line .text[data-v-eef31ac4]{color:#333}',""]),t.exports=e},"9bbe":function(t,e,i){var a=i("deba");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("f47a7f4e",a,!0,{sourceMap:!1,shadowMode:!1})},c546:function(t,e,i){"use strict";i("7a82");var a=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("99af");var n=a(i("2e63")),o=getApp(),r={data:function(){return{imgUrl:o.globalData.baseImageUrl,currentTab:0,pageName:"",marginTop:0,comValue:"",startTime:"",endTime:"",list:[],scrollHeight:0,headerHeight:0,maskInnerTop:0,id:"",type:"",currentPage:1,pagination:{}}},components:{customHeader:n.default},onPullDownRefresh:function(){this.currentPage=1,this.list=[],this.getList()},onLoad:function(t){this.id=t.id,this.type=t.type,"income"==t.type?this.pageName="佣金收入详情":this.pageName="佣金支出详情";var e=this;this.getMarginTop(),setTimeout((function(){e.getElementInfo(),e.getTopHeight()}),500),this.getList()},methods:{getMarginTop:function(t){var e=uni.getMenuButtonBoundingClientRect();this.marginTop=e.height+e.top,this.maskInnerTop=this.marginTop+20},getTopHeight:function(){var t=uni.getSystemInfoSync();this.headerHeight=Math.floor(t.screenHeight*(200/844))},getElementInfo:function(){var t=uni.getSystemInfoSync(),e=Math.floor(t.screenHeight*(46/844));console.log(e,"tabbar"),this.scrollHeight=t.screenHeight-this.marginTop-e-5},getList:function(){var t=this,e="/broker/mini/commission/"+this.type+"/detail/"+this.id+"/items?page="+this.currentPage;this.$request(e).then((function(e){0==e.code?(t.list=t.list.concat(e.data.list),t.pagination=e.data.pagination):uni.showModal({title:e.msg})}))},lower:function(){this.list.length<this.pagination.totalCount?(this.currentPage++,this.getList()):this.list.length>=this.pagination.totalCount&&uni.showToast({title:"已经到底啦~",icon:"none",duration:2e3})}}};e.default=r},c71e:function(t,e,i){"use strict";i.r(e);var a=i("6376"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},da34:function(t,e,i){"use strict";var a=i("9bbe"),n=i.n(a);n.a},deba:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */uni-image[data-v-1ac2b048]{width:auto;will-change:transform;height:auto}\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.custom_header[data-v-1ac2b048]{position:fixed;top:0;left:0;width:100%;background:url(https://static.test.swiftwd.com/broker/bg.png) no-repeat;background-size:100% 100%;overflow:hidden;z-index:2}.custom_header > uni-image[data-v-1ac2b048]{width:100%;position:fixed;top:0;left:0;z-index:3;will-change:transform}.custom_header .title[data-v-1ac2b048]{text-align:center;color:#fff;font-size:%?32?%;position:relative;font-weight:700;z-index:10}.custom_header .title .back[data-v-1ac2b048]{position:absolute;left:%?48?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:%?44?%;height:%?44?%}.custom_header .title .back uni-image[data-v-1ac2b048]{width:%?44?%;height:%?44?%;will-change:transform}.custom_header .title .scan[data-v-1ac2b048]{position:absolute;left:%?48?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.custom_header .title .scan uni-image[data-v-1ac2b048]{width:%?32?%;height:%?32?%;margin-right:%?8?%}.custom_header .title .scan uni-text[data-v-1ac2b048]{font-size:%?28?%;color:#fff}',""]),t.exports=e},f579:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"custom_header",style:{height:t.headHeight+"px"}},[t.showSecondimage?i("v-uni-image",{attrs:{src:t.imgUrl+"/broker/ic_jiedan_header_bg.png",mode:"widthFix"}}):t._e(),i("v-uni-view",{staticClass:"title",style:{lineHeight:t.titleHeight+"px",height:t.titleHeight+"px",marginTop:t.marginTop+"px"}},[t.showBack?i("v-uni-view",{staticClass:"back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:t.imgUrl+"/broker/back.png",mode:""}})],1):t._e(),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.title))])],1)],1)},n=[]}}]);