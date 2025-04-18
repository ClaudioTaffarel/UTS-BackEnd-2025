module.exports = (db) =>
  db.model(
    "Quests",
    db.Schema({
      name: String, // nama quest
      objectives: String, // objektif / tujuan dari quest tersebut
      rewards: [String], // hadiah yang didapatkan player  ( data berbentuk array )
    }),
  );
