const express = require("express");
const staffController = require("./staff-controller");

const route = express.Router();

module.exports = (app) => {
  app.use("/staff", route);

  route.get("/name/:name", staffController.getStaffByName);
  route.get("/:id", staffController.getStaffById);
  route.get("/", staffController.getStaffs);
  route.post("/", staffController.createStaff);
};
