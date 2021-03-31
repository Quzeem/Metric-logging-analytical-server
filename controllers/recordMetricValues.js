const metricObj = require('../data/metrics');
const calculateAverage = require('../helpers/calculateAverage');

/**
 * @name recordMetricValues
 * @param {Object} req Express Request Object
 * @param {Object} res Express Response Object
 * @returns {Object} An object with a specific metric details on success
 */
module.exports = (req, res) => {
  let metric = metricObj[req.params.metric];

  if (!metric) {
    metricObj[req.params.metric] = {
      isWindowActive: false,
      metricValues: [],
      averages: [],
    };
    metric = metricObj[req.params.metric];
  }

  if (!req.body.metricValue || typeof req.body.metricValue !== 'number')
    return res.status(400).send({
      status: 'fail',
      message: 'Please provide a metric value as a number.',
    });

  if (metric.isWindowActive && metric.metricValues.length > 0) {
    metric.metricValues.push(req.body.metricValue);
  } else {
    metric.isWindowActive = true;
    metric.metricValues.push(req.body.metricValue);
    setTimeout(() => {
      metric.isWindowActive = false;
      const avgResult = calculateAverage(metric.metricValues);
      metric.averages.push(avgResult);
      metric.metricValues = [];
    }, 10000);
  }

  res.send({ status: 'success', metric });
};
