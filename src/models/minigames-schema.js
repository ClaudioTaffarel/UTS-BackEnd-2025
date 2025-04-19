module.exports = (db) =>
  db.model(
    "Minigames",
    db.Schema({
      name: String, // nama minigames
      game: String, // nama minigames
      location: String, // lokasi minigames
      reward: [String], // daftar reward
      description: String, // deskripsi minigames
    }),
  );
