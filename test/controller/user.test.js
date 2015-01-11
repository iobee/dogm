var should = require("should")
var app = require("../../app")
var request = require("supertest")(app)

describe("test/controller/user.test.js", function(){
    var userId

    describe("post /users", function() {
        it("should create a user success", function (done) {
            request.post("/api/v1/users")
                .send({
                    username: "nick",
                    realName: "wangdong",
                    email: "iobee@sina.com"
                })
                .expect(201)
                .expect("Location", /http/)
                .end(function (err, res) {
                    should.not.exist(err)
                    res.body.should.have.property("username", "nick")
                    userId = res.body._id
                    done()
                })
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
            request.get("/api/v1/user")
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
})