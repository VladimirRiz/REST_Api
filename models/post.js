const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    creator: {
      content: {
        type: Object,
        required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
