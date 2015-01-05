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

    User.find({ loginname: { $in: names } }, callback)
}
