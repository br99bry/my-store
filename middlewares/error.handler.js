function logErrors(err, req, res, next) {
  console.log('logErrors');
  console.log(err);
  next(err);
}

function boomErrorHandler(err, req, res, next) {
  console.log('errorHandlerBoom');
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { logErrors, boomErrorHandler, errorHandler };
