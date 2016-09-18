'use strict';
const mongodb = require('../core/db');
const tool = require('../core/tool');

const fs = require('fs');
const writeLine = require('lei-stream').writeLine;

function backupPosts(docs) {
  let docStringify = JSON.stringify(docs);
  console.log(docStringify);
  let writeStream = fs.createWriteStream('../backup/backup.json');
  let docWriteLine = writeLine(writeStream, {
    newline: '\n',
  });
  writeStream.write(docStringify);
  docWriteLine.end(function() {
    tool.debug('backup success \n');
  });
}

mongodb.open(function(err, db) {
  if (err) {
    tool.debug(err);
    return;
  }
  db.collection('posts', function(err, collection) {
    if (err) {
      mongodb.close();
      tool.debug(err);
      return;
    }
    collection
      .find({})
      .sort({
        category: -1
      })
      .toArray(function(err, docs) {
        mongodb.close();
        if (err) {
          tool.debug(err);
          return;
        }
        backupPosts(docs);
      });
  });
});
