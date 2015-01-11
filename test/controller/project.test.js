var should = require("should")
var app = require("../../app")
var request = require("supertest")(app)

describe("test/controller/project.test.js", function(){
    var projectId

    before(function(done){
        request.post("/api/v1/projects")
            .send({
                name: "test",
                status: 1
            })
            .expect(201)
            .end(function(err, res){
                should.not.exist(err)
                res.body.should.have.property("name")
                projectId = res.body._id
                done()
            })

    })

    describe("#get /projects", function(){
        it("should return project list", function(done){
            request.get("/api/v1/projects")
                .expect(200)
                .end(function(err, res){
                    should.not.exist(err)
                    res.body.length.should.greaterThan(0)
                    done()
                })
        })
    })

    describe("#post /projects", function(){
        it("should create project success", function(done){
            request.post("/api/v1/projects")
                .send({
                    name: "post project",
                    status: 1
                })
                .expect(201)
                .expect("Location", /http/)
                .end(function(err, res){
                    should.not.exist(err)
                    res.body.should.have.property("name", "post project")
                    done()
                })
        })
    })

    describe("#get /projects/:id", function(){
        it("should return project info", function(done){
            request.get("/api/v1/projects/" + projectId)
                .expect(200)
                .end(function(err, res){
                    should.not.exist(err)
                    res.body.should.have.property("name")
                    done()
                })
        })
    })
})
