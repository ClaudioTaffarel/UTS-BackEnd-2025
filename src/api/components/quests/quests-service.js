const questsRepository = require('./quests-repository');

async function getQuests(limit, page) {
  return questsRepository.getQuests(limit, page);
}

async function getQuestById(id) {
  return questsRepository.getQuestById(id);
}

async function getQuestByName(name) {
  return questsRepository.getQuestByName(name);
}

async function questNameExists(name) {
  const quest = await questsRepository.getQuestByName(name);
  return !!quest;
}

async function createQuests(name, objectives, rewards) {
  return questsRepository.createQuests(name, objectives, rewards);
}

module.exports = {
    getQuests,
    getQuestById,
    getQuestByName,
    questNameExists,
    createQuests,
};
