module.exports = (db) =>
  db.model(
    "factions",
    db.Schema({
      name: String, //nama factions
      type: String, // tipe factions
      description: String, // deskripsi factions
      notable_members: [String], //member yang berkesan
      affiliated_games: [String], //permainan yang berafiliasi
    }),
  );
