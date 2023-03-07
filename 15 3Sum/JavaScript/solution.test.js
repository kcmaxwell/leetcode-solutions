const threeSum = require('./solution');

const example1 = {
  nums: [-1, 0, 1, 2, -1, -4],
  output: [
    [-1, -1, 2],
    [-1, 0, 1],
  ],
};

const example2 = {
  nums: [0, 1, 1],
  output: [],
};

const example3 = {
  nums: [0, 0, 0],
  output: [[0, 0, 0]],
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(threeSum(example1.nums)).toStrictEqual(example1.output);
  });

  test('Passes example 2', () => {
    expect(threeSum(example2.nums)).toStrictEqual(example2.output);
  });

  test('Passes example 3', () => {
    expect(threeSum(example3.nums)).toStrictEqual(example3.output);
  });
});
