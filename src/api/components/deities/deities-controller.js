const deitiesService = require("./deities-service");
const { errorResponder, errorTypes } = require("../../../core/errors");

async function getDeities(request, response, next) {
  try {
    const { limit, page } = request.query;
    const deities = await deitiesService.getDeities(limit, page);
    return response.status(200).json(deities);
  } catch (error) {
    return next(error);
  }
}

async function getDeityById(request, response, next) {
  try {
    const deity = await deitiesService.getDeityById(request.params.id);

    if (!deity) {
      throw errorResponder(errorTypes.NOT_FOUND, "Deity not found");
    }

    return response.status(200).json(deity);
  } catch (error) {
    return next(error);
  }
}

async function getDeityByName(request, response, next) {
  try {
    const { name } = request.params;
    const deity = await deitiesService.getDeityByName(name);

    if (!deity) {
      throw errorResponder(errorTypes.NOT_FOUND, "Deity not found");
    }

    return response.status(200).json(deity);
  } catch (error) {
    return next(error);
  }
}

async function createDeities(request, response, next) {
  try {
    const { name, domain, symbol, first_appearance, associated_lore } =
      request.body;

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, "Name is required");
    }

    if (await deitiesService.deityNameExists(name)) {
      throw errorResponder(
        errorTypes.OBJECT_ALREADY_TAKEN,
        "Deity already exists",
      );
    }

    if (!domain) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, "Domain is required");
    }

    if (!symbol) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, "Symbol is required");
    }

    if (!first_appearance) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "First Appearance is required",
      );
    }

    if (!associated_lore) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "Associated Lore is required",
      );
    }

    const success = await deitiesService.createDeities(
      name,
      domain,
      symbol,
      first_appearance,
      associated_lore,
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        "Failed to create Deities Data",
      );
    }

    return response
      .status(200)
      .json({ message: "Deities Data created successfully" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getDeities,
  getDeityById,
  getDeityByName,
  createDeities,
};
