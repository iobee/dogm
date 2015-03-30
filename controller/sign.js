"use strict"
var config = require("../config.default")
var UserProxy = require("../proxy").User
var tools = require("../common/tools")
var mail = require("../common/mail")
var authMiddleWare = require("../middlewares/auth")
var logger = require("../common/logger")

var EventProxy = require("eventproxy")
var validator = require("validator")
var utility = require("utility")

var SITE_ROOT_URL = config.hostname;


exports.editUser = function(req, res, next){
    var username = req.body.username
	var email = req.body.email
	var pass = req.body.password
    var token = req.body.token

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
                username: username,
                active: true
            }

            UserProxy.saveUser(user, function(err, user){
                if(err){
                    return next(err)
                }
                logger.info("%s register success", email)

                res.status(200)
                res.json(user)
            })
        })
    })
}

exports.inviteUser = function(req, res, next) {
    var email = req.body.email
    var ep = new EventProxy()

    ep.on("prop_err", function(msg) {
        logger.info("invite fail %j", msg);
        res.status(400)
        res.end()
    })

    if (!email) {
        ep.emit("prop_err", {
            errorCode: 20001,
            errorMsg: "invalid arguments!"
        })

        return
    }

    mail.sendActiveMail(email, utility.md5(email + config.session_secret), "Nick")
    logger.info("invite %s success", email)
    res.json({
        status: "success"
    })
}

exports.login = function(req, res, next) {
    var email = req.query.email
    var pass = req.query.password

    var ep = new EventProxy()
    ep.on("prop_err", function(msg){
        logger.crit("login fail %j", msg)
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
