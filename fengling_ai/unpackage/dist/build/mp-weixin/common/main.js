(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"256c":function(t,e,a){"use strict";a.r(e);var o=a("5c73"),n=a.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(r);e["default"]=n.a},"5c73":function(t,e,a){"use strict";(function(t){var o=a("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("7eb4")),r=o(a("ee10")),l=o(a("4d31")),i={globalData:{jobList:l.default.urls.jobList,wssUrl:l.default.urls.wssUrl,baseUrl:l.default.urls.apiUrl,baseImageUrl:l.default.urls.imageUrl,qqMapKey:l.default.urls.qqMapKey,highTopHeight:0,topHeight:0,subTabHeight:0,tabMargin:0,marginTop:0,tabbarHeight:0,systemHeight:0,mineCardHeight:0,mineTop:0,btnBottom:0,detailTitleHeight:0,getTop:0,getBottomHeight:0,avatarHeight:0,codeHeight:0,btnHeight:0,loginHeadHeight:0,loginAreaTop:0,bannerHeight:0,scene:0,menuButtonInfo:{},statusBarHeight:0,socketTask:null,Audio:t.createInnerAudioContext(),manager:t.getRecorderManager()},watch:{showAnswering:function(t){this.globalData.showAnswering=t}},onLaunch:function(e){var a=this;return(0,r.default)(n.default.mark((function o(){var r,l;return n.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(t.setNavigationBarColor({frontColor:"#000000",backgroundColor:"transparent"}),t.setKeepScreenOn({keepScreenOn:!0}),console.log("App Launch"),console.log(e),a.globalData.scene=e.scene,t.hideTabBar(),1154!=e.scene&&(r=t.getUpdateManager(),r.onCheckForUpdate((function(e){e.hasUpdate&&r.onUpdateReady((function(e){t.showModal({title:"更新提示",content:"小程序有新的版本，请更新后使用哟~",showCancel:!1,success:function(t){t.confirm&&r.applyUpdate()}})}))})),r.onUpdateFailed((function(e){t.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})}))),l=t.getSystemInfoSync(),a.globalData.statusBarHeight=l.statusBarHeight,a.globalData.systemHeight=l.screenHeight,230/844,170/844,a.globalData.highTopHeight=Math.floor(l.screenHeight*(230/844)),a.globalData.topHeight=Math.floor(l.screenHeight*(170/844)),58/844,a.globalData.subTabHeight=Math.floor(l.screenHeight*(58/844)),10/844,a.globalData.tabMargin=Math.floor(l.screenHeight*(10/844)),a.globalData.menuButtonInfo=t.getMenuButtonBoundingClientRect(),a.globalData.marginTop=a.globalData.menuButtonInfo.height+a.globalData.menuButtonInfo.top,a.globalData.tabbarHeight=Math.floor(l.screenHeight*(46/844)),console.log(a.globalData.systemHeight,a.globalData.tabbarHeight),a.globalData.mineCardHeight=Math.floor(l.screenHeight*(174/844)),a.globalData.mineTop=Math.floor(l.screenHeight*(200/844)),a.globalData.avatarHeight=Math.floor(l.screenHeight*(56/844)),a.globalData.btnBottom=Math.floor(l.screenHeight*(30/844)),a.globalData.detailTitleHeight=Math.floor(l.screenHeight*(40/844)),a.globalData.codeHeight=Math.floor(l.screenHeight*(360/844)),a.globalData.getTop=Math.floor(l.screenHeight*(67/844)),a.globalData.getBottomHeight=Math.floor(l.screenHeight*(226/844)),a.globalData.btnHeight=Math.floor(l.screenHeight*(50/844)),a.globalData.loginHeadHeight=Math.floor(l.screenHeight*(292/844)),a.globalData.loginAreaTop=Math.floor(l.screenHeight*(218/844)),a.globalData.bannerHeight=Math.floor(l.screenHeight*(100/844)),!a.isLogin()){o.next=39;break}return o.next=37,a.queryPubStatus();case 37:a.globalData.showPubTabbar=o.sent,console.log(a.globalData.showPubTabbar,"!!!!");case 39:case"end":return o.stop()}}),o)})))()},onShow:function(){console.log("App Show"),t.hideTabBar()},onHide:function(){console.log("App Hide")},onUnload:function(){this.globalData.Audio.destroy()}};e.default=i}).call(this,a("df3c")["default"])},"9b76":function(t,e,a){"use strict";a.r(e);var o=a("256c");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("bcfb");var r=a("828b"),l=Object(r["a"])(o["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);e["default"]=l.exports},a220:function(t,e,a){"use strict";(function(t,e,o){var n=a("47a9"),r=n(a("7ca3"));a("e58b");var l=n(a("9b76")),i=n(a("aac2")),c=n(a("3a0a")),u=n(a("3a5d")),s=n(a("cd41")),g=n(a("3240")),f=n(a("db6e"));function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}t.__webpack_require_UNI_MP_PLUGIN__=a;g.default.mixin(u.default),g.default.use(f.default),g.default.component("myModal",(function(){a.e("components/myModal").then(function(){return resolve(a("f935"))}.bind(null,a)).catch(a.oe)})),g.default.config.productionTip=!1,g.default.prototype.$request=i.default,g.default.prototype.$aiRequest=c.default,g.default.prototype.$store=s.default,g.default.prototype.isLogin=function(){var t=e.getStorageSync("token");return!!t},g.default.prototype.getUsrInfo=function(){var t=this;return new Promise((function(a){t.$request("/worker/profile").then((function(t){0==t.code&&(e.setStorageSync("userInfo",t.data),a(t.data))}))}))},g.default.prototype.queryPubStatus=function(){var t=this;return new Promise((function(a){var o=e.getStorageSync("token");o&&(console.log("sdfdsgdfg"),t.$request("/worker/wechat/official-account/is-subscribe").then((function(t){0==t.code&&a(t.data.subscribed)})))}))},l.default.mpType="app";var b=new g.default(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){(0,r.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({store:s.default},l.default));o(b).$mount()}).call(this,a("3223")["default"],a("df3c")["default"],a("df3c")["createApp"])},b630:function(t,e,a){},bcfb:function(t,e,a){"use strict";var o=a("b630"),n=a.n(o);n.a}},[["a220","common/runtime","common/vendor"]]]);