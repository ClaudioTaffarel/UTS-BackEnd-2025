const minigamesRepository = require("./minigames-repository");

async function getMinigames(limit, page) {
  return minigamesRepository.getMinigames(limit, page);
}

async function getMinigameById(id) {
  return minigamesRepository.getMinigameById(id);
}

async function getMinigameByName(name) {
  return minigamesRepository.getMinigameByName(name);
}

async function minigameNameExists(name) {
  const minigame = await minigamesRepository.getMinigameByName(name);
  return !!minigame;
}

async function createMinigames(name, game, location, reward, description) {
  return minigamesRepository.createMinigames(
    name,
    game,
    location,
    reward,
    description,
  );
}

module.exports = {
  getMinigames,
  getMinigameById,
  getMinigameByName,
  minigameNameExists,
  createMinigames,
};
