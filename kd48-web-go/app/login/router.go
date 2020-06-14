package login

import "github.com/gin-gonic/gin"

func RegisterSubRouters(router *gin.RouterGroup) {
	router.POST("/", LoginView)

}
