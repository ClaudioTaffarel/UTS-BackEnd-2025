const express = require("express");
const eventsController = require("./events-controller");

const route = express.Router();

module.exports = (app) => {
  app.use("/events", route);

  route.get("/name/:name", eventsController.getEventsByName);
  route.get("/:id", eventsController.getEventsById);
  route.get("/", eventsController.getEvents);
  route.post("/", eventsController.createEvents);
};
