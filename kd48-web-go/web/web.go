package web

import (
	"kd48-web-go/setting"
	"log"
	"net/http"

)

func RunWeb() {
	setting.AppSetup()
	routersInit := InitRouter()
	readTimeout := setting.AppSetting.ReadTimeout
	writeTimeout := setting.AppSetting.WriteTimeout
	endPoint := setting.AppSetting.HttpPort
	maxHeaderBytes := 1 << 20
	//start services
	server := &http.Server{
		Addr:           endPoint,
		Handler:        routersInit,
		ReadTimeout:    readTimeout,
		WriteTimeout:   writeTimeout,
		MaxHeaderBytes: maxHeaderBytes,
	}
	log.Printf("[info] start http server listening 127.0.0.1%s", endPoint)
	if err := server.ListenAndServe(); err != nil {
		log.Fatalf("fail to start http server, due to %v", err)
	}

}
