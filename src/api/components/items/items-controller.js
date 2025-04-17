const itemsService = require("./items-service");
const { errorResponder, errorTypes } = require("../../../core/errors");

async function getItems(request, response, next) {
  try {
    const { limit, page } = request.query;
    const items = await itemsService.getItems(limit, page);
    return response.status(200).json(items);
  } catch (error) {
    return next(error);
  }
}

async function getItemsById(request, response, next) {
  try {
    const items = await itemsService.getItemsById(request.params.id);

    if (!items) {
      throw errorResponder(errorTypes.NOT_FOUND, "Items not found");
    }

    return response.status(200).json(items);
  } catch (error) {
    return next(error);
  }
}

async function getItemsByName(request, response, next) {
  try {
    const { name } = request.params;
    const items = await itemsService.getItemsByName(name);

    if (!items) {
      throw errorResponder(errorTypes.NOT_FOUND, "Items not found");
    }

    return response.status(200).json(items);
  } catch (error) {
    return next(error);
  }
}

async function createItems(request, response, next) {
  try {
    const { name, description, appearance } = request.body;

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, "Name is required");
    }

    if (await itemsService.itemsNameExists(name)) {
      throw errorResponder(
        errorTypes.OBJECT_ALREADY_TAKEN,
        "Items already exists",
      );
    }

    if (!description) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "Description is required",
      );
    }

    if (
      !Array.isArray(appearance) ||
      appearance.length === 0 ||
      !appearance.every((i) => typeof i === "string")
    ) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "appearance must be a non-empty array of strings",
      );
    }

    const success = await itemsService.createItems(
      name,
      description,
      appearance,
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        "Failed to create items Data",
      );
    }

    return response
      .status(200)
      .json({ message: "Items Data created successfully" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getItems,
  getItemsById,
  getItemsByName,
  createItems,
};
