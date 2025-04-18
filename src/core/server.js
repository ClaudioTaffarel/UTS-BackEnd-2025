const bodyParser = require("body-parser");
const express = require("express");

const config = require("./config");
const routes = require("../api/routes");
const { errorResponder, errorTypes } = require("./errors");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(`${config.api.prefix}`, routes());

app.use((request, response, next) =>
  next(errorResponder(errorTypes.ROUTE_NOT_FOUND, "Route not found")),
);

app.use((error, request, response, next) =>
  response.status(error.status || 500).json({
    statusCode: error.status || 500,
    error: error.code || "UNKNOWN_ERROR",
    description: error.description || "⚠️ Unknown error",
    message: error.message || "⚠️ An error has occurred",
  }),
);

module.exports = app;
