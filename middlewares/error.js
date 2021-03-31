const logger = require('../helpers/winstonLogger');

module.exports.globalErrorHandler = (err, req, res, next) => {
  // Log error
  logger.error(err);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const message = `${statusCode}`.startsWith('4')
    ? err.message
    : 'Something went wrong!';

  res.status(statusCode).send({
    status: false,
    statusCode,
    message,
  });
};

module.exports.unhandledRoutes = (req, res, next) => {
  const error = new Error(
    `${req.method} request to: ${req.originalUrl} not available on this server!`
  );
  res.status(404);
  next(error);
};
