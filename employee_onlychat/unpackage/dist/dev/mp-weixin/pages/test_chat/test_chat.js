(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/test_chat/test_chat"],{

/***/ 192:
/*!******************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_onlychat/main.js?{"page":"pages%2Ftest_chat%2Ftest_chat"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _test_chat = _interopRequireDefault(__webpack_require__(/*! ./pages/test_chat/test_chat.vue */ 193));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_test_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 193:
/*!***********************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_onlychat/pages/test_chat/test_chat.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test_chat_vue_vue_type_template_id_94f2685c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test_chat.vue?vue&type=template&id=94f2685c& */ 194);
/* harmony import */ var _test_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test_chat.vue?vue&type=script&lang=js& */ 196);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _test_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _test_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _test_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test_chat.vue?vue&type=style&index=0&lang=scss& */ 198);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 36);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _test_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _test_chat_vue_vue_type_template_id_94f2685c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _test_chat_vue_vue_type_template_id_94f2685c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _test_chat_vue_vue_type_template_id_94f2685c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/test_chat/test_chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 194:
/*!******************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_onlychat/pages/test_chat/test_chat.vue?vue&type=template&id=94f2685c& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_template_id_94f2685c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./test_chat.vue?vue&type=template&id=94f2685c& */ 195);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_template_id_94f2685c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_template_id_94f2685c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_template_id_94f2685c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_template_id_94f2685c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 195:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_onlychat/pages/test_chat/test_chat.vue?vue&type=template&id=94f2685c& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 =
    !_vm.ifSingle && !_vm.showWanner && !_vm.showReAuth
      ? _vm.__map(_vm.historyList, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g0 =
            item.msg_type == "text" ? item.content.replace(/\\n/g, "\n") : null
          var g1 =
            item.msg_type == "voice" ? Math.ceil(item.voice.second * 20) : null
          var g2 =
            item.msg_type == "voice" ? Math.ceil(item.voice.second) : null
          return {
            $orig: $orig,
            g0: g0,
            g1: g1,
            g2: g2,
          }
        })
      : null
  var l1 =
    !_vm.ifSingle && !_vm.showWanner && !_vm.showReAuth
      ? _vm.__map(_vm.qaList, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g3 =
            item.msg_type == "text" ? item.content.replace(/\\n/g, "\n") : null
          var g4 =
            item.msg_type == "voice" ? Math.ceil(item.voice.second * 20) : null
          var g5 =
            item.msg_type == "voice" ? Math.ceil(item.voice.second) : null
          return {
            $orig: $orig,
            g3: g3,
            g4: g4,
            g5: g5,
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        l1: l1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 196:
/*!************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_onlychat/pages/test_chat/test_chat.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./test_chat.vue?vue&type=script&lang=js& */ 197);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 197:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_onlychat/pages/test_chat/test_chat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _url_setting = _interopRequireDefault(__webpack_require__(/*! @/url_setting */ 33));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var plugin = requirePlugin("WechatSI");
var translater = plugin.getRecordRecognitionManager();
var app = getApp();
var _default = {
  data: function data() {
    return {
      title: "",
      historyId: 0,
      loadAllHistory: false,
      showReAuth: false,
      imgUrl: app.globalData.baseImageUrl,
      showTranIcon: false,
      scrollView: "",
      ques: "",
      hold: "h1",
      qaList: [],
      socketOpen: false,
      socketMsgQueue: [],
      canSend: true,
      placeHolder: "想了解什么工作，请告诉我吧",
      qaListLen: 0,
      historyList: [],
      scroll: 0,
      connected: false,
      connecting: false,
      socketTask: false,
      num: 1,
      curStrIndex: 0,
      marginTop: app.globalData.marginTop,
      tabMargin: app.globalData.tabMargin,
      // scrollHeight: 0,
      subTabHeight: app.globalData.subTabHeight,
      showRecord: true,
      showFullScreen: true,
      showWanner: false,
      cityData: [],
      city1: "",
      city2: "",
      city3: "",
      cityArr: [],
      typeTags: [],
      seleTypeIds: [],
      selectType: [],
      open_id: "",
      getPhoneData: {},
      showInputing: false,
      enableSpeeking: false,
      timer: null,
      currentSiging: {},
      showSetting: false,
      openid: "",
      startPoint: {},
      //记录长按录音开始点信息,用于后面计算滑动距离。
      cancelRecord: false,
      titleHeight: 0,
      showAnswering: false,
      inputHeight: 0,
      recordSecond: 0,
      secondText: "00:00",
      secondTimer: null,
      cancelIconLeft: 0,
      cancelIconRight: 0,
      cancelIconBottom: 0,
      cancelIconTop: 0,
      manager: uni.getRecorderManager(),
      voiceTime: 0,
      //总共录音时长,
      Audio: uni.createInnerAudioContext(),
      AudioExam: null,
      //正在播放音频的实例,
      currentPlayType: "",
      currentPlayIndex: 0,
      touchStartTime: 0,
      touchEndTime: 0,
      canRecord: true,
      contentHeight: 0,
      ifSingle: app.globalData.scene == 1154 ? true : false
    };
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: "AI找工作，两句话的事儿",
      path: "/pages/index/index",
      imageUrl: app.globalData.baseImageUrl + "/worker/mini_share.jpg"
    };
  },
  onShareTimeline: function onShareTimeline() {
    return {
      title: "AI找工作，两句话的事儿",
      path: "/pages/index/index",
      imageUrl: app.globalData.baseImageUrl + "/worker/mini_share.jpg"
    };
  },
  computed: {
    scrollHeight: function scrollHeight() {
      // 根据内容的高度动态设置scroll-view的高度
      return this.contentHeight || 300; // 默认高度或根据实际情况设置
    }
  },
  onLoad: function onLoad(param) {
    var _this2 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _this, menuButtonInfo;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this = _this2;
              console.log(_this2.ifSingle, "ifsingle");
              if (!_this2.ifSingle) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return");
            case 4:
              uni.authorize({
                scope: 'scope.record',
                success: function success(res) {
                  console.log(res, 'success');
                },
                fail: function fail(err) {
                  _this.showSetting = true;
                  console.log(err, 'err');
                }
              });
              _context.next = 7;
              return _this2.getOpenId();
            case 7:
              _this2.openid = _context.sent;
              _context.next = 10;
              return _this2.getHistory();
            case 10:
              _this2.historyList = _context.sent;
              // this.scrollHeight = app.globalData.systemHeight - 4 * this.tabMargin - this.subTabHeight - this
              // 	.marginTop
              _this2.toScroll();
              _this2.creatConnect();
              menuButtonInfo = uni.getMenuButtonBoundingClientRect();
              _this2.titleHeight = menuButtonInfo.height;
              _this2.title = "风铃AI";
              uni.onKeyboardHeightChange(function (res) {
                console.log(res.height, "键盘高度变化");
                if (res.height == 0) {
                  _this2.inputHeight = 0;
                }
              });

              // this.getHistory()
              //录音开始事件
              _this2.manager.onStart(function (e) {
                console.log("录音开始");
                _this2.showInputing = true;
                _this2.recordSecond = 0;
                _this2.secondText = "00:00";
                _this2.startCount();
                _this2.getIconPosition();
              });
              //录音结束事件
              _this2.manager.onStop(function (res) {
                var _this = _this2;
                console.log("录音结束");
                _this2.showInputing = false;
                clearInterval(_this.secondTimer);
                console.log("时间间隔:", _this2.touchEndTime - _this2.touchStartTime);
                if (_this2.touchEndTime - _this2.touchStartTime > 1000) {
                  _this2.handleRecorder(res);
                } else {
                  uni.showToast({
                    title: "长按时间过短",
                    icon: "error"
                  });
                }
              });
              _this2.manager.onError(function (res) {
                var _this = _this2;
                _this2.showInputing = false;
                clearInterval(_this.secondTimer);
                console.log("录音出错：", res.errMsg);
              });
              //音频停止事件
              _this2.Audio.onStop(function (e) {
                _this2.closeAnmition();
              });

              //音频播放结束事件
              _this2.Audio.onEnded(function (e) {
                _this2.closeAnmition();
              });
            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onUnload: function onUnload() {
    this.close();
  },
  mounted: function mounted() {
    var _this3 = this;
    this.$nextTick(function () {
      // 假设获取内容高度的逻辑
      _this3.getContentHeight();
    });
  },
  methods: {
    getContentHeight: function getContentHeight() {
      // 示例中假设获取内容高度的逻辑
      this.contentHeight = app.globalData.systemHeight - 5 * this.tabMargin - this.subTabHeight - this.marginTop; // 假设内容高度是1000px
    },
    showTrans: function showTrans(item, type) {
      if (item.showTranlate) {
        return;
      }
      if (type == "his") {
        this.historyList.forEach(function (el, index) {
          if (el.id == item.id) {
            el.showTranIcon = true;
          }
        });
      } else {
        this.qaList.forEach(function (el, index) {
          if (el.id == item.id) {
            el.showTranIcon = true;
          }
        });
      }
    },
    bodyClick: function bodyClick() {
      this.historyList.forEach(function (el, index) {
        el.showTranIcon = false;
      });
      this.qaList.forEach(function (el, index) {
        el.showTranIcon = false;
      });
    },
    startTrans: function startTrans(item, type) {
      var _this = this;
      item.showTranIcon = false;
      if (type == "his") {
        this.historyList.forEach(function (el, index) {
          if (el.id == item.id) {
            el.showTranlate = true;
          }
        });
      } else {
        if (!item.showTranlate) {
          _this.qaList.forEach(function (el, index) {
            if (el.id == item.id) {
              el.showTransing = true;
            }
          });
          var url = "/ai/voice/" + item.id + "/recognize/result";
          var t = setInterval(function () {
            _this.$request(url).then(function (res) {
              console.log(res, "查询结果");
              if (res.code == 0) {
                if (res.data.content) {
                  item.content = res.data.content;
                  _this.qaList.forEach(function (el, index) {
                    if (el.id == item.id) {
                      el.showTranlate = true;
                      el.showTransing = false;
                    }
                  });
                  clearInterval(t);
                }
              } else {
                clearInterval(t);
                uni.hideLoading();
              }
            });
          }, 1000);
        }
      }
    },
    //控制播放还是暂停音频文件
    handleAudio: function handleAudio(type, item, index) {
      this.AudioExam = item;
      this.currentPlayType = type;
      this.currentPlayIndex = index;
      // this.playAudio(item)
      this.Audio.paused ? this.playAudio(item) : this.stopAudio(item);
    },
    //播放音频
    playAudio: function playAudio(item) {
      var _this4 = this;
      this.Audio.src = item.voice.media.url;
      this.Audio.id = item.id;
      this.Audio.play();
      if (this.currentPlayType == "his") {
        this.historyList.forEach(function (el, index) {
          if (el.msg_type == "voice") {
            if (index == _this4.currentPlayIndex) {
              _this4.historyList[_this4.currentPlayIndex].voice.anmitionPlay = true;
            } else {
              _this4.historyList[index].voice.anmitionPlay = false;
            }
          }
        });
        this.qaList.forEach(function (el, index) {
          if (el.msg_type == "voice") {
            _this4.qaList[index].voice.anmitionPlay = false;
          }
        });
      } else {
        this.qaList.forEach(function (el, index) {
          if (el.msg_type == "voice") {
            if (index == _this4.currentPlayIndex) {
              _this4.qaList[_this4.currentPlayIndex].voice.anmitionPlay = true;
            } else {
              _this4.qaList[index].voice.anmitionPlay = false;
            }
          }
        });
        this.historyList.forEach(function (el, index) {
          if (el.msg_type == "voice") {
            _this4.historyList[index].voice.anmitionPlay = false;
          }
        });
      }

      // item.anmitionPlay = true;
    },
    //停止音频
    stopAudio: function stopAudio(item) {
      var _this5 = this;
      if (this.currentPlayType == "his") {
        this.historyList[this.currentPlayIndex].voice.anmitionPlay = false;
        this.qaList.forEach(function (el, index) {
          if (el.msg_type == "voice") {
            _this5.qaList[index].voice.anmitionPlay = false;
          }
        });
      } else {
        this.qaList[this.currentPlayIndex].voice.anmitionPlay = false;
        this.historyList.forEach(function (el, index) {
          if (el.msg_type == "voice") {
            _this5.historyList[index].voice.anmitionPlay = false;
          }
        });
      }
      // item.anmitionPlay = false;
      this.Audio.src = '';
      this.Audio.stop();
    },
    //关闭动画
    closeAnmition: function closeAnmition() {
      var _this6 = this;
      var id = this.Audio.id;
      var item;
      if (this.currentPlayType == "his") {
        this.historyList.forEach(function (el, index) {
          if (el.msg_type == "voice") {
            if (el.id == id) {
              _this6.historyList[index].voice.anmitionPlay = false;
            }
          }
        });
        // item = this.historyList.find(it => it.id == id);
      } else {
        this.qaList.forEach(function (el, index) {
          if (el.msg_type == "voice") {
            if (el.id == id) {
              _this6.qaList[index].voice.anmitionPlay = false;
            }
          }
        });
        // item = this.qaList.find(it => it.id == id);
      }

      this.currentPlayType = "";
      this.currentPlayIndex = 0;
      // item.anmitionPlay = false;
    },
    // 处理录音数据
    handleRecorder: function handleRecorder(_ref) {
      var tempFilePath = _ref.tempFilePath,
        duration = _ref.duration;
      var _this = this;
      console.log("tempFilePath", tempFilePath);
      console.log("duration", duration);
      this.voiceTime = 0;
      if (duration < 600) {
        uni.showToast({
          title: "说话时间过短",
          icon: "error",
          duration: 2000
        });
        // setTimeout(() => {
        // 	_this.showInputing = false;
        // }, 200)
        return;
      }
      // contentDuration = duration / 1000;
      this.showInputing = false;
      // let showData = {
      // 	id: new Date().getTime(),
      // 	content: "",
      // 	origin: "customer",
      // 	voice: {
      // 		media: {
      // 			key: "",
      // 			url: tempFilePath
      // 		},
      // 		second: duration / 1000,
      // 		anmitionPlay: false
      // 	}
      // }
      // if (!this.cancelRecord) {
      // 	this.qaList.push(showData)
      // }
      if (!this.cancelRecord) {
        wx.getFileSystemManager().readFile({
          filePath: tempFilePath,
          success: function success(res) {
            // res.data是录音文件的二进制数据
            var binaryData = res.data;
            var midata = new Uint8Array(binaryData);
            var time = new Date().getTime();
            var id = uni.getStorageSync("openid") + time;
            // let encoder = new TextEncoder();
            // let binaryId = encoder.encode(id + "@@@")
            var binaryId = _this.stringToUint8Array(id + "@@@");
            // 输出拼接后的 Uint8Array
            console.log(binaryId.length, midata.length);
            // 计算总长度
            var totalLength = binaryId.length + midata.length;
            // 创建一个新的 Uint8Array，长度为所有数组的总和
            var mergedArray = new Uint8Array(totalLength);
            // 使用 set 方法将每个 Uint8Array 的数据填充到新的 Uint8Array 中
            var offset = 0;
            mergedArray.set(binaryId, offset);
            offset += binaryId.length;
            mergedArray.set(midata, offset);
            // offset += data.length;

            var showData = {
              id: id,
              content: "",
              origin: "customer",
              msg_type: "voice",
              voice: {
                media: {
                  key: "",
                  url: tempFilePath
                },
                second: duration / 1000,
                anmitionPlay: false
              },
              showTranIcon: false,
              showTranlate: false,
              showTransing: false
            };
            _this.send(mergedArray.buffer, showData, "voice");
            // 接下来你可以对binaryData进行需要的操作
          },

          fail: function fail(error) {
            console.error('读取文件失败：', error);
          }
        });
      }

      // this.canSend && this.sendMsg(params);
    },
    stringToUint8Array: function stringToUint8Array(str) {
      var utf8 = unescape(encodeURIComponent(str)); // 将字符串编码为 UTF-8
      var len = utf8.length;
      var arr = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        arr[i] = utf8.charCodeAt(i);
      }
      return arr;
    },
    getOpenId: function getOpenId() {
      var _this7 = this;
      var _this = this;
      return new Promise(function (resolve) {
        uni.login({
          success: function success(res) {
            console.log(res, "dyres");
            if (res.errMsg == 'login:ok') {
              var url = "";
              var data = {
                code: res.code
              };
              url = "/auth/worker/wechat/mini/openid";
              _this7.$request(url, data, "POST").then(function (resp) {
                if (resp.code == 0) {
                  uni.setStorage({
                    key: "openid",
                    data: resp.data.open_id
                  });
                  resolve(resp.data.open_id);
                }
              });
            }
          },
          fail: function fail(err) {
            console.log(err, "接口调用失败");
            // uni.showModal({
            // 	title: "登录失败",
            // 	content: "授权登录失败，将无法使用部分功能",
            // 	showCancel: false
            // })
          }
        });
      });
    },
    getIconPosition: function getIconPosition() {
      var _this = this;
      var query = uni.createSelectorQuery().in(_this);
      query.select('.cancel_icon').boundingClientRect(function (data) {
        console.log("querydata", data);
        if (data) {
          console.log('元素的位置信息：', data);
          _this.cancelIconTop = data.top;
          _this.cancelIconBottom = data.top + data.width;
          _this.cancelIconLeft = data.left;
          _this.cancelIconRight = data.right;
        }
      }).exec();
    },
    keyboardHeightChange: function keyboardHeightChange(e) {
      console.log(e, "键盘");
    },
    inputBindFocus: function inputBindFocus(e) {
      if (e.detail.height) {
        this.inputHeight = e.detail.height; //这个高度就是软键盘的高度
      }
    },
    // 录音计时
    startCount: function startCount() {
      this.recordSecond = 0;
      var _this = this;
      this.secondTimer = setInterval(function () {
        console.log("recordSecond:", _this.recordSecond);
        if (_this.recordSecond < 60) {
          _this.recordSecond++;
          if (_this.recordSecond < 10) {
            _this.secondText = "00:0" + _this.recordSecond;
          } else {
            _this.secondText = "00:" + _this.recordSecond;
          }
        } else {
          clearInterval(_this.secondTimer);
          uni.showToast({
            title: "最多发送60s",
            duration: 3000,
            icon: "none"
          });
          _this.stopRecord();
        }
      }, 1000);
    },
    handleTouchMove: function handleTouchMove(e) {
      var exp1 = e.touches[e.touches.length - 1].clientX > this.cancelIconLeft && e.touches[e.touches.length - 1].clientX < this.cancelIconRight;
      var exp2 = e.touches[e.touches.length - 1].clientY > this.cancelIconTop && e.touches[e.touches.length - 1].clientY < this.cancelIconBottom;
      if (exp1 && exp2) {
        this.cancelRecord = true;
      } else {
        this.cancelRecord = false;
      }
    },
    openSetting: function openSetting() {
      var _this = this;
      uni.openSetting({
        success: function success(res) {
          console.log(res.authSetting, "res.authSetting");
          if (res.authSetting['scope.record']) {
            // _this.showInputing = false
            _this.showSetting = false;
            // _this.showRecord = true
          }
        },
        fail: function fail(openErr) {
          console.log(openErr, 'openerr');
        },
        complete: function complete() {
          this.showReAuth = false;
        }
      });
    },
    startRecord: function startRecord(e) {
      this.touchStartTime = e.timeStamp;
      if (!this.Audio.paused) {
        //如果音频正在播放 先暂停。
        this.stopAudio(this.AudioExam);
      }
      uni.vibrateShort({
        success: function success() {
          console.log('success');
        }
      });
      this.startPoint = e.touches[0]; //记录长按时开始点信息，后面用于计算上划取消时手指滑动的距离。
      // this.showInputing = true
      this.cancelRecord = false;
      this.manager.start({
        duration: 60000,
        lang: "zh_CN"
      });
    },
    stopRecord: function stopRecord(e) {
      var _this = this;
      this.touchEndTime = e.timeStamp;
      if (this.touchEndTime - this.touchStartTime > 1000) {
        this.showInputing = false;
        this.manager.stop();
      } else {
        setTimeout(function () {
          _this.manager.stop();
        }, 1000);
      }
    },
    //录音被打断
    cancelVoice: function cancelVoice(e) {
      console.log("touch取消");
      this.voiceTime = 0;
      // this.canSend = false;
      this.manager.stop();
    },
    // changeScreen() {
    // 	this.showFullScreen = !this.showFullScreen
    // 	if (this.showFullScreen) {
    // 		this.scrollHeight = app.globalData.systemHeight - 2 * this.subTabHeight -
    // 			2 * this.tabMargin - this.marginTop
    // 	} else {
    // 		this.scrollHeight = app.globalData.systemHeight * 0.8 - this.tabMargin - 2 * this
    // 			.subTabHeight
    // 	}
    // },
    showAichat: function showAichat() {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var _this;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this8.historyId = 0;
                _this8.historyList = [];
                _this8.loadAllHistory = false;
                _this8.qaList = [];
                _this = _this8;
                uni.authorize({
                  scope: 'scope.record',
                  success: function success(res) {
                    console.log(res, 'success');
                  },
                  fail: function fail(err) {
                    _this.showSetting = true;
                    console.log(err, 'err');
                  }
                });
                _context2.next = 8;
                return _this8.getHistory();
              case 8:
                _this8.historyList = _context2.sent;
                _this8.toScroll();
                _this8.creatConnect();
                // this.initRecord()
              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    openSeepking: function openSeepking() {
      this.enableSpeeking = !this.enableSpeeking;
    },
    toInput: function toInput() {
      this.showRecord = false;
    },
    toVoice: function toVoice() {
      this.showRecord = true;
    },
    doSend: function doSend(e, text) {
      // console.log(text);
      if (e.ctrlKey && e.keyCode === 13) {
        //用户点击了ctrl+enter触发
        this.ques += '\n';
      } else {
        //用户点击了enter触发    执行一些逻辑方法
        if (e !== undefined) {
          //发送消息的方法
          this.sendQuestion();
          // 阻止浏览器默认的敲击回车换行的方法
          e.preventDefault();
        }
      }
    },
    legal: function legal() {
      if (this.age) {
        if (!Number(this.age)) {
          uni.showModal({
            title: "输入不合法，请输入大于18的数字。",
            showCancel: false
          });
        }
      }
    },
    getHistory: function getHistory() {
      uni.showLoading();
      var _this = this;
      return new Promise(function (resolve) {
        var url = "/ai/chat/histories?id=" + _this.historyId;
        _this.$request(url).then(function (res) {
          if (res.code == 0) {
            var newArr = res.data.reverse();
            var len = res.data.length;
            if (len > 0) {
              _this.historyId = res.data[0].id;
            }
            newArr = _this.handleList(newArr);
            resolve(newArr);
          }
        });
      });
    },
    getMoreHistory: function getMoreHistory() {
      var _this9 = this;
      if (!this.loadAllHistory) {
        uni.showLoading();
        var url = "/ai/chat/histories?id=" + this.historyId;
        this.$request(url).then(function (res) {
          if (res.code == 0) {
            uni.hideLoading();
            var resArr = res.data.reverse();
            var newArr = _this9.handleList(resArr);
            _this9.historyList = newArr.concat(_this9.historyList);
            var len = res.data.length;
            if (len > 0) {
              _this9.historyId = res.data[0].id;
            } else {
              _this9.loadAllHistory = true;
            }
          }
        });
      } else {
        uni.showToast({
          title: "已加载全部",
          icon: "none",
          duration: 2000
        });
      }
    },
    // 给聊天记录添加字段
    handleList: function handleList(arr) {
      var len = arr.length;
      for (var i = 0; i < len; i++) {
        if (arr[i].msg_type == "voice") {
          // 语音记录，添加是否播放状态,默认为false
          arr[i].voice.anmitionPlay = false;
          arr[i].showTranlate = false;
          arr[i].showTranIcon = false;
        }
      }
      console.log("arr:", arr);
      return arr;
    },
    toScroll: function toScroll() {
      var _this = this;
      this.$nextTick(function () {
        console.log(123);
        if (_this.qaList.length == 0) {
          var num = _this.historyList.length - 1;
          if (num >= 0) {
            setTimeout(function () {
              _this.scrollView = "his" + num;
              uni.hideLoading();
            }, 500);
          }
        } else {
          var num2 = _this.qaList.length - 1;
          setTimeout(function () {
            _this.scrollView = "qa" + num2;
            uni.hideLoading();
          }, 500);

          // this.scrollView = this.hold
          // console.log(this.scrollView)
        }

        console.log(_this.scrollView, "scrollView");
      });
    },
    sendQuestion: function sendQuestion() {
      var _this = this;
      _this.curStrIndex = 0;
      if (!this.ques) {
        uni.showToast({
          icon: "none",
          title: "想了解什么工作，请告诉我吧"
        });
      } else {
        this.inputHeight = 0;
        if (this.canSend) {
          this.canSend = false;
          var showData = {
            content: this.ques,
            origin: "customer",
            msg_type: "text"
          };
          this.send(this.ques, showData, "");
        }
      }
    },
    creatConnect: function creatConnect() {
      var _this = this;
      if (this.connected || this.connecting) {
        return false;
      }
      this.connecting = true;
      console.log(app.globalData.wssUrl, "wss");
      this.socketTask = uni.connectSocket({
        url: app.globalData.wssUrl,
        header: {
          'content-type': 'application/json',
          "app-id": _url_setting.default.urls.appid,
          "open-id": uni.getStorageSync("openid")
        },
        method: 'GET',
        success: function success(res) {
          // 这里是接口调用成功的回调，不是连接成功的回调，请注意
          console.log("链接成功");
        },
        fail: function fail(err) {
          uni.showModal({
            title: err.errMsg
          });
          // 这里是接口调用失败的回调，不是连接失败的回调，请注意
        }
      });

      this.connect();
      console.log(this.socketTask, "socketTask");
    },
    connect: function connect() {
      var _this10 = this;
      var _this = this;
      this.socketTask.onOpen(function (res) {
        _this10.connecting = false;
        _this10.connected = true;
        _this10.noInput();
        console.log('onOpen', res);
      });
      this.socketTask.onError(function (err) {
        _this10.connecting = false;
        _this10.connected = false;
        _this10.canSend = true;
        uni.hideLoading();
        // uni.showModal({
        // 	content: '连接失败，请稍后再试',
        // 	showCancel: false
        // })
        console.log('onError', err);
        _this10.creatConnect();
      });
      this.socketTask.onMessage(function (res) {
        var respone = JSON.parse(res.data);
        uni.hideLoading();
        _this.showAnswering = false;
        console.log(respone, "respone");
        if (respone.code == 0) {
          if (respone.data.content != "pong" && respone.data.content) {
            _this.qaList.push(respone.data);
            _this.toScroll();
            if (_this.enableSpeeking) {
              _this.formatResultStr(respone.data.content);
            }
          }
        } else {
          uni.showModal({
            title: respone.msg
          });
        }
        _this10.resetData();
      });
      this.socketTask.onClose(function (res) {
        uni.hideLoading();
        _this10.connected = false;
        _this10.socketTask = false;
        console.log('onClose', res);
        clearInterval(_this.timer);
        _this10.creatConnect();
        // let data = {
        // 	content: "链接已关闭，如需重新对话，请重新打开窗口。",
        // 	origin: "system",
        // }
        // this.qaList.push(data)
      });

      console.log('task', this.socketTask);
    },
    resetData: function resetData() {
      this.canSend = true;
      this.placeHolder = "想了解什么工作，请告诉我吧";
      this.cancelRecord = false;
    },
    // 间隔一定时间判断用户是否没有输入
    noInput: function noInput() {
      var _this = this;
      this.timer = setInterval(function () {
        var data = "ping";
        _this.send(data, "", "");
      }, 10000);
    },
    formatResultStr: function formatResultStr(str) {
      if (str) {
        this.speeking(str);
      }
    },
    speeking: function speeking(str) {
      console.log(str, "播报内容");
      plugin.textToSpeech({
        lang: "zh_CN",
        content: str,
        success: function success(res) {
          if (res.retcode == 0) {
            console.log("result", res.result);
            wx.playBackgroundAudio({
              dataUrl: res.filename,
              title: ''
            });
          } else {
            console.warn("翻译失败", res);
          }
        },
        fail: function fail(res) {
          console.log("网络失败", res);
        }
      });
    },
    send: function send(data, param, type) {
      var _this = this;
      this.socketTask.send({
        data: type == "voice" ? data : JSON.stringify({
          content: data
        }),
        success: function success(res) {
          console.log(data, "data");
          if (data != "ping") {
            if (!_this.cancelRecord) {
              _this.showAnswering = true;
              _this.qaList.push(param);
              _this.num++;
              _this.hold = "h" + _this.num;
              _this.toScroll();
              _this.ques = "";
              _this.placeHolder = "正在回答中，请稍后...";
              _this.qaListLen = _this.qaList.length;
            }
          }
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    },
    close: function close() {
      if (this.socketTask && this.socketTask.close) {
        // this.send('{"type":"close"}');
        this.socketTask.close();
      }
    },
    cancel: function cancel() {
      this.showWanner = false;
      this.toScroll();
    },
    noPosition: function noPosition() {
      this.showReAuth = false;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 198:
/*!*********************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_onlychat/pages/test_chat/test_chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./test_chat.vue?vue&type=style&index=0&lang=scss& */ 199);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_test_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 199:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_onlychat/pages/test_chat/test_chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[192,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/test_chat/test_chat.js.map