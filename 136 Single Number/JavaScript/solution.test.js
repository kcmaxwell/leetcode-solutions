const singleNumber = require('./solution');

const example1 = {
  nums: [2, 2, 1],
  output: 1,
};

const example2 = {
  nums: [4, 1, 2, 1, 2],
  output: 4,
};

const example3 = {
  nums: [1],
  output: 1,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(singleNumber(example1.nums)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(singleNumber(example2.nums)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(singleNumber(example3.nums)).toBe(example3.output);
  });
});
