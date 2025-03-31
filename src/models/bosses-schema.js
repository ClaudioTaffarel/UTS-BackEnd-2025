module.exports = (db) =>
    db.model(
      'Bosses',
      db.Schema({
        name: String,               // nama boss
        description: String,        // deskripsi boss
        appearance: String          // dia muncul di game yang mana
      })
    );