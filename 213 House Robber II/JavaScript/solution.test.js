const rob = require('./solution');

const example1 = {
  nums: [2, 3, 2],
  output: 3,
};

const example2 = {
  nums: [1, 2, 3, 1],
  output: 4,
};

const example3 = {
  nums: [1, 2, 3],
  output: 3,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(rob(example1.nums)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(rob(example2.nums)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(rob(example3.nums)).toBe(example3.output);
  });
});
