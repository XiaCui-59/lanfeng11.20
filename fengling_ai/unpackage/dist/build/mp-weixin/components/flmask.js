(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/flmask"],{"3f49":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=getApp(),r={name:"flmask",data:function(){return{imgUrl:i.globalData.baseImageUrl,listTest:i.globalData.jobList,currentIndex:0}},mounted:function(){this.setAnimation()},methods:{setAnimation:function(){var t=this,n=this.listTest.length,e=setInterval((function(){if(t.currentIndex<n){var i={text:t.listTest[t.currentIndex].text,job_id:t.listTest[t.currentIndex].job_id,showAnimation:!0};t.$set(t.listTest,t.currentIndex,JSON.parse(JSON.stringify(i))),t.currentIndex++}else t.currentIndex=0,clearInterval(e)}),200)},closeFengling:function(){this.$emit("closeFengling")},sendMsg:function(t,n){console.log("点击推荐：",t);var e={msg:t.text+"（职位ID："+t.job_id+"）",type:n,job_id:t.job_id};this.$emit("sendMsg",e)}}};n.default=r},"890d":function(t,n,e){"use strict";e.r(n);var i=e("3f49"),r=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=r.a},a3e59:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},r=[]},b7ed:function(t,n,e){},c5c2:function(t,n,e){"use strict";var i=e("b7ed"),r=e.n(i);r.a},ddf8:function(t,n,e){"use strict";e.r(n);var i=e("a3e59"),r=e("890d");for(var s in r)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(s);e("c5c2");var a=e("828b"),o=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/flmask-create-component',
    {
        'components/flmask-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("ddf8"))
        })
    },
    [['components/flmask-create-component']]
]);
