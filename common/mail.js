"use strict"
var mailer = require("nodemailer")
var smtpTransport = require("nodemailer-smtp-transport")
var config = require("../config.default")
var util = require("util")

var transport = mailer.createTransport(smtpTransport(config.mail_opts))
var SITE_ROOT_URL = "http://" + config.hostname

var sendMail = function(data){
    if(config.debug){
        return
    }

    transport.sendMail(data, function(err){
        if(err){
            console.error(err)
        }
    })
}

exports.sendMail = sendMail

/**
 * Send the activation email
 * @param {String} who recipients address
 * @param {String} token token for reset
 * @param {String} name Recipients username
 */
exports.sendActiveMail = function(who, token, name){
    var from = util.format("%s <%s>", config.name, config.mail_opts.auth.user)
    var to = who
    var subject = config.name + "DogM Account"
    var html = "Hello world"

    exports.sendMail({
        from: from,
        to: to,
        subject: subject,
        html: html
    })
}
