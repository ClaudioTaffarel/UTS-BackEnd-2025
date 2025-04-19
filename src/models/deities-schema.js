module.exports = (db) =>
  db.model(
    "Deities",
    db.Schema({
      name: String, // nama deity
      domain: String, // domain sang deity
      symbol: String, // simbol yang melambangkan deity
      first_appearance: String, //game kemunculan pertama
      associated_lore: String, // lore dari deity tersebut
    }),
  );
