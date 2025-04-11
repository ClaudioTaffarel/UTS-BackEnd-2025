const gamesRepository = require("./games-repository");

async function getGames(limit, page) {
  return gamesRepository.getGames(limit, page);
}

async function getGameById(id) {
  return gamesRepository.getGameById(id);
}

async function getGameByName(name) {
  return gamesRepository.getGameByName(name);
}

async function gameNameExists(name) {
  const game = await gamesRepository.getGameByName(name);
  return !!game;
}

async function createGames(name, description, publisher, released_date) {
  return gamesRepository.createGames(
    name,
    description,
    publisher,
    released_date,
  );
}

module.exports = {
  getGames,
  getGameById,
  getGameByName,
  gameNameExists,
  createGames,
};
