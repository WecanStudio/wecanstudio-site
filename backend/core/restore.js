'use strict'
const mongodb = require('../core/db');
const tool = require('../core/tool');
const backupConfig = require('../config/backup.json');
let postDocs = require('../' + backupConfig.posts);
let resumeDocs = require('../' + backupConfig.resumes);

mongodb.open(function (err, db) {
  if (err) {
    tool.debug(err);
    return;
  }
  db.collection('posts', function (err, collection) {
    if (err) {
      tool.debug(err);
      return;
    }
    collection.deleteMany({}, function (err, results) {
      if (err) {
        tool.debug(err);
        return;
      }
      tool.debug('posts collection has been clear : ' + results + '\n');
      collection.insert(postDocs, {
        safe: true
      }, function (err) {
        if (err) {
          tool.debug(err);
        }
        tool.debug('posts restore success \n');

        db.collection('resumes', function (err, collection) {
          if (err) {
            tool.debug(err);
            return;
          }
          collection.deleteMany({}, function (err, results) {
            if (err) {
              tool.debug(err);
              return;
            }
            tool.debug('resumes collection has been clear : ' + results + '\n');
            collection.insert(resumeDocs, {
              safe: true
            }, function (err) {
              mongodb.close();
              if (err) {
                tool.debug(err);
              }
              tool.debug('resumes restore success \n');
            });
          });
        });
      });
    });
  });
});
