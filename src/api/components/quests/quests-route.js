const express = require('express');
const questsController = require('./quests-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/quests', route);

  route.get('/name/:name', questsController.getQuestByName);
  route.get('/:id', questsController.getQuestById);
  route.get('/', questsController.getQuests);
  route.post('/', questsController.createQuests);
};
