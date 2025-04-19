const { factions } = require("../../../models");

async function getFactions(limit = 20, page = 0) {
  const skip = page * limit;
  return factions.find().limit(parseInt(limit)).skip(skip);
}

async function getFactionById(id) {
  return factions.findById(id);
}

async function getFactionByName(name) {
  return factions.findOne({ name: name });
}

async function createFactions(
  name,
  type,
  description,
  notable_members,
  affiliated_games,
) {
  return factions.create({
    name,
    type,
    description,
    notable_members,
    affiliated_games,
  });
}

module.exports = {
  getFactions,
  getFactionById,
  getFactionByName,
  createFactions,
};
