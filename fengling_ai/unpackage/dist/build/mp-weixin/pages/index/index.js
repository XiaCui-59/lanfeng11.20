(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0049":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return o}));var o={uNavbar:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(t.bind(null,"d30e"))},uPopup:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(t.bind(null,"d908"))},uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,"f11d"))},uCellGroup:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-cell-group/u-cell-group")]).then(t.bind(null,"a059"))},uCell:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-cell/u-cell")]).then(t.bind(null,"7d47"))}},i=function(){var e=this.$createElement;this._self._c},s=[]},"00f6":function(e,n,t){"use strict";(function(e,n){var o=t("47a9");t("e58b");o(t("3240"));var i=o(t("e7ad"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t("3223")["default"],t("df3c")["createPage"])},"01f2":function(e,n,t){"use strict";var o=t("dc82"),i=t.n(o);i.a},ab29:function(e,n,t){"use strict";(function(e,o){var i=t("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=i(t("7eb4")),a=i(t("ee10")),r=i(t("7ca3")),c=i(t("26a2")),u=i(t("4d31")),l=t("8f59");function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,r.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=getApp(),g={data:function(){return{showFlMask:!1,canPlay:!0,greetingObj:{logo:f.globalData.baseImageUrl+"/worker/new/index_ai_logo.png",title:"您好呀！我是您的职位推荐官风铃。",content:"您可以将您想找的工作、期望的薪资、福利待遇的要求等等发送给我，我会为您推荐合适的职位，快来与我互动吧。"},showLoading:!0,showSend:!1,newUser:!1,ifSingle:1154==f.globalData.scene,menuButtonInfo:f.globalData.menuButtonInfo,maskStartPoint:{},maskEndPoint:{},showMenu:!1,manager:f.globalData.manager,menuList:[{text:"钱包余额",url:"/pages/balance/balance",icon:"rmb-circle-fill",value:"0"},{text:"会员权益",url:"/pages/vip/vip",icon:"gift-fill",value:"成为会员"},{text:"邀请有礼",url:"/pages/invite/invite",icon:"share-fill",value:""},{text:"关于灵动优聘",url:"/pages/about/about",icon:"info-circle-fill",value:""},{text:"联系客服",url:"",icon:"info-circle-fill",value:""}],imgUrl:f.globalData.baseImageUrl,list4:[{name:"风铃"},{name:"对话"},{name:"频道"}],currentTabIndex:0,statusBarHeight:f.globalData.statusBarHeight,botSafe:0,userInfo:{is_vip:!1},showVoice:!0,inputing:!1,voicePermisson:!1,showLogin:!1,shareId:"",params:null,openid:"",startPoint:null,cancelRecord:!1,touchStartTime:"",touchEndTime:"",secondTimer:null,num:1,hold:"h1",question:"",qaList:[],currentQalength:0,curRespone:{content:"",origin:"ai",msg_type:"text",card:null},responseStr:"",responCount:0,prinTimer:null,historyList:[],historyId:0,loadAllHistory:!1,inputHeight:0,chatScrollHeight:0,btnInfo:null,bodyStartPoint:null,bodyEndPoint:null,moveDirection:"",printTimer1:null,printTimer2:null,printTimer3:null,hasChannel:!1,scrollStr:"",jobId:"",sureStatus:!1,greetingReady:!1,action:""}},computed:d({},(0,l.mapState)(["answering","connected","connecting","canSend","inChannel","answerContinue","channelQaLen","channelId","channelQaList","location","token","inCall","responEnd","aiReady"])),onLoad:function(n){var t=this;return(0,a.default)(s.default.mark((function o(){var i,r,l,h;return s.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i=t,t.resetCity(),e.getNetworkType({success:function(n){"none"==n.networkType.toString()&&e.showModal({title:"当前无网络，请检查您的网络设置，并重启小程序。",showCancel:!1})},fail:function(e){console.log("网络判断error",e)}}),e.onNetworkStatusChange(function(){var n=(0,a.default)(s.default.mark((function n(t){return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("网络变化了：",t.isConnected,t.networkType),"none"==t.networkType.toString()?e.showModal({title:"当前无网络，请检查您的网络设置，并重启小程序。",showCancel:!1}):(e.reLaunch({url:"/pages/index/index"}),e.offNetworkStatusChange());case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),o.next=6,c.default.getElementInfo(".input_btn_wrap");case 6:return t.btnInfo=o.sent,t.btnInfo&&(t.botSafe=f.globalData.systemHeight-t.btnInfo.top,t.chatScrollHeight=t.btnInfo.top-t.statusBarHeight-84),console.log("params",n),l=n.scene?decodeURIComponent(n.scene).split("=")[1]:"",t.shareId=n.share_id?n.share_id:l||"",t.params=n,o.next=14,t.getPosition();case 14:return r=o.sent,t.setLocation(r),h=e.getStorageSync("token")?e.getStorageSync("token"):"",t.header={"content-type":"application/json","app-id":u.default.urls.appid,"open-id":e.getStorageSync("openid")?e.getStorageSync("openid"):"","ad-project-id":i.params.project?i.params.project:"","click-id":i.params.gdt_vid?i.params.gdt_vid:"","ad-platform":i.params.ad_platform?i.params.ad_platform:"","ad-sub-platform":i.params.platform?i.params.platform:"",address:encodeURIComponent(JSON.stringify(i.location)),Authorization:"bearer "+h},o.next=20,t.getOpenid();case 20:t.openid=o.sent,t.getSetting();case 22:case"end":return o.stop()}}),o)})))()},onUnload:function(){console.log("执行了onUnload"),this.canPlay=!1,this.close()},onShow:function(){var n=this;return(0,a.default)(s.default.mark((function t(){var o;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=n,n.closeAnswering(),n.initRecord(),n.answerContinue||n.answering||(n.qaList=[],n.resetData()),e.onKeyboardHeightChange(n.listenKeyBoard),n.isLogin()&&n.getInfo(),1==n.currentTabIndex&&n.$nextTick((function(){o.$refs.chatRef.toScroll()}));case 7:case"end":return t.stop()}}),t)})))()},onHide:function(){f.globalData.Audio.stop(),f.globalData.Audio.offPlay(),f.globalData.Audio.offPause(),f.globalData.Audio.offStop(),f.globalData.Audio.offEnded(),this.canPlay=!1,e.offKeyboardHeightChange(this.listenKeyBoard)},mounted:function(){},components:{login:function(){Promise.all([t.e("common/vendor"),t.e("components/login")]).then(function(){return resolve(t("b921"))}.bind(null,t)).catch(t.oe)},welcome:function(){Promise.all([t.e("common/vendor"),t.e("components/welcome")]).then(function(){return resolve(t("3c13"))}.bind(null,t)).catch(t.oe)},chat:function(){t.e("components/chat").then(function(){return resolve(t("90a4"))}.bind(null,t)).catch(t.oe)},channel:function(){t.e("components/channel").then(function(){return resolve(t("6ebc"))}.bind(null,t)).catch(t.oe)},flMask:function(){t.e("components/flmask").then(function(){return resolve(t("ddf8"))}.bind(null,t)).catch(t.oe)}},watch:{greetingReady:function(n){n&&(e.hideLoading(),this.closeAnswerContinue())},currentTabIndex:function(e,n){var t=this;0!=e&&(this.canPlay=!1),0==e&&(this.canPlay=!0),this.isLogin()?1==e&&this.$nextTick((function(){t.$refs.chatRef.toScroll()})):this.showLogin=!0},question:function(e){this.showSend=!!e}},methods:d(d({},(0,l.mapMutations)(["openAnswering","closeAnswering","setConnected","unConnected","setConnecting","unConnecting","openCansend","closeCansend","notChannel","isChannel","addChannelQaList","openAnswerContinue","closeAnswerContinue","updateChannelQaList","setChannelId","setLocation","setToken","clearChannelQaList","notInCall","setCallContent","setRespEnd","notRespEnd","setInterviewCard","setIncallEnroll","setIncallJobId","resetIncallEnroll","closeInterviewCard","setAiReady","resetAiReady","resetCity","setChannelInterviewCard","closeChannelInterviewCard","setJobName","resetJobName","setJobId","resetJobId","setHangUpFirst"])),{},{onInput:function(e){this.question=e.target.value},openCanPlay:function(){this.canPlay=!0},toCall:function(n){if(this.aiReady){if(this.answering||this.answerContinue)return e.showToast({title:"回答中，请稍后",icon:"error",duration:2e3}),void(this.currentTabIndex=1);var t="",o="";n&&(t=n.type,o=n.job_id);var i=this;this.isLogin()?e.authorize({scope:"scope.record",success:function(n){i.voicePermisson=!0,i.canPlay=!1,e.navigateTo({url:"/pages/phone_call/phone_call?status="+t+"&job_id="+o})},fail:function(n){i.voicePermisson=!1,i.$refs.myModal.showModal({title:"请先开启语音输入权限。",showCancel:!1,confirmText:"好的",success:function(n){"confirm"==n&&e.openSetting({success:function(n){n.authSetting["scope.record"]&&(i.voicePermisson=!0,i.canPlay=!1,e.navigateTo({url:"/pages/phone_call/phone_call?status="+t+"&job_id="+o}))},fail:function(e){i.voicePermisson=!1}})}})},complete:function(){e.setStorageSync("voiceAuth",!0)}}):this.showLogin=!0}else e.showToast({title:"连接中，请稍后",icon:"error",duration:2e3})},listenKeyBoard:function(e){0==e.height?(this.inputHeight=0,this.chatScrollHeight=this.btnInfo.top-this.statusBarHeight-84):this.chatScrollHeight=f.globalData.systemHeight-this.statusBarHeight-44-e.height-this.btnInfo.height-10},handleChannelStatus:function(e){this.hasChannel=e},clickFengling:function(){this.showFlMask=!0},closeFengling:function(){this.showFlMask=!1},getPosition:function(){return new Promise((function(n,t){var o="https://apis.map.qq.com/ws/location/v1/ip?key="+f.globalData.qqMapKey;e.request({url:o,method:"GET",success:function(e){n(e.data.result)},fail:function(e){t(e)}})}))},getOpenid:function(){var n=this;return new Promise((function(t){e.login({success:function(o){if("login:ok"==o.errMsg){var i={code:o.code,share_id:n.shareId};"/auth/worker/wechat/mini/openid",n.$request("/auth/worker/wechat/mini/openid",i,"POST",n.header).then((function(o){0==o.code&&(e.setStorage({key:"openid",data:o.data.open_id}),n.header["open-id"]=o.data.open_id,n.header["Authorization"]="bearer "+o.data.token,n.setToken(o.data.token),n.creatConnect(n.header),t(o.data.open_id))}))}},fail:function(e){}})}))},printResponse:function(){var e=this,n=0;this.prinTimer=setInterval((function(){var t=e.responseStr.length;n<t?(e.curRespone.content+=e.responseStr[n],e.inChannel?e.updateChannelQaList(e.curRespone):e.inCall||e.$set(e.qaList,e.currentQalength,e.curRespone),n++):e.responEnd&&(e.curRespone.card&&(e.curRespone.card.showCard=!0),clearInterval(e.prinTimer),e.openCansend(),e.resetData(),e.closeAnswerContinue())}),30)},getMayAsk:function(){var e=this,n={job_channel_id:this.channelId},t=0,o={};console.log("执行了mayask"),this.$aiRequest("/api/chat/suggested-questions",n,"POST").then((function(n){e.channelId?(t=e.channelQaList.length-1,o=e.channelQaList[t],o.may_ask=n.questions,e.updateChannelQaList(o)):(t=e.qaList.length-1,o=e.qaList[t],o.may_ask=n.questions,e.$set(e.qaList,t,o))}))},setGreetStatus:function(){this.greetingReady=!0},handleConnectErr:function(){var e=this.qaList.length;if(e>0&&"customer"==this.qaList[e-1].origin){this.closeAnswering(),this.openCansend(),this.closeAnswerContinue(),this.resetData(),clearInterval(this.prinTimer);this.qaList.push({content:"抱歉！刚才打了个盹儿，没理解到您的意思，请重新发送一下您的问题。",printStr:"",msg_type:"text",origin:"ai",jobs:[],may_ask:[]})}},getHistory:function(){var e=this;return console.log("获取历史记录"),new Promise((function(n){var t="/api/chat/histories?last_message_id="+e.historyId+"&job_channel_id=";e.$aiRequest(t,"","GET",e.header).then((function(t){if(0==t.code){0==t.data.length?e.newUser=!0:e.newUser=!1;var o=t.data.reverse(),i=t.data.length;i>0&&(e.historyId=t.data[0].id),o=e.handleList(o),n(o)}}))}))},getMoreHistory:function(){var n=this,t=this;if(this.loadAllHistory)e.showToast({title:"已加载全部",icon:"none",duration:2e3}),setTimeout((function(){t.$refs.chatRef.refreshRestore()}),500);else{if(!this.historyId){if(this.answerContinue||this.answering)return void this.$refs.chatRef.refreshRestore();this.qaList=[]}e.showLoading();var o="/api/chat/histories?last_message_id="+this.historyId+"&job_channel_id=";this.$aiRequest(o).then((function(t){if(0==t.code){var o=t.data.length;if(e.hideLoading(),n.$refs.chatRef.refreshRestore(),o>0){var i=t.data.reverse(),s=n.handleList(i);n.historyList=s.concat(n.historyList),n.scrollStr="his"+t.data[o-1].id,n.historyId=t.data[0].id}else n.loadAllHistory=!0}else n.$refs.chatRef.refreshRestore()}))}},handleList:function(e){for(var n=e.length,t=0;t<n;t++)"voice"==e[t].msg_type&&(e[t].voice.anmitionPlay=!1,e[t].showTranlate=!1,e[t].showTranIcon=!1);return e},bodyTouchStart:function(e){this.bodyStartPoint=e.touches[0]},bodyTouchEnd:function(e){"left"==this.moveDirection?this.currentTabIndex<this.list4.length-1&&this.currentTabIndex++:"right"==this.moveDirection&&this.currentTabIndex>0&&this.currentTabIndex--,this.moveDirection=""},bodyTouchMove:function(e){this.bodyStartPoint.clientX-e.touches[e.touches.length-1].clientX>160&&(this.moveDirection="left"),e.touches[e.touches.length-1].clientX-this.bodyStartPoint.clientX>160&&(this.moveDirection="right")},navigate:function(n){e.navigateTo({url:n+"?shareid="+this.shareId})},sendBtnMsg:function(n){var t=this;return(0,a.default)(s.default.mark((function o(){var i,a;return s.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(t.isLogin()){o.next=3;break}return t.showLogin=!0,o.abrupt("return");case 3:if(t.aiReady){o.next=6;break}return e.showToast({title:"连接中，请稍后",icon:"error",duration:2e3}),o.abrupt("return");case 6:if(!t.answerContinue){o.next=10;break}return e.showToast({title:"回答中，请稍后",icon:"error",duration:2e3}),t.currentTabIndex=1,o.abrupt("return");case 10:t.jobId=n.job_id,t.action=n.action,"job"==n.type?(i=[],i.push("请介绍一下"+n.msg),i.push("我对"+n.msg+"感兴趣，可以介绍一下吗？"),i.push(n.msg+"的工作内容是什么呢？福利待遇怎么样？"),i.push(n.msg+"这个工作看着还不错，请为我介绍下吧"),i.push(n.msg+"这个工作的详细信息可以说一下吗？"),a=Math.floor(Math.random()*i.length),t.question=i[a]):t.question=n.msg,t.currentTabIndex=1,t.sendQuestion();case 15:case"end":return o.stop()}}),o)})))()},handleBtnMsg:function(e){var n=this;return new Promise((function(t){n.$request("/ai/refine/question",{text:e},"POST").then((function(e){0==e.code?t(e.data):t("error")}))}))},inputBindFocus:function(e){this.isLogin()?(this.currentTabIndex=1,e.detail.height&&(this.inputHeight=e.detail.height)):this.showLogin=!0},initRecord:function(){var n=this;this.manager.onStart((function(e){n.inputing=!0})),this.manager.onStop((function(t){var o=n;n.inputing=!1,clearInterval(o.secondTimer),n.touchEndTime-n.touchStartTime>1e3?n.handleRecorder(t):e.showToast({title:"长按时间过短",icon:"error"})})),this.manager.onError((function(e){var t=n;n.inputing=!1,clearInterval(t.secondTimer)}))},handleRecorder:function(n){var t=n.tempFilePath,i=n.duration;this.inputing=!1;var s=this;i<600?e.showToast({title:"说话时间过短",icon:"error",duration:2e3}):this.cancelRecord?this.cancelRecord=!1:o.getFileSystemManager().readFile({filePath:t,success:function(n){var o=n.data,a=new Uint8Array(o),r=(new Date).getTime(),c=e.getStorageSync("openid")+r,u=s.stringToUint8Array(c+"@@@@@@"+s.jobId+"@@@@@@"),l=u.length+a.length,h=new Uint8Array(l),d=0;h.set(u,d),d+=u.length,h.set(a,d);var f={id:c,content:"",origin:"customer",msg_type:"voice",voice:{media:{key:"",url:t},second:i/1e3,anmitionPlay:!1},showTranIcon:!1,showTranlate:!1,showTransing:!1};s.send(h.buffer,f,"voice")},fail:function(e){console.error("读取文件失败：",e)}})},stringToUint8Array:function(e){for(var n=unescape(encodeURIComponent(e)),t=n.length,o=new Uint8Array(t),i=0;i<t;i++)o[i]=n.charCodeAt(i);return o},send:function(n,t,o){var i=this;this.aiReady?this.answering||this.answerContinue?this.$refs.myModal.showModal({title:"目前有正在回复的对话，请稍后重试",showCancel:!1,confirmText:"好的"}):this.canSend&&(0==this.historyList.length&&e.showLoading(),this.question="",this.notChannel(),this.notInCall(),f.globalData.socketTask.send({data:"voice"==o?n:JSON.stringify({content:n,job_channel_id:"",job_id:i.jobId,action_type:i.action}),success:function(o){i.jobId="",i.action="",i.sureStatus=!1,i.closeInterviewCard(),i.closeChannelInterviewCard(),i.$set(i,"question",""),e.hideLoading(),"ping"!=n&&(i.cancelRecord||(i.openAnswering(),t.printStr="",i.$set(i.qaList,i.qaList.length,t),i.currentQalength=i.qaList.length,i.num++,i.hold="h"+i.num,i.closeCansend()))},fail:function(e){i.jobId=""}})):e.showToast({title:"连接中，请稍后",icon:"error",duration:2e3})},creatConnect:function(e){var n=this;return(0,a.default)(s.default.mark((function t(){var o;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n,!f.globalData.socketTask){t.next=5;break}return t.next=4,n.close();case 4:return t.abrupt("return",!1);case 5:if(console.log("connected：",n.connected),!n.connected&&!n.connecting){t.next=8;break}return t.abrupt("return",!1);case 8:return n.setConnecting(),t.next=11,n.connectWebsocket(e);case 11:o=t.sent,"connectSocket:ok"==o.errMsg&&n.initWebsocket();case 13:case"end":return t.stop()}}),t)})))()},connectWebsocket:function(n){return new Promise((function(t){f.globalData.socketTask=e.connectSocket({url:f.globalData.wssUrl,header:n,method:"GET",success:function(e){t(e)},fail:function(e){this.$refs.myModal.showModal({title:e.errMsg,showCancel:!1})}})}))},initWebsocket:function(){var e=this,n=this;f.globalData.socketTask.onOpen((function(n){e.unConnecting(),e.setConnected(),e.closeAnswering(),e.closeAnswerContinue(),e.openCansend(),e.setAiReady(),console.log("已成功建立链接onOpen",n)})),f.globalData.socketTask.onError((function(t){f.globalData.socketTask=null,clearInterval(n.timer),e.unConnected(),e.unConnecting(),e.resetAiReady(),(e.answering||e.answerContinue)&&e.handleConnectErr(),setTimeout((function(){n.creatConnect(n.header)}),2e3)})),f.globalData.socketTask.onMessage((function(e){n.openAnswerContinue(),n.closeAnswering();var t=JSON.parse(e.data);if(n.inCall)"audio_call_start_interview"==t.type?(n.setIncallJobId(t.job_id?t.job_id:""),n.setIncallEnroll()):n.resetIncallEnroll(),"audio_call_end"==t.type&&n.setHangUpFirst(),"[DONE]"!=t.message?n.setCallContent(t.message):(n.setRespEnd(),n.openCansend(),n.resetData(),n.closeAnswerContinue());else{if("audio_call_start_interview"==t.type){var o={card_type:"audio_call_start_interview",job_name:t.job_name,job_id:t.job_id,showCard:!1};n.curRespone.card=JSON.parse(JSON.stringify(o)),n.sureStatus=!0,n.setJobName(t.job_name),n.setJobId(t.job_id)}else n.sureStatus=!1,n.resetJobId(),n.resetJobName();"[DONE]"!=t.message?(n.responCount++,n.responseStr+=t.message,1==n.responCount&&n.printResponse()):(n.setRespEnd(),n.sureStatus||n.getMayAsk())}})),f.globalData.socketTask.onClose((function(t){console.log("onClose",t),f.globalData.socketTask=null,e.unConnected(),e.unConnecting(),e.resetAiReady(),clearInterval(n.timer),setTimeout((function(){n.creatConnect(n.header)}),2e3),(e.answering||e.answerContinue)&&e.handleConnectErr()}))},doSend:function(e,n){e.ctrlKey&&13===e.keyCode?this.question+="\n":void 0!==e&&(this.sendQuestion(),e.preventDefault())},sendQuestion:function(){if(this.question){this.inputHeight=0;var e={content:this.question,origin:"customer",msg_type:"text"};this.send(this.question,e,"")}},handleTouchMove:function(e){if(this.canSend){var n=e.touches[e.touches.length-1].clientY<this.btnInfo.top;this.cancelRecord=!!n}},noInput:function(){var e=this;this.timer=setInterval((function(){e.send("ping","","")}),1e4)},resetData:function(){this.cancelRecord=!1,this.curRespone={content:"",origin:"ai",msg_type:"text",card:null},this.responCount=0,this.responseStr="",this.notRespEnd()},close:function(){return new Promise((function(e){f.globalData.socketTask&&f.globalData.socketTask.close()}))},startRecord:function(n){if(this.isLogin())if(this.aiReady)if(this.canSend){var t=this;this.currentTabIndex=1,this.canSend&&this.showVoice&&(t.voicePermisson?(t.touchStartTime=n.timeStamp,t.$refs.chatRef.stopCurAudio(),e.vibrateShort({success:function(){}}),t.startPoint=n.touches[0],t.cancelRecord=!1,t.manager.start({duration:6e4,lang:"zh_CN"})):e.authorize({scope:"scope.record",success:function(e){t.voicePermisson=!0},fail:function(e){t.voicePermisson=!1}}))}else e.showToast({title:"正在回答请稍后",icon:"error",duration:2e3});else e.showToast({title:"连接中，请稍后",icon:"error",duration:2e3});else this.showLogin=!0},getSetting:function(){var n=this;e.getSetting({success:function(e){e.authSetting["scope.record"]?n.voicePermisson=!0:n.voicePermisson=!1},fail:function(e){}})},stopRecord:function(e){if(this.canSend){var n=this;this.touchEndTime=e.timeStamp,this.inputing=!1,this.touchEndTime-this.touchStartTime>1e3?this.manager.stop():setTimeout((function(){n.manager.stop()}),1e3)}},cancelVoice:function(e){this.inputing=!1,this.manager.stop()},handleClick:function(e){"联系客服"==e.name&&o.openCustomerServiceChat({extInfo:{url:"https://work.weixin.qq.com/kfid/kfc01b1c6e379607409"},corpId:"wwe3ced2e65390ad79",success:function(e){}})},changeTab:function(e){this.isLogin()?this.currentTabIndex=e:this.showLogin=!0},openSetting:function(){if(this.isLogin()){var n=this,t=e.getStorageSync("voiceAuth");t?e.openSetting({success:function(e){e.authSetting["scope.record"]&&(n.voicePermisson=!0)},fail:function(e){n.voicePermisson=!1}}):e.authorize({scope:"scope.record",success:function(e){n.voicePermisson=!0},fail:function(e){n.voicePermisson=!1},complete:function(){e.setStorageSync("voiceAuth",!0)}})}else this.showLogin=!0},changeChatMethod:function(){this.isLogin()?this.showVoice=!this.showVoice:this.showLogin=!0},maskStart:function(e){this.maskStartPoint=e.touches[0]},maskEnd:function(e){},handleMaskMove:function(e){this.maskStartPoint.clientX-e.touches[e.touches.length-1].clientX>20&&this.closeMenu()},closeMenu:function(){this.showMenu=!1},openMenu:function(){this.isLogin()?this.showMenu=!0:this.showLogin=!0},logout:function(){var n=this;this.$refs.myModal.showModal({title:"确认退出登录？",success:function(t){"confirm"==t&&n.$request("/worker/logout",{},"POST").then((function(t){0==t.code&&(n.showMenu=!1,e.removeStorageSync("token"),e.removeStorageSync("userInfo"),e.showToast({title:"已退出登录",icon:"none",duration:2e3}))}))}})},closeLogin:function(){this.showLogin=!1},getInfo:function(){var n=this;return(0,a.default)(s.default.mark((function t(){return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.$request("/worker/profile").then((function(t){0==t.code&&(e.setStorageSync("userInfo",JSON.stringify(t.data)),n.userInfo=t.data,n.menuList[0].value=t.data.balance.total_amount)})),n.historyId=0,t.next=4,n.getHistory();case 4:n.historyList=t.sent,console.log("historyList：",n.historyList);case 6:case"end":return t.stop()}}),t)})))()}})};n.default=g}).call(this,t("df3c")["default"],t("3223")["default"])},dc82:function(e,n,t){},e7ad:function(e,n,t){"use strict";t.r(n);var o=t("0049"),i=t("ece0");for(var s in i)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(s);t("01f2");var a=t("828b"),r=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=r.exports},ece0:function(e,n,t){"use strict";t.r(n);var o=t("ab29"),i=t.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(s);n["default"]=i.a}},[["00f6","common/runtime","common/vendor"]]]);