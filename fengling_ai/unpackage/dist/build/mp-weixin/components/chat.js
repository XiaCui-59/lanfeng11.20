(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/chat"],{"84b7":function(t,n,i){"use strict";var e=i("a9fe"),o=i.n(e);o.a},"90a4":function(t,n,i){"use strict";i.r(n);var e=i("b2f1"),o=i("9f89");for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(r);i("84b7");var s=i("828b"),c=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);n["default"]=c.exports},"9f89":function(t,n,i){"use strict";i.r(n);var e=i("fb3f"),o=i.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(r);n["default"]=o.a},a9fe:function(t,n,i){},b2f1:function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return r})),i.d(n,"a",(function(){return e}));var e={markdownRender:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/markdown-render/components/markdown-render/markdown-render")]).then(i.bind(null,"c8f9"))}},o=function(){var t=this,n=t.$createElement,i=(t._self._c,0==t.historyList.length&&t.qaList.length<2),e=t.historyList.length>0||t.qaList.length>1,o=t.__map(t.historyList,(function(n,i){var e=t.__get_orig(n),o="voice"==n.msg_type?Math.ceil(20*n.voice.second):null,r="voice"==n.msg_type?Math.ceil(n.voice.second):null;return{$orig:e,g2:o,g3:r}})),r=t.historyList.length,s=t.qaList.length,c=0!=s?t.__map(t.qaList,(function(n,i){var e=t.__get_orig(n),o="text"==n.msg_type&&"customer"!=n.origin?i==t.qaList.length-1&&t.answerContinue:null,r="voice"==n.msg_type?Math.ceil(20*n.voice.second):null,s="voice"==n.msg_type?Math.ceil(n.voice.second):null,c=n.may_ask?n.may_ask.length>0&&i==t.qaList.length-1&&!t.answerContinue:null;return{$orig:e,g6:o,g7:r,g8:s,g9:c}})):null,a=0==t.historyList.length&&t.qaList.length<2;t._isMounted||(t.e0=function(n,i){var e=arguments[arguments.length-1].currentTarget.dataset,o=e.eventParams||e["event-params"];i=o.askItem;return n.stopPropagation(),function(){return t.sendMsg(i,"tip")}()}),t.$mp.data=Object.assign({},{$root:{g0:i,g1:e,l0:o,g4:r,g5:s,l1:c,g10:a}})},r=[]},fb3f:function(t,n,i){"use strict";(function(t,e){var o=i("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(i("7eb4")),s=o(i("ee10")),c=o(i("7ca3")),a=i("8f59");function l(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,e)}return i}var u=getApp(),h={name:"welcome",props:["top","bottom","historyList","qaList","scrollHeight","answering","greetingObj","answerContinue","scrollStr"],data:function(){return{imgUrl:u.globalData.baseImageUrl,tipList:[{text:"我想找个长白班的工作。"},{text:"请问哪些工作是提供吃住的？"},{text:"有没有适合我的工作，轻松一点的。"}],historyId:0,loadAllHistory:!1,scrollView:"fenge_line",Audio:u.globalData.Audio,currentPlayType:"",currentPlayIndex:0,currentContHeight:0,freshing:!1,trigger:!1}},computed:function(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){(0,c.default)(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}({},(0,a.mapState)(["showInterviewCard","inChannel","channelId","showChannelInterviewCard","sureJobName","sureJobId"])),created:function(){var t=this;return(0,s.default)(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.Audio.onStop((function(n){t.closeAnmition()})),t.Audio.onEnded((function(n){t.closeAnmition()}));case 2:case"end":return n.stop()}}),n)})))()},watch:{qaList:{handler:function(t,n){this.getElementHeight(),console.log("chat监听到qaList：",t),t[t.length-1].origin},deep:!0},currentContHeight:function(t){var n=this;console.log("currentContHeight改变了"),this.answerContinue&&setTimeout((function(){n.toScroll()}),1e3)},scrollHeight:function(t){console.log("新窗口高度：",t),this.toScroll()},answerContinue:function(t){console.log("answerContinue改变了"),t||this.toScroll()},answering:function(t){console.log("answering改变了"),t&&this.toScroll()},scrollStr:function(t){console.log("scrollStr改变了");var n=this;n.scrollView="",this.$nextTick((function(){n.scrollView=t}))}},components:{},methods:{getElementHeight:function(){var n=this,i=t.createSelectorQuery().in(this),e="#cont"+(this.qaList.length-1);i.select(e).boundingClientRect((function(t){t&&(n.currentContHeight=t.height)})).exec()},refreshRestore:function(){this.freshing=!1,this.trigger=!1,console.log("freshing/trigger：",this.freshing,this.trigger)},getMoreHistory:function(){this.freshing||(this.freshing=!0,this.trigger=!0,this.$emit("moreHis"))},sendMsg:function(t,n){var i={msg:t,type:n};console.log("chat obj",i),this.$emit("sendMsg",i)},handleAudio:function(t,n,i){this.currentPlayType=t,this.currentPlayIndex=i,this.Audio.paused?this.playAudio(n):this.stopAudio(n)},playAudio:function(t){var n=this;this.Audio.src=t.voice.media.url,this.Audio.id=t.id,this.Audio.play(),"his"==this.currentPlayType?(this.historyList.forEach((function(t,i){"voice"==t.msg_type&&(i==n.currentPlayIndex?n.historyList[n.currentPlayIndex].voice.anmitionPlay=!0:n.historyList[i].voice.anmitionPlay=!1)})),this.qaList.forEach((function(t,i){"voice"==t.msg_type&&(n.qaList[i].voice.anmitionPlay=!1)}))):(this.qaList.forEach((function(t,i){"voice"==t.msg_type&&(i==n.currentPlayIndex?n.qaList[n.currentPlayIndex].voice.anmitionPlay=!0:n.qaList[i].voice.anmitionPlay=!1)})),this.historyList.forEach((function(t,i){"voice"==t.msg_type&&(n.historyList[i].voice.anmitionPlay=!1)})))},stopAudio:function(t){var n=this;"his"==this.currentPlayType?(this.historyList[this.currentPlayIndex].voice.anmitionPlay=!1,this.qaList.forEach((function(t,i){"voice"==t.msg_type&&(n.qaList[i].voice.anmitionPlay=!1)}))):(this.qaList[this.currentPlayIndex].voice.anmitionPlay=!1,this.historyList.forEach((function(t,i){"voice"==t.msg_type&&(n.historyList[i].voice.anmitionPlay=!1)}))),this.Audio.src="",this.Audio.stop()},stopCurAudio:function(){this.Audio.src="",this.Audio.stop()},closeAnmition:function(){var t=this,n=this.Audio.id;"his"==this.currentPlayType?this.historyList.forEach((function(i,e){"voice"==i.msg_type&&i.id==n&&(t.historyList[e].voice.anmitionPlay=!1)})):this.qaList.forEach((function(i,e){"voice"==i.msg_type&&i.id==n&&(t.qaList[e].voice.anmitionPlay=!1)})),this.currentPlayType="",this.currentPlayIndex=0},formatResultStr:function(t){t&&this.speeking(t)},toCall:function(){var t={type:"interview",job_id:this.sureJobId};this.$emit("tocall",t)},speeking:function(t){console.log(t,"播报内容"),plugin.textToSpeech({lang:"zh_CN",content:t,success:function(t){0==t.retcode?(console.log("result",t.result),e.playBackgroundAudio({dataUrl:t.filename,title:""})):console.warn("翻译失败",t)},fail:function(t){console.log("网络失败",t)}})},showTrans:function(t,n){t.showTranlate||("his"==n?this.historyList.forEach((function(n,i){n.id==t.id&&(n.showTranIcon=!0)})):this.qaList.forEach((function(n,i){n.id==t.id&&(n.showTranIcon=!0)})))},startTrans:function(n,i){var e=this;if(n.showTranIcon=!1,"his"==i)this.historyList.forEach((function(t,i){t.id==n.id&&(t.showTranlate=!0)}));else if(!n.showTranlate){e.qaList.forEach((function(t,i){t.id==n.id&&(t.showTransing=!0)}));var o="/api/chat/voice/"+n.id+"/recognize/result",r=setInterval((function(){e.$aiRequest(o).then((function(i){console.log(i,"查询结果"),0==i.code?i.data.content&&(n.content=i.data.content,e.qaList.forEach((function(t,i){t.id==n.id&&(t.showTranlate=!0,t.showTransing=!1)})),clearInterval(r)):(clearInterval(r),t.hideLoading())}))}),1e3)}},toScroll:function(){var n=this,i=this;i.scrollView="",this.$nextTick((function(){n.answering?(console.log("正在回答"),i.scrollView="answering"):0==i.qaList.length?i.scrollView="fenge_line":(i.scrollView="continue",t.hideLoading())}))}}};n.default=h}).call(this,i("df3c")["default"],i("3223")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/chat-create-component',
    {
        'components/chat-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("90a4"))
        })
    },
    [['components/chat-create-component']]
]);
