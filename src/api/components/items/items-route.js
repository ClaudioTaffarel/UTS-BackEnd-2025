const express = require("express");
const itemsController = require("./items-controller");

const route = express.Router();

module.exports = (app) => {
  app.use("/items", route);

  route.get("/name/:name", itemsController.getItemsByName);
  route.get("/:id", itemsController.getItemsById);
  route.get("/", itemsController.getItems);
  route.post("/", itemsController.createItems);
};
