const deitiesRepository = require("./deities-repository");

async function getDeities(limit, page) {
  return deitiesRepository.getDeities(limit, page);
}

async function getDeityById(id) {
  return deitiesRepository.getDeityById(id);
}

async function getDeityByName(name) {
  return deitiesRepository.getDeityByName(name);
}

async function deityNameExists(name) {
  const deity = await deitiesRepository.getDeityByName(name);
  return !!deity;
}

async function createDeities(
  name,
  domain,
  symbol,
  first_appearance,
  associated_lore,
) {
  return deitiesRepository.createDeities(
    name,
    domain,
    symbol,
    first_appearance,
    associated_lore,
  );
}

module.exports = {
  getDeities,
  getDeityById,
  getDeityByName,
  deityNameExists,
  createDeities,
};
