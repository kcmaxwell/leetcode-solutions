const zeroFilledSubarray = require('./solution');

const example1 = {
  nums: [1, 3, 0, 0, 2, 0, 0, 4],
  output: 6,
};

const example2 = {
  nums: [0, 0, 0, 2, 0, 0],
  output: 9,
};

const example3 = {
  nums: [2, 10, 2019],
  output: 0,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(zeroFilledSubarray(example1.nums)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(zeroFilledSubarray(example2.nums)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(zeroFilledSubarray(example3.nums)).toBe(example3.output);
  });
});
