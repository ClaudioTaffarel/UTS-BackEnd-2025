const { Minigames } = require("../../../models");

async function getMinigames(limit = 20, page = 0) {
  const skip = page * limit;
  return Minigames.find().limit(parseInt(limit)).skip(skip);
}

async function getMinigameById(id) {
  return Minigames.findById(id);
}

async function getMinigameByName(name) {
  return Minigames.findOne({ name: name });
}

async function createMinigames(name, game, location, reward, description) {
  return Minigames.create({ name, game, location, reward, description });
}

module.exports = {
  getMinigames,
  getMinigameById,
  getMinigameByName,
  createMinigames,
};
