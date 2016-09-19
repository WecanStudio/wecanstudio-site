'use strict';
const mongodb = require('../core/db');
const tool = require('../core/tool');

function Resume(name, id, phone, position, email, description) {
  this.name = name;
  this.id = id;
  this.phone = phone;
  this.position = position;
  this.email = email;
  this.description = description;
}

Resume.prototype.save = function (callback) {
  let date = new Date();
  let resume = this;
  resume.time = {
    date: date,
    year: date.getFullYear(),
    month: date.getFullYear() + "-" + (date.getMonth()),
    day: date.getFullYear() + "-" + (date.getMonth()) + "-" + (date.getDate()),
    minute: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
  };
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    db.collection('resumes', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      collection.insert(resume, {
        safe: true
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

module.exports = Resume;
