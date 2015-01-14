var config = require("../config.default")

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
