var should = require("should")
var app = require("../../app")
var request = require("supertest")(app)
var async = require("async")

describe("test/controller/bug.test.js", function(){
    var userId,bugId
    before(function(done){
        // 异步调用
        async.waterfall([
            function(callback){
                // insert a test user
                request.post("/api/v1/users")
                    .send({
                        username: "nick",
                        realName: "test user",
                        email: "test@sina.com",
                        password: "123456"
                    })
                    .expect(201)
                    .end(function(err, res){
                        userId = res.body._id
                        callback(err, res.body._id)
                    })
            },
            function(arg1, callback){
                console.log("DEBUG: userId = " + arg1)
                // insert a test bug
                request.post("/api/v1/bugs")
                    .send({
                        summary: "it's bug",
                        desc: "test",
                        _handler: arg1,
                        _reporter: arg1
                    })
                    .expect(201)
                    .end(function(err, res){
                        bugId = res.body._id
                        console.log(1)
                        console.log("DEBUG: bugId = " + bugId)
                        callback(err, res.body)
                    })
            }
        ], function(err, result){
            if(err){
                return done(err)
            }
            done()
        })
    })

    describe("get /users/:id/bugs", function(){
        it("result's length should be gt 0", function(done){
            request.get("/api/v1/users/" + userId + "/bugs")
                .expect(200)
                .end(function(err, res){
                    should.not.exist(err)
                    console.log("DEBUG uses's bugs length =" + res.body.length)
                    res.body.length.should.be.greaterThan(0)
                    done()
                })
        })
    })

    describe("post /bugs", function(){
        it("should create success", function(done){
            request.post("/api/v1/bugs")
                .send({
                    _handler: userId,
                    summary: "this is a test bug",
                    desc: "test, test, test"
                })
                .expect("Location", /http/)
                .expect(201)
                .end(function(err, res){
                    should.not.exist(err)
                    res.body.should.have.property("_handler", userId)
                    done()
                })
        })
    })

    describe("post /users/:userId/bugs/:bugId", function(){
        it("should assign bugs to user", function(done){
            request.post("/api/v1/users/" + userId + "/bugs/" + bugId)
                .expect(204)
                .end(done)
        })
    })

    describe("patch /bugs/:id", function(){
        it("should update bugs success", function(done){
            request.patch("/api/v1/bugs/" + bugId)
                .send({
                    summary: "this is a update bug",
                    desc: "You jump, i jump"
                })
                .expect(204)
                .end(function(err, res){
                    done(err)
                })
        })
    })

    describe("delete /bugs/:id", function(){
        it("should delete success", function(done){
            console.log(bugId)
            request.delete("/api/v1/bugs/" + bugId)
                .expect(204)
                .end(function(err, res){
                    done(err)
                })
        })
    })

    after(function(done){
        // delete user for other test
        request.delete("/api/v1/users/" + userId)
            .expect(204)
            .end(done)
    })
})