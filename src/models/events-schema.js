module.exports = (db) =>
    db.model(
      'Events',
      db.Schema({
        name: String,           // nama event
        location: String,       // lokasi event
        game: String            // muncul di game yang mana
      })
    );