(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/custom_header"],{"0320":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),a={name:"custom_header",props:["title","showBack","headHeight","showSecondimage","showScan","backIndex","bgImage"],data:function(){return{titleHeight:0,marginTop:0,backLeft:0,imgUrl:n.globalData.baseImageUrl}},created:function(){console.log(this.bgImage,"bgImage");var e=t.getMenuButtonBoundingClientRect();this.titleHeight=e.height,this.marginTop=e.top},methods:{back:function(){"完善职位信息"==this.title?this.$emit("handleBack"):this.backIndex?t.switchTab({url:"/pages/index/index"}):t.navigateBack()},scanCode:function(){var e=this;t.scanCode({onlyFromCamera:!0,scanType:"qrCode",hideAlbum:!0,success:function(n){console.log(n);var a=n.result;e.$request(a,{},"POST").then((function(e){0==e.code&&t.showModal({title:"工人："+e.data+"，报到核销成功",showCancel:!1})}))}})}}};e.default=a}).call(this,n("df3c")["default"])},"06f3":function(t,e,n){"use strict";var a=n("3401"),i=n.n(a);i.a},"11e5":function(t,e,n){"use strict";n.r(e);var a=n("9d9c"),i=n("39b0");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("06f3");var c=n("828b"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=u.exports},3401:function(t,e,n){},"39b0":function(t,e,n){"use strict";n.r(e);var a=n("0320"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"9d9c":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/custom_header-create-component',
    {
        'components/custom_header-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("11e5"))
        })
    },
    [['components/custom_header-create-component']]
]);
