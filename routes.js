var express = require("express")
var FileController = require("./controller/file")
var UserController = require("./controller/user")
var SignController = require(("./controller/sign"))
var BugController = require("./controller/bug")
var ProjectController = require("./controller/project")
var SignController = require("./controller/sign")
var Auth = require("./middlewares/auth")

var router = express.Router()

// file interface
router.get("/files/:id", FileController.getFile)
router.post("/files", FileController.upload)

// login
router.get("/login", SignController.login)

// user interface
router.get("/users/:id", UserController.getUserInfo)
router.delete("/users/:id", UserController.deleteUserById)
router.post("/users", SignController.signUp)
router.get("/users", UserController.getUserList)
router.get("/user", UserController.getCurrentUser)
// router.get("/projects/:id/users", UserController.getUserByProject)
router.post("/projects/:id/users/:id", UserController.assignUserToProject)

// bug interface
router.get("/users/:id/bugs", BugController.getUserBugs)
router.post("/bugs", BugController.createBug)
router.patch("/bugs/:id", BugController.updateBug)
router.delete("/bugs/:id", BugController.deleteBug)
router.post("/users/:userId/bugs/:bugId", BugController.assignBugToUser)
router.get("/user/bugs", Auth.adminRequired, BugController.getCurrentUserBugs)

// project interface
router.get("/projects", ProjectController.getProjectList)
router.get("/projects/:id", ProjectController.getProjectInfo)
router.post("/projects", ProjectController.createProject)
router.delete("/projects/:id", ProjectController.deleteProject)
router.patch("/projects/:id", ProjectController.updateProject)


module.exports = router

