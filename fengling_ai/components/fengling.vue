<template>
	<view class="content_body" :style="{paddingTop:top+'px',paddingBottom:bottom+'px'}">
		<!-- 问候区 -->
		<view class="greeting" v-show="!weatherInfo" :class="systemHeight < 750?'smallScreen':''">
			<view class="title">找工作，三两句话就行！</view>
			<view class="tips">有工作需求跟AI客服说，她都能解决</view>
		</view>
		<!-- 天气区 -->
		<view class="greeting" v-if="weatherInfo" :class="systemHeight < 750?'smallScreen':''">
			<view class="top flex flex_btween">
				<view class="title">{{greetingTitle}}</view>
				<view class="wd_wrap flex flex_end">
					<image :src="imgUrl+'/worker/new/ic_weather_qing.png'" mode="widthFix"
						v-if="weatherInfo.infos.weather.indexOf('晴') != -1"></image>
					<image :src="imgUrl+'/worker/new/ic_weather_yin.png'" mode="widthFix"
						v-if="weatherInfo.infos.weather.indexOf('阴') != -1 || weatherInfo.infos.weather.indexOf('云') != -1">
					</image>
					<image :src="imgUrl+'/worker/new/ic_weather_yu.png'" mode="widthFix"
						v-if="weatherInfo.infos.weather.indexOf('雨') != -1"></image>
					<view class="wd">{{weatherInfo.infos.temperature}} ℃</view>
				</view>
			</view>
			<view class="tips">
				{{weatherInfo.city?"您所在的"+weatherInfo.city+weatherInfo.district:""}}今日天气{{weatherInfo.infos.weather}}，气温{{weatherInfo.infos.temperature}}℃，{{weatherInfo.infos.temperature >= 30?"有点热，注意防暑。":(weatherInfo.infos.temperature < 30 && weatherInfo.infos.temperature > 20?"温度适宜。":"有点凉，注意保暖。")}}
			</view>
		</view>
		<!-- 热招区 -->
		<view class="hot">
			<view class="title">
				<image :src="imgUrl+'/worker/new/title.png'" mode="widthFix"></image>
				<text>今日热招</text>
			</view>
			<swiper class="swiper" circular :autoplay="true" :interval="4000" :style="{height:swiperHeight+'px'}"
				@change="onSwiperChange">
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<view class="list">
							<view class="item" :class="systemHeight < 750?'smallScreen':''" v-for="(item,index) in list"
								:key="index" @click="sendMsg(item.name,'job')">{{item.name}}
							</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">
						<view class="list">
							<view class="item" :class="systemHeight < 750?'smallScreen':''"
								v-for="(item,index) in list2" :key="index" @click="sendMsg(item.name,'job')">
								{{item.name}}
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
			<view class="custom-dots">
				<!-- 自定义指示点 -->
				<text v-for="(item, index) in dots" :key="index" :class="['dot', { active: index === current }]"
					:style="{ left: index * 100 + '%' }">
					<!-- <text ></view> -->
				</text>
			</view>
		</view>
		<!-- 提示区 -->
		<view class="tips_wrap" :style="{bottom:bottom+'px'}">
			<view class="title">您还可以这样问：</view>
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
		props: ["top", "bottom"],
		data() {
			return {
				current: 0, // 当前激活的swiper-item索引
				dots: 2, // 指示点的数量，可以根据swiper-item的数量动态计算
				imgUrl: app.globalData.baseImageUrl,
				list: [{
						id: 0,
						name: "成都陪诊师招聘（兼职）"
					},
					{
						id: 0,
						name: "沃尔玛超市分拣员，全成都安排"
					}, {
						id: 0,
						name: "美团/饿了么纯文字客服"
					}, {
						id: 0,
						name: "面包车司机城内货运"
					}, {
						id: 0,
						name: "外卖出餐员成都就近安排"
					}
				],
				list2: [{
						id: 0,
						name: "龙泉矢崎线束厂"
					},
					{
						id: 0,
						name: "温江香飘飘奶茶厂"
					}, {
						id: 0,
						name: "餐厅销售经理"
					}, {
						id: 0,
						name: "高中档中餐厅服务员"
					}, {
						id: 0,
						name: "营销主管贵州酒业集团"
					}
				],
				tipList: [{
					text: "我想找个长白班的工作。"
				}, {
					text: "请问哪些工作是提供吃住的？"
				}, {
					text: "有没有适合我的工作，轻松一点的。"
				}],
				posInfo: {

				},
				weatherInfo: null,
				greetingTitle: "",
				systemHeight: app.globalData.systemHeight,
				swiperHeight: 0
			};
		},
		async created() {
			let _this = this

			this.posInfo = await this.getPosition()
			this.weatherInfo = await this.getWeather()
			this.greetingTitle = this.creatTitle()

			setTimeout(function() {
				uni.createSelectorQuery()
					.in(_this)
					.select('.list')
					.boundingClientRect((rect) => {
						console.log("rect:", rect)
						_this.swiperHeight = rect.height
					})
					.exec()
			}, 500)

		},
		methods: {
			onSwiperChange(e) {
				this.current = e.detail.current;
			},
			sendMsg(msg, type) {
				let obj = {
					msg: msg,
					type: type
				}
				this.$emit("sendMsg", obj)
			},
			getPosition() {
				return new Promise(resolve => {
					let url = "https://apis.map.qq.com/ws/location/v1/ip?key=" + app.globalData.qqMapKey
					uni.request({
						url: url,
						method: "GET",
						success(res) {
							resolve(res.data.result)
						},
						fail(err) {
							console.log(err)
						}
					})
				})

			},
			// 获取天气情况
			getWeather() {
				return new Promise(resolve => {
					let url = "https://apis.map.qq.com/ws/weather/v1/?key=" + app.globalData.qqMapKey +
						"&adcode=" + this.posInfo.ad_info.adcode
					uni.request({
						url: url,
						method: "GET",
						success(res) {
							console.log(res)
							if (res.data.result) {
								resolve(res.data.result.realtime[0])
							}
						},
						fail(err) {
							console.log(err)
						}
					})
				})
			},
			// 动态问候语
			creatTitle() {
				let result = ""
				let time = this.weatherInfo.update_time.slice(11, 13)
				console.log(time)
				if (time[0] == "0") {
					result = "上午"
				} else {
					if (time[0] == "1") {
						if (Number(time[1]) < 2) {
							result = "上午"
						} else if (Number(time[1]) >= 2 && Number(time[1]) < 8) {
							result = "下午"
						} else {
							result = "晚上"
						}
					} else {
						result = "晚上"
					}
				}
				return result + "好~"
			}
		}
	}
