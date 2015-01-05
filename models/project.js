var mongoose = require("mongoose")
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var ProjectSchema = new Schema({
    name: {type: String},
    status: {type: Number},
    enabled: {type: Boolean, default: true},
    cratedDate: {type: Date, default: Date.now},
    envId: {type: ObjectId}
})

mongoose.model("Project", ProjectSchema)
