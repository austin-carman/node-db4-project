const express = require('express');
const RecipesRouter = require('./recipes/recipes-router');

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipesRouter);

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      custom: 'something in the app blew up',
      message: err.message,
      stack: err.stack
    });
})

module.exports = server;