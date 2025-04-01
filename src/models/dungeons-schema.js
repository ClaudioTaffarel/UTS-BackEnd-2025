module.exports = (db) =>
    db.model(
      'Dungeons',
      db.Schema({
        name: String,                     // nama dungeon
        description: String,              // deskripsi 
        appearance: [String]              // muncul di game yang mana  ( data berbentuk array )
      })  
    );