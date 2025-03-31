module.exports = (db) =>
    db.model(
      'Items',
      db.Schema({
        name: String,           // nama item
        description: String,    // deskripsi item
        games: String           // muncul di game yang mana
      })
    );