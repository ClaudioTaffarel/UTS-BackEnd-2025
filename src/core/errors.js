const errorTypes = {

  SERVER: {
    description: "⚠️ Server error!!",
    status: 500,
    code: "SERVER_ERROR",
  },

  EXTERNAL: {
    description: "⚠️ External service error!!",
    status: 500,
    code: "EXTERNAL_ERROR",
  },

  BAD_REQUEST: {
    description: "⚠️ Bad request error!!",
    status: 400,
    code: "BAD_REQUEST_ERROR",
  },

  EMPTY_BODY: {
    description: "⚠️ Please fill the body!!",
    status: 400,
    code: "EMPTY_BODY_ERROR",
  },

  VALIDATION: {
    description: "⚠️ Invalid request!!",
    status: 400,
    code: "VALIDATION_ERROR",
  },

  ALERT: {
    message: "⚠️ Operation forbidden by security policy!!",
    status: 418,
    code: "ALERT_ERROR",
  },

  BAD_ROLE: {
    description: "⚠️ Bad role!!",
    status: 403,
    code: "BAD_ROLE_ERROR",
  },

  OBJECT_ALREADY_TAKEN: {
    description:
      "⚠️ This object has already been created before, try use another!",
    status: 409,
    code: "OBJECT_ALREADY_TAKEN_ERROR",
  },

  DECRYPTION: {
    description: "⚠️ Decryption error!",
    status: 500,
    code: "DECRYPTION_ERROR",
  },

  ROUTE_NOT_FOUND: {
    description: "⚠️ Route not found!",
    status: 404,
    code: "ROUTE_NOT_FOUND_ERROR",
  },

  NOT_FOUND: {
    description: "⚠️ Empty response, not found!",
    status: 404,
    code: "NOT_FOUND_ERROR",
  },

  UNPROCESSABLE_ENTITY: {
    description: "⚠️ Unprocessable entity!",
    status: 422,
    code: "UNPROCESSABLE_ENTITY_ERROR",
  },

  DB_DUPLICATE_CONFLICT: {
    description: "⚠️ Duplicate conflict. Resource already exists!",
    status: 409,
    code: "DB_DUPLICATE_CONFLICT_ERROR",
  },

  DB_NOTNULL_CONFLICT: {
    description: "⚠️ Not null conflict!",
    status: 500,
    code: "DB_NOTNULL_CONFLICT_ERROR",
  },

  DB: {
    description: "⚠️ Database error occurred!",
    status: 500,
    code: "DB_ERROR",
  },
};

const errorResponder = (errorType, message = "") => {
  const errzzz = new Error(message);

  if (errorType) {
    errzzz.status = errorType.status || 500;
    errzzz.description = errorType.description || "⚠️ THIS ERROR IS UNKNOWN!";
    errzzz.code = errorType.code || "UNKNOWN_ERROR";
  }

  return errzzz;
};

module.exports = {
  errorTypes,
  errorResponder,
};
