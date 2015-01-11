var express = require("express")
var FileController = require("./controller/file")
var UserController = require("./controller/user")
var BugController = require("./controller/bug")
var ProjectController = require("./controller/project")

var router = express.Router()

// file interface
router.get("/files/:id", FileController.getFile)
router.post("/files", FileController.upload)

// user interface
router.get("/users/:id", UserController.getUserInfo)
router.post("/users", UserController.newAndSave)
router.get("/user", UserController.getCurrentUser)

// bug interface
router.get("/users/:id/bugs", BugController.getUserBugs)
router.post("/bugs", BugController.createBug)
router.patch("/bugs/:id", BugController.updateBug)
router.delete("/bugs/:id", BugController.deleteBug)
router.post("/users/:userId/bugs/:bugId", BugController.assignBugToUser)

// project interface
router.get("/projects", ProjectController.getProjectList)
router.get("/projects/:id", ProjectController.getProjectInfo)
router.post("/projects", ProjectController.createProject)
router.delete("/projects/:id", ProjectController.deleteProject)
router.patch("/projects/:id", ProjectController.updateProject)

module.exports = router

