const express = require('express');

const games = require('./components/games/games-route');

module.exports = () => {
  const app = express.Router();

  games(app);

  return app;
};