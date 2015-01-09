var should = require("should")
var app = require("../../app")
var request = require("supertest")(app)

describe("test/controller/bug.test.js", function(){
    describe("get /users/:id/bugs", function(){
        it("result's length should be gt 0", function(done){
            request.get("/users/1/bugs")
                .expect(200)
                .end(function(err, bugs){
                    should.not.exist(err)
                    bugs.length.should.be.greaterThan(0)
                    done()
                })
        })
    })

    describe("post /bugs", function(){
        it("should create success", function(done){
            request.post("/bugs")
                .send({
                    userId: "1",
                    summary: "this is a test bug",
                    desc: "test, test, test"
                })
                .expect("Location", /http/)
                .expect(201)
                .end(function(err, res){
                    should.not.exist(err)
                    res.body.should.have.property("userId", "1")
                    done()
                })
        })
    })

    describe("patch /bugs/:id", function(){
        it("should update bugs success", function(done){
            request.patch("/bugs/1")
                .send({
                    summary: "this is a update bug",
                    desc: "You jump, i jump"
                })
                .expect(204)
                .end(done)
        })
    })

    describe("delete /bugs/:id", function(){
        it("should delete success", function(done){
            request.delete("/bugs/1")
                .expect(204)
                .end(done)
        })
    })

    describe("post /users/:userId/bugs/:bugId", function(){
        it("should assign bugs to user", function(done){
            request.post("/users/:userId/:id")
                .expect(204)
                .end(done)
        })
    })
})