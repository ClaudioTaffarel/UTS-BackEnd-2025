const factionsRepository = require("./factions-repository");

async function getFactions(limit, page) {
  return factionsRepository.getFactions(limit, page);
}

async function getFactionById(id) {
  return factionsRepository.getFactionById(id);
}

async function getFactionByName(name) {
  return factionsRepository.getFactionByName(name);
}

async function factionNameExists(name) {
  const faction = await factionsRepository.getFactionByName(name);
  return !!faction;
}

async function createFactions(
  name,
  type,
  description,
  notable_members,
  affiliated_games,
) {
  return factionsRepository.createFactions(
    name,
    type,
    description,
    notable_members,
    affiliated_games,
  );
}

module.exports = {
  getFactions,
  getFactionById,
  getFactionByName,
  factionNameExists,
  createFactions,
};
