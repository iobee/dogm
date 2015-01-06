var express = require("express")
var FileController = require("./controller/file")

var router = express.Router()

// file interface
router.get("/files/:id", FileController.getFile)
router.post("/files", FileController.newAndSave)

//user interface
//router.get("/users/:id", UserController.getUserInfo)
//router.post("/users", UserController.newAndSaveUser)

