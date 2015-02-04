"use strict"
var config = require("../config.default")
var UserProxy = require("../proxy").User
var tools = require("../common/tools")
var mail = require("../common/mail")
var authMiddleWare = require("../middlewares/auth")
var validator = require("validator")
var logger = require("../common/logger")
var EventProxy = require("eventproxy")


exports.signUp = function(req, res, next){
    var username = req.body.username
	var email = req.body.email
	var pass = req.body.password

    var ep = new EventProxy()
    ep.fail(next)
    ep.on("prop_err", function(msg){
        res.status(400)
        res.json(msg)
    })

    if(!username || !email || !pass){
        ep.emit("prop_err", {
            errorCode: 10001,
            errorMsg: "invalid arguments!"
        })
        return
    }

    if(!validator.isEmail(email.trim())){
        ep.emit("prop_err", {
            errorCode: 10002,
            errorMsg: "invalid email"
        })
        return
    }

    UserProxy.getUserByEmail(email.trim(), function(err, users){
        if(err){
            return next(err)
        }

        if(users.length > 0){
            ep.emit("prop_err", {
                errorCode: 10003,
                errorMsg: "email has been used!"
            })
            return
        }

        // hash password before save it
        tools.bhash(pass, function(err, passhash){
            var user = {
                email: email,
                password: passhash,
                username: username
            }

            UserProxy.saveUser(user, function(err, user){
                if(err){
                    return next(err)
                }
                mail.sendActiveMail(email, "xxx", "xxxx")
                logger.info("%s register success", email)

                res.status(201).location(req.path + "/" + user._id)
                res.json(user)
            })
        })
    })

}

exports.login = function(req, res, next) {
    var email = req.query.email
    var pass = req.query.password

    var ep = new EventProxy()
    ep.on("prop_err", function(msg){
        logger.info("login fail %j", msg)
        res.status(400)
        res.json(msg)
    })

    if(!email || !pass){
        ep.emit("prop_err", {
            errorCode: 20001,
            errorMsg: "invalid arguments!"
        })
        return
    }

    if(!validator.isEmail(email)){
        ep.emit("prop_err", {
            errorCode: 20003,
            errorMsg: "invalid email"
        })

        return
    }

    UserProxy.getUserByEmail(email, function(err, users) {
        if (err) {
            return next(err)
        }

        if(users.length === 0){
            logger.info("%s login fail", email)
            res.status(404)
            res.json({
                errorCode: 20002,
                errorMsg: "username or password error"
            })

            return
        }

        var user = users[0]
        var passhash = user.password
        tools.bcompare(pass, passhash, function(err, result) {
            if (err) {
                return next(err)
            }

            // pass not equal passhash
            if(!result){
                res.status(404)
                res.json({
                    errorCode: 20002,
                    errorMsg: "username or password error"
                })
            }

            // authMiddleWare.gen_session(user, res)
            req.session.regenerate(function(err){
                req.session.user = user
                req.session.success = "Authenticated success"

                logger.info("%s authenticated success", email)
                res.json(user)
            })
        })

    })
}
