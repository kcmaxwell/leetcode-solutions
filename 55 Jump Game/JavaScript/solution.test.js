const canJump = require('./solution');

const example1 = {
  nums: [2, 3, 1, 1, 4],
  output: true,
};

const example2 = {
  nums: [3, 2, 1, 0, 4],
  output: false,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(canJump(example1.nums)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(canJump(example2.nums)).toBe(example2.output);
  });
});
