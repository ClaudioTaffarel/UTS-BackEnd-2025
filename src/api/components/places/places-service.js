const placesRepository = require("./places-repository");

async function getPlaces(limit, page) {
  return placesRepository.getPlaces(limit, page);
}

async function getPlaceById(id) {
  return placesRepository.getPlaceById(id);
}

async function getPlaceByName(name) {
  return placesRepository.getPlaceByName(name);
}

async function placeNameExists(name) {
  const place = await placesRepository.getPlaceByName(name);
  return !!place;
}

async function createPlaces(name, description, inhabitants) {
  return placesRepository.createPlaces(name, description, inhabitants);
}

module.exports = {
  getPlaces,
  getPlaceById,
  getPlaceByName,
  placeNameExists,
  createPlaces,
};
