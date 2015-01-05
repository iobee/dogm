var mongoose = require("mongoose")
var Schema = mongoose.Schema

var FileSchema = new Schema({
    name: {type: String},
    path: {type: String},
    dateCreated: {type: Date}
})

mongoose.model("File", FileSchema)