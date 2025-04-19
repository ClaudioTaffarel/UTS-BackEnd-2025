const { Deities } = require("../../../models");

async function getDeities(limit = 20, page = 0) {
  const skip = page * limit;
  return Deities.find().limit(parseInt(limit)).skip(skip);
}

async function getDeityById(id) {
  return Deities.findById(id);
}

async function getDeityByName(name) {
  return Deities.findOne({ name: name });
}

async function createDeities(
  name,
  domain,
  symbol,
  first_appearance,
  associated_lore,
) {
  return Deities.create({
    name,
    domain,
    symbol,
    first_appearance,
    associated_lore,
  });
}

module.exports = {
  getDeities,
  getDeityById,
  getDeityByName,
  createDeities,
};
