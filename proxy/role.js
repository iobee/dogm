"use strict"
var RoleModel = require("../models").Role

exports.createRole = function(role, callback){
    var mRole = new RoleModel(role)
    mRole.save(callback)
}

/**
 * 获取 role 详细信息
 * Callback
 * - err, database error
 * - project, project info
 * @param {String} roleId 工程 id
 * @param {Function} callback
 */
exports.getRoleInfo = function(roleId, callback){
    RoleModel.findOne({_id: roleId}, callback)
}

exports.getRoleList = function(callback){
    RoleModel.find({}, callback)
}

/**
 * 更新工程
 * Callback
 * - err, database error
 * - numAffected, 受影响的行数
 * @param roleId roleId
 * @param role 要更新的角色
 * @param callback 回调函数
 */
exports.updateRoleById = function(roleId, project, callback){
    RoleModel.update({_id: roleId}, {$set: project}, {multi: false}, callback)
}

exports.deleteRole = function(roleId, callback){
    RoleModel.remove({_id: roleId}, callback)
}


