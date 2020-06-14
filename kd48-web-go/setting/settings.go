package setting

import (
	"log"
	"time"

	"github.com/go-ini/ini"
)

type AppConf struct {
	AppMode      string
	HttpPort     string
	PageSize     int
	ReadTimeout  time.Duration
	WriteTimeout time.Duration
}

var AppSetting = &AppConf{}

var (
	err error
	cfg *ini.File
)

func AppSetup() {
	cfg, err = ini.Load("conf/app.ini")
	if err != nil {
		log.Fatalf("setting.Setup fail to parse 'conf/app.ini': %v", err)
	}
	mapTo("", AppSetting)

	AppSetting.ReadTimeout = AppSetting.ReadTimeout * time.Second
	AppSetting.WriteTimeout = AppSetting.WriteTimeout * time.Second

}

func mapTo(section string, v interface{}) {
	err = cfg.Section(section).MapTo(v)
	if err != nil {
		log.Fatalf("cfg.MapTo fail to interface err: %v", err)
	}
}
