module.exports = (db) =>
  db.model(
    "Items",
    db.Schema({
      name: String, // nama item
      description: String, // deskripsi item
      appearance: [String], // muncul di game yang mana  ( data berbentuk array )
    }),
  );
