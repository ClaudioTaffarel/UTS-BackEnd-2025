const { Quests } = require('../../../models');

async function getQuests(limit = 20, page = 0) {
  const skip = page * limit;
  return Quests.find().limit(parseInt(limit)).skip(skip);
}

async function getQuestById(id) {
  return Quests.findById(id);
}

async function getQuestByName(name) {
  return Quests.findOne({ name: name });
}

async function createQuests(name, objective, rewards) {
  return Quests.create({ name, objective, rewards });
}

module.exports = {
    getQuests,
    getQuestById,
    getQuestByName,
    createQuests,
};
