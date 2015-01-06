var should = require("should")
var proxy = require("../../proxy")
var FileProxy = proxy.File

describe("test/proxy/file.test.js", function() {
    describe("#uploadFile", function() {
        it("should upload file", function(done) {
            FileProxy.uploadFile("test.js", "~/download/test.js", function(err, result) {
                should.not.exist(err)
                should.exist(result)
                done()
            })
        })
    })
})
