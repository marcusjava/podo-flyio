const {
  handleDuplicateKeyError,
  handleValidationError,
} = require("../utils/Errors");
const LogToSentry = require("../utils/LogSentry");

const ErrorController = (error, req, res, next) => {
  // set locals, only providing error in development

  LogToSentry(error, req);
  if (error.name === "ValidationError") {
    return (err = handleValidationError(error, res));
  }

  if (error.code && error.code == 11000) {
    return (err = handleDuplicateKeyError(error, res));
  }
  return res.status(error.status).send(error.message);
};

module.exports = ErrorController;
