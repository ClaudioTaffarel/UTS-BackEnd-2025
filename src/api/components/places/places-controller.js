const placesService = require("./places-service");
const { errorResponder, errorTypes } = require("../../../core/errors");

async function getPlaces(request, response, next) {
  try {
    const { limit, page } = request.query;
    const places = await placesService.getPlaces(limit, page);
    return response.status(200).json(places);
  } catch (error) {
    return next(error);
  }
}

async function getPlaceById(request, response, next) {
  try {
    const place = await placesService.getPlaceById(request.params.id);

    if (!place) {
      throw errorResponder(errorTypes.NOT_FOUND, "Place not found");
    }

    return response.status(200).json(place);
  } catch (error) {
    return next(error);
  }
}

async function getPlaceByName(request, response, next) {
  try {
    const { name } = request.params;
    const place = await placesService.getPlaceByName(name);

    if (!place) {
      throw errorResponder(errorTypes.NOT_FOUND, "Place not found");
    }

    return response.status(200).json(place);
  } catch (error) {
    return next(error);
  }
}

async function createPlaces(request, response, next) {
  try {
    const { name, description, inhabitants } = request.body;

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, "Name is required");
    }

    if (await placesService.placeNameExists(name)) {
      throw errorResponder(
        errorTypes.OBJECT_ALREADY_TAKEN,
        "Place already exists",
      );
    }

    if (!description) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "Description is required",
      );
    }

    if (
      !Array.isArray(inhabitants) ||
      inhabitants.length === 0 ||
      !inhabitants.every((i) => typeof i === "string")
    ) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "Inhabitants must be a non-empty array of strings",
      );
    }

    const success = await placesService.createPlaces(
      name,
      description,
      inhabitants,
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        "Failed to create Places Data",
      );
    }

    return response
      .status(200)
      .json({ message: "Places Data created successfully" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getPlaces,
  getPlaceById,
  getPlaceByName,
  createPlaces,
};
