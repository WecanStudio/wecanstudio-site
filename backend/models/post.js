'use strict'
const mongodb = require('../core/db');

function Post(category, title, tags, post) {
  this.category = category;
  this.title = title;
  this.tags = tags;
  this.content = post;
}

Post.prototype.save = function(callback) {
  let date = new Date();
  let saveTime = {
    date: date,
    year: date.getFullYear(),
    month: date.getFullYear() + "-" + (date.getMonth()),
    day: date.getFullYear() + "-" + (date.getMonth()) + "-" + (date.getDate()),
    minute: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
  };

  let post = {
    category: this.category,
    time: saveTime,
    title: this.title,
    content: this.content,
    tags: this.tags,
    comments: []
  };
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    db.collection('posts', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      collection.insert(post, {
        safe: true
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

//返回含有特定标签的所有文章
Post.getPostByTag = function(tag, callback) {
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    db.collection('posts', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //查询所有 tags 数组内包含 tag 的文档
      collection
        .find({
          "tags": tag
        })
        .sort({
          time: -1
        })
        .toArray(function(err, docs) {
          mongodb.close();
          if (err) {
            return callback(err);
          }
          callback(null, docs);
        });
    });
  });
};

Post.getAvaliableTags = function(callback) {
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    db.collection('posts', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      collection.distinct('tags', function(err, docs) {
        mongodb.close();
        if (err) {
          return callback(err);
        }
        callback(null, docs);
      });
    });
  });
};

Post.getAll = function(category, callback) {
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    db.collection('posts', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      let query = {};
      if (category) {
        query.category = category;
      }
      collection
        .find(query)
        .sort({
          time: -1
        })
        .toArray(function(err, docs) {
          mongodb.close();
          if (err) {
            return callback(err);
          }
          callback(null, docs);
        });
    });
  });
};

Post.getLimit = function(category, limit, page, callback) {
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    db.collection('posts', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      let query = {};
      if (name) {
        query.category = category;
      }
      collection.count(query, function(err, total) {
        collection
          .find(query, {
            skip: (page - 1) * limit,
            limit: limit
          })
          .sort({
            time: -1
          })
          .toArray(function(err, docs) {
            mongodb.close();
            if (err) {
              return callback(err);
            }
            callback(null, docs, total);
          });
      });
    });
  });
};

Post.getOne = function(category, title, callback) {
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    db.collection('posts', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      collection
        .findOne({
          "category": category,
          "title": title
        }, function(err, doc) {
          mongodb.close();
          if (err) {
            return callback(err);
          }
          callback(null, doc);
        });
    });
  });
};

Post.update = function(category, title, content, callback) {
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    db.collection('posts', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      collection
        .update({
          "category": category,
          "title": title
        }, {
          $set: {
            content: content
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

Post.remove = function(category, title, callback) {
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    db.collection('posts', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      collection
        .remove({
          "category": category,
          "title": title
        }, {
          w: 1
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

module.exports = Post;
