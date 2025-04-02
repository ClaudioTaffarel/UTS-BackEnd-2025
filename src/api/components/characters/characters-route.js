const express = require('express');
const charactersController = require('./characters-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/characters', route);

  route.get('/name/:name', charactersController.getCharacterByName);
  route.get('/:id', charactersController.getCharacterById);
  route.get('/', charactersController.getCharacters);
  route.post('/', charactersController.createCharacters);
};
