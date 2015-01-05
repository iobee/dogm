var mongoose = require("mongoose")
var Schema = mongoose.Schema

var RoleSchema = new Schema({
    name: {type: String},
    status: {type: Number},
    createdDate: {type: Date, default: Date.now}
})

mongoose.model("Role", RoleSchema)
