"use strict"
var config = require("../config.default")

/**
 * gen cookie
 * @param {Object} user User who signUp
 * @param res
 */
exports.genSession = function(user, res) {
    var authToken = user._id;
    res.cookie(config.auth_cookie_name, authToken, {
        path: '/',
        maxAge: 100 * 60 * 60 * 24 * 30, // 有效期30天 
        signed: true,
        httpOnly: true,
        secure: true
    })
}

/**
 * 需要管理员权限
 * @param req
 * @param res
 * @param next
 */
exports.adminRequired = function(req, res, next){
    if(!req.session.user){
        res.status(401).end()
    }

    //if(!req.session.user.isAdmin){
    //    res.status(404).end()
    //}

    next()
}

// Verify user
exports.authUser = function(req, res, next){

}
