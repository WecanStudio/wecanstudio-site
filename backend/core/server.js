'use strict';
let app = require('./app');
let config = require('../config/main.json');

let port = config['port'];
app.listen(port, function () {
  console.log('Node app is running, port:', port);
  // 注册全局未捕获异常处理器
  process.on('uncaughtException', function(err) {
    console.error("Caught exception:", err.stack);
  });
  process.on('unhandledRejection', function(reason, p) {
    console.error("Unhandled Rejection at: Promise ", p, " reason: ", reason.stack);
  });
});
