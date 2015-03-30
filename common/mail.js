"use strict"
var mailer = require("nodemailer")
var smtpTransport = require("nodemailer-smtp-transport")
var config = require("../config.default")
var util = require("util")

var transport = mailer.createTransport(smtpTransport(config.mail_opts))
var SITE_ROOT_URL = "http://" + config.hostname

var sendMail = function(data, callback){
    callback = callback || function() {}

    if(config.debug){
        return
    }

    transport.sendMail(data, callback)
}

exports.sendMail = sendMail

/**
 * Send the activation email
 * @param {String} who recipients address
 * @param {String} token token for reset
 * @param {String} name Recipients username
 */
exports.sendActiveMail = function(who, token, name, callback) {
    var from = util.format('%s <%s>', config.name, config.mail_opts.auth.user)
    var to = who
    var subject = config.name + '社区密码重置'
    var html = '<p>您好：' + name + '</p>' +
        '<p>我们收到您在' + config.name + '社区重置密码的请求，请在24小时内单击下面的链接来重置密码：</p>' +
        '<a href="' + SITE_ROOT_URL + '/reset_pass?key=' + token + '&name=' + name + '">重置密码链接</a>' +
        '<p>若您没有在' + config.name + '社区填写过注册信息，说明有人滥用了您的电子邮箱，请删除此邮件，我们对给您造成的打扰感到抱歉。</p>' +
        '<p>' + config.name + '社区 谨上。</p>'

    console.log("Email content:  " + html)

    sendMail({
        from: from,
        to: to,
        subject: subject,
        html: "test"
    }, callback)
}
