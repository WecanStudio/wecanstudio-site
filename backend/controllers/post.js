'use strict';

const tool = require('../core/tool');
const Post = require('../models/post');

let pub = {};

// 获取文章列表
pub.getAllPosts = async(req, res) => {
  let category = req.params.category;
  Post.getAll(category, function(err, docs) {
    if (err) {
      tool.l(err);
      res.send([]);
    }
    res.send(docs);
  });
}

pub.addPost = async(req, res) => {
  let title = req.params.title;
  let content = req.params.content;
  let tags = req.params.tags;
  let category = req.params.category;
  let post = new Post(category, title, tags, content);
  post.save(function(err) {
    if (err) {
      tool.l(err);
      res.status(500);
      return;
    }
    res.send('success');
  })
}

pub.getOnePost = async(req, res) => {
  let category = req.params.category;
  let title = req.params.title;
  Post.getOne(category, title, function(err, docs) {
    if (err) {
      tool.l(err);
      res.send([]);
    }
    res.send(docs);
  });
}

pub.getPostsByTag = async(req, res) => {
  let tag = req.params.tag;
  Post.getPostByTag(tag, function(err, docs) {
    if (err) {
      tool.l(err);
      res.send([]);
    }
    res.send(docs);
  });
}

pub.getAvaliableTags = async(req, res) => {
  Post.getAvaliableTags(function(err, tags) {
    if (err) {
      tool.debug(err);
      res.send([]);
    }
    res.send(tags);
  });
}

pub.addComment = async(req, res) => {
  let category = req.params.category;
  let title = req.params.title;
  let commentContent = req.params.comment;
  let comment = new Comment(category, title, commentContent);
  comment.save(function(err) {
    if (err) {
      tool.l(err);
      res.status(500);
      return;
    }
    res.send('success');
  })
}

module.exports = pub;
