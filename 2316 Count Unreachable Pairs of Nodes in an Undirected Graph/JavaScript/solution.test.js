const countPairs = require('./solution');

const example1 = {
  n: 3,
  edges: [
    [0, 1],
    [0, 2],
    [1, 2],
  ],
  output: 0,
};

const example2 = {
  n: 7,
  edges: [
    [0, 2],
    [0, 5],
    [2, 4],
    [1, 6],
    [5, 4],
  ],
  output: 14,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(countPairs(example1.n, example1.edges)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(countPairs(example2.n, example2.edges)).toBe(example2.output);
  });
});
