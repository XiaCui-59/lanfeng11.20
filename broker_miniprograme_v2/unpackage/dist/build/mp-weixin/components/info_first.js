(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/info_first"],{"3e13":function(t,e,n){"use strict";var a=n("602e"),i=n.n(a);i.a},"602e":function(t,e,n){},"764e":function(t,e,n){"use strict";n.r(e);var a=n("fa25"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"8f04":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]},b840:function(t,e,n){"use strict";n.r(e);var a=n("8f04"),i=n("764e");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("3e13");var u=n("828b"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"495fbd8e",null,!1,a["a"],void 0);e["default"]=r.exports},fa25:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),a={name:"info_first",props:["showNameInput"],data:function(){return{imgUrl:n.globalData.baseImageUrl,name:""}},methods:{toAuth:function(){var e=this;if(this.showNameInput){if(!this.name)return void t.showToast({title:"请先填写姓名",duration:2e3,icon:"error"});var n={username:this.name,avatar:{key:"",url:""}};this.$request("/broker/update-personal-info",n,"POST").then((function(n){0==n.code&&(e.$emit("handleName"),t.navigateTo({url:"/subpkg/authentication/authentication"}),e.close())}))}else t.navigateTo({url:"/subpkg/authentication/authentication"}),this.close()},close:function(){this.$emit("closeAddInfo")}}};e.default=a}).call(this,n("df3c")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/info_first-create-component',
    {
        'components/info_first-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("b840"))
        })
    },
    [['components/info_first-create-component']]
]);
