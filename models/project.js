var mongoose = require("mongoose")
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var ProjectSchema = new Schema({
    name: {type: String},
    status: {type: Number},
    enabled: {type: Boolean},
    cratedDate: {type: Date},
    envId: {type: ObjectId}
})

mongoose.model("Project", ProjectSchema)