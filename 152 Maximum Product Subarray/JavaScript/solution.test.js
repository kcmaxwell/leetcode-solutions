const maxProduct = require('./solution');

const example1 = {
  nums: [2, 3, -2, 4],
  output: 6,
};

const example2 = {
  nums: [-2, 0, -1],
  output: 0,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(maxProduct(example1.nums)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(maxProduct(example2.nums)).toBe(example2.output);
  });
});
