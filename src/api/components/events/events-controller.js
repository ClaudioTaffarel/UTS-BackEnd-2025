const eventsService = require('./events-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getEvents(request, response, next) {
  try {
    const { limit, page } = request.query;
    const events = await eventsService.getEvents(limit, page);
    return response.status(200).json(events);
  } catch (error) {
    return next(error);
  }
}

async function getEventsById(request, response, next) {
  try {
    const events = await eventsService.getEventsById(request.params.id);

    if (!events) {
      throw errorResponder(errorTypes.NOT_FOUND, 'events not found');
    }
    
    return response.status(200).json(events);
  } catch (error) {
    return next(error);
  }
}

async function getEventsByName(request, response, next) {
  try {
    const { name } = request.params; 
    const events = await eventsService.getEventsByName(name);

    if (!events) {
      throw errorResponder(errorTypes.NOT_FOUND, 'events not found');
    }

    return response.status(200).json(events);
  } catch (error) {
    return next(error);
  }
}

async function createEvents(request, response, next) {
  try {
    const { 
        name,
        location,
        appearance,
    } = request.body;

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    if (await eventsService.EventsNameExists(name)) {
      throw errorResponder(
        errorTypes.OBJECT_ALREADY_TAKEN,
        'Events already exists'
      );
    }

    if (!location) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Location is required');
    }

    if (!Array.isArray(appearance) || appearance.length === 0 || !appearance.every(i => typeof i === 'string')) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Appearance must be a non-empty array of strings');
    }

    const success = await eventsService.createEvents(
        name,
        location,
        appearance
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create events Data'
      );
    }

    return response.status(200).json({ message: 'Events Data created successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getEvents,
  getEventsById,
  getEventsByName,
  createEvents,
};
