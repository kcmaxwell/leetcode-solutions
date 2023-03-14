const findMin = require('./solution');

const example1 = {
  nums: [3, 4, 5, 1, 2],
  output: 1,
};

const example2 = {
  nums: [4, 5, 6, 7, 0, 1, 2],
  output: 0,
};

const example3 = {
  nums: [11, 13, 15, 17],
  output: 11,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(findMin(example1.nums)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(findMin(example2.nums)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(findMin(example3.nums)).toBe(example3.output);
  });
});
