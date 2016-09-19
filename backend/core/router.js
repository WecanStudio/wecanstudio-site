'use strict';
/**
 * 这个文件中保存了所有的路由信息，而这些路由指向的是 controller 中的方法
 */
const router = require('express').Router();
const postController = require('../controllers/post');

router.get('/post/:category', postController.getAllPosts);

router.get('/post/:category/:title', postController.getOnePost);

router.get('/tags', postController.getAvailableTags);

router.get('/tags/:tag', postController.getPostsByTag);

router.post('/submitComment', postController.addComment);

module.exports = router;
