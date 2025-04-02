const itemsRepository = require('./items-repository');

async function getItems(limit, page) {
  return itemsRepository.getItems(limit, page);
}

async function getItemsById(id) {
  return itemsRepository.getItemsById(id);
}

async function getItemsByName(name) {
  return itemsRepository.getItemsByName(name);
}

async function itemsNameExists(name) {
  const items = await itemsRepository.getItemsByName(name);
  return !!items;
}

async function createitems(name, description, publisher, released_date) {
  return itemsRepository.createitems(name, description, publisher, released_date);
}

module.exports = {
  getItems,
  getItemsById,
  getItemsByName,
  itemsNameExists,
  createitems,
};
