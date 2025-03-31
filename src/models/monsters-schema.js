module.exports = (db) =>
    db.model(
      'Monsters',
      db.Schema({
        name: String,             // nama monster
        description: String,      // deskripsi monster
        appearance: String        // muncul di game yang mana
      })
    );