const closedIsland = require('./solution');

const example1 = {
  grid: [
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0],
  ],
  output: 2,
};

const example2 = {
  grid: [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
  ],
  output: 1,
};

const example3 = {
  grid: [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ],
  output: 2,
};

describe('Test solution', () => {
  test('Passes example 1', () => {
    expect(closedIsland(example1.grid)).toBe(example1.output);
  });

  test('Passes example 2', () => {
    expect(closedIsland(example2.grid)).toBe(example2.output);
  });

  test('Passes example 3', () => {
    expect(closedIsland(example3.grid)).toBe(example3.output);
  });
});
