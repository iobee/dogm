/**
 * Created by Serpurity on 1/4/2015.
 */
var path = require("path")

var config = {
    // development state
    debug: true,

    // server config
    port: 3000,
    hostname: "localhost",

    // session 配置
    session_secret: "node_club_dev"
    auth_cookie_name: "node_clue"

    // mongodb 配置
    db: 'mongodb://127.0.0.1/node_club_dev',
    db_name: 'node_club_dev',

    // upload
    upload: {
        path: path.join(__dirname, 'public/upload/'),
        url: '/public/upload/'
    }
}

module.exports = config
