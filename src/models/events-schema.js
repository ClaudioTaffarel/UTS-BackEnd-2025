module.exports = (db) =>
  db.model(
    "Events",
    db.Schema({
      name: String, // nama event
      location: String, // lokasi event
      appearance: [String], // muncul di game yang mana  ( data berbentuk array )
    }),
  );
