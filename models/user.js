var mongoose = require("mongoose")
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var UserSchema = new Schema({
    username: {type: String},
    realName: {type: String},
    password: {type: String},
    email: {type: String},
    roleId: {type: ObjectId},
    dateCreated: {type: Date, default: Date.now()}, // create date
    lastVisited: {type: Date }, // last visit date
    avatarId: {type: ObjectId}

})

mongoose.model("User", UserSchema)
