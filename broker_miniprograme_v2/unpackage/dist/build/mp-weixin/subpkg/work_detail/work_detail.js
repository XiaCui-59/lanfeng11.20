(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/work_detail/work_detail"],{"0693":function(t,e,o){"use strict";(function(t,e){var n=o("47a9");o("226a");n(o("3240"));var a=n(o("9a3f"));t.__webpack_require_UNI_MP_PLUGIN__=o,e(a.default)}).call(this,o("3223")["default"],o("df3c")["createPage"])},"1ea2":function(t,e,o){},"67b3":function(t,e,o){"use strict";o.r(e);var n=o("f6bd"),a=o.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},"9a3f":function(t,e,o){"use strict";o.r(e);var n=o("c625"),a=o("67b3");for(var i in a)["default"].indexOf(i)<0&&function(t){o.d(e,t,(function(){return a[t]}))}(i);o("a273");var l=o("828b"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"4493cfdd",null,!1,n["a"],void 0);e["default"]=s.exports},a273:function(t,e,o){"use strict";var n=o("1ea2"),a=o.n(n);a.a},c625:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.period.filter((function(e){return e.value==t.info.salary_settlement_type})));t.$mp.data=Object.assign({},{$root:{g0:o}})},a=[]},f6bd:function(t,e,o){"use strict";(function(t){var n=o("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o("7ca3")),i=n(o("b115")),l=getApp(),s={data:function(){var t;return{imgUrl:l.globalData.baseImageUrl,pageName:"我要接单",marginTop:l.globalData.marginTop,getTop:l.globalData.getTop,getBottomHeight:l.globalData.getBottomHeight,detailTitleHeight:l.globalData.detailTitleHeight,subTabHeight:l.globalData.subTabHeight,info:(t={id:0,content:"这是职位详情",employer_name:"成都欣欣劳务有限公司",enroll_num:0},(0,a.default)(t,"id",""),(0,a.default)(t,"need_num",0),(0,a.default)(t,"salary","4.5"),(0,a.default)(t,"work_address","成都高新区剑南大道215号"),(0,a.default)(t,"work_time","2024-03-19 09:00"),(0,a.default)(t,"salary_period","/人/时"),(0,a.default)(t,"status","待签约"),t),displayType:"-webkit-box",period:i.default.periodList,paySalaryPeriod:i.default.paySalaryPeriod,paySalaryWeekly:i.default.paySalaryWeekly,showAll:!0,headerHeight:l.globalData.topHeight,scrollHeight:0,contHeight:0,showMask:!1,showInner1:!1,showInner2:!1,pb_id:""}},components:{customHeader:function(){o.e("components/custom_header").then(function(){return resolve(o("731d"))}.bind(null,o)).catch(o.oe)}},onLoad:function(e){if(this.contHeight=l.globalData.systemHeight-this.marginTop-this.getTop-Math.floor(l.globalData.systemHeight*(151/884)),this.scrollHeight=this.contHeight-this.detailTitleHeight,console.log(e),e.scene){var o=decodeURIComponent(e.scene);console.log(o);for(var n=o.split("&"),a=0;a<n.length;a++)-1!=n[a].indexOf("pb_id")&&(this.pb_id=n[a].split("=")[1])}e.open_type&&"toc"==e.open_type&&t.showModal({title:"是否打开灵动优聘工人端小程序进行报名？",confirmText:"去报名",showCancel:!1,success:function(o){o.confirm&&t.navigateToMiniProgram({envVersion:"trial",appId:"wxaefe465c891721e8",path:"/subpkg/work_detail/work_detail?scene="+e.scene,success:function(o){console.log("/subpkg/work_detail/work_detail?scene="+e.scene),console.log("打开成功"),t.exitMiniProgram()},fail:function(e){console.log(e),t.exitMiniProgram()}})}}),console.log(this.pb_id,"pb_id")},onShow:function(){var t=this,e="/share-to-broker/project/"+this.pb_id+"/detail";this.$request(e).then((function(e){0==e.code&&(t.info=e.data)}))},methods:{showTotal:function(){console.log(1234),this.displayType="block",this.showAll=!1},accept:function(){var e=t.getStorageSync("token");if(e){var o="/broker/mini/project-broker/"+this.pb_id+"/join-affiliate";this.$request(o,{},"POST").then((function(e){0==e.code&&t.showModal({title:"接单成功",content:"点击确定，进入系统首页。",success:function(e){e.confirm&&t.switchTab({url:"/pages/index/index"})}})}))}else t.showModal({title:"未登录",content:"您当前还未登录，请先登录再报名。",confirmText:"去登录",success:function(e){e.confirm?t.navigateTo({url:"/pages/login/login"}):t.exitMiniProgram()}})},toAuth:function(){this.close(),t.navigateTo({url:"/subpkg/authentication/authentication"})},close:function(){this.showMask=!1,this.showInner1=!1,this.showInner2=!1},openInner1:function(){this.showMask=!0,this.showInner1=!0},openInner2:function(){this.showMask=!0,this.showInner2=!0}}};e.default=s}).call(this,o("df3c")["default"])}},[["0693","common/runtime","common/vendor"]]]);