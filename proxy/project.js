var ProjectModel = require("../models").Project

exports.createProject = function(project, callback){
    var project = new ProjectModel(project)
    project.save(callback)
}

/**
 * 获取 project 详细信息
 * Callback
 * - err, database error
 * - project, project info
 * @param {String} projectId 工程 id
 * @param {Function} callback
 */
exports.getProjectInfo = function(projectId, callback){
    ProjectModel.findOne({_id: projectId}, callback)
}

exports.getProjectList = function(callback){
    ProjectModel.find({}, callback)
}

/**
 * 更新工程
 * Callback
 * - err, database error
 * - numAffected, 受影响的行数
 * @param projectId 工程id
 * @param project 要更新项目
 * @param callback 回调函数
 */
exports.updateProjectById = function(projectId, project, callback){
    ProjectModel.update({_id: projectId}, {$set: project}, {multi: false}, callback)
}

exports.deleteProject = function(projectId, callback){
    ProjectModel.remove({_id: projectId}, callback)
}