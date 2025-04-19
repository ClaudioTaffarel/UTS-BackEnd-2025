const express = require("express");

const games = require("./components/games/games-route");
const staff = require("./components/staff/staff-route");
const places = require("./components/places/places-route");
const character = require("./components/characters/characters-route");
const abilites = require("./components/abilities/abilities-route");
const dungeons = require("./components/dungeons/dungeons-route");
const quests = require("./components/quests/quests-route");
const monsters = require("./components/monsters/monsters-route");
const bosses = require("./components/bosses/bosses-route");
const events = require("./components/events/events-route");
const items = require("./components/items/items-route");
const minigames = require("./components/minigames/minigames.route");
const deities = require("./components/deities/deities-route");
const factions = require("./components/factions/factions-route");
module.exports = () => {
  const app = express.Router();

  games(app);
  staff(app);
  places(app);
  character(app);
  abilites(app);
  dungeons(app);
  quests(app);
  monsters(app);
  bosses(app);
  events(app);
  items(app);
  minigames(app);
  deities(app);
  factions(app);

  return app;
};
