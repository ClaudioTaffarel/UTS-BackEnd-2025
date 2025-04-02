const express = require('express');
const abilitiesController = require('./abilities-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/abilities', route);

  route.get('/name/:name', abilitiesController.getAbilityByName);
  route.get('/:id', abilitiesController.getAbilityById);
  route.get('/', abilitiesController.getAbilities);
  route.post('/', abilitiesController.createAbilities);
};
