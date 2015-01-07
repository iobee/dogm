var should = require("should")
var proxy = require("../../proxy")
var FileProxy = proxy.File

describe("test/proxy/file.test.js", function() {
    describe("#newAndSave", function() {
        it("should upload file", function(done) {
            FileProxy.newAndSave("test.js", "~/download/test.js", function(err, result) {
                should.not.exist(err)
                console.log(result._id)
                should.exist(result)
                done()
            })
        })
    })

    describe("#getFileList", function(){
        it("should files length gt 0", function(done){
            FileProxy.getFileList(function(err, files){
                should.not.exist(err)
                files.length.should.be.greaterThan(0)
                done()
            })
        })
    })

    describe("#getFileById", function(){
        it("should get a file detail", function(done){
            FileProxy.getFileById("54ad1b4fe70dbaa932c44e24", function(err, result){
                should.not.exist(err)
                console.log(result)
                should.exist(result)
                done()
            })
        })
    })
})
