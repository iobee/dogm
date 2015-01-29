var mongoose = require("mongoose")
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var BugSchema = new Schema({
    summary: {type: String},
    desc: {type: String},
    severity: {type: Number},
    priority: {type: Number},
    _reporter: {type: ObjectId, ref: "User"},
    _handler: {type: ObjectId, ref: "User"},
    _project: {type: ObjectId, ref: "Project"},
    createdDate: {type: Date, default: Date.now}
})

mongoose.model("Bug", BugSchema)
