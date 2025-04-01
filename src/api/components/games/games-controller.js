const gamesService = require('./games-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getGames(request, response, next) {
  try {
    const { limit, page } = request.query;
    const games = await gamesService.getGames(limit, page);
    return response.status(200).json(games);
  } catch (error) {
    return next(error);
  }
}

async function getGameById(request, response, next) {
  try {
    const game = await gamesService.getGameById(request.params.id);

    if (!game) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Game not found');
    }
    
    return response.status(200).json(game);
  } catch (error) {
    return next(error);
  }
}

async function getGameByName(request, response, next) {
  try {
    const { name } = request.params; 
    const game = await gamesService.getGameByName(name);

    if (!game) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Game not found');
    }

    return response.status(200).json(game);
  } catch (error) {
    return next(error);
  }
}

async function createGames(request, response, next) {
  try {
    const { 
        name,
        description,
        publisher,
        released_date,
    } = request.body;

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    if (await gamesService.gameNameExists(name)) {
      throw errorResponder(
        errorTypes.OBJECT_ALREADY_TAKEN,
        'Game already exists'
      );
    }

    if (!description) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Description is required');
    }

    if (!publisher) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Publisher Name is required');
    }

    if (!released_date) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Released Date is required');
    }

    const success = await gamesService.createGames(
        name,
        description,
        publisher,
        released_date
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create Games Data'
      );
    }

    return response.status(200).json({ message: 'Games Data created successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getGames,
  getGameById,
  getGameByName,
  createGames,
};
