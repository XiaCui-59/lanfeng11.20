(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/channel_chat/channel_chat"],{"1a2d":function(e,n,t){"use strict";(function(e,o){var i=t("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("7eb4")),s=i(t("ee10")),r=i(t("7ca3")),c=i(t("d883")),l=(i(t("8d57")),t("8f59"));function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=getApp(),f={data:function(){return{showFlMask:!1,greetingObj:{logo:"",title:"",content:""},showSend:!1,newUser:!1,ifSingle:1154==d.globalData.scene,menuButtonInfo:d.globalData.menuButtonInfo,manager:d.globalData.manager,imgUrl:d.globalData.baseImageUrl,statusBarHeight:d.globalData.statusBarHeight,botSafe:0,userInfo:{is_vip:!1},showVoice:!0,inputing:!1,voicePermisson:!1,showLogin:!1,shareId:"",params:null,openid:"",startPoint:null,cancelRecord:!1,touchStartTime:"",touchEndTime:"",secondTimer:null,num:1,hold:"h1",placeHolder:"您想找什么工作,都可以问我",question:"",historyList:[],historyId:0,loadAllHistory:!1,inputHeight:0,chatScrollHeight:0,btnInfo:null,channel_info:{logo:{key:"",url:""},name:"",id:""},scrollStr:"",jobId:""}},computed:h({},(0,l.mapState)(["answering","connected","connecting","canSend","inChannel","channelQaList","answerContinue"])),onLoad:function(n){var t=this;return(0,s.default)(a.default.mark((function o(){var i;return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return e.setNavigationBarColor({frontColor:"#000000",backgroundColor:"transparent"}),t.channel_info=JSON.parse(decodeURIComponent(n.channel_info)),o.next=4,t.getHistory();case 4:return t.historyList=o.sent,t.$refs.chat.toScroll(),t.closeAnswering(),t.openCansend(),t.clearChannelQaList(),t.closeInterviewCard(),t.closeChannelInterviewCard(),o.next=13,c.default.getElementInfo(".input_btn_wrap");case 13:t.btnInfo=o.sent,t.btnInfo&&(t.botSafe=d.globalData.systemHeight-t.btnInfo.top,t.chatScrollHeight=t.btnInfo.top-t.statusBarHeight-84),console.log("params",n),i=n.scene?decodeURIComponent(n.scene).split("=")[1]:"",t.setChannelId(t.channel_info.id),t.greetingObj.logo=t.channel_info.logo.url,t.greetingObj.title=t.channel_info.name,t.greetingObj.content=t.channel_info.content,console.log(t.greetingObj),t.shareId=n.share_id?n.share_id:i||"",t.params=n,t,t.handleGreeting(),t.getSetting(),t.getInfo();case 28:case"end":return o.stop()}}),o)})))()},onShow:function(){var n=this;return(0,s.default)(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.initRecord(),e.onKeyboardHeightChange(n.listenKeyBoard);case 2:case"end":return t.stop()}}),t)})))()},onHide:function(){e.offKeyboardHeightChange(this.listenKeyBoard)},mounted:function(){},components:{login:function(){t.e("components/login").then(function(){return resolve(t("8772"))}.bind(null,t)).catch(t.oe)},chat:function(){t.e("components/chat").then(function(){return resolve(t("4ce2"))}.bind(null,t)).catch(t.oe)},flMask:function(){t.e("components/flmask").then(function(){return resolve(t("cda1"))}.bind(null,t)).catch(t.oe)}},watch:{question:function(e){this.showSend=!!e}},methods:h(h({},(0,l.mapMutations)(["openAnswering","closeAnswering","openCansend","closeCansend","isChannel","clearChannelQaList","addChannelQaList","calcChannelQaLen","setChannelId","notInCall","closeInterviewCard","closeChannelInterviewCard"])),{},{handleGreeting:function(){var e=this;return(0,s.default)(a.default.mark((function n(){var t,o;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t="欢迎进入"+e.channel_info.name+"频道，"+e.channel_info.content,o={content:t,origin:"ai",msg_type:"text"},e.addChannelQaList(o);case 3:case"end":return n.stop()}}),n)})))()},listenKeyBoard:function(e){0==e.height?(this.inputHeight=0,this.chatScrollHeight=this.btnInfo.top-this.statusBarHeight-84):this.chatScrollHeight=d.globalData.systemHeight-this.statusBarHeight-44-e.height-this.btnInfo.height-10},back:function(){e.navigateBack()},toCall:function(n){var t="",o="";n&&(t=n.type,o=n.job_id);var i=this;e.authorize({scope:"scope.record",success:function(n){i.voicePermisson=!0,e.navigateTo({url:"/pages/phone_call/phone_call?status="+t+"&job_id="+o})},fail:function(n){i.voicePermisson=!1,console.log(n,"err"),i.$refs.myModal.showModal({title:"请先开启语音输入权限。",showCancel:!1,confirmText:"好的",success:function(n){"confirm"==n&&e.openSetting({success:function(n){n.authSetting["scope.record"]&&(i.voicePermisson=!0,e.navigateTo({url:"/pages/phone_call/phone_call?status="+t+"&job_id="+o}))},fail:function(e){console.log(e,"openerr"),i.voicePermisson=!1}})}})},complete:function(){e.setStorageSync("voiceAuth",!0)}})},clickFengling:function(){this.$refs.myModal.showModal({title:"即将上线，敬请期待~",showCancel:!1,confirmText:"好的"})},closeFengling:function(){this.showFlMask=!1},getHistory:function(){e.showLoading();var n=this;return new Promise((function(t){var o="/api/chat/histories?last_message_id="+n.historyId+"&job_channel_id="+n.channel_info.id;n.$aiRequest(o).then((function(o){if(0==o.code){e.hideLoading(),0==o.data.length?n.newUser=!0:n.newUser=!1;var i=o.data.reverse(),a=o.data.length;a>0&&(n.historyId=o.data[0].id),i=n.handleList(i),t(i)}}))}))},getInfo:function(){var n=this;this.$request("/worker/profile").then((function(t){0==t.code&&(e.hideLoading(),e.setStorageSync("userInfo",JSON.stringify(t.data)),n.userInfo=t.data)}))},getMoreHistory:function(){var n=this;if(0==this.historyList.length&&this.clearChannelQaList(),this.loadAllHistory)e.showToast({title:"已加载全部",icon:"none",duration:2e3});else{e.showLoading();var t="/api/chat/histories?last_message_id="+this.historyId+"&job_channel_id="+this.channel_info.id;this.$aiRequest(t).then((function(t){if(0==t.code){var o=t.data.length;if(e.hideLoading(),o>0){var i=t.data.reverse(),a=n.handleList(i);n.historyList=a.concat(n.historyList),n.scrollStr="his"+t.data[o-1].id,n.historyId=t.data[0].id}else n.loadAllHistory=!0}}))}},handleList:function(e){for(var n=e.length,t=0;t<n;t++)"voice"==e[t].msg_type&&(e[t].voice.anmitionPlay=!1,e[t].showTranlate=!1,e[t].showTranIcon=!1);return console.log("arr:",e),e},navigate:function(n){e.navigateTo({url:n+"?shareid="+this.shareId})},sendBtnMsg:function(n){var t=this;return(0,s.default)(a.default.mark((function o(){var i,s;return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(!t.answerContinue){o.next=3;break}return e.showToast({title:"回答中，请稍后",icon:"error",duration:2e3}),o.abrupt("return");case 3:t.jobId=n.job_id,"job"==n.type?(i=[],i.push("请介绍一下"+n.msg),i.push("我对"+n.msg+"感兴趣，可以介绍一下吗？"),i.push(n.msg+"的工作内容是什么呢？福利待遇怎么样？"),i.push(n.msg+"这个工作看着还不错，请为我介绍下吧"),i.push(n.msg+"这个工作的详细信息可以说一下吗？"),s=Math.floor(Math.random()*i.length),t.question=i[s]):t.question=n.msg,t.currentTabIndex=1,t.sendQuestion();case 7:case"end":return o.stop()}}),o)})))()},handleBtnMsg:function(e){var n=this;return new Promise((function(t){n.$request("/ai/refine/question",{text:e},"POST").then((function(e){0==e.code?t(e.data):t("error")}))}))},inputBindFocus:function(e){this.question="",e.detail.height&&(this.inputHeight=e.detail.height)},initRecord:function(){var n=this;this.manager.onStart((function(e){console.log("录音开始"),n.inputing=!0})),this.manager.onStop((function(t){var o=n;console.log("录音结束"),n.inputing=!1,clearInterval(o.secondTimer),console.log("时间间隔:",n.touchEndTime-n.touchStartTime),n.touchEndTime-n.touchStartTime>1e3?n.handleRecorder(t):e.showToast({title:"长按时间过短",icon:"error"})})),this.manager.onError((function(e){var t=n;n.inputing=!1,clearInterval(t.secondTimer),console.log("channel录音出错：",e.errMsg)}))},handleRecorder:function(n){var t=n.tempFilePath,i=n.duration,a=this;console.log("tempFilePath",t),console.log("duration",i),i<600?e.showToast({title:"说话时间过短",icon:"error",duration:2e3}):(this.inputing=!1,this.cancelRecord?this.cancelRecord=!1:o.getFileSystemManager().readFile({filePath:t,success:function(n){var o=n.data,s=new Uint8Array(o),r=(new Date).getTime(),c=e.getStorageSync("openid")+r,l=a.stringToUint8Array(c+"@@@"+a.channel_info.id+"@@@"+a.jobId+"@@@@@@");console.log(l.length,s.length);var u=l.length+s.length,h=new Uint8Array(u),d=0;h.set(l,d),d+=l.length,h.set(s,d);var f={id:c,content:"",origin:"customer",msg_type:"voice",voice:{media:{key:"",url:t},second:i/1e3,anmitionPlay:!1},showTranIcon:!1,showTranlate:!1,showTransing:!1};a.send(h.buffer,f,"voice")},fail:function(e){console.error("读取文件失败：",e)}}))},stringToUint8Array:function(e){for(var n=unescape(encodeURIComponent(e)),t=n.length,o=new Uint8Array(t),i=0;i<t;i++)o[i]=n.charCodeAt(i);return o},send:function(e,n,t){var o=this;console.log("cha answerContinue:",this.answerContinue),this.answering||this.answerContinue?this.$refs.myModal.showModal({title:"目前有正在回复的对话，请稍后重试",showCancel:!1,confirmText:"好的"}):this.canSend&&(this.isChannel(),this.notInCall(),d.globalData.socketTask.send({data:"voice"==t?e:JSON.stringify({content:e,job_channel_id:o.channel_info.id,job_id:o.jobId}),success:function(t){o.jobId="",o.closeInterviewCard(),o.closeChannelInterviewCard(),console.log(e,"data"),"ping"!=e&&(o.cancelRecord||(o.openAnswering(),o.addChannelQaList(n),o.calcChannelQaLen(),o.num++,o.hold="h"+o.num,o.question="",o.closeCansend()))},fail:function(e){o.jobId="",console.log(e)}}))},doSend:function(e,n){e.ctrlKey&&13===e.keyCode?this.question+="\n":void 0!==e&&(this.sendQuestion(),e.preventDefault())},sendQuestion:function(){if(this.question){this.inputHeight=0;var e={content:this.question,origin:"customer",msg_type:"text"};this.send(this.question,e,"")}},handleTouchMove:function(e){if(this.canSend){var n=e.touches[e.touches.length-1].clientY<this.btnInfo.top;this.cancelRecord=!!n}},noInput:function(){var e=this;this.timer=setInterval((function(){e.send("ping","","")}),1e4)},resetData:function(){this.cancelRecord=!1},formatResultStr:function(e){e&&this.speeking(e)},speeking:function(e){console.log(e,"播报内容"),plugin.textToSpeech({lang:"zh_CN",content:e,success:function(e){0==e.retcode?(console.log("result",e.result),o.playBackgroundAudio({dataUrl:e.filename,title:""})):console.warn("翻译失败",e)},fail:function(e){console.log("网络失败",e)}})},close:function(){d.globalData.socketTask&&d.globalData.socketTask.close&&d.globalData.socketTask.close()},startRecord:function(n){var t=this;this.canSend?this.showVoice&&(t.voicePermisson?(t.touchStartTime=n.timeStamp,t.$refs.chat.stopCurAudio(),e.vibrateShort({success:function(){console.log("success")}}),t.startPoint=n.touches[0],t.cancelRecord=!1,t.manager.start({duration:6e4,lang:"zh_CN"})):e.authorize({scope:"scope.record",success:function(e){console.log(e,"success"),t.voicePermisson=!0},fail:function(e){t.voicePermisson=!1,console.log(e,"err")}})):e.showToast({title:"正在回答请稍后",icon:"error",duration:2e3})},getSetting:function(){var n=this;e.getSetting({success:function(e){e.authSetting["scope.record"]?(console.log("用户已授权语音权限"),n.voicePermisson=!0):(console.log("用户尚未授权语音权限"),n.voicePermisson=!1)},fail:function(e){console.log("获取设置失败",e)}})},stopRecord:function(e){if(this.canSend){var n=this;this.touchEndTime=e.timeStamp,this.inputing=!1,this.touchEndTime-this.touchStartTime>1e3?this.manager.stop():setTimeout((function(){n.manager.stop()}),1e3)}},cancelVoice:function(e){console.log("touch取消"),this.showInputing=!1,this.manager.stop()},handleClick:function(e){console.log(e)},openSetting:function(){var n=this,t=e.getStorageSync("voiceAuth");t?e.openSetting({success:function(e){console.log(e.authSetting,"res.authSetting"),e.authSetting["scope.record"]&&(n.voicePermisson=!0)},fail:function(e){console.log(e,"openerr"),n.voicePermisson=!1}}):e.authorize({scope:"scope.record",success:function(e){console.log(e,"success"),n.voicePermisson=!0},fail:function(e){n.voicePermisson=!1,console.log(e,"err")},complete:function(){e.setStorageSync("voiceAuth",!0)}})},changeChatMethod:function(){this.showVoice=!this.showVoice}})};n.default=f}).call(this,t("df3c")["default"],t("3223")["default"])},"4c52":function(e,n,t){"use strict";(function(e,n){var o=t("47a9");t("b833");o(t("3240"));var i=o(t("b797"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t("3223")["default"],t("df3c")["createPage"])},"533a":function(e,n,t){},b278:function(e,n,t){"use strict";t.r(n);var o=t("1a2d"),i=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=i.a},b797:function(e,n,t){"use strict";t.r(n);var o=t("d07f"),i=t("b278");for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("ba05");var s=t("828b"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=r.exports},ba05:function(e,n,t){"use strict";var o=t("533a"),i=t.n(o);i.a},d07f:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var o={uNavbar:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(t.bind(null,"ffa3"))},uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,"4a72"))}},i=function(){var e=this.$createElement,n=(this._self._c,this.ifSingle?null:!this.inputHeight&&!this.newUser||this.newUser&&this.channelQaList.length>0&&!this.inputHeight);this.$mp.data=Object.assign({},{$root:{g0:n}})},a=[]}},[["4c52","common/runtime","common/vendor"]]]);