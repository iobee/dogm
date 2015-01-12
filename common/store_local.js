var config = require("../config.default")
var path = require("path")
var fs = require("fs")
var utility = require("utility")

/**
 * upload file to server
 * Callback:
 * - err, upload file error
 * - result, result object, {url: ""}
 * @param {Object} file file that upload
 * @param {Object} options file info,{filename: xxxxx}
 * @param {Function} callback callback
 */
exports.upload = function(file, options, callback){
    var filename = options.filename

    var newFilename = utility.md5(filename + String((new Date()).getTime())) + path.extname(filename)

    var uploadPath = config.upload.path
    var base_url = config.upload.url
    var filePath = path.join(uploadPath, newFilename)
    var fileUrl =  base_url + newFilename

    file.on("end", function () {
        callback(null, {
            url: fileUrl
        })
    })

    file.pipe(fs.createWriteStream(filePath))
}
