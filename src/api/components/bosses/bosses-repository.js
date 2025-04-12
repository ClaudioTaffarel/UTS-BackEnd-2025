const { Bosses } = require('../../../models');

async function getBosses(limit = 20, page = 0) {
  const skip = page * limit;
  return Bosses.find().limit(parseInt(limit)).skip(skip);
}

async function getBossById(id) {
  return Bosses.findById(id);
}

async function getBossByName(name) {
  return Bosses.findOne({ name: name });
}

async function createBosses(name, description, dungeon, appearance) {
  return Bosses.create({ name, description, dungeon, appearance });
}

module.exports = {
    getBosses,
    getBossById,
    getBossByName,
    createBosses,
};
