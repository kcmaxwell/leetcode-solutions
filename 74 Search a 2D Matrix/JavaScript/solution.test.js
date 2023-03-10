const searchMatrix = require('./solution');

const example1 = {
  matrix: [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target: 3,
  output: true,
};

const example2 = {
  matrix: [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target: 13,
  output: false,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(searchMatrix(example1.matrix, example1.target)).toBe(
      example1.output
    );
  });

  test('Passes example 2', () => {
    expect(searchMatrix(example2.matrix, example2.target)).toBe(
      example2.output
    );
  });
});
