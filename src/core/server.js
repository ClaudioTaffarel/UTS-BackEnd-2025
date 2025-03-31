const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const config = require('./config');
const routes = require('../api/routes');
const { errorResponder, errorTypes } = require('./errors');

const app = express();

// Useful if behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc).
app.enable('trust proxy');

app.use(express.json());

// Enable cross origin resource sharing to all origins by default
app.use(cors());

// Let you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it
app.use(require('method-override')());

// Middleware that transforms the raw string of request.body into JSON
app.use(bodyParser.json());

// Needed to use multipart/form-data for file uploads
app.use(bodyParser.urlencoded({ extended: false }));

// API routes
app.use(`${config.api.prefix}`, routes());

// Handle 404 route
app.use((request, response, next) =>
  next(errorResponder(errorTypes.ROUTE_NOT_FOUND, 'Route not found'))
);

// Send error response to the caller
// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) =>
  response.status(error.status || 500).json({
    statusCode: error.status || 500,
    error: error.code || 'UNKNOWN_ERROR',
    description: error.description || 'Unknown error',
    message: error.message || 'An error has occurred',
  })
);

module.exports = app;