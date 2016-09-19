'use strict';
const mongodb = require('../core/db');
const tool = require('../core/tool');

function Comment(category, title, content, username) {
  this.category = category;
  this.title = title;
  this.content = content;
  this.leavename = username;
}

Comment.prototype.save = function (callback) {
  let comment = this;
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    db.collection('posts', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      tool.l(`add comment ${comment.category} ${comment.title}`);
      collection.update({
        "category": comment.category,
        "title": comment.title
      }, {
        $push: {
          "comments": {
            content: comment.content,
            name: comment.leavename
          }
        }
      }, function (err) {
        mongodb.close();
        if (err) {
          return callback(err);
        }
        callback(null);
      });
    });
  });
};

module.exports = Comment;
