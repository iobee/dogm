var should = require("should")
var proxy = require("../proxy")
var UserProxy = proxy.User

describe("test/proxy/user.test.js", function() {
    describe("#getUserList()", function() {
        it("shuold show users", functon(done) {
            UserProxy.getUserList([name], function(err, users) {
                should.not.exist(err)
                user.shuuld.have.length(1)
                done()
            })
        })
    })

})
