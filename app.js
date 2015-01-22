var config = require("./config.default")

var express = require('express')
var bodyParser = require("body-parser")
var busboy = require("connect-busboy")
var router = require("./routes")
var session = require("express-session")
var MongoStore = require("connect-mongo")(session)
var cookieParser = require("cookie-parser")
var errorHandler = require("errorhandler")

var app = express()

app.use("/bower_components", express.static("./bower_components"))
app.use(express.static("./app"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extend: false
}))

app.use(busboy({
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB
    }
}))

app.use(cookieParser(config.session_secret))
app.use(session({
    secret: config.session_secret,
    store: new MongoStore({
        url: config.db
    }),
    resave: true,
    saveUninitialized: true
}))

// routes
app.use("/api/v1", router)

if(config.debug){
    app.use(errorHandler())
}
app.listen(config.port, function() {
    console.log("dogM listening on port %d in %s mode", config.port, app.settings.env)
    console.log("God bless love....")
    console.log("You can debug your app with http://" + config.hostname + ":" + config.port)
})

module.exports = app
