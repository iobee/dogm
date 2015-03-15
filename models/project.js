var mongoose = require("mongoose")
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var ProjectSchema = new Schema({
    name: {type: String},
    desc: {type: String},
    status: {type: Number}, // 0: development 1:release 2:stable 3:obsolete
    enabled: {type: Boolean, default: true},
    createdDate: {type: Date, default: Date.now},
    envId: {type: ObjectId}
})

mongoose.model("Project", ProjectSchema)
