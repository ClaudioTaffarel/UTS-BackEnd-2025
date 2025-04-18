const dungeonsRepository = require("./dungeons-repository");

async function getDungeons(limit, page) {
  return dungeonsRepository.getDungeons(limit, page);
}

async function getDungeonById(id) {
  return dungeonsRepository.getDungeonById(id);
}

async function getDungeonByName(name) {
  return dungeonsRepository.getDungeonByName(name);
}

async function dungeonNameExists(name) {
  const dungeon = await dungeonsRepository.getDungeonByName(name);
  return !!dungeon;
}

async function createDungeons(name, description, appearance) {
  return dungeonsRepository.createDungeons(name, description, appearance);
}

module.exports = {
  getDungeons,
  getDungeonById,
  getDungeonByName,
  dungeonNameExists,
  createDungeons,
};
