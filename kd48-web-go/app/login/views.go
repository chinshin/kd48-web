package login

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/kirinlabs/HttpRequest"
	"kd48-web-go/general"
)

func LoginView(c *gin.Context) {
	endpoint := general.InitEndpoint()
	mobile := c.Param("mobile")
	pwd := c.Param("pwd")
	req := HttpRequest.NewRequest()
	req.SetHeaders(general.HttpHeader())
	data := map[string]interface{}{
		"mobile": mobile,
		"pwd":    pwd,
	}
	res, err := req.Post(endpoint.LoginUrl, data)
	if err != nil {
		fmt.Println(res)
	}
	general.FormatResponse(c, nil, res)
}
