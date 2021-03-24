const { validationResult } = require('express-validator');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: 12,
        title: 'First Title',
        content: 'This is first content',
        imageUrl: 'images/book.png',
        creator: {
          name: 'Riz',
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const { title, content } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ message: 'Validation failed', errors: errors.array() });
  }
  const post = new Post({
    title: title,
    content: content,
    image: 'images/book.png',
    creator: {
      name: 'Riz',
    },
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Success!',
        post: result,
      });
    })
    .catch((err) => console.log(err));
  console.log(title, content);
};
