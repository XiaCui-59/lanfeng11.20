// 测试环境
const test = {
	apiUrl: "https://api.test.swiftwd.com",
	aiApiUrl: "https://api.test.ai.swiftwd.com",
	// wssUrl: "wss://api.test.swiftwd.com/chat",
	wssUrl: "wss://api.test.ai.swiftwd.com/api/chat/",
	voiceUrl: "https://api.test.ai.swiftwd.com/api/chat/audio",
	imageUrl: "https://static.test.swiftwd.com",
	appid: 'wx4c07bc53643db85e',
	qqMapKey: "B7QBZ-ED46A-THIKR-CIG5N-EYPME-T2FNI",
	jobList: [{
			job_id: "50285396436839689",
			text: "吉利汽车正式工",
			showAnimation: false
		}, {
			job_id: "46401722255469833",
			text: "成都陪诊师招聘（兼职）",
			showAnimation: false
		},
		{
			job_id: "50274513929170185",
			text: "沃尔玛超市分拣员，全成都安排",
			showAnimation: false
		},
		{
			job_id: "50274727050210569",
			text: "美团/饿了么纯文字客服",
			showAnimation: false
		},
		{
			job_id: "50274981510245641",
			text: "面包车司机城内货运",
			showAnimation: false
		},
		{
			job_id: "50275223286639881",
			text: "龙泉矢崎线束厂",
			showAnimation: false
		},
		{
			job_id: "38418588998167817",
			text: "温江香飘飘奶茶厂",
			showAnimation: false
		},
		{
			job_id: "49267168138816777",
			text: "餐厅销售经理",
			showAnimation: false
		},
		{
			job_id: "50275545325366537",
			text: "高中档中餐厅服务员",
			showAnimation: false
		},
		{
			job_id: "50275688166583561",
			text: "营销主管贵州酒业集团",
			showAnimation: false
		}
	]
}

// 生产环境
const production = {
	apiUrl: "https://api.swiftwd.com",
	aiApiUrl: "https://api.ai.swiftwd.com",
	// wssUrl: "wss://api.swiftwd.com/chat",
	wssUrl: "wss://api.ai.swiftwd.com/api/chat/",
	voiceUrl: "https://api.ai.swiftwd.com/api/chat/audio",
	imageUrl: "https://flash.static.swiftwd.com",
	appid: 'wxba7ae6c3643ac944',
	qqMapKey: "LVNBZ-LELKA-K4YKN-CDAVY-FDIMQ-H3F2X",
	jobList: [{
			job_id: "50170825902457236",
			text: "吉利汽车正式工",
			showAnimation: false
		}, {
			job_id: "37250266491257236",
			text: "成都陪诊师招聘（兼职）",
			showAnimation: false
		},
		{
			job_id: "36388299840946580",
			text: "沃尔玛超市分拣员，全成都安排",
			showAnimation: false
		},
		{
			job_id: "37104981622391188",
			text: "美团/饿了么纯文字客服",
			showAnimation: false
		},
		{
			job_id: "32435412664320404",
			text: "面包车司机城内货运",
			showAnimation: false
		},
		{
			job_id: "25041863895417236",
			text: "龙泉矢崎线束厂",
			showAnimation: false
		},
		{
			job_id: "38444103788391689",
			text: "温江香飘飘奶茶厂",
			showAnimation: false
		},
		{
			job_id: "45053800473428372",
			text: "餐厅销售经理",
			showAnimation: false
		},
		{
			job_id: "45053617316561300",
			text: "高中档中餐厅服务员",
			showAnimation: false
		},
		{
			job_id: "44462989033669012",
			text: "营销主管贵州酒业集团",
			showAnimation: false
		}
	]
}
// 注意:这里的属性名要和上面package.json中定义的扩展节点编译名称相同
const ENV_CONFIG = {
	test,
	production
}

module.exports = ENV_CONFIG