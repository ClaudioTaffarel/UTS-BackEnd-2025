const bossesService = require('./bosses-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getBosses(request, response, next) {
  try {
    const { limit, page } = request.query;
    const bosses = await bossesService.getBosses(limit, page);
    return response.status(200).json(bosses);
  } catch (error) {
    return next(error);
  }
}

async function getBossById(request, response, next) {
  try {
    const boss = await bossesService.getBossById(request.params.id);

    if (!boss) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Boss not found');
    }
    
    return response.status(200).json(boss);
  } catch (error) {
    return next(error);
  }
}

async function getBossByName(request, response, next) {
  try {
    const { name } = request.params; 
    const boss = await bossesService.getBossByName(name);

    if (!boss) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Boss not found');
    }

    return response.status(200).json(boss);
  } catch (error) {
    return next(error);
  }
}

async function createBosses(request, response, next) {
  try {
    const { 
        name,
        description,
        dungeon,
        appearance,
    } = request.body;

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    if (await bossesService.bossNameExists(name)) {
      throw errorResponder(
        errorTypes.OBJECT_ALREADY_TAKEN,
        'Boss already exists'
      );
    }

    if (!description) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Description is required');
    }

    if (!dungeon) {
        throw errorResponder(errorTypes.VALIDATION_ERROR, 'Dungeon is required');
      }

    if (!Array.isArray(appearance) || appearance.length === 0 || !appearance.every(i => typeof i === 'string')) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Appearance must be a non-empty array of strings');
    }

    const success = await bossesService.createBosses(
        name,
        description,
        dungeon,
        appearance
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create Bosses Data'
      );
    }

    return response.status(200).json({ message: 'Bosses Data created successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
    getBosses,
    getBossById,
    getBossByName,
    createBosses,
};
