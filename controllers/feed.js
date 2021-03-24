const { validationResult } = require('express-validator');

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
  console.log(title, content);
  res.status(201).json({
    message: 'Success!',
    post: {
      _id: new Date().toISOString(),
      title,
      content,
      creator: {
        name: 'Riz',
      },
      createdAt: new Date(),
    },
  });
};
