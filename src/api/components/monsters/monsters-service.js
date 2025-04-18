const monstersRepository = require('./monsters-repository');

async function getMonsters(limit, page) {
  return monstersRepository.getMonsters(limit, page);
}

async function getMonsterById(id) {
  return monstersRepository.getMonsterById(id);
}

async function getMonsterByName(name) {
  return monstersRepository.getMonsterByName(name);
}

async function monsterNameExists(name) {
  const monster = await monstersRepository.getMonsterByName(name);
  return !!monster;
}

async function createMonsters(name, description, appearance) {
  return monstersRepository.createMonsters(name, description, appearance);
}

module.exports = {
  getMonsters,
  getMonsterById,
  getMonsterByName,
  monsterNameExists,
  createMonsters,
};
