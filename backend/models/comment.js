'use strict';
const mongodb = require('../core/db');

function Comment(category, title, comment) {
  this.category = category;
  this.title = title;
  this.comment = comment;
}

Comment.prototype.save = function(callback) {
  let category = this.category;
  let title = this.title;
  let content = this.content;
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    db.collection('posts', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      collection.update({
        "category": name,
        "title": title
      }, {
        $push: {
          "comments": comment
        }
      }, function(err) {
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
