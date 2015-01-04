var mongoose = require("mongoose")
var Schema = mongoose.Schema

var UserSchema = new Schema({
    name: {type: String},
    realName: {type: String},
    pass: {type: String}
})

mongoose.model("User", UserSchema)
