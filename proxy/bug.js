"use strict"

var models = require("../models")
var BugModel = models.Bug

/**
 * 创建一个bug
 * Callback
 * - err database error
 * - bug 新创建的bug对象
 * @param {Object} bug 要创建的bug
 * @param {Function} callback callback
 */
exports.newAndSave = function(bug, callback){
    var bugModel = new BugModel(bug)

    bugModel.save(callback)
}

/**
 * 根据用户id 获取属于用户的bug
 * Callback
 * - err database error
 * - bugs 用户的bugs
 * @param {String} userId
 * @param {Function} callback 回调函数
 */
exports.getBugByUser = function(userId, callback){
    BugModel.find({_handler: userId})
        .populate("_handler _reporter _project")
        .exec(callback)

}

/**
 * 获取某个工程的bug
 * Callback
 * - err, database error
 * - bugs, 查到的bug
 * @param {String} projectId 工程id
 * @param {Function} callback 回调函数
 */
exports.getBugByProject = function(projectId, callback){
    BugModel.find({_project: projectId})
        .populate("_handler _reporter _project")
        .exec(callback)
}

/**
 * 分配bug给指定用户
 * Callback
 * err, database error
 * numAffected, 受影响的行数
 * @param {String} userId 用户Id
 * @param {String} bugId bug id
 * @param {Function} callback 回调函数
 */
exports.assignBugToUser = function(userId, bugId, callback){
    BugModel.update({_id: bugId}, {$set: {userId: userId}}, {multi: false}, callback)
}

exports.updateBug = function(bugId, bug, callback){
    BugModel.update({_id: bugId}, {$set: bug}, {multi: false}, callback)
}

/**
 * 删除bug
 * Callback
 * - err, database error
 * - numAffected, 删除的行数
 * @param {String} bugId bug id
 * @param {Function} callback 回调函数
 */
exports.deleteBugById = function(bugId, callback){
    BugModel.remove({_id: bugId}, callback)
}


