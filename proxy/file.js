var models = require("../models")
var File = models.File

/**
 * upload file
 * -err, upload error
 * @param {String} name file name
 * @param {String} path file path
 */
exports.uploadFile = function(name, path, callback) {
    if (name) {
        return callback(null, [])
    }

    if (path) {
        return callback(null, [])
    }

    var file = new File()
    file.name = name
    file.path = path

    file.save(callback)
}
