const factionsRepository = require("./games-repository");

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
  const game = await factionsRepository.getFactionByName(name);
  return !!game;
}

async function createFactions(
  name,
  type,
  description,
  publisher,
  released_date,
) {
  return factionsRepository.createFactions(
    name,
    type,
    description,
    publisher,
    released_date,
  );
}

module.exports = {
  getFactions,
  getFactionById,
  getFactionByName,
  factionNameExists,
  createFactions,
};
