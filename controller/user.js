var UserProxy = require("../proxy").User

exports.getUserInfo = function(req, res, next){
    var userId = req.params.id
    UserProxy.getUserById(userId, function(err, user){
        if(err){
            return next(err)
        }

        res.json(user)
    })
}

exports.newAndSave = function(req, res, next){
    var user = req.body

    UserProxy.saveUser(user, function(err, user){
        if(err){
            return next(err)
        }

        res.status(201).location("http://www.dogm.org/" + user._id)
        res.json(user)
    })
}

exports.getCurrentUser = function(req, res, next){
    res.json({username: "nick"})
}

exports.assignUserToProject = function(req, res, next){
    var projectId = req.params.projectId
    var userId = req.params.userId

    UserProxy.updateUser(userId, {projectId: projectId}, function(err, numAffected){
        if(err){
            return next(err)
        }

        res.status(204).end()
    })
}
