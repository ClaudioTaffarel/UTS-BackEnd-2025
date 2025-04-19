const express = require("express");
const minigamesController = require("./minigames-controller");

const route = express.Router();

module.exports = (app) => {
  app.use("/minigames", route);

  route.get("/name/:name", minigamesController.getMinigameByName);
  route.get("/:id", minigamesController.getMinigameById);
  route.get("/", minigamesController.getMinigames);
  route.post("/", minigamesController.createMinigames);
};
