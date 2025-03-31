const express = require('express');
const gamesController = require('./games-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/games', route);

  route.get('/name/:name', gamesController.getGameByName);
  route.get('/:id', gamesController.getGameById);
  route.get('/', gamesController.getGames);
  route.post('/', gamesController.createGames);
};
