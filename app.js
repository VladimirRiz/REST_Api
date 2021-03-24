const path = require('path');
const express = require('express');

const mongoose = require('mongoose');

const feedRouts = require('./routers/feed');

const app = express();

const MONGODB_URI =
  'mongodb+srv://rizian:rizPass@cluster0.h28ps.mongodb.net/messages';

app.use(express.json()); // application/json
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/feed', feedRouts);

app.use((error, req, res, next) => {
  console.log(error);
  const { statusCode, message } = error;
  res.status(statusCode).json({ message });
});

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
