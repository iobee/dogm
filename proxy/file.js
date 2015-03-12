"use strict"
var models = require("../models")
var DogmFile = models.File

/**
 * upload file
 * Callback:
 * - err, database error
 * - file, file that created
 * @param {String} name file name
 * @param {String} path file path
 * @param {Function} callback callback
 */
exports.newAndSave = function(fileName, path, callback) {
    var mFile = new DogmFile()
    mFile.name = fileName
    mFile.path = path

    mFile.save(callback)
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
    DogmFile.find({_id: id}, callback)
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
    DogmFile.find(callback)
}

exports.deleteFileById = function(id, callback){
    DogmFile.remove({_id: id}, callback)
}
