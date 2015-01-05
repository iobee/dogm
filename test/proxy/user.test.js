var should = require("should")
var proxy = require("../../proxy")
var UserProxy = proxy.User

describe("test/proxy/user.test.js", function() {
    describe("#getUserList()", function() {
        it("should show users", function(done) {
            UserProxy.getUserList(["name"], function(err, users) {
                should.not.exist(err)
                users.should.have.length(1)
                done()
            })
        })
    })

})
