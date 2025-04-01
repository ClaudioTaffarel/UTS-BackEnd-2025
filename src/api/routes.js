const express = require('express');

const games = require('./components/games/games-route');
const staff = require('./components/staff/staff-route');
const places = require('./components/places/places-route');

module.exports = () => {
  const app = express.Router();

  games(app);
  staff(app);
  places(app);
  
  return app;
};