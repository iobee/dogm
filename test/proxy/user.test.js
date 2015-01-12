var should = require("should")
var proxy = require("../../proxy")
var UserProxy = proxy.User

describe("test/proxy/user.test.js", function() {
    var userId

    // for test, before test new a user
    before(function(done){
        UserProxy.saveUser({
            username: "nick",
            realName: "test",
            email: "iobee@sina.com",
            password: "123456"
        }, function(err, result){
            should.not.exist(err)
            result.should.have.property("username", "nick")
            userId = result._id
            done(err)
        })
    })

    describe("#getUserList", function() {
        it("should show all users", function(done) {
            UserProxy.getUserList([], function(err, users) {
                should.not.exist(err)
                users.length.should.be.above(0)
                done()
            })
        })
    })

    describe("#getUserByEmail", function(){
        it("should return a user", function(done){
            UserProxy.getUserByEmail("iobee@sina.com", function(err, users){
                should.not.exist(err)
                users.length.should.be.greaterThan(0)
                done()
            })
        })
    })

    describe("getUserById", function(){
        it("should get a user detail", function(done){
            UserProxy.getUserById(userId, function(err, user){
                should.not.exist(err)
                console.log("DEBUG return user is " + user.username)
                user.should.have.property("username", "nick")
                done()
            })
        })
    })

    describe("deleteUserById", function(){
        it("should delete a user", function(done){
            console.log("DEBUG: before delete he userId is" + userId)
            UserProxy.deleteUserById(userId, function(err, user){
                should.not.exist(err)
                console.log(user)
                should.exist(user)
                done()
            })
        })
    })

})
