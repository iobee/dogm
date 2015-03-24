var should = require("should")

var mail = require("../../common/mail")

describe("test/common/mail.test.js", function() {
   describe("#sendEmail()", function() {
       it("should send email success", function(done) {
           mail.sendActiveMail("iobee@sina.com", "token-test", "nick", done)
       })
   })
})