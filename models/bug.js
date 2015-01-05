var mongoose = require("mongoose")
var Schema = mongoose.Schema

var BugSchema = new Schema({
    summary: {type: String},
    desc: {type: String},
    severity: {type: Number},
    priority: {type: Number},
    reporterId: {type: Number},
    handlerId: {type: String},
    projectId: {type: String},
    createdDate: {type: Date}
})

mongoose.model("Bug", BugSchema)