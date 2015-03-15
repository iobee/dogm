var mongoose = require("mongoose")
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var UserSchema = new Schema({
    username: {type: String},
    realName: {type: String},
    password: {type: String, required: true},
    email: {type: String, required: true},
    complete: {type: Boolean, default: false}, // info has complete
    roleId: {type: ObjectId},
    dateCreated: {type: Date, default: Date.now}, // create date
    lastVisited: {type: Date }, // last visit date
    avatar: {
        url: {type: String},
        type: {type: String}
    }

})

mongoose.model("User", UserSchema)
