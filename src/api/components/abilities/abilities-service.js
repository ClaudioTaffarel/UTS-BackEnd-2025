const abilitiesRepository = require('./abilities-repository');

async function getAbilities(limit, page) {
  return abilitiesRepository.getAbilities(limit, page);
}

async function getAbilitiesById(id) {
  return abilitiesRepository.getAbilityById(id);
}

async function getAbilityByName(name) {
  return abilitiesRepository.getAbilityByName(name);
}

async function AbilityNameExists(name) {
  const ability = await abilitiesRepository.getAbilityByName(name);
  return !!ability;
}

async function createAbilities(name, effect, associated_characters) {
  return abilitiesRepository.createAbilities(name, effect, associated_characters);
}

module.exports = {
    getAbilities,
    getAbilitiesById,
    getAbilityByName,
    AbilityNameExists,
    createAbilities,
};
