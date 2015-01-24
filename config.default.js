/**
 * Created by Serpurity on 1/4/2015.
 */
var path = require("path")

var config = {
    // development state
    debug: false,

    name: "dogM",

    // server config
    port: 3000,
    hostname: "0.0.0.0",

    // log level config
    // 1: debug
    logLevel: 1,

    // session 配置
    session_secret: "node_club_dev",
    auth_cookie_name: "node_clue",

    // mongodb 配置
    db: 'mongodb://127.0.0.1/node_club_dev',
    db_name: 'node_club_dev',

    // upload
    upload: {
        path: path.join(__dirname, 'public/upload/'),
        url: '/public/upload/'
    },

    // mail config
    mail_opts: {
        host: "smtp.sina.com",
        port: 25,
        tls: {rejectUnauthorized: false},
        debug: true,
        auth: {
            user: "iobee@sina.com",
            pass: "iobee"
        }
    }
}

module.exports = config
