var should = require("should")
var app = require("../../app")
var request = require("supertest")(app)

describe("test/controller/user.test.js", function(){
    describe("get /users/1", function(){
        it("should get user detail success", function(done){
            request.get("/users/1")
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
            request.get("/user")
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

    describe("post /users", function(){
        it("should create a user success", function(done){
            request.post("/users")
                .send({
                    username: "nick",
                    realname: "wangdong",
                    email: "iobee@sina.com"
                })
                .expect("Location", /http:\/\/www[\w]+/)
                .expect(201)
                .end(function(err, res){
                    should.not.exist(err)
                    res.body.should.have.property("username", "nick")
                    done()
                })
        })
    })
})