const bossesRepository = require("./bosses-repository");

async function getBosses(limit, page) {
  return bossesRepository.getBosses(limit, page);
}

async function getBossById(id) {
  return bossesRepository.getBossById(id);
}

async function getBossByName(name) {
  return bossesRepository.getBossByName(name);
}

async function bossNameExists(name) {
  const boss = await bossesRepository.getBossByName(name);
  return !!boss;
}

async function createBosses(name, description, dungeon, appearance) {
  return bossesRepository.createBosses(name, description, dungeon, appearance);
}

module.exports = {
  getBosses,
  getBossById,
  getBossByName,
  bossNameExists,
  createBosses,
};
