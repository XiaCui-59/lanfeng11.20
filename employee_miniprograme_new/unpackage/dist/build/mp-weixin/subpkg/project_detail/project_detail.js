(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/project_detail/project_detail"],{"18da":function(e,t,a){"use strict";a.r(t);var n=a("e821"),o=a("aecb");for(var i in o)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("90e2");var r=a("828b"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"092487b4",null,!1,n["a"],void 0);t["default"]=s.exports},"4b21":function(e,t,a){"use strict";(function(e){var n=a("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("7eb4")),i=n(a("ee10")),r=n(a("7ca3")),s=n(a("0b3f")),l=getApp(),u={data:function(){var e;return e={showLogin:!1,showAddBase:!1,imgUrl:l.globalData.baseImageUrl,info:{sign:!0,arrival_time:"",broker_company_name:"",checkin_time:"",content:"",contract_template_id:"",contract_template_name:"",contracted_num:0,employer_name:"",id:"",insurance_meal_id:"",insurance_meal_name:"",is_employer_name_public:!1,name:"",need_worker_num:50,pay_salary_setting:{type:"daily",daily:"18:00",weekly:"",monthly:""},project_status:"",qrCode:"",salary_settlement_type:"",salary_unit_price:"",status:"",work_address:"",work_end_time:"",work_start_time:"",work_type:"",work_type_code:"",work_type_id:"",work_type_name:" "},currentTab:{value:"detail",text:"项目详情"},showMask:!1,pageName:"灵动优聘",marginTop:l.globalData.marginTop,tabMargin:l.globalData.tabMargin,subTabHeight:l.globalData.subTabHeight,btnBottom:l.globalData.btnBottom,detailTitleHeight:l.globalData.detailTitleHeight,codeHeight:l.globalData.codeHeight,status:!1,showCode:!1},(0,r.default)(e,"status",s.default.status),(0,r.default)(e,"periodList",s.default.periodList),(0,r.default)(e,"paySalaryPeriod",s.default.paySalaryPeriod),(0,r.default)(e,"paySalaryWeekly",s.default.paySalaryWeekly),(0,r.default)(e,"tabs",[{value:"detail",text:"项目详情",show:!0},{value:"salary",text:"工资单",show:!0},{value:"insurances",text:"保险记录",show:!0}]),(0,r.default)(e,"htmlNodes","<p>工作内容：负责路由器，摄像头组装，手上工</p><p>工作要求：男女不限，16-42岁。</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>工作时间：早8:00 -晚20:00（月</p><p>工作地址：成都市新都区石板滩</p><p>吃住情况：包住宿，自带床上用品行李，有空</p>"),(0,r.default)(e,"displayType","-webkit-box"),(0,r.default)(e,"showAll",!0),(0,r.default)(e,"scrollHeight",0),(0,r.default)(e,"boxTop",0),(0,r.default)(e,"headerHeight",l.globalData.topHeight),(0,r.default)(e,"currentPage",1),(0,r.default)(e,"contHeight",0),(0,r.default)(e,"scrollPadding",0),(0,r.default)(e,"tabHeight",0),(0,r.default)(e,"id",""),(0,r.default)(e,"list",[]),(0,r.default)(e,"refreshStatus",!0),(0,r.default)(e,"isPulling",!1),(0,r.default)(e,"timer",null),(0,r.default)(e,"showSubTab",!0),(0,r.default)(e,"boxHeight",0),(0,r.default)(e,"signed",!1),(0,r.default)(e,"marker",[]),(0,r.default)(e,"from",""),e},components:{customHeader:function(){a.e("components/custom_header").then(function(){return resolve(a("eb6c"))}.bind(null,a)).catch(a.oe)},addBase:function(){a.e("components/add_base_info").then(function(){return resolve(a("a59d"))}.bind(null,a)).catch(a.oe)}},onLoad:function(t){var a=this;return(0,i.default)(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.id=t.id,t.from&&(a.from=t.from),n.next=4,a.getInfo();case 4:a.info=n.sent,e.showShareMenu({title:"灵动优聘",content:a.info.name,path:"/subpkg/project_detail/project_detail?id="+a.id+"&from=share"}),a.marker=[{id:1,latitude:a.info.work_address.location.lat,longitude:a.info.work_address.location.lng,iconPath:a.imgUrl+"/broker/ic_posi_red.png",width:25,height:25}],a.signed=a.info.sign,a.boxTop=a.marginTop+a.tabMargin,a.scrollHeight=l.globalData.systemHeight-a.marginTop-a.tabMargin;case 10:case"end":return n.stop()}}),n)})))()},onHide:function(){clearInterval(this.timer)},onUnload:function(){clearInterval(this.timer)},methods:{closeBase:function(){this.showAddBase=!1,e.showToast({title:"报名成功",duration:3e3})},prevImage:function(){for(var t=[],a=this.info.images.length,n=0;n<a;n++)t.push(this.info.images[n].url);e.previewImage({urls:t})},openAddress:function(){e.openLocation({latitude:this.info.work_address.location.lat,longitude:this.info.work_address.location.lng,scale:18,name:this.info.work_address.address,address:this.info.work_address.address,success:function(){console.log("地图打开成功")},fail:function(e){console.error("地图打开失败",e)}})},makePhoneCall:function(t){this.signed?e.makePhoneCall({phoneNumber:t}):e.showModal({title:"报名后才可拨打电话。",showCancel:!1})},closeLogin:function(){this.showLogin=!1},signIn:function(){this.isLogin()?this.sureSign():this.showLogin=!0},sureSign:function(){var t=this,a="/worker/accept/project/"+this.info.id;this.$request(a,{},"POST").then(function(){var a=(0,i.default)(o.default.mark((function a(n){var i;return o.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(0!=n.code){a.next=10;break}return t.signed=!0,t.closeLogin(),a.next=5,t.getInfo();case 5:return t.info=a.sent,a.next=8,t.getUsrInfo();case 8:i=a.sent,"unknown"==i.gender?t.showAddBase=!0:e.showToast({title:"报名成功",duration:3e3});case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},getElementInfo:function(){var t=this,a=(e.getSystemInfoSync(),e.createSelectorQuery().select(".base_box"));a.boundingClientRect((function(e){e&&(console.log(e),t.info.sign?t.scrollHeight=l.globalData.systemHeight-t.marginTop-t.tabMargin-t.btnBottom-e.height:t.scrollHeight=l.globalData.systemHeight-t.marginTop-t.tabMargin-2*t.btnBottom-e.height-t.subTabHeight)})).exec()},getInfo:function(){var e=this;return new Promise((function(t){if(e.isLogin()){var a="/worker/project/info/"+e.id;e.$request(a).then((function(e){0==e.code&&t(e.data)}))}else{var n="/common/project/info/"+e.id;e.$request(n).then((function(e){0==e.code&&t(e.data)}))}}))}}};t.default=u}).call(this,a("df3c")["default"])},"90e2":function(e,t,a){"use strict";var n=a("f3bd"),o=a.n(n);o.a},ac20:function(e,t,a){"use strict";(function(e,t){var n=a("47a9");a("417d");n(a("3240"));var o=n(a("18da"));e.__webpack_require_UNI_MP_PLUGIN__=a,t(o.default)}).call(this,a("3223")["default"],a("df3c")["createPage"])},aecb:function(e,t,a){"use strict";a.r(t);var n=a("4b21"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},e821:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,a=(e._self._c,0!=e.info.videos.length||0!=e.info.images.length),n=a?e.__map(e.info.videos,(function(t,a){var n=e.__get_orig(t),o=e.info.videos.length;return{$orig:n,g1:o}})):null,o=a?e.__map(e.info.images,(function(t,a){var n=e.__get_orig(t),o=e.info.images.length;return{$orig:n,g2:o}})):null,i=0!=e.info.videos.length||0!=e.info.images.length,r=e.periodList.filter((function(t){return t.value==e.info.worker_salary_type}));e.$mp.data=Object.assign({},{$root:{g0:a,l0:n,l1:o,g3:i,g4:r}})},o=[]},f3bd:function(e,t,a){}},[["ac20","common/runtime","common/vendor"]]]);