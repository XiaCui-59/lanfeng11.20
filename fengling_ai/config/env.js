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
			job_id: "53337420430634249",
			text: "煎饼店员",
			showAnimation: false
		}, {
			job_id: "53337610919144713",
			text: "上一休一坚果店员",
			showAnimation: false
		},
		{
			job_id: "53337751814204681",
			text: "大邑老牌刀具厂",
			showAnimation: false
		},
		{
			job_id: "53337900963654921",
			text: "天府新区生鲜店员",
			showAnimation: false
		},
		{
			job_id: "50274981510245641",
			text: "面包车司机城内货运",
			showAnimation: false
		},
		{
			job_id: "53338200806059273",
			text: "华为/小米纯文字客服",
			showAnimation: false
		},
		{
			job_id: "44327606832655625",
			text: "中国联通客服",
			showAnimation: false
		},
		{
			job_id: "53338437247364361",
			text: "早8晚6就近安排家政保洁",
			showAnimation: false
		},
		{
			job_id: "49267168138816777",
			text: "天府一街餐厅销售经理",
			showAnimation: false
		},
		{
			job_id: "53338888369925385",
			text: "眉山思念食品厂操作工",
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
			job_id: "53173067735630228",
			text: "煎饼店员",
			showAnimation: false
		}, {
			job_id: "53172948348961172",
			text: "上一休一坚果店员",
			showAnimation: false
		},
		{
			job_id: "53172536904515988",
			text: "大邑老牌刀具厂",
			showAnimation: false
		},
		{
			job_id: "53172293785878932",
			text: "天府新区生鲜店员",
			showAnimation: false
		},
		{
			job_id: "32435412664320404",
			text: "面包车司机城内货运",
			showAnimation: false
		},
		{
			job_id: "36391243822924180",
			text: "华为/小米纯文字客服",
			showAnimation: false
		},
		{
			job_id: "28961889455178132",
			text: "中国联通客服",
			showAnimation: false
		},
		{
			job_id: "46815378071880084",
			text: "早8晚6就近安排家政保洁",
			showAnimation: false
		},
		{
			job_id: "45053800473428372",
			text: "天府一街餐厅销售经理",
			showAnimation: false
		},
		{
			job_id: "52474036659159444",
			text: "眉山思念食品厂操作工",
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