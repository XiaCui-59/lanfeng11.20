(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/my_info/my_info"],{"0f5d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),i={data:function(){return{imgUrl:a.globalData.baseImageUrl,pageName:"我的资料",marginTop:a.globalData.marginTop,tabMargin:a.globalData.tabMargin,scrollHeight:0,boxTop:0,headerHeight:a.globalData.topHeight,showMask:!1,info:{gender:"",id_card_back_image:"",id_card_front_image:"",id_card_number:"",name:"",verified:!1}}},components:{customHeader:function(){n.e("components/custom_header").then(function(){return resolve(n("8f8a"))}.bind(null,n)).catch(n.oe)}},onLoad:function(){this.scrollHeight=a.globalData.systemHeight-this.marginTop-this.tabMargin,this.getInfo()},methods:{getMarginTop:function(e){var n=t.getMenuButtonBoundingClientRect();this.marginTop=n.height+n.top+10},getTopHeight:function(){var e=t.getSystemInfoSync();this.headerHeight=Math.floor(e.screenHeight*(200/844))},getElementInfo:function(){var e=this,n=t.getSystemInfoSync(),a=t.createSelectorQuery().select(".top_area");a.boundingClientRect((function(t){t&&(t.height,e.boxTop=e.marginTop+t.height),e.scrollHeight=n.screenHeight-e.boxTop-5})).exec()},confirm:function(){var e={gender:"男"==this.gender?"male":"female",name:this.name,ethnicity:this.nation,id_card_number:this.idcardNumber,id_card_front:this.idcardFront.key,id_card_back:this.idcardBack.key};this.$request("/worker/profile",e,"POST").then((function(e){0==e.code&&(t.showToast({title:"提交成功"}),t.navigateBack())}))},openMask:function(){this.showMask=!0},close:function(){this.showMask=!1},getInfo:function(){var t=this;this.$request("/worker/profile").then((function(e){0==e.code&&(t.info=e.data)}))}}};e.default=i}).call(this,n("4884")["default"])},"3f50":function(t,e,n){"use strict";n.r(e);var a=n("0f5d"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"540a":function(t,e,n){"use strict";(function(t,e){var a=n("47a9");n("e32d");a(n("3240"));var i=a(n("6a8e"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("4884")["default"],n("4884")["createPage"])},"6a8e":function(t,e,n){"use strict";n.r(e);var a=n("f863"),i=n("3f50");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("9768");var r=n("828b"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"59082bb2",null,!1,a["a"],void 0);e["default"]=c.exports},"84d9":function(t,e,n){},9768:function(t,e,n){"use strict";var a=n("84d9"),i=n.n(a);i.a},f863:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]}},[["540a","common/runtime","common/vendor"]]]);