var BugProxy = require("../proxy").Bug

exports.assignBugToUser = function(req, res, next){
    var userId = req.param.userId
    var bugId = req.param.bugId

    BugProxy.assignBugToUser(userId, bugId, function(err, result){
        if(err){
            return next(err)
        }

        res.json({
            success: true,
            message: "assign success"
        })
    })
}

exports.deleteBug = function(req, res, next){
    var bugId = req.param.id

    BugProxy.deleteBugById(bugId, function(err, numAffected){
        if(err){
            return next(err)
        }

        if(numAffected === 1){
            res.status(204).end()
        }
    })
}

exports.createBug = function(req, res, next){
    var bug = req.body

    BugProxy.newAndSave(bug, function(err, bug){
        if(err){
            return next(err)
        }

        res.status(201).location(bug._id)
        res.json(bug)
    })
}

exports.updateBug = function(req, res, next){
    var bugId = req.param.id
    var bug = req.body

    BugProxy.updateBug(bugId, bug, function(err, numAffected){
        if(err){
            return next(err)
        }

        if(numAffected === 1){
            res.json(numAffected)
        }
    })
}

exports.getUserBugs = function(req, res, next){
    var userId = req.param.id

    BugProxy.getBugByUser(userId, function(err, bugs){
        if(err){
            return next(err)
        }

        res.json(bugs)
    })
}