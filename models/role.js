var mongoose = require("mongoose")
var Schema = mongoose.Schema

var RoleSchema = new Schema({
    name: {type: String},
    status: {type: Number},
    dateCreated: {type: Date}
})

mongoose.model("Role", RoleSchema)