const calculateAverage = require('../helpers/calculateAverage');

describe('calculateAverage', () => {
  test('should return undefined if input is not an array or an empty array', () => {
    const args = ['2', {}, false, null, undefined, [], 2];
    args.forEach((arg) => expect(calculateAverage(arg)).toBeUndefined());
  });

  test('should return a value if input is an array with at least one item', () => {
    const result = calculateAverage([15, 3, 8, 11, 21]);
    expect(result).toBeDefined();
  });

  test('should return 12', () => {
    const result = calculateAverage([15, 3, 8, 11, 21]);
    expect(result).toBe(12);
  });
});
