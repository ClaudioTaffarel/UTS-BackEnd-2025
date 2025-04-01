module.exports = (db) =>
    db.model(
      'Bosses',
      db.Schema({
        name: String,                     // nama boss
        description: String,              // deskripsi boss
        dungeon: String,                  // dia muncul di dungeon apa
        appearance: [String]              // dia muncul di game yang mana  ( data berbentuk array )
      })
    );