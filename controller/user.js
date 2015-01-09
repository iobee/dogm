var UserProxy = require("../proxy").User

exports.getUserInfo = function(req, res, next){
    var userId = req.param.id
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

        res.status(201).location(user._id)
        res.json(user)
    })
}

exports.getCurrentUser = function(req, res, next){
    res.json({username: "nick"})
}
