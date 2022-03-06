const express = require('express');
const app = express();
const morgan = require('morgan');
const index = require('./router/index');

app.use(morgan('dev'));
app.use("/", index);

module.exports = app;