const express = require("express");

const games = require("./components/games/games-route");
const staff = require("./components/staff/staff-route");
const places = require("./components/places/places-route");
const character = require("./components/characters/characters-route");
const abilites = require("./components/abilities/abilities-route");

module.exports = () => {
  const app = express.Router();

  games(app);
  staff(app);
  places(app);
  character(app);
  abilites(app);

  return app;
};
