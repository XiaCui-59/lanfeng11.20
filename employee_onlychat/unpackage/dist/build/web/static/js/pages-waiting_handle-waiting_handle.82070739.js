(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-waiting_handle-waiting_handle"],{"19f7":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"custom_header",style:{height:t.headHeight+"px"}},[t.showSecondimage?i("v-uni-image",{attrs:{src:t.imgUrl+"/worker/ic_baoming_header_bg.png",mode:"widthFix"}}):t._e(),i("v-uni-view",{staticClass:"title",style:{lineHeight:t.titleHeight+"px",height:t.titleHeight+"px",top:t.marginTop+"px"}},[t.showBack?i("v-uni-view",{staticClass:"back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:t.imgUrl+"/broker/back.png",mode:""}})],1):t._e(),i("v-uni-view",{staticClass:"text"},[t._v(t._s(t.title))])],1)],1)},n=[]},3113:function(t,e,i){"use strict";i.r(e);var a=i("fce2"),n=i("349e");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("4351");var r=i("f0c5"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"1b15c552",null,!1,a["a"],void 0);e["default"]=o.exports},"349e":function(t,e,i){"use strict";i.r(e);var a=i("a615"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},4351:function(t,e,i){"use strict";var a=i("aed6"),n=i.n(a);n.a},"481e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-image[data-v-0926a862]{will-change:transform}.tabbar[data-v-0926a862]{position:fixed;left:0;bottom:0;z-index:99;width:100%;\n      /* height: 92upx; */display:flex;align-items:center;background:#fff;justify-content:space-around;background-repeat:no-repeat;background-size:100% 100%;\n      /* padding: 20rpx 0; */box-shadow:0 %?-8?% %?12?% 0 rgba(0,0,0,.1);border-top-left-radius:%?28?%;border-top-right-radius:%?28?%;box-sizing:border-box}.tabbar-item[data-v-0926a862]{padding:0 %?40?%;position:relative;text-align:center;box-sizing:border-box}.tabbar-item .badge[data-v-0926a862]{position:absolute;top:%?-20?%;right:%?0?%;z-index:100;background:#ff2c11;width:%?40?%;height:%?40?%;line-height:%?40?%;text-align:center;border-radius:50%;color:#fff;font-size:%?24?%}.img[data-v-0926a862]{\n     /* height: 40upx;\n      width: 40upx; */position:absolute;\n  \t/* bottom:30rpx; */left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n  /*  .img.active{\n  \t  width:90rpx;\n  \t  height:90rpx;\n    } */.text[data-v-0926a862]{font-size:%?28?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#333;line-height:%?27?%\n  \t/* margin-top:40rpx; */}.text.active[data-v-0926a862]{color:#333}",""]),t.exports=e},"4c85":function(t,e,i){"use strict";var a=i("609e"),n=i.n(a);n.a},"609e":function(t,e,i){var a=i("da18");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6f682584",a,!0,{sourceMap:!1,shadowMode:!1})},"72a1":function(t,e,i){"use strict";i.r(e);var a=i("c648"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"7dcd":function(t,e,i){"use strict";i.r(e);var a=i("19f7"),n=i("b61b");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("4c85");var r=i("f0c5"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"72c6ca28",null,!1,a["a"],void 0);e["default"]=o.exports},"9c9a":function(t,e,i){var a=i("481e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0179955c",a,!0,{sourceMap:!1,shadowMode:!1})},a615:function(t,e,i){"use strict";i("7a82");var a=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("99af");var n=a(i("ff32")),s=a(i("7dcd")),r=getApp(),o={data:function(){return{imgUrl:r.globalData.baseImageUrl,currentTab:{value:"wait-signing-requests",text:"待签约"},pageName:"消息",refreshStatus:!0,isPulling:!1,marginTop:r.globalData.marginTop,tabMargin:r.globalData.tabMargin,subTabHeight:r.globalData.subTabHeight,tabs:[{value:"wait-signing-requests",text:"待签约"},{value:"message",text:"消息"}],labels:[{value:"commission",text:"佣金"},{value:"system",text:"系统"}],scrollHeight:0,boxTop:0,headerHeight:r.globalData.highTopHeight,list:[],list4:[],pagination:{},currentPage:1,tabbarHeight:0}},components:{tabbar:n.default,customHeader:s.default},onShow:function(){this.currentPage=1,this.list=[],this.getList()},onLoad:function(){this.boxTop=this.marginTop+this.subTabHeight+2*this.tabMargin,this.scrollHeight=r.globalData.systemHeight-this.marginTop-this.subTabHeight-2*this.tabMargin-this.tabbarHeight},methods:{getTabbarHeight:function(t){this.tabbarHeight=t},refreshData:function(){var t=this;this.isPulling||(this.isPulling=!0,this.refreshStatus=!0,"wait-signing-requests"==this.currentTab.value&&(this.currentPage=1,this.list=[],this.getList()),setTimeout((function(){t.refreshStatus=!1,t.isPulling=!1}),1e3))},changeTab:function(t){this.$set(this.currentTab,"value",t.value),this.$set(this.currentTab,"text",t.text),"wait-signing-requests"==t.value?(this.getList(),this.boxTop=this.marginTop+this.subTabHeight+2*this.tabMargin,this.scrollHeight=r.globalData.systemHeight-this.marginTop-this.subTabHeight-2*this.tabMargin-this.tabbarHeight):(this.boxTop=this.marginTop+this.subTabHeight+3*this.tabMargin+20,this.scrollHeight=r.globalData.systemHeight-this.marginTop-this.subTabHeight-3*this.tabMargin-this.tabbarHeight-20)},toDetail:function(t){"wait-signing-requests"==this.currentTab.value?uni.navigateTo({url:"/subpkg/project_detail/project_detail?id="+t}):uni.navigateTo({url:"/subpkg/message_detail/message_detail?id="+t})},getList:function(){var t=this,e="/worker/project/wait-signing-requests?page="+this.currentPage+"&page_size=10";this.$request(e).then((function(e){0==e.code&&JSON.stringify(t.list)!=JSON.stringify(e.data.list)&&(t.list=t.list.concat(e.data.list),t.pagination=e.data.pagination)}))},lower:function(){this.list.length<this.pagination.totalCount?(this.currentPage++,this.getList()):this.list.length>=this.pagination.totalCount&&uni.showToast({title:"已经到底啦~",icon:"none",duration:2e3})}}};e.default=o},aed6:function(t,e,i){var a=i("dbc1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7ca9689f",a,!0,{sourceMap:!1,shadowMode:!1})},b61b:function(t,e,i){"use strict";i.r(e);var a=i("e811"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},bf23:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tabbar"},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"tabbar-item",style:{height:t.height+"px",paddingTop:t.paddingTop+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(a)}}},[t.current==a?i("v-uni-image",{staticClass:"img active",style:{height:t.seleIcHeight+"px",top:t.seleTop+"px"},attrs:{src:e.selectedIconPath,mode:"heightFix"}}):i("v-uni-image",{staticClass:"img",style:{height:t.icHeight+"px",top:t.paddingTop+"px"},attrs:{src:e.iconPath,mode:"heightFix"}}),t.current==a?i("v-uni-view",{staticClass:"text active",style:{marginTop:t.marginTop-5+"px"}},[t._v(t._s(e.text))]):i("v-uni-view",{staticClass:"text",style:{marginTop:t.marginTop-5+"px"}},[t._v(t._s(e.text))])],1)})),1)},n=[]},c38c:function(t,e,i){"use strict";var a=i("9c9a"),n=i.n(a);n.a},c648:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a=getApp(),n={name:"tabbar",props:{current:Number},data:function(){return{height:0,seleIcHeight:0,icHeight:0,paddingTop:0,marginTop:0,seleTop:0,list:[{pagePath:"pages/index/index",text:"工作",iconPath:a.globalData.baseImageUrl+"/worker/ic_work_normal.png",selectedIconPath:a.globalData.baseImageUrl+"/worker/ic_work_sele.png"},{pagePath:"pages/waiting_handle/waiting_handle",text:"消息",iconPath:a.globalData.baseImageUrl+"/worker/ic_message_normal.png",selectedIconPath:a.globalData.baseImageUrl+"/worker/ic_message_sele.png"},{pagePath:"pages/mine/mine",text:"我的",iconPath:a.globalData.baseImageUrl+"/worker/ic_mine_normal.png",selectedIconPath:a.globalData.baseImageUrl+"/worker/ic_mine_sele.png"}]}},created:function(){uni.hideTabBar();var t=uni.getSystemInfoSync();this.height=Math.floor(46/844*t.screenHeight),this.seleIcHeight=Math.floor(this.height*(40/46)),this.icHeight=Math.floor(this.height*(14/46)),this.paddingTop=Math.floor(this.height*(8/46)),this.marginTop=this.icHeight+this.paddingTop,this.seleTop=this.marginTop-this.seleIcHeight,this.$emit("getTabbarHeight",this.height),console.log(this.height,this.seleIcHeight,this.icHeight)},methods:{changeTab:function(t){uni.switchTab({url:"/"+this.list[t].pagePath})}}};e.default=n},da18:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.custom_header[data-v-72c6ca28]{position:fixed;top:0;left:0;width:100%;background:url(https://static.test.swiftwd.com/worker/top_header_bg.png) no-repeat;background-size:100% 100%;overflow:hidden;z-index:2}.custom_header uni-image[data-v-72c6ca28]{will-change:transform}.custom_header > uni-image[data-v-72c6ca28]{width:100%}.custom_header .title[data-v-72c6ca28]{text-align:center;color:#fff;font-size:%?32?%;position:fixed;font-weight:700;width:100%;z-index:10}.custom_header .title .back[data-v-72c6ca28]{position:absolute;left:%?40?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:%?44?%;height:%?44?%}.custom_header .title .back uni-image[data-v-72c6ca28]{width:%?44?%;height:%?44?%}',""]),t.exports=e},dbc1:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-1b15c552] .uni-select{border:none;background:#fff;height:%?88?%;font-size:%?28?%;border-radius:%?8?%;padding:0 %?40?%}[data-v-1b15c552] .uni-icons{display:none}[data-v-1b15c552] .uni-select__input-placeholder{font-size:%?28?%}[data-v-1b15c552] .uni-date-x--border{height:%?88?%;line-height:%?88?%;padding:0 %?40?%;background:#fff;border-radius:%?8?%;box-sizing:border-box;border:none}[data-v-1b15c552] .uni-datetime-picker--btn,[data-v-1b15c552] .uni-calendar-item__weeks-box .uni-calendar-item--checked{background:#4284f4}[data-v-1b15c552] .uni-datetime-picker-btn-text{color:#4284f4}.top_area[data-v-1b15c552]{width:calc(100% - %?96?%);position:fixed;left:%?48?%}.top_area .sele_box[data-v-1b15c552]{margin:0 %?20?% %?20?% 0}.top_area .sele_box .text[data-v-1b15c552]{font-size:%?28?%;color:#fff;font-weight:700}.top_area .sele_box uni-image[data-v-1b15c552]{width:%?34?%;height:%?30?%;margin-right:%?8?%;will-change:transform}.box[data-v-1b15c552]{position:fixed;width:calc(100% - %?80?%);left:%?40?%;z-index:3;border-top-left-radius:%?16?%;border-top-right-radius:%?16?%;overflow:hidden}.box .item[data-v-1b15c552]{padding:0 %?40?% %?40?% %?40?%;border-radius:%?16?%;background:#fff;box-shadow:0 %?2?% %?6?% 0 rgba(0,0,0,.15);margin-bottom:%?20?%;position:relative}.box .item .top[data-v-1b15c552]{padding:%?14?% 0;border-bottom:1px dashed #979797}.box .item .top .title[data-v-1b15c552]{position:relative}.box .item .top .title .circle[data-v-1b15c552]{width:%?12?%;height:%?12?%;border-radius:50%;background:#d00;margin-right:%?8?%}.box .item .top .title .label[data-v-1b15c552]{width:%?80?%;height:%?52?%;line-height:%?52?%;text-align:center;background:#4284f4;border-radius:4px;font-size:%?28?%;color:#fff;margin-right:%?8?%}.box .item .top .title .type[data-v-1b15c552]{font-size:%?28?%;color:#333;line-height:%?52?%}.box .item .top .time[data-v-1b15c552]{font-size:%?24?%;color:#5a5a5a}.box .item .middle[data-v-1b15c552]{font-size:%?24?%;padding:%?24?% 0}.box .item .middle .tit[data-v-1b15c552]{font-weight:700;font-size:%?28?%;margin-bottom:%?12?%}.box .item .middle .detail[data-v-1b15c552]{color:#5a5a5a;line-height:%?40?%}.box .item .middle .mark[data-v-1b15c552]{font-size:%?36?%;color:#333;margin-right:%?8?%}.box .item .middle .yellow[data-v-1b15c552]{color:#4284f4}.box .item .bottom[data-v-1b15c552]{height:%?60?%;border-radius:%?6?%;line-height:%?60?%;padding:0 %?22?%;background:#f6f6f6;font-size:%?24?%;color:#686868}.box .item .bottom uni-image[data-v-1b15c552]{width:%?20?%;height:%?20?%}.box .item .read_label[data-v-1b15c552]{position:absolute;top:0;right:0}.box .item .read_label uni-image[data-v-1b15c552]{width:%?74?%;height:%?74?%}.box .item2[data-v-1b15c552]{padding:%?40?%;border-radius:%?16?%;background:#fff;box-shadow:0 %?2?% %?6?% 0 rgba(0,0,0,.15);margin-bottom:%?20?%}.box .item2 .top .title[data-v-1b15c552]{font-size:%?36?%;padding-left:%?22?%;position:relative;font-weight:700;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.box .item2 .top .title[data-v-1b15c552]:before{content:"";width:%?8?%;height:%?36?%;background:#216ff9;position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.box .item2 .middle[data-v-1b15c552]{margin-top:%?28?%}.box .item2 .line[data-v-1b15c552]{margin-top:%?16?%}.box .item2 .line .tit[data-v-1b15c552]{width:%?80?%;height:%?60?%;line-height:%?60?%;text-align:center;background:#f0f5ff;border-radius:%?6?%;font-size:%?24?%;color:#0e5fe7;margin-right:%?8?%}.box .item2 .line .text[data-v-1b15c552]{width:calc(100% - %?88?%);font-size:%?30?%;color:#333}.box .item2 .bottom .line[data-v-1b15c552]{width:50%}.box .item2 .bottom .line .blue[data-v-1b15c552]{font-weight:700;font-size:%?36?%;color:#216ff9}.box .item2 .bottom .line .period[data-v-1b15c552]{font-size:%?24?%;color:#a8a8a8;margin-left:%?8?%}.box .item2 .bottom .company[data-v-1b15c552]{width:50%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;background:#f6f6f6;height:%?60?%;border-radius:%?6?%;line-height:%?60?%;padding:0 %?22?%;font-size:%?28?%;color:#686868}',""]),t.exports=e},e811:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),n={name:"custom_header",props:["title","showBack","headHeight","showSecondimage","backIndex"],data:function(){return{imgUrl:a.globalData.baseImageUrl,titleHeight:0,marginTop:0,backLeft:0}},created:function(){var t=uni.getMenuButtonBoundingClientRect();this.titleHeight=t.height,this.marginTop=t.top},methods:{back:function(){this.backIndex?uni.switchTab({url:"/pages/index/index"}):uni.navigateBack()}}};e.default=n},fce2:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("customHeader",{attrs:{title:t.pageName,showBack:!1,headHeight:t.headerHeight}}),i("v-uni-view",{staticClass:"cont",style:{marginTop:t.marginTop+"px"}},[i("v-uni-view",{staticClass:"top_area",style:{top:t.marginTop+"px"}},[i("v-uni-view",{staticClass:"subtabs flex flex-start",style:{height:t.subTabHeight+"px",marginTop:t.tabMargin+"px",marginBottom:t.tabMargin+"px"}},t._l(t.tabs,(function(e,a){return i("v-uni-view",{key:a,staticClass:"subtab flex flex_around",class:t.currentTab.value==e.value?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changeTab(e)}}},[t._v(t._s(e.text))])})),1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"message"==t.currentTab.value,expression:"currentTab.value == 'message'"}],staticClass:"sele_box flex flex-start",staticStyle:{height:"20px"}},[i("v-uni-image",{attrs:{src:t.imgUrl+"/broker/ic_message.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"text"},[t._v("全部已读")])],1)],1),i("v-uni-view",{staticClass:"box",style:{top:t.boxTop+"px",background:0==t.list.length?"#fff":"#F3F3F5"}},[i("v-uni-scroll-view",{staticClass:"scroll-Y",style:{height:t.scrollHeight+"px"},attrs:{"scroll-top":t.scrollTop,"scroll-y":"true","refresher-enabled":"true","refresher-triggered":t.refreshStatus},on:{refresherpulling:function(e){arguments[0]=e=t.$handleEvent(e),t.refreshData.apply(void 0,arguments)},scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.lower.apply(void 0,arguments)}}},[t._l(t.list,(function(e,a){return"wait-signing-requests"==t.currentTab.value?i("v-uni-view",{key:a,staticClass:"item2",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e.id)}}},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.project_name))])],1),i("v-uni-view",{staticClass:"middle"},[i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("工作时间")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.work_start_time.slice(0,10))+" 至\n\t\t\t\t\t\t\t\t"+t._s(e.work_end_time.slice(0,10)))])],1),i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("工作地点")]),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.work_address))])],1)],1),i("v-uni-view",{staticClass:"bottom flex flex_btween"},[i("v-uni-view",{staticClass:"line flex flex-start"},[i("v-uni-view",{staticClass:"tit"},[t._v("工作酬劳")]),i("v-uni-view",{staticClass:"text flex flex-start"},[i("v-uni-text",{staticClass:"blue"},[t._v(t._s(e.salary_unit_price))]),i("v-uni-text",{staticClass:"period"},[t._v("/"+t._s(t.period.filter((function(t){return t.value==e.salary_settlement_type}))[0].text))])],1)],1),i("v-uni-view",{staticClass:"company"},[t._v(t._s(e.broker_company_name))])],1)],1):t._e()})),0==t.list.length?i("v-uni-view",{staticClass:"empty"},[i("v-uni-image",{attrs:{src:t.imgUrl+"/worker/empty_bg.png",mode:"heightFix"}})],1):t._e(),t._l(t.list4,(function(e,a){return"message"==t.currentTab.value?i("v-uni-view",{key:a,staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e.id)}}},[i("v-uni-view",{staticClass:"top flex flex_btween"},[i("v-uni-view",{staticClass:"title flex flex-start"},["unread"==e.status?i("v-uni-view",{staticClass:"circle"}):t._e(),i("v-uni-view",{staticClass:"label"},[t._v(t._s(t.labels.filter((function(t){return t.value==e.type}))[0].text))]),i("v-uni-view",{staticClass:"type"},[t._v(t._s(t.labels.filter((function(t){return t.value==e.type}))[0].text)+"信息")])],1),i("v-uni-view",{staticClass:"time"},[t._v(t._s(e.time))])],1),i("v-uni-view",{staticClass:"middle"},[i("v-uni-view",{staticClass:"tit"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"detail"},[t._v(t._s(e.content))])],1),i("v-uni-view",{staticClass:"bottom flex flex_btween"},[i("v-uni-view",{staticClass:"text"},[t._v("查看更多")]),i("v-uni-image",{attrs:{src:t.imgUrl+"/broker/more.png",mode:"widthFix"}})],1),"read"==e.status?i("v-uni-view",{staticClass:"read_label"},[i("v-uni-image",{attrs:{src:t.imgUrl+"/broker/ic_message_read.png",mode:"widthFix"}})],1):t._e()],1):t._e()}))],2)],1)],1),i("tabbar",{attrs:{current:"1"},on:{getTabbarHeight:function(e){arguments[0]=e=t.$handleEvent(e),t.getTabbarHeight.apply(void 0,arguments)}}})],1)},n=[]},ff32:function(t,e,i){"use strict";i.r(e);var a=i("bf23"),n=i("72a1");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("c38c");var r=i("f0c5"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"0926a862",null,!1,a["a"],void 0);e["default"]=o.exports}}]);