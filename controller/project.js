var ProjectProxy = require("../proxy").Project

exports.getProjectInfo = function(req, res, next){
    var projectId = req.params.id

    ProjectProxy.getProjectInfo(projectId, function(err, project){
        if(err){
            return next(err)
        }

        res.json(project)
    })
}

exports.getProjectList = function(req, res, next){
    ProjectProxy.getProjectList(function(err, projects){
        if(err){
            return next(err)
        }

        res.json(projects)
    })
}

exports.createProject =  function(req, res, next){
    var project = req.body

    ProjectProxy.createProject(project, function(err, project){
        if(err){
            return next(err)
        }

        res.status("201").location("http://www.dogm.org")
        res.json(project)
    })
}

exports.updateProject = function(req, res, next){
    var projectId = req.params.id
    var project = req.body

    ProjectProxy.updateProjectById(projectId, project, function(err, numAffected){
        if(err){
            return next(err)
        }

        res.status(204).end()
    })
}

exports.deleteProject = function(req, res, next){
    var projectId = req.params.id

    ProjectProxy.deleteProject(projectId, function(err, numAffected){
        if(err){
            return next(err)
        }

        res.status(204).end()
    })
}
