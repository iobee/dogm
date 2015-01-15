var should = require("should")
var app = require("../../app")
var supertest = require("supertest")
var request = supertest(app)

// for cookie test
var agent = supertest.agent(app)

describe("test/controller/sign.test.js", function(){
    var userId

    // sign up a user for test
    before(function(done){
        request.post("/api/v1/users")
            .send({
                username: "nick",
                email: "iobee@sina.com",
                password: "123456"
            })
            .expect(201)
            .end(function(err, res){
                if(err){
                    return done(err)
                }

                userId = res.body._id
                done()
            })
    })

    describe("get /login", function(){
        it("should return a cookie", function(done){
            agent.get("/api/v1/login")
                .query({
                    email: "iobee@sina.com",
                    password: "123456"
                })
                .expect("Set-Cookie", /\w+/)
                .expect(200)
                .end(function(err, res){
                    if(err){
                        return done(err)
                    }
                    res.body.should.have.property("email")
                    done()
                })
        })

        it("should return current user", function(done){
            agent.get("/api/v1/user")
                .expect(200)
                .end(function(err, res){
                    if(err){
                        return done(err)
                    }

                    res.body.should.have.property("email", "iobee@sina.com")
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