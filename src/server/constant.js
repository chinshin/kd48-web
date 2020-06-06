const commonHeader = {
  Host: 'pocketapi.48.cn',
  accept: '*/*',
  'Accept-Language': 'zh-Hans-CN;q=1',
  'User-Agent': 'PocketFans201807/6.0.13 (iPhone; iOS 10.3.3; Scale/2.00)',
  'Accept-Encoding': 'gzip, deflate',
  appInfo: '{"osType":"ios","vendor":"apple","os":"ios","appVersion":"6.0.13","osVersion":"10.3.3","deviceName":"iPhone 5","appBuild":"200513","deviceId":"DDDD-DDDD-DDDD-DDDD-DDDD"}',
  'Content-Type': 'application/json;charset=utf-8',
  Connection: 'keep-alive',
};

const salt = 'K4bMWJawAtnyyTNOa70S';

const loginEndpoint = 'https://pocketapi.48.cn/user/api/v1/login/app/mobile';
const searchMemberEndpoint = 'https://pocketapi.48.cn/im/api/v1/im/search';

module.exports = {
  commonHeader,
  salt,
  endpoint: {
    loginURL: loginEndpoint,
    searchMemberURL: searchMemberEndpoint,
  },
};