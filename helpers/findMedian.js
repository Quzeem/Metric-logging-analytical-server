/**
 * @name findMedian
 * @param {Array} averages Array of a metric averages
 * @returns {Number} The median from a given metric averages
 */
module.exports = (averages) => {
  // Return undefined if the argument passed in is not an array or an empty array
  if (!Array.isArray(averages) || averages.length === 0) return;

  if (averages.length === 1) return averages[0];

  // Sort the averages array in an increasing order
  const sortedAverages = averages.sort((a, b) => a - b);

  const arrLength = sortedAverages.length;

  // For even number of items
  if (arrLength % 2 !== 0) return sortedAverages[(arrLength - 1) / 2];

  // For odd number of items
  return sortedAverages[arrLength / 2 - 1];
};
