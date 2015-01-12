var bcrypt = require("bcrypt")

exports.bash = function(str, callback) {
    bcrypt.hash(str, 10, callback)
}

/**
 * 明文和密文进行比较
 * Callback
 * - err, exception
 * - res, true or false
 * @param {String} str plain text
 * @param {String} hash 密文
 * @callback {Function} callback
 */
exports.bcompare = function(str, hash, callback) {
    bcrypt.compare(str, hash, callback)
}
*/
