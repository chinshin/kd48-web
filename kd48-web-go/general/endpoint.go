package general

type Endpoint struct {
	LoginUrl string `json:"login_url"`
	SearchMemberUrl string `json:"search_member_url"`
	roomOwnerMsgUrl string `json:"room_owner_msg_url"`

}
const salt = "K4bMWJawAtnyyTNOa70S"

const loginUrl = "https://pocketapi.48.cn/user/api/v1/login/app/mobile"
const searchMemberUrl = "https://pocketapi.48.cn/im/api/v1/im/search"
const roomOwnerMsgUrl = "https://pocketapi.48.cn/im/api/v1/chatroom/msg/list/homeowner"
const roomAllMsgUrl = "https://pocketapi.48.cn/im/api/v1/chatroom/msg/list/all"
const liveDetailUrl = "https://pocketapi.48.cn/live/api/v1/live/getLiveOne"
const liveListUrl = "https://pocketapi.48.cn/live/api/v1/live/getLiveList"
const memberListUrl = "https://pocketapi.48.cn/user/api/v1/client/update/group_team_star"
const answerDetailUrl = "https://pocketapi.48.cn/idolanswer/api/idolanswer/v1/question_answer/detail"

func InitEndpoint() Endpoint {
	var endpoint Endpoint
	endpoint.LoginUrl = loginUrl
	return endpoint
}

