class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

const handleDuplicateKeyError = (err, resp) => {
  const field = Object.keys(err.keyValue)[0];
  const code = 409;
  const error = `${field} já cadastrado.`;
  resp.status(code).send({ path: field, message: error });
};

const handleValidationError = (error, resp) => {
  let code = 400;
  let errors = Object.values(error.errors).map((el) => el.message);
  let fields = Object.values(error.errors).map((el) => el.path);

  resp.status(code).send({ path: fields[0], message: errors[0] });
};

//Aqui vem os outros erros

module.exports = {
  ErrorHandler,
  handleError,
  handleDuplicateKeyError,
  handleValidationError,
};
