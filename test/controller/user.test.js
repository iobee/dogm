var should = require("should")
var app = require("../../app")
var supertest = require("supertest")
var request = supertest(app)

// for session test, agent can keep cookie
var agent = supertest.agent(app)

describe("test/controller/user.test.js", function(){
    var userId

    describe("post /users", function() {
        it("should create a user success", function (done) {
            request.post("/api/v1/users")
                .send({
                    username: "nick",
                    realName: "wangdong",
                    email: "iobee@test.com",
                    password: "123"
                })
                .expect("Location", /users/)
                .expect(201)
                .end(function (err, res) {
                    should.not.exist(err)
                    res.body.should.have.property("username", "nick")
                    userId = res.body._id
                    done()
                })
        })

        it("should email be unique", function(done){
            request.post("/api/v1/users")
                .send({
                    username: "nick",
                    realName: "wangdong",
                    email: "iobee@test.com",
                    password: "123"
                })
                .expect(400)
                .end(function(err, res){
                    should.not.exist(err)
                    res.body.should.have.property("errorCode", 10003)
                    done()
                })
        })

        // login for next session test
        it("should login success", function(done){
            agent.get("/api/v1/login")
                .query({
                    email: "iobee@test.com",
                    password: "123"
                })
                .expect(200)
                .end(done)
        })
    })

    describe("get /users/:id", function(){
        it("should get user detail success", function(done){
            request.get("/api/v1/users/" + userId)
                .expect(200)
                .end(function(err, res){
                    if(err){
                        done(err)
                    }

                    res.body.should.have.property("username", "nick")
                    done()
                })
        })
    })

    describe("get /user", function(){
        it("should return current user", function(done){
            agent.get("/api/v1/user")
                .expect(200)
                .end(function(err, res){
                    if(err){
                        done(err)
                    }

                    res.body.should.have.property("email", "iobee@test.com")
                    done()
                })
        })
    })

    describe("delete /users/:id", function(){
        it("should return status 204", function(done){
            request.delete("/api/v1/users/" + userId)
                .expect(204)
                .end(done)
        })
    })
})