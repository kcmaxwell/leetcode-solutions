const numEnclaves = require('./solution');

const example1 = {
  grid: [
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  output: 3,
};

const example2 = {
  grid: [
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ],
  output: 0,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(numEnclaves(example1.grid)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(numEnclaves(example2.grid)).toBe(example2.output);
  });
});
