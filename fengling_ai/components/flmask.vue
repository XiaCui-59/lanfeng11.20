<template>
	<view class="fl_mask">
		<view class="fl_inner_mask" @click="closeFengling">
			<view class="fl_inner">
				<view class="top flex flex-start">
					<view class="ai_logo">
						<image :src="imgUrl+'/worker/new/fl_inner_ai.png'" mode="widthFix"></image>
					</view>
					<view class="tit">看看这里有你喜欢的工作吗？</view>
				</view>
				<scroll-view scroll-y="true" style="height:800rpx;">
					<view class="bot">
						<view class="list">
							<view class="item_wrap flex " v-for="(item,index) in listTest" :key="index">
								<view class="item" :class="item.showAnimation?'animation':''"
									@click="sendMsg(item,'job')">{{item.text}}</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp();
	export default {
		name: "flmask",
		data() {
			return {
				imgUrl: app.globalData.baseImageUrl,
				listTest: app.globalData.jobList,
				currentIndex: 0
			};
		},
		mounted() {
			this.setAnimation()
		},
		methods: {
			setAnimation() {
				let _this = this
				let len = this.listTest.length
				let timer = setInterval(function() {
					if (_this.currentIndex < len) {
						let obj = {
							text: _this.listTest[_this.currentIndex].text,
							job_id: _this.listTest[_this.currentIndex].job_id,
							showAnimation: true
						}
						_this.$set(_this.listTest, _this.currentIndex, JSON.parse(JSON.stringify(obj)))
						_this.currentIndex++
					} else {
						_this.currentIndex = 0
						clearInterval(timer)
					}
				}, 200)
			},
			closeFengling() {
				this.$emit("closeFengling")
			},
			sendMsg(item, type) {
				console.log("点击推荐：", item)
				let obj = {
					msg: item.text + "（职位ID：" + item.job_id + "）",
					type: type,
					job_id: item.job_id
				}
				this.$emit("sendMsg", obj)
			},
		}
	}
</script>

<style lang="scss">
	@keyframes itemMove {
		0% {
			transform: translateY(100%);
		}

		// 50% {
		// 	opacity: 0.5;
		// }

		100% {
			transform: translateY(0px);
			opacity: 1;
		}
	}

	.fl_mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1000;
		background: rgba(0, 0, 0, .4);

		.fl_inner_mask {
			width: 100%;
			height: 100%;
			background: linear-gradient(48deg, rgba(33, 111, 249, 0.3) 0%, rgba(0, 57, 78, 0.3) 100%);
		}

		.fl_inner {
			position: absolute;
			width: 100%;
			bottom: 200rpx;

			.top {
				margin-bottom: 40rpx;

				.ai_logo {
					image {
						width: 105rpx;
					}

					margin-right: 16rpx;
				}

				.tit {
					font-size: 35rpx;
					color: #FFFFFF;
					background: linear-gradient(332deg, #D8D8D8 0%, #00B2FF 100%);
					/*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
					-webkit-background-clip: text;
					/*将设置的背景颜色限制在文字中*/
					-webkit-text-fill-color: transparent;
					/*给文字设置成透明*/
				}
			}

			.bot {
				padding-left: 36rpx;
				box-sizing: border-box;

				.list {
					.item {
						height: 94rpx;
						line-height: 94rpx;
						background: #FFFFFF;
						border-radius: 48rpx;
						padding: 0 32rpx;
						margin-bottom: 19rpx;
						font-weight: 400;
						font-size: 32rpx;
						color: #213968;
						opacity: 0;
						// animation: itemOpacity 1s ease-in-out forwards;
						transition: all 1s;

						&.animation {
							animation: itemMove 0.6s ease-in-out forwards;
						}
					}
				}
			}
		}
	}
</style>