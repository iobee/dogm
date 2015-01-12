var config = require("../config")
var UserProxy = require("../proxy").User
var tools = require("../common/tools")
var authMiddleWare = require("../middlewares/auth")

exports.signup = function(req, res, next){
	var email = req.body.email
	var pass = req.body.password

}
exports.login = function(req, res, next) {
    var email = req.body.email
    var pass = req.body.pass

    UserProxy.getUserByEmail(email, function(err, user) {
        if (err) {
            return next(err)
        }

        var passhash = user.password
        tools.bcompare(pass, passhash, function(err, res) {
            if (err) {
                return next(err)
            }
            authMiddleWare.gen_session(user, res)

        })

    })
}
