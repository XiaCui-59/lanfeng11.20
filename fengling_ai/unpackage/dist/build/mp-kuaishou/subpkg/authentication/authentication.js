(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/authentication/authentication"],{"0873":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){}));var n=function(){var e=this.$createElement;this._self._c},i=[]},"94f6":function(e,t,a){"use strict";(function(e){var n=a("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("7eb4")),r=n(a("ee10")),o=getApp(),c={data:function(){return{imgUrl:o.globalData.baseImageUrl,pageName:"实名认证",marginTop:o.globalData.marginTop,tabMargin:o.globalData.tabMargin,scrollHeight:0,boxTop:0,headerHeight:o.globalData.topHeight,name:"",gender:"",idcardNumber:"",idcardDateline:"",nation:"",idcardFront:{key:"",url:""},idcardBack:{key:"",url:""}}},components:{customHeader:function(){a.e("components/custom_header").then(function(){return resolve(a("8f8a"))}.bind(null,a)).catch(a.oe)}},onLoad:function(){this.scrollHeight=o.globalData.systemHeight-this.tabMargin-this.marginTop},methods:{getMarginTop:function(t){var a=e.getMenuButtonBoundingClientRect();this.marginTop=a.height+a.top+10},getTopHeight:function(){var t=e.getSystemInfoSync();this.headerHeight=Math.floor(t.screenHeight*(200/844))},chooseImage:function(t){var a=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){var n=e.tempFilePaths;a.loadimg(t,n[0])},fail:function(e){console.log(e)}})},loadimg:function(t,a){var n=this;return(0,r.default)(i.default.mark((function r(){var c,d;return i.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return c=n,d={Authorization:"bearer "+e.getStorageSync("token"),accept:"application/json","content-type":"multipart/form-data"},i.abrupt("return",new Promise((function(n,i){e.uploadFile({url:o.globalData.baseUrl+"/worker/upload/image?type="+t,filePath:a,name:"file",header:d,success:function(a){var n=JSON.parse(a.data);0==n.code?(e.showToast({title:"图片上传成功"}),"id_card_front"==t&&(c.idcardFront=n.data,c.$request("/worker/ocr/id-card",{key:n.data.key},"POST").then((function(e){0==e.code&&(c.name=e.data.front.name,c.gender=e.data.front.sex,c.idcardNumber=e.data.front.id_number,c.nation=e.data.front.ethnicity)}))),"id_card_back"==t&&(c.idcardBack=n.data,c.$request("/worker/ocr/id-card",{key:n.data.key},"POST").then((function(e){0==e.code&&(c.idcardDateline=e.data.back.valid_period)})))):e.showModal({title:"上传失败",content:n.msg})},complete:function(){e.hideLoading()}}),n(c.reponsefiles)})));case 3:case"end":return i.stop()}}),r)})))()},confirm:function(){var t={gender:"男"==this.gender?"male":"female",name:this.name,ethnicity:this.nation,id_card_number:this.idcardNumber,id_card_front:this.idcardFront.key,id_card_back:this.idcardBack.key,id_card_valid_period:this.idcardDateline};this.$request("/worker/profile",t,"POST").then((function(t){0==t.code&&(e.showToast({title:"提交成功",duration:3e3}),setTimeout((function(){e.navigateBack()}),2e3))}))}}};t.default=c}).call(this,a("4884")["default"])},9961:function(e,t,a){"use strict";var n=a("dcf8"),i=a.n(n);i.a},aa2b:function(e,t,a){"use strict";a.r(t);var n=a("0873"),i=a("fa4f");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("9961");var o=a("828b"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"6af5bf03",null,!1,n["a"],void 0);t["default"]=c.exports},b1fb:function(e,t,a){"use strict";(function(e,t){var n=a("47a9");a("e32d");n(a("3240"));var i=n(a("aa2b"));e.__webpack_require_UNI_MP_PLUGIN__=a,t(i.default)}).call(this,a("4884")["default"],a("4884")["createPage"])},dcf8:function(e,t,a){},fa4f:function(e,t,a){"use strict";a.r(t);var n=a("94f6"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a}},[["b1fb","common/runtime","common/vendor"]]]);