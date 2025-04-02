const express = require('express');

const games = require('./components/games/games-route');
const staff = require('./components/staff/staff-route');
const places = require('./components/places/places-route');
const dungeons = require('./components/dungeons/dungeons-route');
const quests = require('./components/quests/quests-route');

module.exports = () => {
  const app = express.Router();

  games(app);
  staff(app);
  places(app);
  dungeons(app);
  quests(app)
  
  return app;
};