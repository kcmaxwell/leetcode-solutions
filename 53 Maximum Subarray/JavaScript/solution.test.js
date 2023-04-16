const maxSubArray = require('./solution');

const example1 = {
  nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
  output: 6,
};

const example2 = {
  nums: [1],
  output: 1,
};

const example3 = {
  nums: [5, 4, -1, 7, 8],
  output: 23,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(maxSubArray(example1.nums)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(maxSubArray(example2.nums)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(maxSubArray(example3.nums)).toBe(example3.output);
  });
});
