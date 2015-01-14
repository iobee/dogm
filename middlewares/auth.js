var config = require("../config.default")

/**
 * gen cookie
 * @param {Object} user User who signUp
 * @param res
 */
exports.gen_session = function(user, res) {
    var auth_token = user._id;
    res.cookie(config.auth_cookie_name, auth_token, {
        path: '/',
        maxAge: 100 * 60 * 60 * 24 * 30, // 有效期30天 
        signed: true,
        httpOnly: true,
        secure: true
    })
}

exports.adminRequired = function(req, res, next){
    if(!req.session.user){
        res.status(404).end()
    }

    if(!req.session.user.isAdmin){
        res.status(404).end()
    }

    next()
}

// Verify user
exports.authUser = function(req, res, next){

}
