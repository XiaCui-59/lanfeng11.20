<template>
	<view class="board">
		<view class="box">
			<view class="title">支付设置</view>
			<view class="box_line">
				<view class="line flex flex-start">
					<view class="tit">ios支付设置</view>
					<view class="text">
						<radio-group @change="radioChange" class="flex flex-start">
							<label class="uni-list-cell uni-list-cell-pd flex flex-start"
								v-for="(item, index) in iosSwitch" :key="index" style="margin-right: 20px;">
								<view>
									<radio :value="item.value" :checked="index === curIosIndex" />
								</view>
								<view>{{item.text}}</view>
							</label>
						</radio-group>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		name: "contract_list",
		data() {
			return {
				iosSwitch: [{
						value: "open",
						text: "开"
					},
					{
						value: "close",
						text: "关"
					}
				],
				curIosIndex: 0
			};
		},
		created() {},
		onReady() {

		},
		watch: {

		},
		methods: {
			radioChange(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.line {
		.tit {
			margin-right: 30px;
		}
	}
</style>