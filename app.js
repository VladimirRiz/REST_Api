const express = require('express');

const feedRouts = require('./routers/feed').router;

const app = express();

app.use(express.json()); // application/json

app.use('/feed', feedRouts);

app.listen(8080);
