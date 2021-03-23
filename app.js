const express = require('express');

const app = express();

const feedRouts = require('./routers/feed');

app.use('/feed', feedRouts);

app.listen(8080);
