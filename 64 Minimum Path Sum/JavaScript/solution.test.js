const minPathSum = require('./solution');

const example1 = {
  grid: [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ],
  output: 7,
};

const example2 = {
  grid: [
    [1, 2, 3],
    [4, 5, 6],
  ],
  output: 12,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(minPathSum(example1.grid)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(minPathSum(example2.grid)).toBe(example2.output);
  });
});
