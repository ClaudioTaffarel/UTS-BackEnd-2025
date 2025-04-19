const minigamesService = require("./minigames-service");
const { errorResponder, errorTypes } = require("../../../core/errors");

async function getMinigames(request, response, next) {
  try {
    const { limit, page } = request.query;
    const minigames = await minigamesService.getMinigames(limit, page);
    return response.status(200).json(minigames);
  } catch (error) {
    return next(error);
  }
}

async function getMinigameById(request, response, next) {
  try {
    const minigame = await minigamesService.getMinigameById(request.params.id);

    if (!minigame) {
      throw errorResponder(errorTypes.NOT_FOUND, "Minigame not found");
    }

    return response.status(200).json(minigame);
  } catch (error) {
    return next(error);
  }
}

async function getMinigameByName(request, response, next) {
  try {
    const { name } = request.params;
    const minigame = await minigamesService.getMinigameByName(name);

    if (!minigame) {
      throw errorResponder(errorTypes.NOT_FOUND, "Minigame not found");
    }

    return response.status(200).json(minigame);
  } catch (error) {
    return next(error);
  }
}

async function createMinigames(request, response, next) {
  try {
    const { name, game, location, reward, description } = request.body;

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, "Name is required");
    }

    if (await minigamesService.minigameNameExists(name)) {
      throw errorResponder(
        errorTypes.OBJECT_ALREADY_TAKEN,
        "Minigame already exists",
      );
    }

    if (!description) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "Description is required",
      );
    }

    const success = await minigamesService.createMinigames(
      name,
      game,
      location,
      reward,
      description,
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        "Failed to create Minigame",
      );
    }

    return response
      .status(200)
      .json({ message: "Minigame created successfully" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getMinigames,
  getMinigameById,
  getMinigameByName,
  createMinigames,
};
