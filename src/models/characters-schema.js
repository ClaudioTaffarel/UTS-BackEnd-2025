module.exports = (db) =>
  db.model(
    "Characters",
    db.Schema({
      name: String, // nama karakter
      description: String, // deskripsi karakter
      gender: String, // jenis kelamin
      race: String, // ras karakter
    }),
  );
