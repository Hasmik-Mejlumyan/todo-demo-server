const express = require('express');
const todoRouter = require('./todos.router');

const apiV1 = express.Router();

apiV1.use('/todos', todoRouter);

module.exports = {
  apiV1,
};
