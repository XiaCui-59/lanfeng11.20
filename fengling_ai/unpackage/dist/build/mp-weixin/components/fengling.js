(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/fengling"],{"0aa6":function(e,t,n){"use strict";(function(e){var a=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("7eb4")),o=a(n("ee10")),r=getApp(),s={name:"welcome",props:["top","bottom"],data:function(){return{current:0,dots:2,imgUrl:r.globalData.baseImageUrl,list:[{id:0,name:"成都陪诊师招聘（兼职）"},{id:0,name:"沃尔玛超市分拣员，全成都安排"},{id:0,name:"美团/饿了么纯文字客服"},{id:0,name:"面包车司机城内货运"},{id:0,name:"外卖出餐员成都就近安排"}],list2:[{id:0,name:"龙泉矢崎线束厂"},{id:0,name:"温江香飘飘奶茶厂"},{id:0,name:"餐厅销售经理"},{id:0,name:"高中档中餐厅服务员"},{id:0,name:"营销主管贵州酒业集团"}],tipList:[{text:"我想找个长白班的工作。"},{text:"请问哪些工作是提供吃住的？"},{text:"有没有适合我的工作，轻松一点的。"}],posInfo:{},weatherInfo:null,greetingTitle:"",systemHeight:r.globalData.systemHeight,swiperHeight:0}},created:function(){var t=this;return(0,o.default)(i.default.mark((function n(){var a;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t,n.next=3,t.getPosition();case 3:return t.posInfo=n.sent,n.next=6,t.getWeather();case 6:t.weatherInfo=n.sent,t.greetingTitle=t.creatTitle(),setTimeout((function(){e.createSelectorQuery().in(a).select(".list").boundingClientRect((function(e){console.log("rect:",e),a.swiperHeight=e.height})).exec()}),500);case 9:case"end":return n.stop()}}),n)})))()},methods:{onSwiperChange:function(e){this.current=e.detail.current},sendMsg:function(e,t){var n={msg:e,type:t};this.$emit("sendMsg",n)},getPosition:function(){return new Promise((function(t){var n="https://apis.map.qq.com/ws/location/v1/ip?key="+r.globalData.qqMapKey;e.request({url:n,method:"GET",success:function(e){t(e.data.result)},fail:function(e){console.log(e)}})}))},getWeather:function(){var t=this;return new Promise((function(n){var a="https://apis.map.qq.com/ws/weather/v1/?key="+r.globalData.qqMapKey+"&adcode="+t.posInfo.ad_info.adcode;e.request({url:a,method:"GET",success:function(e){console.log(e),e.data.result&&n(e.data.result.realtime[0])},fail:function(e){console.log(e)}})}))},creatTitle:function(){var e="",t=this.weatherInfo.update_time.slice(11,13);return console.log(t),e="0"==t[0]?"上午":"1"==t[0]?Number(t[1])<2?"上午":Number(t[1])>=2&&Number(t[1])<8?"下午":"晚上":"晚上",e+"好~"}}};t.default=s}).call(this,n("df3c")["default"])},"0c6a":function(e,t,n){"use strict";var a=n("cba8"),i=n.n(a);i.a},"21a9":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.weatherInfo?e.weatherInfo.infos.weather.indexOf("晴"):null),a=e.weatherInfo?-1!=e.weatherInfo.infos.weather.indexOf("阴")||-1!=e.weatherInfo.infos.weather.indexOf("云"):null,i=e.weatherInfo?e.weatherInfo.infos.weather.indexOf("雨"):null;e.$mp.data=Object.assign({},{$root:{g0:n,g1:a,g2:i}})},i=[]},"579f":function(e,t,n){"use strict";n.r(t);var a=n("0aa6"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"68a7":function(e,t,n){"use strict";n.r(t);var a=n("21a9"),i=n("579f");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("0c6a");var r=n("828b"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=s.exports},cba8:function(e,t,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/fengling-create-component',
    {
        'components/fengling-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("68a7"))
        })
    },
    [['components/fengling-create-component']]
]);
