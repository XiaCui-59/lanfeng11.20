(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0005":function(t,n,e){"use strict";e("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"bot_footer",data:function(){return{}},methods:{open:function(){window.open("https://beian.miit.gov.cn/#/Integrated/index")}}};n.default=i},"035f":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"footer"},[e("v-uni-view",[t._v("©灵动优聘 2024"),e("v-uni-text",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open.apply(void 0,arguments)}}},[t._v("备案号：蜀ICP备2024051734号-1")])],1)],1)},a=[]},"37ab":function(t,n,e){"use strict";e.r(n);var i=e("cbca"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"3d48":function(t,n,e){var i=e("42b5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("967d").default;a("6f61b823",i,!0,{sourceMap:!1,shadowMode:!1})},"3edc":function(t,n,e){"use strict";var i=e("3d48"),a=e.n(i);a.a},"42b5":function(t,n,e){var i=e("c86c");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */uni-image[data-v-193fb442]{width:auto;will-change:transform;height:auto}\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.footer[data-v-193fb442]{width:calc(100% - 200px);background:#f1f1f1;height:40px;line-height:40px;text-align:center;color:#333;position:fixed;bottom:0;right:0;z-index:99}.footer uni-text[data-v-193fb442]{display:inline-block;margin-left:10px;cursor:pointer;color:#226ff9}',""]),t.exports=n},"49c4":function(t,n,e){"use strict";e.r(n);var i=e("0005"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},b552:function(t,n,e){"use strict";e.r(n);var i=e("035f"),a=e("49c4");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("3edc");var r=e("828b"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"193fb442",null,!1,i["a"],void 0);n["default"]=s.exports},b6c2:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"header flex flex-start"},[e("v-uni-image",{staticStyle:{width:"60px",height:"60px","margin-right":"5px"},attrs:{src:"/static/logo.png",mode:"widthFix"}}),e("v-uni-text",{staticStyle:{"font-size":"22px"}},[t._v("灵动优聘企业后台管理系统")])],1),e("v-uni-view",{staticStyle:{"margin-top":"15px","font-size":"35px","font-weight":"600"}},[t._v("欢迎来到灵动优聘！")]),e("v-uni-view",{staticClass:"tabs flex flex_start"},[e("v-uni-view",{staticClass:"tab",class:1==t.currentTab?"active":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeTab(1)}}},[t._v("验证码登录/注册")]),e("v-uni-view",{staticClass:"tab",class:0==t.currentTab?"active":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeTab(0)}}},[t._v("账号密码")])],1),e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"list-call"},[e("v-uni-image",{staticClass:"img",attrs:{src:"/static/phone.png"}}),e("v-uni-input",{staticClass:"biaoti",attrs:{type:"text",placeholder:"输入手机号码"},model:{value:t.mobile,callback:function(n){t.mobile=n},expression:"mobile"}})],1),0==t.currentTab?e("v-uni-view",{staticClass:"list-call"},[e("v-uni-image",{staticClass:"img",attrs:{src:"/static/shilu-login/block.png"}}),e("v-uni-input",{staticClass:"biaoti",attrs:{type:"text",placeholder:"请输入密码",password:"true"},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.bindLogin.apply(void 0,arguments)}},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}})],1):t._e(),1==t.currentTab?e("v-uni-view",{staticClass:"list-call"},[e("v-uni-image",{staticClass:"img",attrs:{src:"/static/shilu-login/veri.png"}}),e("v-uni-input",{staticClass:"biaoti",attrs:{type:"text",placeholder:"请输入短信验证码"},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.bindLogin.apply(void 0,arguments)}},model:{value:t.verCode,callback:function(n){t.verCode=n},expression:"verCode"}}),e("v-uni-view",{staticClass:"get_code",class:t.canSend?"":"disabled",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getMessageCode.apply(void 0,arguments)}}},[t._v(t._s(t.tipsText))])],1):t._e()],1),e("v-uni-view",{staticClass:"dlbutton",attrs:{"hover-class":"dlbutton-hover"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.bindLogin.apply(void 0,arguments)}}},[e("v-uni-text",[t._v(t._s(1==t.currentTab?"登录/注册":"登录"))])],1),1==t.currentTab?e("v-uni-view",{staticClass:"tips",staticStyle:{"font-size":"14px",color:"#f00"}},[t._v("注：若无账号，通过手机号验证码登录后将自动创建账号。")]):t._e()],1),e("botFooter")],1)},a=[]},b976:function(t,n,e){var i=e("bd72");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("967d").default;a("73a1ac8b",i,!0,{sourceMap:!1,shadowMode:!1})},bd72:function(t,n,e){var i=e("c86c");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */uni-image[data-v-7dc89872]{width:auto;will-change:transform;height:auto}\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.footer[data-v-7dc89872]{background:transparent;color:#fff}.tips[data-v-7dc89872]{font-size:14px;margin-top:15px;text-align:center}.tips .mark[data-v-7dc89872]{color:#226ff9;display:inline-block;margin-left:10px;margin-right:25px;cursor:pointer}.content[data-v-7dc89872]{width:100%;height:100vh;background:url(/static/login_bg.jpg) no-repeat;background-size:cover;background-position:100% 0}.content .right[data-v-7dc89872]{width:500px;padding:30px 20px;box-sizing:border-box;border-radius:10px;position:absolute;top:50%;left:10%;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:hsla(0,0%,100%,.8);box-shadow:3px 3px 20px 3px #a8b6c6}.content .right .tabs[data-v-7dc89872]{margin-top:40px}.content .right .tabs .tab[data-v-7dc89872]{height:40px;line-height:40px;padding:0 10px;border-top-left-radius:4px;border-top-right-radius:4px;cursor:pointer}.content .right .tabs .tab.active[data-v-7dc89872]{color:#226ff9;border-bottom:2px solid #226ff9}.content .right uni-input[data-v-7dc89872]:-internal-autofill-selected{background-color:initial!important}.content .mask[data-v-7dc89872]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.4)}.content .mask .inner[data-v-7dc89872]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#fff;border-radius:10px;box-sizing:border-box;max-width:1200px;min-width:1024px}.content .mask .inner .left[data-v-7dc89872]{width:60%}.content .mask .inner .left uni-image[data-v-7dc89872]{width:100%}.header[data-v-7dc89872]{font-size:50px}.list[data-v-7dc89872]{display:flex;flex-direction:column;padding-top:20px\r\n  /* padding-left: 70upx;\r\n\tpadding-right: 70upx; */}.list-call[data-v-7dc89872]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;height:40px;color:#333;width:100%;text-align:center;margin-bottom:24px;margin-top:0;border-radius:4px;border:1px solid #d9d9d9;border-radius:%?6?%;position:relative}.list-call[data-v-7dc89872]:nth-child(3){width:calc(100% - 160px)}.list-call .codeimg[data-v-7dc89872]{width:160px;position:absolute;top:50%;left:100%;-webkit-transform:translate(15px,-50%);transform:translate(15px,-50%);background:#fff}.list-call .img[data-v-7dc89872]{width:25px;height:25px;padding:0 10px}.list-call .biaoti[data-v-7dc89872]{flex:1;text-align:left;font-size:16px;line-height:50px;height:40px;min-height:40px;padding-left:5px;border-radius:6px}.get_code[data-v-7dc89872]{padding:0 5px;font-size:14px;color:#226ff9;cursor:pointer}.get_code.disabled[data-v-7dc89872]{color:#999}.dlbutton[data-v-7dc89872]{color:#fff;font-size:16px;width:100%;height:40px;border-radius:4px;background:#226ff9;font-weight:700;align-items:center;display:flex;justify-content:center;line-height:40px;text-align:center;\r\n  /* margin-left: auto;\r\n\tmargin-right: auto; */margin-top:30px}.dlbutton[data-v-7dc89872]:hover{cursor:pointer;background:#3da5ff}.dlbutton[data-v-7dc89872]:hover{background-color:#226ff9}.xieyi[data-v-7dc89872]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:%?22?%;margin-top:%?80?%;color:#ffa800;text-align:center;height:%?40?%;line-height:%?40?%}.xieyi uni-text[data-v-7dc89872]{font-size:%?22?%;margin-left:%?15?%;margin-right:%?15?%}',""]),t.exports=n},bf85:function(t,n,e){"use strict";e.r(n);var i=e("b6c2"),a=e("37ab");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("dbcc");var r=e("828b"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"7dc89872",null,!1,i["a"],void 0);n["default"]=s.exports},cbca:function(t,n,e){"use strict";e("6a54");var i=e("f5bd").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("b552")),o=(e("8f59"),{data:function(){return{mobile:"",password:"",verCode:"",codeImage:"",captchaId:"",currentTab:1,canSend:!0,tipsText:"获取短信验证码"}},components:{botFooter:a.default},onShow:function(){var t=uni.getStorageSync("token");t&&this.$request("/broker/info").then((function(t){0==t.code&&uni.navigateTo({url:"/pages/index/index?page_name=home"})}))},methods:{changeTab:function(t){this.currentTab=t},getMessageCode:function(){var t=this,n=this;if(this.canSend){var e={mobile:this.mobile};this.$request("/auth/send-sms-verify-code",e,"POST").then((function(e){if(0==e.code){t.canSend=!1;var i=60;t.tipsText=i+"s";var a=setInterval((function(){i>0?(i--,n.tipsText=i+"s"):(n.canSend=!0,n.tipsText="重新获取",clearInterval(a))}),1e3)}}))}else uni.showModal({title:"验证码已发送，请稍后重试",showCancel:!1})},bindLogin:function(){if(0==this.currentTab){if(!this.password||!this.mobile)return void uni.showToast({icon:"none",title:"内容未填写完整"})}else if(!this.verCode||!this.mobile)return void uni.showToast({icon:"none",title:"内容未填写完整"});var t,n;0==this.currentTab?(t={mobile:this.mobile,password:this.password},n="/auth/broker/login/password"):(t={mobile:this.mobile,sms_verify_code:this.verCode},n="/auth/broker/login/sms"),this.$request(n,t,"POST").then((function(t){0==t.code&&(uni.showToast({icon:"none",title:"登录成功"}),uni.setStorage({key:"token",data:t.data.token,success:function(){uni.navigateTo({url:"/pages/index/index?page_name=home"})}}))}))},toRegister:function(){uni.navigateTo({url:"/pages/register/register"})},toReset:function(){uni.navigateTo({url:"/pages/resetpassword/resetpassword"})}}});n.default=o},dbcc:function(t,n,e){"use strict";var i=e("b976"),a=e.n(i);a.a}}]);