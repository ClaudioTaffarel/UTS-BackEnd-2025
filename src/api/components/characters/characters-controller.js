const charactersService = require('./characters-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getCharacters(request, response, next) {
  try {
    const { limit, page } = request.query;
    const characters = await charactersService.getCharacters(limit, page);
    return response.status(200).json(characters);
  } catch (error) {
    return next(error);
  }
}

async function getCharacterById(request, response, next) {
  try {
    const character = await charactersService.getCharacterById(request.params.id);

    if (!character) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Character not found');
    }
    
    return response.status(200).json(character);
  } catch (error) {
    return next(error);
  }
}

async function getCharacterByName(request, response, next) {
  try {
    const { name } = request.params; 
    const character = await charactersService.getCharacterByName(name);

    if (!character) {
      throw errorResponder(errorTypes.NOT_FOUND, 'character not found');
    }

    return response.status(200).json(character);
  } catch (error) {
    return next(error);
  }
}

async function createCharacters(request, response, next) {
  try {
    const { 
        name,
        description,
        gender,
        race,
    } = request.body;

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    if (await charactersService.characterNameExists(name)) {
      throw errorResponder(
        errorTypes.OBJECT_ALREADY_TAKEN,
        'Character already exists'
      );
    }

    if (!description) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Description is required');
    }

    if (!gender) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Gender is required');
    }

    if (!race) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Race is required');
    }

    const success = await charactersService.createCharacters(
        name,
        description,
        gender,
        race
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create Characters Data'
      );
    }

    return response.status(200).json({ message: 'Character Data created successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getCharacters,
  getCharacterById,
  getCharacterByName,
  createCharacters,
};
