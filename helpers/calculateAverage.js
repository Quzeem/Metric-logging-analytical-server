/**
 * @name calculateAverage
 * @param {Array} metricValues Array of a metric values
 * @returns {Number} The average value calculated from a given metric values
 */
module.exports = (metricValues) => {
  // Return undefined if the argument passed in is not an array or an empty array
  if (!Array.isArray(metricValues) || metricValues.length === 0) return;

  // Calculate an average rounded to the nearest integer
  const average = Math.round(
    metricValues.reduce((acc, val) => acc + val) / metricValues.length
  );

  return average;
};
