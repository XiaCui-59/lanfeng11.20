(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/work_detail/work_detail"],{"023a":function(e,t,n){"use strict";(function(e){var o=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("7eb4")),a=o(n("ee10")),r=o(n("425e")),s=getApp(),l={data:function(){return{sharePoster:{css:{width:""},views:[{type:"image",src:"https://static.test.swiftwd.com/broker/share_c_bg.jpg",css:{width:"100%",margin:"0 auto"}}]},imgUrl:s.globalData.baseImageUrl,pageName:"我要报名",marginTop:s.globalData.marginTop,tabMargin:s.globalData.tabMargin,detailTitleHeight:s.globalData.detailTitleHeight,btnBottom:s.globalData.btnBottom,info:{broker_mobile:"",broker_name:"",code:"",content:"",id:"",name:"",platform_fee_price:"",work_address:"",worker_salary:"",worker_welfare:""},displayType:"-webkit-box",showAll:!0,id:"",isLogin:!1,url:"",scrollHeight:0,contHeight:0,showMask:!1,showInner1:!1,showInner2:!1,headHeight:s.globalData.highTopHeight,btnHeight:s.globalData.btnHeight,pb_id:0,status:r.default.status,period:r.default.periodList,paySalaryPeriod:r.default.paySalaryPeriod,paySalaryWeekly:r.default.paySalaryWeekly}},components:{customHeader:function(){n.e("components/custom_header").then(function(){return resolve(n("8f8a"))}.bind(null,n)).catch(n.oe)}},onShareAppMessage:function(e){var t=this;return(0,a.default)(i.default.mark((function e(){var n,o,a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o="project_id="+t.pb_id,e.next=3,t.shareSave();case 3:return a=e.sent,console.log(a,"imageUrl"),n={title:t.info.name,path:"/subpkg/work_detail/work_detail?scene="+encodeURIComponent(o),imageUrl:a},e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},onShareTimeline:function(e){var t=this;return(0,a.default)(i.default.mark((function e(){var n,o,a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o="project_id="+t.pb_id,e.next=3,t.shareSave();case 3:return a=e.sent,console.log(a,"imageUrl"),n={title:t.info.name,path:"/subpkg/work_detail/work_detail?scene="+encodeURIComponent(o),imageUrl:a},e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},onLoad:function(e){if(this.contHeight=s.globalData.systemHeight-this.marginTop-this.tabMargin-this.btnBottom,this.scrollHeight=this.contHeight-this.btnHeight-2*this.btnBottom-this.detailTitleHeight,console.log(e,"param"),e.scene)for(var t=decodeURIComponent(e.scene),n=t.split("&"),o=0;o<n.length;o++)-1!=n[o].indexOf("project_id")&&(this.pb_id=n[o].split("=")[1])},onShow:function(){var e=this;console.log(this.pb_id,"onshow");var t="/share-to-worker/project/"+this.pb_id;this.$request(t).then((function(t){0==t.code&&(e.info=t.data,e.viewShareHaibao())}))},methods:{shareSave:function(){var e=this;return new Promise((function(t){e.$refs.sharePainter.canvasToTempFilePathSync({fileType:"jpg",quality:1,success:function(n){var o={file:n.tempFilePath,type:"toc"},i="/share-to-worker/project/"+e.pb_id+"/poster-url";e.$request(i,o,"POST").then((function(e){0==e.code&&t(e.data.url)}))},fail:function(e){console.log(e,"err")}})}))},showTotal:function(){console.log(1234),this.displayType="block",this.showAll=!1},back:function(){e.switchTab({url:"/pages/index/index"})},viewShareHaibao:function(){var e=this;return(0,a.default)(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e,console.log(e.info,"viewsharehaibao"),e.sharePoster.views=[{type:"image",src:n.imgUrl+"/broker/share_c_bg.jpg",css:{width:"100%",margin:"0 auto"}},{type:"view",css:{width:"59.6%",textAlign:"left",position:"absolute",top:"14.5%",left:"50%",transform:"translateX(-50%)",lineHeight:"54rpx",lineClamp:1},views:[{type:"view",css:{display:"block",color:"#fff",padding:"8rpx 0",marginBottom:"10rpx",borderBottom:"1px dashed #FFAC3F"},views:[{type:"text",text:"工作名称：",css:{width:"35%",textAlign:"center",display:"inline-block",background:"#fff",fontWeight:"600",color:"#3D3D3D",fontSize:"30rpx",borderRadius:"8rpx",marginRight:"16rpx",padding:"0 8rpx"}},{type:"text",text:n.info.name,css:{fontFamily:"Verdana, Verdana",fontWeight:"bold",color:"#DA5233",textShadow:"0px 2px 2px #5A1100",display:"inline-block",fontSize:"40rpx"}}]},{type:"view",css:{display:"block",color:"#fff",padding:"8rpx 0",marginBottom:"10rpx",borderBottom:"1px dashed #FFAC3F"},views:[{type:"text",text:"工作酬劳：",css:{width:"35%",textAlign:"center",display:"inline-block",background:"#fff",fontWeight:"600",color:"#3D3D3D",fontSize:"30rpx",borderRadius:"8rpx",marginRight:"16rpx",padding:"0 8rpx"}},{type:"text",text:n.info.worker_salary,css:{fontFamily:"Verdana, Verdana",fontWeight:"bold",color:"#DA5233",textShadow:"0px 2px 2px #5A1100",display:"inline-block",fontSize:"40rpx"}}]},{type:"view",css:{display:"block",color:"#fff",padding:"8rpx 0",marginBottom:"10rpx",borderBottom:"1px dashed #FFAC3F"},views:[{type:"text",text:"工作福利：",css:{width:"35%",textAlign:"center",display:"inline-block",background:"#fff",fontWeight:"600",color:"#3D3D3D",fontSize:"30rpx",borderRadius:"8rpx",marginRight:"16rpx",padding:"0 8rpx"}},{type:"text",text:n.info.worker_welfare,css:{fontFamily:"Verdana, Verdana",fontWeight:"bold",color:"#DA5233",textShadow:"0px 2px 2px #5A1100",display:"inline-block",fontSize:"40rpx"}}]}]}],console.log(1111111);case 4:case"end":return t.stop()}}),t)})))()},toSign:function(){var t=this,n=e.getStorageSync("token");if(n){var o="/worker/have/another/project/"+this.pb_id;this.$request(o).then((function(n){0==n.code&&(n.data?e.showModal({title:"提示",content:n.data,success:function(e){e.confirm&&t.sureSign()}}):t.sureSign())}))}else e.showModal({title:"未登录",content:"您当前还未登录，请先登录再报名。",confirmText:"去登录",success:function(t){t.confirm?e.navigateTo({url:"/pages/login/login"}):e.exitMiniProgram()}})},sureSign:function(){var t="/worker/accept/project/"+this.pb_id;this.$request(t,{},"POST").then((function(t){0==t.code&&e.showModal({title:"报名成功",content:"您已成功报名该项目，是否进入首页？",success:function(t){t.confirm&&e.switchTab({url:"/pages/index/index"})}})}))}}};t.default=l}).call(this,n("4884")["default"])},"340c":function(e,t,n){"use strict";n.r(t);var o=n("5fa7"),i=n("8438");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("86c2");var r=n("828b"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"343bdac2",null,!1,o["a"],void 0);t["default"]=s.exports},"5fa7":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={lPainter:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/lime-painter/components/l-painter/l-painter")]).then(n.bind(null,"01ef"))}},i=function(){var e=this.$createElement;this._self._c},a=[]},"6aa1":function(e,t,n){},8438:function(e,t,n){"use strict";n.r(t);var o=n("023a"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},"86c2":function(e,t,n){"use strict";var o=n("6aa1"),i=n.n(o);i.a},f13e:function(e,t,n){"use strict";(function(e,t){var o=n("47a9");n("e32d");o(n("3240"));var i=o(n("340c"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("4884")["default"],n("4884")["createPage"])}},[["f13e","common/runtime","common/vendor"]]]);