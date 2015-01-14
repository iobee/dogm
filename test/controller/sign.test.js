var should = require("should")
var app = require("../../app")
var request = require("supertest")(app)

describe("test/controller/sign.test.js", function(){
    var userId

    // sign up a user for test
    before(function(done){
        request.post("/api/v1/users")
            .send({
                email: "iobee@sina.com",
                password: "123456"
            })
            .expect(201)
            .end(function(err, res){
                if(err){
                    done(err)
                }

                userId = res.body._id
                done()
            })
    })

    describe("get /login", function(){
        it("should return a cookie", function(done){
            request.get("/api/v1/login")
                .send({
                    email: "iobee@sina.com",
                    password: "123456"
                })
                .expect("Set-Cookie", /\w+/)
                .expect(200)
                .end(function(err, res){
                    if(err){
                        done(err)
                    }
                    res.body.should.have.property("email")
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