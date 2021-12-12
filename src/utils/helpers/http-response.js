const {
  ServerError,
  Unauthorized,
  MissingParam,
  InvalidParam,
} = require("../errors");

module.exports = class HttpResponse {
  success(body) {
    return {
      statusCode: 200,
      body,
    };
  }

  created(body) {
    return {
      statusCode: 201,
      body,
    };
  }

  badRequest(error) {
    return {
      statusCode: 400,
      body: {
        error: error.message,
      },
    };
  }

  unauthorized() {
    return {
      statusCode: 401,
      body: {
        error: new Unauthorized().message,
      },
    };
  }

  serverError() {
    return {
      statusCode: 500,
      body: {
        error: new ServerError().message,
      },
    };
  }

  missingParam() {
    return {
      statusCode: 400,
      body: {
        error: new MissingParam().message,
      },
    };
  }

  invalidParam() {
    return {
      statusCode: 400,
      body: {
        error: new InvalidParam().message,
      },
    };
  }
};
