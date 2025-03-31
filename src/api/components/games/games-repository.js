const { Games } = require('../../../models');

async function getGames(limit = 10, page = 0) {
  const skip = page * limit;
  return Games.find().limit(parseInt(limit)).skip(skip);
}

async function getGameById(id) {
  return Games.findById(id);
}

async function getGameByName(name) {
  return Games.findOne({ name: name });
}

async function createGames(name, description, publisher, released_date) {
  return Games.create({ name, description, publisher, released_date });
}

module.exports = {
  getGames,
  getGameById,
  getGameByName,
  createGames,
};
