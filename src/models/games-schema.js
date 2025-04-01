module.exports = (db) =>
    db.model(
      'Games',
      db.Schema({
        name: String,                     // nama game
        description: String,              // deskripsi game
        publisher: String,                // pihak yang mem-publish game
        released_date: String             // tanggal release
      })
    );