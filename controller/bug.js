"use strict"
var BugProxy = require("../proxy").Bug
var logger = require("../common/logger")

exports.assignBugToUser = function(req, res, next){
    var userId = req.params.userId
    var bugId = req.params.bugId

    if(!userId || !bugId){
        res.status(400)
        res.json({
            errorCode: 40001,
            errorMsg: "invalid arguments"
        })

        return
    }

    BugProxy.assignBugToUser(userId, bugId, function(err, numAffected){
        if(err){
            return next(err)
        }

        if(numAffected === 0){
            res.status(404).end()
            return
        }

        res.status(204).end()
    })
}

exports.deleteBug = function(req, res, next){
    var bugId = req.params.id

    if(!bugId){
        res.status(400)
        res.json({
            errorCode: 40001,
            errorMsg: "invalid arguments"
        })

        return
    }

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

exports.getCurrentUserBugs = function(req, res, next){
    // get current user's id
    var userId = req.session.user._id

    BugProxy.getBugByUser(userId, function(err, bugs){
        if(err){
            return next(err)
        }

        res.json(bugs)
    })
}