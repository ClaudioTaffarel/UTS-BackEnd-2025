const monstersService = require("./monsters-service");
const { errorResponder, errorTypes } = require("../../../core/errors");

async function getMonsters(request, response, next) {
  try {
    const { limit, page } = request.query;
    const monsters = await monstersService.getMonsters(limit, page);
    return response.status(200).json(monsters);
  } catch (error) {
    return next(error);
  }
}

async function getMonsterById(request, response, next) {
  try {
    const monster = await monstersService.getMonsterById(request.params.id);

    if (!monster) {
      throw errorResponder(errorTypes.NOT_FOUND, "Monster not found");
    }

    return response.status(200).json(monster);
  } catch (error) {
    return next(error);
  }
}

async function getMonsterByName(request, response, next) {
  try {
    const { name } = request.params;
    const monster = await monstersService.getMonsterByName(name);

    if (!monster) {
      throw errorResponder(errorTypes.NOT_FOUND, "Monster not found");
    }

    return response.status(200).json(monster);
  } catch (error) {
    return next(error);
  }
}

async function createMonsters(request, response, next) {
  try {
    const { name, description, appearance } = request.body;

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, "Name is required");
    }

    if (await monstersService.monsterNameExists(name)) {
      throw errorResponder(
        errorTypes.OBJECT_ALREADY_TAKEN,
        "Monster already exists",
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
        "Appearance must be a non-empty array of strings",
      );
    }

    const success = await monstersService.createMonsters(
      name,
      description,
      appearance,
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        "Failed to create Monsters Data",
      );
    }

    return response
      .status(200)
      .json({ message: "Monsters Data created successfully" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getMonsters,
  getMonsterById,
  getMonsterByName,
  createMonsters,
};
