require('dotenv').config();
const logger = require('./helpers/winstonLogger');

process.on('uncaughtException', (err) => {
  logger.info('UNCAUGHT EXCEPTION! Shutting down...');
  logger.error(`Error: ${err.name} - ${err.message}`);
  process.exit(1);
});

const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () =>
  logger.info(
    `Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`
  )
);

process.on('unhandledRejection', (err) => {
  logger.info('UNHANDLED REJECTION! Shutting down...');
  logger.error(`Error: ${err.name} - ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM RECEIVED! Shutting down...');
  server.close(() => {
    logger.info('Process terminated!');
  });
});
