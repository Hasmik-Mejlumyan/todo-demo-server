const { nanoid } = require('nanoid');

const Todo = require('../models/todos.model');

async function httpCreateTodo(req, res) {
  try {
    const todo = req.body;

    if (!todo.title || todo.isDone === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Title and isDone are required.',
      });
    }

    const id = nanoid();
    const todoData = {
      id,
      ...todo,
    };

    Todo.push(todoData);

    return res.status(201).json({
      success: true,
      data: todoData,
      message: 'Todo is created successfully.',
    });
  } catch (error) {
    console.log('httpCreateTodo', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong.',
    });
  }
}

async function httpGetTodos(req, res) {
  try {
    return res.status(200).json({
      success: true,
      data: Todo,
      message: 'Todos are fetched successfully.',
    });
  } catch (error) {
    console.log('httpGetTodos', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong.',
    });
  }
}

module.exports = {
  httpCreateTodo,
  httpGetTodos,
};
