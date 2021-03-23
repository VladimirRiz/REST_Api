exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: 'First Title', content: 'This is first content' }],
  });
};

exports.createPost = (req, res, next) => {
  const { title, content } = req.body;
  res.status(201).json({
    message: 'Success!',
    post: {
      id: new Date().toISOString(),
      title,
      content,
    },
  });
};
