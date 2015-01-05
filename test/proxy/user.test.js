var should = require("should")
var proxy = require("../../proxy")
var UserProxy = proxy.User

describe("test/proxy/user.test.js", function() {
    describe("#saveUser", function() {
        it("new user", function(done) {
            UserProxy.saveUser("nick", function(err, result) {
                should.not.exist(err)
                should.exist(result)
                console.info(result)
                done()
            })
        })
    })

    describe("#getUserList()", function() {
        it("should show users", function(done) {
            UserProxy.getUserList(["nick"], function(err, users) {
                should.not.exist(err)
                users.length.should.be.above(1)
                done()
            })
        })
    })

})
