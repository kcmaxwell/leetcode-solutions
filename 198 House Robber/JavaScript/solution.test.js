const rob = require('./solution');

const example1 = {
  nums: [1, 2, 3, 1],
  output: 4,
};

const example2 = {
  nums: [2, 7, 9, 3, 1],
  output: 12,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(rob(example1.nums)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(rob(example2.nums)).toBe(example2.output);
  });
});
