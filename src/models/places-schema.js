module.exports = (db) =>
  db.model(
    "Places",
    db.Schema({
      name: String, // nama tempat
      description: String, // deskripsi tempat
      inhabitants: [String], // siapa saja yang ada di tempat tersebut  ( data berbentuk array )
    }),
  );
