const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const feedController = require('../controllers/feed');

//GET feed/posts
router.get('/posts', feedController.getPosts);

router.post(
  '/post',
  [
    body('title').isString().isLength({ min: 7 }).trim(),
    body('content').isString().isLength({ min: 5 }).trim(),
  ],
  feedController.createPost
);

exports.router = router;
