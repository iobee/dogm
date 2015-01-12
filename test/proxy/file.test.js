var should = require("should")
var proxy = require("../../proxy")
var FileProxy = proxy.File

describe("test/proxy/file.test.js", function() {
    var fileId

    before(function(done){
        FileProxy.newAndSave("test.test", "~/download/test", function(err, file){
            should.not.exist(err)
            file.should.have.property("path", "~/download/test")
            fileId = file._id
            done()
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

    after(function(done){
        FileProxy.deleteFileById(fileId, function(err, count){
            should.not.exist(err)
            count.should.be.equal(1)
            done()
        })
    })
})
