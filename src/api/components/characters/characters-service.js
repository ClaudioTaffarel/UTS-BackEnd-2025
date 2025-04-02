const charactersRepository = require('./characters-repository');

async function getCharacters(limit, page) {
  return charactersRepository.getCharacters(limit, page);
}

async function getCharacterById(id) {
  return charactersRepository.getCharacterById(id);
}

async function getCharacterByName(name) {
  return charactersRepository.getCharacterByName(name);
}

async function characterNameExists(name) {
  const character = await charactersRepository.getCharacterByName(name);
  return !!character;
}

async function createCharacters(name, description, gender, race) {
  return charactersRepository.createCharacters(name, description, gender, race);
}

module.exports = {
  getCharacters,
  getCharacterById,
  getCharacterByName,
  characterNameExists,
  createCharacters,
};
