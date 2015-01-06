var File = require("../proxy").File

exports.uploadFile = function(req, res, next){

}

exports.getFile = function(req, res, next){
    var fileId = req.param.id

    File.getFileById(fileId, function(err, file){
        if(err){
            return next(err)
        }

        res.send(file)
    })
}

exports.newAndSave= function(req, res, next){
    File.newAndSave(name, path, function(err, file){
        if(err){
            return next(err)
        }

        res.send(file)
    })
}