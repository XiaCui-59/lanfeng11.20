(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ai_chat"],{"2cdd":function(e,t,n){"use strict";n.r(t);var o=n("f5cf"),i=n("e663");for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("af02");var r=n("828b"),a=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=a.exports},af02:function(e,t,n){"use strict";var o=n("b62f"),i=n.n(o);i.a},b62f:function(e,t,n){},e02e:function(e,t,n){"use strict";(function(e,o){var i=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n("7eb4")),r=i(n("ee10")),a=i(n("6ed3")),c=i(n("0f9a")),l=requirePlugin("WechatSI"),h=l.getRecordRecognitionManager(),u=getApp(),d={data:function(){return{showLogin:!1,historyId:0,loadAllHistory:!1,showReAuth:!1,imgUrl:u.globalData.baseImageUrl,scrollView:"",gender:[{value:"male",text:"男"},{value:"female",text:"女"}],currentGender:0,age:"",ques:"",hold:"h1",qaList:[],socketOpen:!1,socketMsgQueue:[],answerMsg:"",canSend:!0,placeHolder:"请输入您的问题",qaListLen:0,historyList:[],appInfo:{},scroll:0,chatShareId:0,timeShareId:0,header:{},sid:0,connected:!1,connecting:!1,socketTask:!1,num:1,curStrIndex:0,curText:"",marginTop:u.globalData.marginTop,tabMargin:u.globalData.tabMargin,scrollHeight:0,scrollHeight2:0,subTabHeight:u.globalData.subTabHeight,showVoice:!1,showRecord:!0,showChat:!1,showFullScreen:!1,showWanner:!1,cityData:[],city1:"",city2:"",city3:"",cityArr:[],typeTags:[],seleTypeIds:[],selectType:[],open_id:"",getPhoneData:{},showInputing:!1,recordContent:"",enableSpeeking:!1,timer:null,currentSiging:{},showSetting:!1}},created:function(e){var t=this;this.scrollHeight=.8*u.globalData.systemHeight-this.tabMargin-2*this.subTabHeight,this.scrollHeight2=.8*u.globalData.systemHeight-1*this.subTabHeight,this.getCitys(),setTimeout((function(){t.showChat||t.showAichat()}),1e4)},methods:{getSetting:function(){var t=this;e.getSetting({success:function(e){if(console.log(e.authSetting,"getSetting"),e.authSetting["scope.userLocation"])t.getLocation();else{t.showReAuth=!0;t.send({content:"",type:"hot_job",source:"user"})}}})},closeLogin:function(){this.showLogin=!1},openSetting:function(){var t=this;e.openSetting({success:function(e){console.log(e.authSetting,"res.authSetting"),e.authSetting["scope.record"]&&(t.showSetting=!1),e.authSetting["scope.userLocation"]&&(t.showReAuth=!1,t.getLocation())},fail:function(e){console.log(e,"openerr")},complete:function(){this.showReAuth=!1}})},initRecord:function(){var t=this;h.onStart=function(e){t.recordContent="",t.showInputing=!0},h.onRecognize=function(e){t.recordContent+=e.result},h.onStop=function(e){console.log(e.result),t.recordContent+=e.result,t.showInputing=!1;var n={content:t.recordContent,source:"user",type:"str"};t.send(n)},h.onError=function(t){console.log(t,"err");var n="";switch(t.retcode){case-30003:n="未获取到录音数据，请尽可能提高音量。";break;case-30006:n="录音识别超时，请重试。";break;case-30008:n="网络链接失败，请重试。";break;case-30004:n="未识别到结果，请尽可能提高音量。";break;case-40001:n="达到接口调用频率限制，请联系管理员。";break;default:n="录音功能出错，请联系管理员。";break}e.showModal({title:n,showCancel:!1})}},startRecord:function(){this.showInputing=!0,h.start({duration:6e4,lang:"zh_CN"})},stopRecord:function(){this.showInputing=!1,h.stop()},reverseGeocodingClick:function(e,t){var n=new c.default({key:u.globalData.qqMapKey}),o=this;n.reverseGeocoder({location:{latitude:e,longitude:t},success:function(e){console.log(e,"addrRes");var t=e.result.address_component.city,n={content:t,source:"user",type:"hot_job"};o.send(n)},fail:function(e){console.log(e)},complete:function(e){console.log(e)}})},getOpenId:function(){var t=this;return new Promise((function(n){e.login({success:function(o){if(console.log(o,"dyres"),"login:ok"==o.errMsg){var i={code:o.code};"/auth/worker/wechat/mini/openid",t.$request("/auth/worker/wechat/mini/openid",i,"POST").then((function(t){0==t.code&&(e.setStorage({key:"openid",data:t.data.open_id}),n(t.data.open_id))}))}},fail:function(e){console.log(e,"接口调用失败")}})}))},getphonenumber:function(t){var n=this;return(0,r.default)(s.default.mark((function o(){var i;return s.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i=n,o.next=3,n.getOpenId();case 3:n.getPhoneData.open_id=o.sent,"getPhoneNumber:ok"==t.detail.errMsg?("",n.getPhoneData.code=t.detail.code,"/auth/worker/wechat/mini/login",i.$request("/auth/worker/wechat/mini/login",n.getPhoneData,"POST").then((function(e){if(0==e.code){var t={content:e.data.mobile,source:"user",type:"bind_mobile"};i.send(t)}}))):e.showModal({title:t.detail.errMsg});case 5:case"end":return o.stop()}}),o)})))()},chooseWork:function(e,t){console.log(e,t)},changeScreen:function(){this.showFullScreen=!this.showFullScreen,this.showFullScreen?this.scrollHeight=u.globalData.systemHeight-2*this.subTabHeight-2*this.tabMargin-this.marginTop:this.scrollHeight=.8*u.globalData.systemHeight-this.tabMargin-2*this.subTabHeight},showAichat:function(){var t=this;return(0,r.default)(s.default.mark((function n(){var o;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.historyId=0,t.historyList=[],t.loadAllHistory=!1,t.qaList=[],o=t,e.authorize({scope:"scope.record",success:function(e){console.log(e,"success")},fail:function(e){o.showSetting=!0,console.log(e,"err")}}),e.authorize({scope:"scope.userLocation",success:function(e){console.log(e,"success")},fail:function(e){o.getSetting()}}),n.next=9,t.getHistory();case 9:t.historyList=n.sent,t.toScroll(),t.creatConnect(),t.initRecord(),t.showChat=!0;case 14:case"end":return n.stop()}}),n)})))()},openSeepking:function(){this.enableSpeeking=!this.enableSpeeking},closeAichat:function(){this.showChat=!1,this.historyId=0,this.enableSpeeking=!1,o.stopBackgroundAudio(),this.close()},toInput:function(){this.showRecord=!1},toVoice:function(){this.showRecord=!0},doSend:function(e,t){e.ctrlKey&&13===e.keyCode?this.ques+="\n":void 0!==e&&(this.sendQuestion(),e.preventDefault())},getLocation:function(){var t=this;e.getLocation({success:function(e){t.reverseGeocodingClick(e.latitude,e.longitude)},fail:function(e){console.error("定位失败",e)}})},legal:function(){this.age&&(Number(this.age)||e.showModal({title:"输入不合法，请输入大于18的数字。",showCancel:!1}))},getHistory:function(){var e=this;return new Promise((function(t){var n="/ai/chat/record?id="+e.historyId;e.$request(n).then((function(n){if(0==n.code){var o=n.data.reverse(),i=n.data.length;i>0&&(e.historyId=n.data[0].id),t(o)}}))}))},getMoreHistory:function(){var t=this;if(this.loadAllHistory)e.showToast({title:"已加载全部",icon:"none",duration:2e3});else{var n="/ai/chat/record?id="+this.historyId;this.$request(n).then((function(e){if(0==e.code){t.historyList=e.data.reverse().concat(t.historyList);var n=e.data.length;n>0?t.historyId=e.data[0].id:t.loadAllHistory=!0}}))}},toScroll:function(){var e=this;this.$nextTick((function(){if(console.log(123),0==e.qaList.length){var t=e.historyList.length-1;t>=0&&(e.scrollView="his"+t)}else{var n=e.qaList.length-1;e.scrollView="qa"+n}console.log(e.scrollView,"scrollView")}))},getDetail:function(e){var t={content:e,source:"user",type:"get_job_detail"};this.send(t)},sendQuestion:function(){if(this.curStrIndex=0,this.ques){if(this.canSend){this.canSend=!1;var t={content:this.ques,type:"str",source:"user"};this.send(t)}}else e.showToast({icon:"none",title:"请输入您的问题"})},genderChange:function(e){for(var t=0;t<this.gender.length;t++)this.gender[t].value==e.detail.value&&(this.currentGender=t)},onchange1:function(t){t.detail.value.length&&this.hasSimpleCity(t.detail.value[1].value)?e.showToast({title:"该城市已选择",icon:"error",duration:2e3}):this.cityArr[0]=t.detail.value},onchange2:function(t){t.detail.value.length&&this.hasSimpleCity(t.detail.value[1].value)?e.showToast({title:"该城市已选择",icon:"error",duration:2e3}):this.cityArr[1]=t.detail.value},onchange3:function(t){t.detail.value.length&&this.hasSimpleCity(t.detail.value[1].value)?e.showToast({title:"该城市已选择",icon:"error",duration:2e3}):this.cityArr[2]=t.detail.value},sureCity:function(){for(var e=this.cityArr.filter((function(e){return e.length>0})),t="",n=e.length,o=0;o<n;o++)t+=e[o][1].text+"、";return t=t.slice(0,t.length-1),t},hasSimpleCity:function(e){for(var t=this.cityArr.length,n=!1,o=0;o<t;o++)this.cityArr[o]&&this.cityArr[o].length>0&&e==this.cityArr[o][1].value&&(n=!0);return n},getCitys:function(){var e=this;this.$request("/common/areas").then((function(t){0==t.code&&(e.cityData=t.data)}))},creatConnect:function(){if(this.connected||this.connecting)return e.showModal({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1;this.connecting=!0,console.log(u.globalData.wssUrl,"wss"),this.socketTask=e.connectSocket({url:u.globalData.wssUrl,header:{"content-type":"application/json","app-id":a.default.urls.appid,"open-id":e.getStorageSync("openid")},method:"GET",success:function(e){},fail:function(e){}}),this.connect(),console.log(this.socketTask,"socketTask")},toSign:function(t){var n=this;this.currentSiging=t,this.isLogin()?e.showModal({title:"正在报名",success:function(e){e.confirm&&n.sureSign(t.content.id)}}):n.showLogin=!0},sureSign:function(t){var n=this,o="/worker/accept/project/"+t;this.$request(o,{},"POST").then(function(){var t=(0,r.default)(s.default.mark((function t(o){return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:0==o.code&&(e.showToast({title:"报名成功",duration:3e3}),n.signed=!0,n.closeLogin());case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},connect:function(){var t=this,n=this;this.socketTask.onOpen((function(e){t.connecting=!1,t.connected=!0,console.log("onOpen",e)})),this.socketTask.onError((function(n){t.connecting=!1,t.connected=!1,t.canSend=!0,e.hideLoading(),e.showModal({content:"连接失败，请稍后再试",showCancel:!1}),console.log("onError",n)})),this.socketTask.onMessage((function(t){var o=JSON.parse(t.data);if(e.hideLoading(),console.log(o,"respone"),0==o.code){n.canSend=!0,n.placeHolder="请输入您的问题",n.toScroll();var i=o.data.length;n.enableSpeeking&&n.formatResultStr(o.data);for(var s=0;s<i;s++)n.qaList.push(o.data[s])}else e.showModal({title:o.msg})})),this.socketTask.onClose((function(n){e.hideLoading(),t.connected=!1,t.socketTask=!1,console.log("onClose",n);t.qaList.push({content:"链接已关闭，如需重新对话，请重新打开窗口。",source:"system",type:"str"})})),console.log("task",this.socketTask)},noInput:function(){var e=this;this.timer=setTimeout((function(){e.send({content:"ping",type:"check",source:"user"})}),3e4)},formatResultStr:function(e){for(var t=e.length,n="",o=0;o<t;o++){if("str"!=e[o].type&&"remind_resume"!=e[o].type||(n+=e[o].content),"job_recommend"==e[o].type||"hot_job"==e[o].type)for(var i=e[o].content.length,s=0;s<i;s++)n+=e[o].content[s].name;if("job_detail"==e[o].type)for(key in e[o].content)n+=e[o].content[key]}n&&this.speeking(n)},speeking:function(e){console.log(e,"播报内容"),l.textToSpeech({lang:"zh_CN",content:e,success:function(e){0==e.retcode?(console.log("result",e.result),o.playBackgroundAudio({dataUrl:e.filename,title:""})):console.warn("翻译失败",e)},fail:function(e){console.log("网络失败",e)}})},send:function(t){var n=this;clearTimeout(this.timer),this.socketTask.send({data:JSON.stringify(t),success:function(o){e.showLoading({title:"思考中，请稍后..."}),console.log(t,"data"),"hot_job"!=t.type&&"check"!=t.type&&(n.qaList.push(t),n.num++,n.hold="h"+n.num,n.toScroll(),n.ques="",n.placeHolder="正在回答中，请稍后...",n.qaListLen=n.qaList.length)},fail:function(e){console.log(e)}})},close:function(){this.socketTask&&this.socketTask.close&&this.socketTask.close()},dislike:function(e){console.log(e,"content");this.send({source:"user",content:"不喜欢",type:"str"})},cancel:function(){this.showWanner=!1,this.toScroll()},formatCity:function(){console.log(this.cityArr);for(var e=this.cityArr.length,t=[],n=0;n<e;n++){var o=[];if(this.cityArr[n]&&this.cityArr[n].length)for(var i=0;i<this.cityArr[n].length;i++){var s={id:"",name:""};s.id=this.cityArr[n][i].value,s.name=this.cityArr[n][i].text,o.push(JSON.parse(JSON.stringify(s)))}o.length&&t.push(JSON.parse(JSON.stringify(o)))}return t},deFormatCity:function(e){for(var t=e.length,n=[],o=0;o<t;o++){var i=o+1,s="city"+i;this[s]=e[o][1].id;for(var r=[],a=0;a<e[o].length;a++){var c={value:"",text:""};c.value=e[o][a].id,c.text=e[o][a].name,r.push(JSON.parse(JSON.stringify(c)))}n.push(JSON.parse(JSON.stringify(r)))}return n},finishSele:function(){var t=this;console.log(this.selectType,"selectType");var n=this.gender[this.currentGender].text+","+this.age+",";n+="\n"+this.sureCity();var o=this.selectType.length;n+="\n";for(var i=0;i<o;i++)for(var s=0;s<this.selectType[i].tags.length;s++)n+=this.selectType[i].tags[s].name+"/";var r=this.formatCity(this.cityArr),a={age:Number(this.age),gender:this.gender[this.currentGender].text,areas:r,type_tags:this.selectType,all_ags:this.typeTags};this.$request("/ai/resume",a,"POST").then((function(o){if(0==o.code){e.showToast({title:"保存成功",duration:2e3}),t.showWanner=!1;var i={content:n,source:"user",type:"str"};t.send(i)}}))},addWanner:function(){var e=this,t=this;this.$request("/ai/resume").then((function(n){if(0==n.code){e.typeTags=n.data.all_tags,e.selectType=n.data.type_tags?n.data.type_tags:[],console.log(e.selectType,"selectType");for(var o=0;o<e.selectType.length;o++)for(var i=0;i<t.selectType[o].tags.length;i++)t.seleTypeIds.push(t.selectType[o].tags[i].id);e.showWanner=!0,e.age=n.data.age?n.data.age:"";for(var s=0;s<e.gender.length;s++)e.gender[s].text==n.data.gender&&(e.currentGender=s);e.cityArr=n.data.areas?e.deFormatCity(n.data.areas):[];for(var r=0;r<e.cityArr.length;r++){var a=r+1,c="city"+a;e[c]=e.cityArr[r][1].value}}}))},chooseTag:function(e,t){console.log(e,t,"item&tag");var n=JSON.parse(JSON.stringify(e));n.tags=[];for(var o=!1,i=0,s=this.selectType.length,r=0;r<s;r++)n.id==this.selectType[r].id&&(o=!0,i=r);if(o){var a=this.selectType[i].tags.filter((function(e){return e.id==t.id}));"[]"==JSON.stringify(a)?this.selectType[i].tags.push(t):a.length>0&&(this.selectType[i].tags=this.selectType[i].tags.filter((function(e){return e.id!=t.id})))}else n.tags.push(t),this.selectType.push(JSON.parse(JSON.stringify(n)));console.log(this.seleTypeIds,this.seleTypeIds.indexOf(t.id)),-1!=this.seleTypeIds.indexOf(t.id)?this.seleTypeIds.splice(this.seleTypeIds.indexOf(t.id),1):this.seleTypeIds.push(t.id),this.selectType=this.selectType.filter((function(e){return"[]"!=JSON.stringify(e.tags)}))},noPosition:function(){this.showReAuth=!1}}};t.default=d}).call(this,n("df3c")["default"],n("3223")["default"])},e663:function(e,t,n){"use strict";n.r(t);var o=n("e02e"),i=n.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);t["default"]=i.a},f5cf:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o}));var o={uniDataPicker:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker")]).then(n.bind(null,"f16b"))}},i=function(){var e=this,t=e.$createElement,n=(e._self._c,!e.showChat||e.showWanner||e.showReAuth?null:e.__map(e.historyList,(function(t,n){var o=e.__get_orig(t),i="str"==t.type||"remind_resume"==t.type||"bind_mobile"==t.type||"need_bind_mobile"==t.type||"greeting"==t.type?t.content.replace(/\\n/g,"\n"):null;return{$orig:o,g0:i}}))),o=e.showChat&&e.showWanner&&!e.showReAuth?e.__map(e.typeTags,(function(t,n){var o=e.__get_orig(t),i=e.__map(t.tags,(function(t,n){var o=e.__get_orig(t),i=e.seleTypeIds.indexOf(t.id),s=e.seleTypeIds.indexOf(t.id);return{$orig:o,g1:i,g2:s}}));return{$orig:o,l1:i}})):null;e.$mp.data=Object.assign({},{$root:{l0:n,l2:o}})},s=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ai_chat-create-component',
    {
        'components/ai_chat-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("2cdd"))
        })
    },
    [['components/ai_chat-create-component']]
]);
