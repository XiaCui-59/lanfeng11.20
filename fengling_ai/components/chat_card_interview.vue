<template>
	<!-- 面试卡片 -->
	<view class="sure_card" style="margin-top:0;"
		v-if="item.msg_type == 'card' && item.card && item.card.type == 'audio_call_start_interview'"
		@click="clickSureCard(item)">
		<view class="text_img">
			<image :src="imgUrl+'/worker/new/sure_text.png'" mode="widthFix"></image>
		</view>
		<view class="bot_box">
			<view class="name flex flex-start">
				<view class="label">已报名工作</view>
				<view class="text">{{item.card.job_title}}</view>
			</view>
			<view class="sure_btn">
				<image :src="imgUrl+'/worker/new/sure_button.png'" mode="widthFix">
				</image>
			</view>
		</view>
		<view class="sure_icon">
			<image :src="imgUrl+'/worker/new/sure_icon.png'" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "chat_card_interview",
		props: ["item"],
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.sure_card {
		margin-top: 30rpx;
		padding: 34rpx 25rpx 20rpx 25rpx;
		width: 100%;
		background: linear-gradient(180deg, #82C7FF 0%, #FFFFFF 100%);
		box-shadow: 0rpx 4rpx 4rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 15rpx;
		box-sizing: border-box;
		position: relative;

		.text_img {
			padding-left: 25rpx;
			box-sizing: border-box;

			image {
				width: 310rpx;
			}
		}

		.sure_icon {
			position: absolute;
			top: 0;
			right: 0;

			image {
				width: 200rpx;
			}
		}

		.bot_box {
			background: #FFFFFF;
			border-radius: 15rpx;
			padding: 23rpx 26rpx;
			box-sizing: border-box;
			margin-top: 21rpx;

			.name {
				margin-top: 10rpx;

				.label {
					width: 138rpx;
					height: 42rpx;
					text-align: center;
					line-height: 42rpx;
					background: rgba(33, 111, 249, 0.08);
					border-radius: 12rpx;
					border: 2rpx solid #216FF9;
					font-weight: 600;
					font-size: 23rpx;
					color: #216FF9;
					flex-shrink: 0;
				}

				.text {
					margin-left: 12rpx;
					font-weight: 600;
					font-size: 31rpx;
					color: #020202;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}

			.sure_btn {
				margin-top: 36rpx;

				image {
					width: 100%;
				}
			}
		}
	}
</style>