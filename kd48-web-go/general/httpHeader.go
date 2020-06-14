package general


func HttpHeader() (map[string]string) {
	var appInfo string
	appInfo = `"{"osType":"ios","vendor":"apple","os":"ios","appVersion":"6.0.13","osVersion":"10.3.3","deviceName":"iPhone 5","appBuild":"200513","deviceId":"DDDD-DDDD-DDDD-DDDD-DDDD"}"`
	var commonHeader = map[string]string{
		"Host":"pocketapi.48.cn",
		"accept":"*/*",
		"Accept-Language": "zh-Hans-CN;q=1",
		"User-Agent":"PocketFans201807/6.0.13 (iPhone; iOS 10.3.3; Scale/2.00)",
		"Accept-Encoding": "gzip, deflate",
		"appInfo":appInfo,
	    "Content-Type":"application/json;charset=utf-8",
		"Connection":"keep-alive"}
	return commonHeader
}
