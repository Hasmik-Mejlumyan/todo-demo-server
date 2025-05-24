const express = require('express');

const { httpCreateTodo, httpGetTodos } = require('../controllers/todos.controller');

const todoRouter = express.Router();

todoRouter.post('/', httpCreateTodo);
todoRouter.get('/', httpGetTodos);


module.exports = todoRouter;