(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/login"],{"03d4":function(e,t,n){"use strict";n.r(t);var o=n("f7ba"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},3192:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var o=function(){var e=this.$createElement;this._self._c},a=[]},"4d8e":function(e,t,n){"use strict";var o=n("c887"),a=n.n(o);a.a},"511f":function(e,t,n){"use strict";n.r(t);var o=n("3192"),a=n("03d4");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("4d8e");var r=n("828b"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"4e8016aa",null,!1,o["a"],void 0);t["default"]=c.exports},c887:function(e,t,n){},f7ba:function(e,t,n){"use strict";(function(e){var o=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("7eb4")),i=o(n("ee10")),r={name:"login",props:["showLogin","shareId"],data:function(){return{showPolicy:!1,getPhoneData:{}}},methods:{readPolicy:function(){this.showPolicy=!0},getShareParams:function(t){this.$request("/worker/shares",{},"GET",t).then((function(t){0==t.code&&e.setStorageSync("shareParams",JSON.stringify(t.data))}))},closePolicy:function(){this.showPolicy=!1},refuse:function(){console.log("关闭"),this.$emit("closeLogin")},getPhoneNumber:function(t){var n=this;return(0,i.default)(a.default.mark((function o(){var i,r;return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:i="",r=n,console.log(t,"getPhoneNumber"),e.showLoading(),n.refuse(),n.getPhoneData.open_id=e.getStorageSync("openid"),n.getPhoneData.share_id=n.shareId,"getPhoneNumber:ok"==t.detail.errMsg?(console.log(t.detail,"e.detail"),n.getPhoneData.encrypted_data=t.detail.encryptedData,n.getPhoneData.iv=t.detail.iv,n.getPhoneData.code=t.detail.code,i="/auth/worker/wechat/mini/login",r.$request(i,n.getPhoneData,"POST").then((function(t){if(0==t.code){r.$emit("closeLogin"),e.setStorageSync("token",t.data.token);var n={Authorization:"bearer "+t.data.token,accept:"application/json","open-id":e.getStorageSync("openid")?e.getStorageSync("openid"):""};r.getShareParams(n),r.$emit("getInfo")}e.hideLoading()}))):console.log(t.detail.errMsg);case 8:case"end":return o.stop()}}),o)})))()}}};t.default=r}).call(this,n("df3c")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/login-create-component',
    {
        'components/login-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("511f"))
        })
    },
    [['components/login-create-component']]
]);
