var mongoose = require("mongoose")
var Schema = mongoose.Schema

var UserSchema = new Schema({
    username: {type: String},
    realName: {type: String},
    password: {type: String},
    email: {type: String},
    roleId: {type: Number},
    dateCreated: {type: Date}, // create date
    lastVisited: {type: Date}, // last visit date
    avatarId: {type: Number}

})

mongoose.model("User", UserSchema)
