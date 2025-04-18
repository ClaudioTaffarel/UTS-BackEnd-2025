const { Places } = require("../../../models");

async function getPlaces(limit = 20, page = 0) {
  const skip = page * limit;
  return Places.find().limit(parseInt(limit)).skip(skip);
}

async function getPlaceById(id) {
  return Places.findById(id);
}

async function getPlaceByName(name) {
  return Places.findOne({ name: name });
}

async function createPlaces(name, description, inhabitants) {
  return Places.create({ name, description, inhabitants });
}

module.exports = {
  getPlaces,
  getPlaceById,
  getPlaceByName,
  createPlaces,
};
