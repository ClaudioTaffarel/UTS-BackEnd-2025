const { Monsters } = require('../../../models');

async function getMonsters(limit = 20, page = 0) {
  const skip = page * limit;
  return Monsters.find().limit(parseInt(limit)).skip(skip);
}

async function getMonsterById(id) {
  return Monsters.findById(id);
}

async function getMonsterByName(name) {
  return Monsters.findOne({ name: name });
}

async function createMonsters(name, description, appearance) {
  return Monsters.create({ name, description, appearance });
}

module.exports = {
    getMonsters,
    getMonsterById,
    getMonsterByName,
    createMonsters,
};
