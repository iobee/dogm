var RoleProxy = require("../../proxy").Role
var should = require("should")

describe("test/proxy/role.test.js", function(){
    var roleId

    // create role for test
    before(function(done){
        var role = {
            name: "test",
            status: 1
        }

        RoleProxy.createRole(role, function(err, role){
            should.not.exist(err)
            role.should.have.property("name", "test")
            roleId = role._id
            done()
        })

    })

    describe("#getRoleDetail()", function(){
        it("should return role detail", function(done){
            RoleProxy.getRoleInfo(roleId, function(err, role){
                should.not.exist(err)
                role.should.have.property("name", "test")
                done()
            })
        })
    })
    describe("#getRoleList()", function(){
        it("should get role list", function(done){
            RoleProxy.getRoleList(function(err, roles){
                should.not.exist(err)
                roles.length.should.be.greaterThan(0)
                done()
            })
        })
    })

    describe("#updateRole()", function(){
        it("should return numAffected", function(done){
            var role = {
                name: "update name",
                status: 0
            }

            RoleProxy.updateRoleById(roleId, role, function(err, numAffected){
                should.not.exist(err)
                numAffected.should.be.equal(1)
                done()
            })
        })
    })

    describe("#deleteRole()", function(){
        it("numAffected should greaterThan 0", function(done){
            RoleProxy.deleteRole(roleId, function(err, numAffected){
                should.not.exist(err)
                numAffected.should.be.equal(1)
                done()
            })
        })
    })
})
