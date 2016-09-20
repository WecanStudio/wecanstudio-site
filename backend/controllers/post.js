'use strict';

const tool = require('../core/tool');
const Post = require('../models/post');
const Comment = require('../models/comment');
const config = require('../config/main.json');

let pub = {};

// 获取文章列表
pub.getAllPosts = async(req, res) => {
  let category = req.params.category;
  Post.getAll(category, function (err, docs) {
    if (err) {
      tool.l(err);
      res.send([]);
    }
    res.send(docs);
  });
};

// 增加一篇文章
pub.addPost = async(req, res) => {
  // 验证发文码
  let password = req.body.password;
  if (password != config.password) {
    res.send(JSON.stringify({'code': -1}));
    return;
  }
  let title = req.body.title;
  let content = req.body.content;
  let tags = req.body.tags;
  let abstract = req.body.abstract;
  let category = req.body.category;
  let post = new Post(category, title, tags, content, abstract);
  let jsonStr = JSON.stringify(post);
  tool.debug(jsonStr);
  post.save(function (err) {
    if (err) {
      tool.l(err);
      res.status(500);
      return;
    }
    res.send(JSON.stringify({'code': 0}));
  })
};

// 获取一篇文章
pub.getOnePost = async(req, res) => {
  let category = req.params.category;
  let title = req.params.title;
  Post.getOne(category, title, function (err, docs) {
    if (err) {
      tool.l(err);
      res.send([]);
    }
    res.send(docs);
  });
};

// 根据标签来获取一批文章
pub.getPostsByTag = async(req, res) => {
  let tag = req.params.tag;
  Post.getPostByTag(tag, function (err, docs) {
    if (err) {
      tool.l(err);
      res.send([]);
    }
    res.send(docs);
  });
};

pub.getAvailableTags = async(req, res) => {
  Post.getAvailableTags(function (err, tags) {
    if (err) {
      tool.debug(err);
      res.send([]);
    }
    res.send(tags);
  });
};

pub.addComment = async(req, res) => {
  let category = req.body.category;
  let title = req.body.title;
  let content = req.body.content;
  let name = req.body.name;
  let comment = new Comment(category, title, content, name);
  comment.save(function (err) {
    if (err) {
      tool.l(err);
      res.status(500);
      return;
    }
    res.send(JSON.stringify({'name': name, 'content': content}));
  })
};

module.exports = pub;
