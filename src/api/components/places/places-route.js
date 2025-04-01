const express = require('express');
const placesController = require('./places-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/places', route);

  route.get('/name/:name', placesController.getPlaceByName);
  route.get('/:id', placesController.getPlaceById);
  route.get('/', placesController.getPlaces);
  route.post('/', placesController.createPlaces);
};
