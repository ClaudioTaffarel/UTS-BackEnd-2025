const factionsService = require("./factions-service");
const { errorResponder, errorTypes } = require("../../../core/errors");

async function getFactions(request, response, next) {
  try {
    const { limit, page } = request.query;
    const factions = await factionsService.getFactions(limit, page);
    return response.status(200).json(factions);
  } catch (error) {
    return next(error);
  }
}

async function getFactionById(request, response, next) {
  try {
    const faction = await factionsService.getFactionById(request.params.id);

    if (!faction) {
      throw errorResponder(errorTypes.NOT_FOUND, "faction not found");
    }

    return response.status(200).json(faction);
  } catch (error) {
    return next(error);
  }
}

async function getFactionByName(request, response, next) {
  try {
    const { name } = request.params;
    const faction = await factionsService.getFactionByName(name);

    if (!faction) {
      throw errorResponder(errorTypes.NOT_FOUND, "Faction not found");
    }

    return response.status(200).json(faction);
  } catch (error) {
    return next(error);
  }
}

async function createFactions(request, response, next) {
  try {
    const { name, type, description, notable_members, affiliated_games } =
      request.body;

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, "Name is required");
    }

    if (await factionsService.factionNameExists(name)) {
      throw errorResponder(
        errorTypes.OBJECT_ALREADY_TAKEN,
        "Faction already exists",
      );
    }

    if (!type) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, "type is required");
    }

    if (!description) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "Description is required",
      );
    }
    if (!notable_members) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "notable_members is required",
      );
    }
    if (!affiliated_games) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "affiliated_games is required",
      );
    }
    const success = await factionsService.createFactions(
      name,
      type,
      description,
      notable_members,
      affiliated_games,
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        "Failed to create Factions Data",
      );
    }

    return response
      .status(200)
      .json({ message: "Factions Data created successfully" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getFactions,
  getFactionById,
  getFactionByName,
  createFactions,
};
