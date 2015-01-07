var should = require("should")
var app = require("../../app")
var request = require("supertest")(app)

describe("test/controller/file.test.js", function(){
    describe("#getFile", function(){
        it("should get a file", function(done){
            request.get("/api/v1/files/54ad1b4fe70dbaa932c44e24").expect(200, function(err, res){
                console.log(res.text)
                done(err)
            })
        })
    })

    describe("#uploadFile", function(){
        it("should upload a file", function(done){
            request.post("/api/v1/files").attach("test", "public/test.png").expect(200, function(err, res){
                console.log(res.text)
                done(err)
            })
        })
    })
})