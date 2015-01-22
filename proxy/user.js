"use strict"
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
    User.find({}, {password: 0}, callback)
}

/**
 * find user over id
 * Callback
 * - err, database error
 * - user, user object
 * @param {String} id userId
 * @param {Function} callback callback
 */
exports.getUserById = function(id, callback){
    User.findOne({_id: id}, callback)
}

/**
 * find user by email
 * Callback
 * - err, database error
 * - users, result
 * @param email user's email
 * @param callback
 */
exports.getUserByEmail = function(email, callback){
    User.find({email: email}, callback)
}

/**
 * delete user
 * Callback
 * - err database error
 * - user the user that deleted
 * @param {String} id the id of user
 * @param {Function} callback callback
 */
exports.deleteUserById = function(id, callback){
    User.remove({_id: id}, callback)
}

/**
 * save user
 * -err, database error
 * -user, a new user
 * @param {String} name 用户名
 * @param {Function} callback
 */
exports.saveUser = function(user, callback) {
    var user = new User(user)

    user.save(callback)
}

exports.updateUser = function(userId, user, callback){
    User.update({_id: userId}, {$set: user}, {multi: false}, callback)
}
