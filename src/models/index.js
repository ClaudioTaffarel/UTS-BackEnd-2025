const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const config = require('../core/config');

const connectionString = new URL(config.database.connection);
connectionString.pathname += config.database.name;

mongoose.connect(`${connectionString.toString()}`);

const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

const dbExports = {};
dbExports.db = db;

const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(mongoose);
    dbExports[model.modelName] = model;
  });

module.exports = dbExports;