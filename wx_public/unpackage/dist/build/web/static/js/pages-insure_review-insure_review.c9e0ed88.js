(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-insure_review-insure_review"],{"22b3":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c975");var i={data:function(){return{projectInfo:{content:"",employer_name:"",name:"",work_address:"",work_end_time:"",work_start_time:""},showReason:!1,reason:"",currentPage:1,list:[],insurePeriod:[{value:"by_month",text:"/月"},{value:"by_day",text:"/天"}],token:"",manager_type:"",pagination:{},batch:{amount:"",buy_type:"",detail_count:"",id:"",price:"",status:""}}},onReachBottom:function(){this.list.length<this.pagination.totalCount?(this.currentPage++,this.getInfo()):uni.showToast({title:"已全部加载",icon:"none",duration:2e3})},onLoad:function(){var t=location.href.split("?");if(t.length>1)for(var e=t[1].split("&"),a=e.length,i=0;i<a;i++)-1!=e[i].indexOf("token")&&(this.token=e[i].split("=")[1],this.getInfo()),-1!=e[i].indexOf("manager_type")&&(this.manager_type=e[i].split("=")[1])},methods:{getInfo:function(){var t=this,e="/wechatweb/insurance-batch-review/detail?manager_type="+this.manager_type+"&token="+this.token+"&page="+this.currentPage;this.$request(e).then((function(e){0==e.code?(t.projectInfo=e.data.project,t.list=e.data.list,t.batch=e.data.batch,t.pagination=e.data.pagination):uni.showModal({title:e.msg})}))},bindAgree:function(t){if("rejected"==t){if(!this.showReason)return void(this.showReason=!0);if(!this.reason)return void uni.showModal({title:"请填写拒绝理由",showCancel:!1})}var e={token:this.token,manager_type:this.manager_type,operate:t,reason:this.reason};this.$request("/wechatweb/insurance-batch-review/review",e,"POST").then((function(t){0==t.code?(uni.showToast({title:"审批成功",duration:2e3}),uni.redirectTo({url:"/pages/success/success"})):uni.showModal({title:t.msg})}))}}};e.default=i},"3a3f":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.board[data-v-fa60cea6]{height:calc(100vh - %?150?%)}.board .btns[data-v-fa60cea6]{position:fixed;width:100%;padding:0 %?30?%;bottom:%?20?%;left:0;box-sizing:border-box}.board .btns.tips[data-v-fa60cea6]{text-align:center;color:#0092ff;font-weight:600}.board .btns .btn[data-v-fa60cea6]{width:40%}.board .btns .btn.refuse[data-v-fa60cea6]{background:transparent;color:red;border:1px solid red}.board .reject_box uni-textarea[data-v-fa60cea6]{display:block;width:100%;padding:%?20?%;border:1px solid #ccc;border-radius:%?10?%;box-sizing:border-box;margin-top:%?20?%;height:%?160?%}',""]),t.exports=e},"53ce":function(t,e,a){var i=a("3a3f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("2cbb1642",i,!0,{sourceMap:!1,shadowMode:!1})},b750:function(t,e,a){"use strict";var i=a("53ce"),n=a.n(i);n.a},cb36:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uniTable:a("668b").default,uniTr:a("0fba").default,uniTh:a("825e").default,uniTd:a("d087").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"board"},[a("v-uni-view",{staticClass:"title"},[t._v("项目保险审批")]),a("v-uni-view",{staticClass:"wrap"},[a("v-uni-view",{staticClass:"line flex flex_start"},[a("v-uni-view",{staticClass:"tit"},[t._v("项目名称")]),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.projectInfo.name))])],1),a("v-uni-view",{staticClass:"line flex flex_start"},[a("v-uni-view",{staticClass:"tit"},[t._v("雇主名称")]),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.projectInfo.employer_name))])],1),a("v-uni-view",{staticClass:"line flex flex_start"},[a("v-uni-view",{staticClass:"tit"},[t._v("项目内容")]),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.projectInfo.content))])],1),a("v-uni-view",{staticClass:"line flex flex_start"},[a("v-uni-view",{staticClass:"tit"},[t._v("项目地址")]),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.projectInfo.work_address))])],1),a("v-uni-view",{staticClass:"line flex flex_start"},[a("v-uni-view",{staticClass:"tit"},[t._v("服务时间")]),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.projectInfo.work_start_time)+" ~ "+t._s(t.projectInfo.work_end_time))])],1),a("v-uni-view",{staticClass:"line flex flex_start"},[a("v-uni-view",{staticClass:"tit"},[t._v("保险批次号")]),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.batch.code))])],1),a("v-uni-view",{staticClass:"line flex flex_start"},[a("v-uni-view",{staticClass:"tit"},[t._v("购买人数")]),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.batch.detail_count))])],1),a("v-uni-view",{staticClass:"line flex flex_start"},[a("v-uni-view",{staticClass:"tit"},[t._v("保险单价")]),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.batch.price))])],1),a("v-uni-view",{staticClass:"line flex flex_start"},[a("v-uni-view",{staticClass:"tit"},[t._v("保费总额")]),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.batch.amount))])],1)],1),a("uni-table",{attrs:{stripe:!0,emptyText:"暂无更多数据"}},[a("uni-tr",[a("uni-th",{attrs:{align:"left"}},[t._v("姓名")]),a("uni-th",{attrs:{align:"left"}},[t._v("身份证号")]),a("uni-th",{attrs:{align:"left"}},[t._v("手机号")]),a("uni-th",{attrs:{align:"left"}},[t._v("保费(元)")]),a("uni-th",{attrs:{align:"left"}},[t._v("保障日期")]),a("uni-th",{attrs:{align:"left"}},[t._v("入职时间")])],1),t._l(t.list,(function(e,i){return a("uni-tr",{key:i},[a("uni-td",[t._v(t._s(e.worker_name))]),a("uni-td",[t._v(t._s(e.worker_id_card_number))]),a("uni-td",[t._v(t._s(e.worker_mobile))]),a("uni-td",[t._v(t._s(e.real_pay_money))]),a("uni-td",[t._v(t._s(e.coverage_start_time+"-"+e.coverage_end_time))]),a("uni-td",[t._v(t._s(e.worker_hired_time))])],1)}))],2),t.showReason?a("v-uni-view",{staticClass:"reject_box"},[a("v-uni-view",{staticClass:"tit"},[t._v("拒绝理由")]),a("v-uni-view",{staticClass:"reason"},[a("v-uni-textarea",{attrs:{placeholder:"请输入拒绝理由","placeholder-style":"font-size:26rpx;"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1)],1):t._e(),"project_manager"==t.manager_type&&"project_manager_reviewing"==t.batch.status||"financial_manager"==t.manager_type&&"finance_manager_reviewing"==t.batch.status?a("v-uni-view",{staticClass:"btns flex flex_btween"},[a("v-uni-view",{staticClass:"btn refuse",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindAgree("rejected")}}},[t._v("拒绝")]),a("v-uni-view",{staticClass:"btn pass",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindAgree("approved")}}},[t._v("通过")])],1):t._e(),"project_manager_rejected"==t.batch.status?a("v-uni-view",{staticClass:"btns tips"},[t._v("该审批信息已拒绝")]):t._e(),"project_manager_expired"==t.batch.status?a("v-uni-view",{staticClass:"btns tips"},[t._v("该审批信息未处理，已过期")]):t._e(),"project_manager"!=t.manager_type||"finance_manager_rejected"!=t.batch.status&&"finance_manager_expired"!=t.batch.status&&"approved"!=t.batch.status?t._e():a("v-uni-view",{staticClass:"btns tips"},[t._v("该审批信息您已通过")]),"financial_manager"==t.manager_type&&"finance_manager_rejected"==t.batch.status?a("v-uni-view",{staticClass:"btns tips"},[t._v("该审批信息已拒绝")]):t._e(),"financial_manager"==t.manager_type&&"finance_manager_expired"==t.batch.status?a("v-uni-view",{staticClass:"btns tips"},[t._v("该审批信息未处理，已过期")]):t._e(),"financial_manager"==t.manager_type&&"approved"==t.batch.status?a("v-uni-view",{staticClass:"btns tips"},[t._v("该审批信息您已通过")]):t._e()],1)],1)},s=[]},dead:function(t,e,a){"use strict";a.r(e);var i=a("cb36"),n=a("f1b5");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("b750");var r=a("f0c5"),o=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"fa60cea6",null,!1,i["a"],void 0);e["default"]=o.exports},f1b5:function(t,e,a){"use strict";a.r(e);var i=a("22b3"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a}}]);