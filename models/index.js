var mongoose = require("mongoose")
var config = require("../config.default")

mongoose.connect(config.db, function (err) {
    if (err) {
        console.error('connect to %s error: ', config.db, err.message)
        process.exit(1)
    }
})

require("./user")
require("./role")
require("./file.js")
require("./bug.js")
require("./project.js")

exports.User = mongoose.model("User")
exports.Role = mongoose.model("Role")
exports.File = mongoose.model("File")
exports.Bug = mongoose.model("Bug")
exports.Project = mongoose.model("Project")
