var ProjectProxy = require("../../proxy").Project
var should = require("should")

describe("test/proxy/project.test.js", function(){
    var projectId

    // create project for test
    before(function(done){
        var project = {
            name: "test",
            status: 1
        }

        ProjectProxy.createProject(project, function(err, project){
            should.not.exist(err)
            project.should.have.property("name", "test")
            projectId = project._id
            done()
        })

    })

    describe("#getProjectDetail()", function(){
        it("should return project detail", function(done){
            ProjectProxy.getProjectInfo(projectId, function(err, project){
                should.not.exist(err)
                project.should.have.property("name", "test")
                done()
            })
        })
    })
    describe("#getProjectList()", function(){
        it("should get project list", function(done){
            ProjectProxy.getProjectList(function(err, projects){
                should.not.exist(err)
                projects.length.should.be.greaterThan(0)
                done()
            })
        })
    })

    describe("#updateProject()", function(){
        it("should return numAffected", function(done){
            var project = {
                name: "update name",
                status: 0
            }

            ProjectProxy.updateProjectById(projectId, project, function(err, numAffected){
                should.not.exist(err)
                numAffected.should.be.equal(1)
                done()
            })
        })
    })

    describe("#deleteProject()", function(){
        it("numAffected should greaterThan 0", function(done){
            ProjectProxy.deleteProject(projectId, function(err, numAffected){
                should.not.exist(err)
                numAffected.should.be.equal(1)
                done()
            })
        })
    })
})
