const fs = require("fs");
const mongoose = require("mongoose");
const path = require("path");
const config = require("../core/config");

const connectionString = new URL(config.database.connection);
connectionString.pathname += config.database.name;

mongoose.connect(`${connectionString.toString()}`);

const db = mongoose.connection;
db.once("open", () => {
  console.log("✅😎 Server successfully connected to MongoDB");
});

db.on("error", (err) => {
  console.error("❌😭 MongoDB connection error:", err.message || err);
});

const modelz = {};
modelz.db = db;

const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.endsWith(".js"),
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(mongoose);
    modelz[model.modelName] = model;
  });

module.exports = modelz;
