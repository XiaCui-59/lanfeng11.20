(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/my_info/my_info"],{"11a1":function(e,t,n){"use strict";(function(e){var a=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("7eb4")),o=a(n("ee10")),r=a(n("2c82")),u=getApp(),c={data:function(){return{imgUrl:u.globalData.baseImageUrl,pageName:"公司信息",currentTab:0,marginTop:u.globalData.marginTop,subTabHeight:u.globalData.subTabHeight,tabMargin:u.globalData.tabMargin,detailTitleHeight:u.globalData.detailTitleHeight,scrollHeight:0,boxTop:0,headerHeight:u.globalData.topHeight,baseStatus:r.default.baseStatus,info:{business_address:"",business_license_image:"",legal_person_mobile:"",legal_person_name:"",logo:"",name:"",status:"",unified_social_credit_code:""}}},components:{customHeader:function(){n.e("components/custom_header").then(function(){return resolve(n("11e5"))}.bind(null,n)).catch(n.oe)}},onShow:function(){var e=this;return(0,o.default)(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e,t.next=3,e.getInfo();case 3:e.info=t.sent;case 4:case"end":return t.stop()}}),t)})))()},methods:{toPrev:function(){var t=[];this.info.company.business_license_image.url&&t.push(this.info.company.business_license_image.url),this.info.company.human_resources_permit_image.url&&t.push(this.info.company.human_resources_permit_image.url),t.length>0&&e.previewImage({urls:t})},navigate:function(){e.navigateTo({url:"/subpkg/authentication/authentication"})},changeTab:function(e){this.currentTab=e},getMarginTop:function(t){var n=e.getMenuButtonBoundingClientRect();this.marginTop=n.height+n.top+10,this.maskInnerTop=this.marginTop+20},getTopHeight:function(){var t=e.getSystemInfoSync();this.headerHeight=Math.floor(t.screenHeight*(200/844))},getElementInfo:function(){var t=this,n=e.getSystemInfoSync(),a=Math.floor(n.screenHeight*(46/844));console.log(a,"tabbar");var i=e.createSelectorQuery().select(".top_area");i.boundingClientRect((function(e){e.bottom-e.top,t.boxTop=t.marginTop+e.height,t.scrollHeight=n.screenHeight-t.boxTop-a-5})).exec()}}};t.default=c}).call(this,n("df3c")["default"])},"327e":function(e,t,n){"use strict";(function(e,t){var a=n("47a9");n("c9a7");a(n("3240"));var i=a(n("958c"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},"3d28":function(e,t,n){"use strict";var a=n("418e"),i=n.n(a);i.a},"418e":function(e,t,n){},"8f2f":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.baseStatus.filter((function(t){return t.value==e.info.broker.review_status})));e.$mp.data=Object.assign({},{$root:{g0:n}})},i=[]},"958c":function(e,t,n){"use strict";n.r(t);var a=n("8f2f"),i=n("e699");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("3d28");var r=n("828b"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=u.exports},e699:function(e,t,n){"use strict";n.r(t);var a=n("11a1"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a}},[["327e","common/runtime","common/vendor"]]]);