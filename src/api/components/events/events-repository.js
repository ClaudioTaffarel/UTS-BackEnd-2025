const { Events } = require('../../../models');

async function getEvents(limit = 20, page = 0) {
  const skip = page * limit;
  return Events.find().limit(parseInt(limit)).skip(skip);
}

async function getEventsById(id) {
  return Events.findById(id);
}

async function getEventsByName(name) {
  return Events.findOne({ name: name });
}

async function createEvents(name, location, appearance) {
  return Events.create({ name, location, appearance });
}

module.exports = {
    getEvents,
    getEventsById,
    getEventsByName,
    createEvents,
};
