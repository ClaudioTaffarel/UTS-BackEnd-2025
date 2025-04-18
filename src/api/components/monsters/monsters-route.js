const express = require("express");
const monstersController = require("./monsters-controller");

const route = express.Router();

module.exports = (app) => {
  app.use("/monsters", route);

  route.get("/name/:name", monstersController.getMonsterByName);
  route.get("/:id", monstersController.getMonsterById);
  route.get("/", monstersController.getMonsters);
  route.post("/", monstersController.createMonsters);
};
