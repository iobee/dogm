var mongoose = require("mongoose")
var Schema = mongoose.Schema

var FileSchema = new Schema({
    name: {type: String},
    path: {type: String},
    createdDate: {type: Date, default: Date.now}
})

mongoose.model("File", FileSchema)
