module.exports = (db) =>
    db.model(
      'Staff',
      db.Schema({
        name: String,           // nama staff
        worked_on: String,      // bagian apa yang ia kerjakan
        position: String        // dia kerja sebagai apa?
      })
    );