</script>

<style lang="scss">
	.custom-dots {
		width: 100%;
		position: absolute;
		bottom: 10rpx;
		left: 0;
		text-align: center;
		// display: flex;
		justify-content: center;
	}

	.dot {
		display: inline-block;
		width: 12rpx;
		height: 12rpx;
		margin-right: 10rpx;
		background-color: #fff;
		border: 1px solid #e1e1e1;
		border-radius: 50%;
		transition: left 0.3s;

		&:nth-child(2) {
			margin-right: 0;
		}
	}

	.dot.active {
		border: 1px solid #abb4b5;
		background-color: #abb4b5;
	}

	.content_body {
		background: url($back-ground-url+"/worker/new/body_bg.png") no-repeat;
		background-size: cover;
		padding: 0 28rpx;
		box-sizing: border-box;

		.greeting {
			margin: 48rpx 0 96rpx 0;
			font-weight: 400;

			&.smallScreen {
				margin: 20rpx 0;
			}

			.top {
				image {
					width: 50rpx;
					margin-right: 10rpx;
				}
			}

			.title {
				font-size: 52rpx;
				color: #333333;
				line-height: 88rpx;
			}

			.wd {
				font-weight: 400;
				font-size: 35rpx;
				color: #333333;
			}

			.tips {
				font-size: 29rpx;
				color: #5373A5;
				line-height: 38rpx;
			}
		}

		.hot {
			padding: 15rpx 28rpx 55rpx 28rpx;
			box-sizing: border-box;
			background: url($back-ground-url+'/worker/new/notic_bg.png') no-repeat;
			background-size: 100% 100%;
			position: relative;

			.title {
				margin-bottom: 19rpx;
			}

			.list {
				.item {
					margin-bottom: 19rpx;
					height: 77rpx;
					line-height: 77rpx;
					background: #FFFFFF;
					border-radius: 38rpx;
					font-weight: 400;
					font-size: 30rpx;
					color: #0F2A4F;
					padding: 0 80rpx;
					box-sizing: border-box;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					position: relative;

					&.smallScreen {
						margin-top: 14rpx;
					}

					&::before {
						content: "";
						position: absolute;
						top: 50%;
						left: 56rpx;
						transform: translateY(-50%);
						width: 12rpx;
						height: 12rpx;
						background: #0F2A4F;
						border-radius: 50%;
					}
				}
			}

			.title {
				position: relative;
				font-size: 0;

				image {
					width: 100%;
				}

				text {
					position: absolute;
					top: 46%;
					left: 50%;
					transform: translate(-50%, -50%);
					font-weight: 400;
					font-size: 38rpx;
					color: #0F2A4F;
				}
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

		.smallScreen {
			.top {
				.title {
					font-size: 44rpx;
					line-height: 70rpx;
				}
			}

			.tips {
				font-size: 26rpx;
			}
		}
	}
</style>