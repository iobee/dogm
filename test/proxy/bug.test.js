var should = require("should")
var BugProxy = require("../../proxy").Bug

describe("test/proxy/bug.test.js", function(){
    var userId,bugId

    before(function(done){
        var bug = {
            userId: "123456678",
            summary: "this ia a test bug",
            desc: "this bug has a huge six"
        }
        BugProxy.newAndSave(bug, function(err, bug){
            if(err){
                done(err)
            }
            bugId = bug._id
            userId = bug.userId
            done()
        })
    })

    describe("#getBugsByUser()", function(){
        it("result's length should not null", function(done){
            BugProxy.getBugByUser(userId, function(err, bugs){
                should.not.exist(err)
                bugs.length.should.be.greaterThan(0)
                done()
            })
        })
    })

    describe("#updateBug()", function(){
        var bug = {
            userId: "123456678",
            summary: "this ia a test bug update",
            desc: "this bug has a huge six"
        }

        it("should update success", function(done){
            BugProxy.updateBug(bugId, bug, function(err, numAffected){
                should.not.exist(err)
                numAffected.should.be.greaterThan(0)
                done()
            })
        })
    })
})