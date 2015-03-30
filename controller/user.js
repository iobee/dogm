"use strict"
var UserProxy = require("../proxy").User
var logger = require("../common/logger")
var tools = require("../common/tools")

var EventProxy = require("eventproxy")

exports.updateUser = function(req, res, next) {
    var userId = req.params.id
    var username = req.body.username
    var password = req.body.password

    var ep = new EventProxy()
    ep.fail(next)
    ep.on("prop_err", function(msg){
        res.status(400)
        res.json(msg)
    })

    tools.bhash(password, function(err, passhash) {
        var user = {
            username: username,
            password: passhash,
            active: true
        }

        UserProxy.updateUser(userId, user, function(err, numAffected) {
            if (err) {
                return next(err)
            }

            if (numAffected === 0) {
                res.status(404).end()
            }

            res.status(200).end()

        })
    })
}

exports.getUserInfo = function(req, res, next){
    var userId = req.params.id

    UserProxy.getUserById(userId, function(err, user){

        if(err){
            return next(err)
        }

        if(!user){
            logger.info("not found the user by %s", userId)
            res.status(404).end()
            return
        }

        res.json(user)
    })
}

/**
 * Deprecated
 * @param req
 * @param res
 * @param next
 */
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
    var user = req.session.user
    res.json(user)
}

exports.deleteUserById = function(req, res, next){
    var userId = req.params.id

    UserProxy.deleteUserById(userId, function(err, numAffected){
        if(err){
            return next(err)
        }
        if(numAffected === 0){
            res.status(404).end()
            return
        }

        //logger.info("%s delete user:%s success", req.session.user.email, userId)
        res.status(204).end()
    })
}

exports.assignUserToProject = function(req, res, next){
    var projectId = req.params.projectId
    var userId = req.params.userId

    if(projectId || userId){
        res.status(400)
        res.json({
            errorCode: 30001,
            errorMsg: "invalid arguments"
        })
    }

    UserProxy.updateUser(userId, {projectId: projectId}, function(err, numAffected){
        if(err){
            return next(err)
        }

        if(numAffected === 0){
            res.status(404).end()
            return
        }

        logger.info("%s assign user:%s to project:%s success", req.session.user.email, userId, projectId)
        res.status(204).end()
    })
}

exports.getUserList = function(req, res, next) {
    UserProxy.getUserList([], function(err, users) {
        if (err) {
            return next(err)
        }

        res.json(users).end()
    })
}
