const { getEvents, getEventsById, createEvents } = require('./events-repository');
const eventsRepository = require('./events-repository');

async function getEvents(limit, page) {
  return eventsRepository.getEvents(limit, page);
}

async function getEventsById(id) {
  return eventsRepository.getEventsById(id);
}

async function getEventsByName(name) {
  return eventsRepository.getEventsByName(name);
}

async function EventsNameExists(name) {
  const events = await eventsRepository.getEventsByName(name);
  return !!events;
}

async function createEvents(name, location, appearance) {
  return eventsRepository.createEvents(name, location, appearance);
}

module.exports = {
    getEvents,
    getEventsById,
    getEventsByName,
    EventsNameExists,
    createEvents,
};
