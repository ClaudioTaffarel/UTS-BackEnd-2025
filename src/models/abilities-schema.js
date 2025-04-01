module.exports = (db) =>
    db.model(
      'Abilities',
      db.Schema({
        name: String,                     // nama ability
        effect: String,                   // efek ability
        associated_characters: [String]   // karakter yang memiliki ability ini  ( data berbentuk array )
      })
    );