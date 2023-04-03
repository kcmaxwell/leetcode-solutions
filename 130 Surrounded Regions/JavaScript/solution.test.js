const solve = require('./solution');

const example1 = {
  board: [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ],
  output: [
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X'],
  ],
};

const example2 = {
  board: [['X']],
  output: [['X']],
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(solve(example1.board)).toStrictEqual(example1.output);
  });

  test('Passes example 2', () => {
    expect(solve(example2.board)).toStrictEqual(example2.output);
  });
});
