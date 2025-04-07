const itemsRepository = require('./items-repository');

async function getItems(limit, page) {
  return itemsRepository.getitems(limit, page);
}

async function getItemsById(id) {
  return itemsRepository.getItemsById(id);
}

async function getItemsByName(name) {
  return itemsRepository.getItemsByName(name);
}

async function ItemsNameExists(name) {
  const items = await itemsRepository.getItemsByName(name);
  return !!items;
}

async function createItems(name, description, appearance) {
  return itemsRepository.createitems(name, description, appearance);
}

module.exports = {
    getItems,
    getItemsById,
    getItemsByName,
    ItemsNameExists,
    createItems,
};
