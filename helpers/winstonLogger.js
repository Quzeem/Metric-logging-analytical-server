const winston = require('winston');
require('dotenv').config();

// Create date object for log timestamp
const newDate = new Date();

// General logger setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {
    timeStamp: `${newDate.toLocaleString()} ${newDate.getMilliseconds()}`,
    env: process.env.NODE_ENV,
  },
  transports: [
    // Write all logs with level `error` and below to `error.log`
    new winston.transports.File({
      dirname: 'logs',
      filename: 'error.log',
      level: 'error',
    }),
    // Write all logs with level `info` and below to `combined.log`
    new winston.transports.File({ dirname: 'logs', filename: 'combined.log' }),
  ],
});

// log to the console when not in production, with the format:
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    })
  );
}

module.exports = logger;
