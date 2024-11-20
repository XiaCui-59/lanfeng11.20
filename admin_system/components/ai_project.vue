<template>
	<view class="board">
		<view class="box">
			<view class="title">AI职位</view>
			<view class="table_wrap">
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位ID</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位编号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">职位名称</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">工人薪资</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">性别要求</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">年龄要求</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{item.id}}</uni-td>
						<uni-td align="center">{{item.code}}</uni-td>
						<uni-td align="center">{{item.name}}</uni-td>
						<uni-td
							align="center">{{(item.worker_salary_min == item.worker_salary_max?item.worker_salary_min:(item.worker_salary_min+"-"+item.worker_salary_max))+"元"}}
						</uni-td>
						<uni-td
							align="center">{{gender.filter(el=>{return el.value == item.worker_gender})[0].text}}</uni-td>
						<uni-td align="center">{{item.worker_age_min+"-"+item.worker_age_max+"岁"}}</uni-td>
					</uni-tr>
				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
	</view>
</template>

<script>
	import pageBox from "@/components/paging_box.vue"
	import commonData from "@/common/commonData"
	import {
		saveAs
	} from 'file-saver'
	const app = getApp()
	export default {
		name: "contract_list",
		data() {
			return {
				currentPlatform: {
					value: "wechat_mini_program",
					text: "微信",
					icon: "/static/wechat.png"
				},
				periodList: [{
						value: "hour",
						text: "时"
					},
					{
						value: "day",
						text: "天"
					},
					{
						value: "week",
						text: "周"
					},
					{
						value: "month",
						text: "月"
					},
				],
				gender: [{
						value: "male",
						text: "男"
					}, {
						value: "female",
						text: "女"
					},
					{
						value: "both",
						text: "不限"
					}
				],
				list: [],
				status: commonData.projectStatus,
				cleaningStatus: commonData.cleaningStatus,
				currentId: "",
				currentMoreId: 0,
				years: "",
				continueFee: "",
				currentPage: 1,
				pagination: {},
				currentCount: 15
			};
		},
		components: {
			pageBox
		},
		created() {
			this.getList()
		},
		onReady() {

		},
		watch: {

		},
		methods: {
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.getList()
			},
			getList() {
				uni.showLoading({
					title: "努力加载中~"
				})
				let url = "/admin/projects/ai?page=" + this.currentPage + "&page_size=" + this.currentCount

				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep {

		.uni-table-tr .uni-table-th:last-child {
			background: rgb(246, 246, 246);
		}

		.uni-table-tr .uni-table-td:last-child {
			position: relative;
			background: #fff;
		}

		.uni-table-tr:nth-child(2n + 3) .uni-table-td:last-child {
			position: relative;
			background: #fafafa;
		}


	}

	.table_wrap {

		// height: calc(100% - 123px);

		.tips {
			margin-bottom: 20px;

			view {
				margin-right: 15px;
				font-size: 14px;

				text {
					color: #0092ff;
				}
			}

			.tip {
				color: #f00;
			}
		}


	}

	.mask {
		.inner {
			.box {
				.from_list {
					margin-top: 15px;

					.from_item {
						text-align: center;
						cursor: pointer;
						padding: 10px 20px;
						border-radius: 8px;

						&.active {
							background: #ebebeb;
							border: 2px solid #0092ff;

							&:nth-child(2) {
								color: #333;
							}

							&:nth-child(3) {
								color: #ff4406;
							}
						}


						.icon {
							margin-bottom: 5px;

							image {
								width: 64px;
							}
						}
					}
				}

				.line {
					margin: 15px 0 0 15px;
				}

				.tit {
					width: 80px;
				}

				.input_wrap {
					width: calc(100% - 80px);
					border: 1px solid #ccc;
					border-radius: 4px;
					position: relative;

					input {
						height: 40px;
						line-height: 40px;
						padding-left: 10px;
						box-sizing: border-box;
					}

					.period {
						position: absolute;
						top: 50%;
						right: 15px;
						transform: translateY(-50%);
						font-size: 14px;
					}
				}
			}

			.btns {
				margin-bottom: 15px;

				.btn {
					position: relative;
					left: 0;
					top: 0;
					border: 1px solid $base-color;
					margin-left: 15px;
				}

				.close {
					background: transparent;
					color: $base-color;
				}
			}
		}
	}

	// .mask {
	// 	position: fixed;
	// 	top: 0;
	// 	left: 0;
	// 	width: 100%;
	// 	height: 100%;
	// 	background: rgba(0, 0, 0, 0.5);
	// 	z-index: 100;

	// 	.inner {
	// 		width: 530px;
	// 		position: absolute;
	// 		top: 50%;
	// 		left: 50%;
	// 		transform: translate(-50%, -50%);
	// 		padding: 15px 15px 50px 15px;
	// 		border-radius: 10px;
	// 		background: #fff;

	// 		.cont {
	// 			margin: 30px 0 50px 0;

	// 			.tit {
	// 				width: 80px;
	// 			}

	// 			.input_wrap {
	// 				width: calc(100% - 80px);
	// 				border: 1px solid #ccc;
	// 				border-radius: 4px;
	// 				position: relative;

	// 				input {
	// 					height: 40px;
	// 					line-height: 40px;
	// 					padding-left: 10px;
	// 					box-sizing: border-box;
	// 				}

	// 				.period {
	// 					position: absolute;
	// 					top: 50%;
	// 					right: 15px;
	// 					transform: translateY(-50%);
	// 					font-size: 14px;
	// 				}
	// 			}
	// 		}

	// 		.btns {
	// 			margin-bottom: 15px;

	// 			.btn {
	// 				position: relative;
	// 				left: 0;
	// 				top: 0;
	// 				border: 1px solid $base-color;
	// 				margin-left: 15px;
	// 			}

	// 			.close {
	// 				background: transparent;
	// 				color: $base-color;
	// 			}
	// 		}
	// 	}
	// }
</style>