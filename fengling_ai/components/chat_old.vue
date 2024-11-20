<template>
	<view class="content_body" :style="{paddingTop:top+'px',paddingBottom:bottom+'px'}">
		<!-- 无聊天记录时展示区 -->
		<view class="greeting" v-if="historyList.length == 0 && qaList.length < 2">
			<view class="avatar">
				<image :src="greetingObj.logo?greetingObj.logo:imgUrl+'/worker/channel_default.png'" mode="widthFix">
				</image>
			</view>
			<view class="title">{{greetingObj.title}}</view>
			<view class="tips">{{greetingObj.content}}</view>
		</view>
		<!-- 有聊天对话区 -->
		<view class="chat_area" v-show="historyList.length>0 ||qaList.length > 1">
			<scroll-view class="chat_wrap" :scroll-into-view="scrollView" :style="{height:scrollHeight+'px'}"
				:scroll-y="true" id="chatwrap" @scrolltoupper="getMoreHistory">
				<!-- 历史记录 -->
				<view class="history list">
					<view class="qa_item" v-for="(item,index) in historyList" :key="item.id" :id="'his'+index">
						<view class="line" :class="item.origin == 'customer'?'right':'left'">
							<view class="inline_box">
								<view class="cont" :class="item.msg_type == 'text'?'textcont':''">
									<!-- 文字信息 -->
									<rich-text :nodes="item.content"
										:class="item.origin == 'customer'?'customer_text':'ai_text'"
										v-if="item.msg_type == 'text'"></rich-text>
									<!-- 工作推荐列表 -->
									<view class="job_list" v-if="item.jobs?item.jobs.length>0:false">
										<view class="job_item flex flex-start" v-for="(jobItem,jobIndex) in item.jobs"
											@click.stop="sendMsg(jobItem.name,'job')">
											<view class="circle"></view>
											<view class="job_text">{{jobItem.name}}</view>
										</view>
									</view>
									<!-- 报名信息 -->
									<!-- <view class="apply_user_info" v-if="item.apply_user_info">
										<view class="apply_line flex flex-start">
											<view class="tit flex flex-start">
												<view class="circle"></view>
												<view class="">姓名：</view>
											</view>
											<view class="user_info_text">张三</view>
										</view>
										<view class="apply_line flex flex-start">
											<view class="tit flex flex-start">
												<view class="circle"></view>
												<view class="">性别：</view>
											</view>
											<view class="user_info_text">男</view>
										</view>
										<view class="apply_line flex flex-start">
											<view class="tit flex flex-start">
												<view class="circle"></view>
												<view class="">年龄：</view>
											</view>
											<view class="user_info_text">30</view>
										</view>
										<view class="apply_line flex flex-start">
											<view class="tit flex flex-start">
												<view class="circle"></view>
												<view class="">民族：</view>
											</view>
											<view class="user_info_text">汉族</view>
										</view>
										<view class="apply_line flex flex-start">
											<view class="tit flex flex-start">
												<view class="circle"></view>
												<view class="">手机号：</view>
											</view>
											<view class="user_info_text">15105130214</view>
										</view>
									</view> -->
									<view class="voice_line flex flex_end">
										<view class="trans" v-show="item.showTranIcon"
											@click.stop="startTrans(item,'his')">
											<image :src="imgUrl+'/worker/ic_trans.png'" mode="widthFix"></image>
										</view>
										<!-- 语音消息 -->
										<view class="voice_wrap flex flex_end" v-if="item.msg_type == 'voice'"
											@tap.stop="handleAudio('his',item,index)" @longpress="showTrans(item,'his')"
											:style="{width:Math.ceil(item.voice.second * 20)+'px',maxWidth:'calc(100% - 136rpx)',minWidth:'60px'}">

											<view class="seconds">{{Math.ceil(item.voice.second)}}'</view>
											<view class="voice_icon" :class="[
													{ voice_icon_right: true },
													{ voice_icon_right_an: item.voice.anmitionPlay }
												]"></view>
										</view>
									</view>
									<rich-text :nodes="item.content" class="trans_result text"
										v-if="item.showTranlate"></rich-text>
								</view>
								<!-- 您还可以这样问 -->
								<!-- <view class="may_ask" v-if="item.may_ask?item.may_ask.length>0:false">
									<view class="tit">您还可以这样问：</view>
									<view class="may_ask_list">
										<view class="ask_item flex flex-start"
											v-for="(askItem,askIndex) in item.may_ask" :key="askIndex"
											@click.stop="sendMsg(askItem)">
											<view class="text">{{askItem}}</view>
										</view>
									</view>
								</view> -->

							</view>
						</view>
					</view>
					<view class="fenge flex flex_around" id="fenge_line" v-show="historyList.length>0">
						<view class="fgline"></view>
						<view class="text">以上是历史记录</view>
						<view class="fgline"></view>
					</view>
				</view>

				<view class="list" id="listWrap" v-if="qaList.length!=0">
					<!-- <view class="list" id="listWrap" :style="{paddingBottom:subTabHeight+30+'px',boxSizing:'border-box'}"> -->
					<view class="qa_item" v-for="(item,index) in qaList" :key="item.id" :id="'qa'+index">
						<view class="line" :class="item.origin == 'customer'?'right':'left'">
							<view class="inline_box">
								<view class="cont" :class="item.msg_type == 'text'?'textcont':''">
									<!-- 文字信息 -->
									<!-- 	<rich-text :nodes="item.printStr"
										:class="item.origin == 'customer'?'customer_text':'ai_text'"
										v-if="item.msg_type == 'text' && item.origin != 'customer'"></rich-text> -->
									<rich-text :nodes="item.content"
										:class="item.origin == 'customer'?'customer_text':'ai_text'"
										v-if="item.msg_type == 'text'"></rich-text>
									<!-- 工作推荐列表 -->
									<view class="job_list" v-if="item.jobs?item.jobs.length>0:false">
										<view class="job_item flex flex-start" v-for="(jobItem,jobIndex) in item.jobs"
											@click.stop="sendMsg(jobItem.name,'job')">
											<view class="circle"></view>
											<view class="job_text">{{jobItem.name}}</view>
										</view>
									</view>
									<view class="voice_line flex flex_end">
										<view class="trans" v-show="item.showTranIcon"
											@click.stop="startTrans(item,'qa')">
											<image :src="imgUrl+'/worker/ic_trans.png'" mode="widthFix"></image>
										</view>
										<!-- 语音消息 -->
										<view class="voice_wrap flex flex_end" v-if="item.msg_type == 'voice'"
											@tap.stop="handleAudio('qa',item,index)" @longpress="showTrans(item,'qa')"
											:style="{width:Math.ceil(item.voice.second * 20)+'px',maxWidth:'calc(100% - 136rpx)',minWidth:'60px'}">

											<view class="seconds">{{Math.ceil(item.voice.second)}}'</view>
											<view class="voice_icon" :class="[
														{ voice_icon_right: true },
														{ voice_icon_right_an: item.voice.anmitionPlay }
													]"></view>
										</view>
									</view>
									<rich-text :nodes="item.content" class="trans_result text"
										v-if="item.showTranlate"></rich-text>
								</view>
								<!-- 您还可以这样问 -->
								<view class="may_ask"
									v-if="item.may_ask?(item.may_ask.length>0&&index == qaList.length -1):false">
									<!-- <view class="tit">{{item.printMayAsk.title}}</view> -->
									<view class="may_ask_list">
										<view class="ask_item flex flex-start"
											v-for="(askItem,askIndex) in item.may_ask" :key="askIndex"
											@click.stop="sendMsg(askItem)">
											<view class="text">{{askItem}}</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>

				</view>
				<view class="list">
					<view class="qa_item" :style="{paddingBottom: '20rpx',display:answering?'block':'none'}"
						id="answering">
						<view class="line left">
							<view class="inline_box flex" style="align-items: center;">
								<view class="cont flex " style="width:400rpx;text-align: center;">
									<text>正在努力思考</text>
									<image :src="imgUrl+'/worker/answering.gif'" mode="widthFix"
										style="width:100rpx;margin-left:10rpx;margin-right: 0; vertical-align: middle;">
									</image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 提示区 -->
		<view class="tips_wrap" :style="{bottom:'260rpx'}" v-if="historyList.length == 0 && qaList.length < 2">
			<view class="title">您可以这样问：</view>
			<view class="tip_list">
				<view class="item" v-for="(item,index) in tipList" :key="index" @click="sendMsg(item.text,'tip')">
					<view class="text">{{item.text}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import commonMethods from "@/common/commMethods.js"
	const app = getApp();
	export default {
		name: "welcome",
		props: ["top", "bottom", "historyList", "qaList", "scrollHeight", "answering", "greetingObj"],
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				tipList: [{
					text: "我想找个长白班的工作。"
				}, {
					text: "请问哪些工作是提供吃住的？"
				}, {
					text: "有没有适合我的工作，轻松一点的。"
				}],
				historyId: 0,
				loadAllHistory: false,
				scrollView: "fenge_line",
				Audio: uni.createInnerAudioContext(),
				AudioExam: null, //正在播放音频的实例,
				currentPlayType: "",
				currentPlayIndex: 0,

				// printStr: ""
			};
		},
		async created() {

			//音频停止事件
			this.Audio.onStop(e => {
				this.closeAnmition();
			});

			//音频播放结束事件
			this.Audio.onEnded(e => {
				this.closeAnmition();
			});
		},
		watch: {
			// 深度监听list数组的变化
			qaList: {
				handler: function(newVal, oldVal) {
					// 当list变化时，会调用这个handler函数
					console.log('list changed:', newVal);
					if (newVal.length > 2) {

					}
					// let msg = newVal[newVal.length - 1].content
					this.toScroll()
				},
				deep: true, // 开启深度监听
			},
			scrollHeight(newVal) {
				console.log("新窗口高度：", newVal)
				this.toScroll()
			},
			answering(newVal) {
				if (newVal) {
					this.toScroll()
				}
			}
		},
		methods: {
			getMoreHistory() {
				this.$emit("moreHis")
			},
			sendMsg(msg, type) {
				let obj = {
					msg: msg,
					type: type
				}
				this.$emit("sendMsg", obj)
			},
			//控制播放还是暂停音频文件
			handleAudio(type, item, index) {
				this.AudioExam = item;
				this.currentPlayType = type
				this.currentPlayIndex = index
				// this.playAudio(item)
				this.Audio.paused ? this.playAudio(item) : this.stopAudio(item);
			},
			//播放音频
			playAudio(item) {
				this.Audio.src = item.voice.media.url;
				this.Audio.id = item.id;
				this.Audio.play();
				if (this.currentPlayType == "his") {
					this.historyList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							if (index == this.currentPlayIndex) {
								this.historyList[this.currentPlayIndex].voice.anmitionPlay = true
							} else {
								this.historyList[index].voice.anmitionPlay = false
							}
						}

					})
					this.qaList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							this.qaList[index].voice.anmitionPlay = false
						}

					})

				} else {
					this.qaList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							if (index == this.currentPlayIndex) {
								this.qaList[this.currentPlayIndex].voice.anmitionPlay = true
							} else {
								this.qaList[index].voice.anmitionPlay = false
							}
						}

					})
					this.historyList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							this.historyList[index].voice.anmitionPlay = false
						}

					})

				}


				// item.anmitionPlay = true;
			},
			//停止音频
			stopAudio(item) {
				if (this.currentPlayType == "his") {
					this.historyList[this.currentPlayIndex].voice.anmitionPlay = false
					this.qaList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							this.qaList[index].voice.anmitionPlay = false
						}

					})
				} else {
					this.qaList[this.currentPlayIndex].voice.anmitionPlay = false
					this.historyList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							this.historyList[index].voice.anmitionPlay = false
						}

					})
				}
				// item.anmitionPlay = false;
				this.Audio.src = '';
				this.Audio.stop();
			},
			stopCurAudio() {
				this.Audio.src = '';
				this.Audio.stop();
			},
			//关闭动画
			closeAnmition() {
				const id = this.Audio.id;
				let item;
				if (this.currentPlayType == "his") {
					this.historyList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							if (el.id == id) {
								this.historyList[index].voice.anmitionPlay = false
							}
						}

					})
					// item = this.historyList.find(it => it.id == id);
				} else {
					this.qaList.forEach((el, index) => {
						if (el.msg_type == "voice") {
							if (el.id == id) {
								this.qaList[index].voice.anmitionPlay = false
							}
						}


					})
					// item = this.qaList.find(it => it.id == id);
				}
				this.currentPlayType = ""
				this.currentPlayIndex = 0
				// item.anmitionPlay = false;
			},

			formatResultStr(str) {
				if (str) {
					this.speeking(str)
				}
			},
			speeking(str) {
				console.log(str, "播报内容")
				plugin.textToSpeech({
					lang: "zh_CN",
					content: str,
					success: function(res) {
						if (res.retcode == 0) {
							console.log("result", res.result)
							wx.playBackgroundAudio({
								dataUrl: res.filename,
								title: '',
							})
						} else {
							console.warn("翻译失败", res)
						}
					},
					fail: function(res) {
						console.log("网络失败", res)
					}
				})
			},

			showTrans(item, type) {
				if (item.showTranlate) {
					return
				}
				if (type == "his") {
					this.historyList.forEach((el, index) => {
						if (el.id == item.id) {
							el.showTranIcon = true
						}
					})
				} else {
					this.qaList.forEach((el, index) => {
						if (el.id == item.id) {
							el.showTranIcon = true
						}
					})
				}
			},
			startTrans(item, type) {
				let _this = this
				item.showTranIcon = false
				if (type == "his") {
					this.historyList.forEach((el, index) => {
						if (el.id == item.id) {
							el.showTranlate = true
						}
					})
				} else {
					if (!item.showTranlate) {
						_this.qaList.forEach((el, index) => {
							if (el.id == item.id) {
								el.showTransing = true
							}
						})
						let url = "/ai/voice/" + item.id + "/recognize/result"
						let t = setInterval(function() {
							_this.$request(url).then(res => {
								console.log(res, "查询结果")
								if (res.code == 0) {
									if (res.data.content) {
										item.content = res.data.content
										_this.qaList.forEach((el, index) => {
											if (el.id == item.id) {
												el.showTranlate = true
												el.showTransing = false
											}
										})
										clearInterval(t)
									}
								} else {
									clearInterval(t)
									uni.hideLoading()
								}
							})
						}, 1000)
					}

				}
			},
			toScroll() {
				let _this = this
				_this.scrollView = ""
				this.$nextTick(() => {
					if (this.answering) {
						console.log("正在回答")
						_this.scrollView = "answering"
					} else {
						if (_this.qaList.length == 0) {
							console.log("qalist为0")
							var num = _this.historyList.length;
							if (num > 0) {
								setTimeout(function() {
									_this.scrollView = "his" + (_this.historyList.length - 1)
									uni.hideLoading()
								}, 500)

							}

						} else {
							console.log("qalist长度大于0")
							var num2 = _this.qaList.length - 1;
							setTimeout(function() {
								_this.scrollView = "qa" + num2
								uni.hideLoading()
							}, 500)
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.voice_icon {
		height: 34rpx;
		width: 34rpx;
		background-repeat: no-repeat;
		background-size: 100%;
		flex-shrink: 0;
	}

	.voice_icon_right {
		background-image: url($back-ground-url+'/worker/voice-left-3.png');
		margin-left: 10rpx;
	}

	.voice_icon_right_an {
		animation: voiceAn_right 1s linear alternate infinite;
	}

	@keyframes voiceAn_right {
		0% {
			background-image: url($back-ground-url+'/worker/voice-left-1.png');
		}

		50% {
			background-image: url($back-ground-url+'/worker/voice-left-2.png');
		}

		100% {
			background-image: url($back-ground-url+'/worker/voice-left-3.png');
		}
	}

	/* 定义过渡效果 */
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	.circle {
		width: 12rpx;
		height: 12rpx;
		background: #020202;
		border-radius: 50%;
		margin-right: 15rpx;
	}

	.apply_user_info {
		padding: 0 30rpx 30rpx 30rpx;
		box-sizing: border-box;

		.apply_line {
			margin-top: 15rpx;
			font-weight: 400;
			font-size: 31rpx;

			.tit {
				color: #020202;
			}

			.user_info_text {
				color: #333333;
			}
		}
	}

	.job_list {
		padding: 0 20rpx 40rpx 20rpx;
		box-sizing: border-box;

		.job_item {
			height: 77rpx;
			line-height: 77rpx;
			background: #FFFFFF;
			border-radius: 38rpx;
			padding: 0 59rpx;
			box-sizing: border-box;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			margin-top: 19rpx;



			.job_text {
				font-weight: 400;
				font-size: 31rpx;
				color: #020202;
			}
		}
	}

	.may_ask {
		margin-top: 19rpx;


		.tit {
			font-weight: 400;
			font-size: 27rpx;
			color: #798DAA;
			margin-bottom: 10rpx;
		}

		.ask_item {
			margin-bottom: 18rpx;

			.text {

				padding: 0 20rpx;
				box-sizing: border-box;
				height: 56rpx;
				line-height: 56rpx;
				background: #F5F8FF;
				border-radius: 63rpx;
				font-weight: 400;
				font-size: 27rpx;
				color: #213B56;
			}
		}
	}

	.content_body {
		background: url($back-ground-url+"/worker/new/chat_bg.png") no-repeat;
		background-size: cover;
		padding: 0 28rpx;
		box-sizing: border-box;

		.greeting {
			margin-top: 30rpx;

			.avatar {
				text-align: center;
				width: 280rpx;
				height: 280rpx;
				margin: 0 auto;
				border-radius: 50%;
				overflow: hidden;

				image {
					width: 280rpx;
				}
			}

			.title {
				font-weight: 400;
				font-size: 35rpx;
				color: #020202;
				text-align: center;
				margin-bottom: 38rpx;
				margin-top: 16rpx;
			}

			.tips {
				font-weight: 400;
				font-size: 31rpx;
				color: #223756;
				line-height: 54rpx;
				background: #F1F8FF;
				border-radius: 4rpx 44rpx 44rpx 44rpx;
				padding: 23rpx 30rpx;
				box-sizing: border-box;
			}
		}

		.fenge {
			margin-top: 20rpx;

			.fgline {
				width: calc(50% - 110rpx);
				border-top: 2rpx solid #C2D3E5;
			}

			.text {
				width: 200rpx;
				font-weight: 400;
				font-size: 26rpx;
				color: #93A4B7;
				text-align: center;
			}
		}

		.tips_wrap {
			position: fixed;
			left: 28rpx;

			.title {
				font-weight: 600;
				font-size: 30rpx;
				color: #2F2F2F;
				margin-bottom: 16rpx;
			}

			.tip_list {
				.item {
					display: flex;
					margin-bottom: 12rpx;

					.text {
						height: 58rpx;
						line-height: 58rpx;
						background: rgba(255, 255, 255, 0.6);
						border-radius: 63rpx;
						border: 1rpx solid #D7D9EE;
						padding: 0 40rpx 0 20rpx;
						box-sizing: border-box;
						font-weight: 400;
						font-size: 28rpx;
						color: #213B56;
					}
				}
			}
		}

		.chat_wrap {
			padding: 20rpx 0rpx;
			box-sizing: border-box;

			.list {
				// padding: 30rpx;

				.qa_item {
					transition: all 1s;

					.line {
						margin-top: 38rpx;
						text-align: right;

						image {
							margin-left: 20rpx;
						}

						.inline_box {
							// width: calc(100% - 85rpx);

							.ai_name {
								color: #606166;
								margin-bottom: 20rpx;

								image {
									width: 65rpx;
									height: 65rpx;
									flex-shrink: 0;
									vertical-align: top;
									margin-left: 0;
									border-radius: 50%;
									transform: rotateY(-180deg);
								}
							}



							.cont {
								display: inline-block;
								max-width: 100%;
								overflow: hidden;
								font-size: 31rpx;
								line-height: 48rpx;
								font-family: "微软雅黑";
								// background: #106afa;
								text-align: left;
								transition: height 2s;

								.ai_text,
								.customer_text {
									padding: 26rpx 30rpx;
									// border-radius: 16rpx;
									box-sizing: border-box;
									display: block;
								}



							}
						}

						&.left {
							.inline_box {
								justify-content: flex-start;
								align-items: start;
							}

							text-align: left;

							image {
								margin-right: 20rpx;
							}

							.cont {
								background: #F1F8FF;
								border-radius: 4rpx 35rpx 35rpx 35rpx;
								color: #213B56;

							}
						}

						&.right {
							display: flex;
							justify-content: flex-end;

							.inline_box {
								align-items: start;
								justify-content: flex-end;

								.cont {
									width: 100%;
									position: relative;
									overflow: visible;
									// background: #216FF9;
									// color: #fff;

									&.textcont {
										width: auto;
										max-width: 100%;
									}

									// display: flex;
									// justify-content: flex-end;
									// flex-wrap: wrap;
									// align-items: center;

									.customer_text {
										background: #216FF9;
										border-radius: 35rpx 35rpx 4rpx 35rpx;
										// background: linear-gradient(117deg, #4F85FD 0%, #72BAFF 100%);
										// color: #213B56;
										color: #fff;
										font-weight: 600;
									}

									.trans {
										image {
											width: 120rpx !important;
											margin-right: 16rpx;
											margin-left: 0;
											flex-shrink: 0;
										}

										// position: absolute;
										// bottom: 100%;
										// right: 0;
										// background: #e4f2fd;
										// width: 68rpx;
										// height: 68rpx;
										// line-height: 68rpx;
										// text-align: center;
										// border-radius: 50%;
										// // padding: 6rpx 10rpx;
										// font-size: 26rpx;
										// color: #0548fd;
										// z-index: 130;
										// transform: translateY(-3px);
									}
								}

								.voice_wrap {

									text-align: center;
									background: #216FF9;
									border-radius: 35rpx 35rpx 4rpx 35rpx;
									padding: 28rpx;
									// border-radius: 16rpx;
									box-sizing: border-box;
									color: #fff;

									image {
										width: 20rpx !important;
										vertical-align: middle;
										flex-shrink: 0;

										&.gif {
											width: 50rpx !important;
										}
									}

								}

								.trans_result {
									// width: 100%;
									padding: 20rpx;
									border-radius: 16rpx;
									box-sizing: border-box;
									// display: block;
									background: #fff;
									margin-top: 10rpx;
									font-size: 28rpx;
									// flex-shrink: 0;
									float: right;

									image {
										width: 80rpx;
									}
								}
							}

							// .cont {
							// 	background: linear-gradient(117deg, #4F85FD 0%, #72BAFF 100%);
							// 	color: #fff;
							// }
						}
					}
				}
			}
		}
	}
</style>