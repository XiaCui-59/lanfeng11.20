(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/scrollText"],{"1a12":function(t,e,n){"use strict";(function(t){var r=n("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("7ca3")),c=n("8f59");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var l={name:"scrollText",props:["receiveEnd","width"],data:function(){return{result:"",printIndex:0,printTimer:null,scrollView:"",changeCount:0}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,c.mapState)(["callContent","aiSpeekingEnd"])),watch:{result:function(t){this.toScroll()}},created:function(){this.printIndex=0,this.changeCount=0,this.scrollView="",this.result="",this.printTimer&&clearInterval(this.printTimer),this.printWords()},methods:{printWords:function(){var t=this;this.printTimer=setInterval((function(){var e=t.callContent.length;t.printIndex<e?(t.result+=t.callContent[t.printIndex],t.printIndex++):t.printIndex==e&&t.aiSpeekingEnd&&(console.log("文字打印完毕"),clearInterval(t.printTimer))}),100)},getElementHeight:function(){var e=this,n=t.createSelectorQuery().in(this);n.select(".result_text").boundingClientRect((function(t){t&&(e.currentContHeight=t.height)})).exec()},toScroll:function(){var t=this;t.scrollView="",this.$nextTick((function(){t.scrollView="bot"}))}}};e.default=l}).call(this,n("df3c")["default"])},"2a04":function(t,e,n){},8478:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this.$createElement;this._self._c},i=[]},8531:function(t,e,n){"use strict";n.r(e);var r=n("1a12"),i=n.n(r);for(var c in r)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e["default"]=i.a},b66a:function(t,e,n){"use strict";n.r(e);var r=n("8478"),i=n("8531");for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("e5ce");var o=n("828b"),l=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=l.exports},e5ce:function(t,e,n){"use strict";var r=n("2a04"),i=n.n(r);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/scrollText-create-component',
    {
        'components/scrollText-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("b66a"))
        })
    },
    [['components/scrollText-create-component']]
]);
