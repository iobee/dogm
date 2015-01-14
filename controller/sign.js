var config = require("../config.default")
var UserProxy = require("../proxy").User
var tools = require("../common/tools")
var mail = require("../common/mail")
var authMiddleWare = require("../middlewares/auth")

exports.signUp = function(req, res, next){
    var username = req.body.username
	var email = req.body.email
	var pass = req.body.password

    UserProxy.getUserByEmail(email, function(err, users){
        if(err){
            return next(err)
        }

        if(users.length > 0){
            res.status(404).json({
                message: "email has be used, please use a new email"
            })

            return
        }

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
                res.status(201).location("http://")
                res.json(user)
            })
        })
    })

}
exports.login = function(req, res, next) {
    var email = req.query.email
    var pass = req.query.password

    UserProxy.getUserByEmail(email, function(err, users) {
        if (err) {
            return next(err)
        }

        var user = users[0]
        var passhash = user.password
        tools.bcompare(pass, passhash, function(err, result) {
            if (err) {
                return next(err)
            }
            authMiddleWare.gen_session(user, res)
            res.json({
                email: "iobee@sina.com",
                success: true
            })

        })

    })
}
