const express = require("express");
const factionsController = require("./factions-controller");

const route = express.Router();

module.exports = (app) => {
  app.use("/factions", route);

  route.get("/name/:name", factionsController.getFactionByName);
  route.get("/:id", factionsController.getFactionById);
  route.get("/", factionsController.getFactions);
  route.post("/", factionsController.createFactions);
};
