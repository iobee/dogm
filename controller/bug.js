var BugProxy = require("../proxy").Bug

exports.assignBugToUser = function(req, res, next){
    var userId = req.params.userId
    var bugId = req.params.bugId

    BugProxy.assignBugToUser(userId, bugId, function(err, result){
        if(err){
            return next(err)
        }

        console.log("DEBUG assign bug:" + result)
        res.status(204).end()
    })
}

exports.deleteBug = function(req, res, next){
    var bugId = req.params.id

    BugProxy.deleteBugById(bugId, function(err, numAffected){
        if(err){
            return next(err)
        }

        if(numAffected === 1){
            res.status(204).end()
        } else {
            res.status(404).end()
        }
    })
}

exports.createBug = function(req, res, next){
    var bug = req.body

    BugProxy.newAndSave(bug, function(err, bug){
        if(err){
            return next(err)
        }

        res.status(201).location("http://www.dogm.org/" + bug._id)
        res.json(bug)
    })
}

exports.updateBug = function(req, res, next){
    var bugId = req.params.id
    var bug = req.body

    BugProxy.updateBug(bugId, bug, function(err, numAffected){
        if(err){
            return next(err)
        }

        if(numAffected === 1){
            res.status(204).end()
        } else {
            res.status(404).end()
        }
    })
}

exports.getUserBugs = function(req, res, next){
    var userId = req.params.id

    BugProxy.getBugByUser(userId, function(err, bugs){
        if(err){
            return next(err)
        }

        res.json(bugs)
    })
}