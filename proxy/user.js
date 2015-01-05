var models = require("../models")
var User = models.User

/**
 * list users
 * - err, database error
 * - users, user list
 * @param {Array} names 用户名列表
 * @param {Function} callback 回调函数
 */
exports.getUserList = function(names, callback) {
    if (names.length === 0) {
        return callback(null, [])
    }

    User.find({
        name: {
            $in: names
        }
    }, callback)
}

/**
 * save user
 * -err, database error
 * -user, a new user
 * @param {String} name 用户名
 * @param {Function} callback
 */
exports.saveUser = function(name, callback) {
    if (user) {
        return callback(null, [])
    }

    var user = new User()
    user.name = name

    user.save(callback)
}
