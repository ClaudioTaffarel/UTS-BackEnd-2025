const express = require('express');

const games = require('./components/games/games-route');
const staff = require('./components/staff/staff-route');

module.exports = () => {
  const app = express.Router();

  games(app);
  staff(app);

  return app;
};