(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/welcome"],{2259:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.period.filter((function(e){return e.value==t.currentPlay.worker_salary_type}))),a=n[0].text?t.period.filter((function(e){return e.value==t.currentPlay.worker_salary_type})):null,r=t.period.filter((function(e){return e.value==t.currentPlay.worker_salary_type}));t.$mp.data=Object.assign({},{$root:{g0:n,g1:a,g2:r}})},r=[]},"241e":function(t,e,n){"use strict";n.r(e);var a=n("f9ea"),r=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=r.a},"3c13":function(t,e,n){"use strict";n.r(e);var a=n("2259"),r=n("241e");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("b477");var i=n("828b"),s=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=s.exports},b477:function(t,e,n){"use strict";var a=n("cf39"),r=n.n(a);r.a},cf39:function(t,e,n){},f9ea:function(t,e,n){"use strict";(function(t){var a=n("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("7eb4")),o=a(n("ee10")),i=a(n("7ca3")),s=a(n("a290")),c=(a(n("26a2")),n("8f59"));function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var u=getApp(),d={name:"welcome",props:["top","bottom","canPlay"],data:function(){return{showSureJob:!1,scrollTop:0,period:s.default.periodList,current:0,dots:2,imgUrl:u.globalData.baseImageUrl,recommendList:[],currentPlay:{project_id:"",content:"",may_ask:[],project_name:"",voice:"",worker_salary_max:"",worker_salary_min:"",worker_salary_type:""},canPlayWelcome:!0,currentPlayIndex:0,muted:!1,systemHeight:u.globalData.systemHeight,animationActive:!0,animationTimer:null,welcomeVoiceList:[u.globalData.baseImageUrl+"/worker/wel01.mp3",u.globalData.baseImageUrl+"/worker/wel02.mp3",u.globalData.baseImageUrl+"/worker/wel03.mp3"],lastClickTime:0,requestTimer:null,reConnectCount:0,mayAskCount:0,bannerImageInfo:null,bannerHeight:0,showUserStep:!1,currentStep:1,firstEnd:!1,isWelcome:!0}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,c.mapState)(["city","aiReady"])),created:function(){var e=this;u.globalData.Audio.onPlay((function(t){e.isWelcome||e.textAnimation()})),u.globalData.Audio.onStop((function(t){})),u.globalData.Audio.onEnded((function(t){e.canPlay&&(e.firstEnd?e.playNext():e.playFirst())}));var n=t.getStorageSync("readsteps")?t.getStorageSync("readsteps"):"";n||(this.showUserStep=!0)},watch:{animationActive:function(t){t||this.stopInterval()},canPlay:function(t){t?this.stopInterval():(u.globalData.Audio.pause(),this.muted=!0)},city:function(t){console.log("newCity:",t),this.getRecommend()},currentPlayIndex:function(t){this.getMayAsk()}},methods:{toChat:function(t){var e="surejob"==t?"text_want_application":"findjob"==t?"text_look_for_job":"text_interview",n="surejob"==t?this.currentPlay.project_id:"",a="surejob"==t?"我对"+this.currentPlay.project_name+"（职位ID："+this.currentPlay.project_id+"）很感兴趣，能为我介绍一下吗？":"findjob"==t?"我正在找工作，能帮我推荐一些合适的职位吗？":"我可以开始面试了，什么时候安排？",r={msg:a,type:t,job_id:n,action:e};this.$emit("sendMsg",r)},toCall:function(t){var e={type:t,job_id:"surejob"==t?this.currentPlay.project_id:""};this.$emit("tocall",e)},nextStep:function(){this.currentStep<6?this.currentStep++:(this.showUserStep=!1,t.setStorageSync("readsteps",1),this.playWelcome())},changeNext:function(){var t=this.recommendList.length;if(this.currentPlayIndex==t-1){this.$emit("sendMsg",{msg:"我正在找工作，能帮我推荐一些合适的职位吗？",type:"",job_id:""})}else u.globalData.Audio.stop(),this.playNext()},playFirst:function(){this.firstEnd=!0,this.isWelcome=!1,this.canPlay&&!this.muted&&this.playAudio()},playNext:function(){var t=this,e=this.recommendList.length;this.currentPlayIndex<e-1?(this.currentPlayIndex++,this.currentPlay=this.recommendList[this.currentPlayIndex]):(this.currentPlayIndex=0,this.currentPlay=this.recommendList[this.currentPlayIndex],this.currentPlayIndex++),setTimeout((function(){t.canPlay&&!t.muted&&t.playAudio()}),50)},stopInterval:function(){this.animationTimer&&(clearInterval(this.animationTimer),this.animationTimer=null,this.scrollTop=0)},handleAudio:function(){this.$emit("openCanPlay"),u.globalData.Audio.paused?this.playAudio():this.pauseAudio()},playAudio:function(){this.canPlay&&(u.globalData.Audio.src=this.currentPlay.voice,u.globalData.Audio.play(),this.muted=!1)},playWelcome:function(){var t=Math.floor(Math.random()*this.welcomeVoiceList.length);u.globalData.Audio.src=this.welcomeVoiceList[t],u.globalData.Audio.play(),this.muted=!1},stopAudio:function(){u.globalData.Audio.src="",u.globalData.Audio.stop()},pauseAudio:function(){u.globalData.Audio.pause(),this.muted=!0},getMayAsk:function(){var t=this;return(0,o.default)(r.default.mark((function e(){var n,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="/homepage/may_ask/"+t.currentPlay.project_id,e.prev=1,e.next=4,t.$request(n);case 4:a=e.sent,t.currentPlay.may_ask=a.data.list.may_ask,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),t.mayAskCount<5?(t.getMayAsk(),t.mayAskCount++):t.mayAskCount=0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},getRecommend:function(){var e=this;return(0,o.default)(r.default.mark((function n(){var a,o,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e,o={city:e.city},n.prev=2,n.next=5,e.$request("/homepage",o,"POST");case 5:i=n.sent,e.$emit("setGreetStatus"),i.data.list.length>0?(e.currentPlay=i.data.list[0],e.recommendList=i.data.list,e.showSureJob=!0,e.getMayAsk(),e.showUserStep||e.playWelcome()):e.$refs.myModal.showModal({title:"暂无推荐职位信息",showCancel:!1}),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](2),console.error("An error occurred:",n.t0),a.reConnectCount<10?(a.reConnectCount++,a.getRecommend()):t.showModal({title:"网络超时，请重新进入小程序。",showCancel:!1,success:function(e){e.confirm&&(a.reConnectCount=0,t.reLaunch({url:"/pages/index/index"}))}});case 14:case"end":return n.stop()}}),n,null,[[2,10]])})))()},sendMsg:function(t,e){var n={msg:this.currentPlay.project_name+"（职位id："+this.currentPlay.project_id+"）"+t,type:e,job_id:this.currentPlay.project_id};this.$emit("sendMsg",n)},textAnimation:function(){var t=this;t.scrollTop=0,this.animationTimer||(this.animationTimer=setInterval((function(){t.scrollTop+=2}),300))},touchStart:function(){this.animationActive=!1},getPosition:function(){return new Promise((function(e,n){var a="https://apis.map.qq.com/ws/location/v1/ip?key="+u.globalData.qqMapKey;t.request({url:a,method:"GET",success:function(t){e(t.data.result.ad_info.city)},fail:function(t){console.log(t),n(t)}})}))},scrollLower:function(){this.animationActive&&(this.scrollTop=0)}}};e.default=d}).call(this,n("df3c")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/welcome-create-component',
    {
        'components/welcome-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("3c13"))
        })
    },
    [['components/welcome-create-component']]
]);
