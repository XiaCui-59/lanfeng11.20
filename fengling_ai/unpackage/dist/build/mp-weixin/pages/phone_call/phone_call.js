(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/phone_call/phone_call"],{"18e9":function(e,t,n){"use strict";var a=n("ac2c"),r=n.n(a);r.a},3586:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},r=[]},"515e":function(e,t,n){"use strict";n.r(t);var a=n("3586"),r=n("a3f1");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("18e9");var o=n("828b"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=s.exports},a3f1:function(e,t,n){"use strict";n.r(t);var a=n("ab52"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},ab52:function(e,t,n){"use strict";(function(e,a){var r=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("7eb4")),o=r(n("7ca3")),s=r(n("ee10")),l=r(n("4d31")),c=n("8f59");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=l.default.urls.voiceUrl,h=getApp(),g={data:function(){return{imgUrl:h.globalData.baseImageUrl,inputStatus:!1,hasVoice:!1,aiSpeeking:!1,aiThrinking:!0,audioCtx:e.createWebAudioContext(),lowVoiceCount:0,highVoiceCount:0,currentPlayIndex:0,index:0,resultArrayBuffer:[],arrayBufferLength:0,result:[],longTimeNoInput:!1,action:"",welcomeVoice:[h.globalData.baseImageUrl+"/worker/call_wel01.mp3",h.globalData.baseImageUrl+"/worker/call_wel02.mp3"],receiveEnd:!1,currentTransIndex:0,closeStatus:!1,errorVoice:h.globalData.baseImageUrl+"/worker/error.mp3?time="+(new Date).getTime(),requestTask:null,receiveCount:0,transTimer:null,playTimer:null,isWelcome:!0,status:"",job_id:"",errorTimer:null,getResponeTime:0}},components:{scrollText:function(){n.e("components/scrollText").then(function(){return resolve(n("b66a"))}.bind(null,n)).catch(n.oe)}},onLoad:function(e){var t=this;return(0,s.default)(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.setInCall(),h.globalData.Audio.onPlay((function(e){t.aiSpeeking=!0,t.aiThrinking=!1,t.inputStatus=!1,t.hasVoice=!1})),h.globalData.Audio.onStop((function(e){})),h.globalData.Audio.onEnded((function(e){t.isWelcome=!1,t.startRecord()})),t.status=e.status?e.status:"",t.job_id=e.job_id?e.job_id:"",n.t0=t.status,n.next="interview"===n.t0?9:"findjob"===n.t0?13:"surejob"===n.t0?16:20;break;case 9:return t.action="audio_interview",t.isWelcome=!1,t.handleAutoAction(),n.abrupt("break",22);case 13:return t.action="audio_look_for_job",t.userEnter(),n.abrupt("break",22);case 16:return t.action="audio_want_application",t.isWelcome=!1,t.handleAutoAction(),n.abrupt("break",22);case 20:return t.userEnter(),n.abrupt("break",22);case 22:case"end":return n.stop()}}),n)})))()},onShow:function(){this.initRecord()},onHide:function(){h.globalData.Audio.pause(),h.globalData.Audio.offPlay(),h.globalData.Audio.offPause(),h.globalData.Audio.offStop(),h.globalData.Audio.offEnded(),h.globalData.manager.stop(),h.globalData.Audio.stop(),this.closeStatus||this.close()},watch:{lowVoiceCount:function(e){this.highVoiceCount>2?e>10&&h.globalData.manager.stop():e>20&&h.globalData.manager.stop()},highVoiceCount:function(e){e>2?"interview"==this.status?this.action="audio_interview":"findjob"==this.status?this.action="audio_look_for_job":"surejob"==this.status?this.action="audio_want_application":this.action="":this.action="audio_call_user_long_time_without_talking"},inputStatus:function(e){e&&this.resetData()},resultArrayBuffer:function(e){this.arrayBufferLength=e.length},result:function(e){}},computed:d({},(0,c.mapState)(["answering","connected","connecting","canSend","inChannel","answerContinue","channelQaLen","channelId","channelQaList","location","token","callContent","incallEnroll","incallJobId"])),methods:d(d({},(0,c.mapMutations)(["setInCall","clearCallContent","setAiSpeekingEnd","resetAiSpeekingEnd","resetIncallEnroll","resetIncallJobId"])),{},{handleAutoAction:function(){var e=this.job_id?this.job_id:this.incallJobId;console.log("incallJobId：",this.incallJobId,e);var t=(new Date).getTime(),n=a.getStorageSync("openid")+t,r=n+"@@@"+this.channelId+"@@@"+e+"@@@"+this.action+"@@@",i=this.concatBuffer(r,"");this.sendMessage(i)},close:function(){this.closeStatus=!0,this.clearCallContent(),this.resetIncallEnroll(),this.resetIncallJobId(),this.audioCtx&&(this.audioCtx.close(),this.audioCtx=null),h.globalData.Audio&&h.globalData.Audio.stop(),h.globalData.manager&&h.globalData.manager.stop(),this.requestTask&&(this.requestTask.offChunkReceived(),this.requestTask.abort()),this.transTimer&&clearInterval(this.transTimer),this.playTimer&&clearInterval(this.playTimer);var e=getCurrentPages(),t=e[e.length-2];t&&t.$vm.changeTab&&t.$vm.changeTab(1),setTimeout((function(){a.navigateBack()}),500)},resetData:function(){this.currentPlayIndex=0,this.highVoiceCount=0,this.longTimeNoInput=!1,this.lowVoiceCount=0,this.result=[],this.receiveEnd=!1,this.resultArrayBuffer=[],this.arrayBufferLength=0,this.currentTransIndex=0,this.receiveCount=0},startRecord:function(){this.closeStatus||h.globalData.manager.start({format:"PCM",sampleRate:8e3,numberOfChannels:2,encodeBitRate:16e3,frameSize:4,duration:6e5})},initRecord:function(){var e=this;h.globalData.manager.onStart((function(t){e.playTipsVoice(),e.inputStatus=!0,e.aiSpeeking=!1,e.aiThrinking=!1,e.hasVoice=!0})),h.globalData.manager.onStop((function(t){var n=e;n.inputStatus=!1,n.hasVoice=!1,n.aiThrinking=!0,n.aiSpeeking=!1,n.closeStatus||e.handleRecorder(t)})),h.globalData.manager.onError((function(e){})),h.globalData.manager.onFrameRecorded((function(t){var n=e,a=t.frameBuffer,r=new Int16Array(a),i=r.length,o=0;if(r.forEach((function(e){o+=e*e})),!(o<1e4)){var s=o/i,l=parseInt(10*Math.log10(s));l<60?(n.hasVoice=!1,n.lowVoiceCount++):(n.hasVoice=!0,n.lowVoiceCount=0,n.highVoiceCount++)}}))},userEnter:function(){var e=Math.floor(Math.random()*this.welcomeVoice.length);h.globalData.Audio.src=this.welcomeVoice[e],h.globalData.Audio.play()},playError:function(){this.closeStatus||(h.globalData.Audio.src=this.errorVoice,h.globalData.Audio.play(),this.clearCallContent(),this.aiSpeeking=!0,this.aiThrinking=!1,this.inputStatus=!1,this.hasVoice=!1)},handleRecorder:function(t){var n=t.tempFilePath,r=(t.duration,this);e.getFileSystemManager().readFile({filePath:n,success:function(e){var t=r.job_id?r.job_id:r.incallJobId,n=(new Date).getTime(),i=a.getStorageSync("openid")+n,o=i+"@@@"+r.channelId+"@@@"+t+"@@@"+r.action+"@@@",s=r.concatBuffer(o,e.data);r.sendMessage(s)},fail:function(e){console.error("读取文件失败：",e),r.playError()}})},stringToUint8Array:function(e){for(var t=unescape(encodeURIComponent(e)),n=t.length,a=new Uint8Array(n),r=0;r<n;r++)a[r]=t.charCodeAt(r);return a},playTipsVoice:function(){var e=this.audioCtx.createOscillator(),t=this.audioCtx.createGain();e.connect(t),t.connect(this.audioCtx.destination),e.type="sine",e.frequency.value=300.5,t.gain.setValueAtTime(2,this.audioCtx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+.5),e.start(),e.stop(this.audioCtx.currentTime+.5)},concatBuffer:function(e,t){var n=new Uint8Array(t),a=this.stringToUint8Array(e),r=a.length+n.length,i=new Uint8Array(r),o=0;return i.set(a,o),o+=a.length,i.set(n,o),i.buffer},sendMessage:function(t){console.log("用户发送了语音");var n=this;this.requestTask=e.request({url:f,enableChunked:!0,header:{"content-type":"application/json","app-id":l.default.urls.appid,"open-id":a.getStorageSync("openid")?a.getStorageSync("openid"):"",address:encodeURIComponent(JSON.stringify(n.location)),Authorization:"bearer "+a.getStorageSync("token"),"Content-Type":"application/octet-stream"},responseType:"arraybuffer",method:"POST",data:t,success:function(e){console.log("发送成功")},fail:function(e){console.error("request fail",e),n.requestTask.offChunkReceived(),h.globalData.Audio.stop(),setTimeout((function(){console.log("request请求失败或超时"),n.playError()}),500)}}),this.errorTimer=setInterval((function(){n.getResponeTime<15?n.receiveCount>0?(clearInterval(n.errorTimer),h.globalData.Audio.stop()):n.getResponeTime++:(n.getResponeTime=0,clearInterval(n.errorTimer))}),1e3),this.requestTask.onChunkReceived((function(e){n.receiveCount++,1==n.receiveCount&&(console.log("接收到第一条数据"),n.transFirst(e.data)),n.resultArrayBuffer.push(e.data);var t=new Uint8Array(e.data),a=new Uint8Array([91,68,79,78,69,93]),r=n.containsDoneMarker(t,a);r&&(console.log("检测到 [DONE] 标记"),n.receiveEnd=!0,n.requestTask.offChunkReceived())}))},transFirst:function(e){var t=this;t.audioCtx.decodeAudioData(e,(function(e){t.currentTransIndex++,1==t.currentTransIndex&&(t.resetAiSpeekingEnd(),t.playFirst(e),t.isWelcome=!1,t.playTipsVoice()),t.result.push(e),t.startTrans()}),(function(e){console.error("decodeAudioData fail",e),t.currentTransIndex++,t.startTrans()}))},startTrans:function(){var e=this;if(e.currentTransIndex<e.arrayBufferLength){var t=e.resultArrayBuffer[e.currentTransIndex];e.audioCtx.decodeAudioData(t,(function(t){e.currentTransIndex++,e.result.push(t),e.startTrans()}),(function(t){console.error("decodeAudioData fail",t),e.currentTransIndex++,e.startTrans()}))}else e.receiveEnd||(e.transTimer=setInterval((function(){e.currentTransIndex<e.arrayBufferLength&&(e.startTrans(),clearInterval(e.transTimer))}),500))},containsDoneMarker:function(e,t){var n=t.length;if(e.length<n)return!1;for(var a=0;a<n;a++)if(e[e.length-n+a]!==t[a])return!1;return!0},playFirst:function(e){var t=this;t.aiSpeeking=!0,t.aiThrinking=!1,t.inputStatus=!1,t.hasVoice=!1;var n=this.audioCtx.createBufferSource();n.connect(this.audioCtx.destination),n.buffer=e,n.start(),n.onended=function(){t.currentPlayIndex++,t.play()}},play:function(){var e=this,t=this.result.length;if(e.currentPlayIndex!=t){e.aiSpeeking=!0,e.aiThrinking=!1,e.inputStatus=!1,e.hasVoice=!1;var n=this.audioCtx.createBufferSource();n.connect(this.audioCtx.destination),n.buffer=this.result[this.currentPlayIndex],n.start(),n.onended=function(){e.currentPlayIndex++,e.play()}}else t==e.arrayBufferLength&&e.receiveEnd?(e.resetData(),e.setAiSpeekingEnd(),e.clearCallContent(),console.log("语音对话中报名了吗：",e.incallEnroll),e.incallEnroll?(e.action="audio_interview",e.status="interview",e.aiSpeeking=!1,e.aiThrinking=!0,e.handleAutoAction()):e.startRecord()):e.playTimer=setInterval((function(){e.currentPlayIndex<e.result.length&&(e.play(),clearInterval(e.playTimer))}),500)}})};t.default=g}).call(this,n("3223")["default"],n("df3c")["default"])},ac2c:function(e,t,n){},d46b:function(e,t,n){"use strict";(function(e,t){var a=n("47a9");n("e58b");a(n("3240"));var r=a(n("515e"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(r.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])}},[["d46b","common/runtime","common/vendor"]]]);