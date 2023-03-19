const findKthLargest = require('./solution');

const example1 = {
  nums: [3, 2, 1, 5, 6, 4],
  k: 2,
  output: 5,
};

const example2 = {
  nums: [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k: 4,
  output: 4,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(findKthLargest(example1.nums, example1.k)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(findKthLargest(example2.nums, example2.k)).toBe(example2.output);
  });
});
