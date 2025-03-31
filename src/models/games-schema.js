module.exports = (db) =>
    db.model(
      'Games',
      db.Schema({
        title: String,
        description: String,
        publisher: String,
        released_date: String
      })
    );