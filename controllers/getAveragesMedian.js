const metricObj = require('../data/metrics');
const findMedian = require('../helpers/findMedian');

/**
 * @name getAveragesMedian
 * @param {Object} req Express Request Object
 * @param {Object} res Express Response Object
 * @returns {Object} An object with a median value calculated from a metric averages on success
 */
module.exports = (req, res) => {
  const metric = metricObj[req.params.metric];

  if (!metric)
    return res
      .status(404)
      .send({ status: 'fail', message: 'Metric not found.' });

  const median = findMedian(metric.averages);

  if (!median)
    return res
      .status(400)
      .send({ status: 'fail', message: 'No averages recorded yet.' });

  res.send({ median });
};
