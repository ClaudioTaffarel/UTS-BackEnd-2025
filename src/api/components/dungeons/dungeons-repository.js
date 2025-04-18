const { Dungeons } = require("../../../models");

async function getDungeons(limit = 20, page = 0) {
  const skip = page * limit;
  return Dungeons.find().limit(parseInt(limit)).skip(skip);
}

async function getDungeonById(id) {
  return Dungeons.findById(id);
}

async function getDungeonByName(name) {
  return Dungeons.findOne({ name: name });
}

async function createDungeons(name, description, appearance) {
  return Dungeons.create({ name, description, appearance });
}

module.exports = {
  getDungeons,
  getDungeonById,
  getDungeonByName,
  createDungeons,
};
