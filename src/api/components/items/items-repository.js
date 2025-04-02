const { Items } = require('../../../models');

async function getItems(limit = 20, page = 0) {
  const skip = page * limit;
  return Items.find().limit(parseInt(limit)).skip(skip);
}

async function getItemsById(id) {
  return Items.findById(id);
}

async function getItemsByName(name) {
  return Items.findOne({ name: name });
}

async function createItems(name, description, publisher, released_date) {
  return Items.create({ name, description, publisher, released_date });
}

module.exports = {
  getItems,
  getItemsById,
  getItemsByName,
  createItems,
};
