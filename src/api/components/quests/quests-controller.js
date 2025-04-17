const questsService = require("./quests-service");
const { errorResponder, errorTypes } = require("../../../core/errors");

async function getQuests(request, response, next) {
  try {
    const { limit, page } = request.query;
    const quests = await questsService.getQuests(limit, page);
    return response.status(200).json(quests);
  } catch (error) {
    return next(error);
  }
}

async function getQuestById(request, response, next) {
  try {
    const quest = await questsService.getQuestById(request.params.id);

    if (!quest) {
      throw errorResponder(errorTypes.NOT_FOUND, "Quest not found");
    }

    return response.status(200).json(quest);
  } catch (error) {
    return next(error);
  }
}

async function getQuestByName(request, response, next) {
  try {
    const { name } = request.params;
    const quest = await questsService.getQuestByName(name);

    if (!quest) {
      throw errorResponder(errorTypes.NOT_FOUND, "Quest not found");
    }

    return response.status(200).json(quest);
  } catch (error) {
    return next(error);
  }
}

async function createQuests(request, response, next) {
  try {
    const { name, objectives, rewards } = request.body;

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, "Name is required");
    }

    if (await questsService.questNameExists(name)) {
      throw errorResponder(
        errorTypes.OBJECT_ALREADY_TAKEN,
        "Quest already exists",
      );
    }

    if (!objectives) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "Objectives is required",
      );
    }

    if (
      !Array.isArray(rewards) ||
      rewards.length === 0 ||
      !rewards.every((i) => typeof i === "string")
    ) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "Rewards must be a non-empty array of strings",
      );
    }

    const success = await questsService.createQuests(name, objectives, rewards);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        "Failed to create Quests Data",
      );
    }

    return response
      .status(200)
      .json({ message: "Quests Data created successfully" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getQuests,
  getQuestById,
  getQuestByName,
  createQuests,
};
