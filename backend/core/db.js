'use strict';
const settings = require('../config/db.json');
const Db = require('mongodb').Db;
const Connection = require('mongodb').Connection;
const Server = require('mongodb').Server;
//根据settings.js里的数据库名，地址，端口创建数据库连接实例
let options = {
    safe: true
};
let server = new Server(settings['host'], settings['port']);

module.exports = new Db(settings['dbName'], server, options);
