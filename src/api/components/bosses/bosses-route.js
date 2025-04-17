const express = require("express");
const bossesController = require("./bosses-controller");

const route = express.Router();

module.exports = (app) => {
  app.use("/bosses", route);

  route.get("/name/:name", bossesController.getBossByName);
  route.get("/:id", bossesController.getBossById);
  route.get("/", bossesController.getBosses);
  route.post("/", bossesController.createBosses);
};
