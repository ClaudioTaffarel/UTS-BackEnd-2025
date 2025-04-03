const express = require('express');
const dungeonsController = require('./dungeons-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/dungeons', route);

  route.get('/name/:name', dungeonsController.getDungeonByName);
  route.get('/:id', dungeonsController.getDungeonById);
  route.get('/', dungeonsController.getDungeons);
  route.post('/', dungeonsController.createDungeons);
};
