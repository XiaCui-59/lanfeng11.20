(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/htz-image-upload/htz-image-upload"],{"62f3":function(e,t,i){"use strict";i.r(t);var a=i("9667"),o=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=o.a},"6c9e":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,i=(e._self._c,e.__map(e.uploadLists,(function(t,i){var a=e.__get_orig(t),o=e.isVideo(t),n=o?e.getFileUrl(t):null,u=o?e.getFileUrl(t):null,s=o?null:e.getFileUrl(t),c=o?null:e.getFileUrl(t);return{$orig:a,m0:o,m1:n,m2:u,m3:s,m4:c}}))),a=e.uploadLists.length<e.max&&e.add;e.$mp.data=Object.assign({},{$root:{l0:i,g0:a}})},o=[]},"74c3":function(e,t,i){"use strict";i.r(t);var a=i("6c9e"),o=i("62f3");for(var n in o)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("e81e"),i("77e0");var u=i("828b"),s=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=s.exports},"77e0":function(e,t,i){"use strict";var a=i("9513"),o=i.n(a);o.a},9513:function(e,t,i){},9667:function(e,t,i){"use strict";(function(e,a){var o=i("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("7ca3"));function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}var s=getApp(),c={name:"htz-image-upload",props:{max:{type:Number,default:1},chooseNum:{type:Number,default:9},name:{type:String,default:"file"},dataType:{type:Number,default:0},remove:{type:Boolean,default:!0},add:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},sourceType:{type:Array,default:function(){return["album","camera"]}},action:{type:String,default:""},headers:{type:Object,default:function(){}},formData:{type:Object,default:function(){}},compress:{type:Boolean,default:!0},quality:{type:Number,default:80},value:{type:Array,default:function(){return[]}},uploadSuccess:{default:function(e){return{success:!1,url:""}}},mediaType:{type:String,default:"image"},maxDuration:{type:Number,default:60},camera:{type:String,default:"back"},appVideoPoster:{type:String,default:"/static/htz-image-upload/play.png"}},data:function(){return{imgUrl:s.globalData.baseImageUrl,uploadLists:[],mediaTypeData:["image","video","all"],previewVideoSrc:""}},mounted:function(){this.$nextTick((function(){this.uploadLists=this.value,-1==this.mediaTypeData.indexOf(this.mediaType)&&e.showModal({title:"提示",content:"mediaType参数不正确",showCancel:!1,success:function(e){e.confirm||e.cancel}})}))},watch:{value:function(e,t){this.uploadLists=e}},methods:{isVideo:function(e){var t=!1;return(!/.(gif|jpg|jpeg|png|gif|jpg|png)$/i.test(e)&&0==this.dataType||1==this.dataType&&1==e.type)&&(t=!0),t},getFileUrl:function(e){var t=e;return 1==this.dataType&&(t=e.url),t},previewVideo:function(e){this.previewVideoSrc=e},previewVideoClose:function(){this.previewVideoSrc=""},imgDel:function(t){var i=this;e.showModal({title:"提示",content:"您确定要删除么?",success:function(e){if(e.confirm){var a=i.uploadLists[t];i.uploadLists.splice(t,1),i.$emit("input",i.uploadLists),i.$emit("imgDelete",{del:a,tempFilePaths:i.uploadLists})}else e.cancel}})},imgPreview:function(t){var i=this,a=[];this.uploadLists.forEach((function(e){i.isVideo(e)||a.push(i.getFileUrl(e))})),e.previewImage({urls:a,current:t,loop:!0})},chooseFile:function(){var t=this;if(this.disabled)return!1;switch(this.mediaTypeData.indexOf(this.mediaType)){case 1:this.videoAdd();break;case 2:e.showActionSheet({itemList:["相册","视频"],success:function(e){1==e.tapIndex?t.videoAdd():0==e.tapIndex&&t.imgAdd()},fail:function(e){console.log(e.errMsg)}});break;default:this.imgAdd();break}},videoAdd:function(){var t=this,i=Math.abs(this.uploadLists.length-this.max);this.chooseNum>i||this.chooseNum;e.chooseVideo({compressed:this.compress,sourceType:this.sourceType,camera:this.camera,maxDuration:this.maxDuration,success:function(e){t.chooseSuccessMethod([e.tempFilePath],1)}})},imgAdd:function(){var t=this,i=Math.abs(this.uploadLists.length-this.max),a=this.chooseNum>i?i:this.chooseNum;e.chooseImage({count:a,sizeType:["original","compressed"],sourceType:this.sourceType,success:function(e){t.chooseSuccessMethod(e.tempFilePaths,0)}})},appCamera:function(){var e=this,t=plus.camera.getCamera(),i=t.supportedImageResolutions[0],a=t.supportedImageFormats[0];t.captureImage((function(t){e.chooseSuccessMethod([t],0)}),(function(e){console.log("Capture image failed: "+e.message)}),{resolution:i,format:a})},appGallery:function(e){var t=this;plus.gallery.pick((function(e){t.chooseSuccessMethod(e.files,0)}),(function(e){}),{filter:"image",multiple:!0,maximum:e})},chooseSuccessMethod:function(e,t){""==this.action?this.$emit("chooseSuccess",e,t):1==t?this.imgUpload(e,t):this.compress?this.imgCompress(e,t):this.imgUpload(e,t)},imgCompress:function(t,i){var a=this;e.showLoading({title:"压缩中..."});var o=[],n=[];t.forEach((function(t,i){o.push(new Promise((function(i,o){e.compressImage({src:t,quality:a.quality,success:function(e){n.push(e.tempFilePath),i(e.tempFilePath)},fail:function(e){o(e)},complete:function(){}})})))})),Promise.all(o).then((function(t){e.hideLoading(),a.imgUpload(t,i)})).catch((function(t,i){e.hideLoading()}))},imgUpload:function(t,i){var a=this;if("uniCloud"!=this.action){e.showLoading({title:"上传中"});var o=[];t.forEach((function(t,s){o.push(new Promise((function(o,s){e.uploadFile({url:a.action,filePath:t,name:a.name,fileType:"image",formData:a.formData,header:a.headers,success:function(e){if(e.fileType=i,"function"==typeof a.uploadSuccess){var t=a.uploadSuccess(e);if(t.success){"value",0==a.dataType?a["value"].push(t.url):a["value"].push(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){(0,n.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({type:i,url:t.url},t)),a.$emit("input",a.uploadLists)}}o(e),a.$emit("uploadSuccess",e)},fail:function(e){console.log(e),s(e),a.$emit("uploadFail",e)},complete:function(){}})})))})),Promise.all(o).then((function(t){e.hideLoading()})).catch((function(t,i){e.hideLoading(),a.$emit("uploadFail",t)}))}else this.uniCloudUpload(t,i)},uniCloudUpload:function(t,i){var o=this;e.showLoading({title:"上传中"}),console.log("uniCloudUpload",t);var n=[];t.forEach((function(e,t){n.push(new Promise((function(t,n){a.uploadFile({filePath:e,cloudPath:o.guid()+"."+o.getFileType(e,i),success:function(e){e.success&&t(e.fileID)},fail:function(e){console.log(e),n(e)},complete:function(){}})})))})),Promise.all(n).then((function(t){e.hideLoading(),a.getTempFileURL({fileList:t,success:function(e){e.fileList.forEach((function(e){o.value.push(e.tempFileURL),o.$emit("input",o.value)}))},fail:function(){},complete:function(){}})})).catch((function(t,i){e.hideLoading()}))},getFileType:function(e,t){var i=e.split(".").pop().toLowerCase();return this.compress&&(i=0==t?"jpg":"mp4"),i},guid:function(){return"xxxxxxxx-date-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,i="x"==e?t:3&t|8;return i.toString(16)})).replace(/date/g,(function(e){return Date.parse(new Date)}))},canvasDataURL:function(e,t,i){var a=new Image;a.src=e,a.onload=function(){var e=this.width,a=this.height,o=e/a;e=t.width||e,a=t.height||e/o;var n=.8,u=document.createElement("canvas"),s=u.getContext("2d"),c=document.createAttribute("width");c.nodeValue=e;var r=document.createAttribute("height");r.nodeValue=a,u.setAttributeNode(c),u.setAttributeNode(r),s.drawImage(this,0,0,e,a),t.quality&&t.quality<=1&&t.quality>0&&(n=t.quality);var l=u.toDataURL("image/jpeg",n);i(l)}}}};t.default=c}).call(this,i("df3c")["default"],i("861b")["default"])},d483:function(e,t,i){},e81e:function(e,t,i){"use strict";var a=i("d483"),o=i.n(a);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/htz-image-upload/htz-image-upload-create-component',
    {
        'components/htz-image-upload/htz-image-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("74c3"))
        })
    },
    [['components/htz-image-upload/htz-image-upload-create-component']]
]);
