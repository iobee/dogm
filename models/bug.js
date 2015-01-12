var mongoose = require("mongoose")
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var BugSchema = new Schema({
    summary: {type: String},
    desc: {type: String},
    severity: {type: Number},
    priority: {type: Number},
    reporterId: {type: ObjectId},
    handlerId: {type: ObjectId},
    projectId: {type: ObjectId},
    createdDate: {type: Date, default: Date.now}
})

mongoose.model("Bug", BugSchema)
