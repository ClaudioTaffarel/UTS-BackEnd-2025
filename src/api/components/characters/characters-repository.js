const { Characters } = require('../../../models');

async function getCharacters(limit = 20, page = 0) {
  const skip = page * limit;
  return Characters.find().limit(parseInt(limit)).skip(skip);
}

async function getCharacterById(id) {
  return Characters.findById(id);
}

async function getCharacterByName(name) {
  return Characters.findOne({ name: name });
}

async function createCharacters(name, description, gender, race) {
  return Characters.create({ name, description, gender, race});
}

module.exports = {
  getCharacters,
  getCharacterById,
  getCharacterByName,
  createCharacters,
};
