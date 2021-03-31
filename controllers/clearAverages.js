const metricObj = require('../data/metrics');

/**
 * @name clearAverages
 * @param {Object} req Express Request Object
 * @param {Object} res Express Response Object
 * @returns No content
 */
module.exports = (req, res) => {
  const metric = metricObj[req.params.metric];

  if (!metric)
    return res
      .status(404)
      .send({ status: 'fail', message: 'Metric not found.' });

  metric.averages = [];

  res.sendStatus(204);
};
