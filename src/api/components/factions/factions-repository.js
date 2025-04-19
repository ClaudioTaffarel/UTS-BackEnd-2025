const { Factions } = require("../../../models");

async function getFactions(limit = 20, page = 0) {
  const skip = page * limit;
  return Factions.find().limit(parseInt(limit)).skip(skip);
}

async function getFactionById(id) {
  return Factions.findById(id);
}

async function getFactionByName(name) {
  return Factions.findOne({ name: name });
}

async function createFactions(
  name,
  type,
  description,
  notable_members,
  affiliated_games,
) {
  return Factions.create({
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
