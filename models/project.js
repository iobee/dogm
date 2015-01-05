var mongoose = require("mongoose")
var Schema = mongoose.Schema

var ProjectSchema = new Schema({
    name: {type: String},
    status: {type: Number},
    enabled: {type: Boolean},
    cratedDate: {type: Date},
    envId: {type: String}
})

mongoose.model("Project", ProjectSchema)