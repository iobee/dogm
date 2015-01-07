var config = require("../config.default")
var path = require("path")
var fs = require("fs")
var utility = require("utility")

exports.upload = function(file, options, callback){
    var filename = options.filename

    var newFilename = utility.md5(filename + String((new Date()).getTime())) + path.extname(filename)

    console.log(config.upload)
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