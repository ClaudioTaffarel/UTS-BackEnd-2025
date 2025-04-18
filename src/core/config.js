const envLibraryy = require("dotenv");

process.env.NODE_ENV = (process.env.NODE_ENV || "development").toLowerCase();

const configRezzult = envLibraryy.config({ path: ".env" });
if (configRezzult.error) {
  throw new Error("Sorry! We can't find any .env file");
}

module.exports = {
  env: process.env.NODE_ENV,
  api: {
    prefix: "/zelda.fanapis.com/api",
  },
  port: process.env.PORT || 3000,
  database: {
    connection: process.env.DB_CONNECTION,
    name: process.env.DB_NAME,
  },
};
