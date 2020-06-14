package general

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func FormatResponse(c *gin.Context, err error, data interface{}) {
	code := 200
	msg := "Success"
	if err != nil {
		code = 500
		msg = err.Error()
	}
	c.JSON(http.StatusOK, gin.H{
		"code": code,
		"msg":  msg,
		"data": data,
	})
	c.Abort()
}
