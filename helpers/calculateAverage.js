/**
 * @name calculateAverage
 * @param {Array} metricValues Array of a metric values
 * @returns {Number} The average calculated from a given metric values
 */
module.exports = (metricValues) => {
  if (!Array.isArray(metricValues) || metricValues.length === 0) return;
  const average = Math.round(
    metricValues.reduce((acc, val) => acc + val) / metricValues.length
  );
  return average;
};
