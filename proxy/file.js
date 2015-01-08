var models = require("../models")
var File = models.File

/**
 * upload file
 * Callback:
 * - err, database error
 * - file, file that created
 * @param {String} name file name
 * @param {String} path file path
 * @param {Function} callback callback
 */
exports.newAndSave = function(name, path, callback) {
    var file = new File()
    file.name = name
    file.path = path

    file.save(callback)
}

/**
 * get file detail
 * Callback:
 * - err, database error
 * - file, file
 * @param {String} id  file id
 * @param {Function} callback callback
 * @returns {*}
 */
exports.getFileById = function(id, callback){
    File.find({_id: id}, callback)
}

/**
 * get file list
 * Callback:
 * - err, database error
 * - files, file list
 * @param {Function} callback callback
 * @return {*}
 */
exports.getFileList = function (callback) {
    File.find(callback)
}

exports.deleteFileById = function(id, callback){
    File.remove({_id: id}, callback)
}
