const minScore = require('./solution');

const example1 = {
  n: 4,
  roads: [
    [1, 2, 9],
    [2, 3, 6],
    [2, 4, 5],
    [1, 4, 7],
  ],
  output: 5,
};

const example2 = {
  n: 4,
  roads: [
    [1, 2, 2],
    [1, 3, 4],
    [3, 4, 7],
  ],
  output: 2,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(minScore(example1.n, example1.roads)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(minScore(example2.n, example2.roads)).toBe(example2.output);
  });
});
