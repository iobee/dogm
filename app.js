var config = require("./config.default")

var express = require('express')
var bodyParser = require("body-parser")
var busboy = require("connect-busboy")
var router = require("./routes")

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extend: true
}))

app.use(busboy({
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB
    }
}))

// routes
app.use("/api/v1", router)

app.listen(config.port, function(){
    console.log("dogM listening on port %d in %s mode", config.port, app.settings.env)
    console.log("God bless love....")
    console.log("You can debug your app with http://" + config.hostname +":" + config.port)
})

module.exports = app
