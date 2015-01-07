var express = require("express")
var FileController = require("./controller/file")

var router = express.Router()

// file interface
router.get("/files/:id", FileController.getFile)
router.post("/files", FileController.upload)

//user interface
//router.get("/users/:id", UserController.getUserInfo)
//router.post("/users", UserController.newAndSaveUser)

module.exports = router

