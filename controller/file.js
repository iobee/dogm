var FileProxy = require("../proxy").File
var store = require("../common/store")

exports.getFile = function(req, res, next){
    var fileId = req.params.id
    console.log(fileId)

    FileProxy.getFileById(fileId, function(err, file){
        if(err){
            return next(err)
        }

        res.send(file)
    })
}

exports.newAndSave= function(req, res, next){
    var name = req.body.name
    var path = req.body.path
    FileProxy.newAndSave(name, path, function(err, file){
        if(err){
            return next(err)
        }

        res.send(file)
    })
}

exports.upload = function(req, res, next){
    req.busboy.on("file", function(filedname, file, filename, encoding, mimetype){
        store.upload(file, {filename: filename}, function(err, result){
            if(err){
                next(err)
            }

            res.json({
                success: true,
                url: result.url
            })
        })
    })

    req.pipe(req.busboy)
}