const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const metricRouter = require('./routes/metricRoutes');
const { globalErrorHandler, unhandledRoutes } = require('./middlewares/error');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Development environment logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// app logs
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs', 'access.log'),
  { flags: 'a' }
);
app.use(morgan('combined', { stream: accessLogStream }));

// Enable CORS
app.use(cors());

app.get('/api/v1/doc', (req, res) => {
  const docStream = fs.createReadStream(
    path.join(__dirname, 'documentation', 'metric.json')
  );
  docStream.pipe(res);
});

// Mount router
app.use('/api/v1', metricRouter);

app.use(unhandledRoutes);
app.use(globalErrorHandler);

module.exports = app;
