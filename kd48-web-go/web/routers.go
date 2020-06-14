
package web

import (
"github.com/gin-contrib/cors"
"github.com/gin-gonic/gin"
"kd48-web-go/app/login"
)

func InitRouter() *gin.Engine {

	r := gin.New()
	r.Use(gin.Logger())
	r.Use(gin.Recovery())
	corsConfig := cors.DefaultConfig()
	corsConfig.AllowAllOrigins = true
	r.Use(cors.New(corsConfig))

	r.Static("/html", "public")

	v1 := r.Group("/api/v1")

	//dashboard
	login.RegisterSubRouters(v1.Group("/login"))

	return r
}
