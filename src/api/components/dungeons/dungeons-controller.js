const dungeonsService = require("./dungeons-service");
const { errorResponder, errorTypes } = require("../../../core/errors");

async function getDungeons(request, response, next) {
  try {
    const { limit, page } = request.query;
    const dungeons = await dungeonsService.getDungeons(limit, page);
    return response.status(200).json(dungeons);
  } catch (error) {
    return next(error);
  }
}

async function getDungeonById(request, response, next) {
  try {
    const dungeon = await dungeonsService.getDungeonById(request.params.id);

    if (!dungeon) {
      throw errorResponder(errorTypes.NOT_FOUND, "Dungeon not found");
    }

    return response.status(200).json(dungeon);
  } catch (error) {
    return next(error);
  }
}

async function getDungeonByName(request, response, next) {
  try {
    const { name } = request.params;
    const dungeon = await dungeonsService.getDungeonByName(name);

    if (!dungeon) {
      throw errorResponder(errorTypes.NOT_FOUND, "Dungeon not found");
    }

    return response.status(200).json(dungeon);
  } catch (error) {
    return next(error);
  }
}

async function createDungeons(request, response, next) {
  try {
    const { name, description, appearance } = request.body;

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, "Name is required");
    }

    if (await dungeonsService.dungeonNameExists(name)) {
      throw errorResponder(
        errorTypes.OBJECT_ALREADY_TAKEN,
        "Dungeon already exists",
      );
    }

    if (!description) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "Description is required",
      );
    }

    const success = await dungeonsService.createDungeons(
      name,
      description,
      appearance,
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        "Failed to create Dungeons Data",
      );
    }

    return response
      .status(200)
      .json({ message: "Dungeons Data created successfully" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getDungeons,
  getDungeonById,
  getDungeonByName,
  createDungeons,
};
