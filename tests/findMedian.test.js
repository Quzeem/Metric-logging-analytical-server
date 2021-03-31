const findMedian = require('../helpers/findMedian');

describe('findMedian', () => {
  test('should return undefined if input is not an array or an empty array', () => {
    const args = ['2', {}, false, null, undefined, [], 10];
    args.forEach((arg) => expect(findMedian(arg)).toBeUndefined());
  });

  test('should return a value if input is an array with at least one item', () => {
    const result = findMedian([15, 3, 8, 11, 21]);
    expect(result).toBeDefined();
  });

  test('should return 15', () => {
    const result = findMedian([15]);
    expect(result).toBe(15);
  });

  test('should return 2', () => {
    const result = findMedian([3, 1, 2]);
    expect(result).toBe(2);
  });

  test('should return 7', () => {
    const result = findMedian([12, 7, 9, 3]);
    expect(result).toBe(7);
  });
});
