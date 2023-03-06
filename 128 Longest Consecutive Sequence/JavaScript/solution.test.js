const longestConsecutive = require('./solution');

const example1 = {
  nums: [100, 4, 200, 1, 3, 2],
  output: 4,
};

const example2 = {
  nums: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
  output: 9,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(longestConsecutive(example1.nums)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(longestConsecutive(example2.nums)).toBe(example2.output);
  });

  test('Handles empty nums array', () => {
    expect(longestConsecutive([])).toBe(0);
  });

  test('Returns 0 when there is no consecutive numbers', () => {
    expect(longestConsecutive([0, 5, 8, 15, 32])).toBe(0);
  });
});
