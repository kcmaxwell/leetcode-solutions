const uniquePaths = require('./solution');

const example1 = {
  m: 3,
  n: 7,
  output: 28,
};

const example2 = {
  m: 3,
  n: 2,
  output: 3,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(uniquePaths(example1.m, example1.n)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(uniquePaths(example2.m, example2.n)).toBe(example2.output);
  });
});
