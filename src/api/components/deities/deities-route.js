const express = require("express");
const deitiesController = require("./deities-controller");

const route = express.Router();

module.exports = (app) => {
  app.use("/deities", route);

  route.get("/name/:name", deitiesController.getDeityByName);
  route.get("/:id", deitiesController.getDeityById);
  route.get("/", deitiesController.getDeities);
  route.post("/", deitiesController.createDeities);
};
