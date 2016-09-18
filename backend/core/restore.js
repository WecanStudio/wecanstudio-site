'use strict'
const mongodb = require('../core/db');
const tool = require('../core/tool');

let docs = require('../../backup/backup.json');
mongodb.open(function(err, db) {
  if (err) {
    tool.debug(err);
    return;
  }
  db.collection('posts', function(err, collection) {
    if (err) {
      tool.debug(err);
      return;
    }
    collection.insert(docs, {
      safe: true
    }, function(err) {
      mongodb.close();
      if (err) {
        tool.debug(err);
        return;
      }
    });
    tool.debug('restore success \n');
  });
});
