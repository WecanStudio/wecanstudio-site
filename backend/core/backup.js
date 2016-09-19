'use strict';
const mongodb = require('../core/db');
const tool = require('../core/tool');
const backupConfig = require('../config/backup.json');

const fs = require('fs');
const writeLine = require('lei-stream').writeLine;

function backupPosts(docs) {
  let docStringify = JSON.stringify(docs);
  console.log(docStringify);
  let writeStream = fs.createWriteStream(backupConfig.posts);
  let docWriteLine = writeLine(writeStream, {
    newline: '\n',
  });
  writeStream.write(docStringify);
  docWriteLine.end(function () {
    tool.debug('posts backup success \n');
  });
}

function backupResume(docs) {
  let docStringify = JSON.stringify(docs);
  console.log(docStringify);
  let writeStream = fs.createWriteStream(backupConfig.resumes);
  let docWriteLine = writeLine(writeStream, {
    newline: '\n',
  });
  writeStream.write(docStringify);
  docWriteLine.end(function () {
    tool.debug('resumes backup success \n');
  });
}


mongodb.open(function (err, db) {
  if (err) {
    tool.debug(err);
    return;
  }
  db.collection('resumes', function (err, collection) {
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
      .toArray(function (err, docs) {
        mongodb.close();
        if (err) {
          tool.debug(err);
          return;
        }
        backupResume(docs);
      });
  });
  db.collection('posts', function (err, collection) {
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
      .toArray(function (err, docs) {
        mongodb.close();
        if (err) {
          tool.debug(err);
          return;
        }
        backupPosts(docs);
      });
  });
});

