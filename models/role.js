var mongoose = require("mongoose")
var Schema = mongoose.Schema

var RoleSchema = new Schema({
    name: {type: String},
    created_date: {type: Date}
})

mongoose.model("Role", RoleSchema)