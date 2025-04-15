const { Abilities } = require("../../../models");

async function getAbilities(limit = 20, page = 0) {
  const skip = page * limit;
  return Abilities.find().limit(parseInt(limit)).skip(skip);
}

async function getAbilityById(id) {
  return Abilities.findById(id);
}

async function getAbilityByName(name) {
  return Abilities.findOne({ name: name });
}

async function createAbilities(name, effect, associated_characters) {
  return Abilities.create({ name, effect, associated_characters });
}

module.exports = {
  getAbilities,
  getAbilityById,
  getAbilityByName,
  createAbilities,
};
