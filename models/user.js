var mongoose = require("mongoose")
var Schema = mongoose.Schema
var utility = require("utility")

var UserSchema = new Schema({
    name: {
        type: String
    },
    realName: {
        type: String
    },
    pass: {
        type: String
    }
})
