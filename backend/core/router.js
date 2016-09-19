'use strict';
const router = require('express').Router();
const postController = require('../controllers/post');

// 博客文章列表
router.get('/post/:category', postController.getAllPosts);

router.get('/post/:category/:title', postController.getOnePost);

// tags
router.get('/tags', postController.getAvaliableTags);

router.get('/tags/:tag', postController.getPostsByTag);

router.post('/submitComment', postController.addComment);

module.exports = router;
