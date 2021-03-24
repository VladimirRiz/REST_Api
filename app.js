const express = require('express');

const mongoose = require('mongoose');

const feedRouts = require('./routers/feed').router;

const app = express();

const MONGODB_URI =
  'mongodb+srv://rizian:rizPass@cluster0.h28ps.mongodb.net/messages?retryWrites=true&w=majority';

app.use(express.json()); // application/json

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/feed', feedRouts);

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
