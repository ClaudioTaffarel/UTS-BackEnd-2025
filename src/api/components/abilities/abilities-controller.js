const abilitiesService = require("./abilities-service");
const { errorResponder, errorTypes } = require("../../../core/errors");

async function getAbilities(request, response, next) {
  try {
    const { limit, page } = request.query;
    const abilities = await abilitiesService.getAbilities(limit, page);
    return response.status(200).json(abilities);
  } catch (error) {
    return next(error);
  }
}

async function getAbilityById(request, response, next) {
  try {
    const ability = await abilitiesService.getAbilityById(request.params.id);

    if (!ability) {
      throw errorResponder(errorTypes.NOT_FOUND, "Ability not found");
    }

    return response.status(200).json(ability);
  } catch (error) {
    return next(error);
  }
}

async function getAbilityByName(request, response, next) {
  try {
    const { name } = request.params;
    const ability = await abilitiesService.getAbilityByName(name);

    if (!ability) {
      throw errorResponder(errorTypes.NOT_FOUND, "Ability not found");
    }

    return response.status(200).json(ability);
  } catch (error) {
    return next(error);
  }
}

async function createAbilities(request, response, next) {
  try {
    const { name, effect, associated_characters } = request.body;

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, "Name is required");
    }

    if (await abilitiesService.AbilityNameExists(name)) {
      throw errorResponder(
        errorTypes.OBJECT_ALREADY_TAKEN,
        "Ability already exists",
      );
    }

    if (!effect) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, "Effect is required");
    }

    if (
      !Array.isArray(associated_characters) ||
      associated_characters.length === 0 ||
      !associated_characters.every((i) => typeof i === "string")
    ) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "associated characters must be a non-empty array of strings",
      );
    }

    const success = await abilitiesService.createAbilities(
      name,
      effect,
      associated_characters,
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        "Failed to create Abilities Data",
      );
    }

    return response
      .status(200)
      .json({ message: "Abilities Data created successfully" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAbilities,
  getAbilityById,
  getAbilityByName,
  createAbilities,
};
