/**
 * @name findMedian
 * @param {Array} averages Array of a metric averages
 * @returns {Number} The median from a given metric averages
 */
module.exports = (averages) => {
  if (!Array.isArray(averages) || averages.length === 0) return;
  if (averages.length === 1) return averages[0];
  const sortedAverages = averages.sort((a, b) => a - b);
  const arrLength = sortedAverages.length;
  if (arrLength % 2 !== 0) return sortedAverages[(arrLength - 1) / 2];
  return sortedAverages[arrLength / 2 - 1];
};
