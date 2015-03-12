var mongoose = require("mongoose")
var Schema = mongoose.Schema

var RoleSchema = new Schema({
    name: {type: String},
    desc: {type: String},
    status: {type: Number}, // 0:normal 1:disable
    createdDate: {type: Date, default: Date.now}
})

mongoose.model("Role", RoleSchema)
